var game = game || {};
game.config = game.config || {};

(function () {
    'use strict';

    game.config.contactMaterials = {
        floor_player: {
            materials: ["floor", "player"],
            config: {
                friction: 0.4,
                restitution: 0.0
            }
        },
        floor_player_body: {
            materials: ["floor", "player_body"],
            config: {
                friction: 0,
                restitution: 0
            }
        },
        bumper_player_body: {
            materials: ["bumper", "player_body"],
            config: {
                friction: 0,
                restitution: 0.75
            }
        },
        player_body_player_body: {
            materials: ["player_body", "player_body"],
            config: {
                friction: 0,
                restitution: 2
            }
        },
        player_player_body: {
            materials: ["player", "player_body"],
            config: {
                friction: 0,
                restitution: 2
            }
        },
        player_player: {
            materials: ["player", "player"],
            config: {
                friction: 0,
                restitution: 0.75
            }
        },
        player_bumper: {
            materials: ["player", "bumper"],
            config: {
                friction: 0,
                restitution: 0.75
            }
        },
        bodypart_floor: {
            materials: ["bodypart", "floor"],
            config: {
                friction: 0.4,
                restitution: 0.3
            }
        },
        bodypart_bumper: {
            materials: ["bodypart", "bumper"],
            config: {
                friction: 0,
                restitution: 0
            }
        },
        bodypart_bodypart: {
            materials: ["bodypart", "bodypart"],
            config: {
                friction: 0.4,
                restitution: 0.1
            }
        }
    };
    game.config.materials = {
        floor: {},
        player: {},
        player_body: {},
        water: {},
        bumper: {},
        bodypart: {},
        bullet: {},
        kill: {}
    };

    game.config.categoryBits = {
        player: 1,
        floor: 2,
        enemy: 4,
        water: 8,
        bumper: 16,
        bodypart: 32,
        bullet: 64,
        kill: 128
    };
}());
