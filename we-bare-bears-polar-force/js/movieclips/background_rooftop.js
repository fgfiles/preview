
var background_rooftop = {
	"lighting": {
		type: "movieclip",
		fps: 24,
		totalFrames: 22,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 4,
						classname: "white_x",
						instancename: "",
						matrix: {a: 5, b: 0, c: 0, d: 2.813, tx: 0, ty: 0},
						transform: [0, 0, 5, 2.813, 0, 0, 0],
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
						classname: "white_x",
						instancename: "",
						matrix: {a: 5, b: 0, c: 0, d: 2.813, tx: 0, ty: 0},
						transform: [0, 0, 5, 2.813, 0, 0, 0],
						alpha: 0.25,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "white_x",
						instancename: "",
						matrix: {a: 5, b: 0, c: 0, d: 2.813, tx: 0, ty: 0},
						transform: [0, 0, 5, 2.813, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "white_x",
						instancename: "",
						matrix: {a: 5, b: 0, c: 0, d: 2.813, tx: 0, ty: 0},
						transform: [0, 0, 5, 2.813, 0, 0, 0],
						alpha: 0.33,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 20,
						classname: "white_x",
						instancename: "",
						matrix: {a: 5, b: 0, c: 0, d: 2.813, tx: 0, ty: 0},
						transform: [0, 0, 5, 2.813, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "white_x",
						instancename: "",
						matrix: {a: 5, b: 0, c: 0, d: 2.813, tx: 0, ty: 0},
						transform: [0, 0, 5, 2.813, 0, 0, 0],
						alpha: 0,
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
						actions: function(self){self.children[0].children[0].blendMode = PIXI.BLEND_MODES.SCREEN;},
					},
					{
						from: 2,
						to: 21,
					},
				]
			},
		]
	},
	"white_x": {
		type: "bitmap",
		asset: "white_x",
		scale: 1,
		position: [-5, -5],
	},
	"background_rooftop": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "BG4",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_rooftop_layer4",
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
				name: "BG3",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_rooftop_layer3",
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
				name: "BG2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_rooftop_layer2",
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
				name: "BG1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_rooftop_layer1",
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
				name: "FG1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_rooftop_layer0",
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
	"floorparticle_x": {
		type: "bitmap",
		asset: "floorparticle_x",
		scale: 1,
		position: [-22.55, -20.7],
	},
	"smokeparticle_x": {
		type: "bitmap",
		asset: "smokeparticle_x",
		scale: 1,
		position: [-22.2, -20.4],
	},
	"rainparticle_x": {
		type: "bitmap",
		asset: "rainparticle_x",
		scale: 1,
		position: [-37, -6],
	},
	"raindropparticle_x": {
		type: "bitmap",
		asset: "raindropparticle_x",
		scale: 1,
		position: [-37, -21],
	},
	"sparkparticle_x": {
		type: "bitmap",
		asset: "sparkparticle_x",
		scale: 1,
		position: [-12.9, -12.05],
	},
	"_thunder_thunder": {
		type: "movieclip",
		fps: 24,
		totalFrames: 78,
		labels: {thunder: {from:11, to:77}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 77,
						classname: "_thunder_thunder_anima",
						instancename: "thunder",
						matrix: {a: 2, b: 0, c: 0, d: 2, tx: 0, ty: 0},
						transform: [0, 0, 2, 2, 0, 0, 0],
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
						to: 1,
					},
					{
						from: 2,
						to: 2,
						actions: function(self){if (Math.random() < 0.07) {
	globalsignal.emit(ge.THUNDER, {mc:self.getChildByName("thunder")});
	self.gotoAndPlay("thunder");
	self.getChildByName("thunder").gotoAndPlay(1);
	self.getChildByName("thunder").attribs.x = Math.random() * 1000 + 100;
}},
					},
					{
						from: 3,
						to: 9,
					},
					{
						from: 10,
						to: 10,
						actions: function(self){self.gotoAndPlay(1);},
					},
					{
						from: 11,
						to: 77,
					},
				]
			},
		]
	},
	"_rooftop_layer4": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer4_tile",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_rooftop_layer4_tile",
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
				name: "Layer4_tile",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_rooftop_layer4_tile",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1399, ty: 0},
						transform: [1399, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer4_tile",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_rooftop_layer4_tile",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2798, ty: 0},
						transform: [2798, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_rooftop_layer3": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer3_tile",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_rooftop_layer3_tile",
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
				name: "Layer3_tile",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_rooftop_layer3_tile",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1400, ty: 0},
						transform: [1400, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer3_tile",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_rooftop_layer3_tile",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2800, ty: 0},
						transform: [2800, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_rooftop_layer2": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer2_tile",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_rooftop_layer2_tile",
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
				name: "Layer2_tile",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_rooftop_layer2_tile",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1400, ty: 0},
						transform: [1400, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer2_tile",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_rooftop_layer2_tile",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2800, ty: 0},
						transform: [2800, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_rooftop_layer1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer1_tile",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_rooftop_layer1_tile",
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
				name: "Layer1_tile",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_rooftop_layer1_tile_var",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1399, ty: 0},
						transform: [1399, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer1_tile",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_rooftop_layer1_tile_var",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2798, ty: 0},
						transform: [2798, 0, 1, 1, 0, 0, 0],
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
	"_rooftop_layer0": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "layer0_tile",
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
				name: "Layer0_tile",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "layer0_tile",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2800, ty: 0},
						transform: [2800, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer0_tile",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "layer0_tile",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1400, ty: 0},
						transform: [1400, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_thunder_thunder_anima": {
		type: "movieclip",
		fps: 24,
		totalFrames: 20,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 1,
					},
					{
						from: 2,
						to: 18,
						classname: "_thunder_thunder_sequence",
						instancename: "thunder",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.255, 0.586], [0.634, 0.956], [1, 1], ],
							color: [[0, 0], [0.929, 0], [0.882, 0.319], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_thunder_thunder_sequence",
						instancename: "thunder",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 13.35},
						transform: [0, 13.35, 1, 1, 0, 0, 0],
						alpha: 0,
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
						to: 19,
					},
				]
			},
		]
	},
	"_rooftop_layer4_tile": {
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
						classname: "_rooftop_bggalacton4_x",
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
						classname: "tileswidth",
						instancename: "size",
						matrix: {a: 13.99, b: 0, c: 0, d: 1, tx: 0, ty: 1238.7},
						transform: [0, 1238.7, 13.99, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_rooftop_layer3_tile": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "thunder",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_thunder_thunder",
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
				name: "farbuildings.png",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_rooftop_cityfar_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 700, ty: 461.5},
						transform: [700, 461.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "cloudsback_tira",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "clouds2upanddown",
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
				name: "width",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "tileswidth",
						instancename: "size",
						matrix: {a: 14, b: 0, c: 0, d: 1, tx: 0, ty: 1123.05},
						transform: [0, 1123.05, 14, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_rooftop_layer2_tile": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "buildings1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_rooftop_buildings1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 292.5, ty: 413},
						transform: [292.5, 413, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "buildings2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_rooftop_buildings2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1096.5, ty: 395},
						transform: [1096.5, 395, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ThunderLight",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_thunder_thunderlight",
						instancename: "",
						matrix: {a: 1.161, b: 0, c: 0, d: 1.161, tx: 246.9, ty: 15.9},
						transform: [246.9, 15.9, 1.161, 1.161, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ThunderLight",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_thunder_thunderlight",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: 968, ty: 41.15},
						transform: [968, 41.15, 1, 1, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ThunderLight",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_thunder_thunderlight",
						instancename: "",
						matrix: {a: 0.656, b: 0, c: 0, d: -0.656, tx: 772.45, ty: 30.95},
						transform: [772.45, 30.95, 0.656, 0.656, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "cloudsback_tira",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "cloud1_upanddown",
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
				name: "width",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "tileswidth",
						instancename: "size",
						matrix: {a: 14, b: 0, c: 0, d: 1, tx: 0, ty: 1007.4},
						transform: [0, 1007.4, 14, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_rooftop_layer1_tile": {
		type: "movieclip",
		fps: 24,
		totalFrames: 33,
		labels: {},
		layers: [
			{
				name: "floor.png",
				keys: [
					{
						from: 0,
						to: 32,
						classname: "_rooftop_floor_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 700, ty: 492.4},
						transform: [700, 492.4, 1, 1, 0, 0, 0],
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
						to: 32,
						classname: "cartel_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 581.5, ty: 265},
						transform: [581.5, 265, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "lights.png",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_rooftop_lights_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 742, ty: 394},
						transform: [742, 394, 1, 1, 0, 0, 0],
						alpha: 0.44,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0], [0.604, 0.935], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_rooftop_lights_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 742, ty: 394},
						transform: [742, 394, 1, 1, 0, 0, 0],
						alpha: 0.49,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0], [0.604, 0.935], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 20,
						classname: "_rooftop_lights_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 742, ty: 394},
						transform: [742, 394, 1, 1, 0, 0, 0],
						alpha: 0.44,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0], [0.604, 0.935], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 31,
						classname: "_rooftop_lights_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 742, ty: 394},
						transform: [742, 394, 1, 1, 0, 0, 0],
						alpha: 0.59,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0], [0.604, 0.935], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_rooftop_lights_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 742, ty: 394},
						transform: [742, 394, 1, 1, 0, 0, 0],
						alpha: 0.44,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "width",
				keys: [
					{
						from: 0,
						to: 32,
						classname: "tileswidth",
						instancename: "size",
						matrix: {a: 13.99, b: 0, c: 0, d: 1, tx: 0, ty: 891.75},
						transform: [0, 891.75, 13.99, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_rooftop_layer1_tile_var": {
		type: "movieclip",
		fps: 24,
		totalFrames: 33,
		labels: {},
		layers: [
			{
				name: "floor.png",
				keys: [
					{
						from: 0,
						to: 32,
						classname: "_rooftop_floor_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 700, ty: 493},
						transform: [700, 493, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "width",
				keys: [
					{
						from: 0,
						to: 32,
						classname: "tileswidth",
						instancename: "size",
						matrix: {a: 13.99, b: 0, c: 0, d: 1, tx: 0, ty: 891.75},
						transform: [0, 891.75, 13.99, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"layer0_tile": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "prop3_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "prop3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 827, ty: 638},
						transform: [827, 638, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "prop1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "prop1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 141, ty: 628},
						transform: [141, 628, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "prop2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "prop2_x",
						instancename: "",
						matrix: {a: -0.804, b: 0, c: 0, d: 0.804, tx: 1081.55, ty: 701.3},
						transform: [1081.55, 701.3, 0.804, 0.804, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "prop2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "prop2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 950, ty: 693.35},
						transform: [950, 693.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "width",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "tileswidth",
						instancename: "size",
						matrix: {a: 14, b: 0, c: 0, d: 1, tx: 0, ty: 755.35},
						transform: [0, 755.35, 14, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_thunder_thunder_sequence": {
		type: "movieclip",
		fps: 24,
		totalFrames: 50,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_thunder_thunder_0_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 121.6},
						transform: [2.6, 121.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 3,
						classname: "_thunder_thunder_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 106.75},
						transform: [2.6, 106.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_thunder_thunder_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 112.15},
						transform: [2.6, 112.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 7,
						classname: "_thunder_thunder_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 111.25},
						transform: [2.6, 111.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 9,
						classname: "_thunder_thunder_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 106.75},
						transform: [2.6, 106.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 11,
						classname: "_thunder_thunder_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 112.15},
						transform: [2.6, 112.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_thunder_thunder_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 111.25},
						transform: [2.6, 111.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 15,
						classname: "_thunder_thunder_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 106.75},
						transform: [2.6, 106.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 17,
						classname: "_thunder_thunder_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 112.15},
						transform: [2.6, 112.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 19,
						classname: "_thunder_thunder_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 111.25},
						transform: [2.6, 111.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 21,
						classname: "_thunder_thunder_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 106.75},
						transform: [2.6, 106.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 23,
						classname: "_thunder_thunder_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 112.15},
						transform: [2.6, 112.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 25,
						classname: "_thunder_thunder_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 111.25},
						transform: [2.6, 111.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 27,
						classname: "_thunder_thunder_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 106.75},
						transform: [2.6, 106.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 29,
						classname: "_thunder_thunder_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 112.15},
						transform: [2.6, 112.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 30,
						to: 31,
						classname: "_thunder_thunder_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 111.25},
						transform: [2.6, 111.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 32,
						to: 33,
						classname: "_thunder_thunder_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 106.75},
						transform: [2.6, 106.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 34,
						to: 35,
						classname: "_thunder_thunder_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 112.15},
						transform: [2.6, 112.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 36,
						to: 37,
						classname: "_thunder_thunder_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 111.25},
						transform: [2.6, 111.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 38,
						to: 39,
						classname: "_thunder_thunder_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 106.75},
						transform: [2.6, 106.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 40,
						to: 41,
						classname: "_thunder_thunder_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 112.15},
						transform: [2.6, 112.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 42,
						to: 43,
						classname: "_thunder_thunder_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 111.25},
						transform: [2.6, 111.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 44,
						to: 45,
						classname: "_thunder_thunder_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 106.75},
						transform: [2.6, 106.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 46,
						to: 47,
						classname: "_thunder_thunder_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 112.15},
						transform: [2.6, 112.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 49,
						classname: "_thunder_thunder_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: 111.25},
						transform: [2.6, 111.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_rooftop_bggalacton4_x": {
		type: "bitmap",
		asset: "_rooftop_bggalacton4_x",
		scale: 1,
		position: [-5, -5],
	},
	"tileswidth": {
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
	"_rooftop_cityfar_x": {
		type: "bitmap",
		asset: "_rooftop_cityfar_x",
		scale: 1,
		position: [-705, -84.5],
	},
	"clouds2upanddown": {
		type: "movieclip",
		fps: 24,
		totalFrames: 137,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 68,
						classname: "_rooftop_cloudsback_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.539, 1], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 135,
						classname: "_rooftop_cloudsback_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -17.55},
						transform: [0, -17.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.539, 1], [1, 1], ],
						}
					},
					{
						from: 136,
						to: 136,
						classname: "_rooftop_cloudsback_x",
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
	"_rooftop_buildings1_x": {
		type: "bitmap",
		asset: "_rooftop_buildings1_x",
		scale: 1,
		position: [-184.5, -103],
	},
	"_rooftop_buildings2_x": {
		type: "bitmap",
		asset: "_rooftop_buildings2_x",
		scale: 1,
		position: [-200.5, -126],
	},
	"_thunder_thunderlight": {
		type: "movieclip",
		fps: 24,
		totalFrames: 30,
		labels: {thunder: {from:11, to:29}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_thunder_lightthunder_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.35, ty: 3.65},
						transform: [6.35, 3.65, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 14,
						classname: "_thunder_lightthunder_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.35, ty: 3.65},
						transform: [6.35, 3.65, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.492, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 18,
						classname: "_thunder_lightthunder_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.35, ty: 3.65},
						transform: [6.35, 3.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.492, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 21,
						classname: "_thunder_lightthunder_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.35, ty: 3.65},
						transform: [6.35, 3.65, 1, 1, 0, 0, 0],
						alpha: 0.6,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.492, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 28,
						classname: "_thunder_lightthunder_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.35, ty: 3.65},
						transform: [6.35, 3.65, 1, 1, 0, 0, 0],
						alpha: 0.83,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.492, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_thunder_lightthunder_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.35, ty: 3.65},
						transform: [6.35, 3.65, 1, 1, 0, 0, 0],
						alpha: 0.11,
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
						to: 1,
					},
					{
						from: 2,
						to: 2,
						actions: function(self){if (Math.random() < 0.3) {
   self.gotoAndPlay("thunder");
}},
					},
					{
						from: 3,
						to: 9,
					},
					{
						from: 10,
						to: 10,
						actions: function(self){self.gotoAndPlay(1);},
					},
					{
						from: 11,
						to: 29,
					},
				]
			},
		]
	},
	"cloud1_upanddown": {
		type: "movieclip",
		fps: 24,
		totalFrames: 111,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 52,
						classname: "_rooftop_cloudfront_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.585, 0], [0.36, 1], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 109,
						classname: "_rooftop_cloudfront_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -17.55},
						transform: [0, -17.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.585, 0], [0.36, 1], [1, 1], ],
						}
					},
					{
						from: 110,
						to: 110,
						classname: "_rooftop_cloudfront_x",
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
				name: "puffanimated",
				keys: [
					{
						from: 0,
						to: 110,
						classname: "_rooftop_puffanimated",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1065.95, ty: 68.4},
						transform: [1065.95, 68.4, 1, 1, 0, 0, 0],
						alpha: 0.75,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "puffanimated",
				keys: [
					{
						from: 0,
						to: 110,
						classname: "_rooftop_puffanimated",
						instancename: "",
						matrix: {a: -0.773, b: -0.207, c: 0.207, d: -0.773, tx: 290.15, ty: 76.35},
						transform: [290.15, 76.35, 0.8, 0.8, 2.88, -2.88, NaN],
						alpha: 0.75,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_rooftop_floor_x": {
		type: "bitmap",
		asset: "_rooftop_floor_x",
		scale: 1,
		position: [-706, -100],
	},
	"cartel_x": {
		type: "bitmap",
		asset: "cartel_x",
		scale: 1,
		position: [-5, -5],
	},
	"_rooftop_lights_x": {
		type: "bitmap",
		asset: "_rooftop_lights_x",
		scale: 1,
		position: [-662, -307],
	},
	"prop3_x": {
		type: "bitmap",
		asset: "prop3_x",
		scale: 1,
		position: [-5, -5],
	},
	"prop1_x": {
		type: "bitmap",
		asset: "prop1_x",
		scale: 1,
		position: [-5, -5],
	},
	"prop2_x": {
		type: "bitmap",
		asset: "prop2_x",
		scale: 1,
		position: [-77, -119],
	},
	"_thunder_thunder_0_x": {
		type: "bitmap",
		asset: "_thunder_thunder_0_x",
		scale: 1,
		position: [-28.15, -155.9],
	},
	"_thunder_thunder_1_x": {
		type: "bitmap",
		asset: "_thunder_thunder_1_x",
		scale: 1,
		position: [-50.5, -140.5],
	},
	"_thunder_thunder_2_x": {
		type: "bitmap",
		asset: "_thunder_thunder_2_x",
		scale: 1,
		position: [-41.15, -149.25],
	},
	"_thunder_thunder_3_x": {
		type: "bitmap",
		asset: "_thunder_thunder_3_x",
		scale: 1,
		position: [-29.6, -151.35],
	},
	"_rooftop_cloudsback_x": {
		type: "bitmap",
		asset: "_rooftop_cloudsback_x",
		scale: 1,
		position: [-5, -5],
	},
	"_thunder_lightthunder_x": {
		type: "bitmap",
		asset: "_thunder_lightthunder_x",
		scale: 1,
		position: [-201.55, -143],
	},
	"_rooftop_cloudfront_x": {
		type: "bitmap",
		asset: "_rooftop_cloudfront_x",
		scale: 1,
		position: [-5, -5],
	},
	"_rooftop_puffanimated": {
		type: "movieclip",
		fps: 24,
		totalFrames: 104,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 52,
						classname: "_rooftop_puff1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.423, 0.041], [0.583, 0.956], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 102,
						classname: "_rooftop_puff1_x",
						instancename: "",
						matrix: {a: 1.28, b: 0, c: 0, d: 1.054, tx: 0, ty: 0},
						transform: [0, 0, 1.28, 1.054, 0, 0, 0],
						alpha: 0.6,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.423, 0.041], [0.583, 0.956], [1, 1], ],
						}
					},
					{
						from: 103,
						to: 103,
						classname: "_rooftop_puff1_x",
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
	"_rooftop_puff1_x": {
		type: "bitmap",
		asset: "_rooftop_puff1_x",
		scale: 1,
		position: [-132, -112.5],
	},
};
