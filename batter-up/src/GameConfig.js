var GC = GC || {};

// Debug
// 0: Turn debug off
// 1: Turn debug on
GC.DEBUG = {
    SWITCH:0,
    GOD_MODE:0
};

// Pause
GC.PAUSED = 0;
GC.RESTARTING = 0;

// Volume
GC.ENABLE_SFX = 1;

// How To Play
GC.HOW_TO_PLAY_PAGE = {
    ONE:1,
    TWO:2,
    COUNT:2
};

// Screen
GC.SCREEN = {
    SIZE:{
        WIDTH:1366,
        HEIGHT:768
    },
    CENTER:{
        X:683,
        Y:384
    }
};

GC.EASYPOS = {
    TL: null,
    TC: null,
    TR: null,
    CL: null,
    CC: null,
    CR: null,
    BL: null,
    BC: null,
    BR: null

};

GC.DELAY = {
    OFFSET: 0.25 // 0.25
};

GC.WAVE = {
    CURRENT: 0,
    REPEATS: 0
};

GC.STRIKES = 0;
GC.STREAKS = 0;

GC.LANES = {
    PLAYER: [],
    ENEMY: []
};

GC.HITBOX = {
    OFFSET: {
        X: 0, //0
        Y: 0 //0
    },
    ALLOWANCE: {
        BULLSEYE: 70, // 26
        DEFLECT: 75
    }
};

GC.OFF_POSITION = null;

GC.PLAYER = {
    SWINGSPEED: 0.03, //0.03
    BATDECAY: 0.025, //0.025
    IDLESPEED: 0.0625 //0.0625
};

GC.SQUEAKS = {
    LEFTPOS: null,
    RIGHTPOS: null,
    INTERVAL: 15, // 15
    THROWS: 3, //3
    LEFTSTART: null,
    RIGHTSTART: null,
    REPEAT: 0,
    STAY: 2
};

GC.CHICKEN = {
    LEFTPOS: null,
    LEFTSTART: null,
    RIGHTPOS: null,
    RIGHTSTART: null,
    STAY: 3,
    INTERVAL: [20, 25, 30]
};

GC.LAYER = {
    EFFECTS: 7,
    BACKGROUND: 0,
    BUGS: 4,
    COYOTE: 2,
    SQUEAKS: 3,
    CHICKEN: 1,
    GRENADE: 5,
    OBJ: 6
};

GC.CAMERA = {
    SHAKE: 4
};

GC.STARTED = false;
GC.END = null;

// Game over screen
GC.GAME_OVER_ASSETS = {
    HIGH: {
        X:335,
        Y:80
    },
    YOUR: {
        X:335,
        Y:-97
    },
    REPLAY: {
        X:315,
        Y:-220
    }
};

GC.ADDELAY = 0.15;


GC.SWIPE_THRESHOLD = 30; // 50

// Score
GC.SCORE = 0;
GC.UNIQUE_SCORE_KEY = "cnwbu_high_score"; // Note: Change this for other games!