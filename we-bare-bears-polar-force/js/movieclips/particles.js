
var particles = {
	"nutsandbolts": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Nut1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nutsandbolts_nut1",
						instancename: "NUT_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -230.2, ty: 1.2},
						transform: [-230.2, 1.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Nut2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nutsandbolts_nut2",
						instancename: "NUT_2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -179.45, ty: 1.2},
						transform: [-179.45, 1.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Screw1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nutsandbolts_screw1",
						instancename: "SCREW_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -14.55, ty: -4.4},
						transform: [-14.55, -4.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Screw2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nutsandbolts_screw2",
						instancename: "SCREW_2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 31.75, ty: 6.6},
						transform: [31.75, 6.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Screw3",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nutsandbolts_screw3",
						instancename: "SCREW_3",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 80.35, ty: 6.6},
						transform: [80.35, 6.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Nut3",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nutsandbolts_nut3",
						instancename: "NUT_3",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -123.95, ty: 0.3},
						transform: [-123.95, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Plate1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nutsandbolts_plate1",
						instancename: "PLATE_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 180.55, ty: 6.6},
						transform: [180.55, 6.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Plate2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nutsandbolts_plate2",
						instancename: "PLATE_2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 228.25, ty: 6.6},
						transform: [228.25, 6.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nutsandbolts_nut1": {
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
						classname: "_nutsandbolts_nut1_x",
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
						classname: "_nutsandbolts_bodybox",
						instancename: "bound",
						matrix: {a: 0.579, b: 0, c: 0, d: 0.579, tx: 0, ty: 0},
						transform: [0, 0, 0.579, 0.579, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nutsandbolts_nut2": {
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
						classname: "_nutsandbolts_nut2_x",
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
						classname: "_nutsandbolts_bodybox",
						instancename: "bound",
						matrix: {a: 0.616, b: 0, c: 0, d: 0.613, tx: 0, ty: 0},
						transform: [0, 0, 0.616, 0.613, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nutsandbolts_screw1": {
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
						classname: "_nutsandbolts_screw1_x",
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
						classname: "_nutsandbolts_bodybox",
						instancename: "bound",
						matrix: {a: 0.539, b: 0, c: 0, d: 1.065, tx: 0, ty: -0.1},
						transform: [0, -0.1, 0.539, 1.065, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nutsandbolts_screw2": {
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
						classname: "_nutsandbolts_screw2_x",
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
						classname: "_nutsandbolts_bodybox",
						instancename: "bound",
						matrix: {a: 0.529, b: 0, c: 0, d: 0.886, tx: 0.05, ty: 0},
						transform: [0.05, 0, 0.529, 0.886, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nutsandbolts_screw3": {
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
						classname: "_nutsandbolts_screw3_x",
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
						classname: "_nutsandbolts_bodybox",
						instancename: "bound",
						matrix: {a: 0.523, b: 0, c: 0, d: 0.716, tx: 0, ty: 0.1},
						transform: [0, 0.1, 0.523, 0.716, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nutsandbolts_nut3": {
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
						classname: "_nutsandbolts_nut3_x",
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
						classname: "_nutsandbolts_bodybox",
						instancename: "bound",
						matrix: {a: 0.706, b: 0, c: 0, d: 0.519, tx: 0, ty: 0},
						transform: [0, 0, 0.706, 0.519, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nutsandbolts_plate1": {
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
						classname: "_nutsandbolts_plate1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: 4.55},
						transform: [-2.1, 4.55, 1, 1, 0, 0, 0],
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
						classname: "_nutsandbolts_bodybox",
						instancename: "bound",
						matrix: {a: 0.574, b: 0, c: 0, d: 0.307, tx: 0, ty: 0},
						transform: [0, 0, 0.574, 0.307, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nutsandbolts_plate2": {
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
						classname: "_nutsandbolts_plate2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.3, ty: 1.1},
						transform: [-2.3, 1.1, 1, 1, 0, 0, 0],
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
						classname: "_nutsandbolts_bodybox",
						instancename: "bound",
						matrix: {a: 0.61, b: 0, c: 0, d: 0.318, tx: 0, ty: 0},
						transform: [0, 0, 0.61, 0.318, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nutsandbolts_nut1_x": {
		type: "bitmap",
		asset: "_nutsandbolts_nut1_x",
		scale: 1,
		position: [-25.4, -19.2],
	},
	"_nutsandbolts_bodybox": {
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
						classname: "_nutsandbolts_bodybox_x",
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
	"_nutsandbolts_nut2_x": {
		type: "bitmap",
		asset: "_nutsandbolts_nut2_x",
		scale: 1,
		position: [-26.55, -25.2],
	},
	"_nutsandbolts_screw1_x": {
		type: "bitmap",
		asset: "_nutsandbolts_screw1_x",
		scale: 1,
		position: [-23.25, -28.6],
	},
	"_nutsandbolts_screw2_x": {
		type: "bitmap",
		asset: "_nutsandbolts_screw2_x",
		scale: 1,
		position: [-22, -30.5],
	},
	"_nutsandbolts_screw3_x": {
		type: "bitmap",
		asset: "_nutsandbolts_screw3_x",
		scale: 1,
		position: [-23.15, -29.1],
	},
	"_nutsandbolts_nut3_x": {
		type: "bitmap",
		asset: "_nutsandbolts_nut3_x",
		scale: 1,
		position: [-25.4, -17.25],
	},
	"_nutsandbolts_plate1_x": {
		type: "bitmap",
		asset: "_nutsandbolts_plate1_x",
		scale: 1,
		position: [-21.85, -21.3],
	},
	"_nutsandbolts_plate2_x": {
		type: "bitmap",
		asset: "_nutsandbolts_plate2_x",
		scale: 1,
		position: [-23.5, -16.35],
	},
	"_nutsandbolts_bodybox_x": {
		type: "bitmap",
		asset: "_nutsandbolts_bodybox_x",
		scale: 1,
		position: [-30, -30],
	},
};
