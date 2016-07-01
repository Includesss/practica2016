/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
     : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = []
      , d = c.slice
      , e = c.concat
      , f = c.push
      , g = c.indexOf
      , h = {}
      , i = h.toString
      , j = h.hasOwnProperty
      , k = {}
      , l = a.document
      , m = "2.1.4"
      , n = function(a, b) {
        return new n.fn.init(a,b)
    }
      , o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , p = /^-ms-/
      , q = /-([\da-z])/gi
      , r = function(a, b) {
        return b.toUpperCase()
    }
    ;
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null  != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a, b) {
            return n.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null )
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    },
    n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || n.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null  != (a = arguments[h]))
                for (b in a)
                    c = g[b],
                    d = a[b],
                    g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1,
                    f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {},
                    g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }
    ,
    n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null  != a && a === a.window
        },
        isNumeric: function(a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        type: function(a) {
            return null  == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a),
            a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"),
            b.text = a,
            l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c),
                        d === !1)
                            break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c),
                        d === !1)
                            break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]),
                    d === !1)
                        break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]),
                    d === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null  == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null  != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            return null  == b ? -1 : g.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                a[e++] = b[d];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h)
                for (; g > f; f++)
                    d = b(a[f], f, c),
                    null  != d && i.push(d);
            else
                for (f in a)
                    d = b(a[f], f, c),
                    null  != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b],
            b = a,
            a = c),
            n.isFunction(a) ? (e = d.call(arguments, 2),
            f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }
            ,
            f.guid = a.guid = a.guid || n.guid++,
            f) : void 0
        },
        now: Date.now,
        support: k
    }),
    n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = "length" in a && a.length
          , c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(a, b) {
            return a === b && (l = !0),
            0
        }
        , C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }
        , K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+","g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$","g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]","g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)","i"),
            bool: new RegExp("^(?:" + K + ")$","i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)","i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)","ig"), da = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }
        , ea = function() {
            m()
        }
        ;
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes),
            E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                }
                 : function(a, b) {
                    var c = a.length
                      , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b),
            b = b || n,
            d = d || [],
            k = b.nodeType,
            "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)
                return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j),
                            !h || !h.parentNode)
                                return d;
                            if (h.id === j)
                                return d.push(h),
                                d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                            return d.push(h),
                            d
                    } else {
                        if (f[2])
                            return H.apply(d, b.getElementsByTagName(a)),
                            d;
                        if ((j = f[3]) && c.getElementsByClassName)
                            return H.apply(d, b.getElementsByClassName(j)),
                            d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u,
                    w = b,
                    x = 1 !== k && a,
                    1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a),
                        (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s),
                        s = "[id='" + s + "'] ",
                        l = o.length;
                        while (l--)
                            o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b,
                        x = o.join(",")
                    }
                    if (x)
                        try {
                            return H.apply(d, w.querySelectorAll(x)),
                            d
                        } catch (y) {} finally {
                            r || b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }
        function ha() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function ia(a) {
            return a[u] = !0,
            a
        }
        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null 
            }
        }
        function ka(a, b) {
            var c = a.split("|")
              , e = a.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function la(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function oa(a) {
            return ia(function(b) {
                return b = +b,
                ia(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {},
        f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
            o = g.documentElement,
            e = g.defaultView,
            e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)),
            p = !f(g),
            c.attributes = ja(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            c.getElementsByTagName = ja(function(a) {
                return a.appendChild(g.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            c.getElementsByClassName = $.test(g.getElementsByClassName),
            c.getById = ja(function(a) {
                return o.appendChild(a).id = u,
                !g.getElementsByName || !g.getElementsByName(u).length
            }),
            c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }
            ,
            d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete d.find.ID,
            d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            }
             : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }
            ,
            r = [],
            q = [],
            (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                a.querySelectorAll(":checked").length || q.push(":checked"),
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }),
            ja(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "div"),
                s.call(a, "[s!='']:x"),
                r.push("!=", P)
            }),
            q = q.length && new RegExp(q.join("|")),
            r = r.length && new RegExp(r.join("|")),
            b = $.test(o.compareDocumentPosition),
            t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
             : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            B = b ? function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            }
             : function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                if (!e || !f)
                    return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)
                    return la(a, b);
                c = a;
                while (c = c.parentNode)
                    h.unshift(c);
                c = b;
                while (c = c.parentNode)
                    i.unshift(c);
                while (h[d] === i[d])
                    d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }
            ,
            g) : n
        }
        ,
        ga.matches = function(a, b) {
            return ga(a, null , null , b)
        }
        ,
        ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a),
            b = b.replace(U, "='$1']"),
            !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return ga(b, n, null , [a]).length > 0
        }
        ,
        ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        }
        ,
        ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()]
              , f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null 
        }
        ,
        ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        ga.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates,
            k = !c.sortStable && a.slice(0),
            a.sort(B),
            l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null ,
            a
        }
        ,
        e = ga.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }
        ,
        d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ca, da),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null  : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                     : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null  == e ? "!=" === b : b ? (e += "",
                        "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                     : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                k = q[u] || (q[u] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                m = j[0] === w && j[2],
                                l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]),
                                    l === b))
                                        break;
                            return m -= e,
                            m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                    d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = J(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = []
                      , c = []
                      , d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null , e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null , f, c),
                        b[0] = null ,
                        !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(ca, da),
                    function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: ia(function(a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a),
                    a = a.replace(ca, da).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null  == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: oa(function() {
                    return [0]
                }),
                last: oa(function(a, b) {
                    return [b - 1]
                }),
                eq: oa(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: oa(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: oa(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = na(b);
        function qa() {}
        qa.prototype = d.filters = d.pseudos,
        d.setFilters = new qa,
        g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                c = !1,
                (e = T.exec(h)) && (c = e.shift(),
                f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }),
                h = h.slice(c.length));
                for (g in d.filter)
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        }
        ;
        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function sa(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
             : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}),
                            (h = i[d]) && h[0] === w && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j,
                            j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function ta(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
             : a[0]
        }
        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                ga(a, b[d], c);
            return c
        }
        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null  != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                j && b.push(h));
            return g
        }
        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)),
            e && !e[u] && (e = wa(e, f)),
            ia(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i),
                d) {
                    j = va(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null , r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = va(r === g ? r.splice(o, r.length) : r),
                    e ? e(null , g, r, i) : H.apply(g, r)
            })
        }
        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                return a === b
            }, h, !0), l = sa(function(a) {
                return J(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null ,
                e
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [sa(ta(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null , a[i].matches),
                    c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                    }
                    m.push(c)
                }
            return ta(m)
        }
        function ya(a, b) {
            var c = b.length > 0
              , e = a.length > 0
              , f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null  == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null  != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])
                            if (o(l, g, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--,
                    f && r.push(l))
                }
                if (p += q,
                c && q !== p) {
                    m = 0;
                    while (o = b[m++])
                        o(r, s, g, h);
                    if (f) {
                        if (p > 0)
                            while (q--)
                                r[q] || s[q] || (s[q] = F.call(i));
                        s = va(s)
                    }
                    H.apply(i, s),
                    k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                }
                return k && (w = v,
                j = t),
                r
            }
            ;
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--)
                    f = xa(b[c]),
                    f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        i = ga.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [],
            1 === o.length) {
                if (j = o[0] = o[0].slice(0),
                j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0],
                    !b)
                        return e;
                    n && (b = b.parentNode),
                    a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i],
                    d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1),
                        a = f.length && ra(j),
                        !a)
                            return H.apply(e, f),
                            e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b),
            e
        }
        ,
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }),
        ja(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        ja(function(a) {
            return null  == a.getAttribute("disabled")
        }) || ka(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null 
        }),
        ga
    }(a);
    n.find = t,
    n.expr = t.selectors,
    n.expr[":"] = n.expr.pseudos,
    n.unique = t.uniqueSort,
    n.text = t.getText,
    n.isXMLDoc = t.isXML,
    n.contains = t.contains;
    var u = n.expr.match.needsContext
      , v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , w = /^.[^:#\[\.,]*$/;
    function x(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return n.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (w.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (n.contains(e[b], this))
                            return !0
                }));
            for (b = 0; c > b; b++)
                n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d),
            d.selector = this.selector ? this.selector + " " + a : a,
            d
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null , a, null ] : z.exec(a),
            !c || !c[1] && b)
                return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b,
                n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)),
                v.test(c[1]) && n.isPlainObject(b))
                    for (c in b)
                        n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = l.getElementById(c[2]),
            d && d.parentNode && (this.length = 1,
            this[0] = d),
            this.context = l,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        n.makeArray(a, this))
    }
    ;
    A.prototype = n.fn,
    y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/
      , C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.extend({
        dir: function(a, b, c) {
            var d = []
              , e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c))
                        break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }),
    n.fn.extend({
        has: function(a) {
            var b = n(a, this)
              , c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null  == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType)
            ;
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null 
        },
        parents: function(a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return n.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = n.filter(d, e)),
            this.length > 1 && (C[a] || n.unique(e),
            B.test(a) && e.reverse()),
            this.pushStack(e)
        }
    });
    var E = /\S+/g
      , F = {};
    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (b = a.memory && l,
            c = !0,
            g = e || 0,
            e = 0,
            f = h.length,
            d = !0; h && f > g; g++)
                if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                    b = !1;
                    break
                }
            d = !1,
            h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
        }
        , k = {
            add: function() {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function(b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                        })
                    }(arguments),
                    d ? f = h.length : b && (e = c,
                    j(b))
                }
                return this
            },
            remove: function() {
                return h && n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, h, c)) > -1)
                        h.splice(c, 1),
                        d && (f >= c && f--,
                        g >= c && g--)
                }),
                this
            },
            has: function(a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
            },
            empty: function() {
                return h = [],
                f = 0,
                this
            },
            disable: function() {
                return h = i = b = void 0,
                this
            },
            disabled: function() {
                return !h
            },
            lock: function() {
                return i = void 0,
                b || k.disable(),
                this
            },
            locked: function() {
                return !i
            },
            fireWith: function(a, b) {
                return !h || c && !i || (b = b || [],
                b = [a, b.slice ? b.slice() : b],
                d ? i.push(b) : j(b)),
                this
            },
            fire: function() {
                return k.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!c
            }
        };
        return k
    }
    ,
    n.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null 
                    }).promise()
                },
                promise: function(a) {
                    return null  != a ? n.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            n.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? d.call(arguments) : e,
                    c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }
            , i, j, k;
            if (e > 1)
                for (i = new Array(e),
                j = new Array(e),
                k = new Array(e); e > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c),
            g.promise()
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a),
        this
    }
    ,
    n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0,
            a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]),
            n.fn.triggerHandler && (n(l).triggerHandler("ready"),
            n(l).off("ready"))))
        }
    });
    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1),
        a.removeEventListener("load", I, !1),
        n.ready()
    }
    n.ready.promise = function(b) {
        return H || (H = n.Deferred(),
        "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1),
        a.addEventListener("load", I, !1))),
        H.promise(b)
    }
    ,
    n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null  == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c)
                n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        n.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null ) : (j = b,
        b = function(a, b, c) {
            return j.call(n(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
    ;
    n.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }
    ;
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }),
        this.expando = n.expando + K.uid++
    }
    K.uid = 1,
    K.accepts = n.acceptData,
    K.prototype = {
        key: function(a) {
            if (!K.accepts(a))
                return 0;
            var b = {}
              , c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    },
                    Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c,
                    n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}),
            c
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b)
                f[b] = c;
            else if (n.isEmptyObject(f))
                n.extend(this.cache[e], b);
            else
                for (d in b)
                    f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b),
            void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c),
            void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b)
                this.cache[f] = {};
            else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b),
                b in g ? d = [b, e] : (d = e,
                d = d in g ? [d] : d.match(E) || [])),
                c = d.length;
                while (c--)
                    delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K
      , M = new K
      , N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , O = /([A-Z])/g;
    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(O, "-$1").toLowerCase(),
            c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null  : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                M.set(a, b, c)
            } else
                c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a)
        },
        data: function(a, b, c) {
            return M.access(a, b, c)
        },
        removeData: function(a, b) {
            M.remove(a, b)
        },
        _data: function(a, b, c) {
            return L.access(a, b, c)
        },
        _removeData: function(a, b) {
            L.remove(a, b)
        }
    }),
    n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f),
                1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)),
                        P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a)
            }) : J(this, function(b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a),
                    void 0 !== c)
                        return c;
                    if (c = M.get(f, d),
                    void 0 !== c)
                        return c;
                    if (c = P(f, d, void 0),
                    void 0 !== c)
                        return c
                } else
                    this.each(function() {
                        var c = M.get(this, d);
                        M.set(this, d, b),
                        -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                    })
            }, null , b, arguments.length > 1, null , !0)
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a)
            })
        }
    }),
    n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = L.get(a, b),
            c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = n._queueHooks(a, b)
              , g = function() {
                n.dequeue(a, b)
            }
            ;
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    L.remove(a, [b + "queue", c])
                })
            })
        }
    }),
    n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            }
            ;
            "string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx";
            while (g--)
                c = L.get(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , R = ["Top", "Right", "Bottom", "Left"]
      , S = function(a, b) {
        return a = b || a,
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    }
      , T = /^(?:checkbox|radio)$/i;
    !function() {
        var a = l.createDocumentFragment()
          , b = a.appendChild(l.createElement("div"))
          , c = l.createElement("input");
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.innerHTML = "<textarea>x</textarea>",
        k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/
      , W = /^(?:mouse|pointer|contextmenu)|click/
      , X = /^(?:focusinfocus|focusoutblur)$/
      , Y = /^([^.]*)(?:\.(.+)|)$/;
    function Z() {
        return !0
    }
    function $() {
        return !1
    }
    function _() {
        try {
            return l.activeElement
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c,
                c = f.handler,
                e = f.selector),
                c.guid || (c.guid = n.guid++),
                (i = r.events) || (i = r.events = {}),
                (g = r.handle) || (g = r.handle = function(b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }
                ),
                b = (b || "").match(E) || [""],
                j = b.length;
                while (j--)
                    h = Y.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o && (l = n.event.special[o] || {},
                    o = (e ? l.delegateType : l.bindType) || o,
                    l = n.event.special[o] || {},
                    k = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, f),
                    (m = i[o]) || (m = i[o] = [],
                    m.delegateCount = 0,
                    l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)),
                    l.add && (l.add.call(a, k),
                    k.handler.guid || (k.handler.guid = c.guid)),
                    e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                    n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""],
                j = b.length;
                while (j--)
                    if (h = Y.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o) {
                        l = n.event.special[o] || {},
                        o = (d ? l.delegateType : l.bindType) || o,
                        m = i[o] || [],
                        h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        g = f = m.length;
                        while (f--)
                            k = m[f],
                            !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1),
                            k.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle),
                        delete i[o])
                    } else
                        for (o in i)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle,
                L.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l,
            3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."),
            q = r.shift(),
            r.sort()),
            k = q.indexOf(":") < 0 && "on" + q,
            b = b[n.expando] ? b : new n.Event(q,"object" == typeof b && b),
            b.isTrigger = e ? 2 : 3,
            b.namespace = r.join("."),
            b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
            b.result = void 0,
            b.target || (b.target = d),
            c = null  == c ? [b] : n.makeArray(c, [b]),
            o = n.event.special[q] || {},
            e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q,
                    X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)
                        p.push(g),
                        h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped())
                    b.type = f > 1 ? i : o.bindType || q,
                    m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"),
                    m && m.apply(g, c),
                    m = k && g[k],
                    m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c),
                    b.result === !1 && b.preventDefault());
                return b.type = q,
                e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k],
                h && (d[k] = null ),
                n.event.triggered = q,
                d[q](),
                n.event.triggered = void 0,
                h && (d[k] = h)),
                b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a,
            a.delegateTarget = this,
            !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j),
                b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                        (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g,
                        a.data = g.data,
                        e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
                        void 0 !== e && (a.result = e) === !1 && (a.preventDefault(),
                        a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [],
                        c = 0; h > c; c++)
                            f = b[c],
                            e = f.selector + " ",
                            void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null , [i]).length),
                            d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null  == a.which && (a.which = null  != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null  == a.pageX && null  != b.clientX && (c = a.target.ownerDocument || l,
                d = c.documentElement,
                e = c.body,
                a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0),
                a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                a
            }
        },
        fix: function(a) {
            if (a[n.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new n.Event(f),
            b = d.length;
            while (b--)
                c = d[b],
                a[c] = f[c];
            return a.target || (a.target = l),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null , b) : n.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
    ,
    n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a,
        b && n.extend(this, b),
        this.timeStamp = a && a.timeStamp || n.now(),
        void (this[n.expando] = !0)) : new n.Event(a,b)
    }
    ,
    n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z,
            a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z,
            a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        }
        ;
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = L.access(d, b);
                e || d.addEventListener(a, c, !0),
                L.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0),
                L.remove(d, b))
            }
        }
    }),
    n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b,
                b = void 0);
                for (g in a)
                    this.on(g, b, c, a[g], e);
                return this
            }
            if (null  == c && null  == d ? (d = b,
            c = b = void 0) : null  == d && ("string" == typeof b ? (d = c,
            c = void 0) : (d = c,
            c = b,
            b = void 0)),
            d === !1)
                d = $;
            else if (!d)
                return this;
            return 1 === e && (f = d,
            d = function(a) {
                return n().off(a),
                f.apply(this, arguments)
            }
            ,
            d.guid = f.guid || (f.guid = n.guid++)),
            this.each(function() {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b,
            b = void 0),
            c === !1 && (c = $),
            this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , ba = /<([\w:]+)/
      , ca = /<|&#?\w+;/
      , da = /<(?:script|style|link)/i
      , ea = /checked\s*(?:[^=]|=\s*.checked.)/i
      , fa = /^$|\/(?:java|ecma)script/i
      , ga = /^true\/(.*)/
      , ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , ia = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ia.optgroup = ia.option,
    ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead,
    ia.th = ia.td;
    function ja(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function ka(a) {
        return a.type = (null  !== a.getAttribute("type")) + "/" + a.type,
        a
    }
    function la(a) {
        var b = ga.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }
    function na(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a),
            g = L.set(b, f),
            j = f.events)) {
                delete g.handle,
                g.events = {};
                for (e in j)
                    for (c = 0,
                    d = j[e].length; d > c; c++)
                        n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a),
            i = n.extend({}, h),
            M.set(b, i))
        }
    }
    function oa(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }
    function pa(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = oa(h),
                f = oa(a),
                d = 0,
                e = f.length; e > d; d++)
                    pa(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || oa(a),
                    g = g || oa(h),
                    d = 0,
                    e = f.length; e > d; d++)
                        na(f[d], g[d]);
                else
                    na(a, h);
            return g = oa(h, "script"),
            g.length > 0 && ma(g, !i && oa(a, "script")),
            h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                if (e = a[m],
                e || 0 === e)
                    if ("object" === n.type(e))
                        n.merge(l, e.nodeType ? [e] : e);
                    else if (ca.test(e)) {
                        f = f || k.appendChild(b.createElement("div")),
                        g = (ba.exec(e) || ["", ""])[1].toLowerCase(),
                        h = ia[g] || ia._default,
                        f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2],
                        j = h[0];
                        while (j--)
                            f = f.lastChild;
                        n.merge(l, f.childNodes),
                        f = k.firstChild,
                        f.textContent = ""
                    } else
                        l.push(b.createTextNode(e));
            k.textContent = "",
            m = 0;
            while (e = l[m++])
                if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e),
                f = oa(k.appendChild(e), "script"),
                i && ma(f),
                c)) {
                    j = 0;
                    while (e = f[j++])
                        fa.test(e.type || "") && c.push(e)
                }
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando],
                e && (b = L.cache[e]))) {
                    if (b.events)
                        for (d in b.events)
                            f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }),
    n.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null , a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null  != (c = d[e]); e++)
                b || 1 !== c.nodeType || n.cleanData(oa(c)),
                c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")),
                c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null  != (a = this[b]); b++)
                1 === a.nodeType && (n.cleanData(oa(a, !1)),
                a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null  == a ? !1 : a,
            b = null  == b ? a : b,
            this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(aa, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (n.cleanData(oa(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null , a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode,
                n.cleanData(oa(this)),
                a && a.replaceChild(b, this)
            }),
            a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p))
                return this.each(function(c) {
                    var d = m.eq(c);
                    q && (a[0] = p.call(this, c, d.html())),
                    d.domManip(a, b)
                });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this),
            d = c.firstChild,
            1 === c.childNodes.length && (c = d),
            d)) {
                for (f = n.map(oa(c, "script"), ka),
                g = f.length; l > j; j++)
                    h = c,
                    j !== o && (h = n.clone(h, !0, !0),
                    g && n.merge(f, oa(h, "script"))),
                    b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument,
                    n.map(f, la),
                    j = 0; g > j; j++)
                        h = f[j],
                        fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
            }
            return this
        }
    }),
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
                c = h === g ? this : this.clone(!0),
                n(e[h])[b](c),
                f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qa, ra = {};
    function sa(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(),
        f
    }
    function ta(a) {
        var b = l
          , c = ra[a];
        return c || (c = sa(a, b),
        "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = qa[0].contentDocument,
        b.write(),
        b.close(),
        c = sa(a, b),
        qa.detach()),
        ra[a] = c),
        c
    }
    var ua = /^margin/
      , va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$","i")
      , wa = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null ) : a.getComputedStyle(b, null )
    }
    ;
    function xa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wa(a),
        c && (g = c.getPropertyValue(b) || c[b]),
        c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        va.test(g) && ua.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f)),
        void 0 !== g ? g + "" : g
    }
    function ya(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    !function() {
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box",
            f.cloneNode(!0).style.backgroundClip = "",
            k.clearCloneStyle = "content-box" === f.style.backgroundClip,
            e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
            e.appendChild(f);
            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                f.innerHTML = "",
                d.appendChild(e);
                var g = a.getComputedStyle(f, null );
                b = "1%" !== g.top,
                c = "4px" === g.width,
                d.removeChild(e)
            }
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function() {
                    return g(),
                    b
                },
                boxSizingReliable: function() {
                    return null  == c && g(),
                    c
                },
                reliableMarginRight: function() {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    c.style.marginRight = c.style.width = "0",
                    f.style.width = "1px",
                    d.appendChild(e),
                    b = !parseFloat(a.getComputedStyle(c, null ).marginRight),
                    d.removeChild(e),
                    f.removeChild(c),
                    b
                }
            })
        }
    }(),
    n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
    ;
    var za = /^(none|table(?!-c[ea]).+)/
      , Aa = new RegExp("^(" + Q + ")(.*)$","i")
      , Ba = new RegExp("^([+-])=(" + Q + ")","i")
      , Ca = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Da = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ea = ["Webkit", "O", "Moz", "ms"];
    function Fa(a, b) {
        if (b in a)
            return b;
        var c = b[0].toUpperCase() + b.slice(1)
          , d = b
          , e = Ea.length;
        while (e--)
            if (b = Ea[e] + c,
            b in a)
                return b;
        return d
    }
    function Ga(a, b, c) {
        var d = Aa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function Ha(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += n.css(a, c + R[f], !0, e)),
            d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e),
            "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }
    function Ia(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = wa(a)
          , g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null  == e) {
            if (e = xa(a, b, f),
            (0 > e || null  == e) && (e = a.style[b]),
            va.test(e))
                return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = L.get(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d),
            "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)),
                g = n.cssHooks[b] || n.cssHooks[h],
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c,
                "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)),
                f = "number"),
                null  != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"),
                k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)),
                void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)),
            g = n.cssHooks[b] || n.cssHooks[h],
            g && "get" in g && (e = g.get(a, !0, c)),
            void 0 === e && (e = xa(a, b, d)),
            "normal" === e && b in Da && (e = Da[b]),
            "" === c || c ? (f = parseFloat(e),
            c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }),
    n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function() {
                    return Ia(a, b, d)
                }) : Ia(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && wa(a);
                return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    n.cssHooks.marginRight = ya(k.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xa, [a, "marginRight"]) : void 0
    }),
    n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        ua.test(a) || (n.cssHooks[a + b].set = Ga)
    }),
    n.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wa(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Ja(this, !0)
        },
        hide: function() {
            return Ja(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a,b,c,d,e)
    }
    n.Tween = Ka,
    Ka.prototype = {
        constructor: Ka,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ka.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ka.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : Ka.propHooks._default.set(this),
            this
        }
    },
    Ka.prototype.init.prototype = Ka.prototype,
    Ka.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null  == a.elem[a.prop] || a.elem.style && null  != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null  != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    },
    n.fx = Ka.prototype.init,
    n.fx.step = {};
    var La, Ma, Na = /^(?:toggle|show|hide)$/, Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$","i"), Pa = /queueHooks$/, Qa = [Va], Ra = {
        "*": [function(a, b) {
            var c = this.createTween(a, b)
              , d = c.cur()
              , e = Oa.exec(b)
              , f = e && e[3] || (n.cssNumber[a] ? "" : "px")
              , g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a))
              , h = 1
              , i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                e = e || [],
                g = +d || 1;
                do
                    h = h || ".5",
                    g /= h,
                    n.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0,
            c.unit = f,
            c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
            c
        }
        ]
    };
    function Sa() {
        return setTimeout(function() {
            La = void 0
        }),
        La = n.now()
    }
    function Ta(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            c = R[d],
            e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function Va(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"),
        null  == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        l.always(function() {
            l.always(function() {
                h.unqueued--,
                n.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY],
        j = n.css(a, "display"),
        k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j,
        "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")),
        c.overflow && (o.overflow = "hidden",
        l.always(function() {
            o.overflow = c.overflow[0],
            o.overflowX = c.overflow[1],
            o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            Na.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d])
                        continue;p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else
                j = void 0;
        if (n.isEmptyObject(m))
            "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}),
            f && (q.hidden = !p),
            p ? n(a).show() : l.done(function() {
                n(a).hide()
            }),
            l.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in m)
                    n.style(a, b, m[b])
            });
            for (d in m)
                g = Ua(p ? q[d] : 0, d, l),
                d in q || (q[d] = g.start,
                p && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function Wa(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c),
            e = b[d],
            f = a[c],
            n.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = n.cssHooks[d],
            g && "expand" in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function Xa(a, b, c) {
        var d, e, f = 0, g = Qa.length, h = n.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }
        , j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: La || Sa(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (Wa(k, j.opts.specialEasing); g > f; f++)
            if (d = Qa[f].call(j, a, k, j.opts))
                return d;
        return n.map(k, Ua, j),
        n.isFunction(j.opts.start) && j.opts.start.call(a, j),
        n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(Xa, {
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                Ra[c] = Ra[c] || [],
                Ra[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? Qa.unshift(a) : Qa.push(a)
        }
    }),
    n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default,
        (null  == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a)
              , f = n.speed(b, c, d)
              , g = function() {
                var b = Xa(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0)
            }
            ;
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            }
            ;
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null  != a && a + "queueHooks"
                  , f = n.timers
                  , g = L.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null  != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null  == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
        }
    }),
    n.each({
        slideDown: Ta("show"),
        slideUp: Ta("hide"),
        slideToggle: Ta("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    n.timers = [],
    n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        for (La = n.now(); b < c.length; b++)
            a = c[b],
            a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(),
        La = void 0
    }
    ,
    n.fx.timer = function(a) {
        n.timers.push(a),
        a() ? n.fx.start() : n.timers.pop()
    }
    ,
    n.fx.interval = 13,
    n.fx.start = function() {
        Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
    }
    ,
    n.fx.stop = function() {
        clearInterval(Ma),
        Ma = null 
    }
    ,
    n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    n.fn.delay = function(a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a,
        b = b || "fx",
        this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }
    ,
    function() {
        var a = l.createElement("input")
          , b = l.createElement("select")
          , c = b.appendChild(l.createElement("option"));
        a.type = "checkbox",
        k.checkOn = "" !== a.value,
        k.optSelected = c.selected,
        b.disabled = !0,
        k.optDisabled = !c.disabled,
        a = l.createElement("input"),
        a.value = "t",
        a.type = "radio",
        k.radioValue = "t" === a.value
    }();
    var Ya, Za, $a = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }),
    n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(),
                d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)),
                void 0 === c ? d && "get" in d && null  !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b),
                null  == e ? void 0 : e) : null  !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                c) : void n.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = n.propFix[c] || c,
                    n.expr.match.bool.test(c) && (a[d] = !1),
                    a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        }
    }),
    Za = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c),
            c
        }
    },
    n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $a[b] || n.find.attr;
        $a[b] = function(a, b, d) {
            var e, f;
            return d || (f = $a[b],
            $a[b] = e,
            e = null  != c(a, b, d) ? b.toLowerCase() : null ,
            $a[b] = f),
            e
        }
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }),
    n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !n.isXMLDoc(a),
                f && (b = n.propFix[b] || b,
                e = n.propHooks[b]),
                void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null  !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }),
    k.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex,
            null 
        }
    }),
    n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                        f = 0;
                        while (e = b[f++])
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = n.trim(d),
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0)
                                d = d.replace(" " + e + " ", " ");
                        g = a ? n.trim(d) : "",
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            }
             : function() {
                if ("string" === c) {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            }
            )
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }
    });
    var bb = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a,
                        null  == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null  == a ? "" : a + ""
                        })),
                        b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()],
                        b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()],
                    b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(bb, "") : null  == c ? "" : c)
            }
        }
    }),
    n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null  != b ? b : n.trim(n.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null  : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null  !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)
                        d = e[g],
                        (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        }
    }),
    n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        },
        k.checkOn || (n.valHooks[this].get = function(a) {
            return null  === a.getAttribute("value") ? "on" : a.value
        }
        )
    }),
    n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null , a, c) : this.trigger(b)
        }
    }),
    n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null , b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null , b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cb = n.now()
      , db = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }
    ,
    n.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a)
            return null ;
        try {
            c = new DOMParser,
            b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a),
        b
    }
    ;
    var eb = /#.*$/
      , fb = /([?&])_=[^&]*/
      , gb = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , ib = /^(?:GET|HEAD)$/
      , jb = /^\/\//
      , kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , lb = {}
      , mb = {}
      , nb = "*/".concat("*")
      , ob = a.location.href
      , pb = kb.exec(ob.toLowerCase()) || [];
    function qb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    "+" === d[0] ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function rb(a, b, c, d) {
        var e = {}
          , f = a === mb;
        function g(h) {
            var i;
            return e[h] = !0,
            n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                g(j),
                !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function sb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d),
        a
    }
    function tb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function ub(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ob,
            type: "GET",
            isLocal: hb.test(pb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
        },
        ajaxPrefilter: qb(lb),
        ajaxTransport: qb(mb),
        ajax: function(a, b) {
            "object" == typeof a && (b = a,
            a = void 0),
            b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!f) {
                            f = {};
                            while (b = gb.exec(e))
                                f[b[1].toLowerCase()] = b[2]
                        }
                        b = f[a.toLowerCase()]
                    }
                    return null  == b ? null  : b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? e : null 
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a,
                    r[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return c && c.abort(b),
                    x(0, b),
                    this
                }
            };
            if (o.promise(v).complete = p.add,
            v.success = v.done,
            v.error = v.fail,
            k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"),
            k.type = b.method || b.type || k.method || k.type,
            k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""],
            null  == k.crossDomain && (h = kb.exec(k.url.toLowerCase()),
            k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))),
            k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)),
            rb(lb, k, b, v),
            2 === t)
                return v;
            i = n.event && k.global,
            i && 0 === n.active++ && n.event.trigger("ajaxStart"),
            k.type = k.type.toUpperCase(),
            k.hasContent = !ib.test(k.type),
            d = k.url,
            k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data,
            delete k.data),
            k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)),
            k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]),
            n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])),
            (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType),
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers)
                v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
                return v.abort();
            u = "abort";
            for (j in {
                success: 1,
                error: 1,
                complete: 1
            })
                v[j](k[j]);
            if (c = rb(mb, k, b, v)) {
                v.readyState = 1,
                i && m.trigger("ajaxSend", [v, k]),
                k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1,
                    c.send(r, x)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    x(-1, w)
                }
            } else
                x(-1, "No Transport");
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2,
                g && clearTimeout(g),
                c = void 0,
                e = h || "",
                v.readyState = a > 0 ? 4 : 0,
                j = a >= 200 && 300 > a || 304 === a,
                f && (u = tb(k, v, f)),
                u = ub(k, u, v, j),
                j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"),
                w && (n.lastModified[d] = w),
                w = v.getResponseHeader("etag"),
                w && (n.etag[d] = w)),
                204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state,
                r = u.data,
                s = u.error,
                j = !s)) : (s = x,
                (a || !x) && (x = "error",
                0 > a && (a = 0))),
                v.status = a,
                v.statusText = (b || x) + "",
                j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
                v.statusCode(q),
                q = void 0,
                i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
                p.fireWith(l, [v, x]),
                i && (m.trigger("ajaxComplete", [v, k]),
                --n.active || n.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }),
    n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }),
    n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && b.insertBefore(this[0]),
            b.map(function() {
                var a = this;
                while (a.firstElementChild)
                    a = a.firstElementChild;
                return a
            }).append(this)),
            this)
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b))
            }
             : function() {
                var b = n(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            }
            )
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }
    ,
    n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    }
    ;
    var vb = /%20/g
      , wb = /\[\]$/
      , xb = /\r?\n/g
      , yb = /^(?:submit|button|image|reset|file)$/i
      , zb = /^(?:input|select|textarea|keygen)/i;
    function Ab(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function(b, e) {
                c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== n.type(b))
            d(a, b);
        else
            for (e in b)
                Ab(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null  == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        }
        ;
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
        n.isArray(a) || a.jquery && !n.isPlainObject(a))
            n.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                Ab(c, a[c], b, e);
        return d.join("&").replace(vb, "+")
    }
    ,
    n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null  == c ? null  : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(xb, "\r\n")
                }
            }).get()
        }
    }),
    n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    }
    ;
    var Bb = 0
      , Cb = {}
      , Db = {
        0: 200,
        1223: 204
    }
      , Eb = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Cb)
            Cb[a]()
    }),
    k.cors = !!Eb && "withCredentials" in Eb,
    k.ajax = Eb = !!Eb,
    n.ajaxTransport(function(a) {
        var b;
        return k.cors || Eb && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(), g = ++Bb;
                if (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
                    for (e in a.xhrFields)
                        f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)
                    f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Cb[g],
                        b = f.onload = f.onerror = null ,
                        "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }
                ,
                f.onload = b(),
                f.onerror = b("error"),
                b = Cb[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null )
                } catch (h) {
                    if (b)
                        throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }),
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a),
                a
            }
        }
    }),
    n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET")
    }),
    n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(),
                        c = null ,
                        a && e("error" === a.type ? 404 : 200, a.type)
                    }
                    ),
                    l.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Fb = []
      , Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Fb.pop() || n.expando + "_" + cb++;
            return this[a] = !0,
            a
        }
    }),
    n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            Fb.push(e)),
            g && n.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null ;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || l;
        var d = v.exec(a)
          , e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e),
        e && e.length && n(e).remove(),
        n.merge([], d.childNodes))
    }
    ;
    var Hb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Hb)
            return Hb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)),
        a = a.slice(0, h)),
        n.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }
        ),
        this
    }
    ,
    n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    var Ib = a.document.documentElement;
    function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = n.css(a, "top"),
            i = n.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            n.isFunction(b) && (b = b.call(a, c, h)),
            null  != b.top && (m.top = b.top - h.top + g),
            null  != b.left && (m.left = b.left - h.left + e),
            "using" in b ? b.using.call(a, m) : l.css(m)
        }
    },
    n.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f)
                return b = f.documentElement,
                n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()),
                c = Jb(f),
                {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                n.nodeName(a[0], "html") || (d = a.offset()),
                d.top += n.css(a[0], "borderTopWidth", !0),
                d.left += n.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || Ib;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))
                    a = a.offsetParent;
                return a || Ib
            })
        }
    }),
    n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Jb(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null )
        }
    }),
    n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = ya(k.pixelPosition, function(a, c) {
            return c ? (c = xa(a, b),
            va.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }),
    n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null )
            }
        })
    }),
    n.fn.size = function() {
        return this.length
    }
    ,
    n.fn.andSelf = n.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Kb = a.jQuery
      , Lb = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Lb),
        b && a.jQuery === n && (a.jQuery = Kb),
        n
    }
    ,
    typeof b === U && (a.jQuery = a.$ = n),
    n
});
//# sourceMappingURL=jquery.min.map
/**
 * @author Leechy (leechy@leechy.ru)
 * @link www.artlebedev.ru
 * @requires jQuery
 *
 * Description:
 * gradientText is a jQuery plugin that paints text in gradient colors
 *
 * Usage:
 * $(selector).gradientText(config);
 *
 * config is an object contents configuraton paramenters:
 * 	{Array} colors - array of hex colors, e.g. ['#000000', '#FFFFFF'];
 * 	{Array} toProcess - array of jQuery selectors, matched elements will be toProcessed
 */

