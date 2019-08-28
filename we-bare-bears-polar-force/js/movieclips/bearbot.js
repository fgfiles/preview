
var bearbot = {
	"bearbot": {
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
						classname: "bearbot_idle",
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
						classname: "bearbot_attack",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 20,
						classname: "bearbot_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 27,
						classname: "bearbot_hurt",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 34,
						classname: "bearbot_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 35,
						to: 41,
						classname: "bearbot_wreck",
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
	"bearbot_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 21,
		labels: {},
		layers: [
			{
				name: "tail_x",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -73.15, ty: -39.5},
						transform: [-73.15, -39.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 19,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.043, c: -0.043, d: 0.999, tx: -72, ty: -44.95},
						transform: [-72, -44.95, 1, 1, -0.043, 0.043, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -73.15, ty: -39.5},
						transform: [-73.15, -39.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear_2_x",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 1, b: -0.018, c: 0.018, d: 1, tx: -15.8, ty: -201.25},
						transform: [-15.8, -201.25, 1, 1, 0.018, -0.018, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 19,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 1.001, b: 0.025, c: 0.034, d: 1, tx: -7.95, ty: -199.1},
						transform: [-7.95, -199.1, 1.001, 1, 0.034, 0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 1, b: -0.018, c: 0.018, d: 1, tx: -15.8, ty: -201.25},
						transform: [-15.8, -201.25, 1, 1, 0.018, -0.018, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "oruga_walk",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 15.55, ty: -27.7},
						transform: [15.55, -27.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 19,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 15.55, ty: -27.7},
						transform: [15.55, -27.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 15.55, ty: -27.7},
						transform: [15.55, -27.7, 1, 1, 0, 0, 0],
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
						to: 9,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.173, c: 0.173, d: 0.985, tx: -47.15, ty: -200.05},
						transform: [-47.15, -200.05, 1, 1, 0.174, -0.174, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 19,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.984, b: -0.131, c: 0.19, d: 0.991, tx: -39.35, ty: -199.25},
						transform: [-39.35, -199.25, 0.992, 1.009, 0.189, -0.132, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.173, c: 0.173, d: 0.985, tx: -47.15, ty: -200.05},
						transform: [-47.15, -200.05, 1, 1, 0.174, -0.174, NaN],
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
						to: 9,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -13.9, ty: -112.1},
						transform: [-13.9, -112.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 19,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.043, c: -0.043, d: 0.999, tx: -9.7, ty: -109.95},
						transform: [-9.7, -109.95, 1, 1, -0.043, 0.043, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -13.9, ty: -112.1},
						transform: [-13.9, -112.1, 1, 1, 0, 0, 0],
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
						to: 9,
						classname: "_bearbot_turin_eye",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: -32.45, ty: -145.65},
						transform: [-32.45, -145.65, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 19,
						classname: "_bearbot_turin_eye",
						instancename: "",
						matrix: {a: 0.998, b: 0.056, c: -0.056, d: 0.998, tx: -26.8, ty: -144.3},
						transform: [-26.8, -144.3, 1, 1, -0.056, 0.056, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_bearbot_turin_eye",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: -32.45, ty: -145.65},
						transform: [-32.45, -145.65, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "pants_x",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6, ty: -3.65},
						transform: [-6, -3.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 19,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.043, c: -0.043, d: 0.999, tx: -6.45, ty: -3.7},
						transform: [-6.45, -3.7, 1, 1, -0.043, 0.043, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6, ty: -3.65},
						transform: [-6, -3.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "oruga_walk",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -34.4, ty: 13.85},
						transform: [-34.4, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 19,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -34.4, ty: 13.85},
						transform: [-34.4, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -34.4, ty: 13.85},
						transform: [-34.4, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eyebrow_x",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.963, b: 0.271, c: -0.271, d: 0.963, tx: -31.15, ty: -177.75},
						transform: [-31.15, -177.75, 1, 1, -0.274, 0.274, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 19,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.929, b: 0.369, c: -0.369, d: 0.929, tx: -23.85, ty: -173.85},
						transform: [-23.85, -173.85, 1, 1, -0.378, 0.378, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.963, b: 0.271, c: -0.271, d: 0.963, tx: -31.15, ty: -177.75},
						transform: [-31.15, -177.75, 1, 1, -0.274, 0.274, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hocico_down_x",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 48.5, ty: -105.2},
						transform: [48.5, -105.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 19,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.043, c: -0.043, d: 0.999, tx: 52.75, ty: -101.2},
						transform: [52.75, -101.2, 1, 1, -0.043, 0.043, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 48.5, ty: -105.2},
						transform: [48.5, -105.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hocico_up_x",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 42.3, ty: -141},
						transform: [42.3, -141, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 19,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.043, c: -0.043, d: 0.999, tx: 47.5, ty: -138.5},
						transform: [47.5, -138.5, 1, 1, -0.043, 0.043, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 42.3, ty: -141},
						transform: [42.3, -141, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"bearbot_attack": {
		type: "movieclip",
		fps: 30,
		totalFrames: 24,
		labels: {},
		layers: [
			{
				name: "tail_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 1, b: -0.001, c: 0.001, d: 1, tx: -74.3, ty: -39.8},
						transform: [-74.3, -39.8, 1, 1, 0.001, -0.001, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.467], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 1, b: -0.008, c: 0.008, d: 1, tx: -75.95, ty: -40.25},
						transform: [-75.95, -40.25, 1, 1, 0.008, -0.008, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.807, 0.4], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 1, b: 0.003, c: -0.003, d: 1, tx: -70.1, ty: -48.8},
						transform: [-70.1, -48.8, 1, 1, -0.003, 0.003, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.193, 0.435], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 1, b: -0.01, c: 0.01, d: 1, tx: -70.1, ty: -47.05},
						transform: [-70.1, -47.05, 1, 1, 0.01, -0.01, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.833, 0.48], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 15,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 1, b: 0.003, c: -0.003, d: 1, tx: -70.1, ty: -48.8},
						transform: [-70.1, -48.8, 1, 1, -0.003, 0.003, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 19,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 1, b: 0.003, c: -0.003, d: 1, tx: -70.1, ty: -48.8},
						transform: [-70.1, -48.8, 1, 1, -0.003, 0.003, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 22,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 1, b: -0.017, c: 0.017, d: 1, tx: -73.5, ty: -41.15},
						transform: [-73.5, -41.15, 1, 1, 0.017, -0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0], [0.474, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -73.15, ty: -39.5},
						transform: [-73.15, -39.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 1, b: -0.018, c: 0.018, d: 1, tx: -17.45, ty: -201.75},
						transform: [-17.45, -201.75, 1, 1, 0.018, -0.018, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.467], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 1, b: -0.025, c: 0.025, d: 1, tx: -19.85, ty: -202.45},
						transform: [-19.85, -202.45, 1, 1, 0.025, -0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.807, 0.4], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.085, c: -0.026, d: 1, tx: 3.05, ty: -198.8},
						transform: [3.05, -198.8, 1.001, 1, -0.026, 0.085, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.193, 0.435], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.073, c: -0.134, d: 0.991, tx: 0.75, ty: -198.95},
						transform: [0.75, -198.95, 1.001, 1, -0.135, 0.073, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.833, 0.48], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 15,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.085, c: -0.026, d: 1, tx: 3.05, ty: -198.8},
						transform: [3.05, -198.8, 1.001, 1, -0.026, 0.085, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 19,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.085, c: -0.026, d: 1, tx: 3.05, ty: -198.8},
						transform: [3.05, -198.8, 1.001, 1, -0.026, 0.085, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 22,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 0.994, b: 0.109, c: -0.109, d: 0.994, tx: -18.85, ty: -201.05},
						transform: [-18.85, -201.05, 1, 1, -0.11, 0.11, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0], [0.474, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 1, b: -0.018, c: 0.018, d: 1, tx: -15.8, ty: -201.25},
						transform: [-15.8, -201.25, 1, 1, 0.018, -0.018, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "oruga_walk",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.8, ty: -27.7},
						transform: [14.8, -27.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.467], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 13.75, ty: -27.7},
						transform: [13.75, -27.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.807, 0.4], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.05, d: 1, tx: 14.6, ty: -27.7},
						transform: [14.6, -27.7, 1, 1.001, 0.05, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.193, 0.435], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.066, d: 1, tx: 16.9, ty: -27.7},
						transform: [16.9, -27.7, 1, 1.002, -0.066, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.833, 0.48], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 15,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 15.55, ty: -27.7},
						transform: [15.55, -27.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 19,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 15.55, ty: -27.7},
						transform: [15.55, -27.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 22,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 15.55, ty: -27.7},
						transform: [15.55, -27.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0], [0.474, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 15.55, ty: -27.7},
						transform: [15.55, -27.7, 1, 1, 0, 0, 0],
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
						to: 0,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.984, b: -0.174, c: 0.174, d: 0.984, tx: -48.8, ty: -200.4},
						transform: [-48.8, -200.4, 0.999, 0.999, 0.175, -0.175, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.467], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.984, b: -0.181, c: 0.181, d: 0.984, tx: -51.2, ty: -201},
						transform: [-51.2, -201, 1, 1, 0.182, -0.182, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.807, 0.4], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.99, b: -0.071, c: 0.13, d: 1.001, tx: -28.25, ty: -200.85},
						transform: [-28.25, -200.85, 0.992, 1.009, 0.129, -0.072, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.193, 0.435], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.989, b: -0.083, c: 0.043, d: 1.008, tx: -30.4, ty: -200.6},
						transform: [-30.4, -200.6, 0.992, 1.009, 0.042, -0.084, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.833, 0.48], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 15,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.99, b: -0.071, c: 0.13, d: 1.001, tx: -28.25, ty: -200.85},
						transform: [-28.25, -200.85, 0.992, 1.009, 0.129, -0.072, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 19,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.99, b: -0.071, c: 0.13, d: 1.001, tx: -28.25, ty: -200.85},
						transform: [-28.25, -200.85, 0.992, 1.009, 0.129, -0.072, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 22,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.064, c: 0.064, d: 0.998, tx: -50.2, ty: -199.3},
						transform: [-50.2, -199.3, 1, 1, 0.064, -0.064, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0], [0.474, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.173, c: 0.173, d: 0.985, tx: -47.15, ty: -200.05},
						transform: [-47.15, -200.05, 1, 1, 0.174, -0.174, NaN],
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
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 1, b: -0.001, c: 0.001, d: 1, tx: -15.3, ty: -112.6},
						transform: [-15.3, -112.6, 1, 1, 0.001, -0.001, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.467], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 1, b: -0.008, c: 0.008, d: 1, tx: -17.25, ty: -113.3},
						transform: [-17.25, -113.3, 1, 1, 0.008, -0.008, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.807, 0.4], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.103, c: -0.103, d: 0.995, tx: -4.05, ty: -109.9},
						transform: [-4.05, -109.9, 1, 1, -0.103, 0.103, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.193, 0.435], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 0.996, b: 0.091, c: -0.091, d: 0.996, tx: -5.15, ty: -109.95},
						transform: [-5.15, -109.95, 1, 1, -0.091, 0.091, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.833, 0.48], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 15,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.103, c: -0.103, d: 0.995, tx: -4.05, ty: -109.9},
						transform: [-4.05, -109.9, 1, 1, -0.103, 0.103, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 19,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.103, c: -0.103, d: 0.995, tx: -4.05, ty: -109.9},
						transform: [-4.05, -109.9, 1, 1, -0.103, 0.103, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 22,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 1, b: -0.017, c: 0.017, d: 1, tx: -15.5, ty: -111.95},
						transform: [-15.5, -111.95, 1, 1, 0.017, -0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0], [0.474, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -13.9, ty: -112.1},
						transform: [-13.9, -112.1, 1, 1, 0, 0, 0],
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
						classname: "_bearbot_turin_eye",
						instancename: "",
						matrix: {a: 1, b: 0.009, c: -0.009, d: 1, tx: -33.95, ty: -146.1},
						transform: [-33.95, -146.1, 1, 1, -0.009, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.467], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_turin_eye",
						instancename: "",
						matrix: {a: 1, b: 0.006, c: -0.006, d: 1, tx: -36.05, ty: -146.7},
						transform: [-36.05, -146.7, 1, 1, -0.006, 0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.807, 0.4], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_bearbot_turin_eye",
						instancename: "",
						matrix: {a: 0.993, b: 0.116, c: -0.116, d: 0.993, tx: -19.05, ty: -145.25},
						transform: [-19.05, -145.25, 1, 1, -0.117, 0.117, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.193, 0.435], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_bearbot_turin_eye",
						instancename: "",
						matrix: {a: 0.995, b: 0.104, c: -0.104, d: 0.995, tx: -20.55, ty: -145.15},
						transform: [-20.55, -145.15, 1, 1, -0.104, 0.104, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.833, 0.48], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 15,
						classname: "_bearbot_turin_eye",
						instancename: "",
						matrix: {a: 0.993, b: 0.116, c: -0.116, d: 0.993, tx: -19.05, ty: -145.25},
						transform: [-19.05, -145.25, 1, 1, -0.117, 0.117, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 19,
						classname: "_bearbot_turin_eye",
						instancename: "",
						matrix: {a: 0.993, b: 0.116, c: -0.116, d: 0.993, tx: -19.05, ty: -145.25},
						transform: [-19.05, -145.25, 1, 1, -0.117, 0.117, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 22,
						classname: "_bearbot_turin_eye",
						instancename: "",
						matrix: {a: 1, b: -0.003, c: 0.003, d: 1, tx: -34.6, ty: -145.15},
						transform: [-34.6, -145.15, 1, 1, 0.003, -0.003, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0], [0.474, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_bearbot_turin_eye",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: -32.45, ty: -145.65},
						transform: [-32.45, -145.65, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "pants_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 1, b: -0.001, c: 0.001, d: 1, tx: -6.85, ty: -3.65},
						transform: [-6.85, -3.65, 1, 1, 0.001, -0.001, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.467], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 1, b: -0.008, c: 0.008, d: 1, tx: -8.05, ty: -3.55},
						transform: [-8.05, -3.55, 1, 1, 0.008, -0.008, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.807, 0.4], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.103, c: -0.103, d: 0.995, tx: -7.2, ty: -3.65},
						transform: [-7.2, -3.65, 1, 1, -0.103, 0.103, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.193, 0.435], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 0.996, b: 0.091, c: -0.091, d: 0.996, tx: -6.95, ty: -3.7},
						transform: [-6.95, -3.7, 1, 1, -0.091, 0.091, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.833, 0.48], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 15,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.103, c: -0.103, d: 0.995, tx: -7.2, ty: -3.65},
						transform: [-7.2, -3.65, 1, 1, -0.103, 0.103, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 19,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.103, c: -0.103, d: 0.995, tx: -7.2, ty: -3.65},
						transform: [-7.2, -3.65, 1, 1, -0.103, 0.103, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 22,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 1, b: -0.017, c: 0.017, d: 1, tx: -5.8, ty: -3.65},
						transform: [-5.8, -3.65, 1, 1, 0.017, -0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0], [0.474, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6, ty: -3.65},
						transform: [-6, -3.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "oruga_walk",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -35.15, ty: 13.85},
						transform: [-35.15, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.467], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -36.2, ty: 13.85},
						transform: [-36.2, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.807, 0.4], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.055, d: 1, tx: -35.45, ty: 13.85},
						transform: [-35.45, 13.85, 1, 1.001, 0.055, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.193, 0.435], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.066, d: 1, tx: -33.05, ty: 13.85},
						transform: [-33.05, 13.85, 1, 1.002, -0.066, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.833, 0.48], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 15,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -34.4, ty: 13.85},
						transform: [-34.4, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 19,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -34.4, ty: 13.85},
						transform: [-34.4, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 22,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -34.4, ty: 13.85},
						transform: [-34.4, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0], [0.474, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -34.4, ty: 13.85},
						transform: [-34.4, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eyebrow_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.981, b: 0.192, c: -0.192, d: 0.981, tx: -32.75, ty: -178.25},
						transform: [-32.75, -178.25, 0.999, 0.999, -0.193, 0.193, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.467], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.079, c: -0.079, d: 0.997, tx: -34.95, ty: -178.8},
						transform: [-34.95, -178.8, 1, 1, -0.08, 0.08, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.807, 0.4], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.878, b: 0.479, c: -0.479, d: 0.878, tx: -10.25, ty: -170.9},
						transform: [-10.25, -170.9, 1, 1, -0.499, 0.499, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.193, 0.435], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.884, b: 0.468, c: -0.468, d: 0.884, tx: -12.1, ty: -170.9},
						transform: [-12.1, -170.9, 1, 1, -0.487, 0.487, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.833, 0.48], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 15,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.878, b: 0.479, c: -0.479, d: 0.878, tx: -10.25, ty: -170.9},
						transform: [-10.25, -170.9, 1, 1, -0.499, 0.499, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 19,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.878, b: 0.479, c: -0.479, d: 0.878, tx: -10.25, ty: -170.9},
						transform: [-10.25, -170.9, 1, 1, -0.499, 0.499, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 22,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.967, b: 0.255, c: -0.255, d: 0.967, tx: -33.8, ty: -177.3},
						transform: [-33.8, -177.3, 1, 1, -0.258, 0.258, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0], [0.474, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.963, b: 0.271, c: -0.271, d: 0.963, tx: -31.15, ty: -177.75},
						transform: [-31.15, -177.75, 1, 1, -0.274, 0.274, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hocico_down_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 1, b: -0.001, c: 0.001, d: 1, tx: 47.15, ty: -106.6},
						transform: [47.15, -106.6, 1, 1, 0.001, -0.001, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.467], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 1, b: -0.008, c: 0.008, d: 1, tx: 45.15, ty: -108.7},
						transform: [45.15, -108.7, 1, 1, 0.008, -0.008, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.807, 0.4], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.103, c: -0.103, d: 0.995, tx: 59.9, ty: -75.75},
						transform: [59.9, -75.75, 1, 1, -0.103, 0.103, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.193, 0.435], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 0.996, b: 0.091, c: -0.091, d: 0.996, tx: 58.55, ty: -80.35},
						transform: [58.55, -80.35, 1, 1, -0.091, 0.091, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.833, 0.48], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.103, c: -0.103, d: 0.995, tx: 59.9, ty: -75.75},
						transform: [59.9, -75.75, 1, 1, -0.103, 0.103, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 15,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.103, c: -0.103, d: 0.995, tx: 59.9, ty: -75.75},
						transform: [59.9, -75.75, 1, 1, -0.103, 0.103, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.811, 0.555], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 19,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.103, c: -0.103, d: 0.995, tx: 59.15, ty: -72.5},
						transform: [59.15, -72.5, 1, 1, -0.103, 0.103, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 22,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 1, b: -0.017, c: 0.017, d: 1, tx: 47, ty: -108.15},
						transform: [47, -108.15, 1, 1, 0.017, -0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0], [0.474, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 48.5, ty: -105.2},
						transform: [48.5, -105.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "stick_1_x",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 6,
						classname: "_bearbot_stick_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 104.9, ty: -110.9},
						transform: [104.9, -110.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_bearbot_stick_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 104.9, ty: -110.9},
						transform: [104.9, -110.9, 1, 1, 0, 0, 0],
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
						classname: "_bearbot_stick_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 104.9, ty: -110.9},
						transform: [104.9, -110.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 15,
						classname: "_bearbot_stick_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 104.9, ty: -110.9},
						transform: [104.9, -110.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.811, 0.555], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_bearbot_stick_1_x",
						instancename: "",
						matrix: {a: 0.432, b: 0, c: 0, d: 1, tx: 67.3, ty: -110.9},
						transform: [67.3, -110.9, 0.432, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.486, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 22,
					},
					{
						from: 23,
						to: 23,
					},
				]
			},
			{
				name: "fist_x",
				keys: [
					{
						from: 0,
						to: 2,
					},
					{
						from: 3,
						to: 3,
						classname: "_bearbot_fist_x",
						instancename: "",
						matrix: {a: 0.534, b: 0, c: 0, d: 0.534, tx: 54.95, ty: -118.25},
						transform: [54.95, -118.25, 0.534, 0.534, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 6,
						classname: "_bearbot_fist_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 195.05, ty: -111.5},
						transform: [195.05, -111.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.213, 0.452], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_bearbot_fist_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 190.55, ty: -111.5},
						transform: [190.55, -111.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.76, 0.507], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_bearbot_fist_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 195.05, ty: -111.5},
						transform: [195.05, -111.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 15,
						classname: "_bearbot_fist_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 195.05, ty: -111.5},
						transform: [195.05, -111.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.811, 0.555], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_bearbot_fist_x",
						instancename: "",
						matrix: {a: 0.908, b: 0, c: 0, d: 1, tx: 118.1, ty: -111.5},
						transform: [118.1, -111.5, 0.908, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.486, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 22,
					},
					{
						from: 23,
						to: 23,
					},
				]
			},
			{
				name: "hocico_up_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 1, b: -0.001, c: 0.001, d: 1, tx: 41, ty: -140.95},
						transform: [41, -140.95, 1, 1, 0.001, -0.001, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.467], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 1, b: -0.008, c: 0.008, d: 1, tx: 39.1, ty: -140.85},
						transform: [39.1, -140.85, 1, 1, 0.008, -0.008, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.807, 0.4], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.103, c: -0.103, d: 0.995, tx: 52.45, ty: -155.65},
						transform: [52.45, -155.65, 1, 1, -0.103, 0.103, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.193, 0.435], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 0.996, b: 0.091, c: -0.091, d: 0.996, tx: 51.8, ty: -151.95},
						transform: [51.8, -151.95, 1, 1, -0.091, 0.091, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.833, 0.48], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.103, c: -0.103, d: 0.995, tx: 52.45, ty: -155.65},
						transform: [52.45, -155.65, 1, 1, -0.103, 0.103, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 15,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.103, c: -0.103, d: 0.995, tx: 52.45, ty: -155.65},
						transform: [52.45, -155.65, 1, 1, -0.103, 0.103, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.811, 0.555], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 19,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.103, c: -0.103, d: 0.995, tx: 52.1, ty: -159.95},
						transform: [52.1, -159.95, 1, 1, -0.103, 0.103, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 22,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 1, b: -0.017, c: 0.017, d: 1, tx: 40.5, ty: -139.95},
						transform: [40.5, -139.95, 1, 1, 0.017, -0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0], [0.474, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 42.3, ty: -141},
						transform: [42.3, -141, 1, 1, 0, 0, 0],
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
						to: 6,
						classname: "_bearbot_fx_x",
						instancename: "",
						matrix: {a: 1.12, b: 0, c: 0, d: 1, tx: 213, ty: -111.55},
						transform: [213, -111.55, 1.12, 1, 0, 0, 0],
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
						classname: "_bearbot_fx_x",
						instancename: "",
						matrix: {a: 0.589, b: 0, c: 0, d: 1, tx: 226.7, ty: -111.55},
						transform: [226.7, -111.55, 0.589, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 23,
					},
				]
			},
			{
				name: "hitbox",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 7,
						classname: "_bearbot_boundingbox",
						instancename: "hitbox",
						matrix: {a: 0.97, b: 0, c: 0, d: 0.669, tx: 193.45, ty: -112.45},
						transform: [193.45, -112.45, 0.97, 0.669, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 23,
					},
				]
			},
		]
	},
	"bearbot_walk": {
		type: "movieclip",
		fps: 30,
		totalFrames: 64,
		labels: {loop: {from:21, to:40}, },
		layers: [
			{
				name: "tail_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -73.15, ty: -39.5},
						transform: [-73.15, -39.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 12,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -73.15, ty: -39.5},
						transform: [-73.15, -39.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 22,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.081, c: -0.081, d: 0.997, tx: -71.9, ty: -44.5},
						transform: [-71.9, -44.5, 1, 1, -0.081, 0.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 32,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -73.15, ty: -39.5},
						transform: [-73.15, -39.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 42,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.081, c: -0.081, d: 0.997, tx: -71.9, ty: -44.5},
						transform: [-71.9, -44.5, 1, 1, -0.081, 0.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 43,
						to: 52,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -73.15, ty: -39.5},
						transform: [-73.15, -39.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 62,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.081, c: -0.081, d: 0.997, tx: -71.9, ty: -44.5},
						transform: [-71.9, -44.5, 1, 1, -0.081, 0.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -73.15, ty: -39.5},
						transform: [-73.15, -39.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 1, b: -0.018, c: 0.018, d: 1, tx: -15.8, ty: -201.25},
						transform: [-15.8, -201.25, 1, 1, 0.018, -0.018, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 10,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 1, b: -0.018, c: 0.018, d: 1, tx: -15.8, ty: -201.25},
						transform: [-15.8, -201.25, 1, 1, 0.018, -0.018, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 20,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.064, c: -0.004, d: 1, tx: 0.3, ty: -194.85},
						transform: [0.3, -194.85, 1.001, 1, -0.004, 0.064, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 30,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 1, b: -0.018, c: 0.018, d: 1, tx: -15.8, ty: -201.25},
						transform: [-15.8, -201.25, 1, 1, 0.018, -0.018, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 40,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.064, c: -0.004, d: 1, tx: 0.3, ty: -194.85},
						transform: [0.3, -194.85, 1.001, 1, -0.004, 0.064, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 50,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 1, b: -0.018, c: 0.018, d: 1, tx: -15.8, ty: -201.25},
						transform: [-15.8, -201.25, 1, 1, 0.018, -0.018, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 51,
						to: 60,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.064, c: -0.004, d: 1, tx: 0.3, ty: -194.85},
						transform: [0.3, -194.85, 1.001, 1, -0.004, 0.064, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 61,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 1, b: -0.018, c: 0.018, d: 1, tx: -15.8, ty: -201.25},
						transform: [-15.8, -201.25, 1, 1, 0.018, -0.018, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "oruga_walk",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_oruga_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 15.55, ty: -27.7},
						transform: [15.55, -27.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 10,
						classname: "_bearbot_turin_oruga_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 15.55, ty: -27.7},
						transform: [15.55, -27.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 20,
						classname: "_bearbot_turin_oruga_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 15.55, ty: -27.7},
						transform: [15.55, -27.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 30,
						classname: "_bearbot_turin_oruga_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 15.55, ty: -27.7},
						transform: [15.55, -27.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 40,
						classname: "_bearbot_turin_oruga_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 15.55, ty: -27.7},
						transform: [15.55, -27.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 50,
						classname: "_bearbot_turin_oruga_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 15.55, ty: -27.7},
						transform: [15.55, -27.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 51,
						to: 60,
						classname: "_bearbot_turin_oruga_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 15.55, ty: -27.7},
						transform: [15.55, -27.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 61,
						classname: "_bearbot_turin_oruga_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 15.55, ty: -27.7},
						transform: [15.55, -27.7, 1, 1, 0, 0, 0],
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
						to: 0,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.173, c: 0.173, d: 0.985, tx: -47.15, ty: -200.05},
						transform: [-47.15, -200.05, 1, 1, 0.174, -0.174, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 10,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.173, c: 0.173, d: 0.985, tx: -47.15, ty: -200.05},
						transform: [-47.15, -200.05, 1, 1, 0.174, -0.174, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 20,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.988, b: -0.093, c: 0.151, d: 0.998, tx: -31.1, ty: -195.8},
						transform: [-31.1, -195.8, 0.992, 1.009, 0.151, -0.094, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 30,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.173, c: 0.173, d: 0.985, tx: -47.15, ty: -200.05},
						transform: [-47.15, -200.05, 1, 1, 0.174, -0.174, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 40,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.988, b: -0.093, c: 0.151, d: 0.998, tx: -31.1, ty: -195.8},
						transform: [-31.1, -195.8, 0.992, 1.009, 0.151, -0.094, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 50,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.173, c: 0.173, d: 0.985, tx: -47.15, ty: -200.05},
						transform: [-47.15, -200.05, 1, 1, 0.174, -0.174, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 51,
						to: 60,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.988, b: -0.093, c: 0.151, d: 0.998, tx: -31.1, ty: -195.8},
						transform: [-31.1, -195.8, 0.992, 1.009, 0.151, -0.094, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 61,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.173, c: 0.173, d: 0.985, tx: -47.15, ty: -200.05},
						transform: [-47.15, -200.05, 1, 1, 0.174, -0.174, NaN],
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
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -13.9, ty: -112.1},
						transform: [-13.9, -112.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 10,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -13.9, ty: -112.1},
						transform: [-13.9, -112.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 20,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.081, c: -0.081, d: 0.997, tx: -4.9, ty: -105.4},
						transform: [-4.9, -105.4, 1, 1, -0.081, 0.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 30,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -13.9, ty: -112.1},
						transform: [-13.9, -112.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 40,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.081, c: -0.081, d: 0.997, tx: -4.9, ty: -105.4},
						transform: [-4.9, -105.4, 1, 1, -0.081, 0.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 50,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -13.9, ty: -112.1},
						transform: [-13.9, -112.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 51,
						to: 60,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.081, c: -0.081, d: 0.997, tx: -4.9, ty: -105.4},
						transform: [-4.9, -105.4, 1, 1, -0.081, 0.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 61,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -13.9, ty: -112.1},
						transform: [-13.9, -112.1, 1, 1, 0, 0, 0],
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
						classname: "_bearbot_turin_eye",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: -32.45, ty: -145.65},
						transform: [-32.45, -145.65, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 10,
						classname: "_bearbot_turin_eye",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: -32.45, ty: -145.65},
						transform: [-32.45, -145.65, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 20,
						classname: "_bearbot_turin_eye",
						instancename: "",
						matrix: {a: 0.995, b: 0.095, c: -0.095, d: 0.995, tx: -20.7, ty: -140.4},
						transform: [-20.7, -140.4, 1, 1, -0.095, 0.095, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 30,
						classname: "_bearbot_turin_eye",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: -32.45, ty: -145.65},
						transform: [-32.45, -145.65, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 40,
						classname: "_bearbot_turin_eye",
						instancename: "",
						matrix: {a: 0.995, b: 0.095, c: -0.095, d: 0.995, tx: -20.7, ty: -140.4},
						transform: [-20.7, -140.4, 1, 1, -0.095, 0.095, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 50,
						classname: "_bearbot_turin_eye",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: -32.45, ty: -145.65},
						transform: [-32.45, -145.65, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 51,
						to: 60,
						classname: "_bearbot_turin_eye",
						instancename: "",
						matrix: {a: 0.995, b: 0.095, c: -0.095, d: 0.995, tx: -20.7, ty: -140.4},
						transform: [-20.7, -140.4, 1, 1, -0.095, 0.095, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 61,
						classname: "_bearbot_turin_eye",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: -32.45, ty: -145.65},
						transform: [-32.45, -145.65, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "pants_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6, ty: -3.65},
						transform: [-6, -3.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 12,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6, ty: -3.65},
						transform: [-6, -3.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 22,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.081, c: -0.081, d: 0.997, tx: -6.9, ty: -3.5},
						transform: [-6.9, -3.5, 1, 1, -0.081, 0.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 32,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6, ty: -3.65},
						transform: [-6, -3.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 42,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.081, c: -0.081, d: 0.997, tx: -6.9, ty: -3.5},
						transform: [-6.9, -3.5, 1, 1, -0.081, 0.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 43,
						to: 52,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6, ty: -3.65},
						transform: [-6, -3.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 62,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.081, c: -0.081, d: 0.997, tx: -6.9, ty: -3.5},
						transform: [-6.9, -3.5, 1, 1, -0.081, 0.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6, ty: -3.65},
						transform: [-6, -3.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "oruga_walk",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_oruga_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -34.4, ty: 13.85},
						transform: [-34.4, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 10,
						classname: "_bearbot_turin_oruga_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -34.4, ty: 13.85},
						transform: [-34.4, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 20,
						classname: "_bearbot_turin_oruga_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -34.4, ty: 13.85},
						transform: [-34.4, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 30,
						classname: "_bearbot_turin_oruga_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -34.4, ty: 13.85},
						transform: [-34.4, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 40,
						classname: "_bearbot_turin_oruga_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -34.4, ty: 13.85},
						transform: [-34.4, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 50,
						classname: "_bearbot_turin_oruga_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -34.4, ty: 13.85},
						transform: [-34.4, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 51,
						to: 60,
						classname: "_bearbot_turin_oruga_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -34.4, ty: 13.85},
						transform: [-34.4, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 61,
						classname: "_bearbot_turin_oruga_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -34.4, ty: 13.85},
						transform: [-34.4, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eyebrow_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.963, b: 0.271, c: -0.271, d: 0.963, tx: -31.15, ty: -177.75},
						transform: [-31.15, -177.75, 1, 1, -0.274, 0.274, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 10,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.963, b: 0.271, c: -0.271, d: 0.963, tx: -31.15, ty: -177.75},
						transform: [-31.15, -177.75, 1, 1, -0.274, 0.274, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 20,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.878, b: 0.479, c: -0.479, d: 0.878, tx: -16.6, ty: -169.1},
						transform: [-16.6, -169.1, 1, 1, -0.499, 0.499, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 30,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.963, b: 0.271, c: -0.271, d: 0.963, tx: -31.15, ty: -177.75},
						transform: [-31.15, -177.75, 1, 1, -0.274, 0.274, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 40,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.878, b: 0.479, c: -0.479, d: 0.878, tx: -16.6, ty: -169.1},
						transform: [-16.6, -169.1, 1, 1, -0.499, 0.499, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 50,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.963, b: 0.271, c: -0.271, d: 0.963, tx: -31.15, ty: -177.75},
						transform: [-31.15, -177.75, 1, 1, -0.274, 0.274, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 51,
						to: 60,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.878, b: 0.479, c: -0.479, d: 0.878, tx: -16.6, ty: -169.1},
						transform: [-16.6, -169.1, 1, 1, -0.499, 0.499, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 61,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.963, b: 0.271, c: -0.271, d: 0.963, tx: -31.15, ty: -177.75},
						transform: [-31.15, -177.75, 1, 1, -0.274, 0.274, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hocico_down_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 48.5, ty: -105.2},
						transform: [48.5, -105.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 10,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 48.5, ty: -105.2},
						transform: [48.5, -105.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 20,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.081, c: -0.081, d: 0.997, tx: 57.45, ty: -91.2},
						transform: [57.45, -91.2, 1, 1, -0.081, 0.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 30,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 48.5, ty: -105.2},
						transform: [48.5, -105.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 40,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.081, c: -0.081, d: 0.997, tx: 57.45, ty: -91.2},
						transform: [57.45, -91.2, 1, 1, -0.081, 0.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 50,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 48.5, ty: -105.2},
						transform: [48.5, -105.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 51,
						to: 60,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.081, c: -0.081, d: 0.997, tx: 57.45, ty: -91.2},
						transform: [57.45, -91.2, 1, 1, -0.081, 0.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 61,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 48.5, ty: -105.2},
						transform: [48.5, -105.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hocico_up_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 42.3, ty: -141},
						transform: [42.3, -141, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 10,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 42.3, ty: -141},
						transform: [42.3, -141, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 20,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.081, c: -0.081, d: 0.997, tx: 53.55, ty: -132.9},
						transform: [53.55, -132.9, 1, 1, -0.081, 0.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 30,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 42.3, ty: -141},
						transform: [42.3, -141, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 40,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.081, c: -0.081, d: 0.997, tx: 53.55, ty: -132.9},
						transform: [53.55, -132.9, 1, 1, -0.081, 0.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 50,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 42.3, ty: -141},
						transform: [42.3, -141, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 51,
						to: 60,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.081, c: -0.081, d: 0.997, tx: 53.55, ty: -132.9},
						transform: [53.55, -132.9, 1, 1, -0.081, 0.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 61,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 42.3, ty: -141},
						transform: [42.3, -141, 1, 1, 0, 0, 0],
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
						to: 20,
						actions: function(self){self.gotoAndPlay("loop");},
					},
					{
						from: 21,
						to: 40,
					},
					{
						from: 41,
						to: 61,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"bearbot_hurt": {
		type: "movieclip",
		fps: 30,
		totalFrames: 16,
		labels: {},
		layers: [
			{
				name: "tail_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.044, c: 0.044, d: 0.999, tx: -73.75, ty: -36.2},
						transform: [-73.75, -36.2, 1, 1, 0.044, -0.044, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 0.99, b: -0.138, c: 0.138, d: 0.99, tx: -74.95, ty: -29.55},
						transform: [-74.95, -29.55, 1, 1, 0.138, -0.138, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.421], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 1, b: 0.01, c: -0.01, d: 1, tx: -80.9, ty: -21.95},
						transform: [-80.9, -21.95, 1, 1, -0.01, 0.01, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.815, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.069, c: -0.069, d: 0.998, tx: -76.25, ty: -40.45},
						transform: [-76.25, -40.45, 1, 1, -0.069, 0.069, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.419, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 1, b: -0.03, c: 0.03, d: 1, tx: -73.55, ty: -37.55},
						transform: [-73.55, -37.55, 1, 1, 0.03, -0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.419, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -73.15, ty: -39.5},
						transform: [-73.15, -39.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.036, c: -0.036, d: 0.999, tx: -24.05, ty: -200.05},
						transform: [-24.05, -200.05, 1, 1, -0.036, 0.036, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.149, c: -0.149, d: 0.989, tx: -40.35, ty: -197.6},
						transform: [-40.35, -197.6, 1, 1, -0.149, 0.149, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.421], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 0.963, b: -0.269, c: 0.269, d: 0.963, tx: -54.55, ty: -193.9},
						transform: [-54.55, -193.9, 1, 1, 0.272, -0.272, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.815, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 0.969, b: -0.247, c: 0.247, d: 0.969, tx: -2.85, ty: -196.95},
						transform: [-2.85, -196.95, 1, 1, 0.249, -0.249, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.419, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 0.977, b: 0.212, c: -0.212, d: 0.977, tx: -21.6, ty: -202.35},
						transform: [-21.6, -202.35, 1, 1, -0.214, 0.214, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.419, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 1, b: -0.018, c: 0.018, d: 1, tx: -15.8, ty: -201.25},
						transform: [-15.8, -201.25, 1, 1, 0.018, -0.018, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "oruga_walk",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 15.55, ty: -27.7},
						transform: [15.55, -27.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.07, d: 1, tx: 14.15, ty: -27.7},
						transform: [14.15, -27.7, 1, 1.002, 0.07, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.421], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.094, d: 1, tx: 13.7, ty: -27.7},
						transform: [13.7, -27.7, 1, 1.004, 0.094, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.815, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 15.55, ty: -27.7},
						transform: [15.55, -27.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.419, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 15.55, ty: -27.7},
						transform: [15.55, -27.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.419, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 15.55, ty: -27.7},
						transform: [15.55, -27.7, 1, 1, 0, 0, 0],
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
						to: 0,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.992, b: -0.123, c: 0.123, d: 0.992, tx: -56.15, ty: -198.2},
						transform: [-56.15, -198.2, 1, 1, 0.123, -0.123, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 1, b: -0.028, c: 0.028, d: 1, tx: -73.95, ty: -194.55},
						transform: [-73.95, -194.55, 1, 1, 0.028, -0.028, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.421], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.917, b: -0.4, c: 0.4, d: 0.917, tx: -87.85, ty: -188.15},
						transform: [-87.85, -188.15, 1, 1, 0.411, -0.411, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.815, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.934, b: -0.358, c: 0.358, d: 0.934, tx: -34.15, ty: -197.9},
						transform: [-34.15, -197.9, 1, 1, 0.366, -0.366, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.419, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.993, b: 0.115, c: -0.115, d: 0.993, tx: -52.8, ty: -200.25},
						transform: [-52.8, -200.25, 1, 1, -0.115, 0.115, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.419, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.173, c: 0.173, d: 0.985, tx: -47.15, ty: -200.05},
						transform: [-47.15, -200.05, 1, 1, 0.174, -0.174, NaN],
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
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.044, c: 0.044, d: 0.999, tx: -18.05, ty: -111.3},
						transform: [-18.05, -111.3, 1, 1, 0.044, -0.044, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 0.99, b: -0.138, c: 0.138, d: 0.99, tx: -26.25, ty: -109.6},
						transform: [-26.25, -109.6, 1, 1, 0.138, -0.138, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.421], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.218, c: 0.218, d: 0.976, tx: -33.4, ty: -107.25},
						transform: [-33.4, -107.25, 1, 1, 0.22, -0.22, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.815, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.069, c: -0.069, d: 0.998, tx: -7.1, ty: -107.8},
						transform: [-7.1, -107.8, 1, 1, -0.069, 0.069, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.419, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 1, b: -0.03, c: 0.03, d: 1, tx: -17, ty: -113.35},
						transform: [-17, -113.35, 1, 1, 0.03, -0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.419, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_bearbot_turin_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -13.9, ty: -112.1},
						transform: [-13.9, -112.1, 1, 1, 0, 0, 0],
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
						classname: "_bearbot_turin_eye_hurt",
						instancename: "",
						matrix: {a: 0.999, b: -0.031, c: 0.031, d: 0.999, tx: -38.15, ty: -143.95},
						transform: [-38.15, -143.95, 1, 1, 0.031, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_turin_eye_hurt",
						instancename: "",
						matrix: {a: 0.992, b: -0.124, c: 0.124, d: 0.992, tx: -49.25, ty: -140.25},
						transform: [-49.25, -140.25, 1, 1, 0.125, -0.125, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.421], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_bearbot_turin_eye_hurt",
						instancename: "",
						matrix: {a: 0.979, b: -0.205, c: 0.205, d: 0.979, tx: -58.8, ty: -135.9},
						transform: [-58.8, -135.9, 1, 1, 0.207, -0.207, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.815, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_bearbot_turin_eye_hurt",
						instancename: "",
						matrix: {a: 0.997, b: 0.083, c: -0.083, d: 0.997, tx: -23.3, ty: -142.55},
						transform: [-23.3, -142.55, 1, 1, -0.083, 0.083, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.419, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_bearbot_turin_eye_hurt",
						instancename: "",
						matrix: {a: 1, b: -0.016, c: 0.016, d: 1, tx: -36.55, ty: -146.35},
						transform: [-36.55, -146.35, 1, 1, 0.016, -0.016, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.419, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_bearbot_turin_eye",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: -32.45, ty: -145.65},
						transform: [-32.45, -145.65, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "pants_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 1, b: -0.018, c: 0.018, d: 1, tx: -5.75, ty: -3.5},
						transform: [-5.75, -3.5, 1, 1, 0.018, -0.018, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.056, c: 0.056, d: 0.998, tx: -5.25, ty: -3.2},
						transform: [-5.25, -3.2, 1, 1, 0.056, -0.056, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.421], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 0.99, b: -0.137, c: 0.137, d: 0.99, tx: -3.7, ty: -2.95},
						transform: [-3.7, -2.95, 1, 1, 0.138, -0.138, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.815, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.069, c: -0.069, d: 0.998, tx: -6.7, ty: -4.1},
						transform: [-6.7, -4.1, 1, 1, -0.069, 0.069, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.419, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 1, b: -0.03, c: 0.03, d: 1, tx: -5.4, ty: -3.7},
						transform: [-5.4, -3.7, 1, 1, 0.03, -0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.419, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6, ty: -3.65},
						transform: [-6, -3.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "oruga_walk",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -34.4, ty: 13.85},
						transform: [-34.4, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.063, d: 1, tx: -35.6, ty: 13.85},
						transform: [-35.6, 13.85, 1, 1.002, 0.062, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.421], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.093, d: 1, tx: -36.25, ty: 13.85},
						transform: [-36.25, 13.85, 1, 1.004, 0.093, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.815, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -34.4, ty: 13.85},
						transform: [-34.4, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.419, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -34.4, ty: 13.85},
						transform: [-34.4, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.419, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -34.4, ty: 13.85},
						transform: [-34.4, 13.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eyebrow_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.996, b: -0.084, c: 0.084, d: 0.996, tx: -42.05, ty: -176.55},
						transform: [-42.05, -176.55, 1, 1, 0.084, -0.084, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.689, b: -0.724, c: 0.724, d: 0.689, tx: -63.65, ty: -173.95},
						transform: [-63.65, -173.95, 1, 1, 0.81, -0.81, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.421], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.417, b: -0.909, c: 0.909, d: 0.417, tx: -79.9, ty: -166.85},
						transform: [-79.9, -166.85, 1, 1, 1.141, -1.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.815, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.837, b: -0.548, c: 0.548, d: 0.837, tx: -33.1, ty: -176.7},
						transform: [-33.1, -176.7, 1, 1, 0.58, -0.58, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.535, 0], [0.735, 0.527], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.996, b: -0.087, c: 0.087, d: 0.996, tx: -40.3, ty: -176.8},
						transform: [-40.3, -176.8, 1, 1, 0.088, -0.088, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.217, 0.524], [0.477, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.963, b: 0.271, c: -0.271, d: 0.963, tx: -31.15, ty: -177.75},
						transform: [-31.15, -177.75, 1, 1, -0.274, 0.274, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hocico_down_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.044, c: 0.044, d: 0.999, tx: 45.35, ty: -104.1},
						transform: [45.35, -104.1, 1, 1, 0.044, -0.044, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 0.99, b: -0.138, c: 0.138, d: 0.99, tx: 38.9, ty: -101.85},
						transform: [38.9, -101.85, 1, 1, 0.138, -0.138, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.421], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.218, c: 0.218, d: 0.976, tx: 22.65, ty: -129.85},
						transform: [22.65, -129.85, 1, 1, 0.22, -0.22, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.815, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.069, c: -0.069, d: 0.998, tx: 54.1, ty: -99.15},
						transform: [54.1, -99.15, 1, 1, -0.069, 0.069, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.419, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 1, b: -0.03, c: 0.03, d: 1, tx: 46, ty: -105.8},
						transform: [46, -105.8, 1, 1, 0.03, -0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.419, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_bearbot_turin_hocico_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 48.5, ty: -105.2},
						transform: [48.5, -105.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hocico_up_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.044, c: 0.044, d: 0.999, tx: 35.95, ty: -144.95},
						transform: [35.95, -144.95, 1, 1, 0.044, -0.044, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 0.99, b: -0.138, c: 0.138, d: 0.99, tx: 23.25, ty: -152.75},
						transform: [23.25, -152.75, 1, 1, 0.138, -0.138, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.421], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.218, c: 0.218, d: 0.976, tx: 10.35, ty: -157.8},
						transform: [10.35, -157.8, 1, 1, 0.22, -0.22, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.815, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.069, c: -0.069, d: 0.998, tx: 50.9, ty: -129.75},
						transform: [50.9, -129.75, 1, 1, -0.069, 0.069, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.419, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 1, b: -0.03, c: 0.03, d: 1, tx: 37.25, ty: -145.9},
						transform: [37.25, -145.9, 1, 1, 0.03, -0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.419, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_bearbot_turin_hocico_up_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 42.3, ty: -141},
						transform: [42.3, -141, 1, 1, 0, 0, 0],
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
						classname: "_bearbot_turin_corto2",
						instancename: "",
						matrix: {a: -0.843, b: -1.459, c: -1.459, d: 0.843, tx: 79.3, ty: -120.95},
						transform: [79.3, -120.95, 1.685, 1.685, -1.047, -2.095, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.199, 0.459], [0.61, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_bearbot_turin_corto2",
						instancename: "",
						matrix: {a: -0.354, b: -0.612, c: -0.612, d: 0.354, tx: 67.75, ty: -125.2},
						transform: [67.75, -125.2, 0.707, 0.707, -1.047, -2.095, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 15,
					},
				]
			},
		]
	},
	"bearbot_die": {
		type: "movieclip",
		fps: 30,
		totalFrames: 11,
		labels: {},
		layers: [
			{
				name: "tail_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 0.966, b: -0.259, c: 0.259, d: 0.966, tx: -71.95, ty: -36.35},
						transform: [-71.95, -36.35, 1, 1, 0.262, -0.262, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 0.985, b: 0.172, c: -0.172, d: 0.985, tx: -73.35, ty: -43.55},
						transform: [-73.35, -43.55, 1, 1, -0.173, 0.173, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_bearbot_turin_tail_x",
						instancename: "",
						matrix: {a: 0.966, b: -0.259, c: 0.259, d: 0.966, tx: -71.95, ty: -36.35},
						transform: [-71.95, -36.35, 1, 1, 0.262, -0.262, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear_2_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 0.968, b: 0.253, c: -0.253, d: 0.968, tx: -27.1, ty: -184.35},
						transform: [-27.1, -184.35, 1, 1, -0.255, 0.255, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 9,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 0.884, b: -0.467, c: 0.467, d: 0.884, tx: -7.95, ty: -194.95},
						transform: [-7.95, -194.95, 1, 1, 0.486, -0.486, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_bearbot_ear_2_x",
						instancename: "",
						matrix: {a: 0.968, b: 0.253, c: -0.253, d: 0.968, tx: -27.1, ty: -184.35},
						transform: [-27.1, -184.35, 1, 1, -0.255, 0.255, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "oruga_walk",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 0.987, b: 0.159, c: -0.159, d: 0.987, tx: 15.5, ty: -27.75},
						transform: [15.5, -27.75, 1, 1, -0.16, 0.16, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 9,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: 15.55, ty: -27.65},
						transform: [15.55, -27.65, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 0.987, b: 0.159, c: -0.159, d: 0.987, tx: 15.5, ty: -27.75},
						transform: [15.5, -27.75, 1, 1, -0.16, 0.16, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear_1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.542, b: -0.841, c: 0.841, d: 0.542, tx: -61.15, ty: -177.65},
						transform: [-61.15, -177.65, 1, 1, 0.999, -0.999, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.863, b: -0.505, c: 0.505, d: 0.863, tx: -38.45, ty: -193.65},
						transform: [-38.45, -193.65, 1, 1, 0.529, -0.529, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_bearbot_ear_1_x",
						instancename: "",
						matrix: {a: 0.542, b: -0.841, c: 0.841, d: 0.542, tx: -61.15, ty: -177.65},
						transform: [-61.15, -177.65, 1, 1, 0.999, -0.999, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
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
						classname: "_bearbot_turin_body_die_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.079, c: 0.079, d: 0.997, tx: -21.75, ty: -92.45},
						transform: [-21.75, -92.45, 1, 1, 0.079, -0.079, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_bearbot_turin_body_die_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.056, c: -0.056, d: 0.998, tx: -13.55, ty: -100.7},
						transform: [-13.55, -100.7, 1, 1, -0.056, 0.056, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_bearbot_turin_body_die_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.079, c: 0.079, d: 0.997, tx: -21.75, ty: -92.45},
						transform: [-21.75, -92.45, 1, 1, 0.079, -0.079, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_bearbot_turin_eyedie",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -49.75, ty: -85.05},
						transform: [-49.75, -85.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_bearbot_turin_eyedie",
						instancename: "",
						matrix: {a: 0.991, b: 0.134, c: -0.134, d: 0.991, tx: -42.8, ty: -96.75},
						transform: [-42.8, -96.75, 1, 1, -0.134, 0.134, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_bearbot_turin_eyedie",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -49.75, ty: -85.05},
						transform: [-49.75, -85.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "pants_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.038, c: -0.038, d: 0.999, tx: -7.65, ty: 4.75},
						transform: [-7.65, 4.75, 1, 1, -0.038, 0.038, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.038, c: -0.038, d: 0.999, tx: -7.65, ty: 4.75},
						transform: [-7.65, 4.75, 1, 1, -0.038, 0.038, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_bearbot_turin_pants_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.038, c: -0.038, d: 0.999, tx: -7.65, ty: 4.75},
						transform: [-7.65, 4.75, 1, 1, -0.038, 0.038, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "oruga_walk",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 0.981, b: -0.194, c: 0.194, d: 0.981, tx: -35.95, ty: 19.55},
						transform: [-35.95, 19.55, 1, 1, 0.196, -0.196, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 0.997, b: 0.078, c: -0.078, d: 0.997, tx: -35.9, ty: 19.6},
						transform: [-35.9, 19.6, 1, 1, -0.078, 0.078, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_bearbot_turin_oruga_idle",
						instancename: "",
						matrix: {a: 0.981, b: -0.194, c: 0.194, d: 0.981, tx: -35.95, ty: 19.55},
						transform: [-35.95, 19.55, 1, 1, 0.196, -0.196, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eyebrow_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.462, b: -0.887, c: 0.887, d: 0.462, tx: -60.85, ty: -154.3},
						transform: [-60.85, -154.3, 1, 1, 1.09, -1.09, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.836, b: -0.549, c: 0.549, d: 0.836, tx: -40.8, ty: -168.05},
						transform: [-40.8, -168.05, 1, 1, 0.581, -0.581, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_bearbot_turin_eyebrow_x",
						instancename: "",
						matrix: {a: 0.462, b: -0.887, c: 0.887, d: 0.462, tx: -60.85, ty: -154.3},
						transform: [-60.85, -154.3, 1, 1, 1.09, -1.09, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "hocico_down_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_bearbot_turin_hocico_down_die_x",
						instancename: "",
						matrix: {a: 0.966, b: -0.258, c: 0.258, d: 0.966, tx: 44.7, ty: -86.9},
						transform: [44.7, -86.9, 1, 1, 0.261, -0.261, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_bearbot_turin_hocico_down_die_x",
						instancename: "",
						matrix: {a: 0.936, b: -0.119, c: 0.126, d: 0.992, tx: 55.95, ty: -78},
						transform: [55.95, -78, 0.944, 1, 0.127, -0.127, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_bearbot_turin_hocico_down_die_x",
						instancename: "",
						matrix: {a: 0.966, b: -0.258, c: 0.258, d: 0.966, tx: 44.7, ty: -86.9},
						transform: [44.7, -86.9, 1, 1, 0.261, -0.261, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "hocico_up_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_bearbot_turin_hocico_up_die_x",
						instancename: "",
						matrix: {a: 0.957, b: -0.291, c: 0.291, d: 0.957, tx: 27.05, ty: -124.65},
						transform: [27.05, -124.65, 1, 1, 0.296, -0.296, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_bearbot_turin_hocico_up_die_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.05, d: 1.006, tx: 39.95, ty: -133.2},
						transform: [39.95, -133.2, 1, 1.007, 0.049, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_bearbot_turin_hocico_up_die_x",
						instancename: "",
						matrix: {a: 0.957, b: -0.291, c: 0.291, d: 0.957, tx: 27.05, ty: -124.65},
						transform: [27.05, -124.65, 1, 1, 0.296, -0.296, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.3, 0], [0.675, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "corto2",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_bearbot_turin_corto2",
						instancename: "",
						matrix: {a: -0.153, b: 0.588, c: -0.588, d: -0.153, tx: -22.85, ty: -118.5},
						transform: [-22.85, -118.5, 0.607, 0.607, -1.825, 1.825, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_bearbot_turin_corto2",
						instancename: "",
						matrix: {a: -0.153, b: 0.588, c: -0.588, d: -0.153, tx: -12.6, ty: -117.6},
						transform: [-12.6, -117.6, 0.607, 0.607, -1.825, 1.825, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_bearbot_turin_corto2",
						instancename: "",
						matrix: {a: -0.153, b: 0.588, c: -0.588, d: -0.153, tx: -22.85, ty: -118.5},
						transform: [-22.85, -118.5, 0.607, 0.607, -1.825, 1.825, NaN],
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
						to: 3,
						classname: "_bearbot_turin_corto1",
						instancename: "",
						matrix: {a: -0.871, b: -0.941, c: -0.941, d: 0.871, tx: 59.5, ty: -109.5},
						transform: [59.5, -109.5, 1.282, 1.282, -0.824, -2.317, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_bearbot_turin_corto1",
						instancename: "",
						matrix: {a: -0.871, b: -0.941, c: -0.941, d: 0.871, tx: 66.45, ty: -104.05},
						transform: [66.45, -104.05, 1.282, 1.282, -0.824, -2.317, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_bearbot_turin_corto1",
						instancename: "",
						matrix: {a: -0.871, b: -0.941, c: -0.941, d: 0.871, tx: 59.5, ty: -109.5},
						transform: [59.5, -109.5, 1.282, 1.282, -0.824, -2.317, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"bearbot_wreck": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bearbot_wheel",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_bearbot_wheel",
						instancename: "BEARBOT_1_PART_5",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -32.6, ty: -38.1},
						transform: [-32.6, -38.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bear_part_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_bear_part_1",
						instancename: "BEARBOT_1_PART_10",
						matrix: {a: 0.747, b: -0.665, c: 0.665, d: 0.747, tx: -67.45, ty: -189.5},
						transform: [-67.45, -189.5, 1, 1, 0.728, -0.728, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bear_part_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_bear_part_1",
						instancename: "BEARBOT_1_PART_10",
						matrix: {a: 0.991, b: 0.136, c: -0.136, d: 0.991, tx: -17.65, ty: -198.65},
						transform: [-17.65, -198.65, 1, 1, -0.137, 0.137, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bearbot_part_10",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_bearbot_part_10",
						instancename: "BEARBOT_1_PART_7",
						matrix: {a: 0.966, b: 0.259, c: -0.259, d: 0.966, tx: 43.35, ty: -13.4},
						transform: [43.35, -13.4, 1, 1, -0.262, 0.262, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bearbot_part_8",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_bearbot_part_8",
						instancename: "BEARBOT_1_PART_9",
						matrix: {a: 0.982, b: -0.19, c: 0.19, d: 0.982, tx: -36.55, ty: -133.9},
						transform: [-36.55, -133.9, 1, 1, 0.192, -0.192, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bearbot_part_9",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_bearbot_part_9",
						instancename: "BEARBOT_1_PART_8",
						matrix: {a: 0.997, b: -0.078, c: 0.078, d: 0.997, tx: -12.3, ty: -48.7},
						transform: [-12.3, -48.7, 1, 1, 0.078, -0.078, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bearbot_part_10",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_bearbot_part_10",
						instancename: "BEARBOT_1_PART_7",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 18.95, ty: 18.2},
						transform: [18.95, 18.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bearbot_part_10",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_bearbot_part_10",
						instancename: "BEARBOT_1_PART_7",
						matrix: {a: -0.966, b: -0.259, c: -0.259, d: 0.966, tx: -56.7, ty: 7.8},
						transform: [-56.7, 7.8, 1, 1, -0.262, -2.88, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bearbot_part_eye",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_bearbot_part_eye",
						instancename: "BEARBOT_1_PART_6",
						matrix: {a: 0.855, b: 0.518, c: -0.518, d: 0.855, tx: -44.5, ty: -120.7},
						transform: [-44.5, -120.7, 1, 1, -0.545, 0.545, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bearbot_wheel",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_bearbot_wheel",
						instancename: "BEARBOT_1_PART_5",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -56.6, ty: 2.8},
						transform: [-56.6, 2.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bearbot_wheel2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_bearbot_wheel2",
						instancename: "BEARBOT_1_PART_4",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 26.15, ty: 20.2},
						transform: [26.15, 20.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bearbot_part_6",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_bearbot_part_6",
						instancename: "BEARBOT_1_PART_3",
						matrix: {a: 0.887, b: -0.461, c: 0.461, d: 0.887, tx: -54.65, ty: -157.9},
						transform: [-54.65, -157.9, 1, 1, 0.479, -0.479, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bearbot_part_4",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_bearbot_part_4",
						instancename: "BEARBOT_1_PART_2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 54.85, ty: -86.75},
						transform: [54.85, -86.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bearbot_part_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_bearbot_part_2",
						instancename: "BEARBOT_1_PART_1",
						matrix: {a: 0.969, b: -0.246, c: 0.246, d: 0.969, tx: 32.45, ty: -142.65},
						transform: [32.45, -142.65, 1, 1, 0.248, -0.248, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_bearbot_turin_tail_x": {
		type: "bitmap",
		asset: "_bearbot_turin_tail_x",
		scale: 1,
		position: [-32.8, -27.7],
	},
	"_bearbot_ear_2_x": {
		type: "bitmap",
		asset: "_bearbot_ear_2_x",
		scale: 1,
		position: [-18.1, -37.7],
	},
	"_bearbot_turin_oruga_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "oruga_bg_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_oruga_bg_x",
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
				name: "oruga_lines_bg_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_turin_oruga_lines_bg_x",
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
				name: "oruga_lines_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_bearbot_oruga_lines_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 13.4, ty: -10.55},
						transform: [13.4, -10.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_bearbot_ear_1_x": {
		type: "bitmap",
		asset: "_bearbot_ear_1_x",
		scale: 1,
		position: [-18.4, -37.95],
	},
	"_bearbot_turin_body_x": {
		type: "bitmap",
		asset: "_bearbot_turin_body_x",
		scale: 1,
		position: [-65.4, -107.3],
	},
	"_bearbot_turin_eye": {
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
						classname: "_bearbot_turin_eyered_x",
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
						classname: "_bearbot_turin_eyered_glow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.65, ty: 2.2},
						transform: [-2.65, 2.2, 1, 1, 0, 0, 0],
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
						classname: "_bearbot_turin_eyered_glow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.65, ty: 2.2},
						transform: [-2.65, 2.2, 1, 1, 0, 0, 0],
						alpha: 0.62,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.458, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_bearbot_turin_eyered_glow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.65, ty: 2.2},
						transform: [-2.65, 2.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_bearbot_turin_pants_x": {
		type: "bitmap",
		asset: "_bearbot_turin_pants_x",
		scale: 1,
		position: [-75, -58.5],
	},
	"_bearbot_turin_eyebrow_x": {
		type: "bitmap",
		asset: "_bearbot_turin_eyebrow_x",
		scale: 1,
		position: [-26.15, -11.6],
	},
	"_bearbot_turin_hocico_down_x": {
		type: "bitmap",
		asset: "_bearbot_turin_hocico_down_x",
		scale: 1,
		position: [-27.45, -28.8],
	},
	"_bearbot_turin_hocico_up_x": {
		type: "bitmap",
		asset: "_bearbot_turin_hocico_up_x",
		scale: 1,
		position: [-28.7, -30.85],
	},
	"_bearbot_stick_1_x": {
		type: "bitmap",
		asset: "_bearbot_stick_1_x",
		scale: 1,
		position: [-71.1, -12.4],
	},
	"_bearbot_fist_x": {
		type: "bitmap",
		asset: "_bearbot_fist_x",
		scale: 1,
		position: [-54.15, -31.35],
	},
	"_bearbot_fx_x": {
		type: "bitmap",
		asset: "_bearbot_fx_x",
		scale: 1,
		position: [-207.25, -52.95],
	},
	"_bearbot_boundingbox": {
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
						classname: "_bearbot_bound_x",
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
	"_bearbot_turin_oruga_walk": {
		type: "movieclip",
		fps: 30,
		totalFrames: 5,
		labels: {},
		layers: [
			{
				name: "oruga_bg_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_bearbot_turin_oruga_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 3,
						classname: "_bearbot_turin_oruga_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.941, tx: 0, ty: 1.2},
						transform: [0, 1.2, 1, 0.941, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_bearbot_turin_oruga_bg_x",
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
				name: "oruga_anima",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_bearbot_oruga_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 13.4, ty: -10.55},
						transform: [13.4, -10.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 3,
						classname: "_bearbot_oruga_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.941, tx: 13.4, ty: -8.7},
						transform: [13.4, -8.7, 1, 0.941, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_bearbot_oruga_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 13.4, ty: -10.55},
						transform: [13.4, -10.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_bearbot_turin_eye_hurt": {
		type: "movieclip",
		fps: 30,
		totalFrames: 46,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 45,
						classname: "_bearbot_turin_eyered_x",
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
						classname: "_bearbot_turin_eyered_glow_x",
						instancename: "",
						matrix: {a: 0.973, b: -0.229, c: 0.102, d: 0.434, tx: -2.65, ty: 2.1},
						transform: [-2.65, 2.1, 1, 0.446, 0.231, -0.231, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.458, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 6,
						classname: "_bearbot_turin_eyered_glow_x",
						instancename: "",
						matrix: {a: 0.973, b: -0.229, c: 0.022, d: 0.094, tx: -2.65, ty: 2.2},
						transform: [-2.65, 2.2, 1, 0.097, 0.231, -0.231, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 8,
						classname: "_bearbot_turin_eyered_glow_x",
						instancename: "",
						matrix: {a: 0.973, b: -0.229, c: 0.022, d: 0.094, tx: -2.65, ty: 2.2},
						transform: [-2.65, 2.2, 1, 0.097, 0.231, -0.231, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.458, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_bearbot_turin_eyered_glow_x",
						instancename: "",
						matrix: {a: 0.973, b: -0.233, c: 0.154, d: 0.643, tx: -2.65, ty: 2.2},
						transform: [-2.65, 2.2, 1, 0.661, 0.235, -0.235, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.458, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 13,
						classname: "_bearbot_turin_eyered_glow_x",
						instancename: "",
						matrix: {a: 0.973, b: -0.229, c: 0.022, d: 0.094, tx: -2.65, ty: 2.2},
						transform: [-2.65, 2.2, 1, 0.097, 0.231, -0.231, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.458, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 45,
						classname: "_bearbot_turin_eyered_glow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.65, ty: 2.2},
						transform: [-2.65, 2.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_bearbot_turin_corto2": {
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
						classname: "_bearbot_turin_corto2_1_x",
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
						classname: "_bearbot_turin_corto2_2_x",
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
						classname: "_bearbot_turin_corto2_1_x",
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
						classname: "_bearbot_turin_corto2_2_x",
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
						classname: "_bearbot_turin_corto2_1_x",
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
						classname: "_bearbot_turin_corto2_1_x",
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
	"_bearbot_turin_body_die_x": {
		type: "bitmap",
		asset: "_bearbot_turin_body_die_x",
		scale: 1,
		position: [-73.3, -107.3],
	},
	"_bearbot_turin_eyedie": {
		type: "movieclip",
		fps: 30,
		totalFrames: 29,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_bearbot_turin_eyereddie_x",
						instancename: "",
						matrix: {a: 0.956, b: 0.292, c: -0.271, d: 0.885, tx: 4.2, ty: -9.5},
						transform: [4.2, -9.5, 1, 0.926, -0.297, 0.297, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.594, 0], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 27,
						classname: "_bearbot_turin_eyereddie_x",
						instancename: "",
						matrix: {a: 0.956, b: 0.292, c: -0.292, d: 0.956, tx: 4.8, ty: -11.6},
						transform: [4.8, -11.6, 1, 1, -0.297, 0.297, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.594, 0], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_bearbot_turin_eyereddie_x",
						instancename: "",
						matrix: {a: 0.956, b: 0.292, c: -0.271, d: 0.885, tx: 4.2, ty: -9.5},
						transform: [4.2, -9.5, 1, 0.926, -0.297, 0.297, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_bearbot_turin_hocico_down_die_x": {
		type: "bitmap",
		asset: "_bearbot_turin_hocico_down_die_x",
		scale: 1,
		position: [-22.75, -23.45],
	},
	"_bearbot_turin_hocico_up_die_x": {
		type: "bitmap",
		asset: "_bearbot_turin_hocico_up_die_x",
		scale: 1,
		position: [-20, -38.65],
	},
	"_bearbot_turin_corto1": {
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
						classname: "_bearbot_turin_corto1_1_x",
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
						classname: "_bearbot_turin_corto1_2_x",
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
						classname: "_bearbot_turin_corto1_1_x",
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
						classname: "_bearbot_turin_corto1_2_x",
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
						classname: "_bearbot_turin_corto1_1_x",
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
						classname: "_bearbot_turin_corto1_1_x",
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
						classname: "_bearbot_turin_corto1_2_x",
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
						classname: "_bearbot_turin_corto1_1_x",
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
						classname: "_bearbot_turin_corto1_1_x",
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
	"_bearbot_bearbot_wheel": {
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
						classname: "_bearbot_wheel_wreck_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -2.75},
						transform: [0, -2.75, 1, 1, 0, 0, 0],
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
						classname: "_bearbot_bodybox",
						instancename: "bound",
						matrix: {a: 0.802, b: 0, c: 0, d: 0.25, tx: 0, ty: 0},
						transform: [0, 0, 0.802, 0.25, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_bearbot_bear_part_1": {
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
						classname: "_bearbot_ear_die_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.5, ty: 11.35},
						transform: [-0.5, 11.35, 1, 1, 0, 0, 0],
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
						classname: "_bearbot_bodybox",
						instancename: "bound",
						matrix: {a: 0.496, b: 0, c: 0, d: 0.536, tx: 0, ty: 0},
						transform: [0, 0, 0.496, 0.536, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_bearbot_bearbot_part_10": {
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
						classname: "_bearbot_turin_oruga_wreck_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5.8, ty: 6.5},
						transform: [5.8, 6.5, 1, 1, 0, 0, 0],
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
						classname: "_bearbot_bodybox",
						instancename: "bound",
						matrix: {a: 1.251, b: 0, c: 0, d: 0.715, tx: 0, ty: 0},
						transform: [0, 0, 1.251, 0.715, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_bearbot_bearbot_part_8": {
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
						classname: "_bearbot_turin_body_wreck_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.5, ty: 40.25},
						transform: [3.5, 40.25, 1, 1, 0, 0, 0],
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
						classname: "_bearbot_bodybox",
						instancename: "bound",
						matrix: {a: 1.829, b: 0, c: 0, d: 2.3, tx: 0.2, ty: 0},
						transform: [0.2, 0, 1.829, 2.3, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_bearbot_bearbot_part_9": {
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
						classname: "_bearbot_turin_body_wreck_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.25, ty: -1.5},
						transform: [-2.25, -1.5, 1, 1, 0, 0, 0],
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
						classname: "_bearbot_bodybox",
						instancename: "bound",
						matrix: {a: 2.633, b: 0, c: 0, d: 1.453, tx: 0, ty: 0},
						transform: [0, 0, 2.633, 1.453, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_bearbot_bearbot_part_eye": {
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
						classname: "_bearbot_turin_eyereddie_wreck_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.856, tx: 0.55, ty: 6.75},
						transform: [0.55, 6.75, 1, 0.856, 0, 0, 0],
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
						classname: "_bearbot_bodybox",
						instancename: "bound",
						matrix: {a: 0.922, b: 0, c: 0, d: 0.709, tx: 0, ty: 0},
						transform: [0, 0, 0.922, 0.709, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_bearbot_bearbot_wheel2": {
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
						classname: "_bearbot_wheel_wreck_mini_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.05, ty: -2.75},
						transform: [0.05, -2.75, 1, 1, 0, 0, 0],
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
						classname: "_bearbot_bodybox",
						instancename: "bound",
						matrix: {a: 0.402, b: 0, c: 0, d: 0.181, tx: 0, ty: 0},
						transform: [0, 0, 0.402, 0.181, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_bearbot_bearbot_part_6": {
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
						classname: "_bearbot_eyebrow_wreck_x",
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
						classname: "_bearbot_bodybox",
						instancename: "bound",
						matrix: {a: 0.803, b: 0, c: 0, d: 0.202, tx: 0, ty: 0},
						transform: [0, 0, 0.803, 0.202, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_bearbot_bearbot_part_4": {
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
						classname: "_bearbot_turin_hocico_down_die_wreck_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: -7.8, ty: -1.9},
						transform: [-7.8, -1.9, 1, 1, 0.187, -0.187, NaN],
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
						classname: "_bearbot_bodybox",
						instancename: "bound",
						matrix: {a: 0.97, b: 0, c: 0, d: 0.536, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 0.536, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_bearbot_bearbot_part_2": {
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
						classname: "_bearbot_hocico_wreck_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0.2},
						transform: [0, 0.2, 1, 1, 0, 0, 0],
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
						classname: "_bearbot_bodybox",
						instancename: "bound",
						matrix: {a: 1.155, b: 0, c: 0, d: 0.586, tx: 0, ty: 0},
						transform: [0, 0, 1.155, 0.586, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_bearbot_turin_oruga_bg_x": {
		type: "bitmap",
		asset: "_bearbot_turin_oruga_bg_x",
		scale: 1,
		position: [-63.9, -49],
	},
	"_bearbot_turin_oruga_lines_bg_x": {
		type: "bitmap",
		asset: "_bearbot_turin_oruga_lines_bg_x",
		scale: 1,
		position: [-63.9, -49],
	},
	"_bearbot_oruga_lines_1_x": {
		type: "bitmap",
		asset: "_bearbot_oruga_lines_1_x",
		scale: 1,
		position: [-77.75, -38.4],
	},
	"_bearbot_turin_eyered_x": {
		type: "bitmap",
		asset: "_bearbot_turin_eyered_x",
		scale: 1,
		position: [-29.35, -26.15],
	},
	"_bearbot_turin_eyered_glow_x": {
		type: "bitmap",
		asset: "_bearbot_turin_eyered_glow_x",
		scale: 1,
		position: [-31.55, -32.9],
	},
	"_bearbot_bound_x": {
		type: "bitmap",
		asset: "_bearbot_bound_x",
		scale: 1,
		position: [-55, -55],
	},
	"_bearbot_oruga_anima": {
		type: "movieclip",
		fps: 30,
		totalFrames: 8,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_bearbot_turin_oruga_lines_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -13.4, ty: 10.5},
						transform: [-13.4, 10.5, 1, 1, 0, 0, 0],
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
						to: 1,
						classname: "_bearbot_oruga_lines_1_x",
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
						classname: "_bearbot_oruga_lines_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.45, ty: 0.75},
						transform: [-0.45, 0.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_bearbot_oruga_lines_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.45, ty: 1.35},
						transform: [-2.45, 1.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 7,
						classname: "_bearbot_oruga_lines_4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1, ty: -1.4},
						transform: [-1, -1.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_bearbot_turin_corto2_1_x": {
		type: "bitmap",
		asset: "_bearbot_turin_corto2_1_x",
		scale: 1,
		position: [-29.35, -27.8],
	},
	"_bearbot_turin_corto2_2_x": {
		type: "bitmap",
		asset: "_bearbot_turin_corto2_2_x",
		scale: 1,
		position: [-20.15, -29.85],
	},
	"_bearbot_turin_eyereddie_x": {
		type: "bitmap",
		asset: "_bearbot_turin_eyereddie_x",
		scale: 1,
		position: [-28.9, -29.7],
	},
	"_bearbot_turin_corto1_1_x": {
		type: "bitmap",
		asset: "_bearbot_turin_corto1_1_x",
		scale: 1,
		position: [-21.5, -27.9],
	},
	"_bearbot_turin_corto1_2_x": {
		type: "bitmap",
		asset: "_bearbot_turin_corto1_2_x",
		scale: 1,
		position: [-19.7, -28.5],
	},
	"_bearbot_wheel_wreck_x": {
		type: "bitmap",
		asset: "_bearbot_wheel_wreck_x",
		scale: 1,
		position: [-26, -12.05],
	},
	"_bearbot_bodybox": {
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
						classname: "_bearbot_bodybox_x",
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
	"_bearbot_ear_die_x": {
		type: "bitmap",
		asset: "_bearbot_ear_die_x",
		scale: 1,
		position: [-19.15, -37.95],
	},
	"_bearbot_turin_oruga_wreck_x": {
		type: "bitmap",
		asset: "_bearbot_turin_oruga_wreck_x",
		scale: 1,
		position: [-49.5, -34.4],
	},
	"_bearbot_turin_body_wreck_1_x": {
		type: "bitmap",
		asset: "_bearbot_turin_body_wreck_1_x",
		scale: 1,
		position: [-63.3, -116.4],
	},
	"_bearbot_turin_body_wreck_2_x": {
		type: "bitmap",
		asset: "_bearbot_turin_body_wreck_2_x",
		scale: 1,
		position: [-81.4, -59.75],
	},
	"_bearbot_turin_eyereddie_wreck_x": {
		type: "bitmap",
		asset: "_bearbot_turin_eyereddie_wreck_x",
		scale: 1,
		position: [-28.9, -38.05],
	},
	"_bearbot_wheel_wreck_mini_x": {
		type: "bitmap",
		asset: "_bearbot_wheel_wreck_mini_x",
		scale: 1,
		position: [-17.05, -7.85],
	},
	"_bearbot_eyebrow_wreck_x": {
		type: "bitmap",
		asset: "_bearbot_eyebrow_wreck_x",
		scale: 1,
		position: [-26, -11.25],
	},
	"_bearbot_turin_hocico_down_die_wreck_x": {
		type: "bitmap",
		asset: "_bearbot_turin_hocico_down_die_wreck_x",
		scale: 1,
		position: [-25.4, -24.7],
	},
	"_bearbot_hocico_wreck_x": {
		type: "bitmap",
		asset: "_bearbot_hocico_wreck_x",
		scale: 1,
		position: [-38.45, -30.3],
	},
	"_bearbot_oruga_lines_2_x": {
		type: "bitmap",
		asset: "_bearbot_oruga_lines_2_x",
		scale: 1,
		position: [-77.3, -39.15],
	},
	"_bearbot_oruga_lines_3_x": {
		type: "bitmap",
		asset: "_bearbot_oruga_lines_3_x",
		scale: 1,
		position: [-75.3, -39.75],
	},
	"_bearbot_oruga_lines_4_x": {
		type: "bitmap",
		asset: "_bearbot_oruga_lines_4_x",
		scale: 1,
		position: [-76.75, -37],
	},
	"_bearbot_bodybox_x": {
		type: "bitmap",
		asset: "_bearbot_bodybox_x",
		scale: 1,
		position: [-30, -30],
	},
};
