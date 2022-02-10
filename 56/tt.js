// sign = g("app=CailianpressWeb&category=&lastTime=1644405949&last_time=1644405949&os=web&refresh_type=1&rn=20&sv=7.7.5")
//
function g(t) {
    return t = digest(t),
        t = new_s(t)
}

_maxChunkLen = 65536
_padMaxChunkLen = 65600
_heap = new ArrayBuffer(ssss(_padMaxChunkLen + 320 + 20)),
    _h32 = new Int32Array(_heap),
    _h8 = new Int8Array(_heap),
    _core = new ts({
        Int32Array: Int32Array
    }, {}, _heap)

function digest(e) {
    return oHex(rawDigest(e).buffer)
}

function ssss(e) {
    var t = 0;
    if (e <= 65536)
        return 65536;
    if (e < 16777216)
        for (t = 1; t < e; t <<= 1)
            ;
    else
        for (t = 16777216; t < e; t += 16777216)
            ;
    return t
}

function ts(e, t, n) {
    "use asm";
    var r = new e.Int32Array(n);

    function o(e, t) {
        e = e | 0;
        t = t | 0;
        var n = 0
            , o = 0
            , i = 0
            , s = 0
            , a = 0
            , u = 0
            , c = 0
            , f = 0
            , p = 0
            , h = 0
            , l = 0
            , d = 0
            , y = 0
            , m = 0;
        i = r[t + 320 >> 2] | 0;
        a = r[t + 324 >> 2] | 0;
        c = r[t + 328 >> 2] | 0;
        p = r[t + 332 >> 2] | 0;
        l = r[t + 336 >> 2] | 0;
        for (n = 0; (n | 0) < (e | 0); n = n + 64 | 0) {
            s = i;
            u = a;
            f = c;
            h = p;
            d = l;
            for (o = 0; (o | 0) < 64; o = o + 4 | 0) {
                m = r[n + o >> 2] | 0;
                y = ((i << 5 | i >>> 27) + (a & c | ~a & p) | 0) + ((m + l | 0) + 1518500249 | 0) | 0;
                l = p;
                p = c;
                c = a << 30 | a >>> 2;
                a = i;
                i = y;
                r[e + o >> 2] = m
            }
            for (o = e + 64 | 0; (o | 0) < (e + 80 | 0); o = o + 4 | 0) {
                m = (r[o - 12 >> 2] ^ r[o - 32 >> 2] ^ r[o - 56 >> 2] ^ r[o - 64 >> 2]) << 1 | (r[o - 12 >> 2] ^ r[o - 32 >> 2] ^ r[o - 56 >> 2] ^ r[o - 64 >> 2]) >>> 31;
                y = ((i << 5 | i >>> 27) + (a & c | ~a & p) | 0) + ((m + l | 0) + 1518500249 | 0) | 0;
                l = p;
                p = c;
                c = a << 30 | a >>> 2;
                a = i;
                i = y;
                r[o >> 2] = m
            }
            for (o = e + 80 | 0; (o | 0) < (e + 160 | 0); o = o + 4 | 0) {
                m = (r[o - 12 >> 2] ^ r[o - 32 >> 2] ^ r[o - 56 >> 2] ^ r[o - 64 >> 2]) << 1 | (r[o - 12 >> 2] ^ r[o - 32 >> 2] ^ r[o - 56 >> 2] ^ r[o - 64 >> 2]) >>> 31;
                y = ((i << 5 | i >>> 27) + (a ^ c ^ p) | 0) + ((m + l | 0) + 1859775393 | 0) | 0;
                l = p;
                p = c;
                c = a << 30 | a >>> 2;
                a = i;
                i = y;
                r[o >> 2] = m
            }
            for (o = e + 160 | 0; (o | 0) < (e + 240 | 0); o = o + 4 | 0) {
                m = (r[o - 12 >> 2] ^ r[o - 32 >> 2] ^ r[o - 56 >> 2] ^ r[o - 64 >> 2]) << 1 | (r[o - 12 >> 2] ^ r[o - 32 >> 2] ^ r[o - 56 >> 2] ^ r[o - 64 >> 2]) >>> 31;
                y = ((i << 5 | i >>> 27) + (a & c | a & p | c & p) | 0) + ((m + l | 0) - 1894007588 | 0) | 0;
                l = p;
                p = c;
                c = a << 30 | a >>> 2;
                a = i;
                i = y;
                r[o >> 2] = m
            }
            for (o = e + 240 | 0; (o | 0) < (e + 320 | 0); o = o + 4 | 0) {
                m = (r[o - 12 >> 2] ^ r[o - 32 >> 2] ^ r[o - 56 >> 2] ^ r[o - 64 >> 2]) << 1 | (r[o - 12 >> 2] ^ r[o - 32 >> 2] ^ r[o - 56 >> 2] ^ r[o - 64 >> 2]) >>> 31;
                y = ((i << 5 | i >>> 27) + (a ^ c ^ p) | 0) + ((m + l | 0) - 899497514 | 0) | 0;
                l = p;
                p = c;
                c = a << 30 | a >>> 2;
                a = i;
                i = y;
                r[o >> 2] = m
            }
            i = i + s | 0;
            a = a + u | 0;
            c = c + f | 0;
            p = p + h | 0;
            l = l + d | 0
        }
        r[t + 320 >> 2] = i;
        r[t + 324 >> 2] = a;
        r[t + 328 >> 2] = c;
        r[t + 332 >> 2] = p;
        r[t + 336 >> 2] = l
    }

    return {
        hash: o
    }
}

