function GUI(player, uiAsset) {
    this.player = player;
    this.ui = uiAsset;
    this.counter = 0;
};

GUI.prototype.hideHighscore = function () {
    this.ui.getChildByName("hiscore").attribs.visible = false;
};

GUI.prototype.setHiscoreValue = function (value) {
    
    var hiscoremc = this.ui.getChildByName("hiscore"),
        hiscoreNumber = hiscoremc.getChildByName("hiscore_number");
    var str = value.toString().split("");

    game.updateNumber(hiscoreNumber, str);
};

GUI.prototype.setLevelValue = function (value) {
    var lvlmc = this.ui.getChildByName("level_number");
    
    if (value === 10) { //little hack to show level X
        value = 11;
    }
    lvlmc.gotoAndStop(value);
}

GUI.prototype.setValue = function (value) {
    this.counter = value;
    this.updateCounter();
};

GUI.prototype.decValue = function () {
    this.counter--;
    this.counter = Math.max(0, this.counter);

    this.updateCounter();
};

GUI.prototype.incValue = function () {
    this.counter++;
    this.counter = Math.min(9999, this.counter);
    this.updateCounter();
};

GUI.prototype.updateValue = function (isEndless) {
    if (!isEndless) {
        this.decValue();
    } else {
        this.incValue();
    }
};

GUI.prototype.updateLife = function (hp) {
    this.ui.getChildByName("lives").gotoAndPlay("_" + hp);
};

GUI.prototype.updateCounter = function () {
    var countermc = this.ui.getChildByName("enemyCounter");
    var str = this.counter.toString().split("");

    game.updateNumber(countermc, str, true);
};

GUI.prototype.updateBar = function (enable, label) {
    var bar = this.ui.getChildByName("bars").getChildByName(label);
    if (enable && bar.getCurrentLabel() !== "on") {
        bar.gotoAndStop("on");
    }
    if (!enable && bar.getCurrentLabel() !== "off") {
        bar.gotoAndStop("off");
    }
}

GUI.prototype.enableLeftBar = function (enable) {
    this.updateBar(enable, "left");
}

GUI.prototype.enableRightBar = function (enable) {
    this.updateBar(enable, "right");
}

GUI.prototype.update = function (dt) {
    if (this.player.attackRange[0] < 450) {
        this.changeBarSize("small");
    } else if (this.player.attackRange[0] > 450) {
        this.changeBarSize("large");
    } else {
        this.changeBarSize("medium");
    }
};

GUI.prototype.changeBarSize = function (size) {
    if (this.ui.getCurrentLabel() !== "size") {
        this.ui.getChildByName("bars").gotoAndStop(size);
    }
};

GUI.prototype.hide = function () {
    this.ui.gotoAndPlay("out");
};

GUI.prototype.dispose = function () {
    this.player = null;
    this.ui = null;
    this.counter = null;
};

WONBATS.GUI = GUI;
