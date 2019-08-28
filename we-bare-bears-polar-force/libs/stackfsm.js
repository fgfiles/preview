var WONBATS = WONBATS || {};

function StackFSM() {
    this.stack = [];
}

StackFSM.prototype.update = function (dt) {
    var currentStateFunction = this.getCurrentState();

    if (currentStateFunction) {
        currentStateFunction(dt);
    }
};

StackFSM.prototype.popState = function () {
    return this.stack.pop();
};

StackFSM.prototype.pushState = function (state) {
    if (this.getCurrentState() !== state) {
        this.stack.push(state);
    }
};

StackFSM.prototype.getCurrentState = function () {
    return this.stack.length > 0 ? this.stack[this.stack.length - 1] : undefined;
};

StackFSM.prototype.clear = function () {
    this.stack = WONBATS.splice(this.stack, 0, this.stack.length);
};

StackFSM.prototype.dispose = function () {
    this.stack = WONBATS.splice(this.stack, 0, this.stack.length);
    this.stack.length = 0;
    this.stack = null;
};

WONBATS.StackFSM = StackFSM;
