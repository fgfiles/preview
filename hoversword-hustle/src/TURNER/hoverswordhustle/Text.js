HH.Text = function(text, f, size, x, y, align, tint) {
    var font = f;
    if(font == 2) font = 3;
    else if(font == 3) font = 2;

    trace('f ' + font);
    PIXI.BitmapText.call(this, text, {font: parseInt(size) + "px font" + font, align: align || "left"});
    this.x = x;
    this.y = y;
    if(tint) this.tint = tint;
    this.updateText();
};

extend(HH.Text, PIXI.BitmapText);
