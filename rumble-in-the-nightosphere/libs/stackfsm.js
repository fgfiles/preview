function StackFSM() {
    this.stack = [];
    this.enabled = true;
}

StackFSM.prototype.update = function (dt) {
    var currentStateFunction = this.getCurrentState();

    if (currentStateFunction && this.enabled) {
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
