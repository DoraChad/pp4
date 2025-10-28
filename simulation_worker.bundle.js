( () => {
    var e = {
        1312: (e, t, n) => {
            var i;
            /**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.11.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2024
 * @license MIT
 */
            !function() {
                "use strict";
                var t = "input is invalid type"
                  , r = "object" == typeof window
                  , a = r ? window : {};
                a.JS_SHA256_NO_WINDOW && (r = !1);
                var s = !r && "object" == typeof self
                  , o = !a.JS_SHA256_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
                o ? a = n.g : s && (a = self);
                var l = !a.JS_SHA256_NO_COMMON_JS && e.exports
                  , c = n.amdO
                  , h = !a.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer
                  , u = "0123456789abcdef".split("")
                  , d = [-2147483648, 8388608, 32768, 128]
                  , f = [24, 16, 8, 0]
                  , p = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
                  , m = ["hex", "array", "digest", "arrayBuffer"]
                  , g = [];
                !a.JS_SHA256_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }
                ),
                !h || !a.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
                    return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
                }
                );
                var A = function(e, t) {
                    return function(n) {
                        return new x(t,!0).update(n)[e]()
                    }
                }
                  , _ = function(e) {
                    var t = A("hex", e);
                    o && (t = v(t, e)),
                    t.create = function() {
                        return new x(e)
                    }
                    ,
                    t.update = function(e) {
                        return t.create().update(e)
                    }
                    ;
                    for (var n = 0; n < m.length; ++n) {
                        var i = m[n];
                        t[i] = A(i, e)
                    }
                    return t
                }
                  , v = function(e, i) {
                    var r, s = n(4394), o = n(1903).Buffer, l = i ? "sha224" : "sha256";
                    r = o.from && !a.JS_SHA256_NO_BUFFER_FROM ? o.from : function(e) {
                        return new o(e)
                    }
                    ;
                    return function(n) {
                        if ("string" == typeof n)
                            return s.createHash(l).update(n, "utf8").digest("hex");
                        if (null == n)
                            throw new Error(t);
                        return n.constructor === ArrayBuffer && (n = new Uint8Array(n)),
                        Array.isArray(n) || ArrayBuffer.isView(n) || n.constructor === o ? s.createHash(l).update(r(n)).digest("hex") : e(n)
                    }
                }
                  , w = function(e, t) {
                    return function(n, i) {
                        return new b(n,t,!0).update(i)[e]()
                    }
                }
                  , y = function(e) {
                    var t = w("hex", e);
                    t.create = function(t) {
                        return new b(t,e)
                    }
                    ,
                    t.update = function(e, n) {
                        return t.create(e).update(n)
                    }
                    ;
                    for (var n = 0; n < m.length; ++n) {
                        var i = m[n];
                        t[i] = w(i, e)
                    }
                    return t
                };
                function x(e, t) {
                    t ? (g[0] = g[16] = g[1] = g[2] = g[3] = g[4] = g[5] = g[6] = g[7] = g[8] = g[9] = g[10] = g[11] = g[12] = g[13] = g[14] = g[15] = 0,
                    this.blocks = g) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    e ? (this.h0 = 3238371032,
                    this.h1 = 914150663,
                    this.h2 = 812702999,
                    this.h3 = 4144912697,
                    this.h4 = 4290775857,
                    this.h5 = 1750603025,
                    this.h6 = 1694076839,
                    this.h7 = 3204075428) : (this.h0 = 1779033703,
                    this.h1 = 3144134277,
                    this.h2 = 1013904242,
                    this.h3 = 2773480762,
                    this.h4 = 1359893119,
                    this.h5 = 2600822924,
                    this.h6 = 528734635,
                    this.h7 = 1541459225),
                    this.block = this.start = this.bytes = this.hBytes = 0,
                    this.finalized = this.hashed = !1,
                    this.first = !0,
                    this.is224 = e
                }
                function b(e, n, i) {
                    var r, a = typeof e;
                    if ("string" === a) {
                        var s, o = [], l = e.length, c = 0;
                        for (r = 0; r < l; ++r)
                            (s = e.charCodeAt(r)) < 128 ? o[c++] = s : s < 2048 ? (o[c++] = 192 | s >>> 6,
                            o[c++] = 128 | 63 & s) : s < 55296 || s >= 57344 ? (o[c++] = 224 | s >>> 12,
                            o[c++] = 128 | s >>> 6 & 63,
                            o[c++] = 128 | 63 & s) : (s = 65536 + ((1023 & s) << 10 | 1023 & e.charCodeAt(++r)),
                            o[c++] = 240 | s >>> 18,
                            o[c++] = 128 | s >>> 12 & 63,
                            o[c++] = 128 | s >>> 6 & 63,
                            o[c++] = 128 | 63 & s);
                        e = o
                    } else {
                        if ("object" !== a)
                            throw new Error(t);
                        if (null === e)
                            throw new Error(t);
                        if (h && e.constructor === ArrayBuffer)
                            e = new Uint8Array(e);
                        else if (!(Array.isArray(e) || h && ArrayBuffer.isView(e)))
                            throw new Error(t)
                    }
                    e.length > 64 && (e = new x(n,!0).update(e).array());
                    var u = []
                      , d = [];
                    for (r = 0; r < 64; ++r) {
                        var f = e[r] || 0;
                        u[r] = 92 ^ f,
                        d[r] = 54 ^ f
                    }
                    x.call(this, n, i),
                    this.update(d),
                    this.oKeyPad = u,
                    this.inner = !0,
                    this.sharedMemory = i
                }
                x.prototype.update = function(e) {
                    if (!this.finalized) {
                        var n, i = typeof e;
                        if ("string" !== i) {
                            if ("object" !== i)
                                throw new Error(t);
                            if (null === e)
                                throw new Error(t);
                            if (h && e.constructor === ArrayBuffer)
                                e = new Uint8Array(e);
                            else if (!(Array.isArray(e) || h && ArrayBuffer.isView(e)))
                                throw new Error(t);
                            n = !0
                        }
                        for (var r, a, s = 0, o = e.length, l = this.blocks; s < o; ) {
                            if (this.hashed && (this.hashed = !1,
                            l[0] = this.block,
                            this.block = l[16] = l[1] = l[2] = l[3] = l[4] = l[5] = l[6] = l[7] = l[8] = l[9] = l[10] = l[11] = l[12] = l[13] = l[14] = l[15] = 0),
                            n)
                                for (a = this.start; s < o && a < 64; ++s)
                                    l[a >>> 2] |= e[s] << f[3 & a++];
                            else
                                for (a = this.start; s < o && a < 64; ++s)
                                    (r = e.charCodeAt(s)) < 128 ? l[a >>> 2] |= r << f[3 & a++] : r < 2048 ? (l[a >>> 2] |= (192 | r >>> 6) << f[3 & a++],
                                    l[a >>> 2] |= (128 | 63 & r) << f[3 & a++]) : r < 55296 || r >= 57344 ? (l[a >>> 2] |= (224 | r >>> 12) << f[3 & a++],
                                    l[a >>> 2] |= (128 | r >>> 6 & 63) << f[3 & a++],
                                    l[a >>> 2] |= (128 | 63 & r) << f[3 & a++]) : (r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(++s)),
                                    l[a >>> 2] |= (240 | r >>> 18) << f[3 & a++],
                                    l[a >>> 2] |= (128 | r >>> 12 & 63) << f[3 & a++],
                                    l[a >>> 2] |= (128 | r >>> 6 & 63) << f[3 & a++],
                                    l[a >>> 2] |= (128 | 63 & r) << f[3 & a++]);
                            this.lastByteIndex = a,
                            this.bytes += a - this.start,
                            a >= 64 ? (this.block = l[16],
                            this.start = a - 64,
                            this.hash(),
                            this.hashed = !0) : this.start = a
                        }
                        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 | 0,
                        this.bytes = this.bytes % 4294967296),
                        this
                    }
                }
                ,
                x.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var e = this.blocks
                          , t = this.lastByteIndex;
                        e[16] = this.block,
                        e[t >>> 2] |= d[3 & t],
                        this.block = e[16],
                        t >= 56 && (this.hashed || this.hash(),
                        e[0] = this.block,
                        e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0),
                        e[14] = this.hBytes << 3 | this.bytes >>> 29,
                        e[15] = this.bytes << 3,
                        this.hash()
                    }
                }
                ,
                x.prototype.hash = function() {
                    var e, t, n, i, r, a, s, o, l, c = this.h0, h = this.h1, u = this.h2, d = this.h3, f = this.h4, m = this.h5, g = this.h6, A = this.h7, _ = this.blocks;
                    for (e = 16; e < 64; ++e)
                        t = ((r = _[e - 15]) >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3,
                        n = ((r = _[e - 2]) >>> 17 | r << 15) ^ (r >>> 19 | r << 13) ^ r >>> 10,
                        _[e] = _[e - 16] + t + _[e - 7] + n | 0;
                    for (l = h & u,
                    e = 0; e < 64; e += 4)
                        this.first ? (this.is224 ? (a = 300032,
                        A = (r = _[0] - 1413257819) - 150054599 | 0,
                        d = r + 24177077 | 0) : (a = 704751109,
                        A = (r = _[0] - 210244248) - 1521486534 | 0,
                        d = r + 143694565 | 0),
                        this.first = !1) : (t = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10),
                        i = (a = c & h) ^ c & u ^ l,
                        A = d + (r = A + (n = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7)) + (f & m ^ ~f & g) + p[e] + _[e]) | 0,
                        d = r + (t + i) | 0),
                        t = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10),
                        i = (s = d & c) ^ d & h ^ a,
                        g = u + (r = g + (n = (A >>> 6 | A << 26) ^ (A >>> 11 | A << 21) ^ (A >>> 25 | A << 7)) + (A & f ^ ~A & m) + p[e + 1] + _[e + 1]) | 0,
                        t = ((u = r + (t + i) | 0) >>> 2 | u << 30) ^ (u >>> 13 | u << 19) ^ (u >>> 22 | u << 10),
                        i = (o = u & d) ^ u & c ^ s,
                        m = h + (r = m + (n = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7)) + (g & A ^ ~g & f) + p[e + 2] + _[e + 2]) | 0,
                        t = ((h = r + (t + i) | 0) >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10),
                        i = (l = h & u) ^ h & d ^ o,
                        f = c + (r = f + (n = (m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7)) + (m & g ^ ~m & A) + p[e + 3] + _[e + 3]) | 0,
                        c = r + (t + i) | 0,
                        this.chromeBugWorkAround = !0;
                    this.h0 = this.h0 + c | 0,
                    this.h1 = this.h1 + h | 0,
                    this.h2 = this.h2 + u | 0,
                    this.h3 = this.h3 + d | 0,
                    this.h4 = this.h4 + f | 0,
                    this.h5 = this.h5 + m | 0,
                    this.h6 = this.h6 + g | 0,
                    this.h7 = this.h7 + A | 0
                }
                ,
                x.prototype.hex = function() {
                    this.finalize();
                    var e = this.h0
                      , t = this.h1
                      , n = this.h2
                      , i = this.h3
                      , r = this.h4
                      , a = this.h5
                      , s = this.h6
                      , o = this.h7
                      , l = u[e >>> 28 & 15] + u[e >>> 24 & 15] + u[e >>> 20 & 15] + u[e >>> 16 & 15] + u[e >>> 12 & 15] + u[e >>> 8 & 15] + u[e >>> 4 & 15] + u[15 & e] + u[t >>> 28 & 15] + u[t >>> 24 & 15] + u[t >>> 20 & 15] + u[t >>> 16 & 15] + u[t >>> 12 & 15] + u[t >>> 8 & 15] + u[t >>> 4 & 15] + u[15 & t] + u[n >>> 28 & 15] + u[n >>> 24 & 15] + u[n >>> 20 & 15] + u[n >>> 16 & 15] + u[n >>> 12 & 15] + u[n >>> 8 & 15] + u[n >>> 4 & 15] + u[15 & n] + u[i >>> 28 & 15] + u[i >>> 24 & 15] + u[i >>> 20 & 15] + u[i >>> 16 & 15] + u[i >>> 12 & 15] + u[i >>> 8 & 15] + u[i >>> 4 & 15] + u[15 & i] + u[r >>> 28 & 15] + u[r >>> 24 & 15] + u[r >>> 20 & 15] + u[r >>> 16 & 15] + u[r >>> 12 & 15] + u[r >>> 8 & 15] + u[r >>> 4 & 15] + u[15 & r] + u[a >>> 28 & 15] + u[a >>> 24 & 15] + u[a >>> 20 & 15] + u[a >>> 16 & 15] + u[a >>> 12 & 15] + u[a >>> 8 & 15] + u[a >>> 4 & 15] + u[15 & a] + u[s >>> 28 & 15] + u[s >>> 24 & 15] + u[s >>> 20 & 15] + u[s >>> 16 & 15] + u[s >>> 12 & 15] + u[s >>> 8 & 15] + u[s >>> 4 & 15] + u[15 & s];
                    return this.is224 || (l += u[o >>> 28 & 15] + u[o >>> 24 & 15] + u[o >>> 20 & 15] + u[o >>> 16 & 15] + u[o >>> 12 & 15] + u[o >>> 8 & 15] + u[o >>> 4 & 15] + u[15 & o]),
                    l
                }
                ,
                x.prototype.toString = x.prototype.hex,
                x.prototype.digest = function() {
                    this.finalize();
                    var e = this.h0
                      , t = this.h1
                      , n = this.h2
                      , i = this.h3
                      , r = this.h4
                      , a = this.h5
                      , s = this.h6
                      , o = this.h7
                      , l = [e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s];
                    return this.is224 || l.push(o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o),
                    l
                }
                ,
                x.prototype.array = x.prototype.digest,
                x.prototype.arrayBuffer = function() {
                    this.finalize();
                    var e = new ArrayBuffer(this.is224 ? 28 : 32)
                      , t = new DataView(e);
                    return t.setUint32(0, this.h0),
                    t.setUint32(4, this.h1),
                    t.setUint32(8, this.h2),
                    t.setUint32(12, this.h3),
                    t.setUint32(16, this.h4),
                    t.setUint32(20, this.h5),
                    t.setUint32(24, this.h6),
                    this.is224 || t.setUint32(28, this.h7),
                    e
                }
                ,
                b.prototype = new x,
                b.prototype.finalize = function() {
                    if (x.prototype.finalize.call(this),
                    this.inner) {
                        this.inner = !1;
                        var e = this.array();
                        x.call(this, this.is224, this.sharedMemory),
                        this.update(this.oKeyPad),
                        this.update(e),
                        x.prototype.finalize.call(this)
                    }
                }
                ;
                var E = _();
                E.sha256 = E,
                E.sha224 = _(!0),
                E.sha256.hmac = y(),
                E.sha224.hmac = y(!0),
                l ? e.exports = E : (a.sha256 = E.sha256,
                a.sha224 = E.sha224,
                c && (void 0 === (i = function() {
                    return E
                }
                .call(E, n, E, e)) || (e.exports = i)))
            }()
        }
        ,
        1903: () => {}
        ,
        4394: () => {}
        ,
        6925: () => {
            "use strict";
            function e(e) {
                throw new Error(e + ": No deterministic implementation")
            }
            const t = new WebAssembly.Instance(new WebAssembly.Module(Uint8Array.from(atob("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"), (e => e.charCodeAt(0))))).exports;
            Math = {
                E: 2.718281828459045,
                LN10: 2.302585092994046,
                LN2: .6931471805599453,
                LOG2E: 1.4426950408889634,
                LOG10E: .4342944819032518,
                PI: 3.141592653589793,
                SQRT1_2: .7071067811865476,
                SQRT2: 1.4142135623730951,
                abs: Math.abs,
                acos: t.acos,
                asin: t.asin,
                atan: t.atan,
                atan2: t.atan2,
                ceil: Math.ceil,
                cos: function(e) {
                    return Math.sin(e + Math.PI / 2)
                },
                exp: t.exp,
                floor: Math.floor,
                log: t.log,
                max: Math.max,
                min: Math.min,
                pow: t.pow,
                random: Math.random,
                round: Math.round,
                sin: function(e) {
                    if (!Number.isFinite(e))
                        return NaN;
                    const t = (e = function(e) {
                        return (e %= 2 * Math.PI) < 0 && (e += 2 * Math.PI),
                        e
                    }(e)) / (2 * Math.PI) * n.length
                      , i = Math.floor(t)
                      , r = (i + 1) % n.length
                      , a = t - i;
                    return n[i] * (1 - a) + n[r] * a
                },
                sqrt: t.sqrt,
                tan: t.tan,
                clz32: () => e("clz32"),
                imul: () => e("imul"),
                sign: Math.sign,
                log10: t.log10,
                log2: t.log2,
                log1p: () => e("log1p"),
                expm1: () => e("expm1"),
                cosh: () => e("cosh"),
                sinh: () => e("sinh"),
                tanh: () => e("tanh"),
                acosh: () => e("acosh"),
                asinh: () => e("asinh"),
                atanh: () => e("atanh"),
                hypot: () => e("hypot"),
                trunc: Math.trunc,
                cbrt: () => e("cbrt"),
                fround: Math.fround,
                [Symbol.toStringTag]: "Math"
            };
            const n = [0, .01745240643728351, .03489949670250097, .05233595624294383, .0697564737441253, .08715574274765817, .10452846326765346, .12186934340514748, .13917310096006544, .15643446504023087, .17364817766693033, .1908089953765448, .20791169081775931, .22495105434386498, .24192189559966773, .25881904510252074, .27563735581699916, .2923717047227367, .3090169943749474, .3255681544571567, .3420201433256687, .35836794954530027, .374606593415912, .3907311284892737, .40673664307580015, .42261826174069944, .4383711467890774, .45399049973954675, .4694715627858908, .48480962024633706, .49999999999999994, .5150380749100542, .5299192642332049, .544639035015027, .5591929034707468, .573576436351046, .5877852522924731, .6018150231520483, .6156614753256583, .6293203910498375, .6427876096865393, .6560590289905073, .6691306063588582, .6819983600624985, .6946583704589973, .7071067811865475, .7193398003386511, .7313537016191705, .7431448254773942, .7547095802227719, .766044443118978, .7771459614569708, .7880107536067219, .7986355100472928, .8090169943749475, .8191520442889918, .8290375725550417, .8386705679454239, .848048096156426, .8571673007021122, .8660254037844386, .8746197071393957, .8829475928589269, .8910065241883678, .898794046299167, .9063077870366499, .9135454576426009, .9205048534524404, .9271838545667873, .9335804264972017, .9396926207859083, .9455185755993167, .9510565162951535, .9563047559630354, .9612616959383189, .9659258262890683, .9702957262759965, .9743700647852352, .9781476007338057, .981627183447664, .984807753012208, .9876883405951378, .9902680687415704, .992546151641322, .9945218953682733, .9961946980917455, .9975640502598242, .9986295347545738, .9993908270190958, .9998476951563913, 1, .9998476951563913, .9993908270190958, .9986295347545738, .9975640502598242, .9961946980917455, .9945218953682734, .9925461516413221, .9902680687415704, .9876883405951377, .984807753012208, .981627183447664, .9781476007338057, .9743700647852352, .9702957262759965, .9659258262890683, .9612616959383189, .9563047559630355, .9510565162951536, .9455185755993168, .9396926207859084, .9335804264972017, .9271838545667874, .9205048534524404, .913545457642601, .90630778703665, .8987940462991669, .8910065241883679, .8829475928589271, .8746197071393959, .8660254037844387, .8571673007021123, .8480480961564261, .8386705679454239, .8290375725550417, .819152044288992, .8090169943749475, .7986355100472927, .788010753606722, .777145961456971, .766044443118978, .7547095802227721, .7431448254773945, .7313537016191706, .7193398003386511, .7071067811865476, .6946583704589975, .6819983600624986, .669130606358858, .6560590289905073, .6427876096865395, .6293203910498374, .6156614753256584, .6018150231520486, .5877852522924732, .5735764363510459, .5591929034707469, .5446390350150273, .5299192642332049, .5150380749100544, .49999999999999994, .48480962024633717, .4694715627858907, .45399049973954686, .4383711467890777, .4226182617406995, .40673664307580004, .39073112848927377, .37460659341591224, .35836794954530066, .3420201433256689, .3255681544571566, .3090169943749475, .29237170472273705, .2756373558169992, .258819045102521, .24192189559966773, .2249510543438652, .20791169081775931, .19080899537654497, .1736481776669307, .15643446504023098, .13917310096006533, .12186934340514755, .10452846326765373, .0871557427476582, .06975647374412552, .05233595624294425, .03489949670250114, .01745240643728344, 12246467991473532e-32, -.017452406437283192, -.0348994967025009, -.052335956242943564, -.06975647374412483, -.08715574274765794, -.1045284632676535, -.12186934340514774, -.13917310096006552, -.15643446504023073, -.17364817766693047, -.19080899537654472, -.20791169081775907, -.22495105434386498, -.2419218955996675, -.25881904510252035, -.2756373558169986, -.29237170472273677, -.30901699437494773, -.32556815445715676, -.34202014332566866, -.35836794954530043, -.374606593415912, -.39073112848927355, -.4067366430757998, -.4226182617406993, -.43837114678907707, -.45399049973954625, -.4694715627858905, -.48480962024633734, -.5000000000000001, -.5150380749100542, -.5299192642332048, -.5446390350150271, -.5591929034707467, -.5735764363510458, -.587785252292473, -.601815023152048, -.6156614753256578, -.6293203910498372, -.6427876096865393, -.6560590289905074, -.6691306063588582, -.6819983600624984, -.6946583704589974, -.7071067811865475, -.7193398003386509, -.7313537016191705, -.743144825477394, -.7547095802227717, -.7660444431189779, -.7771459614569711, -.7880107536067221, -.7986355100472928, -.8090169943749473, -.8191520442889916, -.8290375725550414, -.838670567945424, -.848048096156426, -.8571673007021121, -.8660254037844384, -.8746197071393955, -.882947592858927, -.8910065241883678, -.8987940462991668, -.90630778703665, -.913545457642601, -.9205048534524403, -.9271838545667873, -.9335804264972016, -.9396926207859082, -.9455185755993168, -.9510565162951535, -.9563047559630353, -.961261695938319, -.9659258262890683, -.9702957262759965, -.9743700647852351, -.9781476007338056, -.981627183447664, -.984807753012208, -.9876883405951377, -.9902680687415703, -.992546151641322, -.9945218953682733, -.9961946980917455, -.9975640502598242, -.9986295347545739, -.9993908270190958, -.9998476951563913, -1, -.9998476951563913, -.9993908270190958, -.9986295347545739, -.9975640502598243, -.9961946980917455, -.9945218953682733, -.992546151641322, -.9902680687415704, -.9876883405951378, -.9848077530122081, -.9816271834476641, -.9781476007338056, -.9743700647852352, -.9702957262759966, -.9659258262890684, -.961261695938319, -.9563047559630354, -.9510565162951536, -.945518575599317, -.9396926207859083, -.9335804264972017, -.9271838545667874, -.9205048534524405, -.9135454576426011, -.9063077870366503, -.898794046299167, -.8910065241883679, -.8829475928589271, -.8746197071393956, -.8660254037844386, -.8571673007021123, -.8480480961564262, -.8386705679454243, -.8290375725550416, -.8191520442889918, -.8090169943749476, -.798635510047293, -.7880107536067223, -.7771459614569713, -.7660444431189781, -.7547095802227722, -.743144825477394, -.7313537016191703, -.7193398003386512, -.7071067811865477, -.6946583704589976, -.6819983600624989, -.6691306063588588, -.6560590289905074, -.6427876096865396, -.6293203910498372, -.6156614753256582, -.6018150231520483, -.5877852522924734, -.5735764363510465, -.5591929034707473, -.544639035015027, -.529919264233205, -.5150380749100545, -.5000000000000004, -.48480962024633767, -.4694715627858908, -.45399049973954697, -.4383711467890778, -.4226182617406992, -.40673664307580015, -.3907311284892739, -.37460659341591235, -.35836794954530077, -.34202014332566943, -.3255681544571567, -.3090169943749477, -.29237170472273716, -.27563735581699894, -.2588190451025207, -.24192189559966787, -.22495105434386534, -.20791169081775987, -.19080899537654467, -.1736481776669304, -.15643446504023112, -.13917310096006588, -.12186934340514811, -.1045284632676543, -.08715574274765832, -.06975647374412564, -.05233595624294348, -.034899496702500823, -.01745240643728356]
        }
    }
      , t = {};
    function n(i) {
        var r = t[i];
        if (void 0 !== r)
            return r.exports;
        var a = t[i] = {
            exports: {}
        };
        return e[i](a, a.exports, n),
        a.exports
    }
    n.amdO = {},
    n.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    ( () => {
        "use strict";
        n(6925);
        /**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
        const e = "174"
          , ht = 2e3
          , ut = 2001;
        const ft = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
        let pt = 1234567;
        const mt = Math.PI / 180
          , gt = 180 / Math.PI;
        function At() {
            const e = 4294967295 * Math.random() | 0
              , t = 4294967295 * Math.random() | 0
              , n = 4294967295 * Math.random() | 0
              , i = 4294967295 * Math.random() | 0;
            return (ft[255 & e] + ft[e >> 8 & 255] + ft[e >> 16 & 255] + ft[e >> 24 & 255] + "-" + ft[255 & t] + ft[t >> 8 & 255] + "-" + ft[t >> 16 & 15 | 64] + ft[t >> 24 & 255] + "-" + ft[63 & n | 128] + ft[n >> 8 & 255] + "-" + ft[n >> 16 & 255] + ft[n >> 24 & 255] + ft[255 & i] + ft[i >> 8 & 255] + ft[i >> 16 & 255] + ft[i >> 24 & 255]).toLowerCase()
        }
        function _t(e, t, n) {
            return Math.max(t, Math.min(n, e))
        }
        function vt(e, t) {
            return (e % t + t) % t
        }
        function wt(e, t, n) {
            return (1 - n) * e + n * t
        }
        function yt(e, t) {
            switch (t.constructor) {
            case Float32Array:
                return e;
            case Uint32Array:
                return e / 4294967295;
            case Uint16Array:
                return e / 65535;
            case Uint8Array:
                return e / 255;
            case Int32Array:
                return Math.max(e / 2147483647, -1);
            case Int16Array:
                return Math.max(e / 32767, -1);
            case Int8Array:
                return Math.max(e / 127, -1);
            default:
                throw new Error("Invalid component type.")
            }
        }
        function xt(e, t) {
            switch (t.constructor) {
            case Float32Array:
                return e;
            case Uint32Array:
                return Math.round(4294967295 * e);
            case Uint16Array:
                return Math.round(65535 * e);
            case Uint8Array:
                return Math.round(255 * e);
            case Int32Array:
                return Math.round(2147483647 * e);
            case Int16Array:
                return Math.round(32767 * e);
            case Int8Array:
                return Math.round(127 * e);
            default:
                throw new Error("Invalid component type.")
            }
        }
        const bt = {
            DEG2RAD: mt,
            RAD2DEG: gt,
            generateUUID: At,
            clamp: _t,
            euclideanModulo: vt,
            mapLinear: function(e, t, n, i, r) {
                return i + (e - t) * (r - i) / (n - t)
            },
            inverseLerp: function(e, t, n) {
                return e !== t ? (n - e) / (t - e) : 0
            },
            lerp: wt,
            damp: function(e, t, n, i) {
                return wt(e, t, 1 - Math.exp(-n * i))
            },
            pingpong: function(e, t=1) {
                return t - Math.abs(vt(e, 2 * t) - t)
            },
            smoothstep: function(e, t, n) {
                return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * (3 - 2 * e)
            },
            smootherstep: function(e, t, n) {
                return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * e * (e * (6 * e - 15) + 10)
            },
            randInt: function(e, t) {
                return e + Math.floor(Math.random() * (t - e + 1))
            },
            randFloat: function(e, t) {
                return e + Math.random() * (t - e)
            },
            randFloatSpread: function(e) {
                return e * (.5 - Math.random())
            },
            seededRandom: function(e) {
                void 0 !== e && (pt = e);
                let t = pt += 1831565813;
                return t = Math.imul(t ^ t >>> 15, 1 | t),
                t ^= t + Math.imul(t ^ t >>> 7, 61 | t),
                ((t ^ t >>> 14) >>> 0) / 4294967296
            },
            degToRad: function(e) {
                return e * mt
            },
            radToDeg: function(e) {
                return e * gt
            },
            isPowerOfTwo: function(e) {
                return !(e & e - 1) && 0 !== e
            },
            ceilPowerOfTwo: function(e) {
                return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2))
            },
            floorPowerOfTwo: function(e) {
                return Math.pow(2, Math.floor(Math.log(e) / Math.LN2))
            },
            setQuaternionFromProperEuler: function(e, t, n, i, r) {
                const a = Math.cos
                  , s = Math.sin
                  , o = a(n / 2)
                  , l = s(n / 2)
                  , c = a((t + i) / 2)
                  , h = s((t + i) / 2)
                  , u = a((t - i) / 2)
                  , d = s((t - i) / 2)
                  , f = a((i - t) / 2)
                  , p = s((i - t) / 2);
                switch (r) {
                case "XYX":
                    e.set(o * h, l * u, l * d, o * c);
                    break;
                case "YZY":
                    e.set(l * d, o * h, l * u, o * c);
                    break;
                case "ZXZ":
                    e.set(l * u, l * d, o * h, o * c);
                    break;
                case "XZX":
                    e.set(o * h, l * p, l * f, o * c);
                    break;
                case "YXY":
                    e.set(l * f, o * h, l * p, o * c);
                    break;
                case "ZYZ":
                    e.set(l * p, l * f, o * h, o * c);
                    break;
                default:
                    console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r)
                }
            },
            normalize: xt,
            denormalize: yt
        };
        class Et {
            constructor(e=0, t=0) {
                Et.prototype.isVector2 = !0,
                this.x = e,
                this.y = t
            }
            get width() {
                return this.x
            }
            set width(e) {
                this.x = e
            }
            get height() {
                return this.y
            }
            set height(e) {
                this.y = e
            }
            set(e, t) {
                return this.x = e,
                this.y = t,
                this
            }
            setScalar(e) {
                return this.x = e,
                this.y = e,
                this
            }
            setX(e) {
                return this.x = e,
                this
            }
            setY(e) {
                return this.y = e,
                this
            }
            setComponent(e, t) {
                switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                default:
                    throw new Error("index is out of range: " + e)
                }
                return this
            }
            getComponent(e) {
                switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + e)
                }
            }
            clone() {
                return new this.constructor(this.x,this.y)
            }
            copy(e) {
                return this.x = e.x,
                this.y = e.y,
                this
            }
            add(e) {
                return this.x += e.x,
                this.y += e.y,
                this
            }
            addScalar(e) {
                return this.x += e,
                this.y += e,
                this
            }
            addVectors(e, t) {
                return this.x = e.x + t.x,
                this.y = e.y + t.y,
                this
            }
            addScaledVector(e, t) {
                return this.x += e.x * t,
                this.y += e.y * t,
                this
            }
            sub(e) {
                return this.x -= e.x,
                this.y -= e.y,
                this
            }
            subScalar(e) {
                return this.x -= e,
                this.y -= e,
                this
            }
            subVectors(e, t) {
                return this.x = e.x - t.x,
                this.y = e.y - t.y,
                this
            }
            multiply(e) {
                return this.x *= e.x,
                this.y *= e.y,
                this
            }
            multiplyScalar(e) {
                return this.x *= e,
                this.y *= e,
                this
            }
            divide(e) {
                return this.x /= e.x,
                this.y /= e.y,
                this
            }
            divideScalar(e) {
                return this.multiplyScalar(1 / e)
            }
            applyMatrix3(e) {
                const t = this.x
                  , n = this.y
                  , i = e.elements;
                return this.x = i[0] * t + i[3] * n + i[6],
                this.y = i[1] * t + i[4] * n + i[7],
                this
            }
            min(e) {
                return this.x = Math.min(this.x, e.x),
                this.y = Math.min(this.y, e.y),
                this
            }
            max(e) {
                return this.x = Math.max(this.x, e.x),
                this.y = Math.max(this.y, e.y),
                this
            }
            clamp(e, t) {
                return this.x = _t(this.x, e.x, t.x),
                this.y = _t(this.y, e.y, t.y),
                this
            }
            clampScalar(e, t) {
                return this.x = _t(this.x, e, t),
                this.y = _t(this.y, e, t),
                this
            }
            clampLength(e, t) {
                const n = this.length();
                return this.divideScalar(n || 1).multiplyScalar(_t(n, e, t))
            }
            floor() {
                return this.x = Math.floor(this.x),
                this.y = Math.floor(this.y),
                this
            }
            ceil() {
                return this.x = Math.ceil(this.x),
                this.y = Math.ceil(this.y),
                this
            }
            round() {
                return this.x = Math.round(this.x),
                this.y = Math.round(this.y),
                this
            }
            roundToZero() {
                return this.x = Math.trunc(this.x),
                this.y = Math.trunc(this.y),
                this
            }
            negate() {
                return this.x = -this.x,
                this.y = -this.y,
                this
            }
            dot(e) {
                return this.x * e.x + this.y * e.y
            }
            cross(e) {
                return this.x * e.y - this.y * e.x
            }
            lengthSq() {
                return this.x * this.x + this.y * this.y
            }
            length() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }
            manhattanLength() {
                return Math.abs(this.x) + Math.abs(this.y)
            }
            normalize() {
                return this.divideScalar(this.length() || 1)
            }
            angle() {
                return Math.atan2(-this.y, -this.x) + Math.PI
            }
            angleTo(e) {
                const t = Math.sqrt(this.lengthSq() * e.lengthSq());
                if (0 === t)
                    return Math.PI / 2;
                const n = this.dot(e) / t;
                return Math.acos(_t(n, -1, 1))
            }
            distanceTo(e) {
                return Math.sqrt(this.distanceToSquared(e))
            }
            distanceToSquared(e) {
                const t = this.x - e.x
                  , n = this.y - e.y;
                return t * t + n * n
            }
            manhattanDistanceTo(e) {
                return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
            }
            setLength(e) {
                return this.normalize().multiplyScalar(e)
            }
            lerp(e, t) {
                return this.x += (e.x - this.x) * t,
                this.y += (e.y - this.y) * t,
                this
            }
            lerpVectors(e, t, n) {
                return this.x = e.x + (t.x - e.x) * n,
                this.y = e.y + (t.y - e.y) * n,
                this
            }
            equals(e) {
                return e.x === this.x && e.y === this.y
            }
            fromArray(e, t=0) {
                return this.x = e[t],
                this.y = e[t + 1],
                this
            }
            toArray(e=[], t=0) {
                return e[t] = this.x,
                e[t + 1] = this.y,
                e
            }
            fromBufferAttribute(e, t) {
                return this.x = e.getX(t),
                this.y = e.getY(t),
                this
            }
            rotateAround(e, t) {
                const n = Math.cos(t)
                  , i = Math.sin(t)
                  , r = this.x - e.x
                  , a = this.y - e.y;
                return this.x = r * n - a * i + e.x,
                this.y = r * i + a * n + e.y,
                this
            }
            random() {
                return this.x = Math.random(),
                this.y = Math.random(),
                this
            }
            *[Symbol.iterator]() {
                yield this.x,
                yield this.y
            }
        }
        class St {
            constructor(e, t, n, i, r, a, s, o, l) {
                St.prototype.isMatrix3 = !0,
                this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
                void 0 !== e && this.set(e, t, n, i, r, a, s, o, l)
            }
            set(e, t, n, i, r, a, s, o, l) {
                const c = this.elements;
                return c[0] = e,
                c[1] = i,
                c[2] = s,
                c[3] = t,
                c[4] = r,
                c[5] = o,
                c[6] = n,
                c[7] = a,
                c[8] = l,
                this
            }
            identity() {
                return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
                this
            }
            copy(e) {
                const t = this.elements
                  , n = e.elements;
                return t[0] = n[0],
                t[1] = n[1],
                t[2] = n[2],
                t[3] = n[3],
                t[4] = n[4],
                t[5] = n[5],
                t[6] = n[6],
                t[7] = n[7],
                t[8] = n[8],
                this
            }
            extractBasis(e, t, n) {
                return e.setFromMatrix3Column(this, 0),
                t.setFromMatrix3Column(this, 1),
                n.setFromMatrix3Column(this, 2),
                this
            }
            setFromMatrix4(e) {
                const t = e.elements;
                return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
                this
            }
            multiply(e) {
                return this.multiplyMatrices(this, e)
            }
            premultiply(e) {
                return this.multiplyMatrices(e, this)
            }
            multiplyMatrices(e, t) {
                const n = e.elements
                  , i = t.elements
                  , r = this.elements
                  , a = n[0]
                  , s = n[3]
                  , o = n[6]
                  , l = n[1]
                  , c = n[4]
                  , h = n[7]
                  , u = n[2]
                  , d = n[5]
                  , f = n[8]
                  , p = i[0]
                  , m = i[3]
                  , g = i[6]
                  , A = i[1]
                  , _ = i[4]
                  , v = i[7]
                  , w = i[2]
                  , y = i[5]
                  , x = i[8];
                return r[0] = a * p + s * A + o * w,
                r[3] = a * m + s * _ + o * y,
                r[6] = a * g + s * v + o * x,
                r[1] = l * p + c * A + h * w,
                r[4] = l * m + c * _ + h * y,
                r[7] = l * g + c * v + h * x,
                r[2] = u * p + d * A + f * w,
                r[5] = u * m + d * _ + f * y,
                r[8] = u * g + d * v + f * x,
                this
            }
            multiplyScalar(e) {
                const t = this.elements;
                return t[0] *= e,
                t[3] *= e,
                t[6] *= e,
                t[1] *= e,
                t[4] *= e,
                t[7] *= e,
                t[2] *= e,
                t[5] *= e,
                t[8] *= e,
                this
            }
            determinant() {
                const e = this.elements
                  , t = e[0]
                  , n = e[1]
                  , i = e[2]
                  , r = e[3]
                  , a = e[4]
                  , s = e[5]
                  , o = e[6]
                  , l = e[7]
                  , c = e[8];
                return t * a * c - t * s * l - n * r * c + n * s * o + i * r * l - i * a * o
            }
            invert() {
                const e = this.elements
                  , t = e[0]
                  , n = e[1]
                  , i = e[2]
                  , r = e[3]
                  , a = e[4]
                  , s = e[5]
                  , o = e[6]
                  , l = e[7]
                  , c = e[8]
                  , h = c * a - s * l
                  , u = s * o - c * r
                  , d = l * r - a * o
                  , f = t * h + n * u + i * d;
                if (0 === f)
                    return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
                const p = 1 / f;
                return e[0] = h * p,
                e[1] = (i * l - c * n) * p,
                e[2] = (s * n - i * a) * p,
                e[3] = u * p,
                e[4] = (c * t - i * o) * p,
                e[5] = (i * r - s * t) * p,
                e[6] = d * p,
                e[7] = (n * o - l * t) * p,
                e[8] = (a * t - n * r) * p,
                this
            }
            transpose() {
                let e;
                const t = this.elements;
                return e = t[1],
                t[1] = t[3],
                t[3] = e,
                e = t[2],
                t[2] = t[6],
                t[6] = e,
                e = t[5],
                t[5] = t[7],
                t[7] = e,
                this
            }
            getNormalMatrix(e) {
                return this.setFromMatrix4(e).invert().transpose()
            }
            transposeIntoArray(e) {
                const t = this.elements;
                return e[0] = t[0],
                e[1] = t[3],
                e[2] = t[6],
                e[3] = t[1],
                e[4] = t[4],
                e[5] = t[7],
                e[6] = t[2],
                e[7] = t[5],
                e[8] = t[8],
                this
            }
            setUvTransform(e, t, n, i, r, a, s) {
                const o = Math.cos(r)
                  , l = Math.sin(r);
                return this.set(n * o, n * l, -n * (o * a + l * s) + a + e, -i * l, i * o, -i * (-l * a + o * s) + s + t, 0, 0, 1),
                this
            }
            scale(e, t) {
                return this.premultiply(Mt.makeScale(e, t)),
                this
            }
            rotate(e) {
                return this.premultiply(Mt.makeRotation(-e)),
                this
            }
            translate(e, t) {
                return this.premultiply(Mt.makeTranslation(e, t)),
                this
            }
            makeTranslation(e, t) {
                return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
                this
            }
            makeRotation(e) {
                const t = Math.cos(e)
                  , n = Math.sin(e);
                return this.set(t, -n, 0, n, t, 0, 0, 0, 1),
                this
            }
            makeScale(e, t) {
                return this.set(e, 0, 0, 0, t, 0, 0, 0, 1),
                this
            }
            equals(e) {
                const t = this.elements
                  , n = e.elements;
                for (let e = 0; e < 9; e++)
                    if (t[e] !== n[e])
                        return !1;
                return !0
            }
            fromArray(e, t=0) {
                for (let n = 0; n < 9; n++)
                    this.elements[n] = e[n + t];
                return this
            }
            toArray(e=[], t=0) {
                const n = this.elements;
                return e[t] = n[0],
                e[t + 1] = n[1],
                e[t + 2] = n[2],
                e[t + 3] = n[3],
                e[t + 4] = n[4],
                e[t + 5] = n[5],
                e[t + 6] = n[6],
                e[t + 7] = n[7],
                e[t + 8] = n[8],
                e
            }
            clone() {
                return (new this.constructor).fromArray(this.elements)
            }
        }
        const Mt = new St;
        function Tt(e) {
            for (let t = e.length - 1; t >= 0; --t)
                if (e[t] >= 65535)
                    return !0;
            return !1
        }
        Int8Array,
        Uint8Array,
        Uint8ClampedArray,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array;
        function Ct(e) {
            return document.createElementNS("http://www.w3.org/1999/xhtml", e)
        }
        function It() {
            const e = Ct("canvas");
            return e.style.display = "block",
            e
        }
        const Rt = {};
        function Pt(e) {
            e in Rt || (Rt[e] = !0,
            console.warn(e))
        }
        class Qt {
            constructor(e=0, t=0, n=0, i=1) {
                Qt.prototype.isVector4 = !0,
                this.x = e,
                this.y = t,
                this.z = n,
                this.w = i
            }
            get width() {
                return this.z
            }
            set width(e) {
                this.z = e
            }
            get height() {
                return this.w
            }
            set height(e) {
                this.w = e
            }
            set(e, t, n, i) {
                return this.x = e,
                this.y = t,
                this.z = n,
                this.w = i,
                this
            }
            setScalar(e) {
                return this.x = e,
                this.y = e,
                this.z = e,
                this.w = e,
                this
            }
            setX(e) {
                return this.x = e,
                this
            }
            setY(e) {
                return this.y = e,
                this
            }
            setZ(e) {
                return this.z = e,
                this
            }
            setW(e) {
                return this.w = e,
                this
            }
            setComponent(e, t) {
                switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                case 2:
                    this.z = t;
                    break;
                case 3:
                    this.w = t;
                    break;
                default:
                    throw new Error("index is out of range: " + e)
                }
                return this
            }
            getComponent(e) {
                switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + e)
                }
            }
            clone() {
                return new this.constructor(this.x,this.y,this.z,this.w)
            }
            copy(e) {
                return this.x = e.x,
                this.y = e.y,
                this.z = e.z,
                this.w = void 0 !== e.w ? e.w : 1,
                this
            }
            add(e) {
                return this.x += e.x,
                this.y += e.y,
                this.z += e.z,
                this.w += e.w,
                this
            }
            addScalar(e) {
                return this.x += e,
                this.y += e,
                this.z += e,
                this.w += e,
                this
            }
            addVectors(e, t) {
                return this.x = e.x + t.x,
                this.y = e.y + t.y,
                this.z = e.z + t.z,
                this.w = e.w + t.w,
                this
            }
            addScaledVector(e, t) {
                return this.x += e.x * t,
                this.y += e.y * t,
                this.z += e.z * t,
                this.w += e.w * t,
                this
            }
            sub(e) {
                return this.x -= e.x,
                this.y -= e.y,
                this.z -= e.z,
                this.w -= e.w,
                this
            }
            subScalar(e) {
                return this.x -= e,
                this.y -= e,
                this.z -= e,
                this.w -= e,
                this
            }
            subVectors(e, t) {
                return this.x = e.x - t.x,
                this.y = e.y - t.y,
                this.z = e.z - t.z,
                this.w = e.w - t.w,
                this
            }
            multiply(e) {
                return this.x *= e.x,
                this.y *= e.y,
                this.z *= e.z,
                this.w *= e.w,
                this
            }
            multiplyScalar(e) {
                return this.x *= e,
                this.y *= e,
                this.z *= e,
                this.w *= e,
                this
            }
            applyMatrix4(e) {
                const t = this.x
                  , n = this.y
                  , i = this.z
                  , r = this.w
                  , a = e.elements;
                return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r,
                this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r,
                this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r,
                this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r,
                this
            }
            divide(e) {
                return this.x /= e.x,
                this.y /= e.y,
                this.z /= e.z,
                this.w /= e.w,
                this
            }
            divideScalar(e) {
                return this.multiplyScalar(1 / e)
            }
            setAxisAngleFromQuaternion(e) {
                this.w = 2 * Math.acos(e.w);
                const t = Math.sqrt(1 - e.w * e.w);
                return t < 1e-4 ? (this.x = 1,
                this.y = 0,
                this.z = 0) : (this.x = e.x / t,
                this.y = e.y / t,
                this.z = e.z / t),
                this
            }
            setAxisAngleFromRotationMatrix(e) {
                let t, n, i, r;
                const a = .01
                  , s = .1
                  , o = e.elements
                  , l = o[0]
                  , c = o[4]
                  , h = o[8]
                  , u = o[1]
                  , d = o[5]
                  , f = o[9]
                  , p = o[2]
                  , m = o[6]
                  , g = o[10];
                if (Math.abs(c - u) < a && Math.abs(h - p) < a && Math.abs(f - m) < a) {
                    if (Math.abs(c + u) < s && Math.abs(h + p) < s && Math.abs(f + m) < s && Math.abs(l + d + g - 3) < s)
                        return this.set(1, 0, 0, 0),
                        this;
                    t = Math.PI;
                    const e = (l + 1) / 2
                      , o = (d + 1) / 2
                      , A = (g + 1) / 2
                      , _ = (c + u) / 4
                      , v = (h + p) / 4
                      , w = (f + m) / 4;
                    return e > o && e > A ? e < a ? (n = 0,
                    i = .707106781,
                    r = .707106781) : (n = Math.sqrt(e),
                    i = _ / n,
                    r = v / n) : o > A ? o < a ? (n = .707106781,
                    i = 0,
                    r = .707106781) : (i = Math.sqrt(o),
                    n = _ / i,
                    r = w / i) : A < a ? (n = .707106781,
                    i = .707106781,
                    r = 0) : (r = Math.sqrt(A),
                    n = v / r,
                    i = w / r),
                    this.set(n, i, r, t),
                    this
                }
                let A = Math.sqrt((m - f) * (m - f) + (h - p) * (h - p) + (u - c) * (u - c));
                return Math.abs(A) < .001 && (A = 1),
                this.x = (m - f) / A,
                this.y = (h - p) / A,
                this.z = (u - c) / A,
                this.w = Math.acos((l + d + g - 1) / 2),
                this
            }
            setFromMatrixPosition(e) {
                const t = e.elements;
                return this.x = t[12],
                this.y = t[13],
                this.z = t[14],
                this.w = t[15],
                this
            }
            min(e) {
                return this.x = Math.min(this.x, e.x),
                this.y = Math.min(this.y, e.y),
                this.z = Math.min(this.z, e.z),
                this.w = Math.min(this.w, e.w),
                this
            }
            max(e) {
                return this.x = Math.max(this.x, e.x),
                this.y = Math.max(this.y, e.y),
                this.z = Math.max(this.z, e.z),
                this.w = Math.max(this.w, e.w),
                this
            }
            clamp(e, t) {
                return this.x = _t(this.x, e.x, t.x),
                this.y = _t(this.y, e.y, t.y),
                this.z = _t(this.z, e.z, t.z),
                this.w = _t(this.w, e.w, t.w),
                this
            }
            clampScalar(e, t) {
                return this.x = _t(this.x, e, t),
                this.y = _t(this.y, e, t),
                this.z = _t(this.z, e, t),
                this.w = _t(this.w, e, t),
                this
            }
            clampLength(e, t) {
                const n = this.length();
                return this.divideScalar(n || 1).multiplyScalar(_t(n, e, t))
            }
            floor() {
                return this.x = Math.floor(this.x),
                this.y = Math.floor(this.y),
                this.z = Math.floor(this.z),
                this.w = Math.floor(this.w),
                this
            }
            ceil() {
                return this.x = Math.ceil(this.x),
                this.y = Math.ceil(this.y),
                this.z = Math.ceil(this.z),
                this.w = Math.ceil(this.w),
                this
            }
            round() {
                return this.x = Math.round(this.x),
                this.y = Math.round(this.y),
                this.z = Math.round(this.z),
                this.w = Math.round(this.w),
                this
            }
            roundToZero() {
                return this.x = Math.trunc(this.x),
                this.y = Math.trunc(this.y),
                this.z = Math.trunc(this.z),
                this.w = Math.trunc(this.w),
                this
            }
            negate() {
                return this.x = -this.x,
                this.y = -this.y,
                this.z = -this.z,
                this.w = -this.w,
                this
            }
            dot(e) {
                return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
            }
            lengthSq() {
                return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
            }
            length() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
            }
            manhattanLength() {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
            }
            normalize() {
                return this.divideScalar(this.length() || 1)
            }
            setLength(e) {
                return this.normalize().multiplyScalar(e)
            }
            lerp(e, t) {
                return this.x += (e.x - this.x) * t,
                this.y += (e.y - this.y) * t,
                this.z += (e.z - this.z) * t,
                this.w += (e.w - this.w) * t,
                this
            }
            lerpVectors(e, t, n) {
                return this.x = e.x + (t.x - e.x) * n,
                this.y = e.y + (t.y - e.y) * n,
                this.z = e.z + (t.z - e.z) * n,
                this.w = e.w + (t.w - e.w) * n,
                this
            }
            equals(e) {
                return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
            }
            fromArray(e, t=0) {
                return this.x = e[t],
                this.y = e[t + 1],
                this.z = e[t + 2],
                this.w = e[t + 3],
                this
            }
            toArray(e=[], t=0) {
                return e[t] = this.x,
                e[t + 1] = this.y,
                e[t + 2] = this.z,
                e[t + 3] = this.w,
                e
            }
            fromBufferAttribute(e, t) {
                return this.x = e.getX(t),
                this.y = e.getY(t),
                this.z = e.getZ(t),
                this.w = e.getW(t),
                this
            }
            random() {
                return this.x = Math.random(),
                this.y = Math.random(),
                this.z = Math.random(),
                this.w = Math.random(),
                this
            }
            *[Symbol.iterator]() {
                yield this.x,
                yield this.y,
                yield this.z,
                yield this.w
            }
        }
        class Kt {
            constructor(e=0, t=0, n=0, i=1) {
                this.isQuaternion = !0,
                this._x = e,
                this._y = t,
                this._z = n,
                this._w = i
            }
            static slerpFlat(e, t, n, i, r, a, s) {
                let o = n[i + 0]
                  , l = n[i + 1]
                  , c = n[i + 2]
                  , h = n[i + 3];
                const u = r[a + 0]
                  , d = r[a + 1]
                  , f = r[a + 2]
                  , p = r[a + 3];
                if (0 === s)
                    return e[t + 0] = o,
                    e[t + 1] = l,
                    e[t + 2] = c,
                    void (e[t + 3] = h);
                if (1 === s)
                    return e[t + 0] = u,
                    e[t + 1] = d,
                    e[t + 2] = f,
                    void (e[t + 3] = p);
                if (h !== p || o !== u || l !== d || c !== f) {
                    let e = 1 - s;
                    const t = o * u + l * d + c * f + h * p
                      , n = t >= 0 ? 1 : -1
                      , i = 1 - t * t;
                    if (i > Number.EPSILON) {
                        const r = Math.sqrt(i)
                          , a = Math.atan2(r, t * n);
                        e = Math.sin(e * a) / r,
                        s = Math.sin(s * a) / r
                    }
                    const r = s * n;
                    if (o = o * e + u * r,
                    l = l * e + d * r,
                    c = c * e + f * r,
                    h = h * e + p * r,
                    e === 1 - s) {
                        const e = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
                        o *= e,
                        l *= e,
                        c *= e,
                        h *= e
                    }
                }
                e[t] = o,
                e[t + 1] = l,
                e[t + 2] = c,
                e[t + 3] = h
            }
            static multiplyQuaternionsFlat(e, t, n, i, r, a) {
                const s = n[i]
                  , o = n[i + 1]
                  , l = n[i + 2]
                  , c = n[i + 3]
                  , h = r[a]
                  , u = r[a + 1]
                  , d = r[a + 2]
                  , f = r[a + 3];
                return e[t] = s * f + c * h + o * d - l * u,
                e[t + 1] = o * f + c * u + l * h - s * d,
                e[t + 2] = l * f + c * d + s * u - o * h,
                e[t + 3] = c * f - s * h - o * u - l * d,
                e
            }
            get x() {
                return this._x
            }
            set x(e) {
                this._x = e,
                this._onChangeCallback()
            }
            get y() {
                return this._y
            }
            set y(e) {
                this._y = e,
                this._onChangeCallback()
            }
            get z() {
                return this._z
            }
            set z(e) {
                this._z = e,
                this._onChangeCallback()
            }
            get w() {
                return this._w
            }
            set w(e) {
                this._w = e,
                this._onChangeCallback()
            }
            set(e, t, n, i) {
                return this._x = e,
                this._y = t,
                this._z = n,
                this._w = i,
                this._onChangeCallback(),
                this
            }
            clone() {
                return new this.constructor(this._x,this._y,this._z,this._w)
            }
            copy(e) {
                return this._x = e.x,
                this._y = e.y,
                this._z = e.z,
                this._w = e.w,
                this._onChangeCallback(),
                this
            }
            setFromEuler(e, t=!0) {
                const n = e._x
                  , i = e._y
                  , r = e._z
                  , a = e._order
                  , s = Math.cos
                  , o = Math.sin
                  , l = s(n / 2)
                  , c = s(i / 2)
                  , h = s(r / 2)
                  , u = o(n / 2)
                  , d = o(i / 2)
                  , f = o(r / 2);
                switch (a) {
                case "XYZ":
                    this._x = u * c * h + l * d * f,
                    this._y = l * d * h - u * c * f,
                    this._z = l * c * f + u * d * h,
                    this._w = l * c * h - u * d * f;
                    break;
                case "YXZ":
                    this._x = u * c * h + l * d * f,
                    this._y = l * d * h - u * c * f,
                    this._z = l * c * f - u * d * h,
                    this._w = l * c * h + u * d * f;
                    break;
                case "ZXY":
                    this._x = u * c * h - l * d * f,
                    this._y = l * d * h + u * c * f,
                    this._z = l * c * f + u * d * h,
                    this._w = l * c * h - u * d * f;
                    break;
                case "ZYX":
                    this._x = u * c * h - l * d * f,
                    this._y = l * d * h + u * c * f,
                    this._z = l * c * f - u * d * h,
                    this._w = l * c * h + u * d * f;
                    break;
                case "YZX":
                    this._x = u * c * h + l * d * f,
                    this._y = l * d * h + u * c * f,
                    this._z = l * c * f - u * d * h,
                    this._w = l * c * h - u * d * f;
                    break;
                case "XZY":
                    this._x = u * c * h - l * d * f,
                    this._y = l * d * h - u * c * f,
                    this._z = l * c * f + u * d * h,
                    this._w = l * c * h + u * d * f;
                    break;
                default:
                    console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
                }
                return !0 === t && this._onChangeCallback(),
                this
            }
            setFromAxisAngle(e, t) {
                const n = t / 2
                  , i = Math.sin(n);
                return this._x = e.x * i,
                this._y = e.y * i,
                this._z = e.z * i,
                this._w = Math.cos(n),
                this._onChangeCallback(),
                this
            }
            setFromRotationMatrix(e) {
                const t = e.elements
                  , n = t[0]
                  , i = t[4]
                  , r = t[8]
                  , a = t[1]
                  , s = t[5]
                  , o = t[9]
                  , l = t[2]
                  , c = t[6]
                  , h = t[10]
                  , u = n + s + h;
                if (u > 0) {
                    const e = .5 / Math.sqrt(u + 1);
                    this._w = .25 / e,
                    this._x = (c - o) * e,
                    this._y = (r - l) * e,
                    this._z = (a - i) * e
                } else if (n > s && n > h) {
                    const e = 2 * Math.sqrt(1 + n - s - h);
                    this._w = (c - o) / e,
                    this._x = .25 * e,
                    this._y = (i + a) / e,
                    this._z = (r + l) / e
                } else if (s > h) {
                    const e = 2 * Math.sqrt(1 + s - n - h);
                    this._w = (r - l) / e,
                    this._x = (i + a) / e,
                    this._y = .25 * e,
                    this._z = (o + c) / e
                } else {
                    const e = 2 * Math.sqrt(1 + h - n - s);
                    this._w = (a - i) / e,
                    this._x = (r + l) / e,
                    this._y = (o + c) / e,
                    this._z = .25 * e
                }
                return this._onChangeCallback(),
                this
            }
            setFromUnitVectors(e, t) {
                let n = e.dot(t) + 1;
                return n < Number.EPSILON ? (n = 0,
                Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y,
                this._y = e.x,
                this._z = 0,
                this._w = n) : (this._x = 0,
                this._y = -e.z,
                this._z = e.y,
                this._w = n)) : (this._x = e.y * t.z - e.z * t.y,
                this._y = e.z * t.x - e.x * t.z,
                this._z = e.x * t.y - e.y * t.x,
                this._w = n),
                this.normalize()
            }
            angleTo(e) {
                return 2 * Math.acos(Math.abs(_t(this.dot(e), -1, 1)))
            }
            rotateTowards(e, t) {
                const n = this.angleTo(e);
                if (0 === n)
                    return this;
                const i = Math.min(1, t / n);
                return this.slerp(e, i),
                this
            }
            identity() {
                return this.set(0, 0, 0, 1)
            }
            invert() {
                return this.conjugate()
            }
            conjugate() {
                return this._x *= -1,
                this._y *= -1,
                this._z *= -1,
                this._onChangeCallback(),
                this
            }
            dot(e) {
                return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
            }
            lengthSq() {
                return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
            }
            length() {
                return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
            }
            normalize() {
                let e = this.length();
                return 0 === e ? (this._x = 0,
                this._y = 0,
                this._z = 0,
                this._w = 1) : (e = 1 / e,
                this._x = this._x * e,
                this._y = this._y * e,
                this._z = this._z * e,
                this._w = this._w * e),
                this._onChangeCallback(),
                this
            }
            multiply(e) {
                return this.multiplyQuaternions(this, e)
            }
            premultiply(e) {
                return this.multiplyQuaternions(e, this)
            }
            multiplyQuaternions(e, t) {
                const n = e._x
                  , i = e._y
                  , r = e._z
                  , a = e._w
                  , s = t._x
                  , o = t._y
                  , l = t._z
                  , c = t._w;
                return this._x = n * c + a * s + i * l - r * o,
                this._y = i * c + a * o + r * s - n * l,
                this._z = r * c + a * l + n * o - i * s,
                this._w = a * c - n * s - i * o - r * l,
                this._onChangeCallback(),
                this
            }
            slerp(e, t) {
                if (0 === t)
                    return this;
                if (1 === t)
                    return this.copy(e);
                const n = this._x
                  , i = this._y
                  , r = this._z
                  , a = this._w;
                let s = a * e._w + n * e._x + i * e._y + r * e._z;
                if (s < 0 ? (this._w = -e._w,
                this._x = -e._x,
                this._y = -e._y,
                this._z = -e._z,
                s = -s) : this.copy(e),
                s >= 1)
                    return this._w = a,
                    this._x = n,
                    this._y = i,
                    this._z = r,
                    this;
                const o = 1 - s * s;
                if (o <= Number.EPSILON) {
                    const e = 1 - t;
                    return this._w = e * a + t * this._w,
                    this._x = e * n + t * this._x,
                    this._y = e * i + t * this._y,
                    this._z = e * r + t * this._z,
                    this.normalize(),
                    this
                }
                const l = Math.sqrt(o)
                  , c = Math.atan2(l, s)
                  , h = Math.sin((1 - t) * c) / l
                  , u = Math.sin(t * c) / l;
                return this._w = a * h + this._w * u,
                this._x = n * h + this._x * u,
                this._y = i * h + this._y * u,
                this._z = r * h + this._z * u,
                this._onChangeCallback(),
                this
            }
            slerpQuaternions(e, t, n) {
                return this.copy(e).slerp(t, n)
            }
            random() {
                const e = 2 * Math.PI * Math.random()
                  , t = 2 * Math.PI * Math.random()
                  , n = Math.random()
                  , i = Math.sqrt(1 - n)
                  , r = Math.sqrt(n);
                return this.set(i * Math.sin(e), i * Math.cos(e), r * Math.sin(t), r * Math.cos(t))
            }
            equals(e) {
                return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
            }
            fromArray(e, t=0) {
                return this._x = e[t],
                this._y = e[t + 1],
                this._z = e[t + 2],
                this._w = e[t + 3],
                this._onChangeCallback(),
                this
            }
            toArray(e=[], t=0) {
                return e[t] = this._x,
                e[t + 1] = this._y,
                e[t + 2] = this._z,
                e[t + 3] = this._w,
                e
            }
            fromBufferAttribute(e, t) {
                return this._x = e.getX(t),
                this._y = e.getY(t),
                this._z = e.getZ(t),
                this._w = e.getW(t),
                this._onChangeCallback(),
                this
            }
            toJSON() {
                return this.toArray()
            }
            _onChange(e) {
                return this._onChangeCallback = e,
                this
            }
            _onChangeCallback() {}
            *[Symbol.iterator]() {
                yield this._x,
                yield this._y,
                yield this._z,
                yield this._w
            }
        }
        class Zt {
            constructor(e=0, t=0, n=0) {
                Zt.prototype.isVector3 = !0,
                this.x = e,
                this.y = t,
                this.z = n
            }
            set(e, t, n) {
                return void 0 === n && (n = this.z),
                this.x = e,
                this.y = t,
                this.z = n,
                this
            }
            setScalar(e) {
                return this.x = e,
                this.y = e,
                this.z = e,
                this
            }
            setX(e) {
                return this.x = e,
                this
            }
            setY(e) {
                return this.y = e,
                this
            }
            setZ(e) {
                return this.z = e,
                this
            }
            setComponent(e, t) {
                switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                case 2:
                    this.z = t;
                    break;
                default:
                    throw new Error("index is out of range: " + e)
                }
                return this
            }
            getComponent(e) {
                switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + e)
                }
            }
            clone() {
                return new this.constructor(this.x,this.y,this.z)
            }
            copy(e) {
                return this.x = e.x,
                this.y = e.y,
                this.z = e.z,
                this
            }
            add(e) {
                return this.x += e.x,
                this.y += e.y,
                this.z += e.z,
                this
            }
            addScalar(e) {
                return this.x += e,
                this.y += e,
                this.z += e,
                this
            }
            addVectors(e, t) {
                return this.x = e.x + t.x,
                this.y = e.y + t.y,
                this.z = e.z + t.z,
                this
            }
            addScaledVector(e, t) {
                return this.x += e.x * t,
                this.y += e.y * t,
                this.z += e.z * t,
                this
            }
            sub(e) {
                return this.x -= e.x,
                this.y -= e.y,
                this.z -= e.z,
                this
            }
            subScalar(e) {
                return this.x -= e,
                this.y -= e,
                this.z -= e,
                this
            }
            subVectors(e, t) {
                return this.x = e.x - t.x,
                this.y = e.y - t.y,
                this.z = e.z - t.z,
                this
            }
            multiply(e) {
                return this.x *= e.x,
                this.y *= e.y,
                this.z *= e.z,
                this
            }
            multiplyScalar(e) {
                return this.x *= e,
                this.y *= e,
                this.z *= e,
                this
            }
            multiplyVectors(e, t) {
                return this.x = e.x * t.x,
                this.y = e.y * t.y,
                this.z = e.z * t.z,
                this
            }
            applyEuler(e) {
                return this.applyQuaternion($t.setFromEuler(e))
            }
            applyAxisAngle(e, t) {
                return this.applyQuaternion($t.setFromAxisAngle(e, t))
            }
            applyMatrix3(e) {
                const t = this.x
                  , n = this.y
                  , i = this.z
                  , r = e.elements;
                return this.x = r[0] * t + r[3] * n + r[6] * i,
                this.y = r[1] * t + r[4] * n + r[7] * i,
                this.z = r[2] * t + r[5] * n + r[8] * i,
                this
            }
            applyNormalMatrix(e) {
                return this.applyMatrix3(e).normalize()
            }
            applyMatrix4(e) {
                const t = this.x
                  , n = this.y
                  , i = this.z
                  , r = e.elements
                  , a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
                return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a,
                this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a,
                this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a,
                this
            }
            applyQuaternion(e) {
                const t = this.x
                  , n = this.y
                  , i = this.z
                  , r = e.x
                  , a = e.y
                  , s = e.z
                  , o = e.w
                  , l = 2 * (a * i - s * n)
                  , c = 2 * (s * t - r * i)
                  , h = 2 * (r * n - a * t);
                return this.x = t + o * l + a * h - s * c,
                this.y = n + o * c + s * l - r * h,
                this.z = i + o * h + r * c - a * l,
                this
            }
            project(e) {
                return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
            }
            unproject(e) {
                return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
            }
            transformDirection(e) {
                const t = this.x
                  , n = this.y
                  , i = this.z
                  , r = e.elements;
                return this.x = r[0] * t + r[4] * n + r[8] * i,
                this.y = r[1] * t + r[5] * n + r[9] * i,
                this.z = r[2] * t + r[6] * n + r[10] * i,
                this.normalize()
            }
            divide(e) {
                return this.x /= e.x,
                this.y /= e.y,
                this.z /= e.z,
                this
            }
            divideScalar(e) {
                return this.multiplyScalar(1 / e)
            }
            min(e) {
                return this.x = Math.min(this.x, e.x),
                this.y = Math.min(this.y, e.y),
                this.z = Math.min(this.z, e.z),
                this
            }
            max(e) {
                return this.x = Math.max(this.x, e.x),
                this.y = Math.max(this.y, e.y),
                this.z = Math.max(this.z, e.z),
                this
            }
            clamp(e, t) {
                return this.x = _t(this.x, e.x, t.x),
                this.y = _t(this.y, e.y, t.y),
                this.z = _t(this.z, e.z, t.z),
                this
            }
            clampScalar(e, t) {
                return this.x = _t(this.x, e, t),
                this.y = _t(this.y, e, t),
                this.z = _t(this.z, e, t),
                this
            }
            clampLength(e, t) {
                const n = this.length();
                return this.divideScalar(n || 1).multiplyScalar(_t(n, e, t))
            }
            floor() {
                return this.x = Math.floor(this.x),
                this.y = Math.floor(this.y),
                this.z = Math.floor(this.z),
                this
            }
            ceil() {
                return this.x = Math.ceil(this.x),
                this.y = Math.ceil(this.y),
                this.z = Math.ceil(this.z),
                this
            }
            round() {
                return this.x = Math.round(this.x),
                this.y = Math.round(this.y),
                this.z = Math.round(this.z),
                this
            }
            roundToZero() {
                return this.x = Math.trunc(this.x),
                this.y = Math.trunc(this.y),
                this.z = Math.trunc(this.z),
                this
            }
            negate() {
                return this.x = -this.x,
                this.y = -this.y,
                this.z = -this.z,
                this
            }
            dot(e) {
                return this.x * e.x + this.y * e.y + this.z * e.z
            }
            lengthSq() {
                return this.x * this.x + this.y * this.y + this.z * this.z
            }
            length() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
            }
            manhattanLength() {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
            }
            normalize() {
                return this.divideScalar(this.length() || 1)
            }
            setLength(e) {
                return this.normalize().multiplyScalar(e)
            }
            lerp(e, t) {
                return this.x += (e.x - this.x) * t,
                this.y += (e.y - this.y) * t,
                this.z += (e.z - this.z) * t,
                this
            }
            lerpVectors(e, t, n) {
                return this.x = e.x + (t.x - e.x) * n,
                this.y = e.y + (t.y - e.y) * n,
                this.z = e.z + (t.z - e.z) * n,
                this
            }
            cross(e) {
                return this.crossVectors(this, e)
            }
            crossVectors(e, t) {
                const n = e.x
                  , i = e.y
                  , r = e.z
                  , a = t.x
                  , s = t.y
                  , o = t.z;
                return this.x = i * o - r * s,
                this.y = r * a - n * o,
                this.z = n * s - i * a,
                this
            }
            projectOnVector(e) {
                const t = e.lengthSq();
                if (0 === t)
                    return this.set(0, 0, 0);
                const n = e.dot(this) / t;
                return this.copy(e).multiplyScalar(n)
            }
            projectOnPlane(e) {
                return Jt.copy(this).projectOnVector(e),
                this.sub(Jt)
            }
            reflect(e) {
                return this.sub(Jt.copy(e).multiplyScalar(2 * this.dot(e)))
            }
            angleTo(e) {
                const t = Math.sqrt(this.lengthSq() * e.lengthSq());
                if (0 === t)
                    return Math.PI / 2;
                const n = this.dot(e) / t;
                return Math.acos(_t(n, -1, 1))
            }
            distanceTo(e) {
                return Math.sqrt(this.distanceToSquared(e))
            }
            distanceToSquared(e) {
                const t = this.x - e.x
                  , n = this.y - e.y
                  , i = this.z - e.z;
                return t * t + n * n + i * i
            }
            manhattanDistanceTo(e) {
                return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
            }
            setFromSpherical(e) {
                return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
            }
            setFromSphericalCoords(e, t, n) {
                const i = Math.sin(t) * e;
                return this.x = i * Math.sin(n),
                this.y = Math.cos(t) * e,
                this.z = i * Math.cos(n),
                this
            }
            setFromCylindrical(e) {
                return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
            }
            setFromCylindricalCoords(e, t, n) {
                return this.x = e * Math.sin(t),
                this.y = n,
                this.z = e * Math.cos(t),
                this
            }
            setFromMatrixPosition(e) {
                const t = e.elements;
                return this.x = t[12],
                this.y = t[13],
                this.z = t[14],
                this
            }
            setFromMatrixScale(e) {
                const t = this.setFromMatrixColumn(e, 0).length()
                  , n = this.setFromMatrixColumn(e, 1).length()
                  , i = this.setFromMatrixColumn(e, 2).length();
                return this.x = t,
                this.y = n,
                this.z = i,
                this
            }
            setFromMatrixColumn(e, t) {
                return this.fromArray(e.elements, 4 * t)
            }
            setFromMatrix3Column(e, t) {
                return this.fromArray(e.elements, 3 * t)
            }
            setFromEuler(e) {
                return this.x = e._x,
                this.y = e._y,
                this.z = e._z,
                this
            }
            setFromColor(e) {
                return this.x = e.r,
                this.y = e.g,
                this.z = e.b,
                this
            }
            equals(e) {
                return e.x === this.x && e.y === this.y && e.z === this.z
            }
            fromArray(e, t=0) {
                return this.x = e[t],
                this.y = e[t + 1],
                this.z = e[t + 2],
                this
            }
            toArray(e=[], t=0) {
                return e[t] = this.x,
                e[t + 1] = this.y,
                e[t + 2] = this.z,
                e
            }
            fromBufferAttribute(e, t) {
                return this.x = e.getX(t),
                this.y = e.getY(t),
                this.z = e.getZ(t),
                this
            }
            random() {
                return this.x = Math.random(),
                this.y = Math.random(),
                this.z = Math.random(),
                this
            }
            randomDirection() {
                const e = Math.random() * Math.PI * 2
                  , t = 2 * Math.random() - 1
                  , n = Math.sqrt(1 - t * t);
                return this.x = n * Math.cos(e),
                this.y = t,
                this.z = n * Math.sin(e),
                this
            }
            *[Symbol.iterator]() {
                yield this.x,
                yield this.y,
                yield this.z
            }
        }
        const Jt = new Zt
          , $t = new Kt;
        class en {
            constructor(e=new Zt(1 / 0,1 / 0,1 / 0), t=new Zt(-1 / 0,-1 / 0,-1 / 0)) {
                this.isBox3 = !0,
                this.min = e,
                this.max = t
            }
            set(e, t) {
                return this.min.copy(e),
                this.max.copy(t),
                this
            }
            setFromArray(e) {
                this.makeEmpty();
                for (let t = 0, n = e.length; t < n; t += 3)
                    this.expandByPoint(nn.fromArray(e, t));
                return this
            }
            setFromBufferAttribute(e) {
                this.makeEmpty();
                for (let t = 0, n = e.count; t < n; t++)
                    this.expandByPoint(nn.fromBufferAttribute(e, t));
                return this
            }
            setFromPoints(e) {
                this.makeEmpty();
                for (let t = 0, n = e.length; t < n; t++)
                    this.expandByPoint(e[t]);
                return this
            }
            setFromCenterAndSize(e, t) {
                const n = nn.copy(t).multiplyScalar(.5);
                return this.min.copy(e).sub(n),
                this.max.copy(e).add(n),
                this
            }
            setFromObject(e, t=!1) {
                return this.makeEmpty(),
                this.expandByObject(e, t)
            }
            clone() {
                return (new this.constructor).copy(this)
            }
            copy(e) {
                return this.min.copy(e.min),
                this.max.copy(e.max),
                this
            }
            makeEmpty() {
                return this.min.x = this.min.y = this.min.z = 1 / 0,
                this.max.x = this.max.y = this.max.z = -1 / 0,
                this
            }
            isEmpty() {
                return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
            }
            getCenter(e) {
                return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
            }
            getSize(e) {
                return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
            }
            expandByPoint(e) {
                return this.min.min(e),
                this.max.max(e),
                this
            }
            expandByVector(e) {
                return this.min.sub(e),
                this.max.add(e),
                this
            }
            expandByScalar(e) {
                return this.min.addScalar(-e),
                this.max.addScalar(e),
                this
            }
            expandByObject(e, t=!1) {
                e.updateWorldMatrix(!1, !1);
                const n = e.geometry;
                if (void 0 !== n) {
                    const i = n.getAttribute("position");
                    if (!0 === t && void 0 !== i && !0 !== e.isInstancedMesh)
                        for (let t = 0, n = i.count; t < n; t++)
                            !0 === e.isMesh ? e.getVertexPosition(t, nn) : nn.fromBufferAttribute(i, t),
                            nn.applyMatrix4(e.matrixWorld),
                            this.expandByPoint(nn);
                    else
                        void 0 !== e.boundingBox ? (null === e.boundingBox && e.computeBoundingBox(),
                        rn.copy(e.boundingBox)) : (null === n.boundingBox && n.computeBoundingBox(),
                        rn.copy(n.boundingBox)),
                        rn.applyMatrix4(e.matrixWorld),
                        this.union(rn)
                }
                const i = e.children;
                for (let e = 0, n = i.length; e < n; e++)
                    this.expandByObject(i[e], t);
                return this
            }
            containsPoint(e) {
                return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z
            }
            containsBox(e) {
                return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
            }
            getParameter(e, t) {
                return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
            }
            intersectsBox(e) {
                return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z
            }
            intersectsSphere(e) {
                return this.clampPoint(e.center, nn),
                nn.distanceToSquared(e.center) <= e.radius * e.radius
            }
            intersectsPlane(e) {
                let t, n;
                return e.normal.x > 0 ? (t = e.normal.x * this.min.x,
                n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x,
                n = e.normal.x * this.min.x),
                e.normal.y > 0 ? (t += e.normal.y * this.min.y,
                n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y,
                n += e.normal.y * this.min.y),
                e.normal.z > 0 ? (t += e.normal.z * this.min.z,
                n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z,
                n += e.normal.z * this.min.z),
                t <= -e.constant && n >= -e.constant
            }
            intersectsTriangle(e) {
                if (this.isEmpty())
                    return !1;
                this.getCenter(un),
                dn.subVectors(this.max, un),
                an.subVectors(e.a, un),
                sn.subVectors(e.b, un),
                on.subVectors(e.c, un),
                ln.subVectors(sn, an),
                cn.subVectors(on, sn),
                hn.subVectors(an, on);
                let t = [0, -ln.z, ln.y, 0, -cn.z, cn.y, 0, -hn.z, hn.y, ln.z, 0, -ln.x, cn.z, 0, -cn.x, hn.z, 0, -hn.x, -ln.y, ln.x, 0, -cn.y, cn.x, 0, -hn.y, hn.x, 0];
                return !!mn(t, an, sn, on, dn) && (t = [1, 0, 0, 0, 1, 0, 0, 0, 1],
                !!mn(t, an, sn, on, dn) && (fn.crossVectors(ln, cn),
                t = [fn.x, fn.y, fn.z],
                mn(t, an, sn, on, dn)))
            }
            clampPoint(e, t) {
                return t.copy(e).clamp(this.min, this.max)
            }
            distanceToPoint(e) {
                return this.clampPoint(e, nn).distanceTo(e)
            }
            getBoundingSphere(e) {
                return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center),
                e.radius = .5 * this.getSize(nn).length()),
                e
            }
            intersect(e) {
                return this.min.max(e.min),
                this.max.min(e.max),
                this.isEmpty() && this.makeEmpty(),
                this
            }
            union(e) {
                return this.min.min(e.min),
                this.max.max(e.max),
                this
            }
            applyMatrix4(e) {
                return this.isEmpty() || (tn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
                tn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
                tn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
                tn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
                tn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
                tn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
                tn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
                tn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
                this.setFromPoints(tn)),
                this
            }
            translate(e) {
                return this.min.add(e),
                this.max.add(e),
                this
            }
            equals(e) {
                return e.min.equals(this.min) && e.max.equals(this.max)
            }
        }
        const tn = [new Zt, new Zt, new Zt, new Zt, new Zt, new Zt, new Zt, new Zt]
          , nn = new Zt
          , rn = new en
          , an = new Zt
          , sn = new Zt
          , on = new Zt
          , ln = new Zt
          , cn = new Zt
          , hn = new Zt
          , un = new Zt
          , dn = new Zt
          , fn = new Zt
          , pn = new Zt;
        function mn(e, t, n, i, r) {
            for (let a = 0, s = e.length - 3; a <= s; a += 3) {
                pn.fromArray(e, a);
                const s = r.x * Math.abs(pn.x) + r.y * Math.abs(pn.y) + r.z * Math.abs(pn.z)
                  , o = t.dot(pn)
                  , l = n.dot(pn)
                  , c = i.dot(pn);
                if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > s)
                    return !1
            }
            return !0
        }
        const wn = new Zt
          , yn = new Zt
          , xn = new Zt
          , bn = new Zt
          , En = new Zt
          , Sn = new Zt
          , Mn = new Zt;
        class Tn {
            constructor(e=new Zt, t=new Zt(0,0,-1)) {
                this.origin = e,
                this.direction = t
            }
            set(e, t) {
                return this.origin.copy(e),
                this.direction.copy(t),
                this
            }
            copy(e) {
                return this.origin.copy(e.origin),
                this.direction.copy(e.direction),
                this
            }
            at(e, t) {
                return t.copy(this.origin).addScaledVector(this.direction, e)
            }
            lookAt(e) {
                return this.direction.copy(e).sub(this.origin).normalize(),
                this
            }
            recast(e) {
                return this.origin.copy(this.at(e, wn)),
                this
            }
            closestPointToPoint(e, t) {
                t.subVectors(e, this.origin);
                const n = t.dot(this.direction);
                return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n)
            }
            distanceToPoint(e) {
                return Math.sqrt(this.distanceSqToPoint(e))
            }
            distanceSqToPoint(e) {
                const t = wn.subVectors(e, this.origin).dot(this.direction);
                return t < 0 ? this.origin.distanceToSquared(e) : (wn.copy(this.origin).addScaledVector(this.direction, t),
                wn.distanceToSquared(e))
            }
            distanceSqToSegment(e, t, n, i) {
                yn.copy(e).add(t).multiplyScalar(.5),
                xn.copy(t).sub(e).normalize(),
                bn.copy(this.origin).sub(yn);
                const r = .5 * e.distanceTo(t)
                  , a = -this.direction.dot(xn)
                  , s = bn.dot(this.direction)
                  , o = -bn.dot(xn)
                  , l = bn.lengthSq()
                  , c = Math.abs(1 - a * a);
                let h, u, d, f;
                if (c > 0)
                    if (h = a * o - s,
                    u = a * s - o,
                    f = r * c,
                    h >= 0)
                        if (u >= -f)
                            if (u <= f) {
                                const e = 1 / c;
                                h *= e,
                                u *= e,
                                d = h * (h + a * u + 2 * s) + u * (a * h + u + 2 * o) + l
                            } else
                                u = r,
                                h = Math.max(0, -(a * u + s)),
                                d = -h * h + u * (u + 2 * o) + l;
                        else
                            u = -r,
                            h = Math.max(0, -(a * u + s)),
                            d = -h * h + u * (u + 2 * o) + l;
                    else
                        u <= -f ? (h = Math.max(0, -(-a * r + s)),
                        u = h > 0 ? -r : Math.min(Math.max(-r, -o), r),
                        d = -h * h + u * (u + 2 * o) + l) : u <= f ? (h = 0,
                        u = Math.min(Math.max(-r, -o), r),
                        d = u * (u + 2 * o) + l) : (h = Math.max(0, -(a * r + s)),
                        u = h > 0 ? r : Math.min(Math.max(-r, -o), r),
                        d = -h * h + u * (u + 2 * o) + l);
                else
                    u = a > 0 ? -r : r,
                    h = Math.max(0, -(a * u + s)),
                    d = -h * h + u * (u + 2 * o) + l;
                return n && n.copy(this.origin).addScaledVector(this.direction, h),
                i && i.copy(yn).addScaledVector(xn, u),
                d
            }
            intersectSphere(e, t) {
                wn.subVectors(e.center, this.origin);
                const n = wn.dot(this.direction)
                  , i = wn.dot(wn) - n * n
                  , r = e.radius * e.radius;
                if (i > r)
                    return null;
                const a = Math.sqrt(r - i)
                  , s = n - a
                  , o = n + a;
                return o < 0 ? null : s < 0 ? this.at(o, t) : this.at(s, t)
            }
            intersectsSphere(e) {
                return this.distanceSqToPoint(e.center) <= e.radius * e.radius
            }
            distanceToPlane(e) {
                const t = e.normal.dot(this.direction);
                if (0 === t)
                    return 0 === e.distanceToPoint(this.origin) ? 0 : null;
                const n = -(this.origin.dot(e.normal) + e.constant) / t;
                return n >= 0 ? n : null
            }
            intersectPlane(e, t) {
                const n = this.distanceToPlane(e);
                return null === n ? null : this.at(n, t)
            }
            intersectsPlane(e) {
                const t = e.distanceToPoint(this.origin);
                if (0 === t)
                    return !0;
                return e.normal.dot(this.direction) * t < 0
            }
            intersectBox(e, t) {
                let n, i, r, a, s, o;
                const l = 1 / this.direction.x
                  , c = 1 / this.direction.y
                  , h = 1 / this.direction.z
                  , u = this.origin;
                return l >= 0 ? (n = (e.min.x - u.x) * l,
                i = (e.max.x - u.x) * l) : (n = (e.max.x - u.x) * l,
                i = (e.min.x - u.x) * l),
                c >= 0 ? (r = (e.min.y - u.y) * c,
                a = (e.max.y - u.y) * c) : (r = (e.max.y - u.y) * c,
                a = (e.min.y - u.y) * c),
                n > a || r > i ? null : ((r > n || isNaN(n)) && (n = r),
                (a < i || isNaN(i)) && (i = a),
                h >= 0 ? (s = (e.min.z - u.z) * h,
                o = (e.max.z - u.z) * h) : (s = (e.max.z - u.z) * h,
                o = (e.min.z - u.z) * h),
                n > o || s > i ? null : ((s > n || n != n) && (n = s),
                (o < i || i != i) && (i = o),
                i < 0 ? null : this.at(n >= 0 ? n : i, t)))
            }
            intersectsBox(e) {
                return null !== this.intersectBox(e, wn)
            }
            intersectTriangle(e, t, n, i, r) {
                En.subVectors(t, e),
                Sn.subVectors(n, e),
                Mn.crossVectors(En, Sn);
                let a, s = this.direction.dot(Mn);
                if (s > 0) {
                    if (i)
                        return null;
                    a = 1
                } else {
                    if (!(s < 0))
                        return null;
                    a = -1,
                    s = -s
                }
                bn.subVectors(this.origin, e);
                const o = a * this.direction.dot(Sn.crossVectors(bn, Sn));
                if (o < 0)
                    return null;
                const l = a * this.direction.dot(En.cross(bn));
                if (l < 0)
                    return null;
                if (o + l > s)
                    return null;
                const c = -a * bn.dot(Mn);
                return c < 0 ? null : this.at(c / s, r)
            }
            applyMatrix4(e) {
                return this.origin.applyMatrix4(e),
                this.direction.transformDirection(e),
                this
            }
            equals(e) {
                return e.origin.equals(this.origin) && e.direction.equals(this.direction)
            }
            clone() {
                return (new this.constructor).copy(this)
            }
        }
        class Cn {
            constructor(e, t, n, i, r, a, s, o, l, c, h, u, d, f, p, m) {
                Cn.prototype.isMatrix4 = !0,
                this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                void 0 !== e && this.set(e, t, n, i, r, a, s, o, l, c, h, u, d, f, p, m)
            }
            set(e, t, n, i, r, a, s, o, l, c, h, u, d, f, p, m) {
                const g = this.elements;
                return g[0] = e,
                g[4] = t,
                g[8] = n,
                g[12] = i,
                g[1] = r,
                g[5] = a,
                g[9] = s,
                g[13] = o,
                g[2] = l,
                g[6] = c,
                g[10] = h,
                g[14] = u,
                g[3] = d,
                g[7] = f,
                g[11] = p,
                g[15] = m,
                this
            }
            identity() {
                return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
                this
            }
            clone() {
                return (new Cn).fromArray(this.elements)
            }
            copy(e) {
                const t = this.elements
                  , n = e.elements;
                return t[0] = n[0],
                t[1] = n[1],
                t[2] = n[2],
                t[3] = n[3],
                t[4] = n[4],
                t[5] = n[5],
                t[6] = n[6],
                t[7] = n[7],
                t[8] = n[8],
                t[9] = n[9],
                t[10] = n[10],
                t[11] = n[11],
                t[12] = n[12],
                t[13] = n[13],
                t[14] = n[14],
                t[15] = n[15],
                this
            }
            copyPosition(e) {
                const t = this.elements
                  , n = e.elements;
                return t[12] = n[12],
                t[13] = n[13],
                t[14] = n[14],
                this
            }
            setFromMatrix3(e) {
                const t = e.elements;
                return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1),
                this
            }
            extractBasis(e, t, n) {
                return e.setFromMatrixColumn(this, 0),
                t.setFromMatrixColumn(this, 1),
                n.setFromMatrixColumn(this, 2),
                this
            }
            makeBasis(e, t, n) {
                return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1),
                this
            }
            extractRotation(e) {
                const t = this.elements
                  , n = e.elements
                  , i = 1 / In.setFromMatrixColumn(e, 0).length()
                  , r = 1 / In.setFromMatrixColumn(e, 1).length()
                  , a = 1 / In.setFromMatrixColumn(e, 2).length();
                return t[0] = n[0] * i,
                t[1] = n[1] * i,
                t[2] = n[2] * i,
                t[3] = 0,
                t[4] = n[4] * r,
                t[5] = n[5] * r,
                t[6] = n[6] * r,
                t[7] = 0,
                t[8] = n[8] * a,
                t[9] = n[9] * a,
                t[10] = n[10] * a,
                t[11] = 0,
                t[12] = 0,
                t[13] = 0,
                t[14] = 0,
                t[15] = 1,
                this
            }
            makeRotationFromEuler(e) {
                const t = this.elements
                  , n = e.x
                  , i = e.y
                  , r = e.z
                  , a = Math.cos(n)
                  , s = Math.sin(n)
                  , o = Math.cos(i)
                  , l = Math.sin(i)
                  , c = Math.cos(r)
                  , h = Math.sin(r);
                if ("XYZ" === e.order) {
                    const e = a * c
                      , n = a * h
                      , i = s * c
                      , r = s * h;
                    t[0] = o * c,
                    t[4] = -o * h,
                    t[8] = l,
                    t[1] = n + i * l,
                    t[5] = e - r * l,
                    t[9] = -s * o,
                    t[2] = r - e * l,
                    t[6] = i + n * l,
                    t[10] = a * o
                } else if ("YXZ" === e.order) {
                    const e = o * c
                      , n = o * h
                      , i = l * c
                      , r = l * h;
                    t[0] = e + r * s,
                    t[4] = i * s - n,
                    t[8] = a * l,
                    t[1] = a * h,
                    t[5] = a * c,
                    t[9] = -s,
                    t[2] = n * s - i,
                    t[6] = r + e * s,
                    t[10] = a * o
                } else if ("ZXY" === e.order) {
                    const e = o * c
                      , n = o * h
                      , i = l * c
                      , r = l * h;
                    t[0] = e - r * s,
                    t[4] = -a * h,
                    t[8] = i + n * s,
                    t[1] = n + i * s,
                    t[5] = a * c,
                    t[9] = r - e * s,
                    t[2] = -a * l,
                    t[6] = s,
                    t[10] = a * o
                } else if ("ZYX" === e.order) {
                    const e = a * c
                      , n = a * h
                      , i = s * c
                      , r = s * h;
                    t[0] = o * c,
                    t[4] = i * l - n,
                    t[8] = e * l + r,
                    t[1] = o * h,
                    t[5] = r * l + e,
                    t[9] = n * l - i,
                    t[2] = -l,
                    t[6] = s * o,
                    t[10] = a * o
                } else if ("YZX" === e.order) {
                    const e = a * o
                      , n = a * l
                      , i = s * o
                      , r = s * l;
                    t[0] = o * c,
                    t[4] = r - e * h,
                    t[8] = i * h + n,
                    t[1] = h,
                    t[5] = a * c,
                    t[9] = -s * c,
                    t[2] = -l * c,
                    t[6] = n * h + i,
                    t[10] = e - r * h
                } else if ("XZY" === e.order) {
                    const e = a * o
                      , n = a * l
                      , i = s * o
                      , r = s * l;
                    t[0] = o * c,
                    t[4] = -h,
                    t[8] = l * c,
                    t[1] = e * h + r,
                    t[5] = a * c,
                    t[9] = n * h - i,
                    t[2] = i * h - n,
                    t[6] = s * c,
                    t[10] = r * h + e
                }
                return t[3] = 0,
                t[7] = 0,
                t[11] = 0,
                t[12] = 0,
                t[13] = 0,
                t[14] = 0,
                t[15] = 1,
                this
            }
            makeRotationFromQuaternion(e) {
                return this.compose(Pn, e, Bn)
            }
            lookAt(e, t, n) {
                const i = this.elements;
                return Un.subVectors(e, t),
                0 === Un.lengthSq() && (Un.z = 1),
                Un.normalize(),
                Dn.crossVectors(n, Un),
                0 === Dn.lengthSq() && (1 === Math.abs(n.z) ? Un.x += 1e-4 : Un.z += 1e-4,
                Un.normalize(),
                Dn.crossVectors(n, Un)),
                Dn.normalize(),
                Ln.crossVectors(Un, Dn),
                i[0] = Dn.x,
                i[4] = Ln.x,
                i[8] = Un.x,
                i[1] = Dn.y,
                i[5] = Ln.y,
                i[9] = Un.y,
                i[2] = Dn.z,
                i[6] = Ln.z,
                i[10] = Un.z,
                this
            }
            multiply(e) {
                return this.multiplyMatrices(this, e)
            }
            premultiply(e) {
                return this.multiplyMatrices(e, this)
            }
            multiplyMatrices(e, t) {
                const n = e.elements
                  , i = t.elements
                  , r = this.elements
                  , a = n[0]
                  , s = n[4]
                  , o = n[8]
                  , l = n[12]
                  , c = n[1]
                  , h = n[5]
                  , u = n[9]
                  , d = n[13]
                  , f = n[2]
                  , p = n[6]
                  , m = n[10]
                  , g = n[14]
                  , A = n[3]
                  , _ = n[7]
                  , v = n[11]
                  , w = n[15]
                  , y = i[0]
                  , x = i[4]
                  , b = i[8]
                  , E = i[12]
                  , S = i[1]
                  , M = i[5]
                  , T = i[9]
                  , C = i[13]
                  , I = i[2]
                  , R = i[6]
                  , P = i[10]
                  , B = i[14]
                  , D = i[3]
                  , L = i[7]
                  , U = i[11]
                  , k = i[15];
                return r[0] = a * y + s * S + o * I + l * D,
                r[4] = a * x + s * M + o * R + l * L,
                r[8] = a * b + s * T + o * P + l * U,
                r[12] = a * E + s * C + o * B + l * k,
                r[1] = c * y + h * S + u * I + d * D,
                r[5] = c * x + h * M + u * R + d * L,
                r[9] = c * b + h * T + u * P + d * U,
                r[13] = c * E + h * C + u * B + d * k,
                r[2] = f * y + p * S + m * I + g * D,
                r[6] = f * x + p * M + m * R + g * L,
                r[10] = f * b + p * T + m * P + g * U,
                r[14] = f * E + p * C + m * B + g * k,
                r[3] = A * y + _ * S + v * I + w * D,
                r[7] = A * x + _ * M + v * R + w * L,
                r[11] = A * b + _ * T + v * P + w * U,
                r[15] = A * E + _ * C + v * B + w * k,
                this
            }
            multiplyScalar(e) {
                const t = this.elements;
                return t[0] *= e,
                t[4] *= e,
                t[8] *= e,
                t[12] *= e,
                t[1] *= e,
                t[5] *= e,
                t[9] *= e,
                t[13] *= e,
                t[2] *= e,
                t[6] *= e,
                t[10] *= e,
                t[14] *= e,
                t[3] *= e,
                t[7] *= e,
                t[11] *= e,
                t[15] *= e,
                this
            }
            determinant() {
                const e = this.elements
                  , t = e[0]
                  , n = e[4]
                  , i = e[8]
                  , r = e[12]
                  , a = e[1]
                  , s = e[5]
                  , o = e[9]
                  , l = e[13]
                  , c = e[2]
                  , h = e[6]
                  , u = e[10]
                  , d = e[14];
                return e[3] * (+r * o * h - i * l * h - r * s * u + n * l * u + i * s * d - n * o * d) + e[7] * (+t * o * d - t * l * u + r * a * u - i * a * d + i * l * c - r * o * c) + e[11] * (+t * l * h - t * s * d - r * a * h + n * a * d + r * s * c - n * l * c) + e[15] * (-i * s * c - t * o * h + t * s * u + i * a * h - n * a * u + n * o * c)
            }
            transpose() {
                const e = this.elements;
                let t;
                return t = e[1],
                e[1] = e[4],
                e[4] = t,
                t = e[2],
                e[2] = e[8],
                e[8] = t,
                t = e[6],
                e[6] = e[9],
                e[9] = t,
                t = e[3],
                e[3] = e[12],
                e[12] = t,
                t = e[7],
                e[7] = e[13],
                e[13] = t,
                t = e[11],
                e[11] = e[14],
                e[14] = t,
                this
            }
            setPosition(e, t, n) {
                const i = this.elements;
                return e.isVector3 ? (i[12] = e.x,
                i[13] = e.y,
                i[14] = e.z) : (i[12] = e,
                i[13] = t,
                i[14] = n),
                this
            }
            invert() {
                const e = this.elements
                  , t = e[0]
                  , n = e[1]
                  , i = e[2]
                  , r = e[3]
                  , a = e[4]
                  , s = e[5]
                  , o = e[6]
                  , l = e[7]
                  , c = e[8]
                  , h = e[9]
                  , u = e[10]
                  , d = e[11]
                  , f = e[12]
                  , p = e[13]
                  , m = e[14]
                  , g = e[15]
                  , A = h * m * l - p * u * l + p * o * d - s * m * d - h * o * g + s * u * g
                  , _ = f * u * l - c * m * l - f * o * d + a * m * d + c * o * g - a * u * g
                  , v = c * p * l - f * h * l + f * s * d - a * p * d - c * s * g + a * h * g
                  , w = f * h * o - c * p * o - f * s * u + a * p * u + c * s * m - a * h * m
                  , y = t * A + n * _ + i * v + r * w;
                if (0 === y)
                    return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                const x = 1 / y;
                return e[0] = A * x,
                e[1] = (p * u * r - h * m * r - p * i * d + n * m * d + h * i * g - n * u * g) * x,
                e[2] = (s * m * r - p * o * r + p * i * l - n * m * l - s * i * g + n * o * g) * x,
                e[3] = (h * o * r - s * u * r - h * i * l + n * u * l + s * i * d - n * o * d) * x,
                e[4] = _ * x,
                e[5] = (c * m * r - f * u * r + f * i * d - t * m * d - c * i * g + t * u * g) * x,
                e[6] = (f * o * r - a * m * r - f * i * l + t * m * l + a * i * g - t * o * g) * x,
                e[7] = (a * u * r - c * o * r + c * i * l - t * u * l - a * i * d + t * o * d) * x,
                e[8] = v * x,
                e[9] = (f * h * r - c * p * r - f * n * d + t * p * d + c * n * g - t * h * g) * x,
                e[10] = (a * p * r - f * s * r + f * n * l - t * p * l - a * n * g + t * s * g) * x,
                e[11] = (c * s * r - a * h * r - c * n * l + t * h * l + a * n * d - t * s * d) * x,
                e[12] = w * x,
                e[13] = (c * p * i - f * h * i + f * n * u - t * p * u - c * n * m + t * h * m) * x,
                e[14] = (f * s * i - a * p * i - f * n * o + t * p * o + a * n * m - t * s * m) * x,
                e[15] = (a * h * i - c * s * i + c * n * o - t * h * o - a * n * u + t * s * u) * x,
                this
            }
            scale(e) {
                const t = this.elements
                  , n = e.x
                  , i = e.y
                  , r = e.z;
                return t[0] *= n,
                t[4] *= i,
                t[8] *= r,
                t[1] *= n,
                t[5] *= i,
                t[9] *= r,
                t[2] *= n,
                t[6] *= i,
                t[10] *= r,
                t[3] *= n,
                t[7] *= i,
                t[11] *= r,
                this
            }
            getMaxScaleOnAxis() {
                const e = this.elements
                  , t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
                  , n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6]
                  , i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
                return Math.sqrt(Math.max(t, n, i))
            }
            makeTranslation(e, t, n) {
                return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
                this
            }
            makeRotationX(e) {
                const t = Math.cos(e)
                  , n = Math.sin(e);
                return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1),
                this
            }
            makeRotationY(e) {
                const t = Math.cos(e)
                  , n = Math.sin(e);
                return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1),
                this
            }
            makeRotationZ(e) {
                const t = Math.cos(e)
                  , n = Math.sin(e);
                return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
                this
            }
            makeRotationAxis(e, t) {
                const n = Math.cos(t)
                  , i = Math.sin(t)
                  , r = 1 - n
                  , a = e.x
                  , s = e.y
                  , o = e.z
                  , l = r * a
                  , c = r * s;
                return this.set(l * a + n, l * s - i * o, l * o + i * s, 0, l * s + i * o, c * s + n, c * o - i * a, 0, l * o - i * s, c * o + i * a, r * o * o + n, 0, 0, 0, 0, 1),
                this
            }
            makeScale(e, t, n) {
                return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
                this
            }
            makeShear(e, t, n, i, r, a) {
                return this.set(1, n, r, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1),
                this
            }
            compose(e, t, n) {
                const i = this.elements
                  , r = t._x
                  , a = t._y
                  , s = t._z
                  , o = t._w
                  , l = r + r
                  , c = a + a
                  , h = s + s
                  , u = r * l
                  , d = r * c
                  , f = r * h
                  , p = a * c
                  , m = a * h
                  , g = s * h
                  , A = o * l
                  , _ = o * c
                  , v = o * h
                  , w = n.x
                  , y = n.y
                  , x = n.z;
                return i[0] = (1 - (p + g)) * w,
                i[1] = (d + v) * w,
                i[2] = (f - _) * w,
                i[3] = 0,
                i[4] = (d - v) * y,
                i[5] = (1 - (u + g)) * y,
                i[6] = (m + A) * y,
                i[7] = 0,
                i[8] = (f + _) * x,
                i[9] = (m - A) * x,
                i[10] = (1 - (u + p)) * x,
                i[11] = 0,
                i[12] = e.x,
                i[13] = e.y,
                i[14] = e.z,
                i[15] = 1,
                this
            }
            decompose(e, t, n) {
                const i = this.elements;
                let r = In.set(i[0], i[1], i[2]).length();
                const a = In.set(i[4], i[5], i[6]).length()
                  , s = In.set(i[8], i[9], i[10]).length();
                this.determinant() < 0 && (r = -r),
                e.x = i[12],
                e.y = i[13],
                e.z = i[14],
                Rn.copy(this);
                const o = 1 / r
                  , l = 1 / a
                  , c = 1 / s;
                return Rn.elements[0] *= o,
                Rn.elements[1] *= o,
                Rn.elements[2] *= o,
                Rn.elements[4] *= l,
                Rn.elements[5] *= l,
                Rn.elements[6] *= l,
                Rn.elements[8] *= c,
                Rn.elements[9] *= c,
                Rn.elements[10] *= c,
                t.setFromRotationMatrix(Rn),
                n.x = r,
                n.y = a,
                n.z = s,
                this
            }
            makePerspective(e, t, n, i, r, a, s=2e3) {
                const o = this.elements
                  , l = 2 * r / (t - e)
                  , c = 2 * r / (n - i)
                  , h = (t + e) / (t - e)
                  , u = (n + i) / (n - i);
                let d, f;
                if (s === ht)
                    d = -(a + r) / (a - r),
                    f = -2 * a * r / (a - r);
                else {
                    if (s !== ut)
                        throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + s);
                    d = -a / (a - r),
                    f = -a * r / (a - r)
                }
                return o[0] = l,
                o[4] = 0,
                o[8] = h,
                o[12] = 0,
                o[1] = 0,
                o[5] = c,
                o[9] = u,
                o[13] = 0,
                o[2] = 0,
                o[6] = 0,
                o[10] = d,
                o[14] = f,
                o[3] = 0,
                o[7] = 0,
                o[11] = -1,
                o[15] = 0,
                this
            }
            makeOrthographic(e, t, n, i, r, a, s=2e3) {
                const o = this.elements
                  , l = 1 / (t - e)
                  , c = 1 / (n - i)
                  , h = 1 / (a - r)
                  , u = (t + e) * l
                  , d = (n + i) * c;
                let f, p;
                if (s === ht)
                    f = (a + r) * h,
                    p = -2 * h;
                else {
                    if (s !== ut)
                        throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + s);
                    f = r * h,
                    p = -1 * h
                }
                return o[0] = 2 * l,
                o[4] = 0,
                o[8] = 0,
                o[12] = -u,
                o[1] = 0,
                o[5] = 2 * c,
                o[9] = 0,
                o[13] = -d,
                o[2] = 0,
                o[6] = 0,
                o[10] = p,
                o[14] = -f,
                o[3] = 0,
                o[7] = 0,
                o[11] = 0,
                o[15] = 1,
                this
            }
            equals(e) {
                const t = this.elements
                  , n = e.elements;
                for (let e = 0; e < 16; e++)
                    if (t[e] !== n[e])
                        return !1;
                return !0
            }
            fromArray(e, t=0) {
                for (let n = 0; n < 16; n++)
                    this.elements[n] = e[n + t];
                return this
            }
            toArray(e=[], t=0) {
                const n = this.elements;
                return e[t] = n[0],
                e[t + 1] = n[1],
                e[t + 2] = n[2],
                e[t + 3] = n[3],
                e[t + 4] = n[4],
                e[t + 5] = n[5],
                e[t + 6] = n[6],
                e[t + 7] = n[7],
                e[t + 8] = n[8],
                e[t + 9] = n[9],
                e[t + 10] = n[10],
                e[t + 11] = n[11],
                e[t + 12] = n[12],
                e[t + 13] = n[13],
                e[t + 14] = n[14],
                e[t + 15] = n[15],
                e
            }
        }
        const In = new Zt
          , Rn = new Cn
          , Pn = new Zt(0,0,0)
          , Bn = new Zt(1,1,1)
          , Dn = new Zt
          , Ln = new Zt
          , Un = new Zt
          , kn = new Cn
          , Nn = new Kt;
        class Fn {
            constructor(e=0, t=0, n=0, i=Fn.DEFAULT_ORDER) {
                this.isEuler = !0,
                this._x = e,
                this._y = t,
                this._z = n,
                this._order = i
            }
            get x() {
                return this._x
            }
            set x(e) {
                this._x = e,
                this._onChangeCallback()
            }
            get y() {
                return this._y
            }
            set y(e) {
                this._y = e,
                this._onChangeCallback()
            }
            get z() {
                return this._z
            }
            set z(e) {
                this._z = e,
                this._onChangeCallback()
            }
            get order() {
                return this._order
            }
            set order(e) {
                this._order = e,
                this._onChangeCallback()
            }
            set(e, t, n, i=this._order) {
                return this._x = e,
                this._y = t,
                this._z = n,
                this._order = i,
                this._onChangeCallback(),
                this
            }
            clone() {
                return new this.constructor(this._x,this._y,this._z,this._order)
            }
            copy(e) {
                return this._x = e._x,
                this._y = e._y,
                this._z = e._z,
                this._order = e._order,
                this._onChangeCallback(),
                this
            }
            setFromRotationMatrix(e, t=this._order, n=!0) {
                const i = e.elements
                  , r = i[0]
                  , a = i[4]
                  , s = i[8]
                  , o = i[1]
                  , l = i[5]
                  , c = i[9]
                  , h = i[2]
                  , u = i[6]
                  , d = i[10];
                switch (t) {
                case "XYZ":
                    this._y = Math.asin(_t(s, -1, 1)),
                    Math.abs(s) < .9999999 ? (this._x = Math.atan2(-c, d),
                    this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(u, l),
                    this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-_t(c, -1, 1)),
                    Math.abs(c) < .9999999 ? (this._y = Math.atan2(s, d),
                    this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-h, r),
                    this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin(_t(u, -1, 1)),
                    Math.abs(u) < .9999999 ? (this._y = Math.atan2(-h, d),
                    this._z = Math.atan2(-a, l)) : (this._y = 0,
                    this._z = Math.atan2(o, r));
                    break;
                case "ZYX":
                    this._y = Math.asin(-_t(h, -1, 1)),
                    Math.abs(h) < .9999999 ? (this._x = Math.atan2(u, d),
                    this._z = Math.atan2(o, r)) : (this._x = 0,
                    this._z = Math.atan2(-a, l));
                    break;
                case "YZX":
                    this._z = Math.asin(_t(o, -1, 1)),
                    Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, l),
                    this._y = Math.atan2(-h, r)) : (this._x = 0,
                    this._y = Math.atan2(s, d));
                    break;
                case "XZY":
                    this._z = Math.asin(-_t(a, -1, 1)),
                    Math.abs(a) < .9999999 ? (this._x = Math.atan2(u, l),
                    this._y = Math.atan2(s, r)) : (this._x = Math.atan2(-c, d),
                    this._y = 0);
                    break;
                default:
                    console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
                }
                return this._order = t,
                !0 === n && this._onChangeCallback(),
                this
            }
            setFromQuaternion(e, t, n) {
                return kn.makeRotationFromQuaternion(e),
                this.setFromRotationMatrix(kn, t, n)
            }
            setFromVector3(e, t=this._order) {
                return this.set(e.x, e.y, e.z, t)
            }
            reorder(e) {
                return Nn.setFromEuler(this),
                this.setFromQuaternion(Nn, e)
            }
            equals(e) {
                return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
            }
            fromArray(e) {
                return this._x = e[0],
                this._y = e[1],
                this._z = e[2],
                void 0 !== e[3] && (this._order = e[3]),
                this._onChangeCallback(),
                this
            }
            toArray(e=[], t=0) {
                return e[t] = this._x,
                e[t + 1] = this._y,
                e[t + 2] = this._z,
                e[t + 3] = this._order,
                e
            }
            _onChange(e) {
                return this._onChangeCallback = e,
                this
            }
            _onChangeCallback() {}
            *[Symbol.iterator]() {
                yield this._x,
                yield this._y,
                yield this._z,
                yield this._order
            }
        }
        Fn.DEFAULT_ORDER = "XYZ";
        "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{
            detail: {
                revision: e
            }
        })),
        "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = e);
        const Ps = {
            c: null,
            u: [new Zt, new Zt, new Zt],
            e: []
        }
          , Bs = {
            c: null,
            u: [new Zt, new Zt, new Zt],
            e: []
        }
          , Ds = [[], [], []]
          , Ls = [[], [], []]
          , Us = []
          , ks = new Zt
          , Ns = new Zt
          , Fs = new Zt
          , Os = new Zt
          , zs = new Zt
          , Ws = new Zt
          , Hs = new St
          , Vs = new en
          , Gs = new Cn
          , Qs = new Cn
          , Xs = new Tn;
        class js {
            constructor(e=new Zt, t=new Zt, n=new St) {
                this.center = e,
                this.halfSize = t,
                this.rotation = n
            }
            set(e, t, n) {
                return this.center = e,
                this.halfSize = t,
                this.rotation = n,
                this
            }
            copy(e) {
                return this.center.copy(e.center),
                this.halfSize.copy(e.halfSize),
                this.rotation.copy(e.rotation),
                this
            }
            clone() {
                return (new this.constructor).copy(this)
            }
            getSize(e) {
                return e.copy(this.halfSize).multiplyScalar(2)
            }
            clampPoint(e, t) {
                const n = this.halfSize;
                Os.subVectors(e, this.center),
                this.rotation.extractBasis(ks, Ns, Fs),
                t.copy(this.center);
                const i = bt.clamp(Os.dot(ks), -n.x, n.x);
                t.add(ks.multiplyScalar(i));
                const r = bt.clamp(Os.dot(Ns), -n.y, n.y);
                t.add(Ns.multiplyScalar(r));
                const a = bt.clamp(Os.dot(Fs), -n.z, n.z);
                return t.add(Fs.multiplyScalar(a)),
                t
            }
            containsPoint(e) {
                return Os.subVectors(e, this.center),
                this.rotation.extractBasis(ks, Ns, Fs),
                Math.abs(Os.dot(ks)) <= this.halfSize.x && Math.abs(Os.dot(Ns)) <= this.halfSize.y && Math.abs(Os.dot(Fs)) <= this.halfSize.z
            }
            intersectsBox3(e) {
                return this.intersectsOBB(qs.fromBox3(e))
            }
            intersectsSphere(e) {
                return this.clampPoint(e.center, Ws),
                Ws.distanceToSquared(e.center) <= e.radius * e.radius
            }
            intersectsOBB(e, t=Number.EPSILON) {
                Ps.c = this.center,
                Ps.e[0] = this.halfSize.x,
                Ps.e[1] = this.halfSize.y,
                Ps.e[2] = this.halfSize.z,
                this.rotation.extractBasis(Ps.u[0], Ps.u[1], Ps.u[2]),
                Bs.c = e.center,
                Bs.e[0] = e.halfSize.x,
                Bs.e[1] = e.halfSize.y,
                Bs.e[2] = e.halfSize.z,
                e.rotation.extractBasis(Bs.u[0], Bs.u[1], Bs.u[2]);
                for (let e = 0; e < 3; e++)
                    for (let t = 0; t < 3; t++)
                        Ds[e][t] = Ps.u[e].dot(Bs.u[t]);
                Os.subVectors(Bs.c, Ps.c),
                Us[0] = Os.dot(Ps.u[0]),
                Us[1] = Os.dot(Ps.u[1]),
                Us[2] = Os.dot(Ps.u[2]);
                for (let e = 0; e < 3; e++)
                    for (let n = 0; n < 3; n++)
                        Ls[e][n] = Math.abs(Ds[e][n]) + t;
                let n, i;
                for (let e = 0; e < 3; e++)
                    if (n = Ps.e[e],
                    i = Bs.e[0] * Ls[e][0] + Bs.e[1] * Ls[e][1] + Bs.e[2] * Ls[e][2],
                    Math.abs(Us[e]) > n + i)
                        return !1;
                for (let e = 0; e < 3; e++)
                    if (n = Ps.e[0] * Ls[0][e] + Ps.e[1] * Ls[1][e] + Ps.e[2] * Ls[2][e],
                    i = Bs.e[e],
                    Math.abs(Us[0] * Ds[0][e] + Us[1] * Ds[1][e] + Us[2] * Ds[2][e]) > n + i)
                        return !1;
                return n = Ps.e[1] * Ls[2][0] + Ps.e[2] * Ls[1][0],
                i = Bs.e[1] * Ls[0][2] + Bs.e[2] * Ls[0][1],
                !(Math.abs(Us[2] * Ds[1][0] - Us[1] * Ds[2][0]) > n + i) && (n = Ps.e[1] * Ls[2][1] + Ps.e[2] * Ls[1][1],
                i = Bs.e[0] * Ls[0][2] + Bs.e[2] * Ls[0][0],
                !(Math.abs(Us[2] * Ds[1][1] - Us[1] * Ds[2][1]) > n + i) && (n = Ps.e[1] * Ls[2][2] + Ps.e[2] * Ls[1][2],
                i = Bs.e[0] * Ls[0][1] + Bs.e[1] * Ls[0][0],
                !(Math.abs(Us[2] * Ds[1][2] - Us[1] * Ds[2][2]) > n + i) && (n = Ps.e[0] * Ls[2][0] + Ps.e[2] * Ls[0][0],
                i = Bs.e[1] * Ls[1][2] + Bs.e[2] * Ls[1][1],
                !(Math.abs(Us[0] * Ds[2][0] - Us[2] * Ds[0][0]) > n + i) && (n = Ps.e[0] * Ls[2][1] + Ps.e[2] * Ls[0][1],
                i = Bs.e[0] * Ls[1][2] + Bs.e[2] * Ls[1][0],
                !(Math.abs(Us[0] * Ds[2][1] - Us[2] * Ds[0][1]) > n + i) && (n = Ps.e[0] * Ls[2][2] + Ps.e[2] * Ls[0][2],
                i = Bs.e[0] * Ls[1][1] + Bs.e[1] * Ls[1][0],
                !(Math.abs(Us[0] * Ds[2][2] - Us[2] * Ds[0][2]) > n + i) && (n = Ps.e[0] * Ls[1][0] + Ps.e[1] * Ls[0][0],
                i = Bs.e[1] * Ls[2][2] + Bs.e[2] * Ls[2][1],
                !(Math.abs(Us[1] * Ds[0][0] - Us[0] * Ds[1][0]) > n + i) && (n = Ps.e[0] * Ls[1][1] + Ps.e[1] * Ls[0][1],
                i = Bs.e[0] * Ls[2][2] + Bs.e[2] * Ls[2][0],
                !(Math.abs(Us[1] * Ds[0][1] - Us[0] * Ds[1][1]) > n + i) && (n = Ps.e[0] * Ls[1][2] + Ps.e[1] * Ls[0][2],
                i = Bs.e[0] * Ls[2][1] + Bs.e[1] * Ls[2][0],
                !(Math.abs(Us[1] * Ds[0][2] - Us[0] * Ds[1][2]) > n + i)))))))))
            }
            intersectsPlane(e) {
                this.rotation.extractBasis(ks, Ns, Fs);
                const t = this.halfSize.x * Math.abs(e.normal.dot(ks)) + this.halfSize.y * Math.abs(e.normal.dot(Ns)) + this.halfSize.z * Math.abs(e.normal.dot(Fs))
                  , n = e.normal.dot(this.center) - e.constant;
                return Math.abs(n) <= t
            }
            intersectRay(e, t) {
                return this.getSize(zs),
                Vs.setFromCenterAndSize(Os.set(0, 0, 0), zs),
                Gs.setFromMatrix3(this.rotation),
                Gs.setPosition(this.center),
                Qs.copy(Gs).invert(),
                Xs.copy(e).applyMatrix4(Qs),
                Xs.intersectBox(Vs, t) ? t.applyMatrix4(Gs) : null
            }
            intersectsRay(e) {
                return null !== this.intersectRay(e, Os)
            }
            fromBox3(e) {
                return e.getCenter(this.center),
                e.getSize(this.halfSize).multiplyScalar(.5),
                this.rotation.identity(),
                this
            }
            equals(e) {
                return e.center.equals(this.center) && e.halfSize.equals(this.halfSize) && e.rotation.equals(this.rotation)
            }
            applyMatrix4(e) {
                const t = e.elements;
                let n = Os.set(t[0], t[1], t[2]).length();
                const i = Os.set(t[4], t[5], t[6]).length()
                  , r = Os.set(t[8], t[9], t[10]).length();
                e.determinant() < 0 && (n = -n),
                Hs.setFromMatrix4(e);
                const a = 1 / n
                  , s = 1 / i
                  , o = 1 / r;
                return Hs.elements[0] *= a,
                Hs.elements[1] *= a,
                Hs.elements[2] *= a,
                Hs.elements[3] *= s,
                Hs.elements[4] *= s,
                Hs.elements[5] *= s,
                Hs.elements[6] *= o,
                Hs.elements[7] *= o,
                Hs.elements[8] *= o,
                this.rotation.multiply(Hs),
                this.halfSize.x *= n,
                this.halfSize.y *= i,
                this.halfSize.z *= r,
                Os.setFromMatrixPosition(e),
                this.center.add(Os),
                this
            }
        }
        const qs = new js;
        function Ys(e) {
            let t = e.length;
            for (; --t >= 0; )
                e[t] = 0
        }
        const Ks = 256
          , Zs = 286
          , Js = 30
          , $s = 15
          , eo = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
          , to = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
          , no = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
          , io = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
          , ro = new Array(576);
        Ys(ro);
        const ao = new Array(60);
        Ys(ao);
        const so = new Array(512);
        Ys(so);
        const oo = new Array(256);
        Ys(oo);
        const lo = new Array(29);
        Ys(lo);
        const co = new Array(Js);
        function ho(e, t, n, i, r) {
            this.static_tree = e,
            this.extra_bits = t,
            this.extra_base = n,
            this.elems = i,
            this.max_length = r,
            this.has_stree = e && e.length
        }
        let uo, fo, po;
        function mo(e, t) {
            this.dyn_tree = e,
            this.max_code = 0,
            this.stat_desc = t
        }
        Ys(co);
        const go = e => e < 256 ? so[e] : so[256 + (e >>> 7)]
          , Ao = (e, t) => {
            e.pending_buf[e.pending++] = 255 & t,
            e.pending_buf[e.pending++] = t >>> 8 & 255
        }
          , _o = (e, t, n) => {
            e.bi_valid > 16 - n ? (e.bi_buf |= t << e.bi_valid & 65535,
            Ao(e, e.bi_buf),
            e.bi_buf = t >> 16 - e.bi_valid,
            e.bi_valid += n - 16) : (e.bi_buf |= t << e.bi_valid & 65535,
            e.bi_valid += n)
        }
          , vo = (e, t, n) => {
            _o(e, n[2 * t], n[2 * t + 1])
        }
          , wo = (e, t) => {
            let n = 0;
            do {
                n |= 1 & e,
                e >>>= 1,
                n <<= 1
            } while (--t > 0);
            return n >>> 1
        }
          , yo = (e, t, n) => {
            const i = new Array(16);
            let r, a, s = 0;
            for (r = 1; r <= $s; r++)
                s = s + n[r - 1] << 1,
                i[r] = s;
            for (a = 0; a <= t; a++) {
                let t = e[2 * a + 1];
                0 !== t && (e[2 * a] = wo(i[t]++, t))
            }
        }
          , xo = e => {
            let t;
            for (t = 0; t < Zs; t++)
                e.dyn_ltree[2 * t] = 0;
            for (t = 0; t < Js; t++)
                e.dyn_dtree[2 * t] = 0;
            for (t = 0; t < 19; t++)
                e.bl_tree[2 * t] = 0;
            e.dyn_ltree[512] = 1,
            e.opt_len = e.static_len = 0,
            e.sym_next = e.matches = 0
        }
          , bo = e => {
            e.bi_valid > 8 ? Ao(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
            e.bi_buf = 0,
            e.bi_valid = 0
        }
          , Eo = (e, t, n, i) => {
            const r = 2 * t
              , a = 2 * n;
            return e[r] < e[a] || e[r] === e[a] && i[t] <= i[n]
        }
          , So = (e, t, n) => {
            const i = e.heap[n];
            let r = n << 1;
            for (; r <= e.heap_len && (r < e.heap_len && Eo(t, e.heap[r + 1], e.heap[r], e.depth) && r++,
            !Eo(t, i, e.heap[r], e.depth)); )
                e.heap[n] = e.heap[r],
                n = r,
                r <<= 1;
            e.heap[n] = i
        }
          , Mo = (e, t, n) => {
            let i, r, a, s, o = 0;
            if (0 !== e.sym_next)
                do {
                    i = 255 & e.pending_buf[e.sym_buf + o++],
                    i += (255 & e.pending_buf[e.sym_buf + o++]) << 8,
                    r = e.pending_buf[e.sym_buf + o++],
                    0 === i ? vo(e, r, t) : (a = oo[r],
                    vo(e, a + Ks + 1, t),
                    s = eo[a],
                    0 !== s && (r -= lo[a],
                    _o(e, r, s)),
                    i--,
                    a = go(i),
                    vo(e, a, n),
                    s = to[a],
                    0 !== s && (i -= co[a],
                    _o(e, i, s)))
                } while (o < e.sym_next);
            vo(e, 256, t)
        }
          , To = (e, t) => {
            const n = t.dyn_tree
              , i = t.stat_desc.static_tree
              , r = t.stat_desc.has_stree
              , a = t.stat_desc.elems;
            let s, o, l, c = -1;
            for (e.heap_len = 0,
            e.heap_max = 573,
            s = 0; s < a; s++)
                0 !== n[2 * s] ? (e.heap[++e.heap_len] = c = s,
                e.depth[s] = 0) : n[2 * s + 1] = 0;
            for (; e.heap_len < 2; )
                l = e.heap[++e.heap_len] = c < 2 ? ++c : 0,
                n[2 * l] = 1,
                e.depth[l] = 0,
                e.opt_len--,
                r && (e.static_len -= i[2 * l + 1]);
            for (t.max_code = c,
            s = e.heap_len >> 1; s >= 1; s--)
                So(e, n, s);
            l = a;
            do {
                s = e.heap[1],
                e.heap[1] = e.heap[e.heap_len--],
                So(e, n, 1),
                o = e.heap[1],
                e.heap[--e.heap_max] = s,
                e.heap[--e.heap_max] = o,
                n[2 * l] = n[2 * s] + n[2 * o],
                e.depth[l] = (e.depth[s] >= e.depth[o] ? e.depth[s] : e.depth[o]) + 1,
                n[2 * s + 1] = n[2 * o + 1] = l,
                e.heap[1] = l++,
                So(e, n, 1)
            } while (e.heap_len >= 2);
            e.heap[--e.heap_max] = e.heap[1],
            ( (e, t) => {
                const n = t.dyn_tree
                  , i = t.max_code
                  , r = t.stat_desc.static_tree
                  , a = t.stat_desc.has_stree
                  , s = t.stat_desc.extra_bits
                  , o = t.stat_desc.extra_base
                  , l = t.stat_desc.max_length;
                let c, h, u, d, f, p, m = 0;
                for (d = 0; d <= $s; d++)
                    e.bl_count[d] = 0;
                for (n[2 * e.heap[e.heap_max] + 1] = 0,
                c = e.heap_max + 1; c < 573; c++)
                    h = e.heap[c],
                    d = n[2 * n[2 * h + 1] + 1] + 1,
                    d > l && (d = l,
                    m++),
                    n[2 * h + 1] = d,
                    h > i || (e.bl_count[d]++,
                    f = 0,
                    h >= o && (f = s[h - o]),
                    p = n[2 * h],
                    e.opt_len += p * (d + f),
                    a && (e.static_len += p * (r[2 * h + 1] + f)));
                if (0 !== m) {
                    do {
                        for (d = l - 1; 0 === e.bl_count[d]; )
                            d--;
                        e.bl_count[d]--,
                        e.bl_count[d + 1] += 2,
                        e.bl_count[l]--,
                        m -= 2
                    } while (m > 0);
                    for (d = l; 0 !== d; d--)
                        for (h = e.bl_count[d]; 0 !== h; )
                            u = e.heap[--c],
                            u > i || (n[2 * u + 1] !== d && (e.opt_len += (d - n[2 * u + 1]) * n[2 * u],
                            n[2 * u + 1] = d),
                            h--)
                }
            }
            )(e, t),
            yo(n, c, e.bl_count)
        }
          , Co = (e, t, n) => {
            let i, r, a = -1, s = t[1], o = 0, l = 7, c = 4;
            for (0 === s && (l = 138,
            c = 3),
            t[2 * (n + 1) + 1] = 65535,
            i = 0; i <= n; i++)
                r = s,
                s = t[2 * (i + 1) + 1],
                ++o < l && r === s || (o < c ? e.bl_tree[2 * r] += o : 0 !== r ? (r !== a && e.bl_tree[2 * r]++,
                e.bl_tree[32]++) : o <= 10 ? e.bl_tree[34]++ : e.bl_tree[36]++,
                o = 0,
                a = r,
                0 === s ? (l = 138,
                c = 3) : r === s ? (l = 6,
                c = 3) : (l = 7,
                c = 4))
        }
          , Io = (e, t, n) => {
            let i, r, a = -1, s = t[1], o = 0, l = 7, c = 4;
            for (0 === s && (l = 138,
            c = 3),
            i = 0; i <= n; i++)
                if (r = s,
                s = t[2 * (i + 1) + 1],
                !(++o < l && r === s)) {
                    if (o < c)
                        do {
                            vo(e, r, e.bl_tree)
                        } while (0 != --o);
                    else
                        0 !== r ? (r !== a && (vo(e, r, e.bl_tree),
                        o--),
                        vo(e, 16, e.bl_tree),
                        _o(e, o - 3, 2)) : o <= 10 ? (vo(e, 17, e.bl_tree),
                        _o(e, o - 3, 3)) : (vo(e, 18, e.bl_tree),
                        _o(e, o - 11, 7));
                    o = 0,
                    a = r,
                    0 === s ? (l = 138,
                    c = 3) : r === s ? (l = 6,
                    c = 3) : (l = 7,
                    c = 4)
                }
        }
        ;
        let Ro = !1;
        const Po = (e, t, n, i) => {
            _o(e, 0 + (i ? 1 : 0), 3),
            bo(e),
            Ao(e, n),
            Ao(e, ~n),
            n && e.pending_buf.set(e.window.subarray(t, t + n), e.pending),
            e.pending += n
        }
        ;
        var Bo = (e, t, n, i) => {
            let r, a, s = 0;
            e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = (e => {
                let t, n = 4093624447;
                for (t = 0; t <= 31; t++,
                n >>>= 1)
                    if (1 & n && 0 !== e.dyn_ltree[2 * t])
                        return 0;
                if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26])
                    return 1;
                for (t = 32; t < Ks; t++)
                    if (0 !== e.dyn_ltree[2 * t])
                        return 1;
                return 0
            }
            )(e)),
            To(e, e.l_desc),
            To(e, e.d_desc),
            s = (e => {
                let t;
                for (Co(e, e.dyn_ltree, e.l_desc.max_code),
                Co(e, e.dyn_dtree, e.d_desc.max_code),
                To(e, e.bl_desc),
                t = 18; t >= 3 && 0 === e.bl_tree[2 * io[t] + 1]; t--)
                    ;
                return e.opt_len += 3 * (t + 1) + 5 + 5 + 4,
                t
            }
            )(e),
            r = e.opt_len + 3 + 7 >>> 3,
            a = e.static_len + 3 + 7 >>> 3,
            a <= r && (r = a)) : r = a = n + 5,
            n + 4 <= r && -1 !== t ? Po(e, t, n, i) : 4 === e.strategy || a === r ? (_o(e, 2 + (i ? 1 : 0), 3),
            Mo(e, ro, ao)) : (_o(e, 4 + (i ? 1 : 0), 3),
            ( (e, t, n, i) => {
                let r;
                for (_o(e, t - 257, 5),
                _o(e, n - 1, 5),
                _o(e, i - 4, 4),
                r = 0; r < i; r++)
                    _o(e, e.bl_tree[2 * io[r] + 1], 3);
                Io(e, e.dyn_ltree, t - 1),
                Io(e, e.dyn_dtree, n - 1)
            }
            )(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1),
            Mo(e, e.dyn_ltree, e.dyn_dtree)),
            xo(e),
            i && bo(e)
        }
          , Do = {
            _tr_init: e => {
                Ro || (( () => {
                    let e, t, n, i, r;
                    const a = new Array(16);
                    for (n = 0,
                    i = 0; i < 28; i++)
                        for (lo[i] = n,
                        e = 0; e < 1 << eo[i]; e++)
                            oo[n++] = i;
                    for (oo[n - 1] = i,
                    r = 0,
                    i = 0; i < 16; i++)
                        for (co[i] = r,
                        e = 0; e < 1 << to[i]; e++)
                            so[r++] = i;
                    for (r >>= 7; i < Js; i++)
                        for (co[i] = r << 7,
                        e = 0; e < 1 << to[i] - 7; e++)
                            so[256 + r++] = i;
                    for (t = 0; t <= $s; t++)
                        a[t] = 0;
                    for (e = 0; e <= 143; )
                        ro[2 * e + 1] = 8,
                        e++,
                        a[8]++;
                    for (; e <= 255; )
                        ro[2 * e + 1] = 9,
                        e++,
                        a[9]++;
                    for (; e <= 279; )
                        ro[2 * e + 1] = 7,
                        e++,
                        a[7]++;
                    for (; e <= 287; )
                        ro[2 * e + 1] = 8,
                        e++,
                        a[8]++;
                    for (yo(ro, 287, a),
                    e = 0; e < Js; e++)
                        ao[2 * e + 1] = 5,
                        ao[2 * e] = wo(e, 5);
                    uo = new ho(ro,eo,257,Zs,$s),
                    fo = new ho(ao,to,0,Js,$s),
                    po = new ho(new Array(0),no,0,19,7)
                }
                )(),
                Ro = !0),
                e.l_desc = new mo(e.dyn_ltree,uo),
                e.d_desc = new mo(e.dyn_dtree,fo),
                e.bl_desc = new mo(e.bl_tree,po),
                e.bi_buf = 0,
                e.bi_valid = 0,
                xo(e)
            }
            ,
            _tr_stored_block: Po,
            _tr_flush_block: Bo,
            _tr_tally: (e, t, n) => (e.pending_buf[e.sym_buf + e.sym_next++] = t,
            e.pending_buf[e.sym_buf + e.sym_next++] = t >> 8,
            e.pending_buf[e.sym_buf + e.sym_next++] = n,
            0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++,
            t--,
            e.dyn_ltree[2 * (oo[n] + Ks + 1)]++,
            e.dyn_dtree[2 * go(t)]++),
            e.sym_next === e.sym_end),
            _tr_align: e => {
                _o(e, 2, 3),
                vo(e, 256, ro),
                (e => {
                    16 === e.bi_valid ? (Ao(e, e.bi_buf),
                    e.bi_buf = 0,
                    e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf,
                    e.bi_buf >>= 8,
                    e.bi_valid -= 8)
                }
                )(e)
            }
        };
        var Lo = (e, t, n, i) => {
            let r = 65535 & e
              , a = e >>> 16 & 65535
              , s = 0;
            for (; 0 !== n; ) {
                s = n > 2e3 ? 2e3 : n,
                n -= s;
                do {
                    r = r + t[i++] | 0,
                    a = a + r | 0
                } while (--s);
                r %= 65521,
                a %= 65521
            }
            return r | a << 16
        }
        ;
        const Uo = new Uint32Array(( () => {
            let e, t = [];
            for (var n = 0; n < 256; n++) {
                e = n;
                for (var i = 0; i < 8; i++)
                    e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                t[n] = e
            }
            return t
        }
        )());
        var ko = (e, t, n, i) => {
            const r = Uo
              , a = i + n;
            e ^= -1;
            for (let n = i; n < a; n++)
                e = e >>> 8 ^ r[255 & (e ^ t[n])];
            return ~e
        }
          , No = {
            2: "need dictionary",
            1: "stream end",
            0: "",
            "-1": "file error",
            "-2": "stream error",
            "-3": "data error",
            "-4": "insufficient memory",
            "-5": "buffer error",
            "-6": "incompatible version"
        }
          , Fo = {
            Z_NO_FLUSH: 0,
            Z_PARTIAL_FLUSH: 1,
            Z_SYNC_FLUSH: 2,
            Z_FULL_FLUSH: 3,
            Z_FINISH: 4,
            Z_BLOCK: 5,
            Z_TREES: 6,
            Z_OK: 0,
            Z_STREAM_END: 1,
            Z_NEED_DICT: 2,
            Z_ERRNO: -1,
            Z_STREAM_ERROR: -2,
            Z_DATA_ERROR: -3,
            Z_MEM_ERROR: -4,
            Z_BUF_ERROR: -5,
            Z_NO_COMPRESSION: 0,
            Z_BEST_SPEED: 1,
            Z_BEST_COMPRESSION: 9,
            Z_DEFAULT_COMPRESSION: -1,
            Z_FILTERED: 1,
            Z_HUFFMAN_ONLY: 2,
            Z_RLE: 3,
            Z_FIXED: 4,
            Z_DEFAULT_STRATEGY: 0,
            Z_BINARY: 0,
            Z_TEXT: 1,
            Z_UNKNOWN: 2,
            Z_DEFLATED: 8
        };
        const {_tr_init: Oo, _tr_stored_block: zo, _tr_flush_block: Wo, _tr_tally: Ho, _tr_align: Vo} = Do
          , {Z_NO_FLUSH: Go, Z_PARTIAL_FLUSH: Qo, Z_FULL_FLUSH: Xo, Z_FINISH: jo, Z_BLOCK: qo, Z_OK: Yo, Z_STREAM_END: Ko, Z_STREAM_ERROR: Zo, Z_DATA_ERROR: Jo, Z_BUF_ERROR: $o, Z_DEFAULT_COMPRESSION: el, Z_FILTERED: tl, Z_HUFFMAN_ONLY: nl, Z_RLE: il, Z_FIXED: rl, Z_DEFAULT_STRATEGY: al, Z_UNKNOWN: sl, Z_DEFLATED: ol} = Fo
          , ll = 258
          , cl = 262
          , hl = 42
          , ul = 113
          , dl = 666
          , fl = (e, t) => (e.msg = No[t],
        t)
          , pl = e => 2 * e - (e > 4 ? 9 : 0)
          , ml = e => {
            let t = e.length;
            for (; --t >= 0; )
                e[t] = 0
        }
          , gl = e => {
            let t, n, i, r = e.w_size;
            t = e.hash_size,
            i = t;
            do {
                n = e.head[--i],
                e.head[i] = n >= r ? n - r : 0
            } while (--t);
            t = r,
            i = t;
            do {
                n = e.prev[--i],
                e.prev[i] = n >= r ? n - r : 0
            } while (--t)
        }
        ;
        let Al = (e, t, n) => (t << e.hash_shift ^ n) & e.hash_mask;
        const _l = e => {
            const t = e.state;
            let n = t.pending;
            n > e.avail_out && (n = e.avail_out),
            0 !== n && (e.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + n), e.next_out),
            e.next_out += n,
            t.pending_out += n,
            e.total_out += n,
            e.avail_out -= n,
            t.pending -= n,
            0 === t.pending && (t.pending_out = 0))
        }
          , vl = (e, t) => {
            Wo(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t),
            e.block_start = e.strstart,
            _l(e.strm)
        }
          , wl = (e, t) => {
            e.pending_buf[e.pending++] = t
        }
          , yl = (e, t) => {
            e.pending_buf[e.pending++] = t >>> 8 & 255,
            e.pending_buf[e.pending++] = 255 & t
        }
          , xl = (e, t, n, i) => {
            let r = e.avail_in;
            return r > i && (r = i),
            0 === r ? 0 : (e.avail_in -= r,
            t.set(e.input.subarray(e.next_in, e.next_in + r), n),
            1 === e.state.wrap ? e.adler = Lo(e.adler, t, r, n) : 2 === e.state.wrap && (e.adler = ko(e.adler, t, r, n)),
            e.next_in += r,
            e.total_in += r,
            r)
        }
          , bl = (e, t) => {
            let n, i, r = e.max_chain_length, a = e.strstart, s = e.prev_length, o = e.nice_match;
            const l = e.strstart > e.w_size - cl ? e.strstart - (e.w_size - cl) : 0
              , c = e.window
              , h = e.w_mask
              , u = e.prev
              , d = e.strstart + ll;
            let f = c[a + s - 1]
              , p = c[a + s];
            e.prev_length >= e.good_match && (r >>= 2),
            o > e.lookahead && (o = e.lookahead);
            do {
                if (n = t,
                c[n + s] === p && c[n + s - 1] === f && c[n] === c[a] && c[++n] === c[a + 1]) {
                    a += 2,
                    n++;
                    do {} while (c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && a < d);
                    if (i = ll - (d - a),
                    a = d - ll,
                    i > s) {
                        if (e.match_start = t,
                        s = i,
                        i >= o)
                            break;
                        f = c[a + s - 1],
                        p = c[a + s]
                    }
                }
            } while ((t = u[t & h]) > l && 0 != --r);
            return s <= e.lookahead ? s : e.lookahead
        }
          , El = e => {
            const t = e.w_size;
            let n, i, r;
            do {
                if (i = e.window_size - e.lookahead - e.strstart,
                e.strstart >= t + (t - cl) && (e.window.set(e.window.subarray(t, t + t - i), 0),
                e.match_start -= t,
                e.strstart -= t,
                e.block_start -= t,
                e.insert > e.strstart && (e.insert = e.strstart),
                gl(e),
                i += t),
                0 === e.strm.avail_in)
                    break;
                if (n = xl(e.strm, e.window, e.strstart + e.lookahead, i),
                e.lookahead += n,
                e.lookahead + e.insert >= 3)
                    for (r = e.strstart - e.insert,
                    e.ins_h = e.window[r],
                    e.ins_h = Al(e, e.ins_h, e.window[r + 1]); e.insert && (e.ins_h = Al(e, e.ins_h, e.window[r + 3 - 1]),
                    e.prev[r & e.w_mask] = e.head[e.ins_h],
                    e.head[e.ins_h] = r,
                    r++,
                    e.insert--,
                    !(e.lookahead + e.insert < 3)); )
                        ;
            } while (e.lookahead < cl && 0 !== e.strm.avail_in)
        }
          , Sl = (e, t) => {
            let n, i, r, a = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5, s = 0, o = e.strm.avail_in;
            do {
                if (n = 65535,
                r = e.bi_valid + 42 >> 3,
                e.strm.avail_out < r)
                    break;
                if (r = e.strm.avail_out - r,
                i = e.strstart - e.block_start,
                n > i + e.strm.avail_in && (n = i + e.strm.avail_in),
                n > r && (n = r),
                n < a && (0 === n && t !== jo || t === Go || n !== i + e.strm.avail_in))
                    break;
                s = t === jo && n === i + e.strm.avail_in ? 1 : 0,
                zo(e, 0, 0, s),
                e.pending_buf[e.pending - 4] = n,
                e.pending_buf[e.pending - 3] = n >> 8,
                e.pending_buf[e.pending - 2] = ~n,
                e.pending_buf[e.pending - 1] = ~n >> 8,
                _l(e.strm),
                i && (i > n && (i = n),
                e.strm.output.set(e.window.subarray(e.block_start, e.block_start + i), e.strm.next_out),
                e.strm.next_out += i,
                e.strm.avail_out -= i,
                e.strm.total_out += i,
                e.block_start += i,
                n -= i),
                n && (xl(e.strm, e.strm.output, e.strm.next_out, n),
                e.strm.next_out += n,
                e.strm.avail_out -= n,
                e.strm.total_out += n)
            } while (0 === s);
            return o -= e.strm.avail_in,
            o && (o >= e.w_size ? (e.matches = 2,
            e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0),
            e.strstart = e.w_size,
            e.insert = e.strstart) : (e.window_size - e.strstart <= o && (e.strstart -= e.w_size,
            e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0),
            e.matches < 2 && e.matches++,
            e.insert > e.strstart && (e.insert = e.strstart)),
            e.window.set(e.strm.input.subarray(e.strm.next_in - o, e.strm.next_in), e.strstart),
            e.strstart += o,
            e.insert += o > e.w_size - e.insert ? e.w_size - e.insert : o),
            e.block_start = e.strstart),
            e.high_water < e.strstart && (e.high_water = e.strstart),
            s ? 4 : t !== Go && t !== jo && 0 === e.strm.avail_in && e.strstart === e.block_start ? 2 : (r = e.window_size - e.strstart,
            e.strm.avail_in > r && e.block_start >= e.w_size && (e.block_start -= e.w_size,
            e.strstart -= e.w_size,
            e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0),
            e.matches < 2 && e.matches++,
            r += e.w_size,
            e.insert > e.strstart && (e.insert = e.strstart)),
            r > e.strm.avail_in && (r = e.strm.avail_in),
            r && (xl(e.strm, e.window, e.strstart, r),
            e.strstart += r,
            e.insert += r > e.w_size - e.insert ? e.w_size - e.insert : r),
            e.high_water < e.strstart && (e.high_water = e.strstart),
            r = e.bi_valid + 42 >> 3,
            r = e.pending_buf_size - r > 65535 ? 65535 : e.pending_buf_size - r,
            a = r > e.w_size ? e.w_size : r,
            i = e.strstart - e.block_start,
            (i >= a || (i || t === jo) && t !== Go && 0 === e.strm.avail_in && i <= r) && (n = i > r ? r : i,
            s = t === jo && 0 === e.strm.avail_in && n === i ? 1 : 0,
            zo(e, e.block_start, n, s),
            e.block_start += n,
            _l(e.strm)),
            s ? 3 : 1)
        }
          , Ml = (e, t) => {
            let n, i;
            for (; ; ) {
                if (e.lookahead < cl) {
                    if (El(e),
                    e.lookahead < cl && t === Go)
                        return 1;
                    if (0 === e.lookahead)
                        break
                }
                if (n = 0,
                e.lookahead >= 3 && (e.ins_h = Al(e, e.ins_h, e.window[e.strstart + 3 - 1]),
                n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                e.head[e.ins_h] = e.strstart),
                0 !== n && e.strstart - n <= e.w_size - cl && (e.match_length = bl(e, n)),
                e.match_length >= 3)
                    if (i = Ho(e, e.strstart - e.match_start, e.match_length - 3),
                    e.lookahead -= e.match_length,
                    e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
                        e.match_length--;
                        do {
                            e.strstart++,
                            e.ins_h = Al(e, e.ins_h, e.window[e.strstart + 3 - 1]),
                            n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                            e.head[e.ins_h] = e.strstart
                        } while (0 != --e.match_length);
                        e.strstart++
                    } else
                        e.strstart += e.match_length,
                        e.match_length = 0,
                        e.ins_h = e.window[e.strstart],
                        e.ins_h = Al(e, e.ins_h, e.window[e.strstart + 1]);
                else
                    i = Ho(e, 0, e.window[e.strstart]),
                    e.lookahead--,
                    e.strstart++;
                if (i && (vl(e, !1),
                0 === e.strm.avail_out))
                    return 1
            }
            return e.insert = e.strstart < 2 ? e.strstart : 2,
            t === jo ? (vl(e, !0),
            0 === e.strm.avail_out ? 3 : 4) : e.sym_next && (vl(e, !1),
            0 === e.strm.avail_out) ? 1 : 2
        }
          , Tl = (e, t) => {
            let n, i, r;
            for (; ; ) {
                if (e.lookahead < cl) {
                    if (El(e),
                    e.lookahead < cl && t === Go)
                        return 1;
                    if (0 === e.lookahead)
                        break
                }
                if (n = 0,
                e.lookahead >= 3 && (e.ins_h = Al(e, e.ins_h, e.window[e.strstart + 3 - 1]),
                n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                e.head[e.ins_h] = e.strstart),
                e.prev_length = e.match_length,
                e.prev_match = e.match_start,
                e.match_length = 2,
                0 !== n && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - cl && (e.match_length = bl(e, n),
                e.match_length <= 5 && (e.strategy === tl || 3 === e.match_length && e.strstart - e.match_start > 4096) && (e.match_length = 2)),
                e.prev_length >= 3 && e.match_length <= e.prev_length) {
                    r = e.strstart + e.lookahead - 3,
                    i = Ho(e, e.strstart - 1 - e.prev_match, e.prev_length - 3),
                    e.lookahead -= e.prev_length - 1,
                    e.prev_length -= 2;
                    do {
                        ++e.strstart <= r && (e.ins_h = Al(e, e.ins_h, e.window[e.strstart + 3 - 1]),
                        n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                        e.head[e.ins_h] = e.strstart)
                    } while (0 != --e.prev_length);
                    if (e.match_available = 0,
                    e.match_length = 2,
                    e.strstart++,
                    i && (vl(e, !1),
                    0 === e.strm.avail_out))
                        return 1
                } else if (e.match_available) {
                    if (i = Ho(e, 0, e.window[e.strstart - 1]),
                    i && vl(e, !1),
                    e.strstart++,
                    e.lookahead--,
                    0 === e.strm.avail_out)
                        return 1
                } else
                    e.match_available = 1,
                    e.strstart++,
                    e.lookahead--
            }
            return e.match_available && (i = Ho(e, 0, e.window[e.strstart - 1]),
            e.match_available = 0),
            e.insert = e.strstart < 2 ? e.strstart : 2,
            t === jo ? (vl(e, !0),
            0 === e.strm.avail_out ? 3 : 4) : e.sym_next && (vl(e, !1),
            0 === e.strm.avail_out) ? 1 : 2
        }
        ;
        function Cl(e, t, n, i, r) {
            this.good_length = e,
            this.max_lazy = t,
            this.nice_length = n,
            this.max_chain = i,
            this.func = r
        }
        const Il = [new Cl(0,0,0,0,Sl), new Cl(4,4,8,4,Ml), new Cl(4,5,16,8,Ml), new Cl(4,6,32,32,Ml), new Cl(4,4,16,16,Tl), new Cl(8,16,32,32,Tl), new Cl(8,16,128,128,Tl), new Cl(8,32,128,256,Tl), new Cl(32,128,258,1024,Tl), new Cl(32,258,258,4096,Tl)];
        function Rl() {
            this.strm = null,
            this.status = 0,
            this.pending_buf = null,
            this.pending_buf_size = 0,
            this.pending_out = 0,
            this.pending = 0,
            this.wrap = 0,
            this.gzhead = null,
            this.gzindex = 0,
            this.method = ol,
            this.last_flush = -1,
            this.w_size = 0,
            this.w_bits = 0,
            this.w_mask = 0,
            this.window = null,
            this.window_size = 0,
            this.prev = null,
            this.head = null,
            this.ins_h = 0,
            this.hash_size = 0,
            this.hash_bits = 0,
            this.hash_mask = 0,
            this.hash_shift = 0,
            this.block_start = 0,
            this.match_length = 0,
            this.prev_match = 0,
            this.match_available = 0,
            this.strstart = 0,
            this.match_start = 0,
            this.lookahead = 0,
            this.prev_length = 0,
            this.max_chain_length = 0,
            this.max_lazy_match = 0,
            this.level = 0,
            this.strategy = 0,
            this.good_match = 0,
            this.nice_match = 0,
            this.dyn_ltree = new Uint16Array(1146),
            this.dyn_dtree = new Uint16Array(122),
            this.bl_tree = new Uint16Array(78),
            ml(this.dyn_ltree),
            ml(this.dyn_dtree),
            ml(this.bl_tree),
            this.l_desc = null,
            this.d_desc = null,
            this.bl_desc = null,
            this.bl_count = new Uint16Array(16),
            this.heap = new Uint16Array(573),
            ml(this.heap),
            this.heap_len = 0,
            this.heap_max = 0,
            this.depth = new Uint16Array(573),
            ml(this.depth),
            this.sym_buf = 0,
            this.lit_bufsize = 0,
            this.sym_next = 0,
            this.sym_end = 0,
            this.opt_len = 0,
            this.static_len = 0,
            this.matches = 0,
            this.insert = 0,
            this.bi_buf = 0,
            this.bi_valid = 0
        }
        const Pl = e => {
            if (!e)
                return 1;
            const t = e.state;
            return !t || t.strm !== e || t.status !== hl && 57 !== t.status && 69 !== t.status && 73 !== t.status && 91 !== t.status && 103 !== t.status && t.status !== ul && t.status !== dl ? 1 : 0
        }
          , Bl = e => {
            if (Pl(e))
                return fl(e, Zo);
            e.total_in = e.total_out = 0,
            e.data_type = sl;
            const t = e.state;
            return t.pending = 0,
            t.pending_out = 0,
            t.wrap < 0 && (t.wrap = -t.wrap),
            t.status = 2 === t.wrap ? 57 : t.wrap ? hl : ul,
            e.adler = 2 === t.wrap ? 0 : 1,
            t.last_flush = -2,
            Oo(t),
            Yo
        }
          , Dl = e => {
            const t = Bl(e);
            var n;
            return t === Yo && ((n = e.state).window_size = 2 * n.w_size,
            ml(n.head),
            n.max_lazy_match = Il[n.level].max_lazy,
            n.good_match = Il[n.level].good_length,
            n.nice_match = Il[n.level].nice_length,
            n.max_chain_length = Il[n.level].max_chain,
            n.strstart = 0,
            n.block_start = 0,
            n.lookahead = 0,
            n.insert = 0,
            n.match_length = n.prev_length = 2,
            n.match_available = 0,
            n.ins_h = 0),
            t
        }
          , Ll = (e, t, n, i, r, a) => {
            if (!e)
                return Zo;
            let s = 1;
            if (t === el && (t = 6),
            i < 0 ? (s = 0,
            i = -i) : i > 15 && (s = 2,
            i -= 16),
            r < 1 || r > 9 || n !== ol || i < 8 || i > 15 || t < 0 || t > 9 || a < 0 || a > rl || 8 === i && 1 !== s)
                return fl(e, Zo);
            8 === i && (i = 9);
            const o = new Rl;
            return e.state = o,
            o.strm = e,
            o.status = hl,
            o.wrap = s,
            o.gzhead = null,
            o.w_bits = i,
            o.w_size = 1 << o.w_bits,
            o.w_mask = o.w_size - 1,
            o.hash_bits = r + 7,
            o.hash_size = 1 << o.hash_bits,
            o.hash_mask = o.hash_size - 1,
            o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3),
            o.window = new Uint8Array(2 * o.w_size),
            o.head = new Uint16Array(o.hash_size),
            o.prev = new Uint16Array(o.w_size),
            o.lit_bufsize = 1 << r + 6,
            o.pending_buf_size = 4 * o.lit_bufsize,
            o.pending_buf = new Uint8Array(o.pending_buf_size),
            o.sym_buf = o.lit_bufsize,
            o.sym_end = 3 * (o.lit_bufsize - 1),
            o.level = t,
            o.strategy = a,
            o.method = n,
            Dl(e)
        }
        ;
        var Ul = {
            deflateInit: (e, t) => Ll(e, t, ol, 15, 8, al),
            deflateInit2: Ll,
            deflateReset: Dl,
            deflateResetKeep: Bl,
            deflateSetHeader: (e, t) => Pl(e) || 2 !== e.state.wrap ? Zo : (e.state.gzhead = t,
            Yo),
            deflate: (e, t) => {
                if (Pl(e) || t > qo || t < 0)
                    return e ? fl(e, Zo) : Zo;
                const n = e.state;
                if (!e.output || 0 !== e.avail_in && !e.input || n.status === dl && t !== jo)
                    return fl(e, 0 === e.avail_out ? $o : Zo);
                const i = n.last_flush;
                if (n.last_flush = t,
                0 !== n.pending) {
                    if (_l(e),
                    0 === e.avail_out)
                        return n.last_flush = -1,
                        Yo
                } else if (0 === e.avail_in && pl(t) <= pl(i) && t !== jo)
                    return fl(e, $o);
                if (n.status === dl && 0 !== e.avail_in)
                    return fl(e, $o);
                if (n.status === hl && 0 === n.wrap && (n.status = ul),
                n.status === hl) {
                    let t = ol + (n.w_bits - 8 << 4) << 8
                      , i = -1;
                    if (i = n.strategy >= nl || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3,
                    t |= i << 6,
                    0 !== n.strstart && (t |= 32),
                    t += 31 - t % 31,
                    yl(n, t),
                    0 !== n.strstart && (yl(n, e.adler >>> 16),
                    yl(n, 65535 & e.adler)),
                    e.adler = 1,
                    n.status = ul,
                    _l(e),
                    0 !== n.pending)
                        return n.last_flush = -1,
                        Yo
                }
                if (57 === n.status)
                    if (e.adler = 0,
                    wl(n, 31),
                    wl(n, 139),
                    wl(n, 8),
                    n.gzhead)
                        wl(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)),
                        wl(n, 255 & n.gzhead.time),
                        wl(n, n.gzhead.time >> 8 & 255),
                        wl(n, n.gzhead.time >> 16 & 255),
                        wl(n, n.gzhead.time >> 24 & 255),
                        wl(n, 9 === n.level ? 2 : n.strategy >= nl || n.level < 2 ? 4 : 0),
                        wl(n, 255 & n.gzhead.os),
                        n.gzhead.extra && n.gzhead.extra.length && (wl(n, 255 & n.gzhead.extra.length),
                        wl(n, n.gzhead.extra.length >> 8 & 255)),
                        n.gzhead.hcrc && (e.adler = ko(e.adler, n.pending_buf, n.pending, 0)),
                        n.gzindex = 0,
                        n.status = 69;
                    else if (wl(n, 0),
                    wl(n, 0),
                    wl(n, 0),
                    wl(n, 0),
                    wl(n, 0),
                    wl(n, 9 === n.level ? 2 : n.strategy >= nl || n.level < 2 ? 4 : 0),
                    wl(n, 3),
                    n.status = ul,
                    _l(e),
                    0 !== n.pending)
                        return n.last_flush = -1,
                        Yo;
                if (69 === n.status) {
                    if (n.gzhead.extra) {
                        let t = n.pending
                          , i = (65535 & n.gzhead.extra.length) - n.gzindex;
                        for (; n.pending + i > n.pending_buf_size; ) {
                            let r = n.pending_buf_size - n.pending;
                            if (n.pending_buf.set(n.gzhead.extra.subarray(n.gzindex, n.gzindex + r), n.pending),
                            n.pending = n.pending_buf_size,
                            n.gzhead.hcrc && n.pending > t && (e.adler = ko(e.adler, n.pending_buf, n.pending - t, t)),
                            n.gzindex += r,
                            _l(e),
                            0 !== n.pending)
                                return n.last_flush = -1,
                                Yo;
                            t = 0,
                            i -= r
                        }
                        let r = new Uint8Array(n.gzhead.extra);
                        n.pending_buf.set(r.subarray(n.gzindex, n.gzindex + i), n.pending),
                        n.pending += i,
                        n.gzhead.hcrc && n.pending > t && (e.adler = ko(e.adler, n.pending_buf, n.pending - t, t)),
                        n.gzindex = 0
                    }
                    n.status = 73
                }
                if (73 === n.status) {
                    if (n.gzhead.name) {
                        let t, i = n.pending;
                        do {
                            if (n.pending === n.pending_buf_size) {
                                if (n.gzhead.hcrc && n.pending > i && (e.adler = ko(e.adler, n.pending_buf, n.pending - i, i)),
                                _l(e),
                                0 !== n.pending)
                                    return n.last_flush = -1,
                                    Yo;
                                i = 0
                            }
                            t = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0,
                            wl(n, t)
                        } while (0 !== t);
                        n.gzhead.hcrc && n.pending > i && (e.adler = ko(e.adler, n.pending_buf, n.pending - i, i)),
                        n.gzindex = 0
                    }
                    n.status = 91
                }
                if (91 === n.status) {
                    if (n.gzhead.comment) {
                        let t, i = n.pending;
                        do {
                            if (n.pending === n.pending_buf_size) {
                                if (n.gzhead.hcrc && n.pending > i && (e.adler = ko(e.adler, n.pending_buf, n.pending - i, i)),
                                _l(e),
                                0 !== n.pending)
                                    return n.last_flush = -1,
                                    Yo;
                                i = 0
                            }
                            t = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0,
                            wl(n, t)
                        } while (0 !== t);
                        n.gzhead.hcrc && n.pending > i && (e.adler = ko(e.adler, n.pending_buf, n.pending - i, i))
                    }
                    n.status = 103
                }
                if (103 === n.status) {
                    if (n.gzhead.hcrc) {
                        if (n.pending + 2 > n.pending_buf_size && (_l(e),
                        0 !== n.pending))
                            return n.last_flush = -1,
                            Yo;
                        wl(n, 255 & e.adler),
                        wl(n, e.adler >> 8 & 255),
                        e.adler = 0
                    }
                    if (n.status = ul,
                    _l(e),
                    0 !== n.pending)
                        return n.last_flush = -1,
                        Yo
                }
                if (0 !== e.avail_in || 0 !== n.lookahead || t !== Go && n.status !== dl) {
                    let i = 0 === n.level ? Sl(n, t) : n.strategy === nl ? ( (e, t) => {
                        let n;
                        for (; ; ) {
                            if (0 === e.lookahead && (El(e),
                            0 === e.lookahead)) {
                                if (t === Go)
                                    return 1;
                                break
                            }
                            if (e.match_length = 0,
                            n = Ho(e, 0, e.window[e.strstart]),
                            e.lookahead--,
                            e.strstart++,
                            n && (vl(e, !1),
                            0 === e.strm.avail_out))
                                return 1
                        }
                        return e.insert = 0,
                        t === jo ? (vl(e, !0),
                        0 === e.strm.avail_out ? 3 : 4) : e.sym_next && (vl(e, !1),
                        0 === e.strm.avail_out) ? 1 : 2
                    }
                    )(n, t) : n.strategy === il ? ( (e, t) => {
                        let n, i, r, a;
                        const s = e.window;
                        for (; ; ) {
                            if (e.lookahead <= ll) {
                                if (El(e),
                                e.lookahead <= ll && t === Go)
                                    return 1;
                                if (0 === e.lookahead)
                                    break
                            }
                            if (e.match_length = 0,
                            e.lookahead >= 3 && e.strstart > 0 && (r = e.strstart - 1,
                            i = s[r],
                            i === s[++r] && i === s[++r] && i === s[++r])) {
                                a = e.strstart + ll;
                                do {} while (i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && r < a);
                                e.match_length = ll - (a - r),
                                e.match_length > e.lookahead && (e.match_length = e.lookahead)
                            }
                            if (e.match_length >= 3 ? (n = Ho(e, 1, e.match_length - 3),
                            e.lookahead -= e.match_length,
                            e.strstart += e.match_length,
                            e.match_length = 0) : (n = Ho(e, 0, e.window[e.strstart]),
                            e.lookahead--,
                            e.strstart++),
                            n && (vl(e, !1),
                            0 === e.strm.avail_out))
                                return 1
                        }
                        return e.insert = 0,
                        t === jo ? (vl(e, !0),
                        0 === e.strm.avail_out ? 3 : 4) : e.sym_next && (vl(e, !1),
                        0 === e.strm.avail_out) ? 1 : 2
                    }
                    )(n, t) : Il[n.level].func(n, t);
                    if (3 !== i && 4 !== i || (n.status = dl),
                    1 === i || 3 === i)
                        return 0 === e.avail_out && (n.last_flush = -1),
                        Yo;
                    if (2 === i && (t === Qo ? Vo(n) : t !== qo && (zo(n, 0, 0, !1),
                    t === Xo && (ml(n.head),
                    0 === n.lookahead && (n.strstart = 0,
                    n.block_start = 0,
                    n.insert = 0))),
                    _l(e),
                    0 === e.avail_out))
                        return n.last_flush = -1,
                        Yo
                }
                return t !== jo ? Yo : n.wrap <= 0 ? Ko : (2 === n.wrap ? (wl(n, 255 & e.adler),
                wl(n, e.adler >> 8 & 255),
                wl(n, e.adler >> 16 & 255),
                wl(n, e.adler >> 24 & 255),
                wl(n, 255 & e.total_in),
                wl(n, e.total_in >> 8 & 255),
                wl(n, e.total_in >> 16 & 255),
                wl(n, e.total_in >> 24 & 255)) : (yl(n, e.adler >>> 16),
                yl(n, 65535 & e.adler)),
                _l(e),
                n.wrap > 0 && (n.wrap = -n.wrap),
                0 !== n.pending ? Yo : Ko)
            }
            ,
            deflateEnd: e => {
                if (Pl(e))
                    return Zo;
                const t = e.state.status;
                return e.state = null,
                t === ul ? fl(e, Jo) : Yo
            }
            ,
            deflateSetDictionary: (e, t) => {
                let n = t.length;
                if (Pl(e))
                    return Zo;
                const i = e.state
                  , r = i.wrap;
                if (2 === r || 1 === r && i.status !== hl || i.lookahead)
                    return Zo;
                if (1 === r && (e.adler = Lo(e.adler, t, n, 0)),
                i.wrap = 0,
                n >= i.w_size) {
                    0 === r && (ml(i.head),
                    i.strstart = 0,
                    i.block_start = 0,
                    i.insert = 0);
                    let e = new Uint8Array(i.w_size);
                    e.set(t.subarray(n - i.w_size, n), 0),
                    t = e,
                    n = i.w_size
                }
                const a = e.avail_in
                  , s = e.next_in
                  , o = e.input;
                for (e.avail_in = n,
                e.next_in = 0,
                e.input = t,
                El(i); i.lookahead >= 3; ) {
                    let e = i.strstart
                      , t = i.lookahead - 2;
                    do {
                        i.ins_h = Al(i, i.ins_h, i.window[e + 3 - 1]),
                        i.prev[e & i.w_mask] = i.head[i.ins_h],
                        i.head[i.ins_h] = e,
                        e++
                    } while (--t);
                    i.strstart = e,
                    i.lookahead = 2,
                    El(i)
                }
                return i.strstart += i.lookahead,
                i.block_start = i.strstart,
                i.insert = i.lookahead,
                i.lookahead = 0,
                i.match_length = i.prev_length = 2,
                i.match_available = 0,
                e.next_in = s,
                e.input = o,
                e.avail_in = a,
                i.wrap = r,
                Yo
            }
            ,
            deflateInfo: "pako deflate (from Nodeca project)"
        };
        const kl = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
        var Nl = function(e) {
            const t = Array.prototype.slice.call(arguments, 1);
            for (; t.length; ) {
                const n = t.shift();
                if (n) {
                    if ("object" != typeof n)
                        throw new TypeError(n + "must be non-object");
                    for (const t in n)
                        kl(n, t) && (e[t] = n[t])
                }
            }
            return e
        }
          , Fl = e => {
            let t = 0;
            for (let n = 0, i = e.length; n < i; n++)
                t += e[n].length;
            const n = new Uint8Array(t);
            for (let t = 0, i = 0, r = e.length; t < r; t++) {
                let r = e[t];
                n.set(r, i),
                i += r.length
            }
            return n
        }
        ;
        let Ol = !0;
        try {
            String.fromCharCode.apply(null, new Uint8Array(1))
        } catch (e) {
            Ol = !1
        }
        const zl = new Uint8Array(256);
        for (let e = 0; e < 256; e++)
            zl[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
        zl[254] = zl[254] = 1;
        var Wl = e => {
            if ("function" == typeof TextEncoder && TextEncoder.prototype.encode)
                return (new TextEncoder).encode(e);
            let t, n, i, r, a, s = e.length, o = 0;
            for (r = 0; r < s; r++)
                n = e.charCodeAt(r),
                55296 == (64512 & n) && r + 1 < s && (i = e.charCodeAt(r + 1),
                56320 == (64512 & i) && (n = 65536 + (n - 55296 << 10) + (i - 56320),
                r++)),
                o += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
            for (t = new Uint8Array(o),
            a = 0,
            r = 0; a < o; r++)
                n = e.charCodeAt(r),
                55296 == (64512 & n) && r + 1 < s && (i = e.charCodeAt(r + 1),
                56320 == (64512 & i) && (n = 65536 + (n - 55296 << 10) + (i - 56320),
                r++)),
                n < 128 ? t[a++] = n : n < 2048 ? (t[a++] = 192 | n >>> 6,
                t[a++] = 128 | 63 & n) : n < 65536 ? (t[a++] = 224 | n >>> 12,
                t[a++] = 128 | n >>> 6 & 63,
                t[a++] = 128 | 63 & n) : (t[a++] = 240 | n >>> 18,
                t[a++] = 128 | n >>> 12 & 63,
                t[a++] = 128 | n >>> 6 & 63,
                t[a++] = 128 | 63 & n);
            return t
        }
          , Hl = (e, t) => {
            const n = t || e.length;
            if ("function" == typeof TextDecoder && TextDecoder.prototype.decode)
                return (new TextDecoder).decode(e.subarray(0, t));
            let i, r;
            const a = new Array(2 * n);
            for (r = 0,
            i = 0; i < n; ) {
                let t = e[i++];
                if (t < 128) {
                    a[r++] = t;
                    continue
                }
                let s = zl[t];
                if (s > 4)
                    a[r++] = 65533,
                    i += s - 1;
                else {
                    for (t &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && i < n; )
                        t = t << 6 | 63 & e[i++],
                        s--;
                    s > 1 ? a[r++] = 65533 : t < 65536 ? a[r++] = t : (t -= 65536,
                    a[r++] = 55296 | t >> 10 & 1023,
                    a[r++] = 56320 | 1023 & t)
                }
            }
            return ( (e, t) => {
                if (t < 65534 && e.subarray && Ol)
                    return String.fromCharCode.apply(null, e.length === t ? e : e.subarray(0, t));
                let n = "";
                for (let i = 0; i < t; i++)
                    n += String.fromCharCode(e[i]);
                return n
            }
            )(a, r)
        }
          , Vl = (e, t) => {
            (t = t || e.length) > e.length && (t = e.length);
            let n = t - 1;
            for (; n >= 0 && 128 == (192 & e[n]); )
                n--;
            return n < 0 || 0 === n ? t : n + zl[e[n]] > t ? n : t
        }
        ;
        var Gl = function() {
            this.input = null,
            this.next_in = 0,
            this.avail_in = 0,
            this.total_in = 0,
            this.output = null,
            this.next_out = 0,
            this.avail_out = 0,
            this.total_out = 0,
            this.msg = "",
            this.state = null,
            this.data_type = 2,
            this.adler = 0
        };
        const Ql = Object.prototype.toString
          , {Z_NO_FLUSH: Xl, Z_SYNC_FLUSH: jl, Z_FULL_FLUSH: ql, Z_FINISH: Yl, Z_OK: Kl, Z_STREAM_END: Zl, Z_DEFAULT_COMPRESSION: Jl, Z_DEFAULT_STRATEGY: $l, Z_DEFLATED: ec} = Fo;
        function tc(e) {
            this.options = Nl({
                level: Jl,
                method: ec,
                chunkSize: 16384,
                windowBits: 15,
                memLevel: 8,
                strategy: $l
            }, e || {});
            let t = this.options;
            t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16),
            this.err = 0,
            this.msg = "",
            this.ended = !1,
            this.chunks = [],
            this.strm = new Gl,
            this.strm.avail_out = 0;
            let n = Ul.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
            if (n !== Kl)
                throw new Error(No[n]);
            if (t.header && Ul.deflateSetHeader(this.strm, t.header),
            t.dictionary) {
                let e;
                if (e = "string" == typeof t.dictionary ? Wl(t.dictionary) : "[object ArrayBuffer]" === Ql.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary,
                n = Ul.deflateSetDictionary(this.strm, e),
                n !== Kl)
                    throw new Error(No[n]);
                this._dict_set = !0
            }
        }
        function nc(e, t) {
            const n = new tc(t);
            if (n.push(e, !0),
            n.err)
                throw n.msg || No[n.err];
            return n.result
        }
        tc.prototype.push = function(e, t) {
            const n = this.strm
              , i = this.options.chunkSize;
            let r, a;
            if (this.ended)
                return !1;
            for (a = t === ~~t ? t : !0 === t ? Yl : Xl,
            "string" == typeof e ? n.input = Wl(e) : "[object ArrayBuffer]" === Ql.call(e) ? n.input = new Uint8Array(e) : n.input = e,
            n.next_in = 0,
            n.avail_in = n.input.length; ; )
                if (0 === n.avail_out && (n.output = new Uint8Array(i),
                n.next_out = 0,
                n.avail_out = i),
                (a === jl || a === ql) && n.avail_out <= 6)
                    this.onData(n.output.subarray(0, n.next_out)),
                    n.avail_out = 0;
                else {
                    if (r = Ul.deflate(n, a),
                    r === Zl)
                        return n.next_out > 0 && this.onData(n.output.subarray(0, n.next_out)),
                        r = Ul.deflateEnd(this.strm),
                        this.onEnd(r),
                        this.ended = !0,
                        r === Kl;
                    if (0 !== n.avail_out) {
                        if (a > 0 && n.next_out > 0)
                            this.onData(n.output.subarray(0, n.next_out)),
                            n.avail_out = 0;
                        else if (0 === n.avail_in)
                            break
                    } else
                        this.onData(n.output)
                }
            return !0
        }
        ,
        tc.prototype.onData = function(e) {
            this.chunks.push(e)
        }
        ,
        tc.prototype.onEnd = function(e) {
            e === Kl && (this.result = Fl(this.chunks)),
            this.chunks = [],
            this.err = e,
            this.msg = this.strm.msg
        }
        ;
        var ic = {
            Deflate: tc,
            deflate: nc,
            deflateRaw: function(e, t) {
                return (t = t || {}).raw = !0,
                nc(e, t)
            },
            gzip: function(e, t) {
                return (t = t || {}).gzip = !0,
                nc(e, t)
            },
            constants: Fo
        };
        const rc = 16209;
        var ac = function(e, t) {
            let n, i, r, a, s, o, l, c, h, u, d, f, p, m, g, A, _, v, w, y, x, b, E, S;
            const M = e.state;
            n = e.next_in,
            E = e.input,
            i = n + (e.avail_in - 5),
            r = e.next_out,
            S = e.output,
            a = r - (t - e.avail_out),
            s = r + (e.avail_out - 257),
            o = M.dmax,
            l = M.wsize,
            c = M.whave,
            h = M.wnext,
            u = M.window,
            d = M.hold,
            f = M.bits,
            p = M.lencode,
            m = M.distcode,
            g = (1 << M.lenbits) - 1,
            A = (1 << M.distbits) - 1;
            e: do {
                f < 15 && (d += E[n++] << f,
                f += 8,
                d += E[n++] << f,
                f += 8),
                _ = p[d & g];
                t: for (; ; ) {
                    if (v = _ >>> 24,
                    d >>>= v,
                    f -= v,
                    v = _ >>> 16 & 255,
                    0 === v)
                        S[r++] = 65535 & _;
                    else {
                        if (!(16 & v)) {
                            if (64 & v) {
                                if (32 & v) {
                                    M.mode = 16191;
                                    break e
                                }
                                e.msg = "invalid literal/length code",
                                M.mode = rc;
                                break e
                            }
                            _ = p[(65535 & _) + (d & (1 << v) - 1)];
                            continue t
                        }
                        for (w = 65535 & _,
                        v &= 15,
                        v && (f < v && (d += E[n++] << f,
                        f += 8),
                        w += d & (1 << v) - 1,
                        d >>>= v,
                        f -= v),
                        f < 15 && (d += E[n++] << f,
                        f += 8,
                        d += E[n++] << f,
                        f += 8),
                        _ = m[d & A]; ; ) {
                            if (v = _ >>> 24,
                            d >>>= v,
                            f -= v,
                            v = _ >>> 16 & 255,
                            16 & v) {
                                if (y = 65535 & _,
                                v &= 15,
                                f < v && (d += E[n++] << f,
                                f += 8,
                                f < v && (d += E[n++] << f,
                                f += 8)),
                                y += d & (1 << v) - 1,
                                y > o) {
                                    e.msg = "invalid distance too far back",
                                    M.mode = rc;
                                    break e
                                }
                                if (d >>>= v,
                                f -= v,
                                v = r - a,
                                y > v) {
                                    if (v = y - v,
                                    v > c && M.sane) {
                                        e.msg = "invalid distance too far back",
                                        M.mode = rc;
                                        break e
                                    }
                                    if (x = 0,
                                    b = u,
                                    0 === h) {
                                        if (x += l - v,
                                        v < w) {
                                            w -= v;
                                            do {
                                                S[r++] = u[x++]
                                            } while (--v);
                                            x = r - y,
                                            b = S
                                        }
                                    } else if (h < v) {
                                        if (x += l + h - v,
                                        v -= h,
                                        v < w) {
                                            w -= v;
                                            do {
                                                S[r++] = u[x++]
                                            } while (--v);
                                            if (x = 0,
                                            h < w) {
                                                v = h,
                                                w -= v;
                                                do {
                                                    S[r++] = u[x++]
                                                } while (--v);
                                                x = r - y,
                                                b = S
                                            }
                                        }
                                    } else if (x += h - v,
                                    v < w) {
                                        w -= v;
                                        do {
                                            S[r++] = u[x++]
                                        } while (--v);
                                        x = r - y,
                                        b = S
                                    }
                                    for (; w > 2; )
                                        S[r++] = b[x++],
                                        S[r++] = b[x++],
                                        S[r++] = b[x++],
                                        w -= 3;
                                    w && (S[r++] = b[x++],
                                    w > 1 && (S[r++] = b[x++]))
                                } else {
                                    x = r - y;
                                    do {
                                        S[r++] = S[x++],
                                        S[r++] = S[x++],
                                        S[r++] = S[x++],
                                        w -= 3
                                    } while (w > 2);
                                    w && (S[r++] = S[x++],
                                    w > 1 && (S[r++] = S[x++]))
                                }
                                break
                            }
                            if (64 & v) {
                                e.msg = "invalid distance code",
                                M.mode = rc;
                                break e
                            }
                            _ = m[(65535 & _) + (d & (1 << v) - 1)]
                        }
                    }
                    break
                }
            } while (n < i && r < s);
            w = f >> 3,
            n -= w,
            f -= w << 3,
            d &= (1 << f) - 1,
            e.next_in = n,
            e.next_out = r,
            e.avail_in = n < i ? i - n + 5 : 5 - (n - i),
            e.avail_out = r < s ? s - r + 257 : 257 - (r - s),
            M.hold = d,
            M.bits = f
        };
        const sc = 15
          , oc = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0])
          , lc = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78])
          , cc = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0])
          , hc = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
        var uc = (e, t, n, i, r, a, s, o) => {
            const l = o.bits;
            let c, h, u, d, f, p, m = 0, g = 0, A = 0, _ = 0, v = 0, w = 0, y = 0, x = 0, b = 0, E = 0, S = null;
            const M = new Uint16Array(16)
              , T = new Uint16Array(16);
            let C, I, R, P = null;
            for (m = 0; m <= sc; m++)
                M[m] = 0;
            for (g = 0; g < i; g++)
                M[t[n + g]]++;
            for (v = l,
            _ = sc; _ >= 1 && 0 === M[_]; _--)
                ;
            if (v > _ && (v = _),
            0 === _)
                return r[a++] = 20971520,
                r[a++] = 20971520,
                o.bits = 1,
                0;
            for (A = 1; A < _ && 0 === M[A]; A++)
                ;
            for (v < A && (v = A),
            x = 1,
            m = 1; m <= sc; m++)
                if (x <<= 1,
                x -= M[m],
                x < 0)
                    return -1;
            if (x > 0 && (0 === e || 1 !== _))
                return -1;
            for (T[1] = 0,
            m = 1; m < sc; m++)
                T[m + 1] = T[m] + M[m];
            for (g = 0; g < i; g++)
                0 !== t[n + g] && (s[T[t[n + g]]++] = g);
            if (0 === e ? (S = P = s,
            p = 20) : 1 === e ? (S = oc,
            P = lc,
            p = 257) : (S = cc,
            P = hc,
            p = 0),
            E = 0,
            g = 0,
            m = A,
            f = a,
            w = v,
            y = 0,
            u = -1,
            b = 1 << v,
            d = b - 1,
            1 === e && b > 852 || 2 === e && b > 592)
                return 1;
            for (; ; ) {
                C = m - y,
                s[g] + 1 < p ? (I = 0,
                R = s[g]) : s[g] >= p ? (I = P[s[g] - p],
                R = S[s[g] - p]) : (I = 96,
                R = 0),
                c = 1 << m - y,
                h = 1 << w,
                A = h;
                do {
                    h -= c,
                    r[f + (E >> y) + h] = C << 24 | I << 16 | R
                } while (0 !== h);
                for (c = 1 << m - 1; E & c; )
                    c >>= 1;
                if (0 !== c ? (E &= c - 1,
                E += c) : E = 0,
                g++,
                0 == --M[m]) {
                    if (m === _)
                        break;
                    m = t[n + s[g]]
                }
                if (m > v && (E & d) !== u) {
                    for (0 === y && (y = v),
                    f += A,
                    w = m - y,
                    x = 1 << w; w + y < _ && (x -= M[w + y],
                    !(x <= 0)); )
                        w++,
                        x <<= 1;
                    if (b += 1 << w,
                    1 === e && b > 852 || 2 === e && b > 592)
                        return 1;
                    u = E & d,
                    r[u] = v << 24 | w << 16 | f - a
                }
            }
            return 0 !== E && (r[f + E] = m - y << 24 | 64 << 16),
            o.bits = v,
            0
        }
        ;
        const {Z_FINISH: dc, Z_BLOCK: fc, Z_TREES: pc, Z_OK: mc, Z_STREAM_END: gc, Z_NEED_DICT: Ac, Z_STREAM_ERROR: _c, Z_DATA_ERROR: vc, Z_MEM_ERROR: wc, Z_BUF_ERROR: yc, Z_DEFLATED: xc} = Fo
          , bc = 16180
          , Ec = 16190
          , Sc = 16191
          , Mc = 16192
          , Tc = 16194
          , Cc = 16199
          , Ic = 16200
          , Rc = 16206
          , Pc = 16209
          , Bc = e => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
        function Dc() {
            this.strm = null,
            this.mode = 0,
            this.last = !1,
            this.wrap = 0,
            this.havedict = !1,
            this.flags = 0,
            this.dmax = 0,
            this.check = 0,
            this.total = 0,
            this.head = null,
            this.wbits = 0,
            this.wsize = 0,
            this.whave = 0,
            this.wnext = 0,
            this.window = null,
            this.hold = 0,
            this.bits = 0,
            this.length = 0,
            this.offset = 0,
            this.extra = 0,
            this.lencode = null,
            this.distcode = null,
            this.lenbits = 0,
            this.distbits = 0,
            this.ncode = 0,
            this.nlen = 0,
            this.ndist = 0,
            this.have = 0,
            this.next = null,
            this.lens = new Uint16Array(320),
            this.work = new Uint16Array(288),
            this.lendyn = null,
            this.distdyn = null,
            this.sane = 0,
            this.back = 0,
            this.was = 0
        }
        const Lc = e => {
            if (!e)
                return 1;
            const t = e.state;
            return !t || t.strm !== e || t.mode < bc || t.mode > 16211 ? 1 : 0
        }
          , Uc = e => {
            if (Lc(e))
                return _c;
            const t = e.state;
            return e.total_in = e.total_out = t.total = 0,
            e.msg = "",
            t.wrap && (e.adler = 1 & t.wrap),
            t.mode = bc,
            t.last = 0,
            t.havedict = 0,
            t.flags = -1,
            t.dmax = 32768,
            t.head = null,
            t.hold = 0,
            t.bits = 0,
            t.lencode = t.lendyn = new Int32Array(852),
            t.distcode = t.distdyn = new Int32Array(592),
            t.sane = 1,
            t.back = -1,
            mc
        }
          , kc = e => {
            if (Lc(e))
                return _c;
            const t = e.state;
            return t.wsize = 0,
            t.whave = 0,
            t.wnext = 0,
            Uc(e)
        }
          , Nc = (e, t) => {
            let n;
            if (Lc(e))
                return _c;
            const i = e.state;
            return t < 0 ? (n = 0,
            t = -t) : (n = 5 + (t >> 4),
            t < 48 && (t &= 15)),
            t && (t < 8 || t > 15) ? _c : (null !== i.window && i.wbits !== t && (i.window = null),
            i.wrap = n,
            i.wbits = t,
            kc(e))
        }
          , Fc = (e, t) => {
            if (!e)
                return _c;
            const n = new Dc;
            e.state = n,
            n.strm = e,
            n.window = null,
            n.mode = bc;
            const i = Nc(e, t);
            return i !== mc && (e.state = null),
            i
        }
        ;
        let Oc, zc, Wc = !0;
        const Hc = e => {
            if (Wc) {
                Oc = new Int32Array(512),
                zc = new Int32Array(32);
                let t = 0;
                for (; t < 144; )
                    e.lens[t++] = 8;
                for (; t < 256; )
                    e.lens[t++] = 9;
                for (; t < 280; )
                    e.lens[t++] = 7;
                for (; t < 288; )
                    e.lens[t++] = 8;
                for (uc(1, e.lens, 0, 288, Oc, 0, e.work, {
                    bits: 9
                }),
                t = 0; t < 32; )
                    e.lens[t++] = 5;
                uc(2, e.lens, 0, 32, zc, 0, e.work, {
                    bits: 5
                }),
                Wc = !1
            }
            e.lencode = Oc,
            e.lenbits = 9,
            e.distcode = zc,
            e.distbits = 5
        }
          , Vc = (e, t, n, i) => {
            let r;
            const a = e.state;
            return null === a.window && (a.wsize = 1 << a.wbits,
            a.wnext = 0,
            a.whave = 0,
            a.window = new Uint8Array(a.wsize)),
            i >= a.wsize ? (a.window.set(t.subarray(n - a.wsize, n), 0),
            a.wnext = 0,
            a.whave = a.wsize) : (r = a.wsize - a.wnext,
            r > i && (r = i),
            a.window.set(t.subarray(n - i, n - i + r), a.wnext),
            (i -= r) ? (a.window.set(t.subarray(n - i, n), 0),
            a.wnext = i,
            a.whave = a.wsize) : (a.wnext += r,
            a.wnext === a.wsize && (a.wnext = 0),
            a.whave < a.wsize && (a.whave += r))),
            0
        }
        ;
        var Gc = {
            inflateReset: kc,
            inflateReset2: Nc,
            inflateResetKeep: Uc,
            inflateInit: e => Fc(e, 15),
            inflateInit2: Fc,
            inflate: (e, t) => {
                let n, i, r, a, s, o, l, c, h, u, d, f, p, m, g, A, _, v, w, y, x, b, E = 0;
                const S = new Uint8Array(4);
                let M, T;
                const C = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
                if (Lc(e) || !e.output || !e.input && 0 !== e.avail_in)
                    return _c;
                n = e.state,
                n.mode === Sc && (n.mode = Mc),
                s = e.next_out,
                r = e.output,
                l = e.avail_out,
                a = e.next_in,
                i = e.input,
                o = e.avail_in,
                c = n.hold,
                h = n.bits,
                u = o,
                d = l,
                b = mc;
                e: for (; ; )
                    switch (n.mode) {
                    case bc:
                        if (0 === n.wrap) {
                            n.mode = Mc;
                            break
                        }
                        for (; h < 16; ) {
                            if (0 === o)
                                break e;
                            o--,
                            c += i[a++] << h,
                            h += 8
                        }
                        if (2 & n.wrap && 35615 === c) {
                            0 === n.wbits && (n.wbits = 15),
                            n.check = 0,
                            S[0] = 255 & c,
                            S[1] = c >>> 8 & 255,
                            n.check = ko(n.check, S, 2, 0),
                            c = 0,
                            h = 0,
                            n.mode = 16181;
                            break
                        }
                        if (n.head && (n.head.done = !1),
                        !(1 & n.wrap) || (((255 & c) << 8) + (c >> 8)) % 31) {
                            e.msg = "incorrect header check",
                            n.mode = Pc;
                            break
                        }
                        if ((15 & c) !== xc) {
                            e.msg = "unknown compression method",
                            n.mode = Pc;
                            break
                        }
                        if (c >>>= 4,
                        h -= 4,
                        x = 8 + (15 & c),
                        0 === n.wbits && (n.wbits = x),
                        x > 15 || x > n.wbits) {
                            e.msg = "invalid window size",
                            n.mode = Pc;
                            break
                        }
                        n.dmax = 1 << n.wbits,
                        n.flags = 0,
                        e.adler = n.check = 1,
                        n.mode = 512 & c ? 16189 : Sc,
                        c = 0,
                        h = 0;
                        break;
                    case 16181:
                        for (; h < 16; ) {
                            if (0 === o)
                                break e;
                            o--,
                            c += i[a++] << h,
                            h += 8
                        }
                        if (n.flags = c,
                        (255 & n.flags) !== xc) {
                            e.msg = "unknown compression method",
                            n.mode = Pc;
                            break
                        }
                        if (57344 & n.flags) {
                            e.msg = "unknown header flags set",
                            n.mode = Pc;
                            break
                        }
                        n.head && (n.head.text = c >> 8 & 1),
                        512 & n.flags && 4 & n.wrap && (S[0] = 255 & c,
                        S[1] = c >>> 8 & 255,
                        n.check = ko(n.check, S, 2, 0)),
                        c = 0,
                        h = 0,
                        n.mode = 16182;
                    case 16182:
                        for (; h < 32; ) {
                            if (0 === o)
                                break e;
                            o--,
                            c += i[a++] << h,
                            h += 8
                        }
                        n.head && (n.head.time = c),
                        512 & n.flags && 4 & n.wrap && (S[0] = 255 & c,
                        S[1] = c >>> 8 & 255,
                        S[2] = c >>> 16 & 255,
                        S[3] = c >>> 24 & 255,
                        n.check = ko(n.check, S, 4, 0)),
                        c = 0,
                        h = 0,
                        n.mode = 16183;
                    case 16183:
                        for (; h < 16; ) {
                            if (0 === o)
                                break e;
                            o--,
                            c += i[a++] << h,
                            h += 8
                        }
                        n.head && (n.head.xflags = 255 & c,
                        n.head.os = c >> 8),
                        512 & n.flags && 4 & n.wrap && (S[0] = 255 & c,
                        S[1] = c >>> 8 & 255,
                        n.check = ko(n.check, S, 2, 0)),
                        c = 0,
                        h = 0,
                        n.mode = 16184;
                    case 16184:
                        if (1024 & n.flags) {
                            for (; h < 16; ) {
                                if (0 === o)
                                    break e;
                                o--,
                                c += i[a++] << h,
                                h += 8
                            }
                            n.length = c,
                            n.head && (n.head.extra_len = c),
                            512 & n.flags && 4 & n.wrap && (S[0] = 255 & c,
                            S[1] = c >>> 8 & 255,
                            n.check = ko(n.check, S, 2, 0)),
                            c = 0,
                            h = 0
                        } else
                            n.head && (n.head.extra = null);
                        n.mode = 16185;
                    case 16185:
                        if (1024 & n.flags && (f = n.length,
                        f > o && (f = o),
                        f && (n.head && (x = n.head.extra_len - n.length,
                        n.head.extra || (n.head.extra = new Uint8Array(n.head.extra_len)),
                        n.head.extra.set(i.subarray(a, a + f), x)),
                        512 & n.flags && 4 & n.wrap && (n.check = ko(n.check, i, f, a)),
                        o -= f,
                        a += f,
                        n.length -= f),
                        n.length))
                            break e;
                        n.length = 0,
                        n.mode = 16186;
                    case 16186:
                        if (2048 & n.flags) {
                            if (0 === o)
                                break e;
                            f = 0;
                            do {
                                x = i[a + f++],
                                n.head && x && n.length < 65536 && (n.head.name += String.fromCharCode(x))
                            } while (x && f < o);
                            if (512 & n.flags && 4 & n.wrap && (n.check = ko(n.check, i, f, a)),
                            o -= f,
                            a += f,
                            x)
                                break e
                        } else
                            n.head && (n.head.name = null);
                        n.length = 0,
                        n.mode = 16187;
                    case 16187:
                        if (4096 & n.flags) {
                            if (0 === o)
                                break e;
                            f = 0;
                            do {
                                x = i[a + f++],
                                n.head && x && n.length < 65536 && (n.head.comment += String.fromCharCode(x))
                            } while (x && f < o);
                            if (512 & n.flags && 4 & n.wrap && (n.check = ko(n.check, i, f, a)),
                            o -= f,
                            a += f,
                            x)
                                break e
                        } else
                            n.head && (n.head.comment = null);
                        n.mode = 16188;
                    case 16188:
                        if (512 & n.flags) {
                            for (; h < 16; ) {
                                if (0 === o)
                                    break e;
                                o--,
                                c += i[a++] << h,
                                h += 8
                            }
                            if (4 & n.wrap && c !== (65535 & n.check)) {
                                e.msg = "header crc mismatch",
                                n.mode = Pc;
                                break
                            }
                            c = 0,
                            h = 0
                        }
                        n.head && (n.head.hcrc = n.flags >> 9 & 1,
                        n.head.done = !0),
                        e.adler = n.check = 0,
                        n.mode = Sc;
                        break;
                    case 16189:
                        for (; h < 32; ) {
                            if (0 === o)
                                break e;
                            o--,
                            c += i[a++] << h,
                            h += 8
                        }
                        e.adler = n.check = Bc(c),
                        c = 0,
                        h = 0,
                        n.mode = Ec;
                    case Ec:
                        if (0 === n.havedict)
                            return e.next_out = s,
                            e.avail_out = l,
                            e.next_in = a,
                            e.avail_in = o,
                            n.hold = c,
                            n.bits = h,
                            Ac;
                        e.adler = n.check = 1,
                        n.mode = Sc;
                    case Sc:
                        if (t === fc || t === pc)
                            break e;
                    case Mc:
                        if (n.last) {
                            c >>>= 7 & h,
                            h -= 7 & h,
                            n.mode = Rc;
                            break
                        }
                        for (; h < 3; ) {
                            if (0 === o)
                                break e;
                            o--,
                            c += i[a++] << h,
                            h += 8
                        }
                        switch (n.last = 1 & c,
                        c >>>= 1,
                        h -= 1,
                        3 & c) {
                        case 0:
                            n.mode = 16193;
                            break;
                        case 1:
                            if (Hc(n),
                            n.mode = Cc,
                            t === pc) {
                                c >>>= 2,
                                h -= 2;
                                break e
                            }
                            break;
                        case 2:
                            n.mode = 16196;
                            break;
                        case 3:
                            e.msg = "invalid block type",
                            n.mode = Pc
                        }
                        c >>>= 2,
                        h -= 2;
                        break;
                    case 16193:
                        for (c >>>= 7 & h,
                        h -= 7 & h; h < 32; ) {
                            if (0 === o)
                                break e;
                            o--,
                            c += i[a++] << h,
                            h += 8
                        }
                        if ((65535 & c) != (c >>> 16 ^ 65535)) {
                            e.msg = "invalid stored block lengths",
                            n.mode = Pc;
                            break
                        }
                        if (n.length = 65535 & c,
                        c = 0,
                        h = 0,
                        n.mode = Tc,
                        t === pc)
                            break e;
                    case Tc:
                        n.mode = 16195;
                    case 16195:
                        if (f = n.length,
                        f) {
                            if (f > o && (f = o),
                            f > l && (f = l),
                            0 === f)
                                break e;
                            r.set(i.subarray(a, a + f), s),
                            o -= f,
                            a += f,
                            l -= f,
                            s += f,
                            n.length -= f;
                            break
                        }
                        n.mode = Sc;
                        break;
                    case 16196:
                        for (; h < 14; ) {
                            if (0 === o)
                                break e;
                            o--,
                            c += i[a++] << h,
                            h += 8
                        }
                        if (n.nlen = 257 + (31 & c),
                        c >>>= 5,
                        h -= 5,
                        n.ndist = 1 + (31 & c),
                        c >>>= 5,
                        h -= 5,
                        n.ncode = 4 + (15 & c),
                        c >>>= 4,
                        h -= 4,
                        n.nlen > 286 || n.ndist > 30) {
                            e.msg = "too many length or distance symbols",
                            n.mode = Pc;
                            break
                        }
                        n.have = 0,
                        n.mode = 16197;
                    case 16197:
                        for (; n.have < n.ncode; ) {
                            for (; h < 3; ) {
                                if (0 === o)
                                    break e;
                                o--,
                                c += i[a++] << h,
                                h += 8
                            }
                            n.lens[C[n.have++]] = 7 & c,
                            c >>>= 3,
                            h -= 3
                        }
                        for (; n.have < 19; )
                            n.lens[C[n.have++]] = 0;
                        if (n.lencode = n.lendyn,
                        n.lenbits = 7,
                        M = {
                            bits: n.lenbits
                        },
                        b = uc(0, n.lens, 0, 19, n.lencode, 0, n.work, M),
                        n.lenbits = M.bits,
                        b) {
                            e.msg = "invalid code lengths set",
                            n.mode = Pc;
                            break
                        }
                        n.have = 0,
                        n.mode = 16198;
                    case 16198:
                        for (; n.have < n.nlen + n.ndist; ) {
                            for (; E = n.lencode[c & (1 << n.lenbits) - 1],
                            g = E >>> 24,
                            A = E >>> 16 & 255,
                            _ = 65535 & E,
                            !(g <= h); ) {
                                if (0 === o)
                                    break e;
                                o--,
                                c += i[a++] << h,
                                h += 8
                            }
                            if (_ < 16)
                                c >>>= g,
                                h -= g,
                                n.lens[n.have++] = _;
                            else {
                                if (16 === _) {
                                    for (T = g + 2; h < T; ) {
                                        if (0 === o)
                                            break e;
                                        o--,
                                        c += i[a++] << h,
                                        h += 8
                                    }
                                    if (c >>>= g,
                                    h -= g,
                                    0 === n.have) {
                                        e.msg = "invalid bit length repeat",
                                        n.mode = Pc;
                                        break
                                    }
                                    x = n.lens[n.have - 1],
                                    f = 3 + (3 & c),
                                    c >>>= 2,
                                    h -= 2
                                } else if (17 === _) {
                                    for (T = g + 3; h < T; ) {
                                        if (0 === o)
                                            break e;
                                        o--,
                                        c += i[a++] << h,
                                        h += 8
                                    }
                                    c >>>= g,
                                    h -= g,
                                    x = 0,
                                    f = 3 + (7 & c),
                                    c >>>= 3,
                                    h -= 3
                                } else {
                                    for (T = g + 7; h < T; ) {
                                        if (0 === o)
                                            break e;
                                        o--,
                                        c += i[a++] << h,
                                        h += 8
                                    }
                                    c >>>= g,
                                    h -= g,
                                    x = 0,
                                    f = 11 + (127 & c),
                                    c >>>= 7,
                                    h -= 7
                                }
                                if (n.have + f > n.nlen + n.ndist) {
                                    e.msg = "invalid bit length repeat",
                                    n.mode = Pc;
                                    break
                                }
                                for (; f--; )
                                    n.lens[n.have++] = x
                            }
                        }
                        if (n.mode === Pc)
                            break;
                        if (0 === n.lens[256]) {
                            e.msg = "invalid code -- missing end-of-block",
                            n.mode = Pc;
                            break
                        }
                        if (n.lenbits = 9,
                        M = {
                            bits: n.lenbits
                        },
                        b = uc(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, M),
                        n.lenbits = M.bits,
                        b) {
                            e.msg = "invalid literal/lengths set",
                            n.mode = Pc;
                            break
                        }
                        if (n.distbits = 6,
                        n.distcode = n.distdyn,
                        M = {
                            bits: n.distbits
                        },
                        b = uc(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, M),
                        n.distbits = M.bits,
                        b) {
                            e.msg = "invalid distances set",
                            n.mode = Pc;
                            break
                        }
                        if (n.mode = Cc,
                        t === pc)
                            break e;
                    case Cc:
                        n.mode = Ic;
                    case Ic:
                        if (o >= 6 && l >= 258) {
                            e.next_out = s,
                            e.avail_out = l,
                            e.next_in = a,
                            e.avail_in = o,
                            n.hold = c,
                            n.bits = h,
                            ac(e, d),
                            s = e.next_out,
                            r = e.output,
                            l = e.avail_out,
                            a = e.next_in,
                            i = e.input,
                            o = e.avail_in,
                            c = n.hold,
                            h = n.bits,
                            n.mode === Sc && (n.back = -1);
                            break
                        }
                        for (n.back = 0; E = n.lencode[c & (1 << n.lenbits) - 1],
                        g = E >>> 24,
                        A = E >>> 16 & 255,
                        _ = 65535 & E,
                        !(g <= h); ) {
                            if (0 === o)
                                break e;
                            o--,
                            c += i[a++] << h,
                            h += 8
                        }
                        if (A && !(240 & A)) {
                            for (v = g,
                            w = A,
                            y = _; E = n.lencode[y + ((c & (1 << v + w) - 1) >> v)],
                            g = E >>> 24,
                            A = E >>> 16 & 255,
                            _ = 65535 & E,
                            !(v + g <= h); ) {
                                if (0 === o)
                                    break e;
                                o--,
                                c += i[a++] << h,
                                h += 8
                            }
                            c >>>= v,
                            h -= v,
                            n.back += v
                        }
                        if (c >>>= g,
                        h -= g,
                        n.back += g,
                        n.length = _,
                        0 === A) {
                            n.mode = 16205;
                            break
                        }
                        if (32 & A) {
                            n.back = -1,
                            n.mode = Sc;
                            break
                        }
                        if (64 & A) {
                            e.msg = "invalid literal/length code",
                            n.mode = Pc;
                            break
                        }
                        n.extra = 15 & A,
                        n.mode = 16201;
                    case 16201:
                        if (n.extra) {
                            for (T = n.extra; h < T; ) {
                                if (0 === o)
                                    break e;
                                o--,
                                c += i[a++] << h,
                                h += 8
                            }
                            n.length += c & (1 << n.extra) - 1,
                            c >>>= n.extra,
                            h -= n.extra,
                            n.back += n.extra
                        }
                        n.was = n.length,
                        n.mode = 16202;
                    case 16202:
                        for (; E = n.distcode[c & (1 << n.distbits) - 1],
                        g = E >>> 24,
                        A = E >>> 16 & 255,
                        _ = 65535 & E,
                        !(g <= h); ) {
                            if (0 === o)
                                break e;
                            o--,
                            c += i[a++] << h,
                            h += 8
                        }
                        if (!(240 & A)) {
                            for (v = g,
                            w = A,
                            y = _; E = n.distcode[y + ((c & (1 << v + w) - 1) >> v)],
                            g = E >>> 24,
                            A = E >>> 16 & 255,
                            _ = 65535 & E,
                            !(v + g <= h); ) {
                                if (0 === o)
                                    break e;
                                o--,
                                c += i[a++] << h,
                                h += 8
                            }
                            c >>>= v,
                            h -= v,
                            n.back += v
                        }
                        if (c >>>= g,
                        h -= g,
                        n.back += g,
                        64 & A) {
                            e.msg = "invalid distance code",
                            n.mode = Pc;
                            break
                        }
                        n.offset = _,
                        n.extra = 15 & A,
                        n.mode = 16203;
                    case 16203:
                        if (n.extra) {
                            for (T = n.extra; h < T; ) {
                                if (0 === o)
                                    break e;
                                o--,
                                c += i[a++] << h,
                                h += 8
                            }
                            n.offset += c & (1 << n.extra) - 1,
                            c >>>= n.extra,
                            h -= n.extra,
                            n.back += n.extra
                        }
                        if (n.offset > n.dmax) {
                            e.msg = "invalid distance too far back",
                            n.mode = Pc;
                            break
                        }
                        n.mode = 16204;
                    case 16204:
                        if (0 === l)
                            break e;
                        if (f = d - l,
                        n.offset > f) {
                            if (f = n.offset - f,
                            f > n.whave && n.sane) {
                                e.msg = "invalid distance too far back",
                                n.mode = Pc;
                                break
                            }
                            f > n.wnext ? (f -= n.wnext,
                            p = n.wsize - f) : p = n.wnext - f,
                            f > n.length && (f = n.length),
                            m = n.window
                        } else
                            m = r,
                            p = s - n.offset,
                            f = n.length;
                        f > l && (f = l),
                        l -= f,
                        n.length -= f;
                        do {
                            r[s++] = m[p++]
                        } while (--f);
                        0 === n.length && (n.mode = Ic);
                        break;
                    case 16205:
                        if (0 === l)
                            break e;
                        r[s++] = n.length,
                        l--,
                        n.mode = Ic;
                        break;
                    case Rc:
                        if (n.wrap) {
                            for (; h < 32; ) {
                                if (0 === o)
                                    break e;
                                o--,
                                c |= i[a++] << h,
                                h += 8
                            }
                            if (d -= l,
                            e.total_out += d,
                            n.total += d,
                            4 & n.wrap && d && (e.adler = n.check = n.flags ? ko(n.check, r, d, s - d) : Lo(n.check, r, d, s - d)),
                            d = l,
                            4 & n.wrap && (n.flags ? c : Bc(c)) !== n.check) {
                                e.msg = "incorrect data check",
                                n.mode = Pc;
                                break
                            }
                            c = 0,
                            h = 0
                        }
                        n.mode = 16207;
                    case 16207:
                        if (n.wrap && n.flags) {
                            for (; h < 32; ) {
                                if (0 === o)
                                    break e;
                                o--,
                                c += i[a++] << h,
                                h += 8
                            }
                            if (4 & n.wrap && c !== (4294967295 & n.total)) {
                                e.msg = "incorrect length check",
                                n.mode = Pc;
                                break
                            }
                            c = 0,
                            h = 0
                        }
                        n.mode = 16208;
                    case 16208:
                        b = gc;
                        break e;
                    case Pc:
                        b = vc;
                        break e;
                    case 16210:
                        return wc;
                    default:
                        return _c
                    }
                return e.next_out = s,
                e.avail_out = l,
                e.next_in = a,
                e.avail_in = o,
                n.hold = c,
                n.bits = h,
                (n.wsize || d !== e.avail_out && n.mode < Pc && (n.mode < Rc || t !== dc)) && Vc(e, e.output, e.next_out, d - e.avail_out),
                u -= e.avail_in,
                d -= e.avail_out,
                e.total_in += u,
                e.total_out += d,
                n.total += d,
                4 & n.wrap && d && (e.adler = n.check = n.flags ? ko(n.check, r, d, e.next_out - d) : Lo(n.check, r, d, e.next_out - d)),
                e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === Sc ? 128 : 0) + (n.mode === Cc || n.mode === Tc ? 256 : 0),
                (0 === u && 0 === d || t === dc) && b === mc && (b = yc),
                b
            }
            ,
            inflateEnd: e => {
                if (Lc(e))
                    return _c;
                let t = e.state;
                return t.window && (t.window = null),
                e.state = null,
                mc
            }
            ,
            inflateGetHeader: (e, t) => {
                if (Lc(e))
                    return _c;
                const n = e.state;
                return 2 & n.wrap ? (n.head = t,
                t.done = !1,
                mc) : _c
            }
            ,
            inflateSetDictionary: (e, t) => {
                const n = t.length;
                let i, r, a;
                return Lc(e) ? _c : (i = e.state,
                0 !== i.wrap && i.mode !== Ec ? _c : i.mode === Ec && (r = 1,
                r = Lo(r, t, n, 0),
                r !== i.check) ? vc : (a = Vc(e, t, n, n),
                a ? (i.mode = 16210,
                wc) : (i.havedict = 1,
                mc)))
            }
            ,
            inflateInfo: "pako inflate (from Nodeca project)"
        };
        var Qc = function() {
            this.text = 0,
            this.time = 0,
            this.xflags = 0,
            this.os = 0,
            this.extra = null,
            this.extra_len = 0,
            this.name = "",
            this.comment = "",
            this.hcrc = 0,
            this.done = !1
        };
        const Xc = Object.prototype.toString
          , {Z_NO_FLUSH: jc, Z_FINISH: qc, Z_OK: Yc, Z_STREAM_END: Kc, Z_NEED_DICT: Zc, Z_STREAM_ERROR: Jc, Z_DATA_ERROR: $c, Z_MEM_ERROR: eh} = Fo;
        function th(e) {
            this.options = Nl({
                chunkSize: 65536,
                windowBits: 15,
                to: ""
            }, e || {});
            const t = this.options;
            t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits,
            0 === t.windowBits && (t.windowBits = -15)),
            !(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32),
            t.windowBits > 15 && t.windowBits < 48 && (15 & t.windowBits || (t.windowBits |= 15)),
            this.err = 0,
            this.msg = "",
            this.ended = !1,
            this.chunks = [],
            this.strm = new Gl,
            this.strm.avail_out = 0;
            let n = Gc.inflateInit2(this.strm, t.windowBits);
            if (n !== Yc)
                throw new Error(No[n]);
            if (this.header = new Qc,
            Gc.inflateGetHeader(this.strm, this.header),
            t.dictionary && ("string" == typeof t.dictionary ? t.dictionary = Wl(t.dictionary) : "[object ArrayBuffer]" === Xc.call(t.dictionary) && (t.dictionary = new Uint8Array(t.dictionary)),
            t.raw && (n = Gc.inflateSetDictionary(this.strm, t.dictionary),
            n !== Yc)))
                throw new Error(No[n])
        }
        function nh(e, t) {
            const n = new th(t);
            if (n.push(e),
            n.err)
                throw n.msg || No[n.err];
            return n.result
        }
        th.prototype.push = function(e, t) {
            const n = this.strm
              , i = this.options.chunkSize
              , r = this.options.dictionary;
            let a, s, o;
            if (this.ended)
                return !1;
            for (s = t === ~~t ? t : !0 === t ? qc : jc,
            "[object ArrayBuffer]" === Xc.call(e) ? n.input = new Uint8Array(e) : n.input = e,
            n.next_in = 0,
            n.avail_in = n.input.length; ; ) {
                for (0 === n.avail_out && (n.output = new Uint8Array(i),
                n.next_out = 0,
                n.avail_out = i),
                a = Gc.inflate(n, s),
                a === Zc && r && (a = Gc.inflateSetDictionary(n, r),
                a === Yc ? a = Gc.inflate(n, s) : a === $c && (a = Zc)); n.avail_in > 0 && a === Kc && n.state.wrap > 0 && 0 !== e[n.next_in]; )
                    Gc.inflateReset(n),
                    a = Gc.inflate(n, s);
                switch (a) {
                case Jc:
                case $c:
                case Zc:
                case eh:
                    return this.onEnd(a),
                    this.ended = !0,
                    !1
                }
                if (o = n.avail_out,
                n.next_out && (0 === n.avail_out || a === Kc))
                    if ("string" === this.options.to) {
                        let e = Vl(n.output, n.next_out)
                          , t = n.next_out - e
                          , r = Hl(n.output, e);
                        n.next_out = t,
                        n.avail_out = i - t,
                        t && n.output.set(n.output.subarray(e, e + t), 0),
                        this.onData(r)
                    } else
                        this.onData(n.output.length === n.next_out ? n.output : n.output.subarray(0, n.next_out));
                if (a !== Yc || 0 !== o) {
                    if (a === Kc)
                        return a = Gc.inflateEnd(this.strm),
                        this.onEnd(a),
                        this.ended = !0,
                        !0;
                    if (0 === n.avail_in)
                        break
                }
            }
            return !0
        }
        ,
        th.prototype.onData = function(e) {
            this.chunks.push(e)
        }
        ,
        th.prototype.onEnd = function(e) {
            e === Yc && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = Fl(this.chunks)),
            this.chunks = [],
            this.err = e,
            this.msg = this.strm.msg
        }
        ;
        var ih = {
            Inflate: th,
            inflate: nh,
            inflateRaw: function(e, t) {
                return (t = t || {}).raw = !0,
                nh(e, t)
            },
            ungzip: nh,
            constants: Fo
        };
        const {Deflate: rh, deflate: ah, deflateRaw: sh, gzip: oh} = ic
          , {Inflate: lh, inflate: ch, inflateRaw: hh, ungzip: uh} = ih;
        var dh = {
            Deflate: rh,
            deflate: ah,
            deflateRaw: sh,
            gzip: oh,
            Inflate: lh,
            inflate: ch,
            inflateRaw: hh,
            ungzip: uh,
            constants: Fo
        };
        function fh(e) {
            let t;
            e = (e = e.replace(/-/g, "+")).replace(/_/g, "/");
            try {
                t = atob(e)
            } catch (e) {
                return null
            }
            const n = new Uint8Array(t.length);
            for (let e = 0; e < t.length; ++e) {
                const i = t.charCodeAt(e);
                if (i > 255)
                    return null;
                n[e] = i
            }
            return n
        }
        var ph, mh, gh, Ah, _h, vh, wh, yh, xh, bh, Eh, Sh = function(e, t, n, i, r) {
            if ("m" === i)
                throw new TypeError("Private method is not writable");
            if ("a" === i && !r)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
            n
        }, Mh = function(e, t, n, i) {
            if ("a" === n && !i)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        class Th {
            constructor(e) {
                ph.add(this),
                gh.set(this, []),
                Ah.set(this, []),
                _h.set(this, []),
                vh.set(this, []),
                wh.set(this, []),
                yh.set(this, null),
                null != e && (Sh(this, gh, e.up, "f"),
                Sh(this, Ah, e.right, "f"),
                Sh(this, _h, e.down, "f"),
                Sh(this, vh, e.left, "f"),
                Sh(this, wh, e.reset, "f"))
            }
            recordFrame(e, t) {
                if (e > mh.maxFrames)
                    throw new Error("Frame number exceeds maximum frame count.");
                if (null != Mh(this, yh, "f") && e <= Mh(this, yh, "f"))
                    throw new Error("Frame number must be greater than the previous recorded frame.");
                Sh(this, yh, e, "f");
                const n = Mh(this, gh, "f").length % 2 != 0
                  , i = Mh(this, Ah, "f").length % 2 != 0
                  , r = Mh(this, _h, "f").length % 2 != 0
                  , a = Mh(this, vh, "f").length % 2 != 0
                  , s = Mh(this, wh, "f").length % 2 != 0;
                t.up != n && Mh(this, gh, "f").push(e),
                t.right != i && Mh(this, Ah, "f").push(e),
                t.down != r && Mh(this, _h, "f").push(e),
                t.left != a && Mh(this, vh, "f").push(e),
                t.reset != s && Mh(this, wh, "f").push(e)
            }
            getFrame(e) {
                return {
                    up: (Mh(this, ph, "m", xh).call(this, e, Mh(this, gh, "f")) + 1) % 2 != 0,
                    right: (Mh(this, ph, "m", xh).call(this, e, Mh(this, Ah, "f")) + 1) % 2 != 0,
                    down: (Mh(this, ph, "m", xh).call(this, e, Mh(this, _h, "f")) + 1) % 2 != 0,
                    left: (Mh(this, ph, "m", xh).call(this, e, Mh(this, vh, "f")) + 1) % 2 != 0,
                    reset: (Mh(this, ph, "m", xh).call(this, e, Mh(this, wh, "f")) + 1) % 2 != 0
                }
            }
            serialize() {
                const e = new Uint8Array(3 + 3 * Mh(this, gh, "f").length + 3 + 3 * Mh(this, Ah, "f").length + 3 + 3 * Mh(this, _h, "f").length + 3 + 3 * Mh(this, vh, "f").length + 3 + 3 * Mh(this, wh, "f").length);
                Mh(this, ph, "m", bh).call(this, Mh(this, gh, "f"), e.subarray(0, 3 + 3 * Mh(this, gh, "f").length)),
                Mh(this, ph, "m", bh).call(this, Mh(this, Ah, "f"), e.subarray(3 + 3 * Mh(this, gh, "f").length, 3 + 3 * Mh(this, gh, "f").length + 3 + 3 * Mh(this, Ah, "f").length)),
                Mh(this, ph, "m", bh).call(this, Mh(this, _h, "f"), e.subarray(3 + 3 * Mh(this, gh, "f").length + 3 + 3 * Mh(this, Ah, "f").length, 3 + 3 * Mh(this, gh, "f").length + 3 + 3 * Mh(this, Ah, "f").length + 3 + 3 * Mh(this, _h, "f").length)),
                Mh(this, ph, "m", bh).call(this, Mh(this, vh, "f"), e.subarray(3 + 3 * Mh(this, gh, "f").length + 3 + 3 * Mh(this, Ah, "f").length + 3 + 3 * Mh(this, _h, "f").length, 3 + 3 * Mh(this, gh, "f").length + 3 + 3 * Mh(this, Ah, "f").length + 3 + 3 * Mh(this, _h, "f").length + 3 + 3 * Mh(this, vh, "f").length)),
                Mh(this, ph, "m", bh).call(this, Mh(this, wh, "f"), e.subarray(3 + 3 * Mh(this, gh, "f").length + 3 + 3 * Mh(this, Ah, "f").length + 3 + 3 * Mh(this, _h, "f").length + 3 + 3 * Mh(this, vh, "f").length, 3 + 3 * Mh(this, gh, "f").length + 3 + 3 * Mh(this, Ah, "f").length + 3 + 3 * Mh(this, _h, "f").length + 3 + 3 * Mh(this, vh, "f").length + 3 + 3 * Mh(this, wh, "f").length));
                const t = new dh.Deflate({
                    level: 9
                });
                return t.push(new Uint8Array(e), !0),
                function(e) {
                    let t = "";
                    for (const n of e)
                        t += String.fromCharCode(n);
                    let n = btoa(t);
                    return n = n.replace(/\+/g, "-"),
                    n = n.replace(/\//g, "_"),
                    n = n.replace(/=/g, ""),
                    n
                }(t.result)
            }
            static deserialize(e) {
                const t = fh(e);
                if (null == t)
                    return null;
                const n = new dh.Inflate;
                if (n.push(t, !0),
                n.err)
                    return null;
                const i = n.result;
                if (!(i instanceof Uint8Array))
                    return null;
                const r = Mh(mh, mh, "m", Eh).call(mh, i);
                if (null == r)
                    return null;
                const a = Mh(mh, mh, "m", Eh).call(mh, i.subarray(3 + 3 * r.length));
                if (null == a)
                    return null;
                const s = Mh(mh, mh, "m", Eh).call(mh, i.subarray(3 + 3 * r.length + 3 + 3 * a.length));
                if (null == s)
                    return null;
                const o = Mh(mh, mh, "m", Eh).call(mh, i.subarray(3 + 3 * r.length + 3 + 3 * a.length + 3 + 3 * s.length));
                if (null == o)
                    return null;
                const l = Mh(mh, mh, "m", Eh).call(mh, i.subarray(3 + 3 * r.length + 3 + 3 * a.length + 3 + 3 * s.length + 3 + 3 * o.length));
                return null == l ? null : new mh({
                    up: r,
                    right: a,
                    down: s,
                    left: o,
                    reset: l
                })
            }
        }
        mh = Th,
        gh = new WeakMap,
        Ah = new WeakMap,
        _h = new WeakMap,
        vh = new WeakMap,
        wh = new WeakMap,
        yh = new WeakMap,
        ph = new WeakSet,
        xh = function(e, t) {
            let n = -1;
            for (let i = 0; i < t.length; ++i) {
                const r = t[i];
                if (r == e) {
                    n = i;
                    break
                }
                if (r > e)
                    break;
                n = i
            }
            return n
        }
        ,
        bh = function(e, t) {
            t[0] = 255 & e.length,
            t[1] = e.length >>> 8 & 255,
            t[2] = e.length >>> 16 & 255;
            for (let n = 0; n < e.length; ++n) {
                let i;
                i = 0 == n ? e[n] : e[n] - e[n - 1],
                t[3 + 3 * n] = 255 & i,
                t[3 + 3 * n + 1] = i >>> 8 & 255,
                t[3 + 3 * n + 2] = i >>> 16 & 255
            }
        }
        ,
        Eh = function(e) {
            if (e.length < 3)
                return null;
            const t = e[0] | e[1] << 8 | e[2] << 16;
            if (e.length < 3 + 3 * t)
                return null;
            const n = [];
            for (let i = 0; i < t; ++i) {
                const t = e[3 + 3 * i] | e[3 + 3 * i + 1] << 8 | e[3 + 3 * i + 2] << 16;
                0 == i ? n.push(t) : n.push(n[i - 1] + t)
            }
            return n
        }
        ,
        Th.maxFrames = 5999999;
        const Ch = Th;
        var Ih, Rh, Ph, Bh, Dh, Lh, Uh, kh, Nh, Fh, Oh, zh, Wh, Hh = function(e, t, n, i, r) {
            if ("m" === i)
                throw new TypeError("Private method is not writable");
            if ("a" === i && !r)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
            n
        }, Vh = function(e, t, n, i) {
            if ("a" === n && !i)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        class Gh {
            constructor() {
                Rh.set(this, void 0),
                Ph.set(this, void 0),
                Bh.set(this, void 0),
                Dh.set(this, void 0),
                Lh.set(this, void 0),
                Uh.set(this, []),
                kh.set(this, new Map),
                Fh.set(this, []),
                Oh.set(this, new Map),
                zh.set(this, null),
                Wh.set(this, null),
                Hh(this, Rh, new Ammo.btDefaultCollisionConfiguration, "f"),
                Hh(this, Ph, new Ammo.btCollisionDispatcher(Vh(this, Rh, "f")), "f"),
                Hh(this, Bh, new Ammo.btDbvtBroadphase, "f"),
                Hh(this, Dh, new Ammo.btSequentialImpulseConstraintSolver, "f"),
                Hh(this, Lh, new Ammo.btDiscreteDynamicsWorld(Vh(this, Ph, "f"),Vh(this, Bh, "f"),Vh(this, Dh, "f"),Vh(this, Rh, "f")), "f");
                const e = new Ammo.btVector3(0,-9.82,0);
                Vh(this, Lh, "f").setGravity(e),
                Ammo.destroy(e)
            }
            dispose() {
                for (const {body: e} of Vh(this, Fh, "f"))
                    null != e && Vh(this, Lh, "f").removeRigidBody(e);
                Vh(this, Fh, "f").length = 0;
                for (const {body: e} of Vh(this, Uh, "f"))
                    null != e && (Ammo.destroy(e.getMotionState()),
                    Ammo.destroy(e));
                Vh(this, Uh, "f").length = 0,
                Vh(this, kh, "f").clear();
                for (const e of Vh(this, Oh, "f").values())
                    for (const t of e)
                        Ammo.destroy(t.getMotionState()),
                        Ammo.destroy(t);
                Vh(this, Oh, "f").clear(),
                null != Vh(this, zh, "f") && (Vh(this, zh, "f").isActive && Vh(this, Lh, "f").removeRigidBody(Vh(this, zh, "f").body),
                Ammo.destroy(Vh(this, zh, "f").body.getMotionState()),
                Ammo.destroy(Vh(this, zh, "f").body),
                Ammo.destroy(Vh(this, zh, "f").shape)),
                null != Vh(this, Wh, "f") && (Vh(this, Wh, "f").isActive && Vh(this, Lh, "f").removeRigidBody(Vh(this, Wh, "f").body),
                Ammo.destroy(Vh(this, Wh, "f").body.getMotionState()),
                Ammo.destroy(Vh(this, Wh, "f").body),
                Ammo.destroy(Vh(this, Wh, "f").shape),
                Ammo.destroy(Vh(this, Wh, "f").triangleMesh)),
                Ammo.destroy(Vh(this, Lh, "f")),
                Ammo.destroy(Vh(this, Dh, "f")),
                Ammo.destroy(Vh(this, Bh, "f")),
                Ammo.destroy(Vh(this, Ph, "f")),
                Ammo.destroy(Vh(this, Rh, "f"))
            }
            createGroundPlane() {
                if (null != Vh(this, zh, "f"))
                    throw new Error("Ground is already initialized");
                const e = new Ammo.btVector3(0,1,0)
                  , t = new Ammo.btStaticPlaneShape(e,0);
                t.setMargin(.01),
                Ammo.destroy(e);
                const n = new Ammo.btTransform;
                n.setIdentity();
                const i = new Ammo.btDefaultMotionState(n);
                Ammo.destroy(n);
                const r = new Ammo.btVector3;
                t.calculateLocalInertia(0, r);
                const a = new Ammo.btRigidBodyConstructionInfo(0,i,t,r)
                  , s = new Ammo.btRigidBody(a);
                s.setFriction(1),
                Ammo.destroy(r),
                Ammo.destroy(a),
                Hh(this, zh, {
                    body: s,
                    shape: t,
                    isActive: !1
                }, "f")
            }
            createMountains(e, t) {
                if (e.length % 9 != 0)
                    throw new Error("Number of mountain vertices is not dividable by 9");
                if (e.length > 0) {
                    if (null != Vh(this, Wh, "f"))
                        throw new Error("Mountains are already initialized");
                    let n = 1 / 0;
                    const i = new Ammo.btTriangleMesh;
                    for (let t = 0; t < e.length; t += 9) {
                        const r = e[t + 0]
                          , a = e[t + 1]
                          , s = e[t + 2]
                          , o = e[t + 3]
                          , l = e[t + 4]
                          , c = e[t + 5]
                          , h = e[t + 6]
                          , u = e[t + 7]
                          , d = e[t + 8]
                          , f = new Ammo.btVector3(r,a,s)
                          , p = new Ammo.btVector3(o,l,c)
                          , m = new Ammo.btVector3(h,u,d);
                        i.addTriangle(f, p, m),
                        Ammo.destroy(f),
                        Ammo.destroy(p),
                        Ammo.destroy(m),
                        n = Math.min(n, new Zt(r,a,s).lengthSq(), new Zt(o,l,c).lengthSq(), new Zt(h,u,d).lengthSq())
                    }
                    const r = new Ammo.btBvhTriangleMeshShape(i);
                    r.setMargin(.02);
                    const a = new Ammo.btVector3(t.x,t.y,t.z)
                      , s = new Ammo.btTransform;
                    s.setIdentity(),
                    s.setOrigin(a),
                    Ammo.destroy(a);
                    const o = new Ammo.btVector3;
                    r.calculateLocalInertia(0, o);
                    const l = new Ammo.btDefaultMotionState(s);
                    Ammo.destroy(s);
                    const c = new Ammo.btRigidBodyConstructionInfo(0,l,r,o)
                      , h = new Ammo.btRigidBody(c);
                    h.setFriction(1),
                    Ammo.destroy(o),
                    Ammo.destroy(c);
                    const u = Math.sqrt(n);
                    Hh(this, Wh, {
                        body: h,
                        shape: r,
                        triangleMesh: i,
                        offset: t,
                        minimumRadius: u,
                        isActive: !1
                    }, "f")
                }
            }
            addStaticBody(e, t, n) {
                const i = Vh(Ih, Ih, "f", Nh);
                (t = t.clone()).applyMatrix4(e);
                const r = {
                    active: !1,
                    matrix: e,
                    shape: n,
                    body: null,
                    min: t.min.clone(),
                    max: t.max.clone()
                };
                Vh(this, Uh, "f").push(r);
                for (let e = Math.floor((t.min.x - 3) / i); e <= Math.ceil((t.max.x + 3) / i); ++e)
                    for (let n = Math.floor((t.min.y - 3) / i); n <= Math.ceil((t.max.y + 3) / i); ++n)
                        for (let a = Math.floor((t.min.z - 3) / i); a <= Math.ceil((t.max.z + 3) / i); ++a) {
                            const t = Vh(this, kh, "f").get(e);
                            if (null == t)
                                Vh(this, kh, "f").set(e, new Map([[n, new Map([[a, [r]]])]]));
                            else {
                                const e = t.get(n);
                                if (null == e)
                                    t.set(n, new Map([[a, [r]]]));
                                else {
                                    const t = e.get(a);
                                    null == t ? e.set(a, [r]) : t.push(r)
                                }
                            }
                        }
            }
            activePhysicsAt(e) {
                if (null != Vh(this, zh, "f") && (e.y < 4 ? Vh(this, zh, "f").isActive || (Vh(this, Lh, "f").addRigidBody(Vh(this, zh, "f").body),
                Vh(this, zh, "f").isActive = !0) : e.y > 5 && Vh(this, zh, "f").isActive && (Vh(this, Lh, "f").removeRigidBody(Vh(this, zh, "f").body),
                Vh(this, zh, "f").isActive = !1)),
                null != Vh(this, Wh, "f")) {
                    const t = e.distanceTo(Vh(this, Wh, "f").offset);
                    t > Vh(this, Wh, "f").minimumRadius - 10 ? Vh(this, Wh, "f").isActive || (Vh(this, Lh, "f").addRigidBody(Vh(this, Wh, "f").body),
                    Vh(this, Wh, "f").isActive = !0) : t < Vh(this, Wh, "f").minimumRadius - 20 && Vh(this, Wh, "f").isActive && (Vh(this, Lh, "f").removeRigidBody(Vh(this, Wh, "f").body),
                    Vh(this, Wh, "f").isActive = !1)
                }
                const t = new Ammo.btVector3
                  , n = new Ammo.btVector3;
                Hh(this, Fh, Vh(this, Fh, "f").filter((t => {
                    if (t.active && (e.x < t.min.x - 3 || e.x > t.max.x + 3 || e.y < t.min.y - 3 || e.y > t.max.y + 3 || e.z < t.min.z - 3 || e.z > t.max.z + 3)) {
                        const e = Vh(this, Oh, "f").get(t.shape);
                        return null == e ? Vh(this, Oh, "f").set(t.shape, [t.body]) : e.push(t.body),
                        Vh(this, Lh, "f").removeRigidBody(t.body),
                        t.body = null,
                        t.active = !1,
                        !1
                    }
                    return !0
                }
                )), "f");
                const i = e.clone().divideScalar(Vh(Ih, Ih, "f", Nh)).floor()
                  , r = Vh(this, kh, "f").get(i.x);
                if (null != r) {
                    const t = r.get(i.y);
                    if (null != t) {
                        const n = t.get(i.z);
                        if (null != n)
                            for (const t of n)
                                if (!t.active && e.x >= t.min.x - 3 && e.x <= t.max.x + 3 && e.y >= t.min.y - 3 && e.y <= t.max.y + 3 && e.z >= t.min.z - 3 && e.z <= t.max.z + 3) {
                                    let e = Vh(this, Oh, "f").get(t.shape);
                                    null == e && (e = [],
                                    Vh(this, Oh, "f").set(t.shape, e));
                                    const n = new Ammo.btTransform;
                                    let i;
                                    if (n.setFromOpenGLMatrix(t.matrix.elements),
                                    e.length > 0)
                                        i = e.pop(),
                                        i.setWorldTransform(n),
                                        Ammo.destroy(n),
                                        Vh(this, Lh, "f").addRigidBody(i);
                                    else {
                                        const e = new Ammo.btDefaultMotionState(n);
                                        Ammo.destroy(n);
                                        const r = new Ammo.btVector3;
                                        t.shape.calculateLocalInertia(0, r);
                                        const a = new Ammo.btRigidBodyConstructionInfo(0,e,t.shape,r);
                                        i = new Ammo.btRigidBody(a),
                                        i.setFriction(1),
                                        Ammo.destroy(r),
                                        Ammo.destroy(a),
                                        Vh(this, Lh, "f").addRigidBody(i)
                                    }
                                    if (null != t.body)
                                        throw new Error("Activating already active rigid body");
                                    t.body = i,
                                    t.active = !0,
                                    Vh(this, Fh, "f").push(t)
                                }
                    }
                }
                Ammo.destroy(t),
                Ammo.destroy(n)
            }
            step() {
                Vh(this, Lh, "f").stepSimulation(1 / Ih.stepsPerSecond, 0, 1 / Ih.stepsPerSecond)
            }
            get world() {
                return Vh(this, Lh, "f")
            }
            get dispatcher() {
                return Vh(this, Ph, "f")
            }
        }
        Ih = Gh,
        Rh = new WeakMap,
        Ph = new WeakMap,
        Bh = new WeakMap,
        Dh = new WeakMap,
        Lh = new WeakMap,
        Uh = new WeakMap,
        kh = new WeakMap,
        Fh = new WeakMap,
        Oh = new WeakMap,
        zh = new WeakMap,
        Wh = new WeakMap,
        Nh = {
            value: 20
        },
        Gh.stepsPerSecond = 1e3;
        const Qh = Gh;
        var Xh, jh = function(e, t, n, i, r) {
            if ("m" === i)
                throw new TypeError("Private method is not writable");
            if ("a" === i && !r)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
            n
        }, qh = function(e, t, n, i) {
            if ("a" === n && !i)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        class Yh {
            constructor(e) {
                if (Xh.set(this, 0),
                null != e) {
                    if (!Number.isSafeInteger(e))
                        throw new Error("Frames is not a safe integer");
                    jh(this, Xh, e, "f")
                }
            }
            get numberOfFrames() {
                return qh(this, Xh, "f")
            }
            get time() {
                return qh(this, Xh, "f") / 1e3
            }
            increment() {
                var e;
                jh(this, Xh, (e = qh(this, Xh, "f"),
                ++e), "f")
            }
            difference(e) {
                return new Yh(qh(this, Xh, "f") - qh(e, Xh, "f"))
            }
            lessThan(e) {
                return qh(this, Xh, "f") < qh(e, Xh, "f")
            }
            greaterThan(e) {
                return qh(this, Xh, "f") > qh(e, Xh, "f")
            }
            lessOrEqual(e) {
                return qh(this, Xh, "f") <= qh(e, Xh, "f")
            }
            greaterOrEqual(e) {
                return qh(this, Xh, "f") >= qh(e, Xh, "f")
            }
            equals(e) {
                return qh(this, Xh, "f") == qh(e, Xh, "f")
            }
            isNegative() {
                return qh(this, Xh, "f") < 0
            }
            clone() {
                const e = new Yh;
                return jh(e, Xh, qh(this, Xh, "f"), "f"),
                e
            }
        }
        Xh = new WeakMap;
        const Kh = Yh;
        var Zh;
        !function(e) {
            e[e.Checkpoint = 0] = "Checkpoint",
            e[e.Finish = 1] = "Finish"
        }(Zh || (Zh = {}));
        const Jh = Zh
          , $h = [[new Kt(0,0,0,1), new Kt(0,.7071067811865475,0,.7071067811865476), new Kt(0,1,0,0), new Kt(0,.7071067811865476,0,-.7071067811865475)], [new Kt(0,0,1,0), new Kt(.7071067811865475,0,.7071067811865476,0), new Kt(1,0,0,0), new Kt(.7071067811865476,0,-.7071067811865475,0)], [new Kt(0,0,-.7071067811865477,.7071067811865475), new Kt(.5,.5,-.5,.5), new Kt(.7071067811865475,.7071067811865477,0,0), new Kt(.5,.5,.5,-.5)], [new Kt(0,0,.7071067811865475,.7071067811865476), new Kt(.5,-.5,.5,.5), new Kt(.7071067811865476,-.7071067811865475,0,0), new Kt(.5,-.5,-.5,-.5)], [new Kt(.7071067811865475,0,0,.7071067811865476), new Kt(.5,.5,.5,.5), new Kt(0,.7071067811865476,.7071067811865475,0), new Kt(-.5,.5,.5,-.5)], [new Kt(-.7071067811865477,0,0,.7071067811865475), new Kt(-.5,-.5,.5,.5), new Kt(0,-.7071067811865475,.7071067811865477,0), new Kt(.5,-.5,.5,-.5)]];
        function eu(e, t) {
            return $h[t][e].clone()
        }
        var tu, nu, iu, ru, au, su, ou, lu, cu, hu = function(e, t, n, i, r) {
            if ("m" === i)
                throw new TypeError("Private method is not writable");
            if ("a" === i && !r)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
            n
        }, uu = function(e, t, n, i) {
            if ("a" === n && !i)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        class du {
            constructor(e, t, n) {
                tu.add(this),
                iu.set(this, void 0),
                ru.set(this, new Map),
                au.set(this, []),
                su.set(this, []),
                ou.set(this, []),
                hu(this, iu, t, "f"),
                n.forEachPart(( (n, i, r, a, s, o, l, c) => {
                    uu(this, tu, "m", lu).call(this, n, i, r, s, o, a, e, t);
                    const h = uu(this, ru, "f").get(a);
                    null == h ? uu(this, ru, "f").set(a, [{
                        x: n,
                        y: i,
                        z: r,
                        rotation: s,
                        rotationAxis: o,
                        type: a,
                        checkpointOrder: c
                    }]) : h.push({
                        x: n,
                        y: i,
                        z: r,
                        rotation: s,
                        rotationAxis: o,
                        type: a,
                        checkpointOrder: c
                    })
                }
                ));
                const i = uu(this, iu, "f").getPartTypesWithDetector(Jh.Finish);
                for (const e of i) {
                    const t = uu(this, iu, "f").getDetector(e);
                    if (null == t)
                        throw new Error("Part detector is missing");
                    const n = uu(this, ru, "f").get(e);
                    null != n && hu(this, au, uu(this, au, "f").concat(n.map(( ({x: e, y: n, z: i, rotation: r, rotationAxis: a, type: s, checkpointOrder: o}) => ({
                        x: e,
                        y: n,
                        z: i,
                        rotation: r,
                        rotationAxis: a,
                        type: s,
                        checkpointOrder: o,
                        detector: t
                    })))), "f")
                }
                const r = uu(this, iu, "f").getPartTypesWithDetector(Jh.Checkpoint);
                for (const e of r) {
                    const t = uu(this, iu, "f").getDetector(e);
                    if (null == t)
                        throw new Error("Part detector is missing");
                    const n = uu(this, ru, "f").get(e);
                    null != n && hu(this, su, uu(this, su, "f").concat(n.map(( ({x: e, y: n, z: i, rotation: r, rotationAxis: a, type: s, checkpointOrder: o}) => {
                        if (null == o)
                            throw new Error("Checkpoint has no checkpoint order");
                        return {
                            x: e,
                            y: n,
                            z: i,
                            rotation: r,
                            rotationAxis: a,
                            type: s,
                            checkpointOrder: o,
                            detector: t
                        }
                    }
                    ))), "f")
                }
                hu(this, ou, uu(this, su, "f").map((e => e.checkpointOrder)).filter(( (e, t, n) => n.indexOf(e) == t)).sort(( (e, t) => e - t)), "f")
            }
            checkCheckpoint(e, t) {
                return uu(this, tu, "m", cu).call(this, e, t)
            }
            checkFinish(e) {
                return uu(this, tu, "m", cu).call(this, e)
            }
            getTotalNumberOfCheckpointIndices() {
                return uu(this, ou, "f").length
            }
        }
        nu = du,
        iu = new WeakMap,
        ru = new WeakMap,
        au = new WeakMap,
        su = new WeakMap,
        ou = new WeakMap,
        tu = new WeakSet,
        lu = function(e, t, n, i, r, a, s, o) {
            const l = eu(i, r)
              , c = new Zt(e * nu.partSize,t * nu.partSize,n * nu.partSize)
              , h = (new Cn).compose(c, l, new Zt(1,1,1))
              , {boundingBox: u, shape: d} = o.getPhysicsShape(a);
            s.addStaticBody(h, u, d)
        }
        ,
        cu = function(e, t) {
            let n = []
              , i = null;
            null == t ? n = uu(this, au, "f") : (n = uu(this, su, "f"),
            t < uu(this, ou, "f").length && (i = uu(this, ou, "f")[t]));
            for (const {x: t, y: r, z: a, rotation: s, rotationAxis: o, type: l, checkpointOrder: c, detector: h} of n)
                if (c == i) {
                    const n = eu(s, o)
                      , i = h.center.clone().applyQuaternion(n).add(new Zt(t * nu.partSize,r * nu.partSize,a * nu.partSize))
                      , c = h.size.clone().applyQuaternion(n);
                    c.x = Math.abs(c.x),
                    c.y = Math.abs(c.y),
                    c.z = Math.abs(c.z);
                    const u = (new en).setFromCenterAndSize(i, c);
                    if (e.intersectsBox3(u))
                        return {
                            x: t,
                            y: r,
                            z: a,
                            rotation: s,
                            rotationAxis: o,
                            type: l
                        }
                }
            return null
        }
        ,
        du.partSize = 5;
        const fu = du;
        var pu;
        !function(e) {
            e[e.Straight = 0] = "Straight",
            e[e.TurnSharp = 1] = "TurnSharp",
            e[e.SlopeUp = 2] = "SlopeUp",
            e[e.SlopeDown = 3] = "SlopeDown",
            e[e.Slope = 4] = "Slope",
            e[e.Start = 5] = "Start",
            e[e.Finish = 6] = "Finish",
            e[e.ToWideMiddle = 7] = "ToWideMiddle",
            e[e.ToWideLeft = 8] = "ToWideLeft",
            e[e.ToWideRight = 9] = "ToWideRight",
            e[e.StraightWide = 10] = "StraightWide",
            e[e.InnerCornerWide = 11] = "InnerCornerWide",
            e[e.OuterCornerWide = 12] = "OuterCornerWide",
            e[e.SlopeUpLeftWide = 13] = "SlopeUpLeftWide",
            e[e.SlopeUpRightWide = 14] = "SlopeUpRightWide",
            e[e.SlopeDownLeftWide = 15] = "SlopeDownLeftWide",
            e[e.SlopeDownRightWide = 16] = "SlopeDownRightWide",
            e[e.SlopeLeftWide = 17] = "SlopeLeftWide",
            e[e.SlopeRightWide = 18] = "SlopeRightWide",
            e[e.PillarTop = 19] = "PillarTop",
            e[e.PillarMiddle = 20] = "PillarMiddle",
            e[e.PillarBottom = 21] = "PillarBottom",
            e[e.PillarShort = 22] = "PillarShort",
            e[e.PlanePillarBottom = 23] = "PlanePillarBottom",
            e[e.PlanePillarShort = 24] = "PlanePillarShort",
            e[e.Plane = 25] = "Plane",
            e[e.PlaneWall = 26] = "PlaneWall",
            e[e.PlaneWallCorner = 27] = "PlaneWallCorner",
            e[e.PlaneWallInnerCorner = 28] = "PlaneWallInnerCorner",
            e[e.Block = 29] = "Block",
            e[e.WallTrackTop = 30] = "WallTrackTop",
            e[e.WallTrackMiddle = 31] = "WallTrackMiddle",
            e[e.WallTrackBottom = 32] = "WallTrackBottom",
            e[e.PlaneSlopeUp = 33] = "PlaneSlopeUp",
            e[e.PlaneSlopeDown = 34] = "PlaneSlopeDown",
            e[e.PlaneSlope = 35] = "PlaneSlope",
            e[e.TurnShort = 36] = "TurnShort",
            e[e.TurnLong = 37] = "TurnLong",
            e[e.SlopeUpLong = 38] = "SlopeUpLong",
            e[e.SlopeDownLong = 39] = "SlopeDownLong",
            e[e.SlopePillar = 40] = "SlopePillar",
            e[e.TurnSLeft = 41] = "TurnSLeft",
            e[e.TurnSRight = 42] = "TurnSRight",
            e[e.IntersectionT = 43] = "IntersectionT",
            e[e.IntersectionCross = 44] = "IntersectionCross",
            e[e.PillarBranch1 = 45] = "PillarBranch1",
            e[e.PillarBranch2 = 46] = "PillarBranch2",
            e[e.PillarBranch3 = 47] = "PillarBranch3",
            e[e.PillarBranch4 = 48] = "PillarBranch4",
            e[e.WallTrackBottomCorner = 49] = "WallTrackBottomCorner",
            e[e.WallTrackMiddleCorner = 50] = "WallTrackMiddleCorner",
            e[e.WallTrackTopCorner = 51] = "WallTrackTopCorner",
            e[e.Checkpoint = 52] = "Checkpoint",
            e[e.HalfBlock = 53] = "HalfBlock",
            e[e.QuarterBlock = 54] = "QuarterBlock",
            e[e.HalfPlane = 55] = "HalfPlane",
            e[e.QuarterPlane = 56] = "QuarterPlane",
            e[e.PlaneBridge = 57] = "PlaneBridge",
            e[e.SignArrowLeft = 58] = "SignArrowLeft",
            e[e.SignArrowRight = 59] = "SignArrowRight",
            e[e.SignArrowUp = 61] = "SignArrowUp",
            e[e.SignArrowDown = 62] = "SignArrowDown",
            e[e.SignWarning = 63] = "SignWarning",
            e[e.SignWrongWay = 64] = "SignWrongWay",
            e[e.CheckpointWide = 65] = "CheckpointWide",
            e[e.WallTrackCeiling = 66] = "WallTrackCeiling",
            e[e.WallTrackFloor = 67] = "WallTrackFloor",
            e[e.BlockSlopedDown = 68] = "BlockSlopedDown",
            e[e.BlockSlopedDownInnerCorner = 69] = "BlockSlopedDownInnerCorner",
            e[e.BlockSlopedDownOuterCorner = 70] = "BlockSlopedDownOuterCorner",
            e[e.BlockSlopedUp = 71] = "BlockSlopedUp",
            e[e.BlockSlopedUpInnerCorner = 72] = "BlockSlopedUpInnerCorner",
            e[e.BlockSlopedUpOuterCorner = 73] = "BlockSlopedUpOuterCorner",
            e[e.FinishWide = 74] = "FinishWide",
            e[e.PlaneCheckpoint = 75] = "PlaneCheckpoint",
            e[e.PlaneFinish = 76] = "PlaneFinish",
            e[e.PlaneCheckpointWide = 77] = "PlaneCheckpointWide",
            e[e.PlaneFinishWide = 78] = "PlaneFinishWide",
            e[e.WallTrackBottomInnerCorner = 79] = "WallTrackBottomInnerCorner",
            e[e.WallTrackInnerCorner = 80] = "WallTrackInnerCorner",
            e[e.WallTrackTopInnerCorner = 81] = "WallTrackTopInnerCorner",
            e[e.TurnLong2 = 82] = "TurnLong2",
            e[e.TurnLong3 = 83] = "TurnLong3",
            e[e.SlopePillarShort = 84] = "SlopePillarShort",
            e[e.BlockSlopeUp = 85] = "BlockSlopeUp",
            e[e.BlockSlopeDown = 86] = "BlockSlopeDown",
            e[e.BlockSlopeVerticalTop = 87] = "BlockSlopeVerticalTop",
            e[e.BlockSlopeVerticalBottom = 88] = "BlockSlopeVerticalBottom",
            e[e.PlaneSlopeVerticalBottom = 90] = "PlaneSlopeVerticalBottom",
            e[e.StartWide = 91] = "StartWide",
            e[e.PlaneStart = 92] = "PlaneStart",
            e[e.PlaneStartWide = 93] = "PlaneStartWide",
            e[e.TurnShortLeftWide = 94] = "TurnShortLeftWide",
            e[e.TurnShortRightWide = 95] = "TurnShortRightWide",
            e[e.TurnLongLeftWide = 96] = "TurnLongLeftWide",
            e[e.TurnLongRightWide = 97] = "TurnLongRightWide",
            e[e.SlopeUpVertical = 98] = "SlopeUpVertical",
            e[e.PlaneSlopePillar = 99] = "PlaneSlopePillar",
            e[e.PlaneSlopePillarShort = 100] = "PlaneSlopePillarShort",
            e[e.PillarBranch1Top = 101] = "PillarBranch1Top",
            e[e.PillarBranch1Bottom = 102] = "PillarBranch1Bottom",
            e[e.PillarBranch1Middle = 103] = "PillarBranch1Middle",
            e[e.PillarBranch2Top = 104] = "PillarBranch2Top",
            e[e.PillarBranch2Middle = 105] = "PillarBranch2Middle",
            e[e.PillarBranch2Bottom = 106] = "PillarBranch2Bottom",
            e[e.PillarBranch3Top = 107] = "PillarBranch3Top",
            e[e.PillarBranch3Middle = 108] = "PillarBranch3Middle",
            e[e.PillarBranch3Bottom = 109] = "PillarBranch3Bottom",
            e[e.PillarBranch4Top = 110] = "PillarBranch4Top",
            e[e.PillarBranch4Middle = 111] = "PillarBranch4Middle",
            e[e.PillarBranch4Bottom = 112] = "PillarBranch4Bottom",
            e[e.PillarBranch5 = 113] = "PillarBranch5",
            e[e.PillarBranch5Top = 114] = "PillarBranch5Top",
            e[e.PillarBranch5Middle = 115] = "PillarBranch5Middle",
            e[e.PillarBranch5Bottom = 116] = "PillarBranch5Bottom",
            e[e.ToWideDouble = 117] = "ToWideDouble",
            e[e.ToWideDiagonal = 118] = "ToWideDiagonal",
            e[e.StraightPillarBottom = 119] = "StraightPillarBottom",
            e[e.StraightPillarShort = 120] = "StraightPillarShort",
            e[e.TurnSharpPillarBottom = 121] = "TurnSharpPillarBottom",
            e[e.TurnSharpPillarShort = 122] = "TurnSharpPillarShort",
            e[e.IntersectionTPillarBottom = 123] = "IntersectionTPillarBottom",
            e[e.IntersectionTPillarShort = 124] = "IntersectionTPillarShort",
            e[e.IntersectionCrossPillarBottom = 125] = "IntersectionCrossPillarBottom",
            e[e.IntersectionCrossPillarShort = 126] = "IntersectionCrossPillarShort",
            e[e.PlaneBridgeCorner = 127] = "PlaneBridgeCorner",
            e[e.PlaneBridgeIntersectionT = 128] = "PlaneBridgeIntersectionT",
            e[e.PlaneBridgeIntersectionCross = 129] = "PlaneBridgeIntersectionCross",
            e[e.BlockBridge = 130] = "BlockBridge",
            e[e.BlockBridgeCorner = 131] = "BlockBridgeCorner",
            e[e.BlockBridgeIntersectionT = 132] = "BlockBridgeIntersectionT",
            e[e.BlockBridgeIntersectionCross = 133] = "BlockBridgeIntersectionCross",
            e[e.WallTrackCeilingCorner = 134] = "WallTrackCeilingCorner",
            e[e.WallTrackCeilingPlaneCorner = 135] = "WallTrackCeilingPlaneCorner",
            e[e.WallTrackFloorCorner = 136] = "WallTrackFloorCorner",
            e[e.WallTrackFloorPlaneCorner = 137] = "WallTrackFloorPlaneCorner",
            e[e.SlopeUpVerticalLeftWide = 138] = "SlopeUpVerticalLeftWide",
            e[e.SlopeUpVerticalRightWide = 139] = "SlopeUpVerticalRightWide",
            e[e.BlockSlopeVerticalCornerTop = 140] = "BlockSlopeVerticalCornerTop",
            e[e.BlockSlopeVerticalCornerBottom = 141] = "BlockSlopeVerticalCornerBottom",
            e[e.WallTrackSlopeToVertical = 142] = "WallTrackSlopeToVertical",
            e[e.PlaneSlopeToVertical = 143] = "PlaneSlopeToVertical",
            e[e.BlockSlopeToVertical = 144] = "BlockSlopeToVertical",
            e[e.PlaneSlopeUpLong = 145] = "PlaneSlopeUpLong",
            e[e.PlaneSlopeDownLong = 146] = "PlaneSlopeDownLong",
            e[e.SlopeUpLongLeftWide = 147] = "SlopeUpLongLeftWide",
            e[e.SlopeUpLongRightWide = 148] = "SlopeUpLongRightWide",
            e[e.SlopeDownLongLeftWide = 149] = "SlopeDownLongLeftWide",
            e[e.SlopeDownLongRightWide = 150] = "SlopeDownLongRightWide",
            e[e.BlockSlopeUpLong = 151] = "BlockSlopeUpLong",
            e[e.BlockSlopeDownLong = 152] = "BlockSlopeDownLong",
            e[e.BlockSlopeVerticalInnerCornerBottom = 153] = "BlockSlopeVerticalInnerCornerBottom",
            e[e.BlockSlopeVerticalInnerCornerTop = 154] = "BlockSlopeVerticalInnerCornerTop",
            e[e.BlockInnerCorner = 155] = "BlockInnerCorner"
        }(pu || (pu = {}));
        const mu = pu;
        var gu;
        !function(e) {
            e[e.YPositive = 0] = "YPositive",
            e[e.YNegative = 1] = "YNegative",
            e[e.XPositive = 2] = "XPositive",
            e[e.XNegative = 3] = "XNegative",
            e[e.ZPositive = 4] = "ZPositive",
            e[e.ZNegative = 5] = "ZNegative"
        }(gu || (gu = {}));
        const Au = gu;

        var tm;
        !function(e) {
            e[e.ImperialUnitsEnabled = 0] = "ImperialUnitsEnabled",
            e[e.ResetHintEnabled = 1] = "ResetHintEnabled",
            e[e.GhostCarEnabled = 2] = "GhostCarEnabled",
            e[e.DefaultCameraMode = 3] = "DefaultCameraMode",
            e[e.CockpitCameraToggle = 4] = "CockpitCameraToggle",
            e[e.Checkpoints = 5] = "Checkpoints",
            e[e.Timer = 6] = "Timer",
            e[e.Speedometer = 7] = "Speedometer",
            e[e.Language = 8] = "Language",
            e[e.CarShadowQuality = 9] = "CarShadowQuality",
            e[e.TrackShadowEnabled = 10] = "TrackShadowEnabled",
            e[e.CloudsEnabled = 11] = "CloudsEnabled",
            e[e.ParticlesEnabled = 12] = "ParticlesEnabled",
            e[e.SkidmarksEnabled = 13] = "SkidmarksEnabled",
            e[e.RenderScale = 14] = "RenderScale",
            e[e.Antialiasing = 15] = "Antialiasing",
            e[e.SoundEffectVolume = 16] = "SoundEffectVolume",
            e[e.MusicVolume = 17] = "MusicVolume",
            e[e.CheckpointVolume = 18] = "CheckpointVolume"
        }(tm || (tm = {}));
        const nm = tm
          , im = JSON.parse('{"rE":"0.5.0","l$":{"r":5,"M":4}}');
        const rm = !1
          , am = im.l$.r;
        if (!Number.isSafeInteger(am) || am < 1)
            throw new Error("package.json beta version property must be a positive integer");
        let sm = "";
        im.rE;
        const om = im.l$.M;
        if (!Number.isSafeInteger(om) || om < 1)
            throw new Error("package.json beta physicsVersion property must be a positive integer");
        var Lm, Um, km, Nm, Fm, Om, zm, Wm = function(e, t, n, i, r) {
            if ("m" === i)
                throw new TypeError("Private method is not writable");
            if ("a" === i && !r)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
            n
        }, Hm = function(e, t, n, i) {
            if ("a" === n && !i)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        class Vm {
            constructor() {
                Lm.add(this),
                Nm.set(this, new cr(Hm(Um, Um, "f", km),1,.5,1e4)),
                Fm.set(this, new Zt),
                Om.set(this, new Zt(0,1,0))
            }
            reset(e, t, n) {
                Wm(this, Fm, new Zt(1e-5,0,-1), "f"),
                Hm(this, Fm, "f").applyQuaternion(t),
                Hm(this, Fm, "f").add(e),
                Wm(this, Om, new Zt(0,1,0), "f"),
                Hm(this, Om, "f").applyQuaternion(t),
                this.update(0, e, t, 0),
                Hm(this, Nm, "f").fov = Hm(this, Lm, "m", zm).call(this, null != n ? n : 0),
                Hm(this, Nm, "f").updateProjectionMatrix()
            }
            update(e, t, n, i) {
                Hm(this, Nm, "f").fov = Hm(this, Lm, "m", zm).call(this, i),
                Hm(this, Nm, "f").updateProjectionMatrix();
                const r = new Zt(0,1,0);
                r.applyQuaternion(n);
                const a = Math.min(1, 5 * e);
                Hm(this, Om, "f").set(a * r.x + (1 - a) * Hm(this, Om, "f").x, a * r.y + (1 - a) * Hm(this, Om, "f").y, a * r.z + (1 - a) * Hm(this, Om, "f").z);
                const s = (new Zt).subVectors(t, Hm(this, Fm, "f"));
                s.normalize();
                const o = 5.5;
                Hm(this, Nm, "f").position.x = t.x - s.x * o + 2 * Hm(this, Om, "f").x,
                Hm(this, Nm, "f").position.y = Math.max(.25, t.y - s.y * o + 2 * Hm(this, Om, "f").y),
                Hm(this, Nm, "f").position.z = t.z - s.z * o + 2 * Hm(this, Om, "f").z,
                Hm(this, Nm, "f").lookAt(t.x + 2 * Hm(this, Om, "f").x * .9, t.y + 2 * Hm(this, Om, "f").y * .9, t.z + 2 * Hm(this, Om, "f").z * .9),
                Hm(this, Nm, "f").updateMatrix(),
                Hm(this, Fm, "f").set(t.x - s.x * o, t.y - s.y * o, t.z - s.z * o)
            }
            get camera() {
                return Hm(this, Nm, "f")
            }
        }
        Um = Vm,
        Nm = new WeakMap,
        Fm = new WeakMap,
        Om = new WeakMap,
        Lm = new WeakSet,
        zm = function(e) {
            const t = Math.abs(e) / 400;
            return Hm(Um, Um, "f", km) + (100 - Hm(Um, Um, "f", km)) * Math.pow(t, 1) / (Math.pow(t, 1) + Math.pow(1 - t, 1))
        }
        ,
        km = {
            value: 70
        };
        const Gm = Vm;
        var Qm, Xm, jm, qm, Ym, Km, Zm, Jm, $m = function(e, t, n, i, r) {
            if ("m" === i)
                throw new TypeError("Private method is not writable");
            if ("a" === i && !r)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
            n
        }, eg = function(e, t, n, i) {
            if ("a" === n && !i)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        Xm = new WeakMap,
        jm = new WeakMap,
        qm = new WeakMap,
        Ym = new WeakMap,
        Km = new WeakMap,
        Zm = {
        };
        const PA = {};
        PA.massOffset = .6,
        PA.detectorBoxCenter = new Zt(0,.48,-.15),
        PA.detectorBoxSize = new Zt(.89,.22,1.8),
        PA.suspensionResetLengthFront = .07809501004219055,
        PA.suspensionResetLengthRear = .0781289680480957,
        PA.models = null,
        PA.images = null;
        var BA, DA, LA, UA, carBodyRigidbody, NA, FA, OA, zA, WA, HA, VA, GA, QA, XA, jA, qA, YA, KA, ZA, JA, $A, e_, t_, n_, i_, r_, a_, s_, o_ = function(e, t, n, i, r) {
            if ("m" === i)
                throw new TypeError("Private method is not writable");
            if ("a" === i && !r)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
            n
        }, l_ = function(e, t, n, i) {
            if ("a" === n && !i)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        DA = new WeakMap,
        LA = new WeakMap,
        UA = new WeakMap,
        carBodyRigidbody = new WeakMap,
        NA = new WeakMap,
        FA = new WeakMap,
        OA = new WeakMap,
        zA = new WeakMap,
        WA = new WeakMap,
        HA = new WeakMap,
        VA = new WeakMap,
        GA = new WeakMap,
        QA = new WeakMap,
        XA = new WeakMap,
        jA = new WeakMap,
        qA = new WeakMap,
        YA = new WeakMap,
        KA = new WeakMap,
        ZA = new WeakMap,
        JA = new WeakMap,
        $A = new WeakMap,
        e_ = new WeakMap,
        BA = new WeakSet,
        t_ = function(vertexArray) {
            if (vertexArray.length % 3 != 0)
                throw new Error("Car collision shape number of vertices is not dividable by 3");
            const collisionHullShape = new Ammo.btConvexHullShape;
            for (let n = 0; n < vertexArray.length; n += 3) {
                const x = vertexArray[n + 0]
                  , y = vertexArray[n + 1]
                  , z = vertexArray[n + 2]
                  , vertexPosition = new Ammo.btVector3(x,y + l_(this, OA, "f"),z);
                collisionHullShape.addPoint(vertexPosition, !0),
                Ammo.destroy(vertexPosition)
            }
            collisionHullShape.setMargin(.02); // important - car body collision margin
            return collisionHullShape;
        }
        ,
        n_ = function() {
            return new Zt(0,0,1).applyQuaternion(this.getQuaternion())
        }
        ,
        i_ = function() {
            return new Zt(0,-1,0).applyQuaternion(this.getQuaternion())
        }
        ,
        r_ = function() {
            const e = l_(this, carBodyRigidbody, "f").getLinearVelocity();
            return new Zt(e.x(),e.y(),e.z())
        }
        ,
        a_ = function() {
            const e = Math.abs(l_(this, BA, "m", n_).call(this).dot(l_(this, BA, "m", r_).call(this)))
              , t = l_(this, BA, "m", i_).call(this)
              , n = .05;
            l_(this, WA, "f").setValue(t.x * e * n, t.y * e * n, t.z * e * n),
            l_(this, carBodyRigidbody, "f").applyCentralImpulse(l_(this, WA, "f"))
        }
        ,
        
        s_ = function(e, t) {
            var n;
            o_(this, $A, !1, "f");
            let i = !1
              , r = !1
              , a = !1
              , s = !1
              , o = !1;
            l_(this, qA, "f") && (this.hasFinished() || ({up: i, right: r, down: a, left: s, reset: o} = null !== (n = null == t ? void 0 : t.getControls(l_(this, YA, "f").numberOfFrames)) && void 0 !== n ? n : {
                up: !1,
                right: !1,
                down: !1,
                left: !1,
                reset: !1
            }),
            l_(this, YA, "f").increment());
            const l = this.getWheelInContact(0) || this.getWheelInContact(1) || this.getWheelInContact(2) || this.getWheelInContact(3);
            if (!l && a && !this.hasFinished() && l_(this, qA, "f") ? l_(this, carBodyRigidbody, "f").setDamping(.1, .6) : l_(this, carBodyRigidbody, "f").setDamping(.1, .1),
            i && !this.hasFinished() && l_(this, qA, "f")) {
                const e = 4e3;
                l_(this, UA, "f").applyEngineForce(e, 2),
                l_(this, UA, "f").applyEngineForce(e, 3)
            } else
                l_(this, UA, "f").applyEngineForce(0, 2),
                l_(this, UA, "f").applyEngineForce(0, 3);
            if (a && !this.hasFinished() && l_(this, qA, "f"))
                if (this.getSpeedKmh() > 1 || !l) {
                    const e = 10;
                    l_(this, UA, "f").setBrake(e, 0),
                    l_(this, UA, "f").setBrake(e, 1),
                    l_(this, UA, "f").setBrake(e, 2),
                    l_(this, UA, "f").setBrake(e, 3),
                    o_(this, $A, !0, "f")
                } else {
                    const e = Math.min(0, Math.max(-2e3, -2e3 * (1 + this.getSpeedKmh() / 100)));
                    l_(this, UA, "f").applyEngineForce(e, 2),
                    l_(this, UA, "f").applyEngineForce(e, 3),
                    l_(this, UA, "f").setBrake(0, 0),
                    l_(this, UA, "f").setBrake(0, 1),
                    l_(this, UA, "f").setBrake(0, 2),
                    l_(this, UA, "f").setBrake(0, 3)
                }
            else
                l_(this, UA, "f").setBrake(0, 0),
                l_(this, UA, "f").setBrake(0, 1),
                l_(this, UA, "f").setBrake(0, 2),
                l_(this, UA, "f").setBrake(0, 3);
            const c = l_(this, BA, "m", r_).call(this).applyQuaternion(this.getQuaternion().invert())
              , h = -new Et(c.x,c.z).normalize().angle() + Math.PI / 2;
            let u = Math.max(0, Math.min(1, this.getSpeedKmh() / 30));
            this.getWheelInContact(0) || this.getWheelInContact(1) || (u = 0);
            const d = 155 / Math.pow(46, 1.55)
              , f = Math.max(-d, Math.min(d, h * u))
              , p = 155 / Math.pow(Math.max(46, Math.abs(this.getSpeedKmh())), 1.55);
            l_(this, qA, "f") && (s && !this.hasFinished() ? o_(this, XA, Math.min(l_(this, XA, "f") + 10 * e, 1), "f") : r && !this.hasFinished() ? o_(this, XA, Math.max(l_(this, XA, "f") - 10 * e, -1), "f") : l_(this, XA, "f") > 0 ? o_(this, XA, Math.max(l_(this, XA, "f") - 10 * e, 0), "f") : l_(this, XA, "f") < 0 && o_(this, XA, Math.min(l_(this, XA, "f") + 10 * e, 0), "f"));
            const m = l_(this, XA, "f") * p;
            let g;
            g = f < 0 && m < 0 ? Math.min(f, m) : f > 0 && m > 0 ? Math.max(f, m) : f + m,
            l_(this, UA, "f").setSteeringValue(g, 0),
            l_(this, UA, "f").setSteeringValue(g, 1);
            for (let e = 0; e < 4; e++) {
                const t = l_(this, UA, "f").getWheelInfo(e);
                let n;
                n = t.m_raycastInfo.m_suspensionLength < -.2 ? 200 : 50,
                n != t.m_suspensionStiffness && t.set_m_suspensionStiffness(n)
            }
            if (o) {
                if (!l_(this, JA, "f") && !this.hasFinished() && l_(this, qA, "f") && null != l_(this, ZA, "f")) {
                    const e = new Ammo.btTransform;
                    e.setIdentity(),
                    o_(this, VA, new Zt(l_(this, ZA, "f").position.x,l_(this, ZA, "f").position.y,l_(this, ZA, "f").position.z), "f");
                    const t = new Ammo.btVector3(l_(this, VA, "f").x,l_(this, VA, "f").y,l_(this, VA, "f").z);
                    e.setOrigin(t),
                    Ammo.destroy(t),
                    o_(this, GA, new Kt(l_(this, ZA, "f").quaternion.x,l_(this, ZA, "f").quaternion.y,l_(this, ZA, "f").quaternion.z,l_(this, ZA, "f").quaternion.w), "f");
                    const n = new Ammo.btQuaternion(l_(this, GA, "f").x,l_(this, GA, "f").y,l_(this, GA, "f").z,l_(this, GA, "f").w);
                    e.setRotation(n),
                    Ammo.destroy(n),
                    l_(this, carBodyRigidbody, "f").setWorldTransform(e),
                    l_(this, NA, "f").setWorldTransform(e),
                    Ammo.destroy(e);
                    const i = new Ammo.btVector3(0,0,0);
                    l_(this, carBodyRigidbody, "f").setLinearVelocity(i),
                    l_(this, carBodyRigidbody, "f").setAngularVelocity(i),
                    Ammo.destroy(i),
                    l_(this, UA, "f").resetSuspension(),
                    l_(this, UA, "f").getWheelInfo(0).m_raycastInfo.set_m_suspensionLength(PA.suspensionResetLengthFront),
                    l_(this, UA, "f").getWheelInfo(1).m_raycastInfo.set_m_suspensionLength(PA.suspensionResetLengthFront),
                    l_(this, UA, "f").getWheelInfo(2).m_raycastInfo.set_m_suspensionLength(PA.suspensionResetLengthRear),
                    l_(this, UA, "f").getWheelInfo(3).m_raycastInfo.set_m_suspensionLength(PA.suspensionResetLengthRear),
                    l_(this, UA, "f").setSteeringValue(0, 0),
                    l_(this, UA, "f").setSteeringValue(0, 1);
                    const r = l_(this, UA, "f").getNumWheels();
                    for (let e = 0; e < r; e++)
                        l_(this, UA, "f").updateWheelTransform(e, !0);
                    o_(this, KA, l_(this, ZA, "f").nextCheckpointIndex, "f")
                }
                o_(this, JA, !0, "f")
            } else
                o_(this, JA, !1, "f")
        }
        ;
        const c_ = class {
            constructor(e, t, n, i, r, a, s, o) {
                BA.add(this),
                DA.set(this, void 0),
                LA.set(this, void 0),
                UA.set(this, void 0),
                carBodyRigidbody.set(this, void 0),
                NA.set(this, void 0),
                FA.set(this, void 0),
                OA.set(this, void 0),
                zA.set(this, new Ammo.btTransform),
                WA.set(this, new Ammo.btVector3),
                HA.set(this, new js(new Zt,PA.detectorBoxSize.clone())),
                VA.set(this, void 0),
                GA.set(this, void 0),
                QA.set(this, void 0),
                XA.set(this, 0),
                jA.set(this, null),
                qA.set(this, !1),
                YA.set(this, new Kh),
                KA.set(this, 0),
                ZA.set(this, null),
                JA.set(this, !1),
                $A.set(this, !1),
                e_.set(this, null),
                o_(this, QA, s, "f"),
                o_(this, OA, a, "f"),
                o_(this, LA, new Qh, "f"),
                l_(this, LA, "f").createGroundPlane(),
                l_(this, LA, "f").createMountains(e, t),
                o_(this, DA, new fu(l_(this, LA, "f"),n,i), "f");
                const l = new Ammo.btTransform;
                l.setIdentity();
                const c = new Ammo.btDefaultMotionState(l);
                Ammo.destroy(l);
                const h = new Ammo.btVector3(0,0,0);
                o_(this, FA, l_(this, BA, "m", t_).call(this, r), "f"),
                l_(this, FA, "f").calculateLocalInertia(400, h);
                const u = new Ammo.btRigidBodyConstructionInfo(400,c,l_(this, FA, "f"),h)
                  , d = new Ammo.btRigidBody(u);
                d.setFriction(1),
                d.setContactProcessingThreshold(0),
                Ammo.destroy(u),
                Ammo.destroy(h),
                d.setDamping(.1, .1),
                d.setActivationState(4),
                l_(this, LA, "f").world.addRigidBody(d, 1, 2),
                o_(this, carBodyRigidbody, d, "f");
                const f = new Ammo.btVehicleTuning
                  , p = new Ammo.btDefaultVehicleRaycaster(l_(this, LA, "f").world)
                  , m = new Ammo.btRaycastVehicle(f,d,p);
                m.setCoordinateSystem(0, 1, 2),
                l_(this, LA, "f").world.addAction(m),
                o_(this, UA, m, "f");
                const g = new Ammo.btVector3(0,-1,0)
                  , A = new Ammo.btVector3(-1,0,0);
                for (const e of ["WheelFL", "WheelFR", "WheelBL", "WheelBR"]) {
                    let t;
                    if ("WheelFL" == e)
                        t = new Ammo.btVector3(.627909,.27,1.3478);
                    else if ("WheelFR" == e)
                        t = new Ammo.btVector3(-.627909,.27,1.3478);
                    else if ("WheelBL" == e)
                        t = new Ammo.btVector3(.720832,.27,-1.52686);
                    else {
                        if ("WheelBR" != e)
                            throw new Error("Unidentified wheel");
                        t = new Ammo.btVector3(-.720832,.27,-1.52686)
                    }
                    const n = "WheelFL" == e || "WheelFR" == e
                      , i = m.addWheel(t, g, A, .12, .331, f, n);
                    Ammo.destroy(t),
                    i.set_m_maxSuspensionTravelCm(1e3),
                    i.set_m_maxSuspensionForce(1e6),
                    i.set_m_suspensionStiffness(50),
                    i.set_m_wheelsDampingRelaxation(1.35),
                    i.set_m_wheelsDampingCompression(200),
                    i.set_m_frictionSlip(3),
                    i.set_m_rollInfluence(.5);
                }
                Ammo.destroy(g),
                Ammo.destroy(A);
                const _ = new Ammo.btTransform;
                _.setIdentity(),
                o_(this, VA, new Zt(o.position.x,o.position.y,o.position.z), "f");
                const v = new Ammo.btVector3(l_(this, VA, "f").x,l_(this, VA, "f").y,l_(this, VA, "f").z);
                _.setOrigin(v),
                Ammo.destroy(v),
                o_(this, GA, new Kt(o.quaternion.x,o.quaternion.y,o.quaternion.z,o.quaternion.w), "f");
                const w = new Ammo.btQuaternion(l_(this, GA, "f").x,l_(this, GA, "f").y,l_(this, GA, "f").z,l_(this, GA, "f").w);
                _.setRotation(w),
                Ammo.destroy(w),
                o_(this, NA, l_(this, carBodyRigidbody, "f").getMotionState(), "f"),
                l_(this, carBodyRigidbody, "f").setWorldTransform(_),
                l_(this, NA, "f").setWorldTransform(_),
                Ammo.destroy(_),
                l_(this, UA, "f").resetSuspension(),
                l_(this, UA, "f").getWheelInfo(0).m_raycastInfo.set_m_suspensionLength(PA.suspensionResetLengthFront),
                l_(this, UA, "f").getWheelInfo(1).m_raycastInfo.set_m_suspensionLength(PA.suspensionResetLengthFront),
                l_(this, UA, "f").getWheelInfo(2).m_raycastInfo.set_m_suspensionLength(PA.suspensionResetLengthRear),
                l_(this, UA, "f").getWheelInfo(3).m_raycastInfo.set_m_suspensionLength(PA.suspensionResetLengthRear),
                l_(this, UA, "f").setSteeringValue(0, 0),
                l_(this, UA, "f").setSteeringValue(0, 1);
                const y = l_(this, UA, "f").getNumWheels();
                for (let e = 0; e < y; e++)
                    l_(this, UA, "f").updateWheelTransform(e, !0)
            }
            dispose() {
                l_(this, LA, "f").world.removeRigidBody(l_(this, carBodyRigidbody, "f")),
                Ammo.destroy(l_(this, NA, "f")),
                Ammo.destroy(l_(this, carBodyRigidbody, "f")),
                Ammo.destroy(l_(this, zA, "f")),
                Ammo.destroy(l_(this, WA, "f")),
                Ammo.destroy(l_(this, FA, "f")),
                l_(this, LA, "f").world.removeAction(l_(this, UA, "f")),
                Ammo.destroy(l_(this, UA, "f")),
                l_(this, LA, "f").dispose()
            }
            get physics() {
                return l_(this, LA, "f")
            }
            get controls() {
                return l_(this, QA, "f")
            }
            getSpeedKmh() {
                return this.hasStarted() ? l_(this, UA, "f").getCurrentSpeedKmHour() : 0
            }
            getVelocityVector() {
                let vec = l_(this, carBodyRigidbody, "f").getLinearVelocity();
                return {x:vec.x(), y:vec.y(), z:vec.z()};
            }
            getSteeringAngle() {
                return l_(this, UA, "f").getSteeringValue(0)
            }
            getRotationalVelocity() {
                let vec = l_(this, carBodyRigidbody, "f").getAngularVelocity();
                return [vec.x(), vec.y(), vec.z()];
            }
            bombExploded(bombLocation, amplification) {
                const bombVector = new Ammo.btVector3(bombLocation.x,bombLocation.y,bombLocation.z);
                // console.log(bombVector);
                const carVector = l_(this, carBodyRigidbody, "f").getCenterOfMassTransform().getOrigin();
                const relativeVector = bombVector.op_sub(carVector);
                const bombDistance = relativeVector.length();
                const falloff = bombDistance * bombDistance;
                relativeVector.normalize();
                const forceVector = relativeVector.op_mul(amplification * -1000 / (falloff + 1));
                l_(this, carBodyRigidbody, "f").applyImpulse(forceVector, new Ammo.btVector3(0,1 / falloff,0))
            }
            start() {
                o_(this, qA, !0, "f")
            }
            hasStarted() {
                return l_(this, qA, "f")
            }
            hasFinished() {
                return null != l_(this, jA, "f")
            }
            getFinishTime() {
                return l_(this, jA, "f")
            }
            getTime() {
                return l_(this, YA, "f").clone()
            }
            getNextCheckpointIndex() {
                return l_(this, KA, "f")
            }
            hasCheckpointToRespawnAt() {
                return null != l_(this, ZA, "f")
            }
            isBrakeLightEnabled() {
                return l_(this, $A, "f")
            }
            getPosition() {
                return l_(this, VA, "f")
            }
            getQuaternion() {
                return l_(this, GA, "f")
            }
            getMatrix4() {
                return (new Cn).compose(this.getPosition(), this.getQuaternion(), new Zt(1,1,1))
            }
            getWheelPosition(e) {
                const t = l_(this, UA, "f").getWheelTransformWS(e).getOrigin();
                return new Zt(t.x(),t.y(),t.z())
            }
            getWheelQuaternion(e) {
                const t = l_(this, UA, "f").getWheelTransformWS(e).getRotation();
                return new Kt(t.x(),t.y(),t.z(),t.w())
            }
            getWheelInContact(e) {
                return l_(this, UA, "f").getWheelInfo(e).m_raycastInfo.m_isInContact
            }
            getWheelSuspensionVelocity(e) {
                return l_(this, UA, "f").getWheelInfo(e).m_suspensionRelativeVelocity
            }
            getWheelSuspensionLength(e) {
                return l_(this, UA, "f").getWheelInfo(e).m_raycastInfo.m_suspensionLength
            }
            getWheelRotation(e) {
                return l_(this, UA, "f").getWheelInfo(e).m_rotation
            }
            getWheelDeltaRotation(e) {
                return l_(this, UA, "f").getWheelInfo(e).m_deltaRotation
            }
            getWheelSkidInfo(e) {
                return l_(this, UA, "f").getWheelInfo(e).m_skidInfo
            }
            getCollisionImpulses() {
                const e = []
                  , t = l_(this, LA, "f").dispatcher.getNumManifolds();
                for (let n = 0; n < t; ++n) {
                    const t = l_(this, LA, "f").dispatcher.getManifoldByIndexInternal(n)
                      , i = t.getBody0()
                      , r = t.getBody1();
                    if (i.H == l_(this, carBodyRigidbody, "f").H || r.H == l_(this, carBodyRigidbody, "f").H) {
                        const n = t.getNumContacts();
                        for (let i = 0; i < n; ++i) {
                            const n = t.getContactPoint(i);
                            e.push(n.getAppliedImpulse())
                        }
                    }
                }
                return e
            }
            step() {
                var e;
                if (this.hasStarted() && l_(this, YA, "f").numberOfFrames < Ch.maxFrames) {
                    const t = 1 / Qh.stepsPerSecond
                      , n = l_(this, VA, "f")
                      , i = l_(this, GA, "f");
                    (null == l_(this, e_, "f") || l_(this, e_, "f").manhattanDistanceTo(n) > 1.5) && (null == l_(this, e_, "f") ? o_(this, e_, n.clone(), "f") : l_(this, e_, "f").copy(n),
                    l_(this, LA, "f").activePhysicsAt(n)),
                    l_(this, BA, "m", a_).call(this),
                    l_(this, BA, "m", s_).call(this, t, l_(this, QA, "f")),
                    l_(this, LA, "f").step();
                    const r = l_(this, zA, "f");
                    l_(this, NA, "f").getWorldTransform(r);
                    const a = r.getOrigin()
                      , s = r.getRotation();
                    if (n.set(a.x(), a.y(), a.z()),
                    i.set(s.x(), s.y(), s.z(), s.w()),
                    !this.hasFinished()) {
                        const t = l_(this, HA, "f");
                        t.center.copy(PA.detectorBoxCenter).applyQuaternion(i).add(n),
                        t.rotation.elements = [1 - 2 * (i.y * i.y + i.z * i.z), 2 * (i.x * i.y + i.z * i.w), 2 * (i.x * i.z - i.y * i.w), 2 * (i.x * i.y - i.z * i.w), 1 - 2 * (i.x * i.x + i.z * i.z), 2 * (i.y * i.z + i.x * i.w), 2 * (i.x * i.z + i.y * i.w), 2 * (i.y * i.z - i.x * i.w), 1 - 2 * (i.x * i.x + i.y * i.y)];
                        const r = l_(this, DA, "f").getTotalNumberOfCheckpointIndices();
                        if (l_(this, KA, "f") == r)
                            null != l_(this, DA, "f").checkFinish(t) && o_(this, jA, l_(this, YA, "f").clone(), "f");
                        else {
                            const n = l_(this, DA, "f").checkCheckpoint(t, l_(this, KA, "f"));
                            if (null != n && (o_(this, KA, (e = l_(this, KA, "f"),
                            ++e), "f"),
                            n.rotationAxis == Au.YPositive)) {
                                const e = l_(this, BA, "m", r_).call(this);
                                let t = n.rotation * Math.PI / 2;
                                (0 == n.rotation && e.z < 0 || 1 == n.rotation && e.x < 0 || 2 == n.rotation && e.z > 0 || 3 == n.rotation && e.x > 0) && (t += Math.PI);
                                const i = (new Kt).setFromEuler(new Fn(0,t,0))
                                  , r = new Zt(0,.35,-1.35);
                                r.applyQuaternion(i),
                                n.type != mu.CheckpointWide && n.type != mu.PlaneCheckpointWide || r.sub(new Zt(-10,0,0).applyEuler(new Fn(0,n.rotation * Math.PI / 2,0))),
                                o_(this, ZA, {
                                    position: new Zt(n.x * fu.partSize + r.x,n.y * fu.partSize + r.y,n.z * fu.partSize + r.z),
                                    quaternion: i,
                                    nextCheckpointIndex: l_(this, KA, "f")
                                }, "f")
                            }
                        }
                    }
                }
            }
        }
        ;
        var h_, u_, d_, f_ = function(e, t, n, i) {
            if ("a" === n && !i)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        u_ = new WeakMap,
        h_ = new WeakSet,
        d_ = function(e) {
            if (e.length % 9 != 0)
                throw new Error("Physics shape vertices length is not dividable by 9");
            const t = new en
              , n = new Ammo.btTriangleMesh;
            for (let i = 0; i < e.length; i += 9) {
                const r = e[i + 0]
                  , a = e[i + 1]
                  , s = e[i + 2]
                  , o = e[i + 3]
                  , l = e[i + 4]
                  , c = e[i + 5]
                  , h = e[i + 6]
                  , u = e[i + 7]
                  , d = e[i + 8]
                  , f = new Ammo.btVector3(r,a,s)
                  , p = new Ammo.btVector3(o,l,c)
                  , m = new Ammo.btVector3(h,u,d);
                n.addTriangle(f, p, m),
                Ammo.destroy(f),
                Ammo.destroy(p),
                Ammo.destroy(m),
                t.expandByPoint(new Zt(r,a,s)),
                t.expandByPoint(new Zt(o,l,c)),
                t.expandByPoint(new Zt(h,u,d))
            }
            const i = new Ammo.btBvhTriangleMeshShape(n);
            return i.setMargin(.01),
            {
                boundingBox: t,
                shape: i,
                triangleMesh: n
            }
        }
        ;
        const p_ = class {
            constructor(e) {
                h_.add(this),
                u_.set(this, new Map);
                for (const {id: t, vertices: n, detector: i, startOffset: r} of e) {
                    const {boundingBox: e, shape: a, triangleMesh: s} = f_(this, h_, "m", d_).call(this, n);
                    f_(this, u_, "f").set(t, {
                        boundingBox: e,
                        shape: a,
                        triangleMesh: s,
                        detector: null != i ? {
                            type: i.type,
                            center: new Zt(i.center[0],i.center[1],i.center[2]),
                            size: new Zt(i.size[0],i.size[1],i.size[2])
                        } : null,
                        startOffset: null != r ? new Zt(r[0],r[1],r[2]) : null
                    })
                }
            }
            dispose() {
                for (const {shape: e, triangleMesh: t} of f_(this, u_, "f").values())
                    Ammo.destroy(e),
                    Ammo.destroy(t);
                f_(this, u_, "f").clear()
            }
            getPhysicsShape(e) {
                const t = f_(this, u_, "f").get(e);
                if (null == t)
                    throw new Error('Track part with the id "' + e.toString() + '" has no physics model');
                return {
                    boundingBox: t.boundingBox.clone(),
                    shape: t.shape
                }
            }
            getPartTypesWithDetector(e) {
                const t = [];
                for (const [n,i] of f_(this, u_, "f").entries())
                    null != i.detector && i.detector.type == e && t.push(n);
                return t
            }
            getStartPartTypes() {
                const e = [];
                for (const [t,n] of f_(this, u_, "f").entries())
                    null != n.startOffset && e.push(t);
                return e
            }
            getPartStartOffset(e) {
                var t, n;
                const i = f_(this, u_, "f").get(e);
                if (null == i)
                    throw new Error('Track part with the id "' + e.toString() + '" does not exist');
                return null !== (n = null === (t = i.startOffset) || void 0 === t ? void 0 : t.clone()) && void 0 !== n ? n : null
            }
            getDetector(e) {
                const t = f_(this, u_, "f").get(e);
                if (null == t)
                    throw new Error('Track part with the id "' + e.toString() + '" does not exist');
                return t.detector
            }
        }
        ;
        var m_;
        !function(e) {
            e[e.Init = 0] = "Init",
            e[e.Verify = 1] = "Verify",
            e[e.TestDeterminism = 2] = "TestDeterminism",
            e[e.CreateCar = 3] = "CreateCar",
            e[e.DeleteCar = 4] = "DeleteCar",
            e[e.StartCar = 5] = "StartCar",
            e[e.ControlCar = 6] = "ControlCar",
            e[e.PauseCar = 7] = "PauseCar",
            e[e.VerifyResult = 8] = "VerifyResult",
            e[e.DeterminismResult = 9] = "DeterminismResult",
            e[e.UpdateResult = 10] = "UpdateResult",
            e[e.BombCar = 11] = "BombCar"
        }(m_ || (m_ = {}));
        const g_ = m_;
        var A_, __ = function(e, t, n, i, r) {
            if ("m" === i)
                throw new TypeError("Private method is not writable");
            if ("a" === i && !r)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
            n
        }, v_ = function(e, t, n, i) {
            if ("a" === n && !i)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        A_ = new WeakMap;
        const w_ = class {
            constructor(e) {
                A_.set(this, void 0),
                __(this, A_, e, "f")
            }
            dispose() {}
            getControls(e) {
                return v_(this, A_, "f").getFrame(e)
            }
        }
        ;
        var y_ = n(1312);
        const x_ = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
          , b_ = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
        function E_(e) {
            let t = 0
              , n = "";
            for (; t < 8 * e.length; ) {
                const i = M_(e, t);
                let r;
                30 & ~i ? (r = i,
                t += 6) : (r = 31 & i,
                t += 5),
                n += x_[r]
            }
            return n
        }
        function S_(e) {
            let t = 0;
            const n = []
              , i = e.length;
            for (let r = 0; r < i; r++) {
                const a = e.charCodeAt(r);
                if (a >= b_.length)
                    return null;
                const s = b_[a];
                if (-1 == s)
                    return null;
                30 & ~s ? (T_(n, t, 6, s, r == i - 1),
                t += 6) : (T_(n, t, 5, s, r == i - 1),
                t += 5)
            }
            return new Uint8Array(n)
        }
        function M_(e, t) {
            if (t >= 8 * e.length)
                throw new Error("Out of range");
            const n = Math.floor(t / 8)
              , i = e[n]
              , r = t - 8 * n;
            if (r <= 2 || n >= e.length - 1)
                return (i & 63 << r) >>> r;
            return (i & 63 << r) >>> r | (e[n + 1] & 63 >>> 8 - r) << 8 - r
        }
        function T_(e, t, n, i, r) {
            const a = Math.floor(t / 8);
            for (; a >= e.length; )
                e.push(0);
            const s = t - 8 * a;
            if (e[a] |= i << s & 255,
            s > 8 - n && !r) {
                const t = a + 1;
                t >= e.length && e.push(0),
                e[t] |= i >> 8 - s
            }
        }
        var C_, I_ = function(e, t, n, i, r) {
            if ("m" === i)
                throw new TypeError("Private method is not writable");
            if ("a" === i && !r)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
            n
        }, R_ = function(e, t, n, i) {
            if ("a" === n && !i)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        class P_ {
            constructor(e=28) {
                if (C_.set(this, void 0),
                !(Number.isSafeInteger(e) && e >= 0 && e < 180))
                    throw new Error("Representation is not a safe integer or is out of range");
                I_(this, C_, e, "f")
            }
            clone() {
                return new P_(R_(this, C_, "f"))
            }
            toDegrees() {
                return 2 * R_(this, C_, "f")
            }
            static fromDegrees(e) {
                const t = Math.round(e / 2 % 180);
                return new P_(t)
            }
            getSunPosition() {
                const e = 2 * R_(this, C_, "f") * (Math.PI / 180)
                  , t = Math.cos(e)
                  , n = Math.sin(e);
                return new Zt(t,.78,n).normalize()
            }
            get representation() {
                return R_(this, C_, "f")
            }
        }
        C_ = new WeakMap;
        const B_ = P_;
        var D_;
        !function(e) {
            e[e.Summer = 0] = "Summer",
            e[e.Winter = 1] = "Winter",
            e[e.Desert = 2] = "Desert"
        }(D_ || (D_ = {}));
        const L_ = D_;
        var U_;
        !function(e) {
            e[e.Default = 0] = "Default",
            e[e.Summer = 1] = "Summer",
            e[e.Winter = 2] = "Winter",
            e[e.Desert = 3] = "Desert",
            e[e.Custom0 = 32] = "Custom0",
            e[e.Custom1 = 33] = "Custom1",
            e[e.Custom2 = 34] = "Custom2",
            e[e.Custom3 = 35] = "Custom3",
            e[e.Custom4 = 36] = "Custom4",
            e[e.Custom5 = 37] = "Custom5",
            e[e.Custom6 = 38] = "Custom6",
            e[e.Custom7 = 39] = "Custom7",
            e[e.Custom8 = 40] = "Custom8"
        }(U_ || (U_ = {}));
        const k_ = U_;
        var N_;
        !function(e) {
            e[e.Special = 0] = "Special",
            e[e.Road = 1] = "Road",
            e[e.RoadTurns = 2] = "RoadTurns",
            e[e.RoadWide = 3] = "RoadWide",
            e[e.Plane = 4] = "Plane",
            e[e.Block = 5] = "Block",
            e[e.WallTrack = 6] = "WallTrack",
            e[e.Pillar = 7] = "Pillar",
            e[e.Sign = 8] = "Sign"
        }(N_ || (N_ = {}));
        const F_ = N_;
        var O_, z_ = function(e, t, n, i, r) {
            if ("m" === i)
                throw new TypeError("Private method is not writable");
            if ("a" === i && !r)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
            n
        }, W_ = function(e, t, n, i) {
            if ("a" === n && !i)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        class H_ {
            constructor(e) {
                O_.set(this, void 0);
                const t = [];
                for (const [n,i,r] of e)
                    t.push([n, i, r]);
                z_(this, O_, t, "f")
            }
            rotated(e, t) {
                const n = t == Au.YNegative || t == Au.XNegative || t == Au.ZNegative;
                return new H_(W_(this, O_, "f").map(( ([i,r,a]) => {
                    if (n)
                        switch (e) {
                        case 0:
                            break;
                        case 1:
                            [i,a] = [-a - 1, i];
                            break;
                        case 2:
                            [i,a] = [-i - 1, -a - 1];
                            break;
                        case 3:
                            [i,a] = [a, -i - 1];
                            break;
                        default:
                            throw new Error("Invalid rotation")
                        }
                    else
                        switch (e) {
                        case 0:
                            break;
                        case 1:
                            [i,a] = [a, -i - 1];
                            break;
                        case 2:
                            [i,a] = [-i - 1, -a - 1];
                            break;
                        case 3:
                            [i,a] = [-a - 1, i];
                            break;
                        default:
                            throw new Error("Invalid rotation")
                        }
                    return t == Au.YPositive || (t == Au.YNegative ? [i,r] = [-i - 1, -r - 1] : t == Au.XPositive ? [i,r] = [r, -i - 1] : t == Au.XNegative ? [i,r] = [-r - 1, i] : t == Au.ZPositive ? [r,a] = [-a - 1, r] : [r,a] = [a, -r - 1]),
                    [i, r, a]
                }
                )))
            }
            forEach(e) {
                for (let t = 0; t < W_(this, O_, "f").length; t++) {
                    const [n,i,r] = W_(this, O_, "f")[t];
                    e(n, i, r, t)
                }
            }
            get length() {
                return W_(this, O_, "f").length
            }
        }
        O_ = new WeakMap;
        const V_ = H_
          , G_ = [{
            id: k_.Summer,
            colors: {}
        }, {
            id: k_.Winter,
            colors: {
                Road: "#5077b2",
                RoadBarrier: "#898989",
                RoadEdgeWhite: "#ffffff",
                RoadEdgeRed: "#1f3d6b",
                BlockSurface: "#878787",
                Pillar: "#2b4d7f",
                PillarEdge: "#071428",
                WallTrack: "#5077b2",
                WallTrackBottom: "#878787",
                WallTrackSides: "#ffffff",
                PlaneWall: "#1f3d6b",
                PlaneWallDetail: "#878787",
                SignYellow: "#1b2a89",
                SignRed: "#841901",
                SignBlack: "#5077b2"
            }
        }, {
            id: k_.Desert,
            colors: {
                Road: "#997240",
                RoadBarrier: "#211001",
                RoadEdgeRed: "#5b2424",
                RoadEdgeWhite: "#510808",
                BlockSurface: "#b78f5b",
                Pillar: "#99713d",
                PillarEdge: "#1c1105",
                WallTrack: "#260b0b",
                WallTrackBottom: "#160606",
                WallTrackSides: "#75562e",
                PlaneWall: "#633030",
                PlaneWallDetail: "#aa8a53",
                SignYellow: "#997240",
                SignRed: "#d80202",
                SignBlack: "#601d1d"
            }
        }]
          , Q_ = G_.concat([{
            id: k_.Custom0,
            colors: {
                BlockSurface: "#131313"
            }
        }, {
            id: k_.Custom1,
            colors: {
                BlockSurface: "#501b1b"
            }
        }, {
            id: k_.Custom2,
            colors: {
                BlockSurface: "#7f4d2b"
            }
        }, {
            id: k_.Custom3,
            colors: {
                BlockSurface: "#93862d"
            }
        }, {
            id: k_.Custom4,
            colors: {
                BlockSurface: "#2a5e30"
            }
        }, {
            id: k_.Custom5,
            colors: {
                BlockSurface: "#236363"
            }
        }, {
            id: k_.Custom6,
            colors: {
                BlockSurface: "#20244b"
            }
        }, {
            id: k_.Custom7,
            colors: {
                BlockSurface: "#592759"
            }
        }, {
            id: k_.Custom8,
            colors: {
                BlockSurface: "#302318"
            }
        }]);
        class X_ {
            constructor(e, t, n, i, r, a, s=null, o=null) {
                const l = [];
                for (const [e,t] of a)
                    for (let n = e[0]; n <= t[0]; n++)
                        for (let i = e[1]; i <= t[1]; i++)
                            for (let r = e[2]; r <= t[2]; r++) {
                                if (null != l.find(( ([e,t,a]) => e == n && t == i && a == r)))
                                    throw new Error("Duplicate tile in track part");
                                l.push([n, i, r])
                            }
                this.checksum = e,
                this.category = t,
                this.id = n,
                this.models = i,
                this.colors = r,
                this.tiles = new V_(l),
                this.detector = s,
                this.startOffset = o,
                Object.freeze(this)
            }
        }
        const j_ = [new X_("6d94d798abd14dc3bce4e99c180309d993ad43adb5f2c90eef8e350eedafe7cf",F_.Special,mu.Start,[["Road", "Start"]],G_,[[[-2, 0, -2], [1, 0, 1]]],null,new Zt(0,.35,1.35)), new X_("f29e34b2e05e0a4751109ae564b03fe8878a79cc6b26288f1117ed296d09c5bb",F_.Special,mu.StartWide,[["RoadWide", "StartWide"]],G_,[[[-2, 0, -2], [5, 0, 1]]],null,new Zt(-10,.35,1.35)), new X_("3c304054f415fbede4f73a43517db04302f38b16fa2cd4e587082b37b75e20e5",F_.Special,mu.PlaneStart,[["Planes", "PlaneStart"]],G_,[[[-2, 0, -2], [1, 0, 1]]],null,new Zt(0,.35,1.35)), new X_("f08710416bdaa3d91d0d43f014e45d421fdb4587a334993bad0056f3dbbcb6bb",F_.Special,mu.PlaneStartWide,[["Planes", "PlaneStartWide"]],G_,[[[-2, 0, -2], [5, 0, 1]]],null,new Zt(-10,.35,1.35)), new X_("223fc87c72bb64b58677062ffa08ab7eafd78071bced7c53233606763cd5316b",F_.Special,mu.Checkpoint,[["Road", "Checkpoint"]],G_,[[[-2, 0, -2], [1, 0, 1]]],{
            type: Jh.Checkpoint,
            center: [0, 2.2, 0],
            size: [10.5, 3.8, 1]
        }), new X_("82d9a9879cee92c04c8d4ba2e16fc31bb1917a31f5802a3bb5177ca9a5cfee01",F_.Special,mu.CheckpointWide,[["RoadWide", "CheckpointWide"]],G_,[[[-2, 0, -2], [5, 0, 1]]],{
            type: Jh.Checkpoint,
            center: [10, 2.2, 0],
            size: [30.6, 3.8, 1]
        }), new X_("fe8946d7f09724b5e11f493eb5c2a5b5e3d502b15beaad003f8134ac63558948",F_.Special,mu.PlaneCheckpoint,[["Planes", "PlaneCheckpoint"]],G_,[[[-2, 0, -2], [1, 0, 1]]],{
            type: Jh.Checkpoint,
            center: [0, 2.2, 0],
            size: [18.25, 3.8, 1]
        }), new X_("d486d9b851db35dd44c15f9e0bb3bf582118daf7be514598a19307f61cf46678",F_.Special,mu.PlaneCheckpointWide,[["Planes", "PlaneCheckpointWide"]],G_,[[[-2, 0, -2], [5, 0, 1]]],{
            type: Jh.Checkpoint,
            center: [10, 2.2, 0],
            size: [38.25, 3.8, 1]
        }), new X_("c01200d573a3594a6a4cb73ebb600964d653e4a89267d3297f3969220742aa79",F_.Special,mu.Finish,[["Road", "Finish"]],G_,[[[-2, 0, -2], [1, 0, 1]]],{
            type: Jh.Finish,
            center: [0, 2.2, 0],
            size: [10.5, 3.8, 2]
        }), new X_("a9cefdff816e94a643210c58582c2809de0e3e0e0478b8d5baabd7fe81f13e73",F_.Special,mu.FinishWide,[["RoadWide", "FinishWide"]],G_,[[[-2, 0, -2], [5, 0, 1]]],{
            type: Jh.Finish,
            center: [10, 2.2, 0],
            size: [30.6, 3.8, 2]
        }), new X_("75e5f09fe8a18ecafaf1fb80929173ef0a7dc0b785596bbe0ccd85a934d79578",F_.Special,mu.PlaneFinish,[["Planes", "PlaneFinish"]],G_,[[[-2, 0, -2], [1, 0, 1]]],{
            type: Jh.Finish,
            center: [0, 2.2, 0],
            size: [18.25, 3.8, 2]
        }), new X_("5801b3268c75809728c63450d06000c5f6fcfd5d72691902f99d7d19d25e1d78",F_.Special,mu.PlaneFinishWide,[["Planes", "PlaneFinishWide"]],G_,[[[-2, 0, -2], [5, 0, 1]]],{
            type: Jh.Finish,
            center: [10, 2.2, 0],
            size: [38.25, 3.8, 2]
        }), new X_("3421096c1986d008da88b5fac64cd4c475603138c9bf8a98ab6d581dda6befa7",F_.Road,mu.Straight,[["Road", "Straight"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("bdc3bcdafec9bc26835dc76159f7223da7da5babb3a5770129fa11046c748b69",F_.Road,mu.StraightPillarBottom,[["Road", "Straight"], ["Pillar", "SurfacePillarBottom"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("2758e984d87b3170f6618c9c689554ef169fd5f80ea7f0df292ffd69792d414e",F_.Road,mu.StraightPillarShort,[["Road", "Straight"], ["Pillar", "SurfacePillarShort"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("fb5a81784022cfc2d3d0007a032976c8dfd066e72a3bc92f671c98c5cca36aaa",F_.Road,mu.TurnSharp,[["Road", "TurnSharp"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("3da2e9a93da06b1376c33486f30a5f02d8c2f125f5b7d8b41166049ecd95f269",F_.Road,mu.TurnSharpPillarBottom,[["Road", "TurnSharp"], ["Pillar", "SurfacePillarBottom"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("c642122276547382e37dcb857b130088f4dc0d208dc7fdb6055b2a93080a3ffe",F_.Road,mu.TurnSharpPillarShort,[["Road", "TurnSharp"], ["Pillar", "SurfacePillarShort"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("110efb0facc096e1c875e545b075b0effaa1b78d50b97f906aec44796501544b",F_.RoadTurns,mu.TurnShort,[["Road", "TurnShort"]],G_,[[[-2, 0, 0], [1, 0, 1]], [[-2, 0, -1], [2, 0, -1]], [[-1, 0, -2], [3, 0, -2]], [[-1, 0, -3], [5, 0, -3]], [[0, 0, -4], [5, 0, -4]], [[1, 0, -5], [5, 0, -5]], [[3, 0, -6], [5, 0, -6]]]), new X_("20a164840b0e83f3eac96ba9e3650a30e3b3dec4bb635946e3e9e9a1b74820d2",F_.RoadTurns,mu.TurnLong,[["Road", "TurnLong"]],G_,[[[-2, 0, -1], [1, 0, 1]], [[-1, 0, -2], [2, 0, -2]], [[-1, 0, -3], [2, 0, -3]], [[-1, 0, -4], [3, 0, -4]], [[0, 0, -5], [4, 0, -5]], [[1, 0, -6], [6, 0, -6]], [[2, 0, -7], [9, 0, -7]], [[3, 0, -8], [9, 0, -8]], [[4, 0, -9], [9, 0, -9]], [[7, 0, -10], [9, 0, -10]]]), new X_("c36dddde35a740c6f01227522bf35e1a450cddbfdd8bde1617873bef0d47c95c",F_.RoadTurns,mu.TurnLong2,[["Road", "TurnLong2"]],G_,[[[-2, 0, -2], [1, 0, 1]], [[-1, 0, -4], [2, 0, -3]], [[-1, 0, -5], [3, 0, -5]], [[0, 0, -6], [4, 0, -6]], [[0, 0, -7], [5, 0, -7]], [[1, 0, -8], [6, 0, -8]], [[2, 0, -9], [7, 0, -9]], [[3, 0, -10], [9, 0, -10]], [[4, 0, -11], [13, 0, -11]], [[5, 0, -12], [13, 0, -12]], [[7, 0, -13], [13, 0, -13]], [[10, 0, -14], [13, 0, -14]]]), new X_("0ed20c04a941708c23fe6ced4af3f357c0e435f09278e06f3de2806786d44059",F_.RoadTurns,mu.TurnLong3,[["Road", "TurnLong3"]],G_,[[[-2, 0, -2], [1, 0, 1]], [[-1, 0, -4], [2, 0, -3]], [[-1, 0, -5], [2, 0, -5]], [[0, 0, -6], [3, 0, -6]], [[0, 0, -7], [3, 0, -7]], [[0, 0, -8], [4, 0, -8]], [[1, 0, -9], [5, 0, -9]], [[2, 0, -10], [6, 0, -10]], [[2, 0, -11], [7, 0, -11]], [[3, 0, -12], [8, 0, -12]], [[4, 0, -13], [10, 0, -13]], [[5, 0, -14], [13, 0, -14]], [[7, 0, -15], [17, 0, -15]], [[8, 0, -16], [17, 0, -16]], [[11, 0, -17], [17, 0, -17]], [[14, 0, -18], [17, 0, -18]]]), new X_("034ef287319877f2fcc32fbd6f32415539a4c287dfcd620360386a781adad22a",F_.RoadTurns,mu.TurnSLeft,[["Road", "TurnS", {
            flipX: !0
        }]],G_,[[[-2, 0, -1], [1, 0, 1]], [[-3, 0, -3], [0, 0, -2]], [[-4, 0, -4], [0, 0, -4]], [[-5, 0, -5], [-1, 0, -5]], [[-5, 0, -7], [-2, 0, -6]], [[-6, 0, -10], [-3, 0, -8]]]), new X_("0d49e9feb603d0899927c7e5184f4f4fdd4363d2e1fd296f0b7b3cf4dbbf0e8d",F_.RoadTurns,mu.TurnSRight,[["Road", "TurnS"]],G_,[[[-2, 0, -1], [1, 0, 1]], [[-1, 0, -3], [2, 0, -2]], [[-1, 0, -4], [3, 0, -4]], [[0, 0, -5], [4, 0, -5]], [[1, 0, -7], [4, 0, -6]], [[2, 0, -10], [5, 0, -8]]]), new X_("26bca19e63867bc0b755ff6fcca65de296c9d1f109f87540103565eb88a0e03d",F_.RoadTurns,mu.TurnShortLeftWide,[["RoadWide", "TurnShortLeftWide"]],G_,[[[-2, 0, -1], [1, 0, 1]], [[-1, 0, -2], [1, 0, -2]], [[-1, 0, -4], [5, 0, -3]], [[0, 0, -5], [5, 0, -5]], [[1, 0, -6], [5, 0, -6]], [[2, 0, -7], [9, 0, -7]], [[3, 0, -8], [9, 0, -8]], [[4, 0, -9], [9, 0, -9]], [[7, 0, -10], [9, 0, -10]]]), new X_("e3845854f85dafd8cec193bcbecdac6cb79f625066de29524d5c10c5580611c5",F_.RoadTurns,mu.TurnShortRightWide,[["RoadWide", "TurnShortRightWide"]],G_,[[[-2, 0, 0], [1, 0, 1]], [[-2, 0, -1], [2, 0, -1]], [[-2, 0, -2], [3, 0, -2]], [[2, 0, -6], [5, 0, -3]]]), new X_("dc6088960a65a55c74353a1e7c8a1ca8ec99e683f6273bf666d6909b288bb84b",F_.RoadTurns,mu.TurnLongLeftWide,[["RoadWide", "TurnLongLeftWide"]],G_,[[[-2, 0, -2], [1, 0, 1]], [[-1, 0, -5], [1, 0, -3]], [[0, 0, -6], [1, 0, -6]], [[0, 0, -7], [5, 0, -7]], [[1, 0, -8], [5, 0, -8]], [[2, 0, -9], [5, 0, -9]], [[3, 0, -10], [5, 0, -10]], [[4, 0, -11], [13, 0, -11]], [[5, 0, -12], [13, 0, -12]], [[7, 0, -13], [13, 0, -13]], [[10, 0, -14], [13, 0, -14]]]), new X_("0bbb8d6c1e4a325e10643cf45546da725c1ea18e92a3a95f753339629a06ef6c",F_.RoadTurns,mu.TurnLongRightWide,[["RoadWide", "TurnLongRightWide"]],G_,[[[-2, 0, -1], [1, 0, 1]], [[-2, 0, -3], [2, 0, -2]], [[-2, 0, -4], [3, 0, -4]], [[-2, 0, -5], [4, 0, -5]], [[-2, 0, -6], [6, 0, -6]], [[2, 0, -10], [9, 0, -7]]]), new X_("7d8d1eed719515ba7e48b5ef4a53b6b4bb2bef42496b6b40d2551230435ecb66",F_.Road,mu.SlopeUp,[["Road", "SlopeUp"]],G_,[[[-2, 0, -2], [1, 0, 1]], [[-2, 1, -2], [1, 1, -2]]]), new X_("d6d54dbf283f7209032541fc6b924dc879d914f253e391cf8b34dde8354661be",F_.Road,mu.SlopeUpLong,[["Road", "SlopeUpLong"]],G_,[[[-2, 0, -4], [1, 0, 1]], [[-2, 1, -5], [1, 1, -4]], [[-2, 1, -6], [1, 2, -6]]]), new X_("435e8cf33d28e52f75890cba1cb6529991148afd701f9b40e9ab876c11b2c448",F_.Road,mu.SlopeDown,[["Road", "SlopeDown"]],G_,[[[-2, 0, -2], [1, 0, 1]], [[-2, 1, 0], [1, 1, 1]]]), new X_("01990158f65e5d499030d8c6d0ce80d34c136189ae1a9430d4260ea7a85e91a9",F_.Road,mu.SlopeDownLong,[["Road", "SlopeDownLong"]],G_,[[[-2, 0, -2], [1, 0, 0]], [[-2, 1, -1], [1, 1, 5]], [[-2, 2, 3], [1, 2, 5]]]), new X_("4afecc8b9bd7a3b074112008831fef6b11f9a55ab8c1e570e3e73c1e92b43c6d",F_.Road,mu.Slope,[["Road", "Slope"]],G_,[[[-2, 0, 0], [1, 0, 1]], [[-2, 1, -2], [1, 1, 0]], [[-2, 2, -2], [1, 2, -2]]]), new X_("27f9b25126b1006514941bd148c8f19dc2d82022b0c1aa2358f36cb711d4b59c",F_.Road,mu.SlopePillar,[["Road", "Slope"], ["Pillar", "PillarTopSlope"]],G_,[[[-2, 0, 0], [1, 0, 1]], [[-2, 1, -2], [1, 1, 0]], [[-2, 2, -2], [1, 2, -2]], [[-1, 0, -1], [0, 0, -1]]]), new X_("eb236f0ac4bd895c170db53cb518c8df5167a9db5af4bb4f33f73c02deec5265",F_.Road,mu.SlopePillarShort,[["Road", "Slope"], ["Pillar", "PillarShortSlope"]],G_,[[[-2, 0, 0], [1, 0, 1]], [[-2, 1, -2], [1, 1, 0]], [[-2, 2, -2], [1, 2, -2]], [[-1, 0, -1], [0, 0, -1]]]), new X_("99cb9068cb3f97e7cbfdbb3f1edc1085ea37514f3d5dd8936bc32089cc066a5c",F_.Road,mu.SlopeUpVertical,[["Road", "SlopeUpVertical"]],G_,[[[-2, 0, -1], [1, 0, 1]], [[-2, 1, -1], [1, 1, -1]], [[-2, 1, -2], [1, 3, -2]]]), new X_("63628b23e104a3eb3c2ba8189cd408a10fbb6ebcd6fa4359d981e3c3804c13d8",F_.Road,mu.IntersectionT,[["Road", "IntersectionT"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("400dc4643653001d283bb13f740593fc2300c547bb4d2a962054ba6aabf3721c",F_.Road,mu.IntersectionTPillarBottom,[["Road", "IntersectionT"], ["Pillar", "SurfacePillarBottom"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("60355388650d35fcbddaaac29e0d03bc2ae46db1a05cd23ddd3f2722ec2d409e",F_.Road,mu.IntersectionTPillarShort,[["Road", "IntersectionT"], ["Pillar", "SurfacePillarShort"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("74197b3731c2befd03498bf5172859f0b3652f1972c19e43a99bb938769573df",F_.Road,mu.IntersectionCross,[["Road", "IntersectionCross"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("464e69b5c4f2667c246ade9ed33fd3e50b49438ed0ab787a086dfe74c217ff6c",F_.Road,mu.IntersectionCrossPillarBottom,[["Road", "IntersectionCross"], ["Pillar", "SurfacePillarBottom"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("90004caf354627289265314966f11b5656e6879ca7de10507e6c50cd95254b75",F_.Road,mu.IntersectionCrossPillarShort,[["Road", "IntersectionCross"], ["Pillar", "SurfacePillarShort"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("2af8aa6050028dd6ee69b7150e83a6d8819e1848a7b1c782848d3f6448c5091a",F_.RoadWide,mu.ToWideMiddle,[["RoadWide", "ToWideMiddle"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("26341cfe6bec34f46b10ffcd9a7706a8156b9ac41ed2cdfd166f9f8d3e9bc8f3",F_.RoadWide,mu.ToWideLeft,[["RoadWide", "ToWideSide", {
            flipX: !0
        }]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("3f82ebd6c72110b532a20673f8b54c7b25ae5988a51d3793bf383fea8ffcffc3",F_.RoadWide,mu.ToWideRight,[["RoadWide", "ToWideSide"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("f5cecce9870f41f8cba7a9fbe631c315370a7a82824d04977ec857dbb1dfed29",F_.RoadWide,mu.ToWideDouble,[["RoadWide", "ToWideDouble"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("99dc726611397f81b47459d32c7bfb8232322d1ca976ba9a3e71cc15451d8cfb",F_.RoadWide,mu.ToWideDiagonal,[["RoadWide", "ToWideDiagonal"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("47d7e3fb334681911e122babef127881a36a763fb22176854114495802d5ce84",F_.RoadWide,mu.StraightWide,[["RoadWide", "StraightWide"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("521adc95ed5a4809eeff7eec872c3d6449e4d6a7e4941d672f1e06a50a6615de",F_.RoadWide,mu.InnerCornerWide,[["RoadWide", "InnerCornerWide"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("d82274b362794e3c1772510002d5015dde345f1e72dd675c8bac41cf2331398b",F_.RoadWide,mu.OuterCornerWide,[["RoadWide", "OuterCornerWide"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("9b1df4dd4687404adb5789f3b90af39ea6fa65ef741a07b116dc436dc14a2aa1",F_.RoadWide,mu.SlopeUpLeftWide,[["RoadWide", "SlopeUpWide", {
            flipX: !0
        }]],G_,[[[-2, 0, -2], [1, 0, 1]], [[-2, 1, -2], [1, 1, -2]]]), new X_("651d4e988913b84359ad10e0c4745965b6a388eaa8c9bfbba4b6a50ae6d4f592",F_.RoadWide,mu.SlopeUpRightWide,[["RoadWide", "SlopeUpWide"]],G_,[[[-2, 0, -2], [1, 0, 1]], [[-2, 1, -2], [1, 1, -2]]]), new X_("848d9930c58e66152090d7853af87c8bb7971e1771d3c337ac1a50aaa4975a78",F_.RoadWide,mu.SlopeUpLongLeftWide,[["RoadWide", "SlopeUpLongWide", {
            flipX: !0
        }]],G_,[[[-2, 0, -4], [1, 0, 1]], [[-2, 1, -5], [1, 1, -4]], [[-2, 1, -6], [1, 2, -6]]]), new X_("e4d54c6c3b6011a1acfb6766b6b3e7ea0de6f9c6569a5ec88c47968ad4105b2a",F_.RoadWide,mu.SlopeUpLongRightWide,[["RoadWide", "SlopeUpLongWide"]],G_,[[[-2, 0, -4], [1, 0, 1]], [[-2, 1, -5], [1, 1, -4]], [[-2, 1, -6], [1, 2, -6]]]), new X_("106ad1d4c5aded30cc3ef4cd1bdc40babab84464ce7dbce3b81cc20d55fd615f",F_.RoadWide,mu.SlopeDownLeftWide,[["RoadWide", "SlopeDownWide", {
            flipX: !0
        }]],G_,[[[-2, 0, -2], [1, 0, 1]], [[-2, 1, 0], [1, 1, 1]]]), new X_("23a693633b8453c7a531de9723e6ca14d0676b1d7a4df7f78278914467b90a27",F_.RoadWide,mu.SlopeDownRightWide,[["RoadWide", "SlopeDownWide"]],G_,[[[-2, 0, -2], [1, 0, 1]], [[-2, 1, 0], [1, 1, 1]]]), new X_("0f2e33a8b68667e30e80ceaefdb890a77643799d63c7f20672ca3185bbc04270",F_.RoadWide,mu.SlopeDownLongLeftWide,[["RoadWide", "SlopeDownLongWide", {
            flipX: !0
        }]],G_,[[[-2, 0, -2], [1, 0, 0]], [[-2, 1, -1], [1, 1, 5]], [[-2, 2, 3], [1, 2, 5]]]), new X_("164903518c7efa4890a792017ea2b8125a2c3dae76bba4c6f1f56fb0f7e40ebc",F_.RoadWide,mu.SlopeDownLongRightWide,[["RoadWide", "SlopeDownLongWide"]],G_,[[[-2, 0, -2], [1, 0, 0]], [[-2, 1, -1], [1, 1, 5]], [[-2, 2, 3], [1, 2, 5]]]), new X_("c20560fd35288c5cc74af61834b9a56efaeacdde55eb793d400b7c5b97904993",F_.RoadWide,mu.SlopeLeftWide,[["RoadWide", "SlopeWide", {
            flipX: !0
        }]],G_,[[[-2, 0, 0], [1, 0, 1]], [[-2, 1, -2], [1, 1, 0]], [[-2, 2, -2], [1, 2, -2]]]), new X_("b6a26eb3cefee53d4deef24544e5b5c1ecd25e8e8bd7c3070c7947ada55c57c2",F_.RoadWide,mu.SlopeRightWide,[["RoadWide", "SlopeWide"]],G_,[[[-2, 0, 0], [1, 0, 1]], [[-2, 1, -2], [1, 1, 0]], [[-2, 2, -2], [1, 2, -2]]]), new X_("b598ff14bda99600434b24a619132fec4bffcc535483b9b57b0c8c09c1be1f1b",F_.RoadWide,mu.SlopeUpVerticalLeftWide,[["RoadWide", "SlopeUpVerticalWide"]],G_,[[[-2, 0, -1], [1, 0, 1]], [[-2, 1, -1], [1, 1, -1]], [[-2, 1, -2], [1, 3, -2]]]), new X_("4e0275d3a01eaca6ec5118b8b816ed292cb7172710cf9b7801068424ab684b22",F_.RoadWide,mu.SlopeUpVerticalRightWide,[["RoadWide", "SlopeUpVerticalWide", {
            flipX: !0
        }]],G_,[[[-2, 0, -1], [1, 0, 1]], [[-2, 1, -1], [1, 1, -1]], [[-2, 1, -2], [1, 3, -2]]]), new X_("896b47675cc2ff58494979168f6fd36c27c43da29aed6a52fdf80f054630166a",F_.Plane,mu.Plane,[["Planes", "Plane"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("dc9afb98a8bb998d3b76c3563385e58c1749e56ff43fbc7577b1f57ba8360702",F_.Plane,mu.PlanePillarBottom,[["Planes", "Plane"], ["Pillar", "SurfacePillarBottom"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("f59ad95edd26814236ab30b73f6f4f68003885ef150201a4ace14b832abcf438",F_.Plane,mu.PlanePillarShort,[["Planes", "Plane"], ["Pillar", "SurfacePillarShort"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("48247a66b232461083fa2aa36644e7e8779f5b426d474efd375ee7d21d009c9a",F_.Plane,mu.HalfPlane,[["Planes", "HalfPlane"]],G_,[[[-2, 0, 1], [1, 0, 1]], [[-2, 0, 0], [0, 0, 0]], [[-2, 0, -1], [-1, 0, -1]], [[-2, 0, -2], [-2, 0, -2]]]), new X_("eac8530d1a025291674bf34b206f75700dc8626012d8d33ed398f7aed746dac8",F_.Plane,mu.QuarterPlane,[["Planes", "QuarterPlane"]],G_,[[[-2, 0, 1], [-2, 0, 1]], [[-2, 0, -1], [-1, 0, 0]], [[-2, 0, -2], [-2, 0, -2]]]), new X_("1da4dcad366aa90a5977e1b20c5d79297106ed3b4f664be04b6b3f6370c105b4",F_.Plane,mu.PlaneSlopeUp,[["Planes", "PlaneSlopeUp"]],G_,[[[-2, 0, -2], [1, 0, 1]], [[-2, 1, -2], [1, 1, -2]]]), new X_("3e203219ec0ea114da510b37a4c392b90417af796e2b089da6d996e628c0a323",F_.Plane,mu.PlaneSlopeUpLong,[["Planes", "PlaneSlopeUpLong"]],G_,[[[-2, 0, -4], [1, 0, 1]], [[-2, 1, -5], [1, 1, -4]], [[-2, 1, -6], [1, 2, -6]]]), new X_("053dbf6c03eea5102b67168ccb479d8364233b36c4210aff093928bbb83d859d",F_.Plane,mu.PlaneSlopeDown,[["Planes", "PlaneSlopeDown"]],G_,[[[-2, 0, -2], [1, 0, 1]], [[-2, 1, 0], [1, 1, 1]]]), new X_("d68121a3cb0ee19cab45adb136e0df6145f43ca9ecbde8a417c02a6d4a75a757",F_.Plane,mu.PlaneSlopeDownLong,[["Planes", "PlaneSlopeDownLong"]],G_,[[[-2, 0, -2], [1, 0, 0]], [[-2, 1, -1], [1, 1, 5]], [[-2, 2, 3], [1, 2, 5]]]), new X_("67ec222e8fe770a8d728bb76ff571377c261d2f232134d4cb328c9ab772cf3ca",F_.Plane,mu.PlaneSlope,[["Planes", "PlaneSlope"]],G_,[[[-2, 0, 0], [1, 0, 1]], [[-2, 1, -2], [1, 1, 0]], [[-2, 2, -2], [1, 2, -2]]]), new X_("a52c09d87d37088b68420db07626f274c74f792cb223764624d887a5ed145a2e",F_.Plane,mu.PlaneSlopePillar,[["Planes", "PlaneSlope"], ["Pillar", "PillarTopSlope"]],G_,[[[-2, 0, 0], [1, 0, 1]], [[-2, 1, -2], [1, 1, 0]], [[-2, 2, -2], [1, 2, -2]], [[-1, 0, -1], [0, 0, -1]]]), new X_("57df805433e706ec946d767d7ff0881f163c2e36bb1db00b0e3259954a787dec",F_.Plane,mu.PlaneSlopePillarShort,[["Planes", "PlaneSlope"], ["Pillar", "PillarShortSlope"]],G_,[[[-2, 0, 0], [1, 0, 1]], [[-2, 1, -2], [1, 1, 0]], [[-2, 2, -2], [1, 2, -2]], [[-1, 0, -1], [0, 0, -1]]]), new X_("ba0d6ec33647740bf4c60e542d1758095afa3ef451bdaec76c783dd32116e4cb",F_.Plane,mu.PlaneSlopeVerticalBottom,[["Planes", "PlaneSlopeVertical"]],G_,[[[-2, 0, -1], [1, 0, 1]], [[-2, 1, -1], [1, 1, -1]], [[-2, 1, -2], [1, 3, -2]]]), new X_("78a372de15f3151f901cf7fa7a3983ee6513cf19fa8568f10946e195c5a62515",F_.Plane,mu.PlaneSlopeToVertical,[["Planes", "PlaneSlopeToVertical"]],G_,[[[-2, 0, 0], [1, 0, 1]], [[-2, 1, -2], [1, 1, 0]], [[-2, 2, -2], [1, 3, -2]]]), new X_("5f6d1ece085d450643f1399af53673dcc6bbbf413094d8dd5ee6816d80e1c8ae",F_.Plane,mu.PlaneBridge,[["Planes", "PlaneBridge"]],G_,[[[-1, 0, -2], [0, 0, 1]]]), new X_("32b91fc4cdf95f5b7a490d81058522bae14741601dd44c73cc110121aa1dd6e6",F_.Plane,mu.PlaneBridgeCorner,[["Planes", "PlaneBridgeCorner"]],G_,[[[-1, 0, -1], [0, 0, 1]], [[1, 0, -1], [1, 0, 0]]]), new X_("2db870b1821fb655437bd0527569d5a6843718fa0775682701437432265a1a88",F_.Plane,mu.PlaneBridgeIntersectionT,[["Planes", "PlaneBridgeIntersectionT"]],G_,[[[-1, 0, -1], [0, 0, 1]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]]]), new X_("33aa0e7524b74dcdae4aed89856c09d25248c4cab8f70dcc31b347f0a00fcb52",F_.Plane,mu.PlaneBridgeIntersectionCross,[["Planes", "PlaneBridgeIntersectionCross"]],G_,[[[-1, 0, -1], [0, 0, 1]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]], [[-1, 0, -2], [0, 0, -2]]]), new X_("bd7cc4ab180fc0a6936fef828ae3a91566b3dd621b888fbcc57c9ac11dcb713b",F_.Plane,mu.PlaneWall,[["Planes", "PlaneWall"]],G_,[[[-2, 0, 1], [1, 0, 1]]]), new X_("d92568164028bb2e65799abd9dc6ba66cfe8a28515c09fbe5ac175f5966af66a",F_.Plane,mu.PlaneWallCorner,[["Planes", "PlaneWallCorner"]],G_,[[[-2, 0, 1], [1, 0, 1]], [[1, 0, -2], [1, 0, 0]]]), new X_("792ab5a6f0e2bf8e556575ef12731ec30755855d4394f98eb4ca7ec8b713933c",F_.Plane,mu.PlaneWallInnerCorner,[["Planes", "PlaneWallInnerCorner"]],G_,[[[1, 0, 1], [1, 0, 1]]]), new X_("de0d588c4b2fe6b32d72a7e0e2984285955f805ccb86d3c269f7155401cd6b20",F_.Block,mu.Block,[["Blocks", "Block"]],Q_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("1ce6b585c0e99d71877fefe015ff16336ae62eb0caebeca62dd09d836092d7b6",F_.Block,mu.HalfBlock,[["Blocks", "HalfBlock"]],Q_,[[[-2, 0, 1], [1, 0, 1]], [[-2, 0, 0], [0, 0, 0]], [[-2, 0, -1], [-1, 0, -1]], [[-2, 0, -2], [-2, 0, -2]]]), new X_("0d5f0609c3c98f687d55d3a73313225c1642f6285ddaca3ed536db742c85958d",F_.Block,mu.QuarterBlock,[["Blocks", "QuarterBlock"]],Q_,[[[-2, 0, 1], [-2, 0, 1]], [[-2, 0, -1], [-1, 0, 0]], [[-2, 0, -2], [-2, 0, -2]]]), new X_("18fc1c569c6fc04f95f10174143d19e7a9ea4e387302363f4ae60883c1acd3f0",F_.Block,mu.BlockSlopedDown,[["Blocks", "BlockSlopedDown"]],Q_,[[[-2, 0, -2], [1, 0, -1]], [[-2, 1, -2], [1, 1, 1]]]), new X_("22dd5b2804c88994a4d283cb822f47de3c72f82376e4c9332d39feae85206c0f",F_.Block,mu.BlockSlopedDownInnerCorner,[["Blocks", "BlockSlopedDownInnerCorner"]],Q_,[[[-2, 0, -2], [-1, 0, 1]], [[0, 0, -2], [1, 0, -1]], [[-2, 1, -2], [1, 1, 1]]]), new X_("81a71b4cc6ef8520f20fd738457abc31b04258c97f9862f70190fd2a0ba91382",F_.Block,mu.BlockSlopedDownOuterCorner,[["Blocks", "BlockSlopedDownOuterCorner"]],Q_,[[[-2, 0, -2], [-1, 0, -1]], [[-2, 1, -2], [1, 1, 1]]]), new X_("f4e19d3bc49994a85fecd187b76c21d258e7f30f0506d90bc6f173336e11627d",F_.Block,mu.BlockSlopedUp,[["Blocks", "BlockSlopedUp"]],Q_,[[[-2, 0, -2], [1, 0, 1]], [[-2, 1, -2], [1, 1, -1]]]), new X_("fd9309468e97131bbbd1404fac34a7137cb176327789b955c1aea30267e1cded",F_.Block,mu.BlockSlopedUpInnerCorner,[["Blocks", "BlockSlopedUpInnerCorner"]],Q_,[[[-2, 1, -2], [-1, 1, 1]], [[0, 1, -2], [1, 1, -1]], [[-2, 0, -2], [1, 0, 1]]]), new X_("1321fb07ece1b80b99dc4671b52673ac028fbf43322e9e652ad633ff6afac21b",F_.Block,mu.BlockSlopedUpOuterCorner,[["Blocks", "BlockSlopedUpOuterCorner"]],Q_,[[[-2, 1, -2], [-1, 1, -1]], [[-2, 0, -2], [1, 0, 1]]]), new X_("b97c17388fc38139f2f5a98a36d94831095f79db709dd97748ad2904bc54d689",F_.Block,mu.BlockSlopeDown,[["Blocks", "BlockSlopeDown"]],Q_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("50276826bbfb9fcb11a8519b8dae8a2b1cf82817d5431418d9a376664261be82",F_.Block,mu.BlockSlopeUp,[["Blocks", "BlockSlopeUp"]],Q_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("63fd3032796397f8e25669c1c1d3fc97b8ec0e5fc88bfcb5c00a2a2c2b517888",F_.Block,mu.BlockSlopeDownLong,[["Blocks", "BlockSlopeDownLong"]],Q_,[[[-2, 0, -2], [1, 0, 5]], [[-2, 1, 0], [1, 1, 5]]]), new X_("2d29131222a8d891b4350e6a2f335b114e001cf22e4e2f170dc9b86c4b2fd325",F_.Block,mu.BlockSlopeUpLong,[["Blocks", "BlockSlopeUpLong"]],Q_,[[[-2, 0, -6], [1, 0, 1]], [[-2, 1, -6], [1, 1, -4]]]), new X_("0bbcd96c91b69e6e8005bfae5b64455b0d6510cb1595f3fca7f77c86ddda4560",F_.Block,mu.BlockSlopeVerticalTop,[["Blocks", "BlockSlopeVertical", {
            flipY: !0
        }]],Q_,[[[-2, 3, -2], [1, 3, 1]], [[-2, 2, -2], [1, 2, -1]], [[-2, 0, -2], [1, 1, -2]]]), new X_("e81a123c0be3f8f168fb584d53e8aa038785569bbf2cd1c1cead2272889591e0",F_.Block,mu.BlockSlopeVerticalBottom,[["Blocks", "BlockSlopeVertical"]],Q_,[[[-2, 0, -2], [1, 0, 1]], [[-2, 1, -2], [1, 1, -1]], [[-2, 2, -2], [1, 3, -2]]]), new X_("94e14468f31af7f39b9d7ba188a364089ae81da2bd6a9db2b8f5b1b8cedce741",F_.Block,mu.BlockSlopeToVertical,[["Blocks", "BlockSlopeToVertical"]],Q_,[[[-2, 0, -2], [1, 0, 1]], [[-2, 1, -2], [1, 1, -1]], [[-2, 2, -2], [1, 3, -2]]]), new X_("3a2f05b1c2c2fd976997fa473f1adb3ba14495701dc5a998f8697798384c6946",F_.Block,mu.BlockSlopeVerticalCornerTop,[["Blocks", "BlockSlopeVerticalCornerBottom", {
            flipY: !0
        }]],Q_,[[[-2, 3, -2], [1, 3, 1]], [[-2, 2, -2], [0, 2, 0]], [[1, 2, -2], [1, 2, -1]], [[-2, 2, 1], [-1, 2, 1]], [[-2, 1, -2], [-1, 1, -1]], [[-2, 1, 0], [-1, 1, 0]], [[0, 1, -2], [0, 1, -1]], [[1, 1, -2], [1, 1, -2]], [[-2, 1, 1], [-2, 1, 1]], [[-2, 0, -2], [-1, 0, -1]], [[-2, 0, 0], [-2, 0, 1]], [[0, 0, -2], [1, 0, -2]]]), new X_("3e4fa43e69aa1dbee584e16451a95a16229bba8d638df2bf6f6c9ffb3a9629c9",F_.Block,mu.BlockInnerCorner,[["Blocks", "BlockInnerCorner"]],Q_,[[[-2, 0, 0], [-2, 0, 1]], [[-2, 0, -2], [-1, 0, -1]], [[0, 0, -2], [1, 0, -2]]]), new X_("cc9c95eef56def4cf013e4ac85b8013a2b4f4b4346f1f5dd41fa017de763ef17",F_.Block,mu.BlockSlopeVerticalCornerBottom,[["Blocks", "BlockSlopeVerticalCornerBottom"]],Q_,[[[-2, 0, -2], [1, 0, 1]], [[-2, 1, -2], [0, 1, 0]], [[1, 1, -2], [1, 1, -1]], [[-2, 1, 1], [-1, 1, 1]], [[-2, 2, -2], [-1, 2, -1]], [[-2, 2, 0], [-1, 2, 0]], [[0, 2, -2], [0, 2, -1]], [[1, 2, -2], [1, 2, -2]], [[-2, 2, 1], [-2, 2, 1]], [[-2, 3, -2], [-1, 3, -1]], [[-2, 3, 0], [-2, 3, 1]], [[0, 3, -2], [1, 3, -2]]]), new X_("e4c82c8e512d52269cb6588fa34b06c179340ea40e71f74cbadadc7e8353f5a2",F_.Block,mu.BlockSlopeVerticalInnerCornerTop,[["Blocks", "BlockSlopeVerticalInnerCorner", {
            flipY: !0
        }]],Q_,[[[-2, 3, -2], [0, 3, 1]], [[1, 3, -2], [1, 3, 0]], [[-2, 2, -2], [-2, 2, -1]], [[-1, 2, -2], [-1, 2, -2]], [[-2, 0, -2], [-2, 1, -2]]]), new X_("926fdc6e82ecd709cc535faea6bb8778c6e2e91edb39eb6ae6308076dca2ed18",F_.Block,mu.BlockSlopeVerticalInnerCornerBottom,[["Blocks", "BlockSlopeVerticalInnerCorner"]],Q_,[[[-2, 0, -2], [0, 0, 1]], [[1, 0, -2], [1, 0, 0]], [[-2, 1, -2], [-2, 1, -1]], [[-1, 1, -2], [-1, 1, -2]], [[-2, 2, -2], [-2, 3, -2]]]), new X_("1086515ba3c1d8e5ec76b378f0bdbc77fc5a57fc8eba8972f0d5e611be945235",F_.Block,mu.BlockBridge,[["Blocks", "BlockBridge"]],Q_,[[[-1, 0, -2], [0, 0, 1]]]), new X_("5426ad4ff64af3f1a0f0794ad30cfc20434dfffdf44d93010f5f98671c246ff3",F_.Block,mu.BlockBridgeCorner,[["Blocks", "BlockBridgeCorner"]],Q_,[[[-1, 0, -1], [0, 0, 1]], [[1, 0, -1], [1, 0, 0]]]), new X_("784b9b4459e838e5b8f74f6250769ffa52ec5cc3608abc24c380a2e792c3d338",F_.Block,mu.BlockBridgeIntersectionT,[["Blocks", "BlockBridgeIntersectionT"]],Q_,[[[-1, 0, -1], [0, 0, 1]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]]]), new X_("dfbcbc107a3c12217bfa3b224a5757d08e995705d1c122bb2c2665bbb8447b1c",F_.Block,mu.BlockBridgeIntersectionCross,[["Blocks", "BlockBridgeIntersectionCross"]],Q_,[[[-1, 0, -1], [0, 0, 1]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]], [[-1, 0, -2], [0, 0, -2]]]), new X_("5fe53442e559418b7cc9483315b0ac45b8797f9630d5ecc4c7604dab4be25584",F_.WallTrack,mu.WallTrackTop,[["WallTrack", "WallTrackBottom", {
            flipY: !0
        }]],G_,[[[-2, 3, -1], [1, 3, 1]], [[-2, 2, -1], [1, 2, -1]], [[-2, 0, -2], [1, 2, -2]]]), new X_("010d187fbfbd399bfe880bbea1b548678c239eba0be2913e5cb8a69fbd17adf7",F_.WallTrack,mu.WallTrackMiddle,[["WallTrack", "WallTrackMiddle"]],G_,[[[-2, 0, -2], [1, 0, -2]]]), new X_("33216a4dcb734511a80c5bf70ca6f66de555800426686eae5a2519d4c837090e",F_.WallTrack,mu.WallTrackBottom,[["WallTrack", "WallTrackBottom"]],G_,[[[-2, 0, -1], [1, 0, 1]], [[-2, 1, -1], [1, 1, -1]], [[-2, 1, -2], [1, 3, -2]]]), new X_("1e306d2a6347b68d6e275bf4ccc9c8942e0a633bf625a3bba95fa9f98ecd50ff",F_.WallTrack,mu.WallTrackSlopeToVertical,[["WallTrack", "WallTrackSlopeToVertical"]],G_,[[[-2, 0, 0], [1, 0, 1]], [[-2, 1, -2], [1, 1, 0]], [[-2, 2, -2], [1, 3, -2]]]), new X_("3ed21ddbc756a6644e05f5e1ca78ff8df6d51affc472c2d86e7f23d85911e273",F_.WallTrack,mu.WallTrackTopCorner,[["WallTrack", "WallTrackBottomCorner", {
            flipY: !0
        }]],G_,[[[-2, 0, -1], [-2, 0, 1]], [[-1, 0, -1], [-1, 0, -1]], [[-1, 0, -2], [1, 0, -2]], [[-2, 1, -1], [-2, 1, 1]], [[-1, 1, -1], [-1, 1, 0]], [[0, 1, -1], [0, 1, -1]], [[-1, 1, -2], [1, 1, -2]], [[-2, 2, 0], [-2, 2, 1]], [[-1, 2, 1], [-1, 2, 1]], [[-1, 2, -1], [0, 2, 0]], [[1, 2, -1], [1, 2, -1]], [[0, 2, -2], [1, 2, -2]], [[0, 3, -1], [1, 3, 1]], [[-1, 3, 0], [-1, 3, 1]]]), new X_("4027a2439cc3e42ceda50ff3d427a31e127b25a6457b55edc2d498b474a296a7",F_.WallTrack,mu.WallTrackMiddleCorner,[["WallTrack", "WallTrackMiddleCorner"]],G_,[[[-2, 0, -1], [-2, 0, 1]], [[-1, 0, -1], [-1, 0, -1]], [[-1, 0, -2], [1, 0, -2]]]), new X_("498286e062056a537a482ed3385fe0ac0343b399f29d470641df8f74c0532672",F_.WallTrack,mu.WallTrackBottomCorner,[["WallTrack", "WallTrackBottomCorner"]],G_,[[[-2, 3, -1], [-2, 3, 1]], [[-1, 3, -1], [-1, 3, -1]], [[-1, 3, -2], [1, 3, -2]], [[-2, 2, -1], [-2, 2, 1]], [[-1, 2, -1], [-1, 2, 0]], [[0, 2, -1], [0, 2, -1]], [[-1, 2, -2], [1, 2, -2]], [[-2, 1, 0], [-2, 1, 1]], [[-1, 1, 1], [-1, 1, 1]], [[-1, 1, -1], [0, 1, 0]], [[1, 1, -1], [1, 1, -1]], [[0, 1, -2], [1, 1, -2]], [[0, 0, -1], [1, 0, 1]], [[-1, 0, 0], [-1, 0, 1]]]), new X_("ac09cd62c83af376f23d37dd88273614a2a11cc04a04bff6075fd749bb1ff421",F_.WallTrack,mu.WallTrackTopInnerCorner,[["WallTrack", "WallTrackBottomInnerCorner", {
            flipY: !0
        }]],G_,[[[-2, 3, -1], [1, 3, 1]], [[-1, 3, -2], [1, 3, -2]], [[-2, 2, -2], [-1, 2, -1]], [[-2, 0, -2], [-2, 1, -2]]]), new X_("16c9c8ece47c097f60cfc7f8a2daa2f0e7ad0befb0ebfd185402013fd1ec8e0f",F_.WallTrack,mu.WallTrackInnerCorner,[["WallTrack", "WallTrackInnerCorner"]],G_,[[[-2, 0, -2], [-2, 0, -2]]]), new X_("404e7506c2f7e9302acac39c31a659e7e09e7852786e5f0244f9827727a0bf1e",F_.WallTrack,mu.WallTrackBottomInnerCorner,[["WallTrack", "WallTrackBottomInnerCorner"]],G_,[[[-2, 0, -1], [1, 0, 1]], [[-1, 0, -2], [1, 0, -2]], [[-2, 1, -2], [-1, 1, -1]], [[-2, 2, -2], [-2, 3, -2]]]), new X_("8b7023471502607ef19109760bee3b954ea3b3883c32f3960f75c6651c912ffd",F_.WallTrack,mu.WallTrackFloor,[["WallTrack", "WallTrackFloor"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("59e7f31827236c71db8b16f3f1f259c4c82c87a37e4d57a5a097c0d527d128f3",F_.WallTrack,mu.WallTrackFloorCorner,[["WallTrack", "WallTrackFloorCorner"]],G_,[[[-2, 0, 1], [1, 0, 1]], [[0, 0, 0], [1, 0, 0]], [[1, 0, -2], [1, 0, -1]]]), new X_("d58e3805b550b70940c845a807086865b21a4c36da74ffddedcfe5ce2d08e093",F_.WallTrack,mu.WallTrackFloorPlaneCorner,[["WallTrack", "WallTrackFloorPlaneCorner"]],G_,[[[-2, 0, 1], [1, 0, 1]], [[0, 0, 0], [1, 0, 0]], [[1, 0, -2], [1, 0, -1]]]), new X_("a56b0c1cf964b213a38167cbbac6f33acd403978ad75746eb51bcfd8c6a36148",F_.WallTrack,mu.WallTrackCeiling,[["WallTrack", "WallTrackCeiling"]],G_,[[[-2, 0, -2], [1, 0, 1]]]), new X_("f87b592d02120312e8e93d8a27c02dcda1095ac2f09879c6efafb2ca2b49d127",F_.WallTrack,mu.WallTrackCeilingCorner,[["WallTrack", "WallTrackCeilingCorner"]],G_,[[[-2, 0, 1], [1, 0, 1]], [[0, 0, 0], [1, 0, 0]], [[1, 0, -2], [1, 0, -1]]]), new X_("cfce1fe50f8cd26393eadd475783830e02f0b39bad4c0e00f7aa69614b22decc",F_.WallTrack,mu.WallTrackCeilingPlaneCorner,[["WallTrack", "WallTrackCeilingPlaneCorner"]],G_,[[[-2, 0, 1], [1, 0, 1]], [[0, 0, 0], [1, 0, 0]], [[1, 0, -2], [1, 0, -1]]]), new X_("19656d02145f1a4ba07dbf2f236f865d34c86f823741b247b5d444a36d61c316",F_.Pillar,mu.PillarTop,[["Pillar", "PillarTop"]],G_,[[[-1, 0, -1], [0, 0, 0]]]), new X_("dde596d55ffc00f0f00d361667239d9f71c414f03304fecb6a7d11f6f5e702f1",F_.Pillar,mu.PillarMiddle,[["Pillar", "PillarMiddle"]],G_,[[[-1, 0, -1], [0, 0, 0]]]), new X_("dced5202d9373f9dd81a39530a87a1a7036c93ae71604a4e26c3a191abf3c197",F_.Pillar,mu.PillarBottom,[["Pillar", "PillarBottom"]],G_,[[[-1, 0, -1], [0, 0, 0]]]), new X_("af83eebf50c302880377e4f8c1fb3b2ef96ae193e8d03c17e1fd77c73a847e63",F_.Pillar,mu.PillarShort,[["Pillar", "PillarShort"]],G_,[[[-1, 0, -1], [0, 0, 0]]]), new X_("25b41116fb04b1f3cdd3119f57e0000a6ea8cb12d435718ffd6bb765866c272f",F_.Pillar,mu.PillarBranch1,[["Pillar", "PillarBranch1"]],G_,[[[-1, 0, -2], [0, 0, 0]]]), new X_("05ae39aea4f1ddd818fa57860e688c9cb875544f9b82eafe58a2eb9c19d8d91d",F_.Pillar,mu.PillarBranch1Top,[["Pillar", "PillarBranch1Top"]],G_,[[[-1, 0, -2], [0, 0, 0]]]), new X_("06c29d92e42e0c32050af98d69eecc94ce15adf8ac81dbe53dfb577a83265f4e",F_.Pillar,mu.PillarBranch1Middle,[["Pillar", "PillarBranch1Middle"]],G_,[[[-1, 0, -2], [0, 0, 0]]]), new X_("4a989027e0bd6db264f092bac729d9d450e012a710ea28d199f7ff52efd70fbd",F_.Pillar,mu.PillarBranch1Bottom,[["Pillar", "PillarBranch1Bottom"]],G_,[[[-1, 0, -2], [0, 0, 0]]]), new X_("78b2ff83ad71e7f3d692abc35923fa20c2ae14c01e37d44ec430746ca1bac992",F_.Pillar,mu.PillarBranch2,[["Pillar", "PillarBranch2"]],G_,[[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]]]), new X_("b22c93bc73ec2da9dbff218da1676d7436527ed284e264f37294e48ef1307301",F_.Pillar,mu.PillarBranch2Top,[["Pillar", "PillarBranch2Top"]],G_,[[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]]]), new X_("79a456a8fa3da24bec6c033f6c736fa1c728745f9624ae78ca20b6a4a76afae8",F_.Pillar,mu.PillarBranch2Middle,[["Pillar", "PillarBranch2Middle"]],G_,[[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]]]), new X_("3b81b3f965cbc9fda4fe09e830ba25f1b96ce512d87b0146a1192a6cd0d07335",F_.Pillar,mu.PillarBranch2Bottom,[["Pillar", "PillarBranch2Bottom"]],G_,[[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]]]), new X_("27727678bbcac9d3b0172b165ca5c92b10f4b4584a3a18fef4c542f3e791f26f",F_.Pillar,mu.PillarBranch3,[["Pillar", "PillarBranch3"]],G_,[[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]]]), new X_("50c7ac511d30ab9e065c928b776652f038be7683d948082bbefc419ee049e505",F_.Pillar,mu.PillarBranch3Top,[["Pillar", "PillarBranch3Top"]],G_,[[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]]]), new X_("98b3bfe99e7132825f5aa93122e4e5fdec46eb2877c8eb91fa2648f709527b60",F_.Pillar,mu.PillarBranch3Middle,[["Pillar", "PillarBranch3Middle"]],G_,[[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]]]), new X_("7326bbb558f8bcc28d5875c43b1b8e3646caadb873a14fde3ab517f779aea345",F_.Pillar,mu.PillarBranch3Bottom,[["Pillar", "PillarBranch3Bottom"]],G_,[[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]]]), new X_("0e23c2615cfdb350bb3a700b6169589265a1d1079f61294fb497b8f80191d523",F_.Pillar,mu.PillarBranch4,[["Pillar", "PillarBranch4"]],G_,[[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]], [[-1, 0, 1], [0, 0, 1]]]), new X_("e62b55e111dbcb3faefed0a203eac5b55051a2b11911946660310e3df3588da3",F_.Pillar,mu.PillarBranch4Top,[["Pillar", "PillarBranch4Top"]],G_,[[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]], [[-1, 0, 1], [0, 0, 1]]]), new X_("4e2cfb89c1c591803a1440532a74c3ace37ec7fe78a526c1b57f6679c620df2e",F_.Pillar,mu.PillarBranch4Middle,[["Pillar", "PillarBranch4Middle"]],G_,[[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]], [[-1, 0, 1], [0, 0, 1]]]), new X_("e7807350788e4570c8bb74d4a635639ef731d83e52922fac5bc10f415f73f794",F_.Pillar,mu.PillarBranch4Bottom,[["Pillar", "PillarBranch4Bottom"]],G_,[[[-1, 0, -2], [0, 0, 0]], [[1, 0, -1], [1, 0, 0]], [[-2, 0, -1], [-2, 0, 0]], [[-1, 0, 1], [0, 0, 1]]]), new X_("836bfd12791bfebd99aba70531da4c9bd6e332d16c1e120a8888ea54f59456f9",F_.Pillar,mu.PillarBranch5,[["Pillar", "PillarBranch5"]],G_,[[[-2, 0, -1], [1, 0, 0]]]), new X_("ab85228116faf9ae7b1e6cb4a03530cbec808df3d3c1d7883eb41eb7cfe231d7",F_.Pillar,mu.PillarBranch5Top,[["Pillar", "PillarBranch5Top"]],G_,[[[-2, 0, -1], [1, 0, 0]]]), new X_("db93d5cea4e523fd67a56f8d928084ab6355331a8e5d1899115c1841866006bb",F_.Pillar,mu.PillarBranch5Middle,[["Pillar", "PillarBranch5Middle"]],G_,[[[-2, 0, -1], [1, 0, 0]]]), new X_("dd793efa234159e3a0ff28b064ecb715e6c8bb76e06acfe4bd0d9a2f2b9bba88",F_.Pillar,mu.PillarBranch5Bottom,[["Pillar", "PillarBranch5Bottom"]],G_,[[[-2, 0, -1], [1, 0, 0]]]), new X_("350f7d3591ffd0b2cfb8204d1c6cd0022fd3bda81ea7e950fce3abea7ec89e1a",F_.Sign,mu.SignArrowLeft,[["Signs", "SignArrowRight", {
            flipX: !0
        }]],G_,[[[-2, 0, -2], [1, 0, -2]]]), new X_("22e104e58bba0a609d379578e391ce50ca523c9eee1c3fddebb6d1bb2246a0b9",F_.Sign,mu.SignArrowRight,[["Signs", "SignArrowRight"]],G_,[[[-2, 0, -2], [1, 0, -2]]]), new X_("acba0cfe380e625285b973e09344e61740e77d6f8cac8691ef3e0a0b0878040e",F_.Sign,mu.SignArrowUp,[["Signs", "SignArrowUp"]],G_,[[[-2, 0, -2], [1, 0, -2]]]), new X_("8d0dbea0a26bdf3addd372f5d9a2fdecfd776a48f31218acdeb036129b248ca5",F_.Sign,mu.SignArrowDown,[["Signs", "SignArrowUp", {
            flipY: !0
        }]],G_,[[[-2, 0, -2], [1, 0, -2]]]), new X_("e5e1b1ca69d7b230331171be07876c4b1bdebba557c19b18ab17d91eee2771d5",F_.Sign,mu.SignWarning,[["Signs", "SignWarning"]],G_,[[[-2, 0, -2], [1, 0, -2]]]), new X_("64ed1fba4990a25bc774575ff8835117638d2c3e7c8f41bf0032d219e1083e4c",F_.Sign,mu.SignWrongWay,[["Signs", "SignWrongWay"]],G_,[[[-2, 0, -2], [1, 0, -2]]])]
          , q_ = new Map;
        for (const e of j_) {
            if (q_.has(e.id))
                throw new Error("Duplicate track part id " + e.id.toString());
            q_.set(e.id, e)
        }
        function Y_(e) {
            const t = q_.get(e);
            if (null == t)
                throw new Error("Unknown track part id " + e.toString());
            return t
        }
        const K_ = j_.filter((e => {
            var t;
            return (null === (t = e.detector) || void 0 === t ? void 0 : t.type) == Jh.Checkpoint
        }
        )).map((e => e.id))
          , Z_ = j_.filter((e => null != e.startOffset)).map((e => e.id));
        function J_(e) {
            const t = e.parts;
            if ("object" != typeof t && null !== t && !Array.isArray(t))
                return null;
            const n = new Pv(L_.Summer,new B_)
              , i = Object.keys(t);
            for (const e of i) {
                const i = parseInt(e, 10);
                if (!(i in mu))
                    return null;
                {
                    const e = t[i];
                    if (!Array.isArray(e))
                        return null;
                    if (e.length % 4 != 0)
                        return null;
                    for (let t = 0; t < e.length; t += 4) {
                        const r = parseInt(e[t + 0], 10)
                          , a = parseInt(e[t + 1], 10)
                          , s = parseInt(e[t + 2], 10)
                          , o = parseInt(e[t + 3], 10);
                        if (isNaN(r) || isNaN(a) || isNaN(s) || isNaN(o))
                            return null;
                        if (!(o >= 0 && o <= 3 && Math.abs(r) <= 1e9 && a >= 0 && a <= 1e9 && Math.abs(s) <= 1e9))
                            return null;
                        {
                            if (K_.includes(i))
                                return null;
                            let e = null;
                            Z_.includes(i) && (e = 0),
                            n.addPart(4 * r, a, 4 * s, i, o, Au.YPositive, k_.Default, null, e)
                        }
                    }
                }
            }
            return n
        }
        function $_(e) {
            const t = fh(e);
            if (null == t)
                return null;
            const n = new Pv(L_.Summer,new B_);
            let i = 0;
            for (; i < t.length; ) {
                if (t.length - i < 2)
                    return null;
                const e = t[i + 0] | t[i + 1] << 8;
                if (i += 2,
                !(e in mu))
                    return null;
                if (t.length - i < 4)
                    return null;
                const r = t[i + 0] | t[i + 1] << 8 | t[i + 2] << 16 | t[i + 3] << 24;
                i += 4;
                for (let a = 0; a < r; ++a) {
                    if (t.length - i < 3)
                        return null;
                    const r = (t[i + 0] | t[i + 1] << 8 | t[i + 2] << 16) - Math.pow(2, 23);
                    if (i += 3,
                    t.length - i < 3)
                        return null;
                    const a = t[i + 0] | t[i + 1] << 8 | t[i + 2] << 16;
                    if (i += 3,
                    t.length - i < 3)
                        return null;
                    const s = (t[i + 0] | t[i + 1] << 8 | t[i + 2] << 16) - Math.pow(2, 23);
                    if (i += 3,
                    t.length - i < 1)
                        return null;
                    const o = 3 & t[i + 0];
                    if (i += 1,
                    o < 0 || o > 3)
                        return null;
                    if (K_.includes(e))
                        return null;
                    let l = null;
                    Z_.includes(e) && (l = 0),
                    n.addPart(4 * r, a, 4 * s, e, o, Au.YPositive, k_.Default, null, l)
                }
            }
            return n
        }
        function ev(e) {
            const t = S_(e);
            if (null == t)
                return null;
            const n = new dh.Inflate;
            if (n.push(t, !0),
            n.err)
                return null;
            const i = n.result;
            if (!(i instanceof Uint8Array))
                return null;
            const r = new Pv(L_.Summer,new B_);
            let a = 0;
            for (; a < i.length; ) {
                if (i.length - a < 2)
                    return null;
                const e = i[a + 0] | i[a + 1] << 8;
                if (a += 2,
                !(e in mu))
                    return null;
                if (i.length - a < 4)
                    return null;
                const t = i[a + 0] | i[a + 1] << 8 | i[a + 2] << 16 | i[a + 3] << 24;
                a += 4;
                for (let n = 0; n < t; ++n) {
                    if (i.length - a < 3)
                        return null;
                    const t = (i[a + 0] | i[a + 1] << 8 | i[a + 2] << 16) - Math.pow(2, 23);
                    if (a += 3,
                    i.length - a < 3)
                        return null;
                    const n = i[a + 0] | i[a + 1] << 8 | i[a + 2] << 16;
                    if (a += 3,
                    i.length - a < 3)
                        return null;
                    const s = (i[a + 0] | i[a + 1] << 8 | i[a + 2] << 16) - Math.pow(2, 23);
                    if (a += 3,
                    i.length - a < 1)
                        return null;
                    const o = i[a + 0];
                    if (a += 1,
                    o < 0 || o > 3)
                        return null;
                    let l = null;
                    if (K_.includes(e)) {
                        if (i.length - a < 2)
                            return null;
                        l = i[a + 0] | i[a + 1] << 8,
                        a += 2
                    }
                    let c = null;
                    Z_.includes(e) && (c = 0),
                    r.addPart(4 * t, n, 4 * s, e, o, Au.YPositive, k_.Default, l, c)
                }
            }
            return r
        }
        function tv(e) {
            const t = S_(e);
            if (null == t)
                return null;
            const n = new dh.Inflate;
            if (n.push(t, !0),
            n.err)
                return null;
            const i = n.result;
            if (!(i instanceof Uint8Array))
                return null;
            const r = new Pv(L_.Summer,new B_);
            let a = 0;
            for (; a < i.length; ) {
                if (i.length - a < 2)
                    return null;
                let e = i[a + 0] | i[a + 1] << 8;
                a += 2;
                let t = k_.Default;
                if (e >= 134 && e <= 178)
                    switch (e) {
                    case 134:
                        e = mu.Block,
                        t = k_.Custom1;
                        break;
                    case 135:
                        e = mu.HalfBlock,
                        t = k_.Custom1;
                        break;
                    case 136:
                        e = mu.QuarterBlock,
                        t = k_.Custom1;
                        break;
                    case 137:
                        e = mu.BlockSlopedDown,
                        t = k_.Custom1;
                        break;
                    case 138:
                        e = mu.BlockSlopedDownInnerCorner,
                        t = k_.Custom1;
                        break;
                    case 139:
                        e = mu.BlockSlopedDownOuterCorner,
                        t = k_.Custom1;
                        break;
                    case 140:
                        e = mu.BlockSlopedUp,
                        t = k_.Custom1;
                        break;
                    case 141:
                        e = mu.BlockSlopedUpInnerCorner,
                        t = k_.Custom1;
                        break;
                    case 142:
                        e = mu.BlockSlopedUpOuterCorner,
                        t = k_.Custom1;
                        break;
                    case 143:
                        e = mu.BlockSlopeDown,
                        t = k_.Custom1;
                        break;
                    case 144:
                        e = mu.BlockSlopeUp,
                        t = k_.Custom1;
                        break;
                    case 145:
                        e = mu.BlockBridge,
                        t = k_.Custom1;
                        break;
                    case 146:
                        e = mu.BlockBridgeCorner,
                        t = k_.Custom1;
                        break;
                    case 147:
                        e = mu.BlockBridgeIntersectionT,
                        t = k_.Custom1;
                        break;
                    case 148:
                        e = mu.BlockBridgeIntersectionCross,
                        t = k_.Custom1;
                        break;
                    case 149:
                        e = mu.Block,
                        t = k_.Custom6;
                        break;
                    case 150:
                        e = mu.HalfBlock,
                        t = k_.Custom6;
                        break;
                    case 151:
                        e = mu.QuarterBlock,
                        t = k_.Custom6;
                        break;
                    case 152:
                        e = mu.BlockSlopedDown,
                        t = k_.Custom6;
                        break;
                    case 153:
                        e = mu.BlockSlopedDownInnerCorner,
                        t = k_.Custom6;
                        break;
                    case 154:
                        e = mu.BlockSlopedDownOuterCorner,
                        t = k_.Custom6;
                        break;
                    case 155:
                        e = mu.BlockSlopedUp,
                        t = k_.Custom6;
                        break;
                    case 156:
                        e = mu.BlockSlopedUpInnerCorner,
                        t = k_.Custom6;
                        break;
                    case 157:
                        e = mu.BlockSlopedUpOuterCorner,
                        t = k_.Custom6;
                        break;
                    case 158:
                        e = mu.BlockSlopeDown,
                        t = k_.Custom6;
                        break;
                    case 159:
                        e = mu.BlockSlopeUp,
                        t = k_.Custom6;
                        break;
                    case 160:
                        e = mu.BlockBridge,
                        t = k_.Custom6;
                        break;
                    case 161:
                        e = mu.BlockBridgeCorner,
                        t = k_.Custom6;
                        break;
                    case 162:
                        e = mu.BlockBridgeIntersectionT,
                        t = k_.Custom6;
                        break;
                    case 163:
                        e = mu.BlockBridgeIntersectionCross,
                        t = k_.Custom6;
                        break;
                    case 164:
                        e = mu.Block,
                        t = k_.Custom0;
                        break;
                    case 165:
                        e = mu.HalfBlock,
                        t = k_.Custom0;
                        break;
                    case 166:
                        e = mu.QuarterBlock,
                        t = k_.Custom0;
                        break;
                    case 167:
                        e = mu.BlockSlopedDown,
                        t = k_.Custom0;
                        break;
                    case 168:
                        e = mu.BlockSlopedDownInnerCorner,
                        t = k_.Custom0;
                        break;
                    case 169:
                        e = mu.BlockSlopedDownOuterCorner,
                        t = k_.Custom0;
                        break;
                    case 170:
                        e = mu.BlockSlopedUp,
                        t = k_.Custom0;
                        break;
                    case 171:
                        e = mu.BlockSlopedUpInnerCorner,
                        t = k_.Custom0;
                        break;
                    case 172:
                        e = mu.BlockSlopedUpOuterCorner,
                        t = k_.Custom0;
                        break;
                    case 173:
                        e = mu.BlockSlopeDown,
                        t = k_.Custom0;
                        break;
                    case 174:
                        e = mu.BlockSlopeUp,
                        t = k_.Custom0;
                        break;
                    case 175:
                        e = mu.BlockBridge,
                        t = k_.Custom0;
                        break;
                    case 176:
                        e = mu.BlockBridgeCorner,
                        t = k_.Custom0;
                        break;
                    case 177:
                        e = mu.BlockBridgeIntersectionT,
                        t = k_.Custom0;
                        break;
                    case 178:
                        e = mu.BlockBridgeIntersectionCross,
                        t = k_.Custom0
                    }
                let n = null
                  , s = {
                    x: 0,
                    y: 0,
                    z: 0
                };
                if (79 == e)
                    n = mu.WallTrackFloorPlaneCorner;
                else if (81 == e)
                    n = mu.WallTrackCeilingPlaneCorner,
                    s = {
                        x: 0,
                        y: 3,
                        z: 0
                    };
                else if (e >= 87 && e <= 98)
                    switch (e) {
                    case 87:
                        e = mu.Slope,
                        n = mu.BlockSlopedUp;
                        break;
                    case 88:
                        e = mu.SlopeUp,
                        n = mu.BlockSlopeUp;
                        break;
                    case 89:
                        e = mu.SlopeDown,
                        n = mu.BlockSlopeDown;
                        break;
                    case 90:
                        e = mu.SlopeUpLeftWide,
                        n = mu.BlockSlopeUp;
                        break;
                    case 91:
                        e = mu.SlopeUpRightWide,
                        n = mu.BlockSlopeUp;
                        break;
                    case 92:
                        e = mu.SlopeDownLeftWide,
                        n = mu.BlockSlopeDown;
                        break;
                    case 93:
                        e = mu.SlopeDownRightWide,
                        n = mu.BlockSlopeDown;
                        break;
                    case 94:
                        e = mu.SlopeLeftWide,
                        n = mu.BlockSlopedUp;
                        break;
                    case 95:
                        e = mu.SlopeRightWide,
                        n = mu.BlockSlopedUp;
                        break;
                    case 96:
                        e = mu.PlaneSlopeUp,
                        n = mu.BlockSlopeUp;
                        break;
                    case 97:
                        e = mu.PlaneSlopeDown,
                        n = mu.BlockSlopeDown;
                        break;
                    case 98:
                        e = mu.PlaneSlope,
                        n = mu.BlockSlopedUp;
                        break;
                    default:
                        throw new Error("Invalid track part id")
                    }
                if (!(e in mu))
                    return null;
                if (i.length - a < 4)
                    return null;
                const o = i[a + 0] | i[a + 1] << 8 | i[a + 2] << 16 | i[a + 3] << 24;
                a += 4;
                for (let l = 0; l < o; ++l) {
                    if (i.length - a < 3)
                        return null;
                    const o = (i[a + 0] | i[a + 1] << 8 | i[a + 2] << 16) - Math.pow(2, 23);
                    if (a += 3,
                    i.length - a < 3)
                        return null;
                    const l = i[a + 0] | i[a + 1] << 8 | i[a + 2] << 16;
                    if (a += 3,
                    i.length - a < 3)
                        return null;
                    const c = (i[a + 0] | i[a + 1] << 8 | i[a + 2] << 16) - Math.pow(2, 23);
                    if (a += 3,
                    i.length - a < 1)
                        return null;
                    const h = i[a + 0];
                    if (a += 1,
                    h < 0 || h > 3)
                        return null;
                    let u = null;
                    if (K_.includes(e)) {
                        if (i.length - a < 2)
                            return null;
                        u = i[a + 0] | i[a + 1] << 8,
                        a += 2
                    }
                    let d = null;
                    Z_.includes(e) && (d = 0),
                    null != n && r.addPart(4 * o + s.x, l + s.y, 4 * c + s.z, n, h, Au.YPositive, k_.Default, null, d),
                    r.addPart(4 * o, l, 4 * c, e, h, Au.YPositive, t, u, d)
                }
            }
            return r
        }
        function nv(e, t) {
            let n = e;
            if (t.length - n < 1)
                return null;
            const i = t[n];
            if (n += 1,
            !(i in L_))
                return null;
            if (t.length - n < 1)
                return null;
            const r = t[n];
            if (n += 1,
            !Number.isSafeInteger(r) || r < 0 || r >= 180)
                return null;
            const a = new Pv(i,new B_(r));
            if (t.length - n < 9)
                return null;
            const s = t[n] | t[n + 1] << 8 | t[n + 2] << 16 | t[n + 3] << 24;
            n += 4;
            const o = t[n] | t[n + 1] << 8 | t[n + 2] << 16 | t[n + 3] << 24;
            n += 4;
            const l = t[n] | t[n + 1] << 8 | t[n + 2] << 16 | t[n + 3] << 24;
            n += 4;
            const c = 3 & t[n]
              , h = t[n] >> 2 & 3
              , u = t[n] >> 4 & 3;
            if (n += 1,
            c < 1 || c > 4 || h < 1 || h > 4 || u < 1 || u > 4)
                return null;
            for (; n < t.length; ) {
                if (t.length - n < 1)
                    return null;
                const e = t[n + 0];
                if (n += 1,
                !(e in mu))
                    return null;
                if (t.length - n < 4)
                    return null;
                const i = t[n + 0] | t[n + 1] << 8 | t[n + 2] << 16 | t[n + 3] << 24;
                n += 4;
                for (let r = 0; r < i; ++r) {
                    if (t.length - n < c)
                        return null;
                    let i = 0;
                    for (let e = 0; e < c; ++e)
                        i |= t[n + e] << 8 * e;
                    if (i += s,
                    n += c,
                    t.length - n < h)
                        return null;
                    let r = 0;
                    for (let e = 0; e < h; ++e)
                        r |= t[n + e] << 8 * e;
                    if (r += o,
                    n += h,
                    t.length - n < u)
                        return null;
                    let d = 0;
                    for (let e = 0; e < u; ++e)
                        d |= t[n + e] << 8 * e;
                    if (d += l,
                    n += u,
                    t.length - n < 1)
                        return null;
                    const f = t[n + 0];
                    if (n += 1,
                    f < 0 || f > 3)
                        return null;
                    if (t.length - n < 1)
                        return null;
                    const p = t[n + 0];
                    if (n += 1,
                    !(p in Au))
                        return null;
                    if (t.length - n < 1)
                        return null;
                    const m = t[n + 0];
                    if (n += 1,
                    !(m in k_))
                        return null;
                    let g = null;
                    if (K_.includes(e)) {
                        if (t.length - n < 2)
                            return null;
                        g = t[n + 0] | t[n + 1] << 8,
                        n += 2
                    }
                    let A = null;
                    if (Z_.includes(e)) {
                        if (t.length - n < 4)
                            return null;
                        A = t[n + 0] | t[n + 1] << 8 | t[n + 2] << 16 | t[n + 3] << 24,
                        n += 4
                    }
                    a.addPart(i, r, d, e, f, p, m, g, A)
                }
            }
            return a
        }
        var rv, av, sv, ov, lv, cv, hv, uv, dv, fv, pv, mv, gv, Av, _v, vv = function(e, t, n, i, r) {
            if ("m" === i)
                throw new TypeError("Private method is not writable");
            if ("a" === i && !r)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
            n
        }, wv = function(e, t, n, i) {
            if ("a" === n && !i)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        av = new WeakMap,
        sv = new WeakMap,
        ov = new WeakMap,
        lv = new WeakMap,
        cv = new WeakMap,
        hv = new WeakMap,
        uv = new WeakMap,
        dv = new WeakMap,
        fv = new WeakMap,
        pv = new WeakMap,
        rv = new WeakSet,
        mv = function() {
            for (const e of wv(this, pv, "f"))
                wv(this, av, "f").scene.remove(e);
            wv(this, pv, "f").length = 0
        }
        ,
        gv = function(e, t, n) {
            var i;
            return null !== (i = wv(this, hv, "f").get(e.toString() + "|" + t.toString() + "|" + n.toString())) && void 0 !== i ? i : []
        }
        ,
        Av = function(e) {
            const t = wv(this, cv, "f").indexOf(e);
            if (!(t >= 0))
                throw new Error("Track part missing from parts list");
            wv(this, cv, "f").splice(t, 1);
            e.type.configuration.tiles.rotated(e.rotation, e.rotationAxis).forEach(( (t, n, i) => {
                const r = (e.x + t).toString() + "|" + (e.y + n).toString() + "|" + (e.z + i).toString()
                  , a = wv(this, hv, "f").get(r);
                if (null == a)
                    throw new Error("Track part section missing");
                {
                    const t = a.indexOf(e);
                    if (!(t >= 0))
                        throw new Error("Track part missing from parts by position map");
                    a.splice(t, 1),
                    0 == a.length && wv(this, hv, "f").delete(r)
                }
            }
            ));
            const n = wv(this, uv, "f").get(e.type.configuration.id);
            if (null == n)
                throw new Error("Track part type is missing from parts by type map");
            for (let t = 0; t < n.length; ++t) {
                if (n[t] == e) {
                    n.splice(t, 1);
                    break
                }
                if (t == n.length - 1)
                    throw new Error("Track part is missing from parts by type map")
            }
        }
        ,
        _v = function() {
            let e = 1 / 0
              , t = 1 / 0
              , n = -1 / 0
              , i = -1 / 0;
            for (const r of wv(this, cv, "f"))
                e = Math.min(r.x, e),
                t = Math.min(r.z, t),
                n = Math.max(r.x, n),
                i = Math.max(r.z, i);
            Number.isFinite(e) && Number.isFinite(t) && Number.isFinite(n) && Number.isFinite(i) ? vv(this, dv, {
                min: new Et(e,t),
                max: new Et(n,i)
            }, "f") : vv(this, dv, {
                min: new Et,
                max: new Et
            }, "f")
        };
        var Ev, Sv, Mv, Tv, Cv, Iv = function(e, t, n, i, r) {
            if ("m" === i)
                throw new TypeError("Private method is not writable");
            if ("a" === i && !r)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
            n
        }, Rv = function(e, t, n, i) {
            if ("a" === n && !i)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        Sv = new WeakMap,
        Mv = new WeakMap,
        Ev = new WeakSet,
        Tv = function() {
            let e = -1 / 0
              , t = null;
            for (const [n,i] of Rv(this, Mv, "f")) {
                const r = Y_(n).startOffset;
                if (i.length > 0 && null != r)
                    for (const n of i) {
                        if (null == n.startOrder)
                            throw new Error("Start part has no start order");
                        n.startOrder >= e && (e = n.startOrder,
                        t = {
                            part: n,
                            startOffset: r
                        })
                    }
            }
            return null != t ? {
                x: t.part.x,
                y: t.part.y,
                z: t.part.z,
                rotation: t.part.rotation,
                rotationAxis: t.part.rotationAxis,
                startOffset: t.startOffset.clone()
            } : null
        }
        ,
        Cv = function() {
            const e = [];
            e.push(this.environment),
            e.push(Rv(this, Sv, "f").representation);
            let t = 1 / 0
              , n = 1 / 0
              , i = 1 / 0
              , r = -1 / 0
              , a = -1 / 0
              , s = -1 / 0;
            for (const [,e] of Rv(this, Mv, "f"))
                for (const o of e)
                    t = Math.min(o.x, t),
                    n = Math.min(o.y, n),
                    i = Math.min(o.z, i),
                    r = Math.max(o.x, r),
                    a = Math.max(o.y, a),
                    s = Math.max(o.z, s);
            Number.isFinite(t) && Number.isFinite(n) && Number.isFinite(i) && Number.isFinite(r) && Number.isFinite(a) && Number.isFinite(s) || (t = 0,
            n = 0,
            i = 0,
            r = 0,
            a = 0,
            s = 0);
            const o = r - t + 1
              , l = a - n + 1
              , c = s - i + 1
              , h = Math.max(1, Math.min(4, Math.ceil(Math.log2(o + 1) / 8)))
              , u = Math.max(1, Math.min(4, Math.ceil(Math.log2(l + 1) / 8)))
              , d = Math.max(1, Math.min(4, Math.ceil(Math.log2(c + 1) / 8)));
            e.push(255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255, 255 & n, n >>> 8 & 255, n >>> 16 & 255, n >>> 24 & 255, 255 & i, i >>> 8 & 255, i >>> 16 & 255, i >>> 24 & 255, 255 & (h | u << 2 | d << 4));
            for (const [r,a] of Rv(this, Mv, "f")) {
                if (r < 0 || r > 255)
                    throw new Error("Type id is out of range");
                const s = a.length;
                e.push(255 & r, 255 & s, s >>> 8 & 255, s >>> 16 & 255, s >>> 24 & 255);
                for (const s of a) {
                    const a = s.x - t
                      , o = s.y - n
                      , l = s.z - i;
                    if (1 == h ? e.push(255 & a) : 2 == h ? e.push(255 & a, a >>> 8 & 255) : 3 == h ? e.push(255 & a, a >>> 8 & 255, a >>> 16 & 255) : 4 == h && e.push(255 & a, a >>> 8 & 255, a >>> 16 & 255, a >>> 24 & 255),
                    1 == u ? e.push(255 & o) : 2 == u ? e.push(255 & o, o >>> 8 & 255) : 3 == u ? e.push(255 & o, o >>> 8 & 255, o >>> 16 & 255) : 4 == u && e.push(255 & o, o >>> 8 & 255, o >>> 16 & 255, o >>> 24 & 255),
                    1 == d ? e.push(255 & l) : 2 == d ? e.push(255 & l, l >>> 8 & 255) : 3 == d ? e.push(255 & l, l >>> 8 & 255, l >>> 16 & 255) : 4 == d && e.push(255 & l, l >>> 8 & 255, l >>> 16 & 255, l >>> 24 & 255),
                    e.push(3 & s.rotation, 7 & s.rotationAxis, 255 & s.color),
                    K_.includes(r)) {
                        if (null == s.checkpointOrder)
                            throw new Error("Checkpoint has no checkpoint order");
                        e.push(255 & s.checkpointOrder, s.checkpointOrder >>> 8 & 255)
                    }
                    if (Z_.includes(r)) {
                        if (null == s.startOrder)
                            throw new Error("Start has no start order");
                        e.push(255 & s.startOrder, s.startOrder >>> 8 & 255, s.startOrder >>> 16 & 255, s.startOrder >>> 24 & 255)
                    }
                }
            }
            return new Uint8Array(e)
        }
        ;
        const Pv = class {
            constructor(e, t) {
                Ev.add(this),
                Sv.set(this, void 0),
                Mv.set(this, new Map),
                this.environment = e,
                Iv(this, Sv, t.clone(), "f")
            }
            get sunDirection() {
                return Rv(this, Sv, "f").clone()
            }
            set sunDirection(e) {
                Iv(this, Sv, e.clone(), "f")
            }
            addPart(e, t, n, i, r, a, s, o, l) {
                const c = {
                    x: e,
                    y: t,
                    z: n,
                    rotation: r,
                    rotationAxis: a,
                    color: s,
                    checkpointOrder: o,
                    startOrder: l
                }
                  , h = Rv(this, Mv, "f").get(i);
                null != h ? h.push(c) : Rv(this, Mv, "f").set(i, [c])
            }
            forEachPart(e) {
                for (const [t,n] of Rv(this, Mv, "f"))
                    for (const i of n)
                        e(i.x, i.y, i.z, t, i.rotation, i.rotationAxis, i.color, i.checkpointOrder, i.startOrder)
            }
            getId() {
                return (0,
                y_.sha256)(Rv(this, Ev, "m", Cv).call(this))
            }
            getBounds() {
                let e = 1 / 0
                  , t = 1 / 0
                  , n = -1 / 0
                  , i = -1 / 0;
                return this.forEachPart(( (r, a, s) => {
                    e = Math.min(r, e),
                    t = Math.min(s, t),
                    n = Math.max(r, n),
                    i = Math.max(s, i)
                }
                )),
                Number.isFinite(e) && Number.isFinite(t) && Number.isFinite(n) && Number.isFinite(i) ? {
                    min: new Et(e,t),
                    max: new Et(n,i)
                } : {
                    min: new Et,
                    max: new Et
                }
            }
            hasStartingPoint() {
                return null != Rv(this, Ev, "m", Tv).call(this)
            }
            getStartTransform() {
                const e = Rv(this, Ev, "m", Tv).call(this);
                if (null != e) {
                    const t = eu(e.rotation, e.rotationAxis).multiply((new Kt).setFromEuler(new Fn(0,Math.PI,0)))
                      , n = e.startOffset;
                    return n.applyQuaternion(t),
                    {
                        position: new Zt(e.x * 5 + n.x,e.y * 5 + n.y,e.z * 5 + n.z),
                        quaternion: t
                    }
                }
                return null
            }
            toSaveString() {
                const e = Rv(this, Ev, "m", Cv).call(this)
                  , t = new dh.Deflate({
                    level: 9,
                    windowBits: 9,
                    memLevel: 9
                });
                t.push(e, !0);
                const n = E_(t.result)
                  , i = new dh.Deflate({
                    level: 9,
                    windowBits: 15,
                    memLevel: 9
                });
                return i.push(n, !0),
                E_(i.result)
            }
            toExportString(e) {
                const t = (new TextEncoder).encode(e.name);
                let n, i;
                null != e.author ? (i = (new TextEncoder).encode(e.author),
                n = i.length) : (i = null,
                n = 0);
                const r = new Uint8Array(1 + t.length + 1 + n);
                r[0] = t.length,
                r.set(t, 1),
                r[1 + t.length] = n,
                null != i && r.set(i, 1 + t.length + 1);
                const a = Rv(this, Ev, "m", Cv).call(this)
                  , s = new dh.Deflate({
                    level: 9,
                    windowBits: 9,
                    memLevel: 9
                });
                s.push(r, !1),
                s.push(a, !0);
                const o = E_(s.result)
                  , l = new dh.Deflate({
                    level: 9,
                    windowBits: 15,
                    memLevel: 9
                });
                return l.push(o, !0),
                "PolyTrack1" + E_(l.result)
            }
            static fromSaveString(e) {
                const t = function(e) {
                    const t = S_(e);
                    if (null == t)
                        return null;
                    const n = new dh.Inflate({
                        to: "string"
                    });
                    if (n.push(t, !0),
                    n.err)
                        return null;
                    const i = n.result;
                    if ("string" != typeof i)
                        return null;
                    const r = S_(i);
                    if (null == r)
                        return null;
                    const a = new dh.Inflate;
                    if (a.push(r, !0),
                    a.err)
                        return null;
                    const s = a.result;
                    return s instanceof Uint8Array ? nv(0, s) : null
                }(e);
                if (null != t)
                    return t;
                const n = tv(e);
                if (null != n)
                    return n;
                const i = ev(e);
                if (null != i)
                    return i;
                const r = $_(e);
                if (null != r)
                    return r;
                const a = J_(e);
                return null != a ? a : null
            }
            static fromExportString(e) {
                const t = e.replace(/\s+/g, "")
                  , n = function(e) {
                    const t = "PolyTrack1";
                    if (!e.startsWith(t))
                        return null;
                    const n = S_(e.substring(10));
                    if (null == n)
                        return null;
                    const i = new dh.Inflate({
                        to: "string"
                    });
                    if (i.push(n, !0),
                    i.err)
                        return null;
                    const r = i.result;
                    if ("string" != typeof r)
                        return null;
                    const a = S_(r);
                    if (null == a)
                        return null;
                    const s = new dh.Inflate;
                    if (s.push(a, !0),
                    s.err)
                        return null;
                    const o = s.result;
                    if (!(o instanceof Uint8Array))
                        return null;
                    const l = o[0];
                    if (o.length < 1 + l)
                        return null;
                    const c = new TextDecoder("utf-8").decode(o.subarray(1, 1 + l))
                      , h = o[1 + l];
                    if (o.length < 1 + l + 1 + h)
                        return null;
                    let u;
                    u = h > 0 ? new TextDecoder("utf-8").decode(o.subarray(1 + l + 1, 1 + l + 1 + h)) : null;
                    const d = nv(1 + l + 1 + h, o);
                    return null == d ? null : {
                        trackMetadata: {
                            name: c,
                            author: u
                        },
                        trackData: d
                    }
                }(t);
                if (null != n)
                    return n;
                const i = function(e) {
                    if (!e.startsWith("v3"))
                        return null;
                    const t = S_(e.substring(2, 4));
                    if (null == t)
                        return null;
                    if (1 != t.length)
                        return null;
                    const n = t[0]
                      , i = S_(e.substring(4, 4 + n));
                    if (null == i)
                        return null;
                    let r;
                    try {
                        r = new TextDecoder("utf-8").decode(i)
                    } catch (e) {
                        return null
                    }
                    const a = tv(e.substring(4 + n));
                    return null == a ? null : {
                        trackMetadata: {
                            name: r,
                            author: null
                        },
                        trackData: a
                    }
                }(t);
                if (null != i)
                    return i;
                const r = function(e) {
                    if (!e.startsWith("v2"))
                        return null;
                    const t = S_(e.substring(2, 4));
                    if (null == t)
                        return null;
                    if (1 != t.length)
                        return null;
                    const n = t[0]
                      , i = Math.ceil(n / 3 * 4)
                      , r = S_(e.substring(4, 4 + i));
                    if (null == r)
                        return null;
                    let a;
                    try {
                        a = new TextDecoder("utf-8").decode(r)
                    } catch (e) {
                        return null
                    }
                    const s = ev(e.substring(4 + i));
                    return null == s ? null : {
                        trackMetadata: {
                            name: a,
                            author: null
                        },
                        trackData: s
                    }
                }(t);
                if (null != r)
                    return r;
                const a = function(e) {
                    if (!e.startsWith("v1n"))
                        return null;
                    const t = fh(e.substring(3, 5));
                    if (null == t)
                        return null;
                    if (1 != t.length)
                        return null;
                    const n = t[0]
                      , i = e.substring(5, 5 + n);
                    let r;
                    try {
                        r = decodeURIComponent(i)
                    } catch (e) {
                        return console.error(e),
                        null
                    }
                    const a = $_(e.substring(5 + n));
                    return null == a ? null : {
                        trackMetadata: {
                            name: r,
                            author: null
                        },
                        trackData: a
                    }
                }(t);
                if (null != a)
                    return a;
                const s = function(e) {
                    let t, n;
                    try {
                        t = JSON.parse(e)
                    } catch (e) {
                        return console.error(e),
                        null
                    }
                    if ("string" != typeof t.name)
                        return null;
                    if ("string" != typeof t.track)
                        return null;
                    try {
                        n = JSON.parse(t.track)
                    } catch (e) {
                        return console.error(e),
                        null
                    }
                    const i = J_(n);
                    return null == i ? null : {
                        trackMetadata: {
                            name: t.name,
                            author: null
                        },
                        trackData: i
                    }
                }(e);
                return null != s ? s : null
            }
            createThumbnail() {
                let e = 1 / 0
                  , t = 1 / 0
                  , n = -1 / 0
                  , i = -1 / 0;
                this.forEachPart(( (r, a, s, o, l, c) => {
                    Y_(o).tiles.rotated(l, c).forEach(( (a, o, l) => {
                        e = Math.min(e, Math.floor((r + a - 2) / 4)),
                        t = Math.min(t, Math.floor((s + l - 2) / 4)),
                        n = Math.max(n, Math.floor((r + a - 2) / 4)),
                        i = Math.max(i, Math.floor((s + l - 2) / 4))
                    }
                    ))
                }
                )),
                Number.isFinite(e) && Number.isFinite(t) && Number.isFinite(n) && Number.isFinite(i) || (e = 0,
                t = 0,
                n = 0,
                i = 0);
                const r = 10
                  , a = n - e + 1;
                a <= r && (n += Math.ceil((r - a) / 2),
                e -= Math.ceil((r - a) / 2));
                const s = i - t + 1;
                s <= r && (i += Math.ceil((r - s) / 2),
                t -= Math.ceil((r - s) / 2));
                const o = document.createElement("canvas");
                o.width = Math.min(1024, n - e + 1),
                o.height = Math.min(1024, i - t + 1);
                const l = o.getContext("2d");
                if (null == l)
                    throw new Error("Failed to get canvas context");
                const c = l.createImageData(o.width, o.height)
                  , h = []
                  , u = []
                  , d = [];
                let f, p, m;
                switch (this.environment) {
                case L_.Summer:
                    f = 255,
                    p = 255,
                    m = 255;
                    break;
                case L_.Winter:
                    f = 190,
                    p = 216,
                    m = 247;
                    break;
                case L_.Desert:
                    f = 237,
                    p = 226,
                    m = 175
                }
                this.forEachPart(( (n, i, r, a, s, l) => {
                    const g = Y_(a);
                    g.tiles.rotated(s, l).forEach(( (i, a, s) => {
                        const l = Math.floor((n + i - 2) / 4) - e
                          , A = Math.floor((r + s - 2) / 4) - t
                          , _ = 4 * (l + A * o.width);
                        c.data[_ + 0] = f,
                        c.data[_ + 1] = p,
                        c.data[_ + 2] = m,
                        c.data[_ + 3] = 255,
                        null != g.startOffset ? u.push([l, A]) : null != g.detector && g.detector.type == Jh.Checkpoint ? h.push([l, A]) : null != g.detector && g.detector.type == Jh.Finish && d.push([l, A])
                    }
                    ))
                }
                ));
                for (const [e,t] of h)
                    c.data[4 * (e + t * o.width) + 0] = 226,
                    c.data[4 * (e + t * o.width) + 1] = 192,
                    c.data[4 * (e + t * o.width) + 2] = 38,
                    c.data[4 * (e + t * o.width) + 3] = 255;
                for (const [e,t] of u)
                    c.data[4 * (e + t * o.width) + 0] = 51,
                    c.data[4 * (e + t * o.width) + 1] = 140,
                    c.data[4 * (e + t * o.width) + 2] = 224,
                    c.data[4 * (e + t * o.width) + 3] = 255;
                for (const [e,t] of d)
                    c.data[4 * (e + t * o.width) + 0] = 209,
                    c.data[4 * (e + t * o.width) + 1] = 41,
                    c.data[4 * (e + t * o.width) + 2] = 41,
                    c.data[4 * (e + t * o.width) + 3] = 255;
                return l.putImageData(c, 0, 0),
                o
            }
        }
        ;
        const Bv = class {
            constructor() {
                this.up = !1,
                this.right = !1,
                this.down = !1,
                this.left = !1,
                this.reset = !1
            }
            dispose() {}
            getControls() {
                return {
                    up: this.up,
                    right: this.right,
                    down: this.down,
                    left: this.left,
                    reset: this.reset
                }
            }
        }
        ;
        importScripts("lib/ammo.wasm.js");
        const Dv = [];
        onmessage = e => {
            Dv.push(e)
        }
        ,
        Ammo().then((function(e) {
            let t = new p_([]);
            const n = [];
            function i(e) {
                switch (e.data.messageType) {
                case g_.Init:
                    {
                        const n = e.data.isRealtime;
                        t = new p_(e.data.trackParts),
                        function(e) {
                            e ? l() : setInterval(c)
                        }(n);
                        break
                    }
                case g_.Verify:
                    !function(e) {
                        const n = Pv.fromSaveString(e.data.trackData);
                        if (null == n)
                            throw new Error("Failed to load track");
                        const i = Ch.deserialize(e.data.carRecording);
                        if (null == i)
                            throw new Error("Failed to deserialize recording");
                        const r = n.getStartTransform();
                        if (null == r)
                            throw new Error("Track has no starting point");
                        const a = e.data.carId
                          , s = new c_(e.data.mountainVertices,new Zt(e.data.mountainOffset.x,e.data.mountainOffset.y,e.data.mountainOffset.z),t,n,e.data.carCollisionShapeVertices,e.data.carMassOffset,new w_(i),r);
                        s.start();
                        const o = new Kh(e.data.targetFrames);
                        for (; !s.hasFinished() && s.getTime().lessOrEqual(o); )
                            s.step();
                        const l = s.hasFinished() && s.getTime().equals(o);
                        postMessage({
                            messageType: g_.VerifyResult,
                            carId: a,
                            result: l
                        }),
                        s.dispose()
                    }(e);
                    break;
                case g_.TestDeterminism:
                    postMessage({
                        messageType: g_.DeterminismResult,
                        isDeterminstic: r()
                    });
                    break;
                case g_.CreateCar:
                    !function(e) {
                        const i = Pv.fromSaveString(e.data.trackData);
                        if (null == i)
                            throw new Error("Failed to load track");
                        let r, a = null;
                        const s = e.data.carRecording;
                        if (null == s)
                            r = a = new Bv;
                        else {
                            const e = Ch.deserialize(s);
                            if (null == e)
                                throw new Error("Failed to deserialize recording");
                            r = new w_(e)
                        }
                        const o = i.getStartTransform();
                        if (null == o)
                            throw new Error("Track has no starting point");
                        const l = e.data.carId
                          , c = new c_(e.data.mountainVertices,new Zt(e.data.mountainOffset.x,e.data.mountainOffset.y,e.data.mountainOffset.z),t,i,e.data.carCollisionShapeVertices,e.data.carMassOffset,r,o);
                        n.push({
                            id: l,
                            model: c,
                            controls: a,
                            targetSimulationTime: null,
                            isPaused: !1
                        })
                    }(e);
                    break;
                case g_.DeleteCar:
                    !function(e) {
                        var t;
                        const i = e.data.carId;
                        for (let e = 0; e < n.length; e++) {
                            const r = n[e];
                            if (r.id == i) {
                                null === (t = r.controls) || void 0 === t || t.dispose(),
                                r.model.dispose(),
                                n.splice(e, 1);
                                break
                            }
                        }
                    }(e);
                    break;
                case g_.StartCar:
                    !function(e) {
                        const t = e.data.carId;
                        for (const i of n)
                            if (i.id == t) {
                                i.model.start();
                                const t = e.data.targetSimulationTimeFrames;
                                i.targetSimulationTime = null != t ? new Kh(t) : null;
                                break
                            }
                    }(e);
                    break;
                case g_.ControlCar:
                    !function(e) {
                        const t = e.data.carId;
                        for (const i of n)
                            if (i.id == t) {
                                if (null == i.controls)
                                    throw new Error("Tried to control uncontrollable car");
                                i.controls.up = e.data.up,
                                i.controls.right = e.data.right,
                                i.controls.down = e.data.down,
                                i.controls.left = e.data.left,
                                i.controls.reset = e.data.reset;
                                break
                            }
                    }(e);
                    break;
                case g_.BombCar:
                    !function(e) {
                        const t = e.data.carId;
                        for (const i of n)
                            if (i.id == t) {
                                i.model.bombExploded(e.data.bombPosition, e.data.amplification)
                                break
                            }
                    }(e);
                    break;
                case g_.PauseCar:
                    !function(e) {
                        const t = e.data.carId;
                        for (const i of n)
                            if (i.id == t) {
                                i.isPaused = e.data.isPaused;
                                break
                            }
                    }(e)
                }
            }
            for (const e of Dv)
                i(e);
            function r() {
                if (3.141592653589793 != Math.PI)
                    return console.error("Determinism check failed: Math.PI"),
                    !1;
                if (1.4142135623730951 != Math.SQRT2)
                    return console.error("Determinism check failed: Math.SQRT2"),
                    !1;
                if (.8325082155867481 != Math.cos(.587123751237))
                    return console.error("Determinism check failed: Math.cos"),
                    !1;
                if (.530868917654027 != Math.sin(2.581961285))
                    return console.error("Determinism check failed: Math.sin"),
                    !1;
                if (3678159.3874182813 != Math.pow(123, Math.PI))
                    return console.error("Determinism check failed: Math.pow"),
                    !1;
                if (123 * Math.PI != 386.41589639154455)
                    return console.error("Determinism check failed: Multiply"),
                    !1;
                if (123 / Math.PI != 39.152116000606256)
                    return console.error("Determinism check failed: Division"),
                    !1;
                const t = new Zt(-.6827400326728821,.11212741583585739,2.6956899166107178)
                  , n = new Kt(-.615668535232544,.03904851898550987,.7859793305397034,.04079177975654602)
                  , i = new Qh;
                i.createGroundPlane(),
                i.activePhysicsAt(new Zt(0,0,0));
                const r = new e.btTransform;
                r.setIdentity();
                const a = new e.btDefaultMotionState(r);
                e.destroy(r);
                const s = new e.btVector3(0,0,0)
                  , o = new e.btVector3(.1,.1,.1)
                  , l = new e.btBoxShape(o);
                l.calculateLocalInertia(400, s),
                e.destroy(o);
                const c = new e.btRigidBodyConstructionInfo(400,a,l,s)
                  , h = new e.btRigidBody(c);
                e.destroy(s),
                e.destroy(c),
                h.setActivationState(4),
                i.world.addRigidBody(h);
                const u = new e.btVehicleTuning
                  , d = new e.btDefaultVehicleRaycaster(i.world)
                  , f = new e.btRaycastVehicle(u,h,d);
                f.setCoordinateSystem(0, 1, 2),
                i.world.addAction(f);
                const p = new e.btVector3(0,-1,0)
                  , m = new e.btVector3(-1,0,0);
                for (const t of ["WheelFL", "WheelFR", "WheelBL", "WheelBR"]) {
                    let n;
                    if ("WheelFL" == t)
                        n = new e.btVector3(.627909,.27,1.3478);
                    else if ("WheelFR" == t)
                        n = new e.btVector3(-.627909,.27,1.3478);
                    else if ("WheelBL" == t)
                        n = new e.btVector3(.720832,.27,-1.52686);
                    else {
                        if ("WheelBR" != t)
                            throw new Error("Unidentified wheel");
                        n = new e.btVector3(-.720832,.27,-1.52686)
                    }
                    const i = "WheelFL" == t || "WheelFR" == t;
                    f.addWheel(n, p, m, .12, .331, u, i),
                    e.destroy(n)
                }
                e.destroy(p),
                e.destroy(m);
                const g = new e.btTransform;
                g.setIdentity(),
                h.setWorldTransform(g),
                h.getMotionState().setWorldTransform(g),
                e.destroy(g),
                f.resetSuspension(),
                f.setSteeringValue(0, 0),
                f.setSteeringValue(0, 1);
                const A = new e.btTransform;
                A.setIdentity();
                const _ = new e.btDefaultMotionState(A);
                e.destroy(A);
                const v = new e.btVector3(0,0,0)
                  , w = new e.btVector3(.1,.1,.1)
                  , y = new e.btBoxShape(w);
                y.calculateLocalInertia(100, v),
                e.destroy(w);
                const x = new e.btRigidBodyConstructionInfo(100,_,y,v)
                  , b = new e.btRigidBody(x);
                e.destroy(v),
                e.destroy(x),
                b.setActivationState(4),
                i.world.addRigidBody(b);
                const E = 1e5;
                f.applyEngineForce(E, 2),
                f.applyEngineForce(E, 3);
                for (let e = 0; e < 999; e++)
                    i.step();
                const S = new e.btTransform;
                h.getMotionState().getWorldTransform(S);
                const M = S.getOrigin()
                  , T = S.getRotation();
                e.destroy(S);
                const C = t.equals(new Zt(M.x(),M.y(),M.z()))
                  , I = n.equals(new Kt(T.x(),T.y(),T.z(),T.w()));
                i.dispose(),
                e.destroy(l),
                e.destroy(h),
                e.destroy(f),
                e.destroy(y),
                e.destroy(b);
                const R = C || I;
                return R || console.error("Determinism check failed: Simulation"),
                R
            }
            function getCarState(e) {
                var t, n;
                const i = e.id
                  , r = e.model
                  , a = r.controls.getControls(r.getTime().numberOfFrames);
                r.step();
                const s = r.getPosition()
                  , o = r.getQuaternion()
                  , l = r.getWheelPosition(0)
                  , c = r.getWheelPosition(1)
                  , h = r.getWheelPosition(2)
                  , u = r.getWheelPosition(3)
                  , d = r.getWheelQuaternion(0)
                  , f = r.getWheelQuaternion(1)
                  , p = r.getWheelQuaternion(2)
                  , m = r.getWheelQuaternion(3);
                return {
                    id: i,
                    frames: r.getTime().numberOfFrames,
                    speedKmh: r.getSpeedKmh(),
                    hasStarted: r.hasStarted(),
                    finishFrames: null !== (n = null === (t = r.getFinishTime()) || void 0 === t ? void 0 : t.numberOfFrames) && void 0 !== n ? n : null,
                    nextCheckpointIndex: r.getNextCheckpointIndex(),
                    hasCheckpointToRespawnAt: r.hasCheckpointToRespawnAt(),
                    position: {
                        x: s.x,
                        y: s.y,
                        z: s.z
                    },
                    quaternion: {
                        x: o.x,
                        y: o.y,
                        z: o.z,
                        w: o.w
                    },
                    collisionImpulses: r.getCollisionImpulses(),
                    wheelInContact: [r.getWheelInContact(0), r.getWheelInContact(1), r.getWheelInContact(2), r.getWheelInContact(3)],
                    wheelSuspensionLength: [r.getWheelSuspensionLength(0), r.getWheelSuspensionLength(1), r.getWheelSuspensionLength(2), r.getWheelSuspensionLength(3)],
                    wheelSuspensionVelocity: [r.getWheelSuspensionVelocity(0), r.getWheelSuspensionVelocity(1), r.getWheelSuspensionVelocity(2), r.getWheelSuspensionVelocity(3)],
                    wheelRotation: [r.getWheelRotation(0), r.getWheelRotation(1), r.getWheelRotation(2), r.getWheelRotation(3)],
                    wheelDeltaRotation: [r.getWheelDeltaRotation(0), r.getWheelDeltaRotation(1), r.getWheelDeltaRotation(2), r.getWheelDeltaRotation(3)],
                    wheelSkidInfo: [r.getWheelSkidInfo(0), r.getWheelSkidInfo(1), r.getWheelSkidInfo(2), r.getWheelSkidInfo(3)],
                    wheelPosition: [{
                        x: l.x,
                        y: l.y,
                        z: l.z
                    }, {
                        x: c.x,
                        y: c.y,
                        z: c.z
                    }, {
                        x: h.x,
                        y: h.y,
                        z: h.z
                    }, {
                        x: u.x,
                        y: u.y,
                        z: u.z
                    }],
                    wheelQuaternion: [{
                        x: d.x,
                        y: d.y,
                        z: d.z,
                        w: d.w
                    }, {
                        x: f.x,
                        y: f.y,
                        z: f.z,
                        w: f.w
                    }, {
                        x: p.x,
                        y: p.y,
                        z: p.z,
                        w: p.w
                    }, {
                        x: m.x,
                        y: m.y,
                        z: m.z,
                        w: m.w
                    }],
                    brakeLightEnabled: r.isBrakeLightEnabled(),
                    controls: a,
                    velocityVector: r.getVelocityVector(),
                    steeringAngle: r.getSteeringAngle()
                    // rotationalVelocity: r.getRotationalVelocity()
                }
            }
            Dv.length = 0,
            onmessage = i;
            let s = performance.now()
              , o = 0;
            function l() {
                const e = performance.now();
                o += Math.max(0, Math.min(.1, (e - s) / 1e3)),
                s = e;
                const t = [];
                for (; o > .001; ) {
                    o -= .001;
                    for (const e of n) {
                        if (null != e.targetSimulationTime)
                            throw new Error("Realtime simulation does not support targetSimulationTime");
                        e.model.hasStarted() && e.model.getTime().numberOfFrames < Ch.maxFrames && !e.isPaused && t.push(getCarState(e))
                    }
                }
                t.length > 0 && postMessage({
                    messageType: g_.UpdateResult,
                    carStates: t
                }),
                requestAnimationFrame(l)
            }
            function c() {
                const e = performance.now()
                  , t = [];
                if (n.length > 0) {
                    let i;
                    do {
                        i = !0;
                        for (let e = 0; e < Math.max(1, Math.ceil(100 / n.length)); e++) {
                            for (const e of n)
                                if (e.model.hasStarted()) {
                                    if (null == e.targetSimulationTime)
                                        throw new Error("Non-realtime simulation requires targetSimulationTime");
                                    e.model.getTime().numberOfFrames < Ch.maxFrames && e.model.getTime().lessThan(e.targetSimulationTime) && !e.isPaused && (t.push(getCarState(e)),
                                    i = !1)
                                }
                            if (i)
                                break
                        }
                    } while (Math.max(0, performance.now() - e) / 1e3 < .01 && !i)
                }
                postMessage({
                    messageType: g_.UpdateResult,
                    carStates: t
                })
            }
        }
        ))
    }
    )()
}
)();
