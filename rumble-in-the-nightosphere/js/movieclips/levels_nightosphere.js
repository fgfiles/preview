
var levels_nightosphere = {
	"levelboss": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "deco",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "decoboss",
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
				name: "gameplay",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "gameplay",
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
				name: "logic",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "logicboss",
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
	"decoboss": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "boss_1_platform_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "boss_1_platform_x",
						instancename: "",
						matrix: {a: -0.944, b: 0, c: 0, d: 1.02, tx: 245.4, ty: 239.05},
						transform: [245.4, 239.05, 0.944, 1.02, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "boss_1_platform_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "boss_1_platform_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.102, tx: 549.25, ty: 240.25},
						transform: [549.25, 240.25, 1, 1.102, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "boss_1_floor",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "boss_1_floor",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 394.95, ty: 538.55},
						transform: [394.95, 538.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "floor2",
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
	"gameplay": {
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
					},
				]
			},
		]
	},
	"logicboss": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Player1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "player1",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 340, ty: 466.5},
						transform: [340, 466.5, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_ground_compound_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_ground_compound_2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 400, ty: 520},
						transform: [400, 520, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Player2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "player2",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 460, ty: 466.5},
						transform: [460, 466.5, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 10, b: 0, c: 0, d: 0.2, tx: 400, ty: -40},
						transform: [400, -40, 10, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Water",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "water",
						instancename: "",
						matrix: {a: 10, b: 0, c: 0, d: 0.1, tx: 400, ty: 636.9},
						transform: [400, 636.9, 10, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "kill",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "kill",
						instancename: "",
						matrix: {a: 13.085, b: 0, c: 0, d: 0.323, tx: 478.2, ty: 753.9},
						transform: [478.2, 753.9, 13.085, 0.323, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flyer_demon",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "boss",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 400, ty: 200},
						transform: [400, 200, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_small_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 550, ty: 225},
						transform: [550, 225, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_small_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 250, ty: 225},
						transform: [250, 225, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"boss_1_platform_x": {
		type: "bitmap",
		asset: "boss_1_platform_x",
		scale: 1,
		position: [-58.5, -33],
	},
	"boss_1_floor": {
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
						classname: "boss_1_floor_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.054, tx: 0, ty: 0},
						transform: [0, 0, 1, 1.054, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "boss_floor_fg",
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
						classname: "boss_1_floor_fg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.65, ty: 66.5},
						transform: [0.65, 66.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"player1": {
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
				]
			},
		]
	},
	"platform_ground_compound_2": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.7, tx: 98, ty: 40},
						transform: [98, 40, 0.1, 0.7, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.7, tx: -98, ty: 40},
						transform: [-98, 40, 0.1, 0.7, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Platform_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform",
						instancename: "",
						matrix: {a: 2, b: 0, c: 0, d: 0.8, tx: 0, ty: 40},
						transform: [0, 40, 2, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"player2": {
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
				]
			},
		]
	},
	"bumper_rect": {
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
					},
				]
			},
		]
	},
	"water": {
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
					},
				]
			},
		]
	},
	"kill": {
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
					},
				]
			},
		]
	},
	"boss": {
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
	"platform_compound_small_1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.9, b: 0, c: 0, d: 0.05, tx: 0, ty: 12.5},
						transform: [0, 12.5, 0.9, 0.05, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.2, tx: 47.5, ty: 2.5},
						transform: [47.5, 2.5, 0.05, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.2, tx: -47.5, ty: 2.5},
						transform: [-47.5, 2.5, 0.05, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Platform",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform",
						instancename: "",
						matrix: {a: 0.9, b: 0, c: 0, d: 0.2, tx: 0, ty: 0},
						transform: [0, 0, 0.9, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"boss_1_floor_x": {
		type: "bitmap",
		asset: "boss_1_floor_x",
		scale: 1,
		position: [-127, -34.15],
	},
	"boss_1_floor_fg": {
		type: "movieclip",
		fps: 24,
		totalFrames: 60,
		labels: {},
		layers: [
			{
				name: "boss_1_floor_fg_part_1",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: 0.6, ty: -9.2},
						transform: [0.6, -9.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.425, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 58,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: 0.6, ty: -3.2},
						transform: [0.6, -3.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.425, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: 0.6, ty: -9.2},
						transform: [0.6, -9.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "boss_1_floor_fg_part_1",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: 30.85, ty: -9.2},
						transform: [30.85, -9.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.425, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 58,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: 30.85, ty: -3.2},
						transform: [30.85, -3.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.425, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: 30.85, ty: -9.2},
						transform: [30.85, -9.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "boss_1_floor_fg_part_1",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: 61.35, ty: -9.2},
						transform: [61.35, -9.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.425, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 58,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: 61.35, ty: -3.2},
						transform: [61.35, -3.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.425, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: 61.35, ty: -9.2},
						transform: [61.35, -9.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "boss_1_floor_fg_part_1",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: -90.65, ty: -9.2},
						transform: [-90.65, -9.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.425, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 58,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: -90.65, ty: -3.2},
						transform: [-90.65, -3.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.425, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: -90.65, ty: -9.2},
						transform: [-90.65, -9.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "boss_1_floor_fg_part_1",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: -60.4, ty: -9.2},
						transform: [-60.4, -9.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.425, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 58,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: -60.4, ty: -3.2},
						transform: [-60.4, -3.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.425, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: -60.4, ty: -9.2},
						transform: [-60.4, -9.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "boss_1_floor_fg_part_1",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: -29.9, ty: -9.2},
						transform: [-29.9, -9.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.425, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 58,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: -29.9, ty: -3.2},
						transform: [-29.9, -3.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.425, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: -29.9, ty: -9.2},
						transform: [-29.9, -9.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "boss_1_floor_fg_part_1",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: 92.1, ty: -9.2},
						transform: [92.1, -9.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.425, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 58,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: 92.1, ty: -3.2},
						transform: [92.1, -3.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.425, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "boss_1_floor_fg_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.292, tx: 92.1, ty: -9.2},
						transform: [92.1, -9.2, 1, 1.292, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "boss_1_floor_fg_part_1",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "boss_1_floor_fg_part_1",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
		]
	},
	"platform": {
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
					},
				]
			},
		]
	},
	"boss_1_floor_fg_part_1": {
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
					},
				]
			},
		]
	},
	"level7": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "deco",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "deco7",
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
				name: "gameplay",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "gameplay",
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
				name: "logic",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "logic7",
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
	"level7": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "deco",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "deco7",
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
				name: "gameplay",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "gameplay",
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
				name: "logic",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "logic7",
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
	"deco7": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 176.6, ty: 187.4},
						transform: [176.6, 187.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 304.4, ty: 187.4},
						transform: [304.4, 187.4, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 242.65, ty: 187.4},
						transform: [242.65, 187.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 387.5, ty: 247.2},
						transform: [387.5, 247.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 65.5, ty: 133.8},
						transform: [65.5, 133.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 93.25, ty: 133.8},
						transform: [93.25, 133.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 706.7, ty: 93.2},
						transform: [706.7, 93.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 734.45, ty: 93.2},
						transform: [734.45, 93.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 415.25, ty: 247.2},
						transform: [415.25, 247.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 498.55, ty: 301.3},
						transform: [498.55, 301.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 624.3, ty: 301.3},
						transform: [624.3, 301.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 563.2, ty: 301.3},
						transform: [563.2, 301.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 331.2, ty: 530.8},
						transform: [331.2, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 470.05, ty: 530.8},
						transform: [470.05, 530.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 401, ty: 530.8},
						transform: [401, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"gameplay": {
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
					},
				]
			},
		]
	},
	"logic7": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "kill",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "kill",
						instancename: "",
						matrix: {a: 13.085, b: 0, c: 0, d: 0.323, tx: 478.2, ty: 753.9},
						transform: [478.2, 753.9, 13.085, 0.323, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Player1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "player1",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 340, ty: 466.5},
						transform: [340, 466.5, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_ground_compound_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_ground_compound_2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 400, ty: 520},
						transform: [400, 520, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Player2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "player2",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 460, ty: 466.5},
						transform: [460, 466.5, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 10, b: 0, c: 0, d: 0.2, tx: 400, ty: -40},
						transform: [400, -40, 10, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Water",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "water",
						instancename: "",
						matrix: {a: 10, b: 0, c: 0, d: 0.1, tx: 400, ty: 636.9},
						transform: [400, 636.9, 10, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flyer_demon",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "flyer_demon",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 720, ty: 29.75},
						transform: [720, 29.75, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Launcher",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "launcher",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 80, ty: 71.75},
						transform: [80, 71.75, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Launcher",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "launcher",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 400, ty: 185.75},
						transform: [400, 185.75, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "walker_helmet",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "demon_walker_helmet",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 239.9, ty: 124.5},
						transform: [239.9, 124.5, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "walker_helmet",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "demon_walker_helmet",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 559.9, ty: 238.5},
						transform: [559.9, 238.5, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 240, ty: 190.4},
						transform: [240, 190.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 560, ty: 303.7},
						transform: [560, 303.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_small_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400, ty: 247.05},
						transform: [400, 247.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_small_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 720, ty: 93.75},
						transform: [720, 93.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_small_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 80, ty: 133.75},
						transform: [80, 133.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nightosphere_ns_platform_1_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_platform_1_x",
		scale: 1,
		position: [-42.75, -21.3],
	},
	"_nightosphere_ns_platform_2_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_platform_2_x",
		scale: 1,
		position: [-40.85, -19.9],
	},
	"_nightosphere_floor1": {
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
						classname: "_nightosphere_ns_floor_1_x",
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
	"_nightosphere_floor2": {
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
						classname: "_nightosphere_ns_floor_2_x",
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
	"kill": {
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
					},
				]
			},
		]
	},
	"player1": {
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
				]
			},
		]
	},
	"platform_ground_compound_2": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.7, tx: 98, ty: 40},
						transform: [98, 40, 0.1, 0.7, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.7, tx: -98, ty: 40},
						transform: [-98, 40, 0.1, 0.7, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Platform_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform",
						instancename: "",
						matrix: {a: 2, b: 0, c: 0, d: 0.8, tx: 0, ty: 40},
						transform: [0, 40, 2, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"player2": {
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
				]
			},
		]
	},
	"bumper_rect": {
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
					},
				]
			},
		]
	},
	"water": {
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
					},
				]
			},
		]
	},
	"flyer_demon": {
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
				]
			},
		]
	},
	"launcher": {
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
				]
			},
		]
	},
	"demon_walker_helmet": {
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
				]
			},
		]
	},
	"platform_compound_2": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_circle",
						instancename: "",
						matrix: {a: 0.282, b: 0, c: 0, d: 0.282, tx: -92, ty: 2.05},
						transform: [-92, 2.05, 0.282, 0.282, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_circle",
						instancename: "",
						matrix: {a: 0.282, b: 0, c: 0, d: 0.282, tx: 92, ty: 2.05},
						transform: [92, 2.05, 0.282, 0.282, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 1.966, b: 0, c: 0, d: 0.048, tx: 0, ty: 15.6},
						transform: [0, 15.6, 1.966, 0.048, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Platform_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform",
						instancename: "",
						matrix: {a: 1.966, b: 0, c: 0, d: 0.26, tx: 0, ty: 0},
						transform: [0, 0, 1.966, 0.26, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"platform_compound_small_1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.9, b: 0, c: 0, d: 0.05, tx: 0, ty: 12.5},
						transform: [0, 12.5, 0.9, 0.05, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.2, tx: 47.5, ty: 2.5},
						transform: [47.5, 2.5, 0.05, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.2, tx: -47.5, ty: 2.5},
						transform: [-47.5, 2.5, 0.05, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Platform",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform",
						instancename: "",
						matrix: {a: 0.9, b: 0, c: 0, d: 0.2, tx: 0, ty: 0},
						transform: [0, 0, 0.9, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nightosphere_ns_floor_1_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_floor_1_x",
		scale: 1,
		position: [-42.45, -20.45],
	},
	"_nightosphere_ns_floor_2_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_floor_2_x",
		scale: 1,
		position: [-45.6, -19.95],
	},
	"platform": {
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
					},
				]
			},
		]
	},
	"bumper_circle": {
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
					},
				]
			},
		]
	},
	"level6": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "deco",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "deco6",
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
				name: "gameplay",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "gameplay",
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
				name: "logic",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "logic6",
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
	"deco6": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 85.1, ty: 302.9},
						transform: [85.1, 302.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 115.7, ty: 302.9},
						transform: [115.7, 302.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 685.1, ty: 302.9},
						transform: [685.1, 302.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 715.7, ty: 302.9},
						transform: [715.7, 302.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 385.1, ty: 380.9},
						transform: [385.1, 380.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 415.7, ty: 380.9},
						transform: [415.7, 380.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 505.1, ty: 101.9},
						transform: [505.1, 101.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 535.7, ty: 101.9},
						transform: [535.7, 101.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 265.1, ty: 101.9},
						transform: [265.1, 101.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 295.7, ty: 101.9},
						transform: [295.7, 101.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 401, ty: 530.8},
						transform: [401, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 331.15, ty: 530.8},
						transform: [331.15, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 470.05, ty: 530.8},
						transform: [470.05, 530.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"gameplay": {
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
					},
				]
			},
		]
	},
	"logic6": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "kill",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "kill",
						instancename: "",
						matrix: {a: 13.085, b: 0, c: 0, d: 0.323, tx: 478.2, ty: 753.9},
						transform: [478.2, 753.9, 13.085, 0.323, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 10, b: 0, c: 0, d: 0.2, tx: 400, ty: -40},
						transform: [400, -40, 10, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Water",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "water",
						instancename: "",
						matrix: {a: 10, b: 0, c: 0, d: 0.1, tx: 400, ty: 636.9},
						transform: [400, 636.9, 10, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Launcher",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "launcher",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 400, ty: 321},
						transform: [400, 321, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_small_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400, ty: 381},
						transform: [400, 381, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Player1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "player1",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 340, ty: 466.5},
						transform: [340, 466.5, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_ground_compound_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_ground_compound_2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 400, ty: 520},
						transform: [400, 520, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Player2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "player2",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 460, ty: 466.5},
						transform: [460, 466.5, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Launcher",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "launcher",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 100, ty: 241},
						transform: [100, 241, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_small_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 100, ty: 301},
						transform: [100, 301, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Launcher",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "launcher",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 700, ty: 241},
						transform: [700, 241, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_small_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 700, ty: 301},
						transform: [700, 301, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flyer_demon",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "flyer_demon",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 280, ty: 41},
						transform: [280, 41, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_small_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 280, ty: 101},
						transform: [280, 101, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flyer_demon",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "flyer_demon",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 520, ty: 41},
						transform: [520, 41, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_small_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 520, ty: 101},
						transform: [520, 101, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nightosphere_ns_platform_1_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_platform_1_x",
		scale: 1,
		position: [-42.75, -21.3],
	},
	"_nightosphere_floor2": {
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
						classname: "_nightosphere_ns_floor_2_x",
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
	"_nightosphere_floor1": {
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
						classname: "_nightosphere_ns_floor_1_x",
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
	"kill": {
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
					},
				]
			},
		]
	},
	"bumper_rect": {
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
					},
				]
			},
		]
	},
	"water": {
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
					},
				]
			},
		]
	},
	"launcher": {
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
				]
			},
		]
	},
	"platform_compound_small_1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.9, b: 0, c: 0, d: 0.05, tx: 0, ty: 12.5},
						transform: [0, 12.5, 0.9, 0.05, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.2, tx: 47.5, ty: 2.5},
						transform: [47.5, 2.5, 0.05, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.2, tx: -47.5, ty: 2.5},
						transform: [-47.5, 2.5, 0.05, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Platform",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform",
						instancename: "",
						matrix: {a: 0.9, b: 0, c: 0, d: 0.2, tx: 0, ty: 0},
						transform: [0, 0, 0.9, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"player1": {
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
				]
			},
		]
	},
	"platform_ground_compound_2": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.7, tx: 98, ty: 40},
						transform: [98, 40, 0.1, 0.7, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.7, tx: -98, ty: 40},
						transform: [-98, 40, 0.1, 0.7, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Platform_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform",
						instancename: "",
						matrix: {a: 2, b: 0, c: 0, d: 0.8, tx: 0, ty: 40},
						transform: [0, 40, 2, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"player2": {
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
				]
			},
		]
	},
	"flyer_demon": {
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
				]
			},
		]
	},
	"_nightosphere_ns_floor_2_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_floor_2_x",
		scale: 1,
		position: [-45.6, -19.95],
	},
	"_nightosphere_ns_floor_1_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_floor_1_x",
		scale: 1,
		position: [-42.45, -20.45],
	},
	"platform": {
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
					},
				]
			},
		]
	},
	"level5": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "deco",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "deco5",
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
				name: "gameplay",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "gameplay",
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
				name: "logic",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "logic5",
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
	"deco5": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 94.95, ty: 344.75},
						transform: [94.95, 344.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 306.7, ty: 344.75},
						transform: [306.7, 344.75, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 157.6, ty: 344.75},
						transform: [157.6, 344.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_2_x",
						instancename: "",
						matrix: {a: 1.342, b: 0, c: 0, d: 1, tx: 235.45, ty: 344.75},
						transform: [235.45, 344.75, 1.342, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 495.7, ty: 344.75},
						transform: [495.7, 344.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 707.45, ty: 344.75},
						transform: [707.45, 344.75, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 558.35, ty: 344.75},
						transform: [558.35, 344.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_2_x",
						instancename: "",
						matrix: {a: 1.342, b: 0, c: 0, d: 1, tx: 636.2, ty: 344.75},
						transform: [636.2, 344.75, 1.342, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 278.6, ty: 208.3},
						transform: [278.6, 208.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 178.7, ty: 115.15},
						transform: [178.7, 115.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 208.6, ty: 115.15},
						transform: [208.6, 115.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 591.8, ty: 115.15},
						transform: [591.8, 115.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 621.7, ty: 115.15},
						transform: [621.7, 115.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 308.5, ty: 208.3},
						transform: [308.5, 208.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 491.9, ty: 208.3},
						transform: [491.9, 208.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 521.8, ty: 208.3},
						transform: [521.8, 208.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 125.15, ty: 530.8},
						transform: [125.15, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 47.1, ty: 530.8},
						transform: [47.1, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -26.15, ty: 530.8},
						transform: [-26.15, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -89.7, ty: 530.8},
						transform: [-89.7, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 623.1, ty: 530.8},
						transform: [623.1, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 897.3, ty: 530.8},
						transform: [897.3, 530.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 177.75, ty: 530.8},
						transform: [177.75, 530.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 830.2, ty: 530.8},
						transform: [830.2, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 752.15, ty: 530.8},
						transform: [752.15, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 678.9, ty: 530.8},
						transform: [678.9, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"gameplay": {
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
					},
				]
			},
		]
	},
	"logic5": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Player2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "player2",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 720, ty: 462},
						transform: [720, 462, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Player1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "player1",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 80, ty: 462},
						transform: [80, 462, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "walker_helmet",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "demon_walker_helmet",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 631.55, ty: 280.55},
						transform: [631.55, 280.55, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "walker_helmet",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "demon_walker_helmet",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 171.55, ty: 280.55},
						transform: [171.55, 280.55, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Launcher",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "launcher",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 604.55, ty: 51.3},
						transform: [604.55, 51.3, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Launcher",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "launcher",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 195.5, ty: 51.3},
						transform: [195.5, 51.3, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 10, b: 0, c: 0, d: 0.2, tx: 400, ty: -40},
						transform: [400, -40, 10, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 200, ty: 346},
						transform: [200, 346, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_small_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 506.5, ty: 208},
						transform: [506.5, 208, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_small_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 606.5, ty: 114},
						transform: [606.5, 114, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_small_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 193.4, ty: 114},
						transform: [193.4, 114, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_small_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 293.4, ty: 208},
						transform: [293.4, 208, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 600, ty: 346},
						transform: [600, 346, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Water",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "water",
						instancename: "",
						matrix: {a: 10, b: 0, c: 0, d: 0.1, tx: 400, ty: 636.9},
						transform: [400, 636.9, 10, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_ground_compound_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_ground_compound_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -160, ty: 520},
						transform: [-160, 520, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_ground_compound_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_ground_compound_1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 960, ty: 520},
						transform: [960, 520, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "kill",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "kill",
						instancename: "",
						matrix: {a: 13.085, b: 0, c: 0, d: 0.323, tx: 478.2, ty: 753.9},
						transform: [478.2, 753.9, 13.085, 0.323, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flyer",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "flyer_demon",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 506.6, ty: 141.95},
						transform: [506.6, 141.95, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flyer",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "flyer_demon",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 293.3, ty: 141.95},
						transform: [293.3, 141.95, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nightosphere_ns_platform_1_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_platform_1_x",
		scale: 1,
		position: [-42.75, -21.3],
	},
	"_nightosphere_ns_platform_2_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_platform_2_x",
		scale: 1,
		position: [-40.85, -19.9],
	},
	"_nightosphere_floor2": {
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
						classname: "_nightosphere_ns_floor_2_x",
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
	"_nightosphere_floor1": {
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
						classname: "_nightosphere_ns_floor_1_x",
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
	"player2": {
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
				]
			},
		]
	},
	"player1": {
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
				]
			},
		]
	},
	"demon_walker_helmet": {
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
				]
			},
		]
	},
	"launcher": {
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
				]
			},
		]
	},
	"bumper_rect": {
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
					},
				]
			},
		]
	},
	"platform_compound_1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_circle",
						instancename: "",
						matrix: {a: 0.282, b: 0, c: 0, d: 0.282, tx: -129.4, ty: 4.3},
						transform: [-129.4, 4.3, 0.282, 0.282, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_circle",
						instancename: "",
						matrix: {a: 0.282, b: 0, c: 0, d: 0.282, tx: 129.3, ty: 4.3},
						transform: [129.3, 4.3, 0.282, 0.282, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 2.766, b: 0, c: 0, d: 0.048, tx: 0, ty: 15.6},
						transform: [0, 15.6, 2.766, 0.048, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Platform_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform",
						instancename: "",
						matrix: {a: 2.766, b: 0, c: 0, d: 0.26, tx: 0, ty: 0},
						transform: [0, 0, 2.766, 0.26, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"platform_compound_small_1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.9, b: 0, c: 0, d: 0.05, tx: 0, ty: 12.5},
						transform: [0, 12.5, 0.9, 0.05, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.2, tx: 47.5, ty: 2.5},
						transform: [47.5, 2.5, 0.05, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.2, tx: -47.5, ty: 2.5},
						transform: [-47.5, 2.5, 0.05, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Platform",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform",
						instancename: "",
						matrix: {a: 0.9, b: 0, c: 0, d: 0.2, tx: 0, ty: 0},
						transform: [0, 0, 0.9, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"water": {
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
					},
				]
			},
		]
	},
	"platform_ground_compound_1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.146, b: 0, c: 0, d: 0.723, tx: 364.8, ty: 42.95},
						transform: [364.8, 42.95, 0.146, 0.723, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_circle_x",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "Platform_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform",
						instancename: "",
						matrix: {a: 3.687, b: 0, c: 0, d: 0.791, tx: 184.35, ty: 39.55},
						transform: [184.35, 39.55, 3.687, 0.791, 0, 0, 0],
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
						to: 0,
					},
				]
			},
		]
	},
	"kill": {
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
					},
				]
			},
		]
	},
	"flyer_demon": {
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
				]
			},
		]
	},
	"_nightosphere_ns_floor_2_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_floor_2_x",
		scale: 1,
		position: [-45.6, -19.95],
	},
	"_nightosphere_ns_floor_1_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_floor_1_x",
		scale: 1,
		position: [-42.45, -20.45],
	},
	"bumper_circle": {
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
					},
				]
			},
		]
	},
	"platform": {
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
					},
				]
			},
		]
	},
	"level4": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bg",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "deco",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "deco4",
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
				name: "gameplay",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "gameplay",
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
				name: "logic",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "logic4",
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
						to: 0,
					},
				]
			},
		]
	},
	"deco4": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -9, ty: 377.45},
						transform: [-9, 377.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 48.65, ty: 377.45},
						transform: [48.65, 377.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 106.65, ty: 377.45},
						transform: [106.65, 377.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 164.65, ty: 377.45},
						transform: [164.65, 377.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 222.65, ty: 377.45},
						transform: [222.65, 377.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 89.75, ty: 531},
						transform: [89.75, 531, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 158.8, ty: 531},
						transform: [158.8, 531, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 227.65, ty: 531},
						transform: [227.65, 531, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 571.75, ty: 531},
						transform: [571.75, 531, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 640.8, ty: 531},
						transform: [640.8, 531, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 709.65, ty: 531},
						transform: [709.65, 531, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 276, ty: 377.45},
						transform: [276, 377.45, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 515, ty: 377.45},
						transform: [515, 377.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 746.65, ty: 377.45},
						transform: [746.65, 377.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 688.65, ty: 377.45},
						transform: [688.65, 377.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 630.65, ty: 377.45},
						transform: [630.65, 377.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 572.65, ty: 377.45},
						transform: [572.65, 377.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 800, ty: 377.45},
						transform: [800, 377.45, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"gameplay": {
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
					},
				]
			},
		]
	},
	"logic4": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Player1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "player1",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 160, ty: 464.5},
						transform: [160, 464.5, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flyer",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "flyer_demon",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 50, ty: 311},
						transform: [50, 311, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flyer",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "flyer_demon",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 150, ty: 311},
						transform: [150, 311, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flyer",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "flyer_demon",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 650, ty: 311},
						transform: [650, 311, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "kill",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "kill",
						instancename: "",
						matrix: {a: 13.085, b: 0, c: 0, d: 0.323, tx: 478.2, ty: 753.9},
						transform: [478.2, 753.9, 13.085, 0.323, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flyer",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "flyer_demon",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 750, ty: 311},
						transform: [750, 311, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 10, b: 0, c: 0, d: 0.2, tx: 400, ty: -40},
						transform: [400, -40, 10, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_large_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_large_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 654, ty: 378},
						transform: [654, 378, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_large_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_large_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 134, ty: 378},
						transform: [134, 378, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_ground_compound_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_ground_compound_2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 160, ty: 520},
						transform: [160, 520, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_ground_compound_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_ground_compound_2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 640, ty: 520},
						transform: [640, 520, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Player2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "player2",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 640, ty: 464.5},
						transform: [640, 464.5, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Water",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "water",
						instancename: "",
						matrix: {a: 10, b: 0, c: 0, d: 0.1, tx: 400, ty: 636.9},
						transform: [400, 636.9, 10, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nightosphere_ns_platform_1_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_platform_1_x",
		scale: 1,
		position: [-42.75, -21.3],
	},
	"_nightosphere_ns_platform_2_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_platform_2_x",
		scale: 1,
		position: [-40.85, -19.9],
	},
	"_nightosphere_floor1": {
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
						classname: "_nightosphere_ns_floor_1_x",
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
	"_nightosphere_floor2": {
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
						classname: "_nightosphere_ns_floor_2_x",
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
	"player1": {
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
				]
			},
		]
	},
	"flyer_demon": {
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
				]
			},
		]
	},
	"kill": {
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
					},
				]
			},
		]
	},
	"bumper_rect": {
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
					},
				]
			},
		]
	},
	"platform_compound_large_1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 3.4, b: 0, c: 0, d: 0.05, tx: 0, ty: 12.5},
						transform: [0, 12.5, 3.4, 0.05, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.2, tx: 172.5, ty: 2.5},
						transform: [172.5, 2.5, 0.05, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.2, tx: -172.5, ty: 2.5},
						transform: [-172.5, 2.5, 0.05, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Platform",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform",
						instancename: "",
						matrix: {a: 3.4, b: 0, c: 0, d: 0.2, tx: 0, ty: 0},
						transform: [0, 0, 3.4, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"platform_ground_compound_2": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.7, tx: 98, ty: 40},
						transform: [98, 40, 0.1, 0.7, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.7, tx: -98, ty: 40},
						transform: [-98, 40, 0.1, 0.7, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Platform_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform",
						instancename: "",
						matrix: {a: 2, b: 0, c: 0, d: 0.8, tx: 0, ty: 40},
						transform: [0, 40, 2, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"player2": {
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
				]
			},
		]
	},
	"water": {
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
					},
				]
			},
		]
	},
	"_nightosphere_ns_floor_1_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_floor_1_x",
		scale: 1,
		position: [-42.45, -20.45],
	},
	"_nightosphere_ns_floor_2_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_floor_2_x",
		scale: 1,
		position: [-45.6, -19.95],
	},
	"platform": {
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
					},
				]
			},
		]
	},
	"level3": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "deco",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "deco3",
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
				name: "gameplay",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "gameplay",
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
				name: "logic",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "logic3",
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
	"deco3": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 96.85, ty: 164.3},
						transform: [96.85, 164.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 38.3, ty: 531},
						transform: [38.3, 531, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -25.25, ty: 531},
						transform: [-25.25, 531, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 110.4, ty: 531},
						transform: [110.4, 531, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 179.25, ty: 531},
						transform: [179.25, 531, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 685.8, ty: 531},
						transform: [685.8, 531, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 622.25, ty: 531},
						transform: [622.25, 531, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 757.9, ty: 531},
						transform: [757.9, 531, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 826.75, ty: 531},
						transform: [826.75, 531, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 127.15, ty: 164.3},
						transform: [127.15, 164.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 675, ty: 164.3},
						transform: [675, 164.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 702.6, ty: 164.3},
						transform: [702.6, 164.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 176.85, ty: 324.3},
						transform: [176.85, 324.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 207.15, ty: 324.3},
						transform: [207.15, 324.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 595, ty: 324.3},
						transform: [595, 324.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 622.6, ty: 324.3},
						transform: [622.6, 324.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 294.2, ty: 363.3},
						transform: [294.2, 363.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 504.4, ty: 363.3},
						transform: [504.4, 363.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 356.45, ty: 363.55},
						transform: [356.45, 363.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 404.45, ty: 363.55},
						transform: [404.45, 363.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 458.45, ty: 363.55},
						transform: [458.45, 363.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"gameplay": {
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
					},
				]
			},
		]
	},
	"logic3": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Player1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "player1",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 80, ty: 463.8},
						transform: [80, 463.8, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400, ty: 366.3},
						transform: [400, 366.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "walker_helmet",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "demon_walker_helmet",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 320, ty: 303.3},
						transform: [320, 303.3, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "walker_helmet",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "demon_walker_helmet",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 480, ty: 303.3},
						transform: [480, 303.3, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Launcher",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "launcher",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 688.8, ty: 102.7},
						transform: [688.8, 102.7, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Launcher",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "launcher",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 111.5, ty: 102.7},
						transform: [111.5, 102.7, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 10, b: 0, c: 0, d: 0.2, tx: 400, ty: -40},
						transform: [400, -40, 10, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_small_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 688, ty: 163},
						transform: [688, 163, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_small_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 608, ty: 323},
						transform: [608, 323, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_small_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 192, ty: 323},
						transform: [192, 323, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_small_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 112, ty: 163},
						transform: [112, 163, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_ground_compound_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_ground_compound_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -160, ty: 520},
						transform: [-160, 520, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_ground_compound_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_ground_compound_1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 960, ty: 520},
						transform: [960, 520, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "kill",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "kill",
						instancename: "",
						matrix: {a: 13.085, b: 0, c: 0, d: 0.323, tx: 478.2, ty: 753.9},
						transform: [478.2, 753.9, 13.085, 0.323, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Player2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "player2",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 720, ty: 463.8},
						transform: [720, 463.8, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Water",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "water",
						instancename: "",
						matrix: {a: 10, b: 0, c: 0, d: 0.1, tx: 400, ty: 636.9},
						transform: [400, 636.9, 10, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nightosphere_ns_platform_1_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_platform_1_x",
		scale: 1,
		position: [-42.75, -21.3],
	},
	"_nightosphere_floor2": {
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
						classname: "_nightosphere_ns_floor_2_x",
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
	"_nightosphere_floor1": {
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
						classname: "_nightosphere_ns_floor_1_x",
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
	"_nightosphere_ns_platform_2_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_platform_2_x",
		scale: 1,
		position: [-40.85, -19.9],
	},
	"player1": {
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
				]
			},
		]
	},
	"platform_compound_1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_circle",
						instancename: "",
						matrix: {a: 0.282, b: 0, c: 0, d: 0.282, tx: -129.4, ty: 4.3},
						transform: [-129.4, 4.3, 0.282, 0.282, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_circle",
						instancename: "",
						matrix: {a: 0.282, b: 0, c: 0, d: 0.282, tx: 129.3, ty: 4.3},
						transform: [129.3, 4.3, 0.282, 0.282, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 2.766, b: 0, c: 0, d: 0.048, tx: 0, ty: 15.6},
						transform: [0, 15.6, 2.766, 0.048, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Platform_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform",
						instancename: "",
						matrix: {a: 2.766, b: 0, c: 0, d: 0.26, tx: 0, ty: 0},
						transform: [0, 0, 2.766, 0.26, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"demon_walker_helmet": {
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
				]
			},
		]
	},
	"launcher": {
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
				]
			},
		]
	},
	"bumper_rect": {
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
					},
				]
			},
		]
	},
	"platform_compound_small_1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.9, b: 0, c: 0, d: 0.05, tx: 0, ty: 12.5},
						transform: [0, 12.5, 0.9, 0.05, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.2, tx: 47.5, ty: 2.5},
						transform: [47.5, 2.5, 0.05, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.2, tx: -47.5, ty: 2.5},
						transform: [-47.5, 2.5, 0.05, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Platform",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform",
						instancename: "",
						matrix: {a: 0.9, b: 0, c: 0, d: 0.2, tx: 0, ty: 0},
						transform: [0, 0, 0.9, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"platform_ground_compound_1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.146, b: 0, c: 0, d: 0.723, tx: 364.8, ty: 42.95},
						transform: [364.8, 42.95, 0.146, 0.723, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_circle_x",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "Platform_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform",
						instancename: "",
						matrix: {a: 3.687, b: 0, c: 0, d: 0.791, tx: 184.35, ty: 39.55},
						transform: [184.35, 39.55, 3.687, 0.791, 0, 0, 0],
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
						to: 0,
					},
				]
			},
		]
	},
	"kill": {
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
					},
				]
			},
		]
	},
	"player2": {
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
				]
			},
		]
	},
	"water": {
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
					},
				]
			},
		]
	},
	"_nightosphere_ns_floor_2_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_floor_2_x",
		scale: 1,
		position: [-45.6, -19.95],
	},
	"_nightosphere_ns_floor_1_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_floor_1_x",
		scale: 1,
		position: [-42.45, -20.45],
	},
	"bumper_circle": {
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
					},
				]
			},
		]
	},
	"platform": {
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
					},
				]
			},
		]
	},
	"level2": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "deco",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "deco2",
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
				name: "gameplay",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "gameplay",
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
				name: "logic",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "logic2",
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
	"deco2": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 294.2, ty: 257.8},
						transform: [294.2, 257.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 508.2, ty: 257.8},
						transform: [508.2, 257.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 401, ty: 530.8},
						transform: [401, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 331.15, ty: 530.8},
						transform: [331.15, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 470.05, ty: 530.8},
						transform: [470.05, 530.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 348.6, ty: 257.8},
						transform: [348.6, 257.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 403.35, ty: 257.8},
						transform: [403.35, 257.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ns_platform_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 458.1, ty: 257.8},
						transform: [458.1, 257.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"gameplay": {
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
					},
				]
			},
		]
	},
	"logic2": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "platform_compound_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400, ty: 260},
						transform: [400, 260, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "walker_helmet",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "launcher",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 319, ty: 190.1},
						transform: [319, 190.1, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "kill",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "kill",
						instancename: "",
						matrix: {a: 13.085, b: 0, c: 0, d: 0.323, tx: 478.2, ty: 753.9},
						transform: [478.2, 753.9, 13.085, 0.323, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "walker_helmet",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "launcher",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 481, ty: 190.1},
						transform: [481, 190.1, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Player1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "player1",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 340, ty: 464.5},
						transform: [340, 464.5, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 10, b: 0, c: 0, d: 0.2, tx: 400, ty: -40},
						transform: [400, -40, 10, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_ground_compound_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_ground_compound_2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 400, ty: 520},
						transform: [400, 520, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Player2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "player2",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 460, ty: 464.5},
						transform: [460, 464.5, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Water",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "water",
						instancename: "",
						matrix: {a: 10, b: 0, c: 0, d: 0.1, tx: 400, ty: 636.9},
						transform: [400, 636.9, 10, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nightosphere_ns_platform_1_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_platform_1_x",
		scale: 1,
		position: [-42.75, -21.3],
	},
	"_nightosphere_floor2": {
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
						classname: "_nightosphere_ns_floor_2_x",
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
	"_nightosphere_floor1": {
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
						classname: "_nightosphere_ns_floor_1_x",
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
	"_nightosphere_ns_platform_2_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_platform_2_x",
		scale: 1,
		position: [-40.85, -19.9],
	},
	"platform_compound_1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_circle",
						instancename: "",
						matrix: {a: 0.282, b: 0, c: 0, d: 0.282, tx: -129.4, ty: 4.3},
						transform: [-129.4, 4.3, 0.282, 0.282, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_circle",
						instancename: "",
						matrix: {a: 0.282, b: 0, c: 0, d: 0.282, tx: 129.3, ty: 4.3},
						transform: [129.3, 4.3, 0.282, 0.282, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 2.766, b: 0, c: 0, d: 0.048, tx: 0, ty: 15.6},
						transform: [0, 15.6, 2.766, 0.048, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Platform_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform",
						instancename: "",
						matrix: {a: 2.766, b: 0, c: 0, d: 0.26, tx: 0, ty: 0},
						transform: [0, 0, 2.766, 0.26, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"launcher": {
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
				]
			},
		]
	},
	"kill": {
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
					},
				]
			},
		]
	},
	"player1": {
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
				]
			},
		]
	},
	"bumper_rect": {
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
					},
				]
			},
		]
	},
	"platform_ground_compound_2": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.7, tx: 98, ty: 40},
						transform: [98, 40, 0.1, 0.7, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.7, tx: -98, ty: 40},
						transform: [-98, 40, 0.1, 0.7, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Platform_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform",
						instancename: "",
						matrix: {a: 2, b: 0, c: 0, d: 0.8, tx: 0, ty: 40},
						transform: [0, 40, 2, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"player2": {
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
				]
			},
		]
	},
	"water": {
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
					},
				]
			},
		]
	},
	"_nightosphere_ns_floor_2_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_floor_2_x",
		scale: 1,
		position: [-45.6, -19.95],
	},
	"_nightosphere_ns_floor_1_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_floor_1_x",
		scale: 1,
		position: [-42.45, -20.45],
	},
	"bumper_circle": {
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
					},
				]
			},
		]
	},
	"platform": {
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
					},
				]
			},
		]
	},
	"level1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "deco",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "deco",
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
				name: "gameplay",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "gameplay",
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
				name: "logic",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "logic1",
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
	"deco": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.8, ty: 118.1},
						transform: [3.8, 118.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 37.8, ty: 118.1},
						transform: [37.8, 118.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 324.2, ty: 138.1},
						transform: [324.2, 138.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 358.2, ty: 138.1},
						transform: [358.2, 138.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 443.6, ty: 302.5},
						transform: [443.6, 302.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 477.6, ty: 302.5},
						transform: [477.6, 302.5, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 762.9, ty: 282.5},
						transform: [762.9, 282.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_ns_platform_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 796.9, ty: 282.5},
						transform: [796.9, 282.5, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 157.5, ty: 530.8},
						transform: [157.5, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 79.45, ty: 530.8},
						transform: [79.45, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.2, ty: 530.8},
						transform: [6.2, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -57.35, ty: 530.8},
						transform: [-57.35, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 854.75, ty: 530.8},
						transform: [854.75, 530.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 374.05, ty: 530.8},
						transform: [374.05, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 296, ty: 530.8},
						transform: [296, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 222.75, ty: 530.8},
						transform: [222.75, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 594.85, ty: 530.8},
						transform: [594.85, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 516.8, ty: 530.8},
						transform: [516.8, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 443.55, ty: 530.8},
						transform: [443.55, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 784.25, ty: 530.8},
						transform: [784.25, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 706.2, ty: 530.8},
						transform: [706.2, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "floor2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nightosphere_floor2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 632.95, ty: 530.8},
						transform: [632.95, 530.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"gameplay": {
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
					},
				]
			},
		]
	},
	"logic1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Player2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "player2",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 720, ty: 462},
						transform: [720, 462, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Player1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "player1",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 80, ty: 462},
						transform: [80, 462, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flyer_demon",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "flyer_demon",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 314.8, ty: 78.8},
						transform: [314.8, 78.8, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flyer_demon",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "flyer_demon",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 485.4, ty: 242.6},
						transform: [485.4, 242.6, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "demon_walker_helmet",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "demon_walker_helmet",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 50, ty: 58.8},
						transform: [50, 58.8, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "demon_walker_helmet",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "demon_walker_helmet",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 1, tx: 750, ty: 222.6},
						transform: [750, 222.6, 0.5, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 10, b: 0, c: 0, d: 0.2, tx: 400, ty: -40},
						transform: [400, -40, 10, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_small_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 460, ty: 302.6},
						transform: [460, 302.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_small_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 340, ty: 138.8},
						transform: [340, 138.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_large_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -104, ty: 118.8},
						transform: [-104, 118.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "kill",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "kill",
						instancename: "",
						matrix: {a: 13.085, b: 0, c: 0, d: 0.323, tx: 478.2, ty: 753.9},
						transform: [478.2, 753.9, 13.085, 0.323, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "platform_compound_small_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform_compound_large_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 904, ty: 282.6},
						transform: [904, 282.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_circle",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_circle",
						instancename: "",
						matrix: {a: 0.3, b: 0, c: 0, d: 0.3, tx: 830, ty: 119.95},
						transform: [830, 119.95, 0.3, 0.3, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_circle",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_circle",
						instancename: "",
						matrix: {a: 0.3, b: 0, c: 0, d: 0.3, tx: -30, ty: 281.95},
						transform: [-30, 281.95, 0.3, 0.3, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Water",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "water",
						instancename: "",
						matrix: {a: 10, b: 0, c: 0, d: 0.1, tx: 400, ty: 636.9},
						transform: [400, 636.9, 10, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Platform",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform",
						instancename: "",
						matrix: {a: 9.883, b: 0, c: 0, d: 0.776, tx: 400, ty: 557.1},
						transform: [400, 557.1, 9.883, 0.776, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nightosphere_ns_platform_1_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_platform_1_x",
		scale: 1,
		position: [-42.75, -21.3],
	},
	"_nightosphere_floor2": {
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
						classname: "_nightosphere_ns_floor_2_x",
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
	"_nightosphere_floor1": {
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
						classname: "_nightosphere_ns_floor_1_x",
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
	"player2": {
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
				]
			},
		]
	},
	"player1": {
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
				]
			},
		]
	},
	"flyer_demon": {
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
				]
			},
		]
	},
	"demon_walker_helmet": {
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
				]
			},
		]
	},
	"bumper_rect": {
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
					},
				]
			},
		]
	},
	"platform_compound_small_1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.9, b: 0, c: 0, d: 0.05, tx: 0, ty: 12.5},
						transform: [0, 12.5, 0.9, 0.05, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.2, tx: 47.5, ty: 2.5},
						transform: [47.5, 2.5, 0.05, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.2, tx: -47.5, ty: 2.5},
						transform: [-47.5, 2.5, 0.05, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Platform",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform",
						instancename: "",
						matrix: {a: 0.9, b: 0, c: 0, d: 0.2, tx: 0, ty: 0},
						transform: [0, 0, 0.9, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"platform_compound_large_1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 3.4, b: 0, c: 0, d: 0.05, tx: 0, ty: 12.5},
						transform: [0, 12.5, 3.4, 0.05, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.2, tx: 172.5, ty: 2.5},
						transform: [172.5, 2.5, 0.05, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bumper_rect",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "bumper_rect",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.2, tx: -172.5, ty: 2.5},
						transform: [-172.5, 2.5, 0.05, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Platform",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "platform",
						instancename: "",
						matrix: {a: 3.4, b: 0, c: 0, d: 0.2, tx: 0, ty: 0},
						transform: [0, 0, 3.4, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"kill": {
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
					},
				]
			},
		]
	},
	"bumper_circle": {
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
					},
				]
			},
		]
	},
	"water": {
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
					},
				]
			},
		]
	},
	"platform": {
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
					},
				]
			},
		]
	},
	"_nightosphere_ns_floor_2_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_floor_2_x",
		scale: 1,
		position: [-45.6, -19.95],
	},
	"_nightosphere_ns_floor_1_x": {
		type: "bitmap",
		asset: "_nightosphere_ns_floor_1_x",
		scale: 1,
		position: [-42.45, -20.45],
	},
};
