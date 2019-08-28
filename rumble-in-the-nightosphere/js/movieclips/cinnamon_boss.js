
var cinnamon_boss = {
	"cinnamon_boss": {
		type: "movieclip",
		fps: 30,
		totalFrames: 86,
		labels: {idle: {from:0, to:6}, preattack: {from:7, to:19}, attack: {from:20, to:28}, dizzy: {from:29, to:37}, dizzy_end: {from:38, to:51}, hurt: {from:52, to:63}, dying: {from:64, to:76}, cinnamon: {from:77, to:85}, },
		layers: [
			{
				name: "Capa 13",
				keys: [
					{
						from: 0,
						to: 85,
						classname: "_cinnamon_boss_body_physics",
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
				name: "Capa 11",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_cinnamon_boss_cinnamon_boss_idle",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.55, ty: -7.8},
						transform: [0.55, -7.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 19,
						classname: "_cinnamon_boss_cinnamon_boss_preattack",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.55, ty: -7.8},
						transform: [0.55, -7.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 28,
						classname: "_cinnamon_boss_cinnamon_boss_attack",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.55, ty: -7.8},
						transform: [0.55, -7.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 29,
						to: 37,
						classname: "_cinnamon_boss_cinnamon_boss_dizzy",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.55, ty: -7.8},
						transform: [0.55, -7.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 38,
						to: 51,
						classname: "_cinnamon_boss_cinnamon_boss_dizzy_end",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.55, ty: -7.8},
						transform: [0.55, -7.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 52,
						to: 63,
						classname: "_cinnamon_boss_cinnamon_boss_hurt",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.55, ty: -7.8},
						transform: [0.55, -7.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 64,
						to: 76,
						classname: "_cinnamon_boss_cinnamon_boss_dying",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.55, ty: -7.8},
						transform: [0.55, -7.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 77,
						to: 85,
						classname: "_cinnamon_boss_cinnamon_nice_idle",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.55, ty: -7.8},
						transform: [0.55, -7.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Capa 1",
				keys: [
					{
						from: 0,
						to: 6,
					},
					{
						from: 7,
						to: 19,
					},
					{
						from: 20,
						to: 28,
					},
					{
						from: 29,
						to: 37,
					},
					{
						from: 38,
						to: 51,
					},
					{
						from: 52,
						to: 63,
					},
					{
						from: 64,
						to: 76,
					},
					{
						from: 77,
						to: 85,
					},
				]
			},
		]
	},
	"_cinnamon_boss_body_physics": {
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
						classname: "_cinnamon_boss_box_physics",
						instancename: "",
						matrix: {a: 0.272, b: 0, c: 0, d: 0.332, tx: 1, ty: 50.1},
						transform: [1, 50.1, 0.272, 0.332, 0, 0, 0],
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
						classname: "_cinnamon_boss_circle_physics",
						instancename: "",
						matrix: {a: 0.982, b: 0, c: 0, d: 0.981, tx: 0.5, ty: -7.95},
						transform: [0.5, -7.95, 0.982, 0.981, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_cinnamon_boss_cinnamon_boss_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 63,
		labels: {},
		layers: [
			{
				name: "safeglow",
				keys: [
					{
						from: 0,
						to: 62,
						classname: "_cinnamon_boss_safeglow_x",
						instancename: "",
						matrix: {a: 5.8, b: 0, c: 0, d: 5.8, tx: 1.45, ty: 7.45},
						transform: [1.45, 7.45, 5.8, 5.8, 0, 0, 0],
						alpha: 0,
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
						to: 16,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.968, b: -0.25, c: -0.25, d: -0.968, tx: 44.15, ty: -12.05},
						transform: [44.15, -12.05, 1, 1, -2.889, -0.253, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 32,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.922, b: -0.387, c: -0.387, d: -0.922, tx: 44.05, ty: -12.1},
						transform: [44.05, -12.1, 1, 1, -2.745, -0.397, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 47,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.963, b: -0.271, c: -0.271, d: -0.963, tx: 44.15, ty: -12.05},
						transform: [44.15, -12.05, 1, 1, -2.867, -0.275, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 61,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.924, b: -0.383, c: -0.383, d: -0.924, tx: 44.05, ty: -12.15},
						transform: [44.05, -12.15, 1, 1, -2.749, -0.393, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 62,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.967, b: -0.255, c: -0.255, d: -0.967, tx: 44.1, ty: -12.05},
						transform: [44.1, -12.05, 1, 1, -2.884, -0.257, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "base_2_x",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_cinnamon_boss_base_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 23.6},
						transform: [0.15, 23.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 32,
						classname: "_cinnamon_boss_base_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 25.6},
						transform: [0.15, 25.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 47,
						classname: "_cinnamon_boss_base_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 23.6},
						transform: [0.15, 23.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 61,
						classname: "_cinnamon_boss_base_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 25.6},
						transform: [0.15, 25.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 62,
						classname: "_cinnamon_boss_base_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 23.6},
						transform: [0.15, 23.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm_1_x",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.938, b: -0.346, c: 0.346, d: -0.938, tx: -42.3, ty: -12.05},
						transform: [-42.3, -12.05, 1, 1, 2.788, -2.788, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 32,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.895, b: -0.446, c: 0.446, d: -0.895, tx: -42.35, ty: -12},
						transform: [-42.35, -12, 1, 1, 2.679, -2.679, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 47,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.946, b: -0.325, c: 0.325, d: -0.946, tx: -42.35, ty: -12.05},
						transform: [-42.35, -12.05, 1, 1, 2.81, -2.81, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 61,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.909, b: -0.417, c: 0.417, d: -0.909, tx: -42.35, ty: -12.05},
						transform: [-42.35, -12.05, 1, 1, 2.711, -2.711, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 62,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.937, b: -0.349, c: 0.349, d: -0.937, tx: -42.35, ty: -12.05},
						transform: [-42.35, -12.05, 1, 1, 2.785, -2.785, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_1_x",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.7, ty: 43.1},
						transform: [14.7, 43.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 32,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.069, c: -0.069, d: 0.998, tx: 14.7, ty: 43.1},
						transform: [14.7, 43.1, 1, 1, -0.069, 0.069, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 47,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.7, ty: 43.1},
						transform: [14.7, 43.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 61,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.069, c: -0.069, d: 0.998, tx: 14.7, ty: 43.1},
						transform: [14.7, 43.1, 1, 1, -0.069, 0.069, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 62,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.7, ty: 43.1},
						transform: [14.7, 43.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_1_x",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -14.05, ty: 43.1},
						transform: [-14.05, 43.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 32,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -0.998, b: 0.065, c: 0.065, d: 0.998, tx: -14.05, ty: 43.1},
						transform: [-14.05, 43.1, 1, 1, 0.065, 3.076, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 47,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -14.05, ty: 43.1},
						transform: [-14.05, 43.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 61,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -0.998, b: 0.065, c: 0.065, d: 0.998, tx: -14.05, ty: 43.1},
						transform: [-14.05, 43.1, 1, 1, 0.065, 3.076, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 62,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -14.05, ty: 43.1},
						transform: [-14.05, 43.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "base_1_x",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.6, ty: -7.8},
						transform: [-0.6, -7.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 32,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.003, d: 0.936, tx: -0.6, ty: -7.8},
						transform: [-0.6, -7.8, 1, 0.936, 0.003, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 47,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.6, ty: -7.8},
						transform: [-0.6, -7.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 61,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.003, d: 0.936, tx: -0.6, ty: -7.8},
						transform: [-0.6, -7.8, 1, 0.936, 0.003, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 62,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.6, ty: -7.8},
						transform: [-0.6, -7.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
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
						classname: "_cinnamon_boss_mouth",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: -2.05},
						transform: [-1.15, -2.05, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 32,
						classname: "_cinnamon_boss_mouth",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: -5.3},
						transform: [-1.15, -5.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 47,
						classname: "_cinnamon_boss_mouth",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: -2.05},
						transform: [-1.15, -2.05, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 61,
						classname: "_cinnamon_boss_mouth",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: -5.3},
						transform: [-1.15, -5.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 62,
						classname: "_cinnamon_boss_mouth",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: -2.05},
						transform: [-1.15, -2.05, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye_1",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -21.25},
						transform: [-17.1, -21.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 32,
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.886, tx: -17.1, ty: -24},
						transform: [-17.1, -24, 1, 0.886, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 47,
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -21.25},
						transform: [-17.1, -21.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 61,
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.886, tx: -17.1, ty: -24},
						transform: [-17.1, -24, 1, 0.886, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 62,
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -21.25},
						transform: [-17.1, -21.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye_1",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -21.25},
						transform: [16.25, -21.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 32,
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.886, tx: 16.25, ty: -24},
						transform: [16.25, -24, 1, 0.886, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 47,
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -21.25},
						transform: [16.25, -21.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.512, 0], [0.631, 0.816], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 61,
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.886, tx: 16.25, ty: -24},
						transform: [16.25, -24, 1, 0.886, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 62,
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -21.25},
						transform: [16.25, -21.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "nose_X",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -13.3},
						transform: [-0.65, -13.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 32,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -16},
						transform: [-0.65, -16, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 47,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -13.3},
						transform: [-0.65, -13.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 61,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -16},
						transform: [-0.65, -16, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 62,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -13.3},
						transform: [-0.65, -13.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_cinnamon_boss_cinnamon_boss_preattack": {
		type: "movieclip",
		fps: 30,
		totalFrames: 26,
		labels: {loop: {from:7, to:24}, },
		layers: [
			{
				name: "safeglow",
				keys: [
					{
						from: 0,
						to: 25,
						classname: "_cinnamon_boss_safeglow_x",
						instancename: "",
						matrix: {a: 5.8, b: 0, c: 0, d: 5.8, tx: 1.45, ty: 7.45},
						transform: [1.45, 7.45, 5.8, 5.8, 0, 0, 0],
						alpha: 0,
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
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.959, b: -0.28, c: -0.28, d: -0.959, tx: 44.15, ty: -12.05},
						transform: [44.15, -12.05, 0.999, 0.999, -2.858, -0.284, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.807, 0.562], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.026, b: -0.999, c: -0.999, d: 0.026, tx: 42.9, ty: -6.7},
						transform: [42.9, -6.7, 0.999, 0.999, -1.545, -1.597, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.339, 0.374], [0.53, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.48, b: 0.877, c: -0.877, d: 0.48, tx: 43.05, ty: -3.15},
						transform: [43.05, -3.15, 1, 1, -1.07, 1.07, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.387], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 14,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.987, b: -0.163, c: 0.163, d: 0.987, tx: 41.3, ty: -13.3},
						transform: [41.3, -13.3, 1, 1, 0.164, -0.164, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 24,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.992, b: -0.129, c: 0.129, d: 0.992, tx: 41.3, ty: -13.3},
						transform: [41.3, -13.3, 1, 1, 0.129, -0.129, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.987, b: -0.163, c: 0.163, d: 0.987, tx: 41.3, ty: -13.3},
						transform: [41.3, -13.3, 1, 1, 0.164, -0.164, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.74, 0.425], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.929, b: -0.367, c: 0.367, d: -0.929, tx: -42.35, ty: -12},
						transform: [-42.35, -12, 0.999, 0.999, 2.766, -2.766, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.807, 0.562], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.048, b: -0.998, c: 0.998, d: 0.048, tx: -42.2, ty: -6.25},
						transform: [-42.2, -6.25, 0.999, 0.999, 1.523, -1.523, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.339, 0.374], [0.53, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.43, b: 0.903, c: 0.903, d: 0.43, tx: -45.25, ty: -7.9},
						transform: [-45.25, -7.9, 1, 1, 1.126, 2.015, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.387], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 14,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.983, b: -0.186, c: -0.186, d: 0.983, tx: -43.15, ty: -13.25},
						transform: [-43.15, -13.25, 1, 1, -0.187, -2.955, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 24,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.99, b: -0.143, c: -0.143, d: 0.99, tx: -42.6, ty: -12.2},
						transform: [-42.6, -12.2, 1, 1, -0.144, -2.998, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.983, b: -0.186, c: -0.186, d: 0.983, tx: -43.15, ty: -13.25},
						transform: [-43.15, -13.25, 1, 1, -0.187, -2.955, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.74, 0.425], [1, 1], ],
						}
					},
				]
			},
			{
				name: "base_2_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_cinnamon_boss_base_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 24.05},
						transform: [0.15, 24.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.53, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 14,
						classname: "_cinnamon_boss_base_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 25.6},
						transform: [0.15, 25.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 24,
						classname: "_cinnamon_boss_base_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 25.6},
						transform: [0.15, 25.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_cinnamon_boss_base_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 25.6},
						transform: [0.15, 25.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.74, 0.425], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_1_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 14.7, ty: 43.1},
						transform: [14.7, 43.1, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.53, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 14,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.069, c: -0.069, d: 0.998, tx: 14.7, ty: 43.1},
						transform: [14.7, 43.1, 1, 1, -0.069, 0.069, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 24,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0.025, c: -0.025, d: 1, tx: 14.7, ty: 43.1},
						transform: [14.7, 43.1, 1, 1, -0.025, 0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.069, c: -0.069, d: 0.998, tx: 14.7, ty: 43.1},
						transform: [14.7, 43.1, 1, 1, -0.069, 0.069, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.74, 0.425], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_1_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -1, b: 0.013, c: 0.013, d: 1, tx: -14.05, ty: 43.1},
						transform: [-14.05, 43.1, 1, 1, 0.013, 3.128, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.53, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 14,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -0.998, b: 0.065, c: 0.065, d: 0.998, tx: -14.05, ty: 43.1},
						transform: [-14.05, 43.1, 1, 1, 0.065, 3.076, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 24,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -1, b: 0.021, c: 0.021, d: 1, tx: -14.05, ty: 43.1},
						transform: [-14.05, 43.1, 1, 1, 0.021, 3.12, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -0.998, b: 0.065, c: 0.065, d: 0.998, tx: -14.05, ty: 43.1},
						transform: [-14.05, 43.1, 1, 1, 0.065, 3.076, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.74, 0.425], [1, 1], ],
						}
					},
				]
			},
			{
				name: "base_1_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.986, tx: -0.6, ty: -7.8},
						transform: [-0.6, -7.8, 1, 0.986, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.53, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 14,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.003, d: 0.936, tx: -0.6, ty: -7.8},
						transform: [-0.6, -7.8, 1, 0.936, 0.003, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 24,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.003, d: 0.942, tx: -0.55, ty: -7.55},
						transform: [-0.55, -7.55, 1, 0.942, 0.003, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.003, d: 0.936, tx: -0.6, ty: -7.8},
						transform: [-0.6, -7.8, 1, 0.936, 0.003, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.74, 0.425], [1, 1], ],
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
						classname: "_cinnamon_boss_mouth",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: -2.75},
						transform: [-1.15, -2.75, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.53, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 14,
						classname: "_cinnamon_boss_mouth_2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: -5.3},
						transform: [-1.15, -5.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 24,
						classname: "_cinnamon_boss_mouth_2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: -3.2},
						transform: [-1.15, -3.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_cinnamon_boss_mouth_2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: -5.3},
						transform: [-1.15, -5.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.74, 0.425], [1, 1], ],
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
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.976, tx: -17.1, ty: -21.85},
						transform: [-17.1, -21.85, 1, 0.976, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.53, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 14,
						classname: "_cinnamon_boss_eye_2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.886, tx: -17.1, ty: -24},
						transform: [-17.1, -24, 1, 0.886, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 24,
						classname: "_cinnamon_boss_eye_2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.886, tx: -17.1, ty: -23.25},
						transform: [-17.1, -23.25, 1, 0.886, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_cinnamon_boss_eye_2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.886, tx: -17.1, ty: -24},
						transform: [-17.1, -24, 1, 0.886, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.74, 0.425], [1, 1], ],
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
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.976, tx: 16.25, ty: -21.85},
						transform: [16.25, -21.85, 1, 0.976, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.53, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 14,
						classname: "_cinnamon_boss_eye_2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.886, tx: 16.25, ty: -24},
						transform: [16.25, -24, 1, 0.886, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 24,
						classname: "_cinnamon_boss_eye_2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.886, tx: 16.25, ty: -23.25},
						transform: [16.25, -23.25, 1, 0.886, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_cinnamon_boss_eye_2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.886, tx: 16.25, ty: -24},
						transform: [16.25, -24, 1, 0.886, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.74, 0.425], [1, 1], ],
						}
					},
				]
			},
			{
				name: "nose_X",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -13.9},
						transform: [-0.65, -13.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.53, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 14,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -16},
						transform: [-0.65, -16, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 24,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -15.25},
						transform: [-0.65, -15.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -16},
						transform: [-0.65, -16, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.74, 0.425], [1, 1], ],
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
					},
					{
						from: 7,
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
	"_cinnamon_boss_cinnamon_boss_attack": {
		type: "movieclip",
		fps: 30,
		totalFrames: 13,
		labels: {loop: {from:3, to:11}, },
		layers: [
			{
				name: "safeglow",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_cinnamon_boss_safeglow_x",
						instancename: "",
						matrix: {a: 5.8, b: 0, c: 0, d: 5.8, tx: 1.45, ty: 7.45},
						transform: [1.45, 7.45, 5.8, 5.8, 0, 0, 0],
						alpha: 0,
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
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.97, b: -0.244, c: -0.244, d: 0.97, tx: 44.8, ty: -13.35},
						transform: [44.8, -13.35, 1, 1, -0.247, -2.895, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.831, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 8,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.028, b: -1, c: -1, d: -0.028, tx: 43.75, ty: -12.1},
						transform: [43.75, -12.1, 1, 1, -1.598, -1.543, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.085, b: -0.996, c: -0.996, d: 0.085, tx: 43.75, ty: -12.05},
						transform: [43.75, -12.05, 1, 1, -1.486, -1.656, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.028, b: -1, c: -1, d: -0.028, tx: 43.75, ty: -12.1},
						transform: [43.75, -12.1, 1, 1, -1.598, -1.543, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.193, 0.469], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "base_2_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_cinnamon_boss_base_22_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.981, tx: 0.15, ty: 26.15},
						transform: [0.15, 26.15, 1, 0.981, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.831, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_cinnamon_boss_base_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 22.7},
						transform: [0.15, 22.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 11,
						classname: "_cinnamon_boss_base_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 22.7},
						transform: [0.15, 22.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_base_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 22.7},
						transform: [0.15, 22.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.193, 0.469], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: -45.15, ty: -13.05},
						transform: [-45.15, -13.05, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.831, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.049, b: -0.999, c: 0.999, d: -0.049, tx: -42.3, ty: -12.05},
						transform: [-42.3, -12.05, 1, 1, 1.62, -1.62, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 11,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.12, b: -0.993, c: 0.993, d: 0.12, tx: -42.3, ty: -12.05},
						transform: [-42.3, -12.05, 1, 1, 1.45, -1.45, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.049, b: -0.999, c: 0.999, d: -0.049, tx: -42.3, ty: -12.05},
						transform: [-42.3, -12.05, 1, 1, 1.62, -1.62, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.193, 0.469], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.069, c: -0.069, d: 0.998, tx: 14.7, ty: 43.1},
						transform: [14.7, 43.1, 1, 1, -0.069, 0.069, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.831, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.776, b: -0.63, c: 0.53, d: 0.653, tx: 22, ty: 40.65},
						transform: [22, 40.65, 1, 0.841, 0.682, -0.682, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 11,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.876, b: -0.483, c: 0.406, d: 0.737, tx: 22.05, ty: 40.65},
						transform: [22.05, 40.65, 1, 0.841, 0.504, -0.504, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.776, b: -0.63, c: 0.53, d: 0.653, tx: 22, ty: 40.65},
						transform: [22, 40.65, 1, 0.841, 0.682, -0.682, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.193, 0.469], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -0.998, b: 0.065, c: 0.065, d: 0.998, tx: -14.05, ty: 43.1},
						transform: [-14.05, 43.1, 1, 1, 0.065, 3.076, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.831, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -0.821, b: -0.57, c: -0.484, d: 0.698, tx: -24, ty: 40.75},
						transform: [-24, 40.75, 1, 0.849, -0.607, -2.535, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 11,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -0.899, b: -0.439, c: -0.373, d: 0.763, tx: -24, ty: 40.75},
						transform: [-24, 40.75, 1, 0.849, -0.454, -2.687, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -0.821, b: -0.57, c: -0.484, d: 0.698, tx: -24, ty: 40.75},
						transform: [-24, 40.75, 1, 0.849, -0.607, -2.535, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.193, 0.469], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "base_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.003, d: 0.936, tx: -0.6, ty: -7.8},
						transform: [-0.6, -7.8, 1, 0.936, 0.003, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.831, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.024, tx: -0.6, ty: -7.8},
						transform: [-0.6, -7.8, 1, 1.024, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 11,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.024, tx: -0.6, ty: -5.95},
						transform: [-0.6, -5.95, 1, 1.024, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.024, tx: -0.6, ty: -7.8},
						transform: [-0.6, -7.8, 1, 1.024, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.193, 0.469], [0.567, 1], [1, 1], ],
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
						classname: "_cinnamon_boss_mouth_2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: -5.3},
						transform: [-1.15, -5.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.831, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_cinnamon_boss_mouth_3",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: 0.85},
						transform: [-1.15, 0.85, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 11,
						classname: "_cinnamon_boss_mouth_3",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: 4.8},
						transform: [-1.15, 4.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_mouth_3",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: 0.85},
						transform: [-1.15, 0.85, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.193, 0.469], [0.567, 1], [1, 1], ],
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
						classname: "_cinnamon_boss_eye_2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.886, tx: -17.1, ty: -24},
						transform: [-17.1, -24, 1, 0.886, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.831, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_cinnamon_boss_eye_3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -18.35},
						transform: [-17.1, -18.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 11,
						classname: "_cinnamon_boss_eye_3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -15},
						transform: [-17.1, -15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_eye_3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -18.35},
						transform: [-17.1, -18.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.193, 0.469], [0.567, 1], [1, 1], ],
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
						classname: "_cinnamon_boss_eye_2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.886, tx: 16.25, ty: -24},
						transform: [16.25, -24, 1, 0.886, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.831, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_cinnamon_boss_eye_3",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -18.35},
						transform: [16.25, -18.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 11,
						classname: "_cinnamon_boss_eye_3",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -15},
						transform: [16.25, -15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_eye_3",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -18.35},
						transform: [16.25, -18.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.193, 0.469], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "nose_X",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -16},
						transform: [-0.65, -16, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.831, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -10.4},
						transform: [-0.65, -10.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 11,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -7.05},
						transform: [-0.65, -7.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -10.4},
						transform: [-0.65, -10.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.193, 0.469], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "laserbox",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_cinnamon_boss_laserbox",
						instancename: "laserbox1",
						matrix: {a: 0.104, b: 0, c: 0, d: 0.104, tx: 12.25, ty: -20.55},
						transform: [12.25, -20.55, 0.104, 0.104, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.831, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_cinnamon_boss_laserbox",
						instancename: "laserbox1",
						matrix: {a: 0.104, b: 0, c: 0, d: 0.104, tx: 12.25, ty: -15.4},
						transform: [12.25, -15.4, 0.104, 0.104, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 11,
						classname: "_cinnamon_boss_laserbox",
						instancename: "laserbox1",
						matrix: {a: 0.104, b: 0, c: 0, d: 0.104, tx: 12.25, ty: -12.9},
						transform: [12.25, -12.9, 0.104, 0.104, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_laserbox",
						instancename: "laserbox1",
						matrix: {a: 0.104, b: 0, c: 0, d: 0.104, tx: 12.25, ty: -14.95},
						transform: [12.25, -14.95, 0.104, 0.104, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "laserbox",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_cinnamon_boss_laserbox",
						instancename: "laserbox2",
						matrix: {a: 0.104, b: 0, c: 0, d: 0.104, tx: -13.45, ty: -21.1},
						transform: [-13.45, -21.1, 0.104, 0.104, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.831, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_cinnamon_boss_laserbox",
						instancename: "laserbox2",
						matrix: {a: 0.104, b: 0, c: 0, d: 0.104, tx: -13.45, ty: -15.7},
						transform: [-13.45, -15.7, 0.104, 0.104, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 11,
						classname: "_cinnamon_boss_laserbox",
						instancename: "laserbox2",
						matrix: {a: 0.104, b: 0, c: 0, d: 0.104, tx: -13.45, ty: -13.2},
						transform: [-13.45, -13.2, 0.104, 0.104, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_laserbox",
						instancename: "laserbox2",
						matrix: {a: 0.104, b: 0, c: 0, d: 0.104, tx: -13.45, ty: -15.25},
						transform: [-13.45, -15.25, 0.104, 0.104, 0, 0, 0],
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
					},
					{
						from: 3,
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
	"_cinnamon_boss_cinnamon_boss_dizzy": {
		type: "movieclip",
		fps: 30,
		totalFrames: 25,
		labels: {loop: {from:9, to:23}, },
		layers: [
			{
				name: "safeglow",
				keys: [
					{
						from: 0,
						to: 24,
						classname: "_cinnamon_boss_safeglow_x",
						instancename: "",
						matrix: {a: 5.8, b: 0, c: 0, d: 5.8, tx: 1.45, ty: 7.45},
						transform: [1.45, 7.45, 5.8, 5.8, 0, 0, 0],
						alpha: 0,
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
						to: 3,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.028, b: -1, c: -1, d: -0.028, tx: 43.75, ty: -12.1},
						transform: [43.75, -12.1, 1, 1, -1.598, -1.543, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.233, 0.414], [0.671, 0.815], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.772, b: -0.635, c: -0.635, d: -0.772, tx: 43.8, ty: -12.15},
						transform: [43.8, -12.15, 1, 1, -2.453, -0.688, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 24,
					},
				]
			},
			{
				name: "base_2_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_cinnamon_boss_base_22_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.979, tx: 0.15, ty: 23.25},
						transform: [0.15, 23.25, 1, 0.979, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 16,
						classname: "_cinnamon_boss_base_22_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 17.2},
						transform: [0.15, 17.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 23,
						classname: "_cinnamon_boss_base_22_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 16.5},
						transform: [0.15, 16.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_cinnamon_boss_base_22_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 17.2},
						transform: [0.15, 17.2, 1, 1, 0, 0, 0],
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
						to: 3,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.049, b: -0.999, c: 0.999, d: -0.049, tx: -42.3, ty: -12.05},
						transform: [-42.3, -12.05, 1, 1, 1.62, -1.62, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.233, 0.414], [0.671, 0.815], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.725, b: -0.688, c: 0.688, d: -0.725, tx: -42.35, ty: -12},
						transform: [-42.35, -12, 1, 1, 2.382, -2.382, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.325, 0.367], [0.659, 0.701], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 8,
					},
					{
						from: 9,
						to: 16,
					},
					{
						from: 17,
						to: 23,
					},
					{
						from: 24,
						to: 24,
					},
				]
			},
			{
				name: "leg_1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.776, b: -0.63, c: 0.53, d: 0.653, tx: 22, ty: 40.65},
						transform: [22, 40.65, 1, 0.841, 0.682, -0.682, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 16,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.7, ty: 38.15},
						transform: [14.7, 38.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 23,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.04, c: -0.04, d: 0.999, tx: 14.7, ty: 36.4},
						transform: [14.7, 36.4, 1, 1, -0.04, 0.04, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.7, ty: 38.15},
						transform: [14.7, 38.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -0.821, b: -0.57, c: -0.484, d: 0.698, tx: -24, ty: 40.75},
						transform: [-24, 40.75, 1, 0.849, -0.607, -2.535, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 16,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -14.05, ty: 38.15},
						transform: [-14.05, 38.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 23,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -0.999, b: 0.038, c: 0.038, d: 0.999, tx: -14.05, ty: 36.4},
						transform: [-14.05, 36.4, 1, 1, 0.038, 3.103, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -14.05, ty: 38.15},
						transform: [-14.05, 38.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "base_1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.024, tx: -0.6, ty: -7.8},
						transform: [-0.6, -7.8, 1, 1.024, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 16,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.6, ty: -3.6},
						transform: [-0.6, -3.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 23,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.966, tx: -0.6, ty: -3.25},
						transform: [-0.6, -3.25, 1, 0.966, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.6, ty: -3.6},
						transform: [-0.6, -3.6, 1, 1, 0, 0, 0],
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
						to: 8,
						classname: "_cinnamon_boss_mouth_toresfirega",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: 0.85},
						transform: [-1.15, 0.85, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 16,
						classname: "_cinnamon_boss_mouth_resfriega",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: 11.15},
						transform: [-1.15, 11.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 23,
						classname: "_cinnamon_boss_mouth_resfriega",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: 12.35},
						transform: [-1.15, 12.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_cinnamon_boss_mouth_resfriega",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: 11.15},
						transform: [-1.15, 11.15, 1, 1, 0, 3.142, NaN],
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
						to: 8,
						classname: "_cinnamon_boss_eye_torefriegada",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -18.35},
						transform: [-17.1, -18.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 16,
						classname: "_cinnamon_boss_eye_resfiega_loop",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -11.15},
						transform: [-17.1, -11.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 23,
						classname: "_cinnamon_boss_eye_resfiega_loop",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -9.95},
						transform: [-17.1, -9.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_cinnamon_boss_eye_resfiega_loop",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -11.15},
						transform: [-17.1, -11.15, 1, 1, 0, 0, 0],
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
						to: 8,
						classname: "_cinnamon_boss_eye_torefriegada",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -18.35},
						transform: [16.25, -18.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 16,
						classname: "_cinnamon_boss_eye_resfiega_loop",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -11.7},
						transform: [16.25, -11.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 23,
						classname: "_cinnamon_boss_eye_resfiega_loop",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -10.5},
						transform: [16.25, -10.5, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_cinnamon_boss_eye_resfiega_loop",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -11.7},
						transform: [16.25, -11.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "nose_X",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -10.4},
						transform: [-0.65, -10.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 16,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -1.1},
						transform: [-0.65, -1.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 23,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: 0.1},
						transform: [-0.65, 0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -1.1},
						transform: [-0.65, -1.1, 1, 1, 0, 0, 0],
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
					},
					{
						from: 5,
						to: 8,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: 0.585, b: -0.811, c: 0.811, d: 0.585, tx: 49.7, ty: 0.25},
						transform: [49.7, 0.25, 1, 1, 0.946, -0.946, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.232, 0.343], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 16,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 49.7, ty: 0.3},
						transform: [49.7, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 23,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: 0.974, b: -0.012, c: 0.012, d: 1, tx: 49.8, ty: 0.25},
						transform: [49.8, 0.25, 0.974, 1, 0.012, -0.012, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 49.7, ty: 0.3},
						transform: [49.7, 0.3, 1, 1, 0, 0, 0],
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
					},
					{
						from: 5,
						to: 8,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: -0.391, b: -0.92, c: -0.92, d: 0.391, tx: -49.85, ty: 0.25},
						transform: [-49.85, 0.25, 1, 1, -1.169, -1.973, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.232, 0.343], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 16,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -49.85, ty: 0.3},
						transform: [-49.85, 0.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 23,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: -0.974, b: -0.012, c: -0.012, d: 1, tx: -49.95, ty: 0.25},
						transform: [-49.95, 0.25, 0.974, 1, -0.012, -3.129, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -49.85, ty: 0.3},
						transform: [-49.85, 0.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Capa 3 copia",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_cinnamon_boss_satanicbox",
						instancename: "",
						matrix: {a: 0.148, b: 0, c: 0, d: 0.148, tx: -13.35, ty: -15.75},
						transform: [-13.35, -15.75, 0.148, 0.148, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.625, 0], [0.625, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_cinnamon_boss_satanicbox",
						instancename: "",
						matrix: {a: 0.148, b: 0, c: 0, d: 0.148, tx: -13.35, ty: -8.85},
						transform: [-13.35, -8.85, 0.148, 0.148, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 16,
						classname: "_cinnamon_boss_satanicbox",
						instancename: "",
						matrix: {a: 0.148, b: 0, c: 0, d: 0.148, tx: -11.95, ty: -6.1},
						transform: [-11.95, -6.1, 0.148, 0.148, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.625, 0], [0.625, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 23,
						classname: "_cinnamon_boss_satanicbox",
						instancename: "",
						matrix: {a: 0.148, b: 0, c: 0, d: 0.148, tx: -14.05, ty: -6.1},
						transform: [-14.05, -6.1, 0.148, 0.148, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.625, 0], [0.625, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_cinnamon_boss_satanicbox",
						instancename: "",
						matrix: {a: 0.148, b: 0, c: 0, d: 0.148, tx: -11.95, ty: -6.1},
						transform: [-11.95, -6.1, 0.148, 0.148, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Capa 3 copia copia",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_cinnamon_boss_satanicbox",
						instancename: "",
						matrix: {a: 0.148, b: 0, c: 0, d: 0.148, tx: 12.55, ty: -15.75},
						transform: [12.55, -15.75, 0.148, 0.148, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.625, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_cinnamon_boss_satanicbox",
						instancename: "",
						matrix: {a: 0.148, b: 0, c: 0, d: 0.148, tx: 12.55, ty: -8.85},
						transform: [12.55, -8.85, 0.148, 0.148, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 16,
						classname: "_cinnamon_boss_satanicbox",
						instancename: "",
						matrix: {a: 0.148, b: 0, c: 0, d: 0.148, tx: 12.55, ty: -6.1},
						transform: [12.55, -6.1, 0.148, 0.148, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.625, 0], [0.625, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 23,
						classname: "_cinnamon_boss_satanicbox",
						instancename: "",
						matrix: {a: 0.148, b: 0, c: 0, d: 0.148, tx: 13.95, ty: -6.1},
						transform: [13.95, -6.1, 0.148, 0.148, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.625, 0], [0.625, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_cinnamon_boss_satanicbox",
						instancename: "",
						matrix: {a: 0.148, b: 0, c: 0, d: 0.148, tx: 12.55, ty: -6.1},
						transform: [12.55, -6.1, 0.148, 0.148, 0, 0, 0],
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
						to: 8,
					},
					{
						from: 9,
						to: 24,
						classname: "_cinnamon_boss_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.74, b: 0, c: 0, d: 0.44, tx: 0, ty: -38.2},
						transform: [0, -38.2, 0.74, 0.44, 0, 0, 0],
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
						to: 8,
					},
					{
						from: 9,
						to: 23,
					},
					{
						from: 24,
						to: 24,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_cinnamon_boss_cinnamon_boss_dizzy_end": {
		type: "movieclip",
		fps: 30,
		totalFrames: 24,
		labels: {},
		layers: [
			{
				name: "safeglow",
				keys: [
					{
						from: 0,
						to: 23,
						classname: "_cinnamon_boss_safeglow_x",
						instancename: "",
						matrix: {a: 5.8, b: 0, c: 0, d: 5.8, tx: 1.45, ty: 7.45},
						transform: [1.45, 7.45, 5.8, 5.8, 0, 0, 0],
						alpha: 0,
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
						to: 12,
					},
					{
						from: 13,
						to: 17,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 1, b: -0.022, c: -0.022, d: -1, tx: 44.05, ty: -12.05},
						transform: [44.05, -12.05, 1, 1, -3.12, -0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 22,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.926, b: -0.378, c: -0.378, d: -0.926, tx: 44.1, ty: -12.05},
						transform: [44.1, -12.05, 1, 1, -2.754, -0.388, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.967, b: -0.255, c: -0.255, d: -0.967, tx: 44.1, ty: -12.05},
						transform: [44.1, -12.05, 1, 1, -2.884, -0.257, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "base_2_x",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_cinnamon_boss_base_22_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 17.2},
						transform: [0.15, 17.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.409, 0.038], [0.75, 0.377], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_base_22_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 19.25},
						transform: [0.15, 19.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 17,
						classname: "_cinnamon_boss_base_22_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.982, tx: 0.15, ty: 20.8},
						transform: [0.15, 20.8, 1, 0.982, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 22,
						classname: "_cinnamon_boss_base_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 23.6},
						transform: [0.15, 23.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_cinnamon_boss_base_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 23.6},
						transform: [0.15, 23.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm_1_x",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 17,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.989, b: -0.15, c: 0.15, d: -0.989, tx: -42.4, ty: -12.05},
						transform: [-42.4, -12.05, 1, 1, 2.991, -2.991, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 22,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.909, b: -0.417, c: 0.417, d: -0.909, tx: -42.3, ty: -12.05},
						transform: [-42.3, -12.05, 1, 1, 2.711, -2.711, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.937, b: -0.349, c: 0.349, d: -0.937, tx: -42.35, ty: -12.05},
						transform: [-42.35, -12.05, 1, 1, 2.785, -2.785, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_1_x",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.7, ty: 38.15},
						transform: [14.7, 38.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.409, 0.038], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 17,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.056, c: -0.056, d: 0.998, tx: 14.7, ty: 43.1},
						transform: [14.7, 43.1, 1, 1, -0.056, 0.056, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 22,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.069, c: 0.069, d: 0.998, tx: 14.7, ty: 43.1},
						transform: [14.7, 43.1, 1, 1, 0.069, -0.069, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.7, ty: 43.1},
						transform: [14.7, 43.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_1_x",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -14.05, ty: 38.15},
						transform: [-14.05, 38.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.409, 0.038], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 17,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -0.998, b: 0.056, c: 0.056, d: 0.998, tx: -14.05, ty: 43.1},
						transform: [-14.05, 43.1, 1, 1, 0.056, 3.086, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 22,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -0.997, b: -0.078, c: -0.078, d: 0.997, tx: -14.05, ty: 43.1},
						transform: [-14.05, 43.1, 1, 1, -0.078, -3.063, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -14.05, ty: 43.1},
						transform: [-14.05, 43.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "base_1_x",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.6, ty: -3.6},
						transform: [-0.6, -3.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.414, 0.034], [0.653, 0.799], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.038, tx: -0.6, ty: -8.15},
						transform: [-0.6, -8.15, 1, 1.038, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.316, 0.635], [0.648, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 17,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.6, ty: -7.8},
						transform: [-0.6, -7.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 22,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.983, tx: -0.6, ty: -8.65},
						transform: [-0.6, -8.65, 1, 0.983, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.6, ty: -7.8},
						transform: [-0.6, -7.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
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
						classname: "_cinnamon_boss_mouth_resfriega",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: 11.15},
						transform: [-1.15, 11.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.409, 0.038], [0.75, 0.377], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_mouth_resfriega",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: 5.5},
						transform: [-1.15, 5.5, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 17,
						classname: "_cinnamon_boss_mouth",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: 5.25},
						transform: [-1.15, 5.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 22,
						classname: "_cinnamon_boss_mouth",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: -3},
						transform: [-1.15, -3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_cinnamon_boss_mouth",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: -2.05},
						transform: [-1.15, -2.05, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye_1",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_cinnamon_boss_eye_refriegadaend",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -11.15},
						transform: [-17.1, -11.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.409, 0.038], [0.75, 0.377], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_eye_refriegadaend",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -15.7},
						transform: [-17.1, -15.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 17,
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -15.6},
						transform: [-17.1, -15.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 22,
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -22.85},
						transform: [-17.1, -22.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -21.25},
						transform: [-17.1, -21.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye_1",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_cinnamon_boss_eye_refriegadaend",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -11.7},
						transform: [16.25, -11.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.409, 0.038], [0.75, 0.377], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_eye_refriegadaend",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -16.05},
						transform: [16.25, -16.05, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 17,
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -14},
						transform: [16.25, -14, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 22,
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -22.35},
						transform: [16.25, -22.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -21.25},
						transform: [16.25, -21.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "nose_X",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -1.1},
						transform: [-0.65, -1.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.409, 0.038], [0.75, 0.377], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -6.25},
						transform: [-0.65, -6.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 17,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -6.7},
						transform: [-0.65, -6.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 22,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -14.4},
						transform: [-0.65, -14.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -13.3},
						transform: [-0.65, -13.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm_refriega",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 49.7, ty: 0.3},
						transform: [49.7, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.409, 0.038], [0.75, 0.377], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: 0.454, b: -0.891, c: 0.685, d: 0.349, tx: 51, ty: -3.35},
						transform: [51, -3.35, 1, 0.769, 1.099, -1.099, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 23,
					},
				]
			},
			{
				name: "arm_refriega",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -49.85, ty: 0.3},
						transform: [-49.85, 0.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.409, 0.038], [0.75, 0.377], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: -0.326, b: -0.945, c: -0.713, d: 0.246, tx: -48.35, ty: -0.95},
						transform: [-48.35, -0.95, 1, 0.754, -1.239, -1.903, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 23,
					},
				]
			},
			{
				name: "Capa 2",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_cinnamon_boss_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.44, b: 0, c: 0, d: 0.44, tx: 0, ty: -45},
						transform: [0, -45, 0.44, 0.44, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 23,
					},
				]
			},
			{
				name: "Layer 14",
				keys: [
					{
						from: 0,
						to: 22,
					},
					{
						from: 23,
						to: 23,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_cinnamon_boss_cinnamon_boss_hurt": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {},
		layers: [
			{
				name: "safeglow",
				keys: [
					{
						from: 0,
						to: 18,
						classname: "_cinnamon_boss_safeglow_x",
						instancename: "",
						matrix: {a: 5.8, b: 0, c: 0, d: 5.8, tx: 1.45, ty: 7.45},
						transform: [1.45, 7.45, 5.8, 5.8, 0, 0, 0],
						alpha: 0,
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
						to: 10,
					},
					{
						from: 11,
						to: 11,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.95, b: -0.313, c: -0.313, d: 0.95, tx: 46.3, ty: -7.2},
						transform: [46.3, -7.2, 1, 1, -0.318, -2.823, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.302, 0.342], [0.621, 0.7], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.628, b: -0.777, c: -0.777, d: 0.628, tx: 45, ty: -9.85},
						transform: [45, -9.85, 0.999, 0.999, -0.891, -2.251, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.258, 0.577], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.174, c: -0.174, d: -0.985, tx: 44.1, ty: -12.05},
						transform: [44.1, -12.05, 1, 1, -2.967, -0.175, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.967, b: -0.255, c: -0.255, d: -0.967, tx: 44.1, ty: -12.05},
						transform: [44.1, -12.05, 1, 1, -2.884, -0.257, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "base_2_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_cinnamon_boss_base_22_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 17.2},
						transform: [0.15, 17.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.425], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_cinnamon_boss_base_22_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 21.85},
						transform: [0.15, 21.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.795, 0.5], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_cinnamon_boss_base_22_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 22.9},
						transform: [0.15, 22.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.252, 0.425], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_cinnamon_boss_base_22_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 20.8},
						transform: [0.15, 20.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.473], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_cinnamon_boss_base_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 23.6},
						transform: [0.15, 23.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_cinnamon_boss_base_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 23.6},
						transform: [0.15, 23.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm_1_x",
				keys: [
					{
						from: 0,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.95, b: -0.313, c: 0.313, d: 0.95, tx: -43.65, ty: -9.4},
						transform: [-43.65, -9.4, 1, 1, 0.319, -0.319, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.302, 0.342], [0.621, 0.7], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.671, b: -0.74, c: 0.74, d: 0.671, tx: -43.05, ty: -10.85},
						transform: [-43.05, -10.85, 0.999, 0.999, 0.834, -0.834, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.258, 0.577], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.967, b: -0.254, c: 0.254, d: -0.967, tx: -42.35, ty: -12.05},
						transform: [-42.35, -12.05, 1, 1, 2.885, -2.885, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.937, b: -0.349, c: 0.349, d: -0.937, tx: -42.35, ty: -12.05},
						transform: [-42.35, -12.05, 1, 1, 2.785, -2.785, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.7, ty: 38.15},
						transform: [14.7, 38.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.425], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.834, b: -0.552, c: 0.552, d: 0.834, tx: 18.45, ty: 42.15},
						transform: [18.45, 42.15, 1, 1, 0.584, -0.584, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.795, 0.5], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.855, b: -0.518, c: 0.518, d: 0.855, tx: 14.7, ty: 38.15},
						transform: [14.7, 38.15, 1, 1, 0.545, -0.545, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.252, 0.425], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.809, b: -0.587, c: 0.587, d: 0.809, tx: 14.7, ty: 43.1},
						transform: [14.7, 43.1, 1, 1, 0.628, -0.628, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.473], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.069, c: -0.069, d: 0.998, tx: 14.7, ty: 43.1},
						transform: [14.7, 43.1, 1, 1, -0.069, 0.069, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.7, ty: 43.1},
						transform: [14.7, 43.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -14.05, ty: 38.15},
						transform: [-14.05, 38.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.425], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -0.794, b: -0.608, c: -0.608, d: 0.794, tx: -14.9, ty: 40.4},
						transform: [-14.9, 40.4, 1, 1, -0.654, -2.487, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.795, 0.5], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -0.836, b: -0.548, c: -0.548, d: 0.836, tx: -14.05, ty: 38.15},
						transform: [-14.05, 38.15, 1, 1, -0.58, -2.561, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.252, 0.425], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -0.873, b: -0.488, c: -0.488, d: 0.873, tx: -14.05, ty: 43.1},
						transform: [-14.05, 43.1, 1, 1, -0.51, -2.632, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.473], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -1, b: 0.03, c: 0.03, d: 1, tx: -14.05, ty: 43.1},
						transform: [-14.05, 43.1, 1, 1, 0.03, 3.112, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -14.05, ty: 43.1},
						transform: [-14.05, 43.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "base_1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.6, ty: -3.6},
						transform: [-0.6, -3.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.425], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.959, tx: -0.6, ty: 2.4},
						transform: [-0.6, 2.4, 1, 0.959, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.795, 0.5], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.004, tx: -0.6, ty: -3.6},
						transform: [-0.6, -3.6, 1, 1.004, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.252, 0.425], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.6, ty: -4.25},
						transform: [-0.6, -4.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.473], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.983, tx: -0.6, ty: -8.65},
						transform: [-0.6, -8.65, 1, 0.983, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.6, ty: -7.8},
						transform: [-0.6, -7.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
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
						classname: "_cinnamon_boss_mouth_hurt",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: 11.15},
						transform: [-1.15, 11.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.425], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_cinnamon_boss_mouth_hurt",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: 21.4},
						transform: [-1.15, 21.4, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.795, 0.5], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_cinnamon_boss_mouth_hurt",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: 7.1},
						transform: [-1.15, 7.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.252, 0.425], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_cinnamon_boss_mouth_hurt",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: 1.5},
						transform: [-1.15, 1.5, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.473], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_cinnamon_boss_mouth",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: -3.05},
						transform: [-1.15, -3.05, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_cinnamon_boss_mouth",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: -2.05},
						transform: [-1.15, -2.05, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
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
						classname: "_cinnamon_boss_eye_hurt",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -11.15},
						transform: [-17.1, -11.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.425], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_cinnamon_boss_eye_hurt",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -0.9},
						transform: [-17.1, -0.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.795, 0.5], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_cinnamon_boss_eye_hurt",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -15.2},
						transform: [-17.1, -15.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.252, 0.425], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_cinnamon_boss_eye_hurt",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -17.7},
						transform: [-17.1, -17.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.473], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -22.25},
						transform: [-17.1, -22.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -21.25},
						transform: [-17.1, -21.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
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
						classname: "_cinnamon_boss_eye_hurt",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -11.7},
						transform: [16.25, -11.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.425], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_cinnamon_boss_eye_hurt",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -1.45},
						transform: [16.25, -1.45, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.795, 0.5], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_cinnamon_boss_eye_hurt",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -15.75},
						transform: [16.25, -15.75, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.252, 0.425], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_cinnamon_boss_eye_hurt",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -17.7},
						transform: [16.25, -17.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.473], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -22.25},
						transform: [16.25, -22.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_cinnamon_boss_eye_1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -21.25},
						transform: [16.25, -21.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "nose_X",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -1.1},
						transform: [-0.65, -1.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.425], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: 9.15},
						transform: [-0.65, 9.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.795, 0.5], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -5.15},
						transform: [-0.65, -5.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.252, 0.425], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -9.75},
						transform: [-0.65, -9.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.473], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -14.3},
						transform: [-0.65, -14.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -13.3},
						transform: [-0.65, -13.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "armrefriega",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: 0.736, b: 0.677, c: -0.677, d: 0.736, tx: 49.8, ty: 0.2},
						transform: [49.8, 0.2, 1, 1, -0.743, 0.743, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.425], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: 0.602, b: 0.799, c: -0.799, d: 0.602, tx: 49.9, ty: 6.05},
						transform: [49.9, 6.05, 1, 1, -0.925, 0.925, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.795, 0.5], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: 0.405, b: 0.914, c: -0.914, d: 0.405, tx: 49.8, ty: 0.2},
						transform: [49.8, 0.2, 1, 1, -1.153, 1.153, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.281, 0.327], [0.617, 0.718], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 18,
					},
				]
			},
			{
				name: "armrefriega",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: -0.849, b: 0.529, c: 0.529, d: 0.849, tx: -49.9, ty: 0.25},
						transform: [-49.9, 0.25, 1, 1, 0.557, 2.585, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.425], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: -0.55, b: 0.835, c: 0.835, d: 0.55, tx: -50.4, ty: 3.9},
						transform: [-50.4, 3.9, 1, 1, 0.988, 2.154, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.795, 0.5], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: -0.467, b: 0.884, c: 0.884, d: 0.467, tx: -49.9, ty: 0.25},
						transform: [-49.9, 0.25, 1, 1, 1.085, 2.057, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.281, 0.327], [0.617, 0.718], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 18,
					},
				]
			},
			{
				name: "Layer 14",
				keys: [
					{
						from: 0,
						to: 17,
					},
					{
						from: 18,
						to: 18,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_cinnamon_boss_cinnamon_boss_dying": {
		type: "movieclip",
		fps: 30,
		totalFrames: 10,
		labels: {},
		layers: [
			{
				name: "safeglow",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_cinnamon_boss_safeglow_x",
						instancename: "",
						matrix: {a: 5.8, b: 0, c: 0, d: 5.8, tx: 1.45, ty: 7.45},
						transform: [1.45, 7.45, 5.8, 5.8, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "base_2_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_cinnamon_boss_base_22_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 19.1},
						transform: [0.15, 19.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 8,
						classname: "_cinnamon_boss_base_22_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 21.85},
						transform: [0.15, 21.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.795, 0.5], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_cinnamon_boss_base_22_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 19.1},
						transform: [0.15, 19.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.885, b: -0.465, c: 0.465, d: 0.885, tx: 16.2, ty: 32.8},
						transform: [16.2, 32.8, 0.999, 0.999, 0.484, -0.484, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 8,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.834, b: -0.552, c: 0.552, d: 0.834, tx: 18.45, ty: 36.05},
						transform: [18.45, 36.05, 1, 1, 0.584, -0.584, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.795, 0.5], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.885, b: -0.465, c: 0.465, d: 0.885, tx: 16.2, ty: 32.8},
						transform: [16.2, 32.8, 0.999, 0.999, 0.484, -0.484, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -0.872, b: -0.488, c: -0.488, d: 0.872, tx: -14.35, ty: 32.15},
						transform: [-14.35, 32.15, 0.999, 0.999, -0.51, -2.631, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 8,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -0.794, b: -0.608, c: -0.608, d: 0.794, tx: -14.9, ty: 34.3},
						transform: [-14.9, 34.3, 1, 1, -0.654, -2.487, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.795, 0.5], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -0.872, b: -0.488, c: -0.488, d: 0.872, tx: -14.35, ty: 32.15},
						transform: [-14.35, 32.15, 0.999, 0.999, -0.51, -2.631, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "base_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.984, tx: -0.6, ty: -1.2},
						transform: [-0.6, -1.2, 1, 0.984, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 8,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.959, tx: -0.6, ty: 2.4},
						transform: [-0.6, 2.4, 1, 0.959, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.795, 0.5], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.984, tx: -0.6, ty: -1.2},
						transform: [-0.6, -1.2, 1, 0.984, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
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
						classname: "_cinnamon_boss_mouth_dying",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: 15.3},
						transform: [-1.15, 15.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 8,
						classname: "_cinnamon_boss_mouth_hurt",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: 21.4},
						transform: [-1.15, 21.4, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.795, 0.5], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_cinnamon_boss_mouth_dying",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: 15.3},
						transform: [-1.15, 15.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
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
						classname: "_cinnamon_boss_eye_dying",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -7},
						transform: [-17.1, -7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 8,
						classname: "_cinnamon_boss_eye_dying",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -0.9},
						transform: [-17.1, -0.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.795, 0.5], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_cinnamon_boss_eye_dying",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -7},
						transform: [-17.1, -7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
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
						classname: "_cinnamon_boss_eye_dying",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -7.55},
						transform: [16.25, -7.55, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 8,
						classname: "_cinnamon_boss_eye_dying",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -1.45},
						transform: [16.25, -1.45, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.795, 0.5], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_cinnamon_boss_eye_dying",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -7.55},
						transform: [16.25, -7.55, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "nose_X",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: 3.05},
						transform: [-0.65, 3.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 8,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: 9.15},
						transform: [-0.65, 9.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.795, 0.5], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: 3.05},
						transform: [-0.65, 3.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: 0.5, b: 0.864, c: -0.864, d: 0.5, tx: 49.95, ty: 2.6},
						transform: [49.95, 2.6, 0.998, 0.998, -1.046, 1.046, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 8,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: 0.523, b: 0.852, c: -0.852, d: 0.523, tx: 49.9, ty: 6.05},
						transform: [49.9, 6.05, 1, 1, -1.02, 1.02, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.795, 0.5], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: 0.5, b: 0.864, c: -0.864, d: 0.5, tx: 49.95, ty: 2.6},
						transform: [49.95, 2.6, 0.998, 0.998, -1.046, 1.046, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "base_2_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: -0.494, b: 0.867, c: 0.867, d: 0.494, tx: -50.3, ty: 1.8},
						transform: [-50.3, 1.8, 0.998, 0.998, 1.053, 2.089, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 8,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: -0.532, b: 0.846, c: 0.846, d: 0.532, tx: -50.4, ty: 3.9},
						transform: [-50.4, 3.9, 1, 1, 1.009, 2.132, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.795, 0.5], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: -0.494, b: 0.867, c: 0.867, d: 0.494, tx: -50.3, ty: 1.8},
						transform: [-50.3, 1.8, 0.998, 0.998, 1.053, 2.089, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_cinnamon_boss_cinnamon_nice_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 47,
		labels: {loop: {from:13, to:45}, },
		layers: [
			{
				name: "Layer 21",
				keys: [
					{
						from: 0,
						to: 46,
						classname: "_cinnamon_boss_glow_hands_2",
						instancename: "",
						matrix: {a: 3.704, b: 0, c: 0, d: 3.704, tx: 0.05, ty: 6.45},
						transform: [0.05, 6.45, 3.704, 3.704, 0, 0, 0],
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
						to: 1,
						classname: "_cinnamon_boss_base_22_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 19.1},
						transform: [0.15, 19.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.31, 0.292], [0.694, 0.653], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_cinnamon_boss_base_22_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 19.1},
						transform: [0.15, 19.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.966, b: -0.26, c: -0.26, d: -0.966, tx: 44.2, ty: -9.6},
						transform: [44.2, -9.6, 1, 1, -2.879, -0.263, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.366], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.811, b: -0.584, c: -0.584, d: -0.811, tx: 44.2, ty: -12.05},
						transform: [44.2, -12.05, 1, 1, -2.517, -0.624, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 29,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.978, b: -0.208, c: -0.208, d: -0.978, tx: 44.15, ty: -12.05},
						transform: [44.15, -12.05, 1, 1, -2.932, -0.21, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 45,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.959, b: -0.284, c: -0.284, d: -0.959, tx: 44.15, ty: -12.05},
						transform: [44.15, -12.05, 1, 1, -2.854, -0.288, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: 0.978, b: -0.208, c: -0.208, d: -0.978, tx: 44.15, ty: -12.05},
						transform: [44.15, -12.05, 1, 1, -2.932, -0.21, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "base_2_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.884, b: -0.462, c: 0.462, d: 0.884, tx: 16.2, ty: 32.85},
						transform: [16.2, 32.85, 0.998, 0.998, 0.482, -0.482, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.31, 0.292], [0.694, 0.653], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: 0.885, b: -0.465, c: 0.465, d: 0.885, tx: 16.2, ty: 32.8},
						transform: [16.2, 32.8, 0.999, 0.999, 0.484, -0.484, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_cinnamon_boss_base_22_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 18.3},
						transform: [0.15, 18.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.366], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_cinnamon_boss_base_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 21.9},
						transform: [0.15, 21.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 29,
						classname: "_cinnamon_boss_base_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 23.6},
						transform: [0.15, 23.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 45,
						classname: "_cinnamon_boss_base_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 23.6},
						transform: [0.15, 23.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_cinnamon_boss_base_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 23.6},
						transform: [0.15, 23.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm_1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -0.872, b: -0.485, c: -0.485, d: 0.872, tx: -14.3, ty: 32.15},
						transform: [-14.3, 32.15, 0.998, 0.998, -0.508, -2.634, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.31, 0.292], [0.694, 0.653], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_cinnamon_boss_leg_1_x",
						instancename: "",
						matrix: {a: -0.872, b: -0.488, c: -0.488, d: 0.872, tx: -14.35, ty: 32.15},
						transform: [-14.35, 32.15, 0.999, 0.999, -0.51, -2.631, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.967, b: -0.254, c: 0.254, d: -0.967, tx: -42.3, ty: -9.6},
						transform: [-42.3, -9.6, 1, 1, 2.885, -2.885, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.366], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.772, b: -0.635, c: 0.635, d: -0.772, tx: -42.3, ty: -12},
						transform: [-42.3, -12, 1, 1, 2.453, -2.453, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 29,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.96, b: -0.28, c: 0.28, d: -0.96, tx: -42.3, ty: -12.05},
						transform: [-42.3, -12.05, 1, 1, 2.858, -2.858, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 45,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.921, b: -0.391, c: 0.391, d: -0.921, tx: -42.3, ty: -12.05},
						transform: [-42.3, -12.05, 1, 1, 2.74, -2.74, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_cinnamon_boss_arm_1_x",
						instancename: "",
						matrix: {a: -0.96, b: -0.28, c: 0.28, d: -0.96, tx: -42.3, ty: -12.05},
						transform: [-42.3, -12.05, 1, 1, 2.858, -2.858, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.984, tx: -0.55, ty: -1.2},
						transform: [-0.55, -1.2, 1, 0.984, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.31, 0.292], [0.694, 0.653], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.984, tx: -0.6, ty: -1.2},
						transform: [-0.6, -1.2, 1, 0.984, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_cinnamon_boss_leg_1peque_x",
						instancename: "",
						matrix: {a: 0.877, b: -0.48, c: 0.48, d: 0.877, tx: 18.9, ty: 38.15},
						transform: [18.9, 38.15, 1, 1, 0.501, -0.501, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.366], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_cinnamon_boss_leg_1peque_x",
						instancename: "",
						matrix: {a: 0.922, b: -0.387, c: 0.387, d: 0.922, tx: 18.65, ty: 41.4},
						transform: [18.65, 41.4, 1, 1, 0.397, -0.397, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 29,
						classname: "_cinnamon_boss_leg_1peque_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.7, ty: 43.1},
						transform: [14.7, 43.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 45,
						classname: "_cinnamon_boss_leg_1peque_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.051, c: -0.051, d: 0.999, tx: 14.7, ty: 43.1},
						transform: [14.7, 43.1, 1, 1, -0.052, 0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_cinnamon_boss_leg_1peque_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.7, ty: 43.1},
						transform: [14.7, 43.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_cinnamon_boss_mouth_dying",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: 15.3},
						transform: [-1.15, 15.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.31, 0.292], [0.694, 0.653], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_cinnamon_boss_mouth_dying",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: 15.3},
						transform: [-1.15, 15.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_cinnamon_boss_leg_1peque_x",
						instancename: "",
						matrix: {a: -0.898, b: -0.441, c: -0.441, d: 0.898, tx: -18.9, ty: 38.15},
						transform: [-18.9, 38.15, 1, 1, -0.457, -2.685, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.366], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_cinnamon_boss_leg_1peque_x",
						instancename: "",
						matrix: {a: -0.938, b: -0.345, c: -0.345, d: 0.938, tx: -18.6, ty: 41.4},
						transform: [-18.6, 41.4, 1, 1, -0.353, -2.789, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 29,
						classname: "_cinnamon_boss_leg_1peque_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -14.05, ty: 43.1},
						transform: [-14.05, 43.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 45,
						classname: "_cinnamon_boss_leg_1peque_x",
						instancename: "",
						matrix: {a: -0.999, b: 0.048, c: 0.048, d: 0.999, tx: -14.05, ty: 43.1},
						transform: [-14.05, 43.1, 1, 1, 0.048, 3.094, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_cinnamon_boss_leg_1peque_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -14.05, ty: 43.1},
						transform: [-14.05, 43.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "base_1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_cinnamon_boss_eye_dying",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -7},
						transform: [-17.1, -7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.31, 0.292], [0.694, 0.653], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_cinnamon_boss_eye_dying",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -7},
						transform: [-17.1, -7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.992, tx: -0.6, ty: -3.85},
						transform: [-0.6, -3.85, 1, 0.992, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.366], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.024, tx: -0.6, ty: -7.8},
						transform: [-0.6, -7.8, 1, 1.024, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 29,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.6, ty: -7.8},
						transform: [-0.6, -7.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 45,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.97, tx: -0.6, ty: -9},
						transform: [-0.6, -9, 1, 0.97, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_cinnamon_boss_base_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.6, ty: -7.8},
						transform: [-0.6, -7.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
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
						classname: "_cinnamon_boss_eye_dying",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -7.55},
						transform: [16.25, -7.55, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.31, 0.292], [0.694, 0.653], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_cinnamon_boss_eye_dying",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -7.55},
						transform: [16.25, -7.55, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_cinnamon_boss_mouth_cinna",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -0.6, ty: 14.2},
						transform: [-0.6, 14.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.366], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_cinnamon_boss_mouth_cinna",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: 4.2},
						transform: [-1.15, 4.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 29,
						classname: "_cinnamon_boss_mouth_cinna",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: -1.75},
						transform: [-1.15, -1.75, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 45,
						classname: "_cinnamon_boss_mouth_cinna",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: -2.95},
						transform: [-1.15, -2.95, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_cinnamon_boss_mouth_cinna",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -1.15, ty: -1.75},
						transform: [-1.15, -1.75, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
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
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: 3.05},
						transform: [-0.65, 3.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.31, 0.292], [0.694, 0.653], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_cinnamon_boss_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: 3.05},
						transform: [-0.65, 3.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_cinnamon_boss_eye_good",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -16.25, ty: -5.3},
						transform: [-16.25, -5.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.366], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_cinnamon_boss_eye_good",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -11.95},
						transform: [-17.1, -11.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 29,
						classname: "_cinnamon_boss_eye_good",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -16.2},
						transform: [-17.1, -16.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 45,
						classname: "_cinnamon_boss_eye_good",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -17.4},
						transform: [-17.1, -17.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_cinnamon_boss_eye_good",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -17.1, ty: -16.2},
						transform: [-17.1, -16.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
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
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: 0.899, b: 0.43, c: -0.43, d: 0.899, tx: 49.85, ty: 2.65},
						transform: [49.85, 2.65, 0.997, 0.997, -0.446, 0.446, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.31, 0.292], [0.694, 0.653], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: 0.723, b: -0.688, c: 0.688, d: 0.723, tx: 49.95, ty: 3},
						transform: [49.95, 3, 0.998, 0.998, 0.76, -0.76, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.283, 0.528], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_cinnamon_boss_eye_good",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 15.95, ty: -4.9},
						transform: [15.95, -4.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.366], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_cinnamon_boss_eye_good",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -11.25},
						transform: [16.25, -11.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 29,
						classname: "_cinnamon_boss_eye_good",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -15.2},
						transform: [16.25, -15.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 45,
						classname: "_cinnamon_boss_eye_good",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -16.4},
						transform: [16.25, -16.4, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_cinnamon_boss_eye_good",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16.25, ty: -15.2},
						transform: [16.25, -15.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.567, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "base_2_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: -0.91, b: 0.406, c: 0.406, d: 0.91, tx: -50.25, ty: 1.75},
						transform: [-50.25, 1.75, 0.997, 0.997, 0.42, 2.722, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.31, 0.292], [0.694, 0.653], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_cinnamon_boss_armrefriega",
						instancename: "",
						matrix: {a: -0.659, b: -0.75, c: -0.75, d: 0.659, tx: -50.15, ty: 1.8},
						transform: [-50.15, 1.8, 0.998, 0.998, -0.85, -2.292, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.303, 0.384], [0.638, 0.747], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 46,
					},
				]
			},
			{
				name: "base_2_x",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 45,
					},
					{
						from: 46,
						to: 46,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
			{
				name: "Capa 2",
				keys: [
					{
						from: 0,
						to: 2,
					},
					{
						from: 3,
						to: 11,
						actions: function(self){soundManager.play("cinnamon_reborn");},
					},
					{
						from: 12,
						to: 12,
						actions: function(self){soundManager.play("cinnamon_laugh");soundManager.play("cinnamon_bright");},
					},
					{
						from: 13,
						to: 46,
					},
				]
			},
		]
	},
	"_cinnamon_boss_box_physics": {
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
	"_cinnamon_boss_circle_physics": {
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
	"_cinnamon_boss_safeglow_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_safeglow_x",
		scale: 2,
		position: [-30, -27.9],
	},
	"_cinnamon_boss_arm_1_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_arm_1_x",
		scale: 2,
		position: [-10.45, -56.9],
	},
	"_cinnamon_boss_base_2_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_base_2_x",
		scale: 2,
		position: [-54.5, -79.95],
	},
	"_cinnamon_boss_leg_1_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_leg_1_x",
		scale: 2,
		position: [-9.7, -6.75],
	},
	"_cinnamon_boss_base_1_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_base_1_x",
		scale: 2,
		position: [-55.9, -52.85],
	},
	"_cinnamon_boss_mouth": {
		type: "movieclip",
		fps: 30,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "mouth_p3_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_cinnamon_boss_mouth_p3_x",
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
						from: 6,
						to: 13,
						classname: "_cinnamon_boss_mouth_p3_x",
						instancename: "",
						matrix: {a: 0.909, b: 0, c: 0, d: 1, tx: -0.8, ty: 5.85},
						transform: [-0.8, 5.85, 0.909, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_cinnamon_boss_mouth_p3_x",
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
						to: 5,
						classname: "_cinnamon_boss_mouth_p1_x",
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
						from: 6,
						to: 13,
						classname: "_cinnamon_boss_mouth_p1_x",
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
						from: 14,
						to: 14,
						classname: "_cinnamon_boss_mouth_p1_x",
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
						to: 5,
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.436, tx: -0.75, ty: -2.05},
						transform: [-0.75, -2.05, 1, 0.436, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 0.884, b: 0, c: 0, d: 0.486, tx: -0.8, ty: -1.65},
						transform: [-0.8, -1.65, 0.884, 0.486, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.436, tx: -0.75, ty: -2.05},
						transform: [-0.75, -2.05, 1, 0.436, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_cinnamon_boss_eye_1": {
		type: "movieclip",
		fps: 30,
		totalFrames: 39,
		labels: {},
		layers: [
			{
				name: "eye_wrinkles_x",
				keys: [
					{
						from: 0,
						to: 38,
						classname: "_cinnamon_boss_eye_wrinkles_x",
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
						classname: "_cinnamon_boss_eyebase_x",
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
						classname: "_cinnamon_boss_eyebase_x",
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
						classname: "_cinnamon_boss_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.276, d: 0.374, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.465, -0.636, 0.636, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 27,
						classname: "_cinnamon_boss_eyebase_x",
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
						to: 38,
						classname: "_cinnamon_boss_eyebase_x",
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
						to: 14,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -6.7},
						transform: [5, -6.7, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 20,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -6.7},
						transform: [5, -6.7, 1, 1, -0.71, 0.71, NaN],
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
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -5.05},
						transform: [5, -5.05, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 29,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -5.05},
						transform: [5, -5.05, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.531], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 38,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -6.7},
						transform: [5, -6.7, 1, 1, -0.71, 0.71, NaN],
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
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.61, b: 0, c: 0, d: 1, tx: 3.65, ty: 2.75},
						transform: [3.65, 2.75, 0.61, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 20,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.61, b: 0, c: 0, d: 1, tx: 3.65, ty: 2.75},
						transform: [3.65, 2.75, 0.61, 1, 0, 0, 0],
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
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.479, b: 0.378, c: -0.247, d: 0.314, tx: 4.15, ty: 3},
						transform: [4.15, 3, 0.61, 0.4, -0.667, 0.667, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 27,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.479, b: 0.378, c: -0.247, d: 0.314, tx: 4.15, ty: 3},
						transform: [4.15, 3, 0.61, 0.4, -0.667, 0.667, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.531], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 38,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.61, b: 0, c: 0, d: 1, tx: 3.65, ty: 2.75},
						transform: [3.65, 2.75, 0.61, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_cinnamon_boss_nose_x": {
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
					},
				]
			},
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
		]
	},
	"_cinnamon_boss_mouth_2": {
		type: "movieclip",
		fps: 30,
		totalFrames: 25,
		labels: {},
		layers: [
			{
				name: "mouth_p3_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_cinnamon_boss_mouth_p3_x",
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
						from: 6,
						to: 10,
						classname: "_cinnamon_boss_mouth_p3_x",
						instancename: "",
						matrix: {a: 0.909, b: 0, c: 0, d: 1, tx: -0.8, ty: 18.15},
						transform: [-0.8, 18.15, 0.909, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 16,
						classname: "_cinnamon_boss_mouth_p3_x",
						instancename: "",
						matrix: {a: 0.909, b: 0, c: 0, d: 1, tx: -0.8, ty: 15.85},
						transform: [-0.8, 15.85, 0.909, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 22,
						classname: "_cinnamon_boss_mouth_p3_x",
						instancename: "",
						matrix: {a: 0.909, b: 0, c: 0, d: 1, tx: -0.8, ty: 18.15},
						transform: [-0.8, 18.15, 0.909, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_cinnamon_boss_mouth_p3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.75, ty: 3.9},
						transform: [-0.75, 3.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.454, 0], [0.722, 0.505], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
					},
				]
			},
			{
				name: "mouth_p1_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_cinnamon_boss_mouth_p1_x",
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
						from: 6,
						to: 10,
						classname: "_cinnamon_boss_mouth_p1_x",
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
						from: 11,
						to: 16,
						classname: "_cinnamon_boss_mouth_p1_x",
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
						from: 17,
						to: 22,
						classname: "_cinnamon_boss_mouth_p1_x",
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
						from: 23,
						to: 23,
						classname: "_cinnamon_boss_mouth_p1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.75, ty: -5.2},
						transform: [-0.75, -5.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.454, 0], [0.722, 0.505], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
					},
				]
			},
			{
				name: "mouth_p2_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.436, tx: -0.75, ty: -2.05},
						transform: [-0.75, -2.05, 1, 0.436, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 0.884, b: 0, c: 0, d: 1.01, tx: -0.8, ty: 2.75},
						transform: [-0.8, 2.75, 0.884, 1.01, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 16,
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 0.884, b: 0, c: 0, d: 0.909, tx: -0.8, ty: 1.85},
						transform: [-0.8, 1.85, 0.884, 0.909, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 22,
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 0.884, b: 0, c: 0, d: 1.01, tx: -0.8, ty: 2.75},
						transform: [-0.8, 2.75, 0.884, 1.01, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.436, tx: -0.75, ty: -2.05},
						transform: [-0.75, -2.05, 1, 0.436, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.454, 0], [0.722, 0.505], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 23,
					},
					{
						from: 24,
						to: 24,
						classname: "_cinnamon_boss_mouth",
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
				name: "Layer 3",
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
	"_cinnamon_boss_eye_2": {
		type: "movieclip",
		fps: 30,
		totalFrames: 78,
		labels: {loop: {from:39, to:76}, },
		layers: [
			{
				name: "eye_wrinkles_x",
				keys: [
					{
						from: 0,
						to: 38,
						classname: "_cinnamon_boss_eye_wrinkles_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.2, ty: 2.9},
						transform: [-2.2, 2.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 39,
						to: 77,
						classname: "_cinnamon_boss_eye_wrinkles_x",
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
						to: 38,
						classname: "_cinnamon_boss_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.594, d: 0.805, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, -0.636, 0.636, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 39,
						to: 56,
						classname: "_cinnamon_boss_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.594, d: 0.805, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, -0.636, 0.636, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 57,
						to: 59,
						classname: "_cinnamon_boss_eyebase_x",
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
						from: 60,
						to: 61,
						classname: "_cinnamon_boss_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.276, d: 0.374, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.465, -0.636, 0.636, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 62,
						to: 66,
						classname: "_cinnamon_boss_eyebase_x",
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
						from: 67,
						to: 77,
						classname: "_cinnamon_boss_eyebase_x",
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
						to: 7,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -6.7},
						transform: [5, -6.7, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 23,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -6.7},
						transform: [5, -6.7, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 24,
						to: 30,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 3.1, ty: -5.1},
						transform: [3.1, -5.1, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 31,
						to: 38,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 3.1, ty: -5.1},
						transform: [3.1, -5.1, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 39,
						to: 53,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -6.7},
						transform: [5, -6.7, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 59,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -6.7},
						transform: [5, -6.7, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.452], [0.575, 0.986], [1, 1], ],
						}
					},
					{
						from: 60,
						to: 61,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -5.05},
						transform: [5, -5.05, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 62,
						to: 68,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -5.05},
						transform: [5, -5.05, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.531], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 77,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -6.7},
						transform: [5, -6.7, 1, 1, -0.71, 0.71, NaN],
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
						to: 38,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.61, b: 0, c: 0, d: 1, tx: 3.65, ty: 2.75},
						transform: [3.65, 2.75, 0.61, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 39,
						to: 56,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.61, b: 0, c: 0, d: 1, tx: 3.65, ty: 2.75},
						transform: [3.65, 2.75, 0.61, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 57,
						to: 59,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.61, b: 0, c: 0, d: 1, tx: 3.65, ty: 2.75},
						transform: [3.65, 2.75, 0.61, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.452], [0.575, 0.986], [1, 1], ],
						}
					},
					{
						from: 60,
						to: 61,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.479, b: 0.378, c: -0.247, d: 0.314, tx: 4.15, ty: 3},
						transform: [4.15, 3, 0.61, 0.4, -0.667, 0.667, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 62,
						to: 66,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.479, b: 0.378, c: -0.247, d: 0.314, tx: 4.15, ty: 3},
						transform: [4.15, 3, 0.61, 0.4, -0.667, 0.667, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.531], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 67,
						to: 77,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.61, b: 0, c: 0, d: 1, tx: 3.65, ty: 2.75},
						transform: [3.65, 2.75, 0.61, 1, 0, 0, 0],
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
						to: 22,
						classname: "_cinnamon_boss_greenpupil_x",
						instancename: "",
						matrix: {a: 0.577, b: 0, c: 0, d: 0.577, tx: 3.65, ty: 2.7},
						transform: [3.65, 2.7, 0.577, 0.577, 0, 0, 0],
						alpha: 0.07,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.5], [0.47, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 27,
						classname: "_cinnamon_boss_greenpupil_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.5, ty: 2.55},
						transform: [3.5, 2.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 28,
						to: 38,
						classname: "_cinnamon_boss_greenpupil_x",
						instancename: "",
						matrix: {a: 0.773, b: 0, c: 0, d: 0.773, tx: 3.55, ty: 2.6},
						transform: [3.55, 2.6, 0.773, 0.773, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 39,
						to: 77,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 38,
					},
					{
						from: 39,
						to: 76,
					},
					{
						from: 77,
						to: 77,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_cinnamon_boss_base_22_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_base_22_x",
		scale: 2,
		position: [-54.5, -83.15],
	},
	"_cinnamon_boss_mouth_3": {
		type: "movieclip",
		fps: 30,
		totalFrames: 12,
		labels: {},
		layers: [
			{
				name: "mouth_p3_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_cinnamon_boss_mouth_p3_x",
						instancename: "",
						matrix: {a: 0.909, b: 0, c: 0, d: 1, tx: -0.8, ty: 18.15},
						transform: [-0.8, 18.15, 0.909, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 10,
						classname: "_cinnamon_boss_mouth_p3_x",
						instancename: "",
						matrix: {a: 0.909, b: 0, c: 0, d: 1, tx: -0.8, ty: 15.85},
						transform: [-0.8, 15.85, 0.909, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_cinnamon_boss_mouth_p3_x",
						instancename: "",
						matrix: {a: 0.909, b: 0, c: 0, d: 1, tx: -0.8, ty: 18.15},
						transform: [-0.8, 18.15, 0.909, 1, 0, 0, 0],
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
						to: 4,
						classname: "_cinnamon_boss_mouth_p1_x",
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
						from: 5,
						to: 10,
						classname: "_cinnamon_boss_mouth_p1_x",
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
						from: 11,
						to: 11,
						classname: "_cinnamon_boss_mouth_p1_x",
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
						to: 4,
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 0.884, b: 0, c: 0, d: 1.01, tx: -0.8, ty: 2.75},
						transform: [-0.8, 2.75, 0.884, 1.01, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 10,
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 0.884, b: 0, c: 0, d: 0.909, tx: -0.8, ty: 1.85},
						transform: [-0.8, 1.85, 0.884, 0.909, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 0.884, b: 0, c: 0, d: 1.01, tx: -0.8, ty: 2.75},
						transform: [-0.8, 2.75, 0.884, 1.01, 0, 0, 0],
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
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 11,
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
		]
	},
	"_cinnamon_boss_eye_3": {
		type: "movieclip",
		fps: 30,
		totalFrames: 78,
		labels: {loop: {from:39, to:76}, },
		layers: [
			{
				name: "eye_wrinkles_x",
				keys: [
					{
						from: 0,
						to: 38,
						classname: "_cinnamon_boss_eye_wrinkles_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.2, ty: 2.9},
						transform: [-2.2, 2.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 39,
						to: 77,
						classname: "_cinnamon_boss_eye_wrinkles_x",
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
						to: 38,
						classname: "_cinnamon_boss_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.594, d: 0.805, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, -0.636, 0.636, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 39,
						to: 56,
						classname: "_cinnamon_boss_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.594, d: 0.805, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, -0.636, 0.636, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 57,
						to: 59,
						classname: "_cinnamon_boss_eyebase_x",
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
						from: 60,
						to: 61,
						classname: "_cinnamon_boss_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.276, d: 0.374, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.465, -0.636, 0.636, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 62,
						to: 66,
						classname: "_cinnamon_boss_eyebase_x",
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
						from: 67,
						to: 77,
						classname: "_cinnamon_boss_eyebase_x",
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
						to: 7,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -6.7},
						transform: [5, -6.7, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 23,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -6.7},
						transform: [5, -6.7, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 24,
						to: 30,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 3.1, ty: -5.1},
						transform: [3.1, -5.1, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 31,
						to: 38,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 3.1, ty: -5.1},
						transform: [3.1, -5.1, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 39,
						to: 53,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -6.7},
						transform: [5, -6.7, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 59,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -6.7},
						transform: [5, -6.7, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.452], [0.575, 0.986], [1, 1], ],
						}
					},
					{
						from: 60,
						to: 61,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -5.05},
						transform: [5, -5.05, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 62,
						to: 68,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -5.05},
						transform: [5, -5.05, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.531], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 77,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -6.7},
						transform: [5, -6.7, 1, 1, -0.71, 0.71, NaN],
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
						to: 38,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.61, b: 0, c: 0, d: 1, tx: 3.65, ty: 2.75},
						transform: [3.65, 2.75, 0.61, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 39,
						to: 56,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.61, b: 0, c: 0, d: 1, tx: 3.65, ty: 2.75},
						transform: [3.65, 2.75, 0.61, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 57,
						to: 59,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.61, b: 0, c: 0, d: 1, tx: 3.65, ty: 2.75},
						transform: [3.65, 2.75, 0.61, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.452], [0.575, 0.986], [1, 1], ],
						}
					},
					{
						from: 60,
						to: 61,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.479, b: 0.378, c: -0.247, d: 0.314, tx: 4.15, ty: 3},
						transform: [4.15, 3, 0.61, 0.4, -0.667, 0.667, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 62,
						to: 66,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.479, b: 0.378, c: -0.247, d: 0.314, tx: 4.15, ty: 3},
						transform: [4.15, 3, 0.61, 0.4, -0.667, 0.667, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.531], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 67,
						to: 77,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.61, b: 0, c: 0, d: 1, tx: 3.65, ty: 2.75},
						transform: [3.65, 2.75, 0.61, 1, 0, 0, 0],
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
						to: 22,
						classname: "_cinnamon_boss_greenpupil_x",
						instancename: "",
						matrix: {a: 0.577, b: 0, c: 0, d: 0.577, tx: 3.65, ty: 2.7},
						transform: [3.65, 2.7, 0.577, 0.577, 0, 0, 0],
						alpha: 0.07,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.5], [0.47, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 77,
						classname: "_cinnamon_boss_greenpupil_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.5, ty: 2.55},
						transform: [3.5, 2.55, 1, 1, 0, 0, 0],
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
						to: 8,
					},
					{
						from: 9,
						to: 77,
						classname: "_cinnamon_boss_particuler",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.5, ty: 3},
						transform: [3.5, 3, 1, 1, 0, 0, 0],
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
						to: 38,
					},
					{
						from: 39,
						to: 76,
					},
					{
						from: 77,
						to: 77,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_cinnamon_boss_laserbox": {
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
		]
	},
	"_cinnamon_boss_mouth_toresfirega": {
		type: "movieclip",
		fps: 30,
		totalFrames: 28,
		labels: {},
		layers: [
			{
				name: "mouth_p3_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_cinnamon_boss_mouth_p3_x",
						instancename: "",
						matrix: {a: 0.909, b: 0, c: 0, d: 1, tx: -0.8, ty: 18.15},
						transform: [-0.8, 18.15, 0.909, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.466, 0], [0.618, 0.756], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 27,
						classname: "_cinnamon_boss_mouth_p3_x",
						instancename: "",
						matrix: {a: 0.909, b: 0, c: 0, d: 1, tx: -0.75, ty: 5.3},
						transform: [-0.75, 5.3, 0.909, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mouth_p1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_cinnamon_boss_mouth_p1_x",
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
						from: 5,
						to: 27,
						classname: "_cinnamon_boss_mouth_p1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.75, ty: -5.2},
						transform: [-0.75, -5.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mouth_p2_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 0.884, b: 0, c: 0, d: 1.01, tx: -0.8, ty: 2.75},
						transform: [-0.8, 2.75, 0.884, 1.01, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 27,
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 0.884, b: 0, c: 0, d: 0.548, tx: -0.8, ty: -1.15},
						transform: [-0.8, -1.15, 0.884, 0.548, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_cinnamon_boss_mouth_resfriega": {
		type: "movieclip",
		fps: 30,
		totalFrames: 23,
		labels: {},
		layers: [
			{
				name: "mouth_p3_x",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_cinnamon_boss_mouth_p3_x",
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
						to: 21,
						classname: "_cinnamon_boss_mouth_p3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.75, ty: 5.8},
						transform: [-0.75, 5.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_cinnamon_boss_mouth_p3_x",
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
						classname: "_cinnamon_boss_mouth_p1_x",
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
						to: 21,
						classname: "_cinnamon_boss_mouth_p1_x",
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
						from: 22,
						to: 22,
						classname: "_cinnamon_boss_mouth_p1_x",
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
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.436, tx: -0.75, ty: -2.05},
						transform: [-0.75, -2.05, 1, 0.436, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 21,
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.514, tx: -0.75, ty: -1.4},
						transform: [-0.75, -1.4, 1, 0.514, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.436, tx: -0.75, ty: -2.05},
						transform: [-0.75, -2.05, 1, 0.436, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_cinnamon_boss_eye_torefriegada": {
		type: "movieclip",
		fps: 30,
		totalFrames: 24,
		labels: {},
		layers: [
			{
				name: "eye_wrinkles_x",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_cinnamon_boss_eye_wrinkles_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.2, ty: 2.9},
						transform: [-2.2, 2.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.283, 0.452], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 23,
						classname: "_cinnamon_boss_eye_wrinkles_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.964, tx: -2.2, ty: 2.9},
						transform: [-2.2, 2.9, 1, 0.964, 0, 0, 0],
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
						to: 7,
						classname: "_cinnamon_boss_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.594, d: 0.805, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, -0.636, 0.636, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.283, 0.452], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 23,
						classname: "_cinnamon_boss_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.318, d: 0.431, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.535, -0.636, 0.636, NaN],
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
						to: 7,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -6.7},
						transform: [5, -6.7, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.283, 0.452], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 23,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 1.75, ty: -2.6},
						transform: [1.75, -2.6, 1, 1, -0.71, 0.71, NaN],
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
						to: 7,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.61, b: 0, c: 0, d: 1, tx: 3.65, ty: 2.75},
						transform: [3.65, 2.75, 0.61, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.283, 0.452], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 23,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.295, b: 0, c: 0, d: 0.492, tx: 3.7, ty: 2.85},
						transform: [3.7, 2.85, 0.295, 0.492, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_cinnamon_boss_eye_resfiega_loop": {
		type: "movieclip",
		fps: 30,
		totalFrames: 11,
		labels: {},
		layers: [
			{
				name: "eye_wrinkles_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_cinnamon_boss_eye_wrinkles_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.964, tx: -2.2, ty: 2.9},
						transform: [-2.2, 2.9, 1, 0.964, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_cinnamon_boss_eye_wrinkles_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.964, tx: -2.2, ty: 2.9},
						transform: [-2.2, 2.9, 1, 0.964, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_cinnamon_boss_eye_wrinkles_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.964, tx: -2.2, ty: 2.9},
						transform: [-2.2, 2.9, 1, 0.964, 0, 0, 0],
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
						to: 4,
						classname: "_cinnamon_boss_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.318, d: 0.431, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.535, -0.636, 0.636, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_cinnamon_boss_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.23, d: 0.312, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.388, -0.636, 0.636, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_cinnamon_boss_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.318, d: 0.431, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.535, -0.636, 0.636, NaN],
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
						to: 4,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 1.75, ty: -2.6},
						transform: [1.75, -2.6, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 1.8, ty: -1.95},
						transform: [1.8, -1.95, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 1.75, ty: -2.6},
						transform: [1.75, -2.6, 1, 1, -0.71, 0.71, NaN],
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
						to: 4,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.295, b: 0, c: 0, d: 0.492, tx: 3.7, ty: 2.85},
						transform: [3.7, 2.85, 0.295, 0.492, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.213, b: 0, c: 0, d: 0.355, tx: 4.05, ty: 3.15},
						transform: [4.05, 3.15, 0.213, 0.355, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.295, b: 0, c: 0, d: 0.492, tx: 3.7, ty: 2.85},
						transform: [3.7, 2.85, 0.295, 0.492, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_cinnamon_boss_armrefriega": {
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
						to: 6,
						classname: "_cinnamon_boss_armrefriega_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.52, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_cinnamon_boss_armrefriega_x",
						instancename: "",
						matrix: {a: 1, b: 0.025, c: -0.025, d: 1, tx: 0.05, ty: 0},
						transform: [0.05, 0, 1, 1, -0.025, 0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.52, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_cinnamon_boss_armrefriega_x",
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
						classname: "_cinnamon_boss_hand111_x",
						instancename: "",
						matrix: {a: 0.994, b: -0.112, c: 0.112, d: 0.994, tx: -34.4, ty: -4.15},
						transform: [-34.4, -4.15, 1, 1, 0.112, -0.112, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.52, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_cinnamon_boss_hand111_x",
						instancename: "",
						matrix: {a: 0.901, b: -0.433, c: 0.433, d: 0.901, tx: -33.9, ty: -5.35},
						transform: [-33.9, -5.35, 1, 1, 0.448, -0.448, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.52, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_cinnamon_boss_hand111_x",
						instancename: "",
						matrix: {a: 0.994, b: -0.112, c: 0.112, d: 0.994, tx: -34.4, ty: -4.15},
						transform: [-34.4, -4.15, 1, 1, 0.112, -0.112, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_cinnamon_boss_satanicbox": {
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
	"_cinnamon_boss_hittablebox": {
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
	"_cinnamon_boss_eye_refriegadaend": {
		type: "movieclip",
		fps: 30,
		totalFrames: 31,
		labels: {},
		layers: [
			{
				name: "eye_wrinkles_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_cinnamon_boss_eye_wrinkles_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.964, tx: -2.2, ty: 2.9},
						transform: [-2.2, 2.9, 1, 0.964, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 13,
						classname: "_cinnamon_boss_eye_wrinkles_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.964, tx: -2.2, ty: 2.9},
						transform: [-2.2, 2.9, 1, 0.964, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.483], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 30,
						classname: "_cinnamon_boss_eye_wrinkles_x",
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
						to: 4,
						classname: "_cinnamon_boss_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.318, d: 0.431, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.535, -0.636, 0.636, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 13,
						classname: "_cinnamon_boss_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.318, d: 0.431, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.535, -0.636, 0.636, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.483], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 30,
						classname: "_cinnamon_boss_eyebase_x",
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
						to: 4,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 1.75, ty: -2.6},
						transform: [1.75, -2.6, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 13,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 1.75, ty: -2.6},
						transform: [1.75, -2.6, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.483], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 30,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -6.7},
						transform: [5, -6.7, 1, 1, -0.71, 0.71, NaN],
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
						to: 4,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.295, b: 0, c: 0, d: 0.492, tx: 3.7, ty: 2.85},
						transform: [3.7, 2.85, 0.295, 0.492, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 13,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.295, b: 0, c: 0, d: 0.492, tx: 3.7, ty: 2.85},
						transform: [3.7, 2.85, 0.295, 0.492, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.483], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 30,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.61, b: 0, c: 0, d: 1, tx: 3.65, ty: 2.75},
						transform: [3.65, 2.75, 0.61, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_cinnamon_boss_mouth_hurt": {
		type: "movieclip",
		fps: 30,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "mouth_p3_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_cinnamon_boss_mouth_p3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.75, ty: 11.5},
						transform: [-0.75, 11.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_cinnamon_boss_mouth_p3_x",
						instancename: "",
						matrix: {a: 0.909, b: 0, c: 0, d: 1, tx: -0.8, ty: 5.85},
						transform: [-0.8, 5.85, 0.909, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_cinnamon_boss_mouth_p3_x",
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
						to: 5,
						classname: "_cinnamon_boss_mouth_p1_x",
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
						from: 6,
						to: 13,
						classname: "_cinnamon_boss_mouth_p1_x",
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
						from: 14,
						to: 14,
						classname: "_cinnamon_boss_mouth_p1_x",
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
						to: 5,
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.741, tx: -0.75, ty: 0.5},
						transform: [-0.75, 0.5, 1, 0.741, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 0.884, b: 0, c: 0, d: 0.486, tx: -0.8, ty: -1.65},
						transform: [-0.8, -1.65, 0.884, 0.486, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.436, tx: -0.75, ty: -2.05},
						transform: [-0.75, -2.05, 1, 0.436, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_cinnamon_boss_eye_hurt": {
		type: "movieclip",
		fps: 30,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "eye_wrinkles_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_cinnamon_boss_eye_wrinkles_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.2, ty: 2.9},
						transform: [-2.2, 2.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_cinnamon_boss_eye_wrinkles_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.2, ty: 2.9},
						transform: [-2.2, 2.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.224, 0.527], [0.622, 0.9], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_cinnamon_boss_eye_wrinkles_x",
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
						to: 6,
						classname: "_cinnamon_boss_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.184, d: 0.249, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.31, -0.636, 0.636, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_cinnamon_boss_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.184, d: 0.249, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.31, -0.636, 0.636, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.224, 0.527], [0.622, 0.9], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_cinnamon_boss_eyebase_x",
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
						to: 6,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.65, b: 0.76, c: -0.76, d: 0.65, tx: 3.65, ty: -2.3},
						transform: [3.65, -2.3, 1, 1, -0.863, 0.863, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.65, b: 0.76, c: -0.76, d: 0.65, tx: 3.65, ty: -2.3},
						transform: [3.65, -2.3, 1, 1, -0.863, 0.863, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.224, 0.527], [0.622, 0.9], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5, ty: -6.7},
						transform: [5, -6.7, 1, 1, -0.71, 0.71, NaN],
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
						to: 6,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.264, b: 0, c: 0, d: 0.154, tx: 3.7, ty: 2.85},
						transform: [3.7, 2.85, 0.264, 0.154, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.264, b: 0, c: 0, d: 0.154, tx: 3.7, ty: 2.85},
						transform: [3.7, 2.85, 0.264, 0.154, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.224, 0.527], [0.622, 0.9], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.61, b: 0, c: 0, d: 1, tx: 3.65, ty: 2.75},
						transform: [3.65, 2.75, 0.61, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_cinnamon_boss_mouth_dying": {
		type: "movieclip",
		fps: 30,
		totalFrames: 8,
		labels: {},
		layers: [
			{
				name: "mouth_p3_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_cinnamon_boss_mouth_p3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.75, ty: 11.5},
						transform: [-0.75, 11.5, 1, 1, 0, 0, 0],
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
						classname: "_cinnamon_boss_mouth_p3_x",
						instancename: "",
						matrix: {a: 0.909, b: 0, c: 0, d: 1, tx: -0.8, ty: 5.85},
						transform: [-0.8, 5.85, 0.909, 1, 0, 0, 0],
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
						classname: "_cinnamon_boss_mouth_p3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.75, ty: 11.5},
						transform: [-0.75, 11.5, 1, 1, 0, 0, 0],
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
						to: 2,
						classname: "_cinnamon_boss_mouth_p1_x",
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
						from: 3,
						to: 6,
						classname: "_cinnamon_boss_mouth_p1_x",
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
						from: 7,
						to: 7,
						classname: "_cinnamon_boss_mouth_p1_x",
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
						to: 2,
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.741, tx: -0.75, ty: 0.5},
						transform: [-0.75, 0.5, 1, 0.741, 0, 0, 0],
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
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 0.884, b: 0, c: 0, d: 0.486, tx: -0.8, ty: -1.65},
						transform: [-0.8, -1.65, 0.884, 0.486, 0, 0, 0],
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
						classname: "_cinnamon_boss_mouth_p2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.741, tx: -0.75, ty: 0.5},
						transform: [-0.75, 0.5, 1, 0.741, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_cinnamon_boss_eye_dying": {
		type: "movieclip",
		fps: 30,
		totalFrames: 8,
		labels: {},
		layers: [
			{
				name: "eye_wrinkles_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_cinnamon_boss_eye_wrinkles_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.2, ty: 2.9},
						transform: [-2.2, 2.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_cinnamon_boss_eye_wrinkles_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.944, tx: -2.2, ty: 2.85},
						transform: [-2.2, 2.85, 1, 0.944, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_cinnamon_boss_eye_wrinkles_x",
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
						to: 2,
						classname: "_cinnamon_boss_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.184, d: 0.249, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.31, -0.636, 0.636, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_cinnamon_boss_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.561, c: -0.184, d: 0.235, tx: 0, ty: 0.15},
						transform: [0, 0.15, 0.981, 0.299, -0.664, 0.609, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_cinnamon_boss_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.184, d: 0.249, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.31, -0.636, 0.636, NaN],
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
						to: 2,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.65, b: 0.76, c: -0.76, d: 0.65, tx: 3.65, ty: -2.3},
						transform: [3.65, -2.3, 1, 1, -0.863, 0.863, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.65, b: 0.717, c: -0.76, d: 0.614, tx: 3.65, ty: -0.35},
						transform: [3.65, -0.35, 0.968, 0.977, -0.891, 0.834, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_cinnamon_boss_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.65, b: 0.76, c: -0.76, d: 0.65, tx: 3.65, ty: -2.3},
						transform: [3.65, -2.3, 1, 1, -0.863, 0.863, NaN],
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
						to: 2,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.264, b: 0, c: 0, d: 0.154, tx: 3.7, ty: 2.85},
						transform: [3.7, 2.85, 0.264, 0.154, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.264, b: 0, c: 0, d: 0.145, tx: 3.7, ty: 2.8},
						transform: [3.7, 2.8, 0.264, 0.145, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_cinnamon_boss_pupil_x",
						instancename: "",
						matrix: {a: 0.264, b: 0, c: 0, d: 0.154, tx: 3.7, ty: 2.85},
						transform: [3.7, 2.85, 0.264, 0.154, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_cinnamon_boss_glow_hands_2": {
		type: "movieclip",
		fps: 30,
		totalFrames: 27,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_cinnamon_boss_glow_hand_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.5], [0.611, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 11,
						classname: "_cinnamon_boss_glow_hand_x",
						instancename: "",
						matrix: {a: 2.14, b: 0, c: 0, d: 2.14, tx: 0, ty: 0},
						transform: [0, 0, 2.14, 2.14, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.86, 0.627], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_cinnamon_boss_glow_hand_x",
						instancename: "",
						matrix: {a: 0.554, b: 0, c: 0, d: 0.554, tx: 0, ty: 0},
						transform: [0, 0, 0.554, 0.554, 0, 0, 0],
						alpha: 0.21,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 26,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 25,
						classname: "_cinnamon_boss_ring_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0.05},
						transform: [0, 0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 26,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 1,
					},
					{
						from: 2,
						to: 25,
						classname: "_cinnamon_boss_ring_anima",
						instancename: "",
						matrix: {a: 0.707, b: -0.707, c: 0.707, d: 0.707, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0.785, -0.785, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 26,
					},
				]
			},
			{
				name: "Layer 2 copy",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 25,
						classname: "_cinnamon_boss_ring_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0.05},
						transform: [0, 0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 26,
					},
				]
			},
			{
				name: "Layer 3 copy",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 5,
					},
					{
						from: 6,
						to: 25,
						classname: "_cinnamon_boss_ring_anima",
						instancename: "",
						matrix: {a: 0.707, b: -0.707, c: 0.707, d: 0.707, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0.785, -0.785, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 26,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 25,
					},
					{
						from: 26,
						to: 26,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_cinnamon_boss_leg_1peque_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_leg_1peque_x",
		scale: 2,
		position: [-9.9, -6.75],
	},
	"_cinnamon_boss_mouth_cinna": {
		type: "movieclip",
		fps: 30,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "mouth_p3_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_cinnamon_boss_mouth_good1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.75, ty: 8.35},
						transform: [-0.75, 8.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_cinnamon_boss_mouth_good1_x",
						instancename: "",
						matrix: {a: 0.909, b: 0, c: 0, d: 1, tx: -0.8, ty: 10.1},
						transform: [-0.8, 10.1, 0.909, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_cinnamon_boss_mouth_good1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.75, ty: 8.35},
						transform: [-0.75, 8.35, 1, 1, 0, 0, 0],
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
						to: 5,
						classname: "_cinnamon_boss_mouth_good2_x",
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
						from: 6,
						to: 13,
						classname: "_cinnamon_boss_mouth_good2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.843, tx: -0.75, ty: -4.15},
						transform: [-0.75, -4.15, 1, 0.843, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_cinnamon_boss_mouth_good2_x",
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
						to: 5,
						classname: "_cinnamon_boss_mouth_p2ggg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.664, tx: -0.75, ty: -0.15},
						transform: [-0.75, -0.15, 1, 0.664, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_cinnamon_boss_mouth_p2ggg_x",
						instancename: "",
						matrix: {a: 0.884, b: 0, c: 0, d: 0.72, tx: -0.8, ty: 0.3},
						transform: [-0.8, 0.3, 0.884, 0.72, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_cinnamon_boss_mouth_p2ggg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.664, tx: -0.75, ty: -0.15},
						transform: [-0.75, -0.15, 1, 0.664, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_cinnamon_boss_eye_good": {
		type: "movieclip",
		fps: 30,
		totalFrames: 36,
		labels: {},
		layers: [
			{
				name: "eyebase_x",
				keys: [
					{
						from: 0,
						to: 21,
						classname: "_cinnamon_boss_pupil_cinna_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 25,
						classname: "_cinnamon_boss_pupil_cinna_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.407, 0], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 29,
						classname: "_cinnamon_boss_pupil_cinna_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.301, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.301, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.407, 0], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 35,
						classname: "_cinnamon_boss_pupil_cinna_x",
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
				name: "eyebrow_1_x",
				keys: [
					{
						from: 0,
						to: 18,
						classname: "_cinnamon_boss_eyebrow_good_x",
						instancename: "",
						matrix: {a: 0.887, b: -0.461, c: 0.461, d: 0.887, tx: -0.05, ty: -9.05},
						transform: [-0.05, -9.05, 1, 1, 0.479, -0.479, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 23,
						classname: "_cinnamon_boss_eyebrow_good_x",
						instancename: "",
						matrix: {a: 0.887, b: -0.461, c: 0.461, d: 0.887, tx: -0.05, ty: -9.05},
						transform: [-0.05, -9.05, 1, 1, 0.479, -0.479, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.437, 0], [0.65, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 30,
						classname: "_cinnamon_boss_eyebrow_good_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.216, c: 0.216, d: 0.976, tx: 0, ty: -7.4},
						transform: [0, -7.4, 1, 1, 0.218, -0.218, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.437, 0], [0.65, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 35,
						classname: "_cinnamon_boss_eyebrow_good_x",
						instancename: "",
						matrix: {a: 0.887, b: -0.461, c: 0.461, d: 0.887, tx: -0.05, ty: -9.05},
						transform: [-0.05, -9.05, 1, 1, 0.479, -0.479, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_cinnamon_boss_mouth_p3_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_mouth_p3_x",
		scale: 2,
		position: [-23.65, -25.7],
	},
	"_cinnamon_boss_mouth_p1_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_mouth_p1_x",
		scale: 2,
		position: [-25.05, -18.65],
	},
	"_cinnamon_boss_mouth_p2_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_mouth_p2_x",
		scale: 2,
		position: [-28.25, -13.4],
	},
	"_cinnamon_boss_eye_wrinkles_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_eye_wrinkles_x",
		scale: 2,
		position: [-17.75, -17.6],
	},
	"_cinnamon_boss_eyebase_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_eyebase_x",
		scale: 2,
		position: [-13.45, -8.65],
	},
	"_cinnamon_boss_eyebrow_1_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_eyebrow_1_x",
		scale: 2,
		position: [-15.1, -6.5],
	},
	"_cinnamon_boss_pupil_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_pupil_x",
		scale: 2,
		position: [-7.95, -8.15],
	},
	"_cinnamon_boss_greenpupil_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_greenpupil_x",
		scale: 2,
		position: [-14.25, -15.15],
	},
	"_cinnamon_boss_particuler": {
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
						classname: "_cinnamon_boss_satanicbox",
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
						classname: "_cinnamon_boss_satanicbox",
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
	"_cinnamon_boss_armrefriega_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_armrefriega_x",
		scale: 2,
		position: [-41.8, -13.15],
	},
	"_cinnamon_boss_hand111_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_hand111_x",
		scale: 2,
		position: [-11.45, -10.4],
	},
	"_cinnamon_boss_glow_hand_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_glow_hand_x",
		scale: 2,
		position: [-24.2, -24.2],
	},
	"_cinnamon_boss_ring_anima": {
		type: "movieclip",
		fps: 30,
		totalFrames: 29,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_cinnamon_boss_ring_square_x",
						instancename: "",
						matrix: {a: 0.135, b: 0, c: 0, d: 0.135, tx: 0, ty: 0},
						transform: [0, 0, 0.135, 0.135, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.24, 0.38], [0.636, 0.928], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_cinnamon_boss_ring_square_x",
						instancename: "",
						matrix: {a: 0.856, b: 0, c: 0, d: 0.856, tx: 0, ty: 0.2},
						transform: [0, 0.2, 0.856, 0.856, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 27,
					},
					{
						from: 28,
						to: 28,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_cinnamon_boss_mouth_good1_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_mouth_good1_x",
		scale: 2,
		position: [-23.65, -25.7],
	},
	"_cinnamon_boss_mouth_good2_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_mouth_good2_x",
		scale: 2,
		position: [-25.05, -18.65],
	},
	"_cinnamon_boss_mouth_p2ggg_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_mouth_p2ggg_x",
		scale: 2,
		position: [-28.25, -13.4],
	},
	"_cinnamon_boss_pupil_cinna_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_pupil_cinna_x",
		scale: 2,
		position: [-10.65, -9.15],
	},
	"_cinnamon_boss_eyebrow_good_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_eyebrow_good_x",
		scale: 2,
		position: [-13.95, -6.95],
	},
	"_cinnamon_boss_ring_square_x": {
		type: "bitmap",
		asset: "_cinnamon_boss_ring_square_x",
		scale: 2,
		position: [-69.65, -69.7],
	},
};
