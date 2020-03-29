HH.Img = function(name, id, scale, px, py, anchor) {
    var t = GodStep.textures[name];
    if(!t) {
        var str;
        if(id < 0) {
            str = '';
        } else {
            str = '00' + ((id + '').length < 2 ? '0' + id : id);
        }
        t = PIXI.Texture.fromFrame(name + str);
    }
    GodStep.Image.call(this, t);

    this.name=name;
    this.Scale = scale /GodStep.IMAGE_RESOLUTION * GodStep.SCALE;
    if(anchor == 0.5) {
        this.anchor = new PIXI.Point(.5, .5);
    } else {
        if(anchor) {
            this.anchor = anchor;
        }
    }
    this.place(px, py);

}; extend(HH.Img, Games.Img);

pro.setTexture = function(name) {
    var tex = GodStep.textures[name];
    if(!tex) {
        tex = PIXI.Texture.fromFrame(name);
    }
    PIXI.Sprite.prototype.setTexture.call(this, tex);
};