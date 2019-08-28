function Bullet(json, classname) {
    Entity.call(this);
    this.createBody(json, classname);
};

Bullet.prototype = Object.create(Entity.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.reset = function (x, y) {
    Entity.prototype.reset.call(this, x, y);
    this.isDrowning = false;
    var collisionMask = ["floor", "bumper", "player", "water", "bodypart", "kill"];
    for (var i = 0; i < this.body.shapes.length; i++) {
        this.body.shapes[i].collisionMask = physics.getCollisionMask(collisionMask);
    }
};

Bullet.prototype.createBody = function (json, classname) {
    this.view = new PIXI.Container();
    this.movieclip = new WONBATS.MovieClip(json, classname);
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

    this.body = physics.create(physics.COMPOUND, {
        x: -1500,
        y: -1500,
        mass: 0.1,
        material: "bullet",
        collisionGroup: "bullet",
        collisionMask: ["floor", "bumper", "player", "water", "bodypart", "kill"],
        compound: compound
    });
};

Bullet.prototype.update = function (dt) {
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

Bullet.prototype.onPhysicsCollide = function (other) {
    if (!this.kill) {
        globalsignal.emit(ge.SNOT_HIT, { //TODO: replace this for a real hit particle
            x: this.view.x,
            y: this.view.y
        });

        this.kill = true;
    }

    if (!this.isDrowning && other.id === EntityFactory.WATER) {
        globalsignal.emit(ge.SPLASH, {
            x: this.view.x,
            y: this.view.y
        });
        this.isDrowning = true;
        for (var i = 0; i < this.body.shapes.length; i++) {
            this.body.shapes[i].collisionMask = physics.getCollisionMask(["kill"]);
        }
    } 
    if (this.isDrowning && other.id === EntityFactory.KILL) {
        this.kill = true;
    }
};
