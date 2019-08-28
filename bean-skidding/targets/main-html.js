/** Cooked with Flambe, https://getflambe.com */
'use strict';
(function() {
    function o(a, b) {
        function c() {} c.prototype = a; var e = new c,
            i; for (i in b) e[i] = b[i];
        b.toString !== Object.prototype.toString && (e.toString = b.toString); return e }

    function hd(a) { return a instanceof Array ? function() { return s.iter(a) } : "function" == typeof a.iterator ? l(a, a.iterator) : a.iterator }

    function l(a, b) {
        if (null == b) return null;
        null == b.__id__ && (b.__id__ = md++);
        var c;
        null == a.hx__closures__ ? a.hx__closures__ = {} : c = a.hx__closures__[b.__id__];
        null == c && (c = function() {
            return c.method.apply(c.scope,
                arguments)
        }, c.scope = a, c.method = b, a.hx__closures__[b.__id__] = c);
        return c
    }
    var d = {},
        pa = function(a, b) { b = b.split("u").join("");
            this.r = RegExp(a, b) };
    d.EReg = pa;
    pa.__name__ = !0;
    pa.prototype = {
        match: function(a) { this.r.global && (this.r.lastIndex = 0);
            this.r.m = this.r.exec(a);
            this.r.s = a; return null != this.r.m },
        matched: function(a) { if (null != this.r.m && 0 <= a && a < this.r.m.length) return this.r.m[a]; throw "EReg::matched"; },
        matchedPos: function() { if (null == this.r.m) throw "No string matched"; return { pos: this.r.m.index, len: this.r.m[0].length } },
        __class__: pa
    };
    var s = function() {};
    d.HxOverrides = s;
    s.__name__ = !0;
    s.cca = function(a, b) { var c = a.charCodeAt(b); return c != c ? void 0 : c };
    s.substr = function(a, b, c) { if (null != b && 0 != b && null != c && 0 > c) return "";
        null == c && (c = a.length);
        0 > b ? (b = a.length + b, 0 > b && (b = 0)) : 0 > c && (c = a.length + c - b); return a.substr(b, c) };
    s.remove = function(a, b) { var c = a.indexOf(b); if (-1 == c) return !1;
        a.splice(c, 1); return !0 };
    s.iter = function(a) { return { cur: 0, arr: a, hasNext: function() { return this.cur < this.arr.length }, next: function() { return this.arr[this.cur++] } } };
    var Bb = function() {};
    d.Lambda = Bb;
    Bb.__name__ = !0;
    Bb.array = function(a) { for (var b = [], a = hd(a)(); a.hasNext();) { var c = a.next();
            b.push(c) } return b };
    Bb.count = function(a, b) { var c = 0; if (null == b)
            for (var e = hd(a)(); e.hasNext();) e.next(), c++;
        else
            for (e = hd(a)(); e.hasNext();) { var i = e.next();
                b(i) && c++ }
        return c };
    var $c = function() {};
    d.IMap = $c;
    $c.__name__ = !0;
    Math.__name__ = !0;
    var Ga = function() {};
    d.Reflect = Ga;
    Ga.__name__ = !0;
    Ga.field = function(a, b) { try { return a[b] } catch (c) { return null } };
    Ga.setField = function(a, b, c) { a[b] = c };
    var u = function() {};
    d.Std = u;
    u.__name__ = !0;
    u.is = function(a, b) { return B.__instanceof(a, b) };
    u.instance = function(a, b) { return a instanceof b ? a : null };
    u.string = function(a) { return B.__string_rec(a, "") };
    u["int"] = function(a) { return a | 0 };
    u.parseInt = function(a) { var b = parseInt(a, 10); if (0 == b && (120 == s.cca(a, 1) || 88 == s.cca(a, 1))) b = parseInt(a); return isNaN(b) ? null : b };
    u.parseFloat = function(a) { return parseFloat(a) };
    var Cb = function() { this.b = "" };
    d.StringBuf = Cb;
    Cb.__name__ = !0;
    Cb.prototype = {
        add: function(a) { this.b += u.string(a) },
        addSub: function(a, b, c) { this.b = null == c ? this.b + s.substr(a, b, null) : this.b + s.substr(a, b, c) },
        __class__: Cb
    };
    var O = function() {};
    d.StringTools = O;
    O.__name__ = !0;
    O.startsWith = function(a, b) { return a.length >= b.length && s.substr(a, 0, b.length) == b };
    O.isSpace = function(a, b) { var c = s.cca(a, b); return 8 < c && 14 > c || 32 == c };
    O.ltrim = function(a) { for (var b = a.length, c = 0; c < b && O.isSpace(a, c);) c++; return 0 < c ? s.substr(a, c, b - c) : a };
    O.rtrim = function(a) { for (var b = a.length, c = 0; c < b && O.isSpace(a, b - c - 1);) c++; return 0 < c ? s.substr(a, 0, b - c) : a };
    O.trim = function(a) { return O.ltrim(O.rtrim(a)) };
    O.fastCodeAt = function(a, b) { return a.charCodeAt(b) };
    var ga = function() {};
    d.Type = ga;
    ga.__name__ = !0;
    ga.getClass = function(a) { return null == a ? null : a instanceof Array && null == a.__enum__ ? Array : a.__class__ };
    ga.resolveClass = function(a) { a = d[a]; return null == a || !a.__name__ ? null : a };
    ga.resolveEnum = function(a) { a = d[a]; return null == a || !a.__ename__ ? null : a };
    ga.createInstance = function(a, b) {
        switch (b.length) {
            case 0:
                return new a;
            case 1:
                return new a(b[0]);
            case 2:
                return new a(b[0],
                    b[1]);
            case 3:
                return new a(b[0], b[1], b[2]);
            case 4:
                return new a(b[0], b[1], b[2], b[3]);
            case 5:
                return new a(b[0], b[1], b[2], b[3], b[4]);
            case 6:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5]);
            case 7:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6]);
            case 8:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7]);
            default:
                throw "Too many arguments";
        }
    };
    ga.createEmptyInstance = function(a) {
        function b() {} b.prototype = a.prototype; return new b };
    d.XmlType = { __ename__: !0, __constructs__: [] };
    var p = function() {};
    d.Xml = p;
    p.__name__ = !0;
    p.parse = function(a) { return qa.parse(a) };
    p.createElement = function(a) { var b = new p;
        b.nodeType = p.Element;
        b._children = [];
        b._attributes = new K;
        b.set_nodeName(a); return b };
    p.createPCData = function(a) { var b = new p;
        b.nodeType = p.PCData;
        b.set_nodeValue(a); return b };
    p.createCData = function(a) { var b = new p;
        b.nodeType = p.CData;
        b.set_nodeValue(a); return b };
    p.createComment = function(a) { var b = new p;
        b.nodeType = p.Comment;
        b.set_nodeValue(a); return b };
    p.createDocType = function(a) {
        var b = new p;
        b.nodeType = p.DocType;
        b.set_nodeValue(a);
        return b
    };
    p.createProcessingInstruction = function(a) { var b = new p;
        b.nodeType = p.ProcessingInstruction;
        b.set_nodeValue(a); return b };
    p.createDocument = function() { var a = new p;
        a.nodeType = p.Document;
        a._children = []; return a };
    p.prototype = {
        get_nodeName: function() { if (this.nodeType != p.Element) throw "bad nodeType"; return this._nodeName },
        set_nodeName: function(a) { if (this.nodeType != p.Element) throw "bad nodeType"; return this._nodeName = a },
        get_nodeValue: function() {
            if (this.nodeType == p.Element || this.nodeType == p.Document) throw "bad nodeType";
            return this._nodeValue
        },
        set_nodeValue: function(a) { if (this.nodeType == p.Element || this.nodeType == p.Document) throw "bad nodeType"; return this._nodeValue = a },
        set: function(a, b) { if (this.nodeType != p.Element) throw "bad nodeType";
            this._attributes.set(a, b) },
        exists: function(a) { if (this.nodeType != p.Element) throw "bad nodeType"; return this._attributes.exists(a) },
        iterator: function() { if (null == this._children) throw "bad nodetype"; return { cur: 0, x: this._children, hasNext: function() { return this.cur < this.x.length }, next: function() { return this.x[this.cur++] } } },
        elementsNamed: function(a) { if (null == this._children) throw "bad nodetype"; return { cur: 0, x: this._children, hasNext: function() { for (var b = this.cur, c = this.x.length; b < c;) { var e = this.x[b]; if (e.nodeType == p.Element && e._nodeName == a) break;
                        b++ } this.cur = b; return b < c }, next: function() { for (var b = this.cur, c = this.x.length; b < c;) { var e = this.x[b];
                        b++; if (e.nodeType == p.Element && e._nodeName == a) return this.cur = b, e } return null } } },
        firstElement: function() {
            if (null == this._children) throw "bad nodetype";
            for (var a = 0, b = this._children.length; a <
                b;) { var c = this._children[a]; if (c.nodeType == p.Element) return c;
                a++ }
            return null
        },
        addChild: function(a) { if (null == this._children) throw "bad nodetype";
            null != a._parent && s.remove(a._parent._children, a);
            a._parent = this;
            this._children.push(a) },
        __class__: p
    };
    var ca = function() {};
    d["flambe.util.Disposable"] = ca;
    ca.__name__ = !0;
    ca.prototype = { __class__: ca };
    var q = function() { this._flags = 0;
        this.owner = this.next = null };
    d["flambe.Component"] = q;
    q.__name__ = !0;
    q.__interfaces__ = [ca];
    q.prototype = {
        onAdded: function() {},
        onRemoved: function() {},
        onStart: function() {},
        onStop: function() {},
        onUpdate: function() {},
        dispose: function() { null != this.owner && this.owner.remove(this) },
        get_name: function() { return null },
        __class__: q
    };
    var Ua = function() { q.call(this);
        this._disposables = [] };
    d["flambe.Disposer"] = Ua;
    Ua.__name__ = !0;
    Ua.__super__ = q;
    Ua.prototype = o(q.prototype, {
        get_name: function() { return "Disposer_13" },
        add: function(a) { this._disposables.push(a); return this },
        connect0: function(a, b) { this.add(a.connect(b)); return this },
        connect1: function(a, b) {
            this.add(a.connect(b));
            return this
        },
        connect2: function(a, b) { this.add(a.connect(b)); return this },
        onRemoved: function() { this.freeDisposables() },
        dispose: function() { q.prototype.dispose.call(this);
            this.freeDisposables() },
        freeDisposables: function() { var a = this._disposables;
            this._disposables = []; for (var b = 0; b < a.length;) { var c = a[b];++b;
                c.dispose() } },
        __class__: Ua
    });
    var h = function() { this.parent = this.firstChild = this.next = this.firstComponent = null;
        this._compMap = {} };
    d["flambe.Entity"] = h;
    h.__name__ = !0;
    h.__interfaces__ = [ca];
    h.prototype = {
        add: function(a) {
            null !=
                a.owner && a.owner.remove(a);
            var b = a.get_name(),
                c = this._compMap[b];
            null != c && this.remove(c);
            this._compMap[b] = a;
            b = null;
            for (c = this.firstComponent; null != c;) b = c, c = c.next;
            null != b ? b.next = a : this.firstComponent = a;
            a.owner = this;
            a.next = null;
            a.onAdded();
            return this
        },
        remove: function(a) {
            for (var b = null, c = this.firstComponent; null != c;) {
                var e = c.next;
                if (c == a) return null == b ? this.firstComponent = e : (b.owner = this, b.next = e), delete this._compMap[c.get_name()], 0 != (c._flags & 1) && (c.onStop(), c._flags &= -2), c.onRemoved(), c.owner = null,
                    c.next = null, !0;
                b = c;
                c = e
            }
            return !1
        },
        addChild: function(a, b) { null == b && (b = !0);
            null != a.parent && a.parent.removeChild(a);
            a.parent = this; if (b) { for (var c = null, e = this.firstChild; null != e;) c = e, e = e.next;
                null != c ? c.next = a : this.firstChild = a } else a.next = this.firstChild, this.firstChild = a; return this },
        removeChild: function(a) { for (var b = null, c = this.firstChild; null != c;) { var e = c.next; if (c == a) { null == b ? this.firstChild = e : b.next = e;
                    c.parent = null;
                    c.next = null; break } b = c;
                c = e } },
        disposeChildren: function() { for (; null != this.firstChild;) this.firstChild.dispose() },
        dispose: function() { for (null != this.parent && this.parent.removeChild(this); null != this.firstComponent;) this.firstComponent.dispose();
            this.disposeChildren() },
        __class__: h
    };
    var ad = function() {};
    d["flambe.util.PackageLog"] = ad;
    ad.__name__ = !0;
    var rc = function() {};
    d["flambe.platform.Platform"] = rc;
    rc.__name__ = !0;
    rc.prototype = { __class__: rc };
    var ra = function() {};
    d["flambe.platform.html.HtmlPlatform"] = ra;
    ra.__name__ = !0;
    ra.__interfaces__ = [rc];
    ra.prototype = {
        init: function() {
            var a = this;
            t.fixAndroidMath();
            var b = null;
            try {
                b =
                    window.flambe.canvas
            } catch (c) {} b.setAttribute("tabindex", "0");
            b.style.outlineStyle = "none";
            b.style.webkitTapHighlightColor = "transparent";
            b.setAttribute("moz-opaque", "true");
            this._stage = new Va(b);
            this._pointer = new L;
            this._mouse = new Db(this._pointer, b);
            this._renderer = this.createRenderer(b);
            this.mainLoop = new Wa;
            this.musicPlaying = !1;
            this._canvas = b;
            this._container = b.parentElement;
            this._container.style.overflow = "hidden";
            this._container.style.position = "relative";
            this._container.style.msTouchAction = "none";
            var e = 0,
                i = function(c) { if (!(1E3 > c.timeStamp - e)) { var i = b.getBoundingClientRect(),
                            d = a.getX(c, i),
                            i = a.getY(c, i); switch (c.type) {
                            case "mousedown":
                                c.target == b && (c.preventDefault(), a._mouse.submitDown(d, i, c.button), b.focus()); break;
                            case "mousemove":
                                a._mouse.submitMove(d, i); break;
                            case "mouseup":
                                a._mouse.submitUp(d, i, c.button); break;
                            case "mousewheel":
                            case "DOMMouseScroll":
                                a._mouse.submitScroll(d, i, "mousewheel" == c.type ? c.wheelDelta / 40 : -c.detail) && c.preventDefault() } } };
            window.addEventListener("mousedown", i, !1);
            window.addEventListener("mousemove", i, !1);
            window.addEventListener("mouseup", i, !1);
            b.addEventListener("mousewheel", i, !1);
            b.addEventListener("DOMMouseScroll", i, !1);
            b.addEventListener("contextmenu", function(a) { a.preventDefault() }, !1);
            var jb = "undefined" != typeof window.ontouchstart,
                i = "msMaxTouchPoints" in window.navigator && 1 < window.navigator.msMaxTouchPoints;
            if (jb || i) {
                var d = new Eb(this._pointer, jb ? 4 : window.navigator.msMaxTouchPoints);
                this._touch = d;
                i = function(b) {
                    var c;
                    c = jb ? b.changedTouches : [b];
                    var i = b.target.getBoundingClientRect();
                    e = b.timeStamp;
                    switch (b.type) {
                        case "touchstart":
                        case "MSPointerDown":
                        case "pointerdown":
                            b.preventDefault();
                            t.SHOULD_HIDE_MOBILE_BROWSER && t.hideMobileBrowser();
                            for (b = 0; b < c.length;) { var n = c[b];++b; var f = a.getX(n, i),
                                    g = a.getY(n, i);
                                d.submitDown((jb ? n.identifier : n.pointerId) | 0, f, g) }
                            break;
                        case "touchmove":
                        case "MSPointerMove":
                        case "pointermove":
                            b.preventDefault();
                            for (b = 0; b < c.length;) n = c[b], ++b, f = a.getX(n, i), g = a.getY(n, i), d.submitMove((jb ? n.identifier : n.pointerId) | 0, f, g);
                            break;
                        case "touchend":
                        case "touchcancel":
                        case "MSPointerUp":
                        case "pointerup":
                            for (b =
                                0; b < c.length;) n = c[b], ++b, f = a.getX(n, i), g = a.getY(n, i), d.submitUp((jb ? n.identifier : n.pointerId) | 0, f, g)
                    }
                };
                jb ? (b.addEventListener("touchstart", i, !1), b.addEventListener("touchmove", i, !1), b.addEventListener("touchend", i, !1), b.addEventListener("touchcancel", i, !1)) : (b.addEventListener("MSPointerDown", i, !1), b.addEventListener("MSPointerMove", i, !1), b.addEventListener("MSPointerUp", i, !1))
            } else this._touch = new Fb;
            var n = window.onerror;
            window.onerror = function(a, b, c) {
                r.uncaughtError.emit(a);
                return null != n ? n(a, b,
                    c) : !1
            };
            var f = t.loadExtension("hidden", window.document);
            null != f.value ? (i = function() { r.hidden.set__(Ga.field(window.document, f.field)) }, i(null), window.document.addEventListener(f.prefix + "visibilitychange", i, !1)) : (i = function(a) { r.hidden.set__("pagehide" == a.type) }, window.addEventListener("pageshow", i, !1), window.addEventListener("pagehide", i, !1));
            r.hidden.get_changed().connect(function(b) { b || (a._skipFrame = !0) });
            this._skipFrame = !1;
            this._lastUpdate = Date.now();
            var g = t.loadExtension("requestAnimationFrame").value;
            if (null != g) { var m = window.performance,
                    h = null != m && t.polyfill("now", m);
                h ? this._lastUpdate = m.now() : null; var j = null,
                    j = function(c) { a.update(h ? m.now() : c);
                        g(j, b) };
                g(j, b) } else window.setInterval(function() { a.update(Date.now()) }, 16);
            kb.info("Initialized HTML platform", ["renderer", this._renderer.get_type()])
        },
        loadAssetPack: function(a) { return (new w(this, a)).promise },
        getStage: function() { return this._stage },
        update: function(a) {
            var b = (a - this._lastUpdate) / 1E3;
            this._lastUpdate = a;
            r.hidden._value || (this._skipFrame ? this._skipFrame = !1 : (this.mainLoop.update(b), this.mainLoop.render(this._renderer)))
        },
        getPointer: function() { return this._pointer },
        getExternal: function() { null == this._external && (this._external = new Gb); return this._external },
        getRenderer: function() { return this._renderer },
        getX: function(a, b) { return (a.clientX - b.left) * this._stage.get_width() / b.width },
        getY: function(a, b) { return (a.clientY - b.top) * this._stage.get_height() / b.height },
        createRenderer: function(a) { return new Xa(a) },
        __class__: ra
    };
    var P = function(a, b) {
        this._value = a;
        this._changed =
            null != b ? new lb(b) : null
    };
    d["flambe.util.Value"] = P;
    P.__name__ = !0;
    P.prototype = { watch: function(a) { a(this._value, this._value); return this.get_changed().connect(a) }, set__: function(a) { var b = this._value;
            a != b && (this._value = a, null != this._changed && this._changed.emit(a, b)); return a }, get_changed: function() { null == this._changed && (this._changed = new lb); return this._changed }, __class__: P };
    var Ya = function(a, b) { this._next = null;
        this._signal = a;
        this._listener = b;
        this.stayInList = !0 };
    d["flambe.util.SignalConnection"] = Ya;
    Ya.__name__ = !0;
    Ya.__interfaces__ = [ca];
    Ya.prototype = { once: function() { this.stayInList = !1; return this }, dispose: function() { null != this._signal && (this._signal.disconnect(this), this._signal = null) }, __class__: Ya };
    var E = function(a) { this._head = null != a ? new Ya(this, a) : null;
        this._deferredTasks = null };
    d["flambe.util.SignalBase"] = E;
    E.__name__ = !0;
    E.prototype = {
        connectImpl: function(a, b) { var c = this,
                e = new Ya(this, a);
            this._head == E.DISPATCHING_SENTINEL ? this.defer(function() { c.listAdd(e, b) }) : this.listAdd(e, b); return e },
        disconnect: function(a) {
            var b =
                this;
            this._head == E.DISPATCHING_SENTINEL ? this.defer(function() { b.listRemove(a) }) : this.listRemove(a)
        },
        defer: function(a) { for (var b = null, c = this._deferredTasks; null != c;) b = c, c = c.next;
            a = new sc(a);
            null != b ? b.next = a : this._deferredTasks = a },
        willEmit: function() { var a = this._head;
            this._head = E.DISPATCHING_SENTINEL; return a },
        didEmit: function(a) { this._head = a;
            a = this._deferredTasks; for (this._deferredTasks = null; null != a;) a.fn(), a = a.next },
        listAdd: function(a, b) {
            if (b) a._next = this._head, this._head = a;
            else {
                for (var c = null, e =
                        this._head; null != e;) c = e, e = e._next;
                null != c ? c._next = a : this._head = a
            }
        },
        listRemove: function(a) { for (var b = null, c = this._head; null != c;) { if (c == a) { a = c._next;
                    null == b ? this._head = a : b._next = a; break } b = c;
                c = c._next } },
        __class__: E
    };
    var lb = function(a) { E.call(this, a) };
    d["flambe.util.Signal2"] = lb;
    lb.__name__ = !0;
    lb.__super__ = E;
    lb.prototype = o(E.prototype, {
        connect: function(a, b) { null == b && (b = !1); return this.connectImpl(a, b) },
        emit: function(a, b) {
            var c = this;
            this._head == E.DISPATCHING_SENTINEL ? this.defer(function() {
                c.emitImpl(a,
                    b)
            }) : this.emitImpl(a, b)
        },
        emitImpl: function(a, b) { for (var c = this.willEmit(), e = c; null != e;) e._listener(a, b), e.stayInList || e.dispose(), e = e._next;
            this.didEmit(c) },
        __class__: lb
    });
    var z = function(a) { E.call(this, a) };
    d["flambe.util.Signal1"] = z;
    z.__name__ = !0;
    z.__super__ = E;
    z.prototype = o(E.prototype, {
        connect: function(a, b) { null == b && (b = !1); return this.connectImpl(a, b) },
        emit: function(a) { var b = this;
            this._head == E.DISPATCHING_SENTINEL ? this.defer(function() { b.emitImpl(a) }) : this.emitImpl(a) },
        emitImpl: function(a) {
            for (var b =
                    this.willEmit(), c = b; null != c;) c._listener(a), c.stayInList || c.dispose(), c = c._next;
            this.didEmit(b)
        },
        __class__: z
    });
    var D = function(a, b) { this._behavior = null;
        P.call(this, a, b) };
    d["flambe.animation.AnimatedFloat"] = D;
    D.__name__ = !0;
    D.__super__ = P;
    D.prototype = o(P.prototype, {
        set__: function(a) { this._behavior = null; return P.prototype.set__.call(this, a) },
        update: function(a) { null != this._behavior && (P.prototype.set__.call(this, this._behavior.update(a)), this._behavior.isComplete() && (this._behavior = null)) },
        animateTo: function(a,
            b, c) { this.set_behavior(new da(this._value, a, b, c)) },
        set_behavior: function(a) { this._behavior = a;
            this.update(0); return a },
        __class__: D
    });
    var r = function() {};
    d["flambe.System"] = r;
    r.__name__ = !0;
    r.init = function() { r._calledInit || (r._platform.init(), r._calledInit = !0) };
    var kb = function() {};
    d["flambe.Log"] = kb;
    kb.__name__ = !0;
    kb.info = function() { null };
    kb.__super__ = ad;
    kb.prototype = o(ad.prototype, { __class__: kb });
    var tc = function() { this._realDt = 0 };
    d["flambe.SpeedAdjuster"] = tc;
    tc.__name__ = !0;
    tc.__super__ = q;
    tc.prototype =
        o(q.prototype, { get_name: function() { return "SpeedAdjuster_10" }, onUpdate: function(a) { 0 < this._realDt && (a = this._realDt, this._realDt = 0);
                this.scale.update(a) }, __class__: tc });
    var uc = function() {};
    d["flambe.animation.Behavior"] = uc;
    uc.__name__ = !0;
    uc.prototype = { __class__: uc };
    var H = function() {};
    d["flambe.animation.Ease"] = H;
    H.__name__ = !0;
    H.linear = function(a) { return a };
    H.cubeIn = function(a) { return a * a * a };
    H.cubeOut = function(a) { return 1 + --a * a * a };
    H.bounceOut = function(a) {
        return 0.36363636363636365 > a ? 7.5625 * a * a : 0.7272727272727273 >
            a ? 7.5625 * (a - 0.5454545454545454) * (a - 0.5454545454545454) + 0.75 : 0.9090909090909091 > a ? 7.5625 * (a - 0.8181818181818182) * (a - 0.8181818181818182) + 0.9375 : 7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375
    };
    var da = function(a, b, c, e) { this._from = a;
        this._to = b;
        this._duration = c;
        this.elapsed = 0;
        this._easing = null != e ? e : H.linear };
    d["flambe.animation.Tween"] = da;
    da.__name__ = !0;
    da.__interfaces__ = [uc];
    da.prototype = {
        update: function(a) {
            this.elapsed += a;
            return this.elapsed >= this._duration ? this._to : this._from + (this._to -
                this._from) * this._easing(this.elapsed / this._duration)
        },
        isComplete: function() { return this.elapsed >= this._duration },
        __class__: da
    };
    var Ha = function() {};
    d["flambe.asset.Asset"] = Ha;
    Ha.__name__ = !0;
    Ha.__interfaces__ = [ca];
    Ha.prototype = { __class__: Ha };
    var k = d["flambe.asset.AssetFormat"] = { __ename__: !0, __constructs__: "WEBP,JXR,PNG,JPG,GIF,DDS,PVR,PKM,MP3,M4A,OPUS,OGG,WAV,Data".split(",") };
    k.WEBP = ["WEBP", 0];
    k.WEBP.__enum__ = k;
    k.JXR = ["JXR", 1];
    k.JXR.__enum__ = k;
    k.PNG = ["PNG", 2];
    k.PNG.__enum__ = k;
    k.JPG = ["JPG", 3];
    k.JPG.__enum__ =
        k;
    k.GIF = ["GIF", 4];
    k.GIF.__enum__ = k;
    k.DDS = ["DDS", 5];
    k.DDS.__enum__ = k;
    k.PVR = ["PVR", 6];
    k.PVR.__enum__ = k;
    k.PKM = ["PKM", 7];
    k.PKM.__enum__ = k;
    k.MP3 = ["MP3", 8];
    k.MP3.__enum__ = k;
    k.M4A = ["M4A", 9];
    k.M4A.__enum__ = k;
    k.OPUS = ["OPUS", 10];
    k.OPUS.__enum__ = k;
    k.OGG = ["OGG", 11];
    k.OGG.__enum__ = k;
    k.WAV = ["WAV", 12];
    k.WAV.__enum__ = k;
    k.Data = ["Data", 13];
    k.Data.__enum__ = k;
    var vc = function(a, b, c, e) { this.name = a;
        this.url = b;
        this.format = c;
        this.bytes = e };
    d["flambe.asset.AssetEntry"] = vc;
    vc.__name__ = !0;
    vc.prototype = { __class__: vc };
    var mb = function() {};
    d["flambe.asset.AssetPack"] = mb;
    mb.__name__ = !0;
    mb.__interfaces__ = [ca];
    mb.prototype = { __class__: mb };
    var Hb = function() {};
    d["flambe.asset.File"] = Hb;
    Hb.__name__ = !0;
    Hb.__interfaces__ = [Ha];
    Hb.prototype = { __class__: Hb };
    var X = function() { this._localBase = this._remoteBase = null;
        this._entries = [] };
    d["flambe.asset.Manifest"] = X;
    X.__name__ = !0;
    X.fromAssets = function(a, b) {
        null == b && (b = !0);
        var c = Ga.field(bd.getType(X).assets[0], a);
        if (null == c) { if (b) throw I.withFields("Missing asset pack", ["name", a]); return null }
        var e = new X;
        e.set_localBase("assets");
        for (var i = 0; i < c.length;) { var d = c[i];++i; var f = d.name,
                n = a + "/" + f + "?v=" + u.string(d.md5),
                g = X.inferFormat(f);
            g != k.Data && (f = I.removeFileExtension(f));
            e.add(f, n, d.bytes, g) }
        return e
    };
    X.inferFormat = function(a) {
        a = I.getUrlExtension(a);
        if (null != a) switch (a.toLowerCase()) {
            case "gif":
                return k.GIF;
            case "jpg":
            case "jpeg":
                return k.JPG;
            case "jxr":
            case "wdp":
                return k.JXR;
            case "png":
                return k.PNG;
            case "webp":
                return k.WEBP;
            case "dds":
                return k.DDS;
            case "pvr":
                return k.PVR;
            case "pkm":
                return k.PKM;
            case "m4a":
                return k.M4A;
            case "mp3":
                return k.MP3;
            case "ogg":
                return k.OGG;
            case "opus":
                return k.OPUS;
            case "wav":
                return k.WAV
        } else null;
        return k.Data
    };
    X.prototype = {
        add: function(a, b, c, e) { null == c && (c = 0);
            null == e && (e = X.inferFormat(b));
            a = new vc(a, b, e, c);
            this._entries.push(a); return a },
        iterator: function() { return s.iter(this._entries) },
        getFullURL: function(a) { var b;
            b = null != this.get_remoteBase() && X._supportsCrossOrigin ? this.get_remoteBase() : this.get_localBase(); return null != b ? I.joinPath(b, a.url) : a.url },
        get_localBase: function() { return this._localBase },
        set_localBase: function(a) { null != a && cd.that(!O.startsWith(a, "http://") && !O.startsWith(a, "https://"), "localBase must be a path on the same domain, NOT starting with http(s)://", null); return this._localBase = a },
        get_remoteBase: function() { return this._remoteBase },
        __class__: X
    };
    var M = d["flambe.display.BlendMode"] = { __ename__: !0, __constructs__: "Normal,Add,Multiply,Screen,Mask,Copy".split(",") };
    M.Normal = ["Normal", 0];
    M.Normal.__enum__ = M;
    M.Add = ["Add", 1];
    M.Add.__enum__ = M;
    M.Multiply = ["Multiply", 2];
    M.Multiply.__enum__ =
        M;
    M.Screen = ["Screen", 3];
    M.Screen.__enum__ = M;
    M.Mask = ["Mask", 4];
    M.Mask.__enum__ = M;
    M.Copy = ["Copy", 5];
    M.Copy.__enum__ = M;
    var Ia = function(a, b) { null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b };
    d["flambe.math.Point"] = Ia;
    Ia.__name__ = !0;
    Ia.prototype = { __class__: Ia };
    var g = function() {
        this._viewMatrixUpdateCount = this._parentViewMatrixUpdateCount = 0;
        this.blendMode = this.scissor = this._viewMatrix = null;
        var a = this;
        q.call(this);
        this._flags |= 54;
        this._localMatrix = new sa;
        var b = function() { a._flags |= 24 };
        this.x = new D(0, b);
        this.y =
            new D(0, b);
        this.rotation = new D(0, b);
        this.scaleX = new D(1, b);
        this.scaleY = new D(1, b);
        this.anchorX = new D(0, b);
        this.anchorY = new D(0, b);
        this.alpha = new D(1)
    };
    d["flambe.display.Sprite"] = g;
    g.__name__ = !0;
    g.hitTest = function(a, b, c) {
        var e = a._compMap.Sprite_2;
        if (null != e) { if (6 != (e._flags & 6)) return null;
            e.getLocalMatrix().inverseTransform(b, c, g._scratchPoint) && (b = g._scratchPoint.x, c = g._scratchPoint.y); var i = e.scissor; if (null != i && !i.contains(b, c)) return null } a = g.hitTestBackwards(a.firstChild, b, c);
        return null != a ? a :
            null != e && e.containsLocal(b, c) ? e : null
    };
    g.getBounds = function(a, b) { null == b && (b = new nb);
        b.set(1.79769313486231E308, 1.79769313486231E308, -1.79769313486231E308, -1.79769313486231E308);
        g.getBoundsImpl(a, null, b);
        b.width -= b.x;
        b.height -= b.y; return b };
    g.render = function(a, b) {
        var c = a._compMap.Sprite_2;
        if (null != c) {
            var e = c.alpha._value;
            if (0 == (c._flags & 2) || 0 >= e) return;
            b.save();
            1 > e && b.multiplyAlpha(e);
            null != c.blendMode && b.setBlendMode(c.blendMode);
            var e = c.getLocalMatrix(),
                i = e.m02,
                d = e.m12;
            0 != (c._flags & 32) && (i = Math.round(i),
                d = Math.round(d));
            b.transform(e.m00, e.m10, e.m01, e.m11, i, d);
            e = c.scissor;
            null != e && b.applyScissor(e.x, e.y, e.width, e.height);
            c.draw(b)
        }
        e = a._compMap.Director_15;
        if (null != e) { e = e.occludedScenes; for (i = 0; i < e.length;) d = e[i], ++i, g.render(d, b) }
        for (e = a.firstChild; null != e;) i = e.next, g.render(e, b), e = i;
        null != c && b.restore()
    };
    g.hitTestBackwards = function(a, b, c) { if (null != a) { var e = g.hitTestBackwards(a.next, b, c); return null != e ? e : g.hitTest(a, b, c) } return null };
    g.getBoundsImpl = function(a, b, c) {
        var e = a._compMap.Sprite_2;
        if (null !=
            e) { var b = null != b ? sa.multiply(b, e.getLocalMatrix()) : e.getLocalMatrix(),
                i = e.getNaturalWidth(),
                e = e.getNaturalHeight();
            0 < i && 0 < e && (g.extendRect(b, 0, 0, c), g.extendRect(b, i, 0, c), g.extendRect(b, i, e, c), g.extendRect(b, 0, e, c)) } i = a._compMap.Director_15;
        if (null != i)
            for (var i = i.occludedScenes, e = 0, d = i.length; e < d;) g.getBoundsImpl(i[e], b, c), ++e;
        for (a = a.firstChild; null != a;) i = a.next, g.getBoundsImpl(a, b, c), a = i
    };
    g.extendRect = function(a, b, c, e) {
        a = a.transform(b, c, g._scratchPoint);
        b = a.x;
        c = a.y;
        b < e.x && (e.x = b);
        c < e.y && (e.y = c);
        b > e.width && (e.width = b);
        c > e.height && (e.height = c)
    };
    g.__super__ = q;
    g.prototype = o(q.prototype, {
        get_name: function() { return "Sprite_2" },
        getNaturalWidth: function() { return 0 },
        getNaturalHeight: function() { return 0 },
        containsLocal: function(a, b) { return 0 <= a && a < this.getNaturalWidth() && 0 <= b && b < this.getNaturalHeight() },
        getLocalMatrix: function() {
            0 != (this._flags & 8) && (this._flags &= -9, this._localMatrix.compose(this.x._value, this.y._value, this.scaleX._value, this.scaleY._value, 3.141592653589793 * this.rotation._value / 180),
                this._localMatrix.translate(-this.anchorX._value, -this.anchorY._value));
            return this._localMatrix
        },
        getViewMatrix: function() { if (this.isViewMatrixDirty()) { var a = this.getParentSprite();
                this._viewMatrix = null != a ? sa.multiply(a.getViewMatrix(), this.getLocalMatrix(), this._viewMatrix) : this.getLocalMatrix().clone(this._viewMatrix);
                this._flags &= -17;
                null != a && (this._parentViewMatrixUpdateCount = a._viewMatrixUpdateCount);++this._viewMatrixUpdateCount } return this._viewMatrix },
        setAnchor: function(a, b) {
            this.anchorX.set__(a);
            this.anchorY.set__(b);
            return this
        },
        centerAnchor: function() { this.anchorX.set__(this.getNaturalWidth() / 2);
            this.anchorY.set__(this.getNaturalHeight() / 2); return this },
        setXY: function(a, b) { this.x.set__(a);
            this.y.set__(b); return this },
        setScale: function(a) { this.scaleX.set__(a);
            this.scaleY.set__(a); return this },
        setScaleXY: function(a, b) { this.scaleX.set__(a);
            this.scaleY.set__(b); return this },
        onAdded: function() { 0 != (this._flags & 64) && this.connectHover() },
        onRemoved: function() {
            null != this._hoverConnection && (this._hoverConnection.dispose(),
                this._hoverConnection = null)
        },
        onUpdate: function(a) { this.x.update(a);
            this.y.update(a);
            this.rotation.update(a);
            this.scaleX.update(a);
            this.scaleY.update(a);
            this.alpha.update(a);
            this.anchorX.update(a);
            this.anchorY.update(a) },
        draw: function() {},
        isViewMatrixDirty: function() { if (0 != (this._flags & 16)) return !0; var a = this.getParentSprite(); return null == a ? !1 : this._parentViewMatrixUpdateCount != a._viewMatrixUpdateCount || a.isViewMatrixDirty() },
        getParentSprite: function() {
            if (null == this.owner) return null;
            for (var a = this.owner.parent; null !=
                a;) { var b = a._compMap.Sprite_2; if (null != b) return b;
                a = a.parent }
            return null
        },
        get_pointerDown: function() { null == this._pointerDown && (this._pointerDown = new z); return this._pointerDown },
        get_pointerUp: function() { null == this._pointerUp && (this._pointerUp = new z); return this._pointerUp },
        get_pointerIn: function() { null == this._pointerIn && (this._pointerIn = new z); return this._pointerIn },
        get_pointerOut: function() { null == this._pointerOut && (this._pointerOut = new z); return this._pointerOut },
        connectHover: function() {
            var a = this;
            null == this._hoverConnection && (this._hoverConnection = r._platform.getPointer().move.connect(function(b) { for (var c = b.hit; null != c;) { if (c == a) return;
                    c = c.getParentSprite() } null != a._pointerOut && 0 != (a._flags & 64) && a._pointerOut.emit(b);
                a._flags &= -65;
                a._hoverConnection.dispose();
                a._hoverConnection = null }))
        },
        set_visible: function(a) { this._flags = wc.set(this._flags, 2, a); return a },
        onPointerDown: function(a) { this.onHover(a);
            null != this._pointerDown && this._pointerDown.emit(a) },
        onPointerMove: function(a) {
            this.onHover(a);
            null != this._pointerMove && this._pointerMove.emit(a)
        },
        onHover: function(a) { if (0 == (this._flags & 64) && (this._flags |= 64, null != this._pointerIn || null != this._pointerOut)) null != this._pointerIn && this._pointerIn.emit(a), this.connectHover() },
        onPointerUp: function(a) { switch (a.source[1]) {
                case 1:
                    null != this._pointerOut && 0 != (this._flags & 64) && this._pointerOut.emit(a), this._flags &= -65, null != this._hoverConnection && (this._hoverConnection.dispose(), this._hoverConnection = null) } null != this._pointerUp && this._pointerUp.emit(a) },
        __class__: g
    });
    var ha = function(a, b, c) { g.call(this);
        this.color = a;
        this.width = new D(b);
        this.height = new D(c) };
    d["flambe.display.FillSprite"] = ha;
    ha.__name__ = !0;
    ha.__super__ = g;
    ha.prototype = o(g.prototype, { draw: function(a) { a.fillRect(this.color, 0, 0, this.width._value, this.height._value) }, getNaturalWidth: function() { return this.width._value }, getNaturalHeight: function() { return this.height._value }, onUpdate: function(a) { g.prototype.onUpdate.call(this, a);
            this.width.update(a);
            this.height.update(a) }, __class__: ha });
    var Ib = function(a) { this._kernings = null;
        this.xOffset = this.yOffset = this.xAdvance = 0;
        this.page = null;
        this.x = this.y = this.width = this.height = 0;
        this.charCode = a };
    d["flambe.display.Glyph"] = Ib;
    Ib.__name__ = !0;
    Ib.prototype = {
        draw: function(a, b, c) { 0 < this.width && a.drawSubTexture(this.page, b + this.xOffset, c + this.yOffset, this.x, this.y, this.width, this.height) },
        getKerning: function(a) { return null != this._kernings ? u["int"](this._kernings.get(a)) : 0 },
        setKerning: function(a, b) {
            null == this._kernings && (this._kernings = new ia);
            this._kernings.set(a,
                b)
        },
        __class__: Ib
    };
    var Za = function(a, b) { this.name = b;
        this._pack = a;
        this._file = a.getFile(b + ".fnt");
        this.reload() };
    d["flambe.display.Font"] = Za;
    Za.__name__ = !0;
    Za.prototype = {
        layoutText: function(a, b, c, e, i) { null == i && (i = 0);
            null == e && (e = 0);
            null == c && (c = 0);
            null == b && (b = ja.Left); return new Ja(this, a, b, c, e, i) },
        reload: function() {
            this._glyphs = new ia;
            this._glyphs.set(Za.NEWLINE.charCode, Za.NEWLINE);
            for (var a = new $a(this._file.toString()), b = new ia, c = this.name.lastIndexOf("/"), c = 0 <= c ? s.substr(this.name, 0, c + 1) : "", e = a.keywords(); e.hasNext();) switch (e.next()) {
                case "info":
                    for (var i =
                            a.pairs(); i.hasNext();) { var d = i.next(); switch (d.key) {
                            case "size":
                                this.size = d.getInt() } }
                    break;
                case "common":
                    for (i = a.pairs(); i.hasNext();) switch (d = i.next(), d.key) {
                        case "lineHeight":
                            this.lineHeight = d.getInt() }
                    break;
                case "page":
                    for (var i = 0, d = null, f = a.pairs(); f.hasNext();) { var n = f.next(); switch (n.key) {
                            case "id":
                                i = n.getInt(); break;
                            case "file":
                                d = n.getString() } } d = this._pack.getTexture(c + I.removeFileExtension(d));
                    b.set(i, d);
                    break;
                case "char":
                    i = null;
                    for (d = a.pairs(); d.hasNext();) switch (f = d.next(), f.key) {
                        case "id":
                            i =
                                new Ib(f.getInt());
                            break;
                        case "x":
                            i.x = f.getInt();
                            break;
                        case "y":
                            i.y = f.getInt();
                            break;
                        case "width":
                            i.width = f.getInt();
                            break;
                        case "height":
                            i.height = f.getInt();
                            break;
                        case "page":
                            f = f.getInt();
                            i.page = b.get(f);
                            break;
                        case "xoffset":
                            i.xOffset = f.getInt();
                            break;
                        case "yoffset":
                            i.yOffset = f.getInt();
                            break;
                        case "xadvance":
                            i.xAdvance = f.getInt()
                    }
                    this._glyphs.set(i.charCode, i);
                    break;
                case "kerning":
                    i = null;
                    f = d = 0;
                    for (n = a.pairs(); n.hasNext();) {
                        var g = n.next();
                        switch (g.key) {
                            case "first":
                                i = this._glyphs.get(g.getInt());
                                break;
                            case "second":
                                d = g.getInt();
                                break;
                            case "amount":
                                f = g.getInt()
                        }
                    }
                    null != i && 0 != f && i.setKerning(d, f)
            }
        },
        __class__: Za
    };
    var ja = d["flambe.display.TextAlign"] = { __ename__: !0, __constructs__: ["Left", "Center", "Right"] };
    ja.Left = ["Left", 0];
    ja.Left.__enum__ = ja;
    ja.Center = ["Center", 1];
    ja.Center.__enum__ = ja;
    ja.Right = ["Right", 2];
    ja.Right.__enum__ = ja;
    var Ja = function(a, b, c, e, i, d) {
        this.lines = 0;
        var f = this;
        this._font = a;
        this._glyphs = [];
        this._offsets = [];
        this._lineOffset = Math.round(a.lineHeight + d);
        this.bounds = new nb;
        for (var n = [], d = b.length, g = 0; g < d;) { var h = g++,
                h = b.charCodeAt(h),
                h = a._glyphs.get(h);
            null != h ? this._glyphs.push(h) : null }
        for (var b = -1, m = 0, j = 0, a = a._glyphs.get(10), d = function() { f.bounds.width = Z.max(f.bounds.width, m);
                f.bounds.height += j;
                n[f.lines] = m;
                j = m = 0;++f.lines }, g = 0; g < this._glyphs.length;) {
            h = this._glyphs[g];
            this._offsets[g] = Math.round(m);
            var k = 0 < e && m + h.width > e;
            k || h == a ? (k && (0 <= b ? (this._glyphs[b] = a, m = this._offsets[b], g = b) : this._glyphs.splice(g, 0, a)), b = -1, j = this._lineOffset, d()) : (32 == h.charCode && (b = g), m += h.xAdvance +
                i, j = Z.max(j, h.height + h.yOffset), g + 1 < this._glyphs.length && (m += h.getKerning(this._glyphs[g + 1].charCode)));
            ++g
        }
        d();
        i = 0;
        a = Ja.getAlignOffset(c, n[0], e);
        b = 1.79769313486231E308;
        d = -1.79769313486231E308;
        h = g = 0;
        for (k = this._glyphs.length; h < k;) { var l = this._glyphs[h];
            10 == l.charCode && (i += this._lineOffset, ++g, a = Ja.getAlignOffset(c, n[g], e));
            this._offsets[h] += a; var o = i + l.yOffset;
            b < o || (b = o);
            d = Z.max(d, o + l.height);++h } this.bounds.x = Ja.getAlignOffset(c, this.bounds.width, e);
        this.bounds.y = b;
        this.bounds.height = d - b
    };
    d["flambe.display.TextLayout"] =
        Ja;
    Ja.__name__ = !0;
    Ja.getAlignOffset = function(a, b, c) { switch (a[1]) {
            case 0:
                return 0;
            case 2:
                return c - b;
            case 1:
                return Math.round((c - b) / 2) } };
    Ja.prototype = { draw: function(a) { for (var b = 0, c = 0, e = this._glyphs.length; c < e;) { var i = this._glyphs[c];
                10 == i.charCode ? b += this._lineOffset : i.draw(a, this._offsets[c], b);++c } }, __class__: Ja };
    var $a = function(a) { this._configText = a;
        this._keywordPattern = new pa("([A-Za-z]+)(.*)", "");
        this._pairPattern = new pa('([A-Za-z]+)=("[^"]*"|[^\\s]+)', "") };
    d["flambe.display._Font.ConfigParser"] =
        $a;
    $a.__name__ = !0;
    $a.advance = function(a, b) { var c = b.matchedPos(); return s.substr(a, c.pos + c.len, a.length) };
    $a.prototype = {
        keywords: function() { var a = this,
                b = this._configText; return { next: function() { b = $a.advance(b, a._keywordPattern);
                    a._pairText = a._keywordPattern.matched(2); return a._keywordPattern.matched(1) }, hasNext: function() { return a._keywordPattern.match(b) } } },
        pairs: function() {
            var a = this,
                b = this._pairText;
            return {
                next: function() { b = $a.advance(b, a._pairPattern); return new xc(a._pairPattern.matched(1), a._pairPattern.matched(2)) },
                hasNext: function() { return a._pairPattern.match(b) }
            }
        },
        __class__: $a
    };
    var xc = function(a, b) { this.key = a;
        this._value = b };
    d["flambe.display._Font.ConfigPair"] = xc;
    xc.__name__ = !0;
    xc.prototype = { getInt: function() { return u.parseInt(this._value) }, getString: function() { return 34 != this._value.charCodeAt(0) ? null : s.substr(this._value, 1, this._value.length - 2) }, __class__: xc };
    var yc = function() {};
    d["flambe.display.Graphics"] = yc;
    yc.__name__ = !0;
    yc.prototype = { __class__: yc };
    var x = function(a) { g.call(this);
        this.texture = a };
    d["flambe.display.ImageSprite"] =
        x;
    x.__name__ = !0;
    x.__super__ = g;
    x.prototype = o(g.prototype, { draw: function(a) { null != this.texture && a.drawTexture(this.texture, 0, 0) }, getNaturalWidth: function() { return null != this.texture ? this.texture.get_width() : 0 }, getNaturalHeight: function() { return null != this.texture ? this.texture.get_height() : 0 }, __class__: x });
    var ab = d["flambe.display.Orientation"] = { __ename__: !0, __constructs__: ["Portrait", "Landscape"] };
    ab.Portrait = ["Portrait", 0];
    ab.Portrait.__enum__ = ab;
    ab.Landscape = ["Landscape", 1];
    ab.Landscape.__enum__ =
        ab;
    var Jb = function() {};
    d["flambe.display.Texture"] = Jb;
    Jb.__name__ = !0;
    Jb.__interfaces__ = [Ha];
    Jb.prototype = { __class__: Jb };
    var dd = function() {};
    d["flambe.display.SubTexture"] = dd;
    dd.__name__ = !0;
    dd.__interfaces__ = [Jb];
    var ob = function(a, b) { null == b && (b = "");
        this._layout = null; var c = this;
        g.call(this);
        this._font = a;
        this._text = b;
        this._align = ja.Left;
        this._flags |= 128; var e = function() { c._flags |= 128 };
        this.wrapWidth = new D(0, e);
        this.letterSpacing = new D(0, e);
        this.lineSpacing = new D(0, e) };
    d["flambe.display.TextSprite"] =
        ob;
    ob.__name__ = !0;
    ob.__super__ = g;
    ob.prototype = o(g.prototype, {
        draw: function(a) { this.updateLayout();
            this._layout.draw(a) },
        getNaturalWidth: function() { this.updateLayout(); return 0 < this.wrapWidth._value ? this.wrapWidth._value : this._layout.bounds.width },
        getNaturalHeight: function() { this.updateLayout(); var a = this._layout.lines * (this._font.lineHeight + this.lineSpacing._value),
                b = this._layout.bounds.height; return a > b ? a : b },
        containsLocal: function(a, b) { this.updateLayout(); return this._layout.bounds.contains(a, b) },
        set_text: function(a) { a != this._text && (this._text = a, this._flags |= 128); return a },
        updateLayout: function() { 0 != (this._flags & 128) && (this._flags &= -129, this._layout = this._font.layoutText(this._text, this._align, this.wrapWidth._value, this.letterSpacing._value, this.lineSpacing._value)) },
        onUpdate: function(a) { g.prototype.onUpdate.call(this, a);
            this.wrapWidth.update(a);
            this.letterSpacing.update(a);
            this.lineSpacing.update(a) },
        __class__: ob
    });
    var T = d["flambe.input.MouseButton"] = {
        __ename__: !0,
        __constructs__: ["Left",
            "Middle", "Right", "Unknown"
        ]
    };
    T.Left = ["Left", 0];
    T.Left.__enum__ = T;
    T.Middle = ["Middle", 1];
    T.Middle.__enum__ = T;
    T.Right = ["Right", 2];
    T.Right.__enum__ = T;
    T.Unknown = function(a) { a = ["Unknown", 3, a];
        a.__enum__ = T; return a };
    var ta = d["flambe.input.MouseCursor"] = { __ename__: !0, __constructs__: ["Default", "Button", "None"] };
    ta.Default = ["Default", 0];
    ta.Default.__enum__ = ta;
    ta.Button = ["Button", 1];
    ta.Button.__enum__ = ta;
    ta.None = ["None", 2];
    ta.None.__enum__ = ta;
    var zc = function() { this.init(0, 0, 0, null) };
    d["flambe.input.MouseEvent"] =
        zc;
    zc.__name__ = !0;
    zc.prototype = { init: function(a, b, c, e) { this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.button = e }, __class__: zc };
    var Kb = d["flambe.input.EventSource"] = { __ename__: !0, __constructs__: ["Mouse", "Touch"] };
    Kb.Mouse = function(a) { a = ["Mouse", 0, a];
        a.__enum__ = Kb; return a };
    Kb.Touch = function(a) { a = ["Touch", 1, a];
        a.__enum__ = Kb; return a };
    var Ac = function() { this.init(0, 0, 0, null, null) };
    d["flambe.input.PointerEvent"] = Ac;
    Ac.__name__ = !0;
    Ac.prototype = {
        init: function(a, b, c, e, i) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.hit =
                e;
            this.source = i;
            this._stopped = !1
        },
        __class__: Ac
    };
    var Bc = function(a) { this.id = a;
        this._source = Kb.Touch(this) };
    d["flambe.input.TouchPoint"] = Bc;
    Bc.__name__ = !0;
    Bc.prototype = { init: function(a, b) { this.viewX = a;
            this.viewY = b }, __class__: Bc };
    var Z = function() {};
    d["flambe.math.FMath"] = Z;
    Z.__name__ = !0;
    Z.max = function(a, b) { return a > b ? a : b };
    Z.min = function(a, b) { return a < b ? a : b };
    Z.clamp = function(a, b, c) { return a < b ? b : a > c ? c : a };
    var sa = function() { this.identity() };
    d["flambe.math.Matrix"] = sa;
    sa.__name__ = !0;
    sa.multiply = function(a,
        b, c) { null == c && (c = new sa); var e = a.m00 * b.m00 + a.m01 * b.m10,
            i = a.m00 * b.m01 + a.m01 * b.m11,
            d = a.m00 * b.m02 + a.m01 * b.m12 + a.m02;
        c.m00 = e;
        c.m01 = i;
        c.m02 = d;
        e = a.m10 * b.m00 + a.m11 * b.m10;
        i = a.m10 * b.m01 + a.m11 * b.m11;
        d = a.m10 * b.m02 + a.m11 * b.m12 + a.m12;
        c.m10 = e;
        c.m11 = i;
        c.m12 = d; return c };
    sa.prototype = {
        set: function(a, b, c, e, i, d) { this.m00 = a;
            this.m01 = c;
            this.m02 = i;
            this.m10 = b;
            this.m11 = e;
            this.m12 = d },
        identity: function() { this.set(1, 0, 0, 1, 0, 0) },
        compose: function(a, b, c, e, i) { var d = Math.sin(i),
                i = Math.cos(i);
            this.set(i * c, d * c, -d * e, i * e, a, b) },
        translate: function(a,
            b) { this.m02 += this.m00 * a + this.m01 * b;
            this.m12 += this.m11 * b + this.m10 * a },
        transform: function(a, b, c) { null == c && (c = new Ia);
            c.x = a * this.m00 + b * this.m01 + this.m02;
            c.y = a * this.m10 + b * this.m11 + this.m12; return c },
        determinant: function() { return this.m00 * this.m11 - this.m01 * this.m10 },
        inverseTransform: function(a, b, c) { var e = this.determinant(); if (0 == e) return !1;
            a -= this.m02;
            b -= this.m12;
            c.x = (a * this.m11 - b * this.m01) / e;
            c.y = (b * this.m00 - a * this.m10) / e; return !0 },
        clone: function(a) {
            null == a && (a = new sa);
            a.set(this.m00, this.m10, this.m01,
                this.m11, this.m02, this.m12);
            return a
        },
        __class__: sa
    };
    var nb = function(a, b, c, e) { null == e && (e = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.set(a, b, c, e) };
    d["flambe.math.Rectangle"] = nb;
    nb.__name__ = !0;
    nb.prototype = {
        set: function(a, b, c, e) { this.x = a;
            this.y = b;
            this.width = c;
            this.height = e },
        contains: function(a, b) { a -= this.x; if (0 <= this.width) { if (0 > a || a > this.width) return !1 } else if (0 < a || a < this.width) return !1;
            b -= this.y; if (0 <= this.height) { if (0 > b || b > this.height) return !1 } else if (0 < b || b < this.height) return !1; return !0 },
        intersects: function(a, b) { var c = Z.max(this.x, a.x),
                e = Z.min(this.get_right(), a.get_right()); if (c > e) return !1; var i = Z.max(this.y, a.y),
                d = Z.min(this.get_bottom(), a.get_bottom()); if (i > d) return !1;
            null != b && b.set(c, i, e - c, d - i); return !0 },
        get_right: function() { return this.x + this.width },
        get_bottom: function() { return this.y + this.height },
        __class__: nb
    };
    var Q = function() { this._disposed = !1 };
    d["flambe.platform.BasicAsset"] = Q;
    Q.__name__ = !0;
    Q.__interfaces__ = [Ha];
    Q.prototype = {
        dispose: function() {
            this._disposed || (this._disposed = !0, this.onDisposed())
        },
        onDisposed: function() { null },
        __class__: Q
    };
    var Ka = function(a, b) {
        var c = this;
        this.manifest = b;
        this._platform = a;
        this.promise = new Lb;
        this._bytesLoaded = new K;
        this._pack = new Mb(b, this);
        var e = Bb.array(b);
        if (0 == e.length) this.handleSuccess();
        else {
            for (var i = new K, d = 0; d < e.length;) { var f = e[d];++d; var n = i.get(f.name);
                null == n && (n = [], i.set(f.name, n));
                n.push(f) } this._assetsRemaining = Bb.count(i);
            for (e = i.iterator(); e.hasNext();) i = [e.next()], this.pickBestEntry(i[0], function(a) {
                return function(e) {
                    if (null !=
                        e) { var i = b.getFullURL(e); try { c.loadEntry(i, e) } catch (d) { c.handleError(e, "Unexpected error: " + u.string(d)) } i = c.promise;
                        i.set_total(i._total + e.bytes) } else e = a[0][0], Ka.isAudio(e.format) ? c.handleLoad(e, Y.getInstance()) : c.handleError(e, "Could not find a supported format to load")
                }
            }(i))
        }
    };
    d["flambe.platform.BasicAssetPackLoader"] = Ka;
    Ka.__name__ = !0;
    Ka.isAudio = function(a) { switch (a[1]) {
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                return !0;
            default:
                return !1 } };
    Ka.prototype = {
        onDisposed: function() {},
        pickBestEntry: function(a,
            b) { this.getAssetFormats(function(c) { for (var e = 0; e < c.length;) { var i = c[e];++e; for (var d = 0; d < a.length;) { var f = a[d];++d; if (f.format == i) { b(f); return } } } b(null) }) },
        loadEntry: function() { null },
        getAssetFormats: function() { null },
        handleLoad: function(a, b) {
            if (!this._pack.disposed) {
                this.handleProgress(a, a.bytes);
                var c;
                switch (a.format[1]) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        c = this._pack.textures; break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        c = this._pack.sounds; break;
                    case 13:
                        c = this._pack.files } c.set(a.name,
                    b);
                this._assetsRemaining -= 1;
                0 == this._assetsRemaining && this.handleSuccess()
            }
        },
        handleProgress: function(a, b) { this._bytesLoaded.set(a.name, b); for (var c = 0, e = this._bytesLoaded.iterator(); e.hasNext();) var i = e.next(),
                c = c + i;
            this.promise.set_progress(c) },
        handleSuccess: function() { this.promise.set_result(this._pack) },
        handleError: function(a, b) { this.promise.error.emit(I.withFields(b, ["url", a.url])) },
        handleTextureError: function(a) { this.handleError(a, "Failed to create texture. Is the GPU context unavailable?") },
        __class__: Ka
    };
    var Mb = function(a, b) { this.disposed = !1;
        this._manifest = a;
        this.loader = b;
        this.textures = new K;
        this.sounds = new K;
        this.files = new K };
    d["flambe.platform._BasicAssetPackLoader.BasicAssetPack"] = Mb;
    Mb.__name__ = !0;
    Mb.__interfaces__ = [mb];
    Mb.prototype = {
        getTexture: function(a, b) { null == b && (b = !0); var c = this.textures.get(a); if (null == c && b) throw I.withFields("Missing texture", ["name", a]); return c },
        getSound: function(a, b) {
            null == b && (b = !0);
            var c = this.sounds.get(a);
            if (null == c && b) throw I.withFields("Missing sound",
                ["name", a]);
            return c
        },
        getFile: function(a, b) { null == b && (b = !0); var c = this.files.get(a); if (null == c && b) throw I.withFields("Missing file", ["name", a]); return c },
        dispose: function() { if (!this.disposed) { this.disposed = !0; for (var a = this.textures.iterator(); a.hasNext();) a.next().dispose();
                this.textures = null; for (a = this.sounds.iterator(); a.hasNext();) a.next().dispose();
                this.sounds = null; for (a = this.files.iterator(); a.hasNext();) a.next().dispose();
                this.files = null;
                this.loader.onDisposed() } },
        __class__: Mb
    };
    var pb = function(a) {
        this._disposed = !1;
        this._content = a
    };
    d["flambe.platform.BasicFile"] = pb;
    pb.__name__ = !0;
    pb.__interfaces__ = [Hb];
    pb.__super__ = Q;
    pb.prototype = o(Q.prototype, { toString: function() { return this._content }, onDisposed: function() { this._content = null }, __class__: pb });
    var id = function() {};
    d["flambe.subsystem.MouseSystem"] = id;
    id.__name__ = !0;
    var U = function(a) {
        this._pointer = a;
        this._source = Kb.Mouse(U._sharedEvent);
        this.down = new z;
        this.move = new z;
        this.up = new z;
        this.scroll = new z;
        this._y = this._x = 0;
        this._cursor = ta.Default;
        this._buttonStates =
            new ia
    };
    d["flambe.platform.BasicMouse"] = U;
    U.__name__ = !0;
    U.__interfaces__ = [id];
    U.prototype = {
        submitDown: function(a, b, c) { this._buttonStates.exists(c) || (this._buttonStates.set(c, !0), this.prepare(a, b, Cc.toButton(c)), this._pointer.submitDown(a, b, this._source), this.down.emit(U._sharedEvent)) },
        submitMove: function(a, b) { this.prepare(a, b, null);
            this._pointer.submitMove(a, b, this._source);
            this.move.emit(U._sharedEvent) },
        submitUp: function(a, b, c) {
            this._buttonStates.exists(c) && (this._buttonStates.remove(c), this.prepare(a,
                b, Cc.toButton(c)), this._pointer.submitUp(a, b, this._source), this.up.emit(U._sharedEvent))
        },
        submitScroll: function(a, b, c) { this._x = a;
            this._y = b; if (null == this.scroll._head) return !1;
            this.scroll.emit(c); return !0 },
        prepare: function(a, b, c) { this._x = a;
            this._y = b;
            U._sharedEvent.init(U._sharedEvent.id + 1, a, b, c) },
        __class__: U
    };
    var Dc = function() {};
    d["flambe.subsystem.PointerSystem"] = Dc;
    Dc.__name__ = !0;
    Dc.prototype = { __class__: Dc };
    var L = function(a, b, c) {
        null == c && (c = !1);
        null == b && (b = 0);
        null == a && (a = 0);
        this.down = new z;
        this.move =
            new z;
        this.up = new z;
        this._x = a;
        this._y = b;
        this._isDown = c
    };
    d["flambe.platform.BasicPointer"] = L;
    L.__name__ = !0;
    L.__interfaces__ = [Dc];
    L.prototype = {
        submitDown: function(a, b, c) { if (!this._isDown) { this.submitMove(a, b, c);
                this._isDown = !0; var e = [],
                    i = g.hitTest(r.root, a, b); if (null != i) { var d = i.owner;
                    do { var f = d._compMap.Sprite_2;
                        null != f && e.push(f);
                        d = d.parent } while (null != d) } this.prepare(a, b, i, c); for (a = 0; a < e.length;)
                    if (b = e[a], ++a, b.onPointerDown(L._sharedEvent), L._sharedEvent._stopped) return;
                this.down.emit(L._sharedEvent) } },
        submitMove: function(a, b, c) { if (!(a == this._x && b == this._y)) { var e = [],
                    i = g.hitTest(r.root, a, b); if (null != i) { var d = i.owner;
                    do { var f = d._compMap.Sprite_2;
                        null != f && e.push(f);
                        d = d.parent } while (null != d) } this.prepare(a, b, i, c); for (a = 0; a < e.length;)
                    if (b = e[a], ++a, b.onPointerMove(L._sharedEvent), L._sharedEvent._stopped) return;
                this.move.emit(L._sharedEvent) } },
        submitUp: function(a, b, c) {
            if (this._isDown) {
                this.submitMove(a, b, c);
                this._isDown = !1;
                var e = [],
                    i = g.hitTest(r.root, a, b);
                if (null != i) {
                    var d = i.owner;
                    do {
                        var f = d._compMap.Sprite_2;
                        null != f && e.push(f);
                        d = d.parent
                    } while (null != d)
                }
                this.prepare(a, b, i, c);
                for (a = 0; a < e.length;)
                    if (b = e[a], ++a, b.onPointerUp(L._sharedEvent), L._sharedEvent._stopped) return;
                this.up.emit(L._sharedEvent)
            }
        },
        prepare: function(a, b, c, e) { this._x = a;
            this._y = b;
            L._sharedEvent.init(L._sharedEvent.id + 1, a, b, c, e) },
        __class__: L
    };
    var La = function(a, b, c) { this._x = this._y = 0;
        this._parent = null;
        this.rootX = this.rootY = 0;
        this._disposed = !1;
        this.root = a;
        this._width = b;
        this._height = c };
    d["flambe.platform.BasicTexture"] = La;
    La.__name__ = !0;
    La.__interfaces__ = [dd];
    La.__super__ = Q;
    La.prototype = o(Q.prototype, { subTexture: function(a, b, c, e) { c = this.root.createTexture(c, e);
            c._parent = this;
            c._x = a;
            c._y = b;
            c.rootX = this.rootX + a;
            c.rootY = this.rootY + b; return c }, onDisposed: function() { null == this._parent && this.root.dispose() }, get_width: function() { return this._width }, get_height: function() { return this._height }, __class__: La });
    var ed = function() {};
    d["flambe.subsystem.TouchSystem"] = ed;
    ed.__name__ = !0;
    var Eb = function(a, b) {
        null == b && (b = 4);
        this._pointer = a;
        this._maxPoints = b;
        this._pointMap =
            new ia;
        this._points = [];
        this.down = new z;
        this.move = new z;
        this.up = new z
    };
    d["flambe.platform.BasicTouch"] = Eb;
    Eb.__name__ = !0;
    Eb.__interfaces__ = [ed];
    Eb.prototype = {
        submitDown: function(a, b, c) { if (!this._pointMap.exists(a)) { var e = new Bc(a);
                e.init(b, c);
                this._pointMap.set(a, e);
                this._points.push(e);
                null == this._pointerTouch && (this._pointerTouch = e, this._pointer.submitDown(b, c, e._source));
                this.down.emit(e) } },
        submitMove: function(a, b, c) {
            a = this._pointMap.get(a);
            null != a && (a.init(b, c), this._pointerTouch == a && this._pointer.submitMove(b,
                c, a._source), this.move.emit(a))
        },
        submitUp: function(a, b, c) { var e = this._pointMap.get(a);
            null != e && (e.init(b, c), this._pointMap.remove(a), s.remove(this._points, e), this._pointerTouch == e && (this._pointerTouch = null, this._pointer.submitUp(b, c, e._source)), this.up.emit(e)) },
        __class__: Eb
    };
    var bb = function() {};
    d["flambe.sound.Sound"] = bb;
    bb.__name__ = !0;
    bb.__interfaces__ = [Ha];
    bb.prototype = { __class__: bb };
    var Y = function() { this._disposed = !1;
        this._playback = new Nb(this) };
    d["flambe.platform.DummySound"] = Y;
    Y.__name__ = !0;
    Y.__interfaces__ = [bb];
    Y.getInstance = function() { null == Y._instance && (Y._instance = new Y); return Y._instance };
    Y.__super__ = Q;
    Y.prototype = o(Q.prototype, { play: function() { return this._playback }, onDisposed: function() {}, __class__: Y });
    var cb = function() {};
    d["flambe.sound.Playback"] = cb;
    cb.__name__ = !0;
    cb.__interfaces__ = [ca];
    cb.prototype = { __class__: cb };
    var Nb = function(a) { this._sound = a;
        this.volume = new D(0);
        this._complete = new P(!0) };
    d["flambe.platform.DummyPlayback"] = Nb;
    Nb.__name__ = !0;
    Nb.__interfaces__ = [cb];
    Nb.prototype = { get_sound: function() { return this._sound }, dispose: function() {}, __class__: Nb };
    var Fb = function() { this.down = new z;
        this.move = new z;
        this.up = new z };
    d["flambe.platform.DummyTouch"] = Fb;
    Fb.__name__ = !0;
    Fb.__interfaces__ = [ed];
    Fb.prototype = { __class__: Fb };
    var qb = function() { this._entries = [] };
    d["flambe.platform.EventGroup"] = qb;
    qb.__name__ = !0;
    qb.__interfaces__ = [ca];
    qb.prototype = {
        addListener: function(a, b, c) { a.addEventListener(b, c, !1);
            this._entries.push(new Ec(a, b, c)) },
        addDisposingListener: function(a, b, c) {
            var e = this;
            this.addListener(a, b, function(a) { e.dispose();
                c(a) })
        },
        dispose: function() { for (var a = 0, b = this._entries; a < b.length;) { var c = b[a];++a;
                c.dispatcher.removeEventListener(c.type, c.listener, !1) } this._entries = [] },
        __class__: qb
    };
    var Ec = function(a, b, c) { this.dispatcher = a;
        this.type = b;
        this.listener = c };
    d["flambe.platform._EventGroup.Entry"] = Ec;
    Ec.__name__ = !0;
    Ec.prototype = { __class__: Ec };
    var Ob = function() {};
    d["flambe.platform.InternalGraphics"] = Ob;
    Ob.__name__ = !0;
    Ob.__interfaces__ = [yc];
    Ob.prototype = { __class__: Ob };
    var Fc =
        function() {};
    d["flambe.subsystem.RendererSystem"] = Fc;
    Fc.__name__ = !0;
    Fc.prototype = { __class__: Fc };
    var Pb = function() {};
    d["flambe.platform.InternalRenderer"] = Pb;
    Pb.__name__ = !0;
    Pb.__interfaces__ = [Fc];
    Pb.prototype = { __class__: Pb };
    var Wa = function() { this._tickables = [] };
    d["flambe.platform.MainLoop"] = Wa;
    Wa.__name__ = !0;
    Wa.updateEntity = function(a, b) {
        var c = a._compMap.SpeedAdjuster_10;
        if (null != c && (c._realDt = b, b *= c.scale._value, 0 >= b)) { c.onUpdate(b); return }
        for (c = a.firstComponent; null != c;) {
            var e = c.next;
            0 == (c._flags &
                1) && (c._flags |= 1, c.onStart());
            c.onUpdate(b);
            c = e
        }
        for (c = a.firstChild; null != c;) e = c.next, Wa.updateEntity(c, b), c = e
    };
    Wa.prototype = { update: function(a) { if (!(0 >= a)) { 1 < a && (a = 1); for (var b = 0; b < this._tickables.length;) { var c = this._tickables[b];
                    null == c || c.update(a) ? this._tickables.splice(b, 1) : ++b } r.volume.update(a);
                Wa.updateEntity(r.root, a) } }, render: function(a) { var b = a.graphics;
            null != b && (a.willRender(), g.render(r.root, b), a.didRender()) }, addTickable: function(a) { this._tickables.push(a) }, __class__: Wa };
    var Cc = function() {};
    d["flambe.platform.MouseCodes"] = Cc;
    Cc.__name__ = !0;
    Cc.toButton = function(a) { switch (a) {
            case 0:
                return T.Left;
            case 1:
                return T.Middle;
            case 2:
                return T.Right } return T.Unknown(a) };
    var Gc = function() {};
    d["flambe.platform.TextureRoot"] = Gc;
    Gc.__name__ = !0;
    Gc.prototype = { __class__: Gc };
    var Qb = function() {};
    d["flambe.platform.Tickable"] = Qb;
    Qb.__name__ = !0;
    Qb.prototype = { __class__: Qb };
    var Rb = function(a, b) { this._firstDraw = !1;
        this._canvasCtx = a.getContext("2d", { alpha: b }) };
    d["flambe.platform.html.CanvasGraphics"] = Rb;
    Rb.__name__ = !0;
    Rb.__interfaces__ = [Ob];
    Rb.prototype = {
        save: function() { this._canvasCtx.save() },
        transform: function(a, b, c, e, i, d) { this._canvasCtx.transform(a, b, c, e, i, d) },
        restore: function() { this._canvasCtx.restore() },
        drawTexture: function(a, b, c) { this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height()) },
        drawSubTexture: function(a, b, c, e, i, d, f) {
            this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.drawSubTexture(a, b, c, e, i, d, f), this._canvasCtx.globalCompositeOperation = "source-over") :
                this._canvasCtx.drawImage(a.root.image, a.rootX + e | 0, a.rootY + i | 0, d | 0, f | 0, b | 0, c | 0, d | 0, f | 0)
        },
        fillRect: function(a, b, c, e, i) { if (this._firstDraw) this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.fillRect(a, b, c, e, i), this._canvasCtx.globalCompositeOperation = "source-over";
            else { for (a = (16777215 & a).toString(16); 6 > a.length;) a = "0" + u.string(a);
                this._canvasCtx.fillStyle = "#" + u.string(a);
                this._canvasCtx.fillRect(b | 0, c | 0, e | 0, i | 0) } },
        multiplyAlpha: function(a) { this._canvasCtx.globalAlpha *= a },
        setBlendMode: function(a) {
            var b;
            switch (a[1]) {
                case 0:
                    b = "source-over"; break;
                case 1:
                    b = "lighter"; break;
                case 2:
                    b = "multiply"; break;
                case 3:
                    b = "screen"; break;
                case 4:
                    b = "destination-in"; break;
                case 5:
                    b = "copy" } this._canvasCtx.globalCompositeOperation = b
        },
        applyScissor: function(a, b, c, e) { this._canvasCtx.beginPath();
            this._canvasCtx.rect(a | 0, b | 0, c | 0, e | 0);
            this._canvasCtx.clip() },
        willRender: function() { this._firstDraw = !0 },
        didRender: function() {},
        __class__: Rb
    };
    var Xa = function(a) { this.graphics = new Rb(a, !1);
        this._hasGPU = new P(!0) };
    d["flambe.platform.html.CanvasRenderer"] =
        Xa;
    Xa.__name__ = !0;
    Xa.__interfaces__ = [Pb];
    Xa.prototype = { get_type: function() { return ua.Canvas }, createTextureFromImage: function(a) { a = new rb(Xa.CANVAS_TEXTURES ? t.createCanvas(a) : a); return a.createTexture(a.width, a.height) }, getCompressedTextureFormats: function() { return [] }, createCompressedTexture: function() { return null }, willRender: function() { this.graphics.willRender() }, didRender: function() { this.graphics.didRender() }, __class__: Xa };
    var Sb = function(a, b, c) { La.call(this, a, b, c) };
    d["flambe.platform.html.CanvasTexture"] =
        Sb;
    Sb.__name__ = !0;
    Sb.__super__ = La;
    Sb.prototype = o(La.prototype, { __class__: Sb });
    var rb = function(a) { this._graphics = null;
        this._disposed = !1;
        this.image = a;
        this.width = a.width;
        this.height = a.height };
    d["flambe.platform.html.CanvasTextureRoot"] = rb;
    rb.__name__ = !0;
    rb.__interfaces__ = [Gc];
    rb.__super__ = Q;
    rb.prototype = o(Q.prototype, { createTexture: function(a, b) { return new Sb(this, a, b) }, onDisposed: function() { this._graphics = this.image = null }, __class__: rb });
    var w = function(a, b) { Ka.call(this, a, b) };
    d["flambe.platform.html.HtmlAssetPackLoader"] =
        w;
    w.__name__ = !0;
    w.detectImageFormats = function(a) { var b = [k.PNG, k.JPG, k.GIF],
            c = 2,
            e;
        e = window.document.createElement("img");
        e.onload = e.onerror = function() { 1 == e.width && b.unshift(k.WEBP);--c;
            0 == c && a(b) };
        e.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="; var i;
        i = window.document.createElement("img");
        i.onload = i.onerror = function() { 1 == i.width && b.unshift(k.JXR);--c;
            0 == c && a(b) };
        i.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA==" };
    w.detectAudioFormats = function() {
        var a;
        a = window.document.createElement("audio");
        if (null == a || null == l(a, a.canPlayType)) return [];
        var b = new pa("\\b(iPhone|iPod|iPad|Android|Windows Phone)\\b", ""),
            c = window.navigator.userAgent;
        if (!y.get_supported() && b.match(c)) return [];
        for (var b = [{ format: k.M4A, mimeType: "audio/mp4; codecs=mp4a" }, { format: k.MP3, mimeType: "audio/mpeg" }, { format: k.OPUS, mimeType: "audio/ogg; codecs=opus" }, { format: k.OGG, mimeType: "audio/ogg; codecs=vorbis" }, { format: k.WAV, mimeType: "audio/wav" }], c = [],
                e = 0; e < b.length;) { var i = b[e];++e; var d = ""; try { d = a.canPlayType(i.mimeType) } catch (f) {} "" != d && c.push(i.format) }
        return c
    };
    w.supportsBlob = function() { if (w._detectBlobSupport) { w._detectBlobSupport = !1; if ((new pa("\\bSilk\\b", "")).match(window.navigator.userAgent) || null == window.Blob) return !1; var a = new XMLHttpRequest;
            a.open("GET", ".", !0); if ("" != a.responseType) return !1;
            a.responseType = "blob"; if ("blob" != a.responseType) return !1;
            w._URL = t.loadExtension("URL").value } return null != w._URL && null != w._URL.createObjectURL };
    w.__super__ = Ka;
    w.prototype = o(Ka.prototype, {
        loadEntry: function(a, b) {
            var c = this;
            switch (b.format[1]) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    var e;
                    e = window.document.createElement("img");
                    var i = new qb;
                    i.addDisposingListener(e, "load", function() { w.supportsBlob() && w._URL.revokeObjectURL(e.src); var a = c._platform.getRenderer().createTextureFromImage(e);
                        null != a ? c.handleLoad(b, a) : c.handleTextureError(b) });
                    i.addDisposingListener(e, "error", function() { c.handleError(b, "Failed to load image") });
                    w.supportsBlob() ? this.download(a,
                        b, "blob",
                        function(a) { e.src = w._URL.createObjectURL(a) }) : e.src = a;
                    break;
                case 5:
                case 6:
                case 7:
                    this.download(a, b, "arraybuffer", function() { var a = c._platform.getRenderer().createCompressedTexture(b.format, null);
                        null != a ? c.handleLoad(b, a) : c.handleTextureError(b) });
                    break;
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    if (y.get_supported()) this.download(a, b, "arraybuffer", function(a) { y.ctx.decodeAudioData(a, function(a) { c.handleLoad(b, new y(a)) }, function() { c.handleLoad(b, Y.getInstance()) }) });
                    else {
                        var d;
                        d = window.document.createElement("audio");
                        d.preload = "auto";
                        var f = ++w._mediaRefCount;
                        null == w._mediaElements && (w._mediaElements = new ia);
                        w._mediaElements.set(f, d);
                        i = new qb;
                        i.addDisposingListener(d, "canplaythrough", function() { w._mediaElements.remove(f);
                            c.handleLoad(b, new sb(d)) });
                        i.addDisposingListener(d, "error", function() { w._mediaElements.remove(f); var a = d.error.code;
                            3 == a || 4 == a ? c.handleLoad(b, Y.getInstance()) : c.handleError(b, "Failed to load audio: " + d.error.code) });
                        i.addListener(d, "progress", function() {
                            if (0 < d.buffered.length && 0 < d.duration) {
                                var a =
                                    d.buffered.end(0) / d.duration;
                                c.handleProgress(b, a * b.bytes | 0)
                            }
                        });
                        d.src = a;
                        d.load()
                    }
                    break;
                case 13:
                    this.download(a, b, "text", function(a) { c.handleLoad(b, new pb(a)) })
            }
        },
        getAssetFormats: function(a) { var b = this;
            null == w._supportedFormats && (w._supportedFormats = new Lb, w.detectImageFormats(function(a) { w._supportedFormats.set_result(b._platform.getRenderer().getCompressedTextureFormats().concat(a).concat(w.detectAudioFormats()).concat([k.Data])) }));
            w._supportedFormats.get(a) },
        download: function(a, b, c, e) {
            var i = this,
                d = null,
                f = null,
                n = 0,
                g = !1,
                h = function() { g && (g = !1, window.clearInterval(n)) },
                j = 3,
                k = function() {--j; return 0 <= j ? (f(), !0) : !1 },
                f = function() {
                    h();
                    null != d && d.abort();
                    d = new XMLHttpRequest;
                    d.open("GET", a, !0);
                    d.responseType = c;
                    var f = 0;
                    d.onprogress = function(a) { g || (g = !0, n = window.setInterval(function() { 4 != d.readyState && 5E3 < Date.now() - f && !k() && (h(), i.handleError(b, "Download stalled")) }, 1E3));
                        f = Date.now();
                        i.handleProgress(b, a.loaded) };
                    d.onerror = function() { if (0 != d.status || !k()) h(), i.handleError(b, "HTTP error " + d.status) };
                    d.onload = function() { var a = d.response;
                        null == a && (a = d.responseText);
                        h();
                        e(a) };
                    d.send()
                };
            f()
        },
        __class__: w
    });
    var Hc = function() {};
    d["flambe.subsystem.ExternalSystem"] = Hc;
    Hc.__name__ = !0;
    Hc.prototype = { __class__: Hc };
    var Gb = function() {};
    d["flambe.platform.html.HtmlExternal"] = Gb;
    Gb.__name__ = !0;
    Gb.__interfaces__ = [Hc];
    Gb.prototype = { bind: function(a, b) { Ga.setField(window, a, b) }, __class__: Gb };
    var Db = function(a, b) { U.call(this, a);
        this._canvas = b };
    d["flambe.platform.html.HtmlMouse"] = Db;
    Db.__name__ = !0;
    Db.__super__ = U;
    Db.prototype =
        o(U.prototype, { __class__: Db });
    var sb = function(a) { this._disposed = !1;
        this.audioElement = a };
    d["flambe.platform.html.HtmlSound"] = sb;
    sb.__name__ = !0;
    sb.__interfaces__ = [bb];
    sb.__super__ = Q;
    sb.prototype = o(Q.prototype, { play: function(a) { null == a && (a = 1); return new Tb(this, a, !1) }, onDisposed: function() { this.audioElement = null }, __class__: sb });
    var Tb = function(a, b, c) {
        var e = this;
        this._sound = a;
        this._tickableAdded = !1;
        this._clonedElement = window.document.createElement("audio");
        this._clonedElement.loop = c;
        this._clonedElement.src =
            a.audioElement.src;
        this.volume = new D(b, function() { e.updateVolume() });
        this.updateVolume();
        this._complete = new P(!1);
        this.playAudio();
        r.hidden._value && this.set_paused(!0)
    };
    d["flambe.platform.html._HtmlSound.HtmlPlayback"] = Tb;
    Tb.__name__ = !0;
    Tb.__interfaces__ = [Qb, cb];
    Tb.prototype = {
        get_sound: function() { return this._sound },
        set_paused: function(a) { this._clonedElement.paused != a && (a ? this._clonedElement.pause() : this.playAudio()); return a },
        update: function(a) {
            this.volume.update(a);
            this._complete.set__(this._clonedElement.ended);
            return this._complete._value || this._clonedElement.paused ? (this._tickableAdded = !1, this._volumeBinding.dispose(), this._hideBinding.dispose(), !0) : !1
        },
        dispose: function() { this.set_paused(!0);
            this._complete.set__(!0) },
        playAudio: function() {
            var a = this;
            this._clonedElement.play();
            this._tickableAdded || (ra.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._volumeBinding = r.volume.get_changed().connect(function() { a.updateVolume() }), this._hideBinding = r.hidden.get_changed().connect(function(b) {
                b ? (a._wasPaused =
                    a._clonedElement.paused, a.set_paused(!0)) : a.set_paused(a._wasPaused)
            }))
        },
        updateVolume: function() { this._clonedElement.volume = r.volume._value * this.volume._value },
        __class__: Tb
    };
    var Ic = function() {};
    d["flambe.subsystem.StageSystem"] = Ic;
    Ic.__name__ = !0;
    Ic.prototype = { __class__: Ic };
    var Va = function(a) {
        var b = this;
        this._canvas = a;
        this.resize = new J;
        this.scaleFactor = Va.computeScaleFactor();
        1 != this.scaleFactor && (t.setVendorStyle(this._canvas, "transform-origin", "top left"), t.setVendorStyle(this._canvas, "transform",
            "scale(" + 1 / this.scaleFactor + ")"));
        t.SHOULD_HIDE_MOBILE_BROWSER && (window.addEventListener("orientationchange", function() { t.callLater(l(b, b.hideMobileBrowser), 200) }, !1), this.hideMobileBrowser());
        window.addEventListener("resize", l(this, this.onWindowResize), !1);
        this.onWindowResize(null);
        this.orientation = new P(null);
        null != window.orientation && (window.addEventListener("orientationchange", l(this, this.onOrientationChange), !1), this.onOrientationChange(null));
        this.fullscreen = new P(!1);
        t.addVendorListener(window.document,
            "fullscreenchange",
            function() { b.updateFullscreen() }, !1);
        this.updateFullscreen()
    };
    d["flambe.platform.html.HtmlStage"] = Va;
    Va.__name__ = !0;
    Va.__interfaces__ = [Ic];
    Va.computeScaleFactor = function() { var a = window.devicePixelRatio;
        null == a && (a = 1); var b = window.document.createElement("canvas").getContext("2d"),
            b = t.loadExtension("backingStorePixelRatio", b).value;
        null == b && (b = 1);
        a /= b;
        b = window.screen.height; return 1136 < a * window.screen.width || 1136 < a * b ? 1 : a };
    Va.prototype = {
        get_width: function() { return this._canvas.width },
        get_height: function() { return this._canvas.height },
        onWindowResize: function() { var a = this._canvas.parentElement.getBoundingClientRect();
            this.resizeCanvas(a.width, a.height) },
        resizeCanvas: function(a, b) { var c = this.scaleFactor * a,
                e = this.scaleFactor * b; if (this._canvas.width == c && this._canvas.height == e) return !1;
            this._canvas.width = c | 0;
            this._canvas.height = e | 0;
            this.resize.emit(); return !0 },
        hideMobileBrowser: function() {
            var a = this,
                b = window.document.documentElement.style;
            b.height = window.innerHeight + 100 + "px";
            b.width =
                window.innerWidth + "px";
            b.overflow = "visible";
            t.callLater(function() { t.hideMobileBrowser();
                t.callLater(function() { b.height = window.innerHeight + "px";
                    a.onWindowResize(null) }, 100) })
        },
        onOrientationChange: function() { this.orientation.set__(t.orientation(window.orientation)) },
        updateFullscreen: function() { this.fullscreen.set__(!0 == t.loadFirstExtension(["fullscreen", "fullScreen", "isFullScreen"], window.document).value) },
        __class__: Va
    };
    var t = function() {};
    d["flambe.platform.html.HtmlUtil"] = t;
    t.__name__ = !0;
    t.callLater =
        function(a, b) { null == b && (b = 0);
            window.setTimeout(a, b) };
    t.hideMobileBrowser = function() { window.scrollTo(1, 0) };
    t.loadExtension = function(a, b) { null == b && (b = window); var c = Ga.field(b, a); if (null != c) return { prefix: "", field: a, value: c }; for (var c = a.charAt(0).toUpperCase() + s.substr(a, 1, null), e = 0, d = t.VENDOR_PREFIXES; e < d.length;) { var f = d[e];++e; var g = f + c,
                n = Ga.field(b, g); if (null != n) return { prefix: f, field: g, value: n } } return { prefix: null, field: null, value: null } };
    t.loadFirstExtension = function(a, b) {
        for (var c = 0; c < a.length;) {
            var e =
                a[c];
            ++c;
            e = t.loadExtension(e, b);
            if (null != e.field) return e
        }
        return { prefix: null, field: null, value: null }
    };
    t.polyfill = function(a, b) { null == b && (b = window); var c = t.loadExtension(a, b).value; if (null == c) return !1;
        b[a] = c; return !0 };
    t.setVendorStyle = function(a, b, c) { for (var a = a.style, e = 0, d = t.VENDOR_PREFIXES; e < d.length;) { var f = d[e];++e;
            a.setProperty("-" + f + "-" + b, c) } a.setProperty(b, c) };
    t.addVendorListener = function(a, b, c, e) {
        for (var d = 0, f = t.VENDOR_PREFIXES; d < f.length;) { var g = f[d];++d;
            a.addEventListener(g + b, c, e) } a.addEventListener(b,
            c, e)
    };
    t.orientation = function(a) { switch (a) {
            case -90:
            case 90:
                return ab.Landscape;
            default:
                return ab.Portrait } };
    t.createEmptyCanvas = function(a, b) { var c;
        c = window.document.createElement("canvas");
        c.width = a;
        c.height = b; return c };
    t.createCanvas = function(a) { var b = t.createEmptyCanvas(a.width, a.height),
            c = b.getContext("2d");
        c.save();
        c.globalCompositeOperation = "copy";
        c.drawImage(a, 0, 0);
        c.restore(); return b };
    t.fixAndroidMath = function() {
        if (0 <= window.navigator.userAgent.indexOf("Linux; U; Android 4")) {
            var a = Math.sin,
                b = Math.cos;
            Math.sin = function(b) { return 0 == b ? 0 : a(b) };
            Math.cos = function(a) { return 0 == a ? 1 : b(a) }
        }
    };
    var y = function(a) { this._disposed = !1;
        this.buffer = a };
    d["flambe.platform.html.WebAudioSound"] = y;
    y.__name__ = !0;
    y.__interfaces__ = [bb];
    y.get_supported = function() { if (y._detectSupport) { y._detectSupport = !1; var a = t.loadExtension("AudioContext").value;
            null != a && (y.ctx = new a, y.gain = y.createGain(), y.gain.connect(y.ctx.destination), r.volume.watch(function(a) { y.gain.gain.value = a })) } return null != y.ctx };
    y.createGain = function() {
        return null !=
            y.ctx.createGain ? y.ctx.createGain() : y.ctx.createGainNode()
    };
    y.start = function(a, b) { null != a.start ? a.start(b) : a.noteOn(b) };
    y.__super__ = Q;
    y.prototype = o(Q.prototype, { play: function(a) { null == a && (a = 1); return new Ub(this, a, !1) }, get_duration: function() { return this.buffer.duration }, onDisposed: function() { this.buffer = null }, __class__: y });
    var Ub = function(a, b, c) {
        var e = this;
        this._sound = a;
        this._head = y.gain;
        this._complete = new P(!1);
        this._sourceNode = y.ctx.createBufferSource();
        this._sourceNode.buffer = a.buffer;
        this._sourceNode.loop =
            c;
        this._sourceNode.onended = function() { e._complete.set__(!0) };
        y.start(this._sourceNode, 0);
        this.playAudio();
        this.volume = new D(b, function(a) { e.setVolume(a) });
        1 != b && this.setVolume(b);
        r.hidden._value && this.set_paused(!0)
    };
    d["flambe.platform.html._WebAudioSound.WebAudioPlayback"] = Ub;
    Ub.__name__ = !0;
    Ub.__interfaces__ = [Qb, cb];
    Ub.prototype = {
        get_sound: function() { return this._sound },
        set_paused: function(a) {
            a != 0 <= this._pausedAt && (a ? (this._sourceNode.disconnect(), this._pausedAt = this.get_position()) : this.playAudio());
            return a
        },
        get_position: function() { return this._complete._value ? this._sound.get_duration() : 0 <= this._pausedAt ? this._pausedAt : (y.ctx.currentTime - this._startedAt) % this._sound.get_duration() },
        update: function(a) { this.volume.update(a);
            3 == this._sourceNode.playbackState && this._complete.set__(!0); return this._complete._value || 0 <= this._pausedAt ? (this._tickableAdded = !1, this._hideBinding.dispose(), !0) : !1 },
        dispose: function() { this.set_paused(!0);
            this._complete.set__(!0) },
        setVolume: function(a) {
            null == this._gainNode &&
                (this._gainNode = y.createGain(), this.insertNode(this._gainNode));
            this._gainNode.gain.value = a
        },
        insertNode: function(a) { 0 <= this._pausedAt || (this._sourceNode.disconnect(), this._sourceNode.connect(a));
            a.connect(this._head);
            this._head = a },
        playAudio: function() {
            var a = this;
            this._sourceNode.connect(this._head);
            this._startedAt = y.ctx.currentTime;
            this._pausedAt = -1;
            this._tickableAdded || (ra.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._hideBinding = r.hidden.get_changed().connect(function(b) {
                b ? (a._wasPaused =
                    0 <= a._pausedAt, a.set_paused(!0)) : a.set_paused(a._wasPaused)
            }))
        },
        __class__: Ub
    };
    var Vb = function() { this._transitor = null;
        q.call(this);
        this.scenes = [];
        this.occludedScenes = [];
        this._root = new h };
    d["flambe.scene.Director"] = Vb;
    Vb.__name__ = !0;
    Vb.__super__ = q;
    Vb.prototype = o(q.prototype, {
        get_name: function() { return "Director_15" },
        pushScene: function(a, b) { var c = this;
            this.completeTransition(); var e = this.get_topScene();
            null != e ? this.playTransition(e, a, b, function() { c.hide(e) }) : (this.add(a), this.invalidateVisibility()) },
        popScene: function(a) { var b = this;
            this.completeTransition(); var c = this.get_topScene(); if (null != c) { this.scenes.pop(); var e = this.get_topScene();
                null != e ? this.playTransition(c, e, a, function() { b.hideAndDispose(c) }) : (this.hideAndDispose(c), this.invalidateVisibility()) } },
        unwindToScene: function(a, b) {
            var c = this;
            this.completeTransition();
            var e = this.get_topScene();
            if (null != e) {
                if (e != a) {
                    for (this.scenes.pop(); 0 < this.scenes.length && this.scenes[this.scenes.length - 1] != a;) this.scenes.pop().dispose();
                    this.playTransition(e,
                        a, b,
                        function() { c.hideAndDispose(e) })
                }
            } else this.pushScene(a, b)
        },
        onAdded: function() { this.owner.addChild(this._root) },
        onRemoved: function() { this.completeTransition(); for (var a = 0, b = this.scenes; a < b.length;) { var c = b[a];++a;
                c.dispose() } this.scenes = [];
            this.occludedScenes = [];
            this._root.dispose() },
        onUpdate: function(a) { null != this._transitor && this._transitor.update(a) && this.completeTransition() },
        get_topScene: function() { var a = this.scenes.length; return 0 < a ? this.scenes[a - 1] : null },
        add: function(a) {
            var b = this.get_topScene();
            null != b && this._root.removeChild(b);
            s.remove(this.scenes, a);
            this.scenes.push(a);
            this._root.addChild(a)
        },
        hide: function(a) { a = a._compMap.Scene_0;
            null != a && a.hidden.emit() },
        hideAndDispose: function(a) { this.hide(a);
            a.dispose() },
        show: function(a) { a = a._compMap.Scene_0;
            null != a && a.shown.emit() },
        invalidateVisibility: function() {
            for (var a = this.scenes.length; 0 < a;) { var b = this.scenes[--a]._compMap.Scene_0; if (null == b || b.opaque) break } this.occludedScenes = 0 < this.scenes.length ? this.scenes.slice(a, this.scenes.length - 1) : [];
            a = this.get_topScene();
            null != a && this.show(a)
        },
        completeTransition: function() { null != this._transitor && (this._transitor.complete(), this._transitor = null, this.invalidateVisibility()) },
        playTransition: function(a, b, c, e) { this.completeTransition();
            this.add(b);
            null != c ? (this.occludedScenes.push(a), this._transitor = new Jc(a, b, c, e), this._transitor.init(this)) : (e(), this.invalidateVisibility()) },
        __class__: Vb
    });
    var Jc = function(a, b, c, e) { this._from = a;
        this._to = b;
        this._transition = c;
        this._onComplete = e };
    d["flambe.scene._Director.Transitor"] =
        Jc;
    Jc.__name__ = !0;
    Jc.prototype = { init: function(a) { this._transition.init(a, this._from, this._to) }, update: function(a) { return this._transition.update(a) }, complete: function() { this._transition.complete();
            this._onComplete() }, __class__: Jc };
    var va = function(a) { null == a && (a = !0);
        q.call(this);
        this.opaque = a;
        this.shown = new J;
        this.hidden = new J };
    d["flambe.scene.Scene"] = va;
    va.__name__ = !0;
    va.__super__ = q;
    va.prototype = o(q.prototype, { get_name: function() { return "Scene_0" }, __class__: va });
    var fd = function() {};
    d["flambe.scene.Transition"] =
        fd;
    fd.__name__ = !0;
    fd.prototype = { init: function(a, b, c) { this._director = a;
            this._from = b;
            this._to = c }, update: function() { return !0 }, complete: function() {}, __class__: fd };
    var ka = function() {};
    d["flambe.script.Action"] = ka;
    ka.__name__ = !0;
    ka.prototype = { __class__: ka };
    var db = function(a, b, c, e) { this._value = a;
        this._by = b;
        this._seconds = c;
        this._easing = e };
    d["flambe.script.AnimateBy"] = db;
    db.__name__ = !0;
    db.__interfaces__ = [ka];
    db.prototype = {
        update: function(a) {
            null == this._tween && (this._tween = new da(this._value._value, this._value._value +
                this._by, this._seconds, this._easing), this._value.set_behavior(this._tween), this._value.update(a));
            if (this._value._behavior != this._tween) { var b = this._tween.elapsed - this._seconds;
                this._tween = null; return 0 < b ? Math.max(0, a - b) : 0 }
            return -1
        },
        __class__: db
    };
    var R = function(a, b, c, e) { this._value = a;
        this._to = b;
        this._seconds = c;
        this._easing = e };
    d["flambe.script.AnimateTo"] = R;
    R.__name__ = !0;
    R.__interfaces__ = [ka];
    R.prototype = {
        update: function(a) {
            null == this._tween && (this._tween = new da(this._value._value, this._to, this._seconds,
                this._easing), this._value.set_behavior(this._tween), this._value.update(a));
            if (this._value._behavior != this._tween) { var b = this._tween.elapsed - this._seconds;
                this._tween = null; return 0 < b ? Math.max(0, a - b) : 0 }
            return -1
        },
        __class__: R
    };
    var eb = function(a) { this._fn = a };
    d["flambe.script.CallFunction"] = eb;
    eb.__name__ = !0;
    eb.__interfaces__ = [ka];
    eb.prototype = { update: function() { this._fn(); return 0 }, __class__: eb };
    var fb = function(a) { this._duration = a;
        this._elapsed = 0 };
    d["flambe.script.Delay"] = fb;
    fb.__name__ = !0;
    fb.__interfaces__ = [ka];
    fb.prototype = { update: function(a) { this._elapsed += a; if (this._elapsed >= this._duration) { var b = this._elapsed - this._duration;
                this._elapsed = 0; return a - b } return -1 }, __class__: fb };
    var Ma = function(a) { this._completedActions = [];
        this._runningActions = null != a ? a.slice() : [] };
    d["flambe.script.Parallel"] = Ma;
    Ma.__name__ = !0;
    Ma.__interfaces__ = [ka];
    Ma.prototype = {
        update: function(a, b) {
            for (var c = !0, e = 0, d = 0, f = this._runningActions.length; d < f;) {
                var g = d++,
                    n = this._runningActions[g];
                if (null != n) {
                    var h = n.update(a, b);
                    0 <= h ? (this._runningActions[g] =
                        null, this._completedActions.push(n), h > e && (e = h)) : c = !1
                }
            }
            return c ? (this._runningActions = this._completedActions, this._completedActions = [], e) : -1
        },
        __class__: Ma
    };
    var la = function() { q.call(this);
        this.stopAll() };
    d["flambe.script.Script"] = la;
    la.__name__ = !0;
    la.__super__ = q;
    la.prototype = o(q.prototype, {
        get_name: function() { return "Script_8" },
        run: function(a) { a = new Wb(a);
            this._handles.push(a); return a },
        stopAll: function() { this._handles = [] },
        onUpdate: function(a) {
            for (var b = 0; b < this._handles.length;) {
                var c = this._handles[b];
                c.removed || 0 <= c.action.update(a, this.owner) ? this._handles.splice(b, 1) : ++b
            }
        },
        __class__: la
    });
    var Wb = function(a) { this.removed = !1;
        this.action = a };
    d["flambe.script._Script.Handle"] = Wb;
    Wb.__name__ = !0;
    Wb.__interfaces__ = [ca];
    Wb.prototype = { dispose: function() { this.removed = !0;
            this.action = null }, __class__: Wb };
    var wa = function(a) { this._idx = 0;
        this._runningActions = null != a ? a.slice() : [] };
    d["flambe.script.Sequence"] = wa;
    wa.__name__ = !0;
    wa.__interfaces__ = [ka];
    wa.prototype = {
        update: function(a, b) {
            for (var c = 0;;) {
                var e = this._runningActions[this._idx];
                if (null != e)
                    if (e = e.update(a - c, b), 0 <= e) c += e;
                    else return -1;
                ++this._idx;
                if (this._idx >= this._runningActions.length) { this._idx = 0; break } else if (c > a) return -1
            }
            return c
        },
        __class__: wa
    };
    var ua = d["flambe.subsystem.RendererType"] = { __ename__: !0, __constructs__: ["Stage3D", "WebGL", "Canvas"] };
    ua.Stage3D = ["Stage3D", 0];
    ua.Stage3D.__enum__ = ua;
    ua.WebGL = ["WebGL", 1];
    ua.WebGL.__enum__ = ua;
    ua.Canvas = ["Canvas", 2];
    ua.Canvas.__enum__ = ua;
    var tb = function() {};
    d["flambe.swf.Symbol"] = tb;
    tb.__name__ = !0;
    tb.prototype = { __class__: tb };
    var Xb =
        function(a, b) { this._name = a.symbol; var c = a.rect;
            this.texture = b.subTexture(c[0], c[1], c[2], c[3]);
            c = a.origin;
            null != c ? (this.anchorX = c[0], this.anchorY = c[1]) : this.anchorY = this.anchorX = 0 };
    d["flambe.swf.BitmapSymbol"] = Xb;
    Xb.__name__ = !0;
    Xb.__interfaces__ = [tb];
    Xb.prototype = { createSprite: function() { var a = new x(this.texture);
            a.setAnchor(this.anchorX, this.anchorY); return a }, __class__: Xb };
    var Lc = function(a, b) {
        this.name = a;
        var c = 1 / b.length;
        this.frames = [];
        for (var e = 0; e < b.length;) {
            var d = b[e];
            ++e;
            this.frames.push(new Kc(d,
                c))
        }
    };
    d["flambe.swf.Flipbook"] = Lc;
    Lc.__name__ = !0;
    Lc.prototype = { setDuration: function(a) { for (var a = a / this.frames.length, b = 0, c = this.frames; b < c.length;) { var e = c[b];++b;
                e.duration = a } return this }, __class__: Lc };
    var Kc = function(a, b) { this.label = null;
        this.anchorX = this.anchorY = 0;
        this.texture = a;
        this.duration = b };
    d["flambe.swf.FlipbookFrame"] = Kc;
    Kc.__name__ = !0;
    Kc.prototype = { toSymbol: function() { return new Yb(this) }, __class__: Kc };
    var Yb = function(a) { this._texture = a.texture;
        this._anchorX = a.anchorX;
        this._anchorY = a.anchorY };
    d["flambe.swf._Flipbook.FrameSymbol"] = Yb;
    Yb.__name__ = !0;
    Yb.__interfaces__ = [tb];
    Yb.prototype = { createSprite: function() { var a = new x(this._texture);
            a.setAnchor(this._anchorX, this._anchorY); return a }, __class__: Yb };
    var ma = function(a, b) {
        this._file = a.getFile(b + "/library.json");
        var c = JSON.parse(this._file.toString());
        this._symbols = new K;
        this.frameRate = c.frameRate;
        for (var e = [], d = 0, f = c.movies; d < f.length;) { var g = f[d];++d;
            g = new ub(this, g);
            e.push(g);
            this._symbols.set(g._name, g) } c = c.textureGroups;
        (1 != c[0].scaleFactor ||
            1 < c.length) && null;
        c = c[0].atlases;
        for (d = 0; d < c.length;) { var n = c[d];++d;
            f = a.getTexture(b + "/" + I.removeFileExtension(n.file));
            g = 0; for (n = n.textures; g < n.length;) { var h = n[g];++g;
                h = new Xb(h, f);
                this._symbols.set(h._name, h) } }
        for (c = 0; c < e.length;) {
            f = e[c];
            ++c;
            d = 0;
            for (f = f.layers; d < f.length;) {
                g = f[d];
                ++d;
                g = g.keyframes;
                n = g.length;
                for (h = 0; h < n;) {
                    var j = h++,
                        m = g[j];
                    if (null != m.symbolName) { var k = this._symbols.get(m.symbolName);
                        m.symbol = k }
                    if (m.tweened && 1 == m.duration && j + 1 < n && (j = g[j + 1], !j.visible || null == j.symbolName)) m.visible = !1
                }
            }
        }
    };
    d["flambe.swf.Library"] = ma;
    ma.__name__ = !0;
    ma.fromFlipbooks = function(a) {
        var b = ga.createEmptyInstance(ma);
        b._symbols = new K;
        b.frameRate = 60;
        b._file = null;
        for (var c = 0; c < a.length;) {
            var e = a[c];
            ++c;
            for (var d = [], f = 0, g = e.frames; f < g.length;) { var n = g[f];++f;
                d.push({ duration: n.duration * b.frameRate, label: n.label, pivot: [n.anchorX, n.anchorY], ref: "" }) } d = new ub(b, { id: e.name, layers: [{ name: "flipbook", flipbook: !0, keyframes: d }] });
            b._symbols.set(e.name, d);
            d = d.layers[0].keyframes;
            f = 0;
            for (g = e.frames.length; f < g;) n = f++,
                d[n].setSymbol(e.frames[n].toSymbol())
        }
        return b
    };
    ma.prototype = { createSprite: function(a, b) { null == b && (b = !0); var c = this._symbols.get(a); if (null == c) { if (b) throw I.withFields("Missing symbol", ["name", a]); return null } return c.createSprite() }, __class__: ma };
    var Na = function(a) { this._oneshotSprite = this._loopingSprite = null;
        q.call(this);
        this._lib = a;
        this._root = new h;
        this.movie = new P(null);
        this.setCache(!0) };
    d["flambe.swf.MoviePlayer"] = Na;
    Na.__name__ = !0;
    Na.__super__ = q;
    Na.prototype = o(q.prototype, {
        get_name: function() { return "MoviePlayer_9" },
        setCache: function(a) { this._cache = a ? new K : null; return this },
        play: function(a, b) { null == b && (b = !0); if (b || null == this._oneshotSprite || this._oneshotSprite.symbol._name != a) this._oneshotSprite = this.playFromCache(a); return this },
        loop: function(a, b) { null == b && (b = !0); if (b || null == this._loopingSprite || this._loopingSprite.symbol._name != a) this._oneshotSprite = null, this._loopingSprite = this.playFromCache(a); return this },
        onAdded: function() { this.owner.addChild(this._root) },
        onRemoved: function() {
            this._root.dispose();
            this._oneshotSprite =
                this._loopingSprite = null;
            this.movie.set__(null)
        },
        onUpdate: function(a) { null != this._oneshotSprite && this._oneshotSprite._position + a > this._oneshotSprite.symbol.duration && (this._oneshotSprite = null, this.setCurrent(this._loopingSprite)) },
        playFromCache: function(a) { var b;
            null != this._cache ? (b = this._cache.get(a), null != b ? b.set_position(0) : (b = this.createMovie(a), this._cache.set(a, b))) : b = this.createMovie(a); return this.setCurrent(b) },
        createMovie: function(a) {
            a = this._lib.createSprite(a, !0);
            null != this._decorator &&
                this._decorator(a);
            return a
        },
        setCurrent: function(a) { this._root.add(a); return this.movie.set__(a) },
        __class__: Na
    });
    var vb = function(a) { this._looped = null;
        g.call(this);
        this.symbol = a;
        this.speed = new D(1);
        this._animators = Array(a.layers.length); for (var b = 0, c = this._animators.length; b < c;) { var e = b++;
            this._animators[e] = new Mc(a.layers[e]) } this._position = this._frame = 0;
        this["goto"](1) };
    d["flambe.swf.MovieSprite"] = vb;
    vb.__name__ = !0;
    vb.__super__ = g;
    vb.prototype = o(g.prototype, {
        onAdded: function() {
            g.prototype.onAdded.call(this);
            for (var a = 0, b = this._animators; a < b.length;) { var c = b[a];++a;
                this.owner.addChild(c.content) }
        },
        onRemoved: function() { g.prototype.onRemoved.call(this); for (var a = 0, b = this._animators; a < b.length;) { var c = b[a];++a;
                this.owner.removeChild(c.content) } },
        onUpdate: function(a) {
            g.prototype.onUpdate.call(this, a);
            this.speed.update(a);
            switch (this._flags & 384) {
                case 0:
                    this._position += this.speed._value * a;
                    this._position > this.symbol.duration && (this._position %= this.symbol.duration, null != this._looped && this._looped.emit());
                    break;
                case 256:
                    this._flags &= -257
            }
            this["goto"](this._position * this.symbol.frameRate)
        },
        "goto": function(a) { if (this._frame != a) { if (a < this._frame)
                    for (var b = 0, c = this._animators; b < c.length;) { var e = c[b];++b;
                        e.needsKeyframeUpdate = !0;
                        e.keyframeIdx = 0 } b = 0; for (c = this._animators; b < c.length;) e = c[b], ++b, e.composeFrame(a);
                this._frame = a } },
        set_position: function(a) { return this._position = Z.clamp(a, 0, this.symbol.duration) },
        set_paused: function(a) { this._flags = wc.set(this._flags, 128, a); return a },
        rewind: function() {
            this._position =
                0;
            this._flags |= 256
        },
        __class__: vb
    });
    var Mc = function(a) { this.keyframeIdx = 0;
        this.needsKeyframeUpdate = !1;
        this.layer = a;
        this.content = new h; if (a.empty) this._sprites = null;
        else { this._sprites = Array(a.keyframes.length); for (var b = 0, c = this._sprites.length; b < c;) { var e = b++,
                    d = a.keyframes[e];
                this._sprites[e] = 0 < e && a.keyframes[e - 1].symbol == d.symbol ? this._sprites[e - 1] : null == d.symbol ? new g : d.symbol.createSprite() } this.content.add(this._sprites[0]) } };
    d["flambe.swf._MovieSprite.LayerAnimator"] = Mc;
    Mc.__name__ = !0;
    Mc.prototype = {
        composeFrame: function(a) {
            if (null != this._sprites) {
                var b = this.layer.keyframes,
                    c = b.length - 1;
                if (a > this.layer.frames) this.content._compMap.Sprite_2.set_visible(!1), this.keyframeIdx = c, this.needsKeyframeUpdate = !0;
                else {
                    for (; this.keyframeIdx < c && b[this.keyframeIdx + 1].index <= a;) ++this.keyframeIdx, this.needsKeyframeUpdate = !0;
                    var e;
                    this.needsKeyframeUpdate ? (this.needsKeyframeUpdate = !1, e = this._sprites[this.keyframeIdx], e != this.content._compMap.Sprite_2 && (ga.getClass(e) == vb && e.rewind(), this.content.add(e))) : e =
                        this.content._compMap.Sprite_2;
                    var d = b[this.keyframeIdx],
                        f = d.visible && null != d.symbol;
                    e.set_visible(f);
                    if (f) {
                        var f = d.x,
                            g = d.y,
                            n = d.scaleX,
                            h = d.scaleY,
                            j = d.skewX,
                            m = d.skewY,
                            k = d.alpha;
                        if (d.tweened && this.keyframeIdx < c) { a = (a - d.index) / d.duration;
                            c = d.ease; if (0 != c) { var l;
                                0 > c ? (l = 1 - a, l = 1 - l * l, c = -c) : l = a * a;
                                a = c * l + (1 - c) * a } b = b[this.keyframeIdx + 1];
                            f += (b.x - f) * a;
                            g += (b.y - g) * a;
                            n += (b.scaleX - n) * a;
                            h += (b.scaleY - h) * a;
                            j += (b.skewX - j) * a;
                            m += (b.skewY - m) * a;
                            k += (b.alpha - k) * a } b = e.getLocalMatrix();
                        a = Math.sin(j);
                        j = Math.cos(j);
                        c = Math.sin(m);
                        m = Math.cos(m);
                        b.set(m * n, c * n, -a * h, j * h, f, g);
                        b.translate(-d.pivotX, -d.pivotY);
                        e.alpha.set__(k)
                    }
                }
            }
        },
        __class__: Mc
    };
    var ub = function(a, b) { this._name = b.id;
        this.frameRate = a.frameRate;
        this.frames = 0;
        this.layers = Array(b.layers.length); for (var c = 0, e = this.layers.length; c < e;) { var d = c++,
                f = new Nc(b.layers[d]);
            this.frames = Math.max(f.frames, this.frames);
            this.layers[d] = f } this.duration = this.frames / this.frameRate };
    d["flambe.swf.MovieSymbol"] = ub;
    ub.__name__ = !0;
    ub.__interfaces__ = [tb];
    ub.prototype = {
        createSprite: function() { return new vb(this) },
        __class__: ub
    };
    var Nc = function(a) { this.empty = !0;
        this.name = a.name; var b = null;
        this.keyframes = Array(a.keyframes.length); for (var c = 0, e = this.keyframes.length; c < e;) { var d = c++,
                b = new Oc(a.keyframes[d], b);
            this.keyframes[d] = b;
            this.empty = this.empty && null == b.symbolName } this.frames = null != b ? b.index + b.duration : 0 };
    d["flambe.swf.MovieLayer"] = Nc;
    Nc.__name__ = !0;
    Nc.prototype = { __class__: Nc };
    var Oc = function(a, b) {
        this.ease = 0;
        this.visible = this.tweened = !0;
        this.alpha = 1;
        this.skewX = this.skewY = this.pivotX = this.pivotY = 0;
        this.scaleX =
            this.scaleY = 1;
        this.x = this.y = 0;
        this.symbol = null;
        this.index = null != b ? b.index + b.duration : 0;
        this.duration = a.duration;
        this.label = a.label;
        this.symbolName = a.ref;
        var c = a.loc;
        null != c && (this.x = c[0], this.y = c[1]);
        c = a.scale;
        null != c && (this.scaleX = c[0], this.scaleY = c[1]);
        c = a.skew;
        null != c && (this.skewX = c[0], this.skewY = c[1]);
        c = a.pivot;
        null != c && (this.pivotX = c[0], this.pivotY = c[1]);
        null != a.alpha && (this.alpha = a.alpha);
        null != a.visible && (this.visible = a.visible);
        null != a.tweened && (this.tweened = a.tweened);
        null != a.ease && (this.ease =
            a.ease)
    };
    d["flambe.swf.MovieKeyframe"] = Oc;
    Oc.__name__ = !0;
    Oc.prototype = { setSymbol: function(a) { this.symbol = a }, __class__: Oc };
    var cd = function() {};
    d["flambe.util.Assert"] = cd;
    cd.__name__ = !0;
    cd.that = function() {};
    var wc = function() {};
    d["flambe.util.BitSets"] = wc;
    wc.__name__ = !0;
    wc.set = function(a, b, c) { return c ? a | b : a & ~b };
    var wb = function(a) { this._capacity = 2147483647;
        this._allocator = a;
        this._freeObjects = [] };
    d["flambe.util.Pool"] = wb;
    wb.__name__ = !0;
    wb.prototype = {
        take: function() {
            return 0 < this._freeObjects.length ? this._freeObjects.pop() :
                this._allocator()
        },
        put: function(a) { this._freeObjects.length < this._capacity && this._freeObjects.push(a) },
        setSize: function(a) { if (this._freeObjects.length > a) this._freeObjects.length = a;
            else
                for (var a = a - this._freeObjects.length, b = 0; b < a;) b++, this._freeObjects.push(this._allocator()); return this },
        __class__: wb
    };
    var Lb = function() { this.success = new z;
        this.error = new z;
        this.progressChanged = new J;
        this.hasResult = !1;
        this._total = this._progress = 0 };
    d["flambe.util.Promise"] = Lb;
    Lb.__name__ = !0;
    Lb.prototype = {
        set_result: function(a) {
            if (this.hasResult) throw "Promise result already assigned";
            this._result = a;
            this.hasResult = !0;
            this.success.emit(a);
            return a
        },
        get: function(a) { return this.hasResult ? (a(this._result), null) : this.success.connect(a).once() },
        set_progress: function(a) { this._progress != a && (this._progress = a, this.progressChanged.emit()); return a },
        set_total: function(a) { this._total != a && (this._total = a, this.progressChanged.emit()); return a },
        __class__: Lb
    };
    var J = function(a) { E.call(this, a) };
    d["flambe.util.Signal0"] = J;
    J.__name__ = !0;
    J.__super__ = E;
    J.prototype = o(E.prototype, {
        connect: function(a, b) {
            null ==
                b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function() { var a = this;
            this._head == E.DISPATCHING_SENTINEL ? this.defer(function() { a.emitImpl() }) : this.emitImpl() },
        emitImpl: function() { for (var a = this.willEmit(), b = a; null != b;) b._listener(), b.stayInList || b.dispose(), b = b._next;
            this.didEmit(a) },
        __class__: J
    });
    var sc = function(a) { this.next = null;
        this.fn = a };
    d["flambe.util._SignalBase.Task"] = sc;
    sc.__name__ = !0;
    sc.prototype = { __class__: sc };
    var I = function() {};
    d["flambe.util.Strings"] = I;
    I.__name__ = !0;
    I.getFileExtension = function(a) {
        var b =
            a.lastIndexOf(".");
        return 0 < b ? s.substr(a, b + 1, null) : null
    };
    I.removeFileExtension = function(a) { var b = a.lastIndexOf("."); return 0 < b ? s.substr(a, 0, b) : a };
    I.getUrlExtension = function(a) { var b = a.lastIndexOf("?");
        0 <= b && (a = s.substr(a, 0, b));
        b = a.lastIndexOf("/");
        0 <= b && (a = s.substr(a, b + 1, null)); return I.getFileExtension(a) };
    I.joinPath = function(a, b) { 0 < a.length && 47 != a.charCodeAt(a.length - 1) && (a += "/"); return a + b };
    I.withFields = function(a, b) {
        var c = b.length;
        if (0 < c) {
            for (var a = 0 < a.length ? a + " [" : a + "[", e = 0; e < c;) {
                0 < e && (a += ", ");
                var d = b[e],
                    f = b[e + 1];
                if (u.is(f, Error)) { var g = f.stack;
                    null != g && (f = g) } a += d + "=" + u.string(f);
                e += 2
            }
            a += "]"
        }
        return a
    };
    var $ = function() {};
    d["flindigo.EmbedProxy"] = $;
    $.__name__ = !0;
    $.get_exists = function() { return $.callJSEmbedMethod("exists()") };
    $.get_base = function() { return $.callJSEmbedMethod("baseUrl()") };
    $.get_isCrossdomain = function() { return $.callJSEmbedMethod("isBaseCrossdomain()") };
    $.callJSEmbedMethod = function(a) { try { var b = eval("jsembed." + a); if (null != b) return b } catch (c) { return "Error" } return "" };
    var C = function() {};
    d["flindigo.Engine"] = C;
    C.__name__ = !0;
    C.init = function(a, b, c, e) { null == e && (e = !0);
        r.init();
        f.init(a, b, c, e);
        C.setupBaseURL();
        C.isPaused = !1 };
    C.setupBaseURL = function() { C.baseUrl = $.get_exists() ? $.get_isCrossdomain() ? C.appendAssetsToUrl($.get_base()) : C.trimUrl($.get_base()) : "" };
    C.trimUrl = function(a) {
        if ("" == a) return "";
        if (0 > a.indexOf("http")) return "/" == a.charAt(0) && (a = s.substr(a, 1, a.length - 1)), a;
        var b = a.indexOf("http://");
        0 > b ? (b = a.indexOf("https://"), b = 0 > b ? 0 : b + 8) : b += 7;
        b = a.indexOf("/", b);
        a = s.substr(a, b, a.length -
            b);
        return a = C.appendAssetsToUrl(a)
    };
    C.appendAssetsToUrl = function(a) { "/" != a.charAt(a.length - 1) && (a += "/"); return a + "assets/" };
    var aa = d["flindigo.ScaleDocking"] = { __ename__: !0, __constructs__: ["HEIGHT", "WIDTH", "AUTO"] };
    aa.HEIGHT = ["HEIGHT", 0];
    aa.HEIGHT.__enum__ = aa;
    aa.WIDTH = ["WIDTH", 1];
    aa.WIDTH.__enum__ = aa;
    aa.AUTO = ["AUTO", 2];
    aa.AUTO.__enum__ = aa;
    var f = function() {};
    d["flindigo.MainStage"] = f;
    f.__name__ = !0;
    f.init = function(a, b, c, e) {
        f._scaleDocking = null == c ? aa.AUTO : c;
        f._designSizeWidth = a;
        f._designSizeHeight = b;
        f._centeredOrigin = e;
        f.setupMainStageSprite();
        f.setupStageResizeListener();
        f.resizeStage()
    };
    f.setupMainStageSprite = function() { f._mainStageSprite = new g;
        r.root.add(f._mainStageSprite) };
    f.setupStageResizeListener = function() { r._platform.getStage().resize.connect(f.onStageResize) };
    f.onStageResize = function() { f.resizeStage() };
    f.resizeStage = function() {
        f._computedStageScale = f.computeScaleAccordingToNewStageDimensions();
        f._screenWidth = f.getScreenWidth();
        f._screenHeight = f.getScreenHeight();
        f._mainStageSprite.setScale(f._computedStageScale);
        f.centerStage()
    };
    f.computeScaleAccordingToNewStageDimensions = function() { var a = r._platform.getStage().get_width(),
            b = r._platform.getStage().get_height(),
            c = f._designSizeWidth,
            e = f._designSizeHeight,
            d = 1; return d = f._scaleDocking == aa.HEIGHT ? b / e : f._scaleDocking == aa.WIDTH ? a / c : a / c < b / e ? a / c : b / e };
    f.getScreenHeight = function() { return r._platform.getStage().get_height() / f._computedStageScale };
    f.getScreenWidth = function() { return r._platform.getStage().get_width() / f._computedStageScale };
    f.centerStage = function() {
        var a =
            r._platform.getStage().get_width() - f._designSizeWidth * f._computedStageScale,
            b = r._platform.getStage().get_height() - f._designSizeHeight * f._computedStageScale;
        f._centeredOrigin && (f._mainStageSprite.x.set__(a / 2 + f._designSizeWidth * f._computedStageScale / 2), f._mainStageSprite.y.set__(b / 2 + f._designSizeHeight * f._computedStageScale / 2))
    };
    f.get_computedStageScale = function() { return f._computedStageScale };
    f.get_stageHeight = function() { return f._designSizeHeight };
    f.get_screenWidth = function() { return f._screenWidth };
    f.get_screenHeight = function() { return f._screenHeight };
    var ba = function() {};
    d["flindigo.Utils"] = ba;
    ba.__name__ = !0;
    ba.getGlobalCoordinates = function(a) { a = a.getViewMatrix(); return new Ia(a.m02 / f.get_computedStageScale(), a.m12 / f.get_computedStageScale()) };
    ba.callWithDelay = function(a, b, c) { null == c && (c = 1); if (null == a) throw "callerEntity should not be null!"; var e = new h;
        a.addChild(e);
        a = new la;
        e.add(a);
        b = new wa([new fb(c), b]);
        a.run(b); return a };
    var Pc = function(a, b, c) {
        null == c && (c = 1);
        this.animationName = a;
        this.frameSequence =
            b;
        this.animationSpeed = c
    };
    d["flindigo.animation.AnimationSet"] = Pc;
    Pc.__name__ = !0;
    Pc.prototype = { __class__: Pc };
    var xb = function(a, b) { this._highestFrameCount = 0;
        g.call(this);
        this._assetPack = a;
        this._textureArray = b;
        this._animationList = new K };
    d["flindigo.animation.AnimatedSprite"] = xb;
    xb.__name__ = !0;
    xb.__super__ = g;
    xb.prototype = o(g.prototype, {
        addAnimation: function(a, b, c) { null == c && (c = 1);
            c = new Pc(a, b, c);
            this._animationList.set(a, c);
            this.updateHighestFrameCount(b.length) },
        loopAnimation: function(a) {
            this._moviePlayer.loop(a);
            this._moviePlayer.resume()
        },
        onAdded: function() { g.prototype.onAdded.call(this);
            this.setupFlipbookArray();
            this.setupAnimations();
            this.setupMoviePlayer() },
        setupFlipbookArray: function() { this._flipBookArray = [] },
        setupAnimations: function() {
            for (var a = this._animationList.iterator(); a.hasNext();) {
                for (var b = a.next(), c = [], e = 0, d = b.frameSequence; e < d.length;) { var f = d[e];++e;
                    c.push(this._assetPack.getTexture(this._textureArray[f])) } c = new Lc(b.animationName, c);
                c.setDuration(b.frameSequence.length * b.animationSpeed /
                    10);
                this._flipBookArray.push(c)
            }
        },
        setupMoviePlayer: function() { var a = ma.fromFlipbooks(this._flipBookArray);
            this._moviePlayer = new xa(a);
            this.owner.addChild((new h).add(this._moviePlayer)) },
        updateHighestFrameCount: function(a) { a > this._highestFrameCount && (this._highestFrameCount = a) },
        dispose: function() { g.prototype.dispose.call(this);
            this._assetPack = this._moviePlayer = this._textureArray = this._flipBookArray = this._animationList = null },
        __class__: xb
    });
    var xa = function(a) { this._sequenceIndex = 0;
        Na.call(this, a) };
    d["flindigo.animation.MoviePlayer"] = xa;
    xa.__name__ = !0;
    xa.__super__ = Na;
    xa.prototype = o(Na.prototype, {
        playOnce: function(a, b, c) { null == c && (c = !0); return this.playSequence([a], b, c) },
        playSequence: function(a, b, c) { null == c && (c = !0);
            this._sequenceIndex = 0;
            this._toCallOnSequenceEnd = b;
            this._sequenceArray = a;
            this.resume();
            this.play(this._sequenceArray[this._sequenceIndex], c); return this },
        onUpdate: function(a) {
            null != this._oneshotSprite && this._oneshotSprite._position + a > this._oneshotSprite.symbol.duration && (this._oneshotSprite =
                null, this._sequenceIndex++, null != this._sequenceArray && (this._sequenceIndex < this._sequenceArray.length ? this.play(this._sequenceArray[this._sequenceIndex]) : (this.setCurrent(this._loopingSprite), this._sequenceIndex = 0), null != this._toCallOnSequenceEnd && (this._toCallOnSequenceEnd(), this._toCallOnSequenceEnd = null)))
        },
        pause: function() { this.movie._value.set_paused(!0) },
        resume: function() { this.movie._value.set_paused(!1) },
        dispose: function() { Na.prototype.dispose.call(this);
            this._sequenceArray = null },
        __class__: xa
    });
    var Zb = function(a, b, c, e) { this.isPaused = !1;
        da.call(this, a, b, c, e);
        C.pauseSignal.connect(l(this, this.pause));
        C.resumeSignal.connect(l(this, this.resume)) };
    d["flindigo.animation.Tween"] = Zb;
    Zb.__name__ = !0;
    Zb.__super__ = da;
    Zb.prototype = o(da.prototype, { pause: function() { this.isPaused = !0 }, resume: function() { this.isPaused = !1 }, update: function(a) { return !0 == this.isPaused ? this._from + (this._to - this._from) * this._easing(this.elapsed / this._duration) : da.prototype.update.call(this, a) }, __class__: Zb });
    var $b = function() {
        q.call(this);
        this._onSwipeUp = new J;
        this._onSwipeRight = new J;
        this._onSwipeDown = new J;
        this._onSwipeLeft = new J
    };
    d["flindigo.input.SwipeManager"] = $b;
    $b.__name__ = !0;
    $b.__super__ = q;
    $b.prototype = o(q.prototype, {
        get_name: function() { return "SwipeManager_12" },
        handleSwipeDirectionDetection: function(a, b) { var c = Math.abs(a.x - b.x),
                e = Math.abs(a.y - b.y),
                d = Math.abs(c - e),
                g = 0.05 * f.get_screenWidth();
            d < g || (e > c ? b.y > a.y ? this._onSwipeDown.emit() : this._onSwipeUp.emit() : b.x > a.x ? this._onSwipeRight.emit() : this._onSwipeLeft.emit()) },
        get_onSwipeUp: function() { return this._onSwipeUp },
        get_onSwipeRight: function() { return this._onSwipeRight },
        get_onSwipeDown: function() { return this._onSwipeDown },
        dispose: function() { q.prototype.dispose.call(this);
            this._onSwipeLeft = this._onSwipeDown = this._onSwipeRight = this._onSwipeUp = this.onSwipeLeft = this.onSwipeDown = this.onSwipeRight = this.onSwipeUp = null },
        __class__: $b
    });
    var S = function() { this._hasFinishedLoadingSceneDelay = this._hasFinishedLoadingAssetPacks = !1;
        this._currentAssetPackIndex = 0 };
    d["flindigo.managers.AssetLoaderManager"] = S;
    S.__name__ = !0;
    S.getInstance =
        function() { null == S._instance && (S._instance = new S); return S._instance };
    S.prototype = {
        initialize: function(a) { this._sceneManager = a },
        loadAssetPack: function(a, b, c, e, d) { this.loadMultipleAssetPacks([a], [b], c, e, d) },
        loadMultipleAssetPacks: function(a, b, c, e, d) {
            this._assetPackList = [];
            this._currentLoadingScene = c;
            this._onSuccessFunctionArray = b;
            this._assetPackPathArray = a;
            this._delayBeforeCalling = e;
            this._currentAssetPackIndex = 0;
            this.setupLoadingSceneIfApplicable();
            this.setupDelayIfApplicable();
            this.loadAtIndex(this._currentAssetPackIndex);
            this._transitionDuration = null == d ? 0.35 : d
        },
        updateListeners: function() { null != this._currentLoadingScene && this._promiseLoader.progressChanged.connect(l(this, this.onProgressChanged));
            this._promiseLoader.success.connect(l(this, this.onLoadingSuccess));
            this._promiseLoader.error.connect(l(this, this.onLoadingFailed)) },
        setupLoadingSceneIfApplicable: function() {
            if (null != this._currentLoadingScene)
                if (null != this._sceneManager) this._sceneManager.fadeNewScene(this._currentLoadingScene, null, this._transitionDuration);
                else throw "Make sure that AssetLoaderManager is initialized first!";
            else this._hasFinishedLoadingAssetPacks = !0
        },
        setupDelayIfApplicable: function() { null != this._delayBeforeCalling ? ba.callWithDelay(r.root, new Oa(l(this, this.onFinishedDelay)), this._delayBeforeCalling) : this._hasFinishedLoadingSceneDelay = !0 },
        loadAtIndex: function(a) { a = X.fromAssets(this._assetPackPathArray[a]);
            this._promiseLoader = r._platform.loadAssetPack(a);
            this.updateListeners() },
        isLastAssetPack: function() {
            return this._currentAssetPackIndex >=
                this._assetPackPathArray.length
        },
        onFinishedDelay: function() { this._hasFinishedLoadingSceneDelay = !0;
            this.hasFinishedLoadingAndDelay() && this.emitToAllOnSuccessListeners() },
        onProgressChanged: function() { this._currentLoadingScene.setLoadingPercent((this._promiseLoader._progress / this._promiseLoader._total + this._currentAssetPackIndex) / this._assetPackPathArray.length);
            null },
        onLoadingSuccess: function(a) {
            this._assetPackList[this._currentAssetPackIndex] = a;
            this._currentAssetPackIndex++;
            this.isLastAssetPack() ?
                (this._hasFinishedLoadingAssetPacks = !0, this.hasFinishedLoadingAndDelay() && this.emitToAllOnSuccessListeners()) : this.loadAtIndex(this._currentAssetPackIndex)
        },
        onLoadingFailed: function(a) { throw "LOADING HAS FAILED: " + a; },
        emitToAllOnSuccessListeners: function() { for (var a = 0, b = 0, c = this._onSuccessFunctionArray; b < c.length;) { var e = c[b];++b;
                e(this._assetPackList[a]);
                a++ } this.reset() },
        hasFinishedLoadingAndDelay: function() { return this._hasFinishedLoadingAssetPacks && this._hasFinishedLoadingSceneDelay },
        reset: function() {
            this._promiseLoader =
                this._onSuccessFunctionArray = this._currentLoadingScene = null;
            this._assetPackPathArray = [];
            this._assetPackList = [];
            this._currentAssetPackIndex = 0;
            this._hasFinishedLoadingSceneDelay = this._hasFinishedLoadingAssetPacks = !1
        },
        __class__: S
    };
    var F = function() { this._sceneDirector = new Vb;
        r.root.add(this._sceneDirector);
        this._onTransitionFinished = new J };
    d["flindigo.managers.SceneManager"] = F;
    F.__name__ = !0;
    F.getInstance = function() { null == F._instance && (F._instance = new F); return F._instance };
    F.prototype = {
        fadeNewScene: function(a,
            b, c) { null == c && (c = 0); var e = new h;
            e.add(a);
            this.onExitTransitionStarted(c);
            this._sceneDirector.unwindToScene(e, b);
            this.onEnterTransitionStarted(c);
            ba.callWithDelay(r.root, new Pa(l(this, this.onEnterTransitionFinished), [c]), c) },
        pushScene: function(a, b, c) { null == c && (c = 0); var e = new h;
            e.add(a);
            this.onExitTransitionStarted(c);
            this._sceneDirector.pushScene(e, b);
            this.onEnterTransitionStarted(c);
            ba.callWithDelay(this._sceneDirector.get_topScene(), new Pa(l(this, this.onEnterTransitionFinished), [c]), c) },
        popFrontScene: function(a,
            b) { null == b && (b = 0);
            this.onExitTransitionStarted(b);
            this._sceneDirector.popScene(a);
            this.onEnterTransitionStarted(b); if (0 == b) this.onEnterTransitionFinished(0);
            else ba.callWithDelay(this._sceneDirector.get_topScene(), new Pa(l(this, this.onEnterTransitionFinished), [b]), b) },
        onEnterTransitionFinished: function(a) { var b = this.getCurrentTransitionsScene(); if (null != b) b.onEnterTransitionFinished(a) },
        onExitTransitionStarted: function(a) { var b = this.getCurrentTransitionsScene(); if (null != b) b.onExitTransitionStarted(a) },
        onEnterTransitionStarted: function(a) { var b = this.getCurrentTransitionsScene(); if (null != b) b.onEnterTransitionStarted(a) },
        getCurrentTransitionsScene: function() { if (null == this._sceneDirector) return null; var a = this._sceneDirector.get_topScene(); if (null == a) return null;
            a = u.instance(a._compMap.Scene_0, v); return null == a ? null : a },
        __class__: F
    };
    var A = function() { this._isEnabled = !0;
        this._audioMap = new K };
    d["flindigo.managers.SoundManager"] = A;
    A.__name__ = !0;
    A.getInstance = function() {
        null == A._instance && (A._instance = new A);
        return A._instance
    };
    A.prototype = { playAudio: function(a, b) { var c = this._audioMap.get(a);
            null != c ? c.get_sound().play() : (c = b.getSound(a).play(), this._audioMap.set(a, c)); return c }, enableAudio: function() { r.volume.set__(1);
            this._isEnabled = !0 }, disableAudio: function() { r.volume.set__(0);
            this._isEnabled = !1 }, __class__: A };
    var Qa = function(a) { null == a && (a = !0);
        va.call(this, a) };
    d["flindigo.scene.Scene"] = Qa;
    Qa.__name__ = !0;
    Qa.__super__ = va;
    Qa.prototype = o(va.prototype, {
        onAdded: function() {
            va.prototype.onAdded.call(this);
            null != this._hiddenListenersDisposer && this._hiddenListenersDisposer.dispose();
            this._hiddenListenersDisposer = new Ua;
            this.setupHiddenListeners()
        },
        setupHiddenListeners: function() { this._hiddenListenersDisposer.connect2(r.hidden.get_changed(), l(this, this.onHiddenChanged));
            this._hiddenListenersDisposer.connect0(this.hidden, l(this, this.onSceneHidden));
            this._hiddenListenersDisposer.connect0(this.shown, l(this, this.onSceneShown)) },
        onHiddenChanged: function(a) { if (a) this.onGameHidden();
            else this.onGameShown() },
        onGameHidden: function() {},
        onGameShown: function() {},
        onSceneHidden: function() {},
        onSceneShown: function() {},
        dispose: function() { va.prototype.dispose.call(this);
            null != this._hiddenListenersDisposer && this._hiddenListenersDisposer.dispose();
            this._hiddenListenersDisposer = null },
        __class__: Qa
    });
    var v = function(a) { null == a && (a = !0);
        Qa.call(this, a);
        this._signalExitTransitionStarted = new z;
        this._signalEnterTransitionFinished = new z;
        this._signalEnterTransitionStarted = new z };
    d["flindigo.scene.TransitionScene"] = v;
    v.__name__ = !0;
    v.__super__ = Qa;
    v.prototype = o(Qa.prototype, {
        onEnterTransitionFinished: function(a) { this._signalEnterTransitionFinished.emit(a) },
        onExitTransitionStarted: function(a) { this._signalExitTransitionStarted.emit(a) },
        onEnterTransitionStarted: function(a) { this._signalEnterTransitionStarted.emit(a) },
        dispose: function() {
            Qa.prototype.dispose.call(this);
            this._signalEnterTransitionStarted = this._signalExitTransitionStarted = this._signalEnterTransitionFinished = this.signalEnterTransitionStarted = this.signalExitTransitionStarted =
                this.signalEnterTransitionFinished = null
        },
        __class__: v
    });
    var Ra = function(a) { v.call(this);
        this._fontToUse = a };
    d["flindigo.scene.LoadingScene"] = Ra;
    Ra.__name__ = !0;
    Ra.__super__ = v;
    Ra.prototype = o(v.prototype, {
        onAdded: function() { v.prototype.onAdded.call(this);
            this.setupBackground();
            this.setupLoadingPercentage() },
        setupBackground: function() { this._background = new ha(0, f.get_screenWidth(), f.get_screenHeight());
            this.owner.addChild((new h).add(this._background)) },
        setupLoadingPercentage: function() {
            this._loading = new ob(this._fontToUse,
                "Loading...");
            this._loading.setXY(0.5 * f.get_screenWidth(), 0.5 * f.get_screenHeight());
            this.owner.addChild((new h).add(this._loading))
        },
        setLoadingPercent: function() {},
        onRemoved: function() { v.prototype.onRemoved.call(this);
            this._loading = this._background = null },
        __class__: Ra
    });
    var yb = function(a, b, c, e) { this.isPaused = !1;
        db.call(this, a, b, c, e);
        C.pauseSignal.connect(l(this, this.pause));
        C.resumeSignal.connect(l(this, this.resume)) };
    d["flindigo.script.AnimateBy"] = yb;
    yb.__name__ = !0;
    yb.__super__ = db;
    yb.prototype = o(db.prototype, { pause: function() { this.isPaused = !0 }, resume: function() { this.isPaused = !1 }, update: function(a) { if (!0 == this.isPaused) return -1;
            null == this._tween && (this._tween = new Zb(this._value._value, this._value._value + this._by, this._seconds, this._easing), this._value.set_behavior(this._tween), this._value.update(a)); if (this._value._behavior != this._tween) { var b = this._tween.elapsed - this._seconds;
                this._tween = null; return 0 < b ? a - b : 0 } return -1 }, __class__: yb });
    var Qc = function() {};
    d["flindigo.script.FlCallFunction"] = Qc;
    Qc.__name__ = !0;
    Qc.__interfaces__ = [ka];
    var Oa = function(a) { this._fn = a };
    d["flindigo.script.CallFunction0"] = Oa;
    Oa.__name__ = !0;
    Oa.__interfaces__ = [Qc];
    Oa.prototype = { update: function() { this._fn(); return 0 }, __class__: Oa };
    var Pa = function(a, b) { this._fn = a;
        this._param = b };
    d["flindigo.script.CallFunction1"] = Pa;
    Pa.__name__ = !0;
    Pa.__interfaces__ = [Qc];
    Pa.prototype = { update: function() { this._fn(this._param); return 0 }, __class__: Pa };
    var ya = function() {
        this.isPaused = !1;
        la.call(this);
        C.pauseSignal.connect(l(this, this.pause));
        C.resumeSignal.connect(l(this,
            this.resume))
    };
    d["flindigo.script.Script"] = ya;
    ya.__name__ = !0;
    ya.__super__ = la;
    ya.prototype = o(la.prototype, { pause: function() { this.isPaused = !0 }, resume: function() { this.isPaused = !1 }, onUpdate: function(a) { this.isPaused || la.prototype.onUpdate.call(this, a) }, run: function(a) { this.isPaused = !1; return la.prototype.run.call(this, a) }, __class__: ya });
    var za = function(a) { this.isPaused = !1;
        wa.call(this, a);
        C.pauseSignal.connect(l(this, this.pause));
        C.resumeSignal.connect(l(this, this.resume)) };
    d["flindigo.script.Sequence"] =
        za;
    za.__name__ = !0;
    za.__super__ = wa;
    za.prototype = o(wa.prototype, { pause: function() { this.isPaused = !0 }, resume: function() { this.isPaused = !1 }, update: function(a, b) { return !0 == this.isPaused ? -1 : wa.prototype.update.call(this, a, b) }, __class__: za });
    var ea = function(a, b, c, e, d, f, g) {
        null == g && (g = 0);
        null == f && (f = 0);
        this._normalScaleValueX = this._normalScaleValueY = 1;
        q.call(this);
        this._normalTexture = a;
        this._hoverTexture = b;
        this._clickTexture = c;
        this._disabledTexture = e;
        this._label = d;
        this._scaleWhenClicked = f;
        this._scaleWhenHovered =
            g;
        this._isEnabled = !0;
        this._sprite = new x(this._normalTexture)
    };
    d["flindigo.ui.Button"] = ea;
    ea.__name__ = !0;
    ea.__super__ = q;
    ea.prototype = o(q.prototype, {
        get_name: function() { return "Button_1" },
        setOnClickFunction: function(a) { this._functionToCallOnTouch = a },
        onAdded: function() { q.prototype.onAdded.call(this);
            this.setupSprite();
            this.setupLabel();
            this.setupDisposer() },
        setupSprite: function() { this.owner.add(this._sprite);
            this._sprite.centerAnchor() },
        setupLabel: function() {
            if (null != this._label && (this.owner.addChild((new h).add(this._label)),
                    B.__instanceof(this._label, ob))) { var a = this._label;
                a.centerAnchor();
                a.x.set__(this._sprite.getNaturalWidth() / 2 + a.x._value);
                a.y.set__(this._sprite.getNaturalHeight() / 2 + a.y._value) }
        },
        setupDisposer: function() {
            this._disposer = this.owner._compMap.Disposer_13;
            null == this._disposer && this.owner.add(this._disposer = new Ua);
            this._disposer.connect1(this._sprite.get_pointerIn(), l(this, this.onPointerIn));
            this._disposer.connect1(this._sprite.get_pointerOut(), l(this, this.onPointerOut));
            this._disposer.connect1(this._sprite.get_pointerDown(),
                l(this, this.onPointerDown));
            this._disposer.connect1(this._sprite.get_pointerUp(), l(this, this.onPointerUp))
        },
        onPointerIn: function() { this._isEnabled && (null != this._hoverTexture && (this._sprite.texture = this._hoverTexture), 0 != this._scaleWhenHovered && this._sprite.setScaleXY(this._scaleWhenHovered - (1 - this._normalScaleValueX), this._scaleWhenHovered - (1 - this._normalScaleValueY))) },
        onPointerOut: function() {
            this._isEnabled && (this._sprite.texture = this._normalTexture, this._sprite.setScaleXY(this._normalScaleValueX,
                this._normalScaleValueY))
        },
        onPointerDown: function() { this._isEnabled && (this._isClicked = !0, null != this._clickTexture && (this._sprite.texture = this._clickTexture), 0 != this._scaleWhenClicked && this._sprite.setScaleXY(this._scaleWhenClicked - (1 - this._normalScaleValueX), this._scaleWhenClicked - (1 - this._normalScaleValueY))) },
        onPointerUp: function() { this._isEnabled && this._isClicked && (this._sprite.texture = this._normalTexture, this._sprite.setScaleXY(this._normalScaleValueX, this._normalScaleValueY), this.callFunctionToCallOnTouch()) },
        dispose: function() { q.prototype.dispose.call(this);
            this._disposer.dispose();
            this._functionToCallOnTouch = this._disabledTexture = this._clickTexture = this._hoverTexture = this._normalTexture = this._sprite = this._disposer = this.label = this.sprite = null },
        callFunctionToCallOnTouch: function() { null != this._functionToCallOnTouch && this._functionToCallOnTouch() },
        get_sprite: function() { return this._sprite },
        __class__: ea
    });
    var ac = function(a, b) { this._isEnabled = !0;
        ha.call(this, 16711935, a, b);
        this.showDebugVisuals() };
    d["flindigo.utils.BoxCollider"] =
        ac;
    ac.__name__ = !0;
    ac.__super__ = ha;
    ac.prototype = o(ha.prototype, {
        intersects: function(a) { if (this == a || !this._isEnabled || !a.get_isEnabled()) return !1;
            a = this.getGlobalRectangle(a); return this.getGlobalRectangle(this).intersects(a) ? !0 : !1 },
        getGlobalRectangle: function(a) { var b = ba.getGlobalCoordinates(a); return new nb(b.x, b.y, a.getNaturalWidth(), a.getNaturalHeight()) },
        showDebugVisuals: function() { this.alpha.set__(0.5);
            this._isDebugVisualsShown = !0 },
        get_isEnabled: function() { return this._isEnabled },
        dispose: function() {
            ha.prototype.dispose.call(this);
            this._colliderSprite = null
        },
        __class__: ac
    });
    var bc = function(a) { wb.call(this, a) };
    d["flindigo.utils.Pool"] = bc;
    bc.__name__ = !0;
    bc.__super__ = wb;
    bc.prototype = o(wb.prototype, { shuffle: function() { this._freeObjects = Sa.shuffle(this._freeObjects) }, __class__: bc });
    var Sa = function() {};
    d["flindigo.utils.Random"] = Sa;
    Sa.__name__ = !0;
    Sa["float"] = function(a, b) { return a + (b - a) * Math.random() };
    Sa.fromArray = function(a) { return null != a && 0 < a.length ? a[Math.floor((a.length - 1 + 1) * Math.random())] : null };
    Sa.shuffle = function(a) {
        if (null !=
            a)
            for (var b = 0, c = a.length; b < c;) { var e = b++,
                    d = Math.floor((a.length - 1 + 1) * Math.random()),
                    f = a[e];
                a[e] = a[d];
                a[d] = f }
        return a
    };
    var j = function() { this._levelValues = [] };
    d["game.GameData"] = j;
    j.__name__ = !0;
    j.getInstance = function() { null == j._instance && (j._instance = new j); return j._instance };
    j.prototype = {
        initializeVariables: function(a) {
            this.obstacleSpeed = u.parseFloat(a.node.resolve("obstacle_speed").get_innerData());
            this.obstacleSpawnInterval = u.parseFloat(a.node.resolve("obstacle_spawn_interval").get_innerData());
            this.stageDuration = u.parseFloat(a.node.resolve("stage_duration").get_innerData());
            switch (a.node.resolve("tom_invulnerable").get_innerData()) {
                case "true":
                    this.isTomInvulnerable = !0; break;
                case "false":
                    this.isTomInvulnerable = !1 }
            switch (a.node.resolve("show_collider").get_innerData()) {
                case "true":
                    this.showCollider = !0; break;
                case "false":
                    this.showCollider = !1 }
        },
        initializeSpawnChances: function(a) {
            this._spawnChanceContainer = [];
            var b = u.parseInt(a.node.resolve("trashcan_spawn_chance").get_innerData()),
                c = u.parseInt(a.node.resolve("vase_spawn_chance").get_innerData()),
                e = u.parseInt(a.node.resolve("soil_spawn_chance").get_innerData()),
                d = u.parseInt(a.node.resolve("cat_spawn_chance").get_innerData()),
                f = u.parseInt(a.node.resolve("granny_spawn_chance").get_innerData()),
                g = u.parseInt(a.node.resolve("teddy_spawn_chance").get_innerData()),
                n = u.parseInt(a.node.resolve("milk_spawn_chance").get_innerData()),
                a = u.parseInt(a.node.resolve("food_basket_spawn_chance").get_innerData());
            this.addSpawnChancesArray(b, 3);
            this.addSpawnChancesArray(d, 4);
            this.addSpawnChancesArray(c, 5);
            this.addSpawnChancesArray(e,
                6);
            this.addSpawnChancesArray(f, 7);
            this.addSpawnChancesArray(n, 0);
            this.addSpawnChancesArray(a, 1);
            this.addSpawnChancesArray(g, 2)
        },
        addSpawnChancesArray: function(a, b) { for (var c = 0; c < a;) this._spawnChanceContainer.push(b), ++c },
        setConfigAssets: function(a) { this._configAssetPack = a; for (a = 0; 5 > a;) { var b = a++;
                this._levelValues.push(new cc(p.parse(this._configAssetPack.getFile("stage_" + (b + 1) + ".xml").toString()).firstElement())) } },
        loadLevelValues: function(a) {
            null != this._configAssetPack && (this.initializeVariables(this._levelValues[a -
                1]), this.initializeSpawnChances(this._levelValues[a - 1]))
        },
        getNewSpawnId: function() { return this._spawnChanceContainer[Math.floor((this._spawnChanceContainer.length - 1 + 1) * Math.random())] },
        __class__: j
    };
    var G = function() {};
    d["game.Main"] = G;
    G.__name__ = !0;
    G.main = function() { C.init(768, 460, aa.AUTO, !1);
        G.initializeApp() };
    G.initializeApp = function() {
        S.getInstance().initialize(F.getInstance());
        S.getInstance().loadMultipleAssetPacks(["preloader", "config", "gameover_scene", "game_common", "audio"], [G.initializePreloader,
            G.initializeConfig, G.initializeGameOverScene, G.initializeGameCommon, G.initializeAudio
        ]);
        Aa.getInstance().bindFunctions()
    };
    G.initializeConfig = function(a) { j.getInstance().setConfigAssets(a);
        j.getInstance().loadLevelValues(1) };
    G.initializePreloader = function(a) { V.getInstance().setupDefaultFonts(a);
        ba.callWithDelay(r.root, new Pa(G.loadTitleSceneAssets, [a]), 0.3) };
    G.initializeGameOverScene = function(a) { j.getInstance().gameOverAsset = a };
    G.initializeGameCommon = function(a) { j.getInstance().gameCommonAsset = a };
    G.initializeAudio = function(a) { j.getInstance().gameAudioAsset = a };
    G.loadTitleSceneAssets = function(a) { j.getInstance().gameLoadingAsset = B.__cast(a[0], mb);
        S.getInstance().loadAssetPack("title_scene", G.goToTitleScene, new Ba(V.getInstance().arialBlack, j.getInstance().gameLoadingAsset)) };
    G.goToTitleScene = function(a) { F.getInstance().fadeNewScene(new zb(a)) };
    var Aa = function() {};
    d["game.WPFunctionsManager"] = Aa;
    Aa.__name__ = !0;
    Aa.getInstance = function() { null == Aa._instance && (Aa._instance = new Aa); return Aa._instance };
    Aa.prototype = {
        bindFunctions: function() { r._platform.getExternal().bind("pauseGame", l(this, this.showPauseScene));
            r._platform.getExternal().bind("unpauseGame", l(this, this.resumeGame));
            r._platform.getExternal().bind("reloadGame", l(this, this.restartCurrentLevel));
            r._platform.getExternal().bind("muteGame", (dc = A.getInstance(), l(dc, dc.disableAudio)));
            r._platform.getExternal().bind("unmuteGame", (dc = A.getInstance(), l(dc, dc.enableAudio))) },
        showPauseScene: function() { F.getInstance().pushScene(new ec) },
        resumeGame: function() { F.getInstance().popFrontScene() },
        restartCurrentLevel: function() { j.getInstance().loadLevelValues(1);
            F.getInstance().fadeNewScene(new Ca, null, 0.3) },
        __class__: Aa
    };
    var fc = function() { q.call(this);
        this.onBonusRoundStartSignal = new J;
        this.onBonusRoundFinishedSignal = new J;
        this.barUIIsDepleting = !1 };
    d["game.managers.BonusBarUIManager"] = fc;
    fc.__name__ = !0;
    fc.__super__ = q;
    fc.prototype = o(q.prototype, {
        get_name: function() { return "BonusBarUIManager_11" },
        onAdded: function() { q.prototype.onAdded.call(this);
            this.setupBonusBarUI();
            this.resetBarWidthScale() },
        setupBonusBarUI: function() { this._bonusBarUI = new gc;
            this._bonusBarUI.setXY(0.01 * f.get_screenWidth(), 0.01 * f.get_screenHeight());
            this.owner.addChild((new h).add(this._bonusBarUI)) },
        onUpdate: function(a) { q.prototype.onUpdate.call(this, a);
            this.barUIIsDepleting && this.updateBarDepletion(a) },
        updateBarDepletion: function(a) { this.addBarWidthScale(-(0.1 * a));
            0.02 >= this._bonusBarUI.getFillBarScaleX() && (this.resetBarWidthScale(), this.barUIIsDepleting = !1, this.onBonusRoundFinishedSignal.emit()) },
        addBarWidthScale: function(a) {
            null ==
                a && (a = 0.1);
            a = this._bonusBarUI.getFillBarScaleX() + a;
            0.02 > a && (a = 0.02);
            this._bonusBarUI.setFillBarScaleX(a);
            0.99 <= a && (this.barUIIsDepleting = !0, this.onBonusRoundStartSignal.emit())
        },
        resetBarWidthScale: function() { this._bonusBarUI.setFillBarScaleX(0.02) },
        __class__: fc
    });
    var hc = function() { q.call(this) };
    d["game.managers.CollisionManager"] = hc;
    hc.__name__ = !0;
    hc.__super__ = q;
    hc.prototype = o(q.prototype, {
        get_name: function() { return "CollisionManager_7" },
        onAdded: function() { q.prototype.onAdded.call(this) },
        getGlobalBounds: function(a) {
            var b =
                ba.getGlobalCoordinates(a),
                a = g.getBounds(a.owner);
            a.set(b.x, b.y, a.width, a.height);
            return a
        },
        __class__: hc
    });
    var V = function() { this._fontMap = new K };
    d["game.managers.FontManager"] = V;
    V.__name__ = !0;
    V.getInstance = function() { null == V._instance && (V._instance = new V); return V._instance };
    V.prototype = {
        setupDefaultFonts: function(a) {
            this._shagLoungeOutline = this.getFont("fonts/shag_lounge/shag_lounge_outline", a);
            this._shagLoungeBlack = this.getFont("fonts/shag_lounge/shag_lounge_black", a);
            this._shagLoungeWhite = this.getFont("fonts/shag_lounge/shag_lounge_white",
                a);
            this.arialWhite = this.getFont("fonts/arial/arial_white", a);
            this.arialBlack = this.getFont("fonts/arial/arial_black", a)
        },
        getFont: function(a, b) { var c = this._fontMap.get(a);
            null == c && (c = new Za(b, a), this._fontMap.set(a, c)); return c },
        __class__: V
    };
    var Rc = function() {};
    d["game.managers.GameEvent"] = Rc;
    Rc.__name__ = !0;
    Rc.prototype = { __class__: Rc };
    var ic = function(a, b, c, e) { q.call(this);
        this._gameEvent = a;
        this._bean = b;
        this._obstacleContainer = c;
        this._powerUpsContainer = e };
    d["game.managers.GameEventManager"] = ic;
    ic.__name__ = !0;
    ic.__super__ = q;
    ic.prototype = o(q.prototype, {
        get_name: function() { return "GameEventManager_6" },
        onAdded: function() { q.prototype.onAdded.call(this);
            this.setupCollisionManager() },
        setupCollisionManager: function() { this._collisionManager = new hc;
            this.owner.addChild((new h).add(this._collisionManager)) },
        onUpdate: function(a) { q.prototype.onUpdate.call(this, a);
            this.updateCollisionCheck(a);
            this.updateScore();
            this.updatePowerUpCollisionCheck() },
        updateCollisionCheck: function() {
            switch (this._bean.currentLane) {
                case 1:
                    this.checkObstacleCollision(this._obstacleContainer.obstaclesLane1);
                    break;
                case 2:
                    this.checkObstacleCollision(this._obstacleContainer.obstaclesLane2);
                    break;
                case 3:
                    this.checkObstacleCollision(this._obstacleContainer.obstaclesLane3)
            }
        },
        checkObstacleCollision: function(a) { for (var b = 0; b < a.length;) { var c = a[b];++b; if (null != c.owner) { var e = this._collisionManager.getGlobalBounds(c),
                        d = this._collisionManager.getGlobalBounds(this._bean); if (!(e.x + 0.5 * e.width < d.x) && (this._bean.collidesWith(c) || this.hasJumpedOverImpassableObstacle(c))) { this._gameEvent.tomCollidesWith(c); break } } } },
        hasJumpedOverImpassableObstacle: function(a) { return this._bean.x._value + this._bean.boxCollider.width._value > a.x._value && a.type == Da.IMPASSABLE },
        updateScore: function() { this.checkForObstacleScore(this._obstacleContainer.obstaclesLane1);
            this.checkForObstacleScore(this._obstacleContainer.obstaclesLane2);
            this.checkForObstacleScore(this._obstacleContainer.obstaclesLane3) },
        checkForObstacleScore: function(a) {
            for (var b = 0; b < a.length;) {
                var c = a[b];
                ++b;
                if (!(null == c.owner || c.alreadyCheckedForScore)) {
                    var e = this._collisionManager.getGlobalBounds(c),
                        d = this._collisionManager.getGlobalBounds(this._bean);
                    e.x + 0.5 * e.width < d.x && (c.setAlreadyCheckedForScore(), c.type == Da.IMPASSABLE ? this._gameEvent.tomDodgedObstacle() : this._bean.jumping ? c.laneNumber == this._bean.currentLane ? this._gameEvent.tomJumpedOverObstacle() : this._gameEvent.tomDodgedObstacle() : this._gameEvent.tomDodgedObstacle())
                }
            }
        },
        updatePowerUpCollisionCheck: function() {
            for (var a = 0, b = this._powerUpsContainer.powerUps; a < b.length;) {
                var c = b[a];
                ++a;
                this._bean.currentLane == c.laneNumber && this._bean.collidesWith(c) &&
                    this._gameEvent.tomGotPowerUp(c)
            }
        },
        dispose: function() { q.prototype.dispose.call(this) },
        __class__: ic
    });
    var na = function(a) { this.onBonusRound = !1;
        this._doubleLaneObstacle = null;
        this._delayBetweenStageTimer = this._doubleLaneObstacleToShowUpAgainTimer = 0;
        this._updateStage = !0;
        this._spawnObstacleTimer = this._stageDurationTimer = this._levelCounter = 0;
        this._bonusRoundChosenSameLane = 1;
        this._bonusRoundSameLaneCounter = 0;
        g.call(this);
        this._assetPack = a };
    d["game.managers.GameObjectSpawnManager"] = na;
    na.__name__ = !0;
    na.__super__ =
        g;
    na.prototype = o(g.prototype, {
        onAdded: function() { g.prototype.onAdded.call(this);
            this.setupObstacles();
            this.setupLanes();
            this.setupPowerUpsSpawnManager();
            this.setupPowerUpsContainer();
            this.setupTwoLaneWarningSprite(0);
            this._spawnObstacleInterval = j.getInstance().obstacleSpawnInterval;
            this.objectHasSpawnedSignal = new J },
        setupObstacles: function() { this.obstaclesLane1 = [];
            this.obstaclesLane2 = [];
            this.obstaclesLane3 = [] },
        setupLanes: function() {
            this.laneEntity1 = new h;
            this.laneEntity2 = new h;
            this.laneEntity3 = new h;
            this.owner.addChild(this.laneEntity1);
            this.owner.addChild(this.laneEntity2);
            this.owner.addChild(this.laneEntity3)
        },
        setupPowerUpsSpawnManager: function() { this._powerUpsSpawnManager = new jc(this._assetPack);
            this.owner.addChild((new h).add(this._powerUpsSpawnManager)) },
        setupPowerUpsContainer: function() { this.powerUpsContainer = this._powerUpsSpawnManager.powerUpsContainer },
        setupTwoLaneWarningSprite: function(a) {
            this._tableWarningSprite1 = new x(this._assetPack.getTexture("ui/uiWarning"));
            this._tableWarningSprite1.x.set__(f.get_screenWidth() -
                this._tableWarningSprite1.getNaturalWidth());
            this._tableWarningSprite1.y.set__(f.get_screenHeight() * (0.38 + 0.16 * a));
            this.owner.addChild((new h).add(this._tableWarningSprite1));
            this._tableWarningSprite2 = new x(this._assetPack.getTexture("ui/uiWarning"));
            this._tableWarningSprite2.x.set__(f.get_screenWidth() - this._tableWarningSprite2.getNaturalWidth());
            this._tableWarningSprite2.y.set__(f.get_screenHeight() * (0.38 + 0.16 * (a + 1)));
            this.owner.addChild((new h).add(this._tableWarningSprite2));
            this.hideTwoLaneObstacleWarning()
        },
        showTwoLaneComingWarning: function(a) {
            0 == a ? (this._tableWarningSprite1.y.set__(f.get_screenHeight() * (0.5 + 0.16 * a)), this._tableWarningSprite2.y.set__(f.get_screenHeight() * (0.5 + 0.16 * (a + 1)))) : (this._tableWarningSprite1.y.set__(f.get_screenHeight() * (0.525 + 0.16 * a)), this._tableWarningSprite2.y.set__(f.get_screenHeight() * (0.525 + 0.16 * (a + 1))));
            this._tableWarningSprite1.set_visible(!0);
            this._tableWarningSprite2.set_visible(!0);
            a = j.getInstance().obstacleSpawnInterval;
            ba.callWithDelay(this.owner, new Oa(l(this, this.hideTwoLaneObstacleWarning)),
                a)
        },
        hideTwoLaneObstacleWarning: function() { this._tableWarningSprite1.set_visible(!1);
            this._tableWarningSprite2.set_visible(!1) },
        onUpdate: function(a) { g.prototype.onUpdate.call(this, a);
            this._updateStage ? (this.updateSpawning(a), this.onBonusRound || this.updateStageLevel(a), this.updateDoubleLaneDelayTimerToShowUpAgain(a)) : this.onBonusRound ? this.updateSpawning(a) : this.updateBetweenStage(a) },
        updateBetweenStage: function(a) {
            this._delayBetweenStageTimer += a;
            this._delayBetweenStageTimer >= na.DELAY_BETWEEN_STAGE &&
                (this._delayBetweenStageTimer -= na.DELAY_BETWEEN_STAGE, this._updateStage = !0, null != this._functionToCallOnStageChange && (this._functionToCallOnStageChange(), this._spawnObstacleInterval = j.getInstance().obstacleSpawnInterval))
        },
        updateSpawning: function(a) { this._spawnObstacleTimer += a;
            this._spawnObstacleTimer >= this._spawnObstacleInterval && (this._spawnObstacleTimer -= this._spawnObstacleInterval, this.spawnRandomObstacleOnRandomLane()) },
        updateStageLevel: function(a) {
            this._stageDurationTimer += a;
            !(this._levelCounter +
                1 >= na.MAX_LEVEL) && this._stageDurationTimer >= j.getInstance().stageDuration && (this._updateStage = !1, this._stageDurationTimer -= j.getInstance().stageDuration, this._levelCounter++, j.getInstance().loadLevelValues(this._levelCounter + 1))
        },
        updateDoubleLaneDelayTimerToShowUpAgain: function(a) { this._doubleLaneObstacleToShowUpAgainTimer -= a },
        spawnRandomObstacleOnRandomLane: function() {
            var a = j.getInstance().getNewSpawnId(),
                b = 1 + Math.floor(3 * Math.random());
            if (7 == a && !this.isReadyToSpawnDoubleLaneObstacle(b))
                for (; 7 ==
                    a;) a = 3 + Math.floor(5 * Math.random());
            var c = null;
            switch (b) {
                case 1:
                    c = this.laneEntity1; break;
                case 2:
                    c = this.laneEntity2; break;
                case 3:
                    c = this.laneEntity3 } this.onBonusRound ? (a = 0, b = this.getSameLaneNumber(b)) : this._bonusRoundSameLaneCounter = 0;
            switch (a) {
                case 0:
                    this._powerUpsSpawnManager.spawnPowerUp(W.PLUS_POINTS, b, c, this._assetPack.getTexture("power_ups/bonus01"), 0, 0.61);
                    break;
                case 1:
                    this._powerUpsSpawnManager.spawnPowerUp(W.ADD_BONUS_BAR_LENGTH, b, c, this._assetPack.getTexture("power_ups/bonus02"), 0, 0.61);
                    break;
                case 2:
                    this._powerUpsSpawnManager.spawnPowerUp(W.SHIELD, b, c, this._assetPack.getTexture("power_ups/power-up"), 0, 0.63);
                    break;
                case 3:
                    this.spawnSingleLaneObstacle(this._assetPack.getTexture("obstacles/bin"), "bin", b, c, 0.595);
                    break;
                case 4:
                    this.spawnSingleLaneObstacle(this._assetPack.getTexture("obstacles/cat"), "cat", b, c, 0.58);
                    break;
                case 5:
                    this.spawnSingleLaneObstacle(this._assetPack.getTexture("obstacles/vase"), "vase", b, c, 0.665);
                    break;
                case 6:
                    this.spawnSingleLaneObstacle(this._assetPack.getTexture("obstacles/soil"),
                        "soil", b, c, 0.65);
                    break;
                case 7:
                    this.spawnDoubleLaneObstacle(this._assetPack.getTexture("obstacles/granny"), "granny", b, c, 0.625, 0.5, 0.5)
            }
            this.objectHasSpawnedSignal.emit()
        },
        getSameLaneNumber: function(a) { 0 == this._bonusRoundSameLaneCounter && (this._bonusRoundChosenSameLane = a);
            3 <= this._bonusRoundSameLaneCounter ? this._bonusRoundSameLaneCounter = 0 : ++this._bonusRoundSameLaneCounter; return this._bonusRoundChosenSameLane },
        isReadyToSpawnDoubleLaneObstacle: function(a) {
            return null != this._doubleLaneObstacle || 3 <= a ||
                0 < this._doubleLaneObstacleToShowUpAgainTimer ? !1 : !0
        },
        spawnSingleLaneObstacle: function(a, b, c, e, d) {
            null == d && (d = 0.57);
            var g = -0.3 * f.get_screenWidth(),
                a = new oa(a, null, null, null, c, l(this, this.onObstacleOffScreen), g);
            a.x.set__(2 * f.get_screenWidth());
            a.y.set__(f.get_screenHeight() * (d + 0.13 * (c - 1)));
            a.obstacleName = b;
            switch (c) {
                case 1:
                    this.obstaclesLane1.push(a); break;
                case 2:
                    this.obstaclesLane2.push(a); break;
                case 3:
                    this.obstaclesLane3.push(a) } e.addChild((new h).add(a));
            a.setSpeed(j.getInstance().obstacleSpeed);
            a.slideToLeft()
        },
        spawnDoubleLaneObstacle: function(a, b, c, e, d, g, k) {
            null == k && (k = 1);
            null == g && (g = 0.5);
            null == d && (d = 0.7);
            var n = -0.3 * f.get_screenWidth(),
                a = new oa(a, gb.TABLE, Da.IMPASSABLE, Ea.DOUBLE, c, l(this, this.onObstacleOffScreen), n);
            a.x.set__(2 * f.get_screenWidth());
            a.y.set__(f.get_screenHeight() * (d + 0.13 * (c - 1)));
            a.obstacleName = b;
            switch (c) {
                case 1:
                    this.obstaclesLane1.push(a);
                    this.obstaclesLane2.push(a); break;
                case 2:
                    this.obstaclesLane2.push(a), this.obstaclesLane3.push(a) } e.addChild((new h).add(a));
            a.setupCollider(a.colliderWidth,
                a.colliderHeight, g, k);
            a.setSpeed(j.getInstance().obstacleSpeed);
            a.slideToLeft();
            this._doubleLaneObstacle = a;
            this.showTwoLaneComingWarning(c - 1)
        },
        onObstacleOffScreen: function(a) { a.doubleRowName == gb.TABLE && (this._doubleLaneObstacle = null, this._doubleLaneObstacleToShowUpAgainTimer = 3);
            this.laneEntity1.removeChild(a.owner);
            this.laneEntity2.removeChild(a.owner);
            this.laneEntity3.removeChild(a.owner);
            a.dispose() },
        removeFromList: function(a) {
            switch (a.laneNumber) {
                case 0:
                    s.remove(this.obstaclesLane1, a);
                    a.rowOccupied ==
                        Ea.DOUBLE && s.remove(this.obstaclesLane2, a);
                    break;
                case 1:
                    s.remove(this.obstaclesLane2, a);
                    a.rowOccupied == Ea.DOUBLE && s.remove(this.obstaclesLane3, a);
                    break;
                case 2:
                    s.remove(this.obstaclesLane3, a)
            }
        },
        transformObstaclesIntoScoreBooster: function() {
            for (var a = null, b = 0, c = this.obstaclesLane1; b < c.length;) {
                var e = c[b];
                ++b;
                this.onObstacleOffScreen(e);
                switch (e.laneNumber) {
                    case 0:
                        a = this.laneEntity1; break;
                    case 1:
                        a = this.laneEntity2; break;
                    case 2:
                        a = this.laneEntity3 } this._powerUpsSpawnManager.replaceWithMilk(e.laneNumber,
                    a, e.x._value)
            }
            b = 0;
            for (c = this.obstaclesLane2; b < c.length;) { e = c[b];++b;
                this.onObstacleOffScreen(e); switch (e.laneNumber) {
                    case 0:
                        a = this.laneEntity1; break;
                    case 1:
                        a = this.laneEntity2; break;
                    case 2:
                        a = this.laneEntity3 } this._powerUpsSpawnManager.replaceWithMilk(e.laneNumber, a, e.x._value) } b = 0;
            for (c = this.obstaclesLane3; b < c.length;) {
                e = c[b];
                ++b;
                this.onObstacleOffScreen(e);
                switch (e.laneNumber) {
                    case 0:
                        a = this.laneEntity1; break;
                    case 1:
                        a = this.laneEntity2; break;
                    case 2:
                        a = this.laneEntity3 } this._powerUpsSpawnManager.replaceWithMilk(e.laneNumber,
                    a, e.x._value)
            }
            this._powerUpsSpawnManager.replaceAllBonusItemToScoreBoosterItem(this.laneEntity1, this.laneEntity2, this.laneEntity3);
            a = 0;
            for (b = this.obstaclesLane1.length; a < b;) a++, this.obstaclesLane1.pop();
            a = 0;
            for (b = this.obstaclesLane2.length; a < b;) a++, this.obstaclesLane2.pop();
            a = 0;
            for (b = this.obstaclesLane3.length; a < b;) a++, this.obstaclesLane3.pop()
        },
        disposePowerUp: function(a) {
            var b = null;
            switch (a.laneNumber) {
                case 1:
                    b = this.laneEntity1; break;
                case 2:
                    b = this.laneEntity2; break;
                case 3:
                    b = this.laneEntity3 } this._powerUpsSpawnManager.disposePowerUp(a,
                b)
        },
        disposeObstacle: function(a) { this.onObstacleOffScreen(a);
            this.removeFromList(a) },
        setFunctionToCallOnStageChange: function(a) { this._functionToCallOnStageChange = a },
        setPowerUpsSpeed: function(a) { this._powerUpsSpawnManager.setSpeed(a); for (var b = 0, c = this.obstaclesLane1; b < c.length;) { var e = c[b];++b;
                e.setSpeed(a) } b = 0; for (c = this.obstaclesLane2; b < c.length;) e = c[b], ++b, e.setSpeed(a);
            b = 0; for (c = this.obstaclesLane3; b < c.length;) e = c[b], ++b, e.setSpeed(a) },
        replaceAllBonusBarFillerToScoreBooster: function() {
            this._powerUpsSpawnManager.replaceAllBonusItemToScoreBoosterItem(this.laneEntity1,
                this.laneEntity2, this.laneEntity3);
            this.transformObstaclesIntoScoreBooster()
        },
        dispose: function() { g.prototype.dispose.call(this) },
        set_onBonusRound: function(a) {
            (this.onBonusRound = a) ? (this._updateStage = !0, this._delayBetweenStageTimer = 0, this._spawnObstacleInterval = j.getInstance().obstacleSpawnInterval / 3) : this._spawnObstacleInterval = j.getInstance().obstacleSpawnInterval; return this.onBonusRound },
        __class__: na
    });
    var jc = function(a) { q.call(this);
        this._assetPack = a;
        this._speed = j.getInstance().obstacleSpeed };
    d["game.managers.PowerUpsSpawnManager"] = jc;
    jc.__name__ = !0;
    jc.__super__ = q;
    jc.prototype = o(q.prototype, {
        get_name: function() { return "PowerUpsSpawnManager_5" },
        onAdded: function() { q.prototype.onAdded.call(this);
            this.setupSpawnTimerAndDelay();
            this.setupPowerUpsContainer() },
        setupSpawnTimerAndDelay: function() { this._spawnTimer = 0;
            this._spawnDelay = 5 },
        setupPowerUpsContainer: function() { this.powerUpsContainer = new Sc },
        onPowerUpOffscreen: function(a) {
            null != a.owner ? this.disposePowerUp(B.__cast(a, hb), a.owner.parent) : this.disposePowerUp(B.__cast(a,
                hb), null)
        },
        spawnPowerUp: function(a, b, c, e, d, g) { null == g && (g = 0.59);
            null == d && (d = 0); var j = -0.3 * f.get_screenWidth(),
                a = new hb(e, null, null, null, b, a, l(this, this.onPowerUpOffscreen), j);
            0 == d ? a.x.set__(2 * f.get_screenWidth()) : a.x.set__(d);
            a.y.set__(f.get_screenHeight() * (g + 0.13 * (b - 1)));
            c.addChild((new h).add(a));
            a.setSpeed(this._speed);
            a.slideToLeft();
            this.powerUpsContainer.addPowerUp(a) },
        replaceWithMilk: function(a, b, c) { this.spawnPowerUp(W.PLUS_POINTS, a, b, this._assetPack.getTexture("power_ups/bonus01"), c, 0.65) },
        setSpeed: function(a) { this._speed = a; for (var b = this.powerUpsContainer.powerUps, c = 0; c < b.length;) { var e = b[c];++c;
                e.setSpeed(a);
                e.slideToLeft() } },
        replaceAllBonusItemToScoreBoosterItem: function(a, b, c) { for (var e = this.powerUpsContainer.powerUps, d = 0, f = e.length; d < f;) { var g = d++,
                    g = e[g]; if (g.powerUpType != W.PLUS_POINTS) { var n = null; switch (g.laneNumber) {
                        case 1:
                            n = a; break;
                        case 2:
                            n = b; break;
                        case 3:
                            n = c } this.replaceWithMilk(g.laneNumber, n, g.x._value);
                    this.disposePowerUp(g, n) } } },
        disposePowerUp: function(a, b) {
            null != a && (this.powerUpsContainer.removePowerUp(a),
                null != b && b.removeChild(a.owner), null != a.owner && a.owner.dispose(), a.dispose())
        },
        __class__: jc
    });
    var Tc = function() { this.reset() };
    d["game.managers.ScoreManager"] = Tc;
    Tc.__name__ = !0;
    Tc.prototype = { reset: function() { this.score = 0 }, addScoreDodge: function() {++this.score }, addScoreJumpedOver: function() { this.score += 2 }, addScoreSandwich: function() { this.score += 10 }, __class__: Tc };
    var fa = function() { g.call(this) };
    d["game.objects.Collider"] = fa;
    fa.__name__ = !0;
    fa.__super__ = g;
    fa.prototype = o(g.prototype, {
        onAdded: function() { g.prototype.onAdded.call(this) },
        setupCollider: function(a, b, c, e) { null == e && (e = 1);
            null == c && (c = 1);
            null != this.boxCollider && (this.owner.removeChild(this.boxCollider.owner), this.boxCollider.dispose());
            this.boxCollider = new ac(a * c, b * e);
            this.boxCollider.centerAnchor();
            this.owner.addChild((new h).add(this.boxCollider));
            j.getInstance().showCollider ? this.showCollider() : this.hideCollider() },
        collidesWith: function(a) { return this.boxCollider.intersects(a.boxCollider) },
        hideCollider: function() { this.boxCollider.set_visible(!1) },
        showCollider: function() { this.boxCollider.set_visible(!0) },
        __class__: fa
    });
    var kc = function(a) { this.shieldCount = 0;
        this.jumping = this.changingLane = !1;
        this.currentLane = this.previousLane = 1;
        this._gameOver = this.onBonusRound = !1;
        this._jumpScript = null;
        this._changeLaneDuration = 0.1;
        g.call(this);
        this._assetPack = a;
        this._shieldSprite = new xb(a, ["animations/shield/1", "animations/shield/2"]) };
    d["game.objects.characters.Bean"] = kc;
    kc.__name__ = !0;
    kc.__super__ = fa;
    kc.prototype = o(fa.prototype, {
        set_onBonusRound: function(a) {
            (this.onBonusRound = a) ? this.playOnBonus(): this.playIdle();
            return this.onBonusRound
        },
        onAdded: function() { fa.prototype.onAdded.call(this);
            this.setupMovieEntity();
            this.setupIdleAnimation();
            this.setupHitAnimation();
            this.setupJumpAnimation();
            this.setupOnBonusAnimation();
            this._animationBounds = g.getBounds(this._idleMovie.owner);
            this.setupShadow();
            this.setupCollider(this._animationBounds.width, this._animationBounds.height, 0.5, 0.75);
            this.setupTomShield();
            this.setupPlus1ScoreSprite();
            this.setupPlus10ScoreSprite();
            this.changeLane();
            this.x.set__(0.5 * this._animationBounds.width) },
        setupShadow: function() { this._shadow = new x(this._assetPack.getTexture("shadow"));
            this.owner.addChild((new h).add(this._shadow), !1);
            this._shadow.centerAnchor();
            this._shadow.y.set__(0.425 * this._animationBounds.height) },
        setupMovieEntity: function() { this._movieEntity = new h;
            this.owner.addChild(this._movieEntity) },
        setupIdleAnimation: function() { var a = new ma(this._assetPack, "animations/run");
            this._idleMovie = new xa(a);
            this._idleMovie.loop("bean_idle");
            this._movieEntity.addChild((new h).add(this._idleMovie)) },
        setupHitAnimation: function() { var a = new ma(this._assetPack, "animations/hit");
            this._hitMovie = new xa(a);
            this._hitMovie.loop("bean_hit");
            this._movieEntity.addChild((new h).add(this._hitMovie)) },
        setupJumpAnimation: function() { var a = new ma(this._assetPack, "animations/jump");
            this._jumpMovie = new xa(a);
            this._jumpMovie.loop("bean_jump");
            this._movieEntity.addChild((new h).add(this._jumpMovie)) },
        setupOnBonusAnimation: function() {
            var a = new ma(this._assetPack, "animations/on_bonus_round");
            this._onBonusMovie = new xa(a);
            this._onBonusMovie.loop("bean_faster_speed");
            this._movieEntity.addChild((new h).add(this._onBonusMovie))
        },
        setupTomShield: function() { this._shieldSprite.addAnimation("shield", [0, 1], 1);
            this.owner.addChild((new h).add(this._shieldSprite));
            this._shieldSprite.loopAnimation("shield");
            this._shieldSprite.set_visible(!1); var a = g.getBounds(this._shieldSprite.owner);
            this._shieldSprite.setXY(-0.5 * a.width, -0.5 * a.height) },
        setupPlus1ScoreSprite: function() {
            this._plus1Sprite = new x(this._assetPack.getTexture("ui/1 pt"));
            this._plus1Sprite.centerAnchor();
            this._plus1Sprite.x.set__(0.2 * f.get_screenWidth());
            this._plus1Sprite.y.set__(-0.07 * f.get_screenHeight());
            this._plus1Sprite.set_visible(!1);
            this.owner.addChild((new h).add(this._plus1Sprite))
        },
        setupPlus10ScoreSprite: function() {
            this._plus10Sprite = new x(this._assetPack.getTexture("ui/10 pts"));
            this._plus10Sprite.centerAnchor();
            this._plus10Sprite.x.set__(0.19 * f.get_screenWidth());
            this._plus10Sprite.y.set__(-0.07 * f.get_screenHeight());
            this._plus10Sprite.set_visible(!1);
            this.owner.addChild((new h).add(this._plus10Sprite))
        },
        onChangeLandDone: function() { this.changingLane = !1;
            this.playIdle();
            this.previousLane = this.currentLane;
            this._shadow.y.animateTo(0.425 * this._animationBounds.height, 0);
            this._shadow.setScale(1);
            this._shadow.set_visible(!0) },
        onJumpDone: function() { this.jumping = !1;
            this.playIdle() },
        removeJumpScript: function() {
            null != this._jumpScript && (this.owner.removeChild(this._jumpScript.owner), this._jumpScript.owner.dispose(), this._jumpScript.owner = null, this._jumpScript.dispose(),
                this._jumpScript = null, this.jumping = !1)
        },
        onPlus1DoneShowing: function() { this._plus1Sprite.set_visible(!1) },
        onPlus10DoneShowing: function() { this._plus10Sprite.set_visible(!1) },
        changeLane: function() { if (null != this.owner) { var a = 0.5 * this._animationBounds.height + f.get_screenHeight() * (0.335 + 0.13 * (this.currentLane - 1)),
                    a = new za([new R(this.y, a, this._changeLaneDuration), new Oa(l(this, this.onChangeLandDone))]),
                    b = new ya;
                b.run(a);
                this.owner.addChild((new h).add(b)) } },
        playJump: function() {
            !this._gameOver && !this.onBonusRound &&
                (this._movieEntity.addChild(this._jumpMovie.owner), this._jumpMovie.loop("bean_jump"), this._movieEntity.removeChild(this._idleMovie.owner), this._movieEntity.removeChild(this._hitMovie.owner), this._movieEntity.removeChild(this._onBonusMovie.owner))
        },
        playHit: function() {
            !this._gameOver && !this.onBonusRound && (this._movieEntity.addChild(this._hitMovie.owner), this._hitMovie.playOnce("bean_hit", l(this, this.onHitPause)), this._movieEntity.removeChild(this._jumpMovie.owner), this._movieEntity.removeChild(this._idleMovie.owner),
                this._movieEntity.removeChild(this._onBonusMovie.owner))
        },
        playIdle: function() {!this._gameOver && !this.onBonusRound && (this._movieEntity.addChild(this._idleMovie.owner), this._idleMovie.loop("bean_idle"), this._movieEntity.removeChild(this._jumpMovie.owner), this._movieEntity.removeChild(this._hitMovie.owner), this._movieEntity.removeChild(this._onBonusMovie.owner)) },
        playOnBonus: function() {
            this._gameOver || (this._movieEntity.addChild(this._onBonusMovie.owner), this._onBonusMovie.loop("bean_faster_speed"),
                this._movieEntity.removeChild(this._jumpMovie.owner), this._movieEntity.removeChild(this._hitMovie.owner), this._movieEntity.removeChild(this._idleMovie.owner))
        },
        onHitPause: function() { this._hitMovie.pause() },
        playShadowJump: function() {
            this._shadow.set_visible(!0);
            this._shadow.setScaleXY(1, 1);
            var a = 0.3 * f.get_screenHeight(),
                b = new Ma([new R(this._shadow.scaleX, 0.1, 0.375, H.cubeOut), new R(this._shadow.scaleY, 0.1, 0.375, H.cubeOut), new yb(this._shadow.y, a, 0.375, H.cubeOut)]),
                a = new Ma([new R(this._shadow.scaleX,
                    1, 0.375, H.cubeIn), new R(this._shadow.scaleY, 1, 0.375, H.cubeIn), new yb(this._shadow.y, -a, 0.375, H.cubeIn)]),
                b = new za([b, a]);
            this.disposeShadowJumpScript();
            this._shadowJumpScript = new ya;
            this._shadowJumpScript.run(b);
            this.owner.addChild((new h).add(this._shadowJumpScript))
        },
        disposeShadowJumpScript: function() {
            null != this._shadowJumpScript && (this.owner.removeChild(this._shadowJumpScript.owner), this._shadowJumpScript.stopAll(), this._shadowJumpScript.owner.dispose(), this._shadowJumpScript.dispose(), this._shadowJumpScript =
                null)
        },
        moveUp: function() { 1 == this.currentLane || this.changingLane || (this.removeJumpScript(), this.changingLane = !0, this.previousLane = this.currentLane, --this.currentLane, this.changeLane(), this.disposeShadowJumpScript(), this._shadow.set_visible(!1)) },
        moveDown: function() { 3 == this.currentLane || this.changingLane || (this.removeJumpScript(), this.changingLane = !0, this.previousLane = this.currentLane, ++this.currentLane, this.changeLane(), this.disposeShadowJumpScript(), this._shadow.set_visible(!1)) },
        jump: function() {
            if (!this._gameOver &&
                !(null == this.owner || this.changingLane || this.jumping)) { A.getInstance().playAudio("JumpingSFX", j.getInstance().gameAudioAsset);
                this.playJump();
                this.playShadowJump();
                this.jumping = !0; var a = this.y._value - 0.3 * f.get_screenHeight(),
                    b = this.y._value,
                    a = new za([new R(this.y, a, 0.375, H.cubeOut), new R(this.y, b, 0.375, H.cubeIn), new eb(l(this, this.onJumpDone))]);
                this._jumpScript = new ya;
                this._jumpScript.run(a);
                this.owner.addChild((new h).add(this._jumpScript)) }
        },
        addShield: function() {
            this.shieldCount = 1;
            0 < this.shieldCount ?
                this._shieldSprite.set_visible(!0) : this._shieldSprite.set_visible(!1)
        },
        removeShield: function() {--this.shieldCount;
            0 < this.shieldCount ? this._shieldSprite.set_visible(!0) : this._shieldSprite.set_visible(!1) },
        playHitAnimation: function() {
            this.disposeShadowJumpScript();
            this._shadow.setScale(this._shadow.scaleX._value);
            this._shadow.y.set__(this._shadow.y._value);
            null != this._jumpScript && (this.owner.removeChild(this._jumpScript.owner), this._jumpScript.stopAll(), this._jumpScript.owner.dispose(), this._jumpScript.dispose(),
                this.y.set__(this.y._value));
            this.playHit();
            this._gameOver = !0
        },
        showPlus1Sprite: function() { null != this._plus1Script && this._plus1Script.dispose();
            this._plus1Sprite.set_visible(!0);
            this._plus1Sprite.setScaleXY(0, 0); var a = new Ma([new R(this._plus1Sprite.scaleX, 1, 0.5, H.bounceOut), new R(this._plus1Sprite.scaleY, 1, 0.5, H.bounceOut)]),
                a = new za([a, new fb(1), new eb(l(this, this.onPlus1DoneShowing))]);
            this._plus1Script = new ya;
            this._plus1Script.run(a);
            this.owner.addChild((new h).add(this._plus1Script)) },
        showPlus10Sprite: function() {
            null !=
                this._plus10Script && this._plus10Script.dispose();
            this._plus10Sprite.set_visible(!0);
            this._plus10Sprite.setScaleXY(0, 0);
            var a = new Ma([new R(this._plus10Sprite.scaleX, 1, 0.5, H.bounceOut), new R(this._plus10Sprite.scaleY, 1, 0.5, H.bounceOut)]),
                a = new za([a, new fb(1), new eb(l(this, this.onPlus10DoneShowing))]);
            this._plus10Script = new ya;
            this._plus10Script.run(a);
            this.owner.addChild((new h).add(this._plus10Script))
        },
        __class__: kc
    });
    var Fa = function(a, b, c, e) {
        null == e && (e = 0);
        this._minYSpawnPosition = 0;
        q.call(this);
        this._entityToAddTo = a;
        this._initialPoolSize = e;
        this._scrollSpeed = c;
        this._objectToSpawnArray = b;
        this._spawnedObjects = [];
        this._signalOnSpawnedObject = new z
    };
    d["game.objects.obstacles.ObjectSpawner"] = Fa;
    Fa.__name__ = !0;
    Fa.__super__ = q;
    Fa.prototype = o(q.prototype, {
        get_name: function() { return "ObjectSpawner_4" },
        spawn: function() {
            var a = this.getRandomObjectFromPool();
            a.setScrollSpeed(this._scrollSpeed);
            this._entityToAddTo.addChild((new h).add(a));
            a.get_signalOnDisposed().connect(l(this, this.onObjectDisposed)).once();
            a.x.set__(f.get_screenWidth() + 100);
            a.y.set__(this.getSpawnYPosition());
            this._spawnedObjects.push(a);
            this._signalOnSpawnedObject.emit(a);
            return a
        },
        setYSpawnPositionRange: function(a, b) { null == a && (a = 0);
            this._minYSpawnPosition = a;
            this._maxYSpawnPosition = b },
        setScrollSpeed: function(a) { this._scrollSpeed = a; for (var a = 0, b = this._spawnedObjects; a < b.length;) { var c = b[a];++a;
                c.setScrollSpeed(this._scrollSpeed) } },
        onAdded: function() { q.prototype.onAdded.call(this);
            this.setupPool() },
        setupPool: function() {
            this._objectPool =
                new bc(l(this, this.poolAllocator));
            this.initializePoolContents();
            0 < this._initialPoolSize && this._objectPool.setSize(this._initialPoolSize)
        },
        poolAllocator: function() { var a = Sa.fromArray(this._objectToSpawnArray); return ga.createInstance(a, []) },
        getRandomObjectFromPool: function() { this._objectPool.shuffle(); return B.__cast(this._objectPool.take(), N) },
        getSpawnYPosition: function() {
            return null == this._maxYSpawnPosition || this._maxYSpawnPosition < this._minYSpawnPosition ? this._minYSpawnPosition : Sa["float"](this._minYSpawnPosition,
                this._maxYSpawnPosition)
        },
        initializePoolContents: function() { for (var a = 0, b = this._objectToSpawnArray; a < b.length;) { var c = b[a];++a;
                this._objectPool.put(B.__cast(ga.createInstance(c, []), N)) } },
        onObjectDisposed: function(a) { a = B.__cast(a, N);
            null != this._objectPool && this._objectPool.put(a);
            null != this._spawnedObjects && s.remove(this._spawnedObjects, a) },
        dispose: function() {
            q.prototype.dispose.call(this);
            this._entityToAddTo = this._maxYSpawnPosition = this._objectToSpawnArray = this._spawnedObjects = this._objectPool = this._signalOnSpawnedObject =
                null
        },
        __class__: Fa
    });
    var ib = function(a, b, c, e) { null == e && (e = 0);
        this._minDistanceBetweenSpwans = this._currentDistanceBetweenSpawns = 0;
        Fa.call(this, a, b, c, e) };
    d["game.objects.obstacles.ContinuousObjectSpawner"] = ib;
    ib.__name__ = !0;
    ib.__super__ = Fa;
    ib.prototype = o(Fa.prototype, {
        startSpawning: function(a) { this._startingXPosition = a;
            this.spawnANewObject() },
        onUpdate: function(a) {
            Fa.prototype.onUpdate.call(this, a);
            this.canSpawnNewObject() && (this._currentDistanceBetweenSpawns = this.determineCurrentDistanceBetweenSpawns(),
                this.spawnANewObject(), null)
        },
        spawnANewObject: function() { var a;
            a = B.__cast(this.spawn(), N);
            null != this._lastSpawnedObject ? a.x.set__(this._lastSpawnedObject.x._value + this._lastSpawnedObject.get_sprite().getNaturalWidth() + this._currentDistanceBetweenSpawns) : null == this._startingXPosition ? a.x.set__(0) : a.x.set__(this._startingXPosition);
            null == this._startingXPosition && a.x._value < f.get_screenWidth() && a.x.set__(f.get_screenWidth());
            a.startScrolling(); return this._lastSpawnedObject = a },
        determineCurrentDistanceBetweenSpawns: function() {
            return null !=
                this._maxDistanceBetweenSpawns ? this.getRandomDistanceBetweenSpawns() : this._minDistanceBetweenSpwans
        },
        getRandomDistanceBetweenSpawns: function() { return Sa["float"](this._minDistanceBetweenSpwans, this._maxDistanceBetweenSpawns) },
        canSpawnNewObject: function() { return this._lastSpawnedObject.x._value + this._lastSpawnedObject.get_sprite().getNaturalWidth() <= f.get_screenWidth() + 100 + this._currentDistanceBetweenSpawns },
        dispose: function() {
            Fa.prototype.dispose.call(this);
            this._maxDistanceBetweenSpawns = this._startingXPosition =
                this._lastSpawnedObject = null
        },
        __class__: ib
    });
    var Da = d["game.objects.obstacles.ObstacleType"] = { __ename__: !0, __constructs__: ["PASSABLE", "IMPASSABLE"] };
    Da.PASSABLE = ["PASSABLE", 0];
    Da.PASSABLE.__enum__ = Da;
    Da.IMPASSABLE = ["IMPASSABLE", 1];
    Da.IMPASSABLE.__enum__ = Da;
    var Ea = d["game.objects.obstacles.RowOccupied"] = { __ename__: !0, __constructs__: ["SINGLE", "DOUBLE"] };
    Ea.SINGLE = ["SINGLE", 0];
    Ea.SINGLE.__enum__ = Ea;
    Ea.DOUBLE = ["DOUBLE", 1];
    Ea.DOUBLE.__enum__ = Ea;
    var gb = d["game.objects.obstacles.DoubleRowName"] = {
        __ename__: !0,
        __constructs__: ["SPIKE", "TABLE"]
    };
    gb.SPIKE = ["SPIKE", 0];
    gb.SPIKE.__enum__ = gb;
    gb.TABLE = ["TABLE", 1];
    gb.TABLE.__enum__ = gb;
    var oa = function(a, b, c, e, d, f, h) { null == d && (d = 1);
        this._isSlidingToLeft = !1;
        g.call(this);
        this._obstacleSprite = new x(a);
        this.doubleRowName = b;
        this.type = null == c ? Da.PASSABLE : c;
        this.rowOccupied = null == e ? Ea.SINGLE : e;
        this.laneNumber = d;
        null == f && null;
        this._onOutOfScreenFunction = f;
        this._targetPosX = h;
        this._obstacleSpeedX = 0 };
    d["game.objects.obstacles.Obstacle"] = oa;
    oa.__name__ = !0;
    oa.__super__ = fa;
    oa.prototype =
        o(fa.prototype, {
            onAdded: function() { fa.prototype.onAdded.call(this);
                this.setupSprite();
                this.setupCollider(this.colliderWidth, this.colliderHeight, 0.5, 0.5);
                this.alreadyCheckedForScore = !1 },
            setupSprite: function() { this._obstacleSprite.centerAnchor();
                this.owner.addChild((new h).add(this._obstacleSprite));
                this.colliderWidth = this._obstacleSprite.getNaturalWidth();
                this.colliderHeight = this._obstacleSprite.getNaturalHeight() },
            onUpdate: function(a) {
                fa.prototype.onUpdate.call(this, a);
                if (this._isSlidingToLeft) {
                    var b =
                        this.x;
                    b.set__(b._value - Math.floor(a * this._obstacleSpeedX));
                    this.x._value <= this._targetPosX && (this._isSlidingToLeft = !1, this.onOutOfScreen())
                }
            },
            onOutOfScreen: function() { null != this._onOutOfScreenFunction && this._onOutOfScreenFunction(this) },
            slideToLeft: function() { this._isSlidingToLeft = !0 },
            setAlreadyCheckedForScore: function() { this.alreadyCheckedForScore = !0 },
            setSpeed: function(a) { this._obstacleSpeedX = a },
            __class__: oa
        });
    var Uc = function(a, b, c) {
        this.obstaclesLane1 = a;
        this.obstaclesLane2 = b;
        this.obstaclesLane3 =
            c
    };
    d["game.objects.obstacles.ObstacleContainer"] = Uc;
    Uc.__name__ = !0;
    Uc.prototype = { __class__: Uc };
    var Ta = function() { g.call(this) };
    d["game.objects.obstacles.SpawnableObject"] = Ta;
    Ta.__name__ = !0;
    Ta.__super__ = g;
    Ta.prototype = o(g.prototype, {
        onAdded: function() { g.prototype.onAdded.call(this);
            this._signalOnDisposed = new z;
            this.setupSprite() },
        setupSprite: function() {},
        get_signalOnDisposed: function() { return this._signalOnDisposed },
        get_sprite: function() { return this._sprite },
        dispose: function() {
            this._signalOnDisposed.emit(this);
            g.prototype.dispose.call(this);
            this._signalOnDisposed = this._sprite = this.sprite = this.signalOnDisposed = null
        },
        __class__: Ta
    });
    var N = function() { g.call(this) };
    d["game.objects.obstacles.ScrollingObject"] = N;
    N.__name__ = !0;
    N.__super__ = Ta;
    N.prototype = o(Ta.prototype, {
        startScrolling: function() { this._canScroll = !0 },
        setScrollSpeed: function(a) { this._scrollSpeed = a },
        onAdded: function() { Ta.prototype.onAdded.call(this);
            this.startScrolling() },
        onUpdate: function(a) {
            Ta.prototype.onUpdate.call(this, a);
            if (this._canScroll) {
                var b =
                    this.x;
                b.set__(b._value - Math.floor(a * this._scrollSpeed))
            }
            if (this.hasReachedDestination()) this.onReachedDestination()
        },
        onReachedDestination: function() { this._canScroll = !1;
            this._scrollSpeed = 0;
            this.owner.dispose() },
        hasReachedDestination: function() { return this.x._value <= -(this._sprite.getNaturalWidth() - this._sprite.anchorX._value) },
        __class__: N
    });
    var W = d["game.objects.powerups.PowerUpType"] = { __ename__: !0, __constructs__: ["ADD_BONUS_BAR_LENGTH", "PLUS_POINTS", "SHIELD"] };
    W.ADD_BONUS_BAR_LENGTH = ["ADD_BONUS_BAR_LENGTH",
        0
    ];
    W.ADD_BONUS_BAR_LENGTH.__enum__ = W;
    W.PLUS_POINTS = ["PLUS_POINTS", 1];
    W.PLUS_POINTS.__enum__ = W;
    W.SHIELD = ["SHIELD", 2];
    W.SHIELD.__enum__ = W;
    var hb = function(a, b, c, e, d, f, g, h) { null == d && (d = 1);
        oa.call(this, a, null, c, e, d, g, h);
        this.powerUpType = null == f ? W.ADD_BONUS_BAR_LENGTH : f };
    d["game.objects.powerups.PowerUp"] = hb;
    hb.__name__ = !0;
    hb.__super__ = oa;
    hb.prototype = o(oa.prototype, { onAdded: function() { oa.prototype.onAdded.call(this) }, __class__: hb });
    var Sc = function() { this.powerUps = [] };
    d["game.objects.powerups.PowerUpsContainer"] =
        Sc;
    Sc.__name__ = !0;
    Sc.prototype = { addPowerUp: function(a) { this.powerUps.push(a) }, removePowerUp: function(a) { s.remove(this.powerUps, a) }, __class__: Sc };
    var Ba = function(a, b) { Ra.call(this, a);
        this._assetPack = b };
    d["game.scene.GameLoadingScene"] = Ba;
    Ba.__name__ = !0;
    Ba.__super__ = Ra;
    Ba.prototype = o(Ra.prototype, {
        onAdded: function() { Ra.prototype.onAdded.call(this);
            this.resetupBackground();
            this.setupLoadingBackground();
            this.resetupLoadingPercentage();
            this.setupLoadingBarBg();
            this.setupLoadingBar();
            this.setupTopBar() },
        resetupBackground: function() { this._background.color = 8454143 },
        setupLoadingBackground: function() { var a = new x(this._assetPack.getTexture("loadingBG"));
            this.owner.addChild((new h).add(a)) },
        resetupLoadingPercentage: function() { this._loading.setXY(0.5 * f.get_screenWidth(), 0.8 * f.get_screenHeight()) },
        setupLoadingBarBg: function() { this._loadingBarBg = new x(this._assetPack.getTexture("botLoading"));
            this._loadingBarBg.setXY(0.5 * f.get_screenWidth(), 0.85 * f.get_screenHeight());
            this._loadingBarBg.centerAnchor();
            this.owner.addChild((new h).add(this._loadingBarBg)) },
        setupLoadingBar: function() { this._loadingBar = new x(this._assetPack.getTexture("midLoading"));
            this._loadingBar.scaleX.set__(0);
            this._loadingBar.setXY(0.5 * f.get_screenWidth(), 0.85 * f.get_screenHeight());
            this._loadingBar.centerAnchor();
            this.owner.addChild((new h).add(this._loadingBar)) },
        setupTopBar: function() { this._topBar = new x(this._assetPack.getTexture("topLoading"));
            this._topBar.setXY(0.5 * f.get_screenWidth(), 0.85 * f.get_screenHeight());
            this._topBar.centerAnchor();
            this.owner.addChild((new h).add(this._topBar)) },
        setLoadingPercent: function(a) { this._loading.set_text("Loading... " + (100 * a | 0) + "%");
            this._loading.centerAnchor();
            this.scaleAndPositionLoadingBar(a) },
        scaleAndPositionLoadingBar: function(a) { this._loadingBar.scaleX.set__(a); var b = 0.5 * this._loadingBar.getNaturalWidth();
            this._loadingBar.x.set__(0.0223776 * this._loadingBarBg.getNaturalWidth() * (1 - a) - (1 - a) * b);
            a = this._loadingBar.x;
            a.set__(a._value + 0.5 * f.get_screenWidth()) },
        __class__: Ba
    });
    var lc = function(a, b) {
        v.call(this, !1);
        this._score = a;
        this._bean = b;
        this._assetPack =
            j.getInstance().gameOverAsset
    };
    d["game.scene.GameOverScene"] = lc;
    lc.__name__ = !0;
    lc.__super__ = v;
    lc.prototype = o(v.prototype, {
        onAdded: function() { v.prototype.onAdded.call(this); var a = new ha(0, f.get_screenWidth(), f.get_screenHeight());
            a.alpha.set__(0.1);
            this.owner.addChild((new h).add(a));
            this.owner.addChild(this._bean.owner);
            this._bean.playHitAnimation();
            ba.callWithDelay(this.owner, new Oa(l(this, this.showGameOver)), 1.5) },
        showGameOver: function() {
            A.getInstance().playAudio("GameOver(Highscore)", j.getInstance().gameAudioAsset);
            this.setupBackground();
            this.setupHomeButton();
            this.setupRetryButton();
            this.setupScoreUI()
        },
        setupBackground: function() { var a = new x(this._assetPack.getTexture("gameoverBG"));
            this.owner.addChild((new h).add(a)) },
        setupHomeButton: function() { this._homeButton = new ea(this._assetPack.getTexture("btnQuit"), null, this._assetPack.getTexture("btnQuit - pressed"));
            this._homeButton.get_sprite().setXY(0.6 * f.get_screenWidth(), 0.8 * f.get_screenHeight());
            this._homeButton.setOnClickFunction(l(this, this.onTitle));
            this.owner.addChild((new h).add(this._homeButton)) },
        setupRetryButton: function() { this._retryButton = new ea(this._assetPack.getTexture("btnRetry"), null, this._assetPack.getTexture("btnRetry - pressed")); var a = this._homeButton.get_sprite().x._value + this._homeButton.get_sprite().getNaturalWidth();
            this._retryButton.get_sprite().setXY(a + 0.025 * f.get_screenWidth(), this._homeButton.get_sprite().y._value);
            this._retryButton.setOnClickFunction(l(this, this.onRetry));
            this.owner.addChild((new h).add(this._retryButton)) },
        setupScoreUI: function() {
            this._scoreUI = new Ab(j.getInstance().gameCommonAsset,
                "numbers/big/");
            this._scoreUI.x.set__(0.765 * f.get_screenWidth());
            this._scoreUI.y.set__(0.422 * f.get_screenHeight());
            this.owner.addChild((new h).add(this._scoreUI));
            this._scoreUI.setScoreSprite(this._score)
        },
        onRetry: function() { F.getInstance().fadeNewScene(new Ca);
            A.getInstance().playAudio("ButtonSFX", j.getInstance().gameAudioAsset) },
        onTitle: function() {
            S.getInstance().loadAssetPack("title_scene", l(this, this.onTitleScene), new Ba(V.getInstance().arialBlack, j.getInstance().gameLoadingAsset));
            A.getInstance().playAudio("ButtonSFX",
                j.getInstance().gameAudioAsset)
        },
        onTitleScene: function(a) { F.getInstance().fadeNewScene(new zb(a)) },
        dispose: function() { v.prototype.dispose.call(this) },
        __class__: lc
    });
    var Ca = function(a) { this._isSwiped = this._gameOver = !1;
        v.call(this);
        null == a ? this._assetPack = j.getInstance().gameAsset : (this._assetPack = a, j.getInstance().gameAsset = a) };
    d["game.scene.GameScene"] = Ca;
    Ca.__name__ = !0;
    Ca.__interfaces__ = [Rc];
    Ca.__super__ = v;
    Ca.prototype = o(v.prototype, {
        onAdded: function() {
            v.prototype.onAdded.call(this);
            j.getInstance().loadLevelValues(1);
            this.setupDisposer();
            this.setupBackground();
            this.setupScoreManager();
            this.setupScoreBoxSprite();
            this.setupScoreUI();
            this.setupSwipeManager();
            this.setupObstacles();
            this.setupBean();
            this.setupBonusBarUIManager();
            this.setupGameEvent();
            this.setupOnBonusRound();
            this.setupCurrentSpeed()
        },
        setupDisposer: function() { this._disposer = new Ua;
            this.owner.addChild((new h).add(this._disposer)) },
        setupBackground: function() {
            this._backgroundEntity = new h;
            this.owner.addChild(this._backgroundEntity);
            this._backgroundManager =
                new mc(this._assetPack);
            this._backgroundEntity.add(this._backgroundManager)
        },
        setupBean: function() { this._bean = new kc(this._assetPack);
            (new h).add(this._bean);
            this._gameObjectSpawnManager.objectHasSpawnedSignal.connect(l(this, this.setBeanLaneEntity));
            this.setBeanLaneEntity() },
        setupSwipeManager: function() {
            this._disposer.add(r._platform.getPointer().down.connect(l(this, this.onMouseDown)));
            this._disposer.add(r._platform.getPointer().up.connect(l(this, this.onMouseUp)));
            this._swipeManager = new $b;
            this.owner.addChild((new h).add(this._swipeManager));
            this._swipeManager.get_onSwipeUp().connect(l(this, this.onSwipeUp));
            this._swipeManager.get_onSwipeDown().connect(l(this, this.onSwipeDown));
            this._swipeManager.get_onSwipeRight().connect(l(this, this.onSwipeRight))
        },
        setupObstacles: function() { this._gameObjectSpawnManager = new na(this._assetPack);
            this.owner.addChild((new h).add(this._gameObjectSpawnManager));
            this._gameObjectSpawnManager.setFunctionToCallOnStageChange(l(this, this.onStageChange)) },
        setupGameEvent: function() {
            var a = new Uc(this._gameObjectSpawnManager.obstaclesLane1,
                this._gameObjectSpawnManager.obstaclesLane2, this._gameObjectSpawnManager.obstaclesLane3);
            this._gameEventManager = new ic(this, this._bean, a, this._gameObjectSpawnManager.powerUpsContainer);
            this.owner.addChild((new h).add(this._gameEventManager))
        },
        setupScoreManager: function() { this._scoreManager = new Tc },
        setupScoreBoxSprite: function() {
            this._scoreBoxSprite = new x(this._assetPack.getTexture("ui/uiScore"));
            this._scoreBoxSprite.x.set__(0.014 * f.get_screenWidth());
            this._scoreBoxSprite.y.set__(0.057999999999999996 *
                f.get_screenHeight());
            this.owner.addChild((new h).add(this._scoreBoxSprite))
        },
        setupScoreUI: function() { this._scoreUI = new Ab(j.getInstance().gameCommonAsset, "numbers/small/");
            this._scoreUI.x.set__(0.195 * f.get_screenWidth());
            this._scoreUI.y.set__(0.084 * f.get_screenHeight());
            this.owner.addChild((new h).add(this._scoreUI));
            this._scoreUI.setScoreSprite(0) },
        setupBonusBarUIManager: function() { this._bonusBarUIManager = new fc;
            this.owner.addChild((new h).add(this._bonusBarUIManager)) },
        setupOnBonusRound: function() {
            this._bonusBarUIManager.onBonusRoundStartSignal.connect(l(this,
                this.onBonusRoundStarts));
            this._bonusBarUIManager.onBonusRoundFinishedSignal.connect(l(this, this.onBonusRoundFinished))
        },
        setupCurrentSpeed: function() { this._currentSpeed = new D(0);
            this._currentSpeed.set__(j.getInstance().obstacleSpeed);
            this._currentSpeed.get_changed().connect(l(this, this.onSpeedChanged)) },
        onMouseDown: function(a) { this._isSwiped = !0;
            this._pointerDownX = a.viewX;
            this._pointerDownY = a.viewY },
        onMouseUp: function(a) {
            if (this._isSwiped) {
                this._isSwiped = !1;
                var b = new Ia(this._pointerDownX, this._pointerDownY),
                    a = new Ia(a.viewX, a.viewY);
                this._swipeManager.handleSwipeDirectionDetection(b, a)
            }
        },
        onSwipeUp: function() { this._bean.moveUp();
            this.setBeanLaneEntity() },
        onSwipeDown: function() { this._bean.moveDown();
            this.setBeanLaneEntity() },
        onSwipeRight: function() { this._bean.jump() },
        onGameOver: function() { this._gameOver = !0;
            this.owner.removeChild(this._bean.owner);
            F.getInstance().pushScene(new lc(this._scoreManager.score, this._bean)) },
        onStageChange: function() { this._currentSpeed.animateTo(j.getInstance().obstacleSpeed, 1) },
        onSpeedChanged: function(a) { this._backgroundManager.setBackgroundSpeed(a);
            this._gameObjectSpawnManager.setPowerUpsSpeed(a) },
        onBonusRoundStarts: function() { A.getInstance().playAudio("SpeedUp", j.getInstance().gameAudioAsset);
            this._bean.set_onBonusRound(!0);
            this._currentSpeed.animateTo(3 * j.getInstance().obstacleSpeed, 1);
            this._gameObjectSpawnManager.replaceAllBonusBarFillerToScoreBooster();
            this._gameObjectSpawnManager.set_onBonusRound(!0);
            this._backgroundManager.showBonusStageBackground() },
        onBonusRoundFinished: function() {
            this._bean.set_onBonusRound(!1);
            this._gameObjectSpawnManager.set_onBonusRound(!1);
            this._currentSpeed.animateTo(j.getInstance().obstacleSpeed, 1);
            this._backgroundManager.showNormalStageBackground()
        },
        tomCollidesWith: function(a) {
            if (j.getInstance().isTomInvulnerable) this._gameObjectSpawnManager.disposeObstacle(a);
            else if (0 < this._bean.shieldCount) this._bean.removeShield(), this._gameObjectSpawnManager.disposeObstacle(a);
            else switch (this.onGameOver(), a.obstacleName) {
                case "bin":
                    A.getInstance().playAudio("TrashbinHit", j.getInstance().gameAudioAsset);
                    break;
                case "cat":
                    A.getInstance().playAudio("CatHit", j.getInstance().gameAudioAsset);
                    break;
                case "vase":
                    A.getInstance().playAudio("BrokenVaseHit", j.getInstance().gameAudioAsset);
                    break;
                case "soil":
                    A.getInstance().playAudio("SoilAndLeaves", j.getInstance().gameAudioAsset);
                    break;
                case "granny":
                    A.getInstance().playAudio("GrannyHit", j.getInstance().gameAudioAsset)
            }
        },
        tomDodgedObstacle: function() { this._scoreManager.addScoreDodge();
            this._scoreUI.setScoreSprite(this._scoreManager.score) },
        tomJumpedOverObstacle: function() {
            this._scoreManager.addScoreJumpedOver();
            this._scoreUI.setScoreSprite(this._scoreManager.score);
            this._bean.showPlus1Sprite();
            A.getInstance().playAudio("PointsGet", j.getInstance().gameAudioAsset)
        },
        tomGotPowerUp: function(a) {
            switch (a.powerUpType[1]) {
                case 0:
                    this._bonusBarUIManager.barUIIsDepleting || this._bonusBarUIManager.addBarWidthScale(0.1);
                    A.getInstance().playAudio("PointsGet", j.getInstance().gameAudioAsset);
                    break;
                case 1:
                    this._scoreManager.addScoreSandwich();
                    this._scoreUI.setScoreSprite(this._scoreManager.score);
                    this._bean.showPlus10Sprite();
                    A.getInstance().playAudio("PointsGet", j.getInstance().gameAudioAsset);
                    break;
                case 2:
                    A.getInstance().playAudio("Shield", j.getInstance().gameAudioAsset), this._bean.addShield()
            }
            this._gameObjectSpawnManager.disposePowerUp(a)
        },
        onUpdate: function(a) { v.prototype.onUpdate.call(this, a);
            this._currentSpeed.update(a) },
        setBeanLaneEntity: function() {
            switch (this._bean.currentLane) {
                case 1:
                    this._gameObjectSpawnManager.laneEntity1.addChild(this._bean.owner);
                    break;
                case 2:
                    this._gameObjectSpawnManager.laneEntity2.addChild(this._bean.owner);
                    break;
                case 3:
                    this._gameObjectSpawnManager.laneEntity3.addChild(this._bean.owner)
            }
        },
        dispose: function() { v.prototype.dispose.call(this);
            this._disposer = this._scoreManager = null;
            this._backgroundManager.dispose();
            this._gameEventManager.dispose();
            this._gameEventManager = null },
        __class__: Ca
    });
    var nc = function(a) { this._backgroundNumber = 1;
        v.call(this);
        this._assetPack = a };
    d["game.scene.HowToPlayScene"] = nc;
    nc.__name__ = !0;
    nc.__super__ = v;
    nc.prototype = o(v.prototype, {
        onAdded: function() {
            v.prototype.onAdded.call(this);
            this.setupBackground();
            this.setupNextButton();
            this.setupPreviousButton();
            this.setupPlayButton()
        },
        setupBackground: function() { null != this._bg1 && (this._bg1.dispose(), this._bg1 = null);
            this._bg1 = new x(this._assetPack.getTexture("How to 0" + this._backgroundNumber));
            this.owner.addChild((new h).add(this._bg1)) },
        setupNextButton: function() {
            this._nextButton = new ea(this._assetPack.getTexture("right_btn"));
            this._nextButton.get_sprite().setXY(f.get_screenWidth() - 0.55 * this._nextButton.get_sprite().getNaturalWidth(),
                0.5 * f.get_screenHeight());
            this._nextButton.setOnClickFunction(l(this, this.onNextBackground));
            this.owner.addChild((new h).add(this._nextButton))
        },
        setupPreviousButton: function() { this._previousButton = new ea(this._assetPack.getTexture("left_btn"));
            this._previousButton.get_sprite().setXY(0.5 * this._previousButton.get_sprite().getNaturalWidth(), 0.5 * f.get_screenHeight());
            this._previousButton.setOnClickFunction(l(this, this.onPreviousBackground));
            this._previousButton.get_sprite().set_visible(!1);
            this.owner.addChild((new h).add(this._previousButton)) },
        setupPlayButton: function() { this._playButton = new ea(this._assetPack.getTexture("btnPlay"), null, this._assetPack.getTexture("btnPlay - pressed"));
            this._playButton.get_sprite().setXY(0.97 * f.get_screenWidth() - 0.5 * this._playButton.get_sprite().getNaturalWidth(), 0.975 * f.get_stageHeight() - 0.5 * this._playButton.get_sprite().getNaturalHeight());
            this._playButton.setOnClickFunction(l(this, this.onGameScreen));
            this._playButton.get_sprite().set_visible(!1);
            this.owner.addChild((new h).add(this._playButton)) },
        onNextBackground: function() {
            4 >
                this._backgroundNumber && (++this._backgroundNumber, 4 == this._backgroundNumber ? (this._nextButton.get_sprite().set_visible(!1), this._playButton.get_sprite().set_visible(!0)) : (this._playButton.get_sprite().set_visible(!1), this._nextButton.get_sprite().set_visible(!0)), 1 == this._backgroundNumber ? this._previousButton.get_sprite().set_visible(!1) : this._previousButton.get_sprite().set_visible(!0), this.setupBackground(), this.setupButtonsOnTop(), A.getInstance().playAudio("ButtonSFX", j.getInstance().gameAudioAsset))
        },
        onPreviousBackground: function() { 1 < this._backgroundNumber && (this._playButton.get_sprite().set_visible(!1), --this._backgroundNumber, 1 == this._backgroundNumber ? this._previousButton.get_sprite().set_visible(!1) : this._previousButton.get_sprite().set_visible(!0), 4 == this._backgroundNumber ? this._nextButton.get_sprite().set_visible(!1) : this._nextButton.get_sprite().set_visible(!0), this.setupBackground(), this.setupButtonsOnTop(), A.getInstance().playAudio("ButtonSFX", j.getInstance().gameAudioAsset)) },
        onGameScreen: function() {
            S.getInstance().loadAssetPack("game_scene",
                l(this, this.onGameScene), new Ba(V.getInstance().arialBlack, j.getInstance().gameLoadingAsset));
            A.getInstance().playAudio("ButtonSFX", j.getInstance().gameAudioAsset)
        },
        onGameScene: function(a) { F.getInstance().fadeNewScene(new Ca(a)) },
        setupButtonsOnTop: function() { this.owner.removeChild(this._nextButton.owner);
            this.owner.removeChild(this._previousButton.owner);
            this.owner.removeChild(this._playButton.owner);
            this.owner.addChild(this._nextButton.owner);
            this.owner.addChild(this._previousButton.owner);
            this.owner.addChild(this._playButton.owner) },
        dispose: function() { v.prototype.dispose.call(this);
            this._assetPack.dispose() },
        __class__: nc
    });
    var ec = function() { v.call(this, !1) };
    d["game.scene.PauseScene"] = ec;
    ec.__name__ = !0;
    ec.__super__ = v;
    ec.prototype = o(v.prototype, { onAdded: function() { v.prototype.onAdded.call(this) }, __class__: ec });
    var zb = function(a) { v.call(this);
        this._assetPack = a };
    d["game.scene.TitleScene"] = zb;
    zb.__name__ = !0;
    zb.__super__ = v;
    zb.prototype = o(v.prototype, {
        onAdded: function() {
            v.prototype.onAdded.call(this);
            this.setupBackground();
            this.setupPlayButton();
            this.setupHowToPlayButton()
        },
        setupBackground: function() { var a = new x(this._assetPack.getTexture("Title Screen BG"));
            this.owner.addChild((new h).add(a)) },
        setupPlayButton: function() {
            this._playButton = new ea(this._assetPack.getTexture("btnPlay"), null, this._assetPack.getTexture("btnPlay - pressed"));
            this._playButton.get_sprite().setXY(0.031 * f.get_screenWidth(), 0.74 * f.get_screenHeight());
            var a = this._playButton.get_sprite().x;
            a.set__(a._value + 0.5 * this._playButton.get_sprite().getNaturalWidth());
            this._playButton.setOnClickFunction(l(this,
                this.onGameScreen));
            this.owner.addChild((new h).add(this._playButton))
        },
        setupHowToPlayButton: function() {
            this._howToPlayButton = new ea(this._assetPack.getTexture("btnHtp"), null, this._assetPack.getTexture("btnHtp - pressed"));
            this._howToPlayButton.get_sprite().setXY(0.03 * f.get_screenWidth(), 0.91 * f.get_screenHeight());
            var a = this._howToPlayButton.get_sprite().x;
            a.set__(a._value + 0.5 * this._howToPlayButton.get_sprite().getNaturalWidth());
            this._howToPlayButton.setOnClickFunction(l(this, this.onHowToScreen));
            this.owner.addChild((new h).add(this._howToPlayButton))
        },
        onGameScreen: function() { S.getInstance().loadAssetPack("game_scene", l(this, this.onGameScene), new Ba(V.getInstance().arialBlack, j.getInstance().gameLoadingAsset));
            A.getInstance().playAudio("ButtonSFX", j.getInstance().gameAudioAsset) },
        onGameScene: function(a) { F.getInstance().fadeNewScene(new Ca(a)) },
        onHowToScreen: function() {
            S.getInstance().loadAssetPack("howto_scene", l(this, this.onHowToScene), new Ba(V.getInstance().arialBlack, j.getInstance().gameLoadingAsset));
            A.getInstance().playAudio("ButtonSFX", j.getInstance().gameAudioAsset)
        },
        onHowToScene: function(a) { F.getInstance().fadeNewScene(new nc(a)) },
        dispose: function() { v.prototype.dispose.call(this);
            this._assetPack.dispose() },
        __class__: zb
    });
    var oc = function() { g.call(this) };
    d["game.scene.game_background.Background"] = oc;
    oc.__name__ = !0;
    oc.__super__ = N;
    oc.prototype = o(N.prototype, {
        onAdded: function() {
            N.prototype.onAdded.call(this);
            var a = 1 + Math.floor(4 * Math.random());
            this._sprite = new x(j.getInstance().gameAsset.getTexture("backgrounds/background-" +
                a));
            this.owner.addChild((new h).add(this._sprite))
        },
        __class__: oc
    });
    var pc = function() { g.call(this) };
    d["game.scene.game_background.Foreground"] = pc;
    pc.__name__ = !0;
    pc.__super__ = N;
    pc.prototype = o(N.prototype, {
        onAdded: function() { N.prototype.onAdded.call(this);
            this._sprite = new x(j.getInstance().gameAsset.getTexture("backgrounds/foreground")); var a = new x(j.getInstance().gameAsset.getTexture("backgrounds/foregroundFence"));
            this.owner.addChild((new h).add(a));
            this.owner.addChild((new h).add(this._sprite)) },
        __class__: pc
    });
    var mc = function(a) { q.call(this);
        this._assetPack = a };
    d["game.scene.game_background.GameBackgroundManager"] = mc;
    mc.__name__ = !0;
    mc.__super__ = q;
    mc.prototype = o(q.prototype, {
        get_name: function() { return "GameBackgroundManager_3" },
        onAdded: function() { q.prototype.onAdded.call(this);
            this._backgroundSpeed = j.getInstance().obstacleSpeed;
            this.setupFarBackground();
            this.setupBackground();
            this.setupMiddleGround();
            this.setupForeground();
            this.setBackgroundSpeed(this._backgroundSpeed);
            this.setupBonusStage() },
        setupFarBackground: function() { this._farBackgroundOwner = new h;
            this._farBackground = new x(j.getInstance().gameAsset.getTexture("backgrounds/farground"));
            this._farBackgroundOwner.add(this._farBackground);
            this.owner.addChild(this._farBackgroundOwner) },
        setupBackground: function() {
            this._backgroundOwner = new h;
            var a = new x(j.getInstance().gameAsset.getTexture("backgrounds/background-wall"));
            this._backgroundOwner.addChild((new h).add(a));
            this._background = new ib(this._backgroundOwner, [oc], j.getInstance().obstacleSpeed,
                3);
            this.owner.addChild(this._backgroundOwner.add(this._background));
            this._background.setScrollSpeed(this._backgroundSpeed - 200);
            this._background.setYSpawnPositionRange(0, 0);
            this._background.startSpawning(0)
        },
        setupMiddleGround: function() {
            this._middleGroundOwner = new h;
            this._middleGround = new ib(this._middleGroundOwner, [qc], j.getInstance().obstacleSpeed, 3);
            this.owner.addChild(this._middleGroundOwner.add(this._middleGround));
            this._middleGround.setScrollSpeed(this._backgroundSpeed - 100);
            this._middleGround.setYSpawnPositionRange(-0.056 *
                f.get_screenHeight());
            this._middleGround.startSpawning(0)
        },
        setupForeground: function() { this._foregroundEntity = new h;
            this._foreground = new ib(this._foregroundEntity, [pc], j.getInstance().obstacleSpeed);
            this.owner.addChild(this._foregroundEntity.add(this._foreground));
            this._foreground.setScrollSpeed(2 * this._backgroundSpeed);
            this._foreground.setYSpawnPositionRange(0);
            this._foreground.startSpawning(0) },
        setupBonusStage: function() {
            this._bonusStageSprite = new xb(j.getInstance().gameAsset, ["backgrounds/bonus stage/speed01",
                "backgrounds/bonus stage/speed02", "backgrounds/bonus stage/speed03", "backgrounds/bonus stage/speed04", "backgrounds/bonus stage/speed05"
            ]);
            this._bonusStageSprite.addAnimation("bonus", [0, 1, 2, 3, 4], 0.5);
            this._bonusStageEntity = (new h).add(this._bonusStageSprite);
            this._bonusStageSprite.loopAnimation("bonus")
        },
        setBackgroundSpeed: function(a) { this._backgroundSpeed = a;
            this._foreground.setScrollSpeed(this._backgroundSpeed);
            this._background.setScrollSpeed(0.5 * a);
            this._middleGround.setScrollSpeed(0.8 * a) },
        showNormalStageBackground: function() { this.owner.removeChild(this._bonusStageEntity) },
        showBonusStageBackground: function() { this.owner.addChild(this._bonusStageEntity) },
        __class__: mc
    });
    var qc = function() { g.call(this) };
    d["game.scene.game_background.MiddleGround"] = qc;
    qc.__name__ = !0;
    qc.__super__ = N;
    qc.prototype = o(N.prototype, { onAdded: function() { N.prototype.onAdded.call(this); var a = 1 + Math.floor(4 * Math.random());
            this._sprite = new x(j.getInstance().gameAsset.getTexture("backgrounds/middleground-" + a));
            this.owner.addChild((new h).add(this._sprite)) }, __class__: qc });
    var gc = function() { g.call(this) };
    d["game.ui.BonusBarUI"] = gc;
    gc.__name__ = !0;
    gc.__super__ = g;
    gc.prototype = o(g.prototype, {
        onAdded: function() { g.prototype.onAdded.call(this);
            this.setupBackground();
            this.setupFillBar();
            this.setupTopBar() },
        setupBackground: function() { var a = new x(j.getInstance().gameAsset.getTexture("ui/uiMeterBot"));
            a.setXY(0.5 * f.get_screenWidth() - 0.5 * a.getNaturalWidth(), 0.1 * f.get_screenHeight() - 0.5 * a.getNaturalHeight());
            this.owner.addChild((new h).add(a)) },
        setupFillBar: function() {
            this._fillBar = new x(j.getInstance().gameAsset.getTexture("ui/uiMeterMid"));
            this._fillBar.setXY(0.5 * f.get_screenWidth() - 0.485 * this._fillBar.getNaturalWidth(), 0.1 * f.get_screenHeight() - 0.5 * this._fillBar.getNaturalHeight());
            this.owner.addChild((new h).add(this._fillBar))
        },
        setupTopBar: function() { var a = new x(j.getInstance().gameAsset.getTexture("ui/uiMeterTop"));
            a.setXY(0.5 * f.get_screenWidth() - 0.5 * a.getNaturalWidth(), 0.1 * f.get_screenHeight() - 0.5 * a.getNaturalHeight());
            this.owner.addChild((new h).add(a)) },
        setFillBarScaleX: function(a) {
            0.02 <= a && this._fillBar.scaleX.set__(a);
            0.02 >=
                this._fillBar.scaleX._value ? this._fillBar.set_visible(!1) : this._fillBar.set_visible(!0)
        },
        getFillBarScaleX: function() { return this._fillBar.scaleX._value },
        __class__: gc
    });
    var Ab = function(a, b) { this._digitLimit = 5;
        g.call(this);
        this._assetPack = a;
        this._filePath = b };
    d["game.ui.ScoreUI"] = Ab;
    Ab.__name__ = !0;
    Ab.__super__ = g;
    Ab.prototype = o(g.prototype, {
        onAdded: function() { g.prototype.onAdded.call(this);
            this.setupLayerAndSprite();
            this.setupNumbers() },
        setupLayerAndSprite: function() {
            this._numbersLayer = new h;
            this._numberSprite =
                new g;
            this.owner.addChild(this._numbersLayer.add(this._numberSprite))
        },
        setupNumbers: function() { this._numbers = []; for (var a = 0; 10 > a;) { for (var b = 0, c = []; b < this._digitLimit;) { var e = this.getNumberSprite(b, a);
                    this._numbersLayer.addChild((new h).add(e));
                    c.push(e);++b } this._numbers.push(c);++a } this.clear() },
        getNumberSprite: function(a, b) { var c = new x(this._assetPack.getTexture(this._filePath + b));
            c.x.set__(a * c.getNaturalWidth()); return c },
        clear: function() {
            for (var a = 0, b = this._numbers; a < b.length;) {
                var c = b[a];
                ++a;
                for (var e = 0; e < c.length;) { var d = c[e];++e;
                    this._numbersLayer.removeChild(d.owner) }
            }
        },
        setScoreSprite: function(a) { this.clear(); for (var a = "" + a, b = 0; b < a.length;) this._numbersLayer.addChild(this._numbers[u.parseInt(a.charAt(b))][b].owner), ++b;
            a = g.getBounds(this._numbersLayer);
            a.width != this._currentWidth && (this._currentWidth = a.width, this._numberSprite.x.set__(-0.5 * this._currentWidth)) },
        __class__: Ab
    });
    var ia = function() { this.h = {} };
    d["haxe.ds.IntMap"] = ia;
    ia.__name__ = !0;
    ia.__interfaces__ = [$c];
    ia.prototype = {
        set: function(a,
            b) { this.h[a] = b },
        get: function(a) { return this.h[a] },
        exists: function(a) { return this.h.hasOwnProperty(a) },
        remove: function(a) { if (!this.h.hasOwnProperty(a)) return !1;
            delete this.h[a]; return !0 },
        __class__: ia
    };
    var K = function() { this.h = {} };
    d["haxe.ds.StringMap"] = K;
    K.__name__ = !0;
    K.__interfaces__ = [$c];
    K.prototype = {
        set: function(a, b) { this.h["$" + a] = b },
        get: function(a) { return this.h["$" + a] },
        exists: function(a) { return this.h.hasOwnProperty("$" + a) },
        keys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b.substr(1));
            return s.iter(a)
        },
        iterator: function() { return { ref: this.h, it: this.keys(), hasNext: function() { return this.it.hasNext() }, next: function() { return this.ref["$" + this.it.next()] } } },
        __class__: K
    };
    var jd = function() {};
    d["haxe.io.Bytes"] = jd;
    jd.__name__ = !0;
    var gd = function() {};
    d["haxe.io.Eof"] = gd;
    gd.__name__ = !0;
    gd.prototype = { toString: function() { return "Eof" }, __class__: gd };
    var bd = function() {};
    d["haxe.rtti.Meta"] = bd;
    bd.__name__ = !0;
    bd.getType = function(a) { a = a.__meta__; return null == a || null == a.obj ? {} : a.obj };
    var Vc = function(a) {
        this.__x =
            a
    };
    d["haxe.xml._Fast.NodeAccess"] = Vc;
    Vc.__name__ = !0;
    Vc.prototype = { resolve: function(a) { var b = this.__x.elementsNamed(a).next(); if (null == b) throw (this.__x.nodeType == p.Document ? "Document" : this.__x.get_nodeName()) + " is missing element " + a; return new cc(b) }, __class__: Vc };
    var Wc = function(a) { this.__x = a };
    d["haxe.xml._Fast.AttribAccess"] = Wc;
    Wc.__name__ = !0;
    Wc.prototype = { __class__: Wc };
    var Xc = function(a) { this.__x = a };
    d["haxe.xml._Fast.HasAttribAccess"] = Xc;
    Xc.__name__ = !0;
    Xc.prototype = { __class__: Xc };
    var Yc = function(a) {
        this.__x =
            a
    };
    d["haxe.xml._Fast.HasNodeAccess"] = Yc;
    Yc.__name__ = !0;
    Yc.prototype = { __class__: Yc };
    var Zc = function(a) { this.__x = a };
    d["haxe.xml._Fast.NodeListAccess"] = Zc;
    Zc.__name__ = !0;
    Zc.prototype = { __class__: Zc };
    var cc = function(a) { if (a.nodeType != p.Document && a.nodeType != p.Element) throw "Invalid nodeType " + u.string(a.nodeType);
        this.x = a;
        this.node = new Vc(a);
        this.nodes = new Zc(a);
        this.att = new Wc(a);
        this.has = new Xc(a);
        this.hasNode = new Yc(a) };
    d["haxe.xml.Fast"] = cc;
    cc.__name__ = !0;
    cc.prototype = {
        get_name: function() {
            return this.x.nodeType ==
                p.Document ? "Document" : this.x.get_nodeName()
        },
        get_innerData: function() {
            var a = this.x.iterator();
            if (!a.hasNext()) throw this.get_name() + " does not have data";
            var b = a.next(),
                c = a.next();
            if (null != c) { if (b.nodeType == p.PCData && c.nodeType == p.CData && "" == O.trim(b.get_nodeValue()) && (b = a.next(), null == b || b.nodeType == p.PCData && "" == O.trim(b.get_nodeValue()) && null == a.next())) return c.get_nodeValue(); throw this.get_name() + " does not only have data"; }
            if (b.nodeType != p.PCData && b.nodeType != p.CData) throw this.get_name() +
                " does not have data";
            return b.get_nodeValue()
        },
        __class__: cc
    };
    var qa = function() {};
    d["haxe.xml.Parser"] = qa;
    qa.__name__ = !0;
    qa.parse = function(a) { var b = p.createDocument();
        qa.doParse(a, 0, b); return b };
    qa.doParse = function(a, b, c) {
        null == b && (b = 0);
        for (var e = null, d = 1, f = 1, g = null, h = 0, j = 0, k = 0, m = a.charCodeAt(b), l = new Cb; m == m;) {
            switch (d) {
                case 0:
                    switch (m) {
                        case 10:
                        case 13:
                        case 9:
                        case 32:
                            break;
                        default:
                            d = f; continue }
                    break;
                case 1:
                    switch (m) {
                        case 60:
                            d = 0;
                            f = 2; break;
                        default:
                            h = b;
                            d = 13; continue }
                    break;
                case 13:
                    60 == m ? (f = p.createPCData(l.b +
                        s.substr(a, h, b - h)), l = new Cb, c.addChild(f), j++, d = 0, f = 2) : 38 == m && (l.addSub(a, h, b - h), d = 18, f = 13, h = b + 1);
                    break;
                case 17:
                    93 == m && 93 == a.charCodeAt(b + 1) && 62 == a.charCodeAt(b + 2) && (d = p.createCData(s.substr(a, h, b - h)), c.addChild(d), j++, b += 2, d = 1);
                    break;
                case 2:
                    switch (m) {
                        case 33:
                            if (91 == a.charCodeAt(b + 1)) { b += 2; if ("CDATA[" != s.substr(a, b, 6).toUpperCase()) throw "Expected <![CDATA[";
                                b += 5;
                                d = 17 } else if (68 == a.charCodeAt(b + 1) || 100 == a.charCodeAt(b + 1)) {
                                if ("OCTYPE" != s.substr(a, b + 2, 6).toUpperCase()) throw "Expected <!DOCTYPE";
                                b += 8;
                                d = 16
                            } else { if (45 != a.charCodeAt(b + 1) || 45 != a.charCodeAt(b + 2)) throw "Expected <\!--";
                                b += 2;
                                d = 15 } h = b + 1;
                            break;
                        case 63:
                            d = 14;
                            h = b;
                            break;
                        case 47:
                            if (null == c) throw "Expected node name";
                            h = b + 1;
                            d = 0;
                            f = 10;
                            break;
                        default:
                            d = 3;
                            h = b;
                            continue
                    }
                    break;
                case 3:
                    if (!(97 <= m && 122 >= m || 65 <= m && 90 >= m || 48 <= m && 57 >= m || 58 == m || 46 == m || 95 == m || 45 == m)) { if (b == h) throw "Expected node name";
                        e = p.createElement(s.substr(a, h, b - h));
                        c.addChild(e);
                        d = 0;
                        f = 4; continue }
                    break;
                case 4:
                    switch (m) {
                        case 47:
                            d = 11;
                            j++; break;
                        case 62:
                            d = 9;
                            j++; break;
                        default:
                            d = 5;
                            h = b; continue }
                    break;
                case 5:
                    if (!(97 <= m && 122 >= m || 65 <= m && 90 >= m || 48 <= m && 57 >= m || 58 == m || 46 == m || 95 == m || 45 == m)) { if (h == b) throw "Expected attribute name";
                        g = s.substr(a, h, b - h); if (e.exists(g)) throw "Duplicate attribute";
                        d = 0;
                        f = 6; continue }
                    break;
                case 6:
                    switch (m) {
                        case 61:
                            d = 0;
                            f = 7; break;
                        default:
                            throw "Expected ="; }
                    break;
                case 7:
                    switch (m) {
                        case 34:
                        case 39:
                            d = 8;
                            h = b; break;
                        default:
                            throw 'Expected "'; }
                    break;
                case 8:
                    m == a.charCodeAt(h) && (f = s.substr(a, h + 1, b - h - 1), e.set(g, f), d = 0, f = 4);
                    break;
                case 9:
                    h = b = qa.doParse(a, b, e);
                    d = 1;
                    break;
                case 11:
                    switch (m) {
                        case 62:
                            d =
                                1;
                            break;
                        default:
                            throw "Expected >";
                    }
                    break;
                case 12:
                    switch (m) {
                        case 62:
                            return 0 == j && c.addChild(p.createPCData("")), b;
                        default:
                            throw "Expected >"; }
                case 10:
                    if (!(97 <= m && 122 >= m || 65 <= m && 90 >= m || 48 <= m && 57 >= m || 58 == m || 46 == m || 95 == m || 45 == m)) { if (h == b) throw "Expected node name"; if (s.substr(a, h, b - h) != c.get_nodeName()) throw "Expected </" + c.get_nodeName() + ">";
                        d = 0;
                        f = 12; continue }
                    break;
                case 15:
                    45 == m && 45 == a.charCodeAt(b + 1) && 62 == a.charCodeAt(b + 2) && (c.addChild(p.createComment(s.substr(a, h, b - h))), b += 2, d = 1);
                    break;
                case 16:
                    91 == m ?
                        k++ : 93 == m ? k-- : 62 == m && 0 == k && (c.addChild(p.createDocType(s.substr(a, h, b - h))), d = 1);
                    break;
                case 14:
                    63 == m && 62 == a.charCodeAt(b + 1) && (b++, d = s.substr(a, h + 1, b - h - 2), c.addChild(p.createProcessingInstruction(d)), d = 1);
                    break;
                case 18:
                    59 == m && (h = s.substr(a, h, b - h), 35 == h.charCodeAt(0) ? (h = 120 == h.charCodeAt(1) ? u.parseInt("0" + s.substr(h, 1, h.length - 1)) : u.parseInt(s.substr(h, 1, h.length - 1)), l.add(String.fromCharCode(h))) : qa.escapes.exists(h) ? l.add(qa.escapes.get(h)) : l.b += u.string("&" + h + ";"), h = b + 1, d = f)
            }
            m = O.fastCodeAt(a, ++b)
        }
        1 ==
            d && (h = b, d = 13);
        if (13 == d) return (b != h || 0 == j) && c.addChild(p.createPCData(l.b + s.substr(a, h, b - h))), b;
        throw "Unexpected end";
    };
    var B = function() {};
    d["js.Boot"] = B;
    B.__name__ = !0;
    B.getClass = function(a) { return a instanceof Array && null == a.__enum__ ? Array : a.__class__ };
    B.__string_rec = function(a, b) {
        if (null == a) return "null";
        if (5 <= b.length) return "<...>";
        var c = typeof a;
        if ("function" == c && (a.__name__ || a.__ename__)) c = "object";
        switch (c) {
            case "object":
                if (a instanceof Array) {
                    if (a.__enum__) {
                        if (2 == a.length) return a[0];
                        for (var c =
                                a[0] + "(", b = b + "\t", e = 2, d = a.length; e < d;) var f = e++,
                            c = 2 != f ? c + ("," + B.__string_rec(a[f], b)) : c + B.__string_rec(a[f], b);
                        return c + ")"
                    }
                    c = a.length;
                    e = "[";
                    b += "\t";
                    for (d = 0; d < c;) f = d++, e += (0 < f ? "," : "") + B.__string_rec(a[f], b);
                    return e + "]"
                }
                try { e = a.toString } catch (g) { return "???" }
                if (null != e && e != Object.toString && (c = a.toString(), "[object Object]" != c)) return c;
                c = null;
                e = "{\n";
                b += "\t";
                d = null != a.hasOwnProperty;
                for (c in a)
                    if (!d || a.hasOwnProperty(c)) "prototype" == c || "__class__" == c || "__super__" == c || "__interfaces__" == c || "__properties__" ==
                        c || (2 != e.length && (e += ", \n"), e += b + c + " : " + B.__string_rec(a[c], b));
                b = b.substring(1);
                return e + ("\n" + b + "}");
            case "function":
                return "<function>";
            case "string":
                return a;
            default:
                return "" + a
        }
    };
    B.__interfLoop = function(a, b) { if (null == a) return !1; if (a == b) return !0; var c = a.__interfaces__; if (null != c)
            for (var d = 0, f = c.length; d < f;) { var g = d++,
                    g = c[g]; if (g == b || B.__interfLoop(g, b)) return !0 }
        return B.__interfLoop(a.__super__, b) };
    B.__instanceof = function(a, b) {
        if (null == b) return !1;
        switch (b) {
            case nd:
                return (a | 0) === a;
            case kd:
                return "number" ==
                    typeof a;
            case ld:
                return "boolean" == typeof a;
            case String:
                return "string" == typeof a;
            case Array:
                return a instanceof Array && null == a.__enum__;
            case od:
                return !0;
            default:
                if (null != a) { if ("function" == typeof b && (a instanceof b || B.__interfLoop(B.getClass(a), b))) return !0 } else return !1;
                return b == pd && null != a.__name__ || b == qd && null != a.__ename__ ? !0 : a.__enum__ == b
        }
    };
    B.__cast = function(a, b) { if (B.__instanceof(a, b)) return a; throw "Cannot cast " + u.string(a) + " to " + u.string(b); };
    var dc, md = 0;
    Math.NaN = Number.NaN;
    Math.NEGATIVE_INFINITY =
        Number.NEGATIVE_INFINITY;
    Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    d.Math = Math;
    Math.isFinite = function(a) { return isFinite(a) };
    Math.isNaN = function(a) { return isNaN(a) };
    String.prototype.__class__ = d.String = String;
    String.__name__ = !0;
    d.Array = Array;
    Array.__name__ = !0;
    Date.prototype.__class__ = d.Date = Date;
    Date.__name__ = ["Date"];
    var nd = d.Int = { __name__: ["Int"] },
        od = d.Dynamic = { __name__: ["Dynamic"] },
        kd = d.Float = Number;
    kd.__name__ = ["Float"];
    var ld = d.Bool = Boolean;
    ld.__ename__ = ["Bool"];
    var pd = d.Class = { __name__: ["Class"] },
        qd = {};
    p.Element = "element";
    p.PCData = "pcdata";
    p.CData = "cdata";
    p.Comment = "comment";
    p.DocType = "doctype";
    p.ProcessingInstruction = "processingInstruction";
    p.Document = "document";
    ra.instance = new ra;
    E.DISPATCHING_SENTINEL = new Ya(null, null);
    r.root = new h;
    r.uncaughtError = new z;
    r.hidden = new P(!1);
    r.volume = new D(1);
    r._platform = ra.instance;
    r._calledInit = !1;
    X.__meta__ = {
        obj: {
            assets: [{
                gameover_scene: [{ bytes: 7309, md5: "e9384bd0d31519d337238106ebc01cee", name: "btnQuit - pressed.png" }, {
                    bytes: 8404,
                    md5: "3a9b0ef2e48c4850bddcde058c57e5e5",
                    name: "btnQuit.png"
                }, { bytes: 7661, md5: "db86e778b34c3e01aea96611ad28ce89", name: "btnRetry - pressed.png" }, { bytes: 8749, md5: "c2e78e6d6e5166680b9a2aafa2ca3a77", name: "btnRetry.png" }, { bytes: 102192, md5: "883650a0b58317dc2115ebd57e28e761", name: "gameoverBG.png" }],
                howto_scene: [{ bytes: 7056, md5: "c9c42d24d8f41e11ae63424980a2d2d3", name: "btnPlay - pressed.png" }, { bytes: 8072, md5: "aa2605da6f60ad734624b01da61b0fc1", name: "btnPlay.png" }, { bytes: 139035, md5: "43ac8ca6321ee4b97d1408ea8e6a63c6", name: "How to 01.png" }, {
                    bytes: 150401,
                    md5: "6e3fb2478cea9f5ca0ce440d0e4be343",
                    name: "How to 02.png"
                }, { bytes: 125592, md5: "779792483a54094314ec4342fb28d3e6", name: "How to 03.png" }, { bytes: 145241, md5: "5afed184249983a8c44339177b32440b", name: "How to 04.png" }, { bytes: 5057, md5: "77d355403099a7e1f4ea29cba342e541", name: "left_btn.png" }, { bytes: 5098, md5: "7e70c2177b7b979ce55d52740b5cf89f", name: "right_btn.png" }],
                audio: [{ bytes: 25548, md5: "94d6ca2987f81b562a22b43d516fe954", name: "BrokenVaseHit.mp3" }, { bytes: 16763, md5: "5712aec7f91d0c01454fdbd41d2d66e5", name: "BrokenVaseHit.ogg" },
                    { bytes: 9738, md5: "3e7b4581d7060cbd759886a32b4802ac", name: "ButtonSFX.mp3" }, { bytes: 23392, md5: "e88810eaa34864d92a88d8918ca5c8b0", name: "CatHit.mp3" }, { bytes: 15354, md5: "0379d1a6fd442c49ef170291bc674240", name: "CatHit.ogg" }, { bytes: 32224, md5: "9e4c891f10145eb69f1c9bbd4226b5ec", name: "CrashSFX.mp3" }, { bytes: 59385, md5: "eeb32c9eb23e9c0fb287e72166530b29", name: "GameOver(Highscore).mp3" }, { bytes: 44314, md5: "e7bcdef7e88a23b56b4ada9ea72fb6a4", name: "GameOver(Highscore).ogg" }, {
                        bytes: 22624,
                        md5: "fd544596367ac2461ed256ec6d0f4aa0",
                        name: "GrannyHit.mp3"
                    }, { bytes: 12831, md5: "24177238ac7e598f31917b97ff4d13a8", name: "GrannyHit.ogg" }, { bytes: 16632, md5: "7947b69a129def559df44c86d185ff76", name: "JumpingSFX.mp3" }, { bytes: 15331, md5: "542c4f219179878c6b76f5d437499bda", name: "PointsGet.mp3" }, { bytes: 23779, md5: "a0efd84eb5b04b0a6cb276b3e98626a7", name: "Shield.mp3" }, { bytes: 13468, md5: "3955a960671df9573da58b17e456373a", name: "Shield.ogg" }, { bytes: 21633, md5: "162817159c0c09ca4fa389b7cc02e829", name: "SoilAndLeaves.mp3" }, {
                        bytes: 13973,
                        md5: "b4c632a8b966dd073160b53edf14364d",
                        name: "SoilAndLeaves.ogg"
                    }, { bytes: 17529, md5: "84e8885933a6295d55567e29f007011c", name: "SpeedUp.mp3" }, { bytes: 12215, md5: "90d50348f3aa5ab6636f207fb49d1116", name: "SpeedUp.ogg" }, { bytes: 14315, md5: "1b3c38e50911f887f6a89c38903551fa", name: "TrashbinHit.mp3" }, { bytes: 9756, md5: "ad444a1379783ab4d5dd3dcd879e6a61", name: "TrashbinHit.ogg" }
                ],
                game_scene: [{ bytes: 30884, md5: "cd11a899ab53cf578644ed825162e264", name: "animations/hit/atlas0.png" }, { bytes: 17612, md5: "050c89083e4a39a7313da69278286972", name: "animations/hit/library.json" },
                    { bytes: 37390, md5: "26a0b1324c714c07f3bd857aa82a8dc3", name: "animations/jump/atlas0.png" }, { bytes: 30584, md5: "e2bca319aef96c788ee9ea2cff35542d", name: "animations/jump/library.json" }, { bytes: 21051, md5: "c72340cbc5a9accad13436f4f770a6f8", name: "animations/on_bonus_round/atlas0.png" }, { bytes: 10626, md5: "46e3cb094784dd04e47e939b4b6c071e", name: "animations/on_bonus_round/library.json" }, { bytes: 20417, md5: "269c7687d46a80bba228856f8de636e8", name: "animations/run/atlas0.png" }, {
                        bytes: 10229,
                        md5: "8a8345492e64b93275f36602d8e77092",
                        name: "animations/run/library.json"
                    }, { bytes: 22824, md5: "51b78e73d21f92b45b58a04364a99bcf", name: "animations/shield/1.png" }, { bytes: 35950, md5: "7e15c1fb8ee4a256b4710eb77ae0c765", name: "animations/shield/2.png" }, { bytes: 3044, md5: "2f6797b010b324e7097d098014d5f1fd", name: "backgrounds/bacground-wall.png" }, { bytes: 23117, md5: "50dcca00f34a747e14f075a775706172", name: "backgrounds/background-1.png" }, { bytes: 17449, md5: "d4478750b97e2a6119953f2b2805397c", name: "backgrounds/background-2.png" }, {
                        bytes: 36104,
                        md5: "8c945a885619457d12cfd80503fa0687",
                        name: "backgrounds/background-3.png"
                    }, { bytes: 46518, md5: "ff273e8e5060eb367ef8cdd48f0cf3c5", name: "backgrounds/background-4.png" }, { bytes: 3044, md5: "2f6797b010b324e7097d098014d5f1fd", name: "backgrounds/background-wall.png" }, { bytes: 141024, md5: "e4fd0f0a08e683ad1b8b6e785c4ca8b6", name: "backgrounds/bonus stage/speed01.png" }, { bytes: 141128, md5: "36dd3ffc676cf63c9839821bafd8f89b", name: "backgrounds/bonus stage/speed02.png" }, { bytes: 141128, md5: "2fcfaf0f85642fd2ff372645d651daf7", name: "backgrounds/bonus stage/speed03.png" },
                    { bytes: 141128, md5: "36dd3ffc676cf63c9839821bafd8f89b", name: "backgrounds/bonus stage/speed04.png" }, { bytes: 141024, md5: "e4fd0f0a08e683ad1b8b6e785c4ca8b6", name: "backgrounds/bonus stage/speed05.png" }, { bytes: 2671, md5: "8013171e4d113be89c40efa784095408", name: "backgrounds/farground.png" }, { bytes: 13465, md5: "0101ee752f247526876dd64c0f214f8d", name: "backgrounds/foreground.png" }, { bytes: 20608, md5: "78151a8395d12234d33279b20ab536b4", name: "backgrounds/foregroundFence.png" }, {
                        bytes: 48589,
                        md5: "c814b2ce8c3e09807ebe333bb5448e11",
                        name: "backgrounds/middleground-1.png"
                    }, { bytes: 32400, md5: "1ef6d2c9925e7a3ed35c94c2e25e7893", name: "backgrounds/middleground-2.png" }, { bytes: 20427, md5: "fe6248a08aebe12d833410e183998d17", name: "backgrounds/middleground-3.png" }, { bytes: 46642, md5: "48d4c6be58085d8634beff59bdf8915e", name: "backgrounds/middleground-4.png" }, { bytes: 6099, md5: "bdae71cc844b53d8eab045e29ce0b2d4", name: "obstacles/bin.png" }, { bytes: 8475, md5: "d0341e7c7cbd9857004f09dafba8f54b", name: "obstacles/cat.png" }, {
                        bytes: 15949,
                        md5: "81021291adab5a89450a5f5145555033",
                        name: "obstacles/granny.png"
                    }, { bytes: 10812, md5: "d5a73d466e4b1f38c1456d159329d158", name: "obstacles/soil.png" }, { bytes: 8597, md5: "0e80d585f73172cbf749374ff7846858", name: "obstacles/vase.png" }, { bytes: 3243, md5: "bad4d9da0f2985671c774d23c52f0c30", name: "power_ups/bonus01.png" }, { bytes: 7792, md5: "479bd7c2b5c67d136c67009a32baba34", name: "power_ups/bonus02.png" }, { bytes: 5271, md5: "a30638551396c399597d463da985cbaa", name: "power_ups/power-up.png" }, { bytes: 3385, md5: "3d070e2e2fe26d9f3c91af26a1724caa", name: "shadow.png" }, {
                        bytes: 4838,
                        md5: "4492dc69cae51e6f7ebd2df15fe7e924",
                        name: "ui/1 pt.png"
                    }, { bytes: 5327, md5: "618496f1662cb208725e894930712274", name: "ui/10 pts.png" }, { bytes: 5034, md5: "1a248b5bbeb707131314065e259d64f9", name: "ui/uiMeterBot.png" }, { bytes: 2784, md5: "c67b69dd926ca6aa4629ed7dbc577038", name: "ui/uiMeterMid.png" }, { bytes: 6367, md5: "239501348be045ec86c2075e2c77fb58", name: "ui/uiMeterTop.png" }, { bytes: 9731, md5: "0b198f17740ce3891639d3ba70fa1e72", name: "ui/uiScore.png" }, { bytes: 13280, md5: "6a81435657700f81ca3a971e32a8f1a6", name: "ui/uiWarning.png" }
                ],
                preloader: [{ bytes: 11119, md5: "381c2218f7bdbb5d5aba64c511ad9a4f", name: "botLoading.png" }, { bytes: 25911, md5: "65b19a926defbe50e3382b4038d09a19", name: "fonts/arial/arial_black.fnt" }, { bytes: 22447, md5: "bf87f122b4003e482b86aedee2e9b275", name: "fonts/arial/arial_black_0.png" }, { bytes: 25911, md5: "1535520b9bb1728a12a186c787cc8f08", name: "fonts/arial/arial_white.fnt" }, { bytes: 25162, md5: "21aebe8973955d1bd6601483b3a99672", name: "fonts/arial/arial_white_0.png" }, { bytes: 13190, md5: "edab5a02c4ac5006598f2094bf6ef0d7", name: "fonts/shag_lounge/shag_lounge_black.fnt" },
                    { bytes: 20765, md5: "654b2409929361b7f874c9ce43f5e55e", name: "fonts/shag_lounge/shag_lounge_black_0.png" }, { bytes: 13191, md5: "743bf4ae9101712cfacb80274744d2d2", name: "fonts/shag_lounge/shag_lounge_normal.fnt" }, { bytes: 20765, md5: "654b2409929361b7f874c9ce43f5e55e", name: "fonts/shag_lounge/shag_lounge_normal_0.png" }, { bytes: 14788, md5: "9a9bb244b87ff6a3717c182ca1bdae41", name: "fonts/shag_lounge/shag_lounge_outline.fnt" }, { bytes: 51631, md5: "1af5f6dbeb7f29954eb5b58b3964bace", name: "fonts/shag_lounge/shag_lounge_outline_0.png" },
                    { bytes: 13190, md5: "896cfe3a0ed02ec90e49fd2f5a3e1646", name: "fonts/shag_lounge/shag_lounge_white.fnt" }, { bytes: 5439, md5: "cd29d811df48dc8b6d8d5b2e91c42ad3", name: "fonts/shag_lounge/shag_lounge_white_0.png" }, { bytes: 165723, md5: "f92dc257b0f838222033f0ea9248f16e", name: "loadingBG.png" }, { bytes: 4411, md5: "4732d5504a6a7293effb6a50090ae7bd", name: "midLoading.png" }, { bytes: 18355, md5: "f89b2d628bd4dfb1c127cba3a43951a3", name: "topLoading.png" }
                ],
                title_scene: [{ bytes: 8959, md5: "ec5d2f5252312cc6c9ac338efd52c962", name: "btnHtp - pressed.png" },
                    { bytes: 9998, md5: "ccbaf57e20e42cce5d9fe481e81ec677", name: "btnHtp.png" }, { bytes: 7056, md5: "c9c42d24d8f41e11ae63424980a2d2d3", name: "btnPlay - pressed.png" }, { bytes: 8072, md5: "aa2605da6f60ad734624b01da61b0fc1", name: "btnPlay.png" }, { bytes: 223324, md5: "fe02d6a2c15ff372fb19bf3bdfb2b965", name: "Title Screen BG.png" }
                ],
                game_common: [{ bytes: 2430, md5: "fd5698204164f9b5c2764041fd9e7c91", name: "numbers/big/0.png" }, { bytes: 1669, md5: "85929774c0fa36520fa700c06620cf1f", name: "numbers/big/1.png" }, {
                    bytes: 2302,
                    md5: "033f8fe7353a94a4eba29e360f18eaca",
                    name: "numbers/big/2.png"
                }, { bytes: 2297, md5: "5c486445142e46930f28dcf07f686e7d", name: "numbers/big/3.png" }, { bytes: 2100, md5: "5ca7537af1c4021863a20220fc6b1b0c", name: "numbers/big/4.png" }, { bytes: 2123, md5: "032d595616a09d85598e8a4b8c9ea259", name: "numbers/big/5.png" }, { bytes: 2552, md5: "e38b8591466dee9da24816e7d0993cc2", name: "numbers/big/6.png" }, { bytes: 1818, md5: "1c19b0aeb9ee7910f39a71a83b83b598", name: "numbers/big/7.png" }, { bytes: 2665, md5: "87bd58653b76cd1d5e3978e2f27afc68", name: "numbers/big/8.png" }, {
                    bytes: 2521,
                    md5: "0f2b083c722ae0a6474737c7211bebff",
                    name: "numbers/big/9.png"
                }, { bytes: 1559, md5: "633bbbc34acbeb8c984a29f8670400cb", name: "numbers/small/0.png" }, { bytes: 1298, md5: "8d790681e414da249ed60f946b267cdf", name: "numbers/small/1.png" }, { bytes: 1517, md5: "39a1886764fb5269674f2fd4f22c4fb2", name: "numbers/small/2.png" }, { bytes: 1461, md5: "376723c9ab51bc0510454011ce9b3d49", name: "numbers/small/3.png" }, { bytes: 1450, md5: "23bb31d0c2be986ca7f6ec3f6304ff18", name: "numbers/small/4.png" }, { bytes: 1454, md5: "3f4f5d647d20d3334baef0b846ebd7b4", name: "numbers/small/5.png" }, {
                    bytes: 1579,
                    md5: "35fc1ca4516b34e7426de4bcdfc0a3bc",
                    name: "numbers/small/6.png"
                }, { bytes: 1345, md5: "a87d483791da09bb78474dd7cec94860", name: "numbers/small/7.png" }, { bytes: 1621, md5: "1142a4f582f7030088754ad6b218a2e9", name: "numbers/small/8.png" }, { bytes: 1558, md5: "c1f6443f6109466887996291d23f0fe7", name: "numbers/small/9.png" }],
                config: [{ bytes: 752, md5: "6235d7282c06653f0a21f629ee6b4f41", name: "stage_1.xml" }, { bytes: 752, md5: "e5587257fc3f4fd7bba2a19abac53424", name: "stage_2.xml" }, {
                    bytes: 752,
                    md5: "9055da02f23f4d1c4c46464814acc597",
                    name: "stage_3.xml"
                }, { bytes: 753, md5: "779afe39c4a26e30d1572c0c34afce3c", name: "stage_4.xml" }, { bytes: 753, md5: "f68cdb7189bdffd334885c01d5c3631b", name: "stage_5.xml" }]
            }]
        }
    };
    X._supportsCrossOrigin = function() { var a;
        a = 0 <= window.navigator.userAgent.indexOf("Linux; U; Android") ? !1 : null != (new XMLHttpRequest).withCredentials;
        a || null; return a }();
    g._scratchPoint = new Ia;
    Za.NEWLINE = new Ib(10);
    U._sharedEvent = new zc;
    L._sharedEvent = new Ac;
    Xa.CANVAS_TEXTURES = (new pa("(iPhone|iPod|iPad)", "")).match(window.navigator.userAgent);
    w._mediaRefCount = 0;
    w._detectBlobSupport = !0;
    t.VENDOR_PREFIXES = ["webkit", "moz", "ms", "o", "khtml"];
    t.SHOULD_HIDE_MOBILE_BROWSER = window.top == window && (new pa("Mobile(/.*)? Safari", "")).match(window.navigator.userAgent);
    y._detectSupport = !0;
    C.pauseSignal = new J;
    C.resumeSignal = new J;
    C.isPaused = !1;
    C.baseUrl = "";
    na.MAX_LEVEL = 5;
    na.DELAY_BETWEEN_STAGE = 2;
    qa.escapes = function() { var a = new K;
        a.set("lt", "<");
        a.set("gt", ">");
        a.set("amp", "&");
        a.set("quot", '"');
        a.set("apos", "'");
        a.set("nbsp", String.fromCharCode(160)); return a }(this);
    G.main()
})();