function rawDigest(e) {
    var t = e.byteLength || e.length || e.size || 0;
    _initState(_heap, _padMaxChunkLen);
    var n = 0
        , r = _maxChunkLen;
    for (n = 0; t > n + r; n += r)
        _coreCall(e, n, r, t, !1);
    return _coreCall(e, n, t - n, t, !0),
        c(_heap, _padMaxChunkLen)
}

c = function (e, t) {
    var n = new Int32Array(e, t + 320, 5)
        , r = new Int32Array(5)
        , o = new DataView(r.buffer);
    return o.setInt32(0, n[0], !1),
        o.setInt32(4, n[1], !1),
        o.setInt32(8, n[2], !1),
        o.setInt32(12, n[3], !1),
        o.setInt32(16, n[4], !1),
        r
}

_initState = function (e, t) {
    this._offset = 0;
    var n = new Int32Array(e, t + 320, 5);
    n[0] = 1732584193,
        n[1] = -271733879,
        n[2] = -1732584194,
        n[3] = 271733878,
        n[4] = -1009589776
}

_coreCall = function (e, t, n, r, o) {
    var i = n;
    _write(e, t, n),
    o && (i = _padChunk(n, r)),
        _core.hash(i, _padMaxChunkLen)
}

_write = function (e, t, n, r) {
    _write_to(e, _h8, _h32, t, n, r || 0)
}

_write_to = function (e, t, i, s, a, u) {
    if ("string" === typeof e)
        return function (e, t, n, r, o, i) {
            var s = void 0
                , a = i % 4
                , u = (o + a) % 4
                , c = o - u;
            switch (a) {
                case 0:
                    t[i] = e.charCodeAt(r + 3);
                case 1:
                    t[i + 1 - (a << 1) | 0] = e.charCodeAt(r + 2);
                case 2:
                    t[i + 2 - (a << 1) | 0] = e.charCodeAt(r + 1);
                case 3:
                    t[i + 3 - (a << 1) | 0] = e.charCodeAt(r)
            }
            if (!(o < u + (4 - a))) {
                for (s = 4 - a; s < c; s = s + 4 | 0)
                    n[i + s >> 2] = e.charCodeAt(r + s) << 24 | e.charCodeAt(r + s + 1) << 16 | e.charCodeAt(r + s + 2) << 8 | e.charCodeAt(r + s + 3);
                switch (u) {
                    case 3:
                        t[i + c + 1 | 0] = e.charCodeAt(r + c + 2);
                    case 2:
                        t[i + c + 2 | 0] = e.charCodeAt(r + c + 1);
                    case 1:
                        t[i + c + 3 | 0] = e.charCodeAt(r + c)
                }
            }
        }(e, t, i, s, a, u);
}

