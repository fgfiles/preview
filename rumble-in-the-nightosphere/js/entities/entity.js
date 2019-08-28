function Entity() {
    this.kill = false;
    this.dead = false;
    this.view = undefined;
    this.movieclip = undefined;
    this.body = undefined;
    this.timeCounter = 0;
    this.life = 0;
};

Entity.prototype.reset = function (x, y) {
    this.kill = false;
    this.dead = false;
    if (this.body) {
        this.body.position[0] = x;
        this.body.position[1] = y;
        this.body.velocity[0] = 0;
        this.body.velocity[1] = 0;
        this.body.angularVelocity = 0;
        this.body.wakeUp();
    }
    if (this.view) {
        this.view.visible = true;
        this.view.x = 15000;
        this.view.y = 15000;
    }

    if (game.config.DEBUG) {
        if (!this.debugText) {
            var style = new PIXI.TextStyle({
                fontFamily: 'Arial',
                fontSize: 10,
                fontStyle: 'italic',
                fontWeight: 'bold',
                fill: ['#00ff99', '#00ff45'], // gradient
                stroke: '#000000',
                strokeThickness: 5,
                wordWrap: true,
                wordWrapWidth: 440
            });
            this.debugText = new PIXI.Text("", style);
            this.debugText.text = "-";
            this.debugText.anchor.set(0.5, 0.5);
        }
        if (this.debugText.parent !== physics.container) {
            physics.container.addChild(this.debugText);
        }
    }
};
Entity.prototype.update = function (dt) {

    if (this.view && this.body && this.movieclip) {
        this.movieclip.update(dt);
        this.view.x = this.body.position[0];
        this.view.y = this.body.position[1];
        this.view.rotation = this.body.angle;
    }
    if (game.config.DEBUG) {
        if (this.debugText) {
            this.debugText.x = this.body.position[0];
            this.debugText.y = this.body.position[1];
        }
    }
};

Entity.prototype.onPhysicsCollide = function (other) {

};

Entity.prototype.onHitboxCollide = function (other, hitboxes) {

};

Entity.prototype.onForcePool = function () {
    if (this.body) {
        this.body.position[0] = -15000;
        this.body.position[1] = -15000;
        this.body.sleep();
    }
    if (this.view) {
        this.view.visible = false;
    }
};

Entity.prototype.onDead = function () {
    if (this.body) {
        this.body.position[0] = -15000;
        this.body.position[1] = -15000;
        this.body.sleep();
    }
    if (this.view) {
        this.view.visible = false;
    }
};

Entity.prototype.cheatKill = function () {
    if (this.life > 0) {
        this.life = 1;
        this.damageProcess();
    }
};
