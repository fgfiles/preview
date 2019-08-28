var game = game || {};
game.screens = game.screens || {};

(function () {
    'use strict';

    function Level() {
        WONBATS.Screen.call(this);
    }

    Level.prototype = Object.create(WONBATS.Screen.prototype);
    Level.prototype.constructor = Level;

    Level.playerQty = 1;

    Level.prototype.enter = function (name, levelNumber, prevLevelAsset, prevPlayersData, cameraY) {
        
        WONBATS.Screen.prototype.enter.call(this, name);

        this.levelNumber = levelNumber || 1;

        var levelData = game.levels[levelNumber - 1];

        this.bulletTime = new WONBATS.BulletTime();

        this.container = new PIXI.Container();
        this.asset.addChild(this.container);

        
        EntityFactory.playerQty = Level.playerQty;
        this.levelAsset = new WONBATS.MovieClip(window[levelData.level_package], levelData.level_asset);
        this.addWonbyClip(this.levelAsset, this.container);

        if (this.asset.parent.getChildAt(0).name === "background") {
            this.background = this.asset.parent.getChildByName("background");
            this.foreground = this.asset.parent.getChildByName("foreground");
            this.asset.parent.swapChildren(this.asset, this.foreground);
        } else {
            this.background = new WONBATS.MovieClip(window[levelData.background_package], levelData.background_asset);
            this.background.name = "background";
            this.asset.parent.addChildAt(this.background, 0);

            this.foreground = new WONBATS.MovieClip(window[levelData.background_package], levelData.foreground_asset);
            this.foreground.name = "foreground";
            this.asset.parent.addChildAt(this.foreground, 2);
        }

        this.gameplayContainer = this.levelAsset.getChildByLayerName("gameplay");
        this.logicContainer = this.levelAsset.getChildByLayerName("logic");
        this.logicContainer.attribs.visible = false;
        this.playersData = [];
        for (var i = 0; i < Level.playerQty; i++) {
            this.playersData.push({
                spawnPos: [0, 0],
                ref: undefined
            });
        }

        this.levelDistance = 1600;

        if (prevLevelAsset) {
            this.container.x = this.levelDistance;
            this.prevLevelAsset = prevLevelAsset;
            this.prevLevelAsset.x = -this.levelDistance;
            this.container.addChild(this.prevLevelAsset);
            this.addWonbyClip(this.prevLevelAsset, this.container, 0);
            for (var i in this.playersData) {
                var asset = i === "0" ? "peppermint" : "starchy";
                asset = (i === "0" && Level.playerQty === 2) ? "starchy" : "peppermint";
                this.playersData[i].cinematic = {
                    asset: new WONBATS.MovieClip(window[asset], asset),
                    initialPos: [prevPlayersData[i][0], prevPlayersData[i][1]],
                    finalPos: [0, 0]
                }

                this.playersData[i].cinematic.asset.scale.x = -1;
                this.addWonbyClip(this.playersData[i].cinematic.asset, this.gameplayContainer);
            }
        } else {
            this.moveBackground(this.levelDistance * ((this.levelNumber - 1) % 7));
        }

        physics.container = this.gameplayContainer;

        this.enemiesQty = 0;

        this.parseLevel(this.logicContainer);

        this.enableKeyboard(true);
        globalsignal.add(this.onGlobalSignal.bind(this));

        this.t = 0;
        this.mt = 2;

        entityFactory.callAll(EntityFactory.PLAYERS, "beforeTransition");
        entityFactory.callAll(EntityFactory.ENEMIES, "beforeTransition");

        if (this.isLastLevel()) {
            this.portals = new WONBATS.MovieClip(cinnamon, "cinnamontransitionlastlevel");
            soundManager.fadeTo("music_ingame01", 0, 1);
            soundManager.fadeTo("music_ingame02", 0, 1);
        } else {
            this.portals = new WONBATS.MovieClip(cinnamon, "cinnamontransition");
        }
        this.addWonbyClip(this.portals, this.asset.parent);

        this.initLevel = true;

        if (prevLevelAsset) {
            this.initLevel = false;
            this.portalOff = new WONBATS.MovieClip(cinnamon, "portaloff");
            this.addWonbyClip(this.portalOff, this.asset.parent);
            this.portals.x = this.levelDistance;
            this.portals.stop();
        } else {
            var newWorldPortal = new WONBATS.MovieClip(cinnamon, "cinnamonportalend");
            this.addWonbyClip(newWorldPortal, this.asset.parent);
        }

        this.parallaxLayers = [this.background.getChildAt(0), this.background.getChildAt(1), this.background.getChildAt(2), this.background.getChildAt(3), this.container, this.foreground];
        this.parallaxDisplacement = [0, 0.25, 0.5, 0.75, 1, 1.25];
        this.cameraY = cameraY !== undefined ? cameraY : 0;

        this.emitterManager = new EmitterManager(this.gameplayContainer, levelData.fire, levelData.mist);
        if (levelData.fire) {
            this.emitterManager.onGlobalSignal(ge.VOLCANO, {
                x: 400,
                y: 600
            });
        }

        if (levelData.mist) {
            this.emitterManager.onGlobalSignal(ge.MIST, {
                x: 400,
                y: 600,
                dt: 10
            });
        }

        this.updateVerticalParallax(this.parallaxLayers, this.parallaxDisplacement, this.cameraY);

        this.shockWaveFilter = new PIXI.filters.ShockwaveFilter();
        this.shockWaveFilter.time = 1;
        this.container.filters = [this.shockWaveFilter];

        this.levelEndDelay = 0;
        this.levelEnded = false;

        if (Level.playerQty === 2) {
            this.lives = 6;
        } else {
            this.lives = 3;
        }

        this.createUI();

        this.addButton("pausebtn", this.ui.getChildByName("pause_btn"), this.onPause.bind(this), "btn_click", "btn_rollover");

        this.addButton("homebtn", this.pauseModal.getChildByName("exit_btn"), this.onExit.bind(this), "btn_click", "btn_rollover");
        this.addButton("resumebtn", this.pauseModal.getChildByName("resume_btn"), this.onResume.bind(this), "btn_click", "btn_rollover");
        this.addButton("musicbtnon", this.pauseModal.getChildByName("music_btn").getChildByName("music_on"), this.onMusic.bind(this), "btn_click", "btn_rollover");
        this.addButton("musicbtnoff", this.pauseModal.getChildByName("music_btn").getChildByName("music_off"), this.onMusic.bind(this), "btn_click", "btn_rollover");

        this.updateSoundButton();

        this.paused = false;

        if (levelData.fire) {
            soundManager.fadeTo("ambFire", 1, 2);
        }

        this.cinematicPlaying = true;
    };

    Level.prototype.onBackKey = function () {
        if (this.paused && this.pauseModal.multiplier === 0) {
            this.onResume();
        }

        if (!this.paused) {
            this.onPause();
        }
    };

    Level.prototype.onAcceptKey = function () {
        if (this.paused && this.pauseModal.multiplier === 0) {
            this.onExit()
        }
    };

    Level.prototype.onMuteKey = function () {
        this.onMusic();
    };

    Level.prototype.onMusic = function (e) {
        soundManager.switchMute();
        this.updateSoundButton();
    };

    Level.prototype.updateSoundButton = function () {
        var soundOn = this.pauseModal.getChildByName("music_btn").getChildByName("music_on");
        var soundOff = this.pauseModal.getChildByName("music_btn").getChildByName("music_off");
        if (soundManager.isMuted()) {
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
        localStorage.setItem("mute", JSON.stringify(soundManager.isMuted()));
    };

    Level.prototype.onExit = function () {
        soundManager.fadeTo("music_ingame01", 1, 2);
        if (this.isLastLevel()) {
            soundManager.fadeTo("music_boss", 0, 2);
        } else {
            soundManager.fadeTo("music_ingame02", 0, 2);
        }
        if (this.emitterManager.isFire) {
            soundManager.fadeTo("ambFire", 0, 2);
        }
        this.pauseModal.gotoAndPlay("out");
    };

    Level.prototype.onResume = function () {
        this.pauseModal.gotoAndPlay("resume");

        if (this.isLastLevel()) {
            soundManager.fadeTo("music_boss", 1, 2);
        } else {
            soundManager.fadeTo("music_ingame01", 1, 2);
            soundManager.fadeTo("music_ingame02", 1, 2);
        }
        if (this.emitterManager.isFire) {
            soundManager.fadeTo("ambFire", 1, 2);
        }
    };

    Level.prototype.onPause = function () {
        globalsignal.emit(ge.ON_PAUSE);
        if (this.isLastLevel()) {
            soundManager.fadeTo("music_boss", 0, 2);
        } else {
            soundManager.fadeTo("music_ingame01", 0, 2);
            soundManager.fadeTo("music_ingame02", 0, 2);
        }
        if (this.emitterManager.isFire) {
            soundManager.fadeTo("ambFire", 0, 2);
        }
        this.pauseModal.y = 0;
        this.pauseModal.attribs.visible = true;
        this.pauseModal.gotoAndPlay("in");
        this.paused = true;
        this.pauseButtonIndex = 1;
        this.buttons[this.pauseButtons[this.pauseButtonIndex]].target.mouseout.call(this.buttons[this.pauseButtons[this.pauseButtonIndex]]);
        this.buttons[this.pauseButtons[this.pauseButtonIndex]].target.mouseover.call(this.buttons[this.pauseButtons[this.pauseButtonIndex]]);

        var tutorial = this.pauseModal.getChildByName("tutorial");
        tutorial.gotoAndStop(Level.playerQty === 1 ? "oneplayer" : "twoplayer");
    };

    Level.prototype.createUI = function (lvl, enemiesQty) {
        this.ui = new WONBATS.MovieClip(ui, "ui");
        this.ui.name = "ui";
        this.addWonbyClip(this.ui, this.asset.parent);
        this.ui.stop();

        var actualLives = (Level.playerQty === 1) ? 3 : 6;
        for (var i = 1; i < 7; i++) {
            if (i > actualLives) {
                var candle = this.ui.getChildByName("lives").getChildByName("candle_" + i);
                candle.attribs.visible = false;
            }
        }

        this.pauseModal = new WONBATS.MovieClip(ui, "pausemodal");
        this.pauseModal.y = -1280;
        this.pauseModal.stop();
        this.pauseModal.attribs.visible = false;
        this.asset.parent.addChild(this.pauseModal);
        this.pauseButtonIndex = 0;
        this.pauseButtons = ["homebtn", "resumebtn"];
    };

    Level.prototype.onPlayersDie = function () {
        if (!this.cinematicPlaying) {
            this.lives--;
        }
        if (this.lives > -1) {
            var candle = this.ui.getChildByName("lives").getChildByName("candle_" + (this.lives + 1));
            candle.gotoAndPlay("off");
            return true;
        }
        return false;
    };

    Level.prototype.parseLevel = function (container) {
        for (var i = 0; i < container.layers.length; i++) {
            var obj = container.layers[i];
            var name = obj.classname.toLowerCase(),
                position;
            if (obj.parent !== this.logicContainer) {
                position = new PIXI.Point(obj.x, obj.y);
                position = this.logicContainer.toLocal(position, obj.parent);
                obj.x = position.x;
                obj.y = position.y;
            }
            switch (name) {
                case "platform":
                    entityFactory.create(EntityFactory.FLOOR, {
                        x: obj.x,
                        y: obj.y,
                        width: obj.scale.x * EntityFactory.BODY_SIZE,
                        height: obj.scale.y * EntityFactory.BODY_SIZE
                    });
                    break;
                case "bumper_rect":
                    entityFactory.create(EntityFactory.BUMPER_RECT, {
                        x: obj.x,
                        y: obj.y,
                        width: obj.scale.x * EntityFactory.BODY_SIZE,
                        height: obj.scale.y * EntityFactory.BODY_SIZE
                    });
                    break;
                case "bumper_circle":
                    entityFactory.create(EntityFactory.BUMPER_CIRCLE, {
                        x: obj.x,
                        y: obj.y,
                        radius: (obj.scale.x * EntityFactory.BODY_SIZE / 2)
                    });
                    break;
                case "kill":
                    entityFactory.create(EntityFactory.KILL, {
                        x: obj.x,
                        y: obj.y,
                        width: obj.scale.x * EntityFactory.BODY_SIZE,
                        height: obj.scale.y * EntityFactory.BODY_SIZE
                    });
                    break;
                case "water":
                    entityFactory.create(EntityFactory.WATER, {
                        x: obj.x,
                        y: obj.y,
                        width: obj.scale.x * EntityFactory.BODY_SIZE,
                        height: obj.scale.y * EntityFactory.BODY_SIZE
                    });
                    break;
                case "player1":
                    var player = entityFactory.create(EntityFactory.PLAYER_1, {
                        x: obj.x,
                        y: obj.y,
                        container: this.gameplayContainer
                    });
                    if (!this.playersData[0].ref) {
                        this.playersData[0].ref = player;
                        this.playersData[0].spawnPos[0] = obj.x;
                        this.playersData[0].spawnPos[1] = obj.y;
                        if (this.prevLevelAsset) {
                            this.playersData[0].cinematic.finalPos[0] = obj.x + player.movieclip.x;
                            this.playersData[0].cinematic.finalPos[1] = obj.y + player.movieclip.y;
                            player.view.visible = false;
                        }
                    }

                    break;
                case "player2":
                    if (Level.playerQty < 2) {
                        break;
                    }
                    var player = entityFactory.create(EntityFactory.PLAYER_2, {
                        x: obj.x,
                        y: obj.y,
                        container: this.gameplayContainer
                    });

                    if (!this.playersData[1].ref) {
                        this.playersData[1].ref = player;
                        this.playersData[1].spawnPos[0] = obj.x;
                        this.playersData[1].spawnPos[1] = obj.y;
                        if (this.prevLevelAsset) {
                            this.playersData[1].cinematic.finalPos[0] = obj.x + player.movieclip.x;
                            this.playersData[1].cinematic.finalPos[1] = obj.y + player.movieclip.y;
                            player.view.visible = false;
                        }
                    }

                    break;
                case "boss":
                    entityFactory.create(EntityFactory.CINNAMON_BOSS, {
                        x: obj.x,
                        y: obj.y,
                        container: this.gameplayContainer
                    });
                    this.enemiesQty++;
                    break;
                case "flyer":
                    entityFactory.create(EntityFactory.FLYER, {
                        x: obj.x,
                        y: obj.y,
                        container: this.gameplayContainer
                    });
                    this.enemiesQty++;
                    break;
                case "flyer_demon":
                    entityFactory.create(EntityFactory.FLYER_DEMON, {
                        x: obj.x,
                        y: obj.y,
                        container: this.gameplayContainer
                    });
                    this.enemiesQty++;
                    break;
                case "launcher":
                    entityFactory.create(EntityFactory.SHOOTER_DEMON, {
                        x: obj.x,
                        y: obj.y,
                        container: this.gameplayContainer
                    });
                    this.enemiesQty++;
                    break;
                case "walker":
                    entityFactory.create(EntityFactory.WALKER, {
                        x: obj.x,
                        y: obj.y,
                        container: this.gameplayContainer
                    });
                    this.enemiesQty++;
                    break;
                case "walker_helmet":
                    entityFactory.create(EntityFactory.WALKER_HELMET, {
                        x: obj.x,
                        y: obj.y,
                        container: this.gameplayContainer
                    });
                    this.enemiesQty++;
                    break;
                case "demon_walker":
                    entityFactory.create(EntityFactory.GROUND_DEMON, {
                        x: obj.x,
                        y: obj.y,
                        container: this.gameplayContainer
                    });
                    this.enemiesQty++;
                    break;
                case "demon_walker_helmet":
                    entityFactory.create(EntityFactory.GROUND_DEMON_HELMET, {
                        x: obj.x,
                        y: obj.y,
                        container: this.gameplayContainer
                    });
                    this.enemiesQty++;
                    break;
                case "platform_compound_1":
                case "platform_compound_2":
                case "platform_compound_3":
                case "platform_compound_4":
                case "platform_compound_small_1":
                case "platform_compound_large_1":
                case "platform_ground_compound_1":
                case "platform_ground_compound_2":
                    this.parseLevel(obj);
                    break;
            }
        }
    }

    Level.prototype.update = function (dt) {
        if (this.paused) {
            this.pauseModal.update(dt);
            return;
        }

        dt = this.bulletTime.update(dt);
        this.background.update(dt);
        this.foreground.update(dt);

        if (!this.prevLevelAsset) {
            this.emitterManager.update(dt);
        }

        if (this.levelEnded) {
            this.levelEndDelay -= dt;
            if (this.levelEndDelay <= 0) {
                this.levelEnded = false;

                if (this.isLastLevel()) {
                    this.enableInput(false);
                    this.transitionSignal.emit(this.name, "exit", this.levelNumber, true);
                    this.removeBackground();
                    soundManager.fadeTo("music_ingame01", 1, 2);
                } else if (this.isNextLevelANewWorld()) {
                    this.gotoNextWorld();
                } else {
                    this.portals.gotoAndPlay("off_start");
                }
            }
        }

        if (this.prevLevelAsset && this.initLevel) {
            this.t += dt;
            this.t = Math.min(this.mt, this.t);

            var containerX = this.container.x;

            this.container.x = Math.easeInOutSine(this.t, this.levelDistance, -this.levelDistance, this.mt);
            for (var i in this.playersData) {
                var playerCinematicData = this.playersData[i].cinematic;
                playerCinematicData.asset.x = Math.linearTween(this.t, (playerCinematicData.initialPos[0] - this.levelDistance), playerCinematicData.finalPos[0] - (playerCinematicData.initialPos[0] - this.levelDistance), this.mt);
                playerCinematicData.asset.y = Math.linearTween(this.t, playerCinematicData.initialPos[1], playerCinematicData.finalPos[1] - playerCinematicData.initialPos[1], this.mt) - Math.sin((this.t / this.mt) * Math.PI) * 300;
            }

            this.cameraY += (playerCinematicData.asset.y - this.cameraY) * dt * 10;

            this.portalOff.x -= containerX - this.container.x;
            this.portals.x -= containerX - this.container.x;

            this.moveBackground(containerX - this.container.x);
            this.moveForeground(containerX - this.container.x);

            if (this.t === this.mt) {
                this.prevLevelAsset.destroy();
                this.prevLevelAsset = null;

                for (var i in this.playersData) {
                    var playerCinematicData = this.playersData[i].cinematic;
                    playerCinematicData.asset.destroy();
                    this.playersData[i].ref.view.visible = true;
                }
            }
        } else if (this.prevLevelAsset) {
            for (var i in this.playersData) {
                var playerCinematicData = this.playersData[i].cinematic;
                playerCinematicData.asset.x = Math.linearTween(this.t, (playerCinematicData.initialPos[0] - this.levelDistance), playerCinematicData.finalPos[0] - (playerCinematicData.initialPos[0] - this.levelDistance), this.mt);
                playerCinematicData.asset.y = Math.linearTween(this.t, playerCinematicData.initialPos[1], playerCinematicData.finalPos[1] - playerCinematicData.initialPos[1], this.mt) - Math.sin((this.t / this.mt) * Math.PI) * 300;
            }
        } else if (this.playersData[0] && this.playersData[0].ref) {
            var p1 = this.playersData[0].ref.view.y + this.playersData[0].ref.movieclip.y;
            var p2 = p1;

            if (this.playersData[1]) {
                p2 = this.playersData[1].ref.view.y + this.playersData[1].ref.movieclip.y
            }

            var pf = p1 + (p2 - p1) / 2;

            this.cameraY += (pf - this.cameraY) * dt * 5;
        }

        this.updateVerticalParallax(this.parallaxLayers, this.parallaxDisplacement, this.cameraY);

        physics.update(dt);
        entityFactory.update(dt);
        if (this.shockWaveFilter.time < 1) {
            this.shockWaveFilter.time += dt;
        }
        WONBATS.Screen.prototype.update.call(this, dt);
    };

    Level.prototype.updateVerticalParallax = function (layers, displacements, y) {
        for (var i = 0; i < layers.length; i++) {
            var layer = layers[i];
            var ratio = Math.clamp((300 - y) / 600, -0.33, 0.33);
            layer.y = ratio * displacements[i] * 100;
        }
    };

    Level.prototype.moveBackground = function (distance) {
        for (var i = 0; i < this.background.children.length; i++) {
            var layer = this.background.children[i];
            layer.x -= distance * (i / (this.background.children.length + 1));

            for (var j = 0; j < layer.children.length; j++) {
                var tile = layer.children[j];
                var tileWidth = 800;
                if (tile.getChildByName("size")) {
                    tileWidth = tile.getChildByName("size").scale.x * 100;
                }
                var tilePosition = tile.x + layer.x;
                if (tilePosition < -tileWidth) {
                    tile.x += tileWidth * layer.children.length;
                }
            }
        }
    }

    Level.prototype.moveForeground = function (distance) {
        var layer = this.foreground;
        layer.x -= distance * 1.5;

        for (var j = 0; j < layer.children.length; j++) {
            var tile = layer.children[j];
            var tileWidth = tile.getChildByName("size").scale.x * 100;
            var tilePosition = tile.x + layer.x;
            if (tilePosition < -tileWidth) {
                tile.x += tileWidth * layer.children.length;
            }
        }
    }

    Level.prototype.onGlobalSignal = function (globalEvent, data) {
        switch (globalEvent) {
            case ge.GAMEOVER_OUT:
                soundManager.fadeTo("music_ingame01", 1, 2);
                this.removeBackground();
                this.transitionSignal.emit(this.name, "exit", this.levelNumber, true);
                entityFactory.clearInput();
                break;
            case ge.GAMEOVER_IN:
                this.enableInput(false);
                this.ui.gotoAndPlay("out");
                soundManager.play("gameover");
                soundManager.fadeTo("music_ingame01", 0, 0.5);
                if (this.isLastLevel()) {
                    soundManager.fadeTo("music_boss", 0, 0.5);
                } else {
                    soundManager.fadeTo("music_ingame02", 0, 0.5);
                }
                if (this.emitterManager.isFire) {
                    soundManager.fadeTo("ambFire", 0, 0.5);
                }
                break;
            case ge.PAUSE_RESUME:
                this.paused = false;
                this.pauseModal.attribs.visible = false;
                this.pauseModal.y = -1280;
                break;
            case ge.PAUSE_OUT:
                this.transitionSignal.emit(this.name, "exit", this.levelNumber, true);
                this.removeBackground();
                entityFactory.clearInput();
                break;
            case ge.PORTALS_OFF_END:
                this.portals.gotoAndPlay("idle");
                this.portals.x = this.levelDistance;
                this.initLevel = true;

                break;
            case ge.PORTALS_OFF_MID:
                break;
            case ge.PORTALS_OFF:
                this.jumpLevel();
                break;
            case ge.ENEMY_DIE:
                this.enemiesQty--;
                if (this.enemiesQty === 0) {
                    this.bulletTime.reset(0, 0.3, 1, 1, 1);
                    this.levelEnded = true;
                    this.levelEndDelay = 1.5;
                    this.ui.gotoAndPlay("out");
                    this.emitterManager.stopEmitters(ge.VOLCANO);
                    this.emitterManager.stopEmitters(ge.MIST);
                }
                break;
            case ge.PLAYER_DIE:
                var position = {
                    x: 0,
                    y: 0
                };

                var canRespawn = this.onPlayersDie();

                if (canRespawn) {
                    if (data === EntityFactory.PLAYER_1) {
                        position.x = this.playersData[0].spawnPos[0];
                        position.y = this.playersData[0].spawnPos[1];
                    } else if (data === EntityFactory.PLAYER_2) {
                        position.x = this.playersData[1].spawnPos[0];
                        position.y = this.playersData[1].spawnPos[1];
                    }
                    var e = entityFactory.create(data, {
                        x: position.x,
                        y: position.y,
                        container: this.gameplayContainer
                    });

                    e.respawn();
                } else if (!this.isGameOver) {
                    var gotoGameOver = true;
                    if (this.playersData[1] && (!this.playersData[0].ref.kill || !this.playersData[1].ref.kill)) {
                        gotoGameOver = false;
                    }

                    if (gotoGameOver) {
                        this.isGameOver = true;
                        var gameovermodal = new WONBATS.MovieClip(ui, "gameover");
                        this.addWonbyClip(gameovermodal, this.asset.parent);
                        globalsignal.emit(ge.GAMEOVER_IN);
                    }
                }
                break;
            case ge.CINNAMON_GONE:
                entityFactory.callAll(EntityFactory.PLAYERS, "afterTransition");
                entityFactory.callAll(EntityFactory.ENEMIES, "afterTransition");
                this.cinematicPlaying = false;
                if (this.isLastLevel()) {
                    soundManager.play("music_boss");
                    soundManager.fadeTo("music_boss", 1, 1);
                }
                this.showTutorial();
                break;
            case ge.CINNAMON_CASTS_BALLOONS:
                entityFactory.callAll(EntityFactory.ENEMIES, "castBalloons");
                this.ui.gotoAndPlay("in");
                break;
            case ge.SHOCKWAVE:
                this.shockWaveFilter.center.x = (game.GAME_WIDTH / 2);
                this.shockWaveFilter.center.y = (game.GAME_HEIGHT / 2);
                this.shockWaveFilter.time = 0;
                break;
            case ge.CREATE_BODY_PARTS:
                var parts = [];
                for (var i = 0; i < data.length; i++) {
                    var mc = data[i];
                    var globalPos = mc.toGlobal(new PIXI.Point());
                    globalPos = this.gameplayContainer.toLocal(globalPos);
                    var entity = entityFactory.create(EntityFactory.BODY_PART, {
                        x: globalPos.x,
                        y: globalPos.y,
                        json: mc.json,
                        classname: mc.classname,
                        container: this.gameplayContainer
                    });
                    if (entity) {
                        parts.push(entity);
                    }
                }
                this.bodypartsExplosion(parts, 400, 600, -90, 15);
                break;
            case ge.SOUND_STEP:
                soundManager.playRandom("mentitaFootsteps", 7);
                break;

            case ge.SOUND_BREAK:
                soundManager.play("mentitaBreak", true);
                break;
            case ge.SPLASH:
                if (!this.emitterManager.isFire) {
                    soundManager.playRandom("hitWater", 7); //TODO: make variations to avoid weird repetition
                } else {
                    soundManager.play("hitFire"); //TODO: make variations to avoid weird repetition
                }
                break;
            case ge.CINNAMON_DEFEATED:
                this.ui.gotoAndPlay("out");
                this.cinematicPlaying = true;
                soundManager.fadeTo("music_boss", 0, 1);
                break;
            case ge.CINNAMON_REBORN:
                globalsignal.emit(ge.SHOCKWAVE);
                this.bulletTime.reset(0, 0.1, 2, 1, 1);
                break;
            case ge.CINNAMON_CLEAR:
                var door = this.background.getChildByName("layer3");
                door = door.getChildByName("door");
                door.gotoAndPlay("open");
                this.ui.gotoAndPlay("flash");
                break;
            case ge.CREDITS:
                if (this.emitterManager.isFire) {
                    soundManager.fadeTo("ambFire", 0, 1);
                }
                soundManager.fadeTo("music_ingame01", 1, 1);
                this.enableInput(false);
                this.transitionSignal.emit(this.name, "credits", this.levelNumber, true);
                this.removeBackground();
                entityFactory.clearInput();
                break;
            default:
                break;
        }
    };

    Level.prototype.bodypartsExplosion = function (parts, minSpeed, maxSpeed, minAngle, maxAngle) {
        var count = parts.length,
            minSpeed = minSpeed,
            maxSpeed = maxSpeed,
            angleVelocity = 5,
            index = 0;
        minAngle = minAngle || 0;
        maxAngle = maxAngle || 360;
        for (var angle = minAngle; angle < maxAngle; angle += Math.floor(maxAngle / count)) {
            if (index < count) {
                var part = parts[index];

                var speed = minSpeed + ((maxSpeed - minSpeed) * Math.random());

                part.body.velocity[0] = speed * Math.cos(angle * Math.PI / 180.0);
                part.body.velocity[1] = speed * Math.sin(angle * Math.PI / 180.0);
                part.body.angularVelocity = angleVelocity * WONBATS.getRandomFromArray([1, -1]);
                index++;
            }
        }
    };

    Level.prototype.gotoNextWorld = function () {
        this.worldTransition = new WONBATS.MovieClip(cinnamon, "cinnamonportalstart");
        this.addWonbyClip(this.worldTransition, this.asset.parent);
    };

    Level.prototype.jumpLevel = function () {
        var isNewWorld = this.isNextLevelANewWorld();

        this.levelNumber = Math.clamp(this.levelNumber + 1, 1, game.config.MAX_LEVELS);

        var playersData = [];
        for (var i in this.playersData) {
            var ref = this.playersData[i].ref;
            playersData[i] = [ref.view.x + ref.movieclip.x, ref.view.y + ref.movieclip.y];
        }

        this.portals.destroy();

        this.removeWonbyClip(this.levelAsset);

        saveLevelData(this.levelNumber, 0, 0, true);

        if (isNewWorld) {
            if (this.emitterManager.isFire) {
                soundManager.fadeTo("ambFire", 0, 0.5);
            }
            this.removeBackground();
            this.transitionSignal.emit(this.name, "next", this.levelNumber);
        } else {
            this.transitionSignal.emit(this.name, "next", this.levelNumber, this.levelAsset, playersData, this.cameraY);
        }
    }

    Level.prototype.isNextLevelANewWorld = function () {
        var levelData = game.levels[this.levelNumber - 1];
        var nextLevelData = game.levels[this.levelNumber];

        return (nextLevelData && levelData.background_asset !== nextLevelData.background_asset);
    };

    Level.prototype.removeBackground = function () {
        this.background.parent.removeChild(this.background);
        this.foreground.parent.removeChild(this.foreground);
    };

    Level.prototype.onKeyDown = function (e) {
        WONBATS.Screen.prototype.onKeyDown.call(this, e);
        globalsignal.emit(ge.KEY_DOWN, e);

        if (game.config.CHEATS && e.key === "k") { //CHEAT: remove this before release
            entityFactory.callAll(EntityFactory.ENEMIES, "cheatKill");
        }
    };

    Level.prototype.onKeyUp = function (e) {
        WONBATS.Screen.prototype.onKeyUp.call(this, e);
        globalsignal.emit(ge.KEY_UP, e);
    };

    Level.prototype.isLastLevel = function () {
        return this.levelNumber === game.config.MAX_LEVELS;
    };

    Level.prototype.showTutorial = function () {
        if (this.levelNumber === 1) {
            var tutorial = this.background.getChildByName("layer1");
            tutorial = tutorial.getChildByName("tile1");
            tutorial.play();
            tutorial = tutorial.getChildByName("tutorial");
            if (Level.playerQty === 1) {
                tutorial.gotoAndPlay("oneplayer");
            } else {
                tutorial.gotoAndPlay("twoplayer");
            }
        }
    };

    Level.prototype.exit = function () {
        this.shockWaveFilter = null;
        this.container.filters = [];
        WONBATS.Tween.clear();

        soundManager.stop("music_boss");
        this.playersData = null;
        entityFactory.forcePool();
        globalsignal.clear();
        this.levelAsset = null;

        this.ui.parent.removeChild(this.ui);
        this.ui = null;
        this.pauseModal.parent.removeChild(this.pauseModal);
        this.pauseModal = null;

        this.emitterManager.dispose();
        this.emitterManager = null;

        WONBATS.Screen.prototype.exit.call(this);
    };

    game.screens.Level = Level;
}());