_padChunk = function (e, t) {
    u = function (e) {
        for (e += 9; e % 64 > 0; e += 1)
            ;
        return e
    }
    var n = u(e)
        , r = new Int32Array(_heap, 0, n >> 2);
    return function (e, t) {
        var n = new Uint8Array(e.buffer)
            , r = t % 4
            , o = t - r;
        switch (r) {
            case 0:
                n[o + 3] = 0;
            case 1:
                n[o + 2] = 0;
            case 2:
                n[o + 1] = 0;
            case 3:
                n[o + 0] = 0
        }
        for (var i = 1 + (t >> 2); i < e.length; i++)
            e[i] = 0
    }(r, e),
        function (e, t, n) {
            e[t >> 2] |= 128 << 24 - (t % 4 << 3),
                e[14 + (2 + (t >> 2) & -16)] = n / (1 << 29) | 0,
                e[15 + (2 + (t >> 2) & -16)] = n << 3
        }(r, e, t),
        n
}

function new_s(e, n) {
    if (void 0 === e || null === e)
        throw new Error("Illegal argument " + e);
    var r = wordsToBytes(ooo(e, n));

    return bytesToHex(r)
}

function bytesToHex(e) {
    for (var t = [], n = 0; n < e.length; n++)
        t.push((e[n] >>> 4).toString(16)),
            t.push((15 & e[n]).toString(16));
    return t.join("")
}

function stringToBytes(e) {
    function aa(e) {
        for (var t = [], n = 0; n < e.length; n++)
            t.push(255 & e.charCodeAt(n));
        return t
    }

    return aa(unescape(encodeURIComponent(e)))
}

function bytesToWords(e) {
    for (var t = [], n = 0, r = 0; n < e.length; n++,
        r += 8)
        t[r >>> 5] |= e[n] << 24 - r % 32;
    return t
}

function wordsToBytes(e) {
    for (var t = [], n = 0; n < 32 * e.length; n += 8)
        t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
    return t
}

function _ff(e, t, n, r, o, i, s) {
    var a = e + (t & n | ~t & r) + (o >>> 0) + s;
    return (a << i | a >>> 32 - i) + t
}

function _gg(e, t, n, r, o, i, s) {
    var a = e + (t & r | n & ~r) + (o >>> 0) + s;
    return (a << i | a >>> 32 - i) + t
}

function _hh(e, t, n, r, o, i, s) {
    var a = e + (t ^ n ^ r) + (o >>> 0) + s;
    return (a << i | a >>> 32 - i) + t
}

function _ii(e, t, n, r, o, i, s) {
    var a = e + (n ^ (t | ~r)) + (o >>> 0) + s;
    return (a << i | a >>> 32 - i) + t
}

