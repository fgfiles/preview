var game = game || {};
game.config = game.config || {};

(function () {
    'use strict';
    game.config.level6 = {
        background: ["arcade"],
        weapon: [WONBATS.ItemBat, true],
        waves: [
            [
                {
                    delay: 2,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.LEFT
                }

            ],
            [
                {
                    delay: 1,
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
                    type: WONBATS.EntityFactory.DRONE_1,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_1,
                    lookDir: WONBATS.Entity.RIGHT
                }
            ],
            [
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BOT_2,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_2,
                    lookDir: WONBATS.Entity.RIGHT
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
                    type: WONBATS.EntityFactory.BOT_2,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_2,
                    lookDir: WONBATS.Entity.LEFT
                }
            ],
            [
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.DRONE_2,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_2,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_2,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_2,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_2,
                    lookDir: WONBATS.Entity.RIGHT
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
                    delay: 1,
                    type: WONBATS.EntityFactory.BOT_3,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_3,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_3,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_3,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_3,
                    lookDir: WONBATS.Entity.RIGHT
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
                }
            ],
            [
                {
                    delay: 1,
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
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_3,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_3,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_3,
                    lookDir: WONBATS.Entity.LEFT
                }
            ],
            [
                {
                    delay: 2,
                    type: WONBATS.EntityFactory.BEARBOT_1,
                    lookDir: WONBATS.Entity.RIGHT
                }
            ]

        ]
    };
}());
