function AIFlyer(fighter) {
    this.actions = {};
    this.pressed = {};
    this.fighter = fighter;
    this.timeCounter = 0;
    this.enabled = true;
    this.fsm = new StackFSM();
    this.fsm.pushState(this.idleState.bind(this));
};

AIFlyer.prototype.reset = function () {
    this.timeCounter = 0;
};

AIFlyer.prototype.addKey = function (action) {
    action = action.toLowerCase();
    if (action === undefined) {
        return;
    }

    this.actions[action] = {
        keys: action,
        isJustPressed: false,
        isDown: false
    };
};

AIFlyer.prototype.onKeyDown = function (action) {
    if (!this.enabled) {
        return;
    }
    this.updateAction(action, true);
};

AIFlyer.prototype.onKeyUp = function (action) {
    this.updateAction(action, false);
};

AIFlyer.prototype.update = function (dt) {
    for (var action in this.actions) {
        this.actions[action].isJustPressed = this.actions[action].isDown;
        this.actions[action].isDown = this.pressed[action] || false;
    }
    if (this.enabled) {
        this.fsm.update(dt);
    }
};

AIFlyer.prototype.updateAction = function (action, value) {
    if (this.actions[action]) {
        this.pressed[action] = value;
        return;
    }
};

AIFlyer.prototype.idleState = function (dt) {
    if (this.fighter.bestNavPosition[1][1] < this.fighter.bestNavPosition[1][0]) {
        this.onKeyDown("action_autofire");
    } else {
        this.onKeyUp("action_autofire");
    }
    this.timeCounter -= dt;
    if (this.timeCounter > 0) {
        return;
    }
    if (Math.random() > 0.7) {
        if (Math.random() < 0.5) {
            this.onKeyDown("left");
            this.onKeyUp("right");
        } else {
            this.onKeyDown("right");
            this.onKeyUp("left");
        }
        this.timeCounter = 3;
    } else if (this.fighter.bestNavPosition[0][1] > this.fighter.bestNavPosition[0][0]) {
        this.onKeyDown("left");
        this.onKeyUp("right");
    } else {
        this.onKeyUp("left");
        this.onKeyDown("right");
    }
};
