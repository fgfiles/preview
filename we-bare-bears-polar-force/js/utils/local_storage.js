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
    var url = window.location.href;
    var params = url.split('?');

    if (params[1] === "clear") {
        localStorage.clear();
    }

    var ls = localStorage.getItem("level1");
    if (ls === null || ls === undefined) {
        var dataToSave = {
            stars: 0,
            score: 0,
            unlock: true
        };

        localStorage.setItem("level1", JSON.stringify(dataToSave));
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
