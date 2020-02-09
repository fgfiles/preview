var game = game || {};
game.config = game.config || {};

(function () {
    'use strict';

    game.config.VERSION = "20170315";
    game.config.LANGUAGE = "english";

    game.config.GAME_WIDTH = 1280;
    game.config.GAME_HEIGHT = 720;
    game.config.CANVAS_WIDTH = 800;
    game.config.CANVAS_HEIGHT = 450;
    game.config.FIXED_FPS = 61;
    game.config.FPS_METER = false;
    game.config.RESIZE = true;
    game.config.DEBUG = false;
    game.config.DATA_RESET = false;
    game.config.BODYBOX_SIZE = 50;
    game.config.MAX_PHYSICS_PARTICLES = 30;
    game.config.ATTRACT_MODE = false;
    game.config.NO_LOG = false;


    game.config.parallax = {
        background_rooftop: [-0.9, -0.6, -0.3, 0, 0, 0.2],
        background_arcade: [-0.4, -0.3, -0.2, 0, 0, 0.2],
        background_street: [-0.9, -0.6, -0.3, 0, 0, 0.2],
        background_arena: [-0.9, -0.6, -0.3, 0, 0, 0.2],
    };

    game.config.SCREENS = {
        data_reset: {
            screenClass: game.screens.DataReset,
            stack: false,
            events: {
                exit: "preloader"
            }
        },
        preloader: {
            screenClass: game.screens.Preloader,
            stack: false,
            events: {
                exit: "mainmenu",
            }
        },
        intro: {
            screenClass: game.screens.Intro,
            stack: false,
            events: {
                exit: "mainmenu"
            }
        },
        levelselection: {
            screenClass: game.screens.LevelSelection,
            stack: false,
            events: {
                level: "level",
                mainmenu: "mainmenu"
            }
        },
        mainmenu: {
            screenClass: game.screens.MainMenu,
            stack: false,
            events: {
                exit: "levelselection",
                credits: "credits"
            }
        },
        credits: {
            screenClass: game.screens.Credits,
            stack: false,
            events: {
                exit: "mainmenu"
            }
        },
        level: {
            screenClass: game.screens.Level,
            stack: false,
            events: {
                exit: "levelselection",
                credits: "credits"
            }
        },
        ending: {
            screenClass: game.screens.Ending,
            stack: false,
            events: {
                exit: "extracredits"
            }
        },
        physicssandbox: {
            screenClass: game.screens.PhysicsSandbox,
            stack: false,
            events: {}
        }
    };
}());
