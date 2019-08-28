function Input() {
    this.actions = {};
    this.pressed = {};
    this.enabled = true;
};

Input.prototype.reset = function () {
    globalsignal.add(this.onGlobalsignal.bind(this));
    this.enabled = true;
};

Input.prototype.clearAllKeys = function () {
    for (var action in this.actions) {
        this.actions[action].isJustPressed = false;
        this.actions[action].isDown = false;
        this.pressed[action] = false;
    }
};

Input.prototype.addKey = function (action, keys) {
    action = action.toLowerCase();
    if (action === undefined || keys === undefined) {
        return;
    }

    this.actions[action] = {
        keys: keys,
        isJustPressed: false,
        isDown: false
    };
};

Input.prototype.onGlobalsignal = function (event, data) {
    switch (event) {
        case ge.KEY_DOWN:
            this.onKeyDown(data);
            break;
        case ge.KEY_UP:
            this.onKeyUp(data);
            break;
    }
};

Input.prototype.onKeyDown = function (event) {
    if (!this.enabled) {
        return;
    }
    var key = (event.key) ? event.key.toLowerCase() : event.keyIdentifier.toLowerCase();
    this.updateKey(key, true);
};

Input.prototype.onKeyUp = function (event) {
    var key = (event.key) ? event.key.toLowerCase() : event.keyIdentifier.toLowerCase();
    this.updateKey(key, false);
};

Input.prototype.update = function (dt) {
    for (var action in this.actions) {
        this.actions[action].isJustPressed = this.actions[action].isDown;
        this.actions[action].isDown = this.pressed[action] || false;
    }
};

Input.prototype.updateKey = function (key, value) {
    for (var action in this.actions) {
        if (this.actions[action].keys.indexOf(key) !== -1) {
            this.pressed[action] = value;
            return;
        }
    }
};

Input.prototype.dispose = function () {
    this.actions = null;
    this.presed = null;
};
