function Bullet(physics) {
    this.speed = 1;
    this.lifeDelay = 3;
    this.damage;
    this.id;
    this.breakApartCb = function () {
        
    };
    WONBATS.Entity.call(this, physics);
};
Bullet.prototype = Object.create(WONBATS.Entity.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.create = function () {
    WONBATS.Entity.prototype.create.call(this);
    this.view = new PIXI.Container();
    this.movieclip.update(1);
    this.view.addChild(this.movieclip);
    var bound = this.movieclip.getChildByName("bound");
    this.width = game.config.BODYBOX_SIZE * this.scale * bound.scale.x;
    this.height = game.config.BODYBOX_SIZE * this.scale * bound.scale.y;
    this.body = this.physics.create(this.physics.BOX, {
        x: -5000,
        y: -5000,
        width: this.width,
        height: this.height,
        material: "physics_particle",
        mass: 0
    });
    this.movieclip.rotation = bound.rotation;
    
};

Bullet.prototype.reset = function (x, y, lookDir) {
    WONBATS.Entity.prototype.reset.call(this, x, y, lookDir);
    this.lifeDelay = 3;
    this.damage = 1;
    this.life = 1;
    
};

Bullet.prototype.hit = function (damage, hitstunDelay) {
    WONBATS.Entity.prototype.hit.call(this, damage, hitstunDelay);
    var pos = this.view.toGlobal(new PIXI.Point(0, 0));
    pos = this.view.parent.toLocal(pos);
    globalsignal.emit(ge.HIT_CONNECTED, {
        x: pos.x,
        y: pos.y
    });
    if (this.life <= 0) {
        if (this.breakSound) {
            WONBATS.soundManager.playRandom(this.breakSound, 2);
        }

        this.breakApartCb(this.id, this.body.position[0], this.body.position[1], this.view.parent);
        this.kill = true;
        this.view.visible = false;
        this.lifeDelay = 0;
    }
};

Bullet.prototype.update = function (dt) {
    WONBATS.Entity.prototype.update.call(this, dt);
    this.body.velocity[0] = this.speed * this.lookDir;
    this.lifeDelay -= dt;
    if (this.lifeDelay <= 0) {
        this.kill = true;
        
    }
};

Bullet.prototype.dispose = function () {
    this.speed = null;
    this.damage = null;
    this.id = null;
    this.breakApartCb = null;
    WONBATS.Entity.prototype.dispose.call(this);
};

WONBATS.Bullet = Bullet;
