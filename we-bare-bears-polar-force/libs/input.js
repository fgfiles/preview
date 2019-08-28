var WONBATS = WONBATS || {};

function Input() {
    this.actions = {};
    this.pressed = {};
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

Input.prototype.onKeyDown = function (event) {
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
WONBATS.Input = Input;
