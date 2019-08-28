function BodyPart(json, classname) {
    Entity.call(this);
    this.createBody(json, classname);
};

BodyPart.prototype = Object.create(Entity.prototype);
BodyPart.prototype.constructor = BodyPart;

BodyPart.prototype.reset = function (x, y) {
    Entity.prototype.reset.call(this, x, y);
    this.isDrowning = false;
    var collisionMask = ["floor", "bumper", "player", "water", "bodypart", "kill"];
    var playerCollidable = ["_skeleton_spear_helmet", "_skeleton_spear_crash_part_1", "_skeleton_spear_crash_part_2",
                           "_skeleton_crash_part_1", "_skeleton_crash_part_2", "_ground_demon_helmet", "_worm_worm_crash_1", "_worm_worm_crash_2"];
    if (playerCollidable.indexOf(this.movieclip.classname) === -1) {
        collisionMask = ["water", "kill"];
    }
    for (var i = 0; i < this.body.shapes.length; i++) {
        this.body.shapes[i].collisionMask = physics.getCollisionMask(collisionMask);
    }
};

BodyPart.prototype.createBody = function (json, classname) {
    this.view = new PIXI.Container();
    this.movieclip = new WONBATS.MovieClip(json, classname);
    if (classname === "_skeleton_spear_helmet" || classname === "_ground_demon_helmet") {
        this.movieclip.gotoAndStop("alone");
    }
    this.view.addChild(this.movieclip);
    this.movieclip.update(0);
    var compound = [];
    for (var i = 0; i < this.movieclip.children.length; i++) { //maybe move this to physics like "compound parser"
        var shape = this.movieclip.children[i];
        if (shape.classname.indexOf("circle") != -1) {
            compound.push({
                x: shape.x,
                y: shape.y,
                radius: shape.scale.x * 50
            });

        } else if (shape.classname.indexOf("box") != -1) {
            compound.push({
                x: shape.x,
                y: shape.y,
                width: shape.scale.x * EntityFactory.BODY_SIZE,
                height: shape.scale.y * EntityFactory.BODY_SIZE,
            });
        }
    }

    var collisionMask = ["water", "kill"];

    this.body = physics.create(physics.COMPOUND, {
        x: -1500,
        y: -1500,
        mass: 0.1,
        material: "bodypart",
        collisionGroup: "bodypart",
        collisionMask: collisionMask,
        compound: compound
    });
    this.body.adjustCenterOfMass();
};

BodyPart.prototype.update = function (dt) {
    if (this.body.position[0] < game.config.LEVEL_LEFT_LIMIT) {
        globalsignal.emit(ge.WARP_OUT, {
            x: game.config.LEVEL_RIGHT_LIMIT,
            y: this.body.position[1]
        });

        this.body.position[0] = game.config.LEVEL_RIGHT_LIMIT;
        this.body.position[1] = this.body.position[1] - 0.1;
    } else if (this.body.position[0] > game.config.LEVEL_RIGHT_LIMIT) {
        globalsignal.emit(ge.WARP_OUT, {
            x: game.config.LEVEL_LEFT_LIMIT,
            y: this.body.position[1]
        });

        this.body.position[0] = game.config.LEVEL_LEFT_LIMIT;
        this.body.position[1] = this.body.position[1] - 0.1;
    }
    Entity.prototype.update.call(this, dt);
};

BodyPart.prototype.onPhysicsCollide = function (other) {
    if (!this.isDrowning && other.id === EntityFactory.WATER) {
        globalsignal.emit(ge.SPLASH, {
            x: this.view.x,
            y: this.view.y
        });
        for (var i = 0; i < this.body.shapes.length; i++) {
            this.body.shapes[i].collisionMask = physics.getCollisionMask(["kill"]);
        }
        this.isDrowning = true;
    }
    if (this.isDrowning && other.id === EntityFactory.KILL) {
        this.kill = true;
    }
};
