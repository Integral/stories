(function() {
  var f = null,
      g = "push",
      i = "length",
      j = "propertyIsEnumerable",
      k = "prototype",
      l = "call",
      n = "",
      o = " ",
      p = '"',
      q = '" ',
      r = "(",
      s = ")",
      t = ",",
      u = ".",
      v = "0",
      w = "00",
      x = "000",
      y = "1.0",
      z = ":",
      A = "://www.google.com/jsapi",
      B = '<div id="',
      C = '<script type="text/javascript" src=',
      D = "></div>",
      E = "><\/script>",
      F = "?autoload=",
      G = "SCRIPT",
      H = "[",
      I = "[object Array]",
      J = "[object Function]",
      K = "[object Window]",
      L = "\\u",
      M = "]",
      N = "array",
      aa = "boolean",
      ba = "call",
      ca = "callback",
      da = "chart-",
      O = "function",
      ea = "google.load",
      P = "google.visualization.drawChart",
      fa = "height:",
      ga = "http",
      Q = "https",
      R = "null",
      S = "number",
      T = "object",
      ha = "options.height",
      ia = "options.width",
      U = "px;",
      ja = "splice",
      ka = "string",
      la = 'style="',
      ma = "var ",
      V = "visualization",
      na = "width:",
      oa = "{",
      pa = "}",
      W = this;

  function X(a, b) {
    for (var e = a.split(u), d = b || W, c; c = e.shift();) if (d[c] != f) d = d[c];
    else
    return f;
    return d
  }

  function qa(a) {
    var b = typeof a;
    if (b == T) if (a) {
      if (a instanceof Array) return N;
      else if (a instanceof Object) return b;
      var e = Object[k].toString[l](a);
      if (e == K) return T;
      if (e == I || typeof a[i] == S && typeof a.splice != "undefined" && typeof a[j] != "undefined" && !a[j](ja)) return N;
      if (e == J || typeof a[l] != "undefined" && typeof a[j] != "undefined" && !a[j](ba)) return O
    } else
    return R;
    else if (b == O && typeof a[l] == "undefined") return T;
    return b
  }

  function ra(a) {
    var b = Array[k].slice[l](arguments, 1);
    return function() {
      var e = Array[k].slice[l](arguments);
      e.unshift.apply(e, b);
      return a.apply(this, e)
    }
  };

  function Y() {}
  Y[k].f = function(a) {
    var b = [];
    this.a(a, b);
    return b.join(n)
  };
  Y[k].a = function(a, b) {
    switch (typeof a) {
    case ka:
      this.b(a, b);
      break;
    case S:
      this.d(a, b);
      break;
    case aa:
      b[g](a);
      break;
    case "undefined":
      b[g](R);
      break;
    case T:
      if (a == f) {
        b[g](R);
        break
      }
      if (qa(a) == N) {
        this.c(a, b);
        break
      }
      this.e(a, b);
      break;
    case O:
      break;
    default:
      throw Error("Unknown type: " + typeof a);
    }
  };
  var Z = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\u0008": "\\b",
    "\u000c": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\u000b": "\\u000b"
  },
      sa = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
  Y[k].b = function(a, b) {
    b[g](p, a.replace(sa, function(a) {
      if (a in Z) return Z[a];
      var b = a.charCodeAt(0),
          c = L;
      b < 16 ? c += x : b < 256 ? c += w : b < 4096 && (c += v);
      return Z[a] = c + b.toString(16)
    }), p)
  };
  Y[k].d = function(a, b) {
    b[g](isFinite(a) && !isNaN(a) ? a : R)
  };
  Y[k].c = function(a, b) {
    var e = a[i];
    b[g](H);
    for (var d = n, c = 0; c < e; c++) b[g](d), this.a(a[c], b), d = t;
    b[g](M)
  };
  Y[k].e = function(a, b) {
    b[g](oa);
    var e = n,
        d;
    for (d in a) if (Object[k].hasOwnProperty[l](a, d)) {
      var c = a[d];
      typeof c != O && (b[g](e), this.b(d, b), b[g](z), this.a(c, b), e = t)
    }
    b[g](pa)
  };
  var ta = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

 function $(a) {
    var spinner = new Spinner().spin(),
        target = document.getElementById(a.containerId).parentNode;
    target.appendChild(spinner.el);
    target.style.backgroundColor = 'rgba(0, 0, 0, 0.05)'
    var rand = timer();
    setTimeout(function(){X(P)(a);spinner.stop();target.style.backgroundColor = 'transparent';},rand)
  }(function() {
    var a = eval,
        b;
    b = document.getElementsByTagName(G);
    b = b[b[i] - 1].innerHTML.replace(/[\s\xa0]+/g, o).replace(/^\s+|\s+$/g, n);
    a = a(r + b + s);
    W.__gviz_bootstrap_counter || (W.__gviz_bootstrap_counter = 0);
    b = W.__gviz_bootstrap_counter++;
    var e;
    if (a.containerId == f) {
      e = da + b;
      var d = X(ia, a),
          c = X(ha, a),
          m = [la];
      d && !/[^0-9]/.test(d) && m[g](na + d + U);
      c && !/[^0-9]/.test(c) && m[g](fa + c + U);
      m[g](p);
      m = m.join(n);
      W.document.write(B + e + q + m + D);
      a.containerId = e
    }
    b = ca + b;
    e = ra($, a);
    d = b.split(u);
    c = W;
    !(d[0] in c) && c.execScript && c.execScript(ma + d[0]);
    for (var h; d[i] && (h = d.shift());)!d[i] && e !== void 0 ? c[h] = e : c = c[h] ? c[h] : c[h] = {};
    h = a.packages || f;
    X(ea) ? X(P) ? $(a) : (a = {
      callback: b
    }, h && (a.packages = h), google.load(V, y, a)) : (a = ((window.location.href.match(ta)[1] || f) == Q ? Q : ga) + A, b = {
      name: V,
      version: y,
      callback: b
    }, h != f && (b.packages = h), a += F + (new Y).f({
      modules: [b]
    }), W.document.write(C + a + E))
  })();
})();