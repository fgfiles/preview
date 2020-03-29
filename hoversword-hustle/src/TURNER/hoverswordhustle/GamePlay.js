HH.GamePlay = function (soul) {
    GS.LFrame.call(this, soul, 'GamePlay');

    this.constants = new HH.C(soul);

    var s = this.soul.startS * 3;
    this.addChild(this.gameContainer = new PIXI.DisplayObjectContainer());
    this.gameContainer.addChild(this.background = new HH.Background(soul));
    this.gameContainer.addChild(this.container = new GS.Frame('Sprite', soul.W, soul.H));
    this.gameContainer.addChild(this.enemySprite = new PIXI.DisplayObjectContainer());
    this.gameContainer.addChild(this.enemySprite2 = new PIXI.DisplayObjectContainer());
    this.gameContainer.addChild(this.bulletSprite = new PIXI.DisplayObjectContainer());
    this.addChild(this.interface = new HH.Interface(this));
    this.interface.scale.x = this.interface.scale.y = s;
    this.addChild(this.t_intro = new HH.Text('Quest', 1, 35 * s, 0, 0, 'left', HH.RED));
    this.addChild(this.maska = new PIXI.Graphics());
    this.addChild(this.popQuest = new HH.Pop(s, 1));
    this.addChild(this.popUnlocked = new HH.Pop(s, 2));

    this.zzz = [];
    var mw = 100;
    this.maska.clear();
    this.maska.beginFill(0xffffff, .5);
    this.maska.drawRect(0, 0, this.maska.w  = mw, this.maska.h = mw * this.S.H/this.S.W);
    this.maska.endFill();
    this.mask = this.maska;

    this.shake = 0;
    this.enemyTimer = 0;

    this.endTimer = 0;
    this.enemies = [];
    this.bullets = [];

    this.addChild(this.b_pause = new HH.ImgButton('b_pause', this, 0, 0, null, null, null, null, null, null, null, 0));
    addEvent(this.b_pause, GS.FRAME_DOWN, this.h_buttons);


    this.addChild(this.pause = new HH.Pause(soul));
    GodStep.IDownUp.call(this.container, soul.W, soul.H);

    addEvent(this.container, GodStep.FRAME_UP, this.h_mouse);
    addEvent(this.container, GodStep.FRAME_DOWN, this.h_mouse);


}; extend(HH.GamePlay, GS.LFrame);

