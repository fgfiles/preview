function Spawner(config, entityFactory, container) {
    this.left = [];
    this.right = [];
    this.delay = 0;
    this.waveIndex = 0;
    this.config = WONBATS.clone(config);
    this.configCopy = WONBATS.clone(config);
    this.round = 0;
    this.entityFactory = entityFactory;
    this.container = container;
    this.enemiesKilled = 0;
    this.isEndless = this.config.endless ? true : false;
    this.totalEnemies = this.config.endless ? 0 : this.getTotalEnemies();
    this.totalEnemiesKilled = 0;
    this.roundTotalEnemies = 15;
    globalsignal.add(this.onGlobalSignal.bind(this));
};

Spawner.prototype.update = function (dt) {
    if (this.waveIndex === this.config.waves.length) { //game over
        return;
    }
    var wave = this.config.waves[this.waveIndex];
    if (wave.length > 0) {
        if (wave[0].delay) {
            wave[0].delay -= dt;
            if (wave[0].delay <= 0) {
                wave[0].delay = 0;
                this.spawn(wave[0]);
                wave = WONBATS.splice(wave, 0, 1);
            }
        } else {
            this.spawn(wave[0]);
            wave = WONBATS.splice(wave, 0, 1);
        }
    } else if (this.enemiesKilled === this.configCopy.waves[this.waveIndex].length) {
        this.enemiesKilled = 0;

        var nextWaves = this.configCopy.waves[this.waveIndex][this.configCopy.waves[this.waveIndex].length - 1].nextWaves;
        if (nextWaves) {
            this.waveIndex = nextWaves[Math.floor(nextWaves.length * Math.random())];
            this.config = WONBATS.clone(this.configCopy);
        } else {
            this.waveIndex++;
        }

        if (this.isEndless) {
            this.round = Math.floor(this.totalEnemiesKilled / this.roundTotalEnemies);
            this.round = Math.clamp(this.round, 0, this.config.endless.difficulty.length - 1);
            
        }
    }
    for (var i = this.left.length - 1; i > -1; i -= 1) {
        var currentEnemy = this.left[i];
        if (currentEnemy.life.length <= 0 || currentEnemy.life <= 0) {
            this.left = WONBATS.splice(this.left, i, 1);
            this.enemiesKilled++;
            
        } else if (currentEnemy["hasToChangeSide"] && currentEnemy.hasToChangeSide()) {
            currentEnemy.changeSide();
            this.right.unshift(this.left[i]);
            this.left = WONBATS.splice(this.left, i, 1);
        }
    }
    for (var i = this.right.length - 1; i > -1; i -= 1) {
        var currentEnemy = this.right[i];
        if (currentEnemy.life.length <= 0 || currentEnemy.life <= 0) {
            this.right = WONBATS.splice(this.right, i, 1);
            this.enemiesKilled++;
            
        } else if (currentEnemy["hasToChangeSide"] && currentEnemy.hasToChangeSide()) {
            currentEnemy.changeSide();
            this.left.unshift(this.right[i]);
            this.right = WONBATS.splice(this.right, i, 1);
        }
    }
    for (var i = this.left.length - 1; i > -1; i -= 1) {
        if (i - 1 >= 0) {
            if (!this.left[i]["isNearNext"]) {
                continue;
            }
            var isNearNext = this.left[i].isNearNext(this.left[i - 1]);
            var isPushedByNext = this.left[i].isPushedByNext(this.left[i - 1]);
            if (isNearNext && !isPushedByNext) {
                this.left[i].wait();
            } else if (isPushedByNext) {
                this.left[i].pushBack(this.left[i - 1]);
            }
        }
    }
    for (var i = this.right.length - 1; i > -1; i -= 1) {
        if (i - 1 >= 0) {
            if (!this.right[i]["isNearNext"]) {
                continue;
            }
            var isNearNext = this.right[i].isNearNext(this.right[i - 1]);
            var isPushedByNext = this.right[i].isPushedByNext(this.right[i - 1]);
            if (isNearNext && !isPushedByNext) {
                this.right[i].wait();
            } else if (isPushedByNext) {
                this.right[i].pushBack(this.right[i - 1]);
            }
        }
    }
};

Spawner.prototype.spawn = function (config) {
    var posX = 0,
        posY = 400,
        distance = 750,
        arrayPos,
        player = this.entityFactory.getFirstAlive(WONBATS.Player),
        lastEnemy;
    if (player.life <= 0) {
        return;
    }
    if (config.lookDir === WONBATS.Entity.LEFT) {
        lastEnemy = this.right[this.right.length - 1];
        posX = player.body.position[0] + (player.width / 2) + distance;
        if (lastEnemy && lastEnemy.body.position[0] > posX) {
            posX = lastEnemy.body.position[0] + (lastEnemy.width / 2);
        }
        arrayPos = this.right;
    } else if (config.lookDir === WONBATS.Entity.RIGHT) {
        posX = player.body.position[0] - (player.width / 2) - distance;
        lastEnemy = this.left[this.left.length - 1];
        if (lastEnemy && lastEnemy.body.position[0] < posX) {
            posX = lastEnemy.body.position[0] - (lastEnemy.width / 2);
        }
        arrayPos = this.left;
    }
    var character = this.entityFactory.create(config.type, posX, posY, config.lookDir, this.container);
    character.playerRef = player;
    if (character.setItem && config.item) {
        character.setItem(config.item);
    }
    arrayPos.push(character); //to know where the enemy is and who is the first
    if (this.isEndless && character.moveSpeed && character.attackDelay) {
        var difficultyConfig = this.config.endless.difficulty[this.round];
        
        var newSpeed = character.moveSpeed + (character.moveSpeed * difficultyConfig[0]);
        var newAttackDelay = character.moveSpeed + (character.moveSpeed * difficultyConfig[1]);
        character.moveSpeed = Math.clamp(newSpeed, 0, this.config.endless.maxSpeed);
        character.attackDelay = Math.clamp(newAttackDelay, 0, character.attackDelay);
    }
    if (config.bulletTime) {
        globalsignal.emit(ge.BULLET_TIME, config.bulletTime);
    }
};

Spawner.prototype.getTotalEnemies = function () {
    var enemies = 0;
    for (var i = 0; i < this.config.waves.length; i++) {
        var wave = this.config.waves[i];
        for (var j = 0; j < wave.length; j++) {
            enemies++;
        }
    }
    return enemies;
};

Spawner.prototype.onGlobalSignal = function (event, data) {
    switch (event) {
        case ge.ENEMY_DIE:
            this.totalEnemiesKilled++;
            this.totalEnemiesKilled = Math.clamp(this.totalEnemiesKilled, 0, 9999);
            break;
    }
};

Spawner.prototype.getEnemiesQuantity = function () {
    return this.totalEnemiesKilled;
};

Spawner.prototype.dispose = function () {
    this.left = WONBATS.splice(this.left, 0, this.left.length);
    this.left = null;
    this.right = WONBATS.splice(this.right, 0, this.right.length);
    this.right = null;
    this.delay = null;
    this.waveIndex = null;
    this.config = null;
    this.configCopy = null;
    this.entityFactory = null;
    this.container = null;
    this.enemiesKilled = null;
    this.totalEnemies = null;
    this.totalEnemiesKilled = null;
};

WONBATS.Spawner = Spawner;
