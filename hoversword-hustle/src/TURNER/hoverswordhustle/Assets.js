HH.Assets = function(soul) {
    var a = HH.IS_ARAB ? 'a' : '';
    GodStep.DONT_RESIZE = ['font3' + a, 'font2' + a, 'font3' + a];
    GodStep.Preloader.call(this, soul);
    this.fontLoaderClass = [HH.Font1, HH.Font2, HH.Font3];
    GodStep.loadingCallback = this.load_callback;

    HH.preloader = this;

    HH.PROGRESSBAR_POS = [.487, .615];
    HH.PROGRESSBAR_Y = [.487, .6];
    HH.PRELOADER = [.49, .45, .92];
};

extend(HH.Assets, GodStep.Preloader);

pro.load_callback = function(v) {
    var p = HH.preloader;
    var g = HH.preloader.graphics;

    if(p.loading_top.mask) {
        p.load1.mask.y = p.loading_top.mask.y = p.loading_top.y - p.loading_top.height/2;
        p.load1.mask.x = p.loading_top.mask.x = p.loading_top.x + v * p.loading_top.width - p.loading_top.width * 1.5;
    }

};
pro.update = function () {
    GodStep.Preloader.prototype.update.call(this);

    if(this.load1.sp) {
        this.load1.x += 3;
        if(this.load1.x > this.load1.sp.x + this.load1.width/8) {
            this.load1.x = this.load1.sp.x;
        }
    }
};
pro.load = function() {
    this.addChild(this.preloader_img = GodStep.Image.fromImage( HH.IMAGE_PATH + 'preloader.jpg', this.h_preload));
    this.addChild(this.loading_top = GodStep.Image.fromImage( HH.IMAGE_PATH + 'loading_top.png', this.h_preload));
    this.addChild(this.maska = GodStep.Image.fromImage( HH.IMAGE_PATH + 'loading_top.png', this.h_preload));
    this.addChild(this.load1 = GodStep.Image.fromImage( HH.IMAGE_PATH + 'load1.png', this.h_preload));
    this.addChild(this.loading = GodStep.Image.fromImage( HH.IMAGE_PATH + 'loading.png', this.h_preload)); //this.loading.visible = false;
    this.loading_top.anchor = this.maska.anchor = new PIXI.Point(.5, .5);
    var countLoaded = 0;

    var s =  Math.min(this.soul.OH / this.soul.H, this.soul.OW / this.soul.W) * this.startS *3.15;
    if(this.loading_top.texture.baseTexture.hasLoaded) {
        this.maska.Scale = s;
        this.loading_top.Scale = s;
        this.maska.anchor = new PIXI.Point(0.5, 0.5);
        this.loading_top.anchor = new PIXI.Point(0.5, 0.5);
        this.maska.place(this.W * HH.PROGRESSBAR_POS[0], this.H *HH.PROGRESSBAR_POS[1]);
        this.loading_top.place(this.W * HH.PROGRESSBAR_POS[0], this.H *HH.PROGRESSBAR_POS[1]);
        this.maska.texture.baseTexture.isLoader = true;
        this.loading_top.texture.baseTexture.isLoader = true;

        var g = this.loading_top.mask = new PIXI.Graphics();
        this.addChild(g);
        this.loading_top.mask.beginFill(0xffffff, 1).drawRect(0, 0,  this.loading_top.width,  this.loading_top.height).endFill();

        countLoaded++;
    }
    if(this.load1.texture.baseTexture.hasLoaded) {
        this.load1.Scale = s;
        this.load1.anchor = new PIXI.Point(0.5, 0.5);
        this.load1.place(this.W * HH.PROGRESSBAR_Y[0], this.H * HH.PROGRESSBAR_Y[1]);
        this.load1.texture.baseTexture.isLoader = true;
        countLoaded++;
    }
    if(this.preloader_img.texture.baseTexture.hasLoaded) {
        this.preloader_img.Scale = HH.PRELOADER[2] * s;
        this.preloader_img.anchor = new PIXI.Point(0.5, 0.5);
        this.preloader_img.place(this.W * HH.PRELOADER[0], this.H * HH.PRELOADER[1]);
        this.preloader_img.texture.baseTexture.isLoader = true;
        countLoaded++;
    }
    if(this.loading.texture.baseTexture.hasLoaded) {
        this.loading.Scale = s;
        this.loading.anchor = new PIXI.Point(0.5, 0.5);
        this.loading.place(this.W *.489,  this.H *.545);
        this.loading.texture.baseTexture.isLoader = true;

        if(countLoaded == 3) {
            this.init();
        }
    }
};
pro.init = function() {
    var g = this.load1.mask = new PIXI.Graphics();
    this.addChild(g);
    this.load1.mask.beginFill(0xffffff, 1).drawRect(0, 0,  this.loading_top.width,  this.loading_top.height).endFill();
    this.load1.sp = new PIXI.Point(this.load1.x, this.load1.y);
    var a = HH.IS_ARAB ? 'a' : '';
    var pngs = [
        'font1' + a, 'font2'+ a, 'font3'+ a,'backs1', 'backs2', 'gameplay1', 'gameplay2', 'menus', 'menus2', 'swords1', 'swords2',
        'rotate'
    ];
    this.spriteSheets= [ 'backs1.json', 'backs2.json', 'gameplay1.json', 'gameplay2.json', 'menus.json', 'menus2.json', 'swords1.json', 'swords2.json'];

    GodStep.Preloader.prototype.loadAll.call(this,
        HH.IMAGE_PATH, pngs, [],
        HH.SOUND_PATH,  ['zbat', 'zblowdry', 'zboulder', 'zbubble', 'zbubblehit', 'zcactus', 'zchainsaw', 'zchoose'
            //*
             ,'zclick', 'zcrate', 'zcrow', 'zdragon', 'zexplode', 'zfanfare', 'zgot', 'zhit1', 'zhit2',
            'zhittree', 'zlaser', 'zlobster', 'zloop', 'zloop1', 'zmagnet', 'zmighty', 'zmiss',
            'znewsword', 'zpop', 'zsizzle', 'zslam', 'zsleep', 'zsnowball', 'zsplat', 'zsword', 'zsword1',
            'zsword2', 'zsword3', 'zsword4', 'zsword5', 'zsword6', 'zsword7', 'zsword8', 'zsword9', 'zsword10',
            'zsword11', 'zsword12', 'ztomato', 'ztree1', 'zufohit', 'zwin', 'zzzz'
            //*/
        ], ['font1', 'font2', 'font3']);
};
pro.loadAssets=function(){
    if(this.spriteSheets){
        for(var i=0;i<this.spriteSheets.length;i++){
            this.spriteSheets[i] = HH.IMAGE_PATH+this.spriteSheets[i];
        }
        var loader=new PIXI.AssetLoader(this.spriteSheets);
        loader.preloader=this;
        loader.onComplete=this.h_spriteSheets;
        loader.load();
    }else{
        GodStep.Preloader.prototype.loadAssets.call(this);
    }
};
pro.h_spriteSheets=function(e){
    GodStep.Preloader.prototype.loadAssets.call(this.preloader);
};
pro.h_preload = function(e) {
    var img = this.image;
    var p = img.parent;
    img.Scale = p.startS;
    img.anchor = new PIXI.Point(0.5, 0.5);
    p.preloadState++;
    var s =  Math.min(p.soul.OH / p.soul.H, p.soul.OW / p.soul.W) * p.startS *3.15;
    switch (img) {
        case p.maska:
        case p.loading_top:
            p.maska.scale.x = p.maska.scale.y = p.loading_top.scale.x = p.loading_top.scale.y = s;
            p.maska.place(p.W*HH.PROGRESSBAR_POS[0],  p.H *HH.PROGRESSBAR_POS[1]);
            p.loading_top.place(p.W*HH.PROGRESSBAR_POS[0],  p.H *HH.PROGRESSBAR_POS[1]);
            p.maska.texture.baseTexture.isLoader = true;
            p.loading_top.texture.baseTexture.isLoader = true;
            p.loading_top.anchor =
            p.maska.anchor = new PIXI.Point(.5, .5);
            if(!p.loading_top.mask) {
                var g = p.loading_top.mask = new PIXI.Graphics();
                p.addChild(g);
                p.loading_top.mask.beginFill(0xffffff, 1).drawRect(0, 0,  p.loading_top.width,  p.loading_top.height).endFill();
                p.maska.visible = false;
            }
            break;
        case p.load1:
            p.load1.scale.x = p.load1.scale.y = s;
            p.load1.place(p.W * HH.PROGRESSBAR_Y[0], p.H * HH.PROGRESSBAR_Y[1]);
            p.load1.texture.baseTexture.isLoader = true;
            break;
        case p.loading:
            p.loading.scale.x = p.loading.scale.y = s;
            p.loading.place(p.W *.489,  p.H *.545);
            p.loading.texture.baseTexture.isLoader = true;
            break;
        case p.preloader_img:
            p.preloader_img.anchor = new PIXI.Point(0.5, 0.5);
            p.preloader_img.scale.x = p.preloader_img.scale.y = HH.PRELOADER[2] * s;
            p.preloader_img.place(p.W * HH.PRELOADER[0], p.H * HH.PRELOADER[1]);
            p.preloader_img.texture.baseTexture.isLoader = true;
            break;
    }
    if(p.preloadState == 5) {
     //   p.removeChild(p.maska);
      //  p.loading.mask = p.maska;
        p.init();
    }
};