var game = game || {};
game.config = game.config || {};

(function () {
    'use strict';
    game.config.level1 = {
        background: ["street"],
        clothes: "shopping",
        street: true,
        waves: [
            [
                {
                    delay: 0.5,
                    type: WONBATS.EntityFactory.BOT_1,
                    lookDir: WONBATS.Entity.RIGHT
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
                    lookDir: WONBATS.Entity.RIGHT
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
                    lookDir: WONBATS.Entity.RIGHT
                },
            ]
        ]
    };
}());
