var game = game || {};
game.config = game.config || {};

(function () {
    'use strict';
    game.config.level9 = {
        background: ["rooftop"],
        rain: true,
        waves: [
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
                    lookDir: WONBATS.Entity.LEFT
                }
            ],
            [
                {
                    delay: 4,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT,
                    bulletTime: [0.5, 0.1, 1, 1, 0.05]
                },
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                }
            ],
            [
                {
                    delay: 2,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT,
                    bulletTime: [0.5, 0.1, 1, 1, 0.05]
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
                }
            ],
            [
                {
                    delay: 4,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT,
                    bulletTime: [0.5, 0.1, 0.5, 1, 0.05]
                },
                {
                    delay: 0.3,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0.3,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0.3,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0.3,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0.3,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0.3,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0.3,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0.3,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0.3,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                }
            ],
            [
                {
                    delay: 4,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT,
                    bulletTime: [0.5, 0.1, 0.5, 1, 0.05]
                },
                {
                    delay: 0.3,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0.3,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0.3,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0.3,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0.3,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0.3,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0.3,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0.3,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0.3,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
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
                    type: WONBATS.EntityFactory.BOT_3,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_3,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_3,
                    lookDir: WONBATS.Entity.LEFT,
                    item: []
                }

            ],
            [
                {
                    delay: 0,
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
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_3,
                    lookDir: WONBATS.Entity.RIGHT,
                    item: []
                }
            ],
            [
                {
                    delay: 3,
                    type: WONBATS.EntityFactory.BEARBOT_1,
                    lookDir: WONBATS.Entity.LEFT
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
                }
            ],
            [
                {
                    delay: 3,
                    type: WONBATS.EntityFactory.BEARBOT_2,
                    lookDir: WONBATS.Entity.RIGHT
                }
            ],
            [
                {
                    delay: 2,
                    type: WONBATS.EntityFactory.DRONE_1,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_1,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_2,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_2,
                    lookDir: WONBATS.Entity.LEFT
                }
            ],
            [
                {
                    delay: 3,
                    type: WONBATS.EntityFactory.BEARBOT_2,
                    lookDir: WONBATS.Entity.LEFT
                }
            ],
            [
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_3,
                    lookDir: WONBATS.Entity.RIGHT,
                    item: []
                },
                {
                    delay: 0,
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
                    lookDir: WONBATS.Entity.LEFT,
                    item: []
                }
            ],
            [
                {
                    delay: 4,
                    type: WONBATS.EntityFactory.BEARBOT_1,
                    lookDir: WONBATS.Entity.LEFT
                }
            ],
            [
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BEARBOT_2,
                    lookDir: WONBATS.Entity.RIGHT
                }
            ],
            [
                {
                    delay: 3,
                    type: WONBATS.EntityFactory.BEARBOT_3,
                    lookDir: WONBATS.Entity.RIGHT
                }
            ]
        ]
    };
}());