(function($) {
    // Параметры по умолчанию
    $.gradientText = $.gradientText || {
        version: '1.0'
    };
    
    $.gradientText.conf = {
        colors: ['#5f3db6', '#c10000'],
        toProcess: []
    };
    
    $.gradientTextSetup = function(conf) {
        $.extend($.gradientText.conf, conf);
    }
    ;
    
    $.fn.gradientText = function(conf) {
        
        // already constructed --> return API
        var el = this.data("gradientText");
        if (el) {
            return el;
        }
        
        // concatinate defined conf object with the user's one
        if (!conf) {
            conf = $.gradientText.conf;
        } else {
            if (typeof (conf.colors) == 'undefined') {
                conf.colors = $.gradientText.conf.colors;
            }
        }
        
        var aLetters = [];
        
        this.each(function(i) {
            aLetters[i] = new GradientLetters($(this),conf);
            $(this).data("gradientText", aLetters[i]);
        });
        
        $(window).load(function() {
            var iLetters_amount = aLetters.length;
            for (var i = 0; i < iLetters_amount; i++) {
                aLetters[i].update();
            }
        });
        
        return conf.api ? el : this;
    }
    ;
    
    
    function GradientLetters(jContainer, conf) {
        /**
		 * 	Если плагин уже поработал над элементом,
		 * 	то заново дробить его не нужно
		 */
        if (jContainer.find('span.gr-text').size() == 0) {
            /**
			 * 	getting nodes, good enough
			 * 	to be spliced in letters
			 */
            var jTextNodes = jContainer.contents().filter(function() {
                return ( this.nodeType == 3 && /\S/.test(this.nodeValue)) 
            }).wrap('<span class="gr-text" />');
            
            if (typeof (conf.toProcess) != 'undefined') {
                var tags = conf.toProcess.toString();
                
                if (tags) {
                    jTextNodes = jContainer.find(tags).contents().filter(function() {
                        return ( this.nodeType == 3 && /\S/.test(this.nodeValue)) 
                    }).wrap('<span class="gr-text" />');
                }
            }
            
            /**
			 * 	width of the content can be less than jContainer's width
			 * 	that's why we have to use inline wrapper like span
			 */
            jContainer.html('<span class="gr-wrap">' + jContainer.html() + '</span>');
            jContainer = jContainer.find('.gr-wrap');
            
            /**
			*	Оборачиваем каждую букву в span.gr-letter.
			*	Пробелы заменяем на пробел нулевой ширины
			*/
            jContainer.find('span.gr-text').each(function() {
                var aText = $(this).text().split('');
                var sHTML = '';
                var iText_amount = aText.length;
                
                for (var i = 0; i < iText_amount; i++) {
                    if (aText[i] != ' ') {
                        sHTML += '<span class="gr-letter">' + aText[i] + '</span>';
                    } else {
                        sHTML += '<span class="gr-letter"><span style="display:none;">&#8203;</span> </span>';
                    }
                }
                $(this).html(sHTML);
            });
        }
        
        var jWords = jContainer.find('span.gr-text');
        var jLetters = jContainer.find('span.gr-letter');
        var iHeight = 0;
        
        // Convert defined hex colors to rgb-colors
        conf.RGBcolors = [];
        for (var i = 0; i < conf.colors.length; i++)
            conf.RGBcolors[i] = hex2Rgb(conf.colors[i]);
        
        /**
		 * 	Measurer — некий объект, который понимает не только когда изменяется ширина окна,
		 * 	но и когда меняется размер шрифта.
		 *
		 * 	Плагин использует:
		 *	- jcommon, если он есть;
		 *	- measurer, если нет jcommon и подключен файл с measurer,
		 *	- resize, если по какой-то причине ни того, ни другого не обнаружено.
		 */
        if (typeof ($c) != 'undefined')
            $c.measurer.bind(updateColors);
        else if (typeof ($measurer) != 'undefined')
            $measurer.bind(updateColors);
        else
            $(window).resize(updateColors);
        
        PaintUnderlines();
        
        function updateColors() {
            var iRootLeftOffset = Math.round(jContainer[0].offsetLeft)
              , 
            iRootWidth = getMaxRootWidth(iRootLeftOffset)
              , 
            jLetters_amount = jLetters.size();
            
            if (iRootWidth < 200)
                iRootWidth = 200;
            
            for (var i = jLetters_amount; i--; ) {
                jLetters[i].style.color = getColor(Math.round(jLetters[i].offsetLeft - iRootLeftOffset), iRootWidth);
            }
        }
        
        function getMaxRootWidth(iRootLeftOffset) {
            var iMaxWidth = 0;
            jWords.each(function(index) {
                var iRightEdge = Math.round(this.offsetWidth + this.offsetLeft) - iRootLeftOffset;
                if (iRightEdge > iMaxWidth)
                    iMaxWidth = iRightEdge;
            });
            return iMaxWidth;
        }
        
        function getColor(iLeftOffset, iRootWidth) {
            var 
            fLeft = (iLeftOffset > 0) ? (iLeftOffset / iRootWidth) : 0;
            for (var i = 0; i < conf.colors.length; i++) {
                fStopPosition = (i / (conf.colors.length - 1));
                fLastPosition = (i > 0) ? ((i - 1) / (conf.colors.length - 1)) : 0;
                
                if (fLeft == fStopPosition) {
                    return conf.colors[i];
                } else if (fLeft < fStopPosition) {
                    fCurrentStop = (fLeft - fLastPosition) / (fStopPosition - fLastPosition);
                    return getMidColor(conf.RGBcolors[i - 1], conf.RGBcolors[i], fCurrentStop);
                }
            }
            return conf.colors[conf.colors.length - 1];
        }
        
        function getMidColor(aStart, aEnd, fMidStop) {
            var aRGBColor = [];
            
            for (var i = 0; i < 3; i++) {
                aRGBColor[i] = aStart[i] + Math.round((aEnd[i] - aStart[i]) * fMidStop)
            }
            
            return rgb2Hex(aRGBColor)
        }
        
        
        /**
		* To paint underline of gradiented text in right colors
		* every .gr-letter element has to have css rule:
		* 	text-decoration: underline;
		* so this function searching for .gr-text that is child
		* of underlined element
		*/
        function PaintUnderlines() {
            /* When gradiented element contains underlined child */
            jContainer.find('.gr-text').each(function() {
                if ($(this).parent().css('text-decoration') == 'underline') {
                    $(this).parent().find('.gr-letter').css('text-decoration', 'underline');
                }
            });
            
            /* When gradiented element is underlined */
            if (jContainer.parent().css('text-decoration') == 'underline') {
                jContainer.find('.gr-letter').css('text-decoration', 'underline');
            }
        }
        
        return {
            update: updateColors
        }
    }
    
    /**
	 * Преобразует HEX-представление цвета в RGB.
	 * @param {String} hex
	 * @return {Array}
	 */
    function hex2Rgb(hex) {
        if ('#' == hex.substr(0, 1)) {
            hex = hex.substr(1);
        }
        if (3 == hex.length) {
            hex = hex.substr(0, 1) + hex.substr(0, 1) + hex.substr(1, 1) + hex.substr(1, 1) + hex.substr(2, 1) + hex.substr(2, 1);
        }
        
        return [parseInt(hex.substr(0, 2), 16), parseInt(hex.substr(2, 2), 16), parseInt(hex.substr(4, 2), 16)];
    }
    
    /**
	 * Преобразует RGB-представление цвета в HEX.
	 * @param {Array} rgb
	 * @return {String}
	 */
    function rgb2Hex(rgb) {
        var s = '0123456789abcdef';
        
        return '#' + s.charAt(parseInt(rgb[0] / 16)) + s.charAt(rgb[0] % 16) + s.charAt(parseInt(rgb[1] / 16)) + 
        s.charAt(rgb[1] % 16) + s.charAt(parseInt(rgb[2] / 16)) + s.charAt(rgb[2] % 16);
    }
})(jQuery);
/**
 * Оджинали аппиаред ин джейКоммон
 *
 * @author Vlad Yakovlev (red.scorpix@gmail.com)
 * @copyright Art.Lebedev Studio (http://www.artlebedev.ru)
 * @version 0.3 alpha 7
 * @date 2009-12-29
 * @requires jQuery 1.3.2
 *
 * Отслеживает изменение размеров окна браузера и масштабирование текста.
 * Отслеживание запускается только при добавлении первого хэндлера.
 *
 * @example
 * function funcBind() { alert('yoop'); }
 * measurer.bind(funcBind);
 * @description Теперь функция будет выполняться всякий раз, когда изменится размер окна браузера или размер текста.
 * measurer.unbind(funcBind);
 * @description А теперь — нет.
 *
 * @version 1.0
 */
