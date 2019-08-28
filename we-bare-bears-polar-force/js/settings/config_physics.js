var game = game || {};
game.config = game.config || {};

(function () {
    'use strict';

    game.config.contactMaterials = {
        ground_player: {
            materials: ["ground", "player"],
            config: {
                friction: 0.3,
                restitution: 0.3
            }
        },
        ground_enemy: {
            materials: ["ground", "enemy"],
            config: {
                friction: 0.3,
                restitution: 0.3
            }
        },
        ground_particles_physics_particle: {
            materials: ["ground_particles", "physics_particle"],
            config: {
                friction: 0.5,
                restitution: 0.3
            }
        },
        ground_item: {
            materials: ["ground", "item"],
            config: {
                friction: 1,
                restitution: 0
            }
        }
    };
    game.config.materials = {
        ground: {},
        ground_particles: {},
        player: {},
        physics_particle: {},
        enemy: {},
        item: {}
    };

    game.config.categoryBits = {
        player: 1,
        physics_particle: 2,
        ground: 4,
        enemy: 8,
        item: 16,
        ground_particles: 32
    };
}());
