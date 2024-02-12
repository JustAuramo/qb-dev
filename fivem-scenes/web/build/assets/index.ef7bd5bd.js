function VS(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const o in n)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(n, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => n[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = r(o);
    fetch(o.href, i);
  }
})();
function HS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var m = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vi = Symbol.for("react.element"),
  BS = Symbol.for("react.portal"),
  WS = Symbol.for("react.fragment"),
  US = Symbol.for("react.strict_mode"),
  GS = Symbol.for("react.profiler"),
  YS = Symbol.for("react.provider"),
  XS = Symbol.for("react.context"),
  QS = Symbol.for("react.forward_ref"),
  KS = Symbol.for("react.suspense"),
  ZS = Symbol.for("react.memo"),
  JS = Symbol.for("react.lazy"),
  Ud = Symbol.iterator;
function qS(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ud && e[Ud]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var gg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  yg = Object.assign,
  wg = {};
function co(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = wg),
    (this.updater = r || gg);
}
co.prototype.isReactComponent = {};
co.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
co.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function _g() {}
_g.prototype = co.prototype;
function cf(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = wg),
    (this.updater = r || gg);
}
var uf = (cf.prototype = new _g());
uf.constructor = cf;
yg(uf, co.prototype);
uf.isPureReactComponent = !0;
var Gd = Array.isArray,
  Sg = Object.prototype.hasOwnProperty,
  ff = { current: null },
  xg = { key: !0, ref: !0, __self: !0, __source: !0 };
function bg(e, t, r) {
  var n,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Sg.call(t, n) && !xg.hasOwnProperty(n) && (o[n] = t[n]);
  var a = arguments.length - 2;
  if (a === 1) o.children = r;
  else if (1 < a) {
    for (var s = Array(a), c = 0; c < a; c++) s[c] = arguments[c + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (n in ((a = e.defaultProps), a)) o[n] === void 0 && (o[n] = a[n]);
  return {
    $$typeof: vi,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: ff.current,
  };
}
function ex(e, t) {
  return {
    $$typeof: vi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function df(e) {
  return typeof e == "object" && e !== null && e.$$typeof === vi;
}
function tx(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var Yd = /\/+/g;
function oc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? tx("" + e.key)
    : t.toString(36);
}
function fl(e, t, r, n, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case vi:
          case BS:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = n === "" ? "." + oc(l, 0) : n),
      Gd(o)
        ? ((r = ""),
          e != null && (r = e.replace(Yd, "$&/") + "/"),
          fl(o, t, r, "", function (c) {
            return c;
          }))
        : o != null &&
          (df(o) &&
            (o = ex(
              o,
              r +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Yd, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (n = n === "" ? "." : n + ":"), Gd(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = n + oc(i, a);
      l += fl(i, t, r, s, o);
    }
  else if (((s = qS(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (s = n + oc(i, a++)), (l += fl(i, t, r, s, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Ni(e, t, r) {
  if (e == null) return e;
  var n = [],
    o = 0;
  return (
    fl(e, n, "", "", function (i) {
      return t.call(r, i, o++);
    }),
    n
  );
}
function rx(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Xe = { current: null },
  dl = { transition: null },
  nx = {
    ReactCurrentDispatcher: Xe,
    ReactCurrentBatchConfig: dl,
    ReactCurrentOwner: ff,
  };
X.Children = {
  map: Ni,
  forEach: function (e, t, r) {
    Ni(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ni(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ni(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!df(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
X.Component = co;
X.Fragment = WS;
X.Profiler = GS;
X.PureComponent = cf;
X.StrictMode = US;
X.Suspense = KS;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nx;
X.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var n = yg({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = ff.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      Sg.call(t, s) &&
        !xg.hasOwnProperty(s) &&
        (n[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) n.children = r;
  else if (1 < s) {
    a = Array(s);
    for (var c = 0; c < s; c++) a[c] = arguments[c + 2];
    n.children = a;
  }
  return { $$typeof: vi, type: e.type, key: o, ref: i, props: n, _owner: l };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: XS,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: YS, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = bg;
X.createFactory = function (e) {
  var t = bg.bind(null, e);
  return (t.type = e), t;
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: QS, render: e };
};
X.isValidElement = df;
X.lazy = function (e) {
  return { $$typeof: JS, _payload: { _status: -1, _result: e }, _init: rx };
};
X.memo = function (e, t) {
  return { $$typeof: ZS, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = dl.transition;
  dl.transition = {};
  try {
    e();
  } finally {
    dl.transition = t;
  }
};
X.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
X.useCallback = function (e, t) {
  return Xe.current.useCallback(e, t);
};
X.useContext = function (e) {
  return Xe.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return Xe.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return Xe.current.useEffect(e, t);
};
X.useId = function () {
  return Xe.current.useId();
};
X.useImperativeHandle = function (e, t, r) {
  return Xe.current.useImperativeHandle(e, t, r);
};
X.useInsertionEffect = function (e, t) {
  return Xe.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return Xe.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return Xe.current.useMemo(e, t);
};
X.useReducer = function (e, t, r) {
  return Xe.current.useReducer(e, t, r);
};
X.useRef = function (e) {
  return Xe.current.useRef(e);
};
X.useState = function (e) {
  return Xe.current.useState(e);
};
X.useSyncExternalStore = function (e, t, r) {
  return Xe.current.useSyncExternalStore(e, t, r);
};
X.useTransition = function () {
  return Xe.current.useTransition();
};
X.version = "18.2.0";
(function (e) {
  e.exports = X;
})(m);
const an = HS(m.exports),
  Tl = VS({ __proto__: null, default: an }, [m.exports]);
var Kc = {},
  hi = { exports: {} },
  pt = {},
  Pg = { exports: {} },
  $g = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, D) {
    var j = k.length;
    k.push(D);
    e: for (; 0 < j; ) {
      var F = (j - 1) >>> 1,
        B = k[F];
      if (0 < o(B, D)) (k[F] = D), (k[j] = B), (j = F);
      else break e;
    }
  }
  function r(k) {
    return k.length === 0 ? null : k[0];
  }
  function n(k) {
    if (k.length === 0) return null;
    var D = k[0],
      j = k.pop();
    if (j !== D) {
      k[0] = j;
      e: for (var F = 0, B = k.length, ie = B >>> 1; F < ie; ) {
        var ye = 2 * (F + 1) - 1,
          Q = k[ye],
          oe = ye + 1,
          _e = k[oe];
        if (0 > o(Q, j))
          oe < B && 0 > o(_e, Q)
            ? ((k[F] = _e), (k[oe] = j), (F = oe))
            : ((k[F] = Q), (k[ye] = j), (F = ye));
        else if (oe < B && 0 > o(_e, j)) (k[F] = _e), (k[oe] = j), (F = oe);
        else break e;
      }
    }
    return D;
  }
  function o(k, D) {
    var j = k.sortIndex - D.sortIndex;
    return j !== 0 ? j : k.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var s = [],
    c = [],
    f = 1,
    u = null,
    d = 3,
    h = !1,
    y = !1,
    w = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(k) {
    for (var D = r(c); D !== null; ) {
      if (D.callback === null) n(c);
      else if (D.startTime <= k)
        n(c), (D.sortIndex = D.expirationTime), t(s, D);
      else break;
      D = r(c);
    }
  }
  function S(k) {
    if (((w = !1), g(k), !y))
      if (r(s) !== null) (y = !0), H(b);
      else {
        var D = r(c);
        D !== null && G(S, D.startTime - k);
      }
  }
  function b(k, D) {
    (y = !1), w && ((w = !1), v(C), (C = -1)), (h = !0);
    var j = d;
    try {
      for (
        g(D), u = r(s);
        u !== null && (!(u.expirationTime > D) || (k && !z()));

      ) {
        var F = u.callback;
        if (typeof F == "function") {
          (u.callback = null), (d = u.priorityLevel);
          var B = F(u.expirationTime <= D);
          (D = e.unstable_now()),
            typeof B == "function" ? (u.callback = B) : u === r(s) && n(s),
            g(D);
        } else n(s);
        u = r(s);
      }
      if (u !== null) var ie = !0;
      else {
        var ye = r(c);
        ye !== null && G(S, ye.startTime - D), (ie = !1);
      }
      return ie;
    } finally {
      (u = null), (d = j), (h = !1);
    }
  }
  var O = !1,
    $ = null,
    C = -1,
    R = 5,
    E = -1;
  function z() {
    return !(e.unstable_now() - E < R);
  }
  function M() {
    if ($ !== null) {
      var k = e.unstable_now();
      E = k;
      var D = !0;
      try {
        D = $(!0, k);
      } finally {
        D ? N() : ((O = !1), ($ = null));
      }
    } else O = !1;
  }
  var N;
  if (typeof p == "function")
    N = function () {
      p(M);
    };
  else if (typeof MessageChannel < "u") {
    var T = new MessageChannel(),
      A = T.port2;
    (T.port1.onmessage = M),
      (N = function () {
        A.postMessage(null);
      });
  } else
    N = function () {
      P(M, 0);
    };
  function H(k) {
    ($ = k), O || ((O = !0), N());
  }
  function G(k, D) {
    C = P(function () {
      k(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || h || ((y = !0), H(b));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(s);
    }),
    (e.unstable_next = function (k) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = d;
      }
      var j = d;
      d = D;
      try {
        return k();
      } finally {
        d = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, D) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var j = d;
      d = k;
      try {
        return D();
      } finally {
        d = j;
      }
    }),
    (e.unstable_scheduleCallback = function (k, D, j) {
      var F = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? F + j : F))
          : (j = F),
        k)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = j + B),
        (k = {
          id: f++,
          callback: D,
          priorityLevel: k,
          startTime: j,
          expirationTime: B,
          sortIndex: -1,
        }),
        j > F
          ? ((k.sortIndex = j),
            t(c, k),
            r(s) === null &&
              k === r(c) &&
              (w ? (v(C), (C = -1)) : (w = !0), G(S, j - F)))
          : ((k.sortIndex = B), t(s, k), y || h || ((y = !0), H(b))),
        k
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (k) {
      var D = d;
      return function () {
        var j = d;
        d = D;
        try {
          return k.apply(this, arguments);
        } finally {
          d = j;
        }
      };
    });
})($g);
(function (e) {
  e.exports = $g;
})(Pg);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Og = m.exports,
  ft = Pg.exports;
function I(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Cg = new Set(),
  Qo = {};
function yn(e, t) {
  Kn(e, t), Kn(e + "Capture", t);
}
function Kn(e, t) {
  for (Qo[e] = t, e = 0; e < t.length; e++) Cg.add(t[e]);
}
var fr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Zc = Object.prototype.hasOwnProperty,
  ox =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Xd = {},
  Qd = {};
function ix(e) {
  return Zc.call(Qd, e)
    ? !0
    : Zc.call(Xd, e)
    ? !1
    : ox.test(e)
    ? (Qd[e] = !0)
    : ((Xd[e] = !0), !1);
}
function lx(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ax(e, t, r, n) {
  if (t === null || typeof t > "u" || lx(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Qe(e, t, r, n, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    je[e] = new Qe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  je[t] = new Qe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  je[e] = new Qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  je[e] = new Qe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    je[e] = new Qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  je[e] = new Qe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  je[e] = new Qe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  je[e] = new Qe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  je[e] = new Qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var pf = /[\-:]([a-z])/g;
function mf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(pf, mf);
    je[t] = new Qe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(pf, mf);
    je[t] = new Qe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(pf, mf);
  je[t] = new Qe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  je[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
je.xlinkHref = new Qe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  je[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vf(e, t, r, n) {
  var o = je.hasOwnProperty(t) ? je[t] : null;
  (o !== null
    ? o.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ax(t, r, o, n) && (r = null),
    n || o === null
      ? ix(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : o.mustUseProperty
      ? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : "") : r)
      : ((t = o.attributeName),
        (n = o.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (r = o === 3 || (o === 4 && r === !0) ? "" : "" + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var yr = Og.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ti = Symbol.for("react.element"),
  Rn = Symbol.for("react.portal"),
  Nn = Symbol.for("react.fragment"),
  hf = Symbol.for("react.strict_mode"),
  Jc = Symbol.for("react.profiler"),
  Eg = Symbol.for("react.provider"),
  kg = Symbol.for("react.context"),
  gf = Symbol.for("react.forward_ref"),
  qc = Symbol.for("react.suspense"),
  eu = Symbol.for("react.suspense_list"),
  yf = Symbol.for("react.memo"),
  Pr = Symbol.for("react.lazy"),
  Rg = Symbol.for("react.offscreen"),
  Kd = Symbol.iterator;
function yo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Kd && e[Kd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ge = Object.assign,
  ic;
function To(e) {
  if (ic === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      ic = (t && t[1]) || "";
    }
  return (
    `
` +
    ic +
    e
  );
}
var lc = !1;
function ac(e, t) {
  if (!e || lc) return "";
  lc = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var n = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          n = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        n = c;
      }
      e();
    }
  } catch (c) {
    if (c && n && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          i = n.stack.split(`
`),
          l = o.length - 1,
          a = i.length - 1;
        1 <= l && 0 <= a && o[l] !== i[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (o[l] !== i[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || o[l] !== i[a])) {
                var s =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (lc = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? To(e) : "";
}
function sx(e) {
  switch (e.tag) {
    case 5:
      return To(e.type);
    case 16:
      return To("Lazy");
    case 13:
      return To("Suspense");
    case 19:
      return To("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ac(e.type, !1)), e;
    case 11:
      return (e = ac(e.type.render, !1)), e;
    case 1:
      return (e = ac(e.type, !0)), e;
    default:
      return "";
  }
}
function tu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Nn:
      return "Fragment";
    case Rn:
      return "Portal";
    case Jc:
      return "Profiler";
    case hf:
      return "StrictMode";
    case qc:
      return "Suspense";
    case eu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case kg:
        return (e.displayName || "Context") + ".Consumer";
      case Eg:
        return (e._context.displayName || "Context") + ".Provider";
      case gf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case yf:
        return (
          (t = e.displayName || null), t !== null ? t : tu(e.type) || "Memo"
        );
      case Pr:
        (t = e._payload), (e = e._init);
        try {
          return tu(e(t));
        } catch {}
    }
  return null;
}
function cx(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return tu(t);
    case 8:
      return t === hf ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Vr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ng(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ux(e) {
  var t = Ng(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var o = r.get,
      i = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (n = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (l) {
          n = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ii(e) {
  e._valueTracker || (e._valueTracker = ux(e));
}
function Tg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = Ng(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function Il(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ru(e, t) {
  var r = t.checked;
  return ge({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r != null ? r : e._wrapperState.initialChecked,
  });
}
function Zd(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = Vr(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ig(e, t) {
  (t = t.checked), t != null && vf(e, "checked", t, !1);
}
function nu(e, t) {
  Ig(e, t);
  var r = Vr(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ou(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && ou(e, t.type, Vr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Jd(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function ou(e, t, r) {
  (t !== "number" || Il(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Io = Array.isArray;
function Hn(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      (o = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== o && (e[r].selected = o),
        o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Vr(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        (e[o].selected = !0), n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function iu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return ge({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function qd(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(I(92));
      if (Io(r)) {
        if (1 < r.length) throw Error(I(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: Vr(r) };
}
function zg(e, t) {
  var r = Vr(t.value),
    n = Vr(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function ep(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Dg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Dg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var zi,
  jg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        zi = zi || document.createElement("div"),
          zi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = zi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ko(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Lo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  fx = ["Webkit", "ms", "Moz", "O"];
Object.keys(Lo).forEach(function (e) {
  fx.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Lo[t] = Lo[e]);
  });
});
function Lg(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (Lo.hasOwnProperty(e) && Lo[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ag(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        o = Lg(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : (e[r] = o);
    }
}
var dx = ge(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function au(e, t) {
  if (t) {
    if (dx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function su(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var cu = null;
function wf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var uu = null,
  Bn = null,
  Wn = null;
function tp(e) {
  if ((e = wi(e))) {
    if (typeof uu != "function") throw Error(I(280));
    var t = e.stateNode;
    t && ((t = ds(t)), uu(e.stateNode, e.type, t));
  }
}
function Mg(e) {
  Bn ? (Wn ? Wn.push(e) : (Wn = [e])) : (Bn = e);
}
function Fg() {
  if (Bn) {
    var e = Bn,
      t = Wn;
    if (((Wn = Bn = null), tp(e), t)) for (e = 0; e < t.length; e++) tp(t[e]);
  }
}
function Vg(e, t) {
  return e(t);
}
function Hg() {}
var sc = !1;
function Bg(e, t, r) {
  if (sc) return e(t, r);
  sc = !0;
  try {
    return Vg(e, t, r);
  } finally {
    (sc = !1), (Bn !== null || Wn !== null) && (Hg(), Fg());
  }
}
function Zo(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = ds(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(I(231, t, typeof r));
  return r;
}
var fu = !1;
if (fr)
  try {
    var wo = {};
    Object.defineProperty(wo, "passive", {
      get: function () {
        fu = !0;
      },
    }),
      window.addEventListener("test", wo, wo),
      window.removeEventListener("test", wo, wo);
  } catch {
    fu = !1;
  }
function px(e, t, r, n, o, i, l, a, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, c);
  } catch (f) {
    this.onError(f);
  }
}
var Ao = !1,
  zl = null,
  Dl = !1,
  du = null,
  mx = {
    onError: function (e) {
      (Ao = !0), (zl = e);
    },
  };
function vx(e, t, r, n, o, i, l, a, s) {
  (Ao = !1), (zl = null), px.apply(mx, arguments);
}
function hx(e, t, r, n, o, i, l, a, s) {
  if ((vx.apply(this, arguments), Ao)) {
    if (Ao) {
      var c = zl;
      (Ao = !1), (zl = null);
    } else throw Error(I(198));
    Dl || ((Dl = !0), (du = c));
  }
}
function wn(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function Wg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function rp(e) {
  if (wn(e) !== e) throw Error(I(188));
}
function gx(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = wn(e)), t === null)) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var o = r.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((n = o.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === r) return rp(o), e;
        if (i === n) return rp(o), t;
        i = i.sibling;
      }
      throw Error(I(188));
    }
    if (r.return !== n.return) (r = o), (n = i);
    else {
      for (var l = !1, a = o.child; a; ) {
        if (a === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        if (a === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = i.child; a; ) {
          if (a === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          if (a === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(I(189));
      }
    }
    if (r.alternate !== n) throw Error(I(190));
  }
  if (r.tag !== 3) throw Error(I(188));
  return r.stateNode.current === r ? e : t;
}
function Ug(e) {
  return (e = gx(e)), e !== null ? Gg(e) : null;
}
function Gg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Gg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Yg = ft.unstable_scheduleCallback,
  np = ft.unstable_cancelCallback,
  yx = ft.unstable_shouldYield,
  wx = ft.unstable_requestPaint,
  Se = ft.unstable_now,
  _x = ft.unstable_getCurrentPriorityLevel,
  _f = ft.unstable_ImmediatePriority,
  Xg = ft.unstable_UserBlockingPriority,
  jl = ft.unstable_NormalPriority,
  Sx = ft.unstable_LowPriority,
  Qg = ft.unstable_IdlePriority,
  ss = null,
  Qt = null;
function xx(e) {
  if (Qt && typeof Qt.onCommitFiberRoot == "function")
    try {
      Qt.onCommitFiberRoot(ss, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Dt = Math.clz32 ? Math.clz32 : $x,
  bx = Math.log,
  Px = Math.LN2;
function $x(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((bx(e) / Px) | 0)) | 0;
}
var Di = 64,
  ji = 4194304;
function zo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ll(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = r & 268435455;
  if (l !== 0) {
    var a = l & ~o;
    a !== 0 ? (n = zo(a)) : ((i &= l), i !== 0 && (n = zo(i)));
  } else (l = r & ~o), l !== 0 ? (n = zo(l)) : i !== 0 && (n = zo(i));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    (t & o) === 0 &&
    ((o = n & -n), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if (((n & 4) !== 0 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - Dt(t)), (o = 1 << r), (n |= e[r]), (t &= ~o);
  return n;
}
function Ox(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Cx(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - Dt(i),
      a = 1 << l,
      s = o[l];
    s === -1
      ? ((a & r) === 0 || (a & n) !== 0) && (o[l] = Ox(a, t))
      : s <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function pu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Kg() {
  var e = Di;
  return (Di <<= 1), (Di & 4194240) === 0 && (Di = 64), e;
}
function cc(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function gi(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Dt(t)),
    (e[t] = r);
}
function Ex(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - Dt(r),
      i = 1 << o;
    (t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~i);
  }
}
function Sf(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - Dt(r),
      o = 1 << n;
    (o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o);
  }
}
var te = 0;
function Zg(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var Jg,
  xf,
  qg,
  ey,
  ty,
  mu = !1,
  Li = [],
  Nr = null,
  Tr = null,
  Ir = null,
  Jo = new Map(),
  qo = new Map(),
  Or = [],
  kx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function op(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nr = null;
      break;
    case "dragenter":
    case "dragleave":
      Tr = null;
      break;
    case "mouseover":
    case "mouseout":
      Ir = null;
      break;
    case "pointerover":
    case "pointerout":
      Jo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qo.delete(t.pointerId);
  }
}
function _o(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = wi(t)), t !== null && xf(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Rx(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return (Nr = _o(Nr, e, t, r, n, o)), !0;
    case "dragenter":
      return (Tr = _o(Tr, e, t, r, n, o)), !0;
    case "mouseover":
      return (Ir = _o(Ir, e, t, r, n, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Jo.set(i, _o(Jo.get(i) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), qo.set(i, _o(qo.get(i) || null, e, t, r, n, o)), !0
      );
  }
  return !1;
}
function ry(e) {
  var t = rn(e.target);
  if (t !== null) {
    var r = wn(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Wg(r)), t !== null)) {
          (e.blockedOn = t),
            ty(e.priority, function () {
              qg(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function pl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = vu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (cu = n), r.target.dispatchEvent(n), (cu = null);
    } else return (t = wi(r)), t !== null && xf(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function ip(e, t, r) {
  pl(e) && r.delete(t);
}
function Nx() {
  (mu = !1),
    Nr !== null && pl(Nr) && (Nr = null),
    Tr !== null && pl(Tr) && (Tr = null),
    Ir !== null && pl(Ir) && (Ir = null),
    Jo.forEach(ip),
    qo.forEach(ip);
}
function So(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    mu ||
      ((mu = !0),
      ft.unstable_scheduleCallback(ft.unstable_NormalPriority, Nx)));
}
function ei(e) {
  function t(o) {
    return So(o, e);
  }
  if (0 < Li.length) {
    So(Li[0], e);
    for (var r = 1; r < Li.length; r++) {
      var n = Li[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    Nr !== null && So(Nr, e),
      Tr !== null && So(Tr, e),
      Ir !== null && So(Ir, e),
      Jo.forEach(t),
      qo.forEach(t),
      r = 0;
    r < Or.length;
    r++
  )
    (n = Or[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Or.length && ((r = Or[0]), r.blockedOn === null); )
    ry(r), r.blockedOn === null && Or.shift();
}
var Un = yr.ReactCurrentBatchConfig,
  Al = !0;
function Tx(e, t, r, n) {
  var o = te,
    i = Un.transition;
  Un.transition = null;
  try {
    (te = 1), bf(e, t, r, n);
  } finally {
    (te = o), (Un.transition = i);
  }
}
function Ix(e, t, r, n) {
  var o = te,
    i = Un.transition;
  Un.transition = null;
  try {
    (te = 4), bf(e, t, r, n);
  } finally {
    (te = o), (Un.transition = i);
  }
}
function bf(e, t, r, n) {
  if (Al) {
    var o = vu(e, t, r, n);
    if (o === null) wc(e, t, n, Ml, r), op(e, n);
    else if (Rx(o, e, t, r, n)) n.stopPropagation();
    else if ((op(e, n), t & 4 && -1 < kx.indexOf(e))) {
      for (; o !== null; ) {
        var i = wi(o);
        if (
          (i !== null && Jg(i),
          (i = vu(e, t, r, n)),
          i === null && wc(e, t, n, Ml, r),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && n.stopPropagation();
    } else wc(e, t, n, null, r);
  }
}
var Ml = null;
function vu(e, t, r, n) {
  if (((Ml = null), (e = wf(n)), (e = rn(e)), e !== null))
    if (((t = wn(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = Wg(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ml = e), null;
}
function ny(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (_x()) {
        case _f:
          return 1;
        case Xg:
          return 4;
        case jl:
        case Sx:
          return 16;
        case Qg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Er = null,
  Pf = null,
  ml = null;
function oy() {
  if (ml) return ml;
  var e,
    t = Pf,
    r = t.length,
    n,
    o = "value" in Er ? Er.value : Er.textContent,
    i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++);
  var l = r - e;
  for (n = 1; n <= l && t[r - n] === o[i - n]; n++);
  return (ml = o.slice(e, 1 < n ? 1 - n : void 0));
}
function vl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ai() {
  return !0;
}
function lp() {
  return !1;
}
function mt(e) {
  function t(r, n, o, i, l) {
    (this._reactName = r),
      (this._targetInst = o),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((r = e[a]), (this[a] = r ? r(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ai
        : lp),
      (this.isPropagationStopped = lp),
      this
    );
  }
  return (
    ge(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = Ai));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = Ai));
      },
      persist: function () {},
      isPersistent: Ai,
    }),
    t
  );
}
var uo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  $f = mt(uo),
  yi = ge({}, uo, { view: 0, detail: 0 }),
  zx = mt(yi),
  uc,
  fc,
  xo,
  cs = ge({}, yi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Of,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== xo &&
            (xo && e.type === "mousemove"
              ? ((uc = e.screenX - xo.screenX), (fc = e.screenY - xo.screenY))
              : (fc = uc = 0),
            (xo = e)),
          uc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : fc;
    },
  }),
  ap = mt(cs),
  Dx = ge({}, cs, { dataTransfer: 0 }),
  jx = mt(Dx),
  Lx = ge({}, yi, { relatedTarget: 0 }),
  dc = mt(Lx),
  Ax = ge({}, uo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mx = mt(Ax),
  Fx = ge({}, uo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Vx = mt(Fx),
  Hx = ge({}, uo, { data: 0 }),
  sp = mt(Hx),
  Bx = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Wx = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ux = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Gx(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ux[e]) ? !!t[e] : !1;
}
function Of() {
  return Gx;
}
var Yx = ge({}, yi, {
    key: function (e) {
      if (e.key) {
        var t = Bx[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = vl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Wx[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Of,
    charCode: function (e) {
      return e.type === "keypress" ? vl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? vl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Xx = mt(Yx),
  Qx = ge({}, cs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  cp = mt(Qx),
  Kx = ge({}, yi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Of,
  }),
  Zx = mt(Kx),
  Jx = ge({}, uo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qx = mt(Jx),
  eb = ge({}, cs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  tb = mt(eb),
  rb = [9, 13, 27, 32],
  Cf = fr && "CompositionEvent" in window,
  Mo = null;
fr && "documentMode" in document && (Mo = document.documentMode);
var nb = fr && "TextEvent" in window && !Mo,
  iy = fr && (!Cf || (Mo && 8 < Mo && 11 >= Mo)),
  up = String.fromCharCode(32),
  fp = !1;
function ly(e, t) {
  switch (e) {
    case "keyup":
      return rb.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ay(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Tn = !1;
function ob(e, t) {
  switch (e) {
    case "compositionend":
      return ay(t);
    case "keypress":
      return t.which !== 32 ? null : ((fp = !0), up);
    case "textInput":
      return (e = t.data), e === up && fp ? null : e;
    default:
      return null;
  }
}
function ib(e, t) {
  if (Tn)
    return e === "compositionend" || (!Cf && ly(e, t))
      ? ((e = oy()), (ml = Pf = Er = null), (Tn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return iy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var lb = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function dp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!lb[e.type] : t === "textarea";
}
function sy(e, t, r, n) {
  Mg(n),
    (t = Fl(t, "onChange")),
    0 < t.length &&
      ((r = new $f("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var Fo = null,
  ti = null;
function ab(e) {
  wy(e, 0);
}
function us(e) {
  var t = Dn(e);
  if (Tg(t)) return e;
}
function sb(e, t) {
  if (e === "change") return t;
}
var cy = !1;
if (fr) {
  var pc;
  if (fr) {
    var mc = "oninput" in document;
    if (!mc) {
      var pp = document.createElement("div");
      pp.setAttribute("oninput", "return;"),
        (mc = typeof pp.oninput == "function");
    }
    pc = mc;
  } else pc = !1;
  cy = pc && (!document.documentMode || 9 < document.documentMode);
}
function mp() {
  Fo && (Fo.detachEvent("onpropertychange", uy), (ti = Fo = null));
}
function uy(e) {
  if (e.propertyName === "value" && us(ti)) {
    var t = [];
    sy(t, ti, e, wf(e)), Bg(ab, t);
  }
}
function cb(e, t, r) {
  e === "focusin"
    ? (mp(), (Fo = t), (ti = r), Fo.attachEvent("onpropertychange", uy))
    : e === "focusout" && mp();
}
function ub(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return us(ti);
}
function fb(e, t) {
  if (e === "click") return us(t);
}
function db(e, t) {
  if (e === "input" || e === "change") return us(t);
}
function pb(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Lt = typeof Object.is == "function" ? Object.is : pb;
function ri(e, t) {
  if (Lt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!Zc.call(t, o) || !Lt(e[o], t[o])) return !1;
  }
  return !0;
}
function vp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function hp(e, t) {
  var r = vp(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = vp(r);
  }
}
function fy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? fy(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function dy() {
  for (var e = window, t = Il(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Il(e.document);
  }
  return t;
}
function Ef(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function mb(e) {
  var t = dy(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    fy(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && Ef(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = r.textContent.length,
          i = Math.min(n.start, o);
        (n = n.end === void 0 ? i : Math.min(n.end, o)),
          !e.extend && i > n && ((o = n), (n = i), (i = o)),
          (o = hp(r, i));
        var l = hp(r, n);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > n
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var vb = fr && "documentMode" in document && 11 >= document.documentMode,
  In = null,
  hu = null,
  Vo = null,
  gu = !1;
function gp(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  gu ||
    In == null ||
    In !== Il(n) ||
    ((n = In),
    "selectionStart" in n && Ef(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (Vo && ri(Vo, n)) ||
      ((Vo = n),
      (n = Fl(hu, "onSelect")),
      0 < n.length &&
        ((t = new $f("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = In))));
}
function Mi(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var zn = {
    animationend: Mi("Animation", "AnimationEnd"),
    animationiteration: Mi("Animation", "AnimationIteration"),
    animationstart: Mi("Animation", "AnimationStart"),
    transitionend: Mi("Transition", "TransitionEnd"),
  },
  vc = {},
  py = {};
fr &&
  ((py = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete zn.animationend.animation,
    delete zn.animationiteration.animation,
    delete zn.animationstart.animation),
  "TransitionEvent" in window || delete zn.transitionend.transition);
function fs(e) {
  if (vc[e]) return vc[e];
  if (!zn[e]) return e;
  var t = zn[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in py) return (vc[e] = t[r]);
  return e;
}
var my = fs("animationend"),
  vy = fs("animationiteration"),
  hy = fs("animationstart"),
  gy = fs("transitionend"),
  yy = new Map(),
  yp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Yr(e, t) {
  yy.set(e, t), yn(t, [e]);
}
for (var hc = 0; hc < yp.length; hc++) {
  var gc = yp[hc],
    hb = gc.toLowerCase(),
    gb = gc[0].toUpperCase() + gc.slice(1);
  Yr(hb, "on" + gb);
}
Yr(my, "onAnimationEnd");
Yr(vy, "onAnimationIteration");
Yr(hy, "onAnimationStart");
Yr("dblclick", "onDoubleClick");
Yr("focusin", "onFocus");
Yr("focusout", "onBlur");
Yr(gy, "onTransitionEnd");
Kn("onMouseEnter", ["mouseout", "mouseover"]);
Kn("onMouseLeave", ["mouseout", "mouseover"]);
Kn("onPointerEnter", ["pointerout", "pointerover"]);
Kn("onPointerLeave", ["pointerout", "pointerover"]);
yn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
yn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
yn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
yn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Do =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  yb = new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));
function wp(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), hx(n, t, void 0, e), (e.currentTarget = null);
}
function wy(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      o = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = n.length - 1; 0 <= l; l--) {
          var a = n[l],
            s = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), s !== i && o.isPropagationStopped())) break e;
          wp(o, a, c), (i = s);
        }
      else
        for (l = 0; l < n.length; l++) {
          if (
            ((a = n[l]),
            (s = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          wp(o, a, c), (i = s);
        }
    }
  }
  if (Dl) throw ((e = du), (Dl = !1), (du = null), e);
}
function ue(e, t) {
  var r = t[xu];
  r === void 0 && (r = t[xu] = new Set());
  var n = e + "__bubble";
  r.has(n) || (_y(t, e, 2, !1), r.add(n));
}
function yc(e, t, r) {
  var n = 0;
  t && (n |= 4), _y(r, e, n, t);
}
var Fi = "_reactListening" + Math.random().toString(36).slice(2);
function ni(e) {
  if (!e[Fi]) {
    (e[Fi] = !0),
      Cg.forEach(function (r) {
        r !== "selectionchange" && (yb.has(r) || yc(r, !1, e), yc(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fi] || ((t[Fi] = !0), yc("selectionchange", !1, t));
  }
}
function _y(e, t, r, n) {
  switch (ny(t)) {
    case 1:
      var o = Tx;
      break;
    case 4:
      o = Ix;
      break;
    default:
      o = bf;
  }
  (r = o.bind(null, t, r, e)),
    (o = void 0),
    !fu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : o !== void 0
      ? e.addEventListener(t, r, { passive: o })
      : e.addEventListener(t, r, !1);
}
function wc(e, t, r, n, o) {
  var i = n;
  if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
    e: for (;;) {
      if (n === null) return;
      var l = n.tag;
      if (l === 3 || l === 4) {
        var a = n.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (l === 4)
          for (l = n.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = rn(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            n = i = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      n = n.return;
    }
  Bg(function () {
    var c = i,
      f = wf(r),
      u = [];
    e: {
      var d = yy.get(e);
      if (d !== void 0) {
        var h = $f,
          y = e;
        switch (e) {
          case "keypress":
            if (vl(r) === 0) break e;
          case "keydown":
          case "keyup":
            h = Xx;
            break;
          case "focusin":
            (y = "focus"), (h = dc);
            break;
          case "focusout":
            (y = "blur"), (h = dc);
            break;
          case "beforeblur":
          case "afterblur":
            h = dc;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = ap;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = jx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Zx;
            break;
          case my:
          case vy:
          case hy:
            h = Mx;
            break;
          case gy:
            h = qx;
            break;
          case "scroll":
            h = zx;
            break;
          case "wheel":
            h = tb;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Vx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = cp;
        }
        var w = (t & 4) !== 0,
          P = !w && e === "scroll",
          v = w ? (d !== null ? d + "Capture" : null) : d;
        w = [];
        for (var p = c, g; p !== null; ) {
          g = p;
          var S = g.stateNode;
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S),
              v !== null && ((S = Zo(p, v)), S != null && w.push(oi(p, S, g)))),
            P)
          )
            break;
          p = p.return;
        }
        0 < w.length &&
          ((d = new h(d, y, null, r, f)), u.push({ event: d, listeners: w }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          d &&
            r !== cu &&
            (y = r.relatedTarget || r.fromElement) &&
            (rn(y) || y[dr]))
        )
          break e;
        if (
          (h || d) &&
          ((d =
            f.window === f
              ? f
              : (d = f.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          h
            ? ((y = r.relatedTarget || r.toElement),
              (h = c),
              (y = y ? rn(y) : null),
              y !== null &&
                ((P = wn(y)), y !== P || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((h = null), (y = c)),
          h !== y)
        ) {
          if (
            ((w = ap),
            (S = "onMouseLeave"),
            (v = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = cp),
              (S = "onPointerLeave"),
              (v = "onPointerEnter"),
              (p = "pointer")),
            (P = h == null ? d : Dn(h)),
            (g = y == null ? d : Dn(y)),
            (d = new w(S, p + "leave", h, r, f)),
            (d.target = P),
            (d.relatedTarget = g),
            (S = null),
            rn(f) === c &&
              ((w = new w(v, p + "enter", y, r, f)),
              (w.target = g),
              (w.relatedTarget = P),
              (S = w)),
            (P = S),
            h && y)
          )
            t: {
              for (w = h, v = y, p = 0, g = w; g; g = $n(g)) p++;
              for (g = 0, S = v; S; S = $n(S)) g++;
              for (; 0 < p - g; ) (w = $n(w)), p--;
              for (; 0 < g - p; ) (v = $n(v)), g--;
              for (; p--; ) {
                if (w === v || (v !== null && w === v.alternate)) break t;
                (w = $n(w)), (v = $n(v));
              }
              w = null;
            }
          else w = null;
          h !== null && _p(u, d, h, w, !1),
            y !== null && P !== null && _p(u, P, y, w, !0);
        }
      }
      e: {
        if (
          ((d = c ? Dn(c) : window),
          (h = d.nodeName && d.nodeName.toLowerCase()),
          h === "select" || (h === "input" && d.type === "file"))
        )
          var b = sb;
        else if (dp(d))
          if (cy) b = db;
          else {
            b = ub;
            var O = cb;
          }
        else
          (h = d.nodeName) &&
            h.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (b = fb);
        if (b && (b = b(e, c))) {
          sy(u, b, r, f);
          break e;
        }
        O && O(e, d, c),
          e === "focusout" &&
            (O = d._wrapperState) &&
            O.controlled &&
            d.type === "number" &&
            ou(d, "number", d.value);
      }
      switch (((O = c ? Dn(c) : window), e)) {
        case "focusin":
          (dp(O) || O.contentEditable === "true") &&
            ((In = O), (hu = c), (Vo = null));
          break;
        case "focusout":
          Vo = hu = In = null;
          break;
        case "mousedown":
          gu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (gu = !1), gp(u, r, f);
          break;
        case "selectionchange":
          if (vb) break;
        case "keydown":
        case "keyup":
          gp(u, r, f);
      }
      var $;
      if (Cf)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        Tn
          ? ly(e, r) && (C = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (iy &&
          r.locale !== "ko" &&
          (Tn || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && Tn && ($ = oy())
            : ((Er = f),
              (Pf = "value" in Er ? Er.value : Er.textContent),
              (Tn = !0))),
        (O = Fl(c, C)),
        0 < O.length &&
          ((C = new sp(C, e, null, r, f)),
          u.push({ event: C, listeners: O }),
          $ ? (C.data = $) : (($ = ay(r)), $ !== null && (C.data = $)))),
        ($ = nb ? ob(e, r) : ib(e, r)) &&
          ((c = Fl(c, "onBeforeInput")),
          0 < c.length &&
            ((f = new sp("onBeforeInput", "beforeinput", null, r, f)),
            u.push({ event: f, listeners: c }),
            (f.data = $)));
    }
    wy(u, t);
  });
}
function oi(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Fl(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Zo(e, r)),
      i != null && n.unshift(oi(e, i, o)),
      (i = Zo(e, t)),
      i != null && n.push(oi(e, i, o))),
      (e = e.return);
  }
  return n;
}
function $n(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function _p(e, t, r, n, o) {
  for (var i = t._reactName, l = []; r !== null && r !== n; ) {
    var a = r,
      s = a.alternate,
      c = a.stateNode;
    if (s !== null && s === n) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      o
        ? ((s = Zo(r, i)), s != null && l.unshift(oi(r, s, a)))
        : o || ((s = Zo(r, i)), s != null && l.push(oi(r, s, a)))),
      (r = r.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var wb = /\r\n?/g,
  _b = /\u0000|\uFFFD/g;
function Sp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      wb,
      `
`
    )
    .replace(_b, "");
}
function Vi(e, t, r) {
  if (((t = Sp(t)), Sp(e) !== t && r)) throw Error(I(425));
}
function Vl() {}
var yu = null,
  wu = null;
function _u(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Su = typeof setTimeout == "function" ? setTimeout : void 0,
  Sb = typeof clearTimeout == "function" ? clearTimeout : void 0,
  xp = typeof Promise == "function" ? Promise : void 0,
  xb =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof xp < "u"
      ? function (e) {
          return xp.resolve(null).then(e).catch(bb);
        }
      : Su;
function bb(e) {
  setTimeout(function () {
    throw e;
  });
}
function _c(e, t) {
  var r = t,
    n = 0;
  do {
    var o = r.nextSibling;
    if ((e.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(o), ei(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = o;
  } while (r);
  ei(t);
}
function zr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function bp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var fo = Math.random().toString(36).slice(2),
  Gt = "__reactFiber$" + fo,
  ii = "__reactProps$" + fo,
  dr = "__reactContainer$" + fo,
  xu = "__reactEvents$" + fo,
  Pb = "__reactListeners$" + fo,
  $b = "__reactHandles$" + fo;
function rn(e) {
  var t = e[Gt];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[dr] || r[Gt])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = bp(e); e !== null; ) {
          if ((r = e[Gt])) return r;
          e = bp(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function wi(e) {
  return (
    (e = e[Gt] || e[dr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Dn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function ds(e) {
  return e[ii] || null;
}
var bu = [],
  jn = -1;
function Xr(e) {
  return { current: e };
}
function fe(e) {
  0 > jn || ((e.current = bu[jn]), (bu[jn] = null), jn--);
}
function ae(e, t) {
  jn++, (bu[jn] = e.current), (e.current = t);
}
var Hr = {},
  Be = Xr(Hr),
  qe = Xr(!1),
  dn = Hr;
function Zn(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Hr;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in r) o[i] = t[i];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function et(e) {
  return (e = e.childContextTypes), e != null;
}
function Hl() {
  fe(qe), fe(Be);
}
function Pp(e, t, r) {
  if (Be.current !== Hr) throw Error(I(168));
  ae(Be, t), ae(qe, r);
}
function Sy(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var o in n) if (!(o in t)) throw Error(I(108, cx(e) || "Unknown", o));
  return ge({}, r, n);
}
function Bl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Hr),
    (dn = Be.current),
    ae(Be, e),
    ae(qe, qe.current),
    !0
  );
}
function $p(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(I(169));
  r
    ? ((e = Sy(e, t, dn)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      fe(qe),
      fe(Be),
      ae(Be, e))
    : fe(qe),
    ae(qe, r);
}
var ir = null,
  ps = !1,
  Sc = !1;
function xy(e) {
  ir === null ? (ir = [e]) : ir.push(e);
}
function Ob(e) {
  (ps = !0), xy(e);
}
function Qr() {
  if (!Sc && ir !== null) {
    Sc = !0;
    var e = 0,
      t = te;
    try {
      var r = ir;
      for (te = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (ir = null), (ps = !1);
    } catch (o) {
      throw (ir !== null && (ir = ir.slice(e + 1)), Yg(_f, Qr), o);
    } finally {
      (te = t), (Sc = !1);
    }
  }
  return null;
}
var Ln = [],
  An = 0,
  Wl = null,
  Ul = 0,
  yt = [],
  wt = 0,
  pn = null,
  ar = 1,
  sr = "";
function qr(e, t) {
  (Ln[An++] = Ul), (Ln[An++] = Wl), (Wl = e), (Ul = t);
}
function by(e, t, r) {
  (yt[wt++] = ar), (yt[wt++] = sr), (yt[wt++] = pn), (pn = e);
  var n = ar;
  e = sr;
  var o = 32 - Dt(n) - 1;
  (n &= ~(1 << o)), (r += 1);
  var i = 32 - Dt(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (n & ((1 << l) - 1)).toString(32)),
      (n >>= l),
      (o -= l),
      (ar = (1 << (32 - Dt(t) + o)) | (r << o) | n),
      (sr = i + e);
  } else (ar = (1 << i) | (r << o) | n), (sr = e);
}
function kf(e) {
  e.return !== null && (qr(e, 1), by(e, 1, 0));
}
function Rf(e) {
  for (; e === Wl; )
    (Wl = Ln[--An]), (Ln[An] = null), (Ul = Ln[--An]), (Ln[An] = null);
  for (; e === pn; )
    (pn = yt[--wt]),
      (yt[wt] = null),
      (sr = yt[--wt]),
      (yt[wt] = null),
      (ar = yt[--wt]),
      (yt[wt] = null);
}
var st = null,
  at = null,
  pe = !1,
  zt = null;
function Py(e, t) {
  var r = St(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function Op(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (st = e), (at = zr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (st = e), (at = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = pn !== null ? { id: ar, overflow: sr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = St(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (st = e),
            (at = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Pu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $u(e) {
  if (pe) {
    var t = at;
    if (t) {
      var r = t;
      if (!Op(e, t)) {
        if (Pu(e)) throw Error(I(418));
        t = zr(r.nextSibling);
        var n = st;
        t && Op(e, t)
          ? Py(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (st = e));
      }
    } else {
      if (Pu(e)) throw Error(I(418));
      (e.flags = (e.flags & -4097) | 2), (pe = !1), (st = e);
    }
  }
}
function Cp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  st = e;
}
function Hi(e) {
  if (e !== st) return !1;
  if (!pe) return Cp(e), (pe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !_u(e.type, e.memoizedProps))),
    t && (t = at))
  ) {
    if (Pu(e)) throw ($y(), Error(I(418)));
    for (; t; ) Py(e, t), (t = zr(t.nextSibling));
  }
  if ((Cp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              at = zr(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      at = null;
    }
  } else at = st ? zr(e.stateNode.nextSibling) : null;
  return !0;
}
function $y() {
  for (var e = at; e; ) e = zr(e.nextSibling);
}
function Jn() {
  (at = st = null), (pe = !1);
}
function Nf(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
var Cb = yr.ReactCurrentBatchConfig;
function Nt(e, t) {
  if (e && e.defaultProps) {
    (t = ge({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var Gl = Xr(null),
  Yl = null,
  Mn = null,
  Tf = null;
function If() {
  Tf = Mn = Yl = null;
}
function zf(e) {
  var t = Gl.current;
  fe(Gl), (e._currentValue = t);
}
function Ou(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function Gn(e, t) {
  (Yl = e),
    (Tf = Mn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (Je = !0), (e.firstContext = null));
}
function Pt(e) {
  var t = e._currentValue;
  if (Tf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Mn === null)) {
      if (Yl === null) throw Error(I(308));
      (Mn = e), (Yl.dependencies = { lanes: 0, firstContext: e });
    } else Mn = Mn.next = e;
  return t;
}
var nn = null;
function Df(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
function Oy(e, t, r, n) {
  var o = t.interleaved;
  return (
    o === null ? ((r.next = r), Df(t)) : ((r.next = o.next), (o.next = r)),
    (t.interleaved = r),
    pr(e, n)
  );
}
function pr(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var $r = !1;
function jf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Cy(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function cr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Dr(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), (K & 2) !== 0)) {
    var o = n.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (n.pending = t),
      pr(e, r)
    );
  }
  return (
    (o = n.interleaved),
    o === null ? ((t.next = t), Df(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    pr(e, r)
  );
}
function hl(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Sf(e, r);
  }
}
function Ep(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var o = null,
      i = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var l = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (r = r.next);
      } while (r !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function Xl(e, t, r, n) {
  var o = e.updateQueue;
  $r = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var s = a,
      c = s.next;
    (s.next = null), l === null ? (i = c) : (l.next = c), (l = s);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== l &&
        (a === null ? (f.firstBaseUpdate = c) : (a.next = c),
        (f.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var u = o.baseState;
    (l = 0), (f = c = s = null), (a = i);
    do {
      var d = a.lane,
        h = a.eventTime;
      if ((n & d) === d) {
        f !== null &&
          (f = f.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            w = a;
          switch (((d = t), (h = r), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                u = y.call(h, u, d);
                break e;
              }
              u = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (d = typeof y == "function" ? y.call(h, u, d) : y),
                d == null)
              )
                break e;
              u = ge({}, u, d);
              break e;
            case 2:
              $r = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [a]) : d.push(a));
      } else
        (h = {
          eventTime: h,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((c = f = h), (s = u)) : (f = f.next = h),
          (l |= d);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (s = u),
      (o.baseState = s),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (vn |= l), (e.lanes = l), (e.memoizedState = u);
  }
}
function kp(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback;
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o != "function"))
          throw Error(I(191, o));
        o.call(n);
      }
    }
}
var Ey = new Og.Component().refs;
function Cu(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : ge({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var ms = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? wn(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = Ye(),
      o = Lr(e),
      i = cr(n, o);
    (i.payload = t),
      r != null && (i.callback = r),
      (t = Dr(e, i, o)),
      t !== null && (jt(t, e, o, n), hl(t, e, o));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = Ye(),
      o = Lr(e),
      i = cr(n, o);
    (i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = Dr(e, i, o)),
      t !== null && (jt(t, e, o, n), hl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = Ye(),
      n = Lr(e),
      o = cr(r, n);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Dr(e, o, n)),
      t !== null && (jt(t, e, n, r), hl(t, e, n));
  },
};
function Rp(e, t, r, n, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ri(r, n) || !ri(o, i)
      : !0
  );
}
function ky(e, t, r) {
  var n = !1,
    o = Hr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Pt(i))
      : ((o = et(t) ? dn : Be.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? Zn(e, o) : Hr)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ms),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Np(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && ms.enqueueReplaceState(t, t.state, null);
}
function Eu(e, t, r, n) {
  var o = e.stateNode;
  (o.props = r), (o.state = e.memoizedState), (o.refs = Ey), jf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Pt(i))
    : ((i = et(t) ? dn : Be.current), (o.context = Zn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Cu(e, t, i, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ms.enqueueReplaceState(o, o.state, null),
      Xl(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function bo(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(I(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(I(147, e));
      var o = n,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var a = o.refs;
            a === Ey && (a = o.refs = {}),
              l === null ? delete a[i] : (a[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!r._owner) throw Error(I(290, e));
  }
  return e;
}
function Bi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      I(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Tp(e) {
  var t = e._init;
  return t(e._payload);
}
function Ry(e) {
  function t(v, p) {
    if (e) {
      var g = v.deletions;
      g === null ? ((v.deletions = [p]), (v.flags |= 16)) : g.push(p);
    }
  }
  function r(v, p) {
    if (!e) return null;
    for (; p !== null; ) t(v, p), (p = p.sibling);
    return null;
  }
  function n(v, p) {
    for (v = new Map(); p !== null; )
      p.key !== null ? v.set(p.key, p) : v.set(p.index, p), (p = p.sibling);
    return v;
  }
  function o(v, p) {
    return (v = Ar(v, p)), (v.index = 0), (v.sibling = null), v;
  }
  function i(v, p, g) {
    return (
      (v.index = g),
      e
        ? ((g = v.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((v.flags |= 2), p) : g)
            : ((v.flags |= 2), p))
        : ((v.flags |= 1048576), p)
    );
  }
  function l(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function a(v, p, g, S) {
    return p === null || p.tag !== 6
      ? ((p = Ec(g, v.mode, S)), (p.return = v), p)
      : ((p = o(p, g)), (p.return = v), p);
  }
  function s(v, p, g, S) {
    var b = g.type;
    return b === Nn
      ? f(v, p, g.props.children, S, g.key)
      : p !== null &&
        (p.elementType === b ||
          (typeof b == "object" &&
            b !== null &&
            b.$$typeof === Pr &&
            Tp(b) === p.type))
      ? ((S = o(p, g.props)), (S.ref = bo(v, p, g)), (S.return = v), S)
      : ((S = xl(g.type, g.key, g.props, null, v.mode, S)),
        (S.ref = bo(v, p, g)),
        (S.return = v),
        S);
  }
  function c(v, p, g, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = kc(g, v.mode, S)), (p.return = v), p)
      : ((p = o(p, g.children || [])), (p.return = v), p);
  }
  function f(v, p, g, S, b) {
    return p === null || p.tag !== 7
      ? ((p = cn(g, v.mode, S, b)), (p.return = v), p)
      : ((p = o(p, g)), (p.return = v), p);
  }
  function u(v, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Ec("" + p, v.mode, g)), (p.return = v), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ti:
          return (
            (g = xl(p.type, p.key, p.props, null, v.mode, g)),
            (g.ref = bo(v, null, p)),
            (g.return = v),
            g
          );
        case Rn:
          return (p = kc(p, v.mode, g)), (p.return = v), p;
        case Pr:
          var S = p._init;
          return u(v, S(p._payload), g);
      }
      if (Io(p) || yo(p))
        return (p = cn(p, v.mode, g, null)), (p.return = v), p;
      Bi(v, p);
    }
    return null;
  }
  function d(v, p, g, S) {
    var b = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return b !== null ? null : a(v, p, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ti:
          return g.key === b ? s(v, p, g, S) : null;
        case Rn:
          return g.key === b ? c(v, p, g, S) : null;
        case Pr:
          return (b = g._init), d(v, p, b(g._payload), S);
      }
      if (Io(g) || yo(g)) return b !== null ? null : f(v, p, g, S, null);
      Bi(v, g);
    }
    return null;
  }
  function h(v, p, g, S, b) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (v = v.get(g) || null), a(p, v, "" + S, b);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ti:
          return (v = v.get(S.key === null ? g : S.key) || null), s(p, v, S, b);
        case Rn:
          return (v = v.get(S.key === null ? g : S.key) || null), c(p, v, S, b);
        case Pr:
          var O = S._init;
          return h(v, p, g, O(S._payload), b);
      }
      if (Io(S) || yo(S)) return (v = v.get(g) || null), f(p, v, S, b, null);
      Bi(p, S);
    }
    return null;
  }
  function y(v, p, g, S) {
    for (
      var b = null, O = null, $ = p, C = (p = 0), R = null;
      $ !== null && C < g.length;
      C++
    ) {
      $.index > C ? ((R = $), ($ = null)) : (R = $.sibling);
      var E = d(v, $, g[C], S);
      if (E === null) {
        $ === null && ($ = R);
        break;
      }
      e && $ && E.alternate === null && t(v, $),
        (p = i(E, p, C)),
        O === null ? (b = E) : (O.sibling = E),
        (O = E),
        ($ = R);
    }
    if (C === g.length) return r(v, $), pe && qr(v, C), b;
    if ($ === null) {
      for (; C < g.length; C++)
        ($ = u(v, g[C], S)),
          $ !== null &&
            ((p = i($, p, C)), O === null ? (b = $) : (O.sibling = $), (O = $));
      return pe && qr(v, C), b;
    }
    for ($ = n(v, $); C < g.length; C++)
      (R = h($, v, C, g[C], S)),
        R !== null &&
          (e && R.alternate !== null && $.delete(R.key === null ? C : R.key),
          (p = i(R, p, C)),
          O === null ? (b = R) : (O.sibling = R),
          (O = R));
    return (
      e &&
        $.forEach(function (z) {
          return t(v, z);
        }),
      pe && qr(v, C),
      b
    );
  }
  function w(v, p, g, S) {
    var b = yo(g);
    if (typeof b != "function") throw Error(I(150));
    if (((g = b.call(g)), g == null)) throw Error(I(151));
    for (
      var O = (b = null), $ = p, C = (p = 0), R = null, E = g.next();
      $ !== null && !E.done;
      C++, E = g.next()
    ) {
      $.index > C ? ((R = $), ($ = null)) : (R = $.sibling);
      var z = d(v, $, E.value, S);
      if (z === null) {
        $ === null && ($ = R);
        break;
      }
      e && $ && z.alternate === null && t(v, $),
        (p = i(z, p, C)),
        O === null ? (b = z) : (O.sibling = z),
        (O = z),
        ($ = R);
    }
    if (E.done) return r(v, $), pe && qr(v, C), b;
    if ($ === null) {
      for (; !E.done; C++, E = g.next())
        (E = u(v, E.value, S)),
          E !== null &&
            ((p = i(E, p, C)), O === null ? (b = E) : (O.sibling = E), (O = E));
      return pe && qr(v, C), b;
    }
    for ($ = n(v, $); !E.done; C++, E = g.next())
      (E = h($, v, C, E.value, S)),
        E !== null &&
          (e && E.alternate !== null && $.delete(E.key === null ? C : E.key),
          (p = i(E, p, C)),
          O === null ? (b = E) : (O.sibling = E),
          (O = E));
    return (
      e &&
        $.forEach(function (M) {
          return t(v, M);
        }),
      pe && qr(v, C),
      b
    );
  }
  function P(v, p, g, S) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Nn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Ti:
          e: {
            for (var b = g.key, O = p; O !== null; ) {
              if (O.key === b) {
                if (((b = g.type), b === Nn)) {
                  if (O.tag === 7) {
                    r(v, O.sibling),
                      (p = o(O, g.props.children)),
                      (p.return = v),
                      (v = p);
                    break e;
                  }
                } else if (
                  O.elementType === b ||
                  (typeof b == "object" &&
                    b !== null &&
                    b.$$typeof === Pr &&
                    Tp(b) === O.type)
                ) {
                  r(v, O.sibling),
                    (p = o(O, g.props)),
                    (p.ref = bo(v, O, g)),
                    (p.return = v),
                    (v = p);
                  break e;
                }
                r(v, O);
                break;
              } else t(v, O);
              O = O.sibling;
            }
            g.type === Nn
              ? ((p = cn(g.props.children, v.mode, S, g.key)),
                (p.return = v),
                (v = p))
              : ((S = xl(g.type, g.key, g.props, null, v.mode, S)),
                (S.ref = bo(v, p, g)),
                (S.return = v),
                (v = S));
          }
          return l(v);
        case Rn:
          e: {
            for (O = g.key; p !== null; ) {
              if (p.key === O)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  r(v, p.sibling),
                    (p = o(p, g.children || [])),
                    (p.return = v),
                    (v = p);
                  break e;
                } else {
                  r(v, p);
                  break;
                }
              else t(v, p);
              p = p.sibling;
            }
            (p = kc(g, v.mode, S)), (p.return = v), (v = p);
          }
          return l(v);
        case Pr:
          return (O = g._init), P(v, p, O(g._payload), S);
      }
      if (Io(g)) return y(v, p, g, S);
      if (yo(g)) return w(v, p, g, S);
      Bi(v, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (r(v, p.sibling), (p = o(p, g)), (p.return = v), (v = p))
          : (r(v, p), (p = Ec(g, v.mode, S)), (p.return = v), (v = p)),
        l(v))
      : r(v, p);
  }
  return P;
}
var qn = Ry(!0),
  Ny = Ry(!1),
  _i = {},
  Kt = Xr(_i),
  li = Xr(_i),
  ai = Xr(_i);
function on(e) {
  if (e === _i) throw Error(I(174));
  return e;
}
function Lf(e, t) {
  switch ((ae(ai, t), ae(li, e), ae(Kt, _i), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : lu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = lu(t, e));
  }
  fe(Kt), ae(Kt, t);
}
function eo() {
  fe(Kt), fe(li), fe(ai);
}
function Ty(e) {
  on(ai.current);
  var t = on(Kt.current),
    r = lu(t, e.type);
  t !== r && (ae(li, e), ae(Kt, r));
}
function Af(e) {
  li.current === e && (fe(Kt), fe(li));
}
var ve = Xr(0);
function Ql(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var xc = [];
function Mf() {
  for (var e = 0; e < xc.length; e++)
    xc[e]._workInProgressVersionPrimary = null;
  xc.length = 0;
}
var gl = yr.ReactCurrentDispatcher,
  bc = yr.ReactCurrentBatchConfig,
  mn = 0,
  he = null,
  Oe = null,
  ke = null,
  Kl = !1,
  Ho = !1,
  si = 0,
  Eb = 0;
function Le() {
  throw Error(I(321));
}
function Ff(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Lt(e[r], t[r])) return !1;
  return !0;
}
function Vf(e, t, r, n, o, i) {
  if (
    ((mn = i),
    (he = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (gl.current = e === null || e.memoizedState === null ? Tb : Ib),
    (e = r(n, o)),
    Ho)
  ) {
    i = 0;
    do {
      if (((Ho = !1), (si = 0), 25 <= i)) throw Error(I(301));
      (i += 1),
        (ke = Oe = null),
        (t.updateQueue = null),
        (gl.current = zb),
        (e = r(n, o));
    } while (Ho);
  }
  if (
    ((gl.current = Zl),
    (t = Oe !== null && Oe.next !== null),
    (mn = 0),
    (ke = Oe = he = null),
    (Kl = !1),
    t)
  )
    throw Error(I(300));
  return e;
}
function Hf() {
  var e = si !== 0;
  return (si = 0), e;
}
function Bt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (he.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function $t() {
  if (Oe === null) {
    var e = he.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Oe.next;
  var t = ke === null ? he.memoizedState : ke.next;
  if (t !== null) (ke = t), (Oe = e);
  else {
    if (e === null) throw Error(I(310));
    (Oe = e),
      (e = {
        memoizedState: Oe.memoizedState,
        baseState: Oe.baseState,
        baseQueue: Oe.baseQueue,
        queue: Oe.queue,
        next: null,
      }),
      ke === null ? (he.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function ci(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Pc(e) {
  var t = $t(),
    r = t.queue;
  if (r === null) throw Error(I(311));
  r.lastRenderedReducer = e;
  var n = Oe,
    o = n.baseQueue,
    i = r.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (n.baseQueue = o = i), (r.pending = null);
  }
  if (o !== null) {
    (i = o.next), (n = n.baseState);
    var a = (l = null),
      s = null,
      c = i;
    do {
      var f = c.lane;
      if ((mn & f) === f)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (n = c.hasEagerState ? c.eagerState : e(n, c.action));
      else {
        var u = {
          lane: f,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((a = s = u), (l = n)) : (s = s.next = u),
          (he.lanes |= f),
          (vn |= f);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (l = n) : (s.next = a),
      Lt(n, t.memoizedState) || (Je = !0),
      (t.memoizedState = n),
      (t.baseState = l),
      (t.baseQueue = s),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (he.lanes |= i), (vn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function $c(e) {
  var t = $t(),
    r = t.queue;
  if (r === null) throw Error(I(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    o = r.pending,
    i = t.memoizedState;
  if (o !== null) {
    r.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    Lt(i, t.memoizedState) || (Je = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i);
  }
  return [i, n];
}
function Iy() {}
function zy(e, t) {
  var r = he,
    n = $t(),
    o = t(),
    i = !Lt(n.memoizedState, o);
  if (
    (i && ((n.memoizedState = o), (Je = !0)),
    (n = n.queue),
    Bf(Ly.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      ui(9, jy.bind(null, r, n, o, t), void 0, null),
      Re === null)
    )
      throw Error(I(349));
    (mn & 30) !== 0 || Dy(r, t, o);
  }
  return o;
}
function Dy(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function jy(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), Ay(t) && My(e);
}
function Ly(e, t, r) {
  return r(function () {
    Ay(t) && My(e);
  });
}
function Ay(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Lt(e, r);
  } catch {
    return !0;
  }
}
function My(e) {
  var t = pr(e, 1);
  t !== null && jt(t, e, 1, -1);
}
function Ip(e) {
  var t = Bt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ci,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Nb.bind(null, he, e)),
    [t.memoizedState, e]
  );
}
function ui(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function Fy() {
  return $t().memoizedState;
}
function yl(e, t, r, n) {
  var o = Bt();
  (he.flags |= e),
    (o.memoizedState = ui(1 | t, r, void 0, n === void 0 ? null : n));
}
function vs(e, t, r, n) {
  var o = $t();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (Oe !== null) {
    var l = Oe.memoizedState;
    if (((i = l.destroy), n !== null && Ff(n, l.deps))) {
      o.memoizedState = ui(t, r, i, n);
      return;
    }
  }
  (he.flags |= e), (o.memoizedState = ui(1 | t, r, i, n));
}
function zp(e, t) {
  return yl(8390656, 8, e, t);
}
function Bf(e, t) {
  return vs(2048, 8, e, t);
}
function Vy(e, t) {
  return vs(4, 2, e, t);
}
function Hy(e, t) {
  return vs(4, 4, e, t);
}
function By(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Wy(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), vs(4, 4, By.bind(null, t, e), r)
  );
}
function Wf() {}
function Uy(e, t) {
  var r = $t();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Ff(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function Gy(e, t) {
  var r = $t();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Ff(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function Yy(e, t, r) {
  return (mn & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (Je = !0)), (e.memoizedState = r))
    : (Lt(r, t) || ((r = Kg()), (he.lanes |= r), (vn |= r), (e.baseState = !0)),
      t);
}
function kb(e, t) {
  var r = te;
  (te = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = bc.transition;
  bc.transition = {};
  try {
    e(!1), t();
  } finally {
    (te = r), (bc.transition = n);
  }
}
function Xy() {
  return $t().memoizedState;
}
function Rb(e, t, r) {
  var n = Lr(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Qy(e))
  )
    Ky(t, r);
  else if (((r = Oy(e, t, r, n)), r !== null)) {
    var o = Ye();
    jt(r, e, n, o), Zy(r, t, n);
  }
}
function Nb(e, t, r) {
  var n = Lr(e),
    o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Qy(e)) Ky(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = i(l, r);
        if (((o.hasEagerState = !0), (o.eagerState = a), Lt(a, l))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), Df(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (r = Oy(e, t, o, n)),
      r !== null && ((o = Ye()), jt(r, e, n, o), Zy(r, t, n));
  }
}
function Qy(e) {
  var t = e.alternate;
  return e === he || (t !== null && t === he);
}
function Ky(e, t) {
  Ho = Kl = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function Zy(e, t, r) {
  if ((r & 4194240) !== 0) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Sf(e, r);
  }
}
var Zl = {
    readContext: Pt,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useInsertionEffect: Le,
    useLayoutEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useMutableSource: Le,
    useSyncExternalStore: Le,
    useId: Le,
    unstable_isNewReconciler: !1,
  },
  Tb = {
    readContext: Pt,
    useCallback: function (e, t) {
      return (Bt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Pt,
    useEffect: zp,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        yl(4194308, 4, By.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return yl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return yl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = Bt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = Bt();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = Rb.bind(null, he, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Bt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ip,
    useDebugValue: Wf,
    useDeferredValue: function (e) {
      return (Bt().memoizedState = e);
    },
    useTransition: function () {
      var e = Ip(!1),
        t = e[0];
      return (e = kb.bind(null, e[1])), (Bt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = he,
        o = Bt();
      if (pe) {
        if (r === void 0) throw Error(I(407));
        r = r();
      } else {
        if (((r = t()), Re === null)) throw Error(I(349));
        (mn & 30) !== 0 || Dy(n, t, r);
      }
      o.memoizedState = r;
      var i = { value: r, getSnapshot: t };
      return (
        (o.queue = i),
        zp(Ly.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        ui(9, jy.bind(null, n, i, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = Bt(),
        t = Re.identifierPrefix;
      if (pe) {
        var r = sr,
          n = ar;
        (r = (n & ~(1 << (32 - Dt(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = si++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = Eb++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ib = {
    readContext: Pt,
    useCallback: Uy,
    useContext: Pt,
    useEffect: Bf,
    useImperativeHandle: Wy,
    useInsertionEffect: Vy,
    useLayoutEffect: Hy,
    useMemo: Gy,
    useReducer: Pc,
    useRef: Fy,
    useState: function () {
      return Pc(ci);
    },
    useDebugValue: Wf,
    useDeferredValue: function (e) {
      var t = $t();
      return Yy(t, Oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Pc(ci)[0],
        t = $t().memoizedState;
      return [e, t];
    },
    useMutableSource: Iy,
    useSyncExternalStore: zy,
    useId: Xy,
    unstable_isNewReconciler: !1,
  },
  zb = {
    readContext: Pt,
    useCallback: Uy,
    useContext: Pt,
    useEffect: Bf,
    useImperativeHandle: Wy,
    useInsertionEffect: Vy,
    useLayoutEffect: Hy,
    useMemo: Gy,
    useReducer: $c,
    useRef: Fy,
    useState: function () {
      return $c(ci);
    },
    useDebugValue: Wf,
    useDeferredValue: function (e) {
      var t = $t();
      return Oe === null ? (t.memoizedState = e) : Yy(t, Oe.memoizedState, e);
    },
    useTransition: function () {
      var e = $c(ci)[0],
        t = $t().memoizedState;
      return [e, t];
    },
    useMutableSource: Iy,
    useSyncExternalStore: zy,
    useId: Xy,
    unstable_isNewReconciler: !1,
  };
function to(e, t) {
  try {
    var r = "",
      n = t;
    do (r += sx(n)), (n = n.return);
    while (n);
    var o = r;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Oc(e, t, r) {
  return {
    value: e,
    source: null,
    stack: r != null ? r : null,
    digest: t != null ? t : null,
  };
}
function ku(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var Db = typeof WeakMap == "function" ? WeakMap : Map;
function Jy(e, t, r) {
  (r = cr(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      ql || ((ql = !0), (Mu = n)), ku(e, t);
    }),
    r
  );
}
function qy(e, t, r) {
  (r = cr(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    (r.payload = function () {
      return n(o);
    }),
      (r.callback = function () {
        ku(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (r.callback = function () {
        ku(e, t),
          typeof n != "function" &&
            (jr === null ? (jr = new Set([this])) : jr.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    r
  );
}
function Dp(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new Db();
    var o = new Set();
    n.set(t, o);
  } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o));
  o.has(r) || (o.add(r), (e = Qb.bind(null, e, t, r)), t.then(e, e));
}
function jp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Lp(e, t, r, n, o) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = cr(-1, 1)), (t.tag = 2), Dr(r, t, 1))),
          (r.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = o), e);
}
var jb = yr.ReactCurrentOwner,
  Je = !1;
function Ge(e, t, r, n) {
  t.child = e === null ? Ny(t, null, r, n) : qn(t, e.child, r, n);
}
function Ap(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return (
    Gn(t, o),
    (n = Vf(e, t, r, n, i, o)),
    (r = Hf()),
    e !== null && !Je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        mr(e, t, o))
      : (pe && r && kf(t), (t.flags |= 1), Ge(e, t, n, o), t.child)
  );
}
function Mp(e, t, r, n, o) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" &&
      !Jf(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), e0(e, t, i, n, o))
      : ((e = xl(r.type, null, n, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), (e.lanes & o) === 0)) {
    var l = i.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : ri), r(l, n) && e.ref === t.ref)
    )
      return mr(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Ar(i, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function e0(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ri(i, n) && e.ref === t.ref)
      if (((Je = !1), (t.pendingProps = n = i), (e.lanes & o) !== 0))
        (e.flags & 131072) !== 0 && (Je = !0);
      else return (t.lanes = e.lanes), mr(e, t, o);
  }
  return Ru(e, t, r, n, o);
}
function t0(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ae(Vn, lt),
        (lt |= r);
    else {
      if ((r & 1073741824) === 0)
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ae(Vn, lt),
          (lt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        ae(Vn, lt),
        (lt |= n);
    }
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r),
      ae(Vn, lt),
      (lt |= n);
  return Ge(e, t, o, r), t.child;
}
function r0(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ru(e, t, r, n, o) {
  var i = et(r) ? dn : Be.current;
  return (
    (i = Zn(t, i)),
    Gn(t, o),
    (r = Vf(e, t, r, n, i, o)),
    (n = Hf()),
    e !== null && !Je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        mr(e, t, o))
      : (pe && n && kf(t), (t.flags |= 1), Ge(e, t, r, o), t.child)
  );
}
function Fp(e, t, r, n, o) {
  if (et(r)) {
    var i = !0;
    Bl(t);
  } else i = !1;
  if ((Gn(t, o), t.stateNode === null))
    wl(e, t), ky(t, r, n), Eu(t, r, n, o), (n = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var s = l.context,
      c = r.contextType;
    typeof c == "object" && c !== null
      ? (c = Pt(c))
      : ((c = et(r) ? dn : Be.current), (c = Zn(t, c)));
    var f = r.getDerivedStateFromProps,
      u =
        typeof f == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    u ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== n || s !== c) && Np(t, l, n, c)),
      ($r = !1);
    var d = t.memoizedState;
    (l.state = d),
      Xl(t, n, l, o),
      (s = t.memoizedState),
      a !== n || d !== s || qe.current || $r
        ? (typeof f == "function" && (Cu(t, r, f, n), (s = t.memoizedState)),
          (a = $r || Rp(t, r, a, n, d, s, c))
            ? (u ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = s)),
          (l.props = n),
          (l.state = s),
          (l.context = c),
          (n = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (l = t.stateNode),
      Cy(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : Nt(t.type, a)),
      (l.props = c),
      (u = t.pendingProps),
      (d = l.context),
      (s = r.contextType),
      typeof s == "object" && s !== null
        ? (s = Pt(s))
        : ((s = et(r) ? dn : Be.current), (s = Zn(t, s)));
    var h = r.getDerivedStateFromProps;
    (f =
      typeof h == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== u || d !== s) && Np(t, l, n, s)),
      ($r = !1),
      (d = t.memoizedState),
      (l.state = d),
      Xl(t, n, l, o);
    var y = t.memoizedState;
    a !== u || d !== y || qe.current || $r
      ? (typeof h == "function" && (Cu(t, r, h, n), (y = t.memoizedState)),
        (c = $r || Rp(t, r, c, n, d, y, s) || !1)
          ? (f ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(n, y, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(n, y, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = y)),
        (l.props = n),
        (l.state = y),
        (l.context = s),
        (n = c))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return Nu(e, t, r, n, i, o);
}
function Nu(e, t, r, n, o, i) {
  r0(e, t);
  var l = (t.flags & 128) !== 0;
  if (!n && !l) return o && $p(t, r, !1), mr(e, t, i);
  (n = t.stateNode), (jb.current = t);
  var a =
    l && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = qn(t, e.child, null, i)), (t.child = qn(t, null, a, i)))
      : Ge(e, t, a, i),
    (t.memoizedState = n.state),
    o && $p(t, r, !0),
    t.child
  );
}
function n0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Pp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Pp(e, t.context, !1),
    Lf(e, t.containerInfo);
}
function Vp(e, t, r, n, o) {
  return Jn(), Nf(o), (t.flags |= 256), Ge(e, t, r, n), t.child;
}
var Tu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Iu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function o0(e, t, r) {
  var n = t.pendingProps,
    o = ve.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ae(ve, o & 1),
    e === null)
  )
    return (
      $u(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((l = n.children),
          (e = n.fallback),
          i
            ? ((n = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              (n & 1) === 0 && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = ys(l, n, 0, null)),
              (e = cn(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Iu(r)),
              (t.memoizedState = Tu),
              e)
            : Uf(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return Lb(e, t, l, n, a, o, r);
  if (i) {
    (i = n.fallback), (l = t.mode), (o = e.child), (a = o.sibling);
    var s = { mode: "hidden", children: n.children };
    return (
      (l & 1) === 0 && t.child !== o
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = s),
          (t.deletions = null))
        : ((n = Ar(o, s)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Ar(a, i)) : ((i = cn(i, l, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Iu(r)
          : {
              baseLanes: l.baseLanes | r,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = Tu),
      n
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = Ar(i, { mode: "visible", children: n.children })),
    (t.mode & 1) === 0 && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function Uf(e, t) {
  return (
    (t = ys({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Wi(e, t, r, n) {
  return (
    n !== null && Nf(n),
    qn(t, e.child, null, r),
    (e = Uf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Lb(e, t, r, n, o, i, l) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = Oc(Error(I(422)))), Wi(e, t, l, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = n.fallback),
        (o = t.mode),
        (n = ys({ mode: "visible", children: n.children }, o, 0, null)),
        (i = cn(i, o, l, null)),
        (i.flags |= 2),
        (n.return = t),
        (i.return = t),
        (n.sibling = i),
        (t.child = n),
        (t.mode & 1) !== 0 && qn(t, e.child, null, l),
        (t.child.memoizedState = Iu(l)),
        (t.memoizedState = Tu),
        i);
  if ((t.mode & 1) === 0) return Wi(e, t, l, null);
  if (o.data === "$!") {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var a = n.dgst;
    return (n = a), (i = Error(I(419))), (n = Oc(i, n, void 0)), Wi(e, t, l, n);
  }
  if (((a = (l & e.childLanes) !== 0), Je || a)) {
    if (((n = Re), n !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = (o & (n.suspendedLanes | l)) !== 0 ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), pr(e, o), jt(n, e, o, -1));
    }
    return Zf(), (n = Oc(Error(I(421)))), Wi(e, t, l, n);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Kb.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (at = zr(o.nextSibling)),
      (st = t),
      (pe = !0),
      (zt = null),
      e !== null &&
        ((yt[wt++] = ar),
        (yt[wt++] = sr),
        (yt[wt++] = pn),
        (ar = e.id),
        (sr = e.overflow),
        (pn = t)),
      (t = Uf(t, n.children)),
      (t.flags |= 4096),
      t);
}
function Hp(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Ou(e.return, t, r);
}
function Cc(e, t, r, n, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = r),
      (i.tailMode = o));
}
function i0(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    i = n.tail;
  if ((Ge(e, t, n.children, r), (n = ve.current), (n & 2) !== 0))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Hp(e, r, t);
        else if (e.tag === 19) Hp(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((ae(ve, n), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          (e = r.alternate),
            e !== null && Ql(e) === null && (o = r),
            (r = r.sibling);
        (r = o),
          r === null
            ? ((o = t.child), (t.child = null))
            : ((o = r.sibling), (r.sibling = null)),
          Cc(t, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ql(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = r), (r = o), (o = e);
        }
        Cc(t, !0, r, null, i);
        break;
      case "together":
        Cc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function wl(e, t) {
  (t.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function mr(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (vn |= t.lanes),
    (r & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (
      e = t.child, r = Ar(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = Ar(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function Ab(e, t, r) {
  switch (t.tag) {
    case 3:
      n0(t), Jn();
      break;
    case 5:
      Ty(t);
      break;
    case 1:
      et(t.type) && Bl(t);
      break;
    case 4:
      Lf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value;
      ae(Gl, n._currentValue), (n._currentValue = o);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (ae(ve, ve.current & 1), (t.flags |= 128), null)
          : (r & t.child.childLanes) !== 0
          ? o0(e, t, r)
          : (ae(ve, ve.current & 1),
            (e = mr(e, t, r)),
            e !== null ? e.sibling : null);
      ae(ve, ve.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (n) return i0(e, t, r);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ae(ve, ve.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), t0(e, t, r);
  }
  return mr(e, t, r);
}
var l0, zu, a0, s0;
l0 = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
zu = function () {};
a0 = function (e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    (e = t.stateNode), on(Kt.current);
    var i = null;
    switch (r) {
      case "input":
        (o = ru(e, o)), (n = ru(e, n)), (i = []);
        break;
      case "select":
        (o = ge({}, o, { value: void 0 })),
          (n = ge({}, n, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = iu(e, o)), (n = iu(e, n)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = Vl);
    }
    au(r, n);
    var l;
    r = null;
    for (c in o)
      if (!n.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var a = o[c];
          for (l in a) a.hasOwnProperty(l) && (r || (r = {}), (r[l] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Qo.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in n) {
      var s = n[c];
      if (
        ((a = o != null ? o[c] : void 0),
        n.hasOwnProperty(c) && s !== a && (s != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (r || (r = {}), (r[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                a[l] !== s[l] &&
                (r || (r = {}), (r[l] = s[l]));
          } else r || (i || (i = []), i.push(c, r)), (r = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Qo.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && ue("scroll", e),
                  i || a === s || (i = []))
                : (i = i || []).push(c, s));
    }
    r && (i = i || []).push("style", r);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
s0 = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Po(e, t) {
  if (!pe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function Ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags & 14680064),
        (n |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags),
        (n |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function Mb(e, t, r) {
  var n = t.pendingProps;
  switch ((Rf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ae(t), null;
    case 1:
      return et(t.type) && Hl(), Ae(t), null;
    case 3:
      return (
        (n = t.stateNode),
        eo(),
        fe(qe),
        fe(Be),
        Mf(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Hi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), zt !== null && (Hu(zt), (zt = null)))),
        zu(e, t),
        Ae(t),
        null
      );
    case 5:
      Af(t);
      var o = on(ai.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        a0(e, t, r, n, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(I(166));
          return Ae(t), null;
        }
        if (((e = on(Kt.current)), Hi(t))) {
          (n = t.stateNode), (r = t.type);
          var i = t.memoizedProps;
          switch (((n[Gt] = t), (n[ii] = i), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              ue("cancel", n), ue("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              ue("load", n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Do.length; o++) ue(Do[o], n);
              break;
            case "source":
              ue("error", n);
              break;
            case "img":
            case "image":
            case "link":
              ue("error", n), ue("load", n);
              break;
            case "details":
              ue("toggle", n);
              break;
            case "input":
              Zd(n, i), ue("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!i.multiple }),
                ue("invalid", n);
              break;
            case "textarea":
              qd(n, i), ue("invalid", n);
          }
          au(r, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children"
                ? typeof a == "string"
                  ? n.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Vi(n.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    n.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Vi(n.textContent, a, e),
                    (o = ["children", "" + a]))
                : Qo.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  ue("scroll", n);
            }
          switch (r) {
            case "input":
              Ii(n), Jd(n, i, !0);
              break;
            case "textarea":
              Ii(n), ep(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = Vl);
          }
          (n = o), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Dg(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = l.createElement(r, { is: n.is }))
                : ((e = l.createElement(r)),
                  r === "select" &&
                    ((l = e),
                    n.multiple
                      ? (l.multiple = !0)
                      : n.size && (l.size = n.size)))
              : (e = l.createElementNS(e, r)),
            (e[Gt] = t),
            (e[ii] = n),
            l0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = su(r, n)), r)) {
              case "dialog":
                ue("cancel", e), ue("close", e), (o = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                ue("load", e), (o = n);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Do.length; o++) ue(Do[o], e);
                o = n;
                break;
              case "source":
                ue("error", e), (o = n);
                break;
              case "img":
              case "image":
              case "link":
                ue("error", e), ue("load", e), (o = n);
                break;
              case "details":
                ue("toggle", e), (o = n);
                break;
              case "input":
                Zd(e, n), (o = ru(e, n)), ue("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (o = ge({}, n, { value: void 0 })),
                  ue("invalid", e);
                break;
              case "textarea":
                qd(e, n), (o = iu(e, n)), ue("invalid", e);
                break;
              default:
                o = n;
            }
            au(r, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style"
                  ? Ag(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && jg(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (r !== "textarea" || s !== "") && Ko(e, s)
                    : typeof s == "number" && Ko(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Qo.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && ue("scroll", e)
                      : s != null && vf(e, i, s, l));
              }
            switch (r) {
              case "input":
                Ii(e), Jd(e, n, !1);
                break;
              case "textarea":
                Ii(e), ep(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Vr(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? Hn(e, !!n.multiple, i, !1)
                    : n.defaultValue != null &&
                      Hn(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Vl);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ae(t), null;
    case 6:
      if (e && t.stateNode != null) s0(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(I(166));
        if (((r = on(ai.current)), on(Kt.current), Hi(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[Gt] = t),
            (i = n.nodeValue !== r) && ((e = st), e !== null))
          )
            switch (e.tag) {
              case 3:
                Vi(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Vi(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[Gt] = t),
            (t.stateNode = n);
      }
      return Ae(t), null;
    case 13:
      if (
        (fe(ve),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (pe && at !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          $y(), Jn(), (t.flags |= 98560), (i = !1);
        else if (((i = Hi(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(I(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(I(317));
            i[Gt] = t;
          } else
            Jn(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4);
          Ae(t), (i = !1);
        } else zt !== null && (Hu(zt), (zt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            (t.mode & 1) !== 0 &&
              (e === null || (ve.current & 1) !== 0
                ? Ce === 0 && (Ce = 3)
                : Zf())),
          t.updateQueue !== null && (t.flags |= 4),
          Ae(t),
          null);
    case 4:
      return (
        eo(), zu(e, t), e === null && ni(t.stateNode.containerInfo), Ae(t), null
      );
    case 10:
      return zf(t.type._context), Ae(t), null;
    case 17:
      return et(t.type) && Hl(), Ae(t), null;
    case 19:
      if ((fe(ve), (i = t.memoizedState), i === null)) return Ae(t), null;
      if (((n = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (n) Po(i, !1);
        else {
          if (Ce !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((l = Ql(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Po(i, !1),
                    n = l.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (i = r),
                    (e = n),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return ae(ve, (ve.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Se() > ro &&
            ((t.flags |= 128), (n = !0), Po(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Ql(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Po(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !pe)
            )
              return Ae(t), null;
          } else
            2 * Se() - i.renderingStartTime > ro &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Po(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((r = i.last),
            r !== null ? (r.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Se()),
          (t.sibling = null),
          (r = ve.current),
          ae(ve, n ? (r & 1) | 2 : r & 1),
          t)
        : (Ae(t), null);
    case 22:
    case 23:
      return (
        Kf(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && (t.mode & 1) !== 0
          ? (lt & 1073741824) !== 0 &&
            (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ae(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function Fb(e, t) {
  switch ((Rf(t), t.tag)) {
    case 1:
      return (
        et(t.type) && Hl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        eo(),
        fe(qe),
        fe(Be),
        Mf(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return Af(t), null;
    case 13:
      if (
        (fe(ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(I(340));
        Jn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return fe(ve), null;
    case 4:
      return eo(), null;
    case 10:
      return zf(t.type._context), null;
    case 22:
    case 23:
      return Kf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ui = !1,
  Fe = !1,
  Vb = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function Fn(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        we(e, t, n);
      }
    else r.current = null;
}
function Du(e, t, r) {
  try {
    r();
  } catch (n) {
    we(e, t, n);
  }
}
var Bp = !1;
function Hb(e, t) {
  if (((yu = Al), (e = dy()), Ef(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var o = n.anchorOffset,
            i = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch {
            r = null;
            break e;
          }
          var l = 0,
            a = -1,
            s = -1,
            c = 0,
            f = 0,
            u = e,
            d = null;
          t: for (;;) {
            for (
              var h;
              u !== r || (o !== 0 && u.nodeType !== 3) || (a = l + o),
                u !== i || (n !== 0 && u.nodeType !== 3) || (s = l + n),
                u.nodeType === 3 && (l += u.nodeValue.length),
                (h = u.firstChild) !== null;

            )
              (d = u), (u = h);
            for (;;) {
              if (u === e) break t;
              if (
                (d === r && ++c === o && (a = l),
                d === i && ++f === n && (s = l),
                (h = u.nextSibling) !== null)
              )
                break;
              (u = d), (d = u.parentNode);
            }
            u = h;
          }
          r = a === -1 || s === -1 ? null : { start: a, end: s };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (wu = { focusedElem: e, selectionRange: r }, Al = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var y = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    P = y.memoizedState,
                    v = t.stateNode,
                    p = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Nt(t.type, w),
                      P
                    );
                  v.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(I(163));
            }
        } catch (S) {
          we(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (y = Bp), (Bp = !1), y;
}
function Bo(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Du(t, r, i);
      }
      o = o.next;
    } while (o !== n);
  }
}
function hs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function ju(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function c0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), c0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Gt], delete t[ii], delete t[xu], delete t[Pb], delete t[$b])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function u0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || u0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Lu(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = Vl));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Lu(e, t, r), e = e.sibling; e !== null; ) Lu(e, t, r), (e = e.sibling);
}
function Au(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Au(e, t, r), e = e.sibling; e !== null; ) Au(e, t, r), (e = e.sibling);
}
var Ie = null,
  Tt = !1;
function Sr(e, t, r) {
  for (r = r.child; r !== null; ) f0(e, t, r), (r = r.sibling);
}
function f0(e, t, r) {
  if (Qt && typeof Qt.onCommitFiberUnmount == "function")
    try {
      Qt.onCommitFiberUnmount(ss, r);
    } catch {}
  switch (r.tag) {
    case 5:
      Fe || Fn(r, t);
    case 6:
      var n = Ie,
        o = Tt;
      (Ie = null),
        Sr(e, t, r),
        (Ie = n),
        (Tt = o),
        Ie !== null &&
          (Tt
            ? ((e = Ie),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Ie.removeChild(r.stateNode));
      break;
    case 18:
      Ie !== null &&
        (Tt
          ? ((e = Ie),
            (r = r.stateNode),
            e.nodeType === 8
              ? _c(e.parentNode, r)
              : e.nodeType === 1 && _c(e, r),
            ei(e))
          : _c(Ie, r.stateNode));
      break;
    case 4:
      (n = Ie),
        (o = Tt),
        (Ie = r.stateNode.containerInfo),
        (Tt = !0),
        Sr(e, t, r),
        (Ie = n),
        (Tt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Fe &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        o = n = n.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Du(r, t, l),
            (o = o.next);
        } while (o !== n);
      }
      Sr(e, t, r);
      break;
    case 1:
      if (
        !Fe &&
        (Fn(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (a) {
          we(r, t, a);
        }
      Sr(e, t, r);
      break;
    case 21:
      Sr(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((Fe = (n = Fe) || r.memoizedState !== null), Sr(e, t, r), (Fe = n))
        : Sr(e, t, r);
      break;
    default:
      Sr(e, t, r);
  }
}
function Up(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new Vb()),
      t.forEach(function (n) {
        var o = Zb.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(o, o));
      });
  }
}
function Rt(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      try {
        var i = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ie = a.stateNode), (Tt = !1);
              break e;
            case 3:
              (Ie = a.stateNode.containerInfo), (Tt = !0);
              break e;
            case 4:
              (Ie = a.stateNode.containerInfo), (Tt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ie === null) throw Error(I(160));
        f0(i, l, o), (Ie = null), (Tt = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (c) {
        we(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) d0(t, e), (t = t.sibling);
}
function d0(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Rt(t, e), Vt(e), n & 4)) {
        try {
          Bo(3, e, e.return), hs(3, e);
        } catch (w) {
          we(e, e.return, w);
        }
        try {
          Bo(5, e, e.return);
        } catch (w) {
          we(e, e.return, w);
        }
      }
      break;
    case 1:
      Rt(t, e), Vt(e), n & 512 && r !== null && Fn(r, r.return);
      break;
    case 5:
      if (
        (Rt(t, e),
        Vt(e),
        n & 512 && r !== null && Fn(r, r.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Ko(o, "");
        } catch (w) {
          we(e, e.return, w);
        }
      }
      if (n & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = r !== null ? r.memoizedProps : i,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Ig(o, i),
              su(a, l);
            var c = su(a, i);
            for (l = 0; l < s.length; l += 2) {
              var f = s[l],
                u = s[l + 1];
              f === "style"
                ? Ag(o, u)
                : f === "dangerouslySetInnerHTML"
                ? jg(o, u)
                : f === "children"
                ? Ko(o, u)
                : vf(o, f, u, c);
            }
            switch (a) {
              case "input":
                nu(o, i);
                break;
              case "textarea":
                zg(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? Hn(o, !!i.multiple, h, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Hn(o, !!i.multiple, i.defaultValue, !0)
                      : Hn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ii] = i;
          } catch (w) {
            we(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Rt(t, e), Vt(e), n & 4)) {
        if (e.stateNode === null) throw Error(I(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (w) {
          we(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Rt(t, e), Vt(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          ei(t.containerInfo);
        } catch (w) {
          we(e, e.return, w);
        }
      break;
    case 4:
      Rt(t, e), Vt(e);
      break;
    case 13:
      Rt(t, e),
        Vt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Xf = Se())),
        n & 4 && Up(e);
      break;
    case 22:
      if (
        ((f = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((Fe = (c = Fe) || f), Rt(t, e), (Fe = c)) : Rt(t, e),
        Vt(e),
        n & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !f && (e.mode & 1) !== 0)
        )
          for (V = e, f = e.child; f !== null; ) {
            for (u = V = f; V !== null; ) {
              switch (((d = V), (h = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Bo(4, d, d.return);
                  break;
                case 1:
                  Fn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (n = d), (r = d.return);
                    try {
                      (t = n),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      we(n, r, w);
                    }
                  }
                  break;
                case 5:
                  Fn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Yp(u);
                    continue;
                  }
              }
              h !== null ? ((h.return = d), (V = h)) : Yp(u);
            }
            f = f.sibling;
          }
        e: for (f = null, u = e; ; ) {
          if (u.tag === 5) {
            if (f === null) {
              f = u;
              try {
                (o = u.stateNode),
                  c
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = u.stateNode),
                      (s = u.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = Lg("display", l)));
              } catch (w) {
                we(e, e.return, w);
              }
            }
          } else if (u.tag === 6) {
            if (f === null)
              try {
                u.stateNode.nodeValue = c ? "" : u.memoizedProps;
              } catch (w) {
                we(e, e.return, w);
              }
          } else if (
            ((u.tag !== 22 && u.tag !== 23) ||
              u.memoizedState === null ||
              u === e) &&
            u.child !== null
          ) {
            (u.child.return = u), (u = u.child);
            continue;
          }
          if (u === e) break e;
          for (; u.sibling === null; ) {
            if (u.return === null || u.return === e) break e;
            f === u && (f = null), (u = u.return);
          }
          f === u && (f = null), (u.sibling.return = u.return), (u = u.sibling);
        }
      }
      break;
    case 19:
      Rt(t, e), Vt(e), n & 4 && Up(e);
      break;
    case 21:
      break;
    default:
      Rt(t, e), Vt(e);
  }
}
function Vt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (u0(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(I(160));
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode;
          n.flags & 32 && (Ko(o, ""), (n.flags &= -33));
          var i = Wp(e);
          Au(e, i, o);
          break;
        case 3:
        case 4:
          var l = n.stateNode.containerInfo,
            a = Wp(e);
          Lu(e, a, l);
          break;
        default:
          throw Error(I(161));
      }
    } catch (s) {
      we(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Bb(e, t, r) {
  (V = e), p0(e);
}
function p0(e, t, r) {
  for (var n = (e.mode & 1) !== 0; V !== null; ) {
    var o = V,
      i = o.child;
    if (o.tag === 22 && n) {
      var l = o.memoizedState !== null || Ui;
      if (!l) {
        var a = o.alternate,
          s = (a !== null && a.memoizedState !== null) || Fe;
        a = Ui;
        var c = Fe;
        if (((Ui = l), (Fe = s) && !c))
          for (V = o; V !== null; )
            (l = V),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Xp(o)
                : s !== null
                ? ((s.return = l), (V = s))
                : Xp(o);
        for (; i !== null; ) (V = i), p0(i), (i = i.sibling);
        (V = o), (Ui = a), (Fe = c);
      }
      Gp(e);
    } else
      (o.subtreeFlags & 8772) !== 0 && i !== null
        ? ((i.return = o), (V = i))
        : Gp(e);
  }
}
function Gp(e) {
  for (; V !== null; ) {
    var t = V;
    if ((t.flags & 8772) !== 0) {
      var r = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Fe || hs(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !Fe)
                if (r === null) n.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : Nt(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    o,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && kp(t, i, n);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                kp(t, l, r);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (r === null && t.flags & 4) {
                r = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && r.focus();
                    break;
                  case "img":
                    s.src && (r.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var f = c.memoizedState;
                  if (f !== null) {
                    var u = f.dehydrated;
                    u !== null && ei(u);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(I(163));
          }
        Fe || (t.flags & 512 && ju(t));
      } catch (d) {
        we(t, t.return, d);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (V = r);
      break;
    }
    V = t.return;
  }
}
function Yp(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (V = r);
      break;
    }
    V = t.return;
  }
}
function Xp(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            hs(4, t);
          } catch (s) {
            we(t, r, s);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (s) {
              we(t, o, s);
            }
          }
          var i = t.return;
          try {
            ju(t);
          } catch (s) {
            we(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            ju(t);
          } catch (s) {
            we(t, l, s);
          }
      }
    } catch (s) {
      we(t, t.return, s);
    }
    if (t === e) {
      V = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (V = a);
      break;
    }
    V = t.return;
  }
}
var Wb = Math.ceil,
  Jl = yr.ReactCurrentDispatcher,
  Gf = yr.ReactCurrentOwner,
  bt = yr.ReactCurrentBatchConfig,
  K = 0,
  Re = null,
  be = null,
  De = 0,
  lt = 0,
  Vn = Xr(0),
  Ce = 0,
  fi = null,
  vn = 0,
  gs = 0,
  Yf = 0,
  Wo = null,
  Ze = null,
  Xf = 0,
  ro = 1 / 0,
  or = null,
  ql = !1,
  Mu = null,
  jr = null,
  Gi = !1,
  kr = null,
  ea = 0,
  Uo = 0,
  Fu = null,
  _l = -1,
  Sl = 0;
function Ye() {
  return (K & 6) !== 0 ? Se() : _l !== -1 ? _l : (_l = Se());
}
function Lr(e) {
  return (e.mode & 1) === 0
    ? 1
    : (K & 2) !== 0 && De !== 0
    ? De & -De
    : Cb.transition !== null
    ? (Sl === 0 && (Sl = Kg()), Sl)
    : ((e = te),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ny(e.type))),
      e);
}
function jt(e, t, r, n) {
  if (50 < Uo) throw ((Uo = 0), (Fu = null), Error(I(185)));
  gi(e, r, n),
    ((K & 2) === 0 || e !== Re) &&
      (e === Re && ((K & 2) === 0 && (gs |= r), Ce === 4 && Cr(e, De)),
      tt(e, n),
      r === 1 &&
        K === 0 &&
        (t.mode & 1) === 0 &&
        ((ro = Se() + 500), ps && Qr()));
}
function tt(e, t) {
  var r = e.callbackNode;
  Cx(e, t);
  var n = Ll(e, e === Re ? De : 0);
  if (n === 0)
    r !== null && np(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && np(r), t === 1))
      e.tag === 0 ? Ob(Qp.bind(null, e)) : xy(Qp.bind(null, e)),
        xb(function () {
          (K & 6) === 0 && Qr();
        }),
        (r = null);
    else {
      switch (Zg(n)) {
        case 1:
          r = _f;
          break;
        case 4:
          r = Xg;
          break;
        case 16:
          r = jl;
          break;
        case 536870912:
          r = Qg;
          break;
        default:
          r = jl;
      }
      r = S0(r, m0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function m0(e, t) {
  if (((_l = -1), (Sl = 0), (K & 6) !== 0)) throw Error(I(327));
  var r = e.callbackNode;
  if (Yn() && e.callbackNode !== r) return null;
  var n = Ll(e, e === Re ? De : 0);
  if (n === 0) return null;
  if ((n & 30) !== 0 || (n & e.expiredLanes) !== 0 || t) t = ta(e, n);
  else {
    t = n;
    var o = K;
    K |= 2;
    var i = h0();
    (Re !== e || De !== t) && ((or = null), (ro = Se() + 500), sn(e, t));
    do
      try {
        Yb();
        break;
      } catch (a) {
        v0(e, a);
      }
    while (1);
    If(),
      (Jl.current = i),
      (K = o),
      be !== null ? (t = 0) : ((Re = null), (De = 0), (t = Ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = pu(e)), o !== 0 && ((n = o), (t = Vu(e, o)))), t === 1)
    )
      throw ((r = fi), sn(e, 0), Cr(e, n), tt(e, Se()), r);
    if (t === 6) Cr(e, n);
    else {
      if (
        ((o = e.current.alternate),
        (n & 30) === 0 &&
          !Ub(o) &&
          ((t = ta(e, n)),
          t === 2 && ((i = pu(e)), i !== 0 && ((n = i), (t = Vu(e, i)))),
          t === 1))
      )
        throw ((r = fi), sn(e, 0), Cr(e, n), tt(e, Se()), r);
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          en(e, Ze, or);
          break;
        case 3:
          if (
            (Cr(e, n), (n & 130023424) === n && ((t = Xf + 500 - Se()), 10 < t))
          ) {
            if (Ll(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              Ye(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Su(en.bind(null, e, Ze, or), t);
            break;
          }
          en(e, Ze, or);
          break;
        case 4:
          if ((Cr(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var l = 31 - Dt(n);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (n &= ~i);
          }
          if (
            ((n = o),
            (n = Se() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * Wb(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Su(en.bind(null, e, Ze, or), n);
            break;
          }
          en(e, Ze, or);
          break;
        case 5:
          en(e, Ze, or);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return tt(e, Se()), e.callbackNode === r ? m0.bind(null, e) : null;
}
function Vu(e, t) {
  var r = Wo;
  return (
    e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256),
    (e = ta(e, t)),
    e !== 2 && ((t = Ze), (Ze = r), t !== null && Hu(t)),
    e
  );
}
function Hu(e) {
  Ze === null ? (Ze = e) : Ze.push.apply(Ze, e);
}
function Ub(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Lt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Cr(e, t) {
  for (
    t &= ~Yf,
      t &= ~gs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - Dt(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function Qp(e) {
  if ((K & 6) !== 0) throw Error(I(327));
  Yn();
  var t = Ll(e, 0);
  if ((t & 1) === 0) return tt(e, Se()), null;
  var r = ta(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = pu(e);
    n !== 0 && ((t = n), (r = Vu(e, n)));
  }
  if (r === 1) throw ((r = fi), sn(e, 0), Cr(e, t), tt(e, Se()), r);
  if (r === 6) throw Error(I(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    en(e, Ze, or),
    tt(e, Se()),
    null
  );
}
function Qf(e, t) {
  var r = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    (K = r), K === 0 && ((ro = Se() + 500), ps && Qr());
  }
}
function hn(e) {
  kr !== null && kr.tag === 0 && (K & 6) === 0 && Yn();
  var t = K;
  K |= 1;
  var r = bt.transition,
    n = te;
  try {
    if (((bt.transition = null), (te = 1), e)) return e();
  } finally {
    (te = n), (bt.transition = r), (K = t), (K & 6) === 0 && Qr();
  }
}
function Kf() {
  (lt = Vn.current), fe(Vn);
}
function sn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), Sb(r)), be !== null))
    for (r = be.return; r !== null; ) {
      var n = r;
      switch ((Rf(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && Hl();
          break;
        case 3:
          eo(), fe(qe), fe(Be), Mf();
          break;
        case 5:
          Af(n);
          break;
        case 4:
          eo();
          break;
        case 13:
          fe(ve);
          break;
        case 19:
          fe(ve);
          break;
        case 10:
          zf(n.type._context);
          break;
        case 22:
        case 23:
          Kf();
      }
      r = r.return;
    }
  if (
    ((Re = e),
    (be = e = Ar(e.current, null)),
    (De = lt = t),
    (Ce = 0),
    (fi = null),
    (Yf = gs = vn = 0),
    (Ze = Wo = null),
    nn !== null)
  ) {
    for (t = 0; t < nn.length; t++)
      if (((r = nn[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var o = n.next,
          i = r.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (n.next = l);
        }
        r.pending = n;
      }
    nn = null;
  }
  return e;
}
function v0(e, t) {
  do {
    var r = be;
    try {
      if ((If(), (gl.current = Zl), Kl)) {
        for (var n = he.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), (n = n.next);
        }
        Kl = !1;
      }
      if (
        ((mn = 0),
        (ke = Oe = he = null),
        (Ho = !1),
        (si = 0),
        (Gf.current = null),
        r === null || r.return === null)
      ) {
        (Ce = 1), (fi = t), (be = null);
        break;
      }
      e: {
        var i = e,
          l = r.return,
          a = r,
          s = t;
        if (
          ((t = De),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            f = a,
            u = f.tag;
          if ((f.mode & 1) === 0 && (u === 0 || u === 11 || u === 15)) {
            var d = f.alternate;
            d
              ? ((f.updateQueue = d.updateQueue),
                (f.memoizedState = d.memoizedState),
                (f.lanes = d.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var h = jp(l);
          if (h !== null) {
            (h.flags &= -257),
              Lp(h, l, a, i, t),
              h.mode & 1 && Dp(i, c, t),
              (t = h),
              (s = c);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else y.add(s);
            break e;
          } else {
            if ((t & 1) === 0) {
              Dp(i, c, t), Zf();
              break e;
            }
            s = Error(I(426));
          }
        } else if (pe && a.mode & 1) {
          var P = jp(l);
          if (P !== null) {
            (P.flags & 65536) === 0 && (P.flags |= 256),
              Lp(P, l, a, i, t),
              Nf(to(s, a));
            break e;
          }
        }
        (i = s = to(s, a)),
          Ce !== 4 && (Ce = 2),
          Wo === null ? (Wo = [i]) : Wo.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var v = Jy(i, s, t);
              Ep(i, v);
              break e;
            case 1:
              a = s;
              var p = i.type,
                g = i.stateNode;
              if (
                (i.flags & 128) === 0 &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (jr === null || !jr.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = qy(i, a, t);
                Ep(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      y0(r);
    } catch (b) {
      (t = b), be === r && r !== null && (be = r = r.return);
      continue;
    }
    break;
  } while (1);
}
function h0() {
  var e = Jl.current;
  return (Jl.current = Zl), e === null ? Zl : e;
}
function Zf() {
  (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
    Re === null ||
      ((vn & 268435455) === 0 && (gs & 268435455) === 0) ||
      Cr(Re, De);
}
function ta(e, t) {
  var r = K;
  K |= 2;
  var n = h0();
  (Re !== e || De !== t) && ((or = null), sn(e, t));
  do
    try {
      Gb();
      break;
    } catch (o) {
      v0(e, o);
    }
  while (1);
  if ((If(), (K = r), (Jl.current = n), be !== null)) throw Error(I(261));
  return (Re = null), (De = 0), Ce;
}
function Gb() {
  for (; be !== null; ) g0(be);
}
function Yb() {
  for (; be !== null && !yx(); ) g0(be);
}
function g0(e) {
  var t = _0(e.alternate, e, lt);
  (e.memoizedProps = e.pendingProps),
    t === null ? y0(e) : (be = t),
    (Gf.current = null);
}
function y0(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((r = Mb(r, t, lt)), r !== null)) {
        be = r;
        return;
      }
    } else {
      if (((r = Fb(r, t)), r !== null)) {
        (r.flags &= 32767), (be = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ce = 6), (be = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      be = t;
      return;
    }
    be = t = e;
  } while (t !== null);
  Ce === 0 && (Ce = 5);
}
function en(e, t, r) {
  var n = te,
    o = bt.transition;
  try {
    (bt.transition = null), (te = 1), Xb(e, t, r, n);
  } finally {
    (bt.transition = o), (te = n);
  }
  return null;
}
function Xb(e, t, r, n) {
  do Yn();
  while (kr !== null);
  if ((K & 6) !== 0) throw Error(I(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(I(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = r.lanes | r.childLanes;
  if (
    (Ex(e, i),
    e === Re && ((be = Re = null), (De = 0)),
    ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
      Gi ||
      ((Gi = !0),
      S0(jl, function () {
        return Yn(), null;
      })),
    (i = (r.flags & 15990) !== 0),
    (r.subtreeFlags & 15990) !== 0 || i)
  ) {
    (i = bt.transition), (bt.transition = null);
    var l = te;
    te = 1;
    var a = K;
    (K |= 4),
      (Gf.current = null),
      Hb(e, r),
      d0(r, e),
      mb(wu),
      (Al = !!yu),
      (wu = yu = null),
      (e.current = r),
      Bb(r),
      wx(),
      (K = a),
      (te = l),
      (bt.transition = i);
  } else e.current = r;
  if (
    (Gi && ((Gi = !1), (kr = e), (ea = o)),
    (i = e.pendingLanes),
    i === 0 && (jr = null),
    xx(r.stateNode),
    tt(e, Se()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest });
  if (ql) throw ((ql = !1), (e = Mu), (Mu = null), e);
  return (
    (ea & 1) !== 0 && e.tag !== 0 && Yn(),
    (i = e.pendingLanes),
    (i & 1) !== 0 ? (e === Fu ? Uo++ : ((Uo = 0), (Fu = e))) : (Uo = 0),
    Qr(),
    null
  );
}
function Yn() {
  if (kr !== null) {
    var e = Zg(ea),
      t = bt.transition,
      r = te;
    try {
      if (((bt.transition = null), (te = 16 > e ? 16 : e), kr === null))
        var n = !1;
      else {
        if (((e = kr), (kr = null), (ea = 0), (K & 6) !== 0))
          throw Error(I(331));
        var o = K;
        for (K |= 4, V = e.current; V !== null; ) {
          var i = V,
            l = i.child;
          if ((V.flags & 16) !== 0) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var c = a[s];
                for (V = c; V !== null; ) {
                  var f = V;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bo(8, f, i);
                  }
                  var u = f.child;
                  if (u !== null) (u.return = f), (V = u);
                  else
                    for (; V !== null; ) {
                      f = V;
                      var d = f.sibling,
                        h = f.return;
                      if ((c0(f), f === c)) {
                        V = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = h), (V = d);
                        break;
                      }
                      V = h;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var P = w.sibling;
                    (w.sibling = null), (w = P);
                  } while (w !== null);
                }
              }
              V = i;
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && l !== null)
            (l.return = i), (V = l);
          else
            e: for (; V !== null; ) {
              if (((i = V), (i.flags & 2048) !== 0))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Bo(9, i, i.return);
                }
              var v = i.sibling;
              if (v !== null) {
                (v.return = i.return), (V = v);
                break e;
              }
              V = i.return;
            }
        }
        var p = e.current;
        for (V = p; V !== null; ) {
          l = V;
          var g = l.child;
          if ((l.subtreeFlags & 2064) !== 0 && g !== null)
            (g.return = l), (V = g);
          else
            e: for (l = p; V !== null; ) {
              if (((a = V), (a.flags & 2048) !== 0))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hs(9, a);
                  }
                } catch (b) {
                  we(a, a.return, b);
                }
              if (a === l) {
                V = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (V = S);
                break e;
              }
              V = a.return;
            }
        }
        if (
          ((K = o), Qr(), Qt && typeof Qt.onPostCommitFiberRoot == "function")
        )
          try {
            Qt.onPostCommitFiberRoot(ss, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (te = r), (bt.transition = t);
    }
  }
  return !1;
}
function Kp(e, t, r) {
  (t = to(r, t)),
    (t = Jy(e, t, 1)),
    (e = Dr(e, t, 1)),
    (t = Ye()),
    e !== null && (gi(e, 1, t), tt(e, t));
}
function we(e, t, r) {
  if (e.tag === 3) Kp(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Kp(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (jr === null || !jr.has(n)))
        ) {
          (e = to(r, e)),
            (e = qy(t, e, 1)),
            (t = Dr(t, e, 1)),
            (e = Ye()),
            t !== null && (gi(t, 1, e), tt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Qb(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = Ye()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Re === e &&
      (De & r) === r &&
      (Ce === 4 || (Ce === 3 && (De & 130023424) === De && 500 > Se() - Xf)
        ? sn(e, 0)
        : (Yf |= r)),
    tt(e, t);
}
function w0(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = ji), (ji <<= 1), (ji & 130023424) === 0 && (ji = 4194304)));
  var r = Ye();
  (e = pr(e, t)), e !== null && (gi(e, t, r), tt(e, r));
}
function Kb(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), w0(e, r);
}
function Zb(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        o = e.memoizedState;
      o !== null && (r = o.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(I(314));
  }
  n !== null && n.delete(t), w0(e, r);
}
var _0;
_0 = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || qe.current) Je = !0;
    else {
      if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
        return (Je = !1), Ab(e, t, r);
      Je = (e.flags & 131072) !== 0;
    }
  else (Je = !1), pe && (t.flags & 1048576) !== 0 && by(t, Ul, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      wl(e, t), (e = t.pendingProps);
      var o = Zn(t, Be.current);
      Gn(t, r), (o = Vf(null, t, n, e, o, r));
      var i = Hf();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            et(n) ? ((i = !0), Bl(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            jf(t),
            (o.updater = ms),
            (t.stateNode = o),
            (o._reactInternals = t),
            Eu(t, n, e, r),
            (t = Nu(null, t, n, !0, i, r)))
          : ((t.tag = 0), pe && i && kf(t), Ge(null, t, o, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (wl(e, t),
          (e = t.pendingProps),
          (o = n._init),
          (n = o(n._payload)),
          (t.type = n),
          (o = t.tag = qb(n)),
          (e = Nt(n, e)),
          o)
        ) {
          case 0:
            t = Ru(null, t, n, e, r);
            break e;
          case 1:
            t = Fp(null, t, n, e, r);
            break e;
          case 11:
            t = Ap(null, t, n, e, r);
            break e;
          case 14:
            t = Mp(null, t, n, Nt(n.type, e), r);
            break e;
        }
        throw Error(I(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Nt(n, o)),
        Ru(e, t, n, o, r)
      );
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Nt(n, o)),
        Fp(e, t, n, o, r)
      );
    case 3:
      e: {
        if ((n0(t), e === null)) throw Error(I(387));
        (n = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Cy(e, t),
          Xl(t, n, null, r);
        var l = t.memoizedState;
        if (((n = l.element), i.isDehydrated))
          if (
            ((i = {
              element: n,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = to(Error(I(423)), t)), (t = Vp(e, t, n, r, o));
            break e;
          } else if (n !== o) {
            (o = to(Error(I(424)), t)), (t = Vp(e, t, n, r, o));
            break e;
          } else
            for (
              at = zr(t.stateNode.containerInfo.firstChild),
                st = t,
                pe = !0,
                zt = null,
                r = Ny(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Jn(), n === o)) {
            t = mr(e, t, r);
            break e;
          }
          Ge(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ty(t),
        e === null && $u(t),
        (n = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        _u(n, o) ? (l = null) : i !== null && _u(n, i) && (t.flags |= 32),
        r0(e, t),
        Ge(e, t, l, r),
        t.child
      );
    case 6:
      return e === null && $u(t), null;
    case 13:
      return o0(e, t, r);
    case 4:
      return (
        Lf(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = qn(t, null, n, r)) : Ge(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Nt(n, o)),
        Ap(e, t, n, o, r)
      );
    case 7:
      return Ge(e, t, t.pendingProps, r), t.child;
    case 8:
      return Ge(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return Ge(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          ae(Gl, n._currentValue),
          (n._currentValue = l),
          i !== null)
        )
          if (Lt(i.value, l)) {
            if (i.children === o.children && !qe.current) {
              t = mr(e, t, r);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                l = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === n) {
                    if (i.tag === 1) {
                      (s = cr(-1, r & -r)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var f = c.pending;
                        f === null
                          ? (s.next = s)
                          : ((s.next = f.next), (f.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= r),
                      (s = i.alternate),
                      s !== null && (s.lanes |= r),
                      Ou(i.return, r, t),
                      (a.lanes |= r);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(I(341));
                (l.lanes |= r),
                  (a = l.alternate),
                  a !== null && (a.lanes |= r),
                  Ou(l, r, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        Ge(e, t, o.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (n = t.pendingProps.children),
        Gn(t, r),
        (o = Pt(o)),
        (n = n(o)),
        (t.flags |= 1),
        Ge(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (o = Nt(n, t.pendingProps)),
        (o = Nt(n.type, o)),
        Mp(e, t, n, o, r)
      );
    case 15:
      return e0(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Nt(n, o)),
        wl(e, t),
        (t.tag = 1),
        et(n) ? ((e = !0), Bl(t)) : (e = !1),
        Gn(t, r),
        ky(t, n, o),
        Eu(t, n, o, r),
        Nu(null, t, n, !0, e, r)
      );
    case 19:
      return i0(e, t, r);
    case 22:
      return t0(e, t, r);
  }
  throw Error(I(156, t.tag));
};
function S0(e, t) {
  return Yg(e, t);
}
function Jb(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function St(e, t, r, n) {
  return new Jb(e, t, r, n);
}
function Jf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function qb(e) {
  if (typeof e == "function") return Jf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === gf)) return 11;
    if (e === yf) return 14;
  }
  return 2;
}
function Ar(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = St(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function xl(e, t, r, n, o, i) {
  var l = 2;
  if (((n = e), typeof e == "function")) Jf(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Nn:
        return cn(r.children, o, i, t);
      case hf:
        (l = 8), (o |= 8);
        break;
      case Jc:
        return (
          (e = St(12, r, t, o | 2)), (e.elementType = Jc), (e.lanes = i), e
        );
      case qc:
        return (e = St(13, r, t, o)), (e.elementType = qc), (e.lanes = i), e;
      case eu:
        return (e = St(19, r, t, o)), (e.elementType = eu), (e.lanes = i), e;
      case Rg:
        return ys(r, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Eg:
              l = 10;
              break e;
            case kg:
              l = 9;
              break e;
            case gf:
              l = 11;
              break e;
            case yf:
              l = 14;
              break e;
            case Pr:
              (l = 16), (n = null);
              break e;
          }
        throw Error(I(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = St(l, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t
  );
}
function cn(e, t, r, n) {
  return (e = St(7, e, n, t)), (e.lanes = r), e;
}
function ys(e, t, r, n) {
  return (
    (e = St(22, e, n, t)),
    (e.elementType = Rg),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ec(e, t, r) {
  return (e = St(6, e, null, t)), (e.lanes = r), e;
}
function kc(e, t, r) {
  return (
    (t = St(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function eP(e, t, r, n, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = cc(0)),
    (this.expirationTimes = cc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = cc(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function qf(e, t, r, n, o, i, l, a, s) {
  return (
    (e = new eP(e, t, r, a, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = St(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    jf(i),
    e
  );
}
function tP(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Rn,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function x0(e) {
  if (!e) return Hr;
  e = e._reactInternals;
  e: {
    if (wn(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (et(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (et(r)) return Sy(e, r, t);
  }
  return t;
}
function b0(e, t, r, n, o, i, l, a, s) {
  return (
    (e = qf(r, n, !0, e, o, i, l, a, s)),
    (e.context = x0(null)),
    (r = e.current),
    (n = Ye()),
    (o = Lr(r)),
    (i = cr(n, o)),
    (i.callback = t != null ? t : null),
    Dr(r, i, o),
    (e.current.lanes = o),
    gi(e, o, n),
    tt(e, n),
    e
  );
}
function ws(e, t, r, n) {
  var o = t.current,
    i = Ye(),
    l = Lr(o);
  return (
    (r = x0(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = cr(i, l)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = Dr(o, t, l)),
    e !== null && (jt(e, o, l, i), hl(e, o, l)),
    l
  );
}
function ra(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function ed(e, t) {
  Zp(e, t), (e = e.alternate) && Zp(e, t);
}
function rP() {
  return null;
}
var P0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function td(e) {
  this._internalRoot = e;
}
_s.prototype.render = td.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  ws(e, t, null, null);
};
_s.prototype.unmount = td.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hn(function () {
      ws(null, e, null, null);
    }),
      (t[dr] = null);
  }
};
function _s(e) {
  this._internalRoot = e;
}
_s.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ey();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Or.length && t !== 0 && t < Or[r].priority; r++);
    Or.splice(r, 0, e), r === 0 && ry(e);
  }
};
function rd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ss(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Jp() {}
function nP(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var i = n;
      n = function () {
        var c = ra(l);
        i.call(c);
      };
    }
    var l = b0(t, n, e, 0, null, !1, !1, "", Jp);
    return (
      (e._reactRootContainer = l),
      (e[dr] = l.current),
      ni(e.nodeType === 8 ? e.parentNode : e),
      hn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof n == "function") {
    var a = n;
    n = function () {
      var c = ra(s);
      a.call(c);
    };
  }
  var s = qf(e, 0, !1, null, null, !1, !1, "", Jp);
  return (
    (e._reactRootContainer = s),
    (e[dr] = s.current),
    ni(e.nodeType === 8 ? e.parentNode : e),
    hn(function () {
      ws(t, s, r, n);
    }),
    s
  );
}
function xs(e, t, r, n, o) {
  var i = r._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var s = ra(l);
        a.call(s);
      };
    }
    ws(t, l, e, o);
  } else l = nP(r, t, e, o, n);
  return ra(l);
}
Jg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = zo(t.pendingLanes);
        r !== 0 &&
          (Sf(t, r | 1),
          tt(t, Se()),
          (K & 6) === 0 && ((ro = Se() + 500), Qr()));
      }
      break;
    case 13:
      hn(function () {
        var n = pr(e, 1);
        if (n !== null) {
          var o = Ye();
          jt(n, e, 1, o);
        }
      }),
        ed(e, 1);
  }
};
xf = function (e) {
  if (e.tag === 13) {
    var t = pr(e, 134217728);
    if (t !== null) {
      var r = Ye();
      jt(t, e, 134217728, r);
    }
    ed(e, 134217728);
  }
};
qg = function (e) {
  if (e.tag === 13) {
    var t = Lr(e),
      r = pr(e, t);
    if (r !== null) {
      var n = Ye();
      jt(r, e, t, n);
    }
    ed(e, t);
  }
};
ey = function () {
  return te;
};
ty = function (e, t) {
  var r = te;
  try {
    return (te = e), t();
  } finally {
    te = r;
  }
};
uu = function (e, t, r) {
  switch (t) {
    case "input":
      if ((nu(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var o = ds(n);
            if (!o) throw Error(I(90));
            Tg(n), nu(n, o);
          }
        }
      }
      break;
    case "textarea":
      zg(e, r);
      break;
    case "select":
      (t = r.value), t != null && Hn(e, !!r.multiple, t, !1);
  }
};
Vg = Qf;
Hg = hn;
var oP = { usingClientEntryPoint: !1, Events: [wi, Dn, ds, Mg, Fg, Qf] },
  $o = {
    findFiberByHostInstance: rn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  iP = {
    bundleType: $o.bundleType,
    version: $o.version,
    rendererPackageName: $o.rendererPackageName,
    rendererConfig: $o.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ug(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: $o.findFiberByHostInstance || rP,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Yi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Yi.isDisabled && Yi.supportsFiber)
    try {
      (ss = Yi.inject(iP)), (Qt = Yi);
    } catch {}
}
pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oP;
pt.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rd(t)) throw Error(I(200));
  return tP(e, t, null, r);
};
pt.createRoot = function (e, t) {
  if (!rd(e)) throw Error(I(299));
  var r = !1,
    n = "",
    o = P0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = qf(e, 1, !1, null, null, r, !1, n, o)),
    (e[dr] = t.current),
    ni(e.nodeType === 8 ? e.parentNode : e),
    new td(t)
  );
};
pt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(I(188))
      : ((e = Object.keys(e).join(",")), Error(I(268, e)));
  return (e = Ug(t)), (e = e === null ? null : e.stateNode), e;
};
pt.flushSync = function (e) {
  return hn(e);
};
pt.hydrate = function (e, t, r) {
  if (!Ss(t)) throw Error(I(200));
  return xs(null, e, t, !0, r);
};
pt.hydrateRoot = function (e, t, r) {
  if (!rd(e)) throw Error(I(405));
  var n = (r != null && r.hydratedSources) || null,
    o = !1,
    i = "",
    l = P0;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (l = r.onRecoverableError)),
    (t = b0(t, null, e, 1, r != null ? r : null, o, !1, i, l)),
    (e[dr] = t.current),
    ni(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (o = r._getVersion),
        (o = o(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, o])
          : t.mutableSourceEagerHydrationData.push(r, o);
  return new _s(t);
};
pt.render = function (e, t, r) {
  if (!Ss(t)) throw Error(I(200));
  return xs(null, e, t, !1, r);
};
pt.unmountComponentAtNode = function (e) {
  if (!Ss(e)) throw Error(I(40));
  return e._reactRootContainer
    ? (hn(function () {
        xs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[dr] = null);
        });
      }),
      !0)
    : !1;
};
pt.unstable_batchedUpdates = Qf;
pt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Ss(r)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return xs(e, t, r, !1, n);
};
pt.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  t(), (e.exports = pt);
})(hi);
var qp = hi.exports;
(Kc.createRoot = qp.createRoot), (Kc.hydrateRoot = qp.hydrateRoot);
const nd = () => !window.invokeNative,
  lP = () => {},
  Bu = (e, t) => {
    const r = m.exports.useRef(lP);
    m.exports.useEffect(() => {
      r.current = t;
    }, [t]),
      m.exports.useEffect(() => {
        const n = (o) => {
          const { action: i, data: l } = o.data;
          r.current && i === e && r.current(l);
        };
        return (
          window.addEventListener("message", n),
          () => window.removeEventListener("message", n)
        );
      }, [e]);
  };
async function bl(e, t, r) {
  const n = {
    method: "post",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(t),
  };
  if (nd() && r) return r;
  const o = window.GetParentResourceName
    ? window.GetParentResourceName()
    : "nui-frame-app";
  return await (await fetch(`https://${o}/${e}`, n)).json();
}
var bs = { exports: {} },
  Ps = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var aP = m.exports,
  sP = Symbol.for("react.element"),
  cP = Symbol.for("react.fragment"),
  uP = Object.prototype.hasOwnProperty,
  fP = aP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  dP = { key: !0, ref: !0, __self: !0, __source: !0 };
function $0(e, t, r) {
  var n,
    o = {},
    i = null,
    l = null;
  r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (n in t) uP.call(t, n) && !dP.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: sP,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: fP.current,
  };
}
Ps.Fragment = cP;
Ps.jsx = $0;
Ps.jsxs = $0;
(function (e) {
  e.exports = Ps;
})(bs);
const Br = bs.exports.Fragment,
  _ = bs.exports.jsx,
  U = bs.exports.jsxs,
  pP = m.exports.createContext(null),
  mP = ({ children: e }) => {
    const [t, r] = m.exports.useState(!1);
    return (
      Bu("setVisible", r),
      m.exports.useEffect(() => {
        if (!t) return;
        const n = (o) => {
          ["Escape"].includes(o.code) && (nd() ? r(!t) : bl("hideFrame"));
        };
        return (
          window.addEventListener("keydown", n),
          () => window.removeEventListener("keydown", n)
        );
      }, [t]),
      _(pP.Provider, {
        value: { visible: t, setVisible: r },
        children: _("div", {
          style: { visibility: t ? "visible" : "hidden", height: "100%" },
          children: e,
        }),
      })
    );
  };
function vP(e) {
  const t = m.exports.createContext(null);
  return [
    ({ children: o, value: i }) => _(t.Provider, { value: i, children: o }),
    () => {
      const o = m.exports.useContext(t);
      if (o === null) throw new Error(e);
      return o;
    },
  ];
}
function O0(e) {
  return Array.isArray(e) ? e : [e];
}
const C0 = () => {};
function hP(e, t = { active: !0 }) {
  return typeof e != "function" || !t.active
    ? t.onKeyDown || C0
    : (r) => {
        var n;
        r.key === "Escape" && (e(r), (n = t.onTrigger) == null || n.call(t));
      };
}
function gP({ data: e }) {
  const t = [],
    r = [],
    n = e.reduce(
      (o, i, l) => (
        i.group
          ? o[i.group]
            ? o[i.group].push(l)
            : (o[i.group] = [l])
          : r.push(l),
        o
      ),
      {}
    );
  return (
    Object.keys(n).forEach((o) => {
      t.push(...n[o].map((i) => e[i]));
    }),
    t.push(...r.map((o) => e[o])),
    t
  );
}
function $s(e) {
  return Array.isArray(e) || e === null
    ? !1
    : typeof e == "object"
    ? e.type !== an.Fragment
    : !1;
}
function E0(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = E0(e[t])) && (n && (n += " "), (n += r));
    else for (t in e) e[t] && (n && (n += " "), (n += t));
  return n;
}
function k0() {
  for (var e = 0, t, r, n = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = E0(t)) && (n && (n += " "), (n += r));
  return n;
}
const R0 = {
  dark: [
    "#C1C2C5",
    "#A6A7AB",
    "#909296",
    "#5c5f66",
    "#373A40",
    "#2C2E33",
    "#25262b",
    "#1A1B1E",
    "#141517",
    "#101113",
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529",
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a",
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d",
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c",
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4",
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7",
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab",
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285",
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b",
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e",
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d",
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700",
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f",
  ],
};
function yP(e) {
  return () => ({ fontFamily: e.fontFamily || "sans-serif" });
}
var wP = Object.defineProperty,
  em = Object.getOwnPropertySymbols,
  _P = Object.prototype.hasOwnProperty,
  SP = Object.prototype.propertyIsEnumerable,
  tm = (e, t, r) =>
    t in e
      ? wP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  rm = (e, t) => {
    for (var r in t || (t = {})) _P.call(t, r) && tm(e, r, t[r]);
    if (em) for (var r of em(t)) SP.call(t, r) && tm(e, r, t[r]);
    return e;
  };
function xP(e) {
  return (t) => ({
    WebkitTapHighlightColor: "transparent",
    [t || "&:focus"]: rm(
      {},
      e.focusRing === "always" || e.focusRing === "auto"
        ? e.focusRingStyles.styles(e)
        : e.focusRingStyles.resetStyles(e)
    ),
    [t
      ? t.replace(":focus", ":focus:not(:focus-visible)")
      : "&:focus:not(:focus-visible)"]: rm(
      {},
      e.focusRing === "auto" || e.focusRing === "never"
        ? e.focusRingStyles.resetStyles(e)
        : null
    ),
  });
}
function Si(e) {
  return (t) =>
    typeof e.primaryShade == "number"
      ? e.primaryShade
      : e.primaryShade[t || e.colorScheme];
}
function od(e) {
  const t = Si(e);
  return (r, n, o = !0, i = !0) => {
    if (typeof r == "string" && r.includes(".")) {
      const [a, s] = r.split("."),
        c = parseInt(s, 10);
      if (a in e.colors && c >= 0 && c < 10)
        return e.colors[a][typeof n == "number" && !i ? n : c];
    }
    const l = typeof n == "number" ? n : t();
    return r in e.colors ? e.colors[r][l] : o ? e.colors[e.primaryColor][l] : r;
  };
}
function N0(e) {
  let t = "";
  for (let r = 1; r < e.length - 1; r += 1)
    t += `${e[r]} ${(r / (e.length - 1)) * 100}%, `;
  return `${e[0]} 0%, ${t}${e[e.length - 1]} 100%`;
}
function bP(e, ...t) {
  return `linear-gradient(${e}deg, ${N0(t)})`;
}
function PP(...e) {
  return `radial-gradient(circle, ${N0(e)})`;
}
function T0(e) {
  const t = od(e),
    r = Si(e);
  return (n) => {
    const o = {
      from: (n == null ? void 0 : n.from) || e.defaultGradient.from,
      to: (n == null ? void 0 : n.to) || e.defaultGradient.to,
      deg: (n == null ? void 0 : n.deg) || e.defaultGradient.deg,
    };
    return `linear-gradient(${o.deg}deg, ${t(o.from, r(), !1)} 0%, ${t(
      o.to,
      r(),
      !1
    )} 100%)`;
  };
}
function I0(e) {
  return (t) => {
    if (typeof t == "number") return `${t / 16}${e}`;
    if (typeof t == "string") {
      const r = t.replace("px", "");
      if (!Number.isNaN(Number(r))) return `${Number(r) / 16}${e}`;
    }
    return t;
  };
}
const x = I0("rem"),
  Os = I0("em");
function L({ size: e, sizes: t, units: r }) {
  return e in t
    ? t[e]
    : typeof e == "number"
    ? r === "em"
      ? Os(e)
      : x(e)
    : e || t.md;
}
function no(e) {
  return typeof e == "number"
    ? e
    : typeof e == "string" && e.includes("rem")
    ? Number(e.replace("rem", "")) * 16
    : typeof e == "string" && e.includes("em")
    ? Number(e.replace("em", "")) * 16
    : Number(e);
}
function $P(e) {
  return (t) =>
    `@media (min-width: ${Os(no(L({ size: t, sizes: e.breakpoints })))})`;
}
function OP(e) {
  return (t) =>
    `@media (max-width: ${Os(no(L({ size: t, sizes: e.breakpoints })) - 1)})`;
}
function CP(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function EP(e) {
  let t = e.replace("#", "");
  if (t.length === 3) {
    const l = t.split("");
    t = [l[0], l[0], l[1], l[1], l[2], l[2]].join("");
  }
  const r = parseInt(t, 16),
    n = (r >> 16) & 255,
    o = (r >> 8) & 255,
    i = r & 255;
  return { r: n, g: o, b: i, a: 1 };
}
function kP(e) {
  const [t, r, n, o] = e
    .replace(/[^0-9,.]/g, "")
    .split(",")
    .map(Number);
  return { r: t, g: r, b: n, a: o || 1 };
}
function id(e) {
  return CP(e)
    ? EP(e)
    : e.startsWith("rgb")
    ? kP(e)
    : { r: 0, g: 0, b: 0, a: 1 };
}
function kn(e, t) {
  if (typeof e != "string" || t > 1 || t < 0) return "rgba(0, 0, 0, 1)";
  if (e.startsWith("var(--")) return e;
  const { r, g: n, b: o } = id(e);
  return `rgba(${r}, ${n}, ${o}, ${t})`;
}
function RP(e = 0) {
  return {
    position: "absolute",
    top: x(e),
    right: x(e),
    left: x(e),
    bottom: x(e),
  };
}
function NP(e, t) {
  if (typeof e == "string" && e.startsWith("var(--")) return e;
  const { r, g: n, b: o, a: i } = id(e),
    l = 1 - t,
    a = (s) => Math.round(s * l);
  return `rgba(${a(r)}, ${a(n)}, ${a(o)}, ${i})`;
}
function TP(e, t) {
  if (typeof e == "string" && e.startsWith("var(--")) return e;
  const { r, g: n, b: o, a: i } = id(e),
    l = (a) => Math.round(a + (255 - a) * t);
  return `rgba(${l(r)}, ${l(n)}, ${l(o)}, ${i})`;
}
function IP(e) {
  return (t) => {
    if (typeof t == "number") return x(t);
    const r =
      typeof e.defaultRadius == "number"
        ? e.defaultRadius
        : e.radius[e.defaultRadius] || e.defaultRadius;
    return e.radius[t] || t || r;
  };
}
function zP(e, t) {
  if (typeof e == "string" && e.includes(".")) {
    const [r, n] = e.split("."),
      o = parseInt(n, 10);
    if (r in t.colors && o >= 0 && o < 10)
      return { isSplittedColor: !0, key: r, shade: o };
  }
  return { isSplittedColor: !1 };
}
function DP(e) {
  const t = od(e),
    r = Si(e),
    n = T0(e);
  return ({ variant: o, color: i, gradient: l, primaryFallback: a }) => {
    const s = zP(i, e);
    switch (o) {
      case "light":
        return {
          border: "transparent",
          background: kn(
            t(i, e.colorScheme === "dark" ? 8 : 0, a, !1),
            e.colorScheme === "dark" ? 0.2 : 1
          ),
          color:
            i === "dark"
              ? e.colorScheme === "dark"
                ? e.colors.dark[0]
                : e.colors.dark[9]
              : t(i, e.colorScheme === "dark" ? 2 : r("light")),
          hover: kn(
            t(i, e.colorScheme === "dark" ? 7 : 1, a, !1),
            e.colorScheme === "dark" ? 0.25 : 0.65
          ),
        };
      case "subtle":
        return {
          border: "transparent",
          background: "transparent",
          color:
            i === "dark"
              ? e.colorScheme === "dark"
                ? e.colors.dark[0]
                : e.colors.dark[9]
              : t(i, e.colorScheme === "dark" ? 2 : r("light")),
          hover: kn(
            t(i, e.colorScheme === "dark" ? 8 : 0, a, !1),
            e.colorScheme === "dark" ? 0.2 : 1
          ),
        };
      case "outline":
        return {
          border: t(i, e.colorScheme === "dark" ? 5 : r("light")),
          background: "transparent",
          color: t(i, e.colorScheme === "dark" ? 5 : r("light")),
          hover:
            e.colorScheme === "dark"
              ? kn(t(i, 5, a, !1), 0.05)
              : kn(t(i, 0, a, !1), 0.35),
        };
      case "default":
        return {
          border:
            e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[4],
          background: e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
          color: e.colorScheme === "dark" ? e.white : e.black,
          hover: e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[0],
        };
      case "white":
        return {
          border: "transparent",
          background: e.white,
          color: t(i, r()),
          hover: null,
        };
      case "transparent":
        return {
          border: "transparent",
          color:
            i === "dark"
              ? e.colorScheme === "dark"
                ? e.colors.dark[0]
                : e.colors.dark[9]
              : t(i, e.colorScheme === "dark" ? 2 : r("light")),
          background: "transparent",
          hover: null,
        };
      case "gradient":
        return {
          background: n(l),
          color: e.white,
          border: "transparent",
          hover: null,
        };
      default: {
        const c = r(),
          f = s.isSplittedColor ? s.shade : c,
          u = s.isSplittedColor ? s.key : i;
        return {
          border: "transparent",
          background: t(u, f, a),
          color: e.white,
          hover: t(u, f === 9 ? 8 : f + 1),
        };
      }
    }
  };
}
function jP(e) {
  return (t) => {
    const r = Si(e)(t);
    return e.colors[e.primaryColor][r];
  };
}
function LP(e) {
  return {
    "@media (hover: hover)": { "&:hover": e },
    "@media (hover: none)": { "&:active": e },
  };
}
function AP(e) {
  return () => ({
    userSelect: "none",
    color: e.colorScheme === "dark" ? e.colors.dark[3] : e.colors.gray[5],
  });
}
function MP(e) {
  return () => (e.colorScheme === "dark" ? e.colors.dark[2] : e.colors.gray[6]);
}
const $e = {
  fontStyles: yP,
  themeColor: od,
  focusStyles: xP,
  linearGradient: bP,
  radialGradient: PP,
  smallerThan: OP,
  largerThan: $P,
  rgba: kn,
  cover: RP,
  darken: NP,
  lighten: TP,
  radius: IP,
  variant: DP,
  primaryShade: Si,
  hover: LP,
  gradient: T0,
  primaryColor: jP,
  placeholderStyles: AP,
  dimmed: MP,
};
var FP = Object.defineProperty,
  VP = Object.defineProperties,
  HP = Object.getOwnPropertyDescriptors,
  nm = Object.getOwnPropertySymbols,
  BP = Object.prototype.hasOwnProperty,
  WP = Object.prototype.propertyIsEnumerable,
  om = (e, t, r) =>
    t in e
      ? FP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  UP = (e, t) => {
    for (var r in t || (t = {})) BP.call(t, r) && om(e, r, t[r]);
    if (nm) for (var r of nm(t)) WP.call(t, r) && om(e, r, t[r]);
    return e;
  },
  GP = (e, t) => VP(e, HP(t));
function z0(e) {
  return GP(UP({}, e), {
    fn: {
      fontStyles: $e.fontStyles(e),
      themeColor: $e.themeColor(e),
      focusStyles: $e.focusStyles(e),
      largerThan: $e.largerThan(e),
      smallerThan: $e.smallerThan(e),
      radialGradient: $e.radialGradient,
      linearGradient: $e.linearGradient,
      gradient: $e.gradient(e),
      rgba: $e.rgba,
      cover: $e.cover,
      lighten: $e.lighten,
      darken: $e.darken,
      primaryShade: $e.primaryShade(e),
      radius: $e.radius(e),
      variant: $e.variant(e),
      hover: $e.hover,
      primaryColor: $e.primaryColor(e),
      placeholderStyles: $e.placeholderStyles(e),
      dimmed: $e.dimmed(e),
    },
  });
}
Object.keys(R0);
const YP = {
    dir: "ltr",
    primaryShade: { light: 6, dark: 8 },
    focusRing: "auto",
    loader: "oval",
    colorScheme: "light",
    white: "#fff",
    black: "#000",
    defaultRadius: "sm",
    transitionTimingFunction: "ease",
    colors: R0,
    lineHeight: 1.55,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
    fontFamilyMonospace:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    primaryColor: "blue",
    respectReducedMotion: !0,
    cursorType: "default",
    defaultGradient: { from: "indigo", to: "cyan", deg: 45 },
    shadows: {
      xs: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1)",
      sm: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 0.625rem 0.9375rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0.3125rem",
      md: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem",
      lg: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.75rem 1.4375rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 0.75rem 0.75rem -0.4375rem",
      xl: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 2.25rem 1.75rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 1.0625rem 1.0625rem -0.4375rem",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
    },
    radius: {
      xs: "0.125rem",
      sm: "0.25rem",
      md: "0.5rem",
      lg: "1rem",
      xl: "2rem",
    },
    spacing: {
      xs: "0.625rem",
      sm: "0.75rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
    },
    breakpoints: { xs: "36em", sm: "48em", md: "62em", lg: "75em", xl: "88em" },
    headings: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: 700,
      sizes: {
        h1: { fontSize: "2.125rem", lineHeight: 1.3, fontWeight: void 0 },
        h2: { fontSize: "1.625rem", lineHeight: 1.35, fontWeight: void 0 },
        h3: { fontSize: "1.375rem", lineHeight: 1.4, fontWeight: void 0 },
        h4: { fontSize: "1.125rem", lineHeight: 1.45, fontWeight: void 0 },
        h5: { fontSize: "1rem", lineHeight: 1.5, fontWeight: void 0 },
        h6: { fontSize: "0.875rem", lineHeight: 1.5, fontWeight: void 0 },
      },
    },
    other: {},
    components: {},
    activeStyles: { transform: "translateY(0.0625rem)" },
    datesLocale: "en",
    globalStyles: void 0,
    focusRingStyles: {
      styles: (e) => ({
        outlineOffset: "0.125rem",
        outline: `0.125rem solid ${
          e.colors[e.primaryColor][e.colorScheme === "dark" ? 7 : 5]
        }`,
      }),
      resetStyles: () => ({ outline: "none" }),
      inputStyles: (e) => ({
        outline: "none",
        borderColor:
          e.colors[e.primaryColor][
            typeof e.primaryShade == "object"
              ? e.primaryShade[e.colorScheme]
              : e.primaryShade
          ],
      }),
    },
  },
  ld = z0(YP);
function XP(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function QP(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var KP = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (o) {
        var i;
        n.tags.length === 0
          ? n.insertionPoint
            ? (i = n.insertionPoint.nextSibling)
            : n.prepend
            ? (i = n.container.firstChild)
            : (i = n.before)
          : (i = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(o, i),
          n.tags.push(o);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(QP(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = XP(o);
          try {
            i.insertRule(n, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Me = "-ms-",
  na = "-moz-",
  q = "-webkit-",
  D0 = "comm",
  ad = "rule",
  sd = "decl",
  ZP = "@import",
  j0 = "@keyframes",
  JP = "@layer",
  qP = Math.abs,
  Cs = String.fromCharCode,
  e$ = Object.assign;
function t$(e, t) {
  return ze(e, 0) ^ 45
    ? (((((((t << 2) ^ ze(e, 0)) << 2) ^ ze(e, 1)) << 2) ^ ze(e, 2)) << 2) ^
        ze(e, 3)
    : 0;
}
function L0(e) {
  return e.trim();
}
function r$(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, r) {
  return e.replace(t, r);
}
function Wu(e, t) {
  return e.indexOf(t);
}
function ze(e, t) {
  return e.charCodeAt(t) | 0;
}
function di(e, t, r) {
  return e.slice(t, r);
}
function Wt(e) {
  return e.length;
}
function cd(e) {
  return e.length;
}
function Xi(e, t) {
  return t.push(e), e;
}
function n$(e, t) {
  return e.map(t).join("");
}
var Es = 1,
  oo = 1,
  A0 = 0,
  rt = 0,
  xe = 0,
  po = "";
function ks(e, t, r, n, o, i, l) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: i,
    line: Es,
    column: oo,
    length: l,
    return: "",
  };
}
function Oo(e, t) {
  return e$(ks("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function o$() {
  return xe;
}
function i$() {
  return (
    (xe = rt > 0 ? ze(po, --rt) : 0), oo--, xe === 10 && ((oo = 1), Es--), xe
  );
}
function ct() {
  return (
    (xe = rt < A0 ? ze(po, rt++) : 0), oo++, xe === 10 && ((oo = 1), Es++), xe
  );
}
function Zt() {
  return ze(po, rt);
}
function Pl() {
  return rt;
}
function xi(e, t) {
  return di(po, e, t);
}
function pi(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function M0(e) {
  return (Es = oo = 1), (A0 = Wt((po = e))), (rt = 0), [];
}
function F0(e) {
  return (po = ""), e;
}
function $l(e) {
  return L0(xi(rt - 1, Uu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function l$(e) {
  for (; (xe = Zt()) && xe < 33; ) ct();
  return pi(e) > 2 || pi(xe) > 3 ? "" : " ";
}
function a$(e, t) {
  for (
    ;
    --t &&
    ct() &&
    !(xe < 48 || xe > 102 || (xe > 57 && xe < 65) || (xe > 70 && xe < 97));

  );
  return xi(e, Pl() + (t < 6 && Zt() == 32 && ct() == 32));
}
function Uu(e) {
  for (; ct(); )
    switch (xe) {
      case e:
        return rt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Uu(xe);
        break;
      case 40:
        e === 41 && Uu(e);
        break;
      case 92:
        ct();
        break;
    }
  return rt;
}
function s$(e, t) {
  for (; ct() && e + xe !== 47 + 10; )
    if (e + xe === 42 + 42 && Zt() === 47) break;
  return "/*" + xi(t, rt - 1) + "*" + Cs(e === 47 ? e : ct());
}
function c$(e) {
  for (; !pi(Zt()); ) ct();
  return xi(e, rt);
}
function u$(e) {
  return F0(Ol("", null, null, null, [""], (e = M0(e)), 0, [0], e));
}
function Ol(e, t, r, n, o, i, l, a, s) {
  for (
    var c = 0,
      f = 0,
      u = l,
      d = 0,
      h = 0,
      y = 0,
      w = 1,
      P = 1,
      v = 1,
      p = 0,
      g = "",
      S = o,
      b = i,
      O = n,
      $ = g;
    P;

  )
    switch (((y = p), (p = ct()))) {
      case 40:
        if (y != 108 && ze($, u - 1) == 58) {
          Wu(($ += ee($l(p), "&", "&\f")), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        $ += $l(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        $ += l$(y);
        break;
      case 92:
        $ += a$(Pl() - 1, 7);
        continue;
      case 47:
        switch (Zt()) {
          case 42:
          case 47:
            Xi(f$(s$(ct(), Pl()), t, r), s);
            break;
          default:
            $ += "/";
        }
        break;
      case 123 * w:
        a[c++] = Wt($) * v;
      case 125 * w:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            P = 0;
          case 59 + f:
            v == -1 && ($ = ee($, /\f/g, "")),
              h > 0 &&
                Wt($) - u &&
                Xi(
                  h > 32
                    ? lm($ + ";", n, r, u - 1)
                    : lm(ee($, " ", "") + ";", n, r, u - 2),
                  s
                );
            break;
          case 59:
            $ += ";";
          default:
            if (
              (Xi((O = im($, t, r, c, f, o, a, g, (S = []), (b = []), u)), i),
              p === 123)
            )
              if (f === 0) Ol($, t, O, O, S, i, u, a, b);
              else
                switch (d === 99 && ze($, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ol(
                      e,
                      O,
                      O,
                      n && Xi(im(e, O, O, 0, 0, o, a, g, o, (S = []), u), b),
                      o,
                      b,
                      u,
                      a,
                      n ? S : b
                    );
                    break;
                  default:
                    Ol($, O, O, O, [""], b, 0, a, b);
                }
        }
        (c = f = h = 0), (w = v = 1), (g = $ = ""), (u = l);
        break;
      case 58:
        (u = 1 + Wt($)), (h = y);
      default:
        if (w < 1) {
          if (p == 123) --w;
          else if (p == 125 && w++ == 0 && i$() == 125) continue;
        }
        switch ((($ += Cs(p)), p * w)) {
          case 38:
            v = f > 0 ? 1 : (($ += "\f"), -1);
            break;
          case 44:
            (a[c++] = (Wt($) - 1) * v), (v = 1);
            break;
          case 64:
            Zt() === 45 && ($ += $l(ct())),
              (d = Zt()),
              (f = u = Wt((g = $ += c$(Pl())))),
              p++;
            break;
          case 45:
            y === 45 && Wt($) == 2 && (w = 0);
        }
    }
  return i;
}
function im(e, t, r, n, o, i, l, a, s, c, f) {
  for (
    var u = o - 1, d = o === 0 ? i : [""], h = cd(d), y = 0, w = 0, P = 0;
    y < n;
    ++y
  )
    for (var v = 0, p = di(e, u + 1, (u = qP((w = l[y])))), g = e; v < h; ++v)
      (g = L0(w > 0 ? d[v] + " " + p : ee(p, /&\f/g, d[v]))) && (s[P++] = g);
  return ks(e, t, r, o === 0 ? ad : a, s, c, f);
}
function f$(e, t, r) {
  return ks(e, t, r, D0, Cs(o$()), di(e, 2, -2), 0);
}
function lm(e, t, r, n) {
  return ks(e, t, r, sd, di(e, 0, n), di(e, n + 1, -1), n);
}
function Xn(e, t) {
  for (var r = "", n = cd(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || "";
  return r;
}
function d$(e, t, r, n) {
  switch (e.type) {
    case JP:
      if (e.children.length) break;
    case ZP:
    case sd:
      return (e.return = e.return || e.value);
    case D0:
      return "";
    case j0:
      return (e.return = e.value + "{" + Xn(e.children, n) + "}");
    case ad:
      e.value = e.props.join(",");
  }
  return Wt((r = Xn(e.children, n)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function p$(e) {
  var t = cd(e);
  return function (r, n, o, i) {
    for (var l = "", a = 0; a < t; a++) l += e[a](r, n, o, i) || "";
    return l;
  };
}
function m$(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var am = function (t) {
  var r = new WeakMap();
  return function (n) {
    if (r.has(n)) return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function v$(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var h$ = function (t, r, n) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Zt()), o === 38 && i === 12 && (r[n] = 1), !pi(i);

    )
      ct();
    return xi(t, rt);
  },
  g$ = function (t, r) {
    var n = -1,
      o = 44;
    do
      switch (pi(o)) {
        case 0:
          o === 38 && Zt() === 12 && (r[n] = 1), (t[n] += h$(rt - 1, r, n));
          break;
        case 2:
          t[n] += $l(o);
          break;
        case 4:
          if (o === 44) {
            (t[++n] = Zt() === 58 ? "&\f" : ""), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += Cs(o);
      }
    while ((o = ct()));
    return t;
  },
  y$ = function (t, r) {
    return F0(g$(M0(t), r));
  },
  sm = new WeakMap(),
  w$ = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          n = t.parent,
          o = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !sm.get(n)) &&
        !o
      ) {
        sm.set(t, !0);
        for (
          var i = [], l = y$(r, i), a = n.props, s = 0, c = 0;
          s < l.length;
          s++
        )
          for (var f = 0; f < a.length; f++, c++)
            t.props[c] = i[s] ? l[s].replace(/&\f/g, a[f]) : a[f] + " " + l[s];
      }
    }
  },
  _$ = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function V0(e, t) {
  switch (t$(e, t)) {
    case 5103:
      return q + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return q + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return q + e + na + e + Me + e + e;
    case 6828:
    case 4268:
      return q + e + Me + e + e;
    case 6165:
      return q + e + Me + "flex-" + e + e;
    case 5187:
      return (
        q + e + ee(e, /(\w+).+(:[^]+)/, q + "box-$1$2" + Me + "flex-$1$2") + e
      );
    case 5443:
      return q + e + Me + "flex-item-" + ee(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        q +
        e +
        Me +
        "flex-line-pack" +
        ee(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return q + e + Me + ee(e, "shrink", "negative") + e;
    case 5292:
      return q + e + Me + ee(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        q +
        "box-" +
        ee(e, "-grow", "") +
        q +
        e +
        Me +
        ee(e, "grow", "positive") +
        e
      );
    case 4554:
      return q + ee(e, /([^-])(transform)/g, "$1" + q + "$2") + e;
    case 6187:
      return (
        ee(
          ee(ee(e, /(zoom-|grab)/, q + "$1"), /(image-set)/, q + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return ee(e, /(image-set\([^]*)/, q + "$1$`$1");
    case 4968:
      return (
        ee(
          ee(e, /(.+:)(flex-)?(.*)/, q + "box-pack:$3" + Me + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        q +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ee(e, /(.+)-inline(.+)/, q + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Wt(e) - 1 - t > 6)
        switch (ze(e, t + 1)) {
          case 109:
            if (ze(e, t + 4) !== 45) break;
          case 102:
            return (
              ee(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  q +
                  "$2-$3$1" +
                  na +
                  (ze(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Wu(e, "stretch")
              ? V0(ee(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (ze(e, t + 1) !== 115) break;
    case 6444:
      switch (ze(e, Wt(e) - 3 - (~Wu(e, "!important") && 10))) {
        case 107:
          return ee(e, ":", ":" + q) + e;
        case 101:
          return (
            ee(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                q +
                (ze(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                q +
                "$2$3$1" +
                Me +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (ze(e, t + 11)) {
        case 114:
          return q + e + Me + ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return q + e + Me + ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return q + e + Me + ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return q + e + Me + e + e;
  }
  return e;
}
var S$ = function (t, r, n, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case sd:
          t.return = V0(t.value, t.length);
          break;
        case j0:
          return Xn([Oo(t, { value: ee(t.value, "@", "@" + q) })], o);
        case ad:
          if (t.length)
            return n$(t.props, function (i) {
              switch (r$(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Xn(
                    [Oo(t, { props: [ee(i, /:(read-\w+)/, ":" + na + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Xn(
                    [
                      Oo(t, {
                        props: [ee(i, /:(plac\w+)/, ":" + q + "input-$1")],
                      }),
                      Oo(t, { props: [ee(i, /:(plac\w+)/, ":" + na + "$1")] }),
                      Oo(t, { props: [ee(i, /:(plac\w+)/, Me + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  x$ = [S$],
  H0 = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (w) {
        var P = w.getAttribute("data-emotion");
        P.indexOf(" ") !== -1 &&
          (document.head.appendChild(w), w.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || x$,
      i = {},
      l,
      a = [];
    (l = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (w) {
          for (
            var P = w.getAttribute("data-emotion").split(" "), v = 1;
            v < P.length;
            v++
          )
            i[P[v]] = !0;
          a.push(w);
        }
      );
    var s,
      c = [w$, _$];
    {
      var f,
        u = [
          d$,
          m$(function (w) {
            f.insert(w);
          }),
        ],
        d = p$(c.concat(o, u)),
        h = function (P) {
          return Xn(u$(P), d);
        };
      s = function (P, v, p, g) {
        (f = p),
          h(P ? P + "{" + v.styles + "}" : v.styles),
          g && (y.inserted[v.name] = !0);
      };
    }
    var y = {
      key: r,
      sheet: new KP({
        key: r,
        container: l,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: s,
    };
    return y.sheet.hydrate(a), y;
  };
function me() {
  return (
    (me = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    me.apply(this, arguments)
  );
}
var B0 = { exports: {} },
  ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ne = typeof Symbol == "function" && Symbol.for,
  ud = Ne ? Symbol.for("react.element") : 60103,
  fd = Ne ? Symbol.for("react.portal") : 60106,
  Rs = Ne ? Symbol.for("react.fragment") : 60107,
  Ns = Ne ? Symbol.for("react.strict_mode") : 60108,
  Ts = Ne ? Symbol.for("react.profiler") : 60114,
  Is = Ne ? Symbol.for("react.provider") : 60109,
  zs = Ne ? Symbol.for("react.context") : 60110,
  dd = Ne ? Symbol.for("react.async_mode") : 60111,
  Ds = Ne ? Symbol.for("react.concurrent_mode") : 60111,
  js = Ne ? Symbol.for("react.forward_ref") : 60112,
  Ls = Ne ? Symbol.for("react.suspense") : 60113,
  b$ = Ne ? Symbol.for("react.suspense_list") : 60120,
  As = Ne ? Symbol.for("react.memo") : 60115,
  Ms = Ne ? Symbol.for("react.lazy") : 60116,
  P$ = Ne ? Symbol.for("react.block") : 60121,
  $$ = Ne ? Symbol.for("react.fundamental") : 60117,
  O$ = Ne ? Symbol.for("react.responder") : 60118,
  C$ = Ne ? Symbol.for("react.scope") : 60119;
function vt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ud:
        switch (((e = e.type), e)) {
          case dd:
          case Ds:
          case Rs:
          case Ts:
          case Ns:
          case Ls:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case zs:
              case js:
              case Ms:
              case As:
              case Is:
                return e;
              default:
                return t;
            }
        }
      case fd:
        return t;
    }
  }
}
function W0(e) {
  return vt(e) === Ds;
}
ne.AsyncMode = dd;
ne.ConcurrentMode = Ds;
ne.ContextConsumer = zs;
ne.ContextProvider = Is;
ne.Element = ud;
ne.ForwardRef = js;
ne.Fragment = Rs;
ne.Lazy = Ms;
ne.Memo = As;
ne.Portal = fd;
ne.Profiler = Ts;
ne.StrictMode = Ns;
ne.Suspense = Ls;
ne.isAsyncMode = function (e) {
  return W0(e) || vt(e) === dd;
};
ne.isConcurrentMode = W0;
ne.isContextConsumer = function (e) {
  return vt(e) === zs;
};
ne.isContextProvider = function (e) {
  return vt(e) === Is;
};
ne.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === ud;
};
ne.isForwardRef = function (e) {
  return vt(e) === js;
};
ne.isFragment = function (e) {
  return vt(e) === Rs;
};
ne.isLazy = function (e) {
  return vt(e) === Ms;
};
ne.isMemo = function (e) {
  return vt(e) === As;
};
ne.isPortal = function (e) {
  return vt(e) === fd;
};
ne.isProfiler = function (e) {
  return vt(e) === Ts;
};
ne.isStrictMode = function (e) {
  return vt(e) === Ns;
};
ne.isSuspense = function (e) {
  return vt(e) === Ls;
};
ne.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Rs ||
    e === Ds ||
    e === Ts ||
    e === Ns ||
    e === Ls ||
    e === b$ ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ms ||
        e.$$typeof === As ||
        e.$$typeof === Is ||
        e.$$typeof === zs ||
        e.$$typeof === js ||
        e.$$typeof === $$ ||
        e.$$typeof === O$ ||
        e.$$typeof === C$ ||
        e.$$typeof === P$))
  );
};
ne.typeOf = vt;
(function (e) {
  e.exports = ne;
})(B0);
var U0 = B0.exports,
  E$ = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  k$ = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  G0 = {};
G0[U0.ForwardRef] = E$;
G0[U0.Memo] = k$;
var R$ = !0;
function N$(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (n += o + " ");
    }),
    n
  );
}
var T$ = function (t, r, n) {
    var o = t.key + "-" + r.name;
    (n === !1 || R$ === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = r.styles);
  },
  Y0 = function (t, r, n) {
    T$(t, r, n);
    var o = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do t.insert(r === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function I$(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var z$ = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  D$ = /[A-Z]|^ms/g,
  j$ = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  X0 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  cm = function (t) {
    return t != null && typeof t != "boolean";
  },
  Rc = v$(function (e) {
    return X0(e) ? e : e.replace(D$, "-$&").toLowerCase();
  }),
  um = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(j$, function (n, o, i) {
            return (Ut = { name: o, styles: i, next: Ut }), o;
          });
    }
    return z$[t] !== 1 && !X0(t) && typeof r == "number" && r !== 0
      ? r + "px"
      : r;
  };
function mi(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return (Ut = { name: r.name, styles: r.styles, next: Ut }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (Ut = { name: n.name, styles: n.styles, next: Ut }), (n = n.next);
        var o = r.styles + ";";
        return o;
      }
      return L$(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = Ut,
          l = r(e);
        return (Ut = i), mi(e, t, l);
      }
      break;
    }
  }
  if (t == null) return r;
  var a = t[r];
  return a !== void 0 ? a : r;
}
function L$(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++) n += mi(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var l = r[i];
      if (typeof l != "object")
        t != null && t[l] !== void 0
          ? (n += i + "{" + t[l] + "}")
          : cm(l) && (n += Rc(i) + ":" + um(i, l) + ";");
      else if (
        Array.isArray(l) &&
        typeof l[0] == "string" &&
        (t == null || t[l[0]] === void 0)
      )
        for (var a = 0; a < l.length; a++)
          cm(l[a]) && (n += Rc(i) + ":" + um(i, l[a]) + ";");
      else {
        var s = mi(e, t, l);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Rc(i) + ":" + s + ";";
            break;
          }
          default:
            n += i + "{" + s + "}";
        }
      }
    }
  return n;
}
var fm = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Ut,
  Q0 = function (t, r, n) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    Ut = void 0;
    var l = t[0];
    l == null || l.raw === void 0
      ? ((o = !1), (i += mi(n, r, l)))
      : (i += l[0]);
    for (var a = 1; a < t.length; a++) (i += mi(n, r, t[a])), o && (i += l[a]);
    fm.lastIndex = 0;
    for (var s = "", c; (c = fm.exec(i)) !== null; ) s += "-" + c[1];
    var f = I$(i) + s;
    return { name: f, styles: i, next: Ut };
  },
  A$ = Tl["useInsertionEffect"] ? Tl["useInsertionEffect"] : !1,
  dm = A$ || m.exports.useLayoutEffect,
  K0 = m.exports.createContext(
    typeof HTMLElement < "u" ? H0({ key: "css" }) : null
  );
K0.Provider;
var M$ = function (t) {
    return m.exports.forwardRef(function (r, n) {
      var o = m.exports.useContext(K0);
      return t(r, o, n);
    });
  },
  Gu = m.exports.createContext({}),
  F$ = function (t, r) {
    if (typeof r == "function") {
      var n = r(t);
      return n;
    }
    return me({}, t, r);
  },
  V$ = am(function (e) {
    return am(function (t) {
      return F$(e, t);
    });
  }),
  H$ = function (t) {
    var r = m.exports.useContext(Gu);
    return (
      t.theme !== r && (r = V$(r)(t.theme)),
      _(Gu.Provider, { value: r, children: t.children })
    );
  },
  Fs = M$(function (e, t) {
    var r = e.styles,
      n = Q0([r], void 0, m.exports.useContext(Gu)),
      o = m.exports.useRef();
    return (
      dm(
        function () {
          var i = t.key + "-global",
            l = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            a = !1,
            s = document.querySelector(
              'style[data-emotion="' + i + " " + n.name + '"]'
            );
          return (
            t.sheet.tags.length && (l.before = t.sheet.tags[0]),
            s !== null &&
              ((a = !0), s.setAttribute("data-emotion", i), l.hydrate([s])),
            (o.current = [l, a]),
            function () {
              l.flush();
            }
          );
        },
        [t]
      ),
      dm(
        function () {
          var i = o.current,
            l = i[0],
            a = i[1];
          if (a) {
            i[1] = !1;
            return;
          }
          if ((n.next !== void 0 && Y0(t, n.next, !0), l.tags.length)) {
            var s = l.tags[l.tags.length - 1].nextElementSibling;
            (l.before = s), l.flush();
          }
          t.insert("", n, l, !1);
        },
        [t, n.name]
      ),
      null
    );
  }),
  B$ = Object.defineProperty,
  W$ = Object.defineProperties,
  U$ = Object.getOwnPropertyDescriptors,
  pm = Object.getOwnPropertySymbols,
  G$ = Object.prototype.hasOwnProperty,
  Y$ = Object.prototype.propertyIsEnumerable,
  mm = (e, t, r) =>
    t in e
      ? B$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  X$ = (e, t) => {
    for (var r in t || (t = {})) G$.call(t, r) && mm(e, r, t[r]);
    if (pm) for (var r of pm(t)) Y$.call(t, r) && mm(e, r, t[r]);
    return e;
  },
  Q$ = (e, t) => W$(e, U$(t));
function K$({ theme: e }) {
  return _(Fs, {
    styles: {
      "*, *::before, *::after": { boxSizing: "border-box" },
      html: { colorScheme: e.colorScheme === "dark" ? "dark" : "light" },
      body: Q$(X$({}, e.fn.fontStyles()), {
        backgroundColor: e.colorScheme === "dark" ? e.colors.dark[7] : e.white,
        color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
        lineHeight: e.lineHeight,
        fontSize: e.fontSizes.md,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }),
    },
  });
}
function Co(e, t, r, n = x) {
  Object.keys(t).forEach((o) => {
    e[`--mantine-${r}-${o}`] = n(t[o]);
  });
}
function Z$({ theme: e }) {
  const t = {
    "--mantine-color-white": e.white,
    "--mantine-color-black": e.black,
    "--mantine-transition-timing-function": e.transitionTimingFunction,
    "--mantine-line-height": `${e.lineHeight}`,
    "--mantine-font-family": e.fontFamily,
    "--mantine-font-family-monospace": e.fontFamilyMonospace,
    "--mantine-font-family-headings": e.headings.fontFamily,
    "--mantine-heading-font-weight": `${e.headings.fontWeight}`,
  };
  Co(t, e.shadows, "shadow"),
    Co(t, e.fontSizes, "font-size"),
    Co(t, e.radius, "radius"),
    Co(t, e.spacing, "spacing"),
    Co(t, e.breakpoints, "breakpoints", Os),
    Object.keys(e.colors).forEach((n) => {
      e.colors[n].forEach((o, i) => {
        t[`--mantine-color-${n}-${i}`] = o;
      });
    });
  const r = e.headings.sizes;
  return (
    Object.keys(r).forEach((n) => {
      (t[`--mantine-${n}-font-size`] = r[n].fontSize),
        (t[`--mantine-${n}-line-height`] = `${r[n].lineHeight}`);
    }),
    _(Fs, { styles: { ":root": t } })
  );
}
var J$ = Object.defineProperty,
  q$ = Object.defineProperties,
  eO = Object.getOwnPropertyDescriptors,
  vm = Object.getOwnPropertySymbols,
  tO = Object.prototype.hasOwnProperty,
  rO = Object.prototype.propertyIsEnumerable,
  hm = (e, t, r) =>
    t in e
      ? J$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Ht = (e, t) => {
    for (var r in t || (t = {})) tO.call(t, r) && hm(e, r, t[r]);
    if (vm) for (var r of vm(t)) rO.call(t, r) && hm(e, r, t[r]);
    return e;
  },
  Nc = (e, t) => q$(e, eO(t));
function nO(e, t) {
  var r;
  if (!t) return e;
  const n = Object.keys(e).reduce((o, i) => {
    if (i === "headings" && t.headings) {
      const l = t.headings.sizes
        ? Object.keys(e.headings.sizes).reduce(
            (a, s) => (
              (a[s] = Ht(Ht({}, e.headings.sizes[s]), t.headings.sizes[s])), a
            ),
            {}
          )
        : e.headings.sizes;
      return Nc(Ht({}, o), {
        headings: Nc(Ht(Ht({}, e.headings), t.headings), { sizes: l }),
      });
    }
    if (i === "breakpoints" && t.breakpoints) {
      const l = Ht(Ht({}, e.breakpoints), t.breakpoints);
      return Nc(Ht({}, o), {
        breakpoints: Object.fromEntries(
          Object.entries(l).sort((a, s) => no(a[1]) - no(s[1]))
        ),
      });
    }
    return (
      (o[i] =
        typeof t[i] == "object"
          ? Ht(Ht({}, e[i]), t[i])
          : typeof t[i] == "number" ||
            typeof t[i] == "boolean" ||
            typeof t[i] == "function"
          ? t[i]
          : t[i] || e[i]),
      o
    );
  }, {});
  if (
    ((t == null ? void 0 : t.fontFamily) &&
      !((r = t == null ? void 0 : t.headings) != null && r.fontFamily) &&
      (n.headings.fontFamily = t.fontFamily),
    !(n.primaryColor in n.colors))
  )
    throw new Error(
      "MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more \u2013 https://mantine.dev/theming/colors/#primary-color"
    );
  return n;
}
function oO(e, t) {
  return z0(nO(e, t));
}
function Z0(e) {
  return Object.keys(e).reduce(
    (t, r) => (e[r] !== void 0 && (t[r] = e[r]), t),
    {}
  );
}
const iO = {
  html: {
    fontFamily: "sans-serif",
    lineHeight: "1.15",
    textSizeAdjust: "100%",
  },
  body: { margin: 0 },
  "article, aside, footer, header, nav, section, figcaption, figure, main": {
    display: "block",
  },
  h1: { fontSize: "2em" },
  hr: { boxSizing: "content-box", height: 0, overflow: "visible" },
  pre: { fontFamily: "monospace, monospace", fontSize: "1em" },
  a: { background: "transparent", textDecorationSkip: "objects" },
  "a:active, a:hover": { outlineWidth: 0 },
  "abbr[title]": { borderBottom: "none", textDecoration: "underline" },
  "b, strong": { fontWeight: "bolder" },
  "code, kbp, samp": { fontFamily: "monospace, monospace", fontSize: "1em" },
  dfn: { fontStyle: "italic" },
  mark: { backgroundColor: "#ff0", color: "#000" },
  small: { fontSize: "80%" },
  "sub, sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline",
  },
  sup: { top: "-0.5em" },
  sub: { bottom: "-0.25em" },
  "audio, video": { display: "inline-block" },
  "audio:not([controls])": { display: "none", height: 0 },
  img: { borderStyle: "none", verticalAlign: "middle" },
  "svg:not(:root)": { overflow: "hidden" },
  "button, input, optgroup, select, textarea": {
    fontFamily: "sans-serif",
    fontSize: "100%",
    lineHeight: "1.15",
    margin: 0,
  },
  "button, input": { overflow: "visible" },
  "button, select": { textTransform: "none" },
  "button, [type=reset], [type=submit]": { WebkitAppearance: "button" },
  "button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":
    { borderStyle: "none", padding: 0 },
  "button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":
    { outline: `${x(1)} dotted ButtonText` },
  legend: {
    boxSizing: "border-box",
    color: "inherit",
    display: "table",
    maxWidth: "100%",
    padding: 0,
    whiteSpace: "normal",
  },
  progress: { display: "inline-block", verticalAlign: "baseline" },
  textarea: { overflow: "auto" },
  "[type=checkbox], [type=radio]": { boxSizing: "border-box", padding: 0 },
  "[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":
    { height: "auto" },
  "[type=search]": { appearance: "none" },
  "[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":
    { appearance: "none" },
  "::-webkit-file-upload-button": { appearance: "button", font: "inherit" },
  "details, menu": { display: "block" },
  summary: { display: "list-item" },
  canvas: { display: "inline-block" },
  template: { display: "none" },
};
function lO() {
  return _(Fs, { styles: iO });
}
var aO = Object.defineProperty,
  gm = Object.getOwnPropertySymbols,
  sO = Object.prototype.hasOwnProperty,
  cO = Object.prototype.propertyIsEnumerable,
  ym = (e, t, r) =>
    t in e
      ? aO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Go = (e, t) => {
    for (var r in t || (t = {})) sO.call(t, r) && ym(e, r, t[r]);
    if (gm) for (var r of gm(t)) cO.call(t, r) && ym(e, r, t[r]);
    return e;
  };
const oa = m.exports.createContext({ theme: ld });
function nt() {
  var e;
  return ((e = m.exports.useContext(oa)) == null ? void 0 : e.theme) || ld;
}
function uO(e) {
  const t = nt(),
    r = (n) => {
      var o, i, l, a;
      return {
        styles: ((o = t.components[n]) == null ? void 0 : o.styles) || {},
        classNames:
          ((i = t.components[n]) == null ? void 0 : i.classNames) || {},
        variants: (l = t.components[n]) == null ? void 0 : l.variants,
        sizes: (a = t.components[n]) == null ? void 0 : a.sizes,
      };
    };
  return Array.isArray(e) ? e.map(r) : [r(e)];
}
function J0() {
  var e;
  return (e = m.exports.useContext(oa)) == null ? void 0 : e.emotionCache;
}
function Z(e, t, r) {
  var n;
  const o = nt(),
    i = (n = o.components[e]) == null ? void 0 : n.defaultProps,
    l = typeof i == "function" ? i(o) : i;
  return Go(Go(Go({}, t), l), Z0(r));
}
function q0({
  theme: e,
  emotionCache: t,
  withNormalizeCSS: r = !1,
  withGlobalStyles: n = !1,
  withCSSVariables: o = !1,
  inherit: i = !1,
  children: l,
}) {
  const a = m.exports.useContext(oa),
    s = oO(ld, i ? Go(Go({}, a.theme), e) : e);
  return _(H$, {
    theme: s,
    children: U(oa.Provider, {
      value: { theme: s, emotionCache: t },
      children: [
        r && _(lO, {}),
        n && _(K$, { theme: s }),
        o && _(Z$, { theme: s }),
        typeof s.globalStyles == "function" &&
          _(Fs, { styles: s.globalStyles(s) }),
        l,
      ],
    }),
  });
}
q0.displayName = "@mantine/core/MantineProvider";
const fO = { app: 100, modal: 200, popover: 300, overlay: 400, max: 9999 };
function bi(e) {
  return fO[e];
}
function dO(e, t) {
  const r = m.exports.useRef();
  return (
    (!r.current ||
      t.length !== r.current.prevDeps.length ||
      r.current.prevDeps.map((n, o) => n === t[o]).indexOf(!1) >= 0) &&
      (r.current = { v: e(), prevDeps: [...t] }),
    r.current.v
  );
}
const pO = H0({ key: "mantine", prepend: !0 });
function mO() {
  return J0() || pO;
}
var vO = Object.defineProperty,
  wm = Object.getOwnPropertySymbols,
  hO = Object.prototype.hasOwnProperty,
  gO = Object.prototype.propertyIsEnumerable,
  _m = (e, t, r) =>
    t in e
      ? vO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  yO = (e, t) => {
    for (var r in t || (t = {})) hO.call(t, r) && _m(e, r, t[r]);
    if (wm) for (var r of wm(t)) gO.call(t, r) && _m(e, r, t[r]);
    return e;
  };
const Tc = "ref";
function wO(e) {
  let t;
  if (e.length !== 1) return { args: e, ref: t };
  const [r] = e;
  if (!(r instanceof Object)) return { args: e, ref: t };
  if (!(Tc in r)) return { args: e, ref: t };
  t = r[Tc];
  const n = yO({}, r);
  return delete n[Tc], { args: [n], ref: t };
}
const { cssFactory: _O } = (() => {
  function e(r, n, o) {
    const i = [],
      l = N$(r, i, o);
    return i.length < 2 ? o : l + n(i);
  }
  function t(r) {
    const { cache: n } = r,
      o = (...l) => {
        const { ref: a, args: s } = wO(l),
          c = Q0(s, n.registered);
        return Y0(n, c, !1), `${n.key}-${c.name}${a === void 0 ? "" : ` ${a}`}`;
      };
    return { css: o, cx: (...l) => e(n.registered, o, k0(l)) };
  }
  return { cssFactory: t };
})();
function e1() {
  const e = mO();
  return dO(() => _O({ cache: e }), [e]);
}
function SO({
  cx: e,
  classes: t,
  context: r,
  classNames: n,
  name: o,
  cache: i,
}) {
  const l = r.reduce(
    (a, s) => (
      Object.keys(s.classNames).forEach((c) => {
        typeof a[c] != "string"
          ? (a[c] = `${s.classNames[c]}`)
          : (a[c] = `${a[c]} ${s.classNames[c]}`);
      }),
      a
    ),
    {}
  );
  return Object.keys(t).reduce(
    (a, s) => (
      (a[s] = e(
        t[s],
        l[s],
        n != null && n[s],
        Array.isArray(o)
          ? o
              .filter(Boolean)
              .map(
                (c) => `${(i == null ? void 0 : i.key) || "mantine"}-${c}-${s}`
              )
              .join(" ")
          : o
          ? `${(i == null ? void 0 : i.key) || "mantine"}-${o}-${s}`
          : null
      )),
      a
    ),
    {}
  );
}
var xO = Object.defineProperty,
  Sm = Object.getOwnPropertySymbols,
  bO = Object.prototype.hasOwnProperty,
  PO = Object.prototype.propertyIsEnumerable,
  xm = (e, t, r) =>
    t in e
      ? xO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Ic = (e, t) => {
    for (var r in t || (t = {})) bO.call(t, r) && xm(e, r, t[r]);
    if (Sm) for (var r of Sm(t)) PO.call(t, r) && xm(e, r, t[r]);
    return e;
  };
function Yu(e, t) {
  return (
    t &&
      Object.keys(t).forEach((r) => {
        e[r] ? (e[r] = Ic(Ic({}, e[r]), t[r])) : (e[r] = Ic({}, t[r]));
      }),
    e
  );
}
function bm(e, t, r, n) {
  const o = (i) => (typeof i == "function" ? i(t, r || {}, n) : i || {});
  return Array.isArray(e)
    ? e.map((i) => o(i.styles)).reduce((i, l) => Yu(i, l), {})
    : o(e);
}
function $O({ ctx: e, theme: t, params: r, variant: n, size: o }) {
  return e.reduce(
    (i, l) => (
      l.variants &&
        n in l.variants &&
        Yu(i, l.variants[n](t, r, { variant: n, size: o })),
      l.sizes &&
        o in l.sizes &&
        Yu(i, l.sizes[o](t, r, { variant: n, size: o })),
      i
    ),
    {}
  );
}
function J(e) {
  const t = typeof e == "function" ? e : () => e;
  function r(n, o) {
    const i = nt(),
      l = uO(o == null ? void 0 : o.name),
      a = J0(),
      s = {
        variant: o == null ? void 0 : o.variant,
        size: o == null ? void 0 : o.size,
      },
      { css: c, cx: f } = e1(),
      u = t(i, n, s),
      d = bm(o == null ? void 0 : o.styles, i, n, s),
      h = bm(l, i, n, s),
      y = $O({
        ctx: l,
        theme: i,
        params: n,
        variant: o == null ? void 0 : o.variant,
        size: o == null ? void 0 : o.size,
      }),
      w = Object.fromEntries(
        Object.keys(u).map((P) => {
          const v = f(
            { [c(u[P])]: !(o != null && o.unstyled) },
            c(y[P]),
            c(h[P]),
            c(d[P])
          );
          return [P, v];
        })
      );
    return {
      classes: SO({
        cx: f,
        classes: w,
        context: l,
        classNames: o == null ? void 0 : o.classNames,
        name: o == null ? void 0 : o.name,
        cache: a,
      }),
      cx: f,
      theme: i,
    };
  }
  return r;
}
function Mr(e) {
  return `___ref-${e || ""}`;
}
var OO = Object.defineProperty,
  CO = Object.defineProperties,
  EO = Object.getOwnPropertyDescriptors,
  Pm = Object.getOwnPropertySymbols,
  kO = Object.prototype.hasOwnProperty,
  RO = Object.prototype.propertyIsEnumerable,
  $m = (e, t, r) =>
    t in e
      ? OO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Eo = (e, t) => {
    for (var r in t || (t = {})) kO.call(t, r) && $m(e, r, t[r]);
    if (Pm) for (var r of Pm(t)) RO.call(t, r) && $m(e, r, t[r]);
    return e;
  },
  ko = (e, t) => CO(e, EO(t));
const Ro = {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: `scale(.9) translateY(${x(10)})` },
    transitionProperty: "transform, opacity",
  },
  Qi = {
    fade: {
      in: { opacity: 1 },
      out: { opacity: 0 },
      transitionProperty: "opacity",
    },
    scale: {
      in: { opacity: 1, transform: "scale(1)" },
      out: { opacity: 0, transform: "scale(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-y": {
      in: { opacity: 1, transform: "scaleY(1)" },
      out: { opacity: 0, transform: "scaleY(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-x": {
      in: { opacity: 1, transform: "scaleX(1)" },
      out: { opacity: 0, transform: "scaleX(0)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "skew-up": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: {
        opacity: 0,
        transform: `translateY(-${x(20)}) skew(-10deg, -5deg)`,
      },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "skew-down": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: {
        opacity: 0,
        transform: `translateY(${x(20)}) skew(-10deg, -5deg)`,
      },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-left": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: `translateY(${x(20)}) rotate(-5deg)` },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-right": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: `translateY(${x(20)}) rotate(5deg)` },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(-100%)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(100%)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "slide-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(100%)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "slide-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(-100%)" },
      common: { transformOrigin: "right" },
      transitionProperty: "transform, opacity",
    },
    pop: ko(Eo({}, Ro), { common: { transformOrigin: "center center" } }),
    "pop-bottom-left": ko(Eo({}, Ro), {
      common: { transformOrigin: "bottom left" },
    }),
    "pop-bottom-right": ko(Eo({}, Ro), {
      common: { transformOrigin: "bottom right" },
    }),
    "pop-top-left": ko(Eo({}, Ro), { common: { transformOrigin: "top left" } }),
    "pop-top-right": ko(Eo({}, Ro), {
      common: { transformOrigin: "top right" },
    }),
  },
  Om = ["mousedown", "touchstart"];
function NO(e, t, r) {
  const n = m.exports.useRef();
  return (
    m.exports.useEffect(() => {
      const o = (i) => {
        const { target: l } = i != null ? i : {};
        if (Array.isArray(r)) {
          const a =
            (l == null
              ? void 0
              : l.hasAttribute("data-ignore-outside-clicks")) ||
            (!document.body.contains(l) && l.tagName !== "HTML");
          r.every((c) => !!c && !i.composedPath().includes(c)) && !a && e();
        } else n.current && !n.current.contains(l) && e();
      };
      return (
        (t || Om).forEach((i) => document.addEventListener(i, o)),
        () => {
          (t || Om).forEach((i) => document.removeEventListener(i, o));
        }
      );
    }, [n, e, r]),
    n
  );
}
function TO(e, t) {
  try {
    return (
      e.addEventListener("change", t), () => e.removeEventListener("change", t)
    );
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function IO(e, t) {
  return typeof t == "boolean"
    ? t
    : typeof window < "u" && "matchMedia" in window
    ? window.matchMedia(e).matches
    : !1;
}
function zO(
  e,
  t,
  { getInitialValueInEffect: r } = { getInitialValueInEffect: !0 }
) {
  const [n, o] = m.exports.useState(r ? t : IO(e, t)),
    i = m.exports.useRef();
  return (
    m.exports.useEffect(() => {
      if ("matchMedia" in window)
        return (
          (i.current = window.matchMedia(e)),
          o(i.current.matches),
          TO(i.current, (l) => o(l.matches))
        );
    }, [e]),
    n
  );
}
function un(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
const pd =
  typeof document < "u" ? m.exports.useLayoutEffect : m.exports.useEffect;
function dt(e, t) {
  const r = m.exports.useRef(!1);
  m.exports.useEffect(
    () => () => {
      r.current = !1;
    },
    []
  ),
    m.exports.useEffect(() => {
      if (r.current) return e();
      r.current = !0;
    }, t);
}
function DO({ opened: e, shouldReturnFocus: t = !0 }) {
  const r = m.exports.useRef(),
    n = () => {
      var o;
      r.current &&
        "focus" in r.current &&
        typeof r.current.focus == "function" &&
        ((o = r.current) == null || o.focus({ preventScroll: !0 }));
    };
  return (
    dt(() => {
      let o = -1;
      const i = (l) => {
        l.key === "Tab" && window.clearTimeout(o);
      };
      return (
        document.addEventListener("keydown", i),
        e
          ? (r.current = document.activeElement)
          : t && (o = window.setTimeout(n, 10)),
        () => {
          window.clearTimeout(o), document.removeEventListener("keydown", i);
        }
      );
    }, [e, t]),
    n
  );
}
const jO = /input|select|textarea|button|object/,
  t1 = "a, input, select, textarea, button, object, [tabindex]";
function LO(e) {
  return e.style.display === "none";
}
function AO(e) {
  if (
    e.getAttribute("aria-hidden") ||
    e.getAttribute("hidden") ||
    e.getAttribute("type") === "hidden"
  )
    return !1;
  let r = e;
  for (; r && !(r === document.body || r.nodeType === 11); ) {
    if (LO(r)) return !1;
    r = r.parentNode;
  }
  return !0;
}
function r1(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function Xu(e) {
  const t = e.nodeName.toLowerCase(),
    r = !Number.isNaN(r1(e));
  return (
    ((jO.test(t) && !e.disabled) ||
      (e instanceof HTMLAnchorElement && e.href) ||
      r) &&
    AO(e)
  );
}
function n1(e) {
  const t = r1(e);
  return (Number.isNaN(t) || t >= 0) && Xu(e);
}
function MO(e) {
  return Array.from(e.querySelectorAll(t1)).filter(n1);
}
function FO(e, t) {
  const r = MO(e);
  if (!r.length) {
    t.preventDefault();
    return;
  }
  const n = r[t.shiftKey ? 0 : r.length - 1],
    o = e.getRootNode();
  if (!(n === o.activeElement || e === o.activeElement)) return;
  t.preventDefault();
  const l = r[t.shiftKey ? r.length - 1 : 0];
  l && l.focus();
}
function md() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function VO(e, t = "body > :not(script)") {
  const r = md(),
    n = Array.from(document.querySelectorAll(t)).map((o) => {
      var i;
      if (
        ((i = o == null ? void 0 : o.shadowRoot) == null
          ? void 0
          : i.contains(e)) ||
        o.contains(e)
      )
        return;
      const l = o.getAttribute("aria-hidden"),
        a = o.getAttribute("data-hidden"),
        s = o.getAttribute("data-focus-id");
      return (
        o.setAttribute("data-focus-id", r),
        l === null || l === "false"
          ? o.setAttribute("aria-hidden", "true")
          : !a && !s && o.setAttribute("data-hidden", l),
        { node: o, ariaHidden: a || null }
      );
    });
  return () => {
    n.forEach((o) => {
      !o ||
        r !== o.node.getAttribute("data-focus-id") ||
        (o.ariaHidden === null
          ? o.node.removeAttribute("aria-hidden")
          : o.node.setAttribute("aria-hidden", o.ariaHidden),
        o.node.removeAttribute("data-focus-id"),
        o.node.removeAttribute("data-hidden"));
    });
  };
}
function HO(e = !0) {
  const t = m.exports.useRef(),
    r = m.exports.useRef(null),
    n = (i) => {
      let l = i.querySelector("[data-autofocus]");
      if (!l) {
        const a = Array.from(i.querySelectorAll(t1));
        (l = a.find(n1) || a.find(Xu) || null), !l && Xu(i) && (l = i);
      }
      l && l.focus({ preventScroll: !0 });
    },
    o = m.exports.useCallback(
      (i) => {
        if (!!e) {
          if (i === null) {
            r.current && (r.current(), (r.current = null));
            return;
          }
          (r.current = VO(i)),
            t.current !== i &&
              (i
                ? (setTimeout(() => {
                    i.getRootNode() && n(i);
                  }),
                  (t.current = i))
                : (t.current = null));
        }
      },
      [e]
    );
  return (
    m.exports.useEffect(() => {
      if (!e) return;
      t.current && setTimeout(() => n(t.current));
      const i = (l) => {
        l.key === "Tab" && t.current && FO(t.current, l);
      };
      return (
        document.addEventListener("keydown", i),
        () => {
          document.removeEventListener("keydown", i), r.current && r.current();
        }
      );
    }, [e]),
    o
  );
}
const BO = an["useId".toString()] || (() => {});
function WO() {
  const e = BO();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function Vs(e) {
  const t = WO(),
    [r, n] = m.exports.useState(t);
  return (
    pd(() => {
      n(md());
    }, []),
    typeof e == "string" ? e : typeof window > "u" ? t : r
  );
}
function Cm(e, t, r) {
  m.exports.useEffect(
    () => (
      window.addEventListener(e, t, r),
      () => window.removeEventListener(e, t, r)
    ),
    [e, t]
  );
}
function UO(e, t) {
  typeof e == "function"
    ? e(t)
    : typeof e == "object" && e !== null && "current" in e && (e.current = t);
}
function GO(...e) {
  return (t) => {
    e.forEach((r) => UO(r, t));
  };
}
function _n(...e) {
  return m.exports.useCallback(GO(...e), e);
}
const o1 = (e) => ({ x: un(e.x, 0, 1), y: un(e.y, 0, 1) });
function vd(e, t, r = "ltr") {
  const n = m.exports.useRef(),
    o = m.exports.useRef(!1),
    i = m.exports.useRef(!1),
    l = m.exports.useRef(0),
    [a, s] = m.exports.useState(!1);
  return (
    m.exports.useEffect(() => {
      o.current = !0;
    }, []),
    m.exports.useEffect(() => {
      const c = ({ x: p, y: g }) => {
          cancelAnimationFrame(l.current),
            (l.current = requestAnimationFrame(() => {
              if (o.current && n.current) {
                n.current.style.userSelect = "none";
                const S = n.current.getBoundingClientRect();
                if (S.width && S.height) {
                  const b = un((p - S.left) / S.width, 0, 1);
                  e({
                    x: r === "ltr" ? b : 1 - b,
                    y: un((g - S.top) / S.height, 0, 1),
                  });
                }
              }
            }));
        },
        f = () => {
          document.addEventListener("mousemove", w),
            document.addEventListener("mouseup", h),
            document.addEventListener("touchmove", v),
            document.addEventListener("touchend", h);
        },
        u = () => {
          document.removeEventListener("mousemove", w),
            document.removeEventListener("mouseup", h),
            document.removeEventListener("touchmove", v),
            document.removeEventListener("touchend", h);
        },
        d = () => {
          !i.current &&
            o.current &&
            ((i.current = !0),
            typeof (t == null ? void 0 : t.onScrubStart) == "function" &&
              t.onScrubStart(),
            s(!0),
            f());
        },
        h = () => {
          i.current &&
            o.current &&
            ((i.current = !1),
            s(!1),
            u(),
            setTimeout(() => {
              typeof (t == null ? void 0 : t.onScrubEnd) == "function" &&
                t.onScrubEnd();
            }, 0));
        },
        y = (p) => {
          d(), p.preventDefault(), w(p);
        },
        w = (p) => c({ x: p.clientX, y: p.clientY }),
        P = (p) => {
          p.cancelable && p.preventDefault(), d(), v(p);
        },
        v = (p) => {
          p.cancelable && p.preventDefault(),
            c({
              x: p.changedTouches[0].clientX,
              y: p.changedTouches[0].clientY,
            });
        };
      return (
        n.current.addEventListener("mousedown", y),
        n.current.addEventListener("touchstart", P, { passive: !1 }),
        () => {
          n.current &&
            (n.current.removeEventListener("mousedown", y),
            n.current.removeEventListener("touchstart", P));
        }
      );
    }, [r, e]),
    { ref: n, active: a }
  );
}
function Wr({
  value: e,
  defaultValue: t,
  finalValue: r,
  onChange: n = () => {},
}) {
  const [o, i] = m.exports.useState(t !== void 0 ? t : r),
    l = (a) => {
      i(a), n == null || n(a);
    };
  return e !== void 0 ? [e, n, !0] : [o, l, !1];
}
function i1(e, t) {
  return zO("(prefers-reduced-motion: reduce)", e, t);
}
const YO = (e) => (e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e),
  XO = ({
    axis: e,
    target: t,
    parent: r,
    alignment: n,
    offset: o,
    isList: i,
  }) => {
    if (!t || (!r && typeof document > "u")) return 0;
    const l = !!r,
      s = (r || document.body).getBoundingClientRect(),
      c = t.getBoundingClientRect(),
      f = (u) => c[u] - s[u];
    if (e === "y") {
      const u = f("top");
      if (u === 0) return 0;
      if (n === "start") {
        const h = u - o;
        return h <= c.height * (i ? 0 : 1) || !i ? h : 0;
      }
      const d = l ? s.height : window.innerHeight;
      if (n === "end") {
        const h = u + o - d + c.height;
        return h >= -c.height * (i ? 0 : 1) || !i ? h : 0;
      }
      return n === "center" ? u - d / 2 + c.height / 2 : 0;
    }
    if (e === "x") {
      const u = f("left");
      if (u === 0) return 0;
      if (n === "start") {
        const h = u - o;
        return h <= c.width || !i ? h : 0;
      }
      const d = l ? s.width : window.innerWidth;
      if (n === "end") {
        const h = u + o - d + c.width;
        return h >= -c.width || !i ? h : 0;
      }
      return n === "center" ? u - d / 2 + c.width / 2 : 0;
    }
    return 0;
  },
  QO = ({ axis: e, parent: t }) => {
    if (!t && typeof document > "u") return 0;
    const r = e === "y" ? "scrollTop" : "scrollLeft";
    if (t) return t[r];
    const { body: n, documentElement: o } = document;
    return n[r] + o[r];
  },
  KO = ({ axis: e, parent: t, distance: r }) => {
    if (!t && typeof document > "u") return;
    const n = e === "y" ? "scrollTop" : "scrollLeft";
    if (t) t[n] = r;
    else {
      const { body: o, documentElement: i } = document;
      (o[n] = r), (i[n] = r);
    }
  };
function ZO({
  duration: e = 1250,
  axis: t = "y",
  onScrollFinish: r,
  easing: n = YO,
  offset: o = 0,
  cancelable: i = !0,
  isList: l = !1,
} = {}) {
  const a = m.exports.useRef(0),
    s = m.exports.useRef(0),
    c = m.exports.useRef(!1),
    f = m.exports.useRef(null),
    u = m.exports.useRef(null),
    d = i1(),
    h = () => {
      a.current && cancelAnimationFrame(a.current);
    },
    y = m.exports.useCallback(
      ({ alignment: P = "start" } = {}) => {
        var v;
        (c.current = !1), a.current && h();
        const p = (v = QO({ parent: f.current, axis: t })) != null ? v : 0,
          g =
            XO({
              parent: f.current,
              target: u.current,
              axis: t,
              alignment: P,
              offset: o,
              isList: l,
            }) - (f.current ? 0 : p);
        function S() {
          s.current === 0 && (s.current = performance.now());
          const O = performance.now() - s.current,
            $ = d || e === 0 ? 1 : O / e,
            C = p + g * n($);
          KO({ parent: f.current, axis: t, distance: C }),
            !c.current && $ < 1
              ? (a.current = requestAnimationFrame(S))
              : (typeof r == "function" && r(),
                (s.current = 0),
                (a.current = 0),
                h());
        }
        S();
      },
      [t, e, n, l, o, r, d]
    ),
    w = () => {
      i && (c.current = !0);
    };
  return (
    Cm("wheel", w, { passive: !0 }),
    Cm("touchmove", w, { passive: !0 }),
    m.exports.useEffect(() => h, []),
    { scrollableRef: f, targetRef: u, scrollIntoView: y, cancel: h }
  );
}
function JO() {
  const [e, t] = m.exports.useState(!1);
  pd(() => {
    t(typeof window < "u" && "EyeDropper" in window);
  }, []);
  const r = m.exports.useCallback(
    (n = {}) => {
      if (e) return new window.EyeDropper().open(n);
    },
    [e]
  );
  return { supported: e, open: r };
}
var Em = Object.getOwnPropertySymbols,
  qO = Object.prototype.hasOwnProperty,
  e2 = Object.prototype.propertyIsEnumerable,
  t2 = (e, t) => {
    var r = {};
    for (var n in e) qO.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Em)
      for (var n of Em(e)) t.indexOf(n) < 0 && e2.call(e, n) && (r[n] = e[n]);
    return r;
  };
function Hs(e) {
  const t = e,
    {
      m: r,
      mx: n,
      my: o,
      mt: i,
      mb: l,
      ml: a,
      mr: s,
      p: c,
      px: f,
      py: u,
      pt: d,
      pb: h,
      pl: y,
      pr: w,
      bg: P,
      c: v,
      opacity: p,
      ff: g,
      fz: S,
      fw: b,
      lts: O,
      ta: $,
      lh: C,
      fs: R,
      tt: E,
      td: z,
      w: M,
      miw: N,
      maw: T,
      h: A,
      mih: H,
      mah: G,
      bgsz: k,
      bgp: D,
      bgr: j,
      bga: F,
      pos: B,
      top: ie,
      left: ye,
      bottom: Q,
      right: oe,
      inset: _e,
      display: Ke,
    } = t,
    de = t2(t, [
      "m",
      "mx",
      "my",
      "mt",
      "mb",
      "ml",
      "mr",
      "p",
      "px",
      "py",
      "pt",
      "pb",
      "pl",
      "pr",
      "bg",
      "c",
      "opacity",
      "ff",
      "fz",
      "fw",
      "lts",
      "ta",
      "lh",
      "fs",
      "tt",
      "td",
      "w",
      "miw",
      "maw",
      "h",
      "mih",
      "mah",
      "bgsz",
      "bgp",
      "bgr",
      "bga",
      "pos",
      "top",
      "left",
      "bottom",
      "right",
      "inset",
      "display",
    ]);
  return {
    systemStyles: Z0({
      m: r,
      mx: n,
      my: o,
      mt: i,
      mb: l,
      ml: a,
      mr: s,
      p: c,
      px: f,
      py: u,
      pt: d,
      pb: h,
      pl: y,
      pr: w,
      bg: P,
      c: v,
      opacity: p,
      ff: g,
      fz: S,
      fw: b,
      lts: O,
      ta: $,
      lh: C,
      fs: R,
      tt: E,
      td: z,
      w: M,
      miw: N,
      maw: T,
      h: A,
      mih: H,
      mah: G,
      bgsz: k,
      bgp: D,
      bgr: j,
      bga: F,
      pos: B,
      top: ie,
      left: ye,
      bottom: Q,
      right: oe,
      inset: _e,
      display: Ke,
    }),
    rest: de,
  };
}
function r2(e, t) {
  const r = Object.keys(e)
    .filter((n) => n !== "base")
    .sort(
      (n, o) =>
        no(L({ size: n, sizes: t.breakpoints })) -
        no(L({ size: o, sizes: t.breakpoints }))
    );
  return "base" in e ? ["base", ...r] : r;
}
function n2({ value: e, theme: t, getValue: r, property: n }) {
  if (e == null) return;
  if (typeof e == "object")
    return r2(e, t).reduce((l, a) => {
      if (a === "base" && e.base !== void 0) {
        const c = r(e.base, t);
        return Array.isArray(n)
          ? (n.forEach((f) => {
              l[f] = c;
            }),
            l)
          : ((l[n] = c), l);
      }
      const s = r(e[a], t);
      return Array.isArray(n)
        ? ((l[t.fn.largerThan(a)] = {}),
          n.forEach((c) => {
            l[t.fn.largerThan(a)][c] = s;
          }),
          l)
        : ((l[t.fn.largerThan(a)] = { [n]: s }), l);
    }, {});
  const o = r(e, t);
  return Array.isArray(n)
    ? n.reduce((i, l) => ((i[l] = o), i), {})
    : { [n]: o };
}
function o2(e, t) {
  return e === "dimmed"
    ? t.colorScheme === "dark"
      ? t.colors.dark[2]
      : t.colors.gray[6]
    : t.fn.variant({ variant: "filled", color: e, primaryFallback: !1 })
        .background;
}
function i2(e) {
  return x(e);
}
function l2(e) {
  return e;
}
function a2(e, t) {
  return L({ size: e, sizes: t.fontSizes });
}
const s2 = ["-xs", "-sm", "-md", "-lg", "-xl"];
function c2(e, t) {
  return s2.includes(e)
    ? `calc(${L({ size: e.replace("-", ""), sizes: t.spacing })} * -1)`
    : L({ size: e, sizes: t.spacing });
}
const u2 = { identity: l2, color: o2, size: i2, fontSize: a2, spacing: c2 },
  f2 = {
    m: { type: "spacing", property: "margin" },
    mt: { type: "spacing", property: "marginTop" },
    mb: { type: "spacing", property: "marginBottom" },
    ml: { type: "spacing", property: "marginLeft" },
    mr: { type: "spacing", property: "marginRight" },
    mx: { type: "spacing", property: ["marginRight", "marginLeft"] },
    my: { type: "spacing", property: ["marginTop", "marginBottom"] },
    p: { type: "spacing", property: "padding" },
    pt: { type: "spacing", property: "paddingTop" },
    pb: { type: "spacing", property: "paddingBottom" },
    pl: { type: "spacing", property: "paddingLeft" },
    pr: { type: "spacing", property: "paddingRight" },
    px: { type: "spacing", property: ["paddingRight", "paddingLeft"] },
    py: { type: "spacing", property: ["paddingTop", "paddingBottom"] },
    bg: { type: "color", property: "background" },
    c: { type: "color", property: "color" },
    opacity: { type: "identity", property: "opacity" },
    ff: { type: "identity", property: "fontFamily" },
    fz: { type: "fontSize", property: "fontSize" },
    fw: { type: "identity", property: "fontWeight" },
    lts: { type: "size", property: "letterSpacing" },
    ta: { type: "identity", property: "textAlign" },
    lh: { type: "identity", property: "lineHeight" },
    fs: { type: "identity", property: "fontStyle" },
    tt: { type: "identity", property: "textTransform" },
    td: { type: "identity", property: "textDecoration" },
    w: { type: "spacing", property: "width" },
    miw: { type: "spacing", property: "minWidth" },
    maw: { type: "spacing", property: "maxWidth" },
    h: { type: "spacing", property: "height" },
    mih: { type: "spacing", property: "minHeight" },
    mah: { type: "spacing", property: "maxHeight" },
    bgsz: { type: "size", property: "backgroundSize" },
    bgp: { type: "identity", property: "backgroundPosition" },
    bgr: { type: "identity", property: "backgroundRepeat" },
    bga: { type: "identity", property: "backgroundAttachment" },
    pos: { type: "identity", property: "position" },
    top: { type: "identity", property: "top" },
    left: { type: "size", property: "left" },
    bottom: { type: "size", property: "bottom" },
    right: { type: "size", property: "right" },
    inset: { type: "size", property: "inset" },
    display: { type: "identity", property: "display" },
  };
var d2 = Object.defineProperty,
  km = Object.getOwnPropertySymbols,
  p2 = Object.prototype.hasOwnProperty,
  m2 = Object.prototype.propertyIsEnumerable,
  Rm = (e, t, r) =>
    t in e
      ? d2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Nm = (e, t) => {
    for (var r in t || (t = {})) p2.call(t, r) && Rm(e, r, t[r]);
    if (km) for (var r of km(t)) m2.call(t, r) && Rm(e, r, t[r]);
    return e;
  };
function Tm(e, t, r = f2) {
  return Object.keys(r)
    .reduce(
      (o, i) => (
        i in e &&
          e[i] !== void 0 &&
          o.push(
            n2({
              value: e[i],
              getValue: u2[r[i].type],
              property: r[i].property,
              theme: t,
            })
          ),
        o
      ),
      []
    )
    .reduce(
      (o, i) => (
        Object.keys(i).forEach((l) => {
          typeof i[l] == "object" && i[l] !== null && l in o
            ? (o[l] = Nm(Nm({}, o[l]), i[l]))
            : (o[l] = i[l]);
        }),
        o
      ),
      {}
    );
}
function Im(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function v2(e, t, r) {
  const n = nt(),
    { css: o, cx: i } = e1();
  return Array.isArray(e)
    ? i(
        r,
        o(Tm(t, n)),
        e.map((l) => o(Im(l, n)))
      )
    : i(r, o(Im(e, n)), o(Tm(t, n)));
}
var h2 = Object.defineProperty,
  ia = Object.getOwnPropertySymbols,
  l1 = Object.prototype.hasOwnProperty,
  a1 = Object.prototype.propertyIsEnumerable,
  zm = (e, t, r) =>
    t in e
      ? h2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  g2 = (e, t) => {
    for (var r in t || (t = {})) l1.call(t, r) && zm(e, r, t[r]);
    if (ia) for (var r of ia(t)) a1.call(t, r) && zm(e, r, t[r]);
    return e;
  },
  y2 = (e, t) => {
    var r = {};
    for (var n in e) l1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ia)
      for (var n of ia(e)) t.indexOf(n) < 0 && a1.call(e, n) && (r[n] = e[n]);
    return r;
  };
const s1 = m.exports.forwardRef((e, t) => {
  var r = e,
    { className: n, component: o, style: i, sx: l } = r,
    a = y2(r, ["className", "component", "style", "sx"]);
  const { systemStyles: s, rest: c } = Hs(a);
  return _(o || "div", {
    ...g2({ ref: t, className: v2(l, s, n), style: i }, c),
  });
});
s1.displayName = "@mantine/core/Box";
const re = s1;
var w2 = Object.defineProperty,
  _2 = Object.defineProperties,
  S2 = Object.getOwnPropertyDescriptors,
  Dm = Object.getOwnPropertySymbols,
  x2 = Object.prototype.hasOwnProperty,
  b2 = Object.prototype.propertyIsEnumerable,
  jm = (e, t, r) =>
    t in e
      ? w2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Lm = (e, t) => {
    for (var r in t || (t = {})) x2.call(t, r) && jm(e, r, t[r]);
    if (Dm) for (var r of Dm(t)) b2.call(t, r) && jm(e, r, t[r]);
    return e;
  },
  P2 = (e, t) => _2(e, S2(t)),
  $2 = J((e) => ({
    root: P2(Lm(Lm({}, e.fn.focusStyles()), e.fn.fontStyles()), {
      cursor: "pointer",
      border: 0,
      padding: 0,
      appearance: "none",
      fontSize: e.fontSizes.md,
      backgroundColor: "transparent",
      textAlign: "left",
      color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
      textDecoration: "none",
      boxSizing: "border-box",
    }),
  }));
const O2 = $2;
var C2 = Object.defineProperty,
  la = Object.getOwnPropertySymbols,
  c1 = Object.prototype.hasOwnProperty,
  u1 = Object.prototype.propertyIsEnumerable,
  Am = (e, t, r) =>
    t in e
      ? C2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  E2 = (e, t) => {
    for (var r in t || (t = {})) c1.call(t, r) && Am(e, r, t[r]);
    if (la) for (var r of la(t)) u1.call(t, r) && Am(e, r, t[r]);
    return e;
  },
  k2 = (e, t) => {
    var r = {};
    for (var n in e) c1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && la)
      for (var n of la(e)) t.indexOf(n) < 0 && u1.call(e, n) && (r[n] = e[n]);
    return r;
  };
const f1 = m.exports.forwardRef((e, t) => {
  const r = Z("UnstyledButton", {}, e),
    { className: n, component: o = "button", unstyled: i, variant: l } = r,
    a = k2(r, ["className", "component", "unstyled", "variant"]),
    { classes: s, cx: c } = O2(null, {
      name: "UnstyledButton",
      unstyled: i,
      variant: l,
    });
  return _(re, {
    ...E2(
      {
        component: o,
        ref: t,
        className: c(s.root, n),
        type: o === "button" ? "button" : void 0,
      },
      a
    ),
  });
});
f1.displayName = "@mantine/core/UnstyledButton";
const d1 = f1;
var R2 = Object.defineProperty,
  N2 = Object.defineProperties,
  T2 = Object.getOwnPropertyDescriptors,
  Mm = Object.getOwnPropertySymbols,
  I2 = Object.prototype.hasOwnProperty,
  z2 = Object.prototype.propertyIsEnumerable,
  Fm = (e, t, r) =>
    t in e
      ? R2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Qu = (e, t) => {
    for (var r in t || (t = {})) I2.call(t, r) && Fm(e, r, t[r]);
    if (Mm) for (var r of Mm(t)) z2.call(t, r) && Fm(e, r, t[r]);
    return e;
  },
  Vm = (e, t) => N2(e, T2(t));
const D2 = [
    "subtle",
    "filled",
    "outline",
    "light",
    "default",
    "transparent",
    "gradient",
  ],
  Ki = { xs: x(18), sm: x(22), md: x(28), lg: x(34), xl: x(44) };
function j2({ variant: e, theme: t, color: r, gradient: n }) {
  const o = t.fn.variant({ color: r, variant: e, gradient: n });
  return e === "gradient"
    ? {
        border: 0,
        backgroundImage: o.background,
        color: o.color,
        "&:hover": t.fn.hover({ backgroundSize: "200%" }),
      }
    : D2.includes(e)
    ? Qu(
        {
          border: `${x(1)} solid ${o.border}`,
          backgroundColor: o.background,
          color: o.color,
        },
        t.fn.hover({ backgroundColor: o.hover })
      )
    : null;
}
var L2 = J(
  (e, { radius: t, color: r, gradient: n }, { variant: o, size: i }) => ({
    root: Vm(
      Qu(
        {
          position: "relative",
          borderRadius: e.fn.radius(t),
          padding: 0,
          lineHeight: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: L({ size: i, sizes: Ki }),
          minHeight: L({ size: i, sizes: Ki }),
          width: L({ size: i, sizes: Ki }),
          minWidth: L({ size: i, sizes: Ki }),
        },
        j2({ variant: o, theme: e, color: r, gradient: n })
      ),
      {
        "&:active": e.activeStyles,
        "& [data-action-icon-loader]": { maxWidth: "70%" },
        "&:disabled, &[data-disabled]": {
          color: e.colors.gray[e.colorScheme === "dark" ? 6 : 4],
          cursor: "not-allowed",
          backgroundColor:
            o === "transparent"
              ? void 0
              : e.fn.themeColor("gray", e.colorScheme === "dark" ? 8 : 1),
          borderColor:
            o === "transparent"
              ? void 0
              : e.fn.themeColor("gray", e.colorScheme === "dark" ? 8 : 1),
          backgroundImage: "none",
          pointerEvents: "none",
          "&:active": { transform: "none" },
        },
        "&[data-loading]": {
          pointerEvents: "none",
          "&::before": Vm(Qu({ content: '""' }, e.fn.cover(x(-1))), {
            backgroundColor:
              e.colorScheme === "dark"
                ? e.fn.rgba(e.colors.dark[7], 0.5)
                : "rgba(255, 255, 255, .5)",
            borderRadius: e.fn.radius(t),
            cursor: "not-allowed",
          }),
        },
      }
    ),
  })
);
const A2 = L2;
var M2 = Object.defineProperty,
  aa = Object.getOwnPropertySymbols,
  p1 = Object.prototype.hasOwnProperty,
  m1 = Object.prototype.propertyIsEnumerable,
  Hm = (e, t, r) =>
    t in e
      ? M2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Bm = (e, t) => {
    for (var r in t || (t = {})) p1.call(t, r) && Hm(e, r, t[r]);
    if (aa) for (var r of aa(t)) m1.call(t, r) && Hm(e, r, t[r]);
    return e;
  },
  Wm = (e, t) => {
    var r = {};
    for (var n in e) p1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && aa)
      for (var n of aa(e)) t.indexOf(n) < 0 && m1.call(e, n) && (r[n] = e[n]);
    return r;
  };
function F2(e) {
  var t = e,
    { size: r, color: n } = t,
    o = Wm(t, ["size", "color"]);
  const i = o,
    { style: l } = i,
    a = Wm(i, ["style"]);
  return U("svg", {
    ...Bm(
      {
        viewBox: "0 0 135 140",
        xmlns: "http://www.w3.org/2000/svg",
        fill: n,
        style: Bm({ width: r }, l),
      },
      a
    ),
    children: [
      U("rect", {
        y: "10",
        width: "15",
        height: "120",
        rx: "6",
        children: [
          _("animate", {
            attributeName: "height",
            begin: "0.5s",
            dur: "1s",
            values: "120;110;100;90;80;70;60;50;40;140;120",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
          _("animate", {
            attributeName: "y",
            begin: "0.5s",
            dur: "1s",
            values: "10;15;20;25;30;35;40;45;50;0;10",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ],
      }),
      U("rect", {
        x: "30",
        y: "10",
        width: "15",
        height: "120",
        rx: "6",
        children: [
          _("animate", {
            attributeName: "height",
            begin: "0.25s",
            dur: "1s",
            values: "120;110;100;90;80;70;60;50;40;140;120",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
          _("animate", {
            attributeName: "y",
            begin: "0.25s",
            dur: "1s",
            values: "10;15;20;25;30;35;40;45;50;0;10",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ],
      }),
      U("rect", {
        x: "60",
        width: "15",
        height: "140",
        rx: "6",
        children: [
          _("animate", {
            attributeName: "height",
            begin: "0s",
            dur: "1s",
            values: "120;110;100;90;80;70;60;50;40;140;120",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
          _("animate", {
            attributeName: "y",
            begin: "0s",
            dur: "1s",
            values: "10;15;20;25;30;35;40;45;50;0;10",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ],
      }),
      U("rect", {
        x: "90",
        y: "10",
        width: "15",
        height: "120",
        rx: "6",
        children: [
          _("animate", {
            attributeName: "height",
            begin: "0.25s",
            dur: "1s",
            values: "120;110;100;90;80;70;60;50;40;140;120",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
          _("animate", {
            attributeName: "y",
            begin: "0.25s",
            dur: "1s",
            values: "10;15;20;25;30;35;40;45;50;0;10",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ],
      }),
      U("rect", {
        x: "120",
        y: "10",
        width: "15",
        height: "120",
        rx: "6",
        children: [
          _("animate", {
            attributeName: "height",
            begin: "0.5s",
            dur: "1s",
            values: "120;110;100;90;80;70;60;50;40;140;120",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
          _("animate", {
            attributeName: "y",
            begin: "0.5s",
            dur: "1s",
            values: "10;15;20;25;30;35;40;45;50;0;10",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ],
      }),
    ],
  });
}
var V2 = Object.defineProperty,
  sa = Object.getOwnPropertySymbols,
  v1 = Object.prototype.hasOwnProperty,
  h1 = Object.prototype.propertyIsEnumerable,
  Um = (e, t, r) =>
    t in e
      ? V2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Gm = (e, t) => {
    for (var r in t || (t = {})) v1.call(t, r) && Um(e, r, t[r]);
    if (sa) for (var r of sa(t)) h1.call(t, r) && Um(e, r, t[r]);
    return e;
  },
  Ym = (e, t) => {
    var r = {};
    for (var n in e) v1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && sa)
      for (var n of sa(e)) t.indexOf(n) < 0 && h1.call(e, n) && (r[n] = e[n]);
    return r;
  };
function H2(e) {
  var t = e,
    { size: r, color: n } = t,
    o = Ym(t, ["size", "color"]);
  const i = o,
    { style: l } = i,
    a = Ym(i, ["style"]);
  return _("svg", {
    ...Gm(
      {
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: n,
        style: Gm({ width: r, height: r }, l),
      },
      a
    ),
    children: _("g", {
      fill: "none",
      fillRule: "evenodd",
      children: U("g", {
        transform: "translate(2.5 2.5)",
        strokeWidth: "5",
        children: [
          _("circle", { strokeOpacity: ".5", cx: "16", cy: "16", r: "16" }),
          _("path", {
            d: "M32 16c0-9.94-8.06-16-16-16",
            children: _("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              from: "0 16 16",
              to: "360 16 16",
              dur: "1s",
              repeatCount: "indefinite",
            }),
          }),
        ],
      }),
    }),
  });
}
var B2 = Object.defineProperty,
  ca = Object.getOwnPropertySymbols,
  g1 = Object.prototype.hasOwnProperty,
  y1 = Object.prototype.propertyIsEnumerable,
  Xm = (e, t, r) =>
    t in e
      ? B2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Qm = (e, t) => {
    for (var r in t || (t = {})) g1.call(t, r) && Xm(e, r, t[r]);
    if (ca) for (var r of ca(t)) y1.call(t, r) && Xm(e, r, t[r]);
    return e;
  },
  Km = (e, t) => {
    var r = {};
    for (var n in e) g1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ca)
      for (var n of ca(e)) t.indexOf(n) < 0 && y1.call(e, n) && (r[n] = e[n]);
    return r;
  };
function W2(e) {
  var t = e,
    { size: r, color: n } = t,
    o = Km(t, ["size", "color"]);
  const i = o,
    { style: l } = i,
    a = Km(i, ["style"]);
  return U("svg", {
    ...Qm(
      {
        viewBox: "0 0 120 30",
        xmlns: "http://www.w3.org/2000/svg",
        fill: n,
        style: Qm({ width: r }, l),
      },
      a
    ),
    children: [
      U("circle", {
        cx: "15",
        cy: "15",
        r: "15",
        children: [
          _("animate", {
            attributeName: "r",
            from: "15",
            to: "15",
            begin: "0s",
            dur: "0.8s",
            values: "15;9;15",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
          _("animate", {
            attributeName: "fill-opacity",
            from: "1",
            to: "1",
            begin: "0s",
            dur: "0.8s",
            values: "1;.5;1",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ],
      }),
      U("circle", {
        cx: "60",
        cy: "15",
        r: "9",
        fillOpacity: "0.3",
        children: [
          _("animate", {
            attributeName: "r",
            from: "9",
            to: "9",
            begin: "0s",
            dur: "0.8s",
            values: "9;15;9",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
          _("animate", {
            attributeName: "fill-opacity",
            from: "0.5",
            to: "0.5",
            begin: "0s",
            dur: "0.8s",
            values: ".5;1;.5",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ],
      }),
      U("circle", {
        cx: "105",
        cy: "15",
        r: "15",
        children: [
          _("animate", {
            attributeName: "r",
            from: "15",
            to: "15",
            begin: "0s",
            dur: "0.8s",
            values: "15;9;15",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
          _("animate", {
            attributeName: "fill-opacity",
            from: "1",
            to: "1",
            begin: "0s",
            dur: "0.8s",
            values: "1;.5;1",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ],
      }),
    ],
  });
}
var U2 = Object.defineProperty,
  ua = Object.getOwnPropertySymbols,
  w1 = Object.prototype.hasOwnProperty,
  _1 = Object.prototype.propertyIsEnumerable,
  Zm = (e, t, r) =>
    t in e
      ? U2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  G2 = (e, t) => {
    for (var r in t || (t = {})) w1.call(t, r) && Zm(e, r, t[r]);
    if (ua) for (var r of ua(t)) _1.call(t, r) && Zm(e, r, t[r]);
    return e;
  },
  Y2 = (e, t) => {
    var r = {};
    for (var n in e) w1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ua)
      for (var n of ua(e)) t.indexOf(n) < 0 && _1.call(e, n) && (r[n] = e[n]);
    return r;
  };
const zc = { bars: F2, oval: H2, dots: W2 },
  X2 = { xs: x(18), sm: x(22), md: x(36), lg: x(44), xl: x(58) },
  Q2 = { size: "md" };
function hd(e) {
  const t = Z("Loader", Q2, e),
    { size: r, color: n, variant: o } = t,
    i = Y2(t, ["size", "color", "variant"]),
    l = nt(),
    a = o in zc ? o : l.loader;
  return _(re, {
    ...G2(
      {
        role: "presentation",
        component: zc[a] || zc.bars,
        size: L({ size: r, sizes: X2 }),
        color: l.fn.variant({
          variant: "filled",
          primaryFallback: !1,
          color: n || l.primaryColor,
        }).background,
      },
      i
    ),
  });
}
hd.displayName = "@mantine/core/Loader";
var K2 = Object.defineProperty,
  fa = Object.getOwnPropertySymbols,
  S1 = Object.prototype.hasOwnProperty,
  x1 = Object.prototype.propertyIsEnumerable,
  Jm = (e, t, r) =>
    t in e
      ? K2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  qm = (e, t) => {
    for (var r in t || (t = {})) S1.call(t, r) && Jm(e, r, t[r]);
    if (fa) for (var r of fa(t)) x1.call(t, r) && Jm(e, r, t[r]);
    return e;
  },
  Z2 = (e, t) => {
    var r = {};
    for (var n in e) S1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && fa)
      for (var n of fa(e)) t.indexOf(n) < 0 && x1.call(e, n) && (r[n] = e[n]);
    return r;
  };
const J2 = { color: "gray", size: "md", variant: "subtle" },
  b1 = m.exports.forwardRef((e, t) => {
    const r = Z("ActionIcon", J2, e),
      {
        className: n,
        color: o,
        children: i,
        radius: l,
        size: a,
        variant: s,
        gradient: c,
        disabled: f,
        loaderProps: u,
        loading: d,
        unstyled: h,
        __staticSelector: y,
      } = r,
      w = Z2(r, [
        "className",
        "color",
        "children",
        "radius",
        "size",
        "variant",
        "gradient",
        "disabled",
        "loaderProps",
        "loading",
        "unstyled",
        "__staticSelector",
      ]),
      {
        classes: P,
        cx: v,
        theme: p,
      } = A2(
        { radius: l, color: o, gradient: c },
        { name: ["ActionIcon", y], unstyled: h, size: a, variant: s }
      ),
      g = _(hd, {
        ...qm(
          {
            color: p.fn.variant({ color: o, variant: s }).color,
            size: "100%",
            "data-action-icon-loader": !0,
          },
          u
        ),
      });
    return _(d1, {
      ...qm(
        {
          className: v(P.root, n),
          ref: t,
          disabled: f,
          "data-disabled": f || void 0,
          "data-loading": d || void 0,
          unstyled: h,
        },
        w
      ),
      children: d ? g : i,
    });
  });
b1.displayName = "@mantine/core/ActionIcon";
const da = b1;
var q2 = Object.defineProperty,
  eC = Object.defineProperties,
  tC = Object.getOwnPropertyDescriptors,
  pa = Object.getOwnPropertySymbols,
  P1 = Object.prototype.hasOwnProperty,
  $1 = Object.prototype.propertyIsEnumerable,
  ev = (e, t, r) =>
    t in e
      ? q2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  rC = (e, t) => {
    for (var r in t || (t = {})) P1.call(t, r) && ev(e, r, t[r]);
    if (pa) for (var r of pa(t)) $1.call(t, r) && ev(e, r, t[r]);
    return e;
  },
  nC = (e, t) => eC(e, tC(t)),
  oC = (e, t) => {
    var r = {};
    for (var n in e) P1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && pa)
      for (var n of pa(e)) t.indexOf(n) < 0 && $1.call(e, n) && (r[n] = e[n]);
    return r;
  };
function O1(e) {
  const t = Z("Portal", {}, e),
    { children: r, target: n, className: o, innerRef: i } = t,
    l = oC(t, ["children", "target", "className", "innerRef"]),
    a = nt(),
    [s, c] = m.exports.useState(!1),
    f = m.exports.useRef();
  return (
    pd(
      () => (
        c(!0),
        (f.current = n
          ? typeof n == "string"
            ? document.querySelector(n)
            : n
          : document.createElement("div")),
        n || document.body.appendChild(f.current),
        () => {
          !n && document.body.removeChild(f.current);
        }
      ),
      [n]
    ),
    s
      ? hi.exports.createPortal(
          _("div", {
            ...nC(rC({ className: o, dir: a.dir }, l), { ref: i }),
            children: r,
          }),
          f.current
        )
      : null
  );
}
O1.displayName = "@mantine/core/Portal";
var iC = Object.defineProperty,
  ma = Object.getOwnPropertySymbols,
  C1 = Object.prototype.hasOwnProperty,
  E1 = Object.prototype.propertyIsEnumerable,
  tv = (e, t, r) =>
    t in e
      ? iC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  lC = (e, t) => {
    for (var r in t || (t = {})) C1.call(t, r) && tv(e, r, t[r]);
    if (ma) for (var r of ma(t)) E1.call(t, r) && tv(e, r, t[r]);
    return e;
  },
  aC = (e, t) => {
    var r = {};
    for (var n in e) C1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ma)
      for (var n of ma(e)) t.indexOf(n) < 0 && E1.call(e, n) && (r[n] = e[n]);
    return r;
  };
function Bs(e) {
  var t = e,
    { withinPortal: r = !0, children: n } = t,
    o = aC(t, ["withinPortal", "children"]);
  return r ? _(O1, { ...lC({}, o), children: n }) : _(Br, { children: n });
}
Bs.displayName = "@mantine/core/OptionalPortal";
var sC = Object.defineProperty,
  va = Object.getOwnPropertySymbols,
  k1 = Object.prototype.hasOwnProperty,
  R1 = Object.prototype.propertyIsEnumerable,
  rv = (e, t, r) =>
    t in e
      ? sC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  nv = (e, t) => {
    for (var r in t || (t = {})) k1.call(t, r) && rv(e, r, t[r]);
    if (va) for (var r of va(t)) R1.call(t, r) && rv(e, r, t[r]);
    return e;
  },
  cC = (e, t) => {
    var r = {};
    for (var n in e) k1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && va)
      for (var n of va(e)) t.indexOf(n) < 0 && R1.call(e, n) && (r[n] = e[n]);
    return r;
  };
function N1(e) {
  const t = e,
    { width: r, height: n, style: o } = t,
    i = cC(t, ["width", "height", "style"]);
  return _("svg", {
    ...nv(
      {
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: nv({ width: r, height: n }, o),
      },
      i
    ),
    children: _("path", {
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }),
  });
}
N1.displayName = "@mantine/core/CloseIcon";
var uC = Object.defineProperty,
  ha = Object.getOwnPropertySymbols,
  T1 = Object.prototype.hasOwnProperty,
  I1 = Object.prototype.propertyIsEnumerable,
  ov = (e, t, r) =>
    t in e
      ? uC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  fC = (e, t) => {
    for (var r in t || (t = {})) T1.call(t, r) && ov(e, r, t[r]);
    if (ha) for (var r of ha(t)) I1.call(t, r) && ov(e, r, t[r]);
    return e;
  },
  dC = (e, t) => {
    var r = {};
    for (var n in e) T1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ha)
      for (var n of ha(e)) t.indexOf(n) < 0 && I1.call(e, n) && (r[n] = e[n]);
    return r;
  };
const pC = { xs: x(12), sm: x(16), md: x(20), lg: x(28), xl: x(34) },
  mC = { size: "sm" },
  z1 = m.exports.forwardRef((e, t) => {
    const r = Z("CloseButton", mC, e),
      { iconSize: n, size: o, children: i } = r,
      l = dC(r, ["iconSize", "size", "children"]),
      a = x(n || pC[o]);
    return _(da, {
      ...fC({ ref: t, __staticSelector: "CloseButton", size: o }, l),
      children: i || _(N1, { width: a, height: a }),
    });
  });
z1.displayName = "@mantine/core/CloseButton";
const vC = z1;
var hC = Object.defineProperty,
  gC = Object.defineProperties,
  yC = Object.getOwnPropertyDescriptors,
  iv = Object.getOwnPropertySymbols,
  wC = Object.prototype.hasOwnProperty,
  _C = Object.prototype.propertyIsEnumerable,
  lv = (e, t, r) =>
    t in e
      ? hC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Zi = (e, t) => {
    for (var r in t || (t = {})) wC.call(t, r) && lv(e, r, t[r]);
    if (iv) for (var r of iv(t)) _C.call(t, r) && lv(e, r, t[r]);
    return e;
  },
  SC = (e, t) => gC(e, yC(t));
function xC({ underline: e, strikethrough: t }) {
  const r = [];
  return (
    e && r.push("underline"),
    t && r.push("line-through"),
    r.length > 0 ? r.join(" ") : "none"
  );
}
function bC({ theme: e, color: t }) {
  return t === "dimmed"
    ? e.fn.dimmed()
    : typeof t == "string" && (t in e.colors || t.split(".")[0] in e.colors)
    ? e.fn.variant({ variant: "filled", color: t }).background
    : t || "inherit";
}
function PC(e) {
  return typeof e == "number"
    ? {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: e,
        WebkitBoxOrient: "vertical",
      }
    : null;
}
function $C({ theme: e, truncate: t }) {
  return t === "start"
    ? {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        direction: e.dir === "ltr" ? "rtl" : "ltr",
        textAlign: e.dir === "ltr" ? "right" : "left",
      }
    : t
    ? { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }
    : null;
}
var OC = J(
  (
    e,
    {
      color: t,
      lineClamp: r,
      truncate: n,
      inline: o,
      inherit: i,
      underline: l,
      gradient: a,
      weight: s,
      transform: c,
      align: f,
      strikethrough: u,
      italic: d,
    },
    { size: h }
  ) => {
    const y = e.fn.variant({ variant: "gradient", gradient: a });
    return {
      root: SC(
        Zi(
          Zi(Zi(Zi({}, e.fn.fontStyles()), e.fn.focusStyles()), PC(r)),
          $C({ theme: e, truncate: n })
        ),
        {
          color: bC({ color: t, theme: e }),
          fontFamily: i ? "inherit" : e.fontFamily,
          fontSize:
            i || h === void 0 ? "inherit" : L({ size: h, sizes: e.fontSizes }),
          lineHeight: i ? "inherit" : o ? 1 : e.lineHeight,
          textDecoration: xC({ underline: l, strikethrough: u }),
          WebkitTapHighlightColor: "transparent",
          fontWeight: i ? "inherit" : s,
          textTransform: c,
          textAlign: f,
          fontStyle: d ? "italic" : void 0,
        }
      ),
      gradient: {
        backgroundImage: y.background,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    };
  }
);
const CC = OC;
var EC = Object.defineProperty,
  ga = Object.getOwnPropertySymbols,
  D1 = Object.prototype.hasOwnProperty,
  j1 = Object.prototype.propertyIsEnumerable,
  av = (e, t, r) =>
    t in e
      ? EC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  kC = (e, t) => {
    for (var r in t || (t = {})) D1.call(t, r) && av(e, r, t[r]);
    if (ga) for (var r of ga(t)) j1.call(t, r) && av(e, r, t[r]);
    return e;
  },
  RC = (e, t) => {
    var r = {};
    for (var n in e) D1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ga)
      for (var n of ga(e)) t.indexOf(n) < 0 && j1.call(e, n) && (r[n] = e[n]);
    return r;
  };
const NC = { variant: "text" },
  L1 = m.exports.forwardRef((e, t) => {
    const r = Z("Text", NC, e),
      {
        className: n,
        size: o,
        weight: i,
        transform: l,
        color: a,
        align: s,
        variant: c,
        lineClamp: f,
        truncate: u,
        gradient: d,
        inline: h,
        inherit: y,
        underline: w,
        strikethrough: P,
        italic: v,
        classNames: p,
        styles: g,
        unstyled: S,
        span: b,
        __staticSelector: O,
      } = r,
      $ = RC(r, [
        "className",
        "size",
        "weight",
        "transform",
        "color",
        "align",
        "variant",
        "lineClamp",
        "truncate",
        "gradient",
        "inline",
        "inherit",
        "underline",
        "strikethrough",
        "italic",
        "classNames",
        "styles",
        "unstyled",
        "span",
        "__staticSelector",
      ]),
      { classes: C, cx: R } = CC(
        {
          color: a,
          lineClamp: f,
          truncate: u,
          inline: h,
          inherit: y,
          underline: w,
          strikethrough: P,
          italic: v,
          weight: i,
          transform: l,
          align: s,
          gradient: d,
        },
        { unstyled: S, name: O || "Text", variant: c, size: o }
      );
    return _(re, {
      ...kC(
        {
          ref: t,
          className: R(C.root, { [C.gradient]: c === "gradient" }, n),
          component: b ? "span" : "div",
        },
        $
      ),
    });
  });
L1.displayName = "@mantine/core/Text";
const _t = L1,
  Ji = { xs: x(1), sm: x(2), md: x(3), lg: x(4), xl: x(5) };
function qi(e, t) {
  const r = e.fn.variant({ variant: "outline", color: t }).border;
  return typeof t == "string" && (t in e.colors || t.split(".")[0] in e.colors)
    ? r
    : t === void 0
    ? e.colorScheme === "dark"
      ? e.colors.dark[4]
      : e.colors.gray[4]
    : t;
}
var TC = J((e, { color: t }, { size: r, variant: n }) => ({
  root: {},
  withLabel: { borderTop: "0 !important" },
  left: { "&::before": { display: "none" } },
  right: { "&::after": { display: "none" } },
  label: {
    display: "flex",
    alignItems: "center",
    "&::before": {
      content: '""',
      flex: 1,
      height: x(1),
      borderTop: `${L({ size: r, sizes: Ji })} ${n} ${qi(e, t)}`,
      marginRight: e.spacing.xs,
    },
    "&::after": {
      content: '""',
      flex: 1,
      borderTop: `${L({ size: r, sizes: Ji })} ${n} ${qi(e, t)}`,
      marginLeft: e.spacing.xs,
    },
  },
  labelDefaultStyles: {
    color:
      t === "dark"
        ? e.colors.dark[1]
        : e.fn.themeColor(
            t,
            e.colorScheme === "dark" ? 5 : e.fn.primaryShade(),
            !1
          ),
  },
  horizontal: {
    border: 0,
    borderTopWidth: x(L({ size: r, sizes: Ji })),
    borderTopColor: qi(e, t),
    borderTopStyle: n,
    margin: 0,
  },
  vertical: {
    border: 0,
    alignSelf: "stretch",
    height: "auto",
    borderLeftWidth: x(L({ size: r, sizes: Ji })),
    borderLeftColor: qi(e, t),
    borderLeftStyle: n,
  },
}));
const IC = TC;
var zC = Object.defineProperty,
  DC = Object.defineProperties,
  jC = Object.getOwnPropertyDescriptors,
  ya = Object.getOwnPropertySymbols,
  A1 = Object.prototype.hasOwnProperty,
  M1 = Object.prototype.propertyIsEnumerable,
  sv = (e, t, r) =>
    t in e
      ? zC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  cv = (e, t) => {
    for (var r in t || (t = {})) A1.call(t, r) && sv(e, r, t[r]);
    if (ya) for (var r of ya(t)) M1.call(t, r) && sv(e, r, t[r]);
    return e;
  },
  LC = (e, t) => DC(e, jC(t)),
  AC = (e, t) => {
    var r = {};
    for (var n in e) A1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ya)
      for (var n of ya(e)) t.indexOf(n) < 0 && M1.call(e, n) && (r[n] = e[n]);
    return r;
  };
const MC = {
    orientation: "horizontal",
    size: "xs",
    labelPosition: "left",
    variant: "solid",
  },
  Ku = m.exports.forwardRef((e, t) => {
    const r = Z("Divider", MC, e),
      {
        className: n,
        color: o,
        orientation: i,
        size: l,
        label: a,
        labelPosition: s,
        labelProps: c,
        variant: f,
        styles: u,
        classNames: d,
        unstyled: h,
      } = r,
      y = AC(r, [
        "className",
        "color",
        "orientation",
        "size",
        "label",
        "labelPosition",
        "labelProps",
        "variant",
        "styles",
        "classNames",
        "unstyled",
      ]),
      { classes: w, cx: P } = IC(
        { color: o },
        {
          classNames: d,
          styles: u,
          unstyled: h,
          name: "Divider",
          variant: f,
          size: l,
        }
      ),
      v = i === "vertical",
      p = i === "horizontal",
      g = !!a && p,
      S = !(c != null && c.color);
    return _(re, {
      ...cv(
        {
          ref: t,
          className: P(
            w.root,
            { [w.vertical]: v, [w.horizontal]: p, [w.withLabel]: g },
            n
          ),
          role: "separator",
        },
        y
      ),
      children:
        g &&
        _(_t, {
          ...LC(cv({}, c), {
            size: (c == null ? void 0 : c.size) || "xs",
            mt: x(2),
            className: P(w.label, w[s], { [w.labelDefaultStyles]: S }),
          }),
          children: a,
        }),
    });
  });
Ku.displayName = "@mantine/core/Divider";
var FC = Object.defineProperty,
  VC = Object.defineProperties,
  HC = Object.getOwnPropertyDescriptors,
  uv = Object.getOwnPropertySymbols,
  BC = Object.prototype.hasOwnProperty,
  WC = Object.prototype.propertyIsEnumerable,
  fv = (e, t, r) =>
    t in e
      ? FC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  dv = (e, t) => {
    for (var r in t || (t = {})) BC.call(t, r) && fv(e, r, t[r]);
    if (uv) for (var r of uv(t)) WC.call(t, r) && fv(e, r, t[r]);
    return e;
  },
  UC = (e, t) => VC(e, HC(t)),
  GC = J((e, t, { size: r }) => ({
    item: UC(dv({}, e.fn.fontStyles()), {
      boxSizing: "border-box",
      wordBreak: "break-all",
      textAlign: "left",
      width: "100%",
      padding: `calc(${L({ size: r, sizes: e.spacing })} / 1.5) ${L({
        size: r,
        sizes: e.spacing,
      })}`,
      cursor: "pointer",
      fontSize: L({ size: r, sizes: e.fontSizes }),
      color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
      borderRadius: e.fn.radius(),
      "&[data-hovered]": {
        backgroundColor:
          e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[1],
      },
      "&[data-selected]": dv(
        {
          backgroundColor: e.fn.variant({ variant: "filled" }).background,
          color: e.fn.variant({ variant: "filled" }).color,
        },
        e.fn.hover({
          backgroundColor: e.fn.variant({ variant: "filled" }).hover,
        })
      ),
      "&[data-disabled]": { cursor: "default", color: e.colors.dark[2] },
    }),
    nothingFound: {
      boxSizing: "border-box",
      color: e.colors.gray[6],
      paddingTop: `calc(${L({ size: r, sizes: e.spacing })} / 2)`,
      paddingBottom: `calc(${L({ size: r, sizes: e.spacing })} / 2)`,
      textAlign: "center",
    },
    separator: {
      boxSizing: "border-box",
      textAlign: "left",
      width: "100%",
      padding: `calc(${L({ size: r, sizes: e.spacing })} / 1.5) ${L({
        size: r,
        sizes: e.spacing,
      })}`,
    },
    separatorLabel: {
      color: e.colorScheme === "dark" ? e.colors.dark[3] : e.colors.gray[5],
    },
  }));
const YC = GC;
var XC = Object.defineProperty,
  pv = Object.getOwnPropertySymbols,
  QC = Object.prototype.hasOwnProperty,
  KC = Object.prototype.propertyIsEnumerable,
  mv = (e, t, r) =>
    t in e
      ? XC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ZC = (e, t) => {
    for (var r in t || (t = {})) QC.call(t, r) && mv(e, r, t[r]);
    if (pv) for (var r of pv(t)) KC.call(t, r) && mv(e, r, t[r]);
    return e;
  };
function F1({
  data: e,
  hovered: t,
  classNames: r,
  styles: n,
  isItemSelected: o,
  uuid: i,
  __staticSelector: l,
  onItemHover: a,
  onItemSelect: s,
  itemsRefs: c,
  itemComponent: f,
  size: u,
  nothingFound: d,
  creatable: h,
  createLabel: y,
  unstyled: w,
  variant: P,
}) {
  const { classes: v } = YC(null, {
      classNames: r,
      styles: n,
      unstyled: w,
      name: l,
      variant: P,
      size: u,
    }),
    p = [],
    g = [];
  let S = null;
  const b = ($, C) => {
    const R = typeof o == "function" ? o($.value) : !1;
    return _(f, {
      ...ZC(
        {
          key: $.value,
          className: v.item,
          "data-disabled": $.disabled || void 0,
          "data-hovered": (!$.disabled && t === C) || void 0,
          "data-selected": (!$.disabled && R) || void 0,
          selected: R,
          onMouseEnter: () => a(C),
          id: `${i}-${C}`,
          role: "option",
          tabIndex: -1,
          "aria-selected": t === C,
          ref: (E) => {
            c && c.current && (c.current[$.value] = E);
          },
          onMouseDown: $.disabled
            ? null
            : (E) => {
                E.preventDefault(), s($);
              },
          disabled: $.disabled,
          variant: P,
        },
        $
      ),
    });
  };
  let O = null;
  if (
    (e.forEach(($, C) => {
      $.creatable
        ? (S = C)
        : $.group
        ? (O !== $.group &&
            ((O = $.group),
            g.push(
              _(
                "div",
                {
                  className: v.separator,
                  children: _(Ku, {
                    classNames: { label: v.separatorLabel },
                    label: $.group,
                  }),
                },
                `__mantine-divider-${C}`
              )
            )),
          g.push(b($, C)))
        : p.push(b($, C));
    }),
    h)
  ) {
    const $ = e[S];
    p.push(
      _(
        "div",
        {
          className: v.item,
          "data-hovered": t === S || void 0,
          onMouseEnter: () => a(S),
          onMouseDown: (C) => {
            C.preventDefault(), s($);
          },
          tabIndex: -1,
          ref: (C) => {
            c && c.current && (c.current[$.value] = C);
          },
          children: y,
        },
        md()
      )
    );
  }
  return (
    g.length > 0 &&
      p.length > 0 &&
      p.unshift(
        _(
          "div",
          { className: v.separator, children: _(Ku, {}) },
          "empty-group-separator"
        )
      ),
    g.length > 0 || p.length > 0
      ? U(Br, { children: [g, p] })
      : _(_t, { size: u, unstyled: w, className: v.nothingFound, children: d })
  );
}
F1.displayName = "@mantine/core/SelectItems";
var JC = Object.defineProperty,
  wa = Object.getOwnPropertySymbols,
  V1 = Object.prototype.hasOwnProperty,
  H1 = Object.prototype.propertyIsEnumerable,
  vv = (e, t, r) =>
    t in e
      ? JC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  qC = (e, t) => {
    for (var r in t || (t = {})) V1.call(t, r) && vv(e, r, t[r]);
    if (wa) for (var r of wa(t)) H1.call(t, r) && vv(e, r, t[r]);
    return e;
  },
  eE = (e, t) => {
    var r = {};
    for (var n in e) V1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && wa)
      for (var n of wa(e)) t.indexOf(n) < 0 && H1.call(e, n) && (r[n] = e[n]);
    return r;
  };
const B1 = m.exports.forwardRef((e, t) => {
  var r = e,
    { label: n, value: o } = r,
    i = eE(r, ["label", "value"]);
  return _("div", { ...qC({ ref: t }, i), children: n || o });
});
B1.displayName = "@mantine/core/DefaultItem";
function tE(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function W1(...e) {
  return (t) => e.forEach((r) => tE(r, t));
}
function Sn(...e) {
  return m.exports.useCallback(W1(...e), e);
}
const U1 = m.exports.forwardRef((e, t) => {
  const { children: r, ...n } = e,
    o = m.exports.Children.toArray(r),
    i = o.find(nE);
  if (i) {
    const l = i.props.children,
      a = o.map((s) =>
        s === i
          ? m.exports.Children.count(l) > 1
            ? m.exports.Children.only(null)
            : m.exports.isValidElement(l)
            ? l.props.children
            : null
          : s
      );
    return m.exports.createElement(
      Zu,
      me({}, n, { ref: t }),
      m.exports.isValidElement(l) ? m.exports.cloneElement(l, void 0, a) : null
    );
  }
  return m.exports.createElement(Zu, me({}, n, { ref: t }), r);
});
U1.displayName = "Slot";
const Zu = m.exports.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  return m.exports.isValidElement(r)
    ? m.exports.cloneElement(r, { ...oE(n, r.props), ref: W1(t, r.ref) })
    : m.exports.Children.count(r) > 1
    ? m.exports.Children.only(null)
    : null;
});
Zu.displayName = "SlotClone";
const rE = ({ children: e }) =>
  m.exports.createElement(m.exports.Fragment, null, e);
function nE(e) {
  return m.exports.isValidElement(e) && e.type === rE;
}
function oE(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n],
      i = t[n];
    /^on[A-Z]/.test(n)
      ? o && i
        ? (r[n] = (...a) => {
            i(...a), o(...a);
          })
        : o && (r[n] = o)
      : n === "style"
      ? (r[n] = { ...o, ...i })
      : n === "className" && (r[n] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
const iE = [
    "a",
    "button",
    "div",
    "h2",
    "h3",
    "img",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Pi = iE.reduce((e, t) => {
    const r = m.exports.forwardRef((n, o) => {
      const { asChild: i, ...l } = n,
        a = i ? U1 : t;
      return (
        m.exports.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        m.exports.createElement(a, me({}, l, { ref: o }))
      );
    });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {}),
  Ju = Boolean(globalThis == null ? void 0 : globalThis.document)
    ? m.exports.useLayoutEffect
    : () => {};
function lE(e, t) {
  return m.exports.useReducer((r, n) => {
    const o = t[r][n];
    return o != null ? o : r;
  }, e);
}
const $i = (e) => {
  const { present: t, children: r } = e,
    n = aE(t),
    o =
      typeof r == "function"
        ? r({ present: n.isPresent })
        : m.exports.Children.only(r),
    i = Sn(n.ref, o.ref);
  return typeof r == "function" || n.isPresent
    ? m.exports.cloneElement(o, { ref: i })
    : null;
};
$i.displayName = "Presence";
function aE(e) {
  const [t, r] = m.exports.useState(),
    n = m.exports.useRef({}),
    o = m.exports.useRef(e),
    i = m.exports.useRef("none"),
    l = e ? "mounted" : "unmounted",
    [a, s] = lE(l, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    m.exports.useEffect(() => {
      const c = el(n.current);
      i.current = a === "mounted" ? c : "none";
    }, [a]),
    Ju(() => {
      const c = n.current,
        f = o.current;
      if (f !== e) {
        const d = i.current,
          h = el(c);
        e
          ? s("MOUNT")
          : h === "none" || (c == null ? void 0 : c.display) === "none"
          ? s("UNMOUNT")
          : s(f && d !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, s]),
    Ju(() => {
      if (t) {
        const c = (u) => {
            const h = el(n.current).includes(u.animationName);
            u.target === t &&
              h &&
              hi.exports.flushSync(() => s("ANIMATION_END"));
          },
          f = (u) => {
            u.target === t && (i.current = el(n.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", c),
          t.addEventListener("animationend", c),
          () => {
            t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", c),
              t.removeEventListener("animationend", c);
          }
        );
      } else s("ANIMATION_END");
    }, [t, s]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: m.exports.useCallback((c) => {
        c && (n.current = getComputedStyle(c)), r(c);
      }, []),
    }
  );
}
function el(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function sE(e, t = []) {
  let r = [];
  function n(i, l) {
    const a = m.exports.createContext(l),
      s = r.length;
    r = [...r, l];
    function c(u) {
      const { scope: d, children: h, ...y } = u,
        w = (d == null ? void 0 : d[e][s]) || a,
        P = m.exports.useMemo(() => y, Object.values(y));
      return m.exports.createElement(w.Provider, { value: P }, h);
    }
    function f(u, d) {
      const h = (d == null ? void 0 : d[e][s]) || a,
        y = m.exports.useContext(h);
      if (y) return y;
      if (l !== void 0) return l;
      throw new Error(`\`${u}\` must be used within \`${i}\``);
    }
    return (c.displayName = i + "Provider"), [c, f];
  }
  const o = () => {
    const i = r.map((l) => m.exports.createContext(l));
    return function (a) {
      const s = (a == null ? void 0 : a[e]) || i;
      return m.exports.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: s } }),
        [a, s]
      );
    };
  };
  return (o.scopeName = e), [n, cE(o, ...t)];
}
function cE(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const l = n.reduce((a, { useScope: s, scopeName: c }) => {
        const u = s(i)[`__scope${c}`];
        return { ...a, ...u };
      }, {});
      return m.exports.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return (r.scopeName = t.scopeName), r;
}
function tn(e) {
  const t = m.exports.useRef(e);
  return (
    m.exports.useEffect(() => {
      t.current = e;
    }),
    m.exports.useMemo(
      () =>
        (...r) => {
          var n;
          return (n = t.current) === null || n === void 0
            ? void 0
            : n.call(t, ...r);
        },
      []
    )
  );
}
const uE = m.exports.createContext(void 0);
function fE(e) {
  const t = m.exports.useContext(uE);
  return e || t || "ltr";
}
function dE(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function fn(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), r === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function pE(e, t) {
  return m.exports.useReducer((r, n) => {
    const o = t[r][n];
    return o != null ? o : r;
  }, e);
}
const G1 = "ScrollArea",
  [Y1, FT] = sE(G1),
  [mE, Ct] = Y1(G1),
  vE = m.exports.forwardRef((e, t) => {
    const {
        __scopeScrollArea: r,
        type: n = "hover",
        dir: o,
        scrollHideDelay: i = 600,
        ...l
      } = e,
      [a, s] = m.exports.useState(null),
      [c, f] = m.exports.useState(null),
      [u, d] = m.exports.useState(null),
      [h, y] = m.exports.useState(null),
      [w, P] = m.exports.useState(null),
      [v, p] = m.exports.useState(0),
      [g, S] = m.exports.useState(0),
      [b, O] = m.exports.useState(!1),
      [$, C] = m.exports.useState(!1),
      R = Sn(t, (z) => s(z)),
      E = fE(o);
    return m.exports.createElement(
      mE,
      {
        scope: r,
        type: n,
        dir: E,
        scrollHideDelay: i,
        scrollArea: a,
        viewport: c,
        onViewportChange: f,
        content: u,
        onContentChange: d,
        scrollbarX: h,
        onScrollbarXChange: y,
        scrollbarXEnabled: b,
        onScrollbarXEnabledChange: O,
        scrollbarY: w,
        onScrollbarYChange: P,
        scrollbarYEnabled: $,
        onScrollbarYEnabledChange: C,
        onCornerWidthChange: p,
        onCornerHeightChange: S,
      },
      m.exports.createElement(
        Pi.div,
        me({ dir: E }, l, {
          ref: R,
          style: {
            position: "relative",
            ["--radix-scroll-area-corner-width"]: v + "px",
            ["--radix-scroll-area-corner-height"]: g + "px",
            ...e.style,
          },
        })
      )
    );
  }),
  hE = "ScrollAreaViewport",
  gE = m.exports.forwardRef((e, t) => {
    const { __scopeScrollArea: r, children: n, ...o } = e,
      i = Ct(hE, r),
      l = m.exports.useRef(null),
      a = Sn(t, l, i.onViewportChange);
    return m.exports.createElement(
      m.exports.Fragment,
      null,
      m.exports.createElement("style", {
        dangerouslySetInnerHTML: {
          __html:
            "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}",
        },
      }),
      m.exports.createElement(
        Pi.div,
        me({ "data-radix-scroll-area-viewport": "" }, o, {
          ref: a,
          style: {
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style,
          },
        }),
        m.exports.createElement(
          "div",
          {
            ref: i.onContentChange,
            style: { minWidth: "100%", display: "table" },
          },
          n
        )
      )
    );
  }),
  wr = "ScrollAreaScrollbar",
  yE = m.exports.forwardRef((e, t) => {
    const { forceMount: r, ...n } = e,
      o = Ct(wr, e.__scopeScrollArea),
      { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: l } = o,
      a = e.orientation === "horizontal";
    return (
      m.exports.useEffect(
        () => (
          a ? i(!0) : l(!0),
          () => {
            a ? i(!1) : l(!1);
          }
        ),
        [a, i, l]
      ),
      o.type === "hover"
        ? m.exports.createElement(wE, me({}, n, { ref: t, forceMount: r }))
        : o.type === "scroll"
        ? m.exports.createElement(_E, me({}, n, { ref: t, forceMount: r }))
        : o.type === "auto"
        ? m.exports.createElement(X1, me({}, n, { ref: t, forceMount: r }))
        : o.type === "always"
        ? m.exports.createElement(gd, me({}, n, { ref: t }))
        : null
    );
  }),
  wE = m.exports.forwardRef((e, t) => {
    const { forceMount: r, ...n } = e,
      o = Ct(wr, e.__scopeScrollArea),
      [i, l] = m.exports.useState(!1);
    return (
      m.exports.useEffect(() => {
        const a = o.scrollArea;
        let s = 0;
        if (a) {
          const c = () => {
              window.clearTimeout(s), l(!0);
            },
            f = () => {
              s = window.setTimeout(() => l(!1), o.scrollHideDelay);
            };
          return (
            a.addEventListener("pointerenter", c),
            a.addEventListener("pointerleave", f),
            () => {
              window.clearTimeout(s),
                a.removeEventListener("pointerenter", c),
                a.removeEventListener("pointerleave", f);
            }
          );
        }
      }, [o.scrollArea, o.scrollHideDelay]),
      m.exports.createElement(
        $i,
        { present: r || i },
        m.exports.createElement(
          X1,
          me({ "data-state": i ? "visible" : "hidden" }, n, { ref: t })
        )
      )
    );
  }),
  _E = m.exports.forwardRef((e, t) => {
    const { forceMount: r, ...n } = e,
      o = Ct(wr, e.__scopeScrollArea),
      i = e.orientation === "horizontal",
      l = Us(() => s("SCROLL_END"), 100),
      [a, s] = pE("hidden", {
        hidden: { SCROLL: "scrolling" },
        scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
        interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
        idle: {
          HIDE: "hidden",
          SCROLL: "scrolling",
          POINTER_ENTER: "interacting",
        },
      });
    return (
      m.exports.useEffect(() => {
        if (a === "idle") {
          const c = window.setTimeout(() => s("HIDE"), o.scrollHideDelay);
          return () => window.clearTimeout(c);
        }
      }, [a, o.scrollHideDelay, s]),
      m.exports.useEffect(() => {
        const c = o.viewport,
          f = i ? "scrollLeft" : "scrollTop";
        if (c) {
          let u = c[f];
          const d = () => {
            const h = c[f];
            u !== h && (s("SCROLL"), l()), (u = h);
          };
          return (
            c.addEventListener("scroll", d),
            () => c.removeEventListener("scroll", d)
          );
        }
      }, [o.viewport, i, s, l]),
      m.exports.createElement(
        $i,
        { present: r || a !== "hidden" },
        m.exports.createElement(
          gd,
          me({ "data-state": a === "hidden" ? "hidden" : "visible" }, n, {
            ref: t,
            onPointerEnter: fn(e.onPointerEnter, () => s("POINTER_ENTER")),
            onPointerLeave: fn(e.onPointerLeave, () => s("POINTER_LEAVE")),
          })
        )
      )
    );
  }),
  X1 = m.exports.forwardRef((e, t) => {
    const r = Ct(wr, e.__scopeScrollArea),
      { forceMount: n, ...o } = e,
      [i, l] = m.exports.useState(!1),
      a = e.orientation === "horizontal",
      s = Us(() => {
        if (r.viewport) {
          const c = r.viewport.offsetWidth < r.viewport.scrollWidth,
            f = r.viewport.offsetHeight < r.viewport.scrollHeight;
          l(a ? c : f);
        }
      }, 10);
    return (
      io(r.viewport, s),
      io(r.content, s),
      m.exports.createElement(
        $i,
        { present: n || i },
        m.exports.createElement(
          gd,
          me({ "data-state": i ? "visible" : "hidden" }, o, { ref: t })
        )
      )
    );
  }),
  gd = m.exports.forwardRef((e, t) => {
    const { orientation: r = "vertical", ...n } = e,
      o = Ct(wr, e.__scopeScrollArea),
      i = m.exports.useRef(null),
      l = m.exports.useRef(0),
      [a, s] = m.exports.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      c = J1(a.viewport, a.content),
      f = {
        ...n,
        sizes: a,
        onSizesChange: s,
        hasThumb: Boolean(c > 0 && c < 1),
        onThumbChange: (d) => (i.current = d),
        onThumbPointerUp: () => (l.current = 0),
        onThumbPointerDown: (d) => (l.current = d),
      };
    function u(d, h) {
      return EE(d, l.current, a, h);
    }
    return r === "horizontal"
      ? m.exports.createElement(
          SE,
          me({}, f, {
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const d = o.viewport.scrollLeft,
                  h = hv(d, a, o.dir);
                i.current.style.transform = `translate3d(${h}px, 0, 0)`;
              }
            },
            onWheelScroll: (d) => {
              o.viewport && (o.viewport.scrollLeft = d);
            },
            onDragScroll: (d) => {
              o.viewport && (o.viewport.scrollLeft = u(d, o.dir));
            },
          })
        )
      : r === "vertical"
      ? m.exports.createElement(
          xE,
          me({}, f, {
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const d = o.viewport.scrollTop,
                  h = hv(d, a);
                i.current.style.transform = `translate3d(0, ${h}px, 0)`;
              }
            },
            onWheelScroll: (d) => {
              o.viewport && (o.viewport.scrollTop = d);
            },
            onDragScroll: (d) => {
              o.viewport && (o.viewport.scrollTop = u(d));
            },
          })
        )
      : null;
  }),
  SE = m.exports.forwardRef((e, t) => {
    const { sizes: r, onSizesChange: n, ...o } = e,
      i = Ct(wr, e.__scopeScrollArea),
      [l, a] = m.exports.useState(),
      s = m.exports.useRef(null),
      c = Sn(t, s, i.onScrollbarXChange);
    return (
      m.exports.useEffect(() => {
        s.current && a(getComputedStyle(s.current));
      }, [s]),
      m.exports.createElement(
        K1,
        me({ "data-orientation": "horizontal" }, o, {
          ref: c,
          sizes: r,
          style: {
            bottom: 0,
            left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
            right:
              i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
            ["--radix-scroll-area-thumb-width"]: Ws(r) + "px",
            ...e.style,
          },
          onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
          onDragScroll: (f) => e.onDragScroll(f.x),
          onWheelScroll: (f, u) => {
            if (i.viewport) {
              const d = i.viewport.scrollLeft + f.deltaX;
              e.onWheelScroll(d), ew(d, u) && f.preventDefault();
            }
          },
          onResize: () => {
            s.current &&
              i.viewport &&
              l &&
              n({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: s.current.clientWidth,
                  paddingStart: _a(l.paddingLeft),
                  paddingEnd: _a(l.paddingRight),
                },
              });
          },
        })
      )
    );
  }),
  xE = m.exports.forwardRef((e, t) => {
    const { sizes: r, onSizesChange: n, ...o } = e,
      i = Ct(wr, e.__scopeScrollArea),
      [l, a] = m.exports.useState(),
      s = m.exports.useRef(null),
      c = Sn(t, s, i.onScrollbarYChange);
    return (
      m.exports.useEffect(() => {
        s.current && a(getComputedStyle(s.current));
      }, [s]),
      m.exports.createElement(
        K1,
        me({ "data-orientation": "vertical" }, o, {
          ref: c,
          sizes: r,
          style: {
            top: 0,
            right: i.dir === "ltr" ? 0 : void 0,
            left: i.dir === "rtl" ? 0 : void 0,
            bottom: "var(--radix-scroll-area-corner-height)",
            ["--radix-scroll-area-thumb-height"]: Ws(r) + "px",
            ...e.style,
          },
          onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
          onDragScroll: (f) => e.onDragScroll(f.y),
          onWheelScroll: (f, u) => {
            if (i.viewport) {
              const d = i.viewport.scrollTop + f.deltaY;
              e.onWheelScroll(d), ew(d, u) && f.preventDefault();
            }
          },
          onResize: () => {
            s.current &&
              i.viewport &&
              l &&
              n({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: s.current.clientHeight,
                  paddingStart: _a(l.paddingTop),
                  paddingEnd: _a(l.paddingBottom),
                },
              });
          },
        })
      )
    );
  }),
  [bE, Q1] = Y1(wr),
  K1 = m.exports.forwardRef((e, t) => {
    const {
        __scopeScrollArea: r,
        sizes: n,
        hasThumb: o,
        onThumbChange: i,
        onThumbPointerUp: l,
        onThumbPointerDown: a,
        onThumbPositionChange: s,
        onDragScroll: c,
        onWheelScroll: f,
        onResize: u,
        ...d
      } = e,
      h = Ct(wr, r),
      [y, w] = m.exports.useState(null),
      P = Sn(t, (R) => w(R)),
      v = m.exports.useRef(null),
      p = m.exports.useRef(""),
      g = h.viewport,
      S = n.content - n.viewport,
      b = tn(f),
      O = tn(s),
      $ = Us(u, 10);
    function C(R) {
      if (v.current) {
        const E = R.clientX - v.current.left,
          z = R.clientY - v.current.top;
        c({ x: E, y: z });
      }
    }
    return (
      m.exports.useEffect(() => {
        const R = (E) => {
          const z = E.target;
          (y == null ? void 0 : y.contains(z)) && b(E, S);
        };
        return (
          document.addEventListener("wheel", R, { passive: !1 }),
          () => document.removeEventListener("wheel", R, { passive: !1 })
        );
      }, [g, y, S, b]),
      m.exports.useEffect(O, [n, O]),
      io(y, $),
      io(h.content, $),
      m.exports.createElement(
        bE,
        {
          scope: r,
          scrollbar: y,
          hasThumb: o,
          onThumbChange: tn(i),
          onThumbPointerUp: tn(l),
          onThumbPositionChange: O,
          onThumbPointerDown: tn(a),
        },
        m.exports.createElement(
          Pi.div,
          me({}, d, {
            ref: P,
            style: { position: "absolute", ...d.style },
            onPointerDown: fn(e.onPointerDown, (R) => {
              R.button === 0 &&
                (R.target.setPointerCapture(R.pointerId),
                (v.current = y.getBoundingClientRect()),
                (p.current = document.body.style.webkitUserSelect),
                (document.body.style.webkitUserSelect = "none"),
                C(R));
            }),
            onPointerMove: fn(e.onPointerMove, C),
            onPointerUp: fn(e.onPointerUp, (R) => {
              const E = R.target;
              E.hasPointerCapture(R.pointerId) &&
                E.releasePointerCapture(R.pointerId),
                (document.body.style.webkitUserSelect = p.current),
                (v.current = null);
            }),
          })
        )
      )
    );
  }),
  qu = "ScrollAreaThumb",
  PE = m.exports.forwardRef((e, t) => {
    const { forceMount: r, ...n } = e,
      o = Q1(qu, e.__scopeScrollArea);
    return m.exports.createElement(
      $i,
      { present: r || o.hasThumb },
      m.exports.createElement($E, me({ ref: t }, n))
    );
  }),
  $E = m.exports.forwardRef((e, t) => {
    const { __scopeScrollArea: r, style: n, ...o } = e,
      i = Ct(qu, r),
      l = Q1(qu, r),
      { onThumbPositionChange: a } = l,
      s = Sn(t, (u) => l.onThumbChange(u)),
      c = m.exports.useRef(),
      f = Us(() => {
        c.current && (c.current(), (c.current = void 0));
      }, 100);
    return (
      m.exports.useEffect(() => {
        const u = i.viewport;
        if (u) {
          const d = () => {
            if ((f(), !c.current)) {
              const h = kE(u, a);
              (c.current = h), a();
            }
          };
          return (
            a(),
            u.addEventListener("scroll", d),
            () => u.removeEventListener("scroll", d)
          );
        }
      }, [i.viewport, f, a]),
      m.exports.createElement(
        Pi.div,
        me({ "data-state": l.hasThumb ? "visible" : "hidden" }, o, {
          ref: s,
          style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...n,
          },
          onPointerDownCapture: fn(e.onPointerDownCapture, (u) => {
            const h = u.target.getBoundingClientRect(),
              y = u.clientX - h.left,
              w = u.clientY - h.top;
            l.onThumbPointerDown({ x: y, y: w });
          }),
          onPointerUp: fn(e.onPointerUp, l.onThumbPointerUp),
        })
      )
    );
  }),
  Z1 = "ScrollAreaCorner",
  OE = m.exports.forwardRef((e, t) => {
    const r = Ct(Z1, e.__scopeScrollArea),
      n = Boolean(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && n
      ? m.exports.createElement(CE, me({}, e, { ref: t }))
      : null;
  }),
  CE = m.exports.forwardRef((e, t) => {
    const { __scopeScrollArea: r, ...n } = e,
      o = Ct(Z1, r),
      [i, l] = m.exports.useState(0),
      [a, s] = m.exports.useState(0),
      c = Boolean(i && a);
    return (
      io(o.scrollbarX, () => {
        var f;
        const u =
          ((f = o.scrollbarX) === null || f === void 0
            ? void 0
            : f.offsetHeight) || 0;
        o.onCornerHeightChange(u), s(u);
      }),
      io(o.scrollbarY, () => {
        var f;
        const u =
          ((f = o.scrollbarY) === null || f === void 0
            ? void 0
            : f.offsetWidth) || 0;
        o.onCornerWidthChange(u), l(u);
      }),
      c
        ? m.exports.createElement(
            Pi.div,
            me({}, n, {
              ref: t,
              style: {
                width: i,
                height: a,
                position: "absolute",
                right: o.dir === "ltr" ? 0 : void 0,
                left: o.dir === "rtl" ? 0 : void 0,
                bottom: 0,
                ...e.style,
              },
            })
          )
        : null
    );
  });
function _a(e) {
  return e ? parseInt(e, 10) : 0;
}
function J1(e, t) {
  const r = e / t;
  return isNaN(r) ? 0 : r;
}
function Ws(e) {
  const t = J1(e.viewport, e.content),
    r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function EE(e, t, r, n = "ltr") {
  const o = Ws(r),
    i = o / 2,
    l = t || i,
    a = o - l,
    s = r.scrollbar.paddingStart + l,
    c = r.scrollbar.size - r.scrollbar.paddingEnd - a,
    f = r.content - r.viewport,
    u = n === "ltr" ? [0, f] : [f * -1, 0];
  return q1([s, c], u)(e);
}
function hv(e, t, r = "ltr") {
  const n = Ws(t),
    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    i = t.scrollbar.size - o,
    l = t.content - t.viewport,
    a = i - n,
    s = r === "ltr" ? [0, l] : [l * -1, 0],
    c = dE(e, s);
  return q1([0, l], [0, a])(c);
}
function q1(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function ew(e, t) {
  return e > 0 && e < t;
}
const kE = (e, t = () => {}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop },
    n = 0;
  return (
    (function o() {
      const i = { left: e.scrollLeft, top: e.scrollTop },
        l = r.left !== i.left,
        a = r.top !== i.top;
      (l || a) && t(), (r = i), (n = window.requestAnimationFrame(o));
    })(),
    () => window.cancelAnimationFrame(n)
  );
};
function Us(e, t) {
  const r = tn(e),
    n = m.exports.useRef(0);
  return (
    m.exports.useEffect(() => () => window.clearTimeout(n.current), []),
    m.exports.useCallback(() => {
      window.clearTimeout(n.current), (n.current = window.setTimeout(r, t));
    }, [r, t])
  );
}
function io(e, t) {
  const r = tn(t);
  Ju(() => {
    let n = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(n), (n = window.requestAnimationFrame(r));
      });
      return (
        o.observe(e),
        () => {
          window.cancelAnimationFrame(n), o.unobserve(e);
        }
      );
    }
  }, [e, r]);
}
const RE = vE,
  NE = gE,
  gv = yE,
  yv = PE,
  TE = OE;
var IE = J(
  (
    e,
    { scrollbarSize: t, offsetScrollbars: r, scrollbarHovered: n, hidden: o }
  ) => ({
    root: { overflow: "hidden" },
    viewport: {
      width: "100%",
      height: "100%",
      paddingRight: r ? x(t) : void 0,
      paddingBottom: r ? x(t) : void 0,
    },
    scrollbar: {
      display: o ? "none" : "flex",
      userSelect: "none",
      touchAction: "none",
      boxSizing: "border-box",
      padding: `calc(${x(t)}  / 5)`,
      transition: "background-color 150ms ease, opacity 150ms ease",
      "&:hover": {
        backgroundColor:
          e.colorScheme === "dark" ? e.colors.dark[8] : e.colors.gray[0],
        [`& .${Mr("thumb")}`]: {
          backgroundColor:
            e.colorScheme === "dark"
              ? e.fn.rgba(e.white, 0.5)
              : e.fn.rgba(e.black, 0.5),
        },
      },
      '&[data-orientation="vertical"]': { width: x(t) },
      '&[data-orientation="horizontal"]': {
        flexDirection: "column",
        height: x(t),
      },
      '&[data-state="hidden"]': { display: "none", opacity: 0 },
    },
    thumb: {
      ref: Mr("thumb"),
      flex: 1,
      backgroundColor:
        e.colorScheme === "dark"
          ? e.fn.rgba(e.white, 0.4)
          : e.fn.rgba(e.black, 0.4),
      borderRadius: x(t),
      position: "relative",
      transition: "background-color 150ms ease",
      display: o ? "none" : void 0,
      overflow: "hidden",
      "&::before": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        minWidth: x(44),
        minHeight: x(44),
      },
    },
    corner: {
      backgroundColor:
        e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[0],
      transition: "opacity 150ms ease",
      opacity: n ? 1 : 0,
      display: o ? "none" : void 0,
    },
  })
);
const zE = IE;
var DE = Object.defineProperty,
  jE = Object.defineProperties,
  LE = Object.getOwnPropertyDescriptors,
  Sa = Object.getOwnPropertySymbols,
  tw = Object.prototype.hasOwnProperty,
  rw = Object.prototype.propertyIsEnumerable,
  wv = (e, t, r) =>
    t in e
      ? DE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ef = (e, t) => {
    for (var r in t || (t = {})) tw.call(t, r) && wv(e, r, t[r]);
    if (Sa) for (var r of Sa(t)) rw.call(t, r) && wv(e, r, t[r]);
    return e;
  },
  nw = (e, t) => jE(e, LE(t)),
  ow = (e, t) => {
    var r = {};
    for (var n in e) tw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Sa)
      for (var n of Sa(e)) t.indexOf(n) < 0 && rw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const iw = {
    scrollbarSize: 12,
    scrollHideDelay: 1e3,
    type: "hover",
    offsetScrollbars: !1,
  },
  Gs = m.exports.forwardRef((e, t) => {
    const r = Z("ScrollArea", iw, e),
      {
        children: n,
        className: o,
        classNames: i,
        styles: l,
        scrollbarSize: a,
        scrollHideDelay: s,
        type: c,
        dir: f,
        offsetScrollbars: u,
        viewportRef: d,
        onScrollPositionChange: h,
        unstyled: y,
        variant: w,
        viewportProps: P,
      } = r,
      v = ow(r, [
        "children",
        "className",
        "classNames",
        "styles",
        "scrollbarSize",
        "scrollHideDelay",
        "type",
        "dir",
        "offsetScrollbars",
        "viewportRef",
        "onScrollPositionChange",
        "unstyled",
        "variant",
        "viewportProps",
      ]),
      [p, g] = m.exports.useState(!1),
      S = nt(),
      { classes: b, cx: O } = zE(
        {
          scrollbarSize: a,
          offsetScrollbars: u,
          scrollbarHovered: p,
          hidden: c === "never",
        },
        {
          name: "ScrollArea",
          classNames: i,
          styles: l,
          unstyled: y,
          variant: w,
        }
      );
    return _(RE, {
      type: c === "never" ? "always" : c,
      scrollHideDelay: s,
      dir: f || S.dir,
      ref: t,
      asChild: !0,
      children: U(re, {
        ...ef({ className: O(b.root, o) }, v),
        children: [
          _(NE, {
            ...nw(ef({}, P), {
              className: b.viewport,
              ref: d,
              onScroll:
                typeof h == "function"
                  ? ({ currentTarget: $ }) =>
                      h({ x: $.scrollLeft, y: $.scrollTop })
                  : void 0,
            }),
            children: n,
          }),
          _(gv, {
            orientation: "horizontal",
            className: b.scrollbar,
            forceMount: !0,
            onMouseEnter: () => g(!0),
            onMouseLeave: () => g(!1),
            children: _(yv, { className: b.thumb }),
          }),
          _(gv, {
            orientation: "vertical",
            className: b.scrollbar,
            forceMount: !0,
            onMouseEnter: () => g(!0),
            onMouseLeave: () => g(!1),
            children: _(yv, { className: b.thumb }),
          }),
          _(TE, { className: b.corner }),
        ],
      }),
    });
  }),
  lw = m.exports.forwardRef((e, t) => {
    const r = Z("ScrollAreaAutosize", iw, e),
      {
        children: n,
        classNames: o,
        styles: i,
        scrollbarSize: l,
        scrollHideDelay: a,
        type: s,
        dir: c,
        offsetScrollbars: f,
        viewportRef: u,
        onScrollPositionChange: d,
        unstyled: h,
        sx: y,
        variant: w,
        viewportProps: P,
      } = r,
      v = ow(r, [
        "children",
        "classNames",
        "styles",
        "scrollbarSize",
        "scrollHideDelay",
        "type",
        "dir",
        "offsetScrollbars",
        "viewportRef",
        "onScrollPositionChange",
        "unstyled",
        "sx",
        "variant",
        "viewportProps",
      ]);
    return an.createElement(
      re,
      nw(ef({}, v), { ref: t, sx: [{ display: "flex" }, ...O0(y)] }),
      an.createElement(
        re,
        { sx: { display: "flex", flexDirection: "column", flex: 1 } },
        an.createElement(
          Gs,
          {
            classNames: o,
            styles: i,
            scrollHideDelay: a,
            scrollbarSize: l,
            type: s,
            dir: c,
            offsetScrollbars: f,
            viewportRef: u,
            onScrollPositionChange: d,
            unstyled: h,
            variant: w,
            viewportProps: P,
          },
          n
        )
      )
    );
  });
lw.displayName = "@mantine/core/ScrollAreaAutosize";
Gs.displayName = "@mantine/core/ScrollArea";
Gs.Autosize = lw;
const AE = Gs;
var ME = Object.defineProperty,
  FE = Object.defineProperties,
  VE = Object.getOwnPropertyDescriptors,
  xa = Object.getOwnPropertySymbols,
  aw = Object.prototype.hasOwnProperty,
  sw = Object.prototype.propertyIsEnumerable,
  _v = (e, t, r) =>
    t in e
      ? ME(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Sv = (e, t) => {
    for (var r in t || (t = {})) aw.call(t, r) && _v(e, r, t[r]);
    if (xa) for (var r of xa(t)) sw.call(t, r) && _v(e, r, t[r]);
    return e;
  },
  HE = (e, t) => FE(e, VE(t)),
  BE = (e, t) => {
    var r = {};
    for (var n in e) aw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && xa)
      for (var n of xa(e)) t.indexOf(n) < 0 && sw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const yd = m.exports.forwardRef((e, t) => {
  var r = e,
    { style: n } = r,
    o = BE(r, ["style"]);
  return _(AE, {
    ...HE(Sv({}, o), {
      style: Sv({ width: "100%" }, n),
      viewportProps: { tabIndex: -1 },
      viewportRef: t,
    }),
    children: o.children,
  });
});
yd.displayName = "@mantine/core/SelectScrollArea";
var WE = J(() => ({
  dropdown: {},
  itemsWrapper: {
    padding: x(4),
    display: "flex",
    width: "100%",
    boxSizing: "border-box",
  },
}));
const UE = WE,
  At = Math.min,
  Ve = Math.max,
  ba = Math.round,
  tl = Math.floor,
  Ur = (e) => ({ x: e, y: e }),
  GE = { left: "right", right: "left", bottom: "top", top: "bottom" },
  YE = { start: "end", end: "start" };
function tf(e, t, r) {
  return Ve(e, At(t, r));
}
function vr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mt(e) {
  return e.split("-")[0];
}
function mo(e) {
  return e.split("-")[1];
}
function wd(e) {
  return e === "x" ? "y" : "x";
}
function _d(e) {
  return e === "y" ? "height" : "width";
}
function xn(e) {
  return ["top", "bottom"].includes(Mt(e)) ? "y" : "x";
}
function Sd(e) {
  return wd(xn(e));
}
function XE(e, t, r) {
  r === void 0 && (r = !1);
  const n = mo(e),
    o = Sd(e),
    i = _d(o);
  let l =
    o === "x"
      ? n === (r ? "end" : "start")
        ? "right"
        : "left"
      : n === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (l = Pa(l)), [l, Pa(l)];
}
function QE(e) {
  const t = Pa(e);
  return [rf(e), t, rf(t)];
}
function rf(e) {
  return e.replace(/start|end/g, (t) => YE[t]);
}
function KE(e, t, r) {
  const n = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? (t ? o : n) : t ? n : o;
    case "left":
    case "right":
      return t ? i : l;
    default:
      return [];
  }
}
function ZE(e, t, r, n) {
  const o = mo(e);
  let i = KE(Mt(e), r === "start", n);
  return (
    o && ((i = i.map((l) => l + "-" + o)), t && (i = i.concat(i.map(rf)))), i
  );
}
function Pa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => GE[t]);
}
function JE(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function xd(e) {
  return typeof e != "number"
    ? JE(e)
    : { top: e, right: e, bottom: e, left: e };
}
function lo(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height,
  };
}
function xv(e, t, r) {
  let { reference: n, floating: o } = e;
  const i = xn(t),
    l = Sd(t),
    a = _d(l),
    s = Mt(t),
    c = i === "y",
    f = n.x + n.width / 2 - o.width / 2,
    u = n.y + n.height / 2 - o.height / 2,
    d = n[a] / 2 - o[a] / 2;
  let h;
  switch (s) {
    case "top":
      h = { x: f, y: n.y - o.height };
      break;
    case "bottom":
      h = { x: f, y: n.y + n.height };
      break;
    case "right":
      h = { x: n.x + n.width, y: u };
      break;
    case "left":
      h = { x: n.x - o.width, y: u };
      break;
    default:
      h = { x: n.x, y: n.y };
  }
  switch (mo(t)) {
    case "start":
      h[l] -= d * (r && c ? -1 : 1);
      break;
    case "end":
      h[l] += d * (r && c ? -1 : 1);
      break;
  }
  return h;
}
const qE = async (e, t, r) => {
  const {
      placement: n = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: l,
    } = r,
    a = i.filter(Boolean),
    s = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let c = await l.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: f, y: u } = xv(c, n, s),
    d = n,
    h = {},
    y = 0;
  for (let w = 0; w < a.length; w++) {
    const { name: P, fn: v } = a[w],
      {
        x: p,
        y: g,
        data: S,
        reset: b,
      } = await v({
        x: f,
        y: u,
        initialPlacement: n,
        placement: d,
        strategy: o,
        middlewareData: h,
        rects: c,
        platform: l,
        elements: { reference: e, floating: t },
      });
    if (
      ((f = p != null ? p : f),
      (u = g != null ? g : u),
      (h = { ...h, [P]: { ...h[P], ...S } }),
      b && y <= 50)
    ) {
      y++,
        typeof b == "object" &&
          (b.placement && (d = b.placement),
          b.rects &&
            (c =
              b.rects === !0
                ? await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : b.rects),
          ({ x: f, y: u } = xv(c, d, s))),
        (w = -1);
      continue;
    }
  }
  return { x: f, y: u, placement: d, strategy: o, middlewareData: h };
};
async function bd(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: o, platform: i, rects: l, elements: a, strategy: s } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: f = "viewport",
      elementContext: u = "floating",
      altBoundary: d = !1,
      padding: h = 0,
    } = vr(t, e),
    y = xd(h),
    P = a[d ? (u === "floating" ? "reference" : "floating") : u],
    v = lo(
      await i.getClippingRect({
        element:
          (r = await (i.isElement == null ? void 0 : i.isElement(P))) == null ||
          r
            ? P
            : P.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: c,
        rootBoundary: f,
        strategy: s,
      })
    ),
    p = u === "floating" ? { ...l.floating, x: n, y: o } : l.reference,
    g = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    S = (await (i.isElement == null ? void 0 : i.isElement(g)))
      ? (await (i.getScale == null ? void 0 : i.getScale(g))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    b = lo(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: p,
            offsetParent: g,
            strategy: s,
          })
        : p
    );
  return {
    top: (v.top - b.top + y.top) / S.y,
    bottom: (b.bottom - v.bottom + y.bottom) / S.y,
    left: (v.left - b.left + y.left) / S.x,
    right: (b.right - v.right + y.right) / S.x,
  };
}
const bv = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: r,
          y: n,
          placement: o,
          rects: i,
          platform: l,
          elements: a,
        } = t,
        { element: s, padding: c = 0 } = vr(e, t) || {};
      if (s == null) return {};
      const f = xd(c),
        u = { x: r, y: n },
        d = Sd(o),
        h = _d(d),
        y = await l.getDimensions(s),
        w = d === "y",
        P = w ? "top" : "left",
        v = w ? "bottom" : "right",
        p = w ? "clientHeight" : "clientWidth",
        g = i.reference[h] + i.reference[d] - u[d] - i.floating[h],
        S = u[d] - i.reference[d],
        b = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(s));
      let O = b ? b[p] : 0;
      (!O || !(await (l.isElement == null ? void 0 : l.isElement(b)))) &&
        (O = a.floating[p] || i.floating[h]);
      const $ = g / 2 - S / 2,
        C = O / 2 - y[h] / 2 - 1,
        R = At(f[P], C),
        E = At(f[v], C),
        z = R,
        M = O - y[h] - E,
        N = O / 2 - y[h] / 2 + $,
        T = tf(z, N, M),
        H =
          mo(o) != null &&
          N != T &&
          i.reference[h] / 2 - (N < z ? R : E) - y[h] / 2 < 0
            ? N < z
              ? z - N
              : M - N
            : 0;
      return { [d]: u[d] - H, data: { [d]: T, centerOffset: N - T + H } };
    },
  }),
  cw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var r;
          const {
              placement: n,
              middlewareData: o,
              rects: i,
              initialPlacement: l,
              platform: a,
              elements: s,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: f = !0,
              fallbackPlacements: u,
              fallbackStrategy: d = "bestFit",
              fallbackAxisSideDirection: h = "none",
              flipAlignment: y = !0,
              ...w
            } = vr(e, t),
            P = Mt(n),
            v = Mt(l) === l,
            p = await (a.isRTL == null ? void 0 : a.isRTL(s.floating)),
            g = u || (v || !y ? [Pa(l)] : QE(l));
          !u && h !== "none" && g.push(...ZE(l, y, h, p));
          const S = [l, ...g],
            b = await bd(t, w),
            O = [];
          let $ = ((r = o.flip) == null ? void 0 : r.overflows) || [];
          if ((c && O.push(b[P]), f)) {
            const z = XE(n, i, p);
            O.push(b[z[0]], b[z[1]]);
          }
          if (
            (($ = [...$, { placement: n, overflows: O }]),
            !O.every((z) => z <= 0))
          ) {
            var C, R;
            const z = (((C = o.flip) == null ? void 0 : C.index) || 0) + 1,
              M = S[z];
            if (M)
              return {
                data: { index: z, overflows: $ },
                reset: { placement: M },
              };
            let N =
              (R = $.filter((T) => T.overflows[0] <= 0).sort(
                (T, A) => T.overflows[1] - A.overflows[1]
              )[0]) == null
                ? void 0
                : R.placement;
            if (!N)
              switch (d) {
                case "bestFit": {
                  var E;
                  const T =
                    (E = $.map((A) => [
                      A.placement,
                      A.overflows
                        .filter((H) => H > 0)
                        .reduce((H, G) => H + G, 0),
                    ]).sort((A, H) => A[1] - H[1])[0]) == null
                      ? void 0
                      : E[0];
                  T && (N = T);
                  break;
                }
                case "initialPlacement":
                  N = l;
                  break;
              }
            if (n !== N) return { reset: { placement: N } };
          }
          return {};
        },
      }
    );
  };
function uw(e) {
  const t = At(...e.map((i) => i.left)),
    r = At(...e.map((i) => i.top)),
    n = Ve(...e.map((i) => i.right)),
    o = Ve(...e.map((i) => i.bottom));
  return { x: t, y: r, width: n - t, height: o - r };
}
function ek(e) {
  const t = e.slice().sort((o, i) => o.y - i.y),
    r = [];
  let n = null;
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    !n || i.y - n.y > n.height / 2 ? r.push([i]) : r[r.length - 1].push(i),
      (n = i);
  }
  return r.map((o) => lo(uw(o)));
}
const fw = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "inline",
      options: e,
      async fn(t) {
        const {
            placement: r,
            elements: n,
            rects: o,
            platform: i,
            strategy: l,
          } = t,
          { padding: a = 2, x: s, y: c } = vr(e, t),
          f = Array.from(
            (await (i.getClientRects == null
              ? void 0
              : i.getClientRects(n.reference))) || []
          ),
          u = ek(f),
          d = lo(uw(f)),
          h = xd(a);
        function y() {
          if (
            u.length === 2 &&
            u[0].left > u[1].right &&
            s != null &&
            c != null
          )
            return (
              u.find(
                (P) =>
                  s > P.left - h.left &&
                  s < P.right + h.right &&
                  c > P.top - h.top &&
                  c < P.bottom + h.bottom
              ) || d
            );
          if (u.length >= 2) {
            if (xn(r) === "y") {
              const E = u[0],
                z = u[u.length - 1],
                M = Mt(r) === "top",
                N = E.top,
                T = z.bottom,
                A = M ? E.left : z.left,
                H = M ? E.right : z.right,
                G = H - A,
                k = T - N;
              return {
                top: N,
                bottom: T,
                left: A,
                right: H,
                width: G,
                height: k,
                x: A,
                y: N,
              };
            }
            const P = Mt(r) === "left",
              v = Ve(...u.map((E) => E.right)),
              p = At(...u.map((E) => E.left)),
              g = u.filter((E) => (P ? E.left === p : E.right === v)),
              S = g[0].top,
              b = g[g.length - 1].bottom,
              O = p,
              $ = v,
              C = $ - O,
              R = b - S;
            return {
              top: S,
              bottom: b,
              left: O,
              right: $,
              width: C,
              height: R,
              x: O,
              y: S,
            };
          }
          return d;
        }
        const w = await i.getElementRects({
          reference: { getBoundingClientRect: y },
          floating: n.floating,
          strategy: l,
        });
        return o.reference.x !== w.reference.x ||
          o.reference.y !== w.reference.y ||
          o.reference.width !== w.reference.width ||
          o.reference.height !== w.reference.height
          ? { reset: { rects: w } }
          : {};
      },
    }
  );
};
async function tk(e, t) {
  const { placement: r, platform: n, elements: o } = e,
    i = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)),
    l = Mt(r),
    a = mo(r),
    s = xn(r) === "y",
    c = ["left", "top"].includes(l) ? -1 : 1,
    f = i && s ? -1 : 1,
    u = vr(t, e);
  let {
    mainAxis: d,
    crossAxis: h,
    alignmentAxis: y,
  } = typeof u == "number"
    ? { mainAxis: u, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...u };
  return (
    a && typeof y == "number" && (h = a === "end" ? y * -1 : y),
    s ? { x: h * f, y: d * c } : { x: d * c, y: h * f }
  );
}
const dw = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          const { x: r, y: n } = t,
            o = await tk(t, e);
          return { x: r + o.x, y: n + o.y, data: o };
        },
      }
    );
  },
  Pd = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: r, y: n, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: l = !1,
              limiter: a = {
                fn: (P) => {
                  let { x: v, y: p } = P;
                  return { x: v, y: p };
                },
              },
              ...s
            } = vr(e, t),
            c = { x: r, y: n },
            f = await bd(t, s),
            u = xn(Mt(o)),
            d = wd(u);
          let h = c[d],
            y = c[u];
          if (i) {
            const P = d === "y" ? "top" : "left",
              v = d === "y" ? "bottom" : "right",
              p = h + f[P],
              g = h - f[v];
            h = tf(p, h, g);
          }
          if (l) {
            const P = u === "y" ? "top" : "left",
              v = u === "y" ? "bottom" : "right",
              p = y + f[P],
              g = y - f[v];
            y = tf(p, y, g);
          }
          const w = a.fn({ ...t, [d]: h, [u]: y });
          return { ...w, data: { x: w.x - r, y: w.y - n } };
        },
      }
    );
  },
  rk = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: r, y: n, placement: o, rects: i, middlewareData: l } = t,
            { offset: a = 0, mainAxis: s = !0, crossAxis: c = !0 } = vr(e, t),
            f = { x: r, y: n },
            u = xn(o),
            d = wd(u);
          let h = f[d],
            y = f[u];
          const w = vr(a, t),
            P =
              typeof w == "number"
                ? { mainAxis: w, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...w };
          if (s) {
            const g = d === "y" ? "height" : "width",
              S = i.reference[d] - i.floating[g] + P.mainAxis,
              b = i.reference[d] + i.reference[g] - P.mainAxis;
            h < S ? (h = S) : h > b && (h = b);
          }
          if (c) {
            var v, p;
            const g = d === "y" ? "width" : "height",
              S = ["top", "left"].includes(Mt(o)),
              b =
                i.reference[u] -
                i.floating[g] +
                ((S && ((v = l.offset) == null ? void 0 : v[u])) || 0) +
                (S ? 0 : P.crossAxis),
              O =
                i.reference[u] +
                i.reference[g] +
                (S ? 0 : ((p = l.offset) == null ? void 0 : p[u]) || 0) -
                (S ? P.crossAxis : 0);
            y < b ? (y = b) : y > O && (y = O);
          }
          return { [d]: h, [u]: y };
        },
      }
    );
  },
  nk = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: r, rects: n, platform: o, elements: i } = t,
            { apply: l = () => {}, ...a } = vr(e, t),
            s = await bd(t, a),
            c = Mt(r),
            f = mo(r),
            u = xn(r) === "y",
            { width: d, height: h } = n.floating;
          let y, w;
          c === "top" || c === "bottom"
            ? ((y = c),
              (w =
                f ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(i.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((w = c), (y = f === "end" ? "top" : "bottom"));
          const P = h - s[y],
            v = d - s[w],
            p = !t.middlewareData.shift;
          let g = P,
            S = v;
          if (u) {
            const O = d - s.left - s.right;
            S = f || p ? At(v, O) : O;
          } else {
            const O = h - s.top - s.bottom;
            g = f || p ? At(P, O) : O;
          }
          if (p && !f) {
            const O = Ve(s.left, 0),
              $ = Ve(s.right, 0),
              C = Ve(s.top, 0),
              R = Ve(s.bottom, 0);
            u
              ? (S = d - 2 * (O !== 0 || $ !== 0 ? O + $ : Ve(s.left, s.right)))
              : (g =
                  h - 2 * (C !== 0 || R !== 0 ? C + R : Ve(s.top, s.bottom)));
          }
          await l({ ...t, availableWidth: S, availableHeight: g });
          const b = await o.getDimensions(i.floating);
          return d !== b.width || h !== b.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Gr(e) {
  return pw(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ut(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function _r(e) {
  var t;
  return (t = (pw(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function pw(e) {
  return e instanceof Node || e instanceof ut(e).Node;
}
function hr(e) {
  return e instanceof Element || e instanceof ut(e).Element;
}
function Jt(e) {
  return e instanceof HTMLElement || e instanceof ut(e).HTMLElement;
}
function Pv(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ut(e).ShadowRoot;
}
function Oi(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: o } = Ot(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + n + r) &&
    !["inline", "contents"].includes(o)
  );
}
function ok(e) {
  return ["table", "td", "th"].includes(Gr(e));
}
function $d(e) {
  const t = Od(),
    r = Ot(e);
  return (
    r.transform !== "none" ||
    r.perspective !== "none" ||
    (r.containerType ? r.containerType !== "normal" : !1) ||
    (!t && (r.backdropFilter ? r.backdropFilter !== "none" : !1)) ||
    (!t && (r.filter ? r.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((n) =>
      (r.willChange || "").includes(n)
    ) ||
    ["paint", "layout", "strict", "content"].some((n) =>
      (r.contain || "").includes(n)
    )
  );
}
function ik(e) {
  let t = ao(e);
  for (; Jt(t) && !Ys(t); ) {
    if ($d(t)) return t;
    t = ao(t);
  }
  return null;
}
function Od() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ys(e) {
  return ["html", "body", "#document"].includes(Gr(e));
}
function Ot(e) {
  return ut(e).getComputedStyle(e);
}
function Xs(e) {
  return hr(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function ao(e) {
  if (Gr(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Pv(e) && e.host) || _r(e);
  return Pv(t) ? t.host : t;
}
function mw(e) {
  const t = ao(e);
  return Ys(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Jt(t) && Oi(t)
    ? t
    : mw(t);
}
function Fr(e, t) {
  var r;
  t === void 0 && (t = []);
  const n = mw(e),
    o = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = ut(n);
  return o
    ? t.concat(i, i.visualViewport || [], Oi(n) ? n : [])
    : t.concat(n, Fr(n));
}
function vw(e) {
  const t = Ot(e);
  let r = parseFloat(t.width) || 0,
    n = parseFloat(t.height) || 0;
  const o = Jt(e),
    i = o ? e.offsetWidth : r,
    l = o ? e.offsetHeight : n,
    a = ba(r) !== i || ba(n) !== l;
  return a && ((r = i), (n = l)), { width: r, height: n, $: a };
}
function Cd(e) {
  return hr(e) ? e : e.contextElement;
}
function Qn(e) {
  const t = Cd(e);
  if (!Jt(t)) return Ur(1);
  const r = t.getBoundingClientRect(),
    { width: n, height: o, $: i } = vw(t);
  let l = (i ? ba(r.width) : r.width) / n,
    a = (i ? ba(r.height) : r.height) / o;
  return (
    (!l || !Number.isFinite(l)) && (l = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: l, y: a }
  );
}
const lk = Ur(0);
function hw(e) {
  const t = ut(e);
  return !Od() || !t.visualViewport
    ? lk
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function ak(e, t, r) {
  return t === void 0 && (t = !1), !r || (t && r !== ut(e)) ? !1 : t;
}
function gn(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(),
    i = Cd(e);
  let l = Ur(1);
  t && (n ? hr(n) && (l = Qn(n)) : (l = Qn(e)));
  const a = ak(i, r, n) ? hw(i) : Ur(0);
  let s = (o.left + a.x) / l.x,
    c = (o.top + a.y) / l.y,
    f = o.width / l.x,
    u = o.height / l.y;
  if (i) {
    const d = ut(i),
      h = n && hr(n) ? ut(n) : n;
    let y = d.frameElement;
    for (; y && n && h !== d; ) {
      const w = Qn(y),
        P = y.getBoundingClientRect(),
        v = Ot(y),
        p = P.left + (y.clientLeft + parseFloat(v.paddingLeft)) * w.x,
        g = P.top + (y.clientTop + parseFloat(v.paddingTop)) * w.y;
      (s *= w.x),
        (c *= w.y),
        (f *= w.x),
        (u *= w.y),
        (s += p),
        (c += g),
        (y = ut(y).frameElement);
    }
  }
  return lo({ width: f, height: u, x: s, y: c });
}
function sk(e) {
  let { rect: t, offsetParent: r, strategy: n } = e;
  const o = Jt(r),
    i = _r(r);
  if (r === i) return t;
  let l = { scrollLeft: 0, scrollTop: 0 },
    a = Ur(1);
  const s = Ur(0);
  if (
    (o || (!o && n !== "fixed")) &&
    ((Gr(r) !== "body" || Oi(i)) && (l = Xs(r)), Jt(r))
  ) {
    const c = gn(r);
    (a = Qn(r)), (s.x = c.x + r.clientLeft), (s.y = c.y + r.clientTop);
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - l.scrollLeft * a.x + s.x,
    y: t.y * a.y - l.scrollTop * a.y + s.y,
  };
}
function ck(e) {
  return Array.from(e.getClientRects());
}
function gw(e) {
  return gn(_r(e)).left + Xs(e).scrollLeft;
}
function uk(e) {
  const t = _r(e),
    r = Xs(e),
    n = e.ownerDocument.body,
    o = Ve(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
    i = Ve(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let l = -r.scrollLeft + gw(e);
  const a = -r.scrollTop;
  return (
    Ot(n).direction === "rtl" && (l += Ve(t.clientWidth, n.clientWidth) - o),
    { width: o, height: i, x: l, y: a }
  );
}
function fk(e, t) {
  const r = ut(e),
    n = _r(e),
    o = r.visualViewport;
  let i = n.clientWidth,
    l = n.clientHeight,
    a = 0,
    s = 0;
  if (o) {
    (i = o.width), (l = o.height);
    const c = Od();
    (!c || (c && t === "fixed")) && ((a = o.offsetLeft), (s = o.offsetTop));
  }
  return { width: i, height: l, x: a, y: s };
}
function dk(e, t) {
  const r = gn(e, !0, t === "fixed"),
    n = r.top + e.clientTop,
    o = r.left + e.clientLeft,
    i = Jt(e) ? Qn(e) : Ur(1),
    l = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    s = o * i.x,
    c = n * i.y;
  return { width: l, height: a, x: s, y: c };
}
function $v(e, t, r) {
  let n;
  if (t === "viewport") n = fk(e, r);
  else if (t === "document") n = uk(_r(e));
  else if (hr(t)) n = dk(t, r);
  else {
    const o = hw(e);
    n = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return lo(n);
}
function yw(e, t) {
  const r = ao(e);
  return r === t || !hr(r) || Ys(r)
    ? !1
    : Ot(r).position === "fixed" || yw(r, t);
}
function pk(e, t) {
  const r = t.get(e);
  if (r) return r;
  let n = Fr(e).filter((a) => hr(a) && Gr(a) !== "body"),
    o = null;
  const i = Ot(e).position === "fixed";
  let l = i ? ao(e) : e;
  for (; hr(l) && !Ys(l); ) {
    const a = Ot(l),
      s = $d(l);
    !s && a.position === "fixed" && (o = null),
      (
        i
          ? !s && !o
          : (!s &&
              a.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (Oi(l) && !s && yw(e, l))
      )
        ? (n = n.filter((f) => f !== l))
        : (o = a),
      (l = ao(l));
  }
  return t.set(e, n), n;
}
function mk(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: o } = e;
  const l = [...(r === "clippingAncestors" ? pk(t, this._c) : [].concat(r)), n],
    a = l[0],
    s = l.reduce((c, f) => {
      const u = $v(t, f, o);
      return (
        (c.top = Ve(u.top, c.top)),
        (c.right = At(u.right, c.right)),
        (c.bottom = At(u.bottom, c.bottom)),
        (c.left = Ve(u.left, c.left)),
        c
      );
    }, $v(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top,
  };
}
function vk(e) {
  return vw(e);
}
function hk(e, t, r) {
  const n = Jt(t),
    o = _r(t),
    i = r === "fixed",
    l = gn(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const s = Ur(0);
  if (n || (!n && !i))
    if (((Gr(t) !== "body" || Oi(o)) && (a = Xs(t)), n)) {
      const c = gn(t, !0, i, t);
      (s.x = c.x + t.clientLeft), (s.y = c.y + t.clientTop);
    } else o && (s.x = gw(o));
  return {
    x: l.left + a.scrollLeft - s.x,
    y: l.top + a.scrollTop - s.y,
    width: l.width,
    height: l.height,
  };
}
function Ov(e, t) {
  return !Jt(e) || Ot(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function ww(e, t) {
  const r = ut(e);
  if (!Jt(e)) return r;
  let n = Ov(e, t);
  for (; n && ok(n) && Ot(n).position === "static"; ) n = Ov(n, t);
  return n &&
    (Gr(n) === "html" ||
      (Gr(n) === "body" && Ot(n).position === "static" && !$d(n)))
    ? r
    : n || ik(e) || r;
}
const gk = async function (e) {
  let { reference: t, floating: r, strategy: n } = e;
  const o = this.getOffsetParent || ww,
    i = this.getDimensions;
  return {
    reference: hk(t, await o(r), n),
    floating: { x: 0, y: 0, ...(await i(r)) },
  };
};
function yk(e) {
  return Ot(e).direction === "rtl";
}
const wk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: sk,
  getDocumentElement: _r,
  getClippingRect: mk,
  getOffsetParent: ww,
  getElementRects: gk,
  getClientRects: ck,
  getDimensions: vk,
  getScale: Qn,
  isElement: hr,
  isRTL: yk,
};
function _k(e, t) {
  let r = null,
    n;
  const o = _r(e);
  function i() {
    clearTimeout(n), r && r.disconnect(), (r = null);
  }
  function l(a, s) {
    a === void 0 && (a = !1), s === void 0 && (s = 1), i();
    const { left: c, top: f, width: u, height: d } = e.getBoundingClientRect();
    if ((a || t(), !u || !d)) return;
    const h = tl(f),
      y = tl(o.clientWidth - (c + u)),
      w = tl(o.clientHeight - (f + d)),
      P = tl(c),
      p = {
        rootMargin: -h + "px " + -y + "px " + -w + "px " + -P + "px",
        threshold: Ve(0, At(1, s)) || 1,
      };
    let g = !0;
    function S(b) {
      const O = b[0].intersectionRatio;
      if (O !== s) {
        if (!g) return l();
        O
          ? l(!1, O)
          : (n = setTimeout(() => {
              l(!1, 1e-7);
            }, 100));
      }
      g = !1;
    }
    try {
      r = new IntersectionObserver(S, { ...p, root: o.ownerDocument });
    } catch {
      r = new IntersectionObserver(S, p);
    }
    r.observe(e);
  }
  return l(!0), i;
}
function Sk(e, t, r, n) {
  n === void 0 && (n = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: l = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: s = !1,
    } = n,
    c = Cd(e),
    f = o || i ? [...(c ? Fr(c) : []), ...Fr(t)] : [];
  f.forEach((v) => {
    o && v.addEventListener("scroll", r, { passive: !0 }),
      i && v.addEventListener("resize", r);
  });
  const u = c && a ? _k(c, r) : null;
  let d = -1,
    h = null;
  l &&
    ((h = new ResizeObserver((v) => {
      let [p] = v;
      p &&
        p.target === c &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(d),
        (d = requestAnimationFrame(() => {
          h && h.observe(t);
        }))),
        r();
    })),
    c && !s && h.observe(c),
    h.observe(t));
  let y,
    w = s ? gn(e) : null;
  s && P();
  function P() {
    const v = gn(e);
    w &&
      (v.x !== w.x ||
        v.y !== w.y ||
        v.width !== w.width ||
        v.height !== w.height) &&
      r(),
      (w = v),
      (y = requestAnimationFrame(P));
  }
  return (
    r(),
    () => {
      f.forEach((v) => {
        o && v.removeEventListener("scroll", r),
          i && v.removeEventListener("resize", r);
      }),
        u && u(),
        h && h.disconnect(),
        (h = null),
        s && cancelAnimationFrame(y);
    }
  );
}
const xk = (e, t, r) => {
    const n = new Map(),
      o = { platform: wk, ...r },
      i = { ...o.platform, _c: n };
    return qE(e, t, { ...o, platform: i });
  },
  _w = (e) => {
    const { element: t, padding: r } = e;
    function n(o) {
      return Object.prototype.hasOwnProperty.call(o, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(o) {
        return n(t)
          ? t.current != null
            ? bv({ element: t.current, padding: r }).fn(o)
            : {}
          : t
          ? bv({ element: t, padding: r }).fn(o)
          : {};
      },
    };
  };
var Cl =
  typeof document < "u" ? m.exports.useLayoutEffect : m.exports.useEffect;
function $a(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!$a(e[n], t[n])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1;
    for (n = r; n-- !== 0; ) {
      const i = o[n];
      if (!(i === "_owner" && e.$$typeof) && !$a(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Cv(e) {
  const t = m.exports.useRef(e);
  return (
    Cl(() => {
      t.current = e;
    }),
    t
  );
}
function bk(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: r = "absolute",
      middleware: n = [],
      platform: o,
      whileElementsMounted: i,
      open: l,
    } = e,
    [a, s] = m.exports.useState({
      x: null,
      y: null,
      strategy: r,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [c, f] = m.exports.useState(n);
  $a(c, n) || f(n);
  const u = m.exports.useRef(null),
    d = m.exports.useRef(null),
    h = m.exports.useRef(a),
    y = Cv(i),
    w = Cv(o),
    [P, v] = m.exports.useState(null),
    [p, g] = m.exports.useState(null),
    S = m.exports.useCallback((E) => {
      u.current !== E && ((u.current = E), v(E));
    }, []),
    b = m.exports.useCallback((E) => {
      d.current !== E && ((d.current = E), g(E));
    }, []),
    O = m.exports.useCallback(() => {
      if (!u.current || !d.current) return;
      const E = { placement: t, strategy: r, middleware: c };
      w.current && (E.platform = w.current),
        xk(u.current, d.current, E).then((z) => {
          const M = { ...z, isPositioned: !0 };
          $.current &&
            !$a(h.current, M) &&
            ((h.current = M),
            hi.exports.flushSync(() => {
              s(M);
            }));
        });
    }, [c, t, r, w]);
  Cl(() => {
    l === !1 &&
      h.current.isPositioned &&
      ((h.current.isPositioned = !1), s((E) => ({ ...E, isPositioned: !1 })));
  }, [l]);
  const $ = m.exports.useRef(!1);
  Cl(
    () => (
      ($.current = !0),
      () => {
        $.current = !1;
      }
    ),
    []
  ),
    Cl(() => {
      if (P && p) {
        if (y.current) return y.current(P, p, O);
        O();
      }
    }, [P, p, O, y]);
  const C = m.exports.useMemo(
      () => ({ reference: u, floating: d, setReference: S, setFloating: b }),
      [S, b]
    ),
    R = m.exports.useMemo(() => ({ reference: P, floating: p }), [P, p]);
  return m.exports.useMemo(
    () => ({
      ...a,
      update: O,
      refs: C,
      elements: R,
      reference: S,
      floating: b,
    }),
    [a, O, C, R, S, b]
  );
}
var so =
  typeof document < "u" ? m.exports.useLayoutEffect : m.exports.useEffect;
let Dc = !1,
  Pk = 0;
const Ev = () => "floating-ui-" + Pk++;
function $k() {
  const [e, t] = m.exports.useState(() => (Dc ? Ev() : void 0));
  return (
    so(() => {
      e == null && t(Ev());
    }, []),
    m.exports.useEffect(() => {
      Dc || (Dc = !0);
    }, []),
    e
  );
}
const Ok = Tl["useId".toString()],
  kv = Ok || $k;
function Ck() {
  const e = new Map();
  return {
    emit(t, r) {
      var n;
      (n = e.get(t)) == null || n.forEach((o) => o(r));
    },
    on(t, r) {
      e.set(t, [...(e.get(t) || []), r]);
    },
    off(t, r) {
      e.set(
        t,
        (e.get(t) || []).filter((n) => n !== r)
      );
    },
  };
}
const Ek = m.exports.createContext(null),
  kk = m.exports.createContext(null),
  Sw = () => {
    var e;
    return ((e = m.exports.useContext(Ek)) == null ? void 0 : e.id) || null;
  },
  Ed = () => m.exports.useContext(kk);
function Rr(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function Rk() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function Nk() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands)
    ? e.brands
        .map((t) => {
          let { brand: r, version: n } = t;
          return r + "/" + n;
        })
        .join(" ")
    : navigator.userAgent;
}
function kd(e) {
  return Rr(e).defaultView || window;
}
function Xt(e) {
  return e ? e instanceof kd(e).Element : !1;
}
function xw(e) {
  return e ? e instanceof kd(e).HTMLElement : !1;
}
function Tk(e) {
  if (typeof ShadowRoot > "u") return !1;
  const t = kd(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ik(e) {
  if (e.mozInputSource === 0 && e.isTrusted) return !0;
  const t = /Android/i;
  return (t.test(Rk()) || t.test(Nk())) && e.pointerType
    ? e.type === "click" && e.buttons === 1
    : e.detail === 0 && !e.pointerType;
}
function zk(e) {
  return (
    (e.width === 0 && e.height === 0) ||
    (e.width === 1 &&
      e.height === 1 &&
      e.pressure === 0 &&
      e.detail === 0 &&
      e.pointerType !== "mouse") ||
    (e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0)
  );
}
function bw(e, t) {
  const r = ["mouse", "pen"];
  return t || r.push("", void 0), r.includes(e);
}
function Rv(e) {
  const t = m.exports.useRef(e);
  return (
    so(() => {
      t.current = e;
    }),
    t
  );
}
const Nv = "data-floating-ui-safe-polygon";
function El(e, t, r) {
  return r && !bw(r) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
}
const Dk = function (e, t) {
    let {
      enabled: r = !0,
      delay: n = 0,
      handleClose: o = null,
      mouseOnly: i = !1,
      restMs: l = 0,
      move: a = !0,
    } = t === void 0 ? {} : t;
    const {
        open: s,
        onOpenChange: c,
        dataRef: f,
        events: u,
        elements: { domReference: d, floating: h },
        refs: y,
      } = e,
      w = Ed(),
      P = Sw(),
      v = Rv(o),
      p = Rv(n),
      g = m.exports.useRef(),
      S = m.exports.useRef(),
      b = m.exports.useRef(),
      O = m.exports.useRef(),
      $ = m.exports.useRef(!0),
      C = m.exports.useRef(!1),
      R = m.exports.useRef(() => {}),
      E = m.exports.useCallback(() => {
        var T;
        const A = (T = f.current.openEvent) == null ? void 0 : T.type;
        return (A == null ? void 0 : A.includes("mouse")) && A !== "mousedown";
      }, [f]);
    m.exports.useEffect(() => {
      if (!r) return;
      function T() {
        clearTimeout(S.current), clearTimeout(O.current), ($.current = !0);
      }
      return (
        u.on("dismiss", T),
        () => {
          u.off("dismiss", T);
        }
      );
    }, [r, u]),
      m.exports.useEffect(() => {
        if (!r || !v.current || !s) return;
        function T() {
          E() && c(!1);
        }
        const A = Rr(h).documentElement;
        return (
          A.addEventListener("mouseleave", T),
          () => {
            A.removeEventListener("mouseleave", T);
          }
        );
      }, [h, s, c, r, v, f, E]);
    const z = m.exports.useCallback(
        function (T) {
          T === void 0 && (T = !0);
          const A = El(p.current, "close", g.current);
          A && !b.current
            ? (clearTimeout(S.current),
              (S.current = setTimeout(() => c(!1), A)))
            : T && (clearTimeout(S.current), c(!1));
        },
        [p, c]
      ),
      M = m.exports.useCallback(() => {
        R.current(), (b.current = void 0);
      }, []),
      N = m.exports.useCallback(() => {
        if (C.current) {
          const T = Rr(y.floating.current).body;
          (T.style.pointerEvents = ""), T.removeAttribute(Nv), (C.current = !1);
        }
      }, [y]);
    return (
      m.exports.useEffect(() => {
        if (!r) return;
        function T() {
          return f.current.openEvent
            ? ["click", "mousedown"].includes(f.current.openEvent.type)
            : !1;
        }
        function A(k) {
          if (
            (clearTimeout(S.current),
            ($.current = !1),
            (i && !bw(g.current)) || (l > 0 && El(p.current, "open") === 0))
          )
            return;
          f.current.openEvent = k;
          const D = El(p.current, "open", g.current);
          D
            ? (S.current = setTimeout(() => {
                c(!0);
              }, D))
            : c(!0);
        }
        function H(k) {
          if (T()) return;
          R.current();
          const D = Rr(h);
          if ((clearTimeout(O.current), v.current)) {
            s || clearTimeout(S.current),
              (b.current = v.current({
                ...e,
                tree: w,
                x: k.clientX,
                y: k.clientY,
                onClose() {
                  N(), M(), z();
                },
              }));
            const j = b.current;
            D.addEventListener("mousemove", j),
              (R.current = () => {
                D.removeEventListener("mousemove", j);
              });
            return;
          }
          z();
        }
        function G(k) {
          T() ||
            v.current == null ||
            v.current({
              ...e,
              tree: w,
              x: k.clientX,
              y: k.clientY,
              onClose() {
                N(), M(), z();
              },
            })(k);
        }
        if (Xt(d)) {
          const k = d;
          return (
            s && k.addEventListener("mouseleave", G),
            h == null || h.addEventListener("mouseleave", G),
            a && k.addEventListener("mousemove", A, { once: !0 }),
            k.addEventListener("mouseenter", A),
            k.addEventListener("mouseleave", H),
            () => {
              s && k.removeEventListener("mouseleave", G),
                h == null || h.removeEventListener("mouseleave", G),
                a && k.removeEventListener("mousemove", A),
                k.removeEventListener("mouseenter", A),
                k.removeEventListener("mouseleave", H);
            }
          );
        }
      }, [d, h, r, e, i, l, a, z, M, N, c, s, w, p, v, f]),
      so(() => {
        var T;
        if (
          !!r &&
          s &&
          (T = v.current) != null &&
          T.__options.blockPointerEvents &&
          E()
        ) {
          const G = Rr(h).body;
          if (
            (G.setAttribute(Nv, ""),
            (G.style.pointerEvents = "none"),
            (C.current = !0),
            Xt(d) && h)
          ) {
            var A, H;
            const k = d,
              D =
                w == null ||
                (A = w.nodesRef.current.find((j) => j.id === P)) == null ||
                (H = A.context) == null
                  ? void 0
                  : H.elements.floating;
            return (
              D && (D.style.pointerEvents = ""),
              (k.style.pointerEvents = "auto"),
              (h.style.pointerEvents = "auto"),
              () => {
                (k.style.pointerEvents = ""), (h.style.pointerEvents = "");
              }
            );
          }
        }
      }, [r, s, P, h, d, w, v, f, E]),
      so(() => {
        s || ((g.current = void 0), M(), N());
      }, [s, M, N]),
      m.exports.useEffect(
        () => () => {
          M(), clearTimeout(S.current), clearTimeout(O.current), N();
        },
        [r, M, N]
      ),
      m.exports.useMemo(() => {
        if (!r) return {};
        function T(A) {
          g.current = A.pointerType;
        }
        return {
          reference: {
            onPointerDown: T,
            onPointerEnter: T,
            onMouseMove() {
              s ||
                l === 0 ||
                (clearTimeout(O.current),
                (O.current = setTimeout(() => {
                  $.current || c(!0);
                }, l)));
            },
          },
          floating: {
            onMouseEnter() {
              clearTimeout(S.current);
            },
            onMouseLeave() {
              u.emit("dismiss", {
                type: "mouseLeave",
                data: { returnFocus: !1 },
              }),
                z(!1);
            },
          },
        };
      }, [u, r, l, s, c, z])
    );
  },
  Pw = m.exports.createContext({
    delay: 0,
    initialDelay: 0,
    timeoutMs: 0,
    currentId: null,
    setCurrentId: () => {},
    setState: () => {},
    isInstantPhase: !1,
  }),
  $w = () => m.exports.useContext(Pw),
  jk = (e) => {
    let { children: t, delay: r, timeoutMs: n = 0 } = e;
    const [o, i] = m.exports.useReducer((s, c) => ({ ...s, ...c }), {
        delay: r,
        timeoutMs: n,
        initialDelay: r,
        currentId: null,
        isInstantPhase: !1,
      }),
      l = m.exports.useRef(null),
      a = m.exports.useCallback((s) => {
        i({ currentId: s });
      }, []);
    return (
      so(() => {
        o.currentId
          ? l.current === null
            ? (l.current = o.currentId)
            : i({ isInstantPhase: !0 })
          : (i({ isInstantPhase: !1 }), (l.current = null));
      }, [o.currentId]),
      _(Pw.Provider, {
        value: m.exports.useMemo(
          () => ({ ...o, setState: i, setCurrentId: a }),
          [o, i, a]
        ),
        children: t,
      })
    );
  },
  Lk = (e, t) => {
    let { open: r, onOpenChange: n } = e,
      { id: o } = t;
    const {
      currentId: i,
      setCurrentId: l,
      initialDelay: a,
      setState: s,
      timeoutMs: c,
    } = $w();
    m.exports.useEffect(() => {
      i && (s({ delay: { open: 1, close: El(a, "close") } }), i !== o && n(!1));
    }, [o, n, s, i, a]),
      m.exports.useEffect(() => {
        function f() {
          n(!1), s({ delay: a, currentId: null });
        }
        if (!r && i === o)
          if (c) {
            const u = window.setTimeout(f, c);
            return () => {
              clearTimeout(u);
            };
          } else f();
      }, [r, s, i, o, n, a, c]),
      m.exports.useEffect(() => {
        r && l(o);
      }, [r, l, o]);
  };
function Ak(e) {
  let t = e.activeElement;
  for (
    ;
    ((r = t) == null || (n = r.shadowRoot) == null
      ? void 0
      : n.activeElement) != null;

  ) {
    var r, n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function Tv(e, t) {
  if (!e || !t) return !1;
  const r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Tk(r)) {
    let n = t;
    do {
      if (n && e === n) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function jc(e, t) {
  let r =
      e.filter((o) => {
        var i;
        return o.parentId === t && ((i = o.context) == null ? void 0 : i.open);
      }) || [],
    n = r;
  for (; n.length; )
    (n =
      e.filter((o) => {
        var i;
        return (i = n) == null
          ? void 0
          : i.some((l) => {
              var a;
              return (
                o.parentId === l.id &&
                ((a = o.context) == null ? void 0 : a.open)
              );
            });
      }) || []),
      (r = r.concat(n));
  return r;
}
function Mk(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const Fk = Tl["useInsertionEffect".toString()],
  Vk = Fk || ((e) => e());
function Ow(e) {
  const t = m.exports.useRef(() => {});
  return (
    Vk(() => {
      t.current = e;
    }),
    m.exports.useCallback(function () {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return t.current == null ? void 0 : t.current(...n);
    }, [])
  );
}
function kl(e, t) {
  if (t == null) return !1;
  if ("composedPath" in e) return e.composedPath().includes(t);
  const r = e;
  return r.target != null && t.contains(r.target);
}
const Hk = {
    pointerdown: "onPointerDown",
    mousedown: "onMouseDown",
    click: "onClick",
  },
  Bk = {
    pointerdown: "onPointerDownCapture",
    mousedown: "onMouseDownCapture",
    click: "onClickCapture",
  },
  Wk = function (e) {
    var t, r;
    return (
      e === void 0 && (e = !0),
      {
        escapeKeyBubbles:
          typeof e == "boolean" ? e : (t = e.escapeKey) != null ? t : !0,
        outsidePressBubbles:
          typeof e == "boolean" ? e : (r = e.outsidePress) != null ? r : !0,
      }
    );
  },
  Uk = function (e, t) {
    let {
        open: r,
        onOpenChange: n,
        events: o,
        nodeId: i,
        elements: { reference: l, domReference: a, floating: s },
        dataRef: c,
      } = e,
      {
        enabled: f = !0,
        escapeKey: u = !0,
        outsidePress: d = !0,
        outsidePressEvent: h = "pointerdown",
        referencePress: y = !1,
        referencePressEvent: w = "pointerdown",
        ancestorScroll: P = !1,
        bubbles: v = !0,
      } = t === void 0 ? {} : t;
    const p = Ed(),
      g = Sw() != null,
      S = Ow(typeof d == "function" ? d : () => !1),
      b = typeof d == "function" ? S : d,
      O = m.exports.useRef(!1),
      { escapeKeyBubbles: $, outsidePressBubbles: C } = Wk(v);
    return (
      m.exports.useEffect(() => {
        if (!r || !f) return;
        (c.current.__escapeKeyBubbles = $),
          (c.current.__outsidePressBubbles = C);
        function R(T) {
          if (T.key === "Escape") {
            const A = p ? jc(p.nodesRef.current, i) : [];
            if (A.length > 0) {
              let H = !0;
              if (
                (A.forEach((G) => {
                  var k;
                  if (
                    (k = G.context) != null &&
                    k.open &&
                    !G.context.dataRef.current.__escapeKeyBubbles
                  ) {
                    H = !1;
                    return;
                  }
                }),
                !H)
              )
                return;
            }
            o.emit("dismiss", {
              type: "escapeKey",
              data: { returnFocus: { preventScroll: !1 } },
            }),
              n(!1);
          }
        }
        function E(T) {
          const A = O.current;
          if (((O.current = !1), A || (typeof b == "function" && !b(T))))
            return;
          const H = Mk(T);
          if (xw(H) && s) {
            const D = s.ownerDocument.defaultView || window,
              j = H.scrollWidth > H.clientWidth,
              F = H.scrollHeight > H.clientHeight;
            let B = F && T.offsetX > H.clientWidth;
            if (
              (F &&
                D.getComputedStyle(H).direction === "rtl" &&
                (B = T.offsetX <= H.offsetWidth - H.clientWidth),
              B || (j && T.offsetY > H.clientHeight))
            )
              return;
          }
          const G =
            p &&
            jc(p.nodesRef.current, i).some((D) => {
              var j;
              return kl(
                T,
                (j = D.context) == null ? void 0 : j.elements.floating
              );
            });
          if (kl(T, s) || kl(T, a) || G) return;
          const k = p ? jc(p.nodesRef.current, i) : [];
          if (k.length > 0) {
            let D = !0;
            if (
              (k.forEach((j) => {
                var F;
                if (
                  (F = j.context) != null &&
                  F.open &&
                  !j.context.dataRef.current.__outsidePressBubbles
                ) {
                  D = !1;
                  return;
                }
              }),
              !D)
            )
              return;
          }
          o.emit("dismiss", {
            type: "outsidePress",
            data: { returnFocus: g ? { preventScroll: !0 } : Ik(T) || zk(T) },
          }),
            n(!1);
        }
        function z() {
          n(!1);
        }
        const M = Rr(s);
        u && M.addEventListener("keydown", R), b && M.addEventListener(h, E);
        let N = [];
        return (
          P &&
            (Xt(a) && (N = Fr(a)),
            Xt(s) && (N = N.concat(Fr(s))),
            !Xt(l) &&
              l &&
              l.contextElement &&
              (N = N.concat(Fr(l.contextElement)))),
          (N = N.filter((T) => {
            var A;
            return (
              T !== ((A = M.defaultView) == null ? void 0 : A.visualViewport)
            );
          })),
          N.forEach((T) => {
            T.addEventListener("scroll", z, { passive: !0 });
          }),
          () => {
            u && M.removeEventListener("keydown", R),
              b && M.removeEventListener(h, E),
              N.forEach((T) => {
                T.removeEventListener("scroll", z);
              });
          }
        );
      }, [c, s, a, l, u, b, h, o, p, i, r, n, P, f, $, C, g]),
      m.exports.useEffect(() => {
        O.current = !1;
      }, [b, h]),
      m.exports.useMemo(
        () =>
          f
            ? {
                reference: {
                  [Hk[w]]: () => {
                    y &&
                      (o.emit("dismiss", {
                        type: "referencePress",
                        data: { returnFocus: !1 },
                      }),
                      n(!1));
                  },
                },
                floating: {
                  [Bk[h]]: () => {
                    O.current = !0;
                  },
                },
              }
            : {},
        [f, o, y, h, w, n]
      )
    );
  },
  Gk = function (e, t) {
    let {
        open: r,
        onOpenChange: n,
        dataRef: o,
        events: i,
        refs: l,
        elements: { floating: a, domReference: s },
      } = e,
      { enabled: c = !0, keyboardOnly: f = !0 } = t === void 0 ? {} : t;
    const u = m.exports.useRef(""),
      d = m.exports.useRef(!1),
      h = m.exports.useRef();
    return (
      m.exports.useEffect(() => {
        if (!c) return;
        const w = Rr(a).defaultView || window;
        function P() {
          !r && xw(s) && s === Ak(Rr(s)) && (d.current = !0);
        }
        return (
          w.addEventListener("blur", P),
          () => {
            w.removeEventListener("blur", P);
          }
        );
      }, [a, s, r, c]),
      m.exports.useEffect(() => {
        if (!c) return;
        function y(w) {
          (w.type === "referencePress" || w.type === "escapeKey") &&
            (d.current = !0);
        }
        return (
          i.on("dismiss", y),
          () => {
            i.off("dismiss", y);
          }
        );
      }, [i, c]),
      m.exports.useEffect(
        () => () => {
          clearTimeout(h.current);
        },
        []
      ),
      m.exports.useMemo(
        () =>
          c
            ? {
                reference: {
                  onPointerDown(y) {
                    let { pointerType: w } = y;
                    (u.current = w), (d.current = !!(w && f));
                  },
                  onMouseLeave() {
                    d.current = !1;
                  },
                  onFocus(y) {
                    var w;
                    d.current ||
                      (y.type === "focus" &&
                        ((w = o.current.openEvent) == null
                          ? void 0
                          : w.type) === "mousedown" &&
                        o.current.openEvent &&
                        kl(o.current.openEvent, s)) ||
                      ((o.current.openEvent = y.nativeEvent), n(!0));
                  },
                  onBlur(y) {
                    d.current = !1;
                    const w = y.relatedTarget,
                      P =
                        Xt(w) &&
                        w.hasAttribute("data-floating-ui-focus-guard") &&
                        w.getAttribute("data-type") === "outside";
                    h.current = setTimeout(() => {
                      Tv(l.floating.current, w) || Tv(s, w) || P || n(!1);
                    });
                  },
                },
              }
            : {},
        [c, f, s, l, o, n]
      )
    );
  },
  Yk = function (e, t) {
    let { open: r } = e,
      { enabled: n = !0, role: o = "dialog" } = t === void 0 ? {} : t;
    const i = kv(),
      l = kv();
    return m.exports.useMemo(() => {
      const a = { id: i, role: o };
      return n
        ? o === "tooltip"
          ? { reference: { "aria-describedby": r ? i : void 0 }, floating: a }
          : {
              reference: {
                "aria-expanded": r ? "true" : "false",
                "aria-haspopup": o === "alertdialog" ? "dialog" : o,
                "aria-controls": r ? i : void 0,
                ...(o === "listbox" && { role: "combobox" }),
                ...(o === "menu" && { id: l }),
              },
              floating: { ...a, ...(o === "menu" && { "aria-labelledby": l }) },
            }
        : {};
    }, [n, o, r, i, l]);
  };
function Rd(e) {
  e === void 0 && (e = {});
  const { open: t = !1, onOpenChange: r, nodeId: n } = e,
    o = bk(e),
    i = Ed(),
    l = m.exports.useRef(null),
    a = m.exports.useRef({}),
    s = m.exports.useState(() => Ck())[0],
    [c, f] = m.exports.useState(null),
    u = m.exports.useCallback(
      (v) => {
        const p = Xt(v)
          ? {
              getBoundingClientRect: () => v.getBoundingClientRect(),
              contextElement: v,
            }
          : v;
        o.refs.setReference(p);
      },
      [o.refs]
    ),
    d = m.exports.useCallback(
      (v) => {
        (Xt(v) || v === null) && ((l.current = v), f(v)),
          (Xt(o.refs.reference.current) ||
            o.refs.reference.current === null ||
            (v !== null && !Xt(v))) &&
            o.refs.setReference(v);
      },
      [o.refs]
    ),
    h = m.exports.useMemo(
      () => ({
        ...o.refs,
        setReference: d,
        setPositionReference: u,
        domReference: l,
      }),
      [o.refs, d, u]
    ),
    y = m.exports.useMemo(
      () => ({ ...o.elements, domReference: c }),
      [o.elements, c]
    ),
    w = Ow(r),
    P = m.exports.useMemo(
      () => ({
        ...o,
        refs: h,
        elements: y,
        dataRef: a,
        nodeId: n,
        events: s,
        open: t,
        onOpenChange: w,
      }),
      [o, n, s, t, w, h, y]
    );
  return (
    so(() => {
      const v = i == null ? void 0 : i.nodesRef.current.find((p) => p.id === n);
      v && (v.context = P);
    }),
    m.exports.useMemo(
      () => ({ ...o, context: P, refs: h, reference: d, positionReference: u }),
      [o, h, P, d, u]
    )
  );
}
function Lc(e, t, r) {
  const n = new Map();
  return {
    ...(r === "floating" && { tabIndex: -1 }),
    ...e,
    ...t
      .map((o) => (o ? o[r] : null))
      .concat(e)
      .reduce(
        (o, i) => (
          i &&
            Object.entries(i).forEach((l) => {
              let [a, s] = l;
              if (a.indexOf("on") === 0) {
                if ((n.has(a) || n.set(a, []), typeof s == "function")) {
                  var c;
                  (c = n.get(a)) == null || c.push(s),
                    (o[a] = function () {
                      for (
                        var f, u = arguments.length, d = new Array(u), h = 0;
                        h < u;
                        h++
                      )
                        d[h] = arguments[h];
                      (f = n.get(a)) == null || f.forEach((y) => y(...d));
                    });
                }
              } else o[a] = s;
            }),
          o
        ),
        {}
      ),
  };
}
const Xk = function (e) {
  e === void 0 && (e = []);
  const t = e,
    r = m.exports.useCallback((i) => Lc(i, e, "reference"), t),
    n = m.exports.useCallback((i) => Lc(i, e, "floating"), t),
    o = m.exports.useCallback(
      (i) => Lc(i, e, "item"),
      e.map((i) => (i == null ? void 0 : i.item))
    );
  return m.exports.useMemo(
    () => ({ getReferenceProps: r, getFloatingProps: n, getItemProps: o }),
    [r, n, o]
  );
};
function Cw({ opened: e, floating: t, position: r, positionDependencies: n }) {
  const [o, i] = m.exports.useState(0);
  m.exports.useEffect(() => {
    if (t.refs.reference.current && t.refs.floating.current)
      return Sk(t.refs.reference.current, t.refs.floating.current, t.update);
  }, [t.refs.reference.current, t.refs.floating.current, e, o, r]),
    dt(() => {
      t.update();
    }, n),
    dt(() => {
      i((l) => l + 1);
    }, [e]);
}
function Qk(e) {
  const t = [dw(e.offset)];
  return (
    e.middlewares.shift && t.push(Pd({ limiter: rk() })),
    e.middlewares.flip && t.push(cw()),
    e.middlewares.inline && t.push(fw()),
    t.push(_w({ element: e.arrowRef, padding: e.arrowOffset })),
    t
  );
}
function Kk(e) {
  const [t, r] = Wr({
      value: e.opened,
      defaultValue: e.defaultOpened,
      finalValue: !1,
      onChange: e.onChange,
    }),
    n = () => {
      var l;
      (l = e.onClose) == null || l.call(e), r(!1);
    },
    o = () => {
      var l, a;
      t
        ? ((l = e.onClose) == null || l.call(e), r(!1))
        : ((a = e.onOpen) == null || a.call(e), r(!0));
    },
    i = Rd({
      placement: e.position,
      middleware: [
        ...Qk(e),
        ...(e.width === "target"
          ? [
              nk({
                apply({ rects: l }) {
                  var a, s;
                  Object.assign(
                    (s =
                      (a = i.refs.floating.current) == null
                        ? void 0
                        : a.style) != null
                      ? s
                      : {},
                    { width: `${l.reference.width}px` }
                  );
                },
              }),
            ]
          : []),
      ],
    });
  return (
    Cw({
      opened: e.opened,
      position: e.position,
      positionDependencies: e.positionDependencies,
      floating: i,
    }),
    dt(() => {
      var l;
      (l = e.onPositionChange) == null || l.call(e, i.placement);
    }, [i.placement]),
    dt(() => {
      var l, a;
      e.opened
        ? (a = e.onOpen) == null || a.call(e)
        : (l = e.onClose) == null || l.call(e);
    }, [e.opened]),
    {
      floating: i,
      controlled: typeof e.opened == "boolean",
      opened: t,
      onClose: n,
      onToggle: o,
    }
  );
}
const Ew = {
    context: "Popover component was not found in the tree",
    children:
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported",
  },
  [Zk, kw] = vP(Ew.context);
var Jk = Object.defineProperty,
  qk = Object.defineProperties,
  e5 = Object.getOwnPropertyDescriptors,
  Oa = Object.getOwnPropertySymbols,
  Rw = Object.prototype.hasOwnProperty,
  Nw = Object.prototype.propertyIsEnumerable,
  Iv = (e, t, r) =>
    t in e
      ? Jk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  rl = (e, t) => {
    for (var r in t || (t = {})) Rw.call(t, r) && Iv(e, r, t[r]);
    if (Oa) for (var r of Oa(t)) Nw.call(t, r) && Iv(e, r, t[r]);
    return e;
  },
  t5 = (e, t) => qk(e, e5(t)),
  r5 = (e, t) => {
    var r = {};
    for (var n in e) Rw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Oa)
      for (var n of Oa(e)) t.indexOf(n) < 0 && Nw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const n5 = { refProp: "ref", popupType: "dialog" },
  Tw = m.exports.forwardRef((e, t) => {
    const r = Z("PopoverTarget", n5, e),
      { children: n, refProp: o, popupType: i } = r,
      l = r5(r, ["children", "refProp", "popupType"]);
    if (!$s(n)) throw new Error(Ew.children);
    const a = l,
      s = kw(),
      c = _n(s.reference, n.ref, t),
      f = s.withRoles
        ? {
            "aria-haspopup": i,
            "aria-expanded": s.opened,
            "aria-controls": s.getDropdownId(),
            id: s.getTargetId(),
          }
        : {};
    return m.exports.cloneElement(
      n,
      rl(
        t5(rl(rl(rl({}, a), f), s.targetProps), {
          className: k0(
            s.targetProps.className,
            a.className,
            n.props.className
          ),
          [o]: c,
        }),
        s.controlled ? null : { onClick: s.onToggle }
      )
    );
  });
Tw.displayName = "@mantine/core/PopoverTarget";
var o5 = J((e, { radius: t, shadow: r }) => ({
  dropdown: {
    position: "absolute",
    backgroundColor: e.white,
    background: e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
    border: `${x(1)} solid ${
      e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2]
    }`,
    padding: `${e.spacing.sm} ${e.spacing.md}`,
    boxShadow: e.shadows[r] || r || "none",
    borderRadius: e.fn.radius(t),
    "&:focus": { outline: 0 },
  },
  arrow: {
    backgroundColor: "inherit",
    border: `${x(1)} solid ${
      e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2]
    }`,
    zIndex: 1,
  },
}));
const i5 = o5;
var l5 = Object.defineProperty,
  zv = Object.getOwnPropertySymbols,
  a5 = Object.prototype.hasOwnProperty,
  s5 = Object.prototype.propertyIsEnumerable,
  Dv = (e, t, r) =>
    t in e
      ? l5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  On = (e, t) => {
    for (var r in t || (t = {})) a5.call(t, r) && Dv(e, r, t[r]);
    if (zv) for (var r of zv(t)) s5.call(t, r) && Dv(e, r, t[r]);
    return e;
  };
const jv = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out",
};
function c5({ transition: e, state: t, duration: r, timingFunction: n }) {
  const o = { transitionDuration: `${r}ms`, transitionTimingFunction: n };
  return typeof e == "string"
    ? e in Qi
      ? On(
          On(
            On({ transitionProperty: Qi[e].transitionProperty }, o),
            Qi[e].common
          ),
          Qi[e][jv[t]]
        )
      : null
    : On(
        On(On({ transitionProperty: e.transitionProperty }, o), e.common),
        e[jv[t]]
      );
}
function u5({
  duration: e,
  exitDuration: t,
  timingFunction: r,
  mounted: n,
  onEnter: o,
  onExit: i,
  onEntered: l,
  onExited: a,
}) {
  const s = nt(),
    c = i1(),
    f = s.respectReducedMotion ? c : !1,
    [u, d] = m.exports.useState(f ? 0 : e),
    [h, y] = m.exports.useState(n ? "entered" : "exited"),
    w = m.exports.useRef(-1),
    P = (v) => {
      const p = v ? o : i,
        g = v ? l : a;
      y(v ? "pre-entering" : "pre-exiting"), window.clearTimeout(w.current);
      const S = f ? 0 : v ? e : t;
      if ((d(S), S === 0))
        typeof p == "function" && p(),
          typeof g == "function" && g(),
          y(v ? "entered" : "exited");
      else {
        const b = window.setTimeout(() => {
          typeof p == "function" && p(), y(v ? "entering" : "exiting");
        }, 10);
        w.current = window.setTimeout(() => {
          window.clearTimeout(b),
            typeof g == "function" && g(),
            y(v ? "entered" : "exited");
        }, S);
      }
    };
  return (
    dt(() => {
      P(n);
    }, [n]),
    m.exports.useEffect(() => () => window.clearTimeout(w.current), []),
    {
      transitionDuration: u,
      transitionStatus: h,
      transitionTimingFunction: r || s.transitionTimingFunction,
    }
  );
}
function Qs({
  keepMounted: e,
  transition: t,
  duration: r = 250,
  exitDuration: n = r,
  mounted: o,
  children: i,
  timingFunction: l,
  onExit: a,
  onEntered: s,
  onEnter: c,
  onExited: f,
}) {
  const {
    transitionDuration: u,
    transitionStatus: d,
    transitionTimingFunction: h,
  } = u5({
    mounted: o,
    exitDuration: n,
    duration: r,
    timingFunction: l,
    onExit: a,
    onEntered: s,
    onEnter: c,
    onExited: f,
  });
  return u === 0
    ? o
      ? _(Br, { children: i({}) })
      : e
      ? i({ display: "none" })
      : null
    : d === "exited"
    ? e
      ? i({ display: "none" })
      : null
    : _(Br, {
        children: i(
          c5({ transition: t, duration: u, state: d, timingFunction: h })
        ),
      });
}
Qs.displayName = "@mantine/core/Transition";
function Iw({ children: e, active: t = !0, refProp: r = "ref" }) {
  const n = HO(t),
    o = _n(n, e == null ? void 0 : e.ref);
  return $s(e) ? m.exports.cloneElement(e, { [r]: o }) : e;
}
Iw.displayName = "@mantine/core/FocusTrap";
var f5 = Object.defineProperty,
  d5 = Object.defineProperties,
  p5 = Object.getOwnPropertyDescriptors,
  Lv = Object.getOwnPropertySymbols,
  m5 = Object.prototype.hasOwnProperty,
  v5 = Object.prototype.propertyIsEnumerable,
  Av = (e, t, r) =>
    t in e
      ? f5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  xr = (e, t) => {
    for (var r in t || (t = {})) m5.call(t, r) && Av(e, r, t[r]);
    if (Lv) for (var r of Lv(t)) v5.call(t, r) && Av(e, r, t[r]);
    return e;
  },
  nl = (e, t) => d5(e, p5(t));
function Mv(e, t, r, n) {
  return e === "center" || n === "center"
    ? { top: t }
    : e === "end"
    ? { bottom: r }
    : e === "start"
    ? { top: r }
    : {};
}
function Fv(e, t, r, n, o) {
  return e === "center" || n === "center"
    ? { left: t }
    : e === "end"
    ? { [o === "ltr" ? "right" : "left"]: r }
    : e === "start"
    ? { [o === "ltr" ? "left" : "right"]: r }
    : {};
}
const h5 = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius",
};
function g5({
  position: e,
  arrowSize: t,
  arrowOffset: r,
  arrowRadius: n,
  arrowPosition: o,
  arrowX: i,
  arrowY: l,
  dir: a,
}) {
  const [s, c = "center"] = e.split("-"),
    f = {
      width: x(t),
      height: x(t),
      transform: "rotate(45deg)",
      position: "absolute",
      [h5[s]]: x(n),
    },
    u = x(-t / 2);
  return s === "left"
    ? nl(xr(xr({}, f), Mv(c, l, r, o)), {
        right: u,
        borderLeftColor: "transparent",
        borderBottomColor: "transparent",
      })
    : s === "right"
    ? nl(xr(xr({}, f), Mv(c, l, r, o)), {
        left: u,
        borderRightColor: "transparent",
        borderTopColor: "transparent",
      })
    : s === "top"
    ? nl(xr(xr({}, f), Fv(c, i, r, o, a)), {
        bottom: u,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
      })
    : s === "bottom"
    ? nl(xr(xr({}, f), Fv(c, i, r, o, a)), {
        top: u,
        borderBottomColor: "transparent",
        borderRightColor: "transparent",
      })
    : {};
}
var y5 = Object.defineProperty,
  w5 = Object.defineProperties,
  _5 = Object.getOwnPropertyDescriptors,
  Ca = Object.getOwnPropertySymbols,
  zw = Object.prototype.hasOwnProperty,
  Dw = Object.prototype.propertyIsEnumerable,
  Vv = (e, t, r) =>
    t in e
      ? y5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  S5 = (e, t) => {
    for (var r in t || (t = {})) zw.call(t, r) && Vv(e, r, t[r]);
    if (Ca) for (var r of Ca(t)) Dw.call(t, r) && Vv(e, r, t[r]);
    return e;
  },
  x5 = (e, t) => w5(e, _5(t)),
  b5 = (e, t) => {
    var r = {};
    for (var n in e) zw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ca)
      for (var n of Ca(e)) t.indexOf(n) < 0 && Dw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const Nd = m.exports.forwardRef((e, t) => {
  var r = e,
    {
      position: n,
      arrowSize: o,
      arrowOffset: i,
      arrowRadius: l,
      arrowPosition: a,
      visible: s,
      arrowX: c,
      arrowY: f,
    } = r,
    u = b5(r, [
      "position",
      "arrowSize",
      "arrowOffset",
      "arrowRadius",
      "arrowPosition",
      "visible",
      "arrowX",
      "arrowY",
    ]);
  const d = nt();
  return s
    ? _("div", {
        ...x5(S5({}, u), {
          ref: t,
          style: g5({
            position: n,
            arrowSize: o,
            arrowOffset: i,
            arrowRadius: l,
            arrowPosition: a,
            dir: d.dir,
            arrowX: c,
            arrowY: f,
          }),
        }),
      })
    : null;
});
Nd.displayName = "@mantine/core/FloatingArrow";
var P5 = Object.defineProperty,
  $5 = Object.defineProperties,
  O5 = Object.getOwnPropertyDescriptors,
  Ea = Object.getOwnPropertySymbols,
  jw = Object.prototype.hasOwnProperty,
  Lw = Object.prototype.propertyIsEnumerable,
  Hv = (e, t, r) =>
    t in e
      ? P5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Cn = (e, t) => {
    for (var r in t || (t = {})) jw.call(t, r) && Hv(e, r, t[r]);
    if (Ea) for (var r of Ea(t)) Lw.call(t, r) && Hv(e, r, t[r]);
    return e;
  },
  ol = (e, t) => $5(e, O5(t)),
  C5 = (e, t) => {
    var r = {};
    for (var n in e) jw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ea)
      for (var n of Ea(e)) t.indexOf(n) < 0 && Lw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const E5 = {};
function Aw(e) {
  var t;
  const r = Z("PopoverDropdown", E5, e),
    { style: n, className: o, children: i, onKeyDownCapture: l } = r,
    a = C5(r, ["style", "className", "children", "onKeyDownCapture"]),
    s = kw(),
    { classes: c, cx: f } = i5(
      { radius: s.radius, shadow: s.shadow },
      {
        name: s.__staticSelector,
        classNames: s.classNames,
        styles: s.styles,
        unstyled: s.unstyled,
        variant: s.variant,
      }
    ),
    u = DO({ opened: s.opened, shouldReturnFocus: s.returnFocus }),
    d = s.withRoles
      ? {
          "aria-labelledby": s.getTargetId(),
          id: s.getDropdownId(),
          role: "dialog",
        }
      : {};
  return s.disabled
    ? null
    : _(Bs, {
        ...ol(Cn({}, s.portalProps), { withinPortal: s.withinPortal }),
        children: _(Qs, {
          ...ol(Cn({ mounted: s.opened }, s.transitionProps), {
            transition: s.transitionProps.transition || "fade",
            duration: (t = s.transitionProps.duration) != null ? t : 150,
            keepMounted: s.keepMounted,
            exitDuration:
              typeof s.transitionProps.exitDuration == "number"
                ? s.transitionProps.exitDuration
                : s.transitionProps.duration,
          }),
          children: (h) => {
            var y, w;
            return _(Iw, {
              active: s.trapFocus,
              children: U(re, {
                ...Cn(
                  ol(Cn({}, d), {
                    tabIndex: -1,
                    ref: s.floating,
                    style: ol(Cn(Cn({}, n), h), {
                      zIndex: s.zIndex,
                      top: (y = s.y) != null ? y : 0,
                      left: (w = s.x) != null ? w : 0,
                      width: s.width === "target" ? void 0 : x(s.width),
                    }),
                    className: f(c.dropdown, o),
                    onKeyDownCapture: hP(s.onClose, {
                      active: s.closeOnEscape,
                      onTrigger: u,
                      onKeyDown: l,
                    }),
                    "data-position": s.placement,
                  }),
                  a
                ),
                children: [
                  i,
                  _(Nd, {
                    ref: s.arrowRef,
                    arrowX: s.arrowX,
                    arrowY: s.arrowY,
                    visible: s.withArrow,
                    position: s.placement,
                    arrowSize: s.arrowSize,
                    arrowRadius: s.arrowRadius,
                    arrowOffset: s.arrowOffset,
                    arrowPosition: s.arrowPosition,
                    className: c.arrow,
                  }),
                ],
              }),
            });
          },
        }),
      });
}
Aw.displayName = "@mantine/core/PopoverDropdown";
function Mw(e, t) {
  if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
    const [r, n] = t.split("-"),
      o = r === "right" ? "left" : "right";
    return n === void 0 ? o : `${o}-${n}`;
  }
  return t;
}
var Bv = Object.getOwnPropertySymbols,
  k5 = Object.prototype.hasOwnProperty,
  R5 = Object.prototype.propertyIsEnumerable,
  N5 = (e, t) => {
    var r = {};
    for (var n in e) k5.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Bv)
      for (var n of Bv(e)) t.indexOf(n) < 0 && R5.call(e, n) && (r[n] = e[n]);
    return r;
  };
const T5 = {
  position: "bottom",
  offset: 8,
  positionDependencies: [],
  transitionProps: { transition: "fade", duration: 150 },
  middlewares: { flip: !0, shift: !0, inline: !1 },
  arrowSize: 7,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  closeOnClickOutside: !0,
  withinPortal: !1,
  closeOnEscape: !0,
  trapFocus: !1,
  withRoles: !0,
  returnFocus: !1,
  clickOutsideEvents: ["mousedown", "touchstart"],
  zIndex: bi("popover"),
  __staticSelector: "Popover",
  width: "max-content",
};
function ur(e) {
  var t, r, n, o, i, l;
  const a = m.exports.useRef(null),
    s = Z("Popover", T5, e),
    {
      children: c,
      position: f,
      offset: u,
      onPositionChange: d,
      positionDependencies: h,
      opened: y,
      transitionProps: w,
      width: P,
      middlewares: v,
      withArrow: p,
      arrowSize: g,
      arrowOffset: S,
      arrowRadius: b,
      arrowPosition: O,
      unstyled: $,
      classNames: C,
      styles: R,
      closeOnClickOutside: E,
      withinPortal: z,
      portalProps: M,
      closeOnEscape: N,
      clickOutsideEvents: T,
      trapFocus: A,
      onClose: H,
      onOpen: G,
      onChange: k,
      zIndex: D,
      radius: j,
      shadow: F,
      id: B,
      defaultOpened: ie,
      __staticSelector: ye,
      withRoles: Q,
      disabled: oe,
      returnFocus: _e,
      variant: Ke,
      keepMounted: de,
    } = s,
    le = N5(s, [
      "children",
      "position",
      "offset",
      "onPositionChange",
      "positionDependencies",
      "opened",
      "transitionProps",
      "width",
      "middlewares",
      "withArrow",
      "arrowSize",
      "arrowOffset",
      "arrowRadius",
      "arrowPosition",
      "unstyled",
      "classNames",
      "styles",
      "closeOnClickOutside",
      "withinPortal",
      "portalProps",
      "closeOnEscape",
      "clickOutsideEvents",
      "trapFocus",
      "onClose",
      "onOpen",
      "onChange",
      "zIndex",
      "radius",
      "shadow",
      "id",
      "defaultOpened",
      "__staticSelector",
      "withRoles",
      "disabled",
      "returnFocus",
      "variant",
      "keepMounted",
    ]),
    [qt, Ft] = m.exports.useState(null),
    [Y, se] = m.exports.useState(null),
    vo = Vs(B),
    Zs = nt(),
    Te = Kk({
      middlewares: v,
      width: P,
      position: Mw(Zs.dir, f),
      offset: typeof u == "number" ? u + (p ? g / 2 : 0) : u,
      arrowRef: a,
      arrowOffset: S,
      onPositionChange: d,
      positionDependencies: h,
      opened: y,
      defaultOpened: ie,
      onChange: k,
      onOpen: G,
      onClose: H,
    });
  NO(() => Te.opened && E && Te.onClose(), T, [qt, Y]);
  const Js = m.exports.useCallback(
      (Pe) => {
        Ft(Pe), Te.floating.reference(Pe);
      },
      [Te.floating.reference]
    ),
    qs = m.exports.useCallback(
      (Pe) => {
        se(Pe), Te.floating.floating(Pe);
      },
      [Te.floating.floating]
    );
  return _(Zk, {
    value: {
      returnFocus: _e,
      disabled: oe,
      controlled: Te.controlled,
      reference: Js,
      floating: qs,
      x: Te.floating.x,
      y: Te.floating.y,
      arrowX:
        (n =
          (r = (t = Te.floating) == null ? void 0 : t.middlewareData) == null
            ? void 0
            : r.arrow) == null
          ? void 0
          : n.x,
      arrowY:
        (l =
          (i = (o = Te.floating) == null ? void 0 : o.middlewareData) == null
            ? void 0
            : i.arrow) == null
          ? void 0
          : l.y,
      opened: Te.opened,
      arrowRef: a,
      transitionProps: w,
      width: P,
      withArrow: p,
      arrowSize: g,
      arrowOffset: S,
      arrowRadius: b,
      arrowPosition: O,
      placement: Te.floating.placement,
      trapFocus: A,
      withinPortal: z,
      portalProps: M,
      zIndex: D,
      radius: j,
      shadow: F,
      closeOnEscape: N,
      onClose: Te.onClose,
      onToggle: Te.onToggle,
      getTargetId: () => `${vo}-target`,
      getDropdownId: () => `${vo}-dropdown`,
      withRoles: Q,
      targetProps: le,
      __staticSelector: ye,
      classNames: C,
      styles: R,
      unstyled: $,
      variant: Ke,
      keepMounted: de,
    },
    children: c,
  });
}
ur.Target = Tw;
ur.Dropdown = Aw;
ur.displayName = "@mantine/core/Popover";
var I5 = Object.defineProperty,
  ka = Object.getOwnPropertySymbols,
  Fw = Object.prototype.hasOwnProperty,
  Vw = Object.prototype.propertyIsEnumerable,
  Wv = (e, t, r) =>
    t in e
      ? I5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  z5 = (e, t) => {
    for (var r in t || (t = {})) Fw.call(t, r) && Wv(e, r, t[r]);
    if (ka) for (var r of ka(t)) Vw.call(t, r) && Wv(e, r, t[r]);
    return e;
  },
  D5 = (e, t) => {
    var r = {};
    for (var n in e) Fw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ka)
      for (var n of ka(e)) t.indexOf(n) < 0 && Vw.call(e, n) && (r[n] = e[n]);
    return r;
  };
function j5(e) {
  var t = e,
    {
      children: r,
      component: n = "div",
      maxHeight: o = 220,
      direction: i = "column",
      id: l,
      innerRef: a,
      __staticSelector: s,
      styles: c,
      classNames: f,
      unstyled: u,
    } = t,
    d = D5(t, [
      "children",
      "component",
      "maxHeight",
      "direction",
      "id",
      "innerRef",
      "__staticSelector",
      "styles",
      "classNames",
      "unstyled",
    ]);
  const { classes: h } = UE(null, {
    name: s,
    styles: c,
    classNames: f,
    unstyled: u,
  });
  return _(ur.Dropdown, {
    ...z5({ p: 0, onMouseDown: (y) => y.preventDefault() }, d),
    children: _("div", {
      style: { maxHeight: x(o), display: "flex" },
      children: _(re, {
        component: n || "div",
        id: `${l}-items`,
        "aria-labelledby": `${l}-label`,
        role: "listbox",
        onMouseDown: (y) => y.preventDefault(),
        style: { flex: 1, overflowY: n !== yd ? "auto" : void 0 },
        "data-combobox-popover": !0,
        tabIndex: -1,
        ref: a,
        children: _("div", {
          className: h.itemsWrapper,
          style: { flexDirection: i },
          children: r,
        }),
      }),
    }),
  });
}
function Yo({
  opened: e,
  transitionProps: t = { transition: "fade", duration: 0 },
  shadow: r,
  withinPortal: n,
  portalProps: o,
  children: i,
  __staticSelector: l,
  onDirectionChange: a,
  switchDirectionOnFlip: s,
  zIndex: c,
  dropdownPosition: f,
  positionDependencies: u = [],
  classNames: d,
  styles: h,
  unstyled: y,
  readOnly: w,
  variant: P,
}) {
  return _(ur, {
    unstyled: y,
    classNames: d,
    styles: h,
    width: "target",
    withRoles: !1,
    opened: e,
    middlewares: { flip: f === "flip", shift: !1 },
    position: f === "flip" ? "bottom" : f,
    positionDependencies: u,
    zIndex: c,
    __staticSelector: l,
    withinPortal: n,
    portalProps: o,
    transitionProps: t,
    shadow: r,
    disabled: w,
    onPositionChange: (v) =>
      s && (a == null ? void 0 : a(v === "top" ? "column-reverse" : "column")),
    variant: P,
    children: i,
  });
}
Yo.Target = ur.Target;
Yo.Dropdown = j5;
var L5 = Object.defineProperty,
  A5 = Object.defineProperties,
  M5 = Object.getOwnPropertyDescriptors,
  Ra = Object.getOwnPropertySymbols,
  Hw = Object.prototype.hasOwnProperty,
  Bw = Object.prototype.propertyIsEnumerable,
  Uv = (e, t, r) =>
    t in e
      ? L5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  il = (e, t) => {
    for (var r in t || (t = {})) Hw.call(t, r) && Uv(e, r, t[r]);
    if (Ra) for (var r of Ra(t)) Bw.call(t, r) && Uv(e, r, t[r]);
    return e;
  },
  F5 = (e, t) => A5(e, M5(t)),
  V5 = (e, t) => {
    var r = {};
    for (var n in e) Hw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ra)
      for (var n of Ra(e)) t.indexOf(n) < 0 && Bw.call(e, n) && (r[n] = e[n]);
    return r;
  };
function Td(e, t, r) {
  const n = Z(e, t, r),
    {
      label: o,
      description: i,
      error: l,
      required: a,
      classNames: s,
      styles: c,
      className: f,
      unstyled: u,
      __staticSelector: d,
      sx: h,
      errorProps: y,
      labelProps: w,
      descriptionProps: P,
      wrapperProps: v,
      id: p,
      size: g,
      style: S,
      inputContainer: b,
      inputWrapperOrder: O,
      withAsterisk: $,
      variant: C,
    } = n,
    R = V5(n, [
      "label",
      "description",
      "error",
      "required",
      "classNames",
      "styles",
      "className",
      "unstyled",
      "__staticSelector",
      "sx",
      "errorProps",
      "labelProps",
      "descriptionProps",
      "wrapperProps",
      "id",
      "size",
      "style",
      "inputContainer",
      "inputWrapperOrder",
      "withAsterisk",
      "variant",
    ]),
    E = Vs(p),
    { systemStyles: z, rest: M } = Hs(R),
    N = il(
      {
        label: o,
        description: i,
        error: l,
        required: a,
        classNames: s,
        className: f,
        __staticSelector: d,
        sx: h,
        errorProps: y,
        labelProps: w,
        descriptionProps: P,
        unstyled: u,
        styles: c,
        id: E,
        size: g,
        style: S,
        inputContainer: b,
        inputWrapperOrder: O,
        withAsterisk: $,
        variant: C,
      },
      v
    );
  return F5(il({}, M), {
    classNames: s,
    styles: c,
    unstyled: u,
    wrapperProps: il(il({}, N), z),
    inputProps: {
      required: a,
      classNames: s,
      styles: c,
      unstyled: u,
      id: E,
      size: g,
      __staticSelector: d,
      error: l,
      variant: C,
    },
  });
}
var H5 = J((e, t, { size: r }) => ({
  label: {
    display: "inline-block",
    fontSize: L({ size: r, sizes: e.fontSizes }),
    fontWeight: 500,
    color: e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.gray[9],
    wordBreak: "break-word",
    cursor: "default",
    WebkitTapHighlightColor: "transparent",
  },
  required: {
    color: e.fn.variant({ variant: "filled", color: "red" }).background,
  },
}));
const B5 = H5;
var W5 = Object.defineProperty,
  Na = Object.getOwnPropertySymbols,
  Ww = Object.prototype.hasOwnProperty,
  Uw = Object.prototype.propertyIsEnumerable,
  Gv = (e, t, r) =>
    t in e
      ? W5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  U5 = (e, t) => {
    for (var r in t || (t = {})) Ww.call(t, r) && Gv(e, r, t[r]);
    if (Na) for (var r of Na(t)) Uw.call(t, r) && Gv(e, r, t[r]);
    return e;
  },
  G5 = (e, t) => {
    var r = {};
    for (var n in e) Ww.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Na)
      for (var n of Na(e)) t.indexOf(n) < 0 && Uw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const Y5 = { labelElement: "label", size: "sm" },
  Id = m.exports.forwardRef((e, t) => {
    const r = Z("InputLabel", Y5, e),
      {
        labelElement: n,
        children: o,
        required: i,
        size: l,
        classNames: a,
        styles: s,
        unstyled: c,
        className: f,
        htmlFor: u,
        __staticSelector: d,
        variant: h,
        onMouseDown: y,
      } = r,
      w = G5(r, [
        "labelElement",
        "children",
        "required",
        "size",
        "classNames",
        "styles",
        "unstyled",
        "className",
        "htmlFor",
        "__staticSelector",
        "variant",
        "onMouseDown",
      ]),
      { classes: P, cx: v } = B5(null, {
        name: ["InputWrapper", d],
        classNames: a,
        styles: s,
        unstyled: c,
        variant: h,
        size: l,
      });
    return U(re, {
      ...U5(
        {
          component: n,
          ref: t,
          className: v(P.label, f),
          htmlFor: n === "label" ? u : void 0,
          onMouseDown: (p) => {
            y == null || y(p),
              !p.defaultPrevented && p.detail > 1 && p.preventDefault();
          },
        },
        w
      ),
      children: [
        o,
        i &&
          _("span", {
            className: P.required,
            "aria-hidden": !0,
            children: " *",
          }),
      ],
    });
  });
Id.displayName = "@mantine/core/InputLabel";
var X5 = J((e, t, { size: r }) => ({
  error: {
    wordBreak: "break-word",
    color: e.fn.variant({ variant: "filled", color: "red" }).background,
    fontSize: `calc(${L({ size: r, sizes: e.fontSizes })} - ${x(2)})`,
    lineHeight: 1.2,
    display: "block",
  },
}));
const Q5 = X5;
var K5 = Object.defineProperty,
  Ta = Object.getOwnPropertySymbols,
  Gw = Object.prototype.hasOwnProperty,
  Yw = Object.prototype.propertyIsEnumerable,
  Yv = (e, t, r) =>
    t in e
      ? K5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Z5 = (e, t) => {
    for (var r in t || (t = {})) Gw.call(t, r) && Yv(e, r, t[r]);
    if (Ta) for (var r of Ta(t)) Yw.call(t, r) && Yv(e, r, t[r]);
    return e;
  },
  J5 = (e, t) => {
    var r = {};
    for (var n in e) Gw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ta)
      for (var n of Ta(e)) t.indexOf(n) < 0 && Yw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const q5 = { size: "sm" },
  zd = m.exports.forwardRef((e, t) => {
    const r = Z("InputError", q5, e),
      {
        children: n,
        className: o,
        classNames: i,
        styles: l,
        unstyled: a,
        size: s,
        __staticSelector: c,
        variant: f,
      } = r,
      u = J5(r, [
        "children",
        "className",
        "classNames",
        "styles",
        "unstyled",
        "size",
        "__staticSelector",
        "variant",
      ]),
      { classes: d, cx: h } = Q5(null, {
        name: ["InputWrapper", c],
        classNames: i,
        styles: l,
        unstyled: a,
        variant: f,
        size: s,
      });
    return _(_t, {
      ...Z5({ className: h(d.error, o), ref: t }, u),
      children: n,
    });
  });
zd.displayName = "@mantine/core/InputError";
var eR = J((e, t, { size: r }) => ({
  description: {
    wordBreak: "break-word",
    color: e.colorScheme === "dark" ? e.colors.dark[2] : e.colors.gray[6],
    fontSize: `calc(${L({ size: r, sizes: e.fontSizes })} - ${x(2)})`,
    lineHeight: 1.2,
    display: "block",
  },
}));
const tR = eR;
var rR = Object.defineProperty,
  Ia = Object.getOwnPropertySymbols,
  Xw = Object.prototype.hasOwnProperty,
  Qw = Object.prototype.propertyIsEnumerable,
  Xv = (e, t, r) =>
    t in e
      ? rR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  nR = (e, t) => {
    for (var r in t || (t = {})) Xw.call(t, r) && Xv(e, r, t[r]);
    if (Ia) for (var r of Ia(t)) Qw.call(t, r) && Xv(e, r, t[r]);
    return e;
  },
  oR = (e, t) => {
    var r = {};
    for (var n in e) Xw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ia)
      for (var n of Ia(e)) t.indexOf(n) < 0 && Qw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const iR = { size: "sm" },
  Dd = m.exports.forwardRef((e, t) => {
    const r = Z("InputDescription", iR, e),
      {
        children: n,
        className: o,
        classNames: i,
        styles: l,
        unstyled: a,
        size: s,
        __staticSelector: c,
        variant: f,
      } = r,
      u = oR(r, [
        "children",
        "className",
        "classNames",
        "styles",
        "unstyled",
        "size",
        "__staticSelector",
        "variant",
      ]),
      { classes: d, cx: h } = tR(null, {
        name: ["InputWrapper", c],
        classNames: i,
        styles: l,
        unstyled: a,
        variant: f,
        size: s,
      });
    return _(_t, {
      ...nR(
        {
          color: "dimmed",
          className: h(d.description, o),
          ref: t,
          unstyled: a,
        },
        u
      ),
      children: n,
    });
  });
Dd.displayName = "@mantine/core/InputDescription";
const Kw = m.exports.createContext({
    offsetBottom: !1,
    offsetTop: !1,
    describedBy: void 0,
  }),
  lR = Kw.Provider,
  aR = () => m.exports.useContext(Kw);
function sR(e, { hasDescription: t, hasError: r }) {
  const n = e.findIndex((s) => s === "input"),
    o = e[n - 1],
    i = e[n + 1];
  return {
    offsetBottom: (t && i === "description") || (r && i === "error"),
    offsetTop: (t && o === "description") || (r && o === "error"),
  };
}
var cR = Object.defineProperty,
  uR = Object.defineProperties,
  fR = Object.getOwnPropertyDescriptors,
  Qv = Object.getOwnPropertySymbols,
  dR = Object.prototype.hasOwnProperty,
  pR = Object.prototype.propertyIsEnumerable,
  Kv = (e, t, r) =>
    t in e
      ? cR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  mR = (e, t) => {
    for (var r in t || (t = {})) dR.call(t, r) && Kv(e, r, t[r]);
    if (Qv) for (var r of Qv(t)) pR.call(t, r) && Kv(e, r, t[r]);
    return e;
  },
  vR = (e, t) => uR(e, fR(t)),
  hR = J((e) => ({
    root: vR(mR({}, e.fn.fontStyles()), { lineHeight: e.lineHeight }),
  }));
const gR = hR;
var yR = Object.defineProperty,
  wR = Object.defineProperties,
  _R = Object.getOwnPropertyDescriptors,
  za = Object.getOwnPropertySymbols,
  Zw = Object.prototype.hasOwnProperty,
  Jw = Object.prototype.propertyIsEnumerable,
  Zv = (e, t, r) =>
    t in e
      ? yR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  br = (e, t) => {
    for (var r in t || (t = {})) Zw.call(t, r) && Zv(e, r, t[r]);
    if (za) for (var r of za(t)) Jw.call(t, r) && Zv(e, r, t[r]);
    return e;
  },
  Jv = (e, t) => wR(e, _R(t)),
  SR = (e, t) => {
    var r = {};
    for (var n in e) Zw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && za)
      for (var n of za(e)) t.indexOf(n) < 0 && Jw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const xR = {
    labelElement: "label",
    size: "sm",
    inputContainer: (e) => e,
    inputWrapperOrder: ["label", "description", "input", "error"],
  },
  qw = m.exports.forwardRef((e, t) => {
    const r = Z("InputWrapper", xR, e),
      {
        className: n,
        label: o,
        children: i,
        required: l,
        id: a,
        error: s,
        description: c,
        labelElement: f,
        labelProps: u,
        descriptionProps: d,
        errorProps: h,
        classNames: y,
        styles: w,
        size: P,
        inputContainer: v,
        __staticSelector: p,
        unstyled: g,
        inputWrapperOrder: S,
        withAsterisk: b,
        variant: O,
      } = r,
      $ = SR(r, [
        "className",
        "label",
        "children",
        "required",
        "id",
        "error",
        "description",
        "labelElement",
        "labelProps",
        "descriptionProps",
        "errorProps",
        "classNames",
        "styles",
        "size",
        "inputContainer",
        "__staticSelector",
        "unstyled",
        "inputWrapperOrder",
        "withAsterisk",
        "variant",
      ]),
      { classes: C, cx: R } = gR(null, {
        classNames: y,
        styles: w,
        name: ["InputWrapper", p],
        unstyled: g,
        variant: O,
        size: P,
      }),
      E = {
        classNames: y,
        styles: w,
        unstyled: g,
        size: P,
        variant: O,
        __staticSelector: p,
      },
      z = typeof b == "boolean" ? b : l,
      M = a ? `${a}-error` : h == null ? void 0 : h.id,
      N = a ? `${a}-description` : d == null ? void 0 : d.id,
      A = `${!!s && typeof s != "boolean" ? M : ""} ${c ? N : ""}`,
      H = A.trim().length > 0 ? A.trim() : void 0,
      G =
        o &&
        _(Id, {
          ...br(
            br(
              {
                key: "label",
                labelElement: f,
                id: a ? `${a}-label` : void 0,
                htmlFor: a,
                required: z,
              },
              E
            ),
            u
          ),
          children: o,
        }),
      k =
        c &&
        _(Dd, {
          ...Jv(br(br({ key: "description" }, d), E), {
            size: (d == null ? void 0 : d.size) || E.size,
            id: (d == null ? void 0 : d.id) || N,
          }),
          children: c,
        }),
      D = _(m.exports.Fragment, { children: v(i) }, "input"),
      j =
        typeof s != "boolean" &&
        s &&
        _(zd, {
          ...Jv(br(br({}, h), E), {
            size: (h == null ? void 0 : h.size) || E.size,
            key: "error",
            id: (h == null ? void 0 : h.id) || M,
          }),
          children: s,
        }),
      F = S.map((B) => {
        switch (B) {
          case "label":
            return G;
          case "input":
            return D;
          case "description":
            return k;
          case "error":
            return j;
          default:
            return null;
        }
      });
    return _(lR, {
      value: br(
        { describedBy: H },
        sR(S, { hasDescription: !!k, hasError: !!j })
      ),
      children: _(re, {
        ...br({ className: R(C.root, n), ref: t }, $),
        children: F,
      }),
    });
  });
qw.displayName = "@mantine/core/InputWrapper";
var bR = Object.defineProperty,
  Da = Object.getOwnPropertySymbols,
  e_ = Object.prototype.hasOwnProperty,
  t_ = Object.prototype.propertyIsEnumerable,
  qv = (e, t, r) =>
    t in e
      ? bR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  PR = (e, t) => {
    for (var r in t || (t = {})) e_.call(t, r) && qv(e, r, t[r]);
    if (Da) for (var r of Da(t)) t_.call(t, r) && qv(e, r, t[r]);
    return e;
  },
  $R = (e, t) => {
    var r = {};
    for (var n in e) e_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Da)
      for (var n of Da(e)) t.indexOf(n) < 0 && t_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const OR = {},
  r_ = m.exports.forwardRef((e, t) => {
    const r = Z("InputPlaceholder", OR, e),
      { sx: n } = r,
      o = $R(r, ["sx"]);
    return _(re, {
      ...PR(
        {
          component: "span",
          sx: [(i) => i.fn.placeholderStyles(), ...O0(n)],
          ref: t,
        },
        o
      ),
    });
  });
r_.displayName = "@mantine/core/InputPlaceholder";
var CR = Object.defineProperty,
  ER = Object.defineProperties,
  kR = Object.getOwnPropertyDescriptors,
  eh = Object.getOwnPropertySymbols,
  RR = Object.prototype.hasOwnProperty,
  NR = Object.prototype.propertyIsEnumerable,
  th = (e, t, r) =>
    t in e
      ? CR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ll = (e, t) => {
    for (var r in t || (t = {})) RR.call(t, r) && th(e, r, t[r]);
    if (eh) for (var r of eh(t)) NR.call(t, r) && th(e, r, t[r]);
    return e;
  },
  Ac = (e, t) => ER(e, kR(t));
const Ue = { xs: x(30), sm: x(36), md: x(42), lg: x(50), xl: x(60) },
  TR = ["default", "filled", "unstyled"];
function IR({ theme: e, variant: t }) {
  return TR.includes(t)
    ? t === "default"
      ? {
          border: `${x(1)} solid ${
            e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[4]
          }`,
          backgroundColor:
            e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
          transition: "border-color 100ms ease",
          "&:focus, &:focus-within": e.focusRingStyles.inputStyles(e),
        }
      : t === "filled"
      ? {
          border: `${x(1)} solid transparent`,
          backgroundColor:
            e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[1],
          "&:focus, &:focus-within": e.focusRingStyles.inputStyles(e),
        }
      : {
          borderWidth: 0,
          color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
          backgroundColor: "transparent",
          minHeight: x(28),
          outline: 0,
          "&:focus, &:focus-within": {
            outline: "none",
            borderColor: "transparent",
          },
          "&:disabled": {
            backgroundColor: "transparent",
            "&:focus, &:focus-within": {
              outline: "none",
              borderColor: "transparent",
            },
          },
        }
    : null;
}
var zR = J(
  (
    e,
    {
      multiline: t,
      radius: r,
      invalid: n,
      rightSectionWidth: o,
      withRightSection: i,
      iconWidth: l,
      offsetBottom: a,
      offsetTop: s,
      pointer: c,
    },
    { variant: f, size: u }
  ) => {
    const d = e.fn.variant({ variant: "filled", color: "red" }).background,
      h =
        f === "default" || f === "filled"
          ? {
              minHeight: L({ size: u, sizes: Ue }),
              paddingLeft: `calc(${L({ size: u, sizes: Ue })}  / 3)`,
              paddingRight: i
                ? o || L({ size: u, sizes: Ue })
                : `calc(${L({ size: u, sizes: Ue })}  / 3)`,
              borderRadius: e.fn.radius(r),
            }
          : f === "unstyled" && i
          ? { paddingRight: o || L({ size: u, sizes: Ue }) }
          : null;
    return {
      wrapper: {
        position: "relative",
        marginTop: s ? `calc(${e.spacing.xs} / 2)` : void 0,
        marginBottom: a ? `calc(${e.spacing.xs} / 2)` : void 0,
        "&:has(input:disabled)": {
          "& .mantine-Input-rightSection": { display: "none" },
        },
      },
      input: Ac(
        ll(
          ll(
            Ac(ll({}, e.fn.fontStyles()), {
              height: t
                ? f === "unstyled"
                  ? void 0
                  : "auto"
                : L({ size: u, sizes: Ue }),
              WebkitTapHighlightColor: "transparent",
              lineHeight: t
                ? e.lineHeight
                : `calc(${L({ size: u, sizes: Ue })} - ${x(2)})`,
              appearance: "none",
              resize: "none",
              boxSizing: "border-box",
              fontSize: L({ size: u, sizes: e.fontSizes }),
              width: "100%",
              color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
              display: "block",
              textAlign: "left",
              cursor: c ? "pointer" : void 0,
            }),
            IR({ theme: e, variant: f })
          ),
          h
        ),
        {
          "&:disabled, &[data-disabled]": {
            backgroundColor:
              e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[1],
            color: e.colors.dark[2],
            opacity: 0.6,
            cursor: "not-allowed",
            pointerEvents: "none",
            "&::placeholder": { color: e.colors.dark[2] },
          },
          "&[data-invalid]": {
            color: d,
            borderColor: d,
            "&::placeholder": { opacity: 1, color: d },
          },
          "&[data-with-icon]": {
            paddingLeft:
              typeof l == "number" ? x(l) : L({ size: u, sizes: Ue }),
          },
          "&::placeholder": Ac(ll({}, e.fn.placeholderStyles()), {
            opacity: 1,
          }),
          "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
            { appearance: "none" },
          "&[type=number]": { MozAppearance: "textfield" },
        }
      ),
      icon: {
        pointerEvents: "none",
        position: "absolute",
        zIndex: 1,
        left: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: l ? x(l) : L({ size: u, sizes: Ue }),
        color: n
          ? e.colors.red[e.colorScheme === "dark" ? 6 : 7]
          : e.colorScheme === "dark"
          ? e.colors.dark[2]
          : e.colors.gray[5],
      },
      rightSection: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: o || L({ size: u, sizes: Ue }),
      },
    };
  }
);
const DR = zR;
var jR = Object.defineProperty,
  LR = Object.defineProperties,
  AR = Object.getOwnPropertyDescriptors,
  ja = Object.getOwnPropertySymbols,
  n_ = Object.prototype.hasOwnProperty,
  o_ = Object.prototype.propertyIsEnumerable,
  rh = (e, t, r) =>
    t in e
      ? jR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  al = (e, t) => {
    for (var r in t || (t = {})) n_.call(t, r) && rh(e, r, t[r]);
    if (ja) for (var r of ja(t)) o_.call(t, r) && rh(e, r, t[r]);
    return e;
  },
  nh = (e, t) => LR(e, AR(t)),
  MR = (e, t) => {
    var r = {};
    for (var n in e) n_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ja)
      for (var n of ja(e)) t.indexOf(n) < 0 && o_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const FR = { size: "sm", variant: "default" },
  bn = m.exports.forwardRef((e, t) => {
    const r = Z("Input", FR, e),
      {
        className: n,
        error: o,
        required: i,
        disabled: l,
        variant: a,
        icon: s,
        style: c,
        rightSectionWidth: f,
        iconWidth: u,
        rightSection: d,
        rightSectionProps: h,
        radius: y,
        size: w,
        wrapperProps: P,
        classNames: v,
        styles: p,
        __staticSelector: g,
        multiline: S,
        sx: b,
        unstyled: O,
        pointer: $,
      } = r,
      C = MR(r, [
        "className",
        "error",
        "required",
        "disabled",
        "variant",
        "icon",
        "style",
        "rightSectionWidth",
        "iconWidth",
        "rightSection",
        "rightSectionProps",
        "radius",
        "size",
        "wrapperProps",
        "classNames",
        "styles",
        "__staticSelector",
        "multiline",
        "sx",
        "unstyled",
        "pointer",
      ]),
      { offsetBottom: R, offsetTop: E, describedBy: z } = aR(),
      { classes: M, cx: N } = DR(
        {
          radius: y,
          multiline: S,
          invalid: !!o,
          rightSectionWidth: f ? x(f) : void 0,
          iconWidth: u,
          withRightSection: !!d,
          offsetBottom: R,
          offsetTop: E,
          pointer: $,
        },
        {
          classNames: v,
          styles: p,
          name: ["Input", g],
          unstyled: O,
          variant: a,
          size: w,
        }
      ),
      { systemStyles: T, rest: A } = Hs(C);
    return U(re, {
      ...al(al({ className: N(M.wrapper, n), sx: b, style: c }, T), P),
      children: [
        s && _("div", { className: M.icon, children: s }),
        _(re, {
          ...nh(al({ component: "input" }, A), {
            ref: t,
            required: i,
            "aria-invalid": !!o,
            "aria-describedby": z,
            disabled: l,
            "data-disabled": l || void 0,
            "data-with-icon": !!s || void 0,
            "data-invalid": !!o || void 0,
            className: M.input,
          }),
        }),
        d &&
          _("div", {
            ...nh(al({}, h), { className: M.rightSection }),
            children: d,
          }),
      ],
    });
  });
bn.displayName = "@mantine/core/Input";
bn.Wrapper = qw;
bn.Label = Id;
bn.Description = Dd;
bn.Error = zd;
bn.Placeholder = r_;
const gr = bn;
var VR = J((e, { orientation: t, buttonBorderWidth: r }) => ({
  root: {
    display: "flex",
    flexDirection: t === "vertical" ? "column" : "row",
    "& [data-button]": {
      "&:first-of-type:not(:last-of-type)": {
        borderBottomRightRadius: 0,
        [t === "vertical"
          ? "borderBottomLeftRadius"
          : "borderTopRightRadius"]: 0,
        [t === "vertical"
          ? "borderBottomWidth"
          : "borderRightWidth"]: `calc(${x(r)} / 2)`,
      },
      "&:last-of-type:not(:first-of-type)": {
        borderTopLeftRadius: 0,
        [t === "vertical"
          ? "borderTopRightRadius"
          : "borderBottomLeftRadius"]: 0,
        [t === "vertical" ? "borderTopWidth" : "borderLeftWidth"]: `calc(${x(
          r
        )} / 2)`,
      },
      "&:not(:first-of-type):not(:last-of-type)": {
        borderRadius: 0,
        [t === "vertical" ? "borderTopWidth" : "borderLeftWidth"]: `calc(${x(
          r
        )} / 2)`,
        [t === "vertical"
          ? "borderBottomWidth"
          : "borderRightWidth"]: `calc(${x(r)} / 2)`,
      },
      "& + [data-button]": {
        [t === "vertical" ? "marginTop" : "marginLeft"]: `calc(${r} * -1)`,
        "@media (min-resolution: 192dpi)": {
          [t === "vertical" ? "marginTop" : "marginLeft"]: 0,
        },
      },
    },
  },
}));
const HR = VR;
var BR = Object.defineProperty,
  La = Object.getOwnPropertySymbols,
  i_ = Object.prototype.hasOwnProperty,
  l_ = Object.prototype.propertyIsEnumerable,
  oh = (e, t, r) =>
    t in e
      ? BR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  WR = (e, t) => {
    for (var r in t || (t = {})) i_.call(t, r) && oh(e, r, t[r]);
    if (La) for (var r of La(t)) l_.call(t, r) && oh(e, r, t[r]);
    return e;
  },
  UR = (e, t) => {
    var r = {};
    for (var n in e) i_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && La)
      for (var n of La(e)) t.indexOf(n) < 0 && l_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const GR = { orientation: "horizontal", buttonBorderWidth: 1 },
  a_ = m.exports.forwardRef((e, t) => {
    const r = Z("ButtonGroup", GR, e),
      { className: n, orientation: o, buttonBorderWidth: i, unstyled: l } = r,
      a = UR(r, ["className", "orientation", "buttonBorderWidth", "unstyled"]),
      { classes: s, cx: c } = HR(
        { orientation: o, buttonBorderWidth: i },
        { name: "ButtonGroup", unstyled: l }
      );
    return _(re, { ...WR({ className: c(s.root, n), ref: t }, a) });
  });
a_.displayName = "@mantine/core/ButtonGroup";
var YR = Object.defineProperty,
  XR = Object.defineProperties,
  QR = Object.getOwnPropertyDescriptors,
  ih = Object.getOwnPropertySymbols,
  KR = Object.prototype.hasOwnProperty,
  ZR = Object.prototype.propertyIsEnumerable,
  lh = (e, t, r) =>
    t in e
      ? YR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  lr = (e, t) => {
    for (var r in t || (t = {})) KR.call(t, r) && lh(e, r, t[r]);
    if (ih) for (var r of ih(t)) ZR.call(t, r) && lh(e, r, t[r]);
    return e;
  },
  Rl = (e, t) => XR(e, QR(t));
const JR = [
    "filled",
    "outline",
    "light",
    "white",
    "default",
    "subtle",
    "gradient",
  ],
  nf = {
    xs: { height: Ue.xs, paddingLeft: x(14), paddingRight: x(14) },
    sm: { height: Ue.sm, paddingLeft: x(18), paddingRight: x(18) },
    md: { height: Ue.md, paddingLeft: x(22), paddingRight: x(22) },
    lg: { height: Ue.lg, paddingLeft: x(26), paddingRight: x(26) },
    xl: { height: Ue.xl, paddingLeft: x(32), paddingRight: x(32) },
    "compact-xs": { height: x(22), paddingLeft: x(7), paddingRight: x(7) },
    "compact-sm": { height: x(26), paddingLeft: x(8), paddingRight: x(8) },
    "compact-md": { height: x(30), paddingLeft: x(10), paddingRight: x(10) },
    "compact-lg": { height: x(34), paddingLeft: x(12), paddingRight: x(12) },
    "compact-xl": { height: x(40), paddingLeft: x(14), paddingRight: x(14) },
  };
function qR({ compact: e, size: t, withLeftIcon: r, withRightIcon: n }) {
  if (e) return nf[`compact-${t}`];
  const o = nf[t];
  return o
    ? Rl(lr({}, o), {
        paddingLeft: r ? `calc(${o.paddingLeft}  / 1.5)` : o.paddingLeft,
        paddingRight: n ? `calc(${o.paddingRight}  / 1.5)` : o.paddingRight,
      })
    : {};
}
const eN = (e) => ({
  display: e ? "block" : "inline-block",
  width: e ? "100%" : "auto",
});
function tN({ variant: e, theme: t, color: r, gradient: n }) {
  if (!JR.includes(e)) return null;
  const o = t.fn.variant({ color: r, variant: e, gradient: n });
  return e === "gradient"
    ? lr(
        { border: 0, backgroundImage: o.background, color: o.color },
        t.fn.hover({ backgroundSize: "200%" })
      )
    : lr(
        {
          border: `${x(1)} solid ${o.border}`,
          backgroundColor: o.background,
          color: o.color,
        },
        t.fn.hover({ backgroundColor: o.hover })
      );
}
var rN = J(
  (
    e,
    {
      radius: t,
      fullWidth: r,
      compact: n,
      withLeftIcon: o,
      withRightIcon: i,
      color: l,
      gradient: a,
    },
    { variant: s, size: c }
  ) => ({
    root: Rl(
      lr(
        Rl(
          lr(
            lr(
              lr(
                lr(
                  {},
                  qR({ compact: n, size: c, withLeftIcon: o, withRightIcon: i })
                ),
                e.fn.fontStyles()
              ),
              e.fn.focusStyles()
            ),
            eN(r)
          ),
          {
            borderRadius: e.fn.radius(t),
            fontWeight: 600,
            position: "relative",
            lineHeight: 1,
            fontSize: L({ size: c, sizes: e.fontSizes }),
            userSelect: "none",
            cursor: "pointer",
          }
        ),
        tN({ variant: s, theme: e, color: l, gradient: a })
      ),
      {
        "&:active": e.activeStyles,
        "&:disabled, &[data-disabled]": {
          borderColor: "transparent",
          backgroundColor:
            e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2],
          color: e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[5],
          cursor: "not-allowed",
          backgroundImage: "none",
          pointerEvents: "none",
          "&:active": { transform: "none" },
        },
        "&[data-loading]": {
          pointerEvents: "none",
          "&::before": Rl(lr({ content: '""' }, e.fn.cover(x(-1))), {
            backgroundColor:
              e.colorScheme === "dark"
                ? e.fn.rgba(e.colors.dark[7], 0.5)
                : "rgba(255, 255, 255, .5)",
            borderRadius: e.fn.radius(t),
            cursor: "not-allowed",
          }),
        },
      }
    ),
    icon: { display: "flex", alignItems: "center" },
    leftIcon: { marginRight: e.spacing.xs },
    rightIcon: { marginLeft: e.spacing.xs },
    centerLoader: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      opacity: 0.5,
    },
    inner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      overflow: "visible",
    },
    label: {
      whiteSpace: "nowrap",
      height: "100%",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
    },
  })
);
const nN = rN;
var oN = Object.defineProperty,
  Aa = Object.getOwnPropertySymbols,
  s_ = Object.prototype.hasOwnProperty,
  c_ = Object.prototype.propertyIsEnumerable,
  ah = (e, t, r) =>
    t in e
      ? oN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  sh = (e, t) => {
    for (var r in t || (t = {})) s_.call(t, r) && ah(e, r, t[r]);
    if (Aa) for (var r of Aa(t)) c_.call(t, r) && ah(e, r, t[r]);
    return e;
  },
  iN = (e, t) => {
    var r = {};
    for (var n in e) s_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Aa)
      for (var n of Aa(e)) t.indexOf(n) < 0 && c_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const lN = {
    size: "sm",
    type: "button",
    variant: "filled",
    loaderPosition: "left",
  },
  jd = m.exports.forwardRef((e, t) => {
    const r = Z("Button", lN, e),
      {
        className: n,
        size: o,
        color: i,
        type: l,
        disabled: a,
        children: s,
        leftIcon: c,
        rightIcon: f,
        fullWidth: u,
        variant: d,
        radius: h,
        uppercase: y,
        compact: w,
        loading: P,
        loaderPosition: v,
        loaderProps: p,
        gradient: g,
        classNames: S,
        styles: b,
        unstyled: O,
      } = r,
      $ = iN(r, [
        "className",
        "size",
        "color",
        "type",
        "disabled",
        "children",
        "leftIcon",
        "rightIcon",
        "fullWidth",
        "variant",
        "radius",
        "uppercase",
        "compact",
        "loading",
        "loaderPosition",
        "loaderProps",
        "gradient",
        "classNames",
        "styles",
        "unstyled",
      ]),
      {
        classes: C,
        cx: R,
        theme: E,
      } = nN(
        {
          radius: h,
          color: i,
          fullWidth: u,
          compact: w,
          gradient: g,
          withLeftIcon: !!c,
          withRightIcon: !!f,
        },
        {
          name: "Button",
          unstyled: O,
          classNames: S,
          styles: b,
          variant: d,
          size: o,
        }
      ),
      z = E.fn.variant({ color: i, variant: d }),
      M = _(hd, {
        ...sh(
          {
            color: z.color,
            size: `calc(${L({ size: o, sizes: nf }).height} / 2)`,
          },
          p
        ),
      });
    return _(d1, {
      ...sh(
        {
          className: R(C.root, n),
          type: l,
          disabled: a,
          "data-button": !0,
          "data-disabled": a || void 0,
          "data-loading": P || void 0,
          ref: t,
          unstyled: O,
        },
        $
      ),
      children: U("div", {
        className: C.inner,
        children: [
          (c || (P && v === "left")) &&
            _("span", {
              className: R(C.icon, C.leftIcon),
              children: P && v === "left" ? M : c,
            }),
          P &&
            v === "center" &&
            _("span", { className: C.centerLoader, children: M }),
          _("span", {
            className: C.label,
            style: { textTransform: y ? "uppercase" : void 0 },
            children: s,
          }),
          (f || (P && v === "right")) &&
            _("span", {
              className: R(C.icon, C.rightIcon),
              children: P && v === "right" ? M : f,
            }),
        ],
      }),
    });
  });
jd.displayName = "@mantine/core/Button";
jd.Group = a_;
const Mc = jd;
var aN = J((e, { inline: t }) => ({
  root: {
    display: t ? "inline-flex" : "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const sN = aN;
var cN = Object.defineProperty,
  Ma = Object.getOwnPropertySymbols,
  u_ = Object.prototype.hasOwnProperty,
  f_ = Object.prototype.propertyIsEnumerable,
  ch = (e, t, r) =>
    t in e
      ? cN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  uN = (e, t) => {
    for (var r in t || (t = {})) u_.call(t, r) && ch(e, r, t[r]);
    if (Ma) for (var r of Ma(t)) f_.call(t, r) && ch(e, r, t[r]);
    return e;
  },
  fN = (e, t) => {
    var r = {};
    for (var n in e) u_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ma)
      for (var n of Ma(e)) t.indexOf(n) < 0 && f_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const d_ = m.exports.forwardRef((e, t) => {
  const r = Z("Center", {}, e),
    { inline: n, className: o, unstyled: i, variant: l } = r,
    a = fN(r, ["inline", "className", "unstyled", "variant"]),
    { classes: s, cx: c } = sN(
      { inline: n },
      { name: "Center", unstyled: i, variant: l }
    );
  return _(re, { ...uN({ ref: t, className: c(s.root, o) }, a) });
});
d_.displayName = "@mantine/core/Center";
const dN = d_;
var pN = Object.defineProperty,
  mN = Object.defineProperties,
  vN = Object.getOwnPropertyDescriptors,
  uh = Object.getOwnPropertySymbols,
  hN = Object.prototype.hasOwnProperty,
  gN = Object.prototype.propertyIsEnumerable,
  fh = (e, t, r) =>
    t in e
      ? pN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  yN = (e, t) => {
    for (var r in t || (t = {})) hN.call(t, r) && fh(e, r, t[r]);
    if (uh) for (var r of uh(t)) gN.call(t, r) && fh(e, r, t[r]);
    return e;
  },
  wN = (e, t) => mN(e, vN(t));
const Fc = { xs: x(16), sm: x(20), md: x(24), lg: x(30), xl: x(36) };
var _N = J((e, { labelPosition: t }, { size: r }) => ({
  root: {},
  body: {
    display: "flex",
    "&:has(input:disabled) label": {
      color: e.colorScheme === "dark" ? e.colors.dark[3] : e.colors.gray[5],
    },
  },
  labelWrapper: wN(yN({}, e.fn.fontStyles()), {
    display: "inline-flex",
    flexDirection: "column",
    WebkitTapHighlightColor: "transparent",
    fontSize: r in Fc ? L({ size: r, sizes: e.fontSizes }) : void 0,
    lineHeight: r in Fc ? L({ size: r, sizes: Fc }) : void 0,
    color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
    cursor: e.cursorType,
    order: t === "left" ? 1 : 2,
  }),
  description: {
    marginTop: `calc(${e.spacing.xs} / 2)`,
    [t === "left" ? "paddingRight" : "paddingLeft"]: e.spacing.sm,
  },
  error: {
    marginTop: `calc(${e.spacing.xs} / 2)`,
    [t === "left" ? "paddingRight" : "paddingLeft"]: e.spacing.sm,
  },
  label: {
    cursor: e.cursorType,
    [t === "left" ? "paddingRight" : "paddingLeft"]: e.spacing.sm,
    "&:disabled, &[data-disabled]": {
      color: e.colorScheme === "dark" ? e.colors.dark[3] : e.colors.gray[5],
    },
  },
}));
const SN = _N;
var xN = Object.defineProperty,
  Fa = Object.getOwnPropertySymbols,
  p_ = Object.prototype.hasOwnProperty,
  m_ = Object.prototype.propertyIsEnumerable,
  dh = (e, t, r) =>
    t in e
      ? xN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  bN = (e, t) => {
    for (var r in t || (t = {})) p_.call(t, r) && dh(e, r, t[r]);
    if (Fa) for (var r of Fa(t)) m_.call(t, r) && dh(e, r, t[r]);
    return e;
  },
  PN = (e, t) => {
    var r = {};
    for (var n in e) p_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Fa)
      for (var n of Fa(e)) t.indexOf(n) < 0 && m_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const v_ = m.exports.forwardRef((e, t) => {
  var r = e,
    {
      __staticSelector: n,
      className: o,
      classNames: i,
      styles: l,
      unstyled: a,
      children: s,
      label: c,
      description: f,
      id: u,
      disabled: d,
      error: h,
      size: y,
      labelPosition: w,
      variant: P,
    } = r,
    v = PN(r, [
      "__staticSelector",
      "className",
      "classNames",
      "styles",
      "unstyled",
      "children",
      "label",
      "description",
      "id",
      "disabled",
      "error",
      "size",
      "labelPosition",
      "variant",
    ]);
  const { classes: p, cx: g } = SN(
    { labelPosition: w },
    { name: n, styles: l, classNames: i, unstyled: a, variant: P, size: y }
  );
  return _(re, {
    ...bN({ className: g(p.root, o), ref: t }, v),
    children: U("div", {
      className: g(p.body),
      children: [
        s,
        U("div", {
          className: p.labelWrapper,
          children: [
            c &&
              _("label", {
                className: p.label,
                "data-disabled": d || void 0,
                htmlFor: u,
                children: c,
              }),
            f && _(gr.Description, { className: p.description, children: f }),
            h &&
              h !== "boolean" &&
              _(gr.Error, { className: p.error, children: h }),
          ],
        }),
      ],
    }),
  });
});
v_.displayName = "@mantine/core/InlineInput";
var $N = Object.defineProperty,
  ON = Object.defineProperties,
  CN = Object.getOwnPropertyDescriptors,
  ph = Object.getOwnPropertySymbols,
  EN = Object.prototype.hasOwnProperty,
  kN = Object.prototype.propertyIsEnumerable,
  mh = (e, t, r) =>
    t in e
      ? $N(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  vh = (e, t) => {
    for (var r in t || (t = {})) EN.call(t, r) && mh(e, r, t[r]);
    if (ph) for (var r of ph(t)) kN.call(t, r) && mh(e, r, t[r]);
    return e;
  },
  hh = (e, t) => ON(e, CN(t)),
  RN = J((e, { radius: t }, { size: r }) => {
    const n = e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[3];
    return {
      root: hh(vh({}, e.fn.focusStyles()), {
        width: x(r),
        height: x(r),
        WebkitTapHighlightColor: "transparent",
        border: 0,
        borderRadius: e.fn.radius(t),
        appearance: "none",
        WebkitAppearance: "none",
        padding: 0,
        position: "relative",
        overflow: "hidden",
      }),
      overlay: hh(vh({}, e.fn.cover()), {
        position: "absolute",
        borderRadius: e.fn.radius(t),
      }),
      children: {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      },
      shadowOverlay: {
        boxShadow: `rgba(0, 0, 0, .1) 0 0 0 ${x(
          1
        )} inset, rgb(0, 0, 0, .15) 0 0 ${x(4)} inset`,
        zIndex: 1,
      },
      alphaOverlay: {
        backgroundImage: `linear-gradient(45deg, ${n} 25%, transparent 25%), linear-gradient(-45deg, ${n} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${n} 75%), linear-gradient(-45deg, ${
          e.colorScheme === "dark" ? e.colors.dark[7] : e.white
        } 75%, ${n} 75%)`,
        backgroundSize: `${x(8)} ${x(8)}`,
        backgroundPosition: `0 0, 0 ${x(4)}, ${x(4)} -${x(4)}, -${x(4)} 0`,
      },
    };
  });
const NN = RN;
var TN = Object.defineProperty,
  Va = Object.getOwnPropertySymbols,
  h_ = Object.prototype.hasOwnProperty,
  g_ = Object.prototype.propertyIsEnumerable,
  gh = (e, t, r) =>
    t in e
      ? TN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  IN = (e, t) => {
    for (var r in t || (t = {})) h_.call(t, r) && gh(e, r, t[r]);
    if (Va) for (var r of Va(t)) g_.call(t, r) && gh(e, r, t[r]);
    return e;
  },
  zN = (e, t) => {
    var r = {};
    for (var n in e) h_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Va)
      for (var n of Va(e)) t.indexOf(n) < 0 && g_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const DN = { size: x(25), radius: x(25), withShadow: !0 },
  y_ = m.exports.forwardRef((e, t) => {
    const r = Z("ColorSwatch", DN, e),
      {
        color: n,
        size: o,
        radius: i,
        className: l,
        children: a,
        classNames: s,
        styles: c,
        unstyled: f,
        withShadow: u,
        variant: d,
      } = r,
      h = zN(r, [
        "color",
        "size",
        "radius",
        "className",
        "children",
        "classNames",
        "styles",
        "unstyled",
        "withShadow",
        "variant",
      ]),
      { classes: y, cx: w } = NN(
        { radius: i },
        {
          classNames: s,
          styles: c,
          unstyled: f,
          name: "ColorSwatch",
          size: o,
          variant: d,
        }
      );
    return U(re, {
      ...IN({ className: w(y.root, l), ref: t }, h),
      children: [
        _("div", { className: w(y.alphaOverlay, y.overlay) }),
        u && _("div", { className: w(y.shadowOverlay, y.overlay) }),
        _("div", { className: y.overlay, style: { backgroundColor: n } }),
        _("div", { className: w(y.children, y.overlay), children: a }),
      ],
    });
  });
y_.displayName = "@mantine/core/ColorSwatch";
const Ld = y_,
  Yt = { xs: x(8), sm: x(12), md: x(16), lg: x(20), xl: x(22) };
var jN = J((e, t, { size: r }) => {
  const n = L({ size: r, sizes: Yt });
  return {
    thumb: {
      overflow: "hidden",
      boxSizing: "border-box",
      position: "absolute",
      boxShadow: `0 0 ${x(1)} rgba(0, 0, 0, .6)`,
      border: `${x(2)} solid ${e.white}`,
      backgroundColor: "transparent",
      width: n,
      height: n,
      borderRadius: n,
    },
  };
});
const LN = jN;
var AN = Object.defineProperty,
  yh = Object.getOwnPropertySymbols,
  MN = Object.prototype.hasOwnProperty,
  FN = Object.prototype.propertyIsEnumerable,
  wh = (e, t, r) =>
    t in e
      ? AN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  VN = (e, t) => {
    for (var r in t || (t = {})) MN.call(t, r) && wh(e, r, t[r]);
    if (yh) for (var r of yh(t)) FN.call(t, r) && wh(e, r, t[r]);
    return e;
  };
function Ad({
  position: e,
  className: t,
  styles: r,
  classNames: n,
  style: o,
  size: i,
  __staticSelector: l,
  unstyled: a,
  variant: s,
}) {
  const { classes: c, cx: f } = LN(null, {
    classNames: n,
    styles: r,
    name: l,
    unstyled: a,
    size: i,
    variant: s,
  });
  return _("div", {
    className: f(c.thumb, t),
    style: VN(
      {
        left: `calc(${e.x * 100}% - ${Yt[i]} / 2)`,
        top: `calc(${e.y * 100}% - ${Yt[i]} / 2)`,
      },
      o
    ),
  });
}
Ad.displayName = "@mantine/core/Thumb";
var HN = Object.defineProperty,
  _h = Object.getOwnPropertySymbols,
  BN = Object.prototype.hasOwnProperty,
  WN = Object.prototype.propertyIsEnumerable,
  Sh = (e, t, r) =>
    t in e
      ? HN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  xh = (e, t) => {
    for (var r in t || (t = {})) BN.call(t, r) && Sh(e, r, t[r]);
    if (_h) for (var r of _h(t)) WN.call(t, r) && Sh(e, r, t[r]);
    return e;
  },
  UN = J((e, t, { size: r }) => ({
    sliderThumb: { ref: Mr("sliderThumb") },
    slider: {
      position: "relative",
      height: `calc(${L({ size: r, sizes: Yt })} + ${x(2)})`,
      boxSizing: "border-box",
      marginLeft: `calc(${L({ size: r, sizes: Yt })} / 2)`,
      marginRight: `calc(${L({ size: r, sizes: Yt })} / 2)`,
      outline: 0,
      [`&:focus .${Mr("sliderThumb")}`]: xh(
        {},
        e.focusRing === "always" || e.focusRing === "auto"
          ? e.focusRingStyles.styles(e)
          : e.focusRingStyles.resetStyles(e)
      ),
      [`&:focus:not(:focus-visible) .${Mr("sliderThumb")}`]: xh(
        {},
        e.focusRing === "auto" || e.focusRing === "never"
          ? e.focusRingStyles.resetStyles(e)
          : null
      ),
    },
    sliderOverlay: {
      position: "absolute",
      boxSizing: "border-box",
      top: 0,
      bottom: 0,
      left: `calc(${L({ size: r, sizes: Yt })} * -1 / 2 - ${x(1)})`,
      right: `calc(${L({ size: r, sizes: Yt })} * -1 / 2 - ${x(1)})`,
      borderRadius: 1e3,
    },
  }));
const GN = UN;
var YN = Object.defineProperty,
  XN = Object.defineProperties,
  QN = Object.getOwnPropertyDescriptors,
  Ha = Object.getOwnPropertySymbols,
  w_ = Object.prototype.hasOwnProperty,
  __ = Object.prototype.propertyIsEnumerable,
  bh = (e, t, r) =>
    t in e
      ? YN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  KN = (e, t) => {
    for (var r in t || (t = {})) w_.call(t, r) && bh(e, r, t[r]);
    if (Ha) for (var r of Ha(t)) __.call(t, r) && bh(e, r, t[r]);
    return e;
  },
  ZN = (e, t) => XN(e, QN(t)),
  JN = (e, t) => {
    var r = {};
    for (var n in e) w_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ha)
      for (var n of Ha(e)) t.indexOf(n) < 0 && __.call(e, n) && (r[n] = e[n]);
    return r;
  };
const Md = m.exports.forwardRef((e, t) => {
  var r = e,
    {
      value: n,
      onChange: o,
      onChangeEnd: i,
      maxValue: l,
      round: a,
      size: s = "md",
      thumbColor: c = "transparent",
      __staticSelector: f = "ColorSlider",
      focusable: u = !0,
      overlays: d,
      classNames: h,
      styles: y,
      className: w,
      unstyled: P,
      variant: v,
    } = r,
    p = JN(r, [
      "value",
      "onChange",
      "onChangeEnd",
      "maxValue",
      "round",
      "size",
      "thumbColor",
      "__staticSelector",
      "focusable",
      "overlays",
      "classNames",
      "styles",
      "className",
      "unstyled",
      "variant",
    ]);
  const { classes: g, cx: S } = GN(null, {
      classNames: h,
      styles: y,
      name: f,
      unstyled: P,
      variant: v,
      size: s,
    }),
    [b, O] = m.exports.useState({ y: 0, x: n / l }),
    $ = m.exports.useRef(b),
    C = (N) => (a ? Math.round(N * l) : N * l),
    { ref: R } = vd(
      ({ x: N, y: T }) => {
        ($.current = { x: N, y: T }), o(C(N));
      },
      {
        onScrubEnd: () => {
          const { x: N } = $.current;
          i(C(N));
        },
      }
    );
  dt(() => {
    O({ y: 0, x: n / l });
  }, [n]);
  const E = (N, T) => {
      N.preventDefault();
      const A = o1(T);
      o(C(A.x)), i(C(A.x));
    },
    z = (N) => {
      switch (N.key) {
        case "ArrowRight": {
          E(N, { x: b.x + 0.05, y: b.y });
          break;
        }
        case "ArrowLeft": {
          E(N, { x: b.x - 0.05, y: b.y });
          break;
        }
      }
    },
    M = d.map((N, T) => _("div", { className: g.sliderOverlay, style: N }, T));
  return U(re, {
    ...ZN(KN({}, p), {
      ref: _n(R, t),
      className: S(g.slider, w),
      role: "slider",
      "aria-valuenow": n,
      "aria-valuemax": l,
      "aria-valuemin": 0,
      tabIndex: u ? 0 : -1,
      onKeyDown: z,
    }),
    children: [
      M,
      _(Ad, {
        __staticSelector: f,
        classNames: h,
        styles: y,
        position: b,
        style: { top: x(1), backgroundColor: c },
        className: g.sliderThumb,
        size: s,
      }),
    ],
  });
});
Md.displayName = "@mantine/core/ColorSlider";
var qN = Object.defineProperty,
  e3 = Object.defineProperties,
  t3 = Object.getOwnPropertyDescriptors,
  Ba = Object.getOwnPropertySymbols,
  S_ = Object.prototype.hasOwnProperty,
  x_ = Object.prototype.propertyIsEnumerable,
  Ph = (e, t, r) =>
    t in e
      ? qN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  r3 = (e, t) => {
    for (var r in t || (t = {})) S_.call(t, r) && Ph(e, r, t[r]);
    if (Ba) for (var r of Ba(t)) x_.call(t, r) && Ph(e, r, t[r]);
    return e;
  },
  n3 = (e, t) => e3(e, t3(t)),
  o3 = (e, t) => {
    var r = {};
    for (var n in e) S_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ba)
      for (var n of Ba(e)) t.indexOf(n) < 0 && x_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const i3 = {},
  b_ = m.exports.forwardRef((e, t) => {
    const r = Z("HueSlider", i3, e),
      { value: n, onChange: o, onChangeEnd: i, __staticSelector: l } = r,
      a = o3(r, ["value", "onChange", "onChangeEnd", "__staticSelector"]);
    return _(Md, {
      ...n3(r3({}, a), {
        ref: t,
        value: n,
        onChange: o,
        onChangeEnd: i,
        maxValue: 360,
        thumbColor: `hsl(${n}, 100%, 50%)`,
        round: !0,
        __staticSelector: l || "HueSlider",
        overlays: [
          {
            backgroundImage:
              "linear-gradient(to right,hsl(0,100%,50%),hsl(60,100%,50%),hsl(120,100%,50%),hsl(170,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%),hsl(360,100%,50%))",
          },
          {
            boxShadow: `rgba(0, 0, 0, .1) 0 0 0 ${x(
              1
            )} inset, rgb(0, 0, 0, .15) 0 0 ${x(4)} inset`,
          },
        ],
      }),
    });
  });
b_.displayName = "@mantine/core/HueSlider";
var l3 = Object.defineProperty,
  a3 = Object.defineProperties,
  s3 = Object.getOwnPropertyDescriptors,
  $h = Object.getOwnPropertySymbols,
  c3 = Object.prototype.hasOwnProperty,
  u3 = Object.prototype.propertyIsEnumerable,
  Oh = (e, t, r) =>
    t in e
      ? l3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Ch = (e, t) => {
    for (var r in t || (t = {})) c3.call(t, r) && Oh(e, r, t[r]);
    if ($h) for (var r of $h(t)) u3.call(t, r) && Oh(e, r, t[r]);
    return e;
  },
  Eh = (e, t) => a3(e, s3(t));
function xt(e, t = 0, r = 10 ** t) {
  return Math.round(r * e) / r;
}
function f3({ h: e, s: t, l: r, a: n }) {
  const o = t * ((r < 50 ? r : 100 - r) / 100);
  return { h: e, s: o > 0 ? ((2 * o) / (r + o)) * 100 : 0, v: r + o, a: n };
}
const d3 = { grad: 360 / 400, turn: 360, rad: 360 / (Math.PI * 2) };
function p3(e, t = "deg") {
  return Number(e) * (d3[t] || 1);
}
const m3 =
  /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;
function kh(e) {
  const t = m3.exec(e);
  return t
    ? f3({
        h: p3(t[1], t[2]),
        s: Number(t[3]),
        l: Number(t[4]),
        a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
      })
    : { h: 0, s: 0, v: 0, a: 1 };
}
function of({ r: e, g: t, b: r, a: n }) {
  const o = Math.max(e, t, r),
    i = o - Math.min(e, t, r),
    l = i
      ? o === e
        ? (t - r) / i
        : o === t
        ? 2 + (r - e) / i
        : 4 + (e - t) / i
      : 0;
  return {
    h: xt(60 * (l < 0 ? l + 6 : l), 3),
    s: xt(o ? (i / o) * 100 : 0, 3),
    v: xt((o / 255) * 100, 3),
    a: n,
  };
}
function lf(e) {
  const t = e[0] === "#" ? e.slice(1) : e;
  return t.length === 3
    ? of({
        r: parseInt(t[0] + t[0], 16),
        g: parseInt(t[1] + t[1], 16),
        b: parseInt(t[2] + t[2], 16),
        a: 1,
      })
    : of({
        r: parseInt(t.slice(0, 2), 16),
        g: parseInt(t.slice(2, 4), 16),
        b: parseInt(t.slice(4, 6), 16),
        a: 1,
      });
}
function v3(e) {
  const t = e[0] === "#" ? e.slice(1) : e,
    r = (l) => xt(parseInt(l, 16) / 255, 3);
  if (t.length === 4) {
    const l = t.slice(0, 3),
      a = r(t[3] + t[3]);
    return Eh(Ch({}, lf(l)), { a });
  }
  const n = t.slice(0, 6),
    o = r(t.slice(6, 8));
  return Eh(Ch({}, lf(n)), { a: o });
}
const h3 =
  /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;
function Rh(e) {
  const t = h3.exec(e);
  return t
    ? of({
        r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
        g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
        b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
        a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
      })
    : { h: 0, s: 0, v: 0, a: 1 };
}
const P_ = {
    hex: /^#?([0-9A-F]{3}){1,2}$/i,
    hexa: /^#?([0-9A-F]{4}){1,2}$/i,
    rgb: /^rgb\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/i,
    rgba: /^rgba\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/i,
    hsl: /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/i,
    hsla: /^hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*(\d*(?:\.\d+)?)\)$/i,
  },
  g3 = { hex: lf, hexa: v3, rgb: Rh, rgba: Rh, hsl: kh, hsla: kh };
function jo(e) {
  for (const [, t] of Object.entries(P_)) if (t.test(e)) return !0;
  return !1;
}
function ln(e) {
  if (typeof e != "string") return { h: 0, s: 0, v: 0, a: 1 };
  if (e === "transparent") return { h: 0, s: 0, v: 0, a: 0 };
  const t = e.trim();
  for (const [r, n] of Object.entries(P_)) if (n.test(t)) return g3[r](t);
  return { h: 0, s: 0, v: 0, a: 1 };
}
var y3 = Object.defineProperty,
  w3 = Object.defineProperties,
  _3 = Object.getOwnPropertyDescriptors,
  Wa = Object.getOwnPropertySymbols,
  $_ = Object.prototype.hasOwnProperty,
  O_ = Object.prototype.propertyIsEnumerable,
  Nh = (e, t, r) =>
    t in e
      ? y3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  S3 = (e, t) => {
    for (var r in t || (t = {})) $_.call(t, r) && Nh(e, r, t[r]);
    if (Wa) for (var r of Wa(t)) O_.call(t, r) && Nh(e, r, t[r]);
    return e;
  },
  x3 = (e, t) => w3(e, _3(t)),
  b3 = (e, t) => {
    var r = {};
    for (var n in e) $_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Wa)
      for (var n of Wa(e)) t.indexOf(n) < 0 && O_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const P3 = {},
  C_ = m.exports.forwardRef((e, t) => {
    const r = Z("AlphaSlider", P3, e),
      {
        value: n,
        onChange: o,
        onChangeEnd: i,
        color: l,
        __staticSelector: a,
      } = r,
      s = b3(r, [
        "value",
        "onChange",
        "onChangeEnd",
        "color",
        "__staticSelector",
      ]),
      c = nt(),
      f = c.colorScheme === "dark" ? c.colors.dark[4] : c.colors.gray[3];
    return _(Md, {
      ...x3(S3({}, s), {
        ref: t,
        value: n,
        onChange: (u) => o(xt(u, 2)),
        onChangeEnd: (u) => i(xt(u, 2)),
        maxValue: 1,
        round: !1,
        __staticSelector: a || "AlphaSlider",
        overlays: [
          {
            backgroundImage: `linear-gradient(45deg, ${f} 25%, transparent 25%), linear-gradient(-45deg, ${f} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${f} 75%), linear-gradient(-45deg, ${
              c.colorScheme === "dark" ? c.colors.dark[7] : c.white
            } 75%, ${f} 75%)`,
            backgroundSize: `${x(8)} ${x(8)}`,
            backgroundPosition: `0 0, 0 ${x(4)}, ${x(4)} -${x(4)}, -${x(4)} 0`,
          },
          { backgroundImage: `linear-gradient(90deg, transparent, ${l})` },
          {
            boxShadow: `rgba(0, 0, 0, .1) 0 0 0 ${x(
              1
            )} inset, rgb(0, 0, 0, .15) 0 0 ${x(4)} inset`,
          },
        ],
      }),
    });
  });
C_.displayName = "@mantine/core/AlphaSlider";
var $3 = Object.defineProperty,
  Th = Object.getOwnPropertySymbols,
  O3 = Object.prototype.hasOwnProperty,
  C3 = Object.prototype.propertyIsEnumerable,
  Ih = (e, t, r) =>
    t in e
      ? $3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Vc = (e, t) => {
    for (var r in t || (t = {})) O3.call(t, r) && Ih(e, r, t[r]);
    if (Th) for (var r of Th(t)) C3.call(t, r) && Ih(e, r, t[r]);
    return e;
  };
const E3 = { xs: x(100), sm: x(110), md: x(120), lg: x(140), xl: x(160) };
var k3 = J((e, t, { size: r }) => ({
  saturationThumb: { ref: Mr("saturationThumb") },
  saturation: {
    boxSizing: "border-box",
    position: "relative",
    height: L({ size: r, sizes: E3 }),
    borderRadius: e.radius.sm,
    margin: `calc(${L({ size: r, sizes: Yt })} / 2)`,
    WebkitTapHighlightColor: "transparent",
    [`&:focus .${Mr("saturationThumb")}`]: Vc(
      {},
      e.focusRing === "always" || e.focusRing === "auto"
        ? e.focusRingStyles.styles(e)
        : e.focusRingStyles.resetStyles(e)
    ),
    [`&:focus:not(:focus-visible) .${Mr("saturationThumb")}`]: Vc(
      {},
      e.focusRing === "auto" || e.focusRing === "never"
        ? e.focusRingStyles.resetStyles(e)
        : null
    ),
  },
  saturationOverlay: Vc(
    { boxSizing: "border-box", borderRadius: e.radius.sm },
    e.fn.cover(`calc(${L({ size: r, sizes: Yt })} * -1 / 2 - ${x(1)})`)
  ),
}));
const R3 = k3;
function E_({ h: e, s: t, v: r, a: n }) {
  const o = (e / 360) * 6,
    i = t / 100,
    l = r / 100,
    a = Math.floor(o),
    s = l * (1 - i),
    c = l * (1 - (o - a) * i),
    f = l * (1 - (1 - o + a) * i),
    u = a % 6;
  return {
    r: xt([l, c, s, s, f, l][u] * 255),
    g: xt([f, l, l, c, s, s][u] * 255),
    b: xt([s, s, f, l, l, c][u] * 255),
    a: xt(n, 2),
  };
}
function zh(e, t) {
  const { r, g: n, b: o, a: i } = E_(e);
  return t ? `rgba(${r}, ${n}, ${o}, ${xt(i, 2)})` : `rgb(${r}, ${n}, ${o})`;
}
function Dh({ h: e, s: t, v: r, a: n }, o) {
  const i = ((200 - t) * r) / 100,
    l = {
      h: Math.round(e),
      s: Math.round(
        i > 0 && i < 200 ? ((t * r) / 100 / (i <= 100 ? i : 200 - i)) * 100 : 0
      ),
      l: Math.round(i / 2),
    };
  return o
    ? `hsla(${l.h}, ${l.s}%, ${l.l}%, ${xt(n, 2)})`
    : `hsl(${l.h}, ${l.s}%, ${l.l}%)`;
}
function Nl(e) {
  const t = e.toString(16);
  return t.length < 2 ? `0${t}` : t;
}
function k_(e) {
  const { r: t, g: r, b: n } = E_(e);
  return `#${Nl(t)}${Nl(r)}${Nl(n)}`;
}
function N3(e) {
  const t = Math.round(e.a * 255);
  return `${k_(e)}${Nl(t)}`;
}
const Hc = {
  hex: k_,
  hexa: (e) => N3(e),
  rgb: (e) => zh(e, !1),
  rgba: (e) => zh(e, !0),
  hsl: (e) => Dh(e, !1),
  hsla: (e) => Dh(e, !0),
};
function It(e, t) {
  return t ? (e in Hc ? Hc[e](t) : Hc.hex(t)) : "#000000";
}
function R_({
  value: e,
  onChange: t,
  onChangeEnd: r,
  focusable: n = !0,
  __staticSelector: o = "saturation",
  size: i,
  color: l,
  saturationLabel: a,
  classNames: s,
  styles: c,
  unstyled: f,
  variant: u,
}) {
  const { classes: d } = R3(null, {
      classNames: s,
      styles: c,
      name: o,
      unstyled: f,
      variant: u,
      size: i,
    }),
    [h, y] = m.exports.useState({ x: e.s / 100, y: 1 - e.v / 100 }),
    w = m.exports.useRef(h),
    { ref: P } = vd(
      ({ x: g, y: S }) => {
        (w.current = { x: g, y: S }),
          t({ s: Math.round(g * 100), v: Math.round((1 - S) * 100) });
      },
      {
        onScrubEnd: () => {
          const { x: g, y: S } = w.current;
          r({ s: Math.round(g * 100), v: Math.round((1 - S) * 100) });
        },
      }
    );
  m.exports.useEffect(() => {
    y({ x: e.s / 100, y: 1 - e.v / 100 });
  }, [e.s, e.v]);
  const v = (g, S) => {
      g.preventDefault();
      const b = o1(S);
      t({ s: Math.round(b.x * 100), v: Math.round((1 - b.y) * 100) }),
        r({ s: Math.round(b.x * 100), v: Math.round((1 - b.y) * 100) });
    },
    p = (g) => {
      switch (g.key) {
        case "ArrowUp": {
          v(g, { y: h.y - 0.05, x: h.x });
          break;
        }
        case "ArrowDown": {
          v(g, { y: h.y + 0.05, x: h.x });
          break;
        }
        case "ArrowRight": {
          v(g, { x: h.x + 0.05, y: h.y });
          break;
        }
        case "ArrowLeft": {
          v(g, { x: h.x - 0.05, y: h.y });
          break;
        }
      }
    };
  return U("div", {
    className: d.saturation,
    ref: P,
    role: "slider",
    "aria-label": a,
    "aria-valuenow": h.x,
    "aria-valuetext": It("rgba", e),
    tabIndex: n ? 0 : -1,
    onKeyDown: p,
    children: [
      _("div", {
        className: d.saturationOverlay,
        style: { backgroundColor: `hsl(${e.h}, 100%, 50%)` },
      }),
      _("div", {
        className: d.saturationOverlay,
        style: { backgroundImage: "linear-gradient(90deg, #fff, transparent)" },
      }),
      _("div", {
        className: d.saturationOverlay,
        style: { backgroundImage: "linear-gradient(0deg, #000, transparent)" },
      }),
      _(Ad, {
        __staticSelector: o,
        classNames: s,
        styles: c,
        position: h,
        className: d.saturationThumb,
        style: { backgroundColor: l },
        size: i,
      }),
    ],
  });
}
R_.displayName = "@mantine/core/Saturation";
var T3 = J((e, { swatchesPerRow: t }) => ({
  swatch: {
    width: `calc(${100 / t}% - ${x(4)})`,
    height: 0,
    paddingBottom: `calc(${100 / t}% - ${x(4)})`,
    margin: x(2),
    boxSizing: "content-box",
  },
  swatches: {
    boxSizing: "border-box",
    marginLeft: x(-2),
    marginRight: x(-2),
    display: "flex",
    flexWrap: "wrap",
  },
}));
const I3 = T3;
var z3 = Object.defineProperty,
  Ua = Object.getOwnPropertySymbols,
  N_ = Object.prototype.hasOwnProperty,
  T_ = Object.prototype.propertyIsEnumerable,
  jh = (e, t, r) =>
    t in e
      ? z3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  D3 = (e, t) => {
    for (var r in t || (t = {})) N_.call(t, r) && jh(e, r, t[r]);
    if (Ua) for (var r of Ua(t)) T_.call(t, r) && jh(e, r, t[r]);
    return e;
  },
  j3 = (e, t) => {
    var r = {};
    for (var n in e) N_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ua)
      for (var n of Ua(e)) t.indexOf(n) < 0 && T_.call(e, n) && (r[n] = e[n]);
    return r;
  };
function I_(e) {
  var t = e,
    {
      data: r,
      swatchesPerRow: n = 10,
      focusable: o = !0,
      classNames: i,
      styles: l,
      __staticSelector: a = "color-picker",
      unstyled: s,
      setValue: c,
      onChangeEnd: f,
      variant: u,
      size: d,
    } = t,
    h = j3(t, [
      "data",
      "swatchesPerRow",
      "focusable",
      "classNames",
      "styles",
      "__staticSelector",
      "unstyled",
      "setValue",
      "onChangeEnd",
      "variant",
      "size",
    ]);
  const { classes: y } = I3(
      { swatchesPerRow: n },
      { classNames: i, styles: l, name: a, unstyled: s, variant: u, size: d }
    ),
    w = r.map((P, v) =>
      _(
        Ld,
        {
          className: y.swatch,
          component: "button",
          type: "button",
          color: P,
          radius: "sm",
          onClick: () => {
            c(P), f == null || f(P);
          },
          style: { cursor: "pointer" },
          "aria-label": P,
          tabIndex: o ? 0 : -1,
        },
        v
      )
    );
  return _("div", { ...D3({ className: y.swatches }, h), children: w });
}
I_.displayName = "@mantine/core/Swatches";
const L3 = { xs: x(180), sm: x(200), md: x(240), lg: x(280), xl: x(320) };
var A3 = J((e, { fullWidth: t }, { size: r }) => ({
  preview: {},
  wrapper: {
    boxSizing: "border-box",
    width: t ? "100%" : L({ size: r, sizes: L3 }),
    padding: x(1),
  },
  body: {
    display: "flex",
    boxSizing: "border-box",
    paddingTop: `calc(${L({ size: r, sizes: e.spacing })} / 2)`,
  },
  sliders: {
    flex: 1,
    boxSizing: "border-box",
    "&:not(:only-child)": { marginRight: e.spacing.xs },
  },
  slider: { boxSizing: "border-box", "& + &": { marginTop: x(5) } },
  swatch: { cursor: "pointer" },
}));
const M3 = A3;
var F3 = Object.defineProperty,
  V3 = Object.defineProperties,
  H3 = Object.getOwnPropertyDescriptors,
  Ga = Object.getOwnPropertySymbols,
  z_ = Object.prototype.hasOwnProperty,
  D_ = Object.prototype.propertyIsEnumerable,
  Lh = (e, t, r) =>
    t in e
      ? F3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  En = (e, t) => {
    for (var r in t || (t = {})) z_.call(t, r) && Lh(e, r, t[r]);
    if (Ga) for (var r of Ga(t)) D_.call(t, r) && Lh(e, r, t[r]);
    return e;
  },
  Bc = (e, t) => V3(e, H3(t)),
  B3 = (e, t) => {
    var r = {};
    for (var n in e) z_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ga)
      for (var n of Ga(e)) t.indexOf(n) < 0 && D_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const W3 = { xs: 26, sm: 34, md: 42, lg: 50, xl: 54 },
  U3 = {
    swatchesPerRow: 10,
    size: "sm",
    withPicker: !0,
    focusable: !0,
    __staticSelector: "ColorPicker",
  },
  j_ = m.exports.forwardRef((e, t) => {
    const r = Z("ColorPicker", U3, e),
      {
        value: n,
        defaultValue: o,
        onChange: i,
        onChangeEnd: l,
        format: a,
        swatches: s,
        swatchesPerRow: c,
        size: f,
        withPicker: u,
        fullWidth: d,
        focusable: h,
        __staticSelector: y,
        saturationLabel: w,
        hueLabel: P,
        alphaLabel: v,
        className: p,
        styles: g,
        classNames: S,
        unstyled: b,
        onColorSwatchClick: O,
        variant: $,
      } = r,
      C = B3(r, [
        "value",
        "defaultValue",
        "onChange",
        "onChangeEnd",
        "format",
        "swatches",
        "swatchesPerRow",
        "size",
        "withPicker",
        "fullWidth",
        "focusable",
        "__staticSelector",
        "saturationLabel",
        "hueLabel",
        "alphaLabel",
        "className",
        "styles",
        "classNames",
        "unstyled",
        "onColorSwatchClick",
        "variant",
      ]),
      { classes: R, cx: E } = M3(
        { fullWidth: d },
        { classNames: S, styles: g, name: y, unstyled: b, variant: $, size: f }
      ),
      z = m.exports.useRef(a),
      M = m.exports.useRef(null),
      N = m.exports.useRef(!0),
      T = a === "hexa" || a === "rgba" || a === "hsla",
      [A, H, G] = Wr({
        value: n,
        defaultValue: o,
        finalValue: "#FFFFFF",
        onChange: i,
      }),
      [k, D] = m.exports.useState(ln(A)),
      j = (F) => {
        (N.current = !1),
          D((B) => {
            const ie = En(En({}, B), F);
            return (M.current = It(z.current, ie)), ie;
          }),
          H(M.current),
          setTimeout(() => {
            N.current = !0;
          }, 0);
      };
    return (
      dt(() => {
        jo(n) && N.current && (D(ln(n)), (N.current = !0));
      }, [n]),
      dt(() => {
        (z.current = a), H(It(a, k));
      }, [a]),
      U(re, {
        ...En({ className: E(R.wrapper, p), ref: t }, C),
        children: [
          u &&
            U(Br, {
              children: [
                _(R_, {
                  value: k,
                  onChange: j,
                  onChangeEnd: ({ s: F, v: B }) =>
                    l == null
                      ? void 0
                      : l(It(z.current, Bc(En({}, k), { s: F, v: B }))),
                  color: A,
                  styles: g,
                  classNames: S,
                  size: f,
                  focusable: h,
                  saturationLabel: w,
                  __staticSelector: y,
                }),
                U("div", {
                  className: R.body,
                  children: [
                    U("div", {
                      className: R.sliders,
                      children: [
                        _(b_, {
                          value: k.h,
                          onChange: (F) => j({ h: F }),
                          onChangeEnd: (F) =>
                            l == null
                              ? void 0
                              : l(It(z.current, Bc(En({}, k), { h: F }))),
                          size: f,
                          styles: g,
                          classNames: S,
                          focusable: h,
                          "aria-label": P,
                          __staticSelector: y,
                        }),
                        T &&
                          _(C_, {
                            value: k.a,
                            onChange: (F) => j({ a: F }),
                            onChangeEnd: (F) => {
                              l == null ||
                                l(It(z.current, Bc(En({}, k), { a: F })));
                            },
                            size: f,
                            color: It("hex", k),
                            style: { marginTop: x(6) },
                            styles: g,
                            classNames: S,
                            focusable: h,
                            "aria-label": v,
                            __staticSelector: y,
                          }),
                      ],
                    }),
                    T &&
                      _(Ld, {
                        color: A,
                        radius: "sm",
                        size: L({ size: f, sizes: W3 }),
                        className: R.preview,
                      }),
                  ],
                }),
              ],
            }),
          Array.isArray(s) &&
            _(I_, {
              data: s,
              style: { marginTop: x(5) },
              swatchesPerRow: c,
              focusable: h,
              classNames: S,
              styles: g,
              __staticSelector: y,
              setValue: H,
              onChangeEnd: (F) => {
                const B = It(a, ln(F));
                O == null || O(B), l == null || l(B), G || D(ln(F));
              },
            }),
        ],
      })
    );
  });
j_.displayName = "@mantine/core/ColorPicker";
var G3 = Object.defineProperty,
  Ya = Object.getOwnPropertySymbols,
  L_ = Object.prototype.hasOwnProperty,
  A_ = Object.prototype.propertyIsEnumerable,
  Ah = (e, t, r) =>
    t in e
      ? G3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Mh = (e, t) => {
    for (var r in t || (t = {})) L_.call(t, r) && Ah(e, r, t[r]);
    if (Ya) for (var r of Ya(t)) A_.call(t, r) && Ah(e, r, t[r]);
    return e;
  },
  Y3 = (e, t) => {
    var r = {};
    for (var n in e) L_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ya)
      for (var n of Ya(e)) t.indexOf(n) < 0 && A_.call(e, n) && (r[n] = e[n]);
    return r;
  };
function X3(e) {
  var t = e,
    { size: r, style: n } = t,
    o = Y3(t, ["size", "style"]);
  return U("svg", {
    ...Mh(
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-color-picker",
        style: Mh({ width: r, height: r }, n),
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      o
    ),
    children: [
      _("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      _("path", { d: "M11 7l6 6" }),
      _("path", {
        d: "M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z",
      }),
    ],
  });
}
var Q3 = Object.defineProperty,
  K3 = Object.defineProperties,
  Z3 = Object.getOwnPropertyDescriptors,
  Xa = Object.getOwnPropertySymbols,
  M_ = Object.prototype.hasOwnProperty,
  F_ = Object.prototype.propertyIsEnumerable,
  Fh = (e, t, r) =>
    t in e
      ? Q3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Wc = (e, t) => {
    for (var r in t || (t = {})) M_.call(t, r) && Fh(e, r, t[r]);
    if (Xa) for (var r of Xa(t)) F_.call(t, r) && Fh(e, r, t[r]);
    return e;
  },
  Vh = (e, t) => K3(e, Z3(t)),
  J3 = (e, t) => {
    var r = {};
    for (var n in e) M_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Xa)
      for (var n of Xa(e)) t.indexOf(n) < 0 && F_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const q3 = { xs: x(16), sm: x(18), md: x(22), lg: x(28), xl: x(36) },
  e4 = { xs: x(14), sm: x(16), md: x(18), lg: x(20), xl: x(22) },
  t4 = {
    size: "sm",
    format: "hex",
    fixOnBlur: !0,
    withPreview: !0,
    swatchesPerRow: 10,
    withPicker: !0,
    transitionProps: { transition: "fade", duration: 0 },
    dropdownZIndex: bi("popover"),
    withinPortal: !0,
    shadow: "md",
    withEyeDropper: !0,
  },
  af = m.exports.forwardRef((e, t) => {
    const r = Td("ColorInput", t4, e),
      {
        wrapperProps: n,
        inputProps: o,
        format: i,
        onChange: l,
        onChangeEnd: a,
        onFocus: s,
        onBlur: c,
        onClick: f,
        value: u,
        defaultValue: d,
        disallowInput: h,
        fixOnBlur: y,
        withPreview: w,
        swatchesPerRow: P,
        withPicker: v,
        icon: p,
        transitionProps: g,
        dropdownZIndex: S,
        withinPortal: b,
        portalProps: O,
        swatches: $,
        shadow: C,
        classNames: R,
        styles: E,
        unstyled: z,
        readOnly: M,
        withEyeDropper: N,
        eyeDropperIcon: T,
        rightSection: A,
        closeOnColorSwatchClick: H,
        disabled: G,
        eyeDropperLabel: k,
      } = r,
      D = J3(r, [
        "wrapperProps",
        "inputProps",
        "format",
        "onChange",
        "onChangeEnd",
        "onFocus",
        "onBlur",
        "onClick",
        "value",
        "defaultValue",
        "disallowInput",
        "fixOnBlur",
        "withPreview",
        "swatchesPerRow",
        "withPicker",
        "icon",
        "transitionProps",
        "dropdownZIndex",
        "withinPortal",
        "portalProps",
        "swatches",
        "shadow",
        "classNames",
        "styles",
        "unstyled",
        "readOnly",
        "withEyeDropper",
        "eyeDropperIcon",
        "rightSection",
        "closeOnColorSwatchClick",
        "disabled",
        "eyeDropperLabel",
      ]),
      j = nt(),
      [F, B] = m.exports.useState(!1),
      [ie, ye] = m.exports.useState(""),
      [Q, oe] = Wr({ value: u, defaultValue: d, finalValue: "", onChange: l }),
      { supported: _e, open: Ke } = JO(),
      de = _(da, {
        sx: { color: j.colorScheme === "dark" ? j.colors.dark[0] : j.black },
        size: o.size,
        "aria-label": k,
        onClick: () =>
          Ke()
            .then(({ sRGBHex: Y }) => {
              const se = It(i, ln(Y));
              oe(se), a == null || a(se);
            })
            .catch(C0),
        children: T || _(X3, { size: L({ size: o.size, sizes: e4 }) }),
      }),
      le = (Y) => {
        s == null || s(Y), B(!0);
      },
      qt = (Y) => {
        y && oe(ie), c == null || c(Y), B(!1);
      },
      Ft = (Y) => {
        f == null || f(Y), B(!0);
      };
    return (
      m.exports.useEffect(() => {
        (jo(Q) || Q.trim() === "") && ye(Q);
      }, [Q]),
      dt(() => {
        jo(Q) && oe(It(i, ln(Q)));
      }, [i]),
      _(gr.Wrapper, {
        ...Vh(Wc({}, n), { __staticSelector: "ColorInput" }),
        children: U(ur, {
          __staticSelector: "ColorInput",
          position: "bottom-start",
          offset: 5,
          zIndex: S,
          withinPortal: b,
          portalProps: O,
          transitionProps: g,
          opened: F,
          shadow: C,
          classNames: R,
          styles: E,
          unstyled: z,
          disabled: M || (v === !1 && (!Array.isArray($) || $.length === 0)),
          children: [
            _(ur.Target, {
              children: _("div", {
                children: _(gr, {
                  ...Vh(Wc(Wc({ autoComplete: "off" }, D), o), {
                    disabled: G,
                    ref: t,
                    __staticSelector: "ColorInput",
                    onFocus: le,
                    onBlur: qt,
                    onClick: Ft,
                    spellCheck: !1,
                    value: Q,
                    onChange: (Y) => {
                      const se = Y.currentTarget.value;
                      oe(se), jo(se) && (a == null || a(It(i, ln(se))));
                    },
                    icon:
                      p ||
                      (w
                        ? _(Ld, {
                            color: jo(Q) ? Q : "#fff",
                            size: L({ size: o.size, sizes: q3 }),
                          })
                        : null),
                    readOnly: h || M,
                    sx: { cursor: h ? "pointer" : void 0 },
                    unstyled: z,
                    classNames: R,
                    styles: E,
                    rightSection: A || (N && !G && !M && _e ? de : null),
                  }),
                }),
              }),
            }),
            _(ur.Dropdown, {
              onMouseDown: (Y) => Y.preventDefault(),
              p: o.size,
              children: _(j_, {
                __staticSelector: "ColorInput",
                value: Q,
                onChange: oe,
                onChangeEnd: a,
                format: i,
                swatches: $,
                swatchesPerRow: P,
                withPicker: v,
                size: o.size,
                focusable: !1,
                unstyled: z,
                styles: E,
                classNames: R,
                onColorSwatchClick: () => H && B(!1),
              }),
            }),
          ],
        }),
      })
    );
  });
af.displayName = "@mantine/core/ColorInput";
function r4(e) {
  return m.exports.Children.toArray(e).filter(Boolean);
}
const n4 = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
  apart: "space-between",
};
var o4 = J(
  (e, { spacing: t, position: r, noWrap: n, grow: o, align: i, count: l }) => ({
    root: {
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "row",
      alignItems: i || "center",
      flexWrap: n ? "nowrap" : "wrap",
      justifyContent: n4[r],
      gap: L({ size: t, sizes: e.spacing }),
      "& > *": {
        boxSizing: "border-box",
        maxWidth: o
          ? `calc(${100 / l}% - (${x(L({ size: t, sizes: e.spacing }))} - ${L({
              size: t,
              sizes: e.spacing,
            })} / ${l}))`
          : void 0,
        flexGrow: o ? 1 : 0,
      },
    },
  })
);
const i4 = o4;
var l4 = Object.defineProperty,
  Qa = Object.getOwnPropertySymbols,
  V_ = Object.prototype.hasOwnProperty,
  H_ = Object.prototype.propertyIsEnumerable,
  Hh = (e, t, r) =>
    t in e
      ? l4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  a4 = (e, t) => {
    for (var r in t || (t = {})) V_.call(t, r) && Hh(e, r, t[r]);
    if (Qa) for (var r of Qa(t)) H_.call(t, r) && Hh(e, r, t[r]);
    return e;
  },
  s4 = (e, t) => {
    var r = {};
    for (var n in e) V_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Qa)
      for (var n of Qa(e)) t.indexOf(n) < 0 && H_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const c4 = { position: "left", spacing: "md" },
  gt = m.exports.forwardRef((e, t) => {
    const r = Z("Group", c4, e),
      {
        className: n,
        position: o,
        align: i,
        children: l,
        noWrap: a,
        grow: s,
        spacing: c,
        unstyled: f,
        variant: u,
      } = r,
      d = s4(r, [
        "className",
        "position",
        "align",
        "children",
        "noWrap",
        "grow",
        "spacing",
        "unstyled",
        "variant",
      ]),
      h = r4(l),
      { classes: y, cx: w } = i4(
        {
          align: i,
          grow: s,
          noWrap: a,
          spacing: c,
          position: o,
          count: h.length,
        },
        { unstyled: f, name: "Group", variant: u }
      );
    return _(re, {
      ...a4({ className: w(y.root, n), ref: t }, d),
      children: h,
    });
  });
gt.displayName = "@mantine/core/Group";
var u4 = Object.defineProperty,
  Ka = Object.getOwnPropertySymbols,
  B_ = Object.prototype.hasOwnProperty,
  W_ = Object.prototype.propertyIsEnumerable,
  Bh = (e, t, r) =>
    t in e
      ? u4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Wh = (e, t) => {
    for (var r in t || (t = {})) B_.call(t, r) && Bh(e, r, t[r]);
    if (Ka) for (var r of Ka(t)) W_.call(t, r) && Bh(e, r, t[r]);
    return e;
  },
  f4 = (e, t) => {
    var r = {};
    for (var n in e) B_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ka)
      for (var n of Ka(e)) t.indexOf(n) < 0 && W_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const d4 = { xs: x(14), sm: x(18), md: x(20), lg: x(24), xl: x(28) };
function p4(e) {
  var t = e,
    { size: r, error: n, style: o } = t,
    i = f4(t, ["size", "error", "style"]);
  const l = nt(),
    a = L({ size: r, sizes: d4 });
  return _("svg", {
    ...Wh(
      {
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: Wh(
          {
            color: n ? l.colors.red[6] : l.colors.gray[6],
            width: a,
            height: a,
          },
          o
        ),
        "data-chevron": !0,
      },
      i
    ),
    children: _("path", {
      d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }),
  });
}
var m4 = Object.defineProperty,
  v4 = Object.defineProperties,
  h4 = Object.getOwnPropertyDescriptors,
  Uh = Object.getOwnPropertySymbols,
  g4 = Object.prototype.hasOwnProperty,
  y4 = Object.prototype.propertyIsEnumerable,
  Gh = (e, t, r) =>
    t in e
      ? m4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  w4 = (e, t) => {
    for (var r in t || (t = {})) g4.call(t, r) && Gh(e, r, t[r]);
    if (Uh) for (var r of Uh(t)) y4.call(t, r) && Gh(e, r, t[r]);
    return e;
  },
  _4 = (e, t) => v4(e, h4(t));
function U_({
  shouldClear: e,
  clearButtonProps: t,
  onClear: r,
  size: n,
  error: o,
}) {
  return e
    ? _(vC, {
        ..._4(w4({}, t), {
          variant: "transparent",
          onClick: r,
          size: n,
          onMouseDown: (i) => i.preventDefault(),
        }),
      })
    : _(p4, { error: o, size: n });
}
U_.displayName = "@mantine/core/SelectRightSection";
var S4 = Object.defineProperty,
  x4 = Object.defineProperties,
  b4 = Object.getOwnPropertyDescriptors,
  Za = Object.getOwnPropertySymbols,
  G_ = Object.prototype.hasOwnProperty,
  Y_ = Object.prototype.propertyIsEnumerable,
  Yh = (e, t, r) =>
    t in e
      ? S4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Uc = (e, t) => {
    for (var r in t || (t = {})) G_.call(t, r) && Yh(e, r, t[r]);
    if (Za) for (var r of Za(t)) Y_.call(t, r) && Yh(e, r, t[r]);
    return e;
  },
  Xh = (e, t) => x4(e, b4(t)),
  P4 = (e, t) => {
    var r = {};
    for (var n in e) G_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Za)
      for (var n of Za(e)) t.indexOf(n) < 0 && Y_.call(e, n) && (r[n] = e[n]);
    return r;
  };
function $4(e) {
  var t = e,
    { styles: r, rightSection: n, rightSectionWidth: o, theme: i } = t,
    l = P4(t, ["styles", "rightSection", "rightSectionWidth", "theme"]);
  if (n) return { rightSection: n, rightSectionWidth: o, styles: r };
  const a = typeof r == "function" ? r(i) : r;
  return {
    rightSection:
      !l.readOnly && !(l.disabled && l.shouldClear) && _(U_, { ...Uc({}, l) }),
    styles: Xh(Uc({}, a), {
      rightSection: Xh(Uc({}, a == null ? void 0 : a.rightSection), {
        pointerEvents: l.shouldClear ? void 0 : "none",
      }),
    }),
  };
}
var O4 = Object.defineProperty,
  C4 = Object.defineProperties,
  E4 = Object.getOwnPropertyDescriptors,
  Ja = Object.getOwnPropertySymbols,
  X_ = Object.prototype.hasOwnProperty,
  Q_ = Object.prototype.propertyIsEnumerable,
  Qh = (e, t, r) =>
    t in e
      ? O4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Gc = (e, t) => {
    for (var r in t || (t = {})) X_.call(t, r) && Qh(e, r, t[r]);
    if (Ja) for (var r of Ja(t)) Q_.call(t, r) && Qh(e, r, t[r]);
    return e;
  },
  k4 = (e, t) => C4(e, E4(t)),
  R4 = (e, t) => {
    var r = {};
    for (var n in e) X_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ja)
      for (var n of Ja(e)) t.indexOf(n) < 0 && Q_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const N4 = { type: "text", size: "sm", __staticSelector: "TextInput" },
  K_ = m.exports.forwardRef((e, t) => {
    const r = Td("TextInput", N4, e),
      { inputProps: n, wrapperProps: o } = r,
      i = R4(r, ["inputProps", "wrapperProps"]);
    return _(gr.Wrapper, {
      ...Gc({}, o),
      children: _(gr, { ...k4(Gc(Gc({}, n), i), { ref: t }) }),
    });
  });
K_.displayName = "@mantine/core/TextInput";
const Z_ = m.exports.createContext(!1),
  T4 = Z_.Provider,
  I4 = () => m.exports.useContext(Z_);
function J_({ children: e, openDelay: t = 0, closeDelay: r = 0 }) {
  return _(T4, {
    value: !0,
    children: _(jk, { delay: { open: t, close: r }, children: e }),
  });
}
J_.displayName = "@mantine/core/TooltipGroup";
var z4 = Object.defineProperty,
  D4 = Object.defineProperties,
  j4 = Object.getOwnPropertyDescriptors,
  Kh = Object.getOwnPropertySymbols,
  L4 = Object.prototype.hasOwnProperty,
  A4 = Object.prototype.propertyIsEnumerable,
  Zh = (e, t, r) =>
    t in e
      ? z4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Jh = (e, t) => {
    for (var r in t || (t = {})) L4.call(t, r) && Zh(e, r, t[r]);
    if (Kh) for (var r of Kh(t)) A4.call(t, r) && Zh(e, r, t[r]);
    return e;
  },
  M4 = (e, t) => D4(e, j4(t));
function F4(e, t) {
  if (!t)
    return {
      backgroundColor:
        e.colorScheme === "dark" ? e.colors.gray[2] : e.colors.gray[9],
      color: e.colorScheme === "dark" ? e.black : e.white,
    };
  const r = e.fn.variant({ variant: "filled", color: t, primaryFallback: !1 });
  return { backgroundColor: r.background, color: r.color };
}
var V4 = J((e, { color: t, radius: r, width: n, multiline: o }) => ({
  tooltip: M4(Jh(Jh({}, e.fn.fontStyles()), F4(e, t)), {
    lineHeight: e.lineHeight,
    fontSize: e.fontSizes.sm,
    borderRadius: e.fn.radius(r),
    padding: `calc(${e.spacing.xs} / 2) ${e.spacing.xs}`,
    position: "absolute",
    whiteSpace: o ? "unset" : "nowrap",
    pointerEvents: "none",
    width: n,
  }),
  arrow: { backgroundColor: "inherit", border: 0, zIndex: 1 },
}));
const q_ = V4,
  eS = {
    children:
      "Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported",
  };
function H4({ offset: e, position: t }) {
  const [r, n] = m.exports.useState(!1),
    o = m.exports.useRef(),
    {
      x: i,
      y: l,
      reference: a,
      floating: s,
      refs: c,
      update: f,
      placement: u,
    } = Rd({
      placement: t,
      middleware: [Pd({ crossAxis: !0, padding: 5, rootBoundary: "document" })],
    }),
    d = u.includes("right") ? e : t.includes("left") ? e * -1 : 0,
    h = u.includes("bottom") ? e : t.includes("top") ? e * -1 : 0,
    y = m.exports.useCallback(
      ({ clientX: w, clientY: P }) => {
        a({
          getBoundingClientRect() {
            return {
              width: 0,
              height: 0,
              x: w,
              y: P,
              left: w + d,
              top: P + h,
              right: w,
              bottom: P,
            };
          },
        });
      },
      [a]
    );
  return (
    m.exports.useEffect(() => {
      if (c.floating.current) {
        const w = o.current;
        w.addEventListener("mousemove", y);
        const P = Fr(c.floating.current);
        return (
          P.forEach((v) => {
            v.addEventListener("scroll", f);
          }),
          () => {
            w.removeEventListener("mousemove", y),
              P.forEach((v) => {
                v.removeEventListener("scroll", f);
              });
          }
        );
      }
    }, [a, c.floating.current, f, y, r]),
    {
      handleMouseMove: y,
      x: i,
      y: l,
      opened: r,
      setOpened: n,
      boundaryRef: o,
      floating: s,
    }
  );
}
var B4 = Object.defineProperty,
  W4 = Object.defineProperties,
  U4 = Object.getOwnPropertyDescriptors,
  qa = Object.getOwnPropertySymbols,
  tS = Object.prototype.hasOwnProperty,
  rS = Object.prototype.propertyIsEnumerable,
  qh = (e, t, r) =>
    t in e
      ? B4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  sl = (e, t) => {
    for (var r in t || (t = {})) tS.call(t, r) && qh(e, r, t[r]);
    if (qa) for (var r of qa(t)) rS.call(t, r) && qh(e, r, t[r]);
    return e;
  },
  cl = (e, t) => W4(e, U4(t)),
  G4 = (e, t) => {
    var r = {};
    for (var n in e) tS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && qa)
      for (var n of qa(e)) t.indexOf(n) < 0 && rS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const Y4 = {
  refProp: "ref",
  withinPortal: !0,
  offset: 10,
  position: "right",
  zIndex: bi("popover"),
};
function nS(e) {
  var t;
  const r = Z("TooltipFloating", Y4, e),
    {
      children: n,
      refProp: o,
      withinPortal: i,
      portalProps: l,
      style: a,
      className: s,
      classNames: c,
      styles: f,
      unstyled: u,
      radius: d,
      color: h,
      label: y,
      offset: w,
      position: P,
      multiline: v,
      width: p,
      zIndex: g,
      disabled: S,
      variant: b,
    } = r,
    O = G4(r, [
      "children",
      "refProp",
      "withinPortal",
      "portalProps",
      "style",
      "className",
      "classNames",
      "styles",
      "unstyled",
      "radius",
      "color",
      "label",
      "offset",
      "position",
      "multiline",
      "width",
      "zIndex",
      "disabled",
      "variant",
    ]),
    {
      handleMouseMove: $,
      x: C,
      y: R,
      opened: E,
      boundaryRef: z,
      floating: M,
      setOpened: N,
    } = H4({ offset: w, position: P }),
    { classes: T, cx: A } = q_(
      { radius: d, color: h, multiline: v, width: p },
      {
        name: "TooltipFloating",
        classNames: c,
        styles: f,
        unstyled: u,
        variant: b,
      }
    );
  if (!$s(n)) throw new Error(eS.children);
  const H = _n(z, n.ref),
    G = (D) => {
      var j, F;
      (F = (j = n.props).onMouseEnter) == null || F.call(j, D), $(D), N(!0);
    },
    k = (D) => {
      var j, F;
      (F = (j = n.props).onMouseLeave) == null || F.call(j, D), N(!1);
    };
  return U(Br, {
    children: [
      _(Bs, {
        ...cl(sl({}, l), { withinPortal: i }),
        children: _(re, {
          ...cl(sl({}, O), {
            ref: M,
            className: A(T.tooltip, s),
            style: cl(sl({}, a), {
              zIndex: g,
              display: !S && E ? "block" : "none",
              top: R != null ? R : "",
              left: (t = Math.round(C)) != null ? t : "",
            }),
          }),
          children: y,
        }),
      }),
      m.exports.cloneElement(
        n,
        cl(sl({}, n.props), { [o]: H, onMouseEnter: G, onMouseLeave: k })
      ),
    ],
  });
}
nS.displayName = "@mantine/core/TooltipFloating";
function X4(e) {
  const [t, r] = m.exports.useState(!1),
    o = typeof e.opened == "boolean" ? e.opened : t,
    i = I4(),
    l = Vs(),
    { delay: a, currentId: s, setCurrentId: c } = $w(),
    f = m.exports.useCallback(
      (C) => {
        r(C), C && c(l);
      },
      [c, l]
    ),
    {
      x: u,
      y: d,
      reference: h,
      floating: y,
      context: w,
      refs: P,
      update: v,
      placement: p,
      middlewareData: { arrow: { x: g, y: S } = {} },
    } = Rd({
      placement: e.position,
      open: o,
      onOpenChange: f,
      middleware: [
        dw(e.offset),
        Pd({ padding: 8 }),
        cw(),
        _w({ element: e.arrowRef, padding: e.arrowOffset }),
        ...(e.inline ? [fw()] : []),
      ],
    }),
    { getReferenceProps: b, getFloatingProps: O } = Xk([
      Dk(w, {
        enabled: e.events.hover,
        delay: i ? a : { open: e.openDelay, close: e.closeDelay },
        mouseOnly: !e.events.touch,
      }),
      Gk(w, { enabled: e.events.focus, keyboardOnly: !0 }),
      Yk(w, { role: "tooltip" }),
      Uk(w, { enabled: typeof e.opened === void 0 }),
      Lk(w, { id: l }),
    ]);
  return (
    Cw({
      opened: o,
      position: e.position,
      positionDependencies: e.positionDependencies,
      floating: { refs: P, update: v },
    }),
    dt(() => {
      var C;
      (C = e.onPositionChange) == null || C.call(e, p);
    }, [p]),
    {
      x: u,
      y: d,
      arrowX: g,
      arrowY: S,
      reference: h,
      floating: y,
      getFloatingProps: O,
      getReferenceProps: b,
      isGroupPhase: o && s && s !== l,
      opened: o,
      placement: p,
    }
  );
}
var Q4 = Object.defineProperty,
  K4 = Object.defineProperties,
  Z4 = Object.getOwnPropertyDescriptors,
  es = Object.getOwnPropertySymbols,
  oS = Object.prototype.hasOwnProperty,
  iS = Object.prototype.propertyIsEnumerable,
  eg = (e, t, r) =>
    t in e
      ? Q4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Jr = (e, t) => {
    for (var r in t || (t = {})) oS.call(t, r) && eg(e, r, t[r]);
    if (es) for (var r of es(t)) iS.call(t, r) && eg(e, r, t[r]);
    return e;
  },
  Yc = (e, t) => K4(e, Z4(t)),
  J4 = (e, t) => {
    var r = {};
    for (var n in e) oS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && es)
      for (var n of es(e)) t.indexOf(n) < 0 && iS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const q4 = {
    position: "top",
    refProp: "ref",
    withinPortal: !1,
    inline: !1,
    arrowSize: 4,
    arrowOffset: 5,
    arrowRadius: 0,
    arrowPosition: "side",
    offset: 5,
    transitionProps: { duration: 100, transition: "fade" },
    width: "auto",
    events: { hover: !0, focus: !1, touch: !1 },
    zIndex: bi("popover"),
    positionDependencies: [],
  },
  Ks = m.exports.forwardRef((e, t) => {
    var r;
    const n = m.exports.useRef(null),
      o = Z("Tooltip", q4, e),
      {
        children: i,
        position: l,
        refProp: a,
        label: s,
        openDelay: c,
        closeDelay: f,
        onPositionChange: u,
        opened: d,
        withinPortal: h,
        portalProps: y,
        radius: w,
        color: P,
        classNames: v,
        styles: p,
        unstyled: g,
        style: S,
        className: b,
        withArrow: O,
        arrowSize: $,
        arrowOffset: C,
        arrowRadius: R,
        arrowPosition: E,
        offset: z,
        transitionProps: M,
        multiline: N,
        width: T,
        events: A,
        zIndex: H,
        disabled: G,
        positionDependencies: k,
        onClick: D,
        onMouseEnter: j,
        onMouseLeave: F,
        inline: B,
        variant: ie,
        keepMounted: ye,
      } = o,
      Q = J4(o, [
        "children",
        "position",
        "refProp",
        "label",
        "openDelay",
        "closeDelay",
        "onPositionChange",
        "opened",
        "withinPortal",
        "portalProps",
        "radius",
        "color",
        "classNames",
        "styles",
        "unstyled",
        "style",
        "className",
        "withArrow",
        "arrowSize",
        "arrowOffset",
        "arrowRadius",
        "arrowPosition",
        "offset",
        "transitionProps",
        "multiline",
        "width",
        "events",
        "zIndex",
        "disabled",
        "positionDependencies",
        "onClick",
        "onMouseEnter",
        "onMouseLeave",
        "inline",
        "variant",
        "keepMounted",
      ]),
      {
        classes: oe,
        cx: _e,
        theme: Ke,
      } = q_(
        { radius: w, color: P, width: T, multiline: N },
        { name: "Tooltip", classNames: v, styles: p, unstyled: g, variant: ie }
      ),
      de = X4({
        position: Mw(Ke.dir, l),
        closeDelay: f,
        openDelay: c,
        onPositionChange: u,
        opened: d,
        events: A,
        arrowRef: n,
        arrowOffset: C,
        offset: z + (O ? $ / 2 : 0),
        positionDependencies: [...k, i],
        inline: B,
      });
    if (!$s(i)) throw new Error(eS.children);
    const le = _n(de.reference, i.ref, t);
    return U(Br, {
      children: [
        _(Bs, {
          ...Yc(Jr({}, y), { withinPortal: h }),
          children: _(Qs, {
            ...Yc(Jr({ keepMounted: ye, mounted: !G && de.opened }, M), {
              transition: M.transition || "fade",
              duration: de.isGroupPhase
                ? 10
                : (r = M.duration) != null
                ? r
                : 100,
            }),
            children: (qt) => {
              var Ft, Y;
              return U(re, {
                ...Jr(
                  Jr({}, Q),
                  de.getFloatingProps({
                    ref: de.floating,
                    className: oe.tooltip,
                    style: Yc(Jr(Jr({}, S), qt), {
                      zIndex: H,
                      top: (Ft = de.y) != null ? Ft : 0,
                      left: (Y = de.x) != null ? Y : 0,
                    }),
                  })
                ),
                children: [
                  s,
                  _(Nd, {
                    ref: n,
                    arrowX: de.arrowX,
                    arrowY: de.arrowY,
                    visible: O,
                    position: de.placement,
                    arrowSize: $,
                    arrowOffset: C,
                    arrowRadius: R,
                    arrowPosition: E,
                    className: oe.arrow,
                  }),
                ],
              });
            },
          }),
        }),
        m.exports.cloneElement(
          i,
          de.getReferenceProps(
            Jr(
              {
                onClick: D,
                onMouseEnter: j,
                onMouseLeave: F,
                onMouseMove: e.onMouseMove,
                onPointerDown: e.onPointerDown,
                onPointerEnter: e.onPointerEnter,
                [a]: le,
                className: _e(b, i.props.className),
              },
              i.props
            )
          )
        ),
      ],
    });
  });
Ks.Group = J_;
Ks.Floating = nS;
Ks.displayName = "@mantine/core/Tooltip";
const tg = Ks;
function e6({
  data: e,
  searchable: t,
  limit: r,
  searchValue: n,
  filter: o,
  value: i,
  filterDataOnExactSearchMatch: l,
}) {
  if (!t) return e;
  const a = (i != null && e.find((c) => c.value === i)) || null;
  if (a && !l && (a == null ? void 0 : a.label) === n) {
    if (r) {
      if (r >= e.length) return e;
      const c = e.indexOf(a),
        f = c + r,
        u = f - e.length;
      return u > 0 ? e.slice(c - u) : e.slice(c, f);
    }
    return e;
  }
  const s = [];
  for (
    let c = 0;
    c < e.length && (o(n, e[c]) && s.push(e[c]), !(s.length >= r));
    c += 1
  );
  return s;
}
var t6 = J(() => ({
  input: {
    "&:not(:disabled)": {
      cursor: "pointer",
      "&::selection": { backgroundColor: "transparent" },
    },
  },
}));
const r6 = t6;
var n6 = Object.defineProperty,
  o6 = Object.defineProperties,
  i6 = Object.getOwnPropertyDescriptors,
  ts = Object.getOwnPropertySymbols,
  lS = Object.prototype.hasOwnProperty,
  aS = Object.prototype.propertyIsEnumerable,
  rg = (e, t, r) =>
    t in e
      ? n6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  No = (e, t) => {
    for (var r in t || (t = {})) lS.call(t, r) && rg(e, r, t[r]);
    if (ts) for (var r of ts(t)) aS.call(t, r) && rg(e, r, t[r]);
    return e;
  },
  Xc = (e, t) => o6(e, i6(t)),
  l6 = (e, t) => {
    var r = {};
    for (var n in e) lS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ts)
      for (var n of ts(e)) t.indexOf(n) < 0 && aS.call(e, n) && (r[n] = e[n]);
    return r;
  };
function a6(e, t) {
  return t.label.toLowerCase().trim().includes(e.toLowerCase().trim());
}
function s6(e, t) {
  return !!e && !t.some((r) => r.label.toLowerCase() === e.toLowerCase());
}
const c6 = {
    required: !1,
    size: "sm",
    shadow: "sm",
    itemComponent: B1,
    transitionProps: { transition: "fade", duration: 0 },
    initiallyOpened: !1,
    filter: a6,
    maxDropdownHeight: 220,
    searchable: !1,
    clearable: !1,
    limit: 1 / 0,
    disabled: !1,
    creatable: !1,
    shouldCreate: s6,
    selectOnBlur: !1,
    switchDirectionOnFlip: !1,
    filterDataOnExactSearchMatch: !1,
    zIndex: bi("popover"),
    positionDependencies: [],
    dropdownPosition: "flip",
  },
  sf = m.exports.forwardRef((e, t) => {
    const r = Td("Select", c6, e),
      {
        inputProps: n,
        wrapperProps: o,
        shadow: i,
        data: l,
        value: a,
        defaultValue: s,
        onChange: c,
        itemComponent: f,
        onKeyDown: u,
        onBlur: d,
        onFocus: h,
        transitionProps: y,
        initiallyOpened: w,
        unstyled: P,
        classNames: v,
        styles: p,
        filter: g,
        maxDropdownHeight: S,
        searchable: b,
        clearable: O,
        nothingFound: $,
        limit: C,
        disabled: R,
        onSearchChange: E,
        searchValue: z,
        rightSection: M,
        rightSectionWidth: N,
        creatable: T,
        getCreateLabel: A,
        shouldCreate: H,
        selectOnBlur: G,
        onCreate: k,
        dropdownComponent: D,
        onDropdownClose: j,
        onDropdownOpen: F,
        withinPortal: B,
        portalProps: ie,
        switchDirectionOnFlip: ye,
        zIndex: Q,
        name: oe,
        dropdownPosition: _e,
        allowDeselect: Ke,
        placeholder: de,
        filterDataOnExactSearchMatch: le,
        form: qt,
        positionDependencies: Ft,
        readOnly: Y,
        clearButtonProps: se,
        hoverOnSearchChange: vo,
      } = r,
      Zs = l6(r, [
        "inputProps",
        "wrapperProps",
        "shadow",
        "data",
        "value",
        "defaultValue",
        "onChange",
        "itemComponent",
        "onKeyDown",
        "onBlur",
        "onFocus",
        "transitionProps",
        "initiallyOpened",
        "unstyled",
        "classNames",
        "styles",
        "filter",
        "maxDropdownHeight",
        "searchable",
        "clearable",
        "nothingFound",
        "limit",
        "disabled",
        "onSearchChange",
        "searchValue",
        "rightSection",
        "rightSectionWidth",
        "creatable",
        "getCreateLabel",
        "shouldCreate",
        "selectOnBlur",
        "onCreate",
        "dropdownComponent",
        "onDropdownClose",
        "onDropdownOpen",
        "withinPortal",
        "portalProps",
        "switchDirectionOnFlip",
        "zIndex",
        "name",
        "dropdownPosition",
        "allowDeselect",
        "placeholder",
        "filterDataOnExactSearchMatch",
        "form",
        "positionDependencies",
        "readOnly",
        "clearButtonProps",
        "hoverOnSearchChange",
      ]),
      { classes: Te, cx: Js, theme: qs } = r6(),
      [Pe, kS] = m.exports.useState(w),
      [er, We] = m.exports.useState(-1),
      ec = m.exports.useRef(),
      Ci = m.exports.useRef({}),
      [Fd, RS] = m.exports.useState("column"),
      Kr = Fd === "column",
      {
        scrollIntoView: ho,
        targetRef: tc,
        scrollableRef: NS,
      } = ZO({ duration: 0, offset: 5, cancelable: !1, isList: !0 }),
      TS = Ke === void 0 ? O : Ke,
      ht = (W) => {
        if (Pe !== W) {
          kS(W);
          const ce = W ? F : j;
          typeof ce == "function" && ce();
        }
      },
      rc = T && typeof A == "function";
    let nc = null;
    const IS = l.map((W) =>
        typeof W == "string" ? { label: W, value: W } : W
      ),
      Ei = gP({ data: IS }),
      [Et, Pn, Vd] = Wr({
        value: a,
        defaultValue: s,
        finalValue: null,
        onChange: c,
      }),
      tr = Ei.find((W) => W.value === Et),
      [rr, zS] = Wr({
        value: z,
        defaultValue: (tr == null ? void 0 : tr.label) || "",
        finalValue: void 0,
        onChange: E,
      }),
      Zr = (W) => {
        zS(W), b && typeof E == "function" && E(W);
      },
      DS = () => {
        var W;
        Y || (Pn(null), Vd || Zr(""), (W = ec.current) == null || W.focus());
      };
    m.exports.useEffect(() => {
      const W = Ei.find((ce) => ce.value === Et);
      W ? Zr(W.label) : (!rc || !Et) && Zr("");
    }, [Et]),
      m.exports.useEffect(() => {
        tr && (!b || !Pe) && Zr(tr.label);
      }, [tr == null ? void 0 : tr.label]);
    const ki = (W) => {
        if (!Y)
          if (TS && (tr == null ? void 0 : tr.value) === W.value)
            Pn(null), ht(!1);
          else {
            if (W.creatable && typeof k == "function") {
              const ce = k(W.value);
              typeof ce < "u" &&
                ce !== null &&
                Pn(typeof ce == "string" ? ce : ce.value);
            } else Pn(W.value);
            Vd || Zr(W.label), We(-1), ht(!1), ec.current.focus();
          }
      },
      Ee = e6({
        data: Ei,
        searchable: b,
        limit: C,
        searchValue: rr,
        filter: g,
        filterDataOnExactSearchMatch: le,
        value: Et,
      });
    rc &&
      H(rr, Ee) &&
      ((nc = A(rr)), Ee.push({ label: rr, value: rr, creatable: !0 }));
    const Hd = (W, ce, ot) => {
      let it = W;
      for (; ot(it); ) if (((it = ce(it)), !Ee[it].disabled)) return it;
      return W;
    };
    dt(() => {
      We(vo && rr ? 0 : -1);
    }, [rr, vo]);
    const go = Et ? Ee.findIndex((W) => W.value === Et) : 0,
      kt = !Y && (Ee.length > 0 ? Pe : Pe && !!$),
      Bd = () => {
        We((W) => {
          var ce;
          const ot = Hd(
            W,
            (it) => it - 1,
            (it) => it > 0
          );
          return (
            (tc.current =
              Ci.current[(ce = Ee[ot]) == null ? void 0 : ce.value]),
            kt && ho({ alignment: Kr ? "start" : "end" }),
            ot
          );
        });
      },
      Wd = () => {
        We((W) => {
          var ce;
          const ot = Hd(
            W,
            (it) => it + 1,
            (it) => it < Ee.length - 1
          );
          return (
            (tc.current =
              Ci.current[(ce = Ee[ot]) == null ? void 0 : ce.value]),
            kt && ho({ alignment: Kr ? "end" : "start" }),
            ot
          );
        });
      },
      Ri = () =>
        window.setTimeout(() => {
          var W;
          (tc.current = Ci.current[(W = Ee[go]) == null ? void 0 : W.value]),
            ho({ alignment: Kr ? "end" : "start" });
        }, 50);
    dt(() => {
      kt && Ri();
    }, [kt]);
    const jS = (W) => {
        switch ((typeof u == "function" && u(W), W.key)) {
          case "ArrowUp": {
            W.preventDefault(),
              Pe ? (Kr ? Bd() : Wd()) : (We(go), ht(!0), Ri());
            break;
          }
          case "ArrowDown": {
            W.preventDefault(),
              Pe ? (Kr ? Wd() : Bd()) : (We(go), ht(!0), Ri());
            break;
          }
          case "Home": {
            if (!b) {
              W.preventDefault(), Pe || ht(!0);
              const ce = Ee.findIndex((ot) => !ot.disabled);
              We(ce), kt && ho({ alignment: Kr ? "end" : "start" });
            }
            break;
          }
          case "End": {
            if (!b) {
              W.preventDefault(), Pe || ht(!0);
              const ce = Ee.map((ot) => !!ot.disabled).lastIndexOf(!1);
              We(ce), kt && ho({ alignment: Kr ? "end" : "start" });
            }
            break;
          }
          case "Escape": {
            W.preventDefault(), ht(!1), We(-1);
            break;
          }
          case " ": {
            b ||
              (W.preventDefault(),
              Ee[er] && Pe ? ki(Ee[er]) : (ht(!0), We(go), Ri()));
            break;
          }
          case "Enter":
            b || W.preventDefault(),
              Ee[er] && Pe && (W.preventDefault(), ki(Ee[er]));
        }
      },
      LS = (W) => {
        typeof d == "function" && d(W);
        const ce = Ei.find((ot) => ot.value === Et);
        G && Ee[er] && Pe && ki(Ee[er]),
          Zr((ce == null ? void 0 : ce.label) || ""),
          ht(!1);
      },
      AS = (W) => {
        typeof h == "function" && h(W), b && ht(!0);
      },
      MS = (W) => {
        Y ||
          (Zr(W.currentTarget.value),
          O && W.currentTarget.value === "" && Pn(null),
          We(-1),
          ht(!0));
      },
      FS = () => {
        Y || (ht(!Pe), Et && !Pe && We(go));
      };
    return _(gr.Wrapper, {
      ...Xc(No({}, o), { __staticSelector: "Select" }),
      children: U(Yo, {
        opened: kt,
        transitionProps: y,
        shadow: i,
        withinPortal: B,
        portalProps: ie,
        __staticSelector: "Select",
        onDirectionChange: RS,
        switchDirectionOnFlip: ye,
        zIndex: Q,
        dropdownPosition: _e,
        positionDependencies: [...Ft, rr],
        classNames: v,
        styles: p,
        unstyled: P,
        variant: n.variant,
        children: [
          _(Yo.Target, {
            children: U("div", {
              role: "combobox",
              "aria-haspopup": "listbox",
              "aria-owns": kt ? `${n.id}-items` : null,
              "aria-controls": n.id,
              "aria-expanded": kt,
              onMouseLeave: () => We(-1),
              tabIndex: -1,
              children: [
                _("input", {
                  type: "hidden",
                  name: oe,
                  value: Et || "",
                  form: qt,
                  disabled: R,
                }),
                _(gr, {
                  ...No(
                    Xc(No(No({ autoComplete: "off", type: "search" }, n), Zs), {
                      ref: _n(t, ec),
                      onKeyDown: jS,
                      __staticSelector: "Select",
                      value: rr,
                      placeholder: de,
                      onChange: MS,
                      "aria-autocomplete": "list",
                      "aria-controls": kt ? `${n.id}-items` : null,
                      "aria-activedescendant": er >= 0 ? `${n.id}-${er}` : null,
                      onMouseDown: FS,
                      onBlur: LS,
                      onFocus: AS,
                      readOnly: !b || Y,
                      disabled: R,
                      "data-mantine-stop-propagation": kt,
                      name: null,
                      classNames: Xc(No({}, v), {
                        input: Js(
                          { [Te.input]: !b },
                          v == null ? void 0 : v.input
                        ),
                      }),
                    }),
                    $4({
                      theme: qs,
                      rightSection: M,
                      rightSectionWidth: N,
                      styles: p,
                      size: n.size,
                      shouldClear: O && !!tr,
                      onClear: DS,
                      error: o.error,
                      clearButtonProps: se,
                      disabled: R,
                      readOnly: Y,
                    })
                  ),
                }),
              ],
            }),
          }),
          _(Yo.Dropdown, {
            component: D || yd,
            maxHeight: S,
            direction: Fd,
            id: n.id,
            innerRef: NS,
            __staticSelector: "Select",
            classNames: v,
            styles: p,
            children: _(F1, {
              data: Ee,
              hovered: er,
              classNames: v,
              styles: p,
              isItemSelected: (W) => W === Et,
              uuid: n.id,
              __staticSelector: "Select",
              onItemHover: We,
              onItemSelect: ki,
              itemsRefs: Ci,
              itemComponent: f,
              size: n.size,
              nothingFound: $,
              creatable: rc && !!nc,
              createLabel: nc,
              "aria-label": o.label,
              unstyled: P,
              variant: n.variant,
            }),
          }),
        ],
      }),
    });
  });
sf.displayName = "@mantine/core/Select";
function sS({ value: e, min: t, max: r }) {
  const n = ((e - t) / (r - t)) * 100;
  return Math.min(Math.max(n, 0), 100);
}
function u6({
  value: e,
  containerWidth: t,
  min: r,
  max: n,
  step: o,
  precision: i,
}) {
  const a = (t ? Math.min(Math.max(e, 0), t) / t : e) * (n - r),
    s = (a !== 0 ? Math.round(a / o) * o : 0) + r,
    c = Math.max(s, r);
  return i !== void 0 ? Number(c.toFixed(i)) : c;
}
var f6 = Object.defineProperty,
  d6 = Object.defineProperties,
  p6 = Object.getOwnPropertyDescriptors,
  ng = Object.getOwnPropertySymbols,
  m6 = Object.prototype.hasOwnProperty,
  v6 = Object.prototype.propertyIsEnumerable,
  og = (e, t, r) =>
    t in e
      ? f6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  h6 = (e, t) => {
    for (var r in t || (t = {})) m6.call(t, r) && og(e, r, t[r]);
    if (ng) for (var r of ng(t)) v6.call(t, r) && og(e, r, t[r]);
    return e;
  },
  g6 = (e, t) => d6(e, p6(t));
const He = { xs: x(4), sm: x(6), md: x(8), lg: x(10), xl: x(12) };
var y6 = J((e) => ({
  root: g6(h6({}, e.fn.fontStyles()), {
    WebkitTapHighlightColor: "transparent",
    outline: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    touchAction: "none",
    position: "relative",
  }),
}));
const w6 = y6;
var _6 = Object.defineProperty,
  S6 = Object.defineProperties,
  x6 = Object.getOwnPropertyDescriptors,
  ig = Object.getOwnPropertySymbols,
  b6 = Object.prototype.hasOwnProperty,
  P6 = Object.prototype.propertyIsEnumerable,
  lg = (e, t, r) =>
    t in e
      ? _6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  $6 = (e, t) => {
    for (var r in t || (t = {})) b6.call(t, r) && lg(e, r, t[r]);
    if (ig) for (var r of ig(t)) P6.call(t, r) && lg(e, r, t[r]);
    return e;
  },
  O6 = (e, t) => S6(e, x6(t)),
  C6 = J((e, { color: t, disabled: r, thumbSize: n }, { size: o }) => ({
    label: {
      position: "absolute",
      top: x(-36),
      backgroundColor:
        e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[9],
      fontSize: e.fontSizes.xs,
      color: e.white,
      padding: `calc(${e.spacing.xs} / 2)`,
      borderRadius: e.radius.sm,
      whiteSpace: "nowrap",
      pointerEvents: "none",
      userSelect: "none",
      touchAction: "none",
    },
    thumb: O6($6({}, e.fn.focusStyles()), {
      boxSizing: "border-box",
      position: "absolute",
      display: r ? "none" : "flex",
      height: n ? x(n) : `calc(${L({ sizes: He, size: o })} * 2)`,
      width: n ? x(n) : `calc(${L({ sizes: He, size: o })} * 2)`,
      backgroundColor:
        e.colorScheme === "dark"
          ? e.fn.themeColor(t, e.fn.primaryShade())
          : e.white,
      border: `${x(4)} solid ${
        e.colorScheme === "dark"
          ? e.white
          : e.fn.themeColor(t, e.fn.primaryShade())
      }`,
      color:
        e.colorScheme === "dark"
          ? e.white
          : e.fn.themeColor(t, e.fn.primaryShade()),
      transform: "translate(-50%, -50%)",
      top: "50%",
      cursor: "pointer",
      borderRadius: 1e3,
      alignItems: "center",
      justifyContent: "center",
      transitionDuration: "100ms",
      transitionProperty: "box-shadow, transform",
      transitionTimingFunction: e.transitionTimingFunction,
      zIndex: 3,
      userSelect: "none",
      touchAction: "none",
    }),
    dragging: {
      transform: "translate(-50%, -50%) scale(1.05)",
      boxShadow: e.shadows.sm,
    },
  }));
const E6 = C6,
  cS = m.exports.forwardRef(
    (
      {
        max: e,
        min: t,
        value: r,
        position: n,
        label: o,
        dragging: i,
        onMouseDown: l,
        onKeyDownCapture: a,
        color: s,
        classNames: c,
        styles: f,
        size: u,
        labelTransition: d,
        labelTransitionDuration: h,
        labelTransitionTimingFunction: y,
        labelAlwaysOn: w,
        thumbLabel: P,
        onFocus: v,
        onBlur: p,
        showLabelOnHover: g,
        isHovered: S,
        children: b = null,
        disabled: O,
        unstyled: $,
        thumbSize: C,
        variant: R,
      },
      E
    ) => {
      const {
          classes: z,
          cx: M,
          theme: N,
        } = E6(
          { color: s, disabled: O, thumbSize: C },
          {
            name: "Slider",
            classNames: c,
            styles: f,
            unstyled: $,
            variant: R,
            size: u,
          }
        ),
        [T, A] = m.exports.useState(!1),
        H = w || i || T || (g && S);
      return U(re, {
        tabIndex: 0,
        role: "slider",
        "aria-label": P,
        "aria-valuemax": e,
        "aria-valuemin": t,
        "aria-valuenow": r,
        ref: E,
        className: M(z.thumb, { [z.dragging]: i }),
        onFocus: () => {
          A(!0), typeof v == "function" && v();
        },
        onBlur: () => {
          A(!1), typeof p == "function" && p();
        },
        onTouchStart: l,
        onMouseDown: l,
        onKeyDownCapture: a,
        onClick: (G) => G.stopPropagation(),
        style: { [N.dir === "rtl" ? "right" : "left"]: `${n}%` },
        children: [
          b,
          _(Qs, {
            mounted: o != null && H,
            duration: h,
            transition: d,
            timingFunction: y || N.transitionTimingFunction,
            children: (G) =>
              _("div", { style: G, className: z.label, children: o }),
          }),
        ],
      });
    }
  );
cS.displayName = "@mantine/core/SliderThumb";
function k6({ mark: e, offset: t, value: r, inverted: n = !1 }) {
  return n
    ? (typeof t == "number" && e.value <= t) || e.value >= r
    : typeof t == "number"
    ? e.value >= t && e.value <= r
    : e.value <= r;
}
var R6 = J((e, { color: t, disabled: r, thumbSize: n }, { size: o }) => ({
  marksContainer: {
    position: "absolute",
    right: n ? x(n / 2) : L({ sizes: He, size: o }),
    left: n ? x(n / 2) : L({ sizes: He, size: o }),
    "&:has(~ input:disabled)": {
      "& .mantine-Slider-markFilled": {
        border: `${x(2)} solid ${
          e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2]
        }`,
        borderColor:
          e.colorScheme === "dark" ? e.colors.dark[3] : e.colors.gray[4],
      },
    },
  },
  markWrapper: {
    position: "absolute",
    top: `calc(${x(L({ sizes: He, size: o }))} / 2)`,
    zIndex: 2,
    height: 0,
  },
  mark: {
    boxSizing: "border-box",
    border: `${x(2)} solid ${
      e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2]
    }`,
    height: L({ sizes: He, size: o }),
    width: L({ sizes: He, size: o }),
    borderRadius: 1e3,
    transform: `translateX(calc(-${L({ sizes: He, size: o })} / 2))`,
    backgroundColor: e.white,
    pointerEvents: "none",
  },
  markFilled: {
    borderColor: r
      ? e.colorScheme === "dark"
        ? e.colors.dark[3]
        : e.colors.gray[4]
      : e.fn.variant({ variant: "filled", color: t }).background,
  },
  markLabel: {
    transform: `translate(-50%, calc(${e.spacing.xs} / 2))`,
    fontSize: e.fontSizes.sm,
    color: e.colorScheme === "dark" ? e.colors.dark[2] : e.colors.gray[6],
    whiteSpace: "nowrap",
    cursor: "pointer",
    userSelect: "none",
  },
}));
const N6 = R6;
function uS({
  marks: e,
  color: t,
  size: r,
  thumbSize: n,
  min: o,
  max: i,
  value: l,
  classNames: a,
  styles: s,
  offset: c,
  onChange: f,
  disabled: u,
  unstyled: d,
  inverted: h,
  variant: y,
}) {
  const { classes: w, cx: P } = N6(
      { color: t, disabled: u, thumbSize: n },
      {
        name: "Slider",
        classNames: a,
        styles: s,
        unstyled: d,
        variant: y,
        size: r,
      }
    ),
    v = e.map((p, g) =>
      U(
        re,
        {
          className: w.markWrapper,
          sx: { left: `${sS({ value: p.value, min: o, max: i })}%` },
          children: [
            _("div", {
              className: P(w.mark, {
                [w.markFilled]: k6({
                  mark: p,
                  value: l,
                  offset: c,
                  inverted: h,
                }),
              }),
            }),
            p.label &&
              _("div", {
                className: w.markLabel,
                onMouseDown: (S) => {
                  S.stopPropagation(), !u && f(p.value);
                },
                onTouchStart: (S) => {
                  S.stopPropagation(), !u && f(p.value);
                },
                children: p.label,
              }),
          ],
        },
        g
      )
    );
  return _("div", { className: w.marksContainer, children: v });
}
uS.displayName = "@mantine/core/SliderMarks";
var T6 = J(
  (
    e,
    { radius: t, color: r, disabled: n, inverted: o, thumbSize: i },
    { size: l }
  ) => ({
    trackContainer: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: `calc(${L({ sizes: He, size: l })} * 2)`,
      cursor: "pointer",
      "&:has(~ input:disabled)": {
        "&": { pointerEvents: "none" },
        "& .mantine-Slider-thumb": { display: "none" },
        "& .mantine-Slider-track::before": {
          content: '""',
          backgroundColor: o
            ? e.colorScheme === "dark"
              ? e.colors.dark[3]
              : e.colors.gray[4]
            : e.colorScheme === "dark"
            ? e.colors.dark[4]
            : e.colors.gray[2],
        },
        "& .mantine-Slider-bar": {
          backgroundColor: o
            ? e.colorScheme === "dark"
              ? e.colors.dark[4]
              : e.colors.gray[2]
            : e.colorScheme === "dark"
            ? e.colors.dark[3]
            : e.colors.gray[4],
        },
      },
    },
    track: {
      position: "relative",
      height: L({ sizes: He, size: l }),
      width: "100%",
      marginRight: i ? x(i / 2) : L({ size: l, sizes: He }),
      marginLeft: i ? x(i / 2) : L({ size: l, sizes: He }),
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        bottom: 0,
        borderRadius: e.fn.radius(t),
        right: `calc(${i ? x(i / 2) : L({ size: l, sizes: He })} * -1)`,
        left: `calc(${i ? x(i / 2) : L({ size: l, sizes: He })} * -1)`,
        backgroundColor: o
          ? n
            ? e.colorScheme === "dark"
              ? e.colors.dark[3]
              : e.colors.gray[4]
            : e.fn.variant({ variant: "filled", color: r }).background
          : e.colorScheme === "dark"
          ? e.colors.dark[4]
          : e.colors.gray[2],
        zIndex: 0,
      },
    },
    bar: {
      position: "absolute",
      zIndex: 1,
      top: 0,
      bottom: 0,
      backgroundColor: o
        ? e.colorScheme === "dark"
          ? e.colors.dark[4]
          : e.colors.gray[2]
        : n
        ? e.colorScheme === "dark"
          ? e.colors.dark[3]
          : e.colors.gray[4]
        : e.fn.variant({ variant: "filled", color: r }).background,
      borderRadius: e.fn.radius(t),
    },
  })
);
const I6 = T6;
var z6 = Object.defineProperty,
  D6 = Object.defineProperties,
  j6 = Object.getOwnPropertyDescriptors,
  rs = Object.getOwnPropertySymbols,
  fS = Object.prototype.hasOwnProperty,
  dS = Object.prototype.propertyIsEnumerable,
  ag = (e, t, r) =>
    t in e
      ? z6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  sg = (e, t) => {
    for (var r in t || (t = {})) fS.call(t, r) && ag(e, r, t[r]);
    if (rs) for (var r of rs(t)) dS.call(t, r) && ag(e, r, t[r]);
    return e;
  },
  L6 = (e, t) => D6(e, j6(t)),
  A6 = (e, t) => {
    var r = {};
    for (var n in e) fS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && rs)
      for (var n of rs(e)) t.indexOf(n) < 0 && dS.call(e, n) && (r[n] = e[n]);
    return r;
  };
function pS(e) {
  var t = e,
    {
      filled: r,
      size: n,
      thumbSize: o,
      color: i,
      classNames: l,
      styles: a,
      radius: s,
      children: c,
      offset: f,
      disabled: u,
      marksOffset: d,
      unstyled: h,
      inverted: y,
      variant: w,
      containerProps: P,
    } = t,
    v = A6(t, [
      "filled",
      "size",
      "thumbSize",
      "color",
      "classNames",
      "styles",
      "radius",
      "children",
      "offset",
      "disabled",
      "marksOffset",
      "unstyled",
      "inverted",
      "variant",
      "containerProps",
    ]);
  const { classes: p } = I6(
    { color: i, radius: s, disabled: u, inverted: y, thumbSize: o },
    {
      name: "Slider",
      classNames: l,
      styles: a,
      unstyled: h,
      variant: w,
      size: n,
    }
  );
  return U(Br, {
    children: [
      _("div", {
        ...sg({ className: p.trackContainer }, P),
        children: U("div", {
          className: p.track,
          children: [
            _(re, {
              className: p.bar,
              sx: {
                left: `calc(${f}% - ${
                  o ? x(o / 2) : L({ size: n, sizes: He })
                })`,
                width: `calc(${r}% + 2 * ${
                  o ? x(o / 2) : L({ size: n, sizes: He })
                })`,
              },
            }),
            c,
          ],
        }),
      }),
      _(uS, {
        ...L6(sg({}, v), {
          size: n,
          thumbSize: o,
          color: i,
          offset: d,
          classNames: l,
          styles: a,
          disabled: u,
          unstyled: h,
          inverted: y,
          variant: w,
        }),
      }),
    ],
  });
}
pS.displayName = "@mantine/core/SliderTrack";
var M6 = Object.defineProperty,
  F6 = Object.defineProperties,
  V6 = Object.getOwnPropertyDescriptors,
  ns = Object.getOwnPropertySymbols,
  mS = Object.prototype.hasOwnProperty,
  vS = Object.prototype.propertyIsEnumerable,
  cg = (e, t, r) =>
    t in e
      ? M6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  H6 = (e, t) => {
    for (var r in t || (t = {})) mS.call(t, r) && cg(e, r, t[r]);
    if (ns) for (var r of ns(t)) vS.call(t, r) && cg(e, r, t[r]);
    return e;
  },
  B6 = (e, t) => F6(e, V6(t)),
  W6 = (e, t) => {
    var r = {};
    for (var n in e) mS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ns)
      for (var n of ns(e)) t.indexOf(n) < 0 && vS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const hS = m.exports.forwardRef((e, t) => {
  var r = e,
    {
      className: n,
      size: o,
      classNames: i,
      styles: l,
      disabled: a,
      unstyled: s,
      variant: c,
    } = r,
    f = W6(r, [
      "className",
      "size",
      "classNames",
      "styles",
      "disabled",
      "unstyled",
      "variant",
    ]);
  const { classes: u, cx: d } = w6(null, {
    name: "Slider",
    classNames: i,
    styles: l,
    unstyled: s,
    variant: c,
    size: o,
  });
  return _(re, {
    ...B6(H6({}, f), { tabIndex: -1, className: d(u.root, n), ref: t }),
  });
});
hS.displayName = "@mantine/core/SliderRoot";
function ul(e, t) {
  return parseFloat(e.toFixed(t));
}
function U6(e) {
  if (!e) return 0;
  const t = e.toString().split(".");
  return t.length > 1 ? t[1].length : 0;
}
var G6 = Object.defineProperty,
  Y6 = Object.defineProperties,
  X6 = Object.getOwnPropertyDescriptors,
  os = Object.getOwnPropertySymbols,
  gS = Object.prototype.hasOwnProperty,
  yS = Object.prototype.propertyIsEnumerable,
  ug = (e, t, r) =>
    t in e
      ? G6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Q6 = (e, t) => {
    for (var r in t || (t = {})) gS.call(t, r) && ug(e, r, t[r]);
    if (os) for (var r of os(t)) yS.call(t, r) && ug(e, r, t[r]);
    return e;
  },
  K6 = (e, t) => Y6(e, X6(t)),
  Z6 = (e, t) => {
    var r = {};
    for (var n in e) gS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && os)
      for (var n of os(e)) t.indexOf(n) < 0 && yS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const J6 = {
    size: "md",
    radius: "xl",
    min: 0,
    max: 100,
    step: 1,
    marks: [],
    label: (e) => e,
    labelTransition: "skew-down",
    labelTransitionDuration: 0,
    labelAlwaysOn: !1,
    thumbLabel: "",
    showLabelOnHover: !0,
    disabled: !1,
    scale: (e) => e,
  },
  nr = m.exports.forwardRef((e, t) => {
    const r = Z("Slider", J6, e),
      {
        classNames: n,
        styles: o,
        color: i,
        value: l,
        onChange: a,
        onChangeEnd: s,
        size: c,
        radius: f,
        min: u,
        max: d,
        step: h,
        precision: y,
        defaultValue: w,
        name: P,
        marks: v,
        label: p,
        labelTransition: g,
        labelTransitionDuration: S,
        labelTransitionTimingFunction: b,
        labelAlwaysOn: O,
        thumbLabel: $,
        showLabelOnHover: C,
        thumbChildren: R,
        disabled: E,
        unstyled: z,
        thumbSize: M,
        scale: N,
        inverted: T,
        variant: A,
      } = r,
      H = Z6(r, [
        "classNames",
        "styles",
        "color",
        "value",
        "onChange",
        "onChangeEnd",
        "size",
        "radius",
        "min",
        "max",
        "step",
        "precision",
        "defaultValue",
        "name",
        "marks",
        "label",
        "labelTransition",
        "labelTransitionDuration",
        "labelTransitionTimingFunction",
        "labelAlwaysOn",
        "thumbLabel",
        "showLabelOnHover",
        "thumbChildren",
        "disabled",
        "unstyled",
        "thumbSize",
        "scale",
        "inverted",
        "variant",
      ]),
      G = y != null ? y : U6(h),
      k = nt(),
      [D, j] = m.exports.useState(!1),
      [F, B] = Wr({
        value: typeof l == "number" ? un(l, u, d) : l,
        defaultValue: typeof w == "number" ? un(w, u, d) : w,
        finalValue: un(0, u, d),
        onChange: a,
      }),
      ie = m.exports.useRef(F),
      ye = m.exports.useRef(),
      Q = m.exports.useRef(),
      oe = sS({ value: F, min: u, max: d }),
      _e = N(F),
      Ke = typeof p == "function" ? p(_e) : p,
      de = m.exports.useCallback(
        ({ x: Y }) => {
          if (!E) {
            const se = u6({ value: Y, min: u, max: d, step: h, precision: G });
            B(se), (ie.current = se);
          }
        },
        [E, u, d, h, G, B]
      ),
      { ref: le, active: qt } = vd(
        de,
        { onScrubEnd: () => (s == null ? void 0 : s(ie.current)) },
        k.dir
      ),
      Ft = (Y) => {
        if (!E)
          switch (Y.key) {
            case "ArrowUp": {
              Y.preventDefault(), Q.current.focus();
              const se = ul(Math.min(Math.max(F + h, u), d), G);
              s == null || s(se), B(se);
              break;
            }
            case "ArrowRight": {
              Y.preventDefault(), Q.current.focus();
              const se = ul(
                Math.min(Math.max(k.dir === "rtl" ? F - h : F + h, u), d),
                G
              );
              s == null || s(se), B(se);
              break;
            }
            case "ArrowDown": {
              Y.preventDefault(), Q.current.focus();
              const se = ul(Math.min(Math.max(F - h, u), d), G);
              s == null || s(se), B(se);
              break;
            }
            case "ArrowLeft": {
              Y.preventDefault(), Q.current.focus();
              const se = ul(
                Math.min(Math.max(k.dir === "rtl" ? F + h : F - h, u), d),
                G
              );
              s == null || s(se), B(se);
              break;
            }
            case "Home": {
              Y.preventDefault(), Q.current.focus(), s == null || s(u), B(u);
              break;
            }
            case "End": {
              Y.preventDefault(), Q.current.focus(), s == null || s(d), B(d);
              break;
            }
          }
      };
    return U(hS, {
      ...K6(Q6({}, H), {
        ref: _n(t, ye),
        onKeyDownCapture: Ft,
        onMouseDownCapture: () => {
          var Y;
          return (Y = ye.current) == null ? void 0 : Y.focus();
        },
        size: c,
        classNames: n,
        styles: o,
        disabled: E,
        unstyled: z,
        variant: A,
      }),
      children: [
        _(pS, {
          inverted: T,
          offset: 0,
          filled: oe,
          marks: v,
          size: c,
          thumbSize: M,
          radius: f,
          color: i,
          min: u,
          max: d,
          value: _e,
          onChange: B,
          classNames: n,
          styles: o,
          disabled: E,
          unstyled: z,
          variant: A,
          containerProps: {
            ref: le,
            onMouseEnter: C ? () => j(!0) : void 0,
            onMouseLeave: C ? () => j(!1) : void 0,
          },
          children: _(cS, {
            max: d,
            min: u,
            value: _e,
            position: oe,
            dragging: qt,
            color: i,
            size: c,
            label: Ke,
            ref: Q,
            labelTransition: g,
            labelTransitionDuration: S,
            labelTransitionTimingFunction: b,
            labelAlwaysOn: O,
            classNames: n,
            styles: o,
            thumbLabel: $,
            showLabelOnHover: C,
            isHovered: D,
            disabled: E,
            unstyled: z,
            thumbSize: M,
            variant: A,
            children: R,
          }),
        }),
        _("input", { type: "hidden", name: P, value: _e }),
      ],
    });
  });
nr.displayName = "@mantine/core/Slider";
var q6 = J((e, { spacing: t, align: r, justify: n }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: r,
    justifyContent: n,
    gap: L({ size: t, sizes: e.spacing }),
  },
}));
const eT = q6;
var tT = Object.defineProperty,
  is = Object.getOwnPropertySymbols,
  wS = Object.prototype.hasOwnProperty,
  _S = Object.prototype.propertyIsEnumerable,
  fg = (e, t, r) =>
    t in e
      ? tT(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  rT = (e, t) => {
    for (var r in t || (t = {})) wS.call(t, r) && fg(e, r, t[r]);
    if (is) for (var r of is(t)) _S.call(t, r) && fg(e, r, t[r]);
    return e;
  },
  nT = (e, t) => {
    var r = {};
    for (var n in e) wS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && is)
      for (var n of is(e)) t.indexOf(n) < 0 && _S.call(e, n) && (r[n] = e[n]);
    return r;
  };
const oT = { spacing: "md", align: "stretch", justify: "flex-start" },
  SS = m.exports.forwardRef((e, t) => {
    const r = Z("Stack", oT, e),
      {
        spacing: n,
        className: o,
        align: i,
        justify: l,
        unstyled: a,
        variant: s,
      } = r,
      c = nT(r, [
        "spacing",
        "className",
        "align",
        "justify",
        "unstyled",
        "variant",
      ]),
      { classes: f, cx: u } = eT(
        { spacing: n, align: i, justify: l },
        { name: "Stack", unstyled: a, variant: s }
      );
    return _(re, { ...rT({ className: u(f.root, o), ref: t }, c) });
  });
SS.displayName = "@mantine/core/Stack";
const xS = m.exports.createContext(null),
  iT = xS.Provider,
  lT = () => m.exports.useContext(xS);
var aT = Object.defineProperty,
  ls = Object.getOwnPropertySymbols,
  bS = Object.prototype.hasOwnProperty,
  PS = Object.prototype.propertyIsEnumerable,
  dg = (e, t, r) =>
    t in e
      ? aT(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  pg = (e, t) => {
    for (var r in t || (t = {})) bS.call(t, r) && dg(e, r, t[r]);
    if (ls) for (var r of ls(t)) PS.call(t, r) && dg(e, r, t[r]);
    return e;
  },
  sT = (e, t) => {
    var r = {};
    for (var n in e) bS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ls)
      for (var n of ls(e)) t.indexOf(n) < 0 && PS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const cT = { size: "sm" },
  $S = m.exports.forwardRef((e, t) => {
    const r = Z("SwitchGroup", cT, e),
      {
        children: n,
        value: o,
        defaultValue: i,
        onChange: l,
        size: a,
        wrapperProps: s,
      } = r,
      c = sT(r, [
        "children",
        "value",
        "defaultValue",
        "onChange",
        "size",
        "wrapperProps",
      ]),
      [f, u] = Wr({ value: o, defaultValue: i, finalValue: [], onChange: l });
    return _(iT, {
      value: {
        value: f,
        onChange: (h) => {
          const y = h.currentTarget.value;
          u(f.includes(y) ? f.filter((w) => w !== y) : [...f, y]);
        },
        size: a,
      },
      children: _(gr.Wrapper, {
        ...pg(
          pg(
            {
              labelElement: "div",
              size: a,
              __staticSelector: "SwitchGroup",
              ref: t,
            },
            s
          ),
          c
        ),
        children: n,
      }),
    });
  });
$S.displayName = "@mantine/core/SwitchGroup";
var uT = Object.defineProperty,
  fT = Object.defineProperties,
  dT = Object.getOwnPropertyDescriptors,
  mg = Object.getOwnPropertySymbols,
  pT = Object.prototype.hasOwnProperty,
  mT = Object.prototype.propertyIsEnumerable,
  vg = (e, t, r) =>
    t in e
      ? uT(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  vT = (e, t) => {
    for (var r in t || (t = {})) pT.call(t, r) && vg(e, r, t[r]);
    if (mg) for (var r of mg(t)) mT.call(t, r) && vg(e, r, t[r]);
    return e;
  },
  hT = (e, t) => fT(e, dT(t));
const gT = { xs: x(16), sm: x(20), md: x(24), lg: x(30), xl: x(36) },
  yT = { xs: x(32), sm: x(38), md: x(46), lg: x(56), xl: x(72) },
  wT = { xs: x(12), sm: x(14), md: x(18), lg: x(22), xl: x(28) },
  _T = { xs: x(5), sm: x(6), md: x(7), lg: x(9), xl: x(11) },
  ST = { xs: x(4), sm: x(5), md: x(6), lg: x(8), xl: x(10) };
var xT = J(
  (e, { radius: t, color: r, labelPosition: n, error: o }, { size: i }) => {
    const l = L({ size: i, sizes: wT }),
      a = L({ size: t, sizes: e.radius }),
      s = e.fn.variant({ variant: "filled", color: r }),
      c = L({ size: i, sizes: yT }),
      f = x(i === "xs" ? 1 : 2),
      u = e.fn.variant({ variant: "filled", color: "red" }).background;
    return {
      root: { position: "relative" },
      input: {
        height: 0,
        width: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: 0,
        WebkitClipPath: "inset(50%)",
        clipPath: "inset(50%)",
        position: "absolute",
      },
      track: hT(vT({}, e.fn.focusStyles("input:focus + &")), {
        cursor: e.cursorType,
        overflow: "hidden",
        WebkitTapHighlightColor: "transparent",
        position: "relative",
        borderRadius: a,
        backgroundColor:
          e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[2],
        border: `${x(1)} solid ${
          o ? u : e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[3]
        }`,
        height: L({ size: i, sizes: gT }),
        minWidth: c,
        margin: 0,
        transitionProperty: "background-color, border-color",
        transitionTimingFunction: e.transitionTimingFunction,
        transitionDuration: "150ms",
        boxSizing: "border-box",
        appearance: "none",
        display: "flex",
        alignItems: "center",
        fontSize: L({ size: i, sizes: _T }),
        fontWeight: 600,
        order: n === "left" ? 2 : 1,
        userSelect: "none",
        zIndex: 0,
        lineHeight: 0,
        color: e.colorScheme === "dark" ? e.colors.dark[1] : e.colors.gray[6],
        transition: `color 150ms ${e.transitionTimingFunction}`,
        "input:checked + &": {
          backgroundColor: s.background,
          borderColor: s.background,
          color: e.white,
          transition: `color 150ms ${e.transitionTimingFunction}`,
        },
        "input:disabled + &": {
          backgroundColor:
            e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2],
          borderColor:
            e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2],
          cursor: "not-allowed",
          pointerEvents: "none",
        },
      }),
      thumb: {
        position: "absolute",
        zIndex: 1,
        borderRadius: a,
        boxSizing: "border-box",
        display: "flex",
        backgroundColor: e.white,
        height: l,
        width: l,
        border: `${x(1)} solid ${
          e.colorScheme === "dark" ? e.white : e.colors.gray[3]
        }`,
        left: f,
        transition: `left 150ms ${e.transitionTimingFunction}`,
        "& > *": { margin: "auto" },
        "@media (prefers-reduced-motion)": {
          transitionDuration: e.respectReducedMotion ? "0ms" : "",
        },
        "input:checked + * > &": {
          left: `calc(100% - ${l} - ${f})`,
          borderColor: e.white,
        },
        "input:disabled + * > &": {
          borderColor:
            e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2],
          backgroundColor:
            e.colorScheme === "dark" ? e.colors.dark[3] : e.colors.gray[0],
        },
      },
      trackLabel: {
        height: "100%",
        display: "grid",
        placeContent: "center",
        minWidth: `calc(${c} - ${l})`,
        paddingInline: L({ size: i, sizes: ST }),
        marginLeft: `calc(${l} + ${f})`,
        transition: `margin 150ms ${e.transitionTimingFunction}`,
        "input:checked + * > &": {
          marginLeft: 0,
          marginRight: `calc(${l} + ${f})`,
        },
      },
    };
  }
);
const bT = xT;
var PT = Object.defineProperty,
  $T = Object.defineProperties,
  OT = Object.getOwnPropertyDescriptors,
  as = Object.getOwnPropertySymbols,
  OS = Object.prototype.hasOwnProperty,
  CS = Object.prototype.propertyIsEnumerable,
  hg = (e, t, r) =>
    t in e
      ? PT(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Qc = (e, t) => {
    for (var r in t || (t = {})) OS.call(t, r) && hg(e, r, t[r]);
    if (as) for (var r of as(t)) CS.call(t, r) && hg(e, r, t[r]);
    return e;
  },
  CT = (e, t) => $T(e, OT(t)),
  ET = (e, t) => {
    var r = {};
    for (var n in e) OS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && as)
      for (var n of as(e)) t.indexOf(n) < 0 && CS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const kT = { offLabel: "", onLabel: "", size: "sm", radius: "xl", error: !1 },
  Xo = m.exports.forwardRef((e, t) => {
    var r;
    const n = Z("Switch", kT, e),
      {
        className: o,
        color: i,
        label: l,
        offLabel: a,
        onLabel: s,
        id: c,
        style: f,
        size: u,
        radius: d,
        wrapperProps: h,
        children: y,
        unstyled: w,
        styles: P,
        classNames: v,
        thumbIcon: p,
        sx: g,
        checked: S,
        defaultChecked: b,
        onChange: O,
        labelPosition: $,
        description: C,
        error: R,
        disabled: E,
        variant: z,
      } = n,
      M = ET(n, [
        "className",
        "color",
        "label",
        "offLabel",
        "onLabel",
        "id",
        "style",
        "size",
        "radius",
        "wrapperProps",
        "children",
        "unstyled",
        "styles",
        "classNames",
        "thumbIcon",
        "sx",
        "checked",
        "defaultChecked",
        "onChange",
        "labelPosition",
        "description",
        "error",
        "disabled",
        "variant",
      ]),
      N = lT(),
      T = (N == null ? void 0 : N.size) || u,
      { classes: A, cx: H } = bT(
        { color: i, radius: d, labelPosition: $, error: !!R },
        {
          name: "Switch",
          classNames: v,
          styles: P,
          unstyled: w,
          size: T,
          variant: z,
        }
      ),
      { systemStyles: G, rest: k } = Hs(M),
      D = Vs(c),
      j = N ? { checked: N.value.includes(k.value), onChange: N.onChange } : {},
      [F, B] = Wr({
        value: (r = j.checked) != null ? r : S,
        defaultValue: b,
        finalValue: !1,
      });
    return U(v_, {
      ...Qc(
        Qc(
          {
            className: H(o, A.root),
            sx: g,
            style: f,
            id: D,
            size: (N == null ? void 0 : N.size) || u,
            labelPosition: $,
            label: l,
            description: C,
            error: R,
            disabled: E,
            __staticSelector: "Switch",
            classNames: v,
            styles: P,
            unstyled: w,
            "data-checked": j.checked || void 0,
            variant: z,
          },
          G
        ),
        h
      ),
      children: [
        _("input", {
          ...CT(Qc({}, k), {
            disabled: E,
            checked: F,
            onChange: (ie) => {
              N ? j.onChange(ie) : O == null || O(ie),
                B(ie.currentTarget.checked);
            },
            id: D,
            ref: t,
            type: "checkbox",
            className: A.input,
          }),
        }),
        U("label", {
          htmlFor: D,
          className: A.track,
          children: [
            _("div", { className: A.thumb, children: p }),
            _("div", { className: A.trackLabel, children: F ? s : a }),
          ],
        }),
      ],
    });
  });
Xo.displayName = "@mantine/core/Switch";
Xo.Group = $S;
function RT(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function ES(e, t) {
  if (e == null) return {};
  var r = RT(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
var NT = ["size", "color"];
function TT(e) {
  var t = e.size,
    r = t === void 0 ? 24 : t,
    n = e.color,
    o = n === void 0 ? "currentColor" : n,
    i = ES(e, NT);
  return U("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-ruler-measure",
    width: r,
    height: r,
    viewBox: "0 0 24 24",
    stroke: o,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...i,
    children: [
      _("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      _("path", {
        d: "M19.875 12c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75z",
      }),
      _("path", { d: "M9 12v2" }),
      _("path", { d: "M6 12v3" }),
      _("path", { d: "M12 12v3" }),
      _("path", { d: "M18 12v3" }),
      _("path", { d: "M15 12v2" }),
      _("path", { d: "M3 3v4" }),
      _("path", { d: "M3 5h18" }),
      _("path", { d: "M21 3v4" }),
    ],
  });
}
var IT = ["size", "color"];
function zT(e) {
  var t = e.size,
    r = t === void 0 ? 24 : t,
    n = e.color,
    o = n === void 0 ? "currentColor" : n,
    i = ES(e, IT);
  return U("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-text-size",
    width: r,
    height: r,
    viewBox: "0 0 24 24",
    stroke: o,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...i,
    children: [
      _("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      _("path", { d: "M3 7v-2h13v2" }),
      _("path", { d: "M10 5v14" }),
      _("path", { d: "M12 19h-4" }),
      _("path", { d: "M15 13v-1h6v1" }),
      _("path", { d: "M18 12v7" }),
      _("path", { d: "M17 19h2" }),
    ],
  });
}
const DT = m.exports.forwardRef(
    ({ image: e, label: t, description: r, ...n }, o) =>
      _("div", {
        ref: o,
        ...n,
        children: _(gt, {
          noWrap: !0,
          children: U("div", {
            children: [
              _(_t, { size: "sm", children: t }),
              _(_t, { size: "xs", opacity: 0.65, children: r }),
            ],
          }),
        }),
      })
  ),
  jT = J((e) => ({
    wrapper: {
      position: "absolute",
      top: "15px",
      right: "15px",
      width: 330,
      backgroundColor: e.colors.dark[7],
      borderRadius: e.radius.md,
      color: e.colors.dark[1],
    },
  })),
  LT = [
    { label: "None", value: "none", description: "No Background" },
    { label: "Sleek", value: "TallFive", description: "Tall and sleek. (5px)" },
    {
      label: "Sleek 2",
      value: "TallTen",
      description: "Tall and sleek. (10px)",
    },
    {
      label: "Sleek 3",
      value: "TallFifteen",
      description: "Tall and sleek. (15px)",
    },
    {
      label: "Simple",
      value: "Background",
      description: "As simple as it gets.",
    },
    { label: "Blood", value: "Blood", description: "Bloody mess." },
    { label: "Blood 2", value: "Blood2", description: "Bloody mess." },
    { label: "Blood 3", value: "Blood3", description: "Bloody mess." },
    { label: "Blood 4", value: "Blood4", description: "Bloody mess." },
    { label: "Blood 5", value: "Blood5", description: "Bloody mess." },
    { label: "Brush", value: "Brush", description: "A simple brush stroke." },
    { label: "Chain", value: "Chain", description: '"Never break the chain"' },
    {
      label: "Metal",
      value: "Metal",
      description: "Not to be confused with rock.",
    },
    {
      label: "Metal 2",
      value: "Metal2",
      description: "Not to be confused with rock.",
    },
    {
      label: "Gradient",
      value: "Gradient1",
      description: "A little bit of gradient in my life.",
    },
    {
      label: "Gradient 2",
      value: "Gradient2",
      description: "A little bit of gradient by my side.",
    },
    {
      label: "Gradient 3",
      value: "Gradient3",
      description: "A little bit of gradient is all i need.",
    },
    {
      label: "Gradient 4",
      value: "Gradient4",
      description: "A little bit of gradient is what i see.",
    },
    { label: "Noise", value: "Noise", description: "Too loud." },
    { label: "Note", value: "Note", description: "Colour white recommended." },
    {
      label: "Note 2",
      value: "Note2",
      description: "Colour white recommended.",
    },
    {
      label: "Note 3",
      value: "Note3",
      description: "Colour white recommended.",
    },
    {
      label: "Note 4",
      value: "Note4",
      description: "Colour white recommended.",
    },
    {
      label: "Note 5",
      value: "Note5",
      description: "Colour white recommended.",
    },
    {
      label: "Note 6",
      value: "Note6",
      description: "Colour white recommended.",
    },
    { label: "Spray", value: "Spray", description: "Just a spray." },
  ],
  AT = () => {
    const { classes: e } = jT(),
      [t, r] = m.exports.useState(""),
      [n, o] = m.exports.useState("0"),
      [i, l] = m.exports.useState("#ffffff"),
      [a, s] = m.exports.useState(0.2),
      [c, f] = m.exports.useState(!1),
      [u, d] = m.exports.useState(!1),
      [h, y] = m.exports.useState("none"),
      [w, P] = m.exports.useState(0.01),
      [v, p] = m.exports.useState(0.01),
      [g, S] = m.exports.useState("#000000"),
      [b, O] = m.exports.useState(128),
      [$, C] = m.exports.useState(0),
      [R, E] = m.exports.useState(0.034),
      [z, M] = m.exports.useState(1),
      [N, T] = m.exports.useState(5),
      [A, H] = m.exports.useState(25),
      [G, k] = m.exports.useState(50),
      [D, j] = m.exports.useState(!1),
      [F, B] = m.exports.useState(!1),
      [ie, ye] = m.exports.useState(!0),
      [Q, oe] = m.exports.useState(!1),
      [_e, Ke] = m.exports.useState([
        { label: "Chalet Comprim\xE9", value: "4", group: "Normal" },
        { label: "Chalet", value: "0", group: "Normal" },
        { label: "Sign Painter", value: "1", group: "Handwritten" },
        { label: "Pricedown", value: "7", group: "Misc" },
      ]);
    Bu("setConfig", (le) => {
      H(le.maxDistance),
        k(le.maxDuration),
        j(le.isAdmin),
        B(le.neverExpire),
        ye(le.neverExpireAdmin);
    }),
      Bu("setFonts", (le) => {
        Ke(le);
      });
    const de = () => {
      r(""),
        o("0"),
        l("#ffffff"),
        s(0.2),
        f(!1),
        d(!1),
        y("none"),
        P(0.01),
        p(0.01),
        S("#000000"),
        O(128),
        C(0),
        E(0.034),
        M(1),
        T(5),
        oe(!1);
    };
    return (
      m.exports.useEffect(() => {
        bl("UpdateScene", {
          text: t,
          font: Number(n),
          colour: i,
          fontSize: a,
          shadow: c,
          outline: u,
          background: h,
          backgroundHeight: w,
          backgroundWidth: v,
          backgroundColour: g,
          backgroundAlpha: b,
          backgroundX: $,
          backgroundY: R,
          duration: z,
          viewDistance: N,
          neverExpire: Q,
        });
      }, [t, n, i, a, c, u, h, w, v, g, b, $, R, Q]),
      _(re, {
        className: e.wrapper,
        children: _(dN, {
          children: U(SS, {
            sx: { width: "90%", paddingTop: 15 },
            spacing: "xs",
            children: [
              _(K_, {
                placeholder: "Scenen Teksti",
                label: "Scenen Sisältö",
                value: t,
                onChange: (le) => {
                  r(le.currentTarget.value);
                },
              }),
              _(sf, {
                placeholder: "Font",
                label: "Fontti",
                data: _e,
                value: n,
                onChange: o,
              }),
              _(af, { value: i, onChange: l, label: "Tekstin Väri" }),
              U(gt, {
                children: [
                  _(tg, {
                    label: "Fontin Koko",
                    color: "blue",
                    withArrow: !0,
                    children: _(da, { children: _(zT, { color: "white" }) }),
                  }),
                  _(nr, {
                    sx: { flexGrow: 1 },
                    min: 0.1,
                    max: 1,
                    step: 0.1,
                    value: a,
                    onChange: s,
                  }),
                ],
              }),
              U(gt, {
                children: [
                  _(tg, {
                    label: "Katsomis Etäisyys",
                    color: "blue",
                    withArrow: !0,
                    children: _(da, { children: _(TT, { color: "white" }) }),
                  }),
                  _(nr, {
                    sx: { flexGrow: 1 },
                    min: 1,
                    max: A,
                    step: 1,
                    value: N,
                    onChange: T,
                  }),
                ],
              }),
              U(gt, {
                spacing: "xl",
                children: [
                  _(Xo, {
                    label: "Varjo",
                    checked: c,
                    onChange: (le) => {
                      f(le.currentTarget.checked);
                    },
                  }),
                  _(Xo, {
                    label: "Ulkolinjat",
                    checked: u,
                    onChange: (le) => {
                      d(le.currentTarget.checked);
                    },
                  }),
                ],
              }),
              _(sf, {
                placeholder: "Background",
                label: "Tausta",
                data: LT,
                itemComponent: DT,
                value: h,
                onChange: y,
              }),
              _(af, { value: g, onChange: S, label: "Taustan Väri" }),
              U(gt, {
                children: [
                  _(_t, { fz: "sm", children: "Taustan Korkeus" }),
                  _(nr, {
                    sx: { flexGrow: 1 },
                    min: -0.5,
                    step: 0.002,
                    max: 0.5,
                    label: null,
                    value: w,
                    onChange: P,
                  }),
                ],
              }),
              U(gt, {
                children: [
                  _(_t, { fz: "sm", children: "Taustan Leveys" }),
                  _(nr, {
                    sx: { flexGrow: 1 },
                    min: -0.5,
                    step: 0.002,
                    max: 0.5,
                    label: null,
                    value: v,
                    onChange: p,
                  }),
                ],
              }),
              U(gt, {
                children: [
                  _(_t, { fz: "sm", children: "Taustan Vahvuus" }),
                  _(nr, {
                    max: 255,
                    sx: { flexGrow: 1 },
                    value: b,
                    onChange: O,
                  }),
                ],
              }),
              U(gt, {
                children: [
                  _(_t, { fz: "sm", children: "Background X" }),
                  _(nr, {
                    sx: { flexGrow: 1 },
                    step: 0.002,
                    min: -0.2,
                    max: 0.2,
                    label: null,
                    value: $,
                    onChange: C,
                  }),
                ],
              }),
              U(gt, {
                children: [
                  _(_t, { fz: "sm", children: "Background Y" }),
                  _(nr, {
                    sx: { flexGrow: 1 },
                    step: 0.002,
                    min: -0.2,
                    max: 0.2,
                    label: null,
                    value: R,
                    onChange: E,
                  }),
                ],
              }),
              U(gt, {
                children: [
                  _(_t, { fz: "sm", children: "Duration (Hours)" }),
                  _(nr, {
                    sx: { flexGrow: 1 },
                    step: 1,
                    min: 1,
                    max: G,
                    value: z,
                    onChange: M,
                  }),
                ],
              }),
              F &&
                (!ie || D) &&
                _(Xo, {
                  label: "Scene Never Expires",
                  checked: Q,
                  onChange: (le) => {
                    oe(le.currentTarget.checked);
                  },
                }),
              U(gt, {
                sx: { paddingBottom: 15 },
                children: [
                  _(Mc, {
                    color: "green",
                    onClick: () => {
                      bl("CreateScene"), de();
                    },
                    children: "Submit",
                  }),
                  _(Mc, { onClick: de, children: "Reset" }),
                  _(Mc, {
                    color: "red",
                    onClick: () => bl("hideFrame"),
                    children: "Cancel",
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  };
nd() && document.getElementById("root");
const MT = { colorScheme: "dark" };
Kc.createRoot(document.getElementById("root")).render(
  _(an.StrictMode, {
    children: _(q0, {
      withNormalizeCSS: !0,
      withGlobalStyles: !0,
      withCSSVariables: !0,
      theme: MT,
      children: _(mP, { children: _(AT, {}) }),
    }),
  })
);
