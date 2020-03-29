HH.Background = function (soul) {
    this.S = soul;
    PIXI.DisplayObjectContainer.call(this);
    this.layer1 = [];
    this.layer2 = [];
    this.layer3 = [];


}; extend(HH.Background, PIXI.DisplayObjectContainer);

pro.update = function () {
    var tmp, i;
    this.moveLayer(this.layer1, this.speed1);
    this.moveLayer(this.layer2, this.speed2);
    this.moveLayer(this.layer3, this.speed3);
};
pro.moveLayer = function (layer, speed) {
    var tmp;
    if(layer.length > 0) {
        for(var i = 0; i<layer.length; i++) {
            layer[i].x -= speed;
        }
        if(layer[0].x < -layer[0].W) {
            tmp = layer[0];
            layer.splice(0, 1);
            layer.push(tmp);
            tmp.x = layer[0].x + layer[0].W - 3;
        }
    }
};
pro.init = function (level) {
    var levID = level;
    var addSpeed1 = 1;
    var addSpeed2 = 1;
    var addSpeed3 =1;
    switch (level) {
        case 12:
            levID = 12;
            addSpeed1 = 5.9;
            addSpeed2 = 4.1;
            addSpeed3 = 1.1;
            break;
        case 11:
            levID = 9;
            addSpeed2 = 1.7;
            break;
        case 10:
            levID = 5;
            addSpeed2 = 3;
            break;
        case 9:
            levID = 3;
            addSpeed1 = 19;
            break;
        case 8:
            levID = 11;
            addSpeed1 = 3.9;
            addSpeed2 = 2.9;
            break;
        case 7:
            levID = 8;
            addSpeed1 = 1;
            addSpeed3 = .35;
            break;
        case 6:
            levID = 7;
            addSpeed1 = 5.5;
            addSpeed2 = 7;
            break;
        case 5:
            levID = 4;
            addSpeed1 = 4.5;
            addSpeed2 = 6;
            break;
        case 4:
            levID = 10;
            addSpeed2 = 4.5;
            addSpeed3 = 1.5;
            break;
        case 3:
            levID = 6;
            break;
    }
    this.speed1 = HH.SPEED1 * addSpeed1;
    this.speed2 = HH.SPEED2 * addSpeed2;
    this.speed3 = HH.SPEED3 * addSpeed3;
    while(this.layer1.length) {
        this.removeChild(this.layer1[0]);
        this.layer1.splice(0, 1);
    }
    while(this.layer2.length) {
        this.removeChild(this.layer2[0]);
        this.layer2.splice(0, 1);
    }
    while(this.layer3.length) {
        this.removeChild(this.layer3[0]);
        this.layer3.splice(0, 1);
    }
    var layerPos = HH.BACKGROUNDS[level-1];
    var layer, i;
    for(i = 0; i<2; i++) {
        if(!isNaN(layerPos[0])) {
            this.addChild(layer = new HH.Img('bg' + levID + 'a', 0, 1, 0,  HH.GAME_H * layerPos[0], new PIXI.Point(0, 0)));
            this.layer1.push(layer);
            layer.W = layer.width;
            layer.x = parseInt((this.layer1.length - 1) * (layer.width - 3));
        }
    }
    for(i = 0; i<2; i++) {
        if (!isNaN(layerPos[1])) {
            this.addChild(layer = new HH.Img('bg' + levID + 'b', 0, 1, 0, HH.GAME_H * layerPos[1], new PIXI.Point(0, 0)));
            this.layer2.push(layer);
            layer.W = layer.width;
            layer.x = parseInt((this.layer2.length - 1) * (layer.width - 3));
        }
    }
    for(i = 0; i<2; i++) {
        if(!isNaN(layerPos[2])) {
            this.addChild(layer = new HH.Img('bg' + levID + 'c', 0, 1, 0, HH.GAME_H * layerPos[2], new PIXI.Point(0, 1)));
            layer.W = layer.width;
            this.layer3.push(layer);
            layer.x = parseInt((this.layer3.length - 1) * (layer.width - 3));
        }
    }

};