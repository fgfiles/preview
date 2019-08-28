var game = game || {};
game.config = game.config || {};

(function () {
    'use strict';

    game.config.sound = {
        path: "assets/sound/",
        format: ["mp3"],
        files: [
            {
                src: "music_ingame01",
                id: "music_ingame01",
                volume: 0.5,
                loop: true
            },
            {
                src: "music_ingame02",
                id: "music_ingame02",
                volume: 0.5,
                loop: true
            },
            {
                src: "music_boss",
                id: "music_boss",
                volume: 0.3,
                loop: true
            },
            {
                src: "ambFire",
                id: "ambFire",
                volume: 1,
                loop: true
            },
            {
                id: "btn_click",
                src: "uiClick",
                volume: 1
            },
            {
                id: "btn_rollover",
                src: "uiRollover",
                volume: 1
            },
            {
                id: "mentitaBreak",
                src: "mentitaBreak",
                volume: 1
            },
            {
                src: "mentitaFootsteps01",
                id: "mentitaFootsteps01",
                volume: 1
            },
            {
                src: "mentitaFootsteps02",
                id: "mentitaFootsteps02",
                volume: 1
            },
            {
                src: "mentitaFootsteps03",
                id: "mentitaFootsteps03",
                volume: 1
            },
            {
                src: "mentitaFootsteps04",
                id: "mentitaFootsteps04",
                volume: 1
            },
            {
                src: "mentitaFootsteps05",
                id: "mentitaFootsteps05",
                volume: 1
            },
            {
                src: "mentitaFootsteps06",
                id: "mentitaFootsteps06",
                volume: 1
            },
            {
                src: "mentitaFootsteps07",
                id: "mentitaFootsteps07",
                volume: 1
            },
            {
                src: "mentitaFlying01",
                id: "mentitaFlying01",
                volume: 0.8
            },
            {
                src: "mentitaFlying02",
                id: "mentitaFlying02",
                volume: 0.8
            },
            {
                src: "mentitaFlying03",
                id: "mentitaFlying03",
                volume: 0.8
            },
            {
                src: "mentitaFlying04",
                id: "mentitaFlying04",
                volume: 0.8
            },
            {
                src: "mentitaFlying05",
                id: "mentitaFlying05",
                volume: 0.8
            },
            {
                src: "mentitaFlying06",
                id: "mentitaFlying06",
                volume: 0.8
            },
            {
                src: "mentitaFlying07",
                id: "mentitaFlying07",
                volume: 0.8
            },
            {
                src: "hitWater01",
                id: "hitWater01",
                volume: 0.8
            },
            {
                src: "hitWater02",
                id: "hitWater02",
                volume: 0.8
            },
            {
                src: "hitWater03",
                id: "hitWater03",
                volume: 0.8
            },
            {
                src: "hitWater04",
                id: "hitWater04",
                volume: 0.8
            },
            {
                src: "hitWater05",
                id: "hitWater05",
                volume: 0.8
            },
            {
                src: "hitWater06",
                id: "hitWater06",
                volume: 0.8
            },
            {
                src: "hitWater07",
                id: "hitWater07",
                volume: 0.8
            },
            {
                src: "hitFloor",
                id: "hitFloor",
                volume: 1
            },
            {
                src: "hitHead",
                id: "hitHead",
                volume: 1
            },
            {
                src: "skeletonDie",
                id: "skeletonDie",
                volume: 1
            },
            {
                src: "enemySword",
                id: "enemySword",
                volume: 1
            },
            {
                src: "hitDie",
                id: "hitDie",
                volume: 1
            },
            {
                src: "hitEnemy",
                id: "hitEnemy",
                volume: 1
            },
            {
                src: "hitSoul",
                id: "hitSoul",
                volume: 0.8
            },
            {
                src: "levelIntro",
                id: "levelIntro",
                volume: 1
            },
            {
                src: "animLevel",
                id: "animLevel",
                volume: 1
            },
            {
                src: "demonDie",
                id: "demonDie",
                volume: 1
            },
            {
                src: "hitHead_W2",
                id: "hitHead_W2",
                volume: 1
            },
            {
                src: "enemySpit",
                id: "enemySpit",
                volume: 1
            },
            {
                src: "hitSpit",
                id: "hitSpit",
                volume: 1
            },
            {
                src: "hitFire",
                id: "hitFire",
                volume: 1
            },
            {
                src: "starchyDie",
                id: "starchyDie",
                volume: 1
            },
            {
                src: "levelTransition",
                id: "levelTransition",
                volume: 0.8
            },
            {
                src: "cinnamon_laugh",
                id: "cinnamon_laugh",
                volume: 1
            },
            {
                src: "cinnamon_evil_death",
                id: "cinnamon_evil_death",
                volume: 1
            },
            {
                src: "cinnamon_evil_laugh",
                id: "cinnamon_evil_laugh",
                volume: 0.3
            },
            {
                src: "cinnamon_evil_explosion",
                id: "cinnamon_evil_explosion",
                volume: 1
            },
            {
                src: "cinnamon_evil_attack_start",
                id: "cinnamon_evil_attack_start",
                volume: 0.3
            },
            {
                src: "cinnamon_evil_attack_end",
                id: "cinnamon_evil_attack_end",
                volume: 0.3
            },
            {
                src: "cinnamon_evil_dash",
                id: "cinnamon_evil_dash",
                volume: 0.5
            },
            {
                src: "cinnamon_reborn",
                id: "cinnamon_reborn",
                volume: 1
            },
            {
                src: "cinnamon_bright",
                id: "cinnamon_bright",
                volume: 1
            },
            {
                src: "cinnamon_evil_attack_loop",
                id: "cinnamon_evil_attack_loop",
                volume: 0.3,
                loop: true
            },
            {
                src: "lock_broken",
                id: "lock_broken",
                volume: 0.5
            },
            {
                src: "gameover",
                id: "gameover",
                volume: 1
            },
            {
                src: "respawn",
                id: "respawn",
                volume: 1
            },
            {
                src: "cn_loading",
                id: "cn_loading",
                volume: 1
            }

        ]
    };
}());
