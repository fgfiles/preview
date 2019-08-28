var game = game || {};
game.screens = game.screens || {};

(function () {
    'use strict';

    function Level() {
        WONBATS.Screen.call(this);
    }

    Level.prototype = Object.create(WONBATS.Screen.prototype);
    Level.prototype.constructor = Level;

    Level.prototype.enter = function (name, levelNumber) {
        WONBATS.Screen.prototype.enter.call(this, name);

        this.levelNumber = levelNumber;
        this.levelEnd = 0;
        this.levelEndTime = 0;
        this.score = 0;

        this.startDelay = 1.5;

        this.levelConfig = game.config["level" + levelNumber] || game.config.level1;

        

        this.bulletTime = new WONBATS.BulletTime();

        this.cameraLayer = new PIXI.Container();
        this.asset.addChild(this.cameraLayer);

        var rndBg = this.levelConfig.background[Math.floor(this.levelConfig.background.length * Math.random())];

        if (rndBg === "rooftop") {
            this.isRaining = true;
        } else {
            this.isRaining = this.levelConfig.rain;
        }

        var bgName = "background_" + rndBg;
        this.bg = new WONBATS.MovieClip(window[bgName], bgName);

        

        this.bg.x = -200;
        this.bg.y = -200;
        this.gameplay = this.bg.getChildByLayerName("gameplay");
        this.gameplay.name = "gameplay";
        this.addWonbyClip(this.bg, this.cameraLayer);

        this.envContainter = new PIXI.particles.ParticleContainer();
        this.cameraLayer.addChild(this.envContainter);

        this.physics = new WONBATS.Physics(0, 1200, this.gameplay);
        this.physics.setMaterials(game.config.materials, game.config.contactMaterials);
        this.physics.setCategoryBits(game.config.categoryBits);

        this.camera = new WONBATS.Camera(this.cameraLayer, [0.5, 0.645], game.config.parallax[bgName]);

        this.input = new WONBATS.Input();
        this.input.addKey("left", ["a", "arrowleft", "left", "u+0041"]);
        this.input.addKey("right", ["d", "arrowright", "right", "u+0044"]);

        this.pauseInput = new WONBATS.Input();
        this.pauseInput.addKey("left", ["a", "arrowleft", "left", "u+0041"]);
        this.pauseInput.addKey("right", ["d", "arrowright", "right", "u+0044"]);
        this.pauseInput.addKey("press", ["enter"]);
        this.pauseInput.addKey("pause", ["escape", "p", "u+001b", "u+0050"]);
        this.pauseButtonIndex = 0;
        this.pauseButtons = ["homebtn", "resumebtn"];

        this.enableKeyboard(true);

        this.entityFactory = new WONBATS.EntityFactory(this.physics, this.input, bgName);
        this.ground = this.entityFactory.create(WONBATS.EntityFactory.GROUND, game.config.GAME_WIDTH / 2, 580);
        this.groundParticles = this.entityFactory.create(WONBATS.EntityFactory.GROUND_PARTICLES, game.config.GAME_WIDTH / 2, 560);

        this.player = this.entityFactory.create(WONBATS.EntityFactory.PLAYER, game.config.GAME_WIDTH / 2, 460, WONBATS.Entity.RIGHT, this.gameplay);
        if (this.levelConfig.weapon) {
            this.player.setWeapon(this.levelConfig.weapon[0], false, this.levelConfig.weapon[1]);
            this.yana = new WONBATS.MovieClip(yana, "yana");
            this.addWonbyClip(this.yana, this.asset);
            this.startDelay = 3.5;
        }
        if (this.levelConfig.clothes) {
            this.player.setClothes(this.levelConfig.clothes);
        }
        this.player.canAttackCb = this.tryToAttack.bind(this);
        this.player.attackLandedCb = this.playerLandedAttack.bind(this);
        this.player.dieCb = this.playerDeath.bind(this);

        this.spawner = new WONBATS.Spawner(this.levelConfig, this.entityFactory, this.gameplay);

        this.createEmitters();
        globalsignal.add(this.onGlobalSignal.bind(this));

        var retroPurple = new PIXI.filters.ColorMatrixFilter();
        retroPurple.enabled = false;
        this.asset.filters = [retroPurple];

        this.goal = this.spawner.totalEnemies;

        this.lighting = new WONBATS.MovieClip(background_rooftop, "lighting");
        this.addWonbyClip(this.lighting, this.asset);

        this.createUI(levelNumber, this.goal);
        this.addButton("pausebtn", this.ui.getChildByName("pause_btn"), this.onPause.bind(this), "mouseClick", "mouseOver");

        this.addButton("homebtn", this.pauseModal.getChildByName("exit_btn"), this.onExit.bind(this), "mouseClick", "mouseOver");
        this.addButton("resumebtn", this.pauseModal.getChildByName("resume_btn"), this.onResume.bind(this), "mouseClick", "mouseOver");
        this.addButton("musicbtnon", this.pauseModal.getChildByName("music_btn").getChildByName("music_on"), this.onMusic.bind(this), "mouseClick", "mouseOver");
        this.addButton("musicbtnoff", this.pauseModal.getChildByName("music_btn").getChildByName("music_off"), this.onMusic.bind(this), "mouseClick", "mouseOver");

        this.brawlerEnemy = null;
        this.brawlerBars = [];

        this.camera.setZoom(1.4, 100, 1, 1, 5);
        this.camera.follow(this.player.view, true);

        this.newUnlock = false;

        WONBATS.soundManager.fadeTo("music_foreground", 1, 2);
        WONBATS.soundManager.fadeTo("music_background", 1, 0.5);

        this.paused = false;
        this.updateSoundButton();
    };

    Level.prototype.onMusic = function (e) {
        WONBATS.soundManager.switchMute();
        this.updateSoundButton();
    };

    Level.prototype.updateSoundButton = function () {
        var soundOn = this.pauseModal.getChildByName("music_btn").getChildByName("music_on");
        var soundOff = this.pauseModal.getChildByName("music_btn").getChildByName("music_off");
        if (WONBATS.soundManager.isMuted()) {
            soundOff.attribs.visible = true;
            soundOff.interactive = true;
            soundOn.interactive = false;
            soundOn.attribs.visible = false;
        } else {
            soundOff.interactive = false;
            soundOff.attribs.visible = false;
            soundOn.attribs.visible = true;
            soundOn.interactive = true;
        }
        localStorage.setItem("mute", JSON.stringify(WONBATS.soundManager.isMuted()));
    };

    Level.prototype.onExit = function () {
        this.pauseModal.gotoAndPlay("out");
    };

    Level.prototype.onResume = function () {
        this.pauseModal.gotoAndPlay("resume");
    };

    Level.prototype.onPause = function () {
        this.pauseModal.y = 0;
        this.pauseModal.attribs.visible = true;
        this.pauseModal.gotoAndPlay("in");
        this.paused = true;
        this.pauseButtonIndex = 1;
        this.buttons[this.pauseButtons[this.pauseButtonIndex]].target.mouseout.call(this.buttons[this.pauseButtons[this.pauseButtonIndex]]);
        this.buttons[this.pauseButtons[this.pauseButtonIndex]].target.mouseover.call(this.buttons[this.pauseButtons[this.pauseButtonIndex]]);
    };

    Level.prototype.createUI = function (lvl, enemiesQty) {
        this.ui = new WONBATS.MovieClip(ui, "ui");
        this.ui.name = "ui";
        this.addWonbyClip(this.ui, this.asset);

        this.GUI = new WONBATS.GUI(this.player, this.ui);

        if (this.GUI.container)
            this.asset.addChild(this.GUI.container);

        this.GUI.setLevelValue(lvl);
        this.GUI.setValue(enemiesQty);

        if (this.spawner.isEndless) {
            var levelSavedData = localStorage.getItem("level" + this.levelNumber);
            var score = 0;
            if (levelSavedData) {
                score = JSON.parse(levelSavedData).score;
            }
            this.GUI.setHiscoreValue(score);
        } else {
            this.GUI.hideHighscore();
        }

        this.pauseModal = new WONBATS.MovieClip(ui, "pausemodal");
        this.pauseModal.y = -1280;
        this.pauseModal.stop();
        this.pauseModal.attribs.visible = false;
        this.asset.addChild(this.pauseModal);
    };

    Level.prototype.createEmitters = function () {
        var pos = -5000;

        if (this.isRaining) {
            WONBATS.soundManager.play("rainLoop");

            this.envEmitter = new PIXI.particles.Emitter(this.gameplay, [PIXI.Texture.fromFrame("rainparticle_x")], game.config.particles.rain);
            this.envEmitter.updateSpawnPos(pos, pos);

            this.envdropEmitter = new PIXI.particles.Emitter(this.gameplay, [PIXI.Texture.fromFrame("raindropparticle_x")], game.config.particles.raindrop);
            this.envdropEmitter.updateSpawnPos(pos, pos);
        }

        this.sparksEmitter = new PIXI.particles.Emitter(this.gameplay, [PIXI.Texture.fromFrame("rainparticle_x"), PIXI.Texture.fromFrame("sparkparticle_x")], game.config.particles.sparks);
        this.sparksEmitter.updateSpawnPos(pos, pos);

        this.explosionEmitter = new PIXI.particles.Emitter(this.gameplay, [PIXI.Texture.fromFrame("floorparticle_x")], game.config.particles.explosion);
        this.explosionEmitter.updateSpawnPos(pos, pos);
    };

    Level.prototype.update = function (dt) {
        if (this.startDelay <= 0) {
            this.pauseInput.update(dt);
            if (!this.paused && !this.pauseInput.actions["pause"].isJustPressed && this.pauseInput.actions["pause"].isDown) {
                this.onPause();
            }
        }

        if (this.paused) {
            this.pauseModal.update(dt);
            var exiting = (this.pauseModal.getCurrentLabel() === "out" || this.pauseModal.getCurrentLabel() === "resume");
            if (!exiting && !this.pauseInput.actions["left"].isJustPressed && this.pauseInput.actions["left"].isDown) {
                var next = Math.clamp(this.pauseButtonIndex - 1, 0, this.pauseButtons.length - 1);
                if (next !== this.pauseButtonIndex) {
                    this.pauseButtonIndex = next;
                    for (var i = 0; i < this.pauseButtons.length; i++) {
                        if (i === next) {
                            this.buttons[this.pauseButtons[i]].target.mouseout.call(this.buttons[this.pauseButtons[i]]);
                            this.buttons[this.pauseButtons[i]].target.mouseover.call(this.buttons[this.pauseButtons[i]]);
                        } else {
                            this.buttons[this.pauseButtons[i]].target.mouseover.call(this.buttons[this.pauseButtons[i]]);
                            this.buttons[this.pauseButtons[i]].target.mouseout.call(this.buttons[this.pauseButtons[i]]);
                        }
                    }

                }
            } else if (!exiting && !this.pauseInput.actions["right"].isJustPressed && this.pauseInput.actions["right"].isDown) {
                var next = Math.clamp(this.pauseButtonIndex + 1, 0, this.pauseButtons.length - 1);
                if (next !== this.pauseButtonIndex) {
                    this.pauseButtonIndex = next;
                    for (var i = 0; i < this.pauseButtons.length; i++) {
                        if (i === next) {
                            this.buttons[this.pauseButtons[i]].target.mouseout.call(this.buttons[this.pauseButtons[i]]);
                            this.buttons[this.pauseButtons[i]].target.mouseover.call(this.buttons[this.pauseButtons[i]]);
                        } else {
                            this.buttons[this.pauseButtons[i]].target.mouseover.call(this.buttons[this.pauseButtons[i]]);
                            this.buttons[this.pauseButtons[i]].target.mouseout.call(this.buttons[this.pauseButtons[i]]);
                        }
                    }

                }
            } else if (!exiting && !this.pauseInput.actions["press"].isJustPressed && this.pauseInput.actions["press"].isDown) {
                this.buttons[this.pauseButtons[this.pauseButtonIndex]].target.mouseup.call(this.buttons[this.pauseButtons[this.pauseButtonIndex]]);
                this.buttons[this.pauseButtons[this.pauseButtonIndex]].target.mousedown.call(this.buttons[this.pauseButtons[this.pauseButtonIndex]]);
            }
            return;
        }

        if (!this.levelEnd) {
            if (this.startDelay > 0) {
                this.startDelay -= dt;
            }
            if (this.startDelay <= 0) {
                this.input.update(dt);
            }
        } else {
            this.levelEndTime -= dt;
            if (this.levelEndTime <= 0) {
                if (this.levelNumber === 9 && this.levelToGo === this.levelNumber) { //if it's last level...do something different
                    this.transitionSignal.emit(this.name, "credits", true);
                } else {
                    this.transitionSignal.emit(this.name, "exit", this.levelToGo || this.levelNumber, this.newUnlock);
                }
            }
        }

        dt = this.bulletTime.update(dt);
        this.physics.update(dt);
        this.entityFactory.update(dt);
        if (this.startDelay <= 0) {
            this.spawner.update(dt);
        }
        this.GUI.update(dt);

        for (var i = 0; i < this.brawlerBars.length; i++) {
            this.brawlerBars[i].update(dt);
            this.brawlerBars[i].y += ((250 - i * 75) - this.brawlerBars[i].y) * dt * 10;
        }
        this.camera.update(dt);
        this.sparksEmitter.update(dt);
        if (this.envEmitter) {
            this.envEmitter.update(dt);
        }
        if (this.envdropEmitter) {
            this.envdropEmitter.update(dt);
        }
        if (this.player.life > 0 && this.isRaining) {
            this.envEmitter.updateSpawnPos(-this.camera.currentPoint.x, -this.camera.currentPoint.y);
            this.envdropEmitter.updateSpawnPos(-this.camera.currentPoint.x, -this.camera.currentPoint.y);
        }
        this.explosionEmitter.update(dt);
        this.enableRangeBars();
        if (this.player.life <= 0) {
            this.retroPurpleUpdate(dt);
        }
        WONBATS.Screen.prototype.update.call(this, dt);
    };

    Level.prototype.retroPurpleUpdate = function (dt) {
        var sepia = this.asset.filters[0],
            delay = 0.01,
            sepia1 = 1, //Red
            sepia2 = 0, //Green
            sepia3 = 0.5, //Blue
            sepia4 = 0, //Red
            sepia5 = 0, //Green
            sepia6 = 0, //Blue
            sepia7 = 0.5, //Red
            sepia8 = 0, //Green
            sepia9 = 1; //Blue

        sepia.matrix[0] -= sepia1 * delay;
        sepia.matrix[0] = Math.clamp(sepia.matrix[0], sepia1, 1);
        sepia.matrix[1] -= sepia2 * delay;
        sepia.matrix[1] = Math.clamp(sepia.matrix[1], sepia2, 1);
        sepia.matrix[2] -= sepia3 * delay;
        sepia.matrix[2] = Math.clamp(sepia.matrix[2], sepia3, 1);

        sepia.matrix[5] -= sepia4 * delay;
        sepia.matrix[5] = Math.clamp(sepia.matrix[3], sepia4, 1);
        sepia.matrix[6] -= sepia5 * delay;
        sepia.matrix[6] = Math.clamp(sepia.matrix[3], sepia5, 1);
        sepia.matrix[7] -= sepia6 * delay;
        sepia.matrix[7] = Math.clamp(sepia.matrix[3], sepia6, 1);

        sepia.matrix[10] -= sepia7 * delay;
        sepia.matrix[10] = Math.clamp(sepia.matrix[3], sepia7, 1);
        sepia.matrix[11] -= sepia8 * delay;
        sepia.matrix[11] = Math.clamp(sepia.matrix[3], sepia8, 1);
        sepia.matrix[12] -= sepia9 * delay;
        sepia.matrix[12] = Math.clamp(sepia.matrix[3], sepia9, 1);
    };

    Level.prototype.onGlobalSignal = function (globalEvent, data) {
        switch (globalEvent) {
            case ge.PAUSE_RESUME:
                this.paused = false;
                this.pauseModal.attribs.visible = false;
                this.pauseModal.y = -1280;
                break;
            case ge.PAUSE_OUT:
                this.transitionSignal.emit(this.name, "exit", this.levelNumber);
                break;
            case ge.LEVEL_START:
                WONBATS.soundManager.play("levelStart");
                break;
            case ge.THUNDER:
                var lightingPosition = data.mc.toGlobal(new PIXI.Point(0, 0));
                var lx = lightingPosition.x * (game.config.GAME_WIDTH / game.config.CANVAS_WIDTH);
                if (lx > -50 && lx < 1320) {
                    WONBATS.soundManager.play("thunder01", true);
                    this.lighting.gotoAndPlay(1);
                }
                
                break;
            case ge.ENEMY_EXPLODE:
                WONBATS.soundManager.playRandom("explosion", 2);

                this.explosionEmitter.updateSpawnPos(data.x, data.y);
                this.explosionEmitter.resetPositionTracking();
                this.explosionEmitter.emit = true;
                break;
            case ge.ENEMY_DIE:
                this.GUI.updateValue(this.spawner.isEndless);
                if (!this.spawner.isEndless && this.goal === this.spawner.totalEnemiesKilled) {
                    WONBATS.soundManager.play("finalHitPunch", true);
                    this.setLevelWin();
                }
                break;
            case ge.PLAYER_HURT:
                WONBATS.soundManager.playRandom("polarHurt", 2);
                this.GUI.updateLife(data.hp);
                break;
            case ge.PLAYER_DIE:
                WONBATS.soundManager.play("finalHitAce", true);
                this.setLevelLose();
                break;
            case ge.SHAKE:
                this.camera.shake(data.intensity, data.duration);
                break;
            case ge.HIT_CONNECTED:
                WONBATS.soundManager.playRandom("hitMetalic", 2);
                this.sparksEmitter.updateSpawnPos(data.x, data.y);
                this.sparksEmitter.resetPositionTracking();
                this.sparksEmitter.emit = true;
                break;
            case ge.BULLET_TIME:
                this.bulletTime.reset(data[0], data[1], data[2], data[3], data[4]);
                break;
            case ge.YANA_END:
                this.removeWonbyClip(this.yana);
                break;
            default:
                break;
        }
    };

    Level.prototype.setLevelLose = function () {
        this.levelEnd = true;
        this.levelEndTime = 4;
        this.bulletTime.reset(0, 0.1, 1, 1, 0.05);
        this.camera.setZoom(1.5, 20, 0.3, 1, 10);

        if (this.spawner.isEndless) {
            var levelSavedData = localStorage.getItem("level" + this.levelNumber);
            var dataToSave = {
                stars: 0,
                score: this.spawner.totalEnemiesKilled,
                unlock: true
            };

            if (levelSavedData) {
                var parsedData = JSON.parse(levelSavedData);
                if (parsedData.score > dataToSave.score) {
                    dataToSave.score = parsedData.score;
                }
            }

            localStorage.setItem("level" + this.levelNumber, JSON.stringify(dataToSave));
        }
        this.GUI.hide();
    };

    Level.prototype.setLevelWin = function () {
        this.levelEnd = true;
        if (this.levelNumber === 9) { //if it's last level...do something different
            this.levelEndTime = 6;
            this.bulletTime.reset(0, 0.1, 1, 1, 0.05);
            this.camera.setZoom(1.5, 20, 1, 1, 10);
        } else {
            this.levelEndTime = 3;
            this.bulletTime.reset(0, 0.1, 1, 1, 0.05);
            this.camera.setZoom(1.5, 20, 0.3, 1, 10);
            this.GUI.hide();
        }

        var levelSavedData = localStorage.getItem("level" + this.levelNumber);
        var dataToSave = {
            stars: this.player.life,
            score: this.score,
            unlock: true,
            noMiss: this.player.noMiss
        };

        if (levelSavedData) {
            var parsedData = JSON.parse(levelSavedData);

            if (parsedData.stars > dataToSave.stars) {
                dataToSave.stars = parsedData.stars;
            }

            if (parsedData.score > dataToSave.score) {
                dataToSave.score = parsedData.score;
            }

            if (parsedData.noMiss && !dataToSave.noMiss) {
                dataToSave.noMiss = parsedData.noMiss;
            }
        }

        localStorage.setItem("level" + this.levelNumber, JSON.stringify(dataToSave));
        this.levelToGo = this.levelNumber;

        var nextLevelData = localStorage.getItem("level" + (this.levelNumber + 1));

        if (!nextLevelData) {
            localStorage.setItem("level" + (this.levelNumber + 1), JSON.stringify({
                stars: 0,
                score: 0,
                unlock: true,
                noMiss: false
            }));

            this.levelToGo = Math.min(this.levelNumber + 1, 9);
            this.newUnlock = true;
            localStorage.setItem("lastLevel", this.levelToGo);
        }
    };

    Level.prototype.tryToAttack = function () {

        var targets = [],
            range = this.player.attackRange[0],
            items = this.entityFactory.getAllAlive(EntityFactory.ITEMS_CLASS),
            itemsLeft = [],
            itemsRight = [];
        for (var i = 0; i < items.length; i++) {
            var distanceY = Math.abs(this.player.body.position[1] - items[i].body.position[1]),
                distance = this.player.getDiff(items[i]),
                goodYDistance = (distanceY < 100);
            if ((items[i].body.position[0] > this.player.body.position[0]) && goodYDistance) { //items at right
                itemsRight.push({
                    target: items[i],
                    distance: Math.abs(distance + (items[i].width / 2))
                });
            } else if ((items[i].body.position[0] < this.player.body.position[0]) && goodYDistance) { //items at left
                itemsLeft.push({
                    target: items[i],
                    distance: Math.abs(distance - (items[i].width / 2))
                });
            }
        }

        if (this.player.lookDir === Entity.LEFT) {
            itemsLeft = WONBATS.sortByProperty(itemsLeft, "distance");
            for (var i = 0; i < this.spawner.left.length; i++) {
                targets.push({
                    target: this.spawner.left[i],
                    distance: Math.abs(this.player.getDiff(this.spawner.left[i]) - (this.spawner.left[i].width / 2))
                });
            }
            for (var i = 0; i < itemsLeft.length; i++) {
                targets.push({
                    target: itemsLeft[i].target,
                    distance: itemsLeft[i].distance
                });
            }
        } else if (this.player.lookDir === Entity.RIGHT) {
            itemsRight = WONBATS.sortByProperty(itemsRight, "distance");
            for (var i = 0; i < this.spawner.right.length; i++) {
                targets.push({
                    target: this.spawner.right[i],
                    distance: Math.abs(this.player.getDiff(this.spawner.right[i]) + (this.spawner.right[i].width / 2))
                });
            }
            for (var i = 0; i < itemsRight.length; i++) {
                targets.push({
                    target: itemsRight[i].target,
                    distance: itemsRight[i].distance
                });
            }
        }
        targets = WONBATS.sortByProperty(targets, "distance");
        if (targets.length > 0) {
            if (targets[0].distance < range) {
                if (targets[0].distance > 250) {
                    WONBATS.soundManager.play("polarDashMed", true);
                } else {
                    WONBATS.soundManager.play("polarDashShort", true);
                }
                return targets;
            }
        }
        return undefined;
    };

    Level.prototype.enableRangeBars = function () {
        var targets = [],
            items = this.entityFactory.getAllAlive(EntityFactory.ITEMS_CLASS),
            range = this.player.attackRange[0],
            leftBarActive = false,
            rightBarActive = false;
        for (var i = 0; i < items.length; i++) {
            var distanceY = Math.abs(this.player.body.position[1] - items[i].body.position[1]),
                distance = this.player.getDiff(items[i]),
                goodYDistance = (distanceY < 100);

            if ((items[i].body.position[0] < this.player.body.position[0]) && goodYDistance) {
                targets.push({
                    target: items[i],
                    distance: Math.abs(distance - (items[i].width / 2)) //LEFT
                });
            } else if ((items[i].body.position[0] > this.player.body.position[0]) && goodYDistance) {
                targets.push({
                    target: items[i],
                    distance: Math.abs(distance + (items[i].width / 2)) //RIGHT
                });
            }
        }
        for (var i = 0; i < this.spawner.left.length; i++) {
            targets.push({
                target: this.spawner.left[i],
                distance: Math.abs(this.player.getDiff(this.spawner.left[i]) - (this.spawner.left[i].width / 2))
            });
        }
        for (var i = 0; i < this.spawner.right.length; i++) {
            targets.push({
                target: this.spawner.right[i],
                distance: Math.abs(this.player.getDiff(this.spawner.right[i]) + (this.spawner.right[i].width / 2))
            });
        }
        targets = WONBATS.sortByProperty(targets, "distance");
        for (var i = 0; i < targets.length; i++) {
            if (targets[i].target.body.position[0] > this.player.body.position[0] && (targets[i].distance < range)) {
                rightBarActive = true;
                if (targets[i].target.inUI) {
                    targets[i].target.inUI();
                }
            } else if (targets[i].target.body.position[0] < this.player.body.position[0] && (targets[i].distance < range)) {
                leftBarActive = true;
                if (targets[i].target.inUI) {
                    targets[i].target.inUI();
                }

            } else {
                if (targets[i].target.outUI) {
                    targets[i].target.outUI();
                }
            }
        }
        this.GUI.enableRightBar(rightBarActive);
        this.GUI.enableLeftBar(leftBarActive);
    };

    Level.prototype.playerLandedAttack = function (player, enemy) {

        if (this.brawlerEnemy) {
            var bar = this.brawlerBars.shift();
            this.ui.getChildByName("robotui").removeChild(bar);

            if (this.brawlerBars[0]) {
                this.brawlerBars[0].getChildByName("bar").gotoAndPlay("on");
            }
        }

        if (enemy.isBrawler && enemy.isBrawler()) {
            var fightZoom = 1.2;
            if (enemy.life.length <= 0) {
                this.camera.setZoom(1, 10);
                if (this.spawner.isEndless || (this.spawner.totalEnemiesKilled < this.spawner.totalEnemies) || WONBATS.isType(enemy, [WONBATS.BearBot3])) {
                    this.ui.gotoAndPlay("brawler_out");
                }
                this.brawlerEnemy = null;
            } else if (this.camera.zoom !== fightZoom) {
                this.ui.gotoAndPlay("brawler_in");
                this.camera.setZoom(fightZoom, 10);

                this.enterBrawlerMode(player, enemy);
                this.brawlerEnemy = enemy;
            }
        }
    };

    Level.prototype.enterBrawlerMode = function (player, brawler) {
        this.brawlerBars = [];
        var side = brawler.lookDir;

        for (var i = 0; i < brawler.life.length; i++) {
            var bar = new WONBATS.MovieClip(ui, "brawlerbar");
            bar.x = game.config.GAME_WIDTH / 2;
            bar.y = -i * 75;

            bar.gotoAndStop(side === 1 ? "left" : "right");

            if (brawler.life[i] === Entity.SIDE_CHANGE) {
                side *= -1;
            }
            this.ui.getChildByName("robotui").addChild(bar);
            this.brawlerBars.push(bar);
        }

        this.brawlerBars[0].getChildByName("bar").gotoAndPlay("on");
    };

    Level.prototype.playerDeath = function () {
        this.camera.follow(null);
        this.camera.setZoom(1.3, 20, 0.3, 1, 10);
        this.asset.filters[0].enabled = true;
    };

    Level.prototype.onKeyDown = function (e) {
        
        this.input.onKeyDown(e);
        this.pauseInput.onKeyDown(e);
        WONBATS.Screen.prototype.onKeyDown.call(this, e);
    };

    Level.prototype.onKeyUp = function (e) {
        
        this.input.onKeyUp(e);
        this.pauseInput.onKeyUp(e);
        WONBATS.Screen.prototype.onKeyUp.call(this, e);
    };

    Level.prototype.exit = function () {
        globalsignal.clear();

        if (this.isRaining) {
            WONBATS.soundManager.stop("rainLoop");
        }

        if (this.yana) {
            this.yana.destroy();
        }
        this.yana = null;
        this.levelConfig = null;
        this.asset.filters = [];
        this.cameraLayer = null;
        this.bg = null;
        this.envContainter = null;
        this.physics.dispose();
        this.physics = null;
        this.camera.dispose();
        this.camera = null;
        this.input.dispose();
        this.input = null;
        this.pauseInput.dispose();
        this.pauseInput = null;
        this.pauseButtons = WONBATS.splice(this.pauseButtons);
        this.pauseButtons = null;
        this.entityFactory.dispose();
        this.entityFactory = null;
        this.spawner.dispose();
        this.spawner = null;
        this.GUI.dispose();
        this.GUI = null;
        this.ui = null;
        this.bulletTime.dispose();
        this.bulletTime = null;
        if (this.envEmitter) {
            this.envEmitter.destroy();
        }
        this.envEmitter = null;
        if (this.envdropEmitter) {
            this.envdropEmitter.destroy();
        }
        this.envdropEmitter = null;
        this.sparksEmitter.destroy();
        this.sparksEmitter = null;
        this.explosionEmitter.destroy();
        this.explosionEmitter = null;
        this.ground = null;
        this.groundParticles = null;
        WONBATS.Screen.prototype.exit.call(this);
    };

    game.screens.Level = Level;
}());
