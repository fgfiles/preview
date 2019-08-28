var game = game || {};
var globalsignal = new WONBATS.Signal();
var globaltick = 0;
var soundManager = new SoundManager();
var entityFactory = new EntityFactory();
var physics = new Physics(0, 1200);
physics.setCategoryBits(game.config.categoryBits);
physics.setMaterials(game.config.materials, game.config.contactMaterials);
if (game.config.DATA_DEBUG) {
    var debugOverlay = new DebugOverlay();
}
WONBATS.Tween.init(50);

(function () {
    'use strict';
    var hidden, visibilityChange;
    if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
    }

    function Main() {
        this.last = Date.now();
        this.slow = 1; // slow motion scaling factor
        this.fps = game.config.FIXED_FPS;
        this.step = 1 / this.fps;
        this.rdt = 0;
        this.ticks = 0;

        var rendererOptions = {
            antialiasing: false,
            transparent: false,
            view: document.getElementById("gamecanvas"),
            backgroundColor: 0x000000
        };


        this.renderer = PIXI.autoDetectRenderer(game.config.CANVAS_WIDTH, game.config.CANVAS_HEIGHT, rendererOptions);
        this.stage = new PIXI.Container();
        this.stage.scale.x = game.config.CANVAS_WIDTH / game.config.GAME_WIDTH;
        this.stage.scale.y = this.stage.scale.x;

        var canvas = this.renderer.view;

        setInterval(function () {
            if (!document[hidden]) {
                window.focus();
                Howler.volume(1);
            } else {
                Howler.volume(0);
            }
        }, 1000);

        game.renderer = this.renderer;

        document.body.appendChild(this.renderer.view);

        if (game.config.RESIZE) {
            this.resize();
            window.addEventListener("resize", this.resize.bind(this));
        }

        if (game.config.FPS_METER) {
            this.meter = new FPSMeter();
        }

        this.screenflow = new WONBATS.Screenflow(game.config.SCREENS, this.stage, game.config.GAME_WIDTH, game.config.GAME_HEIGHT);
        if (game.config.DATA_RESET) {
            this.screenflow.start("data_reset");
        } else {
            this.screenflow.start("preloader");
        }

        requestAnimationFrame(this.frame.bind(this));
        console.log('%c Version ' + game.config.VERSION + " ", 'background: #222; color: #bada55');

        if (game.config.NO_LOG) {
            console.log = function () {};
        }

        if (game.config.DATA_DEBUG) {
            this.stage.addChild(debugOverlay);
        }

    }

    Main.ratio = 1;

    Main.prototype.frame = function () {
        var now = 0,
            dt = 0;

        now = Date.now();
        dt = dt + Math.min(0.1, (now - this.last) / 1000);

        this.rdt += dt;
        this.ticks += 1;

        while (this.rdt > this.step) {
            globaltick += 1;
            this.rdt -= this.step;
            this.fixedUpdate(this.step * this.slow);
        }

        this.last = now;

        this.update(dt * this.slow);

        requestAnimationFrame(this.frame.bind(this));
    };

    Main.prototype.fixedUpdate = function (fdt) {
        this.screenflow.update(fdt);
    };

    Main.prototype.update = function (dt) {

        if (game.config.FPS_METER) {
            this.meter.tickStart();
        }

        if (this.ticks % 1 === 0)
            this.renderer.render(this.stage);

        if (game.config.FPS_METER) {
            this.meter.tick();
        }

        if (game.config.DATA_DEBUG) {
            debugOverlay.update(dt);
        }
    };

    Main.prototype.resize = function () {
        Main.ratio = Math.min(window.innerWidth / game.config.GAME_WIDTH, window.innerHeight / game.config.GAME_HEIGHT);
        this.renderer.view.style.width = (game.config.GAME_WIDTH * Main.ratio) + "px";
        this.renderer.view.style.height = (game.config.GAME_HEIGHT * Main.ratio) + "px";
    };

    game.Main = Main;
}());
