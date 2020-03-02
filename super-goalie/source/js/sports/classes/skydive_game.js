/**
 * Created by jonathan.kernick on 28/03/2017.
 */
var SkydiveGame = function (scoreFunc, gameCompleteFunc,team) {
    PIXI.Container.call(this);
    this.scoreFunc = scoreFunc;
    this.gameCompleteFunc = gameCompleteFunc;
    this.team = team;
    this.charIDA = team*2;
    this.charIDB = this.charIDA + 1;
    this.gameSpeed = 1;
    if(CC.ScaleFactor <= 1)
    {
        this.gameSpeed = 0.75;
    }
    this.build();
};


SkydiveGame.prototype = Object.create(PIXI.Container.prototype);
SkydiveGame.prototype.constructor = SkydiveGame;


SkydiveGame.prototype.screenTo3D = function (x, y, depth, returnPos) {
    var scale = this.cameraNearFarDiff / depth;
    returnPos.x = this.cameraPosition.x + x / scale;
    returnPos.y = this.cameraPosition.y + y / scale;
    returnPos.z = this.cameraPosition.z + depth;
};

SkydiveGame.prototype.calculate3D = function (obj) {
    obj.scale.x = this.cameraNearFarDiff / (obj.pos.z - this.cameraPosition.z);
    //   obj.scale.y *= this.cameraNear/this.cameraHeight;
    obj.visible = obj.scale.x > 0 && !obj.pos.noRender;
    if(obj.scale.x < 0.04 && !obj.shower)
    {
        obj.visible =false;
    }
    obj.x = (obj.pos.x - this.cameraPosition.x) * obj.scale.x;
    obj.y = (obj.pos.y - this.cameraPosition.y) * obj.scale.x;
    obj.scale.x *= obj.pos.scale || 1;
    obj.scale.y = obj.scale.x;
};

SkydiveGame.prototype.createRing = function (count, radius) {
    var ring = new PIXI.Container();

    if(CC.ScaleFactor > 1)
    {
        ring.graphic = new PIXI.Container();
    }
    else
    {
        ring.graphic = CC.Utility.pixiAtlasSprite("sky_static_ring.png");
    }

    var i, length, angle;
    i = 0;
    length = count;

    var self = this;
    ring.scoreRadius = radius;
    ring.scoreRadiusSqr = ring.scoreRadius * ring.scoreRadius * ((CC.ScaleFactor===1)?4:1);

    var angleOffset = Math.random() * 25;
    ring.checkCollect = function (charPos) {
        var testPos = {x:charPos.x,y:charPos.y,z:(charPos.z-this.pos.z)*0.5+this.pos.z};
        var testDist = CC.Geometry.vectorDistanceSquared(testPos, this.pos);
        if (testDist < this.scoreRadiusSqr) {
            this.collect();
        }
    };
    ring.collected = false;
    ring.collect = function () {
        if (!this.collected) {

            Game.sound.play("ring_boost_1");
            this.collected = true;
            self.scoreFunc(8);
            self.internalScore += Math.round(25 * self.fallGear);
            self.ringsCollected++;
            self.fallGear = 2;
            var i = 0, length = this.graphic.children.length,ball;
            if(length)
            {
                for(i; i < length; ++i)
                {
                    ball = this.graphic.children[i];
                    TweenLite.to(ball,0.3,{x:ball.x*3,y:ball.y*3});
                }
            }
            else
            {
                this.graphic.visible = false;
            }
        }
    };

    if(CC.ScaleFactor > 1) {
        for (i; i < length; ++i) {
            angle = (Math.PI * 2) * i / length;
            angle += angleOffset;
            ring.graphic.addChild(CC.Utility.pixiAtlasSprite("sky_orb.png", {
                scale: 0.5,
                x: Math.sin(angle) * radius,
                y: Math.cos(angle) * radius
            }));

        }
    }
    ring.update = function () {
        this.pos.noRender = this.scale.x < 0.01;
    };

    ring.pos = {x: 0, y: 0, z: 0, scale: 1};
    ring.addChild(ring.graphic);
    return ring;
};

