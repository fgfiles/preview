
var Preloader = cc.Scene.extend({
    _interval : null,
    _label : null,
    _className:"PreloaderScene",
    _layerBgBar:null,
    _layerBar:null,
    
    ctor:function() {
        this._super();
        
        // Note: Change cc._loaderImage value to Base64 version of image.
        cc._loaderImage = "data:image/png;base64,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";
    },
    
    init:function(){
        var self = this;

        // Note: Change color of bars based on game's theme.
        var barBgColor   = cc.color(115,  199,  211, 255);
        var barForeColor = cc.color(193, 57, 93, 255);
        
        // Background
        var bgLayer = self._bgLayer = new cc.LayerColor(cc.color(255, 255, 255, 255));
        self.addChild(bgLayer, 0);
        
        // Logo
        var logoWidth = 180;
        var logoHeight = 180;
        var fontSize = 25;
        
        if(cc._loaderImage) 
        {
            //loading logo
            cc.loader.loadImg(cc._loaderImage, { isCrossOrigin : false }, function(err, img) {
                logoWidth = img.width;
                logoHeight = img.height;
                self._initStage(img, cc.visibleRect.center);
            });
        }
        
        // Loading percent
        var label = self._label = new cc.LabelTTF("LOADING", "Arial", fontSize);
        label.setPosition(cc.pAdd(cc.visibleRect.center, cc.p(0, -logoHeight)));
        label.setColor(cc.color(255, 255, 255));
        label.enableShadow( 0, -1, 255, 2 );
        self.addChild(this._label, 10);
        
        this._layerBgBar = new cc.LayerColor(barBgColor, 500, 40 );
        this._layerBgBar.setPosition(cc.pAdd( cc.visibleRect.center, cc.p(0, -logoHeight)));
        this._layerBgBar.setAnchorPoint( 0.5, 0.5 );
        this._layerBgBar.ignoreAnchorPointForPosition( false );
        self.addChild(this._layerBgBar, 0);

        this._layerBar = new cc.LayerColor(barForeColor, 500, 40 );
        this._layerBar.setPosition( 0, 0 );
        this._layerBar.setAnchorPoint( 0.0, 0.5 );
        this._layerBgBar.addChild(this._layerBar, 0);

        this._layerBar.setScaleX( 0.0 );
        
        return true;
    },
    
    _initStage: function (img, centerPos) {
        var self = this;
        var texture2d = self._texture2d = new cc.Texture2D();
        texture2d.initWithElement(img);
        texture2d.handleLoadedTexture();
        var logo = self._logo = new cc.Sprite(texture2d);
        logo.setScale(cc.contentScaleFactor());
        logo.x = centerPos.x;
        logo.y = centerPos.y;
        self._bgLayer.addChild(logo, 10);
    },
    
    onEnter: function () {
        var self = this;
        cc.Node.prototype.onEnter.call(self);
        self.schedule(self._startLoading, 0.3);
    },
    
    onExit: function () {
        cc.Node.prototype.onExit.call(this);
        var tmpStr = "LOADING";
        this._label.setString(tmpStr);
    },
    
    initWithResources: function (resources, cb) {
        if(cc.isString(resources))
            resources = [resources];
        this.resources = resources || [];
        this.cb = cb;
    },

    _startLoading: function () {
        var self = this;
        self.unschedule(self._startLoading);
        var res = self.resources;
        cc.loader.load(res,
            function (result, count, loadedCount) {
                
                self._layerBar.setScaleX( Math.min( loadedCount / count, 1 ) );
                
                var percent = (loadedCount / count * 100) | 0;
                percent = Math.min(percent, 100);
                //self._label.setString("Loading... " + percent + "%");
            }, function () {
                if (self.cb)
                    self.cb();
            });
    }
});

Preloader.preload = function(resources, cb){
    var _cc = cc;
    if(!_cc.loaderScene) {
        _cc.loaderScene = new Preloader();
        _cc.loaderScene.init();
    }
    _cc.loaderScene.initWithResources(resources, cb);

    cc.director.runScene(_cc.loaderScene);
    return _cc.loaderScene;
};