var game = game || {};
game.config = game.config || {};

(function () {
    if (typeof localStorage === 'object') {
        try {
            localStorage.setItem('localStorage', 1);
            localStorage.removeItem('localStorage');
        } catch (e) {
            Storage.prototype.dict = {};
            Storage.prototype._setItem = Storage.prototype.setItem;
            Storage.prototype.setItem = function (k, v) {
                this.dict[k] = v;
            };
            Storage.prototype.getItem = function (k) {
                return this.dict[k];
            };
            
        }
    }

    if (isHackEnabled("clear")) {
        localStorage.clear();
    }

    if (!loadLevelData(1)) {
        saveLevelData(1, 0, 0, true);
    }

    if (localStorage.getItem("progress") === null || localStorage.getItem("progress") === undefined) {
        localStorage.setItem("progress", JSON.stringify([1])); // [sword unlocked index]
        
    }

    if (localStorage.getItem("mute") === null || localStorage.getItem("mute") === undefined) {
        localStorage.setItem("mute", JSON.stringify(false));
        
    }

    if (localStorage.getItem("ended") === null || localStorage.getItem("ended") === undefined) {
        localStorage.setItem("ended", JSON.stringify(false)); // sling input by default
        
    }
}());

function isHackEnabled(hack) {
    var url = window.location.href;
    var params = url.split('?')[1];

    if (params) {
        return params.indexOf(hack) !== -1;
    } else {
        return false;
    }
}

function saveLevelData(levelNum, stars, score, unlock) {
    var dataToSave = {
        stars: stars,
        score: score,
        unlock: unlock
    };

    var levelName = "level_" + ("00" + levelNum).slice(-2);
    localStorage.setItem(levelName, JSON.stringify(dataToSave));
}

function loadLevelData(levelNum) {
    var levelName = "level_" + ("00" + levelNum).slice(-2);
    var savedData = localStorage.getItem(levelName);

    if (savedData) {
        return JSON.parse(savedData);
    } else {
        return undefined;
    }
}
