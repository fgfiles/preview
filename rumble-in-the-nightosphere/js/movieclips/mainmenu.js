
var mainmenu = {
	"mainmenu": {
		type: "movieclip",
		fps: 30,
		totalFrames: 214,
		labels: {in_from_loading: {from:0, to:45}, up: {from:46, to:97}, gotolevel: {from:98, to:107}, down: {from:108, to:148}, in_from_game: {from:149, to:176}, idle: {from:177, to:185}, gotocredits: {from:186, to:213}, },
		layers: [
			{
				name: "black_x",
				keys: [
					{
						from: 0,
						to: 147,
						classname: "_mainmenu_black_x",
						instancename: "",
						matrix: {a: 12.501, b: 0, c: 0, d: 9.374, tx: 400, ty: 300.05},
						transform: [400, 300.05, 12.501, 9.374, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 148,
						to: 213,
						classname: "_mainmenu_black_x",
						instancename: "",
						matrix: {a: 12.501, b: 0, c: 0, d: 9.374, tx: 400, ty: 300.05},
						transform: [400, 300.05, 12.501, 9.374, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "cinna",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_mainmenu_cinnabun",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 374.55, ty: 287.2},
						transform: [374.55, 287.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 27,
						classname: "_mainmenu_cinnabun",
						instancename: "",
						matrix: {a: 0.866, b: 0, c: 0, d: 0.866, tx: 374.55, ty: 287.2},
						transform: [374.55, 287.2, 0.866, 0.866, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.24, 0.445], [0.569, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 36,
						classname: "_mainmenu_cinnabun",
						instancename: "",
						matrix: {a: 1.048, b: 0, c: 0, d: 1.048, tx: 374.55, ty: 287.2},
						transform: [374.55, 287.2, 1.048, 1.048, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 37,
						to: 63,
						classname: "_mainmenu_cinnabun",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 374.55, ty: 287.2},
						transform: [374.55, 287.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 64,
						to: 92,
						classname: "_mainmenu_cinnabun",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 374.55, ty: 287.2},
						transform: [374.55, 287.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 93,
						to: 107,
						classname: "_mainmenu_cinnabun",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 374.55, ty: 834.25},
						transform: [374.55, 834.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 108,
						to: 138,
						classname: "_mainmenu_cinnabun",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 374.55, ty: 832.4},
						transform: [374.55, 832.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 139,
						to: 147,
						classname: "_mainmenu_cinnabun",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 374.55, ty: 287.2},
						transform: [374.55, 287.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 148,
						to: 213,
						classname: "_mainmenu_cinnabun",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 374.55, ty: 287.2},
						transform: [374.55, 287.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "black",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_mainmenu_loading_blackie_x",
						instancename: "",
						matrix: {a: 6.236, b: 0, c: 0, d: 6.087, tx: 400.85, ty: 244.05},
						transform: [400.85, 244.05, 6.236, 6.087, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 29,
						classname: "_mainmenu_loading_blackie_x",
						instancename: "",
						matrix: {a: 6.236, b: 0, c: 0, d: 6.087, tx: 400.85, ty: 244.05},
						transform: [400.85, 244.05, 6.236, 6.087, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.232, 0.466], [0.596, 0.952], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 30,
						classname: "_mainmenu_loading_blackie_x",
						instancename: "",
						matrix: {a: 6.236, b: 0, c: 0, d: 6.087, tx: 400.85, ty: 244.05},
						transform: [400.85, 244.05, 6.236, 6.087, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 31,
						to: 213,
					},
				]
			},
			{
				name: "background_x",
				keys: [
					{
						from: 0,
						to: 63,
						classname: "_mainmenu_backgroundcompo",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 399.9, ty: 300.05},
						transform: [399.9, 300.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 64,
						to: 92,
						classname: "_mainmenu_backgroundcompo",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 399.9, ty: 300.05},
						transform: [399.9, 300.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 93,
						to: 107,
						classname: "_mainmenu_backgroundcompo",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400, ty: 900.05},
						transform: [400, 900.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 108,
						to: 138,
						classname: "_mainmenu_backgroundcompo",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400, ty: 900.05},
						transform: [400, 900.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 139,
						to: 147,
						classname: "_mainmenu_backgroundcompo",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 399.9, ty: 300.05},
						transform: [399.9, 300.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 148,
						to: 213,
						classname: "_mainmenu_backgroundcompo",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 399.9, ty: 300.05},
						transform: [399.9, 300.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "candleright",
				keys: [
					{
						from: 0,
						to: 45,
						classname: "_mainmenu_candleright_blow",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 519.05, ty: 436.5},
						transform: [519.05, 436.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 46,
						to: 63,
						classname: "_mainmenu_candleright_blow",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 519.05, ty: 436.5},
						transform: [519.05, 436.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 64,
						to: 92,
						classname: "_mainmenu_candleright_blow",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 519.05, ty: 436.5},
						transform: [519.05, 436.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 93,
						to: 107,
						classname: "_mainmenu_candleright_off",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 519.05, ty: 1035.95},
						transform: [519.05, 1035.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 108,
						to: 138,
						classname: "_mainmenu_candleright",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 519.05, ty: 1035.95},
						transform: [519.05, 1035.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.457, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 139,
						to: 147,
						classname: "_mainmenu_candleright",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 519.05, ty: 436.5},
						transform: [519.05, 436.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 148,
						to: 213,
						classname: "_mainmenu_candleright",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 519.05, ty: 436.5},
						transform: [519.05, 436.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "candleleft",
				keys: [
					{
						from: 0,
						to: 45,
						classname: "_mainmenu_candleleft_blow",
						instancename: "",
						matrix: {a: 0.715, b: 0, c: 0, d: 0.715, tx: 272.4, ty: 447.45},
						transform: [272.4, 447.45, 0.715, 0.715, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 46,
						to: 63,
						classname: "_mainmenu_candleleft_blow",
						instancename: "",
						matrix: {a: 0.715, b: 0, c: 0, d: 0.715, tx: 272.4, ty: 447.45},
						transform: [272.4, 447.45, 0.715, 0.715, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 64,
						to: 92,
						classname: "_mainmenu_candleleft_blow",
						instancename: "",
						matrix: {a: 0.715, b: 0, c: 0, d: 0.715, tx: 272.4, ty: 447.45},
						transform: [272.4, 447.45, 0.715, 0.715, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 93,
						to: 107,
						classname: "_mainmenu_candleleft_off",
						instancename: "",
						matrix: {a: 0.715, b: 0, c: 0, d: 0.715, tx: 272.4, ty: 1046.9},
						transform: [272.4, 1046.9, 0.715, 0.715, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 108,
						to: 138,
						classname: "_mainmenu_candleleft",
						instancename: "",
						matrix: {a: 0.715, b: 0, c: 0, d: 0.715, tx: 272.4, ty: 1046.9},
						transform: [272.4, 1046.9, 0.715, 0.715, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.457, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 139,
						to: 147,
						classname: "_mainmenu_candleleft",
						instancename: "",
						matrix: {a: 0.715, b: 0, c: 0, d: 0.715, tx: 272.4, ty: 447.45},
						transform: [272.4, 447.45, 0.715, 0.715, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 148,
						to: 213,
						classname: "_mainmenu_candleleft",
						instancename: "",
						matrix: {a: 0.715, b: 0, c: 0, d: 0.715, tx: 272.4, ty: 447.45},
						transform: [272.4, 447.45, 0.715, 0.715, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 18",
				keys: [
					{
						from: 0,
						to: 23,
						classname: "_mainmenu_loading_blackie_x",
						instancename: "",
						matrix: {a: 8.602, b: 0, c: 0, d: 6.635, tx: 399.65, ty: 288.15},
						transform: [399.65, 288.15, 8.602, 6.635, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.143, 0.5], [0.596, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_mainmenu_loading_blackie_x",
						instancename: "",
						matrix: {a: 8.602, b: 0, c: 0, d: 6.635, tx: 399.65, ty: 288.15},
						transform: [399.65, 288.15, 8.602, 6.635, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 213,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 29,
						classname: "_mainmenu_gradient_x",
						instancename: "",
						matrix: {a: 10.481, b: 0, c: 0, d: 1, tx: 409.95, ty: 157.65},
						transform: [409.95, 157.65, 10.481, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 30,
						to: 30,
						classname: "_mainmenu_gradient_x",
						instancename: "",
						matrix: {a: 10.481, b: 0, c: 0, d: 1, tx: 409.95, ty: -89.7},
						transform: [409.95, -89.7, 10.481, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 31,
						to: 213,
					},
				]
			},
			{
				name: "peppermint",
				keys: [
					{
						from: 0,
						to: 45,
						classname: "_mainmenu_peppermint",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 396.35, ty: 431.5},
						transform: [396.35, 431.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 46,
						to: 63,
						classname: "_mainmenu_peppermint_dark",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 396.35, ty: 431.5},
						transform: [396.35, 431.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 64,
						to: 92,
						classname: "_mainmenu_peppermint_dark",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 396.35, ty: 431.5},
						transform: [396.35, 431.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 93,
						to: 107,
						classname: "_mainmenu_peppermint",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 402.75, ty: 1022.7},
						transform: [402.75, 1022.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 108,
						to: 138,
						classname: "_mainmenu_peppermint",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 402.75, ty: 1022.7},
						transform: [402.75, 1022.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.457, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 139,
						to: 147,
						classname: "_mainmenu_peppermint",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 396.35, ty: 431.5},
						transform: [396.35, 431.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 148,
						to: 213,
						classname: "_mainmenu_peppermint",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 396.35, ty: 431.5},
						transform: [396.35, 431.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "candlecenter",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_mainmenu_candlecenter_blow",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400.7, ty: 549.8},
						transform: [400.7, 549.8, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 7,
						to: 45,
						classname: "_mainmenu_candlecenter_blow",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400.7, ty: 549.8},
						transform: [400.7, 549.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 46,
						to: 63,
						classname: "_mainmenu_candlecenter_blow",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400.7, ty: 549.8},
						transform: [400.7, 549.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 64,
						to: 92,
						classname: "_mainmenu_candlecenter_blow",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400.7, ty: 549.8},
						transform: [400.7, 549.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 93,
						to: 107,
						classname: "_mainmenu_candlecenter_off",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400.7, ty: 1149.25},
						transform: [400.7, 1149.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 108,
						to: 138,
						classname: "_mainmenu_candlecenter",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400.7, ty: 1149.25},
						transform: [400.7, 1149.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.457, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 139,
						to: 147,
						classname: "_mainmenu_candlecenter",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400.7, ty: 549.8},
						transform: [400.7, 549.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 148,
						to: 213,
						classname: "_mainmenu_candlecenter",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400.7, ty: 549.8},
						transform: [400.7, 549.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "credits_btn",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_mainmenu_credits_btn",
						instancename: "credits_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 673.05, ty: 434.6},
						transform: [673.05, 434.6, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 14,
						to: 63,
						classname: "_mainmenu_credits_btn",
						instancename: "credits_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 673.05, ty: 434.6},
						transform: [673.05, 434.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 64,
						to: 92,
						classname: "_mainmenu_credits_btn",
						instancename: "credits_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 673.05, ty: 434.6},
						transform: [673.05, 434.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 93,
						to: 107,
						classname: "_mainmenu_credits_btn",
						instancename: "credits_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 673.05, ty: 1034.6},
						transform: [673.05, 1034.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 108,
						to: 138,
						classname: "_mainmenu_credits_btn",
						instancename: "credits_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 673.05, ty: 1034.6},
						transform: [673.05, 1034.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 139,
						to: 147,
						classname: "_mainmenu_credits_btn",
						instancename: "credits_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 673.05, ty: 434.6},
						transform: [673.05, 434.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 148,
						to: 213,
						classname: "_mainmenu_credits_btn",
						instancename: "credits_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 673.05, ty: 434.6},
						transform: [673.05, 434.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "buttons",
				keys: [
					{
						from: 0,
						to: 63,
						classname: "_mainmenu_container_levels",
						instancename: "container_levels",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400, ty: -299.95},
						transform: [400, -299.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 64,
						to: 92,
						classname: "_mainmenu_container_levels",
						instancename: "container_levels",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400, ty: -299.95},
						transform: [400, -299.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 93,
						to: 107,
						classname: "_mainmenu_container_levels",
						instancename: "container_levels",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400, ty: 300},
						transform: [400, 300, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 108,
						to: 138,
						classname: "_mainmenu_container_levels",
						instancename: "container_levels",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400, ty: 300},
						transform: [400, 300, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 139,
						to: 147,
						classname: "_mainmenu_container_levels",
						instancename: "container_levels",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400, ty: -299.95},
						transform: [400, -299.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 148,
						to: 213,
						classname: "_mainmenu_container_levels",
						instancename: "container_levels",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400, ty: -299.95},
						transform: [400, -299.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "title",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_mainmenu_title",
						instancename: "title",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.9, ty: -149.3},
						transform: [408.9, -149.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 24,
						classname: "_mainmenu_title",
						instancename: "title",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.9, ty: -149.3},
						transform: [408.9, -149.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0.435], [0.65, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 29,
						classname: "_mainmenu_title",
						instancename: "title",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.9, ty: 111.9},
						transform: [408.9, 111.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.65, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 63,
						classname: "_mainmenu_title",
						instancename: "title",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.9, ty: 87.95},
						transform: [408.9, 87.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 64,
						to: 89,
						classname: "_mainmenu_title",
						instancename: "title",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.9, ty: 87.95},
						transform: [408.9, 87.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.533, 0], [0.582, 0.864], [1, 1], ],
						}
					},
					{
						from: 90,
						to: 92,
						classname: "_mainmenu_title",
						instancename: "title",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.9, ty: 680.4},
						transform: [408.9, 680.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.309, 0.648], [0.64, 1], [1, 1], ],
						}
					},
					{
						from: 93,
						to: 107,
						classname: "_mainmenu_title",
						instancename: "title",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.9, ty: 690.95},
						transform: [408.9, 690.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 108,
						to: 138,
						classname: "_mainmenu_title",
						instancename: "title",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.9, ty: 690.95},
						transform: [408.9, 690.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 139,
						to: 147,
						classname: "_mainmenu_title",
						instancename: "title",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.9, ty: 87.95},
						transform: [408.9, 87.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 148,
						to: 213,
						classname: "_mainmenu_title",
						instancename: "title",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.9, ty: 87.95},
						transform: [408.9, 87.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "button_2p_x",
				keys: [
					{
						from: 0,
						to: 31,
						classname: "_mainmenu_button_2p",
						instancename: "twoplayers",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 930.2, ty: 552.6},
						transform: [930.2, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 32,
						to: 38,
						classname: "_mainmenu_button_2p",
						instancename: "twoplayers",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 930.2, ty: 552.6},
						transform: [930.2, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.22, 0.329], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 42,
						classname: "_mainmenu_button_2p",
						instancename: "twoplayers",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 528.6, ty: 552.6},
						transform: [528.6, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 43,
						to: 63,
						classname: "_mainmenu_button_2p",
						instancename: "twoplayers",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 543.1, ty: 552.6},
						transform: [543.1, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 64,
						to: 67,
						classname: "_mainmenu_button_2p",
						instancename: "twoplayers",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 543.1, ty: 552.6},
						transform: [543.1, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 68,
						to: 74,
						classname: "_mainmenu_button_2p",
						instancename: "twoplayers",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 528.6, ty: 565.65},
						transform: [528.6, 565.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 75,
						to: 133,
						classname: "_mainmenu_button_2p",
						instancename: "twoplayers",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 957.4, ty: 699.55},
						transform: [957.4, 699.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 134,
						to: 141,
						classname: "_mainmenu_button_2p",
						instancename: "twoplayers",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 957.4, ty: 552.6},
						transform: [957.4, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.228, 0.449], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 142,
						to: 145,
						classname: "_mainmenu_button_2p",
						instancename: "twoplayers",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 528.6, ty: 552.6},
						transform: [528.6, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 146,
						to: 147,
						classname: "_mainmenu_button_2p",
						instancename: "twoplayers",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 543.1, ty: 552.6},
						transform: [543.1, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 148,
						to: 172,
						classname: "_mainmenu_button_2p",
						instancename: "twoplayers",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 930.2, ty: 552.6},
						transform: [930.2, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 173,
						to: 179,
						classname: "_mainmenu_button_2p",
						instancename: "twoplayers",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 930.2, ty: 552.6},
						transform: [930.2, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.22, 0.329], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 180,
						to: 183,
						classname: "_mainmenu_button_2p",
						instancename: "twoplayers",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 528.6, ty: 552.6},
						transform: [528.6, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 184,
						to: 213,
						classname: "_mainmenu_button_2p",
						instancename: "twoplayers",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 543.1, ty: 552.6},
						transform: [543.1, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "button_1p_x",
				keys: [
					{
						from: 0,
						to: 29,
						classname: "_mainmenu_button_1p",
						instancename: "oneplayer",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -138.1, ty: 552.6},
						transform: [-138.1, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 30,
						to: 36,
						classname: "_mainmenu_button_1p",
						instancename: "oneplayer",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -138.1, ty: 552.6},
						transform: [-138.1, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.22, 0.329], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 37,
						to: 40,
						classname: "_mainmenu_button_1p",
						instancename: "oneplayer",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 270.8, ty: 552.6},
						transform: [270.8, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 63,
						classname: "_mainmenu_button_1p",
						instancename: "oneplayer",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 256.3, ty: 552.6},
						transform: [256.3, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 64,
						to: 67,
						classname: "_mainmenu_button_1p",
						instancename: "oneplayer",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 256.3, ty: 552.6},
						transform: [256.3, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 68,
						to: 74,
						classname: "_mainmenu_button_1p",
						instancename: "oneplayer",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 270.8, ty: 565.65},
						transform: [270.8, 565.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.518, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 75,
						to: 129,
						classname: "_mainmenu_button_1p",
						instancename: "oneplayer",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -153.1, ty: 699.55},
						transform: [-153.1, 699.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 130,
						to: 137,
						classname: "_mainmenu_button_1p",
						instancename: "oneplayer",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -153.1, ty: 552.6},
						transform: [-153.1, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.228, 0.449], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 138,
						to: 141,
						classname: "_mainmenu_button_1p",
						instancename: "oneplayer",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 270.8, ty: 552.6},
						transform: [270.8, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 142,
						to: 147,
						classname: "_mainmenu_button_1p",
						instancename: "oneplayer",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 256.3, ty: 552.6},
						transform: [256.3, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 148,
						to: 170,
						classname: "_mainmenu_button_1p",
						instancename: "oneplayer",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -138.1, ty: 552.6},
						transform: [-138.1, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 171,
						to: 177,
						classname: "_mainmenu_button_1p",
						instancename: "oneplayer",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -138.1, ty: 552.6},
						transform: [-138.1, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.22, 0.329], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 178,
						to: 181,
						classname: "_mainmenu_button_1p",
						instancename: "oneplayer",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 270.8, ty: 552.6},
						transform: [270.8, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 182,
						to: 213,
						classname: "_mainmenu_button_1p",
						instancename: "oneplayer",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 256.3, ty: 552.6},
						transform: [256.3, 552.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "music_btn",
				keys: [
					{
						from: 0,
						to: 24,
						classname: "_mainmenu_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 857.85, ty: 27.9},
						transform: [857.85, 27.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 31,
						classname: "_mainmenu_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 857.85, ty: 27.9},
						transform: [857.85, 27.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.22, 0.329], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 35,
						classname: "_mainmenu_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 759.25, ty: 27.9},
						transform: [759.25, 27.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 36,
						to: 63,
						classname: "_mainmenu_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 770.85, ty: 27.9},
						transform: [770.85, 27.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 64,
						to: 68,
						classname: "_mainmenu_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 770.85, ty: 27.9},
						transform: [770.85, 27.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.659, 1], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 75,
						classname: "_mainmenu_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 754.9, ty: 27.9},
						transform: [754.9, 27.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.75, 0.5], [1, 1], ],
						}
					},
					{
						from: 76,
						to: 83,
						classname: "_mainmenu_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 850.8, ty: 27.9},
						transform: [850.8, 27.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 84,
						to: 88,
						classname: "_mainmenu_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 857.1, ty: 34.15},
						transform: [857.1, 34.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.138, 0.421], [0.628, 1], [1, 1], ],
						}
					},
					{
						from: 89,
						to: 92,
						classname: "_mainmenu_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 751.8, ty: 34.15},
						transform: [751.8, 34.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.425, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 93,
						to: 107,
						classname: "_mainmenu_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 763.4, ty: 34.15},
						transform: [763.4, 34.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 108,
						to: 112,
						classname: "_mainmenu_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 763.4, ty: 34.15},
						transform: [763.4, 34.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.75, 0.5], [1, 1], ],
						}
					},
					{
						from: 113,
						to: 126,
						classname: "_mainmenu_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 857.1, ty: 34.15},
						transform: [857.1, 34.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 127,
						to: 131,
						classname: "_mainmenu_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 857.1, ty: 34.15},
						transform: [857.1, 34.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.75, 0.5], [1, 1], ],
						}
					},
					{
						from: 132,
						to: 135,
						classname: "_mainmenu_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 756.35, ty: 27.9},
						transform: [756.35, 27.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 136,
						to: 147,
						classname: "_mainmenu_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 770.85, ty: 27.9},
						transform: [770.85, 27.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 148,
						to: 165,
						classname: "_mainmenu_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 857.85, ty: 27.9},
						transform: [857.85, 27.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 166,
						to: 172,
						classname: "_mainmenu_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 857.85, ty: 27.9},
						transform: [857.85, 27.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.22, 0.329], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 173,
						to: 176,
						classname: "_mainmenu_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 759.25, ty: 27.9},
						transform: [759.25, 27.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 177,
						to: 213,
						classname: "_mainmenu_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 770.85, ty: 27.9},
						transform: [770.85, 27.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "back_btn",
				keys: [
					{
						from: 0,
						to: 87,
						classname: "_mainmenu_back_btn",
						instancename: "back_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 397.35, ty: -61},
						transform: [397.35, -61, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 88,
						to: 92,
						classname: "_mainmenu_back_btn",
						instancename: "back_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 397.35, ty: 647.1},
						transform: [397.35, 647.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.218, 0.329], [0.612, 1], [1, 1], ],
						}
					},
					{
						from: 93,
						to: 96,
						classname: "_mainmenu_back_btn",
						instancename: "back_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 397.35, ty: 518.8},
						transform: [397.35, 518.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.612, 1], [1, 1], ],
						}
					},
					{
						from: 97,
						to: 107,
						classname: "_mainmenu_back_btn",
						instancename: "back_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 397.35, ty: 535.75},
						transform: [397.35, 535.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 108,
						to: 111,
						classname: "_mainmenu_back_btn",
						instancename: "back_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 397.35, ty: 516.6},
						transform: [397.35, 516.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.809, 0.473], [1, 1], ],
						}
					},
					{
						from: 112,
						to: 147,
						classname: "_mainmenu_back_btn",
						instancename: "back_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 397.35, ty: 678.15},
						transform: [397.35, 678.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 148,
						to: 213,
						classname: "_mainmenu_back_btn",
						instancename: "back_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 397.35, ty: -61},
						transform: [397.35, -61, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flameall",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 0.733, b: 0, c: 0, d: 0.733, tx: 520.35, ty: 391.8},
						transform: [520.35, 391.8, 0.733, 0.733, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 0.733, b: 0, c: 0, d: 0.733, tx: 520.35, ty: 391.8},
						transform: [520.35, 391.8, 0.733, 0.733, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 97,
					},
					{
						from: 98,
						to: 106,
						classname: "_mainmenu_greeny_x",
						instancename: "",
						matrix: {a: 8.76, b: 0, c: 0, d: 6.689, tx: 403.55, ty: 305.5},
						transform: [403.55, 305.5, 8.76, 6.689, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.291, 0.527], [0.685, 0.983], [1, 1], ],
						}
					},
					{
						from: 107,
						to: 107,
						classname: "_mainmenu_greeny_x",
						instancename: "",
						matrix: {a: 8.76, b: 0, c: 0, d: 6.689, tx: 403.55, ty: 305.5},
						transform: [403.55, 305.5, 8.76, 6.689, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 108,
						to: 185,
					},
					{
						from: 186,
						to: 213,
						classname: "_mainmenu_fadeouttriangle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 402.6, ty: 171.9},
						transform: [402.6, 171.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flameall",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 0.756, b: 0, c: 0, d: 0.756, tx: 399.4, ty: 501.3},
						transform: [399.4, 501.3, 0.756, 0.756, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 0.756, b: 0, c: 0, d: 0.756, tx: 399.4, ty: 501.3},
						transform: [399.4, 501.3, 0.756, 0.756, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 213,
					},
				]
			},
			{
				name: "flameall",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 0.496, b: 0, c: 0, d: 0.496, tx: 272.85, ty: 414.25},
						transform: [272.85, 414.25, 0.496, 0.496, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 0.496, b: 0, c: 0, d: 0.496, tx: 272.85, ty: 414.25},
						transform: [272.85, 414.25, 0.496, 0.496, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 213,
					},
				]
			},
			{
				name: "Layer 9",
				keys: [
					{
						from: 0,
						to: 8,
					},
					{
						from: 9,
						to: 147,
					},
					{
						from: 148,
						to: 171,
						classname: "_mainmenu_uiui_tapador",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: 0, ty: 101.5},
						transform: [0, 101.5, 1, 1, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0.137], [0.774, 0.445], [1, 1], ],
						}
					},
					{
						from: 172,
						to: 172,
						classname: "_mainmenu_uiui_tapador",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: 0, ty: 1126.5},
						transform: [0, 1126.5, 1, 1, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 173,
						to: 213,
					},
				]
			},
			{
				name: "code",
				keys: [
					{
						from: 0,
						to: 44,
					},
					{
						from: 45,
						to: 45,
						actions: function(self){self.stop();
globalsignal.emit(ge.MM_READY);},
					},
					{
						from: 46,
						to: 96,
					},
					{
						from: 97,
						to: 97,
						actions: function(self){self.stop();
globalsignal.emit(ge.LEVEL_SELECTION_IN);},
					},
					{
						from: 98,
						to: 106,
					},
					{
						from: 107,
						to: 107,
						actions: function(self){self.stop();
globalsignal.emit(ge.LEVEL_SELECTED);},
					},
					{
						from: 108,
						to: 146,
					},
					{
						from: 147,
						to: 147,
						actions: function(self){self.stop();
globalsignal.emit(ge.LEVEL_SELECTION_OUT);},
					},
					{
						from: 148,
						to: 184,
					},
					{
						from: 185,
						to: 185,
						actions: function(self){self.stop();
globalsignal.emit(ge.MM_READY);},
					},
					{
						from: 186,
						to: 212,
					},
					{
						from: 213,
						to: 213,
						actions: function(self){self.stop();
globalsignal.emit(ge.CREDITS);},
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 45,
					},
					{
						from: 46,
						to: 97,
					},
					{
						from: 98,
						to: 107,
					},
					{
						from: 108,
						to: 148,
					},
					{
						from: 149,
						to: 176,
					},
					{
						from: 177,
						to: 185,
					},
					{
						from: 186,
						to: 213,
					},
				]
			},
		]
	},
	"_mainmenu_black_x": {
		type: "bitmap",
		asset: "_mainmenu_black_x",
		scale: 1,
		position: [-37, -37],
	},
	"_mainmenu_cinnabun": {
		type: "movieclip",
		fps: 30,
		totalFrames: 87,
		labels: {},
		layers: [
			{
				name: "cinnabun_bg_x",
				keys: [
					{
						from: 0,
						to: 39,
						classname: "_mainmenu_cinnabun_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7, ty: -46},
						transform: [7, -46, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.492, 1], [1, 1], ],
						}
					},
					{
						from: 40,
						to: 85,
						classname: "_mainmenu_cinnabun_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7, ty: -42.1},
						transform: [7, -42.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.492, 1], [1, 1], ],
						}
					},
					{
						from: 86,
						to: 86,
						classname: "_mainmenu_cinnabun_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7, ty: -46},
						transform: [7, -46, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "cinnabun_mouth_x",
				keys: [
					{
						from: 0,
						to: 39,
						classname: "_mainmenu_cinnabun_mouth",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 16.4, ty: 26.05},
						transform: [16.4, 26.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.492, 1], [1, 1], ],
						}
					},
					{
						from: 40,
						to: 85,
						classname: "_mainmenu_cinnabun_mouth",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 16.4, ty: 28},
						transform: [16.4, 28, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.492, 1], [1, 1], ],
						}
					},
					{
						from: 86,
						to: 86,
						classname: "_mainmenu_cinnabun_mouth",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 16.4, ty: 26.05},
						transform: [16.4, 26.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "black",
				keys: [
					{
						from: 0,
						to: 39,
						classname: "_mainmenu_black_x",
						instancename: "",
						matrix: {a: 9.303, b: 0, c: 0, d: 6.652, tx: -1, ty: -44.95},
						transform: [-1, -44.95, 9.303, 6.652, 0, 0, 0],
						alpha: 0.63,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.492, 1], [1, 1], ],
						}
					},
					{
						from: 40,
						to: 85,
						classname: "_mainmenu_black_x",
						instancename: "",
						matrix: {a: 9.303, b: 0, c: 0, d: 6.652, tx: -1, ty: -41.05},
						transform: [-1, -41.05, 9.303, 6.652, 0, 0, 0],
						alpha: 0.52,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.492, 1], [1, 1], ],
						}
					},
					{
						from: 86,
						to: 86,
						classname: "_mainmenu_black_x",
						instancename: "",
						matrix: {a: 9.303, b: 0, c: 0, d: 6.652, tx: -1, ty: -44.95},
						transform: [-1, -44.95, 9.303, 6.652, 0, 0, 0],
						alpha: 0.63,
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
						to: 39,
						classname: "_mainmenu_eye",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 85.85, ty: -46.1},
						transform: [85.85, -46.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.492, 1], [1, 1], ],
						}
					},
					{
						from: 40,
						to: 85,
						classname: "_mainmenu_eye",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 85.85, ty: -41.55},
						transform: [85.85, -41.55, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.492, 1], [1, 1], ],
						}
					},
					{
						from: 86,
						to: 86,
						classname: "_mainmenu_eye",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 85.85, ty: -46.1},
						transform: [85.85, -46.1, 1, 1, 0, 3.142, NaN],
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
						to: 39,
						classname: "_mainmenu_eye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -48.1, ty: -46.1},
						transform: [-48.1, -46.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.492, 1], [1, 1], ],
						}
					},
					{
						from: 40,
						to: 85,
						classname: "_mainmenu_eye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -48.1, ty: -41.55},
						transform: [-48.1, -41.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.492, 1], [1, 1], ],
						}
					},
					{
						from: 86,
						to: 86,
						classname: "_mainmenu_eye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -48.1, ty: -46.1},
						transform: [-48.1, -46.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_loading_blackie_x": {
		type: "bitmap",
		asset: "_mainmenu_loading_blackie_x",
		scale: 1,
		position: [-55, -55],
	},
	"_mainmenu_backgroundcompo": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "background_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_background_x",
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
				name: "book",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_book",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 273.15, ty: 134.55},
						transform: [273.15, 134.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bull",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_bull",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -270, ty: 158.5},
						transform: [-270, 158.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "cngames_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_cngames_cngames_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -347.95, ty: -263.75},
						transform: [-347.95, -263.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_candleright_blow": {
		type: "movieclip",
		fps: 30,
		totalFrames: 35,
		labels: {},
		layers: [
			{
				name: "candle3_x",
				keys: [
					{
						from: 0,
						to: 34,
						classname: "_mainmenu_candle3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.1, ty: -2.95},
						transform: [0.1, -2.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flameall",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 0.77, b: 0, c: 0, d: 0.77, tx: 0.7, ty: -45.95},
						transform: [0.7, -45.95, 0.77, 0.77, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.414], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 33,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 1.493, b: 0, c: 0, d: 1.682, tx: 1.55, ty: -59.85},
						transform: [1.55, -59.85, 1.493, 1.682, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 0.77, b: 0, c: 0, d: 0.77, tx: 0.7, ty: -45.95},
						transform: [0.7, -45.95, 0.77, 0.77, 0, 0, 0],
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
						to: 33,
					},
					{
						from: 34,
						to: 34,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_mainmenu_candleright_off": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "candle3_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_candle3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.1, ty: -2.95},
						transform: [0.1, -2.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_candleright": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "candle3_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_candle3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.1, ty: -2.95},
						transform: [0.1, -2.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flameall",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 0.77, b: 0, c: 0, d: 0.77, tx: 0.7, ty: -45.95},
						transform: [0.7, -45.95, 0.77, 0.77, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_candleleft_blow": {
		type: "movieclip",
		fps: 30,
		totalFrames: 29,
		labels: {},
		layers: [
			{
				name: "candle1_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_mainmenu_candle1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.85, ty: -10.8},
						transform: [-1.85, -10.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flameall",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: -0.736, b: 0, c: 0, d: 0.736, tx: 1.2, ty: -48.35},
						transform: [1.2, -48.35, 0.736, 0.736, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.414], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 27,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: -1.35, b: 0, c: 0, d: 1.528, tx: -0.85, ty: -61.4},
						transform: [-0.85, -61.4, 1.35, 1.528, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: -0.736, b: 0, c: 0, d: 0.736, tx: 1.2, ty: -48.35},
						transform: [1.2, -48.35, 0.736, 0.736, 0, 3.142, NaN],
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
	"_mainmenu_candleleft_off": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "candle1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_candle1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.85, ty: -10.8},
						transform: [-1.85, -10.8, 1, 1, 0, 0, 0],
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
						to: 0,
					},
				]
			},
		]
	},
	"_mainmenu_candleleft": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "candle1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_candle1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.85, ty: -10.8},
						transform: [-1.85, -10.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flameall",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: -0.736, b: 0, c: 0, d: 0.736, tx: 1.2, ty: -48.35},
						transform: [1.2, -48.35, 0.736, 0.736, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_gradient_x": {
		type: "bitmap",
		asset: "_mainmenu_gradient_x",
		scale: 1,
		position: [-47, -448.4],
	},
	"_mainmenu_peppermint": {
		type: "movieclip",
		fps: 30,
		totalFrames: 56,
		labels: {},
		layers: [
			{
				name: "peppermint_leg_x",
				keys: [
					{
						from: 0,
						to: 55,
						classname: "_mainmenu_peppermint_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.45, ty: 55.35},
						transform: [-1.45, 55.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "peppermint_hand_4_x",
				keys: [
					{
						from: 0,
						to: 23,
						classname: "_mainmenu_peppermint_hand_4_x",
						instancename: "",
						matrix: {a: -0.991, b: 0.135, c: 0.135, d: 0.991, tx: 88.1, ty: -5.7},
						transform: [88.1, -5.7, 1, 1, 0.135, 3.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 54,
						classname: "_mainmenu_peppermint_hand_4_x",
						instancename: "",
						matrix: {a: -0.989, b: 0.145, c: 0.145, d: 0.989, tx: 89.9, ty: -3.85},
						transform: [89.9, -3.85, 1, 1, 0.145, 2.997, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 55,
						classname: "_mainmenu_peppermint_hand_4_x",
						instancename: "",
						matrix: {a: -0.991, b: 0.135, c: 0.135, d: 0.991, tx: 88.1, ty: -5.7},
						transform: [88.1, -5.7, 1, 1, 0.135, 3.006, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "peppermint_arm_3_x",
				keys: [
					{
						from: 0,
						to: 23,
						classname: "_mainmenu_peppermint_arm_3_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 50.3, ty: 24.5},
						transform: [50.3, 24.5, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 54,
						classname: "_mainmenu_peppermint_arm_3_x",
						instancename: "",
						matrix: {a: -0.998, b: -0.069, c: -0.069, d: 0.998, tx: 50.1, ty: 23.55},
						transform: [50.1, 23.55, 1, 1, -0.069, -3.073, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 55,
						classname: "_mainmenu_peppermint_arm_3_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 50.3, ty: 24.5},
						transform: [50.3, 24.5, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "peppermint_hand_4_x",
				keys: [
					{
						from: 0,
						to: 23,
						classname: "_mainmenu_peppermint_hand_4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90.55, ty: -6.75},
						transform: [-90.55, -6.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 54,
						classname: "_mainmenu_peppermint_hand_4_x",
						instancename: "",
						matrix: {a: 1, b: 0.018, c: -0.018, d: 1, tx: -92.6, ty: -4.85},
						transform: [-92.6, -4.85, 1, 1, -0.018, 0.018, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 55,
						classname: "_mainmenu_peppermint_hand_4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90.55, ty: -6.75},
						transform: [-90.55, -6.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "peppermint_arm_3_x",
				keys: [
					{
						from: 0,
						to: 23,
						classname: "_mainmenu_peppermint_arm_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -52.6, ty: 24},
						transform: [-52.6, 24, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 54,
						classname: "_mainmenu_peppermint_arm_3_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.07, c: 0.07, d: 0.998, tx: -52.6, ty: 23.1},
						transform: [-52.6, 23.1, 1, 1, 0.07, -0.07, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 55,
						classname: "_mainmenu_peppermint_arm_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -52.6, ty: 24},
						transform: [-52.6, 24, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "peppermint_body_x",
				keys: [
					{
						from: 0,
						to: 23,
						classname: "_mainmenu_peppermint_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.1, ty: -12.3},
						transform: [0.1, -12.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 54,
						classname: "_mainmenu_peppermint_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.1, ty: -13.2},
						transform: [0.1, -13.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 55,
						classname: "_mainmenu_peppermint_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.1, ty: -12.3},
						transform: [0.1, -12.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "peppermint_mouth_4_x",
				keys: [
					{
						from: 0,
						to: 23,
						classname: "_mainmenu_peppermint_mouth_4_x",
						instancename: "",
						matrix: {a: 1.054, b: 0, c: 0, d: 1.005, tx: 0.2, ty: -7.45},
						transform: [0.2, -7.45, 1.054, 1.005, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 54,
						classname: "_mainmenu_peppermint_mouth_4_x",
						instancename: "",
						matrix: {a: 1.054, b: 0, c: 0, d: 1.005, tx: 0.2, ty: -10.35},
						transform: [0.2, -10.35, 1.054, 1.005, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 55,
						classname: "_mainmenu_peppermint_mouth_4_x",
						instancename: "",
						matrix: {a: 1.054, b: 0, c: 0, d: 1.005, tx: 0.2, ty: -7.45},
						transform: [0.2, -7.45, 1.054, 1.005, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "peppermint_eye_2_x",
				keys: [
					{
						from: 0,
						to: 23,
						classname: "_mainmenu_peppermint_eye_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22, ty: -19.5},
						transform: [-22, -19.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 54,
						classname: "_mainmenu_peppermint_eye_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22, ty: -21},
						transform: [-22, -21, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 55,
						classname: "_mainmenu_peppermint_eye_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22, ty: -19.5},
						transform: [-22, -19.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "peppermint_eye_2_x",
				keys: [
					{
						from: 0,
						to: 23,
						classname: "_mainmenu_peppermint_eye_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.55, ty: -19.45},
						transform: [21.55, -19.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 54,
						classname: "_mainmenu_peppermint_eye_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.55, ty: -20.95},
						transform: [21.55, -20.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 55,
						classname: "_mainmenu_peppermint_eye_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.55, ty: -19.45},
						transform: [21.55, -19.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_peppermint_dark": {
		type: "movieclip",
		fps: 30,
		totalFrames: 35,
		labels: {loop: {from:4, to:33}, },
		layers: [
			{
				name: "peppermint_leg_x",
				keys: [
					{
						from: 0,
						to: 34,
						classname: "_mainmenu_peppermint_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.45, ty: 55.35},
						transform: [-1.45, 55.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "peppermint_hand_4_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_mainmenu_peppermint_hand_4_x",
						instancename: "",
						matrix: {a: -0.991, b: 0.135, c: 0.135, d: 0.991, tx: 88.1, ty: -5.7},
						transform: [88.1, -5.7, 1, 1, 0.135, 3.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 21,
						classname: "_mainmenu_peppermint_hand_1_x",
						instancename: "",
						matrix: {a: -0.991, b: 0.135, c: 0.135, d: 0.991, tx: 77, ty: -16.35},
						transform: [77, -16.35, 1, 1, 0.135, 3.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 33,
						classname: "_mainmenu_peppermint_hand_1_x",
						instancename: "",
						matrix: {a: -0.99, b: 0.143, c: 0.143, d: 0.99, tx: 74.75, ty: -17.05},
						transform: [74.75, -17.05, 1, 1, 0.144, 2.998, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_mainmenu_peppermint_hand_1_x",
						instancename: "",
						matrix: {a: -0.991, b: 0.135, c: 0.135, d: 0.991, tx: 77, ty: -16.35},
						transform: [77, -16.35, 1, 1, 0.135, 3.006, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "peppermint_arm_3_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_mainmenu_peppermint_arm_3_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 50.3, ty: 24.5},
						transform: [50.3, 24.5, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 21,
						classname: "_mainmenu_peppermint_arm_3_x",
						instancename: "",
						matrix: {a: -0.957, b: 0.292, c: 0.292, d: 0.957, tx: 50.3, ty: 23.8},
						transform: [50.3, 23.8, 1, 1, 0.296, 2.846, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 33,
						classname: "_mainmenu_peppermint_arm_3_x",
						instancename: "",
						matrix: {a: -0.939, b: 0.344, c: 0.344, d: 0.939, tx: 50.3, ty: 24.55},
						transform: [50.3, 24.55, 1, 1, 0.352, 2.79, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_mainmenu_peppermint_arm_3_x",
						instancename: "",
						matrix: {a: -0.957, b: 0.292, c: 0.292, d: 0.957, tx: 50.3, ty: 23.8},
						transform: [50.3, 23.8, 1, 1, 0.296, 2.846, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "peppermint_hand_4_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_mainmenu_peppermint_hand_4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90.55, ty: -6.75},
						transform: [-90.55, -6.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 18,
						classname: "_mainmenu_peppermint_hand_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -76.75, ty: -25.55},
						transform: [-76.75, -25.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 33,
						classname: "_mainmenu_peppermint_hand_3_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.117, c: 0.117, d: 0.993, tx: -79.25, ty: -22.1},
						transform: [-79.25, -22.1, 1, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_mainmenu_peppermint_hand_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -76.75, ty: -25.55},
						transform: [-76.75, -25.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "peppermint_arm_3_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_mainmenu_peppermint_arm_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -52.6, ty: 24},
						transform: [-52.6, 24, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 18,
						classname: "_mainmenu_peppermint_arm_3_x",
						instancename: "",
						matrix: {a: 0.967, b: 0.254, c: -0.254, d: 0.967, tx: -52.25, ty: 22.9},
						transform: [-52.25, 22.9, 1, 1, -0.257, 0.257, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 33,
						classname: "_mainmenu_peppermint_arm_3_x",
						instancename: "",
						matrix: {a: 0.981, b: 0.195, c: -0.195, d: 0.981, tx: -52.35, ty: 23.9},
						transform: [-52.35, 23.9, 1, 1, -0.197, 0.197, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_mainmenu_peppermint_arm_3_x",
						instancename: "",
						matrix: {a: 0.967, b: 0.254, c: -0.254, d: 0.967, tx: -52.25, ty: 22.9},
						transform: [-52.25, 22.9, 1, 1, -0.257, 0.257, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "peppermint_body_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_mainmenu_peppermint_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.1, ty: -12.3},
						transform: [0.1, -12.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 18,
						classname: "_mainmenu_peppermint_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.1, ty: -13},
						transform: [0.1, -13, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 33,
						classname: "_mainmenu_peppermint_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.1, ty: -12.1},
						transform: [0.1, -12.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_mainmenu_peppermint_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.1, ty: -13},
						transform: [0.1, -13, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "peppermint_mouth_4_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_peppermint_mouth_4_x",
						instancename: "",
						matrix: {a: 1.054, b: 0, c: 0, d: 1.005, tx: 0.2, ty: -7.45},
						transform: [0.2, -7.45, 1.054, 1.005, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 1,
						classname: "_mainmenu_peppermint_mouth_1_x",
						instancename: "",
						matrix: {a: 0.862, b: 0, c: 0, d: 0.232, tx: 0.25, ty: -7.55},
						transform: [0.25, -7.55, 0.862, 0.232, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.23, 0.469], [0.589, 0.973], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 3,
						classname: "_mainmenu_peppermint_mouth_1_x",
						instancename: "",
						matrix: {a: 0.862, b: 0, c: 0, d: 0.262, tx: 0.25, ty: -7.45},
						transform: [0.25, -7.45, 0.862, 0.262, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.469], [0.589, 0.973], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 18,
						classname: "_mainmenu_peppermint_mouth_1_x",
						instancename: "",
						matrix: {a: 0.862, b: 0, c: 0, d: 0.822, tx: 0.25, ty: -7.75},
						transform: [0.25, -7.75, 0.862, 0.822, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 33,
						classname: "_mainmenu_peppermint_mouth_1_x",
						instancename: "",
						matrix: {a: 0.862, b: 0, c: 0, d: 1.117, tx: 0.25, ty: -6.85},
						transform: [0.25, -6.85, 0.862, 1.117, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_mainmenu_peppermint_mouth_1_x",
						instancename: "",
						matrix: {a: 0.862, b: 0, c: 0, d: 0.822, tx: 0.25, ty: -7.75},
						transform: [0.25, -7.75, 0.862, 0.822, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "peppermint_eye_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_peppermint_eye_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22, ty: -19.5},
						transform: [-22, -19.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 1,
						classname: "_mainmenu_peppermint_eye_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.621, tx: -22, ty: -20.55},
						transform: [-22, -20.55, 1, 0.621, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 3,
						classname: "_mainmenu_eye_darkone",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.718, tx: -22, ty: -19.55},
						transform: [-22, -19.55, 1, 0.718, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.24, 0.315], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 18,
						classname: "_mainmenu_eye_darkone",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22, ty: -20.2},
						transform: [-22, -20.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 33,
						classname: "_mainmenu_eye_darkone",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22, ty: -19.3},
						transform: [-22, -19.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_mainmenu_eye_darkone",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22, ty: -20.2},
						transform: [-22, -20.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "peppermint_eye_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_peppermint_eye_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.55, ty: -19.45},
						transform: [21.55, -19.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 1,
						classname: "_mainmenu_peppermint_eye_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.517, tx: 21.55, ty: -20.65},
						transform: [21.55, -20.65, 1, 0.517, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.484, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 3,
						classname: "_mainmenu_eye_darkone",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.711, tx: 21.55, ty: -19.5},
						transform: [21.55, -19.5, 1, 0.711, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.24, 0.315], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 18,
						classname: "_mainmenu_eye_darkone",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.55, ty: -20.15},
						transform: [21.55, -20.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 33,
						classname: "_mainmenu_eye_darkone",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.55, ty: -19.25},
						transform: [21.55, -19.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_mainmenu_eye_darkone",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 21.55, ty: -20.15},
						transform: [21.55, -20.15, 1, 1, 0, 0, 0],
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
					},
					{
						from: 4,
						to: 33,
					},
					{
						from: 34,
						to: 34,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_mainmenu_candlecenter_blow": {
		type: "movieclip",
		fps: 30,
		totalFrames: 33,
		labels: {},
		layers: [
			{
				name: "candle2_x",
				keys: [
					{
						from: 0,
						to: 32,
						classname: "_mainmenu_candle2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.4, ty: -6.35},
						transform: [6.4, -6.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flameall",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 0.831, b: 0, c: 0, d: 0.831, tx: -0.45, ty: -48.3},
						transform: [-0.45, -48.3, 0.831, 0.831, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.414], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 31,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 1.493, b: 0, c: 0, d: 1.682, tx: -0.35, ty: -62.35},
						transform: [-0.35, -62.35, 1.493, 1.682, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 0.831, b: 0, c: 0, d: 0.831, tx: -0.45, ty: -48.3},
						transform: [-0.45, -48.3, 0.831, 0.831, 0, 0, 0],
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
						to: 31,
					},
					{
						from: 32,
						to: 32,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_mainmenu_candlecenter_off": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "candle2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_candle2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.4, ty: -6.35},
						transform: [6.4, -6.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_candlecenter": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "candle2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_candle2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.4, ty: -6.35},
						transform: [6.4, -6.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flameall",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 0.831, b: 0, c: 0, d: 0.831, tx: -0.45, ty: -48.3},
						transform: [-0.45, -48.3, 0.831, 0.831, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_credits_btn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 23,
		labels: {idle: {from:0, to:0}, over: {from:2, to:9}, down: {from:11, to:12}, out: {from:14, to:21}, },
		layers: [
			{
				name: "hitbox",
				keys: [
					{
						from: 0,
						to: 22,
						classname: "_mainmenu_black_x",
						instancename: "",
						matrix: {a: 2.859, b: 0, c: 0, d: 1.998, tx: 26.5, ty: -59.75},
						transform: [26.5, -59.75, 2.859, 1.998, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "spiral_x",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_mainmenu_spiral_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.55, ty: -61.05},
						transform: [7.55, -61.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 17,
						classname: "_mainmenu_heart_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.4, ty: -66.35},
						transform: [4.4, -66.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 22,
						classname: "_mainmenu_spiral_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.55, ty: -61.05},
						transform: [7.55, -61.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "chirimbolo_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_mainmenu_chirimbolo_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 51.55, ty: -62.85},
						transform: [51.55, -62.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 21,
						classname: "_mainmenu_wonbit_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 50.05, ty: -57.85},
						transform: [50.05, -57.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 22,
						classname: "_mainmenu_chirimbolo_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 51.55, ty: -62.85},
						transform: [51.55, -62.85, 1, 1, 0, 0, 0],
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
					},
					{
						from: 2,
						to: 3,
						classname: "_mainmenu_book_pageturn_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 53.85, ty: -59.9},
						transform: [53.85, -59.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_mainmenu_book_pageturn_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 31.9, ty: -65},
						transform: [31.9, -65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 7,
						classname: "_mainmenu_book_pageturn_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5.7, ty: -64.05},
						transform: [5.7, -64.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 9,
						classname: "_mainmenu_book_pageturn_4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5.55, ty: -65.85},
						transform: [5.55, -65.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
					},
					{
						from: 14,
						to: 15,
						classname: "_mainmenu_book_pageturn_4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5.55, ty: -65.85},
						transform: [5.55, -65.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 17,
						classname: "_mainmenu_book_pageturn_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5.7, ty: -64.05},
						transform: [5.7, -64.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 19,
						classname: "_mainmenu_book_pageturn_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 31.9, ty: -65},
						transform: [31.9, -65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 21,
						classname: "_mainmenu_book_pageturn_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 53.85, ty: -59.9},
						transform: [53.85, -59.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 22,
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
						to: 3,
						classname: "_mainmenu_book_pagesymbol_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 46.3, ty: -63.05},
						transform: [46.3, -63.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_mainmenu_book_pagesymbol_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 29.25, ty: -65},
						transform: [29.25, -65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 7,
						classname: "_mainmenu_heart_x",
						instancename: "",
						matrix: {a: 0.587, b: 0.402, c: -0.091, d: 0.996, tx: 14.65, ty: -67.6},
						transform: [14.65, -67.6, 0.712, 1, -0.091, 0.601, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 9,
						classname: "_mainmenu_heart_x",
						instancename: "",
						matrix: {a: 0.973, b: 0.189, c: -0.141, d: 1, tx: 8.6, ty: -66.75},
						transform: [8.6, -66.75, 0.992, 1.01, -0.14, 0.192, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
					},
					{
						from: 14,
						to: 15,
						classname: "_mainmenu_heart_x",
						instancename: "",
						matrix: {a: 0.973, b: 0.189, c: -0.141, d: 1, tx: 8.6, ty: -66.75},
						transform: [8.6, -66.75, 0.992, 1.01, -0.14, 0.192, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 17,
						classname: "_mainmenu_heart_x",
						instancename: "",
						matrix: {a: 0.587, b: 0.402, c: -0.091, d: 0.996, tx: 14.65, ty: -67.6},
						transform: [14.65, -67.6, 0.712, 1, -0.091, 0.601, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 19,
						classname: "_mainmenu_book_pagesymbol_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 29.25, ty: -65},
						transform: [29.25, -65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 21,
						classname: "_mainmenu_book_pagesymbol_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 46.3, ty: -63.05},
						transform: [46.3, -63.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 22,
					},
				]
			},
			{
				name: "layer",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 1,
						actions: function(self){self.stop();},
					},
					{
						from: 2,
						to: 9,
					},
					{
						from: 10,
						to: 10,
						actions: function(self){self.stop();},
					},
					{
						from: 11,
						to: 12,
					},
					{
						from: 13,
						to: 13,
						actions: function(self){self.stop();},
					},
					{
						from: 14,
						to: 21,
					},
					{
						from: 22,
						to: 22,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_mainmenu_container_levels": {
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
						classname: "_mainmenu_level_select",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -400, ty: 300},
						transform: [-400, 300, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_01",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_btn_level",
						instancename: "level_01",
						matrix: {a: 1.149, b: 0, c: 0, d: 1.149, tx: -298.55, ty: -174.15},
						transform: [-298.55, -174.15, 1.149, 1.149, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_02",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_btn_level",
						instancename: "level_02",
						matrix: {a: 1.149, b: 0, c: 0, d: 1.149, tx: -150.05, ty: -174.15},
						transform: [-150.05, -174.15, 1.149, 1.149, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_03",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_btn_level",
						instancename: "level_03",
						matrix: {a: 1.149, b: 0, c: 0, d: 1.149, tx: -1.55, ty: -174.15},
						transform: [-1.55, -174.15, 1.149, 1.149, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_04",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_btn_level",
						instancename: "level_04",
						matrix: {a: 1.149, b: 0, c: 0, d: 1.149, tx: 146.95, ty: -174.15},
						transform: [146.95, -174.15, 1.149, 1.149, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_05",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_btn_level",
						instancename: "level_05",
						matrix: {a: 1.149, b: 0, c: 0, d: 1.149, tx: 295.4, ty: -174.15},
						transform: [295.4, -174.15, 1.149, 1.149, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_06",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_btn_level",
						instancename: "level_06",
						matrix: {a: 1.149, b: 0, c: 0, d: 1.149, tx: -298.55, ty: -28.5},
						transform: [-298.55, -28.5, 1.149, 1.149, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_07",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_btn_level",
						instancename: "level_07",
						matrix: {a: 1.149, b: 0, c: 0, d: 1.149, tx: -150.05, ty: -28.5},
						transform: [-150.05, -28.5, 1.149, 1.149, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_08",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_btn_level",
						instancename: "level_08",
						matrix: {a: 1.149, b: 0, c: 0, d: 1.149, tx: -1.55, ty: -28.5},
						transform: [-1.55, -28.5, 1.149, 1.149, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_09",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_btn_level",
						instancename: "level_09",
						matrix: {a: 1.149, b: 0, c: 0, d: 1.149, tx: 146.95, ty: -28.5},
						transform: [146.95, -28.5, 1.149, 1.149, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_10",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_btn_level",
						instancename: "level_10",
						matrix: {a: 1.149, b: 0, c: 0, d: 1.149, tx: 295.4, ty: -28.5},
						transform: [295.4, -28.5, 1.149, 1.149, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_11",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_btn_level",
						instancename: "level_11",
						matrix: {a: 1.149, b: 0, c: 0, d: 1.149, tx: -298.55, ty: 120.75},
						transform: [-298.55, 120.75, 1.149, 1.149, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_12",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_btn_level",
						instancename: "level_12",
						matrix: {a: 1.149, b: 0, c: 0, d: 1.149, tx: -150.05, ty: 120.75},
						transform: [-150.05, 120.75, 1.149, 1.149, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_13",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_btn_level",
						instancename: "level_13",
						matrix: {a: 1.149, b: 0, c: 0, d: 1.149, tx: -1.55, ty: 120.75},
						transform: [-1.55, 120.75, 1.149, 1.149, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_14",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_btn_level",
						instancename: "level_14",
						matrix: {a: 1.149, b: 0, c: 0, d: 1.149, tx: 146.95, ty: 120.75},
						transform: [146.95, 120.75, 1.149, 1.149, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_15",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_btn_level",
						instancename: "level_15",
						matrix: {a: 1.149, b: 0, c: 0, d: 1.149, tx: 295.4, ty: 120.75},
						transform: [295.4, 120.75, 1.149, 1.149, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_title": {
		type: "movieclip",
		fps: 30,
		totalFrames: 80,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 38,
						classname: "_mainmenu_title_gfx",
						instancename: "title",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.441, 0], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 78,
						classname: "_mainmenu_title_gfx",
						instancename: "title",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 12},
						transform: [0, 12, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.441, 0], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 79,
						to: 79,
						classname: "_mainmenu_title_gfx",
						instancename: "title",
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
	"_mainmenu_button_2p": {
		type: "movieclip",
		fps: 30,
		totalFrames: 30,
		labels: {idle: {from:0, to:5}, over: {from:7, to:11}, down: {from:13, to:21}, out: {from:23, to:28}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_mainmenu_botonlargo_bg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.75,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 11,
						classname: "_mainmenu_botonlargo_bg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.75,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.343], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 22,
						classname: "_mainmenu_botonlargo_bg",
						instancename: "",
						matrix: {a: 1.085, b: 0, c: 0, d: 1.085, tx: 0, ty: 0},
						transform: [0, 0, 1.085, 1.085, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 28,
						classname: "_mainmenu_botonlargo_bg",
						instancename: "",
						matrix: {a: 1.085, b: 0, c: 0, d: 1.085, tx: 0, ty: 0},
						transform: [0, 0, 1.085, 1.085, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.587, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_mainmenu_botonlargo_bg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.75,
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
						classname: "_mainmenu_icono_2player",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 11,
						classname: "_mainmenu_icono_2player",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.343], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 22,
						classname: "_mainmenu_icono_2player",
						instancename: "",
						matrix: {a: 1.229, b: 0, c: 0, d: 1.229, tx: 0, ty: 0},
						transform: [0, 0, 1.229, 1.229, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 28,
						classname: "_mainmenu_icono_2player",
						instancename: "",
						matrix: {a: 1.229, b: 0, c: 0, d: 1.229, tx: 0, ty: 0},
						transform: [0, 0, 1.229, 1.229, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.587, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_mainmenu_icono_2player",
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
				name: "layer",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 6,
						actions: function(self){self.gotoAndPlay("idle");},
					},
					{
						from: 7,
						to: 11,
					},
					{
						from: 12,
						to: 12,
						actions: function(self){self.stop()},
					},
					{
						from: 13,
						to: 21,
					},
					{
						from: 22,
						to: 22,
						actions: function(self){self.gotoAndPlay("idle");},
					},
					{
						from: 23,
						to: 28,
					},
					{
						from: 29,
						to: 29,
						actions: function(self){self.gotoAndPlay("idle");},
					},
				]
			},
		]
	},
	"_mainmenu_button_1p": {
		type: "movieclip",
		fps: 30,
		totalFrames: 30,
		labels: {idle: {from:0, to:5}, over: {from:7, to:11}, down: {from:13, to:21}, out: {from:23, to:28}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_mainmenu_ui_buttonlarge_bg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.75,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 11,
						classname: "_mainmenu_ui_buttonlarge_bg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.75,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.343], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 22,
						classname: "_mainmenu_ui_buttonlarge_bg",
						instancename: "",
						matrix: {a: 1.085, b: 0, c: 0, d: 1.085, tx: 0, ty: 0},
						transform: [0, 0, 1.085, 1.085, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 28,
						classname: "_mainmenu_ui_buttonlarge_bg",
						instancename: "",
						matrix: {a: 1.085, b: 0, c: 0, d: 1.085, tx: 0, ty: 0},
						transform: [0, 0, 1.085, 1.085, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.587, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_mainmenu_ui_buttonlarge_bg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.75,
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
						classname: "_mainmenu_iconi_minibar_iconi_icon_pause_gfx",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 11,
						classname: "_mainmenu_iconi_minibar_iconi_icon_pause_gfx",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.343], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 22,
						classname: "_mainmenu_iconi_minibar_iconi_icon_pause_gfx",
						instancename: "",
						matrix: {a: 1.229, b: 0, c: 0, d: 1.229, tx: 0, ty: 0},
						transform: [0, 0, 1.229, 1.229, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 28,
						classname: "_mainmenu_iconi_minibar_iconi_icon_pause_gfx",
						instancename: "",
						matrix: {a: 1.229, b: 0, c: 0, d: 1.229, tx: 0, ty: 0},
						transform: [0, 0, 1.229, 1.229, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.587, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_mainmenu_iconi_minibar_iconi_icon_pause_gfx",
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
				name: "layer",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 6,
						actions: function(self){self.gotoAndPlay("idle");},
					},
					{
						from: 7,
						to: 11,
					},
					{
						from: 12,
						to: 12,
						actions: function(self){self.stop()},
					},
					{
						from: 13,
						to: 21,
					},
					{
						from: 22,
						to: 22,
						actions: function(self){self.gotoAndPlay("idle");},
					},
					{
						from: 23,
						to: 28,
					},
					{
						from: 29,
						to: 29,
						actions: function(self){self.gotoAndPlay("idle");},
					},
				]
			},
		]
	},
	"_mainmenu_music_btn": {
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
						classname: "_mainmenu_music_off",
						instancename: "music_off",
						matrix: {a: 0.436, b: 0, c: 0, d: 0.436, tx: -0.1, ty: 0.25},
						transform: [-0.1, 0.25, 0.436, 0.436, 0, 0, 0],
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
						to: 0,
						classname: "_mainmenu_music_on",
						instancename: "music_on",
						matrix: {a: 0.436, b: 0, c: 0, d: 0.436, tx: -0.1, ty: 0.25},
						transform: [-0.1, 0.25, 0.436, 0.436, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_back_btn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 30,
		labels: {idle: {from:0, to:5}, over: {from:7, to:11}, down: {from:13, to:21}, out: {from:23, to:28}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_mainmenu_ui_buttonlarge_bg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.75,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 11,
						classname: "_mainmenu_ui_buttonlarge_bg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.75,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.343], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 22,
						classname: "_mainmenu_ui_buttonlarge_bg",
						instancename: "",
						matrix: {a: 1.085, b: 0, c: 0, d: 1.085, tx: 0, ty: 0},
						transform: [0, 0, 1.085, 1.085, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 28,
						classname: "_mainmenu_ui_buttonlarge_bg",
						instancename: "",
						matrix: {a: 1.085, b: 0, c: 0, d: 1.085, tx: 0, ty: 0},
						transform: [0, 0, 1.085, 1.085, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.587, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_mainmenu_ui_buttonlarge_bg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.75,
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
						to: 29,
						classname: "_mainmenu_uiui_icon_resume_gfx",
						instancename: "",
						matrix: {a: 0, b: 0.426, c: -0.684, d: 0, tx: 0.35, ty: 0.65},
						transform: [0.35, 0.65, 0.426, 0.684, -1.571, 1.571, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "layer",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 6,
						actions: function(self){self.gotoAndPlay("idle");},
					},
					{
						from: 7,
						to: 11,
					},
					{
						from: 12,
						to: 12,
						actions: function(self){self.stop()},
					},
					{
						from: 13,
						to: 21,
					},
					{
						from: 22,
						to: 22,
						actions: function(self){self.gotoAndPlay("idle");},
					},
					{
						from: 23,
						to: 28,
					},
					{
						from: 29,
						to: 29,
						actions: function(self){self.gotoAndPlay("idle");},
					},
				]
			},
		]
	},
	"_mainmenu_flames_flameall": {
		type: "movieclip",
		fps: 30,
		totalFrames: 27,
		labels: {loop: {from:1, to:25}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_mainmenu_flames_flameseq",
						instancename: "",
						matrix: {a: 0.799, b: 0, c: 0, d: 0.799, tx: -0.05, ty: -0.05},
						transform: [-0.05, -0.05, 0.799, 0.799, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.465, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 25,
						classname: "_mainmenu_flames_flameseq",
						instancename: "",
						matrix: {a: 0.713, b: 0, c: 0, d: 0.971, tx: -0.05, ty: -0.35},
						transform: [-0.05, -0.35, 0.713, 0.971, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.465, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 26,
						classname: "_mainmenu_flames_flameseq",
						instancename: "",
						matrix: {a: 0.799, b: 0, c: 0, d: 0.799, tx: -0.05, ty: -0.05},
						transform: [-0.05, -0.05, 0.799, 0.799, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "candle_light",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_mainmenu_candle_light",
						instancename: "",
						matrix: {a: 0.947, b: 0, c: 0, d: 0.947, tx: -1.35, ty: 1.85},
						transform: [-1.35, 1.85, 0.947, 0.947, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 12,
						classname: "_mainmenu_candle_light",
						instancename: "",
						matrix: {a: 1.003, b: 0, c: 0, d: 0.89, tx: -1.35, ty: 1.85},
						transform: [-1.35, 1.85, 1.003, 0.89, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 18,
						classname: "_mainmenu_candle_light",
						instancename: "",
						matrix: {a: 0.896, b: 0, c: 0, d: 1.118, tx: -1.35, ty: 1.85},
						transform: [-1.35, 1.85, 0.896, 1.118, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 25,
						classname: "_mainmenu_candle_light",
						instancename: "",
						matrix: {a: 1.099, b: 0, c: 0, d: 0.959, tx: -1.35, ty: 1.85},
						transform: [-1.35, 1.85, 1.099, 0.959, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 26,
						classname: "_mainmenu_candle_light",
						instancename: "",
						matrix: {a: 0.947, b: 0, c: 0, d: 0.947, tx: -1.35, ty: 1.85},
						transform: [-1.35, 1.85, 0.947, 0.947, 0, 0, 0],
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
						actions: function(self){self.gotoAndPlay(Math.ceil(Math.random() * 20));},
					},
					{
						from: 1,
						to: 25,
					},
					{
						from: 26,
						to: 26,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_mainmenu_greeny_x": {
		type: "bitmap",
		asset: "_mainmenu_greeny_x",
		scale: 1,
		position: [-55, -55],
	},
	"_mainmenu_fadeouttriangle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 27,
		labels: {},
		layers: [
			{
				name: "blackie_x",
				keys: [
					{
						from: 0,
						to: 24,
						classname: "_mainmenu_whity_x",
						instancename: "",
						matrix: {a: 11.806, b: 0, c: 0, d: 1, tx: -1.55, ty: 659.75},
						transform: [-1.55, 659.75, 11.806, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0], [0.752, 0.538], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_mainmenu_whity_x",
						instancename: "",
						matrix: {a: 11.806, b: 0, c: 0, d: 5.427, tx: -1.55, ty: 438.5},
						transform: [-1.55, 438.5, 11.806, 5.427, 0, 0, 0],
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
				name: "blackie_x",
				keys: [
					{
						from: 0,
						to: 24,
						classname: "_mainmenu_whity_x",
						instancename: "",
						matrix: {a: 6.273, b: -10.002, c: 0.847, d: 0.531, tx: -734.55, ty: -183.1},
						transform: [-734.55, -183.1, 11.806, 1, 1.011, -1.011, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0], [0.752, 0.538], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_mainmenu_whity_x",
						instancename: "",
						matrix: {a: 6.273, b: -10.002, c: 6.932, d: 4.348, tx: -430.4, ty: 7.55},
						transform: [-430.4, 7.55, 11.806, 8.183, 1.011, -1.011, NaN],
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
				name: "blackie_x",
				keys: [
					{
						from: 0,
						to: 24,
						classname: "_mainmenu_whity_x",
						instancename: "",
						matrix: {a: -6.355, b: -9.95, c: -0.843, d: 0.538, tx: 730.65, ty: -183.15},
						transform: [730.65, -183.15, 11.806, 1, -1.002, -2.139, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0], [0.752, 0.538], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_mainmenu_whity_x",
						instancename: "",
						matrix: {a: -6.355, b: -9.95, c: -6.843, d: 4.371, tx: 431.5, ty: 7.75},
						transform: [431.5, 7.75, 11.806, 8.12, -1.002, -2.139, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 26,
						classname: "_mainmenu_whity_x",
						instancename: "",
						matrix: {a: -15.14, b: -0.183, c: -0.132, d: 10.875, tx: -56.6, ty: 83.05},
						transform: [-56.6, 83.05, 15.141, 10.876, -0.012, -3.129, NaN],
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
	"_mainmenu_uiui_tapador": {
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
						classname: "_mainmenu_uiui_blacky_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 518.5, ty: 430.3},
						transform: [518.5, 430.3, 1, 1, 0, 0, 0],
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
						classname: "_mainmenu_uiui_cublridorparte_x",
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
						classname: "_mainmenu_uiui_pause_bg_x",
						instancename: "",
						matrix: {a: 8.551, b: 0, c: 0, d: 6.205, tx: 397.7, ty: -207.5},
						transform: [397.7, -207.5, 8.551, 6.205, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_cinnabun_bg_x": {
		type: "bitmap",
		asset: "_mainmenu_cinnabun_bg_x",
		scale: 1,
		position: [-258, -183],
	},
	"_mainmenu_cinnabun_mouth": {
		type: "movieclip",
		fps: 30,
		totalFrames: 100,
		labels: {},
		layers: [
			{
				name: "cinnabun_mouth_bottom_x",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_mainmenu_cinnabun_mouth_bottom_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2, ty: -0.55},
						transform: [2, -0.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.483, 0], [0.483, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 39,
						classname: "_mainmenu_cinnabun_mouth_bottom_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2, ty: 11.95},
						transform: [2, 11.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.483, 0], [0.483, 1], [1, 1], ],
						}
					},
					{
						from: 40,
						to: 49,
						classname: "_mainmenu_cinnabun_mouth_bottom_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2, ty: -0.55},
						transform: [2, -0.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.483, 0], [0.483, 1], [1, 1], ],
						}
					},
					{
						from: 50,
						to: 98,
						classname: "_mainmenu_cinnabun_mouth_bottom_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2, ty: 11.95},
						transform: [2, 11.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.483, 0], [0.483, 1], [1, 1], ],
						}
					},
					{
						from: 99,
						to: 99,
						classname: "_mainmenu_cinnabun_mouth_bottom_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2, ty: -0.55},
						transform: [2, -0.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "cinnabun_mouth_top_x",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_mainmenu_cinnabun_mouth_top_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: -9.7},
						transform: [-0.3, -9.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.483, 0], [0.483, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 39,
						classname: "_mainmenu_cinnabun_mouth_top_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: -11.7},
						transform: [-0.3, -11.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.483, 0], [0.483, 1], [1, 1], ],
						}
					},
					{
						from: 40,
						to: 49,
						classname: "_mainmenu_cinnabun_mouth_top_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: -9.7},
						transform: [-0.3, -9.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.483, 0], [0.483, 1], [1, 1], ],
						}
					},
					{
						from: 50,
						to: 98,
						classname: "_mainmenu_cinnabun_mouth_top_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: -11.7},
						transform: [-0.3, -11.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.483, 0], [0.483, 1], [1, 1], ],
						}
					},
					{
						from: 99,
						to: 99,
						classname: "_mainmenu_cinnabun_mouth_top_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: -9.7},
						transform: [-0.3, -9.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "cinnabun_cheek_right_x",
				keys: [
					{
						from: 0,
						to: 99,
						classname: "_mainmenu_cinnabun_cheek_right_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 133.2, ty: 6.95},
						transform: [133.2, 6.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "cinnabun_cheek_left_x",
				keys: [
					{
						from: 0,
						to: 99,
						classname: "_mainmenu_cinnabun_cheek_left_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -125.15, ty: -0.4},
						transform: [-125.15, -0.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_eye": {
		type: "movieclip",
		fps: 30,
		totalFrames: 51,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_mainmenu_cinnamon_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5.6, ty: -40.95},
						transform: [5.6, -40.95, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 21,
						classname: "_mainmenu_cinnamon_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5.6, ty: -40.95},
						transform: [5.6, -40.95, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.531, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 32,
						classname: "_mainmenu_cinnamon_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5.6, ty: -35},
						transform: [5.6, -35, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 33,
						to: 49,
						classname: "_mainmenu_cinnamon_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5.6, ty: -35},
						transform: [5.6, -35, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.496, 0.051], [0.579, 0.945], [1, 1], ],
						}
					},
					{
						from: 50,
						to: 50,
						classname: "_mainmenu_cinnamon_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 5.6, ty: -40.95},
						transform: [5.6, -40.95, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.531, 0], [0.583, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_mainmenu_cinnamon_eyebase_x",
						instancename: "",
						matrix: {a: 0.864, b: 0.503, c: -0.503, d: 0.864, tx: -21.4, ty: -13.75},
						transform: [-21.4, -13.75, 1, 1, -0.527, 0.527, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 21,
						classname: "_mainmenu_cinnamon_eyebase_x",
						instancename: "",
						matrix: {a: 0.864, b: 0.503, c: -0.503, d: 0.864, tx: -21.4, ty: -13.75},
						transform: [-21.4, -13.75, 1, 1, -0.527, 0.527, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.531, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 32,
						classname: "_mainmenu_cinnamon_eyebase_x",
						instancename: "",
						matrix: {a: 0.864, b: 0.503, c: -0.463, d: 0.795, tx: -21.35, ty: -13.75},
						transform: [-21.35, -13.75, 1, 0.92, -0.527, 0.527, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 33,
						to: 49,
						classname: "_mainmenu_cinnamon_eyebase_x",
						instancename: "",
						matrix: {a: 0.864, b: 0.503, c: -0.463, d: 0.795, tx: -21.35, ty: -13.75},
						transform: [-21.35, -13.75, 1, 0.92, -0.527, 0.527, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.496, 0.051], [0.579, 0.945], [1, 1], ],
						}
					},
					{
						from: 50,
						to: 50,
						classname: "_mainmenu_cinnamon_eyebase_x",
						instancename: "",
						matrix: {a: 0.864, b: 0.503, c: -0.503, d: 0.864, tx: -21.4, ty: -13.75},
						transform: [-21.4, -13.75, 1, 1, -0.527, 0.527, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.531, 0], [0.583, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 50,
						classname: "_mainmenu_eye_pupil",
						instancename: "",
						matrix: {a: 0.831, b: 0, c: 0, d: 0.831, tx: 0, ty: -0.7},
						transform: [0, -0.7, 0.831, 0.831, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_background_x": {
		type: "bitmap",
		asset: "_mainmenu_background_x",
		scale: 1,
		position: [-405, -305],
	},
	"_mainmenu_book": {
		type: "movieclip",
		fps: 30,
		totalFrames: 23,
		labels: {},
		layers: [
			{
				name: "chair_x",
				keys: [
					{
						from: 0,
						to: 22,
						classname: "_mainmenu_chair_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -66.6, ty: 42.3},
						transform: [-66.6, 42.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "staff_x",
				keys: [
					{
						from: 0,
						to: 22,
						classname: "_mainmenu_staff_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 28.5, ty: -0.2},
						transform: [28.5, -0.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_bull": {
		type: "movieclip",
		fps: 30,
		totalFrames: 160,
		labels: {},
		layers: [
			{
				name: "bull_body_x",
				keys: [
					{
						from: 0,
						to: 33,
						classname: "_mainmenu_bull_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.05, ty: 3.4},
						transform: [-6.05, 3.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.478, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 73,
						classname: "_mainmenu_bull_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.01, tx: -6.05, ty: 2.55},
						transform: [-6.05, 2.55, 1, 1.01, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.478, 1], [1, 1], ],
						}
					},
					{
						from: 74,
						to: 115,
						classname: "_mainmenu_bull_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.05, ty: 3.4},
						transform: [-6.05, 3.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.478, 1], [1, 1], ],
						}
					},
					{
						from: 116,
						to: 158,
						classname: "_mainmenu_bull_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.01, tx: -6.05, ty: 2.55},
						transform: [-6.05, 2.55, 1, 1.01, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.478, 1], [1, 1], ],
						}
					},
					{
						from: 159,
						to: 159,
						classname: "_mainmenu_bull_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.05, ty: 3.4},
						transform: [-6.05, 3.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bull_head",
				keys: [
					{
						from: 0,
						to: 101,
						classname: "_mainmenu_bull_head",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 64.45, ty: -19.6},
						transform: [64.45, -19.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.478, 1], [1, 1], ],
						}
					},
					{
						from: 102,
						to: 158,
						classname: "_mainmenu_bull_head",
						instancename: "",
						matrix: {a: 0.999, b: -0.044, c: 0.044, d: 0.999, tx: 63.95, ty: -16.6},
						transform: [63.95, -16.6, 1, 1, 0.044, -0.044, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.478, 1], [1, 1], ],
						}
					},
					{
						from: 159,
						to: 159,
						classname: "_mainmenu_bull_head",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 64.45, ty: -19.6},
						transform: [64.45, -19.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.478, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_mainmenu_cngames_cngames_x": {
		type: "bitmap",
		asset: "_mainmenu_cngames_cngames_x",
		scale: 1,
		position: [-65.65, -44],
	},
	"_mainmenu_candle3_x": {
		type: "bitmap",
		asset: "_mainmenu_candle3_x",
		scale: 1,
		position: [-46, -44],
	},
	"_mainmenu_candle1_x": {
		type: "bitmap",
		asset: "_mainmenu_candle1_x",
		scale: 1,
		position: [-34, -39],
	},
	"_mainmenu_peppermint_leg_x": {
		type: "bitmap",
		asset: "_mainmenu_peppermint_leg_x",
		scale: 1,
		position: [-40, -19.5],
	},
	"_mainmenu_peppermint_hand_4_x": {
		type: "bitmap",
		asset: "_mainmenu_peppermint_hand_4_x",
		scale: 1,
		position: [-23, -24],
	},
	"_mainmenu_peppermint_arm_3_x": {
		type: "bitmap",
		asset: "_mainmenu_peppermint_arm_3_x",
		scale: 1,
		position: [-50, -38],
	},
	"_mainmenu_peppermint_body_x": {
		type: "bitmap",
		asset: "_mainmenu_peppermint_body_x",
		scale: 1,
		position: [-70, -70.5],
	},
	"_mainmenu_peppermint_mouth_4_x": {
		type: "bitmap",
		asset: "_mainmenu_peppermint_mouth_4_x",
		scale: 1,
		position: [-16.95, -9.2],
	},
	"_mainmenu_peppermint_eye_2_x": {
		type: "bitmap",
		asset: "_mainmenu_peppermint_eye_2_x",
		scale: 1,
		position: [-12.9, -9.6],
	},
	"_mainmenu_peppermint_hand_1_x": {
		type: "bitmap",
		asset: "_mainmenu_peppermint_hand_1_x",
		scale: 1,
		position: [-15.75, -33.75],
	},
	"_mainmenu_peppermint_hand_3_x": {
		type: "bitmap",
		asset: "_mainmenu_peppermint_hand_3_x",
		scale: 1,
		position: [-16.5, -18],
	},
	"_mainmenu_peppermint_mouth_1_x": {
		type: "bitmap",
		asset: "_mainmenu_peppermint_mouth_1_x",
		scale: 1,
		position: [-20.1, -10.5],
	},
	"_mainmenu_eye_darkone": {
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
						classname: "_mainmenu_eyedark_x",
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
						classname: "_mainmenu_eyedark_x",
						instancename: "",
						matrix: {a: -0.763, b: -0.646, c: 0.646, d: -0.763, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 2.439, -2.439, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_mainmenu_eyedark_x",
						instancename: "",
						matrix: {a: -0.901, b: 0.434, c: -0.434, d: -0.901, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, -2.693, 2.693, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_mainmenu_eyedark_x",
						instancename: "",
						matrix: {a: 0.459, b: -0.888, c: 0.888, d: 0.459, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 1.094, -1.094, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_mainmenu_eyedark_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: 0.722, d: -0.692, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 2.336, 0.806, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_mainmenu_eyedark_x",
						instancename: "",
						matrix: {a: 0.885, b: -0.465, c: 0.465, d: 0.885, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0.484, -0.484, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_candle2_x": {
		type: "bitmap",
		asset: "_mainmenu_candle2_x",
		scale: 1,
		position: [-51.5, -40.5],
	},
	"_mainmenu_spiral_x": {
		type: "bitmap",
		asset: "_mainmenu_spiral_x",
		scale: 1,
		position: [-27.6, -30],
	},
	"_mainmenu_heart_x": {
		type: "bitmap",
		asset: "_mainmenu_heart_x",
		scale: 1,
		position: [-24, -26.5],
	},
	"_mainmenu_chirimbolo_x": {
		type: "bitmap",
		asset: "_mainmenu_chirimbolo_x",
		scale: 1,
		position: [-26.4, -30],
	},
	"_mainmenu_wonbit_x": {
		type: "bitmap",
		asset: "_mainmenu_wonbit_x",
		scale: 1,
		position: [-26, -28.5],
	},
	"_mainmenu_book_pageturn_1_x": {
		type: "bitmap",
		asset: "_mainmenu_book_pageturn_1_x",
		scale: 1,
		position: [-40.95, -43.7],
	},
	"_mainmenu_book_pageturn_2_x": {
		type: "bitmap",
		asset: "_mainmenu_book_pageturn_2_x",
		scale: 1,
		position: [-37.35, -41.25],
	},
	"_mainmenu_book_pageturn_3_x": {
		type: "bitmap",
		asset: "_mainmenu_book_pageturn_3_x",
		scale: 1,
		position: [-36.2, -40.8],
	},
	"_mainmenu_book_pageturn_4_x": {
		type: "bitmap",
		asset: "_mainmenu_book_pageturn_4_x",
		scale: 1,
		position: [-36.35, -42.3],
	},
	"_mainmenu_book_pagesymbol_1_x": {
		type: "bitmap",
		asset: "_mainmenu_book_pagesymbol_1_x",
		scale: 1,
		position: [-15.65, -32.35],
	},
	"_mainmenu_book_pagesymbol_2_x": {
		type: "bitmap",
		asset: "_mainmenu_book_pagesymbol_2_x",
		scale: 1,
		position: [-17.75, -34.75],
	},
	"_mainmenu_level_select": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "level_select_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_level_select_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400, ty: -300},
						transform: [400, -300, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_candle_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_level_candle_2",
						instancename: "",
						matrix: {a: 0.473, b: -0.045, c: 0.045, d: 0.473, tx: 340.3, ty: -123.85},
						transform: [340.3, -123.85, 0.475, 0.475, 0.095, -0.095, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_candle_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_level_candle_1",
						instancename: "",
						matrix: {a: -0.507, b: 0.122, c: 0.123, d: 0.512, tx: 121.85, ty: -110.05},
						transform: [121.85, -110.05, 0.522, 0.527, 0.235, 2.906, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_candle_6",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_level_candle_6",
						instancename: "",
						matrix: {a: 0.525, b: 0, c: 0, d: 0.525, tx: 39.45, ty: -302.5},
						transform: [39.45, -302.5, 0.525, 0.525, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_candle_5",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_level_candle_5",
						instancename: "",
						matrix: {a: 0.748, b: 0, c: 0, d: 0.748, tx: 733.3, ty: -490.4},
						transform: [733.3, -490.4, 0.748, 0.748, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_candle_4",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_level_candle_4",
						instancename: "",
						matrix: {a: 0.639, b: 0, c: 0, d: 0.639, tx: 725.2, ty: -308.75},
						transform: [725.2, -308.75, 0.639, 0.639, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "level_candle_3",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_level_candle_3",
						instancename: "",
						matrix: {a: 0.573, b: 0, c: 0, d: 0.573, tx: 588.1, ty: -74.45},
						transform: [588.1, -74.45, 0.573, 0.573, 0, 0, 0],
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
						to: 0,
					},
				]
			},
		]
	},
	"_mainmenu_btn_level": {
		type: "movieclip",
		fps: 30,
		totalFrames: 36,
		labels: {idle: {from:0, to:4}, over: {from:6, to:10}, down: {from:12, to:16}, out: {from:18, to:22}, locked: {from:24, to:34}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_mainmenu_ui_button_bg",
						instancename: "",
						matrix: {a: 0.878, b: 0, c: 0, d: 0.878, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.878, 0.878, 0, 0, 0],
						alpha: 0.75,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 10,
						classname: "_mainmenu_ui_button_bg",
						instancename: "",
						matrix: {a: 0.878, b: 0, c: 0, d: 0.878, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.878, 0.878, 0, 0, 0],
						alpha: 0.75,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.418], [0.61, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 17,
						classname: "_mainmenu_ui_button_bg",
						instancename: "",
						matrix: {a: 0.928, b: 0, c: 0, d: 0.928, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.928, 0.928, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 22,
						classname: "_mainmenu_ui_button_bg",
						instancename: "",
						matrix: {a: 0.928, b: 0, c: 0, d: 0.928, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.928, 0.928, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.441, 0], [0.634, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_mainmenu_ui_button_bg",
						instancename: "",
						matrix: {a: 0.878, b: 0, c: 0, d: 0.878, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.878, 0.878, 0, 0, 0],
						alpha: 0.75,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 35,
						classname: "_mainmenu_violeta_violeta_button_bg",
						instancename: "",
						matrix: {a: 0.878, b: 0, c: 0, d: 0.878, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.878, 0.878, 0, 0, 0],
						alpha: 0.5,
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
						to: 5,
						classname: "_mainmenu_number",
						instancename: "number_txt",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 10,
						classname: "_mainmenu_number",
						instancename: "number_txt",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.418], [0.61, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 17,
						classname: "_mainmenu_number",
						instancename: "number_txt",
						matrix: {a: 1.109, b: 0, c: 0, d: 1.109, tx: 0, ty: 0},
						transform: [0, 0, 1.109, 1.109, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 22,
						classname: "_mainmenu_number",
						instancename: "number_txt",
						matrix: {a: 1.109, b: 0, c: 0, d: 1.109, tx: 0, ty: 0},
						transform: [0, 0, 1.109, 1.109, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.441, 0], [0.634, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_mainmenu_number",
						instancename: "number_txt",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 35,
						classname: "_mainmenu_number",
						instancename: "number_txt",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.33,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "layer",
				keys: [
					{
						from: 0,
						to: 4,
					},
					{
						from: 5,
						to: 5,
						actions: function(self){self.gotoAndPlay("idle");},
					},
					{
						from: 6,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						actions: function(self){self.stop()},
					},
					{
						from: 12,
						to: 16,
					},
					{
						from: 17,
						to: 17,
						actions: function(self){self.gotoAndPlay("idle");},
					},
					{
						from: 18,
						to: 22,
					},
					{
						from: 23,
						to: 23,
						actions: function(self){self.gotoAndPlay("idle");},
					},
					{
						from: 24,
						to: 34,
					},
					{
						from: 35,
						to: 35,
						actions: function(self){self.gotoAndPlay("idle");},
					},
				]
			},
		]
	},
	"_mainmenu_title_gfx": {
		type: "movieclip",
		fps: 30,
		totalFrames: 30,
		labels: {english: {from:0, to:8}, spanish: {from:10, to:18}, portuguese: {from:20, to:28}, },
		layers: [
			{
				name: "logo",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_mainmenu_logo_en_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -9, ty: 31.5},
						transform: [-9, 31.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 19,
						classname: "_mainmenu_logo_sp_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -9, ty: 31.5},
						transform: [-9, 31.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 29,
						classname: "_mainmenu_logo_pt_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -9, ty: 32},
						transform: [-9, 32, 1, 1, 0, 0, 0],
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
						to: 29,
						classname: "_mainmenu_adventuretimelogo_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -20, ty: -56},
						transform: [-20, -56, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "layer",
				keys: [
					{
						from: 0,
						to: 8,
					},
					{
						from: 9,
						to: 9,
						actions: function(self){self.stop()},
					},
					{
						from: 10,
						to: 18,
					},
					{
						from: 19,
						to: 19,
						actions: function(self){self.stop()},
					},
					{
						from: 20,
						to: 28,
					},
					{
						from: 29,
						to: 29,
						actions: function(self){self.stop()},
					},
				]
			},
		]
	},
	"_mainmenu_botonlargo_bg": {
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
						classname: "_mainmenu_ui_buttonlarge_bg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: 1.2},
						transform: [-0.2, 1.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_icono_2player": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "iconI_icon_pause_gfx",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_iconi_minibar_iconi_icon_pause_gfx",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -12.25, ty: -0.7},
						transform: [-12.25, -0.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "iconI_icon_pause_gfx",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_iconi_minibar_iconi_icon_pause_gfx",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.95, ty: -0.7},
						transform: [10.95, -0.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_ui_buttonlarge_bg": {
		type: "movieclip",
		fps: 30,
		totalFrames: 33,
		labels: {loop: {from:1, to:31}, },
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_mainmenu_ui_buttonlarge_bg_seq,",
						instancename: "",
						matrix: {a: -0.908, b: 0, c: 0, d: 0.847, tx: 0, ty: 0},
						transform: [0, 0, 0.908, 0.847, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 31,
						classname: "_mainmenu_ui_buttonlarge_bg_seq,",
						instancename: "",
						matrix: {a: -0.833, b: 0, c: 0, d: 0.931, tx: 0, ty: 0},
						transform: [0, 0, 0.833, 0.931, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_mainmenu_ui_buttonlarge_bg_seq,",
						instancename: "",
						matrix: {a: -0.908, b: 0, c: 0, d: 0.847, tx: 0, ty: 0},
						transform: [0, 0, 0.908, 0.847, 0, 3.142, NaN],
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 31,
					},
					{
						from: 32,
						to: 32,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_mainmenu_iconi_minibar_iconi_icon_pause_gfx": {
		type: "movieclip",
		fps: 30,
		totalFrames: 26,
		labels: {loop: {from:1, to:24}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_iconi_minibar_iconi_icon_pause_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 11,
						classname: "_mainmenu_iconi_minibar_iconi_icon_pause_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 24,
						classname: "_mainmenu_iconi_minibar_iconi_icon_pause_frames",
						instancename: "",
						matrix: {a: 1.087, b: 0, c: 0, d: 0.96, tx: 0, ty: 0},
						transform: [0, 0, 1.087, 0.96, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_mainmenu_iconi_minibar_iconi_icon_pause_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
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
	"_mainmenu_music_off": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {over: {from:0, to:6}, down: {from:7, to:13}, out: {from:14, to:19}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_mainmenu_ui_button_bg",
						instancename: "",
						matrix: {a: 0.878, b: 0, c: 0, d: 0.878, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.878, 0.878, 0, 0, 0],
						alpha: 0.75,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_mainmenu_ui_button_bg",
						instancename: "",
						matrix: {a: 0.93, b: 0, c: 0, d: 0.93, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.93, 0.93, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_mainmenu_ui_button_bg",
						instancename: "",
						matrix: {a: 0.93, b: 0, c: 0, d: 0.93, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.93, 0.93, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_mainmenu_ui_button_bg",
						instancename: "",
						matrix: {a: 0.878, b: 0, c: 0, d: 0.878, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.878, 0.878, 0, 0, 0],
						alpha: 0.75,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "icon_resume_gfx",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_mainmenu_uiui_icon_resume_gfx",
						instancename: "",
						matrix: {a: -0.603, b: 0, c: 0, d: -0.619, tx: -12.3, ty: 2.95},
						transform: [-12.3, 2.95, 0.603, 0.619, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.24, 0.459], [0.545, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_mainmenu_uiui_icon_resume_gfx",
						instancename: "",
						matrix: {a: -0.687, b: 0, c: 0, d: -0.705, tx: -13.7, ty: 3.2},
						transform: [-13.7, 3.2, 0.687, 0.705, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_mainmenu_uiui_icon_resume_gfx",
						instancename: "",
						matrix: {a: -0.687, b: 0, c: 0, d: -0.705, tx: -13.7, ty: 3.2},
						transform: [-13.7, 3.2, 0.687, 0.705, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_mainmenu_uiui_icon_resume_gfx",
						instancename: "",
						matrix: {a: -0.603, b: 0, c: 0, d: -0.619, tx: -12.3, ty: 2.95},
						transform: [-12.3, 2.95, 0.603, 0.619, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "minibar_icon_pause_gfx",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_gfx",
						instancename: "",
						matrix: {a: -0.358, b: 0.358, c: -0.272, d: -0.272, tx: 14.95, ty: 1.1},
						transform: [14.95, 1.1, 0.507, 0.384, -2.356, 2.356, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.24, 0.459], [0.545, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_gfx",
						instancename: "",
						matrix: {a: -0.408, b: 0.408, c: -0.31, d: -0.31, tx: 17.3, ty: 1.1},
						transform: [17.3, 1.1, 0.577, 0.438, -2.356, 2.356, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_gfx",
						instancename: "",
						matrix: {a: -0.408, b: 0.408, c: -0.31, d: -0.31, tx: 17.3, ty: 1.1},
						transform: [17.3, 1.1, 0.577, 0.438, -2.356, 2.356, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_gfx",
						instancename: "",
						matrix: {a: -0.358, b: 0.358, c: -0.272, d: -0.272, tx: 14.95, ty: 1.1},
						transform: [14.95, 1.1, 0.507, 0.384, -2.356, 2.356, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "minibar_icon_pause_gfx",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_gfx",
						instancename: "",
						matrix: {a: -0.358, b: -0.358, c: -0.272, d: 0.272, tx: 14.95, ty: 1.2},
						transform: [14.95, 1.2, 0.507, 0.384, -0.785, -2.356, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.24, 0.459], [0.545, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_gfx",
						instancename: "",
						matrix: {a: -0.408, b: -0.408, c: -0.31, d: 0.31, tx: 17.3, ty: 1.2},
						transform: [17.3, 1.2, 0.577, 0.438, -0.785, -2.356, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_gfx",
						instancename: "",
						matrix: {a: -0.408, b: -0.408, c: -0.31, d: 0.31, tx: 17.3, ty: 1.2},
						transform: [17.3, 1.2, 0.577, 0.438, -0.785, -2.356, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_gfx",
						instancename: "",
						matrix: {a: -0.358, b: -0.358, c: -0.272, d: 0.272, tx: 14.95, ty: 1.2},
						transform: [14.95, 1.2, 0.507, 0.384, -0.785, -2.356, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "code",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 6,
						actions: function(self){self.stop();},
					},
					{
						from: 7,
						to: 12,
					},
					{
						from: 13,
						to: 13,
						actions: function(self){self.stop();},
					},
					{
						from: 14,
						to: 18,
					},
					{
						from: 19,
						to: 19,
						actions: function(self){self.stop();},
					},
				]
			},
			{
				name: "labels",
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
						to: 19,
					},
				]
			},
		]
	},
	"_mainmenu_music_on": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {over: {from:0, to:6}, down: {from:7, to:13}, out: {from:14, to:19}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_mainmenu_ui_button_bg",
						instancename: "",
						matrix: {a: 0.878, b: 0, c: 0, d: 0.878, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.878, 0.878, 0, 0, 0],
						alpha: 0.75,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_mainmenu_ui_button_bg",
						instancename: "",
						matrix: {a: 0.93, b: 0, c: 0, d: 0.93, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.93, 0.93, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_mainmenu_ui_button_bg",
						instancename: "",
						matrix: {a: 0.93, b: 0, c: 0, d: 0.93, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.93, 0.93, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_mainmenu_ui_button_bg",
						instancename: "",
						matrix: {a: 0.878, b: 0, c: 0, d: 0.878, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.878, 0.878, 0, 0, 0],
						alpha: 0.75,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "icon_resume_gfx",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_mainmenu_uiui_icon_resume_gfx",
						instancename: "",
						matrix: {a: -0.603, b: 0, c: 0, d: -0.619, tx: -12.3, ty: 2.95},
						transform: [-12.3, 2.95, 0.603, 0.619, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.24, 0.459], [0.545, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_mainmenu_uiui_icon_resume_gfx",
						instancename: "",
						matrix: {a: -0.71, b: 0, c: 0, d: -0.728, tx: -14.1, ty: 3.25},
						transform: [-14.1, 3.25, 0.71, 0.728, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_mainmenu_uiui_icon_resume_gfx",
						instancename: "",
						matrix: {a: -0.71, b: 0, c: 0, d: -0.728, tx: -14.1, ty: 3.25},
						transform: [-14.1, 3.25, 0.71, 0.728, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.461, 0], [0.64, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_mainmenu_uiui_icon_resume_gfx",
						instancename: "",
						matrix: {a: -0.603, b: 0, c: 0, d: -0.619, tx: -12.3, ty: 2.95},
						transform: [-12.3, 2.95, 0.603, 0.619, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "minibar_icon_sound_gfx",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_gfx",
						instancename: "",
						matrix: {a: 0.687, b: 0, c: 0, d: 0.687, tx: 19.65, ty: 0},
						transform: [19.65, 0, 0.687, 0.687, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.469], [0.596, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_gfx",
						instancename: "",
						matrix: {a: 0.795, b: 0, c: 0, d: 0.795, tx: 23.2, ty: 0.1},
						transform: [23.2, 0.1, 0.795, 0.795, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_gfx",
						instancename: "",
						matrix: {a: 0.795, b: 0, c: 0, d: 0.795, tx: 23.2, ty: 0.1},
						transform: [23.2, 0.1, 0.795, 0.795, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.461, 0], [0.64, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_gfx",
						instancename: "",
						matrix: {a: 0.687, b: 0, c: 0, d: 0.687, tx: 19.65, ty: 0},
						transform: [19.65, 0, 0.687, 0.687, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "minibar_icon_sound_gfx",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_gfx",
						instancename: "",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.46, tx: 8.25, ty: 0.8},
						transform: [8.25, 0.8, 0.46, 0.46, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.469], [0.596, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_gfx",
						instancename: "",
						matrix: {a: 0.532, b: 0, c: 0, d: 0.532, tx: 9.55, ty: 1},
						transform: [9.55, 1, 0.532, 0.532, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_gfx",
						instancename: "",
						matrix: {a: 0.532, b: 0, c: 0, d: 0.532, tx: 9.55, ty: 1},
						transform: [9.55, 1, 0.532, 0.532, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.461, 0], [0.64, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_gfx",
						instancename: "",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.46, tx: 8.25, ty: 0.8},
						transform: [8.25, 0.8, 0.46, 0.46, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "code",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 6,
						actions: function(self){self.stop();},
					},
					{
						from: 7,
						to: 12,
					},
					{
						from: 13,
						to: 13,
						actions: function(self){self.stop();},
					},
					{
						from: 14,
						to: 18,
					},
					{
						from: 19,
						to: 19,
						actions: function(self){self.stop();},
					},
				]
			},
			{
				name: "labels",
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
						to: 19,
					},
				]
			},
		]
	},
	"_mainmenu_uiui_icon_resume_gfx": {
		type: "movieclip",
		fps: 30,
		totalFrames: 26,
		labels: {loop: {from:1, to:24}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_uiui_icon_resume_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 11,
						classname: "_mainmenu_uiui_icon_resume_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 24,
						classname: "_mainmenu_uiui_icon_resume_frames",
						instancename: "",
						matrix: {a: 1.087, b: 0, c: 0, d: 0.96, tx: 0, ty: 0},
						transform: [0, 0, 1.087, 0.96, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_mainmenu_uiui_icon_resume_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
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
	"_mainmenu_flames_flameseq": {
		type: "movieclip",
		fps: 30,
		totalFrames: 21,
		labels: {loop: {from:1, to:19}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_mainmenu_flames_flame_1_x",
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
						classname: "_mainmenu_flames_flame_2_x",
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
						classname: "_mainmenu_flames_flame_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_mainmenu_flames_flame_4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_mainmenu_flames_flame_5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_mainmenu_flames_flame_6_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_mainmenu_flames_flame_7_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
						classname: "_mainmenu_flames_flame_8_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_mainmenu_flames_flame_9_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_mainmenu_flames_flame_10_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_mainmenu_flames_flame_11_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_mainmenu_flames_flame_12_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_mainmenu_flames_flame_13_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_mainmenu_flames_flame_14_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_mainmenu_flames_flame_15_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 16,
						classname: "_mainmenu_flames_flame_16_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 17,
						classname: "_mainmenu_flames_flame_17_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 18,
						classname: "_mainmenu_flames_flame_18_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 19,
						classname: "_mainmenu_flames_flame_19_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 20,
						classname: "_mainmenu_flames_flame_20_x",
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
						to: 0,
						actions: function(self){self.gotoAndPlay(Math.ceil(Math.random() * 15));},
					},
					{
						from: 1,
						to: 19,
					},
					{
						from: 20,
						to: 20,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_mainmenu_candle_light": {
		type: "movieclip",
		fps: 30,
		totalFrames: 48,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_mainmenu_candle_light_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.472, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 11,
						classname: "_mainmenu_candle_light_1_x",
						instancename: "",
						matrix: {a: 1.085, b: 0, c: 0, d: 1.085, tx: 0, ty: 0},
						transform: [0, 0, 1.085, 1.085, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.472, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 18,
						classname: "_mainmenu_candle_light_1_x",
						instancename: "",
						matrix: {a: 0.898, b: 0, c: 0, d: 0.898, tx: 0, ty: 0},
						transform: [0, 0, 0.898, 0.898, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.472, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 24,
						classname: "_mainmenu_candle_light_1_x",
						instancename: "",
						matrix: {a: 1.001, b: 0, c: 0, d: 1.001, tx: 0, ty: 0},
						transform: [0, 0, 1.001, 1.001, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.472, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 28,
						classname: "_mainmenu_candle_light_1_x",
						instancename: "",
						matrix: {a: 0.805, b: 0, c: 0, d: 0.805, tx: 0, ty: 0},
						transform: [0, 0, 0.805, 0.805, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.472, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 33,
						classname: "_mainmenu_candle_light_1_x",
						instancename: "",
						matrix: {a: 1.018, b: 0, c: 0, d: 1.018, tx: 0, ty: 0},
						transform: [0, 0, 1.018, 1.018, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.472, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 39,
						classname: "_mainmenu_candle_light_1_x",
						instancename: "",
						matrix: {a: 0.975, b: 0, c: 0, d: 0.975, tx: 0, ty: 0},
						transform: [0, 0, 0.975, 0.975, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.472, 1], [1, 1], ],
						}
					},
					{
						from: 40,
						to: 42,
						classname: "_mainmenu_candle_light_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.472, 1], [1, 1], ],
						}
					},
					{
						from: 43,
						to: 46,
						classname: "_mainmenu_candle_light_1_x",
						instancename: "",
						matrix: {a: 0.941, b: 0, c: 0, d: 0.941, tx: 0, ty: 0},
						transform: [0, 0, 0.941, 0.941, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.472, 1], [1, 1], ],
						}
					},
					{
						from: 47,
						to: 47,
						classname: "_mainmenu_candle_light_1_x",
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
	"_mainmenu_whity_x": {
		type: "bitmap",
		asset: "_mainmenu_whity_x",
		scale: 1,
		position: [-55, -55],
	},
	"_mainmenu_uiui_blacky_1_x": {
		type: "bitmap",
		asset: "_mainmenu_uiui_blacky_1_x",
		scale: 1,
		position: [-31.45, -56.75],
	},
	"_mainmenu_uiui_cublridorparte_x": {
		type: "bitmap",
		asset: "_mainmenu_uiui_cublridorparte_x",
		scale: 1,
		position: [-35.4, 76.15],
	},
	"_mainmenu_uiui_pause_bg_x": {
		type: "bitmap",
		asset: "_mainmenu_uiui_pause_bg_x",
		scale: 1,
		position: [-55, -55],
	},
	"_mainmenu_cinnabun_mouth_bottom_x": {
		type: "bitmap",
		asset: "_mainmenu_cinnabun_mouth_bottom_x",
		scale: 1,
		position: [-118, -35],
	},
	"_mainmenu_cinnabun_mouth_top_x": {
		type: "bitmap",
		asset: "_mainmenu_cinnabun_mouth_top_x",
		scale: 1,
		position: [-101.5, -27],
	},
	"_mainmenu_cinnabun_cheek_right_x": {
		type: "bitmap",
		asset: "_mainmenu_cinnabun_cheek_right_x",
		scale: 1,
		position: [-52.5, -52.5],
	},
	"_mainmenu_cinnabun_cheek_left_x": {
		type: "bitmap",
		asset: "_mainmenu_cinnabun_cheek_left_x",
		scale: 1,
		position: [-47, -47],
	},
	"_mainmenu_cinnamon_eyebrow_1_x": {
		type: "bitmap",
		asset: "_mainmenu_cinnamon_eyebrow_1_x",
		scale: 1,
		position: [-69.95, -27.45],
	},
	"_mainmenu_cinnamon_eyebase_x": {
		type: "bitmap",
		asset: "_mainmenu_cinnamon_eyebase_x",
		scale: 1,
		position: [-46.75, -23.1],
	},
	"_mainmenu_eye_pupil": {
		type: "movieclip",
		fps: 30,
		totalFrames: 23,
		labels: {},
		layers: [
			{
				name: "cinnabun_eyeglow_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_mainmenu_cinnabun_eyeglow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.49,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 21,
						classname: "_mainmenu_cinnabun_eyeglow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.34,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_mainmenu_cinnabun_eyeglow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.49,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.488, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 22,
						classname: "_mainmenu_cinnabun_eye_x",
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
	"_mainmenu_chair_x": {
		type: "bitmap",
		asset: "_mainmenu_chair_x",
		scale: 1,
		position: [-43.5, -40.5],
	},
	"_mainmenu_staff_x": {
		type: "bitmap",
		asset: "_mainmenu_staff_x",
		scale: 1,
		position: [-80.5, -101.5],
	},
	"_mainmenu_bull_body_x": {
		type: "bitmap",
		asset: "_mainmenu_bull_body_x",
		scale: 1,
		position: [-113, -92],
	},
	"_mainmenu_bull_head": {
		type: "movieclip",
		fps: 30,
		totalFrames: 156,
		labels: {},
		layers: [
			{
				name: "bull_head_x",
				keys: [
					{
						from: 0,
						to: 155,
						classname: "_mainmenu_bull_head_x",
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
				name: "bull_eye_r_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_mainmenu_bull_eye_r",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 41.05, ty: 30.05},
						transform: [41.05, 30.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 8,
						classname: "_mainmenu_bull_eye_r",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 41.05, ty: 30.05},
						transform: [41.05, 30.05, 1, 1, 0, 0, 0],
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
						classname: "_mainmenu_bull_eye_r",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.225, tx: 40.95, ty: 31.8},
						transform: [40.95, 31.8, 1, 0.225, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
					},
					{
						from: 11,
						to: 12,
						classname: "_mainmenu_bull_eye_r",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.225, tx: 40.95, ty: 31.8},
						transform: [40.95, 31.8, 1, 0.225, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_mainmenu_bull_eye_r",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 41.05, ty: 30.05},
						transform: [41.05, 30.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_mainmenu_bull_eye_r",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.137, tx: 41.05, ty: 29.25},
						transform: [41.05, 29.25, 1, 1.137, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 70,
						classname: "_mainmenu_bull_eye_r",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 41.05, ty: 30.05},
						transform: [41.05, 30.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 71,
						to: 72,
						classname: "_mainmenu_bull_eye_r",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 41.05, ty: 30.05},
						transform: [41.05, 30.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 73,
						to: 73,
						classname: "_mainmenu_bull_eye_r",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.225, tx: 40.95, ty: 31.8},
						transform: [40.95, 31.8, 1, 0.225, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 74,
						to: 74,
					},
					{
						from: 75,
						to: 76,
						classname: "_mainmenu_bull_eye_r",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.225, tx: 40.95, ty: 31.8},
						transform: [40.95, 31.8, 1, 0.225, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 77,
						to: 77,
						classname: "_mainmenu_bull_eye_r",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 41.05, ty: 30.05},
						transform: [41.05, 30.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 78,
						to: 78,
						classname: "_mainmenu_bull_eye_r",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.137, tx: 41.05, ty: 29.25},
						transform: [41.05, 29.25, 1, 1.137, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 79,
						to: 80,
						classname: "_mainmenu_bull_eye_r",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 41.05, ty: 30.05},
						transform: [41.05, 30.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 81,
						to: 82,
						classname: "_mainmenu_bull_eye_r",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 41.05, ty: 30.05},
						transform: [41.05, 30.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 83,
						to: 83,
						classname: "_mainmenu_bull_eye_r",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.225, tx: 40.95, ty: 31.8},
						transform: [40.95, 31.8, 1, 0.225, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 84,
						to: 84,
					},
					{
						from: 85,
						to: 86,
						classname: "_mainmenu_bull_eye_r",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.225, tx: 40.95, ty: 31.8},
						transform: [40.95, 31.8, 1, 0.225, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 87,
						to: 87,
						classname: "_mainmenu_bull_eye_r",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 41.05, ty: 30.05},
						transform: [41.05, 30.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 88,
						to: 88,
						classname: "_mainmenu_bull_eye_r",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.137, tx: 41.05, ty: 29.25},
						transform: [41.05, 29.25, 1, 1.137, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 89,
						to: 155,
						classname: "_mainmenu_bull_eye_r",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 41.05, ty: 30.05},
						transform: [41.05, 30.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bull_eye_l_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_mainmenu_bull_eye_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.55, ty: 34.55},
						transform: [3.55, 34.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 8,
						classname: "_mainmenu_bull_eye_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.55, ty: 34.55},
						transform: [3.55, 34.55, 1, 1, 0, 0, 0],
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
						classname: "_mainmenu_bull_eye_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.215, tx: 3.55, ty: 34.55},
						transform: [3.55, 34.55, 1, 0.215, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
					},
					{
						from: 11,
						to: 12,
						classname: "_mainmenu_bull_eye_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.215, tx: 3.55, ty: 34.55},
						transform: [3.55, 34.55, 1, 0.215, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_mainmenu_bull_eye_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.55, ty: 34.55},
						transform: [3.55, 34.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_mainmenu_bull_eye_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.131, tx: 3.55, ty: 33.7},
						transform: [3.55, 33.7, 1, 1.131, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 70,
						classname: "_mainmenu_bull_eye_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.55, ty: 34.55},
						transform: [3.55, 34.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 71,
						to: 72,
						classname: "_mainmenu_bull_eye_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.55, ty: 34.55},
						transform: [3.55, 34.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 73,
						to: 73,
						classname: "_mainmenu_bull_eye_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.215, tx: 3.55, ty: 34.55},
						transform: [3.55, 34.55, 1, 0.215, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 74,
						to: 74,
					},
					{
						from: 75,
						to: 76,
						classname: "_mainmenu_bull_eye_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.215, tx: 3.55, ty: 34.55},
						transform: [3.55, 34.55, 1, 0.215, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 77,
						to: 77,
						classname: "_mainmenu_bull_eye_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.55, ty: 34.55},
						transform: [3.55, 34.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 78,
						to: 78,
						classname: "_mainmenu_bull_eye_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.131, tx: 3.55, ty: 33.7},
						transform: [3.55, 33.7, 1, 1.131, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 79,
						to: 80,
						classname: "_mainmenu_bull_eye_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.55, ty: 34.55},
						transform: [3.55, 34.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 81,
						to: 82,
						classname: "_mainmenu_bull_eye_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.55, ty: 34.55},
						transform: [3.55, 34.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 83,
						to: 83,
						classname: "_mainmenu_bull_eye_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.215, tx: 3.55, ty: 34.55},
						transform: [3.55, 34.55, 1, 0.215, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 84,
						to: 84,
					},
					{
						from: 85,
						to: 86,
						classname: "_mainmenu_bull_eye_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.215, tx: 3.55, ty: 34.55},
						transform: [3.55, 34.55, 1, 0.215, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 87,
						to: 87,
						classname: "_mainmenu_bull_eye_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.55, ty: 34.55},
						transform: [3.55, 34.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 88,
						to: 88,
						classname: "_mainmenu_bull_eye_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.131, tx: 3.55, ty: 33.7},
						transform: [3.55, 33.7, 1, 1.131, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 89,
						to: 155,
						classname: "_mainmenu_bull_eye_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.55, ty: 34.55},
						transform: [3.55, 34.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_eyedark_x": {
		type: "bitmap",
		asset: "_mainmenu_eyedark_x",
		scale: 1,
		position: [-17.25, -20],
	},
	"_mainmenu_level_select_x": {
		type: "bitmap",
		asset: "_mainmenu_level_select_x",
		scale: 1,
		position: [-405, -305],
	},
	"_mainmenu_level_candle_2": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "candle_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_candle_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 9.25, ty: 24.85},
						transform: [9.25, 24.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flameall",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 0.831, b: 0, c: 0, d: 0.831, tx: 1.15, ty: -31.8},
						transform: [1.15, -31.8, 0.831, 0.831, 0, 0, 0],
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
						to: 0,
					},
				]
			},
		]
	},
	"_mainmenu_level_candle_1": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "candle_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_candle_1_x",
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
				name: "flameall",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 0.831, b: 0, c: 0, d: 0.831, tx: 3.15, ty: -57.8},
						transform: [3.15, -57.8, 0.831, 0.831, 0, 0, 0],
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
						to: 0,
					},
				]
			},
		]
	},
	"_mainmenu_level_candle_6": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "candle_6_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_candle_6_x",
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
				name: "flameall",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 0.831, b: 0, c: 0, d: 0.831, tx: 29.45, ty: -35.3},
						transform: [29.45, -35.3, 0.831, 0.831, 0, 0, 0],
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
						to: 0,
					},
				]
			},
		]
	},
	"_mainmenu_level_candle_5": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "candle_5_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_candle_5_x",
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
				name: "flameall",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 0.831, b: 0, c: 0, d: 0.831, tx: -27.05, ty: -37.8},
						transform: [-27.05, -37.8, 0.831, 0.831, 0, 0, 0],
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
						to: 0,
					},
				]
			},
		]
	},
	"_mainmenu_level_candle_4": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "candle_4_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_candle_4_x",
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
				name: "flameall",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 0.831, b: 0, c: 0, d: 0.831, tx: -24.05, ty: -46.3},
						transform: [-24.05, -46.3, 0.831, 0.831, 0, 0, 0],
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
						to: 0,
					},
				]
			},
		]
	},
	"_mainmenu_level_candle_3": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "candle_3_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_candle_3_x",
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
				name: "flameall",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 0.831, b: 0, c: 0, d: 0.831, tx: -1.05, ty: -60.8},
						transform: [-1.05, -60.8, 0.831, 0.831, 0, 0, 0],
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
						to: 0,
					},
				]
			},
		]
	},
	"_mainmenu_ui_button_bg": {
		type: "movieclip",
		fps: 30,
		totalFrames: 33,
		labels: {loop: {from:1, to:31}, },
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_mainmenu_ui_button_bg_seq",
						instancename: "",
						matrix: {a: -0.908, b: 0, c: 0, d: 0.847, tx: 0, ty: 0},
						transform: [0, 0, 0.908, 0.847, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 31,
						classname: "_mainmenu_ui_button_bg_seq",
						instancename: "",
						matrix: {a: -0.833, b: 0, c: 0, d: 0.931, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.833, 0.931, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_mainmenu_ui_button_bg_seq",
						instancename: "",
						matrix: {a: -0.908, b: 0, c: 0, d: 0.847, tx: 0, ty: 0},
						transform: [0, 0, 0.908, 0.847, 0, 3.142, NaN],
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 31,
					},
					{
						from: 32,
						to: 32,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_mainmenu_violeta_violeta_button_bg": {
		type: "movieclip",
		fps: 30,
		totalFrames: 33,
		labels: {loop: {from:1, to:31}, },
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_mainmenu_violeta_violeta_button_bg_seq",
						instancename: "",
						matrix: {a: -0.908, b: 0, c: 0, d: 0.847, tx: 0, ty: 0},
						transform: [0, 0, 0.908, 0.847, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 31,
						classname: "_mainmenu_violeta_violeta_button_bg_seq",
						instancename: "",
						matrix: {a: -0.833, b: 0, c: 0, d: 0.931, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.833, 0.931, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_mainmenu_violeta_violeta_button_bg_seq",
						instancename: "",
						matrix: {a: -0.908, b: 0, c: 0, d: 0.847, tx: 0, ty: 0},
						transform: [0, 0, 0.908, 0.847, 0, 3.142, NaN],
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 31,
					},
					{
						from: 32,
						to: 32,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_mainmenu_number": {
		type: "movieclip",
		fps: 30,
		totalFrames: 35,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_number_1_x",
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
						classname: "_mainmenu_number_2_x",
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
						classname: "_mainmenu_number_3_x",
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
						classname: "_mainmenu_number_4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_mainmenu_number_5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_mainmenu_number_6_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_mainmenu_number_7_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_mainmenu_number_8_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
						classname: "_mainmenu_number_9_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_mainmenu_number_10_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_mainmenu_number_11_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_mainmenu_number_12_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_mainmenu_number_13_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_mainmenu_number_14_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_mainmenu_number_15_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 34,
						classname: "_mainmenu_number_x_x",
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
						to: 34,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_mainmenu_logo_en_x": {
		type: "bitmap",
		asset: "_mainmenu_logo_en_x",
		scale: 1,
		position: [-364.95, -86.9],
	},
	"_mainmenu_logo_sp_x": {
		type: "bitmap",
		asset: "_mainmenu_logo_sp_x",
		scale: 1,
		position: [-364.95, -86.9],
	},
	"_mainmenu_logo_pt_x": {
		type: "bitmap",
		asset: "_mainmenu_logo_pt_x",
		scale: 1,
		position: [-397.95, -113.4],
	},
	"_mainmenu_adventuretimelogo_x": {
		type: "bitmap",
		asset: "_mainmenu_adventuretimelogo_x",
		scale: 1,
		position: [-128.75, -53.95],
	},
	"_mainmenu_ui_buttonlarge_bg_seq,": {
		type: "movieclip",
		fps: 30,
		totalFrames: 18,
		labels: {loop: {from:1, to:16}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_mainmenu_ui_buttonlarge_bg_1_x",
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
						classname: "_mainmenu_ui_buttonlarge_bg_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_mainmenu_ui_buttonlarge_bg_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 7,
						classname: "_mainmenu_ui_buttonlarge_bg_4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 9,
						classname: "_mainmenu_ui_buttonlarge_bg_5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 11,
						classname: "_mainmenu_ui_buttonlarge_bg_6_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_mainmenu_ui_buttonlarge_bg_7_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 15,
						classname: "_mainmenu_ui_buttonlarge_bg_8_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 17,
						classname: "_mainmenu_ui_buttonlarge_bg_9_x",
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 16,
					},
					{
						from: 17,
						to: 17,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_mainmenu_iconi_minibar_iconi_icon_pause_frames": {
		type: "movieclip",
		fps: 30,
		totalFrames: 12,
		labels: {loop: {from:1, to:10}, },
		layers: [
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_mainmenu_iconi_minibar_iconi_icon_pause_frames_1_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_mainmenu_iconi_minibar_iconi_icon_pause_frames_2_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
						classname: "_mainmenu_iconi_minibar_iconi_icon_pause_frames_3_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 8,
						classname: "_mainmenu_iconi_minibar_iconi_icon_pause_frames_4_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 10,
						classname: "_mainmenu_iconi_minibar_iconi_icon_pause_frames_5_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_mainmenu_iconi_minibar_iconi_icon_pause_frames_1_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_mainmenu_uiui_minibar_minibar_minibar_icon_pause_gfx": {
		type: "movieclip",
		fps: 30,
		totalFrames: 26,
		labels: {loop: {from:1, to:24}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 11,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 24,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames",
						instancename: "",
						matrix: {a: 1.087, b: 0, c: 0, d: 0.96, tx: 0, ty: 0},
						transform: [0, 0, 1.087, 0.96, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
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
	"_mainmenu_uiui_minibar_minibar_minibar_icon_sound_gfx": {
		type: "movieclip",
		fps: 30,
		totalFrames: 26,
		labels: {loop: {from:1, to:24}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 11,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 24,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_frames",
						instancename: "",
						matrix: {a: 1.087, b: 0, c: 0, d: 0.96, tx: 0, ty: 0},
						transform: [0, 0, 1.087, 0.96, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
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
	"_mainmenu_uiui_icon_resume_frames": {
		type: "movieclip",
		fps: 30,
		totalFrames: 12,
		labels: {loop: {from:1, to:10}, },
		layers: [
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_mainmenu_uiui_icon_resume_frames_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.8, ty: 2.65},
						transform: [6.8, 2.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_mainmenu_uiui_icon_resume_frames_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.8, ty: 2.65},
						transform: [6.8, 2.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
						classname: "_mainmenu_uiui_icon_resume_frames_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.8, ty: 2.65},
						transform: [6.8, 2.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 8,
						classname: "_mainmenu_uiui_icon_resume_frames_4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.8, ty: 2.65},
						transform: [6.8, 2.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_uiui_icon_resume_frames_5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.8, ty: 2.65},
						transform: [6.8, 2.65, 1, 1, 0, 0, 0],
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_mainmenu_flames_flame_1_x": {
		type: "bitmap",
		asset: "_mainmenu_flames_flame_1_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_mainmenu_flames_flame_2_x": {
		type: "bitmap",
		asset: "_mainmenu_flames_flame_2_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_mainmenu_flames_flame_3_x": {
		type: "bitmap",
		asset: "_mainmenu_flames_flame_3_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_mainmenu_flames_flame_4_x": {
		type: "bitmap",
		asset: "_mainmenu_flames_flame_4_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_mainmenu_flames_flame_5_x": {
		type: "bitmap",
		asset: "_mainmenu_flames_flame_5_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_mainmenu_flames_flame_6_x": {
		type: "bitmap",
		asset: "_mainmenu_flames_flame_6_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_mainmenu_flames_flame_7_x": {
		type: "bitmap",
		asset: "_mainmenu_flames_flame_7_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_mainmenu_flames_flame_8_x": {
		type: "bitmap",
		asset: "_mainmenu_flames_flame_8_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_mainmenu_flames_flame_9_x": {
		type: "bitmap",
		asset: "_mainmenu_flames_flame_9_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_mainmenu_flames_flame_10_x": {
		type: "bitmap",
		asset: "_mainmenu_flames_flame_10_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_mainmenu_flames_flame_11_x": {
		type: "bitmap",
		asset: "_mainmenu_flames_flame_11_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_mainmenu_flames_flame_12_x": {
		type: "bitmap",
		asset: "_mainmenu_flames_flame_12_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_mainmenu_flames_flame_13_x": {
		type: "bitmap",
		asset: "_mainmenu_flames_flame_13_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_mainmenu_flames_flame_14_x": {
		type: "bitmap",
		asset: "_mainmenu_flames_flame_14_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_mainmenu_flames_flame_15_x": {
		type: "bitmap",
		asset: "_mainmenu_flames_flame_15_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_mainmenu_flames_flame_16_x": {
		type: "bitmap",
		asset: "_mainmenu_flames_flame_16_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_mainmenu_flames_flame_17_x": {
		type: "bitmap",
		asset: "_mainmenu_flames_flame_17_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_mainmenu_flames_flame_18_x": {
		type: "bitmap",
		asset: "_mainmenu_flames_flame_18_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_mainmenu_flames_flame_19_x": {
		type: "bitmap",
		asset: "_mainmenu_flames_flame_19_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_mainmenu_flames_flame_20_x": {
		type: "bitmap",
		asset: "_mainmenu_flames_flame_20_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_mainmenu_candle_light_1_x": {
		type: "bitmap",
		asset: "_mainmenu_candle_light_1_x",
		scale: 1,
		position: [-57.55, -63],
	},
	"_mainmenu_cinnabun_eyeglow_x": {
		type: "bitmap",
		asset: "_mainmenu_cinnabun_eyeglow_x",
		scale: 1,
		position: [-41, -47],
	},
	"_mainmenu_cinnabun_eye_x": {
		type: "bitmap",
		asset: "_mainmenu_cinnabun_eye_x",
		scale: 1,
		position: [-27.3, -38.65],
	},
	"_mainmenu_bull_head_x": {
		type: "bitmap",
		asset: "_mainmenu_bull_head_x",
		scale: 1,
		position: [-74, -83],
	},
	"_mainmenu_bull_eye_r": {
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
						classname: "_mainmenu_bull_eye_r_x",
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
	"_mainmenu_bull_eye_l": {
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
						classname: "_mainmenu_bull_eye_l_x",
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
	"_mainmenu_candle_2_x": {
		type: "bitmap",
		asset: "_mainmenu_candle_2_x",
		scale: 1,
		position: [-32, -56],
	},
	"_mainmenu_candle_1_x": {
		type: "bitmap",
		asset: "_mainmenu_candle_1_x",
		scale: 1,
		position: [-39.5, -62.5],
	},
	"_mainmenu_candle_6_x": {
		type: "bitmap",
		asset: "_mainmenu_candle_6_x",
		scale: 1,
		position: [-37, -38],
	},
	"_mainmenu_candle_5_x": {
		type: "bitmap",
		asset: "_mainmenu_candle_5_x",
		scale: 1,
		position: [-36.5, -41],
	},
	"_mainmenu_candle_4_x": {
		type: "bitmap",
		asset: "_mainmenu_candle_4_x",
		scale: 1,
		position: [-37, -49.5],
	},
	"_mainmenu_candle_3_x": {
		type: "bitmap",
		asset: "_mainmenu_candle_3_x",
		scale: 1,
		position: [-42, -60],
	},
	"_mainmenu_ui_button_bg_seq": {
		type: "movieclip",
		fps: 30,
		totalFrames: 18,
		labels: {loop: {from:1, to:16}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_mainmenu_ui_button_bg_1_x",
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
						classname: "_mainmenu_ui_button_bg_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_mainmenu_ui_button_bg_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 7,
						classname: "_mainmenu_ui_button_bg_4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 9,
						classname: "_mainmenu_ui_button_bg_5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 11,
						classname: "_mainmenu_ui_button_bg_6_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_mainmenu_ui_button_bg_7_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 15,
						classname: "_mainmenu_ui_button_bg_8_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 17,
						classname: "_mainmenu_ui_button_bg_9_x",
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 16,
					},
					{
						from: 17,
						to: 17,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_mainmenu_violeta_violeta_button_bg_seq": {
		type: "movieclip",
		fps: 30,
		totalFrames: 18,
		labels: {loop: {from:1, to:16}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_mainmenu_violeta_violeta_button_bg_1_x",
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
						classname: "_mainmenu_violeta_violeta_button_bg_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_mainmenu_violeta_violeta_button_bg_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 7,
						classname: "_mainmenu_violeta_violeta_button_bg_4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 9,
						classname: "_mainmenu_violeta_violeta_button_bg_5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 11,
						classname: "_mainmenu_violeta_violeta_button_bg_6_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_mainmenu_violeta_violeta_button_bg_7_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 15,
						classname: "_mainmenu_violeta_violeta_button_bg_8_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 17,
						classname: "_mainmenu_violeta_violeta_button_bg_9_x",
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 16,
					},
					{
						from: 17,
						to: 17,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_mainmenu_number_1_x": {
		type: "bitmap",
		asset: "_mainmenu_number_1_x",
		scale: 1,
		position: [-58.65, -59.05],
	},
	"_mainmenu_number_2_x": {
		type: "bitmap",
		asset: "_mainmenu_number_2_x",
		scale: 1,
		position: [-58.65, -59.05],
	},
	"_mainmenu_number_3_x": {
		type: "bitmap",
		asset: "_mainmenu_number_3_x",
		scale: 1,
		position: [-58.65, -59.05],
	},
	"_mainmenu_number_4_x": {
		type: "bitmap",
		asset: "_mainmenu_number_4_x",
		scale: 1,
		position: [-58.65, -59.05],
	},
	"_mainmenu_number_5_x": {
		type: "bitmap",
		asset: "_mainmenu_number_5_x",
		scale: 1,
		position: [-58.65, -59.05],
	},
	"_mainmenu_number_6_x": {
		type: "bitmap",
		asset: "_mainmenu_number_6_x",
		scale: 1,
		position: [-58.65, -59.05],
	},
	"_mainmenu_number_7_x": {
		type: "bitmap",
		asset: "_mainmenu_number_7_x",
		scale: 1,
		position: [-58.65, -59.05],
	},
	"_mainmenu_number_8_x": {
		type: "bitmap",
		asset: "_mainmenu_number_8_x",
		scale: 1,
		position: [-58.65, -59.05],
	},
	"_mainmenu_number_9_x": {
		type: "bitmap",
		asset: "_mainmenu_number_9_x",
		scale: 1,
		position: [-58.65, -59.05],
	},
	"_mainmenu_number_10_x": {
		type: "bitmap",
		asset: "_mainmenu_number_10_x",
		scale: 1,
		position: [-58.65, -59.05],
	},
	"_mainmenu_number_11_x": {
		type: "bitmap",
		asset: "_mainmenu_number_11_x",
		scale: 1,
		position: [-58.65, -59.05],
	},
	"_mainmenu_number_12_x": {
		type: "bitmap",
		asset: "_mainmenu_number_12_x",
		scale: 1,
		position: [-58.65, -59.05],
	},
	"_mainmenu_number_13_x": {
		type: "bitmap",
		asset: "_mainmenu_number_13_x",
		scale: 1,
		position: [-58.65, -59.05],
	},
	"_mainmenu_number_14_x": {
		type: "bitmap",
		asset: "_mainmenu_number_14_x",
		scale: 1,
		position: [-58.65, -59.05],
	},
	"_mainmenu_number_15_x": {
		type: "bitmap",
		asset: "_mainmenu_number_15_x",
		scale: 1,
		position: [-58.65, -59.05],
	},
	"_mainmenu_number_x_x": {
		type: "bitmap",
		asset: "_mainmenu_number_x_x",
		scale: 1,
		position: [-58.65, -59.05],
	},
	"_mainmenu_ui_buttonlarge_bg_1_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_buttonlarge_bg_1_x",
		scale: 1,
		position: [-139.8, -64.05],
	},
	"_mainmenu_ui_buttonlarge_bg_2_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_buttonlarge_bg_2_x",
		scale: 1,
		position: [-139.8, -64.05],
	},
	"_mainmenu_ui_buttonlarge_bg_3_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_buttonlarge_bg_3_x",
		scale: 1,
		position: [-139.8, -64.05],
	},
	"_mainmenu_ui_buttonlarge_bg_4_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_buttonlarge_bg_4_x",
		scale: 1,
		position: [-139.8, -64.05],
	},
	"_mainmenu_ui_buttonlarge_bg_5_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_buttonlarge_bg_5_x",
		scale: 1,
		position: [-139.8, -64.05],
	},
	"_mainmenu_ui_buttonlarge_bg_6_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_buttonlarge_bg_6_x",
		scale: 1,
		position: [-139.8, -64.05],
	},
	"_mainmenu_ui_buttonlarge_bg_7_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_buttonlarge_bg_7_x",
		scale: 1,
		position: [-139.8, -64.05],
	},
	"_mainmenu_ui_buttonlarge_bg_8_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_buttonlarge_bg_8_x",
		scale: 1,
		position: [-139.8, -64.05],
	},
	"_mainmenu_ui_buttonlarge_bg_9_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_buttonlarge_bg_9_x",
		scale: 1,
		position: [-139.8, -64.05],
	},
	"_mainmenu_iconi_minibar_iconi_icon_pause_frames_1_x": {
		type: "bitmap",
		asset: "_mainmenu_iconi_minibar_iconi_icon_pause_frames_1_x",
		scale: 1,
		position: [-19.4, -30.25],
	},
	"_mainmenu_iconi_minibar_iconi_icon_pause_frames_2_x": {
		type: "bitmap",
		asset: "_mainmenu_iconi_minibar_iconi_icon_pause_frames_2_x",
		scale: 1,
		position: [-19.4, -30.25],
	},
	"_mainmenu_iconi_minibar_iconi_icon_pause_frames_3_x": {
		type: "bitmap",
		asset: "_mainmenu_iconi_minibar_iconi_icon_pause_frames_3_x",
		scale: 1,
		position: [-19.4, -30.25],
	},
	"_mainmenu_iconi_minibar_iconi_icon_pause_frames_4_x": {
		type: "bitmap",
		asset: "_mainmenu_iconi_minibar_iconi_icon_pause_frames_4_x",
		scale: 1,
		position: [-19.4, -30.25],
	},
	"_mainmenu_iconi_minibar_iconi_icon_pause_frames_5_x": {
		type: "bitmap",
		asset: "_mainmenu_iconi_minibar_iconi_icon_pause_frames_5_x",
		scale: 1,
		position: [-19.4, -30.25],
	},
	"_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames": {
		type: "movieclip",
		fps: 30,
		totalFrames: 12,
		labels: {loop: {from:1, to:10}, },
		layers: [
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames_1_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames_2_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames_3_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 8,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames_4_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 10,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames_5_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames_1_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_mainmenu_uiui_minibar_minibar_minibar_icon_sound_frames": {
		type: "movieclip",
		fps: 30,
		totalFrames: 12,
		labels: {loop: {from:1, to:10}, },
		layers: [
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_frames_1_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_frames_2_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_frames_3_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 8,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_frames_4_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_frames_5_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_mainmenu_uiui_icon_resume_frames_1_x": {
		type: "bitmap",
		asset: "_mainmenu_uiui_icon_resume_frames_1_x",
		scale: 1,
		position: [-51.6, -46.15],
	},
	"_mainmenu_uiui_icon_resume_frames_2_x": {
		type: "bitmap",
		asset: "_mainmenu_uiui_icon_resume_frames_2_x",
		scale: 1,
		position: [-51.6, -46.15],
	},
	"_mainmenu_uiui_icon_resume_frames_3_x": {
		type: "bitmap",
		asset: "_mainmenu_uiui_icon_resume_frames_3_x",
		scale: 1,
		position: [-51.6, -46.15],
	},
	"_mainmenu_uiui_icon_resume_frames_4_x": {
		type: "bitmap",
		asset: "_mainmenu_uiui_icon_resume_frames_4_x",
		scale: 1,
		position: [-51.6, -46.15],
	},
	"_mainmenu_uiui_icon_resume_frames_5_x": {
		type: "bitmap",
		asset: "_mainmenu_uiui_icon_resume_frames_5_x",
		scale: 1,
		position: [-51.6, -46.15],
	},
	"_mainmenu_bull_eye_r_x": {
		type: "bitmap",
		asset: "_mainmenu_bull_eye_r_x",
		scale: 1,
		position: [-9, -11],
	},
	"_mainmenu_bull_eye_l_x": {
		type: "bitmap",
		asset: "_mainmenu_bull_eye_l_x",
		scale: 1,
		position: [-18.5, -11.5],
	},
	"_mainmenu_ui_button_bg_1_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_button_bg_1_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_mainmenu_ui_button_bg_2_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_button_bg_2_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_mainmenu_ui_button_bg_3_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_button_bg_3_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_mainmenu_ui_button_bg_4_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_button_bg_4_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_mainmenu_ui_button_bg_5_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_button_bg_5_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_mainmenu_ui_button_bg_6_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_button_bg_6_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_mainmenu_ui_button_bg_7_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_button_bg_7_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_mainmenu_ui_button_bg_8_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_button_bg_8_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_mainmenu_ui_button_bg_9_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_button_bg_9_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_mainmenu_violeta_violeta_button_bg_1_x": {
		type: "bitmap",
		asset: "_mainmenu_violeta_violeta_button_bg_1_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_mainmenu_violeta_violeta_button_bg_2_x": {
		type: "bitmap",
		asset: "_mainmenu_violeta_violeta_button_bg_2_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_mainmenu_violeta_violeta_button_bg_3_x": {
		type: "bitmap",
		asset: "_mainmenu_violeta_violeta_button_bg_3_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_mainmenu_violeta_violeta_button_bg_4_x": {
		type: "bitmap",
		asset: "_mainmenu_violeta_violeta_button_bg_4_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_mainmenu_violeta_violeta_button_bg_5_x": {
		type: "bitmap",
		asset: "_mainmenu_violeta_violeta_button_bg_5_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_mainmenu_violeta_violeta_button_bg_6_x": {
		type: "bitmap",
		asset: "_mainmenu_violeta_violeta_button_bg_6_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_mainmenu_violeta_violeta_button_bg_7_x": {
		type: "bitmap",
		asset: "_mainmenu_violeta_violeta_button_bg_7_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_mainmenu_violeta_violeta_button_bg_8_x": {
		type: "bitmap",
		asset: "_mainmenu_violeta_violeta_button_bg_8_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_mainmenu_violeta_violeta_button_bg_9_x": {
		type: "bitmap",
		asset: "_mainmenu_violeta_violeta_button_bg_9_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames_1_x": {
		type: "bitmap",
		asset: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames_1_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames_2_x": {
		type: "bitmap",
		asset: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames_2_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames_3_x": {
		type: "bitmap",
		asset: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames_3_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames_4_x": {
		type: "bitmap",
		asset: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames_4_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames_5_x": {
		type: "bitmap",
		asset: "_mainmenu_uiui_minibar_minibar_minibar_icon_pause_frames_5_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_mainmenu_uiui_minibar_minibar_minibar_icon_sound_frames_1_x": {
		type: "bitmap",
		asset: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_frames_1_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_mainmenu_uiui_minibar_minibar_minibar_icon_sound_frames_2_x": {
		type: "bitmap",
		asset: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_frames_2_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_mainmenu_uiui_minibar_minibar_minibar_icon_sound_frames_3_x": {
		type: "bitmap",
		asset: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_frames_3_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_mainmenu_uiui_minibar_minibar_minibar_icon_sound_frames_4_x": {
		type: "bitmap",
		asset: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_frames_4_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_mainmenu_uiui_minibar_minibar_minibar_icon_sound_frames_5_x": {
		type: "bitmap",
		asset: "_mainmenu_uiui_minibar_minibar_minibar_icon_sound_frames_5_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
};