SkydiveGame.prototype.createSpeckle = function () {
    var speckle = new PIXI.Container();

    speckle.graphic = new PIXI.Graphics();
    speckle.graphic.beginFill(0xFFFFFF);
    speckle.graphic.drawCircle(0, 0, 1);

    var self = this;

    speckle.show = function () {
        this.pos.x = (Math.random() - 0.5) * 750;
        this.pos.y = (Math.random() - 0.5) * 750;
        this.pos.z = self.cameraPosition.z + 4000;
        this.pos.noRender = false;
    };
    speckle.update = function () {
        // this.pos.noRender = this.scale.x < 0.01;
    };

    speckle.pos = {x: 0, y: 0, z: 0, scale: 1, noRender: true};
    speckle.addChild(speckle.graphic);
    return speckle;
};
SkydiveGame.prototype.createCloud = function () {
    var cloud = new PIXI.Container();

    cloud.graphic = CC.Utility.pixiAtlasSprite("sky_cloud.png")
    cloud.pos = {x: 0, y: 0, z: 0, scale: 3, noRender: false};
    cloud.addChild(cloud.graphic);
    return cloud;
};
SkydiveGame.prototype.createObstruction = function (radius, type) {
    var obstruction = new PIXI.Container();

    if(CC.ScaleFactor === 1)
    {
        if (type) {
            obstruction.graphic = CC.Utility.pixiAtlasSprite("canvas_bird.png");
        }
        else {
            obstruction.graphic = CC.Utility.pixiAtlasSprite("canvas_crate.png");
        }
    }
    else
    {
        if (type) {
            obstruction.graphic = new PIXI.spine.Spine(Game.animationList["skydive_bird"],true); //CC.Utility.pixiAtlasSprite("rubber_ring.png");
        }
        else {
            obstruction.graphic = new PIXI.spine.Spine(Game.animationList["skydive_crate"],true); //CC.Utility.pixiAtlasSprite("rubber_ring.png");
        }
    }


    var self = this;
    var i, length;

    obstruction.scoreRadius = radius * 0.75;
    obstruction.scoreRadiusSqr = obstruction.scoreRadius * obstruction.scoreRadius;

    obstruction.type = type;

    obstruction.angle = Math.random() * 25;
    obstruction.speed = Math.random() + 0.5;
    //  obstruction.graphic.rotation = Math.random()*25;
    if(obstruction.graphic.state) {
        obstruction.graphic.state.setAnimation(0, "idle", true);
    }

    obstruction.checkCollect = function (charPos) {
        var testPos = {x:charPos.x,y:charPos.y,z:(charPos.z-this.pos.z)*0.5+this.pos.z};
        var testDist = CC.Geometry.vectorDistanceSquared(testPos, this.pos);
        if (testDist < this.scoreRadiusSqr) {
            this.collect();
        }
    };
    obstruction.collected = false;
    obstruction.collect = function () {
        if (!this.collected) {
            this.collected = true;
            if (this.type) {
                TweenLite.to(this.graphic, 3, {rotation: -20,
                    x:this.graphic.x + Math.sin(this.graphic.rotation)*-10000,
                    y:this.graphic.y + Math.cos(this.graphic.rotation)*-10000,onComplete:(function(){
                        this.graphic.visible = false;
                    }).bind(this),
                    ease: Back.easeIn});
                Game.sound.play("bird_squawk_" + Math.floor(Math.random()*5+1));
            }
            else {
                if(this.graphic.state)
                {
                    this.graphic.state.setAnimation(0, "hit");
                }

                Game.sound.play("ring_hit");
            }
            self.scoreFunc(-4);
            self.characters[self.currentCharacterIndex].play(0, "crash");
            Game.webApp.juggler.addTimeout(function () {
                self.characters[self.currentCharacterIndex].play(0, "slow_idle", true);
            }, 0.5);
            self.fallGear = 0;
            self.internalScore -= 50;
            self.scoreFunc(-50);
        }
    };

    obstruction.update = function (delta) {
        //this.graphic.update(delta);
        this.pos.noRender = this.scale.x < 0.01;
        if (this.type && ! this.collected) {
            var height = (self.playerZPosition - this.pos.z) * 0.0001 * this.speed;
            this.graphic.x = (Math.sin(height + this.angle) - Math.sin(this.angle)) * 300;
            this.graphic.y = (Math.cos(height + this.angle) - Math.cos(this.angle)) * 300;
            this.graphic.rotation = -(height + this.angle) + Math.hPI;
        }
    };

    obstruction.pos = {x: 0, y: 0, z: 0, scale: 1};
    obstruction.addChild(obstruction.graphic);
    return obstruction;
};
SkydiveGame.prototype.createPlane = function (id) {
    var plane = CC.Utility.pixiAtlasSprite("skydive_plane_0.png");
    plane.addChild(CC.Utility.pixiAtlasSprite("skydive_plane_1.png"));
    plane.addChild(CC.Utility.pixiAtlasSprite("skydive_plane_2.png"));
    plane.addChild(CC.Utility.pixiAtlasSprite("skydive_plane_3.png"));

    var self = this;
    plane.rotation = Math.random() * Math.TAU;
    plane.update = function () {
        var height = ((self.characters[0].pos.z - this.pos.z) * 0.1) + 50;
        this.pos.x = Math.sin(-this.rotation - Math.hPI) * height;
        this.pos.y = Math.cos(-this.rotation - Math.hPI) * height + 500;
    };
    plane.pos = {x: 0, y: 0, z: 0, scale: 3};
    return plane;
};
SkydiveGame.prototype.createCircleDisplay = function () {

    var circleDisplay = new PIXI.Container();
    circleDisplay.text = SportsUI.createDisplayText("Tap to open!", {size: 40}, true);
    circleDisplay.text.x = circleDisplay.text.width * -0.5;
    circleDisplay.text.y = circleDisplay.text.height * -0.5;


    circleDisplay.handTap = CC.Utility.pixiAtlasMovieClip(["hand_icon.png","hand_icon_tap.png"]);
  //  circleDisplay.handTap.animationSpeed = 0.03;
 //   circleDisplay.handTap.play();
    circleDisplay.handTap.scale.x = -1;
    circleDisplay.handTap.y = 100;

    circleDisplay.containerText = new PIXI.Container;
    circleDisplay.containerText.x = -100;
    circleDisplay.containerText.y = -50;
    circleDisplay.arrow = CC.Utility.pixiAtlasSprite("sky_arrow.png");
    circleDisplay.arrow.x = -180;
    circleDisplay.animTimer = 50;
    Game.webApp.juggler.addObject(circleDisplay);
    circleDisplay.update = function (delta) {
        //this.animTimer += delta;
       // this.arrow.anchor.x = Math.abs(Math.sin(this.animTimer)) * 0.5;


        this.animTimer += delta*4;
      //  this.handTap.x = Game.webApp.screenWidth*-0.5 + 50;
        var swingMotion = Math.max(0,Math.sin(this.animTimer)-0.5);
        this.handTap.scale.y = 1.25-swingMotion*0.5;
        this.handTap.scale.x = -this.handTap.scale.y;

    };
    circleDisplay.graphic = new PIXI.Graphics();
    circleDisplay.setValue = function (value) {
        this.graphic.clear();
        this.graphic.lineStyle(12, 0x0);
        this.graphic.drawCircle(0, 1, 80);
        this.graphic.lineStyle(9, 0xFFFFFF);
        this.graphic.drawCircle(0, 0, 80);
        this.graphic.lineStyle(9, 0xF9EB46);
    //    this.graphic.arc(0, 0, 80, -Math.PI * 0.5, Math.PI * 2 * value - Math.PI * 0.5);

    };
    circleDisplay.setValue(0.5);
    circleDisplay.addChild(circleDisplay.graphic);
    //circleDisplay.addChild(circleDisplay.arrow);
    circleDisplay.addChild(circleDisplay.handTap);
   // circleDisplay.containerText.addChild(circleDisplay.text);
 //   circleDisplay.addChild(circleDisplay.containerText);
    return circleDisplay;
};
SkydiveGame.prototype.createLandingScene = function (id, callBack) {
    var background = CC.Utility.pixiAtlasSprite("sky_landing_0.png");
    background.addChild(CC.Utility.pixiAtlasSprite("sky_landing_1.png"));


    background.character = CC.Utility.pixiAtlasSprite("sky_para_characters_" + id + ".png");
    background.characterFar = CC.Utility.pixiAtlasSprite("sky_para_far_characters_" + id + ".png");
    background.character.x = -5;
    background.character.y = -200;
    background.character.anchor.y = 1;
    background.characterFar.anchor.y = 1;
    background.characterFar.y = -200;
    background.splash = new PIXI.spine.Spine(Game.animationList["skydive_splash"]);

    background.land = function (type) {

        Game.sound.play("parachute_opening");
        this.visible = true;
        switch (type) {
            case 0:
                Game.webApp.juggler.addTimeout(function(){callBack(50)},1.5);
                TweenLite.to(background.character, 3, {y: 70, onComplete: function(){
                    Game.sound.play("parachute_landing");
                }});
                break;
            case 1:
                var offset = Math.random() - 0.5 * 100;
                background.character.x = offset + Math.sign(offset) * 120;
                Game.webApp.juggler.addTimeout(function(){callBack(25)},1.5);
                TweenLite.to(background.character, 3, {y: 70, onComplete: function(){
                    Game.sound.play("parachute_landing");
                }});
                break;
            case 2:
                background.characterFar.x = (Math.random() - 0.5) * 150;
                Game.webApp.juggler.addTimeout(callBack,0.5);
                TweenLite.to(background.characterFar, 2, {ease:Power1.easeIn,y: 20, onComplete:  function(){
                    Game.sound.play("pogo_splash");
                    background.splash.visible = true;
                    background.characterFar.visible = false;
                    background.splash.state.setAnimation(0,"splash_0");
                    background.splash.scale.set(0.7);
                    background.splash.x = background.characterFar.x;
                    background.splash.y = background.characterFar.y-50;
                }});
                break;
        }
    };
    background.splash.visible = false;
    background.addChild(background.characterFar);
    background.addChild(CC.Utility.pixiAtlasSprite("sky_landing_2.png"));
    background.addChild(background.character);
    background.addChild(background.splash);
    background.visible = false;
    return background;
};
SkydiveGame.prototype.createCharacter = function (id) {
    var character = new PIXI.Container();

    if(CC.ScaleFactor > 1) {
        character.anim = new PIXI.spine.Spine(Game.animationList["skydive_character_" + id], true); //CC.Utility.pixiAtlasSprite("rubber_ring.png");
    }
    else
    {
        character.anim = CC.Utility.pixiAtlasSprite("sky_dive_characters_" + id + ".png");
    }

    character.play = function(track,id,loop){

        if(CC.ScaleFactor > 1) {
            this.anim.state.setAnimation(track, id, loop);
        }
    };
    character.pos = {x: 0, y: 1, z: -1000, scale: 1 - (!id * 0.3)};
    character.play(0, "slow_idle", true);
    character.addChild(character.anim);
    return character;
};
SkydiveGame.prototype.createIsland = function () {
    var island = new PIXI.Container();
    var anchor = {x: 0.5, y: 0.4};
    island.graphicX1 = CC.Utility.pixiAtlasSprite("sky_island_small_0.png", {anchor: anchor});
    island.graphicX1.addChild(CC.Utility.pixiAtlasSprite("sky_island_small_1.png", {anchor: anchor}));
    island.graphicX2 = CC.Utility.pixiAtlasSprite("sky_island_large_0.png", {
        scale: 0.6,
        anchor: anchor,
        visible: false
    });
    island.graphicX2.addChild(CC.Utility.pixiAtlasSprite("sky_island_large_1.png", {anchor: anchor}));


    island.pos = {x: 0, y: 0, z: 1, scale: 80};
    island.shower = true;
    /*  island.update = function(){
     this.graphicX2.visible = this.scale.x > 0.7;
     this.graphicX1.visible = !this.graphicX2.visible;
     };*/
    island.addChild(island.graphicX1);
    island.addChild(island.graphicX2);
    return island;
};

