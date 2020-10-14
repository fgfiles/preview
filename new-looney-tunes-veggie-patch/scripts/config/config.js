import LayoutBugsHome from './layouts/bugshome.js';
import LayoutSurface from './layouts/surface.js';
import LayoutSurfaceSS from './layouts/surface-ss.js';

import BirdBath from '../entities/actors/birdbath.js';
import Bubble from '../entities/actors/bubble.js';
import BugsIntro from '../entities/actors/bugs-intro.js';
import Character from '../entities/actors/character.js';
import Crow from '../entities/actors/crow.js';
import Flies from '../entities/actors/flies.js';
import FX from '../entities/actors/fx.js';
import Food from '../entities/actors/food.js';
import Geiser from '../entities/actors/geiser.js';
import Gong from '../entities/actors/gong.js';
import Particle from '../entities/actors/particle.js';
import Plant from '../entities/actors/plant.js';
import Pot from '../entities/actors/pot.js';
import Radio from '../entities/actors/radio.js';
import Rain from '../entities/actors/rain.js';
import Seeds from '../entities/actors/seeds.js';
import Surface from '../entities/actors/surface.js';
import TrashCan from '../entities/actors/trashcan.js';
import TweetyBird from '../entities/actors/tweety.js';
import WaterCan from '../entities/actors/watercan.js';

