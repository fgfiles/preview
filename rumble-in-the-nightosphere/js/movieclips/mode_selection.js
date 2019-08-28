
var mode_selection = {
	"modeselection": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "background_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "background_x",
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
				name: "oneplayer",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "button1p",
						instancename: "oneplayer",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 402, ty: 374.6},
						transform: [402, 374.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "twoplayers",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "button2p",
						instancename: "twoplayers",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 402, ty: 468.45},
						transform: [402, 468.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "title_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "title_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 402, ty: 171.5},
						transform: [402, 171.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"background_x": {
		type: "bitmap",
		asset: "background_x",
		scale: 1,
		position: [-5, -5],
	},
	"button1p": {
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
						classname: "button_x",
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
				name: "Capa 2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "playerone_x",
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
	"button2p": {
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
						classname: "button_x",
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
				name: "Capa 2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "playertwo_x",
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
	"title_x": {
		type: "bitmap",
		asset: "title_x",
		scale: 1,
		position: [-170.6, -35.3],
	},
	"button_x": {
		type: "bitmap",
		asset: "button_x",
		scale: 1,
		position: [-80.15, -36.3],
	},
	"playerone_x": {
		type: "bitmap",
		asset: "playerone_x",
		scale: 1,
		position: [-31.15, -35.3],
	},
	"playertwo_x": {
		type: "bitmap",
		asset: "playertwo_x",
		scale: 1,
		position: [-31.15, -35.3],
	},
};
