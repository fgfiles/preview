
var shadow = {
	"shadow": {
		type: "movieclip",
		fps: 30,
		totalFrames: 4,
		labels: {street: {from:0, to:0}, arcade: {from:1, to:1}, rooftop: {from:2, to:2}, arena: {from:3, to:3}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_shadow_shadow_street_x",
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
						classname: "_shadow_shadow_arcade_x",
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
						classname: "_shadow_shadow_roofttop_x",
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
						classname: "_shadow_shadow_arena_x",
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
				]
			},
		]
	},
	"_shadow_shadow_street_x": {
		type: "bitmap",
		asset: "_shadow_shadow_street_x",
		scale: 1,
		position: [-105, -17],
	},
	"_shadow_shadow_arcade_x": {
		type: "bitmap",
		asset: "_shadow_shadow_arcade_x",
		scale: 1,
		position: [-105, -17],
	},
	"_shadow_shadow_roofttop_x": {
		type: "bitmap",
		asset: "_shadow_shadow_roofttop_x",
		scale: 1,
		position: [-105, -17],
	},
	"_shadow_shadow_arena_x": {
		type: "bitmap",
		asset: "_shadow_shadow_arena_x",
		scale: 1,
		position: [-105, -17],
	},
};
