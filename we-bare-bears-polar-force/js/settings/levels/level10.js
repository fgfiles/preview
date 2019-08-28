var game = game || {};
game.config = game.config || {};

(function () {
    'use strict';
    game.config.level10 = {
        background: ["street", "arcade", "arena", "rooftop"],
        rain: false,
        endless: {
            difficulty: [
                [0, 0],
                [0.1, -0.01],
                [0.2, -0.02],
                [0.3, -0.03],
                [0.5, -0.05],
                [0.7, -0.07],
                [0.9, -0.09],
                [1, -0],
                [1.1, -0.1],
                [1.2, -0.2],
                [1.3, -0.3],
                [1.5, -0.5],
                [1.7, -0.7],
                [1.9, -0.9],
                [2, -1]
            ],
            maxSpeed: 1000
        },
        waves: [
            [
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.RIGHT,
                    nextWaves: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                }
            ],
            [
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.LEFT,
                    nextWaves: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                }
            ],
            [
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.RIGHT,
                    nextWaves: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                }
            ],
            [
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.RIGHT,
                    nextWaves: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                },
            ],
            [
                {
                    delay: 2,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.LEFT,
                    item: [],
                    nextWaves: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                }
            ],
            [
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.RIGHT,
                    item: [],
                    nextWaves: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                }
            ],
            [
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_2,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.RIGHT,
                    nextWaves: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                }
            ],
            [
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BOT_2,
                    lookDir: WONBATS.Entity.RIGHT,
                    item: []
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_2,
                    lookDir: WONBATS.Entity.LEFT,
                    nextWaves: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                }
            ],
            [
                {
                    delay: 0.3,
                    type: WONBATS.EntityFactory.DRONE_1,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_2,
                    lookDir: WONBATS.Entity.LEFT,
                    item: []
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_2,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_1,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_2,
                    lookDir: WONBATS.Entity.RIGHT,
                    nextWaves: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                }
            ],
            [
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BEARBOT_1,
                    lookDir: WONBATS.Entity.LEFT,
                    nextWaves: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                }
            ],
            [
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BOT_3,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_2,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_2,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_2,
                    lookDir: WONBATS.Entity.RIGHT,
                    item: [WONBATS.EntityFactory.ITEM_SAW]
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_2,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_2,
                    lookDir: WONBATS.Entity.RIGHT,
                    nextWaves: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                }
            ],
            [
                {
                    delay: 2,
                    type: WONBATS.EntityFactory.BOT_3,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_3,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_3,
                    lookDir: WONBATS.Entity.RIGHT,
                    nextWaves: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                }
            ],
            [
                {
                    delay: 2,
                    type: WONBATS.EntityFactory.DRONE_3,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_3,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_3,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_3,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_3,
                    lookDir: WONBATS.Entity.RIGHT,
                    item: [WONBATS.EntityFactory.ITEM_SAW],
                    nextWaves: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                }
            ],
            [
                {
                    delay: 2,
                    type: WONBATS.EntityFactory.BOT_3,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BOT_3,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0.3,
                    type: WONBATS.EntityFactory.DRONE_3,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0.1,
                    type: WONBATS.EntityFactory.DRONE_3,
                    lookDir: WONBATS.Entity.LEFT,
                    nextWaves: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                }
            ],
            [
                {
                    delay: 3,
                    type: WONBATS.EntityFactory.BEARBOT_2,
                    lookDir: WONBATS.Entity.RIGHT,
                    nextWaves: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                }
            ],
            [
                {
                    delay: 4,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 2,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT,
                    nextWaves: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                }
            ],
            [
                {
                    delay: 4,
                    type: WONBATS.EntityFactory.BEARBOT_3,
                    lookDir: WONBATS.Entity.RIGHT,
                    nextWaves: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                }
            ]
        ]
    };
}());
