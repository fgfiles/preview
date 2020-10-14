/* Version: 1.00.00 : Wednesday, December 17th, 2014, 12:24:50 PM :) */
(function() {
        var c= {
            text: {}
        }

        ; function aa(a, b) {
            this.Kg=parseInt(a.id); this.ec=parseInt(a.xadvance); this.Xh=parseInt(a.x); this.Yh=parseInt(a.y); this._width=parseInt(a.width); this._height=parseInt(a.height); this.Lf=parseInt(a.xoffset); this.Mf=parseInt(a.yoffset); this.Ug=a.letter; this.xd=b
        }

        var h=aa.prototype; h.hj=function() {
            return this.Kg
        }

        ; h.Nj=function() {
            return this.ec
        }

        ; h.getX=function() {
            return this.Xh
        }

        ; h.getY=function() {
            return this.Yh
        }

        ; h.Mj=function() {
            return this._width
        }

        ; h.fj=function() {
            return this._height
        }

        ;

        h.Oj=function() {
            return this.Lf
        }

        ; h.Pj=function() {
            return this.Mf
        }

        ; h.jj=function() {
            return this.Ug
        }

        ; h.U=function() {
            return this.xd
        }

        ; function ba(a, b, d) {
            this.Vg=a; this.$e=b; this.xd=d; this.yb=null; this.Kd= {}

            ; this.Sb= {}

            ; this.ri(b)
        }

        h=ba.prototype; h.ri=function(a) {
            if( !a|| !a.font)throw Error("[p3.FontAtlas] parseData: There is a problem with the data:", a); this.yb=a.font; for(var b, d=this.yb.chars["char"].length, e=0; e<d; ++e)a=this.yb.chars["char"][e], b=new PIXI.Texture(this.xd.baseTexture, new PIXI.Rectangle(parseInt(a.x), parseInt(a.y), parseInt(a.width), parseInt(a.height))), b=new aa(a, b), this.Kd[a.id]=b; this.ni()
        }

        ;

        h.ni=function() {
            var a=this.yb.kernings; if(a)for(var b=a.length, d=0; 127>d; ++d)for(var e=0; e<b; ++e) {
                var f=a[e]; f.first==d&&(void 0==this.Sb[d]&&(this.Sb[d]= {}

                    ), this.Sb[d][f.second]=f.amount)
            }
        }

        ; h.getName=function() {
            return this.Vg
        }

        ; h.getData=function() {
            return this.$e
        }

        ; h.U=function() {
            return this.xd
        }

        ; h.aj=function() {
            return this.yb
        }

        ; h.wj=function() {
            return this.yb.info.size
        }

        ; h.Sa=function(a) {
            if(null==this.Kd[a])throw Error("CharacterInfo not found!"); return this.Kd[a]
        }

        ; h.Ri=function() {
            return this.$e.font.chars["char"].length
        }

        ;

        h.ue=function(a, b) {
            var d=0; void 0 !=this.Sb[a]&&void 0 !=this.Sb[a][b]&&(d=this.Sb[a][b]); return d
        }

        ; c.ib= {}

        ; c.ib.Le="sound_group_music"; c.ib.mg="sound_group_sfx"; c.ib.Me="sound_group_vo"; function k(a, b) {
            a=parseInt(a); b=(b=parseInt(b))||0; var d; return b<a?(d=Math.round(Math.random()*(a-b)), Math.round(b+d)):b>a?(d=Math.round(Math.random()*(b-a)), Math.round(b-d)):a
        }

        function ca() {
            var a=(new Date).getTime(); return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(b) {
                    var d=(a+16*Math.random())%16|0; a=Math.floor(a/16); return("x"==b?d:d&7|8).toString(16)
                }

            )
        }

        ; function da(a) {
            this.params=a; this.Jb=new signals.Signal; this.Be=new signals.Signal; this.window=window=window.self; this.backgroundImage=this.qa=null; this.height=this.width=0; this.orientation=""; this.gd= !1; this.Ef=""; this.oa=document.getElementById(this.params.Zf); this.ja=document.getElementById(this.params.ei); m=this.Tg(); this.hf(); n=this.Rg(); this.Ng(); this.Vd(); this.Og(); this.Ef=this.params.width>this.params.height?"landscape":"portrait"; n&&this.Mg(); this.Cg()
        }

        var n, q=null, r=0, s=0, t=0, u=0, v=80, m= !1, h=da.prototype; h.init=function(a) {
            a?(this.oa.style.width=this.params.width+"px", this.oa.style.height=this.params.height+"px", r=this.width=this.params.width, s=this.height=this.params.height, this.Jb.dispatch(), this.Be.dispatch( !0)):(this.window.addEventListener("resize", this.sf.bind(this),  !1), this.zf(), a=this.Ye(), this.Gf( !a), a?(this.gd= !0, this.Jb.dispatch()):this.gd= !1, this.sf())
        }

        ;

        h.Fi=function() {
            var a=s; r=this.width=Math.floor(r); s=this.height=Math.floor(a); t=Math.floor(.5*r); u=Math.floor(.5*s)
        }

        ;

        h.Ng=function() {
            if(document.getElementById("gameHolder"))throw Error("[p3.Canvas] There is already a div/holder with that id on the page, are you using it? : gameHolder"); this.oa||(this.oa=document.createElement("div"), this.oa.id="gameHolder", document.body.appendChild(this.oa)); this.oa.style.left=0; this.oa.style.top=0; this.oa.style.overflow="visible"; this.oa.style.position="absolute"; this.oa.style.width=this.window.innerWidth+"px"; this.oa.style.height=this.window.innerHeight+"px"
        }

        ;

        h.Vd=function() {
            if(document.getElementById("gameCanvas"))throw Error("[p3.Canvas] There is already a canvas with that id on the page, are you using it? : gameCanvas"); this.ja||(this.ja=document.createElement("canvas"), this.ja.id="gameCanvas"); this.ja.style.position="absolute"; this.ja.style.left="0"; this.ja.style.top="0"; this.ja.style.bottom="0"; this.ja.style.right="0"; this.ja.style.width="100%"; this.ja.style.height="100%"; n&&(this.ja.style.margin="auto", this.ja.style.width="auto"); this.ja.style.overflow="visible"; this.ja.style.display="block"; this.oa.appendChild(this.ja); this.window.focus(); this.ja.tabIndex=1; q=this.ja
        }

        ;

        h.Og=function() {
            if(document.getElementById("imageOverlay"))throw Error("[p3.Canvas] There is already a div with that id on the page, are you using it? : imageOverlay"); this.qa=document.createElement("div"); this.qa.id="imageOverlay"; this.qa.style.left="0"; this.qa.style.top="0"; this.qa.style.width="auto"; this.qa.style.height="100%"; this.qa.style.marginLeft="auto"; this.qa.style.marginRight="auto"; this.qa.style.overflow="visible"; this.qa.style.display="none"; this.qa.style.backgroundColor=this.params.dg;
            this.qa.style.backgroundImage="url("+this.params.eg+")"; this.qa.style.backgroundPosition="50% 50%"; this.qa.style.backgroundRepeat="no-repeat"; this.qa.style.backgroundSize="contain"; this.oa.appendChild(this.qa)
        }

        ;

        h.Mg=function() {
            if(document.getElementById("backgroundImage"))throw Error("[p3.Canvas] There is already a div with that id on the page, are you using it? : backgroundImage"); this.backgroundImage=document.createElement("div"); this.backgroundImage.id="backgroundImage"; this.backgroundImage.style.left="0"; this.backgroundImage.style.top="0"; this.backgroundImage.style.height="100%"; this.backgroundImage.style.width="auto"; this.backgroundImage.style.overflow="visible"; this.backgroundImage.style.display="block";
            this.backgroundImage.style.backgroundImage="url("+this.params.Pf+")"; this.backgroundImage.style.backgroundPosition="50% 50%"; this.backgroundImage.style.backgroundRepeat="no-repeat"; this.backgroundImage.style.backgroundSize="auto 100%"; this.oa.appendChild(this.backgroundImage)
        }

        ; h.Ye=function() {
            this.orientation=this.window.innerWidth>this.window.innerHeight?"landscape":"portrait"; return this.orientation===this.Ef
        }

        ;

        h.zf=function() {
            n?(r=this.width=this.params.width, s=this.height=this.params.height):(r=this.width=this.ja.width=Math.floor(this.window.innerWidth/this.params.width*this.params.width*(this.params.height/this.window.innerHeight)), s=this.height=this.ja.height=this.params.height); this.Fi()
        }

        ; h.Gf=function(a) {
            a?(this.qa.style.display="block", this.ja.style.display="none"):(this.ja.style.display="block", this.qa.style.display="none")
        }

        ; h.Tg=function() {
            return"undefined" !==typeof this.window.orientation
        }

        ;

        h.hf=function() {
            return-1<navigator.userAgent.indexOf("Android")&&-1<navigator.userAgent.indexOf("Mozilla/5.0")&&-1<navigator.userAgent.indexOf("AppleWebKit")
        }

        ; h.Sg=function() {
            try {
                return window.self !==window.top
            }

            catch(a) {
                return !0
            }
        }

        ; h.Rg=function() {
            var a=new RegExp(/AppleWebKit\/([\d.]+)/), a=null===a.exec(navigator.userAgent)?null:parseFloat(a.exec(navigator.userAgent)[1]); return this.hf()&&null !==a&&537>a
        }

        ;

        h.Dg=function() {
            this.Sg()?(this.oa.style.width="100%", this.oa.style.height="100%"):(this.oa.style.width=this.window.innerWidth+"px", this.oa.style.height=this.window.innerHeight+"px"); var a=this.Ye(); a&&(this.zf(), this.gd||(this.gd= !0, this.Jb.dispatch())); this.Gf( !a); this.Be.dispatch(a)
        }

        ;

        h.Cg=function() {
            n&&(q.addEventListener("mousedown", function(a) {
                        a.stopPropagation(); a.preventDefault(); a.stopImmediatePropagation()
                    }

                    ,  !1), q.addEventListener("mouseup", function(a) {
                        a.stopPropagation(); a.preventDefault(); a.stopImmediatePropagation()
                    }

                    ,  !1), q.addEventListener("click", function(a) {
                        a.stopPropagation(); a.preventDefault(); a.stopImmediatePropagation()
                    }

                    ,  !1))
        }

        ; h.sf=function() {
            var a=this; setTimeout(function() {
                    a.Dg()
                }

                , 10)
        }

        ;

        function ea() {
            this.height=this.width=0; this.eg=this.ei=this.Zf=""; this.dg="#FFFFFF"; this.Pf=""
        }

        ; function fa() {
            if( !ga)throw Error("SoundManager is a Singleton, use 'getInstance()'."); this.Bi=new signals.Signal; this.Fe=new signals.Signal; this.Ai=new signals.Signal; this.Ka= !1; this.ua= {}

            ; this.vd=[]; this.ud=[]; this.wd=[]; this.td=this.sd=0; this.vf=null; var a=this.Xg.bind(this), b=this.ah.bind(this); window.addEventListener("blur", a); window.addEventListener("focus", b); window.addEventListener("pagehide", a); window.addEventListener("pageshow", b); this.reset()
        }

        fa.prototype.constructor=fa;

        function w() {
            ia||(ga= !0, ia=new fa, ga= !1); return ia
        }

        var ia=null, ga= !1, h=fa.prototype; h.reset=function() {
            for(var a in this.ua)this.ua.hasOwnProperty(a)&&this.ua[a].unload(); if(a=localStorage.getItem("mute")|| !1)a:switch(a.toLowerCase()) {
                case "true":case "yes":case "1":a= !0; break a; case "false":case "no":case "0":case null:a= !1; break a; default:a=Boolean(a)
            }

            this.Ka=a; this.ua= {}

            ; this.vd=[]; this.ud=[]; this.wd=[]; this.td=this.sd=0;  !0===this.Ka?Howler.mute():Howler.unmute()
        }

        ;

        h.re=function(a, b) {
            var d, e, f=[]; for(d=0; d<a.length; d++) {
                e=a[d]; var g=e.substr(e.lastIndexOf("/")+1), l=new ja; l.id=g; l.Tf=e; for(e=0; e<b.length; e++)g=b[e], l[g]=l.Tf+"."+g; f.push(l)
            }

            this.sd+=f.length; for(d=0; d<f.length; d++) {
                g=f[d]; l=g.id; e=[]; g.mp3&&e.push(g.mp3); g.ogg&&e.push(g.ogg); g.wav&&e.push(g.wav); g=g.group; e=new Howl( {
                        urls:e, autoplay: !1, onload:this.Ch.bind(this), onloaderror:this.Bh.bind(this), onend:this.Ah.bind(this)
                    }

                ); e.id=l; switch(g) {
                    case c.ib.Le:this.ud.push(e); break; case c.ib.Me:this.wd.push(e);
                    break; default:this.vd.push(e)
                }

                this.ua[l]=e
            }
        }

        ; h.ea=function(a, b, d) {
            var e; b=b||1; e=e||null; var f=this.ua[a]; if( !f)throw Error('[SoundManager.playSound] Sound does not exist: SoundID="'+a+'".'); f.loop(d); f.volume(b); e?f.fade(e.from, e.to, e.duration):f.play(); f.on("end", function() {
                    this.$f= !1
                }

            ); f.$f= !0; return f
        }

        ; h.Ak=function(a) {
            var b=this.ua[a]; if( !b)throw Error('[SoundManager.playSound] Sound does not exist: SoundID="'+a+'".'); b.stop(); b.$f= !1
        }

        ;

        h.Wj=function(a, b, d, e) {
            if( !a.length)throw Error("[SoundManager] Sound array is empty!"); var f=0; if(1<a.length&&(f=Math.floor(Math.random()*a.length), e)) {
                for(; f===this.vf; )f=Math.floor(Math.random()*a.length); this.vf=f
            }

            return this.ea(a[f], b, d)
        }

        ; h.Rj=function() {
            this.Ke( !0)
        }

        ; h.Ek=function() {
            this.Ke( !1)
        }

        ; h.Ke=function(a) {
            this.Ka=void 0==a? !this.Ka:a; for(var b in this.ua)this.ua.hasOwnProperty(b)&&this.mf(this.ua[b], this.Ka); this.Ka?Howler.mute():Howler.unmute(); localStorage.setItem("mute", this.Ka); this.Bi.dispatch(this.Ka)
        }

        ;

        h.Tj=function(a) {
            this.$d(this.vd, a); this.Fe.dispatch(a, c.ib.mg)
        }

        ; h.Sj=function(a) {
            this.$d(this.ud, a); this.Fe.dispatch(a, c.ib.Le)
        }

        ; h.Uj=function(a) {
            this.$d(this.wd, a); this.Fe.dispatch(a, c.ib.Me)
        }

        ; h.mf=function(a, b) {
            b?a.mute():a.unmute()
        }

        ; h.$d=function(a, b) {
            for(var d=0; d<a.length; d++)this.mf(a[d], b); this.yg(b)
        }

        ; h.yg=function(a) {
            a||(this.Ka=a)
        }

        ; h.Ch=function() {
            this.td+=1; this.td===this.sd&&this.Ai.dispatch()
        }

        ; h.Bh=function() {
            console.warn("[SoundManager._onSoundLoadError] Sound load Error - check the net in debug tools.")
        }

        ;

        h.Ah=function() {}

        ; h.Xg=function() {
            Howler.mute()
        }

        ; h.ah=function() {
            this.Ka||Howler.unmute()
        }

        ; h.yj=function() {
            return this.ua
        }

        ; h.Aj=function() {
            return this.vd
        }

        ; h.zj=function() {
            return this.ud
        }

        ; h.Bj=function() {
            return this.wd
        }

        ; h.xj=function() {
            var a=0, b; for(b in this.ua)this.ua.hasOwnProperty(b)&&(a+=1); return a
        }

        ; h.Qj=function() {
            var a="", b; for(b in this.ua)this.ua.hasOwnProperty(b)&&(a+="Sound:"+this.ua[b].id+"\n"); return a
        }

        ; function ja() {
            this.wav=this.ogg=this.mp3=this.Tf=this.id=""
        }

        ; function ka() {
            if( !la)throw Error("AssetManager is a Singleton, use 'getInstance()'."); x= !1; this.De=new signals.Signal; this.jg=new signals.Signal; this.progress=0; this.Gi= !0; this.Qf=.8; this.Jd= {}

            ; this.Te= {}

            ; this.Se= {}

            ; this.Ba=null; this.Za=[]; this.vc=[]; this.Wd= !1
        }

        var x; ka.prototype.constructor=ka; function y() {
            ma||(la= !0, ma=new ka, la= !1); return ma
        }

        var ma=null, la= !1, h=ka.prototype; h.reset=function() {
            this.progress=0; this.Za=[]; null !=this.Ba&&(this.Ba.onProgress=null, this.Ba=this.Ba.onComplete=null)
        }

        ;

        h.re=function(a, b, d) {
            d=d||""; w().re(a, b, d)
        }

        ; h.Nf=function(a, b) {
            this.Ih(a, b||""); this.Za=this.Za.concat(a)
        }

        ; h.load=function() {
            this.Ba=new PIXI.AssetLoader(this.Za, this.Gi); this.Ba.onProgress=this.wh.bind(this); this.Ba.onComplete=this.jh.bind(this); this.Ba.load(); this.Kf(); return this.Za
        }

        ;

        h.U=function(a, b) {
            try {
                var d=PIXI.Texture.fromFrame(a+(b||".png"))
            }

            catch(e) {
                if( !d)if(d=this.Te[a])d=PIXI.Texture.fromImage(d,  !0); else throw Error('[AssetManager.getTexture] - Texture does not exist, could not find a single image or Atlas with it: "'+a+'".');
            }

            return d
        }

        ; h.aa=function(a, b) {
            var d=this.U(a), d=new PIXI.Sprite(d); b&&(d.anchor.x=.5, d.anchor.y=.5); return d
        }

        ; h.Hb=function(a) {
            var b=this.Jd[a]; if( !b)throw Error('[AssetManager.getJSON] - Json does not exist: "'+a+'".'); return b
        }

        ;

        h.Gb=function(a) {
            var b=this.Se[a]; if( !b)throw Error('[AssetManager.getJSON] - FontAtlas does not exist: "'+a+'".'); return b
        }

        ; h.qj=function() {
            return this.Ba
        }

        ; h.mj=function() {
            return this.Za
        }

        ; h.Ih=function(a, b) {
            if(null !=b&&0<b.length)for(var d=a.length, e=0; e<d; e++)a[e]=b+a[e]
        }

        ; h.Kf=function() {
            this.Ba&&(this.progress=Math.ceil(100/this.Ba.assetURLs.length*(this.Ba.assetURLs.length-this.Ba.loadCount))); x&&console.log("[AssetManager._updateProgress] "+this.progress)
        }

        ; h.xg=function(a) {
            return a.font? !0: !1
        }

        ;

        h.qg=function(a) {
            for(var b, d, e, f=0; f<a.length; f++)b=a[f], e=PIXI.Texture.fromImage(b), b=na(b), d=this.Jd[b], d=new ba(b, d, e), this.Se[b]=d
        }

        ;

        h.wh=function(a) {
            this.Kf(); var b, d; switch(a.constructor) {
                case PIXI.JsonLoader:b=a.url; d=na(b); this.Jd[d]=a.json; this.xg(a.json)&&this.vc.push(a.baseUrl+a.json.font.pages.page.file); break; case PIXI.ImageLoader:b=a.texture.baseTexture.imageUrl; d=na(b); this.Te[d]=b; break; default:x&&console.warn('[AssetManager._onProgress] Found an unspecified object: "'+d+'".')
            }

            this.jg.dispatch(a, this.progress)
        }

        ;

        h.jh=function() {
            x&&console.log("[AssetManager._onLoaded] Loading Complete."); this.Wd&&(this.qg(this.vc), this.vc=[], this.Wd= !1); this.reset(); if(this.vc.length)this.Wd= !0, this.Nf(this.vc), this.load(), x&&console.log("[AssetManager._onLoaded] Loading Fonts."); else if(0<this.Qf) {
                var a=this; setTimeout(function() {
                        a.De.dispatch()
                    }

                    , 1E3*this.Qf)
            }

            else this.De.dispatch()
        }

        ; function na(a) {
            a=a.substr(a.lastIndexOf("/")+1); return a.substr(0, a.lastIndexOf("."))
        }

        ; function oa() {
            pa||(pa= !0)
        }

        function z() {
            qa||(qa=new oa); return qa
        }

        var qa=null, h=oa.prototype, pa= !1; h.Zd=null; h.init=function(a) {
            this.Zd=a
        }

        ; h.track=function(a) {
            this.Zd?this.Zd.track(a):console.warn("[p3.Tracking] track: There is no tracking module set up.")
        }

        ; function ra() {}

        h=ra.prototype; h.track=function() {}

        ; h.xe=function() {
            return !1
        }

        ; function sa() {}

        ; function A(a, b) {
            this.window=window.top||window; this.xe()&&this.window.ga("create", a, b)
        }

        A.prototype=Object.create(ra); A.prototype.constructor=A; h=A.prototype; h.track=function(a) {
            if(this.xe())switch(a&&a.type||console.warn("[p3.Tracking] racking data or data.type is invalid."), a.type) {
                case "page":this.window.ga("send", {
                        hitType:"pageview", page:"/"+a.page, title:a.page
                    }

                ); break; case "event":this.window.ga("send", {
                        hitType:"event", eventCategory:a.category, eventAction:a.action, eventLabel:a.label, eventValue:a.value
                    }

                )
            }
        }

        ;

        h.xe=function() {
            return false;
            // return this.window.ga? !0:(console.warn("[p3.Tracking] Google Analytics script is not found on the page."),  !1)
        }

        ; function B(a) {
            this.page=a; this.type="page"
        }

        B.prototype=Object.create(sa); B.prototype.constructor=B; Object.create(sa); function ta() {}

        ta.prototype.constructor=ta; var h=ta.prototype, ua=new signals.Signal, D=new signals.Signal, va= {}

        , wa= {}

        ; function xa() {
            document.addEventListener("keyup", function(a) {
                    delete va[a.keyCode]; delete wa[a.keyCode]; D.dispatch(a.keyCode)
                }

                ,  !1); document.addEventListener("keydown", function(a) {
                    va[a.keyCode]||(va[a.keyCode]= !0, wa[a.keyCode]= !0, ua.dispatch(a.keyCode))
                }

                ,  !1)
        }

        ; function ya(a) {
            E=1/a; this.Md=this.ve(); this.lf=1E3/(1/E-1); this.jb=0; this.zc= !0
        }

        var h=ya.prototype, E=0; h.init=function(a, b, d) {
            function e() {
                if(f.zc) {
                    var g=f.ve(), l=g-f.Md; f.Md=g; f.jb+=l; f.jb>f.lf&&(f.jb=f.lf); for(; f.jb>=E; )a.call(d), f.jb-=E; b.call(d)
                }

                requestAnimFrame(e)
            }

            this.Qg(); var f=this; requestAnimFrame(e)
        }

        ; h.reset=function() {
            this.Md=this.ve(); this.jb=0
        }

        ;

        h.Qg=function() {
            function a() {
                d.zc= !0; d.reset()
            }

            function b() {
                d.zc= !1; d.reset()
            }

            var d=this; window.addEventListener("blur", b); window.addEventListener("focus", a); window.addEventListener("pagehide", b); window.addEventListener("pageshow", a)
        }

        ; h.ve=function() {
            var a=window; return(a.performance&&a.performance.now?a.performance.now():(new Date).getTime())/1E3
        }

        ; Object.defineProperty(ya.prototype, "isRunning", {
                get:function() {
                    return this.zc
                }

                , set:function(a) {
                    this.reset(); this.zc=a
                }
            }

        ); function F() {
            this.dd=""; this.wf=this.fe= !1; this.pd=[]; this.xf=[]; this.zd=null; this.dd=""; this.wf=this.fe= !1; this.pd=[]; this.xf=[]; this.zd=null
        }

        h=F.prototype; F.prototype.group=function(a) {
            this.dd=a; return this
        }

        ; function za() {
            var a=(new F).group("group_game"); a.fe= !0; return a
        }

        function Aa() {
            var a=(new F).group("group_background"); a.pd=["group_preloader"]; return a
        }

        F.prototype.transition=function(a) {
            this.zd=a; return this
        }

        ; function G() {
            PIXI.DisplayObjectContainer.call(this); this.group=this.Wf=""; this.params=null
        }

        G.prototype=Object.create(PIXI.DisplayObjectContainer.prototype); G.prototype.constructor=G; h=G.prototype; h.Fb=function() {}

        ; h.activate=function() {}

        ; h.resize=function() {}

        ; h.dispose=function() {
            this.removeChildren(); this.Wf=""; this.params=this.group=null
        }

        ; h.update=function() {}

        ; function H(a, b, d) {
            this.multiline= !0; this.letterSpacing=0; this.se= !0; this._text=""; this.Ff=d||c.Hi.Ii; this.la=b; this.jd=null; this.Vb=0; if( !this.la)throw Error("Font atlas is invalid!"); PIXI.DisplayObjectContainer.call(this); this.text=a
        }

        (function() {
                var a=PIXI.DisplayObjectContainer; function b() {}

                b.prototype=a.prototype; H.Bk=a.prototype; H.prototype=new b; H.prototype.constructor=H
            }

        )(); h=H.prototype;

        h.di=function() {
            this._text||console.warn("[BitmapText] this._text is null."); this.jd=[]; if(this.multiline) {
                var a, b=0, d=this.Vb=0, e=this._text.length; if(1<e)for(; d<e-1; ) {
                    a=this._text.charCodeAt(d); if(10 !=a)try {
                        this.la.Sa(a)
                    }

                    catch(f) {
                        this.la.Sa(32), console.warn("[BitmapText] Character '"+String.fromCharCode(a)+"' ("+a+") not found!")
                    }

                    else a=this._text.substring(b, d), this.jd.push(a), ++this.Vb, b=d+1; ++d
                }

                b<e&&(a=this._text.substring(b, e), this.jd.push(a), ++this.Vb)
            }

            else this.Vb=1
        }

        ;

        h.ag=function(a, b, d) {
            var e; try {
                e=this.la.Sa(a)
            }

            catch(f) {
                e=this.la.Sa(32)
            }

            a=new PIXI.Sprite(e.U()); a.x=b+e.Lf; a.y=d+e.Mf; this.addChild(a)
        }

        ;

        h.yi=function() {
            if(0>=this.Uf())throw Error("[BitmapText] Invalid text field dimensions!"); var a, b, d, e, f, g=e=0, l=0, p=0, C=0; this.removeChildren(); if(this.multiline) {
                var M=null, ha=null; for(a=0; a<this.Vb; ++a)for(p=0, M=this.jd[a], C=this.Vf(M), ha=M.length, b=0; b<ha; ++b) {
                    d=M.charCodeAt(b); try {
                        f=this.la.Sa(d)
                    }

                    catch(Ha) {
                        f=this.la.Sa(32)
                    }

                    if(32 !=d) {
                        a<this._text.length&&this.se?(e=this._text.charCodeAt(a+1), l=this.la.ue(d, e)):l=0; switch(this.Ff) {
                            case "left":e=p; break; case "right":e=p-C; break; case "center":e=p-.5*C; break; default:throw Error("[BitmapText] Invalid text alignment!");
                        }

                        e=Math.floor(e); g=Math.floor(a*this.Uf()); this.ag(d, e, g); p+=f.ec+l+this.letterSpacing
                    }

                    else p+=f.ec+this.letterSpacing
                }
            }

            else for(C=this.Vf(this._text), b=this._text.length, a=0; a<b; ++a)if(d=this._text.charCodeAt(a), 10 !=d) {
                try {
                    f=this.la.Sa(d)
                }

                catch(Ia) {
                    f=this.la.Sa(32)
                }

                if(32 !=d) {
                    a<this._text.length&&this.se?(e=this._text.charCodeAt(a+1), l=this.la.ue(d, e)):l=0; switch(this.Ff) {
                        case "left":e=p; break; case "right":e=p-C; break; case "center":e=p-.5*C; break; default:throw Error("[BitmapText] Invalid text alignment!");
                    }

                    e=Math.floor(e); this.ag(d, e, g); p+=f.ec+l+this.letterSpacing
                }

                else p+=f.ec+this.letterSpacing
            }
        }

        ; Object.defineProperty(H.prototype, "text", {
                get:function() {
                    return this._text
                }

                , set:function(a) {
                    a !==this._text&&(this._text=a, this.di(), this.yi())
                }
            }

        ); h.Gb=function() {
            return this.la
        }

        ; h.bj=function() {
            return null !=this.la?this.la.font.info.face:""
        }

        ; h.cj=function() {
            return null !=this.la?this.la.font.info.size:0
        }

        ; h.pj=function() {
            return this.Vb
        }

        ;

        h.Vf=function(a) {
            for(var b=0, d=null, e=null, f=null, d=null, g=a.length, l=0; l<g; ++l)if(d=a.charCodeAt(l), 10 !=d) {
                try {
                    f=this.la.Sa(d)
                }

                catch(p) {
                    f=this.la.Sa(32)
                }

                l<this._text.length&&this.se?(e=this._text.charCodeAt(l+1), d=this.la.ue(d, e)):d=0; b+=f.ec+d+this.letterSpacing
            }

            return b
        }

        ; h.Uf=function() {
            return 0<this.lineHeight?this.lineHeight:this.la.yb.common.lineHeight
        }

        ; c.si= {}

        ; function Ba(a) {
            PIXI.Sprite.call(this, a); this.totalTime=this.currentTime=0; this.position=new PIXI.Point(0, 0); this.scale=new PIXI.Point(0, 0); this.start=new PIXI.Point(0, 0); this.velocity=new PIXI.Point(0, 0); this.anchor=new PIXI.Point(.5, .5); this.Of=this.xi=this.fg=this.Ae=this.Sf=this.Uc=this.Rf=this.jc=this.Ie=this.ze=this.rotation=this.alpha=0; this.isActive= !1; this.anchor.x=.5; this.anchor.y=.5
        }

        Ba.prototype=Object.create(PIXI.Sprite.prototype); Ba.prototype.constructor=Ba; function I(a, b, d, e) {
            PIXI.DisplayObjectContainer.call(this); this.Ce=new signals.Signal; this.$b=[]; this.ta=[]; this.cd=this.Rd=this.yd=this.ke=this.Oc=this.Nc=this.Cc=this.Yd=this.kd=this.me=this.Tc=this.de=this.Mc=this.xc=this.wc=this.Qc=this.Pc=this.Td=this.Sd=this.Sc=this.Rc=this.Ob=this.Nb=this.tc=this.rc=this.le=this.Cb=this.Xd=this.Tb=this.Ub=this.qc=this.oc=this.Pb=this.pc=this.nc=this.xb=this.mc=this.$a=this.sa=this.Qb=0; this.jf= !0; this.df=d; this.$b=void 0==a.length?[a]:a; if("string"===typeof this.$b[0])throw Error("[ParticleSystem] You are passing in strings for the textures instead of actual textures.");

            this.Gh(b); this.pe(); if(J&&(this.$a=this.Ub?Math.min(8192, this.Ub):8192, this.ee(this.Ub||32), e)) {
                var f=function() {
                    g.jf&&(g.update(), requestAnimFrame(f))
                }

                , g=this; requestAnimFrame(f)
            }
        }

        I.prototype=Object.create(PIXI.DisplayObjectContainer.prototype); I.prototype.constructor=I; var h=I.prototype, Ca=0, J= !0; h.start=function(a) {
            J&&(a=a||Number.MAX_VALUE, 0 !=this.mc&&(this.xb=a))
        }

        ; h.stop=function() {
            J&&(this.sa=this.xb=0)
        }

        ; h.pause=function() {
            J&&(this.xb=0)
        }

        ;

        h.reset=function() {
            if(J) {
                for(var a=0; a<this.sa; a+=1)this.Pd(this.ta[a]); this.sa=this.$a=0; this.si=[]; this.stop()
            }
        }

        ; h.Vj=function() {
            if(J) {
                this.stop(); for(var a=null, b=0; b<this.sa; ++b)this.Pd(this.ta[b]); for(b=0; b<this.$a; ++b)this.sa==this.ta.length&&this.ee(this.ta.length), a=this.ta[this.sa++], this.gf(a)
            }
        }

        ; h.zk=function(a) {
            if(J) {
                a=a||1E3; for(var b=0; b<a; b++)this.advance(E)
            }
        }

        ;

        h.advance=function(a) {
            if(J) {
                for(var b=0, d=null; b<this.sa; )if(d=this.ta[b], d.currentTime<d.totalTime)this.Ne(d, a), b+=1; else {
                    if(b !=this.sa-1) {
                        var e=this.ta[this.sa-1]; this.ta[this.sa-1]=d; this.ta[b]=e
                    }

                    this.sa-=1; this.Pd(d); 0==this.sa&&this.Ce.dispatch(this)
                }

                if(0<this.xb) {
                    b=1/this.mc; for(this.Qb+=a; 0<this.Qb; )this.sa<this.$a&&(this.sa==this.ta.length&&this.ee(this.ta.length), d=this.ta[this.sa++], this.gf(d), this.Ne(d, this.Qb)), this.Qb-=b; this.xb !=Number.MAX_VALUE&&(this.xb=Math.max(0, this.xb-a))
                }
            }
        }

        ;

        h.dispose=function() {
            this.jf= !1; this.Ce.removeAll(); this.Ce=null; this.$b=[]; this.ta=[]; this.removeChildren()
        }

        ; h.update=function() {
            J&&this.advance(E)
        }

        ;

        h.gf=function(a) {
            var b=this.Tb+this.Xd*(2*Math.random()-1); if( !(0>=b)) {
                var d=this.$b[Math.floor(Math.random()*this.$b.length)]; a.texture=d; a.currentTime=0; a.totalTime=b; a.xi=Ca++; a.isActive= !0; a.position.x=this.nc+this.oc*(2*Math.random()-1); a.position.y=this.pc+this.qc*(2*Math.random()-1); a.start.x=this.nc; a.start.y=this.pc; var e=this.Nb+this.Ob*(2*Math.random()-1), f=this.Pc+this.Qc*(2*Math.random()-1); a.velocity.x=f*Math.cos(e); a.velocity.y=f*Math.sin(e); a.jc=this.kd+this.Yd*(2*Math.random()-1);
                a.Rf=this.kd/b; a.Uc=this.Nb+this.Ob*(2*Math.random()-1); a.Sf=this.Nc+this.Oc*(2*Math.random()-1); a.ze=this.Mc+this.de*(2*Math.random()-1); a.Ie=this.Tc+this.me*(2*Math.random()-1); var f=this.Cb+this.le*(2*Math.random()-1), g=this.rc+this.tc*(2*Math.random()-1), f=Math.max(.1, f), g=Math.max(.1, g); a.scale.x=a.scale.y=f/d.width; a.fg=(g-f)/b/d.width; this.df?(a.rotation=e+1.57079637, a.Ae=0):(d=this.Rc+this.Sc*(2*Math.random()-1), e=this.Sd+this.Td*(2*Math.random()-1), a.rotation=d, a.Ae=(e-d)/b); d=this.ke; e=this.Rd; 0 !=this.yd&&(d+=this.yd*(2*Math.random()-1)); 0 !=this.cd&&(e+=this.cd*(2*Math.random()-1)); a.alpha=d; a.Of=(e-d)/b; this.addChild(a)
            }
        }

        ; h.Pd=function(a) {
            a.isActive= !1; this.removeChild(a)
        }

        ;

        h.Ne=function(a, b) {
            var d=a.totalTime-a.currentTime; b=d>b?b:d; a.currentTime+=b; if(1==this.Pb)a.Uc+=a.Sf*b, a.jc-=a.Rf*b, a.position.x=this.nc-Math.cos(a.Uc)*a.jc, a.position.y=this.pc-Math.sin(a.Uc)*a.jc, a.jc<this.Cc&&(a.currentTime=a.totalTime); else if(0==this.Pb) {
                var d=a.position.x-a.start.x, e=a.position.y-a.start.y, f=Math.sqrt(d*d+e*e), f=Math.max(.01, f), d=d/f, e=e/f, f=d, g=e, d=d*a.ze, e=e*a.ze, f=-g*a.Ie, g=f*a.Ie; a.velocity.x+=b*(this.wc+d+f); a.velocity.y+=b*(this.xc+e+g); a.position.x+=a.velocity.x*b;
                a.position.y+=a.velocity.y*b
            }

            a.scale.x=a.scale.y=a.scale.x+a.fg*b; a.alpha+=a.Of*b; this.df||(a.rotation+=.017453293*a.Ae*b)
        }

        ; h.pe=function() {
            this.mc=this.Ub/this.Tb
        }

        ;

        h.Gh=function(a) {
            if(void 0==a)throw Error("Config is invalid!"); a.configName&&0<a.configName.length?(this.oc=a.sourcePositionVariancex, this.qc=a.sourcePositionVariancey, this.wc=a.gravityx, this.xc=a.gravityy, this.Pb=a.emitterType, this.hg(a.maxParticles), this.gg(a.particleLifespan), this.Xd=a.particleLifespanVariance, this.Cb=a.startParticleSize, this.le=a.startParticleSizeVariance, this.rc=a.finishParticleSize, this.tc=a.finishParticleSizeVariance, this.Nb=.017453293*-a.angle, this.Ob=.017453293*a.angleVariance,
                this.Rc=a.rotationStart, this.Sc=a.rotationStartVariance, this.Sd=a.rotationEnd, this.Td=a.rotationEndVariance, this.Pc=a.speed, this.Qc=a.speedVariance, this.Mc=a.radialAcceleration, this.de=a.radialAccelVariance, this.Tc=a.tangentialAcceleration, this.me=a.tangentialAccelVariance, this.kd=a.maxRadius, this.Yd=a.maxRadiusVariance, this.Cc=a.minRadius, this.Nc=.017453293*a.rotatePerSecond, this.Oc=.017453293*a.rotatePerSecondVariance, this.ke=a.startColorAlpha, this.yd=a.startColorVarianceAlpha, this.Rd=a.finishColorAlpha,
                this.cd=a.finishColorVarianceAlpha):(this.oc=parseFloat(a.getElementsByTagName("sourcePositionVariance")[0].getAttribute("x")), this.qc=parseFloat(a.getElementsByTagName("sourcePositionVariance")[0].getAttribute("y")), this.wc=parseFloat(a.getElementsByTagName("gravity")[0].getAttribute("x")), this.xc=parseFloat(a.getElementsByTagName("gravity")[0].getAttribute("y")), this.Pb=parseInt(a.getElementsByTagName("emitterType")[0].getAttribute("value")), this.hg(parseInt(a.getElementsByTagName("maxParticles")[0].getAttribute("value"))),
                this.gg(Math.max(.01, parseFloat(a.getElementsByTagName("particleLifeSpan")[0].getAttribute("value")))), this.Xd=parseFloat(a.getElementsByTagName("particleLifespanVariance")[0].getAttribute("value")), this.Cb=parseFloat(a.getElementsByTagName("startParticleSize")[0].getAttribute("value")), this.le=parseFloat(a.getElementsByTagName("startParticleSizeVariance")[0].getAttribute("value")), this.rc=parseFloat(a.getElementsByTagName("finishParticleSize")[0].getAttribute("value")), this.tc=parseFloat(a.getElementsByTagName("FinishParticleSizeVariance")[0].getAttribute("value")),
                this.Nb=.017453293*-parseFloat(a.getElementsByTagName("angle")[0].getAttribute("value")), this.Ob=.017453293*parseFloat(a.getElementsByTagName("angleVariance")[0].getAttribute("value")), this.Rc=.017453293*parseFloat(a.getElementsByTagName("rotationStart")[0].getAttribute("value")), this.Sc=.017453293*parseFloat(a.getElementsByTagName("rotationStartVariance")[0].getAttribute("value")), this.Sd=.017453293*parseFloat(a.getElementsByTagName("rotationEnd")[0].getAttribute("value")), this.Td=.017453293*parseFloat(a.getElementsByTagName("rotationEndVariance")[0].getAttribute("value")),
                this.Pc=parseFloat(a.getElementsByTagName("speed")[0].getAttribute("value")), this.Qc=parseFloat(a.getElementsByTagName("speedVariance")[0].getAttribute("value")), this.Mc=parseFloat(a.getElementsByTagName("radialAcceleration")[0].getAttribute("value")), this.de=parseFloat(a.getElementsByTagName("radialAccelVariance")[0].getAttribute("value")), this.Tc=parseFloat(a.getElementsByTagName("tangentialAcceleration")[0].getAttribute("value")), this.me=parseFloat(a.getElementsByTagName("tangentialAccelVariance")[0].getAttribute("value")),
                this.kd=parseFloat(a.getElementsByTagName("maxRadius")[0].getAttribute("value")), this.Yd=parseFloat(a.getElementsByTagName("maxRadiusVariance")[0].getAttribute("value")), this.Cc=parseFloat(a.getElementsByTagName("minRadius")[0].getAttribute("value")), this.Nc=.017453293*parseFloat(a.getElementsByTagName("rotatePerSecond")[0].getAttribute("value")), this.Oc=.017453293*parseFloat(a.getElementsByTagName("rotatePerSecondVariance")[0].getAttribute("value")), this.ke=parseFloat(a.getElementsByTagName("startColor")[0].getAttribute("alpha")),
                this.yd=parseFloat(a.getElementsByTagName("startColorVariance")[0].getAttribute("alpha")), this.Rd=parseFloat(a.getElementsByTagName("finishColor")[0].getAttribute("alpha")), this.cd=parseFloat(a.getElementsByTagName("finishColorVariance")[0].getAttribute("alpha")))
        }

        ; h.ee=function(a) {
            var b=this.ta.length; for(a=Math.min(this.$a, b+a); b<a; b+=1)this.ta[b]=new Ba(this.$b[0])
        }

        ; h.Qi=function() {
            return this.ta.length
        }

        ; h.nj=function() {
            return this.$a
        }

        ; h.kk=function(a) {
            this.$a=Math.min(8192, a)
        }

        ; h.Si=function() {
            return this.mc
        }

        ;

        h.Zj=function(a) {
            this.mc=a
        }

        ; h.Wi=function() {
            return this.nc
        }

        ; h.ck=function(a) {
            this.nc=a
        }

        ; h.Yi=function() {
            return this.pc
        }

        ; h.ek=function(a) {
            this.pc=a
        }

        ; h.Vi=function() {
            return this.Pb
        }

        ; h.bk=function(a) {
            this.Pb=a
        }

        ; h.Xi=function() {
            return this.oc
        }

        ; h.dk=function(a) {
            this.oc=a
        }

        ; h.hi=function() {
            return this.qc
        }

        ; h.hi=function(a) {
            this.qc=a
        }

        ; h.oj=function() {
            return this.Ub
        }

        ; h.hg=function(a) {
            this.Ub=this.$a=a; this.pe()
        }

        ; h.kj=function() {
            return this.Tb
        }

        ; h.gg=function(a) {
            this.Tb=Math.max(.01, a); this.pe()
        }

        ; h.lj=function() {
            return this.Tb
        }

        ;

        h.jk=function(a) {
            this.Tb=a
        }

        ; h.Gj=function() {
            return this.Cb
        }

        ; h.tk=function(a) {
            this.Cb=a
        }

        ; h.Hj=function() {
            return this.Cb
        }

        ; h.uk=function(a) {
            this.Cb=a
        }

        ; h.Zi=function() {
            return this.rc
        }

        ; h.fk=function(a) {
            this.rc=a
        }

        ; h.$i=function() {
            return this.tc
        }

        ; h.gk=function(a) {
            this.tc=a
        }

        ; h.Ti=function() {
            return this.Nb
        }

        ; h.$j=function(a) {
            this.Nb=a
        }

        ; h.Ui=function() {
            return this.Ob
        }

        ; h.ak=function(a) {
            this.Ob=a
        }

        ; h.Ej=function() {
            return this.Rc
        }

        ; h.rk=function(a) {
            this.Rc=a
        }

        ; h.Fj=function() {
            return this.Sc
        }

        ;

        h.sk=function(a) {
            this.Sc=a
        }

        ; h.Cj=function() {
            return this.Pc
        }

        ; h.pk=function(a) {
            this.Pc=a
        }

        ; h.Dj=function() {
            return this.Qc
        }

        ; h.qk=function(a) {
            this.Qc=a
        }

        ; h.dj=function() {
            return this.wc
        }

        ; h.hk=function(a) {
            this.wc=a
        }

        ; h.ej=function() {
            return this.xc
        }

        ; h.ik=function(a) {
            this.xc=a
        }

        ; h.rj=function() {
            return this.Mc
        }

        ; h.lk=function(a) {
            this.Mc=a
        }

        ; h.Ij=function() {
            return this.Tc
        }

        ; h.vk=function(a) {
            this.Tc=a
        }

        ; h.sj=function() {
            return this.Cc
        }

        ; h.mk=function(a) {
            this.Cc=a
        }

        ; h.tj=function() {
            return this.Nc
        }

        ;

        h.nk=function(a) {
            this.Nc=a
        }

        ; h.uj=function() {
            return this.Oc
        }

        ; h.ok=function(a) {
            this.Oc=a
        }

        ; h.Kj=function() {}

        ; h.xk=function() {}

        ; function K() {
            PIXI.DisplayObjectContainer.call(this); var a=y(); this.od=0; this.$c=a.Hb("snap-copy"); this.be=new I([a.U("3_whitecloud")], a.Hb("3_whiteclouds"),  !1,  !0); this.be.start(); this.addChild(this.be); this.Yb=new I([a.U("5_purple_line1"), a.U("5_purple_line2")], a.Hb("5_purplelines"),  !0,  !0); this.Yb.start(); this.Yb.scale.x=this.Yb.scale.y=1; this.addChild(this.Yb); this.md=new I([a.U("4_particle1"), a.U("4_particle2"), a.U("4_particle3"), a.U("4_particle4")], a.Hb("4_multicolour_burst"),  !1,  !0); this.md.start();
            this.addChild(this.md); this.fa=a.aa("snap_cloud",  !0); this.fa.visible= !1; this.addChild(this.fa); var b, d; L?(b="snap_cpu", d="snap_player"):(b="snap_p1", d="snap_p2"); this.qd=a.aa(b,  !0); this.qd.visible= !1; this.fa.addChild(this.qd); this.rd=a.aa(d,  !0); this.rd.visible= !1; this.fa.addChild(this.rd); this.Eb=a.aa("winner_icon",  !0); this.Eb.y-=30; this.Eb.visible= !1; this.fa.addChild(this.Eb); this.cc=a.aa("winner_cpu_icon",  !0); this.cc.y-=30; this.cc.visible= !1; this.fa.addChild(this.cc); this.dc=new H("", a.Gb("garagebold_132"),
                "center"); this.dc.visible= !1; this.dc.y=60; this.fa.addChild(this.dc); this.position.x=t; this.position.y=u
        }

        K.prototype=Object.create(PIXI.DisplayObjectContainer.prototype); K.prototype.constructor=K; h=K.prototype;

        h.show=function(a, b, d) {
            this.od=a; if(d) {
                var e; if(L)switch(this.od) {
                    case 1:this.cc.visible= !0; e=this.$c.you_lost; break; case 2:this.Eb.visible= !0, e=this.$c.you_won
                }

                else {
                    switch(this.od) {
                        case 1:e=this.$c.p1_wins; break; case 2:e=this.$c.p2_wins
                    }

                    this.Eb.visible= !0
                }

                this.dc.text=e; this.dc.visible= !0
            }

            else switch(this.od) {
                case 1:this.qd.visible= !0; break; case 2:this.rd.visible= !0
            }

            this.fa.alpha=0; this.fa.scale.x=this.fa.scale.y=0; this.fa.visible= !0; TweenMax.to(this.fa.scale, b, {
                    x:1, y:1, onComplete:this.xh, onCompleteScope:this,
                    ease:Back.easeOut
                }

            ); TweenMax.to(this.fa, b, {
                    alpha:1, ease:Power2.easeOut
                }

            )
        }

        ; h.Yf=function() {
            this.be.dispose(); this.md.dispose(); this.Yb.dispose(); this.Yb=this.md=null; TweenMax.to(this.fa.scale, .2, {
                    x:.6, y:.6, onComplete:this.$g, onCompleteScope:this, ease:Power2.easeOut
                }

            ); TweenMax.to(this.fa, .2, {
                    alpha:0, onComplete:this.dispose, onCompleteScope:this, ease:Power2.easeOut
                }

            )
        }

        ; h.dispose=function() {
            this.parent&&this.parent.removeChild(this); this.removeChildren()
        }

        ; h.xh=function() {}

        ;

        h.$g=function() {
            this.fa.visible= !1; this.qd.visible= !1; this.rd.visible= !1; this.cc.visible= !1; this.Eb.visible= !1; this.dc.visible= !1
        }

        ; function N(a, b, d) {
            PIXI.DisplayObjectContainer.call(this); this.Vc=a; this.ye=b; this.Ad=d; this.ma=new signals.Signal; this.pa=new signals.Signal; this.Ge=new signals.Signal; this.Ee=new signals.Signal; this.He=new signals.Signal; this.enabled= !0; this.W=new PIXI.Sprite(this.Vc); this.W.anchor.x=.5; this.W.anchor.y=.5; this.W.interactive= !0; this.W.buttonMode= !0; this.W.oi=this.W.touchstart=this.nh.bind(this); this.W.pi=this.W.touchend=this.qh.bind(this); this.W.mouseover=this.oh.bind(this); this.W.mouseout=this.of.bind(this);
            this.W.qi=this.of.bind(this); this.W.click=this.mh.bind(this); this.W.tap=this.ph.bind(this); this.addChild(this.W)
        }

        N.prototype=Object.create(PIXI.DisplayObjectContainer.prototype); N.prototype.constructor=N; h=N.prototype;

        h.dispose=function() {
            this.ma.removeAll(); this.Ee.removeAll(); this.He.removeAll(); this.pa.removeAll(); this.Ge.removeAll(); this.Ge=this.pa=this.He=this.Ee=this.ma=null; this.removeChildren(); this.Ad=this.ye=this.Vc=this.W=this.W.oi=this.W.touchstart=this.W.pi=this.W.touchend=this.W.mouseover=this.W.mouseout=this.W.qi=this.W.click=this.W.tap=null
        }

        ; h.nh=function() {
            this.enabled&&(null !=this.Ad&&this.W.setTexture(this.Ad), this.Ee.dispatch(this))
        }

        ;

        h.qh=function() {
            this.enabled&&(this.W.setTexture(this.Vc), this.He.dispatch(this))
        }

        ; h.oh=function() {
            this.enabled&&(null !=this.ye&&this.W.setTexture(this.ye), this.pa.dispatch(this))
        }

        ; h.of=function() {
            this.enabled&&(this.W.setTexture(this.Vc), this.Ge.dispatch(this))
        }

        ; h.mh=function() {
            this.enabled&&this.ma.dispatch(this)
        }

        ; h.ph=function() {
            this.enabled&&this.ma.dispatch(this)
        }

        ; h.Pi=function() {
            return this.W
        }

        ; function O(a, b, d, e, f, g) {
            PIXI.DisplayObjectContainer.call(this); if( !(a&&b&&e&&f))throw Error("[p3.MuteButton] You must supply the relevant textures to the button. "); this.ma=new signals.Signal; this.pa=new signals.Signal; this.je=w(); this.na=new N(e, f, g); this.na.ma.add(this.Ec, this); this.na.pa.add(this.pf, this); this.addChild(this.na); this.fb=new N(a, b, d); this.fb.ma.add(this.Ec, this); this.fb.pa.add(this.pf, this); this.addChild(this.fb); this.Ze()
        }

        O.prototype=Object.create(PIXI.DisplayObjectContainer.prototype);

        O.prototype.constructor=O; h=O.prototype; h.dispose=function() {
            this.ma.removeAll(); this.pa.removeAll(); this.pa=this.ma=null; this.na.ma.removeAll(); this.na.pa.removeAll(); this.na.dispose(); this.na=null; this.fb.ma.removeAll(); this.fb.pa.removeAll(); this.fb.dispose(); this.je=this.fb=null; this.removeChildren()
        }

        ; h.Ze=function() {
            this.je.Ka?(this.na.visible= !1, this.fb.visible= !0):(this.na.visible= !0, this.fb.visible= !1)
        }

        ; h.Ec=function() {
            this.ma.dispatch(); this.je.Ke(); this.Ze()
        }

        ; h.pf=function() {
            this.pa.dispatch()
        }

        ; function P() {
            G.call(this); var a=y(); this.va=new signals.Signal; this.Ta=new signals.Signal; this.Ea=new K; this.Ea.show(Da, .5,  !0); this.addChild(this.Ea); var b=a.U("but_replay_default"), d=a.U("but_replay_rollover"), e=a.U("but_replay_pressed"), f=a.U("but_home_default"), g=a.U("but_home_rollover"), a=a.U("but_home_pressed"); this.ia=new N(b, d, e); this.ia.ma.addOnce(this.Fc, this); this.ia.pa.add(this.ab, this); this.addChild(this.ia); TweenMax.to(this.ia.scale, .4, {
                    yoyo: !0, repeat:-1, x:1.1, y:1.1, ease:Power1.easeInOut
                }

            );
            this.ha=new N(f, g, a); this.ha.ma.addOnce(this.ae, this); this.ha.pa.add(this.ab, this); this.addChild(this.ha); L&&1===Da?w().ea("sfx_aiwingame"):w().ea("sfx_playerwingame"); this.wa=this.Dc.bind(this); D.add(this.wa)
        }

        P.prototype=Object.create(G.prototype); P.prototype.constructor=P; h=P.prototype; h.Fb=function() {}

        ; h.activate=function() {}

        ; h.resize=function() {
            this.ia.position.x=t; this.ia.position.y=s-(.5*this.ia.height+v); this.ha.position.x=.5*this.ha.width+50; this.ha.position.y=.5*this.ha.height+50
        }

        ;

        h.dispose=function() {
            D.remove(this.wa); this.wa=null; this.va.removeAll(); this.Ta.removeAll(); this.Ta=this.va=null; this.ia.dispose(); this.ha.dispose(); this.Ea.dispose(); this.Ea=null; this.removeChildren(); G.prototype.dispose.call(this)
        }

        ; h.Oe=function() {
            this.ia.enabled=this.ha.enabled= !1; w().ea("sfx_click"); this.Ea.Yf(); TweenMax.to(this.ia, .2, {
                    alpha:0
                }

            ); TweenMax.to(this.ia.scale, .2, {
                    x:0, y:0
                }

            ); TweenMax.to(this.ha, .2, {
                    alpha:0
                }

            ); TweenMax.to(this.ha.scale, .2, {
                    x:0, y:0
                }

            )
        }

        ; h.Dc=function(a) {
            32==a&&this.Fc()
        }

        ;

        h.Fc=function() {
            this.Oe(); TweenMax.delayedCall(.2, function() {
                    this.va.dispatch()
                }

                , null, this)
        }

        ; h.ae=function() {
            w().ea("sfx_click"); this.Oe(); TweenMax.delayedCall(.2, function() {
                    this.Ta.dispatch()
                }

                , null, this)
        }

        ; h.Ec=function() {
            w().ea("sfx_click")
        }

        ; h.ab=function() {
            w().ea("sfx_rollover")
        }

        ; function Q() {
            G.call(this); this.Jb=new signals.Signal; this.Qe=.4; this.Re=70; this.og="0x4ab8e8"; this.Zh="0xf8eb46"; this.Kb=new PIXI.Graphics; this.addChild(this.Kb); this.fc=new PIXI.Graphics; this.addChild(this.fc); this.kb=y().aa("bg_left2",  !1); this.kb.anchor.x=1; this.kb.anchor.y=1; this.kb.alpha=this.Qe; this.addChild(this.kb); this.tb=y().aa("bg_right2",  !1); this.tb.anchor.x=0; this.tb.anchor.y=1; this.tb.alpha=this.Qe; this.addChild(this.tb)
        }

        Q.prototype=Object.create(G.prototype);

        Q.prototype.constructor=Q; h=Q.prototype; h.Fb=function() {
            this.Jb.dispatch()
        }

        ; h.activate=function() {}

        ; h.resize=function() {
            this.kb.x=t-this.Re; this.tb.x=t+this.Re; this.Kb.beginFill(this.og); this.Kb.drawRect(0, 0, t, s); this.Kb.endFill(); this.Kb.ci= !0; this.Kb.position.x=0; this.fc.beginFill(this.Zh); this.fc.drawRect(0, 0, t, s); this.fc.endFill(); this.fc.ci= !0; this.fc.position.x=t; this.kb.y=2*s; this.tb.y=2*s
        }

        ; h.dispose=function() {
            G.prototype.dispose.call(this)
        }

        ;

        h.kg=function(a) {
            TweenMax.to(this.kb, a, {
                    y:s, ease:Power2.easeInOut
                }

            ); TweenMax.to(this.tb, a, {
                    y:s, ease:Power2.easeInOut
                }

            )
        }

        ; h.Ci=function(a) {
            var b=2*s; TweenMax.to(this.kb, a, {
                    y:b, ease:Power2.easeInOut
                }

            ); TweenMax.to(this.tb, a, {
                    y:b, ease:Power2.easeInOut
                }

            )
        }

        ; c.Di= {}

        ; function R() {
            PIXI.DisplayObjectContainer.call(this); this.hb=new signals.Signal; this.Ua=new signals.Signal; this.Bd= !0; this.te= !1; this.vb="transition_cross"; this.ub=this.screen=null
        }

        R.prototype=Object.create(PIXI.DisplayObjectContainer.prototype); R.prototype.constructor=R; h=R.prototype; h.init=function(a, b) {
            this.ub=a; this.screen=b
        }

        ; h.Fd=function() {
            this.hb.dispatch(this)
        }

        ; h.Gd=function() {
            this.Ua.dispatch(this)
        }

        ;

        h.dispose=function() {
            this.hb.removeAll(); this.hb=null; this.Ua.removeAll(); this.screen=this.ub=this.Ua=null; this.removeChildren()
        }

        ; function S(a, b) {
            PIXI.DisplayObjectContainer.call(this); this.name=a; this.Od=b; this.ka=[]
        }

        S.prototype=Object.create(PIXI.DisplayObjectContainer.prototype); S.prototype.constructor=S; h=S.prototype; Object.defineProperty(h, "depth", {
                get:function() {
                    var a=this.parent; a&&a.children&&(this.Od=a.children.indexOf(this)); return this.Od
                }

                , set:function(a) {
                    this.Od=a
                }
            }

        ); c=c|| {}

        ; function Ea() {
            if( !Fa)throw Error("p3.ScreenManager is a Singleton, use 'getInstance()'."); this.Hd="group_default"; this.Qa=this.Ra=this.Ja=null; this.X= {}

            ; this.Ya=[]
        }

        function Ga() {
            Ja||(Fa= !0, Ja=new Ea, Fa= !1); return Ja
        }

        var Ja=null, Fa= !1, h=Ea.prototype; h.init=function(a, b) {
            this.X= {}

            ; this.Ya=[]; this.Ra=a; this.Qa=b; this.Ja=new PIXI.DisplayObjectContainer; this.Ra.addChild(this.Ja); this.hc(this.Hd, 0)
        }

        ;

        h.hc=function(a, b) {
            if( !this.Ja|| !this.Ra)throw Error('[ScreenManager.addScreenGroup] Error - The view/stage has not been set. Do that via "init" before adding screen groups.'); if(this.X[a])throw Error("[ScreenManager.addScreenGroup] The group already exists: "+a); b=this.Ue(b); var d=new S(a, b); this.Ja.addChildAt(d, d.depth); this.X[a]=d; this.Ya.push(d)
        }

        ;

        h.Ni=function(a, b) {
            var d=this.X[a]; if(d)this.Ja.addChildAt(d, this.Ue(b)); else throw Error("[ScreenManager.changeScreenGroupDepth] Error - The screengroup does not exist: "+a);
        }

        ; h.wi=function(a) {
            var b=this.X[a]; if(b) {
                for(var d=0; d<b.ka.length; d+=1)this.Bb(null, b.ka[d], b); b.ka=[]; b.removeChildren(); delete this.X[a]; a=this.Ya.indexOf(b); this.Ya.splice(a, 1)
            }

            else throw Error("[ScreenManager.removeScreenGroup] Error - The screengroup does not exist: "+a);
        }

        ;

        h.gb=function(a, b) {
            b=b||new F; if( !this.X[this.Hd])throw Error('[ScreenManager.addScreen] Error - There is no default group. Maybe you have not yet called "init" before adding screen the screen.'); if( !a)throw Error("[ScreenManager.addScreen] Error - The screen you are adding is null."); var d=b.dd||this.Hd; if(d&& !this.X[d])throw Error("[ScreenManager.addScreen] Error - The group does not exist: "+d); a.Wf=ca(); a.group=d; a.params=b; b.zd?this.Uh(a, b.zd):(this.Qd(a), this.cf(a))
        }

        ;

        h.Ib=function(a) {
            if(a)this.Bb(null, a, this.ji(a.group)); else throw Error("[ScreenManager.removeScreen] Error - The screen is null. "+a);
        }

        ; h.vi=function(a, b) {
            if( !a|| !this.X[a])throw Error("[ScreenManager.removeCurrentScreen] Error - You must supply a valid group name: "+a); var d=this.X[a], e=d.children.length; if(0<e) {
                var f=d.getChildAt(e-1); if( !b)this.Bb(null, f, d); else if(f !==b)this.Bb(null, f, d); else if(f===b)try {
                    (f=d.getChildAt(e-2))&&this.Bb(null, f, d)
                }

                catch(g) {}
            }
        }

        ;

        h.ui=function() {
            for(var a in this.X)if(this.X.hasOwnProperty(a))for(var b=this.X[a], d=0; d<b.ka.length; d++)this.Ib(b.ka[d])
        }

        ; h.dispose=function() {
            for(var a in this.X)this.X.hasOwnProperty(a)&&this.wi(a); Ja=this.Ra=this.Ja=this.X=this.Ya=null
        }

        ; h.update=function() {
            for(var a=0, b=this.Ya.length; a<b; a++)for(var d=this.Ya[a], e=0, f=d.ka.length; e<f; e++)d.ka[e].update()
        }

        ; h.resize=function() {
            for(var a=0, b=this.Ya.length; a<b; a++)for(var d=this.Ya[a], e=0, f=d.ka.length; e<f; e++)d.ka[e].resize()
        }

        ;

        h.contains=function(a) {
            var b= !1, d; for(d in this.X)if(this.X.hasOwnProperty(d))for(var e=this.X[d], f=0; f<e.ka.length; f+=1)if(a===e.ka[f]) {
                b= !0; break
            }

            return b
        }

        ; h.Ue=function(a) {
            var b=this.Ja.children.length; "undefined"===typeof a?a=b:a>b?a=b:0>a&&(a=0); return a
        }

        ;

        h.Qd=function(a) {
            var b, d, e, f; d=a.params.xf; var g=a.params.pd; if(0<d.length)for(b=0; b<d.length; b+=1) {
                e=d[b]; if(a===e)throw Error("[ScreenManager.addScreen] Error - You are trying to remove the screen you are adding: "+e); this.Ib(e)
            }

            if(0<a.params.pd.length)for(b=0; b<g.length; b+=1) {
                f=this.X[g[b]]; if(a.params.dd===f.name)throw Error("[ScreenManager.addScreen] Error - You are trying to remove the screen but the group specified does not contain the screen: "+f.name); for(d=0; d<f.ka.length; d+=1)e=f.ka[d],
                this.Bb(a, e, f)
            }

            a.params.fe&&this.vi(a.group, a); if(a.params.wf)for(var l in this.X)if(this.X.hasOwnProperty(l))for(f=this.X[l], b=f.ka.length-1; 0<=b; b-=1)e=f.ka[b], this.Bb(a, e, f)
        }

        ;

        h.Bb=function(a, b, d) {
            if(b)if(d) {
                if( !d.ka)throw Error("[ScreenManager._removeScreenFromGroup] Error - The screengroup does not have a valid scrennArray: "+d.name); if(b !==a) {
                    a=d.ka.indexOf(b); if(-1===a)throw Error("[ScreenManager._removeScreenFromGroup] Error - The group does not contain the screen. Group="+d.name); b.dispose(); b.removeChildren(); d.ka.splice(a, 1); d.removeChild(b)
                }
            }

            else throw Error("[ScreenManager._removeScreenFromGroup] Error - The screengroup does not exist: "+d.name); else throw Error("[ScreenManager._removeScreenFromGroup] Error - The screen does not exist: "+ b);
        }

        ; h.cf=function(a, b) {
            var d=this.X[a.group]; d.addChild(a); d.ka.push(a); a.Fb(); b||a.activate(); a.resize()
        }

        ; h.Uh=function(a, b) {
            b.hb.addOnce(this.Eh, this); b.Ua.addOnce(this.Fh, this); b.ub=this.gi(a.group); b.screen=a; b.Bd&&this.Ja.addChild(b); b.Fd()
        }

        ; h.Eh=function(a) {
            a.te||this.Qd(a.screen); this.cf(a.screen,  !0); a.Gd()
        }

        ; h.Fh=function(a) {
            a.te&&this.Qd(a.screen); a.Bd&&this.Ja.removeChild(a); a.screen.activate(); a.dispose()
        }

        ; h.ki=function() {
            return this.Ra
        }

        ; h.ii=function() {
            return this.Qa
        }

        ; h.Lj=function() {
            return this.Ja
        }

        ;

        h.gj=function() {
            return this.Ja.children.length
        }

        ; h.ji=function(a) {
            var b=this.X[a]; if(b)return b; throw Error("[ScreenManager.getScreenGroup] The group does not exist: "+a+". Maybe the screen is not the correct.");
        }

        ; h.gi=function(a) {
            if( !a|| !this.X[a])throw Error("[ScreenManager.getCurrentScreen] Error - The screen group is invalid: "+a); a=this.X[a]; return 0<a.children.length?a.getChildAt(a.children.length-1):null
        }

        ;

        h.Oi=function() {
            var a=[], b; for(b in this.X)if(this.X.hasOwnProperty(b))for(var d=this.X[b], e=0, f=d.ka.length; e<f; e++)a.push(d.ka[e]); return a
        }

        ; Object.defineProperty(h, "groups", {
                get:function() {
                    return this.X
                }
            }

        ); function T() {

            G.call(this); this.va=new signals.Signal; this.Ta=new signals.Signal; var a=y(), b=a.U("but_play_default"), d=a.U("but_play_rollover"), e=a.U("but_play_pressed"), f=a.U("but_home_default"), g=a.U("but_home_rollover"), l=a.U("but_home_pressed"), p=a.U("but_soundon_default"), C=a.U("but_soundon_rollover"), M=a.U("but_soundon_pressed"), ha=a.U("but_soundoff_default"), Ha=a.U("but_soundoff_rollover"), Ia=a.U("but_soundoff_pressed"); this.ia=new N(b, d, e); this.ia.ma.addOnce(this.Fc, this); this.ia.pa.add(this.ab,
                this); this.addChild(this.ia); TweenMax.to(this.ia.scale, .4, {
                    yoyo: !0, repeat:-1, x:1.1, y:1.1, ease:Power1.easeInOut
                }

            ); this.ha=new N(f, g, l); this.ha.ma.addOnce(this.ae, this); this.ha.pa.add(this.ab, this); this.addChild(this.ha); this.na=new O(ha, Ha, Ia, p, C, M); this.na.ma.addOnce(this.Ec, this); this.na.pa.add(this.ab, this); this.addChild(this.na); b=";"; b=a.Hb("snap-copy"); b=m?L?b.instructions_mobile_OnePlayer_1+"\n"+b.instructions_mobile_OnePlayer_2:b.instructions_mobile_TwoPlayer_1+"\n"+b.instructions_mobile_TwoPlayer_2: L?b.instructions_desktop_OnePlayer_1+"\n"+b.instructions_desktop_OnePlayer_2:b.instructions_desktop_TwoPlayer_1+"\n"+b.instructions_desktop_TwoPlayer_2; this.fd=a.aa("instructions_texbox",  !0); this.addChild(this.fd); this.Ud=new H(b, a.Gb("garagebold_92"), "center"); this.Ud.position.y=-Math.floor(.5*this.Ud.height); this.fd.addChild(this.Ud); this.Fa=L?a.aa("tutorial_img_1p",  !0):a.aa("tutorial_img_2p",  !0); this.addChild(this.Fa); m?(a=[a.U("tutorial_finger0001"), a.U("tutorial_finger0002")], this.yc=new PIXI.MovieClip(a),
                this.yc.animationSpeed=.05, this.yc.play(), this.addChild(this.yc), L||(this.pb=new PIXI.MovieClip(a), this.pb.animationSpeed=.05, this.pb.play(), this.addChild(this.pb))):(b=[a.U("tutorial_mouse0001"), a.U("tutorial_mouse0002")], this.zb=new PIXI.MovieClip(b), this.zb.animationSpeed=.05, this.zb.anchor.x=.5, this.zb.anchor.y=.5, this.zb.play(), this.addChild(this.zb), a=[a.U("tutorial_spacebar0001"), a.U("tutorial_spacebar0002")], this.rb=new PIXI.MovieClip(a), this.rb.animationSpeed=.05, this.rb.anchor.x=.5, this.rb.anchor.y=.5, this.rb.play(), this.addChild(this.rb)); this.wa=this.Dc.bind(this); D.add(this.wa)
        }

        T.prototype=Object.create(G.prototype); T.prototype.constructor=T; h=T.prototype; h.Fb=function() {}

        ; h.activate=function() {}

        ;

        h.resize=function() {
            this.Fa.position.x=t; this.Fa.position.y=u-50; this.fd.position.x=this.Fa.position.x; this.fd.position.y=this.Fa.position.y-240; this.ha.position.x=Math.floor(.5*this.ha.width)+50; this.ha.position.y=Math.floor(.5*this.ha.height)+50; this.na.position.x=-Math.floor(.5*this.na.width)+r-50; this.na.position.y=Math.floor(.5*this.na.height)+50; this.ia.position.x=t; this.ia.position.y=s-Math.floor(.5*this.ia.height)-v; m?(this.yc.position.x=this.Fa.position.x+60, this.yc.position.y=this.Fa.position.y+ 50, this.pb&&(this.pb.position.x=this.Fa.position.x-50, this.pb.position.y=this.Fa.position.y+50, this.pb.scale.x*=-1)):(this.rb.position.x=this.Fa.position.x, this.rb.position.y=this.Fa.position.y+195, this.zb.position.x=this.Fa.position.x+310, this.zb.position.y=this.rb.position.y)
        }

        ; h.dispose=function() {
            D.remove(this.wa); this.wa=null; this.Ta.removeAll(); this.va.removeAll(); this.va=this.Ta=null; this.ha.dispose(); this.ia.dispose(); this.na.dispose(); this.na=this.ia=this.ha=null; this.removeChildren(); G.prototype.dispose.call(this)
        }

        ;

        h.Dc=function(a) {
            32==a&&this.Fc()
        }

        ; h.Fc=function() {
            w().ea("sfx_click"); this.va.dispatch()
        }

        ; h.ae=function() {
            w().ea("sfx_click"); this.Ta.dispatch()
        }

        ; h.Ec=function() {
            w().ea("sfx_click")
        }

        ; h.ab=function() {
            w().ea("sfx_rollover")
        }

        ; function U() {
            G.call(this); this.va=new signals.Signal; var a=y(); this.Bc=a.aa("boomerang_logo_splash",  !0); this.addChild(this.Bc); this.mb=new PIXI.DisplayObjectContainer; this.mb.scale.x=this.mb.scale.y=.8; this.mb.rotation=-.17453292519943295; this.addChild(this.mb); this.nb=new PIXI.DisplayObjectContainer; this.nb.scale.x=this.nb.scale.y=.8; this.nb.rotation=.17453292519943295; this.addChild(this.nb); var b=V.cards, d=k(b.length-1), e=d; do e=k(b.length-1); while(e===d); d=a.aa(b[d],  !0); this.mb.addChild(d); b=a.aa(b[e],
                 !0); this.nb.addChild(b); b=a.aa("card_shadow",  !0); b.position.x-=40; b.position.y+=10; b.rotation=-.08726646259971647; this.mb.addChildAt(b, 0); b=a.aa("card_shadow",  !0); b.position.x+=40; b.position.y+=10; b.rotation=.08726646259971647; this.nb.addChildAt(b, 0); this.fa=a.aa("snap_cloud",  !0); this.addChild(this.fa); this.Th=a.aa("snap_splash",  !0); this.fa.addChild(this.Th); var b=a.U("but_1p_default"), e=a.U("but_1p_rollover"), d=a.U("but_1p_pressed"), f=a.U("but_2p_default"), g=a.U("but_2p_rollover"), a=a.U("but_2p_pressed");

            this.Pa=new N(b, e, d); this.Pa.ma.addOnce(this.qf, this); this.Pa.pa.add(this.ab, this); this.addChild(this.Pa); TweenMax.to(this.Pa.scale, .4, {
                    yoyo: !0, repeat:-1, x:1.1, y:1.1, ease:Power1.easeInOut
                }

            ); this.bb=new N(f, g, a); this.bb.ma.addOnce(this.vh, this); this.bb.pa.add(this.ab, this); this.addChild(this.bb); this.wa=this.Dc.bind(this); D.add(this.wa)
        }

        U.prototype=Object.create(G.prototype); U.prototype.constructor=U; h=U.prototype; h.Fb=function() {}

        ; h.activate=function() {}

        ;

        h.resize=function() {
            this.Bc.position.x=t; this.Bc.position.y=50+Math.floor(.5*this.Bc.height)-40; this.mb.position.x=t-300; this.mb.position.y=u-30; this.nb.position.x=t+300; this.nb.position.y=u-30; this.fa.position.x=t; this.fa.position.y=u-20; this.Pa.position.x=t-100; this.Pa.position.y=s-(.5*this.Pa.height+v); this.bb.position.x=t+100; this.bb.position.y=s-(.5*this.bb.height+v); m||(this.bb.visible= !1, this.Pa.position.x=t)
        }

        ;

        h.dispose=function() {
            D.remove(this.wa); this.wa=null; this.va.removeAll(); this.va=null; this.Pa.dispose(); this.bb.dispose(); this.bb=this.Pa=null; this.removeChildren(); G.prototype.dispose.call(this)
        }

        ; h.update=function() {}

        ; h.Dc=function(a) {
            32==a&&this.qf()
        }

        ; h.qf=function() {
            w().ea("sfx_click"); this.va.dispatch( !0)
        }

        ; h.vh=function() {
            w().ea("sfx_click"); this.va.dispatch( !1)
        }

        ; h.ab=function() {
            w().ea("sfx_rollover")
        }

        ; function W(a, b, d, e, f) {
            R.call(this); this.vb=f||"transition_cross"; this._duration=a||1; this.Ag=""+b||"#000000"; this._pauseTime=d||.2; this._delay=e||0; a=Ga().Qa; b=new PIXI.Graphics; b.beginFill(this.Ag, 1); b.drawRect(0, 0, a.width, a.height); b.alpha=0; this.Ab=new PIXI.Sprite(b.generateTexture()); this.addChild(this.Ab)
        }

        W.prototype=Object.create(R.prototype); W.prototype.constructor=W; h=W.prototype;

        h.Fd=function() {
            switch(this.vb) {
                case "transition_in_only":this.Ab.alpha=1; this.hb.dispatch(this); break; case "transition_cross":this.Ab.alpha=0, TweenMax.to(this.Ab, .5*this._duration, {
                        delay:this._delay, alpha:1, ease:Power1.easeIn, onComplete:function() {
                            this.hb.dispatch(this)
                        }

                        , onCompleteScope:this
                    }

                )
            }
        }

        ;

        h.Gd=function() {
            switch(this.vb) {
                case "transition_in_only":TweenMax.to(this.Ab, this._duration, {
                        delay:this._delay+this._pauseTime, alpha:0, ease:Power1.easeOut, onComplete:function() {
                            this.Ua.dispatch(this)
                        }

                        , onCompleteScope:this
                    }

                ); break; case "transition_cross":TweenMax.to(this.Ab, .5*this._duration, {
                        delay:this._pauseTime, alpha:0, ease:Power1.easeOut, onComplete:function() {
                            this.Ua.dispatch(this)
                        }

                        , onCompleteScope:this
                    }

                )
            }
        }

        ; h.dispose=function() {
            this.removeChildren(); this.Ab=null; R.prototype.dispose.call(this)
        }

        ; function X(a) {
            PIXI.DisplayObjectContainer.call(this); this.id=a; this.Y=y(); this.Va=this.Y.aa(this.id,  !0); this.Va.visible= !1; this.addChild(this.Va); this.Lb=this.Y.aa("card_back",  !0); this.addChild(this.Lb); this.ra=this.Y.aa("card_shadow",  !0); this.ra.x+=0; this.ra.y+=0; this.scale.x=this.scale.y=.6; this.uc=.2
        }

        X.prototype=Object.create(PIXI.DisplayObjectContainer.prototype); X.prototype.constructor=X; h=X.prototype;

        h.$h=function() {
            TweenMax.to(this.scale, .5*this.uc, {
                    x:.9, y:.9, ease:Power2.easeOut
                }

            ); TweenMax.to(this.scale, .5*this.uc, {
                    x:.78, y:.78, delay:.5*this.uc, ease:Power2.easeOut
                }

            ); this.Lb.scale.x=1; this.Va.scale.x=0; this.Gg()
        }

        ; h.ai=function(a) {
            TweenMax.to(this.scale, .3, {
                    x:.6, y:.6, delay:a||0, ease:Power2.easeOut
                }

            )
        }

        ;

        h.cg=function(a) {
            a?(this.ra.position.x-=40, this.ra.rotation=-.08726646259971647):(this.ra.position.x+=40, this.ra.rotation=.08726646259971647); this.ra.position.y+=10; this.ra.alpha=0; this.addChildAt(this.ra, 0); TweenMax.to(this.ra, .2, {
                    alpha:1, ease:Power2.easeOut
                }

            )
        }

        ; h.bg=function() {
            TweenMax.to(this.ra, .2, {
                    alpha:0, ease:Power2.easeOut, onComplete:function() {
                        this.removeChild(this.ra)
                    }

                    , onCompleteScope:this
                }

            )
        }

        ; h.zi=function() {
            this.Lb.scale.x=1; this.Va.scale.x=1; this.Lb.visible= !0; this.Va.visible= !1
        }

        ;

        h.Gg=function() {
            TweenMax.to(this.Lb.scale, .5*this.uc, {
                    x:0, delay:.05, onComplete:function() {
                        this.Lb.visible= !1; this.Hg()
                    }

                    , onCompleteScope:this, ease:Power2.easeOut
                }

            )
        }

        ; h.Hg=function() {
            this.Va.scale.x=0; this.Va.visible= !0; this.Va.alpha=1; TweenMax.to(this.Va.scale, .5*this.uc, {
                    x:1, delay:0, onComplete:function() {}

                    , onCompleteScope:this, ease:Power2.easeOut
                }

            )
        }

        ; h=function(a, b, d) {
            this.view=new PIXI.Point(a||0, b||0); this.position=new PIXI.Point(-this.view.x, -this.view.y); this.Yc=new PIXI.Point; this.bounds=new PIXI.Rectangle(-(.5*Number.MAX_VALUE), -(.5*Number.MAX_VALUE), Number.MAX_VALUE, Number.MAX_VALUE); this.mi=d|| !0; this.oe=.2; this.Ca=new PIXI.Point(1, 1); this._target=null; this.V=new PIXI.Point(0, 0); this.eb=new PIXI.Point(0, 0); this.xa= {}

            ; this.hd= !1; this.ie=new signals.Signal; this.he=new signals.Signal
        }

        .prototype;

        h.update=function() {
            void 0 !=this._target&&(this.V.x=this._target.x+this.Yc.x, this.V.y=this._target.y+this.Yc.y); this.V.x<this.bounds.x?this.V.x=this.bounds.x:this.V.x>this.bounds.width&&(this.V.x=this.bounds.width); this.V.y<this.bounds.y?this.V.y=this.bounds.y:this.V.y>this.bounds.height&&(this.V.y=this.bounds.height); this.V.x+=this.eb.x; this.V.y+=this.eb.y; var a=this.V.x-this.view.x-this.position.x*this.Ca.x, b=this.V.y-this.view.y-this.position.y*this.Ca.y; this.position.x+=1/this.Ca.x*a*this.oe;
            this.position.y+=1/this.Ca.y*b*this.oe; .01>Math.abs(a)&&(this.position.x=this.V.x-this.view.x); .01>Math.abs(b)&&(this.position.y=this.V.y-this.view.y); this.mi&&(this.position.x=Math.round(this.position.x), this.position.y=Math.round(this.position.y)); a=a*a+b*b; .1>a&& !this.hd?(this.hd= !0, this.he.dispatch()):.1<a&&this.hd&&(this.hd= !1, this.ie.dispatch()); this.qe()
        }

        ;

        h.Dk=function(a, b) {
            if(void 0 !=a&&(void 0==a.x||void 0==a.y))throw Error("Camera target is invalid!"); this._target=a; var d=this.fi(this._target); this.Ca.x=d?d.Wc.x:1; this.Ca.y=d?d.Wc.y:1; b&&(this.V.x=this._target.x+this.Yc.x, this.V.y=this._target.y+this.Yc.y, this.V.x<this.bounds.x?this.V.x=this.bounds.x:this.V.x>this.bounds.width&&(this.V.x=this.bounds.width), this.V.y<this.bounds.y?this.V.y=this.bounds.y:this.V.y>this.bounds.height&&(this.V.y=this.bounds.height), this.setPosition(this.V.x-this.view.x,
                    this.V.y-this.view.y))
        }

        ; h.Ck=function(a, b, d) {
            this._target=null; this.V.x=a; this.V.y=b; this.Ca.x=1; this.Ca.y=1; d&&(this.V.x<this.bounds.x?this.V.x=this.bounds.x:this.V.x>this.bounds.width&&(this.V.x=this.bounds.width), this.V.y<this.bounds.y?this.V.y=this.bounds.y:this.V.y>this.bounds.height&&(this.V.y=this.bounds.height), this.setPosition(this.V.x-this.view.x, this.V.y-this.view.y))
        }

        ;

        h.Mi=function(a, b, d, e) {
            if(this.Xf(a))throw Error("Layer with that name already exists: '"+a+"'."); if(this.li(a))throw Error("Container already added to existing layer!"); var f=new Ka; f.ic=b; f.Wc=new PIXI.Point("undefined" !==typeof d?d:1, "undefined" !==typeof e?e:1); this.xa[a]=f; this.qe()
        }

        ; h.Yj=function(a) {
            if( !this.Xf)throw Error("Layer does not exist!"); this.xa[a]=null
        }

        ; h.Xj=function() {
            this.xa= {}
        }

        ; h.Xf=function(a) {
            return void 0 !=this.xa[a]? !0: !1
        }

        ;

        h.li=function(a) {
            for(var b=0; b<this.xa.length; ++b)if(this.xa[b].ic==a)return !0; return !1
        }

        ; h.fi=function(a) {
            var b=0, d=null, e; for(e in this.xa)if(this.xa.hasOwnProperty(e))for(var f=this.xa[e], g=f.ic.children.length, b=0; b<g; ++b) {
                var l=f.ic.getChildAt(b); a==l&&(d=f)
            }

            return d
        }

        ;

        h.yk=function(a, b, d) {
            d=d||4; TweenMax.to(this.eb, .1, {
                    repeat:d-1, x:this.eb.x+(1+Math.random()*(a||5)), y:this.eb.y+(1+Math.random()*(b||5)), delay:.1, ease:Expo.easeInOut
                }

            ); TweenMax.to(this.eb, .1, {
                    x:this.eb.x, y:this.eb.y, delay:.1*(d+1), ease:Expo.easeInOut
                }

            )
        }

        ; h.dispose=function() {
            this.eb=this.V=this._target=this.Ca=this.bounds=this.Yc=this.position=this.view=null; this.xa= {}

            ; this.ie.removeAll(); this.ie=null; this.he.removeAll(); this.he=null
        }

        ;

        h.qe=function() {
            for(var a in this.xa)if(this.xa.hasOwnProperty(a)) {
                var b=this.xa[a]; b.ic.x=-this.position.x*b.Wc.x; b.ic.y=-this.position.y*b.Wc.y
            }
        }

        ; h.ij=function(a) {
            var b=this.xa[a]; if(b)return b; throw Error('[p3.Camera] getLayerByName: layer does not exist: "'+a+'".');
        }

        ; h.Jj=function() {
            return this._target
        }

        ; h.setPosition=function(a, b) {
            this.position.x=a*(0<this.Ca.x?1/this.Ca.x:1); this.position.y=b*(0<this.Ca.y?1/this.Ca.y:1); this.qe()
        }

        ; h.wk=function(a) {
            this.oe=Math.max(.001, Math.min(1, a))
        }

        ;

        function Ka() {
            this.Wc=this.ic=null
        }

        ; function Y() {
            G.call(this); this.Dd=new signals.Signal; this.Cd=new signals.Signal; this.Xc=new signals.Signal; this.ig=new signals.Signal; this.Zc=[]; this.Ga=[]; this.Ha=[]; this.Wa=[]; this.Hf=V.totalNumberOfCards; this.bf=V.dealTime; this.af=V.dealDelay; this.Xe=V.cardTurnTime; this.wg=V.cardWaitTime; this.tg=V.cardRevealTime; this.We=V.cardSnapTime; this.vg=V.cardWaitSnapTime; this.ng=V.aiSnapTimeDiff; this.ug=V.cardRevealWait; this.Ma=new PIXI.DisplayObjectContainer; this.addChild(this.Ma); this.cb=this.Xa=null;
            this.sg=s+350; this.Ve=15; this.kc=new PIXI.Point; this.kc.x=t-(Math.floor(.5*t)+50); this.kc.y=u-70; this.lc=new PIXI.Point; this.lc.x=t+(Math.floor(.5*t)+50); this.lc.y=u-70; this.ob=new PIXI.Point; this.ob.x=t; this.ob.y=u-20; this.Mb=new PIXI.Point; this.Mb.x=240; this.Mb.y=60; this.Ac=this.Lc= !1; this.sb=0; this.Y=y(); var a=this.Y.U("but_pause_default"), b=this.Y.U("but_pause_rollover"), d=this.Y.U("but_pause_pressed"); this.Da=new N(a, b, d); this.Da.ma.add(this.rh, this); this.Da.pa.add(this.th, this); this.Da.alpha=0; this.ef= !1; a=new PIXI.DisplayObjectContainer; a.interactive= !0; a.hitArea=new PIXI.Rectangle(0, 0, r, s); this.Rb=a; this.addChildAt(this.Rb, 0); this.wa=this.ih.bind(this); ua.add(this.wa)
        }

        Y.prototype=Object.create(G.prototype); Y.prototype.constructor=Y; h=Y.prototype; h.activate=function() {
            this.Ed()
        }

        ; h.resize=function() {
            this.Da.position.x=r-(50+.5*this.Da.width); this.Da.position.y=.5*this.Da.height+50
        }

        ;

        h.dispose=function() {
            ua.remove(this.wa); this.wa=null; this.Rb.touchstart=this.Rb.mousedown=null; this.Dd.removeAll(); this.Cd.removeAll(); this.Cd=this.Dd=null; this.yf(); this.removeChildren(); this.Y=null; G.prototype.dispose.call(this)
        }

        ; h.update=function() {}

        ;

        h.Ed=function() {
            this.ef&&this.yf(.15); this.ef= !0; for(var a=[], b=V.cards, d=0; d<b.length; d++)a.push(b[d]); if(6>a.length)throw Error("[GameScreen] startGame: There are not enough cards specified in the config to select 6 from."); for(; 6>this.Zc.length; )this.Zc.push(a.splice(k(a.length-1), 1)[0]); this.bi=this.rf.bind(this); this.Rb.touchstart=this.Rb.mousedown=this.bi; TweenMax.delayedCall(.3, function() {
                    1>this.Da.alpha&&TweenMax.to(this.Da, .3, {
                            alpha:1
                        }

                    ); this.addChild(this.Da); this.addChild(this.Ma); this.addChildAt(this.Rb,
                        0); this.Ma.alpha=1; this.Mh()
                }

                , null, this)
        }

        ; h.pause=function() {
            this.If=TimelineLite.exportRoot(null,  !1); this.If.pause()
        }

        ; h.resume=function() {
            this.If.resume()
        }

        ;

        h.Mh=function() {
            for(var a=0; a<this.Hf; a++) {
                var b, d=.017453292519943295*k(5, -5), e=new PIXI.Point(k(10, -10), k(10, -10)); b=this.Nh(); this.Ma.addChild(b); var f= !1; switch(a%2) {
                    case 0:this.Ga.push(b); e.x+=this.kc.x; e.y+=this.kc.y; f= !0; break; case 1:this.Ha.push(b), e.x+=this.lc.x, e.y+=this.lc.y
                }

                TweenMax.to(b, this.bf, {
                        x:e.x, y:e.y, rotation:d, delay:this.af*a, onComplete:function(a) {
                            a?w().ea("sfx_aideal"):w().ea("sfx_playerdeal"); this.Xc.dispatch(this.Ga.length, this.Ha.length,  !1)
                        }

                        , onCompleteParams:[f], onCompleteScope:this
                    }

                )
            }

            TweenMax.delayedCall(this.bf+ this.af*this.Hf+.5, this.nd, [k(2, 1)], this)
        }

        ; h.Nh=function() {
            var a=this.Zc, a=new X(a[k(a.length-1)]); a.position.x=t; a.position.y=this.sg; return a
        }

        ; h.Li=function(a) {
            for(var b=a.length, d=null, e=null; 0 !==b; )e=Math.floor(Math.random()*b), b-=1, d=a[b], a[b]=a[e], a[e]=d; for(b=0; b<a.length; b++)this.Ma.addChild(a[b])
        }

        ;

        h.nd=function(a) {
            this.Ac=this.Lc= !1; if( !this.Ac)if(L&&TweenMax.killDelayedCallsTo(this.bd), 1===a?w().ea("sfx_aiturncard"):w().ea("sfx_playerturncard"), this.zg(a)) {
                var b; switch(a) {
                    case 1:b=this.Ga.pop(); break; case 2:b=this.Ha.pop()
                }

                b.$h(); this.Ma.addChild(b); this.Wa.push(b); TweenMax.to(b, this.Xe, {
                        x:this.ob.x+k(10, -10), y:this.ob.y+k(10, -10), rotation:.017453292519943295*k(5, -5)
                    }

                ); TweenMax.delayedCall(.95*this.Xe, this.rg, [b, a], this); this.Xc.dispatch(this.Ga.length, this.Ha.length,  !0)
            }

            else this.Hh(a)
        }

        ;

        h.rg=function(a, b) {
            this.cb=this.Xa; this.Xa=a; this.Lc= !0; var d=this.wg; this.Ld()&&(d+=this.vg); L&&this.Ld()&&TweenMax.delayedCall(d-this.ng, this.bd, [1], this); b=this.Df(b); TweenMax.delayedCall(d, this.nd, [b], this)
        }

        ; h.bd=function(a) {
            TweenMax.killDelayedCallsTo(this.bd); TweenMax.killDelayedCallsTo(this.nd); this.Lc= !1; this.Ac= !0; this.sb=a; this.Sh(); L&&1===this.sb?w().ea("sfx_aisnap"):w().ea("sfx_playersnap")
        }

        ;

        h.Ki=function() {
            TweenMax.to(this.position, .1, {
                    repeat:1, x:this.position.x+(1+5*Math.random()), y:this.position.y+(1+5*Math.random()), delay:.1, ease:Expo.easeInOut
                }

            ); TweenMax.to(this.position, .1, {
                    x:this.position.x, y:this.position.y, delay:3*.1, ease:Expo.easeInOut
                }

            )
        }

        ; h.Sh=function() {
            this.Ea=new K; this.Ea.position.y-=20; this.Ea.show(this.sb, this.We); this.addChild(this.Ea); TweenMax.delayedCall(this.We, this.Kh, null, this)
        }

        ;

        h.Kh=function() {
            TweenMax.to(this.Xa, .3, {
                    x:t-this.Mb.x, y:u-this.Mb.y, rotation:.017453292519943295*-this.Ve
                }

            ); TweenMax.to(this.cb, .3, {
                    x:t+this.Mb.x, y:u-this.Mb.y, rotation:.017453292519943295*this.Ve
                }

            ); this.cb.cg( !1); this.Xa.cg( !0); TweenMax.delayedCall(this.tg, this.Lh, null, this); L&&1===this.sb?w().ea("sfx_aicardwin"):w().ea("sfx_playercardwin")
        }

        ;

        h.Lh=function() {
            this.Ea.Yf(); this.Ea=null; TweenMax.to(this.Xa, .2, {
                    x:this.ob.x, y:this.ob.y, rotation:.017453292519943295*k(5, -5)
                }

            ); TweenMax.to(this.cb, .2, {
                    x:this.ob.x, y:this.ob.y, rotation:.017453292519943295*k(5, -5)
                }

            ); this.cb.bg(); this.Xa.bg(); var a, b, d; a=0; for(b=this.Ga.length; a<b; a++)d=this.Ga[a], this.Ma.addChild(d); a=0; for(b=this.Ha.length; a<b; a++)d=this.Ha[a], this.Ma.addChild(d); var e; e=1===this.sb?this.kc:this.lc; this.Wa.reverse(); a=0; for(b=this.Wa.length; a<b; a++) {
                var f=.01*a; d=this.Wa[a]; d.ai(f);

                TweenMax.to(d, .5, {
                        x:e.x, y:e.y, delay:.3+f, onComplete:function() {
                            this.zi()
                        }

                        , onCompleteScope:d
                    }

                )
            }

            1===this.sb?this.Ga=this.Wa.concat(this.Ga):this.Ha=this.Wa.concat(this.Ha); this.Wa=[]; this.Xa=this.cb=null; TweenMax.delayedCall(this.ug, this.nd, [this.Df(this.sb)], this); this.Xc.dispatch(this.Ga.length, this.Ha.length,  !1)
        }

        ; h.Hh=function(a) {
            Da=1==a?2:1; TweenMax.to(this.Da, .2, {
                    alpha:0, onComplete:function() {
                        this.removeChild(this.Da)
                    }

                    , onCompleteScope:this
                }

            ); this.Cd.dispatch()
        }

        ;

        h.Df=function(a) {
            a+=1; 2<a&&(a=1); return a
        }

        ; h.zg=function(a) {
            var b; switch(a) {
                case 1:b=this.Ga; break; case 2:b=this.Ha
            }

            return 0<b.length
        }

        ; h.Ld=function() {
            return this.cb?this.Xa.id===this.cb.id: !1
        }

        ; h.Ji=function() {}

        ;

        h.yf=function(a) {
            TweenMax.killAll( !1); this.Xc.dispatch(0, 0,  !1); TweenMax.to(this.Ma, a, {
                    alpha:0, ease:Power2.easeOut, onComplete:function() {
                        this.Ma.removeChildren(); this.removeChildren()
                    }

                    , onCompleteScope:this
                }

            ); this.Zc=[]; this.Ga=[]; this.Ha=[]; this.Wa=[]; this.cb=this.Xa=null; this.Ac=this.Lc= !1; this.sb=0
        }

        ; h.ih=function(a) {
            32==a&&this.rf()
        }

        ;

        h.rf=function(a) {
            if( !this.Ac&&this.Lc&&1<this.Wa.length) {
                var b; b=this.Ld(); L?b=b?2:1:(a=a.getLocalPosition(this), b=Math.round(a.x)<t?b?1:2:b?2:1); this.ig.dispatch(b); this.bd(b)
            }
        }

        ; h.rh=function() {
            this.pause(); w().ea("sfx_click"); this.Dd.dispatch()
        }

        ; h.th=function() {
            w().ea("sfx_rollover")
        }

        ; function Z(a, b, d, e, f, g, l, p, C) {
            R.call(this); this.vb=C||"transition_cross"; this._duration=a; this.ld=new PIXI.Point(b, d); this.ad=new PIXI.Point(e, f); this.nf=new PIXI.Point(g, l); this._delay=p||0; this.Nd=Power2.easeInOut; this.Bd= !1; this.te= !0
        }

        Z.prototype=Object.create(R.prototype); Z.prototype.constructor=Z; h=Z.prototype; c.Di.VERSION="01.00.00"; h.Fd=function() {
            this.screen.x=this.ld.x; this.screen.y=this.ld.y; this.hb.dispatch(this)
        }

        ;

        h.Gd=function() {
            switch(this.vb) {
                case "transition_in_only":TweenMax.to(this.screen, this._duration, {
                        x:this.ad.x, y:this.ad.y, ease:this.Nd, delay:this._delay, onComplete:function() {
                            this.Ua.dispatch(this)
                        }

                        , onCompleteScope:this
                    }

                ); break; case "transition_cross":this.ub&&TweenMax.to(this.ub, this._duration, {
                        x:this.nf.x, y:this.nf.y, ease:this.Nd, delay:this._delay, onComplete:function() {
                            this.ub.visible= !1
                        }

                        , onCompleteScope:this
                    }

                ), this.screen.x=this.ld.x, this.screen.y=this.ld.y, TweenMax.to(this.screen, this._duration,
                        {
                        x:this.ad.x, y:this.ad.y, ease:this.Nd, delay:this._delay, onComplete:function() {
                            this.Ua.dispatch(this)
                        }

                        , onCompleteScope:this
                    }

                )
            }
        }

        ; function La(a, b, d) {
            R.call(this); this.Bd= !1; this._duration=a||1; this._delay=b||0; this.vb=d||"transition_in_only"
        }

        La.prototype=Object.create(R.prototype); La.prototype.constructor=La; h=La.prototype;

        h.Fd=function() {
            this.screen.alpha=0; switch(this.vb) {
                case "transition_in_only":this.hb.dispatch(this); break; case "transition_cross":if( !this.ub)throw Error("[AlphaFade] You are transitioning out but there is no oldScreen. "); TweenMax.to(this.ub, .5*this._duration, {
                        delay:this._delay, alpha:0, ease:Power2.easeIn, onComplete:function() {
                            this.hb.dispatch(this)
                        }

                        , onCompleteScope:this
                    }

                )
            }
        }

        ;

        h.Gd=function() {
            switch(this.vb) {
                case "transition_in_only":TweenMax.to(this.screen, this._duration, {
                        delay:this._delay, alpha:1, ease:Power2.easeOut, onComplete:function() {
                            this.Ua.dispatch(this)
                        }

                        , onCompleteScope:this
                    }

                ); break; case "transition_cross":this.screen.alpha=0, TweenMax.to(this.screen, .5*this._duration, {
                        delay:0, alpha:1, ease:Power1.easeOut, onComplete:function() {
                            this.Ua.dispatch(this)
                        }

                        , onCompleteScope:this
                    }

                )
            }
        }

        ; function Ma() {
            G.call(this); var a=y(); this.lb=a.aa("score_bubbles",  !0); this.lb.position.x=t; this.lb.position.y=50+Math.floor(.5*this.lb.height)-40; this.addChild(this.lb); var b, d; L?(b="cpu_icon", d="p_generic_icon"):(b="p1_icon", d="p2_icon"); this.Gc=a.aa(b,  !0); this.Gc.position.x-=35; this.Gc.position.y+=22; this.lb.addChild(this.Gc); this.Ic=a.aa(d,  !0); this.Ic.position.x+=35; this.Ic.position.y+=22; this.lb.addChild(this.Ic); this.Na=a.aa("player_textbox",  !0); this.Na.position.x-=240; this.Na.position.y=s-(v+ Math.floor(this.Na.height)); this.addChild(this.Na); this.Oa=a.aa("player_textbox",  !0); this.Oa.position.x+=240; this.Oa.position.y=s-(v+Math.floor(this.Oa.height)); this.addChild(this.Oa); this.Wb=new H("", a.Gb("garagebold_122_white"), "center"); this.Xb=new H("", a.Gb("garagebold_122_white"), "center"); this.Hc=new H("", a.Gb("garagebold_92"), "center"); this.Jc=new H("", a.Gb("garagebold_92"), "center"); this.Wb.position.x-=120; this.Wb.position.y-=15; this.lb.addChild(this.Wb); this.Xb.position.x+=115; this.Xb.position.y-=14; this.lb.addChild(this.Xb); this.Hc.y-=18; this.Jc.y-=18; this.Na.addChild(this.Hc); this.Oa.addChild(this.Jc); b=a.U("but_snap_player_default"); d=a.U("but_snap_player_pressed"); var e=a.U("but_snap_2p_default"), f=a.U("but_snap_2p_pressed"), g=a.Hb("snap-copy"); L?(this.Hc.text=g.playerai, this.Jc.text=g.player1):(b=a.U("but_snap_1p_default"), d=a.U("but_snap_1p_pressed"), this.Hc.text=g.player1, this.Jc.text=g.player2); this.Aa=new N(b, d, d); this.addChild(this.Aa); this.qb=new N(e, f, f); this.addChild(this.qb);
            this.uf=this.tf=0; this.lg(0, 0)
        }

        Ma.prototype=Object.create(G.prototype); Ma.prototype.constructor=Ma; h=Ma.prototype; h.Fb=function() {}

        ; h.activate=function() {}

        ;

        h.resize=function() {
            L?(this.qb.visible= !1, this.Aa.position.x=t, this.Aa.position.y=s-(Math.floor(.5*this.Aa.height)+v-5), this.Na.position.x=t-(Math.floor(.5*t)+10), this.Na.position.y=s-(Math.floor(.5*this.Aa.height)+v), this.Oa.position.x=t+(Math.floor(.5*t)+10), this.Oa.position.y=s-(Math.floor(.5*this.Aa.height)+v)):(this.Aa.position.x=t-(Math.floor(.5*t)+50), this.Aa.position.y=s-(Math.floor(.5*this.Aa.height)+v+35), this.qb.position.x=t+(Math.floor(.5*t)+50), this.qb.position.y=s-(Math.floor(.5*this.qb.height)+ v+35), this.Na.position.x=this.Aa.position.x, this.Na.position.y=this.Aa.position.y+85, this.Oa.position.x=this.qb.position.x, this.Oa.position.y=this.qb.position.y+85)
        }

        ; h.dispose=function() {
            G.prototype.dispose.call(this)
        }

        ; h.lg=function(a, b, d) {
            var e=.08, f=.1; d&&(f=e=0); TweenMax.to(this, e*a, {
                    tf:a, onUpdate:this.Jf, onUpdateScope:this, delay:f
                }

            ); TweenMax.to(this, e*b, {
                    uf:b, onUpdate:this.Jf, onUpdateScope:this, delay:f
                }

            )
        }

        ;

        h.ti=function(a) {
            var b; b=L?this.Aa:1===a?this.Aa:this.qb; b.W.setTexture(b.Ad); TweenMax.delayedCall(.2, function() {
                    b.W.setTexture(b.Vc)
                }

                , null)
        }

        ; h.Jf=function() {
            this.Wb.text=""+Math.round(this.tf); this.Xb.text=""+Math.round(this.uf)
        }

        ; function Na() {
            this.Z=Ga(); this.Z.hc("group_background"); this.Z.hc("group_ui"); this.Z.hc("group_game"); this.Db=this.za=this.Zb=this.ed=this.ne=this.wb=null; this.Eg=0; this.Ia=this.Fg=.5; z().track(new B("game_loaded"))
        }

        var h=Na.prototype, V=null, L= !1, Da=0; h.Ed=function() {
            V=y().Hb("snap-config"); this.Cf( !0)
        }

        ; h.Cf=function(a) {
            var b=new W(this.Fg, this.Eg); this.wb=new Q; this.wb.Jb.addOnce(this.Wg, this); a?this.Z.gb(this.wb, Aa().transition(b)):this.Z.gb(this.wb, (new F).group("group_background"))
        }

        ;

        h.ge=function() {
            this.ne=new U; this.ne.va.addOnce(this.Dh, this); this.Z.gb(this.ne, za())
        }

        ; h.Ph=function() {
            var a=s, a=new Z(this.Ia, 0, a, 0, 0, 0, -a, 0); this.ed=new T; this.ed.va.addOnce(this.hh, this); this.ed.Ta.addOnce(this.gh, this); this.Z.gb(this.ed, za().transition(a))
        }

        ;

        h.Qh=function() {
            var a=s, a=new Z(this.Ia, 0, -a, 0, 0, 0, a, 0); this.Kc=new T; this.Kc.va.addOnce(this.uh, this); this.Kc.Ta.addOnce(this.sh, this); this.Z.gb(this.Kc, (new F).group("group_game").transition(a)); TweenMax.to(this.Db, this.Ia, {
                    alpha:0, ease:Power2.easeOut
                }

            ); this.wb.Ci(this.Ia)
        }

        ;

        h.Oh=function() {
            var a=new La(this.Ia, .2), b=s, b=new Z(this.Ia, 0, b, 0, 0, 0, -b, 0); this.Db=new Ma; this.Z.gb(this.Db, (new F).group("group_ui").transition(a)); this.za=new Y; this.za.Dd.add(this.eh, this); this.za.Cd.add(this.dh, this); this.za.Xc.add(this.bh, this); this.za.ig.add(this.fh, this); this.Z.gb(this.za, za().transition(b)); this.wb.kg(this.Ia)
        }

        ; h.Rh=function() {
            this.Zb=new P; this.Zb.va.addOnce(this.zh, this); this.Zb.Ta.addOnce(this.yh, this); this.Z.gb(this.Zb, (new F).group("group_game"))
        }

        ; h.Wg=function() {
            this.ge()
        }

        ;

        h.Dh=function(a) {
            (L=a)?z().track(new B("play_1player")):z().track(new B("play_2player")); this.Ph()
        }

        ; h.gh=function() {
            this.ge()
        }

        ; h.hh=function() {
            this.Oh(); z().track(new B("play"))
        }

        ; h.eh=function() {
            this.za.we= !1; this.Qh()
        }

        ; h.dh=function() {
            this.za.we= !1; this.Rh()
        }

        ; h.bh=function(a, b, d) {
            this.Db.lg(a, b, d)
        }

        ; h.fh=function(a) {
            this.Db.ti(a)
        }

        ; h.sh=function() {
            this.Z.ui(); this.Cf()
        }

        ;

        h.uh=function() {
            this.za.visible= !0; TweenMax.to(this.Db, this.Ia-.1, {
                    alpha:1, ease:Power2.easeOut
                }

            ); TweenMax.to(this.za, this.Ia-.1, {
                    x:0, y:0, ease:Power2.easeInOut, delay:0
                }

            ); TweenMax.to(this.Kc, this.Ia-.1, {
                    x:0, y:-s, ease:Power2.easeInOut, onComplete:function() {
                        this.Z.Ib(this.Kc); this.za.resume()
                    }

                    , onCompleteScope:this
                }

            ); this.wb.kg(this.Ia-.1)
        }

        ; h.zh=function() {
            this.Z.Ib(this.Zb); this.za.Ed(); L?z().track(new B("replay_1player")):z().track(new B("replay_2player"))
        }

        ;

        h.yh=function() {
            this.Z.Ib(this.za); this.Z.Ib(this.Db); this.Z.Ib(this.Zb); this.ge()
        }

        ; function Oa(a, b) {
            G.call(this); this.Bf=a; this.Af=b; this.Y=y(); this.Za=this.Y.Za; this.kf= !1; this._text=this.Id=this.La=this.ya=null; this._init()
        }

        Oa.prototype=Object.create(G.prototype); Oa.prototype.constructor=Oa; h=Oa.prototype;

        h._init=function() {

            var a=new PIXI.Graphics; a.beginFill(8859527); a.drawRect(0, 0, this.Bf, this.Af); a.endFill(); this.addChild(a); a=new PIXI.DisplayObjectContainer; a.x=Math.floor(.5*this.Bf); a.y=Math.floor(.5*this.Af)+50; this.addChild(a); var b=[this.Y.U("loader_animation0001"), this.Y.U("loader_animation0002"), this.Y.U("loader_animation0003"), this.Y.U("loader_animation0004"), this.Y.U("loader_animation0005"), this.Y.U("loader_animation0006"), this.Y.U("loader_animation0007"), this.Y.U("loader_animation0008"),
            this.Y.U("loader_animation0009"), this.Y.U("loader_animation0010")]; this.ya=new PIXI.MovieClip(b); this.ya.animationSpeed=.4; this.ya.gotoAndStop(0); this.ya.stop(); this.ya.loop= !1; this.ya.anchor.x=.5; this.ya.anchor.y=1; this.ya.x+=50; this.ya.y-=20; a.addChild(this.ya); this.La=this.Y.aa("preloader_bar"); this.La.anchor.y=.5; this.La.x-=.5*this.La.width; this.La.scale.x=0; a.addChild(this.La); this.Id=this.Y.aa("preloader_overlay",  !0); a.addChild(this.Id); this._text=new PIXI.Text("0%", {
                    font:"28px Arial", fill:"#FFFFFF"
                }

            );
            this._text.anchor.x=.5; this._text.position.y+=50; a.addChild(this._text)
        }

        ; h.Fb=function() {}

        ; h.activate=function() {}

        ; h.position=function() {}

        ; h.dispose=function() {
            this.removeChildren(); this._text=this.Id=this.La=this.ya=this.Bc=this.Za=this.Y=null; G.prototype.dispose.call(this)
        }

        ; h.Ei=function(a) {
            TweenMax.to(this.La.scale, .5, {
                    x:Math.floor(a/100), onUpdate:this.Wh, onUpdateScope:this
                }

            ); 100<=a&& !this.kf&&(this.kf= !0, this.ya.gotoAndPlay(0))
        }

        ;

        h.Wh=function() {
            this._text.setText(Math.floor(100*this.La.scale.x)+"%")
        }

        ; function Pa() {
            this.ff=""; this.Y=this.Z=this.Qa=this.Ra=null; this.Jg=1024; this.Ig=768; this.Pe=this.ce=null; this.Je=new ya(35); var a=new A("UA-33013521-11", ""); z().init(a); PIXI.dontSayHello= !0; console.log("Version: 00.00.01")
        }

        h=Pa.prototype; h.init=function(a) {
            this.ff=a; this.Vd()
        }

        ;

        h.Vd=function() {
            var a=new ea; a.width=this.Jg; a.height=this.Ig; a.Zf=this.ff; a.dg="#872F87"; a.eg="assets/images/canvas/rotate_screen.png"; a.Pf="assets/images/canvas/bg.png"; a=new da(a); a.Be.add(this.Zg, this); a.Jb.add(this.Yg, this); a.init( !1)
        }

        ; h.Pg=function() {
            this.Z=Ga(); this.Z.init(this.Ra, this.Qa)
        }

        ;

        h.Bg=function() {
            this.Z.hc("preloader"); var a=new PIXI.AssetLoader(["assets/images/preloader.json"],  !0); a.addEventListener("onComplete", function() {
                    this.Z.hc("group_preloader"); this.ce=new Oa(r, s); this.Z.gb(this.ce, (new F).group("group_preloader")); this.Lg()
                }

                .bind(this)); a.load()
        }

        ;

        h.Lg=function() {
            var a="data/snap-config.json data/snap-copy.json data/particles/4_multicolour_burst.json data/particles/5_purplelines.json data/particles/3_whiteclouds.json fonts/garagebold_92.json fonts/garagebold_122_white.json fonts/garagebold_132.json images/logo.json images/background.json images/buttons.json images/ingame_assets.json".split(" "), b="sfx_aicardwin sfx_aideal sfx_aisnap sfx_aiturncard sfx_aiwingame sfx_playercardwin sfx_playerdeal sfx_playersnap sfx_playerturncard sfx_playerwingame sfx_click sfx_rollover music_snap_menu_loop music_snap_ingame_loop".split(" "),
            d; for(d=0; d<a.length; d++)a[d]="./assets/"+a[d]; for(d=0; d<b.length; d++)b[d]="./assets/sounds/"+b[d]; this.Y=y(); this.Y.re(b, ["mp3", "ogg", "wav"]); this.Y.Nf(a, ""); this.Y.De.add(this.kh, this); this.Y.jg.add(this.lh, this); this.Y.load()
        }

        ;

        h.Yg=function() {
            var a= {
                view:q, transparent: !0, antialias: !1, preserveDrawingBuffer: !1, resolution:1
            }

            ; this.Ra=new PIXI.Stage(16711935); this.Qa=new PIXI.autoDetectRenderer(r, s, a); q||document.body.appendChild(this.Qa.view); v=50; xa(); this.Pg(); this.Bg(); this.Je.init(this.Vh, this.Jh, this)
        }

        ; h.Zg=function(a) {
            a?(this.Qa.resize(r, s), this.Z&&this.Z.resize(), this.Je.we= !0):this.Je.we= !1
        }

        ; h.lh=function(a, b) {
            this.ce.Ei(b)
        }

        ; h.kh=function() {
            this.Pe=new Na; this.Pe.Ed()
        }

        ; h.Vh=function() {
            this.Z.update(); wa= {}
        }

        ; h.Jh=function() {
            this.Qa.render(this.Ra)
        }

        ;

        h.ki=function() {
            return this.Ra
        }

        ; h.ii=function() {
            return this.Qa
        }

        ; h.vj=function() {
            return this.Z
        }

        ; var Qa=["snap", "Main"], $=this; Qa[0]in $|| !$.execScript||$.execScript("var "+Qa[0]); for(var Ra; Qa.length&&(Ra=Qa.shift()); )Qa.length||void 0===Pa?$=$[Ra]?$[Ra]:$[Ra]= {}

        :$[Ra]=Pa;
    }

).call(this);