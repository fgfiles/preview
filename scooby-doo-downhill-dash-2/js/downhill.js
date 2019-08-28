(function() {
    function aa(a, b) {
        function d() {}
        d.prototype = b.prototype;
        a.Wi = b.prototype;
        a.prototype = new d;
        a.prototype.constructor = a
    };
    var c = {};

    function l() {
        this.sd = "";
        this.ye = this.ze = !1;
        this.Ae = [];
        this.Zf = [];
        this.Pd = null;
        this.sd = "";
        this.ye = this.ze = !1;
        this.Ae = [];
        this.Zf = [];
        this.Pd = null
    }
    var m = l.prototype;
    l.prototype.group = function(a) {
        this.sd = a;
        return this
    };

    function ba() {
        var a = new l;
        a.ze = !0;
        return a
    }

    function ca() {
        var a = new l;
        a.ye = !0;
        return a
    }
    l.prototype.transition = function(a) {
        this.Pd = a;
        return this
    };

    function n() {
        PIXI.DisplayObjectContainer.call(this);
        this.group = this.yg = "";
        this.params = null
    }
    n.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
    n.prototype.constructor = n;
    m = n.prototype;
    m.rc = function() {};
    m.activate = function() {};
    m.resize = function() {};
    m.dispose = function() {
        this.removeChildren();
        this.yg = "";
        this.params = this.group = null
    };
    m.update = function() {};

    function p(a, b) {
        n.call(this);
        this.bg = a;
        this.ag = b;
        this.oa = r();
        this.ub = this.oa.ub;
        this.Jf = !1;
        this._text = this.Zd = this.Za = this.Ea = null;
        this._init()
    }
    p.prototype = Object.create(n.prototype);
    p.prototype.constructor = p;
    m = p.prototype;
    m._init = function() {
        var a = new PIXI.Graphics;
        a.beginFill(8859527);
        a.drawRect(0, 0, this.bg, this.ag);
        a.endFill();
        this.addChild(a);
        a = new PIXI.DisplayObjectContainer;
        a.x = Math.floor(.5 * this.bg);
        a.y = Math.floor(.5 * this.ag) + 50;
        this.addChild(a);
        var b = [this.oa.U("loader_animation0001"), this.oa.U("loader_animation0002"), this.oa.U("loader_animation0003"), this.oa.U("loader_animation0004"), this.oa.U("loader_animation0005"), this.oa.U("loader_animation0006"), this.oa.U("loader_animation0007"), this.oa.U("loader_animation0008"),
            this.oa.U("loader_animation0009"), this.oa.U("loader_animation0010")
        ];
        this.Ea = new PIXI.MovieClip(b);
        this.Ea.animationSpeed = .4;
        this.Ea.gotoAndStop(0);
        this.Ea.stop();
        this.Ea.loop = !1;
        this.Ea.anchor.x = .5;
        this.Ea.anchor.y = 1;
        this.Ea.x += 50;
        this.Ea.y -= 20;
        a.addChild(this.Ea);
        this.Za = this.oa.fa("preloader_bar");
        this.Za.anchor.y = .5;
        this.Za.x -= .5 * this.Za.width;
        this.Za.scale.x = 0;
        a.addChild(this.Za);
        this.Zd = this.oa.fa("preloader_overlay", !0);
        a.addChild(this.Zd);
        this._text = new PIXI.Text("0%", {
            font: "28px Arial",
            fill: "#FFFFFF"
        });
        this._text.anchor.x = .5;
        this._text.position.y += 50;
        a.addChild(this._text)
    };
    m.rc = function() {};
    m.activate = function() {};
    m.position = function() {};
    m.dispose = function() {
        this.removeChildren();
        this._text = this.Zd = this.Za = this.Ea = this.Pc = this.ub = this.oa = null;
        n.prototype.dispose.call(this)
    };
    m.Yi = function(a) {
        TweenMax.to(this.Za.scale, .5, {
            x: Math.floor(a / 100),
            onUpdate: this.ki,
            onUpdateScope: this
        });
        100 <= a && !this.Jf && (this.Jf = !0, this.Ea.gotoAndPlay(0))
    };
    m.ki = function() {
        this._text.setText(Math.floor(100 * this.Za.scale.x) + "%")
    };

    function s() {
        n.call(this);
        this.Ba = new signals.Signal;
        this.nb = new signals.Signal;
        var a = r();
        this.Z = new PIXI.DisplayObjectContainer;
        this.Z.position.x = t;
        this.Z.position.y = -54;
        this.addChild(this.Z);
        var b = a.fa("wooden_board", !0);
        b.anchor.y = 0;
        b.position.y = 190;
        this.Z.addChild(b);
        b = a.fa("rope_left", !0);
        b.anchor.y = 0;
        b.position.x = -348;
        b.position.y = -80;
        this.Z.addChild(b);
        b = a.fa("rope_right", !0);
        b.anchor.y = 0;
        b.position.x = 348;
        b.position.y = -80;
        this.Z.addChild(b);
        b = a.fa("tutorial_image", !0);
        b.position.y = 440;
        this.Z.addChild(b);
        var d = "Thsiuhdfka akjsadf ha jshd giuhs ksjdhfklai a \n sjkdfh asdhajksdf saiuhdf sdhfj laskdf lasdjf hnsa jkaus sadfiuh i iuhdf",
            d = a.wc("copy"),
            d = v ? d.instructions_mobile_1 + "\n" + d.instructions_mobile_2 : d.instructions_desktop_1 + "\n" + d.instructions_desktop_2;
        this.wd = new w(d, a.lb("open_sans_condensed_35"), "center");
        this.wd.y = 215;
        this.Z.addChild(this.wd);
        v ? (d = [a.U("tutorial_button0001"), a.U("tutorial_button0002"), a.U("tutorial_button0003"), a.U("tutorial_button0004"), a.U("tutorial_button0005")], this.$a =
            new PIXI.MovieClip(d), this.$a.animationSpeed = .2, this.$a.anchor.x = .5, this.$a.anchor.y = .5, this.$a.play(), this.$a.position.x = -295, this.$a.scale.x *= -1, b.addChild(this.$a), this.Cb = new PIXI.MovieClip(d), this.Cb.animationSpeed = .2, this.Cb.anchor.x = .5, this.Cb.anchor.y = .5, this.Cb.gotoAndPlay(3), this.Cb.position.x = 295, b.addChild(this.Cb)) : (d = [a.U("tutorial_keys0001"), a.U("tutorial_keys0002"), a.U("tutorial_keys0003"), a.U("tutorial_keys0004")], this.sb = new PIXI.MovieClip(d), this.sb.animationSpeed = .05, this.sb.anchor.x =
            .5, this.sb.anchor.y = .5, this.sb.play(), this.sb.position.x = 230, this.sb.position.y = 50, b.addChild(this.sb));
        this.la = da();
        this.addChildAt(this.la, 0);
        var b = a.U("but_play_default"),
            d = a.U("but_play_rollover"),
            e = a.U("but_play_pressed"),
            f = a.U("but_home_default"),
            g = a.U("but_home_rollover"),
            h = a.U("but_home_pressed"),
            k = a.U("but_soundon_default"),
            q = a.U("but_soundon_rollover"),
            u = a.U("but_soundon_pressed"),
            L = a.U("but_soundoff_default"),
            ia = a.U("but_soundoff_rollover"),
            a = a.U("but_soundoff_pressed");
        this.ja = new x(b,
            d, e);
        this.ja.ra.addOnce(this.Fb, this);
        this.ja.ta.add(this.wb, this);
        this.ja.position.y = 640;
        this.Z.addChild(this.ja);
        TweenMax.to(this.ja.scale, .4, {
            yoyo: !0,
            repeat: -1,
            x: 1.1,
            y: 1.1,
            ease: Power1.easeInOut
        });
        this.ia = new x(f, g, h);
        this.ia.ra.addOnce(this.se, this);
        this.ia.ta.add(this.wb, this);
        this.addChild(this.ia);
        this.X = new y(L, ia, a, k, q, u);
        this.X.ra.addOnce(this.lc, this);
        this.X.ta.add(this.wb, this);
        this.addChild(this.X);
        this.Sa = this.Rc.bind(this);
        z.add(this.Sa);
        this.visible = !1;
        this.la.alpha = 0;
        this.Z.position.y = -A;
        this.ia.scale.x = this.ia.scale.y = 0;
        this.X.scale.x = this.X.scale.y = 0
    }
    s.prototype = Object.create(n.prototype);
    s.prototype.constructor = s;
    m = s.prototype;
    m.rc = function() {};
    m.activate = function() {
        this.Xd();
        this.visible = !0
    };
    m.resize = function() {
        this.Z.position.x = t;
        this.ia.position.x = Math.floor(.5 * this.ia.getBounds().width) + ea;
        this.ia.position.y = Math.floor(.5 * this.ia.getBounds().height) + B;
        this.X.position.x = -Math.floor(.5 * this.X.getBounds().width) + C - fa;
        this.X.position.y = Math.floor(.5 * this.X.getBounds().height) + B;
        this.la.width = C;
        this.la.height = A
    };
    m.dispose = function() {
        this.nb.removeAll();
        this.nb = null;
        this.Ba.removeAll();
        this.Ba = null;
        this.ia.dispose();
        this.ia = null;
        this.ja.dispose();
        this.ja = null;
        this.X.dispose();
        this.la = this.wd = this.Z = this.X = null;
        v ? this.Cb = this.$a = null : this.sb = null;
        z.remove(this.Sa);
        this.Sa = null;
        this.removeChildren();
        n.prototype.dispose.call(this)
    };
    m.Xd = function() {
        var a = .4,
            b = .1;
        v && (a = .6, b = .3);
        TweenMax.to(this.la, a, {
            delay: b,
            alpha: 1,
            ease: Power1.easeOut
        });
        TweenMax.to(this.Z, a, {
            delay: b,
            y: -54,
            ease: Back.easeOut
        });
        TweenMax.to(this.ia.scale, a, {
            delay: b + .3,
            x: 1,
            y: 1,
            ease: Back.easeOut
        });
        TweenMax.to(this.X.scale, a, {
            delay: b + .3,
            x: 1,
            y: 1,
            ease: Back.easeOut
        })
    };
    m.Dc = function(a) {
        TweenMax.to(this.la, .2, {
            alpha: 0,
            ease: Power1.easeOut
        });
        TweenMax.to(this.Z, .2, {
            y: -A,
            ease: Power1.easeOut
        });
        TweenMax.to(this.ia.scale, .2, {
            x: 0,
            y: 0,
            ease: Power1.easeOut
        });
        TweenMax.to(this.X.scale, .2, {
            x: 0,
            y: 0,
            ease: Power1.easeOut
        });
        TweenMax.delayedCall(.2, function() {
            a.dispatch()
        }, null, this)
    };
    m.Rc = function(a) {
        32 == a && this.Fb()
    };
    m.Fb = function() {
        D().ya("sfx_click");
        this.Dc(this.Ba)
    };
    m.se = function() {
        D().ya("sfx_click");
        this.Dc(this.nb)
    };
    m.lc = function() {
        D().ya("sfx_click")
    };
    m.wb = function() {
        D().ya("sfx_rollover")
    };

    function ga() {
        this.gd = new signals.Signal;
        this.kd = new signals.Signal;
        this.jd = new signals.Signal;
        this.Xf = this.Eb = this.Gb = this.qb = 0;
        this.reset()
    }
    m = ga.prototype;
    m.dispose = function() {
        this.gd.removeAll();
        this.gd = null;
        this.kd.removeAll();
        this.kd = null;
        this.jd.removeAll();
        this.jd = null
    };
    m.Li = function() {
        this.qb > this.Xf && (this.Xf = this.qb, E().track(new F("endgame_personnalbest")))
    };
    m.reset = function() {
        this.Gb = this.qb = 0;
        this.Eb = 3
    };
    m.sj = function() {
        return this.qb
    };
    m.Mi = function(a) {
        this.qb = a;
        this.gd.dispatch(this.qb)
    };
    m.Uj = function() {
        return this.Gb
    };
    m.Qi = function() {
        this.Gb = G.Gb + 1;
        this.kd.dispatch(this.Gb)
    };
    m.Pj = function() {
        return this.Eb
    };
    m.Pi = function() {
        this.Eb = G.Eb - 1;
        this.jd.dispatch(this.Eb)
    };

    function ha(a) {
        this.params = a;
        this.Td = new signals.Signal;
        this.df = new signals.Signal;
        this.window = window = window.self;
        this.backgroundImage = this.va = null;
        this.height = this.width = 0;
        this.orientation = "";
        this.zd = !1;
        this.eg = "";
        this.sa = document.getElementById(this.params.Ag);
        this.ma = document.getElementById(this.params.qi);
        v = this.uh();
        this.Hf();
        H = this.sh();
        this.ph();
        this.oh();
        this.qh();
        this.eg = this.params.width > this.params.height ? "landscape" : "portrait";
        H && this.nh();
        this.bh()
    }
    var H, I = null,
        C = 0,
        A = 0,
        t = 0,
        J = 0,
        ea = 50,
        fa = 50,
        B = 50,
        v = !1,
        m = ha.prototype;
    m.init = function(a) {
        a ? (this.sa.style.width = this.params.width + "px", this.sa.style.height = this.params.height + "px", C = this.width = this.params.width, A = this.height = this.params.height, this.Td.dispatch(), this.df.dispatch(!0)) : (this.window.addEventListener("resize", this.Vf.bind(this), !1), this.$f(), a = this.uf(), this.gg(!a), a ? (this.zd = !0, this.Td.dispatch()) : this.zd = !1, this.Vf())
    };
    m.Zi = function() {
        var a = A;
        C = this.width = Math.floor(C);
        A = this.height = Math.floor(a);
        t = Math.floor(.5 * C);
        J = Math.floor(.5 * A)
    };
    m.ph = function() {
        if (document.getElementById("gameHolder")) throw Error("[p3.Canvas] There is already a div/holder with that id on the page, are you using it? : gameHolder");
        this.sa || (this.sa = document.createElement("div"), this.sa.id = "gameHolder", document.body.appendChild(this.sa));
        this.sa.style.left = 0;
        this.sa.style.top = 0;
        this.sa.style.overflow = "visible";
        this.sa.style.position = "absolute";
        this.sa.style.width = this.window.innerWidth + "px";
        this.sa.style.height = this.window.innerHeight + "px"
    };
    m.oh = function() {
        if (document.getElementById("gameCanvas")) throw Error("[p3.Canvas] There is already a canvas with that id on the page, are you using it? : gameCanvas");
        this.ma || (this.ma = document.createElement("canvas"), this.ma.id = "gameCanvas");
        this.ma.style.position = "absolute";
        this.ma.style.left = "0";
        this.ma.style.top = "0";
        this.ma.style.bottom = "0";
        this.ma.style.right = "0";
        this.ma.style.width = "100%";
        this.ma.style.height = "100%";
        H && (this.ma.style.margin = "auto", this.ma.style.width = "auto");
        this.ma.style.overflow =
            "visible";
        this.ma.style.display = "block";
        this.sa.appendChild(this.ma);
        this.window.focus();
        this.ma.tabIndex = 1;
        I = this.ma
    };
    m.qh = function() {
        if (document.getElementById("imageOverlay")) throw Error("[p3.Canvas] There is already a div with that id on the page, are you using it? : imageOverlay");
        this.va = document.createElement("div");
        this.va.id = "imageOverlay";
        this.va.style.left = "0";
        this.va.style.top = "0";
        this.va.style.width = "auto";
        this.va.style.height = "100%";
        this.va.style.marginLeft = "auto";
        this.va.style.marginRight = "auto";
        this.va.style.overflow = "visible";
        this.va.style.display = "none";
        this.va.style.backgroundColor = this.params.Gg;
        this.va.style.backgroundImage = "url(" + this.params.Hg + ")";
        this.va.style.backgroundPosition = "50% 50%";
        this.va.style.backgroundRepeat = "no-repeat";
        this.va.style.backgroundSize = "contain";
        this.sa.appendChild(this.va)
    };
    m.nh = function() {
        if (document.getElementById("backgroundImage")) throw Error("[p3.Canvas] There is already a div with that id on the page, are you using it? : backgroundImage");
        this.backgroundImage = document.createElement("div");
        this.backgroundImage.id = "backgroundImage";
        this.backgroundImage.style.left = "0";
        this.backgroundImage.style.top = "0";
        this.backgroundImage.style.height = "100%";
        this.backgroundImage.style.width = "auto";
        this.backgroundImage.style.overflow = "visible";
        this.backgroundImage.style.display = "block";
        this.backgroundImage.style.backgroundImage = "url(" + this.params.rg + ")";
        this.backgroundImage.style.backgroundPosition = "50% 50%";
        this.backgroundImage.style.backgroundRepeat = "no-repeat";
        this.backgroundImage.style.backgroundSize = "auto 100%";
        this.sa.appendChild(this.backgroundImage)
    };
    m.uf = function() {
        this.orientation = this.window.innerWidth > this.window.innerHeight ? "landscape" : "portrait";
        return this.orientation === this.eg
    };
    m.$f = function() {
        H ? (C = this.width = this.params.width, A = this.height = this.params.height) : (C = this.width = this.ma.width = Math.floor(this.window.innerWidth / this.params.width * this.params.width * (this.params.height / this.window.innerHeight)), A = this.height = this.ma.height = this.params.height);
        this.Zi()
    };
    m.gg = function(a) {
        a ? (this.va.style.display = "block", this.ma.style.display = "none") : (this.ma.style.display = "block", this.va.style.display = "none")
    };
    m.uh = function() {
        return "undefined" !== typeof this.window.orientation
    };
    m.Hf = function() {
        return -1 < navigator.userAgent.indexOf("Android") && -1 < navigator.userAgent.indexOf("Mozilla/5.0") && -1 < navigator.userAgent.indexOf("AppleWebKit")
    };
    m.th = function() {
        try {
            return window.self !== window.top
        } catch (a) {
            return !0
        }
    };
    m.sh = function() {
        var a = new RegExp(/AppleWebKit\/([\d.]+)/),
            a = null === a.exec(navigator.userAgent) ? null : parseFloat(a.exec(navigator.userAgent)[1]);
        return this.Hf() && null !== a && 537 > a
    };
    m.ih = function() {
        this.th() ? (this.sa.style.width = "100%", this.sa.style.height = "100%") : (this.sa.style.width = this.window.innerWidth + "px", this.sa.style.height = this.window.innerHeight + "px");
        var a = this.uf();
        a && (this.$f(), this.zd || (this.zd = !0, this.Td.dispatch()));
        this.gg(!a);
        this.df.dispatch(a)
    };
    m.bh = function() {
        H && (I.addEventListener("mousedown", function(a) {
            a.stopPropagation();
            a.preventDefault();
            a.stopImmediatePropagation()
        }, !1), I.addEventListener("mouseup", function(a) {
            a.stopPropagation();
            a.preventDefault();
            a.stopImmediatePropagation()
        }, !1), I.addEventListener("click", function(a) {
            a.stopPropagation();
            a.preventDefault();
            a.stopImmediatePropagation()
        }, !1))
    };
    m.Vf = function() {
        var a = this;
        setTimeout(function() {
            a.ih()
        }, 10)
    };

    function ja() {
        this.height = this.width = 0;
        this.Hg = this.qi = this.Ag = "";
        this.Gg = "#FFFFFF";
        this.rg = ""
    };

    function ka() {}
    ka.prototype.constructor = ka;
    var m = ka.prototype,
        la = new signals.Signal,
        z = new signals.Signal,
        ma = {},
        na = {};

    function oa() {
        I.addEventListener("keyup", function(a) {
            delete ma[a.keyCode];
            delete na[a.keyCode];
            z.dispatch(a.keyCode)
        }, !1);
        I.addEventListener("keydown", function(a) {
            ma[a.keyCode] || (ma[a.keyCode] = !0, na[a.keyCode] = !0, la.dispatch(a.keyCode))
        }, !1);
        I.focus()
    };

    function K(a, b) {
        a = parseInt(a);
        b = (b = parseInt(b)) || 0;
        var d;
        return b < a ? (d = Math.round(Math.random() * (a - b)), Math.round(b + d)) : b > a ? (d = Math.round(Math.random() * (b - a)), Math.round(b - d)) : a
    }

    function pa(a) {
        return a[K(a.length - 1)]
    }

    function qa(a) {
        return (a + "").replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")
    }

    function ra() {
        var a = (new Date).getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(b) {
            var d = (a + 16 * Math.random()) % 16 | 0;
            a = Math.floor(a / 16);
            return ("x" == b ? d : d & 7 | 8).toString(16)
        })
    }

    function da() {
        var a, b, d = C,
            e = A;
        a = 0;
        b = .4;
        var d = d || C,
            e = e || A,
            f = new PIXI.Graphics;
        f.beginFill(a, b);
        f.drawRect(0, 0, d, e);
        a = new PIXI.Sprite(f.generateTexture());
        a.interactive = !0;
        a.buttonMode = !1;
        a.Bg = a.Cg = a.click = a.tap = function() {};
        return a
    };

    function x(a, b, d) {
        PIXI.DisplayObjectContainer.call(this);
        this.xc = a;
        this.Xe = b;
        this.ad = d;
        this.ra = new signals.Signal;
        this.ta = new signals.Signal;
        this.jf = new signals.Signal;
        this.gf = new signals.Signal;
        this.kf = new signals.Signal;
        this.enabled = !0;
        this.Y = new PIXI.Sprite(this.xc);
        this.Y.anchor.x = .5;
        this.Y.anchor.y = .5;
        this.Y.interactive = !0;
        this.Y.buttonMode = !0;
        this.Y.Bg = this.Y.touchstart = this.Eh.bind(this);
        this.Y.Cg = this.Y.touchend = this.Hh.bind(this);
        this.Y.mouseover = this.Fh.bind(this);
        this.Y.mouseout = this.Tf.bind(this);
        this.Y.Di = this.Tf.bind(this);
        this.Y.click = this.Dh.bind(this);
        this.Y.tap = this.Gh.bind(this);
        this.addChild(this.Y)
    }
    x.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
    x.prototype.constructor = x;
    m = x.prototype;
    m.dispose = function() {
        this.ra.removeAll();
        this.gf.removeAll();
        this.kf.removeAll();
        this.ta.removeAll();
        this.jf.removeAll();
        this.jf = this.ta = this.kf = this.gf = this.ra = null;
        this.removeChildren();
        this.ad = this.Xe = this.xc = this.Y = this.Y.Bg = this.Y.touchstart = this.Y.Cg = this.Y.touchend = this.Y.mouseover = this.Y.mouseout = this.Y.Di = this.Y.click = this.Y.tap = null
    };
    m.Eh = function() {
        this.enabled && (null != this.ad && this.Y.setTexture(this.ad), this.gf.dispatch(this))
    };
    m.Hh = function() {
        this.enabled && (this.Y.setTexture(this.xc), this.kf.dispatch(this))
    };
    m.Fh = function() {
        this.enabled && (null != this.Xe && this.Y.setTexture(this.Xe), this.ta.dispatch(this))
    };
    m.Tf = function() {
        this.enabled && (this.Y.setTexture(this.xc), this.jf.dispatch(this))
    };
    m.Dh = function() {
        this.enabled && this.ra.dispatch(this)
    };
    m.Gh = function() {
        this.enabled && this.ra.dispatch(this)
    };
    m.nj = function() {
        return this.Y
    };

    function M() {
        n.call(this);
        this.Ba = new signals.Signal;
        var a = r();
        this.za = a.fa("splash_bg", !0);
        this.addChild(this.za);
        this.Pc = a.fa("logo", !0);
        this.addChild(this.Pc);
        var b = a.U("but_play_default"),
            d = a.U("but_play_rollover"),
            a = a.U("but_play_pressed");
        this.ja = new x(b, d, a);
        this.ja.ra.addOnce(this.Fb, this);
        this.ja.ta.add(this.wb, this);
        this.addChild(this.ja);
        TweenMax.to(this.ja.scale, .4, {
            yoyo: !0,
            repeat: -1,
            x: 1.1,
            y: 1.1,
            ease: Quad.easeInOut
        });
        this.Sa = this.Rc.bind(this);
        z.add(this.Sa)
    }
    M.prototype = Object.create(n.prototype);
    M.prototype.constructor = M;
    m = M.prototype;
    m.rc = function() {};
    m.activate = function() {};
    m.resize = function() {
        this.za.position.x = t;
        this.za.position.y = J;
        this.Pc.position.x = t + 260;
        this.Pc.position.y = J - 180;
        this.ja.position.x = t + 400;
        this.ja.position.y = A - (.5 * this.ja.height + 80)
    };
    m.dispose = function() {
        this.Ba.removeAll();
        this.Pc = this.za = this.Ba = null;
        this.ja.dispose();
        this.ja = null;
        z.remove(this.Sa);
        this.Sa = null;
        this.removeChildren();
        n.prototype.dispose.call(this)
    };
    m.update = function() {};
    m.Rc = function(a) {
        32 == a && this.Fb()
    };
    m.Fb = function() {
        D().ya("sfx_click");
        this.Ba.dispatch(!0)
    };
    m.wb = function() {
        D().ya("sfx_rollover")
    };

    function N(a) {
        PIXI.DisplayObjectContainer.call(this);
        this.W = a;
        a = r();
        this.cb = a.fa("bg_header");
        this.cb.anchor.x = .5;
        this.ib = [];
        var b = a.fa("bg_tile_01"),
            d = a.fa("bg_tile_02");
        b.anchor.x = .5;
        d.anchor.x = .5;
        this.ib = [b, d];
        this.addChild(this.cb);
        this.addChild(this.ib[0]);
        this.addChild(this.ib[1]);
        this.Aa = a.fa("gosht", !0);
        this.Aa.anchor.y = .9;
        this.Aa.scale.x = this.Aa.scale.y = .4;
        this.Aa.alpha = 0;
        this.Aa.position.y = 320;
        this.addChild(this.Aa);
        this.Pf = 30;
        this.start()
    }
    N.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
    N.prototype.constructor = N;
    m = N.prototype;
    m.start = function() {
        this.position.x = t;
        this.position.y = 0;
        this.Aa.visible = !0;
        this.Aa.scale.x = this.Aa.scale.y = .4;
        this.Aa.alpha = 0;
        this.cb.visible = !0;
        this.cb.position.y = 0;
        this.ib[0].position.y = this.cb.height;
        this.ib[1].position.y = this.ib[0].y + this.ib[0].height
    };
    m.update = function() {
        var a = this.W.position.y,
            b;
        b = this.ib.length - 1;
        this.cb.visible && this.cb.y + this.cb.height + this.Pf < a && (this.cb.visible = !1);
        this.Aa.visible && this.Aa.position.y + 100 < a && (this.Aa.visible = !1);
        for (; 0 <= b; b -= 1) {
            var d = this.ib[b];
            d.y + d.height + this.Pf < a && (d.y += 2 * d.height)
        }
    };
    m.ri = function() {
        TweenMax.to(this.Aa, .5, {
            alpha: 1,
            ease: Power1.easeOut
        });
        TweenMax.to(this.Aa.scale, .5, {
            x: 1,
            y: 1,
            ease: Power1.easeOut
        })
    };
    m.resize = function() {
        this.position.x = t
    };
    m.dispose = function() {
        this.removeChild();
        this.cb = this.W = null;
        this.ib = []
    };

    function sa() {
        PIXI.DisplayObjectContainer.call(this);
        this.wa = !1;
        this.W = this._target = null;
        this.xd = 0;
        this.rh = 3;
        this.fb = [];
        this.wh = 15;
        this.Mf = 40;
        this.Lf = 6322044;
        this.Kf = .9;
        this.Db = new PIXI.Graphics;
        this.Db.lineStyle(this.Mf, this.Lf, this.Kf);
        this.addChild(this.Db);
        this.Qf = 60
    }
    sa.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
    sa.prototype.constructor = sa;
    m = sa.prototype;
    m.init = function(a, b) {
        this._target = a;
        this.W = b
    };
    m.start = function() {
        this.Db.clear();
        this.fb = [];
        this.wa = !0
    };
    m.stop = function() {
        this.wa = !1
    };
    m.update = function() {
        this.wa && (this.xd === this.rh && (this.ji(), this.xd = 0), this.xd += 1, this.jh())
    };
    m.dispose = function() {
        this.W = this._target = this.Db = null;
        this.fb = []
    };
    m.ji = function() {
        var a = this.fb.length;
        if (a >= this.wh) {
            for (var b = a - 1; 0 < b; b--) {
                var d = a - 1 - b;
                this.fb[d] = this.fb[d + 1]
            }
            this.fb[this.fb.length - 1] = new PIXI.Point(this._target.position.x, this._target.position.y)
        } else this.fb.push(new PIXI.Point(this._target.position.x, this._target.position.y))
    };
    m.jh = function() {
        this.Db.clear();
        this.Db.lineStyle(this.Mf, this.Lf, this.Kf);
        this.Db.moveTo(this._target.position.x, this._target.position.y - this.Qf);
        for (var a = this.fb.length - 1; 0 <= a; a--) {
            var b = this.fb[a];
            this.Db.lineTo(b.x, b.y - this.Qf);
            if (b.y < this.W.position.y) break
        }
    };

    function O(a, b) {
        PIXI.Sprite.call(this, r().U(a));
        this.anchor.x = .5;
        this.anchor.y = 1;
        this.name = a;
        this.isActive = !0;
        b ? this.hitArea = b : (this.hitArea = new PIXI.Rectangle, this.hitArea.width = .8 * this.width, this.hitArea.height = .3 * this.height, this.hitArea.x = .5 * -this.hitArea.width, this.hitArea.y = -(this.hitArea.height + .6 * this.hitArea.height))
    }
    O.prototype = Object.create(PIXI.Sprite.prototype);
    O.prototype.constructor = O;
    m = O.prototype;
    m.tc = function() {
        this.isActive = !1;
        this.La(this, 5, 3);
        D().yc(["sfx_obstacle_01", "sfx_obstacle_02", "sfx_obstacle_03", "sfx_obstacle_04"], 1, 0, !0)
    };
    m.dispose = function() {
        this.hitArea = null
    };
    m.Sg = function() {};
    m.La = function(a, b, d) {
        b = b || 5;
        TweenMax.to(a, .1, {
            repeat: d - 1,
            y: a.y + (1 + Math.random() * b),
            x: a.x + (1 + Math.random() * b),
            delay: .1,
            ease: Expo.easeInOut
        });
        TweenMax.to(a, .1, {
            y: a.y,
            x: a.x,
            delay: .1 * (d + 1),
            ease: Expo.easeInOut
        })
    };

    function P(a) {
        O.call(this, a);
        this.hitArea = new PIXI.Rectangle;
        this.hitArea.width = 40;
        this.hitArea.height = 250;
        this.hitArea.x = .5 * -this.hitArea.width;
        this.hitArea.y = -(this.hitArea.height + 20);
        this.ea = null
    }
    P.prototype = Object.create(O.prototype);
    P.prototype.constructor = P;
    m = P.prototype;
    m.tc = function() {
        this.isActive = !1;
        this.La();
        this.Ce();
        D().yc(["sfx_obstacle_01", "sfx_obstacle_02", "sfx_obstacle_03", "sfx_obstacle_04"], 1, 0, !0)
    };
    m.dispose = function() {
        this.ea && (this.ea.dispose(), this.ea = null);
        O.prototype.dispose.call(this)
    };
    m.Sg = function() {
        this.hitArea = new PIXI.Rectangle;
        this.hitArea.width = 40;
        this.hitArea.height = 50;
        this.hitArea.x = .5 * -this.hitArea.width;
        this.hitArea.y = -(this.hitArea.height + 20)
    };
    m.La = function() {
        var a = new TimelineMax({
            repeat: 1
        });
        a.append(TweenMax.to(this, .05, {
            rotation: -.026179938779914945,
            ease: Power4.easeOut
        }));
        a.append(TweenMax.to(this, .1, {
            rotation: .026179938779914945,
            ease: Power4.easeInOut
        }));
        a.append(TweenMax.to(this, .05, {
            rotation: 0,
            ease: Power4.easeIn
        }));
        a.play()
    };
    m.Ce = function() {
        var a = r();
        this.ea = new Q([a.U("part_leaf1"), a.U("part_leaf2")], a.wc("falling_leafs"), !1, !0);
        this.ea.position.y = -200;
        this.addChild(this.ea);
        this.ea.Eg()
    };
    m.dj = function() {};

    function R(a) {
        PIXI.DisplayObjectContainer.call(this);
        this.name = a;
        this.isActive = !0;
        this.dd = 0;
        var b = r();
        this.nc = b.fa("bouncing_shadow0001");
        this.nc.anchor.x = .5;
        this.nc.anchor.y = .5;
        this.addChild(this.nc);
        this._sprite = b.fa(a);
        this._sprite.anchor.x = .5;
        this._sprite.anchor.y = 1;
        this._sprite.position.y = -5;
        this.addChild(this._sprite);
        TweenMax.to(this.nc.scale, .6, {
            repeat: -1,
            yoyo: !0,
            x: .6,
            y: .6,
            ease: Sine.easeInOut
        });
        TweenMax.to(this._sprite, .6, {
            repeat: -1,
            yoyo: !0,
            y: -25,
            ease: Sine.easeInOut
        });
        this.hitArea = new PIXI.Rectangle;
        this.hitArea.width = 40;
        this.hitArea.height = 40;
        this.hitArea.x = .5 * -this.hitArea.width;
        this.hitArea.y = -30;
        this.ea = null
    }
    R.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
    R.prototype.constructor = R;
    m = R.prototype;
    m.tc = function() {
        this.isActive = !1;
        this.nc.visible = !1;
        this._sprite.visible = !1;
        this.Ce();
        D().yc(["sfx_gem_01", "sfx_gem_02", "sfx_gem_03"], 1, 0, !0)
    };
    m.dispose = function() {
        this.hitArea = null;
        this.removeChildren();
        this._sprite = this.nc = null;
        this.ea && (this.ea.dispose(), this.ea = null)
    };
    m.Ce = function() {
        var a = r();
        this.ea = new Q([a.U("part_star1"), a.U("part_star2"), a.U("part_star3")], a.wc("particles_generic"), !1, !0);
        this.addChild(this.ea);
        this.ea.Eg()
    };

    function ta(a, b) {
        this.ua = b;
        this.W = a;
        this.Fa = [];
        this.Ga = [];
        this.Ie = A + 100;
        this.qe = t;
        this.nd = 300;
        this.Xb = 0;
        this.dh = 500;
        this.yf = 300;
        this.pd = 0;
        this.fh = 700;
        this.Af = 500;
        this.Yb = 0;
        this.eh = 1E3;
        this.zf = 800;
        this.qd = 0;
        this.Bf = this.gh = 1E3;
        this.Be()
    }
    m = ta.prototype;
    m.start = function() {
        this.Be()
    };
    m.update = function() {
        var a;
        for (a = this.Fa.length - 1; 0 <= a; a--) {
            var b = this.Fa[a];
            b.y < this.W.position.y && (this.ua.removeChild(b), this.Fa.splice(a, 1))
        }
        for (a = this.Ga.length - 1; 0 <= a; a--) b = this.Ga[a], b.y < this.W.position.y && (this.ua.removeChild(b), this.Ga.splice(a, 1));
        this.W.position.y > this.Xb && (this.Xb += this.yf + Math.floor(.2 * Math.random() * this.yf), this.ei());
        this.W.position.y > this.pd && (this.pd += this.Af + Math.floor(.2 * Math.random() * this.Af), this.fi());
        this.W.position.y > this.Yb && (this.Yb += this.zf + Math.floor(.2 *
            Math.random() * this.zf), this.di());
        this.W.position.y > this.qd && (this.qd += this.Bf + Math.floor(.2 * Math.random() * this.Bf), this.ci())
    };
    m.dispose = function() {
        this.Be();
        this.ua.removeChildren();
        this.Ga = this.Fa = this.W = this.ua = null
    };
    m.resize = function() {
        var a;
        for (a = this.Fa.length - 1; 0 <= a; a--) {
            var b = this.Fa[a];
            b.position.x -= this.qe;
            b.position.x += t
        }
        for (a = this.Ga.length - 1; 0 <= a; a--) b = this.Ga[a], b.position.x -= this.qe, b.position.x += t;
        this.qe = t
    };
    m.Be = function() {
        var a;
        for (a = this.Fa.length - 1; 0 <= a; a--) {
            var b = this.Fa[a];
            b.dispose();
            this.ua.removeChild(b)
        }
        for (a = this.Ga.length - 1; 0 <= a; a--) b = this.Ga[a], b.dispose(), this.ua.removeChild(b);
        this.Fa = [];
        this.Ga = [];
        this.Xb = this.dh;
        this.pd = this.fh;
        this.Yb = this.eh;
        this.qd = this.gh
    };
    m.ei = function() {
        var a = this.ce(pa("obst_beartrap obst_log1 obst_log2 obst_log3 obst_log4 obst_signpost obst_stone1 obst_stone2 obst_stone3 obts_dangerboard obts_fence".split(" ")));.5 <= Math.random() && (a.scale.x *= -1)
    };
    m.fi = function() {
        var a = this.ce(pa(["obst_tree_l1", "obst_tree_l2", "obst_tree_l3"]));
        a.position.x >= t && (a.scale.x *= -1)
    };
    m.di = function() {
        var a = this.$g();.5 <= Math.random() && (a.scale.x *= -1)
    };
    m.ci = function() {
        var a = K(5, 1),
            b;
        switch (K(3, 1)) {
            case 1:
                b = -2;
                break;
            case 2:
                b = 0;
                break;
            case 3:
                b = 2;
                break;
            default:
                b = 0
        }
        for (var d, e = 0; e < a; e++) {
            var f = this.ce(pa(["obst_tree_l1", "obst_tree_l2", "obst_tree_l3"]));
            if (d) {
                var g = 0,
                    g = .5 <= Math.random() ? K(120, 20) : -K(120, 20);
                f.position.x = d.x + g;
                f.position.y = d.y + 20 + K(120)
            } else f.position.x = t + 200 * b, f.position.y = f.height + this.W.position.y + this.Ie, d = new PIXI.Point;
            0 <= b && (f.scale.x *= -1);
            f.dd = b;
            d.x = f.position.x;
            d.y = f.position.y
        }
    };
    m.ce = function(a) {
        var b;
        0 <= a.indexOf("tree") ? a = new P(a) : (0 <= a.indexOf("obts_dangerboard") ? (b = new PIXI.Rectangle, b.width = 34, b.height = 20, b.x = .5 * -b.width, b.y = -b.height) : 0 <= a.indexOf("obst_log4") ? (b = new PIXI.Rectangle, b.width = 80, b.height = 40, b.x = -(.5 * b.width) - 15, b.y = -b.height - 10) : 0 <= a.indexOf("obst_signpost") ? (b = new PIXI.Rectangle, b.width = 45, b.height = 40, b.x = .5 * -b.width, b.y = -b.height - 10) : 0 <= a.indexOf("obts_fence") ? (b = new PIXI.Rectangle, b.width = 110, b.height = 40, b.x = -(.5 * b.width), b.y = -b.height - 10) : 0 <= a.indexOf("obst_beartrap") &&
            (b = new PIXI.Rectangle, b.width = 80, b.height = 40, b.x = .5 * -b.width, b.y = -b.height - 10), a = new O(a, b));
        b = K(2, -2);
        a.dd = b;
        a.position.x = 200 * b + t;
        a.position.y = a.height + this.W.position.y + this.Ie;
        this.ua.addChild(a);
        this.Fa.push(a);
        this.Ff(a) && (b = K(2, -2), a.position.x = 200 * b + t, a.position.y += this.nd, this.Xb += this.nd);
        a.Sg();
        return a
    };
    m.$g = function() {
        var a = new R(pa("pickup_burger pickup_chocobar pickup_corn pickup_gemstone pickup_goldenbiscuit pickup_shake pickup_drink pickup_fries".split(" "))),
            b = K(2, -2);
        a.dd = b;
        a.x = 200 * b + t;
        a.y = a.height + this.W.position.y + this.Ie;
        this.ua.addChild(a);
        this.Ga.push(a);
        this.Ff(a) && (b = K(2, -2), a.dd = b, a.position.x = 200 * b + t, a.position.y += this.nd, this.Yb += this.nd);
        return a
    };
    m.Ff = function(a) {
        var b, d, e;
        d = this.Fa.length;
        for (b = 0; b < d; b++)
            if (e = this.Fa[b], a !== e && ua(a, e)) return !0;
        d = this.Ga.length;
        for (b = 0; b < d; b++)
            if (e = this.Ga[b], a !== e && ua(a, e)) return !0;
        return !1
    };
    new PIXI.Point;

    function ua(a, b) {
        return !(a.position.x + a.hitArea.x > b.position.x + b.hitArea.x + (b.hitArea.width - 1) || a.position.x + a.hitArea.x + (a.hitArea.width - 1) < b.position.x + b.hitArea.x || a.position.y + a.hitArea.y > b.position.y + b.hitArea.y + (b.hitArea.height - 1) || a.position.y + a.hitArea.y + (a.hitArea.height - 1) < b.position.y + b.hitArea.y)
    };
    m = function() {}.prototype;

    function S(a, b) {
        PIXI.DisplayObjectContainer.call(this);
        this.Md = new PIXI.Point(a, b);
        this.Ef = !1;
        this.tb = 0;
        this.hg = 2;
        this.Ma = 15;
        this.Cc = new PIXI.Point(0, 0);
        this.Cc.y = 10;
        this.jb = new PIXI.Point;
        this.xh = .3;
        this.Wb = this.Vb = 0;
        var d = r(),
            e, f = [],
            g = [],
            h = [],
            k = [];
        for (e = 1; 26 >= e; e++) f.push(d.U("scooby_idle_nohead" + e));
        for (e = 1; 30 >= e; e++) g.push(d.U("scooby_reaction_a" + e));
        for (e = 1; 30 >= e; e++) h.push(d.U("scooby_reaction_b" + e));
        for (e = 1; 22 >= e; e++) k.push(d.U("scooby_reaction_c" + e));
        e = new va;
        e.$c(f, "idle");
        e.$c(g, "reaction1");
        e.$c(h, "reaction2");
        e.$c(k, "reaction3");
        this.Qa = new T(e);
        this.Qa.animationSpeed = .6;
        this.Qa.anchor.x = .5;
        this.Qa.anchor.y = 1;
        this.addChild(this.Qa);
        this.ka = new T(new va(wa("scobby_head", 27)));
        this.ka.animationSpeed = .2;
        this.ka.cd = !0;
        this.ka.anchor.x = .5;
        this.ka.anchor.y = 1;
        this.ka.position.x = 3;
        this.ka.position.y = -128;
        this.addChild(this.ka);
        this.Kb = d.fa("scobby_collar", !0);
        this.Kb.position.x = -4;
        this.Kb.position.y = -128;
        this.addChild(this.Kb);
        this.bb = new T(new va(wa("grass_effect", 4)));
        this.bb.anchor.x = .5;
        this.bb.position.y = -54;
        this.bb.cd = !0;
        this.bb.animationSpeed = .3;
        this.addChild(this.bb);
        this.position.x = this.Md.x;
        this.position.y = this.Md.y;
        this.hitArea = new PIXI.Rectangle;
        this.hitArea.width = 40;
        this.hitArea.height = 20;
        this.hitArea.x = -(.5 * this.hitArea.width);
        this.hitArea.y = -(this.hitArea.height + 10)
    }
    S.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
    S.prototype.constructor = S;
    m = S.prototype;
    m.update = function() {
        if (this.Ef) {
            if (0 !== this.Wb) {
                var a = Math.round(this.Vb - this.position.x),
                    b = Math.sqrt(a * a);
                this.position.x += a * this.xh;
                1 > b && (this.position.x = this.Vb, this.Wb = 0, this.Cc.x = 0, this.jb.x = 0)
            }
            this.jb.y += this.Cc.y * U;
            this.position.y += Math.round(this.jb.y);
            this.jb.y > this.Ma && (this.jb.y = this.Ma)
        }
    };
    m.reset = function() {
        this.position.x = t;
        this.position.y = this.Md.y;
        this.Wb = this.Vb = this.tb = 0;
        this.Cc.x = 0;
        this.ka.visible = !0;
        this.Kb.visible = !0;
        this.Qa.gotoAndPlay("idle", !0)
    };
    m.start = function() {
        this.bb.play();
        this.ka.play();
        this.Ef = !0
    };
    m.stop = function() {
        this.bb.stop();
        this.Qa.stop();
        this.ka.stop()
    };
    m.move = function(a) {
        this.Wb = a;
        a = !1;
        if (a = 0 > this.Wb ? this.tb > -this.hg : this.tb < this.hg) a = this.tb, this.tb += this.Wb, this.Vb = t + 200 * this.tb, this.tb > a ? 0 > this.ka.scale.x && (this.ka.position.x = 3, this.ka.scale.x *= -1) : 0 < this.ka.scale.x && (this.ka.position.x = -8, this.ka.scale.x *= -1), D().yc(["sfx_turnleft", "sfx_turnright"], 1, 0, !0)
    };
    m.resize = function() {
        this.Vb = t + 200 * this.tb;
        this.position.x = this.Vb
    };
    m.tc = function() {
        this.Ma = 15;
        this.jb.y = -5;
        TweenMax.delayedCall(.1, function() {
            this.Qa.Sd.addOnce(function() {
                this.Qa.gotoAndPlay("idle", !0);
                this.ka.visible = !0;
                this.Kb.visible = !0
            }, this);
            this.Qa.gotoAndPlay("reaction" + K(3, 1), !1);
            this.ka.visible = !1;
            this.Kb.visible = !1
        }, null, this);
        D().yc(["sfx_scooby_hit_01", "sfx_scooby_hit_02"])
    };
    m.zi = function() {
        this.Ma += .5;
        40 < this.Ma && (this.Ma = 40)
    };
    m.pause = function() {
        this.stop()
    };
    m.resume = function() {
        this.bb.play();
        this.Qa.play();
        this.ka.play()
    };
    m.dispose = function() {
        this.removeChildren();
        this.jb = this.Cc = this.Md = null;
        this.Qa.dispose();
        this.Qa = null;
        this.ka.dispose();
        this.ka = null;
        this.bb.dispose();
        this.hitArea = this.Kb = this.bb = null
    };
    m.qk = function() {
        return this.jb
    };

    function V() {
        PIXI.DisplayObjectContainer.call(this);
        this.eb = G;
        var a = r(),
            b = a.fa("scores_box", !0);
        b.position.x = 70;
        b.position.y = 30;
        this.addChild(b);
        var d = a.fa("scores_box", !0);
        d.position.x = b.x + b.width + 25;
        d.position.y = 30;
        this.addChild(d);
        var e = a.fa("scores_box", !0);
        e.position.x = d.x + d.width + 25;
        e.position.y = 30;
        this.addChild(e);
        this.td = a.fa("icon_distance", !0);
        this.td.x = -40;
        b.addChild(this.td);
        this.vd = a.fa("icon_pickups", !0);
        this.vd.x = -30;
        d.addChild(this.vd);
        this.ud = a.fa("icon_lifes", !0);
        this.ud.x = -30;
        e.addChild(this.ud);
        this.Rb = this.Sb = this.Qb = null;
        a.wc("copy");
        this.Qb = new w("" + this.eb.qb, a.lb("open_sans_condensed_20"), "center");
        this.Sb = new w("" + this.eb.Gb, a.lb("open_sans_condensed_20"), "center");
        this.Rb = new w("" + this.eb.Eb, a.lb("open_sans_condensed_20"), "center");
        this.Qb.x = b.x + 5 - 5;
        this.Qb.y += b.y - 15;
        this.Sb.x = d.x + 5;
        this.Sb.y += d.y - 15;
        this.Rb.x = e.x + 5;
        this.Rb.y += e.y + -15;
        this.addChild(this.Qb);
        this.addChild(this.Sb);
        this.addChild(this.Rb);
        this.eb.gd.add(this.ig, this);
        this.eb.kd.add(this.kg, this);
        this.eb.jd.add(this.jg,
            this)
    }
    V.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
    V.prototype.constructor = V;
    m = V.prototype;
    m.Bc = function() {
        this.ig(G.qb);
        this.kg(G.Gb);
        this.jg(G.Eb)
    };
    m.dispose = function() {
        this.removeChildren();
        this.eb.gd.removeAll();
        this.eb.kd.removeAll();
        this.eb.jd.removeAll();
        this.Rb = this.Sb = this.Qb = this.ud = this.vd = this.td = this.eb = null
    };
    m.ig = function(a) {
        this.Qb.text = "" + a;
        0 < a && 0 === a % 100 && TweenMax.to(this.td.scale, .1, {
            yoyo: !0,
            repeat: 1,
            x: 1.3,
            y: 1.3,
            ease: Quad.easeInOut
        })
    };
    m.kg = function(a) {
        this.Sb.text = "" + a;
        0 < a && TweenMax.to(this.vd.scale, .1, {
            yoyo: !0,
            repeat: 1,
            x: 1.3,
            y: 1.3,
            ease: Quad.easeInOut
        })
    };
    m.jg = function(a) {
        0 > a && (a = 0);
        this.Rb.text = "" + a;
        3 !== a && TweenMax.to(this.ud.scale, .1, {
            yoyo: !0,
            repeat: 1,
            x: 1.3,
            y: 1.3,
            ease: Quad.easeInOut
        })
    };

    function W() {
        n.call(this);
        this.zc = new signals.Signal;
        this.hd = new signals.Signal;
        this.ld = new signals.Signal;
        this.Oc = this.W = this.Oa = this.ha = this.za = this.ua = this.Hb = null;
        this.Nd = 520;
        this.yd = this.wa = !1;
        this.ec = this.Nb = null;
        var a = new PIXI.DisplayObjectContainer;
        a.interactive = !0;
        a.hitArea = new PIXI.Rectangle(0, 0, C, A);
        this.Ja = a;
        this.addChildAt(this.Ja, 0);
        this.Qd = null;
        a = r();
        this.Yd = this.Wa = null;
        this.Pa = new x(a.U("but_pause_default"), a.U("but_pause_rollover"), a.U("but_pause_pressed"));
        this.Pa.ra.add(this.Ih,
            this);
        this.Pa.ta.add(this.Jh, this);
        this.Pa.scale.x = this.Pa.scale.y = 0;
        this.addChild(this.Pa);
        v && (this.Ha = new x(a.U("but_turning0001"), a.U("but_turning0002"), a.U("but_turning0002")), this.Ha.scale.x *= -1, this.Ha.alpha = 0, this.addChild(this.Ha), this.Ia = new x(a.U("but_turning0001"), a.U("but_turning0002"), a.U("but_turning0002")), this.Ia.alpha = 0, this.addChild(this.Ia));
        this.$d = this.Bh.bind(this);
        la.add(this.$d)
    }
    W.prototype = Object.create(n.prototype);
    W.prototype.constructor = W;
    m = W.prototype;
    m.rc = function() {
        var a = r();
        G = new ga;
        this.Oc = new V;
        this.addChild(this.Oc);
        this.Hb = new PIXI.DisplayObjectContainer;
        this.addChildAt(this.Hb, 0);
        this.W = new xa(t, this.Nd, !0);
        this.W.bounds.y = this.W.view.y;
        this.W.bounds.x = this.W.view.x;
        this.W.bounds.width = this.W.view.x;
        this.W.Ri();
        this.W.ni(this.Hb);
        this.ua = new PIXI.DisplayObjectContainer;
        this.Oa = new ta(this.W, this.ua);
        this.za = new N(this.W);
        this.ha = new S(t, this.Nd);
        this.Wa = new Q([a.U("part_leaf2"), a.U("line2")], a.wc("trail"), !1, !1);
        this.W.Rg(this.ha);
        this.ua.addChild(this.Wa);
        this.ua.addChild(this.ha);
        this.Hb.addChild(this.za);
        this.Hb.addChild(this.ua);
        this.Ja.touchstart = this.Ja.mousedown = this.Mh.bind(this);
        this.Ja.touchend = this.Ja.mouseup = this.Nh.bind(this);
        this.Yd = this.Ug.bind(this);
        window.addEventListener("blur", this.Yd)
    };
    m.activate = function() {
        this.hd.dispatch()
    };
    m.Bc = function() {
        G.reset();
        this.Hb.position.y = 0;
        this.ha.position.x = t;
        this.ha.position.y = this.Nd;
        this.ua.addChild(this.ha);
        this.W.Ub = new PIXI.Point;
        this.W.Rg(this.ha);
        this.ha.reset();
        this.za.start();
        this.za.ri();
        TweenMax.delayedCall(.4, function() {
            this.ha.start();
            this.Oa.start();
            this.Wa.start()
        }, null, this);
        TweenMax.to(this.W.Ub, 3.5, {
            delay: 1.5,
            y: this.Nd - 230,
            ease: Power1.easeInOut
        });
        this.wa = !0;
        this.yd = !1;
        this.ec = new ya(10, -1);
        this.ec.Ac.add(this.mh, this);
        this.ec.start();
        this.Nb = new ya(1, -1);
        this.Nb.Ac.add(this.Yh,
            this);
        this.Nb.start();
        D().ya("sfx_ghoul");
        D().ya("sfx_scoobyreactionstart");
        TweenMax.to(this.Pa.scale, .4, {
            delay: .2,
            x: 1,
            y: 1,
            ease: Back.easeOut
        });
        v && (TweenMax.to(this.Ha, .4, {
            delay: .2,
            alpha: 1,
            ease: Power1.easeOut
        }), TweenMax.to(this.Ia, .4, {
            delay: .2,
            alpha: 1,
            ease: Power1.easeOut
        }));
        this.Oc.Bc()
    };
    m.resize = function() {
        this.Pa.position.x = -Math.floor(.5 * this.Pa.getBounds().width) + C - fa;
        this.Pa.position.y = Math.floor(.5 * this.Pa.getBounds().height) + B;
        this.za && this.za.resize();
        this.ha && this.ha.resize();
        this.Oa && this.Oa.resize();
        this.W && this.W.update();
        v && (this.Ha.position.x = 0 + Math.round(this.Ia.getBounds().width / 2), this.Ha.position.y = J, this.Ia.position.x = C - Math.round(this.Ia.getBounds().width / 2), this.Ia.position.y = J);
        this.Ja && (this.Ja.width = C, this.Ja.height = A)
    };
    m.dispose = function() {
        la.remove(this.$d);
        this.$d = null;
        this.Ja.touchstart = this.Ja.mousedown = null;
        this.Ja.touchend = this.Ja.mouseup = null;
        this.zc.removeAll();
        this.zc = null;
        this.hd.removeAll();
        this.hd = null;
        this.ld.removeAll();
        this.ld = null;
        this.Hb.removeChildren();
        this.Hb = null;
        this.ua.removeChildren();
        this.ua = null;
        this.za.dispose();
        this.za = null;
        this.ha.dispose();
        this.ha = null;
        this.Oa.dispose();
        this.Oa = null;
        this.W.dispose();
        this.W = null;
        this.Oc.dispose();
        this.Oc = null;
        this.Nb && (this.Nb.dispose(), this.Nb = null);
        this.ec && (this.ec.dispose(), this.ec = null);
        this.Qd = this.Ja = null;
        this.Pa.dispose();
        this.Pa = null;
        v && (this.Ha.dispose(), this.Ha = null, this.Ia.dispose(), this.Ia = null);
        window.removeEventListener("blur", this.Yd);
        n.prototype.dispose.call(this)
    };
    m.update = function() {
        if (this.wa) {
            G.Mi(Math.round((this.ha.y - 500) / 100));
            this.ha && this.ha.update();
            6 < this.ha.jb.y ? this.Wa.Tb || this.Wa.start() : this.Wa.Tb && this.Wa.pause();
            this.Wa && (this.Wa.Ni(this.ha.x), this.Wa.Oi(this.ha.y - 50), this.Wa.update());
            this.za && this.za.update();
            this.Oa && this.Oa.update();
            this.W && this.W.update();
            this.hh();
            var a = this.ua.children,
                b = a.length,
                d, e, f;
            for (e = 0; e < b; e++) {
                d = a[e];
                for (f = e - 1; - 1 < f && a[f].y > d.y; f--) a[f + 1] = a[f];
                a[f + 1] = d
            }
        }
    };
    m.Ye = function() {
        this.ha.pause();
        this.wa = !1;
        this.Qd = TimelineLite.exportRoot(null, !1);
        this.Qd.pause()
    };
    m.Ki = function() {
        this.ha.resume();
        this.wa = !0;
        this.Qd.resume()
    };
    m.hh = function() {
        if (!this.yd) {
            var a, b, d;
            b = this.Oa.Ga.length;
            for (a = 0; a < b; a++) d = this.Oa.Ga[a], d.isActive && ua(this.ha, d) && (d.tc(), G.Qi());
            b = this.Oa.Fa.length;
            for (a = 0; a < b; a++)
                if (d = this.Oa.Fa[a], d.isActive && ua(this.ha, d) && (this.W.Si(), this.ha.tc(), d.tc(), G.Pi(), 0 >= G.Eb && !this.yd)) {
                    this.yd = !0;
                    TweenMax.delayedCall(.4, this.Zh, null, this);
                    break
                }
        }
    };
    m.Zh = function() {
        this.Ye();
        this.ld.dispatch()
    };
    m.mh = function() {
        this.ha.zi()
    };
    m.Yh = function() {
        D().yc(["sfx_bats", "sfx_thunder", "sfx_wolf"], 1, 0, !0);
        this.Nb.delay = 5 + 5 * Math.random()
    };
    m.Bh = function(a) {
        this.wa && (37 != a && 65 != a && 90 != a || this.ha.move(-1), 39 != a && 68 != a && 88 != a || this.ha.move(1))
    };
    m.Mh = function(a) {
        if (a) {
            a = a.getLocalPosition(this);
            var b = 0,
                b = Math.round(a.x) < t ? -1 : 1;
            v && this.wa && (0 > b ? this.Ha.Y.texture = this.Ha.ad : this.Ia.Y.texture = this.Ia.ad);
            this.ha.move(b)
        }
    };
    m.Nh = function() {
        v && (this.Ha.Y.texture = this.Ha.xc, this.Ia.Y.texture = this.Ia.xc)
    };
    m.Ih = function() {
        D().ya("sfx_click");
        this.Ye();
        this.zc.dispatch()
    };
    m.Jh = function() {
        D().ya("sfx_rollover")
    };
    m.Ug = function() {
        this.wa && (this.Ye(), this.zc.dispatch())
    };

    function za() {
        n.call(this);
        this.Ba = new signals.Signal;
        this.nb = new signals.Signal;
        var a = r();
        this.Z = new PIXI.DisplayObjectContainer;
        this.Z.position.x = t;
        this.Z.position.y = -54;
        this.addChild(this.Z);
        var b = a.fa("wooden_board", !0);
        b.anchor.y = 0;
        b.position.y = 190;
        this.Z.addChild(b);
        b = a.fa("rope_left", !0);
        b.anchor.y = 0;
        b.position.x = -348;
        b.position.y = -80;
        this.Z.addChild(b);
        b = a.fa("rope_right", !0);
        b.anchor.y = 0;
        b.position.x = 348;
        b.position.y = -80;
        this.Z.addChild(b);
        var d = a.wc("copy"),
            b = G,
            e = b.qb,
            f = b.Gb,
            g = 100 * e + 1E3 *
            f,
            h = b = null,
            k = null,
            q = null,
            u = null,
            k = qa(100 * e) + "",
            q = qa(1E3 * f) + "",
            u = qa(g),
            b = new w(d.score, a.lb("young_frankenstein_expanded_80"), "center"),
            h = new w(d.total, a.lb("young_frankenstein_expanded_60"), "center"),
            k = new w(k, a.lb("open_sans_condensed_35"), "center"),
            q = new w(q, a.lb("open_sans_condensed_35"), "center"),
            u = new w(u, a.lb("open_sans_condensed_60"), "center");
        k.x += 40;
        k.y -= 30;
        q.x += 40;
        q.y -= 30;
        u.y -= 40;
        d = a.fa("scorebox_distance", !0);
        d.position.x += -160;
        this.Z.addChild(d);
        g = a.fa("scorebox_pickups", !0);
        g.position.x +=
            160;
        this.Z.addChild(g);
        e = a.fa("scorebox_total", !0);
        this.Z.addChild(e);
        d.addChild(k);
        g.addChild(q);
        e.addChild(u);
        this.Z.addChild(b);
        this.Z.addChild(h);
        b.y = 230;
        d.position.y = g.position.y = b.y + 126;
        h.y = d.position.y + 60;
        e.position.y = h.y + 100;
        this.ab = a.fa("scooby_shaggy", !1);
        this.ab.anchor.x = 1;
        this.ab.anchor.y = 1;
        this.ab.position.y = A;
        this.addChild(this.ab);
        this.pb = a.fa("gang", !1);
        this.pb.anchor.x = 0;
        this.pb.anchor.y = 1;
        this.pb.position.y = A;
        this.addChild(this.pb);
        b = new PIXI.Graphics;
        b.beginFill(0, .4);
        b.drawRect(0,
            0, C, A);
        this.la = new PIXI.Sprite(b.generateTexture());
        this.addChildAt(this.la, 0);
        var b = a.U("but_replay_default"),
            h = a.U("but_replay_rollover"),
            k = a.U("but_replay_pressed"),
            d = a.U("but_home_default"),
            q = a.U("but_home_rollover"),
            u = a.U("but_home_pressed"),
            g = a.U("but_soundon_default"),
            e = a.U("but_soundon_rollover"),
            f = a.U("but_soundon_pressed"),
            L = a.U("but_soundoff_default"),
            ia = a.U("but_soundoff_rollover"),
            a = a.U("but_soundoff_pressed");
        this.ja = new x(b, h, k);
        this.ja.ra.addOnce(this.Fb, this);
        this.ja.ta.add(this.wb,
            this);
        this.ja.position.y = 640;
        this.Z.addChild(this.ja);
        TweenMax.to(this.ja.scale, .4, {
            yoyo: !0,
            repeat: -1,
            x: 1.1,
            y: 1.1,
            ease: Quad.easeInOut
        });
        this.ia = new x(d, q, u);
        this.ia.ra.addOnce(this.se, this);
        this.ia.ta.add(this.wb, this);
        this.addChild(this.ia);
        this.X = new y(L, ia, a, g, e, f);
        this.X.ra.addOnce(this.lc, this);
        this.X.ta.add(this.wb, this);
        this.addChild(this.X);
        this.Sa = this.Rc.bind(this);
        z.add(this.Sa);
        this.la.alpha = 0;
        this.Z.position.y = -A;
        this.ia.scale.x = this.ia.scale.y = 0;
        this.X.scale.x = this.X.scale.y = 0;
        this.ab.position.x =
            0;
        this.pb.position.x = C
    }
    za.prototype = Object.create(n.prototype);
    za.prototype.constructor = za;
    m = za.prototype;
    m.rc = function() {};
    m.activate = function() {
        this.Xd()
    };
    m.resize = function() {
        this.Z.position.x = t;
        this.ia.position.x = Math.floor(.5 * this.ia.getBounds().width) + ea;
        this.ia.position.y = Math.floor(.5 * this.ia.getBounds().height) + B;
        this.X.position.x = -Math.floor(.5 * this.X.getBounds().width) + C - fa;
        this.X.position.y = Math.floor(.5 * this.X.getBounds().height) + B;
        0 < this.ab.x && (this.ab.x = t - 220, this.pb.x = t + 220);
        this.la.width = C;
        this.la.height = A
    };
    m.dispose = function() {
        this.nb.removeAll();
        this.nb = null;
        this.Ba.removeAll();
        this.Ba = null;
        this.ia.dispose();
        this.ia = null;
        this.ja.dispose();
        this.ja = null;
        this.X.dispose();
        this.pb = this.ab = this.la = this.wd = this.Z = this.X = null;
        v ? this.Cb = this.$a = null : this.sb = null;
        z.remove(this.Sa);
        this.Sa = null;
        this.removeChildren();
        n.prototype.dispose.call(this)
    };
    m.Xd = function() {
        var a = .4,
            b = 0;
        v && (a = .6, b = .3);
        TweenMax.to(this.la, a, {
            delay: b + .1,
            alpha: 1,
            ease: Power1.easeOut
        });
        TweenMax.to(this.Z, a, {
            delay: b + .1,
            y: -54,
            ease: Back.easeOut
        });
        TweenMax.to(this.ia.scale, a, {
            delay: b + .4,
            x: 1,
            y: 1,
            ease: Back.easeOut
        });
        TweenMax.to(this.X.scale, a, {
            delay: b + .4,
            x: 1,
            y: 1,
            ease: Back.easeOut
        });
        TweenMax.to(this.ab, a, {
            delay: b + .4,
            x: t - 220,
            ease: Back.easeOut
        });
        TweenMax.to(this.pb, a, {
            delay: b + .4,
            x: t + 220,
            ease: Back.easeOut,
            onComplete: function() {
                D().ya("sfx_winendgame")
            },
            cj: this
        })
    };
    m.Dc = function(a) {
        TweenMax.to(this.la, .2, {
            alpha: 0,
            ease: Power1.easeOut
        });
        TweenMax.to(this.Z, .2, {
            y: -A,
            ease: Power1.easeOut
        });
        TweenMax.to(this.ia.scale, .2, {
            x: 0,
            y: 0,
            ease: Power1.easeOut
        });
        TweenMax.to(this.X.scale, .2, {
            x: 0,
            y: 0,
            ease: Power1.easeOut
        });
        TweenMax.to(this.ab, .2, {
            x: 0,
            ease: Power1.easeOut
        });
        TweenMax.to(this.pb, .2, {
            x: C,
            ease: Power1.easeOut
        });
        TweenMax.delayedCall(.3, function() {
            a.dispatch()
        }, null, this)
    };
    m.Rc = function(a) {
        32 == a && this.Fb()
    };
    m.Fb = function() {
        this.Dc(this.Ba)
    };
    m.se = function() {
        this.Dc(this.nb)
    };
    m.lc = function() {
        D().ya("sfx_click")
    };
    m.wb = function() {
        D().ya("sfx_rollover")
    };

    function Aa() {
        this.Ra = Ba();
        this.Od = null;
        E().track(new F("game_loaded"))
    }
    var m = Aa.prototype,
        G = null;

    function Ca() {
        var a = D(),
            b = a.qa.music_ingame,
            d = a.qa.music_menu;
        b && a.Qg(b.id);
        d && !d.mb && a.ya(d.id, 1, !0)
    }

    function Da() {
        var a = D(),
            b = a.qa.music_ingame,
            d = a.qa.music_menu;
        d && a.Qg(d.id);
        b && !b.mb && a.ya(b.id, 1, !0)
    }
    m.Bc = function() {
        this.Ee()
    };
    m.Ee = function() {
        var a = new X(.4, 0, .3);
        this.Od = new M;
        this.Od.Ba.addOnce(this.Uh, this);
        this.Ra.qc(this.Od, ca().transition(a));
        Ca()
    };
    m.cg = function() {
        this.fc = new s;
        this.fc.Ba.addOnce(this.Ah, this);
        this.fc.nb.addOnce(this.Sf, this);
        this.Ra.qc(this.fc)
    };
    m.De = function() {
        this.Sc = new s;
        this.Sc.Ba.addOnce(this.Kh, this);
        this.Sc.nb.addOnce(this.Sf, this);
        this.Ra.qc(this.Sc)
    };
    m.bi = function() {
        var a = new X(.4, 0, .3);
        this.Ca && (this.Ca.hd.removeAll(this.cg), this.Ca.ld.removeAll(this.dg), this.Ca.zc.removeAll(this.De), this.Ca = null);
        this.Ca = new W;
        this.Ca.hd.addOnce(this.cg, this);
        this.Ca.ld.add(this.dg, this);
        this.Ca.zc.add(this.De, this);
        this.Ra.qc(this.Ca, ba().transition(a));
        Da()
    };
    m.dg = function() {
        E().track(new F("endgame"));
        G.Li();
        this.mc = new za;
        this.mc.Ba.addOnce(this.Qh, this);
        this.mc.nb.addOnce(this.Ph, this);
        this.Ra.qc(this.mc);
        Ca()
    };
    m.Uh = function() {
        this.Od = null;
        this.bi();
        E().track(new F("play"))
    };
    m.Sf = function() {
        this.Ca = this.fc = null;
        this.Ee()
    };
    m.Ah = function() {
        this.Ra.fd(this.fc);
        this.fc = null;
        this.Ca.Bc();
        Da()
    };
    m.hj = function() {
        this.De()
    };
    m.Kh = function() {
        this.Ra.fd(this.Sc);
        this.Sc = null;
        this.Ca.Ki()
    };
    m.Qh = function() {
        this.Ra.fd(this.mc);
        this.mc = null;
        this.Ca.Bc();
        Da();
        E().track(new F("replay"))
    };
    m.Ph = function() {
        this.Ee();
        this.Ca = this.mc = null
    };

    function Ea() {
        Fa || (Fa = !0)
    }

    function E() {
        Ga || (Ga = new Ea);
        return Ga
    }
    var Ga = null,
        m = Ea.prototype,
        Fa = !1;
    m.oe = null;
    m.init = function(a) {
        this.oe = a
    };
    m.track = function(a) {
        this.oe ? this.oe.track(a) : console.warn("[p3.Tracking] track: There is no tracking module set up.")
    };

    function Ha() {}
    m = Ha.prototype;
    m.track = function() {};
    m.We = function() {
        return !1
    };

    function Ia() {};

    function Ja(a, b) {
        this.window = window.top || window;
        this.We() && this.window.ga("create", a, b)
    }
    Ja.prototype = Object.create(Ha);
    Ja.prototype.constructor = Ja;
    m = Ja.prototype;
    m.track = function(a) {
        if (this.We()) switch (a && a.type || console.warn("[p3.Tracking] racking data or data.type is invalid."), a.type) {
            case "page":
                this.window.ga("send", {
                    hitType: "pageview",
                    page: "/" + a.page,
                    title: a.page
                });
                break;
            case "event":
                this.window.ga("send", {
                    hitType: "event",
                    eventCategory: a.category,
                    eventAction: a.action,
                    eventLabel: a.label,
                    eventValue: a.value
                })
        }
    };
    m.We = function() {
        return this.window.ga ? !0 : (console.warn("[p3.Tracking] Google Analytics script is not found on the page."), !1)
    };

    function F(a) {
        this.page = a;
        this.type = "page"
    }
    F.prototype = Object.create(Ia);
    F.prototype.constructor = F;
    Object.create(Ia);

    function T(a) {
        this.animationSpeed = 1;
        this.cd = this.mb = !1;
        this.cf = new signals.Signal;
        this.Sd = new signals.Signal;
        this.Va = {};
        this.Bd = this.Ua = 0;
        this.Ta = "default";
        if (!a) throw Error("[MovieClip] There is no sequence.");
        for (var b in a.textures)
            if (a.textures.hasOwnProperty(b)) {
                "default" === this.Ta && (this.Ta = b);
                this.Va[b] = [];
                for (var d = 0; d < a.textures[b].length; ++d) this.Va[b].push({
                    texture: a.textures[b][d],
                    callback: null,
                    scope: null
                })
            }
        try {
            var e = a.textures[this.Ta][0]
        } catch (f) {
            throw Error("[MovieClip] Texture is null. " +
                this.Ta);
        }
        PIXI.Sprite.call(this, e)
    }
    aa(T, PIXI.Sprite);
    m = T.prototype;
    m.play = function(a) {
        "undefined" !== typeof a && (this.cd = a);
        this.mb = !0
    };
    m.stop = function() {
        this.mb = !1
    };
    m.gotoAndPlay = function(a, b) {
        "undefined" !== typeof b && (this.cd = b);
        "string" != typeof a ? this.Ua = this.Bd = a : this.Va[a] && (this.Ua = this.Bd = 0, this.Ta = a);
        this.mb = !0
    };
    m.gotoAndStop = function(a) {
        "string" != typeof a ? this.Ua = a : this.Va[a] && (this.Ua = 0, this.Ta = a);
        this.mb = !1;
        a = this.Va[this.Ta];
        this.setTexture(a[(this.Ua + .5 | 0) % a.length].texture)
    };
    m.ij = function(a, b, d, e) {
        e = e || window;
        this.Va[a] && (this.Va[a][b].callback = d, this.Va[a][b].scope = d ? e : null)
    };
    m.updateTransform = function() {
        T.Wi.updateTransform.call(this);
        if (this.mb) {
            this.Ua += this.animationSpeed;
            var a = this.Va[this.Ta],
                b = this.Ua + .5 | 0,
                d = b % (a.length + 1);
            this.Ua %= a.length;
            0 < d && d != this.Bd && (this.Bd = d, a[d - 1].callback && setTimeout(function() {
                a[d - 1].callback.call(a[d - 1].scope)
            }, 0));
            this.cd || b < a.length ? (this.setTexture(a[b % a.length].texture), b >= a.length - 1 && this.cf.dispatch(this.Ta)) : b >= a.length - 1 && (this.gotoAndStop(a.length - 1), this.Sd.dispatch(this.Ta))
        }
    };
    m.dispose = function() {
        this.cf.removeAll();
        this.cf = null;
        this.Sd.removeAll();
        this.Sd = null;
        this.Va = {}
    };
    m.rj = function() {
        return this.Ua
    };
    m.qj = function() {
        return this.Ta
    };
    m.nk = function(a) {
        return (a = this.Va[a || "default"]) ? a.length : 0
    };

    function wa(a, b) {
        var d;
        d = d || 4;
        for (var e = r(), f = [], g = 1; g <= b; g++) {
            for (var h = "" + g; h.length < d;) h = "0" + h;
            f.push(e.U(a + h))
        }
        return f
    }

    function va(a, b) {
        this.textures = {};
        a && this.$c(a, b)
    }
    m = va.prototype;
    m.$c = function(a, b) {
        this.textures[b || "default"] = a
    };
    m.Kk = function(a) {
        this.textures[a || "default"] = null
    };
    m.Ik = function() {
        this.textures = {}
    };

    function Ka(a) {
        U = 1 / a;
        this.de = this.Ve();
        this.Nf = 1E3 / (1 / U - 1);
        this.Ab = 0;
        this.wa = !0
    }
    var m = Ka.prototype,
        U = 0;
    m.init = function(a, b, d) {
        function e() {
            if (f.wa) {
                var g = f.Ve(),
                    h = g - f.de;
                f.de = g;
                f.Ab += h;
                f.Ab > f.Nf && (f.Ab = f.Nf);
                for (; f.Ab >= U;) a.call(d), f.Ab -= U;
                b.call(d)
            }
            requestAnimFrame(e)
        }
        var f = this;
        requestAnimFrame(e)
    };
    m.reset = function() {
        this.de = this.Ve();
        this.Ab = 0
    };
    m.ej = function() {
        function a() {
            d.wa = !0;
            d.reset()
        }

        function b() {
            d.wa = !1;
            d.reset()
        }
        var d = this;
        window.addEventListener("blur", b);
        window.addEventListener("focus", a);
        window.addEventListener("pagehide", b);
        window.addEventListener("pageshow", a)
    };
    m.Ve = function() {
        var a = window;
        return (a.performance && a.performance.now ? a.performance.now() : (new Date).getTime()) / 1E3
    };
    Object.defineProperty(Ka.prototype, "isRunning", {
        get: function() {
            return this.wa
        },
        set: function(a) {
            this.reset();
            this.wa = a
        }
    });
    c.Xi = {};

    function Y() {
        PIXI.DisplayObjectContainer.call(this);
        this.yb = new signals.Signal;
        this.ob = new signals.Signal;
        this.Rd = !0;
        this.Se = !1;
        this.Jb = "transition_cross";
        this.Ib = this.screen = null
    }
    Y.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
    Y.prototype.constructor = Y;
    m = Y.prototype;
    m.init = function(a, b) {
        this.Ib = a;
        this.screen = b
    };
    m.Ud = function() {
        this.yb.dispatch(this)
    };
    m.Vd = function() {
        this.ob.dispatch(this)
    };
    m.dispose = function() {
        this.yb.removeAll();
        this.yb = null;
        this.ob.removeAll();
        this.screen = this.Ib = this.ob = null;
        this.removeChildren()
    };

    function La(a, b) {
        PIXI.DisplayObjectContainer.call(this);
        this.name = a;
        this.fe = b;
        this.na = []
    }
    La.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
    La.prototype.constructor = La;
    m = La.prototype;
    Object.defineProperty(m, "depth", {
        get: function() {
            var a = this.parent;
            a && a.children && (this.fe = a.children.indexOf(this));
            return this.fe
        },
        set: function(a) {
            this.fe = a
        }
    });
    c = c || {};

    function Ma() {
        if (!Na) throw Error("p3.ScreenManager is a Singleton, use 'getInstance()'.");
        this.Wd = "group_default";
        this.gb = this.hb = this.Xa = null;
        this.aa = {};
        this.rb = []
    }

    function Ba() {
        Oa || (Na = !0, Oa = new Ma, Na = !1);
        return Oa
    }
    var Oa = null,
        Na = !1,
        m = Ma.prototype;
    m.init = function(a, b) {
        this.aa = {};
        this.rb = [];
        this.hb = a;
        this.gb = b;
        this.Xa = new PIXI.DisplayObjectContainer;
        this.hb.addChild(this.Xa);
        this.oi(this.Wd)
    };
    m.oi = function(a) {
        var b;
        if (!this.Xa || !this.hb) throw Error('[ScreenManager.addScreenGroup] Error - The view/stage has not been set. Do that via "init" before adding screen groups.');
        if (this.aa[a]) throw Error("[ScreenManager.addScreenGroup] The group already exists: " + a);
        b = this.tf(0);
        b = new La(a, b);
        this.Xa.addChildAt(b, b.depth);
        this.aa[a] = b;
        this.rb.push(b)
    };
    m.jj = function(a, b) {
        var d = this.aa[a];
        if (d) this.Xa.addChildAt(d, this.tf(b));
        else throw Error("[ScreenManager.changeScreenGroupDepth] Error - The screengroup does not exist: " + a);
    };
    m.Hi = function(a) {
        var b = this.aa[a];
        if (b) {
            for (var d = 0; d < b.na.length; d += 1) this.Ob(null, b.na[d], b);
            b.na = [];
            b.removeChildren();
            delete this.aa[a];
            a = this.rb.indexOf(b);
            this.rb.splice(a, 1)
        } else throw Error("[ScreenManager.removeScreenGroup] Error - The screengroup does not exist: " + a);
    };
    m.qc = function(a, b) {
        b = b || new l;
        if (!this.aa[this.Wd]) throw Error('[ScreenManager.addScreen] Error - There is no default group. Maybe you have not yet called "init" before adding screen the screen.');
        if (!a) throw Error("[ScreenManager.addScreen] Error - The screen you are adding is null.");
        var d = b.sd || this.Wd;
        if (d && !this.aa[d]) throw Error("[ScreenManager.addScreen] Error - The group does not exist: " + d);
        a.yg = ra();
        a.group = d;
        a.params = b;
        b.Pd ? this.hi(a, b.Pd) : (this.he(a), this.xf(a))
    };
    m.fd = function(a) {
        if (a) this.Ob(null, a, this.wi(a.group));
        else throw Error("[ScreenManager.removeScreen] Error - The screen is null. " + a);
    };
    m.Gi = function(a, b) {
        if (!a || !this.aa[a]) throw Error("[ScreenManager.removeCurrentScreen] Error - You must supply a valid group name: " + a);
        var d = this.aa[a],
            e = d.children.length;
        if (0 < e) {
            var f = d.getChildAt(e - 1);
            if (!b) this.Ob(null, f, d);
            else if (f !== b) this.Ob(null, f, d);
            else if (f === b) try {
                (f = d.getChildAt(e - 2)) && this.Ob(null, f, d)
            } catch (g) {}
        }
    };
    m.Hk = function() {
        for (var a in this.aa)
            if (this.aa.hasOwnProperty(a))
                for (var b = this.aa[a], d = 0; d < b.na.length; d++) this.fd(b.na[d])
    };
    m.dispose = function() {
        for (var a in this.aa) this.aa.hasOwnProperty(a) && this.Hi(a);
        Oa = this.hb = this.Xa = this.aa = this.rb = null
    };
    m.update = function() {
        for (var a = 0, b = this.rb.length; a < b; a++)
            for (var d = this.rb[a], e = 0, f = d.na.length; e < f; e++) d.na[e].update()
    };
    m.resize = function() {
        for (var a = 0, b = this.rb.length; a < b; a++)
            for (var d = this.rb[a], e = 0, f = d.na.length; e < f; e++) d.na[e].resize()
    };
    m.contains = function(a) {
        var b = !1,
            d;
        for (d in this.aa)
            if (this.aa.hasOwnProperty(d))
                for (var e = this.aa[d], f = 0; f < e.na.length; f += 1)
                    if (a === e.na[f]) {
                        b = !0;
                        break
                    }
        return b
    };
    m.tf = function(a) {
        var b = this.Xa.children.length;
        "undefined" === typeof a ? a = b : a > b ? a = b : 0 > a && (a = 0);
        return a
    };
    m.he = function(a) {
        var b, d, e, f;
        d = a.params.Zf;
        var g = a.params.Ae;
        if (0 < d.length)
            for (b = 0; b < d.length; b += 1) {
                e = d[b];
                if (a === e) throw Error("[ScreenManager.addScreen] Error - You are trying to remove the screen you are adding: " + e);
                this.fd(e)
            }
        if (0 < a.params.Ae.length)
            for (b = 0; b < g.length; b += 1) {
                f = this.aa[g[b]];
                if (a.params.sd === f.name) throw Error("[ScreenManager.addScreen] Error - You are trying to remove the screen but the group specified does not contain the screen: " + f.name);
                for (d = 0; d < f.na.length; d += 1) e = f.na[d],
                    this.Ob(a, e, f)
            }
        a.params.ze && this.Gi(a.group, a);
        if (a.params.ye)
            for (var h in this.aa)
                if (this.aa.hasOwnProperty(h))
                    for (f = this.aa[h], b = f.na.length - 1; 0 <= b; b -= 1) e = f.na[b], this.Ob(a, e, f)
    };
    m.Ob = function(a, b, d) {
        if (b)
            if (d) {
                if (!d.na) throw Error("[ScreenManager._removeScreenFromGroup] Error - The screengroup does not have a valid scrennArray: " + d.name);
                if (b !== a) {
                    a = d.na.indexOf(b);
                    if (-1 === a) throw Error("[ScreenManager._removeScreenFromGroup] Error - The group does not contain the screen. Group=" + d.name);
                    b.dispose();
                    b.removeChildren();
                    d.na.splice(a, 1);
                    d.removeChild(b)
                }
            } else throw Error("[ScreenManager._removeScreenFromGroup] Error - The screengroup does not exist: " + d.name);
        else throw Error("[ScreenManager._removeScreenFromGroup] Error - The screen does not exist: " +
            b);
    };
    m.xf = function(a, b) {
        var d = this.aa[a.group];
        d.addChild(a);
        d.na.push(a);
        a.rc();
        b || a.activate();
        a.resize()
    };
    m.hi = function(a, b) {
        b.yb.addOnce(this.Vh, this);
        b.ob.addOnce(this.Wh, this);
        b.Ib = this.ti(a.group);
        b.screen = a;
        b.Rd && this.Xa.addChild(b);
        b.Ud()
    };
    m.Vh = function(a) {
        a.Se || this.he(a.screen);
        this.xf(a.screen, !0);
        a.Vd()
    };
    m.Wh = function(a) {
        a.Se && this.he(a.screen);
        a.Rd && this.Xa.removeChild(a);
        a.screen.activate();
        a.dispose()
    };
    m.xi = function() {
        return this.hb
    };
    m.vi = function() {
        return this.gb
    };
    m.rk = function() {
        return this.Xa
    };
    m.Ij = function() {
        return this.Xa.children.length
    };
    m.wi = function(a) {
        var b = this.aa[a];
        if (b) return b;
        throw Error("[ScreenManager.getScreenGroup] The group does not exist: " + a + ". Maybe the screen is not the correct.");
    };
    m.ti = function(a) {
        if (!a || !this.aa[a]) throw Error("[ScreenManager.getCurrentScreen] Error - The screen group is invalid: " + a);
        a = this.aa[a];
        return 0 < a.children.length ? a.getChildAt(a.children.length - 1) : null
    };
    m.mj = function() {
        var a = [],
            b;
        for (b in this.aa)
            if (this.aa.hasOwnProperty(b))
                for (var d = this.aa[b], e = 0, f = d.na.length; e < f; e++) a.push(d.na[e]);
        return a
    };
    Object.defineProperty(m, "groups", {
        get: function() {
            return this.aa
        }
    });
    c.text = {};

    function w(a, b, d) {
        this.multiline = !0;
        this.letterSpacing = 0;
        this.Re = !0;
        this._text = "";
        this.fg = d || c.aj.bj;
        this.pa = b;
        this.Cd = null;
        this.kc = 0;
        if (!this.pa) throw Error("Font atlas is invalid!");
        PIXI.DisplayObjectContainer.call(this);
        this.text = a
    }
    aa(w, PIXI.DisplayObjectContainer);
    m = w.prototype;
    m.pi = function() {
        this._text || console.warn("[BitmapText] this._text is null.");
        this.Cd = [];
        if (this.multiline) {
            var a, b = 0,
                d = this.kc = 0,
                e = this._text.length;
            if (1 < e)
                for (; d < e - 1;) {
                    a = this._text.charCodeAt(d);
                    if (10 != a) try {
                        this.pa.kb(a)
                    } catch (f) {
                        this.pa.kb(32), console.warn("[BitmapText] Character '" + String.fromCharCode(a) + "' (" + a + ") not found!")
                    } else a = this._text.substring(b, d), this.Cd.push(a), ++this.kc, b = d + 1;
                    ++d
                }
            b < e && (a = this._text.substring(b, e), this.Cd.push(a), ++this.kc)
        } else this.kc = 1
    };
    m.Fg = function(a, b, d) {
        var e;
        try {
            e = this.pa.kb(a)
        } catch (f) {
            e = this.pa.kb(32)
        }
        a = new PIXI.Sprite(e.U());
        a.x = b + e.mg;
        a.y = d + e.ng;
        this.addChild(a)
    };
    m.Ji = function() {
        if (0 >= this.wg()) throw Error("[BitmapText] Invalid text field dimensions!");
        var a, b, d, e, f, g = e = 0,
            h = 0,
            k = 0,
            q = 0;
        this.removeChildren();
        if (this.multiline) {
            var u = null,
                L = null;
            for (a = 0; a < this.kc; ++a)
                for (k = 0, u = this.Cd[a], q = this.xg(u), L = u.length, b = 0; b < L; ++b) {
                    d = u.charCodeAt(b);
                    try {
                        f = this.pa.kb(d)
                    } catch (ia) {
                        f = this.pa.kb(32)
                    }
                    if (32 != d) {
                        a < this._text.length && this.Re ? (e = this._text.charCodeAt(a + 1), h = this.pa.Te(d, e)) : h = 0;
                        switch (this.fg) {
                            case "left":
                                e = k;
                                break;
                            case "right":
                                e = k - q;
                                break;
                            case "center":
                                e = k - .5 *
                                    q;
                                break;
                            default:
                                throw Error("[BitmapText] Invalid text alignment!");
                        }
                        e = Math.floor(e);
                        g = Math.floor(a * this.wg());
                        this.Fg(d, e, g);
                        k += f.pc + h + this.letterSpacing
                    } else k += f.pc + this.letterSpacing
                }
        } else
            for (q = this.xg(this._text), b = this._text.length, a = 0; a < b; ++a)
                if (d = this._text.charCodeAt(a), 10 != d) {
                    try {
                        f = this.pa.kb(d)
                    } catch (kb) {
                        f = this.pa.kb(32)
                    }
                    if (32 != d) {
                        a < this._text.length && this.Re ? (e = this._text.charCodeAt(a + 1), h = this.pa.Te(d, e)) : h = 0;
                        switch (this.fg) {
                            case "left":
                                e = k;
                                break;
                            case "right":
                                e = k - q;
                                break;
                            case "center":
                                e =
                                    k - .5 * q;
                                break;
                            default:
                                throw Error("[BitmapText] Invalid text alignment!");
                        }
                        e = Math.floor(e);
                        this.Fg(d, e, g);
                        k += f.pc + h + this.letterSpacing
                    } else k += f.pc + this.letterSpacing
                }
    };
    Object.defineProperty(w.prototype, "text", {
        get: function() {
            return this._text
        },
        set: function(a) {
            a !== this._text && (this._text = a, this.pi(), this.Ji())
        }
    });
    m.lb = function() {
        return this.pa
    };
    m.Dj = function() {
        return null != this.pa ? this.pa.font.info.face : ""
    };
    m.Ej = function() {
        return null != this.pa ? this.pa.font.info.size : 0
    };
    m.Tj = function() {
        return this.kc
    };
    m.xg = function(a) {
        for (var b = 0, d = null, e = null, f = null, d = null, g = a.length, h = 0; h < g; ++h)
            if (d = a.charCodeAt(h), 10 != d) {
                try {
                    f = this.pa.kb(d)
                } catch (k) {
                    f = this.pa.kb(32)
                }
                h < this._text.length && this.Re ? (e = this._text.charCodeAt(h + 1), d = this.pa.Te(d, e)) : d = 0;
                b += f.pc + d + this.letterSpacing
            }
        return b
    };
    m.wg = function() {
        return 0 < this.lineHeight ? this.lineHeight : this.pa.Mb.common.lineHeight
    };

    function Pa(a, b) {
        this.x = a || 0;
        this.y = b || 0
    }
    m = Pa.prototype;
    m.x = 0;
    m.y = 0;
    m.add = function(a) {
        return new Pa(this.x + a.x, this.y + a.y)
    };
    m.kl = function(a) {
        return new Pa(this.x - a.x, this.y - a.y)
    };
    m.scale = function(a) {
        return new Pa(this.x * a, this.y * a)
    };
    m.wk = function(a) {
        this.x += a.x;
        this.y += a.y
    };
    m.kj = function(a) {
        this.x -= a.x;
        this.y -= a.y
    };
    m.Lk = function(a) {
        this.x *= a;
        this.y *= a
    };
    m.normalize = function(a) {
        var b = this.Ue();
        0 < b && (this.x = this.x / b * a, this.y = this.y / b * a)
    };
    m.truncate = function(a) {
        var b = this.Ue();
        b > a && (this.x = this.x / b * a, this.y = this.y / b * a)
    };
    m.lj = function(a) {
        return this.x * a.y + this.y * a.y
    };
    m.Fk = function(a) {
        return -this.y * a.x + this.x * a.y
    };
    m.Ue = function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    };
    m.Lj = function() {
        return this.x * this.x + this.y * this.y
    };
    m.ok = function() {
        var a = this.Ue();
        return new Pa(this.x / a, this.y / a)
    };
    m = function() {
        this.bf = 1
    }.prototype;
    m.bf = null;
    m.Dk = function() {
        return this.Df()
    };
    m.Dg = function() {
        return this.Df() / 2147483647
    };
    m.Ek = function(a, b) {
        a -= .4999;
        return Math.abs(Math.round(a + (b + .4999 - a) * this.Dg()))
    };
    m.Ck = function(a, b) {
        return a + (b - a) * this.Dg()
    };
    m.Df = function() {
        return Math.abs(this.bf = 16807 * this.bf % 2147483647)
    };
    c.Fi = {};

    function Qa(a) {
        PIXI.Sprite.call(this, a);
        this.totalTime = this.currentTime = 0;
        this.position = new PIXI.Point(0, 0);
        this.scale = new PIXI.Point(0, 0);
        this.start = new PIXI.Point(0, 0);
        this.velocity = new PIXI.Point(0, 0);
        this.anchor = new PIXI.Point(.5, .5);
        this.qg = this.Ii = this.Ig = this.af = this.ug = this.bd = this.tg = this.vc = this.mf = this.Ze = this.rotation = this.alpha = 0;
        this.isActive = !1;
        this.anchor.x = .5;
        this.anchor.y = .5
    }
    Qa.prototype = Object.create(PIXI.Sprite.prototype);
    Qa.prototype.constructor = Qa;

    function Q(a, b, d, e) {
        PIXI.DisplayObjectContainer.call(this);
        this.ef = new signals.Signal;
        this.Tb = !1;
        this.oc = [];
        this.ea = [];
        this.rd = this.ie = this.Ld = this.Je = this.Vc = this.Uc = this.Qc = this.ne = this.Dd = this.Le = this.Zc = this.we = this.Tc = this.Nc = this.Mc = this.Wc = this.Ma = this.ke = this.je = this.Yc = this.Xc = this.$b = this.Zb = this.Kc = this.Jc = this.Ke = this.Pb = this.me = this.ic = this.jc = this.Ic = this.Gc = this.cc = this.Hc = this.Fc = this.Lb = this.Ec = this.vb = this.xa = this.dc = 0;
        this.If = !0;
        this.Cf = d;
        this.oc = void 0 == a.length ? [a] : a;
        if ("string" ===
            typeof this.oc[0]) throw Error("[ParticleSystem] You are passing in strings for the textures instead of actual textures.");
        this.Xh(b);
        this.Oe();
        if (Z && (this.vb = this.jc ? Math.min(8192, this.jc) : 8192, this.xe(this.jc || 32), e)) {
            var f = function() {
                    g.If && (g.update(), requestAnimFrame(f))
                },
                g = this;
            requestAnimFrame(f)
        }
    }
    Q.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
    Q.prototype.constructor = Q;
    var m = Q.prototype,
        Ra = 0,
        Z = !0;
    m.start = function(a) {
        Z && (a = a || Number.MAX_VALUE, 0 != this.Ec && (this.Lb = a), this.Tb = !0)
    };
    m.stop = function() {
        Z && (this.xa = this.Lb = 0, this.Tb = !1)
    };
    m.pause = function() {
        Z && (this.Lb = 0, this.Tb = !1)
    };
    m.reset = function() {
        if (Z) {
            for (var a = 0; a < this.xa; a += 1) this.ge(this.ea[a]);
            this.xa = this.vb = 0;
            this.Fi = [];
            this.stop()
        }
    };
    m.Eg = function() {
        if (Z) {
            this.stop();
            for (var a = null, b = 0; b < this.xa; ++b) this.ge(this.ea[b]);
            for (b = 0; b < this.vb; ++b) this.xa == this.ea.length && this.xe(this.ea.length), a = this.ea[this.xa++], this.Gf(a)
        }
    };
    m.jl = function(a) {
        if (Z) {
            a = a || 1E3;
            for (var b = 0; b < a; b++) this.advance(U)
        }
    };
    m.advance = function(a) {
        if (Z) {
            for (var b = 0, d = null; b < this.xa;)
                if (d = this.ea[b], d.currentTime < d.totalTime) this.qf(d, a), b += 1;
                else {
                    if (b != this.xa - 1) {
                        var e = this.ea[this.xa - 1];
                        this.ea[this.xa - 1] = d;
                        this.ea[b] = e
                    }
                    this.xa -= 1;
                    this.ge(d);
                    0 == this.xa && this.ef.dispatch(this)
                }
            if (0 < this.Lb) {
                b = 1 / this.Ec;
                for (this.dc += a; 0 < this.dc;) this.xa < this.vb && (this.xa == this.ea.length && this.xe(this.ea.length), d = this.ea[this.xa++], this.Gf(d), this.qf(d, this.dc)), this.dc -= b;
                this.Lb != Number.MAX_VALUE && (this.Lb = Math.max(0, this.Lb - a))
            }
        }
    };
    m.dispose = function() {
        this.If = !1;
        this.ef.removeAll();
        this.ef = null;
        this.oc = [];
        this.ea = [];
        this.removeChildren()
    };
    m.update = function() {
        Z && this.advance(U)
    };
    m.Gf = function(a) {
        var b = this.ic + this.me * (2 * Math.random() - 1);
        if (!(0 >= b)) {
            var d = this.oc[Math.floor(Math.random() * this.oc.length)];
            a.texture = d;
            a.currentTime = 0;
            a.totalTime = b;
            a.Ii = Ra++;
            a.isActive = !0;
            a.position.x = this.Fc + this.Gc * (2 * Math.random() - 1);
            a.position.y = this.Hc + this.Ic * (2 * Math.random() - 1);
            a.start.x = this.Fc;
            a.start.y = this.Hc;
            var e = this.Zb + this.$b * (2 * Math.random() - 1),
                f = this.Ma + this.Wc * (2 * Math.random() - 1);
            a.velocity.x = f * Math.cos(e);
            a.velocity.y = f * Math.sin(e);
            a.vc = this.Dd + this.ne * (2 * Math.random() - 1);
            a.tg = this.Dd / b;
            a.bd = this.Zb + this.$b * (2 * Math.random() - 1);
            a.ug = this.Uc + this.Vc * (2 * Math.random() - 1);
            a.Ze = this.Tc + this.we * (2 * Math.random() - 1);
            a.mf = this.Zc + this.Le * (2 * Math.random() - 1);
            var f = this.Pb + this.Ke * (2 * Math.random() - 1),
                g = this.Jc + this.Kc * (2 * Math.random() - 1),
                f = Math.max(.1, f),
                g = Math.max(.1, g);
            a.scale.x = a.scale.y = f / d.width;
            a.Ig = (g - f) / b / d.width;
            this.Cf ? (a.rotation = e + 1.57079637, a.af = 0) : (d = this.Xc + this.Yc * (2 * Math.random() - 1), e = this.je + this.ke * (2 * Math.random() - 1), a.rotation = d, a.af = (e - d) / b);
            d = this.Je;
            e =
                this.ie;
            0 != this.Ld && (d += this.Ld * (2 * Math.random() - 1));
            0 != this.rd && (e += this.rd * (2 * Math.random() - 1));
            a.alpha = d;
            a.qg = (e - d) / b;
            this.addChild(a)
        }
    };
    m.ge = function(a) {
        a.isActive = !1;
        this.removeChild(a)
    };
    m.qf = function(a, b) {
        var d = a.totalTime - a.currentTime;
        b = d > b ? b : d;
        a.currentTime += b;
        if (1 == this.cc) a.bd += a.ug * b, a.vc -= a.tg * b, a.position.x = this.Fc - Math.cos(a.bd) * a.vc, a.position.y = this.Hc - Math.sin(a.bd) * a.vc, a.vc < this.Qc && (a.currentTime = a.totalTime);
        else if (0 == this.cc) {
            var d = a.position.x - a.start.x,
                e = a.position.y - a.start.y,
                f = Math.sqrt(d * d + e * e),
                f = Math.max(.01, f),
                d = d / f,
                e = e / f,
                f = d,
                g = e,
                d = d * a.Ze,
                e = e * a.Ze,
                f = -g * a.mf,
                g = f * a.mf;
            a.velocity.x += b * (this.Mc + d + f);
            a.velocity.y += b * (this.Nc + e + g);
            a.position.x += a.velocity.x * b;
            a.position.y += a.velocity.y * b
        }
        a.scale.x = a.scale.y = a.scale.x + a.Ig * b;
        a.alpha += a.qg * b;
        this.Cf || (a.rotation += .017453293 * a.af * b)
    };
    m.Oe = function() {
        this.Ec = this.jc / this.ic
    };
    m.Xh = function(a) {
        if (void 0 == a) throw Error("Config is invalid!");
        a.configName && 0 < a.configName.length ? (this.Gc = a.sourcePositionVariancex, this.Ic = a.sourcePositionVariancey, this.Mc = a.gravityx, this.Nc = a.gravityy, this.cc = a.emitterType, this.Kg(a.maxParticles), this.Jg(a.particleLifespan), this.me = a.particleLifespanVariance, this.Pb = a.startParticleSize, this.Ke = a.startParticleSizeVariance, this.Jc = a.finishParticleSize, this.Kc = a.finishParticleSizeVariance, this.Zb = .017453293 * -a.angle, this.$b = .017453293 * a.angleVariance,
            this.Xc = a.rotationStart, this.Yc = a.rotationStartVariance, this.je = a.rotationEnd, this.ke = a.rotationEndVariance, this.Ma = a.speed, this.Wc = a.speedVariance, this.Tc = a.radialAcceleration, this.we = a.radialAccelVariance, this.Zc = a.tangentialAcceleration, this.Le = a.tangentialAccelVariance, this.Dd = a.maxRadius, this.ne = a.maxRadiusVariance, this.Qc = a.minRadius, this.Uc = .017453293 * a.rotatePerSecond, this.Vc = .017453293 * a.rotatePerSecondVariance, this.Je = a.startColorAlpha, this.Ld = a.startColorVarianceAlpha, this.ie = a.finishColorAlpha,
            this.rd = a.finishColorVarianceAlpha) : (this.Gc = parseFloat(a.getElementsByTagName("sourcePositionVariance")[0].getAttribute("x")), this.Ic = parseFloat(a.getElementsByTagName("sourcePositionVariance")[0].getAttribute("y")), this.Mc = parseFloat(a.getElementsByTagName("gravity")[0].getAttribute("x")), this.Nc = parseFloat(a.getElementsByTagName("gravity")[0].getAttribute("y")), this.cc = parseInt(a.getElementsByTagName("emitterType")[0].getAttribute("value")), this.Kg(parseInt(a.getElementsByTagName("maxParticles")[0].getAttribute("value"))),
            this.Jg(Math.max(.01, parseFloat(a.getElementsByTagName("particleLifeSpan")[0].getAttribute("value")))), this.me = parseFloat(a.getElementsByTagName("particleLifespanVariance")[0].getAttribute("value")), this.Pb = parseFloat(a.getElementsByTagName("startParticleSize")[0].getAttribute("value")), this.Ke = parseFloat(a.getElementsByTagName("startParticleSizeVariance")[0].getAttribute("value")), this.Jc = parseFloat(a.getElementsByTagName("finishParticleSize")[0].getAttribute("value")), this.Kc = parseFloat(a.getElementsByTagName("FinishParticleSizeVariance")[0].getAttribute("value")),
            this.Zb = .017453293 * -parseFloat(a.getElementsByTagName("angle")[0].getAttribute("value")), this.$b = .017453293 * parseFloat(a.getElementsByTagName("angleVariance")[0].getAttribute("value")), this.Xc = .017453293 * parseFloat(a.getElementsByTagName("rotationStart")[0].getAttribute("value")), this.Yc = .017453293 * parseFloat(a.getElementsByTagName("rotationStartVariance")[0].getAttribute("value")), this.je = .017453293 * parseFloat(a.getElementsByTagName("rotationEnd")[0].getAttribute("value")), this.ke = .017453293 * parseFloat(a.getElementsByTagName("rotationEndVariance")[0].getAttribute("value")),
            this.Ma = parseFloat(a.getElementsByTagName("speed")[0].getAttribute("value")), this.Wc = parseFloat(a.getElementsByTagName("speedVariance")[0].getAttribute("value")), this.Tc = parseFloat(a.getElementsByTagName("radialAcceleration")[0].getAttribute("value")), this.we = parseFloat(a.getElementsByTagName("radialAccelVariance")[0].getAttribute("value")), this.Zc = parseFloat(a.getElementsByTagName("tangentialAcceleration")[0].getAttribute("value")), this.Le = parseFloat(a.getElementsByTagName("tangentialAccelVariance")[0].getAttribute("value")),
            this.Dd = parseFloat(a.getElementsByTagName("maxRadius")[0].getAttribute("value")), this.ne = parseFloat(a.getElementsByTagName("maxRadiusVariance")[0].getAttribute("value")), this.Qc = parseFloat(a.getElementsByTagName("minRadius")[0].getAttribute("value")), this.Uc = .017453293 * parseFloat(a.getElementsByTagName("rotatePerSecond")[0].getAttribute("value")), this.Vc = .017453293 * parseFloat(a.getElementsByTagName("rotatePerSecondVariance")[0].getAttribute("value")), this.Je = parseFloat(a.getElementsByTagName("startColor")[0].getAttribute("alpha")),
            this.Ld = parseFloat(a.getElementsByTagName("startColorVariance")[0].getAttribute("alpha")), this.ie = parseFloat(a.getElementsByTagName("finishColor")[0].getAttribute("alpha")), this.rd = parseFloat(a.getElementsByTagName("finishColorVariance")[0].getAttribute("alpha")))
    };
    m.xe = function(a) {
        var b = this.ea.length;
        for (a = Math.min(this.vb, b + a); b < a; b += 1) this.ea[b] = new Qa(this.oc[0])
    };
    m.oj = function() {
        return this.ea.length
    };
    m.Rj = function() {
        return this.vb
    };
    m.Wk = function(a) {
        this.vb = Math.min(8192, a)
    };
    m.tj = function() {
        return this.Ec
    };
    m.Mk = function(a) {
        this.Ec = a
    };
    m.xj = function() {
        return this.Fc
    };
    m.Ni = function(a) {
        this.Fc = a
    };
    m.zj = function() {
        return this.Hc
    };
    m.Oi = function(a) {
        this.Hc = a
    };
    m.wj = function() {
        return this.cc
    };
    m.Pk = function(a) {
        this.cc = a
    };
    m.yj = function() {
        return this.Gc
    };
    m.Qk = function(a) {
        this.Gc = a
    };
    m.ui = function() {
        return this.Ic
    };
    m.ui = function(a) {
        this.Ic = a
    };
    m.Sj = function() {
        return this.jc
    };
    m.Kg = function(a) {
        this.jc = this.vb = a;
        this.Oe()
    };
    m.Nj = function() {
        return this.ic
    };
    m.Jg = function(a) {
        this.ic = Math.max(.01, a);
        this.Oe()
    };
    m.Oj = function() {
        return this.ic
    };
    m.Vk = function(a) {
        this.ic = a
    };
    m.jk = function() {
        return this.Pb
    };
    m.el = function(a) {
        this.Pb = a
    };
    m.kk = function() {
        return this.Pb
    };
    m.fl = function(a) {
        this.Pb = a
    };
    m.Aj = function() {
        return this.Jc
    };
    m.Rk = function(a) {
        this.Jc = a
    };
    m.Bj = function() {
        return this.Kc
    };
    m.Sk = function(a) {
        this.Kc = a
    };
    m.uj = function() {
        return this.Zb
    };
    m.Nk = function(a) {
        this.Zb = a
    };
    m.vj = function() {
        return this.$b
    };
    m.Ok = function(a) {
        this.$b = a
    };
    m.hk = function() {
        return this.Xc
    };
    m.cl = function(a) {
        this.Xc = a
    };
    m.ik = function() {
        return this.Yc
    };
    m.dl = function(a) {
        this.Yc = a
    };
    m.fk = function() {
        return this.Ma
    };
    m.al = function(a) {
        this.Ma = a
    };
    m.gk = function() {
        return this.Wc
    };
    m.bl = function(a) {
        this.Wc = a
    };
    m.Fj = function() {
        return this.Mc
    };
    m.Tk = function(a) {
        this.Mc = a
    };
    m.Gj = function() {
        return this.Nc
    };
    m.Uk = function(a) {
        this.Nc = a
    };
    m.Wj = function() {
        return this.Tc
    };
    m.Xk = function(a) {
        this.Tc = a
    };
    m.lk = function() {
        return this.Zc
    };
    m.hl = function(a) {
        this.Zc = a
    };
    m.Xj = function() {
        return this.Qc
    };
    m.Yk = function(a) {
        this.Qc = a
    };
    m.Yj = function() {
        return this.Uc
    };
    m.Zk = function(a) {
        this.Uc = a
    };
    m.Zj = function() {
        return this.Vc
    };
    m.$k = function(a) {
        this.Vc = a
    };
    m.pk = function() {};
    m.il = function() {};

    function xa(a, b, d) {
        this.view = new PIXI.Point(a || 0, b || 0);
        this.position = new PIXI.Point(-this.view.x, -this.view.y);
        this.Ub = new PIXI.Point;
        this.bounds = new PIXI.Rectangle(-(.5 * Number.MAX_VALUE), -(.5 * Number.MAX_VALUE), Number.MAX_VALUE, Number.MAX_VALUE);
        this.Ai = d || !0;
        this.Ne = .2;
        this.Na = new PIXI.Point(1, 1);
        this._target = null;
        this.V = new PIXI.Point(0, 0);
        this.La = new PIXI.Point(0, 0);
        this.Da = {};
        this.Ad = !1;
        this.Ge = new signals.Signal;
        this.Fe = new signals.Signal
    }
    m = xa.prototype;
    m.update = function() {
        void 0 != this._target && (this.V.x = this._target.x + this.Ub.x, this.V.y = this._target.y + this.Ub.y);
        this.V.x < this.bounds.x ? this.V.x = this.bounds.x : this.V.x > this.bounds.width && (this.V.x = this.bounds.width);
        this.V.y < this.bounds.y ? this.V.y = this.bounds.y : this.V.y > this.bounds.height && (this.V.y = this.bounds.height);
        this.V.x += this.La.x;
        this.V.y += this.La.y;
        var a = this.V.x - this.view.x - this.position.x * this.Na.x,
            b = this.V.y - this.view.y - this.position.y * this.Na.y;
        this.position.x += 1 / this.Na.x * a * this.Ne;
        this.position.y += 1 / this.Na.y * b * this.Ne;.01 > Math.abs(a) && (this.position.x = this.V.x - this.view.x);.01 > Math.abs(b) && (this.position.y = this.V.y - this.view.y);
        this.Ai && (this.position.x = Math.round(this.position.x), this.position.y = Math.round(this.position.y));
        a = a * a + b * b;.1 > a && !this.Ad ? (this.Ad = !0, this.Fe.dispatch()) : .1 < a && this.Ad && (this.Ad = !1, this.Ge.dispatch());
        this.Pe()
    };
    m.Rg = function(a) {
        if (void 0 != a && (void 0 == a.x || void 0 == a.y)) throw Error("Camera target is invalid!");
        this._target = a;
        a = this.si(this._target);
        this.Na.x = a ? a.ed.x : 1;
        this.Na.y = a ? a.ed.y : 1;
        this.V.x = this._target.x + this.Ub.x;
        this.V.y = this._target.y + this.Ub.y;
        this.V.x < this.bounds.x ? this.V.x = this.bounds.x : this.V.x > this.bounds.width && (this.V.x = this.bounds.width);
        this.V.y < this.bounds.y ? this.V.y = this.bounds.y : this.V.y > this.bounds.height && (this.V.y = this.bounds.height);
        this.setPosition(this.V.x - this.view.x, this.V.y -
            this.view.y)
    };
    m.ll = function(a, b, d) {
        this._target = null;
        this.V.x = a;
        this.V.y = b;
        this.Na.x = 1;
        this.Na.y = 1;
        d && (this.V.x < this.bounds.x ? this.V.x = this.bounds.x : this.V.x > this.bounds.width && (this.V.x = this.bounds.width), this.V.y < this.bounds.y ? this.V.y = this.bounds.y : this.V.y > this.bounds.height && (this.V.y = this.bounds.height), this.setPosition(this.V.x - this.view.x, this.V.y - this.view.y))
    };
    m.ni = function(a) {
        var b, d;
        if (this.zg("game_layer")) throw Error("Layer with that name already exists: 'game_layer'.");
        if (this.yi()) throw Error("Container already added to existing layer!");
        var e = new Sa;
        e.uc = a;
        e.ed = new PIXI.Point("undefined" !== typeof b ? b : 1, "undefined" !== typeof d ? d : 1);
        this.Da.game_layer = e;
        this.Pe()
    };
    m.Jk = function(a) {
        if (!this.zg) throw Error("Layer does not exist!");
        this.Da[a] = null
    };
    m.Gk = function() {
        this.Da = {}
    };
    m.zg = function(a) {
        return void 0 != this.Da[a] ? !0 : !1
    };
    m.yi = function() {
        for (var a = 0; a < this.Da.length; ++a)
            if ("game_layer" == this.Da[a].uc) return !0;
        return !1
    };
    m.si = function(a) {
        var b = 0,
            d = null,
            e;
        for (e in this.Da)
            if (this.Da.hasOwnProperty(e))
                for (var f = this.Da[e], g = f.uc.children.length, b = 0; b < g; ++b) {
                    var h = f.uc.getChildAt(b);
                    a == h && (d = f)
                }
            return d
    };
    m.Si = function() {
        var a;
        a = 2;
        TweenMax.to(this.La, .1, {
            repeat: a - 1,
            x: this.La.x + (1 + 5 * Math.random()),
            y: this.La.y + (1 + 1 * Math.random()),
            delay: .1,
            ease: Expo.easeInOut
        });
        TweenMax.to(this.La, .1, {
            x: this.La.x,
            y: this.La.y,
            delay: .1 * (a + 1),
            ease: Expo.easeInOut
        })
    };
    m.dispose = function() {
        this.La = this.V = this._target = this.Na = this.bounds = this.Ub = this.position = this.view = null;
        this.Da = {};
        this.Ge.removeAll();
        this.Ge = null;
        this.Fe.removeAll();
        this.Fe = null
    };
    m.Pe = function() {
        for (var a in this.Da)
            if (this.Da.hasOwnProperty(a)) {
                var b = this.Da[a];
                b.uc.x = -this.position.x * b.ed.x;
                b.uc.y = -this.position.y * b.ed.y
            }
    };
    m.Kj = function(a) {
        var b = this.Da[a];
        if (b) return b;
        throw Error('[p3.Camera] getLayerByName: layer does not exist: "' + a + '".');
    };
    m.mk = function() {
        return this._target
    };
    m.setPosition = function(a, b) {
        this.position.x = a * (0 < this.Na.x ? 1 / this.Na.x : 1);
        this.position.y = b * (0 < this.Na.y ? 1 / this.Na.y : 1);
        this.Pe()
    };
    m.Ri = function() {
        this.Ne = Math.max(.001, Math.min(1, 1))
    };

    function Sa() {
        this.ed = this.uc = null
    };

    function X(a, b, d, e, f) {
        Y.call(this);
        this.Jb = f || "transition_cross";
        this._duration = a || 1;
        this.Zg = "" + b || "#000000";
        this._pauseTime = d || .2;
        this._delay = e || 0;
        a = Ba().gb;
        b = new PIXI.Graphics;
        b.beginFill(this.Zg, 1);
        b.drawRect(0, 0, a.width, a.height);
        b.alpha = 0;
        this.la = new PIXI.Sprite(b.generateTexture());
        this.addChild(this.la)
    }
    X.prototype = Object.create(Y.prototype);
    X.prototype.constructor = X;
    m = X.prototype;
    m.Ud = function() {
        switch (this.Jb) {
            case "transition_in_only":
                this.la.alpha = 1;
                this.yb.dispatch(this);
                break;
            case "transition_cross":
                this.la.alpha = 0, TweenMax.to(this.la, .5 * this._duration, {
                    delay: this._delay,
                    alpha: 1,
                    ease: Power1.easeIn,
                    onComplete: function() {
                        this.yb.dispatch(this)
                    },
                    onCompleteScope: this
                })
        }
    };
    m.Vd = function() {
        switch (this.Jb) {
            case "transition_in_only":
                TweenMax.to(this.la, this._duration, {
                    delay: this._delay + this._pauseTime,
                    alpha: 0,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        this.ob.dispatch(this)
                    },
                    onCompleteScope: this
                });
                break;
            case "transition_cross":
                TweenMax.to(this.la, .5 * this._duration, {
                    delay: this._pauseTime,
                    alpha: 0,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        this.ob.dispatch(this)
                    },
                    onCompleteScope: this
                })
        }
    };
    m.dispose = function() {
        this.removeChildren();
        this.la = null;
        Y.prototype.dispose.call(this)
    };

    function Ta(a, b) {
        this.lh = parseInt(a.id);
        this.pc = parseInt(a.xadvance);
        this.li = parseInt(a.x);
        this.mi = parseInt(a.y);
        this._width = parseInt(a.width);
        this._height = parseInt(a.height);
        this.mg = parseInt(a.xoffset);
        this.ng = parseInt(a.yoffset);
        this.vh = a.letter;
        this.Kd = b
    }
    m = Ta.prototype;
    m.Jj = function() {
        return this.lh
    };
    m.tk = function() {
        return this.pc
    };
    m.getX = function() {
        return this.li
    };
    m.getY = function() {
        return this.mi
    };
    m.sk = function() {
        return this._width
    };
    m.Hj = function() {
        return this._height
    };
    m.uk = function() {
        return this.mg
    };
    m.vk = function() {
        return this.ng
    };
    m.Mj = function() {
        return this.vh
    };
    m.U = function() {
        return this.Kd
    };

    function Ua(a, b, d) {
        this.yh = a;
        this.wf = b;
        this.Kd = d;
        this.Mb = null;
        this.be = {};
        this.hc = {};
        this.Ei(b)
    }
    m = Ua.prototype;
    m.Ei = function(a) {
        if (!a || !a.font) throw Error("[p3.FontAtlas] parseData: There is a problem with the data:", a);
        this.Mb = a.font;
        for (var b, d = this.Mb.chars["char"].length, e = 0; e < d; ++e) a = this.Mb.chars["char"][e], b = new PIXI.Texture(this.Kd.baseTexture, new PIXI.Rectangle(parseInt(a.x), parseInt(a.y), parseInt(a.width), parseInt(a.height))), b = new Ta(a, b), this.be[a.id] = b;
        this.Ci()
    };
    m.Ci = function() {
        var a = this.Mb.kernings;
        if (a)
            for (var b = a.length, d = 0; 127 > d; ++d)
                for (var e = 0; e < b; ++e) {
                    var f = a[e];
                    f.first == d && (void 0 == this.hc[d] && (this.hc[d] = {}), this.hc[d][f.second] = f.amount)
                }
    };
    m.getName = function() {
        return this.yh
    };
    m.getData = function() {
        return this.wf
    };
    m.U = function() {
        return this.Kd
    };
    m.Cj = function() {
        return this.Mb
    };
    m.$j = function() {
        return this.Mb.info.size
    };
    m.kb = function(a) {
        if (null == this.be[a]) throw Error("CharacterInfo not found!");
        return this.be[a]
    };
    m.pj = function() {
        return this.wf.font.chars["char"].length
    };
    m.Te = function(a, b) {
        var d = 0;
        void 0 != this.hc[a] && void 0 != this.hc[a][b] && (d = this.hc[a][b]);
        return d
    };
    c.zb = {};
    c.zb.of = "sound_group_music";
    c.zb.Tg = "sound_group_sfx";
    c.zb.pf = "sound_group_vo";

    function Va() {
        if (!Wa) throw Error("SoundManager is a Singleton, use 'getInstance()'.");
        this.Vi = new signals.Signal;
        this.hf = new signals.Signal;
        this.Ui = new signals.Signal;
        this.Ya = !1;
        this.qa = {};
        this.Id = [];
        this.Hd = [];
        this.Jd = [];
        this.Gd = this.Fd = 0;
        this.Yf = null;
        this.reset()
    }
    Va.prototype.constructor = Va;

    function D() {
        Xa || (Wa = !0, Xa = new Va, Wa = !1);
        return Xa
    }
    var Xa = null,
        Wa = !1,
        m = Va.prototype;
    m.reset = function() {
        for (var a in this.qa) this.qa.hasOwnProperty(a) && this.qa[a].unload();
        if (a = localStorage.getItem("mute") || !1) a: switch (a.toLowerCase()) {
            case "true":
            case "yes":
            case "1":
                a = !0;
                break a;
            case "false":
            case "no":
            case "0":
            case null:
                a = !1;
                break a;
            default:
                a = Boolean(a)
        }
        this.Ya = a;
        this.qa = {};
        this.Id = [];
        this.Hd = [];
        this.Jd = [];
        this.Gd = this.Fd = 0;
        !0 === this.Ya ? Howler.mute() : Howler.unmute()
    };
    m.Qe = function(a, b) {
        var d, e, f = [];
        for (d = 0; d < a.length; d++) {
            e = a[d];
            var g = e.substr(e.lastIndexOf("/") + 1),
                h = new Ya;
            h.id = g;
            h.vg = e;
            for (e = 0; e < b.length; e++) g = b[e], h[g] = h.vg + "." + g;
            f.push(h)
        }
        this.Fd += f.length;
        for (d = 0; d < f.length; d++) {
            g = f[d];
            h = g.id;
            e = [];
            g.mp3 && e.push(g.mp3);
            g.ogg && e.push(g.ogg);
            g.wav && e.push(g.wav);
            g = g.group;
            e = new Howl({
                urls: e,
                autoplay: !1,
                onload: this.Th.bind(this),
                onloaderror: this.Sh.bind(this),
                onend: this.Rh.bind(this)
            });
            e.id = h;
            switch (g) {
                case c.zb.of:
                    this.Hd.push(e);
                    break;
                case c.zb.pf:
                    this.Jd.push(e);
                    break;
                default:
                    this.Id.push(e)
            }
            this.qa[h] = e
        }
    };
    m.ya = function(a, b, d) {
        var e;
        b = b || 1;
        e = e || null;
        var f = this.qa[a];
        if (!f) throw Error('[SoundManager.playSound] Sound does not exist: SoundID="' + a + '".');
        f.loop(d);
        f.volume(b);
        e ? f.fade(e.from, e.to, e.duration) : f.play();
        f.on("end", function() {
            this.mb = !1
        });
        f.mb = !0
    };
    m.Qg = function(a) {
        var b = this.qa[a];
        if (!b) throw Error('[SoundManager.playSound] Sound does not exist: SoundID="' + a + '".');
        b.stop();
        b.mb = !1
    };
    m.yc = function(a, b, d, e) {
        if (!a.length) throw Error("[SoundManager] Sound array is empty!");
        var f = 0;
        if (1 < a.length && (f = Math.floor(Math.random() * a.length), e)) {
            for (; f === this.Yf;) f = Math.floor(Math.random() * a.length);
            this.Yf = f
        }
        this.ya(a[f], b, d)
    };
    m.yk = function() {
        this.nf(!0)
    };
    m.ml = function() {
        this.nf(!1)
    };
    m.nf = function(a) {
        this.Ya = void 0 == a ? !this.Ya : a;
        for (var b in this.qa) this.qa.hasOwnProperty(b) && this.Of(this.qa[b], this.Ya);
        this.Ya ? Howler.mute() : Howler.unmute();
        localStorage.setItem("mute", this.Ya);
        this.Vi.dispatch(this.Ya)
    };
    m.Ak = function(a) {
        this.pe(this.Id, a);
        this.hf.dispatch(a, c.zb.Tg)
    };
    m.zk = function(a) {
        this.pe(this.Hd, a);
        this.hf.dispatch(a, c.zb.of)
    };
    m.Bk = function(a) {
        this.pe(this.Jd, a);
        this.hf.dispatch(a, c.zb.pf)
    };
    m.Of = function(a, b) {
        b ? a.mute() : a.unmute()
    };
    m.pe = function(a, b) {
        for (var d = 0; d < a.length; d++) this.Of(a[d], b);
        this.Yg(b)
    };
    m.Yg = function(a) {
        a || (this.Ya = a)
    };
    m.Th = function() {
        this.Gd += 1;
        this.Gd === this.Fd && this.Ui.dispatch()
    };
    m.Sh = function() {
        console.warn("[SoundManager._onSoundLoadError] Sound load Error - check the net in debug tools.")
    };
    m.Rh = function() {};
    m.fj = function() {
        Howler.mute()
    };
    m.gj = function() {
        this.Ya || Howler.unmute()
    };
    m.bk = function() {
        return this.qa
    };
    m.dk = function() {
        return this.Id
    };
    m.ck = function() {
        return this.Hd
    };
    m.ek = function() {
        return this.Jd
    };
    m.ak = function() {
        var a = 0,
            b;
        for (b in this.qa) this.qa.hasOwnProperty(b) && (a += 1);
        return a
    };
    m.xk = function() {
        var a = "",
            b;
        for (b in this.qa) this.qa.hasOwnProperty(b) && (a += "Sound:" + this.qa[b].id + "\n");
        return a
    };

    function Ya() {
        this.wav = this.ogg = this.mp3 = this.vg = this.id = ""
    };

    function Za() {
        if (!$a) throw Error("AssetManager is a Singleton, use 'getInstance()'.");
        ab = !1;
        this.ff = new signals.Signal;
        this.Pg = new signals.Signal;
        this.progress = 0;
        this.$i = !0;
        this.sg = .8;
        this.ae = {};
        this.sf = {};
        this.rf = {};
        this.Ka = null;
        this.ub = [];
        this.Lc = [];
        this.le = !1
    }
    var ab;
    Za.prototype.constructor = Za;

    function r() {
        bb || ($a = !0, bb = new Za, $a = !1);
        return bb
    }
    var bb = null,
        $a = !1,
        m = Za.prototype;
    m.reset = function() {
        this.progress = 0;
        this.ub = [];
        null != this.Ka && (this.Ka.onProgress = null, this.Ka = this.Ka.onComplete = null)
    };
    m.Qe = function(a, b, d) {
        d = d || "";
        D().Qe(a, b, d)
    };
    m.og = function(a, b) {
        this.$h(a, b || "");
        this.ub = this.ub.concat(a)
    };
    m.load = function() {
        this.Ka = new PIXI.AssetLoader(this.ub, this.$i);
        this.Ka.onProgress = this.Oh.bind(this);
        this.Ka.onComplete = this.Ch.bind(this);
        this.Ka.load();
        this.lg();
        return this.ub
    };
    m.U = function(a, b) {
        try {
            var d = PIXI.Texture.fromFrame(a + (b || ".png"))
        } catch (e) {
            if (!d)
                if (d = this.sf[a]) d = PIXI.Texture.fromImage(d, !0);
                else throw Error('[AssetManager.getTexture] - Texture does not exist, could not find a single image or Atlas with it: "' + a + '".');
        }
        return d
    };
    m.fa = function(a, b) {
        var d = this.U(a),
            d = new PIXI.Sprite(d);
        b && (d.anchor.x = .5, d.anchor.y = .5);
        return d
    };
    m.wc = function(a) {
        var b = this.ae[a];
        if (!b) throw Error('[AssetManager.getJSON] - Json does not exist: "' + a + '".');
        return b
    };
    m.lb = function(a) {
        var b = this.rf[a];
        if (!b) throw Error('[AssetManager.getJSON] - FontAtlas does not exist: "' + a + '".');
        return b
    };
    m.Vj = function() {
        return this.Ka
    };
    m.Qj = function() {
        return this.ub
    };
    m.$h = function(a, b) {
        if (null != b && 0 < b.length)
            for (var d = a.length, e = 0; e < d; e++) a[e] = b + a[e]
    };
    m.lg = function() {
        this.Ka && (this.progress = Math.ceil(100 / this.Ka.assetURLs.length * (this.Ka.assetURLs.length - this.Ka.loadCount)));
        ab && console.log("[AssetManager._updateProgress] " + this.progress)
    };
    m.Xg = function(a) {
        return a.font ? !0 : !1
    };
    m.Vg = function(a) {
        for (var b, d, e, f = 0; f < a.length; f++) b = a[f], e = PIXI.Texture.fromImage(b), b = cb(b), d = this.ae[b], d = new Ua(b, d, e), this.rf[b] = d
    };
    m.Oh = function(a) {
        this.lg();
        var b, d;
        switch (a.constructor) {
            case PIXI.JsonLoader:
                b = a.url;
                d = cb(b);
                this.ae[d] = a.json;
                this.Xg(a.json) && this.Lc.push(a.baseUrl + a.json.font.pages.page.file);
                break;
            case PIXI.ImageLoader:
                b = a.texture.baseTexture.imageUrl;
                d = cb(b);
                this.sf[d] = b;
                break;
            default:
                ab && console.warn('[AssetManager._onProgress] Found an unspecified object: "' + d + '".')
        }
        this.Pg.dispatch(a, this.progress)
    };
    m.Ch = function() {
        ab && console.log("[AssetManager._onLoaded] Loading Complete.");
        this.le && (this.Vg(this.Lc), this.Lc = [], this.le = !1);
        this.reset();
        if (this.Lc.length) this.le = !0, this.og(this.Lc), this.load(), ab && console.log("[AssetManager._onLoaded] Loading Fonts.");
        else if (0 < this.sg) {
            var a = this;
            setTimeout(function() {
                a.ff.dispatch()
            }, 1E3 * this.sg)
        } else this.ff.dispatch()
    };

    function cb(a) {
        a = a.substr(a.lastIndexOf("/") + 1);
        return a.substr(0, a.lastIndexOf("."))
    };

    function db(a, b, d, e, f, g, h, k, q) {
        Y.call(this);
        this.Jb = q || "transition_cross";
        this._duration = a;
        this.Ed = new PIXI.Point(b, d);
        this.od = new PIXI.Point(e, f);
        this.Rf = new PIXI.Point(g, h);
        this._delay = k || 0;
        this.ee = Power2.easeInOut;
        this.Rd = !1;
        this.Se = !0
    }
    db.prototype = Object.create(Y.prototype);
    db.prototype.constructor = db;
    m = db.prototype;
    c.Xi.VERSION = "01.00.00";
    m.Ud = function() {
        this.screen.x = this.Ed.x;
        this.screen.y = this.Ed.y;
        this.yb.dispatch(this)
    };
    m.Vd = function() {
        switch (this.Jb) {
            case "transition_in_only":
                TweenMax.to(this.screen, this._duration, {
                    x: this.od.x,
                    y: this.od.y,
                    ease: this.ee,
                    delay: this._delay,
                    onComplete: function() {
                        this.ob.dispatch(this)
                    },
                    onCompleteScope: this
                });
                break;
            case "transition_cross":
                this.Ib && TweenMax.to(this.Ib, this._duration, {
                    x: this.Rf.x,
                    y: this.Rf.y,
                    ease: this.ee,
                    delay: this._delay,
                    onComplete: function() {
                        this.Ib.visible = !1
                    },
                    onCompleteScope: this
                }), this.screen.x = this.Ed.x, this.screen.y = this.Ed.y, TweenMax.to(this.screen, this._duration, {
                    x: this.od.x,
                    y: this.od.y,
                    ease: this.ee,
                    delay: this._delay,
                    onComplete: function() {
                        this.ob.dispatch(this)
                    },
                    onCompleteScope: this
                })
        }
    };

    function eb(a, b, d) {
        Y.call(this);
        this.Rd = !1;
        this._duration = a || 1;
        this._delay = b || 0;
        this.Jb = d || "transition_in_only"
    }
    eb.prototype = Object.create(Y.prototype);
    eb.prototype.constructor = eb;
    m = eb.prototype;
    m.Ud = function() {
        this.screen.alpha = 0;
        switch (this.Jb) {
            case "transition_in_only":
                this.yb.dispatch(this);
                break;
            case "transition_cross":
                if (!this.Ib) throw Error("[AlphaFade] You are transitioning out but there is no oldScreen. ");
                TweenMax.to(this.Ib, .5 * this._duration, {
                    delay: this._delay,
                    alpha: 0,
                    ease: Power2.easeIn,
                    onComplete: function() {
                        this.yb.dispatch(this)
                    },
                    onCompleteScope: this
                })
        }
    };
    m.Vd = function() {
        switch (this.Jb) {
            case "transition_in_only":
                TweenMax.to(this.screen, this._duration, {
                    delay: this._delay,
                    alpha: 1,
                    ease: Power2.easeOut,
                    onComplete: function() {
                        this.ob.dispatch(this)
                    },
                    onCompleteScope: this
                });
                break;
            case "transition_cross":
                this.screen.alpha = 0, TweenMax.to(this.screen, .5 * this._duration, {
                    delay: 0,
                    alpha: 1,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        this.ob.dispatch(this)
                    },
                    onCompleteScope: this
                })
        }
    };

    function ya(a, b) {
        this.Ac = new signals.Signal;
        this.lf = new signals.Signal;
        this.delay = a || 1;
        this.$e = b || 0;
        this.count = 0
    }
    m = ya.prototype;
    m.start = function() {
        TweenMax.delayedCall(this.delay, this.Wf, null, this)
    };
    m.stop = function() {
        TweenMax.killDelayedCallsTo(this.Wf)
    };
    m.dispose = function() {
        this.stop();
        this.Ac.removeAll();
        this.lf.removeAll();
        this.lf = this.Ac = null
    };
    m.Wf = function() {
        -1 === this.$e || this.count < this.$e ? (this.count += 1, this.Ac.dispatch(), this.start()) : this.count === this.$e && (this.Ac.dispatch(), this.lf.dispatch())
    };

    function y(a, b, d, e, f, g) {
        PIXI.DisplayObjectContainer.call(this);
        if (!(a && b && e && f)) throw Error("[p3.MuteButton] You must supply the relevant textures to the button. ");
        this.ra = new signals.Signal;
        this.ta = new signals.Signal;
        this.He = D();
        this.X = new x(e, f, g);
        this.X.ra.add(this.lc, this);
        this.X.ta.add(this.Uf, this);
        this.addChild(this.X);
        this.xb = new x(a, b, d);
        this.xb.ra.add(this.lc, this);
        this.xb.ta.add(this.Uf, this);
        this.addChild(this.xb);
        this.vf()
    }
    y.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
    y.prototype.constructor = y;
    m = y.prototype;
    m.dispose = function() {
        this.ra.removeAll();
        this.ta.removeAll();
        this.ta = this.ra = null;
        this.X.ra.removeAll();
        this.X.ta.removeAll();
        this.X.dispose();
        this.X = null;
        this.xb.ra.removeAll();
        this.xb.ta.removeAll();
        this.xb.dispose();
        this.He = this.xb = null;
        this.removeChildren()
    };
    m.vf = function() {
        this.He.Ya ? (this.X.visible = !1, this.xb.visible = !0) : (this.X.visible = !0, this.xb.visible = !1)
    };
    m.lc = function() {
        this.ra.dispatch();
        this.He.nf();
        this.vf()
    };
    m.Uf = function() {
        this.ta.dispatch()
    };
    c = c || {};

    function fb(a, b, d) {
        this.Og = new signals.Signal;
        this.Lg = new signals.Signal;
        this.Ti = new signals.Signal;
        this.Ng = new signals.Signal;
        this.Mg = new signals.Signal;
        this.dd = 0;
        this.Wg = a;
        this.gi = d || "0x666666";
        this.md = this.gb = this.hb = null;
        this.kh = b || 60;
        this.Me = new Ka(this.kh)
    }
    m = fb.prototype;
    m.init = function() {
        this.md = new ha(this.Wg);
        this.md.df.add(this.zh, this);
        this.md.Td.add(this.re, this);
        this.md.init()
    };
    m.load = function(a, b) {
        this.oa = r();
        this.oa.Qe(b, ["mp3", "ogg", "wav"]);
        this.oa.og(a, "");
        this.oa.ff.add(this.te, this);
        this.oa.Pg.add(this.ue, this);
        this.oa.load()
    };
    m.Bi = function() {
        var a = new PIXI.AssetLoader(["assets/images/preloader.json"], !0);
        a.addEventListener("onComplete", function() {
            this.Og.dispatch()
        }.bind(this));
        a.load()
    };
    m.ii = function() {
        this.Ra.update();
        na = {}
    };
    m.ai = function() {
        this.gb.render(this.hb)
    };
    m.re = function() {
        var a = {
            view: I,
            transparent: !1,
            antialias: !1,
            preserveDrawingBuffer: !1,
            resolution: 1
        };
        this.hb = new PIXI.Stage(this.gi);
        this.gb = new PIXI.autoDetectRenderer(C, A, a);
        I || document.body.appendChild(this.gb.view);
        this.Ra = Ba();
        this.Ra.init(this.hb, this.gb);
        oa();
        this.Me.init(this.ii, this.ai, this);
        this.Lg.dispatch()
    };
    m.zh = function(a) {
        a ? (this.gb.resize(C, A), this.Ra.resize(), this.Me.Tb = !0) : this.Me.Tb = !1;
        this.Ti.dispatch(a)
    };
    m.ue = function(a, b) {
        this.Ng.dispatch(b, a)
    };
    m.te = function() {
        this.Mg.dispatch()
    };
    m.xi = function() {
        return this.hb
    };
    m.vi = function() {
        return this.gb
    };

    function gb() {

    }
    m = gb.prototype;
    m.init = function(a) {
        var b = new ja;
        b.width = 1024;
        b.height = 768;
        b.Ag = a;
        b.Gg = "#872F87";
        b.Hg = "assets/images/canvas/rotate_screen.png";
        b.rg = "assets/images/canvas/bg.png";
        this.Bb = new fb(b, 30, 3885904);
        this.Bb.Og.addOnce(this.Lh, this);
        this.Bb.Lg.addOnce(this.re, this);
        this.Bb.Ng.add(this.ue, this);
        this.Bb.Mg.addOnce(this.te, this);
        this.Bb.init()
    };
    m.ah = function() {
        this.ve = new p(C, A);
        Ba().qc(this.ve)
    };
    m.re = function() {
        this.Bb.Bi()
    };
    m.Lh = function() {
        this.ah();
        var a = "data/copy.json data/particles/falling_leafs.json data/particles/particles_generic.json data/particles/trail.json fonts/open_sans_condensed_20.json fonts/open_sans_condensed_35.json fonts/open_sans_condensed_60.json fonts/young_frankenstein_expanded_60.json fonts/young_frankenstein_expanded_80.json images/background.json images/logo.json images/game_atlas.json images/ui_atlas.json".split(" "),
            b = "music_ingame music_menu sfx_click sfx_rollover sfx_gem_01 sfx_gem_02 sfx_gem_03 sfx_obstacle_01 sfx_obstacle_02 sfx_obstacle_03 sfx_obstacle_04 sfx_scoobyreactionstart sfx_winendgame sfx_bats sfx_thunder sfx_wolf sfx_ghoul sfx_scooby_hit_01 sfx_scooby_hit_02 sfx_turnleft sfx_turnright".split(" "),
            d;
        for (d = 0; d < a.length; d++) a[d] = "./assets/" + a[d];
        for (d = 0; d < b.length; d++) b[d] = "./assets/sounds/" + b[d];
        this.Bb.load(a, b)
    };
    m.ue = function(a) {
        this.ve.Yi(a)
    };
    m.te = function() {
        (new Aa).Bc()
    };
    var hb = ["dh", "Main"],
        $ = this;
    hb[0] in $ || !$.execScript || $.execScript("var " + hb[0]);
    for (var ib; hb.length && (ib = hb.shift());) {
        var jb;
        if (jb = !hb.length) jb = void 0 !== gb;
        jb ? $[ib] = gb : $ = $[ib] ? $[ib] : $[ib] = {}
    }
    gb.prototype.init = gb.prototype.init;
}).call(this);
