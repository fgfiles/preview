var game = game || {};
game.config = game.config || {};

(function () {
    'use strict';
    game.config.level8 = {
        background: ["arena"],
        weapon: [WONBATS.ItemBat, true],
        waves: [
            [
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
                }
            ],
            [
                {
                    delay: 2,
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
                }
            ],
            [
                {
                    delay: 2,
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
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                }
            ],
            [
                {
                    delay: 2,
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
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                }
            ],
            [
                {
                    delay: 2,
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
                    delay: 0.3,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.LEFT
                }
            ],
            [
                {
                    delay: 2,
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
                    delay: 0.3,
                    type: WONBATS.EntityFactory.BULLET_ROCKET,
                    lookDir: WONBATS.Entity.RIGHT
                }
            ]
        ]
    };
}());
