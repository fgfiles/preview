HH.SwordsPreview = function (soul) {
    GS.LFrame.call(this, soul, 'SwordsPreview');
    var s = this.soul.startS *1;
    this.addChild(this.container = new PIXI.DisplayObjectContainer());
    this.container.addChild(this.back00 = new HH.Img('back2', 0, s * 3, 0, 0, new PIXI.Point(0, 0)));
    this.back00.s = s;
}; extend(HH.SwordsPreview, GS.LFrame);

pro.init = function () {
    GS.WebText.deleteAll();
    this.visible = true;
};

pro.setSword = function (playerID, swordID) {
    if(this.player) {
        this.removeChild(this.player);
        this.removeChild(this.hands);
    }
    GS.playSound('zsword' + (HH.SWORD_ID[swordID-1] + 1), 0, HH.SOUND);
    this.playerID = playerID;
    this.swordID = swordID;
    this.timer1 = 20;
    this.state = 0;
    var w = this.S.W/this.scale.x;
    var h = this.S.H/this.scale.x;
    this.addChild(this.player = new HH.MovieClip('intro' + playerID, 20, this.back00.s * 3, w * .43, h * .65, 2, new PIXI.Point(.5, .5)));
    this.addChild(this.hands = new HH.MovieClip('intro' + playerID + '_h' + (HH.SWORD_ID[swordID-1]+1), 20, this.back00.s * 3, HH['PLAYER_' + playerID + "_PREVIEWS"][HH.SWORD_ID[swordID-1]][0] * w, HH['PLAYER_' + playerID + "_PREVIEWS"][HH.SWORD_ID[swordID-1]][1] * h, 2, new PIXI.Point(0, 0)));
};
pro.update = function () {
    if(this.visible) {
        switch (this.state) {
            case 0:
                if(this.timer1-- < 0) {
                    this.player.nextFrame();
                    this.hands.nextFrame();
                    if(this.player.currentFrame > 6) {
                        this.state++;
                        this.timer1 = 25;
                    }
                }
                break;
            case 1:
                if(this.timer1-- < 0) {
                    this.player.nextFrame();
                    this.hands.nextFrame();
                    if(this.player.currentFrame > 19) {
                        this.state++;
                        this.timer1 = 52;
                    }
                }
                break;
            case 2:
                if(this.timer1-- == 0) {
                    this.S.gameplay.setPlayer(this.playerID, this.swordID - 1);
                    this.S.screenTo([this.S.gameplay], this);
                }
                break;
        }

    }
};

Object.defineProperty(pro, 'Scale', {
    get: function() {
        return this.scale.x;
    },
    set: function(v) {
        var value = v;
        var S = this.soul;
        this.scale.x = this.scale.y = value;
        this.scale.x = this.scale.y = value;

    }
});