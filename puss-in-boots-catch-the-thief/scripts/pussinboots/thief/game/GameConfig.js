/**
 * Created by rufian on 11/17/14.
 */
define([], function()
{
	var Config =
	{
		pussPath: 'images/thief/puss/Puss.anim',
		texturePath: 'images/thief/Texture.json',
		thiefPath: 'images/thief/thief/Thief.anim',

		Obstacles: [{
						texture: 'JUMProck_1.png', y: 394, graphicsOffsetX: 1.667, graphicOffsetY: 1.53,
						geometry:
						[
							{
								"density": 2, "friction": 0, "bounce": 0,
								"filter": { "categoryBits": 1, "maskBits": 65535 },
								"shape": [   163, 0  ,  182, 8  ,  197, 27  ,  76, 55  ,  119, 6  ]
							}  ,
							{
								"density": 2, "friction": 0, "bounce": 0,
								"filter": { "categoryBits": 1, "maskBits": 65535 },
								"shape": [   197, 27  ,  258, 38  ,  338, 113  ,  345, 152  ,  -4, 134  ,  76, 55  ]
							}  ,
							{
								"density": 2, "friction": 0, "bounce": 0,
								"filter": { "categoryBits": 1, "maskBits": 65535 },
								"shape": [   -4, 134  ,  345, 152  ,  356, 176  ,  -49, 174  ]
							}
						]
					},
					{
						texture: 'JUMProck_2.png',  y: 424.5, graphicsOffsetX: 1.667, graphicOffsetY: 2.5,
						geometry:
						[
							{
								"density": 2, "friction": 0, "bounce": 0,
								"filter": { "categoryBits": 1, "maskBits": 65535 },
								"shape": [   383, 119  ,  37, 118  ,  100, 49  ,  161, 12  ,  352, 43  ,  374, 53  ]
							}
						]
					},
					{
						texture: 'JUMProck_3.png',  y: 448.5, graphicsOffsetX: 1.667, graphicOffsetY: 1.9,
						geometry:
						[
							{
								"density": 2, "friction": 0, "bounce": 0,
								"filter": { "categoryBits": 1, "maskBits": 65535 },
								"shape": [   160, 26  ,  186, 54  ,  205, 88  ,  3, 51  ,  39, 26  ,  111, 4  ]
							}  ,
							{
								"density": 2, "friction": 0, "bounce": 0,
								"filter": { "categoryBits": 1, "maskBits": 65535 },
								"shape": [   3, 51  ,  205, 88  ,  230, 95  ,  254, 105  ,  -48, 104  ]
							}
						]
					},
					{
						texture: 'JUMProck_4.png', y: 489.5, graphicsOffsetX: 1.667, graphicOffsetY: 1.85,
						geometry:
						[
							{
								"density": 2, "friction": 0, "bounce": 0,
								"filter": { "categoryBits": 1, "maskBits": 65535 },
								"shape": [   129, 33  ,  131, 52  ,  -28, 62  ,  8, 31  ,  66, 1  ,  99, 4  ]
							}  ,
							{
								"density": 2, "friction": 0, "bounce": 0,
								"filter": { "categoryBits": 1, "maskBits": 65535 },
								"shape": [   66, 1  ,  8, 31  ,  37, 6  ]
							}  ,
							{
								"density": 2, "friction": 0, "bounce": 0,
								"filter": { "categoryBits": 1, "maskBits": 65535 },
								"shape": [   147, 57  ,  -28, 62  ,  131, 52  ]
							}  ,
							{
								"density": 2, "friction": 0, "bounce": 0,
								"filter": { "categoryBits": 1, "maskBits": 65535 },
								"shape": [   167, 62  ,  -28, 62  ,  147, 57  ]
							}
						]
					},
					{
						texture: 'CACTUS_1.png', y: 422.5, graphicsOffsetX: 1.667, graphicOffsetY: 2.0, instantKill: true,
						geometry:
						[

							{
								"density": 2, "friction": 0, "bounce": 0,
								"filter": { "categoryBits": 1, "maskBits": 65535 },
								"shape": [   45, 106  ,  55, 61  ,  111, 60  ,  123, 81  ,  124, 106  ,  114, 128  ,  100, 147  ,  43, 147  ]
							}
						]
					},
					{
						texture: 'CACTUS_2.png', y: 374, graphicsOffsetX: 1.667, graphicOffsetY: 2.0, instantKill: true,
						geometry: [
							{
								"density": 2, "friction": 0, "bounce": 0,
								"filter": { "categoryBits": 1, "maskBits": 65535 },
								"shape": [   8, 128  ,  62, 108  ,  120, 116  ,  113, 150  ,  100, 196  ,  19, 196  ]
							}  ,
							{
								"density": 2, "friction": 0, "bounce": 0,
								"filter": { "categoryBits": 1, "maskBits": 65535 },
								"shape": [   55, 89  ,  62, 108  ,  8, 128  ,  12, 97  ]
							}  ,
							{
								"density": 2, "friction": 0, "bounce": 0,
								"filter": { "categoryBits": 1, "maskBits": 65535 },
								"shape": [   116, 72  ,  120, 116  ,  62, 108  ,  67, 83  ,  74, 58  ,  112, 52  ]
							}
						]
					},
					{
						texture: 'MineShaft.png', y: 523, graphicsOffsetX: 1.667, graphicOffsetY: 2.0, mineShaft: true,
						geometry: [
							{
								"density": 2, "friction": 0, "bounce": 0,
								"filter": { "categoryBits": 1, "maskBits": 65535 },
								"shape": [   42, 47  ,  126, -1  ,  282, -1  ,  377, 49  ]
							}
						]
					}
		]
	};

	return Config;
});