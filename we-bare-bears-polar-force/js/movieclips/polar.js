
var polar = {
	"polar": {
		type: "movieclip",
		fps: 30,
		totalFrames: 203,
		labels: {idle_shopping: {from:0, to:10}, idle_hand: {from:11, to:24}, attack_hand_1: {from:25, to:34}, attack_hand_2: {from:35, to:44}, attack_hand_3: {from:45, to:54}, attack_hand_4: {from:55, to:64}, hurt_hand: {from:65, to:73}, zen: {from:74, to:83}, idle_weapon: {from:84, to:93}, attack_weapon_1: {from:94, to:104}, attack_weapon_2: {from:105, to:119}, attack_weapon_empty: {from:120, to:132}, hurt_weapon: {from:133, to:141}, idle_saw: {from:142, to:151}, attack_saw: {from:152, to:162}, attack_saw_empty: {from:163, to:173}, hurt_saw: {from:174, to:182}, die: {from:183, to:192}, bat: {from:193, to:202}, },
		layers: [
			{
				name: "vaccum",
				keys: [
					{
						from: 0,
						to: 64,
						classname: "vacuum_idle",
						instancename: "vacuum",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 65,
						to: 73,
						classname: "vacuum_hurt",
						instancename: "vacuum",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 74,
						to: 132,
						classname: "vacuum_idle",
						instancename: "vacuum",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 133,
						to: 141,
						classname: "vacuum_hurt",
						instancename: "vacuum",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 142,
						to: 173,
						classname: "vacuum_idle",
						instancename: "vacuum",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 174,
						to: 182,
						classname: "vacuum_hurt",
						instancename: "vacuum",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 183,
						to: 192,
						classname: "vacuum_wreck",
						instancename: "vacuum",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 193,
						to: 202,
						classname: "vacuum_idle",
						instancename: "vacuum",
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
						to: 10,
						classname: "polar_idle_shopping",
						instancename: "polar",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 24,
						classname: "polar_idle",
						instancename: "polar",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 34,
						classname: "polar_attack1",
						instancename: "polar",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 35,
						to: 44,
						classname: "polar_attack2",
						instancename: "polar",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 45,
						to: 54,
						classname: "polar_attack3",
						instancename: "polar",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 55,
						to: 64,
						classname: "polar_attack4",
						instancename: "polar",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 65,
						to: 73,
						classname: "polar_hurt",
						instancename: "polar",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 74,
						to: 83,
						classname: "polar_zen",
						instancename: "polar",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 84,
						to: 93,
						classname: "polar_idle_axe",
						instancename: "polar",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 94,
						to: 104,
						classname: "polar_attack_axe_1",
						instancename: "polar",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 105,
						to: 119,
						classname: "polar_attack_axe_2",
						instancename: "polar",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 132,
						classname: "polar_attack_axe_empty",
						instancename: "polar",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 133,
						to: 141,
						classname: "polar_hurt_axe",
						instancename: "polar",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 142,
						to: 151,
						classname: "polar_idle_saw",
						instancename: "polar",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 152,
						to: 162,
						classname: "polar_attack_saw",
						instancename: "polar",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 163,
						to: 173,
						classname: "polar_attack_saw_empty",
						instancename: "polar",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 174,
						to: 182,
						classname: "polar_hurt_saw",
						instancename: "polar",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 183,
						to: 192,
						classname: "polar_die",
						instancename: "polar",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 193,
						to: 202,
						classname: "polar_bat",
						instancename: "polar",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
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
					},
					{
						from: 11,
						to: 24,
					},
					{
						from: 25,
						to: 34,
					},
					{
						from: 35,
						to: 44,
					},
					{
						from: 45,
						to: 54,
					},
					{
						from: 55,
						to: 64,
					},
					{
						from: 65,
						to: 73,
					},
					{
						from: 74,
						to: 83,
					},
					{
						from: 84,
						to: 93,
					},
					{
						from: 94,
						to: 104,
					},
					{
						from: 105,
						to: 119,
					},
					{
						from: 120,
						to: 132,
					},
					{
						from: 133,
						to: 141,
					},
					{
						from: 142,
						to: 151,
					},
					{
						from: 152,
						to: 162,
					},
					{
						from: 163,
						to: 173,
					},
					{
						from: 174,
						to: 182,
					},
					{
						from: 183,
						to: 192,
					},
					{
						from: 193,
						to: 202,
					},
				]
			},
		]
	},
	"weaponitem": {
		type: "movieclip",
		fps: 30,
		totalFrames: 40,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_polar_rombo",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.55, 0], [0.565, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 38,
						classname: "_polar_rombo",
						instancename: "",
						matrix: {a: 0.821, b: 0, c: 0, d: 0.821, tx: -2.1, ty: -0.35},
						transform: [-2.1, -0.35, 0.821, 0.821, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.55, 0], [0.565, 1], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 39,
						classname: "_polar_rombo",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.55, 0], [0.565, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 18,
						classname: "_polar_weapon_item_gfx",
						instancename: "weapon",
						matrix: {a: 0.897, b: -0.137, c: 0.137, d: 0.897, tx: -1.35, ty: -0.25},
						transform: [-1.35, -0.25, 0.907, 0.907, 0.152, -0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.498, 0], [0.511, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 38,
						classname: "_polar_weapon_item_gfx",
						instancename: "weapon",
						matrix: {a: 0.896, b: 0.145, c: -0.145, d: 0.896, tx: -1.3, ty: -0.25},
						transform: [-1.3, -0.25, 0.907, 0.907, -0.161, 0.161, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.498, 0], [0.511, 1], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 39,
						classname: "_polar_weapon_item_gfx",
						instancename: "weapon",
						matrix: {a: 0.897, b: -0.137, c: 0.137, d: 0.897, tx: -1.35, ty: -0.25},
						transform: [-1.35, -0.25, 0.907, 0.907, 0.152, -0.152, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"saw": {
		type: "movieclip",
		fps: 30,
		totalFrames: 3,
		labels: {fly: {from:0, to:0}, static: {from:1, to:1}, static2: {from:2, to:2}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_saw_fly",
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
						classname: "_polar_saw1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0.55},
						transform: [0, 0.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_polar_saw_wreck_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0.55},
						transform: [0, 0.55, 1, 1, 0, 0, 0],
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
						to: 2,
						classname: "_polar_bodybox",
						instancename: "bound",
						matrix: {a: 0.622, b: 0, c: 0, d: 0.622, tx: 0, ty: 0},
						transform: [0, 0, 0.622, 0.622, 0, 0, 0],
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
				]
			},
		]
	},
	"_polar_stuff_weapons_wreck": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "hammer",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_hammer_wreck",
						instancename: "hammer",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 162.2, ty: 45.05},
						transform: [162.2, 45.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "axe",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_axe_wreck",
						instancename: "axe",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 75.45, ty: 45.05},
						transform: [75.45, 45.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "saw",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_saw_wreck",
						instancename: "saw",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.5, ty: 2.1},
						transform: [11.5, 2.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mace",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_mace_wreck",
						instancename: "mace",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -51.75, ty: 47.6},
						transform: [-51.75, 47.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "glasses",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_glasses_wreck",
						instancename: "shopping",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -205.75, ty: 23.3},
						transform: [-205.75, 23.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bat",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_bat_wreck",
						instancename: "bat",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -133.95, ty: 45.05},
						transform: [-133.95, 45.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"vacuum_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 3,
		labels: {_3: {from:0, to:0}, _2: {from:1, to:1}, _1: {from:2, to:2}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_vacuum_idle_sane",
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
						classname: "_polar_vacuum_idle_lastlife",
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
				]
			},
			{
				name: "Layer 3",
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
				]
			},
		]
	},
	"vacuum_hurt": {
		type: "movieclip",
		fps: 30,
		totalFrames: 3,
		labels: {_3: {from:0, to:0}, _2: {from:1, to:1}, _1: {from:2, to:2}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_polar_vacuum_hit",
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
				]
			},
			{
				name: "Layer 3",
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
				]
			},
		]
	},
	"vacuum_wreck": {
		type: "movieclip",
		fps: 30,
		totalFrames: 3,
		labels: {},
		layers: [
			{
				name: "vacuum_part_4",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_polar_vacuum_part_4",
						instancename: "VACUUM_3",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 1.35},
						transform: [0, 1.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "vacuum_part_3",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_polar_vacuum_part_3",
						instancename: "VACUUM_3",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: -5.85},
						transform: [0, -5.85, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "vacuum_part_2",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_polar_stuff_vacuum_part_2",
						instancename: "VACUUM_2",
						matrix: {a: 0.958, b: -0.287, c: 0.287, d: 0.958, tx: -16.15, ty: -40.7},
						transform: [-16.15, -40.7, 1, 1, 0.292, -0.292, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "vacuum_part_1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_polar_stuff_vacuum_part_1",
						instancename: "VACUUM_1",
						matrix: {a: 0.982, b: -0.19, c: 0.19, d: 0.982, tx: -55.05, ty: -30},
						transform: [-55.05, -30, 1, 1, 0.191, -0.191, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"polar_idle_shopping": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {loop: {from:1, to:17}, },
		layers: [
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "tail1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 45.6, ty: -65.4},
						transform: [45.6, -65.4, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.077, c: -0.077, d: 0.997, tx: 46.3, ty: -66.2},
						transform: [46.3, -66.2, 1, 1, -0.077, 0.077, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 45.6, ty: -65.4},
						transform: [45.6, -65.4, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear2_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.2, ty: -211.75},
						transform: [-13.2, -211.75, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.049, c: 0.049, d: 0.999, tx: -17.4, ty: -211.7},
						transform: [-17.4, -211.7, 1, 1, 0.049, -0.049, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.2, ty: -211.75},
						transform: [-13.2, -211.75, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
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
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -39.8, ty: -135.7},
						transform: [-39.8, -135.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0.016, c: -0.016, d: 1, tx: -42.8, ty: -136.4},
						transform: [-42.8, -136.4, 1, 1, -0.016, 0.016, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -39.8, ty: -135.7},
						transform: [-39.8, -135.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -1.1, ty: -124.15},
						transform: [-1.1, -124.15, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.996, b: -0.092, c: 0.092, d: 0.996, tx: -3.25, ty: -123.6},
						transform: [-3.25, -123.6, 1, 1, 0.092, -0.092, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -1.1, ty: -124.15},
						transform: [-1.1, -124.15, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "tote_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_mainmenu_tote_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.014, d: 1, tx: 28.6, ty: -112.5},
						transform: [28.6, -112.5, 1, 1, -0.014, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.476, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_mainmenu_tote_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.022, d: 1, tx: 26.7, ty: -112.5},
						transform: [26.7, -112.5, 1, 1, -0.022, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.476, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_mainmenu_tote_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.014, d: 1, tx: 28.6, ty: -112.5},
						transform: [28.6, -112.5, 1, 1, -0.014, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.476, 0], [0.537, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "toteup_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_mainmenu_toteup_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.1, ty: -126.45},
						transform: [7.1, -126.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.476, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_mainmenu_toteup_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.5, ty: -126.45},
						transform: [6.5, -126.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.476, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_mainmenu_toteup_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.1, ty: -126.45},
						transform: [7.1, -126.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.476, 0], [0.537, 1], [1, 1], ],
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
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 27.25, ty: -128.9},
						transform: [27.25, -128.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 1.009, b: -0.001, c: 0.001, d: 1, tx: 20.6, ty: -129.8},
						transform: [20.6, -129.8, 1.009, 1, 0.001, -0.001, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 27.25, ty: -128.9},
						transform: [27.25, -128.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_mainmenu_toteup2_x",
						instancename: "",
						matrix: {a: 0.593, b: 0, c: 0.046, d: 1, tx: 42.15, ty: -136.4},
						transform: [42.15, -136.4, 0.593, 1.001, 0.046, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_mainmenu_toteup2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.005, d: 1, tx: 38.35, ty: -136.4},
						transform: [38.35, -136.4, 1, 1, -0.005, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_mainmenu_toteup2_x",
						instancename: "",
						matrix: {a: 0.593, b: 0, c: 0.046, d: 1, tx: 42.15, ty: -136.4},
						transform: [42.15, -136.4, 0.593, 1.001, 0.046, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0], [0.556, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "face1",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_face1_glasses",
						instancename: "face",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.95, ty: -172.6},
						transform: [-13.95, -172.6, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_face1_glasses",
						instancename: "face",
						matrix: {a: 0.996, b: -0.092, c: 0.092, d: 0.996, tx: -17.65, ty: -172.3},
						transform: [-17.65, -172.3, 1, 1, 0.092, -0.092, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_face1_glasses",
						instancename: "face",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.95, ty: -172.6},
						transform: [-13.95, -172.6, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 24.3, ty: -210.65},
						transform: [24.3, -210.65, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.959, b: -0.283, c: 0.283, d: 0.959, tx: 16.95, ty: -211},
						transform: [16.95, -211, 1, 1, 0.287, -0.287, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 24.3, ty: -210.65},
						transform: [24.3, -210.65, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "tuto_right",
				keys: [
					{
						from: 0,
						to: 18,
						classname: "_polar_tuto_right",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -144.2, ty: -87.65},
						transform: [-144.2, -87.65, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "tuto_right",
				keys: [
					{
						from: 0,
						to: 18,
						classname: "_polar_tuto_right",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 140.9, ty: -87.65},
						transform: [140.9, -87.65, 1, 1, 0, 0, 0],
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
						actions: function(self){self.getChildByName("face").gotoAndPlay(1);},
					},
					{
						from: 1,
						to: 17,
					},
					{
						from: 18,
						to: 18,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"polar_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {loop: {from:1, to:17}, },
		layers: [
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "tail1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 45.6, ty: -65.4},
						transform: [45.6, -65.4, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.077, c: -0.077, d: 0.997, tx: 46.3, ty: -66.2},
						transform: [46.3, -66.2, 1, 1, -0.077, 0.077, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 45.6, ty: -65.4},
						transform: [45.6, -65.4, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear2_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.2, ty: -211.75},
						transform: [-13.2, -211.75, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.049, c: 0.049, d: 0.999, tx: -17.4, ty: -211.7},
						transform: [-17.4, -211.7, 1, 1, 0.049, -0.049, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.2, ty: -211.75},
						transform: [-13.2, -211.75, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
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
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -39.8, ty: -135.7},
						transform: [-39.8, -135.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0.016, c: -0.016, d: 1, tx: -42.8, ty: -136.4},
						transform: [-42.8, -136.4, 1, 1, -0.016, 0.016, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -39.8, ty: -135.7},
						transform: [-39.8, -135.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -1.1, ty: -124.15},
						transform: [-1.1, -124.15, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.996, b: -0.092, c: 0.092, d: 0.996, tx: -3.25, ty: -123.6},
						transform: [-3.25, -123.6, 1, 1, 0.092, -0.092, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -1.1, ty: -124.15},
						transform: [-1.1, -124.15, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
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
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 27.25, ty: -128.9},
						transform: [27.25, -128.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 1.009, b: -0.001, c: 0.001, d: 1, tx: 20.6, ty: -129.8},
						transform: [20.6, -129.8, 1.009, 1, 0.001, -0.001, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 27.25, ty: -128.9},
						transform: [27.25, -128.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "face1",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.95, ty: -172.6},
						transform: [-13.95, -172.6, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 0.996, b: -0.092, c: 0.092, d: 0.996, tx: -17.65, ty: -172.3},
						transform: [-17.65, -172.3, 1, 1, 0.092, -0.092, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.95, ty: -172.6},
						transform: [-13.95, -172.6, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 24.3, ty: -210.65},
						transform: [24.3, -210.65, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.959, b: -0.283, c: 0.283, d: 0.959, tx: 16.95, ty: -211},
						transform: [16.95, -211, 1, 1, 0.287, -0.287, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 24.3, ty: -210.65},
						transform: [24.3, -210.65, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
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
						actions: function(self){self.getChildByName("face").gotoAndPlay(1);},
					},
					{
						from: 1,
						to: 17,
					},
					{
						from: 18,
						to: 18,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"polar_attack1": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {},
		layers: [
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -49.85},
						transform: [-22.95, -49.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -49.85},
						transform: [-22.95, -49.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -49.85},
						transform: [-22.95, -49.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.783, 0.524], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -49.85},
						transform: [-22.95, -49.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "tail1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.216, c: 0.216, d: 0.976, tx: 44.55, ty: -69.85},
						transform: [44.55, -69.85, 1, 1, 0.217, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.216, c: 0.216, d: 0.976, tx: 44.55, ty: -69.85},
						transform: [44.55, -69.85, 1, 1, 0.217, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.216, c: 0.216, d: 0.976, tx: 44.55, ty: -69.85},
						transform: [44.55, -69.85, 1, 1, 0.217, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.783, 0.524], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.044, c: -0.044, d: 0.999, tx: 41.35, ty: -58.55},
						transform: [41.35, -58.55, 1, 1, -0.044, 0.044, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.967, b: -0.254, c: 0.254, d: 0.967, tx: 46.85, ty: -72.05},
						transform: [46.85, -72.05, 1, 1, 0.257, -0.257, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: 45.65, ty: -64.6},
						transform: [45.65, -64.6, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 45.6, ty: -65.4},
						transform: [45.6, -65.4, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.996, b: 0.092, c: -0.092, d: 0.996, tx: -75.95, ty: -179.85},
						transform: [-75.95, -179.85, 1, 1, -0.092, 0.092, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.996, b: 0.092, c: -0.092, d: 0.996, tx: -75.95, ty: -179.85},
						transform: [-75.95, -179.85, 1, 1, -0.092, 0.092, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.996, b: 0.092, c: -0.092, d: 0.996, tx: -75.95, ty: -179.85},
						transform: [-75.95, -179.85, 1, 1, -0.092, 0.092, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.783, 0.524], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.938, b: 0.347, c: -0.347, d: 0.938, tx: -46.55, ty: -196},
						transform: [-46.55, -196, 1, 1, -0.354, 0.354, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.967, b: -0.254, c: 0.254, d: 0.967, tx: -40.45, ty: -203.35},
						transform: [-40.45, -203.35, 1, 1, 0.257, -0.257, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: -11.45, ty: -211.9},
						transform: [-11.45, -211.9, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.2, ty: -211.75},
						transform: [-13.2, -211.75, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_armpunch1_x",
						instancename: "",
						matrix: {a: 0.987, b: -0.159, c: 0.159, d: 0.987, tx: -68.65, ty: -107.7},
						transform: [-68.65, -107.7, 1, 1, 0.159, -0.159, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_armpunch1_x",
						instancename: "",
						matrix: {a: 0.987, b: -0.159, c: 0.159, d: 0.987, tx: -68.65, ty: -107.7},
						transform: [-68.65, -107.7, 1, 1, 0.159, -0.159, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_armpunch1_x",
						instancename: "",
						matrix: {a: 0.987, b: -0.159, c: 0.159, d: 0.987, tx: -68.65, ty: -107.7},
						transform: [-68.65, -107.7, 1, 1, 0.159, -0.159, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.783, 0.524], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_armpunch1_x",
						instancename: "",
						matrix: {a: 0.845, b: 0.202, c: -0.232, d: 0.973, tx: -45.15, ty: -107.6},
						transform: [-45.15, -107.6, 0.869, 1, -0.234, 0.234, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.744, b: -0.669, c: 0.669, d: 0.744, tx: -52.95, ty: -119.15},
						transform: [-52.95, -119.15, 1, 1, 0.732, -0.732, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: -37.7, ty: -141.5},
						transform: [-37.7, -141.5, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -39.8, ty: -135.7},
						transform: [-39.8, -135.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
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
						classname: "_polar_trail4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -154.25, ty: -107.7},
						transform: [-154.25, -107.7, 1, 1, 0, 0, 0],
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
						classname: "_polar_trail4_x",
						instancename: "",
						matrix: {a: 0.757, b: 0.005, c: -0.138, d: 0.781, tx: -155.3, ty: -106.8},
						transform: [-155.3, -106.8, 0.757, 0.793, -0.175, 0.007, NaN],
						alpha: 0.55,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_polar_trail4_x",
						instancename: "",
						matrix: {a: 0.523, b: 0.004, c: -0.095, d: 0.539, tx: -157.75, ty: -109.7},
						transform: [-157.75, -109.7, 0.523, 0.548, -0.175, 0.007, NaN],
						alpha: 0.55,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 17,
					},
					{
						from: 18,
						to: 18,
					},
				]
			},
			{
				name: "body1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_body2_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.216, c: 0.216, d: 0.976, tx: -9.65, ty: -120.85},
						transform: [-9.65, -120.85, 1, 1, 0.217, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_body2_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.216, c: 0.216, d: 0.976, tx: -9.65, ty: -120.85},
						transform: [-9.65, -120.85, 1, 1, 0.217, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_body2_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.216, c: 0.216, d: 0.976, tx: -9.65, ty: -120.85},
						transform: [-9.65, -120.85, 1, 1, 0.217, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.783, 0.524], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_body2_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.044, c: -0.044, d: 0.999, tx: 2.2, ty: -121.85},
						transform: [2.2, -121.85, 1, 1, -0.044, 0.044, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.967, b: -0.254, c: 0.254, d: 0.967, tx: -10.75, ty: -120.05},
						transform: [-10.75, -120.05, 1, 1, 0.257, -0.257, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: 0, ty: -124.15},
						transform: [0, -124.15, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -1.1, ty: -124.15},
						transform: [-1.1, -124.15, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.187, b: -0.982, c: 0.982, d: 0.187, tx: 9.55, ty: -123.85},
						transform: [9.55, -123.85, 1, 1, 1.383, -1.383, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.187, b: -0.982, c: 0.982, d: 0.187, tx: 9.55, ty: -123.85},
						transform: [9.55, -123.85, 1, 1, 1.383, -1.383, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 9,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.187, b: -0.982, c: 0.982, d: 0.187, tx: 9.55, ty: -123.85},
						transform: [9.55, -123.85, 1, 1, 1.383, -1.383, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.783, 0.524], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.905, b: -0.426, c: 0.426, d: 0.905, tx: 14, ty: -122.85},
						transform: [14, -122.85, 1, 1, 0.44, -0.44, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.996, b: 0.09, c: -0.09, d: 0.996, tx: 28.35, ty: -131.25},
						transform: [28.35, -131.25, 1, 1, -0.09, 0.09, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 27.25, ty: -128.9},
						transform: [27.25, -128.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "face1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_face5_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.216, c: 0.216, d: 0.976, tx: -73.65, ty: -139.05},
						transform: [-73.65, -139.05, 1, 1, 0.217, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_face5_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.216, c: 0.216, d: 0.976, tx: -73.65, ty: -139.05},
						transform: [-73.65, -139.05, 1, 1, 0.217, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_face5_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.216, c: 0.216, d: 0.976, tx: -73.65, ty: -139.05},
						transform: [-73.65, -139.05, 1, 1, 0.217, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.783, 0.524], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_face5_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.044, c: -0.044, d: 0.999, tx: -54.9, ty: -156},
						transform: [-54.9, -156, 1, 1, -0.044, 0.044, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.967, b: -0.254, c: 0.254, d: 0.967, tx: -37.6, ty: -163.3},
						transform: [-37.6, -163.3, 1, 1, 0.257, -0.257, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: -12.85, ty: -173.6},
						transform: [-12.85, -173.6, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.95, ty: -172.6},
						transform: [-13.95, -172.6, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_ear3_x",
						instancename: "",
						matrix: {a: 0.939, b: 0.343, c: -0.343, d: 0.939, tx: -49.85, ty: -183.35},
						transform: [-49.85, -183.35, 1, 1, -0.35, 0.35, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_ear3_x",
						instancename: "",
						matrix: {a: 0.939, b: 0.343, c: -0.343, d: 0.939, tx: -49.85, ty: -183.35},
						transform: [-49.85, -183.35, 1, 1, -0.35, 0.35, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_ear3_x",
						instancename: "",
						matrix: {a: 0.939, b: 0.343, c: -0.343, d: 0.939, tx: -49.85, ty: -183.35},
						transform: [-49.85, -183.35, 1, 1, -0.35, 0.35, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.783, 0.524], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_ear3_x",
						instancename: "",
						matrix: {a: 0.819, b: 0.574, c: -0.574, d: 0.819, tx: -20.4, ty: -192.65},
						transform: [-20.4, -192.65, 1, 1, -0.611, 0.611, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.967, b: -0.254, c: 0.254, d: 0.967, tx: -3.5, ty: -209.9},
						transform: [-3.5, -209.9, 1, 1, 0.257, -0.257, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: 28.75, ty: -209.8},
						transform: [28.75, -209.8, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 24.3, ty: -210.65},
						transform: [24.3, -210.65, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14, ty: -45.65},
						transform: [14, -45.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14, ty: -45.65},
						transform: [14, -45.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14, ty: -45.65},
						transform: [14, -45.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.783, 0.524], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.019, d: 1.046, tx: 14.65, ty: -47.35},
						transform: [14.65, -47.35, 1, 1.046, -0.019, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.049, d: 1, tx: 20, ty: -48.3},
						transform: [20, -48.3, 1, 1.001, 0.049, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "attackbox",
				keys: [
					{
						from: 0,
						to: 18,
						classname: "_polar_punchbox",
						instancename: "attackbox",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -156.2, ty: -108.05},
						transform: [-156.2, -108.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"polar_attack2": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {},
		layers: [
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: -65.05, ty: -122.35},
						transform: [-65.05, -122.35, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: -65.05, ty: -122.35},
						transform: [-65.05, -122.35, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: -65.05, ty: -122.35},
						transform: [-65.05, -122.35, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.457, 0], [0.791, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.034, c: 0.034, d: 0.999, tx: -59, ty: -119.25},
						transform: [-59, -119.25, 1, 1, 0.034, -0.034, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.964, b: -0.267, c: 0.267, d: 0.964, tx: -52.95, ty: -119.15},
						transform: [-52.95, -119.15, 1, 1, 0.271, -0.271, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: -37.7, ty: -141.5},
						transform: [-37.7, -141.5, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -39.8, ty: -135.7},
						transform: [-39.8, -135.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.152, d: 0.761, tx: -28.55, ty: -43.05},
						transform: [-28.55, -43.05, 1, 0.776, 0.197, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.152, d: 0.761, tx: -28.55, ty: -43.05},
						transform: [-28.55, -43.05, 1, 0.776, 0.197, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.152, d: 0.761, tx: -28.55, ty: -43.05},
						transform: [-28.55, -43.05, 1, 0.776, 0.197, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.457, 0], [0.791, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.054, d: 0.761, tx: -25.15, ty: -43.05},
						transform: [-25.15, -43.05, 1, 0.763, 0.071, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "tail1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.216, c: 0.216, d: 0.976, tx: 45.5, ty: -73.3},
						transform: [45.5, -73.3, 1, 1, 0.217, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.216, c: 0.216, d: 0.976, tx: 45.5, ty: -73.3},
						transform: [45.5, -73.3, 1, 1, 0.217, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.216, c: 0.216, d: 0.976, tx: 45.5, ty: -73.3},
						transform: [45.5, -73.3, 1, 1, 0.217, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.457, 0], [0.791, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: -0.004, c: 0.004, d: 1, tx: 47.4, ty: -62.9},
						transform: [47.4, -62.9, 1, 1, 0.004, -0.004, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.967, b: -0.254, c: 0.254, d: 0.967, tx: 46.85, ty: -72.05},
						transform: [46.85, -72.05, 1, 1, 0.257, -0.257, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: 45.65, ty: -64.6},
						transform: [45.65, -64.6, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 45.6, ty: -65.4},
						transform: [45.6, -65.4, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.717, b: -0.697, c: 0.697, d: 0.717, tx: -51.3, ty: -187.3},
						transform: [-51.3, -187.3, 1, 1, 0.771, -0.771, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.717, b: -0.697, c: 0.697, d: 0.717, tx: -51.3, ty: -187.3},
						transform: [-51.3, -187.3, 1, 1, 0.771, -0.771, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.717, b: -0.697, c: 0.697, d: 0.717, tx: -51.3, ty: -187.3},
						transform: [-51.3, -187.3, 1, 1, 0.771, -0.771, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.457, 0], [0.791, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.848, b: -0.529, c: 0.529, d: 0.848, tx: -37.2, ty: -195.75},
						transform: [-37.2, -195.75, 1, 1, 0.558, -0.558, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.967, b: -0.254, c: 0.254, d: 0.967, tx: -40.45, ty: -203.35},
						transform: [-40.45, -203.35, 1, 1, 0.257, -0.257, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: -11.45, ty: -211.9},
						transform: [-11.45, -211.9, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.2, ty: -211.75},
						transform: [-13.2, -211.75, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_body2_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.216, c: 0.216, d: 0.976, tx: -9.65, ty: -120.85},
						transform: [-9.65, -120.85, 1, 1, 0.217, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_body2_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.216, c: 0.216, d: 0.976, tx: -9.65, ty: -120.85},
						transform: [-9.65, -120.85, 1, 1, 0.217, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_body2_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.216, c: 0.216, d: 0.976, tx: -9.65, ty: -120.85},
						transform: [-9.65, -120.85, 1, 1, 0.217, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.457, 0], [0.791, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_body2_x",
						instancename: "",
						matrix: {a: 1, b: -0.004, c: 0.004, d: 1, tx: 3.55, ty: -121.05},
						transform: [3.55, -121.05, 1, 1, 0.004, -0.004, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.967, b: -0.254, c: 0.254, d: 0.967, tx: -10.75, ty: -120.05},
						transform: [-10.75, -120.05, 1, 1, 0.257, -0.257, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: 0, ty: -124.15},
						transform: [0, -124.15, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -1.1, ty: -124.15},
						transform: [-1.1, -124.15, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "face1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_face6_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.216, c: 0.216, d: 0.976, tx: -73.65, ty: -139.05},
						transform: [-73.65, -139.05, 1, 1, 0.217, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_face6_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.216, c: 0.216, d: 0.976, tx: -73.65, ty: -139.05},
						transform: [-73.65, -139.05, 1, 1, 0.217, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_face6_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.216, c: 0.216, d: 0.976, tx: -73.65, ty: -139.05},
						transform: [-73.65, -139.05, 1, 1, 0.217, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.457, 0], [0.791, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_face6_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.104, c: 0.104, d: 0.995, tx: -55.8, ty: -151.25},
						transform: [-55.8, -151.25, 1, 1, 0.104, -0.104, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.967, b: -0.254, c: 0.254, d: 0.967, tx: -37.6, ty: -163.3},
						transform: [-37.6, -163.3, 1, 1, 0.257, -0.257, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: -12.85, ty: -173.6},
						transform: [-12.85, -173.6, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.95, ty: -172.6},
						transform: [-13.95, -172.6, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_armpunch4_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.07, c: 0.07, d: 0.997, tx: -60.9, ty: -95.1},
						transform: [-60.9, -95.1, 1, 1, 0.07, -0.07, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_armpunch4_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.07, c: 0.07, d: 0.997, tx: -60.9, ty: -95.1},
						transform: [-60.9, -95.1, 1, 1, 0.07, -0.07, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_armpunch4_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.07, c: 0.07, d: 0.997, tx: -60.9, ty: -95.1},
						transform: [-60.9, -95.1, 1, 1, 0.07, -0.07, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.457, 0], [0.791, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_armpunch4_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.118, c: 0.118, d: 0.993, tx: -6.85, ty: -101.35},
						transform: [-6.85, -101.35, 1, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.467, b: -0.884, c: 0.884, d: 0.467, tx: -12.35, ty: -116.25},
						transform: [-12.35, -116.25, 1, 1, 1.085, -1.085, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.996, b: 0.09, c: -0.09, d: 0.996, tx: 28.35, ty: -131.25},
						transform: [28.35, -131.25, 1, 1, -0.09, 0.09, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 27.25, ty: -128.9},
						transform: [27.25, -128.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_ear3_x",
						instancename: "",
						matrix: {a: 0.758, b: -0.652, c: 0.652, d: 0.758, tx: -74.4, ty: -176.95},
						transform: [-74.4, -176.95, 1, 1, 0.71, -0.71, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_ear3_x",
						instancename: "",
						matrix: {a: 0.758, b: -0.652, c: 0.652, d: 0.758, tx: -74.4, ty: -176.95},
						transform: [-74.4, -176.95, 1, 1, 0.71, -0.71, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_ear3_x",
						instancename: "",
						matrix: {a: 0.758, b: -0.652, c: 0.652, d: 0.758, tx: -74.4, ty: -176.95},
						transform: [-74.4, -176.95, 1, 1, 0.71, -0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.415, 0], [0.748, 0.447], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_ear3_x",
						instancename: "",
						matrix: {a: 0.974, b: 0.222, c: -0.222, d: 0.974, tx: -30.7, ty: -195.8},
						transform: [-30.7, -195.8, 0.999, 0.999, -0.225, 0.225, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.38, 0.32], [0.713, 0.662], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.967, b: -0.254, c: 0.254, d: 0.967, tx: -3.5, ty: -209.9},
						transform: [-3.5, -209.9, 1, 1, 0.257, -0.257, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: 28.75, ty: -209.8},
						transform: [28.75, -209.8, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 24.3, ty: -210.65},
						transform: [24.3, -210.65, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14, ty: -45.65},
						transform: [14, -45.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14, ty: -45.65},
						transform: [14, -45.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14, ty: -45.65},
						transform: [14, -45.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.457, 0], [0.791, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.066, d: 1, tx: 16.45, ty: -45.65},
						transform: [16.45, -45.65, 1, 1.002, -0.066, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.049, d: 1, tx: 20, ty: -48.3},
						transform: [20, -48.3, 1, 1.001, 0.049, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
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
						classname: "_polar_trail4_x",
						instancename: "",
						matrix: {a: 0.957, b: -0.292, c: -0.292, d: -0.957, tx: -150, ty: -94.5},
						transform: [-150, -94.5, 1, 1, -2.846, -0.296, NaN],
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
						classname: "_polar_trail4_x",
						instancename: "",
						matrix: {a: 0.77, b: -0.057, c: -0.057, d: -0.77, tx: -150.7, ty: -96.5},
						transform: [-150.7, -96.5, 0.773, 0.773, -3.068, -0.074, NaN],
						alpha: 0.26,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_polar_trail4_x",
						instancename: "",
						matrix: {a: 0.546, b: 0.024, c: 0.024, d: -0.546, tx: -150.7, ty: -96.5},
						transform: [-150.7, -96.5, 0.546, 0.546, 3.098, 0.043, NaN],
						alpha: 0.26,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 17,
					},
					{
						from: 18,
						to: 18,
					},
				]
			},
			{
				name: "attackbox",
				keys: [
					{
						from: 0,
						to: 18,
						classname: "_polar_punchbox",
						instancename: "attackbox",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -144.95, ty: -96.4},
						transform: [-144.95, -96.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"polar_attack3": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {},
		layers: [
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.928, b: -0.372, c: 0.372, d: 0.928, tx: -35.45, ty: -127.8},
						transform: [-35.45, -127.8, 1, 1, 0.381, -0.381, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.928, b: -0.372, c: 0.372, d: 0.928, tx: -35.45, ty: -127.8},
						transform: [-35.45, -127.8, 1, 1, 0.381, -0.381, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 8,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.928, b: -0.372, c: 0.372, d: 0.928, tx: -35.45, ty: -127.8},
						transform: [-35.45, -127.8, 1, 1, 0.381, -0.381, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.823, 0.538], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.197, c: 0.197, d: 0.98, tx: -37.6, ty: -123.25},
						transform: [-37.6, -123.25, 1, 1, 0.198, -0.198, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.038, c: 0.038, d: 0.999, tx: -33.8, ty: -127.55},
						transform: [-33.8, -127.55, 1, 1, 0.038, -0.038, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: -37.7, ty: -141.5},
						transform: [-37.7, -141.5, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -39.8, ty: -135.7},
						transform: [-39.8, -135.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_leg4_x",
						instancename: "",
						matrix: {a: 0.438, b: 0.899, c: -0.899, d: 0.438, tx: -55.25, ty: -79.5},
						transform: [-55.25, -79.5, 1, 1, -1.117, 1.117, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_polar_leg4_x",
						instancename: "",
						matrix: {a: 0.438, b: 0.899, c: -0.899, d: 0.438, tx: -55.25, ty: -79.5},
						transform: [-55.25, -79.5, 1, 1, -1.117, 1.117, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 8,
						classname: "_polar_leg4_x",
						instancename: "",
						matrix: {a: 0.438, b: 0.899, c: -0.899, d: 0.438, tx: -55.25, ty: -79.5},
						transform: [-55.25, -79.5, 1, 1, -1.117, 1.117, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.823, 0.538], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_leg4_x",
						instancename: "",
						matrix: {a: 0.605, b: 0.796, c: -0.697, d: 0.53, tx: -44.2, ty: -73.4},
						transform: [-44.2, -73.4, 1, 0.876, -0.921, 0.921, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 0.637, b: 0.771, c: -0.849, d: 0.702, tx: -41.25, ty: -67.9},
						transform: [-41.25, -67.9, 1, 1.102, -0.88, 0.88, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "tail1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.987, b: 0.157, c: -0.157, d: 0.987, tx: 39.3, ty: -58.25},
						transform: [39.3, -58.25, 1, 1, -0.158, 0.158, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.987, b: 0.157, c: -0.157, d: 0.987, tx: 39.3, ty: -58.25},
						transform: [39.3, -58.25, 1, 1, -0.158, 0.158, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 8,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.987, b: 0.157, c: -0.157, d: 0.987, tx: 39.3, ty: -58.25},
						transform: [39.3, -58.25, 1, 1, -0.158, 0.158, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.823, 0.538], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.994, b: 0.109, c: -0.109, d: 0.994, tx: 39.4, ty: -61.5},
						transform: [39.4, -61.5, 1, 1, -0.109, 0.109, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.061, c: -0.061, d: 0.998, tx: 44.75, ty: -59.95},
						transform: [44.75, -59.95, 1, 1, -0.061, 0.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: 45.65, ty: -64.6},
						transform: [45.65, -64.6, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 45.6, ty: -65.4},
						transform: [45.6, -65.4, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.991, b: -0.135, c: 0.135, d: 0.991, tx: -28.95, ty: -194.25},
						transform: [-28.95, -194.25, 1, 1, 0.135, -0.135, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.991, b: -0.135, c: 0.135, d: 0.991, tx: -28.95, ty: -194.25},
						transform: [-28.95, -194.25, 1, 1, 0.135, -0.135, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 8,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.991, b: -0.135, c: 0.135, d: 0.991, tx: -28.95, ty: -194.25},
						transform: [-28.95, -194.25, 1, 1, 0.135, -0.135, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.823, 0.538], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.935, b: -0.354, c: 0.354, d: 0.935, tx: -29.35, ty: -197.95},
						transform: [-29.35, -197.95, 1, 1, 0.362, -0.362, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.173, c: 0.173, d: 0.985, tx: -19.4, ty: -205},
						transform: [-19.4, -205, 1, 1, 0.174, -0.174, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: -11.45, ty: -211.9},
						transform: [-11.45, -211.9, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.2, ty: -211.75},
						transform: [-13.2, -211.75, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_body3_x",
						instancename: "",
						matrix: {a: 0.814, b: 0.581, c: -0.581, d: 0.814, tx: 19.15, ty: -121.6},
						transform: [19.15, -121.6, 1, 1, -0.62, 0.62, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_polar_body3_x",
						instancename: "",
						matrix: {a: 0.814, b: 0.581, c: -0.581, d: 0.814, tx: 19.15, ty: -121.6},
						transform: [19.15, -121.6, 1, 1, -0.62, 0.62, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 8,
						classname: "_polar_body3_x",
						instancename: "",
						matrix: {a: 0.814, b: 0.581, c: -0.581, d: 0.814, tx: 19.15, ty: -121.6},
						transform: [19.15, -121.6, 1, 1, -0.62, 0.62, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.823, 0.538], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_body3_x",
						instancename: "",
						matrix: {a: 0.864, b: 0.358, c: -0.427, d: 0.905, tx: 17.8, ty: -127.05},
						transform: [17.8, -127.05, 0.935, 1.001, -0.441, 0.393, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.994, b: -0.113, c: 0.11, d: 0.963, tx: 0.65, ty: -122.8},
						transform: [0.65, -122.8, 1, 0.969, 0.114, -0.114, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: 0, ty: -124.15},
						transform: [0, -124.15, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -1.1, ty: -124.15},
						transform: [-1.1, -124.15, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "face1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_face7_x",
						instancename: "",
						matrix: {a: 0.961, b: -0.275, c: 0.275, d: 0.961, tx: -21.8, ty: -158.4},
						transform: [-21.8, -158.4, 1, 1, 0.278, -0.278, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_polar_face7_x",
						instancename: "",
						matrix: {a: 0.961, b: -0.275, c: 0.275, d: 0.961, tx: -21.8, ty: -158.4},
						transform: [-21.8, -158.4, 1, 1, 0.278, -0.278, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 8,
						classname: "_polar_face7_x",
						instancename: "",
						matrix: {a: 0.961, b: -0.275, c: 0.275, d: 0.961, tx: -21.8, ty: -158.4},
						transform: [-21.8, -158.4, 1, 1, 0.278, -0.278, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.823, 0.538], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_face7_x",
						instancename: "",
						matrix: {a: 0.994, b: -0.104, c: 0.049, d: 1, tx: -28.55, ty: -162.5},
						transform: [-28.55, -162.5, 1, 1.001, 0.049, -0.104, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.994, b: -0.113, c: 0.113, d: 0.994, tx: -19.95, ty: -169.25},
						transform: [-19.95, -169.25, 1, 1, 0.113, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: -12.85, ty: -173.6},
						transform: [-12.85, -173.6, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.95, ty: -172.6},
						transform: [-13.95, -172.6, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_arm44_x",
						instancename: "",
						matrix: {a: 0.992, b: -0.125, c: 0.125, d: 0.992, tx: 55.45, ty: -162.4},
						transform: [55.45, -162.4, 1, 1, 0.126, -0.126, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_polar_arm44_x",
						instancename: "",
						matrix: {a: 0.992, b: -0.125, c: 0.125, d: 0.992, tx: 55.45, ty: -162.4},
						transform: [55.45, -162.4, 1, 1, 0.126, -0.126, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 8,
						classname: "_polar_arm44_x",
						instancename: "",
						matrix: {a: 0.992, b: -0.125, c: 0.125, d: 0.992, tx: 55.45, ty: -162.4},
						transform: [55.45, -162.4, 1, 1, 0.126, -0.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.823, 0.538], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_arm44_x",
						instancename: "",
						matrix: {a: 0.918, b: 0.238, c: -0.093, d: 0.928, tx: 49.35, ty: -144.05},
						transform: [49.35, -144.05, 0.948, 0.933, -0.1, 0.254, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.824, b: -0.566, c: 0.566, d: 0.824, tx: 29, ty: -145.25},
						transform: [29, -145.25, 1, 1, 0.602, -0.602, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.996, b: 0.09, c: -0.09, d: 0.996, tx: 28.35, ty: -131.25},
						transform: [28.35, -131.25, 1, 1, -0.09, 0.09, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 27.25, ty: -128.9},
						transform: [27.25, -128.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.722, b: 0.692, c: -0.692, d: 0.722, tx: 9.95, ty: -203.65},
						transform: [9.95, -203.65, 1, 1, -0.764, 0.764, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.722, b: 0.692, c: -0.692, d: 0.722, tx: 9.95, ty: -203.65},
						transform: [9.95, -203.65, 1, 1, -0.764, 0.764, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 8,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.722, b: 0.692, c: -0.692, d: 0.722, tx: 9.95, ty: -203.65},
						transform: [9.95, -203.65, 1, 1, -0.764, 0.764, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.823, 0.538], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.659, b: 0.752, c: -0.752, d: 0.659, tx: 8.7, ty: -201.25},
						transform: [8.7, -201.25, 1, 1, -0.851, 0.851, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.173, c: 0.173, d: 0.985, tx: 13.4, ty: -207.45},
						transform: [13.4, -207.45, 1, 1, 0.174, -0.174, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: 28.75, ty: -209.8},
						transform: [28.75, -209.8, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 24.3, ty: -210.65},
						transform: [24.3, -210.65, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_leg7_x",
						instancename: "",
						matrix: {a: -0.999, b: 0.043, c: 0.043, d: 0.999, tx: 12.15, ty: -48.6},
						transform: [12.15, -48.6, 1, 1, 0.043, 3.099, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_polar_leg7_x",
						instancename: "",
						matrix: {a: -0.999, b: 0.043, c: 0.043, d: 0.999, tx: 12.15, ty: -48.6},
						transform: [12.15, -48.6, 1, 1, 0.043, 3.099, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 8,
						classname: "_polar_leg7_x",
						instancename: "",
						matrix: {a: -0.999, b: 0.043, c: 0.043, d: 0.999, tx: 12.15, ty: -48.6},
						transform: [12.15, -48.6, 1, 1, 0.043, 3.099, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.823, 0.538], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_leg7_x",
						instancename: "",
						matrix: {a: -0.999, b: 0.043, c: 0.043, d: 0.999, tx: 12.15, ty: -48.6},
						transform: [12.15, -48.6, 1, 1, 0.043, 3.099, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
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
						classname: "_polar_trail4_x",
						instancename: "",
						matrix: {a: 1.004, b: 0.029, c: -0.061, d: -0.998, tx: -129.8, ty: -66.85},
						transform: [-129.8, -66.85, 1.004, 1, -3.08, 0.029, NaN],
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
						classname: "_polar_trail4_x",
						instancename: "",
						matrix: {a: 0.813, b: 0.107, c: 0.064, d: -0.817, tx: -129.8, ty: -66.85},
						transform: [-129.8, -66.85, 0.82, 0.819, 3.063, 0.131, NaN],
						alpha: 0.43,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_polar_trail4_x",
						instancename: "",
						matrix: {a: 0.603, b: 0.15, c: 0.118, d: -0.609, tx: -129.9, ty: -66.85},
						transform: [-129.9, -66.85, 0.621, 0.62, 2.951, 0.243, NaN],
						alpha: 0.19,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 17,
					},
					{
						from: 18,
						to: 18,
					},
				]
			},
			{
				name: "attackbox",
				keys: [
					{
						from: 0,
						to: 18,
						classname: "_polar_punchbox",
						instancename: "attackbox",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -125.7, ty: -73.5},
						transform: [-125.7, -73.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"polar_attack4": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {},
		layers: [
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.098, c: 0.098, d: 0.995, tx: -25.1, ty: -159.25},
						transform: [-25.1, -159.25, 1, 1, 0.098, -0.098, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.098, c: 0.098, d: 0.995, tx: -25.1, ty: -159.25},
						transform: [-25.1, -159.25, 1, 1, 0.098, -0.098, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.098, c: 0.098, d: 0.995, tx: -25.1, ty: -159.25},
						transform: [-25.1, -159.25, 1, 1, 0.098, -0.098, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.8, 0.551], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.171, c: 0.171, d: 0.985, tx: -40.3, ty: -146.4},
						transform: [-40.3, -146.4, 1, 1, 0.172, -0.172, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.074, c: 0.074, d: 0.997, tx: -49.05, ty: -138.65},
						transform: [-49.05, -138.65, 1, 1, 0.074, -0.074, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: -37.7, ty: -141.5},
						transform: [-37.7, -141.5, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -39.8, ty: -135.7},
						transform: [-39.8, -135.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_leg11_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_leg11_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_leg11_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.8, 0.551], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_leg11_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "tail1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.966, b: 0.26, c: -0.26, d: 0.966, tx: 23.85, ty: -72.6},
						transform: [23.85, -72.6, 1, 1, -0.263, 0.263, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.966, b: 0.26, c: -0.26, d: 0.966, tx: 23.85, ty: -72.6},
						transform: [23.85, -72.6, 1, 1, -0.263, 0.263, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.966, b: 0.26, c: -0.26, d: 0.966, tx: 23.85, ty: -72.6},
						transform: [23.85, -72.6, 1, 1, -0.263, 0.263, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.8, 0.551], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.028, c: -0.028, d: 0.999, tx: 37.8, ty: -61.05},
						transform: [37.8, -61.05, 1, 1, -0.028, 0.028, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.039, c: -0.039, d: 0.999, tx: 32.2, ty: -64.3},
						transform: [32.2, -64.3, 1, 1, -0.039, 0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: 45.65, ty: -64.6},
						transform: [45.65, -64.6, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 45.6, ty: -65.4},
						transform: [45.6, -65.4, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.924, b: -0.382, c: 0.382, d: 0.924, tx: 31.75, ty: -215.15},
						transform: [31.75, -215.15, 1, 1, 0.392, -0.392, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.924, b: -0.382, c: 0.382, d: 0.924, tx: 31.75, ty: -215.15},
						transform: [31.75, -215.15, 1, 1, 0.392, -0.392, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.924, b: -0.382, c: 0.382, d: 0.924, tx: 31.75, ty: -215.15},
						transform: [31.75, -215.15, 1, 1, 0.392, -0.392, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.8, 0.551], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.77, b: -0.638, c: 0.638, d: 0.77, tx: 9.4, ty: -221.3},
						transform: [9.4, -221.3, 1, 1, 0.692, -0.692, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.039, c: -0.039, d: 0.999, tx: -12.95, ty: -215.4},
						transform: [-12.95, -215.4, 1, 1, -0.039, 0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: -11.45, ty: -211.9},
						transform: [-11.45, -211.9, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.2, ty: -211.75},
						transform: [-13.2, -211.75, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.922, b: 0.387, c: -0.393, d: 0.936, tx: -7.95, ty: -131.7},
						transform: [-7.95, -131.7, 1, 1.015, -0.398, 0.398, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.922, b: 0.387, c: -0.393, d: 0.936, tx: -7.95, ty: -131.7},
						transform: [-7.95, -131.7, 1, 1.015, -0.398, 0.398, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.922, b: 0.387, c: -0.393, d: 0.936, tx: -7.95, ty: -131.7},
						transform: [-7.95, -131.7, 1, 1.015, -0.398, 0.398, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.8, 0.551], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.097, c: -0.099, d: 1.01, tx: -3.85, ty: -129.85},
						transform: [-3.85, -129.85, 1, 1.015, -0.097, 0.097, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.039, c: -0.039, d: 0.999, tx: -8.95, ty: -127.05},
						transform: [-8.95, -127.05, 1, 1, -0.039, 0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: 0, ty: -124.15},
						transform: [0, -124.15, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -1.1, ty: -124.15},
						transform: [-1.1, -124.15, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "face1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_face22_x",
						instancename: "",
						matrix: {a: 0.606, b: 0.795, c: -0.795, d: 0.606, tx: -4.7, ty: -195.45},
						transform: [-4.7, -195.45, 1, 1, -0.919, 0.919, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_face22_x",
						instancename: "",
						matrix: {a: 0.606, b: 0.795, c: -0.795, d: 0.606, tx: -4.7, ty: -195.45},
						transform: [-4.7, -195.45, 1, 1, -0.919, 0.919, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_face22_x",
						instancename: "",
						matrix: {a: 0.606, b: 0.795, c: -0.795, d: 0.606, tx: -4.7, ty: -195.45},
						transform: [-4.7, -195.45, 1, 1, -0.919, 0.919, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.8, 0.551], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_face22_x",
						instancename: "",
						matrix: {a: 0.814, b: 0.58, c: -0.58, d: 0.814, tx: -19.6, ty: -191.7},
						transform: [-19.6, -191.7, 1, 1, -0.619, 0.619, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.977, b: 0.211, c: -0.211, d: 0.977, tx: -26.05, ty: -178.2},
						transform: [-26.05, -178.2, 1, 1, -0.213, 0.213, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: -12.85, ty: -173.6},
						transform: [-12.85, -173.6, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.95, ty: -172.6},
						transform: [-13.95, -172.6, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: -0.155, b: -0.988, c: 0.988, d: -0.155, tx: 48.4, ty: -133.1},
						transform: [48.4, -133.1, 1, 1, 1.726, -1.726, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: -0.155, b: -0.988, c: 0.988, d: -0.155, tx: 48.4, ty: -133.1},
						transform: [48.4, -133.1, 1, 1, 1.726, -1.726, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: -0.155, b: -0.988, c: 0.988, d: -0.155, tx: 48.4, ty: -133.1},
						transform: [48.4, -133.1, 1, 1, 1.726, -1.726, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.8, 0.551], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.648, b: -0.762, c: 0.762, d: 0.648, tx: 29.05, ty: -128.35},
						transform: [29.05, -128.35, 1, 1, 0.866, -0.866, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.63, b: -0.777, c: 0.777, d: 0.63, tx: 26.6, ty: -126.85},
						transform: [26.6, -126.85, 1, 1, 0.89, -0.89, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.996, b: 0.09, c: -0.09, d: 0.996, tx: 28.35, ty: -131.25},
						transform: [28.35, -131.25, 1, 1, -0.09, 0.09, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 27.25, ty: -128.9},
						transform: [27.25, -128.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.096, b: 0.995, c: -0.995, d: 0.096, tx: 41.9, ty: -207.65},
						transform: [41.9, -207.65, 1, 1, -1.475, 1.475, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.096, b: 0.995, c: -0.995, d: 0.096, tx: 41.9, ty: -207.65},
						transform: [41.9, -207.65, 1, 1, -1.475, 1.475, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.096, b: 0.995, c: -0.995, d: 0.096, tx: 41.9, ty: -207.65},
						transform: [41.9, -207.65, 1, 1, -1.475, 1.475, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.8, 0.551], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.386, b: 0.922, c: -0.922, d: 0.386, tx: 21.3, ty: -217.15},
						transform: [21.3, -217.15, 1, 1, -1.175, 1.175, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.039, c: -0.039, d: 0.999, tx: 24.25, ty: -210.9},
						transform: [24.25, -210.9, 1, 1, -0.039, 0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: 28.75, ty: -209.8},
						transform: [28.75, -209.8, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 24.3, ty: -210.65},
						transform: [24.3, -210.65, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_leg12_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -64.45, ty: -84.15},
						transform: [-64.45, -84.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_leg12_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -64.45, ty: -84.15},
						transform: [-64.45, -84.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_leg12_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -64.45, ty: -84.15},
						transform: [-64.45, -84.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.8, 0.551], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_leg12_x",
						instancename: "",
						matrix: {a: 0.569, b: -0.564, c: 0.433, d: 0.65, tx: -7.8, ty: -56.6},
						transform: [-7.8, -56.6, 0.801, 0.781, 0.588, -0.78, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 0.938, b: 0.346, c: -0.39, d: 1.055, tx: 2.8, ty: -53.15},
						transform: [2.8, -53.15, 1, 1.125, -0.354, 0.354, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
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
						classname: "_polar_trail4_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.078, c: 0.078, d: -0.997, tx: -116.7, ty: -93.1},
						transform: [-116.7, -93.1, 1, 1, 3.064, 0.078, NaN],
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
						classname: "_polar_trail4_x",
						instancename: "",
						matrix: {a: 0.813, b: 0.107, c: 0.064, d: -0.817, tx: -117.35, ty: -97.25},
						transform: [-117.35, -97.25, 0.82, 0.819, 3.063, 0.131, NaN],
						alpha: 0.43,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_polar_trail4_x",
						instancename: "",
						matrix: {a: 0.603, b: 0.15, c: 0.118, d: -0.609, tx: -118.5, ty: -99.4},
						transform: [-118.5, -99.4, 0.621, 0.62, 2.951, 0.243, NaN],
						alpha: 0.19,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 17,
					},
					{
						from: 18,
						to: 18,
					},
				]
			},
			{
				name: "attackbox",
				keys: [
					{
						from: 0,
						to: 18,
						classname: "_polar_punchbox",
						instancename: "attackbox",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -115.4, ty: -95.95},
						transform: [-115.4, -95.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"polar_hurt": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {},
		layers: [
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 0.903, b: 0.429, c: -0.429, d: 0.903, tx: -27.7, ty: -55.05},
						transform: [-27.7, -55.05, 1, 1, -0.443, 0.443, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 0.689, b: 0.724, c: -0.724, d: 0.689, tx: -36.8, ty: -63.8},
						transform: [-36.8, -63.8, 1, 1, -0.81, 0.81, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 0.654, b: 0.756, c: -0.756, d: 0.654, tx: -35.25, ty: -79.9},
						transform: [-35.25, -79.9, 1, 1, -0.857, 0.857, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.146, c: -0.146, d: 0.989, tx: -21.85, ty: -53.9},
						transform: [-21.85, -53.9, 1, 1, -0.147, 0.147, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0.021, c: -0.021, d: 1, tx: -20.45, ty: -52.05},
						transform: [-20.45, -52.05, 1, 1, -0.021, 0.021, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.089, d: 0.841, tx: -26.05, ty: -45.45},
						transform: [-26.05, -45.45, 1, 0.846, 0.106, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "tail1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 44.05, ty: -59.3},
						transform: [44.05, -59.3, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 45.45, ty: -59.05},
						transform: [45.45, -59.05, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.98, b: 0.197, c: -0.197, d: 0.98, tx: 46.6, ty: -71.25},
						transform: [46.6, -71.25, 1, 1, -0.198, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 44.05, ty: -59.3},
						transform: [44.05, -59.3, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.993, b: 0.121, c: -0.121, d: 0.993, tx: 44.05, ty: -60.1},
						transform: [44.05, -60.1, 1, 1, -0.122, 0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.031, c: 0.031, d: 0.999, tx: 43.95, ty: -56.65},
						transform: [43.95, -56.65, 1, 1, 0.031, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 45.6, ty: -65.4},
						transform: [45.6, -65.4, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear2_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 20.6, ty: -214.95},
						transform: [20.6, -214.95, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 26.4, ty: -213.35},
						transform: [26.4, -213.35, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.98, b: 0.197, c: -0.197, d: 0.98, tx: 38, ty: -224.95},
						transform: [38, -224.95, 1, 1, -0.198, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 20.6, ty: -214.95},
						transform: [20.6, -214.95, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.993, b: 0.121, c: -0.121, d: 0.993, tx: 15.95, ty: -214.95},
						transform: [15.95, -214.95, 1, 1, -0.122, 0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.031, c: 0.031, d: 0.999, tx: -5.6, ty: -206.15},
						transform: [-5.6, -206.15, 1, 1, 0.031, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.2, ty: -211.75},
						transform: [-13.2, -211.75, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm_left back",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.166, b: -0.986, c: 0.986, d: 0.166, tx: -23.55, ty: -145.05},
						transform: [-23.55, -145.05, 1, 1, 1.404, -1.404, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.396, b: -0.918, c: 0.918, d: 0.396, tx: -16.75, ty: -147.9},
						transform: [-16.75, -147.9, 1, 1, 1.163, -1.163, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.047, c: -0.047, d: 0.999, tx: -21.85, ty: -153.85},
						transform: [-21.85, -153.85, 1, 1, -0.047, 0.047, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.222, b: -0.975, c: 0.975, d: 0.222, tx: -20.65, ty: -143.05},
						transform: [-20.65, -143.05, 1, 1, 1.347, -1.347, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.935, b: 0.354, c: -0.354, d: 0.935, tx: -35.95, ty: -139.9},
						transform: [-35.95, -139.9, 1, 1, -0.362, 0.362, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.483], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.164, c: 0.164, d: 0.986, tx: -43, ty: -129.15},
						transform: [-43, -129.15, 1, 1, 0.165, -0.165, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -39.8, ty: -135.7},
						transform: [-39.8, -135.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
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
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 10.15, ty: -126.3},
						transform: [10.15, -126.3, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 11.6, ty: -126},
						transform: [11.6, -126, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.98, b: 0.197, c: -0.197, d: 0.98, tx: 15.95, ty: -139.75},
						transform: [15.95, -139.75, 1, 1, -0.198, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 10.15, ty: -126.3},
						transform: [10.15, -126.3, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.993, b: 0.121, c: -0.121, d: 0.993, tx: 8.2, ty: -126.05},
						transform: [8.2, -126.05, 1, 1, -0.122, 0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1.016, b: -0.031, c: 0.029, d: 0.962, tx: -1.35, ty: -119.65},
						transform: [-1.35, -119.65, 1.016, 0.963, 0.031, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -1.1, ty: -124.15},
						transform: [-1.1, -124.15, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "face1",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_face_hurt_axe",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 11.75, ty: -176.45},
						transform: [11.75, -176.45, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_face_hurt_axe",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 14.4, ty: -178.65},
						transform: [14.4, -178.65, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_face_hurt_axe",
						instancename: "",
						matrix: {a: 0.98, b: 0.197, c: -0.197, d: 0.98, tx: 21.25, ty: -194},
						transform: [21.25, -194, 1, 1, -0.198, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_face_hurt_axe",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 11.75, ty: -176.45},
						transform: [11.75, -176.45, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.993, b: 0.121, c: -0.121, d: 0.993, tx: 9.25, ty: -176.3},
						transform: [9.25, -176.3, 1, 1, -0.122, 0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.031, c: 0.031, d: 0.999, tx: -10.85, ty: -165.75},
						transform: [-10.85, -165.75, 1, 1, 0.031, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.95, ty: -172.6},
						transform: [-13.95, -172.6, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 52.4, ty: -207.25},
						transform: [52.4, -207.25, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 57.45, ty: -202.1},
						transform: [57.45, -202.1, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.854, b: 0.52, c: -0.52, d: 0.854, tx: 66.65, ty: -211},
						transform: [66.65, -211, 1, 1, -0.547, 0.547, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 52.4, ty: -207.25},
						transform: [52.4, -207.25, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.993, b: 0.121, c: -0.121, d: 0.993, tx: 47.95, ty: -208.2},
						transform: [47.95, -208.2, 1, 1, -0.122, 0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.031, c: 0.031, d: 0.999, tx: 22.15, ty: -202.9},
						transform: [22.15, -202.9, 1, 1, 0.031, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 24.3, ty: -210.65},
						transform: [24.3, -210.65, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm2",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.496, b: -0.868, c: 0.868, d: 0.496, tx: 47.65, ty: -123.3},
						transform: [47.65, -123.3, 1, 1, 1.052, -1.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.496, b: -0.868, c: 0.868, d: 0.496, tx: 51.45, ty: -124.1},
						transform: [51.45, -124.1, 1, 1, 1.052, -1.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.291, 0.4], [0.65, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: -0.074, b: -0.997, c: 0.997, d: -0.074, tx: 61.9, ty: -154.4},
						transform: [61.9, -154.4, 1, 1, 1.644, -1.644, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.758, 0.545], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.375, b: -0.927, c: 0.927, d: 0.375, tx: 50.35, ty: -135.55},
						transform: [50.35, -135.55, 1, 1, 1.187, -1.187, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.291, 0.425], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.972, b: 0.233, c: -0.233, d: 0.972, tx: 25.45, ty: -126.1},
						transform: [25.45, -126.1, 1, 1, -0.236, 0.236, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.411, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 27.25, ty: -128.9},
						transform: [27.25, -128.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm1_hurt",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_arm54_x",
						instancename: "",
						matrix: {a: 0.166, b: -0.986, c: 0.986, d: 0.166, tx: -57.1, ty: -142.65},
						transform: [-57.1, -142.65, 1, 1, 1.404, -1.404, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_arm54_x",
						instancename: "",
						matrix: {a: 0.396, b: -0.918, c: 0.918, d: 0.396, tx: -49.85, ty: -153.6},
						transform: [-49.85, -153.6, 1, 1, 1.163, -1.163, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_arm54_x",
						instancename: "",
						matrix: {a: 0.975, b: -0.221, c: 0.221, d: 0.975, tx: -31.75, ty: -188.45},
						transform: [-31.75, -188.45, 1, 1, 0.223, -0.223, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_arm54_x",
						instancename: "",
						matrix: {a: 0.222, b: -0.975, c: 0.975, d: 0.222, tx: -57.35, ty: -142.65},
						transform: [-57.35, -142.65, 1, 1, 1.347, -1.347, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
					},
					{
						from: 15,
						to: 17,
					},
					{
						from: 18,
						to: 18,
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 0.948, b: 0.317, c: -0.392, d: 0.88, tx: 22.85, ty: -50.4},
						transform: [22.85, -50.4, 1, 0.963, -0.419, 0.323, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 0.809, b: 0.587, c: -0.547, d: 0.753, tx: 22.3, ty: -65.95},
						transform: [22.3, -65.95, 1, 0.931, -0.628, 0.628, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.03, d: 0.891, tx: 21, ty: -44.25},
						transform: [21, -44.25, 1, 0.892, 0.034, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"polar_zen": {
		type: "movieclip",
		fps: 30,
		totalFrames: 49,
		labels: {},
		layers: [
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 20,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.569, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 47,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.569, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 48,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "tail1_x",
				keys: [
					{
						from: 0,
						to: 20,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.199, d: 0.98, tx: 47.9, ty: -71},
						transform: [47.9, -71, 1, 1, 0.2, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.569, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 47,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.994, b: -0.113, c: 0.113, d: 0.994, tx: 48.65, ty: -73},
						transform: [48.65, -73, 1, 1, 0.113, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.569, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 48,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.199, d: 0.98, tx: 47.9, ty: -71},
						transform: [47.9, -71, 1, 1, 0.2, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear2_x",
				keys: [
					{
						from: 0,
						to: 20,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.199, d: 0.98, tx: -51.5, ty: -184.85},
						transform: [-51.5, -184.85, 1, 1, 0.2, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.569, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 47,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.972, b: -0.236, c: 0.236, d: 0.972, tx: -55.55, ty: -182.35},
						transform: [-55.55, -182.35, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.569, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 48,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.199, d: 0.98, tx: -51.5, ty: -184.85},
						transform: [-51.5, -184.85, 1, 1, 0.2, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 20,
						classname: "_polar_arm_zen2_x",
						instancename: "",
						matrix: {a: 1, b: -0.027, c: 0.027, d: 1, tx: -48.6, ty: -111.55},
						transform: [-48.6, -111.55, 1, 1, 0.027, -0.027, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.569, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 47,
						classname: "_polar_arm_zen2_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.065, c: 0.065, d: 0.998, tx: -48.25, ty: -112.8},
						transform: [-48.25, -112.8, 1, 1, 0.065, -0.065, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.569, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 48,
						classname: "_polar_arm_zen2_x",
						instancename: "",
						matrix: {a: 1, b: -0.027, c: 0.027, d: 1, tx: -48.6, ty: -111.55},
						transform: [-48.6, -111.55, 1, 1, 0.027, -0.027, NaN],
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
						to: 20,
						classname: "_polar_body5_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.199, d: 0.98, tx: -9, ty: -123.3},
						transform: [-9, -123.3, 1, 1, 0.2, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.569, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 47,
						classname: "_polar_body5_x",
						instancename: "",
						matrix: {a: 0.972, b: -0.236, c: 0.236, d: 0.972, tx: -10.15, ty: -123.1},
						transform: [-10.15, -123.1, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.569, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 48,
						classname: "_polar_body5_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.199, d: 0.98, tx: -9, ty: -123.3},
						transform: [-9, -123.3, 1, 1, 0.2, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "face1",
				keys: [
					{
						from: 0,
						to: 20,
						classname: "_polar_face6",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.199, d: 0.98, tx: -40.35, ty: -146.75},
						transform: [-40.35, -146.75, 1, 1, 0.2, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.569, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 47,
						classname: "_polar_face6",
						instancename: "",
						matrix: {a: 0.917, b: -0.223, c: 0.236, d: 0.972, tx: -43.3, ty: -145.05},
						transform: [-43.3, -145.05, 0.944, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.569, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 48,
						classname: "_polar_face6",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.199, d: 0.98, tx: -40.35, ty: -146.75},
						transform: [-40.35, -146.75, 1, 1, 0.2, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 20,
						classname: "_polar_arm_zen1_x",
						instancename: "",
						matrix: {a: 0.993, b: 0.121, c: -0.121, d: 0.993, tx: 7.9, ty: -109.25},
						transform: [7.9, -109.25, 1, 1, -0.122, 0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.569, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 47,
						classname: "_polar_arm_zen1_x",
						instancename: "",
						matrix: {a: 0.973, b: 0.154, c: -0.156, d: 0.988, tx: 3.95, ty: -108.35},
						transform: [3.95, -108.35, 0.985, 1, -0.157, 0.157, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.569, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 48,
						classname: "_polar_arm_zen1_x",
						instancename: "",
						matrix: {a: 0.993, b: 0.121, c: -0.121, d: 0.993, tx: 7.9, ty: -109.25},
						transform: [7.9, -109.25, 1, 1, -0.122, 0.122, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear1_x",
				keys: [
					{
						from: 0,
						to: 20,
						classname: "_polar_ear3_x",
						instancename: "",
						matrix: {a: 0.885, b: 0.466, c: -0.466, d: 0.885, tx: -22.35, ty: -192.15},
						transform: [-22.35, -192.15, 1, 1, -0.485, 0.485, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.569, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 47,
						classname: "_polar_ear3_x",
						instancename: "",
						matrix: {a: 0.902, b: 0.432, c: -0.432, d: 0.902, tx: -24.9, ty: -191.4},
						transform: [-24.9, -191.4, 1, 1, -0.446, 0.446, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.569, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 48,
						classname: "_polar_ear3_x",
						instancename: "",
						matrix: {a: 0.885, b: 0.466, c: -0.466, d: 0.885, tx: -22.35, ty: -192.15},
						transform: [-22.35, -192.15, 1, 1, -0.485, 0.485, NaN],
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
						to: 20,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.079, tx: 21.95, ty: -51.5},
						transform: [21.95, -51.5, 1, 1.079, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.569, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 47,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.079, tx: 21.95, ty: -51.5},
						transform: [21.95, -51.5, 1, 1.079, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.569, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 48,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.079, tx: 21.95, ty: -51.5},
						transform: [21.95, -51.5, 1, 1.079, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "tuto_right",
				keys: [
					{
						from: 0,
						to: 48,
						classname: "_polar_tuto_right",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -144.2, ty: -87.65},
						transform: [-144.2, -87.65, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "tuto_right",
				keys: [
					{
						from: 0,
						to: 48,
						classname: "_polar_tuto_right",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 140.9, ty: -87.65},
						transform: [140.9, -87.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"polar_idle_axe": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {loop: {from:1, to:17}, },
		layers: [
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.027, d: 0.935, tx: -23.9, ty: -48.7},
						transform: [-23.9, -48.7, 1, 0.935, 0.029, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "tail1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 45.35, ty: -63},
						transform: [45.35, -63, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.993, b: 0.122, c: -0.122, d: 0.993, tx: 46.7, ty: -62.75},
						transform: [46.7, -62.75, 1, 1, -0.122, 0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 45.35, ty: -63},
						transform: [45.35, -63, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
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
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: 35.05, ty: -131.9},
						transform: [35.05, -131.9, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 1, b: -0.013, c: 0.013, d: 1, tx: 35.45, ty: -128.1},
						transform: [35.45, -128.1, 1, 1, 0.013, -0.013, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: 35.05, ty: -131.9},
						transform: [35.05, -131.9, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear2_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.35, ty: -213.3},
						transform: [-1.35, -213.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.039, c: 0.039, d: 0.999, tx: -5.4, ty: -210.1},
						transform: [-5.4, -210.1, 1, 1, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.35, ty: -213.3},
						transform: [-1.35, -213.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.75, ty: -124.1},
						transform: [1.75, -124.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1.006, b: -0.039, c: 0.038, d: 0.991, tx: -0.35, ty: -121.3},
						transform: [-0.35, -121.3, 1.007, 0.991, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.75, ty: -124.1},
						transform: [1.75, -124.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "face1",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.15, ty: -172.9},
						transform: [-3.15, -172.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 0.999, b: -0.039, c: 0.039, d: 0.999, tx: -7.2, ty: -171.45},
						transform: [-7.2, -171.45, 1, 1, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.15, ty: -172.9},
						transform: [-3.15, -172.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 31.25, ty: -210.5},
						transform: [31.25, -210.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.039, c: 0.039, d: 0.999, tx: 24, ty: -208.7},
						transform: [24, -208.7, 1, 1, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 31.25, ty: -210.5},
						transform: [31.25, -210.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "weapon",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_polar_weapon_stick",
						instancename: "weapon",
						matrix: {a: 0.903, b: 0.43, c: -0.43, d: 0.903, tx: 48.95, ty: -128.95},
						transform: [48.95, -128.95, 1, 1, -0.444, 0.444, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_polar_weapon_stick",
						instancename: "weapon",
						matrix: {a: 0.83, b: 0.558, c: -0.558, d: 0.83, tx: 46.35, ty: -126.65},
						transform: [46.35, -126.65, 1, 1, -0.592, 0.592, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_polar_weapon_stick",
						instancename: "weapon",
						matrix: {a: 0.903, b: 0.43, c: -0.43, d: 0.903, tx: 48.95, ty: -128.95},
						transform: [48.95, -128.95, 1, 1, -0.444, 0.444, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
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
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.4, ty: -131.2},
						transform: [21.4, -131.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 18.85, ty: -128.65},
						transform: [18.85, -128.65, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.4, ty: -131.2},
						transform: [21.4, -131.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "hand1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: 75.25, ty: -149.75},
						transform: [75.25, -149.75, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 1, b: -0.013, c: 0.013, d: 1, tx: 76.95, ty: -142.6},
						transform: [76.95, -142.6, 1, 1, 0.013, -0.013, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: 75.25, ty: -149.75},
						transform: [75.25, -149.75, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.033, d: 0.968, tx: 23.1, ty: -47},
						transform: [23.1, -47, 1, 0.968, -0.034, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
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
						actions: function(self){self.getChildByName("face").gotoAndPlay(1);},
					},
					{
						from: 1,
						to: 17,
					},
					{
						from: 18,
						to: 18,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"polar_attack_axe_1": {
		type: "movieclip",
		fps: 30,
		totalFrames: 16,
		labels: {},
		layers: [
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.915, tx: -22.95, ty: -48.05},
						transform: [-22.95, -48.05, 1, 0.915, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.915, tx: -22.95, ty: -48.05},
						transform: [-22.95, -48.05, 1, 0.915, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.5], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "tail1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 44.7, ty: -61.9},
						transform: [44.7, -61.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 44.7, ty: -61.9},
						transform: [44.7, -61.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.5], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.073, c: 0.073, d: 0.997, tx: 46.45, ty: -62},
						transform: [46.45, -62, 1, 1, 0.073, -0.073, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: 0.025, c: -0.025, d: 1, tx: 45.45, ty: -61.75},
						transform: [45.45, -61.75, 1, 1, -0.025, 0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 45.35, ty: -63},
						transform: [45.35, -63, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
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
						classname: "_polar_arm4_x",
						instancename: "",
						matrix: {a: 0.742, b: -0.67, c: 0.67, d: 0.742, tx: -27.35, ty: -137.25},
						transform: [-27.35, -137.25, 1, 1, 0.735, -0.735, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_polar_arm4_x",
						instancename: "",
						matrix: {a: 0.742, b: -0.67, c: 0.67, d: 0.742, tx: -27.35, ty: -137.25},
						transform: [-27.35, -137.25, 1, 1, 0.735, -0.735, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.5], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_arm4_x",
						instancename: "",
						matrix: {a: 0.668, b: -0.744, c: 0.744, d: 0.668, tx: -28.1, ty: -132.2},
						transform: [-28.1, -132.2, 1, 1, 0.84, -0.84, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 11.9, ty: -116.05},
						transform: [11.9, -116.05, 1, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 0.979, b: -0.204, c: 0.204, d: 0.979, tx: 37.1, ty: -129.7},
						transform: [37.1, -129.7, 1, 1, 0.205, -0.205, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: 35.05, ty: -131.9},
						transform: [35.05, -131.9, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear2_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.947, b: -0.321, c: 0.321, d: 0.947, tx: -35.9, ty: -193.25},
						transform: [-35.9, -193.25, 1, 1, 0.326, -0.326, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.947, b: -0.321, c: 0.321, d: 0.947, tx: -35.9, ty: -193.25},
						transform: [-35.9, -193.25, 1, 1, 0.326, -0.326, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.5], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.986, b: 0.169, c: -0.169, d: 0.986, tx: -14.95, ty: -197.9},
						transform: [-14.95, -197.9, 1, 1, -0.17, 0.17, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.073, c: 0.073, d: 0.997, tx: -13.1, ty: -210.55},
						transform: [-13.1, -210.55, 1, 1, 0.073, -0.073, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 1, b: 0.025, c: -0.025, d: 1, tx: -0.15, ty: -212.45},
						transform: [-0.15, -212.45, 1, 1, -0.025, 0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.35, ty: -213.3},
						transform: [-1.35, -213.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_body2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.7, ty: -119.05},
						transform: [2.7, -119.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_polar_body2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.7, ty: -119.05},
						transform: [2.7, -119.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.5], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_body2_x",
						instancename: "",
						matrix: {a: 0.986, b: 0.169, c: -0.169, d: 0.986, tx: 13.25, ty: -118.2},
						transform: [13.25, -118.2, 1, 1, -0.17, 0.17, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.073, c: 0.073, d: 0.997, tx: -3.45, ty: -123.3},
						transform: [-3.45, -123.3, 1, 1, 0.073, -0.073, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0.025, c: -0.025, d: 1, tx: 3.4, ty: -123.95},
						transform: [3.4, -123.95, 1, 1, -0.025, 0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.75, ty: -124.1},
						transform: [1.75, -124.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "face1",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_face2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -52.05, ty: -143.6},
						transform: [-52.05, -143.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_polar_face2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -52.05, ty: -143.6},
						transform: [-52.05, -143.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.5], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_face2_x",
						instancename: "",
						matrix: {a: 1, b: 0.005, c: -0.005, d: 1, tx: -35.05, ty: -152.25},
						transform: [-35.05, -152.25, 1, 1, -0.005, 0.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.073, c: 0.073, d: 0.997, tx: -20.7, ty: -169.75},
						transform: [-20.7, -169.75, 1, 1, 0.073, -0.073, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 1, b: 0.025, c: -0.025, d: 1, tx: 2.1, ty: -173.15},
						transform: [2.1, -173.15, 1, 1, -0.025, 0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.15, ty: -172.9},
						transform: [-3.15, -172.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_ear3_x",
						instancename: "",
						matrix: {a: 0.889, b: -0.458, c: 0.458, d: 0.889, tx: -54.95, ty: -185.65},
						transform: [-54.95, -185.65, 1, 1, 0.476, -0.476, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_polar_ear3_x",
						instancename: "",
						matrix: {a: 0.889, b: -0.458, c: 0.458, d: 0.889, tx: -54.95, ty: -185.65},
						transform: [-54.95, -185.65, 1, 1, 0.476, -0.476, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.5], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.953, b: -0.301, c: 0.301, d: 0.953, tx: -30.8, ty: -192.45},
						transform: [-30.8, -192.45, 1, 1, 0.306, -0.306, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.073, c: 0.073, d: 0.997, tx: 13.9, ty: -206.7},
						transform: [13.9, -206.7, 1, 1, 0.073, -0.073, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 1, b: 0.025, c: -0.025, d: 1, tx: 37.35, ty: -208.8},
						transform: [37.35, -208.8, 1, 1, -0.025, 0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 31.25, ty: -210.5},
						transform: [31.25, -210.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "weapon",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_polar_weapon_stick2",
						instancename: "weapon",
						matrix: {a: -0.187, b: -0.982, c: 0.982, d: -0.187, tx: -57.75, ty: -104.4},
						transform: [-57.75, -104.4, 1, 1, 1.759, -1.759, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_polar_polar_weapon_stick2",
						instancename: "weapon",
						matrix: {a: -0.187, b: -0.982, c: 0.982, d: -0.187, tx: -57.75, ty: -104.4},
						transform: [-57.75, -104.4, 1, 1, 1.759, -1.759, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.5], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_polar_weapon_stick2",
						instancename: "weapon",
						matrix: {a: -0.363, b: -0.931, c: 0.931, d: -0.363, tx: -24.35, ty: -99.65},
						transform: [-24.35, -99.65, 1, 1, 1.943, -1.943, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_polar_weapon_stick",
						instancename: "weapon",
						matrix: {a: 0.726, b: 0.688, c: -0.588, d: 0.621, tx: 18.85, ty: -125.25},
						transform: [18.85, -125.25, 1, 0.855, -0.758, 0.758, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_polar_weapon_stick",
						instancename: "weapon",
						matrix: {a: 0.944, b: 0.329, c: -0.329, d: 0.944, tx: 51.25, ty: -128.3},
						transform: [51.25, -128.3, 1, 1, -0.335, 0.335, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_polar_weapon_stick",
						instancename: "weapon",
						matrix: {a: 0.903, b: 0.43, c: -0.43, d: 0.903, tx: 48.95, ty: -128.95},
						transform: [48.95, -128.95, 1, 1, -0.444, 0.444, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
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
						classname: "_polar_arm3_x",
						instancename: "",
						matrix: {a: 0.905, b: -0.426, c: 0.426, d: 0.905, tx: -31, ty: -109.25},
						transform: [-31, -109.25, 1, 1, 0.44, -0.44, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_polar_arm3_x",
						instancename: "",
						matrix: {a: 0.905, b: -0.426, c: 0.426, d: 0.905, tx: -31, ty: -109.25},
						transform: [-31, -109.25, 1, 1, 0.44, -0.44, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.5], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_arm3_x",
						instancename: "",
						matrix: {a: 0.824, b: -0.566, c: 0.566, d: 0.824, tx: 4.1, ty: -110.75},
						transform: [4.1, -110.75, 1, 1, 0.602, -0.602, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: 0.756, b: 0.11, c: -0.143, d: 0.99, tx: -11.85, ty: -125},
						transform: [-11.85, -125, 0.764, 1, -0.144, 0.144, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: 1, b: 0.008, c: -0.008, d: 1, tx: 19.85, ty: -132.8},
						transform: [19.85, -132.8, 1, 1, -0.008, 0.008, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.4, ty: -131.2},
						transform: [21.4, -131.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "hand1_x",
				keys: [
					{
						from: 0,
						to: 4,
					},
					{
						from: 5,
						to: 7,
					},
					{
						from: 8,
						to: 8,
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 50.05, ty: -137.95},
						transform: [50.05, -137.95, 1, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 0.979, b: -0.204, c: 0.204, d: 0.979, tx: 75.15, ty: -151.8},
						transform: [75.15, -151.8, 1, 1, 0.205, -0.205, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: 75.25, ty: -149.75},
						transform: [75.25, -149.75, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
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
					},
					{
						from: 5,
						to: 7,
					},
					{
						from: 8,
						to: 8,
					},
					{
						from: 9,
						to: 11,
					},
					{
						from: 12,
						to: 14,
					},
					{
						from: 15,
						to: 15,
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.037, d: 1, tx: 20.55, ty: -48.3},
						transform: [20.55, -48.3, 1, 1.001, 0.037, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.037, d: 1, tx: 20.55, ty: -48.3},
						transform: [20.55, -48.3, 1, 1.001, 0.037, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.5], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_polar_trail2_x",
						instancename: "",
						matrix: {a: 0.964, b: -0.266, c: 0.266, d: 0.964, tx: -187.9, ty: -74},
						transform: [-187.9, -74, 1, 1, 0.269, -0.269, NaN],
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
						classname: "_polar_trail2_x",
						instancename: "",
						matrix: {a: 0.815, b: -0.123, c: 0.202, d: 0.576, tx: -187.55, ty: -75.95},
						transform: [-187.55, -75.95, 0.824, 0.611, 0.337, -0.15, NaN],
						alpha: 0.92,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_polar_trail2_x",
						instancename: "",
						matrix: {a: 0.37, b: 0.033, c: 0.02, d: 0.332, tx: -184.4, ty: -79.85},
						transform: [-184.4, -79.85, 0.372, 0.332, 0.059, 0.089, NaN],
						alpha: 0.19,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 15,
					},
				]
			},
			{
				name: "attackbox",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_polar_punchbox",
						instancename: "attackbox",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -188.55, ty: -93.25},
						transform: [-188.55, -93.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"polar_attack_axe_2": {
		type: "movieclip",
		fps: 30,
		totalFrames: 16,
		labels: {},
		layers: [
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.069, d: 0.854, tx: -22.3, ty: -45.9},
						transform: [-22.3, -45.9, 1, 0.857, -0.081, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.069, d: 0.854, tx: -22.3, ty: -45.9},
						transform: [-22.3, -45.9, 1, 0.857, -0.081, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.069, d: 0.854, tx: -22.3, ty: -45.9},
						transform: [-22.3, -45.9, 1, 0.857, -0.081, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.081, d: 1, tx: -21.9, ty: -51.05},
						transform: [-21.9, -51.05, 1, 1.003, -0.081, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "tail1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.964, b: -0.267, c: 0.267, d: 0.964, tx: 56.3, ty: -74.25},
						transform: [56.3, -74.25, 1, 1, 0.27, -0.27, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.964, b: -0.267, c: 0.267, d: 0.964, tx: 56.3, ty: -74.25},
						transform: [56.3, -74.25, 1, 1, 0.27, -0.27, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.964, b: -0.267, c: 0.267, d: 0.964, tx: 56.3, ty: -74.25},
						transform: [56.3, -74.25, 1, 1, 0.27, -0.27, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.989, b: -0.148, c: 0.148, d: 0.989, tx: 51.9, ty: -63},
						transform: [51.9, -63, 1, 1, 0.149, -0.149, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.964, b: -0.267, c: 0.267, d: 0.964, tx: 48, ty: -67.4},
						transform: [48, -67.4, 1, 1, 0.27, -0.27, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 45.7, ty: -61.85},
						transform: [45.7, -61.85, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 45.35, ty: -63},
						transform: [45.35, -63, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_arm5_x",
						instancename: "",
						matrix: {a: -0.362, b: 0.932, c: -0.932, d: -0.362, tx: -40.85, ty: -123.3},
						transform: [-40.85, -123.3, 1, 1, -1.941, 1.941, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_arm5_x",
						instancename: "",
						matrix: {a: -0.362, b: 0.932, c: -0.932, d: -0.362, tx: -40.85, ty: -123.3},
						transform: [-40.85, -123.3, 1, 1, -1.941, 1.941, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_polar_arm5_x",
						instancename: "",
						matrix: {a: -0.362, b: 0.932, c: -0.932, d: -0.362, tx: -40.85, ty: -123.3},
						transform: [-40.85, -123.3, 1, 1, -1.941, 1.941, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_arm5_x",
						instancename: "",
						matrix: {a: -0.473, b: 0.881, c: -0.881, d: -0.473, tx: -32.8, ty: -138.15},
						transform: [-32.8, -138.15, 1, 1, -2.063, 2.063, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 0.99, b: -0.139, c: 0.139, d: 0.99, tx: -4.15, ty: -121.45},
						transform: [-4.15, -121.45, 1, 1, 0.139, -0.139, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 1, b: -0.026, c: 0.026, d: 1, tx: 36.8, ty: -131.35},
						transform: [36.8, -131.35, 1, 1, 0.026, -0.026, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: 35.05, ty: -131.9},
						transform: [35.05, -131.9, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.903, b: -0.43, c: 0.43, d: 0.903, tx: -63.05, ty: -161.75},
						transform: [-63.05, -161.75, 1, 1, 0.445, -0.445, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.903, b: -0.43, c: 0.43, d: 0.903, tx: -63.05, ty: -161.75},
						transform: [-63.05, -161.75, 1, 1, 0.445, -0.445, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.903, b: -0.43, c: 0.43, d: 0.903, tx: -63.05, ty: -161.75},
						transform: [-63.05, -161.75, 1, 1, 0.445, -0.445, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.948, b: -0.317, c: 0.317, d: 0.948, tx: -45.55, ty: -177.1},
						transform: [-45.55, -177.1, 1, 1, 0.323, -0.323, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.964, b: -0.267, c: 0.267, d: 0.964, tx: -41.05, ty: -199.75},
						transform: [-41.05, -199.75, 1, 1, 0.27, -0.27, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 4.05, ty: -213.5},
						transform: [4.05, -213.5, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.35, ty: -213.3},
						transform: [-1.35, -213.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_body3_x",
						instancename: "",
						matrix: {a: 0.962, b: 0, c: 0, d: 0.953, tx: 8.35, ty: -115.85},
						transform: [8.35, -115.85, 0.962, 0.953, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_body3_x",
						instancename: "",
						matrix: {a: 0.962, b: 0, c: 0, d: 0.953, tx: 8.35, ty: -115.85},
						transform: [8.35, -115.85, 0.962, 0.953, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_polar_body3_x",
						instancename: "",
						matrix: {a: 0.962, b: 0, c: 0, d: 0.953, tx: 8.35, ty: -115.85},
						transform: [8.35, -115.85, 0.962, 0.953, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_body3_x",
						instancename: "",
						matrix: {a: 0.955, b: 0.117, c: -0.116, d: 0.946, tx: 14.8, ty: -116.65},
						transform: [14.8, -116.65, 0.962, 0.953, -0.122, 0.122, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1.031, b: -0.285, c: 0.259, d: 0.936, tx: -11.9, ty: -118.85},
						transform: [-11.9, -118.85, 1.069, 0.971, 0.27, -0.27, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 3.45, ty: -123.85},
						transform: [3.45, -123.85, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.75, ty: -124.1},
						transform: [1.75, -124.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "face1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_face3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -57.05, ty: -133.7},
						transform: [-57.05, -133.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_face3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -57.05, ty: -133.7},
						transform: [-57.05, -133.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_polar_face3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -57.05, ty: -133.7},
						transform: [-57.05, -133.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_face3_x",
						instancename: "",
						matrix: {a: 0.977, b: 0.12, c: -0.121, d: 0.993, tx: -49.8, ty: -142.3},
						transform: [-49.8, -142.3, 0.984, 1, -0.122, 0.122, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.079, c: 0.079, d: 0.997, tx: -39.25, ty: -161.35},
						transform: [-39.25, -161.35, 1, 1, 0.079, -0.079, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -4.25, ty: -173.65},
						transform: [-4.25, -173.65, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.15, ty: -172.9},
						transform: [-3.15, -172.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_ear3_x",
						instancename: "",
						matrix: {a: 0.914, b: 0.405, c: -0.405, d: 0.914, tx: -25.55, ty: -164.3},
						transform: [-25.55, -164.3, 1, 1, -0.417, 0.417, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_ear3_x",
						instancename: "",
						matrix: {a: 0.914, b: 0.405, c: -0.405, d: 0.914, tx: -25.55, ty: -164.3},
						transform: [-25.55, -164.3, 1, 1, -0.417, 0.417, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_polar_ear3_x",
						instancename: "",
						matrix: {a: 0.914, b: 0.405, c: -0.405, d: 0.914, tx: -25.55, ty: -164.3},
						transform: [-25.55, -164.3, 1, 1, -0.417, 0.417, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_ear3_x",
						instancename: "",
						matrix: {a: 0.858, b: 0.513, c: -0.513, d: 0.858, tx: -9.55, ty: -174},
						transform: [-9.55, -174, 1, 1, -0.539, 0.539, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.964, b: -0.267, c: 0.267, d: 0.964, tx: -8.3, ty: -202.35},
						transform: [-8.3, -202.35, 1, 1, 0.27, -0.27, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 33.5, ty: -208.3},
						transform: [33.5, -208.3, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 31.25, ty: -210.5},
						transform: [31.25, -210.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "weapon",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_polar_weapon_stick3",
						instancename: "weapon",
						matrix: {a: -0.383, b: -0.923, c: 0.923, d: -0.383, tx: -62.5, ty: -69.2},
						transform: [-62.5, -69.2, 1, 1, 1.964, -1.964, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_polar_weapon_stick3",
						instancename: "weapon",
						matrix: {a: -0.383, b: -0.923, c: 0.923, d: -0.383, tx: -62.5, ty: -69.2},
						transform: [-62.5, -69.2, 1, 1, 1.964, -1.964, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_polar_polar_weapon_stick3",
						instancename: "weapon",
						matrix: {a: -0.383, b: -0.923, c: 0.923, d: -0.383, tx: -62.5, ty: -69.2},
						transform: [-62.5, -69.2, 1, 1, 1.964, -1.964, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_polar_weapon_stick3",
						instancename: "weapon",
						matrix: {a: 0.051, b: -0.999, c: 0.999, d: 0.051, tx: -16.45, ty: -87},
						transform: [-16.45, -87, 1, 1, 1.52, -1.52, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_polar_weapon_stick",
						instancename: "weapon",
						matrix: {a: 0.989, b: -0.145, c: 0.145, d: 0.989, tx: 17.9, ty: -120.1},
						transform: [17.9, -120.1, 1, 1, 0.146, -0.146, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_polar_weapon_stick",
						instancename: "weapon",
						matrix: {a: 0.871, b: 0.491, c: -0.491, d: 0.871, tx: 50.45, ty: -127.4},
						transform: [50.45, -127.4, 1, 1, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_polar_weapon_stick",
						instancename: "weapon",
						matrix: {a: 0.903, b: 0.43, c: -0.43, d: 0.903, tx: 48.95, ty: -128.95},
						transform: [48.95, -128.95, 1, 1, -0.444, 0.444, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: -0.377, b: 0.853, c: 0.915, d: 0.404, tx: -12.4, ty: -101.9},
						transform: [-12.4, -101.9, 0.933, 1, 1.155, 1.987, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: -0.377, b: 0.853, c: 0.915, d: 0.404, tx: -12.4, ty: -101.9},
						transform: [-12.4, -101.9, 0.933, 1, 1.155, 1.987, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: -0.377, b: 0.853, c: 0.915, d: 0.404, tx: -12.4, ty: -101.9},
						transform: [-12.4, -101.9, 0.933, 1, 1.155, 1.987, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: -0.178, b: 0.726, c: 0.971, d: 0.239, tx: 9.15, ty: -104},
						transform: [9.15, -104, 0.747, 1, 1.33, 1.812, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: 0.781, b: 0.003, c: -0.004, d: 1, tx: -15.75, ty: -113.4},
						transform: [-15.75, -113.4, 0.781, 1, -0.004, 0.004, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: 0.972, b: 0.021, c: -0.022, d: 1, tx: 21.3, ty: -130.2},
						transform: [21.3, -130.2, 0.973, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.4, ty: -131.2},
						transform: [21.4, -131.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "hand1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_hand2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -59.5, ty: -62.45},
						transform: [-59.5, -62.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_hand2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -59.5, ty: -62.45},
						transform: [-59.5, -62.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_polar_hand2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -59.5, ty: -62.45},
						transform: [-59.5, -62.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_hand2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -61.3, ty: -79.15},
						transform: [-61.3, -79.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 0.917, b: -0.398, c: 0.398, d: 0.917, tx: 36.65, ty: -139.75},
						transform: [36.65, -139.75, 1, 1, 0.409, -0.409, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 1, b: -0.026, c: 0.026, d: 1, tx: 78.15, ty: -146.3},
						transform: [78.15, -146.3, 1, 1, 0.026, -0.026, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: 75.25, ty: -149.75},
						transform: [75.25, -149.75, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.073, d: 0.89, tx: 23.35, ty: -44.2},
						transform: [23.35, -44.2, 1, 0.893, -0.082, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 4,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.073, d: 0.89, tx: 23.35, ty: -44.2},
						transform: [23.35, -44.2, 1, 0.893, -0.082, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.073, d: 0.89, tx: 23.35, ty: -44.2},
						transform: [23.35, -44.2, 1, 0.893, -0.082, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.082, d: 1, tx: 23.7, ty: -48.3},
						transform: [23.7, -48.3, 1, 1.003, -0.082, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_polar_trail3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -157.45, ty: -62.1},
						transform: [-157.45, -62.1, 1, 1, 0, 0, 0],
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
						classname: "_polar_trail3_x",
						instancename: "",
						matrix: {a: 0.741, b: -0.155, c: 0.03, d: 0.792, tx: -158.5, ty: -60.1},
						transform: [-158.5, -60.1, 0.757, 0.793, 0.038, -0.206, NaN],
						alpha: 0.55,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_polar_trail3_x",
						instancename: "",
						matrix: {a: 0.379, b: -0.199, c: 0.022, d: 0.575, tx: -156.1, ty: -57.9},
						transform: [-156.1, -57.9, 0.428, 0.576, 0.038, -0.484, NaN],
						alpha: 0.29,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 14,
					},
					{
						from: 15,
						to: 15,
					},
				]
			},
			{
				name: "attackbox",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_polar_punchbox",
						instancename: "attackbox",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -170.6, ty: -53.3},
						transform: [-170.6, -53.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"polar_attack_axe_empty": {
		type: "movieclip",
		fps: 30,
		totalFrames: 16,
		labels: {},
		layers: [
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.915, tx: -22.95, ty: -48.05},
						transform: [-22.95, -48.05, 1, 0.915, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 7,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.915, tx: -22.95, ty: -48.05},
						transform: [-22.95, -48.05, 1, 0.915, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.5], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.246, 0.363], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "tail1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 44.7, ty: -61.9},
						transform: [44.7, -61.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 8,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 44.7, ty: -61.9},
						transform: [44.7, -61.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.5], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.104, c: 0.104, d: 0.995, tx: 45.45, ty: -67},
						transform: [45.45, -67, 1, 1, 0.104, -0.104, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.246, 0.363], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 45.65, ty: -63.5},
						transform: [45.65, -63.5, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 45.6, ty: -65.4},
						transform: [45.6, -65.4, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
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
						classname: "_polar_arm4_x",
						instancename: "",
						matrix: {a: 0.742, b: -0.67, c: 0.67, d: 0.742, tx: -27.35, ty: -137.25},
						transform: [-27.35, -137.25, 1, 1, 0.735, -0.735, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 7,
						classname: "_polar_arm4_x",
						instancename: "",
						matrix: {a: 0.742, b: -0.67, c: 0.67, d: 0.742, tx: -27.35, ty: -137.25},
						transform: [-27.35, -137.25, 1, 1, 0.735, -0.735, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.5], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_arm4_x",
						instancename: "",
						matrix: {a: 0.668, b: -0.744, c: 0.744, d: 0.668, tx: -28.1, ty: -132.2},
						transform: [-28.1, -132.2, 1, 1, 0.84, -0.84, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.104, c: 0.104, d: 0.995, tx: -14.1, ty: -212.3},
						transform: [-14.1, -212.3, 1, 1, 0.104, -0.104, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.246, 0.363], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: -6.75, ty: -212.25},
						transform: [-6.75, -212.25, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.2, ty: -211.75},
						transform: [-13.2, -211.75, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear2_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.947, b: -0.321, c: 0.321, d: 0.947, tx: -35.9, ty: -193.25},
						transform: [-35.9, -193.25, 1, 1, 0.326, -0.326, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 7,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.947, b: -0.321, c: 0.321, d: 0.947, tx: -35.9, ty: -193.25},
						transform: [-35.9, -193.25, 1, 1, 0.326, -0.326, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.5], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.838, b: -0.545, c: 0.545, d: 0.838, tx: -19.85, ty: -198.4},
						transform: [-19.85, -198.4, 1, 1, 0.576, -0.576, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.285, b: -0.958, c: 0.958, d: 0.285, tx: -32.25, ty: -133.65},
						transform: [-32.25, -133.65, 1, 1, 1.282, -1.282, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.246, 0.363], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.987, b: 0.163, c: -0.163, d: 0.987, tx: -36.6, ty: -137.4},
						transform: [-36.6, -137.4, 1, 1, -0.164, 0.164, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -39.8, ty: -135.7},
						transform: [-39.8, -135.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_polar_body2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.7, ty: -119.05},
						transform: [2.7, -119.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 7,
						classname: "_polar_body2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.7, ty: -119.05},
						transform: [2.7, -119.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.5], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_body2_x",
						instancename: "",
						matrix: {a: 0.986, b: 0.169, c: -0.169, d: 0.986, tx: 13.25, ty: -118.2},
						transform: [13.25, -118.2, 1, 1, -0.17, 0.17, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.104, c: 0.104, d: 0.995, tx: -4.2, ty: -123.25},
						transform: [-4.2, -123.25, 1, 1, 0.104, -0.104, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.246, 0.363], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 1.55, ty: -124.2},
						transform: [1.55, -124.2, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -1.1, ty: -124.15},
						transform: [-1.1, -124.15, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "face1",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_polar_face2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -52.05, ty: -143.6},
						transform: [-52.05, -143.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 7,
						classname: "_polar_face2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -52.05, ty: -143.6},
						transform: [-52.05, -143.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.5], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_face2_x",
						instancename: "",
						matrix: {a: 1, b: 0.005, c: -0.005, d: 1, tx: -35.05, ty: -152.25},
						transform: [-35.05, -152.25, 1, 1, -0.005, 0.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.432, b: -0.902, c: 0.902, d: 0.432, tx: 15.55, ty: -117.95},
						transform: [15.55, -117.95, 1, 1, 1.124, -1.124, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.246, 0.363], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.993, b: 0.121, c: -0.121, d: 0.993, tx: 29.65, ty: -129.9},
						transform: [29.65, -129.9, 1, 1, -0.121, 0.121, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 27.25, ty: -128.9},
						transform: [27.25, -128.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_polar_ear3_x",
						instancename: "",
						matrix: {a: 0.889, b: -0.458, c: 0.458, d: 0.889, tx: -54.95, ty: -185.65},
						transform: [-54.95, -185.65, 1, 1, 0.476, -0.476, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 7,
						classname: "_polar_ear3_x",
						instancename: "",
						matrix: {a: 0.889, b: -0.458, c: 0.458, d: 0.889, tx: -54.95, ty: -185.65},
						transform: [-54.95, -185.65, 1, 1, 0.476, -0.476, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.5], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.916, b: 0.401, c: -0.401, d: 0.916, tx: -17.35, ty: -195.05},
						transform: [-17.35, -195.05, 1, 1, -0.413, 0.413, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.833, b: -0.087, c: 0.104, d: 0.995, tx: -26.5, ty: -170.65},
						transform: [-26.5, -170.65, 0.838, 1, 0.104, -0.104, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.246, 0.363], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: -9.15, ty: -173.15},
						transform: [-9.15, -173.15, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.95, ty: -172.6},
						transform: [-13.95, -172.6, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "weapon",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_polar_polar_weapon_stick2",
						instancename: "weapon",
						matrix: {a: -0.187, b: -0.982, c: 0.982, d: -0.187, tx: -57.75, ty: -104.4},
						transform: [-57.75, -104.4, 1, 1, 1.759, -1.759, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 8,
						classname: "_polar_polar_weapon_stick2",
						instancename: "weapon",
						matrix: {a: -0.187, b: -0.982, c: 0.982, d: -0.187, tx: -57.75, ty: -104.4},
						transform: [-57.75, -104.4, 1, 1, 1.759, -1.759, NaN],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.849, b: -0.529, c: 0.529, d: 0.849, tx: 6.85, ty: -213.3},
						transform: [6.85, -213.3, 1, 1, 0.557, -0.557, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.4], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 30.65, ty: -209.55},
						transform: [30.65, -209.55, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 24.3, ty: -210.65},
						transform: [24.3, -210.65, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_polar_arm3_x",
						instancename: "",
						matrix: {a: 0.905, b: -0.426, c: 0.426, d: 0.905, tx: -31, ty: -109.25},
						transform: [-31, -109.25, 1, 1, 0.44, -0.44, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 7,
						classname: "_polar_arm3_x",
						instancename: "",
						matrix: {a: 0.905, b: -0.426, c: 0.426, d: 0.905, tx: -31, ty: -109.25},
						transform: [-31, -109.25, 1, 1, 0.44, -0.44, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.5], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_arm3_x",
						instancename: "",
						matrix: {a: 0.824, b: -0.566, c: 0.566, d: 0.824, tx: 4.1, ty: -110.75},
						transform: [4.1, -110.75, 1, 1, 0.602, -0.602, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.053, d: 1, tx: 21, ty: -48.3},
						transform: [21, -48.3, 1, 1.001, 0.053, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.246, 0.363], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "hand1_x",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 7,
					},
					{
						from: 8,
						to: 15,
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
						to: 7,
					},
					{
						from: 8,
						to: 15,
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.037, d: 1, tx: 20.55, ty: -48.3},
						transform: [20.55, -48.3, 1, 1.001, 0.037, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 7,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.037, d: 1, tx: 20.55, ty: -48.3},
						transform: [20.55, -48.3, 1, 1.001, 0.037, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.5], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 15,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_polar_trail2_x",
						instancename: "",
						matrix: {a: 0.964, b: -0.266, c: 0.266, d: 0.964, tx: -187.9, ty: -74},
						transform: [-187.9, -74, 1, 1, 0.269, -0.269, NaN],
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
						classname: "_polar_trail2_x",
						instancename: "",
						matrix: {a: 0.815, b: -0.123, c: 0.202, d: 0.576, tx: -187.55, ty: -75.95},
						transform: [-187.55, -75.95, 0.824, 0.611, 0.337, -0.15, NaN],
						alpha: 0.92,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 15,
					},
				]
			},
			{
				name: "attackbox",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_polar_punchbox",
						instancename: "attackbox",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -191.65, ty: -89.2},
						transform: [-191.65, -89.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"polar_hurt_axe": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {},
		layers: [
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 0.903, b: 0.429, c: -0.429, d: 0.903, tx: -27.7, ty: -55.05},
						transform: [-27.7, -55.05, 1, 1, -0.443, 0.443, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 0.689, b: 0.724, c: -0.724, d: 0.689, tx: -36.8, ty: -63.8},
						transform: [-36.8, -63.8, 1, 1, -0.81, 0.81, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 0.654, b: 0.756, c: -0.756, d: 0.654, tx: -35.25, ty: -79.9},
						transform: [-35.25, -79.9, 1, 1, -0.857, 0.857, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.146, c: -0.146, d: 0.989, tx: -21.85, ty: -53.9},
						transform: [-21.85, -53.9, 1, 1, -0.147, 0.147, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0.021, c: -0.021, d: 1, tx: -20.45, ty: -52.05},
						transform: [-20.45, -52.05, 1, 1, -0.021, 0.021, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.089, d: 0.841, tx: -26.05, ty: -45.45},
						transform: [-26.05, -45.45, 1, 0.846, 0.106, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "tail1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 44.05, ty: -59.3},
						transform: [44.05, -59.3, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 45.45, ty: -59.05},
						transform: [45.45, -59.05, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.98, b: 0.197, c: -0.197, d: 0.98, tx: 46.6, ty: -71.25},
						transform: [46.6, -71.25, 1, 1, -0.198, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 44.05, ty: -59.3},
						transform: [44.05, -59.3, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.993, b: 0.121, c: -0.121, d: 0.993, tx: 44.05, ty: -60.1},
						transform: [44.05, -60.1, 1, 1, -0.122, 0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.031, c: 0.031, d: 0.999, tx: 43.95, ty: -56.65},
						transform: [43.95, -56.65, 1, 1, 0.031, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 45.35, ty: -63},
						transform: [45.35, -63, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.056, c: -0.056, d: 0.998, tx: 44.25, ty: -128.95},
						transform: [44.25, -128.95, 1, 1, -0.056, 0.056, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 0.982, b: -0.188, c: 0.188, d: 0.982, tx: 50.65, ty: -141},
						transform: [50.65, -141, 1, 1, 0.189, -0.189, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 0.996, b: -0.091, c: 0.091, d: 0.996, tx: 55.8, ty: -152.75},
						transform: [55.8, -152.75, 1, 1, 0.091, -0.091, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.056, c: -0.056, d: 0.998, tx: 44.25, ty: -128.95},
						transform: [44.25, -128.95, 1, 1, -0.056, 0.056, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 1, b: 0.026, c: -0.026, d: 1, tx: 42.2, ty: -129.75},
						transform: [42.2, -129.75, 1, 1, -0.026, 0.026, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.169, c: 0.169, d: 0.986, tx: 27.7, ty: -123.1},
						transform: [27.7, -123.1, 1, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: 35.05, ty: -131.9},
						transform: [35.05, -131.9, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear2_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 20.6, ty: -214.95},
						transform: [20.6, -214.95, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 26.4, ty: -213.35},
						transform: [26.4, -213.35, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.98, b: 0.197, c: -0.197, d: 0.98, tx: 38, ty: -224.95},
						transform: [38, -224.95, 1, 1, -0.198, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 20.6, ty: -214.95},
						transform: [20.6, -214.95, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.993, b: 0.121, c: -0.121, d: 0.993, tx: 15.95, ty: -214.95},
						transform: [15.95, -214.95, 1, 1, -0.122, 0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.031, c: 0.031, d: 0.999, tx: -5.6, ty: -206.15},
						transform: [-5.6, -206.15, 1, 1, 0.031, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.35, ty: -213.3},
						transform: [-1.35, -213.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.791, b: -0.611, c: 0.611, d: 0.791, tx: -23.45, ty: -120},
						transform: [-23.45, -120, 1, 1, 0.658, -0.658, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.791, b: -0.611, c: 0.611, d: 0.791, tx: -17.05, ty: -131.8},
						transform: [-17.05, -131.8, 1, 1, 0.658, -0.658, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.047, c: -0.047, d: 0.999, tx: -21.85, ty: -153.85},
						transform: [-21.85, -153.85, 1, 1, -0.047, 0.047, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.791, b: -0.611, c: 0.611, d: 0.791, tx: -18.6, ty: -120},
						transform: [-18.6, -120, 1, 1, 0.658, -0.658, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
					},
					{
						from: 15,
						to: 18,
					},
				]
			},
			{
				name: "body1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 10.15, ty: -126.3},
						transform: [10.15, -126.3, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 11.6, ty: -126},
						transform: [11.6, -126, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.98, b: 0.197, c: -0.197, d: 0.98, tx: 15.95, ty: -139.75},
						transform: [15.95, -139.75, 1, 1, -0.198, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 10.15, ty: -126.3},
						transform: [10.15, -126.3, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.993, b: 0.121, c: -0.121, d: 0.993, tx: 8.2, ty: -126.05},
						transform: [8.2, -126.05, 1, 1, -0.122, 0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1.016, b: -0.031, c: 0.029, d: 0.962, tx: -1.35, ty: -119.65},
						transform: [-1.35, -119.65, 1.016, 0.963, 0.031, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.75, ty: -124.1},
						transform: [1.75, -124.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "face1",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_face_hurt_axe",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 11.75, ty: -176.45},
						transform: [11.75, -176.45, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_face_hurt_axe",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 14.4, ty: -178.65},
						transform: [14.4, -178.65, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_face_hurt_axe",
						instancename: "",
						matrix: {a: 0.98, b: 0.197, c: -0.197, d: 0.98, tx: 21.25, ty: -194},
						transform: [21.25, -194, 1, 1, -0.198, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_face_hurt_axe",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 11.75, ty: -176.45},
						transform: [11.75, -176.45, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.993, b: 0.121, c: -0.121, d: 0.993, tx: 9.25, ty: -176.3},
						transform: [9.25, -176.3, 1, 1, -0.122, 0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.031, c: 0.031, d: 0.999, tx: -10.85, ty: -165.75},
						transform: [-10.85, -165.75, 1, 1, 0.031, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.15, ty: -172.9},
						transform: [-3.15, -172.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 52.4, ty: -207.25},
						transform: [52.4, -207.25, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 57.45, ty: -202.1},
						transform: [57.45, -202.1, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.854, b: 0.52, c: -0.52, d: 0.854, tx: 66.65, ty: -211},
						transform: [66.65, -211, 1, 1, -0.547, 0.547, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 52.4, ty: -207.25},
						transform: [52.4, -207.25, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.993, b: 0.121, c: -0.121, d: 0.993, tx: 47.95, ty: -208.2},
						transform: [47.95, -208.2, 1, 1, -0.122, 0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.031, c: 0.031, d: 0.999, tx: 22.15, ty: -202.9},
						transform: [22.15, -202.9, 1, 1, 0.031, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 31.25, ty: -210.5},
						transform: [31.25, -210.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "weapon",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_polar_weapon_stick",
						instancename: "weapon",
						matrix: {a: 0.828, b: 0.561, c: -0.561, d: 0.828, tx: 57.55, ty: -123.95},
						transform: [57.55, -123.95, 1, 1, -0.596, 0.596, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_polar_weapon_stick",
						instancename: "weapon",
						matrix: {a: 0.58, b: 0.814, c: -0.814, d: 0.58, tx: 53.85, ty: -151.3},
						transform: [53.85, -151.3, 1, 1, -0.951, 0.951, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_polar_weapon_stick",
						instancename: "weapon",
						matrix: {a: 0.364, b: 0.931, c: -0.931, d: 0.364, tx: 61.7, ty: -167.25},
						transform: [61.7, -167.25, 1, 1, -1.198, 1.198, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_polar_weapon_stick",
						instancename: "weapon",
						matrix: {a: 0.828, b: 0.561, c: -0.561, d: 0.828, tx: 57.55, ty: -123.95},
						transform: [57.55, -123.95, 1, 1, -0.596, 0.596, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_polar_weapon_stick",
						instancename: "weapon",
						matrix: {a: 0.844, b: 0.536, c: -0.536, d: 0.844, tx: 55.6, ty: -125.15},
						transform: [55.6, -125.15, 1, 1, -0.566, 0.566, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_polar_weapon_stick",
						instancename: "weapon",
						matrix: {a: 0.93, b: 0.366, c: -0.366, d: 0.93, tx: 41.95, ty: -121.45},
						transform: [41.95, -121.45, 1, 1, -0.375, 0.375, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_polar_weapon_stick",
						instancename: "weapon",
						matrix: {a: 0.903, b: 0.43, c: -0.43, d: 0.903, tx: 48.95, ty: -128.95},
						transform: [48.95, -128.95, 1, 1, -0.444, 0.444, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_arm54_x",
						instancename: "",
						matrix: {a: 0.791, b: -0.611, c: 0.611, d: 0.791, tx: -49.7, ty: -141},
						transform: [-49.7, -141, 1, 1, 0.658, -0.658, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_arm54_x",
						instancename: "",
						matrix: {a: 0.791, b: -0.611, c: 0.611, d: 0.791, tx: -43.3, ty: -152.8},
						transform: [-43.3, -152.8, 1, 1, 0.658, -0.658, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_arm54_x",
						instancename: "",
						matrix: {a: 0.975, b: -0.221, c: 0.221, d: 0.975, tx: -31.75, ty: -188.45},
						transform: [-31.75, -188.45, 1, 1, 0.223, -0.223, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_arm54_x",
						instancename: "",
						matrix: {a: 0.791, b: -0.611, c: 0.611, d: 0.791, tx: -48.2, ty: -143.1},
						transform: [-48.2, -143.1, 1, 1, 0.658, -0.658, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: 0.729, b: -0.019, c: -0.296, d: 1.008, tx: -0.6, ty: -137.2},
						transform: [-0.6, -137.2, 0.729, 1.051, -0.286, -0.026, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: 0.947, b: -0.029, c: 0.031, d: 0.999, tx: 15.5, ty: -123.95},
						transform: [15.5, -123.95, 0.948, 1, 0.031, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.4, ty: -131.2},
						transform: [21.4, -131.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
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
					{
						from: 12,
						to: 12,
						classname: "_polar_parche1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -33.9, ty: -140.75},
						transform: [-33.9, -140.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_polar_parche1_x",
						instancename: "",
						matrix: {a: 0.78, b: 0, c: -0.096, d: 1, tx: -30.05, ty: -138.3},
						transform: [-30.05, -138.3, 0.78, 1.005, -0.095, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
					},
				]
			},
			{
				name: "hand1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.056, c: -0.056, d: 0.998, tx: 86.7, ty: -140.55},
						transform: [86.7, -140.55, 1, 1, -0.056, 0.056, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 0.982, b: -0.188, c: 0.188, d: 0.982, tx: 89.15, ty: -162.1},
						transform: [89.15, -162.1, 1, 1, 0.189, -0.189, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 0.996, b: -0.091, c: 0.091, d: 0.996, tx: 96.15, ty: -169.95},
						transform: [96.15, -169.95, 1, 1, 0.091, -0.091, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.056, c: -0.056, d: 0.998, tx: 86.7, ty: -140.55},
						transform: [86.7, -140.55, 1, 1, -0.056, 0.056, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 1, b: 0.026, c: -0.026, d: 1, tx: 84.25, ty: -142.6},
						transform: [84.25, -142.6, 1, 1, -0.026, 0.026, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.169, c: 0.169, d: 0.986, tx: 66.45, ty: -143.95},
						transform: [66.45, -143.95, 1, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: 75.25, ty: -149.75},
						transform: [75.25, -149.75, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 0.948, b: 0.317, c: -0.392, d: 0.88, tx: 22.85, ty: -50.4},
						transform: [22.85, -50.4, 1, 0.963, -0.419, 0.323, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 0.809, b: 0.587, c: -0.547, d: 0.753, tx: 22.3, ty: -65.95},
						transform: [22.3, -65.95, 1, 0.931, -0.628, 0.628, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.09, d: 0.891, tx: 18.6, ty: -44.25},
						transform: [18.6, -44.25, 1, 0.896, 0.101, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"polar_idle_saw": {
		type: "movieclip",
		fps: 30,
		totalFrames: 29,
		labels: {loop: {from:1, to:27}, },
		layers: [
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 27,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.969, tx: -22.95, ty: -49.95},
						transform: [-22.95, -49.95, 1, 0.969, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "tail1_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: 46.45, ty: -72.1},
						transform: [46.45, -72.1, 1, 1, 0.187, -0.187, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 27,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.996, b: -0.091, c: 0.091, d: 0.996, tx: 47.95, ty: -74.75},
						transform: [47.95, -74.75, 1, 1, 0.091, -0.091, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: 46.45, ty: -72.1},
						transform: [46.45, -72.1, 1, 1, 0.187, -0.187, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear2_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: -31.45, ty: -209.25},
						transform: [-31.45, -209.25, 1, 1, 0.187, -0.187, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 27,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.967, b: -0.253, c: 0.253, d: 0.967, tx: -37.35, ty: -206.5},
						transform: [-37.35, -206.5, 1, 1, 0.256, -0.256, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: -31.45, ty: -209.25},
						transform: [-31.45, -209.25, 1, 1, 0.187, -0.187, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "army1_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.899, b: 0.438, c: 0.438, d: -0.899, tx: -48.75, ty: -133.15},
						transform: [-48.75, -133.15, 1, 1, 2.688, 0.454, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 27,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.862, b: 0.508, c: 0.508, d: -0.862, tx: -48.45, ty: -133.7},
						transform: [-48.45, -133.7, 1, 1, 2.609, 0.532, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.899, b: 0.438, c: 0.438, d: -0.899, tx: -48.75, ty: -133.15},
						transform: [-48.75, -133.15, 1, 1, 2.688, 0.454, NaN],
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
						to: 13,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: -7.7, ty: -124.05},
						transform: [-7.7, -124.05, 1, 1, 0.187, -0.187, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 27,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.967, b: -0.253, c: 0.25, d: 0.955, tx: -9.9, ty: -124.05},
						transform: [-9.9, -124.05, 1, 0.987, 0.256, -0.256, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: -7.7, ty: -124.05},
						transform: [-7.7, -124.05, 1, 1, 0.187, -0.187, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "face1",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: -26.9, ty: -170.35},
						transform: [-26.9, -170.35, 1, 1, 0.187, -0.187, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 27,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 0.967, b: -0.253, c: 0.253, d: 0.967, tx: -32.5, ty: -168.3},
						transform: [-32.5, -168.3, 1, 1, 0.256, -0.256, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: -26.9, ty: -170.35},
						transform: [-26.9, -170.35, 1, 1, 0.187, -0.187, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear1_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: 5.85, ty: -213.2},
						transform: [5.85, -213.2, 1, 1, 0.187, -0.187, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 27,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.967, b: -0.253, c: 0.253, d: 0.967, tx: -3.4, ty: -211.8},
						transform: [-3.4, -211.8, 1, 1, 0.256, -0.256, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: 5.85, ty: -213.2},
						transform: [5.85, -213.2, 1, 1, 0.187, -0.187, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg5_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 27,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.041, tx: 21.95, ty: -49.95},
						transform: [21.95, -49.95, 1, 1.041, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm544_x",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_polar_arm544_x",
						instancename: "",
						matrix: {a: 0.991, b: -0.134, c: 0.134, d: 0.991, tx: -64.95, ty: -112.3},
						transform: [-64.95, -112.3, 1, 1, 0.135, -0.135, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 27,
						classname: "_polar_arm544_x",
						instancename: "",
						matrix: {a: 0.99, b: -0.142, c: 0.142, d: 0.99, tx: -66.2, ty: -114.4},
						transform: [-66.2, -114.4, 1, 1, 0.143, -0.143, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_polar_arm544_x",
						instancename: "",
						matrix: {a: 0.991, b: -0.134, c: 0.134, d: 0.991, tx: -64.95, ty: -112.3},
						transform: [-64.95, -112.3, 1, 1, 0.135, -0.135, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm8_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_polar_arm888_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 27.3, ty: -150.2},
						transform: [27.3, -150.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 27,
						classname: "_polar_arm888_x",
						instancename: "",
						matrix: {a: 0.978, b: -0.21, c: 0.21, d: 0.978, tx: 23.5, ty: -150.2},
						transform: [23.5, -150.2, 1, 1, 0.212, -0.212, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_polar_arm888_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 27.3, ty: -150.2},
						transform: [27.3, -150.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "saw4hand_x",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_polar_saw4hand_x",
						instancename: "",
						matrix: {a: 0.991, b: -0.134, c: 0.134, d: 0.991, tx: -21, ty: -111.4},
						transform: [-21, -111.4, 1, 1, 0.135, -0.135, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 27,
						classname: "_polar_saw4hand_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.219, c: 0.219, d: 0.976, tx: -22.25, ty: -113.85},
						transform: [-22.25, -113.85, 1, 1, 0.221, -0.221, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_polar_saw4hand_x",
						instancename: "",
						matrix: {a: 0.991, b: -0.134, c: 0.134, d: 0.991, tx: -21, ty: -111.4},
						transform: [-21, -111.4, 1, 1, 0.135, -0.135, NaN],
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
						actions: function(self){self.getChildByName("face").gotoAndPlay(1);},
					},
					{
						from: 1,
						to: 27,
					},
					{
						from: 28,
						to: 28,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"polar_attack_saw": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {},
		layers: [
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.109, d: 0.857, tx: -26.75, ty: -46},
						transform: [-26.75, -46, 1, 0.864, 0.126, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.109, d: 0.857, tx: -26.75, ty: -46},
						transform: [-26.75, -46, 1, 0.864, 0.126, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.537, 0], [0.829, 0.397], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.109, d: 0.857, tx: -26.75, ty: -46},
						transform: [-26.75, -46, 1, 0.864, 0.126, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.4], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.03, tx: -22.95, ty: -52.1},
						transform: [-22.95, -52.1, 1, 1.03, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.55, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "tail1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.96, b: -0.279, c: 0.279, d: 0.96, tx: 49.65, ty: -66.15},
						transform: [49.65, -66.15, 1, 1, 0.283, -0.283, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.96, b: -0.279, c: 0.279, d: 0.96, tx: 49.65, ty: -66.15},
						transform: [49.65, -66.15, 1, 1, 0.283, -0.283, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.537, 0], [0.829, 0.397], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.199, d: 0.98, tx: 48.4, ty: -63.65},
						transform: [48.4, -63.65, 1, 1, 0.2, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.95, b: -0.312, c: 0.313, d: 0.95, tx: 46.45, ty: -75.2},
						transform: [46.45, -75.2, 1, 1, 0.318, -0.318, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.4], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.988, b: -0.152, c: 0.152, d: 0.988, tx: 46.6, ty: -70.85},
						transform: [46.6, -70.85, 1, 1, 0.153, -0.153, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.55, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: 46.45, ty: -72.1},
						transform: [46.45, -72.1, 1, 1, 0.187, -0.187, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear2_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.96, b: -0.279, c: 0.279, d: 0.96, tx: -53.1, ty: -182.15},
						transform: [-53.1, -182.15, 1, 1, 0.283, -0.283, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.96, b: -0.279, c: 0.279, d: 0.96, tx: -53.1, ty: -182.15},
						transform: [-53.1, -182.15, 1, 1, 0.283, -0.283, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.537, 0], [0.829, 0.397], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.199, d: 0.98, tx: -51.5, ty: -189.4},
						transform: [-51.5, -189.4, 1, 1, 0.2, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.95, b: -0.312, c: 0.313, d: 0.95, tx: -46.5, ty: -203.15},
						transform: [-46.5, -203.15, 1, 1, 0.318, -0.318, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.4], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.988, b: -0.152, c: 0.152, d: 0.988, tx: -26.5, ty: -210.6},
						transform: [-26.5, -210.6, 1, 1, 0.153, -0.153, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.55, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: -31.45, ty: -209.25},
						transform: [-31.45, -209.25, 1, 1, 0.187, -0.187, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "army1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_armpunch1_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: -64.4, ty: -102},
						transform: [-64.4, -102, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_armpunch1_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: -64.4, ty: -102},
						transform: [-64.4, -102, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.537, 0], [0.829, 0.397], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_armpunch1_x",
						instancename: "",
						matrix: {a: 0.802, b: 0.022, c: -0.027, d: 1, tx: -45.45, ty: -100.8},
						transform: [-45.45, -100.8, 0.802, 1, -0.027, 0.027, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.785, b: 0.619, c: 0.619, d: -0.785, tx: -49.35, ty: -134.7},
						transform: [-49.35, -134.7, 1, 1, 2.474, 0.667, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.4], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.883, b: 0.469, c: 0.469, d: -0.883, tx: -46.4, ty: -135.15},
						transform: [-46.4, -135.15, 1, 1, 2.653, 0.488, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.55, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.899, b: 0.438, c: 0.438, d: -0.899, tx: -48.75, ty: -133.15},
						transform: [-48.75, -133.15, 1, 1, 2.688, 0.454, NaN],
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
						to: 4,
						classname: "_polar_body2_x",
						instancename: "",
						matrix: {a: 0.96, b: -0.279, c: 0.279, d: 0.96, tx: -6.65, ty: -119.8},
						transform: [-6.65, -119.8, 1, 1, 0.283, -0.283, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_body2_x",
						instancename: "",
						matrix: {a: 0.96, b: -0.279, c: 0.279, d: 0.96, tx: -6.65, ty: -119.8},
						transform: [-6.65, -119.8, 1, 1, 0.283, -0.283, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.537, 0], [0.829, 0.397], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_body2_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.182, d: 0.983, tx: -2.7, ty: -123.65},
						transform: [-2.7, -123.65, 1, 1, 0.183, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.95, b: -0.312, c: 0.324, d: 0.946, tx: -12.9, ty: -119.95},
						transform: [-12.9, -119.95, 1, 1, 0.33, -0.318, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.4], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.988, b: -0.152, c: 0.152, d: 0.988, tx: -5.7, ty: -124.6},
						transform: [-5.7, -124.6, 1, 1, 0.153, -0.153, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.55, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: -7.7, ty: -124.05},
						transform: [-7.7, -124.05, 1, 1, 0.187, -0.187, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "face1",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_face26_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: -73.65, ty: -149.95},
						transform: [-73.65, -149.95, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_face26_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: -73.65, ty: -149.95},
						transform: [-73.65, -149.95, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.537, 0], [0.829, 0.397], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_face26_x",
						instancename: "",
						matrix: {a: 1, b: -0.013, c: 0.013, d: 1, tx: -65.8, ty: -159.45},
						transform: [-65.8, -159.45, 1, 1, 0.013, -0.013, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.95, b: -0.312, c: 0.313, d: 0.95, tx: -39, ty: -163.05},
						transform: [-39, -163.05, 1, 1, 0.318, -0.318, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.4], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.988, b: -0.152, c: 0.152, d: 0.988, tx: -23.3, ty: -171.55},
						transform: [-23.3, -171.55, 1, 1, 0.153, -0.153, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.55, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: -26.9, ty: -170.35},
						transform: [-26.9, -170.35, 1, 1, 0.187, -0.187, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.96, b: -0.279, c: 0.279, d: 0.96, tx: -37.05, ty: -180.9},
						transform: [-37.05, -180.9, 1, 1, 0.283, -0.283, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.96, b: -0.279, c: 0.279, d: 0.96, tx: -37.05, ty: -180.9},
						transform: [-37.05, -180.9, 1, 1, 0.283, -0.283, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.537, 0], [0.829, 0.397], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.199, d: 0.98, tx: -22.6, ty: -186.4},
						transform: [-22.6, -186.4, 1, 1, 0.2, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.95, b: -0.312, c: 0.313, d: 0.95, tx: -8.35, ty: -206.85},
						transform: [-8.35, -206.85, 1, 1, 0.318, -0.318, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.4], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.988, b: -0.152, c: 0.152, d: 0.988, tx: 10.85, ty: -213.25},
						transform: [10.85, -213.25, 1, 1, 0.153, -0.153, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.55, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: 5.85, ty: -213.2},
						transform: [5.85, -213.2, 1, 1, 0.187, -0.187, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg5_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.037, d: 0.949, tx: 20.5, ty: -46.2},
						transform: [20.5, -46.2, 1, 0.949, 0.039, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.037, d: 0.949, tx: 20.5, ty: -46.2},
						transform: [20.5, -46.2, 1, 0.949, 0.039, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.537, 0], [0.829, 0.397], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.037, d: 0.949, tx: 20.5, ty: -46.2},
						transform: [20.5, -46.2, 1, 0.949, 0.039, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.4], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.03, tx: 21.95, ty: -49.45},
						transform: [21.95, -49.45, 1, 1.03, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.55, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm544_x",
				keys: [
					{
						from: 0,
						to: 4,
					},
					{
						from: 5,
						to: 8,
					},
					{
						from: 9,
						to: 9,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_arm544_x",
						instancename: "",
						matrix: {a: 0.662, b: 0.052, c: -0.079, d: 0.997, tx: -74.8, ty: -116.5},
						transform: [-74.8, -116.5, 0.664, 1, -0.079, 0.079, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.4], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_arm544_x",
						instancename: "",
						matrix: {a: 0.988, b: -0.155, c: 0.155, d: 0.988, tx: -63.6, ty: -114.95},
						transform: [-63.6, -114.95, 1, 1, 0.156, -0.156, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.55, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm544_x",
						instancename: "",
						matrix: {a: 0.991, b: -0.134, c: 0.134, d: 0.991, tx: -64.95, ty: -112.3},
						transform: [-64.95, -112.3, 1, 1, 0.135, -0.135, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm8_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_arm444_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 13.95, ty: -126.9},
						transform: [13.95, -126.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_arm444_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 13.95, ty: -126.9},
						transform: [13.95, -126.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.537, 0], [0.829, 0.397], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_arm444_x",
						instancename: "",
						matrix: {a: 0.889, b: -0.457, c: 0.457, d: 0.889, tx: 21.35, ty: -132.35},
						transform: [21.35, -132.35, 1, 1, 0.475, -0.475, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_arm888_x",
						instancename: "",
						matrix: {a: 0.91, b: 0.415, c: -0.415, d: 0.91, tx: 17.6, ty: -143.85},
						transform: [17.6, -143.85, 1, 1, -0.428, 0.428, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.4], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_arm888_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 29.7, ty: -150.35},
						transform: [29.7, -150.35, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.55, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm888_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 27.3, ty: -150.2},
						transform: [27.3, -150.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "saw4hand_x",
				keys: [
					{
						from: 0,
						to: 9,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_saw4hand_x",
						instancename: "",
						matrix: {a: 0.675, b: -0.183, c: 0.239, d: 0.88, tx: -46.65, ty: -108.35},
						transform: [-46.65, -108.35, 0.699, 0.912, 0.265, -0.265, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.4], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_saw4hand_x",
						instancename: "",
						matrix: {a: 0.988, b: -0.155, c: 0.155, d: 0.988, tx: -19.6, ty: -115},
						transform: [-19.6, -115, 1, 1, 0.156, -0.156, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.55, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_saw4hand_x",
						instancename: "",
						matrix: {a: 0.991, b: -0.134, c: 0.134, d: 0.991, tx: -21, ty: -111.4},
						transform: [-21, -111.4, 1, 1, 0.135, -0.135, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"polar_attack_saw_empty": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {},
		layers: [
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.109, d: 0.857, tx: -26.75, ty: -46},
						transform: [-26.75, -46, 1, 0.864, 0.126, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.109, d: 0.857, tx: -26.75, ty: -46},
						transform: [-26.75, -46, 1, 0.864, 0.126, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.537, 0], [0.829, 0.397], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.109, d: 0.857, tx: -26.75, ty: -46},
						transform: [-26.75, -46, 1, 0.864, 0.126, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "tail1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.96, b: -0.279, c: 0.279, d: 0.96, tx: 49.65, ty: -66.15},
						transform: [49.65, -66.15, 1, 1, 0.283, -0.283, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.96, b: -0.279, c: 0.279, d: 0.96, tx: 49.65, ty: -66.15},
						transform: [49.65, -66.15, 1, 1, 0.283, -0.283, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.537, 0], [0.829, 0.397], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.199, d: 0.98, tx: 48.4, ty: -63.65},
						transform: [48.4, -63.65, 1, 1, 0.2, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.982, b: -0.19, c: 0.19, d: 0.982, tx: 46.85, ty: -62.5},
						transform: [46.85, -62.5, 1, 1, 0.191, -0.191, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: -0.023, c: 0.023, d: 1, tx: 45.45, ty: -64.15},
						transform: [45.45, -64.15, 1, 1, 0.023, -0.023, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 45.6, ty: -65.4},
						transform: [45.6, -65.4, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear2_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.96, b: -0.279, c: 0.279, d: 0.96, tx: -53.1, ty: -182.15},
						transform: [-53.1, -182.15, 1, 1, 0.283, -0.283, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.96, b: -0.279, c: 0.279, d: 0.96, tx: -53.1, ty: -182.15},
						transform: [-53.1, -182.15, 1, 1, 0.283, -0.283, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.537, 0], [0.829, 0.397], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.199, d: 0.98, tx: -51.5, ty: -189.4},
						transform: [-51.5, -189.4, 1, 1, 0.2, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.982, b: -0.19, c: 0.19, d: 0.982, tx: -28.55, ty: -208.85},
						transform: [-28.55, -208.85, 1, 1, 0.191, -0.191, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 1, b: -0.023, c: 0.023, d: 1, tx: -8.9, ty: -212.15},
						transform: [-8.9, -212.15, 1, 1, 0.023, -0.023, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.2, ty: -211.75},
						transform: [-13.2, -211.75, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "army1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_armpunch1_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: -64.4, ty: -102},
						transform: [-64.4, -102, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_armpunch1_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: -64.4, ty: -102},
						transform: [-64.4, -102, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.537, 0], [0.829, 0.397], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_armpunch1_x",
						instancename: "",
						matrix: {a: 0.802, b: 0.022, c: -0.027, d: 1, tx: -45.45, ty: -100.8},
						transform: [-45.45, -100.8, 0.802, 1, -0.027, 0.027, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.657, b: -0.754, c: 0.754, d: 0.657, tx: -47.3, ty: -126.85},
						transform: [-47.3, -126.85, 1, 1, 0.853, -0.853, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.994, b: 0.107, c: -0.107, d: 0.994, tx: -35.7, ty: -137.45},
						transform: [-35.7, -137.45, 1, 1, -0.107, 0.107, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -39.8, ty: -135.7},
						transform: [-39.8, -135.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_body2_x",
						instancename: "",
						matrix: {a: 0.96, b: -0.279, c: 0.279, d: 0.96, tx: -6.65, ty: -119.8},
						transform: [-6.65, -119.8, 1, 1, 0.283, -0.283, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_body2_x",
						instancename: "",
						matrix: {a: 0.96, b: -0.279, c: 0.279, d: 0.96, tx: -6.65, ty: -119.8},
						transform: [-6.65, -119.8, 1, 1, 0.283, -0.283, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.537, 0], [0.829, 0.397], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_body2_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.192, d: 0.992, tx: -2, ty: -123},
						transform: [-2, -123, 1, 1.01, 0.191, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.982, b: -0.19, c: 0.19, d: 0.982, tx: -7.95, ty: -121.8},
						transform: [-7.95, -121.8, 1, 1, 0.191, -0.191, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1, b: -0.023, c: 0.023, d: 1, tx: 0.5, ty: -124.25},
						transform: [0.5, -124.25, 1, 1, 0.023, -0.023, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -1.1, ty: -124.15},
						transform: [-1.1, -124.15, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "face1",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_face26_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: -73.65, ty: -149.95},
						transform: [-73.65, -149.95, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_face26_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: -73.65, ty: -149.95},
						transform: [-73.65, -149.95, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.537, 0], [0.829, 0.397], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_face26_x",
						instancename: "",
						matrix: {a: 1, b: -0.013, c: 0.013, d: 1, tx: -65.8, ty: -159.45},
						transform: [-65.8, -159.45, 1, 1, 0.013, -0.013, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.265, b: -0.964, c: 0.964, d: 0.265, tx: 30.05, ty: -125.8},
						transform: [30.05, -125.8, 1, 1, 1.303, -1.303, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.996, b: 0.094, c: -0.094, d: 0.996, tx: 29, ty: -128.2},
						transform: [29, -128.2, 1, 1, -0.094, 0.094, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 27.25, ty: -128.9},
						transform: [27.25, -128.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.96, b: -0.279, c: 0.279, d: 0.96, tx: -37.05, ty: -180.9},
						transform: [-37.05, -180.9, 1, 1, 0.283, -0.283, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.96, b: -0.279, c: 0.279, d: 0.96, tx: -37.05, ty: -180.9},
						transform: [-37.05, -180.9, 1, 1, 0.283, -0.283, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.537, 0], [0.829, 0.397], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.199, d: 0.98, tx: -22.6, ty: -186.4},
						transform: [-22.6, -186.4, 1, 1, 0.2, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.982, b: -0.19, c: 0.19, d: 0.982, tx: -27.4, ty: -168},
						transform: [-27.4, -168, 1, 1, 0.191, -0.191, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 1, b: -0.023, c: 0.023, d: 1, tx: -10.85, ty: -173.05},
						transform: [-10.85, -173.05, 1, 1, 0.023, -0.023, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.95, ty: -172.6},
						transform: [-13.95, -172.6, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg5_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.037, d: 0.949, tx: 20.5, ty: -46.2},
						transform: [20.5, -46.2, 1, 0.949, 0.039, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.037, d: 0.949, tx: 20.5, ty: -46.2},
						transform: [20.5, -46.2, 1, 0.949, 0.039, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.537, 0], [0.829, 0.397], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.037, d: 0.949, tx: 20.5, ty: -46.2},
						transform: [20.5, -46.2, 1, 0.949, 0.039, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.982, b: -0.19, c: 0.19, d: 0.982, tx: 3.15, ty: -210.95},
						transform: [3.15, -210.95, 1, 1, 0.191, -0.191, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 1, b: -0.023, c: 0.023, d: 1, tx: 28.5, ty: -209.95},
						transform: [28.5, -209.95, 1, 1, 0.023, -0.023, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 24.3, ty: -210.65},
						transform: [24.3, -210.65, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm8_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_polar_arm444_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 13.95, ty: -126.9},
						transform: [13.95, -126.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_polar_arm444_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 13.95, ty: -126.9},
						transform: [13.95, -126.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.537, 0], [0.829, 0.397], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_arm444_x",
						instancename: "",
						matrix: {a: 0.889, b: -0.457, c: 0.457, d: 0.889, tx: 21.35, ty: -132.35},
						transform: [21.35, -132.35, 1, 1, 0.475, -0.475, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"polar_hurt_saw": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {},
		layers: [
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 0.903, b: 0.429, c: -0.429, d: 0.903, tx: -27.7, ty: -55.05},
						transform: [-27.7, -55.05, 1, 1, -0.443, 0.443, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 0.689, b: 0.724, c: -0.724, d: 0.689, tx: -36.8, ty: -63.8},
						transform: [-36.8, -63.8, 1, 1, -0.81, 0.81, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 0.654, b: 0.756, c: -0.756, d: 0.654, tx: -35.25, ty: -79.9},
						transform: [-35.25, -79.9, 1, 1, -0.857, 0.857, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.146, c: -0.146, d: 0.989, tx: -21.85, ty: -53.9},
						transform: [-21.85, -53.9, 1, 1, -0.147, 0.147, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.201, 0.343], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.946, tx: -22.95, ty: -49.15},
						transform: [-22.95, -49.15, 1, 0.946, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "tail1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 44.05, ty: -59.3},
						transform: [44.05, -59.3, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 45.45, ty: -59.05},
						transform: [45.45, -59.05, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.98, b: 0.197, c: -0.197, d: 0.98, tx: 46.6, ty: -71.25},
						transform: [46.6, -71.25, 1, 1, -0.198, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 44.05, ty: -59.3},
						transform: [44.05, -59.3, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.043, c: -0.043, d: 0.999, tx: 46.3, ty: -62.8},
						transform: [46.3, -62.8, 1, 1, -0.043, 0.043, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.201, 0.343], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.963, b: -0.27, c: 0.27, d: 0.963, tx: 46.15, ty: -73.65},
						transform: [46.15, -73.65, 1, 1, 0.273, -0.273, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: 46.45, ty: -72.1},
						transform: [46.45, -72.1, 1, 1, 0.187, -0.187, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear2_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 20.6, ty: -214.95},
						transform: [20.6, -214.95, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 26.4, ty: -213.35},
						transform: [26.4, -213.35, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.98, b: 0.197, c: -0.197, d: 0.98, tx: 38, ty: -224.95},
						transform: [38, -224.95, 1, 1, -0.198, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 20.6, ty: -214.95},
						transform: [20.6, -214.95, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.043, c: -0.043, d: 0.999, tx: 1.75, ty: -214.05},
						transform: [1.75, -214.05, 1, 1, -0.043, 0.043, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.201, 0.343], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.963, b: -0.27, c: 0.27, d: 0.963, tx: -43.25, ty: -203.6},
						transform: [-43.25, -203.6, 1, 1, 0.273, -0.273, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: -31.45, ty: -209.25},
						transform: [-31.45, -209.25, 1, 1, 0.187, -0.187, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_left back",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.673, b: -0.74, c: 0.74, d: 0.673, tx: -30.05, ty: -121.55},
						transform: [-30.05, -121.55, 1, 1, 0.833, -0.833, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.761, b: -0.648, c: 0.648, d: 0.761, tx: -22.6, ty: -135.15},
						transform: [-22.6, -135.15, 1, 1, 0.705, -0.705, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.047, c: -0.047, d: 0.999, tx: -21.85, ty: -153.85},
						transform: [-21.85, -153.85, 1, 1, -0.047, 0.047, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.919, b: -0.393, c: 0.393, d: 0.919, tx: -28.05, ty: -113.75},
						transform: [-28.05, -113.75, 1, 1, 0.404, -0.404, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.621, b: 0.784, c: 0.784, d: -0.621, tx: -25.35, ty: -150.95},
						transform: [-25.35, -150.95, 1, 1, 2.24, 0.901, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.201, 0.343], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.893, b: 0.451, c: 0.451, d: -0.893, tx: -53.3, ty: -126.05},
						transform: [-53.3, -126.05, 1, 1, 2.674, 0.467, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.899, b: 0.438, c: 0.438, d: -0.899, tx: -48.75, ty: -133.15},
						transform: [-48.75, -133.15, 1, 1, 2.688, 0.454, NaN],
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
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 10.15, ty: -126.3},
						transform: [10.15, -126.3, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 11.6, ty: -126},
						transform: [11.6, -126, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.98, b: 0.197, c: -0.197, d: 0.98, tx: 15.95, ty: -139.75},
						transform: [15.95, -139.75, 1, 1, -0.198, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 10.15, ty: -126.3},
						transform: [10.15, -126.3, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.043, c: -0.043, d: 0.999, tx: 5.4, ty: -125.7},
						transform: [5.4, -125.7, 1, 1, -0.043, 0.043, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.201, 0.343], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.963, b: -0.27, c: 0.27, d: 0.963, tx: -12.25, ty: -120.75},
						transform: [-12.25, -120.75, 1, 1, 0.273, -0.273, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: -7.7, ty: -124.05},
						transform: [-7.7, -124.05, 1, 1, 0.187, -0.187, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "face1",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_face_hurt_axe",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 11.75, ty: -176.45},
						transform: [11.75, -176.45, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_face_hurt_axe",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 14.4, ty: -178.65},
						transform: [14.4, -178.65, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_polar_face_hurt_axe",
						instancename: "",
						matrix: {a: 0.98, b: 0.197, c: -0.197, d: 0.98, tx: 21.25, ty: -194},
						transform: [21.25, -194, 1, 1, -0.198, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_polar_face_hurt_axe",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 11.75, ty: -176.45},
						transform: [11.75, -176.45, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.043, c: -0.043, d: 0.999, tx: -2.65, ty: -175.15},
						transform: [-2.65, -175.15, 1, 1, -0.043, 0.043, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.201, 0.343], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.963, b: -0.27, c: 0.27, d: 0.963, tx: -35.35, ty: -165.2},
						transform: [-35.35, -165.2, 1, 1, 0.273, -0.273, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_face1_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: -26.9, ty: -170.35},
						transform: [-26.9, -170.35, 1, 1, 0.187, -0.187, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 52.4, ty: -207.25},
						transform: [52.4, -207.25, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 57.45, ty: -202.1},
						transform: [57.45, -202.1, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.854, b: 0.52, c: -0.52, d: 0.854, tx: 66.65, ty: -211},
						transform: [66.65, -211, 1, 1, -0.547, 0.547, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 52.4, ty: -207.25},
						transform: [52.4, -207.25, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.043, c: -0.043, d: 0.999, tx: 38.9, ty: -209.4},
						transform: [38.9, -209.4, 1, 1, -0.043, 0.043, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.201, 0.343], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.963, b: -0.27, c: 0.27, d: 0.963, tx: -6.4, ty: -210.75},
						transform: [-6.4, -210.75, 1, 1, 0.273, -0.273, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.186, c: 0.186, d: 0.983, tx: 5.85, ty: -213.2},
						transform: [5.85, -213.2, 1, 1, 0.187, -0.187, NaN],
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
						to: 1,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: -0.039, b: -0.999, c: 0.999, d: -0.039, tx: 52.5, ty: -129.45},
						transform: [52.5, -129.45, 1, 1, 1.609, -1.609, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.027, b: -1, c: 1, d: 0.027, tx: 56.3, ty: -131.1},
						transform: [56.3, -131.1, 1, 1, 1.544, -1.544, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.291, 0.4], [0.65, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: -0.074, b: -0.997, c: 0.997, d: -0.074, tx: 61.9, ty: -154.4},
						transform: [61.9, -154.4, 1, 1, 1.644, -1.644, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.758, 0.545], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: -0.25, b: -0.968, c: 0.968, d: -0.25, tx: 58.25, ty: -135.55},
						transform: [58.25, -135.55, 1, 1, 1.823, -1.823, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.291, 0.425], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.201, 0.343], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm1_hurt",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_arm54_x",
						instancename: "",
						matrix: {a: 0.673, b: -0.74, c: 0.74, d: 0.673, tx: -59.55, ty: -137.65},
						transform: [-59.55, -137.65, 1, 1, 0.833, -0.833, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_arm54_x",
						instancename: "",
						matrix: {a: 0.761, b: -0.648, c: 0.648, d: 0.761, tx: -49.8, ty: -154.9},
						transform: [-49.8, -154.9, 1, 1, 0.705, -0.705, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_polar_arm54_x",
						instancename: "",
						matrix: {a: 0.975, b: -0.221, c: 0.221, d: 0.975, tx: -31.75, ty: -188.45},
						transform: [-31.75, -188.45, 1, 1, 0.223, -0.223, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_polar_arm54_x",
						instancename: "",
						matrix: {a: 0.943, b: -0.333, c: 0.333, d: 0.943, tx: -50.3, ty: -144.15},
						transform: [-50.3, -144.15, 1, 1, 0.339, -0.339, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_polar_arm544_x",
						instancename: "",
						matrix: {a: 0.85, b: 0.275, c: -0.308, d: 0.951, tx: -49.35, ty: -140.5},
						transform: [-49.35, -140.5, 0.894, 1, -0.313, 0.313, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.201, 0.343], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_arm544_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.044, c: -0.044, d: 0.999, tx: -68.2, ty: -108.35},
						transform: [-68.2, -108.35, 1, 1, -0.044, 0.044, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm544_x",
						instancename: "",
						matrix: {a: 0.991, b: -0.134, c: 0.134, d: 0.991, tx: -64.95, ty: -112.3},
						transform: [-64.95, -112.3, 1, 1, 0.135, -0.135, NaN],
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
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 0.948, b: 0.317, c: -0.392, d: 0.88, tx: 22.85, ty: -50.4},
						transform: [22.85, -50.4, 1, 0.963, -0.419, 0.323, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.452], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 0.809, b: 0.587, c: -0.547, d: 0.753, tx: 22.3, ty: -65.95},
						transform: [22.3, -65.95, 1, 0.931, -0.628, 0.628, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_polar_arm888_x",
						instancename: "",
						matrix: {a: 0.408, b: 0.913, c: -0.913, d: 0.408, tx: 41.3, ty: -138.75},
						transform: [41.3, -138.75, 1, 1, -1.15, 1.15, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.201, 0.343], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_arm888_x",
						instancename: "",
						matrix: {a: 0.974, b: -0.228, c: 0.228, d: 0.974, tx: 20.35, ty: -149.8},
						transform: [20.35, -149.8, 1, 1, 0.23, -0.23, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_arm888_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 27.3, ty: -150.2},
						transform: [27.3, -150.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "saw4hand_x",
				keys: [
					{
						from: 0,
						to: 10,
					},
					{
						from: 11,
						to: 14,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.201, 0.343], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.962, tx: 21.95, ty: -46.75},
						transform: [21.95, -46.75, 1, 0.962, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "saw4hand_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_saw4hand_x",
						instancename: "",
						matrix: {a: 0.967, b: 0.254, c: -0.254, d: 0.967, tx: -13.95, ty: -149.4},
						transform: [-13.95, -149.4, 1, 1, -0.257, 0.257, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_saw4hand_x",
						instancename: "",
						matrix: {a: 0.967, b: 0.254, c: -0.254, d: 0.967, tx: -3.9, ty: -159.9},
						transform: [-3.9, -159.9, 1, 1, -0.257, 0.257, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.185, 0.476], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_polar_saw4hand_x",
						instancename: "",
						matrix: {a: 0.673, b: 0.74, c: -0.74, d: 0.673, tx: 10.05, ty: -170.8},
						transform: [10.05, -170.8, 1, 1, -0.833, 0.833, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.382, 0], [0.8, 0.5], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_polar_saw4hand_x",
						instancename: "",
						matrix: {a: 0.967, b: 0.254, c: -0.254, d: 0.967, tx: -8.7, ty: -131.95},
						transform: [-8.7, -131.95, 1, 1, -0.257, 0.257, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 14,
						classname: "_polar_saw4hand_x",
						instancename: "",
						matrix: {a: 0.951, b: 0.308, c: -0.308, d: 0.951, tx: -15.35, ty: -122.4},
						transform: [-15.35, -122.4, 1, 1, -0.313, 0.313, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.201, 0.343], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_polar_saw4hand_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.044, c: -0.044, d: 0.999, tx: -25.05, ty: -99.65},
						transform: [-25.05, -99.65, 1, 1, -0.044, 0.044, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_saw4hand_x",
						instancename: "",
						matrix: {a: 0.991, b: -0.134, c: 0.134, d: 0.991, tx: -21, ty: -111.4},
						transform: [-21, -111.4, 1, 1, 0.135, -0.135, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"polar_die": {
		type: "movieclip",
		fps: 30,
		totalFrames: 22,
		labels: {loop: {from:9, to:20}, },
		layers: [
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 0.903, b: 0.429, c: -0.429, d: 0.903, tx: -27.7, ty: -55.05},
						transform: [-27.7, -55.05, 1, 1, -0.443, 0.443, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 0.773, b: 0.635, c: -0.635, d: 0.773, tx: -35.25, ty: -79.9},
						transform: [-35.25, -79.9, 1, 1, -0.688, 0.688, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 0.608, b: 0.794, c: -0.794, d: 0.608, tx: -32.05, ty: -82.6},
						transform: [-32.05, -82.6, 1, 1, -0.918, 0.918, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.344, 0.575], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 0.389, b: 0.921, c: -0.921, d: 0.389, tx: -41.1, ty: -99.95},
						transform: [-41.1, -99.95, 1, 1, -1.171, 1.171, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 20,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 0.077, b: 0.997, c: -0.997, d: 0.077, tx: -38.3, ty: -102.7},
						transform: [-38.3, -102.7, 1, 1, -1.493, 1.493, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 0.389, b: 0.921, c: -0.921, d: 0.389, tx: -41.1, ty: -99.95},
						transform: [-41.1, -99.95, 1, 1, -1.171, 1.171, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
				]
			},
			{
				name: "tail1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 44.05, ty: -59.3},
						transform: [44.05, -59.3, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.98, b: 0.197, c: -0.197, d: 0.98, tx: 46.6, ty: -71.25},
						transform: [46.6, -71.25, 1, 1, -0.198, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.967, b: 0.256, c: -0.256, d: 0.967, tx: 43.35, ty: -69.8},
						transform: [43.35, -69.8, 1, 1, -0.259, 0.259, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.344, 0.575], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.872, b: 0.49, c: -0.49, d: 0.872, tx: 28.65, ty: -68.65},
						transform: [28.65, -68.65, 1, 1, -0.512, 0.512, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 20,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.691, b: 0.723, c: -0.723, d: 0.691, tx: 26.35, ty: -68.9},
						transform: [26.35, -68.9, 1, 1, -0.808, 0.808, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.872, b: 0.49, c: -0.49, d: 0.872, tx: 28.65, ty: -68.65},
						transform: [28.65, -68.65, 1, 1, -0.512, 0.512, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear2_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 20.6, ty: -214.95},
						transform: [20.6, -214.95, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.98, b: 0.197, c: -0.197, d: 0.98, tx: 38, ty: -224.95},
						transform: [38, -224.95, 1, 1, -0.198, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.967, b: 0.256, c: -0.256, d: 0.967, tx: 44, ty: -223.75},
						transform: [44, -223.75, 1, 1, -0.259, 0.259, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.344, 0.575], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.872, b: 0.49, c: -0.49, d: 0.872, tx: 67.85, ty: -217.5},
						transform: [67.85, -217.5, 1, 1, -0.512, 0.512, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 20,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.854, b: 0.519, c: -0.519, d: 0.854, tx: 64.1, ty: -221.45},
						transform: [64.1, -221.45, 1, 1, -0.546, 0.546, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.872, b: 0.49, c: -0.49, d: 0.872, tx: 67.85, ty: -217.5},
						transform: [67.85, -217.5, 1, 1, -0.512, 0.512, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm_left back",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.166, b: -0.986, c: 0.986, d: 0.166, tx: -23.55, ty: -145.05},
						transform: [-23.55, -145.05, 1, 1, 1.404, -1.404, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_polar_army1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.047, c: -0.047, d: 0.999, tx: -21.25, ty: -154.4},
						transform: [-21.25, -154.4, 1, 1, -0.047, 0.047, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_polar_army1_die_x",
						instancename: "",
						matrix: {a: 0.956, b: 0.294, c: -0.234, d: 0.76, tx: -18.85, ty: -158},
						transform: [-18.85, -158, 1, 0.796, -0.298, 0.298, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.344, 0.575], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_polar_army1_die_x",
						instancename: "",
						matrix: {a: 0.936, b: 0.353, c: -0.353, d: 0.936, tx: -6.15, ty: -170.15},
						transform: [-6.15, -170.15, 1, 1, -0.361, 0.361, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 20,
						classname: "_polar_army1_die_x",
						instancename: "",
						matrix: {a: 0.976, b: 0.219, c: -0.204, d: 0.906, tx: -6.55, ty: -168.6},
						transform: [-6.55, -168.6, 1, 0.929, -0.221, 0.221, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_polar_army1_die_x",
						instancename: "",
						matrix: {a: 0.936, b: 0.353, c: -0.353, d: 0.936, tx: -6.15, ty: -170.15},
						transform: [-6.15, -170.15, 1, 1, -0.361, 0.361, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 10.15, ty: -126.3},
						transform: [10.15, -126.3, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.98, b: 0.197, c: -0.197, d: 0.98, tx: 15.95, ty: -139.75},
						transform: [15.95, -139.75, 1, 1, -0.198, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_polar_body1b_x",
						instancename: "",
						matrix: {a: 0.967, b: 0.256, c: -0.256, d: 0.967, tx: 16.85, ty: -140},
						transform: [16.85, -140, 1, 1, -0.259, 0.259, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.344, 0.575], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 15,
						classname: "_polar_body1b_x",
						instancename: "",
						matrix: {a: 0.872, b: 0.49, c: -0.49, d: 0.872, tx: 20.65, ty: -143.25},
						transform: [20.65, -143.25, 1, 1, -0.512, 0.512, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 20,
						classname: "_polar_body1b_x",
						instancename: "",
						matrix: {a: 0.854, b: 0.519, c: -0.524, d: 0.863, tx: 21.3, ty: -144.35},
						transform: [21.3, -144.35, 1, 1.01, -0.546, 0.546, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_polar_body1b_x",
						instancename: "",
						matrix: {a: 0.872, b: 0.49, c: -0.49, d: 0.872, tx: 20.65, ty: -143.25},
						transform: [20.65, -143.25, 1, 1, -0.512, 0.512, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
				]
			},
			{
				name: "face1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_polar_face_hurt_axe",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 11.75, ty: -176.45},
						transform: [11.75, -176.45, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_polar_face_hurt_axe",
						instancename: "",
						matrix: {a: 0.98, b: 0.197, c: -0.197, d: 0.98, tx: 21.25, ty: -194},
						transform: [21.25, -194, 1, 1, -0.198, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_polar_face_hurt_axe",
						instancename: "",
						matrix: {a: 0.967, b: 0.256, c: -0.256, d: 0.967, tx: 25.4, ty: -193.85},
						transform: [25.4, -193.85, 1, 1, -0.259, 0.259, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.344, 0.575], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 15,
						classname: "_polar_face_hurt_axe",
						instancename: "",
						matrix: {a: 0.872, b: 0.49, c: -0.49, d: 0.872, tx: 42.4, ty: -193.25},
						transform: [42.4, -193.25, 1, 1, -0.512, 0.512, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 20,
						classname: "_polar_face_hurt_axe",
						instancename: "",
						matrix: {a: 0.854, b: 0.519, c: -0.499, d: 0.82, tx: 48.1, ty: -198.05},
						transform: [48.1, -198.05, 1, 0.96, -0.546, 0.546, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_polar_face_hurt_axe",
						instancename: "",
						matrix: {a: 0.872, b: 0.49, c: -0.49, d: 0.872, tx: 42.4, ty: -193.25},
						transform: [42.4, -193.25, 1, 1, -0.512, 0.512, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 52.4, ty: -207.25},
						transform: [52.4, -207.25, 1, 1, -0.152, 0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.854, b: 0.52, c: -0.52, d: 0.854, tx: 66.65, ty: -211},
						transform: [66.65, -211, 1, 1, -0.547, 0.547, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.821, b: 0.571, c: -0.571, d: 0.821, tx: 71.75, ty: -208.1},
						transform: [71.75, -208.1, 1, 1, -0.607, 0.607, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.344, 0.575], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.652, b: 0.758, c: -0.758, d: 0.652, tx: 90.8, ty: -195.4},
						transform: [90.8, -195.4, 1, 1, -0.861, 0.861, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 20,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.625, b: 0.78, c: -0.78, d: 0.625, tx: 92.85, ty: -192.55},
						transform: [92.85, -192.55, 1, 1, -0.895, 0.895, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.652, b: 0.758, c: -0.758, d: 0.652, tx: 90.8, ty: -195.4},
						transform: [90.8, -195.4, 1, 1, -0.861, 0.861, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm2",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.496, b: -0.868, c: 0.868, d: 0.496, tx: 47.65, ty: -123.3},
						transform: [47.65, -123.3, 1, 1, 1.052, -1.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.949, b: 0.314, c: -0.314, d: 0.949, tx: 63.5, ty: -145.85},
						transform: [63.5, -145.85, 1, 1, -0.32, 0.32, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.508, 0], [0.758, 0.545], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_polar_arm_diw2_x",
						instancename: "",
						matrix: {a: 0.532, b: -0.541, c: 0.713, d: 0.701, tx: 75.3, ty: -158.65},
						transform: [75.3, -158.65, 0.759, 1, 0.794, -0.794, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.344, 0.575], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_polar_arm_diw2_x",
						instancename: "",
						matrix: {a: 0.885, b: -0.466, c: 0.466, d: 0.885, tx: 92.55, ty: -147.25},
						transform: [92.55, -147.25, 1, 1, 0.485, -0.485, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 20,
						classname: "_polar_arm_diw2_x",
						instancename: "",
						matrix: {a: 0.906, b: -0.206, c: 0.222, d: 0.975, tx: 92.65, ty: -135.3},
						transform: [92.65, -135.3, 0.929, 1, 0.224, -0.224, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_polar_arm_diw2_x",
						instancename: "",
						matrix: {a: 0.885, b: -0.466, c: 0.466, d: 0.885, tx: 92.55, ty: -147.25},
						transform: [92.55, -147.25, 1, 1, 0.485, -0.485, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.508, 0], [0.758, 0.545], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm1_hurt",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_polar_arm54_x",
						instancename: "",
						matrix: {a: 0.166, b: -0.986, c: 0.986, d: 0.166, tx: -57.1, ty: -142.65},
						transform: [-57.1, -142.65, 1, 1, 1.404, -1.404, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_polar_arm54_x",
						instancename: "",
						matrix: {a: 0.602, b: -0.799, c: 0.799, d: 0.602, tx: -31.65, ty: -188.4},
						transform: [-31.65, -188.4, 1, 1, 0.925, -0.925, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
					},
					{
						from: 9,
						to: 14,
					},
					{
						from: 15,
						to: 20,
					},
					{
						from: 21,
						to: 21,
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.104, c: -0.097, d: 0.925, tx: 20.05, ty: -59.05},
						transform: [20.05, -59.05, 1, 0.931, -0.105, 0.105, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_polar_leg1b_x",
						instancename: "",
						matrix: {a: 0.892, b: 0.452, c: -0.485, d: 0.665, tx: 13.7, ty: -51.05},
						transform: [13.7, -51.05, 1, 0.823, -0.631, 0.469, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.344, 0.575], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_polar_leg1b_x",
						instancename: "",
						matrix: {a: 0.75, b: 0.661, c: -0.638, d: 0.724, tx: 0.2, ty: -56.35},
						transform: [0.2, -56.35, 1, 0.965, -0.723, 0.723, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 20,
						classname: "_polar_leg1b_x",
						instancename: "",
						matrix: {a: 0.877, b: 0.48, c: -0.412, d: 0.753, tx: 7.2, ty: -57.9},
						transform: [7.2, -57.9, 1, 0.859, -0.501, 0.501, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_polar_leg1b_x",
						instancename: "",
						matrix: {a: 0.75, b: 0.661, c: -0.638, d: 0.724, tx: 0.2, ty: -56.35},
						transform: [0.2, -56.35, 1, 0.965, -0.723, 0.723, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.529, 0], [0.781, 0.521], [1, 1], ],
						}
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
						to: 20,
					},
					{
						from: 21,
						to: 21,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"polar_bat": {
		type: "movieclip",
		fps: 30,
		totalFrames: 146,
		labels: {loop: {from:128, to:144}, },
		layers: [
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 26,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 35,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 36,
						to: 55,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 56,
						to: 61,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 75,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 76,
						to: 87,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.471, 0], [0.718, 0.669], [1, 1], ],
						}
					},
					{
						from: 88,
						to: 93,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.512, 0], [0.633, 1], [1, 1], ],
						}
					},
					{
						from: 94,
						to: 97,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.744, 0.548], [1, 1], ],
						}
					},
					{
						from: 98,
						to: 98,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: -0.135, c: 0, d: 1, tx: -22.95, ty: -51.4},
						transform: [-22.95, -51.4, 1.009, 1, 0, -0.134, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.47, 0], [0.744, 0.548], [1, 1], ],
						}
					},
					{
						from: 99,
						to: 102,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: -0.097, c: 0, d: 1, tx: -22.3, ty: -57.55},
						transform: [-22.3, -57.55, 1.005, 1, 0, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.76, 0.3], [1, 1], ],
						}
					},
					{
						from: 103,
						to: 105,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 106,
						to: 108,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.915, tx: -22.95, ty: -48.05},
						transform: [-22.95, -48.05, 1, 0.915, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 109,
						to: 117,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 118,
						to: 126,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.027, d: 0.935, tx: -23.9, ty: -48.7},
						transform: [-23.9, -48.7, 1, 0.935, 0.029, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 127,
						to: 135,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 136,
						to: 144,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.027, d: 0.935, tx: -23.9, ty: -48.7},
						transform: [-23.9, -48.7, 1, 0.935, 0.029, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 145,
						to: 145,
						classname: "_polar_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.95, ty: -51.05},
						transform: [-22.95, -51.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "tail1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 45.6, ty: -65.4},
						transform: [45.6, -65.4, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.077, c: -0.077, d: 0.997, tx: 46.3, ty: -66.2},
						transform: [46.3, -66.2, 1, 1, -0.077, 0.077, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 26,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 45.6, ty: -65.4},
						transform: [45.6, -65.4, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 35,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.077, c: -0.077, d: 0.997, tx: 46.3, ty: -66.2},
						transform: [46.3, -66.2, 1, 1, -0.077, 0.077, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 36,
						to: 55,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 45.6, ty: -65.4},
						transform: [45.6, -65.4, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 56,
						to: 61,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 45.6, ty: -65.4},
						transform: [45.6, -65.4, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 75,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 40.55, ty: -66.25},
						transform: [40.55, -66.25, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 76,
						to: 87,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 40.55, ty: -66.25},
						transform: [40.55, -66.25, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.471, 0], [0.718, 0.669], [1, 1], ],
						}
					},
					{
						from: 88,
						to: 93,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: 0.005, c: -0.005, d: 1, tx: 42.9, ty: -64.9},
						transform: [42.9, -64.9, 1, 1, -0.005, 0.005, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.512, 0], [0.633, 1], [1, 1], ],
						}
					},
					{
						from: 94,
						to: 97,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: 43.3, ty: -64.6},
						transform: [43.3, -64.6, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.744, 0.548], [1, 1], ],
						}
					},
					{
						from: 98,
						to: 98,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: 0.005, c: -0.005, d: 1, tx: 42.9, ty: -68.15},
						transform: [42.9, -68.15, 1, 1, -0.005, 0.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.47, 0], [0.744, 0.548], [1, 1], ],
						}
					},
					{
						from: 99,
						to: 102,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 46.5, ty: -70.2},
						transform: [46.5, -70.2, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.76, 0.3], [1, 1], ],
						}
					},
					{
						from: 103,
						to: 105,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 45.35, ty: -63},
						transform: [45.35, -63, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 106,
						to: 108,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 47.3, ty: -61.75},
						transform: [47.3, -61.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 109,
						to: 117,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 45.35, ty: -63},
						transform: [45.35, -63, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 118,
						to: 126,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.993, b: 0.122, c: -0.122, d: 0.993, tx: 46.7, ty: -62.75},
						transform: [46.7, -62.75, 1, 1, -0.122, 0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 127,
						to: 135,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 45.35, ty: -63},
						transform: [45.35, -63, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 136,
						to: 144,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 0.993, b: 0.122, c: -0.122, d: 0.993, tx: 46.7, ty: -62.75},
						transform: [46.7, -62.75, 1, 1, -0.122, 0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 145,
						to: 145,
						classname: "_polar_tail1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 45.35, ty: -63},
						transform: [45.35, -63, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear2_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.2, ty: -211.75},
						transform: [-13.2, -211.75, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.049, c: 0.049, d: 0.999, tx: -17.4, ty: -211.7},
						transform: [-17.4, -211.7, 1, 1, 0.049, -0.049, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 26,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.2, ty: -211.75},
						transform: [-13.2, -211.75, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 35,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.049, c: 0.049, d: 0.999, tx: -17.4, ty: -211.7},
						transform: [-17.4, -211.7, 1, 1, 0.049, -0.049, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 36,
						to: 55,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.2, ty: -211.75},
						transform: [-13.2, -211.75, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 56,
						to: 61,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.2, ty: -211.75},
						transform: [-13.2, -211.75, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 75,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -17.55, ty: -211.5},
						transform: [-17.55, -211.5, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 76,
						to: 87,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -17.55, ty: -211.5},
						transform: [-17.55, -211.5, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.471, 0], [0.718, 0.669], [1, 1], ],
						}
					},
					{
						from: 88,
						to: 93,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 1, b: 0.005, c: -0.005, d: 1, tx: -7.2, ty: -212.95},
						transform: [-7.2, -212.95, 1, 1, -0.005, 0.005, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.512, 0], [0.633, 1], [1, 1], ],
						}
					},
					{
						from: 94,
						to: 97,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: -5.3, ty: -207.95},
						transform: [-5.3, -207.95, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.744, 0.548], [1, 1], ],
						}
					},
					{
						from: 98,
						to: 98,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 1, b: 0.005, c: -0.005, d: 1, tx: -7.2, ty: -216.2},
						transform: [-7.2, -216.2, 1, 1, -0.005, 0.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.47, 0], [0.744, 0.548], [1, 1], ],
						}
					},
					{
						from: 99,
						to: 102,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 1, b: -0.026, c: 0.026, d: 1, tx: -10.25, ty: -217.25},
						transform: [-10.25, -217.25, 1, 1, 0.026, -0.026, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.76, 0.3], [1, 1], ],
						}
					},
					{
						from: 103,
						to: 105,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.35, ty: -213.3},
						transform: [-1.35, -213.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 106,
						to: 108,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.35, ty: -209.1},
						transform: [-1.35, -209.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 109,
						to: 117,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.35, ty: -213.3},
						transform: [-1.35, -213.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 118,
						to: 126,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.039, c: 0.039, d: 0.999, tx: -5.4, ty: -210.1},
						transform: [-5.4, -210.1, 1, 1, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 127,
						to: 135,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.35, ty: -213.3},
						transform: [-1.35, -213.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 136,
						to: 144,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.039, c: 0.039, d: 0.999, tx: -5.4, ty: -210.1},
						transform: [-5.4, -210.1, 1, 1, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 145,
						to: 145,
						classname: "_polar_ear2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.35, ty: -213.3},
						transform: [-1.35, -213.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
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
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -39.8, ty: -135.7},
						transform: [-39.8, -135.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0.016, c: -0.016, d: 1, tx: -42.8, ty: -136.4},
						transform: [-42.8, -136.4, 1, 1, -0.016, 0.016, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 26,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -39.8, ty: -135.7},
						transform: [-39.8, -135.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 35,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0.016, c: -0.016, d: 1, tx: -42.8, ty: -136.4},
						transform: [-42.8, -136.4, 1, 1, -0.016, 0.016, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 36,
						to: 55,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -39.8, ty: -135.7},
						transform: [-39.8, -135.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 56,
						to: 61,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -39.8, ty: -135.7},
						transform: [-39.8, -135.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 75,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -39.35, ty: -133.55},
						transform: [-39.35, -133.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 76,
						to: 87,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -39.35, ty: -133.55},
						transform: [-39.35, -133.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.471, 0], [0.718, 0.669], [1, 1], ],
						}
					},
					{
						from: 88,
						to: 93,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.057, c: -0.057, d: 0.998, tx: -25.75, ty: -158.15},
						transform: [-25.75, -158.15, 1, 1, -0.057, 0.057, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.512, 0], [0.633, 1], [1, 1], ],
						}
					},
					{
						from: 94,
						to: 97,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.07, c: -0.07, d: 0.998, tx: -25.6, ty: -155.6},
						transform: [-25.6, -155.6, 1, 1, -0.07, 0.07, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.744, 0.548], [1, 1], ],
						}
					},
					{
						from: 98,
						to: 98,
						classname: "_polar_arm_box2_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.057, c: -0.057, d: 0.998, tx: -25.75, ty: -161.4},
						transform: [-25.75, -161.4, 1, 1, -0.057, 0.057, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.47, 0], [0.744, 0.548], [1, 1], ],
						}
					},
					{
						from: 99,
						to: 102,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.121, c: 0.121, d: 0.993, tx: 31.85, ty: -160.95},
						transform: [31.85, -160.95, 1, 1, 0.122, -0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.76, 0.3], [1, 1], ],
						}
					},
					{
						from: 103,
						to: 105,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: 35.05, ty: -131.9},
						transform: [35.05, -131.9, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 106,
						to: 108,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 0.987, b: -0.16, c: 0.16, d: 0.987, tx: 35.05, ty: -129.9},
						transform: [35.05, -129.9, 1, 1, 0.161, -0.161, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 109,
						to: 117,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: 35.05, ty: -131.9},
						transform: [35.05, -131.9, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 118,
						to: 126,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 1, b: -0.013, c: 0.013, d: 1, tx: 35.45, ty: -128.1},
						transform: [35.45, -128.1, 1, 1, 0.013, -0.013, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 127,
						to: 135,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: 35.05, ty: -131.9},
						transform: [35.05, -131.9, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 136,
						to: 144,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 1, b: -0.013, c: 0.013, d: 1, tx: 35.45, ty: -128.1},
						transform: [35.45, -128.1, 1, 1, 0.013, -0.013, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 145,
						to: 145,
						classname: "_polar_arm2_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: 35.05, ty: -131.9},
						transform: [35.05, -131.9, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -1.1, ty: -124.15},
						transform: [-1.1, -124.15, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.996, b: -0.092, c: 0.092, d: 0.996, tx: -3.25, ty: -123.6},
						transform: [-3.25, -123.6, 1, 1, 0.092, -0.092, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 26,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -1.1, ty: -124.15},
						transform: [-1.1, -124.15, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 35,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.996, b: -0.092, c: 0.092, d: 0.996, tx: -3.25, ty: -123.6},
						transform: [-3.25, -123.6, 1, 1, 0.092, -0.092, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 36,
						to: 55,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -1.1, ty: -124.15},
						transform: [-1.1, -124.15, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 56,
						to: 61,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -1.1, ty: -124.15},
						transform: [-1.1, -124.15, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 75,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -1.9, ty: -124.15},
						transform: [-1.9, -124.15, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 76,
						to: 87,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -1.9, ty: -124.15},
						transform: [-1.9, -124.15, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.471, 0], [0.718, 0.669], [1, 1], ],
						}
					},
					{
						from: 88,
						to: 93,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0.005, c: -0.005, d: 1, tx: 1.2, ty: -125.4},
						transform: [1.2, -125.4, 1, 1, -0.005, 0.005, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.512, 0], [0.633, 1], [1, 1], ],
						}
					},
					{
						from: 94,
						to: 97,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1.019, b: 0.018, c: -0.016, d: 0.955, tx: 1.6, ty: -121.55},
						transform: [1.6, -121.55, 1.019, 0.955, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.744, 0.548], [1, 1], ],
						}
					},
					{
						from: 98,
						to: 98,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0.005, c: -0.005, d: 1, tx: 1.2, ty: -128.65},
						transform: [1.2, -128.65, 1, 1, -0.005, 0.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.47, 0], [0.744, 0.548], [1, 1], ],
						}
					},
					{
						from: 99,
						to: 102,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1, b: -0.026, c: 0.026, d: 1, tx: 0.5, ty: -130.7},
						transform: [0.5, -130.7, 1, 1, 0.026, -0.026, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.76, 0.3], [1, 1], ],
						}
					},
					{
						from: 103,
						to: 105,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.75, ty: -124.1},
						transform: [1.75, -124.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 106,
						to: 108,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.75, ty: -119.9},
						transform: [1.75, -119.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 109,
						to: 117,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.75, ty: -124.1},
						transform: [1.75, -124.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 118,
						to: 126,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1.006, b: -0.039, c: 0.038, d: 0.991, tx: -0.35, ty: -121.3},
						transform: [-0.35, -121.3, 1.007, 0.991, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 127,
						to: 135,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.75, ty: -124.1},
						transform: [1.75, -124.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 136,
						to: 144,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1.006, b: -0.039, c: 0.038, d: 0.991, tx: -0.35, ty: -121.3},
						transform: [-0.35, -121.3, 1.007, 0.991, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 145,
						to: 145,
						classname: "_polar_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.75, ty: -124.1},
						transform: [1.75, -124.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
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
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 27.25, ty: -128.9},
						transform: [27.25, -128.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 1.009, b: -0.001, c: 0.001, d: 1, tx: 20.6, ty: -129.8},
						transform: [20.6, -129.8, 1.009, 1, 0.001, -0.001, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 26,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 27.25, ty: -128.9},
						transform: [27.25, -128.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 35,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 1.009, b: -0.001, c: 0.001, d: 1, tx: 20.6, ty: -129.8},
						transform: [20.6, -129.8, 1.009, 1, 0.001, -0.001, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 36,
						to: 55,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 27.25, ty: -128.9},
						transform: [27.25, -128.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 56,
						to: 61,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 27.25, ty: -128.9},
						transform: [27.25, -128.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 75,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.647, b: -0.763, c: 0.763, d: 0.647, tx: 31.8, ty: -124.1},
						transform: [31.8, -124.1, 1, 1, 0.867, -0.867, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 76,
						to: 87,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.647, b: -0.763, c: 0.763, d: 0.647, tx: 31.8, ty: -124.1},
						transform: [31.8, -124.1, 1, 1, 0.867, -0.867, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.471, 0], [0.718, 0.669], [1, 1], ],
						}
					},
					{
						from: 88,
						to: 93,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.976, b: 0.213, c: -0.213, d: 0.976, tx: 33.4, ty: -122.2},
						transform: [33.4, -122.2, 0.999, 0.999, -0.215, 0.215, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.512, 0], [0.633, 1], [1, 1], ],
						}
					},
					{
						from: 94,
						to: 97,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.915, b: 0.403, c: -0.403, d: 0.915, tx: 31.2, ty: -116.2},
						transform: [31.2, -116.2, 1, 1, -0.415, 0.415, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.744, 0.548], [1, 1], ],
						}
					},
					{
						from: 98,
						to: 98,
						classname: "_polar_arm_box1_x",
						instancename: "",
						matrix: {a: 0.976, b: 0.213, c: -0.213, d: 0.976, tx: 33.4, ty: -125.45},
						transform: [33.4, -125.45, 0.999, 0.999, -0.215, 0.215, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.47, 0], [0.744, 0.548], [1, 1], ],
						}
					},
					{
						from: 99,
						to: 102,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 1, b: -0.026, c: 0.026, d: 1, tx: -3, ty: -180.55},
						transform: [-3, -180.55, 1, 1, 0.026, -0.026, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.76, 0.3], [1, 1], ],
						}
					},
					{
						from: 103,
						to: 105,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.15, ty: -172.9},
						transform: [-3.15, -172.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 106,
						to: 108,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.15, ty: -168.7},
						transform: [-3.15, -168.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 109,
						to: 117,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.15, ty: -172.9},
						transform: [-3.15, -172.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 118,
						to: 126,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 0.999, b: -0.039, c: 0.039, d: 0.999, tx: -7.2, ty: -171.45},
						transform: [-7.2, -171.45, 1, 1, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 127,
						to: 135,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.15, ty: -172.9},
						transform: [-3.15, -172.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 136,
						to: 144,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 0.999, b: -0.039, c: 0.039, d: 0.999, tx: -7.2, ty: -171.45},
						transform: [-7.2, -171.45, 1, 1, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 145,
						to: 145,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.15, ty: -172.9},
						transform: [-3.15, -172.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "face1",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.95, ty: -172.6},
						transform: [-13.95, -172.6, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 0.996, b: -0.092, c: 0.092, d: 0.996, tx: -17.65, ty: -172.3},
						transform: [-17.65, -172.3, 1, 1, 0.092, -0.092, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 26,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.95, ty: -172.6},
						transform: [-13.95, -172.6, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 35,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 0.996, b: -0.092, c: 0.092, d: 0.996, tx: -17.65, ty: -172.3},
						transform: [-17.65, -172.3, 1, 1, 0.092, -0.092, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 36,
						to: 55,
						classname: "_polar_face1",
						instancename: "face",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.95, ty: -172.6},
						transform: [-13.95, -172.6, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 56,
						to: 61,
						classname: "_polar_facelook",
						instancename: "face",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -13.95, ty: -172.6},
						transform: [-13.95, -172.6, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 75,
						classname: "_polar_facelook",
						instancename: "face",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -3.6, ty: -174.5},
						transform: [-3.6, -174.5, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 76,
						to: 87,
						classname: "_polar_facelook",
						instancename: "face",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: -3.6, ty: -174.5},
						transform: [-3.6, -174.5, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.471, 0], [0.718, 0.669], [1, 1], ],
						}
					},
					{
						from: 88,
						to: 93,
						classname: "_polar_facelook",
						instancename: "face",
						matrix: {a: 1, b: 0.005, c: -0.005, d: 1, tx: 2.2, ty: -177.85},
						transform: [2.2, -177.85, 1, 1, -0.005, 0.005, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.512, 0], [0.633, 1], [1, 1], ],
						}
					},
					{
						from: 94,
						to: 97,
						classname: "_polar_facelook",
						instancename: "face",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: 1.35, ty: -171.85},
						transform: [1.35, -171.85, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.744, 0.548], [1, 1], ],
						}
					},
					{
						from: 98,
						to: 98,
						classname: "_polar_facelook",
						instancename: "face",
						matrix: {a: 1, b: 0.005, c: -0.005, d: 1, tx: 2.2, ty: -181.1},
						transform: [2.2, -181.1, 1, 1, -0.005, 0.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.47, 0], [0.744, 0.548], [1, 1], ],
						}
					},
					{
						from: 99,
						to: 102,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 1, b: -0.026, c: 0.026, d: 1, tx: 30.25, ty: -217.25},
						transform: [30.25, -217.25, 1, 1, 0.026, -0.026, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.76, 0.3], [1, 1], ],
						}
					},
					{
						from: 103,
						to: 105,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 31.25, ty: -210.5},
						transform: [31.25, -210.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 106,
						to: 108,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 31.25, ty: -206.3},
						transform: [31.25, -206.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 109,
						to: 117,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 31.25, ty: -210.5},
						transform: [31.25, -210.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 118,
						to: 126,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.039, c: 0.039, d: 0.999, tx: 24, ty: -208.7},
						transform: [24, -208.7, 1, 1, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 127,
						to: 135,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 31.25, ty: -210.5},
						transform: [31.25, -210.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 136,
						to: 144,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.039, c: 0.039, d: 0.999, tx: 24, ty: -208.7},
						transform: [24, -208.7, 1, 1, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 145,
						to: 145,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 31.25, ty: -210.5},
						transform: [31.25, -210.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 24.3, ty: -210.65},
						transform: [24.3, -210.65, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.959, b: -0.283, c: 0.283, d: 0.959, tx: 16.95, ty: -211},
						transform: [16.95, -211, 1, 1, 0.287, -0.287, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 26,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 24.3, ty: -210.65},
						transform: [24.3, -210.65, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 35,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.959, b: -0.283, c: 0.283, d: 0.959, tx: 16.95, ty: -211},
						transform: [16.95, -211, 1, 1, 0.287, -0.287, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 36,
						to: 55,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 24.3, ty: -210.65},
						transform: [24.3, -210.65, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 56,
						to: 61,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 24.3, ty: -210.65},
						transform: [24.3, -210.65, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 75,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 25.65, ty: -210.15},
						transform: [25.65, -210.15, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 76,
						to: 87,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 25.65, ty: -210.15},
						transform: [25.65, -210.15, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.471, 0], [0.718, 0.669], [1, 1], ],
						}
					},
					{
						from: 88,
						to: 93,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 1, b: 0.005, c: -0.005, d: 1, tx: 34.9, ty: -207.8},
						transform: [34.9, -207.8, 1, 1, -0.005, 0.005, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.512, 0], [0.633, 1], [1, 1], ],
						}
					},
					{
						from: 94,
						to: 97,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: 38.45, ty: -200.3},
						transform: [38.45, -200.3, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.744, 0.548], [1, 1], ],
						}
					},
					{
						from: 98,
						to: 98,
						classname: "_polar_ear1_x",
						instancename: "",
						matrix: {a: 1, b: 0.005, c: -0.005, d: 1, tx: 34.9, ty: -211.05},
						transform: [34.9, -211.05, 1, 1, -0.005, 0.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.47, 0], [0.744, 0.548], [1, 1], ],
						}
					},
					{
						from: 99,
						to: 102,
						classname: "_polar_polar_bat_x",
						instancename: "weapon",
						matrix: {a: 0.945, b: 0.325, c: -0.325, d: 0.945, tx: 49.45, ty: -165.45},
						transform: [49.45, -165.45, 1, 1, -0.331, 0.331, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.76, 0.3], [1, 1], ],
						}
					},
					{
						from: 103,
						to: 105,
						classname: "_polar_polar_bat_x",
						instancename: "weapon",
						matrix: {a: 0.903, b: 0.43, c: -0.43, d: 0.903, tx: 48.95, ty: -128.95},
						transform: [48.95, -128.95, 1, 1, -0.444, 0.444, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 106,
						to: 108,
						classname: "_polar_polar_bat_x",
						instancename: "weapon",
						matrix: {a: 0.929, b: 0.37, c: -0.37, d: 0.929, tx: 49.1, ty: -127.85},
						transform: [49.1, -127.85, 1, 1, -0.379, 0.379, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 109,
						to: 117,
						classname: "_polar_polar_bat_x",
						instancename: "weapon",
						matrix: {a: 0.903, b: 0.43, c: -0.43, d: 0.903, tx: 48.95, ty: -128.95},
						transform: [48.95, -128.95, 1, 1, -0.444, 0.444, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 118,
						to: 126,
						classname: "_polar_polar_bat_x",
						instancename: "weapon",
						matrix: {a: 0.83, b: 0.558, c: -0.558, d: 0.83, tx: 46.35, ty: -126.65},
						transform: [46.35, -126.65, 1, 1, -0.592, 0.592, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 127,
						to: 135,
						classname: "_polar_polar_bat_x",
						instancename: "weapon",
						matrix: {a: 0.903, b: 0.43, c: -0.43, d: 0.903, tx: 48.95, ty: -128.95},
						transform: [48.95, -128.95, 1, 1, -0.444, 0.444, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 136,
						to: 144,
						classname: "_polar_polar_bat_x",
						instancename: "weapon",
						matrix: {a: 0.83, b: 0.558, c: -0.558, d: 0.83, tx: 46.35, ty: -126.65},
						transform: [46.35, -126.65, 1, 1, -0.592, 0.592, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 145,
						to: 145,
						classname: "_polar_polar_bat_x",
						instancename: "weapon",
						matrix: {a: 0.903, b: 0.43, c: -0.43, d: 0.903, tx: 48.95, ty: -128.95},
						transform: [48.95, -128.95, 1, 1, -0.444, 0.444, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 26,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 35,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 36,
						to: 55,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 56,
						to: 61,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 75,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 76,
						to: 87,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.471, 0], [0.718, 0.669], [1, 1], ],
						}
					},
					{
						from: 88,
						to: 93,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.053, c: 0.039, d: 1, tx: 22.6, ty: -49.65},
						transform: [22.6, -49.65, 0.999, 1.001, 0.039, -0.053, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.512, 0], [0.633, 1], [1, 1], ],
						}
					},
					{
						from: 94,
						to: 97,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.066, c: 0.047, d: 1, tx: 22.65, ty: -49.85},
						transform: [22.65, -49.85, 0.999, 1.001, 0.047, -0.066, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.744, 0.548], [1, 1], ],
						}
					},
					{
						from: 98,
						to: 98,
						classname: "_polar_leg5_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.113, c: 0.039, d: 1, tx: 22.65, ty: -51.3},
						transform: [22.65, -51.3, 1.002, 1.001, 0.039, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.47, 0], [0.744, 0.548], [1, 1], ],
						}
					},
					{
						from: 99,
						to: 102,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: 0.679, b: -0.734, c: 0.734, d: 0.679, tx: 21.05, ty: -174.1},
						transform: [21.05, -174.1, 1, 1, 0.824, -0.824, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.76, 0.3], [1, 1], ],
						}
					},
					{
						from: 103,
						to: 105,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.4, ty: -131.2},
						transform: [21.4, -131.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 106,
						to: 108,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.065, c: 0.065, d: 0.998, tx: 21.5, ty: -128.3},
						transform: [21.5, -128.3, 1, 1, 0.065, -0.065, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 109,
						to: 117,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.4, ty: -131.2},
						transform: [21.4, -131.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 118,
						to: 126,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 18.85, ty: -128.65},
						transform: [18.85, -128.65, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 127,
						to: 135,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.4, ty: -131.2},
						transform: [21.4, -131.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 136,
						to: 144,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 18.85, ty: -128.65},
						transform: [18.85, -128.65, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 145,
						to: 145,
						classname: "_polar_arm1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.4, ty: -131.2},
						transform: [21.4, -131.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 77,
					},
					{
						from: 78,
						to: 98,
					},
					{
						from: 99,
						to: 102,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.121, c: 0.121, d: 0.993, tx: 71.55, ty: -179.85},
						transform: [71.55, -179.85, 1, 1, 0.122, -0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.76, 0.3], [1, 1], ],
						}
					},
					{
						from: 103,
						to: 105,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: 75.25, ty: -149.75},
						transform: [75.25, -149.75, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 106,
						to: 108,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 0.987, b: -0.16, c: 0.16, d: 0.987, tx: 74, ty: -150.35},
						transform: [74, -150.35, 1, 1, 0.161, -0.161, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 109,
						to: 117,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: 75.25, ty: -149.75},
						transform: [75.25, -149.75, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 118,
						to: 126,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 1, b: -0.013, c: 0.013, d: 1, tx: 76.95, ty: -142.6},
						transform: [76.95, -142.6, 1, 1, 0.013, -0.013, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 127,
						to: 135,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: 75.25, ty: -149.75},
						transform: [75.25, -149.75, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 136,
						to: 144,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 1, b: -0.013, c: 0.013, d: 1, tx: 76.95, ty: -142.6},
						transform: [76.95, -142.6, 1, 1, 0.013, -0.013, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 145,
						to: 145,
						classname: "_polar_hand1_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: 75.25, ty: -149.75},
						transform: [75.25, -149.75, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "tail1_x",
				keys: [
					{
						from: 0,
						to: 98,
					},
					{
						from: 99,
						to: 102,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1.006, b: -0.008, c: -0.187, d: 1.077, tx: 24.4, ty: -55.95},
						transform: [24.4, -55.95, 1.006, 1.093, -0.171, -0.008, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.427, 0], [0.76, 0.3], [1, 1], ],
						}
					},
					{
						from: 103,
						to: 105,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.4], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 106,
						to: 108,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.06, d: 0.918, tx: 24.15, ty: -45.2},
						transform: [24.15, -45.2, 1, 0.92, -0.065, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 109,
						to: 117,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 118,
						to: 126,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.033, d: 0.968, tx: 23.1, ty: -47},
						transform: [23.1, -47, 1, 0.968, -0.034, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 127,
						to: 135,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 136,
						to: 144,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.033, d: 0.968, tx: 23.1, ty: -47},
						transform: [23.1, -47, 1, 0.968, -0.034, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
					{
						from: 145,
						to: 145,
						classname: "_polar_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.95, ty: -48.3},
						transform: [21.95, -48.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.506, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "tuto_right",
				keys: [
					{
						from: 0,
						to: 108,
					},
					{
						from: 109,
						to: 126,
						classname: "_polar_tuto_right",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -144.2, ty: -87.65},
						transform: [-144.2, -87.65, 1, 1, 0, 3.142, NaN],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.387], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 127,
						to: 145,
						classname: "_polar_tuto_right",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -144.2, ty: -87.65},
						transform: [-144.2, -87.65, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "tuto_right",
				keys: [
					{
						from: 0,
						to: 108,
					},
					{
						from: 109,
						to: 126,
						classname: "_polar_tuto_right",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 140.9, ty: -87.65},
						transform: [140.9, -87.65, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.387], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 127,
						to: 145,
						classname: "_polar_tuto_right",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 140.9, ty: -87.65},
						transform: [140.9, -87.65, 1, 1, 0, 0, 0],
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
						to: 126,
					},
					{
						from: 127,
						to: 127,
					},
					{
						from: 128,
						to: 144,
					},
					{
						from: 145,
						to: 145,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_polar_rombo": {
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
						to: 14,
						classname: "_polar_romboanima_1",
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
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_polar_romboanima_2",
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
						to: 14,
						classname: "_polar_romboanima_3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_weapon_item_gfx": {
		type: "movieclip",
		fps: 30,
		totalFrames: 6,
		labels: {axe: {from:0, to:0}, mace: {from:1, to:1}, gavel: {from:2, to:2}, saw: {from:3, to:3}, bat: {from:4, to:4}, hammer: {from:5, to:5}, },
		layers: [
			{
				name: "Layer 10",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_weaponitem_hacha_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.75, ty: 50.45},
						transform: [-0.75, 50.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_polar_weaponitem_maze_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.75, ty: 50.45},
						transform: [-0.75, 50.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_polar_sawgroup",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 7.4},
						transform: [0, 7.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_polar_weaponitem_bat_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.75, ty: 50.45},
						transform: [-0.75, 50.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_polar_weaponitem_hammer_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.75, ty: 50.45},
						transform: [-0.75, 50.45, 1, 1, 0, 0, 0],
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
						to: 5,
						classname: "_polar_bodybox",
						instancename: "bound",
						matrix: {a: 2.264, b: 0, c: 0, d: 3.566, tx: 0, ty: 0},
						transform: [0, 0, 2.264, 3.566, 0, 0, 0],
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
					{
						from: 5,
						to: 5,
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
					{
						from: 5,
						to: 5,
					},
				]
			},
		]
	},
	"_polar_saw_fly": {
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
						classname: "_polar_saw_fly_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0.55},
						transform: [0, 0.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_polar_saw_fly_1_x",
						instancename: "",
						matrix: {a: -0.259, b: 0.966, c: -0.966, d: -0.259, tx: 0, ty: 0.5},
						transform: [0, 0.5, 1, 1, -1.833, 1.833, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_polar_saw_fly_1_x",
						instancename: "",
						matrix: {a: -0.259, b: -0.966, c: 0.966, d: -0.259, tx: 0, ty: 0.55},
						transform: [0, 0.55, 1, 1, 1.833, -1.833, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_polar_saw_fly_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0.55},
						transform: [0, 0.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_polar_saw_fly_1_x",
						instancename: "",
						matrix: {a: -0.701, b: 0.713, c: -0.713, d: -0.701, tx: 0, ty: 0.5},
						transform: [0, 0.5, 1, 1, -2.347, 2.347, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_polar_saw_fly_1_x",
						instancename: "",
						matrix: {a: -0.259, b: -0.966, c: 0.966, d: -0.259, tx: 0, ty: 0.55},
						transform: [0, 0.55, 1, 1, 1.833, -1.833, NaN],
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
						classname: "_polar_lines",
						instancename: "",
						matrix: {a: 1.028, b: 0, c: 0, d: 1.028, tx: 0, ty: 0},
						transform: [0, 0, 1.028, 1.028, 0, 0, 0],
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
						classname: "_polar_lines",
						instancename: "",
						matrix: {a: -0.095, b: 1.023, c: -1.023, d: -0.095, tx: 0, ty: 0},
						transform: [0, 0, 1.028, 1.028, -1.663, 1.663, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_saw1_x": {
		type: "bitmap",
		asset: "_polar_saw1_x",
		scale: 1,
		position: [-36.35, -45.95],
	},
	"_polar_saw_wreck_x": {
		type: "bitmap",
		asset: "_polar_saw_wreck_x",
		scale: 1,
		position: [-38.15, -26.3],
	},
	"_polar_bodybox": {
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
						classname: "_polar_bodybox_x",
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
	"_polar_hammer_wreck": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "WEAPON_HAMMER_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_hammer_part1",
						instancename: "WEAPON_HAMMER_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.4, ty: -88.2},
						transform: [-3.4, -88.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "stick_part_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_stick_part_2",
						instancename: "WEAPON_STICK_2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.55, ty: -52.7},
						transform: [-0.55, -52.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "stick_part_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_stick_part_1",
						instancename: "WEAPON_STICK_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.1, ty: -3.35},
						transform: [-1.1, -3.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "NUT_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_nutsandbolts_nutsmall",
						instancename: "WEAPON_NUT_1",
						matrix: {a: -0.463, b: 0.887, c: -0.887, d: -0.463, tx: -0.25, ty: -83.05},
						transform: [-0.25, -83.05, 1, 1, -2.052, 2.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_axe_wreck": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "axe_part1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_axe_part1",
						instancename: "WEAPON_AXE_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.4, ty: -88.2},
						transform: [-3.4, -88.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "stick_part_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_stick_part_2",
						instancename: "WEAPON_STICK_2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.55, ty: -52.7},
						transform: [-0.55, -52.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "stick_part_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_stick_part_1",
						instancename: "WEAPON_STICK_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.1, ty: -3.35},
						transform: [-1.1, -3.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "NUT_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_nutsandbolts_nutsmall",
						instancename: "WEAPON_NUT_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.55, ty: -96.25},
						transform: [1.55, -96.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "NUT_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_nutsandbolts_nutsmall",
						instancename: "WEAPON_NUT_1",
						matrix: {a: -0.463, b: 0.887, c: -0.887, d: -0.463, tx: -0.25, ty: -83.05},
						transform: [-0.25, -83.05, 1, 1, -2.052, 2.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_saw_wreck": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "WEAPON_SAW_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_saw_part_1",
						instancename: "WEAPON_SAW_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.7, ty: -33.3},
						transform: [0.7, -33.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "WEAPON_SAW_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_saw_part_2",
						instancename: "WEAPON_SAW_2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: -0.05},
						transform: [-0.2, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "WEAPON_SAW_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_saw_part_3",
						instancename: "WEAPON_SAW_3",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.1, ty: 33},
						transform: [0.1, 33, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_mace_wreck": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "axe_part1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_mace_part1",
						instancename: "WEAPON_MACE_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.4, ty: -88.2},
						transform: [-3.4, -88.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "stick_part_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_stick_part_2",
						instancename: "WEAPON_STICK_2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.55, ty: -52.7},
						transform: [-0.55, -52.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "stick_part_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_stick_part_1",
						instancename: "WEAPON_STICK_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.1, ty: -3.35},
						transform: [-1.1, -3.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "NUT_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_nutsandbolts_nutsmall",
						instancename: "WEAPON_NUT_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.8, ty: -69.2},
						transform: [-3.8, -69.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_glasses_wreck": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "WEAPON_SHOP_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_shop_part1",
						instancename: "WEAPON_SHOP_2",
						matrix: {a: 0.822, b: -0.569, c: 0.569, d: 0.822, tx: -8.1, ty: -81.1},
						transform: [-8.1, -81.1, 1, 1, 0.606, -0.606, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "WEAPON_SHOP_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_shop_part2",
						instancename: "WEAPON_SHOP_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.7, ty: -5.35},
						transform: [0.7, -5.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_bat_wreck": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "WEAPON_STICK_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_bat_part_1",
						instancename: "WEAPON_BAT_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.55, ty: -9.6},
						transform: [-1.55, -9.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "WEAPON_STICK_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_bat_part_2",
						instancename: "WEAPON_BAT_2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.55, ty: -104.6},
						transform: [-1.55, -104.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_vacuum_idle_sane": {
		type: "movieclip",
		fps: 30,
		totalFrames: 8,
		labels: {},
		layers: [
			{
				name: "Layer 7",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_polar_glowshadow",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: 12.3},
						transform: [-0.2, 12.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_polar_glowshadow",
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
						classname: "_polar_veleta_x",
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
						classname: "_polar_veleta_x",
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
						classname: "_polar_veleta_x",
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
						classname: "_polar_vacuum_base",
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
						classname: "_polar_vacuum_base",
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
						classname: "_polar_vacuum_base",
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
	"_polar_vacuum_idle_lastlife": {
		type: "movieclip",
		fps: 30,
		totalFrames: 8,
		labels: {},
		layers: [
			{
				name: "Layer 7",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_polar_glowshadow",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: 12.3},
						transform: [-0.2, 12.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_polar_glowshadow",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: 12.3},
						transform: [-0.2, 12.3, 1, 1, 0, 0, 0],
						alpha: 0.43,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_polar_glowshadow",
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
						classname: "_polar_veleta_lastlife_x",
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
						classname: "_polar_veleta_lastlife_x",
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
						classname: "_polar_veleta_lastlife_x",
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
						classname: "_polar_vacuum_base_lastlife",
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
						classname: "_polar_vacuum_base_lastlife",
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
						classname: "_polar_vacuum_base_lastlife",
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
	"_polar_vacuum_hit": {
		type: "movieclip",
		fps: 30,
		totalFrames: 56,
		labels: {},
		layers: [
			{
				name: "Layer 7",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_polar_glowshadow",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: 12.3},
						transform: [-0.2, 12.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.322], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_glowshadow",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: 12.3},
						transform: [-0.2, 12.3, 1, 1, 0, 0, 0],
						alpha: 0.45,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.8, 0.51], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_polar_glowshadow",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: 12.3},
						transform: [-0.2, 12.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.435], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_polar_glowshadow",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: 12.3},
						transform: [-0.2, 12.3, 1, 1, 0, 0, 0],
						alpha: 0.45,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.8, 0.51], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_polar_glowshadow",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: 12.3},
						transform: [-0.2, 12.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 55,
					},
				]
			},
			{
				name: "Layer 8",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_polar_veleta_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 45.05, ty: -39.3},
						transform: [45.05, -39.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.322], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_polar_veleta_x",
						instancename: "",
						matrix: {a: 0.99, b: 0.143, c: -0.198, d: 0.982, tx: 53.45, ty: -49.5},
						transform: [53.45, -49.5, 1, 1.002, -0.199, 0.143, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.8, 0.51], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_polar_veleta_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 45.05, ty: -39.3},
						transform: [45.05, -39.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.435], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_polar_veleta_x",
						instancename: "",
						matrix: {a: 1, b: 0.009, c: -0.009, d: 1, tx: 45.25, ty: -42.85},
						transform: [45.25, -42.85, 1, 1, -0.009, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0], [0.862, 0.551], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_polar_veleta_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 45.05, ty: -39.3},
						transform: [45.05, -39.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 55,
					},
				]
			},
			{
				name: "Layer 6",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_polar_vacuum_base",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.322], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_polar_vacuum_base",
						instancename: "",
						matrix: {a: 0.994, b: -0.113, c: 0.111, d: 0.972, tx: 0, ty: -12.7},
						transform: [0, -12.7, 1, 0.978, 0.113, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.8, 0.51], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_polar_vacuum_base",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.435], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_polar_vacuum_base",
						instancename: "",
						matrix: {a: 1, b: 0.009, c: -0.009, d: 1, tx: -0.05, ty: -3.95},
						transform: [-0.05, -3.95, 1, 1, -0.009, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0], [0.862, 0.551], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_polar_vacuum_base",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 55,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 13,
					},
					{
						from: 14,
						to: 55,
						classname: "_polar_vacuum_idle_sane",
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
	"_polar_vacuum_part_4": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 16",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_vacuum_part_4_lastlife_x",
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
						classname: "_polar_bodybox",
						instancename: "bound",
						matrix: {a: 2.033, b: 0, c: 0, d: 0.576, tx: 0, ty: 0},
						transform: [0, 0, 2.033, 0.576, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_vacuum_part_3": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 16",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_vacuum_part_3_x",
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
						classname: "_polar_bodybox",
						instancename: "bound",
						matrix: {a: 2.168, b: 0, c: 0, d: 0.575, tx: 0, ty: 0},
						transform: [0, 0, 2.168, 0.575, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_stuff_vacuum_part_2": {
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
						classname: "_polar_veleta_wreck_1_x",
						instancename: "",
						matrix: {a: 0.988, b: -0.156, c: 0.156, d: 0.988, tx: -12.55, ty: 1.05},
						transform: [-12.55, 1.05, 1, 1, 0.157, -0.157, NaN],
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
						classname: "_polar_bodybox",
						instancename: "bound",
						matrix: {a: 0.634, b: 0, c: 0, d: 0.353, tx: 0.05, ty: 0.05},
						transform: [0.05, 0.05, 0.634, 0.353, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_stuff_vacuum_part_1": {
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
						classname: "_polar_veleta_wreck_1_x",
						instancename: "",
						matrix: {a: -0.988, b: -0.156, c: -0.156, d: 0.988, tx: 9.1, ty: 1.05},
						transform: [9.1, 1.05, 1, 1, -0.157, -2.985, NaN],
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
						classname: "_polar_bodybox",
						instancename: "bound",
						matrix: {a: 0.619, b: 0, c: 0, d: 0.345, tx: 0, ty: 0},
						transform: [0, 0, 0.619, 0.345, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_leg1_x": {
		type: "bitmap",
		asset: "_polar_leg1_x",
		scale: 1,
		position: [-26.85, -26.45],
	},
	"_polar_tail1_x": {
		type: "bitmap",
		asset: "_polar_tail1_x",
		scale: 1,
		position: [-12.15, -16.15],
	},
	"_polar_ear2_x": {
		type: "bitmap",
		asset: "_polar_ear2_x",
		scale: 1,
		position: [-9.85, -11.5],
	},
	"_polar_arm_box2_x": {
		type: "bitmap",
		asset: "_polar_arm_box2_x",
		scale: 1,
		position: [-47.25, -50.95],
	},
	"_polar_body1_x": {
		type: "bitmap",
		asset: "_polar_body1_x",
		scale: 1,
		position: [-56.9, -94.75],
	},
	"_polar_leg5_x": {
		type: "bitmap",
		asset: "_polar_leg5_x",
		scale: 1,
		position: [-29.15, -21.95],
	},
	"_polar_mainmenu_tote_x": {
		type: "bitmap",
		asset: "_polar_mainmenu_tote_x",
		scale: 1,
		position: [-36.45, -18.15],
	},
	"_polar_mainmenu_toteup_x": {
		type: "bitmap",
		asset: "_polar_mainmenu_toteup_x",
		scale: 1,
		position: [-12.85, -38.85],
	},
	"_polar_arm_box1_x": {
		type: "bitmap",
		asset: "_polar_arm_box1_x",
		scale: 1,
		position: [-32, -55.6],
	},
	"_polar_mainmenu_toteup2_x": {
		type: "bitmap",
		asset: "_polar_mainmenu_toteup2_x",
		scale: 1,
		position: [-16, -26.3],
	},
	"_polar_face1_glasses": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {loop: {from:1, to:17}, },
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_glasses_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.9, ty: -13.35},
						transform: [6.9, -13.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.455, 0], [0.545, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_glasses_x",
						instancename: "",
						matrix: {a: 0.957, b: 0, c: 0, d: 1, tx: 4.7, ty: -13.35},
						transform: [4.7, -13.35, 0.957, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.455, 0], [0.545, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_glasses_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.9, ty: -13.35},
						transform: [6.9, -13.35, 1, 1, 0, 0, 0],
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
						to: 8,
						classname: "_polar_patagafa_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 41.1, ty: -11.55},
						transform: [41.1, -11.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.465, 0], [0.622, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_patagafa_x",
						instancename: "",
						matrix: {a: 1.097, b: 0, c: 0, d: 1, tx: 38.55, ty: -11.6},
						transform: [38.55, -11.6, 1.097, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.465, 0], [0.622, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_patagafa_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 41.1, ty: -11.55},
						transform: [41.1, -11.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "morro_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_morro_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.6, ty: 0.1},
						transform: [-6.6, 0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.367, 0], [0.699, 0.349], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_morro_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.06, d: 1, tx: -7.3, ty: 0.1},
						transform: [-7.3, 0.1, 1, 1.002, 0.06, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_morro_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.6, ty: 0.1},
						transform: [-6.6, 0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "nose1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_nose1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.4, ty: -6.75},
						transform: [0.4, -6.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.367, 0], [0.699, 0.349], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_nose1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.7, ty: -7.15},
						transform: [-2.7, -7.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_nose1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.4, ty: -6.75},
						transform: [0.4, -6.75, 1, 1, 0, 0, 0],
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
						to: 8,
						classname: "_polar_mouth1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.85, ty: 12.15},
						transform: [0.85, 12.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.367, 0], [0.699, 0.349], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_mouth1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.6, ty: 12},
						transform: [-1.6, 12, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_mouth1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.85, ty: 12.15},
						transform: [0.85, 12.15, 1, 1, 0, 0, 0],
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
						to: 17,
					},
					{
						from: 18,
						to: 18,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_polar_ear1_x": {
		type: "bitmap",
		asset: "_polar_ear1_x",
		scale: 1,
		position: [-10.95, -10.65],
	},
	"_polar_tuto_right": {
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
						to: 12,
						classname: "_polar_tuto_key_top_base_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 8.3},
						transform: [0, 8.3, 1, 1, 0, 0, 0],
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
						classname: "_polar_tuto_key_top_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -3.1},
						transform: [0, -3.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.547, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 11,
						classname: "_polar_tuto_key_top_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0.4},
						transform: [0, 0.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.547, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_polar_tuto_key_top_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -3.1},
						transform: [0, -3.1, 1, 1, 0, 0, 0],
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
						to: 3,
						classname: "_polar_tuto_arrow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -3.1},
						transform: [0, -3.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.547, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 11,
						classname: "_polar_tuto_arrow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0.4},
						transform: [0, 0.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.547, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_polar_tuto_arrow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -3.1},
						transform: [0, -3.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_face1": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {loop: {from:1, to:17}, },
		layers: [
			{
				name: "morro_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_morro_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.6, ty: 0.1},
						transform: [-6.6, 0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.367, 0], [0.699, 0.349], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_morro_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.06, d: 1, tx: -7.3, ty: 0.1},
						transform: [-7.3, 0.1, 1, 1.002, 0.06, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_morro_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.6, ty: 0.1},
						transform: [-6.6, 0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "nose1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_nose1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.4, ty: -6.75},
						transform: [0.4, -6.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.367, 0], [0.699, 0.349], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_nose1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.7, ty: -7.15},
						transform: [-2.7, -7.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_nose1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.4, ty: -6.75},
						transform: [0.4, -6.75, 1, 1, 0, 0, 0],
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
						to: 8,
						classname: "_polar_mouth1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.85, ty: 12.15},
						transform: [0.85, 12.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.367, 0], [0.699, 0.349], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_mouth1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.6, ty: 12},
						transform: [-1.6, 12, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_mouth1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.85, ty: 12.15},
						transform: [0.85, 12.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "iris1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 16.7, ty: -12.4},
						transform: [16.7, -12.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.367, 0], [0.699, 0.349], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 13.85, ty: -12.4},
						transform: [13.85, -12.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 16.7, ty: -12.4},
						transform: [16.7, -12.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "iris1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: -0.966, b: -0.259, c: -0.259, d: 0.966, tx: -3.9, ty: -16.7},
						transform: [-3.9, -16.7, 1, 1, -0.262, -2.88, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.367, 0], [0.699, 0.349], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: -0.966, b: -0.259, c: -0.259, d: 0.966, tx: -5.1, ty: -16.7},
						transform: [-5.1, -16.7, 1, 1, -0.262, -2.88, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: -0.966, b: -0.259, c: -0.259, d: 0.966, tx: -3.9, ty: -16.7},
						transform: [-3.9, -16.7, 1, 1, -0.262, -2.88, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eyebrow1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_eyebrow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 17.2, ty: -14.1},
						transform: [17.2, -14.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.367, 0], [0.699, 0.349], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_eyebrow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.35, ty: -13.45},
						transform: [14.35, -13.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_eyebrow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 17.2, ty: -14.1},
						transform: [17.2, -14.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "etebrow2_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_etebrow2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3, ty: -18.05},
						transform: [-3, -18.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.367, 0], [0.699, 0.349], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_etebrow2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.85, ty: -17.8},
						transform: [-4.85, -17.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_etebrow2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3, ty: -18.05},
						transform: [-3, -18.05, 1, 1, 0, 0, 0],
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
						to: 17,
					},
					{
						from: 18,
						to: 18,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_polar_armpunch1_x": {
		type: "bitmap",
		asset: "_polar_armpunch1_x",
		scale: 1,
		position: [-94.6, -32.35],
	},
	"_polar_trail4_x": {
		type: "bitmap",
		asset: "_polar_trail4_x",
		scale: 1,
		position: [-12.2, -50.55],
	},
	"_polar_body2_x": {
		type: "bitmap",
		asset: "_polar_body2_x",
		scale: 1,
		position: [-70.8, -78],
	},
	"_polar_face5_x": {
		type: "bitmap",
		asset: "_polar_face5_x",
		scale: 1,
		position: [-22.9, -29.05],
	},
	"_polar_face1_x": {
		type: "bitmap",
		asset: "_polar_face1_x",
		scale: 1,
		position: [-21.85, -29.15],
	},
	"_polar_ear3_x": {
		type: "bitmap",
		asset: "_polar_ear3_x",
		scale: 1,
		position: [-10.45, -10.7],
	},
	"_polar_leg2_x": {
		type: "bitmap",
		asset: "_polar_leg2_x",
		scale: 1,
		position: [-28.9, -11.05],
	},
	"_polar_punchbox": {
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
						classname: "_polar_punchbox_x",
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
	"_polar_face6_x": {
		type: "bitmap",
		asset: "_polar_face6_x",
		scale: 1,
		position: [-24.5, -23.6],
	},
	"_polar_armpunch4_x": {
		type: "bitmap",
		asset: "_polar_armpunch4_x",
		scale: 1,
		position: [-95.85, -32.35],
	},
	"_polar_leg4_x": {
		type: "bitmap",
		asset: "_polar_leg4_x",
		scale: 1,
		position: [-34, -31.2],
	},
	"_polar_body3_x": {
		type: "bitmap",
		asset: "_polar_body3_x",
		scale: 1,
		position: [-83.5, -73.35],
	},
	"_polar_face7_x": {
		type: "bitmap",
		asset: "_polar_face7_x",
		scale: 1,
		position: [-22.9, -29.05],
	},
	"_polar_arm44_x": {
		type: "bitmap",
		asset: "_polar_arm44_x",
		scale: 1,
		position: [-23.7, -71.45],
	},
	"_polar_leg7_x": {
		type: "bitmap",
		asset: "_polar_leg7_x",
		scale: 1,
		position: [-27.9, -12.45],
	},
	"_polar_leg11_x": {
		type: "bitmap",
		asset: "_polar_leg11_x",
		scale: 1,
		position: [-26.85, -26.45],
	},
	"_polar_face22_x": {
		type: "bitmap",
		asset: "_polar_face22_x",
		scale: 1,
		position: [-25.9, -24.35],
	},
	"_polar_leg12_x": {
		type: "bitmap",
		asset: "_polar_leg12_x",
		scale: 1,
		position: [-61.35, -30.45],
	},
	"_polar_army1_x": {
		type: "bitmap",
		asset: "_polar_army1_x",
		scale: 1,
		position: [-24.2, -37.95],
	},
	"_polar_face_hurt_axe": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {},
		layers: [
			{
				name: "eyebrow1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_eyebrowhurt_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 17.2, ty: -14.1},
						transform: [17.2, -14.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.3], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_eyebrowhurt_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 17.2, ty: -14.1},
						transform: [17.2, -14.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.789, 0.3], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_eyebrowhurt_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 17.2, ty: -14.1},
						transform: [17.2, -14.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.478, 0], [0.789, 0.3], [1, 1], ],
						}
					},
				]
			},
			{
				name: "etebrow2_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_eyebrowhurt_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -17.75},
						transform: [-2.1, -17.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.3], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_eyebrowhurt_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -17.75},
						transform: [-2.1, -17.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.789, 0.3], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_eyebrowhurt_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -17.75},
						transform: [-2.1, -17.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.478, 0], [0.789, 0.3], [1, 1], ],
						}
					},
				]
			},
			{
				name: "morro_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_morro_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.042, tx: -6.6, ty: 0.6},
						transform: [-6.6, 0.6, 1, 1.042, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.3], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_morro_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.844, tx: -5.8, ty: -5},
						transform: [-5.8, -5, 1, 0.844, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.789, 0.3], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_morro_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.042, tx: -6.6, ty: 0.6},
						transform: [-6.6, 0.6, 1, 1.042, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.478, 0], [0.789, 0.3], [1, 1], ],
						}
					},
				]
			},
			{
				name: "nose1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_nose1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.857, tx: -0.45, ty: -9.65},
						transform: [-0.45, -9.65, 1, 0.857, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.3], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_nose1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.857, tx: -1.6, ty: -13.35},
						transform: [-1.6, -13.35, 1, 0.857, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.789, 0.3], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_nose1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.857, tx: -0.45, ty: -9.65},
						transform: [-0.45, -9.65, 1, 0.857, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.478, 0], [0.789, 0.3], [1, 1], ],
						}
					},
				]
			},
			{
				name: "mouth1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_polar_mouthhurt_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.4, ty: 10.25},
						transform: [6.4, 10.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.3], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_polar_mouthhurt_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.306, tx: 6.15, ty: 3.9},
						transform: [6.15, 3.9, 1, 1.306, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.789, 0.3], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_polar_mouthhurt_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.4, ty: 10.25},
						transform: [6.4, 10.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.478, 0], [0.789, 0.3], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_polar_arm54_x": {
		type: "bitmap",
		asset: "_polar_arm54_x",
		scale: 1,
		position: [-16.6, -22.55],
	},
	"_polar_arm_zen2_x": {
		type: "bitmap",
		asset: "_polar_arm_zen2_x",
		scale: 1,
		position: [-24.65, -26.4],
	},
	"_polar_body5_x": {
		type: "bitmap",
		asset: "_polar_body5_x",
		scale: 1,
		position: [-57.2, -84.9],
	},
	"_polar_face6": {
		type: "movieclip",
		fps: 30,
		totalFrames: 45,
		labels: {},
		layers: [
			{
				name: "morro_x",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_polar_morro8_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.6, ty: 0.1},
						transform: [-6.6, 0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 43,
						classname: "_polar_morro8_x",
						instancename: "",
						matrix: {a: 0.955, b: 0.03, c: 0, d: 1, tx: -7.1, ty: 0.45},
						transform: [-7.1, 0.45, 0.956, 1, 0, 0.032, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 44,
						to: 44,
						classname: "_polar_morro8_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.6, ty: 0.1},
						transform: [-6.6, 0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "nose1_x",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_polar_nose1_x",
						instancename: "",
						matrix: {a: 1.178, b: 0.015, c: -0.018, d: 1.41, tx: -7.5, ty: -1.35},
						transform: [-7.5, -1.35, 1.178, 1.41, -0.013, 0.013, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 43,
						classname: "_polar_nose1_x",
						instancename: "",
						matrix: {a: 0.996, b: 0.091, c: -0.091, d: 0.996, tx: -7.55, ty: -2.5},
						transform: [-7.55, -2.5, 1, 1, -0.091, 0.091, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 44,
						to: 44,
						classname: "_polar_nose1_x",
						instancename: "",
						matrix: {a: 1.178, b: 0.015, c: -0.018, d: 1.41, tx: -7.5, ty: -1.35},
						transform: [-7.5, -1.35, 1.178, 1.41, -0.013, 0.013, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eyebrow1_x",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_polar_eyebrow4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.45, ty: -10},
						transform: [14.45, -10, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 43,
						classname: "_polar_eyebrow4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 13.55, ty: -10.2},
						transform: [13.55, -10.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 44,
						to: 44,
						classname: "_polar_eyebrow4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.45, ty: -10},
						transform: [14.45, -10, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "etebrow2_x",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_polar_etebrow5_x",
						instancename: "",
						matrix: {a: 1, b: -0.03, c: 0.03, d: 1, tx: -4.4, ty: -12.95},
						transform: [-4.4, -12.95, 1, 1, 0.03, -0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 43,
						classname: "_polar_etebrow5_x",
						instancename: "",
						matrix: {a: 1, b: -0.03, c: 0.03, d: 1, tx: -4.9, ty: -12.9},
						transform: [-4.9, -12.9, 1, 1, 0.03, -0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
					{
						from: 44,
						to: 44,
						classname: "_polar_etebrow5_x",
						instancename: "",
						matrix: {a: 1, b: -0.03, c: 0.03, d: 1, tx: -4.4, ty: -12.95},
						transform: [-4.4, -12.95, 1, 1, 0.03, -0.03, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.608, 0], [0.335, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_polar_arm_zen1_x": {
		type: "bitmap",
		asset: "_polar_arm_zen1_x",
		scale: 1,
		position: [-73.7, -26.25],
	},
	"_polar_arm2_x": {
		type: "bitmap",
		asset: "_polar_arm2_x",
		scale: 1,
		position: [-15, -25.5],
	},
	"_polar_polar_weapon_stick": {
		type: "movieclip",
		fps: 30,
		totalFrames: 5,
		labels: {axe: {from:0, to:0}, mace: {from:1, to:1}, gavel: {from:2, to:2}, bat: {from:3, to:4}, hammer: {from:4, to:4}, },
		layers: [
			{
				name: "Layer 10",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_weapon_hacha1_x",
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
						classname: "_polar_weapon_maze1_x",
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
						classname: "_polar_weapon_bat1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.55, ty: 9.95},
						transform: [-0.55, 9.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_polar_weapon_hammer1_x",
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
	"_polar_arm1_x": {
		type: "bitmap",
		asset: "_polar_arm1_x",
		scale: 1,
		position: [-50.55, -27.85],
	},
	"_polar_hand1_x": {
		type: "bitmap",
		asset: "_polar_hand1_x",
		scale: 1,
		position: [-24.4, -32.2],
	},
	"_polar_arm4_x": {
		type: "bitmap",
		asset: "_polar_arm4_x",
		scale: 1,
		position: [-71.75, -21.75],
	},
	"_polar_face2_x": {
		type: "bitmap",
		asset: "_polar_face2_x",
		scale: 1,
		position: [-24.55, -26.2],
	},
	"_polar_polar_weapon_stick2": {
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
						classname: "_polar_weapon_hacha2_x",
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
						classname: "_polar_weapon_maze2_x",
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
						classname: "_polar_weapon_bat1_x",
						instancename: "",
						matrix: {a: -0.996, b: -0.084, c: -0.079, d: 0.945, tx: -1.35, ty: 8.5},
						transform: [-1.35, 8.5, 1, 0.948, -0.084, -3.058, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_polar_weapon_hammer2_x",
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
	"_polar_arm3_x": {
		type: "bitmap",
		asset: "_polar_arm3_x",
		scale: 1,
		position: [-79, -32.3],
	},
	"_polar_trail2_x": {
		type: "bitmap",
		asset: "_polar_trail2_x",
		scale: 1,
		position: [-32.5, -26.75],
	},
	"_polar_arm5_x": {
		type: "bitmap",
		asset: "_polar_arm5_x",
		scale: 1,
		position: [-15, -24.25],
	},
	"_polar_face3_x": {
		type: "bitmap",
		asset: "_polar_face3_x",
		scale: 1,
		position: [-19.95, -17.8],
	},
	"_polar_polar_weapon_stick3": {
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
						classname: "_polar_weapon_hacha3_x",
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
						classname: "_polar_weapon_maze3_x",
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
						classname: "_polar_weapon_bat1_x",
						instancename: "",
						matrix: {a: 0.992, b: 0.13, c: -0.122, d: 0.936, tx: -5.55, ty: 34.2},
						transform: [-5.55, 34.2, 1, 0.944, -0.13, 0.13, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_polar_weapon_hammer3_x",
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
	"_polar_hand2_x": {
		type: "bitmap",
		asset: "_polar_hand2_x",
		scale: 1,
		position: [-14.65, -19.1],
	},
	"_polar_trail3_x": {
		type: "bitmap",
		asset: "_polar_trail3_x",
		scale: 1,
		position: [-22.65, -180.35],
	},
	"_polar_parche1_x": {
		type: "bitmap",
		asset: "_polar_parche1_x",
		scale: 1,
		position: [-22.4, -23.8],
	},
	"_polar_arm544_x": {
		type: "bitmap",
		asset: "_polar_arm544_x",
		scale: 1,
		position: [-23.2, -16.8],
	},
	"_polar_arm888_x": {
		type: "bitmap",
		asset: "_polar_arm888_x",
		scale: 1,
		position: [-16.15, -20.6],
	},
	"_polar_saw4hand_x": {
		type: "bitmap",
		asset: "_polar_saw4hand_x",
		scale: 1,
		position: [-11.2, -44.5],
	},
	"_polar_face26_x": {
		type: "bitmap",
		asset: "_polar_face26_x",
		scale: 1,
		position: [-27, -21.7],
	},
	"_polar_arm444_x": {
		type: "bitmap",
		asset: "_polar_arm444_x",
		scale: 1,
		position: [-43.95, -18.15],
	},
	"_polar_army1_die_x": {
		type: "bitmap",
		asset: "_polar_army1_die_x",
		scale: 1,
		position: [-31.7, -88.85],
	},
	"_polar_body1b_x": {
		type: "bitmap",
		asset: "_polar_body1b_x",
		scale: 1,
		position: [-56.9, -94.75],
	},
	"_polar_arm_diw2_x": {
		type: "bitmap",
		asset: "_polar_arm_diw2_x",
		scale: 1,
		position: [-57.8, -23.9],
	},
	"_polar_leg1b_x": {
		type: "bitmap",
		asset: "_polar_leg1b_x",
		scale: 1,
		position: [-30.9, -30.9],
	},
	"_polar_facelook": {
		type: "movieclip",
		fps: 30,
		totalFrames: 54,
		labels: {},
		layers: [
			{
				name: "morro_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_morro_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.05, ty: 0.9},
						transform: [-5.05, 0.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 8,
						classname: "_polar_morro_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.6, ty: 0.1},
						transform: [-6.6, 0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.367, 0], [0.699, 0.349], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 18,
						classname: "_polar_morro_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.05, ty: 0.9},
						transform: [-5.05, 0.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 24,
						classname: "_polar_morro_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.05, ty: 0.9},
						transform: [-5.05, 0.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0], [0.611, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 40,
						classname: "_polar_morro_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.1, ty: -1.85},
						transform: [-5.1, -1.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 41,
						to: 53,
						classname: "_polar_morro_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.1, ty: -1.85},
						transform: [-5.1, -1.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "nose1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_nose1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.4, ty: -6.75},
						transform: [0.4, -6.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 8,
						classname: "_polar_nose1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.4, ty: -6.75},
						transform: [0.4, -6.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.367, 0], [0.699, 0.349], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 18,
						classname: "_polar_nose1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.4, ty: -6.75},
						transform: [0.4, -6.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 24,
						classname: "_polar_nose1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.4, ty: -6.75},
						transform: [0.4, -6.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0], [0.611, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 40,
						classname: "_polar_nose1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.696, tx: -0.2, ty: -12.1},
						transform: [-0.2, -12.1, 1, 0.696, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 41,
						to: 53,
						classname: "_polar_nose1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.696, tx: -0.2, ty: -12.1},
						transform: [-0.2, -12.1, 1, 0.696, 0, 0, 0],
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
						to: 0,
						classname: "_polar_mouth1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.05, ty: 11.4},
						transform: [-2.05, 11.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 8,
						classname: "_polar_mouth1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.85, ty: 12.15},
						transform: [0.85, 12.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.367, 0], [0.699, 0.349], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 18,
						classname: "_polar_mouth1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.05, ty: 11.4},
						transform: [-2.05, 11.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 24,
						classname: "_polar_mouth1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.05, ty: 11.4},
						transform: [-2.05, 11.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0], [0.611, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 40,
						classname: "_polar_mouth1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.55, ty: 4.8},
						transform: [-3.55, 4.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 41,
						to: 53,
						classname: "_polar_mouth1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.55, ty: 4.8},
						transform: [-3.55, 4.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "iris1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 16.15, ty: -13.4},
						transform: [16.15, -13.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 8,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 16.7, ty: -12.4},
						transform: [16.7, -12.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.367, 0], [0.699, 0.349], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 10,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 16.15, ty: -13.4},
						transform: [16.15, -13.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 13,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 16.15, ty: -13.4},
						transform: [16.15, -13.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 16,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.263, tx: 16.15, ty: -13.4},
						transform: [16.15, -13.4, 1, 0.263, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 18,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 16.15, ty: -13.4},
						transform: [16.15, -13.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 24,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 16.15, ty: -13.4},
						transform: [16.15, -13.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0], [0.611, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 40,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 16.1, ty: -16.15},
						transform: [16.1, -16.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 41,
						to: 53,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.2, ty: -16.95},
						transform: [14.2, -16.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "iris1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: -0.998, b: 0.07, c: 0.07, d: 0.998, tx: -5.45, ty: -15.4},
						transform: [-5.45, -15.4, 1, 1, 0.07, 3.072, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 8,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: -0.966, b: -0.259, c: -0.259, d: 0.966, tx: -3.9, ty: -16.7},
						transform: [-3.9, -16.7, 1, 1, -0.262, -2.88, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.367, 0], [0.699, 0.349], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 10,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: -0.998, b: 0.07, c: 0.07, d: 0.998, tx: -5.45, ty: -15.4},
						transform: [-5.45, -15.4, 1, 1, 0.07, 3.072, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 13,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: -0.998, b: 0.07, c: 0.07, d: 0.998, tx: -5.45, ty: -15.4},
						transform: [-5.45, -15.4, 1, 1, 0.07, 3.072, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 16,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: -0.998, b: 0.07, c: 0.017, d: 0.241, tx: -5.45, ty: -15.45},
						transform: [-5.45, -15.45, 1, 0.241, 0.07, 3.072, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 18,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: -0.998, b: 0.07, c: 0.07, d: 0.998, tx: -5.45, ty: -15.4},
						transform: [-5.45, -15.4, 1, 1, 0.07, 3.072, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 24,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: -0.998, b: 0.07, c: 0.07, d: 0.998, tx: -5.45, ty: -15.4},
						transform: [-5.45, -15.4, 1, 1, 0.07, 3.072, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0], [0.611, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 40,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: -0.998, b: 0.07, c: 0.07, d: 0.998, tx: -5.5, ty: -18.15},
						transform: [-5.5, -18.15, 1, 1, 0.07, 3.072, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 41,
						to: 53,
						classname: "_polar_iris1_x",
						instancename: "",
						matrix: {a: -0.998, b: 0.07, c: 0.07, d: 0.998, tx: -5.65, ty: -19.85},
						transform: [-5.65, -19.85, 1, 1, 0.07, 3.072, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eyebrow1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_eyebrow1_x",
						instancename: "",
						matrix: {a: 0.877, b: -0.154, c: 0.173, d: 0.985, tx: 14.9, ty: -14.5},
						transform: [14.9, -14.5, 0.89, 1, 0.173, -0.173, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 8,
						classname: "_polar_eyebrow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 17.2, ty: -14.1},
						transform: [17.2, -14.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.367, 0], [0.699, 0.349], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 10,
						classname: "_polar_eyebrow1_x",
						instancename: "",
						matrix: {a: 0.877, b: -0.154, c: 0.173, d: 0.985, tx: 14.9, ty: -14.5},
						transform: [14.9, -14.5, 0.89, 1, 0.173, -0.173, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 13,
						classname: "_polar_eyebrow1_x",
						instancename: "",
						matrix: {a: 0.877, b: -0.154, c: 0.173, d: 0.985, tx: 14.9, ty: -14.5},
						transform: [14.9, -14.5, 0.89, 1, 0.173, -0.173, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.6, 0], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 16,
						classname: "_polar_eyebrow1_x",
						instancename: "",
						matrix: {a: 0.877, b: -0.154, c: 0.173, d: 0.985, tx: 15.05, ty: -13.8},
						transform: [15.05, -13.8, 0.89, 1, 0.173, -0.173, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.6, 0], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 18,
						classname: "_polar_eyebrow1_x",
						instancename: "",
						matrix: {a: 0.877, b: -0.154, c: 0.173, d: 0.985, tx: 14.9, ty: -14.5},
						transform: [14.9, -14.5, 0.89, 1, 0.173, -0.173, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 24,
						classname: "_polar_eyebrow1_x",
						instancename: "",
						matrix: {a: 0.877, b: -0.154, c: 0.173, d: 0.985, tx: 14.9, ty: -14.5},
						transform: [14.9, -14.5, 0.89, 1, 0.173, -0.173, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0], [0.611, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 40,
						classname: "_polar_eyebrow1_x",
						instancename: "",
						matrix: {a: 0.877, b: -0.154, c: 0.173, d: 0.985, tx: 14.85, ty: -17.25},
						transform: [14.85, -17.25, 0.89, 1, 0.173, -0.173, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 41,
						to: 53,
						classname: "_polar_eyebrow1_x",
						instancename: "",
						matrix: {a: 0.877, b: -0.154, c: 0.173, d: 0.985, tx: 14.85, ty: -17.25},
						transform: [14.85, -17.25, 0.89, 1, 0.173, -0.173, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "etebrow2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_etebrow2_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.173, c: 0.173, d: 0.985, tx: -6.25, ty: -17.25},
						transform: [-6.25, -17.25, 1, 1, 0.174, -0.174, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 8,
						classname: "_polar_etebrow2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3, ty: -18.05},
						transform: [-3, -18.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.367, 0], [0.699, 0.349], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 10,
						classname: "_polar_etebrow2_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.173, c: 0.173, d: 0.985, tx: -6.25, ty: -17.25},
						transform: [-6.25, -17.25, 1, 1, 0.174, -0.174, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 13,
						classname: "_polar_etebrow2_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.173, c: 0.173, d: 0.985, tx: -6.25, ty: -17.25},
						transform: [-6.25, -17.25, 1, 1, 0.174, -0.174, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.6, 0], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 16,
						classname: "_polar_etebrow2_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.173, c: 0.173, d: 0.985, tx: -6.1, ty: -16.55},
						transform: [-6.1, -16.55, 1, 1, 0.174, -0.174, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.6, 0], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 18,
						classname: "_polar_etebrow2_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.173, c: 0.173, d: 0.985, tx: -6.25, ty: -17.25},
						transform: [-6.25, -17.25, 1, 1, 0.174, -0.174, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 24,
						classname: "_polar_etebrow2_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.173, c: 0.173, d: 0.985, tx: -6.25, ty: -17.25},
						transform: [-6.25, -17.25, 1, 1, 0.174, -0.174, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0], [0.611, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 40,
						classname: "_polar_etebrow2_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.173, c: 0.173, d: 0.985, tx: -6.3, ty: -20},
						transform: [-6.3, -20, 1, 1, 0.174, -0.174, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 41,
						to: 53,
						classname: "_polar_etebrow2_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.173, c: 0.173, d: 0.985, tx: -6.3, ty: -20},
						transform: [-6.3, -20, 1, 1, 0.174, -0.174, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_polar_bat_x": {
		type: "bitmap",
		asset: "_polar_polar_bat_x",
		scale: 1,
		position: [-16.1, -170.15],
	},
	"_polar_romboanima_1": {
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
						to: 0,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.223, b: 0, c: 0, d: 0.223, tx: 0, ty: 0},
						transform: [0, 0, 0.223, 0.223, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.266, b: 0, c: 0, d: 0.266, tx: 0, ty: 0},
						transform: [0, 0, 0.266, 0.266, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.324, b: 0, c: 0, d: 0.324, tx: 0, ty: 0},
						transform: [0, 0, 0.324, 0.324, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.392, b: 0, c: 0, d: 0.392, tx: 0, ty: 0},
						transform: [0, 0, 0.392, 0.392, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.47, b: 0, c: 0, d: 0.47, tx: 0, ty: 0},
						transform: [0, 0, 0.47, 0.47, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.554, b: 0, c: 0, d: 0.554, tx: 0, ty: 0},
						transform: [0, 0, 0.554, 0.554, 0, 0, 0],
						alpha: 0.99,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.644, b: 0, c: 0, d: 0.644, tx: 0, ty: 0},
						transform: [0, 0, 0.644, 0.644, 0, 0, 0],
						alpha: 0.99,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.738, b: 0, c: 0, d: 0.738, tx: 0, ty: 0},
						transform: [0, 0, 0.738, 0.738, 0, 0, 0],
						alpha: 0.98,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.837, b: 0, c: 0, d: 0.837, tx: 0, ty: 0},
						transform: [0, 0, 0.837, 0.837, 0, 0, 0],
						alpha: 0.97,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.938, b: 0, c: 0, d: 0.938, tx: 0, ty: 0},
						transform: [0, 0, 0.938, 0.938, 0, 0, 0],
						alpha: 0.96,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 1.042, b: 0, c: 0, d: 1.042, tx: 0, ty: 0},
						transform: [0, 0, 1.042, 1.042, 0, 0, 0],
						alpha: 0.94,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 1.148, b: 0, c: 0, d: 1.148, tx: 0, ty: 0},
						transform: [0, 0, 1.148, 1.148, 0, 0, 0],
						alpha: 0.9,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 1.255, b: 0, c: 0, d: 1.255, tx: 0, ty: 0},
						transform: [0, 0, 1.255, 1.255, 0, 0, 0],
						alpha: 0.8,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 1.364, b: 0, c: 0, d: 1.364, tx: 0, ty: 0},
						transform: [0, 0, 1.364, 1.364, 0, 0, 0],
						alpha: 0.54,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 1.474, b: 0, c: 0, d: 1.474, tx: 0, ty: 0},
						transform: [0, 0, 1.474, 1.474, 0, 0, 0],
						alpha: 0.12,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 1.474, b: 0, c: 0, d: 1.474, tx: 0, ty: 0},
						transform: [0, 0, 1.474, 1.474, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_romboanima_2": {
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
						to: 0,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.554, b: 0, c: 0, d: 0.554, tx: 0, ty: 0},
						transform: [0, 0, 0.554, 0.554, 0, 0, 0],
						alpha: 0.99,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.644, b: 0, c: 0, d: 0.644, tx: 0, ty: 0},
						transform: [0, 0, 0.644, 0.644, 0, 0, 0],
						alpha: 0.99,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.738, b: 0, c: 0, d: 0.738, tx: 0, ty: 0},
						transform: [0, 0, 0.738, 0.738, 0, 0, 0],
						alpha: 0.98,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.837, b: 0, c: 0, d: 0.837, tx: 0, ty: 0},
						transform: [0, 0, 0.837, 0.837, 0, 0, 0],
						alpha: 0.97,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.938, b: 0, c: 0, d: 0.938, tx: 0, ty: 0},
						transform: [0, 0, 0.938, 0.938, 0, 0, 0],
						alpha: 0.96,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 1.042, b: 0, c: 0, d: 1.042, tx: 0, ty: 0},
						transform: [0, 0, 1.042, 1.042, 0, 0, 0],
						alpha: 0.94,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 1.148, b: 0, c: 0, d: 1.148, tx: 0, ty: 0},
						transform: [0, 0, 1.148, 1.148, 0, 0, 0],
						alpha: 0.9,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 1.255, b: 0, c: 0, d: 1.255, tx: 0, ty: 0},
						transform: [0, 0, 1.255, 1.255, 0, 0, 0],
						alpha: 0.8,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 1.364, b: 0, c: 0, d: 1.364, tx: 0, ty: 0},
						transform: [0, 0, 1.364, 1.364, 0, 0, 0],
						alpha: 0.54,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 1.474, b: 0, c: 0, d: 1.474, tx: 0, ty: 0},
						transform: [0, 0, 1.474, 1.474, 0, 0, 0],
						alpha: 0.12,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 1.474, b: 0, c: 0, d: 1.474, tx: 0, ty: 0},
						transform: [0, 0, 1.474, 1.474, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.223, b: 0, c: 0, d: 0.223, tx: 0, ty: 0},
						transform: [0, 0, 0.223, 0.223, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.266, b: 0, c: 0, d: 0.266, tx: 0, ty: 0},
						transform: [0, 0, 0.266, 0.266, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.324, b: 0, c: 0, d: 0.324, tx: 0, ty: 0},
						transform: [0, 0, 0.324, 0.324, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.392, b: 0, c: 0, d: 0.392, tx: 0, ty: 0},
						transform: [0, 0, 0.392, 0.392, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.47, b: 0, c: 0, d: 0.47, tx: 0, ty: 0},
						transform: [0, 0, 0.47, 0.47, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_romboanima_3": {
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
						to: 0,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 1.042, b: 0, c: 0, d: 1.042, tx: 0, ty: 0},
						transform: [0, 0, 1.042, 1.042, 0, 0, 0],
						alpha: 0.94,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 1.148, b: 0, c: 0, d: 1.148, tx: 0, ty: 0},
						transform: [0, 0, 1.148, 1.148, 0, 0, 0],
						alpha: 0.9,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 1.255, b: 0, c: 0, d: 1.255, tx: 0, ty: 0},
						transform: [0, 0, 1.255, 1.255, 0, 0, 0],
						alpha: 0.8,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 1.364, b: 0, c: 0, d: 1.364, tx: 0, ty: 0},
						transform: [0, 0, 1.364, 1.364, 0, 0, 0],
						alpha: 0.54,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 1.474, b: 0, c: 0, d: 1.474, tx: 0, ty: 0},
						transform: [0, 0, 1.474, 1.474, 0, 0, 0],
						alpha: 0.12,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 1.474, b: 0, c: 0, d: 1.474, tx: 0, ty: 0},
						transform: [0, 0, 1.474, 1.474, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.223, b: 0, c: 0, d: 0.223, tx: 0, ty: 0},
						transform: [0, 0, 0.223, 0.223, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.266, b: 0, c: 0, d: 0.266, tx: 0, ty: 0},
						transform: [0, 0, 0.266, 0.266, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.324, b: 0, c: 0, d: 0.324, tx: 0, ty: 0},
						transform: [0, 0, 0.324, 0.324, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.392, b: 0, c: 0, d: 0.392, tx: 0, ty: 0},
						transform: [0, 0, 0.392, 0.392, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.47, b: 0, c: 0, d: 0.47, tx: 0, ty: 0},
						transform: [0, 0, 0.47, 0.47, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.554, b: 0, c: 0, d: 0.554, tx: 0, ty: 0},
						transform: [0, 0, 0.554, 0.554, 0, 0, 0],
						alpha: 0.99,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.644, b: 0, c: 0, d: 0.644, tx: 0, ty: 0},
						transform: [0, 0, 0.644, 0.644, 0, 0, 0],
						alpha: 0.99,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.738, b: 0, c: 0, d: 0.738, tx: 0, ty: 0},
						transform: [0, 0, 0.738, 0.738, 0, 0, 0],
						alpha: 0.98,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.837, b: 0, c: 0, d: 0.837, tx: 0, ty: 0},
						transform: [0, 0, 0.837, 0.837, 0, 0, 0],
						alpha: 0.97,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_polar_rombo_x",
						instancename: "",
						matrix: {a: 0.938, b: 0, c: 0, d: 0.938, tx: 0, ty: 0},
						transform: [0, 0, 0.938, 0.938, 0, 0, 0],
						alpha: 0.96,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_weaponitem_hacha_x": {
		type: "bitmap",
		asset: "_polar_weaponitem_hacha_x",
		scale: 1,
		position: [-43.4, -142.45],
	},
	"_polar_weaponitem_maze_x": {
		type: "bitmap",
		asset: "_polar_weaponitem_maze_x",
		scale: 1,
		position: [-49.5, -152.95],
	},
	"_polar_sawgroup": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "safe",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "disc1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_saw_anima",
						instancename: "",
						matrix: {a: 0.903, b: 0, c: 0, d: 0.903, tx: -26.85, ty: 7.25},
						transform: [-26.85, 7.25, 0.903, 0.903, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "saw_anima",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_saw_anima",
						instancename: "",
						matrix: {a: 0.903, b: 0, c: 0, d: 0.903, tx: 0.2, ty: -37.35},
						transform: [0.2, -37.35, 0.903, 0.903, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "disc1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_saw_anima",
						instancename: "",
						matrix: {a: 0.903, b: 0, c: 0, d: 0.903, tx: 26.9, ty: 7.25},
						transform: [26.9, 7.25, 0.903, 0.903, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_weaponitem_bat_x": {
		type: "bitmap",
		asset: "_polar_weaponitem_bat_x",
		scale: 1,
		position: [-43.45, -166],
	},
	"_polar_weaponitem_hammer_x": {
		type: "bitmap",
		asset: "_polar_weaponitem_hammer_x",
		scale: 1,
		position: [-65.7, -152.35],
	},
	"_polar_saw_fly_1_x": {
		type: "bitmap",
		asset: "_polar_saw_fly_1_x",
		scale: 1,
		position: [-36.35, -45.95],
	},
	"_polar_lines": {
		type: "movieclip",
		fps: 30,
		totalFrames: 8,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_polar_kinetic_1_x",
						instancename: "",
						matrix: {a: 0.757, b: 0, c: 0, d: 0.757, tx: 0, ty: 0},
						transform: [0, 0, 0.757, 0.757, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_polar_kinetic_2_x",
						instancename: "",
						matrix: {a: 0.809, b: 0, c: 0, d: 0.809, tx: 0, ty: 0},
						transform: [0, 0, 0.809, 0.809, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_polar_kinetic_1_x",
						instancename: "",
						matrix: {a: -0.742, b: -0.058, c: 0.058, d: -0.742, tx: 0, ty: 0},
						transform: [0, 0, 0.744, 0.744, 3.063, -3.063, NaN],
						alpha: 0.2,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_polar_kinetic_2_x",
						instancename: "",
						matrix: {a: 0.088, b: 1.004, c: -1.004, d: 0.088, tx: 2.7, ty: -0.35},
						transform: [2.7, -0.35, 1.008, 1.008, -1.483, 1.483, NaN],
						alpha: 0.59,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_polar_kinetic_1_x",
						instancename: "",
						matrix: {a: 0.07, b: 0.754, c: -0.754, d: 0.07, tx: -0.45, ty: 0},
						transform: [-0.45, 0, 0.757, 0.757, -1.479, 1.479, NaN],
						alpha: 0.5,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_polar_kinetic_2_x",
						instancename: "",
						matrix: {a: 0.075, b: 0.806, c: -0.806, d: 0.075, tx: -0.45, ty: 0},
						transform: [-0.45, 0, 0.809, 0.809, -1.479, 1.479, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_polar_kinetic_1_x",
						instancename: "",
						matrix: {a: -0.013, b: -0.913, c: 0.913, d: -0.013, tx: -0.45, ty: 0},
						transform: [-0.45, 0, 0.913, 0.913, 1.585, -1.585, NaN],
						alpha: 0.15,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_polar_kinetic_2_x",
						instancename: "",
						matrix: {a: -0.995, b: 0.181, c: -0.181, d: -0.995, tx: 0.1, ty: 2.65},
						transform: [0.1, 2.65, 1.012, 1.012, -2.962, 2.962, NaN],
						alpha: 0.59,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_bodybox_x": {
		type: "bitmap",
		asset: "_polar_bodybox_x",
		scale: 1,
		position: [-30, -30],
	},
	"_polar_hammer_part1": {
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
						classname: "_polar_hammer_part_1_x",
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
						classname: "_polar_bodybox",
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
	"_polar_stick_part_2": {
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
						classname: "_polar_stick_part_2_x",
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
						classname: "_polar_bodybox",
						instancename: "bound",
						matrix: {a: 0.16, b: 0, c: 0, d: 0.856, tx: 0, ty: 0},
						transform: [0, 0, 0.16, 0.856, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_stick_part_1": {
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
						classname: "_polar_stick_part_1_x",
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
						classname: "_polar_bodybox",
						instancename: "bound",
						matrix: {a: 0.174, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 0.174, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_nutsandbolts_nutsmall": {
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
						classname: "_polar_nutsandbolts_nutsmall_x",
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
						classname: "_polar_bodybox",
						instancename: "bound",
						matrix: {a: 0.148, b: 0, c: 0, d: 0.148, tx: 0, ty: 0},
						transform: [0, 0, 0.148, 0.148, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_axe_part1": {
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
						classname: "_polar_axe_part1_x",
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
						classname: "_polar_bodybox",
						instancename: "bound",
						matrix: {a: 0.502, b: 0, c: 0, d: 0.502, tx: 0, ty: 0},
						transform: [0, 0, 0.502, 0.502, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_saw_part_1": {
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
						classname: "_polar_saw_part_1_x",
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
						classname: "_polar_bodybox",
						instancename: "bound",
						matrix: {a: 0.429, b: 0, c: 0, d: 0.236, tx: 0, ty: 0},
						transform: [0, 0, 0.429, 0.236, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_saw_part_2": {
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
						classname: "_polar_saw_part_2_x",
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
						classname: "_polar_bodybox",
						instancename: "bound",
						matrix: {a: 0.69, b: 0, c: 0, d: 0.242, tx: 0, ty: 0},
						transform: [0, 0, 0.69, 0.242, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_saw_part_3": {
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
						classname: "_polar_saw_part_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.25},
						transform: [0, -0.25, 1, 1, 0, 0, 0],
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
						classname: "_polar_bodybox",
						instancename: "bound",
						matrix: {a: 0.422, b: 0, c: 0, d: 0.35, tx: 0, ty: -0.25},
						transform: [0, -0.25, 0.422, 0.35, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_mace_part1": {
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
						classname: "_polar_mace_part1_x",
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
						classname: "_polar_bodybox",
						instancename: "bound",
						matrix: {a: 0.694, b: 0, c: 0, d: 0.694, tx: 0, ty: 0},
						transform: [0, 0, 0.694, 0.694, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_shop_part1": {
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
						classname: "_polar_shop_part1_x",
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
						classname: "_polar_bodybox",
						instancename: "bound",
						matrix: {a: 1.142, b: 0, c: 0, d: 0.205, tx: 3.25, ty: 0},
						transform: [3.25, 0, 1.142, 0.205, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_shop_part2": {
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
						classname: "_polar_shop_part2_x",
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
						classname: "_polar_bodybox",
						instancename: "bound",
						matrix: {a: 0.68, b: 0, c: 0, d: 1.343, tx: -0.95, ty: 8.9},
						transform: [-0.95, 8.9, 0.68, 1.343, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_bat_part_1": {
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
						classname: "_polar_bat_part1_x",
						instancename: "axe",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 23.4},
						transform: [0, 23.4, 1, 1, 0, 0, 0],
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
						classname: "_polar_bodybox",
						instancename: "bound",
						matrix: {a: 0.174, b: 0, c: 0, d: 1.562, tx: 0, ty: -1.4},
						transform: [0, -1.4, 0.174, 1.562, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_bat_part_2": {
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
						classname: "_polar_weapon_bat2_x",
						instancename: "axe",
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
						classname: "_polar_bodybox",
						instancename: "bound",
						matrix: {a: 0.384, b: 0, c: 0, d: 1.702, tx: 0, ty: -1.85},
						transform: [0, -1.85, 0.384, 1.702, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_polar_glowshadow": {
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
						classname: "_polar_shadow_gfx",
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
	"_polar_veleta_x": {
		type: "bitmap",
		asset: "_polar_veleta_x",
		scale: 1,
		position: [-38.85, -16.8],
	},
	"_polar_vacuum_base": {
		type: "movieclip",
		fps: 30,
		totalFrames: 30,
		labels: {},
		layers: [
			{
				name: "vacuum_base_x",
				keys: [
					{
						from: 0,
						to: 29,
						classname: "_polar_vacuum_base_x",
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
						classname: "_polar_glow1_x",
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
						classname: "_polar_glow1_x",
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
						classname: "_polar_glow1_x",
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
						classname: "_polar_glow2_x",
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
						classname: "_polar_glow2_x",
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
						classname: "_polar_glow2_x",
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
	"_polar_veleta_lastlife_x": {
		type: "bitmap",
		asset: "_polar_veleta_lastlife_x",
		scale: 1,
		position: [-38.85, -16.8],
	},
	"_polar_vacuum_base_lastlife": {
		type: "movieclip",
		fps: 30,
		totalFrames: 7,
		labels: {},
		layers: [
			{
				name: "vacuum_base_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_polar_vacuum_base_lastlife_x",
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
						to: 2,
						classname: "_polar_glow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -29.05, ty: -1.6},
						transform: [-29.05, -1.6, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.441, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_polar_glow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -29.05, ty: -1.6},
						transform: [-29.05, -1.6, 1, 1, 0, 0, 0],
						alpha: 0.15,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.441, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_polar_glow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -29.05, ty: -1.6},
						transform: [-29.05, -1.6, 1, 1, 0, 0, 0],
						alpha: 0,
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
						to: 1,
						classname: "_polar_glow2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 15.35},
						transform: [0, 15.35, 1, 1, 0, 0, 0],
						alpha: 0.34,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.441, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_polar_glow2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 15.35},
						transform: [0, 15.35, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.441, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_polar_glow2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 15.35},
						transform: [0, 15.35, 1, 1, 0, 0, 0],
						alpha: 0.68,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.441, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_polar_vacuum_part_4_lastlife_x": {
		type: "bitmap",
		asset: "_polar_vacuum_part_4_lastlife_x",
		scale: 1,
		position: [-69, -37.05],
	},
	"_polar_vacuum_part_3_x": {
		type: "bitmap",
		asset: "_polar_vacuum_part_3_x",
		scale: 1,
		position: [-62.75, -35.05],
	},
	"_polar_veleta_wreck_1_x": {
		type: "bitmap",
		asset: "_polar_veleta_wreck_1_x",
		scale: 1,
		position: [-16.1, -15.6],
	},
	"_polar_glasses_x": {
		type: "bitmap",
		asset: "_polar_glasses_x",
		scale: 1,
		position: [-32.05, -17.85],
	},
	"_polar_patagafa_x": {
		type: "bitmap",
		asset: "_polar_patagafa_x",
		scale: 1,
		position: [-14.35, -7.7],
	},
	"_polar_morro_x": {
		type: "bitmap",
		asset: "_polar_morro_x",
		scale: 1,
		position: [-15.25, -17.1],
	},
	"_polar_nose1_x": {
		type: "bitmap",
		asset: "_polar_nose1_x",
		scale: 1,
		position: [-11.1, -7.8],
	},
	"_polar_mouth1_x": {
		type: "bitmap",
		asset: "_polar_mouth1_x",
		scale: 1,
		position: [-9.05, -5.8],
	},
	"_polar_tuto_key_top_base_x": {
		type: "bitmap",
		asset: "_polar_tuto_key_top_base_x",
		scale: 1,
		position: [-59.95, -10.4],
	},
	"_polar_tuto_key_top_x": {
		type: "bitmap",
		asset: "_polar_tuto_key_top_x",
		scale: 1,
		position: [-59.95, -57.15],
	},
	"_polar_tuto_arrow_x": {
		type: "bitmap",
		asset: "_polar_tuto_arrow_x",
		scale: 1,
		position: [-59.95, -57.15],
	},
	"_polar_iris1_x": {
		type: "bitmap",
		asset: "_polar_iris1_x",
		scale: 1,
		position: [-6.9, -6.9],
	},
	"_polar_eyebrow1_x": {
		type: "bitmap",
		asset: "_polar_eyebrow1_x",
		scale: 1,
		position: [-9.75, -10.1],
	},
	"_polar_etebrow2_x": {
		type: "bitmap",
		asset: "_polar_etebrow2_x",
		scale: 1,
		position: [-7.7, -11.1],
	},
	"_polar_punchbox_x": {
		type: "bitmap",
		asset: "_polar_punchbox_x",
		scale: 1,
		position: [-26.65, -26.65],
	},
	"_polar_eyebrowhurt_x": {
		type: "bitmap",
		asset: "_polar_eyebrowhurt_x",
		scale: 1,
		position: [-12.3, -10.65],
	},
	"_polar_eyebrowhurt_2_x": {
		type: "bitmap",
		asset: "_polar_eyebrowhurt_2_x",
		scale: 1,
		position: [-10.9, -10.8],
	},
	"_polar_mouthhurt_x": {
		type: "bitmap",
		asset: "_polar_mouthhurt_x",
		scale: 1,
		position: [-18.95, -13.7],
	},
	"_polar_morro8_x": {
		type: "bitmap",
		asset: "_polar_morro8_x",
		scale: 1,
		position: [-16.05, -15.6],
	},
	"_polar_eyebrow4_x": {
		type: "bitmap",
		asset: "_polar_eyebrow4_x",
		scale: 1,
		position: [-10.65, -7.45],
	},
	"_polar_etebrow5_x": {
		type: "bitmap",
		asset: "_polar_etebrow5_x",
		scale: 1,
		position: [-9.5, -7.7],
	},
	"_polar_weapon_hacha1_x": {
		type: "bitmap",
		asset: "_polar_weapon_hacha1_x",
		scale: 1,
		position: [-33.9, -132.9],
	},
	"_polar_weapon_maze1_x": {
		type: "bitmap",
		asset: "_polar_weapon_maze1_x",
		scale: 1,
		position: [-39.15, -140.5],
	},
	"_polar_weapon_bat1_x": {
		type: "bitmap",
		asset: "_polar_weapon_bat1_x",
		scale: 1,
		position: [-15.55, -180.1],
	},
	"_polar_weapon_hammer1_x": {
		type: "bitmap",
		asset: "_polar_weapon_hammer1_x",
		scale: 1,
		position: [-53.4, -139.75],
	},
	"_polar_weapon_hacha2_x": {
		type: "bitmap",
		asset: "_polar_weapon_hacha2_x",
		scale: 1,
		position: [-14.5, -149.2],
	},
	"_polar_weapon_maze2_x": {
		type: "bitmap",
		asset: "_polar_weapon_maze2_x",
		scale: 1,
		position: [-36.5, -160.85],
	},
	"_polar_weapon_hammer2_x": {
		type: "bitmap",
		asset: "_polar_weapon_hammer2_x",
		scale: 1,
		position: [-48.2, -163.85],
	},
	"_polar_weapon_hacha3_x": {
		type: "bitmap",
		asset: "_polar_weapon_hacha3_x",
		scale: 1,
		position: [-34.4, -126.55],
	},
	"_polar_weapon_maze3_x": {
		type: "bitmap",
		asset: "_polar_weapon_maze3_x",
		scale: 1,
		position: [-37.25, -132.3],
	},
	"_polar_weapon_hammer3_x": {
		type: "bitmap",
		asset: "_polar_weapon_hammer3_x",
		scale: 1,
		position: [-48.55, -141.9],
	},
	"_polar_rombo_x": {
		type: "bitmap",
		asset: "_polar_rombo_x",
		scale: 1,
		position: [-79.2, -79.2],
	},
	"_polar_saw_anima": {
		type: "movieclip",
		fps: 30,
		totalFrames: 70,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 33,
						classname: "_polar_discs_item_x",
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
						from: 34,
						to: 68,
						classname: "_polar_discs_item_x",
						instancename: "",
						matrix: {a: -1, b: 0.03, c: -0.03, d: -1, tx: -0.2, ty: -0.3},
						transform: [-0.2, -0.3, 1, 1, -3.111, 3.111, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_polar_discs_item_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.048, c: 0.048, d: 0.999, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0.048, -0.048, NaN],
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
	"_polar_kinetic_1_x": {
		type: "bitmap",
		asset: "_polar_kinetic_1_x",
		scale: 1,
		position: [-41.3, -35.85],
	},
	"_polar_kinetic_2_x": {
		type: "bitmap",
		asset: "_polar_kinetic_2_x",
		scale: 1,
		position: [-37.25, -35.9],
	},
	"_polar_hammer_part_1_x": {
		type: "bitmap",
		asset: "_polar_hammer_part_1_x",
		scale: 1,
		position: [-40.25, -27.85],
	},
	"_polar_stick_part_2_x": {
		type: "bitmap",
		asset: "_polar_stick_part_2_x",
		scale: 1,
		position: [-10.7, -30.8],
	},
	"_polar_stick_part_1_x": {
		type: "bitmap",
		asset: "_polar_stick_part_1_x",
		scale: 1,
		position: [-13.55, -36.35],
	},
	"_polar_nutsandbolts_nutsmall_x": {
		type: "bitmap",
		asset: "_polar_nutsandbolts_nutsmall_x",
		scale: 1,
		position: [-10.35, -10.1],
	},
	"_polar_axe_part1_x": {
		type: "bitmap",
		asset: "_polar_axe_part1_x",
		scale: 1,
		position: [-32.15, -34.9],
	},
	"_polar_saw_part_1_x": {
		type: "bitmap",
		asset: "_polar_saw_part_1_x",
		scale: 1,
		position: [-20.8, -17.7],
	},
	"_polar_saw_part_2_x": {
		type: "bitmap",
		asset: "_polar_saw_part_2_x",
		scale: 1,
		position: [-40.2, -24.9],
	},
	"_polar_saw_part_3_x": {
		type: "bitmap",
		asset: "_polar_saw_part_3_x",
		scale: 1,
		position: [-43.75, -19.6],
	},
	"_polar_mace_part1_x": {
		type: "bitmap",
		asset: "_polar_mace_part1_x",
		scale: 1,
		position: [-36.8, -40],
	},
	"_polar_shop_part1_x": {
		type: "bitmap",
		asset: "_polar_shop_part1_x",
		scale: 1,
		position: [-32.95, -19.7],
	},
	"_polar_shop_part2_x": {
		type: "bitmap",
		asset: "_polar_shop_part2_x",
		scale: 1,
		position: [-37.7, -72.2],
	},
	"_polar_bat_part1_x": {
		type: "bitmap",
		asset: "_polar_bat_part1_x",
		scale: 1,
		position: [-12.7, -76.15],
	},
	"_polar_weapon_bat2_x": {
		type: "bitmap",
		asset: "_polar_weapon_bat2_x",
		scale: 1,
		position: [-15.55, -53.95],
	},
	"_polar_shadow_gfx": {
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
						to: 13,
						classname: "_polar_glowshadow_x",
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
						classname: "_polar_glowshadow_x",
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
						classname: "_polar_glowshadow_x",
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
	"_polar_vacuum_base_x": {
		type: "bitmap",
		asset: "_polar_vacuum_base_x",
		scale: 1,
		position: [-62.75, -35.2],
	},
	"_polar_glow1_x": {
		type: "bitmap",
		asset: "_polar_glow1_x",
		scale: 1,
		position: [-32.8, -28.05],
	},
	"_polar_glow2_x": {
		type: "bitmap",
		asset: "_polar_glow2_x",
		scale: 1,
		position: [-66.25, -15.6],
	},
	"_polar_vacuum_base_lastlife_x": {
		type: "bitmap",
		asset: "_polar_vacuum_base_lastlife_x",
		scale: 1,
		position: [-66.8, -35.2],
	},
	"_polar_discs_item_x": {
		type: "bitmap",
		asset: "_polar_discs_item_x",
		scale: 1,
		position: [-40.3, -41.4],
	},
	"_polar_glowshadow_x": {
		type: "bitmap",
		asset: "_polar_glowshadow_x",
		scale: 1,
		position: [-96.15, -39.15],
	},
};