export default {
    meta: {
        name: "Looney Tunes Very Veg Patch",
        version: "1.0",
        defaultLayout: "BugsHome"
    },
    classes: {
        "Background-Surface-1": {
            states: {
                "idle": ["BG/Surface/1"]
            },
            sortableY: false,
            interactive: false,
            pointerEvents: false,
            physics: false,
            behavior: Surface
        },
        "Background-Surface-2": {
            states: {
                "idle": ["BG/Surface/2"]
            },
            sortableY: false,
            interactive: false,
            pointerEvents: false,
            physics: false
        },
        "Background-Surface-3": {
            states: {
                "idle": ["BG/Surface/3"]
            },
            sortableY: false,
            interactive: false,
            pointerEvents: false,
            physics: false
        },
        "Background-Surface-4": {
            states: {
                "idle": ["BG/Surface/4"]
            },
            sortableY: false,
            interactive: false,
            pointerEvents: false,
            physics: false
        },
        "Background-BugsHome-1": {
            states: {
                "idle": ["BG/BugsHome/1"]
            },
            sortableY: false,
            interactive: false,
            pointerEvents: false,
            physics: false
        },
        "BugsBunny": {
            collidable: true,
            states: {
                "start": ["bb/BB-01-Stand"],
                // "start": ["bb/BB-01-Stand", "bb/BB-07-Straddle", "bb/BB-04-Hangin", "bb/BB-05-Miffed", "bb/BB-06-Slouch", "bb/BB-07-Straddle", "bb/BB-10-Throw", "bb/BB-16-Triangle", "bb/BB-17-Sitting", "bb/BB-18-Buddha", "bb/BB-20-Static", "bb/BB-22-Think"],
                // "idle": ["bb/BB-01-Stand", "bb/BB-07-Straddle", "bb/BB-04-Hangin", "bb/BB-05-Miffed", "bb/BB-06-Slouch", "bb/BB-07-Straddle", "bb/BB-10-Throw", "bb/BB-16-Triangle", "bb/BB-17-Sitting", "bb/BB-18-Buddha", "bb/BB-20-Static", "bb/BB-22-Think", "bb/BB-08-BendOver"],
                "idle": ["bb/BB-01-Stand"],
                "hover": ["bb/BB-99-Hover"],
                "reject": ["bb/BB-09-Reject"],
                "hit-ob": ["bb/BB-03-Hit"],
                "hit-floor-soft": ["bb/BB-19-FallSoft"],
                "hit-floor-hard": ["bb/BB-20-FallHard"],
                // "drag": ["flying"],
                "consume-carrot": ["bb/BB-02-Eats"],
                "consume-ob-bananas": ["bb/BB-02-Eats"],
                "consume-ob-pl-beet": ["bb/BB-02-Eats"],
                "consume-ob-pl-blueorchid": ["bb/BB-02-Eats"],
                "consume-ob-pl-cactus": ["bb/BB-02-Eats"],
                "consume-ob-pl-carrot": ["bb/BB-02-Eats"],
                "consume-ob-pl-fern": ["bb/BB-02-Eats"],
                "consume-ob-pl-flower": ["bb/BB-02-Eats"],
                "consume-ob-pl-rose": ["bb/BB-02-Eats"],
                "consume-ob-pl-strawberry": ["bb/BB-02-Eats"],
                "consume-ob-pl-watermelon": ["bb/BB-02-Eats"],
                "consume-ob-pl-wildflower": ["bb/BB-02-Eats"],
                "consume-carrot-sm": ["bb/BB-02-Eats"],
                "consume-carrot-lg": ["bb/BB-02-Eats"],
                "consume-ob-apple": ["bb/BB-02-Eats"],
                "holding-ob-chainsaw": ["bb/BB-11-Chainsaw"],
                "holding-ob-mask": ["bb/BB-12-Mask"],
                "holding-ob-fruithat": ["bb/BB-10-FruitHat"],
                "holding-ob-jackhammer": ["bb/BB-15-Jackham"],
                "holding-ob-jackham-helm": ["bb/BB-15-JackhamHat"],
                "holding-ob-spray": ["bb/BB-04-Spray"],
                "holding-ob-hammer": ["bb/BB-16-Hammer"],
                "holding-ob-hose": ["bb/BB-08-Watering"],
                "reject-ob-chainsaw": ["bb/BB-11-Chainsaw-Reject"],
                "near-apple": ["bb/BB-04-Spray"],
                "held-gong": ["bb/BB-18-Buddha"],
                "held-loungechair": ["bb/BB-15-Lounge"]
            },
            audio: {
                "fall-hard": "SO-BB-FallHard-mix"
            },
            defaultState: "start",
            behavior: Character
        },
        "BugsBunnyIntro": {
            states: {
                "reject": ["bb/BB-09-Reject"],
                "idle": ["bb/BB-13a-Behold"],
                "step-1": ["bb/BB-13a-Behold"],
                "step-2": ["bb/BB-13a-Behold"],
                "step-3": ["bb/BB-13a-Behold"],
                "step-4": ["bb/BB-13a-Behold"],
                "step-5": ["bb/BB-13b-Behold"],
            },
            defaultState: "step-1",
            pointerEvents: false,
            behavior: BugsIntro
        },
        "DaffyDuck": {
            states: {
                "idle": ["dd/DD-00-Stand"],
                "hover": ["dd/DD-99-Hover"],
                "reject": ["dd/DD-12-Reject"],
                "hit-ob": ["dd/DD-13-Hit"],
                "hit-floor-soft": ["dd/DD-05-Fall"],
                "hit-floor-hard": ["dd/DD-05-Fall"],
                "consume-carrot": ["dd/DD-01-Eats"],
                "consume-ob-pl-beet": ["dd/DD-01-Eats"],
                "consume-ob-pl-blueorchid": ["dd/DD-01-Eats"],
                "consume-ob-pl-cactus": ["dd/DD-01-Eats"],
                "consume-ob-pl-carrot": ["dd/DD-01-Eats"],
                "consume-ob-pl-fern": ["dd/DD-01-Eats"],
                "consume-ob-pl-flower": ["dd/DD-01-Eats"],
                "consume-ob-pl-rose": ["dd/DD-01-Eats"],
                "consume-ob-pl-strawberry": ["dd/DD-01-Eats"],
                "consume-ob-pl-watermelon": ["dd/DD-01-Eats"],
                "consume-ob-pl-wildflower": ["dd/DD-01-Eats"],
                "consume-carrot-sm": ["dd/DD-01-Eats"],
                "consume-carrot-lg": ["dd/DD-01-Eats"],
                "consume-ob-apple": ["dd/DD-01-Eats"],
                "consume-ob-bananas": ["dd/DD-01-Eats"],
                "holding-ob-swan": ["dd/DD-02-BirdWalk"],
                "holding-ob-airhorn": ["dd/DD-08-AirHorn"],
                "holding-ob-hammer": ["dd/DD-09-Hammer"],
                "holding-ob-paintbucket": ["dd/DD-03-Paints"],
                "holding-ob-sunglasses": ["dd/DD-02-BirdClipBush"],
                "swimfly": ["dd/DD-04-SwimFly"]
            },
            audio: {
                "fall-hard": "SO-DD-FallHard-mix"
            },
            collidable: true,
            behavior: Character
        },
        "Taz": {
            states: {
                "idle": ["td/TD-01-Stand"],
                "hover": ["td/TD-99-Hover"],
                "drag": ["td/TD-02-SpinDrag"],
                "reject": ["td/TD-05-Reject"],
                "hit-ob": ["td/TD-06-Hit", "td/TD-09-Angry"],
                // "hit-floor-soft": ["td/TD-07-FallSoft"],
                "hit-floor-hard": ["td/TD-08-FallHard"],
                "consume-carrot": ["td/TD-04-Eats"],
                "consume-ob-pl-beet": ["td/TD-04-Eats"],
                "consume-ob-pl-blueorchid": ["td/TD-04-Eats"],
                "consume-ob-pl-cactus": ["td/TD-04-Eats"],
                "consume-ob-pl-carrot": ["td/TD-04-Eats"],
                "consume-ob-pl-fern": ["td/TD-04-Eats"],
                "consume-ob-pl-flower": ["td/TD-04-Eats"],
                "consume-ob-pl-rose": ["td/TD-04-Eats"],
                "consume-ob-pl-strawberry": ["td/TD-04-Eats"],
                "consume-ob-pl-watermelon": ["td/TD-04-Eats"],
                "consume-ob-pl-wildflower": ["td/TD-04-Eats"],
                "consume-carrot-sm": ["td/TD-04-Eats"],
                "consume-carrot-lg": ["td/TD-04-Eats"],
                "consume-ob-apple": ["td/TD-04-Eats"],
                "consume-ob-bananas": ["td/TD-04-Eats"],
                "consume-ob-fruithat": ["td/TD-04-Eats"],
            },
            audio: {
                "fall-hard": "SO-TD-FallHard-mix"
            },
            collidable: true,
            behavior: Character
        },
        "PorkyPig": {
            states: {
                "idle": ["pp/PP-01-Stand"],
                "hover": ["pp/PP-99-Hover"],
                "reject": ["pp/PP-05-Reject"],
                "hit-ob": ["pp/PP-02-Hit"],
                "hit-floor-soft": ["pp/PP-03-FallSoft"],
                "hit-floor-hard": ["pp/PP-04-FallHard"],
                "holding-ob-broom": ["pp/PP-06-Sweep"],
                "held-Gong": ["pp/PP-09-Meditate"],
            },
            audio: {
                "fall-hard": "SO-PP-FallHard-mix"
            },
            collidable: true,
            physics: true,
            behavior: Character
        },
        "Squeaks": {
            states: {
                "idle": ["ss/SS-01-Stand"],
                "hover": ["ss/SS-99-Hover"],
                "reject": ["ss/SS-06-Reject"],
                "hit-ob": ["ss/SS-05-Hit"],
                "hit-floor-soft": ["ss/SS-08-Fallsoft"],
                "hit-floor-hard": ["ss/SS-09-FallHard"],
                "consume-carrot": ["ss/SS-07-Eats"],
                "consume-ob-bananas": ["ss/SS-07-Eats"],
                "consume-ob-pl-beet": ["ss/SS-07-Eats"],
                "consume-ob-pl-blueorchid": ["ss/SS-07-Eats"],
                "consume-ob-pl-cactus": ["ss/SS-07-Eats"],
                "consume-ob-pl-carrot": ["ss/SS-07-Eats"],
                "consume-ob-pl-fern": ["ss/SS-07-Eats"],
                "consume-ob-pl-flower": ["ss/SS-07-Eats"],
                "consume-ob-pl-rose": ["ss/SS-07-Eats"],
                "consume-ob-pl-strawberry": ["ss/SS-07-Eats"],
                "consume-ob-pl-watermelon": ["ss/SS-07-Eats"],
                "consume-ob-pl-wildflower": ["ss/SS-07-Eats"],
                "consume-carrot-sm": ["ss/SS-07-Eats"],
                "consume-carrot-lg": ["ss/SS-07-Eats"],
                "consume-ob-apple": ["ss/SS-07-Eats"],
                "holding-ob-spray": ["ss/SS-03-Spray"],
                "holding-ob-airhorn": ["ss/SS-02-AirHorn"]
            },
            audio: {
                "fall-hard": "SO-SS-FallHard-mix"
            },
            collidable: true,
            behavior: Character
        },
        "TweetyBird": {
            states: {
                "idle": ["tb/TB-01-FlyCarry"],
                "hover": ["tb/TB-99-Hover"],
                "flydrop": ["tb/TB-02-FlyDrop"],
                // "holding-ob-spray": ["tb/TB-01-FlyCarry"],
                "holding-ob-airhorn": ["tb/TB-01-FlyCarry"]
            },
            collidable: true,
            draggable: false,
            behavior: TweetyBird
        },
        "BB-Hole-Exit": {
            states: {
                "idle": ["ob/OB-Apple-01"]
            },
            collidable: false,
            draggable: false,
            physics: false,
            events: {
                onMouseDown: function(event, item){
                    game.playSFX('SO-hole-win-sting');
                    this.setTimeout(() => this.parentScene.changeScenes('Surface'), 1000);
                    
                }
            }
        },
        "Plant": {
            states: {
                "idle": ["pl/PL-01-Idle"],
                "watered-CA-1": ["pl/PL-01-Base"],
                "watered-CA-2": ["pl/PL-02a-Carrot"],
                "watered-CA-3": ["pl/PL-02b-Carrot"],
                "watered-CA-4": ["pl/PL-02c-Carrot"],
                "harvested-CA": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "watered-BE-1": ["pl/PL-01-Base"],
                "watered-BE-2": ["pl/PL-03a-Beet"],
                "watered-BE-3": ["pl/PL-03b-Beet"],
                "watered-BE-4": ["pl/PL-03c-Beet"],
                "harvested-BE": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "watered-WA-1": ["pl/PL-01-Base"],
                "watered-WA-2": ["pl/PL-04a-Watermelon"],
                "watered-WA-3": ["pl/PL-04b-Watermelon"],
                "watered-WA-4": ["pl/PL-04c-Watermelon"],
                "harvested-WA": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "watered-ST-1": ["pl/PL-01-Base"],
                "watered-ST-2": ["pl/PL-05a-Strawberry"],
                "watered-ST-3": ["pl/PL-05b-Strawberry"],
                "watered-ST-4": ["pl/PL-05c-Strawberry"],
                "harvested-ST": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "watered-FL-1": ["pl/PL-01-Base"],
                "watered-FL-2": ["pl/PL-06a-Flower"],
                "watered-FL-3": ["pl/PL-06b-Flower"],
                "watered-FL-4": ["pl/PL-06c-Flower"],
                "harvested-FL": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "watered-BO-1": ["pl/PL-01-Base"],
                "watered-BO-2": ["pl/PL-07a-BlueOrchid"],
                "watered-BO-3": ["pl/PL-07b-BlueOrchid"],
                "watered-BO-4": ["pl/PL-07c-BlueOrchid"],
                "harvested-BO": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "watered-RS-1": ["pl/PL-01-Base"],
                "watered-RS-2": ["pl/PL-08a-Rose"],
                "watered-RS-3": ["pl/PL-08b-Rose"],
                "watered-RS-4": ["pl/PL-08c-Rose"],
                "harvested-RS": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "watered-BU-1": ["pl/PL-01-Base"],
                "watered-BU-2": ["pl/PL-09a-Bush"],
                "watered-BU-3": ["pl/PL-09b-Bush"],
                "watered-BU-4": ["pl/PL-09c-Bush"],
                "clipped-BU-BB": ["pl/PL-09-Bush-BB"],
                "clipped-BU-CA": ["pl/PL-09-Bush-CA"],
                "clipped-BU-DO": ["pl/PL-09-Bush-DO"],
                "clipped-BU-EL": ["pl/PL-09-Bush-EL"],
                "clipped-BU-PR": ["pl/PL-09-Bush-PR"],
                "clipped-BU-SW": ["pl/PL-09-Bush-SW"],
                "clipped-BU-TR": ["pl/PL-09-Bush-TR"],
                "harvested-BU": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "watered-FN-1": ["pl/PL-01-Base"],
                "watered-FN-2": ["pl/PL-10a-Fern"],
                "watered-FN-3": ["pl/PL-10b-Fern"],
                "watered-FN-4": ["pl/PL-10c-Fern"],
                "harvested-FN": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "watered-WF-1": ["pl/PL-01-Base"],
                "watered-WF-2": ["pl/PL-11a-WildFlower"],
                "watered-WF-3": ["pl/PL-11b-WildFlower"],
                "watered-WF-4": ["pl/PL-11c-WildFlower"],
                "harvested-WF": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "watered-CS-1": ["pl/PL-01-Base"],
                "watered-CS-2": ["pl/PL-12a-Cactus"],
                "watered-CS-3": ["pl/PL-12b-Cactus"],
                "watered-CS-4": ["pl/PL-12c-Cactus"],
                "harvested-CS": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "withered": ["pl/PL-Withered"],
            },
            behavior: Plant,
            collidable: true,
            draggable: false,
            physics: true
        },
        "Plant-Pot": {
            states: {
                "idle": ["HIDDEN"],
                "watered-CA-1": ["pl/PL-01-Base"],
                "watered-CA-2": ["pl/PL-02a-Carrot"],
                "watered-CA-3": ["pl/PL-02b-Carrot"],
                "watered-CA-4": ["pl/PL-02c-Carrot"],
                "harvested-CA": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "watered-BE-1": ["pl/PL-01-Base"],
                "watered-BE-2": ["pl/PL-03a-Beet"],
                "watered-BE-3": ["pl/PL-03b-Beet"],
                "watered-BE-4": ["pl/PL-03c-Beet"],
                "harvested-BE": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "watered-WA-1": ["pl/PL-01-Base"],
                "watered-WA-2": ["pl/PL-04a-Watermelon"],
                "watered-WA-3": ["pl/PL-04b-Watermelon"],
                "watered-WA-4": ["pl/PL-04c-Watermelon"],
                "harvested-WA": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "watered-ST-1": ["pl/PL-01-Base"],
                "watered-ST-2": ["pl/PL-05a-Strawberry"],
                "watered-ST-3": ["pl/PL-05b-Strawberry"],
                "watered-ST-4": ["pl/PL-05c-Strawberry"],
                "harvested-ST": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "watered-FL-1": ["pl/PL-01-Base"],
                "watered-FL-2": ["pl/PL-06a-Flower"],
                "watered-FL-3": ["pl/PL-06b-Flower"],
                "watered-FL-4": ["pl/PL-06c-Flower"],
                "harvested-FL": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "watered-BO-1": ["pl/PL-01-Base"],
                "watered-BO-2": ["pl/PL-07a-BlueOrchid"],
                "watered-BO-3": ["pl/PL-07b-BlueOrchid"],
                "watered-BO-4": ["pl/PL-07c-BlueOrchid"],
                "harvested-BO": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "watered-RS-1": ["pl/PL-01-Base"],
                "watered-RS-2": ["pl/PL-08a-Rose"],
                "watered-RS-3": ["pl/PL-08b-Rose"],
                "watered-RS-4": ["pl/PL-08c-Rose"],
                "harvested-RS": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "watered-BU-1": ["pl/PL-01-Base"],
                "watered-BU-2": ["pl/PL-09a-Bush"],
                "watered-BU-3": ["pl/PL-09b-Bush"],
                "watered-BU-4": ["pl/PL-09c-Bush"],
                "clipped-BU-BB": ["pl/PL-09-Bush-BB"],
                "clipped-BU-CA": ["pl/PL-09-Bush-CA"],
                "clipped-BU-DO": ["pl/PL-09-Bush-DO"],
                "clipped-BU-EL": ["pl/PL-09-Bush-EL"],
                "clipped-BU-PR": ["pl/PL-09-Bush-PR"],
                "clipped-BU-SW": ["pl/PL-09-Bush-SW"],
                "clipped-BU-TR": ["pl/PL-09-Bush-TR"],
                "harvested-BU": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "watered-FN-1": ["pl/PL-01-Base"],
                "watered-FN-2": ["pl/PL-10a-Fern"],
                "watered-FN-3": ["pl/PL-10b-Fern"],
                "watered-FN-4": ["pl/PL-10c-Fern"],
                "harvested-FN": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "watered-WF-1": ["pl/PL-01-Base"],
                "watered-WF-2": ["pl/PL-11a-WildFlower"],
                "watered-WF-3": ["pl/PL-11b-WildFlower"],
                "watered-WF-4": ["pl/PL-11c-WildFlower"],
                "harvested-WF": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
                "watered-CS-1": ["pl/PL-01-Base"],
                "watered-CS-2": ["pl/PL-12a-Cactus"],
                "watered-CS-3": ["pl/PL-12b-Cactus"],
                "watered-CS-4": ["pl/PL-12c-Cactus"],
                "harvested-CS": ["ob/OB-Carrots/OB-PL-Carrot-Super"],
            },
            behavior: Plant,
            collidable: true,
            draggable: false,
            physics: false
        },
        "Carrot-SM": {
            states: {
                "idle": ["ob/OB-Carrots/OB-PL-Carrot-SM"]
            },
            behavior: Food
        },
        "Carrot-LG": {
            states: {
                "idle": ["ob/OB-Carrots/OB-PL-Carrot-LG"]
            },
            behavior: Food
        },
        "Carrot": {
            states: {
                "idle": ["ob/OB-Carrots/OB-PL-Carrot-Super"]
            },
            behavior: Food
        },
        "Gong": {
            states: {
                "idle": ["ob/OB-Buddha-Gong"],
                "holding-bugsbunny": ["ob/OB-Buddha-Gong"],
                "holding-porkypig": ["ob/OB-Buddha-Gong"]
            },
            draggable: true,
            pointerEvents: true,
            behavior: Gong
        },
        "WaterCan": {
            states: {
                "idle": ["ob/OB-WaterCan"],
                "using-plant": ["ob/OB-WaterCan"],
                "using-plant-carrot": ["ob/OB-WaterCan"],
                "using-ob-pot-aqua": ["ob/OB-WaterCan"],
                "using-ob-pot-cedar": ["ob/OB-WaterCan"],
                "using-ob-pot-copper": ["ob/OB-WaterCan"],
                "using-ob-pot-gold": ["ob/OB-WaterCan"],
                "using-ob-pot-green": ["ob/OB-WaterCan"],
                "using-ob-pot-mustard": ["ob/OB-WaterCan"],
                "using-ob-pot-orange": ["ob/OB-WaterCan"],
                "using-ob-pot-purple": ["ob/OB-WaterCan"],
                "using-ob-pot-red": ["ob/OB-WaterCan"],
                "using-ob-pot-silver": ["ob/OB-WaterCan"],
                "using-ob-birdbath": ["ob/OB-WaterCan"]
            },
            behavior: WaterCan
        },
        "WaterParticle": {
            states: {
                "idle": ["fx/FX-WaterDrops"]
            },
            collidable: true,
            autoGroundLevel: false,
            behavior: Particle
        },
        "LoungeChair": {
            states: {
                "idle": ["ob/OB-LoungChair"],
                "holding-bugsbunny": ["ob/OB-LoungChair"],
            },
            draggable: true,
            pointerEvents: true
        },
        "Carrot": {
            states: {
                "idle": ["ob/OB-Carrots/OB-PL-Carrot-Super"]
            }
        },
        "FX-Pow": {
            states: {
                "idle": ["fx/FX-Pow"]
            },
            sortableY: false,
            collidable: false,
            draggable: false,
            physics: false,
            behavior: FX
        },
        "FX-Geiser-Water": {
            states: {
                "idle": ["HIDDEN"],
                "water": ["fx/FX-Geiser-Water"]
            },
            sortableY: false,
            collidable: false,
            draggable: false,
            physics: false,
            behavior: Geiser
        },
        "FX-GongSmoke": {
            states: {
                "idle": ["fx/FX-GongSmoke"]
            },
            pointerEvents: false,
            sortableY: false,
            collidable: false,
            draggable: false,
            physics: false,
            behavior: FX
        },
        "FX-Leaf": {
            states: {
                "idle": ["fx/FX-Leaf-B"]
            },
            sortableY: false,
            collidable: false,
            draggable: false,
            physics: false,
            behavior: FX
        },
        "FX-Supercut": {
            states: {
                "idle": ["fx/FX-Supercut"]
            },
            sortableY: false,
            collidable: false,
            draggable: false,
            physics: false,
            behavior: FX
        },
        "FX-TB-Drop": {
            states: {
                "idle": ["fx/FX-TB-Drop"]
            },
            sortableY: false,
            collidable: false,
            draggable: false,
            physics: false,
            behavior: FX
        },
        "FX-SeedDrops-BE": {
            states: {
                "idle": ["fx/FX-SeedDrops/BE"]
            },
            collidable: true,
            autoGroundLevel: false,
            behavior: Particle
        },
        "FX-SeedDrops-CA": {
            states: {
                "idle": ["fx/FX-SeedDrops/CA"]
            },
            collidable: true,
            autoGroundLevel: false,
            behavior: Particle
        },
        "FX-SeedDrops-Misc": {
            states: {
                "idle": ["fx/FX-SeedDrops/MI"]
            },
            collidable: true,
            autoGroundLevel: false,
            behavior: Particle
        },
        "FX-SeedDrops-ST": {
            states: {
                "idle": ["fx/FX-SeedDrops/ST"]
            },
            collidable: true,
            autoGroundLevel: false,
            behavior: Particle
        },
        "FX-SeedDrops-WA": {
            states: {
                "idle": ["fx/FX-SeedDrops/WA"]
            },
            collidable: true,
            autoGroundLevel: false,
            behavior: Particle
        },
        "FX-SeedDrops-FL": {
            states: {
                "idle": ["fx/FX-SeedDrops/MI"]
            },
            collidable: true,
            autoGroundLevel: false,
            behavior: Particle
        },
        "FX-SeedDrops-BO": {
            states: {
                "idle": ["fx/FX-SeedDrops/MI"]
            },
            collidable: true,
            autoGroundLevel: false,
            behavior: Particle
        },
        "FX-SeedDrops-RS": {
            states: {
                "idle": ["fx/FX-SeedDrops/MI"]
            },
            collidable: true,
            autoGroundLevel: false,
            behavior: Particle
        },
        "FX-SeedDrops-BU": {
            states: {
                "idle": ["fx/FX-SeedDrops/MI"]
            },
            collidable: true,
            autoGroundLevel: false,
            behavior: Particle
        },
        "FX-SeedDrops-FN": {
            states: {
                "idle": ["fx/FX-SeedDrops/MI"]
            },
            collidable: true,
            autoGroundLevel: false,
            behavior: Particle
        },
        "FX-SeedDrops-WF": {
            states: {
                "idle": ["fx/FX-SeedDrops/MI"]
            },
            collidable: true,
            autoGroundLevel: false,
            behavior: Particle
        },
        "FX-SeedDrops-CS": {
            states: {
                "idle": ["fx/FX-SeedDrops/MI"]
            },
            collidable: true,
            autoGroundLevel: false,
            behavior: Particle
        },
        "FX-SeedDrops-BU": {
            states: {
                "idle": ["fx/FX-SeedDrops/MI"]
            },
            collidable: true,
            autoGroundLevel: false,
            behavior: Particle
        },
        "FX-SmokePuff": {
            states: {
                "idle": ["fx/FX-SmokePuff"]
            },
            draggable: false,
            behavior: FX
        },
        "FX-Spray": {
            states: {
                "idle": ["fx/FX-Spray"]
            },
            behavior: FX
        },
        "OB-Apple": {
            states: {
                "idle": ["ob/OB-Apple-01"]
            },
            collidable: true,
            behavior: Food
        },
        "OB-Bananas": {
            states: {
                "idle": ["ob/OB-Bananas/OB-BANANAS"]
            },
            collidable: true,
            behavior: Food
        },
        "OB-AirHorn": {
            states: {
                "idle": ["ob/OB-AirHorn"]
            }
        },
        "OB-BirdBath": {
            states: {
                "idle": ["ob/OB-BirdBath"]
            },
            behavior: BirdBath,
            collidable: true
        },
        "FX-BirdBath-Water": {
            states: {
                "idle": ["HIDDEN"],
                "full": ["fx/FX-BirdBath"],
                "empty": ["fx/FX-BirdBath-Reverse"],
                "tweetybird-in": ["tb/TB-03-Birdbath-In"],
                "tweetybird-out": ["tb/TB-04-Birdbath-Out"],
                "tweetybird-idle": ["tb/TB-05-Birdbath-Idle"],
            },
            sortableY: false,
            collidable: false,
            draggable: false,
            physics: false
        },
        "OB-Broom": {
            states: {
                "idle": ["ob/OB-Broom"]
            }
        },
        "OB-Chainsaw": {
            states: {
                "idle": ["ob/OB-Chainsaw"]
            }
        },
        "OB-Crow": {
            states: {
                "idle": ["ob/OB-Crow-Peck"],
                "takeoff": ["ob/OB-Crow-TakeOff"],
                "fly": ["ob/OB-Crow-Fly"],
                "land": ["ob/OB-Crow-Fly"]
            },
            draggable: false,
            behavior: Crow
        },
        "OB-Fertiziler": {
            states: {
                "idle": ["ob/OB-Fertiziler"]
            }
        },
        "OB-Flies-A": {
            states: {
                "idle": ["ob/OB-Flies-A"],
                "exit": ["ob/OB-Flies-A-Exit"]
            },
            draggable: false,
            physics: false,
            behavior: Flies
        },
        "OB-Flies-B": {
            states: {
                "idle": ["ob/OB-Flies-B"],
                "exit": ["ob/OB-Flies-B-Exit"]
            },
            draggable: false,
            physics: false,
            behavior: Flies
        },
        "OB-Fly": {
            states: {
                "idle": ["ob/OB-Fly"],
                "exit": ["ob/OB-FliesExit"]
            },
            draggable: false,
            physics: false,
            behavior: Flies
        },
        "OB-FruitHat": {
            states: {
                "idle": ["ob/OB-FruitHat"]
            }
        },
        "OB-Hammer": {
            states: {
                "idle": ["ob/OB-Hammer"]
            }
        },
        "OB-Hose": {
            states: {
                "idle": ["ob/OB-Hose"]
            }
        },
        "OB-Jackhammer": {
            states: {
                "idle": ["ob/OB-Jackhammer"]
            }
        },
        "OB-Jackham-Helm": {
            states: {
                "idle": ["ob/OB-Jackham-Helm"]
            }
        },
        "OB-Ladder-Out": {
            states: {
                "idle": ["ob/OB-Ladder-Out"]
            },
            collidable: false,
            draggable: false,
            physics: false,
            events: {
                onMouseDown: function(event, item){
                    this.parentScene.saveState("surface");
                    this.parentScene.changeScenes('BugsHome');
                }
            }
        },
        "OB-Mask": {
            states: {
                "idle": ["ob/OB-Mask"]
            }
        },
        "OB-PaintBucket": {
            states: {
                "idle": ["ob/OB-PaintBucket"]
            }
        },
        "OB-PL-Beet": {
            states: {
                "idle": ["ob/OB-PL-Beet"]
            },
            behavior: Food
        },
        "OB-PL-BlueOrchid": {
            states: {
                "idle": ["ob/OB-PL-BlueOrchid"]
            },
            behavior: Food
        },
        "OB-PL-Bush": {
            states: {
                "idle": ["ob/OB-PL-Bush/idle"],
                "BB": ["ob/OB-PL-Bush/bb"],
                "CA": ["ob/OB-PL-Bush/ca"],
                "DO": ["ob/OB-PL-Bush/do"],
                "EL": ["ob/OB-PL-Bush/el"],
                "PR": ["ob/OB-PL-Bush/pr"],
                "SW": ["ob/OB-PL-Bush/sw"],
                "TR": ["ob/OB-PL-Bush/tr"],
                "withered": ["ob/OB-PL-Bush/withered"]
            },
            behavior: Food
        },
        "OB-PL-Cactus": {
            states: {
                "idle": ["ob/OB-PL-Cactus"]
            },
            behavior: Food
        },
        "OB-PL-Carrot": {
            states: {
                "idle": ["ob/OB-PL-Carrot"]
            },
            behavior: Food
        },
        "OB-PL-Fern": {
            states: {
                "idle": ["ob/OB-PL-Fern"]
            },
            behavior: Food
        },
        "OB-PL-Flower": {
            states: {
                "idle": ["ob/OB-PL-Flower"]
            },
            behavior: Food
        },
        "OB-PL-Pumpkin": {
            states: {
                "idle": ["ob/OB-Pumpkin"]
            },
            behavior: Food,
            collidable: true
        },
        "OB-PL-Rose": {
            states: {
                "idle": ["ob/OB-PL-Rose"]
            },
            behavior: Food
        },
        "OB-PL-Strawberry": {
            states: {
                "idle": ["ob/OB-PL-Strawberry"]
            },
            behavior: Food
        },
        "OB-PL-Watermelon": {
            states: {
                "idle": ["ob/OB-PL-Watermelon"],
                "break": ["fx/FX-Watermelon"]
            },
            behavior: Food,
            collidable: true
        },
        "OB-PL-WildFlower": {
            states: {
                "idle": ["ob/OB-PL-WildFlower"]
            },
            behavior: Food
        },
        "OB-Radio": {
            states: {
                "idle": ["ob/OB-Radio"]
            },
            behavior: Radio
        },
        "OB-Scissors": {
            states: {
                "idle": ["ob/OB-Scissors"]
            }
        },
        "OB-Shovel": {
            states: {
                "idle": ["ob/OB-Shovel"]
            }
        },
        "OB-Spade": {
            states: {
                "idle": ["ob/OB-Spade"]
            }
        },
        "OB-Spray": {
            states: {
                "idle": ["ob/OB-Spray"],
                "held-BugsBunny": ["HIDDEN"]
            }
        },
        "OB-Sunglasses": {
            states: {
                "idle": ["ob/OB-Sunglasses"],
                "held-Daffy": ["HIDDEN"]
            }
        },
        "OB-Swan": {
            states: {
                "idle": ["ob/OB-Swan"]
            }
        },
        "OB-Swan-Hidden": {
            states: {
                "idle": ["ob/OB-Swan-Hidden"]
            }
        },
        "OB-WheelBarrel": {
            states: {
                "idle": ["ob/OB-WheelBarrel"]
            },
            collidable: true,
            behavior: Pot
        },
        "OB-Pot-Aqua": {
            states: {
                "idle": ["ob/ob-pots/Aqua"]
            },
            collidable: true,
            behavior: Pot
        },
        "OB-Pot-Cedar": {
            states: {
                "idle": ["ob/ob-pots/Cedar"]
            },
            collidable: true,
            behavior: Pot
        },
        "OB-Pot-Copper": {
            states: {
                "idle": ["ob/ob-pots/Copper"]
            },
            collidable: true,
            behavior: Pot
        },
        "OB-Pot-Gold": {
            states: {
                "idle": ["ob/ob-pots/Gold"]
            },
            collidable: true,
            behavior: Pot
        },
        "OB-Pot-Green": {
            states: {
                "idle": ["ob/ob-pots/Green"]
            },
            collidable: true,
            behavior: Pot
        },
        "OB-Pot-Mustard": {
            states: {
                "idle": ["ob/ob-pots/Mustard"]
            },
            collidable: true,
            behavior: Pot
        },
        "OB-Pot-Orange": {
            states: {
                "idle": ["ob/ob-pots/Orange"],
                "break": ["fx/FX-PotBreak"]
            },
            collidable: true,
            behavior: Pot
        },
        "OB-Pot-Purple": {
            states: {
                "idle": ["ob/ob-pots/Purple"]
            },
            collidable: true,
            behavior: Pot
        },
        "OB-Pot-Red": {
            states: {
                "idle": ["ob/ob-pots/Red"]
            },
            collidable: true,
            behavior: Pot
        },
        "OB-Pot-Silver": {
            states: {
                "idle": ["ob/ob-pots/Silver"]
            },
            collidable: true,
            behavior: Pot
        },
        "OB-Pot-Break": {
            states: {
                "idle": ["fx/FX-PotBreak"]
            },
            behavior: Particle
        },
        "OB-Pot-Break-Dirt": {
            states: {
                "idle": ["fx/FX-PotBreak-Dirt"]
            },
            behavior: Particle
        },
        "OB-TrashCan": {
            states: {
                "idle": ["ob/OB-Trashcan/Idle"],
                "toss": ["ob/OB-Trashcan/Toss"]
            },
            behavior: TrashCan,
            pointerEvents: true
        },
        "OB-Seeds-BE": {
            states: {
                "idle": ["ob/OB-Seeds/BE"],
                "using-plant": ["ob/OB-Seeds/BE"],
                "using-ob-pot-aqua": ["ob/OB-Seeds/BE"],
                "using-ob-pot-cedar": ["ob/OB-Seeds/BE"],
                "using-ob-pot-copper": ["ob/OB-Seeds/BE"],
                "using-ob-pot-gold": ["ob/OB-Seeds/BE"],
                "using-ob-pot-green": ["ob/OB-Seeds/BE"],
                "using-ob-pot-mustard": ["ob/OB-Seeds/BE"],
                "using-ob-pot-orange": ["ob/OB-Seeds/BE"],
                "using-ob-pot-purple": ["ob/OB-Seeds/BE"],
                "using-ob-pot-red": ["ob/OB-Seeds/BE"],
                "using-ob-pot-silver": ["ob/OB-Seeds/BE"]
            },
            behavior: Seeds
        },
        "OB-Seeds-BU": {
            states: {
                "idle": ["ob/OB-Seeds/BU"],
                "using-plant": ["ob/OB-Seeds/BU"],
                "using-ob-pot-aqua": ["ob/OB-Seeds/BU"],
                "using-ob-pot-cedar": ["ob/OB-Seeds/BU"],
                "using-ob-pot-copper": ["ob/OB-Seeds/BU"],
                "using-ob-pot-gold": ["ob/OB-Seeds/BU"],
                "using-ob-pot-green": ["ob/OB-Seeds/BU"],
                "using-ob-pot-mustard": ["ob/OB-Seeds/BU"],
                "using-ob-pot-orange": ["ob/OB-Seeds/BU"],
                "using-ob-pot-purple": ["ob/OB-Seeds/BU"],
                "using-ob-pot-red": ["ob/OB-Seeds/BU"],
                "using-ob-pot-silver": ["ob/OB-Seeds/BU"]
            },
            behavior: Seeds
        },
        "OB-Seeds-CA": {
            states: {
                "idle": ["ob/OB-Seeds/CA"],
                "using-plant": ["ob/OB-Seeds/CA"],
                "using-ob-pot-aqua": ["ob/OB-Seeds/CA"],
                "using-ob-pot-cedar": ["ob/OB-Seeds/CA"],
                "using-ob-pot-copper": ["ob/OB-Seeds/CA"],
                "using-ob-pot-gold": ["ob/OB-Seeds/CA"],
                "using-ob-pot-green": ["ob/OB-Seeds/CA"],
                "using-ob-pot-mustard": ["ob/OB-Seeds/CA"],
                "using-ob-pot-orange": ["ob/OB-Seeds/CA"],
                "using-ob-pot-purple": ["ob/OB-Seeds/CA"],
                "using-ob-pot-red": ["ob/OB-Seeds/CA"],
                "using-ob-pot-silver": ["ob/OB-Seeds/CA"]
            },
            behavior: Seeds
        },
        "OB-Seeds-Empty": {
            states: {
                "idle": ["ob/OB-Seeds/Empty"],
                "using-plant": ["ob/OB-Seeds/Empty"],
                "using-ob-pot-aqua": ["ob/OB-Seeds/Empty"],
                "using-ob-pot-cedar": ["ob/OB-Seeds/Empty"],
                "using-ob-pot-copper": ["ob/OB-Seeds/Empty"],
                "using-ob-pot-gold": ["ob/OB-Seeds/Empty"],
                "using-ob-pot-green": ["ob/OB-Seeds/Empty"],
                "using-ob-pot-mustard": ["ob/OB-Seeds/Empty"],
                "using-ob-pot-orange": ["ob/OB-Seeds/Empty"],
                "using-ob-pot-purple": ["ob/OB-Seeds/Empty"],
                "using-ob-pot-red": ["ob/OB-Seeds/Empty"],
                "using-ob-pot-silver": ["ob/OB-Seeds/Empty"]
            },
            behavior: Seeds
        },
        "OB-Seeds-Misc": {
            states: {
                "idle": ["ob/OB-Seeds/Misc"],
                "using-plant": ["ob/OB-Seeds/Misc"],
                "using-ob-pot-aqua": ["ob/OB-Seeds/Misc"],
                "using-ob-pot-cedar": ["ob/OB-Seeds/Misc"],
                "using-ob-pot-copper": ["ob/OB-Seeds/Misc"],
                "using-ob-pot-gold": ["ob/OB-Seeds/Misc"],
                "using-ob-pot-green": ["ob/OB-Seeds/Misc"],
                "using-ob-pot-mustard": ["ob/OB-Seeds/Misc"],
                "using-ob-pot-orange": ["ob/OB-Seeds/Misc"],
                "using-ob-pot-purple": ["ob/OB-Seeds/Misc"],
                "using-ob-pot-red": ["ob/OB-Seeds/Misc"],
                "using-ob-pot-silver": ["ob/OB-Seeds/Misc"]
            },
            behavior: Seeds
        },
        "OB-Seeds-MU": {
            states: {
                "idle": ["ob/OB-Seeds/MU"],
                "using-plant": ["ob/OB-Seeds/MU"],
                "using-ob-pot-aqua": ["ob/OB-Seeds/MU"],
                "using-ob-pot-cedar": ["ob/OB-Seeds/MU"],
                "using-ob-pot-copper": ["ob/OB-Seeds/MU"],
                "using-ob-pot-gold": ["ob/OB-Seeds/MU"],
                "using-ob-pot-green": ["ob/OB-Seeds/MU"],
                "using-ob-pot-mustard": ["ob/OB-Seeds/MU"],
                "using-ob-pot-orange": ["ob/OB-Seeds/MU"],
                "using-ob-pot-purple": ["ob/OB-Seeds/MU"],
                "using-ob-pot-red": ["ob/OB-Seeds/MU"],
                "using-ob-pot-silver": ["ob/OB-Seeds/MU"]
            },
            behavior: Seeds
        },
        "OB-Seeds-PU": {
            states: {
                "idle": ["ob/OB-Seeds/PU"],
                "using-plant": ["ob/OB-Seeds/PU"],
                "using-ob-pot-aqua": ["ob/OB-Seeds/PU"],
                "using-ob-pot-cedar": ["ob/OB-Seeds/PU"],
                "using-ob-pot-copper": ["ob/OB-Seeds/PU"],
                "using-ob-pot-gold": ["ob/OB-Seeds/PU"],
                "using-ob-pot-green": ["ob/OB-Seeds/PU"],
                "using-ob-pot-mustard": ["ob/OB-Seeds/PU"],
                "using-ob-pot-orange": ["ob/OB-Seeds/PU"],
                "using-ob-pot-purple": ["ob/OB-Seeds/PU"],
                "using-ob-pot-red": ["ob/OB-Seeds/PU"],
                "using-ob-pot-silver": ["ob/OB-Seeds/PU"]
            },
            behavior: Seeds
        },
        "OB-Seeds-ST": {
            states: {
                "idle": ["ob/OB-Seeds/ST"],
                "using-plant": ["ob/OB-Seeds/ST"],
                "using-ob-pot-aqua": ["ob/OB-Seeds/ST"],
                "using-ob-pot-cedar": ["ob/OB-Seeds/ST"],
                "using-ob-pot-copper": ["ob/OB-Seeds/ST"],
                "using-ob-pot-gold": ["ob/OB-Seeds/ST"],
                "using-ob-pot-green": ["ob/OB-Seeds/ST"],
                "using-ob-pot-mustard": ["ob/OB-Seeds/ST"],
                "using-ob-pot-orange": ["ob/OB-Seeds/ST"],
                "using-ob-pot-purple": ["ob/OB-Seeds/ST"],
                "using-ob-pot-red": ["ob/OB-Seeds/ST"],
                "using-ob-pot-silver": ["ob/OB-Seeds/ST"]
            },
            behavior: Seeds
        },
        "OB-Seeds-WA": {
            states: {
                "idle": ["ob/OB-Seeds/WA"],
                "using-plant": ["ob/OB-Seeds/WA"],
                "using-ob-pot-aqua": ["ob/OB-Seeds/WA"],
                "using-ob-pot-cedar": ["ob/OB-Seeds/WA"],
                "using-ob-pot-copper": ["ob/OB-Seeds/WA"],
                "using-ob-pot-gold": ["ob/OB-Seeds/WA"],
                "using-ob-pot-green": ["ob/OB-Seeds/WA"],
                "using-ob-pot-mustard": ["ob/OB-Seeds/WA"],
                "using-ob-pot-orange": ["ob/OB-Seeds/WA"],
                "using-ob-pot-purple": ["ob/OB-Seeds/WA"],
                "using-ob-pot-red": ["ob/OB-Seeds/WA"],
                "using-ob-pot-silver": ["ob/OB-Seeds/WA"]
            },
            behavior: Seeds
        },
        "FX-Rain": {
            states: {
                // "idle": ["fx/FX-Rain"]
                "idle": ["HIDDEN"]
            },
            behavior: Rain,
            sortableY: false,
            pointerEvents: false,
        },
        "FX-Bubble-Heart": {
            states: {
                "idle": ["fx/fx-bubbles/FX-Bubble-Heart"]
            },
            behavior: Bubble,
            pointerEvents: false,
        },
        "FX-Bubble-Rain": {
            states: {
                "idle": ["fx/fx-bubbles/FX-Bubble-Rain"]
            },
            behavior: Bubble,
            pointerEvents: false,
        },
        "FX-Bubble-Scissors": {
            states: {
                "idle": ["fx/fx-bubbles/FX-Bubble-Scissors"]
            },
            behavior: Bubble,
            pointerEvents: false,
        },
        "FX-Bubble-Sprout": {
            states: {
                "idle": ["fx/fx-bubbles/FX-Bubble-Sprout"]
            },
            behavior: Bubble,
            pointerEvents: false,
        },
        "FX-Bubble-Water": {
            states: {
                "idle": ["fx/fx-bubbles/FX-Bubble-Water"]
            },
            behavior: Bubble,
            pointerEvents: false,
        },
    },
    layout: {
        "Surface": LayoutSurface,
        "Surface-SS": LayoutSurfaceSS,
        "BugsHome": LayoutBugsHome
    }
}