$measurer = function() {
    
    var 
    callbacks = [], 
    interval = 500, 
    curHeight, 
    el = null , 
    isInit = false, 
    isDocReady = false;
    
    $(function() {
        isDocReady = true;
        isInit && initBlock();
    });
    
    function createBlock() {
        if (el == null ) {
            el = $('<div></div>').css('height', '1em').css('left', '0').css('lineHeight', '1em').css('margin', '0').
            css('position', 'absolute').css('padding', '0').css('top', '-1em').css('visibility', 'hidden').
            css('width', '1em').appendTo('body');
            
            curHeight = el.height();
        }
    }
    
    function getHeight() {
        return curHeight;
    }
    
    function initBlock() {
        createBlock();
        
        $(window).resize(callFuncs);
        
        /**
		 * В IE событие <code>onresize</code> срабатывает и на элементах.
		 */
        // if ($.browser.msie) {
        // 	el.resize(callFuncs);
        // 	return;
        // }
        
        /**
		 * Для остальных браузеров периодически проверяем изменение размера текста.
		 */
        curHeight = el.height();
        setInterval(function() {
            var newHeight = el.height();
            
            if (newHeight != curHeight) {
                curHeight = newHeight;
                callFuncs();
            }
        }, interval);
    }
    
    function callFuncs() {
        for (var i = 0; i < callbacks.length; i++) {
            callbacks[i]();
        }
    }
    
    return {
        /**
		 * Ручная инициализация события изменения размеров элементов на странице.
		 */
        resize: callFuncs,
        
        /**
		 * Добавляет обработчик события.
		 * @param {Function} func Ссылка на функцию, которую нужно выполнить.
		 */
        bind: function(func) {
            if (!el) {
                isInit = true;
                isDocReady && initBlock();
            }
            
            callbacks.push(func);
        },
        
        /**
		 * Удаляет обработчик события.
		 */
        unbind: function(func) {
            for (var i = 0; i < callbacks.length; i++) {
                callbacks[i] == func && callbacks.splice(i, 1);
            }
        },
        
        getHeight: getHeight,
        createBlock: createBlock
    };
}();
/*!
 * VERSION: 1.18.2
 * DATE: 2015-12-22
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
        var d = function(a) {
            var b, c = [], d = a.length;
            for (b = 0; b !== d; c.push(a[b++]))
                ;
            return c
        }
          , e = function(a, b, c) {
            var d, e, f = a.cycle;
            for (d in f)
                e = f[d],
                a[d] = "function" == typeof e ? e.call(b[c], c) : e[c % e.length];
            delete a.cycle
        }
          , f = function(a, b, d) {
            c.call(this, a, b, d),
            this._cycle = 0,
            this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._dirty = !0,
            this.render = f.prototype.render
        }
          , g = 1e-10
          , h = c._internals
          , i = h.isSelector
          , j = h.isArray
          , k = f.prototype = c.to({}, .1, {})
          , l = [];
        f.version = "1.18.2",
        k.constructor = f,
        k.kill()._gc = !1,
        f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf,
        f.getTweensOf = c.getTweensOf,
        f.lagSmoothing = c.lagSmoothing,
        f.ticker = c.ticker,
        f.render = c.render,
        k.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            c.prototype.invalidate.call(this)
        }
        ,
        k.updateTo = function(a, b) {
            var d, e = this.ratio, f = this.vars.immediateRender || a.immediateRender;
            b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,
            this._uncache(!1),
            this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (d in a)
                this.vars[d] = a[d];
            if (this._initted || f)
                if (b)
                    this._initted = !1,
                    f && this.render(0, !0, !0);
                else if (this._gc && this._enabled(!0, !1),
                this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this),
                this._time / this._duration > .998) {
                    var g = this._totalTime;
                    this.render(0, !0, !1),
                    this._initted = !1,
                    this.render(g, !0, !1)
                } else if (this._initted = !1,
                this._init(),
                this._time > 0 || f)
                    for (var h, i = 1 / (1 - e), j = this._firstPT; j; )
                        h = j.s + j.c,
                        j.c *= i,
                        j.s = h - j.c,
                        j = j._next;
            return this
        }
        ,
        k.render = function(a, b, c) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var d, e, f, i, j, k, l, m, n = this._dirty ? this.totalDuration() : this._totalDuration, o = this._time, p = this._totalTime, q = this._cycle, r = this._duration, s = this._rawPrevTime;
            if (a >= n - 1e-7 ? (this._totalTime = n,
            this._cycle = this._repeat,
            this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = r,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
            this._reversed || (d = !0,
            e = "onComplete",
            c = c || this._timeline.autoRemoveChildren),
            0 === r && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0),
            (0 > s || 0 >= a && a >= -1e-7 || s === g && "isPause" !== this.data) && s !== a && (c = !0,
            s > g && (e = "onReverseComplete")),
            this._rawPrevTime = m = !b || a || s === a ? a : g)) : 1e-7 > a ? (this._totalTime = this._time = this._cycle = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== p || 0 === r && s > 0) && (e = "onReverseComplete",
            d = this._reversed),
            0 > a && (this._active = !1,
            0 === r && (this._initted || !this.vars.lazy || c) && (s >= 0 && (c = !0),
            this._rawPrevTime = m = !b || a || s === a ? a : g)),
            this._initted || (c = !0)) : (this._totalTime = this._time = a,
            0 !== this._repeat && (i = r + this._repeatDelay,
            this._cycle = this._totalTime / i >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / i && this._cycle--,
            this._time = this._totalTime - this._cycle * i,
            this._yoyo && 0 !== (1 & this._cycle) && (this._time = r - this._time),
            this._time > r ? this._time = r : this._time < 0 && (this._time = 0)),
            this._easeType ? (j = this._time / r,
            k = this._easeType,
            l = this._easePower,
            (1 === k || 3 === k && j >= .5) && (j = 1 - j),
            3 === k && (j *= 2),
            1 === l ? j *= j : 2 === l ? j *= j * j : 3 === l ? j *= j * j * j : 4 === l && (j *= j * j * j * j),
            1 === k ? this.ratio = 1 - j : 2 === k ? this.ratio = j : this._time / r < .5 ? this.ratio = j / 2 : this.ratio = 1 - j / 2) : this.ratio = this._ease.getRatio(this._time / r)),
            o === this._time && !c && q === this._cycle)
                return void (p !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
            if (!this._initted) {
                if (this._init(),
                !this._initted || this._gc)
                    return;
                if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                    return this._time = o,
                    this._totalTime = p,
                    this._rawPrevTime = s,
                    this._cycle = q,
                    h.lazyTweens.push(this),
                    void (this._lazy = [a, b]);
                this._time && !d ? this.ratio = this._ease.getRatio(this._time / r) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1),
            this._active || !this._paused && this._time !== o && a >= 0 && (this._active = !0),
            0 === p && (2 === this._initted && a > 0 && this._init(),
            this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")),
            this.vars.onStart && (0 !== this._totalTime || 0 === r) && (b || this._callback("onStart"))),
            f = this._firstPT; f; )
                f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s,
                f = f._next;
            this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c),
            b || (this._totalTime !== p || d) && this._callback("onUpdate")),
            this._cycle !== q && (b || this._gc || this.vars.onRepeat && this._callback("onRepeat")),
            e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c),
            d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
            this._active = !1),
            !b && this.vars[e] && this._callback(e),
            0 === r && this._rawPrevTime === g && m !== g && (this._rawPrevTime = 0))
        }
        ,
        f.to = function(a, b, c) {
            return new f(a,b,c)
        }
        ,
        f.from = function(a, b, c) {
            return c.runBackwards = !0,
            c.immediateRender = 0 != c.immediateRender,
            new f(a,b,c)
        }
        ,
        f.fromTo = function(a, b, c, d) {
            return d.startAt = c,
            d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,
            new f(a,b,d)
        }
        ,
        f.staggerTo = f.allTo = function(a, b, g, h, k, m, n) {
            h = h || 0;
            var o, p, q, r, s = 0, t = [], u = function() {
                g.onComplete && g.onComplete.apply(g.onCompleteScope || this, arguments),
                k.apply(n || g.callbackScope || this, m || l)
            }
            , v = g.cycle, w = g.startAt && g.startAt.cycle;
            for (j(a) || ("string" == typeof a && (a = c.selector(a) || a),
            i(a) && (a = d(a))),
            a = a || [],
            0 > h && (a = d(a),
            a.reverse(),
            h *= -1),
            o = a.length - 1,
            q = 0; o >= q; q++) {
                p = {};
                for (r in g)
                    p[r] = g[r];
                if (v && e(p, a, q),
                w) {
                    w = p.startAt = {};
                    for (r in g.startAt)
                        w[r] = g.startAt[r];
                    e(p.startAt, a, q)
                }
                p.delay = s + (p.delay || 0),
                q === o && k && (p.onComplete = u),
                t[q] = new f(a[q],b,p),
                s += h
            }
            return t
        }
        ,
        f.staggerFrom = f.allFrom = function(a, b, c, d, e, g, h) {
            return c.runBackwards = !0,
            c.immediateRender = 0 != c.immediateRender,
            f.staggerTo(a, b, c, d, e, g, h)
        }
        ,
        f.staggerFromTo = f.allFromTo = function(a, b, c, d, e, g, h, i) {
            return d.startAt = c,
            d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,
            f.staggerTo(a, b, d, e, g, h, i)
        }
        ,
        f.delayedCall = function(a, b, c, d, e) {
            return new f(b,0,{
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                callbackScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                immediateRender: !1,
                useFrames: e,
                overwrite: 0
            })
        }
        ,
        f.set = function(a, b) {
            return new f(a,0,b)
        }
        ,
        f.isTweening = function(a) {
            return c.getTweensOf(a, !0).length > 0
        }
        ;
        var m = function(a, b) {
            for (var d = [], e = 0, f = a._first; f; )
                f instanceof c ? d[e++] = f : (b && (d[e++] = f),
                d = d.concat(m(f, b)),
                e = d.length),
                f = f._next;
            return d
        }
          , n = f.getAllTweens = function(b) {
            return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b))
        }
        ;
        f.killAll = function(a, c, d, e) {
            null  == c && (c = !0),
            null  == d && (d = !0);
            var f, g, h, i = n(0 != e), j = i.length, k = c && d && e;
            for (h = 0; j > h; h++)
                g = i[h],
                (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1))
        }
        ,
        f.killChildTweensOf = function(a, b) {
            if (null  != a) {
                var e, g, k, l, m, n = h.tweenLookup;
                if ("string" == typeof a && (a = c.selector(a) || a),
                i(a) && (a = d(a)),
                j(a))
                    for (l = a.length; --l > -1; )
                        f.killChildTweensOf(a[l], b);
                else {
                    e = [];
                    for (k in n)
                        for (g = n[k].target.parentNode; g; )
                            g === a && (e = e.concat(n[k].tweens)),
                            g = g.parentNode;
                    for (m = e.length,
                    l = 0; m > l; l++)
                        b && e[l].totalTime(e[l].totalDuration()),
                        e[l]._enabled(!1, !1)
                }
            }
        }
        ;
        var o = function(a, c, d, e) {
            c = c !== !1,
            d = d !== !1,
            e = e !== !1;
            for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1; )
                g = h[j],
                (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a)
        }
        ;
        return f.pauseAll = function(a, b, c) {
            o(!0, a, b, c)
        }
        ,
        f.resumeAll = function(a, b, c) {
            o(!1, a, b, c)
        }
        ,
        f.globalTimeScale = function(b) {
            var d = a._rootTimeline
              , e = c.ticker.time;
            return arguments.length ? (b = b || g,
            d._startTime = e - (e - d._startTime) * d._timeScale / b,
            d = a._rootFramesTimeline,
            e = c.ticker.frame,
            d._startTime = e - (e - d._startTime) * d._timeScale / b,
            d._timeScale = a._rootTimeline._timeScale = b,
            b) : d._timeScale
        }
        ,
        k.progress = function(a) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }
        ,
        k.totalProgress = function(a) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
        }
        ,
        k.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            a > this._duration && (a = this._duration),
            this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(a, b)) : this._time
        }
        ,
        k.duration = function(b) {
            return arguments.length ? a.prototype.duration.call(this, b) : this._duration
        }
        ,
        k.totalDuration = function(a) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
            this._dirty = !1),
            this._totalDuration)
        }
        ,
        k.repeat = function(a) {
            return arguments.length ? (this._repeat = a,
            this._uncache(!0)) : this._repeat
        }
        ,
        k.repeatDelay = function(a) {
            return arguments.length ? (this._repeatDelay = a,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        k.yoyo = function(a) {
            return arguments.length ? (this._yoyo = a,
            this) : this._yoyo
        }
        ,
        f
    }, !0),
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
        var d = function(a) {
            b.call(this, a),
            this._labels = {},
            this.autoRemoveChildren = this.vars.autoRemoveChildren === !0,
            this.smoothChildTiming = this.vars.smoothChildTiming === !0,
            this._sortChildren = !0,
            this._onUpdate = this.vars.onUpdate;
            var c, d, e = this.vars;
            for (d in e)
                c = e[d],
                i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
            i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
        }
          , e = 1e-10
          , f = c._internals
          , g = d._internals = {}
          , h = f.isSelector
          , i = f.isArray
          , j = f.lazyTweens
          , k = f.lazyRender
          , l = _gsScope._gsDefine.globals
          , m = function(a) {
            var b, c = {};
            for (b in a)
                c[b] = a[b];
            return c
        }
          , n = function(a, b, c) {
            var d, e, f = a.cycle;
            for (d in f)
                e = f[d],
                a[d] = "function" == typeof e ? e.call(b[c], c) : e[c % e.length];
            delete a.cycle
        }
          , o = g.pauseCallback = function() {}
          , p = function(a) {
            var b, c = [], d = a.length;
            for (b = 0; b !== d; c.push(a[b++]))
                ;
            return c
        }
          , q = d.prototype = new b;
        return d.version = "1.18.2",
        q.constructor = d,
        q.kill()._gc = q._forcingPlayhead = q._hasPause = !1,
        q.to = function(a, b, d, e) {
            var f = d.repeat && l.TweenMax || c;
            return b ? this.add(new f(a,b,d), e) : this.set(a, d, e)
        }
        ,
        q.from = function(a, b, d, e) {
            return this.add((d.repeat && l.TweenMax || c).from(a, b, d), e)
        }
        ,
        q.fromTo = function(a, b, d, e, f) {
            var g = e.repeat && l.TweenMax || c;
            return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
        }
        ,
        q.staggerTo = function(a, b, e, f, g, i, j, k) {
            var l, o, q = new d({
                onComplete: i,
                onCompleteParams: j,
                callbackScope: k,
                smoothChildTiming: this.smoothChildTiming
            }), r = e.cycle;
            for ("string" == typeof a && (a = c.selector(a) || a),
            a = a || [],
            h(a) && (a = p(a)),
            f = f || 0,
            0 > f && (a = p(a),
            a.reverse(),
            f *= -1),
            o = 0; o < a.length; o++)
                l = m(e),
                l.startAt && (l.startAt = m(l.startAt),
                l.startAt.cycle && n(l.startAt, a, o)),
                r && n(l, a, o),
                q.to(a[o], b, l, o * f);
            return this.add(q, g)
        }
        ,
        q.staggerFrom = function(a, b, c, d, e, f, g, h) {
            return c.immediateRender = 0 != c.immediateRender,
            c.runBackwards = !0,
            this.staggerTo(a, b, c, d, e, f, g, h)
        }
        ,
        q.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
            return d.startAt = c,
            d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,
            this.staggerTo(a, b, d, e, f, g, h, i)
        }
        ,
        q.call = function(a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e)
        }
        ,
        q.set = function(a, b, d) {
            return d = this._parseTimeOrLabel(d, 0, !0),
            null  == b.immediateRender && (b.immediateRender = d === this._time && !this._paused),
            this.add(new c(a,0,b), d)
        }
        ,
        d.exportRoot = function(a, b) {
            a = a || {},
            null  == a.smoothChildTiming && (a.smoothChildTiming = !0);
            var e, f, g = new d(a), h = g._timeline;
            for (null  == b && (b = !0),
            h._remove(g, !0),
            g._startTime = 0,
            g._rawPrevTime = g._time = g._totalTime = h._time,
            e = h._first; e; )
                f = e._next,
                b && e instanceof c && e.target === e.vars.onComplete || g.add(e, e._startTime - e._delay),
                e = f;
            return h.add(g, 0),
            g
        }
        ,
        q.add = function(e, f, g, h) {
            var j, k, l, m, n, o;
            if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)),
            !(e instanceof a)) {
                if (e instanceof Array || e && e.push && i(e)) {
                    for (g = g || "normal",
                    h = h || 0,
                    j = f,
                    k = e.length,
                    l = 0; k > l; l++)
                        i(m = e[l]) && (m = new d({
                            tweens: m
                        })),
                        this.add(m, j),
                        "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())),
                        j += h;
                    return this._uncache(!0)
                }
                if ("string" == typeof e)
                    return this.addLabel(e, f);
                if ("function" != typeof e)
                    throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                e = c.delayedCall(0, e)
            }
            if (b.prototype.add.call(this, e, f),
            (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (n = this,
                o = n.rawTime() > e._startTime; n._timeline; )
                    o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1),
                    n = n._timeline;
            return this
        }
        ,
        q.remove = function(b) {
            if (b instanceof a) {
                this._remove(b, !1);
                var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
                return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale,
                this
            }
            if (b instanceof Array || b && b.push && i(b)) {
                for (var d = b.length; --d > -1; )
                    this.remove(b[d]);
                return this
            }
            return "string" == typeof b ? this.removeLabel(b) : this.kill(null , b)
        }
        ,
        q._remove = function(a, c) {
            b.prototype._remove.call(this, a, c);
            var d = this._last;
            return d ? this._time > d._startTime + d._totalDuration / d._timeScale && (this._time = this.duration(),
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        }
        ,
        q.append = function(a, b) {
            return this.add(a, this._parseTimeOrLabel(null , b, !0, a))
        }
        ,
        q.insert = q.insertMultiple = function(a, b, c, d) {
            return this.add(a, b || 0, c, d)
        }
        ,
        q.appendMultiple = function(a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null , b, !0, a), c, d)
        }
        ,
        q.addLabel = function(a, b) {
            return this._labels[a] = this._parseTimeOrLabel(b),
            this
        }
        ,
        q.addPause = function(a, b, d, e) {
            var f = c.delayedCall(0, o, d, e || this);
            return f.vars.onComplete = f.vars.onReverseComplete = b,
            f.data = "isPause",
            this._hasPause = !0,
            this.add(f, a)
        }
        ,
        q.removeLabel = function(a) {
            return delete this._labels[a],
            this
        }
        ,
        q.getLabelTime = function(a) {
            return null  != this._labels[a] ? this._labels[a] : -1
        }
        ,
        q._parseTimeOrLabel = function(b, c, d, e) {
            var f;
            if (e instanceof a && e.timeline === this)
                this.remove(e);
            else if (e && (e instanceof Array || e.push && i(e)))
                for (f = e.length; --f > -1; )
                    e[f] instanceof a && e[f].timeline === this && this.remove(e[f]);
            if ("string" == typeof c)
                return this._parseTimeOrLabel(c, d && "number" == typeof b && null  == this._labels[c] ? b - this.duration() : 0, d);
            if (c = c || 0,
            "string" != typeof b || !isNaN(b) && null  == this._labels[b])
                null  == b && (b = this.duration());
            else {
                if (f = b.indexOf("="),
                -1 === f)
                    return null  == this._labels[b] ? d ? this._labels[b] = this.duration() + c : c : this._labels[b] + c;
                c = parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1)),
                b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration()
            }
            return Number(b) + c
        }
        ,
        q.seek = function(a, b) {
            return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
        }
        ,
        q.stop = function() {
            return this.paused(!0)
        }
        ,
        q.gotoAndPlay = function(a, b) {
            return this.play(a, b)
        }
        ,
        q.gotoAndStop = function(a, b) {
            return this.pause(a, b)
        }
        ,
        q.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d, f, g, h, i, l, m, n = this._dirty ? this.totalDuration() : this._totalDuration, o = this._time, p = this._startTime, q = this._timeScale, r = this._paused;
            if (a >= n - 1e-7)
                this._totalTime = this._time = n,
                this._reversed || this._hasPausedChild() || (f = !0,
                h = "onComplete",
                i = !!this._timeline.autoRemoveChildren,
                0 === this._duration && (0 >= a && a >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (i = !0,
                this._rawPrevTime > e && (h = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e,
                a = n + 1e-4;
            else if (1e-7 > a)
                if (this._totalTime = this._time = 0,
                (0 !== o || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete",
                f = this._reversed),
                0 > a)
                    this._active = !1,
                    this._timeline.autoRemoveChildren && this._reversed ? (i = f = !0,
                    h = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (i = !0),
                    this._rawPrevTime = a;
                else {
                    if (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e,
                    0 === a && f)
                        for (d = this._first; d && 0 === d._startTime; )
                            d._duration || (f = !1),
                            d = d._next;
                    a = 0,
                    this._initted || (i = !0)
                }
            else {
                if (this._hasPause && !this._forcingPlayhead && !b) {
                    if (a >= o)
                        for (d = this._first; d && d._startTime <= a && !l; )
                            d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (l = d),
                            d = d._next;
                    else
                        for (d = this._last; d && d._startTime >= a && !l; )
                            d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d),
                            d = d._prev;
                    l && (this._time = a = l._startTime,
                    this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = a
            }
            if (this._time !== o && this._first || c || i || l) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._time !== o && a > 0 && (this._active = !0),
                0 === o && this.vars.onStart && 0 !== this._time && (b || this._callback("onStart")),
                m = this._time,
                m >= o)
                    for (d = this._first; d && (g = d._next,
                    m === this._time && (!this._paused || r)); )
                        (d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && this.pause(),
                        d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)),
                        d = g;
                else
                    for (d = this._last; d && (g = d._prev,
                    m === this._time && (!this._paused || r)); ) {
                        if (d._active || d._startTime <= o && !d._paused && !d._gc) {
                            if (l === d) {
                                for (l = d._prev; l && l.endTime() > this._time; )
                                    l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c),
                                    l = l._prev;
                                l = null ,
                                this.pause()
                            }
                            d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                        }
                        d = g
                    }
                this._onUpdate && (b || (j.length && k(),
                this._callback("onUpdate"))),
                h && (this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || n >= this.totalDuration()) && (f && (j.length && k(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !b && this.vars[h] && this._callback(h)))
            }
        }
        ,
        q._hasPausedChild = function() {
            for (var a = this._first; a; ) {
                if (a._paused || a instanceof d && a._hasPausedChild())
                    return !0;
                a = a._next
            }
            return !1
        }
        ,
        q.getChildren = function(a, b, d, e) {
            e = e || -9999999999;
            for (var f = [], g = this._first, h = 0; g; )
                g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g),
                a !== !1 && (f = f.concat(g.getChildren(!0, b, d)),
                h = f.length))),
                g = g._next;
            return f
        }
        ,
        q.getTweensOf = function(a, b) {
            var d, e, f = this._gc, g = [], h = 0;
            for (f && this._enabled(!0, !0),
            d = c.getTweensOf(a),
            e = d.length; --e > -1; )
                (d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
            return f && this._enabled(!1, !0),
            g
        }
        ,
        q.recent = function() {
            return this._recent
        }
        ,
        q._contains = function(a) {
            for (var b = a.timeline; b; ) {
                if (b === this)
                    return !0;
                b = b.timeline
            }
            return !1
        }
        ,
        q.shiftChildren = function(a, b, c) {
            c = c || 0;
            for (var d, e = this._first, f = this._labels; e; )
                e._startTime >= c && (e._startTime += a),
                e = e._next;
            if (b)
                for (d in f)
                    f[d] >= c && (f[d] += a);
            return this._uncache(!0)
        }
        ,
        q._kill = function(a, b) {
            if (!a && !b)
                return this._enabled(!1, !1);
            for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1; )
                c[d]._kill(a, b) && (e = !0);
            return e
        }
        ,
        q.clear = function(a) {
            var b = this.getChildren(!1, !0, !0)
              , c = b.length;
            for (this._time = this._totalTime = 0; --c > -1; )
                b[c]._enabled(!1, !1);
            return a !== !1 && (this._labels = {}),
            this._uncache(!0)
        }
        ,
        q.invalidate = function() {
            for (var b = this._first; b; )
                b.invalidate(),
                b = b._next;
            return a.prototype.invalidate.call(this)
        }
        ,
        q._enabled = function(a, c) {
            if (a === this._gc)
                for (var d = this._first; d; )
                    d._enabled(a, !0),
                    d = d._next;
            return b.prototype._enabled.call(this, a, c)
        }
        ,
        q.totalTime = function(b, c, d) {
            this._forcingPlayhead = !0;
            var e = a.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            e
        }
        ,
        q.duration = function(a) {
            return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a),
            this) : (this._dirty && this.totalDuration(),
            this._duration)
        }
        ,
        q.totalDuration = function(a) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var b, c, d = 0, e = this._last, f = 999999999999; e; )
                        b = e._prev,
                        e._dirty && e.totalDuration(),
                        e._startTime > f && this._sortChildren && !e._paused ? this.add(e, e._startTime - e._delay) : f = e._startTime,
                        e._startTime < 0 && !e._paused && (d -= e._startTime,
                        this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale),
                        this.shiftChildren(-e._startTime, !1, -9999999999),
                        f = 0),
                        c = e._startTime + e._totalDuration / e._timeScale,
                        c > d && (d = c),
                        e = b;
                    this._duration = this._totalDuration = d,
                    this._dirty = !1
                }
                return this._totalDuration
            }
            return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this
        }
        ,
        q.paused = function(b) {
            if (!b)
                for (var c = this._first, d = this._time; c; )
                    c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0),
                    c = c._next;
            return a.prototype.paused.apply(this, arguments)
        }
        ,
        q.usesFrames = function() {
            for (var b = this._timeline; b._timeline; )
                b = b._timeline;
            return b === a._rootFramesTimeline
        }
        ,
        q.rawTime = function() {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }
        ,
        d
    }, !0),
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(a, b, c) {
        var d = function(b) {
            a.call(this, b),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = this.vars.yoyo === !0,
            this._dirty = !0
        }
          , e = 1e-10
          , f = b._internals
          , g = f.lazyTweens
          , h = f.lazyRender
          , i = new c(null ,null ,1,0)
          , j = d.prototype = new a;
        return j.constructor = d,
        j.kill()._gc = !1,
        d.version = "1.18.2",
        j.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            a.prototype.invalidate.call(this)
        }
        ,
        j.addCallback = function(a, c, d, e) {
            return this.add(b.delayedCall(0, a, d, e), c)
        }
        ,
        j.removeCallback = function(a, b) {
            if (a)
                if (null  == b)
                    this._kill(null , a);
                else
                    for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1; )
                        c[d]._startTime === e && c[d]._enabled(!1, !1);
            return this
        }
        ,
        j.removePause = function(b) {
            return this.removeCallback(a._internals.pauseCallback, b)
        }
        ,
        j.tweenTo = function(a, c) {
            c = c || {};
            var d, e, f, g = {
                ease: i,
                useFrames: this.usesFrames(),
                immediateRender: !1
            };
            for (e in c)
                g[e] = c[e];
            return g.time = this._parseTimeOrLabel(a),
            d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001,
            f = new b(this,d,g),
            g.onStart = function() {
                f.target.paused(!0),
                f.vars.time !== f.target.time() && d === f.duration() && f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale),
                c.onStart && f._callback("onStart")
            }
            ,
            f
        }
        ,
        j.tweenFromTo = function(a, b, c) {
            c = c || {},
            a = this._parseTimeOrLabel(a),
            c.startAt = {
                onComplete: this.seek,
                onCompleteParams: [a],
                callbackScope: this
            },
            c.immediateRender = c.immediateRender !== !1;
            var d = this.tweenTo(b, c);
            return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
        }
        ,
        j.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d, f, i, j, k, l, m, n, o = this._dirty ? this.totalDuration() : this._totalDuration, p = this._duration, q = this._time, r = this._totalTime, s = this._startTime, t = this._timeScale, u = this._rawPrevTime, v = this._paused, w = this._cycle;
            if (a >= o - 1e-7)
                this._locked || (this._totalTime = o,
                this._cycle = this._repeat),
                this._reversed || this._hasPausedChild() || (f = !0,
                j = "onComplete",
                k = !!this._timeline.autoRemoveChildren,
                0 === this._duration && (0 >= a && a >= -1e-7 || 0 > u || u === e) && u !== a && this._first && (k = !0,
                u > e && (j = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e,
                this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = p,
                a = p + 1e-4);
            else if (1e-7 > a)
                if (this._locked || (this._totalTime = this._cycle = 0),
                this._time = 0,
                (0 !== q || 0 === p && u !== e && (u > 0 || 0 > a && u >= 0) && !this._locked) && (j = "onReverseComplete",
                f = this._reversed),
                0 > a)
                    this._active = !1,
                    this._timeline.autoRemoveChildren && this._reversed ? (k = f = !0,
                    j = "onReverseComplete") : u >= 0 && this._first && (k = !0),
                    this._rawPrevTime = a;
                else {
                    if (this._rawPrevTime = p || !b || a || this._rawPrevTime === a ? a : e,
                    0 === a && f)
                        for (d = this._first; d && 0 === d._startTime; )
                            d._duration || (f = !1),
                            d = d._next;
                    a = 0,
                    this._initted || (k = !0)
                }
            else if (0 === p && 0 > u && (k = !0),
            this._time = this._rawPrevTime = a,
            this._locked || (this._totalTime = a,
            0 !== this._repeat && (l = p + this._repeatDelay,
            this._cycle = this._totalTime / l >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--,
            this._time = this._totalTime - this._cycle * l,
            this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time),
            this._time > p ? (this._time = p,
            a = p + 1e-4) : this._time < 0 ? this._time = a = 0 : a = this._time)),
            this._hasPause && !this._forcingPlayhead && !b) {
                if (a = this._time,
                a >= q)
                    for (d = this._first; d && d._startTime <= a && !m; )
                        d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (m = d),
                        d = d._next;
                else
                    for (d = this._last; d && d._startTime >= a && !m; )
                        d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d),
                        d = d._prev;
                m && (this._time = a = m._startTime,
                this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== w && !this._locked) {
                var x = this._yoyo && 0 !== (1 & w)
                  , y = x === (this._yoyo && 0 !== (1 & this._cycle))
                  , z = this._totalTime
                  , A = this._cycle
                  , B = this._rawPrevTime
                  , C = this._time;
                if (this._totalTime = w * p,
                this._cycle < w ? x = !x : this._totalTime += p,
                this._time = q,
                this._rawPrevTime = 0 === p ? u - 1e-4 : u,
                this._cycle = w,
                this._locked = !0,
                q = x ? 0 : p,
                this.render(q, b, 0 === p),
                b || this._gc || this.vars.onRepeat && this._callback("onRepeat"),
                q !== this._time)
                    return;
                if (y && (q = x ? p + 1e-4 : -1e-4,
                this.render(q, !0, !1)),
                this._locked = !1,
                this._paused && !v)
                    return;
                this._time = C,
                this._totalTime = z,
                this._cycle = A,
                this._rawPrevTime = B
            }
            if (!(this._time !== q && this._first || c || k || m))
                return void (r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
            if (this._initted || (this._initted = !0),
            this._active || !this._paused && this._totalTime !== r && a > 0 && (this._active = !0),
            0 === r && this.vars.onStart && 0 !== this._totalTime && (b || this._callback("onStart")),
            n = this._time,
            n >= q)
                for (d = this._first; d && (i = d._next,
                n === this._time && (!this._paused || v)); )
                    (d._active || d._startTime <= this._time && !d._paused && !d._gc) && (m === d && this.pause(),
                    d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)),
                    d = i;
            else
                for (d = this._last; d && (i = d._prev,
                n === this._time && (!this._paused || v)); ) {
                    if (d._active || d._startTime <= q && !d._paused && !d._gc) {
                        if (m === d) {
                            for (m = d._prev; m && m.endTime() > this._time; )
                                m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c),
                                m = m._prev;
                            m = null ,
                            this.pause()
                        }
                        d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                    }
                    d = i
                }
            this._onUpdate && (b || (g.length && h(),
            this._callback("onUpdate"))),
            j && (this._locked || this._gc || (s === this._startTime || t !== this._timeScale) && (0 === this._time || o >= this.totalDuration()) && (f && (g.length && h(),
            this._timeline.autoRemoveChildren && this._enabled(!1, !1),
            this._active = !1),
            !b && this.vars[j] && this._callback(j)))
        }
        ,
        j.getActive = function(a, b, c) {
            null  == a && (a = !0),
            null  == b && (b = !0),
            null  == c && (c = !1);
            var d, e, f = [], g = this.getChildren(a, b, c), h = 0, i = g.length;
            for (d = 0; i > d; d++)
                e = g[d],
                e.isActive() && (f[h++] = e);
            return f
        }
        ,
        j.getLabelAfter = function(a) {
            a || 0 !== a && (a = this._time);
            var b, c = this.getLabelsArray(), d = c.length;
            for (b = 0; d > b; b++)
                if (c[b].time > a)
                    return c[b].name;
            return null 
        }
        ,
        j.getLabelBefore = function(a) {
            null  == a && (a = this._time);
            for (var b = this.getLabelsArray(), c = b.length; --c > -1; )
                if (b[c].time < a)
                    return b[c].name;
            return null 
        }
        ,
        j.getLabelsArray = function() {
            var a, b = [], c = 0;
            for (a in this._labels)
                b[c++] = {
                    time: this._labels[a],
                    name: a
                };
            return b.sort(function(a, b) {
                return a.time - b.time
            }),
            b
        }
        ,
        j.progress = function(a, b) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration()
        }
        ,
        j.totalProgress = function(a, b) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration()
        }
        ,
        j.totalDuration = function(b) {
            return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this),
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
            this._totalDuration)
        }
        ,
        j.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            a > this._duration && (a = this._duration),
            this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(a, b)) : this._time
        }
        ,
        j.repeat = function(a) {
            return arguments.length ? (this._repeat = a,
            this._uncache(!0)) : this._repeat
        }
        ,
        j.repeatDelay = function(a) {
            return arguments.length ? (this._repeatDelay = a,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        j.yoyo = function(a) {
            return arguments.length ? (this._yoyo = a,
            this) : this._yoyo
        }
        ,
        j.currentLabel = function(a) {
            return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8)
        }
        ,
        d
    }, !0),
    function() {
        var a = 180 / Math.PI
          , b = []
          , c = []
          , d = []
          , e = {}
          , f = _gsScope._gsDefine.globals
          , g = function(a, b, c, d) {
            this.a = a,
            this.b = b,
            this.c = c,
            this.d = d,
            this.da = d - a,
            this.ca = c - a,
            this.ba = b - a
        }
          , h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"
          , i = function(a, b, c, d) {
            var e = {
                a: a
            }
              , f = {}
              , g = {}
              , h = {
                c: d
            }
              , i = (a + b) / 2
              , j = (b + c) / 2
              , k = (c + d) / 2
              , l = (i + j) / 2
              , m = (j + k) / 2
              , n = (m - l) / 8;
            return e.b = i + (a - i) / 4,
            f.b = l + n,
            e.c = f.a = (e.b + f.b) / 2,
            f.c = g.a = (l + m) / 2,
            g.b = m - n,
            h.b = k + (d - k) / 4,
            g.c = h.a = (g.b + h.b) / 2,
            [e, f, g, h]
        }
          , j = function(a, e, f, g, h) {
            var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1, x = 0, y = a[0].a;
            for (j = 0; w > j; j++)
                n = a[x],
                k = n.a,
                l = n.d,
                m = a[x + 1].d,
                h ? (t = b[j],
                u = c[j],
                v = (u + t) * e * .25 / (g ? .5 : d[j] || .5),
                o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0),
                p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0),
                q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - (l - k) * e * .5,
                p = l + (m - l) * e * .5,
                q = l - (o + p) / 2),
                o += q,
                p += q,
                n.c = r = o,
                0 !== j ? n.b = y : n.b = y = n.a + .6 * (n.c - n.a),
                n.da = l - k,
                n.ca = r - k,
                n.ba = y - k,
                f ? (s = i(k, y, r, l),
                a.splice(x, 1, s[0], s[1], s[2], s[3]),
                x += 4) : x++,
                y = p;
            n = a[x],
            n.b = y,
            n.c = y + .4 * (n.d - y),
            n.da = n.d - n.a,
            n.ca = n.c - n.a,
            n.ba = y - n.a,
            f && (s = i(n.a, y, n.c, n.d),
            a.splice(x, 1, s[0], s[1], s[2], s[3]))
        }
          , k = function(a, d, e, f) {
            var h, i, j, k, l, m, n = [];
            if (f)
                for (a = [f].concat(a),
                i = a.length; --i > -1; )
                    "string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
            if (h = a.length - 2,
            0 > h)
                return n[0] = new g(a[0][d],0,0,a[-1 > h ? 0 : 1][d]),
                n;
            for (i = 0; h > i; i++)
                j = a[i][d],
                k = a[i + 1][d],
                n[i] = new g(j,0,0,k),
                e && (l = a[i + 2][d],
                b[i] = (b[i] || 0) + (k - j) * (k - j),
                c[i] = (c[i] || 0) + (l - k) * (l - k));
            return n[i] = new g(a[i][d],0,0,a[i + 1][d]),
            n
        }
          , l = function(a, f, g, i, l, m) {
            var n, o, p, q, r, s, t, u, v = {}, w = [], x = m || a[0];
            l = "string" == typeof l ? "," + l + "," : h,
            null  == f && (f = 1);
            for (o in a[0])
                w.push(o);
            if (a.length > 1) {
                for (u = a[a.length - 1],
                t = !0,
                n = w.length; --n > -1; )
                    if (o = w[n],
                    Math.abs(x[o] - u[o]) > .05) {
                        t = !1;
                        break
                    }
                t && (a = a.concat(),
                m && a.unshift(m),
                a.push(a[1]),
                m = a[a.length - 3])
            }
            for (b.length = c.length = d.length = 0,
            n = w.length; --n > -1; )
                o = w[n],
                e[o] = -1 !== l.indexOf("," + o + ","),
                v[o] = k(a, o, e[o], m);
            for (n = b.length; --n > -1; )
                b[n] = Math.sqrt(b[n]),
                c[n] = Math.sqrt(c[n]);
            if (!i) {
                for (n = w.length; --n > -1; )
                    if (e[o])
                        for (p = v[w[n]],
                        s = p.length - 1,
                        q = 0; s > q; q++)
                            r = p[q + 1].da / c[q] + p[q].da / b[q],
                            d[q] = (d[q] || 0) + r * r;
                for (n = d.length; --n > -1; )
                    d[n] = Math.sqrt(d[n])
            }
            for (n = w.length,
            q = g ? 4 : 1; --n > -1; )
                o = w[n],
                p = v[o],
                j(p, f, g, i, e[o]),
                t && (p.splice(0, q),
                p.splice(p.length - q, q));
            return v
        }
          , m = function(a, b, c) {
            b = b || "soft";
            var d, e, f, h, i, j, k, l, m, n, o, p = {}, q = "cubic" === b ? 3 : 2, r = "soft" === b, s = [];
            if (r && c && (a = [c].concat(a)),
            null  == a || a.length < q + 1)
                throw "invalid Bezier data";
            for (m in a[0])
                s.push(m);
            for (j = s.length; --j > -1; ) {
                for (m = s[j],
                p[m] = i = [],
                n = 0,
                l = a.length,
                k = 0; l > k; k++)
                    d = null  == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o),
                    r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2),
                    i[n++] = d;
                for (l = n - q + 1,
                n = 0,
                k = 0; l > k; k += q)
                    d = i[k],
                    e = i[k + 1],
                    f = i[k + 2],
                    h = 2 === q ? 0 : i[k + 3],
                    i[n++] = o = 3 === q ? new g(d,e,f,h) : new g(d,(2 * e + d) / 3,(2 * e + f) / 3,f);
                i.length = n
            }
            return p
        }
          , n = function(a, b, c) {
            for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1; )
                for (m = a[p],
                f = m.a,
                g = m.d - f,
                h = m.c - f,
                i = m.b - f,
                d = e = 0,
                k = 1; c >= k; k++)
                    j = o * k,
                    l = 1 - j,
                    d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j),
                    n = p * c + k - 1,
                    b[n] = (b[n] || 0) + d * d
        }
          , o = function(a, b) {
            b = b >> 0 || 6;
            var c, d, e, f, g = [], h = [], i = 0, j = 0, k = b - 1, l = [], m = [];
            for (c in a)
                n(a[c], g, b);
            for (e = g.length,
            d = 0; e > d; d++)
                i += Math.sqrt(g[d]),
                f = d % b,
                m[f] = i,
                f === k && (j += i,
                f = d / b >> 0,
                l[f] = m,
                h[f] = j,
                i = 0,
                m = []);
            return {
                length: j,
                lengths: h,
                segments: l
            }
        }
          , p = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.4",
            API: 2,
            global: !0,
            init: function(a, b, c) {
                this._target = a,
                b instanceof Array && (b = {
                    values: b
                }),
                this._func = {},
                this._round = {},
                this._props = [],
                this._timeRes = null  == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                var d, e, f, g, h, i = b.values || [], j = {}, k = i[0], n = b.autoRotate || c.vars.orientToBezier;
                this._autoRotate = n ? n instanceof Array ? n : [["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]] : null ;
                for (d in k)
                    this._props.push(d);
                for (f = this._props.length; --f > -1; )
                    d = this._props[f],
                    this._overwriteProps.push(d),
                    e = this._func[d] = "function" == typeof a[d],
                    j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]),
                    h || j[d] !== i[0][d] && (h = j);
                if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j),
                this._segCount = this._beziers[d].length,
                this._timeRes) {
                    var p = o(this._beziers, this._timeRes);
                    this._length = p.length,
                    this._lengths = p.lengths,
                    this._segments = p.segments,
                    this._l1 = this._li = this._s1 = this._si = 0,
                    this._l2 = this._lengths[0],
                    this._curSeg = this._segments[0],
                    this._s2 = this._curSeg[0],
                    this._prec = 1 / this._curSeg.length
                }
                if (n = this._autoRotate)
                    for (this._initialRotations = [],
                    n[0] instanceof Array || (this._autoRotate = n = [n]),
                    f = n.length; --f > -1; ) {
                        for (g = 0; 3 > g; g++)
                            d = n[f][g],
                            this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
                        d = n[f][2],
                        this._initialRotations[f] = this._func[d] ? this._func[d].call(this._target) : this._target[d]
                    }
                return this._startRatio = c.vars.runBackwards ? 1 : 0,
                !0
            },
            set: function(b) {
                var c, d, e, f, g, h, i, j, k, l, m = this._segCount, n = this._func, o = this._target, p = b !== this._startRatio;
                if (this._timeRes) {
                    if (k = this._lengths,
                    l = this._curSeg,
                    b *= this._length,
                    e = this._li,
                    b > this._l2 && m - 1 > e) {
                        for (j = m - 1; j > e && (this._l2 = k[++e]) <= b; )
                            ;
                        this._l1 = k[e - 1],
                        this._li = e,
                        this._curSeg = l = this._segments[e],
                        this._s2 = l[this._s1 = this._si = 0]
                    } else if (b < this._l1 && e > 0) {
                        for (; e > 0 && (this._l1 = k[--e]) >= b; )
                            ;
                        0 === e && b < this._l1 ? this._l1 = 0 : e++,
                        this._l2 = k[e],
                        this._li = e,
                        this._curSeg = l = this._segments[e],
                        this._s1 = l[(this._si = l.length - 1) - 1] || 0,
                        this._s2 = l[this._si]
                    }
                    if (c = e,
                    b -= this._l1,
                    e = this._si,
                    b > this._s2 && e < l.length - 1) {
                        for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b; )
                            ;
                        this._s1 = l[e - 1],
                        this._si = e
                    } else if (b < this._s1 && e > 0) {
                        for (; e > 0 && (this._s1 = l[--e]) >= b; )
                            ;
                        0 === e && b < this._s1 ? this._s1 = 0 : e++,
                        this._s2 = l[e],
                        this._si = e
                    }
                    h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec
                } else
                    c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0,
                    h = (b - c * (1 / m)) * m;
                for (d = 1 - h,
                e = this._props.length; --e > -1; )
                    f = this._props[e],
                    g = this._beziers[f][c],
                    i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a,
                    this._round[f] && (i = Math.round(i)),
                    n[f] ? o[f](i) : o[f] = i;
                if (this._autoRotate) {
                    var q, r, s, t, u, v, w, x = this._autoRotate;
                    for (e = x.length; --e > -1; )
                        f = x[e][2],
                        v = x[e][3] || 0,
                        w = x[e][4] === !0 ? 1 : a,
                        g = this._beziers[x[e][0]],
                        q = this._beziers[x[e][1]],
                        g && q && (g = g[c],
                        q = q[c],
                        r = g.a + (g.b - g.a) * h,
                        t = g.b + (g.c - g.b) * h,
                        r += (t - r) * h,
                        t += (g.c + (g.d - g.c) * h - t) * h,
                        s = q.a + (q.b - q.a) * h,
                        u = q.b + (q.c - q.b) * h,
                        s += (u - s) * h,
                        u += (q.c + (q.d - q.c) * h - u) * h,
                        i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e],
                        n[f] ? o[f](i) : o[f] = i)
                }
            }
        })
          , q = p.prototype;
        p.bezierThrough = l,
        p.cubicToQuadratic = i,
        p._autoCSS = !0,
        p.quadraticToCubic = function(a, b, c) {
            return new g(a,(2 * b + a) / 3,(2 * b + c) / 3,c)
        }
        ,
        p._cssRegister = function() {
            var a = f.CSSPlugin;
            if (a) {
                var b = a._internals
                  , c = b._parseToProxy
                  , d = b._setPluginRatio
                  , e = b.CSSPropTween;
                b._registerComplexSpecialProp("bezier", {
                    parser: function(a, b, f, g, h, i) {
                        b instanceof Array && (b = {
                            values: b
                        }),
                        i = new p;
                        var j, k, l, m = b.values, n = m.length - 1, o = [], q = {};
                        if (0 > n)
                            return h;
                        for (j = 0; n >= j; j++)
                            l = c(a, m[j], g, h, i, n !== j),
                            o[j] = l.end;
                        for (k in b)
                            q[k] = b[k];
                        return q.values = o,
                        h = new e(a,"bezier",0,0,l.pt,2),
                        h.data = l,
                        h.plugin = i,
                        h.setRatio = d,
                        0 === q.autoRotate && (q.autoRotate = !0),
                        !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate),
                        q.autoRotate = null  != l.end.left ? [["left", "top", "rotation", j, !1]] : null  != l.end.x ? [["x", "y", "rotation", j, !1]] : !1),
                        q.autoRotate && (g._transform || g._enableTransforms(!1),
                        l.autoRotate = g._target._gsTransform),
                        i._onInitTween(l.proxy, q, g._tween),
                        h
                    }
                })
            }
        }
        ,
        q._roundProps = function(a, b) {
            for (var c = this._overwriteProps, d = c.length; --d > -1; )
                (a[c[d]] || a.bezier || a.bezierThrough) && (this._round[c[d]] = b)
        }
        ,
        q._kill = function(a) {
            var b, c, d = this._props;
            for (b in this._beziers)
                if (b in a)
                    for (delete this._beziers[b],
                    delete this._func[b],
                    c = d.length; --c > -1; )
                        d[c] === b && d.splice(c, 1);
            return this._super._kill.call(this, a)
        }
    }(),
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
        var c, d, e, f, g = function() {
            a.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = g.prototype.setRatio
        }
        , h = _gsScope._gsDefine.globals, i = {}, j = g.prototype = new a("css");
        j.constructor = g,
        g.version = "1.18.2",
        g.API = 2,
        g.defaultTransformPerspective = 0,
        g.defaultSkewType = "compensated",
        g.defaultSmoothOrigin = !0,
        j = "px",
        g.suffixMap = {
            top: j,
            right: j,
            bottom: j,
            left: j,
            width: j,
            height: j,
            fontSize: j,
            padding: j,
            margin: j,
            perspective: j,
            lineHeight: ""
        };
        var k, l, m, n, o, p, q = /(?:\d|\-\d|\.\d|\-\.\d)+/g, r = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, s = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, t = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, u = /(?:\d|\-|\+|=|#|\.)*/g, v = /opacity *= *([^)]*)/i, w = /opacity:([^;]*)/i, x = /alpha\(opacity *=.+?\)/i, y = /^(rgb|hsl)/, z = /([A-Z])/g, A = /-([a-z])/gi, B = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, C = function(a, b) {
            return b.toUpperCase()
        }
        , D = /(?:Left|Right|Width)/i, E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, F = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, G = /,(?=[^\)]*(?:\(|$))/gi, H = Math.PI / 180, I = 180 / Math.PI, J = {}, K = document, L = function(a) {
            return K.createElementNS ? K.createElementNS("http://www.w3.org/1999/xhtml", a) : K.createElement(a)
        }
        , M = L("div"), N = L("img"), O = g._internals = {
            _specialProps: i
        }, P = navigator.userAgent, Q = function() {
            var a = P.indexOf("Android")
              , b = L("a");
            return m = -1 !== P.indexOf("Safari") && -1 === P.indexOf("Chrome") && (-1 === a || Number(P.substr(a + 8, 1)) > 3),
            o = m && Number(P.substr(P.indexOf("Version/") + 8, 1)) < 6,
            n = -1 !== P.indexOf("Firefox"),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(P) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(P)) && (p = parseFloat(RegExp.$1)),
            b ? (b.style.cssText = "top:1px;opacity:.55;",
            /^0.55/.test(b.style.opacity)) : !1
        }(), R = function(a) {
            return v.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }
        , S = function(a) {
            window.console && console.log(a)
        }
        , T = "", U = "", V = function(a, b) {
            b = b || M;
            var c, d, e = b.style;
            if (void 0 !== e[a])
                return a;
            for (a = a.charAt(0).toUpperCase() + a.substr(1),
            c = ["O", "Moz", "ms", "Ms", "Webkit"],
            d = 5; --d > -1 && void 0 === e[c[d] + a]; )
                ;
            return d >= 0 ? (U = 3 === d ? "ms" : c[d],
            T = "-" + U.toLowerCase() + "-",
            U + a) : null 
        }
        , W = K.defaultView ? K.defaultView.getComputedStyle : function() {}
        , X = g.getStyle = function(a, b, c, d, e) {
            var f;
            return Q || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || W(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(z, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]),
            null  == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : R(a)
        }
        , Y = O.convertToPixels = function(a, c, d, e, f) {
            if ("px" === e || !e)
                return d;
            if ("auto" === e || !d)
                return 0;
            var h, i, j, k = D.test(c), l = a, m = M.style, n = 0 > d;
            if (n && (d = -d),
            "%" === e && -1 !== c.indexOf("border"))
                h = d / 100 * (k ? a.clientWidth : a.clientHeight);
            else {
                if (m.cssText = "border:0 solid red;position:" + X(a, "position") + ";line-height:0;",
                "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e)
                    m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                else {
                    if (l = a.parentNode || K.body,
                    i = l._gsCache,
                    j = b.ticker.frame,
                    i && k && i.time === j)
                        return i.width * d / 100;
                    m[k ? "width" : "height"] = d + e
                }
                l.appendChild(M),
                h = parseFloat(M[k ? "offsetWidth" : "offsetHeight"]),
                l.removeChild(M),
                k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {},
                i.time = j,
                i.width = h / d * 100),
                0 !== h || f || (h = Y(a, c, d, e, !0))
            }
            return n ? -h : h
        }
        , Z = O.calculateOffset = function(a, b, c) {
            if ("absolute" !== X(a, "position", c))
                return 0;
            var d = "left" === b ? "Left" : "Top"
              , e = X(a, "margin" + d, c);
            return a["offset" + d] - (Y(a, b, parseFloat(e), e.replace(u, "")) || 0)
        }
        , $ = function(a, b) {
            var c, d, e, f = {};
            if (b = b || W(a, null ))
                if (c = b.length)
                    for (; --c > -1; )
                        e = b[c],
                        (-1 === e.indexOf("-transform") || za === e) && (f[e.replace(A, C)] = b.getPropertyValue(e));
                else
                    for (c in b)
                        (-1 === c.indexOf("Transform") || ya === c) && (f[c] = b[c]);
            else if (b = a.currentStyle || a.style)
                for (c in b)
                    "string" == typeof c && void 0 === f[c] && (f[c.replace(A, C)] = b[c]);
            return Q || (f.opacity = R(a)),
            d = La(a, b, !1),
            f.rotation = d.rotation,
            f.skewX = d.skewX,
            f.scaleX = d.scaleX,
            f.scaleY = d.scaleY,
            f.x = d.x,
            f.y = d.y,
            Ba && (f.z = d.z,
            f.rotationX = d.rotationX,
            f.rotationY = d.rotationY,
            f.scaleZ = d.scaleZ),
            f.filters && delete f.filters,
            f
        }
        , _ = function(a, b, c, d, e) {
            var f, g, h, i = {}, j = a.style;
            for (g in c)
                "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(t, "") ? f : 0 : Z(a, g),
                void 0 !== j[g] && (h = new oa(j,g,j[g],h)));
            if (d)
                for (g in d)
                    "className" !== g && (i[g] = d[g]);
            return {
                difs: i,
                firstMPT: h
            }
        }
        , aa = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, ba = ["marginLeft", "marginRight", "marginTop", "marginBottom"], ca = function(a, b, c) {
            var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight)
              , e = aa[b]
              , f = e.length;
            for (c = c || W(a, null ); --f > -1; )
                d -= parseFloat(X(a, "padding" + e[f], c, !0)) || 0,
                d -= parseFloat(X(a, "border" + e[f] + "Width", c, !0)) || 0;
            return d
        }
        , da = function(a, b) {
            if ("contain" === a || "auto" === a || "auto auto" === a)
                return a + " ";
            (null  == a || "" === a) && (a = "0 0");
            var c = a.split(" ")
              , d = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : c[0]
              , e = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : c[1];
            return null  == e ? e = "center" === d ? "50%" : "0" : "center" === e && (e = "50%"),
            ("center" === d || isNaN(parseFloat(d)) && -1 === (d + "").indexOf("=")) && (d = "50%"),
            a = d + " " + e + (c.length > 2 ? " " + c[2] : ""),
            b && (b.oxp = -1 !== d.indexOf("%"),
            b.oyp = -1 !== e.indexOf("%"),
            b.oxr = "=" === d.charAt(1),
            b.oyr = "=" === e.charAt(1),
            b.ox = parseFloat(d.replace(t, "")),
            b.oy = parseFloat(e.replace(t, "")),
            b.v = a),
            b || a
        }
        , ea = function(a, b) {
            return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b)
        }
        , fa = function(a, b) {
            return null  == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a)
        }
        , ga = function(a, b, c, d) {
            var e, f, g, h, i, j = 1e-6;
            return null  == a ? h = b : "number" == typeof a ? h = a : (e = 360,
            f = a.split("_"),
            i = "=" === a.charAt(1),
            g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : I) - (i ? 0 : b),
            f.length && (d && (d[c] = b + g),
            -1 !== a.indexOf("short") && (g %= e,
            g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)),
            -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)),
            h = b + g),
            j > h && h > -j && (h = 0),
            h
        }
        , ha = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, ia = function(a, b, c) {
            return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a,
            255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
        }
        , ja = g.parseColor = function(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m;
            if (a)
                if ("number" == typeof a)
                    c = [a >> 16, a >> 8 & 255, 255 & a];
                else {
                    if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)),
                    ha[a])
                        c = ha[a];
                    else if ("#" === a.charAt(0))
                        4 === a.length && (d = a.charAt(1),
                        e = a.charAt(2),
                        f = a.charAt(3),
                        a = "#" + d + d + e + e + f + f),
                        a = parseInt(a.substr(1), 16),
                        c = [a >> 16, a >> 8 & 255, 255 & a];
                    else if ("hsl" === a.substr(0, 3))
                        if (c = m = a.match(q),
                        b) {
                            if (-1 !== a.indexOf("="))
                                return a.match(r)
                        } else
                            g = Number(c[0]) % 360 / 360,
                            h = Number(c[1]) / 100,
                            i = Number(c[2]) / 100,
                            e = .5 >= i ? i * (h + 1) : i + h - i * h,
                            d = 2 * i - e,
                            c.length > 3 && (c[3] = Number(a[3])),
                            c[0] = ia(g + 1 / 3, d, e),
                            c[1] = ia(g, d, e),
                            c[2] = ia(g - 1 / 3, d, e);
                    else
                        c = a.match(q) || ha.transparent;
                    c[0] = Number(c[0]),
                    c[1] = Number(c[1]),
                    c[2] = Number(c[2]),
                    c.length > 3 && (c[3] = Number(c[3]))
                }
            else
                c = ha.black;
            return b && !m && (d = c[0] / 255,
            e = c[1] / 255,
            f = c[2] / 255,
            j = Math.max(d, e, f),
            k = Math.min(d, e, f),
            i = (j + k) / 2,
            j === k ? g = h = 0 : (l = j - k,
            h = i > .5 ? l / (2 - j - k) : l / (j + k),
            g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4,
            g *= 60),
            c[0] = g + .5 | 0,
            c[1] = 100 * h + .5 | 0,
            c[2] = 100 * i + .5 | 0),
            c
        }
        , ka = function(a, b) {
            var c, d, e, f = a.match(la) || [], g = 0, h = f.length ? "" : a;
            for (c = 0; c < f.length; c++)
                d = f[c],
                e = a.substr(g, a.indexOf(d, g) - g),
                g += e.length + d.length,
                d = ja(d, b),
                3 === d.length && d.push(1),
                h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
            return h
        }
        , la = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (j in ha)
            la += "|" + j + "\\b";
        la = new RegExp(la + ")","gi"),
        g.colorStringFilter = function(a) {
            var b, c = a[0] + a[1];
            la.lastIndex = 0,
            la.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("),
            a[0] = ka(a[0], b),
            a[1] = ka(a[1], b))
        }
        ,
        b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
        var ma = function(a, b, c, d) {
            if (null  == a)
                return function(a) {
                    return a
                }
                ;
            var e, f = b ? (a.match(la) || [""])[0] : "", g = a.split(f).join("").match(s) || [], h = a.substr(0, a.indexOf(g[0])), i = ")" === a.charAt(a.length - 1) ? ")" : "", j = -1 !== a.indexOf(" ") ? " " : ",", k = g.length, l = k > 0 ? g[0].replace(q, "") : "";
            return k ? e = b ? function(a) {
                var b, m, n, o;
                if ("number" == typeof a)
                    a += l;
                else if (d && G.test(a)) {
                    for (o = a.replace(G, "|").split("|"),
                    n = 0; n < o.length; n++)
                        o[n] = e(o[n]);
                    return o.join(",")
                }
                if (b = (a.match(la) || [f])[0],
                m = a.split(b).join("").match(s) || [],
                n = m.length,
                k > n--)
                    for (; ++n < k; )
                        m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
            }
             : function(a) {
                var b, f, m;
                if ("number" == typeof a)
                    a += l;
                else if (d && G.test(a)) {
                    for (f = a.replace(G, "|").split("|"),
                    m = 0; m < f.length; m++)
                        f[m] = e(f[m]);
                    return f.join(",")
                }
                if (b = a.match(s) || [],
                m = b.length,
                k > m--)
                    for (; ++m < k; )
                        b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                return h + b.join(j) + i
            }
             : function(a) {
                return a
            }
        }
          , na = function(a) {
            return a = a.split(","),
            function(b, c, d, e, f, g, h) {
                var i, j = (c + "").split(" ");
                for (h = {},
                i = 0; 4 > i; i++)
                    h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                return e.parse(b, h, f, g)
            }
        }
          , oa = (O._setPluginRatio = function(a) {
            this.plugin.setRatio(a);
            for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i; )
                b = h[i.v],
                i.r ? b = Math.round(b) : j > b && b > -j && (b = 0),
                i.t[i.p] = b,
                i = i._next;
            if (g.autoRotate && (g.autoRotate.rotation = h.rotation),
            1 === a || 0 === a)
                for (i = g.firstMPT,
                f = 1 === a ? "e" : "b"; i; ) {
                    if (c = i.t,
                    c.type) {
                        if (1 === c.type) {
                            for (e = c.xs0 + c.s + c.xs1,
                            d = 1; d < c.l; d++)
                                e += c["xn" + d] + c["xs" + (d + 1)];
                            c[f] = e
                        }
                    } else
                        c[f] = c.s + c.xs0;
                    i = i._next
                }
        }
        ,
        function(a, b, c, d, e) {
            this.t = a,
            this.p = b,
            this.v = c,
            this.r = e,
            d && (d._prev = this,
            this._next = d)
        }
        )
          , pa = (O._parseToProxy = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l = d, m = {}, n = {}, o = c._transform, p = J;
            for (c._transform = null ,
            J = b,
            d = k = c.parse(a, b, d, e),
            J = p,
            f && (c._transform = o,
            l && (l._prev = null ,
            l._prev && (l._prev._next = null ))); d && d !== l; ) {
                if (d.type <= 1 && (h = d.p,
                n[h] = d.s + d.c,
                m[h] = d.s,
                f || (j = new oa(d,"s",h,j,d.r),
                d.c = 0),
                1 === d.type))
                    for (g = d.l; --g > 0; )
                        i = "xn" + g,
                        h = d.p + "_" + i,
                        n[h] = d.data[i],
                        m[h] = d[i],
                        f || (j = new oa(d,i,h,j,d.rxp[i]));
                d = d._next
            }
            return {
                proxy: m,
                end: n,
                firstMPT: j,
                pt: k
            }
        }
        ,
        O.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
            this.t = a,
            this.p = b,
            this.s = d,
            this.c = e,
            this.n = i || b,
            a instanceof pa || f.push(this.n),
            this.r = j,
            this.type = h || 0,
            k && (this.pr = k,
            c = !0),
            this.b = void 0 === l ? d : l,
            this.e = void 0 === m ? d + e : m,
            g && (this._next = g,
            g._prev = this)
        }
        )
          , qa = function(a, b, c, d, e, f) {
            var g = new pa(a,b,c,d - c,e,-1,f);
            return g.b = c,
            g.e = g.xs0 = d,
            g
        }
          , ra = g.parseComplex = function(a, b, c, d, e, f, g, h, i, j) {
            c = c || f || "",
            g = new pa(a,b,0,0,g,j ? 2 : 1,null ,!1,h,c,d),
            d += "";
            var l, m, n, o, p, s, t, u, v, w, x, y, z, A = c.split(", ").join(",").split(" "), B = d.split(", ").join(",").split(" "), C = A.length, D = k !== !1;
            for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (A = A.join(" ").replace(G, ", ").split(" "),
            B = B.join(" ").replace(G, ", ").split(" "),
            C = A.length),
            C !== B.length && (A = (f || "").split(" "),
            C = A.length),
            g.plugin = i,
            g.setRatio = j,
            la.lastIndex = 0,
            l = 0; C > l; l++)
                if (o = A[l],
                p = B[l],
                u = parseFloat(o),
                u || 0 === u)
                    g.appendXtra("", u, ea(p, u), p.replace(r, ""), D && -1 !== p.indexOf("px"), !0);
                else if (e && la.test(o))
                    y = "," === p.charAt(p.length - 1) ? ")," : ")",
                    z = -1 !== p.indexOf("hsl") && Q,
                    o = ja(o, z),
                    p = ja(p, z),
                    v = o.length + p.length > 6,
                    v && !Q && 0 === p[3] ? (g["xs" + g.l] += g.l ? " transparent" : "transparent",
                    g.e = g.e.split(B[l]).join("transparent")) : (Q || (v = !1),
                    z ? g.appendXtra(v ? "hsla(" : "hsl(", o[0], ea(p[0], o[0]), ",", !1, !0).appendXtra("", o[1], ea(p[1], o[1]), "%,", !1).appendXtra("", o[2], ea(p[2], o[2]), v ? "%," : "%" + y, !1) : g.appendXtra(v ? "rgba(" : "rgb(", o[0], p[0] - o[0], ",", !0, !0).appendXtra("", o[1], p[1] - o[1], ",", !0).appendXtra("", o[2], p[2] - o[2], v ? "," : y, !0),
                    v && (o = o.length < 4 ? 1 : o[3],
                    g.appendXtra("", o, (p.length < 4 ? 1 : p[3]) - o, y, !1))),
                    la.lastIndex = 0;
                else if (s = o.match(q)) {
                    if (t = p.match(r),
                    !t || t.length !== s.length)
                        return g;
                    for (n = 0,
                    m = 0; m < s.length; m++)
                        x = s[m],
                        w = o.indexOf(x, n),
                        g.appendXtra(o.substr(n, w - n), Number(x), ea(t[m], x), "", D && "px" === o.substr(w + x.length, 2), 0 === m),
                        n = w + x.length;
                    g["xs" + g.l] += o.substr(n)
                } else
                    g["xs" + g.l] += g.l ? " " + p : p;
            if (-1 !== d.indexOf("=") && g.data) {
                for (y = g.xs0 + g.data.s,
                l = 1; l < g.l; l++)
                    y += g["xs" + l] + g.data["xn" + l];
                g.e = y + g["xs" + l]
            }
            return g.l || (g.type = -1,
            g.xs0 = g.e),
            g.xfirst || g
        }
          , sa = 9;
        for (j = pa.prototype,
        j.l = j.pr = 0; --sa > 0; )
            j["xn" + sa] = 0,
            j["xs" + sa] = "";
        j.xs0 = "",
        j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null ,
        j.appendXtra = function(a, b, c, d, e, f) {
            var g = this
              , h = g.l;
            return g["xs" + h] += f && h ? " " + a : a || "",
            c || 0 === h || g.plugin ? (g.l++,
            g.type = g.setRatio ? 2 : 1,
            g["xs" + g.l] = d || "",
            h > 0 ? (g.data["xn" + h] = b + c,
            g.rxp["xn" + h] = e,
            g["xn" + h] = b,
            g.plugin || (g.xfirst = new pa(g,"xn" + h,b,c,g.xfirst || g,0,g.n,e,g.pr),
            g.xfirst.xs0 = 0),
            g) : (g.data = {
                s: b + c
            },
            g.rxp = {},
            g.s = b,
            g.c = c,
            g.r = e,
            g)) : (g["xs" + h] += b + (d || ""),
            g)
        }
        ;
        var ta = function(a, b) {
            b = b || {},
            this.p = b.prefix ? V(a) || a : a,
            i[a] = i[this.p] = this,
            this.format = b.formatter || ma(b.defaultValue, b.color, b.collapsible, b.multi),
            b.parser && (this.parse = b.parser),
            this.clrs = b.color,
            this.multi = b.multi,
            this.keyword = b.keyword,
            this.dflt = b.defaultValue,
            this.pr = b.priority || 0
        }
          , ua = O._registerComplexSpecialProp = function(a, b, c) {
            "object" != typeof b && (b = {
                parser: c
            });
            var d, e, f = a.split(","), g = b.defaultValue;
            for (c = c || [g],
            d = 0; d < f.length; d++)
                b.prefix = 0 === d && b.prefix,
                b.defaultValue = c[d] || g,
                e = new ta(f[d],b)
        }
          , va = function(a) {
            if (!i[a]) {
                var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                ua(a, {
                    parser: function(a, c, d, e, f, g, j) {
                        var k = h.com.greensock.plugins[b];
                        return k ? (k._cssRegister(),
                        i[d].parse(a, c, d, e, f, g, j)) : (S("Error: " + b + " js file not loaded."),
                        f)
                    }
                })
            }
        }
        ;
        j = ta.prototype,
        j.parseComplex = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l, m = this.keyword;
            if (this.multi && (G.test(c) || G.test(b) ? (h = b.replace(G, "|").split("|"),
            i = c.replace(G, "|").split("|")) : m && (h = [b],
            i = [c])),
            i) {
                for (j = i.length > h.length ? i.length : h.length,
                g = 0; j > g; g++)
                    b = h[g] = h[g] || this.dflt,
                    c = i[g] = i[g] || this.dflt,
                    m && (k = b.indexOf(m),
                    l = c.indexOf(m),
                    k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                b = h.join(", "),
                c = i.join(", ")
            }
            return ra(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
        }
        ,
        j.parse = function(a, b, c, d, f, g, h) {
            return this.parseComplex(a.style, this.format(X(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
        }
        ,
        g.registerSpecialProp = function(a, b, c) {
            ua(a, {
                parser: function(a, d, e, f, g, h, i) {
                    var j = new pa(a,e,0,0,g,2,e,!1,c);
                    return j.plugin = h,
                    j.setRatio = b(a, d, f._tween, e),
                    j
                },
                priority: c
            })
        }
        ,
        g.useSVGTransformAttr = m || n;
        var wa, xa = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), ya = V("transform"), za = T + "transform", Aa = V("transformOrigin"), Ba = null  !== V("perspective"), Ca = O.Transform = function() {
            this.perspective = parseFloat(g.defaultTransformPerspective) || 0,
            this.force3D = g.defaultForce3D !== !1 && Ba ? g.defaultForce3D || "auto" : !1
        }
        , Da = window.SVGElement, Ea = function(a, b, c) {
            var d, e = K.createElementNS("http://www.w3.org/2000/svg", a), f = /([a-z])([A-Z])/g;
            for (d in c)
                e.setAttributeNS(null , d.replace(f, "$1-$2").toLowerCase(), c[d]);
            return b.appendChild(e),
            e
        }
        , Fa = K.documentElement, Ga = function() {
            var a, b, c, d = p || /Android/i.test(P) && !window.chrome;
            return K.createElementNS && !d && (a = Ea("svg", Fa),
            b = Ea("rect", a, {
                width: 100,
                height: 50,
                x: 100
            }),
            c = b.getBoundingClientRect().width,
            b.style[Aa] = "50% 50%",
            b.style[ya] = "scaleX(0.5)",
            d = c === b.getBoundingClientRect().width && !(n && Ba),
            Fa.removeChild(a)),
            d
        }(), Ha = function(a, b, c, d, e) {
            var f, h, i, j, k, l, m, n, o, p, q, r, s, t, u = a._gsTransform, v = Ka(a, !0);
            u && (s = u.xOrigin,
            t = u.yOrigin),
            (!d || (f = d.split(" ")).length < 2) && (m = a.getBBox(),
            b = da(b).split(" "),
            f = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * m.width : parseFloat(b[0])) + m.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * m.height : parseFloat(b[1])) + m.y]),
            c.xOrigin = j = parseFloat(f[0]),
            c.yOrigin = k = parseFloat(f[1]),
            d && v !== Ja && (l = v[0],
            m = v[1],
            n = v[2],
            o = v[3],
            p = v[4],
            q = v[5],
            r = l * o - m * n,
            h = j * (o / r) + k * (-n / r) + (n * q - o * p) / r,
            i = j * (-m / r) + k * (l / r) - (l * q - m * p) / r,
            j = c.xOrigin = f[0] = h,
            k = c.yOrigin = f[1] = i),
            u && (e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (h = j - s,
            i = k - t,
            u.xOffset += h * v[0] + i * v[2] - h,
            u.yOffset += h * v[1] + i * v[3] - i) : u.xOffset = u.yOffset = 0),
            a.setAttribute("data-svg-origin", f.join(" "))
        }
        , Ia = function(a) {
            return !!(Da && "function" == typeof a.getBBox && a.getCTM && (!a.parentNode || a.parentNode.getBBox && a.parentNode.getCTM))
        }
        , Ja = [1, 0, 0, 1, 0, 0], Ka = function(a, b) {
            var c, d, e, f, g, h = a._gsTransform || new Ca, i = 1e5;
            if (ya ? d = X(a, za, null , !0) : a.currentStyle && (d = a.currentStyle.filter.match(E),
            d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), h.x || 0, h.y || 0].join(",") : ""),
            c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d,
            (h.svg || a.getBBox && Ia(a)) && (c && -1 !== (a.style[ya] + "").indexOf("matrix") && (d = a.style[ya],
            c = 0),
            e = a.getAttribute("transform"),
            c && e && (-1 !== e.indexOf("matrix") ? (d = e,
            c = 0) : -1 !== e.indexOf("translate") && (d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")",
            c = 0))),
            c)
                return Ja;
            for (e = (d || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [],
            sa = e.length; --sa > -1; )
                f = Number(e[sa]),
                e[sa] = (g = f - (f |= 0)) ? (g * i + (0 > g ? -.5 : .5) | 0) / i + f : f;
            return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
        }
        , La = O.getTransform = function(a, c, d, f) {
            if (a._gsTransform && d && !f)
                return a._gsTransform;
            var h, i, j, k, l, m, n = d ? a._gsTransform || new Ca : new Ca, o = n.scaleX < 0, p = 2e-5, q = 1e5, r = Ba ? parseFloat(X(a, Aa, c, !1, "0 0 0").split(" ")[2]) || n.zOrigin || 0 : 0, s = parseFloat(g.defaultTransformPerspective) || 0;
            if (n.svg = !(!a.getBBox || !Ia(a)),
            n.svg && (Ha(a, X(a, Aa, e, !1, "50% 50%") + "", n, a.getAttribute("data-svg-origin")),
            wa = g.useSVGTransformAttr || Ga),
            h = Ka(a),
            h !== Ja) {
                if (16 === h.length) {
                    var t, u, v, w, x, y = h[0], z = h[1], A = h[2], B = h[3], C = h[4], D = h[5], E = h[6], F = h[7], G = h[8], H = h[9], J = h[10], K = h[12], L = h[13], M = h[14], N = h[11], O = Math.atan2(E, J);
                    n.zOrigin && (M = -n.zOrigin,
                    K = G * M - h[12],
                    L = H * M - h[13],
                    M = J * M + n.zOrigin - h[14]),
                    n.rotationX = O * I,
                    O && (w = Math.cos(-O),
                    x = Math.sin(-O),
                    t = C * w + G * x,
                    u = D * w + H * x,
                    v = E * w + J * x,
                    G = C * -x + G * w,
                    H = D * -x + H * w,
                    J = E * -x + J * w,
                    N = F * -x + N * w,
                    C = t,
                    D = u,
                    E = v),
                    O = Math.atan2(-A, J),
                    n.rotationY = O * I,
                    O && (w = Math.cos(-O),
                    x = Math.sin(-O),
                    t = y * w - G * x,
                    u = z * w - H * x,
                    v = A * w - J * x,
                    H = z * x + H * w,
                    J = A * x + J * w,
                    N = B * x + N * w,
                    y = t,
                    z = u,
                    A = v),
                    O = Math.atan2(z, y),
                    n.rotation = O * I,
                    O && (w = Math.cos(-O),
                    x = Math.sin(-O),
                    y = y * w + C * x,
                    u = z * w + D * x,
                    D = z * -x + D * w,
                    E = A * -x + E * w,
                    z = u),
                    n.rotationX && Math.abs(n.rotationX) + Math.abs(n.rotation) > 359.9 && (n.rotationX = n.rotation = 0,
                    n.rotationY = 180 - n.rotationY),
                    n.scaleX = (Math.sqrt(y * y + z * z) * q + .5 | 0) / q,
                    n.scaleY = (Math.sqrt(D * D + H * H) * q + .5 | 0) / q,
                    n.scaleZ = (Math.sqrt(E * E + J * J) * q + .5 | 0) / q,
                    n.skewX = 0,
                    n.perspective = N ? 1 / (0 > N ? -N : N) : 0,
                    n.x = K,
                    n.y = L,
                    n.z = M,
                    n.svg && (n.x -= n.xOrigin - (n.xOrigin * y - n.yOrigin * C),
                    n.y -= n.yOrigin - (n.yOrigin * z - n.xOrigin * D))
                } else if ((!Ba || f || !h.length || n.x !== h[4] || n.y !== h[5] || !n.rotationX && !n.rotationY) && (void 0 === n.x || "none" !== X(a, "display", c))) {
                    var P = h.length >= 6
                      , Q = P ? h[0] : 1
                      , R = h[1] || 0
                      , S = h[2] || 0
                      , T = P ? h[3] : 1;
                    n.x = h[4] || 0,
                    n.y = h[5] || 0,
                    j = Math.sqrt(Q * Q + R * R),
                    k = Math.sqrt(T * T + S * S),
                    l = Q || R ? Math.atan2(R, Q) * I : n.rotation || 0,
                    m = S || T ? Math.atan2(S, T) * I + l : n.skewX || 0,
                    Math.abs(m) > 90 && Math.abs(m) < 270 && (o ? (j *= -1,
                    m += 0 >= l ? 180 : -180,
                    l += 0 >= l ? 180 : -180) : (k *= -1,
                    m += 0 >= m ? 180 : -180)),
                    n.scaleX = j,
                    n.scaleY = k,
                    n.rotation = l,
                    n.skewX = m,
                    Ba && (n.rotationX = n.rotationY = n.z = 0,
                    n.perspective = s,
                    n.scaleZ = 1),
                    n.svg && (n.x -= n.xOrigin - (n.xOrigin * Q + n.yOrigin * S),
                    n.y -= n.yOrigin - (n.xOrigin * R + n.yOrigin * T))
                }
                n.zOrigin = r;
                for (i in n)
                    n[i] < p && n[i] > -p && (n[i] = 0)
            }
            return d && (a._gsTransform = n,
            n.svg && (wa && a.style[ya] ? b.delayedCall(.001, function() {
                Pa(a.style, ya)
            }) : !wa && a.getAttribute("transform") && b.delayedCall(.001, function() {
                a.removeAttribute("transform")
            }))),
            n
        }
        , Ma = function(a) {
            var b, c, d = this.data, e = -d.rotation * H, f = e + d.skewX * H, g = 1e5, h = (Math.cos(e) * d.scaleX * g | 0) / g, i = (Math.sin(e) * d.scaleX * g | 0) / g, j = (Math.sin(f) * -d.scaleY * g | 0) / g, k = (Math.cos(f) * d.scaleY * g | 0) / g, l = this.t.style, m = this.t.currentStyle;
            if (m) {
                c = i,
                i = -j,
                j = -c,
                b = m.filter,
                l.filter = "";
                var n, o, q = this.t.offsetWidth, r = this.t.offsetHeight, s = "absolute" !== m.position, t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k, w = d.x + q * d.xPercent / 100, x = d.y + r * d.yPercent / 100;
                if (null  != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2,
                o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2,
                w += n - (n * h + o * i),
                x += o - (n * j + o * k)),
                s ? (n = q / 2,
                o = r / 2,
                t += ", Dx=" + (n - (n * h + o * i) + w) + ", Dy=" + (o - (n * j + o * k) + x) + ")") : t += ", sizingMethod='auto expand')",
                -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(F, t) : l.filter = t + " " + b,
                (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || v.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")),
                !s) {
                    var y, z, A, B = 8 > p ? 1 : -1;
                    for (n = d.ieOffsetX || 0,
                    o = d.ieOffsetY || 0,
                    d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + w),
                    d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + x),
                    sa = 0; 4 > sa; sa++)
                        z = ba[sa],
                        y = m[z],
                        c = -1 !== y.indexOf("px") ? parseFloat(y) : Y(this.t, z, parseFloat(y), y.replace(u, "")) || 0,
                        A = c !== d[z] ? 2 > sa ? -d.ieOffsetX : -d.ieOffsetY : 2 > sa ? n - d.ieOffsetX : o - d.ieOffsetY,
                        l[z] = (d[z] = Math.round(c - A * (0 === sa || 2 === sa ? 1 : B))) + "px"
                }
            }
        }
        , Na = O.set3DTransformRatio = O.setTransformRatio = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data, A = this.t.style, B = z.rotation, C = z.rotationX, D = z.rotationY, E = z.scaleX, F = z.scaleY, G = z.scaleZ, I = z.x, J = z.y, K = z.z, L = z.svg, M = z.perspective, N = z.force3D;
            if (((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !K && !M && !D && !C && 1 === G || wa && L || !Ba)
                return void (B || z.skewX || L ? (B *= H,
                x = z.skewX * H,
                y = 1e5,
                b = Math.cos(B) * E,
                e = Math.sin(B) * E,
                c = Math.sin(B - x) * -F,
                f = Math.cos(B - x) * F,
                x && "simple" === z.skewType && (s = Math.tan(x),
                s = Math.sqrt(1 + s * s),
                c *= s,
                f *= s,
                z.skewY && (b *= s,
                e *= s)),
                L && (I += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset,
                J += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset,
                wa && (z.xPercent || z.yPercent) && (p = this.t.getBBox(),
                I += .01 * z.xPercent * p.width,
                J += .01 * z.yPercent * p.height),
                p = 1e-6,
                p > I && I > -p && (I = 0),
                p > J && J > -p && (J = 0)),
                u = (b * y | 0) / y + "," + (e * y | 0) / y + "," + (c * y | 0) / y + "," + (f * y | 0) / y + "," + I + "," + J + ")",
                L && wa ? this.t.setAttribute("transform", "matrix(" + u) : A[ya] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[ya] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + I + "," + J + ")");
            if (n && (p = 1e-4,
            p > E && E > -p && (E = G = 2e-5),
            p > F && F > -p && (F = G = 2e-5),
            !M || z.z || z.rotationX || z.rotationY || (M = 0)),
            B || z.skewX)
                B *= H,
                q = b = Math.cos(B),
                r = e = Math.sin(B),
                z.skewX && (B -= z.skewX * H,
                q = Math.cos(B),
                r = Math.sin(B),
                "simple" === z.skewType && (s = Math.tan(z.skewX * H),
                s = Math.sqrt(1 + s * s),
                q *= s,
                r *= s,
                z.skewY && (b *= s,
                e *= s))),
                c = -r,
                f = q;
            else {
                if (!(D || C || 1 !== G || M || L))
                    return void (A[ya] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + I + "px," + J + "px," + K + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                b = f = 1,
                c = e = 0
            }
            j = 1,
            d = g = h = i = k = l = 0,
            m = M ? -1 / M : 0,
            o = z.zOrigin,
            p = 1e-6,
            v = ",",
            w = "0",
            B = D * H,
            B && (q = Math.cos(B),
            r = Math.sin(B),
            h = -r,
            k = m * -r,
            d = b * r,
            g = e * r,
            j = q,
            m *= q,
            b *= q,
            e *= q),
            B = C * H,
            B && (q = Math.cos(B),
            r = Math.sin(B),
            s = c * q + d * r,
            t = f * q + g * r,
            i = j * r,
            l = m * r,
            d = c * -r + d * q,
            g = f * -r + g * q,
            j *= q,
            m *= q,
            c = s,
            f = t),
            1 !== G && (d *= G,
            g *= G,
            j *= G,
            m *= G),
            1 !== F && (c *= F,
            f *= F,
            i *= F,
            l *= F),
            1 !== E && (b *= E,
            e *= E,
            h *= E,
            k *= E),
            (o || L) && (o && (I += d * -o,
            J += g * -o,
            K += j * -o + o),
            L && (I += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset,
            J += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset),
            p > I && I > -p && (I = w),
            p > J && J > -p && (J = w),
            p > K && K > -p && (K = 0)),
            u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(",
            u += (p > b && b > -p ? w : b) + v + (p > e && e > -p ? w : e) + v + (p > h && h > -p ? w : h),
            u += v + (p > k && k > -p ? w : k) + v + (p > c && c > -p ? w : c) + v + (p > f && f > -p ? w : f),
            C || D || 1 !== G ? (u += v + (p > i && i > -p ? w : i) + v + (p > l && l > -p ? w : l) + v + (p > d && d > -p ? w : d),
            u += v + (p > g && g > -p ? w : g) + v + (p > j && j > -p ? w : j) + v + (p > m && m > -p ? w : m) + v) : u += ",0,0,0,0,1,0,",
            u += I + v + J + v + K + v + (M ? 1 + -K / M : 1) + ")",
            A[ya] = u
        }
        ;
        j = Ca.prototype,
        j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0,
        j.scaleX = j.scaleY = j.scaleZ = 1,
        ua("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(a, b, c, d, f, h, i) {
                if (d._lastParsedTransform === i)
                    return f;
                d._lastParsedTransform = i;
                var j, k, l, m, n, o, p, q, r, s, t = a._gsTransform, u = a.style, v = 1e-6, w = xa.length, x = i, y = {}, z = "transformOrigin";
                if (i.display ? (m = X(a, "display"),
                u.display = "block",
                j = La(a, e, !0, i.parseTransform),
                u.display = m) : j = La(a, e, !0, i.parseTransform),
                d._transform = j,
                "string" == typeof x.transform && ya)
                    m = M.style,
                    m[ya] = x.transform,
                    m.display = "block",
                    m.position = "absolute",
                    K.body.appendChild(M),
                    k = La(M, null , !1),
                    K.body.removeChild(M),
                    k.perspective || (k.perspective = j.perspective),
                    null  != x.xPercent && (k.xPercent = fa(x.xPercent, j.xPercent)),
                    null  != x.yPercent && (k.yPercent = fa(x.yPercent, j.yPercent));
                else if ("object" == typeof x) {
                    if (k = {
                        scaleX: fa(null  != x.scaleX ? x.scaleX : x.scale, j.scaleX),
                        scaleY: fa(null  != x.scaleY ? x.scaleY : x.scale, j.scaleY),
                        scaleZ: fa(x.scaleZ, j.scaleZ),
                        x: fa(x.x, j.x),
                        y: fa(x.y, j.y),
                        z: fa(x.z, j.z),
                        xPercent: fa(x.xPercent, j.xPercent),
                        yPercent: fa(x.yPercent, j.yPercent),
                        perspective: fa(x.transformPerspective, j.perspective)
                    },
                    q = x.directionalRotation,
                    null  != q)
                        if ("object" == typeof q)
                            for (m in q)
                                x[m] = q[m];
                        else
                            x.rotation = q;
                    "string" == typeof x.x && -1 !== x.x.indexOf("%") && (k.x = 0,
                    k.xPercent = fa(x.x, j.xPercent)),
                    "string" == typeof x.y && -1 !== x.y.indexOf("%") && (k.y = 0,
                    k.yPercent = fa(x.y, j.yPercent)),
                    k.rotation = ga("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : "rotationZ" in x ? x.rotationZ : j.rotation, j.rotation, "rotation", y),
                    Ba && (k.rotationX = ga("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : j.rotationX || 0, j.rotationX, "rotationX", y),
                    k.rotationY = ga("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : j.rotationY || 0, j.rotationY, "rotationY", y)),
                    k.skewX = null  == x.skewX ? j.skewX : ga(x.skewX, j.skewX),
                    k.skewY = null  == x.skewY ? j.skewY : ga(x.skewY, j.skewY),
                    (l = k.skewY - j.skewY) && (k.skewX += l,
                    k.rotation += l)
                }
                for (Ba && null  != x.force3D && (j.force3D = x.force3D,
                p = !0),
                j.skewType = x.skewType || j.skewType || g.defaultSkewType,
                o = j.force3D || j.z || j.rotationX || j.rotationY || k.z || k.rotationX || k.rotationY || k.perspective,
                o || null  == x.scale || (k.scaleZ = 1); --w > -1; )
                    c = xa[w],
                    n = k[c] - j[c],
                    (n > v || -v > n || null  != x[c] || null  != J[c]) && (p = !0,
                    f = new pa(j,c,j[c],n,f),
                    c in y && (f.e = y[c]),
                    f.xs0 = 0,
                    f.plugin = h,
                    d._overwriteProps.push(f.n));
                return n = x.transformOrigin,
                j.svg && (n || x.svgOrigin) && (r = j.xOffset,
                s = j.yOffset,
                Ha(a, da(n), k, x.svgOrigin, x.smoothOrigin),
                f = qa(j, "xOrigin", (t ? j : k).xOrigin, k.xOrigin, f, z),
                f = qa(j, "yOrigin", (t ? j : k).yOrigin, k.yOrigin, f, z),
                (r !== j.xOffset || s !== j.yOffset) && (f = qa(j, "xOffset", t ? r : j.xOffset, j.xOffset, f, z),
                f = qa(j, "yOffset", t ? s : j.yOffset, j.yOffset, f, z)),
                n = wa ? null  : "0px 0px"),
                (n || Ba && o && j.zOrigin) && (ya ? (p = !0,
                c = Aa,
                n = (n || X(a, c, e, !1, "50% 50%")) + "",
                f = new pa(u,c,0,0,f,-1,z),
                f.b = u[c],
                f.plugin = h,
                Ba ? (m = j.zOrigin,
                n = n.split(" "),
                j.zOrigin = (n.length > 2 && (0 === m || "0px" !== n[2]) ? parseFloat(n[2]) : m) || 0,
                f.xs0 = f.e = n[0] + " " + (n[1] || "50%") + " 0px",
                f = new pa(j,"zOrigin",0,0,f,-1,f.n),
                f.b = m,
                f.xs0 = f.e = j.zOrigin) : f.xs0 = f.e = n) : da(n + "", j)),
                p && (d._transformType = j.svg && wa || !o && 3 !== this._transformType ? 2 : 3),
                f
            },
            prefix: !0
        }),
        ua("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        ua("borderRadius", {
            defaultValue: "0px",
            parser: function(a, b, c, f, g, h) {
                b = this.format(b);
                var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], z = a.style;
                for (q = parseFloat(a.offsetWidth),
                r = parseFloat(a.offsetHeight),
                i = b.split(" "),
                j = 0; j < y.length; j++)
                    this.p.indexOf("border") && (y[j] = V(y[j])),
                    m = l = X(a, y[j], e, !1, "0px"),
                    -1 !== m.indexOf(" ") && (l = m.split(" "),
                    m = l[0],
                    l = l[1]),
                    n = k = i[j],
                    o = parseFloat(m),
                    t = m.substr((o + "").length),
                    u = "=" === n.charAt(1),
                    u ? (p = parseInt(n.charAt(0) + "1", 10),
                    n = n.substr(2),
                    p *= parseFloat(n),
                    s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n),
                    s = n.substr((p + "").length)),
                    "" === s && (s = d[c] || t),
                    s !== t && (v = Y(a, "borderLeft", o, t),
                    w = Y(a, "borderTop", o, t),
                    "%" === s ? (m = v / q * 100 + "%",
                    l = w / r * 100 + "%") : "em" === s ? (x = Y(a, "borderLeft", 1, "em"),
                    m = v / x + "em",
                    l = w / x + "em") : (m = v + "px",
                    l = w + "px"),
                    u && (n = parseFloat(m) + p + s,
                    k = parseFloat(l) + p + s)),
                    g = ra(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
                return g
            },
            prefix: !0,
            formatter: ma("0px 0px 0px 0px", !1, !0)
        }),
        ua("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(a, b, c, d, f, g) {
                var h, i, j, k, l, m, n = "background-position", o = e || W(a, null ), q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"), r = this.format(b);
                if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && (m = X(a, "backgroundImage").replace(B, ""),
                m && "none" !== m)) {
                    for (h = q.split(" "),
                    i = r.split(" "),
                    N.setAttribute("src", m),
                    j = 2; --j > -1; )
                        q = h[j],
                        k = -1 !== q.indexOf("%"),
                        k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - N.width : a.offsetHeight - N.height,
                        h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                    q = h.join(" ")
                }
                return this.parseComplex(a.style, q, r, f, g)
            },
            formatter: da
        }),
        ua("backgroundSize", {
            defaultValue: "0 0",
            formatter: da
        }),
        ua("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        ua("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        ua("transformStyle", {
            prefix: !0
        }),
        ua("backfaceVisibility", {
            prefix: !0
        }),
        ua("userSelect", {
            prefix: !0
        }),
        ua("margin", {
            parser: na("marginTop,marginRight,marginBottom,marginLeft")
        }),
        ua("padding", {
            parser: na("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        ua("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(a, b, c, d, f, g) {
                var h, i, j;
                return 9 > p ? (i = a.currentStyle,
                j = 8 > p ? " " : ",",
                h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")",
                b = this.format(b).split(",").join(j)) : (h = this.format(X(a, this.p, e, !1, this.dflt)),
                b = this.format(b)),
                this.parseComplex(a.style, h, b, f, g)
            }
        }),
        ua("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        ua("autoRound,strictUnits", {
            parser: function(a, b, c, d, e) {
                return e
            }
        }),
        ua("border", {
            defaultValue: "0px solid #000",
            parser: function(a, b, c, d, f, g) {
                return this.parseComplex(a.style, this.format(X(a, "borderTopWidth", e, !1, "0px") + " " + X(a, "borderTopStyle", e, !1, "solid") + " " + X(a, "borderTopColor", e, !1, "#000")), this.format(b), f, g)
            },
            color: !0,
            formatter: function(a) {
                var b = a.split(" ");
                return b[0] + " " + (b[1] || "solid") + " " + (a.match(la) || ["#000"])[0]
            }
        }),
        ua("borderWidth", {
            parser: na("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        ua("float,cssFloat,styleFloat", {
            parser: function(a, b, c, d, e, f) {
                var g = a.style
                  , h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                return new pa(g,h,0,0,e,-1,c,!1,0,g[h],b)
            }
        });
        var Oa = function(a) {
            var b, c = this.t, d = c.filter || X(this.data, "filter") || "", e = this.s + this.c * a | 0;
            100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"),
            b = !X(this.data, "filter")) : (c.filter = d.replace(x, ""),
            b = !0)),
            b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"),
            -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(v, "opacity=" + e))
        }
        ;
        ua("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(a, b, c, d, f, g) {
                var h = parseFloat(X(a, "opacity", e, !1, "1"))
                  , i = a.style
                  , j = "autoAlpha" === c;
                return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h),
                j && 1 === h && "hidden" === X(a, "visibility", e) && 0 !== b && (h = 0),
                Q ? f = new pa(i,"opacity",h,b - h,f) : (f = new pa(i,"opacity",100 * h,100 * (b - h),f),
                f.xn1 = j ? 1 : 0,
                i.zoom = 1,
                f.type = 2,
                f.b = "alpha(opacity=" + f.s + ")",
                f.e = "alpha(opacity=" + (f.s + f.c) + ")",
                f.data = a,
                f.plugin = g,
                f.setRatio = Oa),
                j && (f = new pa(i,"visibility",0,0,f,-1,null ,!1,0,0 !== h ? "inherit" : "hidden",0 === b ? "hidden" : "inherit"),
                f.xs0 = "inherit",
                d._overwriteProps.push(f.n),
                d._overwriteProps.push(c)),
                f
            }
        });
        var Pa = function(a, b) {
            b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b),
            a.removeProperty(b.replace(z, "-$1").toLowerCase())) : a.removeAttribute(b))
        }
          , Qa = function(a) {
            if (this.t._gsClassPT = this,
            1 === a || 0 === a) {
                this.t.setAttribute("class", 0 === a ? this.b : this.e);
                for (var b = this.data, c = this.t.style; b; )
                    b.v ? c[b.p] = b.v : Pa(c, b.p),
                    b = b._next;
                1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null )
            } else
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        }
        ;
        ua("className", {
            parser: function(a, b, d, f, g, h, i) {
                var j, k, l, m, n, o = a.getAttribute("class") || "", p = a.style.cssText;
                if (g = f._classNamePT = new pa(a,d,0,0,g,2),
                g.setRatio = Qa,
                g.pr = -11,
                c = !0,
                g.b = o,
                k = $(a, e),
                l = a._gsClassPT) {
                    for (m = {},
                    n = l.data; n; )
                        m[n.p] = 1,
                        n = n._next;
                    l.setRatio(1)
                }
                return a._gsClassPT = g,
                g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("\\s*\\b" + b.substr(2) + "\\b"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""),
                a.setAttribute("class", g.e),
                j = _(a, k, $(a), i, m),
                a.setAttribute("class", o),
                g.data = j.firstMPT,
                a.style.cssText = p,
                g = g.xfirst = f.parse(a, j.difs, g, h)
            }
        });
        var Ra = function(a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var b, c, d, e, f, g = this.t.style, h = i.transform.parse;
                if ("all" === this.e)
                    g.cssText = "",
                    e = !0;
                else
                    for (b = this.e.split(" ").join("").split(","),
                    d = b.length; --d > -1; )
                        c = b[d],
                        i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Aa : i[c].p),
                        Pa(g, c);
                e && (Pa(g, ya),
                f = this.t._gsTransform,
                f && (f.svg && (this.t.removeAttribute("data-svg-origin"),
                this.t.removeAttribute("transform")),
                delete this.t._gsTransform))
            }
        }
        ;
        for (ua("clearProps", {
            parser: function(a, b, d, e, f) {
                return f = new pa(a,d,0,0,f,2),
                f.setRatio = Ra,
                f.e = b,
                f.pr = -10,
                f.data = e._tween,
                c = !0,
                f
            }
        }),
        j = "bezier,throwProps,physicsProps,physics2D".split(","),
        sa = j.length; sa--; )
            va(j[sa]);
        j = g.prototype,
        j._firstPT = j._lastParsedTransform = j._transform = null ,
        j._onInitTween = function(a, b, h) {
            if (!a.nodeType)
                return !1;
            this._target = a,
            this._tween = h,
            this._vars = b,
            k = b.autoRound,
            c = !1,
            d = b.suffixMap || g.suffixMap,
            e = W(a, ""),
            f = this._overwriteProps;
            var j, n, p, q, r, s, t, u, v, x = a.style;
            if (l && "" === x.zIndex && (j = X(a, "zIndex", e),
            ("auto" === j || "" === j) && this._addLazySet(x, "zIndex", 0)),
            "string" == typeof b && (q = x.cssText,
            j = $(a, e),
            x.cssText = q + ";" + b,
            j = _(a, j, $(a)).difs,
            !Q && w.test(b) && (j.opacity = parseFloat(RegExp.$1)),
            b = j,
            x.cssText = q),
            b.className ? this._firstPT = n = i.className.parse(a, b.className, "className", this, null , null , b) : this._firstPT = n = this.parse(a, b, null ),
            this._transformType) {
                for (v = 3 === this._transformType,
                ya ? m && (l = !0,
                "" === x.zIndex && (t = X(a, "zIndex", e),
                ("auto" === t || "" === t) && this._addLazySet(x, "zIndex", 0)),
                o && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (v ? "visible" : "hidden"))) : x.zoom = 1,
                p = n; p && p._next; )
                    p = p._next;
                u = new pa(a,"transform",0,0,null ,2),
                this._linkCSSP(u, null , p),
                u.setRatio = ya ? Na : Ma,
                u.data = this._transform || La(a, e, !0),
                u.tween = h,
                u.pr = -1,
                f.pop()
            }
            if (c) {
                for (; n; ) {
                    for (s = n._next,
                    p = q; p && p.pr > n.pr; )
                        p = p._next;
                    (n._prev = p ? p._prev : r) ? n._prev._next = n : q = n,
                    (n._next = p) ? p._prev = n : r = n,
                    n = s
                }
                this._firstPT = q
            }
            return !0
        }
        ,
        j.parse = function(a, b, c, f) {
            var g, h, j, l, m, n, o, p, q, r, s = a.style;
            for (g in b)
                n = b[g],
                h = i[g],
                h ? c = h.parse(a, n, g, this, c, f, b) : (m = X(a, g, e) + "",
                q = "string" == typeof n,
                "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || q && y.test(n) ? (q || (n = ja(n),
                n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"),
                c = ra(s, g, m, n, !0, "transparent", c, 0, f)) : !q || -1 === n.indexOf(" ") && -1 === n.indexOf(",") ? (j = parseFloat(m),
                o = j || 0 === j ? m.substr((j + "").length) : "",
                ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ca(a, g, e),
                o = "px") : "left" === g || "top" === g ? (j = Z(a, g, e),
                o = "px") : (j = "opacity" !== g ? 0 : 1,
                o = "")),
                r = q && "=" === n.charAt(1),
                r ? (l = parseInt(n.charAt(0) + "1", 10),
                n = n.substr(2),
                l *= parseFloat(n),
                p = n.replace(u, "")) : (l = parseFloat(n),
                p = q ? n.replace(u, "") : ""),
                "" === p && (p = g in d ? d[g] : o),
                n = l || 0 === l ? (r ? l + j : l) + p : b[g],
                o !== p && "" !== p && (l || 0 === l) && j && (j = Y(a, g, j, o),
                "%" === p ? (j /= Y(a, g, 100, "%") / 100,
                b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= Y(a, g, 1, p) : "px" !== p && (l = Y(a, g, l, p),
                p = "px"),
                r && (l || 0 === l) && (n = l + j + p)),
                r && (l += j),
                !j && 0 !== j || !l && 0 !== l ? void 0 !== s[g] && (n || n + "" != "NaN" && null  != n) ? (c = new pa(s,g,l || j || 0,0,c,-1,g,!1,0,m,n),
                c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : S("invalid " + g + " tween value: " + b[g]) : (c = new pa(s,g,j,l - j,c,0,g,k !== !1 && ("px" === p || "zIndex" === g),0,m,n),
                c.xs0 = p)) : c = ra(s, g, m, n, !0, null , c, 0, f)),
                f && c && !c.plugin && (c.plugin = f);
            return c
        }
        ,
        j.setRatio = function(a) {
            var b, c, d, e = this._firstPT, f = 1e-6;
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                    for (; e; ) {
                        if (b = e.c * a + e.s,
                        e.r ? b = Math.round(b) : f > b && b > -f && (b = 0),
                        e.type)
                            if (1 === e.type)
                                if (d = e.l,
                                2 === d)
                                    e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                else if (3 === d)
                                    e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                else if (4 === d)
                                    e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                else if (5 === d)
                                    e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                else {
                                    for (c = e.xs0 + b + e.xs1,
                                    d = 1; d < e.l; d++)
                                        c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                }
                            else
                                -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                        else
                            e.t[e.p] = b + e.xs0;
                        e = e._next
                    }
                else
                    for (; e; )
                        2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a),
                        e = e._next;
            else
                for (; e; ) {
                    if (2 !== e.type)
                        if (e.r && -1 !== e.type)
                            if (b = Math.round(e.s + e.c),
                            e.type) {
                                if (1 === e.type) {
                                    for (d = e.l,
                                    c = e.xs0 + b + e.xs1,
                                    d = 1; d < e.l; d++)
                                        c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                }
                            } else
                                e.t[e.p] = b + e.xs0;
                        else
                            e.t[e.p] = e.e;
                    else
                        e.setRatio(a);
                    e = e._next
                }
        }
        ,
        j._enableTransforms = function(a) {
            this._transform = this._transform || La(this._target, e, !0),
            this._transformType = this._transform.svg && wa || !a && 3 !== this._transformType ? 2 : 3
        }
        ;
        var Sa = function(a) {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null , !0)
        }
        ;
        j._addLazySet = function(a, b, c) {
            var d = this._firstPT = new pa(a,b,0,0,this._firstPT,2);
            d.e = c,
            d.setRatio = Sa,
            d.data = this
        }
        ,
        j._linkCSSP = function(a, b, c, d) {
            return a && (b && (b._prev = a),
            a._next && (a._next._prev = a._prev),
            a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next,
            d = !0),
            c ? c._next = a : d || null  !== this._firstPT || (this._firstPT = a),
            a._next = b,
            a._prev = c),
            a
        }
        ,
        j._kill = function(b) {
            var c, d, e, f = b;
            if (b.autoAlpha || b.alpha) {
                f = {};
                for (d in b)
                    f[d] = b[d];
                f.opacity = 1,
                f.autoAlpha && (f.visibility = 1)
            }
            return b.className && (c = this._classNamePT) && (e = c.xfirst,
            e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next),
            c._next && this._linkCSSP(c._next, c._next._next, e._prev),
            this._classNamePT = null ),
            a.prototype._kill.call(this, f)
        }
        ;
        var Ta = function(a, b, c) {
            var d, e, f, g;
            if (a.slice)
                for (e = a.length; --e > -1; )
                    Ta(a[e], b, c);
            else
                for (d = a.childNodes,
                e = d.length; --e > -1; )
                    f = d[e],
                    g = f.type,
                    f.style && (b.push($(f)),
                    c && c.push(f)),
                    1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Ta(f, b, c)
        }
        ;
        return g.cascadeTo = function(a, c, d) {
            var e, f, g, h, i = b.to(a, c, d), j = [i], k = [], l = [], m = [], n = b._internals.reservedProps;
            for (a = i._targets || i.target,
            Ta(a, k, m),
            i.render(c, !0, !0),
            Ta(a, l),
            i.render(0, !0, !0),
            i._enabled(!0),
            e = m.length; --e > -1; )
                if (f = _(m[e], k[e], l[e]),
                f.firstMPT) {
                    f = f.difs;
                    for (g in d)
                        n[g] && (f[g] = d[g]);
                    h = {};
                    for (g in f)
                        h[g] = k[e][g];
                    j.push(b.fromTo(m[e], c, h, f))
                }
            return j
        }
        ,
        a.activate([g]),
        g
    }, !0),
    function() {
        var a = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.5",
            priority: -1,
            API: 2,
            init: function(a, b, c) {
                return this._tween = c,
                !0
            }
        })
          , b = function(a) {
            for (; a; )
                a.f || a.blob || (a.r = 1),
                a = a._next
        }
          , c = a.prototype;
        c._onInitAllProps = function() {
            for (var a, c, d, e = this._tween, f = e.vars.roundProps.join ? e.vars.roundProps : e.vars.roundProps.split(","), g = f.length, h = {}, i = e._propLookup.roundProps; --g > -1; )
                h[f[g]] = 1;
            for (g = f.length; --g > -1; )
                for (a = f[g],
                c = e._firstPT; c; )
                    d = c._next,
                    c.pg ? c.t._roundProps(h, !0) : c.n === a && (2 === c.f && c.t ? b(c.t._firstPT) : (this._add(c.t, a, c.s, c.c),
                    d && (d._prev = c._prev),
                    c._prev ? c._prev._next = d : e._firstPT === c && (e._firstPT = d),
                    c._next = c._prev = null ,
                    e._propLookup[a] = i)),
                    c = d;
            return !1
        }
        ,
        c._add = function(a, b, c, d) {
            this._addTween(a, b, c, c + d, b, !0),
            this._overwriteProps.push(b)
        }
    }(),
    function() {
        _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.5.0",
            init: function(a, b, c) {
                var d;
                if ("function" != typeof a.setAttribute)
                    return !1;
                for (d in b)
                    this._addTween(a, "setAttribute", a.getAttribute(d) + "", b[d] + "", d, !1, d),
                    this._overwriteProps.push(d);
                return !0
            }
        })
    }(),
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.2.1",
        API: 2,
        init: function(a, b, c) {
            "object" != typeof b && (b = {
                rotation: b
            }),
            this.finals = {};
            var d, e, f, g, h, i, j = b.useRadians === !0 ? 2 * Math.PI : 360, k = 1e-6;
            for (d in b)
                "useRadians" !== d && (i = (b[d] + "").split("_"),
                e = i[0],
                f = parseFloat("function" != typeof a[d] ? a[d] : a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]()),
                g = this.finals[d] = "string" == typeof e && "=" === e.charAt(1) ? f + parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2)) : Number(e) || 0,
                h = g - f,
                i.length && (e = i.join("_"),
                -1 !== e.indexOf("short") && (h %= j,
                h !== h % (j / 2) && (h = 0 > h ? h + j : h - j)),
                -1 !== e.indexOf("_cw") && 0 > h ? h = (h + 9999999999 * j) % j - (h / j | 0) * j : -1 !== e.indexOf("ccw") && h > 0 && (h = (h - 9999999999 * j) % j - (h / j | 0) * j)),
                (h > k || -k > h) && (this._addTween(a, d, f, f + h, d),
                this._overwriteProps.push(d)));
            return !0
        },
        set: function(a) {
            var b;
            if (1 !== a)
                this._super.setRatio.call(this, a);
            else
                for (b = this._firstPT; b; )
                    b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p],
                    b = b._next
        }
    })._autoCSS = !0,
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(a) {
        var b, c, d, e = _gsScope.GreenSockGlobals || _gsScope, f = e.com.greensock, g = 2 * Math.PI, h = Math.PI / 2, i = f._class, j = function(b, c) {
            var d = i("easing." + b, function() {}, !0)
              , e = d.prototype = new a;
            return e.constructor = d,
            e.getRatio = c,
            d
        }
        , k = a.register || function() {}
        , l = function(a, b, c, d, e) {
            var f = i("easing." + a, {
                easeOut: new b,
                easeIn: new c,
                easeInOut: new d
            }, !0);
            return k(f, a),
            f
        }
        , m = function(a, b, c) {
            this.t = a,
            this.v = b,
            c && (this.next = c,
            c.prev = this,
            this.c = c.v - b,
            this.gap = c.t - a)
        }
        , n = function(b, c) {
            var d = i("easing." + b, function(a) {
                this._p1 = a || 0 === a ? a : 1.70158,
                this._p2 = 1.525 * this._p1
            }, !0)
              , e = d.prototype = new a;
            return e.constructor = d,
            e.getRatio = c,
            e.config = function(a) {
                return new d(a)
            }
            ,
            d
        }
        , o = l("Back", n("BackOut", function(a) {
            return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
        }), n("BackIn", function(a) {
            return a * a * ((this._p1 + 1) * a - this._p1)
        }), n("BackInOut", function(a) {
            return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
        })), p = i("easing.SlowMo", function(a, b, c) {
            b = b || 0 === b ? b : .7,
            null  == a ? a = .7 : a > 1 && (a = 1),
            this._p = 1 !== a ? b : 0,
            this._p1 = (1 - a) / 2,
            this._p2 = a,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = c === !0
        }, !0), q = p.prototype = new a;
        return q.constructor = p,
        q.getRatio = function(a) {
            var b = a + (.5 - a) * this._p;
            return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
        }
        ,
        p.ease = new p(.7,.7),
        q.config = p.config = function(a, b, c) {
            return new p(a,b,c)
        }
        ,
        b = i("easing.SteppedEase", function(a) {
            a = a || 1,
            this._p1 = 1 / a,
            this._p2 = a + 1
        }, !0),
        q = b.prototype = new a,
        q.constructor = b,
        q.getRatio = function(a) {
            return 0 > a ? a = 0 : a >= 1 && (a = .999999999),
            (this._p2 * a >> 0) * this._p1
        }
        ,
        q.config = b.config = function(a) {
            return new b(a)
        }
        ,
        c = i("easing.RoughEase", function(b) {
            b = b || {};
            for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null , r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1; )
                c = o ? Math.random() : 1 / l * n,
                d = q ? q.getRatio(c) : c,
                "none" === i ? e = r : "out" === i ? (f = 1 - c,
                e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c,
                e = f * f * .5 * r) : (f = 2 * (1 - c),
                e = f * f * .5 * r),
                o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e,
                p && (d > 1 ? d = 1 : 0 > d && (d = 0)),
                j[k++] = {
                    x: c,
                    y: d
                };
            for (j.sort(function(a, b) {
                return a.x - b.x
            }),
            h = new m(1,1,null ),
            n = l; --n > -1; )
                g = j[n],
                h = new m(g.x,g.y,h);
            this._prev = new m(0,0,0 !== h.t ? h : h.next)
        }, !0),
        q = c.prototype = new a,
        q.constructor = c,
        q.getRatio = function(a) {
            var b = this._prev;
            if (a > b.t) {
                for (; b.next && a >= b.t; )
                    b = b.next;
                b = b.prev
            } else
                for (; b.prev && a <= b.t; )
                    b = b.prev;
            return this._prev = b,
            b.v + (a - b.t) / b.gap * b.c
        }
        ,
        q.config = function(a) {
            return new c(a)
        }
        ,
        c.ease = new c,
        l("Bounce", j("BounceOut", function(a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }), j("BounceIn", function(a) {
            return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
        }), j("BounceInOut", function(a) {
            var b = .5 > a;
            return a = b ? 1 - 2 * a : 2 * a - 1,
            a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375,
            b ? .5 * (1 - a) : .5 * a + .5
        })),
        l("Circ", j("CircOut", function(a) {
            return Math.sqrt(1 - (a -= 1) * a)
        }), j("CircIn", function(a) {
            return -(Math.sqrt(1 - a * a) - 1)
        }), j("CircInOut", function(a) {
            return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        })),
        d = function(b, c, d) {
            var e = i("easing." + b, function(a, b) {
                this._p1 = a >= 1 ? a : 1,
                this._p2 = (b || d) / (1 > a ? a : 1),
                this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0),
                this._p2 = g / this._p2
            }, !0)
              , f = e.prototype = new a;
            return f.constructor = e,
            f.getRatio = c,
            f.config = function(a, b) {
                return new e(a,b)
            }
            ,
            e
        }
        ,
        l("Elastic", d("ElasticOut", function(a) {
            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1
        }, .3), d("ElasticIn", function(a) {
            return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2))
        }, .3), d("ElasticInOut", function(a) {
            return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1
        }, .45)),
        l("Expo", j("ExpoOut", function(a) {
            return 1 - Math.pow(2, -10 * a)
        }), j("ExpoIn", function(a) {
            return Math.pow(2, 10 * (a - 1)) - .001
        }), j("ExpoInOut", function(a) {
            return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
        })),
        l("Sine", j("SineOut", function(a) {
            return Math.sin(a * h)
        }), j("SineIn", function(a) {
            return -Math.cos(a * h) + 1
        }), j("SineInOut", function(a) {
            return -.5 * (Math.cos(Math.PI * a) - 1)
        })),
        i("easing.EaseLookup", {
            find: function(b) {
                return a.map[b]
            }
        }, !0),
        k(e.SlowMo, "SlowMo", "ease,"),
        k(c, "RoughEase", "ease,"),
        k(b, "SteppedEase", "ease,"),
        o
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(a, b) {
    "use strict";
    var c = a.GreenSockGlobals = a.GreenSockGlobals || a;
    if (!c.TweenLite) {
        var d, e, f, g, h, i = function(a) {
            var b, d = a.split("."), e = c;
            for (b = 0; b < d.length; b++)
                e[d[b]] = e = e[d[b]] || {};
            return e
        }
        , j = i("com.greensock"), k = 1e-10, l = function(a) {
            var b, c = [], d = a.length;
            for (b = 0; b !== d; c.push(a[b++]))
                ;
            return c
        }
        , m = function() {}
        , n = function() {
            var a = Object.prototype.toString
              , b = a.call([]);
            return function(c) {
                return null  != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
            }
        }(), o = {}, p = function(d, e, f, g) {
            this.sc = o[d] ? o[d].sc : [],
            o[d] = this,
            this.gsClass = null ,
            this.func = f;
            var h = [];
            this.check = function(j) {
                for (var k, l, m, n, q, r = e.length, s = r; --r > -1; )
                    (k = o[e[r]] || new p(e[r],[])).gsClass ? (h[r] = k.gsClass,
                    s--) : j && k.sc.push(this);
                if (0 === s && f)
                    for (l = ("com.greensock." + d).split("."),
                    m = l.pop(),
                    n = i(l.join("."))[m] = this.gsClass = f.apply(f, h),
                    g && (c[m] = n,
                    q = "undefined" != typeof module && module.exports,
                    !q && "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function() {
                        return n
                    }) : d === b && q && (module.exports = n)),
                    r = 0; r < this.sc.length; r++)
                        this.sc[r].check()
            }
            ,
            this.check(!0)
        }
        , q = a._gsDefine = function(a, b, c, d) {
            return new p(a,b,c,d)
        }
        , r = j._class = function(a, b, c) {
            return b = b || function() {}
            ,
            q(a, [], function() {
                return b
            }, c),
            b
        }
        ;
        q.globals = c;
        var s = [0, 0, 1, 1]
          , t = []
          , u = r("easing.Ease", function(a, b, c, d) {
            this._func = a,
            this._type = c || 0,
            this._power = d || 0,
            this._params = b ? s.concat(b) : s
        }, !0)
          , v = u.map = {}
          , w = u.register = function(a, b, c, d) {
            for (var e, f, g, h, i = b.split(","), k = i.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --k > -1; )
                for (f = i[k],
                e = d ? r("easing." + f, null , !0) : j.easing[f] || {},
                g = l.length; --g > -1; )
                    h = l[g],
                    v[f + "." + h] = v[h + f] = e[h] = a.getRatio ? a : a[h] || new a
        }
        ;
        for (f = u.prototype,
        f._calcEnd = !1,
        f.getRatio = function(a) {
            if (this._func)
                return this._params[0] = a,
                this._func.apply(null , this._params);
            var b = this._type
              , c = this._power
              , d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
            return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d),
            1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
        }
        ,
        d = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
        e = d.length; --e > -1; )
            f = d[e] + ",Power" + e,
            w(new u(null ,null ,1,e), f, "easeOut", !0),
            w(new u(null ,null ,2,e), f, "easeIn" + (0 === e ? ",easeNone" : "")),
            w(new u(null ,null ,3,e), f, "easeInOut");
        v.linear = j.easing.Linear.easeIn,
        v.swing = j.easing.Quad.easeInOut;
        var x = r("events.EventDispatcher", function(a) {
            this._listeners = {},
            this._eventTarget = a || this
        });
        f = x.prototype,
        f.addEventListener = function(a, b, c, d, e) {
            e = e || 0;
            var f, i, j = this._listeners[a], k = 0;
            for (null  == j && (this._listeners[a] = j = []),
            i = j.length; --i > -1; )
                f = j[i],
                f.c === b && f.s === c ? j.splice(i, 1) : 0 === k && f.pr < e && (k = i + 1);
            j.splice(k, 0, {
                c: b,
                s: c,
                up: d,
                pr: e
            }),
            this !== g || h || g.wake()
        }
        ,
        f.removeEventListener = function(a, b) {
            var c, d = this._listeners[a];
            if (d)
                for (c = d.length; --c > -1; )
                    if (d[c].c === b)
                        return void d.splice(c, 1)
        }
        ,
        f.dispatchEvent = function(a) {
            var b, c, d, e = this._listeners[a];
            if (e)
                for (b = e.length,
                c = this._eventTarget; --b > -1; )
                    d = e[b],
                    d && (d.up ? d.c.call(d.s || c, {
                        type: a,
                        target: c
                    }) : d.c.call(d.s || c))
        }
        ;
        var y = a.requestAnimationFrame
          , z = a.cancelAnimationFrame
          , A = Date.now || function() {
            return (new Date).getTime()
        }
          , B = A();
        for (d = ["ms", "moz", "webkit", "o"],
        e = d.length; --e > -1 && !y; )
            y = a[d[e] + "RequestAnimationFrame"],
            z = a[d[e] + "CancelAnimationFrame"] || a[d[e] + "CancelRequestAnimationFrame"];
        r("Ticker", function(a, b) {
            var c, d, e, f, i, j = this, l = A(), n = b !== !1 && y ? "auto" : !1, o = 500, p = 33, q = "tick", r = function(a) {
                var b, g, h = A() - B;
                h > o && (l += h - p),
                B += h,
                j.time = (B - l) / 1e3,
                b = j.time - i,
                (!c || b > 0 || a === !0) && (j.frame++,
                i += b + (b >= f ? .004 : f - b),
                g = !0),
                a !== !0 && (e = d(r)),
                g && j.dispatchEvent(q)
            }
            ;
            x.call(j),
            j.time = j.frame = 0,
            j.tick = function() {
                r(!0)
            }
            ,
            j.lagSmoothing = function(a, b) {
                o = a || 1 / k,
                p = Math.min(b, o, 0)
            }
            ,
            j.sleep = function() {
                null  != e && (n && z ? z(e) : clearTimeout(e),
                d = m,
                e = null ,
                j === g && (h = !1))
            }
            ,
            j.wake = function(a) {
                null  !== e ? j.sleep() : a ? l += -B + (B = A()) : j.frame > 10 && (B = A() - o + 5),
                d = 0 === c ? m : n && y ? y : function(a) {
                    return setTimeout(a, 1e3 * (i - j.time) + 1 | 0)
                }
                ,
                j === g && (h = !0),
                r(2)
            }
            ,
            j.fps = function(a) {
                return arguments.length ? (c = a,
                f = 1 / (c || 60),
                i = this.time + f,
                void j.wake()) : c
            }
            ,
            j.useRAF = function(a) {
                return arguments.length ? (j.sleep(),
                n = a,
                void j.fps(c)) : n
            }
            ,
            j.fps(a),
            setTimeout(function() {
                "auto" === n && j.frame < 5 && "hidden" !== document.visibilityState && j.useRAF(!1)
            }, 1500)
        }),
        f = j.Ticker.prototype = new j.events.EventDispatcher,
        f.constructor = j.Ticker;
        var C = r("core.Animation", function(a, b) {
            if (this.vars = b = b || {},
            this._duration = this._totalDuration = a || 0,
            this._delay = Number(b.delay) || 0,
            this._timeScale = 1,
            this._active = b.immediateRender === !0,
            this.data = b.data,
            this._reversed = b.reversed === !0,
            V) {
                h || g.wake();
                var c = this.vars.useFrames ? U : V;
                c.add(this, c._time),
                this.vars.paused && this.paused(!0)
            }
        });
        g = C.ticker = new j.Ticker,
        f = C.prototype,
        f._dirty = f._gc = f._initted = f._paused = !1,
        f._totalTime = f._time = 0,
        f._rawPrevTime = -1,
        f._next = f._last = f._onUpdate = f._timeline = f.timeline = null ,
        f._paused = !1;
        var D = function() {
            h && A() - B > 2e3 && g.wake(),
            setTimeout(D, 2e3)
        }
        ;
        D(),
        f.play = function(a, b) {
            return null  != a && this.seek(a, b),
            this.reversed(!1).paused(!1)
        }
        ,
        f.pause = function(a, b) {
            return null  != a && this.seek(a, b),
            this.paused(!0)
        }
        ,
        f.resume = function(a, b) {
            return null  != a && this.seek(a, b),
            this.paused(!1)
        }
        ,
        f.seek = function(a, b) {
            return this.totalTime(Number(a), b !== !1)
        }
        ,
        f.restart = function(a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
        }
        ,
        f.reverse = function(a, b) {
            return null  != a && this.seek(a || this.totalDuration(), b),
            this.reversed(!0).paused(!1)
        }
        ,
        f.render = function(a, b, c) {}
        ,
        f.invalidate = function() {
            return this._time = this._totalTime = 0,
            this._initted = this._gc = !1,
            this._rawPrevTime = -1,
            (this._gc || !this.timeline) && this._enabled(!0),
            this
        }
        ,
        f.isActive = function() {
            var a, b = this._timeline, c = this._startTime;
            return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && a < c + this.totalDuration() / this._timeScale
        }
        ,
        f._enabled = function(a, b) {
            return h || g.wake(),
            this._gc = !a,
            this._active = this.isActive(),
            b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)),
            !1
        }
        ,
        f._kill = function(a, b) {
            return this._enabled(!1, !1)
        }
        ,
        f.kill = function(a, b) {
            return this._kill(a, b),
            this
        }
        ,
        f._uncache = function(a) {
            for (var b = a ? this : this.timeline; b; )
                b._dirty = !0,
                b = b.timeline;
            return this
        }
        ,
        f._swapSelfInParams = function(a) {
            for (var b = a.length, c = a.concat(); --b > -1; )
                "{self}" === a[b] && (c[b] = this);
            return c
        }
        ,
        f._callback = function(a) {
            var b = this.vars;
            b[a].apply(b[a + "Scope"] || b.callbackScope || this, b[a + "Params"] || t)
        }
        ,
        f.eventCallback = function(a, b, c, d) {
            if ("on" === (a || "").substr(0, 2)) {
                var e = this.vars;
                if (1 === arguments.length)
                    return e[a];
                null  == b ? delete e[a] : (e[a] = b,
                e[a + "Params"] = n(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c,
                e[a + "Scope"] = d),
                "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        }
        ,
        f.delay = function(a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay),
            this._delay = a,
            this) : this._delay
        }
        ,
        f.duration = function(a) {
            return arguments.length ? (this._duration = this._totalDuration = a,
            this._uncache(!0),
            this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0),
            this) : (this._dirty = !1,
            this._duration)
        }
        ,
        f.totalDuration = function(a) {
            return this._dirty = !1,
            arguments.length ? this.duration(a) : this._totalDuration
        }
        ,
        f.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        }
        ,
        f.totalTime = function(a, b, c) {
            if (h || g.wake(),
            !arguments.length)
                return this._totalTime;
            if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()),
                this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var d = this._totalDuration
                      , e = this._timeline;
                    if (a > d && !c && (a = d),
                    this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale,
                    e._dirty || this._uncache(!1),
                    e._timeline)
                        for (; e._timeline; )
                            e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0),
                            e = e._timeline
                }
                this._gc && this._enabled(!0, !1),
                (this._totalTime !== a || 0 === this._duration) && (I.length && X(),
                this.render(a, b, !1),
                I.length && X())
            }
            return this
        }
        ,
        f.progress = f.totalProgress = function(a, b) {
            var c = this.duration();
            return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
        }
        ,
        f.startTime = function(a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a,
            this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)),
            this) : this._startTime
        }
        ,
        f.endTime = function(a) {
            return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
        }
        ,
        f.timeScale = function(a) {
            if (!arguments.length)
                return this._timeScale;
            if (a = a || k,
            this._timeline && this._timeline.smoothChildTiming) {
                var b = this._pauseTime
                  , c = b || 0 === b ? b : this._timeline.totalTime();
                this._startTime = c - (c - this._startTime) * this._timeScale / a
            }
            return this._timeScale = a,
            this._uncache(!1)
        }
        ,
        f.reversed = function(a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a,
            this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
            this) : this._reversed
        }
        ,
        f.paused = function(a) {
            if (!arguments.length)
                return this._paused;
            var b, c, d = this._timeline;
            return a != this._paused && d && (h || a || g.wake(),
            b = d.rawTime(),
            c = b - this._pauseTime,
            !a && d.smoothChildTiming && (this._startTime += c,
            this._uncache(!1)),
            this._pauseTime = a ? b : null ,
            this._paused = a,
            this._active = this.isActive(),
            !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale,
            this.render(b, b === this._totalTime, !0))),
            this._gc && !a && this._enabled(!0, !1),
            this
        }
        ;
        var E = r("core.SimpleTimeline", function(a) {
            C.call(this, 0, a),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        f = E.prototype = new C,
        f.constructor = E,
        f.kill()._gc = !1,
        f._first = f._last = f._recent = null ,
        f._sortChildren = !1,
        f.add = f.insert = function(a, b, c, d) {
            var e, f;
            if (a._startTime = Number(b || 0) + a._delay,
            a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale),
            a.timeline && a.timeline._remove(a, !0),
            a.timeline = a._timeline = this,
            a._gc && a._enabled(!0, !0),
            e = this._last,
            this._sortChildren)
                for (f = a._startTime; e && e._startTime > f; )
                    e = e._prev;
            return e ? (a._next = e._next,
            e._next = a) : (a._next = this._first,
            this._first = a),
            a._next ? a._next._prev = a : this._last = a,
            a._prev = e,
            this._recent = a,
            this._timeline && this._uncache(!0),
            this
        }
        ,
        f._remove = function(a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0),
            a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next),
            a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev),
            a._next = a._prev = a.timeline = null ,
            a === this._recent && (this._recent = this._last),
            this._timeline && this._uncache(!0)),
            this
        }
        ,
        f.render = function(a, b, c) {
            var d, e = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; e; )
                d = e._next,
                (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)),
                e = d
        }
        ,
        f.rawTime = function() {
            return h || g.wake(),
            this._totalTime
        }
        ;
        var F = r("TweenLite", function(b, c, d) {
            if (C.call(this, c, d),
            this.render = F.prototype.render,
            null  == b)
                throw "Cannot tween a null target.";
            this.target = b = "string" != typeof b ? b : F.selector(b) || b;
            var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType), i = this.vars.overwrite;
            if (this._overwrite = i = null  == i ? T[F.defaultOverwrite] : "number" == typeof i ? i >> 0 : T[i],
            (h || b instanceof Array || b.push && n(b)) && "number" != typeof b[0])
                for (this._targets = g = l(b),
                this._propLookup = [],
                this._siblings = [],
                e = 0; e < g.length; e++)
                    f = g[e],
                    f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1),
                    this._targets = g = g.concat(l(f))) : (this._siblings[e] = Y(f, this, !1),
                    1 === i && this._siblings[e].length > 1 && $(f, this, null , 1, this._siblings[e])) : (f = g[e--] = F.selector(f),
                    "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
            else
                this._propLookup = {},
                this._siblings = Y(b, this, !1),
                1 === i && this._siblings.length > 1 && $(b, this, null , 1, this._siblings);
            (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -k,
            this.render(-this._delay))
        }, !0)
          , G = function(b) {
            return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
        }
          , H = function(a, b) {
            var c, d = {};
            for (c in a)
                S[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!P[c] || P[c] && P[c]._autoCSS) || (d[c] = a[c],
                delete a[c]);
            a.css = d
        }
        ;
        f = F.prototype = new C,
        f.constructor = F,
        f.kill()._gc = !1,
        f.ratio = 0,
        f._firstPT = f._targets = f._overwrittenProps = f._startAt = null ,
        f._notifyPluginsOfEnabled = f._lazy = !1,
        F.version = "1.18.2",
        F.defaultEase = f._ease = new u(null ,null ,1,1),
        F.defaultOverwrite = "auto",
        F.ticker = g,
        F.autoSleep = 120,
        F.lagSmoothing = function(a, b) {
            g.lagSmoothing(a, b)
        }
        ,
        F.selector = a.$ || a.jQuery || function(b) {
            var c = a.$ || a.jQuery;
            return c ? (F.selector = c,
            c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
        }
        ;
        var I = []
          , J = {}
          , K = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
          , L = function(a) {
            for (var b, c = this._firstPT, d = 1e-6; c; )
                b = c.blob ? a ? this.join("") : this.start : c.c * a + c.s,
                c.r ? b = Math.round(b) : d > b && b > -d && (b = 0),
                c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b,
                c = c._next
        }
          , M = function(a, b, c, d) {
            var e, f, g, h, i, j, k, l = [a, b], m = 0, n = "", o = 0;
            for (l.start = a,
            c && (c(l),
            a = l[0],
            b = l[1]),
            l.length = 0,
            e = a.match(K) || [],
            f = b.match(K) || [],
            d && (d._next = null ,
            d.blob = 1,
            l._firstPT = d),
            i = f.length,
            h = 0; i > h; h++)
                k = f[h],
                j = b.substr(m, b.indexOf(k, m) - m),
                n += j || !h ? j : ",",
                m += j.length,
                o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1),
                k === e[h] || e.length <= h ? n += k : (n && (l.push(n),
                n = ""),
                g = parseFloat(e[h]),
                l.push(g),
                l._firstPT = {
                    _next: l._firstPT,
                    t: l,
                    p: l.length - 1,
                    s: g,
                    c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
                    f: 0,
                    r: o && 4 > o
                }),
                m += k.length;
            return n += b.substr(m),
            n && l.push(n),
            l.setRatio = L,
            l
        }
          , N = function(a, b, c, d, e, f, g, h) {
            var i, j, k = "get" === c ? a[b] : c, l = typeof a[b], m = "string" == typeof d && "=" === d.charAt(1), n = {
                t: a,
                p: b,
                s: k,
                f: "function" === l,
                pg: 0,
                n: e || b,
                r: f,
                pr: 0,
                c: m ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - k || 0
            };
            return "number" !== l && ("function" === l && "get" === c && (j = b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
            n.s = k = g ? a[j](g) : a[j]()),
            "string" == typeof k && (g || isNaN(k)) ? (n.fp = g,
            i = M(k, d, h || F.defaultStringFilter, n),
            n = {
                t: i,
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: e || b,
                pr: 0
            }) : m || (n.s = parseFloat(k),
            n.c = parseFloat(d) - n.s || 0)),
            n.c ? ((n._next = this._firstPT) && (n._next._prev = n),
            this._firstPT = n,
            n) : void 0
        }
          , O = F._internals = {
            isArray: n,
            isSelector: G,
            lazyTweens: I,
            blobDif: M
        }
          , P = F._plugins = {}
          , Q = O.tweenLookup = {}
          , R = 0
          , S = O.reservedProps = {
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
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1
        }
          , T = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        }
          , U = C._rootFramesTimeline = new E
          , V = C._rootTimeline = new E
          , W = 30
          , X = O.lazyRender = function() {
            var a, b = I.length;
            for (J = {}; --b > -1; )
                a = I[b],
                a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0),
                a._lazy = !1);
            I.length = 0
        }
        ;
        V._startTime = g.time,
        U._startTime = g.frame,
        V._active = U._active = !0,
        setTimeout(X, 1),
        C._updateRoot = F.render = function() {
            var a, b, c;
            if (I.length && X(),
            V.render((g.time - V._startTime) * V._timeScale, !1, !1),
            U.render((g.frame - U._startTime) * U._timeScale, !1, !1),
            I.length && X(),
            g.frame >= W) {
                W = g.frame + (parseInt(F.autoSleep, 10) || 120);
                for (c in Q) {
                    for (b = Q[c].tweens,
                    a = b.length; --a > -1; )
                        b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete Q[c]
                }
                if (c = V._first,
                (!c || c._paused) && F.autoSleep && !U._first && 1 === g._listeners.tick.length) {
                    for (; c && c._paused; )
                        c = c._next;
                    c || g.sleep()
                }
            }
        }
        ,
        g.addEventListener("tick", C._updateRoot);
        var Y = function(a, b, c) {
            var d, e, f = a._gsTweenID;
            if (Q[f || (a._gsTweenID = f = "t" + R++)] || (Q[f] = {
                target: a,
                tweens: []
            }),
            b && (d = Q[f].tweens,
            d[e = d.length] = b,
            c))
                for (; --e > -1; )
                    d[e] === b && d.splice(e, 1);
            return Q[f].tweens
        }
          , Z = function(a, b, c, d) {
            var e, f, g = a.vars.onOverwrite;
            return g && (e = g(a, b, c, d)),
            g = F.onOverwrite,
            g && (f = g(a, b, c, d)),
            e !== !1 && f !== !1
        }
          , $ = function(a, b, c, d, e) {
            var f, g, h, i;
            if (1 === d || d >= 4) {
                for (i = e.length,
                f = 0; i > f; f++)
                    if ((h = e[f]) !== b)
                        h._gc || h._kill(null , a, b) && (g = !0);
                    else if (5 === d)
                        break;
                return g
            }
            var j, l = b._startTime + k, m = [], n = 0, o = 0 === b._duration;
            for (f = e.length; --f > -1; )
                (h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || _(b, 0, o),
                0 === _(h, j, o) && (m[n++] = h)) : h._startTime <= l && h._startTime + h.totalDuration() / h._timeScale > l && ((o || !h._initted) && l - h._startTime <= 2e-10 || (m[n++] = h)));
            for (f = n; --f > -1; )
                if (h = m[f],
                2 === d && h._kill(c, a, b) && (g = !0),
                2 !== d || !h._firstPT && h._initted) {
                    if (2 !== d && !Z(h, b))
                        continue;h._enabled(!1, !1) && (g = !0)
                }
            return g
        }
          , _ = function(a, b, c) {
            for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline; ) {
                if (f += d._startTime,
                e *= d._timeScale,
                d._paused)
                    return -100;
                d = d._timeline
            }
            return f /= e,
            f > b ? f - b : c && f === b || !a._initted && 2 * k > f - b ? k : (f += a.totalDuration() / a._timeScale / e) > b + k ? 0 : f - b - k
        }
        ;
        f._init = function() {
            var a, b, c, d, e, f = this.vars, g = this._overwrittenProps, h = this._duration, i = !!f.immediateRender, j = f.ease;
            if (f.startAt) {
                this._startAt && (this._startAt.render(-1, !0),
                this._startAt.kill()),
                e = {};
                for (d in f.startAt)
                    e[d] = f.startAt[d];
                if (e.overwrite = !1,
                e.immediateRender = !0,
                e.lazy = i && f.lazy !== !1,
                e.startAt = e.delay = null ,
                this._startAt = F.to(this.target, 0, e),
                i)
                    if (this._time > 0)
                        this._startAt = null ;
                    else if (0 !== h)
                        return
            } else if (f.runBackwards && 0 !== h)
                if (this._startAt)
                    this._startAt.render(-1, !0),
                    this._startAt.kill(),
                    this._startAt = null ;
                else {
                    0 !== this._time && (i = !1),
                    c = {};
                    for (d in f)
                        S[d] && "autoCSS" !== d || (c[d] = f[d]);
                    if (c.overwrite = 0,
                    c.data = "isFromStart",
                    c.lazy = i && f.lazy !== !1,
                    c.immediateRender = i,
                    this._startAt = F.to(this.target, 0, c),
                    i) {
                        if (0 === this._time)
                            return
                    } else
                        this._startAt._init(),
                        this._startAt._enabled(!1),
                        this.vars.immediateRender && (this._startAt = null )
                }
            if (this._ease = j = j ? j instanceof u ? j : "function" == typeof j ? new u(j,f.easeParams) : v[j] || F.defaultEase : F.defaultEase,
            f.easeParams instanceof Array && j.config && (this._ease = j.config.apply(j, f.easeParams)),
            this._easeType = this._ease._type,
            this._easePower = this._ease._power,
            this._firstPT = null ,
            this._targets)
                for (a = this._targets.length; --a > -1; )
                    this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], g ? g[a] : null ) && (b = !0);
            else
                b = this._initProps(this.target, this._propLookup, this._siblings, g);
            if (b && F._onPluginEvent("_onInitAllProps", this),
            g && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
            f.runBackwards)
                for (c = this._firstPT; c; )
                    c.s += c.c,
                    c.c = -c.c,
                    c = c._next;
            this._onUpdate = f.onUpdate,
            this._initted = !0
        }
        ,
        f._initProps = function(b, c, d, e) {
            var f, g, h, i, j, k;
            if (null  == b)
                return !1;
            J[b._gsTweenID] && X(),
            this.vars.css || b.style && b !== a && b.nodeType && P.css && this.vars.autoCSS !== !1 && H(this.vars, b);
            for (f in this.vars)
                if (k = this.vars[f],
                S[f])
                    k && (k instanceof Array || k.push && n(k)) && -1 !== k.join("").indexOf("{self}") && (this.vars[f] = k = this._swapSelfInParams(k, this));
                else if (P[f] && (i = new P[f])._onInitTween(b, this.vars[f], this)) {
                    for (this._firstPT = j = {
                        _next: this._firstPT,
                        t: i,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: f,
                        pg: 1,
                        pr: i._priority
                    },
                    g = i._overwriteProps.length; --g > -1; )
                        c[i._overwriteProps[g]] = this._firstPT;
                    (i._priority || i._onInitAllProps) && (h = !0),
                    (i._onDisable || i._onEnable) && (this._notifyPluginsOfEnabled = !0),
                    j._next && (j._next._prev = j)
                } else
                    c[f] = N.call(this, b, f, "get", k, f, 0, null , this.vars.stringFilter);
            return e && this._kill(e, b) ? this._initProps(b, c, d, e) : this._overwrite > 1 && this._firstPT && d.length > 1 && $(b, this, c, this._overwrite, d) ? (this._kill(c, b),
            this._initProps(b, c, d, e)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (J[b._gsTweenID] = !0),
            h)
        }
        ,
        f.render = function(a, b, c) {
            var d, e, f, g, h = this._time, i = this._duration, j = this._rawPrevTime;
            if (a >= i - 1e-7)
                this._totalTime = this._time = i,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                this._reversed || (d = !0,
                e = "onComplete",
                c = c || this._timeline.autoRemoveChildren),
                0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0),
                (0 > j || 0 >= a && a >= -1e-7 || j === k && "isPause" !== this.data) && j !== a && (c = !0,
                j > k && (e = "onReverseComplete")),
                this._rawPrevTime = g = !b || a || j === a ? a : k);
            else if (1e-7 > a)
                this._totalTime = this._time = 0,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete",
                d = this._reversed),
                0 > a && (this._active = !1,
                0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== k || "isPause" !== this.data) && (c = !0),
                this._rawPrevTime = g = !b || a || j === a ? a : k)),
                this._initted || (c = !0);
            else if (this._totalTime = this._time = a,
            this._easeType) {
                var l = a / i
                  , m = this._easeType
                  , n = this._easePower;
                (1 === m || 3 === m && l >= .5) && (l = 1 - l),
                3 === m && (l *= 2),
                1 === n ? l *= l : 2 === n ? l *= l * l : 3 === n ? l *= l * l * l : 4 === n && (l *= l * l * l * l),
                1 === m ? this.ratio = 1 - l : 2 === m ? this.ratio = l : .5 > a / i ? this.ratio = l / 2 : this.ratio = 1 - l / 2
            } else
                this.ratio = this._ease.getRatio(a / i);
            if (this._time !== h || c) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                        return this._time = this._totalTime = h,
                        this._rawPrevTime = j,
                        I.push(this),
                        void (this._lazy = [a, b]);
                    this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1),
                this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0),
                0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")),
                this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))),
                f = this._firstPT; f; )
                    f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s,
                    f = f._next;
                this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, b, c),
                b || (this._time !== h || d) && this._callback("onUpdate")),
                e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, b, c),
                d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !b && this.vars[e] && this._callback(e),
                0 === i && this._rawPrevTime === k && g !== k && (this._rawPrevTime = 0))
            }
        }
        ,
        f._kill = function(a, b, c) {
            if ("all" === a && (a = null ),
            null  == a && (null  == b || b === this.target))
                return this._lazy = !1,
                this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target : F.selector(b) || b;
            var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
            if ((n(b) || G(b)) && "number" != typeof b[0])
                for (d = b.length; --d > -1; )
                    this._kill(a, b[d], c) && (i = !0);
            else {
                if (this._targets) {
                    for (d = this._targets.length; --d > -1; )
                        if (b === this._targets[d]) {
                            h = this._propLookup[d] || {},
                            this._overwrittenProps = this._overwrittenProps || [],
                            e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                            break
                        }
                } else {
                    if (b !== this.target)
                        return !1;
                    h = this._propLookup,
                    e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                }
                if (h) {
                    if (j = a || h,
                    k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill),
                    c && (F.onOverwrite || this.vars.onOverwrite)) {
                        for (f in j)
                            h[f] && (l || (l = []),
                            l.push(f));
                        if ((l || !a) && !Z(this, c, b, l))
                            return !1
                    }
                    for (f in j)
                        (g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s,
                        i = !0),
                        g.pg && g.t._kill(j) && (i = !0),
                        g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next),
                        g._next && (g._next._prev = g._prev),
                        g._next = g._prev = null ),
                        delete h[f]),
                        k && (e[f] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return i
        }
        ,
        f.invalidate = function() {
            return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this),
            this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null ,
            this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
            this._propLookup = this._targets ? {} : [],
            C.prototype.invalidate.call(this),
            this.vars.immediateRender && (this._time = -k,
            this.render(-this._delay)),
            this
        }
        ,
        f._enabled = function(a, b) {
            if (h || g.wake(),
            a && this._gc) {
                var c, d = this._targets;
                if (d)
                    for (c = d.length; --c > -1; )
                        this._siblings[c] = Y(d[c], this, !0);
                else
                    this._siblings = Y(this.target, this, !0)
            }
            return C.prototype._enabled.call(this, a, b),
            this._notifyPluginsOfEnabled && this._firstPT ? F._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        }
        ,
        F.to = function(a, b, c) {
            return new F(a,b,c)
        }
        ,
        F.from = function(a, b, c) {
            return c.runBackwards = !0,
            c.immediateRender = 0 != c.immediateRender,
            new F(a,b,c)
        }
        ,
        F.fromTo = function(a, b, c, d) {
            return d.startAt = c,
            d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,
            new F(a,b,d)
        }
        ,
        F.delayedCall = function(a, b, c, d, e) {
            return new F(b,0,{
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                callbackScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                immediateRender: !1,
                lazy: !1,
                useFrames: e,
                overwrite: 0
            })
        }
        ,
        F.set = function(a, b) {
            return new F(a,0,b)
        }
        ,
        F.getTweensOf = function(a, b) {
            if (null  == a)
                return [];
            a = "string" != typeof a ? a : F.selector(a) || a;
            var c, d, e, f;
            if ((n(a) || G(a)) && "number" != typeof a[0]) {
                for (c = a.length,
                d = []; --c > -1; )
                    d = d.concat(F.getTweensOf(a[c], b));
                for (c = d.length; --c > -1; )
                    for (f = d[c],
                    e = c; --e > -1; )
                        f === d[e] && d.splice(c, 1)
            } else
                for (d = Y(a).concat(),
                c = d.length; --c > -1; )
                    (d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
            return d
        }
        ,
        F.killTweensOf = F.killDelayedCallsTo = function(a, b, c) {
            "object" == typeof b && (c = b,
            b = !1);
            for (var d = F.getTweensOf(a, b), e = d.length; --e > -1; )
                d[e]._kill(c, a)
        }
        ;
        var aa = r("plugins.TweenPlugin", function(a, b) {
            this._overwriteProps = (a || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = b || 0,
            this._super = aa.prototype
        }, !0);
        if (f = aa.prototype,
        aa.version = "1.18.0",
        aa.API = 2,
        f._firstPT = null ,
        f._addTween = N,
        f.setRatio = L,
        f._kill = function(a) {
            var b, c = this._overwriteProps, d = this._firstPT;
            if (null  != a[this._propName])
                this._overwriteProps = [];
            else
                for (b = c.length; --b > -1; )
                    null  != a[c[b]] && c.splice(b, 1);
            for (; d; )
                null  != a[d.n] && (d._next && (d._next._prev = d._prev),
                d._prev ? (d._prev._next = d._next,
                d._prev = null ) : this._firstPT === d && (this._firstPT = d._next)),
                d = d._next;
            return !1
        }
        ,
        f._roundProps = function(a, b) {
            for (var c = this._firstPT; c; )
                (a[this._propName] || null  != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b),
                c = c._next
        }
        ,
        F._onPluginEvent = function(a, b) {
            var c, d, e, f, g, h = b._firstPT;
            if ("_onInitAllProps" === a) {
                for (; h; ) {
                    for (g = h._next,
                    d = e; d && d.pr > h.pr; )
                        d = d._next;
                    (h._prev = d ? d._prev : f) ? h._prev._next = h : e = h,
                    (h._next = d) ? d._prev = h : f = h,
                    h = g
                }
                h = b._firstPT = e
            }
            for (; h; )
                h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0),
                h = h._next;
            return c
        }
        ,
        aa.activate = function(a) {
            for (var b = a.length; --b > -1; )
                a[b].API === aa.API && (P[(new a[b])._propName] = a[b]);
            return !0
        }
        ,
        q.plugin = function(a) {
            if (!(a && a.propName && a.init && a.API))
                throw "illegal plugin definition.";
            var b, c = a.propName, d = a.priority || 0, e = a.overwriteProps, f = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            }, g = r("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                aa.call(this, c, d),
                this._overwriteProps = e || []
            }, a.global === !0), h = g.prototype = new aa(c);
            h.constructor = g,
            g.API = a.API;
            for (b in f)
                "function" == typeof a[b] && (h[f[b]] = a[b]);
            return g.version = a.version,
            aa.activate([g]),
            g
        }
        ,
        d = a._gsQueue) {
            for (e = 0; e < d.length; e++)
                d[e]();
            for (f in o)
                o[f].func || a.console.log("GSAP encountered missing dependency: com.greensock." + f)
        }
        h = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */

