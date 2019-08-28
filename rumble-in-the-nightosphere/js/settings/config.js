var game = game || {};
game.config = game.config || {};

(function () {
    'use strict';

    game.config.VERSION = "20170620";
    game.config.SHOW_VERSION = false;
    game.config.LANGUAGE = "english";

    game.config.GAME_WIDTH = 800
    game.config.GAME_HEIGHT = 600
    game.config.CANVAS_WIDTH = 800
    game.config.CANVAS_HEIGHT = 600
    game.config.FIXED_FPS = 60;
    game.config.FPS_METER = false;
    game.config.RESIZE = true;
    game.config.DEBUG = false;
    game.config.CHEATS = false;
    game.config.MUTE = false;
    game.config.DATA_DEBUG = false;
    game.config.LEVEL_LEFT_LIMIT = -20;
    game.config.LEVEL_RIGHT_LIMIT = game.config.GAME_WIDTH + 20;

    game.config.SCREENS = {
        preloader: {
            screenClass: game.screens.Preloader,
            stack: false,
            events: {
                exit: "mode_selection",
                IEexit: "mode_selection"
            }
        },
        intro1P: {
            screenClass: game.screens.Intro,
            stack: false,
            events: {
                exit: "level",
                next: "intro2P"
            }
        },
        intro2P: {
            screenClass: game.screens.Intro,
            stack: false,
            events: {
                exit: "level"
            }
        },
        mode_selection: {
            screenClass: game.screens.ModeSelection,
            stack: false,
            events: {
                intro: "intro1P",
                exit: "level",
                credits: "credits"
            }
        },
        credits: {
            screenClass: game.screens.Credits,
            stack: false,
            events: {
                exit: "mode_selection",
            }
        },
        level_selection: {
            screenClass: null,
            stack: false,
            events: {
                level1: "level",
                level2: "level",
                level3: "level",
                level4: "level",
                level5: "level",
                level6: "level",
                level7: "level",
                level8: "level",
                level9: "level",
                level10: "level",
                level11: "level",
                level12: "level",
                level13: "level",
                level14: "level",
                boss: "level",
            },
            args: {
                level1: [1],
                level2: [2],
                level3: [3],
                level4: [4],
                level5: [5],
                level6: [6],
                level7: [7],
                level8: [8],
                level9: [9],
                level10: [10],
                level11: [11],
                level12: [12],
                level13: [13],
                level14: [14],
                boss: [15],
            }
        },
        level: {
            screenClass: game.screens.Level,
            stack: false,
            events: {
                next: "level",
                exit: "mode_selection",
                credits: "credits"
            }
        }
    };
}());