function ooo(e, n) {
    e = stringToBytes(e);
    for (var a = bytesToWords(e), u = 8 * e.length, c = 1732584193, f = -271733879, p = -1732584194, h = 271733878, l = 0; l < a.length; l++)
        a[l] = 16711935 & (a[l] << 8 | a[l] >>> 24) | 4278255360 & (a[l] << 24 | a[l] >>> 8);
    a[u >>> 5] |= 128 << u % 32,
        a[14 + (u + 64 >>> 9 << 4)] = u;
    var d = _ff
        , y = _gg
        , m = _hh
        , g = _ii;
    for (l = 0; l < a.length; l += 16) {
        var v = c
            , w = f
            , x = p
            , b = h;
        c = d(c, f, p, h, a[l + 0], 7, -680876936),
            h = d(h, c, f, p, a[l + 1], 12, -389564586),
            p = d(p, h, c, f, a[l + 2], 17, 606105819),
            f = d(f, p, h, c, a[l + 3], 22, -1044525330),
            c = d(c, f, p, h, a[l + 4], 7, -176418897),
            h = d(h, c, f, p, a[l + 5], 12, 1200080426),
            p = d(p, h, c, f, a[l + 6], 17, -1473231341),
            f = d(f, p, h, c, a[l + 7], 22, -45705983),
            c = d(c, f, p, h, a[l + 8], 7, 1770035416),
            h = d(h, c, f, p, a[l + 9], 12, -1958414417),
            p = d(p, h, c, f, a[l + 10], 17, -42063),
            f = d(f, p, h, c, a[l + 11], 22, -1990404162),
            c = d(c, f, p, h, a[l + 12], 7, 1804603682),
            h = d(h, c, f, p, a[l + 13], 12, -40341101),
            p = d(p, h, c, f, a[l + 14], 17, -1502002290),
            c = y(c, f = d(f, p, h, c, a[l + 15], 22, 1236535329), p, h, a[l + 1], 5, -165796510),
            h = y(h, c, f, p, a[l + 6], 9, -1069501632),
            p = y(p, h, c, f, a[l + 11], 14, 643717713),
            f = y(f, p, h, c, a[l + 0], 20, -373897302),
            c = y(c, f, p, h, a[l + 5], 5, -701558691),
            h = y(h, c, f, p, a[l + 10], 9, 38016083),
            p = y(p, h, c, f, a[l + 15], 14, -660478335),
            f = y(f, p, h, c, a[l + 4], 20, -405537848),
            c = y(c, f, p, h, a[l + 9], 5, 568446438),
            h = y(h, c, f, p, a[l + 14], 9, -1019803690),
            p = y(p, h, c, f, a[l + 3], 14, -187363961),
            f = y(f, p, h, c, a[l + 8], 20, 1163531501),
            c = y(c, f, p, h, a[l + 13], 5, -1444681467),
            h = y(h, c, f, p, a[l + 2], 9, -51403784),
            p = y(p, h, c, f, a[l + 7], 14, 1735328473),
            c = m(c, f = y(f, p, h, c, a[l + 12], 20, -1926607734), p, h, a[l + 5], 4, -378558),
            h = m(h, c, f, p, a[l + 8], 11, -2022574463),
            p = m(p, h, c, f, a[l + 11], 16, 1839030562),
            f = m(f, p, h, c, a[l + 14], 23, -35309556),
            c = m(c, f, p, h, a[l + 1], 4, -1530992060),
            h = m(h, c, f, p, a[l + 4], 11, 1272893353),
            p = m(p, h, c, f, a[l + 7], 16, -155497632),
            f = m(f, p, h, c, a[l + 10], 23, -1094730640),
            c = m(c, f, p, h, a[l + 13], 4, 681279174),
            h = m(h, c, f, p, a[l + 0], 11, -358537222),
            p = m(p, h, c, f, a[l + 3], 16, -722521979),
            f = m(f, p, h, c, a[l + 6], 23, 76029189),
            c = m(c, f, p, h, a[l + 9], 4, -640364487),
            h = m(h, c, f, p, a[l + 12], 11, -421815835),
            p = m(p, h, c, f, a[l + 15], 16, 530742520),
            c = g(c, f = m(f, p, h, c, a[l + 2], 23, -995338651), p, h, a[l + 0], 6, -198630844),
            h = g(h, c, f, p, a[l + 7], 10, 1126891415),
            p = g(p, h, c, f, a[l + 14], 15, -1416354905),
            f = g(f, p, h, c, a[l + 5], 21, -57434055),
            c = g(c, f, p, h, a[l + 12], 6, 1700485571),
            h = g(h, c, f, p, a[l + 3], 10, -1894986606),
            p = g(p, h, c, f, a[l + 10], 15, -1051523),
            f = g(f, p, h, c, a[l + 1], 21, -2054922799),
            c = g(c, f, p, h, a[l + 8], 6, 1873313359),
            h = g(h, c, f, p, a[l + 15], 10, -30611744),
            p = g(p, h, c, f, a[l + 6], 15, -1560198380),
            f = g(f, p, h, c, a[l + 13], 21, 1309151649),
            c = g(c, f, p, h, a[l + 4], 6, -145523070),
            h = g(h, c, f, p, a[l + 11], 10, -1120210379),
            p = g(p, h, c, f, a[l + 2], 15, 718787259),
            f = g(f, p, h, c, a[l + 9], 21, -343485551),
            c = c + v >>> 0,
            f = f + w >>> 0,
            p = p + x >>> 0,
            h = h + b >>> 0
    }
    return endian([c, f, p, h])
}

function rotl(e, t) {
    return e << t | e >>> 32 - t
}

function endian(e) {
    if (e.constructor == Number)
        return 16711935 & rotl(e, 8) | 4278255360 & rotl(e, 24);
    for (var t = 0; t < e.length; t++)
        e[t] = endian(e[t]);
    return e
}

oHex = function (e) {
    for (var n = new Array(256), r = 0; r < 256; r++)
        n[r] = (r < 16 ? "0" : "") + r.toString(16);
    for (var t = new Uint8Array(e), r = new Array(e.byteLength), o = 0; o < r.length; o++)
        r[o] = n[t[o]];
    return r.join("")
}
console.log(g("app=CailianpressWeb&lastTime=1644469070&os=web&sv=7.7.5"))