!function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
}(this, function() {
    "use strict";
    var e = function() {}
    ;
    e.version = "2.0.5",
    window.addEventListener("mousewheel", function() {});
    var t = "data-scrollmagic-pin-spacer";
    e.Controller = function(r) {
        var o, s, a = "ScrollMagic.Controller", l = "FORWARD", c = "REVERSE", u = "PAUSED", f = n.defaults, d = this, h = i.extend({}, f, r), g = [], p = !1, v = 0, m = u, w = !0, y = 0, S = !0, b = function() {
            for (var e in h)
                f.hasOwnProperty(e) || delete h[e];
            if (h.container = i.get.elements(h.container)[0],
            !h.container)
                throw a + " init failed.";
            w = h.container === window || h.container === document.body || !document.body.contains(h.container),
            w && (h.container = window),
            y = z(),
            h.container.addEventListener("resize", T),
            h.container.addEventListener("scroll", T),
            h.refreshInterval = parseInt(h.refreshInterval) || f.refreshInterval,
            E()
        }
        , E = function() {
            h.refreshInterval > 0 && (s = window.setTimeout(A, h.refreshInterval))
        }
        , x = function() {
            return h.vertical ? i.get.scrollTop(h.container) : i.get.scrollLeft(h.container)
        }
        , z = function() {
            return h.vertical ? i.get.height(h.container) : i.get.width(h.container)
        }
        , C = this._setScrollPos = function(e) {
            h.vertical ? w ? window.scrollTo(i.get.scrollLeft(), e) : h.container.scrollTop = e : w ? window.scrollTo(e, i.get.scrollTop()) : h.container.scrollLeft = e
        }
        , F = function() {
            if (S && p) {
                var e = i.type.Array(p) ? p : g.slice(0);
                p = !1;
                var t = v;
                v = d.scrollPos();
                var n = v - t;
                0 !== n && (m = n > 0 ? l : c),
                m === c && e.reverse(),
                e.forEach(function(e) {
                    e.update(!0)
                })
            }
        }
        , L = function() {
            o = i.rAF(F)
        }
        , T = function(e) {
            "resize" == e.type && (y = z(),
            m = u),
            p !== !0 && (p = !0,
            L())
        }
        , A = function() {
            if (!w && y != z()) {
                var e;
                try {
                    e = new Event("resize",{
                        bubbles: !1,
                        cancelable: !1
                    })
                } catch (t) {
                    e = document.createEvent("Event"),
                    e.initEvent("resize", !1, !1)
                }
                h.container.dispatchEvent(e)
            }
            g.forEach(function(e) {
                e.refresh()
            }),
            E()
        }
        ;
        this._options = h;
        var O = function(e) {
            if (e.length <= 1)
                return e;
            var t = e.slice(0);
            return t.sort(function(e, t) {
                return e.scrollOffset() > t.scrollOffset() ? 1 : -1
            }),
            t
        }
        ;
        return this.addScene = function(t) {
            if (i.type.Array(t))
                t.forEach(function(e) {
                    d.addScene(e)
                });
            else if (t instanceof e.Scene)
                if (t.controller() !== d)
                    t.addTo(d);
                else if (g.indexOf(t) < 0) {
                    g.push(t),
                    g = O(g),
                    t.on("shift.controller_sort", function() {
                        g = O(g)
                    });
                    for (var n in h.globalSceneOptions)
                        t[n] && t[n].call(t, h.globalSceneOptions[n])
                }
            return d
        }
        ,
        this.removeScene = function(e) {
            if (i.type.Array(e))
                e.forEach(function(e) {
                    d.removeScene(e)
                });
            else {
                var t = g.indexOf(e);
                t > -1 && (e.off("shift.controller_sort"),
                g.splice(t, 1),
                e.remove())
            }
            return d
        }
        ,
        this.updateScene = function(t, n) {
            return i.type.Array(t) ? t.forEach(function(e) {
                d.updateScene(e, n)
            }) : n ? t.update(!0) : p !== !0 && t instanceof e.Scene && (p = p || [],
            -1 == p.indexOf(t) && p.push(t),
            p = O(p),
            L()),
            d
        }
        ,
        this.update = function(e) {
            return T({
                type: "resize"
            }),
            e && F(),
            d
        }
        ,
        this.scrollTo = function(n, r) {
            if (i.type.Number(n))
                C.call(h.container, n, r);
            else if (n instanceof e.Scene)
                n.controller() === d && d.scrollTo(n.scrollOffset(), r);
            else if (i.type.Function(n))
                C = n;
            else {
                var o = i.get.elements(n)[0];
                if (o) {
                    for (; o.parentNode.hasAttribute(t); )
                        o = o.parentNode;
                    var s = h.vertical ? "top" : "left"
                      , a = i.get.offset(h.container)
                      , l = i.get.offset(o);
                    w || (a[s] -= d.scrollPos()),
                    d.scrollTo(l[s] - a[s], r)
                }
            }
            return d
        }
        ,
        this.scrollPos = function(e) {
            return arguments.length ? (i.type.Function(e) && (x = e),
            d) : x.call(d)
        }
        ,
        this.info = function(e) {
            var t = {
                size: y,
                vertical: h.vertical,
                scrollPos: v,
                scrollDirection: m,
                container: h.container,
                isDocument: w
            };
            return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t
        }
        ,
        this.loglevel = function() {
            return d
        }
        ,
        this.enabled = function(e) {
            return arguments.length ? (S != e && (S = !!e,
            d.updateScene(g, !0)),
            d) : S
        }
        ,
        this.destroy = function(e) {
            window.clearTimeout(s);
            for (var t = g.length; t--; )
                g[t].destroy(e);
            return h.container.removeEventListener("resize", T),
            h.container.removeEventListener("scroll", T),
            i.cAF(o),
            null 
        }
        ,
        b(),
        d
    }
    ;
    var n = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    e.Controller.addOption = function(e, t) {
        n.defaults[e] = t
    }
    ,
    e.Controller.extend = function(t) {
        var n = this;
        e.Controller = function() {
            return n.apply(this, arguments),
            this.$super = i.extend({}, this),
            t.apply(this, arguments) || this
        }
        ,
        i.extend(e.Controller, n),
        e.Controller.prototype = n.prototype,
        e.Controller.prototype.constructor = e.Controller
    }
    ,
    e.Scene = function(n) {
        var o, s, a = "BEFORE", l = "DURING", c = "AFTER", u = r.defaults, f = this, d = i.extend({}, u, n), h = a, g = 0, p = {
            start: 0,
            end: 0
        }, v = 0, m = !0, w = function() {
            for (var e in d)
                u.hasOwnProperty(e) || delete d[e];
            for (var t in u)
                L(t);
            C()
        }
        , y = {};
        this.on = function(e, t) {
            return i.type.Function(t) && (e = e.trim().split(" "),
            e.forEach(function(e) {
                var n = e.split(".")
                  , r = n[0]
                  , i = n[1];
                "*" != r && (y[r] || (y[r] = []),
                y[r].push({
                    namespace: i || "",
                    callback: t
                }))
            })),
            f
        }
        ,
        this.off = function(e, t) {
            return e ? (e = e.trim().split(" "),
            e.forEach(function(e) {
                var n = e.split(".")
                  , r = n[0]
                  , i = n[1] || ""
                  , o = "*" === r ? Object.keys(y) : [r];
                o.forEach(function(e) {
                    for (var n = y[e] || [], r = n.length; r--; ) {
                        var o = n[r];
                        !o || i !== o.namespace && "*" !== i || t && t != o.callback || n.splice(r, 1)
                    }
                    n.length || delete y[e]
                })
            }),
            f) : f
        }
        ,
        this.trigger = function(t, n) {
            if (t) {
                var r = t.trim().split(".")
                  , i = r[0]
                  , o = r[1]
                  , s = y[i];
                s && s.forEach(function(t) {
                    o && o !== t.namespace || t.callback.call(f, new e.Event(i,t.namespace,f,n))
                })
            }
            return f
        }
        ,
        f.on("change.internal", function(e) {
            "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? E() : "reverse" === e.what && f.update())
        }).on("shift.internal", function() {
            S(),
            f.update()
        }),
        this.addTo = function(t) {
            return t instanceof e.Controller && s != t && (s && s.removeScene(f),
            s = t,
            C(),
            b(!0),
            E(!0),
            S(),
            s.info("container").addEventListener("resize", x),
            t.addScene(f),
            f.trigger("add", {
                controller: s
            }),
            f.update()),
            f
        }
        ,
        this.enabled = function(e) {
            return arguments.length ? (m != e && (m = !!e,
            f.update(!0)),
            f) : m
        }
        ,
        this.remove = function() {
            if (s) {
                s.info("container").removeEventListener("resize", x);
                var e = s;
                s = void 0,
                e.removeScene(f),
                f.trigger("remove")
            }
            return f
        }
        ,
        this.destroy = function(e) {
            return f.trigger("destroy", {
                reset: e
            }),
            f.remove(),
            f.off("*.*"),
            null 
        }
        ,
        this.update = function(e) {
            if (s)
                if (e)
                    if (s.enabled() && m) {
                        var t, n = s.info("scrollPos");
                        t = d.duration > 0 ? (n - p.start) / (p.end - p.start) : n >= p.start ? 1 : 0,
                        f.trigger("update", {
                            startPos: p.start,
                            endPos: p.end,
                            scrollPos: n
                        }),
                        f.progress(t)
                    } else
                        T && h === l && O(!0);
                else
                    s.updateScene(f, !1);
            return f
        }
        ,
        this.refresh = function() {
            return b(),
            E(),
            f
        }
        ,
        this.progress = function(e) {
            if (arguments.length) {
                var t = !1
                  , n = h
                  , r = s ? s.info("scrollDirection") : "PAUSED"
                  , i = d.reverse || e >= g;
                if (0 === d.duration ? (t = g != e,
                g = 1 > e && i ? 0 : 1,
                h = 0 === g ? a : l) : 0 > e && h !== a && i ? (g = 0,
                h = a,
                t = !0) : e >= 0 && 1 > e && i ? (g = e,
                h = l,
                t = !0) : e >= 1 && h !== c ? (g = 1,
                h = c,
                t = !0) : h !== l || i || O(),
                t) {
                    var o = {
                        progress: g,
                        state: h,
                        scrollDirection: r
                    }
                      , u = h != n
                      , p = function(e) {
                        f.trigger(e, o)
                    }
                    ;
                    u && n !== l && (p("enter"),
                    p(n === a ? "start" : "end")),
                    p("progress"),
                    u && h !== l && (p(h === a ? "start" : "end"),
                    p("leave"))
                }
                return f
            }
            return g
        }
        ;
        var S = function() {
            p = {
                start: v + d.offset
            },
            s && d.triggerElement && (p.start -= s.info("size") * d.triggerHook),
            p.end = p.start + d.duration
        }
          , b = function(e) {
            if (o) {
                var t = "duration";
                F(t, o.call(f)) && !e && (f.trigger("change", {
                    what: t,
                    newval: d[t]
                }),
                f.trigger("shift", {
                    reason: t
                }))
            }
        }
          , E = function(e) {
            var n = 0
              , r = d.triggerElement;
            if (s && r) {
                for (var o = s.info(), a = i.get.offset(o.container), l = o.vertical ? "top" : "left"; r.parentNode.hasAttribute(t); )
                    r = r.parentNode;
                var c = i.get.offset(r);
                o.isDocument || (a[l] -= s.scrollPos()),
                n = c[l] - a[l]
            }
            var u = n != v;
            v = n,
            u && !e && f.trigger("shift", {
                reason: "triggerElementPosition"
            })
        }
          , x = function() {
            d.triggerHook > 0 && f.trigger("shift", {
                reason: "containerResize"
            })
        }
          , z = i.extend(r.validate, {
            duration: function(e) {
                if (i.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                    var t = parseFloat(e) / 100;
                    e = function() {
                        return s ? s.info("size") * t : 0
                    }
                }
                if (i.type.Function(e)) {
                    o = e;
                    try {
                        e = parseFloat(o())
                    } catch (n) {
                        e = -1
                    }
                }
                if (e = parseFloat(e),
                !i.type.Number(e) || 0 > e)
                    throw o ? (o = void 0,
                    0) : 0;
                return e
            }
        })
          , C = function(e) {
            e = arguments.length ? [e] : Object.keys(z),
            e.forEach(function(e) {
                var t;
                if (z[e])
                    try {
                        t = z[e](d[e])
                    } catch (n) {
                        t = u[e]
                    } finally {
                        d[e] = t
                    }
            })
        }
          , F = function(e, t) {
            var n = !1
              , r = d[e];
            return d[e] != t && (d[e] = t,
            C(e),
            n = r != d[e]),
            n
        }
          , L = function(e) {
            f[e] || (f[e] = function(t) {
                return arguments.length ? ("duration" === e && (o = void 0),
                F(e, t) && (f.trigger("change", {
                    what: e,
                    newval: d[e]
                }),
                r.shifts.indexOf(e) > -1 && f.trigger("shift", {
                    reason: e
                })),
                f) : d[e]
            }
            )
        }
        ;
        this.controller = function() {
            return s
        }
        ,
        this.state = function() {
            return h
        }
        ,
        this.scrollOffset = function() {
            return p.start
        }
        ,
        this.triggerPosition = function() {
            var e = d.offset;
            return s && (e += d.triggerElement ? v : s.info("size") * f.triggerHook()),
            e
        }
        ;
        var T, A;
        f.on("shift.internal", function(e) {
            var t = "duration" === e.reason;
            (h === c && t || h === l && 0 === d.duration) && O(),
            t && _()
        }).on("progress.internal", function() {
            O()
        }).on("add.internal", function() {
            _()
        }).on("destroy.internal", function(e) {
            f.removePin(e.reset)
        });
        var O = function(e) {
            if (T && s) {
                var t = s.info()
                  , n = A.spacer.firstChild;
                if (e || h !== l) {
                    var r = {
                        position: A.inFlow ? "relative" : "absolute",
                        top: 0,
                        left: 0
                    }
                      , o = i.css(n, "position") != r.position;
                    A.pushFollowers ? d.duration > 0 && (h === c && 0 === parseFloat(i.css(A.spacer, "padding-top")) ? o = !0 : h === a && 0 === parseFloat(i.css(A.spacer, "padding-bottom")) && (o = !0)) : r[t.vertical ? "top" : "left"] = d.duration * g,
                    i.css(n, r),
                    o && _()
                } else {
                    "fixed" != i.css(n, "position") && (i.css(n, {
                        position: "fixed"
                    }),
                    _());
                    var u = i.get.offset(A.spacer, !0)
                      , f = d.reverse || 0 === d.duration ? t.scrollPos - p.start : Math.round(g * d.duration * 10) / 10;
                    u[t.vertical ? "top" : "left"] += f,
                    i.css(A.spacer.firstChild, {
                        top: u.top,
                        left: u.left
                    })
                }
            }
        }
          , _ = function() {
            if (T && s && A.inFlow) {
                var e = h === l
                  , t = s.info("vertical")
                  , n = A.spacer.firstChild
                  , r = i.isMarginCollapseType(i.css(A.spacer, "display"))
                  , o = {};
                A.relSize.width || A.relSize.autoFullWidth ? e ? i.css(T, {
                    width: i.get.width(A.spacer)
                }) : i.css(T, {
                    width: "100%"
                }) : (o["min-width"] = i.get.width(t ? T : n, !0, !0),
                o.width = e ? o["min-width"] : "auto"),
                A.relSize.height ? e ? i.css(T, {
                    height: i.get.height(A.spacer) - (A.pushFollowers ? d.duration : 0)
                }) : i.css(T, {
                    height: "100%"
                }) : (o["min-height"] = i.get.height(t ? n : T, !0, !r),
                o.height = e ? o["min-height"] : "auto"),
                A.pushFollowers && (o["padding" + (t ? "Top" : "Left")] = d.duration * g,
                o["padding" + (t ? "Bottom" : "Right")] = d.duration * (1 - g)),
                i.css(A.spacer, o)
            }
        }
          , N = function() {
            s && T && h === l && !s.info("isDocument") && O()
        }
          , P = function() {
            s && T && h === l && ((A.relSize.width || A.relSize.autoFullWidth) && i.get.width(window) != i.get.width(A.spacer.parentNode) || A.relSize.height && i.get.height(window) != i.get.height(A.spacer.parentNode)) && _()
        }
          , D = function(e) {
            s && T && h === l && !s.info("isDocument") && (e.preventDefault(),
            s._setScrollPos(s.info("scrollPos") - ((e.wheelDelta || e[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
        }
        ;
        this.setPin = function(e, n) {
            var r = {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            };
            if (n = i.extend({}, r, n),
            e = i.get.elements(e)[0],
            !e)
                return f;
            if ("fixed" === i.css(e, "position"))
                return f;
            if (T) {
                if (T === e)
                    return f;
                f.removePin()
            }
            T = e;
            var o = T.parentNode.style.display
              , s = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            T.parentNode.style.display = "none";
            var a = "absolute" != i.css(T, "position")
              , l = i.css(T, s.concat(["display"]))
              , c = i.css(T, ["width", "height"]);
            T.parentNode.style.display = o,
            !a && n.pushFollowers && (n.pushFollowers = !1);
            var u = T.parentNode.insertBefore(document.createElement("div"), T)
              , d = i.extend(l, {
                position: a ? "relative" : "absolute",
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            });
            if (a || i.extend(d, i.css(T, ["width", "height"])),
            i.css(u, d),
            u.setAttribute(t, ""),
            i.addClass(u, n.spacerClass),
            A = {
                spacer: u,
                relSize: {
                    width: "%" === c.width.slice(-1),
                    height: "%" === c.height.slice(-1),
                    autoFullWidth: "auto" === c.width && a && i.isMarginCollapseType(l.display)
                },
                pushFollowers: n.pushFollowers,
                inFlow: a
            },
            !T.___origStyle) {
                T.___origStyle = {};
                var h = T.style
                  , g = s.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                g.forEach(function(e) {
                    T.___origStyle[e] = h[e] || ""
                })
            }
            return A.relSize.width && i.css(u, {
                width: c.width
            }),
            A.relSize.height && i.css(u, {
                height: c.height
            }),
            u.appendChild(T),
            i.css(T, {
                position: a ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }),
            (A.relSize.width || A.relSize.autoFullWidth) && i.css(T, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }),
            window.addEventListener("scroll", N),
            window.addEventListener("resize", N),
            window.addEventListener("resize", P),
            T.addEventListener("mousewheel", D),
            T.addEventListener("DOMMouseScroll", D),
            O(),
            f
        }
        ,
        this.removePin = function(e) {
            if (T) {
                if (h === l && O(!0),
                e || !s) {
                    var n = A.spacer.firstChild;
                    if (n.hasAttribute(t)) {
                        var r = A.spacer.style
                          , o = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                        margins = {},
                        o.forEach(function(e) {
                            margins[e] = r[e] || ""
                        }),
                        i.css(n, margins)
                    }
                    A.spacer.parentNode.insertBefore(n, A.spacer),
                    A.spacer.parentNode.removeChild(A.spacer),
                    T.parentNode.hasAttribute(t) || (i.css(T, T.___origStyle),
                    delete T.___origStyle)
                }
                window.removeEventListener("scroll", N),
                window.removeEventListener("resize", N),
                window.removeEventListener("resize", P),
                T.removeEventListener("mousewheel", D),
                T.removeEventListener("DOMMouseScroll", D),
                T = void 0
            }
            return f
        }
        ;
        var R, k = [];
        return f.on("destroy.internal", function(e) {
            f.removeClassToggle(e.reset)
        }),
        this.setClassToggle = function(e, t) {
            var n = i.get.elements(e);
            return 0 !== n.length && i.type.String(t) ? (k.length > 0 && f.removeClassToggle(),
            R = t,
            k = n,
            f.on("enter.internal_class leave.internal_class", function(e) {
                var t = "enter" === e.type ? i.addClass : i.removeClass;
                k.forEach(function(e) {
                    t(e, R)
                })
            }),
            f) : f
        }
        ,
        this.removeClassToggle = function(e) {
            return e && k.forEach(function(e) {
                i.removeClass(e, R)
            }),
            f.off("start.internal_class end.internal_class"),
            R = void 0,
            k = [],
            f
        }
        ,
        w(),
        f
    }
    ;
    var r = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
        },
        validate: {
            offset: function(e) {
                if (e = parseFloat(e),
                !i.type.Number(e))
                    throw 0;
                return e
            },
            triggerElement: function(e) {
                if (e = e || void 0) {
                    var t = i.get.elements(e)[0];
                    if (!t)
                        throw 0;
                    e = t
                }
                return e
            },
            triggerHook: function(e) {
                var t = {
                    onCenter: .5,
                    onEnter: 1,
                    onLeave: 0
                };
                if (i.type.Number(e))
                    e = Math.max(0, Math.min(parseFloat(e), 1));
                else {
                    if (!(e in t))
                        throw 0;
                    e = t[e]
                }
                return e
            },
            reverse: function(e) {
                return !!e
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    e.Scene.addOption = function(e, t, n, i) {
        e in r.defaults || (r.defaults[e] = t,
        r.validate[e] = n,
        i && r.shifts.push(e))
    }
    ,
    e.Scene.extend = function(t) {
        var n = this;
        e.Scene = function() {
            return n.apply(this, arguments),
            this.$super = i.extend({}, this),
            t.apply(this, arguments) || this
        }
        ,
        i.extend(e.Scene, n),
        e.Scene.prototype = n.prototype,
        e.Scene.prototype.constructor = e.Scene
    }
    ,
    e.Event = function(e, t, n, r) {
        r = r || {};
        for (var i in r)
            this[i] = r[i];
        return this.type = e,
        this.target = this.currentTarget = n,
        this.namespace = t || "",
        this.timeStamp = this.timestamp = Date.now(),
        this
    }
    ;
    var i = e._util = function(e) {
        var t, n = {}, r = function(e) {
            return parseFloat(e) || 0
        }
        , i = function(t) {
            return t.currentStyle ? t.currentStyle : e.getComputedStyle(t)
        }
        , o = function(t, n, o, s) {
            if (n = n === document ? e : n,
            n === e)
                s = !1;
            else if (!f.DomElement(n))
                return 0;
            t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
            var a = (o ? n["offset" + t] || n["outer" + t] : n["client" + t] || n["inner" + t]) || 0;
            if (o && s) {
                var l = i(n);
                a += "Height" === t ? r(l.marginTop) + r(l.marginBottom) : r(l.marginLeft) + r(l.marginRight)
            }
            return a
        }
        , s = function(e) {
            return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
                return e[1].toUpperCase()
            })
        }
        ;
        n.extend = function(e) {
            for (e = e || {},
            t = 1; t < arguments.length; t++)
                if (arguments[t])
                    for (var n in arguments[t])
                        arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
            return e
        }
        ,
        n.isMarginCollapseType = function(e) {
            return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
        }
        ;
        var a = 0
          , l = ["ms", "moz", "webkit", "o"]
          , c = e.requestAnimationFrame
          , u = e.cancelAnimationFrame;
        for (t = 0; !c && t < l.length; ++t)
            c = e[l[t] + "RequestAnimationFrame"],
            u = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"];
        c || (c = function(t) {
            var n = (new Date).getTime()
              , r = Math.max(0, 16 - (n - a))
              , i = e.setTimeout(function() {
                t(n + r)
            }, r);
            return a = n + r,
            i
        }
        ),
        u || (u = function(t) {
            e.clearTimeout(t)
        }
        ),
        n.rAF = c.bind(e),
        n.cAF = u.bind(e);
        var f = n.type = function(e) {
            return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        }
        ;
        f.String = function(e) {
            return "string" === f(e)
        }
        ,
        f.Function = function(e) {
            return "function" === f(e)
        }
        ,
        f.Array = function(e) {
            return Array.isArray(e)
        }
        ,
        f.Number = function(e) {
            return !f.Array(e) && e - parseFloat(e) + 1 >= 0
        }
        ,
        f.DomElement = function(e) {
            return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null  !== e && 1 === e.nodeType && "string" == typeof e.nodeName
        }
        ;
        var d = n.get = {};
        return d.elements = function(t) {
            var n = [];
            if (f.String(t))
                try {
                    t = document.querySelectorAll(t)
                } catch (r) {
                    return n
                }
            if ("nodelist" === f(t) || f.Array(t))
                for (var i = 0, o = n.length = t.length; o > i; i++) {
                    var s = t[i];
                    n[i] = f.DomElement(s) ? s : d.elements(s)
                }
            else
                (f.DomElement(t) || t === document || t === e) && (n = [t]);
            return n
        }
        ,
        d.scrollTop = function(t) {
            return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0
        }
        ,
        d.scrollLeft = function(t) {
            return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0
        }
        ,
        d.width = function(e, t, n) {
            return o("width", e, t, n)
        }
        ,
        d.height = function(e, t, n) {
            return o("height", e, t, n)
        }
        ,
        d.offset = function(e, t) {
            var n = {
                top: 0,
                left: 0
            };
            if (e && e.getBoundingClientRect) {
                var r = e.getBoundingClientRect();
                n.top = r.top,
                n.left = r.left,
                t || (n.top += d.scrollTop(),
                n.left += d.scrollLeft())
            }
            return n
        }
        ,
        n.addClass = function(e, t) {
            t && (e.classList ? e.classList.add(t) : e.className += " " + t)
        }
        ,
        n.removeClass = function(e, t) {
            t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }
        ,
        n.css = function(e, t) {
            if (f.String(t))
                return i(e)[s(t)];
            if (f.Array(t)) {
                var n = {}
                  , r = i(e);
                return t.forEach(function(e) {
                    n[e] = r[s(e)]
                }),
                n
            }
            for (var o in t) {
                var a = t[o];
                a == parseFloat(a) && (a += "px"),
                e.style[s(o)] = a
            }
        }
        ,
        n
    }(window || {});
    return e
});
/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */

!function(e, n) {
    "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], n) : "object" == typeof exports ? (require("gsap"),
    n(require("scrollmagic"), TweenMax, TimelineMax)) : n(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite)
}(this, function(e, n, r) {
    "use strict";
    e.Scene.addOption("tweenChanges", !1, function(e) {
        return !!e
    }),
    e.Scene.extend(function() {
        var e, t = this;
        t.on("progress.plugin_gsap", function() {
            i()
        }),
        t.on("destroy.plugin_gsap", function(e) {
            t.removeTween(e.reset)
        });
        var i = function() {
            if (e) {
                var n = t.progress()
                  , r = t.state();
                e.repeat && -1 === e.repeat() ? "DURING" === r && e.paused() ? e.play() : "DURING" === r || e.paused() || e.pause() : n != e.progress() && (0 === t.duration() ? n > 0 ? e.play() : e.reverse() : t.tweenChanges() && e.tweenTo ? e.tweenTo(n * e.duration()) : e.progress(n).pause())
            }
        }
        ;
        t.setTween = function(o, a, s) {
            var u;
            arguments.length > 1 && (arguments.length < 3 && (s = a,
            a = 1),
            o = n.to(o, a, s));
            try {
                u = r ? new r({
                    smoothChildTiming: !0
                }).add(o) : o,
                u.pause()
            } catch (p) {
                return t
            }
            return e && t.removeTween(),
            e = u,
            o.repeat && -1 === o.repeat() && (e.repeat(-1),
            e.yoyo(o.yoyo())),
            i(),
            t
        }
        ,
        t.removeTween = function(n) {
            return e && (n && e.progress(0).pause(),
            e.kill(),
            e = void 0),
            t
        }
    })
});
/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */

!function(e, r) {
    "function" == typeof define && define.amd ? define(["ScrollMagic"], r) : r("object" == typeof exports ? require("scrollmagic") : e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic)
}(this, function(e) {
    "use strict";
    var r = "0.85em"
      , t = "9999"
      , i = 15
      , o = e._util
      , n = 0;
    e.Scene.extend(function() {
        var e, r = this;
        r.addIndicators = function(t) {
            if (!e) {
                var i = {
                    name: "",
                    indent: 0,
                    parent: void 0,
                    colorStart: "green",
                    colorEnd: "red",
                    colorTrigger: "blue"
                };
                t = o.extend({}, i, t),
                n++,
                e = new s(r,t),
                r.on("add.plugin_addIndicators", e.add),
                r.on("remove.plugin_addIndicators", e.remove),
                r.on("destroy.plugin_addIndicators", r.removeIndicators),
                r.controller() && e.add()
            }
            return r
        }
        ,
        r.removeIndicators = function() {
            return e && (e.remove(),
            this.off("*.plugin_addIndicators"),
            e = void 0),
            r
        }
    }),
    e.Controller.addOption("addIndicators", !1),
    e.Controller.extend(function() {
        var r = this
          , t = r.info()
          , n = t.container
          , s = t.isDocument
          , d = t.vertical
          , a = {
            groups: []
        };
        this._indicators = a;
        var g = function() {
            a.updateBoundsPositions()
        }
          , p = function() {
            a.updateTriggerGroupPositions()
        }
        ;
        return n.addEventListener("resize", p),
        s || (window.addEventListener("resize", p),
        window.addEventListener("scroll", p)),
        n.addEventListener("resize", g),
        n.addEventListener("scroll", g),
        this._indicators.updateBoundsPositions = function(e) {
            for (var r, t, s, g = e ? [o.extend({}, e.triggerGroup, {
                members: [e]
            })] : a.groups, p = g.length, u = {}, c = d ? "left" : "top", l = d ? "width" : "height", f = d ? o.get.scrollLeft(n) + o.get.width(n) - i : o.get.scrollTop(n) + o.get.height(n) - i; p--; )
                for (s = g[p],
                r = s.members.length,
                t = o.get[l](s.element.firstChild); r--; )
                    u[c] = f - t,
                    o.css(s.members[r].bounds, u)
        }
        ,
        this._indicators.updateTriggerGroupPositions = function(e) {
            for (var t, g, p, u, c, l = e ? [e] : a.groups, f = l.length, m = s ? document.body : n, h = s ? {
                top: 0,
                left: 0
            } : o.get.offset(m, !0), v = d ? o.get.width(n) - i : o.get.height(n) - i, b = d ? "width" : "height", G = d ? "Y" : "X"; f--; )
                t = l[f],
                g = t.element,
                p = t.triggerHook * r.info("size"),
                u = o.get[b](g.firstChild.firstChild),
                c = p > u ? "translate" + G + "(-100%)" : "",
                o.css(g, {
                    top: h.top + (d ? p : v - t.members[0].options.indent),
                    left: h.left + (d ? v - t.members[0].options.indent : p)
                }),
                o.css(g.firstChild.firstChild, {
                    "-ms-transform": c,
                    "-webkit-transform": c,
                    transform: c
                })
        }
        ,
        this._indicators.updateTriggerGroupLabel = function(e) {
            var r = "trigger" + (e.members.length > 1 ? "" : " " + e.members[0].options.name)
              , t = e.element.firstChild.firstChild
              , i = t.textContent !== r;
            i && (t.textContent = r,
            d && a.updateBoundsPositions())
        }
        ,
        this.addScene = function(t) {
            this._options.addIndicators && t instanceof e.Scene && t.controller() === r && t.addIndicators(),
            this.$super.addScene.apply(this, arguments)
        }
        ,
        this.destroy = function() {
            n.removeEventListener("resize", p),
            s || (window.removeEventListener("resize", p),
            window.removeEventListener("scroll", p)),
            n.removeEventListener("resize", g),
            n.removeEventListener("scroll", g),
            this.$super.destroy.apply(this, arguments)
        }
        ,
        r
    });
    var s = function(e, r) {
        var t, i, s = this, a = d.bounds(), g = d.start(r.colorStart), p = d.end(r.colorEnd), u = r.parent && o.get.elements(r.parent)[0];
        r.name = r.name || n,
        g.firstChild.textContent += " " + r.name,
        p.textContent += " " + r.name,
        a.appendChild(g),
        a.appendChild(p),
        s.options = r,
        s.bounds = a,
        s.triggerGroup = void 0,
        this.add = function() {
            i = e.controller(),
            t = i.info("vertical");
            var r = i.info("isDocument");
            u || (u = r ? document.body : i.info("container")),
            r || "static" !== o.css(u, "position") || o.css(u, {
                position: "relative"
            }),
            e.on("change.plugin_addIndicators", l),
            e.on("shift.plugin_addIndicators", c),
            G(),
            h(),
            setTimeout(function() {
                i._indicators.updateBoundsPositions(s)
            }, 0)
        }
        ,
        this.remove = function() {
            if (s.triggerGroup) {
                if (e.off("change.plugin_addIndicators", l),
                e.off("shift.plugin_addIndicators", c),
                s.triggerGroup.members.length > 1) {
                    var r = s.triggerGroup;
                    r.members.splice(r.members.indexOf(s), 1),
                    i._indicators.updateTriggerGroupLabel(r),
                    i._indicators.updateTriggerGroupPositions(r),
                    s.triggerGroup = void 0
                } else
                    b();
                m()
            }
        }
        ;
        var c = function() {
            h()
        }
          , l = function(e) {
            "triggerHook" === e.what && G()
        }
          , f = function() {
            var e = i.info("vertical");
            o.css(g.firstChild, {
                "border-bottom-width": e ? 1 : 0,
                "border-right-width": e ? 0 : 1,
                bottom: e ? -1 : r.indent,
                right: e ? r.indent : -1,
                padding: e ? "0 8px" : "2px 4px"
            }),
            o.css(p, {
                "border-top-width": e ? 1 : 0,
                "border-left-width": e ? 0 : 1,
                top: e ? "100%" : "",
                right: e ? r.indent : "",
                bottom: e ? "" : r.indent,
                left: e ? "" : "100%",
                padding: e ? "0 8px" : "2px 4px"
            }),
            u.appendChild(a)
        }
          , m = function() {
            a.parentNode.removeChild(a)
        }
          , h = function() {
            a.parentNode !== u && f();
            var r = {};
            r[t ? "top" : "left"] = e.triggerPosition(),
            r[t ? "height" : "width"] = e.duration(),
            o.css(a, r),
            o.css(p, {
                display: e.duration() > 0 ? "" : "none"
            })
        }
          , v = function() {
            var n = d.trigger(r.colorTrigger)
              , a = {};
            a[t ? "right" : "bottom"] = 0,
            a[t ? "border-top-width" : "border-left-width"] = 1,
            o.css(n.firstChild, a),
            o.css(n.firstChild.firstChild, {
                padding: t ? "0 8px 3px 8px" : "3px 4px"
            }),
            document.body.appendChild(n);
            var g = {
                triggerHook: e.triggerHook(),
                element: n,
                members: [s]
            };
            i._indicators.groups.push(g),
            s.triggerGroup = g,
            i._indicators.updateTriggerGroupLabel(g),
            i._indicators.updateTriggerGroupPositions(g)
        }
          , b = function() {
            i._indicators.groups.splice(i._indicators.groups.indexOf(s.triggerGroup), 1),
            s.triggerGroup.element.parentNode.removeChild(s.triggerGroup.element),
            s.triggerGroup = void 0
        }
          , G = function() {
            var r = e.triggerHook()
              , t = 1e-4;
            if (!(s.triggerGroup && Math.abs(s.triggerGroup.triggerHook - r) < t)) {
                for (var o, n = i._indicators.groups, d = n.length; d--; )
                    if (o = n[d],
                    Math.abs(o.triggerHook - r) < t)
                        return s.triggerGroup && (1 === s.triggerGroup.members.length ? b() : (s.triggerGroup.members.splice(s.triggerGroup.members.indexOf(s), 1),
                        i._indicators.updateTriggerGroupLabel(s.triggerGroup),
                        i._indicators.updateTriggerGroupPositions(s.triggerGroup))),
                        o.members.push(s),
                        s.triggerGroup = o,
                        void i._indicators.updateTriggerGroupLabel(o);
                if (s.triggerGroup) {
                    if (1 === s.triggerGroup.members.length)
                        return s.triggerGroup.triggerHook = r,
                        void i._indicators.updateTriggerGroupPositions(s.triggerGroup);
                    s.triggerGroup.members.splice(s.triggerGroup.members.indexOf(s), 1),
                    i._indicators.updateTriggerGroupLabel(s.triggerGroup),
                    i._indicators.updateTriggerGroupPositions(s.triggerGroup),
                    s.triggerGroup = void 0
                }
                v()
            }
        }
    }
      , d = {
        start: function(e) {
            var r = document.createElement("div");
            r.textContent = "start",
            o.css(r, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: e,
                "border-color": e
            });
            var t = document.createElement("div");
            return o.css(t, {
                position: "absolute",
                overflow: "visible",
                width: 0,
                height: 0
            }),
            t.appendChild(r),
            t
        },
        end: function(e) {
            var r = document.createElement("div");
            return r.textContent = "end",
            o.css(r, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: e,
                "border-color": e
            }),
            r
        },
        bounds: function() {
            var e = document.createElement("div");
            return o.css(e, {
                position: "absolute",
                overflow: "visible",
                "white-space": "nowrap",
                "pointer-events": "none",
                "font-size": r
            }),
            e.style.zIndex = t,
            e
        },
        trigger: function(e) {
            var i = document.createElement("div");
            i.textContent = "trigger",
            o.css(i, {
                position: "relative"
            });
            var n = document.createElement("div");
            o.css(n, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: e,
                "border-color": e
            }),
            n.appendChild(i);
            var s = document.createElement("div");
            return o.css(s, {
                position: "fixed",
                overflow: "visible",
                "white-space": "nowrap",
                "pointer-events": "none",
                "font-size": r
            }),
            s.style.zIndex = t,
            s.appendChild(n),
            s
        }
    }
});
