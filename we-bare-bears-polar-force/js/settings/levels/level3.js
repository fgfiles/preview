var game = game || {};
game.config = game.config || {};

(function () {
    'use strict';
    game.config.level3 = {
        background: ["street"],
        rain: true,
        street: true,
        weapon: [WONBATS.ItemBat, true],
        waves: [
            [
                {
                    delay: 2,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT,
                    bulletTime: [0.3, 0.1, 2, 1, 0.05]
                }

            ],
            [
                {
                    delay: 2,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT,
                    bulletTime: [0.3, 0.3, 1, 1, 0.05]
                }
            ],
            [
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT,
                    bulletTime: [0.3, 0.5, 1, 1, 0.05]
                },
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT,
                    bulletTime: [0.3, 0.5, 1, 1, 0.05]
                }
            ],
            [
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                }
            ],
            [
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
                    lookDir: WONBATS.Entity.LEFT
                }
            ],
            [
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
                }
            ],
            [
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                },
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                }
            ],
            [
                {
                    delay: 1,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                },
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                }
            ]
        ]
    };
}());
