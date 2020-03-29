HH.Orientation = function(soul) {
    this.soul = soul;
    GodStep.Frame.call(this, 'Orientation', soul.W, soul.H);
    this.addChild(this.back = new HH.Img('rotate', 0, soul.startS * 1, this.W/2, this.H/2, new PIXI.Point(0.5, 0.5)));
    this.visible = false;
    GodStep.IDownUp.call(this, this.W, this.H);
    if(window.orientation == undefined) {

    } else
    if(window.orientation == 90 || window.orientation == -90) {
        this.visible = GodStep.ORIENTATION_PORTRAIT;
    } else {
        this.visible = !GodStep.ORIENTATION_PORTRAIT;
    }

};
extend(HH.Orientation, GodStep.Frame);
pro.init = function() {
   this.visible = true;
};

Object.defineProperty(pro, 'Scale', {
    get: function() {
        return this.scale.x;
    },
    set: function(value) {
        this.scale.x = this.scale.y = value;
        this.back.scale.y = this.back.scale.x = Math.max(this.soul.OH/this.back.texture.height/value, this.soul.OW/this.back.texture.width/value);

    }
});