SkydiveGame.prototype.gameOver = function (bonus) {
    bonus = bonus || 0;
    this.gameRunning = false;
    this.gameCompleteFunc(bonus);
};
SkydiveGame.prototype.build = function () {


    this.ocean = CC.Utility.pixiAtlasSprite("sky_ocean_0.png");
    this.ocean.addChild(CC.Utility.pixiAtlasSprite("sky_ocean_1.png"));

    var self = this;
    this.startHeight = -0;
    this.cameraPosition = {x: 0, y: 0, z: this.startHeight};
    this.playerControlTarget = {x: 0, y: 1, z: 0};

    this.ringsCollected = 0;
    this.swapAmount = 0;
    this.playerZPosition = 0;

    this.cameraNear = 100;
    this.cameraFar = 2000;
    this.cameraHeight = 1200;
    this.cameraNearFarDiff = 1000;
    this.startSpacing = 6000;
    this.endSpacing = 2000;
    this.switchHeight = 0;
    this.switchGap = 20000;
    this.swapping = false;
    this.switched = false;
    this.rotOffset = 0;

    this.fallingBoost = new PIXI.spine.Spine(Game.animationList["boost"]);
    this.fallingBoost.alpha = false;
    this.gameRunning = true;
    this.gameFalling = true;

    this.zoomedIslandTest = CC.Utility.pixiAtlasSprite("sky_island_large_0.png", {scale: 0.5, visible: false});
    this.zoomedIslandTest.addChild(CC.Utility.pixiAtlasSprite("sky_island_large_1.png", {scale: 0.5, visible: false}));
    this.zoomedIslandTest.scale.set(0.001);
    this.targetThreshold = -20000;
    this.offsetThreashold = -30000;

    this.fallSpeed = 4000;
    this.fallGear = 0;
    this.internalScore = 0;
    this.cameraFocus = 1;

    this.swayTimer = 0;
    this.threeDObjectsContainer = new PIXI.Container();

    this.island = this.createIsland();

    this.currentCharacterIndex = 0;

    this.plane = this.createPlane();
    this.plane.shower = true;

    this.landScene = this.createLandingScene(this.team, function (bonus) {
        self.gameOver(bonus);
    });

    this.characters = [
        this.createCharacter(this.charIDA),
        this.createCharacter(this.charIDB)
    ];
    //this.characters[0].pos.z = this.startHeight;


    this.interactiveLayer = new PIXI.Container();
    this.interactiveLayer.hitArea = new PIXI.Rectangle(-1500, -1500, 3000, 3000);
    this.interactiveLayer.interactive = true;

    this.mousePos = {x: 0, y: 1};

    this.interactiveLayer.touchmove = this.interactiveLayer.mousemove = (function (event) {
        this.mousePos = event.data.getLocalPosition(this.threeDObjectsContainer);
    }).bind(this);
    this.interactiveLayer.click = this.interactiveLayer.tap = (function (event) {

        if (this.gameFalling && this.circleDisplay.visible && this.circleDisplay.alpha === 1) {
            this.gameFalling = false;
            var bonusValue = Math.abs(this.characters[this.currentCharacterIndex].pos.x / 200);
            //console.log(bonusValue);
            var landValue = 0;
            if (bonusValue > 0.2) {
                landValue = 1;
            }
            if (bonusValue > 0.6) {
                landValue = 2;
            }

            this.landScene.land(landValue);

        }
    }).bind(this);

    this.ringPool = [];
    var i, ring, cloud, obst, length, speckle;
    i = 0;
    length = 50;
    var dir = 1, halfway = 0;

    for (i; i < length; ++i) {
        ring = this.createRing(9, 64);
        ring.pos.x = Math.sin(i * dir) * 175;
        ring.pos.y = Math.cos(i * dir) * 175;
        if (!(i % 6)) {
            dir *= -1;
        }
        halfway = i > (length / 2);
        ring.pos.z = i * -Math.lerp(this.startSpacing, this.endSpacing, 1 - (i / length));
        ring.pos.z += this.targetThreshold + this.offsetThreashold;
        ring.pos.z += halfway * -this.switchGap;
        if (i === Math.floor(length / 2) + 1) {
            this.switchHeight = ring.pos.z;
        }
        if (i === Math.floor(length * 0.7) + 1) {
            this.plane.pos.z = ring.pos.z;
        }
        this.startHeight = ring.pos.z - 20000;
        //  ring.rotation = Math.random()*100;
        this.ringPool.push(ring);
        this.threeDObjectsContainer.addChild(ring);
        //if(false)
        {
            obst = this.createObstruction(64, !((i + 5) % 6));
            obst.pos.x = Math.sin(i * dir + 2) * 145;
            obst.pos.y = Math.cos(i * dir + 2) * 175;
            obst.pos.z = ring.pos.z - 3000;
            if (obst.graphic.update) {
                obst.graphic.update(Math.random() * 100);
            }
            this.threeDObjectsContainer.addChild(obst);

            obst = this.createObstruction(64, !((i + 5) % 6));
            obst.pos.x = Math.sin(i * dir - 2) * 175;
            obst.pos.y = Math.cos(i * dir - 2) * 175;
            obst.pos.z = ring.pos.z - 2000;
            this.threeDObjectsContainer.addChild(obst);
            if (obst.graphic.update) {
                obst.graphic.update(Math.random() * 100);
            }
        }
    }
    if (CC.ScaleFactor > 1) {
        length = 20;
        i = 0;
        for (i; i < length; ++i) {
            cloud = this.createCloud();
            cloud.pos.x = (Math.random() - 0.5) * 1000;
            cloud.pos.y = (Math.random() - 0.5) * 1000;
            cloud.pos.z = (Math.random() * -100) + ((this.startHeight / length) * i);
            cloud.graphic.rotation = Math.random() * Math.TAU;
            this.threeDObjectsContainer.addChild(cloud);
        }
        length = 10;
        i = 0;
        for (i; i < length; ++i) {
            cloud = this.createCloud();
            cloud.pos.x = (Math.random() - 0.5) * 100;
            cloud.pos.y = (Math.random() - 0.5) * 10;
            cloud.pos.z = (Math.random() * -100) + this.switchHeight;
            cloud.graphic.rotation = Math.random() * Math.TAU;
            this.threeDObjectsContainer.addChild(cloud);
        }
    }

    this.playerZPosition = this.startHeight;
    this.characters[0].pos.z = this.startHeight;
    this.characters[1].pos.z = this.startHeight;
    this.characters[1].anim.visible = false;
    //console.log(this.switchHeight);
    i = 0;
    length = 50;

    this.speedSpecklesPool = [];
    this.speedSpecklesIndex = 0;
    this.speedSpecklesTimer = 0;
    this.speedSpecklesTimerMax = 0.1;


    this.circleDisplay = this.createCircleDisplay();
    this.circleDisplay.alpha = 0;
    this.circleDisplay.visible = false;

    if (CC.ScaleFactor > 1)
    {
        for (i; i < length; ++i) {
            speckle = this.createSpeckle();
            this.speedSpecklesPool.push(speckle);
            this.threeDObjectsContainer.addChild(speckle);
        }
    }
    this.threeDObjectsContainer.addChild(this.island);
    this.threeDObjectsContainer.addChild(this.characters[0]);
    this.threeDObjectsContainer.addChild(this.characters[1]);
    this.threeDObjectsContainer.addChild(this.plane);

    this.addChild(this.ocean);
    this.addChild(this.zoomedIslandTest);
    this.addChild(this.threeDObjectsContainer);
    this.addChild(this.circleDisplay);
    //this.addChild(this.fallingBoost);
    this.addChild(this.interactiveLayer);
    this.addChild(this.landScene);
};
SkydiveGame.zSortFunc = function (a, b) {
    return b.pos.z - a.pos.z;
};
SkydiveGame.prototype.swapCharacters = function () {

    TweenLite.to(this,2,{delay:1,swapAmount:1,onComplete:(function(){
        this.swapAmount = 0;
        this.currentCharacterIndex = 1 - this.currentCharacterIndex;
        this.characters[0].anim.visible = false;

    }).bind(this)})
    this.characters[1].anim.visible = true;
};
SkydiveGame.prototype.update = function (delta) {
    this.oldFallGear = this.fallGear;
    this.fallGear = Math.lerp(1, this.fallGear, 0.99);
    var self = this;

    if(CC.ScaleFactor > 1)
    {
    if (this.oldFallGear === 2 && this.characters[0].anim.state.tracks[0].animation.name !== "fast_idle") {
        this.characters[0].play(0, "fast_in");
        this.characters[1].play(0, "fast_in");
        this.fallingBoost.state.setAnimation(0, "boost_0");
        this.fallingBoost.alpha = true;
        Game.webApp.juggler.addTimeout(function () {
            //console.log("fast idle");
            self.characters[0].play(0, "fast_idle", true);
            self.characters[1].play(0, "fast_idle", true);
        }, 0.3);
    }
    if (this.oldFallGear > 1 && this.fallGear <= 1 && this.characters[0].anim.state.tracks[0].animation.name !== "slow_idle") {
        this.characters[0].play(0, "slow_in");
        this.characters[1].play(0, "slow_in");
        Game.webApp.juggler.addTimeout(function () {
            //console.log("fast idle");
            self.characters[0].play(0, "slow_idle", true);
            self.characters[1].play(0, "slow_idle", true);
        }, 0.3);
    }

    }
    // this.cameraFocus = Math.lerp((2+this.fallGear)/3,this.cameraFocus,0.9);
    this.cameraNearFarDiff = (this.cameraFar - this.cameraNear) * this.cameraFocus;

    var currentCharacter = this.characters[this.currentCharacterIndex];
    var currentCharacterAlt = this.characters[1 - this.currentCharacterIndex];


    this.speedSpecklesTimer += delta;
    if (!this.switched && currentCharacter.pos.z && currentCharacter.pos.z > this.switchHeight) {
        this.switched = true;
        this.island.graphicX1.visible = false;
        this.island.graphicX2.visible = true;
        this.swapCharacters();
    }
    if (CC.ScaleFactor > 1 && this.speedSpecklesTimer > this.speedSpecklesTimerMax) {
        this.speedSpecklesTimer = 0;
        this.speedSpecklesPool[this.speedSpecklesIndex].show();
        this.speedSpecklesIndex = Math.modo(this.speedSpecklesIndex + 1, this.speedSpecklesPool.length);
    }

    this.screenTo3D(this.mousePos.x, this.mousePos.y, this.playerZPosition- this.cameraPosition.z, this.playerControlTarget);
    CC.Geometry.changeVectorLength2D(700, this.playerControlTarget);
    if (this.circleDisplay.visible) {
        this.swayTimer += delta;
        currentCharacter.pos.x = Math.lerp(Math.sin(this.swayTimer*3)*300, currentCharacter.pos.x, 0.9);
        currentCharacter.pos.y = Math.lerp(0, currentCharacter.pos.y, 0.9);
    }
    else {
        currentCharacter.pos.x = Math.lerp(this.playerControlTarget.x, currentCharacter.pos.x, 0.9);
        currentCharacter.pos.y = Math.lerp(this.playerControlTarget.y, currentCharacter.pos.y, 0.9);
        CC.Geometry.changeVectorLength2D(175, currentCharacter.pos);

    }

    currentCharacterAlt.pos.x = currentCharacter.pos.x;
    currentCharacterAlt.pos.y = currentCharacter.pos.y;

    var reset = false;

    if (this.gameRunning && this.gameFalling) {
        this.playerZPosition += delta * this.fallSpeed * this.fallGear* this.gameSpeed;
    }
    else {
        this.playerZPosition = 0;
    }

    currentCharacter.pos.z = this.playerZPosition - 3000 * 2 * this.swapAmount;
    currentCharacterAlt.pos.z = this.playerZPosition - 3000 * (1-2 * Math.max(0,0.5-(1-this.swapAmount)));
    if (this.gameRunning && currentCharacter.pos.z > 0) {
        this.gameOver(0);

        this.fallGear = 0;
        //currentCharacter.pos.z = this.startHeight;
        reset = true;
    }
    if (this.gameFalling && currentCharacter.pos.z > -20000) {
        this.gameFalling = false;
        this.landScene.land(2);
    }

    this.cameraPosition.x = Math.lerp(currentCharacter.pos.x * 0.2, this.cameraPosition.x, 0.9);
    this.cameraPosition.y = Math.lerp(currentCharacter.pos.y * 0.2, this.cameraPosition.y, 0.9);
    this.cameraPosition.z = Math.lerp(this.playerZPosition - 2500, this.cameraPosition.z, 0.5);
    var value = 1-Math.min(Math.abs(this.plane.pos.z-currentCharacter.pos.z)/20000,1);
    this.threeDObjectsContainer.x = Math.sin(this.cameraPosition.z)* value*4;
    this.threeDObjectsContainer.y = Math.sin(this.cameraPosition.z)*value*4;
    if(this.plane.pos.z-20000 < currentCharacter.pos.z && !this.planePassed)
    {
        this.planePassed = true;
        Game.sound.play("plane_flyby");
    }

    if (!this.circleDisplay.visible && (this.targetThreshold * 0.5 + this.offsetThreashold) < currentCharacter.pos.z) {
        this.circleDisplay.visible = true;
        this.circleDisplay.scale.set(0.5);
        TweenLite.to(this.circleDisplay, 0.5, {alpha: 1});
        TweenLite.to(this.circleDisplay.scale, 0.5, {x: 1, y: 1, ease: Back.easeOut});
    }
    if (this.circleDisplay.visible) {
        this.circleDisplay.setValue(Math.min(0, currentCharacter.pos.z / (this.targetThreshold * 0.5 - this.offsetThreashold)));
    }


    //currentCharacterAlt.pos.z = currentCharacter.pos.z+1;


    if(!this.circleDisplay.visible)
    {
        currentCharacter.rotation = this.rotOffset + Math.atan2(-currentCharacter.pos.x, currentCharacter.pos.y);
        currentCharacterAlt.rotation = this.rotOffset + Math.atan2(-currentCharacterAlt.pos.x, currentCharacterAlt.pos.y);
    }
    else
    {

        currentCharacter.rotation *= 0.9;
        currentCharacterAlt.rotation *= 0.9;
    }
    // currentCharacter.skew.x = -currentCharacter.pos.x/4000;
    var i, obj, length;
    i = 0;
    length = this.threeDObjectsContainer.children.length;
    for (i; i < length; ++i) {
        obj = this.threeDObjectsContainer.children[i];
        this.calculate3D(obj);
        if (obj.update) {
            obj.update(delta);
        }
        if (obj.checkCollect) {
            obj.checkCollect(currentCharacter.pos);
        //    obj.checkCollect(currentCharacterAlt.pos);
        }
        if (reset && obj.reset) {
            obj.reset();
        }
    }
    this.threeDObjectsContainer.children.sort(SkydiveGame.zSortFunc);
};