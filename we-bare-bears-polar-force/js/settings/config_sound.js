var game = game || {};
game.config = game.config || {};

(function () {
    'use strict';

    game.config.sound = {
        path: "assets/sound/",
        format: ["mp3"],
        files: [
            {
                src: "music_ingame1",
                id: "music_foreground",
                volume: 0.7,
                loop: true
            },
            {
                src: "music_ingame2",
                id: "music_background",
                volume: 0.7,
                loop: true
            },

            {
                src: "explosion01",
                id: "explosion01",
                volume: 0.6,
                loop: false
            },
            {
                src: "explosion02",
                id: "explosion02",
                volume: 0.6,
                loop: false
            },

            {
                src: "finalHitAce",
                id: "finalHitAce",
                volume: 1.5,
                loop: false
            },

            {
                src: "finalHitPunch",
                id: "finalHitPunch",
                volume: 1.5,
                loop: false
            },

            {
                src: "hitMetalic01",
                id: "hitMetalic01",
                volume: 1,
                loop: false
            },
            {
                src: "hitMetalic02",
                id: "hitMetalic02",
                volume: 1,
                loop: false
            },

            {
                src: "mouseClick",
                id: "mouseClick",
                volume: 0.6,
                loop: false
            },

            {
                src: "mouseOver",
                id: "mouseOver",
                volume: 0.3,
                loop: false
            },

            {
                src: "pickupItem",
                id: "pickupItem",
                volume: 0.5,
                loop: false
            },

            {
                src: "polarDashMed",
                id: "polarDashMed",
                volume: 0.5,
                loop: false
            },
            {
                src: "polarDashShort",
                id: "polarDashShort",
                volume: 0.5,
                loop: false
            },
            {
                src: "polarHurt01",
                id: "polarHurt01",
                volume: 1,
                loop: false
            },
            {
                src: "polarHurt02",
                id: "polarHurt02",
                volume: 1,
                loop: false
            },

            {
                src: "polarPunch01",
                id: "polarPunch01",
                volume: 1,
                loop: false
            },

            {
                src: "polarPunch02",
                id: "polarPunch02",
                volume: 1,
                loop: false
            },

            {
                src: "polarPunch03",
                id: "polarPunch03",
                volume: 1,
                loop: false
            },

            {
                src: "rainLoop",
                id: "rainLoop",
                volume: 0.5,
                loop: true
            },

            {
                src: "sawDestroyed01",
                id: "sawDestroyed01",
                volume: 1,
                loop: false
            },

            {
                src: "sawDestroyed02",
                id: "sawDestroyed02",
                volume: 1,
                loop: false
            },

            {
                src: "thunder01",
                id: "thunder01",
                volume: 1,
                loop: false
            },

            {
                src: "weaponAce01",
                id: "weaponAce01",
                volume: 1,
                loop: false
            },

            {
                src: "weaponAce02",
                id: "weaponAce02",
                volume: 1,
                loop: false
            },

            {
                src: "weaponSaw01",
                id: "weaponSaw01",
                volume: 1,
                loop: false
            },
            {
                src: "weaponSaw02",
                id: "weaponSaw02",
                volume: 1,
                loop: false
            },

            {
                src: "levelStart",
                id: "levelStart",
                volume: 1,
                loop: false
            },

            {
                src: "monitorNoise1",
                id: "monitorNoise1",
                volume: 1,
                loop: false
            },
            {
                src: "monitorNoise2",
                id: "monitorNoise2",
                volume: 1,
                loop: false
            },
            {
                src: "alarm_clock",
                id: "alarm_clock",
                volume: 0.5
            },
            {
                src: "music_credits",
                id: "music_credits",
                volume: 1,
                loop: true
            },
            {
                src: "logosparks",
                id: "logosparks",
                volume: 1,
                loop: false
            },
            {
                src: "yana",
                id: "yana",
                volume: 1,
                loop: false
            },
            {
                src: "batfly",
                id: "batfly",
                volume: 1,
                loop: false
            },
            {
                src: "sawstart",
                id: "sawstart",
                volume: 1,
                loop: false
            },
            {
                src: "shuriken",
                id: "shuriken",
                volume: 1,
                loop: false
            },
            {
                src: "nerdhaha",
                id: "nerdhaha",
                volume: 1,
                loop: false
            },
            {
                src: "unlock",
                id: "unlock",
                volume: 1
            }

        ]
    };
}());
