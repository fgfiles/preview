HH.Pop = function (s, type) {
    PIXI.DisplayObjectContainer.call(this);

    this.ttype = type;
    this.addChild(this.img = new HH.Img(type == 1 ? 'pop_quest' : 'pop_unlocked', 0, s, 0, 0, new PIXI.Point(0, 0.5)));
    this.addChild(this.label = new HH.Text(type == 1 ? HH.S('complete') : HH.S('new'), 1, type == 1 ? 50 * s : 45 * s, 0, 0, 'left', type == 1 ? HH.RED : 0xaaffaa));
    this.addChild(this.label2 = new HH.Text(type == 1 ? HH.S('complete') : HH.S('new'), 1, type == 1 ? 50 * s : 45 * s, 0, 0, 'left', type == 1 ? 0xffffff : 0xffffff));
    this.addChild(this.g = new PIXI.Graphics());
    this.g.beginFill(0, 1);
    this.g.drawRect(0, -this.img.height/2, this.img.height * .5, this.img.height);
    this.label2.mask = this.g;
    this.w = 40 * s;
    this.W = this.img.width;

    this.label2.x = this.label.x = this.img.width *(type == 1 ? .45 : .53) -this.label.width/2;
    this.label2.y = this.label.y = -this.label.height * (type == 1 ? .92 : 1);
    this.type = type;
    this.timer = 0;

    this.webtexts = [];

}; extend(HH.Pop, PIXI.DisplayObjectContainer);

pro.start = function () {
    GS.WebText.deleteAll(this.webtexts);

    this.timer = 50;
    this.g.x = Math.random() * this.W;
    this.phase = Math.random();
    this.visible = true;

    var webElem;
    var S = this.parent.soul;
    var s = this.parent.soul.startS * 2.8;
    this.label.alpha = 0;
    if(HH.IS_ARAB) {
        var size = 60 * (this.ttype == 1 ? 1 : .7);
        this.webtexts.push(webElem = new GS.WebText(this.label.text, size * s, 'wf1', (this.ttype == 1 ? '#ff0000' : '#aaffaa'), S, this.label)); webElem.dx = -1 * s; webElem.dy = - 1* s;
        this.label.sdx = + 20 * s * (this.ttype == 1 ? 1.9 : .8);
        this.label2.visible = false;
    }
};
pro.destroy = function () {
    GS.WebText.deleteAll(this.webtexts);
};
pro.init = function () {
    this.visible = false;
    switch (this.type) {
        case 1:
            this.x = -this.img.width;
            this.fx = 0;
            this.speedX = 1;
            break;
        case 2:
            this.fx = -this.img.height * 1.9;
            this.x = this.img.width;
            this.speedX = -1;
            break;
    }
};
pro.update = function () {
    if(this.visible) {
        if(this.timer > 0) {
            this.timer--;
            this.label.alpha = 0;
        } else {
            this.label.alpha = Math.sin(this.phase) * .3 + .6;
            if(HH.IS_ARAB) {
                this.label.web.dx = this.x - this.label.sdx;
                this.label.web.dy = this.y;
            }


            this.phase += .1;
            this.x += this.speedX * this.w;
            if(Math.abs(this.x - this.fx) < this.w * .9) {
                this.speedX = 0;
                this.x =  this.fx;
                this.g.x +=  this.w *.5;
                if(this.g.x > this.W) {
                    this.g.x = 0;
                }

            }
        }

    }
};