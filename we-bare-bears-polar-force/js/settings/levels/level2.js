var game = game || {};
game.config = game.config || {};

(function () {
    'use strict';
    game.config.level2 = {
        background: ["street"],
        rain: true,
        waves: [
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
                    item: []
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
                    item: []
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
                    lookDir: WONBATS.Entity.RIGHT
                }
            ],
            [
                {
                    delay: 0.5,
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
                    type: WONBATS.EntityFactory.BOT_2,
                    lookDir: WONBATS.Entity.LEFT
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
                    type: WONBATS.EntityFactory.BOT_2,
                    lookDir: WONBATS.Entity.RIGHT
                }
            ]
        ]
    };
}());
