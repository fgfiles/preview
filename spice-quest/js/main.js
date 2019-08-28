function SHA1(msg) {
    function rotate_left(n, s) {
        var t4 = n << s | n >>> 32 - s;
        return t4
    }

    function cvt_hex(val) {
        var i, v, str = "";
        for (i = 7; i >= 0; i--) v = val >>> 4 * i & 15, str += v.toString(16);
        return str
    }

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        for (var utftext = "", n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            128 > c ? utftext += String.fromCharCode(c) : c > 127 && 2048 > c ? (utftext += String.fromCharCode(c >> 6 | 192), utftext += String.fromCharCode(63 & c | 128)) : (utftext += String.fromCharCode(c >> 12 | 224), utftext += String.fromCharCode(c >> 6 & 63 | 128), utftext += String.fromCharCode(63 & c | 128))
        }
        return utftext
    }
    var blockstart, i, j, A, B, C, D, E, temp, W = new Array(80),
        H0 = 1732584193,
        H1 = 4023233417,
        H2 = 2562383102,
        H3 = 271733878,
        H4 = 3285377520;
    msg = Utf8Encode(msg);
    var msg_len = msg.length,
        word_array = new Array;
    for (i = 0; msg_len - 3 > i; i += 4) j = msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 | msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3), word_array.push(j);
    switch (msg_len % 4) {
        case 0:
            i = 2147483648;
            break;
        case 1:
            i = msg.charCodeAt(msg_len - 1) << 24 | 8388608;
            break;
        case 2:
            i = msg.charCodeAt(msg_len - 2) << 24 | msg.charCodeAt(msg_len - 1) << 16 | 32768;
            break;
        case 3:
            i = msg.charCodeAt(msg_len - 3) << 24 | msg.charCodeAt(msg_len - 2) << 16 | msg.charCodeAt(msg_len - 1) << 8 | 128
    }
    for (word_array.push(i); word_array.length % 16 != 14;) word_array.push(0);
    for (word_array.push(msg_len >>> 29), word_array.push(msg_len << 3 & 4294967295), blockstart = 0; blockstart < word_array.length; blockstart += 16) {
        for (i = 0; 16 > i; i++) W[i] = word_array[blockstart + i];
        for (i = 16; 79 >= i; i++) W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
        for (A = H0, B = H1, C = H2, D = H3, E = H4, i = 0; 19 >= i; i++) temp = rotate_left(A, 5) + (B & C | ~B & D) + E + W[i] + 1518500249 & 4294967295, E = D, D = C, C = rotate_left(B, 30), B = A, A = temp;
        for (i = 20; 39 >= i; i++) temp = rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 1859775393 & 4294967295, E = D, D = C, C = rotate_left(B, 30), B = A, A = temp;
        for (i = 40; 59 >= i; i++) temp = rotate_left(A, 5) + (B & C | B & D | C & D) + E + W[i] + 2400959708 & 4294967295, E = D, D = C, C = rotate_left(B, 30), B = A, A = temp;
        for (i = 60; 79 >= i; i++) temp = rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 3395469782 & 4294967295, E = D, D = C, C = rotate_left(B, 30), B = A, A = temp;
        H0 = H0 + A & 4294967295, H1 = H1 + B & 4294967295, H2 = H2 + C & 4294967295, H3 = H3 + D & 4294967295, H4 = H4 + E & 4294967295
    }
    var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
    return temp.toLowerCase()
}

function hasCanvasSupport() {
    var elem = document.createElement("canvas");
    return !(!elem.getContext || !elem.getContext("2d"))
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}
if ((window._gsQueue || (window._gsQueue = [])).push(function() {
        window._gsDefine("easing.Back", ["easing.Ease"], function(t) {
            var e, i, s, r = window.GreenSockGlobals || window,
                n = r.com.greensock,
                a = 2 * Math.PI,
                o = Math.PI / 2,
                h = n._class,
                l = function(e, i) {
                    var s = h("easing." + e, function() {}, !0),
                        r = s.prototype = new t;
                    return r.constructor = s, r.getRatio = i, s
                },
                _ = t.register || function() {},
                u = function(t, e, i, s) {
                    var r = h("easing." + t, {
                        easeOut: new e,
                        easeIn: new i,
                        easeInOut: new s
                    }, !0);
                    return _(r, t), r
                },
                c = function(t, e, i) {
                    this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                },
                f = function(e, i) {
                    var s = h("easing." + e, function(t) {
                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        r = s.prototype = new t;
                    return r.constructor = s, r.getRatio = i, r.config = function(t) {
                        return new s(t)
                    }, s
                },
                p = u("Back", f("BackOut", function(t) {
                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                }), f("BackIn", function(t) {
                    return t * t * ((this._p1 + 1) * t - this._p1)
                }), f("BackInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                })),
                m = h("easing.SlowMo", function(t, e, i) {
                    e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                }, !0),
                d = m.prototype = new t;
            return d.constructor = m, d.getRatio = function(t) {
                var e = t + (.5 - t) * this._p;
                return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
                return new m(t, e, i)
            }, e = h("easing.SteppedEase", function(t) {
                t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
            }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
                return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
            }, d.config = e.config = function(t) {
                return new e(t)
            }, i = h("easing.RoughEase", function(e) {
                e = e || {};
                for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), f = u, p = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = p ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), p ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                    x: i,
                    y: s
                };
                for (l.sort(function(t, e) {
                        return t.x - e.x
                    }), o = new c(1, 1, null), f = u; --f > -1;) a = l[f], o = new c(a.x, a.y, o);
                this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
            }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev
                } else
                    for (; e.prev && e.t >= t;) e = e.prev;
                return this._prev = e, e.v + (t - e.t) / e.gap * e.c
            }, d.config = function(t) {
                return new i(t)
            }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), l("BounceIn", function(t) {
                return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), l("BounceInOut", function(t) {
                var e = .5 > t;
                return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), u("Circ", l("CircOut", function(t) {
                return Math.sqrt(1 - (t -= 1) * t)
            }), l("CircIn", function(t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), l("CircInOut", function(t) {
                return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), s = function(e, i, s) {
                var r = h("easing." + e, function(t, e) {
                        this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
                    }, !0),
                    n = r.prototype = new t;
                return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                    return new r(t, e)
                }, r
            }, u("Elastic", s("ElasticOut", function(t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
            }, .3), s("ElasticIn", function(t) {
                return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
            }, .3), s("ElasticInOut", function(t) {
                return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
            }, .45)), u("Expo", l("ExpoOut", function(t) {
                return 1 - Math.pow(2, -10 * t)
            }), l("ExpoIn", function(t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }), l("ExpoInOut", function(t) {
                return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), u("Sine", l("SineOut", function(t) {
                return Math.sin(t * o)
            }), l("SineIn", function(t) {
                return -Math.cos(t * o) + 1
            }), l("SineInOut", function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            })), h("easing.EaseLookup", {
                find: function(e) {
                    return t.map[e]
                }
            }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), p
        }, !0)
    }), window._gsDefine && window._gsQueue.pop()(), define("libs/EasePack.min", function() {}), function(t) {
        var e, i, s, n, r, a = t.GreenSockGlobals || t,
            o = function(t) {
                var e, i = t.split("."),
                    s = a;
                for (e = 0; i.length > e; e++) s[i[e]] = s = s[i[e]] || {};
                return s
            },
            l = o("com.greensock"),
            h = [].slice,
            _ = function() {},
            u = {},
            m = function(e, i, s, n) {
                this.sc = u[e] ? u[e].sc : [], u[e] = this, this.gsClass = null, this.func = s;
                var r = [];
                this.check = function(l) {
                    for (var h, _, f, p, c = i.length, d = c; --c > -1;)(h = u[i[c]] || new m(i[c], [])).gsClass ? (r[c] = h.gsClass, d--) : l && h.sc.push(this);
                    if (0 === d && s)
                        for (_ = ("com.greensock." + e).split("."), f = _.pop(), p = o(_.join("."))[f] = this.gsClass = s.apply(s, r), n && (a[f] = p, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + e.split(".").join("/"), [], function() {
                                return p
                            }) : "undefined" != typeof module && module.exports && (module.exports = p)), c = 0; this.sc.length > c; c++) this.sc[c].check()
                }, this.check(!0)
            },
            f = t._gsDefine = function(t, e, i, s) {
                return new m(t, e, i, s)
            },
            p = l._class = function(t, e, i) {
                return e = e || function() {}, f(t, [], function() {
                    return e
                }, i), e
            };
        f.globals = a;
        var c = [0, 0, 1, 1],
            d = [],
            v = p("easing.Ease", function(t, e, i, s) {
                this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? c.concat(e) : c
            }, !0),
            g = v.map = {},
            T = v.register = function(t, e, i, s) {
                for (var n, r, a, o, h = e.split(","), _ = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                    for (r = h[_], n = s ? p("easing." + r, null, !0) : l.easing[r] || {}, a = u.length; --a > -1;) o = u[a], g[r + "." + o] = g[o + r] = n[o] = t.getRatio ? t : t[o] || new t
            };
        for (s = v.prototype, s._calcEnd = !1, s.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
            }, e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], i = e.length; --i > -1;) s = e[i] + ",Power" + i, T(new v(null, null, 1, i), s, "easeOut", !0), T(new v(null, null, 2, i), s, "easeIn" + (0 === i ? ",easeNone" : "")), T(new v(null, null, 3, i), s, "easeInOut");
        g.linear = l.easing.Linear.easeIn, g.swing = l.easing.Quad.easeInOut;
        var w = p("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        s = w.prototype, s.addEventListener = function(t, e, i, s, a) {
            a = a || 0;
            var o, l, h = this._listeners[t],
                _ = 0;
            for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) o = h[l], o.c === e && o.s === i ? h.splice(l, 1) : 0 === _ && a > o.pr && (_ = l + 1);
            h.splice(_, 0, {
                c: e,
                s: i,
                up: s,
                pr: a
            }), this !== n || r || n.wake()
        }, s.removeEventListener = function(t, e) {
            var i, s = this._listeners[t];
            if (s)
                for (i = s.length; --i > -1;)
                    if (s[i].c === e) return void s.splice(i, 1)
        }, s.dispatchEvent = function(t) {
            var e, i, s, n = this._listeners[t];
            if (n)
                for (e = n.length, i = this._eventTarget; --e > -1;) s = n[e], s.up ? s.c.call(s.s || i, {
                    type: t,
                    target: i
                }) : s.c.call(s.s || i)
        };
        var P = t.requestAnimationFrame,
            y = t.cancelAnimationFrame,
            k = Date.now || function() {
                return (new Date).getTime()
            },
            b = k();
        for (e = ["ms", "moz", "webkit", "o"], i = e.length; --i > -1 && !P;) P = t[e[i] + "RequestAnimationFrame"], y = t[e[i] + "CancelAnimationFrame"] || t[e[i] + "CancelRequestAnimationFrame"];
        p("Ticker", function(t, e) {
            var i, s, a, o, l, h = this,
                u = k(),
                m = e !== !1 && P,
                f = function(t) {
                    b = k(), h.time = (b - u) / 1e3;
                    var e, n = h.time - l;
                    (!i || n > 0 || t === !0) && (h.frame++, l += n + (n >= o ? .004 : o - n), e = !0), t !== !0 && (a = s(f)), e && h.dispatchEvent("tick")
                };
            w.call(h), this.time = this.frame = 0, this.tick = function() {
                f(!0)
            }, this.sleep = function() {
                null != a && (m && y ? y(a) : clearTimeout(a), s = _, a = null, h === n && (r = !1))
            }, this.wake = function() {
                null !== a && h.sleep(), s = 0 === i ? _ : m && P ? P : function(t) {
                    return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                }, h === n && (r = !0), f(2)
            }, this.fps = function(t) {
                return arguments.length ? (i = t, o = 1 / (i || 60), l = this.time + o, void h.wake()) : i
            }, this.useRAF = function(t) {
                return arguments.length ? (h.sleep(), m = t, void h.fps(i)) : m
            }, h.fps(t), setTimeout(function() {
                m && (!a || 5 > h.frame) && h.useRAF(!1)
            }, 1500)
        }), s = l.Ticker.prototype = new l.events.EventDispatcher, s.constructor = l.Ticker;
        var A = p("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, j) {
                r || n.wake();
                var i = this.vars.useFrames ? F : j;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        n = A.ticker = new l.Ticker, s = A.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
        var S = function() {
            k() - b > 2e3 && n.wake(), setTimeout(S, 2e3)
        };
        S(), s.play = function(t, e) {
            return arguments.length && this.seek(t, e), this.reversed(!1).paused(!1)
        }, s.pause = function(t, e) {
            return arguments.length && this.seek(t, e), this.paused(!0)
        }, s.resume = function(t, e) {
            return arguments.length && this.seek(t, e), this.paused(!1)
        }, s.seek = function(t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, s.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, s.reverse = function(t, e) {
            return arguments.length && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, s.render = function() {}, s.invalidate = function() {
            return this
        }, s._enabled = function(t, e) {
            return r || n.wake(), this._gc = !t, this._active = t && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration, e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, s._kill = function() {
            return this._enabled(!1, !1)
        }, s.kill = function(t, e) {
            return this._kill(t, e), this
        }, s._uncache = function(t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, s._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        }, s.eventCallback = function(t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var n = this.vars;
                if (1 === arguments.length) return n[t];
                null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = i instanceof Array && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, s.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, s.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, s.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, s.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, s.totalTime = function(t, e, i) {
            if (r || n.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration,
                        a = this._timeline;
                    if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : a._time) - (this._reversed ? s - t : t) / this._timeScale, a._dirty || this._uncache(!1), a._timeline)
                        for (; a._timeline;) a._timeline._time !== (a._startTime + a._totalTime) / a._timeScale && a.totalTime(a._totalTime, !0), a = a._timeline
                }
                this._gc && this._enabled(!0, !1), this._totalTime !== t && this.render(t, e, !1)
            }
            return this
        }, s.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, s.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || 1e-6, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, s.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._totalTime, !0)), this) : this._reversed
        }, s.paused = function(t) {
            if (!arguments.length) return this._paused;
            if (t != this._paused && this._timeline) {
                r || t || n.wake();
                var e = this._timeline,
                    i = e.rawTime(),
                    s = i - this._pauseTime;
                !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = !t && this._totalTime > 0 && this._totalTime < this._totalDuration, t || 0 === s || 0 === this._duration || this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !t && this._enabled(!0, !1), this
        };
        var x = p("core.SimpleTimeline", function(t) {
            A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        s = x.prototype = new A, s.constructor = x, s.kill()._gc = !1, s._first = s._last = null, s._sortChildren = !1, s.add = s.insert = function(t, e) {
            var i, s;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                for (s = t._startTime; i && i._startTime > s;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
        }, s._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)), this
        }, s.render = function(t, e, i) {
            var s, n = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; n;) s = n._next, (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s
        }, s.rawTime = function() {
            return r || n.wake(), this._totalTime
        };
        var C = p("TweenLite", function(e, i, s) {
                if (A.call(this, i, s), this.render = C.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : C.selector(e) || e;
                var n, r, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? L[C.defaultOverwrite] : "number" == typeof l ? l >> 0 : L[l], (o || e instanceof Array) && "number" != typeof e[0])
                    for (this._targets = a = h.call(e, 0), this._propLookup = [], this._siblings = [], n = 0; a.length > n; n++) r = a[n], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(n--, 1), this._targets = a = a.concat(h.call(r, 0))) : (this._siblings[n] = G(r, this, !1), 1 === l && this._siblings[n].length > 1 && Q(r, this, null, 1, this._siblings[n])) : (r = a[n--] = C.selector(r), "string" == typeof r && a.splice(n + 1, 1)) : a.splice(n--, 1);
                else this._propLookup = {}, this._siblings = G(e, this, !1), 1 === l && this._siblings.length > 1 && Q(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
            }, !0),
            R = function(e) {
                return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            },
            D = function(t, e) {
                var i, s = {};
                for (i in t) U[i] || i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!I[i] || I[i] && I[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                t.css = s
            };
        s = C.prototype = new A, s.constructor = C, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = !1, C.version = "1.10.2", C.defaultEase = s._ease = new v(null, null, 1, 1), C.defaultOverwrite = "auto", C.ticker = n, C.autoSleep = !0, C.selector = t.$ || t.jQuery || function(e) {
            return t.$ ? (C.selector = t.$, t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
        };
        var E = C._internals = {},
            I = C._plugins = {},
            O = C._tweenLookup = {},
            N = 0,
            U = E.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1
            },
            L = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            F = A._rootFramesTimeline = new x,
            j = A._rootTimeline = new x;
        j._startTime = n.time, F._startTime = n.frame, j._active = F._active = !0, A._updateRoot = function() {
            if (j.render((n.time - j._startTime) * j._timeScale, !1, !1), F.render((n.frame - F._startTime) * F._timeScale, !1, !1), !(n.frame % 120)) {
                var t, e, i;
                for (i in O) {
                    for (e = O[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete O[i]
                }
                if (i = j._first, (!i || i._paused) && C.autoSleep && !F._first && 1 === n._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || n.sleep()
                }
            }
        }, n.addEventListener("tick", A._updateRoot);
        var G = function(t, e, i) {
                var s, n, r = t._gsTweenID;
                if (O[r || (t._gsTweenID = r = "t" + N++)] || (O[r] = {
                        target: t,
                        tweens: []
                    }), e && (s = O[r].tweens, s[n = s.length] = e, i))
                    for (; --n > -1;) s[n] === e && s.splice(n, 1);
                return O[r].tweens
            },
            Q = function(t, e, i, s, n) {
                var r, a, o, l;
                if (1 === s || s >= 4) {
                    for (l = n.length, r = 0; l > r; r++)
                        if ((o = n[r]) !== e) o._gc || o._enabled(!1, !1) && (a = !0);
                        else if (5 === s) break;
                    return a
                }
                var h, _ = e._startTime + 1e-10,
                    u = [],
                    m = 0,
                    f = 0 === e._duration;
                for (r = n.length; --r > -1;)(o = n[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || B(e, 0, f), 0 === B(o, h, f) && (u[m++] = o)) : _ >= o._startTime && o._startTime + o.totalDuration() / o._timeScale + 1e-10 > _ && ((f || !o._initted) && 2e-10 >= _ - o._startTime || (u[m++] = o)));
                for (r = m; --r > -1;) o = u[r], 2 === s && o._kill(i, t) && (a = !0), (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
                return a
            },
            B = function(t, e, i) {
                for (var s = t._timeline, n = s._timeScale, r = t._startTime, a = 1e-10; s._timeline;) {
                    if (r += s._startTime, n *= s._timeScale, s._paused) return -100;
                    s = s._timeline
                }
                return r /= n, r > e ? r - e : i && r === e || !t._initted && 2 * a > r - e ? a : (r += t.totalDuration() / t._timeScale / n) > e + a ? 0 : r - e - a
            };
        s._init = function() {
            var t, e, i, s, n = this.vars,
                r = this._overwrittenProps,
                a = this._duration,
                o = n.immediateRender,
                l = n.ease;
            if (n.startAt) {
                if (this._startAt && this._startAt.render(-1, !0), n.startAt.overwrite = 0, n.startAt.immediateRender = !0, this._startAt = C.to(this.target, 0, n.startAt), o)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== a) return
            } else if (n.runBackwards && n.immediateRender && 0 !== a)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                else if (0 === this._time) {
                i = {};
                for (s in n) U[s] && "autoCSS" !== s || (i[s] = n[s]);
                return i.overwrite = 0, void(this._startAt = C.to(this.target, 0, i))
            }
            if (this._ease = l ? l instanceof v ? n.easeParams instanceof Array ? l.config.apply(l, n.easeParams) : l : "function" == typeof l ? new v(l, n.easeParams) : g[l] || C.defaultEase : C.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], r ? r[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, r);
            if (e && C._onPluginEvent("_onInitAllProps", this), r && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = n.onUpdate, this._initted = !0
        }, s._initProps = function(e, i, s, n) {
            var r, a, o, l, h, _;
            if (null == e) return !1;
            this.vars.css || e.style && e !== t && e.nodeType && I.css && this.vars.autoCSS !== !1 && D(this.vars, e);
            for (r in this.vars) {
                if (_ = this.vars[r], U[r]) _ instanceof Array && -1 !== _.join("").indexOf("{self}") && (this.vars[r] = _ = this._swapSelfInParams(_, this));
                else if (I[r] && (l = new I[r])._onInitTween(e, this.vars[r], this)) {
                    for (this._firstPT = h = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: r,
                            pg: !0,
                            pr: l._priority
                        }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[r] = h = {
                    _next: this._firstPT,
                    t: e,
                    p: r,
                    f: "function" == typeof e[r],
                    n: r,
                    pg: !1,
                    pr: 0
                }, h.s = h.f ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), h.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - h.s || 0;
                h && h._next && (h._next._prev = h)
            }
            return n && this._kill(n, e) ? this._initProps(e, i, s, n) : this._overwrite > 1 && this._firstPT && s.length > 1 && Q(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, n)) : o
        }, s.render = function(t, e, i) {
            var s, n, r, a = this._time;
            if (t >= this._duration) this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, n = "onComplete"), 0 === this._duration && ((0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && (i = !0, this._rawPrevTime > 0 && (n = "onReverseComplete", e && (t = -1))), this._rawPrevTime = t);
            else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === this._duration && this._rawPrevTime > 0) && (n = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = t)) : this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var o = t / this._duration,
                    l = this._easeType,
                    h = this._easePower;
                (1 === l || 3 === l && o >= .5) && (o = 1 - o), 3 === l && (o *= 2), 1 === h ? o *= o : 2 === h ? o *= o * o : 3 === h ? o *= o * o * o : 4 === h && (o *= o * o * o * o), this.ratio = 1 === l ? 1 - o : 2 === l ? o : .5 > t / this._duration ? o / 2 : 1 - o / 2
            } else this.ratio = this._ease.getRatio(t / this._duration);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted) return;
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / this._duration) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === this._duration) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || d))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                this._onUpdate && (0 > t && this._startAt && this._startAt.render(t, e, i), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || d)), n && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this.vars[n].apply(this.vars[n + "Scope"] || this, this.vars[n + "Params"] || d)))
            }
        }, s._kill = function(t, e) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : C.selector(e) || e;
            var i, s, n, r, a, o, l, h;
            if ((e instanceof Array || R(e)) && "number" != typeof e[0])
                for (i = e.length; --i > -1;) this._kill(t, e[i]) && (o = !0);
            else {
                if (this._targets) {
                    for (i = this._targets.length; --i > -1;)
                        if (e === this._targets[i]) {
                            a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    l = t || a, h = t !== s && "all" !== s && t !== a && (null == t || t._tempKill !== !0);
                    for (n in l)(r = a[n]) && (r.pg && r.t._kill(l) && (o = !0), r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next), r._next && (r._next._prev = r._prev), r._next = r._prev = null), delete a[n]), h && (s[n] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return o
        }, s.invalidate = function() {
            return this._notifyPluginsOfEnabled && C._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
        }, s._enabled = function(t, e) {
            if (r || n.wake(), t && this._gc) {
                var i, s = this._targets;
                if (s)
                    for (i = s.length; --i > -1;) this._siblings[i] = G(s[i], this, !0);
                else this._siblings = G(this.target, this, !0)
            }
            return A.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? C._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }, C.to = function(t, e, i) {
            return new C(t, e, i)
        }, C.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new C(t, e, i)
        }, C.fromTo = function(t, e, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new C(t, e, s)
        }, C.delayedCall = function(t, e, i, s, n) {
            return new C(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: s,
                immediateRender: !1,
                useFrames: n,
                overwrite: 0
            })
        }, C.set = function(t, e) {
            return new C(t, 0, e)
        }, C.killTweensOf = C.killDelayedCallsTo = function(t, e) {
            for (var i = C.getTweensOf(t), s = i.length; --s > -1;) i[s]._kill(e, t)
        }, C.getTweensOf = function(t) {
            if (null == t) return [];
            t = "string" != typeof t ? t : C.selector(t) || t;
            var e, i, s, n;
            if ((t instanceof Array || R(t)) && "number" != typeof t[0]) {
                for (e = t.length, i = []; --e > -1;) i = i.concat(C.getTweensOf(t[e]));
                for (e = i.length; --e > -1;)
                    for (n = i[e], s = e; --s > -1;) n === i[s] && i.splice(e, 1)
            } else
                for (i = G(t).concat(), e = i.length; --e > -1;) i[e]._gc && i.splice(e, 1);
            return i
        };
        var q = p("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = q.prototype
        }, !0);
        if (s = q.prototype, q.version = "1.10.1", q.API = 2, s._firstPT = null, s._addTween = function(t, e, i, s, n, r) {
                var a, o;
                return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                    _next: this._firstPT,
                    t: t,
                    p: e,
                    s: i,
                    c: a,
                    f: "function" == typeof t[e],
                    n: n || e,
                    r: r
                }, o._next && (o._next._prev = o), o) : void 0
            }, s.setRatio = function(t) {
                for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = 0 | e + (e > 0 ? .5 : -.5) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
            }, s._kill = function(t) {
                var e, i = this._overwriteProps,
                    s = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                return !1
            }, s._roundProps = function(t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, C._onPluginEvent = function(t, e) {
                var i, s, n, r, a, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o;) {
                        for (a = o._next, s = n; s && s.pr > o.pr;) s = s._next;
                        (o._prev = s ? s._prev : r) ? o._prev._next = o: n = o, (o._next = s) ? s._prev = o : r = o, o = a
                    }
                    o = e._firstPT = n
                }
                for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                return i
            }, q.activate = function(t) {
                for (var e = t.length; --e > -1;) t[e].API === q.API && (I[(new t[e])._propName] = t[e]);
                return !0
            }, f.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    s = t.priority || 0,
                    n = t.overwriteProps,
                    r = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    a = p("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        q.call(this, i, s), this._overwriteProps = n || []
                    }, t.global === !0),
                    o = a.prototype = new q(i);
                o.constructor = a, a.API = t.API;
                for (e in r) "function" == typeof t[e] && (o[r[e]] = t[e]);
                return a.version = t.version, q.activate([a]), a
            }, e = t._gsQueue) {
            for (i = 0; e.length > i; i++) e[i]();
            for (s in u) u[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
        }
        r = !1
    }(window), define("libs/TweenLite.min", function() {}), ! function() {
        var e = {},
            t = null,
            n = !0,
            r = !1;
        if ("undefined" != typeof AudioContext) t = new AudioContext;
        else if ("undefined" != typeof webkitAudioContext) t = new webkitAudioContext;
        else if ("undefined" != typeof Audio) {
            n = !1;
            try {
                new Audio
            } catch (i) {
                r = !0
            }
        } else n = !1, r = !0;
        if (n) {
            var s = void 0 === t.createGain ? t.createGainNode() : t.createGain();
            s.gain.value = 1, s.connect(t.destination)
        }
        var o = function() {
            this._volume = 1, this._muted = !1, this.usingWebAudio = n, this._howls = []
        };
        o.prototype = {
            volume: function(e) {
                var t = this;
                if (e = parseFloat(e), e && e >= 0 && 1 >= e) {
                    t._volume = e, n && (s.gain.value = e);
                    for (var r in t._howls)
                        if (t._howls.hasOwnProperty(r) && t._howls[r]._webAudio === !1)
                            for (var i = 0; i < t._howls[r]._audioNode.length; i++) t._howls[r]._audioNode[i].volume = t._howls[r]._volume * t._volume;
                    return t
                }
                return n ? s.gain.value : t._volume
            },
            mute: function() {
                return this._setMuted(!0), this
            },
            unmute: function() {
                return this._setMuted(!1), this
            },
            _setMuted: function(e) {
                var t = this;
                t._muted = e, n && (s.gain.value = e ? 0 : t._volume);
                for (var r in t._howls)
                    if (t._howls.hasOwnProperty(r) && t._howls[r]._webAudio === !1)
                        for (var i = 0; i < t._howls[r]._audioNode.length; i++) t._howls[r]._audioNode[i].muted = e
            }
        };
        var u = new o,
            a = null;
        if (!r) {
            a = new Audio;
            var f = {
                mp3: !!a.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                opus: !!a.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                m4a: !!(a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
            }
        }
        var l = function(e) {
            var t = this;
            t._autoplay = e.autoplay || !1, t._buffer = e.buffer || !1, t._duration = e.duration || 0, t._format = e.format || null, t._loop = e.loop || !1, t._loaded = !1, t._sprite = e.sprite || {}, t._src = e.src || "", t._pos3d = e.pos3d || [0, 0, -.5], t._volume = e.volume || 1, t._urls = e.urls || [], t._rate = e.rate || 1, t._onload = [e.onload || function() {}], t._onloaderror = [e.onloaderror || function() {}], t._onend = [e.onend || function() {}], t._onpause = [e.onpause || function() {}], t._onplay = [e.onplay || function() {}], t._onendTimer = [], t._webAudio = n && !t._buffer, t._audioNode = [], t._webAudio && t._setupAudioNode(), u._howls.push(t), t.load()
        };
        if (l.prototype = {
                load: function() {
                    var t = this,
                        n = null;
                    if (r) return void t.on("loaderror");
                    for (var i = 0; i < t._urls.length; i++) {
                        var s, o;
                        if (t._format) s = t._format;
                        else {
                            if (o = t._urls[i].toLowerCase().split("?")[0], s = o.match(/.+\.([^?]+)(\?|$)/), s = s && s.length >= 2 ? s : o.match(/data\:audio\/([^?]+);/), !s) return void t.on("loaderror");
                            s = s[1]
                        }
                        if (f[s]) {
                            n = t._urls[i];
                            break
                        }
                    }
                    if (!n) return void t.on("loaderror");
                    if (t._src = n, t._webAudio) c(t, n);
                    else {
                        var a = new Audio;
                        t._audioNode.push(a), a.src = n, a._pos = 0, a.preload = "auto", a.volume = u._muted ? 0 : t._volume * u.volume(), e[n] = t;
                        var l = function() {
                            t._duration = a.duration, 0 === Object.getOwnPropertyNames(t._sprite).length && (t._sprite = {
                                _default: [0, 1e3 * t._duration]
                            }), t._loaded || (t._loaded = !0, t.on("load")), t._autoplay && t.play(), a.removeEventListener("canplaythrough", l, !1)
                        };
                        a.addEventListener("canplaythrough", l, !1), a.load()
                    }
                    return t
                },
                urls: function(e) {
                    var t = this;
                    return e ? (t.stop(), t._urls = "string" == typeof e ? [e] : e, t._loaded = !1, t.load(), t) : t._urls
                },
                play: function(e, n) {
                    var r = this;
                    return "function" == typeof e && (n = e), e && "function" != typeof e || (e = "_default"), r._loaded ? r._sprite[e] ? (r._inactiveNode(function(i) {
                        i._sprite = e;
                        var s, o = i._pos > 0 ? i._pos : r._sprite[e][0] / 1e3,
                            a = r._sprite[e][1] / 1e3 - i._pos,
                            f = !(!r._loop && !r._sprite[e][2]),
                            l = "string" == typeof n ? n : Math.round(Date.now() * Math.random()) + "";
                        if (function() {
                                var t = {
                                    id: l,
                                    sprite: e,
                                    loop: f
                                };
                                s = setTimeout(function() {
                                    !r._webAudio && f && r.stop(t.id, t.timer).play(e, t.id), r._webAudio && !f && (r._nodeById(t.id).paused = !0), r._webAudio || f || r.stop(t.id, t.timer), r.on("end", l)
                                }, 1e3 * a), r._onendTimer.push(s), t.timer = r._onendTimer[r._onendTimer.length - 1]
                            }(), r._webAudio) {
                            var c = r._sprite[e][0] / 1e3,
                                h = r._sprite[e][1] / 1e3;
                            i.id = l, i.paused = !1, p(r, [f, c, h], l), r._playStart = t.currentTime, i.gain.value = r._volume, void 0 === i.bufferSource.start ? i.bufferSource.noteGrainOn(0, o, a) : i.bufferSource.start(0, o, a)
                        } else {
                            if (4 !== i.readyState) return r._clearEndTimer(s),
                                function() {
                                    var t = r,
                                        s = e,
                                        o = n,
                                        u = i,
                                        a = function() {
                                            t.play(s, o), u.removeEventListener("canplaythrough", a, !1)
                                        };
                                    u.addEventListener("canplaythrough", a, !1)
                                }(), r;
                            i.id = l, i.currentTime = o, i.muted = u._muted, i.volume = r._volume * u.volume(), setTimeout(function() {
                                i.play()
                            }, 0)
                        }
                        return r.on("play"), "function" == typeof n && n(l), r
                    }), r) : ("function" == typeof n && n(), r) : (r.on("load", function() {
                        r.play(e, n)
                    }), r)
                },
                pause: function(e, t) {
                    var n = this;
                    if (!n._loaded) return n.on("play", function() {
                        n.pause(e)
                    }), n;
                    n._clearEndTimer(t || 0);
                    var r = e ? n._nodeById(e) : n._activeNode();
                    if (r)
                        if (r._pos = n.pos(null, e), n._webAudio) {
                            if (!r.bufferSource) return n;
                            r.paused = !0, void 0 === r.bufferSource.stop ? r.bufferSource.noteOff(0) : r.bufferSource.stop(0)
                        } else r.pause();
                    return n.on("pause"), n
                },
                stop: function(e, t) {
                    var n = this;
                    if (!n._loaded) return n.on("play", function() {
                        n.stop(e)
                    }), n;
                    n._clearEndTimer(t || 0);
                    var r = e ? n._nodeById(e) : n._activeNode();
                    if (r)
                        if (r._pos = 0, n._webAudio) {
                            if (!r.bufferSource) return n;
                            r.paused = !0, void 0 === r.bufferSource.stop ? r.bufferSource.noteOff(0) : r.bufferSource.stop(0)
                        } else r.pause(), r.currentTime = 0;
                    return n
                },
                mute: function(e) {
                    var t = this;
                    if (!t._loaded) return t.on("play", function() {
                        t.mute(e)
                    }), t;
                    var n = e ? t._nodeById(e) : t._activeNode();
                    return n && (t._webAudio ? n.gain.value = 0 : n.volume = 0), t
                },
                unmute: function(e) {
                    var t = this;
                    if (!t._loaded) return t.on("play", function() {
                        t.unmute(e)
                    }), t;
                    var n = e ? t._nodeById(e) : t._activeNode();
                    return n && (t._webAudio ? n.gain.value = t._volume : n.volume = t._volume), t
                },
                volume: function(e, t) {
                    var n = this;
                    if (e = parseFloat(e), e >= 0 && 1 >= e) {
                        if (n._volume = e, !n._loaded) return n.on("play", function() {
                            n.volume(e, t)
                        }), n;
                        var r = t ? n._nodeById(t) : n._activeNode();
                        return r && (n._webAudio ? r.gain.value = e : r.volume = e * u.volume()), n
                    }
                    return n._volume
                },
                loop: function(e) {
                    var t = this;
                    return "boolean" == typeof e ? (t._loop = e, t) : t._loop
                },
                sprite: function(e) {
                    var t = this;
                    return "object" == typeof e ? (t._sprite = e, t) : t._sprite
                },
                pos: function(e, n) {
                    var r = this;
                    if (!r._loaded) return r.on("load", function() {
                        r.pos(e)
                    }), "number" == typeof e ? r : r._pos || 0;
                    e = parseFloat(e);
                    var i = n ? r._nodeById(n) : r._activeNode();
                    if (i) return r._webAudio ? e >= 0 ? (i._pos = e, r.pause(n).play(i._sprite, n), r) : i._pos + (t.currentTime - r._playStart) : e >= 0 ? (i.currentTime = e, r) : i.currentTime;
                    if (e >= 0) return r;
                    for (var s = 0; s < r._audioNode.length; s++)
                        if (r._audioNode[s].paused && 4 === r._audioNode[s].readyState) return r._webAudio ? r._audioNode[s]._pos : r._audioNode[s].currentTime
                },
                pos3d: function(e, t, n, r) {
                    var i = this;
                    if (t = void 0 !== t && t ? t : 0, n = void 0 !== n && n ? n : -.5, !i._loaded) return i.on("play", function() {
                        i.pos3d(e, t, n, r)
                    }), i;
                    if (!(e >= 0 || 0 > e)) return i._pos3d;
                    if (i._webAudio) {
                        var s = r ? i._nodeById(r) : i._activeNode();
                        s && (i._pos3d = [e, t, n], s.panner.setPosition(e, t, n))
                    }
                    return i
                },
                fade: function(e, t, n, r, i) {
                    var s = this,
                        o = Math.abs(e - t),
                        u = e > t ? "down" : "up",
                        a = o / .01,
                        f = n / a;
                    if (!s._loaded) return s.on("load", function() {
                        s.fade(e, t, n, r, i)
                    }), s;
                    s.volume(e, i);
                    for (var l = 1; a >= l; l++) ! function() {
                        var e = s._volume + ("up" === u ? .01 : -.01) * l,
                            n = Math.round(1e3 * e) / 1e3,
                            o = t;
                        setTimeout(function() {
                            s.volume(n, i), n === o && r && r()
                        }, f * l)
                    }()
                },
                fadeIn: function(e, t, n) {
                    return this.volume(0).play().fade(0, e, t, n)
                },
                fadeOut: function(e, t, n, r) {
                    var i = this;
                    return i.fade(i._volume, e, t, function() {
                        n && n(), i.pause(r), i.on("end")
                    }, r)
                },
                _nodeById: function(e) {
                    for (var t = this, n = t._audioNode[0], r = 0; r < t._audioNode.length; r++)
                        if (t._audioNode[r].id === e) {
                            n = t._audioNode[r];
                            break
                        }
                    return n
                },
                _activeNode: function() {
                    for (var e = this, t = null, n = 0; n < e._audioNode.length; n++)
                        if (!e._audioNode[n].paused) {
                            t = e._audioNode[n];
                            break
                        }
                    return e._drainPool(), t
                },
                _inactiveNode: function(e) {
                    for (var t = this, n = null, r = 0; r < t._audioNode.length; r++)
                        if (t._audioNode[r].paused && 4 === t._audioNode[r].readyState) {
                            e(t._audioNode[r]), n = !0;
                            break
                        }
                    if (t._drainPool(), !n) {
                        var i;
                        t._webAudio ? (i = t._setupAudioNode(), e(i)) : (t.load(), i = t._audioNode[t._audioNode.length - 1], i.addEventListener("loadedmetadata", function() {
                            e(i)
                        }))
                    }
                },
                _drainPool: function() {
                    var e, t = this,
                        n = 0;
                    for (e = 0; e < t._audioNode.length; e++) t._audioNode[e].paused && n++;
                    for (e = t._audioNode.length - 1; e >= 0 && !(5 >= n); e--) t._audioNode[e].paused && (t._webAudio && t._audioNode[e].disconnect(0), n--, t._audioNode.splice(e, 1))
                },
                _clearEndTimer: function(e) {
                    var t = this,
                        n = t._onendTimer.indexOf(e);
                    n = n >= 0 ? n : 0, t._onendTimer[n] && (clearTimeout(t._onendTimer[n]), t._onendTimer.splice(n, 1))
                },
                _setupAudioNode: function() {
                    var e = this,
                        n = e._audioNode,
                        r = e._audioNode.length;
                    return n[r] = void 0 === t.createGain ? t.createGainNode() : t.createGain(), n[r].gain.value = e._volume, n[r].paused = !0, n[r]._pos = 0, n[r].readyState = 4, n[r].connect(s), n[r].panner = t.createPanner(), n[r].panner.setPosition(e._pos3d[0], e._pos3d[1], e._pos3d[2]), n[r].panner.connect(n[r]), n[r]
                },
                on: function(e, t) {
                    var n = this,
                        r = n["_on" + e];
                    if ("function" == typeof t) r.push(t);
                    else
                        for (var i = 0; i < r.length; i++) t ? r[i].call(n, t) : r[i].call(n);
                    return n
                },
                off: function(e, t) {
                    for (var n = this, r = n["_on" + e], i = "" + t, s = 0; s < r.length; s++)
                        if (i === "" + r[s]) {
                            r.splice(s, 1);
                            break
                        }
                    return n
                },
                unload: function() {
                    for (var t = this, n = t._audioNode, r = 0; r < t._audioNode.length; r++) t.stop(n[r].id), t._webAudio ? n[r].disconnect(0) : n[r].src = "";
                    var i = u._howls.indexOf(t);
                    i && u._howls.splice(i, 1), delete e[t._src], t = null
                }
            }, n) var c = function(n, r) {
                if (r in e) n._duration = e[r].duration, h(n);
                else {
                    var i = new XMLHttpRequest;
                    i.open("GET", r, !0), i.responseType = "arraybuffer", i.onload = function() {
                        t.decodeAudioData(i.response, function(t) {
                            t && (e[r] = t, h(n, t))
                        })
                    }, i.onerror = function() {
                        n._webAudio && (n._buffer = !0, n._webAudio = !1, n._audioNode = [], delete n._gainNode, n.load())
                    };
                    try {
                        i.send()
                    } catch (s) {
                        i.onerror()
                    }
                }
            },
            h = function(e, t) {
                e._duration = t ? t.duration : e._duration, 0 === Object.getOwnPropertyNames(e._sprite).length && (e._sprite = {
                    _default: [0, 1e3 * e._duration]
                }), e._loaded || (e._loaded = !0, e.on("load")), e._autoplay && e.play()
            },
            p = function(n, r, i) {
                var s = n._nodeById(i);
                s.bufferSource = t.createBufferSource(), s.bufferSource.buffer = e[n._src], s.bufferSource.connect(s.panner), s.bufferSource.loop = r[0], r[0] && (s.bufferSource.loopStart = r[1], s.bufferSource.loopEnd = r[1] + r[2]), s.bufferSource.playbackRate.value = n._rate
            };
        "function" == typeof define && define.amd && define("libs/howler.min", [], function() {
            return {
                Howler: u,
                Howl: l
            }
        }), window.Howler = u, window.Howl = l
    }(), define("libs/sha1", function() {}), function() {
        var c = this,
            d = d || {};
        d.WEBGL_RENDERER = 0, d.CANVAS_RENDERER = 1, d.VERSION = "v1.5.2", d.blendModes = {
            NORMAL: 0,
            ADD: 1,
            MULTIPLY: 2,
            SCREEN: 3,
            OVERLAY: 4,
            DARKEN: 5,
            LIGHTEN: 6,
            COLOR_DODGE: 7,
            COLOR_BURN: 8,
            HARD_LIGHT: 9,
            SOFT_LIGHT: 10,
            DIFFERENCE: 11,
            EXCLUSION: 12,
            HUE: 13,
            SATURATION: 14,
            COLOR: 15,
            LUMINOSITY: 16
        }, d.scaleModes = {
            DEFAULT: 0,
            LINEAR: 0,
            NEAREST: 1
        }, d.INTERACTION_FREQUENCY = 30, d.AUTO_PREVENT_DEFAULT = !0, d.RAD_TO_DEG = 180 / Math.PI, d.DEG_TO_RAD = Math.PI / 180, d.Point = function(a, b) {
            this.x = a || 0, this.y = b || 0
        }, d.Point.prototype.clone = function() {
            return new d.Point(this.x, this.y)
        }, d.Point.prototype.constructor = d.Point, d.Point.prototype.set = function(a, b) {
            this.x = a || 0, this.y = b || (0 !== b ? this.x : 0)
        }, d.Rectangle = function(a, b, c, d) {
            this.x = a || 0, this.y = b || 0, this.width = c || 0, this.height = d || 0
        }, d.Rectangle.prototype.clone = function() {
            return new d.Rectangle(this.x, this.y, this.width, this.height)
        }, d.Rectangle.prototype.contains = function(a, b) {
            if (this.width <= 0 || this.height <= 0) return !1;
            var c = this.x;
            if (a >= c && a <= c + this.width) {
                var d = this.y;
                if (b >= d && b <= d + this.height) return !0
            }
            return !1
        }, d.Rectangle.prototype.constructor = d.Rectangle, d.EmptyRectangle = new d.Rectangle(0, 0, 0, 0), d.Polygon = function(a) {
            if (a instanceof Array || (a = Array.prototype.slice.call(arguments)), "number" == typeof a[0]) {
                for (var b = [], c = 0, e = a.length; e > c; c += 2) b.push(new d.Point(a[c], a[c + 1]));
                a = b
            }
            this.points = a
        }, d.Polygon.prototype.clone = function() {
            for (var a = [], b = 0; b < this.points.length; b++) a.push(this.points[b].clone());
            return new d.Polygon(a)
        }, d.Polygon.prototype.contains = function(a, b) {
            for (var c = !1, d = 0, e = this.points.length - 1; d < this.points.length; e = d++) {
                var f = this.points[d].x,
                    g = this.points[d].y,
                    h = this.points[e].x,
                    i = this.points[e].y,
                    j = g > b != i > b && (h - f) * (b - g) / (i - g) + f > a;
                j && (c = !c)
            }
            return c
        }, d.Polygon.prototype.constructor = d.Polygon, d.Circle = function(a, b, c) {
            this.x = a || 0, this.y = b || 0, this.radius = c || 0
        }, d.Circle.prototype.clone = function() {
            return new d.Circle(this.x, this.y, this.radius)
        }, d.Circle.prototype.contains = function(a, b) {
            if (this.radius <= 0) return !1;
            var c = this.x - a,
                d = this.y - b,
                e = this.radius * this.radius;
            return c *= c, d *= d, e >= c + d
        }, d.Circle.prototype.constructor = d.Circle, d.Ellipse = function(a, b, c, d) {
            this.x = a || 0, this.y = b || 0, this.width = c || 0, this.height = d || 0
        }, d.Ellipse.prototype.clone = function() {
            return new d.Ellipse(this.x, this.y, this.width, this.height)
        }, d.Ellipse.prototype.contains = function(a, b) {
            if (this.width <= 0 || this.height <= 0) return !1;
            var c = (a - this.x) / this.width,
                d = (b - this.y) / this.height;
            return c *= c, d *= d, 1 >= c + d
        }, d.Ellipse.prototype.getBounds = function() {
            return new d.Rectangle(this.x, this.y, this.width, this.height)
        }, d.Ellipse.prototype.constructor = d.Ellipse, d.determineMatrixArrayType = function() {
            return "undefined" != typeof Float32Array ? Float32Array : Array
        }, d.Matrix2 = d.determineMatrixArrayType(), d.Matrix = function() {
            this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0
        }, d.Matrix.prototype.fromArray = function(a) {
            this.a = a[0], this.b = a[1], this.c = a[3], this.d = a[4], this.tx = a[2], this.ty = a[5]
        }, d.Matrix.prototype.toArray = function(a) {
            this.array || (this.array = new Float32Array(9));
            var b = this.array;
            return a ? (this.array[0] = this.a, this.array[1] = this.c, this.array[2] = 0, this.array[3] = this.b, this.array[4] = this.d, this.array[5] = 0, this.array[6] = this.tx, this.array[7] = this.ty, this.array[8] = 1) : (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = this.tx, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = this.ty, this.array[6] = 0, this.array[7] = 0, this.array[8] = 1), b
        }, d.identityMatrix = new d.Matrix, d.DisplayObject = function() {
            this.position = new d.Point, this.scale = new d.Point(1, 1), this.pivot = new d.Point(0, 0), this.rotation = 0, this.alpha = 1, this.visible = !0, this.hitArea = null, this.buttonMode = !1, this.renderable = !1, this.parent = null, this.stage = null, this.worldAlpha = 1, this._interactive = !1, this.defaultCursor = "pointer", this.worldTransform = new d.Matrix, this.color = [], this.dynamic = !0, this._sr = 0, this._cr = 1, this.filterArea = null, this._bounds = new d.Rectangle(0, 0, 1, 1), this._currentBounds = null, this._mask = null, this._cacheAsBitmap = !1, this._cacheIsDirty = !1
        }, d.DisplayObject.prototype.constructor = d.DisplayObject, d.DisplayObject.prototype.setInteractive = function(a) {
            this.interactive = a
        }, Object.defineProperty(d.DisplayObject.prototype, "interactive", {
            get: function() {
                return this._interactive
            },
            set: function(a) {
                this._interactive = a, this.stage && (this.stage.dirty = !0)
            }
        }), Object.defineProperty(d.DisplayObject.prototype, "worldVisible", {
            get: function() {
                var a = this;
                do {
                    if (!a.visible) return !1;
                    a = a.parent
                } while (a);
                return !0
            }
        }), Object.defineProperty(d.DisplayObject.prototype, "mask", {
            get: function() {
                return this._mask
            },
            set: function(a) {
                this._mask && (this._mask.isMask = !1), this._mask = a, this._mask && (this._mask.isMask = !0)
            }
        }), Object.defineProperty(d.DisplayObject.prototype, "filters", {
            get: function() {
                return this._filters
            },
            set: function(a) {
                if (a) {
                    for (var b = [], c = 0; c < a.length; c++)
                        for (var d = a[c].passes, e = 0; e < d.length; e++) b.push(d[e]);
                    this._filterBlock = {
                        target: this,
                        filterPasses: b
                    }
                }
                this._filters = a
            }
        }), Object.defineProperty(d.DisplayObject.prototype, "cacheAsBitmap", {
            get: function() {
                return this._cacheAsBitmap
            },
            set: function(a) {
                this._cacheAsBitmap !== a && (a ? this._generateCachedSprite() : this._destroyCachedSprite(), this._cacheAsBitmap = a)
            }
        }), d.DisplayObject.prototype.updateTransform = function() {
            this.rotation !== this.rotationCache && (this.rotationCache = this.rotation, this._sr = Math.sin(this.rotation), this._cr = Math.cos(this.rotation));
            var a = this.parent.worldTransform,
                b = this.worldTransform,
                c = this.pivot.x,
                d = this.pivot.y,
                e = this._cr * this.scale.x,
                f = -this._sr * this.scale.y,
                g = this._sr * this.scale.x,
                h = this._cr * this.scale.y,
                i = this.position.x - e * c - d * f,
                j = this.position.y - h * d - c * g,
                k = a.a,
                l = a.b,
                m = a.c,
                n = a.d;
            b.a = k * e + l * g, b.b = k * f + l * h, b.tx = k * i + l * j + a.tx, b.c = m * e + n * g, b.d = m * f + n * h, b.ty = m * i + n * j + a.ty, this.worldAlpha = this.alpha * this.parent.worldAlpha
        }, d.DisplayObject.prototype.getBounds = function(a) {
            return a = a, d.EmptyRectangle
        }, d.DisplayObject.prototype.getLocalBounds = function() {
            return this.getBounds(d.identityMatrix)
        }, d.DisplayObject.prototype.setStageReference = function(a) {
            this.stage = a, this._interactive && (this.stage.dirty = !0)
        }, d.DisplayObject.prototype.generateTexture = function(a) {
            var b = this.getLocalBounds(),
                c = new d.RenderTexture(0 | b.width, 0 | b.height, a);
            return c.render(this, new d.Point(-b.x, -b.y)), c
        }, d.DisplayObject.prototype.updateCache = function() {
            this._generateCachedSprite()
        }, d.DisplayObject.prototype._renderCachedSprite = function(a) {
            a.gl ? d.Sprite.prototype._renderWebGL.call(this._cachedSprite, a) : d.Sprite.prototype._renderCanvas.call(this._cachedSprite, a)
        }, d.DisplayObject.prototype._generateCachedSprite = function() {
            this._cacheAsBitmap = !1;
            var a = this.getLocalBounds();
            if (this._cachedSprite) this._cachedSprite.texture.resize(0 | a.width, 0 | a.height);
            else {
                var b = new d.RenderTexture(0 | a.width, 0 | a.height);
                this._cachedSprite = new d.Sprite(b), this._cachedSprite.worldTransform = this.worldTransform
            }
            var c = this._filters;
            this._filters = null, this._cachedSprite.filters = c, this._cachedSprite.texture.render(this, new d.Point(-a.x, -a.y)), this._cachedSprite.anchor.x = -(a.x / a.width), this._cachedSprite.anchor.y = -(a.y / a.height), this._filters = c, this._cacheAsBitmap = !0
        }, d.DisplayObject.prototype._destroyCachedSprite = function() {
            this._cachedSprite && (this._cachedSprite.texture.destroy(!0), this._cachedSprite = null)
        }, d.DisplayObject.prototype._renderWebGL = function(a) {
            a = a
        }, d.DisplayObject.prototype._renderCanvas = function(a) {
            a = a
        }, Object.defineProperty(d.DisplayObject.prototype, "x", {
            get: function() {
                return this.position.x
            },
            set: function(a) {
                this.position.x = a
            }
        }), Object.defineProperty(d.DisplayObject.prototype, "y", {
            get: function() {
                return this.position.y
            },
            set: function(a) {
                this.position.y = a
            }
        }), d.DisplayObjectContainer = function() {
            d.DisplayObject.call(this), this.children = []
        }, d.DisplayObjectContainer.prototype = Object.create(d.DisplayObject.prototype), d.DisplayObjectContainer.prototype.constructor = d.DisplayObjectContainer, d.DisplayObjectContainer.prototype.addChild = function(a) {
            this.addChildAt(a, this.children.length)
        }, d.DisplayObjectContainer.prototype.addChildAt = function(a, b) {
            if (!(b >= 0 && b <= this.children.length)) throw new Error(a + " The index " + b + " supplied is out of bounds " + this.children.length);
            a.parent && a.parent.removeChild(a), a.parent = this, this.children.splice(b, 0, a), this.stage && a.setStageReference(this.stage)
        }, d.DisplayObjectContainer.prototype.swapChildren = function(a, b) {
            if (a !== b) {
                var c = this.children.indexOf(a),
                    d = this.children.indexOf(b);
                if (0 > c || 0 > d) throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");
                this.children[c] = b, this.children[d] = a
            }
        }, d.DisplayObjectContainer.prototype.getChildAt = function(a) {
            if (a >= 0 && a < this.children.length) return this.children[a];
            throw new Error("Supplied index does not exist in the child list, or the supplied DisplayObject must be a child of the caller")
        }, d.DisplayObjectContainer.prototype.removeChild = function(a) {
            return this.removeChildAt(this.children.indexOf(a))
        }, d.DisplayObjectContainer.prototype.removeChildAt = function(a) {
            var b = this.getChildAt(a);
            return this.stage && b.removeStageReference(), b.parent = void 0, this.children.splice(a, 1), b
        }, d.DisplayObjectContainer.prototype.removeChildren = function(a, b) {
            var c = a || 0,
                d = "number" == typeof b ? b : this.children.length,
                e = d - c;
            if (e > 0 && d >= e) {
                for (var f = this.children.splice(c, e), g = 0; g < f.length; g++) {
                    var h = f[g];
                    this.stage && h.removeStageReference(), h.parent = void 0
                }
                return f
            }
            throw new Error("Range Error, numeric values are outside the acceptable range")
        }, d.DisplayObjectContainer.prototype.updateTransform = function() {
            if (this.visible && (d.DisplayObject.prototype.updateTransform.call(this), !this._cacheAsBitmap))
                for (var a = 0, b = this.children.length; b > a; a++) this.children[a].updateTransform()
        }, d.DisplayObjectContainer.prototype.getBounds = function(a) {
            if (0 === this.children.length) return d.EmptyRectangle;
            if (a) {
                var b = this.worldTransform;
                this.worldTransform = a, this.updateTransform(), this.worldTransform = b
            }
            for (var c, e, f, g = 1 / 0, h = 1 / 0, i = -1 / 0, j = -1 / 0, k = !1, l = 0, m = this.children.length; m > l; l++) {
                var n = this.children[l];
                n.visible && (k = !0, c = this.children[l].getBounds(a), g = g < c.x ? g : c.x, h = h < c.y ? h : c.y, e = c.width + c.x, f = c.height + c.y, i = i > e ? i : e, j = j > f ? j : f)
            }
            if (!k) return d.EmptyRectangle;
            var o = this._bounds;
            return o.x = g, o.y = h, o.width = i - g, o.height = j - h, o
        }, d.DisplayObjectContainer.prototype.getLocalBounds = function() {
            var a = this.worldTransform;
            this.worldTransform = d.identityMatrix;
            for (var b = 0, c = this.children.length; c > b; b++) this.children[b].updateTransform();
            var e = this.getBounds();
            return this.worldTransform = a, e
        }, d.DisplayObjectContainer.prototype.setStageReference = function(a) {
            this.stage = a, this._interactive && (this.stage.dirty = !0);
            for (var b = 0, c = this.children.length; c > b; b++) {
                var d = this.children[b];
                d.setStageReference(a)
            }
        }, d.DisplayObjectContainer.prototype.removeStageReference = function() {
            for (var a = 0, b = this.children.length; b > a; a++) {
                var c = this.children[a];
                c.removeStageReference()
            }
            this._interactive && (this.stage.dirty = !0), this.stage = null
        }, d.DisplayObjectContainer.prototype._renderWebGL = function(a) {
            if (this.visible && !(this.alpha <= 0)) {
                if (this._cacheAsBitmap) return void this._renderCachedSprite(a);
                var b, c;
                if (this._mask || this._filters) {
                    for (this._mask && (a.spriteBatch.stop(), a.maskManager.pushMask(this.mask, a), a.spriteBatch.start()), this._filters && (a.spriteBatch.flush(), a.filterManager.pushFilter(this._filterBlock)), b = 0, c = this.children.length; c > b; b++) this.children[b]._renderWebGL(a);
                    a.spriteBatch.stop(), this._filters && a.filterManager.popFilter(), this._mask && a.maskManager.popMask(a), a.spriteBatch.start()
                } else
                    for (b = 0, c = this.children.length; c > b; b++) this.children[b]._renderWebGL(a)
            }
        }, d.DisplayObjectContainer.prototype._renderCanvas = function(a) {
            if (this.visible !== !1 && 0 !== this.alpha) {
                if (this._cacheAsBitmap) return void this._renderCachedSprite(a);
                this._mask && a.maskManager.pushMask(this._mask, a.context);
                for (var b = 0, c = this.children.length; c > b; b++) {
                    var d = this.children[b];
                    d._renderCanvas(a)
                }
                this._mask && a.maskManager.popMask(a.context)
            }
        }, d.Sprite = function(a) {
            d.DisplayObjectContainer.call(this), this.anchor = new d.Point, this.texture = a, this._width = 0, this._height = 0, this.tint = 16777215, this.blendMode = d.blendModes.NORMAL, a.baseTexture.hasLoaded ? this.onTextureUpdate() : (this.onTextureUpdateBind = this.onTextureUpdate.bind(this), this.texture.addEventListener("update", this.onTextureUpdateBind)), this.renderable = !0
        }, d.Sprite.prototype = Object.create(d.DisplayObjectContainer.prototype), d.Sprite.prototype.constructor = d.Sprite, Object.defineProperty(d.Sprite.prototype, "width", {
            get: function() {
                return this.scale.x * this.texture.frame.width
            },
            set: function(a) {
                this.scale.x = a / this.texture.frame.width, this._width = a
            }
        }), Object.defineProperty(d.Sprite.prototype, "height", {
            get: function() {
                return this.scale.y * this.texture.frame.height
            },
            set: function(a) {
                this.scale.y = a / this.texture.frame.height, this._height = a
            }
        }), d.Sprite.prototype.setTexture = function(a) {
            this.texture.baseTexture !== a.baseTexture ? (this.textureChange = !0, this.texture = a) : this.texture = a, this.cachedTint = 16777215, this.updateFrame = !0
        }, d.Sprite.prototype.onTextureUpdate = function() {
            this._width && (this.scale.x = this._width / this.texture.frame.width), this._height && (this.scale.y = this._height / this.texture.frame.height), this.updateFrame = !0
        }, d.Sprite.prototype.getBounds = function(a) {
            var b = this.texture.frame.width,
                c = this.texture.frame.height,
                d = b * (1 - this.anchor.x),
                e = b * -this.anchor.x,
                f = c * (1 - this.anchor.y),
                g = c * -this.anchor.y,
                h = a || this.worldTransform,
                i = h.a,
                j = h.c,
                k = h.b,
                l = h.d,
                m = h.tx,
                n = h.ty,
                o = i * e + k * g + m,
                p = l * g + j * e + n,
                q = i * d + k * g + m,
                r = l * g + j * d + n,
                s = i * d + k * f + m,
                t = l * f + j * d + n,
                u = i * e + k * f + m,
                v = l * f + j * e + n,
                w = -1 / 0,
                x = -1 / 0,
                y = 1 / 0,
                z = 1 / 0;
            y = y > o ? o : y, y = y > q ? q : y, y = y > s ? s : y, y = y > u ? u : y, z = z > p ? p : z, z = z > r ? r : z, z = z > t ? t : z, z = z > v ? v : z, w = o > w ? o : w, w = q > w ? q : w, w = s > w ? s : w, w = u > w ? u : w, x = p > x ? p : x, x = r > x ? r : x, x = t > x ? t : x, x = v > x ? v : x;
            var A = this._bounds;
            return A.x = y, A.width = w - y, A.y = z, A.height = x - z, this._currentBounds = A, A
        }, d.Sprite.prototype._renderWebGL = function(a) {
            if (this.visible && !(this.alpha <= 0)) {
                var b, c;
                if (this._mask || this._filters) {
                    var d = a.spriteBatch;
                    for (this._mask && (d.stop(), a.maskManager.pushMask(this.mask, a), d.start()), this._filters && (d.flush(), a.filterManager.pushFilter(this._filterBlock)), d.render(this), b = 0, c = this.children.length; c > b; b++) this.children[b]._renderWebGL(a);
                    d.stop(), this._filters && a.filterManager.popFilter(), this._mask && a.maskManager.popMask(a), d.start()
                } else
                    for (a.spriteBatch.render(this), b = 0, c = this.children.length; c > b; b++) this.children[b]._renderWebGL(a)
            }
        }, d.Sprite.prototype._renderCanvas = function(a) {
            if (this.visible !== !1 && 0 !== this.alpha) {
                var b = this.texture.frame,
                    c = a.context,
                    e = this.texture;
                if (this.blendMode !== a.currentBlendMode && (a.currentBlendMode = this.blendMode, c.globalCompositeOperation = d.blendModesCanvas[a.currentBlendMode]), this._mask && a.maskManager.pushMask(this._mask, a.context), b && b.width && b.height && e.baseTexture.source) {
                    c.globalAlpha = this.worldAlpha;
                    var f = this.worldTransform;
                    if (a.roundPixels ? c.setTransform(f.a, f.c, f.b, f.d, 0 | f.tx, 0 | f.ty) : c.setTransform(f.a, f.c, f.b, f.d, f.tx, f.ty), a.smoothProperty && a.scaleMode !== this.texture.baseTexture.scaleMode && (a.scaleMode = this.texture.baseTexture.scaleMode, c[a.smoothProperty] = a.scaleMode === d.scaleModes.LINEAR), 16777215 !== this.tint) {
                        if (this.cachedTint !== this.tint) {
                            if (!e.baseTexture.hasLoaded) return;
                            this.cachedTint = this.tint, this.tintedTexture = d.CanvasTinter.getTintedTexture(this, this.tint)
                        }
                        c.drawImage(this.tintedTexture, 0, 0, b.width, b.height, this.anchor.x * -b.width, this.anchor.y * -b.height, b.width, b.height)
                    } else if (e.trim) {
                        var g = e.trim;
                        c.drawImage(this.texture.baseTexture.source, b.x, b.y, b.width, b.height, g.x - this.anchor.x * g.width, g.y - this.anchor.y * g.height, b.width, b.height)
                    } else {
						c.drawImage(this.texture.baseTexture.source, b.x, b.y, b.width, b.height, this.anchor.x * -b.width, this.anchor.y * -b.height, b.width, b.height)
					}
                }
                for (var h = 0, i = this.children.length; i > h; h++) {
                    var j = this.children[h];
                    j._renderCanvas(a)
                }
                this._mask && a.maskManager.popMask(a.context)
            }
        }, d.Sprite.fromFrame = function(a) {
            var b = d.TextureCache[a];
            if (!b) throw new Error('The frameId "' + a + '" does not exist in the texture cache' + this);
            return new d.Sprite(b)
        }, d.Sprite.fromImage = function(a, b, c) {
            var e = d.Texture.fromImage(a, b, c);
            return new d.Sprite(e)
        }, d.SpriteBatch = function(a) {
            d.DisplayObjectContainer.call(this), this.textureThing = a, this.ready = !1
        }, d.SpriteBatch.prototype = Object.create(d.DisplayObjectContainer.prototype), d.SpriteBatch.constructor = d.SpriteBatch, d.SpriteBatch.prototype.initWebGL = function(a) {
            this.fastSpriteBatch = new d.WebGLFastSpriteBatch(a), this.ready = !0
        }, d.SpriteBatch.prototype.updateTransform = function() {
            d.DisplayObject.prototype.updateTransform.call(this)
        }, d.SpriteBatch.prototype._renderWebGL = function(a) {
            !this.visible || this.alpha <= 0 || !this.children.length || (this.ready || this.initWebGL(a.gl), a.spriteBatch.stop(), a.shaderManager.activateShader(a.shaderManager.fastShader), this.fastSpriteBatch.begin(this, a), this.fastSpriteBatch.render(this), a.shaderManager.activateShader(a.shaderManager.defaultShader), a.spriteBatch.start())
        }, d.SpriteBatch.prototype._renderCanvas = function(a) {
            var b = a.context;
            b.globalAlpha = this.worldAlpha, d.DisplayObject.prototype.updateTransform.call(this);
            for (var c = this.worldTransform, e = !0, f = 0; f < this.children.length; f++) {
                var g = this.children[f];
                if (g.visible) {
                    var h = g.texture,
                        i = h.frame;
                    if (b.globalAlpha = this.worldAlpha * g.alpha, g.rotation % (2 * Math.PI) === 0) e && (b.setTransform(c.a, c.c, c.b, c.d, c.tx, c.ty), e = !1), b.drawImage(h.baseTexture.source, i.x, i.y, i.width, i.height, g.anchor.x * -i.width * g.scale.x + g.position.x + .5 | 0, g.anchor.y * -i.height * g.scale.y + g.position.y + .5 | 0, i.width * g.scale.x, i.height * g.scale.y);
                    else {
                        e || (e = !0), d.DisplayObject.prototype.updateTransform.call(g);
                        var j = g.worldTransform;
                        a.roundPixels ? b.setTransform(j.a, j.c, j.b, j.d, 0 | j.tx, 0 | j.ty) : b.setTransform(j.a, j.c, j.b, j.d, j.tx, j.ty), b.drawImage(h.baseTexture.source, i.x, i.y, i.width, i.height, g.anchor.x * -i.width + .5 | 0, g.anchor.y * -i.height + .5 | 0, i.width, i.height)
                    }
                }
            }
        }, d.MovieClip = function(a) {
            d.Sprite.call(this, a[0]), this.textures = a, this.animationSpeed = 1, this.loop = !0, this.onComplete = null, this.currentFrame = 0, this.playing = !1
        }, d.MovieClip.prototype = Object.create(d.Sprite.prototype), d.MovieClip.prototype.constructor = d.MovieClip, Object.defineProperty(d.MovieClip.prototype, "totalFrames", {
            get: function() {
                return this.textures.length
            }
        }), d.MovieClip.prototype.stop = function() {
            this.playing = !1
        }, d.MovieClip.prototype.play = function() {
            this.playing = !0
        }, d.MovieClip.prototype.gotoAndStop = function(a) {
            this.playing = !1, this.currentFrame = a;
            var b = this.currentFrame + .5 | 0;
            this.setTexture(this.textures[b % this.textures.length])
        }, d.MovieClip.prototype.gotoAndPlay = function(a) {
            this.currentFrame = a, this.playing = !0
        }, d.MovieClip.prototype.updateTransform = function() {
            if (d.Sprite.prototype.updateTransform.call(this), this.playing) {
                this.currentFrame += this.animationSpeed;
                var a = this.currentFrame + .5 | 0;
                this.loop || a < this.textures.length ? this.setTexture(this.textures[a % this.textures.length]) : a >= this.textures.length && (this.gotoAndStop(this.textures.length - 1), this.onComplete && this.onComplete())
            }
        }, d.MovieClip.prototype.fromFrames = function(a) {
            for (var b = [], c = 0; c < a.length; c++) b.push(new d.Texture.fromFrame(a[c]));
            return new d.MovieClip(b)
        }, d.MovieClip.prototype.fromImages = function(a) {
            for (var b = [], c = 0; c < a.length; c++) b.push(new d.Texture.fromImage(a[c]));
            return new d.MovieClip(b)
        }, d.FilterBlock = function() {
            this.visible = !0, this.renderable = !0
        }, d.Text = function(a, b) {
            this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), d.Sprite.call(this, d.Texture.fromCanvas(this.canvas)), this.setText(a), this.setStyle(b), this.updateText(), this.dirty = !1
        }, d.Text.prototype = Object.create(d.Sprite.prototype), d.Text.prototype.constructor = d.Text, d.Text.prototype.setStyle = function(a) {
            a = a || {}, a.font = a.font || "bold 20pt Arial", a.fill = a.fill || "black", a.align = a.align || "left", a.stroke = a.stroke || "black", a.strokeThickness = a.strokeThickness || 0, a.wordWrap = a.wordWrap || !1, a.wordWrapWidth = a.wordWrapWidth || 100, a.wordWrapWidth = a.wordWrapWidth || 100, a.dropShadow = a.dropShadow || !1, a.dropShadowAngle = a.dropShadowAngle || Math.PI / 6, a.dropShadowDistance = a.dropShadowDistance || 4, a.dropShadowColor = a.dropShadowColor || "black", this.style = a, this.dirty = !0
        }, d.Text.prototype.setText = function(a) {
            this.text = a.toString() || " ", this.dirty = !0
        }, d.Text.prototype.updateText = function() {
            this.context.font = this.style.font;
            var a = this.text;
            this.style.wordWrap && (a = this.wordWrap(this.text));
            for (var b = a.split(/(?:\r\n|\r|\n)/), c = [], d = 0, e = 0; e < b.length; e++) {
                var f = this.context.measureText(b[e]).width;
                c[e] = f, d = Math.max(d, f)
            }
            var g = d + this.style.strokeThickness;
            this.style.dropShadow && (g += this.style.dropShadowDistance), this.canvas.width = g + this.context.lineWidth;
            var h = this.determineFontHeight("font: " + this.style.font + ";") + this.style.strokeThickness,
                i = h * b.length;
            this.style.dropShadow && (i += this.style.dropShadowDistance), this.canvas.height = i, navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.font = this.style.font, this.context.strokeStyle = this.style.stroke, this.context.lineWidth = this.style.strokeThickness, this.context.textBaseline = "top";
            var j, k;
            if (this.style.dropShadow) {
                this.context.fillStyle = this.style.dropShadowColor;
                var l = Math.sin(this.style.dropShadowAngle) * this.style.dropShadowDistance,
                    m = Math.cos(this.style.dropShadowAngle) * this.style.dropShadowDistance;
                for (e = 0; e < b.length; e++) j = this.style.strokeThickness / 2, k = this.style.strokeThickness / 2 + e * h, "right" === this.style.align ? j += d - c[e] : "center" === this.style.align && (j += (d - c[e]) / 2), this.style.fill && this.context.fillText(b[e], j + l, k + m)
            }
            for (this.context.fillStyle = this.style.fill, e = 0; e < b.length; e++) j = this.style.strokeThickness / 2, k = this.style.strokeThickness / 2 + e * h, "right" === this.style.align ? j += d - c[e] : "center" === this.style.align && (j += (d - c[e]) / 2), this.style.stroke && this.style.strokeThickness && this.context.strokeText(b[e], j, k), this.style.fill && this.context.fillText(b[e], j, k);
            this.updateTexture()
        }, d.Text.prototype.updateTexture = function() {
            this.texture.baseTexture.width = this.canvas.width, this.texture.baseTexture.height = this.canvas.height, this.texture.frame.width = this.canvas.width, this.texture.frame.height = this.canvas.height, this._width = this.canvas.width, this._height = this.canvas.height, this.requiresUpdate = !0
        }, d.Text.prototype._renderWebGL = function(a) {
            this.requiresUpdate && (this.requiresUpdate = !1, d.updateWebGLTexture(this.texture.baseTexture, a.gl)), d.Sprite.prototype._renderWebGL.call(this, a)
        }, d.Text.prototype.updateTransform = function() {
            this.dirty && (this.updateText(), this.dirty = !1), d.Sprite.prototype.updateTransform.call(this)
        }, d.Text.prototype.determineFontHeight = function(a) {
            var b = d.Text.heightCache[a];
            if (!b) {
                var c = document.getElementsByTagName("body")[0],
                    e = document.createElement("div"),
                    f = document.createTextNode("M");
                e.appendChild(f), e.setAttribute("style", a + ";position:absolute;top:0;left:0"), c.appendChild(e), b = e.offsetHeight, d.Text.heightCache[a] = b, c.removeChild(e)
            }
            return b
        }, d.Text.prototype.wordWrap = function(a) {
            for (var b = "", c = a.split("\n"), d = 0; d < c.length; d++) {
                for (var e = this.style.wordWrapWidth, f = c[d].split(" "), g = 0; g < f.length; g++) {
                    var h = this.context.measureText(f[g]).width,
                        i = h + this.context.measureText(" ").width;
                    0 === g || i > e ? (g > 0 && (b += "\n"), b += f[g], e = this.style.wordWrapWidth - h) : (e -= i, b += " " + f[g])
                }
                d < c.length - 1 && (b += "\n")
            }
            return b
        }, d.Text.prototype.destroy = function(a) {
            a && this.texture.destroy()
        }, d.Text.heightCache = {}, d.BitmapText = function(a, b) {
            d.DisplayObjectContainer.call(this), this._pool = [], this.setText(a), this.setStyle(b), this.updateText(), this.dirty = !1
        }, d.BitmapText.prototype = Object.create(d.DisplayObjectContainer.prototype), d.BitmapText.prototype.constructor = d.BitmapText, d.BitmapText.prototype.setText = function(a) {
            this.text = a || " ", this.dirty = !0
        }, d.BitmapText.prototype.setStyle = function(a) {
            a = a || {}, a.align = a.align || "left", this.style = a;
            var b = a.font.split(" ");
            this.fontName = b[b.length - 1], this.fontSize = b.length >= 2 ? parseInt(b[b.length - 2], 10) : d.BitmapText.fonts[this.fontName].size, this.dirty = !0, this.tint = a.tint
        }, d.BitmapText.prototype.updateText = function() {
            for (var a = d.BitmapText.fonts[this.fontName], b = new d.Point, c = null, e = [], f = 0, g = [], h = 0, i = this.fontSize / a.size, j = 0; j < this.text.length; j++) {
                var k = this.text.charCodeAt(j);
                if (/(?:\r\n|\r|\n)/.test(this.text.charAt(j))) g.push(b.x), f = Math.max(f, b.x), h++, b.x = 0, b.y += a.lineHeight, c = null;
                else {
                    var l = a.chars[k];
                    l && (c && l[c] && (b.x += l.kerning[c]), e.push({
                        texture: l.texture,
                        line: h,
                        charCode: k,
                        position: new d.Point(b.x + l.xOffset, b.y + l.yOffset)
                    }), b.x += l.xAdvance, c = k)
                }
            }
            g.push(b.x), f = Math.max(f, b.x);
            var m = [];
            for (j = 0; h >= j; j++) {
                var n = 0;
                "right" === this.style.align ? n = f - g[j] : "center" === this.style.align && (n = (f - g[j]) / 2), m.push(n)
            }
            var o = this.children.length,
                p = e.length,
                q = this.tint || 16777215;
            for (j = 0; p > j; j++) {
                var r = o > j ? this.children[j] : this._pool.pop();
                r ? r.setTexture(e[j].texture) : r = new d.Sprite(e[j].texture), r.position.x = (e[j].position.x + m[e[j].line]) * i, r.position.y = e[j].position.y * i, r.scale.x = r.scale.y = i, r.tint = q, r.parent || this.addChild(r)
            }
            for (; this.children.length > p;) {
                var s = this.getChildAt(this.children.length - 1);
                this._pool.push(s), this.removeChild(s)
            }
            this.textWidth = f * i, this.textHeight = (b.y + a.lineHeight) * i
        }, d.BitmapText.prototype.updateTransform = function() {
            this.dirty && (this.updateText(), this.dirty = !1), d.DisplayObjectContainer.prototype.updateTransform.call(this)
        }, d.BitmapText.fonts = {}, d.InteractionData = function() {
            this.global = new d.Point, this.target = null, this.originalEvent = null
        }, d.InteractionData.prototype.getLocalPosition = function(a) {
            var b = a.worldTransform,
                c = this.global,
                e = b.a,
                f = b.b,
                g = b.tx,
                h = b.c,
                i = b.d,
                j = b.ty,
                k = 1 / (e * i + f * -h);
            return new d.Point(i * k * c.x + -f * k * c.y + (j * f - g * i) * k, e * k * c.y + -h * k * c.x + (-j * e + g * h) * k)
        }, d.InteractionData.prototype.constructor = d.InteractionData, d.InteractionManager = function(a) {
            this.stage = a, this.mouse = new d.InteractionData, this.touchs = {}, this.tempPoint = new d.Point, this.mouseoverEnabled = !0, this.pool = [], this.interactiveItems = [], this.interactionDOMElement = null, this.onMouseMove = this.onMouseMove.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.last = 0, this.currentCursorStyle = "inherit", this.mouseOut = !1
        }, d.InteractionManager.prototype.constructor = d.InteractionManager, d.InteractionManager.prototype.collectInteractiveSprite = function(a, b) {
            for (var c = a.children, d = c.length, e = d - 1; e >= 0; e--) {
                var f = c[e];
                f._interactive ? (b.interactiveChildren = !0, this.interactiveItems.push(f), f.children.length > 0 && this.collectInteractiveSprite(f, f)) : (f.__iParent = null, f.children.length > 0 && this.collectInteractiveSprite(f, b))
            }
        }, d.InteractionManager.prototype.setTarget = function(a) {
            this.target = a, null === this.interactionDOMElement && this.setTargetDomElement(a.view)
        }, d.InteractionManager.prototype.setTargetDomElement = function(a) {
            this.removeEvents(), window.navigator.msPointerEnabled && (a.style["-ms-content-zooming"] = "none", a.style["-ms-touch-action"] = "none"), this.interactionDOMElement = a, a.addEventListener("mousemove", this.onMouseMove, !0), a.addEventListener("mousedown", this.onMouseDown, !0), a.addEventListener("mouseout", this.onMouseOut, !0), a.addEventListener("touchstart", this.onTouchStart, !0), a.addEventListener("touchend", this.onTouchEnd, !0), a.addEventListener("touchmove", this.onTouchMove, !0), window.addEventListener("mouseup", this.onMouseUp, !0)
        }, d.InteractionManager.prototype.removeEvents = function() {
            this.interactionDOMElement && (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "", this.interactionDOMElement.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0), this.interactionDOMElement = null, window.removeEventListener("mouseup", this.onMouseUp, !0))
        }, d.InteractionManager.prototype.update = function() {
            if (this.target) {
                var a = Date.now(),
                    b = a - this.last;
                if (b = b * d.INTERACTION_FREQUENCY / 1e3, !(1 > b)) {
                    this.last = a;
                    var c = 0;
                    if (this.dirty) {
                        this.dirty = !1;
                        var e = this.interactiveItems.length;
                        for (c = 0; e > c; c++) this.interactiveItems[c].interactiveChildren = !1;
                        this.interactiveItems = [], this.stage.interactive && this.interactiveItems.push(this.stage), this.collectInteractiveSprite(this.stage, this.stage)
                    }
                    var f = this.interactiveItems.length,
                        g = "inherit",
                        h = !1;
                    for (c = 0; f > c; c++) {
                        var i = this.interactiveItems[c];
                        i.__hit = this.hitTest(i, this.mouse), this.mouse.target = i, i.__hit && !h ? (i.buttonMode && (g = i.defaultCursor), i.interactiveChildren || (h = !0), i.__isOver || (i.mouseover && i.mouseover(this.mouse), i.__isOver = !0)) : i.__isOver && (i.mouseout && i.mouseout(this.mouse), i.__isOver = !1)
                    }
                    this.currentCursorStyle !== g && (this.currentCursorStyle = g, this.interactionDOMElement.style.cursor = g)
                }
            }
        }, d.InteractionManager.prototype.onMouseMove = function(a) {
            this.mouse.originalEvent = a || window.event;
            var b = this.interactionDOMElement.getBoundingClientRect();
            this.mouse.global.x = (a.clientX - b.left) * (this.target.width / b.width), this.mouse.global.y = (a.clientY - b.top) * (this.target.height / b.height);
            for (var c = this.interactiveItems.length, d = 0; c > d; d++) {
                var e = this.interactiveItems[d];
                e.mousemove && e.mousemove(this.mouse)
            }
        }, d.InteractionManager.prototype.onMouseDown = function(a) {
            this.mouse.originalEvent = a || window.event, d.AUTO_PREVENT_DEFAULT && this.mouse.originalEvent.preventDefault();
            for (var b = this.interactiveItems.length, c = 0; b > c; c++) {
                var e = this.interactiveItems[c];
                if ((e.mousedown || e.click) && (e.__mouseIsDown = !0, e.__hit = this.hitTest(e, this.mouse), e.__hit && (e.mousedown && e.mousedown(this.mouse), e.__isDown = !0, !e.interactiveChildren))) break
            }
        }, d.InteractionManager.prototype.onMouseOut = function() {
            var a = this.interactiveItems.length;
            this.interactionDOMElement.style.cursor = "inherit";
            for (var b = 0; a > b; b++) {
                var c = this.interactiveItems[b];
                c.__isOver && (this.mouse.target = c, c.mouseout && c.mouseout(this.mouse), c.__isOver = !1)
            }
            this.mouseOut = !0, this.mouse.global.x = -1e4, this.mouse.global.y = -1e4
        }, d.InteractionManager.prototype.onMouseUp = function(a) {
            this.mouse.originalEvent = a || window.event;
            for (var b = this.interactiveItems.length, c = !1, d = 0; b > d; d++) {
                var e = this.interactiveItems[d];
                e.__hit = this.hitTest(e, this.mouse), e.__hit && !c ? (e.mouseup && e.mouseup(this.mouse), e.__isDown && e.click && e.click(this.mouse), e.interactiveChildren || (c = !0)) : e.__isDown && e.mouseupoutside && e.mouseupoutside(this.mouse), e.__isDown = !1
            }
        }, d.InteractionManager.prototype.hitTest = function(a, b) {
            var c = b.global;
            if (!a.worldVisible) return !1;
            var e = a instanceof d.Sprite,
                f = a.worldTransform,
                g = f.a,
                h = f.b,
                i = f.tx,
                j = f.c,
                k = f.d,
                l = f.ty,
                m = 1 / (g * k + h * -j),
                n = k * m * c.x + -h * m * c.y + (l * h - i * k) * m,
                o = g * m * c.y + -j * m * c.x + (-l * g + i * j) * m;
            if (b.target = a, a.hitArea && a.hitArea.contains) return a.hitArea.contains(n, o) ? (b.target = a, !0) : !1;
            if (e) {
                var p, q = a.texture.frame.width,
                    r = a.texture.frame.height,
                    s = -q * a.anchor.x;
                if (n > s && s + q > n && (p = -r * a.anchor.y, o > p && p + r > o)) return b.target = a, !0
            }
            for (var t = a.children.length, u = 0; t > u; u++) {
                var v = a.children[u],
                    w = this.hitTest(v, b);
                if (w) return b.target = a, !0
            }
            return !1
        }, d.InteractionManager.prototype.onTouchMove = function(a) {
            var b, c = this.interactionDOMElement.getBoundingClientRect(),
                d = a.changedTouches,
                e = 0;
            for (e = 0; e < d.length; e++) {
                var f = d[e];
                b = this.touchs[f.identifier], b.originalEvent = a || window.event, b.global.x = (f.clientX - c.left) * (this.target.width / c.width), b.global.y = (f.clientY - c.top) * (this.target.height / c.height), navigator.isCocoonJS && (b.global.x = f.clientX, b.global.y = f.clientY);
                for (var g = 0; g < this.interactiveItems.length; g++) {
                    var h = this.interactiveItems[g];
                    h.touchmove && h.__touchData[f.identifier] && h.touchmove(b)
                }
            }
        }, d.InteractionManager.prototype.onTouchStart = function(a) {
            var b = this.interactionDOMElement.getBoundingClientRect();
            d.AUTO_PREVENT_DEFAULT && a.preventDefault();
            for (var c = a.changedTouches, e = 0; e < c.length; e++) {
                var f = c[e],
                    g = this.pool.pop();
                g || (g = new d.InteractionData), g.originalEvent = a || window.event, this.touchs[f.identifier] = g, g.global.x = (f.clientX - b.left) * (this.target.width / b.width), g.global.y = (f.clientY - b.top) * (this.target.height / b.height), navigator.isCocoonJS && (g.global.x = f.clientX, g.global.y = f.clientY);
                for (var h = this.interactiveItems.length, i = 0; h > i; i++) {
                    var j = this.interactiveItems[i];
                    if ((j.touchstart || j.tap) && (j.__hit = this.hitTest(j, g), j.__hit && (j.touchstart && j.touchstart(g), j.__isDown = !0, j.__touchData = j.__touchData || {}, j.__touchData[f.identifier] = g, !j.interactiveChildren))) break
                }
            }
        }, d.InteractionManager.prototype.onTouchEnd = function(a) {
            for (var b = this.interactionDOMElement.getBoundingClientRect(), c = a.changedTouches, d = 0; d < c.length; d++) {
                var e = c[d],
                    f = this.touchs[e.identifier],
                    g = !1;
                f.global.x = (e.clientX - b.left) * (this.target.width / b.width), f.global.y = (e.clientY - b.top) * (this.target.height / b.height), navigator.isCocoonJS && (f.global.x = e.clientX, f.global.y = e.clientY);
                for (var h = this.interactiveItems.length, i = 0; h > i; i++) {
                    var j = this.interactiveItems[i];
                    j.__touchData && j.__touchData[e.identifier] && (j.__hit = this.hitTest(j, j.__touchData[e.identifier]), f.originalEvent = a || window.event, (j.touchend || j.tap) && (j.__hit && !g ? (j.touchend && j.touchend(f), j.__isDown && j.tap && j.tap(f), j.interactiveChildren || (g = !0)) : j.__isDown && j.touchendoutside && j.touchendoutside(f), j.__isDown = !1), j.__touchData[e.identifier] = null)
                }
                this.pool.push(f), this.touchs[e.identifier] = null
            }
        }, d.Stage = function(a) {
            d.DisplayObjectContainer.call(this), this.worldTransform = new d.Matrix, this.interactive = !0, this.interactionManager = new d.InteractionManager(this), this.dirty = !0, this.stage = this, this.stage.hitArea = new d.Rectangle(0, 0, 1e5, 1e5), this.setBackgroundColor(a)
        }, d.Stage.prototype = Object.create(d.DisplayObjectContainer.prototype), d.Stage.prototype.constructor = d.Stage, d.Stage.prototype.setInteractionDelegate = function(a) {
            this.interactionManager.setTargetDomElement(a)
        }, d.Stage.prototype.updateTransform = function() {
            this.worldAlpha = 1;
            for (var a = 0, b = this.children.length; b > a; a++) this.children[a].updateTransform();
            this.dirty && (this.dirty = !1, this.interactionManager.dirty = !0), this.interactive && this.interactionManager.update()
        }, d.Stage.prototype.setBackgroundColor = function(a) {
            this.backgroundColor = a || 0, this.backgroundColorSplit = d.hex2rgb(this.backgroundColor);
            var b = this.backgroundColor.toString(16);
            b = "000000".substr(0, 6 - b.length) + b, this.backgroundColorString = "#" + b
        }, d.Stage.prototype.getMousePosition = function() {
            return this.interactionManager.mouse.global
        };
        for (var e = 0, f = ["ms", "moz", "webkit", "o"], h = 0; h < f.length && !window.requestAnimationFrame; ++h) window.requestAnimationFrame = window[f[h] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[f[h] + "CancelAnimationFrame"] || window[f[h] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(a) {
            var b = (new Date).getTime(),
                c = Math.max(0, 16 - (b - e)),
                d = window.setTimeout(function() {
                    a(b + c)
                }, c);
            return e = b + c, d
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        }), window.requestAnimFrame = window.requestAnimationFrame, d.hex2rgb = function(a) {
            return [(a >> 16 & 255) / 255, (a >> 8 & 255) / 255, (255 & a) / 255]
        }, d.rgb2hex = function(a) {
            return (255 * a[0] << 16) + (255 * a[1] << 8) + 255 * a[2]
        }, "function" != typeof Function.prototype.bind && (Function.prototype.bind = function() {
            var a = Array.prototype.slice;
            return function(b) {
                function c() {
                    var f = e.concat(a.call(arguments));
                    d.apply(this instanceof c ? this : b, f)
                }
                var d = this,
                    e = a.call(arguments, 1);
                if ("function" != typeof d) throw new TypeError;
                return c.prototype = function f(a) {
                    return a && (f.prototype = a), this instanceof f ? void 0 : new f
                }(d.prototype), c
            }
        }()), d.AjaxRequest = function() {
            var a = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Microsoft.XMLHTTP"];
            if (!window.ActiveXObject) return window.XMLHttpRequest ? new window.XMLHttpRequest : !1;
            for (var b = 0; b < a.length; b++) try {
                return new window.ActiveXObject(a[b])
            } catch (c) {}
        }, d.canUseNewCanvasBlendModes = function() {
            var a = document.createElement("canvas");
            a.width = 1, a.height = 1;
            var b = a.getContext("2d");
            return b.fillStyle = "#000", b.fillRect(0, 0, 1, 1), b.globalCompositeOperation = "multiply", b.fillStyle = "#fff", b.fillRect(0, 0, 1, 1), 0 === b.getImageData(0, 0, 1, 1).data[0]
        }, d.getNextPowerOfTwo = function(a) {
            if (a > 0 && 0 === (a & a - 1)) return a;
            for (var b = 1; a > b;) b <<= 1;
            return b
        }, d.EventTarget = function() {
            var a = {};
            this.addEventListener = this.on = function(b, c) {
                void 0 === a[b] && (a[b] = []), -1 === a[b].indexOf(c) && a[b].push(c)
            }, this.dispatchEvent = this.emit = function(b) {
                if (a[b.type] && a[b.type].length)
                    for (var c = 0, d = a[b.type].length; d > c; c++) a[b.type][c](b)
            }, this.removeEventListener = this.off = function(b, c) {
                var d = a[b].indexOf(c); - 1 !== d && a[b].splice(d, 1)
            }, this.removeAllEventListeners = function(b) {
                var c = a[b];
                c && (c.length = 0)
            }
        }, d.autoDetectRenderer = function(a, b, c, e, f) {
            a || (a = 800), b || (b = 600);
            var g = function() {
                try {
                    var a = document.createElement("canvas");
                    return !!window.WebGLRenderingContext && (a.getContext("webgl") || a.getContext("experimental-webgl"))
                } catch (b) {
                    return !1
                }
            }();
            return g ? new d.WebGLRenderer(a, b, c, e, f) : new d.CanvasRenderer(a, b, c, e)
        }, d.autoDetectRecommendedRenderer = function(a, b, c, e, f) {
            a || (a = 800), b || (b = 600);
            var g = function() {
                    try {
                        var a = document.createElement("canvas");
                        return !!window.WebGLRenderingContext && (a.getContext("webgl") || a.getContext("experimental-webgl"))
                    } catch (b) {
                        return !1
                    }
                }(),
                h = /Android/i.test(navigator.userAgent);
            return g && !h ? new d.WebGLRenderer(a, b, c, e, f) : new d.CanvasRenderer(a, b, c, e)
        }, d.PolyK = {}, d.PolyK.Triangulate = function(a) {
            var b = !0,
                c = a.length >> 1;
            if (3 > c) return [];
            for (var e = [], f = [], g = 0; c > g; g++) f.push(g);
            g = 0;
            for (var h = c; h > 3;) {
                var i = f[(g + 0) % h],
                    j = f[(g + 1) % h],
                    k = f[(g + 2) % h],
                    l = a[2 * i],
                    m = a[2 * i + 1],
                    n = a[2 * j],
                    o = a[2 * j + 1],
                    p = a[2 * k],
                    q = a[2 * k + 1],
                    r = !1;
                if (d.PolyK._convex(l, m, n, o, p, q, b)) {
                    r = !0;
                    for (var s = 0; h > s; s++) {
                        var t = f[s];
                        if (t !== i && t !== j && t !== k && d.PolyK._PointInTriangle(a[2 * t], a[2 * t + 1], l, m, n, o, p, q)) {
                            r = !1;
                            break
                        }
                    }
                }
                if (r) e.push(i, j, k), f.splice((g + 1) % h, 1), h--, g = 0;
                else if (g++ > 3 * h) {
                    if (!b) return window.console.log("PIXI Warning: shape too complex to fill"), [];
                    for (e = [], f = [], g = 0; c > g; g++) f.push(g);
                    g = 0, h = c, b = !1
                }
            }
            return e.push(f[0], f[1], f[2]), e
        }, d.PolyK._PointInTriangle = function(a, b, c, d, e, f, g, h) {
            var i = g - c,
                j = h - d,
                k = e - c,
                l = f - d,
                m = a - c,
                n = b - d,
                o = i * i + j * j,
                p = i * k + j * l,
                q = i * m + j * n,
                r = k * k + l * l,
                s = k * m + l * n,
                t = 1 / (o * r - p * p),
                u = (r * q - p * s) * t,
                v = (o * s - p * q) * t;
            return u >= 0 && v >= 0 && 1 > u + v
        }, d.PolyK._convex = function(a, b, c, d, e, f, g) {
            return (b - d) * (e - c) + (c - a) * (f - d) >= 0 === g
        }, d.initDefaultShaders = function() {}, d.CompileVertexShader = function(a, b) {
            return d._CompileShader(a, b, a.VERTEX_SHADER)
        }, d.CompileFragmentShader = function(a, b) {
            return d._CompileShader(a, b, a.FRAGMENT_SHADER)
        }, d._CompileShader = function(a, b, c) {
            var d = b.join("\n"),
                e = a.createShader(c);
            return a.shaderSource(e, d), a.compileShader(e), a.getShaderParameter(e, a.COMPILE_STATUS) ? e : (window.console.log(a.getShaderInfoLog(e)), null)
        }, d.compileProgram = function(a, b, c) {
            var e = d.CompileFragmentShader(a, c),
                f = d.CompileVertexShader(a, b),
                g = a.createProgram();
            return a.attachShader(g, f), a.attachShader(g, e), a.linkProgram(g), a.getProgramParameter(g, a.LINK_STATUS) || window.console.log("Could not initialise shaders"), g
        }, d.PixiShader = function(a) {
            this.gl = a, this.program = null, this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"], this.textureCount = 0, this.attributes = [], this.init()
        }, d.PixiShader.prototype.init = function() {
            var a = this.gl,
                b = d.compileProgram(a, this.vertexSrc || d.PixiShader.defaultVertexSrc, this.fragmentSrc);
            a.useProgram(b), this.uSampler = a.getUniformLocation(b, "uSampler"), this.projectionVector = a.getUniformLocation(b, "projectionVector"), this.offsetVector = a.getUniformLocation(b, "offsetVector"), this.dimensions = a.getUniformLocation(b, "dimensions"), this.aVertexPosition = a.getAttribLocation(b, "aVertexPosition"), this.aTextureCoord = a.getAttribLocation(b, "aTextureCoord"), this.colorAttribute = a.getAttribLocation(b, "aColor"), -1 === this.colorAttribute && (this.colorAttribute = 2), this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
            for (var c in this.uniforms) this.uniforms[c].uniformLocation = a.getUniformLocation(b, c);
            this.initUniforms(), this.program = b
        }, d.PixiShader.prototype.initUniforms = function() {
            this.textureCount = 1;
            var a, b = this.gl;
            for (var c in this.uniforms) {
                a = this.uniforms[c];
                var d = a.type;
                "sampler2D" === d ? (a._init = !1, null !== a.value && this.initSampler2D(a)) : "mat2" === d || "mat3" === d || "mat4" === d ? (a.glMatrix = !0, a.glValueLength = 1, "mat2" === d ? a.glFunc = b.uniformMatrix2fv : "mat3" === d ? a.glFunc = b.uniformMatrix3fv : "mat4" === d && (a.glFunc = b.uniformMatrix4fv)) : (a.glFunc = b["uniform" + d], a.glValueLength = "2f" === d || "2i" === d ? 2 : "3f" === d || "3i" === d ? 3 : "4f" === d || "4i" === d ? 4 : 1)
            }
        }, d.PixiShader.prototype.initSampler2D = function(a) {
            if (a.value && a.value.baseTexture && a.value.baseTexture.hasLoaded) {
                var b = this.gl;
                if (b.activeTexture(b["TEXTURE" + this.textureCount]), b.bindTexture(b.TEXTURE_2D, a.value.baseTexture._glTextures[b.id]), a.textureData) {
                    var c = a.textureData,
                        d = c.magFilter ? c.magFilter : b.LINEAR,
                        e = c.minFilter ? c.minFilter : b.LINEAR,
                        f = c.wrapS ? c.wrapS : b.CLAMP_TO_EDGE,
                        g = c.wrapT ? c.wrapT : b.CLAMP_TO_EDGE,
                        h = c.luminance ? b.LUMINANCE : b.RGBA;
                    if (c.repeat && (f = b.REPEAT, g = b.REPEAT), b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !!c.flipY), c.width) {
                        var i = c.width ? c.width : 512,
                            j = c.height ? c.height : 2,
                            k = c.border ? c.border : 0;
                        b.texImage2D(b.TEXTURE_2D, 0, h, i, j, k, h, b.UNSIGNED_BYTE, null)
                    } else b.texImage2D(b.TEXTURE_2D, 0, h, b.RGBA, b.UNSIGNED_BYTE, a.value.baseTexture.source);
                    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, d), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, e), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, f), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, g)
                }
                b.uniform1i(a.uniformLocation, this.textureCount), a._init = !0, this.textureCount++
            }
        }, d.PixiShader.prototype.syncUniforms = function() {
            this.textureCount = 1;
            var a, b = this.gl;
            for (var c in this.uniforms) a = this.uniforms[c], 1 === a.glValueLength ? a.glMatrix === !0 ? a.glFunc.call(b, a.uniformLocation, a.transpose, a.value) : a.glFunc.call(b, a.uniformLocation, a.value) : 2 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y) : 3 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z) : 4 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z, a.value.w) : "sampler2D" === a.type && (a._init ? (b.activeTexture(b["TEXTURE" + this.textureCount]), b.bindTexture(b.TEXTURE_2D, a.value.baseTexture._glTextures[b.id] || d.createWebGLTexture(a.value.baseTexture, b)), b.uniform1i(a.uniformLocation, this.textureCount), this.textureCount++) : this.initSampler2D(a))
        }, d.PixiShader.prototype.destroy = function() {
            this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attributes = null
        }, d.PixiShader.defaultVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec2 aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;", "   vColor = vec4(color * aColor.x, aColor.x);", "}"], d.PixiFastShader = function(a) {
            this.gl = a, this.program = null, this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform mat3 uMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   vec2 v;", "   vec2 sv = aVertexPosition * aScale;", "   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);", "   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);", "   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;", "   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"], this.textureCount = 0, this.init()
        }, d.PixiFastShader.prototype.init = function() {
            var a = this.gl,
                b = d.compileProgram(a, this.vertexSrc, this.fragmentSrc);
            a.useProgram(b), this.uSampler = a.getUniformLocation(b, "uSampler"), this.projectionVector = a.getUniformLocation(b, "projectionVector"), this.offsetVector = a.getUniformLocation(b, "offsetVector"), this.dimensions = a.getUniformLocation(b, "dimensions"), this.uMatrix = a.getUniformLocation(b, "uMatrix"), this.aVertexPosition = a.getAttribLocation(b, "aVertexPosition"), this.aPositionCoord = a.getAttribLocation(b, "aPositionCoord"), this.aScale = a.getAttribLocation(b, "aScale"), this.aRotation = a.getAttribLocation(b, "aRotation"), this.aTextureCoord = a.getAttribLocation(b, "aTextureCoord"), this.colorAttribute = a.getAttribLocation(b, "aColor"), -1 === this.colorAttribute && (this.colorAttribute = 2), this.attributes = [this.aVertexPosition, this.aPositionCoord, this.aScale, this.aRotation, this.aTextureCoord, this.colorAttribute], this.program = b
        }, d.PixiFastShader.prototype.destroy = function() {
            this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attributes = null
        }, d.StripShader = function() {
            this.program = null, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform float alpha;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));", "   gl_FragColor = gl_FragColor * alpha;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "varying vec2 vTextureCoord;", "uniform vec2 offsetVector;", "varying float vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition, 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / projectionVector.y + 1.0 , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"]
        }, d.StripShader.prototype.init = function() {
            var a = d.gl,
                b = d.compileProgram(a, this.vertexSrc, this.fragmentSrc);
            a.useProgram(b), this.uSampler = a.getUniformLocation(b, "uSampler"), this.projectionVector = a.getUniformLocation(b, "projectionVector"), this.offsetVector = a.getUniformLocation(b, "offsetVector"), this.colorAttribute = a.getAttribLocation(b, "aColor"), this.aVertexPosition = a.getAttribLocation(b, "aVertexPosition"), this.aTextureCoord = a.getAttribLocation(b, "aTextureCoord"), this.translationMatrix = a.getUniformLocation(b, "translationMatrix"), this.alpha = a.getUniformLocation(b, "alpha"), this.program = b
        }, d.PrimitiveShader = function(a) {
            this.gl = a, this.program = null, this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform float alpha;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"], this.init()
        }, d.PrimitiveShader.prototype.init = function() {
            var a = this.gl,
                b = d.compileProgram(a, this.vertexSrc, this.fragmentSrc);
            a.useProgram(b), this.projectionVector = a.getUniformLocation(b, "projectionVector"), this.offsetVector = a.getUniformLocation(b, "offsetVector"), this.tintColor = a.getUniformLocation(b, "tint"), this.aVertexPosition = a.getAttribLocation(b, "aVertexPosition"), this.colorAttribute = a.getAttribLocation(b, "aColor"), this.attributes = [this.aVertexPosition, this.colorAttribute], this.translationMatrix = a.getUniformLocation(b, "translationMatrix"), this.alpha = a.getUniformLocation(b, "alpha"), this.program = b
        }, d.PrimitiveShader.prototype.destroy = function() {
            this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attribute = null
        }, d.WebGLGraphics = function() {}, d.WebGLGraphics.renderGraphics = function(a, b) {
            var c = b.gl,
                e = b.projection,
                f = b.offset,
                g = b.shaderManager.primitiveShader;
            a._webGL[c.id] || (a._webGL[c.id] = {
                points: [],
                indices: [],
                lastIndex: 0,
                buffer: c.createBuffer(),
                indexBuffer: c.createBuffer()
            });
            var h = a._webGL[c.id];
            a.dirty && (a.dirty = !1, a.clearDirty && (a.clearDirty = !1, h.lastIndex = 0, h.points = [], h.indices = []), d.WebGLGraphics.updateGraphics(a, c)), b.shaderManager.activatePrimitiveShader(), c.blendFunc(c.ONE, c.ONE_MINUS_SRC_ALPHA), c.uniformMatrix3fv(g.translationMatrix, !1, a.worldTransform.toArray(!0)), c.uniform2f(g.projectionVector, e.x, -e.y), c.uniform2f(g.offsetVector, -f.x, -f.y), c.uniform3fv(g.tintColor, d.hex2rgb(a.tint)), c.uniform1f(g.alpha, a.worldAlpha), c.bindBuffer(c.ARRAY_BUFFER, h.buffer), c.vertexAttribPointer(g.aVertexPosition, 2, c.FLOAT, !1, 24, 0), c.vertexAttribPointer(g.colorAttribute, 4, c.FLOAT, !1, 24, 8), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, h.indexBuffer), c.drawElements(c.TRIANGLE_STRIP, h.indices.length, c.UNSIGNED_SHORT, 0), b.shaderManager.deactivatePrimitiveShader()
        }, d.WebGLGraphics.updateGraphics = function(a, b) {
            for (var c = a._webGL[b.id], e = c.lastIndex; e < a.graphicsData.length; e++) {
                var f = a.graphicsData[e];
                f.type === d.Graphics.POLY ? (f.fill && f.points.length > 3 && d.WebGLGraphics.buildPoly(f, c), f.lineWidth > 0 && d.WebGLGraphics.buildLine(f, c)) : f.type === d.Graphics.RECT ? d.WebGLGraphics.buildRectangle(f, c) : (f.type === d.Graphics.CIRC || f.type === d.Graphics.ELIP) && d.WebGLGraphics.buildCircle(f, c)
            }
            c.lastIndex = a.graphicsData.length, c.glPoints = new Float32Array(c.points), b.bindBuffer(b.ARRAY_BUFFER, c.buffer), b.bufferData(b.ARRAY_BUFFER, c.glPoints, b.STATIC_DRAW), c.glIndicies = new Uint16Array(c.indices), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, c.indexBuffer), b.bufferData(b.ELEMENT_ARRAY_BUFFER, c.glIndicies, b.STATIC_DRAW)
        }, d.WebGLGraphics.buildRectangle = function(a, b) {
            var c = a.points,
                e = c[0],
                f = c[1],
                g = c[2],
                h = c[3];
            if (a.fill) {
                var i = d.hex2rgb(a.fillColor),
                    j = a.fillAlpha,
                    k = i[0] * j,
                    l = i[1] * j,
                    m = i[2] * j,
                    n = b.points,
                    o = b.indices,
                    p = n.length / 6;
                n.push(e, f), n.push(k, l, m, j), n.push(e + g, f), n.push(k, l, m, j), n.push(e, f + h), n.push(k, l, m, j), n.push(e + g, f + h), n.push(k, l, m, j), o.push(p, p, p + 1, p + 2, p + 3, p + 3)
            }
            if (a.lineWidth) {
                var q = a.points;
                a.points = [e, f, e + g, f, e + g, f + h, e, f + h, e, f], d.WebGLGraphics.buildLine(a, b), a.points = q
            }
        }, d.WebGLGraphics.buildCircle = function(a, b) {
            var c = a.points,
                e = c[0],
                f = c[1],
                g = c[2],
                h = c[3],
                i = 40,
                j = 2 * Math.PI / i,
                k = 0;
            if (a.fill) {
                var l = d.hex2rgb(a.fillColor),
                    m = a.fillAlpha,
                    n = l[0] * m,
                    o = l[1] * m,
                    p = l[2] * m,
                    q = b.points,
                    r = b.indices,
                    s = q.length / 6;
                for (r.push(s), k = 0; i + 1 > k; k++) q.push(e, f, n, o, p, m), q.push(e + Math.sin(j * k) * g, f + Math.cos(j * k) * h, n, o, p, m), r.push(s++, s++);
                r.push(s - 1)
            }
            if (a.lineWidth) {
                var t = a.points;
                for (a.points = [], k = 0; i + 1 > k; k++) a.points.push(e + Math.sin(j * k) * g, f + Math.cos(j * k) * h);
                d.WebGLGraphics.buildLine(a, b), a.points = t
            }
        }, d.WebGLGraphics.buildLine = function(a, b) {
            var c = 0,
                e = a.points;
            if (0 !== e.length) {
                if (a.lineWidth % 2)
                    for (c = 0; c < e.length; c++) e[c] += .5;
                var f = new d.Point(e[0], e[1]),
                    g = new d.Point(e[e.length - 2], e[e.length - 1]);
                if (f.x === g.x && f.y === g.y) {
                    e.pop(), e.pop(), g = new d.Point(e[e.length - 2], e[e.length - 1]);
                    var h = g.x + .5 * (f.x - g.x),
                        i = g.y + .5 * (f.y - g.y);
                    e.unshift(h, i), e.push(h, i)
                }
                var j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G = b.points,
                    H = b.indices,
                    I = e.length / 2,
                    J = e.length,
                    K = G.length / 6,
                    L = a.lineWidth / 2,
                    M = d.hex2rgb(a.lineColor),
                    N = a.lineAlpha,
                    O = M[0] * N,
                    P = M[1] * N,
                    Q = M[2] * N;
                for (l = e[0], m = e[1], n = e[2], o = e[3], r = -(m - o), s = l - n, F = Math.sqrt(r * r + s * s), r /= F, s /= F, r *= L, s *= L, G.push(l - r, m - s, O, P, Q, N), G.push(l + r, m + s, O, P, Q, N), c = 1; I - 1 > c; c++) l = e[2 * (c - 1)], m = e[2 * (c - 1) + 1], n = e[2 * c], o = e[2 * c + 1], p = e[2 * (c + 1)], q = e[2 * (c + 1) + 1], r = -(m - o), s = l - n, F = Math.sqrt(r * r + s * s), r /= F, s /= F, r *= L, s *= L, t = -(o - q), u = n - p, F = Math.sqrt(t * t + u * u), t /= F, u /= F, t *= L, u *= L, x = -s + m - (-s + o), y = -r + n - (-r + l), z = (-r + l) * (-s + o) - (-r + n) * (-s + m), A = -u + q - (-u + o), B = -t + n - (-t + p), C = (-t + p) * (-u + o) - (-t + n) * (-u + q), D = x * B - A * y, Math.abs(D) < .1 ? (D += 10.1, G.push(n - r, o - s, O, P, Q, N), G.push(n + r, o + s, O, P, Q, N)) : (j = (y * C - B * z) / D, k = (A * z - x * C) / D, E = (j - n) * (j - n) + (k - o) + (k - o), E > 19600 ? (v = r - t, w = s - u, F = Math.sqrt(v * v + w * w), v /= F, w /= F, v *= L, w *= L, G.push(n - v, o - w), G.push(O, P, Q, N), G.push(n + v, o + w), G.push(O, P, Q, N), G.push(n - v, o - w), G.push(O, P, Q, N), J++) : (G.push(j, k), G.push(O, P, Q, N), G.push(n - (j - n), o - (k - o)), G.push(O, P, Q, N)));
                for (l = e[2 * (I - 2)], m = e[2 * (I - 2) + 1], n = e[2 * (I - 1)], o = e[2 * (I - 1) + 1], r = -(m - o), s = l - n, F = Math.sqrt(r * r + s * s), r /= F, s /= F, r *= L, s *= L, G.push(n - r, o - s), G.push(O, P, Q, N), G.push(n + r, o + s), G.push(O, P, Q, N), H.push(K), c = 0; J > c; c++) H.push(K++);
                H.push(K - 1)
            }
        }, d.WebGLGraphics.buildPoly = function(a, b) {
            var c = a.points;
            if (!(c.length < 6)) {
                var e = b.points,
                    f = b.indices,
                    g = c.length / 2,
                    h = d.hex2rgb(a.fillColor),
                    i = a.fillAlpha,
                    j = h[0] * i,
                    k = h[1] * i,
                    l = h[2] * i,
                    m = d.PolyK.Triangulate(c),
                    n = e.length / 6,
                    o = 0;
                for (o = 0; o < m.length; o += 3) f.push(m[o] + n), f.push(m[o] + n), f.push(m[o + 1] + n), f.push(m[o + 2] + n), f.push(m[o + 2] + n);
                for (o = 0; g > o; o++) e.push(c[2 * o], c[2 * o + 1], j, k, l, i)
            }
        }, d.glContexts = [], d.WebGLRenderer = function(a, b, c, e, f) {
            d.defaultRenderer || (d.defaultRenderer = this), this.type = d.WEBGL_RENDERER, this.transparent = !!e, this.width = a || 800, this.height = b || 600, this.view = c || document.createElement("canvas"), this.view.width = this.width, this.view.height = this.height, this.contextLost = this.handleContextLost.bind(this), this.contextRestoredLost = this.handleContextRestored.bind(this), this.view.addEventListener("webglcontextlost", this.contextLost, !1), this.view.addEventListener("webglcontextrestored", this.contextRestoredLost, !1), this.options = {
                alpha: this.transparent,
                antialias: !!f,
                premultipliedAlpha: !!e,
                stencil: !0
            };
            try {
                this.gl = this.view.getContext("experimental-webgl", this.options)
            } catch (g) {
                try {
                    this.gl = this.view.getContext("webgl", this.options)
                } catch (h) {
                    throw new Error(" This browser does not support webGL. Try using the canvas renderer" + this)
                }
            }
            var i = this.gl;
            this.glContextId = i.id = d.WebGLRenderer.glContextId++, d.glContexts[this.glContextId] = i, d.blendModesWebGL || (d.blendModesWebGL = [], d.blendModesWebGL[d.blendModes.NORMAL] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.ADD] = [i.SRC_ALPHA, i.DST_ALPHA], d.blendModesWebGL[d.blendModes.MULTIPLY] = [i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.SCREEN] = [i.SRC_ALPHA, i.ONE], d.blendModesWebGL[d.blendModes.OVERLAY] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.DARKEN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.LIGHTEN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.COLOR_DODGE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.COLOR_BURN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.HARD_LIGHT] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.SOFT_LIGHT] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.DIFFERENCE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.EXCLUSION] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.HUE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.SATURATION] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.COLOR] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.LUMINOSITY] = [i.ONE, i.ONE_MINUS_SRC_ALPHA]), this.projection = new d.Point, this.projection.x = this.width / 2, this.projection.y = -this.height / 2, this.offset = new d.Point(0, 0), this.resize(this.width, this.height), this.contextLost = !1, this.shaderManager = new d.WebGLShaderManager(i), this.spriteBatch = new d.WebGLSpriteBatch(i), this.maskManager = new d.WebGLMaskManager(i), this.filterManager = new d.WebGLFilterManager(i, this.transparent), this.renderSession = {}, this.renderSession.gl = this.gl, this.renderSession.drawCount = 0, this.renderSession.shaderManager = this.shaderManager, this.renderSession.maskManager = this.maskManager, this.renderSession.filterManager = this.filterManager, this.renderSession.spriteBatch = this.spriteBatch, this.renderSession.renderer = this, i.useProgram(this.shaderManager.defaultShader.program), i.disable(i.DEPTH_TEST), i.disable(i.CULL_FACE), i.enable(i.BLEND), i.colorMask(!0, !0, !0, this.transparent)
        }, d.WebGLRenderer.prototype.constructor = d.WebGLRenderer, d.WebGLRenderer.prototype.render = function(a) {
            if (!this.contextLost) {
                this.__stage !== a && (a.interactive && a.interactionManager.removeEvents(), this.__stage = a), d.WebGLRenderer.updateTextures(), a.updateTransform(), a._interactive && (a._interactiveEventsAdded || (a._interactiveEventsAdded = !0, a.interactionManager.setTarget(this)));
                var b = this.gl;
                b.viewport(0, 0, this.width, this.height), b.bindFramebuffer(b.FRAMEBUFFER, null), this.transparent ? b.clearColor(0, 0, 0, 0) : b.clearColor(a.backgroundColorSplit[0], a.backgroundColorSplit[1], a.backgroundColorSplit[2], 1), b.clear(b.COLOR_BUFFER_BIT), this.renderDisplayObject(a, this.projection), a.interactive ? a._interactiveEventsAdded || (a._interactiveEventsAdded = !0, a.interactionManager.setTarget(this)) : a._interactiveEventsAdded && (a._interactiveEventsAdded = !1, a.interactionManager.setTarget(this))
            }
        }, d.WebGLRenderer.prototype.renderDisplayObject = function(a, b, c) {
            this.renderSession.drawCount = 0, this.renderSession.currentBlendMode = 9999, this.renderSession.projection = b, this.renderSession.offset = this.offset, this.spriteBatch.begin(this.renderSession), this.filterManager.begin(this.renderSession, c), a._renderWebGL(this.renderSession), this.spriteBatch.end()
        }, d.WebGLRenderer.updateTextures = function() {
            var a = 0;
            for (a = 0; a < d.Texture.frameUpdates.length; a++) d.WebGLRenderer.updateTextureFrame(d.Texture.frameUpdates[a]);
            for (a = 0; a < d.texturesToDestroy.length; a++) d.WebGLRenderer.destroyTexture(d.texturesToDestroy[a]);
            d.texturesToUpdate.length = 0, d.texturesToDestroy.length = 0, d.Texture.frameUpdates.length = 0
        }, d.WebGLRenderer.destroyTexture = function(a) {
            for (var b = a._glTextures.length - 1; b >= 0; b--) {
                var c = a._glTextures[b],
                    e = d.glContexts[b];
                e && c && e.deleteTexture(c)
            }
            a._glTextures.length = 0
        }, d.WebGLRenderer.updateTextureFrame = function(a) {
            a.updateFrame = !1, a._updateWebGLuvs()
        }, d.WebGLRenderer.prototype.resize = function(a, b) {
            this.width = a, this.height = b, this.view.width = a, this.view.height = b, this.gl.viewport(0, 0, this.width, this.height), this.projection.x = this.width / 2, this.projection.y = -this.height / 2
        }, d.createWebGLTexture = function(a, b) {
            return a.hasLoaded && (a._glTextures[b.id] = b.createTexture(), b.bindTexture(b.TEXTURE_2D, a._glTextures[b.id]), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a.source), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, a.scaleMode === d.scaleModes.LINEAR ? b.LINEAR : b.NEAREST), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, a.scaleMode === d.scaleModes.LINEAR ? b.LINEAR : b.NEAREST), a._powerOf2 ? (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.REPEAT), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.REPEAT)) : (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE)), b.bindTexture(b.TEXTURE_2D, null)), a._glTextures[b.id]
        }, d.updateWebGLTexture = function(a, b) {
            a._glTextures[b.id] && (b.bindTexture(b.TEXTURE_2D, a._glTextures[b.id]), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a.source), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, a.scaleMode === d.scaleModes.LINEAR ? b.LINEAR : b.NEAREST), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, a.scaleMode === d.scaleModes.LINEAR ? b.LINEAR : b.NEAREST), a._powerOf2 ? (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.REPEAT), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.REPEAT)) : (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE)), b.bindTexture(b.TEXTURE_2D, null))
        }, d.WebGLRenderer.prototype.handleContextLost = function(a) {
            a.preventDefault(), this.contextLost = !0
        }, d.WebGLRenderer.prototype.handleContextRestored = function() {
            try {
                this.gl = this.view.getContext("experimental-webgl", this.options)
            } catch (a) {
                try {
                    this.gl = this.view.getContext("webgl", this.options)
                } catch (b) {
                    throw new Error(" This browser does not support webGL. Try using the canvas renderer" + this)
                }
            }
            var c = this.gl;
            c.id = d.WebGLRenderer.glContextId++, this.shaderManager.setContext(c), this.spriteBatch.setContext(c), this.maskManager.setContext(c), this.filterManager.setContext(c), this.renderSession.gl = this.gl, c.disable(c.DEPTH_TEST), c.disable(c.CULL_FACE), c.enable(c.BLEND), c.colorMask(!0, !0, !0, this.transparent), this.gl.viewport(0, 0, this.width, this.height);
            for (var e in d.TextureCache) {
                var f = d.TextureCache[e].baseTexture;
                f._glTextures = []
            }
            this.contextLost = !1
        }, d.WebGLRenderer.prototype.destroy = function() {
            this.view.removeEventListener("webglcontextlost", this.contextLost), this.view.removeEventListener("webglcontextrestored", this.contextRestoredLost), d.glContexts[this.glContextId] = null, this.projection = null, this.offset = null, this.shaderManager.destroy(), this.spriteBatch.destroy(), this.maskManager.destroy(), this.filterManager.destroy(), this.shaderManager = null, this.spriteBatch = null, this.maskManager = null, this.filterManager = null, this.gl = null, this.renderSession = null
        }, d.WebGLRenderer.glContextId = 0, d.WebGLMaskManager = function(a) {
            this.maskStack = [], this.maskPosition = 0, this.setContext(a)
        }, d.WebGLMaskManager.prototype.setContext = function(a) {
            this.gl = a
        }, d.WebGLMaskManager.prototype.pushMask = function(a, b) {
            var c = this.gl;
            0 === this.maskStack.length && (c.enable(c.STENCIL_TEST), c.stencilFunc(c.ALWAYS, 1, 1)), this.maskStack.push(a), c.colorMask(!1, !1, !1, !1), c.stencilOp(c.KEEP, c.KEEP, c.INCR), d.WebGLGraphics.renderGraphics(a, b), c.colorMask(!0, !0, !0, !0), c.stencilFunc(c.NOTEQUAL, 0, this.maskStack.length), c.stencilOp(c.KEEP, c.KEEP, c.KEEP)
        }, d.WebGLMaskManager.prototype.popMask = function(a) {
            var b = this.gl,
                c = this.maskStack.pop();
            c && (b.colorMask(!1, !1, !1, !1), b.stencilOp(b.KEEP, b.KEEP, b.DECR), d.WebGLGraphics.renderGraphics(c, a), b.colorMask(!0, !0, !0, !0), b.stencilFunc(b.NOTEQUAL, 0, this.maskStack.length), b.stencilOp(b.KEEP, b.KEEP, b.KEEP)), 0 === this.maskStack.length && b.disable(b.STENCIL_TEST)
        }, d.WebGLMaskManager.prototype.destroy = function() {
            this.maskStack = null, this.gl = null
        }, d.WebGLShaderManager = function(a) {
            this.maxAttibs = 10, this.attribState = [], this.tempAttribState = [];
            for (var b = 0; b < this.maxAttibs; b++) this.attribState[b] = !1;
            this.setContext(a)
        }, d.WebGLShaderManager.prototype.setContext = function(a) {
            this.gl = a, this.primitiveShader = new d.PrimitiveShader(a), this.defaultShader = new d.PixiShader(a), this.fastShader = new d.PixiFastShader(a), this.activateShader(this.defaultShader)
        }, d.WebGLShaderManager.prototype.setAttribs = function(a) {
            var b;
            for (b = 0; b < this.tempAttribState.length; b++) this.tempAttribState[b] = !1;
            for (b = 0; b < a.length; b++) {
                var c = a[b];
                this.tempAttribState[c] = !0
            }
            var d = this.gl;
            for (b = 0; b < this.attribState.length; b++) this.attribState[b] !== this.tempAttribState[b] && (this.attribState[b] = this.tempAttribState[b], this.tempAttribState[b] ? d.enableVertexAttribArray(b) : d.disableVertexAttribArray(b))
        }, d.WebGLShaderManager.prototype.activateShader = function(a) {
            this.currentShader = a, this.gl.useProgram(a.program), this.setAttribs(a.attributes)
        }, d.WebGLShaderManager.prototype.activatePrimitiveShader = function() {
            var a = this.gl;
            a.useProgram(this.primitiveShader.program), this.setAttribs(this.primitiveShader.attributes)
        }, d.WebGLShaderManager.prototype.deactivatePrimitiveShader = function() {
            var a = this.gl;
            a.useProgram(this.defaultShader.program), this.setAttribs(this.defaultShader.attributes)
        }, d.WebGLShaderManager.prototype.destroy = function() {
            this.attribState = null, this.tempAttribState = null, this.primitiveShader.destroy(), this.defaultShader.destroy(), this.fastShader.destroy(), this.gl = null
        }, d.WebGLSpriteBatch = function(a) {
            this.vertSize = 6, this.size = 2e3;
            var b = 4 * this.size * this.vertSize,
                c = 6 * this.size;
            this.vertices = new Float32Array(b), this.indices = new Uint16Array(c), this.lastIndexCount = 0;
            for (var d = 0, e = 0; c > d; d += 6, e += 4) this.indices[d + 0] = e + 0, this.indices[d + 1] = e + 1, this.indices[d + 2] = e + 2, this.indices[d + 3] = e + 0, this.indices[d + 4] = e + 2, this.indices[d + 5] = e + 3;
            this.drawing = !1, this.currentBatchSize = 0, this.currentBaseTexture = null, this.setContext(a)
        }, d.WebGLSpriteBatch.prototype.setContext = function(a) {
            this.gl = a, this.vertexBuffer = a.createBuffer(), this.indexBuffer = a.createBuffer(), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.bufferData(a.ARRAY_BUFFER, this.vertices, a.DYNAMIC_DRAW), this.currentBlendMode = 99999
        }, d.WebGLSpriteBatch.prototype.begin = function(a) {
            this.renderSession = a, this.shader = this.renderSession.shaderManager.defaultShader, this.start()
        }, d.WebGLSpriteBatch.prototype.end = function() {
            this.flush()
        }, d.WebGLSpriteBatch.prototype.render = function(a) {
            var b = a.texture;
            (b.baseTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size) && (this.flush(), this.currentBaseTexture = b.baseTexture), a.blendMode !== this.currentBlendMode && this.setBlendMode(a.blendMode);
            var c = a._uvs || a.texture._uvs;
            if (c) {
                var d, e, f, g, h = a.worldAlpha,
                    i = a.tint,
                    j = this.vertices,
                    k = a.anchor.x,
                    l = a.anchor.y;
                if (a.texture.trim) {
                    var m = a.texture.trim;
                    e = m.x - k * m.width, d = e + b.frame.width, g = m.y - l * m.height, f = g + b.frame.height
                } else d = b.frame.width * (1 - k), e = b.frame.width * -k, f = b.frame.height * (1 - l), g = b.frame.height * -l;
                var n = 4 * this.currentBatchSize * this.vertSize,
                    o = a.worldTransform,
                    p = o.a,
                    q = o.c,
                    r = o.b,
                    s = o.d,
                    t = o.tx,
                    u = o.ty;
                j[n++] = p * e + r * g + t, j[n++] = s * g + q * e + u, j[n++] = c.x0, j[n++] = c.y0, j[n++] = h, j[n++] = i, j[n++] = p * d + r * g + t, j[n++] = s * g + q * d + u, j[n++] = c.x1, j[n++] = c.y1, j[n++] = h, j[n++] = i, j[n++] = p * d + r * f + t, j[n++] = s * f + q * d + u, j[n++] = c.x2, j[n++] = c.y2, j[n++] = h, j[n++] = i, j[n++] = p * e + r * f + t, j[n++] = s * f + q * e + u, j[n++] = c.x3, j[n++] = c.y3, j[n++] = h, j[n++] = i, this.currentBatchSize++
            }
        }, d.WebGLSpriteBatch.prototype.renderTilingSprite = function(a) {
            var b = a.tilingTexture;
            (b.baseTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size) && (this.flush(), this.currentBaseTexture = b.baseTexture), a.blendMode !== this.currentBlendMode && this.setBlendMode(a.blendMode), a._uvs || (a._uvs = new d.TextureUvs);
            var c = a._uvs;
            a.tilePosition.x %= b.baseTexture.width * a.tileScaleOffset.x, a.tilePosition.y %= b.baseTexture.height * a.tileScaleOffset.y;
            var e = a.tilePosition.x / (b.baseTexture.width * a.tileScaleOffset.x),
                f = a.tilePosition.y / (b.baseTexture.height * a.tileScaleOffset.y),
                g = a.width / b.baseTexture.width / (a.tileScale.x * a.tileScaleOffset.x),
                h = a.height / b.baseTexture.height / (a.tileScale.y * a.tileScaleOffset.y);
            c.x0 = 0 - e, c.y0 = 0 - f, c.x1 = 1 * g - e, c.y1 = 0 - f, c.x2 = 1 * g - e, c.y2 = 1 * h - f, c.x3 = 0 - e, c.y3 = 1 * h - f;
            var i = a.worldAlpha,
                j = a.tint,
                k = this.vertices,
                l = a.width,
                m = a.height,
                n = a.anchor.x,
                o = a.anchor.y,
                p = l * (1 - n),
                q = l * -n,
                r = m * (1 - o),
                s = m * -o,
                t = 4 * this.currentBatchSize * this.vertSize,
                u = a.worldTransform,
                v = u.a,
                w = u.c,
                x = u.b,
                y = u.d,
                z = u.tx,
                A = u.ty;
            k[t++] = v * q + x * s + z, k[t++] = y * s + w * q + A, k[t++] = c.x0, k[t++] = c.y0, k[t++] = i, k[t++] = j, k[t++] = v * p + x * s + z, k[t++] = y * s + w * p + A, k[t++] = c.x1, k[t++] = c.y1, k[t++] = i, k[t++] = j, k[t++] = v * p + x * r + z, k[t++] = y * r + w * p + A, k[t++] = c.x2, k[t++] = c.y2, k[t++] = i, k[t++] = j, k[t++] = v * q + x * r + z, k[t++] = y * r + w * q + A, k[t++] = c.x3, k[t++] = c.y3, k[t++] = i, k[t++] = j, this.currentBatchSize++
        }, d.WebGLSpriteBatch.prototype.flush = function() {
            if (0 !== this.currentBatchSize) {
                var a = this.gl;
                if (a.bindTexture(a.TEXTURE_2D, this.currentBaseTexture._glTextures[a.id] || d.createWebGLTexture(this.currentBaseTexture, a)), this.currentBatchSize > .5 * this.size) a.bufferSubData(a.ARRAY_BUFFER, 0, this.vertices);
                else {
                    var b = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
                    a.bufferSubData(a.ARRAY_BUFFER, 0, b)
                }
                a.drawElements(a.TRIANGLES, 6 * this.currentBatchSize, a.UNSIGNED_SHORT, 0), this.currentBatchSize = 0, this.renderSession.drawCount++
            }
        }, d.WebGLSpriteBatch.prototype.stop = function() {
            this.flush()
        }, d.WebGLSpriteBatch.prototype.start = function() {
            var a = this.gl;
            a.activeTexture(a.TEXTURE0), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            var b = this.renderSession.projection;
            a.uniform2f(this.shader.projectionVector, b.x, b.y);
            var c = 4 * this.vertSize;
            a.vertexAttribPointer(this.shader.aVertexPosition, 2, a.FLOAT, !1, c, 0), a.vertexAttribPointer(this.shader.aTextureCoord, 2, a.FLOAT, !1, c, 8), a.vertexAttribPointer(this.shader.colorAttribute, 2, a.FLOAT, !1, c, 16), this.currentBlendMode !== d.blendModes.NORMAL && this.setBlendMode(d.blendModes.NORMAL)
        }, d.WebGLSpriteBatch.prototype.setBlendMode = function(a) {
            this.flush(), this.currentBlendMode = a;
            var b = d.blendModesWebGL[this.currentBlendMode];
            this.gl.blendFunc(b[0], b[1])
        }, d.WebGLSpriteBatch.prototype.destroy = function() {
            this.vertices = null, this.indices = null, this.gl.deleteBuffer(this.vertexBuffer), this.gl.deleteBuffer(this.indexBuffer), this.currentBaseTexture = null, this.gl = null
        }, d.WebGLFastSpriteBatch = function(a) {
            this.vertSize = 10, this.maxSize = 6e3, this.size = this.maxSize;
            var b = 4 * this.size * this.vertSize,
                c = 6 * this.maxSize;
            this.vertices = new Float32Array(b), this.indices = new Uint16Array(c), this.vertexBuffer = null, this.indexBuffer = null, this.lastIndexCount = 0;
            for (var d = 0, e = 0; c > d; d += 6, e += 4) this.indices[d + 0] = e + 0, this.indices[d + 1] = e + 1, this.indices[d + 2] = e + 2, this.indices[d + 3] = e + 0, this.indices[d + 4] = e + 2, this.indices[d + 5] = e + 3;
            this.drawing = !1, this.currentBatchSize = 0, this.currentBaseTexture = null, this.currentBlendMode = 0, this.renderSession = null, this.shader = null, this.matrix = null, this.setContext(a)
        }, d.WebGLFastSpriteBatch.prototype.setContext = function(a) {
            this.gl = a, this.vertexBuffer = a.createBuffer(), this.indexBuffer = a.createBuffer(), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.bufferData(a.ARRAY_BUFFER, this.vertices, a.DYNAMIC_DRAW), this.currentBlendMode = 99999
        }, d.WebGLFastSpriteBatch.prototype.begin = function(a, b) {
            this.renderSession = b, this.shader = this.renderSession.shaderManager.fastShader, this.matrix = a.worldTransform.toArray(!0), this.start()
        }, d.WebGLFastSpriteBatch.prototype.end = function() {
            this.flush()
        }, d.WebGLFastSpriteBatch.prototype.render = function(a) {
            var b = a.children,
                c = b[0];
            if (c.texture._uvs) {
                this.currentBaseTexture = c.texture.baseTexture, c.blendMode !== this.currentBlendMode && this.setBlendMode(c.blendMode);
                for (var d = 0, e = b.length; e > d; d++) this.renderSprite(b[d]);
                this.flush()
            }
        }, d.WebGLFastSpriteBatch.prototype.renderSprite = function(a) {
            if (a.visible && (a.texture.baseTexture === this.currentBaseTexture || (this.flush(), this.currentBaseTexture = a.texture.baseTexture, a.texture._uvs))) {
                var b, c, d, e, f, g, h, i, j = this.vertices;
                if (b = a.texture._uvs, c = a.texture.frame.width, d = a.texture.frame.height, a.texture.trim) {
                    var k = a.texture.trim;
                    f = k.x - a.anchor.x * k.width, e = f + a.texture.frame.width, h = k.y - a.anchor.y * k.height, g = h + a.texture.frame.height
                } else e = a.texture.frame.width * (1 - a.anchor.x), f = a.texture.frame.width * -a.anchor.x, g = a.texture.frame.height * (1 - a.anchor.y), h = a.texture.frame.height * -a.anchor.y;
                i = 4 * this.currentBatchSize * this.vertSize, j[i++] = f, j[i++] = h, j[i++] = a.position.x, j[i++] = a.position.y, j[i++] = a.scale.x, j[i++] = a.scale.y, j[i++] = a.rotation, j[i++] = b.x0, j[i++] = b.y1, j[i++] = a.alpha, j[i++] = e, j[i++] = h, j[i++] = a.position.x, j[i++] = a.position.y, j[i++] = a.scale.x, j[i++] = a.scale.y, j[i++] = a.rotation, j[i++] = b.x1, j[i++] = b.y1, j[i++] = a.alpha, j[i++] = e, j[i++] = g, j[i++] = a.position.x, j[i++] = a.position.y, j[i++] = a.scale.x, j[i++] = a.scale.y, j[i++] = a.rotation, j[i++] = b.x2, j[i++] = b.y2, j[i++] = a.alpha, j[i++] = f, j[i++] = g, j[i++] = a.position.x, j[i++] = a.position.y, j[i++] = a.scale.x, j[i++] = a.scale.y, j[i++] = a.rotation, j[i++] = b.x3, j[i++] = b.y3, j[i++] = a.alpha, this.currentBatchSize++, this.currentBatchSize >= this.size && this.flush()
            }
        }, d.WebGLFastSpriteBatch.prototype.flush = function() {
            if (0 !== this.currentBatchSize) {
                var a = this.gl;
                if (this.currentBaseTexture._glTextures[a.id] || d.createWebGLTexture(this.currentBaseTexture, a), a.bindTexture(a.TEXTURE_2D, this.currentBaseTexture._glTextures[a.id]), this.currentBatchSize > .5 * this.size) a.bufferSubData(a.ARRAY_BUFFER, 0, this.vertices);
                else {
                    var b = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
                    a.bufferSubData(a.ARRAY_BUFFER, 0, b)
                }
                a.drawElements(a.TRIANGLES, 6 * this.currentBatchSize, a.UNSIGNED_SHORT, 0), this.currentBatchSize = 0, this.renderSession.drawCount++
            }
        }, d.WebGLFastSpriteBatch.prototype.stop = function() {
            this.flush()
        }, d.WebGLFastSpriteBatch.prototype.start = function() {
            var a = this.gl;
            a.activeTexture(a.TEXTURE0), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            var b = this.renderSession.projection;
            a.uniform2f(this.shader.projectionVector, b.x, b.y), a.uniformMatrix3fv(this.shader.uMatrix, !1, this.matrix);
            var c = 4 * this.vertSize;
            a.vertexAttribPointer(this.shader.aVertexPosition, 2, a.FLOAT, !1, c, 0), a.vertexAttribPointer(this.shader.aPositionCoord, 2, a.FLOAT, !1, c, 8), a.vertexAttribPointer(this.shader.aScale, 2, a.FLOAT, !1, c, 16), a.vertexAttribPointer(this.shader.aRotation, 1, a.FLOAT, !1, c, 24), a.vertexAttribPointer(this.shader.aTextureCoord, 2, a.FLOAT, !1, c, 28), a.vertexAttribPointer(this.shader.colorAttribute, 1, a.FLOAT, !1, c, 36), this.currentBlendMode !== d.blendModes.NORMAL && this.setBlendMode(d.blendModes.NORMAL)
        }, d.WebGLFastSpriteBatch.prototype.setBlendMode = function(a) {
            this.flush(), this.currentBlendMode = a;
            var b = d.blendModesWebGL[this.currentBlendMode];
            this.gl.blendFunc(b[0], b[1])
        }, d.WebGLFilterManager = function(a, b) {
            this.transparent = b, this.filterStack = [], this.offsetX = 0, this.offsetY = 0, this.setContext(a)
        }, d.WebGLFilterManager.prototype.setContext = function(a) {
            this.gl = a, this.texturePool = [], this.initShaderBuffers()
        }, d.WebGLFilterManager.prototype.begin = function(a, b) {
            this.renderSession = a, this.defaultShader = a.shaderManager.defaultShader;
            var c = this.renderSession.projection;
            this.width = 2 * c.x, this.height = 2 * -c.y, this.buffer = b
        }, d.WebGLFilterManager.prototype.pushFilter = function(a) {
            var b = this.gl,
                c = this.renderSession.projection,
                e = this.renderSession.offset;
            a._filterArea = a.target.filterArea || a.target.getBounds(), this.filterStack.push(a);
            var f = a.filterPasses[0];
            this.offsetX += a._filterArea.x, this.offsetY += a._filterArea.y;
            var g = this.texturePool.pop();
            g ? g.resize(this.width, this.height) : g = new d.FilterTexture(this.gl, this.width, this.height), b.bindTexture(b.TEXTURE_2D, g.texture);
            var h = a._filterArea,
                i = f.padding;
            h.x -= i, h.y -= i, h.width += 2 * i, h.height += 2 * i, h.x < 0 && (h.x = 0), h.width > this.width && (h.width = this.width), h.y < 0 && (h.y = 0), h.height > this.height && (h.height = this.height), b.bindFramebuffer(b.FRAMEBUFFER, g.frameBuffer), b.viewport(0, 0, h.width, h.height), c.x = h.width / 2, c.y = -h.height / 2, e.x = -h.x, e.y = -h.y, b.uniform2f(this.defaultShader.projectionVector, h.width / 2, -h.height / 2), b.uniform2f(this.defaultShader.offsetVector, -h.x, -h.y), b.colorMask(!0, !0, !0, !0), b.clearColor(0, 0, 0, 0), b.clear(b.COLOR_BUFFER_BIT), a._glFilterTexture = g
        }, d.WebGLFilterManager.prototype.popFilter = function() {
            var a = this.gl,
                b = this.filterStack.pop(),
                c = b._filterArea,
                e = b._glFilterTexture,
                f = this.renderSession.projection,
                g = this.renderSession.offset;
            if (b.filterPasses.length > 1) {
                a.viewport(0, 0, c.width, c.height), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), this.vertexArray[0] = 0, this.vertexArray[1] = c.height, this.vertexArray[2] = c.width, this.vertexArray[3] = c.height, this.vertexArray[4] = 0, this.vertexArray[5] = 0, this.vertexArray[6] = c.width, this.vertexArray[7] = 0, a.bufferSubData(a.ARRAY_BUFFER, 0, this.vertexArray), a.bindBuffer(a.ARRAY_BUFFER, this.uvBuffer), this.uvArray[2] = c.width / this.width, this.uvArray[5] = c.height / this.height, this.uvArray[6] = c.width / this.width, this.uvArray[7] = c.height / this.height, a.bufferSubData(a.ARRAY_BUFFER, 0, this.uvArray);
                var h = e,
                    i = this.texturePool.pop();
                i || (i = new d.FilterTexture(this.gl, this.width, this.height)), i.resize(this.width, this.height), a.bindFramebuffer(a.FRAMEBUFFER, i.frameBuffer), a.clear(a.COLOR_BUFFER_BIT), a.disable(a.BLEND);
                for (var j = 0; j < b.filterPasses.length - 1; j++) {
                    var k = b.filterPasses[j];
                    a.bindFramebuffer(a.FRAMEBUFFER, i.frameBuffer), a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, h.texture), this.applyFilterPass(k, c, c.width, c.height);
                    var l = h;
                    h = i, i = l
                }
                a.enable(a.BLEND), e = h, this.texturePool.push(i)
            }
            var m = b.filterPasses[b.filterPasses.length - 1];
            this.offsetX -= c.x, this.offsetY -= c.y;
            var n = this.width,
                o = this.height,
                p = 0,
                q = 0,
                r = this.buffer;
            if (0 === this.filterStack.length) a.colorMask(!0, !0, !0, !0);
            else {
                var s = this.filterStack[this.filterStack.length - 1];
                c = s._filterArea, n = c.width, o = c.height, p = c.x, q = c.y, r = s._glFilterTexture.frameBuffer
            }
            f.x = n / 2, f.y = -o / 2, g.x = p, g.y = q, c = b._filterArea;
            var t = c.x - p,
                u = c.y - q;
            a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), this.vertexArray[0] = t, this.vertexArray[1] = u + c.height, this.vertexArray[2] = t + c.width, this.vertexArray[3] = u + c.height, this.vertexArray[4] = t, this.vertexArray[5] = u, this.vertexArray[6] = t + c.width, this.vertexArray[7] = u, a.bufferSubData(a.ARRAY_BUFFER, 0, this.vertexArray), a.bindBuffer(a.ARRAY_BUFFER, this.uvBuffer), this.uvArray[2] = c.width / this.width, this.uvArray[5] = c.height / this.height, this.uvArray[6] = c.width / this.width, this.uvArray[7] = c.height / this.height, a.bufferSubData(a.ARRAY_BUFFER, 0, this.uvArray), a.viewport(0, 0, n, o), a.bindFramebuffer(a.FRAMEBUFFER, r), a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, e.texture), this.applyFilterPass(m, c, n, o), a.useProgram(this.defaultShader.program), a.uniform2f(this.defaultShader.projectionVector, n / 2, -o / 2), a.uniform2f(this.defaultShader.offsetVector, -p, -q), this.texturePool.push(e), b._glFilterTexture = null
        }, d.WebGLFilterManager.prototype.applyFilterPass = function(a, b, c, e) {
            var f = this.gl,
                g = a.shaders[f.id];
            g || (g = new d.PixiShader(f), g.fragmentSrc = a.fragmentSrc, g.uniforms = a.uniforms, g.init(), a.shaders[f.id] = g), f.useProgram(g.program), f.uniform2f(g.projectionVector, c / 2, -e / 2), f.uniform2f(g.offsetVector, 0, 0), a.uniforms.dimensions && (a.uniforms.dimensions.value[0] = this.width, a.uniforms.dimensions.value[1] = this.height, a.uniforms.dimensions.value[2] = this.vertexArray[0], a.uniforms.dimensions.value[3] = this.vertexArray[5]), g.syncUniforms(), f.bindBuffer(f.ARRAY_BUFFER, this.vertexBuffer), f.vertexAttribPointer(g.aVertexPosition, 2, f.FLOAT, !1, 0, 0), f.bindBuffer(f.ARRAY_BUFFER, this.uvBuffer), f.vertexAttribPointer(g.aTextureCoord, 2, f.FLOAT, !1, 0, 0), f.bindBuffer(f.ARRAY_BUFFER, this.colorBuffer), f.vertexAttribPointer(g.colorAttribute, 2, f.FLOAT, !1, 0, 0), f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, this.indexBuffer), f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0), this.renderSession.drawCount++
        }, d.WebGLFilterManager.prototype.initShaderBuffers = function() {
            var a = this.gl;
            this.vertexBuffer = a.createBuffer(), this.uvBuffer = a.createBuffer(), this.colorBuffer = a.createBuffer(), this.indexBuffer = a.createBuffer(), this.vertexArray = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.bufferData(a.ARRAY_BUFFER, this.vertexArray, a.STATIC_DRAW), this.uvArray = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), a.bindBuffer(a.ARRAY_BUFFER, this.uvBuffer), a.bufferData(a.ARRAY_BUFFER, this.uvArray, a.STATIC_DRAW), this.colorArray = new Float32Array([1, 16777215, 1, 16777215, 1, 16777215, 1, 16777215]), a.bindBuffer(a.ARRAY_BUFFER, this.colorBuffer), a.bufferData(a.ARRAY_BUFFER, this.colorArray, a.STATIC_DRAW), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), a.bufferData(a.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 1, 3, 2]), a.STATIC_DRAW)
        }, d.WebGLFilterManager.prototype.destroy = function() {
            var a = this.gl;
            this.filterStack = null, this.offsetX = 0, this.offsetY = 0;
            for (var b = 0; b < this.texturePool.length; b++) this.texturePool.destroy();
            this.texturePool = null, a.deleteBuffer(this.vertexBuffer), a.deleteBuffer(this.uvBuffer), a.deleteBuffer(this.colorBuffer), a.deleteBuffer(this.indexBuffer)
        }, d.FilterTexture = function(a, b, c, e) {
            this.gl = a, this.frameBuffer = a.createFramebuffer(), this.texture = a.createTexture(), e = e || d.scaleModes.DEFAULT, a.bindTexture(a.TEXTURE_2D, this.texture), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, e === d.scaleModes.LINEAR ? a.LINEAR : a.NEAREST), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, e === d.scaleModes.LINEAR ? a.LINEAR : a.NEAREST), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.bindFramebuffer(a.FRAMEBUFFER, this.framebuffer), a.bindFramebuffer(a.FRAMEBUFFER, this.frameBuffer), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.texture, 0), this.renderBuffer = a.createRenderbuffer(), a.bindRenderbuffer(a.RENDERBUFFER, this.renderBuffer), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.RENDERBUFFER, this.renderBuffer), this.resize(b, c)
        }, d.FilterTexture.prototype.clear = function() {
            var a = this.gl;
            a.clearColor(0, 0, 0, 0), a.clear(a.COLOR_BUFFER_BIT)
        }, d.FilterTexture.prototype.resize = function(a, b) {
            if (this.width !== a || this.height !== b) {
                this.width = a, this.height = b;
                var c = this.gl;
                c.bindTexture(c.TEXTURE_2D, this.texture), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, a, b, 0, c.RGBA, c.UNSIGNED_BYTE, null), c.bindRenderbuffer(c.RENDERBUFFER, this.renderBuffer), c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_STENCIL, a, b)
            }
        }, d.FilterTexture.prototype.destroy = function() {
            var a = this.gl;
            a.deleteFramebuffer(this.frameBuffer), a.deleteTexture(this.texture), this.frameBuffer = null, this.texture = null
        }, d.CanvasMaskManager = function() {}, d.CanvasMaskManager.prototype.pushMask = function(a, b) {
            b.save();
            var c = a.alpha,
                e = a.worldTransform;
            b.setTransform(e.a, e.c, e.b, e.d, e.tx, e.ty), d.CanvasGraphics.renderGraphicsMask(a, b), b.clip(), a.worldAlpha = c
        }, d.CanvasMaskManager.prototype.popMask = function(a) {
            a.restore()
        }, d.CanvasTinter = function() {}, d.CanvasTinter.getTintedTexture = function(a, b) {
            var c = a.texture;
            b = d.CanvasTinter.roundColor(b);
            var e = "#" + ("00000" + (0 | b).toString(16)).substr(-6);
            if (c.tintCache = c.tintCache || {}, c.tintCache[e]) return c.tintCache[e];
            var f = d.CanvasTinter.canvas || document.createElement("canvas");
            if (d.CanvasTinter.tintMethod(c, b, f), d.CanvasTinter.convertTintToImage) {
                var g = new Image;
                g.src = f.toDataURL(), c.tintCache[e] = g
            } else c.tintCache[e] = f, d.CanvasTinter.canvas = null;
            return f
        }, d.CanvasTinter.tintWithMultiply = function(a, b, c) {
            var d = c.getContext("2d"),
                e = a.frame;
            c.width = e.width, c.height = e.height, d.fillStyle = "#" + ("00000" + (0 | b).toString(16)).substr(-6), d.fillRect(0, 0, e.width, e.height), d.globalCompositeOperation = "multiply", d.drawImage(a.baseTexture.source, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height), d.globalCompositeOperation = "destination-atop", d.drawImage(a.baseTexture.source, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height)
        }, d.CanvasTinter.tintWithOverlay = function(a, b, c) {
            var d = c.getContext("2d"),
                e = a.frame;
            c.width = e.width, c.height = e.height, d.globalCompositeOperation = "copy", d.fillStyle = "#" + ("00000" + (0 | b).toString(16)).substr(-6), d.fillRect(0, 0, e.width, e.height), d.globalCompositeOperation = "destination-atop", d.drawImage(a.baseTexture.source, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height)
        }, d.CanvasTinter.tintWithPerPixel = function(a, b, c) {
            var e = c.getContext("2d"),
                f = a.frame;
            c.width = f.width, c.height = f.height, e.globalCompositeOperation = "copy", e.drawImage(a.baseTexture.source, f.x, f.y, f.width, f.height, 0, 0, f.width, f.height);
            for (var g = d.hex2rgb(b), h = g[0], i = g[1], j = g[2], k = e.getImageData(0, 0, f.width, f.height), l = k.data, m = 0; m < l.length; m += 4) l[m + 0] *= h, l[m + 1] *= i, l[m + 2] *= j;
            e.putImageData(k, 0, 0)
        }, d.CanvasTinter.roundColor = function(a) {
            var b = d.CanvasTinter.cacheStepsPerColorChannel,
                c = d.hex2rgb(a);
            return c[0] = Math.min(255, c[0] / b * b), c[1] = Math.min(255, c[1] / b * b), c[2] = Math.min(255, c[2] / b * b), d.rgb2hex(c)
        }, d.CanvasTinter.cacheStepsPerColorChannel = 8, d.CanvasTinter.convertTintToImage = !1, d.CanvasTinter.canUseMultiply = d.canUseNewCanvasBlendModes(), d.CanvasTinter.tintMethod = d.CanvasTinter.canUseMultiply ? d.CanvasTinter.tintWithMultiply : d.CanvasTinter.tintWithPerPixel, d.CanvasRenderer = function(a, b, c, e) {
            d.defaultRenderer = d.defaultRenderer || this, this.type = d.CANVAS_RENDERER, this.clearBeforeRender = !0, this.roundPixels = !1, this.transparent = !!e, d.blendModesCanvas || (d.blendModesCanvas = [], d.canUseNewCanvasBlendModes() ? (d.blendModesCanvas[d.blendModes.NORMAL] = "source-over", d.blendModesCanvas[d.blendModes.ADD] = "lighter", d.blendModesCanvas[d.blendModes.MULTIPLY] = "multiply", d.blendModesCanvas[d.blendModes.SCREEN] = "screen", d.blendModesCanvas[d.blendModes.OVERLAY] = "overlay", d.blendModesCanvas[d.blendModes.DARKEN] = "darken", d.blendModesCanvas[d.blendModes.LIGHTEN] = "lighten", d.blendModesCanvas[d.blendModes.COLOR_DODGE] = "color-dodge", d.blendModesCanvas[d.blendModes.COLOR_BURN] = "color-burn", d.blendModesCanvas[d.blendModes.HARD_LIGHT] = "hard-light", d.blendModesCanvas[d.blendModes.SOFT_LIGHT] = "soft-light", d.blendModesCanvas[d.blendModes.DIFFERENCE] = "difference", d.blendModesCanvas[d.blendModes.EXCLUSION] = "exclusion", d.blendModesCanvas[d.blendModes.HUE] = "hue", d.blendModesCanvas[d.blendModes.SATURATION] = "saturation", d.blendModesCanvas[d.blendModes.COLOR] = "color", d.blendModesCanvas[d.blendModes.LUMINOSITY] = "luminosity") : (d.blendModesCanvas[d.blendModes.NORMAL] = "source-over", d.blendModesCanvas[d.blendModes.ADD] = "lighter", d.blendModesCanvas[d.blendModes.MULTIPLY] = "source-over", d.blendModesCanvas[d.blendModes.SCREEN] = "source-over", d.blendModesCanvas[d.blendModes.OVERLAY] = "source-over", d.blendModesCanvas[d.blendModes.DARKEN] = "source-over", d.blendModesCanvas[d.blendModes.LIGHTEN] = "source-over", d.blendModesCanvas[d.blendModes.COLOR_DODGE] = "source-over", d.blendModesCanvas[d.blendModes.COLOR_BURN] = "source-over", d.blendModesCanvas[d.blendModes.HARD_LIGHT] = "source-over", d.blendModesCanvas[d.blendModes.SOFT_LIGHT] = "source-over", d.blendModesCanvas[d.blendModes.DIFFERENCE] = "source-over", d.blendModesCanvas[d.blendModes.EXCLUSION] = "source-over", d.blendModesCanvas[d.blendModes.HUE] = "source-over", d.blendModesCanvas[d.blendModes.SATURATION] = "source-over", d.blendModesCanvas[d.blendModes.COLOR] = "source-over", d.blendModesCanvas[d.blendModes.LUMINOSITY] = "source-over")), this.width = a || 800, this.height = b || 600, this.view = c || document.createElement("canvas"), this.context = this.view.getContext("2d", {
                alpha: this.transparent
            }), this.refresh = !0, this.view.width = this.width, this.view.height = this.height, this.count = 0, this.maskManager = new d.CanvasMaskManager, this.renderSession = {
                context: this.context,
                maskManager: this.maskManager,
                scaleMode: null,
                smoothProperty: null
            }, "imageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "imageSmoothingEnabled" : "webkitImageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "webkitImageSmoothingEnabled" : "mozImageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "mozImageSmoothingEnabled" : "oImageSmoothingEnabled" in this.context && (this.renderSession.smoothProperty = "oImageSmoothingEnabled")
        }, d.CanvasRenderer.prototype.constructor = d.CanvasRenderer, d.CanvasRenderer.prototype.render = function(a) {
            d.texturesToUpdate.length = 0, d.texturesToDestroy.length = 0, a.updateTransform(), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.globalAlpha = 1, !this.transparent && this.clearBeforeRender ? (this.context.fillStyle = a.backgroundColorString, this.context.fillRect(0, 0, this.width, this.height)) : this.transparent && this.clearBeforeRender && this.context.clearRect(0, 0, this.width, this.height), this.renderDisplayObject(a), a.interactive && (a._interactiveEventsAdded || (a._interactiveEventsAdded = !0, a.interactionManager.setTarget(this))), d.Texture.frameUpdates.length > 0 && (d.Texture.frameUpdates.length = 0)
        }, d.CanvasRenderer.prototype.resize = function(a, b) {
            this.width = a, this.height = b, this.view.width = a, this.view.height = b
        }, d.CanvasRenderer.prototype.renderDisplayObject = function(a, b) {
            this.renderSession.context = b || this.context, a._renderCanvas(this.renderSession)
        }, d.CanvasRenderer.prototype.renderStripFlat = function(a) {
            var b = this.context,
                c = a.verticies,
                d = c.length / 2;
            this.count++, b.beginPath();
            for (var e = 1; d - 2 > e; e++) {
                var f = 2 * e,
                    g = c[f],
                    h = c[f + 2],
                    i = c[f + 4],
                    j = c[f + 1],
                    k = c[f + 3],
                    l = c[f + 5];
                b.moveTo(g, j), b.lineTo(h, k), b.lineTo(i, l)
            }
            b.fillStyle = "#FF0000", b.fill(), b.closePath()
        }, d.CanvasRenderer.prototype.renderStrip = function(a) {
            var b = this.context,
                c = a.verticies,
                d = a.uvs,
                e = c.length / 2;
            this.count++;
            for (var f = 1; e - 2 > f; f++) {
                var g = 2 * f,
                    h = c[g],
                    i = c[g + 2],
                    j = c[g + 4],
                    k = c[g + 1],
                    l = c[g + 3],
                    m = c[g + 5],
                    n = d[g] * a.texture.width,
                    o = d[g + 2] * a.texture.width,
                    p = d[g + 4] * a.texture.width,
                    q = d[g + 1] * a.texture.height,
                    r = d[g + 3] * a.texture.height,
                    s = d[g + 5] * a.texture.height;
                b.save(), b.beginPath(), b.moveTo(h, k), b.lineTo(i, l), b.lineTo(j, m), b.closePath(), b.clip();
                var t = n * r + q * p + o * s - r * p - q * o - n * s,
                    u = h * r + q * j + i * s - r * j - q * i - h * s,
                    v = n * i + h * p + o * j - i * p - h * o - n * j,
                    w = n * r * j + q * i * p + h * o * s - h * r * p - q * o * j - n * i * s,
                    x = k * r + q * m + l * s - r * m - q * l - k * s,
                    y = n * l + k * p + o * m - l * p - k * o - n * m,
                    z = n * r * m + q * l * p + k * o * s - k * r * p - q * o * m - n * l * s;
                b.transform(u / t, x / t, v / t, y / t, w / t, z / t), b.drawImage(a.texture.baseTexture.source, 0, 0), b.restore()
            }
        }, d.CanvasBuffer = function(a, b) {
            this.width = a, this.height = b, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.canvas.width = a, this.canvas.height = b
        }, d.CanvasBuffer.prototype.clear = function() {
            this.context.clearRect(0, 0, this.width, this.height)
        }, d.CanvasBuffer.prototype.resize = function(a, b) {
            this.width = this.canvas.width = a, this.height = this.canvas.height = b
        }, d.CanvasGraphics = function() {}, d.CanvasGraphics.renderGraphics = function(a, b) {
            for (var c = a.worldAlpha, e = "", f = 0; f < a.graphicsData.length; f++) {
                var g = a.graphicsData[f],
                    h = g.points;
                if (b.strokeStyle = e = "#" + ("00000" + (0 | g.lineColor).toString(16)).substr(-6), b.lineWidth = g.lineWidth, g.type === d.Graphics.POLY) {
                    b.beginPath(), b.moveTo(h[0], h[1]);
                    for (var i = 1; i < h.length / 2; i++) b.lineTo(h[2 * i], h[2 * i + 1]);
                    h[0] === h[h.length - 2] && h[1] === h[h.length - 1] && b.closePath(), g.fill && (b.globalAlpha = g.fillAlpha * c, b.fillStyle = e = "#" + ("00000" + (0 | g.fillColor).toString(16)).substr(-6), b.fill()), g.lineWidth && (b.globalAlpha = g.lineAlpha * c, b.stroke())
                } else if (g.type === d.Graphics.RECT)(g.fillColor || 0 === g.fillColor) && (b.globalAlpha = g.fillAlpha * c, b.fillStyle = e = "#" + ("00000" + (0 | g.fillColor).toString(16)).substr(-6), b.fillRect(h[0], h[1], h[2], h[3])), g.lineWidth && (b.globalAlpha = g.lineAlpha * c, b.strokeRect(h[0], h[1], h[2], h[3]));
                else if (g.type === d.Graphics.CIRC) b.beginPath(), b.arc(h[0], h[1], h[2], 0, 2 * Math.PI), b.closePath(), g.fill && (b.globalAlpha = g.fillAlpha * c, b.fillStyle = e = "#" + ("00000" + (0 | g.fillColor).toString(16)).substr(-6), b.fill()), g.lineWidth && (b.globalAlpha = g.lineAlpha * c, b.stroke());
                else if (g.type === d.Graphics.ELIP) {
                    var j = g.points,
                        k = 2 * j[2],
                        l = 2 * j[3],
                        m = j[0] - k / 2,
                        n = j[1] - l / 2;
                    b.beginPath();
                    var o = .5522848,
                        p = k / 2 * o,
                        q = l / 2 * o,
                        r = m + k,
                        s = n + l,
                        t = m + k / 2,
                        u = n + l / 2;
                    b.moveTo(m, u), b.bezierCurveTo(m, u - q, t - p, n, t, n), b.bezierCurveTo(t + p, n, r, u - q, r, u), b.bezierCurveTo(r, u + q, t + p, s, t, s), b.bezierCurveTo(t - p, s, m, u + q, m, u), b.closePath(), g.fill && (b.globalAlpha = g.fillAlpha * c, b.fillStyle = e = "#" + ("00000" + (0 | g.fillColor).toString(16)).substr(-6), b.fill()), g.lineWidth && (b.globalAlpha = g.lineAlpha * c, b.stroke())
                }
            }
        }, d.CanvasGraphics.renderGraphicsMask = function(a, b) {
            var c = a.graphicsData.length;
            if (0 !== c) {
                c > 1 && (c = 1, window.console.log("Pixi.js warning: masks in canvas can only mask using the first path in the graphics object"));
                for (var e = 0; 1 > e; e++) {
                    var f = a.graphicsData[e],
                        g = f.points;
                    if (f.type === d.Graphics.POLY) {
                        b.beginPath(), b.moveTo(g[0], g[1]);
                        for (var h = 1; h < g.length / 2; h++) b.lineTo(g[2 * h], g[2 * h + 1]);
                        g[0] === g[g.length - 2] && g[1] === g[g.length - 1] && b.closePath()
                    } else if (f.type === d.Graphics.RECT) b.beginPath(), b.rect(g[0], g[1], g[2], g[3]), b.closePath();
                    else if (f.type === d.Graphics.CIRC) b.beginPath(), b.arc(g[0], g[1], g[2], 0, 2 * Math.PI), b.closePath();
                    else if (f.type === d.Graphics.ELIP) {
                        var i = f.points,
                            j = 2 * i[2],
                            k = 2 * i[3],
                            l = i[0] - j / 2,
                            m = i[1] - k / 2;
                        b.beginPath();
                        var n = .5522848,
                            o = j / 2 * n,
                            p = k / 2 * n,
                            q = l + j,
                            r = m + k,
                            s = l + j / 2,
                            t = m + k / 2;
                        b.moveTo(l, t), b.bezierCurveTo(l, t - p, s - o, m, s, m), b.bezierCurveTo(s + o, m, q, t - p, q, t), b.bezierCurveTo(q, t + p, s + o, r, s, r), b.bezierCurveTo(s - o, r, l, t + p, l, t), b.closePath()
                    }
                }
            }
        }, d.Graphics = function() {
            d.DisplayObjectContainer.call(this), this.renderable = !0, this.fillAlpha = 1, this.lineWidth = 0, this.lineColor = "black", this.graphicsData = [], this.tint = 16777215, this.blendMode = d.blendModes.NORMAL, this.currentPath = {
                points: []
            }, this._webGL = [], this.isMask = !1, this.bounds = null, this.boundsPadding = 10
        }, d.Graphics.prototype = Object.create(d.DisplayObjectContainer.prototype), d.Graphics.prototype.constructor = d.Graphics, Object.defineProperty(d.Graphics.prototype, "cacheAsBitmap", {
            get: function() {
                return this._cacheAsBitmap
            },
            set: function(a) {
                this._cacheAsBitmap = a, this._cacheAsBitmap ? this._generateCachedSprite() : (this.destroyCachedSprite(), this.dirty = !0)
            }
        }), d.Graphics.prototype.lineStyle = function(a, b, c) {
            return this.currentPath.points.length || this.graphicsData.pop(), this.lineWidth = a || 0, this.lineColor = b || 0, this.lineAlpha = arguments.length < 3 ? 1 : c, this.currentPath = {
                lineWidth: this.lineWidth,
                lineColor: this.lineColor,
                lineAlpha: this.lineAlpha,
                fillColor: this.fillColor,
                fillAlpha: this.fillAlpha,
                fill: this.filling,
                points: [],
                type: d.Graphics.POLY
            }, this.graphicsData.push(this.currentPath), this
        }, d.Graphics.prototype.moveTo = function(a, b) {
            return this.currentPath.points.length || this.graphicsData.pop(), this.currentPath = this.currentPath = {
                lineWidth: this.lineWidth,
                lineColor: this.lineColor,
                lineAlpha: this.lineAlpha,
                fillColor: this.fillColor,
                fillAlpha: this.fillAlpha,
                fill: this.filling,
                points: [],
                type: d.Graphics.POLY
            }, this.currentPath.points.push(a, b), this.graphicsData.push(this.currentPath), this
        }, d.Graphics.prototype.lineTo = function(a, b) {
            return this.currentPath.points.push(a, b), this.dirty = !0, this
        }, d.Graphics.prototype.beginFill = function(a, b) {
            return this.filling = !0, this.fillColor = a || 0, this.fillAlpha = arguments.length < 2 ? 1 : b, this
        }, d.Graphics.prototype.endFill = function() {
            return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
        }, d.Graphics.prototype.drawRect = function(a, b, c, e) {
            return this.currentPath.points.length || this.graphicsData.pop(), this.currentPath = {
                lineWidth: this.lineWidth,
                lineColor: this.lineColor,
                lineAlpha: this.lineAlpha,
                fillColor: this.fillColor,
                fillAlpha: this.fillAlpha,
                fill: this.filling,
                points: [a, b, c, e],
                type: d.Graphics.RECT
            }, this.graphicsData.push(this.currentPath), this.dirty = !0, this
        }, d.Graphics.prototype.drawCircle = function(a, b, c) {
            return this.currentPath.points.length || this.graphicsData.pop(), this.currentPath = {
                lineWidth: this.lineWidth,
                lineColor: this.lineColor,
                lineAlpha: this.lineAlpha,
                fillColor: this.fillColor,
                fillAlpha: this.fillAlpha,
                fill: this.filling,
                points: [a, b, c, c],
                type: d.Graphics.CIRC
            }, this.graphicsData.push(this.currentPath), this.dirty = !0, this
        }, d.Graphics.prototype.drawEllipse = function(a, b, c, e) {
            return this.currentPath.points.length || this.graphicsData.pop(), this.currentPath = {
                lineWidth: this.lineWidth,
                lineColor: this.lineColor,
                lineAlpha: this.lineAlpha,
                fillColor: this.fillColor,
                fillAlpha: this.fillAlpha,
                fill: this.filling,
                points: [a, b, c, e],
                type: d.Graphics.ELIP
            }, this.graphicsData.push(this.currentPath), this.dirty = !0, this
        }, d.Graphics.prototype.clear = function() {
            return this.lineWidth = 0, this.filling = !1, this.dirty = !0, this.clearDirty = !0, this.graphicsData = [], this.bounds = null, this
        }, d.Graphics.prototype.generateTexture = function() {
            var a = this.getBounds(),
                b = new d.CanvasBuffer(a.width, a.height),
                c = d.Texture.fromCanvas(b.canvas);
            return b.context.translate(-a.x, -a.y), d.CanvasGraphics.renderGraphics(this, b.context), c
        }, d.Graphics.prototype._renderWebGL = function(a) {
            if (this.visible !== !1 && 0 !== this.alpha && this.isMask !== !0) {
                if (this._cacheAsBitmap) return this.dirty && (this._generateCachedSprite(), d.updateWebGLTexture(this._cachedSprite.texture.baseTexture, a.gl), this.dirty = !1), this._cachedSprite.alpha = this.alpha, void d.Sprite.prototype._renderWebGL.call(this._cachedSprite, a);
                if (a.spriteBatch.stop(), this._mask && a.maskManager.pushMask(this.mask, a), this._filters && a.filterManager.pushFilter(this._filterBlock), this.blendMode !== a.spriteBatch.currentBlendMode) {
                    a.spriteBatch.currentBlendMode = this.blendMode;
                    var b = d.blendModesWebGL[a.spriteBatch.currentBlendMode];
                    a.spriteBatch.gl.blendFunc(b[0], b[1])
                }
                if (d.WebGLGraphics.renderGraphics(this, a), this.children.length) {
                    a.spriteBatch.start();
                    for (var c = 0, e = this.children.length; e > c; c++) this.children[c]._renderWebGL(a);
                    a.spriteBatch.stop()
                }
                this._filters && a.filterManager.popFilter(), this._mask && a.maskManager.popMask(a), a.drawCount++, a.spriteBatch.start()
            }
        }, d.Graphics.prototype._renderCanvas = function(a) {
            if (this.visible !== !1 && 0 !== this.alpha && this.isMask !== !0) {
                var b = a.context,
                    c = this.worldTransform;
                this.blendMode !== a.currentBlendMode && (a.currentBlendMode = this.blendMode, b.globalCompositeOperation = d.blendModesCanvas[a.currentBlendMode]), b.setTransform(c.a, c.c, c.b, c.d, c.tx, c.ty), d.CanvasGraphics.renderGraphics(this, b);
                for (var e = 0, f = this.children.length; f > e; e++) this.children[e]._renderCanvas(a)
            }
        }, d.Graphics.prototype.getBounds = function(a) {
            this.bounds || this.updateBounds();
            var b = this.bounds.x,
                c = this.bounds.width + this.bounds.x,
                d = this.bounds.y,
                e = this.bounds.height + this.bounds.y,
                f = a || this.worldTransform,
                g = f.a,
                h = f.c,
                i = f.b,
                j = f.d,
                k = f.tx,
                l = f.ty,
                m = g * c + i * e + k,
                n = j * e + h * c + l,
                o = g * b + i * e + k,
                p = j * e + h * b + l,
                q = g * b + i * d + k,
                r = j * d + h * b + l,
                s = g * c + i * d + k,
                t = j * d + h * c + l,
                u = m,
                v = n,
                w = m,
                x = n;
            w = w > o ? o : w, w = w > q ? q : w, w = w > s ? s : w, x = x > p ? p : x, x = x > r ? r : x, x = x > t ? t : x, u = o > u ? o : u, u = q > u ? q : u, u = s > u ? s : u, v = p > v ? p : v, v = r > v ? r : v, v = t > v ? t : v;
            var y = this._bounds;
            return y.x = w, y.width = u - w, y.y = x, y.height = v - x, y
        }, d.Graphics.prototype.updateBounds = function() {
            for (var a, b, c, e, f, g = 1 / 0, h = -1 / 0, i = 1 / 0, j = -1 / 0, k = 0; k < this.graphicsData.length; k++) {
                var l = this.graphicsData[k],
                    m = l.type,
                    n = l.lineWidth;
                if (a = l.points, m === d.Graphics.RECT) b = a[0] - n / 2, c = a[1] - n / 2, e = a[2] + n, f = a[3] + n, g = g > b ? b : g, h = b + e > h ? b + e : h, i = i > c ? b : i, j = c + f > j ? c + f : j;
                else if (m === d.Graphics.CIRC || m === d.Graphics.ELIP) b = a[0], c = a[1], e = a[2] + n / 2, f = a[3] + n / 2, g = g > b - e ? b - e : g, h = b + e > h ? b + e : h, i = i > c - f ? c - f : i, j = c + f > j ? c + f : j;
                else
                    for (var o = 0; o < a.length; o += 2) b = a[o], c = a[o + 1], g = g > b - n ? b - n : g, h = b + n > h ? b + n : h, i = i > c - n ? c - n : i, j = c + n > j ? c + n : j
            }
            var p = this.boundsPadding;
            this.bounds = new d.Rectangle(g - p, i - p, h - g + 2 * p, j - i + 2 * p)
        }, d.Graphics.prototype._generateCachedSprite = function() {
            var a = this.getLocalBounds();
            if (this._cachedSprite) this._cachedSprite.buffer.resize(a.width, a.height);
            else {
                var b = new d.CanvasBuffer(a.width, a.height),
                    c = d.Texture.fromCanvas(b.canvas);
                this._cachedSprite = new d.Sprite(c), this._cachedSprite.buffer = b, this._cachedSprite.worldTransform = this.worldTransform
            }
            this._cachedSprite.anchor.x = -(a.x / a.width), this._cachedSprite.anchor.y = -(a.y / a.height), this._cachedSprite.buffer.context.translate(-a.x, -a.y), d.CanvasGraphics.renderGraphics(this, this._cachedSprite.buffer.context), this._cachedSprite.alpha = this.alpha
        }, d.Graphics.prototype.destroyCachedSprite = function() {
            this._cachedSprite.texture.destroy(!0), this._cachedSprite = null
        }, d.Graphics.POLY = 0, d.Graphics.RECT = 1, d.Graphics.CIRC = 2, d.Graphics.ELIP = 3, d.Strip = function(a, b, c) {
            d.Sprite.call(this, a), this.width = b, this.height = c, this.texture = a, this.blendMode = d.blendModes.NORMAL;
            try {
                this.uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1]), this.verticies = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0]), this.colors = new Float32Array([1, 1, 1, 1]), this.indices = new Uint16Array([0, 1, 2, 3])
            } catch (e) {
                this.uvs = [0, 1, 1, 1, 1, 0, 0, 1], this.verticies = [0, 0, 0, 0, 0, 0, 0, 0, 0], this.colors = [1, 1, 1, 1], this.indices = [0, 1, 2, 3]
            }
            a.baseTexture.hasLoaded ? (this.width = this.texture.frame.width, this.height = this.texture.frame.height, this.updateFrame = !0) : (this.onTextureUpdateBind = this.onTextureUpdate.bind(this), this.texture.addEventListener("update", this.onTextureUpdateBind)), this.renderable = !0
        }, d.Strip.prototype = Object.create(d.Sprite.prototype), d.Strip.prototype.constructor = d.Strip, d.Strip.prototype.onTextureUpdate = function() {
            this.updateFrame = !0
        }, d.Rope = function(a, b) {
            d.Strip.call(this, a), this.points = b;
            try {
                this.verticies = new Float32Array(4 * b.length), this.uvs = new Float32Array(4 * b.length), this.colors = new Float32Array(2 * b.length), this.indices = new Uint16Array(2 * b.length)
            } catch (c) {
                this.verticies = new Array(4 * b.length), this.uvs = new Array(4 * b.length), this.colors = new Array(2 * b.length), this.indices = new Array(2 * b.length)
            }
            this.refresh()
        }, d.Rope.prototype = Object.create(d.Strip.prototype), d.Rope.prototype.constructor = d.Rope, d.Rope.prototype.refresh = function() {
            var a = this.points;
            if (!(a.length < 1)) {
                var b = this.uvs,
                    c = a[0],
                    d = this.indices,
                    e = this.colors;
                this.count -= .2, b[0] = 0, b[1] = 1, b[2] = 0, b[3] = 1, e[0] = 1, e[1] = 1, d[0] = 0, d[1] = 1;
                for (var f, g, h, i = a.length, j = 1; i > j; j++) f = a[j], g = 4 * j, h = j / (i - 1), j % 2 ? (b[g] = h, b[g + 1] = 0, b[g + 2] = h, b[g + 3] = 1) : (b[g] = h, b[g + 1] = 0, b[g + 2] = h, b[g + 3] = 1), g = 2 * j, e[g] = 1, e[g + 1] = 1, g = 2 * j, d[g] = g, d[g + 1] = g + 1, c = f
            }
        }, d.Rope.prototype.updateTransform = function() {
            var a = this.points;
            if (!(a.length < 1)) {
                var b, c = a[0],
                    e = {
                        x: 0,
                        y: 0
                    };
                this.count -= .2;
                var f = this.verticies;
                f[0] = c.x + e.x, f[1] = c.y + e.y, f[2] = c.x - e.x, f[3] = c.y - e.y;
                for (var g, h, i, j, k, l = a.length, m = 1; l > m; m++) g = a[m], h = 4 * m, b = m < a.length - 1 ? a[m + 1] : g, e.y = -(b.x - c.x), e.x = b.y - c.y, i = 10 * (1 - m / (l - 1)), i > 1 && (i = 1), j = Math.sqrt(e.x * e.x + e.y * e.y), k = this.texture.height / 2, e.x /= j, e.y /= j, e.x *= k, e.y *= k, f[h] = g.x + e.x, f[h + 1] = g.y + e.y, f[h + 2] = g.x - e.x, f[h + 3] = g.y - e.y, c = g;
                d.DisplayObjectContainer.prototype.updateTransform.call(this)
            }
        }, d.Rope.prototype.setTexture = function(a) {
            this.texture = a, this.updateFrame = !0
        }, d.TilingSprite = function(a, b, c) {
            d.Sprite.call(this, a), this.width = b || 100, this.height = c || 100, this.tileScale = new d.Point(1, 1), this.tileScaleOffset = new d.Point(1, 1), this.tilePosition = new d.Point(0, 0), this.renderable = !0, this.tint = 16777215, this.blendMode = d.blendModes.NORMAL
        }, d.TilingSprite.prototype = Object.create(d.Sprite.prototype), d.TilingSprite.prototype.constructor = d.TilingSprite, Object.defineProperty(d.TilingSprite.prototype, "width", {
            get: function() {
                return this._width
            },
            set: function(a) {
                this._width = a
            }
        }), Object.defineProperty(d.TilingSprite.prototype, "height", {
            get: function() {
                return this._height
            },
            set: function(a) {
                this._height = a
            }
        }), d.TilingSprite.prototype.onTextureUpdate = function() {
            this.updateFrame = !0
        }, d.TilingSprite.prototype.setTexture = function(a) {
            this.texture !== a && (this.texture = a, this.refreshTexture = !0, this.cachedTint = 16777215)
        }, d.TilingSprite.prototype._renderWebGL = function(a) {
            if (this.visible !== !1 && 0 !== this.alpha) {
                var b, c;
                for (this.mask && (a.spriteBatch.stop(), a.maskManager.pushMask(this.mask, a), a.spriteBatch.start()), this.filters && (a.spriteBatch.flush(), a.filterManager.pushFilter(this._filterBlock)), !this.tilingTexture || this.refreshTexture ? (this.generateTilingTexture(!0), this.tilingTexture && this.tilingTexture.needsUpdate && (d.updateWebGLTexture(this.tilingTexture.baseTexture, a.gl), this.tilingTexture.needsUpdate = !1)) : a.spriteBatch.renderTilingSprite(this), b = 0, c = this.children.length; c > b; b++) this.children[b]._renderWebGL(a);
                a.spriteBatch.stop(), this.filters && a.filterManager.popFilter(), this.mask && a.maskManager.popMask(a), a.spriteBatch.start()
            }
        }, d.TilingSprite.prototype._renderCanvas = function(a) {
            if (this.visible !== !1 && 0 !== this.alpha) {
                var b = a.context;
                this._mask && a.maskManager.pushMask(this._mask, b), b.globalAlpha = this.worldAlpha;
                var c = this.worldTransform;
                if (b.setTransform(c.a, c.c, c.b, c.d, c.tx, c.ty), !this.__tilePattern || this.refreshTexture) {
                    if (this.generateTilingTexture(!1), !this.tilingTexture) return;
                    this.__tilePattern = b.createPattern(this.tilingTexture.baseTexture.source, "repeat")
                }
                this.blendMode !== a.currentBlendMode && (a.currentBlendMode = this.blendMode, b.globalCompositeOperation = d.blendModesCanvas[a.currentBlendMode]), b.beginPath();
                var e = this.tilePosition,
                    f = this.tileScale;
                e.x %= this.tilingTexture.baseTexture.width, e.y %= this.tilingTexture.baseTexture.height, b.scale(f.x, f.y), b.translate(e.x, e.y), b.fillStyle = this.__tilePattern, b.fillRect(-e.x + this.anchor.x * -this._width, -e.y + this.anchor.y * -this._height, this._width / f.x, this._height / f.y), b.scale(1 / f.x, 1 / f.y), b.translate(-e.x, -e.y), b.closePath(), this._mask && a.maskManager.popMask(a.context)
            }
        }, d.TilingSprite.prototype.getBounds = function() {
            var a = this._width,
                b = this._height,
                c = a * (1 - this.anchor.x),
                d = a * -this.anchor.x,
                e = b * (1 - this.anchor.y),
                f = b * -this.anchor.y,
                g = this.worldTransform,
                h = g.a,
                i = g.c,
                j = g.b,
                k = g.d,
                l = g.tx,
                m = g.ty,
                n = h * d + j * f + l,
                o = k * f + i * d + m,
                p = h * c + j * f + l,
                q = k * f + i * c + m,
                r = h * c + j * e + l,
                s = k * e + i * c + m,
                t = h * d + j * e + l,
                u = k * e + i * d + m,
                v = -1 / 0,
                w = -1 / 0,
                x = 1 / 0,
                y = 1 / 0;
            x = x > n ? n : x, x = x > p ? p : x, x = x > r ? r : x, x = x > t ? t : x, y = y > o ? o : y, y = y > q ? q : y, y = y > s ? s : y, y = y > u ? u : y, v = n > v ? n : v, v = p > v ? p : v, v = r > v ? r : v, v = t > v ? t : v, w = o > w ? o : w, w = q > w ? q : w, w = s > w ? s : w, w = u > w ? u : w;
            var z = this._bounds;
            return z.x = x, z.width = v - x, z.y = y, z.height = w - y, this._currentBounds = z, z
        }, d.TilingSprite.prototype.generateTilingTexture = function(a) {
            var b = this.texture;
            if (b.baseTexture.hasLoaded) {
                var c, e, f = b.baseTexture,
                    g = b.frame,
                    h = g.width !== f.width || g.height !== f.height,
                    i = !1;
                if (a ? (c = d.getNextPowerOfTwo(g.width), e = d.getNextPowerOfTwo(g.height), g.width !== c && g.height !== e && (i = !0)) : h && (c = g.width, e = g.height, i = !0), i) {
                    var j;
                    this.tilingTexture && this.tilingTexture.isTiling ? (j = this.tilingTexture.canvasBuffer, j.resize(c, e), this.tilingTexture.baseTexture.width = c, this.tilingTexture.baseTexture.height = e, this.tilingTexture.needsUpdate = !0) : (j = new d.CanvasBuffer(c, e), this.tilingTexture = d.Texture.fromCanvas(j.canvas), this.tilingTexture.canvasBuffer = j, this.tilingTexture.isTiling = !0), j.context.drawImage(b.baseTexture.source, g.x, g.y, g.width, g.height, 0, 0, c, e), this.tileScaleOffset.x = g.width / c, this.tileScaleOffset.y = g.height / e
                } else this.tilingTexture && this.tilingTexture.isTiling && this.tilingTexture.destroy(!0), this.tileScaleOffset.x = 1, this.tileScaleOffset.y = 1, this.tilingTexture = b;
                this.refreshTexture = !1, this.tilingTexture.baseTexture._powerOf2 = !0
            }
        };
        var i = {};
        i.BoneData = function(a, b) {
            this.name = a, this.parent = b
        }, i.BoneData.prototype = {
            length: 0,
            x: 0,
            y: 0,
            rotation: 0,
            scaleX: 1,
            scaleY: 1
        }, i.SlotData = function(a, b) {
            this.name = a, this.boneData = b
        }, i.SlotData.prototype = {
            r: 1,
            g: 1,
            b: 1,
            a: 1,
            attachmentName: null
        }, i.Bone = function(a, b) {
            this.data = a, this.parent = b, this.setToSetupPose()
        }, i.Bone.yDown = !1, i.Bone.prototype = {
            x: 0,
            y: 0,
            rotation: 0,
            scaleX: 1,
            scaleY: 1,
            m00: 0,
            m01: 0,
            worldX: 0,
            m10: 0,
            m11: 0,
            worldY: 0,
            worldRotation: 0,
            worldScaleX: 1,
            worldScaleY: 1,
            updateWorldTransform: function(a, b) {
                var c = this.parent;
                null != c ? (this.worldX = this.x * c.m00 + this.y * c.m01 + c.worldX, this.worldY = this.x * c.m10 + this.y * c.m11 + c.worldY, this.worldScaleX = c.worldScaleX * this.scaleX, this.worldScaleY = c.worldScaleY * this.scaleY, this.worldRotation = c.worldRotation + this.rotation) : (this.worldX = this.x, this.worldY = this.y, this.worldScaleX = this.scaleX, this.worldScaleY = this.scaleY, this.worldRotation = this.rotation);
                var d = this.worldRotation * Math.PI / 180,
                    e = Math.cos(d),
                    f = Math.sin(d);
                this.m00 = e * this.worldScaleX, this.m10 = f * this.worldScaleX, this.m01 = -f * this.worldScaleY, this.m11 = e * this.worldScaleY, a && (this.m00 = -this.m00, this.m01 = -this.m01), b && (this.m10 = -this.m10, this.m11 = -this.m11), i.Bone.yDown && (this.m10 = -this.m10, this.m11 = -this.m11)
            },
            setToSetupPose: function() {
                var a = this.data;
                this.x = a.x, this.y = a.y, this.rotation = a.rotation, this.scaleX = a.scaleX, this.scaleY = a.scaleY
            }
        }, i.Slot = function(a, b, c) {
            this.data = a, this.skeleton = b, this.bone = c, this.setToSetupPose()
        }, i.Slot.prototype = {
            r: 1,
            g: 1,
            b: 1,
            a: 1,
            _attachmentTime: 0,
            attachment: null,
            setAttachment: function(a) {
                this.attachment = a, this._attachmentTime = this.skeleton.time
            },
            setAttachmentTime: function(a) {
                this._attachmentTime = this.skeleton.time - a
            },
            getAttachmentTime: function() {
                return this.skeleton.time - this._attachmentTime
            },
            setToSetupPose: function() {
                var a = this.data;
                this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a;
                for (var b = this.skeleton.data.slots, c = 0, d = b.length; d > c; c++)
                    if (b[c] == a) {
                        this.setAttachment(a.attachmentName ? this.skeleton.getAttachmentBySlotIndex(c, a.attachmentName) : null);
                        break
                    }
            }
        }, i.Skin = function(a) {
            this.name = a, this.attachments = {}
        }, i.Skin.prototype = {
            addAttachment: function(a, b, c) {
                this.attachments[a + ":" + b] = c
            },
            getAttachment: function(a, b) {
                return this.attachments[a + ":" + b]
            },
            _attachAll: function(a, b) {
                for (var c in b.attachments) {
                    var d = c.indexOf(":"),
                        e = parseInt(c.substring(0, d), 10),
                        f = c.substring(d + 1),
                        g = a.slots[e];
                    if (g.attachment && g.attachment.name == f) {
                        var h = this.getAttachment(e, f);
                        h && g.setAttachment(h)
                    }
                }
            }
        }, i.Animation = function(a, b, c) {
            this.name = a, this.timelines = b, this.duration = c
        }, i.Animation.prototype = {
            apply: function(a, b, c) {
                c && this.duration && (b %= this.duration);
                for (var d = this.timelines, e = 0, f = d.length; f > e; e++) d[e].apply(a, b, 1)
            },
            mix: function(a, b, c, d) {
                c && this.duration && (b %= this.duration);
                for (var e = this.timelines, f = 0, g = e.length; g > f; f++) e[f].apply(a, b, d)
            }
        }, i.binarySearch = function(a, b, c) {
            var d = 0,
                e = Math.floor(a.length / c) - 2;
            if (!e) return c;
            for (var f = e >>> 1;;) {
                if (a[(f + 1) * c] <= b ? d = f + 1 : e = f, d == e) return (d + 1) * c;
                f = d + e >>> 1
            }
        }, i.linearSearch = function(a, b, c) {
            for (var d = 0, e = a.length - c; e >= d; d += c)
                if (a[d] > b) return d;
            return -1
        }, i.Curves = function(a) {
            this.curves = [], this.curves.length = 6 * (a - 1)
        }, i.Curves.prototype = {
            setLinear: function(a) {
                this.curves[6 * a] = 0
            },
            setStepped: function(a) {
                this.curves[6 * a] = -1
            },
            setCurve: function(a, b, c, d, e) {
                var f = .1,
                    g = f * f,
                    h = g * f,
                    i = 3 * f,
                    j = 3 * g,
                    k = 6 * g,
                    l = 6 * h,
                    m = 2 * -b + d,
                    n = 2 * -c + e,
                    o = 3 * (b - d) + 1,
                    p = 3 * (c - e) + 1,
                    q = 6 * a,
                    r = this.curves;
                r[q] = b * i + m * j + o * h, r[q + 1] = c * i + n * j + p * h, r[q + 2] = m * k + o * l, r[q + 3] = n * k + p * l, r[q + 4] = o * l, r[q + 5] = p * l
            },
            getCurvePercent: function(a, b) {
                b = 0 > b ? 0 : b > 1 ? 1 : b;
                var c = 6 * a,
                    d = this.curves,
                    e = d[c];
                if (!e) return b;
                if (-1 == e) return 0;
                for (var f = d[c + 1], g = d[c + 2], h = d[c + 3], i = d[c + 4], j = d[c + 5], k = e, l = f, m = 8;;) {
                    if (k >= b) {
                        var n = k - e,
                            o = l - f;
                        return o + (l - o) * (b - n) / (k - n)
                    }
                    if (!m) break;
                    m--, e += g, f += h, g += i, h += j, k += e, l += f
                }
                return l + (1 - l) * (b - k) / (1 - k)
            }
        }, i.RotateTimeline = function(a) {
            this.curves = new i.Curves(a), this.frames = [], this.frames.length = 2 * a
        }, i.RotateTimeline.prototype = {
            boneIndex: 0,
            getFrameCount: function() {
                return this.frames.length / 2
            },
            setFrame: function(a, b, c) {
                a *= 2, this.frames[a] = b, this.frames[a + 1] = c
            },
            apply: function(a, b, c) {
                var d, e = this.frames;
                if (!(b < e[0])) {
                    var f = a.bones[this.boneIndex];
                    if (b >= e[e.length - 2]) {
                        for (d = f.data.rotation + e[e.length - 1] - f.rotation; d > 180;) d -= 360;
                        for (; - 180 > d;) d += 360;
                        return void(f.rotation += d * c)
                    }
                    var g = i.binarySearch(e, b, 2),
                        h = e[g - 1],
                        j = e[g],
                        k = 1 - (b - j) / (e[g - 2] - j);
                    for (k = this.curves.getCurvePercent(g / 2 - 1, k), d = e[g + 1] - h; d > 180;) d -= 360;
                    for (; - 180 > d;) d += 360;
                    for (d = f.data.rotation + (h + d * k) - f.rotation; d > 180;) d -= 360;
                    for (; - 180 > d;) d += 360;
                    f.rotation += d * c
                }
            }
        }, i.TranslateTimeline = function(a) {
            this.curves = new i.Curves(a), this.frames = [], this.frames.length = 3 * a
        }, i.TranslateTimeline.prototype = {
            boneIndex: 0,
            getFrameCount: function() {
                return this.frames.length / 3
            },
            setFrame: function(a, b, c, d) {
                a *= 3, this.frames[a] = b, this.frames[a + 1] = c, this.frames[a + 2] = d
            },
            apply: function(a, b, c) {
                var d = this.frames;
                if (!(b < d[0])) {
                    var e = a.bones[this.boneIndex];
                    if (b >= d[d.length - 3]) return e.x += (e.data.x + d[d.length - 2] - e.x) * c, void(e.y += (e.data.y + d[d.length - 1] - e.y) * c);
                    var f = i.binarySearch(d, b, 3),
                        g = d[f - 2],
                        h = d[f - 1],
                        j = d[f],
                        k = 1 - (b - j) / (d[f + -3] - j);
                    k = this.curves.getCurvePercent(f / 3 - 1, k), e.x += (e.data.x + g + (d[f + 1] - g) * k - e.x) * c, e.y += (e.data.y + h + (d[f + 2] - h) * k - e.y) * c
                }
            }
        }, i.ScaleTimeline = function(a) {
            this.curves = new i.Curves(a), this.frames = [], this.frames.length = 3 * a
        }, i.ScaleTimeline.prototype = {
            boneIndex: 0,
            getFrameCount: function() {
                return this.frames.length / 3
            },
            setFrame: function(a, b, c, d) {
                a *= 3, this.frames[a] = b, this.frames[a + 1] = c, this.frames[a + 2] = d
            },
            apply: function(a, b, c) {
                var d = this.frames;
                if (!(b < d[0])) {
                    var e = a.bones[this.boneIndex];
                    if (b >= d[d.length - 3]) return e.scaleX += (e.data.scaleX - 1 + d[d.length - 2] - e.scaleX) * c, void(e.scaleY += (e.data.scaleY - 1 + d[d.length - 1] - e.scaleY) * c);
                    var f = i.binarySearch(d, b, 3),
                        g = d[f - 2],
                        h = d[f - 1],
                        j = d[f],
                        k = 1 - (b - j) / (d[f + -3] - j);
                    k = this.curves.getCurvePercent(f / 3 - 1, k), e.scaleX += (e.data.scaleX - 1 + g + (d[f + 1] - g) * k - e.scaleX) * c, e.scaleY += (e.data.scaleY - 1 + h + (d[f + 2] - h) * k - e.scaleY) * c
                }
            }
        }, i.ColorTimeline = function(a) {
            this.curves = new i.Curves(a), this.frames = [], this.frames.length = 5 * a
        }, i.ColorTimeline.prototype = {
            slotIndex: 0,
            getFrameCount: function() {
                return this.frames.length / 2
            },
            setFrame: function(c, d) {
                c *= 5, this.frames[c] = d, this.frames[c + 1] = r, this.frames[c + 2] = g, this.frames[c + 3] = b, this.frames[c + 4] = a
            },
            apply: function(a, b, c) {
                var d = this.frames;
                if (!(b < d[0])) {
                    var e = a.slots[this.slotIndex];
                    if (b >= d[d.length - 5]) {
                        var f = d.length - 1;
                        return e.r = d[f - 3], e.g = d[f - 2], e.b = d[f - 1], void(e.a = d[f])
                    }
                    var g = i.binarySearch(d, b, 5),
                        h = d[g - 4],
                        j = d[g - 3],
                        k = d[g - 2],
                        l = d[g - 1],
                        m = d[g],
                        n = 1 - (b - m) / (d[g - 5] - m);
                    n = this.curves.getCurvePercent(g / 5 - 1, n);
                    var o = h + (d[g + 1] - h) * n,
                        p = j + (d[g + 2] - j) * n,
                        q = k + (d[g + 3] - k) * n,
                        r = l + (d[g + 4] - l) * n;
                    1 > c ? (e.r += (o - e.r) * c, e.g += (p - e.g) * c, e.b += (q - e.b) * c, e.a += (r - e.a) * c) : (e.r = o, e.g = p, e.b = q, e.a = r)
                }
            }
        }, i.AttachmentTimeline = function(a) {
            this.curves = new i.Curves(a), this.frames = [], this.frames.length = a, this.attachmentNames = [], this.attachmentNames.length = a
        }, i.AttachmentTimeline.prototype = {
            slotIndex: 0,
            getFrameCount: function() {
                return this.frames.length
            },
            setFrame: function(a, b, c) {
                this.frames[a] = b, this.attachmentNames[a] = c
            },
            apply: function(a, b) {
                var c = this.frames;
                if (!(b < c[0])) {
                    var d;
                    d = b >= c[c.length - 1] ? c.length - 1 : i.binarySearch(c, b, 1) - 1;
                    var e = this.attachmentNames[d];
                    a.slots[this.slotIndex].setAttachment(e ? a.getAttachmentBySlotIndex(this.slotIndex, e) : null)
                }
            }
        }, i.SkeletonData = function() {
            this.bones = [], this.slots = [], this.skins = [], this.animations = []
        }, i.SkeletonData.prototype = {
            defaultSkin: null,
            findBone: function(a) {
                for (var b = this.bones, c = 0, d = b.length; d > c; c++)
                    if (b[c].name == a) return b[c];
                return null
            },
            findBoneIndex: function(a) {
                for (var b = this.bones, c = 0, d = b.length; d > c; c++)
                    if (b[c].name == a) return c;
                return -1
            },
            findSlot: function(a) {
                for (var b = this.slots, c = 0, d = b.length; d > c; c++)
                    if (b[c].name == a) return slot[c];
                return null
            },
            findSlotIndex: function(a) {
                for (var b = this.slots, c = 0, d = b.length; d > c; c++)
                    if (b[c].name == a) return c;
                return -1
            },
            findSkin: function(a) {
                for (var b = this.skins, c = 0, d = b.length; d > c; c++)
                    if (b[c].name == a) return b[c];
                return null
            },
            findAnimation: function(a) {
                for (var b = this.animations, c = 0, d = b.length; d > c; c++)
                    if (b[c].name == a) return b[c];
                return null
            }
        }, i.Skeleton = function(a) {
            this.data = a, this.bones = [];
            for (var b = 0, c = a.bones.length; c > b; b++) {
                var d = a.bones[b],
                    e = d.parent ? this.bones[a.bones.indexOf(d.parent)] : null;
                this.bones.push(new i.Bone(d, e))
            }
            for (this.slots = [], this.drawOrder = [], b = 0, c = a.slots.length; c > b; b++) {
                var f = a.slots[b],
                    g = this.bones[a.bones.indexOf(f.boneData)],
                    h = new i.Slot(f, this, g);
                this.slots.push(h), this.drawOrder.push(h)
            }
        }, i.Skeleton.prototype = {
            x: 0,
            y: 0,
            skin: null,
            r: 1,
            g: 1,
            b: 1,
            a: 1,
            time: 0,
            flipX: !1,
            flipY: !1,
            updateWorldTransform: function() {
                for (var a = this.flipX, b = this.flipY, c = this.bones, d = 0, e = c.length; e > d; d++) c[d].updateWorldTransform(a, b)
            },
            setToSetupPose: function() {
                this.setBonesToSetupPose(), this.setSlotsToSetupPose()
            },
            setBonesToSetupPose: function() {
                for (var a = this.bones, b = 0, c = a.length; c > b; b++) a[b].setToSetupPose()
            },
            setSlotsToSetupPose: function() {
                for (var a = this.slots, b = 0, c = a.length; c > b; b++) a[b].setToSetupPose(b)
            },
            getRootBone: function() {
                return this.bones.length ? this.bones[0] : null
            },
            findBone: function(a) {
                for (var b = this.bones, c = 0, d = b.length; d > c; c++)
                    if (b[c].data.name == a) return b[c];
                return null
            },
            findBoneIndex: function(a) {
                for (var b = this.bones, c = 0, d = b.length; d > c; c++)
                    if (b[c].data.name == a) return c;
                return -1
            },
            findSlot: function(a) {
                for (var b = this.slots, c = 0, d = b.length; d > c; c++)
                    if (b[c].data.name == a) return b[c];
                return null
            },
            findSlotIndex: function(a) {
                for (var b = this.slots, c = 0, d = b.length; d > c; c++)
                    if (b[c].data.name == a) return c;
                return -1
            },
            setSkinByName: function(a) {
                var b = this.data.findSkin(a);
                if (!b) throw "Skin not found: " + a;
                this.setSkin(b)
            },
            setSkin: function(a) {
                this.skin && a && a._attachAll(this, this.skin), this.skin = a
            },
            getAttachmentBySlotName: function(a, b) {
                return this.getAttachmentBySlotIndex(this.data.findSlotIndex(a), b)
            },
            getAttachmentBySlotIndex: function(a, b) {
                if (this.skin) {
                    var c = this.skin.getAttachment(a, b);
                    if (c) return c
                }
                return this.data.defaultSkin ? this.data.defaultSkin.getAttachment(a, b) : null
            },
            setAttachment: function(a, b) {
                for (var c = this.slots, d = 0, e = c.size; e > d; d++) {
                    var f = c[d];
                    if (f.data.name == a) {
                        var g = null;
                        if (b && (g = this.getAttachment(d, b), null == g)) throw "Attachment not found: " + b + ", for slot: " + a;
                        return void f.setAttachment(g)
                    }
                }
                throw "Slot not found: " + a
            },
            update: function(a) {
                time += a
            }
        }, i.AttachmentType = {
            region: 0
        }, i.RegionAttachment = function() {
            this.offset = [], this.offset.length = 8, this.uvs = [], this.uvs.length = 8
        }, i.RegionAttachment.prototype = {
            x: 0,
            y: 0,
            rotation: 0,
            scaleX: 1,
            scaleY: 1,
            width: 0,
            height: 0,
            rendererObject: null,
            regionOffsetX: 0,
            regionOffsetY: 0,
            regionWidth: 0,
            regionHeight: 0,
            regionOriginalWidth: 0,
            regionOriginalHeight: 0,
            setUVs: function(a, b, c, d, e) {
                var f = this.uvs;
                e ? (f[2] = a, f[3] = d, f[4] = a, f[5] = b, f[6] = c, f[7] = b, f[0] = c, f[1] = d) : (f[0] = a, f[1] = d, f[2] = a, f[3] = b, f[4] = c, f[5] = b, f[6] = c, f[7] = d)
            },
            updateOffset: function() {
                var a = this.width / this.regionOriginalWidth * this.scaleX,
                    b = this.height / this.regionOriginalHeight * this.scaleY,
                    c = -this.width / 2 * this.scaleX + this.regionOffsetX * a,
                    d = -this.height / 2 * this.scaleY + this.regionOffsetY * b,
                    e = c + this.regionWidth * a,
                    f = d + this.regionHeight * b,
                    g = this.rotation * Math.PI / 180,
                    h = Math.cos(g),
                    i = Math.sin(g),
                    j = c * h + this.x,
                    k = c * i,
                    l = d * h + this.y,
                    m = d * i,
                    n = e * h + this.x,
                    o = e * i,
                    p = f * h + this.y,
                    q = f * i,
                    r = this.offset;
                r[0] = j - m, r[1] = l + k, r[2] = j - q, r[3] = p + k, r[4] = n - q, r[5] = p + o, r[6] = n - m, r[7] = l + o
            },
            computeVertices: function(a, b, c, d) {
                a += c.worldX, b += c.worldY;
                var e = c.m00,
                    f = c.m01,
                    g = c.m10,
                    h = c.m11,
                    i = this.offset;
                d[0] = i[0] * e + i[1] * f + a, d[1] = i[0] * g + i[1] * h + b, d[2] = i[2] * e + i[3] * f + a, d[3] = i[2] * g + i[3] * h + b, d[4] = i[4] * e + i[5] * f + a, d[5] = i[4] * g + i[5] * h + b, d[6] = i[6] * e + i[7] * f + a, d[7] = i[6] * g + i[7] * h + b
            }
        }, i.AnimationStateData = function(a) {
            this.skeletonData = a, this.animationToMixTime = {}
        }, i.AnimationStateData.prototype = {
            defaultMix: 0,
            setMixByName: function(a, b, c) {
                var d = this.skeletonData.findAnimation(a);
                if (!d) throw "Animation not found: " + a;
                var e = this.skeletonData.findAnimation(b);
                if (!e) throw "Animation not found: " + b;
                this.setMix(d, e, c)
            },
            setMix: function(a, b, c) {
                this.animationToMixTime[a.name + ":" + b.name] = c
            },
            getMix: function(a, b) {
                var c = this.animationToMixTime[a.name + ":" + b.name];
                return c ? c : this.defaultMix
            }
        }, i.AnimationState = function(a) {
            this.data = a, this.queue = []
        }, i.AnimationState.prototype = {
            current: null,
            previous: null,
            currentTime: 0,
            previousTime: 0,
            currentLoop: !1,
            previousLoop: !1,
            mixTime: 0,
            mixDuration: 0,
            update: function(a) {
                if (this.currentTime += a, this.previousTime += a, this.mixTime += a, this.queue.length > 0) {
                    var b = this.queue[0];
                    this.currentTime >= b.delay && (this._setAnimation(b.animation, b.loop), this.queue.shift())
                }
            },
            apply: function(a) {
                if (this.current)
                    if (this.previous) {
                        this.previous.apply(a, this.previousTime, this.previousLoop);
                        var b = this.mixTime / this.mixDuration;
                        b >= 1 && (b = 1, this.previous = null), this.current.mix(a, this.currentTime, this.currentLoop, b)
                    } else this.current.apply(a, this.currentTime, this.currentLoop)
            },
            clearAnimation: function() {
                this.previous = null, this.current = null, this.queue.length = 0
            },
            _setAnimation: function(a, b) {
                this.previous = null, a && this.current && (this.mixDuration = this.data.getMix(this.current, a), this.mixDuration > 0 && (this.mixTime = 0, this.previous = this.current, this.previousTime = this.currentTime, this.previousLoop = this.currentLoop)), this.current = a, this.currentLoop = b, this.currentTime = 0
            },
            setAnimationByName: function(a, b) {
                var c = this.data.skeletonData.findAnimation(a);
                if (!c) throw "Animation not found: " + a;
                this.setAnimation(c, b)
            },
            setAnimation: function(a, b) {
                this.queue.length = 0, this._setAnimation(a, b)
            },
            addAnimationByName: function(a, b, c) {
                var d = this.data.skeletonData.findAnimation(a);
                if (!d) throw "Animation not found: " + a;
                this.addAnimation(d, b, c)
            },
            addAnimation: function(a, b, c) {
                var d = {};
                if (d.animation = a, d.loop = b, !c || 0 >= c) {
                    var e = this.queue.length ? this.queue[this.queue.length - 1].animation : this.current;
                    c = null != e ? e.duration - this.data.getMix(e, a) + (c || 0) : 0
                }
                d.delay = c, this.queue.push(d)
            },
            isComplete: function() {
                return !this.current || this.currentTime >= this.current.duration
            }
        }, i.SkeletonJson = function(a) {
            this.attachmentLoader = a
        }, i.SkeletonJson.prototype = {
            scale: 1,
            readSkeletonData: function(a) {
                for (var b, c = new i.SkeletonData, d = a.bones, e = 0, f = d.length; f > e; e++) {
                    var g = d[e],
                        h = null;
                    if (g.parent && (h = c.findBone(g.parent), !h)) throw "Parent bone not found: " + g.parent;
                    b = new i.BoneData(g.name, h), b.length = (g.length || 0) * this.scale, b.x = (g.x || 0) * this.scale, b.y = (g.y || 0) * this.scale, b.rotation = g.rotation || 0, b.scaleX = g.scaleX || 1, b.scaleY = g.scaleY || 1, c.bones.push(b)
                }
                var j = a.slots;
                for (e = 0, f = j.length; f > e; e++) {
                    var k = j[e];
                    if (b = c.findBone(k.bone), !b) throw "Slot bone not found: " + k.bone;
                    var l = new i.SlotData(k.name, b),
                        m = k.color;
                    m && (l.r = i.SkeletonJson.toColor(m, 0), l.g = i.SkeletonJson.toColor(m, 1), l.b = i.SkeletonJson.toColor(m, 2), l.a = i.SkeletonJson.toColor(m, 3)), l.attachmentName = k.attachment, c.slots.push(l)
                }
                var n = a.skins;
                for (var o in n)
                    if (n.hasOwnProperty(o)) {
                        var p = n[o],
                            q = new i.Skin(o);
                        for (var r in p)
                            if (p.hasOwnProperty(r)) {
                                var s = c.findSlotIndex(r),
                                    t = p[r];
                                for (var u in t)
                                    if (t.hasOwnProperty(u)) {
                                        var v = this.readAttachment(q, u, t[u]);
                                        null != v && q.addAttachment(s, u, v)
                                    }
                            }
                        c.skins.push(q), "default" == q.name && (c.defaultSkin = q)
                    }
                var w = a.animations;
                for (var x in w) w.hasOwnProperty(x) && this.readAnimation(x, w[x], c);
                return c
            },
            readAttachment: function(a, b, c) {
                b = c.name || b;
                var d = i.AttachmentType[c.type || "region"];
                if (d == i.AttachmentType.region) {
                    var e = new i.RegionAttachment;
                    return e.x = (c.x || 0) * this.scale, e.y = (c.y || 0) * this.scale, e.scaleX = c.scaleX || 1, e.scaleY = c.scaleY || 1, e.rotation = c.rotation || 0, e.width = (c.width || 32) * this.scale, e.height = (c.height || 32) * this.scale, e.updateOffset(), e.rendererObject = {}, e.rendererObject.name = b, e.rendererObject.scale = {}, e.rendererObject.scale.x = e.scaleX, e.rendererObject.scale.y = e.scaleY, e.rendererObject.rotation = -e.rotation * Math.PI / 180, e
                }
                throw "Unknown attachment type: " + d
            },
            readAnimation: function(a, b, c) {
                var d, e, f, g, h, j, k, l = [],
                    m = 0,
                    n = b.bones;
                for (var o in n)
                    if (n.hasOwnProperty(o)) {
                        var p = c.findBoneIndex(o);
                        if (-1 == p) throw "Bone not found: " + o;
                        var q = n[o];
                        for (f in q)
                            if (q.hasOwnProperty(f))
                                if (h = q[f], "rotate" == f) {
                                    for (e = new i.RotateTimeline(h.length), e.boneIndex = p, d = 0, j = 0, k = h.length; k > j; j++) g = h[j], e.setFrame(d, g.time, g.angle), i.SkeletonJson.readCurve(e, d, g), d++;
                                    l.push(e), m = Math.max(m, e.frames[2 * e.getFrameCount() - 2])
                                } else {
                                    if ("translate" != f && "scale" != f) throw "Invalid timeline type for a bone: " + f + " (" + o + ")";
                                    var r = 1;
                                    for ("scale" == f ? e = new i.ScaleTimeline(h.length) : (e = new i.TranslateTimeline(h.length), r = this.scale), e.boneIndex = p, d = 0, j = 0, k = h.length; k > j; j++) {
                                        g = h[j];
                                        var s = (g.x || 0) * r,
                                            t = (g.y || 0) * r;
                                        e.setFrame(d, g.time, s, t), i.SkeletonJson.readCurve(e, d, g), d++
                                    }
                                    l.push(e), m = Math.max(m, e.frames[3 * e.getFrameCount() - 3])
                                }
                    }
                var u = b.slots;
                for (var v in u)
                    if (u.hasOwnProperty(v)) {
                        var w = u[v],
                            x = c.findSlotIndex(v);
                        for (f in w)
                            if (w.hasOwnProperty(f))
                                if (h = w[f], "color" == f) {
                                    for (e = new i.ColorTimeline(h.length), e.slotIndex = x, d = 0, j = 0, k = h.length; k > j; j++) {
                                        g = h[j];
                                        var y = g.color,
                                            z = i.SkeletonJson.toColor(y, 0),
                                            A = i.SkeletonJson.toColor(y, 1),
                                            B = i.SkeletonJson.toColor(y, 2),
                                            C = i.SkeletonJson.toColor(y, 3);
                                        e.setFrame(d, g.time, z, A, B, C), i.SkeletonJson.readCurve(e, d, g), d++
                                    }
                                    l.push(e), m = Math.max(m, e.frames[5 * e.getFrameCount() - 5])
                                } else {
                                    if ("attachment" != f) throw "Invalid timeline type for a slot: " + f + " (" + v + ")";
                                    for (e = new i.AttachmentTimeline(h.length), e.slotIndex = x, d = 0, j = 0, k = h.length; k > j; j++) g = h[j], e.setFrame(d++, g.time, g.name);
                                    l.push(e), m = Math.max(m, e.frames[e.getFrameCount() - 1])
                                }
                    }
                c.animations.push(new i.Animation(a, l, m))
            }
        }, i.SkeletonJson.readCurve = function(a, b, c) {
            var d = c.curve;
            d && ("stepped" == d ? a.curves.setStepped(b) : d instanceof Array && a.curves.setCurve(b, d[0], d[1], d[2], d[3]))
        }, i.SkeletonJson.toColor = function(a, b) {
            if (8 != a.length) throw "Color hexidecimal length must be 8, recieved: " + a;
            return parseInt(a.substring(2 * b, 2), 16) / 255
        }, i.Atlas = function(a, b) {
            this.textureLoader = b, this.pages = [], this.regions = [];
            var c = new i.AtlasReader(a),
                d = [];
            d.length = 4;
            for (var e = null;;) {
                var f = c.readLine();
                if (null == f) break;
                if (f = c.trim(f), f.length)
                    if (e) {
                        var g = new i.AtlasRegion;
                        g.name = f, g.page = e, g.rotate = "true" == c.readValue(), c.readTuple(d);
                        var h = parseInt(d[0], 10),
                            j = parseInt(d[1], 10);
                        c.readTuple(d);
                        var k = parseInt(d[0], 10),
                            l = parseInt(d[1], 10);
                        g.u = h / e.width, g.v = j / e.height, g.rotate ? (g.u2 = (h + l) / e.width, g.v2 = (j + k) / e.height) : (g.u2 = (h + k) / e.width, g.v2 = (j + l) / e.height), g.x = h, g.y = j, g.width = Math.abs(k), g.height = Math.abs(l), 4 == c.readTuple(d) && (g.splits = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10), parseInt(d[3], 10)], 4 == c.readTuple(d) && (g.pads = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10), parseInt(d[3], 10)], c.readTuple(d))), g.originalWidth = parseInt(d[0], 10), g.originalHeight = parseInt(d[1], 10), c.readTuple(d), g.offsetX = parseInt(d[0], 10), g.offsetY = parseInt(d[1], 10), g.index = parseInt(c.readValue(), 10), this.regions.push(g)
                    } else {
                        e = new i.AtlasPage, e.name = f, e.format = i.Atlas.Format[c.readValue()], c.readTuple(d), e.minFilter = i.Atlas.TextureFilter[d[0]], e.magFilter = i.Atlas.TextureFilter[d[1]];
                        var m = c.readValue();
                        e.uWrap = i.Atlas.TextureWrap.clampToEdge, e.vWrap = i.Atlas.TextureWrap.clampToEdge, "x" == m ? e.uWrap = i.Atlas.TextureWrap.repeat : "y" == m ? e.vWrap = i.Atlas.TextureWrap.repeat : "xy" == m && (e.uWrap = e.vWrap = i.Atlas.TextureWrap.repeat), b.load(e, f), this.pages.push(e)
                    } else e = null
            }
        }, i.Atlas.prototype = {
            findRegion: function(a) {
                for (var b = this.regions, c = 0, d = b.length; d > c; c++)
                    if (b[c].name == a) return b[c];
                return null
            },
            dispose: function() {
                for (var a = this.pages, b = 0, c = a.length; c > b; b++) this.textureLoader.unload(a[b].rendererObject)
            },
            updateUVs: function(a) {
                for (var b = this.regions, c = 0, d = b.length; d > c; c++) {
                    var e = b[c];
                    e.page == a && (e.u = e.x / a.width, e.v = e.y / a.height, e.rotate ? (e.u2 = (e.x + e.height) / a.width, e.v2 = (e.y + e.width) / a.height) : (e.u2 = (e.x + e.width) / a.width, e.v2 = (e.y + e.height) / a.height))
                }
            }
        }, i.Atlas.Format = {
            alpha: 0,
            intensity: 1,
            luminanceAlpha: 2,
            rgb565: 3,
            rgba4444: 4,
            rgb888: 5,
            rgba8888: 6
        }, i.Atlas.TextureFilter = {
            nearest: 0,
            linear: 1,
            mipMap: 2,
            mipMapNearestNearest: 3,
            mipMapLinearNearest: 4,
            mipMapNearestLinear: 5,
            mipMapLinearLinear: 6
        }, i.Atlas.TextureWrap = {
            mirroredRepeat: 0,
            clampToEdge: 1,
            repeat: 2
        }, i.AtlasPage = function() {}, i.AtlasPage.prototype = {
            name: null,
            format: null,
            minFilter: null,
            magFilter: null,
            uWrap: null,
            vWrap: null,
            rendererObject: null,
            width: 0,
            height: 0
        }, i.AtlasRegion = function() {}, i.AtlasRegion.prototype = {
            page: null,
            name: null,
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            u: 0,
            v: 0,
            u2: 0,
            v2: 0,
            offsetX: 0,
            offsetY: 0,
            originalWidth: 0,
            originalHeight: 0,
            index: 0,
            rotate: !1,
            splits: null,
            pads: null
        }, i.AtlasReader = function(a) {
            this.lines = a.split(/\r\n|\r|\n/)
        }, i.AtlasReader.prototype = {
            index: 0,
            trim: function(a) {
                return a.replace(/^\s+|\s+$/g, "")
            },
            readLine: function() {
                return this.index >= this.lines.length ? null : this.lines[this.index++]
            },
            readValue: function() {
                var a = this.readLine(),
                    b = a.indexOf(":");
                if (-1 == b) throw "Invalid line: " + a;
                return this.trim(a.substring(b + 1))
            },
            readTuple: function(a) {
                var b = this.readLine(),
                    c = b.indexOf(":");
                if (-1 == c) throw "Invalid line: " + b;
                for (var d = 0, e = c + 1; 3 > d; d++) {
                    var f = b.indexOf(",", e);
                    if (-1 == f) {
                        if (!d) throw "Invalid line: " + b;
                        break
                    }
                    a[d] = this.trim(b.substr(e, f - e)), e = f + 1
                }
                return a[d] = this.trim(b.substring(e)), d + 1
            }
        }, i.AtlasAttachmentLoader = function(a) {
            this.atlas = a
        }, i.AtlasAttachmentLoader.prototype = {
            newAttachment: function(a, b, c) {
                switch (b) {
                    case i.AttachmentType.region:
                        var d = this.atlas.findRegion(c);
                        if (!d) throw "Region not found in atlas: " + c + " (" + b + ")";
                        var e = new i.RegionAttachment(c);
                        return e.rendererObject = d, e.setUVs(d.u, d.v, d.u2, d.v2, d.rotate), e.regionOffsetX = d.offsetX, e.regionOffsetY = d.offsetY, e.regionWidth = d.width, e.regionHeight = d.height, e.regionOriginalWidth = d.originalWidth, e.regionOriginalHeight = d.originalHeight, e
                }
                throw "Unknown attachment type: " + b
            }
        }, i.Bone.yDown = !0, d.AnimCache = {}, d.Spine = function(a) {
            if (d.DisplayObjectContainer.call(this), this.spineData = d.AnimCache[a], !this.spineData) throw new Error("Spine data must be preloaded using PIXI.SpineLoader or PIXI.AssetLoader: " + a);
            this.skeleton = new i.Skeleton(this.spineData), this.skeleton.updateWorldTransform(), this.stateData = new i.AnimationStateData(this.spineData), this.state = new i.AnimationState(this.stateData), this.slotContainers = [];
            for (var b = 0, c = this.skeleton.drawOrder.length; c > b; b++) {
                var e = this.skeleton.drawOrder[b],
                    f = e.attachment,
                    g = new d.DisplayObjectContainer;
                if (this.slotContainers.push(g), this.addChild(g), f instanceof i.RegionAttachment) {
                    var h = f.rendererObject.name,
                        j = this.createSprite(e, f.rendererObject);
                    e.currentSprite = j, e.currentSpriteName = h, g.addChild(j)
                }
            }
        }, d.Spine.prototype = Object.create(d.DisplayObjectContainer.prototype), d.Spine.prototype.constructor = d.Spine, d.Spine.prototype.updateTransform = function() {
            this.lastTime = this.lastTime || Date.now();
            var a = .001 * (Date.now() - this.lastTime);
            this.lastTime = Date.now(), this.state.update(a), this.state.apply(this.skeleton), this.skeleton.updateWorldTransform();
            for (var b = this.skeleton.drawOrder, c = 0, e = b.length; e > c; c++) {
                var f = b[c],
                    g = f.attachment,
                    h = this.slotContainers[c];
                if (g instanceof i.RegionAttachment) {
                    if (g.rendererObject && (!f.currentSpriteName || f.currentSpriteName != g.name)) {
                        var j = g.rendererObject.name;
                        if (void 0 !== f.currentSprite && (f.currentSprite.visible = !1), f.sprites = f.sprites || {}, void 0 !== f.sprites[j]) f.sprites[j].visible = !0;
                        else {
                            var k = this.createSprite(f, g.rendererObject);
                            h.addChild(k)
                        }
                        f.currentSprite = f.sprites[j], f.currentSpriteName = j
                    }
                    h.visible = !0;
                    var l = f.bone;
                    h.position.x = l.worldX + g.x * l.m00 + g.y * l.m01, h.position.y = l.worldY + g.x * l.m10 + g.y * l.m11, h.scale.x = l.worldScaleX, h.scale.y = l.worldScaleY, h.rotation = -(f.bone.worldRotation * Math.PI / 180)
                } else h.visible = !1
            }
            d.DisplayObjectContainer.prototype.updateTransform.call(this)
        }, d.Spine.prototype.createSprite = function(a, b) {
            var c = d.TextureCache[b.name] ? b.name : b.name + ".png",
                e = new d.Sprite(d.Texture.fromFrame(c));
            return e.scale = b.scale, e.rotation = b.rotation, e.anchor.x = e.anchor.y = .5, a.sprites = a.sprites || {}, a.sprites[b.name] = e, e
        }, d.BaseTextureCache = {}, d.texturesToUpdate = [], d.texturesToDestroy = [], d.BaseTextureCacheIdGenerator = 0, d.BaseTexture = function(a, b) {
            if (d.EventTarget.call(this), this.width = 100, this.height = 100, this.scaleMode = b || d.scaleModes.DEFAULT, this.hasLoaded = !1, this.source = a, this.id = d.BaseTextureCacheIdGenerator++, this._glTextures = [], a) {
                if ((this.source.complete || this.source.getContext) && this.source.width && this.source.height) this.hasLoaded = !0, this.width = this.source.width, this.height = this.source.height, d.texturesToUpdate.push(this);
                else {
                    var c = this;
                    this.source.onload = function() {
                        c.hasLoaded = !0, c.width = c.source.width, c.height = c.source.height, d.texturesToUpdate.push(c), c.dispatchEvent({
                            type: "loaded",
                            content: c
                        })
                    }
                }
                this.imageUrl = null, this._powerOf2 = !1
            }
        }, d.BaseTexture.prototype.constructor = d.BaseTexture, d.BaseTexture.prototype.destroy = function() {
            this.imageUrl && (delete d.BaseTextureCache[this.imageUrl], this.imageUrl = null, this.source.src = null), this.source = null, d.texturesToDestroy.push(this)
        }, d.BaseTexture.prototype.updateSourceImage = function(a) {
            this.hasLoaded = !1, this.source.src = null, this.source.src = a
        }, d.BaseTexture.fromImage = function(a, b, c) {
            var e = d.BaseTextureCache[a];
            if (void 0 === b && -1 === a.indexOf("data:") && (b = !0), !e) {
                var f = new Image;
                b && (f.crossOrigin = ""), f.src = a, e = new d.BaseTexture(f, c), e.imageUrl = a, d.BaseTextureCache[a] = e
            }
            return e
        }, d.BaseTexture.fromCanvas = function(a, b) {
            a._pixiId || (a._pixiId = "canvas_" + d.TextureCacheIdGenerator++);
            var c = d.BaseTextureCache[a._pixiId];
            return c || (c = new d.BaseTexture(a, b), d.BaseTextureCache[a._pixiId] = c), c
        }, d.TextureCache = {}, d.FrameCache = {}, d.TextureCacheIdGenerator = 0, d.Texture = function(a, b) {
            if (d.EventTarget.call(this), b || (this.noFrame = !0, b = new d.Rectangle(0, 0, 1, 1)), a instanceof d.Texture && (a = a.baseTexture), this.baseTexture = a, this.frame = b, this.trim = null, this.scope = this, this._uvs = null, a.hasLoaded) this.noFrame && (b = new d.Rectangle(0, 0, a.width, a.height)), this.setFrame(b);
            else {
                var c = this;
                a.addEventListener("loaded", function() {
                    c.onBaseTextureLoaded()
                })
            }
        }, d.Texture.prototype.constructor = d.Texture, d.Texture.prototype.onBaseTextureLoaded = function() {
            var a = this.baseTexture;
            a.removeEventListener("loaded", this.onLoaded), this.noFrame && (this.frame = new d.Rectangle(0, 0, a.width, a.height)), this.setFrame(this.frame), this.scope.dispatchEvent({
                type: "update",
                content: this
            })
        }, d.Texture.prototype.destroy = function(a) {
            a && this.baseTexture.destroy()
        }, d.Texture.prototype.setFrame = function(a) {
            if (this.frame = a, this.width = a.width, this.height = a.height, a.x + a.width > this.baseTexture.width || a.y + a.height > this.baseTexture.height) throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
            this.updateFrame = !0, d.Texture.frameUpdates.push(this)
        }, d.Texture.prototype._updateWebGLuvs = function() {
            this._uvs || (this._uvs = new d.TextureUvs);
            var a = this.frame,
                b = this.baseTexture.width,
                c = this.baseTexture.height;
            this._uvs.x0 = a.x / b, this._uvs.y0 = a.y / c, this._uvs.x1 = (a.x + a.width) / b, this._uvs.y1 = a.y / c, this._uvs.x2 = (a.x + a.width) / b, this._uvs.y2 = (a.y + a.height) / c, this._uvs.x3 = a.x / b, this._uvs.y3 = (a.y + a.height) / c
        }, d.Texture.fromImage = function(a, b, c) {
            var e = d.TextureCache[a];
            return e || (e = new d.Texture(d.BaseTexture.fromImage(a, b, c)), d.TextureCache[a] = e), e
        }, d.Texture.fromFrame = function(a) {
            var b = d.TextureCache[a];
            if (!b) throw new Error('The frameId "' + a + '" does not exist in the texture cache ');
            return b
        }, d.Texture.fromCanvas = function(a, b) {
            var c = d.BaseTexture.fromCanvas(a, b);
            return new d.Texture(c)
        }, d.Texture.addTextureToCache = function(a, b) {
            d.TextureCache[b] = a
        }, d.Texture.removeTextureFromCache = function(a) {
            var b = d.TextureCache[a];
            return delete d.TextureCache[a], delete d.BaseTextureCache[a], b
        }, d.Texture.frameUpdates = [], d.TextureUvs = function() {
            this.x0 = 0, this.y0 = 0, this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.x3 = 0, this.y4 = 0
        }, d.RenderTexture = function(a, b, c, e) {
            if (d.EventTarget.call(this), this.width = a || 100, this.height = b || 100, this.frame = new d.Rectangle(0, 0, this.width, this.height), this.baseTexture = new d.BaseTexture, this.baseTexture.width = this.width, this.baseTexture.height = this.height, this.baseTexture._glTextures = [], this.baseTexture.scaleMode = e || d.scaleModes.DEFAULT, this.baseTexture.hasLoaded = !0, this.renderer = c || d.defaultRenderer, this.renderer.type === d.WEBGL_RENDERER) {
                var f = this.renderer.gl;
                this.textureBuffer = new d.FilterTexture(f, this.width, this.height, this.baseTexture.scaleMode), this.baseTexture._glTextures[f.id] = this.textureBuffer.texture, this.render = this.renderWebGL, this.projection = new d.Point(this.width / 2, -this.height / 2)
            } else this.render = this.renderCanvas, this.textureBuffer = new d.CanvasBuffer(this.width, this.height), this.baseTexture.source = this.textureBuffer.canvas;
            d.Texture.frameUpdates.push(this)
        }, d.RenderTexture.prototype = Object.create(d.Texture.prototype), d.RenderTexture.prototype.constructor = d.RenderTexture, d.RenderTexture.prototype.resize = function(a, b) {
            if (this.width = a, this.height = b, this.frame.width = this.width, this.frame.height = this.height, this.renderer.type === d.WEBGL_RENDERER) {
                this.projection.x = this.width / 2, this.projection.y = -this.height / 2;
                var c = this.renderer.gl;
                c.bindTexture(c.TEXTURE_2D, this.baseTexture._glTextures[c.id]), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, this.width, this.height, 0, c.RGBA, c.UNSIGNED_BYTE, null)
            } else this.textureBuffer.resize(this.width, this.height);
            d.Texture.frameUpdates.push(this)
        }, d.RenderTexture.prototype.renderWebGL = function(a, b, c) {
            var e = this.renderer.gl;
            e.colorMask(!0, !0, !0, !0), e.viewport(0, 0, this.width, this.height), e.bindFramebuffer(e.FRAMEBUFFER, this.textureBuffer.frameBuffer), c && this.textureBuffer.clear();
            var f = a.children,
                g = a.worldTransform;
            a.worldTransform = d.RenderTexture.tempMatrix, a.worldTransform.d = -1, a.worldTransform.ty = -2 * this.projection.y, b && (a.worldTransform.tx = b.x, a.worldTransform.ty -= b.y);
            for (var h = 0, i = f.length; i > h; h++) f[h].updateTransform();
            d.WebGLRenderer.updateTextures(), this.renderer.renderDisplayObject(a, this.projection, this.textureBuffer.frameBuffer), a.worldTransform = g
        }, d.RenderTexture.prototype.renderCanvas = function(a, b, c) {
            var e = a.children,
                f = a.worldTransform;
            a.worldTransform = d.RenderTexture.tempMatrix, b && (a.worldTransform.tx = b.x, a.worldTransform.ty = b.y);
            for (var g = 0, h = e.length; h > g; g++) e[g].updateTransform();
            c && this.textureBuffer.clear();
            var i = this.textureBuffer.context;
            this.renderer.renderDisplayObject(a, i), i.setTransform(1, 0, 0, 1, 0, 0), a.worldTransform = f
        }, d.RenderTexture.tempMatrix = new d.Matrix, d.AssetLoader = function(a, b) {
            d.EventTarget.call(this), this.assetURLs = a, this.crossorigin = b, this.loadersByType = {
                jpg: d.ImageLoader,
                jpeg: d.ImageLoader,
                png: d.ImageLoader,
                gif: d.ImageLoader,
                json: d.JsonLoader,
                atlas: d.AtlasLoader,
                anim: d.SpineLoader,
                xml: d.BitmapFontLoader,
                fnt: d.BitmapFontLoader
            }
        }, d.AssetLoader.prototype.constructor = d.AssetLoader, d.AssetLoader.prototype._getDataType = function(a) {
            var b = "data:",
                c = a.slice(0, b.length).toLowerCase();
            if (c === b) {
                var d = a.slice(b.length),
                    e = d.indexOf(",");
                if (-1 === e) return null;
                var f = d.slice(0, e).split(";")[0];
                return f && "text/plain" !== f.toLowerCase() ? f.split("/").pop().toLowerCase() : "txt"
            }
            return null
        }, d.AssetLoader.prototype.load = function() {
            function a(a) {
                b.onAssetLoaded(a.content)
            }
            var b = this;
            this.loadCount = this.assetURLs.length;
            for (var c = 0; c < this.assetURLs.length; c++) {
                var d = this.assetURLs[c],
                    e = this._getDataType(d);
                e || (e = d.split("?").shift().split(".").pop().toLowerCase());
                var f = this.loadersByType[e];
                if (!f) throw new Error(e + " is an unsupported file type");
                var g = new f(d, this.crossorigin);
                g.addEventListener("loaded", a), g.load()
            }
        }, d.AssetLoader.prototype.onAssetLoaded = function(a) {
            this.loadCount--, this.dispatchEvent({
                type: "onProgress",
                content: this,
                loader: a
            }), this.onProgress && this.onProgress(a), this.loadCount || (this.dispatchEvent({
                type: "onComplete",
                content: this
            }), this.onComplete && this.onComplete())
        }, d.JsonLoader = function(a, b) {
            d.EventTarget.call(this), this.url = a, this.crossorigin = b, this.baseUrl = a.replace(/[^\/]*$/, ""), this.loaded = !1
        }, d.JsonLoader.prototype.constructor = d.JsonLoader, d.JsonLoader.prototype.load = function() {
            var a = this;
            window.XDomainRequest ? (this.ajaxRequest = new window.XDomainRequest, this.ajaxRequest.timeout = 3e3, this.ajaxRequest.onerror = function() {
                a.onError()
            }, this.ajaxRequest.ontimeout = function() {
                a.onError()
            }, this.ajaxRequest.onprogress = function() {}) : this.ajaxRequest = window.XMLHttpRequest ? new window.XMLHttpRequest : new window.ActiveXObject("Microsoft.XMLHTTP"), this.ajaxRequest.onload = function() {
                a.onJSONLoaded()
            }, this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.send()
        }, d.JsonLoader.prototype.onJSONLoaded = function() {
            if (!this.ajaxRequest.responseText) return void this.onError();
            if (this.json = JSON.parse(this.ajaxRequest.responseText), this.json.frames) {
                var a = this,
                    b = this.baseUrl + this.json.meta.image,
                    c = new d.ImageLoader(b, this.crossorigin),
                    e = this.json.frames;
                this.texture = c.texture.baseTexture, c.addEventListener("loaded", function() {
                    a.onLoaded()
                });
                for (var f in e) {
                    var g = e[f].frame;
                    if (g && (d.TextureCache[f] = new d.Texture(this.texture, {
                            x: g.x,
                            y: g.y,
                            width: g.w,
                            height: g.h
                        }), e[f].trimmed)) {
                        var h = d.TextureCache[f],
                            j = e[f].sourceSize,
                            k = e[f].spriteSourceSize;
                        h.trim = new d.Rectangle(k.x, k.y, j.w, j.h)
                    }
                }
                c.load()
            } else if (this.json.bones) {
                var l = new i.SkeletonJson,
                    m = l.readSkeletonData(this.json);
                d.AnimCache[this.url] = m, this.onLoaded()
            } else this.onLoaded()
        }, d.JsonLoader.prototype.onLoaded = function() {
            this.loaded = !0, this.dispatchEvent({
                type: "loaded",
                content: this
            })
        }, d.JsonLoader.prototype.onError = function() {
            this.dispatchEvent({
                type: "error",
                content: this
            })
        }, d.AtlasLoader = function(a, b) {
            d.EventTarget.call(this), this.url = a, this.baseUrl = a.replace(/[^\/]*$/, ""), this.crossorigin = b, this.loaded = !1
        }, d.AtlasLoader.constructor = d.AtlasLoader, d.AtlasLoader.prototype.load = function() {
            this.ajaxRequest = new d.AjaxRequest, this.ajaxRequest.onreadystatechange = this.onAtlasLoaded.bind(this), this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.overrideMimeType && this.ajaxRequest.overrideMimeType("application/json"), this.ajaxRequest.send(null)
        }, d.AtlasLoader.prototype.onAtlasLoaded = function() {
            if (4 === this.ajaxRequest.readyState)
                if (200 === this.ajaxRequest.status || -1 === window.location.href.indexOf("http")) {
                    this.atlas = {
                        meta: {
                            image: []
                        },
                        frames: []
                    };
                    var a = this.ajaxRequest.responseText.split(/\r?\n/),
                        b = -3,
                        c = 0,
                        e = null,
                        f = !1,
                        g = 0,
                        h = 0,
                        i = this.onLoaded.bind(this);
                    for (g = 0; g < a.length; g++)
                        if (a[g] = a[g].replace(/^\s+|\s+$/g, ""), "" === a[g] && (f = g + 1), a[g].length > 0) {
                            if (f === g) this.atlas.meta.image.push(a[g]), c = this.atlas.meta.image.length - 1, this.atlas.frames.push({}), b = -3;
                            else if (b > 0)
                                if (b % 7 === 1) null != e && (this.atlas.frames[c][e.name] = e), e = {
                                    name: a[g],
                                    frame: {}
                                };
                                else {
                                    var j = a[g].split(" ");
                                    if (b % 7 === 3) e.frame.x = Number(j[1].replace(",", "")), e.frame.y = Number(j[2]);
                                    else if (b % 7 === 4) e.frame.w = Number(j[1].replace(",", "")), e.frame.h = Number(j[2]);
                                    else if (b % 7 === 5) {
                                        var k = {
                                            x: 0,
                                            y: 0,
                                            w: Number(j[1].replace(",", "")),
                                            h: Number(j[2])
                                        };
                                        k.w > e.frame.w || k.h > e.frame.h ? (e.trimmed = !0, e.realSize = k) : e.trimmed = !1
                                    }
                                }
                            b++
                        }
                    if (null != e && (this.atlas.frames[c][e.name] = e), this.atlas.meta.image.length > 0) {
                        for (this.images = [], h = 0; h < this.atlas.meta.image.length; h++) {
                            var l = this.baseUrl + this.atlas.meta.image[h],
                                m = this.atlas.frames[h];
                            this.images.push(new d.ImageLoader(l, this.crossorigin));
                            for (g in m) {
                                var n = m[g].frame;
                                n && (d.TextureCache[g] = new d.Texture(this.images[h].texture.baseTexture, {
                                    x: n.x,
                                    y: n.y,
                                    width: n.w,
                                    height: n.h
                                }), m[g].trimmed && (d.TextureCache[g].realSize = m[g].realSize, d.TextureCache[g].trim.x = 0, d.TextureCache[g].trim.y = 0))
                            }
                        }
                        for (this.currentImageId = 0, h = 0; h < this.images.length; h++) this.images[h].addEventListener("loaded", i);
                        this.images[this.currentImageId].load()
                    } else this.onLoaded()
                } else this.onError()
        }, d.AtlasLoader.prototype.onLoaded = function() {
            this.images.length - 1 > this.currentImageId ? (this.currentImageId++, this.images[this.currentImageId].load()) : (this.loaded = !0, this.dispatchEvent({
                type: "loaded",
                content: this
            }))
        }, d.AtlasLoader.prototype.onError = function() {
            this.dispatchEvent({
                type: "error",
                content: this
            })
        }, d.SpriteSheetLoader = function(a, b) {
            d.EventTarget.call(this), this.url = a, this.crossorigin = b, this.baseUrl = a.replace(/[^\/]*$/, ""), this.texture = null, this.frames = {}
        }, d.SpriteSheetLoader.prototype.constructor = d.SpriteSheetLoader, d.SpriteSheetLoader.prototype.load = function() {
            var a = this,
                b = new d.JsonLoader(this.url, this.crossorigin);
            b.addEventListener("loaded", function(b) {
                a.json = b.content.json, a.onLoaded()
            }), b.load()
        }, d.SpriteSheetLoader.prototype.onLoaded = function() {
            this.dispatchEvent({
                type: "loaded",
                content: this
            })
        }, d.ImageLoader = function(a, b) {
            d.EventTarget.call(this), this.texture = d.Texture.fromImage(a, b), this.frames = []
        }, d.ImageLoader.prototype.constructor = d.ImageLoader, d.ImageLoader.prototype.load = function() {
            if (this.texture.baseTexture.hasLoaded) this.onLoaded();
            else {
                var a = this;
                this.texture.baseTexture.addEventListener("loaded", function() {
                    a.onLoaded()
                })
            }
        }, d.ImageLoader.prototype.onLoaded = function() {
            this.dispatchEvent({
                type: "loaded",
                content: this
            })
        }, d.ImageLoader.prototype.loadFramedSpriteSheet = function(a, b, c) {
            this.frames = [];
            for (var e = Math.floor(this.texture.width / a), f = Math.floor(this.texture.height / b), g = 0, h = 0; f > h; h++)
                for (var i = 0; e > i; i++, g++) {
                    var j = new d.Texture(this.texture, {
                        x: i * a,
                        y: h * b,
                        width: a,
                        height: b
                    });
                    this.frames.push(j), c && (d.TextureCache[c + "-" + g] = j)
                }
            if (this.texture.baseTexture.hasLoaded) this.onLoaded();
            else {
                var k = this;
                this.texture.baseTexture.addEventListener("loaded", function() {
                    k.onLoaded()
                })
            }
        }, d.BitmapFontLoader = function(a, b) {
            d.EventTarget.call(this), this.url = a, this.crossorigin = b, this.baseUrl = a.replace(/[^\/]*$/, ""), this.texture = null
        }, d.BitmapFontLoader.prototype.constructor = d.BitmapFontLoader, d.BitmapFontLoader.prototype.load = function() {
            this.ajaxRequest = new d.AjaxRequest;
            var a = this;
            this.ajaxRequest.onreadystatechange = function() {
                a.onXMLLoaded()
            }, this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.overrideMimeType && this.ajaxRequest.overrideMimeType("application/xml"), this.ajaxRequest.send(null)
        }, d.BitmapFontLoader.prototype.onXMLLoaded = function() {
            if (4 === this.ajaxRequest.readyState && (200 === this.ajaxRequest.status || -1 === window.location.protocol.indexOf("http"))) {
                var a = this.ajaxRequest.responseXML;
                if (!a || /MSIE 9/i.test(navigator.userAgent) || navigator.isCocoonJS)
                    if ("function" == typeof window.DOMParser) {
                        var b = new DOMParser;
                        a = b.parseFromString(this.ajaxRequest.responseText, "text/xml")
                    } else {
                        var c = document.createElement("div");
                        c.innerHTML = this.ajaxRequest.responseText, a = c
                    }
                var e = this.baseUrl + a.getElementsByTagName("page")[0].getAttribute("file"),
                    f = new d.ImageLoader(e, this.crossorigin);
                this.texture = f.texture.baseTexture;
                var g = {},
                    h = a.getElementsByTagName("info")[0],
                    i = a.getElementsByTagName("common")[0];
                g.font = h.getAttribute("face"), g.size = parseInt(h.getAttribute("size"), 10), g.lineHeight = parseInt(i.getAttribute("lineHeight"), 10), g.chars = {};
                for (var j = a.getElementsByTagName("char"), k = 0; k < j.length; k++) {
                    var l = parseInt(j[k].getAttribute("id"), 10),
                        m = new d.Rectangle(parseInt(j[k].getAttribute("x"), 10), parseInt(j[k].getAttribute("y"), 10), parseInt(j[k].getAttribute("width"), 10), parseInt(j[k].getAttribute("height"), 10));
                    g.chars[l] = {
                        xOffset: parseInt(j[k].getAttribute("xoffset"), 10),
                        yOffset: parseInt(j[k].getAttribute("yoffset"), 10),
                        xAdvance: parseInt(j[k].getAttribute("xadvance"), 10),
                        kerning: {},
                        texture: d.TextureCache[l] = new d.Texture(this.texture, m)
                    }
                }
                var n = a.getElementsByTagName("kerning");
                for (k = 0; k < n.length; k++) {
                    var o = parseInt(n[k].getAttribute("first"), 10),
                        p = parseInt(n[k].getAttribute("second"), 10),
                        q = parseInt(n[k].getAttribute("amount"), 10);
                    g.chars[p].kerning[o] = q
                }
                d.BitmapText.fonts[g.font] = g;
                var r = this;
                f.addEventListener("loaded", function() {
                    r.onLoaded()
                }), f.load()
            }
        }, d.BitmapFontLoader.prototype.onLoaded = function() {
            this.dispatchEvent({
                type: "loaded",
                content: this
            })
        }, d.SpineLoader = function(a, b) {
            d.EventTarget.call(this), this.url = a, this.crossorigin = b, this.loaded = !1
        }, d.SpineLoader.prototype.constructor = d.SpineLoader, d.SpineLoader.prototype.load = function() {
            var a = this,
                b = new d.JsonLoader(this.url, this.crossorigin);
            b.addEventListener("loaded", function(b) {
                a.json = b.content.json, a.onLoaded()
            }), b.load()
        }, d.SpineLoader.prototype.onLoaded = function() {
            this.loaded = !0, this.dispatchEvent({
                type: "loaded",
                content: this
            })
        }, d.AbstractFilter = function(a, b) {
            this.passes = [this], this.shaders = [], this.dirty = !0, this.padding = 0, this.uniforms = b || {}, this.fragmentSrc = a || []
        }, d.AlphaMaskFilter = function(a) {
            d.AbstractFilter.call(this), this.passes = [this], a.baseTexture._powerOf2 = !0, this.uniforms = {
                mask: {
                    type: "sampler2D",
                    value: a
                },
                mapDimensions: {
                    type: "2f",
                    value: {
                        x: 1,
                        y: 5112
                    }
                },
                dimensions: {
                    type: "4fv",
                    value: [0, 0, 0, 0]
                }
            }, a.baseTexture.hasLoaded ? (this.uniforms.mask.value.x = a.width, this.uniforms.mask.value.y = a.height) : (this.boundLoadedFunction = this.onTextureLoaded.bind(this), a.baseTexture.on("loaded", this.boundLoadedFunction)), this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D mask;", "uniform sampler2D uSampler;", "uniform vec2 offset;", "uniform vec4 dimensions;", "uniform vec2 mapDimensions;", "void main(void) {", "   vec2 mapCords = vTextureCoord.xy;", "   mapCords += (dimensions.zw + offset)/ dimensions.xy ;", "   mapCords.y *= -1.0;", "   mapCords.y += 1.0;", "   mapCords *= dimensions.xy / mapDimensions;", "   vec4 original =  texture2D(uSampler, vTextureCoord);", "   float maskAlpha =  texture2D(mask, mapCords).r;", "   original *= maskAlpha;", "   gl_FragColor =  original;", "}"]
        }, d.AlphaMaskFilter.prototype = Object.create(d.AbstractFilter.prototype), d.AlphaMaskFilter.prototype.constructor = d.AlphaMaskFilter, d.AlphaMaskFilter.prototype.onTextureLoaded = function() {
            this.uniforms.mapDimensions.value.x = this.uniforms.mask.value.width, this.uniforms.mapDimensions.value.y = this.uniforms.mask.value.height, this.uniforms.mask.value.baseTexture.off("loaded", this.boundLoadedFunction)
        }, Object.defineProperty(d.AlphaMaskFilter.prototype, "map", {
            get: function() {
                return this.uniforms.mask.value
            },
            set: function(a) {
                this.uniforms.mask.value = a
            }
        }), d.ColorMatrixFilter = function() {
            d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                matrix: {
                    type: "mat4",
                    value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float invert;", "uniform mat4 matrix;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * matrix;", "}"]
        }, d.ColorMatrixFilter.prototype = Object.create(d.AbstractFilter.prototype), d.ColorMatrixFilter.prototype.constructor = d.ColorMatrixFilter, Object.defineProperty(d.ColorMatrixFilter.prototype, "matrix", {
            get: function() {
                return this.uniforms.matrix.value
            },
            set: function(a) {
                this.uniforms.matrix.value = a
            }
        }), d.GrayFilter = function() {
            d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                gray: {
                    type: "1f",
                    value: 1
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "uniform float gray;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord);", "   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);", "}"]
        }, d.GrayFilter.prototype = Object.create(d.AbstractFilter.prototype), d.GrayFilter.prototype.constructor = d.GrayFilter, Object.defineProperty(d.GrayFilter.prototype, "gray", {
            get: function() {
                return this.uniforms.gray.value
            },
            set: function(a) {
                this.uniforms.gray.value = a
            }
        }), d.DisplacementFilter = function(a) {
            d.AbstractFilter.call(this), this.passes = [this], a.baseTexture._powerOf2 = !0, this.uniforms = {
                displacementMap: {
                    type: "sampler2D",
                    value: a
                },
                scale: {
                    type: "2f",
                    value: {
                        x: 30,
                        y: 30
                    }
                },
                offset: {
                    type: "2f",
                    value: {
                        x: 0,
                        y: 0
                    }
                },
                mapDimensions: {
                    type: "2f",
                    value: {
                        x: 1,
                        y: 5112
                    }
                },
                dimensions: {
                    type: "4fv",
                    value: [0, 0, 0, 0]
                }
            }, a.baseTexture.hasLoaded ? (this.uniforms.mapDimensions.value.x = a.width, this.uniforms.mapDimensions.value.y = a.height) : (this.boundLoadedFunction = this.onTextureLoaded.bind(this), a.baseTexture.on("loaded", this.boundLoadedFunction)), this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D displacementMap;", "uniform sampler2D uSampler;", "uniform vec2 scale;", "uniform vec2 offset;", "uniform vec4 dimensions;", "uniform vec2 mapDimensions;", "void main(void) {", "   vec2 mapCords = vTextureCoord.xy;", "   mapCords += (dimensions.zw + offset)/ dimensions.xy ;", "   mapCords.y *= -1.0;", "   mapCords.y += 1.0;", "   vec2 matSample = texture2D(displacementMap, mapCords).xy;", "   matSample -= 0.5;", "   matSample *= scale;", "   matSample /= mapDimensions;", "   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + matSample.x, vTextureCoord.y + matSample.y));", "   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb, 1.0);", "   vec2 cord = vTextureCoord;", "}"]
        }, d.DisplacementFilter.prototype = Object.create(d.AbstractFilter.prototype), d.DisplacementFilter.prototype.constructor = d.DisplacementFilter, d.DisplacementFilter.prototype.onTextureLoaded = function() {
            this.uniforms.mapDimensions.value.x = this.uniforms.displacementMap.value.width, this.uniforms.mapDimensions.value.y = this.uniforms.displacementMap.value.height, this.uniforms.displacementMap.value.baseTexture.off("loaded", this.boundLoadedFunction)
        }, Object.defineProperty(d.DisplacementFilter.prototype, "map", {
            get: function() {
                return this.uniforms.displacementMap.value
            },
            set: function(a) {
                this.uniforms.displacementMap.value = a
            }
        }), Object.defineProperty(d.DisplacementFilter.prototype, "scale", {
            get: function() {
                return this.uniforms.scale.value
            },
            set: function(a) {
                this.uniforms.scale.value = a
            }
        }), Object.defineProperty(d.DisplacementFilter.prototype, "offset", {
            get: function() {
                return this.uniforms.offset.value
            },
            set: function(a) {
                this.uniforms.offset.value = a
            }
        }), d.PixelateFilter = function() {
            d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                invert: {
                    type: "1f",
                    value: 0
                },
                dimensions: {
                    type: "4fv",
                    value: new Float32Array([1e4, 100, 10, 10])
                },
                pixelSize: {
                    type: "2f",
                    value: {
                        x: 10,
                        y: 10
                    }
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec2 testDim;", "uniform vec4 dimensions;", "uniform vec2 pixelSize;", "uniform sampler2D uSampler;", "void main(void) {", "   vec2 coord = vTextureCoord;", "   vec2 size = dimensions.xy/pixelSize;", "   vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;", "   gl_FragColor = texture2D(uSampler, color);", "}"]
        }, d.PixelateFilter.prototype = Object.create(d.AbstractFilter.prototype), d.PixelateFilter.prototype.constructor = d.PixelateFilter, Object.defineProperty(d.PixelateFilter.prototype, "size", {
            get: function() {
                return this.uniforms.pixelSize.value
            },
            set: function(a) {
                this.dirty = !0, this.uniforms.pixelSize.value = a
            }
        }), d.BlurXFilter = function() {
            d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                blur: {
                    type: "1f",
                    value: 1 / 512
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "   vec4 sum = vec4(0.0);", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - 4.0*blur, vTextureCoord.y)) * 0.05;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - 3.0*blur, vTextureCoord.y)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - 2.0*blur, vTextureCoord.y)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - blur, vTextureCoord.y)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + blur, vTextureCoord.y)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + 2.0*blur, vTextureCoord.y)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + 3.0*blur, vTextureCoord.y)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + 4.0*blur, vTextureCoord.y)) * 0.05;", "   gl_FragColor = sum;", "}"]
        }, d.BlurXFilter.prototype = Object.create(d.AbstractFilter.prototype), d.BlurXFilter.prototype.constructor = d.BlurXFilter, Object.defineProperty(d.BlurXFilter.prototype, "blur", {
            get: function() {
                return this.uniforms.blur.value / (1 / 7e3)
            },
            set: function(a) {
                this.dirty = !0, this.uniforms.blur.value = 1 / 7e3 * a
            }
        }), d.BlurYFilter = function() {
            d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                blur: {
                    type: "1f",
                    value: 1 / 512
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "   vec4 sum = vec4(0.0);", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 4.0*blur)) * 0.05;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 3.0*blur)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 2.0*blur)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - blur)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + blur)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 2.0*blur)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 3.0*blur)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 4.0*blur)) * 0.05;", "   gl_FragColor = sum;", "}"]
        }, d.BlurYFilter.prototype = Object.create(d.AbstractFilter.prototype), d.BlurYFilter.prototype.constructor = d.BlurYFilter, Object.defineProperty(d.BlurYFilter.prototype, "blur", {
            get: function() {
                return this.uniforms.blur.value / (1 / 7e3)
            },
            set: function(a) {
                this.uniforms.blur.value = 1 / 7e3 * a
            }
        }), d.BlurFilter = function() {
            this.blurXFilter = new d.BlurXFilter, this.blurYFilter = new d.BlurYFilter, this.passes = [this.blurXFilter, this.blurYFilter]
        }, Object.defineProperty(d.BlurFilter.prototype, "blur", {
            get: function() {
                return this.blurXFilter.blur
            },
            set: function(a) {
                this.blurXFilter.blur = this.blurYFilter.blur = a
            }
        }), Object.defineProperty(d.BlurFilter.prototype, "blurX", {
            get: function() {
                return this.blurXFilter.blur
            },
            set: function(a) {
                this.blurXFilter.blur = a
            }
        }), Object.defineProperty(d.BlurFilter.prototype, "blurY", {
            get: function() {
                return this.blurYFilter.blur
            },
            set: function(a) {
                this.blurYFilter.blur = a
            }
        }), d.InvertFilter = function() {
            d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                invert: {
                    type: "1f",
                    value: 1
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float invert;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord);", "   gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);", "}"]
        }, d.InvertFilter.prototype = Object.create(d.AbstractFilter.prototype), d.InvertFilter.prototype.constructor = d.InvertFilter, Object.defineProperty(d.InvertFilter.prototype, "invert", {
            get: function() {
                return this.uniforms.invert.value
            },
            set: function(a) {
                this.uniforms.invert.value = a
            }
        }), d.SepiaFilter = function() {
            d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                sepia: {
                    type: "1f",
                    value: 1
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float sepia;", "uniform sampler2D uSampler;", "const mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord);", "   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);", "}"]
        }, d.SepiaFilter.prototype = Object.create(d.AbstractFilter.prototype), d.SepiaFilter.prototype.constructor = d.SepiaFilter, Object.defineProperty(d.SepiaFilter.prototype, "sepia", {
            get: function() {
                return this.uniforms.sepia.value
            },
            set: function(a) {
                this.uniforms.sepia.value = a
            }
        }), d.TwistFilter = function() {
            d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                radius: {
                    type: "1f",
                    value: .5
                },
                angle: {
                    type: "1f",
                    value: 5
                },
                offset: {
                    type: "2f",
                    value: {
                        x: .5,
                        y: .5
                    }
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "uniform float radius;", "uniform float angle;", "uniform vec2 offset;", "void main(void) {", "   vec2 coord = vTextureCoord - offset;", "   float distance = length(coord);", "   if (distance < radius) {", "       float ratio = (radius - distance) / radius;", "       float angleMod = ratio * ratio * angle;", "       float s = sin(angleMod);", "       float c = cos(angleMod);", "       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);", "   }", "   gl_FragColor = texture2D(uSampler, coord+offset);", "}"]
        }, d.TwistFilter.prototype = Object.create(d.AbstractFilter.prototype), d.TwistFilter.prototype.constructor = d.TwistFilter, Object.defineProperty(d.TwistFilter.prototype, "offset", {
            get: function() {
                return this.uniforms.offset.value
            },
            set: function(a) {
                this.dirty = !0, this.uniforms.offset.value = a
            }
        }), Object.defineProperty(d.TwistFilter.prototype, "radius", {
            get: function() {
                return this.uniforms.radius.value
            },
            set: function(a) {
                this.dirty = !0, this.uniforms.radius.value = a
            }
        }), Object.defineProperty(d.TwistFilter.prototype, "angle", {
            get: function() {
                return this.uniforms.angle.value
            },
            set: function(a) {
                this.dirty = !0, this.uniforms.angle.value = a
            }
        }), d.ColorStepFilter = function() {
            d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                step: {
                    type: "1f",
                    value: 5
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "uniform float step;", "void main(void) {", "   vec4 color = texture2D(uSampler, vTextureCoord);", "   color = floor(color * step) / step;", "   gl_FragColor = color;", "}"]
        }, d.ColorStepFilter.prototype = Object.create(d.AbstractFilter.prototype), d.ColorStepFilter.prototype.constructor = d.ColorStepFilter, Object.defineProperty(d.ColorStepFilter.prototype, "step", {
            get: function() {
                return this.uniforms.step.value
            },
            set: function(a) {
                this.uniforms.step.value = a
            }
        }), d.DotScreenFilter = function() {
            d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                scale: {
                    type: "1f",
                    value: 1
                },
                angle: {
                    type: "1f",
                    value: 5
                },
                dimensions: {
                    type: "4fv",
                    value: [0, 0, 0, 0]
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "uniform float angle;", "uniform float scale;", "float pattern() {", "   float s = sin(angle), c = cos(angle);", "   vec2 tex = vTextureCoord * dimensions.xy;", "   vec2 point = vec2(", "       c * tex.x - s * tex.y,", "       s * tex.x + c * tex.y", "   ) * scale;", "   return (sin(point.x) * sin(point.y)) * 4.0;", "}", "void main() {", "   vec4 color = texture2D(uSampler, vTextureCoord);", "   float average = (color.r + color.g + color.b) / 3.0;", "   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);", "}"]
        }, d.DotScreenFilter.prototype = Object.create(d.AbstractFilter.prototype), d.DotScreenFilter.prototype.constructor = d.DotScreenFilter, Object.defineProperty(d.DotScreenFilter.prototype, "scale", {
            get: function() {
                return this.uniforms.scale.value
            },
            set: function(a) {
                this.dirty = !0, this.uniforms.scale.value = a
            }
        }), Object.defineProperty(d.DotScreenFilter.prototype, "angle", {
            get: function() {
                return this.uniforms.angle.value
            },
            set: function(a) {
                this.dirty = !0, this.uniforms.angle.value = a
            }
        }), d.CrossHatchFilter = function() {
            d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                blur: {
                    type: "1f",
                    value: 1 / 512
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);", "    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);", "    if (lum < 1.00) {", "        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "    if (lum < 0.75) {", "        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "    if (lum < 0.50) {", "        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "    if (lum < 0.3) {", "        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "}"]
        }, d.CrossHatchFilter.prototype = Object.create(d.AbstractFilter.prototype), d.CrossHatchFilter.prototype.constructor = d.BlurYFilter, Object.defineProperty(d.CrossHatchFilter.prototype, "blur", {
            get: function() {
                return this.uniforms.blur.value / (1 / 7e3)
            },
            set: function(a) {
                this.uniforms.blur.value = 1 / 7e3 * a
            }
        }), d.RGBSplitFilter = function() {
            d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                red: {
                    type: "2f",
                    value: {
                        x: 20,
                        y: 20
                    }
                },
                green: {
                    type: "2f",
                    value: {
                        x: -20,
                        y: 20
                    }
                },
                blue: {
                    type: "2f",
                    value: {
                        x: 20,
                        y: -20
                    }
                },
                dimensions: {
                    type: "4fv",
                    value: [0, 0, 0, 0]
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec2 red;", "uniform vec2 green;", "uniform vec2 blue;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;", "   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;", "   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;", "   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;", "}"]
        }, d.RGBSplitFilter.prototype = Object.create(d.AbstractFilter.prototype), d.RGBSplitFilter.prototype.constructor = d.RGBSplitFilter, Object.defineProperty(d.RGBSplitFilter.prototype, "angle", {
            get: function() {
                return this.uniforms.blur.value / (1 / 7e3)
            },
            set: function(a) {
                this.uniforms.blur.value = 1 / 7e3 * a
            }
        }), "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = d), exports.PIXI = d) : "undefined" != typeof define && define.amd ? define("PIXI", d) : c.PIXI = d
    }.call(this), function(global) {
        function SignalBinding(signal, listener, isOnce, listenerContext, priority) {
            this._listener = listener, this._isOnce = isOnce, this.context = listenerContext, this._signal = signal, this._priority = priority || 0
        }

        function validateListener(listener, fnName) {
            if ("function" != typeof listener) throw new Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", fnName))
        }

        function Signal() {
            this._bindings = [], this._prevParams = null;
            var self = this;
            this.dispatch = function() {
                Signal.prototype.dispatch.apply(self, arguments)
            }
        }
        SignalBinding.prototype = {
            active: !0,
            params: null,
            execute: function(paramsArr) {
                var handlerReturn, params;
                return this.active && this._listener && (params = this.params ? this.params.concat(paramsArr) : paramsArr, handlerReturn = this._listener.apply(this.context, params), this._isOnce && this.detach()), handlerReturn
            },
            detach: function() {
                return this.isBound() ? this._signal.remove(this._listener, this.context) : null
            },
            isBound: function() {
                return !!this._signal && !!this._listener
            },
            isOnce: function() {
                return this._isOnce
            },
            getListener: function() {
                return this._listener
            },
            getSignal: function() {
                return this._signal
            },
            _destroy: function() {
                delete this._signal, delete this._listener, delete this.context
            },
            toString: function() {
                return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
            }
        }, Signal.prototype = {
            VERSION: "1.0.0",
            memorize: !1,
            _shouldPropagate: !0,
            active: !0,
            _registerListener: function(listener, isOnce, listenerContext, priority) {
                var binding, prevIndex = this._indexOfListener(listener, listenerContext);
                if (-1 !== prevIndex) {
                    if (binding = this._bindings[prevIndex], binding.isOnce() !== isOnce) throw new Error("You cannot add" + (isOnce ? "" : "Once") + "() then add" + (isOnce ? "Once" : "") + "() the same listener without removing the relationship first.")
                } else binding = new SignalBinding(this, listener, isOnce, listenerContext, priority), this._addBinding(binding);
                return this.memorize && this._prevParams && binding.execute(this._prevParams), binding
            },
            _addBinding: function(binding) {
                var n = this._bindings.length;
                do --n; while (this._bindings[n] && binding._priority <= this._bindings[n]._priority);
                this._bindings.splice(n + 1, 0, binding)
            },
            _indexOfListener: function(listener, context) {
                for (var cur, n = this._bindings.length; n--;)
                    if (cur = this._bindings[n], cur._listener === listener && cur.context === context) return n;
                return -1
            },
            has: function(listener, context) {
                return -1 !== this._indexOfListener(listener, context)
            },
            add: function(listener, listenerContext, priority) {
                return validateListener(listener, "add"), this._registerListener(listener, !1, listenerContext, priority)
            },
            addOnce: function(listener, listenerContext, priority) {
                return validateListener(listener, "addOnce"), this._registerListener(listener, !0, listenerContext, priority)
            },
            remove: function(listener, context) {
                validateListener(listener, "remove");
                var i = this._indexOfListener(listener, context);
                return -1 !== i && (this._bindings[i]._destroy(), this._bindings.splice(i, 1)), listener
            },
            removeAll: function() {
                for (var n = this._bindings.length; n--;) this._bindings[n]._destroy();
                this._bindings.length = 0
            },
            getNumListeners: function() {
                return this._bindings.length
            },
            halt: function() {
                this._shouldPropagate = !1
            },
            dispatch: function() {
                if (this.active) {
                    var bindings, paramsArr = Array.prototype.slice.call(arguments),
                        n = this._bindings.length;
                    if (this.memorize && (this._prevParams = paramsArr), n) {
                        bindings = this._bindings.slice(), this._shouldPropagate = !0;
                        do n--; while (bindings[n] && this._shouldPropagate && bindings[n].execute(paramsArr) !== !1)
                    }
                }
            },
            forget: function() {
                this._prevParams = null
            },
            dispose: function() {
                this.removeAll(), delete this._bindings, delete this._prevParams
            },
            toString: function() {
                return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
            }
        };
        var signals = Signal;
        signals.Signal = Signal, "function" == typeof define && define.amd ? define("signals", [], function() {
            return signals
        }) : "undefined" != typeof module && module.exports ? module.exports = signals : global.signals = signals
    }(this), define("com/fido/Loader", ["require", "exports", "module", "PIXI", "signals"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            Signal = require("signals"),
            Loader = function() {
                this.fontsToLoad = [], this.pixiAssetsToLoad = [], this.soundsToLoad = [], this.onComplete = new Signal, this.onProgress = new Signal
            };
        Loader.prototype.addFonts = function(fonts) {
            this.fontsToLoad = this.fontsToLoad.concat(fonts)
        }, Loader.prototype.addPixiAssets = function(assets) {
            this.pixiAssetsToLoad = this.pixiAssetsToLoad.concat(assets)
        }, Loader.prototype.load = function() {
            this._loadFonts()
        }, Loader.prototype._loadPixiAssets = function() {
            return 0 === this.pixiAssetsToLoad.length ? void this._onComplete() : (this.pixiAssetLoader = new PIXI.AssetLoader(this.pixiAssetsToLoad, !0), this.pixiAssetLoader.onComplete = this._onComplete.bind(this), this.pixiAssetLoader.onProgress = this._onProgress.bind(this), void this.pixiAssetLoader.load())
        }, Loader.prototype._loadFonts = function() {
            return 0 === this.fontsToLoad.length ? void this._loadPixiAssets() : (WebFontConfig = {
                    google: {
                        families: this.fontsToLoad
                    },
                    active: function() {
                        this._loadPixiAssets()
                    }.bind(this)
                }, void
                function() {
                    var wf = document.createElement("script");
                    wf.src = ("https:" == document.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js", wf.type = "text/javascript", wf.async = "true";
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(wf, s)
                }())
        }, Loader.prototype._onComplete = function() {
            this.onComplete.dispatch()
        }, Loader.prototype._onProgress = function() {
            var percent = (this.pixiAssetLoader.assetURLs.length - this.pixiAssetLoader.loadCount) / this.pixiAssetLoader.assetURLs.length;
            this.onProgress.dispatch(percent)
        }, module.exports = Loader
    }), define("com/fido/transitions/AlphaTransition", ["require", "exports", "module"], function(require, exports, module) {
        AlphaTransition = function() {}, AlphaTransition.constructor = AlphaTransition, AlphaTransition.prototype.begin = function(screenManager, currentScreen, nextScreen) {
            this.screenManager = screenManager, this.currentScreen = currentScreen, this.nextScreen = nextScreen, this.currentScreen ? (this.currentScreen.onHide && this.currentScreen.onHide(), TweenLite.to(this.currentScreen, .4, {
                alpha: 0,
                onComplete: this.onFadeout.bind(this)
            })) : this.onFadeout()
        }, AlphaTransition.prototype.onFadeout = function() {
            this.currentScreen && (this.currentScreen.onHidden && this.currentScreen.onHidden(), this.screenManager.container.removeChild(this.currentScreen), this.currentScreen.alpha = 1), this.nextScreen.alpha = 0, this.nextScreen.onShow && this.nextScreen.onShow(), this.nextScreen.resize && this.nextScreen.resize(this.screenManager.w, this.screenManager.h), TweenLite.to(this.nextScreen, .4, {
                alpha: 1,
                onComplete: this.onFadein.bind(this)
            }), this.screenManager.container.addChild(this.nextScreen)
        }, AlphaTransition.prototype.onFadein = function() {
            this.nextScreen.onShown && this.nextScreen.onShown(), this.screenManager.onTransitionComplete()
        }, AlphaTransition.prototype.resize = function(w, h) {
            this.w = w, this.h = h
        }, module.exports = AlphaTransition
    }), define("com/fido/ScreenManager", ["require", "exports", "module", "PIXI", "./transitions/AlphaTransition"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            AlphaTransition = require("./transitions/AlphaTransition");
        ScreenManager = function(container, width, height) {
            this.container = container || new PIXI.DisplayObjectContainer, this.screens = {}, this.currentScreen, this.fading = !1, this.w = width || 400, this.h = height || 400, this.history = [], this.defaultTransition = new AlphaTransition, this.transition = this.defaultTransition, this.active = !1
        }, ScreenManager.constructor = ScreenManager, ScreenManager.prototype.gotoScreenByID = function(id, instant) {
            this.gotoScreen(this.screens[id], instant)
        }, ScreenManager.prototype.addScreen = function(screen, id) {
            this.screens[id] = screen, screen.screenManager = this
        }, ScreenManager.prototype.goBack = function() {
            this.history.pop();
            var prev = this.history.pop();
            prev && this.gotoScreen(prev)
        }, ScreenManager.prototype.gotoScreen = function(screen) {
            this.currentScreen !== screen && (this.history.push(screen), this.nextScreen = screen, this.active || (this.active = !0, this.transition = screen.transition || this.defaultTransition, this.transition.onResize && this.transition.onResize(this.w, this.h), this.transition.begin(this, this.currentScreen, this.nextScreen), this.currentScreen = screen))
        }, ScreenManager.prototype.onTransitionComplete = function() {
            this.active = !1, this.currentScreen != this.nextScreen && this.gotoScreen(this.nextScreen)
        }, ScreenManager.prototype.resize = function(w, h) {
            this.w = w, this.h = h, this.transition.onResize && this.transition.onResize(w, h), this.currentScreen && this.currentScreen.resize && this.currentScreen.resize(w, h)
        }, module.exports = ScreenManager
    }), define("com/fido/Ticker", ["require", "exports", "module", "signals"], function(require, exports, module) {
        var Signal = require("signals"),
            Ticker = function() {
                this.onUpdate = new Signal, this.updateBind = this.update.bind(this), this.active = !1, this.deltaTime = 1, this.timeElapsed = 0, this.lastTime = 0, this.speed = 1
            };
        Ticker.prototype.start = function() {
            this.active || (this.active = !0, requestAnimationFrame(this.updateBind))
        }, Ticker.prototype.stop = function() {
            this.active && (this.active = !1)
        }, Ticker.prototype.update = function() {
            if (this.active) {
                requestAnimationFrame(this.updateBind);
                var currentTime = (new Date).getTime(),
                    timeElapsed = currentTime - this.lastTime;
                timeElapsed > 100 && (timeElapsed = 100), this.deltaTime = .06 * timeElapsed, this.deltaTime *= this.speed, this.onUpdate.dispatch(this.deltaTime), this.lastTime = currentTime
            }
        }, Ticker.prototype.add = function(listener, scope) {
            this.onUpdate.add(listener, scope)
        }, Ticker.prototype.remove = function(listener, scope) {
            this.onUpdate.remove(listener, scope)
        }, Ticker.instance = new Ticker, module.exports = Ticker
    }), define("com/fido/Device", ["require", "exports", "module"], function(require, exports, module) {
        Device = function() {
            this.arora = !1, this.chrome = !1, this.epiphany = !1, this.firefox = !1, this.mobileSafari = !1, this.ie = !1, this.ieVersion = 0, this.midori = !1, this.opera = !1, this.safari = !1, this.webApp = !1, this.cocoonJS = !1, this.android = !1, this.chromeOS = !1, this.iOS = !1, this.linux = !1, this.macOS = !1, this.windows = !1, this.desktop = !1, this.pixelRatio = 0, this.iPhone = !1, this.iPhone4 = !1, this.iPad = !1, this.blob = !1, this.canvas = !1, this.localStorage = !1, this.file = !1, this.fileSystem = !1, this.webGL = !1, this.worker = !1, this.audioData = !1, this.webAudio = !1, this.ogg = !1, this.opus = !1, this.mp3 = !1, this.wav = !1, this.m4a = !1, this.webm = !1;
            var ua = navigator.userAgent;
            this._checkBrowser(ua), this._checkOS(ua), this._checkDevice(ua), this._checkAudio(), this._checkFeatures(), this._checkIsMobile()
        }, Device.prototype._checkBrowser = function(ua) {
            /Arora/.test(ua) ? this.arora = !0 : /Chrome/.test(ua) ? this.chrome = !0 : /Epiphany/.test(ua) ? this.epiphany = !0 : /Firefox/.test(ua) ? this.firefox = !0 : /Mobile Safari/.test(ua) ? this.mobileSafari = !0 : /MSIE (\d+\.\d+);/.test(ua) || navigator.userAgent.match(/Trident.*rv[ :]*11\./) ? (this.ie = !0, this.ieVersion = parseInt(RegExp.$1, 10)) : /Midori/.test(ua) ? this.midori = !0 : /Opera/.test(ua) ? this.opera = !0 : /Safari/.test(ua) && (this.safari = !0), navigator.standalone && (this.webApp = !0), navigator.isCocoonJS && (this.cocoonJS = !0)
        }, Device.prototype._checkOS = function(ua) {
            /Android/.test(ua) ? this.android = !0 : /CrOS/.test(ua) ? this.chromeOS = !0 : /iP[ao]d|iPhone/i.test(ua) ? this.iOS = !0 : /Linux/.test(ua) ? this.linux = !0 : /Mac OS/.test(ua) ? this.macOS = !0 : /Windows/.test(ua) && (this.windows = !0), (this.windows || this.macOS || this.linux) && (this.desktop = !0)
        }, Device.prototype._checkDevice = function() {
            this.pixelRatio = window.devicePixelRatio || 1, this.iPhone = -1 !== navigator.userAgent.toLowerCase().indexOf("iphone"), this.iPhone4 = 2 === this.pixelRatio && this.iPhone, this.iPad = -1 !== navigator.userAgent.toLowerCase().indexOf("ipad")
        }, Device.prototype._checkFeatures = function() {
            "undefined" != typeof window.Blob && (this.blob = !0), this.canvas = !!window.CanvasRenderingContext2D;
            try {
                this.localStorage = !!localStorage.getItem
            } catch (error) {
                this.localStorage = !1
            }
            this.file = !!(window.File && window.FileReader && window.FileList && window.Blob), this.fileSystem = !!window.requestFileSystem, this.webGL = function() {
                try {
                    var canvas = document.createElement("canvas");
                    return !!window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
                } catch (e) {
                    return !1
                }
            }(), (this.android || this.ie) && (this.webGL = !1), this.worker = !!window.Worker, ("ontouchstart" in document.documentElement || window.navigator.msPointerEnabled) && (this.touch = !0)
        }, Device.prototype._checkAudio = function() {
            this.audioData = !!window.Audio, this.webaudio = !(!window.webkitAudioContext && !window.AudioContext);
            var audioElement = document.createElement("audio"),
                result = !1;
            try {
                (result = !!audioElement.canPlayType) && (audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") && (this.ogg = !0), audioElement.canPlayType("audio/mpeg;").replace(/^no$/, "") && (this.mp3 = !0), audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "") && (this.wav = !0), (audioElement.canPlayType("audio/x-m4a;") || audioElement.canPlayType("audio/aac;").replace(/^no$/, "")) && (this.m4a = !0))
            } catch (e) {}
        }, Device.prototype._checkIsMobile = function() {
            var check = !1;
            ! function(a) {
                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) && (check = !0)
            }(navigator.userAgent || navigator.vendor || window.opera), this.isMobile = check
        }, Device.prototype.getInfo = function() {
            var output = "DEVICE OUTPUT\n\n";
            return output += "---\n", output += "Browser Info :: \n", output += "Arora : " + this.arora + "\n", output += "Chrome : " + this.chrome + "\n", output += "Epiphany : " + this.epiphany + "\n", output += "Firefox : " + this.firefox + "\n", output += "Mobile Safari : " + this.mobileSafari + "\n", output += "IE : " + this.ie, output += this.ie ? " (Version " + this.ieVersion + ")\n" : "\n", output += "Midori : " + this.midori + "\n", output += "Opera : " + this.opera + "\n", output += "Safari : " + this.safari + "\n", output += "Web App : " + this.webApp + "\n", output += "CocoonJS : " + this.cocoonJS + "\n", output += "Android : " + this.android + "\n", output += "---\n", output += "Operating System :: \n", output += "Chrome OS : " + this.chromeOS + "\n", output += "iOS : " + this.iOS + "\n", output += "Linux : " + this.linux + "\n", output += "Mac OS : " + this.macOS + "\n", output += "Windows : " + this.windows + "\n", output += "Desktop : " + this.desktop + "\n", output += "---\n", output += "Device Type : \n", output += "Pixel Ratio : " + this.pixelRatio + "\n", output += "iPhone : " + this.iPhone + "\n", output += "iPhone 4 : " + this.iPhone4 + "\n", output += "iPad : " + this.iPad + "\n", output += "---\n", output += "Features :: \n", output += "Blob : " + this.blob + "\n", output += "Canvas : " + this.canvas + "\n", output += "LocalStorage : " + this.localStorage + "\n", output += "File : " + this.file + "\n", output += "File System : " + this.fileSystem + "\n", output += "WebGL : " + this.webGL + "\n", output += "Workers : " + this.worker + "\n", output += "---\n", output += "Audio :: \n", output += "AudioData : " + this.audioData + "\n", output += "WebAudio : " + this.webAudio + "\n", output += "Supports .ogg : " + this.ogg + "\n", output += "Supports Opus : " + this.opus + "\n", output += "Supports .mp3 : " + this.mp3 + "\n", output += "Supports .wav : " + this.wav + "\n", output += "Supports .m4a : " + this.m4a + "\n", output += "Supports .webm : " + this.webm
        }, Device.instance = new Device, module.exports = Device
    }), define("com/fido/App", ["require", "exports", "module", "PIXI", "./Loader", "./ScreenManager", "./Ticker", "./Device"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            Loader = require("./Loader"),
            Ticker = (require("./ScreenManager"), require("./Ticker")),
            Device = require("./Device"),
            App = function(options) {
                options = options || App.defaultOptions, this.options = options, this.renderer = Device.instance.android || Device.instance.ie ? new PIXI.CanvasRenderer(options.width, options.height) : PIXI.autoDetectRenderer(options.width, options.height), this.view = this.renderer.view, this.stage = new PIXI.Stage(options.backgroundColor), Ticker.instance.start(), Ticker.instance.add(this.update, this), this.loader = new Loader
            };
        App.prototype.update = function() {
            this.renderer.render(this.stage)
        }, App.prototype.resize = function(w, h) {
            this.options.resizeMode === App.resizeModes.DEFUALT ? (this.renderer.resize(w, h), this.view.style.width = "auto", this.view.style.height = "auto") : this.thisoptions.resizeMode === App.resizeModes.CSS_RESIZE_PRESERVE_RATIO || this.options.resizeMode === App.resizeModes.CSS_RESIZE && (this.view.style.width = w + "px", this.view.style.height = h + "px")
        }, App.resizeModes = {
            DEFUALT: 0,
            CSS_RESIZE_PRESERVE_RATIO: 1,
            CSS_RESIZE: 2
        }, App.defaultOptions = {
            width: 800,
            height: 600,
            backgroundColor: 4006431,
            resizeMode: App.resizeModes.DEFUALT
        }, module.exports = App
    }), function(global) {
        function SignalBinding(signal, listener, isOnce, listenerContext, priority) {
            this._listener = listener, this._isOnce = isOnce, this.context = listenerContext, this._signal = signal, this._priority = priority || 0
        }

        function validateListener(listener, fnName) {
            if ("function" != typeof listener) throw new Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", fnName))
        }

        function Signal() {
            this._bindings = [], this._prevParams = null;
            var self = this;
            this.dispatch = function() {
                Signal.prototype.dispatch.apply(self, arguments)
            }
        }
        SignalBinding.prototype = {
            active: !0,
            params: null,
            execute: function(paramsArr) {
                var handlerReturn, params;
                return this.active && this._listener && (params = this.params ? this.params.concat(paramsArr) : paramsArr, handlerReturn = this._listener.apply(this.context, params), this._isOnce && this.detach()), handlerReturn
            },
            detach: function() {
                return this.isBound() ? this._signal.remove(this._listener, this.context) : null
            },
            isBound: function() {
                return !!this._signal && !!this._listener
            },
            isOnce: function() {
                return this._isOnce
            },
            getListener: function() {
                return this._listener
            },
            getSignal: function() {
                return this._signal
            },
            _destroy: function() {
                delete this._signal, delete this._listener, delete this.context
            },
            toString: function() {
                return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
            }
        }, Signal.prototype = {
            VERSION: "1.0.0",
            memorize: !1,
            _shouldPropagate: !0,
            active: !0,
            _registerListener: function(listener, isOnce, listenerContext, priority) {
                var binding, prevIndex = this._indexOfListener(listener, listenerContext);
                if (-1 !== prevIndex) {
                    if (binding = this._bindings[prevIndex], binding.isOnce() !== isOnce) throw new Error("You cannot add" + (isOnce ? "" : "Once") + "() then add" + (isOnce ? "Once" : "") + "() the same listener without removing the relationship first.")
                } else binding = new SignalBinding(this, listener, isOnce, listenerContext, priority), this._addBinding(binding);
                return this.memorize && this._prevParams && binding.execute(this._prevParams), binding
            },
            _addBinding: function(binding) {
                var n = this._bindings.length;
                do --n; while (this._bindings[n] && binding._priority <= this._bindings[n]._priority);
                this._bindings.splice(n + 1, 0, binding)
            },
            _indexOfListener: function(listener, context) {
                for (var cur, n = this._bindings.length; n--;)
                    if (cur = this._bindings[n], cur._listener === listener && cur.context === context) return n;
                return -1
            },
            has: function(listener, context) {
                return -1 !== this._indexOfListener(listener, context)
            },
            add: function(listener, listenerContext, priority) {
                return validateListener(listener, "add"), this._registerListener(listener, !1, listenerContext, priority)
            },
            addOnce: function(listener, listenerContext, priority) {
                return validateListener(listener, "addOnce"), this._registerListener(listener, !0, listenerContext, priority)
            },
            remove: function(listener, context) {
                validateListener(listener, "remove");
                var i = this._indexOfListener(listener, context);
                return -1 !== i && (this._bindings[i]._destroy(), this._bindings.splice(i, 1)), listener
            },
            removeAll: function() {
                for (var n = this._bindings.length; n--;) this._bindings[n]._destroy();
                this._bindings.length = 0
            },
            getNumListeners: function() {
                return this._bindings.length
            },
            halt: function() {
                this._shouldPropagate = !1
            },
            dispatch: function() {
                if (this.active) {
                    var bindings, paramsArr = Array.prototype.slice.call(arguments),
                        n = this._bindings.length;
                    if (this.memorize && (this._prevParams = paramsArr), n) {
                        bindings = this._bindings.slice(), this._shouldPropagate = !0;
                        do n--; while (bindings[n] && this._shouldPropagate && bindings[n].execute(paramsArr) !== !1)
                    }
                }
            },
            forget: function() {
                this._prevParams = null
            },
            dispose: function() {
                this.removeAll(), delete this._bindings, delete this._prevParams
            },
            toString: function() {
                return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
            }
        };
        var signals = Signal;
        signals.Signal = Signal, "function" == typeof define && define.amd ? define("Signals", [], function() {
            return signals
        }) : "undefined" != typeof module && module.exports ? module.exports = signals : global.signals = signals
    }(this), define("com/fido/VisibilityChecker", ["require", "exports", "module", "signals"], function(require, exports, module) {
        var Signal = require("signals"),
            VisibilityChecker = function() {
                "undefined" != typeof document.hidden ? (this.hidden = "hidden", this.visibilityChange = "visibilitychange") : "undefined" != typeof document.mozHidden ? (this.hidden = "mozHidden", this.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (this.hidden = "msHidden", this.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (this.hidden = "webkitHidden", this.visibilityChange = "webkitvisibilitychange"), this.onHide = new Signal, this.onShow = new Signal
            };
        VisibilityChecker.prototype.handleVisibilityChange = function() {
            document[this.hidden] ? this.onHide.dispatch() : this.onShow.dispatch()
        }, VisibilityChecker.prototype.init = function() {
            document.addEventListener(this.visibilityChange, this.handleVisibilityChange.bind(this), !1)
        }, module.exports = new VisibilityChecker
    }), define("com/fido/sound/SoundManager", ["require", "exports", "module", "Signals", "com/fido/VisibilityChecker"], function(require, exports, module) {
        var Signal = require("Signals"),
            VisibilityChecker = require("com/fido/VisibilityChecker"),
            SoundManager = function() {
                this.disabled = !1, this.preload = !0, this.sounds = {}, this.groups = {}, this.globalVolume = 1, this.isMuted = !1, this.onMuteToggle = new Signal
            };
        SoundManager.prototype.addSound = function(url, id, options) {
            if (!this.disabled && !this.sounds[id]) {
                options = options || {};
                var sound = new Howl({
                    urls: [url + ".mp3", url + ".ogg"],
                    autoplay: options.autoplay || !1,
                    loop: options.loop || !1,
                    volume: options.volume || 1
                });
                sound.realVolume = options.volume || 1, this.sounds[id] = sound
            }
        }, SoundManager.prototype.addGroup = function(ids, id) {
            if (!this.disabled && !this.groups[id]) {
                var group = {
                    index: 0,
                    type: 0,
                    sounds: ids
                };
                this.groups[id] = group
            }
        }, SoundManager.prototype.play = function(id) {
            this.disabled || this.sounds[id].play()
        }, SoundManager.prototype.playGroup = function(id) {
            if (!this.disabled) {
                var group = this.groups[id],
                    index = Math.random() * group.sounds.length | 0;
                this.sounds[group.sounds[index]].play()
            }
        }, SoundManager.prototype.setVolume = function(id, volume) {
            if (!this.disabled) {
                var sound = this.sounds[id];
                sound.realVolume = volume, sound.volume(volume * this.globalVolume)
            }
        }, SoundManager.prototype.stop = function(id) {
            this.disabled || this.sounds[id].stop()
        }, SoundManager.prototype.setPlaybackSpeed = function(id, speed) {
            if (!this.disabled) {
                var sound = this.sounds[id];
                sound._playbackSpeed = speed;
                var hackId = "music" == id ? 0 : 1;
                sound._webAudio && Howler._howls[hackId]._audioNode[0] && (Howler._howls[hackId]._audioNode[0].bufferSource.playbackRate.value = speed)
            }
        }, SoundManager.prototype.getPlaybackSpeed = function(id) {
            if (!this.disabled) {
                var sound = this.sounds[id];
                return sound._playbackSpeed || 1
            }
        }, SoundManager.prototype.setGlobalVolume = function(volume) {
            this.globalVolume = volume;
            for (var i in this.sounds) {
                var sound = this.sounds[i];
                sound.volume(sound.realVolume * volume)
            }
        }, SoundManager.prototype.mute = function() {
            this.isMuted = !0, this.setGlobalVolume(0), this.onMuteToggle.dispatch(!0)
        }, SoundManager.prototype.unmute = function() {
            this.isMuted = !1, this.setGlobalVolume(1), this.onMuteToggle.dispatch(!1)
        }, SoundManager.prototype.check = function() {
            this.lastSeen = Date.now();
            var loop = function() {
                lastSeen = Date.now(), setTimeout(loop, 50)
            };
            loop();
            var music = document.getElementById("music");
            music.addEventListener("timeupdate", function() {
                Date.now() - exports.lastSeen > 100 && this.pause()
            }, !1)
        }, SoundManager.sfx = new SoundManager, SoundManager.music = new SoundManager, SoundManager.sfx.disabled = !Howler.usingWebAudio, VisibilityChecker.onHide.add(Howler.mute, Howler), VisibilityChecker.onShow.add(Howler.unmute, Howler), module.exports = SoundManager
    }), define("com/fido/buttons/Button", ["require", "exports", "module", "signals"], function(require, exports, module) {
        var Signal = require("signals"),
            Button = function(view) {
                if (!view) throw "FIDO: Button view must not be undefined";
                this.view = view, this.onPress = new Signal, this.onDown = new Signal, this.onUp = new Signal, this.view.interactive = !0, this.view.buttonMode = !0, this.view.mousedown = this.view.touchstart = this.onDown.dispatch.bind(this, this), this.view.mouseup = this.view.touchend = this.onUp.dispatch.bind(this, this), this.view.click = this.view.tap = this.onPress.dispatch.bind(this, this)
            };
        Button.constructor = Button, module.exports = Button
    }), define("com/fido/ThreeSlice", ["require", "exports", "module", "PIXI"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            ThreeSlice = function(left, middle, right) {
                this.left = new PIXI.Sprite(left), this.middle = new PIXI.Sprite(middle), this.right = new PIXI.Sprite(right), PIXI.DisplayObjectContainer.call(this), this.addChild(this.left), this.addChild(this.middle), this.addChild(this.right)
            };
        ThreeSlice.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), Object.defineProperty(ThreeSlice.prototype, "width", {
            get: function() {
                return this._width
            },
            set: function(value) {
                this._width = value, this.left.position.x = 0, this.middle.position.x = this.left.width, this.middle.width = value - (this.left.width + this.right.width), this.right.position.x = this.middle.position.x + this.middle.width - 1
            }
        }), ThreeSlice.fromFrames = function(left, middle, right) {
            return new ThreeSlice(PIXI.Texture.fromFrame(left), PIXI.Texture.fromFrame(middle), PIXI.Texture.fromFrame(right))
        }, module.exports = ThreeSlice
    }), define("com/PiriPiriBlast/AabButton", ["require", "exports", "module", "../fido/buttons/Button", "../fido/ThreeSlice"], function(require, exports, module) {
        var Button = require("../fido/buttons/Button"),
            ThreeSlice = require("../fido/ThreeSlice"),
            AabButton = function(title) {
                this.label = new PIXI.Text(title, {
                    fill: "#FFFFFF"
                }), this.label.x = 23, this.label.y = 32;
                var view = this.createBackground(this.label.width);
                view.addChild(this.label), Button.call(this, view)
            };
        AabButton.prototype = Object.create(Button.prototype), AabButton.prototype.createBackground = function(width) {
            var view = ThreeSlice.fromFrames("3_slice_left_frame.png", "3_slice_mid_frame.png", "3_slice_right_frame.png"),
                bg = (new PIXI.Graphics).beginFill(3516639).drawRect(0, 0, 100, 71);
            view.addChildAt(bg, 0), view.width = Math.max(width + 40, 90), bg.scale.x = (view.width - 14) / 100, bg.position.x = 10, bg.position.y = 11;
            var addRollover = !0;
            return addRollover && (this.rollover = PIXI.Sprite.fromFrame("3_slice_halftone_rollover.png"), this.rollover.width = 2 * view.width, this.rollover.height = 71, this.rollover.y = 10, this.rollover.x = 2 * -view.width, view.addChildAt(this.rollover, 1), this.rolloverMask = (new PIXI.Graphics).beginFill(16763904).drawRect(0, 0, 100, 71), this.rolloverMask.position.x = 10, this.rolloverMask.position.y = 11, this.rolloverMask.scale.x = bg.scale.x, this.rollover.mask = this.rolloverMask, view.addChild(this.rolloverMask), view.mouseover = this.onMouseOver.bind(this), view.mouseout = this.onMouseOut.bind(this), view.touchstart = this.onMouseOver.bind(this), view.touchend = view.touchendoutside = this.onMouseOut.bind(this)), view.hitArea = new PIXI.Rectangle(0, 0, Math.max(width + 40, 90), 90), view
        }, AabButton.prototype.onMouseOver = function() {
            TweenLite.to(this.rollover.position, .5, {
                x: 0
            })
        }, AabButton.prototype.onMouseOut = function() {
            TweenLite.to(this.rollover.position, .5, {
                x: 2 * -this.view.width
            })
        }, module.exports = AabButton
    }), define("com/PiriPiriBlast/buttons/BaseAabButton", ["require", "exports", "module", "PIXI", "../../fido/buttons/Button", "../../fido/ThreeSlice", "../../fido/Ticker"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            Button = require("../../fido/buttons/Button"),
            BaseAabButton = (require("../../fido/ThreeSlice"), require("../../fido/Ticker"), function(view) {
                Button.call(this, view)
            });
        BaseAabButton.prototype = Object.create(Button.prototype), BaseAabButton.prototype.createBackground = function(width, scale) {
            scale = scale || 1, width /= scale;
            var view = new PIXI.Sprite.fromFrame("LargeSquareButtonUp.png"),
                blueBg = (new PIXI.Graphics).beginFill(3516639).drawRect(0, 0, 100, 71);
            view.addChildAt(blueBg, 0), view.width = Math.max(width + 40, 90), blueBg.scale.x = (view.width - 14) / 100, blueBg.position.x = 10, blueBg.position.y = 11;
            return this.blueBg = blueBg, view.scale.set(scale), view.pivot.x = view.width / 2, view.pivot.y = 45, this.bg = view, view
        }, BaseAabButton.prototype.activateDefaultRollover = function() {
            this.rollover = PIXI.Sprite.fromFrame("3_slice_halftone_rollover.png"), this.rollover.width = 2 * this.bg.width, this.rollover.height = 71, this.rollover.y = 10, this.rollover.x = 2 * -this.bg.width, this.bg.addChildAt(this.rollover, 1), this.rolloverMask = (new PIXI.Graphics).beginFill(16763904).drawRect(0, 0, 100, 71), this.rolloverMask.position.x = 10, this.rolloverMask.position.y = 11, this.rolloverMask.scale.x = this.blueBg.scale.x, this.rollover.mask = this.rolloverMask, this.bg.addChild(this.rolloverMask), this.view.mouseover = this.onMouseOver.bind(this), this.view.mouseout = this.onMouseOut.bind(this), this.view.touchstart = this.onMouseOver.bind(this), this.view.touchend = this.view.touchendoutside = this.onMouseOut.bind(this), this.count = 0, this.scale = 1, this.intensity = .1, this.defaultScale = 1, this.overScale = 1.1
        }, BaseAabButton.prototype.toggleOn = function() {
            TweenLite.to(this.rollover.position, 0, {
                x: 0
            }), this.view.interactive = !1
        }, BaseAabButton.prototype.toggleOff = function() {
            TweenLite.to(this.rollover.position, 0, {
                x: 2 * -this.bg.width
            }), this.view.interactive = !0
        }, BaseAabButton.prototype.onMouseOver = function() {
            TweenLite.to(this.rollover.position, .5, {
                x: 0
            }), TweenLite.to(this.view.scale, .5, {
                x: this.overScale,
                y: this.overScale,
                ease: Elastic.easeOut
            }), TweenLite.to(this.view, .75, {
                rotation: .1 * (Math.random() - .5),
                ease: Elastic.easeOut
            })
        }, BaseAabButton.prototype.onMouseOut = function() {
            TweenLite.to(this.rollover.position, .5, {
                x: 2 * -this.bg.width
            }), TweenLite.to(this.view.scale, .5, {
                x: this.defaultScale,
                y: this.defaultScale,
                ease: Elastic.easeOut
            }), TweenLite.to(this.view, .75, {
                rotation: 0,
                ease: Elastic.easeOut
            })
        }, module.exports = BaseAabButton
    }), define("com/PiriPiriBlast/buttons/AabLabelButton", ["require", "exports", "module", "PIXI", "./BaseAabButton", "../../fido/sound/SoundManager"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            BaseAabButton = require("./BaseAabButton"),
            AabLabelButton = (require("../../fido/sound/SoundManager"), function(frameId, width) {
                this.label = new PIXI.Sprite.fromFrame(frameId), this.label.anchor.set(.5), width && (this.label.x = -width / 2 + this.label.width / 2 + 5), width = width || this.label.width + 10;
                var scale = .7;
                this.createBackground(width, scale);
                var view = new PIXI.DisplayObjectContainer;
                view.addChild(this.bg);
                var hitWidth = width + 20;
                view.hitArea = new PIXI.Rectangle(-hitWidth / 2, -90 * scale / 2, hitWidth, 90 * scale), view.addChild(this.label), BaseAabButton.call(this, view), view.mousedown = view.touchstart = this.onTouch.bind(this), this.activateDefaultRollover()
            });
        AabLabelButton.prototype = Object.create(BaseAabButton.prototype), AabLabelButton.prototype.onTouch = function() {}, module.exports = AabLabelButton
    }), define("com/fido/FrameWait", ["require", "exports", "module"], function(require, exports, module) {
        var FrameWait = function() {
            this.updateBind = this.update.bind(this), this.waits = []
        };
        FrameWait.prototype.wait = function(callback, count) {
            var wait = {
                callback: callback,
                count: count || 2
            };
            this.waits.push(wait), requestAnimationFrame(this.updateBind)
        }, FrameWait.prototype.update = function() {
            for (var i = this.waits.length - 1; i >= 0; i--) {
                var wait = this.waits[i];
                wait.count--, wait.count <= 0 && (wait.callback(), this.waits.splice(i, 1))
            }
            this.waits.length > 0 && requestAnimationFrame(this.updateBind)
        }, module.exports = new FrameWait
    }), define("com/fido/Utils", ["require", "exports", "module", "PIXI"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            Utils = {};
        Utils.getTexturesFromFrames = function(ids) {
            for (var textures = [], i = 0; i < ids.length; i++) textures.push(new PIXI.Texture.fromFrame(ids[i]));
            return textures
        }, Utils.getTexturesFromImages = function(ids) {
            for (var textures = [], i = 0; i < ids.length; i++) textures.push(new PIXI.Texture.fromImage(ids[i]));
            return textures
        }, Utils.getTexturesFromFramesWithPrefix = function(prefix, total) {
            for (var textures = [], i = 0; total > i; i++) {
                var path = prefix.replace("%%", 10 > i ? "0" + i : i);
                textures.push(new PIXI.Texture.fromFrame(path))
            }
            return textures
        }, Utils.formatScore = function(n) {
            for (var nArray = n.toString().split(""), text = "", total = nArray.length, offset = total % 3 - 1, i = 0; total > i; i++) text += nArray[i], (i - offset) % 3 == 0 && i != total - 1 && (text += ",");
            return text
        }, window.console || (window.console = {
            log: function() {}
        }), Utils.get_query = function(index) {
            for (var url = location.href, qs = url.substring(url.indexOf("?") + 1).split("&"), i = 0, result = {}; i < qs.length; i++) qs[i] = qs[i].split("="), result[qs[i][0]] = decodeURIComponent(qs[i][1]);
            return result.hasOwnProperty(index) ? result[index] : !1
        }, module.exports = Utils
    }), define("com/PiriPiriBlast/LoaderScreen", ["require", "exports", "module", "PIXI", "./AabButton", "./buttons/AabLabelButton", "../fido/buttons/Button", "../fido/Ticker", "../fido/FrameWait", "../fido/Device", "../fido/Utils"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            Ticker = (require("./AabButton"), require("./buttons/AabLabelButton"), require("../fido/buttons/Button"), require("../fido/Ticker")),
            Wait = require("../fido/FrameWait"),
            Utils = (require("../fido/Device"), require("../fido/Utils")),
            LoaderScreen = function(app) {
                this.app = app, PIXI.DisplayObjectContainer.call(this), this.count = 0, app.loader.onProgress.add(this.onProgress, this), this.easeLoad = 0, this.targetLoad = 0, this.prepreloader = new PIXI.AssetLoader([ASSET_URL + "img/game/LoadingSprites.json"]), this.prepreloader.onComplete = this.onAssetsLoaded.bind(this)
            };
        LoaderScreen.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), LoaderScreen.prototype.onShown = function() {
            this.prepreloader.load()
        }, LoaderScreen.prototype.onAssetsLoaded = function() {
            this.container = new PIXI.DisplayObjectContainer, this.loadingFrame = new PIXI.Sprite.fromFrame("LoadingFrame.png"), this.loadingFrame.x = -194, this.loadingFrame.y = 42, this.container.addChild(this.loadingFrame), this.bar = new PIXI.Sprite.fromFrame("LoadingBar.png"), this.bar.x = -177, this.bar.y = 71, this.text = new PIXI.Sprite.fromFrame("Loading.png"), this.text.x = -96, this.text.y = 134;
            var scale = .62;
            this.logo = new PIXI.Sprite.fromFrame("SpiceLogo.png"), this.logo.x = -500 * scale * .5, this.logo.y = -150, this.logo.scale.set(scale), this.container.addChild(this.bar), this.container.addChild(this.text), this.container.addChild(this.logo), Ticker.instance.add(this.update, this), this.addChild(this.container), this.resize(this.w, this.h), this.container.alpha = 0, this.scaleNumber = 351, Wait.wait(this.showLoader.bind(this))
        }, LoaderScreen.prototype.showLoader = function() {
            TweenLite.to(this.app.bg, .2, {
                alpha: 1,
                ease: Sine.easeOut
            }), TweenLite.to(this.container, .2, {
                alpha: 1,
                ease: Sine.easeOut
            }), this.app.loader.load()
        }, LoaderScreen.prototype.update = function() {
            this.bar.scale.x < this.scaleNumber && (this.easeLoad += .3 * (this.targetLoad - this.easeLoad), this.bar.width = this.scaleNumber * this.easeLoad, this.easeLoad > .99 && (TweenLite.to({
                foo: 0
            }, .8, {
                foo: 100,
                onComplete: this.loadFinished.bind(this)
            }), this.onHide()))
        }, LoaderScreen.prototype.loadFinished = function() {
            "true" === Utils.get_query("fastplay") ? Utils.get_query("level") !== !1 ? (app.session.level = Utils.get_query("level") - 1, this.screenManager.gotoScreenByID("game")) : this.app.screenManager.gotoScreenByID("levelScreen") : this.app.screenManager.gotoScreenByID("title")
        }, LoaderScreen.prototype.onProgress = function(percent) {
            this.targetLoad = percent
        }, LoaderScreen.prototype.onShow = function() {}, LoaderScreen.prototype.onHide = function() {
            Ticker.instance.remove(this.update, this)
        }, LoaderScreen.prototype.resize = function(w, h) {
            this.w = w, this.h = h, this.container && (this.container.x = .5 * w, this.container.y = .5 * h)
        }, module.exports = LoaderScreen
    }), define("com/PiriPiriBlast/hud/TextElement", ["require", "exports", "module", "PIXI", "Signals", "../../fido/Ticker"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            TextElement = (require("Signals"), require("../../fido/Ticker"), function() {
                PIXI.DisplayObjectContainer.call(this), this.letters = [], this.myWidth = 0, this.actualWidth = 0
            });
        TextElement.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), TextElement.prototype.setText = function(word) {
            this.reset(), this.makeWord(word)
        }, TextElement.prototype.reset = function() {
            for (var i = this.children.length - 1; i >= 0; i--) this.removeChild(this.children[i]);
            this.letters = [], this.myWidth = 0
        }, TextElement.prototype.makeWord = function(word) {
            word = word.toLowerCase();
            for (var len = word.length, split = word.split(""), i = 0; len > i; i++) {
                var letter;
                if (" " != split[i]) {
                    var ident, width = 0;
                    "/" === split[i] ? (ident = "slash", width = 22) : "0" === split[i] || 0 === split[i] ? (ident = "0", width = 27) : "1" === split[i] || 1 === split[i] ? (ident = "1", width = 20) : "x" === split[i] ? (ident = "x", width = 27) : (ident = split[i], width = 30), letter = PIXI.Sprite.fromFrame(ident + ".png")
                }
                letter.anchor.x = .5, letter.anchor.y = .5, letter.position.x = this.myWidth, this.myWidth += width, this.actualWidth += letter.width, this.addChild(letter), this.letters.push(letter)
            }
        }, module.exports = TextElement
    }), define("com/PiriPiriBlast/Constants", ["require", "exports", "module"], function(require, exports, module) {
        var Constants = {
            LEVEL_STATES: {
                LOCKED: 0,
                UNLOCKED: 1,
                COMPLETE: 2,
                COMPLETE_WITH_GEMS: 3
            },
            BOMB_BLAST_RADIUS: 2,
            FLOOROFFSET: {
                x: -82,
                y: -12
            },
            OFFSETS: {
                x: 28,
                y: 100
            },
            BLOCKS: {
                EMPTY: 0,
                DESTRUCTABLE: 1,
                INDESTRUCTABLE: 2,
                BARREL: 3,
                BOMB: 4,
                CRACKED: 5,
                DOUBLE_HIT: 6,
                START: 7,
                END: 8,
                UP_DOWN: 9,
                SOFT: 10
            },
            BARREL: {
                A: {
                    blastRadius: 3
                },
                B: {
                    blastRadius: 5
                }
            },
            UPDOWNPATTERNS: {
                A: [1, 0, 0, 0, 0, 0, 0],
                B: [1, 1, 1, 0, 0, 0, 0, 0],
                C: [0, 1, 1, 1, 0, 0, 0, 0],
                D: [0, 0, 1, 1, 1, 0, 0, 0],
                E: [0, 0, 0, 0, 0, 0, 1, 1],
                F: [0, 0, 0, 0, 1, 1, 1, 1],
                G: [0, 0, 0, 1, 1, 1, 1, 1],
                H: [1, 1, 0, 0, 0, 0, 1, 1]
            },
            AXIS: {
                NONE: 0,
                HORIZONTAL: 1,
                VERTICAL: 2,
                BOTH: 3
            }
        };
        module.exports = Constants
    }), define("com/PiriPiriBlast/buttons/LevelButton", ["require", "exports", "module", "../../fido/buttons/Button", "../../fido/Utils", "../../fido/sound/SoundManager", "../hud/TextElement", "../Constants", "com/fido/sound/SoundManager"], function(require, exports, module) {
        var Button = require("../../fido/buttons/Button"),
            SoundManager = (require("../../fido/Utils"), require("../../fido/sound/SoundManager")),
            TextElement = require("../hud/TextElement"),
            Constants = require("../Constants"),
            SoundManager = require("com/fido/sound/SoundManager"),
            LevelButton = function(parameters) {
                this.state = 0, this.view = new PIXI.DisplayObjectContainer, this.view.hitArea = new PIXI.Rectangle(0, 0, 170, 200), Button.call(this, this.view), this.frame = new PIXI.Sprite.fromFrame("LevelFrame.png"), this.frame.scale.set(1, 1), this.frame.anchor.set(.5, 0), this.frame.position.x = 100, this.frame.position.y = -22, this.view.addChild(this.frame), this.frameGold = new PIXI.Sprite.fromFrame("PerfectFrame.png"), this.frameGold.scale.set(1, 1), this.frameGold.anchor.set(.5, 0), this.frameGold.position.x = 100, this.frameGold.position.y = -22, this.view.addChild(this.frameGold), this.frameLocked = new PIXI.Sprite.fromFrame("LockedFrame.png"), this.frameLocked.scale.set(1, 1), this.frameLocked.anchor.set(.5, 0), this.frameLocked.position.x = 100, this.frameLocked.position.y = -22, this.view.addChild(this.frameLocked), this.pot = new PIXI.Sprite.fromFrame(parameters.sprite), this.pot.scale.set(1, 1), this.pot.anchor.set(.5, 0), this.pot.position.x = 100, this.pot.position.y = 0, this.view.addChild(this.pot), this.potLocked = new PIXI.Sprite.fromFrame("PotLocked.png"), this.potLocked.scale.set(1, 1), this.potLocked.anchor.set(.5, 0), this.potLocked.position.x = 100, this.potLocked.position.y = 0, this.potLocked.alpha = 0, this.view.addChild(this.potLocked), this.name = new TextElement, this.name.setText(parameters.name), this.name.position.x = 115 - .5 * this.name.actualWidth, this.name.position.y = 64, "1" === parameters.name && (this.name.position.x -= 5), this.view.addChild(this.name), this.readoutFrame = new PIXI.Sprite.fromFrame("GemTab.png"), this.readoutFrame.scale.set(1, 1), this.readoutFrame.anchor.set(.5, 0), this.readoutFrame.position.x = 100, this.readoutFrame.position.y = 111, this.view.addChild(this.readoutFrame), this.readoutFrameGold = new PIXI.Sprite.fromFrame("GemTab.png"), this.readoutFrameGold.scale.set(1, 1), this.readoutFrameGold.anchor.set(.5, 0), this.readoutFrameGold.position.x = 100, this.readoutFrameGold.position.y = 111, this.view.addChild(this.readoutFrameGold), this.view.mouseover = this.view.touchstart = this.onMouseOver.bind(this), this.view.mouseout = this.view.touchend = this.onMouseOut.bind(this), this.onDown.add(this.onMouseDown, this), this.gems = [];
                for (var i = 0; 3 > i; i++) gem = new PIXI.Sprite.fromFrame("GoldGem.png"), gem.anchor.set(.5, 0), gem.scale.set(.45), gem.position.x = 66 + 34 * i, gem.position.y = 130, gem.alpha = 0, this.view.addChild(gem), this.gems.push(gem)
            };
        LevelButton.prototype = Object.create(Button.prototype), LevelButton.prototype.setState = function(state, count) {
            switch (this.state = state, this.setGemCount(count), this.pot.alpha = 0, this.potLocked.alpha = 0, this.readoutFrame.alpha = 0, this.name.alpha = 0, this.frameLocked.alpha = 0, this.frame.alpha = 0, this.frameGold.alpha = 0, state) {
                case Constants.LEVEL_STATES.LOCKED:
                    this.interactive = !1, this.potLocked.alpha = 1, this.frameLocked.alpha = 1;
                    break;
                case Constants.LEVEL_STATES.UNLOCKED:
                    this.name.alpha = 1, this.pot.alpha = 1, this.frame.alpha = 1;
                    break;
                case Constants.LEVEL_STATES.COMPLETE:
                    this.name.alpha = 1, this.pot.alpha = 1, this.frame.alpha = 1;
                    break;
                case Constants.LEVEL_STATES.COMPLETE_WITH_GEMS:
                    this.name.alpha = 1, this.pot.alpha = 1, this.frameGold.alpha = 1
            }
        }, LevelButton.prototype.setGemCount = function(count) {
            for (var i = 0; 3 > i; i++) this.gems[i].alpha;
            for (var texture = PIXI.Texture.fromFrame(3 === count ? "GoldGem.png" : "LargeGem.png"), i = 0; count > i; i++) gem = this.gems[i], gem.setTexture(texture), gem.alpha = 1
        }, LevelButton.prototype.onMouseDown = function() {
            0 != this.state && (SoundManager.sfx.play("buttonPress"), TweenLite.to(this.view.scale, .1, {
                x: 1.2,
                y: 1.2,
                ease: Quad.easeOut
            }))
        }, LevelButton.prototype.onMouseOver = function() {
            this.state > 0 && (TweenLite.to(this.view.scale, .5, {
                x: 1.1,
                y: 1.1,
                ease: Elastic.easeOut
            }), TweenLite.to(this.view, .75, {
                rotation: .05 * (Math.random() - .5),
                ease: Elastic.easeOut
            }))
        }, LevelButton.prototype.onMouseOut = function() {
            this.state > 0 && (TweenLite.to(this.view.scale, .25, {
                x: 1,
                y: 1,
                ease: Quart.easeInOut
            }), TweenLite.to(this.view, .75, {
                rotation: 0,
                ease: Elastic.easeOut
            }))
        }, module.exports = LevelButton
    }), define("com/PiriPiriBlast/Levels", ["require", "exports", "module"], function(require, exports, module) {
        for (var LevelDefault = function() {
                this.name = "Temp", this.bombs = 3, this.map = []
            }, LevelOne = function() {
                LevelDefault.call(this), this.name = "1", this.bombs = 2, this.map = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 7, 0, 1, 0, "1-*", 0, 0, "1-*", 0, "1-*", 0, 8, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], this.sprite = "GoldPot.png"
            }, LevelTwo = function() {
                LevelDefault.call(this), this.name = "2", this.bombs = 2, this.map = [7, 0, 2, 2, 2, 2, 3, 0, 3, 2, 2, 2, 0, 0, 2, 2, 2, 2, 10, 2, 3, 0, 0, "1-*", 0, 0, 0, 0, 0, 0, "1-*", 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, "6-*", 10, 3, 2, 2, 2, 10, 2, 2, 2, 0, 0, 3, 10, 3, 0, 0, 0, 3, 2, 2, 2, 0, 8], this.sprite = "GoldPot.png"
            }, LevelThree = function() {
                LevelDefault.call(this), this.name = "3", this.bombs = 4, this.map = [7, 3, 0, 0, "3-B", 0, 0, 0, "3-B", 10, 10, 10, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1, "1-*", 1, 2, 3, 0, 0, 3, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, "3-B", "3-B", 3, 6, 6, 6, "10-*", 3, "1-*", 10, 0, 2, 0, 0, 0, 3, 2, 0, 10, 3, 1, 10, 0, 1, 3, 0, 0, 0, 2, 0, 10, 8], this.sprite = "GoldPot.png"
            }, LevelFour = function() {
                LevelDefault.call(this), this.name = "4", this.bombs = 3, this.map = [7, 2, "3-B", 2, 2, 2, 3, 10, 3, 2, "10-*", "3-B", 0, 1, 0, 3, 2, 2, 0, 2, 0, 2, 2, 0, 10, 2, 0, 2, 0, 0, 3, 2, 3, 10, 0, 1, 3, 0, "6-*", 2, 10, 2, 2, 0, 0, 2, 5, 0, 10, 2, 3, 0, 3, 2, 1, 2, 0, 2, 1, 3, "10-*", 2, 2, 2, 2, 1, 0, 0, 1, 1, 0, 8], this.sprite = "GoldPot.png"
            }, LevelFive = function() {
                LevelDefault.call(this), this.name = "5", this.bombs = 2, this.map = [7, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 3, 3, "9-D", "9-C", "9-B", 0, "3-B", 0, 0, "6-*", 0, 2, 3, "6-*", 2, 2, 2, 2, 0, 0, 0, 3, 0, 2, 2, 2, 2, 0, 0, 0, 3, 3, "6-*", 6, 5, 0, 6, 5, 0, 0, 0, 0, 0, 6, 6, 6, 5, 3, 6, 0, 5, "3-B", "3-B", 3, 3, 6, 6, 8], this.sprite = "GoldPot.png"
            }, LevelSix = function() {
                LevelDefault.call(this), this.name = "6", this.bombs = 3, this.map = [7, 6, 6, "10-*", 1, 0, "3-B", 10, 10, 10, 10, "3-B", 10, 3, 0, 0, 2, 0, 2, 2, 2, 2, 10, 10, 10, 10, 2, 2, 2, 3, 0, 0, 3, 2, 10, 10, "10-*", 10, 2, 2, 0, 0, 2, 2, 3, 2, "10-*", 3, 0, 0, 2, 2, 0, 0, 2, 2, 0, 2, 2, 1, 0, "3-B", 10, 6, 0, "3-B", 10, 10, 0, "9-A", 6, 8], this.sprite = "GoldPot.png"
            }, LevelSeven = function() {
                LevelDefault.call(this), this.name = "7", this.bombs = 7, this.map = [1, 0, 1, 0, 1, 0, 2, 3, 0, "3-B", 0, 6, 0, 1, 2, 1, 0, 1, 2, "9-F", 2, 10, 2, 6, 1, 0, 2, 0, 7, 2, 2, "1-*", 2, 10, 2, 0, 0, 1, 2, 1, 0, 1, 2, 8, 2, "6-*", 2, 3, "1-*", 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 0, "9-F", 1, "9-H", "3-B", 0, 0, "9-F", 6, 3], this.sprite = "GoldPot.png"
            }, LevelEight = function() {
                LevelDefault.call(this), this.name = "8", this.bombs = 8, this.map = [7, 0, "9-B", 1, 5, 5, 0, "9-B", 1, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 3, 5, 3, 5, "6-*", "9-B", "3-B", "9-B", 0, 6, "9-B", 0, "9-B", 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, "3-B", 10, 10, 10, 10, 6, 0, 0, 3, 0, 10, 10, 2, "3-B", "10-*", 10, 10, "1-*", 2, 2, 2, 2, 10, 8], this.sprite = "GoldPot.png"
            }, LevelNine = function() {
                LevelDefault.call(this), this.name = "9", this.bombs = 4, this.map = [7, 2, "3-B", "9-F", "9-F", "9-F", "10-*", 2, 3, "9-B", 10, "10-*", 5, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 1, 2, "3-B", "9-A", 10, 0, 10, "9-F", 0, 2, 8, 2, 10, 2, 0, 2, 2, 2, 2, 2, 3, 2, 6, 3, "9-F", 2, 0, 2, 3, "9-B", 3, "9-G", 0, 2, 3, "3-B", 0, 0, 3, 2, "10-*", 2, 2, 2, 0, "9-F", "3-B", 5], this.sprite = "GoldPot.png"
            }, LevelTen = function() {
                LevelDefault.call(this), this.name = "10", this.bombs = 6, this.map = [7, 2, 5, 2, 0, 0, 2, 2, 6, "9-A", 0, 0, 1, 2, "6-*", 2, 0, "3-B", 0, "9-A", "6-*", 2, "6-*", 2, "9-B", 2, 10, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 2, 10, 0, 2, "9-A", 2, "3-B", 0, "9-A", 6, 0, "9-D", 2, "9-E", 0, 2, 1, 2, "9-A", 2, 2, 5, 1, "3-B", 0, "3-B", 6, 2, 5, 0, 0, 2, 2, 0, 8], this.sprite = "GoldPot.png"
            }, levels = [new LevelOne, new LevelTwo, new LevelThree, new LevelFour, new LevelFive, new LevelSix, new LevelSeven, new LevelEight, new LevelNine, new LevelTen], i = 0; i < levels.length; i++) levels[i].id = i;
        module.exports = levels
    }), define("com/fido/LocalStorage", ["require", "exports", "module"], function(require, exports, module) {
        var LocalStorage = function(bundleId) {
            this.id = bundleId
        };
        LocalStorage.prototype.store = function(key, value) {
            localStorage.setItem(this.id + "." + key, value)
        }, LocalStorage.prototype.get = function(key) {
            return localStorage.getItem(this.id + "." + key) || 0
        }, LocalStorage.prototype.storeObject = function(key, value) {
            localStorage.setItem(this.id + "." + key, JSON.stringify(value))
        }, LocalStorage.prototype.getObject = function(key) {
            return JSON.parse(localStorage.getItem(this.id + "." + key) || 0)
        }, LocalStorage.prototype.remove = function(key) {
            localStorage.removeItem(this.id + "." + key)
        }, LocalStorage.prototype.reset = function() {
            for (var i in localStorage) - 1 !== i.indexOf(this.id + ".") && localStorage.removeItem(i)
        }, module.exports = LocalStorage
    }), define("com/piripiriblast/GameSaveManager", ["require", "exports", "module", "../fido/LocalStorage", "Signals"], function(require, exports, module) {
        var LocalStorage = require("../fido/LocalStorage"),
            Signal = require("Signals"),
            GameSaveManager = function() {
                this.onLoaded = new Signal, this.localStorage = new LocalStorage("com.GoodBoyDigital.PiriPiriBlastGame"), this.save = null
            };
        GameSaveManager.prototype.loadGame = function() {
            this.loadGameFromLocalStorage()
        }, GameSaveManager.prototype.loadGameFromLocalStorage = function() {
            var save = this.localStorage.getObject("save");
            save || (save = new GameSave, this.localStorage.storeObject("save", save)), this.save = save, this.onLoaded.dispatch()
        }, GameSaveManager.prototype.isPB = function(levelId, score) {
            var bestScore = this.save.levelBestScores[levelId];
            return score > bestScore
        }, GameSaveManager.prototype.getPB = function(levelId) {
            var bestScore = this.save.levelBestScores[levelId];
            return bestScore
        }, GameSaveManager.prototype.unlockLevel = function(levelId) {
            return 0 === this.save.levelStates[levelId] && (this.save.levelStates[levelId] = 1, this.saveToStorage()), !0
        }, GameSaveManager.prototype.saveLevelState = function(levelId, levelState) {
            return levelState > this.save.levelStates[levelId] && (this.save.levelStates[levelId] = levelState, this.saveToStorage()), !0
        }, GameSaveManager.prototype.isPerfectComplete = function() {
            for (var i = 0; i < this.save.levelStates.length; i++)
                if (3 !== this.save.levelStates[i]) return !1;
            return !0
        }, GameSaveManager.prototype.saveScore = function(levelId, score) {
            var bestScore = this.save.levelBestScores[levelId];
            this.save.totalScore = this.save.totalScore || 0, this.save.totalScore += score, score > bestScore && (this.save.levelBestScores[levelId] = score), this.saveToStorage()
        }, GameSaveManager.prototype.saveToStorage = function() {
            this.localStorage.storeObject("save", this.save)
        };
        var GameSave = function() {
            this.levelStates = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.levelBestScores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.totalScore = 0
        };
        GameSaveManager.instance = new GameSaveManager, module.exports = GameSaveManager
    }), define("com/fido/tracking/Tracking", ["require", "exports", "module"], function(require, exports, module) {
        //var Tracking = {};
        //Tracking.degug = !0, Tracking.defaultTitle = "Little tasters peri peri", Tracking.gaTrack = function(data) {
            //Tracking.degug, window._gaq && _gaq.push(data)
        //}, Tracking.trackEvent = function(eventData) {
           // var trackData = ["_trackEvent", Tracking.defaultTitle],
             //   mergedData = trackData.concat(eventData);
           // Tracking.gaTrack(mergedData)
        //}, module.exports = Tracking
    }), define("com/piripiriblast/buttons/PiriPiriButton", ["require", "exports", "module", "PIXI", "../../fido/buttons/Button", "com/fido/sound/SoundManager"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            Button = require("../../fido/buttons/Button"),
            SoundManager = require("com/fido/sound/SoundManager"),
            PiriPiriButton = function(icon, wide, pView) {
                var view = pView || new PIXI.DisplayObjectContainer;
                this.wide = wide || !1, this.rScale = 1, this.tScale = 1, this.offsetY = 15, this.down = !1, wide ? (this.bg = new PIXI.Sprite.fromFrame("LongButtonUp.png"), view.addChild(this.bg), this.tScale = 1.1) : (this.bg = new PIXI.Sprite.fromFrame("LargeSquareButtonUp.png"), view.addChild(this.bg), this.rScale = .5, this.tScale = .52, view.scale.set(this.rScale, this.rScale)), this.bg.anchor.set(.5), view.hasOwnProperty("anchor") === !0 && view.anchor.set(.5, .5), Button.call(this, view), icon && (this.icon = new PIXI.Sprite.fromFrame(icon), wide ? (this.icon.scale.set(1, 1), this.icon.anchor.set(.5, .5)) : (this.icon.scale.set(2, 2), this.icon.anchor.set(.5, .52)), this.view.addChild(this.icon)), this.iconOriginalY = this.icon.position.y, this.view.touchstart = this.onMouseDown.bind(this), this.view.mouseupoutside = this.view.touchend = this.view.touchendoutside = this.onMouseUp.bind(this), this.onDown.add(this.onMouseDown, this), this.onUp.add(this.onMouseUp, this), this.enabled = !0
            };
        PiriPiriButton.prototype = Object.create(Button.prototype), PiriPiriButton.prototype.setIcon = function(icon) {
            this.icon.setTexture(PIXI.Texture.fromFrame(icon))
        }, PiriPiriButton.prototype.enable = function() {
            this.enabled || (this.enabled = !0, this.view.alpha = 1, this.view.interactive = !0, this.bg.setTexture(PIXI.Texture.fromFrame("LargeSquareButtonUp.png")))
        }, PiriPiriButton.prototype.disable = function() {
            this.enabled && (this.enabled = !1, this.view.alpha = .6, this.view.interactive = !1, this.bg.setTexture(PIXI.Texture.fromFrame("LargeSquareButtonNo.png")))
        }, PiriPiriButton.prototype.onMouseDown = function() {
            this.down !== !0 && (this.down = !0, SoundManager.sfx.play("buttonPress"), this.bg.setTexture(this.wide ? PIXI.Texture.fromFrame("LongButtonClick.png") : PIXI.Texture.fromFrame("LargeSquareButtonClick.png")), TweenLite.to(this.icon, .05, {
                y: this.iconOriginalY - this.offsetY,
                ease: Linear.none
            }), TweenLite.to(this.view.scale, .2, {
                x: this.tScale,
                y: this.tScale,
                ease: Elastic.easeOut
            }))
        }, PiriPiriButton.prototype.onMouseUp = function() {
            this.down = !1, this.bg.setTexture(this.wide ? PIXI.Texture.fromFrame("LongButtonUp.png") : PIXI.Texture.fromFrame("LargeSquareButtonUp.png")), TweenLite.to(this.icon, .05, {
                y: this.iconOriginalY,
                ease: Linear.none
            }), TweenLite.to(this.view.scale, .2, {
                x: this.rScale,
                y: this.rScale,
                ease: Elastic.easeOut
            })
        }, module.exports = PiriPiriButton
    }), define("com/PiriPiriBlast/LevelScreen", ["require", "exports", "module", "PIXI", "./buttons/LevelButton", "./Levels", "com/piripiriblast/GameSaveManager", "com/fido/tracking/Tracking", "com/piripiriblast/buttons/PiriPiriButton"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            LevelButton = require("./buttons/LevelButton"),
            Levels = require("./Levels"),
            GameSaveManager = require("com/piripiriblast/GameSaveManager"),
            //Tracking = require("com/fido/tracking/Tracking"),
            PiriPiriButton = require("com/piripiriblast/buttons/PiriPiriButton");
        LevelScreen = function(game) {
            PIXI.DisplayObjectContainer.call(this), this.title = new PIXI.Sprite.fromFrame("SelectLevel.png"), this.title.position.x = 453, this.title.position.y = 76, this.addChild(this.title), this.container = new PIXI.DisplayObjectContainer, this.addChild(this.container), this.game = game, this.cellWidth = 5, this.cellSizeX = 180, this.cellSizeY = 230, this.levelPanels = [];
            for (var save = GameSaveManager.instance.save, i = 0; i < Levels.length; i++) {
                var button = (save.levelStates[i], new LevelButton(Levels[i]));
                button.id = i, button.onPress.add(this.onButtonPressed, this);
                var x = i % this.cellWidth,
                    y = i / this.cellWidth | 0;
                button.view.position.x = x * this.cellSizeX + .5 * this.cellSizeX, button.view.position.y = y * this.cellSizeY + .5 * this.cellSizeY, button.view.scale.set(0, 0), button.view.pivot.x = .5 * this.cellSizeX, button.view.pivot.y = .5 * this.cellSizeY, this.container.addChild(button.view), this.levelPanels.push(button)
            }
            var backButton = new PiriPiriButton("Back.png");
            this.addChild(backButton.view), backButton.onPress.add(this.onBackPressed, this), backButton.view.position.x = 55, backButton.view.position.y = 580, this.backButton = backButton
        }, LevelScreen.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), LevelScreen.prototype.onBackPressed = function() {
            this.screenManager.gotoScreenByID("title")
        }, LevelScreen.prototype.onButtonPressed = function(event) {
            var save = GameSaveManager.instance.save,
                state = save.levelStates[event.id];
            0 === state || (app.session.level = event.id, this.screenManager.gotoScreenByID("game"))
        }, LevelScreen.prototype.onShow = function() {
            for (var delayTime = .12, save = GameSaveManager.instance.save, i = 0; i < this.levelPanels.length; i++) {
                var panel = this.levelPanels[i],
                    state = save.levelStates[i];
                panel.setState(state, save.levelBestScores[i]), TweenLite.to(panel.view.scale, .5, {
                    x: 1,
                    y: 1,
                    delay: i * delayTime,
                    ease: Elastic.easeOut,
                    data: {
                        id: i
                    },
                    onStart: function() {}
                })
            }
        }, LevelScreen.prototype.resize = function(w, h) {
            this.container.position.x = .5 * w - 510 + 50, this.container.position.y = .5 * h - 160
        }, module.exports = LevelScreen
    }), define("com/PiriPiriBlast/buttons/PiriPiriButton", ["require", "exports", "module", "PIXI", "../../fido/buttons/Button", "com/fido/sound/SoundManager"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            Button = require("../../fido/buttons/Button"),
            SoundManager = require("com/fido/sound/SoundManager"),
            PiriPiriButton = function(icon, wide, pView) {
                var view = pView || new PIXI.DisplayObjectContainer;
                this.wide = wide || !1, this.rScale = 1, this.tScale = 1, this.offsetY = 15, this.down = !1, wide ? (this.bg = new PIXI.Sprite.fromFrame("LongButtonUp.png"), view.addChild(this.bg), this.tScale = 1.1) : (this.bg = new PIXI.Sprite.fromFrame("LargeSquareButtonUp.png"), view.addChild(this.bg), this.rScale = .5, this.tScale = .52, view.scale.set(this.rScale, this.rScale)), this.bg.anchor.set(.5), view.hasOwnProperty("anchor") === !0 && view.anchor.set(.5, .5), Button.call(this, view), icon && (this.icon = new PIXI.Sprite.fromFrame(icon), wide ? (this.icon.scale.set(1, 1), this.icon.anchor.set(.5, .5)) : (this.icon.scale.set(2, 2), this.icon.anchor.set(.5, .52)), this.view.addChild(this.icon)), this.iconOriginalY = this.icon.position.y, this.view.touchstart = this.onMouseDown.bind(this), this.view.mouseupoutside = this.view.touchend = this.view.touchendoutside = this.onMouseUp.bind(this), this.onDown.add(this.onMouseDown, this), this.onUp.add(this.onMouseUp, this), this.enabled = !0
            };
        PiriPiriButton.prototype = Object.create(Button.prototype), PiriPiriButton.prototype.setIcon = function(icon) {
            this.icon.setTexture(PIXI.Texture.fromFrame(icon))
        }, PiriPiriButton.prototype.enable = function() {
            this.enabled || (this.enabled = !0, this.view.alpha = 1, this.view.interactive = !0, this.bg.setTexture(PIXI.Texture.fromFrame("LargeSquareButtonUp.png")))
        }, PiriPiriButton.prototype.disable = function() {
            this.enabled && (this.enabled = !1, this.view.alpha = .6, this.view.interactive = !1, this.bg.setTexture(PIXI.Texture.fromFrame("LargeSquareButtonNo.png")))
        }, PiriPiriButton.prototype.onMouseDown = function() {
            this.down !== !0 && (this.down = !0, SoundManager.sfx.play("buttonPress"), this.bg.setTexture(this.wide ? PIXI.Texture.fromFrame("LongButtonClick.png") : PIXI.Texture.fromFrame("LargeSquareButtonClick.png")), TweenLite.to(this.icon, .05, {
                y: this.iconOriginalY - this.offsetY,
                ease: Linear.none
            }), TweenLite.to(this.view.scale, .2, {
                x: this.tScale,
                y: this.tScale,
                ease: Elastic.easeOut
            }))
        }, PiriPiriButton.prototype.onMouseUp = function() {
            this.down = !1, this.bg.setTexture(this.wide ? PIXI.Texture.fromFrame("LongButtonUp.png") : PIXI.Texture.fromFrame("LargeSquareButtonUp.png")), TweenLite.to(this.icon, .05, {
                y: this.iconOriginalY,
                ease: Linear.none
            }), TweenLite.to(this.view.scale, .2, {
                x: this.rScale,
                y: this.rScale,
                ease: Elastic.easeOut
            })
        }, module.exports = PiriPiriButton
    }), define("com/PiriPiriBlast/buttons/TwoFrameButton", ["require", "exports", "module", "PIXI", "../../fido/buttons/Button"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            Button = require("../../fido/buttons/Button"),
            TwoFrameButton = function(upFrame, downFrame) {
                this.upFrame = upFrame, this.downFrame = downFrame;
                var view = new PIXI.Sprite.fromFrame(this.upFrame);
                view.anchor.set(.5), this.tScale = 1.1, this.rScale = 1, Button.call(this, view), this.view.touchstart = this.onMouseDown.bind(this), this.view.touchend = this.view.touchendoutside = this.onMouseUp.bind(this), this.onDown.add(this.onMouseDown, this), this.onUp.add(this.onMouseUp, this)
            };
        TwoFrameButton.prototype = Object.create(Button.prototype), TwoFrameButton.prototype.onMouseDown = function() {
            this.down !== !0 && (this.down = !0, this.view.setTexture(PIXI.Texture.fromFrame(this.downFrame)), TweenLite.to(this.view.scale, .2, {
                x: this.tScale,
                y: this.tScale,
                ease: Elastic.easeOut
            }))
        }, TwoFrameButton.prototype.onMouseUp = function() {
            this.down = !1, this.view.setTexture(PIXI.Texture.fromFrame(this.upFrame)), TweenLite.to(this.view.scale, .2, {
                x: this.rScale,
                y: this.rScale,
                ease: Elastic.easeOut
            })
        }, module.exports = TwoFrameButton
    }), define("com/PiriPiriBlast/effects/SunBurst", ["require", "exports", "module", "Signals", "PIXI", "../Constants", "../../fido/Ticker"], function(require, exports, module) {
        var Signal = require("Signals"),
            PIXI = require("PIXI"),
            SunBurst = (require("../Constants"), require("../../fido/Ticker"), function(icon, ratio) {
                this.view = new PIXI.DisplayObjectContainer, this.view.isActive = !1, this.sprite = PIXI.Sprite.fromImage(icon ? icon : ASSET_URL + "img/game/SunburstFG.png"), this.sprite.anchor.set(.5), this.view.addChild(this.sprite), this.sprite.blendMode = PIXI.blendModes.ADD, this.onComplete = new Signal, this.view.ratio = ratio && 0 !== ratio ? ratio : Math.random() > .5 ? .02 : .01, this.view.count = 0, this.view.updateTransform = function() {
                    this.isActive === !0 && (PIXI.DisplayObjectContainer.prototype.updateTransform.call(this), this.count += 1, this.rotation = .01 * this.count * this.ratio)
                }
            });
        SunBurst.prototype = SunBurst.prototype, SunBurst.prototype.reset = function() {
            this.count = 0
        }, SunBurst.prototype.start = function(params) {
            this.view.isActive = !0, params && params.hasOwnProperty("ratio") === !0 && (this.view.ratio = params.ratio)
        }, SunBurst.prototype.update = function() {}, module.exports = SunBurst
    }), define("com/fido/share/Share", ["require", "exports", "module"], function(require, exports, module) {
    }), define("com/PiriPiriBlast/TitleScreen", ["require", "exports", "module", "PIXI", "./buttons/PiriPiriButton", "./buttons/TwoFrameButton", "../fido/buttons/Button", "../fido/Device", "./effects/SunBurst", "com/fido/share/Share", "com/fido/tracking/Tracking", "com/fido/Device"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            PiriPiriButton = require("./buttons/PiriPiriButton"),
            TwoFrameButton = require("./buttons/TwoFrameButton"),
            Device = (require("../fido/buttons/Button"), require("../fido/Device")),
            SunBurst = require("./effects/SunBurst"),
            Share = require("com/fido/share/Share"),
            //Tracking = require("com/fido/tracking/Tracking"),
            Device = require("com/fido/Device"),
            TitleScreen = function(app) {
                this.app = app, PIXI.DisplayObjectContainer.call(this), this.playButton = new PlayButton, this.playButton.view.y = 500, this.playButton.view.x = 512, this.playButton.onPress.add(this.onButtonPressed, this), this.logo = new PIXI.Sprite.fromFrame("SpiceLogo.png"), this.logo.anchor.set(.5, .5), this.sunBurstBG = new SunBurst(ASSET_URL + "img/game/SunburstBG.png", .2), this.sunBurstBG.start(), this.sunBurstBG.view.scale.set(2.5), this.sunBurstFG = new SunBurst(ASSET_URL + "img/game/SunburstFG.png", .3), this.sunBurstFG.start(), this.sunBurstFG.view.scale.set(1.6), this.sunBurstFG.view.blendMode = PIXI.blendModes.ADD, this.sunBurstFG2 = new SunBurst(ASSET_URL + "img/game/SunburstFG.png", -.1), this.sunBurstFG2.start(), this.sunBurstFG2.view.scale.set(2.5), this.sunBurstFG2.view.blendMode = PIXI.blendModes.ADD, this.sunBurstFG2.view.alpha = .6, this.showlogo = new PIXI.Sprite.fromFrame("ProductInfo.png"), this.showlogo.anchor.set(.5), this.wrapPhoto = new PIXI.Sprite.fromFrame("WrapPhoto.png"), this.wrapPhoto.position.x = 540, this.wrapPhoto.position.y = 440, this.wrapPhoto.anchor.set(.5, .5), this.textLine = new PIXI.Sprite.fromFrame("HuntFor.png"), this.textLine.position.x = 560, this.textLine.position.y = 610, this.textLine.anchor.set(.5, .5), this.textLine2 = new PIXI.Sprite.fromFrame("LittleTasters.png"), this.textLine2.position.x = 560, this.textLine2.position.y = 610, this.textLine2.anchor.set(.5, .5), this.addChild(this.sunBurstBG.view), this.addChild(this.sunBurstFG.view), this.addChild(this.sunBurstFG2.view), this.addChild(this.wrapPhoto), this.addChild(this.textLine), this.addChild(this.textLine2), this.addChild(this.logo), this.addChild(this.playButton.view);
                var tc = new PIXI.Sprite.fromFrame("Terms.png");
            };
        TitleScreen.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), TitleScreen.prototype.onBackToMainSite = function() {
            //window.location.href = "http://www.someurl.com"
        }, TitleScreen.prototype.onButtonPressed = function(bt) {
            bt === this.playButton ? (Device.instance.android && (document.body.mozRequestFullScreen ? document.body.mozRequestFullScreen() : document.body.webkitRequestFullScreen && document.body.webkitRequestFullScreen()), this.screenManager.gotoScreenByID("levelScreen")) : bt === this.storeInfo
        }, TitleScreen.prototype.onShow = function() {
            this.logo.scale.set(0), this.logo.alpha = 0, this.playButton.view.alpha = 0, this.playButton.view.scale.set(0), this.sunBurstBG.view.alpha = 0, this.sunBurstFG.view.alpha = 0, this.sunBurstFG2.view.alpha = 0, this.wrapPhoto.scale.set(0), this.textLine.scale.set(0), this.textLine2.scale.set(0)
        }, TitleScreen.prototype.onShown = function() {
            var wrapDelay = 4;
            TweenLite.to(this.wrapPhoto, .5, {
                alpha: 1,
                delay: .2
            }), TweenLite.to(this.wrapPhoto.scale, 1, {
                x: 1,
                y: 1,
                ease: Elastic.easeOut,
                delay: .2
            }), TweenLite.to(this.textLine.scale, 1, {
                x: 1,
                y: 1,
                ease: Elastic.easeOut,
                delay: .2
            }), TweenLite.to(this.wrapPhoto.scale, 1.8, {
                x: .4,
                y: .4,
                ease: Elastic.easeOut,
                delay: 4
            }), TweenLite.to(this.wrapPhoto, 1, {
                alpha: 0,
                delay: 3.8
            }), TweenLite.to(this.textLine.scale, 1.8, {
                x: .4,
                y: .4,
                ease: Elastic.easeOut,
                delay: 1.9
            }), TweenLite.to(this.textLine, 1, {
                alpha: 0,
                delay: 3.9 - 2.1
            }), TweenLite.to(this.textLine2.scale, 1.3, {
                x: 1,
                y: 1,
                ease: Elastic.easeOut,
                delay: 2.1
            }), TweenLite.to(this.textLine2.scale, 1.3, {
                x: .4,
                y: .4,
                ease: Elastic.easeOut,
                delay: 4
            }), TweenLite.to(this.textLine2, .4, {
                alpha: 0,
                delay: 4
            }), TweenLite.to(this.logo, .3, {
                alpha: 1
            }), TweenLite.to(this.logo.scale, 1, {
                x: 1,
                y: 1,
                ease: Elastic.easeOut
            }), TweenLite.to(this.playButton.view, .2, {
                alpha: 1,
                delay: .1 + wrapDelay
            }), TweenLite.to(this.playButton.view.scale, 1, {
                x: 1,
                y: 1,
                ease: Elastic.easeOut,
                delay: .1 + wrapDelay
            }), TweenLite.to(this.sunBurstBG.view, .8, {
                alpha: 1
            }), TweenLite.to(this.sunBurstFG.view, .8, {
                alpha: 1
            }), TweenLite.to(this.sunBurstFG2.view, .8, {
                alpha: 1
            })
        }, TitleScreen.prototype.resize = function(w, h) {
            this.logo.position.set(w / 2, h / 2 - 160), this.playButton.view.position.set(w / 2, h / 2 + 105), this.sunBurstBG.view.position.set(w / 2, h / 2 - 170), this.sunBurstFG.view.position.set(w / 2, h / 2 - 170), this.sunBurstFG2.view.position.set(w / 2, h / 2 - 170)
        };
        var PlayButton = function() {
            var view = new PIXI.DisplayObjectContainer;
            PiriPiriButton.call(this, "Play.png", !1, view), this.tScale = 1.2, this.rScale = 1, this.offset = 10, this.down = !1, this.icon.scale.set(1, 1), view.mouseover = this.onMouseOver.bind(this), view.mouseout = this.onMouseOut.bind(this), this.onDown.add(this.onMouseDown, this), view.count = 0, view.ratio = 0, view.updateTransform = function() {
                PIXI.DisplayObjectContainer.prototype.updateTransform.call(this), this.count += 1, this.ratio > 0 && (this.rotation = .04 * Math.sin(.2 * this.count) * this.ratio, this.scale.x = 1 + .02 * Math.sin(.2 * this.count) * this.ratio, this.scale.y = 1 + .02 * Math.cos(.2 * this.count) * this.ratio)
            }
        };
        PlayButton.prototype = Object.create(PiriPiriButton.prototype), PlayButton.prototype.onMouseOver = function() {
            TweenLite.to(this.view, .5, {
                ratio: 1,
                ease: Elastic.easeOut
            })
        }, PlayButton.prototype.onMouseOut = function() {
            TweenLite.to(this.view, .5, {
                ratio: 0,
                ease: Elastic.easeOut
            })
        }, module.exports = TitleScreen
    }), define("com/fido/game/World", ["require", "exports", "module", "signals"], function(require, exports, module) {
        var World = (require("signals"), function() {
            this.elements = [], this.view = new PIXI.DisplayObjectContainer
        });
        World.prototype.update = function() {
            for (var i = this.elements.length - 1; i >= 0; i--) this.elements[i].update()
        }, World.prototype.add = function(element) {
            element.world || (element.world = this, this.elements.push(element), this.view.addChild(element.view))
        }, World.prototype.remove = function(element) {
            var index = this.elements.indexOf(element); - 1 !== index && (element.world = null, this.elements.splice(index, 1), this.view.removeChild(element.view))
        }, module.exports = World
    }), define("com/fido/game/GameObject", ["require", "exports", "module", "signals"], function(require, exports, module) {
        function createView(color) {
            var graphics = (new PIXI.Graphics).beginFill(color || 16711680).drawRect(-16, -16, 32, 32).endFill();
            return graphics
        }
        var GameObject = (require("signals"), function(view) {
            this.view = view || createView(), this.position = new PIXI.Point, this.speed = new PIXI.Point, this.width = 32, this.height = 32, this.world = null
        });
        GameObject.prototype.update = function() {
            this.view.x = this.position.x, this.view.y = this.position.y
        }, module.exports = GameObject
    }), define("com/fido/game/GameObjectPool", ["require", "exports", "module"], function(require, exports, module) {
        GameObjectPool = function(classType) {
            this.classType = classType, this.pool = []
        }, GameObjectPool.constructor = GameObjectPool, GameObjectPool.prototype.getObject = function() {
            var object = this.pool.pop();
            return object || (object = new this.classType), object
        }, GameObjectPool.prototype.returnObject = function(object) {
            this.pool.push(object)
        }, GameObjectPool.pools = [], GameObjectPool.idGenerator = 1, GameObjectPool.getObject = function(classType) {
            classType._CLASS_ID || (classType._CLASS_ID = GameObjectPool.idGenerator++, GameObjectPool.pools[classType._CLASS_ID] = new GameObjectPool(classType));
            var object = GameObjectPool.pools[classType._CLASS_ID].getObject();
            return object._CLASS_ID = classType._CLASS_ID, object
        }, GameObjectPool.returnObject = function(object) {
            GameObjectPool.pools[object._CLASS_ID].returnObject(object)
        }, module.exports = GameObjectPool
    }), define("com/PiriPiriBlast/hud/DetailText", ["require", "exports", "module", "PIXI", "../../fido/game/GameObjectPool", "Signals"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            Signal = (require("../../fido/game/GameObjectPool"), require("Signals")),
            DetailText = function() {
                PIXI.Text.call(this, "YAY", {
                    font: "26px chunkfiveroman",
                    fill: "#eaff32",
                    dropShadow: !0
                }), this.anchor.set(.5), this.count = 0, this.multiplierColors = ["#eaff32", "#ffd300", "#ff70df", "#00ebff"], this.onFinish = new Signal
            };
        DetailText.prototype = Object.create(PIXI.Text.prototype), DetailText.prototype.setup = function(x, y, score, multiplier) {
            this.x = x, this.y = y, this.speed = 5, this.alpha = 1, this.count = 0, this.scale.x = this.scale.y = 0, TweenLite.to(this.scale, .5, {
                x: 1 + .2 * (multiplier - 1),
                y: 1 + .2 * (multiplier - 1),
                ease: Elastic.easeOut
            }), this.style.fill = this.multiplierColors[(multiplier - 1) % 4], this.setText(score + (multiplier > 1 ? "x" + multiplier : ""))
        }, DetailText.prototype.updateTransform = function() {
            PIXI.Text.prototype.updateTransform.call(this), this.speed *= .95, this.position.y -= this.speed, this.count++, this.count > 20 && (this.alpha *= .95), this.alpha < .3 && this.onFinish.dispatch(this)
        }, module.exports = DetailText
    }), define("com/PiriPiriBlast/hud/SpiceExplode", ["require", "exports", "module", "PIXI", "Signals"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            Signal = require("Signals"),
            SpiceExplode = function() {
                PIXI.DisplayObjectContainer.call(this), this.disc = PIXI.Sprite.fromFrame("Swirl.png"), this.addChild(this.disc), this.disc.blendMode = PIXI.blendModes.ADD, this.disc.anchor.set(.5), this.disc.toRotate = Math.random() > .5 ? 1 : 0, this.disc.speed = new PIXI.Point, this.disc.speed.x = 2 + 10 * Math.random(), this.disc.speed.y = 2 + 10 * Math.random(), this.particles = [], this.startPoint = new PIXI.Point, this.total = 3, this.targetPoint = new PIXI.Point, this.scale.set(.5), this.ratio = 0, this.onComplete = new Signal
            };
        SpiceExplode.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), SpiceExplode.prototype.goBoom = function() {
            for (var i = 0; i < this.total; i++) {
                var sprite = PIXI.Sprite.fromFrame("spiceExplosionParticle.png");
                sprite.speed = new PIXI.Point, sprite.pos = new PIXI.Point, sprite.anchor.set(.5), sprite.scale.set(3), this.addChild(sprite), this.particles.push(sprite)
            }
            this.life = .6, this.ratio = 0;
            for (var i = 0; i < this.total; i++) {
                var dir = 2 * Math.PI / this.total * i,
                    speed = 3 + 20 * Math.random(),
                    sprite = this.particles[i];
                sprite.pos = new PIXI.Point, sprite.speed.x = Math.sin(dir) * speed, sprite.speed.y = Math.cos(dir) * speed, sprite.scale.set(10 + Math.random()), sprite.visible = !0, sprite.blendMode = PIXI.blendModes.ADD, sprite.position.x = 0, sprite.position.y = 0, sprite.alpha = 1
            }
            this.disc.scale.set(1), this.disc.alpha = 1, this.disc.scale.x = this.disc.scale.y = .2, TweenLite.to(this.disc.scale, .7, {
                x: 1.3 * 1.5,
                y: 1.3 * 1.5,
                ease: Sine.easeOut
            }), TweenLite.to(this.disc, .1665, {
                alpha: 0,
                ease: Sine.easeOut,
                delay: .33333
            })
        }, SpiceExplode.prototype.update = function() {
            this.life -= .03, this.life < 0 && this.onComplete.dispatch(this);
            for (var i = 0; i < this.total; i++) {
                var sprite = this.particles[i];
                sprite.position.x += sprite.speed.x, sprite.position.y += sprite.speed.y, sprite.scale.x *= .98, sprite.scale.y *= .98, sprite.rotation += .1, this.life < .5 && (sprite.speed.x *= .9, sprite.speed.y *= .9, sprite.alpha *= .8)
            }
            1 === this.disc.toRotate ? (this.disc.position.x += .5 * this.disc.speed.x, this.disc.position.y += .5 * this.disc.speed.y) : (this.disc.position.x -= .5 * this.disc.speed.x, this.disc.position.y -= .5 * this.disc.speed.y), this.disc.scale.x += .1, this.disc.scale.y += .1, this.disc.rotation += .1, this.disc.alpha *= .95
        }, module.exports = SpiceExplode
    }), define("com/PiriPiriBlast/hud/Gem", ["require", "exports", "module", "PIXI", "Signals", "../../fido/Ticker"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            Signal = require("Signals"),
            Ticker = require("../../fido/Ticker"),
            Gem = function() {
                PIXI.DisplayObjectContainer.call(this), this.onComplete = new Signal, this.gem = PIXI.Sprite.fromFrame("GemRed.png"), this.gem.anchor.set(.5, .55), this.addChild(this.gem), this.gemClone = PIXI.Sprite.fromFrame("GemRed.png"), this.gemClone.blendMode = PIXI.blendModes.ADD, this.gemClone.anchor.set(.5, .55), this.addChild(this.gemClone), this.gemSpeed = 10, this.count = 0
            };
        Gem.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), Gem.prototype.reset = function() {
            this.gem.scale.set(1), this.gem.rotation = 0, this.gem.alpha = 1, this.gemClone.rotation = 0, this.gemClone.alpha = 0, this.gemClone.scale.set(1), this.count = 100 * Math.random()
        }, Gem.prototype.goBoom = function() {
            this.gemSpeed = -(6 + 2 * Math.random()), Math.random() > .5 ? this.rotateRight() : this.rotateLeft(), Math.random() > .5 ? this.scaleUp() : this.scaleDown()
        }, Gem.prototype.updateTransform = function() {
            this.count += Ticker.instance.deltaTime, this.count > 120 && (this.glisten(), this.count = 0, this.count += 60 * Math.random()), this.gem.y += this.gemSpeed * Ticker.instance.deltaTime, this.gem.y >= 0 && (this.gem.y = 0, this.gemSpeed *= -.5), this.gemClone.y = this.gem.y, this.gemSpeed += .5, PIXI.DisplayObjectContainer.prototype.updateTransform.call(this)
        }, Gem.prototype.glisten = function() {
            TweenLite.to(this.gemClone, .3, {
                alpha: 1,
                onComplete: this.glistenDown.bind(this)
            })
        }, Gem.prototype.glistenDown = function() {
            TweenLite.to(this.gemClone, .3, {
                alpha: 0
            })
        }, Gem.prototype.rotateRight = function() {}, Gem.prototype.rotateLeft = function() {}, Gem.prototype.scaleDown = function() {}, Gem.prototype.scaleUp = function() {}, Gem.prototype.hide = function(x, y) {
            return
        }, Gem.prototype.update = function() {}, module.exports = Gem
    }), define("com/fido/physics/DoubleSpring", ["require", "exports", "module"], function(require, exports, module) {
        var DoubleSpring = function() {
            this.x = 0, this.ax = 0, this.dx = 0, this.tx = 0, this.y = 0, this.ay = 0, this.dy = 0, this.ty = 0, this.max = 30, this.damp = .75, this.springiness = .09, this.max = 160, this.damp = .85, this.springiness = .29
        };
        DoubleSpring.constructor = DoubleSpring, DoubleSpring.prototype.update = function() {
            this.ax = (this.tx - this.x) * this.springiness, this.dx += this.ax, this.dx *= this.damp, this.dx < -this.max ? this.dx = -this.max : this.dx > this.max && (this.dx = this.max), this.x += this.dx, this.ay = (this.ty - this.y) * this.springiness, this.dy += this.ay, this.dy *= this.damp, this.dy < -this.max ? this.dy = -this.max : this.dy > this.max && (this.dy = this.max), this.y += this.dy
        }, DoubleSpring.prototype.reset = function() {
            this.x = 0, this.ax = 0, this.dx = 0, this.tx = 0, this.y = 0, this.ay = 0, this.dy = 0, this.ty = 0
        }, module.exports = DoubleSpring
    }), define("com/PiriPiriBlast/view/Pip", ["require", "exports", "module", "PIXI", "../../fido/physics/DoubleSpring", "com/fido/Ticker", "Signals"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            DoubleSpring = require("../../fido/physics/DoubleSpring"),
            Ticker = require("com/fido/Ticker"),
            Signal = require("Signals"),
            Pip = function() {
                PIXI.DisplayObjectContainer.call(this), this.letters = [], this.spring = new DoubleSpring, this.visible = !1, this.count = 0, this.scale.x = this.scale.y = .75, this.onComplete = new Signal
            };
        Pip.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), Pip.prototype.reset = function() {
            this.exploding = !1, this.falling = !1, this.visible = !1, this.spring.x = this.spring.tx = 0, this.spring.y = this.spring.ty = 0, this.count = 0, this.ratio = 0
        }, Pip.prototype.explode = function(word) {
            this.reset(), this.exploding = !0, this.visible = !0, this.count = 0, this.setWord(word), this.ratio = 1, Ticker.instance.add(this.update, this)
        }, Pip.prototype.setWord = function(word) {
            for (var i = 0; i < this.letters.length; i++) {
                var letter = this.letters[i];
                this.removeChild(letter)
            }
            this.letters = [], word = word.toUpperCase();
            var len = word.length,
                split = word.split(""),
                size = 0;
            this.ratio = 0;
            for (var i = 0; len > i; i++) {
                var letter;
                " " != split[i] ? letter = PIXI.Sprite.fromFrame("gameover_" + split[i] + ".png") : (letter = PIXI.Sprite.fromFrame("gameover_S.png"), letter.width = 59), letter.anchor.x = .5, letter.anchor.y = .6, letter.speed = new PIXI.Point, this.addChild(letter), this.letters.push(letter), size += letter.width * (1 + .1 * i) * .8, letter.home = new PIXI.Point(0, 0), letter.tempPo = size
            }
            this.currentWidth = 0;
            for (var i = 0; len > i; i++) {
                var letter = this.letters[i],
                    angleSpread = Math.PI / 4,
                    circ = size * (2 * Math.PI / angleSpread),
                    angle = (circ / (2 * Math.PI), letter.tempPo / size * angleSpread);
                angle -= angleSpread / 2, angle -= .05, letter.home.x = this.currentWidth, letter.home.y = 0, letter.home.rotation = .5 * angle, this.currentWidth += letter.width, letter.speed.y = -10 - 10 * Math.random()
            }
            for (var i = 0; len > i; i++) {
                var letter = this.letters[i];
                letter.home.x -= this.currentWidth / 2
            }
        }, Pip.prototype.update = function() {
            if (this.falling)
                for (var i = 0; i < this.letters.length; i++) {
                    var letter = this.letters[i];
                    if (letter.position.x += letter.speed.x, letter.position.y += letter.speed.y, letter.speed.y += 1, letter.rotation += .1 * (i / this.letters.length - .5), letter.position.y > 1500) {
                        Ticker.instance.remove(this.update, this), this.onComplete.dispatch();
                        break
                    }
                } else {
                    this.exploding && (this.count++, this.count > 60 && this.fallApart()), this.spring.update(), this.spring.tx = this.ratio, this.spring.ty = this.ratio;
                    for (var i = 0; i < this.letters.length; i++) {
                        var letter = this.letters[i];
                        letter.position.x = Math.map(this.spring.x, 0, letter.home.x), letter.position.y = Math.map(this.spring.y, 0, letter.home.y) - 20, letter.scale.x = letter.scale.y = .6 + .5 * this.spring.x, letter.rotation = letter.home.rotation * this.spring.x
                    }
                }
        }, Pip.prototype.fallApart = function() {
            this.falling = !0
        }, Math.map = function(ratio, min, max) {
            return min + (max - min) * ratio
        }, module.exports = Pip
    }), define("com/PiriPiriBlast/hud/Hud", ["require", "exports", "module", "PIXI", "Signals", "./DetailText", "./SpiceExplode", "./Gem", "../../fido/game/GameObjectPool", "../../fido/buttons/Button", "../../fido/Utils", "../view/Pip", "../Constants", "./TextElement", "com/fido/sound/SoundManager"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            DetailText = (require("Signals"), require("./DetailText")),
            SpiceExplode = require("./SpiceExplode"),
            Gem = require("./Gem"),
            GameObjectPool = require("../../fido/game/GameObjectPool"),
            Utils = (require("../../fido/buttons/Button"), require("../../fido/Utils")),
            Pop = require("../view/Pip"),
            Constants = require("../Constants"),
            TextElement = require("./TextElement"),
            SoundManager = require("com/fido/sound/SoundManager"),
            Hud = function(game) {
                this.game = game, PIXI.DisplayObjectContainer.call(this);
                var format = {
                        fill: "white",
                        font: "26px chunkfiveroman",
                        dropShadow: !0
                    },
                    nudge = 70;
                this.levelLabel = new PIXI.Sprite.fromFrame("LevelHud.png"), this.levelNumber = new PIXI.Sprite.fromFrame("10.png"), this.levelNumber.x = 50, this.levelNumber.anchor.set(1, .5), this.levelLabel.anchor.set(1, .5), this.levelLabel.position.x = 310 + nudge, this.levelLabel.position.y = 67, this.addChild(this.levelLabel), this.levelLabel.addChild(this.levelNumber), this.lives = new PIXI.Text("x 3", format), this.lives.position.y = 520, this.lives.position.x = -22 + nudge, this.hudBomb = new PIXI.Sprite.fromFrame("HudBarrel.png"), this.hudBomb.anchor.set(.5), this.hudBomb.position.x = 422 + nudge, this.hudBomb.position.y = 56, this.addChild(this.hudBomb), this.bombs = new TextElement(0), this.bombs.position.y = 66, this.bombs.position.x = 466 + nudge, this.addChild(this.bombs), this.score = new PIXI.Text("SCORE : 0000", format), this.score.anchor.x = 1, this.score.position.y = 520, this.score.position.x = 960 + nudge, this.hudGem = new PIXI.Sprite.fromFrame("HudGem.png"), this.hudGem.anchor.set(.5), this.hudGem.position.x = 610 + nudge, this.hudGem.position.y = 56, this.addChild(this.hudGem), this.gems = new TextElement(0), this.gems.position.y = 66, this.gems.position.x = 657 + nudge, this.addChild(this.gems), this.detailPool = new GameObjectPool(DetailText), this.spiceExplode = new GameObjectPool(SpiceExplode), this.gemPool = new GameObjectPool(Gem), this.activeSpiceExplodes = [], this.activeGems = {}, this.gameoverText = new Pop, this.gameoverText.onComplete.add(this.onGameoverComplete, this), this.levelCompleteText = new Pop, this.levelCompleteText.onComplete.add(this.onLevelComplete, this), this.startArrow = PIXI.Sprite.fromFrame("Start.png"), this.startArrow.anchor.set(.5), this.endArrow = PIXI.Sprite.fromFrame("Finish.png"), this.endArrow.anchor.set(.5), this.addChild(this.startArrow), this.addChild(this.endArrow)
            };
        Hud.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), Hud.prototype.onPausePressed = function() {
            this.game.reset()
        }, Hud.prototype.reset = function() {
            this.bombs.setText("x " + this.game.bombs), this.gems.setText(this.game.gems + "/" + this.game.gemsToGet);
            for (var i = this.activeSpiceExplodes.length; i--;) {
                var spiceExplosion = this.activeSpiceExplodes[i];
                this.removeChild(spiceExplosion), this.spiceExplode.returnObject(spiceExplosion), this.activeSpiceExplodes.splice(i, 1)
            }
            for (var key in this.activeGems) {
                var gem = this.activeGems[key];
                this.removeChild(gem), this.gemPool.returnObject(gem), delete this.activeGems[key]
            }
            this.levelNumber.setTexture(PIXI.Texture.fromFrame(this.game.level.name + ".png"))
        }, Hud.prototype.updateBombs = function() {
            var readout = this.game.bombs < 10 ? "0" + this.game.bombs : this.game.bombs;
            this.bombs.setText("x" + readout)
        }, Hud.prototype.updateGems = function() {
            this.gems.setText(this.game.gems + "/" + this.game.gemsToGet)
        }, Hud.prototype.updateScore = function(score, target) {
            var detailText = this.detailPool.getObject();
            this.score.setText("SCORE : " + Utils.formatScore(this.game.score)), detailText.setup(target.position.x, target.position.y - 80, score, target.multiplyer), this.addChild(detailText), detailText.visible = !0, detailText.onFinish.addOnce(this.onDetailFinish, this)
        }, Hud.prototype.onDetailFinish = function(detailText) {
            detailText.visible = !1, this.detailPool.returnObject(detailText)
        }, Hud.prototype.update = function() {
            for (var i = this.activeSpiceExplodes.length; i--;) this.activeSpiceExplodes[i].update();
            for (i = this.activeGems.length; i--;) this.activeGems[i].update()
        }, Hud.prototype.showGem = function(x, y) {
            SoundManager.sfx.play("gemDrop");
            var gem = this.gemPool.getObject();
            gem.reset(), gem.onComplete.addOnce(this.gemFinish, this), gem.x = x + Constants.OFFSETS.x, gem.y = y + Constants.OFFSETS.y, this.activeGems[x + "-" + y] = gem, this.addChild(gem), this.game.addGem(), gem.goBoom()
        }, Hud.prototype.clearGem = function(x, y) {
            this.activeGems[x + "-" + y].hide(x, y)
        }, Hud.prototype.gemFinish = function(gem, x, y) {
            this.removeChild(gem), this.gemPool.returnObject(gem), delete this.activeGems[x + "-" + y]
        }, Hud.prototype.showSpiceExplode = function(x, y) {
            var spiceExplode = this.spiceExplode.getObject();
            spiceExplode.onComplete.addOnce(this.onSpiceExplodeFinish, this), this.activeSpiceExplodes.push(spiceExplode), this.addChild(spiceExplode), spiceExplode.disc.depthOffset = -1e3, this.game.world.view.addChild(spiceExplode.disc), spiceExplode.disc.position = spiceExplode.position, spiceExplode.x = x, spiceExplode.y = y, spiceExplode.goBoom()
        }, Hud.prototype.onSpiceExplodeFinish = function(spiceExplosion) {
            this.removeChild(spiceExplosion), this.spiceExplode.returnObject(spiceExplosion), this.activeSpiceExplodes.splice(this.activeSpiceExplodes.indexOf(spiceExplosion), 1)
        }, Hud.prototype.showLevelComplete = function() {
            this.game.onLevelComplete()
        }, Hud.prototype.showGameover = function() {
            this.game.onGameover.dispatch()
        }, Hud.prototype.onGameoverComplete = function() {
            this.game.onGameover.dispatch()
        }, Hud.prototype.onLevelComplete = function() {
            this.game.onLevelComplete()
        }, Hud.prototype.showStartAndFinish = function() {
            this.game.gridWorld.startCell, this.startArrow.x = this.game.gridWorld.startCell.view.x + 25, this.startArrow.y = this.game.gridWorld.startCell.view.y + 45 + 120 + 23, this.endArrow.x = this.game.gridWorld.endCell.view.x + 28, this.endArrow.y = this.game.gridWorld.endCell.view.y - 16, this.startArrow.alpha = 1, this.endArrow.alpha = 1;
            var bigDelay = 1;
            this.startArrow.scale.set(0), TweenLite.to(this.startArrow.scale, 1, {
                x: 1,
                y: 1,
                ease: Elastic.easeOut,
                delay: bigDelay
            }), TweenLite.to(this.startArrow.scale, .3, {
                x: 0,
                y: 0,
                ease: Back.easeIn,
                delay: bigDelay + 2,
                overwrite: 0
            }), TweenLite.to(this.startArrow, .3, {
                alpha: 0,
                delay: bigDelay + 4,
                overwrite: 0
            }), this.endArrow.scale.set(0), TweenLite.to(this.endArrow.scale, 1, {
                x: 1,
                y: 1,
                ease: Elastic.easeOut,
                delay: bigDelay + 1
            }), TweenLite.to(this.endArrow.scale, .3, {
                x: 0,
                y: 0,
                ease: Back.easeIn,
                delay: bigDelay + 3,
                overwrite: 0
            }), TweenLite.to(this.endArrow, .3, {
                alpha: 0,
                delay: bigDelay + 5,
                overwrite: 0
            })
        }, Hud.prototype.resize = function(w, h) {
            this.score.position.y = h - 90, this.score.position.x = 512 + w / 2 - 32 - 10, this.gameoverText.x = w / 2 + 32 + 10, this.gameoverText.y = h / 2
        }, module.exports = Hud
    }), define("com/PiriPiriBlast/control/PointAndClickController", ["require", "exports", "module"], function(require, exports, module) {
        var PointAndClickController = function(game) {
            this.game = game, this.grid = this.game.gridWorld, this.view = this.game.view, this.view.interactive = !0, this.view.buttonMode = !0, this.view.mousedown = this.view.touchstart = this.onDown.bind(this)
        };
        PointAndClickController.prototype.disable = function() {
            this.view.interactive = !1
        }, PointAndClickController.prototype.enable = function() {
            this.view.interactive = !0
        }, PointAndClickController.prototype.onDown = function(e) {
            var local = e.getLocalPosition(this.game.gridWorld.view),
                targetCell = this.grid.getCell(local.x, local.y);
            targetCell && (!targetCell.item || 0 === targetCell.item.id) && this.game.bombs > 0 && this.game.bombManager.add(local.x, local.y)
        }, module.exports = PointAndClickController
    }), define("com/PiriPiriBlast/PiriPiriGameObject", ["require", "exports", "module", "../fido/game/GameObject", "Signals"], function(require, exports, module) {
        var GameObject = require("../fido/game/GameObject"),
            Signal = require("Signals"),
            PiriPiriObject = function(view, game) {
                GameObject.call(this, view), this.game = game, this.stopsExplosion = !0, this.isDestroyable = !0, this.onHit = new Signal, this.life = 1, this.hasGem = !1, this.showBlast = !0, this.isDead = !1
            };
        PiriPiriObject.prototype = Object.create(GameObject.prototype), PiriPiriObject.prototype.onReact = function() {
            this.onHit.dispatch(this)
        }, PiriPiriObject.prototype.onDestroy = function() {}, PiriPiriObject.prototype.setPosition = function(x, y) {
            this.position.x = x, this.position.y = y, this.view.position.x = x, this.view.position.y = y
        }, module.exports = PiriPiriObject
    }), define("com/PiriPiriBlast/blocks/Bomb", ["require", "exports", "module", "PIXI", "signals", "../Constants", "../../fido/Ticker", "../PiriPiriGameObject", "com/fido/sound/SoundManager"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            Signal = require("signals"),
            Constants = require("../Constants"),
            Ticker = require("../../fido/Ticker"),
            PiriPiriGameObject = require("../PiriPiriGameObject"),
            SoundManager = require("com/fido/sound/SoundManager"),
            Bomb = function(view) {
                if (!view) {
                    var view = new PIXI.DisplayObjectContainer,
                        sprite = new PIXI.Sprite.fromFrame("Barrel.png");
                    sprite.anchor.set(.5, .5), view.addChild(sprite)
                }
                PiriPiriGameObject.call(this, view), this.explosionSound = "explodeBarrel", this.ident = "Barrel", this.id = 4, this.onExplode = new Signal, this.countdown = 60, this.countdownTimer = 0, this.explosionSize = Constants.BOMB_BLAST_RADIUS, this.isActive = !1, this.ratio = 0, this.ended = !1
            };
        Bomb.prototype = Object.create(PiriPiriGameObject.prototype), Bomb.prototype.explode = function() {
            SoundManager.sfx.playGroup(this.explosionSound), this.onExplode.dispatch(this)
        }, Bomb.prototype.update = function() {
            if (!this.ended) {
                var that = this;
                if (this.countdownTimer -= Ticker.instance.deltaTime, this.ratio += .01, this.ratio > 2 && (this.ratio = 2), this.view.pivot.x = 2 * Math.sin(this.countdownTimer) * this.ratio, this.countdownTimer <= 0) {
                    this.ended = !0;
                    var clone = new PIXI.Sprite.fromFrame("Barrel.png");
                    clone.anchor.set(0, 0), clone.position.x = .5 * -clone.width, clone.position.y = .5 * -clone.height, clone.blendMode = PIXI.blendModes.ADD, clone.alpha = 0, this.view.addChild(clone);
                    var flashLight = new PIXI.Sprite.fromFrame("Light.png");
                    flashLight.alpha = 0, flashLight.scale.set(.2, .2), flashLight.anchor.set(.5, .5), flashLight.blendMode = PIXI.blendModes.ADD, flashLight.position.x = 0, flashLight.position.y = 0, this.view.addChildAt(flashLight, 0), TweenLite.to(flashLight, .2, {
                        alpha: 1
                    }), TweenLite.to(flashLight.scale, .2, {
                        x: 2,
                        y: 2
                    }), TweenLite.to(clone, .2, {
                        alpha: .8,
                        onComplete: function() {
                            that.explode(), that.countdownTimer = that.countdown, that.view.removeChild(clone), that.view.removeChild(flashLight)
                        }
                    }), this.ended = !0
                }
            }
        }, Bomb.prototype.reset = function() {
            this.countdownTimer = this.countdown, this.view.scale.set(0), this.isActive = !0, this.ended = !1, this.ratio = 0
        }, Bomb.prototype.show = function() {
            TweenLite.to(this.view.scale, .3, {
                x: 1,
                y: 1,
                ease: Elastic.easeOut
            })
        }, Bomb.prototype.onReact = function() {
            this.onExplode.dispatch(this), this.onHit.dispatch(this)
        }, module.exports = Bomb
    }), define("com/PiriPiriBlast/BombManager", ["require", "exports", "module", "PIXI", "./blocks/Bomb", "../fido/game/GameObjectPool", "./Constants", "com/fido/sound/SoundManager"], function(require, exports, module) {
        var CellBomb = (require("PIXI"), require("./blocks/Bomb")),
            GameObjectPool = require("../fido/game/GameObjectPool"),
            Constants = require("./Constants"),
            SoundManager = require("com/fido/sound/SoundManager"),
            BombManager = function(game) {
                this.game = game, this.bombPool = new GameObjectPool(CellBomb), this.bombs = [], this.barrels = [], 0 === this.bombCount
            };
        BombManager.prototype.add = function(x, y) {
            SoundManager.sfx.play("placeBarrel");
            var bomb = this.bombPool.getObject();
            bomb.reset(), this.game.gridWorld.setCellFromPoint(bomb, x, y), bomb.onExplode.addOnce(this.onExplode, this), this.bombs.push(bomb), bomb.show(), this.bombCount++, this.game.takeBomb()
        }, BombManager.prototype.reset = function() {
            this.clearBombs()
        }, BombManager.prototype.clearBombs = function() {
            for (var i = this.bombs.length; i--;) {
                var bomb = this.bombs[i];
                bomb.onExplode.removeAll(), bomb.id === Constants.BLOCKS.BARREL || (this.game.gridWorld.removeObject(bomb), this.bombPool.returnObject(bomb))
            }
            this.bombs = [], this.bombCount = 0
        }, BombManager.prototype.addBarrel = function(barrel, x, y) {
            this.game.gridWorld.setCell(barrel, x, y), barrel.onExplode.addOnce(this.onExplodeBarrel, this), this.bombs.push(barrel)
        }, BombManager.prototype.update = function() {
            for (var i = this.bombs.length; i--;) this.bombs[i].update()
        }, BombManager.prototype.isActive = function() {
            for (var i = this.bombs.length; i--;)
                if (this.bombs[i].isActive === !0) return !0;
            return !1
        }, BombManager.prototype.onExplode = function(bomb) {
            null !== bomb.cell && (TweenLite.to(bomb.view.scale, .2, {
                x: 2,
                y: 2,
                ease: Elastic.easeOut
            }), this.game.explosionManager.add(bomb), this.game.gridWorld.removeObject(bomb), this.bombs.splice(this.bombs.indexOf(bomb), 1), this.bombPool.returnObject(bomb), this.bombCount--)
        }, BombManager.prototype.onExplodeBarrel = function(barrel) {
            this.game.explosionManager.add(barrel), this.game.gridWorld.removeObject(barrel), this.bombs.splice(this.bombs.indexOf(barrel), 1)
        }, module.exports = BombManager
    }), define("com/PiriPiriBlast/explosions/BombExplosion", ["require", "exports", "module", "Signals", "../../fido/Ticker", "../PiriPiriGameObject"], function(require, exports, module) {
        var Signal = require("Signals"),
            Ticker = require("../../fido/Ticker"),
            PiriPiriGameObject = require("../PiriPiriGameObject"),
            BombExplosion = function() {
                var view = new PIXI.DisplayObjectContainer;
                PiriPiriGameObject.call(this, view), this.strength = 0, this.explosionLevel = 0, this.gridWorld, this.explosionManager = !1, this.bomb = !1, this.left = !1, this.right = !1, this.up = !1, this.down = !1, this.countdown = 2, this.countdownTimer = this.countdown, this.onComplete = new Signal
            };
        BombExplosion.prototype = Object.create(PiriPiriGameObject.prototype), BombExplosion.prototype.update = function() {
            if (this.countdownTimer -= Ticker.instance.deltaTime, this.countdownTimer <= 0)
                if (this.countdownTimer = this.countdown, this.explosionLevel++, this.explosionLevel <= this.strength)
                    for (var toProcess = ["up", "down", "left", "right"], nToProcess = toProcess.length; nToProcess--;) {
                        var sDirection = toProcess[nToProcess];
                        if (null !== this[sDirection] && "undefined" != typeof this[sDirection]) {
                            var source = this[sDirection],
                                item = this[sDirection].item,
                                hasExploded = !1;
                            item && item.isDead === !1 ? (item.isDestroyable && item.showBlast === !0 && (this.explosionManager.addFragment(source, this.bomb), item.onDestroy(), hasExploded = !0), item.stopsExplosion ? (this[sDirection] = null, hasExploded === !1 && item.onReact()) : (hasExploded === !1 && item.showBlast === !0 && (this.explosionManager.addFragment(source, this.bomb), item.onReact()), this[sDirection] = this[sDirection][sDirection])) : (this.explosionManager.addFragment(source, this.bomb), this[sDirection] = this[sDirection][sDirection])
                        }
                    } else this.onComplete.dispatch(this);
            null === this.up && null === this.down && null === this.left && null === this.right && this.onComplete.dispatch(this)
        }, BombExplosion.prototype.complete = function() {
            this.onComplete.dispatch(this), this.countdownTimer = this.countdown
        }, BombExplosion.prototype.reset = function(gridWorld, bomb, explosionManager) {
            this.gridWorld = gridWorld, this.startCell = bomb.cell, this.strength = bomb.explosionSize, this.explosionLevel = 0, this.bomb = bomb, this.explosionManager = explosionManager
        }, BombExplosion.prototype.start = function() {
            var cell = this.startCell;
            this.up = cell.up, this.down = cell.down, this.left = cell.left, this.right = cell.right, this.explosionManager.addFragment(cell)
        }, module.exports = BombExplosion
    }), define("com/PiriPiriBlast/explosions/ExplosionManager", ["require", "exports", "module", "PIXI", "Signals", "../blocks/Bomb", "../Constants", "../../fido/game/GameObjectPool", "./BombExplosion"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            Signal = require("Signals"),
            Constants = (require("../blocks/Bomb"), require("../Constants")),
            GameObjectPool = require("../../fido/game/GameObjectPool"),
            BombExplosion = require("./BombExplosion"),
            ExplosionManager = function(game) {
                this.game = game, this.explosionPool = new GameObjectPool(BombExplosion), this.explosions = [], this.fragmentPool = new GameObjectPool(Fragment), this.fragments = [], this.onAllComplete = new Signal, this.tweenHolder = {
                    foo: 0
                }
            };
        ExplosionManager.prototype.add = function(bomb) {
            var explosion = this.explosionPool.getObject();
            explosion.reset(this.game.gridWorld, bomb, this), explosion.onComplete.addOnce(this.onExplosionFinish, this), this.explosions.push(explosion), explosion.start(), bomb.cell.hasGem && this.game.hud.showGem(bomb.cell.centerX, bomb.cell.centerY)
        }, ExplosionManager.prototype.reset = function() {
            for (var i = this.explosions.length; i--;) this.explosionPool.returnObject(this.explosions[i]);
            this.explosions = [];
            for (var i = this.fragments.length; i--;) this.game.explosionLayer.removeChild(this.fragments[i]), this.fragmentPool.returnObject();
            this.fragments = []
        }, ExplosionManager.prototype.update = function() {
            for (var i = this.explosions.length; i--;) this.explosions[i].update();
            for (var i = this.fragments.length; i--;) this.fragments[i].update(), this.fragments[i].isDead && (this.game.explosionLayer.removeChild(this.fragments[i]), this.fragments.splice(i, 1), this.checkComplete())
        }, ExplosionManager.prototype.checkComplete = function() {
            for (var i = 0; i < this.game.bombManager.bombs.length; i++)
                if (this.game.bombManager.bombs[i].isActive === !0) return;
            0 === this.fragments.length && 0 === this.explosions.length && 0 === this.game.bombManager.bombCount && 0 === this.game.hud.activeSpiceExplodes.length && this.onAllComplete.dispatch()
        }, ExplosionManager.prototype.addFragment = function(cell, bomb) {
            this.game.effectsManager.do("shake", {
                intensity: .01,
                duration: 6,
                direction: Constants.AXIS.BOTH
            }), this.game.hud.showSpiceExplode(cell.centerX + Constants.OFFSETS.x, cell.centerY + Constants.OFFSETS.y);
            var ident;
            ident = "undefined" == typeof bomb ? cell.item.ident || "A" : bomb.ident;
            var fragment = this.fragmentPool.getObject();
            fragment.reset(ident), fragment.position.x = cell.centerX + Constants.OFFSETS.x, fragment.position.y = cell.centerY + Constants.OFFSETS.y, this.game.explosionLayer.addChild(fragment), this.fragments.push(fragment)
        }, ExplosionManager.prototype.onExplosionFinish = function(explosion) {
            this.explosionPool.returnObject(explosion), this.explosions.splice(this.explosions.indexOf(explosion), 1)
        };
        var Fragment = function() {
            view = new PIXI.Texture.fromFrame("ExplosionA.png"), PIXI.Sprite.call(this, view), this.anchor.set(.5), this.isDead = !1, this.rotationRatio = Math.random() < .5 ? -.05 : .05
        };
        Fragment.prototype = Object.create(PIXI.Sprite.prototype), Fragment.prototype.reset = function(ident) {
            this.scale.x = this.scale.y = .4, this.alpha = 1, this.isDead = !1, this.ident = ident || "B", this.setTexture(PIXI.Texture.fromFrame("Explosion" + this.ident + ".png"))
        }, Fragment.prototype.update = function() {
            this.rotation += this.rotationRatio, this.scale.x > 3 && this.alpha < .1 ? this.isDead = !0 : this.scale.x > 1 ? (this.alpha *= .85, this.scale.x += .05, this.scale.y += .05) : (this.scale.x += .2, this.scale.y += .2, this.alpha *= .99)
        }, module.exports = ExplosionManager
    }), define("com/PiriPiriBlast/effects/Shake", ["require", "exports", "module", "Signals", "PIXI", "../Constants", "../../fido/Ticker"], function(require, exports, module) {
        var Signal = require("Signals"),
            Constants = (require("PIXI"), require("../Constants")),
            Ticker = require("../../fido/Ticker"),
            Shake = function() {
                this.onComplete = new Signal, this.done = !1, this.offset = {
                    x: 0,
                    y: 0
                }
            };
        Shake.prototype.start = function(parameters) {
            this.intensity = parameters.intensity || .01, this.duration = parameters.duration || 1e3, this.direction = parameters.direction || Constants.AXIS.BOTH, this.offset.x = this.offset.y = 0, this.camera = parameters.camera
        }, Shake.prototype.addDuration = function(duration) {
            this.duration < duration && (this.duration += duration - this.duration)
        }, Shake.prototype.end = function() {
            this.done = !0, this.camera.pivot.x = 0, this.camera.pivot.y = 0, this.onComplete.dispatch(this, "shake")
        }, Shake.prototype.update = function() {
            this.done || (this.duration -= Ticker.instance.deltaTime, this.offset.x = -this.offset.x, this.offset.y = -this.offset.y, this.camera.pivot.x = this.offset.x, this.camera.pivot.y = this.offset.y, this.duration <= 0 ? this.end() : (this.gameWidth = 1366, this.gameHeight = 640, this.direction && Constants.AXIS.HORIZONTAL && (this.offset.x = Math.round(Math.random() * this.intensity * this.gameWidth * 2 - this.intensity * this.gameWidth)), this.direction && Constants.AXIS.VERTICAL && (this.offset.y = Math.round(Math.random() * this.intensity * this.gameHeight * 2 - this.intensity * this.gameHeight)), this.camera.pivot.x = this.offset.x, this.camera.pivot.y = this.offset.y))
        }, Shake.prototype.reset = function() {
            this.duration = 0, this.offset.x = 0, this.offset.y = 0
        }, module.exports = Shake
    }), define("com/PiriPiriBlast/effects/EffectsManager", ["require", "exports", "module", "PIXI", "../../fido/game/GameObjectPool", "./Shake", "./SunBurst"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            GameObjectPool = require("../../fido/game/GameObjectPool"),
            Shake = require("./Shake"),
            SunBurst = require("./SunBurst"),
            EffectsManager = function(game) {
                this.game = game, this.view = new PIXI.DisplayObjectContainer, this.effects = [], this.camera = this.game.view, this.cameraOriginalPosition = this.camera.position, this.fxPool = {
                    shake: {
                        runOnce: !0,
                        name: "shake",
                        pool: new GameObjectPool(Shake)
                    },
                    sunburst: {
                        runOnce: !1,
                        name: "sunburst",
                        pool: new GameObjectPool(SunBurst)
                    }
                }
            };
        EffectsManager.prototype.do = function(event, parameters) {
            var effectObject = this.fxPool[event],
                index = this._isEffectRunning(event);
            if (parameters.camera = this.camera, effectObject.runOnce === !0 && index !== !1) this.effects[index].addDuration(parameters.duration);
            else {
                var effect = this.fxPool[event].pool.getObject();
                effect.reset(this.cameraOriginalPosition), effect.start(parameters), effect.onComplete.add(this.onEffectComplete, this, event), effect.hasOwnProperty("view") && (this.view.addChild(effect.view), effect.view.position.x = 50, effect.view.position.y = -180, effect.view.scale.set(5), effect.view.alpha = .3, effect.sprite.blendMode = PIXI.blendModes.ADD), this.effects.push(effect)
            }
        }, EffectsManager.prototype._isEffectRunning = function(type) {
            for (var i = this.effects.length; i--;)
                if (typeof this.effects[i].name === type) return i;
            return !1
        }, EffectsManager.prototype.onEffectComplete = function(effect, event) {
            this.effects.splice(this.effects.indexOf(effect), 1), this.fxPool[event].pool.returnObject()
        }, EffectsManager.prototype.reset = function() {
            for (var i = this.effects.length; i--;) this.effects.splice(i, 1), this.fxPool.shake.pool.returnObject()
        }, EffectsManager.prototype.update = function() {
            for (var i = this.effects.length; i--;) this.effects[i].update()
        }, module.exports = EffectsManager
    }), define("com/fido/game/gridworld/GridCell", ["require", "exports", "module"], function(require, exports, module) {
        var GridCell = function(world) {
            this.id = 0, this.owner, this.world = world, this.up, this.down, this.left, this.right, this.neighbors, this.x, this.y, this.centerX, this.centerY, this.realX, this.realY, this.nextCell, this.f = 0, this.g = 0, this.h = 0, this.cost = .1, this.visited = !1, this.closed = !1, this.parent = null, this.aStarBlocker = !1
        };
        module.exports = GridCell
    }), define("com/fido/game/gridworld/astar/graph", ["require", "exports", "module"], function(require, exports, module) {
        function Graph(grid) {
            for (var nodes = [], x = 0; x < grid.length; x++) {
                nodes[x] = [];
                for (var y = 0, row = grid[x]; y < row.length; y++) nodes[x][y] = new GraphNode(x, y, row[y])
            }
            this.input = grid, this.nodes = nodes
        }

        function GraphNode(x, y, type) {
            this.data = {}, this.x = x, this.y = y, this.pos = {
                x: x,
                y: y
            }, this.type = type
        }

        function BinaryHeap(scoreFunction) {
            this.content = [], this.scoreFunction = scoreFunction
        }
        var GraphNodeType = {
            OPEN: 1,
            WALL: 0
        };
        Graph.prototype.toString = function() {
            for (var rowDebug, row, y, l, graphString = "\n", nodes = this.nodes, x = 0, len = nodes.length; len > x; x++) {
                for (rowDebug = "", row = nodes[x], y = 0, l = row.length; l > y; y++) rowDebug += row[y].type + " ";
                graphString = graphString + rowDebug + "\n"
            }
            return graphString
        }, GraphNode.prototype.toString = function() {
            return "[" + this.x + " " + this.y + "]"
        }, GraphNode.prototype.isWall = function() {
            return this.type == GraphNodeType.WALL
        }, BinaryHeap.prototype = {
            push: function(element) {
                this.content.push(element), this.sinkDown(this.content.length - 1)
            },
            pop: function() {
                var result = this.content[0],
                    end = this.content.pop();
                return this.content.length > 0 && (this.content[0] = end, this.bubbleUp(0)), result
            },
            remove: function(node) {
                var i = this.content.indexOf(node),
                    end = this.content.pop();
                i !== this.content.length - 1 && (this.content[i] = end, this.scoreFunction(end) < this.scoreFunction(node) ? this.sinkDown(i) : this.bubbleUp(i))
            },
            size: function() {
                return this.content.length
            },
            rescoreElement: function(node) {
                this.sinkDown(this.content.indexOf(node))
            },
            sinkDown: function(n) {
                for (var element = this.content[n]; n > 0;) {
                    var parentN = (n + 1 >> 1) - 1,
                        parent = this.content[parentN];
                    if (!(this.scoreFunction(element) < this.scoreFunction(parent))) break;
                    this.content[parentN] = element, this.content[n] = parent, n = parentN
                }
            },
            bubbleUp: function(n) {
                for (var length = this.content.length, element = this.content[n], elemScore = this.scoreFunction(element);;) {
                    var child2N = n + 1 << 1,
                        child1N = child2N - 1,
                        swap = null;
                    if (length > child1N) {
                        var child1 = this.content[child1N],
                            child1Score = this.scoreFunction(child1);
                        elemScore > child1Score && (swap = child1N)
                    }
                    if (length > child2N) {
                        var child2 = this.content[child2N],
                            child2Score = this.scoreFunction(child2);
                        (null === swap ? elemScore : child1Score) > child2Score && (swap = child2N)
                    }
                    if (null === swap) break;
                    this.content[n] = this.content[swap], this.content[swap] = element, n = swap
                }
            }
        }, module.exports = BinaryHeap
    }), define("com/fido/game/gridworld/astar/astar", ["require", "exports", "module", "./graph"], function(require, exports, module) {
        var BinaryHeap = require("./graph"),
            AStar = function() {};
        AStar.prototype.resetGrid = function(grid) {
            for (i = 0; i < grid.totalCells; i++) {
                var cell = grid.cells[i];
                cell.f = 0, cell.g = 0, cell.h = 0, cell.cost = cell.id, cell.visited = !1, cell.closed = !1, cell.parent = null
            }
        }, AStar.prototype.search = function(grid, start, end, heuristic) {
            this.resetGrid(grid), heuristic = heuristic || this.manhattan;
            var openHeap = this.heap();
            for (openHeap.push(start); openHeap.size() > 0;) {
                var currentNode = openHeap.pop();
                if (currentNode === end) {
                    for (var curr = currentNode, ret = []; curr.parent;) ret.push(curr), curr = curr.parent;
                    return ret.reverse()
                }
                currentNode.closed = !0;
                for (var neighbors = currentNode.neighbors, i = 0, il = neighbors.length; il > i; i++) {
                    var neighbor = neighbors[i];
                    if (!neighbor.closed && neighbor.aStarBlocker !== !0) {
                        var gScore = currentNode.g + neighbor.cost,
                            beenVisited = neighbor.visited;
                        (!beenVisited || gScore < neighbor.g) && (neighbor.visited = !0, neighbor.parent = currentNode, neighbor.h = neighbor.h || heuristic(neighbor, end), neighbor.g = gScore, neighbor.f = neighbor.g + neighbor.h, beenVisited ? openHeap.rescoreElement(neighbor) : openHeap.push(neighbor))
                    }
                }
            }
            return []
        }, AStar.prototype.heap = function() {
            return new BinaryHeap(function(node) {
                return node.f
            })
        }, AStar.prototype.manhattan = function(pos0, pos1) {
            var d1 = Math.abs(pos1.x - pos0.x),
                d2 = Math.abs(pos1.y - pos0.y);
            return d1 + d2
        }, module.exports = AStar
    }), define("com/fido/game/gridworld/GridWorld", ["require", "exports", "module", "./GridCell", "./astar/astar"], function(require, exports, module) {
        var GridCell = require("./GridCell"),
            AStar = require("./astar/astar"),
            GridWorld = function() {
                this.cells = [], this.cellSize = 80, this.cellWidth, this.cellHeight, this.totalCells, this.view = new PIXI.DisplayObjectContainer, this.astar = new AStar(this)
            };
        GridWorld.prototype.build = function(map) {
            if (this.cellWidth = 12, this.cellHeight = 6, this.totalCells = this.cellWidth * this.cellHeight, map = map || new Array(this.totalCells), map.length === this.totalCells) {
                this.cells = [];
                for (var i = 0; i < this.totalCells; i++) this.cells[i] = new GridCell;
                for (i = 0; i < this.totalCells; i++) {
                    var cell = this.cells[i],
                        x = i % this.cellWidth,
                        y = i / this.cellWidth | 0;
                    cell.x = x, cell.y = y, cell.realX = x * this.cellSize, cell.realY = y * this.cellSize, cell.centerX = cell.realX + this.cellSize / 2, cell.centerY = cell.realY + this.cellSize / 2, cell.id = map[i], cell.owner = this, cell.neighbors = [], 0 != x && (cell.left = this.cells[i - 1], cell.neighbors.push(cell.left)), x != this.cellWidth - 1 && (cell.right = this.cells[i + 1], cell.neighbors.push(cell.right)), y != this.cellHeight - 1 && (cell.down = this.cells[i + this.cellWidth], cell.neighbors.push(cell.down)), 0 != y && (cell.up = this.cells[i - this.cellWidth], cell.neighbors.push(cell.up))
                }
            }
        }, GridWorld.prototype.getCell = function(x, y) {
            var xId = x / this.cellSize | 0,
                yId = y / this.cellSize | 0;
            return this.cells[yId * this.cellWidth + xId]
        }, GridWorld.prototype.setCell = function(cellType, xId, yId) {
            var cell = this.cells[yId * this.cellWidth + xId];
            cell.item && (this.view.removeChild(cell.item.view), cell.item.cell = null), cellType ? (cell.item = cellType, cell.aStarBlocker = cellType.aStarBlocker, cell.hasGem = cellType.hasGem, cellType.cell = cell, cell.item.view.x = cell.centerX, cell.item.view.y = cell.centerY, this.view.addChild(cell.item.view)) : cell.item = null
        }, GridWorld.prototype.setCellFromPoint = function(cellType, x, y) {
            var xId = x / this.cellSize | 0,
                yId = y / this.cellSize | 0;
            this.setCell(cellType, xId, yId)
        }, GridWorld.prototype.removeObject = function(object) {
            if (object.cell) {
                var cell = object.cell;
                this.view.removeChild(object.view), cell.item = null, cell.aStarBlocker = !1, object.cell = null
            }
        }, module.exports = GridWorld
    }), define("com/PiriPiriBlast/blocks/SoftBlock", ["require", "exports", "module", "PIXI", "../PiriPiriGameObject"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            PiriPiriGameObject = require("../PiriPiriGameObject"),
            SoftBlock = function(view) {
                if (!view || isNumber(view) === !0 || "object" == typeof view && view.hasOwnProperty("alpha") === !1) {
                    var view = new PIXI.DisplayObjectContainer;
                    this.sprite = new PIXI.Sprite.fromFrame("WeakWall.png"), this.sprite.anchor.set(.5, .5), view.addChild(this.sprite)
                }
                PiriPiriGameObject.call(this, view), this.id = 10, this.aStarBlocker = !0, this.stopsExplosion = !1, this.spriteClone = new PIXI.Sprite.fromFrame("WeakWall.png"), this.spriteClone.anchor.set(.5, .5), this.spriteClone.blendMode = PIXI.blendModes.ADD, this.spriteClone.alpha = 0, this.view.addChild(this.spriteClone)
            };
        SoftBlock.prototype = Object.create(PiriPiriGameObject.prototype), SoftBlock.prototype.onDestroy = function() {
            this.isDead = !0;
            var that = this;
            TweenLite.to(this.spriteClone, .3, {
                alpha: 1
            }), TweenLite.to(this.sprite.scale, .6, {
                x: .6,
                y: .6,
                ease: Back.easeIn
            }), TweenLite.to(this.spriteClone.scale, .6, {
                x: .4,
                y: .4,
                ease: Back.easeIn
            }), TweenLite.to(this.sprite, .2, {
                alpha: 0,
                delay: .5
            }), TweenLite.to(this.spriteClone, .2, {
                alpha: 0,
                delay: .5,
                onComplete: function() {
                    that.onReact()
                }
            })
        }, module.exports = SoftBlock
    }), define("com/PiriPiriBlast/blocks/Destructable", ["require", "exports", "module", "PIXI", "../PiriPiriGameObject", "./SoftBlock"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            SoftBlock = (require("../PiriPiriGameObject"), require("./SoftBlock")),
            Destructable = function() {
                var view = new PIXI.DisplayObjectContainer;
                this.sprite = new PIXI.Sprite.fromFrame("BrickWall.png"), this.sprite.anchor.set(.5, .5), view.addChild(this.sprite), view.scale.set(1, 1), SoftBlock.call(this, view), this.id = 1, this.aStarBlocker = !0, this.stopsExplosion = !0, this.spriteClone = new PIXI.Sprite.fromFrame("BrickWall.png"), this.spriteClone.anchor.set(.5, .5), this.spriteClone.blendMode = PIXI.blendModes.ADD, this.spriteClone.alpha = 0, this.view.addChild(this.spriteClone)
            };
        Destructable.prototype = Object.create(SoftBlock.prototype), module.exports = Destructable
    }), define("com/PiriPiriBlast/blocks/Indestructable", ["require", "exports", "module", "PIXI", "../PiriPiriGameObject"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            PiriPiriGameObject = require("../PiriPiriGameObject"),
            Indestructable = function() {
                var view = new PIXI.Sprite.fromFrame("SolidBlock.png");
                PiriPiriGameObject.call(this, view), this.view.anchor.set(.5, .5), this.isDestroyable = !1, this.aStarBlocker = !0, this.id = 2
            };
        Indestructable.prototype = Object.create(PiriPiriGameObject.prototype), module.exports = Indestructable
    }), define("com/PiriPiriBlast/blocks/Barrel", ["require", "exports", "module", "PIXI", "../../fido/Ticker", "./Bomb", "../Constants"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            Ticker = require("../../fido/Ticker"),
            Bomb = require("./Bomb"),
            Constants = require("../Constants"),
            Barrel = function(params) {
                var view = new PIXI.DisplayObjectContainer;
                ("undefined" == typeof params || params === !1) && (params = ["A"]), this.spriteName = "SpicePot" + params[0] + ".png";
                var sprite = new PIXI.Sprite.fromFrame(this.spriteName);
                sprite.anchor.set(.5, .5), view.addChild(sprite), view.scale.set(1, 1), Bomb.call(this, view), this.explosionSound = "explodePot", this.ident = params[0], this.id = 3, this.countdown = 48, this.countdownTimer = this.countdown, this.aStarBlocker = !0, this.ratio = .5, this.explosionSize = Constants.BARREL[params[0]].blastRadius, this.showBlast = !1, this.flashLight = new PIXI.Sprite.fromFrame("Light.png"), this.flashLight.alpha = 0, this.flashLight.scale.set(.2, .2), this.flashLight.anchor.set(.5, .5), this.flashLight.blendMode = PIXI.blendModes.ADD, this.flashLight.position.x = 0, this.flashLight.position.y = 0, this.view.addChildAt(this.flashLight, 0), this.ended = !1, this.isActive = !1
            };
        Barrel.prototype = Object.create(Bomb.prototype), Barrel.prototype.update = function() {
            if (this.isActive && (this.view.pivot.x = 2 * Math.sin(this.countdownTimer) * this.ratio, this.view.rotation = (Math.random() * (.01 - .1) + .1).toFixed(4), this.ended === !1)) {
                var that = this;
                if (this.countdownTimer -= Ticker.instance.deltaTime, this.countdownTimer <= 0) {
                    var clone = new PIXI.Sprite.fromFrame(this.spriteName);
                    clone.anchor.set(0, 0), clone.position.x = .5 * -clone.width, clone.position.y = .5 * -clone.height, clone.blendMode = PIXI.blendModes.ADD, clone.alpha = 0, this.view.addChild(clone), this.ratio += .01, this.ratio > 2 && (this.ratio = 2), Math.random() > .5 && (this.view.rotation -= 2 * this.view.rotation), TweenLite.to(this.flashLight, .4, {
                        alpha: 1
                    }), TweenLite.to(clone, .3, {
                        alpha: .8,
                        delay: .1
                    }), TweenLite.to(this.flashLight.scale, .5, {
                        x: 2,
                        y: 2,
                        scale: Expo.easeIn,
                        onComplete: function() {
                            that.explode(), that.countdownTimer = that.countdown, that.view.removeChild(clone), that.view.removeChild(that.flashLight)
                        }
                    }), this.ended = !0
                }
            }
        }, Barrel.prototype.onReact = function(direction) {
            var rotation = 0,
                newX = 0,
                newY = 0,
                posX = this.view.position.x,
                posY = this.view.position.y;
            "right" === direction ? (rotation += .3, newX += 5) : "left" === direction ? (rotation -= .3, newX -= 5) : "up" === direction ? (rotation += Math.random() > .5 ? .1 : -.1, newY -= 5) : (rotation += Math.random() > .5 ? .1 : -.1, newY += 5), TweenLite.to(this.view, .1, {
                rotation: rotation,
                x: posX + newX,
                y: posY + newY
            }), TweenLite.to(this.view, .1, {
                rotation: rotation - 1.3 * rotation,
                x: posX - 1.3 * newX,
                y: posY - 1.3 * newY,
                delay: .1
            }), TweenLite.to(this.view, .1, {
                rotation: .4 * rotation,
                x: posX + .4 * newX,
                y: posY + .4 * newY,
                delay: .2
            }), TweenLite.to(this.view, .1, {
                rotation: rotation - 1.1 * rotation,
                x: posX - 1.1 * newX,
                y: posY - 1.1 * newY,
                delay: .3
            }), TweenLite.to(this.view, .1, {
                rotation: 0,
                x: posX,
                y: posY,
                delay: .4
            }), this.isActive = !0
        }, module.exports = Barrel
    }), define("com/PiriPiriBlast/blocks/DoubleHitBlock", ["require", "exports", "module", "PIXI", "../PiriPiriGameObject"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            PiriPiriGameObject = require("../PiriPiriGameObject"),
            DoubleBlock = function() {
                var view = new PIXI.DisplayObjectContainer;
                this.sprite = new PIXI.Sprite.fromFrame("EnforcedWall.png"), this.sprite.anchor.set(.5, .5), view.addChild(this.sprite), PiriPiriGameObject.call(this, view), this.id = 6, this.life = 2, this.aStarBlocker = !0, this.isDestroyable = !1, this.spriteClone = new PIXI.Sprite.fromFrame("BrickWall.png"), this.spriteClone.anchor.set(.5, .5), this.spriteClone.blendMode = PIXI.blendModes.ADD, this.spriteClone.alpha = 0, this.view.addChild(this.spriteClone)
            };
        DoubleBlock.prototype = Object.create(PiriPiriGameObject.prototype), DoubleBlock.prototype.takeLife = function() {
            var that = this;
            this.life--, this.isDestroyable = !0, TweenLite.to(this.spriteClone, .2, {
                alpha: 1,
                delay: 0,
                ease: Expo.easeIn
            }), TweenLite.to(this.spriteClone, .2, {
                alpha: 0,
                delay: .2,
                ease: Expo.easeOut
            }), TweenLite.to(this.spriteClone, .2, {
                alpha: 1,
                delay: .4,
                ease: Expo.easeIn,
                onComplete: function() {
                    that.sprite.setTexture(PIXI.Texture.fromFrame("BrickWall.png"))
                }
            }), TweenLite.to(this.spriteClone, .2, {
                alpha: 0,
                delay: .6,
                ease: Expo.easeOut
            })
        }, DoubleBlock.prototype.onDestroy = function() {
            this.isDead = !0;
            var that = this;
            TweenLite.killTweensOf(this.sprite), TweenLite.killTweensOf(this.spriteClone), TweenLite.to(this.spriteClone, .3, {
                alpha: 1
            }), TweenLite.to(this.sprite.scale, .6, {
                x: .6,
                y: .6,
                ease: Expo.easeIn
            }), TweenLite.to(this.spriteClone.scale, .6, {
                x: .6,
                y: .6,
                ease: Expo.easeIn
            }), TweenLite.to(this.sprite, .2, {
                alpha: 0,
                delay: .5
            }), TweenLite.to(this.spriteClone, .2, {
                alpha: 0,
                delay: .5,
                onComplete: function() {
                    that.onReact()
                }
            })
        }, DoubleBlock.prototype.isAlive = function() {
            return this.life > 0
        }, module.exports = DoubleBlock
    }), define("com/PiriPiriBlast/blocks/UpDownBlock", ["require", "exports", "module", "PIXI", "../../fido/Ticker", "../PiriPiriGameObject", "../Constants"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            Ticker = require("../../fido/Ticker"),
            PiriPiriGameObject = require("../PiriPiriGameObject"),
            Constants = require("../Constants"),
            UpDownBlock = function(params) {
                var view = new PIXI.DisplayObjectContainer;
                this.pattern = Constants.UPDOWNPATTERNS[params[0]], this.patternPosition = 0, this.up = new PIXI.Sprite.fromFrame("MovingWallUp.png"), this.up.alpha = 0, this.down = new PIXI.Sprite.fromFrame("MovingWallDown.png"), this.down.alpha = 1, this.up.anchor.set(.5, .5), this.down.anchor.set(.5, .5), view.addChild(this.up), view.addChild(this.down), PiriPiriGameObject.call(this, view), this.id = 9, this.state = this.pattern[this.patternPosition], this.countdown = 30, this.countdownTimer = this.countdown, this.isDestroyable = !1, this.isActive = !0, this.setProperties()
            };
        UpDownBlock.prototype = Object.create(PiriPiriGameObject.prototype), UpDownBlock.prototype.setDown = function() {
            this.state = 0, this.isActive = !1, this.setProperties()
        }, UpDownBlock.prototype.updateState = function() {
            if (this.isActive === !0 && (this.countdownTimer -= Ticker.instance.deltaTime, this.countdownTimer <= 0)) {
                this.patternPosition++, this.patternPosition >= this.pattern.length && (this.patternPosition = 0);
                var wantedState = this.pattern[this.patternPosition];
                this.state !== wantedState && this.toggleState(), this.countdownTimer = this.countdown
            }
        }, UpDownBlock.prototype.toggleState = function() {
            this.state = 0 === this.state ? 1 : 0, this.setProperties()
        }, UpDownBlock.prototype.setProperties = function() {
            1 === this.state ? (this.stopsExplosion = !0, this.down.alpha = 0, this.up.alpha = 1) : (this.stopsExplosion = !1, this.up.alpha = 0, this.down.alpha = 1)
        }, module.exports = UpDownBlock
    }), define("com/PiriPiriBlast/blocks/StartBlock", ["require", "exports", "module", "PIXI", "../PiriPiriGameObject"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            PiriPiriGameObject = require("../PiriPiriGameObject"),
            StartBlock = function(view) {
                var view = view || new PIXI.Sprite.fromFrame("StartSquare.png");
                PiriPiriGameObject.call(this, view), this.view.anchor.set(.5, .5), this.id = 7
            };
        StartBlock.prototype = Object.create(PiriPiriGameObject.prototype), module.exports = StartBlock
    }), define("com/PiriPiriBlast/blocks/EndBlock", ["require", "exports", "module", "PIXI", "../PiriPiriGameObject"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            PiriPiriGameObject = require("../PiriPiriGameObject"),
            EndBlock = function(view) {
                var view = view || new PIXI.Sprite.fromFrame("EndSquare.png");
                PiriPiriGameObject.call(this, view), this.view.anchor.set(.5, .5), this.id = 8
            };
        EndBlock.prototype = Object.create(PiriPiriGameObject.prototype), module.exports = EndBlock
    }), define("com/PiriPiriBlast/blocks/CrackBlock", ["require", "exports", "module", "PIXI", "../PiriPiriGameObject"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            PiriPiriGameObject = require("../PiriPiriGameObject"),
            CrackBlock = function(view) {
                var view = view || new PIXI.Sprite.fromFrame("FloorCrack.png");
                PiriPiriGameObject.call(this, view), this.view.anchor.set(.5, .5), this.id = 5, this.isDestroyable = !1, this.stopsExplosion = !1, this.showBlast = !0
            };
        CrackBlock.prototype = Object.create(PiriPiriGameObject.prototype), module.exports = CrackBlock
    }), define("com/PiriPiriBlast/blocks/EmptyBlock", ["require", "exports", "module", "PIXI", "../PiriPiriGameObject"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            PiriPiriGameObject = require("../PiriPiriGameObject"),
            EmptyBlock = function(view) {
                var view = new PIXI.DisplayObjectContainer;
                PiriPiriGameObject.call(this, view), this.id = 0, this.aStarBlocker = !1, this.stopsExplosion = !1
            };
        EmptyBlock.prototype = Object.create(PiriPiriGameObject.prototype), module.exports = EmptyBlock
    }), define("com/PiriPiriBlast/PiriPiriGridWorld", ["require", "exports", "module", "../fido/game/gridworld/GridWorld", "./Constants", "./blocks/Destructable", "./blocks/Indestructable", "./blocks/Barrel", "./blocks/Bomb", "./blocks/DoubleHitBlock", "./blocks/UpDownBlock", "./blocks/StartBlock", "./blocks/EndBlock", "./blocks/CrackBlock", "./blocks/SoftBlock", "./blocks/EmptyBlock"], function(require, exports, module) {
        var GridWorld = require("../fido/game/gridworld/GridWorld"),
            Constants = require("./Constants"),
            CellDestructable = require("./blocks/Destructable"),
            CellIndestructable = require("./blocks/Indestructable"),
            CellBarrel = require("./blocks/Barrel"),
            CellBomb = require("./blocks/Bomb"),
            CellDoubleHit = require("./blocks/DoubleHitBlock"),
            CellUpDown = require("./blocks/UpDownBlock"),
            CellStart = require("./blocks/StartBlock"),
            CellEnd = require("./blocks/EndBlock"),
            CellCrack = require("./blocks/CrackBlock"),
            CellSoft = require("./blocks/SoftBlock"),
            CellEmpty = require("./blocks/EmptyBlock"),
            PeriPeriGridWorld = function(game) {
                GridWorld.call(this), this.view.position.x = Constants.OFFSETS.x, this.view.position.y = Constants.OFFSETS.y, this.cellSize = 90, this.myCells = [], this.startCell = !1, this.endCell = !1, this.game = game, this.cellClasses = [CellEmpty, CellDestructable, CellIndestructable, CellBarrel, CellBomb, CellCrack, CellDoubleHit, CellStart, CellEnd, CellUpDown, CellSoft]
            };
        PeriPeriGridWorld.prototype = Object.create(GridWorld.prototype), PeriPeriGridWorld.prototype.loadMap = function(map) {
            var gems = 0;
            this.resetMap();
            for (var i = 0; i < map.length; i++) {
                var mapID = map[i],
                    params = !1,
                    x = i % this.cellWidth,
                    y = i / this.cellWidth | 0;
                if ("string" == typeof mapID) {
                    var params = mapID.split("-");
                    mapID = parseInt(params[0]), params.shift()
                }
                for (var object = new this.cellClasses[mapID](params), j = 0; j < params.length; j++) "*" === params[j] && (object.hasGem = !0, gems++, 0 === mapID && this.game.hud.showGem(x * this.cellSize + .5 * this.cellSize, y * this.cellSize + .5 * this.cellSize));
                if (object.id === Constants.BLOCKS.BARREL) this.game.bombManager.addBarrel(object, x, y);
                else {
                    switch (object.id) {
                        case Constants.BLOCKS.START:
                            this.startCell = object;
                            break;
                        case Constants.BLOCKS.END:
                            this.endCell = object
                    }
                    this.myCells.push(object), object.onHit.add(this.onHit, this), this.setCell(object, x, y)
                }
            }
            this.game.gemsToGet = gems, this.game.hud.updateGems()
        }, PeriPeriGridWorld.prototype.getStartCell = function() {
            return this.startCell.cell
        }, PeriPeriGridWorld.prototype.getEndCell = function() {
            return this.endCell.cell
        }, PeriPeriGridWorld.prototype.update = function() {
            for (var cell = !1, i = this.myCells.length; i--;) cell = this.myCells[i], "function" == typeof cell.updateState && cell.updateState()
        }, PeriPeriGridWorld.prototype.resetMap = function() {}, PeriPeriGridWorld.prototype.setCell = function(cellType, xId, yId, aStarBlocker) {
            GridWorld.prototype.setCell.call(this, cellType, xId, yId, aStarBlocker)
        }, PeriPeriGridWorld.prototype.onHit = function(object) {
            switch (object.id) {
                case 0:
                    break;
                case Constants.BLOCKS.DESTRUCTABLE:
                    object.hasGem === !0 && this.game.hud.showGem(object.cell.centerX, object.cell.centerY), this.removeObject(object);
                    break;
                case 2:
                    break;
                case Constants.BLOCKS.BARREL:
                    object.hasGem === !0 && this.game.hud.showGem(object.cell.centerX, object.cell.centerY), object.onReact();
                    break;
                case Constants.BLOCKS.DOUBLE_HIT:
                    object.takeLife(), object.isAlive() === !1 && (object.hasGem === !0 && this.game.hud.showGem(object.cell.centerX, object.cell.centerY), this.removeObject(object));
                    break;
                case Constants.BLOCKS.SOFT:
                    object.hasGem === !0 && this.game.hud.showGem(object.cell.centerX, object.cell.centerY), this.removeObject(object)
            }
        }, module.exports = PeriPeriGridWorld
    }), define("com/PiriPiriBlast/Footsteps", ["require", "exports", "module", "PIXI", "Signals", "./PiriPiriGameObject", "./Constants", "com/fido/sound/SoundManager"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            Signal = require("Signals"),
            PiriPiriGameObject = require("./PiriPiriGameObject"),
            Constants = require("./Constants"),
            Footsteps = (require("com/fido/sound/SoundManager"), function(game) {
                this.game = game, this.view = new PIXI.DisplayObjectContainer, this.onStepsComplete = new Signal, this.prevX = 0, this.prevY = 0, this.rot = 0, this.steps = []
            });
        Footsteps.prototype = Footsteps, Footsteps.prototype.build = function(path, startCell, endCell) {
            for (var delay = 0, rotation = 0, i = 0; i < path.length - 1; i++) {
                var stepInfo = path[i],
                    nextStepInfo = path[i + 1] || !1,
                    rotation = 0;
                nextStepInfo && stepInfo.realY > this.prevY && nextStepInfo.realX > stepInfo.realX ? rotation = 0 === i ? 270 * (Math.PI / 180) : 0 * (Math.PI / 180) : stepInfo.realX > this.prevX ? rotation = 270 * (Math.PI / 180) : stepInfo.realX < this.prevX ? rotation = -270 * (Math.PI / 180) : stepInfo.realY > this.prevY ? rotation = 0 * (Math.PI / 180) : stepInfo.realY < this.prevY && (rotation = 180 * (Math.PI / 180)), this.prevX = stepInfo.realX, this.prevY = stepInfo.realY;
                var stepRight = new FootstepRight(stepInfo);
                stepRight.reset(rotation), stepRight.show(delay);
                var stepLeft = new FootstepLeft(stepInfo);
                stepLeft.reset(rotation), stepLeft.show(delay + .03), this.view.addChild(stepLeft.view), this.steps.push(stepLeft), this.view.addChild(stepRight.view), this.steps.push(stepRight), delay += .1
            }
            this.onStepsComplete.dispatch(path, startCell, endCell, delay)
        }, Footsteps.prototype.reset = function() {
            for (var i = 0; i < this.steps.length; i++) this.view.removeChild(this.steps[i].view);
            this.steps = []
        }, Footsteps.prototype.update = function() {};
        var Step = function(view) {
            this.view = view, this.view.anchor.set(.5, .5)
        };
        Step.prototype = Object.create(PiriPiriGameObject.prototype), Step.prototype.reset = function(rotation) {
            this.view.scale.set(0), this.view.alpha = 0, this.view.rotation = rotation, this.prevX = 0, this.prevY = 0
        }, Step.prototype.show = function(delay) {
            TweenLite.to(this.view, .2, {
                alpha: 1,
                delay: delay
            }), TweenLite.to(this.view.scale, .2, {
                x: 1,
                y: 1,
                delay: delay,
                ease: Elastic.easeOut
            })
        };
        var FootstepRight = function(stepInfo) {
            var view = new PIXI.Sprite.fromFrame("FootprintRight.png");
            view.position.x = stepInfo.centerX + Constants.OFFSETS.x, view.position.y = stepInfo.centerY + Constants.OFFSETS.y, Step.call(this, view)
        };
        FootstepRight.prototype = Object.create(Step.prototype);
        var FootstepLeft = function(stepInfo) {
            var view = new PIXI.Sprite.fromFrame("FootPrintLeft.png");
            view.position.x = stepInfo.centerX + Constants.OFFSETS.x, view.position.y = stepInfo.centerY + Constants.OFFSETS.y, Step.call(this, view)
        };
        FootstepLeft.prototype = Object.create(Step.prototype), module.exports = Footsteps
    }), define("com/PiriPiriBlast/PiriPiriBlastGame", ["require", "exports", "module", "PIXI", "signals", "../fido/Ticker", "../fido/game/World", "../fido/game/GameObject", "com/fido/sound/SoundManager", "./hud/Hud", "./control/PointAndClickController", "./BombManager", "./explosions/ExplosionManager", "./effects/EffectsManager", "./PiriPiriGridWorld", "./Levels", "./Footsteps", "./Constants"], function(require, exports, module) {
        function depthCompare(a, b) {
            return a.position.y + a.depthOffset - (b.position.y + b.depthOffset)
        }
        var PIXI = require("PIXI"),
            Signal = require("signals"),
            Ticker = require("../fido/Ticker"),
            World = require("../fido/game/World"),
            SoundManager = (require("../fido/game/GameObject"), require("com/fido/sound/SoundManager")),
            Hud = require("./hud/Hud"),
            Controller = require("./control/PointAndClickController"),
            BombManager = require("./BombManager"),
            ExplosionManager = require("./explosions/ExplosionManager"),
            EffectsManager = require("./effects/EffectsManager"),
            PiriPiriGridWorld = require("./PiriPiriGridWorld"),
            Levels = require("./Levels"),
            Footsteps = require("./Footsteps"),
            Constants = require("./Constants");
        PIXI.DisplayObject.prototype.depthOffset = 0;
        var PiriPiriBlastGame = function() {
            this.view = new PIXI.DisplayObjectContainer, this.floor = PIXI.Sprite.fromImage(ASSET_URL + "img/game/WireframeGrid.jpg", !0), this.floor.x = Constants.FLOOROFFSET.x, this.floor.y = Constants.FLOOROFFSET.y, this.explosionLayer = new PIXI.DisplayObjectContainer, this.onGameover = new Signal, this.world = new World, this.gridWorld = new PiriPiriGridWorld(this), this.bombManager = new BombManager(this), this.hud = new Hud(this), this.controller = new Controller(this), this.explosionManager = new ExplosionManager(this), this.effectsManager = new EffectsManager(this), this.footsteps = new Footsteps(this), this.isGameover = !1, this.paused = !0, this.bombs = 3, this.score = 0, this.gems = 0, this.gemsToGet = 0, this.levelState = 0, this.gridWorld.build(), this.scoreMultiplyer = 1, this.explosionManager.onAllComplete.add(this.gameBoardCleared, this), this.footsteps.onStepsComplete.add(this.onStepsComplete, this), this.view.addChild(this.floor), this.view.addChild(this.gridWorld.view), this.view.addChild(this.world.view), this.view.addChild(this.effectsManager.view), this.view.addChild(this.footsteps.view), this.view.addChild(this.explosionLayer), this.view.addChild(this.hud), this.effectsManager.do("sunburst", {
                ratio: .011,
                position: {
                    x: 100,
                    y: 100
                }
            }), this.effectsManager.do("sunburst", {
                ratio: .023,
                position: {
                    x: 100,
                    y: 100
                }
            })
        };
        PiriPiriBlastGame.constructor = PiriPiriBlastGame, PiriPiriBlastGame.prototype.reset = function(config) {
            this.level = Levels[app.session.level], this.controller.enable(), this.bombManager.reset(), this.explosionManager.reset(), this.effectsManager.reset(), this.footsteps.reset(), this.hud.reset(), this.gems = 0, this.gemsToGet = 0, this.gridWorld.loadMap(this.level.map), this.bombs = this.level.bombs, this.hud.updateBombs(), this.hud.updateGems(), this.isGameover = !1, this.levelState = 0, config = config || this.config, this.config = config, this.baseSpeed = 1, this.gameTime = 0, Ticker.instance.speed = this.baseSpeed, this.score = 0, this.hud.showStartAndFinish()
        }, PiriPiriBlastGame.prototype.addToScore = function(points, target) {
            var newScore = points * this.scoreMultiplyer | 0;
            this.score += newScore, this.hud.updateScore(newScore, target)
        }, PiriPiriBlastGame.prototype.start = function(config) {
            this.reset(config), this.resume()
        }, PiriPiriBlastGame.prototype.pause = function() {
            this.paused || (this.paused = !0, this.view.interactive = !1, Ticker.instance.remove(this.update, this))
        }, PiriPiriBlastGame.prototype.resume = function() {
            this.paused && (this.paused = !1, this.view.interactive = !0, Ticker.instance.add(this.update, this, 1))
        }, PiriPiriBlastGame.prototype.update = function() {
            this.gameTime += Ticker.instance.deltaTime, this.bombManager.update(), this.explosionManager.update(), this.effectsManager.update(), this.gridWorld.update(), this.world.view.children.sort(depthCompare), this.world.update(), this.hud.update()
        }, PiriPiriBlastGame.prototype.takeBomb = function() {
            this.bombs--, this.hud.updateBombs()
        }, PiriPiriBlastGame.prototype.addGem = function() {
            this.gems++, this.hud.updateGems()
        }, PiriPiriBlastGame.prototype.onStepsComplete = function(result, startCell, endCell, delay) {
            for (var j = 0; j < this.gridWorld.cells.length; j++) this.gridWorld.cells[j].aStarBlocker === !0;
            for (var i = 0; i < result.length; i++) result[i].hasGem === !0 && this.hud.clearGem(result[i].centerX, result[i].centerY);
            this.levelState = this.gems === this.gemsToGet ? Constants.LEVEL_STATES.COMPLETE_WITH_GEMS : Constants.LEVEL_STATES.COMPLETE;
            var that = this;
            TweenLite.delayedCall(delay, function() {
                SoundManager.sfx.play("levelClear"), SoundManager.sfx.stop("bootsWalk")
            }), TweenLite.to({
                foo: 0
            }, delay + .5, {
                foo: 100,
                onComplete: function() {
                    that.levelComplete()
                }
            })
        }, PiriPiriBlastGame.prototype.gameBoardCleared = function() {
            TweenLite.to({
                foo: 0
            }, .2, {
                foo: 100,
                onComplete: this.runGameBoardClear.bind(this)
            })
        }, PiriPiriBlastGame.prototype.runGameBoardClear = function() {
            var startCell = this.gridWorld.getStartCell(),
                endCell = this.gridWorld.getEndCell(),
                result = this.gridWorld.astar.search(this.gridWorld, startCell, endCell);
            if (result.length > 0) {
                for (var j = 0; j < this.gridWorld.cells.length; j++) this.gridWorld.cells[j].item && this.gridWorld.cells[j].item.id === Constants.BLOCKS.UP_DOWN && this.gridWorld.cells[j].item.setDown();
                this.controller.disable(), this.footsteps.build(result, startCell, endCell), SoundManager.sfx.play("bootsWalk")
            } else 0 === this.bombs && this.bombManager.isActive() === !1 && (this.levelState = Constants.LEVEL_STATES.UNLOCKED, this.gameover())
        }, PiriPiriBlastGame.prototype.levelComplete = function() {
            this.isGameover = !0, this.pause(), this.hud.showLevelComplete()
        }, PiriPiriBlastGame.prototype.onLevelComplete = function() {
            this.onGameover.dispatch()
        }, PiriPiriBlastGame.prototype.gameover = function() {
            this.isGameover || (this.isGameover = !0, this.pause(), this.hud.showGameover())
        }, module.exports = PiriPiriBlastGame
    }), define("com/PiriPiriBlast/GameScreen", ["require", "exports", "module", "PIXI", "./PiriPiriBlastGame", "./AabButton", "com/piripiriblast/GameSaveManager", "./Levels", "com/fido/tracking/Tracking"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            Game = require("./PiriPiriBlastGame"),
            GameSaveManager = (require("./AabButton"), require("com/piripiriblast/GameSaveManager")),
            Levels = require("./Levels"),
            //Tracking = require("com/fido/tracking/Tracking"),
            GameScreen = function(app) {
                this.app = app, PIXI.DisplayObjectContainer.call(this), this.game = new Game, this.game.onGameover.add(this.onGameover, this), this.addChild(this.game.view), this.gameDetail = {
                    score: 0,
                    pb: 0,
                    state: 0,
                    isPB: 0,
                    nextUnlock: 100,
                    nextLevelUnlocked: !1,
                    gems: 0,
                    gemsGained: 0,
                    gameComplete: !1
                }, this.introShown = []
            };
        GameScreen.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), GameScreen.prototype.onShow = function() {
            this.game.start(), this.app.overlayManager.onShow.add(this.onOverlayShow, this), this.app.overlayManager.onHide.add(this.onOverlayHide, this), this.app.topMenu.gameMode(), 0 === this.app.session.level && this.app.overlayManager.show("help")
        }, GameScreen.prototype.onGameover = function() {
            var level = Levels[this.app.session.level];
            GameSaveManager.instance.saveScore(level.id, this.game.gems), GameSaveManager.instance.saveLevelState(level.id, this.game.levelState), this.gameDetail.pb = GameSaveManager.instance.getPB(level.id), this.gameDetail.isPB = GameSaveManager.instance.isPB(level.id, this.game.score), this.gameDetail.gems = this.game.gemsToGet, this.gameDetail.gemsGained = this.game.gems, this.gameDetail.levelState = this.game.levelState, this.gameDetail.nextLevelUnlocked = !1;
            var nextLevelId = level.id + 1;
            this.game.levelState > 1 && (nextLevelId < Levels.length ? this.gameDetail.nextLevelUnlocked = GameSaveManager.instance.unlockLevel(nextLevelId) : (this.gameDetail.nextLevelUnlocked = !1, this.gameDetail.gameComplete = !0)), this.app.overlayManager.show("gameover")
        }, GameScreen.prototype.onShown = function() {
            this.app.toggleBackground(!1)
        }, GameScreen.prototype.onHide = function() {
            this.app.toggleBackground(!0), this.app.overlayManager.onShow.remove(this.onOverlayShow, this), this.app.overlayManager.onHide.remove(this.onOverlayHide, this), app.view.style["-webkit-filter"] = null
        }, GameScreen.prototype.onHidden = function() {
            this.game.pause(), this.app.topMenu.normalMode()
        }, GameScreen.prototype.onOverlayShow = function() {
            this.game.pause()
        }, GameScreen.prototype.onOverlayHide = function() {
            this.game.isGameover ? (this.game.reset(), this.game.resume()) : this.game.resume()
        }, GameScreen.prototype.resize = function(w) {
            this.game.view.x = w / 2 - 568, this.game.view.y = 0
        }, module.exports = GameScreen
    }), define("com/PiriPiriBlast/TopMenu", ["require", "exports", "module", "PIXI", "./buttons/PiriPiriButton", "../fido/sound/SoundManager"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            PiriPiriButton = require("./buttons/PiriPiriButton"),
            SoundManager = require("../fido/sound/SoundManager"),
            TopMenu = function(app) {
                this.app = app, PIXI.DisplayObjectContainer.call(this), this.muteButton = new PiriPiriButton("SoundOn.png"), this.addChild(this.muteButton.view), this.muteButton.onPress.add(this.onButtonPressed, this), this.muteButton.view.position.x = 1086, this.muteButton.view.position.y = 56, this.pauseButton = new PiriPiriButton("Pause.png"), this.addChild(this.pauseButton.view), this.pauseButton.onPress.add(this.onButtonPressed, this), this.pauseButton.view.position.x = 996, this.pauseButton.view.position.y = 56, this.helpButton = new PiriPiriButton("Help.png"), this.addChild(this.helpButton.view), this.helpButton.onPress.add(this.onButtonPressed, this), this.helpButton.view.position.x = 996, this.helpButton.view.position.y = 56, this.pauseButton.view.visible = !1, SoundManager.sfx.onMuteToggle.add(this.onMuteToggle, this), SoundManager.music.onMuteToggle.add(this.onMuteToggle, this), this.isMobile = app.isMobile
            };
        TopMenu.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), TopMenu.prototype.gameMode = function() {
            this.pauseButton.view.visible = !0, this.muteButton.view.visible = !0, this.helpButton.view.visible = !1
        }, TopMenu.prototype.normalMode = function() {
            this.isMobile ? (this.pauseButton.view.visible = !1, this.muteButton.view.visible = !0, this.helpButton.view.visible = !0) : (this.pauseButton.view.visible = !1, this.helpButton.view.visible = !0)
        }, TopMenu.prototype.onButtonPressed = function(bt) {
            bt === this.muteButton ? SoundManager.sfx.isMuted && SoundManager.music.isMuted ? (SoundManager.music.unmute(), SoundManager.sfx.unmute()) : (SoundManager.music.mute(), SoundManager.sfx.mute()) : bt === this.helpButton ? this.app.overlayManager.show("help") : bt === this.pauseButton && this.app.overlayManager.show("pause")
        }, TopMenu.prototype.onMuteToggle = function() {
            this.muteButton.setIcon(SoundManager.sfx.isMuted && SoundManager.music.isMuted ? "SoundOff.png" : "SoundOn.png")
        }, TopMenu.prototype.onShown = function() {
            this.game.start()
        }, TopMenu.prototype.resize = function() {}, module.exports = TopMenu
    }), define("com/PiriPiriBlast/buttons/AabIconButton", ["require", "exports", "module", "PIXI", "./BaseAabButton"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            BaseAabButton = require("./BaseAabButton"),
            AabIconButton = function(frameId) {
                var view = this.createBackground(10);
                this.icon = new PIXI.Sprite.fromFrame(frameId), this.icon.anchor.set(.5), this.icon.position.set(45), view.addChild(this.icon), BaseAabButton.call(this, view), view.hitArea = new PIXI.Rectangle(0, 0, 90, 90);
                view.mousedown = view.touchstart = this.onTouch.bind(this), this.activateDefaultRollover()
            };
        AabIconButton.prototype = Object.create(BaseAabButton.prototype), AabIconButton.prototype.onTouch = function() {}, AabIconButton.prototype.setIcon = function(frameId) {
            this.icon.setTexture(PIXI.Texture.fromFrame(frameId))
        }, AabIconButton.prototype.setSize = function(scale) {
            this.view.scale.set(scale), this.defaultScale = scale, this.overScale = 1.1 * scale
        }, module.exports = AabIconButton
    }), define("com/PiriPiriBlast/buttons/AabCloseButton", ["require", "exports", "module", "PIXI", "./BaseAabButton", "../../fido/Device"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            BaseAabButton = require("./BaseAabButton"),
            AabCloseButton = (require("../../fido/Device"), function(frameId) {
                this.icon = new PIXI.Sprite.fromFrame(frameId), this.icon.anchor.set(.5), this.icon.position.set(45);
                var view = this.createBackground(10);
                view.addChild(this.icon), BaseAabButton.call(this, view), view.hitArea = new PIXI.Rectangle(0, 0, 90, 90), view.addChildAt((new PIXI.Graphics).beginFill(13196884).drawRect(8, 8, 73, 72), 1);
                this.activateDefaultRollover()
            });
        AabCloseButton.prototype = Object.create(BaseAabButton.prototype), AabCloseButton.prototype.setIcon = function(frameId) {
            this.icon.setTexture(PIXI.Texture.fromFrame(frameId))
        }, AabCloseButton.prototype.setSize = function(scale) {
            this.view.scale.set(scale), this.defaultScale = scale, this.overScale = 1.1 * scale
        }, module.exports = AabCloseButton
    }), define("com/PiriPiriBlast/overlay/Overlay", ["require", "exports", "module", "PIXI", "../buttons/AabIconButton", "../buttons/AabCloseButton", "../../fido/Device"], function(require, exports, module) {
        {
            var PIXI = require("PIXI");
            require("../buttons/AabIconButton"), require("../buttons/AabCloseButton"), require("../../fido/Device")
        }
        Overlay = function() {
            PIXI.DisplayObjectContainer.call(this), this.bg = (new PIXI.Graphics).beginFill(16711680).drawRect(0, 0, 300, 300), this.bg.x = 300, this.bg.y = 100, this.addChild(this.bg), this.alpha = 0
        }, Overlay.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), Overlay.prototype.show = function(container) {
            container.addChild(this), TweenLite.to(this, .4, {
                alpha: 1
            })
        }, Overlay.prototype.hide = function() {
            TweenLite.to(this, .4, {
                alpha: 0,
                onComplete: function() {
                    this.parent.removeChild(this)
                }.bind(this)
            })
        }, Overlay.prototype.resize = function(w, h) {
            this.black.scale.set(w / 100, h / 100)
        }, module.exports = Overlay
    }), define("com/PiriPiriBlast/overlay/PauseScreen", ["require", "exports", "module", "PIXI", "../AabButton", "../../fido/sound/SoundManager", "../buttons/PiriPiriButton", "com/fido/tracking/Tracking"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            SoundManager = (require("../AabButton"), require("../../fido/sound/SoundManager")),
            PiriPiriButton = require("../buttons/PiriPiriButton");
            //Tracking = require("com/fido/tracking/Tracking");
        PauseScreen = function(app) {
            this.app = app, PIXI.DisplayObjectContainer.call(this);
            var view = this;
            this.bg = new PIXI.Sprite.fromFrame("PaperPanel.png"), this.bg.anchor.set(.5), view.addChild(this.bg), this.title = new PIXI.Sprite.fromFrame("Paused.png"), this.title.anchor.set(.5), this.title.x = 0, this.title.y = -160, view.addChild(this.title), this.helpButton = new PiriPiriButton("Help.png"), this.helpButton.onPress.add(this.onPress, this), this.helpButton.view.x = -90, this.helpButton.view.y = -6, view.addChild(this.helpButton.view), this.musicButton = new PiriPiriButton("SoundOn.png"), this.musicButton.onPress.add(this.onPress, this), this.musicButton.view.x = 90, this.musicButton.view.y = -6, view.addChild(this.musicButton.view), this.playButton = new PiriPiriButton("PlaySmall.png"), this.playButton.onPress.add(this.onPress, this), this.playButton.view.x = 115, this.playButton.view.y = 155, view.addChild(this.playButton.view), this.restartButton = new PiriPiriButton("Restart.png"), this.restartButton.onPress.add(this.onPress, this), this.restartButton.view.x = 0, this.restartButton.view.y = 155, view.addChild(this.restartButton.view), this.quitButton = new PiriPiriButton("LevelMenu.png"), this.quitButton.onPress.add(this.onPress, this), this.quitButton.view.x = -115, this.quitButton.view.y = 155, view.addChild(this.quitButton.view), SoundManager.music.onMuteToggle.add(this.onMusicMuteToggle, this), this.alpha = 0
        }, PauseScreen.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), PauseScreen.prototype.onShow = function() {
            
        }, PauseScreen.prototype.onPress = function(bt) {
            bt === this.restartButton ? (this.app.gameScreen.game.reset(), this.app.overlayManager.hide()) : bt === this.quitButton ? (this.app.overlayManager.hide(), this.app.screenManager.gotoScreenByID("levelScreen")) : bt === this.helpButton ? this.app.overlayManager.gotoScreenByID("help") : bt === this.musicButton ? (SoundManager.music.isMuted ? SoundManager.music.unmute() : SoundManager.music.mute(), SoundManager.sfx.isMuted ? SoundManager.sfx.unmute() : SoundManager.sfx.mute()) : bt === this.playButton && this.app.overlayManager.hide()
        }, PauseScreen.prototype.onMusicMuteToggle = function() {
            this.musicButton.setIcon(SoundManager.music.isMuted ? "SoundOff.png" : "SoundOn.png")
        }, PauseScreen.prototype.resize = function(w, h) {
            this.w = w, this.h = h, this.x = w / 2, this.y = h / 2
        }, module.exports = PauseScreen
    }), define("com/piripiriblast/Constants", ["require", "exports", "module"], function(require, exports, module) {
        var Constants = {
            LEVEL_STATES: {
                LOCKED: 0,
                UNLOCKED: 1,
                COMPLETE: 2,
                COMPLETE_WITH_GEMS: 3
            },
            BOMB_BLAST_RADIUS: 2,
            FLOOROFFSET: {
                x: -82,
                y: -12
            },
            OFFSETS: {
                x: 28,
                y: 100
            },
            BLOCKS: {
                EMPTY: 0,
                DESTRUCTABLE: 1,
                INDESTRUCTABLE: 2,
                BARREL: 3,
                BOMB: 4,
                CRACKED: 5,
                DOUBLE_HIT: 6,
                START: 7,
                END: 8,
                UP_DOWN: 9,
                SOFT: 10
            },
            BARREL: {
                A: {
                    blastRadius: 3
                },
                B: {
                    blastRadius: 5
                }
            },
            UPDOWNPATTERNS: {
                A: [1, 0, 0, 0, 0, 0, 0],
                B: [1, 1, 1, 0, 0, 0, 0, 0],
                C: [0, 1, 1, 1, 0, 0, 0, 0],
                D: [0, 0, 1, 1, 1, 0, 0, 0],
                E: [0, 0, 0, 0, 0, 0, 1, 1],
                F: [0, 0, 0, 0, 1, 1, 1, 1],
                G: [0, 0, 0, 1, 1, 1, 1, 1],
                H: [1, 1, 0, 0, 0, 0, 1, 1]
            },
            AXIS: {
                NONE: 0,
                HORIZONTAL: 1,
                VERTICAL: 2,
                BOTH: 3
            }
        };
        module.exports = Constants
    }), define("com/piripiriblast/effects/SunBurst", ["require", "exports", "module", "Signals", "PIXI", "../Constants", "../../fido/Ticker"], function(require, exports, module) {
        var Signal = require("Signals"),
            PIXI = require("PIXI"),
            SunBurst = (require("../Constants"), require("../../fido/Ticker"), function(icon, ratio) {
                this.view = new PIXI.DisplayObjectContainer, this.view.isActive = !1, this.sprite = PIXI.Sprite.fromImage(icon ? icon : ASSET_URL + "img/game/SunburstFG.png"), this.sprite.anchor.set(.5), this.view.addChild(this.sprite), this.sprite.blendMode = PIXI.blendModes.ADD, this.onComplete = new Signal, this.view.ratio = ratio && 0 !== ratio ? ratio : Math.random() > .5 ? .02 : .01, this.view.count = 0, this.view.updateTransform = function() {
                    this.isActive === !0 && (PIXI.DisplayObjectContainer.prototype.updateTransform.call(this), this.count += 1, this.rotation = .01 * this.count * this.ratio)
                }
            });
        SunBurst.prototype = SunBurst.prototype, SunBurst.prototype.reset = function() {
            this.count = 0
        }, SunBurst.prototype.start = function(params) {
            this.view.isActive = !0, params && params.hasOwnProperty("ratio") === !0 && (this.view.ratio = params.ratio)
        }, SunBurst.prototype.update = function() {}, module.exports = SunBurst
    }), define("com/PiriPiriBlast/overlay/GameoverScreen", ["require", "exports", "module", "PIXI", "../AabButton", "../Constants", "../../fido/sound/SoundManager", "../buttons/PiriPiriButton", "com/fido/Utils", "com/piripiriblast/effects/SunBurst", "com/fido/tracking/Tracking", "com/fido/sound/SoundManager"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            Constants = (require("../AabButton"), require("../Constants")),
            SoundManager = require("../../fido/sound/SoundManager"),
            PiriPiriButton = require("../buttons/PiriPiriButton"),
            //Tracking = (require("com/fido/Utils"), require("com/piripiriblast/effects/SunBurst"), require("com/fido/tracking/Tracking")),
            SoundManager = require("com/fido/sound/SoundManager"),
            GameoverScreen = function(app) {
                this.app = app, PIXI.DisplayObjectContainer.call(this), this.alpha = 0, this.bg = new PIXI.Sprite.fromFrame("PaperPanel.png"), this.bg.anchor.set(.5), this.addChild(this.bg), this.restartButton = new PiriPiriButton("Restart.png"), this.restartButton.onPress.add(this.onPress, this), this.restartButton.view.x = 0, this.restartButton.view.y = 155, this.addChild(this.restartButton.view), this.menuButton = new PiriPiriButton("LevelMenu.png"), this.menuButton.onPress.add(this.onPress, this), this.menuButton.view.x = -115, this.menuButton.view.y = 155, this.addChild(this.menuButton.view), this.continueButton = new PiriPiriButton("Continue.png"), this.continueButton.onPress.add(this.onPress, this), this.continueButton.view.x = 115, this.continueButton.view.y = 155, this.addChild(this.continueButton.view), this.resultText = new PIXI.Text("", {
                    fill: "white",
                    font: "26px Arial",
                    dropShadow: !0,
                    wordWrap: !0,
                    wordWrapWidth: 360
                }), this.resultText.x = -315, this.resultText.y = -40, this.alpha = 0, this.title = new PIXI.Sprite.fromFrame("OhNo.png"), this.addChild(this.title), this.title.anchor.set(.5), this.title.x = 0, this.title.y = -160, this.copy = new PIXI.Sprite.fromFrame("OhNoCopy.png"), this.copy.anchor.set(.5), this.copy.y = 55, this.addChild(this.copy), this.losePot = new PIXI.Sprite.fromFrame("NoBarrels.png"), this.addChild(this.losePot), this.losePot.anchor.set(.5), this.losePot.x = 0, this.losePot.y = -35, this.results = new PIXI.DisplayObjectContainer, this.addChild(this.results), this.results.x = -20, this.results.y = -40;
                var potSlot = new PIXI.Sprite.fromFrame("PotSlot.png"),
                    goldPot = new PIXI.Sprite.fromFrame("GoldPot.png");
                potSlot.pot = goldPot, potSlot.addChild(goldPot), goldPot.anchor.set(.5), potSlot.anchor.set(.5), this.results.addChild(potSlot), potSlot.x = -140, this.potSlot = potSlot, this.gemSlots = [];
                for (var i = 0; 3 > i; i++) {
                    var gemSlot = new PIXI.Sprite.fromFrame("GemSlot.png");
                    gemSlot.anchor.set(.5);
                    var gem = new PIXI.Sprite.fromFrame("LargeGem.png");
                    gem.anchor.set(.5), gemSlot.gem = gem, gemSlot.addChild(gem), this.results.addChild(gemSlot), this.gemSlots.push(gemSlot), gemSlot.x = 90 * i
                }
                this.burst = new PIXI.DisplayObjectContainer, this.sunBurstBG = PIXI.Sprite.fromImage(ASSET_URL + "img/game/SunburstBG.png"), this.sunBurstBG.scale.set(3.75), this.sunBurstBG.anchor.set(.5), this.sunBurstBG.blendMode = PIXI.blendModes.ADD, this.sunBurstFG = PIXI.Sprite.fromImage(ASSET_URL + "img/game/SunburstFG.png"), this.sunBurstFG.scale.set(1.6 * 1.5), this.sunBurstFG.anchor.set(.5), this.sunBurstFG.blendMode = PIXI.blendModes.ADD, this.sunBurstFG2 = PIXI.Sprite.fromImage(ASSET_URL + "img/game/SunburstFG.png"), this.sunBurstFG2.scale.set(3.75), this.sunBurstFG2.anchor.set(.5), this.sunBurstFG2.blendMode = PIXI.blendModes.ADD, this.sunBurstFG2.alpha = .6, this.burst.addChild(this.sunBurstBG), this.burst.addChild(this.sunBurstFG), this.burst.addChild(this.sunBurstFG2), this.addChildAt(this.burst, 0)
            };
        GameoverScreen.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), GameoverScreen.prototype.onShow = function() {
            var gameDetail = this.app.gameScreen.gameDetail;
            this.burst.visible = !1;
            var texts = ["So you played the level and its still locked? Are you cheating..."];
            gameDetail.levelState === Constants.LEVEL_STATES.UNLOCKED ? (texts = ["Failed - You ran out of bombs and didn't find a path"], this.title.setTexture(PIXI.Texture.fromFrame("OhNo.png")), this.copy.setTexture(PIXI.Texture.fromFrame("OhNoCopy.png")), this.losePot.visible = !0, this.results.visible = !1) : gameDetail.levelState === Constants.LEVEL_STATES.COMPLETE ? (texts = ["Success - You found a path to the gate"], this.title.setTexture(PIXI.Texture.fromFrame("GreatWork.png")), this.copy.setTexture(PIXI.Texture.fromFrame("GreatWorkCopy.png")), this.losePot.visible = !1, this.results.visible = !0, this.showResult(gameDetail.gemsGained)) : gameDetail.levelState === Constants.LEVEL_STATES.COMPLETE_WITH_GEMS && (texts = ["Success - You found a path to the gate and all of the gems!"], this.copy.setTexture(PIXI.Texture.fromFrame("AmazingCopy.png")), this.title.setTexture(PIXI.Texture.fromFrame("Amazing.png")), this.losePot.visible = !1, this.results.visible = !0, this.showResult(3));
            var randText = texts[Math.floor(Math.random() * texts.length)];
            this.resultText.setText(randText), gameDetail.nextLevelUnlocked || app.session.level >= 9 ? this.continueButton.enable() : this.continueButton.disable()
        }, GameoverScreen.prototype.showResult = function(gemCount) {
            var pot = this.potSlot.pot;
            pot.scale.set(5), pot.alpha = 0, pot.rotation = Math.random() - .5, this.copy.alpha = 0, TweenLite.to(pot.scale, .4, {
                x: 1,
                y: 1,
                ease: Bounce.easeOut,
                delay: .7
            }), TweenLite.to(pot, .8, {
                rotation: 0,
                ease: Bounce.easeOut,
                delay: .7
            }), TweenLite.to(pot, .1, {
                alpha: 1,
                ease: Sine.easeOut,
                delay: .7
            }), TweenLite.delayedCall(.85, this.pushDown.bind(this));
            for (var i = 0; i < this.gemSlots.length; i++) {
                var gem = this.gemSlots[i].gem;
                gem.setTexture(PIXI.Texture.fromFrame("LargeGem.png")), gem.scale.set(5), gem.alpha = 0, gem.rotation = Math.random() - .5;
                var delay = 1 + .2 * (i + 1);
                gemCount > i && (TweenLite.to(gem.scale, .4, {
                    x: 1,
                    y: 1,
                    ease: Bounce.easeOut,
                    delay: delay
                }), TweenLite.to(gem, .8, {
                    rotation: 0,
                    ease: Bounce.easeOut,
                    delay: delay
                }), TweenLite.to(gem, .1, {
                    alpha: 1,
                    ease: Sine.easeOut,
                    delay: delay
                }), TweenLite.delayedCall(1 + .2 * (i + 1) + .15, this.pushDown.bind(this)))
            }
            TweenLite.to(this.copy, .3, {
                alpha: 1,
                ease: Sine.easeOut,
                delay: 1.8 + .1
            }), 3 === gemCount && TweenLite.delayedCall(1.95, this.perfect.bind(this))
        }, GameoverScreen.prototype.perfect = function() {
            this.burst.visible = !0, SoundManager.sfx.play("perfect"), this.app.flash.flash(.1, 1.5);
            for (var i = 0; i < this.gemSlots.length; i++) {
                var gem = this.gemSlots[i].gem;
                gem.setTexture(PIXI.Texture.fromFrame("GoldGem.png"))
            }
        }, GameoverScreen.prototype.pushDown = function() {
            SoundManager.sfx.play("completeThud"), this.scale.x -= .1, this.rotation += .01
        }, GameoverScreen.prototype.updateTransform = function() {
            this.visible && (this.scale.x += .4 * (1 - this.scale.x), this.rotation += .4 * (0 - this.rotation), this.scale.y = this.scale.x, PIXI.DisplayObjectContainer.prototype.updateTransform.call(this), this.sunBurstBG.rotation += .0025, this.sunBurstFG.rotation -= .005, this.sunBurstFG2.rotation += .0075)
        }, GameoverScreen.prototype.onPress = function(bt) {
            bt === this.restartButton ? (this.app.gameScreen.game.reset(), this.app.overlayManager.hide()) : bt === this.menuButton ? (this.app.screenManager.gotoScreenByID("levelScreen"), this.app.overlayManager.hide()) : bt === this.scoresButton ? this.app.overlayManager.gotoScreenByID("scores") : bt === this.musicButton ? SoundManager.music.isMuted ? SoundManager.music.unmute() : SoundManager.music.mute() : bt === this.continueButton && (app.session.level++, app.session.level >= 10 ? this.app.overlayManager.gotoScreenByID("complete") : (this.app.gameScreen.game.reset(), this.app.overlayManager.hide()))
        }, GameoverScreen.prototype.resize = function(w, h) {
            this.w = w, this.h = h, this.x = w / 2, this.y = h / 2
        }, module.exports = GameoverScreen
    }), define("com/PiriPiriBlast/overlay/SettingsScreen", ["require", "exports", "module", "PIXI", "../../fido/sound/SoundManager", "../AabButton", "../buttons/AabIconButton", "../buttons/AabLabelButton"], function(require, exports, module) {
        {
            var PIXI = require("PIXI"),
                SoundManager = require("../../fido/sound/SoundManager"),
                AabIconButton = (require("../AabButton"), require("../buttons/AabIconButton"));
            require("../buttons/AabLabelButton")
        }
        SettingsScreen = function(app) {
            this.app = app, PIXI.DisplayObjectContainer.call(this), this.alpha = 0;
            var view = this;
            this.bg = new PIXI.Sprite.fromImage(ASSET_URL + "img/game/main_info_panel.png"), this.bg.anchor.set(.5), view.addChild(this.bg), this.sfxButton = new AabIconButton("button_icon_sfxOn.png"), this.sfxButton.onPress.add(this.onPress, this), this.sfxButton.view.x = -230, this.sfxButton.view.y = -17, view.addChild(this.sfxButton.view), this.musicButton = new AabIconButton("button_icon_musicOn.png"), this.musicButton.onPress.add(this.onPress, this), this.musicButton.view.x = -230, this.musicButton.view.y = 87, view.addChild(this.musicButton.view), SoundManager.sfx.onMuteToggle.add(this.onSfxMuteToggle, this), SoundManager.music.onMuteToggle.add(this.onMusicMuteToggle, this), this.title = new PIXI.Sprite.fromFrame("panel_title_settings.png"), this.title.anchor.set(.5), this.title.x = 0, this.title.y = -160, view.addChild(this.title), this.audioTitle = new PIXI.Sprite.fromFrame("settingsCopy_FX.png"), view.addChild(this.audioTitle), this.audioTitle.anchor.set(.5), this.audioTitle.x = -126, this.audioTitle.y = -20, this.musicTitle = new PIXI.Sprite.fromFrame("settingsCopy_music.png"), view.addChild(this.musicTitle), this.musicTitle.anchor.set(.5), this.musicTitle.x = -126, this.musicTitle.y = 85, this.audioTitle = new PIXI.Sprite.fromFrame("panel_title_audio.png"), view.addChild(this.audioTitle), this.audioTitle.anchor.set(.5), this.audioTitle.x = -226, this.audioTitle.y = -88, this.gameTitle = new PIXI.Sprite.fromFrame("panel_title_game.png"), view.addChild(this.gameTitle), this.gameTitle.anchor.set(.5), this.gameTitle.x = 100, this.gameTitle.y = -88
        }, SettingsScreen.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), SettingsScreen.prototype.onPress = function(bt) {
            bt === this.sfxButton ? SoundManager.sfx.isMuted ? SoundManager.sfx.unmute() : SoundManager.sfx.mute() : bt === this.musicButton && (SoundManager.music.isMuted ? SoundManager.music.unmute() : SoundManager.music.mute())
        }, SettingsScreen.prototype.onSfxMuteToggle = function() {
            this.sfxButton.setIcon(SoundManager.sfx.isMuted ? "button_icon_sfxOff.png" : "button_icon_sfxOn.png")
        }, SettingsScreen.prototype.onMusicMuteToggle = function() {
            this.musicButton.setIcon(SoundManager.music.isMuted ? "button_icon_musicOff.png" : "button_icon_musicOn.png")
        }, SettingsScreen.prototype.resize = function(w, h) {
            this.w = w, this.h = h, this.x = w / 2, this.y = h / 2
        }, module.exports = SettingsScreen
    }), define("com/fido/physics/Spring", ["require", "exports", "module"], function(require, exports, module) {
        var Spring = function() {
            this.x = 0, this.ax = 0, this.dx = 0, this.tx = 0, this.max = 160, this.damp = .6, this.springiness = .1
        };
        Spring.prototype.update = function() {
            this.ax = (this.tx - this.x) * this.springiness, this.dx += this.ax, this.dx *= this.damp, this.dx < -this.max ? this.dx = -this.max : this.dx > this.max && (this.dx = this.max), this.x += this.dx
        }, Spring.prototype.reset = function() {
            this.x = 0, this.ax = 0, this.dx = 0, this.tx = 0
        }, module.exports = Spring
    }), define("com/fido/ui/PixiScrollbar", ["require", "exports", "module", "../physics/Spring", "../../fido/Ticker", "./PixiTrackpad"], function(require, exports, module) {
        {
            var Ticker = (require("../physics/Spring"), require("../../fido/Ticker"));
            require("./PixiTrackpad")
        }
        PixiScrollBar = function(parameters) {
            this.topMargin = 15, this.bottomMargin = 15, this.yTouchOffset = 0, this.dragging = !1, this.trackpad = parameters.trackpad, this.targetPosition = {
                x: 0,
                y: 0
            }, this.container = parameters.target, this.guideLine = new PIXI.Sprite.fromFrame("panelDivider.png"), this.guideLine.anchor.set(1, 0), this.guideLine.position.x = 630, this.guideLine.position.y = 1, this.guideLine.height = 229, this.guideLine.hitArea = new PIXI.Rectangle(-10, 0, 40, 300), this.guideLine.interactive = !0, this.guideLine.buttonMode = !0, this.guideButton = new PIXI.Sprite.fromFrame("scroller.png"), this.guideButton.anchor.set(1, .5), this.guideButton.position.x = 642, this.guideButton.position.y = this.topMargin + .5 * this.guideButton.height, this.guideButton.buttonMode = !0, this.container.addChild(this.guideLine), this.container.addChild(this.guideButton), this.guideLine.touchstart = this.guideLine.mousedown = this.onDown.bind(this), this.guideLine.touchend = this.guideLine.touchendoutside = this.guideLine.mouseup = this.guideLine.mouseupoutside = this.onUp.bind(this), this.guideLine.mousemove = this.guideLine.touchmove = this.onMove.bind(this), Ticker.instance.add(this.update, this)
        }, PixiScrollBar.prototype.onDown = function(data) {
            this.dragging = !0, this.yTouchOffset = data.getLocalPosition(this.guideButton).y, this.onMove(data)
        }, PixiScrollBar.prototype.onUp = function() {
            this.dragging = !1, this.yTouchOffset = 0
        }, PixiScrollBar.prototype.onMove = function(data) {
            this.panelHeight = this.container.viewHeight, this.scrollHeight = this.container.scrollHeight - this.panelHeight, this.scrollBarPercentage = 0, this.scrollableDistance = this.panelHeight - this.topMargin - this.bottomMargin - this.guideButton.height, this.scrollBarRatio = this.scrollHeight / this.scrollableDistance, this.dragging === !0 && (this.targetPosition = data.getLocalPosition(this.container), this.targetPosition.y < this.topMargin + .5 * this.guideButton.height && (this.targetPosition.y = this.topMargin + .5 * this.guideButton.height), this.targetPosition.y > this.scrollableDistance + this.topMargin + .5 * this.guideButton.height && (this.targetPosition.y = this.scrollableDistance + this.topMargin + .5 * this.guideButton.height))
        }, PixiScrollBar.prototype.update = function() {
            if (this.dragging) {
                var newY = -((this.guideButton.position.y - this.topMargin - .5 * this.guideButton.height) * this.scrollBarRatio);
                this.trackpad.easeToPosition(0, newY), this.guideButton.position.y = this.targetPosition.y
            } else this.guideButton.position.y = -1 * this.trackpad.valueY / this.scrollBarRatio + this.topMargin + .5 * this.guideButton.height
        }, module.exports = PixiScrollBar
    }), define("com/fido/ui/PixiTrackpad", ["require", "exports", "module", "../physics/Spring", "./PixiScrollbar", "../Device", "Signals"], function(require, exports, module) {
        var Spring = require("../physics/Spring"),
            Device = (require("./PixiScrollbar"), require("../Device")),
            Signal = require("Signals");
        PixiTrackpad = function(parameters) {
            this.spring = new Spring, this.onScrollUpdate = new Signal, this.target = parameters.target, this.value = 0, this.easingValue = 0, this.dragOffset = 0, this.dragging, this.speed = 0, this.size = 800, this.maxSlots = 1, this.capMovement = !0, this.prevPosition = 0, this.valueY = 0, this.easingValueY = 0, this.dragOffsetY = 0, this.speedY = 0, this.prevPositionY = 0, this.didMove = !0, this.target.interactive = !0, this.scrollMin = -600, this.scrollMax = 0, this.scrollMinY = -600, this.scrollMaxY = 0, this.snapTo = !1, this.currentSlot = 0, "undefined" != typeof parameters.scrollbar && Device.instance.isMobile === !1 && Device.instance.iPad === !1, this.target.touchstart = this.target.mousedown = this.onDown.bind(this)
        }, PixiTrackpad.constructor = PixiTrackpad, PixiTrackpad.prototype.unlock = function() {
            this.locked = !1, this.speed = 0, this.easingValue = this.value
        }, PixiTrackpad.prototype.lock = function() {
            this.locked = !0
        }, PixiTrackpad.prototype.update = function() {
            if (this.value = this.easingValue, this.valueY = this.easingValueY, this.dragging) {
                var newSpeed = this.easingValue - this.prevPosition;
                newSpeed *= .7, this.speed += .5 * (newSpeed - this.speed), this.prevPosition = this.easingValue;
                var newSpeedY = this.easingValueY - this.prevPositionY;
                newSpeedY *= .7, this.speedY += .5 * (newSpeedY - this.speedY), this.prevPositionY = this.easingValueY
            } else this.snapTo ? (this.spring.update(), this.easingValue = this.spring.x) : (this.speed *= .95, this.easingValue += this.speed, this.speedY *= .95, this.easingValueY += this.speedY, this.capMovement && (this.easingValue > this.scrollMax ? this.easingValue += .3 * (this.scrollMax - this.easingValue) : this.easingValue < this.scrollMin && (this.easingValue += .3 * (this.scrollMin - this.easingValue)), this.easingValueY > this.scrollMaxY ? this.easingValueY += .3 * (this.scrollMaxY - this.easingValueY) : this.easingValueY < this.scrollMinY && (this.easingValueY += .3 * (this.scrollMinY - this.easingValueY))))
        }, PixiTrackpad.prototype.setPosition = function(value, valueY) {
            this.value = this.easingValue = value, this.valueY = this.easingValueY = valueY
        }, PixiTrackpad.prototype.easeToPosition = function(value, valueY) {
            this.easingValue = value, this.easingValueY = valueY
        }, PixiTrackpad.prototype.onDown = function(data) {
            this.locked || (this.didMove = !1, this.checkX = data.global.x, max = 30, damp = .85, springiness = .09, this.dragging = !0, this.dragOffset = data.global.x - this.value, this.dragOffsetY = data.global.y - this.valueY, this.target.touchend = this.target.touchendoutside = this.target.mouseup = this.target.mouseupoutside = this.onUp.bind(this), this.target.touchmove = this.target.mousemove = this.onMove.bind(this))
        }, PixiTrackpad.prototype.onUp = function() {
            if (!this.locked) {
                if (this.dragging = !1, this.snapTo) {
                    if (this.didMove) {
                        if (this.spring.dx = this.speed, this.speed < 0) var target = Math.floor(this.easingValue / this.size);
                        else var target = Math.ceil(this.easingValue / this.size);
                        target > 0 ? target = 0 : target < -this.maxSlots && (target = -this.maxSlots), this.currentSlot = -target, this.spring.tx = target * this.size
                    }
                    this.spring.x = this.easingValue
                }
                this.target.mouseup = null, this.target.mousemove = null
            }
        }, PixiTrackpad.prototype.nextSlot = function() {
            this.currentSlot++, this.spring.tx -= this.size, this.spring.tx < -(this.maxSlots * this.size) && (this.spring.tx = -(this.maxSlots * this.size))
        }, PixiTrackpad.prototype.previousSlot = function() {
            this.currentSlot--, this.spring.tx += this.size, this.spring.tx > 0 && (this.spring.tx = 0)
        }, PixiTrackpad.prototype.setSize = function(size) {
            this.size = size, this.scrollbar && this.scrollBar.setSize(size)
        }, PixiTrackpad.prototype.setSlots = function(slots) {
            this.maxSlots = slots - 1, this.scrollMin = this.maxSlots * this.size
        }, PixiTrackpad.prototype.onMove = function(data) {
            var dist = Math.abs(this.checkX - data.global.x);
            dist > 2 && (this.didMove = !0), this.easingValue = data.global.x - this.dragOffset, this.easingValueY = data.global.y - this.dragOffsetY, this.capMovement && (this.easingValue > this.scrollMax ? this.easingValue = this.scrollMax + .3 * (this.easingValue - this.scrollMax) : this.easingValue < this.scrollMin && (this.easingValue = this.scrollMin + .3 * (this.easingValue - this.scrollMin)), this.easingValueY > this.scrollMaxY ? this.easingValueY = this.scrollMaxY + .3 * (this.easingValueY - this.scrollMaxY) : this.easingValueY < this.scrollMinY && (this.easingValueY = this.scrollMinY + .3 * (this.easingValueY - this.scrollMinY)))
        }, module.exports = PixiTrackpad
    }), define("com/PiriPiriBlast/overlay/TutorialScreen", ["require", "exports", "module", "PIXI", "../AabButton", "../../fido/sound/SoundManager", "../../fido/ui/PixiTrackpad", "../buttons/AabIconButton", "../../fido/Ticker", "com/piripiriblast/buttons/PiriPiriButton", "com/fido/buttons/Button", "com/fido/tracking/Tracking"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            PixiTrackpad = (require("../AabButton"), require("../../fido/sound/SoundManager"), require("../../fido/ui/PixiTrackpad")),
            PiriPiriButton = (require("../buttons/AabIconButton"), require("../../fido/Ticker"), require("com/piripiriblast/buttons/PiriPiriButton")),
            Button = require("com/fido/buttons/Button"),
            //Tracking = require("com/fido/tracking/Tracking"),
            TutorialScreen = function(app) {
                this.app = app, PIXI.DisplayObjectContainer.call(this), this.hitArea = new PIXI.Rectangle(-900, -800, 1800, 1600);
                var bg = new PIXI.Sprite.fromFrame("PaperPanel.png");
                this.addChild(bg), bg.anchor.set(.5);
                var trackpadParameters = {
                    target: this
                };
                this.trackpad = new PixiTrackpad(trackpadParameters), this.trackpad.snapTo = !0, this.trackpad.size = 600, this.slot = 0, this.dots = [];
                var pagesData = ["HowTo1.png", "HowTo2.png", "HowTo3.png", "HowTo4.png", "HowTo5.png", "HowTo6.png"];
                this.trackpad.setSlots(pagesData.length), this.trackpad.scrollMin = -1e5, this.pages = [];
                var helpTitle = new PIXI.Sprite.fromFrame("HowToPlay.png");
                this.addChild(helpTitle), helpTitle.anchor.set(.5), helpTitle.y = -155;
                for (var pad = 25, j = 0; j < pagesData.length; j++) {
                    var dot = new PIXI.Sprite.fromFrame("PageMarker.png");
                    this.addChild(dot), dot.x = j * pad - pagesData.length * pad / 2, dot.y = 145, this.dots.push(dot)
                }
                this.helpContainer = new PIXI.DisplayObjectContainer, this.addChild(this.helpContainer);
                for (var i = 0; i < pagesData.length; i++) {
                    var page = new PIXI.Sprite.fromFrame(pagesData[i]);
                    this.addChild(page), page.anchor.set(.5), page.y = -10, this.helpContainer.addChild(page), this.pages.push(page)
                }
                this.helpButton = new PiriPiriButton("Help.png"), this.addChild(this.helpButton.view), this.helpButton.view.position.x = 866, this.helpButton.view.position.y = 102;
                var masky = new PIXI.Graphics;
                masky.beginFill(16763904), masky.drawRect(0, 0, 592, 200), masky.x = -297, masky.y = -100, this.addChild(masky), this.helpContainer.mask = masky;
                var backButton = new PiriPiriButton("Back.png");
                this.addChild(backButton.view), backButton.onPress.add(this.onBackPressed, this), backButton.view.position.x = -140, backButton.view.position.y = 158, this.backButton = backButton, backButton.view.alpha = 0, backButton.view.interactive = !1;
                var forwardButton = new PiriPiriButton("Forward.png");
                this.addChild(forwardButton.view), forwardButton.onPress.add(this.onForwardPressed, this), forwardButton.view.position.x = 140, forwardButton.view.position.y = 158, this.forwardButton = forwardButton;
                var closeButton = new CloseButton;
                this.addChild(closeButton.view), closeButton.onPress.add(this.onClosePressed, this), closeButton.view.position.x = 265, closeButton.view.position.y = -255, this.closeButton = closeButton
            };
        TutorialScreen.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), TutorialScreen.prototype.onShow = function() {
            
        }, TutorialScreen.prototype.onBackPressed = function() {
            this.trackpad.previousSlot()
        }, TutorialScreen.prototype.onForwardPressed = function() {
            this.trackpad.nextSlot()
        }, TutorialScreen.prototype.onClosePressed = function() {
            this.app.overlayManager.hide()
        }, TutorialScreen.prototype.updateTransform = function() {
            if (this.visible) {
                this.trackpad.update();
                for (var i = 0; i < this.pages.length; i++) {
                    var page = this.pages[i];
                    page.position.x = this.trackpad.value + i * this.trackpad.size, page.visible = page.position.x > -600 && page.position.x < 1500, this.dots[i].alpha = this.trackpad.currentSlot == i ? 1 : .5
                }
                if (this.trackpad.currentSlot != this.slot) {
                    this.slot = this.trackpad.currentSlot;
                    var backVisible = 0 != this.slot;
                    this.backButton.isVisible != backVisible && (this.backButton.isVisible = backVisible, this.backButton.view.interactive = backVisible, TweenLite.to(this.backButton.view, .3, {
                        alpha: backVisible ? 1 : 0,
                        ease: Sine.easeOut
                    }));
                    var forwardVisible = this.slot < this.pages.length - 1;
                    this.forwardButton.isVisible != forwardVisible && (this.forwardButton.isVisible = forwardVisible, this.forwardButton.view.interactive = forwardVisible, TweenLite.to(this.forwardButton.view, .3, {
                        alpha: forwardVisible ? 1 : 0,
                        ease: Sine.easeOut
                    }))
                }
                PIXI.DisplayObjectContainer.prototype.updateTransform.call(this)
            }
        }, TutorialScreen.prototype.resize = function(w, h) {
            this.x = w / 2, this.y = h / 2, this.w = w, this.h = h
        };
        var CloseButton = function() {
            var view = new PIXI.Sprite.fromFrame("CloseUp.png");
            Button.call(this, view), this.view.mousedown = this.view.touchstart = function() {
                this.setTexture(PIXI.Texture.fromFrame("CloseClick.png"))
            }, this.view.mouseupoutside = this.view.mouseup = this.view.touchendoutside = this.view.touchend = function() {
                this.setTexture(PIXI.Texture.fromFrame("CloseUp.png"))
            }
        };
        module.exports = TutorialScreen
    }), define("com/PiriPiriBlast/overlay/CompleteScreen", ["require", "exports", "module", "PIXI", "../AabButton", "../Constants", "../../fido/sound/SoundManager", "../buttons/PiriPiriButton", "../buttons/TwoFrameButton", "com/fido/Utils", "com/piripiriblast/effects/SunBurst", "com/piripiriblast/GameSaveManager", "com/fido/share/Share", "com/fido/tracking/Tracking", "com/fido/Device"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            PiriPiriButton = (require("../AabButton"), require("../Constants"), require("../../fido/sound/SoundManager"), require("../buttons/PiriPiriButton")),
            TwoFrameButton = require("../buttons/TwoFrameButton"),
            GameSaveManager = (require("com/fido/Utils"), require("com/piripiriblast/effects/SunBurst"), require("com/piripiriblast/GameSaveManager")),
            Share = require("com/fido/share/Share"),
            //Tracking = require("com/fido/tracking/Tracking"),
            Device = require("com/fido/Device"),
            CompleteScreen = function(app) {
                this.app = app, PIXI.DisplayObjectContainer.call(this), this.alpha = 0, this.bg = new PIXI.Sprite.fromFrame("PaperPanel.png"), this.bg.anchor.set(.5), this.addChild(this.bg), this.menuButton = new PiriPiriButton("LevelMenu.png"), this.menuButton.onPress.add(this.onPress, this), this.menuButton.view.x = -215, this.menuButton.view.y = 155, this.addChild(this.menuButton.view), this.resultText = new PIXI.Text("", {
                    fill: "white",
                    font: "26px Arial",
                    dropShadow: !0,
                    wordWrap: !0,
                    wordWrapWidth: 360
                }), this.resultText.x = -315, this.resultText.y = -40, this.alpha = 0, this.icon = new PIXI.Sprite.fromFrame("GoldGem.png"), this.addChild(this.icon), this.icon.scale.set(.8), this.icon.anchor.set(.5), this.icon.x = -230, this.icon.y = -160, this.title = new PIXI.Sprite.fromFrame("Congratulations.png"), this.addChild(this.title), this.title.anchor.set(.5), this.title.x = 40, this.title.y = -160, this.copy = new PIXI.Sprite.fromFrame("PerfectCopy.png"), this.copy.anchor.set(.5), this.copy.x = 130, this.copy.y = 7, this.addChild(this.copy), this.wrap = new PIXI.Sprite.fromFrame("WrapPhoto.png"), this.addChild(this.wrap), this.wrap.anchor.set(.5), this.wrap.scale.set(.61), this.wrap.x = -150, this.wrap.y = -8, this.results = new PIXI.DisplayObjectContainer, this.addChild(this.results), this.results.x = -20, this.results.y = -40, this.burst = new PIXI.DisplayObjectContainer, this.sunBurstBG = PIXI.Sprite.fromImage(ASSET_URL + "img/game/SunburstBG.png"), this.sunBurstBG.scale.set(3.75), this.sunBurstBG.anchor.set(.5), this.sunBurstBG.blendMode = PIXI.blendModes.ADD, this.sunBurstFG = PIXI.Sprite.fromImage(ASSET_URL + "img/game/SunburstFG.png"), this.sunBurstFG.scale.set(1.6 * 1.5), this.sunBurstFG.anchor.set(.5), this.sunBurstFG.blendMode = PIXI.blendModes.ADD, this.sunBurstFG2 = PIXI.Sprite.fromImage(ASSET_URL + "img/game/SunburstFG.png"), this.sunBurstFG2.scale.set(3.75), this.sunBurstFG2.anchor.set(.5), this.sunBurstFG2.blendMode = PIXI.blendModes.ADD, this.sunBurstFG2.alpha = .6, this.burst.addChild(this.sunBurstBG), this.burst.addChild(this.sunBurstFG), this.burst.addChild(this.sunBurstFG2), this.addChildAt(this.burst, 0)
            };
        CompleteScreen.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), CompleteScreen.prototype.onShow = function() {
            this.app.gameScreen.gameDetail;
            this.burst.visible = !0, GameSaveManager.instance.isPerfectComplete() ? (this.copy.setTexture(PIXI.Texture.fromFrame("PerfectCopy.png")), this.icon.setTexture(PIXI.Texture.fromFrame("GoldGem.png"))) : (this.copy.setTexture(PIXI.Texture.fromFrame("CompleteCopy.png")), this.icon.setTexture(PIXI.Texture.fromFrame("GoldPot.png")))
        }, CompleteScreen.prototype.updateTransform = function() {
            this.visible && (this.scale.x += .4 * (1 - this.scale.x), this.rotation += .4 * (0 - this.rotation), this.scale.y = this.scale.x, PIXI.DisplayObjectContainer.prototype.updateTransform.call(this), this.sunBurstBG.rotation += .0025, this.sunBurstFG.rotation -= .005, this.sunBurstFG2.rotation += .0075)
        }, CompleteScreen.prototype.onPress = function(bt) {
        }, CompleteScreen.prototype.resize = function(w, h) {
            this.w = w, this.h = h, this.x = w / 2, this.y = h / 2
        }, module.exports = CompleteScreen
    }), define("com/PiriPiriBlast/overlay/OverlayManager", ["require", "exports", "module", "PIXI", "Signals", "../../fido/ScreenManager", "../buttons/AabIconButton", "../buttons/AabCloseButton", "./PauseScreen", "./GameoverScreen", "./SettingsScreen", "./TutorialScreen", "./CompleteScreen"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            Signal = require("Signals"),
            ScreenManager = require("../../fido/ScreenManager"),
            PauseScreen = (require("../buttons/AabIconButton"), require("../buttons/AabCloseButton"), require("./PauseScreen")),
            GameoverScreen = require("./GameoverScreen"),
            TutorialScreen = (require("./SettingsScreen"), require("./TutorialScreen")),
            CompleteScreen = require("./CompleteScreen"),
            OverlayManager = function(app) {
                this.app = app, this.view = new PIXI.DisplayObjectContainer, ScreenManager.call(this), this.tutorialScreen = new TutorialScreen(app), this.pauseScreen = new PauseScreen(app), this.gameoverScreen = new GameoverScreen(app), this.completeScreen = new CompleteScreen(app), this.gameoverScreen.hasClose = !1, this.addScreen(this.tutorialScreen, "help"), this.addScreen(this.pauseScreen, "pause"), this.addScreen(this.gameoverScreen, "gameover"), this.addScreen(this.completeScreen, "complete"), this.addScreen(new PIXI.DisplayObjectContainer, "empty"), this.onShow = new Signal, this.onHide = new Signal, this.black = (new PIXI.Graphics).beginFill(1706247).drawRect(0, 0, 100, 100), this.black.alpha = .7, this.black.interactive = !0, this.black.hitArea = new PIXI.Rectangle(0, 0, 1e4, 1e4), this.black.mousedown = this.black.touchstart = this.onMouseDown.bind(this), this.black.mouseup = this.black.touchend = this.onMouseUp.bind(this), this.black.click = this.black.tap = this.onPress.bind(this), this.view.visible = !1, this.view.addChild(this.black), this.view.addChild(this.container), this.app.screenManager.container.filterArea = new PIXI.Rectangle(0, 0, 1e4, 1e4)
            };
        OverlayManager.prototype = Object.create(ScreenManager.prototype), OverlayManager.prototype.onMouseUp = function() {}, OverlayManager.prototype.onMouseDown = function() {}, OverlayManager.prototype.onPress = function() {}, OverlayManager.prototype.goBack = function() {
            this.history.pop();
            var prev = this.history.pop();
            prev ? this.gotoScreen(prev) : this.hide()
        }, OverlayManager.prototype.show = function(screenId) {
            this.history = [], this.gotoScreenByID(screenId, !0), this.onShow.dispatch(), this.view.visible = !0, this.view.alpha = 0, TweenLite.to(this.view, .3, {
                alpha: 1
            })
        }, OverlayManager.prototype.gotoScreen = function(screen) {
            ScreenManager.prototype.gotoScreen.call(this, screen)
        }, OverlayManager.prototype.hide = function() {
            this.history = [], this.gotoScreenByID("empty"), this.view.visible = !1, this.onHide.dispatch()
        }, OverlayManager.prototype.resize = function(w, h) {
            this.black.scale.set(w / 100, h / 100), ScreenManager.prototype.resize.call(this, w, h)
        }, OverlayManager.prototype.onFadeout = function() {
            this.currentScreen && (this.currentScreen.onHidden && this.currentScreen.onHidden(), this.container.removeChild(this.currentScreen)), this.currentScreen = this.nextScreen, this.currentScreen.alpha = 0, this.currentScreen.onShow && this.currentScreen.onShow(), this.currentScreen.resize && this.currentScreen.resize(this.w, this.h), TweenLite.to(this.currentScreen, .4, {
                alpha: 1,
                onComplete: this.onFadein.bind(this)
            }), this.container.addChild(this.currentScreen)
        }, module.exports = OverlayManager
    }), define("com/fido/Flash", ["require", "exports", "module", "PIXI"], function(require, exports, module) {
        var PIXI = require("PIXI"),
            Flash = function(w, h) {
                PIXI.Graphics.call(this), this.beginFill(16777215).drawRect(0, 0, 100, 100), this.resize(w, h), this.alpha = 0
            };
        Flash.prototype = Object.create(PIXI.Graphics.prototype), Flash.prototype.flash = function(hold, out) {
            this.alpha = 1, TweenLite.to(this, out || .5, {
                alpha: 0,
                delay: hold || 0,
                ease: Expo.easeOut
            })
        }, Flash.prototype.resize = function(w, h) {
            this.scale.x = w / 100, this.scale.y = h / 100
        }, module.exports = Flash
    }), define("com/PiriPiriBlast/PiriPiriBlastApp", ["require", "exports", "module", "PIXI", "./../fido/App", "./../fido/Ticker", "./../fido/Device", "./../fido/ScreenManager", "./../fido/sound/SoundManager", "./LoaderScreen", "./LevelScreen", "./TitleScreen", "./GameScreen", "./TopMenu", "./overlay/Overlay", "./overlay/OverlayManager", "com/piripiriblast/GameSaveManager", "com/fido/Flash", "com/fido/share/Share", "com/fido/VisibilityChecker"], function(require, exports, module) {
        var PIXI = require("PIXI");
        window.PIXI = PIXI;
        var FidoApp = require("./../fido/App"),
            Ticker = require("./../fido/Ticker"),
            Device = require("./../fido/Device"),
            ScreenManager = require("./../fido/ScreenManager"),
            SoundManager = require("./../fido/sound/SoundManager"),
            LoaderScreen = require("./LoaderScreen"),
            LevelScreen = require("./LevelScreen"),
            TitleScreen = require("./TitleScreen"),
            GameScreen = require("./GameScreen"),
            TopMenu = require("./TopMenu"),
            OverlayManager = (require("./overlay/Overlay"), require("./overlay/OverlayManager")),
            GameSaveManager = require("com/piripiriblast/GameSaveManager"),
            Flash = require("com/fido/Flash"),
            Share = require("com/fido/share/Share"),
            VisibilityChecker = require("com/fido/VisibilityChecker"),
            PiriPiriBlastApp = function() {
                FidoApp.call(this), GameSaveManager.instance.loadGame(), this.orientation = void 0, this.isMobile = Device.instance.isMobile, this.view.style.position = "absolute", this.screenManager = new ScreenManager, this.safeSize = {
                    width: 1136,
                    height: 640
                }, this.maxSize = {
                    width: 1136,
                    height: 640
                }, this.stage.addChild(this.screenManager.container), this.loadCSS(ASSET_URL + "css/fonts.css"), this.loader.addPixiAssets([ASSET_URL + "img/game/InterfaceSprites.json", ASSET_URL + "img/game/WireframeGrid.jpg", ASSET_URL + "img/game/GameSprites.json"]), this.loader.onComplete.add(this.onAssetsLoaded, this), this.session = new FilmClubSession, this.loaderScreen = new LoaderScreen(this), this.screenManager.addScreen(this.loaderScreen, "loader"), this.screenManager.gotoScreenByID("loader"), this.rotateScreen = new Image, this.rotateScreen.src = ASSET_URL + "img/RotateDevice.jpg", this.rotateScreen.style.position = "absolute", this.rotateScreen.style.top = "0", this.rotateScreen.style.left = "0", this.rotateScreen.style.zIndex = 10, this.rotateScreen.style.display = "none", this.bg = new PIXI.Sprite.fromImage(ASSET_URL + "img/game/mapBG.jpg", !0), this.screenManager.container.addChildAt(this.bg, 0), document.body.appendChild(this.rotateScreen), this.logo = new PIXI.Sprite.fromImage(ASSET_URL + "img/MCTag.png", !0), this.logo.x = 60, this.stage.addChild(this.logo), VisibilityChecker.init()
            };
        PiriPiriBlastApp.prototype = Object.create(FidoApp.prototype), PiriPiriBlastApp.prototype.toggleBackground = function(state) {
            this.bg.visible = state
        }, PiriPiriBlastApp.prototype.loadCSS = function(url) {
            var link = document.createElement("link");
            link.type = "text/css", link.rel = "stylesheet", link.href = url, document.getElementsByTagName("head")[0].appendChild(link)
        }, PiriPiriBlastApp.prototype.onAssetsLoaded = function() {
            this.titleScreen = new TitleScreen(this), this.gameScreen = new GameScreen(this), this.levelScreen = new LevelScreen(this), this.screenManager.addScreen(this.titleScreen, "title"), this.screenManager.addScreen(this.gameScreen, "game"), this.screenManager.addScreen(this.levelScreen, "levelScreen"), this.topMenu = new TopMenu(this), this.stage.addChild(this.topMenu), this.overlayManager = new OverlayManager(this), this.stage.addChild(this.overlayManager.view), this.flash = new Flash(1e3, 1e3), this.stage.addChild(this.flash), this.resize(this.w, this.h), this.stage.addChild(this.logo), this.initSound()
        }, PiriPiriBlastApp.prototype.initSound = function() {
            SoundManager.music.addSound(ASSET_URL + "snd/music", "music", {
                loop: !0,
                volume: .5
            }), SoundManager.music.play("music"), SoundManager.sfx.addSound(ASSET_URL + "snd/button-roll", "buttonRoll"), SoundManager.sfx.addSound(ASSET_URL + "snd/button-click", "buttonPress", {
                volume: .5
            }), SoundManager.sfx.addSound(ASSET_URL + "snd/barrel-place", "placeBarrel"), SoundManager.sfx.addSound(ASSET_URL + "snd/barrel-blast", "explodeBarrel1"), SoundManager.sfx.addSound(ASSET_URL + "snd/pot-blast", "explodePot1"), SoundManager.sfx.addSound(ASSET_URL + "snd/pot-blast-2", "explodePot2"), SoundManager.sfx.addSound(ASSET_URL + "snd/level-perfect", "perfect"), SoundManager.sfx.addGroup(["explodePot1", "explodePot2"], "explodePot"), SoundManager.sfx.addGroup(["explodeBarrel1"], "explodeBarrel"), SoundManager.sfx.addSound(ASSET_URL + "snd/gem-drop", "gemDrop"), SoundManager.sfx.addSound(ASSET_URL + "snd/icon-thud", "completeThud"), SoundManager.sfx.addSound(ASSET_URL + "snd/gold-pot-get", "levelClear"), SoundManager.sfx.addSound(ASSET_URL + "snd/boots-walk", "bootsWalk", {
                loop: !0
            })
        }, PiriPiriBlastApp.prototype.resize = function(w, h) {
            this.w = w, this.h = h;
            var scale = 1;
            if (this.isMobile) {
                scale = window.devicePixelRatio ? window.devicePixelRatio : window.screen.deviceXDPI / window.screen.logicalXDPI;
                var isPortrate = h > w;
                void 0 === this.orientation ? this.orientation = isPortrate : this.orientation != isPortrate && (this.orientation = isPortrate)
            }
            var ratio = w / this.safeSize.width < h / this.safeSize.height ? w / this.safeSize.width : h / this.safeSize.height,
                w2 = Math.min(this.maxSize.width * ratio, w),
                h2 = Math.min(this.maxSize.height * ratio, h);
            if (h > w) {
                Ticker.instance.stop();
                var ratioImage = w / 288 > h / 446 ? w / 288 : h / 446;
                this.rotateScreen.width = 288 * ratioImage, this.rotateScreen.height = 446 * ratioImage, this.rotateScreen.style.left = w / 2 - 288 * ratioImage / 2 + "px", this.rotateScreen.style.top = h / 2 - 446 * ratioImage / 2 + "px", this.rotateScreen.style.display = "block"
            } else Ticker.instance.start(), this.rotateScreen.style.display = "none";
            this.renderer.resize(w2 * scale | 0, h2 * scale | 0), this.view.style.width = w2 + "px", this.view.style.height = h2 + "px", this.view.style.left = w / 2 - w2 / 2 + "px", this.view.style.top = h / 2 - h2 / 2 + "px", this.screenManager.resize(w2 / ratio, h2 / ratio), this.overlayManager && (this.overlayManager.resize(w2 / ratio, h2 / ratio), this.overlayManager.view.scale.set(ratio * scale), this.topMenu.scale.set(ratio * scale), this.topMenu.resize(w2 / ratio, h2 / ratio), this.flash.resize(w2 * scale, h2 * scale)), this.logo.scale.set(ratio * scale), this.screenManager.container.scale.set(ratio * scale)
        }, FilmClubSession = function() {
            this.character = 0, this.level = 0
        }, module.exports = PiriPiriBlastApp
    }), define("index", ["require", "exports", "module", "./com/PiriPiriBlast/PiriPiriBlastApp"], function(require, exports, module) {
        module.exports = {
            PiriPiriBlastApp: require("./com/PiriPiriBlast/PiriPiriBlastApp")
        }
    }), require.config({
        baseUrl: "../dev-src/",
        paths: {
            PIXI: "libs/pixi"
        }
    }), hasCanvasSupport()) require(["libs/EasePack.min", "libs/TweenLite.min", "libs/howler.min", "libs/sha1", "index"], function(a, b, c, d, e) {
    function resize() {
        {
            var container = document.getElementById("og-game-holder");
            container.getBoundingClientRect()
        }
        window.scrollTo(0, 0), app.resize(window.innerWidth, window.innerHeight)
    }
    var meta = document.createElement("meta");
    meta.name = "viewport", meta.content = "width=device-width, initial-scale=1.0, user-scalable=no", document.getElementsByTagName("head")[0].appendChild(meta), window.PiriPiriBlastApp = e.PiriPiriBlastApp, window.ASSET_URL = window.ASSET_URL || "assets/";
    var PiriPiriBlastApp = e.PiriPiriBlastApp;
    app = new PiriPiriBlastApp;
    var container = document.getElementById("og-game-holder");
    container.appendChild(app.view), container.style.background = "#3d221f", app.view.style.position = "absolute", app.view.style.top = 0, app.view.style.left = 0, window.addEventListener("resize", function() {
        setTimeout(resize, 100), setTimeout(resize, 200)
    }), setTimeout(resize, 100), setTimeout(resize, 200)
});
else {
    var config = {
            message: '<p>Uh-oh! It looks like you need to update your browser before you\'ll be able to play this game</p><p>In the meantime, check out <a href="#brand_url">this</a> or <a href="#cbeebies_games_url">this</a>.',
            brand_url: "http://www.someurl.tld/",
            games_url: "http://www.someurl.tld/",
            enabled: !0
        },
        message = config.message;
    message = message.replace("#brand_url", config.brand_url), message = message.replace("#games_url", config.games_url);
    var link = document.createElement("link");
    link.type = "text/css", link.rel = "stylesheet", link.href = "assets/css/unsupported.css", document.getElementsByTagName("head")[0].appendChild(link);
    var wrapper = document.getElementById("og-game-holder");
    wrapper.innerHTML = message
}
define("app", function() {});