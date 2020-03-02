var g_Background = null;

var Background = cc.Layer.extend({
    p_lanes: [],
    e_lanes: [],

	ctor:function() {
		this._super();
		g_Background = this;

        var bg = new cc.Sprite(res.p_bg_png);
        this.addChild(bg);
        bg.setAnchorPoint(0, 0);

        // this.init();
	},

    init:function() {
        this.p_lanes.push(cc.p(GC.SCREEN.SIZE.WIDTH * 0.2375, 85));
        this.p_lanes.push(cc.p(GC.SCREEN.SIZE.WIDTH * 0.4750, 85));
        this.p_lanes.push(cc.p(GC.SCREEN.SIZE.WIDTH * 0.7150, 85));

        var h = GC.SCREEN.SIZE.HEIGHT - 320;
        this.e_lanes.push(cc.p(GC.SCREEN.SIZE.WIDTH * 0.355, h));
        this.e_lanes.push(cc.p(GC.SCREEN.SIZE.WIDTH * 0.545, h));
        this.e_lanes.push(cc.p(GC.SCREEN.SIZE.WIDTH * 0.73, h));

        // this.lanes();

        GC.LANES.PLAYER = this.p_lanes;
        GC.LANES.ENEMY = this.e_lanes;
    },

    lanes:function() {
        for (var i = 0; i < this.p_lanes.length; i++) {
            var lane = new cc.Sprite(res.p_lanes_png);
            lane.setPosition(this.p_lanes[i]);
            lane.setScaleX(2);
            lane.setOpacity(200);
            this.addChild(lane);

            var elane = new cc.Sprite(res.p_lanes_png);
            elane.setPosition(this.e_lanes[i]);
            elane.setScaleX(1.75);
            elane.setScaleY(0.70);
            elane.setOpacity(200);
            this.addChild(elane);
        }
    }
});