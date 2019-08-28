var game = game || {};
game.config = game.config || {};

(function () {
    'use strict';
    game.config.level5 = {
        background: ["arcade"],
        waves: [
            [
                {
                    delay: 2,
                    type: WONBATS.EntityFactory.BOT_2,
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
                    lookDir: WONBATS.Entity.RIGHT,
                    item: []
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_2,
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
                    type: WONBATS.EntityFactory.DRONE_1,
                    lookDir: WONBATS.Entity.RIGHT,
                    item: WONBATS.EntityFactory.ITEM_SAW
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_2,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_1,
                    lookDir: WONBATS.Entity.LEFT
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
                    lookDir: WONBATS.Entity.LEFT,
                    item: []
                },
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.DRONE_1,
                    lookDir: WONBATS.Entity.RIGHT
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
                    type: WONBATS.EntityFactory.BEARBOT_1,
                    lookDir: WONBATS.Entity.LEFT
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
                    lookDir: WONBATS.Entity.LEFT
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
                    type: WONBATS.EntityFactory.DRONE_1,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_1,
                    lookDir: WONBATS.Entity.LEFT
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
                    lookDir: WONBATS.Entity.RIGHT
                }
            ],
            [
                {
                    delay: 2,
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
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_3,
                    lookDir: WONBATS.Entity.RIGHT
                }
            ],
            [
                {
                    delay: 2,
                    type: WONBATS.EntityFactory.DRONE_3,
                    lookDir: WONBATS.Entity.LEFT
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
                },
                {
                    delay: 0,
                    type: WONBATS.EntityFactory.DRONE_3,
                    lookDir: WONBATS.Entity.LEFT
                }
            ],
            [
                {
                    delay: 3,
                    type: WONBATS.EntityFactory.BEARBOT_2,
                    lookDir: WONBATS.Entity.LEFT
                }
            ]
        ]
    };
}());