pro.init = function () {
    GS.volumeSound('zloop', 0);
    if(!this.isPlaySound) {
        this.isPlaySound = true;
        GS.playSound('zloop1', -1, HH.SOUND);
        if (HH.SOUND) {
            GS.volumeSound('zloop1', 1);
        }
    } else {
        if(HH.SOUND) {
            GS.volumeSound('zloop1', 1);
        }
    }

    this.enemyTimer = HH.FIRST_ENEMY_TIME_ADD;
    this.popQuest.init();
    this.enemyCounter = 0;
    this.popUnlocked.init();
    this.pause.visible = false;
    while(this.zzz.length) {
        this.bulletSprite.removeChild(this.zzz[0]);
        this.zzz.splice(0, 1);
    }
    while(this.bullets.length) {
        this.bulletSprite.removeChild(this.bullets[0]);
        this.bullets.splice(0, 1);
    }
    while(this.enemies.length) {
        this.enemies[0].parent.removeChild(this.enemies[0]);
        this.enemies.splice(0, 1);
    }
    this.isEnd = false;
    this.isFinished = false;
    this.visible = true;
    this.interface.init();
    if(this.player) {
        this.player.parent.removeChild(this.player);
        this.container.removeChild(this.hitfx);

    }

    this.container.addChild(this.player = new HH.Player(this.playerType, this.swordType, this));
    this.container.addChild(this.hitfx = new HH.MovieClip('hitfx', 2, this.S.startS * 3, 0, 0, 1, new PIXI.Point(.5, .5)));
    this.hitfx.visible = false;
    this.player.scale.x = this.player.scale.y = this.S.startS * 3;

    this.gameContainer.removeChild(this.container);
    this.gameContainer.removeChild(this.enemySprite);
    this.gameContainer.removeChild(this.enemySprite2);
    this.gameContainer.removeChild(this.bulletSprite);
    switch (this.swordType) {
        case 1:
            this.gameContainer.addChild(this.enemySprite);
            this.gameContainer.addChild(this.enemySprite2);
            this.gameContainer.addChild(this.container);
            this.gameContainer.addChild(this.bulletSprite);
            break;
        case 9:
        case 7:
        case 4:
        case 10:
            this.gameContainer.addChild(this.enemySprite);
            this.gameContainer.addChild(this.bulletSprite);
            this.gameContainer.addChild(this.container);
            this.gameContainer.addChild(this.enemySprite2);
            this.container.removeChild(this.player);
            this.enemySprite2.addChild(this.player);
            break;
        default:
            this.gameContainer.addChild(this.container);
            this.gameContainer.addChild(this.enemySprite);
            this.gameContainer.addChild(this.enemySprite2);
            this.gameContainer.addChild(this.bulletSprite);
            break;
    }
    this.Scale = this.lastScale;


    GS.WebText.deleteAll();
    var webElem;
    var s = this.soul.startS * 2.8;
    if(HH.IS_ARAB) {
        var size = 30;
        webElem = new GS.WebText(HH.S('play', 1), size * s, 'wf1', '#ff0000', this.S, this.t_intro); webElem.dx = - 25 * s; webElem.dy = - 35 * s;
        this.t_intro.web.elem.innerText = this.t_intro.text;
    }
};
pro.update = function () {
    if(this.visible) {
        GS.WebText.returnAlphas();
        var bullet;
        if(this.shake > 0.1) {
            this.shake += (0 - this.shake) * .05;
            this.gameContainer.x = this.shake * Math.random();
            //    this.gameContainer.y = this.shake * Math.random();
        }
        this.constants.update();
        if(!this.pause.visible) {
            this.popQuest.update();
            this.popUnlocked.update();
            var h = this.S.H/this.scale.y;
            var w = this.S.W/this.scale.y;
            this.player.update();
            this.background.update();
            this.interface.update();
            if(this.hitfx.visible){
                this.hitfx.nextFrame();
                if(this.hitfx.cycle > 0) {
                    this.hitfx.visible = false;
                }
            }
            this.addEnemy();
            var b, e, enemy;
            for(var z = 0; z<this.zzz.length; z++) {
                var Z = this.zzz[z];
                Z.y -= w * .0035;
                Z.alpha += (0 - Z.alpha) * .02;
                Z.x = Z.sx + Math.sin(Z.phase) * w * .05;
                Z.phase += 0.05;
                Z.scale.x = Z.scale.y += (Z.s * 2 - Z.scale.x) * .05;
                if(Z.alpha < 0.01) {
                    this.bulletSprite.removeChild(Z);
                    this.zzz.splice(z, 1);
                    z--;
                }
            }
            for(b = 0; b<this.bullets.length; b++) {
                bullet = this.bullets[b];
                bullet.update();
                if(bullet.x < -100 || bullet.isKilled) {
                    this.bulletSprite.removeChild(bullet);
                    this.bullets.splice(b, 1);
                    b--;
                }
            }
            for(e = 0; e<this.enemies.length; e++) {
                enemy = this.enemies[e];
                if(enemy.isSpawnZ) {
                    if(enemy.spawnTimer-- < 0) {
                        enemy.spawnTimer = enemy.spawnTime;
                        var zz = new HH.Img('z', 0, this.S.startS * 4,  enemy.x, enemy.y, new PIXI.Point(.5, .5));
                        zz.s = zz.scale.x;
                        zz.sx = zz.x;
                        zz.phase = 0;
                        this.zzz.push(zz);
                        this.bulletSprite.addChild(zz);
                    }

                }
                if(enemy.update(this.player, this.isEnd)) {
                    if(!this.player.isDead) {
                        this.hitfx.visible = true;
                        this.hitfx.setToFrame(0);
                        this.hitfx.cycle = 0;
                        this.hitfx.x = this.player.x + this.player.W * 1.7;
                        this.hitfx.y = this.player.y + this.player.W * .5;
                    }
                    if(this.interface.damage()) {
                        this.player.die();
                        this.endLevel();
                    }
                }
                if(enemy.x < -w*.17 || enemy.x > w * 1.2 || enemy.y > h * 1.2 || enemy.y < -h * 0.1) {
                    enemy.parent.removeChild(enemy);
                    if(enemy.isTree2) {
                        GS.playSound('ztree1', 0, HH.SOUND);
                    }
                    this.enemies.splice(e, 1);
                    e--;
                } else {
                    for(b = 0; b<this.bullets.length; b++) {
                        bullet = this.bullets[b];
                        enemy.interact(bullet);
                    }
                }
            }

            if(this.introTimer > 0) {
                this.introTimer--;
            } else {
                if(this.t_intro.visible) {
                    if(this.t_intro.alpha > .01) {
                        this.t_intro.alpha -= .05;
                        this.t_intro.y -= h * .003;
                    } else {
                        this.t_intro.visible = false;
                    }
                }

            }
            if(this.endTimer > 0) {
                this.endTimer--;
                if(this.isFinished) {
                    this.player.sx += h * .025;
                }
                if(this.endTimer == 0) {
                    if(this.isFinished) {
                        this.popQuest.destroy();
                        this.popUnlocked.destroy();
                        this.S.screenTo([this.S.levelselect], this);
                    } else {
                        this.popQuest.destroy();
                        this.popUnlocked.destroy();
                        this.S.screenTo([this.S.gameover], this);
                    }
                }
            }
            if(this.swordType == 7) {
                if(this.player.reloadTime-- < 0 && !this.player.isDead) {
                    this.player.reloadTime = this.player.reloadTimer;
                    this.addBullet(this.player.getSnowball());
                }
            }
            if(this.swordType == 4) {
                this.updateZ();
            }
        }
        GS.WebText.update(this.scale.x);
    }
};
pro.setPlayer = function (type, sword) {
    this.playerType = type;
    this.swordType = sword;
    this.background.init(sword + 1);
    this.t_intro.setText(HH.S('quest') + ' ' + (sword + 1));

    this.t_intro.updateText();
    var w = this.S.W/this.scale.x;
    var h = this.S.H/this.scale.y;
    this.t_intro.x = (w - this.t_intro.width)/2;
    this.t_intro.y = (h - this.t_intro.height) *.4;
    this.t_intro.alpha = 1;
    this.t_intro.visible = true;
    this.introTimer = 55;
};
pro.updateZ = function () {
    var childs = [];
    var childrens = this.enemySprite2.children;
    while(childrens.length) {
        childs.push(childrens[0]);
        childrens.splice(0, 1);
    }

    if(childs.length > 0) {
        this.enemySprite2.addChild(childs[0]);
    }
    for(var c = 1; c<childs.length; c++) {
        var isAdded = false;
        for(var e = 0; e < childrens.length; e++) {
            if(childs[c].y + childs[c].H < childrens[e].y + childrens[e].H) {
                this.enemySprite2.addChildAt(childs[c], e);
                isAdded = true;
                break;
            }
        }
        if(!isAdded) {
            this.enemySprite2.addChild(childs[c]);
        }
    }
};
pro.addBullet = function (bullet) {
    if(bullet) {
        var w = this.S.W/this.scale.x;
        this.shake = bullet.isShaked ? this.shake = w * .03 : 0;
        this.bullets.push(bullet);
        this.bulletSprite.addChild(bullet);
    }
};
pro.addEnemy = function () {
    var enemy, w = this.S.W/this.scale.x, h = this.S.H/this.scale.x;
    if(this.interface.pos < .96 && this.enemyTimer-- < 0) {
        var s = this.S.startS * 3;
        switch (this.swordType) {
            case 0:
                this.enemyTimer = 70 + 55 * Math.random();
                enemy = new HH.Vampire(s);
                this.enemySprite.addChild(enemy);
                this.enemies.push(enemy);
                enemy.x = w * 1.1;
                enemy.y = h * .92;
                break;
            case 1:
                this.enemyCounter++;
                this.enemyTimer = 60 + 40 * Math.random();
                if(this.enemyCounter > 6 + Math.random() * 5) {
                    this.enemyCounter = 0;
                }
                enemy = new HH.Tree(s, this.enemyCounter);
                this.enemySprite.addChild(enemy);
                this.enemies.push(enemy);
                enemy.x = w * 1.1;
                enemy.y = h * .95;
                break;
            case 2:
                this.enemyTimer = 85 + 45 * Math.random();
                enemy = new HH.Buzzard(s);
                this.enemySprite.addChild(enemy);
                this.enemies.push(enemy);
                enemy.x = w * 1.1;
                enemy.sx = w * .82;
                enemy.ax = w * .18;
                enemy.ay = w * .22;
                enemy.sy = enemy.y = h * .36 + h * .15 * Math.random();
                break;
            case 3:
                this.enemyTimer = 65 + 25 * Math.random();
                enemy = new HH.Ufo(s);
                this.enemySprite.addChild(enemy);
                this.enemies.push(enemy);
                enemy.x = w * 1.1;
                enemy.sy = enemy.y = w * 0.1;
                enemy.a = w;
                enemy.sx = -1;
                break;
            case 4:
                this.enemyTimer = 45 + 15 * Math.random();
                enemy = new HH.Robot(s);
                this.enemySprite2.addChild(enemy);
                this.enemies.push(enemy);
                enemy.x = w * 1.1;
                enemy.y = w * .45 + w * .18 * Math.random();
                enemy.a = w;
                break;
            case 5:
                this.enemyTimer = 51 + 2 * Math.random();
                if(this.enemyCounter > 6 + Math.random() * 5) {
                    this.enemyCounter = 0;
                    enemy = new HH.Box(s, 1);
                } else {
                    enemy = new HH.Box(s, 0);
                }
                this.enemyCounter++;
                this.enemySprite.addChild(enemy);
                this.enemies.push(enemy);
                enemy.x = w * 1.1;
                enemy.sy = enemy.y = w * .13 + w * .25 * Math.random();
                enemy.a = w;
                enemy.sx = -1;
                break;
            case 6:
                this.enemyTimer = 60 + 45 * Math.random();
                enemy = new HH.Bird(s, 1);
                this.enemyCounter++;
                this.enemySprite.addChild(enemy);
                this.enemies.push(enemy);
                enemy.x = w * 1.1;
                enemy.sy = enemy.y = w * .23 + w * .25 * Math.random();
                enemy.a = w;
                break;
            case 7:
                this.enemyTimer = 52 + 40 * Math.random();
                enemy = new HH.Tree2(s);
                this.enemySprite.addChild(enemy);
                this.enemies.push(enemy);
                enemy.x = w * 1.2;
                enemy.y = -h*.1;
                break;
            case 8:
                this.enemyTimer = 90 + 45 * Math.random();
                enemy = new HH.Crow(s);
                this.enemySprite.addChild(enemy);
                this.enemies.push(enemy);
                enemy.x = -w * 0.1;
                enemy.sy = enemy.y = h*.05 + Math.random() * h * .1;
                enemy.a = w;
                break;
            case 9:
                this.enemyTimer = 90 + 25 * Math.random();
                enemy = new HH.Geyser(s);
                this.enemySprite.addChild(enemy);
                this.enemies.push(enemy);
                enemy.x = w * 1.1;
                enemy.sy = enemy.y = h*.89;
                enemy.a = w;
                break;
            case 10:
                this.enemyTimer = 65 + 25 * Math.random();
                enemy = new HH.Cactus(s);
                this.enemySprite.addChild(enemy);
                this.enemies.push(enemy);
                enemy.x = w * 1.1;
                enemy.sy = enemy.y = h*.7 + Math.random() * h * .25;
                enemy.a = w;
                break;
            case 11:
                this.enemyTimer = 45 + 25 * Math.random();
                enemy = new HH.Eye(s);
                this.enemySprite.addChild(enemy);
                this.enemies.push(enemy);
                enemy.x = -w * 0.1;
                enemy.sy = enemy.y = h*.05 + Math.random() * h * .1;
                enemy.a = w;
                break;
        }
    }
};
pro.endLevel = function (isWin) {
    if(!this.isEnd) {
        this.isEnd = true;
        this.endTimer = 120 + (isWin ? 115 : 0);
        this.isFinished = isWin;
        if(isWin) {
            this.player.win();
            this.popQuest.start();
            GS.playSound('zwin', 0, HH.SOUND);
            var player = this.S.PLAYER;
            player.nextUnlock--;
            player.points++;
            if(player.nextUnlock == 0 && player.levels[11] == 0) {
                for(var i = 0; i<player.levels.length; i++) {
                    if(player.levels[i] == 0) {
                        player.levels[i] = 1;
                        player.UNLOCK_ID = i;
                        player.NEW_UNLOCKED = true;
                        var cost = 0;
                        if(i > 10) {
                            cost += 4;
                        } else
                        if(i > 7) {
                            cost += 3;
                        } else {
                            cost += 2;
                        }
                        player.nextUnlock = cost;
                        break;
                    }
                }
                this.popUnlocked.start();
            }

            this.S.savePlayer();

        }
    }

};
pro.h_mouse = function (e) {
    var t = e.target;
    var p = t.parent.parent;
    if(!p.isFinished) {
        switch (e.type) {
            case GS.FRAME_DOWN:
                p.addBullet(p.player.fireDown());
                break;
            case GS.FRAME_UP:
                p.addBullet(p.player.fireUp());
                break;
        }
    }

};
pro.h_buttons = function (e) {
    var t = e.target;
    var p = t.parent;
    if(p) {
        switch (t) {
            case p.b_pause:
                p.pause.init();
                if(HH.IS_ARAB) {
                    p.t_intro.web.elem.style.visibility = 'hidden';
                }
                break;
        }
    }
};
Object.defineProperty(pro, 'Scale', {
    get: function() {
        return this.scale.x;
    },
    set: function(v) {
        this.lastScale = v;
        var value = v;//Math.min(this.S.H/this.S.OH, this.S.W/this.S.OW) * this.S.startS;
        var S = this.soul;
        this.scale.x = this.scale.y = value;
        var dx = (this.soul.OW - this.soul.W)/2/value;
        var dy = (this.soul.OH - this.soul.H)/2/value;
        this.maska.scale.y = this.maska.scale.x = this.S.W/this.maska.w/value;

        if(this.player) {
            var w = this.S.W/this.scale.x;
            this.player.scale.x = this.player.scale.y = this.soul.startS * 3;
            this.player.x = this.player.sx = HH.PLAYER_START_POS[this.swordType][0] * w;
            this.player.y = this.player.sy = HH.PLAYER_START_POS[this.swordType][1] * w;
        }
        this.background.scale.x = this.background.scale.y = this.S.startS * 3;
        this.pause.Scale = v;
        this.b_pause.x = this.S.W /value * .97;
        this.b_pause.y = this.S.H /value * .06;
        this.container.setHitArea(-dx, -dy, this.S.OW/value, this.soul.OH/value);


        this.popQuest.y = this.S.H/value * .37;
        this.popUnlocked.y = this.S.H/value * .63;

    }
});