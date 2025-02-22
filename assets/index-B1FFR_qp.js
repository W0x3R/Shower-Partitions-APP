(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReact_production_min;
function requireReact_production_min() {
  if (hasRequiredReact_production_min) return react_production_min;
  hasRequiredReact_production_min = 1;
  var l2 = Symbol.for("react.element"), n2 = Symbol.for("react.portal"), p2 = Symbol.for("react.fragment"), q2 = Symbol.for("react.strict_mode"), r2 = Symbol.for("react.profiler"), t2 = Symbol.for("react.provider"), u2 = Symbol.for("react.context"), v2 = Symbol.for("react.forward_ref"), w2 = Symbol.for("react.suspense"), x2 = Symbol.for("react.memo"), y2 = Symbol.for("react.lazy"), z2 = Symbol.iterator;
  function A2(a2) {
    if (null === a2 || "object" !== typeof a2) return null;
    a2 = z2 && a2[z2] || a2["@@iterator"];
    return "function" === typeof a2 ? a2 : null;
  }
  var B2 = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C2 = Object.assign, D2 = {};
  function E2(a2, b2, e2) {
    this.props = a2;
    this.context = b2;
    this.refs = D2;
    this.updater = e2 || B2;
  }
  E2.prototype.isReactComponent = {};
  E2.prototype.setState = function(a2, b2) {
    if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a2, b2, "setState");
  };
  E2.prototype.forceUpdate = function(a2) {
    this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
  };
  function F2() {
  }
  F2.prototype = E2.prototype;
  function G2(a2, b2, e2) {
    this.props = a2;
    this.context = b2;
    this.refs = D2;
    this.updater = e2 || B2;
  }
  var H2 = G2.prototype = new F2();
  H2.constructor = G2;
  C2(H2, E2.prototype);
  H2.isPureReactComponent = true;
  var I2 = Array.isArray, J2 = Object.prototype.hasOwnProperty, K2 = { current: null }, L2 = { key: true, ref: true, __self: true, __source: true };
  function M2(a2, b2, e2) {
    var d2, c2 = {}, k2 = null, h2 = null;
    if (null != b2) for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J2.call(b2, d2) && !L2.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
    var g2 = arguments.length - 2;
    if (1 === g2) c2.children = e2;
    else if (1 < g2) {
      for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++) f2[m2] = arguments[m2 + 2];
      c2.children = f2;
    }
    if (a2 && a2.defaultProps) for (d2 in g2 = a2.defaultProps, g2) void 0 === c2[d2] && (c2[d2] = g2[d2]);
    return { $$typeof: l2, type: a2, key: k2, ref: h2, props: c2, _owner: K2.current };
  }
  function N2(a2, b2) {
    return { $$typeof: l2, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
  }
  function O2(a2) {
    return "object" === typeof a2 && null !== a2 && a2.$$typeof === l2;
  }
  function escape(a2) {
    var b2 = { "=": "=0", ":": "=2" };
    return "$" + a2.replace(/[=:]/g, function(a3) {
      return b2[a3];
    });
  }
  var P2 = /\/+/g;
  function Q2(a2, b2) {
    return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b2.toString(36);
  }
  function R2(a2, b2, e2, d2, c2) {
    var k2 = typeof a2;
    if ("undefined" === k2 || "boolean" === k2) a2 = null;
    var h2 = false;
    if (null === a2) h2 = true;
    else switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a2.$$typeof) {
          case l2:
          case n2:
            h2 = true;
        }
    }
    if (h2) return h2 = a2, c2 = c2(h2), a2 = "" === d2 ? "." + Q2(h2, 0) : d2, I2(c2) ? (e2 = "", null != a2 && (e2 = a2.replace(P2, "$&/") + "/"), R2(c2, b2, e2, "", function(a3) {
      return a3;
    })) : null != c2 && (O2(c2) && (c2 = N2(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P2, "$&/") + "/") + a2)), b2.push(c2)), 1;
    h2 = 0;
    d2 = "" === d2 ? "." : d2 + ":";
    if (I2(a2)) for (var g2 = 0; g2 < a2.length; g2++) {
      k2 = a2[g2];
      var f2 = d2 + Q2(k2, g2);
      h2 += R2(k2, b2, e2, f2, c2);
    }
    else if (f2 = A2(a2), "function" === typeof f2) for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; ) k2 = k2.value, f2 = d2 + Q2(k2, g2++), h2 += R2(k2, b2, e2, f2, c2);
    else if ("object" === k2) throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
    return h2;
  }
  function S2(a2, b2, e2) {
    if (null == a2) return a2;
    var d2 = [], c2 = 0;
    R2(a2, d2, "", "", function(a3) {
      return b2.call(e2, a3, c2++);
    });
    return d2;
  }
  function T2(a2) {
    if (-1 === a2._status) {
      var b2 = a2._result;
      b2 = b2();
      b2.then(function(b3) {
        if (0 === a2._status || -1 === a2._status) a2._status = 1, a2._result = b3;
      }, function(b3) {
        if (0 === a2._status || -1 === a2._status) a2._status = 2, a2._result = b3;
      });
      -1 === a2._status && (a2._status = 0, a2._result = b2);
    }
    if (1 === a2._status) return a2._result.default;
    throw a2._result;
  }
  var U2 = { current: null }, V2 = { transition: null }, W2 = { ReactCurrentDispatcher: U2, ReactCurrentBatchConfig: V2, ReactCurrentOwner: K2 };
  function X2() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  react_production_min.Children = { map: S2, forEach: function(a2, b2, e2) {
    S2(a2, function() {
      b2.apply(this, arguments);
    }, e2);
  }, count: function(a2) {
    var b2 = 0;
    S2(a2, function() {
      b2++;
    });
    return b2;
  }, toArray: function(a2) {
    return S2(a2, function(a3) {
      return a3;
    }) || [];
  }, only: function(a2) {
    if (!O2(a2)) throw Error("React.Children.only expected to receive a single React element child.");
    return a2;
  } };
  react_production_min.Component = E2;
  react_production_min.Fragment = p2;
  react_production_min.Profiler = r2;
  react_production_min.PureComponent = G2;
  react_production_min.StrictMode = q2;
  react_production_min.Suspense = w2;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W2;
  react_production_min.act = X2;
  react_production_min.cloneElement = function(a2, b2, e2) {
    if (null === a2 || void 0 === a2) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
    var d2 = C2({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
    if (null != b2) {
      void 0 !== b2.ref && (k2 = b2.ref, h2 = K2.current);
      void 0 !== b2.key && (c2 = "" + b2.key);
      if (a2.type && a2.type.defaultProps) var g2 = a2.type.defaultProps;
      for (f2 in b2) J2.call(b2, f2) && !L2.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
    }
    var f2 = arguments.length - 2;
    if (1 === f2) d2.children = e2;
    else if (1 < f2) {
      g2 = Array(f2);
      for (var m2 = 0; m2 < f2; m2++) g2[m2] = arguments[m2 + 2];
      d2.children = g2;
    }
    return { $$typeof: l2, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
  };
  react_production_min.createContext = function(a2) {
    a2 = { $$typeof: u2, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
    a2.Provider = { $$typeof: t2, _context: a2 };
    return a2.Consumer = a2;
  };
  react_production_min.createElement = M2;
  react_production_min.createFactory = function(a2) {
    var b2 = M2.bind(null, a2);
    b2.type = a2;
    return b2;
  };
  react_production_min.createRef = function() {
    return { current: null };
  };
  react_production_min.forwardRef = function(a2) {
    return { $$typeof: v2, render: a2 };
  };
  react_production_min.isValidElement = O2;
  react_production_min.lazy = function(a2) {
    return { $$typeof: y2, _payload: { _status: -1, _result: a2 }, _init: T2 };
  };
  react_production_min.memo = function(a2, b2) {
    return { $$typeof: x2, type: a2, compare: void 0 === b2 ? null : b2 };
  };
  react_production_min.startTransition = function(a2) {
    var b2 = V2.transition;
    V2.transition = {};
    try {
      a2();
    } finally {
      V2.transition = b2;
    }
  };
  react_production_min.unstable_act = X2;
  react_production_min.useCallback = function(a2, b2) {
    return U2.current.useCallback(a2, b2);
  };
  react_production_min.useContext = function(a2) {
    return U2.current.useContext(a2);
  };
  react_production_min.useDebugValue = function() {
  };
  react_production_min.useDeferredValue = function(a2) {
    return U2.current.useDeferredValue(a2);
  };
  react_production_min.useEffect = function(a2, b2) {
    return U2.current.useEffect(a2, b2);
  };
  react_production_min.useId = function() {
    return U2.current.useId();
  };
  react_production_min.useImperativeHandle = function(a2, b2, e2) {
    return U2.current.useImperativeHandle(a2, b2, e2);
  };
  react_production_min.useInsertionEffect = function(a2, b2) {
    return U2.current.useInsertionEffect(a2, b2);
  };
  react_production_min.useLayoutEffect = function(a2, b2) {
    return U2.current.useLayoutEffect(a2, b2);
  };
  react_production_min.useMemo = function(a2, b2) {
    return U2.current.useMemo(a2, b2);
  };
  react_production_min.useReducer = function(a2, b2, e2) {
    return U2.current.useReducer(a2, b2, e2);
  };
  react_production_min.useRef = function(a2) {
    return U2.current.useRef(a2);
  };
  react_production_min.useState = function(a2) {
    return U2.current.useState(a2);
  };
  react_production_min.useSyncExternalStore = function(a2, b2, e2) {
    return U2.current.useSyncExternalStore(a2, b2, e2);
  };
  react_production_min.useTransition = function() {
    return U2.current.useTransition();
  };
  react_production_min.version = "18.3.1";
  return react_production_min;
}
var hasRequiredReact;
function requireReact() {
  if (hasRequiredReact) return react.exports;
  hasRequiredReact = 1;
  {
    react.exports = requireReact_production_min();
  }
  return react.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var f2 = requireReact(), k2 = Symbol.for("react.element"), l2 = Symbol.for("react.fragment"), m2 = Object.prototype.hasOwnProperty, n2 = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p2 = { key: true, ref: true, __self: true, __source: true };
  function q2(c2, a2, g2) {
    var b2, d2 = {}, e2 = null, h2 = null;
    void 0 !== g2 && (e2 = "" + g2);
    void 0 !== a2.key && (e2 = "" + a2.key);
    void 0 !== a2.ref && (h2 = a2.ref);
    for (b2 in a2) m2.call(a2, b2) && !p2.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
    if (c2 && c2.defaultProps) for (b2 in a2 = c2.defaultProps, a2) void 0 === d2[b2] && (d2[b2] = a2[b2]);
    return { $$typeof: k2, type: c2, key: e2, ref: h2, props: d2, _owner: n2.current };
  }
  reactJsxRuntime_production_min.Fragment = l2;
  reactJsxRuntime_production_min.jsx = q2;
  reactJsxRuntime_production_min.jsxs = q2;
  return reactJsxRuntime_production_min;
}
var hasRequiredJsxRuntime;
function requireJsxRuntime() {
  if (hasRequiredJsxRuntime) return jsxRuntime.exports;
  hasRequiredJsxRuntime = 1;
  {
    jsxRuntime.exports = requireReactJsxRuntime_production_min();
  }
  return jsxRuntime.exports;
}
var jsxRuntimeExports = requireJsxRuntime();
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredScheduler_production_min;
function requireScheduler_production_min() {
  if (hasRequiredScheduler_production_min) return scheduler_production_min;
  hasRequiredScheduler_production_min = 1;
  (function(exports) {
    function f2(a2, b2) {
      var c2 = a2.length;
      a2.push(b2);
      a: for (; 0 < c2; ) {
        var d2 = c2 - 1 >>> 1, e2 = a2[d2];
        if (0 < g2(e2, b2)) a2[d2] = b2, a2[c2] = e2, c2 = d2;
        else break a;
      }
    }
    function h2(a2) {
      return 0 === a2.length ? null : a2[0];
    }
    function k2(a2) {
      if (0 === a2.length) return null;
      var b2 = a2[0], c2 = a2.pop();
      if (c2 !== b2) {
        a2[0] = c2;
        a: for (var d2 = 0, e2 = a2.length, w2 = e2 >>> 1; d2 < w2; ) {
          var m2 = 2 * (d2 + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
          if (0 > g2(C2, c2)) n2 < e2 && 0 > g2(x2, C2) ? (a2[d2] = x2, a2[n2] = c2, d2 = n2) : (a2[d2] = C2, a2[m2] = c2, d2 = m2);
          else if (n2 < e2 && 0 > g2(x2, c2)) a2[d2] = x2, a2[n2] = c2, d2 = n2;
          else break a;
        }
      }
      return b2;
    }
    function g2(a2, b2) {
      var c2 = a2.sortIndex - b2.sortIndex;
      return 0 !== c2 ? c2 : a2.id - b2.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
      var l2 = performance;
      exports.unstable_now = function() {
        return l2.now();
      };
    } else {
      var p2 = Date, q2 = p2.now();
      exports.unstable_now = function() {
        return p2.now() - q2;
      };
    }
    var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G2(a2) {
      for (var b2 = h2(t2); null !== b2; ) {
        if (null === b2.callback) k2(t2);
        else if (b2.startTime <= a2) k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
        else break;
        b2 = h2(t2);
      }
    }
    function H2(a2) {
      B2 = false;
      G2(a2);
      if (!A2) if (null !== h2(r2)) A2 = true, I2(J2);
      else {
        var b2 = h2(t2);
        null !== b2 && K2(H2, b2.startTime - a2);
      }
    }
    function J2(a2, b2) {
      A2 = false;
      B2 && (B2 = false, E2(L2), L2 = -1);
      z2 = true;
      var c2 = y2;
      try {
        G2(b2);
        for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
          var d2 = v2.callback;
          if ("function" === typeof d2) {
            v2.callback = null;
            y2 = v2.priorityLevel;
            var e2 = d2(v2.expirationTime <= b2);
            b2 = exports.unstable_now();
            "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
            G2(b2);
          } else k2(r2);
          v2 = h2(r2);
        }
        if (null !== v2) var w2 = true;
        else {
          var m2 = h2(t2);
          null !== m2 && K2(H2, m2.startTime - b2);
          w2 = false;
        }
        return w2;
      } finally {
        v2 = null, y2 = c2, z2 = false;
      }
    }
    var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
    function M2() {
      return exports.unstable_now() - Q2 < P2 ? false : true;
    }
    function R2() {
      if (null !== O2) {
        var a2 = exports.unstable_now();
        Q2 = a2;
        var b2 = true;
        try {
          b2 = O2(true, a2);
        } finally {
          b2 ? S2() : (N2 = false, O2 = null);
        }
      } else N2 = false;
    }
    var S2;
    if ("function" === typeof F2) S2 = function() {
      F2(R2);
    };
    else if ("undefined" !== typeof MessageChannel) {
      var T2 = new MessageChannel(), U2 = T2.port2;
      T2.port1.onmessage = R2;
      S2 = function() {
        U2.postMessage(null);
      };
    } else S2 = function() {
      D2(R2, 0);
    };
    function I2(a2) {
      O2 = a2;
      N2 || (N2 = true, S2());
    }
    function K2(a2, b2) {
      L2 = D2(function() {
        a2(exports.unstable_now());
      }, b2);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a2) {
      a2.callback = null;
    };
    exports.unstable_continueExecution = function() {
      A2 || z2 || (A2 = true, I2(J2));
    };
    exports.unstable_forceFrameRate = function(a2) {
      0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return y2;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return h2(r2);
    };
    exports.unstable_next = function(a2) {
      switch (y2) {
        case 1:
        case 2:
        case 3:
          var b2 = 3;
          break;
        default:
          b2 = y2;
      }
      var c2 = y2;
      y2 = b2;
      try {
        return a2();
      } finally {
        y2 = c2;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = function() {
    };
    exports.unstable_runWithPriority = function(a2, b2) {
      switch (a2) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a2 = 3;
      }
      var c2 = y2;
      y2 = a2;
      try {
        return b2();
      } finally {
        y2 = c2;
      }
    };
    exports.unstable_scheduleCallback = function(a2, b2, c2) {
      var d2 = exports.unstable_now();
      "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
      switch (a2) {
        case 1:
          var e2 = -1;
          break;
        case 2:
          e2 = 250;
          break;
        case 5:
          e2 = 1073741823;
          break;
        case 4:
          e2 = 1e4;
          break;
        default:
          e2 = 5e3;
      }
      e2 = c2 + e2;
      a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
      c2 > d2 ? (a2.sortIndex = c2, f2(t2, a2), null === h2(r2) && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a2.sortIndex = e2, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
      return a2;
    };
    exports.unstable_shouldYield = M2;
    exports.unstable_wrapCallback = function(a2) {
      var b2 = y2;
      return function() {
        var c2 = y2;
        y2 = b2;
        try {
          return a2.apply(this, arguments);
        } finally {
          y2 = c2;
        }
      };
    };
  })(scheduler_production_min);
  return scheduler_production_min;
}
var hasRequiredScheduler;
function requireScheduler() {
  if (hasRequiredScheduler) return scheduler.exports;
  hasRequiredScheduler = 1;
  {
    scheduler.exports = requireScheduler_production_min();
  }
  return scheduler.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactDom_production_min;
function requireReactDom_production_min() {
  if (hasRequiredReactDom_production_min) return reactDom_production_min;
  hasRequiredReactDom_production_min = 1;
  var aa = requireReact(), ca = requireScheduler();
  function p2(a2) {
    for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++) b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
    return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var da = /* @__PURE__ */ new Set(), ea = {};
  function fa(a2, b2) {
    ha(a2, b2);
    ha(a2 + "Capture", b2);
  }
  function ha(a2, b2) {
    ea[a2] = b2;
    for (a2 = 0; a2 < b2.length; a2++) da.add(b2[a2]);
  }
  var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
  function oa(a2) {
    if (ja.call(ma, a2)) return true;
    if (ja.call(la, a2)) return false;
    if (ka.test(a2)) return ma[a2] = true;
    la[a2] = true;
    return false;
  }
  function pa(a2, b2, c2, d2) {
    if (null !== c2 && 0 === c2.type) return false;
    switch (typeof b2) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d2) return false;
        if (null !== c2) return !c2.acceptsBooleans;
        a2 = a2.toLowerCase().slice(0, 5);
        return "data-" !== a2 && "aria-" !== a2;
      default:
        return false;
    }
  }
  function qa(a2, b2, c2, d2) {
    if (null === b2 || "undefined" === typeof b2 || pa(a2, b2, c2, d2)) return true;
    if (d2) return false;
    if (null !== c2) switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return false === b2;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
    return false;
  }
  function v2(a2, b2, c2, d2, e2, f2, g2) {
    this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
    this.attributeName = d2;
    this.attributeNamespace = e2;
    this.mustUseProperty = c2;
    this.propertyName = a2;
    this.type = b2;
    this.sanitizeURL = f2;
    this.removeEmptyString = g2;
  }
  var z2 = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
    z2[a2] = new v2(a2, 0, false, a2, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
    var b2 = a2[0];
    z2[b2] = new v2(b2, 1, false, a2[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
    z2[a2] = new v2(a2, 2, false, a2.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
    z2[a2] = new v2(a2, 2, false, a2, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
    z2[a2] = new v2(a2, 3, false, a2.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a2) {
    z2[a2] = new v2(a2, 3, true, a2, null, false, false);
  });
  ["capture", "download"].forEach(function(a2) {
    z2[a2] = new v2(a2, 4, false, a2, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a2) {
    z2[a2] = new v2(a2, 6, false, a2, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a2) {
    z2[a2] = new v2(a2, 5, false, a2.toLowerCase(), null, false, false);
  });
  var ra = /[\-:]([a-z])/g;
  function sa(a2) {
    return a2[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
    var b2 = a2.replace(
      ra,
      sa
    );
    z2[b2] = new v2(b2, 1, false, a2, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
    var b2 = a2.replace(ra, sa);
    z2[b2] = new v2(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
    var b2 = a2.replace(ra, sa);
    z2[b2] = new v2(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a2) {
    z2[a2] = new v2(a2, 1, false, a2.toLowerCase(), null, false, false);
  });
  z2.xlinkHref = new v2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a2) {
    z2[a2] = new v2(a2, 1, false, a2.toLowerCase(), null, true, true);
  });
  function ta(a2, b2, c2, d2) {
    var e2 = z2.hasOwnProperty(b2) ? z2[b2] : null;
    if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2)));
  }
  var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
  var Ia = Symbol.for("react.offscreen");
  var Ja = Symbol.iterator;
  function Ka(a2) {
    if (null === a2 || "object" !== typeof a2) return null;
    a2 = Ja && a2[Ja] || a2["@@iterator"];
    return "function" === typeof a2 ? a2 : null;
  }
  var A2 = Object.assign, La;
  function Ma(a2) {
    if (void 0 === La) try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      La = b2 && b2[1] || "";
    }
    return "\n" + La + a2;
  }
  var Na = false;
  function Oa(a2, b2) {
    if (!a2 || Na) return "";
    Na = true;
    var c2 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b2) if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d2 = l2;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d2 = l2;
        }
        a2.call(b2.prototype);
      }
      else {
        try {
          throw Error();
        } catch (l2) {
          d2 = l2;
        }
        a2();
      }
    } catch (l2) {
      if (l2 && d2 && "string" === typeof l2.stack) {
        for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; ) h2--;
        for (; 1 <= g2 && 0 <= h2; g2--, h2--) if (e2[g2] !== f2[h2]) {
          if (1 !== g2 || 1 !== h2) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
      }
    } finally {
      Na = false, Error.prepareStackTrace = c2;
    }
    return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma(a2) : "";
  }
  function Pa(a2) {
    switch (a2.tag) {
      case 5:
        return Ma(a2.type);
      case 16:
        return Ma("Lazy");
      case 13:
        return Ma("Suspense");
      case 19:
        return Ma("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a2 = Oa(a2.type, false), a2;
      case 11:
        return a2 = Oa(a2.type.render, false), a2;
      case 1:
        return a2 = Oa(a2.type, true), a2;
      default:
        return "";
    }
  }
  function Qa(a2) {
    if (null == a2) return null;
    if ("function" === typeof a2) return a2.displayName || a2.name || null;
    if ("string" === typeof a2) return a2;
    switch (a2) {
      case ya:
        return "Fragment";
      case wa:
        return "Portal";
      case Aa:
        return "Profiler";
      case za:
        return "StrictMode";
      case Ea:
        return "Suspense";
      case Fa:
        return "SuspenseList";
    }
    if ("object" === typeof a2) switch (a2.$$typeof) {
      case Ca:
        return (a2.displayName || "Context") + ".Consumer";
      case Ba:
        return (a2._context.displayName || "Context") + ".Provider";
      case Da:
        var b2 = a2.render;
        a2 = a2.displayName;
        a2 || (a2 = b2.displayName || b2.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
        return a2;
      case Ga:
        return b2 = a2.displayName || null, null !== b2 ? b2 : Qa(a2.type) || "Memo";
      case Ha:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Qa(a2(b2));
        } catch (c2) {
        }
    }
    return null;
  }
  function Ra(a2) {
    var b2 = a2.type;
    switch (a2.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b2.displayName || "Context") + ".Consumer";
      case 10:
        return (b2._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b2;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Qa(b2);
      case 8:
        return b2 === za ? "StrictMode" : "Mode";
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
        if ("function" === typeof b2) return b2.displayName || b2.name || null;
        if ("string" === typeof b2) return b2;
    }
    return null;
  }
  function Sa(a2) {
    switch (typeof a2) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return a2;
      case "object":
        return a2;
      default:
        return "";
    }
  }
  function Ta(a2) {
    var b2 = a2.type;
    return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
  }
  function Ua(a2) {
    var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
    if (!a2.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
      var e2 = c2.get, f2 = c2.set;
      Object.defineProperty(a2, b2, { configurable: true, get: function() {
        return e2.call(this);
      }, set: function(a3) {
        d2 = "" + a3;
        f2.call(this, a3);
      } });
      Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
      return { getValue: function() {
        return d2;
      }, setValue: function(a3) {
        d2 = "" + a3;
      }, stopTracking: function() {
        a2._valueTracker = null;
        delete a2[b2];
      } };
    }
  }
  function Va(a2) {
    a2._valueTracker || (a2._valueTracker = Ua(a2));
  }
  function Wa(a2) {
    if (!a2) return false;
    var b2 = a2._valueTracker;
    if (!b2) return true;
    var c2 = b2.getValue();
    var d2 = "";
    a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
    a2 = d2;
    return a2 !== c2 ? (b2.setValue(a2), true) : false;
  }
  function Xa(a2) {
    a2 = a2 || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a2) return null;
    try {
      return a2.activeElement || a2.body;
    } catch (b2) {
      return a2.body;
    }
  }
  function Ya(a2, b2) {
    var c2 = b2.checked;
    return A2({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
  }
  function Za(a2, b2) {
    var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
    c2 = Sa(null != b2.value ? b2.value : c2);
    a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
  }
  function ab(a2, b2) {
    b2 = b2.checked;
    null != b2 && ta(a2, "checked", b2, false);
  }
  function bb(a2, b2) {
    ab(a2, b2);
    var c2 = Sa(b2.value), d2 = b2.type;
    if (null != c2) if ("number" === d2) {
      if (0 === c2 && "" === a2.value || a2.value != c2) a2.value = "" + c2;
    } else a2.value !== "" + c2 && (a2.value = "" + c2);
    else if ("submit" === d2 || "reset" === d2) {
      a2.removeAttribute("value");
      return;
    }
    b2.hasOwnProperty("value") ? cb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a2, b2.type, Sa(b2.defaultValue));
    null == b2.checked && null != b2.defaultChecked && (a2.defaultChecked = !!b2.defaultChecked);
  }
  function db(a2, b2, c2) {
    if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
      var d2 = b2.type;
      if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value)) return;
      b2 = "" + a2._wrapperState.initialValue;
      c2 || b2 === a2.value || (a2.value = b2);
      a2.defaultValue = b2;
    }
    c2 = a2.name;
    "" !== c2 && (a2.name = "");
    a2.defaultChecked = !!a2._wrapperState.initialChecked;
    "" !== c2 && (a2.name = c2);
  }
  function cb(a2, b2, c2) {
    if ("number" !== b2 || Xa(a2.ownerDocument) !== a2) null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
  }
  var eb = Array.isArray;
  function fb(a2, b2, c2, d2) {
    a2 = a2.options;
    if (b2) {
      b2 = {};
      for (var e2 = 0; e2 < c2.length; e2++) b2["$" + c2[e2]] = true;
      for (c2 = 0; c2 < a2.length; c2++) e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
    } else {
      c2 = "" + Sa(c2);
      b2 = null;
      for (e2 = 0; e2 < a2.length; e2++) {
        if (a2[e2].value === c2) {
          a2[e2].selected = true;
          d2 && (a2[e2].defaultSelected = true);
          return;
        }
        null !== b2 || a2[e2].disabled || (b2 = a2[e2]);
      }
      null !== b2 && (b2.selected = true);
    }
  }
  function gb(a2, b2) {
    if (null != b2.dangerouslySetInnerHTML) throw Error(p2(91));
    return A2({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
  }
  function hb(a2, b2) {
    var c2 = b2.value;
    if (null == c2) {
      c2 = b2.children;
      b2 = b2.defaultValue;
      if (null != c2) {
        if (null != b2) throw Error(p2(92));
        if (eb(c2)) {
          if (1 < c2.length) throw Error(p2(93));
          c2 = c2[0];
        }
        b2 = c2;
      }
      null == b2 && (b2 = "");
      c2 = b2;
    }
    a2._wrapperState = { initialValue: Sa(c2) };
  }
  function ib(a2, b2) {
    var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
    null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b2.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
    null != d2 && (a2.defaultValue = "" + d2);
  }
  function jb(a2) {
    var b2 = a2.textContent;
    b2 === a2._wrapperState.initialValue && "" !== b2 && null !== b2 && (a2.value = b2);
  }
  function kb(a2) {
    switch (a2) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lb(a2, b2) {
    return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b2) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a2;
  }
  var mb, nb = function(a2) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
      MSApp.execUnsafeLocalFunction(function() {
        return a2(b2, c2, d2, e2);
      });
    } : a2;
  }(function(a2, b2) {
    if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2) a2.innerHTML = b2;
    else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
      for (b2 = mb.firstChild; a2.firstChild; ) a2.removeChild(a2.firstChild);
      for (; b2.firstChild; ) a2.appendChild(b2.firstChild);
    }
  });
  function ob(a2, b2) {
    if (b2) {
      var c2 = a2.firstChild;
      if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
        c2.nodeValue = b2;
        return;
      }
    }
    a2.textContent = b2;
  }
  var pb = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, qb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pb).forEach(function(a2) {
    qb.forEach(function(b2) {
      b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
      pb[b2] = pb[a2];
    });
  });
  function rb(a2, b2, c2) {
    return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b2).trim() : b2 + "px";
  }
  function sb(a2, b2) {
    a2 = a2.style;
    for (var c2 in b2) if (b2.hasOwnProperty(c2)) {
      var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
      "float" === c2 && (c2 = "cssFloat");
      d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
    }
  }
  var tb = A2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function ub(a2, b2) {
    if (b2) {
      if (tb[a2] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p2(137, a2));
      if (null != b2.dangerouslySetInnerHTML) {
        if (null != b2.children) throw Error(p2(60));
        if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p2(61));
      }
      if (null != b2.style && "object" !== typeof b2.style) throw Error(p2(62));
    }
  }
  function vb(a2, b2) {
    if (-1 === a2.indexOf("-")) return "string" === typeof b2.is;
    switch (a2) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var wb = null;
  function xb(a2) {
    a2 = a2.target || a2.srcElement || window;
    a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
    return 3 === a2.nodeType ? a2.parentNode : a2;
  }
  var yb = null, zb = null, Ab = null;
  function Bb(a2) {
    if (a2 = Cb(a2)) {
      if ("function" !== typeof yb) throw Error(p2(280));
      var b2 = a2.stateNode;
      b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
    }
  }
  function Eb(a2) {
    zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
  }
  function Fb() {
    if (zb) {
      var a2 = zb, b2 = Ab;
      Ab = zb = null;
      Bb(a2);
      if (b2) for (a2 = 0; a2 < b2.length; a2++) Bb(b2[a2]);
    }
  }
  function Gb(a2, b2) {
    return a2(b2);
  }
  function Hb() {
  }
  var Ib = false;
  function Jb(a2, b2, c2) {
    if (Ib) return a2(b2, c2);
    Ib = true;
    try {
      return Gb(a2, b2, c2);
    } finally {
      if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
    }
  }
  function Kb(a2, b2) {
    var c2 = a2.stateNode;
    if (null === c2) return null;
    var d2 = Db(c2);
    if (null === d2) return null;
    c2 = d2[b2];
    a: switch (b2) {
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
        (d2 = !d2.disabled) || (a2 = a2.type, d2 = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
        a2 = !d2;
        break a;
      default:
        a2 = false;
    }
    if (a2) return null;
    if (c2 && "function" !== typeof c2) throw Error(p2(231, b2, typeof c2));
    return c2;
  }
  var Lb = false;
  if (ia) try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a2) {
    Lb = false;
  }
  function Nb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    var l2 = Array.prototype.slice.call(arguments, 3);
    try {
      b2.apply(c2, l2);
    } catch (m2) {
      this.onError(m2);
    }
  }
  var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a2) {
    Ob = true;
    Pb = a2;
  } };
  function Tb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    Ob = false;
    Pb = null;
    Nb.apply(Sb, arguments);
  }
  function Ub(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    Tb.apply(this, arguments);
    if (Ob) {
      if (Ob) {
        var l2 = Pb;
        Ob = false;
        Pb = null;
      } else throw Error(p2(198));
      Qb || (Qb = true, Rb = l2);
    }
  }
  function Vb(a2) {
    var b2 = a2, c2 = a2;
    if (a2.alternate) for (; b2.return; ) b2 = b2.return;
    else {
      a2 = b2;
      do
        b2 = a2, 0 !== (b2.flags & 4098) && (c2 = b2.return), a2 = b2.return;
      while (a2);
    }
    return 3 === b2.tag ? c2 : null;
  }
  function Wb(a2) {
    if (13 === a2.tag) {
      var b2 = a2.memoizedState;
      null === b2 && (a2 = a2.alternate, null !== a2 && (b2 = a2.memoizedState));
      if (null !== b2) return b2.dehydrated;
    }
    return null;
  }
  function Xb(a2) {
    if (Vb(a2) !== a2) throw Error(p2(188));
  }
  function Yb(a2) {
    var b2 = a2.alternate;
    if (!b2) {
      b2 = Vb(a2);
      if (null === b2) throw Error(p2(188));
      return b2 !== a2 ? null : a2;
    }
    for (var c2 = a2, d2 = b2; ; ) {
      var e2 = c2.return;
      if (null === e2) break;
      var f2 = e2.alternate;
      if (null === f2) {
        d2 = e2.return;
        if (null !== d2) {
          c2 = d2;
          continue;
        }
        break;
      }
      if (e2.child === f2.child) {
        for (f2 = e2.child; f2; ) {
          if (f2 === c2) return Xb(e2), a2;
          if (f2 === d2) return Xb(e2), b2;
          f2 = f2.sibling;
        }
        throw Error(p2(188));
      }
      if (c2.return !== d2.return) c2 = e2, d2 = f2;
      else {
        for (var g2 = false, h2 = e2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = e2;
            d2 = f2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = e2;
            c2 = f2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2) {
          for (h2 = f2.child; h2; ) {
            if (h2 === c2) {
              g2 = true;
              c2 = f2;
              d2 = e2;
              break;
            }
            if (h2 === d2) {
              g2 = true;
              d2 = f2;
              c2 = e2;
              break;
            }
            h2 = h2.sibling;
          }
          if (!g2) throw Error(p2(189));
        }
      }
      if (c2.alternate !== d2) throw Error(p2(190));
    }
    if (3 !== c2.tag) throw Error(p2(188));
    return c2.stateNode.current === c2 ? a2 : b2;
  }
  function Zb(a2) {
    a2 = Yb(a2);
    return null !== a2 ? $b(a2) : null;
  }
  function $b(a2) {
    if (5 === a2.tag || 6 === a2.tag) return a2;
    for (a2 = a2.child; null !== a2; ) {
      var b2 = $b(a2);
      if (null !== b2) return b2;
      a2 = a2.sibling;
    }
    return null;
  }
  var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B2 = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
  function mc(a2) {
    if (lc && "function" === typeof lc.onCommitFiberRoot) try {
      lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
    } catch (b2) {
    }
  }
  var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
  function nc(a2) {
    a2 >>>= 0;
    return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
  }
  var rc = 64, sc = 4194304;
  function tc(a2) {
    switch (a2 & -a2) {
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
        return a2 & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a2 & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a2;
    }
  }
  function uc(a2, b2) {
    var c2 = a2.pendingLanes;
    if (0 === c2) return 0;
    var d2 = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
    if (0 !== g2) {
      var h2 = g2 & ~e2;
      0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
    } else g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
    if (0 === d2) return 0;
    if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240))) return b2;
    0 !== (d2 & 4) && (d2 |= c2 & 16);
    b2 = a2.entangledLanes;
    if (0 !== b2) for (a2 = a2.entanglements, b2 &= d2; 0 < b2; ) c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
    return d2;
  }
  function vc(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 4:
        return b2 + 250;
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
        return b2 + 5e3;
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
  function wc(a2, b2) {
    for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
      var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
      if (-1 === k2) {
        if (0 === (h2 & c2) || 0 !== (h2 & d2)) e2[g2] = vc(h2, b2);
      } else k2 <= b2 && (a2.expiredLanes |= h2);
      f2 &= ~h2;
    }
  }
  function xc(a2) {
    a2 = a2.pendingLanes & -1073741825;
    return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
  }
  function yc() {
    var a2 = rc;
    rc <<= 1;
    0 === (rc & 4194240) && (rc = 64);
    return a2;
  }
  function zc(a2) {
    for (var b2 = [], c2 = 0; 31 > c2; c2++) b2.push(a2);
    return b2;
  }
  function Ac(a2, b2, c2) {
    a2.pendingLanes |= b2;
    536870912 !== b2 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
    a2 = a2.eventTimes;
    b2 = 31 - oc(b2);
    a2[b2] = c2;
  }
  function Bc(a2, b2) {
    var c2 = a2.pendingLanes & ~b2;
    a2.pendingLanes = b2;
    a2.suspendedLanes = 0;
    a2.pingedLanes = 0;
    a2.expiredLanes &= b2;
    a2.mutableReadLanes &= b2;
    a2.entangledLanes &= b2;
    b2 = a2.entanglements;
    var d2 = a2.eventTimes;
    for (a2 = a2.expirationTimes; 0 < c2; ) {
      var e2 = 31 - oc(c2), f2 = 1 << e2;
      b2[e2] = 0;
      d2[e2] = -1;
      a2[e2] = -1;
      c2 &= ~f2;
    }
  }
  function Cc(a2, b2) {
    var c2 = a2.entangledLanes |= b2;
    for (a2 = a2.entanglements; c2; ) {
      var d2 = 31 - oc(c2), e2 = 1 << d2;
      e2 & b2 | a2[d2] & b2 && (a2[d2] |= b2);
      c2 &= ~e2;
    }
  }
  var C2 = 0;
  function Dc(a2) {
    a2 &= -a2;
    return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Sc(a2, b2) {
    switch (a2) {
      case "focusin":
      case "focusout":
        Lc = null;
        break;
      case "dragenter":
      case "dragleave":
        Mc = null;
        break;
      case "mouseover":
      case "mouseout":
        Nc = null;
        break;
      case "pointerover":
      case "pointerout":
        Oc.delete(b2.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pc.delete(b2.pointerId);
    }
  }
  function Tc(a2, b2, c2, d2, e2, f2) {
    if (null === a2 || a2.nativeEvent !== f2) return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a2;
    a2.eventSystemFlags |= d2;
    b2 = a2.targetContainers;
    null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
    return a2;
  }
  function Uc(a2, b2, c2, d2, e2) {
    switch (b2) {
      case "focusin":
        return Lc = Tc(Lc, a2, b2, c2, d2, e2), true;
      case "dragenter":
        return Mc = Tc(Mc, a2, b2, c2, d2, e2), true;
      case "mouseover":
        return Nc = Tc(Nc, a2, b2, c2, d2, e2), true;
      case "pointerover":
        var f2 = e2.pointerId;
        Oc.set(f2, Tc(Oc.get(f2) || null, a2, b2, c2, d2, e2));
        return true;
      case "gotpointercapture":
        return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a2, b2, c2, d2, e2)), true;
    }
    return false;
  }
  function Vc(a2) {
    var b2 = Wc(a2.target);
    if (null !== b2) {
      var c2 = Vb(b2);
      if (null !== c2) {
        if (b2 = c2.tag, 13 === b2) {
          if (b2 = Wb(c2), null !== b2) {
            a2.blockedOn = b2;
            Ic(a2.priority, function() {
              Gc(c2);
            });
            return;
          }
        } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
          a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a2.blockedOn = null;
  }
  function Xc(a2) {
    if (null !== a2.blockedOn) return false;
    for (var b2 = a2.targetContainers; 0 < b2.length; ) {
      var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
      if (null === c2) {
        c2 = a2.nativeEvent;
        var d2 = new c2.constructor(c2.type, c2);
        wb = d2;
        c2.target.dispatchEvent(d2);
        wb = null;
      } else return b2 = Cb(c2), null !== b2 && Fc(b2), a2.blockedOn = c2, false;
      b2.shift();
    }
    return true;
  }
  function Zc(a2, b2, c2) {
    Xc(a2) && c2.delete(b2);
  }
  function $c() {
    Jc = false;
    null !== Lc && Xc(Lc) && (Lc = null);
    null !== Mc && Xc(Mc) && (Mc = null);
    null !== Nc && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
  }
  function ad(a2, b2) {
    a2.blockedOn === b2 && (a2.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
  }
  function bd(a2) {
    function b2(b3) {
      return ad(b3, a2);
    }
    if (0 < Kc.length) {
      ad(Kc[0], a2);
      for (var c2 = 1; c2 < Kc.length; c2++) {
        var d2 = Kc[c2];
        d2.blockedOn === a2 && (d2.blockedOn = null);
      }
    }
    null !== Lc && ad(Lc, a2);
    null !== Mc && ad(Mc, a2);
    null !== Nc && ad(Nc, a2);
    Oc.forEach(b2);
    Pc.forEach(b2);
    for (c2 = 0; c2 < Qc.length; c2++) d2 = Qc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
    for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); ) Vc(c2), null === c2.blockedOn && Qc.shift();
  }
  var cd = ua.ReactCurrentBatchConfig, dd = true;
  function ed(a2, b2, c2, d2) {
    var e2 = C2, f2 = cd.transition;
    cd.transition = null;
    try {
      C2 = 1, fd(a2, b2, c2, d2);
    } finally {
      C2 = e2, cd.transition = f2;
    }
  }
  function gd(a2, b2, c2, d2) {
    var e2 = C2, f2 = cd.transition;
    cd.transition = null;
    try {
      C2 = 4, fd(a2, b2, c2, d2);
    } finally {
      C2 = e2, cd.transition = f2;
    }
  }
  function fd(a2, b2, c2, d2) {
    if (dd) {
      var e2 = Yc(a2, b2, c2, d2);
      if (null === e2) hd(a2, b2, d2, id, c2), Sc(a2, d2);
      else if (Uc(e2, a2, b2, c2, d2)) d2.stopPropagation();
      else if (Sc(a2, d2), b2 & 4 && -1 < Rc.indexOf(a2)) {
        for (; null !== e2; ) {
          var f2 = Cb(e2);
          null !== f2 && Ec(f2);
          f2 = Yc(a2, b2, c2, d2);
          null === f2 && hd(a2, b2, d2, id, c2);
          if (f2 === e2) break;
          e2 = f2;
        }
        null !== e2 && d2.stopPropagation();
      } else hd(a2, b2, d2, null, c2);
    }
  }
  var id = null;
  function Yc(a2, b2, c2, d2) {
    id = null;
    a2 = xb(d2);
    a2 = Wc(a2);
    if (null !== a2) if (b2 = Vb(a2), null === b2) a2 = null;
    else if (c2 = b2.tag, 13 === c2) {
      a2 = Wb(b2);
      if (null !== a2) return a2;
      a2 = null;
    } else if (3 === c2) {
      if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
      a2 = null;
    } else b2 !== a2 && (a2 = null);
    id = a2;
    return null;
  }
  function jd(a2) {
    switch (a2) {
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
        switch (ec()) {
          case fc:
            return 1;
          case gc:
            return 4;
          case hc:
          case ic:
            return 16;
          case jc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var kd = null, ld = null, md = null;
  function nd() {
    if (md) return md;
    var a2, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
    for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++) ;
    var g2 = c2 - a2;
    for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++) ;
    return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
  }
  function od(a2) {
    var b2 = a2.keyCode;
    "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b2 && (a2 = 13)) : a2 = b2;
    10 === a2 && (a2 = 13);
    return 32 <= a2 || 13 === a2 ? a2 : 0;
  }
  function pd() {
    return true;
  }
  function qd() {
    return false;
  }
  function rd(a2) {
    function b2(b3, d2, e2, f2, g2) {
      this._reactName = b3;
      this._targetInst = e2;
      this.type = d2;
      this.nativeEvent = f2;
      this.target = g2;
      this.currentTarget = null;
      for (var c2 in a2) a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
      this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    A2(b2.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a3 = this.nativeEvent;
      a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
    }, stopPropagation: function() {
      var a3 = this.nativeEvent;
      a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
    }, persist: function() {
    }, isPersistent: pd });
    return b2;
  }
  var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
    return a2.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A2({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
    return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
  }, movementX: function(a2) {
    if ("movementX" in a2) return a2.movementX;
    a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
    return wd;
  }, movementY: function(a2) {
    return "movementY" in a2 ? a2.movementY : xd;
  } }), Bd = rd(Ad), Cd = A2({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A2({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A2({}, sd, { clipboardData: function(a2) {
    return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
  } }), Jd = rd(Id), Kd = A2({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
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
    MozPrintableKey: "Unidentified"
  }, Nd = {
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
    224: "Meta"
  }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pd(a2) {
    var b2 = this.nativeEvent;
    return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
  }
  function zd() {
    return Pd;
  }
  var Qd = A2({}, ud, { key: function(a2) {
    if (a2.key) {
      var b2 = Md[a2.key] || a2.key;
      if ("Unidentified" !== b2) return b2;
    }
    return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
    return "keypress" === a2.type ? od(a2) : 0;
  }, keyCode: function(a2) {
    return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
  }, which: function(a2) {
    return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
  } }), Rd = rd(Qd), Sd = A2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A2({}, Ad, {
    deltaX: function(a2) {
      return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
    },
    deltaY: function(a2) {
      return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae2 = ia && "CompositionEvent" in window, be2 = null;
  ia && "documentMode" in document && (be2 = document.documentMode);
  var ce2 = ia && "TextEvent" in window && !be2, de2 = ia && (!ae2 || be2 && 8 < be2 && 11 >= be2), ee2 = String.fromCharCode(32), fe2 = false;
  function ge2(a2, b2) {
    switch (a2) {
      case "keyup":
        return -1 !== $d.indexOf(b2.keyCode);
      case "keydown":
        return 229 !== b2.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function he2(a2) {
    a2 = a2.detail;
    return "object" === typeof a2 && "data" in a2 ? a2.data : null;
  }
  var ie2 = false;
  function je(a2, b2) {
    switch (a2) {
      case "compositionend":
        return he2(b2);
      case "keypress":
        if (32 !== b2.which) return null;
        fe2 = true;
        return ee2;
      case "textInput":
        return a2 = b2.data, a2 === ee2 && fe2 ? null : a2;
      default:
        return null;
    }
  }
  function ke(a2, b2) {
    if (ie2) return "compositionend" === a2 || !ae2 && ge2(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie2 = false, a2) : null;
    switch (a2) {
      case "paste":
        return null;
      case "keypress":
        if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
          if (b2.char && 1 < b2.char.length) return b2.char;
          if (b2.which) return String.fromCharCode(b2.which);
        }
        return null;
      case "compositionend":
        return de2 && "ko" !== b2.locale ? null : b2.data;
      default:
        return null;
    }
  }
  var le2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function me2(a2) {
    var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
    return "input" === b2 ? !!le2[a2.type] : "textarea" === b2 ? true : false;
  }
  function ne2(a2, b2, c2, d2) {
    Eb(d2);
    b2 = oe2(b2, "onChange");
    0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
  }
  var pe2 = null, qe = null;
  function re2(a2) {
    se2(a2, 0);
  }
  function te2(a2) {
    var b2 = ue2(a2);
    if (Wa(b2)) return a2;
  }
  function ve2(a2, b2) {
    if ("change" === a2) return b2;
  }
  var we2 = false;
  if (ia) {
    var xe2;
    if (ia) {
      var ye2 = "oninput" in document;
      if (!ye2) {
        var ze = document.createElement("div");
        ze.setAttribute("oninput", "return;");
        ye2 = "function" === typeof ze.oninput;
      }
      xe2 = ye2;
    } else xe2 = false;
    we2 = xe2 && (!document.documentMode || 9 < document.documentMode);
  }
  function Ae() {
    pe2 && (pe2.detachEvent("onpropertychange", Be), qe = pe2 = null);
  }
  function Be(a2) {
    if ("value" === a2.propertyName && te2(qe)) {
      var b2 = [];
      ne2(b2, qe, a2, xb(a2));
      Jb(re2, b2);
    }
  }
  function Ce2(a2, b2, c2) {
    "focusin" === a2 ? (Ae(), pe2 = b2, qe = c2, pe2.attachEvent("onpropertychange", Be)) : "focusout" === a2 && Ae();
  }
  function De(a2) {
    if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2) return te2(qe);
  }
  function Ee2(a2, b2) {
    if ("click" === a2) return te2(b2);
  }
  function Fe(a2, b2) {
    if ("input" === a2 || "change" === a2) return te2(b2);
  }
  function Ge(a2, b2) {
    return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
  }
  var He = "function" === typeof Object.is ? Object.is : Ge;
  function Ie(a2, b2) {
    if (He(a2, b2)) return true;
    if ("object" !== typeof a2 || null === a2 || "object" !== typeof b2 || null === b2) return false;
    var c2 = Object.keys(a2), d2 = Object.keys(b2);
    if (c2.length !== d2.length) return false;
    for (d2 = 0; d2 < c2.length; d2++) {
      var e2 = c2[d2];
      if (!ja.call(b2, e2) || !He(a2[e2], b2[e2])) return false;
    }
    return true;
  }
  function Je(a2) {
    for (; a2 && a2.firstChild; ) a2 = a2.firstChild;
    return a2;
  }
  function Ke(a2, b2) {
    var c2 = Je(a2);
    a2 = 0;
    for (var d2; c2; ) {
      if (3 === c2.nodeType) {
        d2 = a2 + c2.textContent.length;
        if (a2 <= b2 && d2 >= b2) return { node: c2, offset: b2 - a2 };
        a2 = d2;
      }
      a: {
        for (; c2; ) {
          if (c2.nextSibling) {
            c2 = c2.nextSibling;
            break a;
          }
          c2 = c2.parentNode;
        }
        c2 = void 0;
      }
      c2 = Je(c2);
    }
  }
  function Le(a2, b2) {
    return a2 && b2 ? a2 === b2 ? true : a2 && 3 === a2.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
  }
  function Me2() {
    for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
      try {
        var c2 = "string" === typeof b2.contentWindow.location.href;
      } catch (d2) {
        c2 = false;
      }
      if (c2) a2 = b2.contentWindow;
      else break;
      b2 = Xa(a2.document);
    }
    return b2;
  }
  function Ne(a2) {
    var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
    return b2 && ("input" === b2 && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b2 || "true" === a2.contentEditable);
  }
  function Oe2(a2) {
    var b2 = Me2(), c2 = a2.focusedElem, d2 = a2.selectionRange;
    if (b2 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
      if (null !== d2 && Ne(c2)) {
        if (b2 = d2.start, a2 = d2.end, void 0 === a2 && (a2 = b2), "selectionStart" in c2) c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
        else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
          a2 = a2.getSelection();
          var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
          d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
          !a2.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
          e2 = Ke(c2, f2);
          var g2 = Ke(
            c2,
            d2
          );
          e2 && g2 && (1 !== a2.rangeCount || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
        }
      }
      b2 = [];
      for (a2 = c2; a2 = a2.parentNode; ) 1 === a2.nodeType && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
      "function" === typeof c2.focus && c2.focus();
      for (c2 = 0; c2 < b2.length; c2++) a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
    }
  }
  var Pe2 = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se2 = null, Te2 = false;
  function Ue(a2, b2, c2) {
    var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
    Te2 || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se2 && Ie(Se2, d2) || (Se2 = d2, d2 = oe2(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe)));
  }
  function Ve(a2, b2) {
    var c2 = {};
    c2[a2.toLowerCase()] = b2.toLowerCase();
    c2["Webkit" + a2] = "webkit" + b2;
    c2["Moz" + a2] = "moz" + b2;
    return c2;
  }
  var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
  ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
  function Ze(a2) {
    if (Xe[a2]) return Xe[a2];
    if (!We[a2]) return a2;
    var b2 = We[a2], c2;
    for (c2 in b2) if (b2.hasOwnProperty(c2) && c2 in Ye) return Xe[a2] = b2[c2];
    return a2;
  }
  var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ff(a2, b2) {
    df.set(a2, b2);
    fa(b2, [a2]);
  }
  for (var gf = 0; gf < ef.length; gf++) {
    var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, "on" + kf);
  }
  ff($e, "onAnimationEnd");
  ff(af, "onAnimationIteration");
  ff(bf, "onAnimationStart");
  ff("dblclick", "onDoubleClick");
  ff("focusin", "onFocus");
  ff("focusout", "onBlur");
  ff(cf, "onTransitionEnd");
  ha("onMouseEnter", ["mouseout", "mouseover"]);
  ha("onMouseLeave", ["mouseout", "mouseover"]);
  ha("onPointerEnter", ["pointerout", "pointerover"]);
  ha("onPointerLeave", ["pointerout", "pointerover"]);
  fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
  function nf(a2, b2, c2) {
    var d2 = a2.type || "unknown-event";
    a2.currentTarget = c2;
    Ub(d2, b2, void 0, a2);
    a2.currentTarget = null;
  }
  function se2(a2, b2) {
    b2 = 0 !== (b2 & 4);
    for (var c2 = 0; c2 < a2.length; c2++) {
      var d2 = a2[c2], e2 = d2.event;
      d2 = d2.listeners;
      a: {
        var f2 = void 0;
        if (b2) for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped()) break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
        else for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped()) break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
      }
    }
    if (Qb) throw a2 = Rb, Qb = false, Rb = null, a2;
  }
  function D2(a2, b2) {
    var c2 = b2[of];
    void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
    var d2 = a2 + "__bubble";
    c2.has(d2) || (pf(b2, a2, 2, false), c2.add(d2));
  }
  function qf(a2, b2, c2) {
    var d2 = 0;
    b2 && (d2 |= 4);
    pf(c2, a2, d2, b2);
  }
  var rf = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(a2) {
    if (!a2[rf]) {
      a2[rf] = true;
      da.forEach(function(b3) {
        "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a2), qf(b3, true, a2));
      });
      var b2 = 9 === a2.nodeType ? a2 : a2.ownerDocument;
      null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
    }
  }
  function pf(a2, b2, c2, d2) {
    switch (jd(b2)) {
      case 1:
        var e2 = ed;
        break;
      case 4:
        e2 = gd;
        break;
      default:
        e2 = fd;
    }
    c2 = e2.bind(null, b2, c2, a2);
    e2 = void 0;
    !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
    d2 ? void 0 !== e2 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : void 0 !== e2 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
  }
  function hd(a2, b2, c2, d2, e2) {
    var f2 = d2;
    if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2) a: for (; ; ) {
      if (null === d2) return;
      var g2 = d2.tag;
      if (3 === g2 || 4 === g2) {
        var h2 = d2.stateNode.containerInfo;
        if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2) break;
        if (4 === g2) for (g2 = d2.return; null !== g2; ) {
          var k2 = g2.tag;
          if (3 === k2 || 4 === k2) {
            if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2) return;
          }
          g2 = g2.return;
        }
        for (; null !== h2; ) {
          g2 = Wc(h2);
          if (null === g2) return;
          k2 = g2.tag;
          if (5 === k2 || 6 === k2) {
            d2 = f2 = g2;
            continue a;
          }
          h2 = h2.parentNode;
        }
      }
      d2 = d2.return;
    }
    Jb(function() {
      var d3 = f2, e3 = xb(c2), g3 = [];
      a: {
        var h3 = df.get(a2);
        if (void 0 !== h3) {
          var k3 = td, n2 = a2;
          switch (a2) {
            case "keypress":
              if (0 === od(c2)) break a;
            case "keydown":
            case "keyup":
              k3 = Rd;
              break;
            case "focusin":
              n2 = "focus";
              k3 = Fd;
              break;
            case "focusout":
              n2 = "blur";
              k3 = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k3 = Fd;
              break;
            case "click":
              if (2 === c2.button) break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k3 = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k3 = Dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k3 = Vd;
              break;
            case $e:
            case af:
            case bf:
              k3 = Hd;
              break;
            case cf:
              k3 = Xd;
              break;
            case "scroll":
              k3 = vd;
              break;
            case "wheel":
              k3 = Zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              k3 = Jd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k3 = Td;
          }
          var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a2, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
          t2 = [];
          for (var w2 = d3, u2; null !== w2; ) {
            u2 = w2;
            var F2 = u2.stateNode;
            5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
            if (J2) break;
            w2 = w2.return;
          }
          0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
        }
      }
      if (0 === (b2 & 7)) {
        a: {
          h3 = "mouseover" === a2 || "pointerover" === a2;
          k3 = "mouseout" === a2 || "pointerout" === a2;
          if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf])) break a;
          if (k3 || h3) {
            h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
            if (k3) {
              if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
            } else k3 = null, n2 = d3;
            if (k3 !== n2) {
              t2 = Bd;
              F2 = "onMouseLeave";
              x2 = "onMouseEnter";
              w2 = "mouse";
              if ("pointerout" === a2 || "pointerover" === a2) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
              J2 = null == k3 ? h3 : ue2(k3);
              u2 = null == n2 ? h3 : ue2(n2);
              h3 = new t2(F2, w2 + "leave", k3, c2, e3);
              h3.target = J2;
              h3.relatedTarget = u2;
              F2 = null;
              Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
              J2 = F2;
              if (k3 && n2) b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2)) w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2)) u2++;
                for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
              else t2 = null;
              null !== k3 && wf(g3, h3, k3, t2, false);
              null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
            }
          }
        }
        a: {
          h3 = d3 ? ue2(d3) : window;
          k3 = h3.nodeName && h3.nodeName.toLowerCase();
          if ("select" === k3 || "input" === k3 && "file" === h3.type) var na = ve2;
          else if (me2(h3)) if (we2) na = Fe;
          else {
            na = De;
            var xa = Ce2;
          }
          else (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee2);
          if (na && (na = na(a2, d3))) {
            ne2(g3, na, c2, e3);
            break a;
          }
          xa && xa(a2, h3, d3);
          "focusout" === a2 && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
        }
        xa = d3 ? ue2(d3) : window;
        switch (a2) {
          case "focusin":
            if (me2(xa) || "true" === xa.contentEditable) Qe = xa, Re = d3, Se2 = null;
            break;
          case "focusout":
            Se2 = Re = Qe = null;
            break;
          case "mousedown":
            Te2 = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Te2 = false;
            Ue(g3, c2, e3);
            break;
          case "selectionchange":
            if (Pe2) break;
          case "keydown":
          case "keyup":
            Ue(g3, c2, e3);
        }
        var $a;
        if (ae2) b: {
          switch (a2) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
        else ie2 ? ge2(a2, c2) && (ba = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba = "onCompositionStart");
        ba && (de2 && "ko" !== c2.locale && (ie2 || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie2 && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie2 = true)), xa = oe2(d3, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he2(c2), null !== $a && (ba.data = $a))));
        if ($a = ce2 ? je(a2, c2) : ke(a2, c2)) d3 = oe2(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
      }
      se2(g3, b2);
    });
  }
  function tf(a2, b2, c2) {
    return { instance: a2, listener: b2, currentTarget: c2 };
  }
  function oe2(a2, b2) {
    for (var c2 = b2 + "Capture", d2 = []; null !== a2; ) {
      var e2 = a2, f2 = e2.stateNode;
      5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a2, c2), null != f2 && d2.unshift(tf(a2, f2, e2)), f2 = Kb(a2, b2), null != f2 && d2.push(tf(a2, f2, e2)));
      a2 = a2.return;
    }
    return d2;
  }
  function vf(a2) {
    if (null === a2) return null;
    do
      a2 = a2.return;
    while (a2 && 5 !== a2.tag);
    return a2 ? a2 : null;
  }
  function wf(a2, b2, c2, d2, e2) {
    for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
      var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
      if (null !== k2 && k2 === d2) break;
      5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
      c2 = c2.return;
    }
    0 !== g2.length && a2.push({ event: b2, listeners: g2 });
  }
  var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
  function zf(a2) {
    return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
  }
  function Af(a2, b2, c2) {
    b2 = zf(b2);
    if (zf(a2) !== b2 && c2) throw Error(p2(425));
  }
  function Bf() {
  }
  var Cf = null, Df = null;
  function Ef(a2, b2) {
    return "textarea" === a2 || "noscript" === a2 || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
  }
  var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
    return Hf.resolve(null).then(a2).catch(If);
  } : Ff;
  function If(a2) {
    setTimeout(function() {
      throw a2;
    });
  }
  function Kf(a2, b2) {
    var c2 = b2, d2 = 0;
    do {
      var e2 = c2.nextSibling;
      a2.removeChild(c2);
      if (e2 && 8 === e2.nodeType) if (c2 = e2.data, "/$" === c2) {
        if (0 === d2) {
          a2.removeChild(e2);
          bd(b2);
          return;
        }
        d2--;
      } else "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
      c2 = e2;
    } while (c2);
    bd(b2);
  }
  function Lf(a2) {
    for (; null != a2; a2 = a2.nextSibling) {
      var b2 = a2.nodeType;
      if (1 === b2 || 3 === b2) break;
      if (8 === b2) {
        b2 = a2.data;
        if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
        if ("/$" === b2) return null;
      }
    }
    return a2;
  }
  function Mf(a2) {
    a2 = a2.previousSibling;
    for (var b2 = 0; a2; ) {
      if (8 === a2.nodeType) {
        var c2 = a2.data;
        if ("$" === c2 || "$!" === c2 || "$?" === c2) {
          if (0 === b2) return a2;
          b2--;
        } else "/$" === c2 && b2++;
      }
      a2 = a2.previousSibling;
    }
    return null;
  }
  var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
  function Wc(a2) {
    var b2 = a2[Of];
    if (b2) return b2;
    for (var c2 = a2.parentNode; c2; ) {
      if (b2 = c2[uf] || c2[Of]) {
        c2 = b2.alternate;
        if (null !== b2.child || null !== c2 && null !== c2.child) for (a2 = Mf(a2); null !== a2; ) {
          if (c2 = a2[Of]) return c2;
          a2 = Mf(a2);
        }
        return b2;
      }
      a2 = c2;
      c2 = a2.parentNode;
    }
    return null;
  }
  function Cb(a2) {
    a2 = a2[Of] || a2[uf];
    return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
  }
  function ue2(a2) {
    if (5 === a2.tag || 6 === a2.tag) return a2.stateNode;
    throw Error(p2(33));
  }
  function Db(a2) {
    return a2[Pf] || null;
  }
  var Sf = [], Tf = -1;
  function Uf(a2) {
    return { current: a2 };
  }
  function E2(a2) {
    0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
  }
  function G2(a2, b2) {
    Tf++;
    Sf[Tf] = a2.current;
    a2.current = b2;
  }
  var Vf = {}, H2 = Uf(Vf), Wf = Uf(false), Xf = Vf;
  function Yf(a2, b2) {
    var c2 = a2.type.contextTypes;
    if (!c2) return Vf;
    var d2 = a2.stateNode;
    if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2) return d2.__reactInternalMemoizedMaskedChildContext;
    var e2 = {}, f2;
    for (f2 in c2) e2[f2] = b2[f2];
    d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
    return e2;
  }
  function Zf(a2) {
    a2 = a2.childContextTypes;
    return null !== a2 && void 0 !== a2;
  }
  function $f() {
    E2(Wf);
    E2(H2);
  }
  function ag(a2, b2, c2) {
    if (H2.current !== Vf) throw Error(p2(168));
    G2(H2, b2);
    G2(Wf, c2);
  }
  function bg(a2, b2, c2) {
    var d2 = a2.stateNode;
    b2 = b2.childContextTypes;
    if ("function" !== typeof d2.getChildContext) return c2;
    d2 = d2.getChildContext();
    for (var e2 in d2) if (!(e2 in b2)) throw Error(p2(108, Ra(a2) || "Unknown", e2));
    return A2({}, c2, d2);
  }
  function cg(a2) {
    a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
    Xf = H2.current;
    G2(H2, a2);
    G2(Wf, Wf.current);
    return true;
  }
  function dg(a2, b2, c2) {
    var d2 = a2.stateNode;
    if (!d2) throw Error(p2(169));
    c2 ? (a2 = bg(a2, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a2, E2(Wf), E2(H2), G2(H2, a2)) : E2(Wf);
    G2(Wf, c2);
  }
  var eg = null, fg = false, gg = false;
  function hg(a2) {
    null === eg ? eg = [a2] : eg.push(a2);
  }
  function ig(a2) {
    fg = true;
    hg(a2);
  }
  function jg() {
    if (!gg && null !== eg) {
      gg = true;
      var a2 = 0, b2 = C2;
      try {
        var c2 = eg;
        for (C2 = 1; a2 < c2.length; a2++) {
          var d2 = c2[a2];
          do
            d2 = d2(true);
          while (null !== d2);
        }
        eg = null;
        fg = false;
      } catch (e2) {
        throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e2;
      } finally {
        C2 = b2, gg = false;
      }
    }
    return null;
  }
  var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
  function tg(a2, b2) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a2;
    ng = b2;
  }
  function ug(a2, b2, c2) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a2;
    var d2 = rg;
    a2 = sg;
    var e2 = 32 - oc(d2) - 1;
    d2 &= ~(1 << e2);
    c2 += 1;
    var f2 = 32 - oc(b2) + e2;
    if (30 < f2) {
      var g2 = e2 - e2 % 5;
      f2 = (d2 & (1 << g2) - 1).toString(32);
      d2 >>= g2;
      e2 -= g2;
      rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
      sg = f2 + a2;
    } else rg = 1 << f2 | c2 << e2 | d2, sg = a2;
  }
  function vg(a2) {
    null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
  }
  function wg(a2) {
    for (; a2 === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
    for (; a2 === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
  }
  var xg = null, yg = null, I2 = false, zg = null;
  function Ag(a2, b2) {
    var c2 = Bg(5, null, null, 0);
    c2.elementType = "DELETED";
    c2.stateNode = b2;
    c2.return = a2;
    b2 = a2.deletions;
    null === b2 ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
  }
  function Cg(a2, b2) {
    switch (a2.tag) {
      case 5:
        var c2 = a2.type;
        b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
        return null !== b2 ? (a2.stateNode = b2, xg = a2, yg = Lf(b2.firstChild), true) : false;
      case 6:
        return b2 = "" === a2.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a2.stateNode = b2, xg = a2, yg = null, true) : false;
      case 13:
        return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
      default:
        return false;
    }
  }
  function Dg(a2) {
    return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
  }
  function Eg(a2) {
    if (I2) {
      var b2 = yg;
      if (b2) {
        var c2 = b2;
        if (!Cg(a2, b2)) {
          if (Dg(a2)) throw Error(p2(418));
          b2 = Lf(c2.nextSibling);
          var d2 = xg;
          b2 && Cg(a2, b2) ? Ag(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I2 = false, xg = a2);
        }
      } else {
        if (Dg(a2)) throw Error(p2(418));
        a2.flags = a2.flags & -4097 | 2;
        I2 = false;
        xg = a2;
      }
    }
  }
  function Fg(a2) {
    for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; ) a2 = a2.return;
    xg = a2;
  }
  function Gg(a2) {
    if (a2 !== xg) return false;
    if (!I2) return Fg(a2), I2 = true, false;
    var b2;
    (b2 = 3 !== a2.tag) && !(b2 = 5 !== a2.tag) && (b2 = a2.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a2.type, a2.memoizedProps));
    if (b2 && (b2 = yg)) {
      if (Dg(a2)) throw Hg(), Error(p2(418));
      for (; b2; ) Ag(a2, b2), b2 = Lf(b2.nextSibling);
    }
    Fg(a2);
    if (13 === a2.tag) {
      a2 = a2.memoizedState;
      a2 = null !== a2 ? a2.dehydrated : null;
      if (!a2) throw Error(p2(317));
      a: {
        a2 = a2.nextSibling;
        for (b2 = 0; a2; ) {
          if (8 === a2.nodeType) {
            var c2 = a2.data;
            if ("/$" === c2) {
              if (0 === b2) {
                yg = Lf(a2.nextSibling);
                break a;
              }
              b2--;
            } else "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
          }
          a2 = a2.nextSibling;
        }
        yg = null;
      }
    } else yg = xg ? Lf(a2.stateNode.nextSibling) : null;
    return true;
  }
  function Hg() {
    for (var a2 = yg; a2; ) a2 = Lf(a2.nextSibling);
  }
  function Ig() {
    yg = xg = null;
    I2 = false;
  }
  function Jg(a2) {
    null === zg ? zg = [a2] : zg.push(a2);
  }
  var Kg = ua.ReactCurrentBatchConfig;
  function Lg(a2, b2, c2) {
    a2 = c2.ref;
    if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
      if (c2._owner) {
        c2 = c2._owner;
        if (c2) {
          if (1 !== c2.tag) throw Error(p2(309));
          var d2 = c2.stateNode;
        }
        if (!d2) throw Error(p2(147, a2));
        var e2 = d2, f2 = "" + a2;
        if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
        b2 = function(a3) {
          var b3 = e2.refs;
          null === a3 ? delete b3[f2] : b3[f2] = a3;
        };
        b2._stringRef = f2;
        return b2;
      }
      if ("string" !== typeof a2) throw Error(p2(284));
      if (!c2._owner) throw Error(p2(290, a2));
    }
    return a2;
  }
  function Mg(a2, b2) {
    a2 = Object.prototype.toString.call(b2);
    throw Error(p2(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
  }
  function Ng(a2) {
    var b2 = a2._init;
    return b2(a2._payload);
  }
  function Og(a2) {
    function b2(b3, c3) {
      if (a2) {
        var d3 = b3.deletions;
        null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
      }
    }
    function c2(c3, d3) {
      if (!a2) return null;
      for (; null !== d3; ) b2(c3, d3), d3 = d3.sibling;
      return null;
    }
    function d2(a3, b3) {
      for (a3 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
      return a3;
    }
    function e2(a3, b3) {
      a3 = Pg(a3, b3);
      a3.index = 0;
      a3.sibling = null;
      return a3;
    }
    function f2(b3, c3, d3) {
      b3.index = d3;
      if (!a2) return b3.flags |= 1048576, c3;
      d3 = b3.alternate;
      if (null !== d3) return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
      b3.flags |= 2;
      return c3;
    }
    function g2(b3) {
      a2 && null === b3.alternate && (b3.flags |= 2);
      return b3;
    }
    function h2(a3, b3, c3, d3) {
      if (null === b3 || 6 !== b3.tag) return b3 = Qg(c3, a3.mode, d3), b3.return = a3, b3;
      b3 = e2(b3, c3);
      b3.return = a3;
      return b3;
    }
    function k2(a3, b3, c3, d3) {
      var f3 = c3.type;
      if (f3 === ya) return m2(a3, b3, c3.props.children, d3, c3.key);
      if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b3.type)) return d3 = e2(b3, c3.props), d3.ref = Lg(a3, b3, c3), d3.return = a3, d3;
      d3 = Rg(c3.type, c3.key, c3.props, null, a3.mode, d3);
      d3.ref = Lg(a3, b3, c3);
      d3.return = a3;
      return d3;
    }
    function l2(a3, b3, c3, d3) {
      if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation) return b3 = Sg(c3, a3.mode, d3), b3.return = a3, b3;
      b3 = e2(b3, c3.children || []);
      b3.return = a3;
      return b3;
    }
    function m2(a3, b3, c3, d3, f3) {
      if (null === b3 || 7 !== b3.tag) return b3 = Tg(c3, a3.mode, d3, f3), b3.return = a3, b3;
      b3 = e2(b3, c3);
      b3.return = a3;
      return b3;
    }
    function q2(a3, b3, c3) {
      if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a3.mode, c3), b3.return = a3, b3;
      if ("object" === typeof b3 && null !== b3) {
        switch (b3.$$typeof) {
          case va:
            return c3 = Rg(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = Lg(a3, null, b3), c3.return = a3, c3;
          case wa:
            return b3 = Sg(b3, a3.mode, c3), b3.return = a3, b3;
          case Ha:
            var d3 = b3._init;
            return q2(a3, d3(b3._payload), c3);
        }
        if (eb(b3) || Ka(b3)) return b3 = Tg(b3, a3.mode, c3, null), b3.return = a3, b3;
        Mg(a3, b3);
      }
      return null;
    }
    function r2(a3, b3, c3, d3) {
      var e3 = null !== b3 ? b3.key : null;
      if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3) return null !== e3 ? null : h2(a3, b3, "" + c3, d3);
      if ("object" === typeof c3 && null !== c3) {
        switch (c3.$$typeof) {
          case va:
            return c3.key === e3 ? k2(a3, b3, c3, d3) : null;
          case wa:
            return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
          case Ha:
            return e3 = c3._init, r2(
              a3,
              b3,
              e3(c3._payload),
              d3
            );
        }
        if (eb(c3) || Ka(c3)) return null !== e3 ? null : m2(a3, b3, c3, d3, null);
        Mg(a3, c3);
      }
      return null;
    }
    function y2(a3, b3, c3, d3, e3) {
      if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3) return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
      if ("object" === typeof d3 && null !== d3) {
        switch (d3.$$typeof) {
          case va:
            return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a3, d3, e3);
          case wa:
            return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
          case Ha:
            var f3 = d3._init;
            return y2(a3, b3, c3, f3(d3._payload), e3);
        }
        if (eb(d3) || Ka(d3)) return a3 = a3.get(c3) || null, m2(b3, a3, d3, e3, null);
        Mg(b3, d3);
      }
      return null;
    }
    function n2(e3, g3, h3, k3) {
      for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
        u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
        var n3 = r2(e3, u2, h3[w2], k3);
        if (null === n3) {
          null === u2 && (u2 = x2);
          break;
        }
        a2 && u2 && null === n3.alternate && b2(e3, u2);
        g3 = f2(n3, g3, w2);
        null === m3 ? l3 = n3 : m3.sibling = n3;
        m3 = n3;
        u2 = x2;
      }
      if (w2 === h3.length) return c2(e3, u2), I2 && tg(e3, w2), l3;
      if (null === u2) {
        for (; w2 < h3.length; w2++) u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
        I2 && tg(e3, w2);
        return l3;
      }
      for (u2 = d2(e3, u2); w2 < h3.length; w2++) x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
      a2 && u2.forEach(function(a3) {
        return b2(e3, a3);
      });
      I2 && tg(e3, w2);
      return l3;
    }
    function t2(e3, g3, h3, k3) {
      var l3 = Ka(h3);
      if ("function" !== typeof l3) throw Error(p2(150));
      h3 = l3.call(h3);
      if (null == h3) throw Error(p2(151));
      for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
        m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
        var t3 = r2(e3, m3, n3.value, k3);
        if (null === t3) {
          null === m3 && (m3 = x2);
          break;
        }
        a2 && m3 && null === t3.alternate && b2(e3, m3);
        g3 = f2(t3, g3, w2);
        null === u2 ? l3 = t3 : u2.sibling = t3;
        u2 = t3;
        m3 = x2;
      }
      if (n3.done) return c2(
        e3,
        m3
      ), I2 && tg(e3, w2), l3;
      if (null === m3) {
        for (; !n3.done; w2++, n3 = h3.next()) n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
        I2 && tg(e3, w2);
        return l3;
      }
      for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next()) n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a2 && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      a2 && m3.forEach(function(a3) {
        return b2(e3, a3);
      });
      I2 && tg(e3, w2);
      return l3;
    }
    function J2(a3, d3, f3, h3) {
      "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
      if ("object" === typeof f3 && null !== f3) {
        switch (f3.$$typeof) {
          case va:
            a: {
              for (var k3 = f3.key, l3 = d3; null !== l3; ) {
                if (l3.key === k3) {
                  k3 = f3.type;
                  if (k3 === ya) {
                    if (7 === l3.tag) {
                      c2(a3, l3.sibling);
                      d3 = e2(l3, f3.props.children);
                      d3.return = a3;
                      a3 = d3;
                      break a;
                    }
                  } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                    c2(a3, l3.sibling);
                    d3 = e2(l3, f3.props);
                    d3.ref = Lg(a3, l3, f3);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  }
                  c2(a3, l3);
                  break;
                } else b2(a3, l3);
                l3 = l3.sibling;
              }
              f3.type === ya ? (d3 = Tg(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = Rg(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = Lg(a3, d3, f3), h3.return = a3, a3 = h3);
            }
            return g2(a3);
          case wa:
            a: {
              for (l3 = f3.key; null !== d3; ) {
                if (d3.key === l3) if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a3, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                } else {
                  c2(a3, d3);
                  break;
                }
                else b2(a3, d3);
                d3 = d3.sibling;
              }
              d3 = Sg(f3, a3.mode, h3);
              d3.return = a3;
              a3 = d3;
            }
            return g2(a3);
          case Ha:
            return l3 = f3._init, J2(a3, d3, l3(f3._payload), h3);
        }
        if (eb(f3)) return n2(a3, d3, f3, h3);
        if (Ka(f3)) return t2(a3, d3, f3, h3);
        Mg(a3, f3);
      }
      return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = Qg(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
    }
    return J2;
  }
  var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
  function $g() {
    Zg = Yg = Xg = null;
  }
  function ah(a2) {
    var b2 = Wg.current;
    E2(Wg);
    a2._currentValue = b2;
  }
  function bh(a2, b2, c2) {
    for (; null !== a2; ) {
      var d2 = a2.alternate;
      (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
      if (a2 === c2) break;
      a2 = a2.return;
    }
  }
  function ch(a2, b2) {
    Xg = a2;
    Zg = Yg = null;
    a2 = a2.dependencies;
    null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b2) && (dh = true), a2.firstContext = null);
  }
  function eh(a2) {
    var b2 = a2._currentValue;
    if (Zg !== a2) if (a2 = { context: a2, memoizedValue: b2, next: null }, null === Yg) {
      if (null === Xg) throw Error(p2(308));
      Yg = a2;
      Xg.dependencies = { lanes: 0, firstContext: a2 };
    } else Yg = Yg.next = a2;
    return b2;
  }
  var fh = null;
  function gh(a2) {
    null === fh ? fh = [a2] : fh.push(a2);
  }
  function hh(a2, b2, c2, d2) {
    var e2 = b2.interleaved;
    null === e2 ? (c2.next = c2, gh(b2)) : (c2.next = e2.next, e2.next = c2);
    b2.interleaved = c2;
    return ih(a2, d2);
  }
  function ih(a2, b2) {
    a2.lanes |= b2;
    var c2 = a2.alternate;
    null !== c2 && (c2.lanes |= b2);
    c2 = a2;
    for (a2 = a2.return; null !== a2; ) a2.childLanes |= b2, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
    return 3 === c2.tag ? c2.stateNode : null;
  }
  var jh = false;
  function kh(a2) {
    a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function lh(a2, b2) {
    a2 = a2.updateQueue;
    b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
  }
  function mh(a2, b2) {
    return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
  }
  function nh(a2, b2, c2) {
    var d2 = a2.updateQueue;
    if (null === d2) return null;
    d2 = d2.shared;
    if (0 !== (K2 & 2)) {
      var e2 = d2.pending;
      null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
      d2.pending = b2;
      return ih(a2, c2);
    }
    e2 = d2.interleaved;
    null === e2 ? (b2.next = b2, gh(d2)) : (b2.next = e2.next, e2.next = b2);
    d2.interleaved = b2;
    return ih(a2, c2);
  }
  function oh(a2, b2, c2) {
    b2 = b2.updateQueue;
    if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
      var d2 = b2.lanes;
      d2 &= a2.pendingLanes;
      c2 |= d2;
      b2.lanes = c2;
      Cc(a2, c2);
    }
  }
  function ph(a2, b2) {
    var c2 = a2.updateQueue, d2 = a2.alternate;
    if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
      var e2 = null, f2 = null;
      c2 = c2.firstBaseUpdate;
      if (null !== c2) {
        do {
          var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
          null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
          c2 = c2.next;
        } while (null !== c2);
        null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
      } else e2 = f2 = b2;
      c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
      a2.updateQueue = c2;
      return;
    }
    a2 = c2.lastBaseUpdate;
    null === a2 ? c2.firstBaseUpdate = b2 : a2.next = b2;
    c2.lastBaseUpdate = b2;
  }
  function qh(a2, b2, c2, d2) {
    var e2 = a2.updateQueue;
    jh = false;
    var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
    if (null !== h2) {
      e2.shared.pending = null;
      var k2 = h2, l2 = k2.next;
      k2.next = null;
      null === g2 ? f2 = l2 : g2.next = l2;
      g2 = k2;
      var m2 = a2.alternate;
      null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
    }
    if (null !== f2) {
      var q2 = e2.baseState;
      g2 = 0;
      m2 = l2 = k2 = null;
      h2 = f2;
      do {
        var r2 = h2.lane, y2 = h2.eventTime;
        if ((d2 & r2) === r2) {
          null !== m2 && (m2 = m2.next = {
            eventTime: y2,
            lane: 0,
            tag: h2.tag,
            payload: h2.payload,
            callback: h2.callback,
            next: null
          });
          a: {
            var n2 = a2, t2 = h2;
            r2 = b2;
            y2 = c2;
            switch (t2.tag) {
              case 1:
                n2 = t2.payload;
                if ("function" === typeof n2) {
                  q2 = n2.call(y2, q2, r2);
                  break a;
                }
                q2 = n2;
                break a;
              case 3:
                n2.flags = n2.flags & -65537 | 128;
              case 0:
                n2 = t2.payload;
                r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
                if (null === r2 || void 0 === r2) break a;
                q2 = A2({}, q2, r2);
                break a;
              case 2:
                jh = true;
            }
          }
          null !== h2.callback && 0 !== h2.lane && (a2.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
        } else y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
        h2 = h2.next;
        if (null === h2) if (h2 = e2.shared.pending, null === h2) break;
        else r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
      } while (1);
      null === m2 && (k2 = q2);
      e2.baseState = k2;
      e2.firstBaseUpdate = l2;
      e2.lastBaseUpdate = m2;
      b2 = e2.shared.interleaved;
      if (null !== b2) {
        e2 = b2;
        do
          g2 |= e2.lane, e2 = e2.next;
        while (e2 !== b2);
      } else null === f2 && (e2.shared.lanes = 0);
      rh |= g2;
      a2.lanes = g2;
      a2.memoizedState = q2;
    }
  }
  function sh(a2, b2, c2) {
    a2 = b2.effects;
    b2.effects = null;
    if (null !== a2) for (b2 = 0; b2 < a2.length; b2++) {
      var d2 = a2[b2], e2 = d2.callback;
      if (null !== e2) {
        d2.callback = null;
        d2 = c2;
        if ("function" !== typeof e2) throw Error(p2(191, e2));
        e2.call(d2);
      }
    }
  }
  var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
  function xh(a2) {
    if (a2 === th) throw Error(p2(174));
    return a2;
  }
  function yh(a2, b2) {
    G2(wh, b2);
    G2(vh, a2);
    G2(uh, th);
    a2 = b2.nodeType;
    switch (a2) {
      case 9:
      case 11:
        b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
        break;
      default:
        a2 = 8 === a2 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = lb(b2, a2);
    }
    E2(uh);
    G2(uh, b2);
  }
  function zh() {
    E2(uh);
    E2(vh);
    E2(wh);
  }
  function Ah(a2) {
    xh(wh.current);
    var b2 = xh(uh.current);
    var c2 = lb(b2, a2.type);
    b2 !== c2 && (G2(vh, a2), G2(uh, c2));
  }
  function Bh(a2) {
    vh.current === a2 && (E2(uh), E2(vh));
  }
  var L2 = Uf(0);
  function Ch(a2) {
    for (var b2 = a2; null !== b2; ) {
      if (13 === b2.tag) {
        var c2 = b2.memoizedState;
        if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data)) return b2;
      } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
        if (0 !== (b2.flags & 128)) return b2;
      } else if (null !== b2.child) {
        b2.child.return = b2;
        b2 = b2.child;
        continue;
      }
      if (b2 === a2) break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a2) return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
    return null;
  }
  var Dh = [];
  function Eh() {
    for (var a2 = 0; a2 < Dh.length; a2++) Dh[a2]._workInProgressVersionPrimary = null;
    Dh.length = 0;
  }
  var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M2 = null, N2 = null, O2 = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
  function P2() {
    throw Error(p2(321));
  }
  function Mh(a2, b2) {
    if (null === b2) return false;
    for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++) if (!He(a2[c2], b2[c2])) return false;
    return true;
  }
  function Nh(a2, b2, c2, d2, e2, f2) {
    Hh = f2;
    M2 = b2;
    b2.memoizedState = null;
    b2.updateQueue = null;
    b2.lanes = 0;
    Fh.current = null === a2 || null === a2.memoizedState ? Oh : Ph;
    a2 = c2(d2, e2);
    if (Jh) {
      f2 = 0;
      do {
        Jh = false;
        Kh = 0;
        if (25 <= f2) throw Error(p2(301));
        f2 += 1;
        O2 = N2 = null;
        b2.updateQueue = null;
        Fh.current = Qh;
        a2 = c2(d2, e2);
      } while (Jh);
    }
    Fh.current = Rh;
    b2 = null !== N2 && null !== N2.next;
    Hh = 0;
    O2 = N2 = M2 = null;
    Ih = false;
    if (b2) throw Error(p2(300));
    return a2;
  }
  function Sh() {
    var a2 = 0 !== Kh;
    Kh = 0;
    return a2;
  }
  function Th() {
    var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    null === O2 ? M2.memoizedState = O2 = a2 : O2 = O2.next = a2;
    return O2;
  }
  function Uh() {
    if (null === N2) {
      var a2 = M2.alternate;
      a2 = null !== a2 ? a2.memoizedState : null;
    } else a2 = N2.next;
    var b2 = null === O2 ? M2.memoizedState : O2.next;
    if (null !== b2) O2 = b2, N2 = a2;
    else {
      if (null === a2) throw Error(p2(310));
      N2 = a2;
      a2 = { memoizedState: N2.memoizedState, baseState: N2.baseState, baseQueue: N2.baseQueue, queue: N2.queue, next: null };
      null === O2 ? M2.memoizedState = O2 = a2 : O2 = O2.next = a2;
    }
    return O2;
  }
  function Vh(a2, b2) {
    return "function" === typeof b2 ? b2(a2) : b2;
  }
  function Wh(a2) {
    var b2 = Uh(), c2 = b2.queue;
    if (null === c2) throw Error(p2(311));
    c2.lastRenderedReducer = a2;
    var d2 = N2, e2 = d2.baseQueue, f2 = c2.pending;
    if (null !== f2) {
      if (null !== e2) {
        var g2 = e2.next;
        e2.next = f2.next;
        f2.next = g2;
      }
      d2.baseQueue = e2 = f2;
      c2.pending = null;
    }
    if (null !== e2) {
      f2 = e2.next;
      d2 = d2.baseState;
      var h2 = g2 = null, k2 = null, l2 = f2;
      do {
        var m2 = l2.lane;
        if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
        else {
          var q2 = {
            lane: m2,
            action: l2.action,
            hasEagerState: l2.hasEagerState,
            eagerState: l2.eagerState,
            next: null
          };
          null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
          M2.lanes |= m2;
          rh |= m2;
        }
        l2 = l2.next;
      } while (null !== l2 && l2 !== f2);
      null === k2 ? g2 = d2 : k2.next = h2;
      He(d2, b2.memoizedState) || (dh = true);
      b2.memoizedState = d2;
      b2.baseState = g2;
      b2.baseQueue = k2;
      c2.lastRenderedState = d2;
    }
    a2 = c2.interleaved;
    if (null !== a2) {
      e2 = a2;
      do
        f2 = e2.lane, M2.lanes |= f2, rh |= f2, e2 = e2.next;
      while (e2 !== a2);
    } else null === e2 && (c2.lanes = 0);
    return [b2.memoizedState, c2.dispatch];
  }
  function Xh(a2) {
    var b2 = Uh(), c2 = b2.queue;
    if (null === c2) throw Error(p2(311));
    c2.lastRenderedReducer = a2;
    var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
    if (null !== e2) {
      c2.pending = null;
      var g2 = e2 = e2.next;
      do
        f2 = a2(f2, g2.action), g2 = g2.next;
      while (g2 !== e2);
      He(f2, b2.memoizedState) || (dh = true);
      b2.memoizedState = f2;
      null === b2.baseQueue && (b2.baseState = f2);
      c2.lastRenderedState = f2;
    }
    return [f2, d2];
  }
  function Yh() {
  }
  function Zh(a2, b2) {
    var c2 = M2, d2 = Uh(), e2 = b2(), f2 = !He(d2.memoizedState, e2);
    f2 && (d2.memoizedState = e2, dh = true);
    d2 = d2.queue;
    $h(ai.bind(null, c2, d2, a2), [a2]);
    if (d2.getSnapshot !== b2 || f2 || null !== O2 && O2.memoizedState.tag & 1) {
      c2.flags |= 2048;
      bi(9, ci.bind(null, c2, d2, e2, b2), void 0, null);
      if (null === Q2) throw Error(p2(349));
      0 !== (Hh & 30) || di(c2, b2, e2);
    }
    return e2;
  }
  function di(a2, b2, c2) {
    a2.flags |= 16384;
    a2 = { getSnapshot: b2, value: c2 };
    b2 = M2.updateQueue;
    null === b2 ? (b2 = { lastEffect: null, stores: null }, M2.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, null === c2 ? b2.stores = [a2] : c2.push(a2));
  }
  function ci(a2, b2, c2, d2) {
    b2.value = c2;
    b2.getSnapshot = d2;
    ei(b2) && fi(a2);
  }
  function ai(a2, b2, c2) {
    return c2(function() {
      ei(b2) && fi(a2);
    });
  }
  function ei(a2) {
    var b2 = a2.getSnapshot;
    a2 = a2.value;
    try {
      var c2 = b2();
      return !He(a2, c2);
    } catch (d2) {
      return true;
    }
  }
  function fi(a2) {
    var b2 = ih(a2, 1);
    null !== b2 && gi(b2, a2, 1, -1);
  }
  function hi(a2) {
    var b2 = Th();
    "function" === typeof a2 && (a2 = a2());
    b2.memoizedState = b2.baseState = a2;
    a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a2 };
    b2.queue = a2;
    a2 = a2.dispatch = ii.bind(null, M2, a2);
    return [b2.memoizedState, a2];
  }
  function bi(a2, b2, c2, d2) {
    a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
    b2 = M2.updateQueue;
    null === b2 ? (b2 = { lastEffect: null, stores: null }, M2.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
    return a2;
  }
  function ji() {
    return Uh().memoizedState;
  }
  function ki(a2, b2, c2, d2) {
    var e2 = Th();
    M2.flags |= a2;
    e2.memoizedState = bi(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
  }
  function li(a2, b2, c2, d2) {
    var e2 = Uh();
    d2 = void 0 === d2 ? null : d2;
    var f2 = void 0;
    if (null !== N2) {
      var g2 = N2.memoizedState;
      f2 = g2.destroy;
      if (null !== d2 && Mh(d2, g2.deps)) {
        e2.memoizedState = bi(b2, c2, f2, d2);
        return;
      }
    }
    M2.flags |= a2;
    e2.memoizedState = bi(1 | b2, c2, f2, d2);
  }
  function mi(a2, b2) {
    return ki(8390656, 8, a2, b2);
  }
  function $h(a2, b2) {
    return li(2048, 8, a2, b2);
  }
  function ni(a2, b2) {
    return li(4, 2, a2, b2);
  }
  function oi(a2, b2) {
    return li(4, 4, a2, b2);
  }
  function pi(a2, b2) {
    if ("function" === typeof b2) return a2 = a2(), b2(a2), function() {
      b2(null);
    };
    if (null !== b2 && void 0 !== b2) return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
  }
  function qi(a2, b2, c2) {
    c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
    return li(4, 4, pi.bind(null, b2, a2), c2);
  }
  function ri() {
  }
  function si(a2, b2) {
    var c2 = Uh();
    b2 = void 0 === b2 ? null : b2;
    var d2 = c2.memoizedState;
    if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
    c2.memoizedState = [a2, b2];
    return a2;
  }
  function ti(a2, b2) {
    var c2 = Uh();
    b2 = void 0 === b2 ? null : b2;
    var d2 = c2.memoizedState;
    if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
    a2 = a2();
    c2.memoizedState = [a2, b2];
    return a2;
  }
  function ui(a2, b2, c2) {
    if (0 === (Hh & 21)) return a2.baseState && (a2.baseState = false, dh = true), a2.memoizedState = c2;
    He(c2, b2) || (c2 = yc(), M2.lanes |= c2, rh |= c2, a2.baseState = true);
    return b2;
  }
  function vi(a2, b2) {
    var c2 = C2;
    C2 = 0 !== c2 && 4 > c2 ? c2 : 4;
    a2(true);
    var d2 = Gh.transition;
    Gh.transition = {};
    try {
      a2(false), b2();
    } finally {
      C2 = c2, Gh.transition = d2;
    }
  }
  function wi() {
    return Uh().memoizedState;
  }
  function xi(a2, b2, c2) {
    var d2 = yi(a2);
    c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
    if (zi(a2)) Ai(b2, c2);
    else if (c2 = hh(a2, b2, c2, d2), null !== c2) {
      var e2 = R2();
      gi(c2, a2, d2, e2);
      Bi(c2, b2, d2);
    }
  }
  function ii(a2, b2, c2) {
    var d2 = yi(a2), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
    if (zi(a2)) Ai(b2, e2);
    else {
      var f2 = a2.alternate;
      if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
        var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
        e2.hasEagerState = true;
        e2.eagerState = h2;
        if (He(h2, g2)) {
          var k2 = b2.interleaved;
          null === k2 ? (e2.next = e2, gh(b2)) : (e2.next = k2.next, k2.next = e2);
          b2.interleaved = e2;
          return;
        }
      } catch (l2) {
      } finally {
      }
      c2 = hh(a2, b2, e2, d2);
      null !== c2 && (e2 = R2(), gi(c2, a2, d2, e2), Bi(c2, b2, d2));
    }
  }
  function zi(a2) {
    var b2 = a2.alternate;
    return a2 === M2 || null !== b2 && b2 === M2;
  }
  function Ai(a2, b2) {
    Jh = Ih = true;
    var c2 = a2.pending;
    null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
    a2.pending = b2;
  }
  function Bi(a2, b2, c2) {
    if (0 !== (c2 & 4194240)) {
      var d2 = b2.lanes;
      d2 &= a2.pendingLanes;
      c2 |= d2;
      b2.lanes = c2;
      Cc(a2, c2);
    }
  }
  var Rh = { readContext: eh, useCallback: P2, useContext: P2, useEffect: P2, useImperativeHandle: P2, useInsertionEffect: P2, useLayoutEffect: P2, useMemo: P2, useReducer: P2, useRef: P2, useState: P2, useDebugValue: P2, useDeferredValue: P2, useTransition: P2, useMutableSource: P2, useSyncExternalStore: P2, useId: P2, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a2, b2) {
    Th().memoizedState = [a2, void 0 === b2 ? null : b2];
    return a2;
  }, useContext: eh, useEffect: mi, useImperativeHandle: function(a2, b2, c2) {
    c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
    return ki(
      4194308,
      4,
      pi.bind(null, b2, a2),
      c2
    );
  }, useLayoutEffect: function(a2, b2) {
    return ki(4194308, 4, a2, b2);
  }, useInsertionEffect: function(a2, b2) {
    return ki(4, 2, a2, b2);
  }, useMemo: function(a2, b2) {
    var c2 = Th();
    b2 = void 0 === b2 ? null : b2;
    a2 = a2();
    c2.memoizedState = [a2, b2];
    return a2;
  }, useReducer: function(a2, b2, c2) {
    var d2 = Th();
    b2 = void 0 !== c2 ? c2(b2) : b2;
    d2.memoizedState = d2.baseState = b2;
    a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
    d2.queue = a2;
    a2 = a2.dispatch = xi.bind(null, M2, a2);
    return [d2.memoizedState, a2];
  }, useRef: function(a2) {
    var b2 = Th();
    a2 = { current: a2 };
    return b2.memoizedState = a2;
  }, useState: hi, useDebugValue: ri, useDeferredValue: function(a2) {
    return Th().memoizedState = a2;
  }, useTransition: function() {
    var a2 = hi(false), b2 = a2[0];
    a2 = vi.bind(null, a2[1]);
    Th().memoizedState = a2;
    return [b2, a2];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(a2, b2, c2) {
    var d2 = M2, e2 = Th();
    if (I2) {
      if (void 0 === c2) throw Error(p2(407));
      c2 = c2();
    } else {
      c2 = b2();
      if (null === Q2) throw Error(p2(349));
      0 !== (Hh & 30) || di(d2, b2, c2);
    }
    e2.memoizedState = c2;
    var f2 = { value: c2, getSnapshot: b2 };
    e2.queue = f2;
    mi(ai.bind(
      null,
      d2,
      f2,
      a2
    ), [a2]);
    d2.flags |= 2048;
    bi(9, ci.bind(null, d2, f2, c2, b2), void 0, null);
    return c2;
  }, useId: function() {
    var a2 = Th(), b2 = Q2.identifierPrefix;
    if (I2) {
      var c2 = sg;
      var d2 = rg;
      c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
      b2 = ":" + b2 + "R" + c2;
      c2 = Kh++;
      0 < c2 && (b2 += "H" + c2.toString(32));
      b2 += ":";
    } else c2 = Lh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
    return a2.memoizedState = b2;
  }, unstable_isNewReconciler: false }, Ph = {
    readContext: eh,
    useCallback: si,
    useContext: eh,
    useEffect: $h,
    useImperativeHandle: qi,
    useInsertionEffect: ni,
    useLayoutEffect: oi,
    useMemo: ti,
    useReducer: Wh,
    useRef: ji,
    useState: function() {
      return Wh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function(a2) {
      var b2 = Uh();
      return ui(b2, N2.memoizedState, a2);
    },
    useTransition: function() {
      var a2 = Wh(Vh)[0], b2 = Uh().memoizedState;
      return [a2, b2];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: false
  }, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
    return Xh(Vh);
  }, useDebugValue: ri, useDeferredValue: function(a2) {
    var b2 = Uh();
    return null === N2 ? b2.memoizedState = a2 : ui(b2, N2.memoizedState, a2);
  }, useTransition: function() {
    var a2 = Xh(Vh)[0], b2 = Uh().memoizedState;
    return [a2, b2];
  }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
  function Ci(a2, b2) {
    if (a2 && a2.defaultProps) {
      b2 = A2({}, b2);
      a2 = a2.defaultProps;
      for (var c2 in a2) void 0 === b2[c2] && (b2[c2] = a2[c2]);
      return b2;
    }
    return b2;
  }
  function Di(a2, b2, c2, d2) {
    b2 = a2.memoizedState;
    c2 = c2(d2, b2);
    c2 = null === c2 || void 0 === c2 ? b2 : A2({}, b2, c2);
    a2.memoizedState = c2;
    0 === a2.lanes && (a2.updateQueue.baseState = c2);
  }
  var Ei = { isMounted: function(a2) {
    return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
  }, enqueueSetState: function(a2, b2, c2) {
    a2 = a2._reactInternals;
    var d2 = R2(), e2 = yi(a2), f2 = mh(d2, e2);
    f2.payload = b2;
    void 0 !== c2 && null !== c2 && (f2.callback = c2);
    b2 = nh(a2, f2, e2);
    null !== b2 && (gi(b2, a2, e2, d2), oh(b2, a2, e2));
  }, enqueueReplaceState: function(a2, b2, c2) {
    a2 = a2._reactInternals;
    var d2 = R2(), e2 = yi(a2), f2 = mh(d2, e2);
    f2.tag = 1;
    f2.payload = b2;
    void 0 !== c2 && null !== c2 && (f2.callback = c2);
    b2 = nh(a2, f2, e2);
    null !== b2 && (gi(b2, a2, e2, d2), oh(b2, a2, e2));
  }, enqueueForceUpdate: function(a2, b2) {
    a2 = a2._reactInternals;
    var c2 = R2(), d2 = yi(a2), e2 = mh(c2, d2);
    e2.tag = 2;
    void 0 !== b2 && null !== b2 && (e2.callback = b2);
    b2 = nh(a2, e2, d2);
    null !== b2 && (gi(b2, a2, d2, c2), oh(b2, a2, d2));
  } };
  function Fi(a2, b2, c2, d2, e2, f2, g2) {
    a2 = a2.stateNode;
    return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie(c2, d2) || !Ie(e2, f2) : true;
  }
  function Gi(a2, b2, c2) {
    var d2 = false, e2 = Vf;
    var f2 = b2.contextType;
    "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b2) ? Xf : H2.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a2, e2) : Vf);
    b2 = new b2(c2, f2);
    a2.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
    b2.updater = Ei;
    a2.stateNode = b2;
    b2._reactInternals = a2;
    d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
    return b2;
  }
  function Hi(a2, b2, c2, d2) {
    a2 = b2.state;
    "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
    "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
    b2.state !== a2 && Ei.enqueueReplaceState(b2, b2.state, null);
  }
  function Ii(a2, b2, c2, d2) {
    var e2 = a2.stateNode;
    e2.props = c2;
    e2.state = a2.memoizedState;
    e2.refs = {};
    kh(a2);
    var f2 = b2.contextType;
    "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b2) ? Xf : H2.current, e2.context = Yf(a2, f2));
    e2.state = a2.memoizedState;
    f2 = b2.getDerivedStateFromProps;
    "function" === typeof f2 && (Di(a2, b2, f2, c2), e2.state = a2.memoizedState);
    "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Ei.enqueueReplaceState(e2, e2.state, null), qh(a2, c2, e2, d2), e2.state = a2.memoizedState);
    "function" === typeof e2.componentDidMount && (a2.flags |= 4194308);
  }
  function Ji(a2, b2) {
    try {
      var c2 = "", d2 = b2;
      do
        c2 += Pa(d2), d2 = d2.return;
      while (d2);
      var e2 = c2;
    } catch (f2) {
      e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
    }
    return { value: a2, source: b2, stack: e2, digest: null };
  }
  function Ki(a2, b2, c2) {
    return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
  }
  function Li(a2, b2) {
    try {
      console.error(b2.value);
    } catch (c2) {
      setTimeout(function() {
        throw c2;
      });
    }
  }
  var Mi = "function" === typeof WeakMap ? WeakMap : Map;
  function Ni(a2, b2, c2) {
    c2 = mh(-1, c2);
    c2.tag = 3;
    c2.payload = { element: null };
    var d2 = b2.value;
    c2.callback = function() {
      Oi || (Oi = true, Pi = d2);
      Li(a2, b2);
    };
    return c2;
  }
  function Qi(a2, b2, c2) {
    c2 = mh(-1, c2);
    c2.tag = 3;
    var d2 = a2.type.getDerivedStateFromError;
    if ("function" === typeof d2) {
      var e2 = b2.value;
      c2.payload = function() {
        return d2(e2);
      };
      c2.callback = function() {
        Li(a2, b2);
      };
    }
    var f2 = a2.stateNode;
    null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
      Li(a2, b2);
      "function" !== typeof d2 && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
      var c3 = b2.stack;
      this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
    });
    return c2;
  }
  function Si(a2, b2, c2) {
    var d2 = a2.pingCache;
    if (null === d2) {
      d2 = a2.pingCache = new Mi();
      var e2 = /* @__PURE__ */ new Set();
      d2.set(b2, e2);
    } else e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
    e2.has(c2) || (e2.add(c2), a2 = Ti.bind(null, a2, b2, c2), b2.then(a2, a2));
  }
  function Ui(a2) {
    do {
      var b2;
      if (b2 = 13 === a2.tag) b2 = a2.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
      if (b2) return a2;
      a2 = a2.return;
    } while (null !== a2);
    return null;
  }
  function Vi(a2, b2, c2, d2, e2) {
    if (0 === (a2.mode & 1)) return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c2, b2, 1))), c2.lanes |= 1), a2;
    a2.flags |= 65536;
    a2.lanes = e2;
    return a2;
  }
  var Wi = ua.ReactCurrentOwner, dh = false;
  function Xi(a2, b2, c2, d2) {
    b2.child = null === a2 ? Vg(b2, null, c2, d2) : Ug(b2, a2.child, c2, d2);
  }
  function Yi(a2, b2, c2, d2, e2) {
    c2 = c2.render;
    var f2 = b2.ref;
    ch(b2, e2);
    d2 = Nh(a2, b2, c2, d2, f2, e2);
    c2 = Sh();
    if (null !== a2 && !dh) return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, Zi(a2, b2, e2);
    I2 && c2 && vg(b2);
    b2.flags |= 1;
    Xi(a2, b2, d2, e2);
    return b2.child;
  }
  function $i(a2, b2, c2, d2, e2) {
    if (null === a2) {
      var f2 = c2.type;
      if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps) return b2.tag = 15, b2.type = f2, bj(a2, b2, f2, d2, e2);
      a2 = Rg(c2.type, null, d2, b2, b2.mode, e2);
      a2.ref = b2.ref;
      a2.return = b2;
      return b2.child = a2;
    }
    f2 = a2.child;
    if (0 === (a2.lanes & e2)) {
      var g2 = f2.memoizedProps;
      c2 = c2.compare;
      c2 = null !== c2 ? c2 : Ie;
      if (c2(g2, d2) && a2.ref === b2.ref) return Zi(a2, b2, e2);
    }
    b2.flags |= 1;
    a2 = Pg(f2, d2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  function bj(a2, b2, c2, d2, e2) {
    if (null !== a2) {
      var f2 = a2.memoizedProps;
      if (Ie(f2, d2) && a2.ref === b2.ref) if (dh = false, b2.pendingProps = d2 = f2, 0 !== (a2.lanes & e2)) 0 !== (a2.flags & 131072) && (dh = true);
      else return b2.lanes = a2.lanes, Zi(a2, b2, e2);
    }
    return cj(a2, b2, c2, d2, e2);
  }
  function dj(a2, b2, c2) {
    var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a2 ? a2.memoizedState : null;
    if ("hidden" === d2.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G2(ej, fj), fj |= c2;
    else {
      if (0 === (c2 & 1073741824)) return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G2(ej, fj), fj |= a2, null;
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d2 = null !== f2 ? f2.baseLanes : c2;
      G2(ej, fj);
      fj |= d2;
    }
    else null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G2(ej, fj), fj |= d2;
    Xi(a2, b2, e2, c2);
    return b2.child;
  }
  function gj(a2, b2) {
    var c2 = b2.ref;
    if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2) b2.flags |= 512, b2.flags |= 2097152;
  }
  function cj(a2, b2, c2, d2, e2) {
    var f2 = Zf(c2) ? Xf : H2.current;
    f2 = Yf(b2, f2);
    ch(b2, e2);
    c2 = Nh(a2, b2, c2, d2, f2, e2);
    d2 = Sh();
    if (null !== a2 && !dh) return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, Zi(a2, b2, e2);
    I2 && d2 && vg(b2);
    b2.flags |= 1;
    Xi(a2, b2, c2, e2);
    return b2.child;
  }
  function hj(a2, b2, c2, d2, e2) {
    if (Zf(c2)) {
      var f2 = true;
      cg(b2);
    } else f2 = false;
    ch(b2, e2);
    if (null === b2.stateNode) ij(a2, b2), Gi(b2, c2, d2), Ii(b2, c2, d2, e2), d2 = true;
    else if (null === a2) {
      var g2 = b2.stateNode, h2 = b2.memoizedProps;
      g2.props = h2;
      var k2 = g2.context, l2 = c2.contextType;
      "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c2) ? Xf : H2.current, l2 = Yf(b2, l2));
      var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
      q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && Hi(b2, g2, d2, l2);
      jh = false;
      var r2 = b2.memoizedState;
      g2.state = r2;
      qh(b2, d2, g2, e2);
      k2 = b2.memoizedState;
      h2 !== d2 || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = jh || Fi(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
    } else {
      g2 = b2.stateNode;
      lh(a2, b2);
      h2 = b2.memoizedProps;
      l2 = b2.type === b2.elementType ? h2 : Ci(b2.type, h2);
      g2.props = l2;
      q2 = b2.pendingProps;
      r2 = g2.context;
      k2 = c2.contextType;
      "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c2) ? Xf : H2.current, k2 = Yf(b2, k2));
      var y2 = c2.getDerivedStateFromProps;
      (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && Hi(b2, g2, d2, k2);
      jh = false;
      r2 = b2.memoizedState;
      g2.state = r2;
      qh(b2, d2, g2, e2);
      var n2 = b2.memoizedState;
      h2 !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = jh || Fi(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), d2 = false);
    }
    return jj(a2, b2, c2, d2, f2, e2);
  }
  function jj(a2, b2, c2, d2, e2, f2) {
    gj(a2, b2);
    var g2 = 0 !== (b2.flags & 128);
    if (!d2 && !g2) return e2 && dg(b2, c2, false), Zi(a2, b2, f2);
    d2 = b2.stateNode;
    Wi.current = b2;
    var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
    b2.flags |= 1;
    null !== a2 && g2 ? (b2.child = Ug(b2, a2.child, null, f2), b2.child = Ug(b2, null, h2, f2)) : Xi(a2, b2, h2, f2);
    b2.memoizedState = d2.state;
    e2 && dg(b2, c2, true);
    return b2.child;
  }
  function kj(a2) {
    var b2 = a2.stateNode;
    b2.pendingContext ? ag(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a2, b2.context, false);
    yh(a2, b2.containerInfo);
  }
  function lj(a2, b2, c2, d2, e2) {
    Ig();
    Jg(e2);
    b2.flags |= 256;
    Xi(a2, b2, c2, d2);
    return b2.child;
  }
  var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
  function nj(a2) {
    return { baseLanes: a2, cachePool: null, transitions: null };
  }
  function oj(a2, b2, c2) {
    var d2 = b2.pendingProps, e2 = L2.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
    (h2 = g2) || (h2 = null !== a2 && null === a2.memoizedState ? false : 0 !== (e2 & 2));
    if (h2) f2 = true, b2.flags &= -129;
    else if (null === a2 || null !== a2.memoizedState) e2 |= 1;
    G2(L2, e2 & 1);
    if (null === a2) {
      Eg(b2);
      a2 = b2.memoizedState;
      if (null !== a2 && (a2 = a2.dehydrated, null !== a2)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a2.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
      g2 = d2.children;
      a2 = d2.fallback;
      return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = pj(g2, d2, 0, null), a2 = Tg(a2, d2, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = nj(c2), b2.memoizedState = mj, a2) : qj(b2, g2);
    }
    e2 = a2.memoizedState;
    if (null !== e2 && (h2 = e2.dehydrated, null !== h2)) return rj(a2, b2, g2, d2, h2, e2, c2);
    if (f2) {
      f2 = d2.fallback;
      g2 = b2.mode;
      e2 = a2.child;
      h2 = e2.sibling;
      var k2 = { mode: "hidden", children: d2.children };
      0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = Pg(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
      null !== h2 ? f2 = Pg(h2, f2) : (f2 = Tg(f2, g2, c2, null), f2.flags |= 2);
      f2.return = b2;
      d2.return = b2;
      d2.sibling = f2;
      b2.child = d2;
      d2 = f2;
      f2 = b2.child;
      g2 = a2.child.memoizedState;
      g2 = null === g2 ? nj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
      f2.memoizedState = g2;
      f2.childLanes = a2.childLanes & ~c2;
      b2.memoizedState = mj;
      return d2;
    }
    f2 = a2.child;
    a2 = f2.sibling;
    d2 = Pg(f2, { mode: "visible", children: d2.children });
    0 === (b2.mode & 1) && (d2.lanes = c2);
    d2.return = b2;
    d2.sibling = null;
    null !== a2 && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a2], b2.flags |= 16) : c2.push(a2));
    b2.child = d2;
    b2.memoizedState = null;
    return d2;
  }
  function qj(a2, b2) {
    b2 = pj({ mode: "visible", children: b2 }, a2.mode, 0, null);
    b2.return = a2;
    return a2.child = b2;
  }
  function sj(a2, b2, c2, d2) {
    null !== d2 && Jg(d2);
    Ug(b2, a2.child, null, c2);
    a2 = qj(b2, b2.pendingProps.children);
    a2.flags |= 2;
    b2.memoizedState = null;
    return a2;
  }
  function rj(a2, b2, c2, d2, e2, f2, g2) {
    if (c2) {
      if (b2.flags & 256) return b2.flags &= -257, d2 = Ki(Error(p2(422))), sj(a2, b2, g2, d2);
      if (null !== b2.memoizedState) return b2.child = a2.child, b2.flags |= 128, null;
      f2 = d2.fallback;
      e2 = b2.mode;
      d2 = pj({ mode: "visible", children: d2.children }, e2, 0, null);
      f2 = Tg(f2, e2, g2, null);
      f2.flags |= 2;
      d2.return = b2;
      f2.return = b2;
      d2.sibling = f2;
      b2.child = d2;
      0 !== (b2.mode & 1) && Ug(b2, a2.child, null, g2);
      b2.child.memoizedState = nj(g2);
      b2.memoizedState = mj;
      return f2;
    }
    if (0 === (b2.mode & 1)) return sj(a2, b2, g2, null);
    if ("$!" === e2.data) {
      d2 = e2.nextSibling && e2.nextSibling.dataset;
      if (d2) var h2 = d2.dgst;
      d2 = h2;
      f2 = Error(p2(419));
      d2 = Ki(f2, d2, void 0);
      return sj(a2, b2, g2, d2);
    }
    h2 = 0 !== (g2 & a2.childLanes);
    if (dh || h2) {
      d2 = Q2;
      if (null !== d2) {
        switch (g2 & -g2) {
          case 4:
            e2 = 2;
            break;
          case 16:
            e2 = 8;
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
            e2 = 32;
            break;
          case 536870912:
            e2 = 268435456;
            break;
          default:
            e2 = 0;
        }
        e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
        0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, ih(a2, e2), gi(d2, a2, e2, -1));
      }
      tj();
      d2 = Ki(Error(p2(421)));
      return sj(a2, b2, g2, d2);
    }
    if ("$?" === e2.data) return b2.flags |= 128, b2.child = a2.child, b2 = uj.bind(null, a2), e2._reactRetry = b2, null;
    a2 = f2.treeContext;
    yg = Lf(e2.nextSibling);
    xg = b2;
    I2 = true;
    zg = null;
    null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b2);
    b2 = qj(b2, d2.children);
    b2.flags |= 4096;
    return b2;
  }
  function vj(a2, b2, c2) {
    a2.lanes |= b2;
    var d2 = a2.alternate;
    null !== d2 && (d2.lanes |= b2);
    bh(a2.return, b2, c2);
  }
  function wj(a2, b2, c2, d2, e2) {
    var f2 = a2.memoizedState;
    null === f2 ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
  }
  function xj(a2, b2, c2) {
    var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
    Xi(a2, b2, d2.children, c2);
    d2 = L2.current;
    if (0 !== (d2 & 2)) d2 = d2 & 1 | 2, b2.flags |= 128;
    else {
      if (null !== a2 && 0 !== (a2.flags & 128)) a: for (a2 = b2.child; null !== a2; ) {
        if (13 === a2.tag) null !== a2.memoizedState && vj(a2, c2, b2);
        else if (19 === a2.tag) vj(a2, c2, b2);
        else if (null !== a2.child) {
          a2.child.return = a2;
          a2 = a2.child;
          continue;
        }
        if (a2 === b2) break a;
        for (; null === a2.sibling; ) {
          if (null === a2.return || a2.return === b2) break a;
          a2 = a2.return;
        }
        a2.sibling.return = a2.return;
        a2 = a2.sibling;
      }
      d2 &= 1;
    }
    G2(L2, d2);
    if (0 === (b2.mode & 1)) b2.memoizedState = null;
    else switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; null !== c2; ) a2 = c2.alternate, null !== a2 && null === Ch(a2) && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        wj(b2, false, e2, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; null !== e2; ) {
          a2 = e2.alternate;
          if (null !== a2 && null === Ch(a2)) {
            b2.child = e2;
            break;
          }
          a2 = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a2;
        }
        wj(b2, true, c2, null, f2);
        break;
      case "together":
        wj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
    return b2.child;
  }
  function ij(a2, b2) {
    0 === (b2.mode & 1) && null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
  }
  function Zi(a2, b2, c2) {
    null !== a2 && (b2.dependencies = a2.dependencies);
    rh |= b2.lanes;
    if (0 === (c2 & b2.childLanes)) return null;
    if (null !== a2 && b2.child !== a2.child) throw Error(p2(153));
    if (null !== b2.child) {
      a2 = b2.child;
      c2 = Pg(a2, a2.pendingProps);
      b2.child = c2;
      for (c2.return = b2; null !== a2.sibling; ) a2 = a2.sibling, c2 = c2.sibling = Pg(a2, a2.pendingProps), c2.return = b2;
      c2.sibling = null;
    }
    return b2.child;
  }
  function yj(a2, b2, c2) {
    switch (b2.tag) {
      case 3:
        kj(b2);
        Ig();
        break;
      case 5:
        Ah(b2);
        break;
      case 1:
        Zf(b2.type) && cg(b2);
        break;
      case 4:
        yh(b2, b2.stateNode.containerInfo);
        break;
      case 10:
        var d2 = b2.type._context, e2 = b2.memoizedProps.value;
        G2(Wg, d2._currentValue);
        d2._currentValue = e2;
        break;
      case 13:
        d2 = b2.memoizedState;
        if (null !== d2) {
          if (null !== d2.dehydrated) return G2(L2, L2.current & 1), b2.flags |= 128, null;
          if (0 !== (c2 & b2.child.childLanes)) return oj(a2, b2, c2);
          G2(L2, L2.current & 1);
          a2 = Zi(a2, b2, c2);
          return null !== a2 ? a2.sibling : null;
        }
        G2(L2, L2.current & 1);
        break;
      case 19:
        d2 = 0 !== (c2 & b2.childLanes);
        if (0 !== (a2.flags & 128)) {
          if (d2) return xj(a2, b2, c2);
          b2.flags |= 128;
        }
        e2 = b2.memoizedState;
        null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
        G2(L2, L2.current);
        if (d2) break;
        else return null;
      case 22:
      case 23:
        return b2.lanes = 0, dj(a2, b2, c2);
    }
    return Zi(a2, b2, c2);
  }
  var zj, Aj, Bj, Cj;
  zj = function(a2, b2) {
    for (var c2 = b2.child; null !== c2; ) {
      if (5 === c2.tag || 6 === c2.tag) a2.appendChild(c2.stateNode);
      else if (4 !== c2.tag && null !== c2.child) {
        c2.child.return = c2;
        c2 = c2.child;
        continue;
      }
      if (c2 === b2) break;
      for (; null === c2.sibling; ) {
        if (null === c2.return || c2.return === b2) return;
        c2 = c2.return;
      }
      c2.sibling.return = c2.return;
      c2 = c2.sibling;
    }
  };
  Aj = function() {
  };
  Bj = function(a2, b2, c2, d2) {
    var e2 = a2.memoizedProps;
    if (e2 !== d2) {
      a2 = b2.stateNode;
      xh(uh.current);
      var f2 = null;
      switch (c2) {
        case "input":
          e2 = Ya(a2, e2);
          d2 = Ya(a2, d2);
          f2 = [];
          break;
        case "select":
          e2 = A2({}, e2, { value: void 0 });
          d2 = A2({}, d2, { value: void 0 });
          f2 = [];
          break;
        case "textarea":
          e2 = gb(a2, e2);
          d2 = gb(a2, d2);
          f2 = [];
          break;
        default:
          "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a2.onclick = Bf);
      }
      ub(c2, d2);
      var g2;
      c2 = null;
      for (l2 in e2) if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
        var h2 = e2[l2];
        for (g2 in h2) h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
      } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
      for (l2 in d2) {
        var k2 = d2[l2];
        h2 = null != e2 ? e2[l2] : void 0;
        if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2)) if ("style" === l2) if (h2) {
          for (g2 in h2) !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
          for (g2 in k2) k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
        } else c2 || (f2 || (f2 = []), f2.push(
          l2,
          c2
        )), c2 = k2;
        else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D2("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
      }
      c2 && (f2 = f2 || []).push("style", c2);
      var l2 = f2;
      if (b2.updateQueue = l2) b2.flags |= 4;
    }
  };
  Cj = function(a2, b2, c2, d2) {
    c2 !== d2 && (b2.flags |= 4);
  };
  function Dj(a2, b2) {
    if (!I2) switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c2 = null; null !== b2; ) null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
        null === c2 ? a2.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a2.tail;
        for (var d2 = null; null !== c2; ) null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
        null === d2 ? b2 || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
    }
  }
  function S2(a2) {
    var b2 = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
    if (b2) for (var e2 = a2.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
    else for (e2 = a2.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
    a2.subtreeFlags |= d2;
    a2.childLanes = c2;
    return b2;
  }
  function Ej(a2, b2, c2) {
    var d2 = b2.pendingProps;
    wg(b2);
    switch (b2.tag) {
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
        return S2(b2), null;
      case 1:
        return Zf(b2.type) && $f(), S2(b2), null;
      case 3:
        d2 = b2.stateNode;
        zh();
        E2(Wf);
        E2(H2);
        Eh();
        d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
        if (null === a2 || null === a2.child) Gg(b2) ? b2.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
        Aj(a2, b2);
        S2(b2);
        return null;
      case 5:
        Bh(b2);
        var e2 = xh(wh.current);
        c2 = b2.type;
        if (null !== a2 && null != b2.stateNode) Bj(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
        else {
          if (!d2) {
            if (null === b2.stateNode) throw Error(p2(166));
            S2(b2);
            return null;
          }
          a2 = xh(uh.current);
          if (Gg(b2)) {
            d2 = b2.stateNode;
            c2 = b2.type;
            var f2 = b2.memoizedProps;
            d2[Of] = b2;
            d2[Pf] = f2;
            a2 = 0 !== (b2.mode & 1);
            switch (c2) {
              case "dialog":
                D2("cancel", d2);
                D2("close", d2);
                break;
              case "iframe":
              case "object":
              case "embed":
                D2("load", d2);
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++) D2(lf[e2], d2);
                break;
              case "source":
                D2("error", d2);
                break;
              case "img":
              case "image":
              case "link":
                D2(
                  "error",
                  d2
                );
                D2("load", d2);
                break;
              case "details":
                D2("toggle", d2);
                break;
              case "input":
                Za(d2, f2);
                D2("invalid", d2);
                break;
              case "select":
                d2._wrapperState = { wasMultiple: !!f2.multiple };
                D2("invalid", d2);
                break;
              case "textarea":
                hb(d2, f2), D2("invalid", d2);
            }
            ub(c2, f2);
            e2 = null;
            for (var g2 in f2) if (f2.hasOwnProperty(g2)) {
              var h2 = f2[g2];
              "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a2), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                d2.textContent,
                h2,
                a2
              ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D2("scroll", d2);
            }
            switch (c2) {
              case "input":
                Va(d2);
                db(d2, f2, true);
                break;
              case "textarea":
                Va(d2);
                jb(d2);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" === typeof f2.onClick && (d2.onclick = Bf);
            }
            d2 = e2;
            b2.updateQueue = d2;
            null !== d2 && (b2.flags |= 4);
          } else {
            g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
            "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
            "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d2.is ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), "select" === c2 && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
            a2[Of] = b2;
            a2[Pf] = d2;
            zj(a2, b2, false, false);
            b2.stateNode = a2;
            a: {
              g2 = vb(c2, d2);
              switch (c2) {
                case "dialog":
                  D2("cancel", a2);
                  D2("close", a2);
                  e2 = d2;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D2("load", a2);
                  e2 = d2;
                  break;
                case "video":
                case "audio":
                  for (e2 = 0; e2 < lf.length; e2++) D2(lf[e2], a2);
                  e2 = d2;
                  break;
                case "source":
                  D2("error", a2);
                  e2 = d2;
                  break;
                case "img":
                case "image":
                case "link":
                  D2(
                    "error",
                    a2
                  );
                  D2("load", a2);
                  e2 = d2;
                  break;
                case "details":
                  D2("toggle", a2);
                  e2 = d2;
                  break;
                case "input":
                  Za(a2, d2);
                  e2 = Ya(a2, d2);
                  D2("invalid", a2);
                  break;
                case "option":
                  e2 = d2;
                  break;
                case "select":
                  a2._wrapperState = { wasMultiple: !!d2.multiple };
                  e2 = A2({}, d2, { value: void 0 });
                  D2("invalid", a2);
                  break;
                case "textarea":
                  hb(a2, d2);
                  e2 = gb(a2, d2);
                  D2("invalid", a2);
                  break;
                default:
                  e2 = d2;
              }
              ub(c2, e2);
              h2 = e2;
              for (f2 in h2) if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D2("scroll", a2) : null != k2 && ta(a2, f2, k2, g2));
              }
              switch (c2) {
                case "input":
                  Va(a2);
                  db(a2, d2, false);
                  break;
                case "textarea":
                  Va(a2);
                  jb(a2);
                  break;
                case "option":
                  null != d2.value && a2.setAttribute("value", "" + Sa(d2.value));
                  break;
                case "select":
                  a2.multiple = !!d2.multiple;
                  f2 = d2.value;
                  null != f2 ? fb(a2, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                    a2,
                    !!d2.multiple,
                    d2.defaultValue,
                    true
                  );
                  break;
                default:
                  "function" === typeof e2.onClick && (a2.onclick = Bf);
              }
              switch (c2) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d2 = !!d2.autoFocus;
                  break a;
                case "img":
                  d2 = true;
                  break a;
                default:
                  d2 = false;
              }
            }
            d2 && (b2.flags |= 4);
          }
          null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
        }
        S2(b2);
        return null;
      case 6:
        if (a2 && null != b2.stateNode) Cj(a2, b2, a2.memoizedProps, d2);
        else {
          if ("string" !== typeof d2 && null === b2.stateNode) throw Error(p2(166));
          c2 = xh(wh.current);
          xh(uh.current);
          if (Gg(b2)) {
            d2 = b2.stateNode;
            c2 = b2.memoizedProps;
            d2[Of] = b2;
            if (f2 = d2.nodeValue !== c2) {
              if (a2 = xg, null !== a2) switch (a2.tag) {
                case 3:
                  Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                  break;
                case 5:
                  true !== a2.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
              }
            }
            f2 && (b2.flags |= 4);
          } else d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
        }
        S2(b2);
        return null;
      case 13:
        E2(L2);
        d2 = b2.memoizedState;
        if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
          if (I2 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
          else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
            if (null === a2) {
              if (!f2) throw Error(p2(318));
              f2 = b2.memoizedState;
              f2 = null !== f2 ? f2.dehydrated : null;
              if (!f2) throw Error(p2(317));
              f2[Of] = b2;
            } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
            S2(b2);
            f2 = false;
          } else null !== zg && (Fj(zg), zg = null), f2 = true;
          if (!f2) return b2.flags & 65536 ? b2 : null;
        }
        if (0 !== (b2.flags & 128)) return b2.lanes = c2, b2;
        d2 = null !== d2;
        d2 !== (null !== a2 && null !== a2.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a2 || 0 !== (L2.current & 1) ? 0 === T2 && (T2 = 3) : tj()));
        null !== b2.updateQueue && (b2.flags |= 4);
        S2(b2);
        return null;
      case 4:
        return zh(), Aj(a2, b2), null === a2 && sf(b2.stateNode.containerInfo), S2(b2), null;
      case 10:
        return ah(b2.type._context), S2(b2), null;
      case 17:
        return Zf(b2.type) && $f(), S2(b2), null;
      case 19:
        E2(L2);
        f2 = b2.memoizedState;
        if (null === f2) return S2(b2), null;
        d2 = 0 !== (b2.flags & 128);
        g2 = f2.rendering;
        if (null === g2) if (d2) Dj(f2, false);
        else {
          if (0 !== T2 || null !== a2 && 0 !== (a2.flags & 128)) for (a2 = b2.child; null !== a2; ) {
            g2 = Ch(a2);
            if (null !== g2) {
              b2.flags |= 128;
              Dj(f2, false);
              d2 = g2.updateQueue;
              null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
              b2.subtreeFlags = 0;
              d2 = c2;
              for (c2 = b2.child; null !== c2; ) f2 = c2, a2 = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
              G2(L2, L2.current & 1 | 2);
              return b2.child;
            }
            a2 = a2.sibling;
          }
          null !== f2.tail && B2() > Gj && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
        }
        else {
          if (!d2) if (a2 = Ch(g2), null !== a2) {
            if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I2) return S2(b2), null;
          } else 2 * B2() - f2.renderingStartTime > Gj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
          f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
        }
        if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B2(), b2.sibling = null, c2 = L2.current, G2(L2, d2 ? c2 & 1 | 2 : c2 & 1), b2;
        S2(b2);
        return null;
      case 22:
      case 23:
        return Hj(), d2 = null !== b2.memoizedState, null !== a2 && null !== a2.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S2(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S2(b2), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p2(156, b2.tag));
  }
  function Ij(a2, b2) {
    wg(b2);
    switch (b2.tag) {
      case 1:
        return Zf(b2.type) && $f(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 3:
        return zh(), E2(Wf), E2(H2), Eh(), a2 = b2.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 5:
        return Bh(b2), null;
      case 13:
        E2(L2);
        a2 = b2.memoizedState;
        if (null !== a2 && null !== a2.dehydrated) {
          if (null === b2.alternate) throw Error(p2(340));
          Ig();
        }
        a2 = b2.flags;
        return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 19:
        return E2(L2), null;
      case 4:
        return zh(), null;
      case 10:
        return ah(b2.type._context), null;
      case 22:
      case 23:
        return Hj(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Jj = false, U2 = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V2 = null;
  function Lj(a2, b2) {
    var c2 = a2.ref;
    if (null !== c2) if ("function" === typeof c2) try {
      c2(null);
    } catch (d2) {
      W2(a2, b2, d2);
    }
    else c2.current = null;
  }
  function Mj(a2, b2, c2) {
    try {
      c2();
    } catch (d2) {
      W2(a2, b2, d2);
    }
  }
  var Nj = false;
  function Oj(a2, b2) {
    Cf = dd;
    a2 = Me2();
    if (Ne(a2)) {
      if ("selectionStart" in a2) var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
      else a: {
        c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
        var d2 = c2.getSelection && c2.getSelection();
        if (d2 && 0 !== d2.rangeCount) {
          c2 = d2.anchorNode;
          var e2 = d2.anchorOffset, f2 = d2.focusNode;
          d2 = d2.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (F2) {
            c2 = null;
            break a;
          }
          var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a2, r2 = null;
          b: for (; ; ) {
            for (var y2; ; ) {
              q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
              q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
              3 === q2.nodeType && (g2 += q2.nodeValue.length);
              if (null === (y2 = q2.firstChild)) break;
              r2 = q2;
              q2 = y2;
            }
            for (; ; ) {
              if (q2 === a2) break b;
              r2 === c2 && ++l2 === e2 && (h2 = g2);
              r2 === f2 && ++m2 === d2 && (k2 = g2);
              if (null !== (y2 = q2.nextSibling)) break;
              q2 = r2;
              r2 = q2.parentNode;
            }
            q2 = y2;
          }
          c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
        } else c2 = null;
      }
      c2 = c2 || { start: 0, end: 0 };
    } else c2 = null;
    Df = { focusedElem: a2, selectionRange: c2 };
    dd = false;
    for (V2 = b2; null !== V2; ) if (b2 = V2, a2 = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a2) a2.return = b2, V2 = a2;
    else for (; null !== V2; ) {
      b2 = V2;
      try {
        var n2 = b2.alternate;
        if (0 !== (b2.flags & 1024)) switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (null !== n2) {
              var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Ci(b2.type, t2), J2);
              x2.__reactInternalSnapshotBeforeUpdate = w2;
            }
            break;
          case 3:
            var u2 = b2.stateNode.containerInfo;
            1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(p2(163));
        }
      } catch (F2) {
        W2(b2, b2.return, F2);
      }
      a2 = b2.sibling;
      if (null !== a2) {
        a2.return = b2.return;
        V2 = a2;
        break;
      }
      V2 = b2.return;
    }
    n2 = Nj;
    Nj = false;
    return n2;
  }
  function Pj(a2, b2, c2) {
    var d2 = b2.updateQueue;
    d2 = null !== d2 ? d2.lastEffect : null;
    if (null !== d2) {
      var e2 = d2 = d2.next;
      do {
        if ((e2.tag & a2) === a2) {
          var f2 = e2.destroy;
          e2.destroy = void 0;
          void 0 !== f2 && Mj(b2, c2, f2);
        }
        e2 = e2.next;
      } while (e2 !== d2);
    }
  }
  function Qj(a2, b2) {
    b2 = b2.updateQueue;
    b2 = null !== b2 ? b2.lastEffect : null;
    if (null !== b2) {
      var c2 = b2 = b2.next;
      do {
        if ((c2.tag & a2) === a2) {
          var d2 = c2.create;
          c2.destroy = d2();
        }
        c2 = c2.next;
      } while (c2 !== b2);
    }
  }
  function Rj(a2) {
    var b2 = a2.ref;
    if (null !== b2) {
      var c2 = a2.stateNode;
      switch (a2.tag) {
        case 5:
          a2 = c2;
          break;
        default:
          a2 = c2;
      }
      "function" === typeof b2 ? b2(a2) : b2.current = a2;
    }
  }
  function Sj(a2) {
    var b2 = a2.alternate;
    null !== b2 && (a2.alternate = null, Sj(b2));
    a2.child = null;
    a2.deletions = null;
    a2.sibling = null;
    5 === a2.tag && (b2 = a2.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
    a2.stateNode = null;
    a2.return = null;
    a2.dependencies = null;
    a2.memoizedProps = null;
    a2.memoizedState = null;
    a2.pendingProps = null;
    a2.stateNode = null;
    a2.updateQueue = null;
  }
  function Tj(a2) {
    return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
  }
  function Uj(a2) {
    a: for (; ; ) {
      for (; null === a2.sibling; ) {
        if (null === a2.return || Tj(a2.return)) return null;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
        if (a2.flags & 2) continue a;
        if (null === a2.child || 4 === a2.tag) continue a;
        else a2.child.return = a2, a2 = a2.child;
      }
      if (!(a2.flags & 2)) return a2.stateNode;
    }
  }
  function Vj(a2, b2, c2) {
    var d2 = a2.tag;
    if (5 === d2 || 6 === d2) a2 = a2.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
    else if (4 !== d2 && (a2 = a2.child, null !== a2)) for (Vj(a2, b2, c2), a2 = a2.sibling; null !== a2; ) Vj(a2, b2, c2), a2 = a2.sibling;
  }
  function Wj(a2, b2, c2) {
    var d2 = a2.tag;
    if (5 === d2 || 6 === d2) a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
    else if (4 !== d2 && (a2 = a2.child, null !== a2)) for (Wj(a2, b2, c2), a2 = a2.sibling; null !== a2; ) Wj(a2, b2, c2), a2 = a2.sibling;
  }
  var X2 = null, Xj = false;
  function Yj(a2, b2, c2) {
    for (c2 = c2.child; null !== c2; ) Zj(a2, b2, c2), c2 = c2.sibling;
  }
  function Zj(a2, b2, c2) {
    if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
      lc.onCommitFiberUnmount(kc, c2);
    } catch (h2) {
    }
    switch (c2.tag) {
      case 5:
        U2 || Lj(c2, b2);
      case 6:
        var d2 = X2, e2 = Xj;
        X2 = null;
        Yj(a2, b2, c2);
        X2 = d2;
        Xj = e2;
        null !== X2 && (Xj ? (a2 = X2, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X2.removeChild(c2.stateNode));
        break;
      case 18:
        null !== X2 && (Xj ? (a2 = X2, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X2, c2.stateNode));
        break;
      case 4:
        d2 = X2;
        e2 = Xj;
        X2 = c2.stateNode.containerInfo;
        Xj = true;
        Yj(a2, b2, c2);
        X2 = d2;
        Xj = e2;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!U2 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
          e2 = d2 = d2.next;
          do {
            var f2 = e2, g2 = f2.destroy;
            f2 = f2.tag;
            void 0 !== g2 && (0 !== (f2 & 2) ? Mj(c2, b2, g2) : 0 !== (f2 & 4) && Mj(c2, b2, g2));
            e2 = e2.next;
          } while (e2 !== d2);
        }
        Yj(a2, b2, c2);
        break;
      case 1:
        if (!U2 && (Lj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount)) try {
          d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
        } catch (h2) {
          W2(c2, b2, h2);
        }
        Yj(a2, b2, c2);
        break;
      case 21:
        Yj(a2, b2, c2);
        break;
      case 22:
        c2.mode & 1 ? (U2 = (d2 = U2) || null !== c2.memoizedState, Yj(a2, b2, c2), U2 = d2) : Yj(a2, b2, c2);
        break;
      default:
        Yj(a2, b2, c2);
    }
  }
  function ak(a2) {
    var b2 = a2.updateQueue;
    if (null !== b2) {
      a2.updateQueue = null;
      var c2 = a2.stateNode;
      null === c2 && (c2 = a2.stateNode = new Kj());
      b2.forEach(function(b3) {
        var d2 = bk.bind(null, a2, b3);
        c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
      });
    }
  }
  function ck(a2, b2) {
    var c2 = b2.deletions;
    if (null !== c2) for (var d2 = 0; d2 < c2.length; d2++) {
      var e2 = c2[d2];
      try {
        var f2 = a2, g2 = b2, h2 = g2;
        a: for (; null !== h2; ) {
          switch (h2.tag) {
            case 5:
              X2 = h2.stateNode;
              Xj = false;
              break a;
            case 3:
              X2 = h2.stateNode.containerInfo;
              Xj = true;
              break a;
            case 4:
              X2 = h2.stateNode.containerInfo;
              Xj = true;
              break a;
          }
          h2 = h2.return;
        }
        if (null === X2) throw Error(p2(160));
        Zj(f2, g2, e2);
        X2 = null;
        Xj = false;
        var k2 = e2.alternate;
        null !== k2 && (k2.return = null);
        e2.return = null;
      } catch (l2) {
        W2(e2, b2, l2);
      }
    }
    if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a2), b2 = b2.sibling;
  }
  function dk(a2, b2) {
    var c2 = a2.alternate, d2 = a2.flags;
    switch (a2.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ck(b2, a2);
        ek(a2);
        if (d2 & 4) {
          try {
            Pj(3, a2, a2.return), Qj(3, a2);
          } catch (t2) {
            W2(a2, a2.return, t2);
          }
          try {
            Pj(5, a2, a2.return);
          } catch (t2) {
            W2(a2, a2.return, t2);
          }
        }
        break;
      case 1:
        ck(b2, a2);
        ek(a2);
        d2 & 512 && null !== c2 && Lj(c2, c2.return);
        break;
      case 5:
        ck(b2, a2);
        ek(a2);
        d2 & 512 && null !== c2 && Lj(c2, c2.return);
        if (a2.flags & 32) {
          var e2 = a2.stateNode;
          try {
            ob(e2, "");
          } catch (t2) {
            W2(a2, a2.return, t2);
          }
        }
        if (d2 & 4 && (e2 = a2.stateNode, null != e2)) {
          var f2 = a2.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
          a2.updateQueue = null;
          if (null !== k2) try {
            "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
            vb(h2, g2);
            var l2 = vb(h2, f2);
            for (g2 = 0; g2 < k2.length; g2 += 2) {
              var m2 = k2[g2], q2 = k2[g2 + 1];
              "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
            }
            switch (h2) {
              case "input":
                bb(e2, f2);
                break;
              case "textarea":
                ib(e2, f2);
                break;
              case "select":
                var r2 = e2._wrapperState.wasMultiple;
                e2._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e2,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e2[Pf] = f2;
          } catch (t2) {
            W2(a2, a2.return, t2);
          }
        }
        break;
      case 6:
        ck(b2, a2);
        ek(a2);
        if (d2 & 4) {
          if (null === a2.stateNode) throw Error(p2(162));
          e2 = a2.stateNode;
          f2 = a2.memoizedProps;
          try {
            e2.nodeValue = f2;
          } catch (t2) {
            W2(a2, a2.return, t2);
          }
        }
        break;
      case 3:
        ck(b2, a2);
        ek(a2);
        if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated) try {
          bd(b2.containerInfo);
        } catch (t2) {
          W2(a2, a2.return, t2);
        }
        break;
      case 4:
        ck(b2, a2);
        ek(a2);
        break;
      case 13:
        ck(b2, a2);
        ek(a2);
        e2 = a2.child;
        e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B2()));
        d2 & 4 && ak(a2);
        break;
      case 22:
        m2 = null !== c2 && null !== c2.memoizedState;
        a2.mode & 1 ? (U2 = (l2 = U2) || m2, ck(b2, a2), U2 = l2) : ck(b2, a2);
        ek(a2);
        if (d2 & 8192) {
          l2 = null !== a2.memoizedState;
          if ((a2.stateNode.isHidden = l2) && !m2 && 0 !== (a2.mode & 1)) for (V2 = a2, m2 = a2.child; null !== m2; ) {
            for (q2 = V2 = m2; null !== V2; ) {
              r2 = V2;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pj(4, r2, r2.return);
                  break;
                case 1:
                  Lj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d2 = r2;
                    c2 = r2.return;
                    try {
                      b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W2(d2, c2, t2);
                    }
                  }
                  break;
                case 5:
                  Lj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    gk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V2 = y2) : gk(q2);
            }
            m2 = m2.sibling;
          }
          a: for (m2 = null, q2 = a2; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                } catch (t2) {
                  W2(a2, a2.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2) try {
                q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
              } catch (t2) {
                W2(a2, a2.return, t2);
              }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a2) break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a2) break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
        }
        break;
      case 19:
        ck(b2, a2);
        ek(a2);
        d2 & 4 && ak(a2);
        break;
      case 21:
        break;
      default:
        ck(
          b2,
          a2
        ), ek(a2);
    }
  }
  function ek(a2) {
    var b2 = a2.flags;
    if (b2 & 2) {
      try {
        a: {
          for (var c2 = a2.return; null !== c2; ) {
            if (Tj(c2)) {
              var d2 = c2;
              break a;
            }
            c2 = c2.return;
          }
          throw Error(p2(160));
        }
        switch (d2.tag) {
          case 5:
            var e2 = d2.stateNode;
            d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
            var f2 = Uj(a2);
            Wj(a2, f2, e2);
            break;
          case 3:
          case 4:
            var g2 = d2.stateNode.containerInfo, h2 = Uj(a2);
            Vj(a2, h2, g2);
            break;
          default:
            throw Error(p2(161));
        }
      } catch (k2) {
        W2(a2, a2.return, k2);
      }
      a2.flags &= -3;
    }
    b2 & 4096 && (a2.flags &= -4097);
  }
  function hk(a2, b2, c2) {
    V2 = a2;
    ik(a2);
  }
  function ik(a2, b2, c2) {
    for (var d2 = 0 !== (a2.mode & 1); null !== V2; ) {
      var e2 = V2, f2 = e2.child;
      if (22 === e2.tag && d2) {
        var g2 = null !== e2.memoizedState || Jj;
        if (!g2) {
          var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U2;
          h2 = Jj;
          var l2 = U2;
          Jj = g2;
          if ((U2 = k2) && !l2) for (V2 = e2; null !== V2; ) g2 = V2, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? jk(e2) : null !== k2 ? (k2.return = g2, V2 = k2) : jk(e2);
          for (; null !== f2; ) V2 = f2, ik(f2), f2 = f2.sibling;
          V2 = e2;
          Jj = h2;
          U2 = l2;
        }
        kk(a2);
      } else 0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V2 = f2) : kk(a2);
    }
  }
  function kk(a2) {
    for (; null !== V2; ) {
      var b2 = V2;
      if (0 !== (b2.flags & 8772)) {
        var c2 = b2.alternate;
        try {
          if (0 !== (b2.flags & 8772)) switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              U2 || Qj(5, b2);
              break;
            case 1:
              var d2 = b2.stateNode;
              if (b2.flags & 4 && !U2) if (null === c2) d2.componentDidMount();
              else {
                var e2 = b2.elementType === b2.type ? c2.memoizedProps : Ci(b2.type, c2.memoizedProps);
                d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
              }
              var f2 = b2.updateQueue;
              null !== f2 && sh(b2, f2, d2);
              break;
            case 3:
              var g2 = b2.updateQueue;
              if (null !== g2) {
                c2 = null;
                if (null !== b2.child) switch (b2.child.tag) {
                  case 5:
                    c2 = b2.child.stateNode;
                    break;
                  case 1:
                    c2 = b2.child.stateNode;
                }
                sh(b2, g2, c2);
              }
              break;
            case 5:
              var h2 = b2.stateNode;
              if (null === c2 && b2.flags & 4) {
                c2 = h2;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
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
              if (null === b2.memoizedState) {
                var l2 = b2.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
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
              throw Error(p2(163));
          }
          U2 || b2.flags & 512 && Rj(b2);
        } catch (r2) {
          W2(b2, b2.return, r2);
        }
      }
      if (b2 === a2) {
        V2 = null;
        break;
      }
      c2 = b2.sibling;
      if (null !== c2) {
        c2.return = b2.return;
        V2 = c2;
        break;
      }
      V2 = b2.return;
    }
  }
  function gk(a2) {
    for (; null !== V2; ) {
      var b2 = V2;
      if (b2 === a2) {
        V2 = null;
        break;
      }
      var c2 = b2.sibling;
      if (null !== c2) {
        c2.return = b2.return;
        V2 = c2;
        break;
      }
      V2 = b2.return;
    }
  }
  function jk(a2) {
    for (; null !== V2; ) {
      var b2 = V2;
      try {
        switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            var c2 = b2.return;
            try {
              Qj(4, b2);
            } catch (k2) {
              W2(b2, c2, k2);
            }
            break;
          case 1:
            var d2 = b2.stateNode;
            if ("function" === typeof d2.componentDidMount) {
              var e2 = b2.return;
              try {
                d2.componentDidMount();
              } catch (k2) {
                W2(b2, e2, k2);
              }
            }
            var f2 = b2.return;
            try {
              Rj(b2);
            } catch (k2) {
              W2(b2, f2, k2);
            }
            break;
          case 5:
            var g2 = b2.return;
            try {
              Rj(b2);
            } catch (k2) {
              W2(b2, g2, k2);
            }
        }
      } catch (k2) {
        W2(b2, b2.return, k2);
      }
      if (b2 === a2) {
        V2 = null;
        break;
      }
      var h2 = b2.sibling;
      if (null !== h2) {
        h2.return = b2.return;
        V2 = h2;
        break;
      }
      V2 = b2.return;
    }
  }
  var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K2 = 0, Q2 = null, Y2 = null, Z2 = 0, fj = 0, ej = Uf(0), T2 = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
  function R2() {
    return 0 !== (K2 & 6) ? B2() : -1 !== Ak ? Ak : Ak = B2();
  }
  function yi(a2) {
    if (0 === (a2.mode & 1)) return 1;
    if (0 !== (K2 & 2) && 0 !== Z2) return Z2 & -Z2;
    if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
    a2 = C2;
    if (0 !== a2) return a2;
    a2 = window.event;
    a2 = void 0 === a2 ? 16 : jd(a2.type);
    return a2;
  }
  function gi(a2, b2, c2, d2) {
    if (50 < yk) throw yk = 0, zk = null, Error(p2(185));
    Ac(a2, c2, d2);
    if (0 === (K2 & 2) || a2 !== Q2) a2 === Q2 && (0 === (K2 & 2) && (qk |= c2), 4 === T2 && Ck(a2, Z2)), Dk(a2, d2), 1 === c2 && 0 === K2 && 0 === (b2.mode & 1) && (Gj = B2() + 500, fg && jg());
  }
  function Dk(a2, b2) {
    var c2 = a2.callbackNode;
    wc(a2, b2);
    var d2 = uc(a2, a2 === Q2 ? Z2 : 0);
    if (0 === d2) null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
    else if (b2 = d2 & -d2, a2.callbackPriority !== b2) {
      null != c2 && bc(c2);
      if (1 === b2) 0 === a2.tag ? ig(Ek.bind(null, a2)) : hg(Ek.bind(null, a2)), Jf(function() {
        0 === (K2 & 6) && jg();
      }), c2 = null;
      else {
        switch (Dc(d2)) {
          case 1:
            c2 = fc;
            break;
          case 4:
            c2 = gc;
            break;
          case 16:
            c2 = hc;
            break;
          case 536870912:
            c2 = jc;
            break;
          default:
            c2 = hc;
        }
        c2 = Fk(c2, Gk.bind(null, a2));
      }
      a2.callbackPriority = b2;
      a2.callbackNode = c2;
    }
  }
  function Gk(a2, b2) {
    Ak = -1;
    Bk = 0;
    if (0 !== (K2 & 6)) throw Error(p2(327));
    var c2 = a2.callbackNode;
    if (Hk() && a2.callbackNode !== c2) return null;
    var d2 = uc(a2, a2 === Q2 ? Z2 : 0);
    if (0 === d2) return null;
    if (0 !== (d2 & 30) || 0 !== (d2 & a2.expiredLanes) || b2) b2 = Ik(a2, d2);
    else {
      b2 = d2;
      var e2 = K2;
      K2 |= 2;
      var f2 = Jk();
      if (Q2 !== a2 || Z2 !== b2) uk = null, Gj = B2() + 500, Kk(a2, b2);
      do
        try {
          Lk();
          break;
        } catch (h2) {
          Mk(a2, h2);
        }
      while (1);
      $g();
      mk.current = f2;
      K2 = e2;
      null !== Y2 ? b2 = 0 : (Q2 = null, Z2 = 0, b2 = T2);
    }
    if (0 !== b2) {
      2 === b2 && (e2 = xc(a2), 0 !== e2 && (d2 = e2, b2 = Nk(a2, e2)));
      if (1 === b2) throw c2 = pk, Kk(a2, 0), Ck(a2, d2), Dk(a2, B2()), c2;
      if (6 === b2) Ck(a2, d2);
      else {
        e2 = a2.current.alternate;
        if (0 === (d2 & 30) && !Ok(e2) && (b2 = Ik(a2, d2), 2 === b2 && (f2 = xc(a2), 0 !== f2 && (d2 = f2, b2 = Nk(a2, f2))), 1 === b2)) throw c2 = pk, Kk(a2, 0), Ck(a2, d2), Dk(a2, B2()), c2;
        a2.finishedWork = e2;
        a2.finishedLanes = d2;
        switch (b2) {
          case 0:
          case 1:
            throw Error(p2(345));
          case 2:
            Pk(a2, tk, uk);
            break;
          case 3:
            Ck(a2, d2);
            if ((d2 & 130023424) === d2 && (b2 = fk + 500 - B2(), 10 < b2)) {
              if (0 !== uc(a2, 0)) break;
              e2 = a2.suspendedLanes;
              if ((e2 & d2) !== d2) {
                R2();
                a2.pingedLanes |= a2.suspendedLanes & e2;
                break;
              }
              a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), b2);
              break;
            }
            Pk(a2, tk, uk);
            break;
          case 4:
            Ck(a2, d2);
            if ((d2 & 4194240) === d2) break;
            b2 = a2.eventTimes;
            for (e2 = -1; 0 < d2; ) {
              var g2 = 31 - oc(d2);
              f2 = 1 << g2;
              g2 = b2[g2];
              g2 > e2 && (e2 = g2);
              d2 &= ~f2;
            }
            d2 = e2;
            d2 = B2() - d2;
            d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * lk(d2 / 1960)) - d2;
            if (10 < d2) {
              a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), d2);
              break;
            }
            Pk(a2, tk, uk);
            break;
          case 5:
            Pk(a2, tk, uk);
            break;
          default:
            throw Error(p2(329));
        }
      }
    }
    Dk(a2, B2());
    return a2.callbackNode === c2 ? Gk.bind(null, a2) : null;
  }
  function Nk(a2, b2) {
    var c2 = sk;
    a2.current.memoizedState.isDehydrated && (Kk(a2, b2).flags |= 256);
    a2 = Ik(a2, b2);
    2 !== a2 && (b2 = tk, tk = c2, null !== b2 && Fj(b2));
    return a2;
  }
  function Fj(a2) {
    null === tk ? tk = a2 : tk.push.apply(tk, a2);
  }
  function Ok(a2) {
    for (var b2 = a2; ; ) {
      if (b2.flags & 16384) {
        var c2 = b2.updateQueue;
        if (null !== c2 && (c2 = c2.stores, null !== c2)) for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2], f2 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!He(f2(), e2)) return false;
          } catch (g2) {
            return false;
          }
        }
      }
      c2 = b2.child;
      if (b2.subtreeFlags & 16384 && null !== c2) c2.return = b2, b2 = c2;
      else {
        if (b2 === a2) break;
        for (; null === b2.sibling; ) {
          if (null === b2.return || b2.return === a2) return true;
          b2 = b2.return;
        }
        b2.sibling.return = b2.return;
        b2 = b2.sibling;
      }
    }
    return true;
  }
  function Ck(a2, b2) {
    b2 &= ~rk;
    b2 &= ~qk;
    a2.suspendedLanes |= b2;
    a2.pingedLanes &= ~b2;
    for (a2 = a2.expirationTimes; 0 < b2; ) {
      var c2 = 31 - oc(b2), d2 = 1 << c2;
      a2[c2] = -1;
      b2 &= ~d2;
    }
  }
  function Ek(a2) {
    if (0 !== (K2 & 6)) throw Error(p2(327));
    Hk();
    var b2 = uc(a2, 0);
    if (0 === (b2 & 1)) return Dk(a2, B2()), null;
    var c2 = Ik(a2, b2);
    if (0 !== a2.tag && 2 === c2) {
      var d2 = xc(a2);
      0 !== d2 && (b2 = d2, c2 = Nk(a2, d2));
    }
    if (1 === c2) throw c2 = pk, Kk(a2, 0), Ck(a2, b2), Dk(a2, B2()), c2;
    if (6 === c2) throw Error(p2(345));
    a2.finishedWork = a2.current.alternate;
    a2.finishedLanes = b2;
    Pk(a2, tk, uk);
    Dk(a2, B2());
    return null;
  }
  function Qk(a2, b2) {
    var c2 = K2;
    K2 |= 1;
    try {
      return a2(b2);
    } finally {
      K2 = c2, 0 === K2 && (Gj = B2() + 500, fg && jg());
    }
  }
  function Rk(a2) {
    null !== wk && 0 === wk.tag && 0 === (K2 & 6) && Hk();
    var b2 = K2;
    K2 |= 1;
    var c2 = ok.transition, d2 = C2;
    try {
      if (ok.transition = null, C2 = 1, a2) return a2();
    } finally {
      C2 = d2, ok.transition = c2, K2 = b2, 0 === (K2 & 6) && jg();
    }
  }
  function Hj() {
    fj = ej.current;
    E2(ej);
  }
  function Kk(a2, b2) {
    a2.finishedWork = null;
    a2.finishedLanes = 0;
    var c2 = a2.timeoutHandle;
    -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
    if (null !== Y2) for (c2 = Y2.return; null !== c2; ) {
      var d2 = c2;
      wg(d2);
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          null !== d2 && void 0 !== d2 && $f();
          break;
        case 3:
          zh();
          E2(Wf);
          E2(H2);
          Eh();
          break;
        case 5:
          Bh(d2);
          break;
        case 4:
          zh();
          break;
        case 13:
          E2(L2);
          break;
        case 19:
          E2(L2);
          break;
        case 10:
          ah(d2.type._context);
          break;
        case 22:
        case 23:
          Hj();
      }
      c2 = c2.return;
    }
    Q2 = a2;
    Y2 = a2 = Pg(a2.current, null);
    Z2 = fj = b2;
    T2 = 0;
    pk = null;
    rk = qk = rh = 0;
    tk = sk = null;
    if (null !== fh) {
      for (b2 = 0; b2 < fh.length; b2++) if (c2 = fh[b2], d2 = c2.interleaved, null !== d2) {
        c2.interleaved = null;
        var e2 = d2.next, f2 = c2.pending;
        if (null !== f2) {
          var g2 = f2.next;
          f2.next = e2;
          d2.next = g2;
        }
        c2.pending = d2;
      }
      fh = null;
    }
    return a2;
  }
  function Mk(a2, b2) {
    do {
      var c2 = Y2;
      try {
        $g();
        Fh.current = Rh;
        if (Ih) {
          for (var d2 = M2.memoizedState; null !== d2; ) {
            var e2 = d2.queue;
            null !== e2 && (e2.pending = null);
            d2 = d2.next;
          }
          Ih = false;
        }
        Hh = 0;
        O2 = N2 = M2 = null;
        Jh = false;
        Kh = 0;
        nk.current = null;
        if (null === c2 || null === c2.return) {
          T2 = 1;
          pk = b2;
          Y2 = null;
          break;
        }
        a: {
          var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
          b2 = Z2;
          h2.flags |= 32768;
          if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
            var l2 = k2, m2 = h2, q2 = m2.tag;
            if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
              var r2 = m2.alternate;
              r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
            }
            var y2 = Ui(g2);
            if (null !== y2) {
              y2.flags &= -257;
              Vi(y2, g2, h2, f2, b2);
              y2.mode & 1 && Si(f2, l2, b2);
              b2 = y2;
              k2 = l2;
              var n2 = b2.updateQueue;
              if (null === n2) {
                var t2 = /* @__PURE__ */ new Set();
                t2.add(k2);
                b2.updateQueue = t2;
              } else n2.add(k2);
              break a;
            } else {
              if (0 === (b2 & 1)) {
                Si(f2, l2, b2);
                tj();
                break a;
              }
              k2 = Error(p2(426));
            }
          } else if (I2 && h2.mode & 1) {
            var J2 = Ui(g2);
            if (null !== J2) {
              0 === (J2.flags & 65536) && (J2.flags |= 256);
              Vi(J2, g2, h2, f2, b2);
              Jg(Ji(k2, h2));
              break a;
            }
          }
          f2 = k2 = Ji(k2, h2);
          4 !== T2 && (T2 = 2);
          null === sk ? sk = [f2] : sk.push(f2);
          f2 = g2;
          do {
            switch (f2.tag) {
              case 3:
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var x2 = Ni(f2, k2, b2);
                ph(f2, x2);
                break a;
              case 1:
                h2 = k2;
                var w2 = f2.type, u2 = f2.stateNode;
                if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                  f2.flags |= 65536;
                  b2 &= -b2;
                  f2.lanes |= b2;
                  var F2 = Qi(f2, h2, b2);
                  ph(f2, F2);
                  break a;
                }
            }
            f2 = f2.return;
          } while (null !== f2);
        }
        Sk(c2);
      } catch (na) {
        b2 = na;
        Y2 === c2 && null !== c2 && (Y2 = c2 = c2.return);
        continue;
      }
      break;
    } while (1);
  }
  function Jk() {
    var a2 = mk.current;
    mk.current = Rh;
    return null === a2 ? Rh : a2;
  }
  function tj() {
    if (0 === T2 || 3 === T2 || 2 === T2) T2 = 4;
    null === Q2 || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q2, Z2);
  }
  function Ik(a2, b2) {
    var c2 = K2;
    K2 |= 2;
    var d2 = Jk();
    if (Q2 !== a2 || Z2 !== b2) uk = null, Kk(a2, b2);
    do
      try {
        Tk();
        break;
      } catch (e2) {
        Mk(a2, e2);
      }
    while (1);
    $g();
    K2 = c2;
    mk.current = d2;
    if (null !== Y2) throw Error(p2(261));
    Q2 = null;
    Z2 = 0;
    return T2;
  }
  function Tk() {
    for (; null !== Y2; ) Uk(Y2);
  }
  function Lk() {
    for (; null !== Y2 && !cc(); ) Uk(Y2);
  }
  function Uk(a2) {
    var b2 = Vk(a2.alternate, a2, fj);
    a2.memoizedProps = a2.pendingProps;
    null === b2 ? Sk(a2) : Y2 = b2;
    nk.current = null;
  }
  function Sk(a2) {
    var b2 = a2;
    do {
      var c2 = b2.alternate;
      a2 = b2.return;
      if (0 === (b2.flags & 32768)) {
        if (c2 = Ej(c2, b2, fj), null !== c2) {
          Y2 = c2;
          return;
        }
      } else {
        c2 = Ij(c2, b2);
        if (null !== c2) {
          c2.flags &= 32767;
          Y2 = c2;
          return;
        }
        if (null !== a2) a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
        else {
          T2 = 6;
          Y2 = null;
          return;
        }
      }
      b2 = b2.sibling;
      if (null !== b2) {
        Y2 = b2;
        return;
      }
      Y2 = b2 = a2;
    } while (null !== b2);
    0 === T2 && (T2 = 5);
  }
  function Pk(a2, b2, c2) {
    var d2 = C2, e2 = ok.transition;
    try {
      ok.transition = null, C2 = 1, Wk(a2, b2, c2, d2);
    } finally {
      ok.transition = e2, C2 = d2;
    }
    return null;
  }
  function Wk(a2, b2, c2, d2) {
    do
      Hk();
    while (null !== wk);
    if (0 !== (K2 & 6)) throw Error(p2(327));
    c2 = a2.finishedWork;
    var e2 = a2.finishedLanes;
    if (null === c2) return null;
    a2.finishedWork = null;
    a2.finishedLanes = 0;
    if (c2 === a2.current) throw Error(p2(177));
    a2.callbackNode = null;
    a2.callbackPriority = 0;
    var f2 = c2.lanes | c2.childLanes;
    Bc(a2, f2);
    a2 === Q2 && (Y2 = Q2 = null, Z2 = 0);
    0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || vk || (vk = true, Fk(hc, function() {
      Hk();
      return null;
    }));
    f2 = 0 !== (c2.flags & 15990);
    if (0 !== (c2.subtreeFlags & 15990) || f2) {
      f2 = ok.transition;
      ok.transition = null;
      var g2 = C2;
      C2 = 1;
      var h2 = K2;
      K2 |= 4;
      nk.current = null;
      Oj(a2, c2);
      dk(c2, a2);
      Oe2(Df);
      dd = !!Cf;
      Df = Cf = null;
      a2.current = c2;
      hk(c2);
      dc();
      K2 = h2;
      C2 = g2;
      ok.transition = f2;
    } else a2.current = c2;
    vk && (vk = false, wk = a2, xk = e2);
    f2 = a2.pendingLanes;
    0 === f2 && (Ri = null);
    mc(c2.stateNode);
    Dk(a2, B2());
    if (null !== b2) for (d2 = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++) e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
    if (Oi) throw Oi = false, a2 = Pi, Pi = null, a2;
    0 !== (xk & 1) && 0 !== a2.tag && Hk();
    f2 = a2.pendingLanes;
    0 !== (f2 & 1) ? a2 === zk ? yk++ : (yk = 0, zk = a2) : yk = 0;
    jg();
    return null;
  }
  function Hk() {
    if (null !== wk) {
      var a2 = Dc(xk), b2 = ok.transition, c2 = C2;
      try {
        ok.transition = null;
        C2 = 16 > a2 ? 16 : a2;
        if (null === wk) var d2 = false;
        else {
          a2 = wk;
          wk = null;
          xk = 0;
          if (0 !== (K2 & 6)) throw Error(p2(331));
          var e2 = K2;
          K2 |= 4;
          for (V2 = a2.current; null !== V2; ) {
            var f2 = V2, g2 = f2.child;
            if (0 !== (V2.flags & 16)) {
              var h2 = f2.deletions;
              if (null !== h2) {
                for (var k2 = 0; k2 < h2.length; k2++) {
                  var l2 = h2[k2];
                  for (V2 = l2; null !== V2; ) {
                    var m2 = V2;
                    switch (m2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pj(8, m2, f2);
                    }
                    var q2 = m2.child;
                    if (null !== q2) q2.return = m2, V2 = q2;
                    else for (; null !== V2; ) {
                      m2 = V2;
                      var r2 = m2.sibling, y2 = m2.return;
                      Sj(m2);
                      if (m2 === l2) {
                        V2 = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V2 = r2;
                        break;
                      }
                      V2 = y2;
                    }
                  }
                }
                var n2 = f2.alternate;
                if (null !== n2) {
                  var t2 = n2.child;
                  if (null !== t2) {
                    n2.child = null;
                    do {
                      var J2 = t2.sibling;
                      t2.sibling = null;
                      t2 = J2;
                    } while (null !== t2);
                  }
                }
                V2 = f2;
              }
            }
            if (0 !== (f2.subtreeFlags & 2064) && null !== g2) g2.return = f2, V2 = g2;
            else b: for (; null !== V2; ) {
              f2 = V2;
              if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                case 0:
                case 11:
                case 15:
                  Pj(9, f2, f2.return);
              }
              var x2 = f2.sibling;
              if (null !== x2) {
                x2.return = f2.return;
                V2 = x2;
                break b;
              }
              V2 = f2.return;
            }
          }
          var w2 = a2.current;
          for (V2 = w2; null !== V2; ) {
            g2 = V2;
            var u2 = g2.child;
            if (0 !== (g2.subtreeFlags & 2064) && null !== u2) u2.return = g2, V2 = u2;
            else b: for (g2 = w2; null !== V2; ) {
              h2 = V2;
              if (0 !== (h2.flags & 2048)) try {
                switch (h2.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qj(9, h2);
                }
              } catch (na) {
                W2(h2, h2.return, na);
              }
              if (h2 === g2) {
                V2 = null;
                break b;
              }
              var F2 = h2.sibling;
              if (null !== F2) {
                F2.return = h2.return;
                V2 = F2;
                break b;
              }
              V2 = h2.return;
            }
          }
          K2 = e2;
          jg();
          if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
            lc.onPostCommitFiberRoot(kc, a2);
          } catch (na) {
          }
          d2 = true;
        }
        return d2;
      } finally {
        C2 = c2, ok.transition = b2;
      }
    }
    return false;
  }
  function Xk(a2, b2, c2) {
    b2 = Ji(c2, b2);
    b2 = Ni(a2, b2, 1);
    a2 = nh(a2, b2, 1);
    b2 = R2();
    null !== a2 && (Ac(a2, 1, b2), Dk(a2, b2));
  }
  function W2(a2, b2, c2) {
    if (3 === a2.tag) Xk(a2, a2, c2);
    else for (; null !== b2; ) {
      if (3 === b2.tag) {
        Xk(b2, a2, c2);
        break;
      } else if (1 === b2.tag) {
        var d2 = b2.stateNode;
        if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Ri || !Ri.has(d2))) {
          a2 = Ji(c2, a2);
          a2 = Qi(b2, a2, 1);
          b2 = nh(b2, a2, 1);
          a2 = R2();
          null !== b2 && (Ac(b2, 1, a2), Dk(b2, a2));
          break;
        }
      }
      b2 = b2.return;
    }
  }
  function Ti(a2, b2, c2) {
    var d2 = a2.pingCache;
    null !== d2 && d2.delete(b2);
    b2 = R2();
    a2.pingedLanes |= a2.suspendedLanes & c2;
    Q2 === a2 && (Z2 & c2) === c2 && (4 === T2 || 3 === T2 && (Z2 & 130023424) === Z2 && 500 > B2() - fk ? Kk(a2, 0) : rk |= c2);
    Dk(a2, b2);
  }
  function Yk(a2, b2) {
    0 === b2 && (0 === (a2.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
    var c2 = R2();
    a2 = ih(a2, b2);
    null !== a2 && (Ac(a2, b2, c2), Dk(a2, c2));
  }
  function uj(a2) {
    var b2 = a2.memoizedState, c2 = 0;
    null !== b2 && (c2 = b2.retryLane);
    Yk(a2, c2);
  }
  function bk(a2, b2) {
    var c2 = 0;
    switch (a2.tag) {
      case 13:
        var d2 = a2.stateNode;
        var e2 = a2.memoizedState;
        null !== e2 && (c2 = e2.retryLane);
        break;
      case 19:
        d2 = a2.stateNode;
        break;
      default:
        throw Error(p2(314));
    }
    null !== d2 && d2.delete(b2);
    Yk(a2, c2);
  }
  var Vk;
  Vk = function(a2, b2, c2) {
    if (null !== a2) if (a2.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
    else {
      if (0 === (a2.lanes & c2) && 0 === (b2.flags & 128)) return dh = false, yj(a2, b2, c2);
      dh = 0 !== (a2.flags & 131072) ? true : false;
    }
    else dh = false, I2 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
    b2.lanes = 0;
    switch (b2.tag) {
      case 2:
        var d2 = b2.type;
        ij(a2, b2);
        a2 = b2.pendingProps;
        var e2 = Yf(b2, H2.current);
        ch(b2, c2);
        e2 = Nh(null, b2, d2, a2, e2, c2);
        var f2 = Sh();
        b2.flags |= 1;
        "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b2), e2.updater = Ei, b2.stateNode = e2, e2._reactInternals = b2, Ii(b2, d2, a2, c2), b2 = jj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I2 && f2 && vg(b2), Xi(null, b2, e2, c2), b2 = b2.child);
        return b2;
      case 16:
        d2 = b2.elementType;
        a: {
          ij(a2, b2);
          a2 = b2.pendingProps;
          e2 = d2._init;
          d2 = e2(d2._payload);
          b2.type = d2;
          e2 = b2.tag = Zk(d2);
          a2 = Ci(d2, a2);
          switch (e2) {
            case 0:
              b2 = cj(null, b2, d2, a2, c2);
              break a;
            case 1:
              b2 = hj(null, b2, d2, a2, c2);
              break a;
            case 11:
              b2 = Yi(null, b2, d2, a2, c2);
              break a;
            case 14:
              b2 = $i(null, b2, d2, Ci(d2.type, a2), c2);
              break a;
          }
          throw Error(p2(
            306,
            d2,
            ""
          ));
        }
        return b2;
      case 0:
        return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), cj(a2, b2, d2, e2, c2);
      case 1:
        return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), hj(a2, b2, d2, e2, c2);
      case 3:
        a: {
          kj(b2);
          if (null === a2) throw Error(p2(387));
          d2 = b2.pendingProps;
          f2 = b2.memoizedState;
          e2 = f2.element;
          lh(a2, b2);
          qh(b2, d2, null, c2);
          var g2 = b2.memoizedState;
          d2 = g2.element;
          if (f2.isDehydrated) if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e2 = Ji(Error(p2(423)), b2);
            b2 = lj(a2, b2, d2, c2, e2);
            break a;
          } else if (d2 !== e2) {
            e2 = Ji(Error(p2(424)), b2);
            b2 = lj(a2, b2, d2, c2, e2);
            break a;
          } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I2 = true, zg = null, c2 = Vg(b2, null, d2, c2), b2.child = c2; c2; ) c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
          else {
            Ig();
            if (d2 === e2) {
              b2 = Zi(a2, b2, c2);
              break a;
            }
            Xi(a2, b2, d2, c2);
          }
          b2 = b2.child;
        }
        return b2;
      case 5:
        return Ah(b2), null === a2 && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), gj(a2, b2), Xi(a2, b2, g2, c2), b2.child;
      case 6:
        return null === a2 && Eg(b2), null;
      case 13:
        return oj(a2, b2, c2);
      case 4:
        return yh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a2 ? b2.child = Ug(b2, null, d2, c2) : Xi(a2, b2, d2, c2), b2.child;
      case 11:
        return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), Yi(a2, b2, d2, e2, c2);
      case 7:
        return Xi(a2, b2, b2.pendingProps, c2), b2.child;
      case 8:
        return Xi(a2, b2, b2.pendingProps.children, c2), b2.child;
      case 12:
        return Xi(a2, b2, b2.pendingProps.children, c2), b2.child;
      case 10:
        a: {
          d2 = b2.type._context;
          e2 = b2.pendingProps;
          f2 = b2.memoizedProps;
          g2 = e2.value;
          G2(Wg, d2._currentValue);
          d2._currentValue = g2;
          if (null !== f2) if (He(f2.value, g2)) {
            if (f2.children === e2.children && !Wf.current) {
              b2 = Zi(a2, b2, c2);
              break a;
            }
          } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
            var h2 = f2.dependencies;
            if (null !== h2) {
              g2 = f2.child;
              for (var k2 = h2.firstContext; null !== k2; ) {
                if (k2.context === d2) {
                  if (1 === f2.tag) {
                    k2 = mh(-1, c2 & -c2);
                    k2.tag = 2;
                    var l2 = f2.updateQueue;
                    if (null !== l2) {
                      l2 = l2.shared;
                      var m2 = l2.pending;
                      null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                      l2.pending = k2;
                    }
                  }
                  f2.lanes |= c2;
                  k2 = f2.alternate;
                  null !== k2 && (k2.lanes |= c2);
                  bh(
                    f2.return,
                    c2,
                    b2
                  );
                  h2.lanes |= c2;
                  break;
                }
                k2 = k2.next;
              }
            } else if (10 === f2.tag) g2 = f2.type === b2.type ? null : f2.child;
            else if (18 === f2.tag) {
              g2 = f2.return;
              if (null === g2) throw Error(p2(341));
              g2.lanes |= c2;
              h2 = g2.alternate;
              null !== h2 && (h2.lanes |= c2);
              bh(g2, c2, b2);
              g2 = f2.sibling;
            } else g2 = f2.child;
            if (null !== g2) g2.return = f2;
            else for (g2 = f2; null !== g2; ) {
              if (g2 === b2) {
                g2 = null;
                break;
              }
              f2 = g2.sibling;
              if (null !== f2) {
                f2.return = g2.return;
                g2 = f2;
                break;
              }
              g2 = g2.return;
            }
            f2 = g2;
          }
          Xi(a2, b2, e2.children, c2);
          b2 = b2.child;
        }
        return b2;
      case 9:
        return e2 = b2.type, d2 = b2.pendingProps.children, ch(b2, c2), e2 = eh(e2), d2 = d2(e2), b2.flags |= 1, Xi(a2, b2, d2, c2), b2.child;
      case 14:
        return d2 = b2.type, e2 = Ci(d2, b2.pendingProps), e2 = Ci(d2.type, e2), $i(a2, b2, d2, e2, c2);
      case 15:
        return bj(a2, b2, b2.type, b2.pendingProps, c2);
      case 17:
        return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), ij(a2, b2), b2.tag = 1, Zf(d2) ? (a2 = true, cg(b2)) : a2 = false, ch(b2, c2), Gi(b2, d2, e2), Ii(b2, d2, e2, c2), jj(null, b2, d2, true, a2, c2);
      case 19:
        return xj(a2, b2, c2);
      case 22:
        return dj(a2, b2, c2);
    }
    throw Error(p2(156, b2.tag));
  };
  function Fk(a2, b2) {
    return ac(a2, b2);
  }
  function $k(a2, b2, c2, d2) {
    this.tag = a2;
    this.key = c2;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b2;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d2;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Bg(a2, b2, c2, d2) {
    return new $k(a2, b2, c2, d2);
  }
  function aj(a2) {
    a2 = a2.prototype;
    return !(!a2 || !a2.isReactComponent);
  }
  function Zk(a2) {
    if ("function" === typeof a2) return aj(a2) ? 1 : 0;
    if (void 0 !== a2 && null !== a2) {
      a2 = a2.$$typeof;
      if (a2 === Da) return 11;
      if (a2 === Ga) return 14;
    }
    return 2;
  }
  function Pg(a2, b2) {
    var c2 = a2.alternate;
    null === c2 ? (c2 = Bg(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
    c2.flags = a2.flags & 14680064;
    c2.childLanes = a2.childLanes;
    c2.lanes = a2.lanes;
    c2.child = a2.child;
    c2.memoizedProps = a2.memoizedProps;
    c2.memoizedState = a2.memoizedState;
    c2.updateQueue = a2.updateQueue;
    b2 = a2.dependencies;
    c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
    c2.sibling = a2.sibling;
    c2.index = a2.index;
    c2.ref = a2.ref;
    return c2;
  }
  function Rg(a2, b2, c2, d2, e2, f2) {
    var g2 = 2;
    d2 = a2;
    if ("function" === typeof a2) aj(a2) && (g2 = 1);
    else if ("string" === typeof a2) g2 = 5;
    else a: switch (a2) {
      case ya:
        return Tg(c2.children, e2, f2, b2);
      case za:
        g2 = 8;
        e2 |= 8;
        break;
      case Aa:
        return a2 = Bg(12, c2, b2, e2 | 2), a2.elementType = Aa, a2.lanes = f2, a2;
      case Ea:
        return a2 = Bg(13, c2, b2, e2), a2.elementType = Ea, a2.lanes = f2, a2;
      case Fa:
        return a2 = Bg(19, c2, b2, e2), a2.elementType = Fa, a2.lanes = f2, a2;
      case Ia:
        return pj(c2, e2, f2, b2);
      default:
        if ("object" === typeof a2 && null !== a2) switch (a2.$$typeof) {
          case Ba:
            g2 = 10;
            break a;
          case Ca:
            g2 = 9;
            break a;
          case Da:
            g2 = 11;
            break a;
          case Ga:
            g2 = 14;
            break a;
          case Ha:
            g2 = 16;
            d2 = null;
            break a;
        }
        throw Error(p2(130, null == a2 ? a2 : typeof a2, ""));
    }
    b2 = Bg(g2, c2, b2, e2);
    b2.elementType = a2;
    b2.type = d2;
    b2.lanes = f2;
    return b2;
  }
  function Tg(a2, b2, c2, d2) {
    a2 = Bg(7, a2, d2, b2);
    a2.lanes = c2;
    return a2;
  }
  function pj(a2, b2, c2, d2) {
    a2 = Bg(22, a2, d2, b2);
    a2.elementType = Ia;
    a2.lanes = c2;
    a2.stateNode = { isHidden: false };
    return a2;
  }
  function Qg(a2, b2, c2) {
    a2 = Bg(6, a2, null, b2);
    a2.lanes = c2;
    return a2;
  }
  function Sg(a2, b2, c2) {
    b2 = Bg(4, null !== a2.children ? a2.children : [], a2.key, b2);
    b2.lanes = c2;
    b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
    return b2;
  }
  function al(a2, b2, c2, d2, e2) {
    this.tag = b2;
    this.containerInfo = a2;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = zc(0);
    this.identifierPrefix = d2;
    this.onRecoverableError = e2;
    this.mutableSourceEagerHydrationData = null;
  }
  function bl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    a2 = new al(a2, b2, c2, h2, k2);
    1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
    f2 = Bg(3, null, null, b2);
    a2.current = f2;
    f2.stateNode = a2;
    f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
    kh(f2);
    return a2;
  }
  function cl(a2, b2, c2) {
    var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
  }
  function dl(a2) {
    if (!a2) return Vf;
    a2 = a2._reactInternals;
    a: {
      if (Vb(a2) !== a2 || 1 !== a2.tag) throw Error(p2(170));
      var b2 = a2;
      do {
        switch (b2.tag) {
          case 3:
            b2 = b2.stateNode.context;
            break a;
          case 1:
            if (Zf(b2.type)) {
              b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b2 = b2.return;
      } while (null !== b2);
      throw Error(p2(171));
    }
    if (1 === a2.tag) {
      var c2 = a2.type;
      if (Zf(c2)) return bg(a2, c2, b2);
    }
    return b2;
  }
  function el(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    a2 = bl(c2, d2, true, a2, e2, f2, g2, h2, k2);
    a2.context = dl(null);
    c2 = a2.current;
    d2 = R2();
    e2 = yi(c2);
    f2 = mh(d2, e2);
    f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
    nh(c2, f2, e2);
    a2.current.lanes = e2;
    Ac(a2, e2, d2);
    Dk(a2, d2);
    return a2;
  }
  function fl(a2, b2, c2, d2) {
    var e2 = b2.current, f2 = R2(), g2 = yi(e2);
    c2 = dl(c2);
    null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
    b2 = mh(f2, g2);
    b2.payload = { element: a2 };
    d2 = void 0 === d2 ? null : d2;
    null !== d2 && (b2.callback = d2);
    a2 = nh(e2, b2, g2);
    null !== a2 && (gi(a2, e2, g2, f2), oh(a2, e2, g2));
    return g2;
  }
  function gl(a2) {
    a2 = a2.current;
    if (!a2.child) return null;
    switch (a2.child.tag) {
      case 5:
        return a2.child.stateNode;
      default:
        return a2.child.stateNode;
    }
  }
  function hl(a2, b2) {
    a2 = a2.memoizedState;
    if (null !== a2 && null !== a2.dehydrated) {
      var c2 = a2.retryLane;
      a2.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
    }
  }
  function il(a2, b2) {
    hl(a2, b2);
    (a2 = a2.alternate) && hl(a2, b2);
  }
  function jl() {
    return null;
  }
  var kl = "function" === typeof reportError ? reportError : function(a2) {
    console.error(a2);
  };
  function ll(a2) {
    this._internalRoot = a2;
  }
  ml.prototype.render = ll.prototype.render = function(a2) {
    var b2 = this._internalRoot;
    if (null === b2) throw Error(p2(409));
    fl(a2, b2, null, null);
  };
  ml.prototype.unmount = ll.prototype.unmount = function() {
    var a2 = this._internalRoot;
    if (null !== a2) {
      this._internalRoot = null;
      var b2 = a2.containerInfo;
      Rk(function() {
        fl(null, a2, null, null);
      });
      b2[uf] = null;
    }
  };
  function ml(a2) {
    this._internalRoot = a2;
  }
  ml.prototype.unstable_scheduleHydration = function(a2) {
    if (a2) {
      var b2 = Hc();
      a2 = { blockedOn: null, target: a2, priority: b2 };
      for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++) ;
      Qc.splice(c2, 0, a2);
      0 === c2 && Vc(a2);
    }
  };
  function nl(a2) {
    return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
  }
  function ol(a2) {
    return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
  }
  function pl() {
  }
  function ql(a2, b2, c2, d2, e2) {
    if (e2) {
      if ("function" === typeof d2) {
        var f2 = d2;
        d2 = function() {
          var a3 = gl(g2);
          f2.call(a3);
        };
      }
      var g2 = el(b2, d2, a2, 0, null, false, false, "", pl);
      a2._reactRootContainer = g2;
      a2[uf] = g2.current;
      sf(8 === a2.nodeType ? a2.parentNode : a2);
      Rk();
      return g2;
    }
    for (; e2 = a2.lastChild; ) a2.removeChild(e2);
    if ("function" === typeof d2) {
      var h2 = d2;
      d2 = function() {
        var a3 = gl(k2);
        h2.call(a3);
      };
    }
    var k2 = bl(a2, 0, false, null, null, false, false, "", pl);
    a2._reactRootContainer = k2;
    a2[uf] = k2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    Rk(function() {
      fl(b2, k2, c2, d2);
    });
    return k2;
  }
  function rl(a2, b2, c2, d2, e2) {
    var f2 = c2._reactRootContainer;
    if (f2) {
      var g2 = f2;
      if ("function" === typeof e2) {
        var h2 = e2;
        e2 = function() {
          var a3 = gl(g2);
          h2.call(a3);
        };
      }
      fl(b2, g2, a2, e2);
    } else g2 = ql(c2, b2, a2, e2, d2);
    return gl(g2);
  }
  Ec = function(a2) {
    switch (a2.tag) {
      case 3:
        var b2 = a2.stateNode;
        if (b2.current.memoizedState.isDehydrated) {
          var c2 = tc(b2.pendingLanes);
          0 !== c2 && (Cc(b2, c2 | 1), Dk(b2, B2()), 0 === (K2 & 6) && (Gj = B2() + 500, jg()));
        }
        break;
      case 13:
        Rk(function() {
          var b3 = ih(a2, 1);
          if (null !== b3) {
            var c3 = R2();
            gi(b3, a2, 1, c3);
          }
        }), il(a2, 1);
    }
  };
  Fc = function(a2) {
    if (13 === a2.tag) {
      var b2 = ih(a2, 134217728);
      if (null !== b2) {
        var c2 = R2();
        gi(b2, a2, 134217728, c2);
      }
      il(a2, 134217728);
    }
  };
  Gc = function(a2) {
    if (13 === a2.tag) {
      var b2 = yi(a2), c2 = ih(a2, b2);
      if (null !== c2) {
        var d2 = R2();
        gi(c2, a2, b2, d2);
      }
      il(a2, b2);
    }
  };
  Hc = function() {
    return C2;
  };
  Ic = function(a2, b2) {
    var c2 = C2;
    try {
      return C2 = a2, b2();
    } finally {
      C2 = c2;
    }
  };
  yb = function(a2, b2, c2) {
    switch (b2) {
      case "input":
        bb(a2, c2);
        b2 = c2.name;
        if ("radio" === c2.type && null != b2) {
          for (c2 = a2; c2.parentNode; ) c2 = c2.parentNode;
          c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
          for (b2 = 0; b2 < c2.length; b2++) {
            var d2 = c2[b2];
            if (d2 !== a2 && d2.form === a2.form) {
              var e2 = Db(d2);
              if (!e2) throw Error(p2(90));
              Wa(d2);
              bb(d2, e2);
            }
          }
        }
        break;
      case "textarea":
        ib(a2, c2);
        break;
      case "select":
        b2 = c2.value, null != b2 && fb(a2, !!c2.multiple, b2, false);
    }
  };
  Gb = Qk;
  Hb = Rk;
  var sl = { usingClientEntryPoint: false, Events: [Cb, ue2, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
  var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
    a2 = Zb(a2);
    return null === a2 ? null : a2.stateNode;
  }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vl.isDisabled && vl.supportsFiber) try {
      kc = vl.inject(ul), lc = vl;
    } catch (a2) {
    }
  }
  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
  reactDom_production_min.createPortal = function(a2, b2) {
    var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!nl(b2)) throw Error(p2(200));
    return cl(a2, b2, null, c2);
  };
  reactDom_production_min.createRoot = function(a2, b2) {
    if (!nl(a2)) throw Error(p2(299));
    var c2 = false, d2 = "", e2 = kl;
    null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
    b2 = bl(a2, 1, false, null, null, c2, false, d2, e2);
    a2[uf] = b2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    return new ll(b2);
  };
  reactDom_production_min.findDOMNode = function(a2) {
    if (null == a2) return null;
    if (1 === a2.nodeType) return a2;
    var b2 = a2._reactInternals;
    if (void 0 === b2) {
      if ("function" === typeof a2.render) throw Error(p2(188));
      a2 = Object.keys(a2).join(",");
      throw Error(p2(268, a2));
    }
    a2 = Zb(b2);
    a2 = null === a2 ? null : a2.stateNode;
    return a2;
  };
  reactDom_production_min.flushSync = function(a2) {
    return Rk(a2);
  };
  reactDom_production_min.hydrate = function(a2, b2, c2) {
    if (!ol(b2)) throw Error(p2(200));
    return rl(null, a2, b2, true, c2);
  };
  reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
    if (!nl(a2)) throw Error(p2(405));
    var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = kl;
    null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
    b2 = el(b2, null, a2, 1, null != c2 ? c2 : null, e2, false, f2, g2);
    a2[uf] = b2.current;
    sf(a2);
    if (d2) for (a2 = 0; a2 < d2.length; a2++) c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
      c2,
      e2
    );
    return new ml(b2);
  };
  reactDom_production_min.render = function(a2, b2, c2) {
    if (!ol(b2)) throw Error(p2(200));
    return rl(null, a2, b2, false, c2);
  };
  reactDom_production_min.unmountComponentAtNode = function(a2) {
    if (!ol(a2)) throw Error(p2(40));
    return a2._reactRootContainer ? (Rk(function() {
      rl(null, null, a2, false, function() {
        a2._reactRootContainer = null;
        a2[uf] = null;
      });
    }), true) : false;
  };
  reactDom_production_min.unstable_batchedUpdates = Qk;
  reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
    if (!ol(c2)) throw Error(p2(200));
    if (null == a2 || void 0 === a2._reactInternals) throw Error(p2(38));
    return rl(a2, b2, c2, false, d2);
  };
  reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
  return reactDom_production_min;
}
var hasRequiredReactDom;
function requireReactDom() {
  if (hasRequiredReactDom) return reactDom.exports;
  hasRequiredReactDom = 1;
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    reactDom.exports = requireReactDom_production_min();
  }
  return reactDom.exports;
}
var hasRequiredClient;
function requireClient() {
  if (hasRequiredClient) return client;
  hasRequiredClient = 1;
  var m2 = requireReactDom();
  {
    client.createRoot = m2.createRoot;
    client.hydrateRoot = m2.hydrateRoot;
  }
  return client;
}
var clientExports = requireClient();
var reactExports = requireReact();
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
/**
 * @remix-run/router v1.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$4() {
  _extends$4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window2, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window2.location;
    return createLocation(
      "",
      {
        pathname,
        search,
        hash
      },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createBrowserHref(window2, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function getHistoryState(location) {
  return {
    usr: location.state,
    key: location.key
  };
}
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends$4({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
function createPath(_ref2) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref2;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window: window2 = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window2.history;
  let action = Action.Pop;
  let listener = null;
  function handlePop() {
    action = Action.Pop;
    if (listener) {
      listener({
        action,
        location: history.location
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    let historyState = getHistoryState(location);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    let historyState = getHistoryState(location);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location
      });
    }
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window2, to);
    },
    push,
    replace,
    go(n2) {
      return globalHistory.go(n2);
    }
  };
  return history;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i2 = 0; matches == null && i2 < branches.length; ++i2) {
    matches = matchRouteBranch(branches[i2], pathname);
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  routes.forEach((route, index) => {
    let meta = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(route.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".'));
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}
function rankRouteBranches(branches) {
  branches.sort((a2, b2) => a2.score !== b2.score ? b2.score - a2.score : compareIndexes(a2.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s2) => s2 === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s2) => !isSplat(s2)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a2, b2) {
  let siblings = a2.length === b2.length && a2.slice(0, -1).every((n2, i2) => n2 === b2[i2]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a2[a2.length - 1] - b2[b2.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i2 = 0; i2 < routesMeta.length; ++i2) {
    let meta = routesMeta[i2];
    let end = i2 === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_2, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else {
    regexpSource += end ? "\\/*$" : (
      // Otherwise, match a word boundary or a proceeding /. The word boundary restricts
      // parent routes to matching only their own words and nothing more, e.g. parent
      // route "/home" should not match "/home2".
      // Additionally, allow paths starting with `.`, `-`, `~`, and url-encoded entities,
      // but do not consume the character in the matched path so they can match against
      // nested paths.
      "(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)"
    );
  }
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined") console.warn(message);
    try {
      throw new Error(message);
    } catch (e2) {
    }
  }
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to = typeof toArg === "string" ? parsePath(toArg) : _extends$4({}, toArg);
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
class ErrorResponse {
  constructor(status, statusText, data) {
    this.status = status;
    this.statusText = statusText || "";
    this.data = data;
  }
}
function isRouteErrorResponse(e2) {
  return e2 instanceof ErrorResponse;
}
/**
 * React Router v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
const DataStaticRouterContext = /* @__PURE__ */ reactExports.createContext(null);
const DataRouterContext = /* @__PURE__ */ reactExports.createContext(null);
const DataRouterStateContext = /* @__PURE__ */ reactExports.createContext(null);
const NavigationContext = /* @__PURE__ */ reactExports.createContext(null);
const LocationContext = /* @__PURE__ */ reactExports.createContext(null);
const RouteContext = /* @__PURE__ */ reactExports.createContext({
  outlet: null,
  matches: []
});
const RouteErrorContext = /* @__PURE__ */ reactExports.createContext(null);
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0;
  return reactExports.useContext(LocationContext).location;
}
function useMatch(pattern) {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    pathname
  } = useLocation();
  return reactExports.useMemo(() => matchPath(pattern, pathname), [pathname, pattern]);
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || !match.route.index && match.pathnameBase !== matches[index - 1].pathnameBase);
}
function useNavigate() {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
  let activeRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current) return;
    if (typeof to === "number") {
      navigator2.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
  }, [basename, navigator2, routePathnamesJson, locationPathname]);
  return navigate;
}
const OutletContext = /* @__PURE__ */ reactExports.createContext(null);
function useOutlet(context) {
  let outlet = reactExports.useContext(RouteContext).outlet;
  if (outlet) {
    return /* @__PURE__ */ reactExports.createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }
  return outlet;
}
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
  return reactExports.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
function useRoutes(routes, locationArg) {
  !useInRouterContext() ? invariant(false) : void 0;
  let dataRouterStateContext = reactExports.useContext(DataRouterStateContext);
  let {
    matches: parentMatches
  } = reactExports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  routeMatch && routeMatch.route;
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });
  let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches, dataRouterStateContext || void 0);
  if (locationArg) {
    return /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
      value: {
        location: _extends$3({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorElement() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unhandled Thrown Error!"), /* @__PURE__ */ reactExports.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", {
    style: preStyles
  }, stack) : null, /* @__PURE__ */ reactExports.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ reactExports.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ reactExports.createElement("code", {
    style: codeStyles
  }, "errorElement"), " props on ", /* @__PURE__ */ reactExports.createElement("code", {
    style: codeStyles
  }, "<Route>")));
}
class RenderErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location) {
      return {
        error: props.error,
        location: props.location
      };
    }
    return {
      error: props.error || state.error,
      location: state.location
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ reactExports.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    }) : this.props.children;
  }
}
function RenderedRoute(_ref2) {
  let {
    routeContext,
    match,
    children
  } = _ref2;
  let dataStaticRouterContext = reactExports.useContext(DataStaticRouterContext);
  if (dataStaticRouterContext && match.route.errorElement) {
    dataStaticRouterContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (matches == null) {
    if (dataRouterState != null && dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]));
    !(errorIndex >= 0) ? invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null;
    let errorElement = dataRouterState ? match.route.errorElement || /* @__PURE__ */ reactExports.createElement(DefaultErrorElement, null) : null;
    let getChildren = () => /* @__PURE__ */ reactExports.createElement(RenderedRoute, {
      match,
      routeContext: {
        outlet,
        matches: parentMatches.concat(renderedMatches.slice(0, index + 1))
      }
    }, error ? errorElement : match.route.element !== void 0 ? match.route.element : outlet);
    return dataRouterState && (match.route.errorElement || index === 0) ? /* @__PURE__ */ reactExports.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      component: errorElement,
      error,
      children: getChildren()
    }) : getChildren();
  }, null);
}
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseLoaderData"] = "useLoaderData";
  DataRouterHook2["UseActionData"] = "useActionData";
  DataRouterHook2["UseRouteError"] = "useRouteError";
  DataRouterHook2["UseNavigation"] = "useNavigation";
  DataRouterHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterHook2["UseMatches"] = "useMatches";
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterHook || (DataRouterHook = {}));
function useDataRouterState(hookName) {
  let state = reactExports.useContext(DataRouterStateContext);
  !state ? invariant(false) : void 0;
  return state;
}
function useRouteError() {
  var _state$errors;
  let error = reactExports.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterHook.UseRouteError);
  let route = reactExports.useContext(RouteContext);
  let thisRoute = route.matches[route.matches.length - 1];
  if (error) {
    return error;
  }
  !route ? invariant(false) : void 0;
  !thisRoute.route.id ? invariant(false) : void 0;
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[thisRoute.route.id];
}
function Outlet(props) {
  return useOutlet(props.context);
}
function Route(_props) {
  invariant(false);
}
function Router(_ref4) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator: navigator2,
    static: staticProp = false
  } = _ref4;
  !!useInRouterContext() ? invariant(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = reactExports.useMemo(() => ({
    basename,
    navigator: navigator2,
    static: staticProp
  }), [basename, navigator2, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = reactExports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  if (location == null) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
    children,
    value: {
      location,
      navigationType
    }
  }));
}
function Routes(_ref5) {
  let {
    children,
    location
  } = _ref5;
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  let routes = dataRouterContext && !children ? dataRouterContext.router.routes : createRoutesFromChildren(children);
  return useRoutes(routes, location);
}
var AwaitRenderStatus;
(function(AwaitRenderStatus2) {
  AwaitRenderStatus2[AwaitRenderStatus2["pending"] = 0] = "pending";
  AwaitRenderStatus2[AwaitRenderStatus2["success"] = 1] = "success";
  AwaitRenderStatus2[AwaitRenderStatus2["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));
new Promise(() => {
});
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes = [];
  reactExports.Children.forEach(children, (element, index) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(element)) {
      return;
    }
    if (element.type === reactExports.Fragment) {
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, parentPath));
      return;
    }
    !(element.type === Route) ? invariant(false) : void 0;
    let treePath = [...parentPath, index];
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      hasErrorBoundary: element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}
/**
 * React Router DOM v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
function BrowserRouter(_ref2) {
  let {
    basename,
    children,
    window: window2
  } = _ref2;
  let historyRef = reactExports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window: window2,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setState] = reactExports.useState({
    action: history.action,
    location: history.location
  });
  reactExports.useLayoutEffect(() => history.listen(setState), [history]);
  return /* @__PURE__ */ reactExports.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
const Link = /* @__PURE__ */ reactExports.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to,
    preventScrollReset
  } = _ref4, rest = _objectWithoutPropertiesLoose$1(_ref4, _excluded);
  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ reactExports.createElement("a", _extends$2({}, rest, {
      href,
      onClick: reloadDocument ? onClick : handleClick,
      ref,
      target
    }))
  );
});
const NavLink = /* @__PURE__ */ reactExports.forwardRef(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5, rest = _objectWithoutPropertiesLoose$1(_ref5, _excluded2);
  let path = useResolvedPath(to);
  let match = useMatch({
    path: path.pathname,
    end,
    caseSensitive
  });
  let routerState = reactExports.useContext(DataRouterStateContext);
  let nextLocation = routerState == null ? void 0 : routerState.navigation.location;
  let nextPath = useResolvedPath(nextLocation || "");
  let nextMatch = reactExports.useMemo(() => nextLocation ? matchPath({
    path: path.pathname,
    end,
    caseSensitive
  }, nextPath.pathname) : null, [nextLocation, path.pathname, caseSensitive, end, nextPath.pathname]);
  let isPending = nextMatch != null;
  let isActive = match != null;
  let ariaCurrent = isActive ? ariaCurrentProp : void 0;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive,
      isPending
    });
  } else {
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp({
    isActive,
    isPending
  }) : styleProp;
  return /* @__PURE__ */ reactExports.createElement(Link, _extends$2({}, rest, {
    "aria-current": ariaCurrent,
    className,
    ref,
    style,
    to
  }), typeof children === "function" ? children({
    isActive,
    isPending
  }) : children);
});
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return reactExports.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}
const header__top = "_header__top_dxjzs_202";
const open$2 = "_open_dxjzs_224";
const styles$r = {
  header__top,
  open: open$2
};
const logo$1 = "/Shower-Partitions-APP/assets/logo-BmYQqIHg.webp";
const logo = "_logo_1wy1z_1";
const logo__img = "_logo__img_1wy1z_4";
const styles$q = {
  logo,
  logo__img
};
const Logo = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      className: styles$q.logo,
      to: "/",
      "aria-label": "Перейти на главную страницу",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: logo$1,
          className: styles$q.logo__img,
          alt: "Логотип DZ System - Душевые перегордки на заказ в Гомеле"
        }
      )
    }
  );
};
const adress = "_adress_embxh_1";
const adress__text = "_adress__text_embxh_12";
const adress__img = "_adress__img_embxh_15";
const styles$p = {
  adress,
  adress__text,
  adress__img
};
const SvgLocation$1 = (props) => /* @__PURE__ */ reactExports.createElement("svg", { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M290.61 375.83c81.2 4.67 142.41 25.54 142.41 50.57 0 28.45-79.23 51.54-177.02 51.54-97.76 0-177.02-23.09-177.02-51.54 0-24.74 59.8-45.39 139.57-50.41 14.51 23.1 27.37 43.69 35.88 59.03 8.8-15.88 21.72-36.41 36.18-59.19z", fill: "#bdc3c7" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M254.43 34.06c76.61 0 138.72 62.11 138.72 138.74 0 43.25-58.45 133.59-102.54 203.03-14.46 22.78-27.38 43.31-36.18 59.19-8.51-15.34-21.37-35.93-35.88-59.03-43.86-69.79-102.86-162.57-102.86-203.19 0-76.63 62.11-138.74 138.74-138.74zm61.98 133.51c0-34.16-27.84-62.01-61.98-62.01-34.16 0-62 27.85-62 62.01 0 34.14 27.84 61.98 62 61.98 34.14 0 61.98-27.84 61.98-61.98z", fill: "#e74c3c" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M256 487.94c-48.195 0-93.641-5.505-127.966-15.5C89.4 461.189 68.98 445.269 68.98 426.4c0-37.657 80.234-56.067 148.942-60.391 5.499-.356 10.262 3.84 10.608 9.353.347 5.512-3.84 10.262-9.353 10.608-38.04 2.394-72.477 8.52-96.969 17.249C97.683 411.961 88.98 421.17 88.98 426.4c0 5.139 9.403 16.574 44.646 26.837 32.558 9.481 76.018 14.703 122.374 14.703 46.367 0 89.831-5.222 122.385-14.703 35.234-10.262 44.635-21.697 44.635-26.837 0-13.463-47.356-35.662-132.984-40.587-5.514-.317-9.727-5.044-9.409-10.558.317-5.514 5.03-9.744 10.558-9.409 70.043 4.028 151.836 22.304 151.836 60.554 0 18.87-20.417 34.79-59.042 46.04-34.322 9.995-79.772 15.5-127.979 15.5z" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M254.43 445.019a10.002 10.002 0 01-8.745-5.148c-8.264-14.896-21.014-35.335-35.604-58.562l.001.002-3.384-5.384C161.697 304.348 105.69 215.266 105.69 172.8c0-82.016 66.725-148.74 148.74-148.74 82.004 0 148.72 66.724 148.72 148.74 0 44.584-52.718 127.539-99.231 200.729l-4.867 7.661c-14.474 22.802-27.164 42.956-35.875 58.676a9.998 9.998 0 01-8.744 5.153h-.003zm0-400.959c-70.988 0-128.74 57.752-128.74 128.74 0 36.702 56.607 126.74 97.94 192.483l3.386 5.386.001.002c10.663 16.975 19.905 31.758 27.414 44.363 7.845-13.144 17.339-28.185 27.735-44.563l4.872-7.669C327.6 298.977 383.15 211.566 383.15 172.8c0-70.988-57.744-128.74-128.72-128.74z" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M254.43 239.55c-39.701 0-72-32.29-72-71.98 0-39.707 32.299-72.01 72-72.01 39.69 0 71.98 32.303 71.98 72.01 0 39.69-32.29 71.98-71.98 71.98zm0-123.99c-28.673 0-52 23.332-52 52.01 0 28.662 23.327 51.98 52 51.98 28.662 0 51.98-23.318 51.98-51.98 0-28.679-23.318-52.01-51.98-52.01z" }));
const Adress = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$p.adress, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SvgLocation$1, { className: styles$p.adress__img, "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("address", { className: `${styles$p.adress__text} header__texts`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
      "Наш адрес:",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      " Беларусь, г.Гомель,",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      " ул. Гомельская 25"
    ] }) })
  ] });
};
const description = "_description_1sxwy_1";
const styles$o = {
  description
};
const Description = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${styles$o.description} header__texts`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Производство перегородок в Гомеле" }) });
};
const SvgWhatsapp = (props) => /* @__PURE__ */ reactExports.createElement("svg", { id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 58 58", style: {
  enableBackground: "new 0 0 58 58"
}, xmlSpace: "preserve", ...props }, /* @__PURE__ */ reactExports.createElement("g", null, /* @__PURE__ */ reactExports.createElement("path", { style: {
  fill: "#2CB742"
}, d: "M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5 S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z" }), /* @__PURE__ */ reactExports.createElement("path", { style: {
  fill: "#FFFFFF"
}, d: "M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42 c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242 c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169 c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097 c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z" })));
const SvgViber = (props) => /* @__PURE__ */ reactExports.createElement("svg", { width: 48, height: 48, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0Z", fill: "#7F4DA0" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M30.3941 20.9584C30.2774 20.0101 29.9859 19.2655 29.4683 18.6059C28.7961 17.7566 27.9372 17.2481 26.6655 16.9464C25.8367 16.7453 25.5019 16.7684 25.2022 17.0422C24.923 17.2987 24.8685 17.8129 25.0818 18.146C25.2319 18.3877 25.405 18.4742 25.8864 18.5687C26.5275 18.6867 26.9706 18.8398 27.3736 19.0702C28.229 19.5642 28.6274 20.3371 28.6701 21.5885C28.69 22.176 28.7408 22.3566 28.946 22.565C29.3263 22.9459 30.0032 22.8719 30.2904 22.416C30.3957 22.2442 30.4118 22.1694 30.4229 21.7705C30.4303 21.5235 30.4196 21.1558 30.3941 20.9584V20.9584Z", fill: "white" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M33.7446 22.0277C33.5757 19.1223 32.4393 16.7848 30.4055 15.1402C29.2596 14.216 27.8745 13.5806 26.3563 13.2716C25.8001 13.161 24.7762 13.0715 24.6005 13.1227C24.4347 13.1702 24.2003 13.3496 24.0958 13.512C23.9852 13.688 23.9603 14.081 24.0546 14.3083C24.2068 14.6883 24.4898 14.8226 25.2826 14.892C26.5047 14.9989 27.7652 15.4282 28.7176 16.0639C29.8049 16.7876 30.6693 17.7775 31.2284 18.9407C31.7116 19.9402 32.0087 21.3805 32.0005 22.6703C31.9977 23.1367 32.0698 23.4002 32.2573 23.5928C32.5405 23.8889 32.9533 23.9537 33.3176 23.757C33.7213 23.5447 33.8157 23.172 33.7446 22.0277V22.0277Z", fill: "white" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M37.4522 33.2163C37.3954 33.0502 37.2628 32.7941 37.1681 32.647C36.5712 31.7457 33.3645 29.2362 31.7635 28.4155C30.8493 27.9459 30.172 27.7894 29.6699 27.9363C29.1299 28.0882 28.8457 28.3396 27.941 29.4639C27.5763 29.9146 27.2021 30.3368 27.1026 30.4032C26.8563 30.574 26.3731 30.7116 26.0321 30.7116C25.2411 30.7068 23.8059 30.1945 22.7022 29.5208C21.8449 28.999 20.746 28.0645 19.9028 27.1394C18.9081 26.0531 18.2308 25.0948 17.6955 24.0132C17.004 22.6233 16.8287 21.7741 17.1176 21.1526C17.1887 20.9961 17.2835 20.8301 17.326 20.7779C17.3687 20.7305 17.814 20.3652 18.3065 19.9667C19.2729 19.1982 19.4292 19.0227 19.6091 18.4961C19.8365 17.8272 19.775 17.1441 19.4244 16.4563C19.1544 15.9344 18.4487 14.7959 17.9371 14.0606C17.2598 13.0929 15.5735 11.0246 15.2371 10.7446C14.6309 10.2513 13.8541 10.1659 12.9967 10.498C12.0921 10.849 10.3963 12.2153 9.67155 13.1688C9.01789 14.0322 8.76692 14.6441 8.72899 15.4505C8.69586 16.1147 8.75268 16.3898 9.1032 17.239C11.8457 23.8993 15.9382 29.2172 21.5607 33.4393C24.4974 35.6451 27.5431 37.3245 30.7025 38.4726C32.545 39.1414 33.3455 39.1746 34.2881 38.6244C34.686 38.3871 35.6712 37.3767 36.2207 36.6414C37.1301 35.4174 37.4665 34.853 37.5612 34.4023C37.6275 34.0939 37.5754 33.5579 37.4522 33.2163V33.2163Z", fill: "white" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M37.1555 22.6949C37.0948 21.0515 36.8181 19.7035 36.2411 18.2005C35.6715 16.7222 35.095 15.7574 34.0062 14.4526C32.9769 13.2292 32.1773 12.5306 30.9093 11.7531C29.1402 10.6697 26.9872 9.95272 24.5744 9.6512C23.7516 9.54582 23.5654 9.55335 23.313 9.72179C22.8238 10.0409 22.8303 10.8367 23.321 11.151C23.4835 11.251 23.6276 11.2875 24.2858 11.3736C25.2962 11.5096 25.9459 11.6378 26.7168 11.8482C29.7398 12.6745 32.0645 14.3637 33.6187 16.8712C34.9193 18.9611 35.4592 21.0513 35.3826 23.7208C35.3559 24.6232 35.3753 24.782 35.5132 24.9989C35.7774 25.403 36.4741 25.483 36.8315 25.1476C37.0539 24.9432 37.0958 24.7898 37.1396 24.0174C37.1606 23.6144 37.1651 23.0196 37.1555 22.6949V22.6949Z", fill: "white" }));
const SvgTelegram = (props) => /* @__PURE__ */ reactExports.createElement("svg", { id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 512 512", style: {
  enableBackground: "new 0 0 512 512"
}, xmlSpace: "preserve", ...props }, /* @__PURE__ */ reactExports.createElement("circle", { style: {
  fill: "#41B4E6"
}, cx: 255.997, cy: 256, r: 255.997 }), /* @__PURE__ */ reactExports.createElement("path", { style: {
  fill: "#0091C8"
}, d: "M512,256.003c0-6.238-0.235-12.419-0.673-18.546L405.228,131.36L106.772,248.759l114.191,114.192 l1.498,5.392l1.939-1.955l0.008,0.008l-1.947,1.947L348.778,494.66C444.298,457.5,512,364.663,512,256.003z" }), /* @__PURE__ */ reactExports.createElement("polygon", { style: {
  fill: "#FFFFFF"
}, points: "231.138,293.3 346.829,380.647 405.228,131.36 106.771,248.759 197.588,278.84 363.331,167.664 " }), /* @__PURE__ */ reactExports.createElement("polygon", { style: {
  fill: "#D2D2D7"
}, points: "197.588,278.84 222.461,368.344 231.138,293.3 363.331,167.664 " }), /* @__PURE__ */ reactExports.createElement("polygon", { style: {
  fill: "#B9B9BE"
}, points: "268.738,321.688 222.461,368.344 231.138,293.3 " }));
const SvgInstagram = (props) => /* @__PURE__ */ reactExports.createElement("svg", { enableBackground: "new 0 0 1024 1024", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ reactExports.createElement("circle", { cx: 512, cy: 512, fill: "#e4405f", r: 512 }), /* @__PURE__ */ reactExports.createElement("path", { d: "m512 256c-69.5 0-78.2.3-105.5 1.5-27.3 1.3-45.8 5.6-62.1 11.9-16.8 6.5-31.1 15.3-45.4 29.5s-23 28.5-29.5 45.4c-6.3 16.3-10.6 34.9-11.9 62.1-1.3 27.3-1.5 36-1.5 105.5s.3 78.2 1.5 105.5c1.3 27.2 5.6 45.8 11.9 62.1 6.5 16.8 15.3 31.1 29.5 45.4 14.2 14.2 28.5 23 45.4 29.5 16.3 6.3 34.9 10.6 62.1 11.9 27.3 1.3 36 1.5 105.5 1.5s78.2-.3 105.5-1.5c27.2-1.3 45.8-5.6 62.1-11.9 16.8-6.5 31.1-15.3 45.4-29.5 14.2-14.2 23-28.5 29.5-45.4 6.3-16.3 10.6-34.9 11.9-62.1 1.3-27.3 1.5-36 1.5-105.5s-.3-78.2-1.5-105.5c-1.3-27.2-5.6-45.8-11.9-62.1-6.5-16.8-15.3-31.1-29.5-45.4-14.2-14.2-28.5-23-45.4-29.5-16.3-6.3-34.9-10.6-62.1-11.9-27.3-1.2-36-1.5-105.5-1.5zm0 46.1c68.3 0 76.5.3 103.5 1.5 25 1.2 38.5 5.3 47.5 8.9 12 4.6 20.5 10.2 29.5 19.1 8.9 9 14.5 17.5 19.1 29.5 3.5 9 7.7 22.5 8.8 47.5 1.2 27 1.5 35.1 1.5 103.5s-.3 76.5-1.6 103.5c-1.3 25-5.5 38.5-9 47.5-4.8 12-10.2 20.5-19.2 29.5-8.9 8.9-17.6 14.5-29.4 19.1-9 3.5-22.7 7.7-47.7 8.8-27.2 1.2-35.2 1.5-103.7 1.5s-76.5-.3-103.7-1.6c-25-1.3-38.7-5.5-47.7-9-12.1-4.8-20.5-10.2-29.4-19.2-9-8.9-14.7-17.6-19.2-29.4-3.5-9-7.7-22.7-9-47.7-1-26.9-1.3-35.2-1.3-103.3 0-68.2.3-76.5 1.3-103.7 1.3-25 5.4-38.7 9-47.7 4.5-12.2 10.2-20.5 19.2-29.5 8.9-8.9 17.3-14.7 29.4-19.2 9-3.5 22.4-7.7 47.4-9 27.2-1 35.2-1.3 103.7-1.3zm0 78.4c-72.6 0-131.5 58.9-131.5 131.5s58.9 131.5 131.5 131.5 131.5-58.9 131.5-131.5-58.9-131.5-131.5-131.5zm0 216.8c-47.1 0-85.3-38.2-85.3-85.3s38.2-85.3 85.3-85.3 85.3 38.2 85.3 85.3-38.2 85.3-85.3 85.3zm167.4-221.9c0 17-13.8 30.7-30.7 30.7-17 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7c16.9-.1 30.7 13.7 30.7 30.7z", fill: "#fff" }));
const socials$1 = "_socials_nnexh_202";
const socials__link = "_socials__link_nnexh_212";
const scale$1 = "_scale_nnexh_1";
const blink$1 = "_blink_nnexh_1";
const scaleAndRotate$1 = "_scaleAndRotate_nnexh_1";
const wave$1 = "_wave_nnexh_1";
const glare$1 = "_glare_nnexh_1";
const firstLineOpenAnimation$1 = "_firstLineOpenAnimation_nnexh_1";
const secondLineOpenAnimation$1 = "_secondLineOpenAnimation_nnexh_1";
const thirdLineOpenAnimation$1 = "_thirdLineOpenAnimation_nnexh_1";
const firstLineCloseAnimation$1 = "_firstLineCloseAnimation_nnexh_1";
const secondLineCloseAnimation$1 = "_secondLineCloseAnimation_nnexh_1";
const rotateBurgerCloseThird$1 = "_rotateBurgerCloseThird_nnexh_1";
const navShow$1 = "_navShow_nnexh_1";
const navHide$1 = "_navHide_nnexh_1";
const scaleAndFilterPriceImage$1 = "_scaleAndFilterPriceImage_nnexh_1";
const scaleAndRotateQuestionsImg$1 = "_scaleAndRotateQuestionsImg_nnexh_1";
const styles$n = {
  socials: socials$1,
  "socials-header": "_socials-header_nnexh_205",
  "socials-footer": "_socials-footer_nnexh_208",
  socials__link,
  scale: scale$1,
  "socials__link-sizes": "_socials__link-sizes_nnexh_230",
  "socials__link-contacts-sizes": "_socials__link-contacts-sizes_nnexh_234",
  blink: blink$1,
  scaleAndRotate: scaleAndRotate$1,
  wave: wave$1,
  glare: glare$1,
  firstLineOpenAnimation: firstLineOpenAnimation$1,
  secondLineOpenAnimation: secondLineOpenAnimation$1,
  thirdLineOpenAnimation: thirdLineOpenAnimation$1,
  firstLineCloseAnimation: firstLineCloseAnimation$1,
  secondLineCloseAnimation: secondLineCloseAnimation$1,
  rotateBurgerCloseThird: rotateBurgerCloseThird$1,
  navShow: navShow$1,
  navHide: navHide$1,
  scaleAndFilterPriceImage: scaleAndFilterPriceImage$1,
  scaleAndRotateQuestionsImg: scaleAndRotateQuestionsImg$1
};
const SocialLinks = ({ gap, sizes }) => {
  const socialLinksData = [
    { element: SvgWhatsapp, href: "#", ariaLabel: "Связаться с нами в Whatsapp" },
    { element: SvgViber, href: "#", ariaLabel: "Связаться с нами в Viber" },
    { element: SvgTelegram, href: "#", ariaLabel: "Связаться с нами в Telegram" },
    {
      element: SvgInstagram,
      href: "#",
      ariaLabel: "Связаться с нами в Instagram"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: `${styles$n.socials} ${styles$n[gap]}`,
      "aria-label": "Наши социальные сети",
      children: socialLinksData.map((link) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            className: `${styles$n.socials__link} ${styles$n[sizes]}`,
            href: link.href,
            target: "_blank",
            "aria-label": link.ariaLabel,
            rel: "noopener noreferrer",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(link.element, { "aria-hidden": "true" })
          },
          link.ariaLabel
        );
      })
    }
  );
};
const socials = "_socials_18s0k_1";
const styles$m = {
  socials
};
const Socials = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$m.socials, "aria-labelledby": "online-question", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `header__animation header__texts`, id: "online-question", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Задайте вопрос, мы онлайн:" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SocialLinks, { gap: "socials-header", sizes: "socials__link-sizes" })
  ] });
};
const callUs = "_callUs_jik9e_202";
const callUs__link = "_callUs__link_jik9e_218";
const callUs__btn = "_callUs__btn_jik9e_247";
const styles$l = {
  callUs,
  callUs__link,
  callUs__btn
};
const CallUs = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$l.callUs, "aria-labelledby": "working-time", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "p",
      {
        className: "header__texts header__animation",
        "aria-labelledby": "working-time-description",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { "aria-hidden": true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Звоните Пн-Пт" }),
            " 9 - 18"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: "working-time-description", className: "sr-only", children: "Мы работаем с понедельника по пятницу с 9 утра до 6 часов вечера" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        className: styles$l.callUs__link,
        href: "tel:+375447625856",
        "aria-label": "Связаться с нами по номеру телефона",
        title: "Позвонить по номеру +375 44 762 58 56",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "+375 (44) 762-58-56" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: styles$l.callUs__btn,
        "aria-label": "Нажмите, чтобы заказать обратный звонок",
        children: "Заказать звонок"
      }
    )
  ] });
};
const burger = "_burger_1wr0h_202";
const burger__line = "_burger__line_1wr0h_227";
const open$1 = "_open_1wr0h_260";
const close = "_close_1wr0h_282";
const styles$k = {
  burger,
  burger__line,
  "first-line": "_first-line_1wr0h_256",
  "second-line": "_second-line_1wr0h_256",
  "third-line": "_third-line_1wr0h_256",
  open: open$1,
  close
};
const Burger = ({ isBurgerActive, onBurgerClick, burgerRef }) => {
  const location = useLocation();
  reactExports.useEffect(() => {
    const header = document.querySelector(".header");
    if (location.pathname === "/delivery" || location.pathname === "/price" || location.pathname === "/article" && !isBurgerActive) {
      header.classList.add("black");
    } else {
      header.classList.remove("black");
    }
  }, [isBurgerActive, location]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      className: `${styles$k.burger} ${isBurgerActive ? styles$k.open : styles$k.close}`,
      onClick: onBurgerClick,
      ref: burgerRef,
      "aria-label": isBurgerActive ? "Закрыть меню сайта, меню навигации сайта открыто." : "Открыть меню сайта, меню навигации сайта закрыто.",
      "aria-expanded": isBurgerActive,
      "aria-controls": "burger-open-nav",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `${styles$k.burger__line} ${styles$k["first-line"]}`,
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `${styles$k.burger__line} ${styles$k["second-line"]}`,
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `${styles$k.burger__line} ${styles$k["third-line"]}`,
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
};
const HeaderTop = ({ isBurgerActive, onBurgerClick, burgerRef }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `${styles$r.header__top} ${isBurgerActive ? styles$r.open : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Description, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Adress, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Socials, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CallUs, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Burger,
          {
            isBurgerActive,
            onBurgerClick,
            burgerRef
          }
        )
      ]
    }
  );
};
const nav = "_nav_fg1nz_202";
const nav_fixed = "_nav_fixed_fg1nz_206";
const nav_open = "_nav_open_fg1nz_231";
const navShow = "_navShow_fg1nz_1";
const nav_hide = "_nav_hide_fg1nz_234";
const navHide = "_navHide_fg1nz_1";
const nav__list = "_nav__list_fg1nz_238";
const nav__item = "_nav__item_fg1nz_259";
const nav__menu = "_nav__menu_fg1nz_333";
const nav__menu_open = "_nav__menu_open_fg1nz_358";
const blink = "_blink_fg1nz_1";
const scale = "_scale_fg1nz_1";
const scaleAndRotate = "_scaleAndRotate_fg1nz_1";
const wave = "_wave_fg1nz_1";
const glare = "_glare_fg1nz_1";
const firstLineOpenAnimation = "_firstLineOpenAnimation_fg1nz_1";
const secondLineOpenAnimation = "_secondLineOpenAnimation_fg1nz_1";
const thirdLineOpenAnimation = "_thirdLineOpenAnimation_fg1nz_1";
const firstLineCloseAnimation = "_firstLineCloseAnimation_fg1nz_1";
const secondLineCloseAnimation = "_secondLineCloseAnimation_fg1nz_1";
const rotateBurgerCloseThird = "_rotateBurgerCloseThird_fg1nz_1";
const scaleAndFilterPriceImage = "_scaleAndFilterPriceImage_fg1nz_1";
const scaleAndRotateQuestionsImg = "_scaleAndRotateQuestionsImg_fg1nz_1";
const styles$j = {
  nav,
  nav_fixed,
  nav_open,
  navShow,
  nav_hide,
  navHide,
  nav__list,
  nav__item,
  "nav__item-link": "_nav__item-link_fg1nz_267",
  "nav__item-arrow": "_nav__item-arrow_fg1nz_268",
  "nav__link-wrapper": "_nav__link-wrapper_fg1nz_294",
  nav__menu,
  nav__menu_open,
  "nav__menu-item": "_nav__menu-item_fg1nz_374",
  "nav__menu-link": "_nav__menu-link_fg1nz_377",
  "nav__dropdown-item": "_nav__dropdown-item_fg1nz_410",
  "nav__dropdown-item_open": "_nav__dropdown-item_open_fg1nz_421",
  "nav__item-arrow_open": "_nav__item-arrow_open_fg1nz_441",
  blink,
  scale,
  scaleAndRotate,
  wave,
  glare,
  firstLineOpenAnimation,
  secondLineOpenAnimation,
  thirdLineOpenAnimation,
  firstLineCloseAnimation,
  secondLineCloseAnimation,
  rotateBurgerCloseThird,
  scaleAndFilterPriceImage,
  scaleAndRotateQuestionsImg
};
const DropdownMenu = ({
  styles: styles2,
  actions: {
    onBurgerClick,
    isMenuOpen,
    handleMenuActions,
    handleCloseMenuClick
  },
  menuItems,
  menuName,
  links
}) => {
  const navMenuRef = reactExports.useRef();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "ul",
    {
      className: `${styles2.nav__menu} ${isMenuOpen[menuName] ? styles2["nav__menu_open"] : ""}`,
      id: `menu-${menuName}`,
      ref: navMenuRef,
      children: menuItems.map((item, i2) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: styles2["nav__menu-item"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          NavLink,
          {
            className: styles2["nav__menu-link"],
            onFocus: () => handleMenuActions(true),
            onClick: (e2) => {
              handleCloseMenuClick();
              onBurgerClick();
              e2.target.blur();
            },
            onBlur: () => {
              if (i2 === menuItems.length - 1) {
                navMenuRef.current.classList.remove(styles2["nav__menu_open"]);
                handleCloseMenuClick();
              }
            },
            to: links[i2],
            children: item
          }
        ) }, item);
      })
    }
  );
};
const isDesktop = () => window.innerWidth > 768;
const isHoverSupported = () => window.matchMedia("(hover: hover)").matches;
const DropdownItem = ({
  styles: styles2,
  actions: { onBurgerClick, isMenuOpen, setIsMenuOpen },
  menuName,
  title,
  menuItems,
  links
}) => {
  const handleMenuActions = (value) => setIsMenuOpen((prev) => ({ ...prev, [menuName]: value }));
  const handleActionsMenuMouseMove = (value) => {
    if (isDesktop() && isHoverSupported()) {
      handleMenuActions(value);
    }
  };
  const handleToggleMenuClick = (e2) => {
    if (e2.target.closest(`.${styles2["nav__link-wrapper"]}`)) {
      setTimeout(() => {
        handleMenuActions(!isMenuOpen[menuName]);
      }, 0);
    }
  };
  const handleCloseMenuClick = () => handleMenuActions(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "li",
    {
      className: `${styles2["nav__item"]} ${styles2["nav__dropdown-item"]} ${isMenuOpen[menuName] ? styles2["nav__dropdown-item_open"] : ""}`,
      onMouseEnter: () => handleActionsMenuMouseMove(true),
      onMouseLeave: () => handleActionsMenuMouseMove(false),
      onMouseDown: (e2) => handleToggleMenuClick(e2),
      "aria-expanded": isMenuOpen[menuName],
      "aria-haspopup": "true",
      "aria-controls": `menu-${menuName}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles2["nav__link-wrapper"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { id: `menu-desc-${menuName}`, className: "sr-only", children: [
            "Выпадающее меню с ",
            menuItems.length,
            " ссылками"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            NavLink,
            {
              className: styles2["nav__item-link"],
              "aria-describedby": `menu-desc-${menuName}`,
              onFocus: () => handleCloseMenuClick(),
              children: title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `${styles2["nav__item-arrow"]} ${isMenuOpen[menuName] ? styles2["nav__item-arrow_open"] : ""}`,
              "aria-hidden": "true",
              children: "▼"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DropdownMenu,
          {
            styles: styles2,
            actions: {
              onBurgerClick,
              isMenuOpen,
              handleMenuActions,
              handleCloseMenuClick
            },
            menuName,
            menuItems,
            links
          }
        )
      ]
    }
  );
};
const NavItems = ({ styles: styles2, onBurgerClick }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: styles2.nav__item, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      NavLink,
      {
        end: true,
        to: ".",
        className: styles2["nav__item-link"],
        onClick: onBurgerClick,
        children: "Главная"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: styles2.nav__item, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      NavLink,
      {
        className: styles2["nav__item-link"],
        onClick: onBurgerClick,
        to: "portfolio",
        children: "Портфолио"
      }
    ) })
  ] });
};
const Nav = ({ isBurgerActive, onBurgerClick }) => {
  const [isFixed, setIsFixed] = reactExports.useState(false);
  const [isMenuOpen, setIsMenuOpen] = reactExports.useState({
    customer: false,
    company: false
  });
  const animationFrameId = reactExports.useRef(null);
  const handleScroll = () => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    animationFrameId.current = requestAnimationFrame(() => {
      setIsFixed((prev) => {
        const shouldFix = window.scrollY > 120;
        return prev !== shouldFix ? shouldFix : prev;
      });
    });
  };
  reactExports.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "nav",
    {
      className: `${styles$j.nav} ${isBurgerActive ? styles$j["nav_open"] : styles$j["nav_hide"]} ${isFixed ? styles$j["nav_fixed"] : ""}`,
      "aria-label": "Основная навигация",
      id: "burger-open-nav",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: styles$j.nav__list, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(NavItems, { styles: styles$j, onBurgerClick }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DropdownItem,
          {
            styles: styles$j,
            actions: {
              onBurgerClick,
              isMenuOpen,
              setIsMenuOpen
            },
            menuName: "customer",
            title: "Покупателям",
            menuItems: ["Доставка и оплата", "Стоимость", "Полезные статьи"],
            links: ["delivery", "price", "article"]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DropdownItem,
          {
            styles: styles$j,
            actions: {
              onBurgerClick,
              isMenuOpen,
              setIsMenuOpen
            },
            menuName: "company",
            title: "О компании",
            menuItems: ["Наши контакты"],
            links: ["contacts"]
          }
        )
      ] })
    }
  );
};
const body = document.body;
const disableBodyScrollIncludeScrollbar = () => {
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  body.style.overflow = "hidden";
  body.style.paddingRight = `${scrollBarWidth}px`;
};
const enableBodyScrollIncludeScrollbar = () => {
  body.style.overflow = "";
  body.style.paddingRight = "";
};
const disableBodyScroll = () => {
  body.style.overflow = "hidden";
};
const enableBodyScroll = () => {
  body.style.overflow = "";
};
function _objectWithoutPropertiesLoose(r2, e2) {
  if (null == r2) return {};
  var t2 = {};
  for (var n2 in r2) if ({}.hasOwnProperty.call(r2, n2)) {
    if (-1 !== e2.indexOf(n2)) continue;
    t2[n2] = r2[n2];
  }
  return t2;
}
function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function(n2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var t2 = arguments[e2];
      for (var r2 in t2) ({}).hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
    }
    return n2;
  }, _extends$1.apply(null, arguments);
}
var propTypes = { exports: {} };
var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}
var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var ReactPropTypesSecret = /* @__PURE__ */ requireReactPropTypesSecret();
  function emptyFunction() {
  }
  function emptyFunctionWithReset() {
  }
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        return;
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      err.name = "Invariant Violation";
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    }
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithThrowingShims;
}
var hasRequiredPropTypes;
function requirePropTypes() {
  if (hasRequiredPropTypes) return propTypes.exports;
  hasRequiredPropTypes = 1;
  {
    propTypes.exports = /* @__PURE__ */ requireFactoryWithThrowingShims()();
  }
  return propTypes.exports;
}
var propTypesExports = /* @__PURE__ */ requirePropTypes();
const PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
var FOCUS_GROUP = "data-focus-lock";
var FOCUS_DISABLED = "data-focus-lock-disabled";
var FOCUS_ALLOW = "data-no-focus-lock";
var FOCUS_AUTO = "data-autofocus-inside";
var FOCUS_NO_AUTOFOCUS = "data-no-autofocus";
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}
function useCallbackRef(initialValue, callback) {
  var ref = reactExports.useState(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef(null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}
var hiddenGuard = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e2 = new Error(message);
  return e2.name = "SuppressedError", e2.error = error, e2.suppressed = suppressed, e2;
};
function ItoI(a2) {
  return a2;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x2) {
          return x2 !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x2) {
          return cb(x2);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x2) {
          pendingQueue.push(x2);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}
var mediumFocus = createMedium({}, function(_ref2) {
  var target = _ref2.target, currentTarget = _ref2.currentTarget;
  return {
    target,
    currentTarget
  };
});
var mediumBlur = createMedium();
var mediumEffect = createMedium();
var mediumSidecar = createSidecarMedium({
  async: true,
  ssr: typeof document !== "undefined"
});
var focusScope = /* @__PURE__ */ reactExports.createContext(void 0);
var emptyArray = [];
var FocusLock = /* @__PURE__ */ reactExports.forwardRef(function FocusLockUI(props, parentRef) {
  var _extends2;
  var _useState = reactExports.useState(), realObserved = _useState[0], setObserved = _useState[1];
  var observed = reactExports.useRef();
  var isActive = reactExports.useRef(false);
  var originalFocusedElement = reactExports.useRef(null);
  var _useState2 = reactExports.useState({}), update = _useState2[1];
  var children = props.children, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$noFocusGuards = props.noFocusGuards, noFocusGuards = _props$noFocusGuards === void 0 ? false : _props$noFocusGuards, _props$persistentFocu = props.persistentFocus, persistentFocus = _props$persistentFocu === void 0 ? false : _props$persistentFocu, _props$crossFrame = props.crossFrame, crossFrame = _props$crossFrame === void 0 ? true : _props$crossFrame, _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus;
  props.allowTextSelection;
  var group = props.group, className = props.className, whiteList = props.whiteList, hasPositiveIndices = props.hasPositiveIndices, _props$shards = props.shards, shards = _props$shards === void 0 ? emptyArray : _props$shards, _props$as = props.as, Container = _props$as === void 0 ? "div" : _props$as, _props$lockProps = props.lockProps, containerProps = _props$lockProps === void 0 ? {} : _props$lockProps, SideCar = props.sideCar, _props$returnFocus = props.returnFocus, shouldReturnFocus = _props$returnFocus === void 0 ? false : _props$returnFocus, focusOptions = props.focusOptions, onActivationCallback = props.onActivation, onDeactivationCallback = props.onDeactivation;
  var _useState3 = reactExports.useState({}), id = _useState3[0];
  var onActivation = reactExports.useCallback(function(_ref2) {
    var captureFocusRestore2 = _ref2.captureFocusRestore;
    if (!originalFocusedElement.current) {
      var _document;
      var activeElement = (_document = document) == null ? void 0 : _document.activeElement;
      originalFocusedElement.current = activeElement;
      if (activeElement !== document.body) {
        originalFocusedElement.current = captureFocusRestore2(activeElement);
      }
    }
    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }
    isActive.current = true;
    update();
  }, [onActivationCallback]);
  var onDeactivation = reactExports.useCallback(function() {
    isActive.current = false;
    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
    update();
  }, [onDeactivationCallback]);
  var returnFocus = reactExports.useCallback(function(allowDefer) {
    var focusRestore = originalFocusedElement.current;
    if (focusRestore) {
      var returnFocusTo = (typeof focusRestore === "function" ? focusRestore() : focusRestore) || document.body;
      var howToReturnFocus = typeof shouldReturnFocus === "function" ? shouldReturnFocus(returnFocusTo) : shouldReturnFocus;
      if (howToReturnFocus) {
        var returnFocusOptions = typeof howToReturnFocus === "object" ? howToReturnFocus : void 0;
        originalFocusedElement.current = null;
        if (allowDefer) {
          Promise.resolve().then(function() {
            return returnFocusTo.focus(returnFocusOptions);
          });
        } else {
          returnFocusTo.focus(returnFocusOptions);
        }
      }
    }
  }, [shouldReturnFocus]);
  var onFocus3 = reactExports.useCallback(function(event) {
    if (isActive.current) {
      mediumFocus.useMedium(event);
    }
  }, []);
  var onBlur3 = mediumBlur.useMedium;
  var setObserveNode = reactExports.useCallback(function(newObserved) {
    if (observed.current !== newObserved) {
      observed.current = newObserved;
      setObserved(newObserved);
    }
  }, []);
  var lockProps = _extends$1((_extends2 = {}, _extends2[FOCUS_DISABLED] = disabled && "disabled", _extends2[FOCUS_GROUP] = group, _extends2), containerProps);
  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== "tail";
  var mergedRef = useMergeRefs([parentRef, setObserveNode]);
  var focusScopeValue = reactExports.useMemo(function() {
    return {
      observed,
      shards,
      enabled: !disabled,
      active: isActive.current
    };
  }, [disabled, isActive.current, shards, realObserved]);
  return /* @__PURE__ */ React.createElement(reactExports.Fragment, null, hasLeadingGuards && [
    /* @__PURE__ */ React.createElement("div", {
      key: "guard-first",
      "data-focus-guard": true,
      tabIndex: disabled ? -1 : 0,
      style: hiddenGuard
    }),
    hasPositiveIndices ? /* @__PURE__ */ React.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": true,
      tabIndex: disabled ? -1 : 1,
      style: hiddenGuard
    }) : null
  ], !disabled && /* @__PURE__ */ React.createElement(SideCar, {
    id,
    sideCar: mediumSidecar,
    observed: realObserved,
    disabled,
    persistentFocus,
    crossFrame,
    autoFocus,
    whiteList,
    shards,
    onActivation,
    onDeactivation,
    returnFocus,
    focusOptions,
    noFocusGuards
  }), /* @__PURE__ */ React.createElement(Container, _extends$1({
    ref: mergedRef
  }, lockProps, {
    className,
    onBlur: onBlur3,
    onFocus: onFocus3
  }), /* @__PURE__ */ React.createElement(focusScope.Provider, {
    value: focusScopeValue
  }, children)), hasTailingGuards && /* @__PURE__ */ React.createElement("div", {
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: hiddenGuard
  }));
});
FocusLock.propTypes = {};
function _setPrototypeOf(t2, e2) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
    return t3.__proto__ = e3, t3;
  }, _setPrototypeOf(t2, e2);
}
function _inheritsLoose(t2, o2) {
  t2.prototype = Object.create(o2.prototype), t2.prototype.constructor = t2, _setPrototypeOf(t2, o2);
}
function _typeof$1(o2) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$1(o2);
}
function toPrimitive(t2, r2) {
  if ("object" != _typeof$1(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2);
    if ("object" != _typeof$1(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function toPropertyKey(t2) {
  var i2 = toPrimitive(t2, "string");
  return "symbol" == _typeof$1(i2) ? i2 : i2 + "";
}
function _defineProperty(e2, r2, t2) {
  return (r2 = toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[r2] = t2, e2;
}
function withSideEffect$1(reducePropsToState3, handleStateChangeOnClient2) {
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
  }
  return function wrap(WrappedComponent) {
    var mountedInstances = [];
    var state;
    function emitChange() {
      state = reducePropsToState3(mountedInstances.map(function(instance) {
        return instance.props;
      }));
      handleStateChangeOnClient2(state);
    }
    var SideEffect = /* @__PURE__ */ function(_PureComponent) {
      _inheritsLoose(SideEffect2, _PureComponent);
      function SideEffect2() {
        return _PureComponent.apply(this, arguments) || this;
      }
      SideEffect2.peek = function peek() {
        return state;
      };
      var _proto = SideEffect2.prototype;
      _proto.componentDidMount = function componentDidMount() {
        mountedInstances.push(this);
        emitChange();
      };
      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };
      _proto.render = function render() {
        return /* @__PURE__ */ React.createElement(WrappedComponent, this.props);
      };
      return SideEffect2;
    }(reactExports.PureComponent);
    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");
    return SideEffect;
  };
}
var toArray = function(a2) {
  var ret = Array(a2.length);
  for (var i2 = 0; i2 < a2.length; ++i2) {
    ret[i2] = a2[i2];
  }
  return ret;
};
var asArray = function(a2) {
  return Array.isArray(a2) ? a2 : [a2];
};
var getFirst = function(a2) {
  return Array.isArray(a2) ? a2[0] : a2;
};
var isElementHidden = function(node) {
  if (node.nodeType !== Node.ELEMENT_NODE) {
    return false;
  }
  var computedStyle = window.getComputedStyle(node, null);
  if (!computedStyle || !computedStyle.getPropertyValue) {
    return false;
  }
  return computedStyle.getPropertyValue("display") === "none" || computedStyle.getPropertyValue("visibility") === "hidden";
};
var getParentNode = function(node) {
  return node.parentNode && node.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    node.parentNode.host
  ) : node.parentNode;
};
var isTopNode = function(node) {
  return node === document || node && node.nodeType === Node.DOCUMENT_NODE;
};
var isInert = function(node) {
  return node.hasAttribute("inert");
};
var isVisibleUncached = function(node, checkParent) {
  return !node || isTopNode(node) || !isElementHidden(node) && !isInert(node) && checkParent(getParentNode(node));
};
var isVisibleCached = function(visibilityCache, node) {
  var cached = visibilityCache.get(node);
  if (cached !== void 0) {
    return cached;
  }
  var result = isVisibleUncached(node, isVisibleCached.bind(void 0, visibilityCache));
  visibilityCache.set(node, result);
  return result;
};
var isAutoFocusAllowedUncached = function(node, checkParent) {
  return node && !isTopNode(node) ? isAutoFocusAllowed(node) ? checkParent(getParentNode(node)) : false : true;
};
var isAutoFocusAllowedCached = function(cache, node) {
  var cached = cache.get(node);
  if (cached !== void 0) {
    return cached;
  }
  var result = isAutoFocusAllowedUncached(node, isAutoFocusAllowedCached.bind(void 0, cache));
  cache.set(node, result);
  return result;
};
var getDataset = function(node) {
  return node.dataset;
};
var isHTMLButtonElement = function(node) {
  return node.tagName === "BUTTON";
};
var isHTMLInputElement = function(node) {
  return node.tagName === "INPUT";
};
var isRadioElement = function(node) {
  return isHTMLInputElement(node) && node.type === "radio";
};
var notHiddenInput = function(node) {
  return !((isHTMLInputElement(node) || isHTMLButtonElement(node)) && (node.type === "hidden" || node.disabled));
};
var isAutoFocusAllowed = function(node) {
  var attribute = node.getAttribute(FOCUS_NO_AUTOFOCUS);
  return ![true, "true", ""].includes(attribute);
};
var isGuard = function(node) {
  var _a;
  return Boolean(node && ((_a = getDataset(node)) === null || _a === void 0 ? void 0 : _a.focusGuard));
};
var isNotAGuard = function(node) {
  return !isGuard(node);
};
var isDefined = function(x2) {
  return Boolean(x2);
};
var tabSort = function(a2, b2) {
  var aTab = Math.max(0, a2.tabIndex);
  var bTab = Math.max(0, b2.tabIndex);
  var tabDiff = aTab - bTab;
  var indexDiff = a2.index - b2.index;
  if (tabDiff) {
    if (!aTab) {
      return 1;
    }
    if (!bTab) {
      return -1;
    }
  }
  return tabDiff || indexDiff;
};
var getTabIndex = function(node) {
  if (node.tabIndex < 0) {
    if (!node.hasAttribute("tabindex")) {
      return 0;
    }
  }
  return node.tabIndex;
};
var orderByTabIndex = function(nodes, filterNegative, keepGuards) {
  return toArray(nodes).map(function(node, index) {
    var tabIndex = getTabIndex(node);
    return {
      node,
      index,
      tabIndex: keepGuards && tabIndex === -1 ? (node.dataset || {}).focusGuard ? 0 : -1 : tabIndex
    };
  }).filter(function(data) {
    return !filterNegative || data.tabIndex >= 0;
  }).sort(tabSort);
};
var tabbables = [
  "button:enabled",
  "select:enabled",
  "textarea:enabled",
  "input:enabled",
  // elements with explicit roles will also use explicit tabindex
  // '[role="button"]',
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[tabindex]",
  "[contenteditable]",
  "[autofocus]"
];
var queryTabbables = tabbables.join(",");
var queryGuardTabbables = "".concat(queryTabbables, ", [data-focus-guard]");
var getFocusablesWithShadowDom = function(parent, withGuards) {
  return toArray((parent.shadowRoot || parent).children).reduce(function(acc, child) {
    return acc.concat(child.matches(withGuards ? queryGuardTabbables : queryTabbables) ? [child] : [], getFocusablesWithShadowDom(child));
  }, []);
};
var getFocusablesWithIFrame = function(parent, withGuards) {
  var _a;
  if (parent instanceof HTMLIFrameElement && ((_a = parent.contentDocument) === null || _a === void 0 ? void 0 : _a.body)) {
    return getFocusables([parent.contentDocument.body], withGuards);
  }
  return [parent];
};
var getFocusables = function(parents, withGuards) {
  return parents.reduce(function(acc, parent) {
    var _a;
    var focusableWithShadowDom = getFocusablesWithShadowDom(parent, withGuards);
    var focusableWithIframes = (_a = []).concat.apply(_a, focusableWithShadowDom.map(function(node) {
      return getFocusablesWithIFrame(node, withGuards);
    }));
    return acc.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      focusableWithIframes,
      // add if node is tabbable itself
      parent.parentNode ? toArray(parent.parentNode.querySelectorAll(queryTabbables)).filter(function(node) {
        return node === parent;
      }) : []
    );
  }, []);
};
var getParentAutofocusables = function(parent) {
  var parentFocus = parent.querySelectorAll("[".concat(FOCUS_AUTO, "]"));
  return toArray(parentFocus).map(function(node) {
    return getFocusables([node]);
  }).reduce(function(acc, nodes) {
    return acc.concat(nodes);
  }, []);
};
var filterFocusable = function(nodes, visibilityCache) {
  return toArray(nodes).filter(function(node) {
    return isVisibleCached(visibilityCache, node);
  }).filter(function(node) {
    return notHiddenInput(node);
  });
};
var filterAutoFocusable = function(nodes, cache) {
  if (cache === void 0) {
    cache = /* @__PURE__ */ new Map();
  }
  return toArray(nodes).filter(function(node) {
    return isAutoFocusAllowedCached(cache, node);
  });
};
var getTabbableNodes = function(topNodes, visibilityCache, withGuards) {
  return orderByTabIndex(filterFocusable(getFocusables(topNodes, withGuards), visibilityCache), true, withGuards);
};
var getFocusableNodes = function(topNodes, visibilityCache) {
  return orderByTabIndex(filterFocusable(getFocusables(topNodes), visibilityCache), false);
};
var parentAutofocusables = function(topNode, visibilityCache) {
  return filterFocusable(getParentAutofocusables(topNode), visibilityCache);
};
var contains = function(scope, element) {
  if (scope.shadowRoot) {
    return contains(scope.shadowRoot, element);
  } else {
    if (Object.getPrototypeOf(scope).contains !== void 0 && Object.getPrototypeOf(scope).contains.call(scope, element)) {
      return true;
    }
    return toArray(scope.children).some(function(child) {
      var _a;
      if (child instanceof HTMLIFrameElement) {
        var iframeBody = (_a = child.contentDocument) === null || _a === void 0 ? void 0 : _a.body;
        if (iframeBody) {
          return contains(iframeBody, element);
        }
        return false;
      }
      return contains(child, element);
    });
  }
};
var filterNested = function(nodes) {
  var contained = /* @__PURE__ */ new Set();
  var l2 = nodes.length;
  for (var i2 = 0; i2 < l2; i2 += 1) {
    for (var j2 = i2 + 1; j2 < l2; j2 += 1) {
      var position = nodes[i2].compareDocumentPosition(nodes[j2]);
      if ((position & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) {
        contained.add(j2);
      }
      if ((position & Node.DOCUMENT_POSITION_CONTAINS) > 0) {
        contained.add(i2);
      }
    }
  }
  return nodes.filter(function(_2, index) {
    return !contained.has(index);
  });
};
var getTopParent = function(node) {
  return node.parentNode ? getTopParent(node.parentNode) : node;
};
var getAllAffectedNodes = function(node) {
  var nodes = asArray(node);
  return nodes.filter(Boolean).reduce(function(acc, currentNode) {
    var group = currentNode.getAttribute(FOCUS_GROUP);
    acc.push.apply(acc, group ? filterNested(toArray(getTopParent(currentNode).querySelectorAll("[".concat(FOCUS_GROUP, '="').concat(group, '"]:not([').concat(FOCUS_DISABLED, '="disabled"])')))) : [currentNode]);
    return acc;
  }, []);
};
var safeProbe = function(cb) {
  try {
    return cb();
  } catch (e2) {
    return void 0;
  }
};
var getActiveElement = function(inDocument) {
  if (inDocument === void 0) {
    inDocument = document;
  }
  if (!inDocument || !inDocument.activeElement) {
    return void 0;
  }
  var activeElement = inDocument.activeElement;
  return activeElement.shadowRoot ? getActiveElement(activeElement.shadowRoot) : activeElement instanceof HTMLIFrameElement && safeProbe(function() {
    return activeElement.contentWindow.document;
  }) ? getActiveElement(activeElement.contentWindow.document) : activeElement;
};
var focusInFrame = function(frame, activeElement) {
  return frame === activeElement;
};
var focusInsideIframe = function(topNode, activeElement) {
  return Boolean(toArray(topNode.querySelectorAll("iframe")).some(function(node) {
    return focusInFrame(node, activeElement);
  }));
};
var focusInside = function(topNode, activeElement) {
  if (activeElement === void 0) {
    activeElement = getActiveElement(getFirst(topNode).ownerDocument);
  }
  if (!activeElement || activeElement.dataset && activeElement.dataset.focusGuard) {
    return false;
  }
  return getAllAffectedNodes(topNode).some(function(node) {
    return contains(node, activeElement) || focusInsideIframe(node, activeElement);
  });
};
var focusIsHidden = function(inDocument) {
  if (inDocument === void 0) {
    inDocument = document;
  }
  var activeElement = getActiveElement(inDocument);
  if (!activeElement) {
    return false;
  }
  return toArray(inDocument.querySelectorAll("[".concat(FOCUS_ALLOW, "]"))).some(function(node) {
    return contains(node, activeElement);
  });
};
var findSelectedRadio = function(node, nodes) {
  return nodes.filter(isRadioElement).filter(function(el) {
    return el.name === node.name;
  }).filter(function(el) {
    return el.checked;
  })[0] || node;
};
var correctNode = function(node, nodes) {
  if (isRadioElement(node) && node.name) {
    return findSelectedRadio(node, nodes);
  }
  return node;
};
var correctNodes = function(nodes) {
  var resultSet = /* @__PURE__ */ new Set();
  nodes.forEach(function(node) {
    return resultSet.add(correctNode(node, nodes));
  });
  return nodes.filter(function(node) {
    return resultSet.has(node);
  });
};
var pickFirstFocus = function(nodes) {
  if (nodes[0] && nodes.length > 1) {
    return correctNode(nodes[0], nodes);
  }
  return nodes[0];
};
var pickFocusable = function(nodes, node) {
  return nodes.indexOf(correctNode(node, nodes));
};
var NEW_FOCUS = "NEW_FOCUS";
var newFocus = function(innerNodes, innerTabbables, outerNodes, activeElement, lastNode) {
  var cnt = innerNodes.length;
  var firstFocus = innerNodes[0];
  var lastFocus = innerNodes[cnt - 1];
  var isOnGuard = isGuard(activeElement);
  if (activeElement && innerNodes.indexOf(activeElement) >= 0) {
    return void 0;
  }
  var activeIndex = activeElement !== void 0 ? outerNodes.indexOf(activeElement) : -1;
  var lastIndex = lastNode ? outerNodes.indexOf(lastNode) : activeIndex;
  var lastNodeInside = lastNode ? innerNodes.indexOf(lastNode) : -1;
  if (activeIndex === -1) {
    if (lastNodeInside !== -1) {
      return lastNodeInside;
    }
    return NEW_FOCUS;
  }
  if (lastNodeInside === -1) {
    return NEW_FOCUS;
  }
  var indexDiff = activeIndex - lastIndex;
  var firstNodeIndex = outerNodes.indexOf(firstFocus);
  var lastNodeIndex = outerNodes.indexOf(lastFocus);
  var correctedNodes = correctNodes(outerNodes);
  var currentFocusableIndex = activeElement !== void 0 ? correctedNodes.indexOf(activeElement) : -1;
  var previousFocusableIndex = lastNode ? correctedNodes.indexOf(lastNode) : currentFocusableIndex;
  var tabbableNodes = correctedNodes.filter(function(node) {
    return node.tabIndex >= 0;
  });
  var currentTabbableIndex = activeElement !== void 0 ? tabbableNodes.indexOf(activeElement) : -1;
  var previousTabbableIndex = lastNode ? tabbableNodes.indexOf(lastNode) : currentTabbableIndex;
  var focusIndexDiff = currentTabbableIndex >= 0 && previousTabbableIndex >= 0 ? (
    // old/new are tabbables, measure distance in tabbable space
    previousTabbableIndex - currentTabbableIndex
  ) : (
    // or else measure in focusable space
    previousFocusableIndex - currentFocusableIndex
  );
  if (!indexDiff && lastNodeInside >= 0) {
    return lastNodeInside;
  }
  if (innerTabbables.length === 0) {
    return lastNodeInside;
  }
  var returnFirstNode = pickFocusable(innerNodes, innerTabbables[0]);
  var returnLastNode = pickFocusable(innerNodes, innerTabbables[innerTabbables.length - 1]);
  if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnLastNode;
  }
  if (activeIndex >= lastNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnFirstNode;
  }
  if (indexDiff && Math.abs(focusIndexDiff) > 1) {
    return lastNodeInside;
  }
  if (activeIndex <= firstNodeIndex) {
    return returnLastNode;
  }
  if (activeIndex > lastNodeIndex) {
    return returnFirstNode;
  }
  if (indexDiff) {
    if (Math.abs(indexDiff) > 1) {
      return lastNodeInside;
    }
    return (cnt + lastNodeInside + indexDiff) % cnt;
  }
  return void 0;
};
var findAutoFocused = function(autoFocusables) {
  return function(node) {
    var _a;
    var autofocus = (_a = getDataset(node)) === null || _a === void 0 ? void 0 : _a.autofocus;
    return (
      // @ts-expect-error
      node.autofocus || //
      autofocus !== void 0 && autofocus !== "false" || //
      autoFocusables.indexOf(node) >= 0
    );
  };
};
var pickAutofocus = function(nodesIndexes, orderedNodes, groups) {
  var nodes = nodesIndexes.map(function(_a) {
    var node = _a.node;
    return node;
  });
  var autoFocusable = filterAutoFocusable(nodes.filter(findAutoFocused(groups)));
  if (autoFocusable && autoFocusable.length) {
    return pickFirstFocus(autoFocusable);
  }
  return pickFirstFocus(filterAutoFocusable(orderedNodes));
};
var getParents = function(node, parents) {
  if (parents === void 0) {
    parents = [];
  }
  parents.push(node);
  if (node.parentNode) {
    getParents(node.parentNode.host || node.parentNode, parents);
  }
  return parents;
};
var getCommonParent = function(nodeA, nodeB) {
  var parentsA = getParents(nodeA);
  var parentsB = getParents(nodeB);
  for (var i2 = 0; i2 < parentsA.length; i2 += 1) {
    var currentParent = parentsA[i2];
    if (parentsB.indexOf(currentParent) >= 0) {
      return currentParent;
    }
  }
  return false;
};
var getTopCommonParent = function(baseActiveElement, leftEntry, rightEntries) {
  var activeElements = asArray(baseActiveElement);
  var leftEntries = asArray(leftEntry);
  var activeElement = activeElements[0];
  var topCommon = false;
  leftEntries.filter(Boolean).forEach(function(entry) {
    topCommon = getCommonParent(topCommon || entry, entry) || topCommon;
    rightEntries.filter(Boolean).forEach(function(subEntry) {
      var common = getCommonParent(activeElement, subEntry);
      if (common) {
        if (!topCommon || contains(common, topCommon)) {
          topCommon = common;
        } else {
          topCommon = getCommonParent(common, topCommon);
        }
      }
    });
  });
  return topCommon;
};
var allParentAutofocusables = function(entries, visibilityCache) {
  return entries.reduce(function(acc, node) {
    return acc.concat(parentAutofocusables(node, visibilityCache));
  }, []);
};
var reorderNodes = function(srcNodes, dstNodes) {
  var remap = /* @__PURE__ */ new Map();
  dstNodes.forEach(function(entity) {
    return remap.set(entity.node, entity);
  });
  return srcNodes.map(function(node) {
    return remap.get(node);
  }).filter(isDefined);
};
var focusSolver = function(topNode, lastNode) {
  var activeElement = getActiveElement(asArray(topNode).length > 0 ? document : getFirst(topNode).ownerDocument);
  var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
  var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);
  var visibilityCache = /* @__PURE__ */ new Map();
  var anyFocusable = getFocusableNodes(entries, visibilityCache);
  var innerElements = anyFocusable.filter(function(_a) {
    var node = _a.node;
    return isNotAGuard(node);
  });
  if (!innerElements[0]) {
    return void 0;
  }
  var outerNodes = getFocusableNodes([commonParent], visibilityCache).map(function(_a) {
    var node = _a.node;
    return node;
  });
  var orderedInnerElements = reorderNodes(outerNodes, innerElements);
  var innerFocusables = orderedInnerElements.map(function(_a) {
    var node = _a.node;
    return node;
  });
  var innerTabbable = orderedInnerElements.filter(function(_a) {
    var tabIndex = _a.tabIndex;
    return tabIndex >= 0;
  }).map(function(_a) {
    var node = _a.node;
    return node;
  });
  var newId = newFocus(innerFocusables, innerTabbable, outerNodes, activeElement, lastNode);
  if (newId === NEW_FOCUS) {
    var focusNode = (
      // first try only tabbable, and the fallback to all focusable, as long as at least one element should be picked for focus
      pickAutofocus(anyFocusable, innerTabbable, allParentAutofocusables(entries, visibilityCache)) || pickAutofocus(anyFocusable, innerFocusables, allParentAutofocusables(entries, visibilityCache))
    );
    if (focusNode) {
      return { node: focusNode };
    } else {
      console.warn("focus-lock: cannot find any node to move focus into");
      return void 0;
    }
  }
  if (newId === void 0) {
    return newId;
  }
  return orderedInnerElements[newId];
};
var expandFocusableNodes = function(topNode) {
  var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
  var commonParent = getTopCommonParent(topNode, topNode, entries);
  var outerNodes = orderByTabIndex(getFocusables([commonParent], true), true, true);
  var innerElements = getFocusables(entries, false);
  return outerNodes.map(function(_a) {
    var node = _a.node, index = _a.index;
    return {
      node,
      index,
      lockItem: innerElements.indexOf(node) >= 0,
      guard: isGuard(node)
    };
  });
};
var focusOn = function(target, focusOptions) {
  if (!target) {
    return;
  }
  if ("focus" in target) {
    target.focus(focusOptions);
  }
  if ("contentWindow" in target && target.contentWindow) {
    target.contentWindow.focus();
  }
};
var guardCount = 0;
var lockDisabled = false;
var moveFocusInside = function(topNode, lastNode, options) {
  if (options === void 0) {
    options = {};
  }
  var focusable = focusSolver(topNode, lastNode);
  if (lockDisabled) {
    return;
  }
  if (focusable) {
    if (guardCount > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting");
      lockDisabled = true;
      setTimeout(function() {
        lockDisabled = false;
      }, 1);
      return;
    }
    guardCount++;
    focusOn(focusable.node, options.focusOptions);
    guardCount--;
  }
};
function weakRef(value) {
  if (!value)
    return null;
  if (typeof WeakRef === "undefined") {
    return function() {
      return value || null;
    };
  }
  var w2 = value ? new WeakRef(value) : null;
  return function() {
    return (w2 === null || w2 === void 0 ? void 0 : w2.deref()) || null;
  };
}
var recordElementLocation = function(element) {
  if (!element) {
    return null;
  }
  var stack = [];
  var currentElement = element;
  while (currentElement && currentElement !== document.body) {
    stack.push({
      current: weakRef(currentElement),
      parent: weakRef(currentElement.parentElement),
      left: weakRef(currentElement.previousElementSibling),
      right: weakRef(currentElement.nextElementSibling)
    });
    currentElement = currentElement.parentElement;
  }
  return {
    element: weakRef(element),
    stack,
    ownerDocument: element.ownerDocument
  };
};
var restoreFocusTo = function(location) {
  var _a, _b, _c, _d, _e;
  if (!location) {
    return void 0;
  }
  var stack = location.stack, ownerDocument = location.ownerDocument;
  var visibilityCache = /* @__PURE__ */ new Map();
  for (var _i = 0, stack_1 = stack; _i < stack_1.length; _i++) {
    var line = stack_1[_i];
    var parent_1 = (_a = line.parent) === null || _a === void 0 ? void 0 : _a.call(line);
    if (parent_1 && ownerDocument.contains(parent_1)) {
      var left = (_b = line.left) === null || _b === void 0 ? void 0 : _b.call(line);
      var savedCurrent = line.current();
      var current = parent_1.contains(savedCurrent) ? savedCurrent : void 0;
      var right = (_c = line.right) === null || _c === void 0 ? void 0 : _c.call(line);
      var focusables = getTabbableNodes([parent_1], visibilityCache);
      var aim = (
        // that is element itself
        (_e = (_d = current !== null && current !== void 0 ? current : (
          // or something in it's place
          left === null || left === void 0 ? void 0 : left.nextElementSibling
        )) !== null && _d !== void 0 ? _d : (
          // or somebody to the right, still close enough
          right
        )) !== null && _e !== void 0 ? _e : (
          // or somebody to the left, something?
          left
        )
      );
      while (aim) {
        for (var _f = 0, focusables_1 = focusables; _f < focusables_1.length; _f++) {
          var focusable = focusables_1[_f];
          if (aim === null || aim === void 0 ? void 0 : aim.contains(focusable.node)) {
            return focusable.node;
          }
        }
        aim = aim.nextElementSibling;
      }
      if (focusables.length) {
        return focusables[0].node;
      }
    }
  }
  return void 0;
};
var captureFocusRestore = function(targetElement) {
  var location = recordElementLocation(targetElement);
  return function() {
    return restoreFocusTo(location);
  };
};
var getRelativeFocusable = function(element, scope, useTabbables) {
  if (!element || !scope) {
    console.error("no element or scope given");
    return {};
  }
  var shards = asArray(scope);
  if (shards.every(function(shard) {
    return !contains(shard, element);
  })) {
    console.error("Active element is not contained in the scope");
    return {};
  }
  var focusables = useTabbables ? getTabbableNodes(shards, /* @__PURE__ */ new Map()) : getFocusableNodes(shards, /* @__PURE__ */ new Map());
  var current = focusables.findIndex(function(_a) {
    var node = _a.node;
    return node === element;
  });
  if (current === -1) {
    return void 0;
  }
  return {
    prev: focusables[current - 1],
    next: focusables[current + 1],
    first: focusables[0],
    last: focusables[focusables.length - 1]
  };
};
var getBoundary = function(shards, useTabbables) {
  var set = useTabbables ? getTabbableNodes(asArray(shards), /* @__PURE__ */ new Map()) : getFocusableNodes(asArray(shards), /* @__PURE__ */ new Map());
  return {
    first: set[0],
    last: set[set.length - 1]
  };
};
var defaultOptions = function(options) {
  return Object.assign({
    scope: document.body,
    cycle: true,
    onlyTabbable: true
  }, options);
};
var moveFocus = function(fromElement, options, cb) {
  if (options === void 0) {
    options = {};
  }
  var newOptions = defaultOptions(options);
  var solution = getRelativeFocusable(fromElement, newOptions.scope, newOptions.onlyTabbable);
  if (!solution) {
    return;
  }
  var target = cb(solution, newOptions.cycle);
  if (target) {
    focusOn(target.node, newOptions.focusOptions);
  }
};
var focusNextElement = function(fromElement, options) {
  if (options === void 0) {
    options = {};
  }
  moveFocus(fromElement, options, function(_a, cycle) {
    var next = _a.next, first = _a.first;
    return next || cycle && first;
  });
};
var focusPrevElement = function(fromElement, options) {
  if (options === void 0) {
    options = {};
  }
  moveFocus(fromElement, options, function(_a, cycle) {
    var prev = _a.prev, last = _a.last;
    return prev || cycle && last;
  });
};
var pickBoundary = function(scope, options, what) {
  var _a;
  var boundary = getBoundary(scope, (_a = options.onlyTabbable) !== null && _a !== void 0 ? _a : true);
  var node = boundary[what];
  if (node) {
    focusOn(node.node, options.focusOptions);
  }
};
var focusFirstElement = function(scope, options) {
  if (options === void 0) {
    options = {};
  }
  pickBoundary(scope, options, "first");
};
var focusLastElement = function(scope, options) {
  if (options === void 0) {
    options = {};
  }
  pickBoundary(scope, options, "last");
};
function deferAction(action) {
  setTimeout(action, 1);
}
var extractRef = function extractRef2(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var focusOnBody = function focusOnBody2() {
  return document && document.activeElement === document.body;
};
var isFreeFocus = function isFreeFocus2() {
  return focusOnBody() || focusIsHidden();
};
var lastActiveTrap = null;
var lastActiveFocus = null;
var tryRestoreFocus = function tryRestoreFocus2() {
  return null;
};
var lastPortaledElement = null;
var focusWasOutsideWindow = false;
var windowFocused = false;
var defaultWhitelist = function defaultWhitelist2() {
  return true;
};
var focusWhitelisted = function focusWhitelisted2(activeElement) {
  return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};
var recordPortal = function recordPortal2(observerNode, portaledElement) {
  lastPortaledElement = {
    observerNode,
    portaledElement
  };
};
var focusIsPortaledPair = function focusIsPortaledPair2(element) {
  return lastPortaledElement && lastPortaledElement.portaledElement === element;
};
function autoGuard(startIndex, end, step, allNodes) {
  var lastGuard = null;
  var i2 = startIndex;
  do {
    var item = allNodes[i2];
    if (item.guard) {
      if (item.node.dataset.focusAutoGuard) {
        lastGuard = item;
      }
    } else if (item.lockItem) {
      if (i2 !== startIndex) {
        return;
      }
      lastGuard = null;
    } else {
      break;
    }
  } while ((i2 += step) !== end);
  if (lastGuard) {
    lastGuard.node.tabIndex = 0;
  }
}
var focusWasOutside = function focusWasOutside2(crossFrameOption) {
  if (crossFrameOption) {
    return Boolean(focusWasOutsideWindow);
  }
  return focusWasOutsideWindow === "meanwhile";
};
var checkInHost = function checkInHost2(check, el, boundary) {
  return el && (el.host === check && (!el.activeElement || boundary.contains(el.activeElement)) || el.parentNode && checkInHost2(check, el.parentNode, boundary));
};
var withinHost = function withinHost2(activeElement, workingArea) {
  return workingArea.some(function(area) {
    return checkInHost(activeElement, area, area);
  });
};
var getNodeFocusables = function getNodeFocusables2(nodes) {
  return getFocusableNodes(nodes, /* @__PURE__ */ new Map());
};
var isNotFocusable = function isNotFocusable2(node) {
  return !getNodeFocusables([node.parentNode]).some(function(el) {
    return el.node === node;
  });
};
var activateTrap = function activateTrap2() {
  var result = false;
  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap, observed = _lastActiveTrap.observed, persistentFocus = _lastActiveTrap.persistentFocus, autoFocus = _lastActiveTrap.autoFocus, shards = _lastActiveTrap.shards, crossFrame = _lastActiveTrap.crossFrame, focusOptions = _lastActiveTrap.focusOptions, noFocusGuards = _lastActiveTrap.noFocusGuards;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    if (focusOnBody() && lastActiveFocus && lastActiveFocus !== document.body) {
      if (!document.body.contains(lastActiveFocus) || isNotFocusable(lastActiveFocus)) {
        var newTarget = tryRestoreFocus();
        if (newTarget) {
          newTarget.focus();
        }
      }
    }
    var activeElement = document && document.activeElement;
    if (workingNode) {
      var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));
      var shouldForceRestoreFocus = function shouldForceRestoreFocus2() {
        if (!focusWasOutside(crossFrame) || !noFocusGuards || !lastActiveFocus || windowFocused) {
          return false;
        }
        var nodes = getNodeFocusables(workingArea);
        var lastIndex = nodes.findIndex(function(_ref2) {
          var node = _ref2.node;
          return node === lastActiveFocus;
        });
        return lastIndex === 0 || lastIndex === nodes.length - 1;
      };
      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || shouldForceRestoreFocus() || !isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !(focusInside(workingArea) || activeElement && withinHost(activeElement, workingArea) || focusIsPortaledPair(activeElement))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              if (activeElement.blur) {
                activeElement.blur();
              }
              document.body.focus();
            } else {
              result = moveFocusInside(workingArea, lastActiveFocus, {
                focusOptions
              });
              lastPortaledElement = {};
            }
          }
          lastActiveFocus = document && document.activeElement;
          if (lastActiveFocus !== document.body) {
            tryRestoreFocus = captureFocusRestore(lastActiveFocus);
          }
          focusWasOutsideWindow = false;
        }
      }
      if (document && activeElement !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
        var newActiveElement = document && document.activeElement;
        var allNodes = expandFocusableNodes(workingArea);
        var focusedIndex = allNodes.map(function(_ref2) {
          var node = _ref2.node;
          return node;
        }).indexOf(newActiveElement);
        if (focusedIndex > -1) {
          allNodes.filter(function(_ref3) {
            var guard = _ref3.guard, node = _ref3.node;
            return guard && node.dataset.focusAutoGuard;
          }).forEach(function(_ref4) {
            var node = _ref4.node;
            return node.removeAttribute("tabIndex");
          });
          autoGuard(focusedIndex, allNodes.length, 1, allNodes);
          autoGuard(focusedIndex, -1, -1, allNodes);
        }
      }
    }
  }
  return result;
};
var onTrap = function onTrap2(event) {
  if (activateTrap() && event) {
    event.stopPropagation();
    event.preventDefault();
  }
};
var onBlur = function onBlur2() {
  return deferAction(activateTrap);
};
var onFocus = function onFocus2(event) {
  var source = event.target;
  var currentNode = event.currentTarget;
  if (!currentNode.contains(source)) {
    recordPortal(currentNode, source);
  }
};
var FocusWatcher = function FocusWatcher2() {
  return null;
};
var onWindowFocus = function onWindowFocus2() {
  windowFocused = true;
};
var onWindowBlur = function onWindowBlur2() {
  windowFocused = false;
  focusWasOutsideWindow = "just";
  deferAction(function() {
    focusWasOutsideWindow = "meanwhile";
  });
};
var attachHandler = function attachHandler2() {
  document.addEventListener("focusin", onTrap);
  document.addEventListener("focusout", onBlur);
  window.addEventListener("focus", onWindowFocus);
  window.addEventListener("blur", onWindowBlur);
};
var detachHandler = function detachHandler2() {
  document.removeEventListener("focusin", onTrap);
  document.removeEventListener("focusout", onBlur);
  window.removeEventListener("focus", onWindowFocus);
  window.removeEventListener("blur", onWindowBlur);
};
function reducePropsToState$1(propsList) {
  return propsList.filter(function(_ref6) {
    var disabled = _ref6.disabled;
    return !disabled;
  });
}
var focusLockAPI = {
  moveFocusInside,
  focusInside,
  focusNextElement,
  focusPrevElement,
  focusFirstElement,
  focusLastElement,
  captureFocusRestore
};
function handleStateChangeOnClient(traps) {
  var trap = traps.slice(-1)[0];
  if (trap && !lastActiveTrap) {
    attachHandler();
  }
  var lastTrap = lastActiveTrap;
  var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
  lastActiveTrap = trap;
  if (lastTrap && !sameTrap) {
    lastTrap.onDeactivation();
    if (!traps.filter(function(_ref7) {
      var id = _ref7.id;
      return id === lastTrap.id;
    }).length) {
      lastTrap.returnFocus(!trap);
    }
  }
  if (trap) {
    lastActiveFocus = null;
    if (!sameTrap || lastTrap.observed !== trap.observed) {
      trap.onActivation(focusLockAPI);
    }
    activateTrap();
    deferAction(activateTrap);
  } else {
    detachHandler();
    lastActiveFocus = null;
  }
}
mediumFocus.assignSyncMedium(onFocus);
mediumBlur.assignMedium(onBlur);
mediumEffect.assignMedium(function(cb) {
  return cb(focusLockAPI);
});
const FocusTrap = withSideEffect$1(reducePropsToState$1, handleStateChangeOnClient)(FocusWatcher);
var FocusLockCombination = /* @__PURE__ */ reactExports.forwardRef(function FocusLockUICombination(props, ref) {
  return /* @__PURE__ */ React.createElement(FocusLock, _extends$1({
    sideCar: FocusTrap,
    ref
  }, props));
});
var _ref = FocusLock.propTypes || {};
_ref.sideCar;
_objectWithoutPropertiesLoose(_ref, ["sideCar"]);
FocusLockCombination.propTypes = {};
const isMobile = () => window.innerWidth <= 768;
const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = reactExports.useState(false);
  const [hasBurgerOpen, setHasBurgerOpen] = reactExports.useState(false);
  const burgerRef = reactExports.useRef(null);
  const handleBurgerClick = () => {
    if (isMobile()) {
      setIsBurgerActive((prev) => !prev);
      if (!hasBurgerOpen) {
        setHasBurgerOpen(true);
      }
    }
  };
  const handleCloseBurgerOnEsc = (e2) => {
    if (isMobile() && isBurgerActive && e2.code === "Escape") {
      setIsBurgerActive(false);
    }
  };
  reactExports.useEffect(() => {
    var _a;
    if (hasBurgerOpen) {
      (_a = burgerRef == null ? void 0 : burgerRef.current) == null ? void 0 : _a.focus();
    }
  }, [isBurgerActive, hasBurgerOpen]);
  reactExports.useEffect(() => {
    if (isBurgerActive) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
    return () => enableBodyScroll();
  }, [isBurgerActive]);
  reactExports.useEffect(() => {
    let prevWidth = window.innerWidth;
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (isBurgerActive && prevWidth <= 768 && currentWidth > 768) {
        enableBodyScroll();
      } else if (isBurgerActive && prevWidth > 768 && currentWidth <= 768) {
        disableBodyScroll();
      }
      prevWidth = currentWidth;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isBurgerActive]);
  const HeaderContent = /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "header", onKeyDown: handleCloseBurgerOnEsc, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HeaderTop,
      {
        onBurgerClick: handleBurgerClick,
        isBurgerActive,
        burgerRef
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Nav,
      {
        isBurgerActive,
        onBurgerClick: handleBurgerClick
      }
    )
  ] }) });
  return isMobile() && isBurgerActive ? /* @__PURE__ */ jsxRuntimeExports.jsx(FocusLockCombination, { children: HeaderContent }) : HeaderContent;
};
const footer = "_footer_1hra3_1";
const footer__wrapper = "_footer__wrapper_1hra3_13";
const styles$i = {
  footer,
  footer__wrapper
};
const benefitsData = [
  {
    id: "benefits_0",
    text: "Работаем под ключ"
  },
  {
    id: "benefits_1",
    text: "Опытные монтажники"
  },
  {
    id: "benefits_2",
    text: "Бесплатный 3D проект"
  },
  {
    id: "benefits_3",
    text: "Без предоплаты"
  },
  {
    id: "benefits_4",
    text: "Гарантия 18 месяцев"
  },
  {
    id: "benefits_5",
    text: "Беспроцентная рассрочка"
  }
];
const SvgCheck = (props) => /* @__PURE__ */ reactExports.createElement("svg", { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", fill: "rgb(33, 178, 36)", ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" }));
const benefits__title = "_benefits__title_1fd7g_1";
const benefits__wrapper = "_benefits__wrapper_1fd7g_17";
const benefits__item = "_benefits__item_1fd7g_21";
const styles$h = {
  benefits__title,
  benefits__wrapper,
  benefits__item
};
const Benefits = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$h.benefits__wrapper, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: styles$h.benefits__title, children: "Преимущества" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: styles$h.benefits__list, children: benefitsData.map(({ id, text }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: styles$h.benefits__item, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SvgCheck, { className: "footer__icon", "aria-hidden": "true" }),
        text
      ] }, id);
    }) })
  ] });
};
const SvgLocation = (props) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", ...props }, /* @__PURE__ */ reactExports.createElement("g", { fill: "rgb(33, 178, 36)" }, /* @__PURE__ */ reactExports.createElement("path", { d: "M16 0C10.477 0 6 4.477 6 10c0 7 10 22 10 22s10-15 10-22c0-5.523-4.479-10-10-10zm.93 17.941c-.306.026-.605.059-.93.059s-.625-.033-.93-.059C11.09 17.48 8 14.104 8 10a8 8 0 018-8c4.415 0 8 3.581 8 8 0 4.104-3.094 7.48-7.07 7.941z" }), /* @__PURE__ */ reactExports.createElement("circle", { fill: "", cx: 16, cy: 10, r: 4 })));
const SvgTime = (props) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 485.213 485.212", ...props }, /* @__PURE__ */ reactExports.createElement("path", { fill: "rgb(33, 178, 36)", d: "M242.607,0C108.629,0,0.001,108.628,0.001,242.606c0,133.976,108.628,242.606,242.606,242.606 c133.978,0,242.604-108.631,242.604-242.606C485.212,108.628,376.585,0,242.607,0z M257.771,454.116v-29.557h-30.327v29.557 c-104.925-7.458-188.883-91.419-196.346-196.344h29.554v-30.327H31.098c7.463-104.928,91.421-188.886,196.346-196.349v29.554 h30.327V31.097c104.926,7.462,188.882,91.421,196.344,196.349h-29.552v30.327h29.552 C446.652,362.697,362.696,446.658,257.771,454.116z M354.226,178.163c2.072,3.615,0.83,8.266-2.782,10.368l-80.092,46.227 c0.691,2.577,1.582,5.066,1.582,7.848c0,16.762-13.581,30.324-30.326,30.324c-16.75,0-30.327-13.562-30.327-30.324l-82.299-47.503 c-7.257-4.203-9.743-13.474-5.554-20.729c4.174-7.285,13.459-9.771,20.715-5.565l82.775,47.798 c4.411-2.487,9.239-4.324,14.69-4.324c8.471,0,16.092,3.494,21.604,9.122l79.648-46.024 C347.416,173.277,352.064,174.521,354.226,178.163z" }));
const SvgCall = (props) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 477.156 477.156", ...props }, /* @__PURE__ */ reactExports.createElement("path", { fill: "rgb(33, 178, 36)", d: "M475.009,380.316l-2.375-7.156c-5.625-16.719-24.062-34.156-41-38.75l-62.688-17.125c-17-4.625-41.25,1.594-53.688,14.031 l-22.688,22.688c-82.453-22.28-147.109-86.938-169.359-169.375L145.9,161.94c12.438-12.438,18.656-36.656,14.031-53.656 l-17.094-62.719c-4.625-16.969-22.094-35.406-38.781-40.969L96.9,2.19c-16.719-5.563-40.563,0.063-53,12.5L9.962,48.659 C3.899,54.69,0.024,71.94,0.024,72.003c-1.187,107.75,41.063,211.562,117.281,287.781 c76.031,76.031,179.454,118.219,286.891,117.313c0.562,0,18.312-3.813,24.375-9.845l33.938-33.938 C474.946,420.878,480.571,397.035,475.009,380.316z" }));
const SvgMail = (props) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 485.211 485.211", ...props }, /* @__PURE__ */ reactExports.createElement("path", { fill: "rgb(33, 178, 36)", d: "M485.211,363.906c0,10.637-2.992,20.498-7.785,29.174L324.225,221.67l151.54-132.584 c5.895,9.355,9.446,20.344,9.446,32.219V363.906z M242.606,252.793l210.863-184.5c-8.653-4.737-18.397-7.642-28.908-7.642H60.651 c-10.524,0-20.271,2.905-28.889,7.642L242.606,252.793z M301.393,241.631l-48.809,42.734c-2.855,2.487-6.41,3.729-9.978,3.729 c-3.57,0-7.125-1.242-9.98-3.729l-48.82-42.736L28.667,415.23c9.299,5.834,20.197,9.329,31.983,9.329h363.911 c11.784,0,22.687-3.495,31.983-9.329L301.393,241.631z M9.448,89.085C3.554,98.44,0,109.429,0,121.305v242.602 c0,10.637,2.978,20.498,7.789,29.174l153.183-171.44L9.448,89.085z" }));
const SvgQuestion = (props) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 559.393 559.393", ...props }, /* @__PURE__ */ reactExports.createElement("path", { style: {
  fill: "rgb(33, 178, 36)"
}, d: "M324.45,502.477c0-7.752-1.431-15.096-4.284-22.029c-2.856-6.938-6.938-12.954-12.24-18.057 c-5.304-5.1-11.424-9.18-18.36-12.237c-6.936-3.063-14.279-4.593-22.031-4.593s-15.096,1.53-22.032,4.593 c-6.936,3.06-12.954,7.14-18.054,12.237c-5.1,5.103-9.078,11.118-11.934,18.057c-2.856,6.936-4.284,14.277-4.284,22.029 c0,7.753,1.428,15.099,4.284,22.032c2.856,6.938,6.834,12.954,11.934,18.055c5.1,5.102,11.118,9.182,18.054,12.239 c6.936,3.063,14.28,4.59,22.032,4.59s15.096-1.527,22.031-4.59c6.938-3.06,13.059-7.14,18.36-12.239 c5.304-5.101,9.384-11.116,12.24-18.055C323.021,517.573,324.45,510.229,324.45,502.477z M271.818,420.469h-4.896 c-13.056-1.632-23.766-7.548-32.13-17.748c-8.364-10.197-11.934-21.828-10.71-34.884c2.448-22.438,8.058-44.166,16.83-65.178 c8.772-21.013,20.094-39.679,33.966-55.999c4.488-5.712,9.383-10.914,14.687-15.606c5.307-4.692,10.608-9.282,15.912-13.77 c13.464-11.424,23.769-21.624,30.906-30.6s10.71-19.992,10.71-33.048c0-11.424-2.346-20.808-7.038-28.152 c-4.689-7.344-10.403-13.158-17.136-17.442c-6.733-4.284-13.771-7.344-21.114-9.18c-7.344-1.836-13.872-2.754-19.584-2.754h-1.224 c-11.424,0-20.808,1.53-28.152,4.59s-13.566,7.344-18.666,12.852c-5.1,5.508-9.384,12.138-12.852,19.89 s-7.038,16.116-10.71,25.092c-4.896,12.648-10.812,21.522-17.748,26.622s-13.872,8.058-20.808,8.874 c-7.752,1.632-15.708,1.02-23.868-1.836c-8.16-3.264-14.688-7.956-19.584-14.076c-4.488-5.304-7.956-12.138-10.404-20.502 c-2.448-8.364-1.632-18.666,2.448-30.906c2.448-7.752,6.732-18.87,12.852-33.354s15.402-28.662,27.846-42.534 s28.458-25.908,48.042-36.108s44.064-15.096,73.439-14.688c19.584,0.408,38.862,3.978,57.834,10.71s36.006,16.626,51.102,29.682 c15.099,13.056,27.336,29.07,36.723,48.042c9.384,18.972,14.073,40.698,14.073,65.178c0,17.952-2.445,33.864-7.344,47.736 c-4.896,13.872-11.118,26.316-18.666,37.332s-15.708,20.604-24.479,28.764c-8.772,8.16-16.83,15.504-24.174,22.033 c-4.08,3.672-7.956,7.038-11.631,10.098c-3.672,3.063-6.525,6.021-8.565,8.874c-7.344,8.979-13.566,19.482-18.666,31.521 c-5.103,12.036-8.262,24.582-9.486,37.638c-1.224,12.648-6.426,22.95-15.604,30.906 C294.767,416.491,284.058,420.469,271.818,420.469z" }));
const contacts__title = "_contacts__title_1d7vd_1";
const contacts__adress = "_contacts__adress_1d7vd_16";
const contacts__time = "_contacts__time_1d7vd_16";
const contacts__call = "_contacts__call_1d7vd_16";
const contacts__mail = "_contacts__mail_1d7vd_16";
const contacts__wrapper = "_contacts__wrapper_1d7vd_55";
const contacts__social = "_contacts__social_1d7vd_16";
const styles$g = {
  contacts__title,
  contacts__adress,
  contacts__time,
  contacts__call,
  contacts__mail,
  "contacts__socials-inner": "_contacts__socials-inner_1d7vd_16",
  "contacts__number-link": "_contacts__number-link_1d7vd_33",
  "contacts__mail-link": "_contacts__mail-link_1d7vd_33",
  contacts__wrapper,
  contacts__social,
  "contacts__socials-text": "_contacts__socials-text_1d7vd_67"
};
const Contacts = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$g.contacts, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$g["contacts__wrapper"], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: styles$g.contacts__title, children: "Наши контакты" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: styles$g.contacts__adress, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SvgLocation, { className: "footer__icon", "aria-hidden": "true" }),
      "Наш адрес: Беларусь,",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      " г.Гомель, ул. Гомельская 25"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$g.contacts__time, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SvgTime, { className: "footer__icon", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { "aria-labelledby": "working-time-description-footer", children: [
        "Пн-Пт: 9:00 - 18:00 ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Сб-Вс - выходные"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: "working-time-description-footer", className: "sr-only", children: "Мы работаем с понедельника по пятницу с 9 утра до 6 часов вечера" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$g.contacts__call, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SvgCall, { className: "footer__icon", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          className: styles$g["contacts__number-link"],
          href: "tel:+375447625856",
          "aria-label": "Связаться с нами по номеру телефона",
          title: "Позвонить по номеру +375 44 762 58 56",
          tabIndex: 0,
          rel: "noopener noreferrer",
          children: "+375 (44) 762-58-56"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$g.contacts__mail, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SvgMail, { className: "footer__icon", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          className: styles$g["contacts__mail-link"],
          href: "mailto:vyr4376@yandex.ru",
          "aria-label": "Связаться с нами по email",
          tabIndex: 0,
          rel: "noopener noreferrer",
          children: "mail@garderobsystem.ru"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: styles$g.contacts__social,
        "aria-labelledby": "online-question-contacts",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$g["contacts__socials-inner"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SvgQuestion, { className: "footer__icon", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: styles$g["contacts__socials-text"],
                id: "online-question-contacts",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Задайте вопрос, мы онлайн:" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SocialLinks,
            {
              gap: "socials-footer",
              sizes: "socials__link-contacts-sizes"
            }
          )
        ]
      }
    )
  ] }) });
};
const informationData = [
  {
    id: "information_0",
    text: `ООО "ГАРДЕРОБНЫЕ СИСТЕМЫ"`
  },
  {
    id: "information_1",
    text: `ИНН: 9729295609`
  },
  {
    id: "information_2",
    text: `КПП: 772901001`
  },
  {
    id: "information_3",
    text: `ОГРН: 1207700138656`
  },
  {
    id: "information_4",
    text: `Юридический адрес: 119602, г. Москва`
  },
  {
    id: "information_5",
    text: `Тропарёвская ул., влд. 4 стр. 1, этаж 4`
  },
  {
    id: "information_6",
    text: `помещ. VIIа, комната 460`
  }
];
const information__title = "_information__title_zw2ke_1";
const information__item = "_information__item_zw2ke_21";
const styles$f = {
  information__title,
  information__item
};
const Information = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: styles$f.information__title, children: "Информация" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: informationData.map(({ id, text }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: styles$f.information__item, children: text }, id);
    }) })
  ] });
};
const Footer = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: styles$i.footer, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$i.footer__wrapper, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contacts, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Benefits, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Information, {})
  ] }) }) });
};
const Layout = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
var lib;
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  function _interopDefault(ex) {
    return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
  }
  var React2 = requireReact();
  var React__default = _interopDefault(React2);
  function _defineProperty2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inheritsLoose2(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
  function withSideEffect2(reducePropsToState3, handleStateChangeOnClient2, mapStateOnServer3) {
    if (typeof reducePropsToState3 !== "function") {
      throw new Error("Expected reducePropsToState to be a function.");
    }
    if (typeof handleStateChangeOnClient2 !== "function") {
      throw new Error("Expected handleStateChangeOnClient to be a function.");
    }
    if (typeof mapStateOnServer3 !== "undefined" && typeof mapStateOnServer3 !== "function") {
      throw new Error("Expected mapStateOnServer to either be undefined or a function.");
    }
    function getDisplayName(WrappedComponent) {
      return WrappedComponent.displayName || WrappedComponent.name || "Component";
    }
    return function wrap(WrappedComponent) {
      if (typeof WrappedComponent !== "function") {
        throw new Error("Expected WrappedComponent to be a React component.");
      }
      var mountedInstances = [];
      var state;
      function emitChange() {
        state = reducePropsToState3(mountedInstances.map(function(instance) {
          return instance.props;
        }));
        if (SideEffect.canUseDOM) {
          handleStateChangeOnClient2(state);
        } else if (mapStateOnServer3) {
          state = mapStateOnServer3(state);
        }
      }
      var SideEffect = /* @__PURE__ */ function(_PureComponent) {
        _inheritsLoose2(SideEffect2, _PureComponent);
        function SideEffect2() {
          return _PureComponent.apply(this, arguments) || this;
        }
        SideEffect2.peek = function peek() {
          return state;
        };
        SideEffect2.rewind = function rewind() {
          if (SideEffect2.canUseDOM) {
            throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
          }
          var recordedState = state;
          state = void 0;
          mountedInstances = [];
          return recordedState;
        };
        var _proto = SideEffect2.prototype;
        _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
          mountedInstances.push(this);
          emitChange();
        };
        _proto.componentDidUpdate = function componentDidUpdate() {
          emitChange();
        };
        _proto.componentWillUnmount = function componentWillUnmount() {
          var index = mountedInstances.indexOf(this);
          mountedInstances.splice(index, 1);
          emitChange();
        };
        _proto.render = function render() {
          return React__default.createElement(WrappedComponent, this.props);
        };
        return SideEffect2;
      }(React2.PureComponent);
      _defineProperty2(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");
      _defineProperty2(SideEffect, "canUseDOM", canUseDOM);
      return SideEffect;
    };
  }
  lib = withSideEffect2;
  return lib;
}
var libExports = requireLib();
const withSideEffect = /* @__PURE__ */ getDefaultExportFromCjs(libExports);
var reactFastCompare;
var hasRequiredReactFastCompare;
function requireReactFastCompare() {
  if (hasRequiredReactFastCompare) return reactFastCompare;
  hasRequiredReactFastCompare = 1;
  var hasElementType = typeof Element !== "undefined";
  var hasMap = typeof Map === "function";
  var hasSet = typeof Set === "function";
  var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
  function equal(a2, b2) {
    if (a2 === b2) return true;
    if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
      if (a2.constructor !== b2.constructor) return false;
      var length, i2, keys;
      if (Array.isArray(a2)) {
        length = a2.length;
        if (length != b2.length) return false;
        for (i2 = length; i2-- !== 0; )
          if (!equal(a2[i2], b2[i2])) return false;
        return true;
      }
      var it2;
      if (hasMap && a2 instanceof Map && b2 instanceof Map) {
        if (a2.size !== b2.size) return false;
        it2 = a2.entries();
        while (!(i2 = it2.next()).done)
          if (!b2.has(i2.value[0])) return false;
        it2 = a2.entries();
        while (!(i2 = it2.next()).done)
          if (!equal(i2.value[1], b2.get(i2.value[0]))) return false;
        return true;
      }
      if (hasSet && a2 instanceof Set && b2 instanceof Set) {
        if (a2.size !== b2.size) return false;
        it2 = a2.entries();
        while (!(i2 = it2.next()).done)
          if (!b2.has(i2.value[0])) return false;
        return true;
      }
      if (hasArrayBuffer && ArrayBuffer.isView(a2) && ArrayBuffer.isView(b2)) {
        length = a2.length;
        if (length != b2.length) return false;
        for (i2 = length; i2-- !== 0; )
          if (a2[i2] !== b2[i2]) return false;
        return true;
      }
      if (a2.constructor === RegExp) return a2.source === b2.source && a2.flags === b2.flags;
      if (a2.valueOf !== Object.prototype.valueOf && typeof a2.valueOf === "function" && typeof b2.valueOf === "function") return a2.valueOf() === b2.valueOf();
      if (a2.toString !== Object.prototype.toString && typeof a2.toString === "function" && typeof b2.toString === "function") return a2.toString() === b2.toString();
      keys = Object.keys(a2);
      length = keys.length;
      if (length !== Object.keys(b2).length) return false;
      for (i2 = length; i2-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(b2, keys[i2])) return false;
      if (hasElementType && a2 instanceof Element) return false;
      for (i2 = length; i2-- !== 0; ) {
        if ((keys[i2] === "_owner" || keys[i2] === "__v" || keys[i2] === "__o") && a2.$$typeof) {
          continue;
        }
        if (!equal(a2[keys[i2]], b2[keys[i2]])) return false;
      }
      return true;
    }
    return a2 !== a2 && b2 !== b2;
  }
  reactFastCompare = function isEqual2(a2, b2) {
    try {
      return equal(a2, b2);
    } catch (error) {
      if ((error.message || "").match(/stack|recursion/i)) {
        console.warn("react-fast-compare cannot handle circular refs");
        return false;
      }
      throw error;
    }
  };
  return reactFastCompare;
}
var reactFastCompareExports = requireReactFastCompare();
const isEqual = /* @__PURE__ */ getDefaultExportFromCjs(reactFastCompareExports);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var objectAssign$1;
var hasRequiredObjectAssign;
function requireObjectAssign() {
  if (hasRequiredObjectAssign) return objectAssign$1;
  hasRequiredObjectAssign = 1;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === void 0) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      var test1 = new String("abc");
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }
      var test2 = {};
      for (var i2 = 0; i2 < 10; i2++) {
        test2["_" + String.fromCharCode(i2)] = i2;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
        return test2[n2];
      });
      if (order2.join("") !== "0123456789") {
        return false;
      }
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function(letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  objectAssign$1 = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s2 = 1; s2 < arguments.length; s2++) {
      from = Object(arguments[s2]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i2 = 0; i2 < symbols.length; i2++) {
          if (propIsEnumerable.call(from, symbols[i2])) {
            to[symbols[i2]] = from[symbols[i2]];
          }
        }
      }
    }
    return to;
  };
  return objectAssign$1;
}
var objectAssignExports = requireObjectAssign();
const objectAssign = /* @__PURE__ */ getDefaultExportFromCjs(objectAssignExports);
var ATTRIBUTE_NAMES = {
  BODY: "bodyAttributes",
  HTML: "htmlAttributes",
  TITLE: "titleAttributes"
};
var TAG_NAMES = {
  BASE: "base",
  BODY: "body",
  HEAD: "head",
  HTML: "html",
  LINK: "link",
  META: "meta",
  NOSCRIPT: "noscript",
  SCRIPT: "script",
  STYLE: "style",
  TITLE: "title"
};
Object.keys(TAG_NAMES).map(function(name) {
  return TAG_NAMES[name];
});
var TAG_PROPERTIES = {
  CHARSET: "charset",
  CSS_TEXT: "cssText",
  HREF: "href",
  HTTPEQUIV: "http-equiv",
  INNER_HTML: "innerHTML",
  ITEM_PROP: "itemprop",
  NAME: "name",
  PROPERTY: "property",
  REL: "rel",
  SRC: "src",
  TARGET: "target"
};
var REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate"
};
var HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function(obj, key) {
  obj[REACT_TAG_MAP[key]] = key;
  return obj;
}, {});
var SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
var HELMET_ATTRIBUTE = "data-react-helmet";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
  return typeof obj;
} : function(obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = /* @__PURE__ */ function() {
  function defineProperties(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _extends = Object.assign || function(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var inherits = function(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};
var objectWithoutProperties = function(obj, keys) {
  var target = {};
  for (var i2 in obj) {
    if (keys.indexOf(i2) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i2)) continue;
    target[i2] = obj[i2];
  }
  return target;
};
var possibleConstructorReturn = function(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
};
var encodeSpecialCharacters = function encodeSpecialCharacters2(str) {
  var encode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (encode === false) {
    return String(str);
  }
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var getTitleFromPropsList = function getTitleFromPropsList2(propsList) {
  var innermostTitle = getInnermostProperty(propsList, TAG_NAMES.TITLE);
  var innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
  if (innermostTemplate && innermostTitle) {
    return innermostTemplate.replace(/%s/g, function() {
      return Array.isArray(innermostTitle) ? innermostTitle.join("") : innermostTitle;
    });
  }
  var innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || void 0;
};
var getOnChangeClientState = function getOnChangeClientState2(propsList) {
  return getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function() {
  };
};
var getAttributesFromPropsList = function getAttributesFromPropsList2(tagType, propsList) {
  return propsList.filter(function(props) {
    return typeof props[tagType] !== "undefined";
  }).map(function(props) {
    return props[tagType];
  }).reduce(function(tagAttrs, current) {
    return _extends({}, tagAttrs, current);
  }, {});
};
var getBaseTagFromPropsList = function getBaseTagFromPropsList2(primaryAttributes, propsList) {
  return propsList.filter(function(props) {
    return typeof props[TAG_NAMES.BASE] !== "undefined";
  }).map(function(props) {
    return props[TAG_NAMES.BASE];
  }).reverse().reduce(function(innermostBaseTag, tag) {
    if (!innermostBaseTag.length) {
      var keys = Object.keys(tag);
      for (var i2 = 0; i2 < keys.length; i2++) {
        var attributeKey = keys[i2];
        var lowerCaseAttributeKey = attributeKey.toLowerCase();
        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
          return innermostBaseTag.concat(tag);
        }
      }
    }
    return innermostBaseTag;
  }, []);
};
var getTagsFromPropsList = function getTagsFromPropsList2(tagName, primaryAttributes, propsList) {
  var approvedSeenTags = {};
  return propsList.filter(function(props) {
    if (Array.isArray(props[tagName])) {
      return true;
    }
    if (typeof props[tagName] !== "undefined") {
      warn("Helmet: " + tagName + ' should be of type "Array". Instead found type "' + _typeof(props[tagName]) + '"');
    }
    return false;
  }).map(function(props) {
    return props[tagName];
  }).reverse().reduce(function(approvedTags, instanceTags) {
    var instanceSeenTags = {};
    instanceTags.filter(function(tag) {
      var primaryAttributeKey = void 0;
      var keys2 = Object.keys(tag);
      for (var i22 = 0; i22 < keys2.length; i22++) {
        var attributeKey2 = keys2[i22];
        var lowerCaseAttributeKey = attributeKey2.toLowerCase();
        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        }
        if (primaryAttributes.indexOf(attributeKey2) !== -1 && (attributeKey2 === TAG_PROPERTIES.INNER_HTML || attributeKey2 === TAG_PROPERTIES.CSS_TEXT || attributeKey2 === TAG_PROPERTIES.ITEM_PROP)) {
          primaryAttributeKey = attributeKey2;
        }
      }
      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }
      var value = tag[primaryAttributeKey].toLowerCase();
      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }
      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }
      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }
      return false;
    }).reverse().forEach(function(tag) {
      return approvedTags.push(tag);
    });
    var keys = Object.keys(instanceSeenTags);
    for (var i2 = 0; i2 < keys.length; i2++) {
      var attributeKey = keys[i2];
      var tagUnion = objectAssign({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
      approvedSeenTags[attributeKey] = tagUnion;
    }
    return approvedTags;
  }, []).reverse();
};
var getInnermostProperty = function getInnermostProperty2(propsList, property) {
  for (var i2 = propsList.length - 1; i2 >= 0; i2--) {
    var props = propsList[i2];
    if (props.hasOwnProperty(property)) {
      return props[property];
    }
  }
  return null;
};
var reducePropsToState = function reducePropsToState2(propsList) {
  return {
    baseTag: getBaseTagFromPropsList([TAG_PROPERTIES.HREF, TAG_PROPERTIES.TARGET], propsList),
    bodyAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.BODY, propsList),
    defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
    encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.HTML, propsList),
    linkTags: getTagsFromPropsList(TAG_NAMES.LINK, [TAG_PROPERTIES.REL, TAG_PROPERTIES.HREF], propsList),
    metaTags: getTagsFromPropsList(TAG_NAMES.META, [TAG_PROPERTIES.NAME, TAG_PROPERTIES.CHARSET, TAG_PROPERTIES.HTTPEQUIV, TAG_PROPERTIES.PROPERTY, TAG_PROPERTIES.ITEM_PROP], propsList),
    noscriptTags: getTagsFromPropsList(TAG_NAMES.NOSCRIPT, [TAG_PROPERTIES.INNER_HTML], propsList),
    onChangeClientState: getOnChangeClientState(propsList),
    scriptTags: getTagsFromPropsList(TAG_NAMES.SCRIPT, [TAG_PROPERTIES.SRC, TAG_PROPERTIES.INNER_HTML], propsList),
    styleTags: getTagsFromPropsList(TAG_NAMES.STYLE, [TAG_PROPERTIES.CSS_TEXT], propsList),
    title: getTitleFromPropsList(propsList),
    titleAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.TITLE, propsList)
  };
};
var rafPolyfill = function() {
  var clock = Date.now();
  return function(callback) {
    var currentTime = Date.now();
    if (currentTime - clock > 16) {
      clock = currentTime;
      callback(currentTime);
    } else {
      setTimeout(function() {
        rafPolyfill(callback);
      }, 0);
    }
  };
}();
var cafPolyfill = function cafPolyfill2(id) {
  return clearTimeout(id);
};
var requestAnimationFrame$1 = typeof window !== "undefined" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;
var cancelAnimationFrame$1 = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;
var warn = function warn2(msg) {
  return console && typeof console.warn === "function" && console.warn(msg);
};
var _helmetCallback = null;
var handleClientStateChange = function handleClientStateChange2(newState) {
  if (_helmetCallback) {
    cancelAnimationFrame$1(_helmetCallback);
  }
  if (newState.defer) {
    _helmetCallback = requestAnimationFrame$1(function() {
      commitTagChanges(newState, function() {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};
var commitTagChanges = function commitTagChanges2(newState, cb) {
  var baseTag = newState.baseTag, bodyAttributes = newState.bodyAttributes, htmlAttributes = newState.htmlAttributes, linkTags = newState.linkTags, metaTags = newState.metaTags, noscriptTags = newState.noscriptTags, onChangeClientState = newState.onChangeClientState, scriptTags = newState.scriptTags, styleTags = newState.styleTags, title = newState.title, titleAttributes = newState.titleAttributes;
  updateAttributes(TAG_NAMES.BODY, bodyAttributes);
  updateAttributes(TAG_NAMES.HTML, htmlAttributes);
  updateTitle(title, titleAttributes);
  var tagUpdates = {
    baseTag: updateTags(TAG_NAMES.BASE, baseTag),
    linkTags: updateTags(TAG_NAMES.LINK, linkTags),
    metaTags: updateTags(TAG_NAMES.META, metaTags),
    noscriptTags: updateTags(TAG_NAMES.NOSCRIPT, noscriptTags),
    scriptTags: updateTags(TAG_NAMES.SCRIPT, scriptTags),
    styleTags: updateTags(TAG_NAMES.STYLE, styleTags)
  };
  var addedTags = {};
  var removedTags = {};
  Object.keys(tagUpdates).forEach(function(tagType) {
    var _tagUpdates$tagType = tagUpdates[tagType], newTags = _tagUpdates$tagType.newTags, oldTags = _tagUpdates$tagType.oldTags;
    if (newTags.length) {
      addedTags[tagType] = newTags;
    }
    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  cb && cb();
  onChangeClientState(newState, addedTags, removedTags);
};
var flattenArray = function flattenArray2(possibleArray) {
  return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};
var updateTitle = function updateTitle2(title, attributes) {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }
  updateAttributes(TAG_NAMES.TITLE, attributes);
};
var updateAttributes = function updateAttributes2(tagName, attributes) {
  var elementTag = document.getElementsByTagName(tagName)[0];
  if (!elementTag) {
    return;
  }
  var helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
  var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  var attributesToRemove = [].concat(helmetAttributes);
  var attributeKeys = Object.keys(attributes);
  for (var i2 = 0; i2 < attributeKeys.length; i2++) {
    var attribute = attributeKeys[i2];
    var value = attributes[attribute] || "";
    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }
    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }
    var indexToSave = attributesToRemove.indexOf(attribute);
    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }
  for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
    elementTag.removeAttribute(attributesToRemove[_i]);
  }
  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};
var updateTags = function updateTags2(type, tags) {
  var headElement = document.head || document.querySelector(TAG_NAMES.HEAD);
  var tagNodes = headElement.querySelectorAll(type + "[" + HELMET_ATTRIBUTE + "]");
  var oldTags = Array.prototype.slice.call(tagNodes);
  var newTags = [];
  var indexToDelete = void 0;
  if (tags && tags.length) {
    tags.forEach(function(tag) {
      var newElement = document.createElement(type);
      for (var attribute in tag) {
        if (tag.hasOwnProperty(attribute)) {
          if (attribute === TAG_PROPERTIES.INNER_HTML) {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === TAG_PROPERTIES.CSS_TEXT) {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
          } else {
            var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
            newElement.setAttribute(attribute, value);
          }
        }
      }
      newElement.setAttribute(HELMET_ATTRIBUTE, "true");
      if (oldTags.some(function(existingTag, index) {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }
  oldTags.forEach(function(tag) {
    return tag.parentNode.removeChild(tag);
  });
  newTags.forEach(function(tag) {
    return headElement.appendChild(tag);
  });
  return {
    oldTags,
    newTags
  };
};
var generateElementAttributesAsString = function generateElementAttributesAsString2(attributes) {
  return Object.keys(attributes).reduce(function(str, key) {
    var attr = typeof attributes[key] !== "undefined" ? key + '="' + attributes[key] + '"' : "" + key;
    return str ? str + " " + attr : attr;
  }, "");
};
var generateTitleAsString = function generateTitleAsString2(type, title, attributes, encode) {
  var attributeString = generateElementAttributesAsString(attributes);
  var flattenedTitle = flattenArray(title);
  return attributeString ? "<" + type + " " + HELMET_ATTRIBUTE + '="true" ' + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + HELMET_ATTRIBUTE + '="true">' + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};
var generateTagsAsString = function generateTagsAsString2(type, tags, encode) {
  return tags.reduce(function(str, tag) {
    var attributeHtml = Object.keys(tag).filter(function(attribute) {
      return !(attribute === TAG_PROPERTIES.INNER_HTML || attribute === TAG_PROPERTIES.CSS_TEXT);
    }).reduce(function(string, attribute) {
      var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + '="' + encodeSpecialCharacters(tag[attribute], encode) + '"';
      return string ? string + " " + attr : attr;
    }, "");
    var tagContent = tag.innerHTML || tag.cssText || "";
    var isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
    return str + "<" + type + " " + HELMET_ATTRIBUTE + '="true" ' + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
  }, "");
};
var convertElementAttributestoReactProps = function convertElementAttributestoReactProps2(attributes) {
  var initProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.keys(attributes).reduce(function(obj, key) {
    obj[REACT_TAG_MAP[key] || key] = attributes[key];
    return obj;
  }, initProps);
};
var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes2(props) {
  var initAttributes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.keys(props).reduce(function(obj, key) {
    obj[HTML_TAG_MAP[key] || key] = props[key];
    return obj;
  }, initAttributes);
};
var generateTitleAsReactComponent = function generateTitleAsReactComponent2(type, title, attributes) {
  var _initProps;
  var initProps = (_initProps = {
    key: title
  }, _initProps[HELMET_ATTRIBUTE] = true, _initProps);
  var props = convertElementAttributestoReactProps(attributes, initProps);
  return [React.createElement(TAG_NAMES.TITLE, props, title)];
};
var generateTagsAsReactComponent = function generateTagsAsReactComponent2(type, tags) {
  return tags.map(function(tag, i2) {
    var _mappedTag;
    var mappedTag = (_mappedTag = {
      key: i2
    }, _mappedTag[HELMET_ATTRIBUTE] = true, _mappedTag);
    Object.keys(tag).forEach(function(attribute) {
      var mappedAttribute = REACT_TAG_MAP[attribute] || attribute;
      if (mappedAttribute === TAG_PROPERTIES.INNER_HTML || mappedAttribute === TAG_PROPERTIES.CSS_TEXT) {
        var content = tag.innerHTML || tag.cssText;
        mappedTag.dangerouslySetInnerHTML = { __html: content };
      } else {
        mappedTag[mappedAttribute] = tag[attribute];
      }
    });
    return React.createElement(type, mappedTag);
  });
};
var getMethodsForTag = function getMethodsForTag2(type, tags, encode) {
  switch (type) {
    case TAG_NAMES.TITLE:
      return {
        toComponent: function toComponent() {
          return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes);
        },
        toString: function toString() {
          return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
        }
      };
    case ATTRIBUTE_NAMES.BODY:
    case ATTRIBUTE_NAMES.HTML:
      return {
        toComponent: function toComponent() {
          return convertElementAttributestoReactProps(tags);
        },
        toString: function toString() {
          return generateElementAttributesAsString(tags);
        }
      };
    default:
      return {
        toComponent: function toComponent() {
          return generateTagsAsReactComponent(type, tags);
        },
        toString: function toString() {
          return generateTagsAsString(type, tags, encode);
        }
      };
  }
};
var mapStateOnServer = function mapStateOnServer2(_ref2) {
  var baseTag = _ref2.baseTag, bodyAttributes = _ref2.bodyAttributes, encode = _ref2.encode, htmlAttributes = _ref2.htmlAttributes, linkTags = _ref2.linkTags, metaTags = _ref2.metaTags, noscriptTags = _ref2.noscriptTags, scriptTags = _ref2.scriptTags, styleTags = _ref2.styleTags, _ref$title = _ref2.title, title = _ref$title === void 0 ? "" : _ref$title, titleAttributes = _ref2.titleAttributes;
  return {
    base: getMethodsForTag(TAG_NAMES.BASE, baseTag, encode),
    bodyAttributes: getMethodsForTag(ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
    htmlAttributes: getMethodsForTag(ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
    link: getMethodsForTag(TAG_NAMES.LINK, linkTags, encode),
    meta: getMethodsForTag(TAG_NAMES.META, metaTags, encode),
    noscript: getMethodsForTag(TAG_NAMES.NOSCRIPT, noscriptTags, encode),
    script: getMethodsForTag(TAG_NAMES.SCRIPT, scriptTags, encode),
    style: getMethodsForTag(TAG_NAMES.STYLE, styleTags, encode),
    title: getMethodsForTag(TAG_NAMES.TITLE, { title, titleAttributes }, encode)
  };
};
var Helmet = function Helmet2(Component) {
  var _class, _temp;
  return _temp = _class = function(_React$Component) {
    inherits(HelmetWrapper, _React$Component);
    function HelmetWrapper() {
      classCallCheck(this, HelmetWrapper);
      return possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }
    HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
      return !isEqual(this.props, nextProps);
    };
    HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
      if (!nestedChildren) {
        return null;
      }
      switch (child.type) {
        case TAG_NAMES.SCRIPT:
        case TAG_NAMES.NOSCRIPT:
          return {
            innerHTML: nestedChildren
          };
        case TAG_NAMES.STYLE:
          return {
            cssText: nestedChildren
          };
      }
      throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    };
    HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref2) {
      var _babelHelpers$extends;
      var child = _ref2.child, arrayTypeChildren = _ref2.arrayTypeChildren, newChildProps = _ref2.newChildProps, nestedChildren = _ref2.nestedChildren;
      return _extends({}, arrayTypeChildren, (_babelHelpers$extends = {}, _babelHelpers$extends[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _babelHelpers$extends));
    };
    HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
      var _babelHelpers$extends2, _babelHelpers$extends3;
      var child = _ref2.child, newProps = _ref2.newProps, newChildProps = _ref2.newChildProps, nestedChildren = _ref2.nestedChildren;
      switch (child.type) {
        case TAG_NAMES.TITLE:
          return _extends({}, newProps, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[child.type] = nestedChildren, _babelHelpers$extends2.titleAttributes = _extends({}, newChildProps), _babelHelpers$extends2));
        case TAG_NAMES.BODY:
          return _extends({}, newProps, {
            bodyAttributes: _extends({}, newChildProps)
          });
        case TAG_NAMES.HTML:
          return _extends({}, newProps, {
            htmlAttributes: _extends({}, newChildProps)
          });
      }
      return _extends({}, newProps, (_babelHelpers$extends3 = {}, _babelHelpers$extends3[child.type] = _extends({}, newChildProps), _babelHelpers$extends3));
    };
    HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
      var newFlattenedProps = _extends({}, newProps);
      Object.keys(arrayTypeChildren).forEach(function(arrayChildName) {
        var _babelHelpers$extends4;
        newFlattenedProps = _extends({}, newFlattenedProps, (_babelHelpers$extends4 = {}, _babelHelpers$extends4[arrayChildName] = arrayTypeChildren[arrayChildName], _babelHelpers$extends4));
      });
      return newFlattenedProps;
    };
    HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
      return true;
    };
    HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
      var _this2 = this;
      var arrayTypeChildren = {};
      React.Children.forEach(children, function(child) {
        if (!child || !child.props) {
          return;
        }
        var _child$props = child.props, nestedChildren = _child$props.children, childProps = objectWithoutProperties(_child$props, ["children"]);
        var newChildProps = convertReactPropstoHtmlAttributes(childProps);
        _this2.warnOnInvalidChildren(child, nestedChildren);
        switch (child.type) {
          case TAG_NAMES.LINK:
          case TAG_NAMES.META:
          case TAG_NAMES.NOSCRIPT:
          case TAG_NAMES.SCRIPT:
          case TAG_NAMES.STYLE:
            arrayTypeChildren = _this2.flattenArrayTypeChildren({
              child,
              arrayTypeChildren,
              newChildProps,
              nestedChildren
            });
            break;
          default:
            newProps = _this2.mapObjectTypeChildren({
              child,
              newProps,
              newChildProps,
              nestedChildren
            });
            break;
        }
      });
      newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
      return newProps;
    };
    HelmetWrapper.prototype.render = function render() {
      var _props = this.props, children = _props.children, props = objectWithoutProperties(_props, ["children"]);
      var newProps = _extends({}, props);
      if (children) {
        newProps = this.mapChildrenToProps(children, newProps);
      }
      return React.createElement(Component, newProps);
    };
    createClass(HelmetWrapper, null, [{
      key: "canUseDOM",
      // Component.peek comes from react-side-effect:
      // For testing, you may use a static peek() method available on the returned component.
      // It lets you get the current state without resetting the mounted instance stack.
      // Don’t use it for anything other than testing.
      /**
       * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
       * @param {Object} bodyAttributes: {"className": "root"}
       * @param {String} defaultTitle: "Default Title"
       * @param {Boolean} defer: true
       * @param {Boolean} encodeSpecialCharacters: true
       * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
       * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
       * @param {Array} meta: [{"name": "description", "content": "Test description"}]
       * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
       * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
       * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
       * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
       * @param {String} title: "Title"
       * @param {Object} titleAttributes: {"itemprop": "name"}
       * @param {String} titleTemplate: "MySite.com - %s"
       */
      set: function set$$1(canUseDOM) {
        Component.canUseDOM = canUseDOM;
      }
    }]);
    return HelmetWrapper;
  }(React.Component), _class.propTypes = {
    base: PropTypes.object,
    bodyAttributes: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    defaultTitle: PropTypes.string,
    defer: PropTypes.bool,
    encodeSpecialCharacters: PropTypes.bool,
    htmlAttributes: PropTypes.object,
    link: PropTypes.arrayOf(PropTypes.object),
    meta: PropTypes.arrayOf(PropTypes.object),
    noscript: PropTypes.arrayOf(PropTypes.object),
    onChangeClientState: PropTypes.func,
    script: PropTypes.arrayOf(PropTypes.object),
    style: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    titleAttributes: PropTypes.object,
    titleTemplate: PropTypes.string
  }, _class.defaultProps = {
    defer: true,
    encodeSpecialCharacters: true
  }, _class.peek = Component.peek, _class.rewind = function() {
    var mappedState = Component.rewind();
    if (!mappedState) {
      mappedState = mapStateOnServer({
        baseTag: [],
        bodyAttributes: {},
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }
    return mappedState;
  }, _temp;
};
var NullComponent = function NullComponent2() {
  return null;
};
var HelmetSideEffects = withSideEffect(reducePropsToState, handleClientStateChange, mapStateOnServer)(NullComponent);
var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;
const about = "_about_bjbko_202";
const about__background = "_about__background_bjbko_222";
const about__content = "_about__content_bjbko_258";
const about__title = "_about__title_bjbko_261";
const about__description = "_about__description_bjbko_289";
const about__features = "_about__features_bjbko_362";
const about__order = "_about__order_bjbko_418";
const styles$e = {
  about,
  "about__background-big": "_about__background-big_bjbko_222",
  "about__background-small": "_about__background-small_bjbko_236",
  about__background,
  about__content,
  about__title,
  about__description,
  "about__description-dots": "_about__description-dots_bjbko_300",
  "about__description-dot": "_about__description-dot_bjbko_300",
  "about__description-text": "_about__description-text_bjbko_342",
  about__features,
  "about__features-item": "_about__features-item_bjbko_378",
  "about__features-text": "_about__features-text_bjbko_403",
  about__order,
  "about__order-btn": "_about__order-btn_bjbko_429",
  "about__order-text": "_about__order-text_bjbko_497"
};
const bigBg = "/Shower-Partitions-APP/assets/main-bg-big-BDkec0EX.webp";
const smallBg = "/Shower-Partitions-APP/assets/main-bg-small-D9qybMed.webp";
const featureCircle = "data:image/svg+xml,%3c!--%20icon666.com%20-%20MILLIONS%20vector%20ICONS%20FREE%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20387.4%20387.4'%20style='enable-background:new%200%200%20387.4%20387.4;'%20xml:space='preserve'%3e%3cpath%20style='fill:%20rgb(233,%2022,%2031);'%20d='M193.7,10c101.5,0,183.7,82.3,183.7,183.7s-82.2,183.7-183.7,183.7S10,295.2,10,193.7%20S92.2,10,193.7,10z%20M164.8,273.6l130.3-130.4l-29.4-29.4L164.8,214.7l-43.1-43.1L92.3,201L164.8,273.6z'%20fill='%23ED664C'%3e%3c/path%3e%3cpolygon%20style='fill:%20rgb(255,%20255,%20255);'%20points='295.1,143.2%20164.8,273.6%2092.3,201%20121.7,171.6%20164.8,214.7%20265.7,113.8%20'%20fill='%23FDC75B'%3e%3c/polygon%3e%3cpath%20d='M193.7,387.4c106.8,0,193.7-86.9,193.7-193.7S300.5,0,193.7,0S0,86.9,0,193.7S86.9,387.4,193.7,387.4z%20M193.7,20%20c95.8,0,173.7,77.9,173.7,173.7s-77.9,173.7-173.7,173.7S20,289.5,20,193.7S97.9,20,193.7,20z'%20fill='%23000000'%20style='fill:%20rgb(233,%2022,%2031);'%3e%3c/path%3e%3cpath%20d='M157.8,280.7c1.9,1.9,4.4,2.9,7.1,2.9s5.2-1.1,7.1-2.9l130.3-130.4c3.9-3.9,3.9-10.2,0-14.1l-29.5-29.5%20c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2,1.1-7.1,2.9l-93.8,93.8l-36-36c-3.9-3.9-10.2-3.9-14.1,0l-29.4,29.4c-3.9,3.9-3.9,10.2,0,14.1%20L157.8,280.7z%20M121.7,185.7l36,36c3.9,3.9,10.2,3.9,14.1,0l93.8-93.8l15.3,15.3L164.8,259.5l-58.4-58.4L121.7,185.7z'%20fill='%23000000'%20style='fill:%20rgb(233,%2022,%2031);'%3e%3c/path%3e%3c/svg%3e";
const clickHand = "data:image/svg+xml,%3c!--%20icon666.com%20-%20MILLIONS%20vector%20ICONS%20FREE%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2025.66%2025.66'%20style='enable-background:new%200%200%2025.66%2025.66;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20style='fill:%20rgb(255,%20255,%20255);'%20d='M6.357,8.51C6.181,7.914,6.012,7.317,5.885,6.745C5.05,6.251,4.482,5.352,4.482,4.313%20c0-1.563,1.271-2.833,2.833-2.833s2.833,1.271,2.833,2.833c0,0.215-0.029,0.422-0.074,0.623c0.271,0.597,0.49,1.269,0.682,1.952%20c0.54-0.72,0.872-1.605,0.872-2.575C11.628,1.93,9.698,0,7.315,0S3.003,1.93,3.003,4.313C3.003,6.365,4.438,8.074,6.357,8.51z'%20fill='%23030104'%3e%3c/path%3e%3cpath%20style='fill:%20rgb(255,%20255,%20255);'%20d='M3.378,18.721c1.063-1.149,2.256-0.699,3.853-0.456c1.372,0.211,2.723-0.174,2.633-0.915%20c-0.142-1.199-0.342-1.735-0.797-3.288c-0.363-1.235-1.052-3.461-1.679-5.589c-0.84-2.847-1.083-4.169,0.035-4.499%20c1.205-0.351,1.896,1.361,2.522,3.735c0.713,2.702,1.088,3.895,1.298,3.832c0.37-0.106-0.136-1.262,0.832-1.547%20c1.21-0.352,1.444,0.594,1.783,0.499c0.339-0.102,0.224-1.06,1.189-1.342c0.97-0.28,1.457,0.914,1.857,0.795%20c0.396-0.117,0.387-0.548,0.985-0.719c0.599-0.178,2.853,0.831,4.143,5.238c1.619,5.541-0.205,6.571,0.348,8.447l-7.227,2.748%20c-0.585-1.407-2.397-1.511-4-2.408c-1.615-0.909-2.712-2.68-6.921-2.594C2.649,20.69,2.724,19.428,3.378,18.721z'%20fill='%23030104'%3e%3c/path%3e%3c/g%3e%3c/svg%3e";
const About = () => {
  const featuresItemsText = [
    "Дизайнерские решения",
    "Тонкая рамка",
    "Надежная фурнитура"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: styles$e.about, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$e.about__background, "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: styles$e["about__background-big"], src: bigBg, alt: "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        className: styles$e["about__background-small"],
        src: smallBg,
        alt: ""
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$e.about__content, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: styles$e.about__title, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Душевые перегородки" }),
        " на заказ в Гомеле"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$e.about__description, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$e["about__description-dots"], children: new Array(4).fill(null).map((_2, i2) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: styles$e["about__description-dot"]
            },
            i2
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$e["about__description-text"], children: "Стильные ограждения для душевой премиум качества" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$e.about__features, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$e["about__features-item"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featureCircle, alt: "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: styles$e["about__features-text"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Закаленное стекло" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "8-10 мм"
          ] })
        ] }),
        featuresItemsText.map((itemText) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$e["about__features-item"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featureCircle, alt: "" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$e["about__features-text"], children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: itemText }) })
          ] }, itemText);
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$e.about__order, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: styles$e["about__order-btn"], type: "button", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Рассчитать цену по моим размерам" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: clickHand, alt: "" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$e["about__order-text"], children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Перезвоним и проконсультируем " }) })
      ] })
    ] }) })
  ] });
};
const t = (t2, e2 = 1e4) => (t2 = parseFloat(t2 + "") || 0, Math.round((t2 + Number.EPSILON) * e2) / e2), e = function(t2) {
  if (!(t2 && t2 instanceof Element && t2.offsetParent)) return false;
  const e2 = t2.scrollHeight > t2.clientHeight, i2 = window.getComputedStyle(t2).overflowY, n2 = -1 !== i2.indexOf("hidden"), s2 = -1 !== i2.indexOf("visible");
  return e2 && !n2 && !s2;
}, i = function(t2, n2 = void 0) {
  return !(!t2 || t2 === document.body || n2 && t2 === n2) && (e(t2) ? t2 : i(t2.parentElement, n2));
}, n = function(t2) {
  var e2 = new DOMParser().parseFromString(t2, "text/html").body;
  if (e2.childElementCount > 1) {
    for (var i2 = document.createElement("div"); e2.firstChild; ) i2.appendChild(e2.firstChild);
    return i2;
  }
  return e2.firstChild;
}, s = (t2) => `${t2 || ""}`.split(" ").filter((t3) => !!t3), o = (t2, e2, i2) => {
  t2 && s(e2).forEach((e3) => {
    t2.classList.toggle(e3, i2 || false);
  });
};
class a {
  constructor(t2) {
    Object.defineProperty(this, "pageX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "pageY", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "clientX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "clientY", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "id", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "time", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "nativePointer", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.nativePointer = t2, this.pageX = t2.pageX, this.pageY = t2.pageY, this.clientX = t2.clientX, this.clientY = t2.clientY, this.id = self.Touch && t2 instanceof Touch ? t2.identifier : -1, this.time = Date.now();
  }
}
const r = { passive: false };
class l {
  constructor(t2, { start: e2 = () => true, move: i2 = () => {
  }, end: n2 = () => {
  } }) {
    Object.defineProperty(this, "element", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "startCallback", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "moveCallback", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "endCallback", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "currentPointers", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "startPointers", { enumerable: true, configurable: true, writable: true, value: [] }), this.element = t2, this.startCallback = e2, this.moveCallback = i2, this.endCallback = n2;
    for (const t3 of ["onPointerStart", "onTouchStart", "onMove", "onTouchEnd", "onPointerEnd", "onWindowBlur"]) this[t3] = this[t3].bind(this);
    this.element.addEventListener("mousedown", this.onPointerStart, r), this.element.addEventListener("touchstart", this.onTouchStart, r), this.element.addEventListener("touchmove", this.onMove, r), this.element.addEventListener("touchend", this.onTouchEnd), this.element.addEventListener("touchcancel", this.onTouchEnd);
  }
  onPointerStart(t2) {
    if (!t2.buttons || 0 !== t2.button) return;
    const e2 = new a(t2);
    this.currentPointers.some((t3) => t3.id === e2.id) || this.triggerPointerStart(e2, t2) && (window.addEventListener("mousemove", this.onMove), window.addEventListener("mouseup", this.onPointerEnd), window.addEventListener("blur", this.onWindowBlur));
  }
  onTouchStart(t2) {
    for (const e2 of Array.from(t2.changedTouches || [])) this.triggerPointerStart(new a(e2), t2);
    window.addEventListener("blur", this.onWindowBlur);
  }
  onMove(t2) {
    const e2 = this.currentPointers.slice(), i2 = "changedTouches" in t2 ? Array.from(t2.changedTouches || []).map((t3) => new a(t3)) : [new a(t2)], n2 = [];
    for (const t3 of i2) {
      const e3 = this.currentPointers.findIndex((e4) => e4.id === t3.id);
      e3 < 0 || (n2.push(t3), this.currentPointers[e3] = t3);
    }
    n2.length && this.moveCallback(t2, this.currentPointers.slice(), e2);
  }
  onPointerEnd(t2) {
    t2.buttons > 0 && 0 !== t2.button || (this.triggerPointerEnd(t2, new a(t2)), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur));
  }
  onTouchEnd(t2) {
    for (const e2 of Array.from(t2.changedTouches || [])) this.triggerPointerEnd(t2, new a(e2));
  }
  triggerPointerStart(t2, e2) {
    return !!this.startCallback(e2, t2, this.currentPointers.slice()) && (this.currentPointers.push(t2), this.startPointers.push(t2), true);
  }
  triggerPointerEnd(t2, e2) {
    const i2 = this.currentPointers.findIndex((t3) => t3.id === e2.id);
    i2 < 0 || (this.currentPointers.splice(i2, 1), this.startPointers.splice(i2, 1), this.endCallback(t2, e2, this.currentPointers.slice()));
  }
  onWindowBlur() {
    this.clear();
  }
  clear() {
    for (; this.currentPointers.length; ) {
      const t2 = this.currentPointers[this.currentPointers.length - 1];
      this.currentPointers.splice(this.currentPointers.length - 1, 1), this.startPointers.splice(this.currentPointers.length - 1, 1), this.endCallback(new Event("touchend", { bubbles: true, cancelable: true, clientX: t2.clientX, clientY: t2.clientY }), t2, this.currentPointers.slice());
    }
  }
  stop() {
    this.element.removeEventListener("mousedown", this.onPointerStart, r), this.element.removeEventListener("touchstart", this.onTouchStart, r), this.element.removeEventListener("touchmove", this.onMove, r), this.element.removeEventListener("touchend", this.onTouchEnd), this.element.removeEventListener("touchcancel", this.onTouchEnd), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur);
  }
}
function c(t2, e2) {
  return e2 ? Math.sqrt(Math.pow(e2.clientX - t2.clientX, 2) + Math.pow(e2.clientY - t2.clientY, 2)) : 0;
}
function h(t2, e2) {
  return e2 ? { clientX: (t2.clientX + e2.clientX) / 2, clientY: (t2.clientY + e2.clientY) / 2 } : t2;
}
const d = (t2) => "object" == typeof t2 && null !== t2 && t2.constructor === Object && "[object Object]" === Object.prototype.toString.call(t2), u = (t2, ...e2) => {
  const i2 = e2.length;
  for (let n2 = 0; n2 < i2; n2++) {
    const i3 = e2[n2] || {};
    Object.entries(i3).forEach(([e3, i4]) => {
      const n3 = Array.isArray(i4) ? [] : {};
      t2[e3] || Object.assign(t2, { [e3]: n3 }), d(i4) ? Object.assign(t2[e3], u(n3, i4)) : Array.isArray(i4) ? Object.assign(t2, { [e3]: [...i4] }) : Object.assign(t2, { [e3]: i4 });
    });
  }
  return t2;
}, p = function(t2, e2) {
  return t2.split(".").reduce((t3, e3) => "object" == typeof t3 ? t3[e3] : void 0, e2);
};
class f {
  constructor(t2 = {}) {
    Object.defineProperty(this, "options", { enumerable: true, configurable: true, writable: true, value: t2 }), Object.defineProperty(this, "events", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Map() }), this.setOptions(t2);
    for (const t3 of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) t3.startsWith("on") && "function" == typeof this[t3] && (this[t3] = this[t3].bind(this));
  }
  setOptions(t2) {
    this.options = t2 ? u({}, this.constructor.defaults, t2) : {};
    for (const [t3, e2] of Object.entries(this.option("on") || {})) this.on(t3, e2);
  }
  option(t2, ...e2) {
    let i2 = p(t2, this.options);
    return i2 && "function" == typeof i2 && (i2 = i2.call(this, this, ...e2)), i2;
  }
  optionFor(t2, e2, i2, ...n2) {
    let s2 = p(e2, t2);
    var o2;
    "string" != typeof (o2 = s2) || isNaN(o2) || isNaN(parseFloat(o2)) || (s2 = parseFloat(s2)), "true" === s2 && (s2 = true), "false" === s2 && (s2 = false), s2 && "function" == typeof s2 && (s2 = s2.call(this, this, t2, ...n2));
    let a2 = p(e2, this.options);
    return a2 && "function" == typeof a2 ? s2 = a2.call(this, this, t2, ...n2, s2) : void 0 === s2 && (s2 = a2), void 0 === s2 ? i2 : s2;
  }
  cn(t2) {
    const e2 = this.options.classes;
    return e2 && e2[t2] || "";
  }
  localize(t2, e2 = []) {
    t2 = String(t2).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t3, e3, i2) => {
      let n2 = "";
      return i2 ? n2 = this.option(`${e3[0] + e3.toLowerCase().substring(1)}.l10n.${i2}`) : e3 && (n2 = this.option(`l10n.${e3}`)), n2 || (n2 = t3), n2;
    });
    for (let i2 = 0; i2 < e2.length; i2++) t2 = t2.split(e2[i2][0]).join(e2[i2][1]);
    return t2 = t2.replace(/\{\{(.*?)\}\}/g, (t3, e3) => e3);
  }
  on(t2, e2) {
    let i2 = [];
    "string" == typeof t2 ? i2 = t2.split(" ") : Array.isArray(t2) && (i2 = t2), this.events || (this.events = /* @__PURE__ */ new Map()), i2.forEach((t3) => {
      let i3 = this.events.get(t3);
      i3 || (this.events.set(t3, []), i3 = []), i3.includes(e2) || i3.push(e2), this.events.set(t3, i3);
    });
  }
  off(t2, e2) {
    let i2 = [];
    "string" == typeof t2 ? i2 = t2.split(" ") : Array.isArray(t2) && (i2 = t2), i2.forEach((t3) => {
      const i3 = this.events.get(t3);
      if (Array.isArray(i3)) {
        const t4 = i3.indexOf(e2);
        t4 > -1 && i3.splice(t4, 1);
      }
    });
  }
  emit(t2, ...e2) {
    [...this.events.get(t2) || []].forEach((t3) => t3(this, ...e2)), "*" !== t2 && this.emit("*", t2, ...e2);
  }
}
Object.defineProperty(f, "version", { enumerable: true, configurable: true, writable: true, value: "5.0.36" }), Object.defineProperty(f, "defaults", { enumerable: true, configurable: true, writable: true, value: {} });
class g extends f {
  constructor(t2 = {}) {
    super(t2), Object.defineProperty(this, "plugins", { enumerable: true, configurable: true, writable: true, value: {} });
  }
  attachPlugins(t2 = {}) {
    const e2 = /* @__PURE__ */ new Map();
    for (const [i2, n2] of Object.entries(t2)) {
      const t3 = this.option(i2), s2 = this.plugins[i2];
      s2 || false === t3 ? s2 && false === t3 && (s2.detach(), delete this.plugins[i2]) : e2.set(i2, new n2(this, t3 || {}));
    }
    for (const [t3, i2] of e2) this.plugins[t3] = i2, i2.attach();
  }
  detachPlugins(t2) {
    t2 = t2 || Object.keys(this.plugins);
    for (const e2 of t2) {
      const t3 = this.plugins[e2];
      t3 && t3.detach(), delete this.plugins[e2];
    }
    return this.emit("detachPlugins"), this;
  }
}
var m;
!function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Error = 1] = "Error", t2[t2.Ready = 2] = "Ready", t2[t2.Panning = 3] = "Panning", t2[t2.Mousemove = 4] = "Mousemove", t2[t2.Destroy = 5] = "Destroy";
}(m || (m = {}));
const v = ["a", "b", "c", "d", "e", "f"], b = { PANUP: "Move up", PANDOWN: "Move down", PANLEFT: "Move left", PANRIGHT: "Move right", ZOOMIN: "Zoom in", ZOOMOUT: "Zoom out", TOGGLEZOOM: "Toggle zoom level", TOGGLE1TO1: "Toggle zoom level", ITERATEZOOM: "Toggle zoom level", ROTATECCW: "Rotate counterclockwise", ROTATECW: "Rotate clockwise", FLIPX: "Flip horizontally", FLIPY: "Flip vertically", FITX: "Fit horizontally", FITY: "Fit vertically", RESET: "Reset", TOGGLEFS: "Toggle fullscreen" }, y = { content: null, width: "auto", height: "auto", panMode: "drag", touch: true, dragMinThreshold: 3, lockAxis: false, mouseMoveFactor: 1, mouseMoveFriction: 0.12, zoom: true, pinchToZoom: true, panOnlyZoomed: "auto", minScale: 1, maxScale: 2, friction: 0.25, dragFriction: 0.35, decelFriction: 0.05, click: "toggleZoom", dblClick: false, wheel: "zoom", wheelLimit: 7, spinner: true, bounds: "auto", infinite: false, rubberband: true, bounce: true, maxVelocity: 75, transformParent: false, classes: { content: "f-panzoom__content", isLoading: "is-loading", canZoomIn: "can-zoom_in", canZoomOut: "can-zoom_out", isDraggable: "is-draggable", isDragging: "is-dragging", inFullscreen: "in-fullscreen", htmlHasFullscreen: "with-panzoom-in-fullscreen" }, l10n: b }, w = '<circle cx="25" cy="25" r="20"></circle>', x = '<div class="f-spinner"><svg viewBox="0 0 50 50">' + w + w + "</svg></div>", E = (t2) => t2 && null !== t2 && t2 instanceof Element && "nodeType" in t2, S = (t2, e2) => {
  t2 && s(e2).forEach((e3) => {
    t2.classList.remove(e3);
  });
}, P = (t2, e2) => {
  t2 && s(e2).forEach((e3) => {
    t2.classList.add(e3);
  });
}, C = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 }, T = 1e5, M = 1e4, O = "mousemove", A = "drag", L = "content", z = "auto";
let R = null, k = null;
class I extends g {
  get fits() {
    return this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1;
  }
  get isTouchDevice() {
    return null === k && (k = window.matchMedia("(hover: none)").matches), k;
  }
  get isMobile() {
    return null === R && (R = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)), R;
  }
  get panMode() {
    return this.options.panMode !== O || this.isTouchDevice ? A : O;
  }
  get panOnlyZoomed() {
    const t2 = this.options.panOnlyZoomed;
    return t2 === z ? this.isTouchDevice : t2;
  }
  get isInfinite() {
    return this.option("infinite");
  }
  get angle() {
    return 180 * Math.atan2(this.current.b, this.current.a) / Math.PI || 0;
  }
  get targetAngle() {
    return 180 * Math.atan2(this.target.b, this.target.a) / Math.PI || 0;
  }
  get scale() {
    const { a: t2, b: e2 } = this.current;
    return Math.sqrt(t2 * t2 + e2 * e2) || 1;
  }
  get targetScale() {
    const { a: t2, b: e2 } = this.target;
    return Math.sqrt(t2 * t2 + e2 * e2) || 1;
  }
  get minScale() {
    return this.option("minScale") || 1;
  }
  get fullScale() {
    const { contentRect: t2 } = this;
    return t2.fullWidth / t2.fitWidth || 1;
  }
  get maxScale() {
    return this.fullScale * (this.option("maxScale") || 1) || 1;
  }
  get coverScale() {
    const { containerRect: t2, contentRect: e2 } = this, i2 = Math.max(t2.height / e2.fitHeight, t2.width / e2.fitWidth) || 1;
    return Math.min(this.fullScale, i2);
  }
  get isScaling() {
    return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting;
  }
  get isContentLoading() {
    const t2 = this.content;
    return !!(t2 && t2 instanceof HTMLImageElement) && !t2.complete;
  }
  get isResting() {
    if (this.isBouncingX || this.isBouncingY) return false;
    for (const t2 of v) {
      const e2 = "e" == t2 || "f" === t2 ? 1e-4 : 1e-5;
      if (Math.abs(this.target[t2] - this.current[t2]) > e2) return false;
    }
    return !(!this.ignoreBounds && !this.checkBounds().inBounds);
  }
  constructor(t2, e2 = {}, i2 = {}) {
    var s2;
    if (super(e2), Object.defineProperty(this, "pointerTracker", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "resizeObserver", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "updateTimer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "clickTimer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "rAF", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "isTicking", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "ignoreBounds", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "isBouncingX", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "isBouncingY", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "clicks", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "trackingPoints", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "pwt", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "cwd", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "pmme", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "friction", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: m.Init }), Object.defineProperty(this, "isDragging", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "content", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "spinner", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "containerRect", { enumerable: true, configurable: true, writable: true, value: { width: 0, height: 0, innerWidth: 0, innerHeight: 0 } }), Object.defineProperty(this, "contentRect", { enumerable: true, configurable: true, writable: true, value: { top: 0, right: 0, bottom: 0, left: 0, fullWidth: 0, fullHeight: 0, fitWidth: 0, fitHeight: 0, width: 0, height: 0 } }), Object.defineProperty(this, "dragStart", { enumerable: true, configurable: true, writable: true, value: { x: 0, y: 0, top: 0, left: 0, time: 0 } }), Object.defineProperty(this, "dragOffset", { enumerable: true, configurable: true, writable: true, value: { x: 0, y: 0, time: 0 } }), Object.defineProperty(this, "current", { enumerable: true, configurable: true, writable: true, value: Object.assign({}, C) }), Object.defineProperty(this, "target", { enumerable: true, configurable: true, writable: true, value: Object.assign({}, C) }), Object.defineProperty(this, "velocity", { enumerable: true, configurable: true, writable: true, value: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 } }), Object.defineProperty(this, "lockedAxis", { enumerable: true, configurable: true, writable: true, value: false }), !t2) throw new Error("Container Element Not Found");
    this.container = t2, this.initContent(), this.attachPlugins(Object.assign(Object.assign({}, I.Plugins), i2)), this.emit("attachPlugins"), this.emit("init");
    const o2 = this.content;
    if (o2.addEventListener("load", this.onLoad), o2.addEventListener("error", this.onError), this.isContentLoading) {
      if (this.option("spinner")) {
        t2.classList.add(this.cn("isLoading"));
        const e3 = n(x);
        !t2.contains(o2) || o2.parentElement instanceof HTMLPictureElement ? this.spinner = t2.appendChild(e3) : this.spinner = (null === (s2 = o2.parentElement) || void 0 === s2 ? void 0 : s2.insertBefore(e3, o2)) || null;
      }
      this.emit("beforeLoad");
    } else queueMicrotask(() => {
      this.enable();
    });
  }
  initContent() {
    const { container: t2 } = this, e2 = this.cn(L);
    let i2 = this.option(L) || t2.querySelector(`.${e2}`);
    if (i2 || (i2 = t2.querySelector("img,picture") || t2.firstElementChild, i2 && P(i2, e2)), i2 instanceof HTMLPictureElement && (i2 = i2.querySelector("img")), !i2) throw new Error("No content found");
    this.content = i2;
  }
  onLoad() {
    const { spinner: t2, container: e2, state: i2 } = this;
    t2 && (t2.remove(), this.spinner = null), this.option("spinner") && e2.classList.remove(this.cn("isLoading")), this.emit("afterLoad"), i2 === m.Init ? this.enable() : this.updateMetrics();
  }
  onError() {
    this.state !== m.Destroy && (this.spinner && (this.spinner.remove(), this.spinner = null), this.stop(), this.detachEvents(), this.state = m.Error, this.emit("error"));
  }
  getNextScale(t2) {
    const { fullScale: e2, targetScale: i2, coverScale: n2, maxScale: s2, minScale: o2 } = this;
    let a2 = o2;
    switch (t2) {
      case "toggleMax":
        a2 = i2 - o2 < 0.5 * (s2 - o2) ? s2 : o2;
        break;
      case "toggleCover":
        a2 = i2 - o2 < 0.5 * (n2 - o2) ? n2 : o2;
        break;
      case "toggleZoom":
        a2 = i2 - o2 < 0.5 * (e2 - o2) ? e2 : o2;
        break;
      case "iterateZoom":
        let t3 = [1, e2, s2].sort((t4, e3) => t4 - e3), r2 = t3.findIndex((t4) => t4 > i2 + 1e-5);
        a2 = t3[r2] || 1;
    }
    return a2;
  }
  attachObserver() {
    var t2;
    const e2 = () => {
      const { container: t3, containerRect: e3 } = this;
      return Math.abs(e3.width - t3.getBoundingClientRect().width) > 0.1 || Math.abs(e3.height - t3.getBoundingClientRect().height) > 0.1;
    };
    this.resizeObserver || void 0 === window.ResizeObserver || (this.resizeObserver = new ResizeObserver(() => {
      this.updateTimer || (e2() ? (this.onResize(), this.isMobile && (this.updateTimer = setTimeout(() => {
        e2() && this.onResize(), this.updateTimer = null;
      }, 500))) : this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null));
    })), null === (t2 = this.resizeObserver) || void 0 === t2 || t2.observe(this.container);
  }
  detachObserver() {
    var t2;
    null === (t2 = this.resizeObserver) || void 0 === t2 || t2.disconnect();
  }
  attachEvents() {
    const { container: t2 } = this;
    t2.addEventListener("click", this.onClick, { passive: false, capture: false }), t2.addEventListener("wheel", this.onWheel, { passive: false }), this.pointerTracker = new l(t2, { start: this.onPointerDown, move: this.onPointerMove, end: this.onPointerUp }), document.addEventListener(O, this.onMouseMove);
  }
  detachEvents() {
    var t2;
    const { container: e2 } = this;
    e2.removeEventListener("click", this.onClick, { passive: false, capture: false }), e2.removeEventListener("wheel", this.onWheel, { passive: false }), null === (t2 = this.pointerTracker) || void 0 === t2 || t2.stop(), this.pointerTracker = null, document.removeEventListener(O, this.onMouseMove), document.removeEventListener("keydown", this.onKeydown, true), this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null), this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null);
  }
  animate() {
    this.setTargetForce();
    const t2 = this.friction, e2 = this.option("maxVelocity");
    for (const i2 of v) t2 ? (this.velocity[i2] *= 1 - t2, e2 && !this.isScaling && (this.velocity[i2] = Math.max(Math.min(this.velocity[i2], e2), -1 * e2)), this.current[i2] += this.velocity[i2]) : this.current[i2] = this.target[i2];
    this.setTransform(), this.setEdgeForce(), !this.isResting || this.isDragging ? this.rAF = requestAnimationFrame(() => this.animate()) : this.stop("current");
  }
  setTargetForce() {
    for (const t2 of v) "e" === t2 && this.isBouncingX || "f" === t2 && this.isBouncingY || (this.velocity[t2] = (1 / (1 - this.friction) - 1) * (this.target[t2] - this.current[t2]));
  }
  checkBounds(t2 = 0, e2 = 0) {
    const { current: i2 } = this, n2 = i2.e + t2, s2 = i2.f + e2, o2 = this.getBounds(), { x: a2, y: r2 } = o2, l2 = a2.min, c2 = a2.max, h2 = r2.min, d2 = r2.max;
    let u2 = 0, p2 = 0;
    return l2 !== 1 / 0 && n2 < l2 ? u2 = l2 - n2 : c2 !== 1 / 0 && n2 > c2 && (u2 = c2 - n2), h2 !== 1 / 0 && s2 < h2 ? p2 = h2 - s2 : d2 !== 1 / 0 && s2 > d2 && (p2 = d2 - s2), Math.abs(u2) < 1e-4 && (u2 = 0), Math.abs(p2) < 1e-4 && (p2 = 0), Object.assign(Object.assign({}, o2), { xDiff: u2, yDiff: p2, inBounds: !u2 && !p2 });
  }
  clampTargetBounds() {
    const { target: t2 } = this, { x: e2, y: i2 } = this.getBounds();
    e2.min !== 1 / 0 && (t2.e = Math.max(t2.e, e2.min)), e2.max !== 1 / 0 && (t2.e = Math.min(t2.e, e2.max)), i2.min !== 1 / 0 && (t2.f = Math.max(t2.f, i2.min)), i2.max !== 1 / 0 && (t2.f = Math.min(t2.f, i2.max));
  }
  calculateContentDim(t2 = this.current) {
    const { content: e2, contentRect: i2 } = this, { fitWidth: n2, fitHeight: s2, fullWidth: o2, fullHeight: a2 } = i2;
    let r2 = o2, l2 = a2;
    if (this.option("zoom") || 0 !== this.angle) {
      const i3 = !(e2 instanceof HTMLImageElement) && ("none" === window.getComputedStyle(e2).maxWidth || "none" === window.getComputedStyle(e2).maxHeight), c2 = i3 ? o2 : n2, h2 = i3 ? a2 : s2, d2 = this.getMatrix(t2), u2 = new DOMPoint(0, 0).matrixTransform(d2), p2 = new DOMPoint(0 + c2, 0).matrixTransform(d2), f2 = new DOMPoint(0 + c2, 0 + h2).matrixTransform(d2), g2 = new DOMPoint(0, 0 + h2).matrixTransform(d2), m2 = Math.abs(f2.x - u2.x), v2 = Math.abs(f2.y - u2.y), b2 = Math.abs(g2.x - p2.x), y2 = Math.abs(g2.y - p2.y);
      r2 = Math.max(m2, b2), l2 = Math.max(v2, y2);
    }
    return { contentWidth: r2, contentHeight: l2 };
  }
  setEdgeForce() {
    if (this.ignoreBounds || this.isDragging || this.panMode === O || this.targetScale < this.scale) return this.isBouncingX = false, void (this.isBouncingY = false);
    const { target: t2 } = this, { x: e2, y: i2, xDiff: n2, yDiff: s2 } = this.checkBounds();
    const o2 = this.option("maxVelocity");
    let a2 = this.velocity.e, r2 = this.velocity.f;
    0 !== n2 ? (this.isBouncingX = true, n2 * a2 <= 0 ? a2 += 0.14 * n2 : (a2 = 0.14 * n2, e2.min !== 1 / 0 && (this.target.e = Math.max(t2.e, e2.min)), e2.max !== 1 / 0 && (this.target.e = Math.min(t2.e, e2.max))), o2 && (a2 = Math.max(Math.min(a2, o2), -1 * o2))) : this.isBouncingX = false, 0 !== s2 ? (this.isBouncingY = true, s2 * r2 <= 0 ? r2 += 0.14 * s2 : (r2 = 0.14 * s2, i2.min !== 1 / 0 && (this.target.f = Math.max(t2.f, i2.min)), i2.max !== 1 / 0 && (this.target.f = Math.min(t2.f, i2.max))), o2 && (r2 = Math.max(Math.min(r2, o2), -1 * o2))) : this.isBouncingY = false, this.isBouncingX && (this.velocity.e = a2), this.isBouncingY && (this.velocity.f = r2);
  }
  enable() {
    const { content: t2 } = this, e2 = new DOMMatrixReadOnly(window.getComputedStyle(t2).transform);
    for (const t3 of v) this.current[t3] = this.target[t3] = e2[t3];
    this.updateMetrics(), this.attachObserver(), this.attachEvents(), this.state = m.Ready, this.emit("ready");
  }
  onClick(t2) {
    var e2;
    "click" === t2.type && 0 === t2.detail && (this.dragOffset.x = 0, this.dragOffset.y = 0), this.isDragging && (null === (e2 = this.pointerTracker) || void 0 === e2 || e2.clear(), this.trackingPoints = [], this.startDecelAnim());
    const i2 = t2.target;
    if (!i2 || t2.defaultPrevented) return;
    if (i2.hasAttribute("disabled")) return t2.preventDefault(), void t2.stopPropagation();
    if ((() => {
      const t3 = window.getSelection();
      return t3 && "Range" === t3.type;
    })() && !i2.closest("button")) return;
    const n2 = i2.closest("[data-panzoom-action]"), s2 = i2.closest("[data-panzoom-change]"), o2 = n2 || s2, a2 = o2 && E(o2) ? o2.dataset : null;
    if (a2) {
      const e3 = a2.panzoomChange, i3 = a2.panzoomAction;
      if ((e3 || i3) && t2.preventDefault(), e3) {
        let t3 = {};
        try {
          t3 = JSON.parse(e3);
        } catch (t4) {
          console && console.warn("The given data was not valid JSON");
        }
        return void this.applyChange(t3);
      }
      if (i3) return void (this[i3] && this[i3]());
    }
    if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3) return t2.preventDefault(), void t2.stopPropagation();
    if (i2.closest("[data-fancybox]")) return;
    const r2 = this.content.getBoundingClientRect(), l2 = this.dragStart;
    if (l2.time && !this.canZoomOut() && (Math.abs(r2.x - l2.x) > 2 || Math.abs(r2.y - l2.y) > 2)) return;
    this.dragStart.time = 0;
    const c2 = (e3) => {
      this.option("zoom", t2) && e3 && "string" == typeof e3 && /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(e3) && "function" == typeof this[e3] && (t2.preventDefault(), this[e3]({ event: t2 }));
    }, h2 = this.option("click", t2), d2 = this.option("dblClick", t2);
    d2 ? (this.clicks++, 1 == this.clicks && (this.clickTimer = setTimeout(() => {
      1 === this.clicks ? (this.emit("click", t2), !t2.defaultPrevented && h2 && c2(h2)) : (this.emit("dblClick", t2), t2.defaultPrevented || c2(d2)), this.clicks = 0, this.clickTimer = null;
    }, 350))) : (this.emit("click", t2), !t2.defaultPrevented && h2 && c2(h2));
  }
  addTrackingPoint(t2) {
    const e2 = this.trackingPoints.filter((t3) => t3.time > Date.now() - 100);
    e2.push(t2), this.trackingPoints = e2;
  }
  onPointerDown(t2, e2, i2) {
    var n2;
    if (false === this.option("touch", t2)) return false;
    this.pwt = 0, this.dragOffset = { x: 0, y: 0, time: 0 }, this.trackingPoints = [];
    const s2 = this.content.getBoundingClientRect();
    if (this.dragStart = { x: s2.x, y: s2.y, top: s2.top, left: s2.left, time: Date.now() }, this.clickTimer) return false;
    if (this.panMode === O && this.targetScale > 1) return t2.preventDefault(), t2.stopPropagation(), false;
    const o2 = t2.composedPath()[0];
    if (!i2.length) {
      if (["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO", "IFRAME"].includes(o2.nodeName) || o2.closest("[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]")) return false;
      null === (n2 = window.getSelection()) || void 0 === n2 || n2.removeAllRanges();
    }
    if ("mousedown" === t2.type) ["A", "BUTTON"].includes(o2.nodeName) || t2.preventDefault();
    else if (Math.abs(this.velocity.a) > 0.3) return false;
    return this.target.e = this.current.e, this.target.f = this.current.f, this.stop(), this.isDragging || (this.isDragging = true, this.addTrackingPoint(e2), this.emit("touchStart", t2)), true;
  }
  onPointerMove(e2, n2, s2) {
    if (false === this.option("touch", e2)) return;
    if (!this.isDragging) return;
    if (n2.length < 2 && this.panOnlyZoomed && t(this.targetScale) <= t(this.minScale)) return;
    if (this.emit("touchMove", e2), e2.defaultPrevented) return;
    this.addTrackingPoint(n2[0]);
    const { content: o2 } = this, a2 = h(s2[0], s2[1]), r2 = h(n2[0], n2[1]);
    let l2 = 0, d2 = 0;
    if (n2.length > 1) {
      const t2 = o2.getBoundingClientRect();
      l2 = a2.clientX - t2.left - 0.5 * t2.width, d2 = a2.clientY - t2.top - 0.5 * t2.height;
    }
    const u2 = c(s2[0], s2[1]), p2 = c(n2[0], n2[1]);
    let f2 = u2 ? p2 / u2 : 1, g2 = r2.clientX - a2.clientX, m2 = r2.clientY - a2.clientY;
    this.dragOffset.x += g2, this.dragOffset.y += m2, this.dragOffset.time = Date.now() - this.dragStart.time;
    let v2 = t(this.targetScale) === t(this.minScale) && this.option("lockAxis");
    if (v2 && !this.lockedAxis) if ("xy" === v2 || "y" === v2 || "touchmove" === e2.type) {
      if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return void e2.preventDefault();
      const t2 = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
      this.lockedAxis = t2 > 45 && t2 < 135 ? "y" : "x", this.dragOffset.x = 0, this.dragOffset.y = 0, g2 = 0, m2 = 0;
    } else this.lockedAxis = v2;
    if (i(e2.target, this.content) && (v2 = "x", this.dragOffset.y = 0), v2 && "xy" !== v2 && this.lockedAxis !== v2 && t(this.targetScale) === t(this.minScale)) return;
    e2.cancelable && e2.preventDefault(), this.container.classList.add(this.cn("isDragging"));
    const b2 = this.checkBounds(g2, m2);
    this.option("rubberband") ? ("x" !== this.isInfinite && (b2.xDiff > 0 && g2 < 0 || b2.xDiff < 0 && g2 > 0) && (g2 *= Math.max(0, 0.5 - Math.abs(0.75 / this.contentRect.fitWidth * b2.xDiff))), "y" !== this.isInfinite && (b2.yDiff > 0 && m2 < 0 || b2.yDiff < 0 && m2 > 0) && (m2 *= Math.max(0, 0.5 - Math.abs(0.75 / this.contentRect.fitHeight * b2.yDiff)))) : (b2.xDiff && (g2 = 0), b2.yDiff && (m2 = 0));
    const y2 = this.targetScale, w2 = this.minScale, x2 = this.maxScale;
    y2 < 0.5 * w2 && (f2 = Math.max(f2, w2)), y2 > 1.5 * x2 && (f2 = Math.min(f2, x2)), "y" === this.lockedAxis && t(y2) === t(w2) && (g2 = 0), "x" === this.lockedAxis && t(y2) === t(w2) && (m2 = 0), this.applyChange({ originX: l2, originY: d2, panX: g2, panY: m2, scale: f2, friction: this.option("dragFriction"), ignoreBounds: true });
  }
  onPointerUp(t2, e2, n2) {
    if (n2.length) return this.dragOffset.x = 0, this.dragOffset.y = 0, void (this.trackingPoints = []);
    this.container.classList.remove(this.cn("isDragging")), this.isDragging && (this.addTrackingPoint(e2), this.panOnlyZoomed && this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1 && (this.trackingPoints = []), i(t2.target, this.content) && "y" === this.lockedAxis && (this.trackingPoints = []), this.emit("touchEnd", t2), this.isDragging = false, this.lockedAxis = false, this.state !== m.Destroy && (t2.defaultPrevented || this.startDecelAnim()));
  }
  startDecelAnim() {
    var e2;
    const i2 = this.isScaling;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = false, this.isBouncingY = false;
    for (const t2 of v) this.velocity[t2] = 0;
    this.target.e = this.current.e, this.target.f = this.current.f, S(this.container, "is-scaling"), S(this.container, "is-animating"), this.isTicking = false;
    const { trackingPoints: n2 } = this, s2 = n2[0], o2 = n2[n2.length - 1];
    let a2 = 0, r2 = 0, l2 = 0;
    o2 && s2 && (a2 = o2.clientX - s2.clientX, r2 = o2.clientY - s2.clientY, l2 = o2.time - s2.time);
    const c2 = (null === (e2 = window.visualViewport) || void 0 === e2 ? void 0 : e2.scale) || 1;
    1 !== c2 && (a2 *= c2, r2 *= c2);
    let h2 = 0, d2 = 0, u2 = 0, p2 = 0, f2 = this.option("decelFriction");
    const g2 = this.targetScale;
    if (l2 > 0) {
      u2 = Math.abs(a2) > 3 ? a2 / (l2 / 30) : 0, p2 = Math.abs(r2) > 3 ? r2 / (l2 / 30) : 0;
      const t2 = this.option("maxVelocity");
      t2 && (u2 = Math.max(Math.min(u2, t2), -1 * t2), p2 = Math.max(Math.min(p2, t2), -1 * t2));
    }
    u2 && (h2 = u2 / (1 / (1 - f2) - 1)), p2 && (d2 = p2 / (1 / (1 - f2) - 1)), ("y" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "y" === this.lockedAxis && t(g2) === this.minScale) && (h2 = u2 = 0), ("x" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "x" === this.lockedAxis && t(g2) === this.minScale) && (d2 = p2 = 0);
    const m2 = this.dragOffset.x, b2 = this.dragOffset.y, y2 = this.option("dragMinThreshold") || 0;
    Math.abs(m2) < y2 && Math.abs(b2) < y2 && (h2 = d2 = 0, u2 = p2 = 0), (this.option("zoom") && (g2 < this.minScale - 1e-5 || g2 > this.maxScale + 1e-5) || i2 && !h2 && !d2) && (f2 = 0.35), this.applyChange({ panX: h2, panY: d2, friction: f2 }), this.emit("decel", u2, p2, m2, b2);
  }
  onWheel(t2) {
    var e2 = [-t2.deltaX || 0, -t2.deltaY || 0, -t2.detail || 0].reduce(function(t3, e3) {
      return Math.abs(e3) > Math.abs(t3) ? e3 : t3;
    });
    const i2 = Math.max(-1, Math.min(1, e2));
    if (this.emit("wheel", t2, i2), this.panMode === O) return;
    if (t2.defaultPrevented) return;
    const n2 = this.option("wheel");
    "pan" === n2 ? (t2.preventDefault(), this.panOnlyZoomed && !this.canZoomOut() || this.applyChange({ panX: 2 * -t2.deltaX, panY: 2 * -t2.deltaY, bounce: false })) : "zoom" === n2 && false !== this.option("zoom") && this.zoomWithWheel(t2);
  }
  onMouseMove(t2) {
    this.panWithMouse(t2);
  }
  onKeydown(t2) {
    "Escape" === t2.key && this.toggleFS();
  }
  onResize() {
    this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
  }
  setTransform() {
    this.emit("beforeTransform");
    const { current: e2, target: i2, content: n2, contentRect: s2 } = this, o2 = Object.assign({}, C);
    for (const n3 of v) {
      const s3 = "e" == n3 || "f" === n3 ? M : T;
      o2[n3] = t(e2[n3], s3), Math.abs(i2[n3] - e2[n3]) < ("e" == n3 || "f" === n3 ? 0.51 : 1e-3) && (e2[n3] = i2[n3]);
    }
    let { a: a2, b: r2, c: l2, d: c2, e: h2, f: d2 } = o2, u2 = `matrix(${a2}, ${r2}, ${l2}, ${c2}, ${h2}, ${d2})`, p2 = n2.parentElement instanceof HTMLPictureElement ? n2.parentElement : n2;
    if (this.option("transformParent") && (p2 = p2.parentElement || p2), p2.style.transform === u2) return;
    p2.style.transform = u2;
    const { contentWidth: f2, contentHeight: g2 } = this.calculateContentDim();
    s2.width = f2, s2.height = g2, this.emit("afterTransform");
  }
  updateMetrics(e2 = false) {
    var i2;
    if (!this || this.state === m.Destroy) return;
    if (this.isContentLoading) return;
    const n2 = Math.max(1, (null === (i2 = window.visualViewport) || void 0 === i2 ? void 0 : i2.scale) || 1), { container: s2, content: o2 } = this, a2 = o2 instanceof HTMLImageElement, r2 = s2.getBoundingClientRect(), l2 = getComputedStyle(this.container);
    let c2 = r2.width * n2, h2 = r2.height * n2;
    const d2 = parseFloat(l2.paddingTop) + parseFloat(l2.paddingBottom), u2 = c2 - (parseFloat(l2.paddingLeft) + parseFloat(l2.paddingRight)), p2 = h2 - d2;
    this.containerRect = { width: c2, height: h2, innerWidth: u2, innerHeight: p2 };
    const f2 = parseFloat(o2.dataset.width || "") || ((t2) => {
      let e3 = 0;
      return e3 = t2 instanceof HTMLImageElement ? t2.naturalWidth : t2 instanceof SVGElement ? t2.width.baseVal.value : Math.max(t2.offsetWidth, t2.scrollWidth), e3 || 0;
    })(o2), g2 = parseFloat(o2.dataset.height || "") || ((t2) => {
      let e3 = 0;
      return e3 = t2 instanceof HTMLImageElement ? t2.naturalHeight : t2 instanceof SVGElement ? t2.height.baseVal.value : Math.max(t2.offsetHeight, t2.scrollHeight), e3 || 0;
    })(o2);
    let v2 = this.option("width", f2) || z, b2 = this.option("height", g2) || z;
    const y2 = v2 === z, w2 = b2 === z;
    "number" != typeof v2 && (v2 = f2), "number" != typeof b2 && (b2 = g2), y2 && (v2 = f2 * (b2 / g2)), w2 && (b2 = g2 / (f2 / v2));
    let x2 = o2.parentElement instanceof HTMLPictureElement ? o2.parentElement : o2;
    this.option("transformParent") && (x2 = x2.parentElement || x2);
    const E2 = x2.getAttribute("style") || "";
    x2.style.setProperty("transform", "none", "important"), a2 && (x2.style.width = "", x2.style.height = ""), x2.offsetHeight;
    const S2 = o2.getBoundingClientRect();
    let P2 = S2.width * n2, C2 = S2.height * n2, T2 = P2, M2 = C2;
    P2 = Math.min(P2, v2), C2 = Math.min(C2, b2), a2 ? { width: P2, height: C2 } = ((t2, e3, i3, n3) => {
      const s3 = i3 / t2, o3 = n3 / e3, a3 = Math.min(s3, o3);
      return { width: t2 *= a3, height: e3 *= a3 };
    })(v2, b2, P2, C2) : (P2 = Math.min(P2, v2), C2 = Math.min(C2, b2));
    let O2 = 0.5 * (M2 - C2), A2 = 0.5 * (T2 - P2);
    this.contentRect = Object.assign(Object.assign({}, this.contentRect), { top: S2.top - r2.top + O2, bottom: r2.bottom - S2.bottom + O2, left: S2.left - r2.left + A2, right: r2.right - S2.right + A2, fitWidth: P2, fitHeight: C2, width: P2, height: C2, fullWidth: v2, fullHeight: b2 }), x2.style.cssText = E2, a2 && (x2.style.width = `${P2}px`, x2.style.height = `${C2}px`), this.setTransform(), true !== e2 && this.emit("refresh"), this.ignoreBounds || (t(this.targetScale) < t(this.minScale) ? this.zoomTo(this.minScale, { friction: 0 }) : this.targetScale > this.maxScale ? this.zoomTo(this.maxScale, { friction: 0 }) : this.state === m.Init || this.checkBounds().inBounds || this.requestTick()), this.updateControls();
  }
  calculateBounds() {
    const { contentWidth: e2, contentHeight: i2 } = this.calculateContentDim(this.target), { targetScale: n2, lockedAxis: s2 } = this, { fitWidth: o2, fitHeight: a2 } = this.contentRect;
    let r2 = 0, l2 = 0, c2 = 0, h2 = 0;
    const d2 = this.option("infinite");
    if (true === d2 || s2 && d2 === s2) r2 = -1 / 0, c2 = 1 / 0, l2 = -1 / 0, h2 = 1 / 0;
    else {
      let { containerRect: s3, contentRect: d3 } = this, u2 = t(o2 * n2, M), p2 = t(a2 * n2, M), { innerWidth: f2, innerHeight: g2 } = s3;
      if (s3.width === u2 && (f2 = s3.width), s3.width === p2 && (g2 = s3.height), e2 > f2) {
        c2 = 0.5 * (e2 - f2), r2 = -1 * c2;
        let t2 = 0.5 * (d3.right - d3.left);
        r2 += t2, c2 += t2;
      }
      if (o2 > f2 && e2 < f2 && (r2 -= 0.5 * (o2 - f2), c2 -= 0.5 * (o2 - f2)), i2 > g2) {
        h2 = 0.5 * (i2 - g2), l2 = -1 * h2;
        let t2 = 0.5 * (d3.bottom - d3.top);
        l2 += t2, h2 += t2;
      }
      a2 > g2 && i2 < g2 && (r2 -= 0.5 * (a2 - g2), c2 -= 0.5 * (a2 - g2));
    }
    return { x: { min: r2, max: c2 }, y: { min: l2, max: h2 } };
  }
  getBounds() {
    const t2 = this.option("bounds");
    return t2 !== z ? t2 : this.calculateBounds();
  }
  updateControls() {
    const e2 = this, i2 = e2.container, { panMode: n2, contentRect: s2, targetScale: a2, minScale: r2 } = e2;
    let l2 = r2, c2 = e2.option("click") || false;
    c2 && (l2 = e2.getNextScale(c2));
    let h2 = e2.canZoomIn(), d2 = e2.canZoomOut(), u2 = n2 === A && !!this.option("touch"), p2 = d2 && u2;
    if (u2 && (t(a2) < t(r2) && !this.panOnlyZoomed && (p2 = true), (t(s2.width, 1) > t(s2.fitWidth, 1) || t(s2.height, 1) > t(s2.fitHeight, 1)) && (p2 = true)), t(s2.width * a2, 1) < t(s2.fitWidth, 1) && (p2 = false), n2 === O && (p2 = false), o(i2, this.cn("isDraggable"), p2), !this.option("zoom")) return;
    let f2 = h2 && t(l2) > t(a2), g2 = !f2 && !p2 && d2 && t(l2) < t(a2);
    o(i2, this.cn("canZoomIn"), f2), o(i2, this.cn("canZoomOut"), g2);
    for (const t2 of i2.querySelectorAll("[data-panzoom-action]")) {
      let e3 = false, i3 = false;
      switch (t2.dataset.panzoomAction) {
        case "zoomIn":
          h2 ? e3 = true : i3 = true;
          break;
        case "zoomOut":
          d2 ? e3 = true : i3 = true;
          break;
        case "toggleZoom":
        case "iterateZoom":
          h2 || d2 ? e3 = true : i3 = true;
          const n3 = t2.querySelector("g");
          n3 && (n3.style.display = h2 ? "" : "none");
      }
      e3 ? (t2.removeAttribute("disabled"), t2.removeAttribute("tabindex")) : i3 && (t2.setAttribute("disabled", ""), t2.setAttribute("tabindex", "-1"));
    }
  }
  panTo({ x: t2 = this.target.e, y: e2 = this.target.f, scale: i2 = this.targetScale, friction: n2 = this.option("friction"), angle: s2 = 0, originX: o2 = 0, originY: a2 = 0, flipX: r2 = false, flipY: l2 = false, ignoreBounds: c2 = false }) {
    this.state !== m.Destroy && this.applyChange({ panX: t2 - this.target.e, panY: e2 - this.target.f, scale: i2 / this.targetScale, angle: s2, originX: o2, originY: a2, friction: n2, flipX: r2, flipY: l2, ignoreBounds: c2 });
  }
  applyChange({ panX: e2 = 0, panY: i2 = 0, scale: n2 = 1, angle: s2 = 0, originX: o2 = -this.current.e, originY: a2 = -this.current.f, friction: r2 = this.option("friction"), flipX: l2 = false, flipY: c2 = false, ignoreBounds: h2 = false, bounce: d2 = this.option("bounce") }) {
    const u2 = this.state;
    if (u2 === m.Destroy) return;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.friction = r2 || 0, this.ignoreBounds = h2;
    const { current: p2 } = this, f2 = p2.e, g2 = p2.f, b2 = this.getMatrix(this.target);
    let y2 = new DOMMatrix().translate(f2, g2).translate(o2, a2).translate(e2, i2);
    if (this.option("zoom")) {
      if (!h2) {
        const t2 = this.targetScale, e3 = this.minScale, i3 = this.maxScale;
        t2 * n2 < e3 && (n2 = e3 / t2), t2 * n2 > i3 && (n2 = i3 / t2);
      }
      y2 = y2.scale(n2);
    }
    y2 = y2.translate(-o2, -a2).translate(-f2, -g2).multiply(b2), s2 && (y2 = y2.rotate(s2)), l2 && (y2 = y2.scale(-1, 1)), c2 && (y2 = y2.scale(1, -1));
    for (const e3 of v) "e" !== e3 && "f" !== e3 && (y2[e3] > this.minScale + 1e-5 || y2[e3] < this.minScale - 1e-5) ? this.target[e3] = y2[e3] : this.target[e3] = t(y2[e3], M);
    (this.targetScale < this.scale || Math.abs(n2 - 1) > 0.1 || this.panMode === O || false === d2) && !h2 && this.clampTargetBounds(), u2 === m.Init ? this.animate() : this.isResting || (this.state = m.Panning, this.requestTick());
  }
  stop(t2 = false) {
    if (this.state === m.Init || this.state === m.Destroy) return;
    const e2 = this.isTicking;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = false, this.isBouncingY = false;
    for (const e3 of v) this.velocity[e3] = 0, "current" === t2 ? this.current[e3] = this.target[e3] : "target" === t2 && (this.target[e3] = this.current[e3]);
    this.setTransform(), S(this.container, "is-scaling"), S(this.container, "is-animating"), this.isTicking = false, this.state = m.Ready, e2 && (this.emit("endAnimation"), this.updateControls());
  }
  requestTick() {
    this.isTicking || (this.emit("startAnimation"), this.updateControls(), P(this.container, "is-animating"), this.isScaling && P(this.container, "is-scaling")), this.isTicking = true, this.rAF || (this.rAF = requestAnimationFrame(() => this.animate()));
  }
  panWithMouse(e2, i2 = this.option("mouseMoveFriction")) {
    if (this.pmme = e2, this.panMode !== O || !e2) return;
    if (t(this.targetScale) <= t(this.minScale)) return;
    this.emit("mouseMove", e2);
    const { container: n2, containerRect: s2, contentRect: o2 } = this, a2 = s2.width, r2 = s2.height, l2 = n2.getBoundingClientRect(), c2 = (e2.clientX || 0) - l2.left, h2 = (e2.clientY || 0) - l2.top;
    let { contentWidth: d2, contentHeight: u2 } = this.calculateContentDim(this.target);
    const p2 = this.option("mouseMoveFactor");
    p2 > 1 && (d2 !== a2 && (d2 *= p2), u2 !== r2 && (u2 *= p2));
    let f2 = 0.5 * (d2 - a2) - c2 / a2 * 100 / 100 * (d2 - a2);
    f2 += 0.5 * (o2.right - o2.left);
    let g2 = 0.5 * (u2 - r2) - h2 / r2 * 100 / 100 * (u2 - r2);
    g2 += 0.5 * (o2.bottom - o2.top), this.applyChange({ panX: f2 - this.target.e, panY: g2 - this.target.f, friction: i2 });
  }
  zoomWithWheel(e2) {
    if (this.state === m.Destroy || this.state === m.Init) return;
    const i2 = Date.now();
    if (i2 - this.pwt < 45) return void e2.preventDefault();
    this.pwt = i2;
    var n2 = [-e2.deltaX || 0, -e2.deltaY || 0, -e2.detail || 0].reduce(function(t2, e3) {
      return Math.abs(e3) > Math.abs(t2) ? e3 : t2;
    });
    const s2 = Math.max(-1, Math.min(1, n2)), { targetScale: o2, maxScale: a2, minScale: r2 } = this;
    let l2 = o2 * (100 + 45 * s2) / 100;
    t(l2) < t(r2) && t(o2) <= t(r2) ? (this.cwd += Math.abs(s2), l2 = r2) : t(l2) > t(a2) && t(o2) >= t(a2) ? (this.cwd += Math.abs(s2), l2 = a2) : (this.cwd = 0, l2 = Math.max(Math.min(l2, a2), r2)), this.cwd > this.option("wheelLimit") || (e2.preventDefault(), t(l2) !== t(o2) && this.zoomTo(l2, { event: e2 }));
  }
  canZoomIn() {
    return this.option("zoom") && (t(this.contentRect.width, 1) < t(this.contentRect.fitWidth, 1) || t(this.targetScale) < t(this.maxScale));
  }
  canZoomOut() {
    return this.option("zoom") && t(this.targetScale) > t(this.minScale);
  }
  zoomIn(t2 = 1.25, e2) {
    this.zoomTo(this.targetScale * t2, e2);
  }
  zoomOut(t2 = 0.8, e2) {
    this.zoomTo(this.targetScale * t2, e2);
  }
  zoomToFit(t2) {
    this.zoomTo("fit", t2);
  }
  zoomToCover(t2) {
    this.zoomTo("cover", t2);
  }
  zoomToFull(t2) {
    this.zoomTo("full", t2);
  }
  zoomToMax(t2) {
    this.zoomTo("max", t2);
  }
  toggleZoom(t2) {
    this.zoomTo(this.getNextScale("toggleZoom"), t2);
  }
  toggleMax(t2) {
    this.zoomTo(this.getNextScale("toggleMax"), t2);
  }
  toggleCover(t2) {
    this.zoomTo(this.getNextScale("toggleCover"), t2);
  }
  iterateZoom(t2) {
    this.zoomTo("next", t2);
  }
  zoomTo(t2 = 1, { friction: e2 = z, originX: i2 = z, originY: n2 = z, event: s2 } = {}) {
    if (this.isContentLoading || this.state === m.Destroy) return;
    const { targetScale: o2, fullScale: a2, maxScale: r2, coverScale: l2 } = this;
    if (this.stop(), this.panMode === O && (s2 = this.pmme || s2), s2 || i2 === z || n2 === z) {
      const t3 = this.content.getBoundingClientRect(), e3 = this.container.getBoundingClientRect(), o3 = s2 ? s2.clientX : e3.left + 0.5 * e3.width, a3 = s2 ? s2.clientY : e3.top + 0.5 * e3.height;
      i2 = o3 - t3.left - 0.5 * t3.width, n2 = a3 - t3.top - 0.5 * t3.height;
    }
    let c2 = 1;
    "number" == typeof t2 ? c2 = t2 : "full" === t2 ? c2 = a2 : "cover" === t2 ? c2 = l2 : "max" === t2 ? c2 = r2 : "fit" === t2 ? c2 = 1 : "next" === t2 && (c2 = this.getNextScale("iterateZoom")), c2 = c2 / o2 || 1, e2 = e2 === z ? c2 > 1 ? 0.15 : 0.25 : e2, this.applyChange({ scale: c2, originX: i2, originY: n2, friction: e2 }), s2 && this.panMode === O && this.panWithMouse(s2, e2);
  }
  rotateCCW() {
    this.applyChange({ angle: -90 });
  }
  rotateCW() {
    this.applyChange({ angle: 90 });
  }
  flipX() {
    this.applyChange({ flipX: true });
  }
  flipY() {
    this.applyChange({ flipY: true });
  }
  fitX() {
    this.stop("target");
    const { containerRect: t2, contentRect: e2, target: i2 } = this;
    this.applyChange({ panX: 0.5 * t2.width - (e2.left + 0.5 * e2.fitWidth) - i2.e, panY: 0.5 * t2.height - (e2.top + 0.5 * e2.fitHeight) - i2.f, scale: t2.width / e2.fitWidth / this.targetScale, originX: 0, originY: 0, ignoreBounds: true });
  }
  fitY() {
    this.stop("target");
    const { containerRect: t2, contentRect: e2, target: i2 } = this;
    this.applyChange({ panX: 0.5 * t2.width - (e2.left + 0.5 * e2.fitWidth) - i2.e, panY: 0.5 * t2.innerHeight - (e2.top + 0.5 * e2.fitHeight) - i2.f, scale: t2.height / e2.fitHeight / this.targetScale, originX: 0, originY: 0, ignoreBounds: true });
  }
  toggleFS() {
    const { container: t2 } = this, e2 = this.cn("inFullscreen"), i2 = this.cn("htmlHasFullscreen");
    t2.classList.toggle(e2);
    const n2 = t2.classList.contains(e2);
    n2 ? (document.documentElement.classList.add(i2), document.addEventListener("keydown", this.onKeydown, true)) : (document.documentElement.classList.remove(i2), document.removeEventListener("keydown", this.onKeydown, true)), this.updateMetrics(), this.emit(n2 ? "enterFS" : "exitFS");
  }
  getMatrix(t2 = this.current) {
    const { a: e2, b: i2, c: n2, d: s2, e: o2, f: a2 } = t2;
    return new DOMMatrix([e2, i2, n2, s2, o2, a2]);
  }
  reset(t2) {
    if (this.state !== m.Init && this.state !== m.Destroy) {
      this.stop("current");
      for (const t3 of v) this.target[t3] = C[t3];
      this.target.a = this.minScale, this.target.d = this.minScale, this.clampTargetBounds(), this.isResting || (this.friction = void 0 === t2 ? this.option("friction") : t2, this.state = m.Panning, this.requestTick());
    }
  }
  destroy() {
    this.stop(), this.state = m.Destroy, this.detachEvents(), this.detachObserver();
    const { container: t2, content: e2 } = this, i2 = this.option("classes") || {};
    for (const e3 of Object.values(i2)) t2.classList.remove(e3 + "");
    e2 && (e2.removeEventListener("load", this.onLoad), e2.removeEventListener("error", this.onError)), this.detachPlugins();
  }
}
Object.defineProperty(I, "defaults", { enumerable: true, configurable: true, writable: true, value: y }), Object.defineProperty(I, "Plugins", { enumerable: true, configurable: true, writable: true, value: {} });
const D = function(t2, e2) {
  let i2 = true;
  return (...n2) => {
    i2 && (i2 = false, t2(...n2), setTimeout(() => {
      i2 = true;
    }, e2));
  };
}, F = (t2, e2) => {
  let i2 = [];
  return t2.childNodes.forEach((t3) => {
    t3.nodeType !== Node.ELEMENT_NODE || e2 && !t3.matches(e2) || i2.push(t3);
  }), i2;
}, j = { viewport: null, track: null, enabled: true, slides: [], axis: "x", transition: "fade", preload: 1, slidesPerPage: "auto", initialPage: 0, friction: 0.12, Panzoom: { decelFriction: 0.12 }, center: true, infinite: true, fill: true, dragFree: false, adaptiveHeight: false, direction: "ltr", classes: { container: "f-carousel", viewport: "f-carousel__viewport", track: "f-carousel__track", slide: "f-carousel__slide", isLTR: "is-ltr", isRTL: "is-rtl", isHorizontal: "is-horizontal", isVertical: "is-vertical", inTransition: "in-transition", isSelected: "is-selected" }, l10n: { NEXT: "Next slide", PREV: "Previous slide", GOTO: "Go to slide #%d" } };
var B;
!function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Ready = 1] = "Ready", t2[t2.Destroy = 2] = "Destroy";
}(B || (B = {}));
const H = (t2) => {
  if ("string" == typeof t2 || t2 instanceof HTMLElement) t2 = { html: t2 };
  else {
    const e2 = t2.thumb;
    void 0 !== e2 && ("string" == typeof e2 && (t2.thumbSrc = e2), e2 instanceof HTMLImageElement && (t2.thumbEl = e2, t2.thumbElSrc = e2.src, t2.thumbSrc = e2.src), delete t2.thumb);
  }
  return Object.assign({ html: "", el: null, isDom: false, class: "", customClass: "", index: -1, dim: 0, gap: 0, pos: 0, transition: false }, t2);
}, N = (t2 = {}) => Object.assign({ index: -1, slides: [], dim: 0, pos: -1 }, t2);
class _ extends f {
  constructor(t2, e2) {
    super(e2), Object.defineProperty(this, "instance", { enumerable: true, configurable: true, writable: true, value: t2 });
  }
  attach() {
  }
  detach() {
  }
}
const $ = { classes: { list: "f-carousel__dots", isDynamic: "is-dynamic", hasDots: "has-dots", dot: "f-carousel__dot", isBeforePrev: "is-before-prev", isPrev: "is-prev", isCurrent: "is-current", isNext: "is-next", isAfterNext: "is-after-next" }, dotTpl: '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>', dynamicFrom: 11, maxCount: 1 / 0, minCount: 2 };
class W extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "isDynamic", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "list", { enumerable: true, configurable: true, writable: true, value: null });
  }
  onRefresh() {
    this.refresh();
  }
  build() {
    let t2 = this.list;
    if (!t2) {
      t2 = document.createElement("ul"), P(t2, this.cn("list")), t2.setAttribute("role", "tablist");
      const e2 = this.instance.container;
      e2.appendChild(t2), P(e2, this.cn("hasDots")), this.list = t2;
    }
    return t2;
  }
  refresh() {
    var t2;
    const e2 = this.instance.pages.length, i2 = Math.min(2, this.option("minCount")), n2 = Math.max(2e3, this.option("maxCount")), s2 = this.option("dynamicFrom");
    if (e2 < i2 || e2 > n2) return void this.cleanup();
    const a2 = "number" == typeof s2 && e2 > 5 && e2 >= s2, r2 = !this.list || this.isDynamic !== a2 || this.list.children.length !== e2;
    r2 && this.cleanup();
    const l2 = this.build();
    if (o(l2, this.cn("isDynamic"), !!a2), r2) for (let t3 = 0; t3 < e2; t3++) l2.append(this.createItem(t3));
    let c2, h2 = 0;
    for (const e3 of [...l2.children]) {
      const i3 = h2 === this.instance.page;
      i3 && (c2 = e3), o(e3, this.cn("isCurrent"), i3), null === (t2 = e3.children[0]) || void 0 === t2 || t2.setAttribute("aria-selected", i3 ? "true" : "false");
      for (const t3 of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"]) S(e3, this.cn(t3));
      h2++;
    }
    if (c2 = c2 || l2.firstChild, a2 && c2) {
      const t3 = c2.previousElementSibling, e3 = t3 && t3.previousElementSibling;
      P(t3, this.cn("isPrev")), P(e3, this.cn("isBeforePrev"));
      const i3 = c2.nextElementSibling, n3 = i3 && i3.nextElementSibling;
      P(i3, this.cn("isNext")), P(n3, this.cn("isAfterNext"));
    }
    this.isDynamic = a2;
  }
  createItem(t2 = 0) {
    var e2;
    const i2 = document.createElement("li");
    i2.setAttribute("role", "presentation");
    const s2 = n(this.instance.localize(this.option("dotTpl"), [["%d", t2 + 1]]).replace(/\%i/g, t2 + ""));
    return i2.appendChild(s2), null === (e2 = i2.children[0]) || void 0 === e2 || e2.setAttribute("role", "tab"), i2;
  }
  cleanup() {
    this.list && (this.list.remove(), this.list = null), this.isDynamic = false, S(this.instance.container, this.cn("hasDots"));
  }
  attach() {
    this.instance.on(["refresh", "change"], this.onRefresh);
  }
  detach() {
    this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
  }
}
Object.defineProperty(W, "defaults", { enumerable: true, configurable: true, writable: true, value: $ });
const X = "disabled", q = "next", Y = "prev";
class V extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "prev", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "next", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "isDom", { enumerable: true, configurable: true, writable: true, value: false });
  }
  onRefresh() {
    const t2 = this.instance, e2 = t2.pages.length, i2 = t2.page;
    if (e2 < 2) return void this.cleanup();
    this.build();
    let n2 = this.prev, s2 = this.next;
    n2 && s2 && (n2.removeAttribute(X), s2.removeAttribute(X), t2.isInfinite || (i2 <= 0 && n2.setAttribute(X, ""), i2 >= e2 - 1 && s2.setAttribute(X, "")));
  }
  addBtn(t2) {
    var e2;
    const i2 = this.instance, n2 = document.createElement("button");
    n2.setAttribute("tabindex", "0"), n2.setAttribute("title", i2.localize(`{{${t2.toUpperCase()}}}`)), P(n2, this.cn("button") + " " + this.cn(t2 === q ? "isNext" : "isPrev"));
    const s2 = i2.isRTL ? t2 === q ? Y : q : t2;
    var o2;
    return n2.innerHTML = i2.localize(this.option(`${s2}Tpl`)), n2.dataset[`carousel${o2 = t2, o2 ? o2.match("^[a-z]") ? o2.charAt(0).toUpperCase() + o2.substring(1) : o2 : ""}`] = "true", null === (e2 = this.container) || void 0 === e2 || e2.appendChild(n2), n2;
  }
  build() {
    const t2 = this.instance.container, e2 = this.cn("container");
    let { container: i2, prev: n2, next: s2 } = this;
    i2 || (i2 = t2.querySelector("." + e2), this.isDom = !!i2), i2 || (i2 = document.createElement("div"), P(i2, e2), t2.appendChild(i2)), this.container = i2, s2 || (s2 = i2.querySelector("[data-carousel-next]")), s2 || (s2 = this.addBtn(q)), this.next = s2, n2 || (n2 = i2.querySelector("[data-carousel-prev]")), n2 || (n2 = this.addBtn(Y)), this.prev = n2;
  }
  cleanup() {
    this.isDom || (this.prev && this.prev.remove(), this.next && this.next.remove(), this.container && this.container.remove()), this.prev = null, this.next = null, this.container = null, this.isDom = false;
  }
  attach() {
    this.instance.on(["refresh", "change"], this.onRefresh);
  }
  detach() {
    this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
  }
}
Object.defineProperty(V, "defaults", { enumerable: true, configurable: true, writable: true, value: { classes: { container: "f-carousel__nav", button: "f-button", isNext: "is-next", isPrev: "is-prev" }, nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>', prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>' } });
class Z extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "selectedIndex", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "target", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "nav", { enumerable: true, configurable: true, writable: true, value: null });
  }
  addAsTargetFor(t2) {
    this.target = this.instance, this.nav = t2, this.attachEvents();
  }
  addAsNavFor(t2) {
    this.nav = this.instance, this.target = t2, this.attachEvents();
  }
  attachEvents() {
    const { nav: t2, target: e2 } = this;
    t2 && e2 && (t2.options.initialSlide = e2.options.initialPage, t2.state === B.Ready ? this.onNavReady(t2) : t2.on("ready", this.onNavReady), e2.state === B.Ready ? this.onTargetReady(e2) : e2.on("ready", this.onTargetReady));
  }
  onNavReady(t2) {
    t2.on("createSlide", this.onNavCreateSlide), t2.on("Panzoom.click", this.onNavClick), t2.on("Panzoom.touchEnd", this.onNavTouch), this.onTargetChange();
  }
  onTargetReady(t2) {
    t2.on("change", this.onTargetChange), t2.on("Panzoom.refresh", this.onTargetChange), this.onTargetChange();
  }
  onNavClick(t2, e2, i2) {
    this.onNavTouch(t2, t2.panzoom, i2);
  }
  onNavTouch(t2, e2, i2) {
    var n2, s2;
    if (Math.abs(e2.dragOffset.x) > 3 || Math.abs(e2.dragOffset.y) > 3) return;
    const o2 = i2.target, { nav: a2, target: r2 } = this;
    if (!a2 || !r2 || !o2) return;
    const l2 = o2.closest("[data-index]");
    if (i2.stopPropagation(), i2.preventDefault(), !l2) return;
    const c2 = parseInt(l2.dataset.index || "", 10) || 0, h2 = r2.getPageForSlide(c2), d2 = a2.getPageForSlide(c2);
    a2.slideTo(d2), r2.slideTo(h2, { friction: (null === (s2 = null === (n2 = this.nav) || void 0 === n2 ? void 0 : n2.plugins) || void 0 === s2 ? void 0 : s2.Sync.option("friction")) || 0 }), this.markSelectedSlide(c2);
  }
  onNavCreateSlide(t2, e2) {
    e2.index === this.selectedIndex && this.markSelectedSlide(e2.index);
  }
  onTargetChange() {
    var t2, e2;
    const { target: i2, nav: n2 } = this;
    if (!i2 || !n2) return;
    if (n2.state !== B.Ready || i2.state !== B.Ready) return;
    const s2 = null === (e2 = null === (t2 = i2.pages[i2.page]) || void 0 === t2 ? void 0 : t2.slides[0]) || void 0 === e2 ? void 0 : e2.index, o2 = n2.getPageForSlide(s2);
    this.markSelectedSlide(s2), n2.slideTo(o2, null === n2.prevPage && null === i2.prevPage ? { friction: 0 } : void 0);
  }
  markSelectedSlide(t2) {
    const e2 = this.nav;
    e2 && e2.state === B.Ready && (this.selectedIndex = t2, [...e2.slides].map((e3) => {
      e3.el && e3.el.classList[e3.index === t2 ? "add" : "remove"]("is-nav-selected");
    }));
  }
  attach() {
    const t2 = this;
    let e2 = t2.options.target, i2 = t2.options.nav;
    e2 ? t2.addAsNavFor(e2) : i2 && t2.addAsTargetFor(i2);
  }
  detach() {
    const t2 = this, e2 = t2.nav, i2 = t2.target;
    e2 && (e2.off("ready", t2.onNavReady), e2.off("createSlide", t2.onNavCreateSlide), e2.off("Panzoom.click", t2.onNavClick), e2.off("Panzoom.touchEnd", t2.onNavTouch)), t2.nav = null, i2 && (i2.off("ready", t2.onTargetReady), i2.off("refresh", t2.onTargetChange), i2.off("change", t2.onTargetChange)), t2.target = null;
  }
}
Object.defineProperty(Z, "defaults", { enumerable: true, configurable: true, writable: true, value: { friction: 0.35 } });
const U = { Navigation: V, Dots: W, Sync: Z }, G = "animationend", K = "isSelected", J = "slide";
class Q extends g {
  get axis() {
    return this.isHorizontal ? "e" : "f";
  }
  get isEnabled() {
    return this.state === B.Ready;
  }
  get isInfinite() {
    let t2 = false;
    const { contentDim: e2, viewportDim: i2, pages: n2, slides: s2 } = this, o2 = s2[0];
    return n2.length >= 2 && o2 && e2 + o2.dim >= i2 && (t2 = this.option("infinite")), t2;
  }
  get isRTL() {
    return "rtl" === this.option("direction");
  }
  get isHorizontal() {
    return "x" === this.option("axis");
  }
  constructor(t2, e2 = {}, i2 = {}) {
    if (super(), Object.defineProperty(this, "bp", { enumerable: true, configurable: true, writable: true, value: "" }), Object.defineProperty(this, "lp", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "userOptions", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "userPlugins", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: B.Init }), Object.defineProperty(this, "page", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "prevPage", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "viewport", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "track", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "slides", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "pages", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "panzoom", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "inTransition", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Set() }), Object.defineProperty(this, "contentDim", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "viewportDim", { enumerable: true, configurable: true, writable: true, value: 0 }), "string" == typeof t2 && (t2 = document.querySelector(t2)), !t2 || !E(t2)) throw new Error("No Element found");
    this.container = t2, this.slideNext = D(this.slideNext.bind(this), 150), this.slidePrev = D(this.slidePrev.bind(this), 150), this.userOptions = e2, this.userPlugins = i2, queueMicrotask(() => {
      this.processOptions();
    });
  }
  processOptions() {
    var t2, e2;
    const i2 = u({}, Q.defaults, this.userOptions);
    let n2 = "";
    const s2 = i2.breakpoints;
    if (s2 && d(s2)) for (const [t3, e3] of Object.entries(s2)) window.matchMedia(t3).matches && d(e3) && (n2 += t3, u(i2, e3));
    n2 === this.bp && this.state !== B.Init || (this.bp = n2, this.state === B.Ready && (i2.initialSlide = (null === (e2 = null === (t2 = this.pages[this.page]) || void 0 === t2 ? void 0 : t2.slides[0]) || void 0 === e2 ? void 0 : e2.index) || 0), this.state !== B.Init && this.destroy(), super.setOptions(i2), false === this.option("enabled") ? this.attachEvents() : setTimeout(() => {
      this.init();
    }, 0));
  }
  init() {
    this.state = B.Init, this.emit("init"), this.attachPlugins(Object.assign(Object.assign({}, Q.Plugins), this.userPlugins)), this.emit("attachPlugins"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.setInitialPosition(), this.initPanzoom(), this.attachEvents(), this.state = B.Ready, this.emit("ready");
  }
  initLayout() {
    const { container: t2 } = this, e2 = this.option("classes");
    P(t2, this.cn("container")), o(t2, e2.isLTR, !this.isRTL), o(t2, e2.isRTL, this.isRTL), o(t2, e2.isVertical, !this.isHorizontal), o(t2, e2.isHorizontal, this.isHorizontal);
    let i2 = this.option("viewport") || t2.querySelector(`.${e2.viewport}`);
    i2 || (i2 = document.createElement("div"), P(i2, e2.viewport), i2.append(...F(t2, `.${e2.slide}`)), t2.prepend(i2)), i2.addEventListener("scroll", this.onScroll);
    let n2 = this.option("track") || t2.querySelector(`.${e2.track}`);
    n2 || (n2 = document.createElement("div"), P(n2, e2.track), n2.append(...Array.from(i2.childNodes))), n2.setAttribute("aria-live", "polite"), i2.contains(n2) || i2.prepend(n2), this.viewport = i2, this.track = n2, this.emit("initLayout");
  }
  initSlides() {
    const { track: t2 } = this;
    if (!t2) return;
    const e2 = [...this.slides], i2 = [];
    [...F(t2, `.${this.cn(J)}`)].forEach((t3) => {
      if (E(t3)) {
        const e3 = H({ el: t3, isDom: true, index: this.slides.length });
        i2.push(e3);
      }
    });
    for (let t3 of [...this.option("slides", []) || [], ...e2]) i2.push(H(t3));
    this.slides = i2;
    for (let t3 = 0; t3 < this.slides.length; t3++) this.slides[t3].index = t3;
    for (const t3 of i2) this.emit("beforeInitSlide", t3, t3.index), this.emit("initSlide", t3, t3.index);
    this.emit("initSlides");
  }
  setInitialPage() {
    const t2 = this.option("initialSlide");
    this.page = "number" == typeof t2 ? this.getPageForSlide(t2) : parseInt(this.option("initialPage", 0) + "", 10) || 0;
  }
  setInitialPosition() {
    const { track: t2, pages: e2, isHorizontal: i2 } = this;
    if (!t2 || !e2.length) return;
    let n2 = this.page;
    e2[n2] || (this.page = n2 = 0);
    const s2 = (e2[n2].pos || 0) * (this.isRTL && i2 ? 1 : -1), o2 = i2 ? `${s2}px` : "0", a2 = i2 ? "0" : `${s2}px`;
    t2.style.transform = `translate3d(${o2}, ${a2}, 0) scale(1)`, this.option("adaptiveHeight") && this.setViewportHeight();
  }
  initPanzoom() {
    this.panzoom && (this.panzoom.destroy(), this.panzoom = null);
    const t2 = this.option("Panzoom") || {};
    this.panzoom = new I(this.viewport, u({}, { content: this.track, zoom: false, panOnlyZoomed: false, lockAxis: this.isHorizontal ? "x" : "y", infinite: this.isInfinite, click: false, dblClick: false, touch: (t3) => !(this.pages.length < 2 && !t3.options.infinite), bounds: () => this.getBounds(), maxVelocity: (t3) => Math.abs(t3.target[this.axis] - t3.current[this.axis]) < 2 * this.viewportDim ? 100 : 0 }, t2)), this.panzoom.on("*", (t3, e2, ...i2) => {
      this.emit(`Panzoom.${e2}`, t3, ...i2);
    }), this.panzoom.on("decel", this.onDecel), this.panzoom.on("refresh", this.onRefresh), this.panzoom.on("beforeTransform", this.onBeforeTransform), this.panzoom.on("endAnimation", this.onEndAnimation);
  }
  attachEvents() {
    const t2 = this.container;
    t2 && (t2.addEventListener("click", this.onClick, { passive: false, capture: false }), t2.addEventListener("slideTo", this.onSlideTo)), window.addEventListener("resize", this.onResize);
  }
  createPages() {
    let t2 = [];
    const { contentDim: e2, viewportDim: i2 } = this;
    let n2 = this.option("slidesPerPage");
    n2 = ("auto" === n2 || e2 <= i2) && false !== this.option("fill") ? 1 / 0 : parseFloat(n2 + "");
    let s2 = 0, o2 = 0, a2 = 0;
    for (const e3 of this.slides) (!t2.length || o2 + e3.dim - i2 > 0.05 || a2 >= n2) && (t2.push(N()), s2 = t2.length - 1, o2 = 0, a2 = 0), t2[s2].slides.push(e3), o2 += e3.dim + e3.gap, a2++;
    return t2;
  }
  processPages() {
    const e2 = this.pages, { contentDim: i2, viewportDim: n2, isInfinite: s2 } = this, o2 = this.option("center"), a2 = this.option("fill"), r2 = a2 && o2 && i2 > n2 && !s2;
    if (e2.forEach((t2, e3) => {
      var s3;
      t2.index = e3, t2.pos = (null === (s3 = t2.slides[0]) || void 0 === s3 ? void 0 : s3.pos) || 0, t2.dim = 0;
      for (const [e4, i3] of t2.slides.entries()) t2.dim += i3.dim, e4 < t2.slides.length - 1 && (t2.dim += i3.gap);
      r2 && t2.pos + 0.5 * t2.dim < 0.5 * n2 ? t2.pos = 0 : r2 && t2.pos + 0.5 * t2.dim >= i2 - 0.5 * n2 ? t2.pos = i2 - n2 : o2 && (t2.pos += -0.5 * (n2 - t2.dim));
    }), e2.forEach((e3) => {
      a2 && !s2 && i2 > n2 && (e3.pos = Math.max(e3.pos, 0), e3.pos = Math.min(e3.pos, i2 - n2)), e3.pos = t(e3.pos, 1e3), e3.dim = t(e3.dim, 1e3), Math.abs(e3.pos) <= 0.1 && (e3.pos = 0);
    }), s2) return e2;
    const l2 = [];
    let c2;
    return e2.forEach((t2) => {
      const e3 = Object.assign({}, t2);
      c2 && e3.pos === c2.pos ? (c2.dim += e3.dim, c2.slides = [...c2.slides, ...e3.slides]) : (e3.index = l2.length, c2 = e3, l2.push(e3));
    }), l2;
  }
  getPageFromIndex(t2 = 0) {
    const e2 = this.pages.length;
    let i2;
    return t2 = parseInt((t2 || 0).toString()) || 0, i2 = this.isInfinite ? (t2 % e2 + e2) % e2 : Math.max(Math.min(t2, e2 - 1), 0), i2;
  }
  getSlideMetrics(e2) {
    var i2, n2;
    const s2 = this.isHorizontal ? "width" : "height";
    let o2 = 0, a2 = 0, r2 = e2.el;
    const l2 = !(!r2 || r2.parentNode);
    if (r2 ? o2 = parseFloat(r2.dataset[s2] || "") || 0 : (r2 = document.createElement("div"), r2.style.visibility = "hidden", (this.track || document.body).prepend(r2)), P(r2, this.cn(J) + " " + e2.class + " " + e2.customClass), o2) r2.style[s2] = `${o2}px`, r2.style["width" === s2 ? "height" : "width"] = "";
    else {
      l2 && (this.track || document.body).prepend(r2), o2 = r2.getBoundingClientRect()[s2] * Math.max(1, (null === (i2 = window.visualViewport) || void 0 === i2 ? void 0 : i2.scale) || 1);
      let t2 = r2[this.isHorizontal ? "offsetWidth" : "offsetHeight"];
      t2 - 1 > o2 && (o2 = t2);
    }
    const c2 = getComputedStyle(r2);
    return "content-box" === c2.boxSizing && (this.isHorizontal ? (o2 += parseFloat(c2.paddingLeft) || 0, o2 += parseFloat(c2.paddingRight) || 0) : (o2 += parseFloat(c2.paddingTop) || 0, o2 += parseFloat(c2.paddingBottom) || 0)), a2 = parseFloat(c2[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0, l2 ? null === (n2 = r2.parentElement) || void 0 === n2 || n2.removeChild(r2) : e2.el || r2.remove(), { dim: t(o2, 1e3), gap: t(a2, 1e3) };
  }
  getBounds() {
    const { isInfinite: t2, isRTL: e2, isHorizontal: i2, pages: n2 } = this;
    let s2 = { min: 0, max: 0 };
    if (t2) s2 = { min: -1 / 0, max: 1 / 0 };
    else if (n2.length) {
      const t3 = n2[0].pos, o2 = n2[n2.length - 1].pos;
      s2 = e2 && i2 ? { min: t3, max: o2 } : { min: -1 * o2, max: -1 * t3 };
    }
    return { x: i2 ? s2 : { min: 0, max: 0 }, y: i2 ? { min: 0, max: 0 } : s2 };
  }
  repositionSlides() {
    let e2, { isHorizontal: i2, isRTL: n2, isInfinite: s2, viewport: o2, viewportDim: a2, contentDim: r2, page: l2, pages: c2, slides: h2, panzoom: d2 } = this, u2 = 0, p2 = 0, f2 = 0, g2 = 0;
    d2 ? g2 = -1 * d2.current[this.axis] : c2[l2] && (g2 = c2[l2].pos || 0), e2 = i2 ? n2 ? "right" : "left" : "top", n2 && i2 && (g2 *= -1);
    for (const i3 of h2) {
      const n3 = i3.el;
      n3 ? ("top" === e2 ? (n3.style.right = "", n3.style.left = "") : n3.style.top = "", i3.index !== u2 ? n3.style[e2] = 0 === p2 ? "" : `${t(p2, 1e3)}px` : n3.style[e2] = "", f2 += i3.dim + i3.gap, u2++) : p2 += i3.dim + i3.gap;
    }
    if (s2 && f2 && o2) {
      let n3 = getComputedStyle(o2), s3 = "padding", l3 = i2 ? "Right" : "Bottom", c3 = parseFloat(n3[s3 + (i2 ? "Left" : "Top")]);
      g2 -= c3, a2 += c3, a2 += parseFloat(n3[s3 + l3]);
      for (const i3 of h2) i3.el && (t(i3.pos) < t(a2) && t(i3.pos + i3.dim + i3.gap) < t(g2) && t(g2) > t(r2 - a2) && (i3.el.style[e2] = `${t(p2 + f2, 1e3)}px`), t(i3.pos + i3.gap) >= t(r2 - a2) && t(i3.pos) > t(g2 + a2) && t(g2) < t(a2) && (i3.el.style[e2] = `-${t(f2, 1e3)}px`));
    }
    let m2, v2, b2 = [...this.inTransition];
    if (b2.length > 1 && (m2 = c2[b2[0]], v2 = c2[b2[1]]), m2 && v2) {
      let i3 = 0;
      for (const n3 of h2) n3.el ? this.inTransition.has(n3.index) && m2.slides.indexOf(n3) < 0 && (n3.el.style[e2] = `${t(i3 + (m2.pos - v2.pos), 1e3)}px`) : i3 += n3.dim + n3.gap;
    }
  }
  createSlideEl(t2) {
    const { track: e2, slides: i2 } = this;
    if (!e2 || !t2) return;
    if (t2.el && t2.el.parentNode) return;
    const n2 = t2.el || document.createElement("div");
    P(n2, this.cn(J)), P(n2, t2.class), P(n2, t2.customClass);
    const s2 = t2.html;
    s2 && (s2 instanceof HTMLElement ? n2.appendChild(s2) : n2.innerHTML = t2.html + "");
    const o2 = [];
    i2.forEach((t3, e3) => {
      t3.el && o2.push(e3);
    });
    const a2 = t2.index;
    let r2 = null;
    if (o2.length) {
      r2 = i2[o2.reduce((t3, e3) => Math.abs(e3 - a2) < Math.abs(t3 - a2) ? e3 : t3)];
    }
    const l2 = r2 && r2.el && r2.el.parentNode ? r2.index < t2.index ? r2.el.nextSibling : r2.el : null;
    e2.insertBefore(n2, e2.contains(l2) ? l2 : null), t2.el = n2, this.emit("createSlide", t2);
  }
  removeSlideEl(t2, e2 = false) {
    const i2 = null == t2 ? void 0 : t2.el;
    if (!i2 || !i2.parentNode) return;
    const n2 = this.cn(K);
    if (i2.classList.contains(n2) && (S(i2, n2), this.emit("unselectSlide", t2)), t2.isDom && !e2) return i2.removeAttribute("aria-hidden"), i2.removeAttribute("data-index"), void (i2.style.left = "");
    this.emit("removeSlide", t2);
    const s2 = new CustomEvent(G);
    i2.dispatchEvent(s2), t2.el && (t2.el.remove(), t2.el = null);
  }
  transitionTo(t2 = 0, e2 = this.option("transition")) {
    var i2, n2, s2, o2;
    if (!e2) return false;
    const a2 = this.page, { pages: r2, panzoom: l2 } = this;
    t2 = parseInt((t2 || 0).toString()) || 0;
    const c2 = this.getPageFromIndex(t2);
    if (!l2 || !r2[c2] || r2.length < 2 || Math.abs(((null === (n2 = null === (i2 = r2[a2]) || void 0 === i2 ? void 0 : i2.slides[0]) || void 0 === n2 ? void 0 : n2.dim) || 0) - this.viewportDim) > 1) return false;
    let h2 = t2 > a2 ? 1 : -1;
    this.isInfinite && (0 === a2 && t2 === r2.length - 1 && (h2 = -1), a2 === r2.length - 1 && 0 === t2 && (h2 = 1));
    const d2 = r2[c2].pos * (this.isRTL ? 1 : -1);
    if (a2 === c2 && Math.abs(d2 - l2.target[this.axis]) < 1) return false;
    this.clearTransitions();
    const u2 = l2.isResting;
    P(this.container, this.cn("inTransition"));
    const p2 = (null === (s2 = r2[a2]) || void 0 === s2 ? void 0 : s2.slides[0]) || null, f2 = (null === (o2 = r2[c2]) || void 0 === o2 ? void 0 : o2.slides[0]) || null;
    this.inTransition.add(f2.index), this.createSlideEl(f2);
    let g2 = p2.el, m2 = f2.el;
    u2 || e2 === J || (e2 = "fadeFast", g2 = null);
    const v2 = this.isRTL ? "next" : "prev", b2 = this.isRTL ? "prev" : "next";
    return g2 && (this.inTransition.add(p2.index), p2.transition = e2, g2.addEventListener(G, this.onAnimationEnd), g2.classList.add(`f-${e2}Out`, `to-${h2 > 0 ? b2 : v2}`)), m2 && (f2.transition = e2, m2.addEventListener(G, this.onAnimationEnd), m2.classList.add(`f-${e2}In`, `from-${h2 > 0 ? v2 : b2}`)), l2.current[this.axis] = d2, l2.target[this.axis] = d2, l2.requestTick(), this.onChange(c2), true;
  }
  manageSlideVisiblity() {
    const t2 = /* @__PURE__ */ new Set(), e2 = /* @__PURE__ */ new Set(), i2 = this.getVisibleSlides(parseFloat(this.option("preload", 0) + "") || 0);
    for (const n2 of this.slides) i2.has(n2) ? t2.add(n2) : e2.add(n2);
    for (const e3 of this.inTransition) t2.add(this.slides[e3]);
    for (const e3 of t2) this.createSlideEl(e3), this.lazyLoadSlide(e3);
    for (const i3 of e2) t2.has(i3) || this.removeSlideEl(i3);
    this.markSelectedSlides(), this.repositionSlides();
  }
  markSelectedSlides() {
    if (!this.pages[this.page] || !this.pages[this.page].slides) return;
    const t2 = "aria-hidden";
    let e2 = this.cn(K);
    if (e2) for (const i2 of this.slides) {
      const n2 = i2.el;
      n2 && (n2.dataset.index = `${i2.index}`, n2.classList.contains("f-thumbs__slide") ? this.getVisibleSlides(0).has(i2) ? n2.removeAttribute(t2) : n2.setAttribute(t2, "true") : this.pages[this.page].slides.includes(i2) ? (n2.classList.contains(e2) || (P(n2, e2), this.emit("selectSlide", i2)), n2.removeAttribute(t2)) : (n2.classList.contains(e2) && (S(n2, e2), this.emit("unselectSlide", i2)), n2.setAttribute(t2, "true")));
    }
  }
  flipInfiniteTrack() {
    const { axis: t2, isHorizontal: e2, isInfinite: i2, isRTL: n2, viewportDim: s2, contentDim: o2 } = this, a2 = this.panzoom;
    if (!a2 || !i2) return;
    let r2 = a2.current[t2], l2 = a2.target[t2] - r2, c2 = 0, h2 = 0.5 * s2;
    n2 && e2 ? (r2 < -h2 && (c2 = -1, r2 += o2), r2 > o2 - h2 && (c2 = 1, r2 -= o2)) : (r2 > h2 && (c2 = 1, r2 -= o2), r2 < -o2 + h2 && (c2 = -1, r2 += o2)), c2 && (a2.current[t2] = r2, a2.target[t2] = r2 + l2);
  }
  lazyLoadImg(t2, e2) {
    const i2 = this, s2 = "f-fadeIn", o2 = "is-preloading";
    let a2 = false, r2 = null;
    const l2 = () => {
      a2 || (a2 = true, r2 && (r2.remove(), r2 = null), S(e2, o2), e2.complete && (P(e2, s2), setTimeout(() => {
        S(e2, s2);
      }, 350)), this.option("adaptiveHeight") && t2.el && this.pages[this.page].slides.indexOf(t2) > -1 && (i2.updateMetrics(), i2.setViewportHeight()), this.emit("load", t2));
    };
    P(e2, o2), e2.src = e2.dataset.lazySrcset || e2.dataset.lazySrc || "", delete e2.dataset.lazySrc, delete e2.dataset.lazySrcset, e2.addEventListener("error", () => {
      l2();
    }), e2.addEventListener("load", () => {
      l2();
    }), setTimeout(() => {
      const i3 = e2.parentNode;
      i3 && t2.el && (e2.complete ? l2() : a2 || (r2 = n(x), i3.insertBefore(r2, e2)));
    }, 300);
  }
  lazyLoadSlide(t2) {
    const e2 = t2 && t2.el;
    if (!e2) return;
    const i2 = /* @__PURE__ */ new Set();
    let n2 = Array.from(e2.querySelectorAll("[data-lazy-src],[data-lazy-srcset]"));
    e2.dataset.lazySrc && n2.push(e2), n2.map((t3) => {
      t3 instanceof HTMLImageElement ? i2.add(t3) : t3 instanceof HTMLElement && t3.dataset.lazySrc && (t3.style.backgroundImage = `url('${t3.dataset.lazySrc}')`, delete t3.dataset.lazySrc);
    });
    for (const e3 of i2) this.lazyLoadImg(t2, e3);
  }
  onAnimationEnd(t2) {
    var e2;
    const i2 = t2.target, n2 = i2 ? parseInt(i2.dataset.index || "", 10) || 0 : -1, s2 = this.slides[n2], o2 = t2.animationName;
    if (!i2 || !s2 || !o2) return;
    const a2 = !!this.inTransition.has(n2) && s2.transition;
    a2 && o2.substring(0, a2.length + 2) === `f-${a2}` && this.inTransition.delete(n2), this.inTransition.size || this.clearTransitions(), n2 === this.page && (null === (e2 = this.panzoom) || void 0 === e2 ? void 0 : e2.isResting) && this.emit("settle");
  }
  onDecel(t2, e2 = 0, i2 = 0, n2 = 0, s2 = 0) {
    if (this.option("dragFree")) return void this.setPageFromPosition();
    const { isRTL: o2, isHorizontal: a2, axis: r2, pages: l2 } = this, c2 = l2.length, h2 = Math.abs(Math.atan2(i2, e2) / (Math.PI / 180));
    let d2 = 0;
    if (d2 = h2 > 45 && h2 < 135 ? a2 ? 0 : i2 : a2 ? e2 : 0, !c2) return;
    let u2 = this.page, p2 = o2 && a2 ? 1 : -1;
    const f2 = t2.current[r2] * p2;
    let { pageIndex: g2 } = this.getPageFromPosition(f2);
    Math.abs(d2) > 5 ? (l2[u2].dim < document.documentElement["client" + (this.isHorizontal ? "Width" : "Height")] - 1 && (u2 = g2), u2 = o2 && a2 ? d2 < 0 ? u2 - 1 : u2 + 1 : d2 < 0 ? u2 + 1 : u2 - 1) : u2 = 0 === n2 && 0 === s2 ? u2 : g2, this.slideTo(u2, { transition: false, friction: t2.option("decelFriction") });
  }
  onClick(t2) {
    const e2 = t2.target, i2 = e2 && E(e2) ? e2.dataset : null;
    let n2, s2;
    i2 && (void 0 !== i2.carouselPage ? (s2 = "slideTo", n2 = i2.carouselPage) : void 0 !== i2.carouselNext ? s2 = "slideNext" : void 0 !== i2.carouselPrev && (s2 = "slidePrev")), s2 ? (t2.preventDefault(), t2.stopPropagation(), e2 && !e2.hasAttribute("disabled") && this[s2](n2)) : this.emit("click", t2);
  }
  onSlideTo(t2) {
    const e2 = t2.detail || 0;
    this.slideTo(this.getPageForSlide(e2), { friction: 0 });
  }
  onChange(t2, e2 = 0) {
    const i2 = this.page;
    this.prevPage = i2, this.page = t2, this.option("adaptiveHeight") && this.setViewportHeight(), t2 !== i2 && (this.markSelectedSlides(), this.emit("change", t2, i2, e2));
  }
  onRefresh() {
    let t2 = this.contentDim, e2 = this.viewportDim;
    this.updateMetrics(), this.contentDim === t2 && this.viewportDim === e2 || this.slideTo(this.page, { friction: 0, transition: false });
  }
  onScroll() {
    var t2;
    null === (t2 = this.viewport) || void 0 === t2 || t2.scroll(0, 0);
  }
  onResize() {
    this.option("breakpoints") && this.processOptions();
  }
  onBeforeTransform(t2) {
    this.lp !== t2.current[this.axis] && (this.flipInfiniteTrack(), this.manageSlideVisiblity()), this.lp = t2.current.e;
  }
  onEndAnimation() {
    this.inTransition.size || this.emit("settle");
  }
  reInit(t2 = null, e2 = null) {
    this.destroy(), this.state = B.Init, this.prevPage = null, this.userOptions = t2 || this.userOptions, this.userPlugins = e2 || this.userPlugins, this.processOptions();
  }
  slideTo(t2 = 0, { friction: e2 = this.option("friction"), transition: i2 = this.option("transition") } = {}) {
    if (this.state === B.Destroy) return;
    t2 = parseInt((t2 || 0).toString()) || 0;
    const n2 = this.getPageFromIndex(t2), { axis: s2, isHorizontal: o2, isRTL: a2, pages: r2, panzoom: l2 } = this, c2 = r2.length, h2 = a2 && o2 ? 1 : -1;
    if (!l2 || !c2) return;
    if (this.page !== n2) {
      const e3 = new Event("beforeChange", { bubbles: true, cancelable: true });
      if (this.emit("beforeChange", e3, t2), e3.defaultPrevented) return;
    }
    if (this.transitionTo(t2, i2)) return;
    let d2 = r2[n2].pos;
    if (this.isInfinite) {
      const e3 = this.contentDim, i3 = l2.target[s2] * h2;
      if (2 === c2) d2 += e3 * Math.floor(parseFloat(t2 + "") / 2);
      else {
        d2 = [d2, d2 - e3, d2 + e3].reduce(function(t3, e4) {
          return Math.abs(e4 - i3) < Math.abs(t3 - i3) ? e4 : t3;
        });
      }
    }
    d2 *= h2, Math.abs(l2.target[s2] - d2) < 1 || (l2.panTo({ x: o2 ? d2 : 0, y: o2 ? 0 : d2, friction: e2 }), this.onChange(n2));
  }
  slideToClosest(t2) {
    if (this.panzoom) {
      const { pageIndex: e2 } = this.getPageFromPosition();
      this.slideTo(e2, t2);
    }
  }
  slideNext() {
    this.slideTo(this.page + 1);
  }
  slidePrev() {
    this.slideTo(this.page - 1);
  }
  clearTransitions() {
    this.inTransition.clear(), S(this.container, this.cn("inTransition"));
    const t2 = ["to-prev", "to-next", "from-prev", "from-next"];
    for (const e2 of this.slides) {
      const i2 = e2.el;
      if (i2) {
        i2.removeEventListener(G, this.onAnimationEnd), i2.classList.remove(...t2);
        const n2 = e2.transition;
        n2 && i2.classList.remove(`f-${n2}Out`, `f-${n2}In`);
      }
    }
    this.manageSlideVisiblity();
  }
  addSlide(t2, e2) {
    var i2, n2, s2, o2;
    const a2 = this.panzoom, r2 = (null === (i2 = this.pages[this.page]) || void 0 === i2 ? void 0 : i2.pos) || 0, l2 = (null === (n2 = this.pages[this.page]) || void 0 === n2 ? void 0 : n2.dim) || 0, c2 = this.contentDim < this.viewportDim;
    let h2 = Array.isArray(e2) ? e2 : [e2];
    const d2 = [];
    for (const t3 of h2) d2.push(H(t3));
    this.slides.splice(t2, 0, ...d2);
    for (let t3 = 0; t3 < this.slides.length; t3++) this.slides[t3].index = t3;
    for (const t3 of d2) this.emit("beforeInitSlide", t3, t3.index);
    if (this.page >= t2 && (this.page += d2.length), this.updateMetrics(), a2) {
      const e3 = (null === (s2 = this.pages[this.page]) || void 0 === s2 ? void 0 : s2.pos) || 0, i3 = (null === (o2 = this.pages[this.page]) || void 0 === o2 ? void 0 : o2.dim) || 0, n3 = this.pages.length || 1, h3 = this.isRTL ? l2 - i3 : i3 - l2, d3 = this.isRTL ? r2 - e3 : e3 - r2;
      c2 && 1 === n3 ? (t2 <= this.page && (a2.current[this.axis] -= h3, a2.target[this.axis] -= h3), a2.panTo({ [this.isHorizontal ? "x" : "y"]: -1 * e3 })) : d3 && t2 <= this.page && (a2.target[this.axis] -= d3, a2.current[this.axis] -= d3, a2.requestTick());
    }
    for (const t3 of d2) this.emit("initSlide", t3, t3.index);
  }
  prependSlide(t2) {
    this.addSlide(0, t2);
  }
  appendSlide(t2) {
    this.addSlide(this.slides.length, t2);
  }
  removeSlide(t2) {
    const e2 = this.slides.length;
    t2 = (t2 % e2 + e2) % e2;
    const i2 = this.slides[t2];
    if (i2) {
      this.removeSlideEl(i2, true), this.slides.splice(t2, 1);
      for (let t3 = 0; t3 < this.slides.length; t3++) this.slides[t3].index = t3;
      this.updateMetrics(), this.slideTo(this.page, { friction: 0, transition: false }), this.emit("destroySlide", i2);
    }
  }
  updateMetrics() {
    const { panzoom: e2, viewport: i2, track: n2, slides: s2, isHorizontal: o2, isInfinite: a2 } = this;
    if (!n2) return;
    const r2 = o2 ? "width" : "height", l2 = o2 ? "offsetWidth" : "offsetHeight";
    if (i2) {
      let e3 = Math.max(i2[l2], t(i2.getBoundingClientRect()[r2], 1e3)), n3 = getComputedStyle(i2), s3 = "padding", a3 = o2 ? "Right" : "Bottom";
      e3 -= parseFloat(n3[s3 + (o2 ? "Left" : "Top")]) + parseFloat(n3[s3 + a3]), this.viewportDim = e3;
    }
    let c2, h2 = 0;
    for (const [e3, i3] of s2.entries()) {
      let n3 = 0, o3 = 0;
      !i3.el && c2 ? (n3 = c2.dim, o3 = c2.gap) : ({ dim: n3, gap: o3 } = this.getSlideMetrics(i3), c2 = i3), n3 = t(n3, 1e3), o3 = t(o3, 1e3), i3.dim = n3, i3.gap = o3, i3.pos = h2, h2 += n3, (a2 || e3 < s2.length - 1) && (h2 += o3);
    }
    h2 = t(h2, 1e3), this.contentDim = h2, e2 && (e2.contentRect[r2] = h2, e2.contentRect[o2 ? "fullWidth" : "fullHeight"] = h2), this.pages = this.createPages(), this.pages = this.processPages(), this.state === B.Init && this.setInitialPage(), this.page = Math.max(0, Math.min(this.page, this.pages.length - 1)), this.manageSlideVisiblity(), this.emit("refresh");
  }
  getProgress(e2, i2 = false, n2 = false) {
    void 0 === e2 && (e2 = this.page);
    const s2 = this, o2 = s2.panzoom, a2 = s2.contentDim, r2 = s2.pages[e2] || 0;
    if (!r2 || !o2) return e2 > this.page ? -1 : 1;
    let l2 = -1 * o2.current.e, c2 = t((l2 - r2.pos) / (1 * r2.dim), 1e3), h2 = c2, d2 = c2;
    this.isInfinite && true !== n2 && (h2 = t((l2 - r2.pos + a2) / (1 * r2.dim), 1e3), d2 = t((l2 - r2.pos - a2) / (1 * r2.dim), 1e3));
    let u2 = [c2, h2, d2].reduce(function(t2, e3) {
      return Math.abs(e3) < Math.abs(t2) ? e3 : t2;
    });
    return i2 ? u2 : u2 > 1 ? 1 : u2 < -1 ? -1 : u2;
  }
  setViewportHeight() {
    const { page: t2, pages: e2, viewport: i2, isHorizontal: n2 } = this;
    if (!i2 || !e2[t2]) return;
    let s2 = 0;
    n2 && this.track && (this.track.style.height = "auto", e2[t2].slides.forEach((t3) => {
      t3.el && (s2 = Math.max(s2, t3.el.offsetHeight));
    })), i2.style.height = s2 ? `${s2}px` : "";
  }
  getPageForSlide(t2) {
    for (const e2 of this.pages) for (const i2 of e2.slides) if (i2.index === t2) return e2.index;
    return -1;
  }
  getVisibleSlides(t2 = 0) {
    var e2;
    const i2 = /* @__PURE__ */ new Set();
    let { panzoom: n2, contentDim: s2, viewportDim: o2, pages: a2, page: r2 } = this;
    if (o2) {
      s2 = s2 + (null === (e2 = this.slides[this.slides.length - 1]) || void 0 === e2 ? void 0 : e2.gap) || 0;
      let l2 = 0;
      l2 = n2 && n2.state !== m.Init && n2.state !== m.Destroy ? -1 * n2.current[this.axis] : a2[r2] && a2[r2].pos || 0, this.isInfinite && (l2 -= Math.floor(l2 / s2) * s2), this.isRTL && this.isHorizontal && (l2 *= -1);
      const c2 = l2 - o2 * t2, h2 = l2 + o2 * (t2 + 1), d2 = this.isInfinite ? [-1, 0, 1] : [0];
      for (const t3 of this.slides) for (const e3 of d2) {
        const n3 = t3.pos + e3 * s2, o3 = n3 + t3.dim + t3.gap;
        n3 < h2 && o3 > c2 && i2.add(t3);
      }
    }
    return i2;
  }
  getPageFromPosition(t2) {
    const { viewportDim: e2, contentDim: i2, slides: n2, pages: s2, panzoom: o2 } = this, a2 = s2.length, r2 = n2.length, l2 = n2[0], c2 = n2[r2 - 1], h2 = this.option("center");
    let d2 = 0, u2 = 0, p2 = 0, f2 = void 0 === t2 ? -1 * ((null == o2 ? void 0 : o2.target[this.axis]) || 0) : t2;
    h2 && (f2 += 0.5 * e2), this.isInfinite ? (f2 < l2.pos - 0.5 * c2.gap && (f2 -= i2, p2 = -1), f2 > c2.pos + c2.dim + 0.5 * c2.gap && (f2 -= i2, p2 = 1)) : f2 = Math.max(l2.pos || 0, Math.min(f2, c2.pos));
    let g2 = c2, m2 = n2.find((t3) => {
      const e3 = t3.pos - 0.5 * g2.gap, i3 = t3.pos + t3.dim + 0.5 * t3.gap;
      return g2 = t3, f2 >= e3 && f2 < i3;
    });
    return m2 || (m2 = c2), u2 = this.getPageForSlide(m2.index), d2 = u2 + p2 * a2, { page: d2, pageIndex: u2 };
  }
  setPageFromPosition() {
    const { pageIndex: t2 } = this.getPageFromPosition();
    this.onChange(t2);
  }
  destroy() {
    if ([B.Destroy].includes(this.state)) return;
    this.state = B.Destroy;
    const { container: t2, viewport: e2, track: i2, slides: n2, panzoom: s2 } = this, o2 = this.option("classes");
    t2.removeEventListener("click", this.onClick, { passive: false, capture: false }), t2.removeEventListener("slideTo", this.onSlideTo), window.removeEventListener("resize", this.onResize), s2 && (s2.destroy(), this.panzoom = null), n2 && n2.forEach((t3) => {
      this.removeSlideEl(t3);
    }), this.detachPlugins(), e2 && (e2.removeEventListener("scroll", this.onScroll), e2.offsetParent && i2 && i2.offsetParent && e2.replaceWith(...i2.childNodes));
    for (const [e3, i3] of Object.entries(o2)) "container" !== e3 && i3 && t2.classList.remove(i3);
    this.track = null, this.viewport = null, this.page = 0, this.slides = [];
    const a2 = this.events.get("ready");
    this.events = /* @__PURE__ */ new Map(), a2 && this.events.set("ready", a2);
  }
}
Object.defineProperty(Q, "Panzoom", { enumerable: true, configurable: true, writable: true, value: I }), Object.defineProperty(Q, "defaults", { enumerable: true, configurable: true, writable: true, value: j }), Object.defineProperty(Q, "Plugins", { enumerable: true, configurable: true, writable: true, value: U });
const tt = function(t2) {
  if (!E(t2)) return 0;
  const e2 = window.scrollY, i2 = window.innerHeight, n2 = e2 + i2, s2 = t2.getBoundingClientRect(), o2 = s2.y + e2, a2 = s2.height, r2 = o2 + a2;
  if (e2 > r2 || n2 < o2) return 0;
  if (e2 < o2 && n2 > r2) return 100;
  if (o2 < e2 && r2 > n2) return 100;
  let l2 = a2;
  o2 < e2 && (l2 -= e2 - o2), r2 > n2 && (l2 -= r2 - n2);
  const c2 = l2 / i2 * 100;
  return Math.round(c2);
}, et = !("undefined" == typeof window || !window.document || !window.document.createElement);
let it;
const nt = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'].join(","), st = (t2) => {
  if (t2 && et) {
    void 0 === it && document.createElement("div").focus({ get preventScroll() {
      return it = true, false;
    } });
    try {
      if (it) t2.focus({ preventScroll: true });
      else {
        const e2 = window.scrollY || document.body.scrollTop, i2 = window.scrollX || document.body.scrollLeft;
        t2.focus(), document.body.scrollTo({ top: e2, left: i2, behavior: "auto" });
      }
    } catch (t3) {
    }
  }
}, ot = () => {
  const t2 = document;
  let e2, i2 = "", n2 = "", s2 = "";
  return t2.fullscreenEnabled ? (i2 = "requestFullscreen", n2 = "exitFullscreen", s2 = "fullscreenElement") : t2.webkitFullscreenEnabled && (i2 = "webkitRequestFullscreen", n2 = "webkitExitFullscreen", s2 = "webkitFullscreenElement"), i2 && (e2 = { request: function(e3 = t2.documentElement) {
    return "webkitRequestFullscreen" === i2 ? e3[i2](Element.ALLOW_KEYBOARD_INPUT) : e3[i2]();
  }, exit: function() {
    return t2[s2] && t2[n2]();
  }, isFullscreen: function() {
    return t2[s2];
  } }), e2;
}, at = { animated: true, autoFocus: true, backdropClick: "close", Carousel: { classes: { container: "fancybox__carousel", viewport: "fancybox__viewport", track: "fancybox__track", slide: "fancybox__slide" } }, closeButton: "auto", closeExisting: false, commonCaption: false, compact: () => window.matchMedia("(max-width: 578px), (max-height: 578px)").matches, contentClick: "toggleZoom", contentDblClick: false, defaultType: "image", defaultDisplay: "flex", dragToClose: true, Fullscreen: { autoStart: false }, groupAll: false, groupAttr: "data-fancybox", hideClass: "f-fadeOut", hideScrollbar: true, idle: 3500, keyboard: { Escape: "close", Delete: "close", Backspace: "close", PageUp: "next", PageDown: "prev", ArrowUp: "prev", ArrowDown: "next", ArrowRight: "next", ArrowLeft: "prev" }, l10n: Object.assign(Object.assign({}, b), { CLOSE: "Close", NEXT: "Next", PREV: "Previous", MODAL: "You can close this modal content with the ESC key", ERROR: "Something Went Wrong, Please Try Again Later", IMAGE_ERROR: "Image Not Found", ELEMENT_NOT_FOUND: "HTML Element Not Found", AJAX_NOT_FOUND: "Error Loading AJAX : Not Found", AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden", IFRAME_ERROR: "Error Loading Page", TOGGLE_ZOOM: "Toggle zoom level", TOGGLE_THUMBS: "Toggle thumbnails", TOGGLE_SLIDESHOW: "Toggle slideshow", TOGGLE_FULLSCREEN: "Toggle full-screen mode", DOWNLOAD: "Download" }), parentEl: null, placeFocusBack: true, showClass: "f-zoomInUp", startIndex: 0, tpl: { closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>', main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>' }, trapFocus: true, wheel: "zoom" };
var rt, lt;
!function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Ready = 1] = "Ready", t2[t2.Closing = 2] = "Closing", t2[t2.CustomClosing = 3] = "CustomClosing", t2[t2.Destroy = 4] = "Destroy";
}(rt || (rt = {})), function(t2) {
  t2[t2.Loading = 0] = "Loading", t2[t2.Opening = 1] = "Opening", t2[t2.Ready = 2] = "Ready", t2[t2.Closing = 3] = "Closing";
}(lt || (lt = {}));
let ct = "", ht = false, dt = false, ut = null;
const pt = () => {
  let t2 = "", e2 = "";
  const i2 = Oe.getInstance();
  if (i2) {
    const n2 = i2.carousel, s2 = i2.getSlide();
    if (n2 && s2) {
      let o2 = s2.slug || void 0, a2 = s2.triggerEl || void 0;
      e2 = o2 || (i2.option("slug") || ""), !e2 && a2 && a2.dataset && (e2 = a2.dataset.fancybox || ""), e2 && "true" !== e2 && (t2 = "#" + e2 + (!o2 && n2.slides.length > 1 ? "-" + (s2.index + 1) : ""));
    }
  }
  return { hash: t2, slug: e2, index: 1 };
}, ft = () => {
  const t2 = new URL(document.URL).hash, e2 = t2.slice(1).split("-"), i2 = e2[e2.length - 1], n2 = i2 && /^\+?\d+$/.test(i2) && parseInt(e2.pop() || "1", 10) || 1;
  return { hash: t2, slug: e2.join("-"), index: n2 };
}, gt = () => {
  const { slug: t2, index: e2 } = ft();
  if (!t2) return;
  let i2 = document.querySelector(`[data-slug="${t2}"]`);
  if (i2 && i2.dispatchEvent(new CustomEvent("click", { bubbles: true, cancelable: true })), Oe.getInstance()) return;
  const n2 = document.querySelectorAll(`[data-fancybox="${t2}"]`);
  n2.length && (i2 = n2[e2 - 1], i2 && i2.dispatchEvent(new CustomEvent("click", { bubbles: true, cancelable: true })));
}, mt = () => {
  if (false === Oe.defaults.Hash) return;
  const t2 = Oe.getInstance();
  if (false === (null == t2 ? void 0 : t2.options.Hash)) return;
  const { slug: e2, index: i2 } = ft(), { slug: n2 } = pt();
  t2 && (e2 === n2 ? t2.jumpTo(i2 - 1) : (ht = true, t2.close())), gt();
}, vt = () => {
  ut && clearTimeout(ut), queueMicrotask(() => {
    mt();
  });
}, bt = () => {
  window.addEventListener("hashchange", vt, false), setTimeout(() => {
    mt();
  }, 500);
};
et && (/complete|interactive|loaded/.test(document.readyState) ? bt() : document.addEventListener("DOMContentLoaded", bt));
const yt = "is-zooming-in";
class wt extends _ {
  onCreateSlide(t2, e2, i2) {
    const n2 = this.instance.optionFor(i2, "src") || "";
    i2.el && "image" === i2.type && "string" == typeof n2 && this.setImage(i2, n2);
  }
  onRemoveSlide(t2, e2, i2) {
    i2.panzoom && i2.panzoom.destroy(), i2.panzoom = void 0, i2.imageEl = void 0;
  }
  onChange(t2, e2, i2, n2) {
    S(this.instance.container, yt);
    for (const t3 of e2.slides) {
      const e3 = t3.panzoom;
      e3 && t3.index !== i2 && e3.reset(0.35);
    }
  }
  onClose() {
    var t2;
    const e2 = this.instance, i2 = e2.container, n2 = e2.getSlide();
    if (!i2 || !i2.parentElement || !n2) return;
    const { el: s2, contentEl: o2, panzoom: a2, thumbElSrc: r2 } = n2;
    if (!s2 || !r2 || !o2 || !a2 || a2.isContentLoading || a2.state === m.Init || a2.state === m.Destroy) return;
    a2.updateMetrics();
    let l2 = this.getZoomInfo(n2);
    if (!l2) return;
    this.instance.state = rt.CustomClosing, i2.classList.remove(yt), i2.classList.add("is-zooming-out"), o2.style.backgroundImage = `url('${r2}')`;
    const c2 = i2.getBoundingClientRect();
    1 === ((null === (t2 = window.visualViewport) || void 0 === t2 ? void 0 : t2.scale) || 1) && Object.assign(i2.style, { position: "absolute", top: `${i2.offsetTop + window.scrollY}px`, left: `${i2.offsetLeft + window.scrollX}px`, bottom: "auto", right: "auto", width: `${c2.width}px`, height: `${c2.height}px`, overflow: "hidden" });
    const { x: h2, y: d2, scale: u2, opacity: p2 } = l2;
    if (p2) {
      const t3 = ((t4, e3, i3, n3) => {
        const s3 = e3 - t4, o3 = n3 - i3;
        return (e4) => i3 + ((e4 - t4) / s3 * o3 || 0);
      })(a2.scale, u2, 1, 0);
      a2.on("afterTransform", () => {
        o2.style.opacity = t3(a2.scale) + "";
      });
    }
    a2.on("endAnimation", () => {
      e2.destroy();
    }), a2.target.a = u2, a2.target.b = 0, a2.target.c = 0, a2.target.d = u2, a2.panTo({ x: h2, y: d2, scale: u2, friction: p2 ? 0.2 : 0.33, ignoreBounds: true }), a2.isResting && e2.destroy();
  }
  setImage(t2, e2) {
    const i2 = this.instance;
    t2.src = e2, this.process(t2, e2).then((e3) => {
      const { contentEl: n2, imageEl: s2, thumbElSrc: o2, el: a2 } = t2;
      if (i2.isClosing() || !n2 || !s2) return;
      n2.offsetHeight;
      const r2 = !!i2.isOpeningSlide(t2) && this.getZoomInfo(t2);
      if (this.option("protected") && a2) {
        a2.addEventListener("contextmenu", (t4) => {
          t4.preventDefault();
        });
        const t3 = document.createElement("div");
        P(t3, "fancybox-protected"), n2.appendChild(t3);
      }
      if (o2 && r2) {
        const s3 = e3.contentRect, a3 = Math.max(s3.fullWidth, s3.fullHeight);
        let c2 = null;
        !r2.opacity && a3 > 1200 && (c2 = document.createElement("img"), P(c2, "fancybox-ghost"), c2.src = o2, n2.appendChild(c2));
        const h2 = () => {
          c2 && (P(c2, "f-fadeFastOut"), setTimeout(() => {
            c2 && (c2.remove(), c2 = null);
          }, 200));
        };
        (l2 = o2, new Promise((t3, e4) => {
          const i3 = new Image();
          i3.onload = t3, i3.onerror = e4, i3.src = l2;
        })).then(() => {
          i2.hideLoading(t2), t2.state = lt.Opening, this.instance.emit("reveal", t2), this.zoomIn(t2).then(() => {
            h2(), this.instance.done(t2);
          }, () => {
          }), c2 && setTimeout(() => {
            h2();
          }, a3 > 2500 ? 800 : 200);
        }, () => {
          i2.hideLoading(t2), i2.revealContent(t2);
        });
      } else {
        const n3 = this.optionFor(t2, "initialSize"), s3 = this.optionFor(t2, "zoom"), o3 = { event: i2.prevMouseMoveEvent || i2.options.event, friction: s3 ? 0.12 : 0 };
        let a3 = i2.optionFor(t2, "showClass") || void 0, r3 = true;
        i2.isOpeningSlide(t2) && ("full" === n3 ? e3.zoomToFull(o3) : "cover" === n3 ? e3.zoomToCover(o3) : "max" === n3 ? e3.zoomToMax(o3) : r3 = false, e3.stop("current")), r3 && a3 && (a3 = e3.isDragging ? "f-fadeIn" : ""), i2.hideLoading(t2), i2.revealContent(t2, a3);
      }
      var l2;
    }, () => {
      i2.setError(t2, "{{IMAGE_ERROR}}");
    });
  }
  process(t2, e2) {
    return new Promise((i2, s2) => {
      var o2;
      const a2 = this.instance, r2 = t2.el;
      a2.clearContent(t2), a2.showLoading(t2);
      let l2 = this.optionFor(t2, "content");
      if ("string" == typeof l2 && (l2 = n(l2)), !l2 || !E(l2)) {
        if (l2 = document.createElement("img"), l2 instanceof HTMLImageElement) {
          let i3 = "", n2 = t2.caption;
          i3 = "string" == typeof n2 && n2 ? n2.replace(/<[^>]+>/gi, "").substring(0, 1e3) : `Image ${t2.index + 1} of ${(null === (o2 = a2.carousel) || void 0 === o2 ? void 0 : o2.pages.length) || 1}`, l2.src = e2 || "", l2.alt = i3, l2.draggable = false, t2.srcset && l2.setAttribute("srcset", t2.srcset), this.instance.isOpeningSlide(t2) && (l2.fetchPriority = "high");
        }
        t2.sizes && l2.setAttribute("sizes", t2.sizes);
      }
      P(l2, "fancybox-image"), t2.imageEl = l2, a2.setContent(t2, l2, false);
      t2.panzoom = new I(r2, u({ transformParent: true }, this.option("Panzoom") || {}, { content: l2, width: (e3, i3) => a2.optionFor(t2, "width", "auto", i3) || "auto", height: (e3, i3) => a2.optionFor(t2, "height", "auto", i3) || "auto", wheel: () => {
        const t3 = a2.option("wheel");
        return ("zoom" === t3 || "pan" == t3) && t3;
      }, click: (e3, i3) => {
        var n2, s3;
        if (a2.isCompact || a2.isClosing()) return false;
        if (t2.index !== (null === (n2 = a2.getSlide()) || void 0 === n2 ? void 0 : n2.index)) return false;
        if (i3) {
          const t3 = i3.composedPath()[0];
          if (["A", "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].includes(t3.nodeName)) return false;
        }
        let o3 = !i3 || i3.target && (null === (s3 = t2.contentEl) || void 0 === s3 ? void 0 : s3.contains(i3.target));
        return a2.option(o3 ? "contentClick" : "backdropClick") || false;
      }, dblClick: () => a2.isCompact ? "toggleZoom" : a2.option("contentDblClick") || false, spinner: false, panOnlyZoomed: true, wheelLimit: 1 / 0, on: { ready: (t3) => {
        i2(t3);
      }, error: () => {
        s2();
      }, destroy: () => {
        s2();
      } } }));
    });
  }
  zoomIn(t2) {
    return new Promise((e2, i2) => {
      const n2 = this.instance, s2 = n2.container, { panzoom: o2, contentEl: a2, el: r2 } = t2;
      o2 && o2.updateMetrics();
      const l2 = this.getZoomInfo(t2);
      if (!(l2 && r2 && a2 && o2 && s2)) return void i2();
      const { x: c2, y: h2, scale: d2, opacity: u2 } = l2, p2 = () => {
        t2.state !== lt.Closing && (u2 && (a2.style.opacity = Math.max(Math.min(1, 1 - (1 - o2.scale) / (1 - d2)), 0) + ""), o2.scale >= 1 && o2.scale > o2.targetScale - 0.1 && e2(o2));
      }, f2 = (t3) => {
        (t3.scale < 0.99 || t3.scale > 1.01) && !t3.isDragging || (S(s2, yt), a2.style.opacity = "", t3.off("endAnimation", f2), t3.off("touchStart", f2), t3.off("afterTransform", p2), e2(t3));
      };
      o2.on("endAnimation", f2), o2.on("touchStart", f2), o2.on("afterTransform", p2), o2.on(["error", "destroy"], () => {
        i2();
      }), o2.panTo({ x: c2, y: h2, scale: d2, friction: 0, ignoreBounds: true }), o2.stop("current");
      const g2 = { event: "mousemove" === o2.panMode ? n2.prevMouseMoveEvent || n2.options.event : void 0 }, m2 = this.optionFor(t2, "initialSize");
      P(s2, yt), n2.hideLoading(t2), "full" === m2 ? o2.zoomToFull(g2) : "cover" === m2 ? o2.zoomToCover(g2) : "max" === m2 ? o2.zoomToMax(g2) : o2.reset(0.172);
    });
  }
  getZoomInfo(t2) {
    const { el: e2, imageEl: i2, thumbEl: n2, panzoom: s2 } = t2, o2 = this.instance, a2 = o2.container;
    if (!e2 || !i2 || !n2 || !s2 || tt(n2) < 3 || !this.optionFor(t2, "zoom") || !a2 || o2.state === rt.Destroy) return false;
    if ("0" === getComputedStyle(a2).getPropertyValue("--f-images-zoom")) return false;
    const r2 = window.visualViewport || null;
    if (1 !== (r2 ? r2.scale : 1)) return false;
    let { top: l2, left: c2, width: h2, height: d2 } = n2.getBoundingClientRect(), { top: u2, left: p2, fitWidth: f2, fitHeight: g2 } = s2.contentRect;
    if (!(h2 && d2 && f2 && g2)) return false;
    const m2 = s2.container.getBoundingClientRect();
    p2 += m2.left, u2 += m2.top;
    const v2 = -1 * (p2 + 0.5 * f2 - (c2 + 0.5 * h2)), b2 = -1 * (u2 + 0.5 * g2 - (l2 + 0.5 * d2)), y2 = h2 / f2;
    let w2 = this.option("zoomOpacity") || false;
    return "auto" === w2 && (w2 = Math.abs(h2 / d2 - f2 / g2) > 0.1), { x: v2, y: b2, scale: y2, opacity: w2 };
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.on("Carousel.change", t2.onChange), e2.on("Carousel.createSlide", t2.onCreateSlide), e2.on("Carousel.removeSlide", t2.onRemoveSlide), e2.on("close", t2.onClose);
  }
  detach() {
    const t2 = this, e2 = t2.instance;
    e2.off("Carousel.change", t2.onChange), e2.off("Carousel.createSlide", t2.onCreateSlide), e2.off("Carousel.removeSlide", t2.onRemoveSlide), e2.off("close", t2.onClose);
  }
}
Object.defineProperty(wt, "defaults", { enumerable: true, configurable: true, writable: true, value: { initialSize: "fit", Panzoom: { maxScale: 1 }, protected: false, zoom: true, zoomOpacity: "auto" } }), "function" == typeof SuppressedError && SuppressedError;
const xt = "html", Et = "image", St = "map", Pt = "youtube", Ct = "vimeo", Tt = "html5video", Mt = (t2, e2 = {}) => {
  const i2 = new URL(t2), n2 = new URLSearchParams(i2.search), s2 = new URLSearchParams();
  for (const [t3, i3] of [...n2, ...Object.entries(e2)]) {
    let e3 = i3 + "";
    if ("t" === t3) {
      let t4 = e3.match(/((\d*)m)?(\d*)s?/);
      t4 && s2.set("start", 60 * parseInt(t4[2] || "0") + parseInt(t4[3] || "0") + "");
    } else s2.set(t3, e3);
  }
  let o2 = s2 + "", a2 = t2.match(/#t=((.*)?\d+s)/);
  return a2 && (o2 += `#t=${a2[1]}`), o2;
}, Ot = { ajax: null, autoSize: true, iframeAttr: { allow: "autoplay; fullscreen", scrolling: "auto" }, preload: true, videoAutoplay: true, videoRatio: 16 / 9, videoTpl: `<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">
  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`, videoFormat: "", vimeo: { byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0 }, youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 } }, At = ["image", "html", "ajax", "inline", "clone", "iframe", "map", "pdf", "html5video", "youtube", "vimeo"];
class Lt extends _ {
  onBeforeInitSlide(t2, e2, i2) {
    this.processType(i2);
  }
  onCreateSlide(t2, e2, i2) {
    this.setContent(i2);
  }
  onClearContent(t2, e2) {
    e2.xhr && (e2.xhr.abort(), e2.xhr = null);
    const i2 = e2.iframeEl;
    i2 && (i2.onload = i2.onerror = null, i2.src = "//about:blank", e2.iframeEl = null);
    const n2 = e2.contentEl, s2 = e2.placeholderEl;
    if ("inline" === e2.type && n2 && s2) n2.classList.remove("fancybox__content"), "none" !== getComputedStyle(n2).getPropertyValue("display") && (n2.style.display = "none"), setTimeout(() => {
      s2 && (n2 && s2.parentNode && s2.parentNode.insertBefore(n2, s2), s2.remove());
    }, 0), e2.contentEl = void 0, e2.placeholderEl = void 0;
    else for (; e2.el && e2.el.firstChild; ) e2.el.removeChild(e2.el.firstChild);
  }
  onSelectSlide(t2, e2, i2) {
    i2.state === lt.Ready && this.playVideo();
  }
  onUnselectSlide(t2, e2, i2) {
    var n2, s2;
    if (i2.type === Tt) {
      try {
        null === (s2 = null === (n2 = i2.el) || void 0 === n2 ? void 0 : n2.querySelector("video")) || void 0 === s2 || s2.pause();
      } catch (t3) {
      }
      return;
    }
    let o2;
    i2.type === Ct ? o2 = { method: "pause", value: "true" } : i2.type === Pt && (o2 = { event: "command", func: "pauseVideo" }), o2 && i2.iframeEl && i2.iframeEl.contentWindow && i2.iframeEl.contentWindow.postMessage(JSON.stringify(o2), "*"), i2.poller && clearTimeout(i2.poller);
  }
  onDone(t2, e2) {
    t2.isCurrentSlide(e2) && !t2.isClosing() && this.playVideo();
  }
  onRefresh(t2, e2) {
    e2.slides.forEach((t3) => {
      t3.el && (this.resizeIframe(t3), this.setAspectRatio(t3));
    });
  }
  onMessage(t2) {
    try {
      let e2 = JSON.parse(t2.data);
      if ("https://player.vimeo.com" === t2.origin) {
        if ("ready" === e2.event) for (let e3 of Array.from(document.getElementsByClassName("fancybox__iframe"))) e3 instanceof HTMLIFrameElement && e3.contentWindow === t2.source && (e3.dataset.ready = "true");
      } else if (t2.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === e2.event) {
        const t3 = document.getElementById(e2.id);
        t3 && (t3.dataset.ready = "true");
      }
    } catch (t3) {
    }
  }
  loadAjaxContent(t2) {
    const e2 = this.instance.optionFor(t2, "src") || "";
    this.instance.showLoading(t2);
    const i2 = this.instance, n2 = new XMLHttpRequest();
    i2.showLoading(t2), n2.onreadystatechange = function() {
      n2.readyState === XMLHttpRequest.DONE && i2.state === rt.Ready && (i2.hideLoading(t2), 200 === n2.status ? i2.setContent(t2, n2.responseText) : i2.setError(t2, 404 === n2.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
    };
    const s2 = t2.ajax || null;
    n2.open(s2 ? "POST" : "GET", e2 + ""), n2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n2.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n2.send(s2), t2.xhr = n2;
  }
  setInlineContent(t2) {
    let e2 = null;
    if (E(t2.src)) e2 = t2.src;
    else if ("string" == typeof t2.src) {
      const i2 = t2.src.split("#", 2).pop();
      e2 = i2 ? document.getElementById(i2) : null;
    }
    if (e2) {
      if ("clone" === t2.type || e2.closest(".fancybox__slide")) {
        e2 = e2.cloneNode(true);
        const i2 = e2.dataset.animationName;
        i2 && (e2.classList.remove(i2), delete e2.dataset.animationName);
        let n2 = e2.getAttribute("id");
        n2 = n2 ? `${n2}--clone` : `clone-${this.instance.id}-${t2.index}`, e2.setAttribute("id", n2);
      } else if (e2.parentNode) {
        const i2 = document.createElement("div");
        i2.classList.add("fancybox-placeholder"), e2.parentNode.insertBefore(i2, e2), t2.placeholderEl = i2;
      }
      this.instance.setContent(t2, e2);
    } else this.instance.setError(t2, "{{ELEMENT_NOT_FOUND}}");
  }
  setIframeContent(t2) {
    const { src: e2, el: i2 } = t2;
    if (!e2 || "string" != typeof e2 || !i2) return;
    i2.classList.add("is-loading");
    const n2 = this.instance, s2 = document.createElement("iframe");
    s2.className = "fancybox__iframe", s2.setAttribute("id", `fancybox__iframe_${n2.id}_${t2.index}`);
    for (const [e3, i3] of Object.entries(this.optionFor(t2, "iframeAttr") || {})) s2.setAttribute(e3, i3);
    s2.onerror = () => {
      n2.setError(t2, "{{IFRAME_ERROR}}");
    }, t2.iframeEl = s2;
    const o2 = this.optionFor(t2, "preload");
    if ("iframe" !== t2.type || false === o2) return s2.setAttribute("src", t2.src + ""), n2.setContent(t2, s2, false), this.resizeIframe(t2), void n2.revealContent(t2);
    n2.showLoading(t2), s2.onload = () => {
      if (!s2.src.length) return;
      const e3 = "true" !== s2.dataset.ready;
      s2.dataset.ready = "true", this.resizeIframe(t2), e3 ? n2.revealContent(t2) : n2.hideLoading(t2);
    }, s2.setAttribute("src", e2), n2.setContent(t2, s2, false);
  }
  resizeIframe(t2) {
    const { type: e2, iframeEl: i2 } = t2;
    if (e2 === Pt || e2 === Ct) return;
    const n2 = null == i2 ? void 0 : i2.parentElement;
    if (!i2 || !n2) return;
    let s2 = t2.autoSize;
    void 0 === s2 && (s2 = this.optionFor(t2, "autoSize"));
    let o2 = t2.width || 0, a2 = t2.height || 0;
    o2 && a2 && (s2 = false);
    const r2 = n2 && n2.style;
    if (false !== t2.preload && false !== s2 && r2) try {
      const t3 = window.getComputedStyle(n2), e3 = parseFloat(t3.paddingLeft) + parseFloat(t3.paddingRight), s3 = parseFloat(t3.paddingTop) + parseFloat(t3.paddingBottom), l2 = i2.contentWindow;
      if (l2) {
        const t4 = l2.document, i3 = t4.getElementsByTagName(xt)[0], n3 = t4.body;
        r2.width = "", n3.style.overflow = "hidden", o2 = o2 || i3.scrollWidth + e3, r2.width = `${o2}px`, n3.style.overflow = "", r2.flex = "0 0 auto", r2.height = `${n3.scrollHeight}px`, a2 = i3.scrollHeight + s3;
      }
    } catch (t3) {
    }
    if (o2 || a2) {
      const t3 = { flex: "0 1 auto", width: "", height: "" };
      o2 && "auto" !== o2 && (t3.width = `${o2}px`), a2 && "auto" !== a2 && (t3.height = `${a2}px`), Object.assign(r2, t3);
    }
  }
  playVideo() {
    const t2 = this.instance.getSlide();
    if (!t2) return;
    const { el: e2 } = t2;
    if (!e2 || !e2.offsetParent) return;
    if (!this.optionFor(t2, "videoAutoplay")) return;
    if (t2.type === Tt) try {
      const t3 = e2.querySelector("video");
      if (t3) {
        const e3 = t3.play();
        void 0 !== e3 && e3.then(() => {
        }).catch((e4) => {
          t3.muted = true, t3.play();
        });
      }
    } catch (t3) {
    }
    if (t2.type !== Pt && t2.type !== Ct) return;
    const i2 = () => {
      if (t2.iframeEl && t2.iframeEl.contentWindow) {
        let e3;
        if ("true" === t2.iframeEl.dataset.ready) return e3 = t2.type === Pt ? { event: "command", func: "playVideo" } : { method: "play", value: "true" }, e3 && t2.iframeEl.contentWindow.postMessage(JSON.stringify(e3), "*"), void (t2.poller = void 0);
        t2.type === Pt && (e3 = { event: "listening", id: t2.iframeEl.getAttribute("id") }, t2.iframeEl.contentWindow.postMessage(JSON.stringify(e3), "*"));
      }
      t2.poller = setTimeout(i2, 250);
    };
    i2();
  }
  processType(t2) {
    if (t2.html) return t2.type = xt, t2.src = t2.html, void (t2.html = "");
    const e2 = this.instance.optionFor(t2, "src", "");
    if (!e2 || "string" != typeof e2) return;
    let i2 = t2.type, n2 = null;
    if (n2 = e2.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
      const s2 = this.optionFor(t2, Pt), { nocookie: o2 } = s2, a2 = function(t3, e3) {
        var i3 = {};
        for (var n3 in t3) Object.prototype.hasOwnProperty.call(t3, n3) && e3.indexOf(n3) < 0 && (i3[n3] = t3[n3]);
        if (null != t3 && "function" == typeof Object.getOwnPropertySymbols) {
          var s3 = 0;
          for (n3 = Object.getOwnPropertySymbols(t3); s3 < n3.length; s3++) e3.indexOf(n3[s3]) < 0 && Object.prototype.propertyIsEnumerable.call(t3, n3[s3]) && (i3[n3[s3]] = t3[n3[s3]]);
        }
        return i3;
      }(s2, ["nocookie"]), r2 = `www.youtube${o2 ? "-nocookie" : ""}.com`, l2 = Mt(e2, a2), c2 = encodeURIComponent(n2[2]);
      t2.videoId = c2, t2.src = `https://${r2}/embed/${c2}?${l2}`, t2.thumbSrc = t2.thumbSrc || `https://i.ytimg.com/vi/${c2}/mqdefault.jpg`, i2 = Pt;
    } else if (n2 = e2.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)) {
      const s2 = Mt(e2, this.optionFor(t2, Ct)), o2 = encodeURIComponent(n2[1]), a2 = n2[4] || "";
      t2.videoId = o2, t2.src = `https://player.vimeo.com/video/${o2}?${a2 ? `h=${a2}${s2 ? "&" : ""}` : ""}${s2}`, i2 = Ct;
    }
    if (!i2 && t2.triggerEl) {
      const e3 = t2.triggerEl.dataset.type;
      At.includes(e3) && (i2 = e3);
    }
    i2 || "string" == typeof e2 && ("#" === e2.charAt(0) ? i2 = "inline" : (n2 = e2.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i2 = Tt, t2.videoFormat = t2.videoFormat || "video/" + ("ogv" === n2[1] ? "ogg" : n2[1])) : e2.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i2 = Et : e2.match(/\.(pdf)((\?|#).*)?$/i) && (i2 = "pdf")), (n2 = e2.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t2.src = `https://maps.google.${n2[1]}/?ll=${(n2[2] ? n2[2] + "&z=" + Math.floor(parseFloat(n2[3])) + (n2[4] ? n2[4].replace(/^\//, "&") : "") : n2[4] + "").replace(/\?/, "&")}&output=${n2[4] && n2[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, i2 = St) : (n2 = e2.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t2.src = `https://maps.google.${n2[1]}/maps?q=${n2[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, i2 = St), i2 = i2 || this.instance.option("defaultType"), t2.type = i2, i2 === Et && (t2.thumbSrc = t2.thumbSrc || t2.src);
  }
  setContent(t2) {
    const e2 = this.instance.optionFor(t2, "src") || "";
    if (t2 && t2.type && e2) {
      switch (t2.type) {
        case xt:
          this.instance.setContent(t2, e2);
          break;
        case Tt:
          const i2 = this.option("videoTpl");
          i2 && this.instance.setContent(t2, i2.replace(/\{\{src\}\}/gi, e2 + "").replace(/\{\{format\}\}/gi, this.optionFor(t2, "videoFormat") || "").replace(/\{\{poster\}\}/gi, t2.poster || t2.thumbSrc || ""));
          break;
        case "inline":
        case "clone":
          this.setInlineContent(t2);
          break;
        case "ajax":
          this.loadAjaxContent(t2);
          break;
        case "pdf":
        case St:
        case Pt:
        case Ct:
          t2.preload = false;
        case "iframe":
          this.setIframeContent(t2);
      }
      this.setAspectRatio(t2);
    }
  }
  setAspectRatio(t2) {
    const e2 = t2.contentEl;
    if (!(t2.el && e2 && t2.type && [Pt, Ct, Tt].includes(t2.type))) return;
    let i2, n2 = t2.width || "auto", s2 = t2.height || "auto";
    if ("auto" === n2 || "auto" === s2) {
      i2 = this.optionFor(t2, "videoRatio");
      const e3 = (i2 + "").match(/(\d+)\s*\/\s?(\d+)/);
      i2 = e3 && e3.length > 2 ? parseFloat(e3[1]) / parseFloat(e3[2]) : parseFloat(i2 + "");
    } else n2 && s2 && (i2 = n2 / s2);
    if (!i2) return;
    e2.style.aspectRatio = "", e2.style.width = "", e2.style.height = "", e2.offsetHeight;
    const o2 = e2.getBoundingClientRect(), a2 = o2.width || 1, r2 = o2.height || 1;
    e2.style.aspectRatio = i2 + "", i2 < a2 / r2 ? (s2 = "auto" === s2 ? r2 : Math.min(r2, s2), e2.style.width = "auto", e2.style.height = `${s2}px`) : (n2 = "auto" === n2 ? a2 : Math.min(a2, n2), e2.style.width = `${n2}px`, e2.style.height = "auto");
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.on("Carousel.beforeInitSlide", t2.onBeforeInitSlide), e2.on("Carousel.createSlide", t2.onCreateSlide), e2.on("Carousel.selectSlide", t2.onSelectSlide), e2.on("Carousel.unselectSlide", t2.onUnselectSlide), e2.on("Carousel.Panzoom.refresh", t2.onRefresh), e2.on("done", t2.onDone), e2.on("clearContent", t2.onClearContent), window.addEventListener("message", t2.onMessage);
  }
  detach() {
    const t2 = this, e2 = t2.instance;
    e2.off("Carousel.beforeInitSlide", t2.onBeforeInitSlide), e2.off("Carousel.createSlide", t2.onCreateSlide), e2.off("Carousel.selectSlide", t2.onSelectSlide), e2.off("Carousel.unselectSlide", t2.onUnselectSlide), e2.off("Carousel.Panzoom.refresh", t2.onRefresh), e2.off("done", t2.onDone), e2.off("clearContent", t2.onClearContent), window.removeEventListener("message", t2.onMessage);
  }
}
Object.defineProperty(Lt, "defaults", { enumerable: true, configurable: true, writable: true, value: Ot });
const zt = "play", Rt = "pause", kt = "ready";
class It extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: kt }), Object.defineProperty(this, "inHover", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "timer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "progressBar", { enumerable: true, configurable: true, writable: true, value: null });
  }
  get isActive() {
    return this.state !== kt;
  }
  onReady(t2) {
    this.option("autoStart") && (t2.isInfinite || t2.page < t2.pages.length - 1) && this.start();
  }
  onChange() {
    this.removeProgressBar(), this.pause();
  }
  onSettle() {
    this.resume();
  }
  onVisibilityChange() {
    "visible" === document.visibilityState ? this.resume() : this.pause();
  }
  onMouseEnter() {
    this.inHover = true, this.pause();
  }
  onMouseLeave() {
    var t2;
    this.inHover = false, (null === (t2 = this.instance.panzoom) || void 0 === t2 ? void 0 : t2.isResting) && this.resume();
  }
  onTimerEnd() {
    const t2 = this.instance;
    "play" === this.state && (t2.isInfinite || t2.page !== t2.pages.length - 1 ? t2.slideNext() : t2.slideTo(0));
  }
  removeProgressBar() {
    this.progressBar && (this.progressBar.remove(), this.progressBar = null);
  }
  createProgressBar() {
    var t2;
    if (!this.option("showProgress")) return null;
    this.removeProgressBar();
    const e2 = this.instance, i2 = (null === (t2 = e2.pages[e2.page]) || void 0 === t2 ? void 0 : t2.slides) || [];
    let n2 = this.option("progressParentEl");
    if (n2 || (n2 = (1 === i2.length ? i2[0].el : null) || e2.viewport), !n2) return null;
    const s2 = document.createElement("div");
    return P(s2, "f-progress"), n2.prepend(s2), this.progressBar = s2, s2.offsetHeight, s2;
  }
  set() {
    const t2 = this, e2 = t2.instance;
    if (e2.pages.length < 2) return;
    if (t2.timer) return;
    const i2 = t2.option("timeout");
    t2.state = zt, P(e2.container, "has-autoplay");
    let n2 = t2.createProgressBar();
    n2 && (n2.style.transitionDuration = `${i2}ms`, n2.style.transform = "scaleX(1)"), t2.timer = setTimeout(() => {
      t2.timer = null, t2.inHover || t2.onTimerEnd();
    }, i2), t2.emit("set");
  }
  clear() {
    const t2 = this;
    t2.timer && (clearTimeout(t2.timer), t2.timer = null), t2.removeProgressBar();
  }
  start() {
    const t2 = this;
    if (t2.set(), t2.state !== kt) {
      if (t2.option("pauseOnHover")) {
        const e2 = t2.instance.container;
        e2.addEventListener("mouseenter", t2.onMouseEnter, false), e2.addEventListener("mouseleave", t2.onMouseLeave, false);
      }
      document.addEventListener("visibilitychange", t2.onVisibilityChange, false), t2.emit("start");
    }
  }
  stop() {
    const t2 = this, e2 = t2.state, i2 = t2.instance.container;
    t2.clear(), t2.state = kt, i2.removeEventListener("mouseenter", t2.onMouseEnter, false), i2.removeEventListener("mouseleave", t2.onMouseLeave, false), document.removeEventListener("visibilitychange", t2.onVisibilityChange, false), S(i2, "has-autoplay"), e2 !== kt && t2.emit("stop");
  }
  pause() {
    const t2 = this;
    t2.state === zt && (t2.state = Rt, t2.clear(), t2.emit(Rt));
  }
  resume() {
    const t2 = this, e2 = t2.instance;
    if (e2.isInfinite || e2.page !== e2.pages.length - 1) if (t2.state !== zt) {
      if (t2.state === Rt && !t2.inHover) {
        const e3 = new Event("resume", { bubbles: true, cancelable: true });
        t2.emit("resume", e3), e3.defaultPrevented || t2.set();
      }
    } else t2.set();
    else t2.stop();
  }
  toggle() {
    this.state === zt || this.state === Rt ? this.stop() : this.start();
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.on("ready", t2.onReady), e2.on("Panzoom.startAnimation", t2.onChange), e2.on("Panzoom.endAnimation", t2.onSettle), e2.on("Panzoom.touchMove", t2.onChange);
  }
  detach() {
    const t2 = this, e2 = t2.instance;
    e2.off("ready", t2.onReady), e2.off("Panzoom.startAnimation", t2.onChange), e2.off("Panzoom.endAnimation", t2.onSettle), e2.off("Panzoom.touchMove", t2.onChange), t2.stop();
  }
}
Object.defineProperty(It, "defaults", { enumerable: true, configurable: true, writable: true, value: { autoStart: true, pauseOnHover: true, progressParentEl: null, showProgress: true, timeout: 3e3 } });
class Dt extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "ref", { enumerable: true, configurable: true, writable: true, value: null });
  }
  onPrepare(t2) {
    const e2 = t2.carousel;
    if (!e2) return;
    const i2 = t2.container;
    i2 && (e2.options.Autoplay = u({ autoStart: false }, this.option("Autoplay") || {}, { pauseOnHover: false, timeout: this.option("timeout"), progressParentEl: () => this.option("progressParentEl") || null, on: { start: () => {
      t2.emit("startSlideshow");
    }, set: (e3) => {
      var n2;
      i2.classList.add("has-slideshow"), (null === (n2 = t2.getSlide()) || void 0 === n2 ? void 0 : n2.state) !== lt.Ready && e3.pause();
    }, stop: () => {
      i2.classList.remove("has-slideshow"), t2.isCompact || t2.endIdle(), t2.emit("endSlideshow");
    }, resume: (e3, i3) => {
      var n2, s2, o2;
      !i3 || !i3.cancelable || (null === (n2 = t2.getSlide()) || void 0 === n2 ? void 0 : n2.state) === lt.Ready && (null === (o2 = null === (s2 = t2.carousel) || void 0 === s2 ? void 0 : s2.panzoom) || void 0 === o2 ? void 0 : o2.isResting) || i3.preventDefault();
    } } }), e2.attachPlugins({ Autoplay: It }), this.ref = e2.plugins.Autoplay);
  }
  onReady(t2) {
    const e2 = t2.carousel, i2 = this.ref;
    i2 && e2 && this.option("playOnStart") && (e2.isInfinite || e2.page < e2.pages.length - 1) && i2.start();
  }
  onDone(t2, e2) {
    const i2 = this.ref, n2 = t2.carousel;
    if (!i2 || !n2) return;
    const s2 = e2.panzoom;
    s2 && s2.on("startAnimation", () => {
      t2.isCurrentSlide(e2) && i2.stop();
    }), t2.isCurrentSlide(e2) && i2.resume();
  }
  onKeydown(t2, e2) {
    var i2;
    const n2 = this.ref;
    n2 && e2 === this.option("key") && "BUTTON" !== (null === (i2 = document.activeElement) || void 0 === i2 ? void 0 : i2.nodeName) && n2.toggle();
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.on("Carousel.init", t2.onPrepare), e2.on("Carousel.ready", t2.onReady), e2.on("done", t2.onDone), e2.on("keydown", t2.onKeydown);
  }
  detach() {
    const t2 = this, e2 = t2.instance;
    e2.off("Carousel.init", t2.onPrepare), e2.off("Carousel.ready", t2.onReady), e2.off("done", t2.onDone), e2.off("keydown", t2.onKeydown);
  }
}
Object.defineProperty(Dt, "defaults", { enumerable: true, configurable: true, writable: true, value: { key: " ", playOnStart: false, progressParentEl: (t2) => {
  var e2;
  return (null === (e2 = t2.instance.container) || void 0 === e2 ? void 0 : e2.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]")) || t2.instance.container;
}, timeout: 3e3 } });
const Ft = { classes: { container: "f-thumbs f-carousel__thumbs", viewport: "f-thumbs__viewport", track: "f-thumbs__track", slide: "f-thumbs__slide", isResting: "is-resting", isSelected: "is-selected", isLoading: "is-loading", hasThumbs: "has-thumbs" }, minCount: 2, parentEl: null, thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>', type: "modern" };
var jt;
!function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Ready = 1] = "Ready", t2[t2.Hidden = 2] = "Hidden";
}(jt || (jt = {}));
const Bt = "isResting", Ht = "thumbWidth", Nt = "thumbHeight", _t = "thumbClipWidth";
let $t = class extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "type", { enumerable: true, configurable: true, writable: true, value: "modern" }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "track", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "carousel", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "thumbWidth", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbClipWidth", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbHeight", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbGap", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbExtraGap", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: jt.Init });
  }
  get isModern() {
    return "modern" === this.type;
  }
  onInitSlide(t2, e2) {
    const i2 = e2.el ? e2.el.dataset : void 0;
    i2 && (e2.thumbSrc = i2.thumbSrc || e2.thumbSrc || "", e2[_t] = parseFloat(i2[_t] || "") || e2[_t] || 0, e2[Nt] = parseFloat(i2.thumbHeight || "") || e2[Nt] || 0), this.addSlide(e2);
  }
  onInitSlides() {
    this.build();
  }
  onChange() {
    var t2;
    if (!this.isModern) return;
    const e2 = this.container, i2 = this.instance, n2 = i2.panzoom, s2 = this.carousel, a2 = s2 ? s2.panzoom : null, r2 = i2.page;
    if (n2 && s2 && a2) {
      if (n2.isDragging) {
        S(e2, this.cn(Bt));
        let n3 = (null === (t2 = s2.pages[r2]) || void 0 === t2 ? void 0 : t2.pos) || 0;
        n3 += i2.getProgress(r2) * (this[_t] + this.thumbGap);
        let o2 = a2.getBounds();
        -1 * n3 > o2.x.min && -1 * n3 < o2.x.max && a2.panTo({ x: -1 * n3, friction: 0.12 });
      } else o(e2, this.cn(Bt), n2.isResting);
      this.shiftModern();
    }
  }
  onRefresh() {
    this.updateProps();
    for (const t2 of this.instance.slides || []) this.resizeModernSlide(t2);
    this.shiftModern();
  }
  isDisabled() {
    const t2 = this.option("minCount") || 0;
    if (t2) {
      const e3 = this.instance;
      let i2 = 0;
      for (const t3 of e3.slides || []) t3.thumbSrc && i2++;
      if (i2 < t2) return true;
    }
    const e2 = this.option("type");
    return ["modern", "classic"].indexOf(e2) < 0;
  }
  getThumb(t2) {
    const e2 = this.option("thumbTpl") || "";
    return { html: this.instance.localize(e2, [["%i", t2.index], ["%d", t2.index + 1], ["%s", t2.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]]) };
  }
  addSlide(t2) {
    const e2 = this.carousel;
    e2 && e2.addSlide(t2.index, this.getThumb(t2));
  }
  getSlides() {
    const t2 = [];
    for (const e2 of this.instance.slides || []) t2.push(this.getThumb(e2));
    return t2;
  }
  resizeModernSlide(t2) {
    this.isModern && (t2[Ht] = t2[_t] && t2[Nt] ? Math.round(this[Nt] * (t2[_t] / t2[Nt])) : this[Ht]);
  }
  updateProps() {
    const t2 = this.container;
    if (!t2) return;
    const e2 = (e3) => parseFloat(getComputedStyle(t2).getPropertyValue("--f-thumb-" + e3)) || 0;
    this.thumbGap = e2("gap"), this.thumbExtraGap = e2("extra-gap"), this[Ht] = e2("width") || 40, this[_t] = e2("clip-width") || 40, this[Nt] = e2("height") || 40;
  }
  build() {
    const t2 = this;
    if (t2.state !== jt.Init) return;
    if (t2.isDisabled()) return void t2.emit("disabled");
    const e2 = t2.instance, i2 = e2.container, n2 = t2.getSlides(), s2 = t2.option("type");
    t2.type = s2;
    const o2 = t2.option("parentEl"), a2 = t2.cn("container"), r2 = t2.cn("track");
    let l2 = null == o2 ? void 0 : o2.querySelector("." + a2);
    l2 || (l2 = document.createElement("div"), P(l2, a2), o2 ? o2.appendChild(l2) : i2.after(l2)), P(l2, `is-${s2}`), P(i2, t2.cn("hasThumbs")), t2.container = l2, t2.updateProps();
    let c2 = l2.querySelector("." + r2);
    c2 || (c2 = document.createElement("div"), P(c2, t2.cn("track")), l2.appendChild(c2)), t2.track = c2;
    const h2 = u({}, { track: c2, infinite: false, center: true, fill: "classic" === s2, dragFree: true, slidesPerPage: 1, transition: false, preload: 0.25, friction: 0.12, Panzoom: { maxVelocity: 0 }, Dots: false, Navigation: false, classes: { container: "f-thumbs", viewport: "f-thumbs__viewport", track: "f-thumbs__track", slide: "f-thumbs__slide" } }, t2.option("Carousel") || {}, { Sync: { target: e2 }, slides: n2 }), d2 = new e2.constructor(l2, h2);
    d2.on("createSlide", (e3, i3) => {
      t2.setProps(i3.index), t2.emit("createSlide", i3, i3.el);
    }), d2.on("ready", () => {
      t2.shiftModern(), t2.emit("ready");
    }), d2.on("refresh", () => {
      t2.shiftModern();
    }), d2.on("Panzoom.click", (e3, i3, n3) => {
      t2.onClick(n3);
    }), t2.carousel = d2, t2.state = jt.Ready;
  }
  onClick(t2) {
    t2.preventDefault(), t2.stopPropagation();
    const e2 = this.instance, { pages: i2, page: n2 } = e2, s2 = (t3) => {
      if (t3) {
        const e3 = t3.closest("[data-carousel-index]");
        if (e3) return [parseInt(e3.dataset.carouselIndex || "", 10) || 0, e3];
      }
      return [-1, void 0];
    }, o2 = (t3, e3) => {
      const i3 = document.elementFromPoint(t3, e3);
      return i3 ? s2(i3) : [-1, void 0];
    };
    let [a2, r2] = s2(t2.target);
    if (a2 > -1) return;
    const l2 = this[_t], c2 = t2.clientX, h2 = t2.clientY;
    let [d2, u2] = o2(c2 - l2, h2), [p2, f2] = o2(c2 + l2, h2);
    u2 && f2 ? (a2 = Math.abs(c2 - u2.getBoundingClientRect().right) < Math.abs(c2 - f2.getBoundingClientRect().left) ? d2 : p2, a2 === n2 && (a2 = a2 === d2 ? p2 : d2)) : u2 ? a2 = d2 : f2 && (a2 = p2), a2 > -1 && i2[a2] && e2.slideTo(a2);
  }
  getShift(t2) {
    var e2;
    const i2 = this, { instance: n2 } = i2, s2 = i2.carousel;
    if (!n2 || !s2) return 0;
    const o2 = i2[Ht], a2 = i2[_t], r2 = i2.thumbGap, l2 = i2.thumbExtraGap;
    if (!(null === (e2 = s2.slides[t2]) || void 0 === e2 ? void 0 : e2.el)) return 0;
    const c2 = 0.5 * (o2 - a2), h2 = n2.pages.length - 1;
    let d2 = n2.getProgress(0), u2 = n2.getProgress(h2), p2 = n2.getProgress(t2, false, true), f2 = 0, g2 = c2 + l2 + r2;
    const m2 = d2 < 0 && d2 > -1, v2 = u2 > 0 && u2 < 1;
    return 0 === t2 ? (f2 = g2 * Math.abs(d2), v2 && 1 === d2 && (f2 -= g2 * Math.abs(u2))) : t2 === h2 ? (f2 = g2 * Math.abs(u2) * -1, m2 && -1 === u2 && (f2 += g2 * Math.abs(d2))) : m2 || v2 ? (f2 = -1 * g2, f2 += g2 * Math.abs(d2), f2 += g2 * (1 - Math.abs(u2))) : f2 = g2 * p2, f2;
  }
  setProps(e2) {
    var i2;
    const n2 = this;
    if (!n2.isModern) return;
    const { instance: s2 } = n2, o2 = n2.carousel;
    if (s2 && o2) {
      const a2 = null === (i2 = o2.slides[e2]) || void 0 === i2 ? void 0 : i2.el;
      if (a2 && a2.childNodes.length) {
        let i3 = t(1 - Math.abs(s2.getProgress(e2))), o3 = t(n2.getShift(e2));
        a2.style.setProperty("--progress", i3 ? i3 + "" : ""), a2.style.setProperty("--shift", o3 + "");
      }
    }
  }
  shiftModern() {
    const t2 = this;
    if (!t2.isModern) return;
    const { instance: e2, track: i2 } = t2, n2 = e2.panzoom, s2 = t2.carousel;
    if (!(e2 && i2 && n2 && s2)) return;
    if (n2.state === m.Init || n2.state === m.Destroy) return;
    for (const i3 of e2.slides) t2.setProps(i3.index);
    let o2 = (t2[_t] + t2.thumbGap) * (s2.slides.length || 0);
    i2.style.setProperty("--width", o2 + "");
  }
  cleanup() {
    const t2 = this;
    t2.carousel && t2.carousel.destroy(), t2.carousel = null, t2.container && t2.container.remove(), t2.container = null, t2.track && t2.track.remove(), t2.track = null, t2.state = jt.Init, S(t2.instance.container, t2.cn("hasThumbs"));
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.on("initSlide", t2.onInitSlide), e2.state === B.Init ? e2.on("initSlides", t2.onInitSlides) : t2.onInitSlides(), e2.on(["change", "Panzoom.afterTransform"], t2.onChange), e2.on("Panzoom.refresh", t2.onRefresh);
  }
  detach() {
    const t2 = this, e2 = t2.instance;
    e2.off("initSlide", t2.onInitSlide), e2.off("initSlides", t2.onInitSlides), e2.off(["change", "Panzoom.afterTransform"], t2.onChange), e2.off("Panzoom.refresh", t2.onRefresh), t2.cleanup();
  }
};
Object.defineProperty($t, "defaults", { enumerable: true, configurable: true, writable: true, value: Ft });
const Wt = Object.assign(Object.assign({}, Ft), { key: "t", showOnStart: true, parentEl: null }), Xt = "is-masked", qt = "aria-hidden";
class Yt extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "ref", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "hidden", { enumerable: true, configurable: true, writable: true, value: false });
  }
  get isEnabled() {
    const t2 = this.ref;
    return t2 && !t2.isDisabled();
  }
  get isHidden() {
    return this.hidden;
  }
  onClick(t2, e2) {
    e2.stopPropagation();
  }
  onCreateSlide(t2, e2) {
    var i2, n2, s2;
    const o2 = (null === (s2 = null === (n2 = null === (i2 = this.instance) || void 0 === i2 ? void 0 : i2.carousel) || void 0 === n2 ? void 0 : n2.slides[e2.index]) || void 0 === s2 ? void 0 : s2.type) || "", a2 = e2.el;
    if (a2 && o2) {
      let t3 = `for-${o2}`;
      ["video", "youtube", "vimeo", "html5video"].includes(o2) && (t3 += " for-video"), P(a2, t3);
    }
  }
  onInit() {
    var t2;
    const e2 = this, i2 = e2.instance, n2 = i2.carousel;
    if (e2.ref || !n2) return;
    const s2 = e2.option("parentEl") || i2.footer || i2.container;
    if (!s2) return;
    const o2 = u({}, e2.options, { parentEl: s2, classes: { container: "f-thumbs fancybox__thumbs" }, Carousel: { Sync: { friction: i2.option("Carousel.friction") || 0 } }, on: { ready: (t3) => {
      const i3 = t3.container;
      i3 && this.hidden && (e2.refresh(), i3.style.transition = "none", e2.hide(), i3.offsetHeight, queueMicrotask(() => {
        i3.style.transition = "", e2.show();
      }));
    } } });
    o2.Carousel = o2.Carousel || {}, o2.Carousel.on = u((null === (t2 = e2.options.Carousel) || void 0 === t2 ? void 0 : t2.on) || {}, { click: this.onClick, createSlide: this.onCreateSlide }), n2.options.Thumbs = o2, n2.attachPlugins({ Thumbs: $t }), e2.ref = n2.plugins.Thumbs, e2.option("showOnStart") || (e2.ref.state = jt.Hidden, e2.hidden = true);
  }
  onResize() {
    var t2;
    const e2 = null === (t2 = this.ref) || void 0 === t2 ? void 0 : t2.container;
    e2 && (e2.style.maxHeight = "");
  }
  onKeydown(t2, e2) {
    const i2 = this.option("key");
    i2 && i2 === e2 && this.toggle();
  }
  toggle() {
    const t2 = this.ref;
    if (t2 && !t2.isDisabled()) return t2.state === jt.Hidden ? (t2.state = jt.Init, void t2.build()) : void (this.hidden ? this.show() : this.hide());
  }
  show() {
    const t2 = this.ref;
    if (!t2 || t2.isDisabled()) return;
    const e2 = t2.container;
    e2 && (this.refresh(), e2.offsetHeight, e2.removeAttribute(qt), e2.classList.remove(Xt), this.hidden = false);
  }
  hide() {
    const t2 = this.ref, e2 = t2 && t2.container;
    e2 && (this.refresh(), e2.offsetHeight, e2.classList.add(Xt), e2.setAttribute(qt, "true")), this.hidden = true;
  }
  refresh() {
    const t2 = this.ref;
    if (!t2 || !t2.state) return;
    const e2 = t2.container, i2 = (null == e2 ? void 0 : e2.firstChild) || null;
    e2 && i2 && i2.childNodes.length && (e2.style.maxHeight = `${i2.getBoundingClientRect().height}px`);
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.state === rt.Init ? e2.on("Carousel.init", t2.onInit) : t2.onInit(), e2.on("resize", t2.onResize), e2.on("keydown", t2.onKeydown);
  }
  detach() {
    var t2;
    const e2 = this, i2 = e2.instance;
    i2.off("Carousel.init", e2.onInit), i2.off("resize", e2.onResize), i2.off("keydown", e2.onKeydown), null === (t2 = i2.carousel) || void 0 === t2 || t2.detachPlugins(["Thumbs"]), e2.ref = null;
  }
}
Object.defineProperty(Yt, "defaults", { enumerable: true, configurable: true, writable: true, value: Wt });
const Vt = { panLeft: { icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>', change: { panX: -100 } }, panRight: { icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>', change: { panX: 100 } }, panUp: { icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>', change: { panY: -100 } }, panDown: { icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>', change: { panY: 100 } }, zoomIn: { icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>', action: "zoomIn" }, zoomOut: { icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>', action: "zoomOut" }, toggle1to1: { icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>', action: "toggleZoom" }, toggleZoom: { icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>', action: "toggleZoom" }, iterateZoom: { icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>', action: "iterateZoom" }, rotateCCW: { icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>', action: "rotateCCW" }, rotateCW: { icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>', action: "rotateCW" }, flipX: { icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>', action: "flipX" }, flipY: { icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>', action: "flipY" }, fitX: { icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>', action: "fitX" }, fitY: { icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>', action: "fitY" }, reset: { icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>', action: "reset" }, toggleFS: { icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>', action: "toggleFS" } };
var Zt;
!function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Ready = 1] = "Ready", t2[t2.Disabled = 2] = "Disabled";
}(Zt || (Zt = {}));
const Ut = { absolute: "auto", display: { left: ["infobar"], middle: [], right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"] }, enabled: "auto", items: { infobar: { tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>' }, download: { tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>' }, prev: { tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>' }, next: { tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>' }, slideshow: { tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>' }, fullscreen: { tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>' }, thumbs: { tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>' }, close: { tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>' } }, parentEl: null }, Gt = { tabindex: "-1", width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, Kt = "has-toolbar", Jt = "fancybox__toolbar";
class Qt extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: Zt.Init }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: null });
  }
  onReady(t2) {
    var e2;
    if (!t2.carousel) return;
    let i2 = this.option("display"), n2 = this.option("absolute"), s2 = this.option("enabled");
    if ("auto" === s2) {
      const t3 = this.instance.carousel;
      let e3 = 0;
      if (t3) for (const i3 of t3.slides) (i3.panzoom || "image" === i3.type) && e3++;
      e3 || (s2 = false);
    }
    s2 || (i2 = void 0);
    let o2 = 0;
    const a2 = { left: [], middle: [], right: [] };
    if (i2) for (const t3 of ["left", "middle", "right"]) for (const n3 of i2[t3]) {
      const i3 = this.createEl(n3);
      i3 && (null === (e2 = a2[t3]) || void 0 === e2 || e2.push(i3), o2++);
    }
    let r2 = null;
    if (o2 && (r2 = this.createContainer()), r2) {
      for (const [t3, e3] of Object.entries(a2)) {
        const i3 = document.createElement("div");
        P(i3, Jt + "__column is-" + t3);
        for (const t4 of e3) i3.appendChild(t4);
        "auto" !== n2 || "middle" !== t3 || e3.length || (n2 = true), r2.appendChild(i3);
      }
      true === n2 && P(r2, "is-absolute"), this.state = Zt.Ready, this.onRefresh();
    } else this.state = Zt.Disabled;
  }
  onClick(t2) {
    var e2, i2;
    const n2 = this.instance, s2 = n2.getSlide(), o2 = null == s2 ? void 0 : s2.panzoom, a2 = t2.target, r2 = a2 && E(a2) ? a2.dataset : null;
    if (!r2) return;
    if (void 0 !== r2.fancyboxToggleThumbs) return t2.preventDefault(), t2.stopPropagation(), void (null === (e2 = n2.plugins.Thumbs) || void 0 === e2 || e2.toggle());
    if (void 0 !== r2.fancyboxToggleFullscreen) return t2.preventDefault(), t2.stopPropagation(), void this.instance.toggleFullscreen();
    if (void 0 !== r2.fancyboxToggleSlideshow) {
      t2.preventDefault(), t2.stopPropagation();
      const e3 = null === (i2 = n2.carousel) || void 0 === i2 ? void 0 : i2.plugins.Autoplay;
      let s3 = e3.isActive;
      return o2 && "mousemove" === o2.panMode && !s3 && o2.reset(), void (s3 ? e3.stop() : e3.start());
    }
    const l2 = r2.panzoomAction, c2 = r2.panzoomChange;
    if ((c2 || l2) && (t2.preventDefault(), t2.stopPropagation()), c2) {
      let t3 = {};
      try {
        t3 = JSON.parse(c2);
      } catch (t4) {
      }
      o2 && o2.applyChange(t3);
    } else l2 && o2 && o2[l2] && o2[l2]();
  }
  onChange() {
    this.onRefresh();
  }
  onRefresh() {
    if (this.instance.isClosing()) return;
    const t2 = this.container;
    if (!t2) return;
    const e2 = this.instance.getSlide();
    if (!e2 || e2.state !== lt.Ready) return;
    const i2 = e2 && !e2.error && e2.panzoom;
    for (const e3 of t2.querySelectorAll("[data-panzoom-action]")) i2 ? (e3.removeAttribute("disabled"), e3.removeAttribute("tabindex")) : (e3.setAttribute("disabled", ""), e3.setAttribute("tabindex", "-1"));
    let n2 = i2 && i2.canZoomIn(), s2 = i2 && i2.canZoomOut();
    for (const e3 of t2.querySelectorAll('[data-panzoom-action="zoomIn"]')) n2 ? (e3.removeAttribute("disabled"), e3.removeAttribute("tabindex")) : (e3.setAttribute("disabled", ""), e3.setAttribute("tabindex", "-1"));
    for (const e3 of t2.querySelectorAll('[data-panzoom-action="zoomOut"]')) s2 ? (e3.removeAttribute("disabled"), e3.removeAttribute("tabindex")) : (e3.setAttribute("disabled", ""), e3.setAttribute("tabindex", "-1"));
    for (const e3 of t2.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
      s2 || n2 ? (e3.removeAttribute("disabled"), e3.removeAttribute("tabindex")) : (e3.setAttribute("disabled", ""), e3.setAttribute("tabindex", "-1"));
      const t3 = e3.querySelector("g");
      t3 && (t3.style.display = n2 ? "" : "none");
    }
  }
  onDone(t2, e2) {
    var i2;
    null === (i2 = e2.panzoom) || void 0 === i2 || i2.on("afterTransform", () => {
      this.instance.isCurrentSlide(e2) && this.onRefresh();
    }), this.instance.isCurrentSlide(e2) && this.onRefresh();
  }
  createContainer() {
    const t2 = this.instance.container;
    if (!t2) return null;
    const e2 = this.option("parentEl") || t2;
    let i2 = e2.querySelector("." + Jt);
    return i2 || (i2 = document.createElement("div"), P(i2, Jt), e2.prepend(i2)), i2.addEventListener("click", this.onClick, { passive: false, capture: true }), t2 && P(t2, Kt), this.container = i2, i2;
  }
  createEl(t2) {
    const e2 = this.instance, i2 = e2.carousel;
    if (!i2) return null;
    if ("toggleFS" === t2) return null;
    if ("fullscreen" === t2 && !ot()) return null;
    let s2 = null;
    const o2 = i2.slides.length || 0;
    let a2 = 0, r2 = 0;
    for (const t3 of i2.slides) (t3.panzoom || "image" === t3.type) && a2++, ("image" === t3.type || t3.downloadSrc) && r2++;
    if (o2 < 2 && ["infobar", "prev", "next"].includes(t2)) return s2;
    if (void 0 !== Vt[t2] && !a2) return null;
    if ("download" === t2 && !r2) return null;
    if ("thumbs" === t2) {
      const t3 = e2.plugins.Thumbs;
      if (!t3 || !t3.isEnabled) return null;
    }
    if ("slideshow" === t2) {
      if (!i2.plugins.Autoplay || o2 < 2) return null;
    }
    if (void 0 !== Vt[t2]) {
      const e3 = Vt[t2];
      s2 = document.createElement("button"), s2.setAttribute("title", this.instance.localize(`{{${t2.toUpperCase()}}}`)), P(s2, "f-button"), e3.action && (s2.dataset.panzoomAction = e3.action), e3.change && (s2.dataset.panzoomChange = JSON.stringify(e3.change)), s2.appendChild(n(this.instance.localize(e3.icon)));
    } else {
      const e3 = (this.option("items") || [])[t2];
      e3 && (s2 = n(this.instance.localize(e3.tpl)), "function" == typeof e3.click && s2.addEventListener("click", (t3) => {
        t3.preventDefault(), t3.stopPropagation(), "function" == typeof e3.click && e3.click.call(this, this, t3);
      }));
    }
    const l2 = null == s2 ? void 0 : s2.querySelector("svg");
    if (l2) for (const [t3, e3] of Object.entries(Gt)) l2.getAttribute(t3) || l2.setAttribute(t3, String(e3));
    return s2;
  }
  removeContainer() {
    const t2 = this.container;
    t2 && t2.remove(), this.container = null, this.state = Zt.Disabled;
    const e2 = this.instance.container;
    e2 && S(e2, Kt);
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.on("Carousel.initSlides", t2.onReady), e2.on("done", t2.onDone), e2.on(["reveal", "Carousel.change"], t2.onChange), t2.onReady(t2.instance);
  }
  detach() {
    const t2 = this, e2 = t2.instance;
    e2.off("Carousel.initSlides", t2.onReady), e2.off("done", t2.onDone), e2.off(["reveal", "Carousel.change"], t2.onChange), t2.removeContainer();
  }
}
Object.defineProperty(Qt, "defaults", { enumerable: true, configurable: true, writable: true, value: Ut });
const te = { Hash: class extends _ {
  onReady() {
    ht = false;
  }
  onChange(t2) {
    ut && clearTimeout(ut);
    const { hash: e2 } = pt(), { hash: i2 } = ft(), n2 = t2.isOpeningSlide(t2.getSlide());
    n2 && (ct = i2 === e2 ? "" : i2), e2 && e2 !== i2 && (ut = setTimeout(() => {
      try {
        if (t2.state === rt.Ready) {
          let t3 = "replaceState";
          n2 && !dt && (t3 = "pushState", dt = true), window.history[t3]({}, document.title, window.location.pathname + window.location.search + e2);
        }
      } catch (t3) {
      }
    }, 300));
  }
  onClose(t2) {
    if (ut && clearTimeout(ut), !ht && dt) return dt = false, ht = false, void window.history.back();
    if (!ht) try {
      window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (ct || ""));
    } catch (t3) {
    }
  }
  attach() {
    const t2 = this.instance;
    t2.on("ready", this.onReady), t2.on(["Carousel.ready", "Carousel.change"], this.onChange), t2.on("close", this.onClose);
  }
  detach() {
    const t2 = this.instance;
    t2.off("ready", this.onReady), t2.off(["Carousel.ready", "Carousel.change"], this.onChange), t2.off("close", this.onClose);
  }
  static parseURL() {
    return ft();
  }
  static startFromUrl() {
    gt();
  }
  static destroy() {
    window.removeEventListener("hashchange", vt, false);
  }
}, Html: Lt, Images: wt, Slideshow: Dt, Thumbs: Yt, Toolbar: Qt }, ee = "with-fancybox", ie = "hide-scrollbar", ne = "--fancybox-scrollbar-compensate", se = "--fancybox-body-margin", oe = "aria-hidden", ae = "is-using-tab", re = "is-animated", le = "is-compact", ce = "is-loading", he = "is-opening", de = "has-caption", ue = "disabled", pe = "tabindex", fe = "download", ge = "href", me = "src", ve = (t2) => "string" == typeof t2, be = function() {
  var t2 = window.getSelection();
  return !!t2 && "Range" === t2.type;
};
let ye, we = null, xe = null, Ee = 0, Se = 0, Pe = 0, Ce = 0;
const Te = /* @__PURE__ */ new Map();
let Me = 0;
class Oe extends g {
  get isIdle() {
    return this.idle;
  }
  get isCompact() {
    return this.option("compact");
  }
  constructor(t2 = [], e2 = {}, i2 = {}) {
    super(e2), Object.defineProperty(this, "userSlides", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "userPlugins", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "idle", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "idleTimer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "clickTimer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "pwt", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "ignoreFocusChange", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "startedFs", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: rt.Init }), Object.defineProperty(this, "id", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "caption", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "footer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "carousel", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "lastFocus", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "prevMouseMoveEvent", { enumerable: true, configurable: true, writable: true, value: void 0 }), ye || (ye = ot()), this.id = e2.id || ++Me, Te.set(this.id, this), this.userSlides = t2, this.userPlugins = i2, queueMicrotask(() => {
      this.init();
    });
  }
  init() {
    if (this.state === rt.Destroy) return;
    this.state = rt.Init, this.attachPlugins(Object.assign(Object.assign({}, Oe.Plugins), this.userPlugins)), this.emit("init"), this.emit("attachPlugins"), true === this.option("hideScrollbar") && (() => {
      if (!et) return;
      const t3 = document, e2 = t3.body, i2 = t3.documentElement;
      if (e2.classList.contains(ie)) return;
      let n2 = window.innerWidth - i2.getBoundingClientRect().width;
      const s2 = parseFloat(window.getComputedStyle(e2).marginRight);
      n2 < 0 && (n2 = 0), i2.style.setProperty(ne, `${n2}px`), s2 && e2.style.setProperty(se, `${s2}px`), e2.classList.add(ie);
    })(), this.initLayout(), this.scale();
    const t2 = () => {
      this.initCarousel(this.userSlides), this.state = rt.Ready, this.attachEvents(), this.emit("ready"), setTimeout(() => {
        this.container && this.container.setAttribute(oe, "false");
      }, 16);
    };
    this.option("Fullscreen.autoStart") && ye && !ye.isFullscreen() ? ye.request().then(() => {
      this.startedFs = true, t2();
    }).catch(() => t2()) : t2();
  }
  initLayout() {
    var t2, e2;
    const i2 = this.option("parentEl") || document.body, s2 = n(this.localize(this.option("tpl.main") || ""));
    if (s2) {
      if (s2.setAttribute("id", `fancybox-${this.id}`), s2.setAttribute("aria-label", this.localize("{{MODAL}}")), s2.classList.toggle(le, this.isCompact), P(s2, this.option("mainClass") || ""), P(s2, he), this.container = s2, this.footer = s2.querySelector(".fancybox__footer"), i2.appendChild(s2), P(document.documentElement, ee), we && xe || (we = document.createElement("span"), P(we, "fancybox-focus-guard"), we.setAttribute(pe, "0"), we.setAttribute(oe, "true"), we.setAttribute("aria-label", "Focus guard"), xe = we.cloneNode(), null === (t2 = s2.parentElement) || void 0 === t2 || t2.insertBefore(we, s2), null === (e2 = s2.parentElement) || void 0 === e2 || e2.append(xe)), s2.addEventListener("mousedown", (t3) => {
        Ee = t3.pageX, Se = t3.pageY, S(s2, ae);
      }), this.option("closeExisting")) for (const t3 of Te.values()) t3.id !== this.id && t3.close();
      else this.option("animated") && (P(s2, re), setTimeout(() => {
        this.isClosing() || S(s2, re);
      }, 350));
      this.emit("initLayout");
    }
  }
  initCarousel(t2) {
    const i2 = this.container;
    if (!i2) return;
    const n2 = i2.querySelector(".fancybox__carousel");
    if (!n2) return;
    const s2 = this.carousel = new Q(n2, u({}, { slides: t2, transition: "fade", Panzoom: { lockAxis: this.option("dragToClose") ? "xy" : "x", infinite: !!this.option("dragToClose") && "y" }, Dots: false, Navigation: { classes: { container: "fancybox__nav", button: "f-button", isNext: "is-next", isPrev: "is-prev" } }, initialPage: this.option("startIndex"), l10n: this.option("l10n") }, this.option("Carousel") || {}));
    s2.on("*", (t3, e2, ...i3) => {
      this.emit(`Carousel.${e2}`, t3, ...i3);
    }), s2.on(["ready", "change"], () => {
      this.manageCaption();
    }), this.on("Carousel.removeSlide", (t3, e2, i3) => {
      this.clearContent(i3), i3.state = void 0;
    }), s2.on("Panzoom.touchStart", () => {
      var t3, e2;
      this.isCompact || this.endIdle(), (null === (t3 = document.activeElement) || void 0 === t3 ? void 0 : t3.closest(".f-thumbs")) && (null === (e2 = this.container) || void 0 === e2 || e2.focus());
    }), s2.on("settle", () => {
      this.idleTimer || this.isCompact || !this.option("idle") || this.setIdle(), this.option("autoFocus") && !this.isClosing && this.checkFocus();
    }), this.option("dragToClose") && (s2.on("Panzoom.afterTransform", (t3, i3) => {
      const n3 = this.getSlide();
      if (n3 && e(n3.el)) return;
      const s3 = this.container;
      if (s3) {
        const t4 = Math.abs(i3.current.f), e2 = t4 < 1 ? "" : Math.max(0.5, Math.min(1, 1 - t4 / i3.contentRect.fitHeight * 1.5));
        s3.style.setProperty("--fancybox-ts", e2 ? "0s" : ""), s3.style.setProperty("--fancybox-opacity", e2 + "");
      }
    }), s2.on("Panzoom.touchEnd", (t3, i3, n3) => {
      var s3;
      const o2 = this.getSlide();
      if (o2 && e(o2.el)) return;
      if (i3.isMobile && document.activeElement && -1 !== ["TEXTAREA", "INPUT"].indexOf(null === (s3 = document.activeElement) || void 0 === s3 ? void 0 : s3.nodeName)) return;
      const a2 = Math.abs(i3.dragOffset.y);
      "y" === i3.lockedAxis && (a2 >= 200 || a2 >= 50 && i3.dragOffset.time < 300) && (n3 && n3.cancelable && n3.preventDefault(), this.close(n3, "f-throwOut" + (i3.current.f < 0 ? "Up" : "Down")));
    })), s2.on("change", (t3) => {
      var e2;
      let i3 = null === (e2 = this.getSlide()) || void 0 === e2 ? void 0 : e2.triggerEl;
      if (i3) {
        const e3 = new CustomEvent("slideTo", { bubbles: true, cancelable: true, detail: t3.page });
        i3.dispatchEvent(e3);
      }
    }), s2.on(["refresh", "change"], (t3) => {
      const e2 = this.container;
      if (!e2) return;
      for (const i4 of e2.querySelectorAll("[data-fancybox-current-index]")) i4.innerHTML = t3.page + 1;
      for (const i4 of e2.querySelectorAll("[data-fancybox-count]")) i4.innerHTML = t3.pages.length;
      if (!t3.isInfinite) {
        for (const i4 of e2.querySelectorAll("[data-fancybox-next]")) t3.page < t3.pages.length - 1 ? (i4.removeAttribute(ue), i4.removeAttribute(pe)) : (i4.setAttribute(ue, ""), i4.setAttribute(pe, "-1"));
        for (const i4 of e2.querySelectorAll("[data-fancybox-prev]")) t3.page > 0 ? (i4.removeAttribute(ue), i4.removeAttribute(pe)) : (i4.setAttribute(ue, ""), i4.setAttribute(pe, "-1"));
      }
      const i3 = this.getSlide();
      if (!i3) return;
      let n3 = i3.downloadSrc || "";
      n3 || "image" !== i3.type || i3.error || !ve(i3[me]) || (n3 = i3[me]);
      for (const t4 of e2.querySelectorAll("[data-fancybox-download]")) {
        const e3 = i3.downloadFilename;
        n3 ? (t4.removeAttribute(ue), t4.removeAttribute(pe), t4.setAttribute(ge, n3), t4.setAttribute(fe, e3 || n3), t4.setAttribute("target", "_blank")) : (t4.setAttribute(ue, ""), t4.setAttribute(pe, "-1"), t4.removeAttribute(ge), t4.removeAttribute(fe));
      }
    }), this.emit("initCarousel");
  }
  attachEvents() {
    const t2 = this, e2 = t2.container;
    if (!e2) return;
    e2.addEventListener("click", t2.onClick, { passive: false, capture: false }), e2.addEventListener("wheel", t2.onWheel, { passive: false, capture: false }), document.addEventListener("keydown", t2.onKeydown, { passive: false, capture: true }), document.addEventListener("visibilitychange", t2.onVisibilityChange, false), document.addEventListener("mousemove", t2.onMousemove), t2.option("trapFocus") && document.addEventListener("focus", t2.onFocus, true), window.addEventListener("resize", t2.onResize);
    const i2 = window.visualViewport;
    i2 && (i2.addEventListener("scroll", t2.onResize), i2.addEventListener("resize", t2.onResize));
  }
  detachEvents() {
    const t2 = this, e2 = t2.container;
    if (!e2) return;
    document.removeEventListener("keydown", t2.onKeydown, { passive: false, capture: true }), e2.removeEventListener("wheel", t2.onWheel, { passive: false, capture: false }), e2.removeEventListener("click", t2.onClick, { passive: false, capture: false }), document.removeEventListener("mousemove", t2.onMousemove), window.removeEventListener("resize", t2.onResize);
    const i2 = window.visualViewport;
    i2 && (i2.removeEventListener("resize", t2.onResize), i2.removeEventListener("scroll", t2.onResize)), document.removeEventListener("visibilitychange", t2.onVisibilityChange, false), document.removeEventListener("focus", t2.onFocus, true);
  }
  scale() {
    const t2 = this.container;
    if (!t2) return;
    const e2 = window.visualViewport, i2 = Math.max(1, (null == e2 ? void 0 : e2.scale) || 1);
    let n2 = "", s2 = "", o2 = "";
    if (e2 && i2 > 1) {
      let t3 = `${e2.offsetLeft}px`, a2 = `${e2.offsetTop}px`;
      n2 = e2.width * i2 + "px", s2 = e2.height * i2 + "px", o2 = `translate3d(${t3}, ${a2}, 0) scale(${1 / i2})`;
    }
    t2.style.transform = o2, t2.style.width = n2, t2.style.height = s2;
  }
  onClick(t2) {
    var e2;
    const { container: i2, isCompact: n2 } = this;
    if (!i2 || this.isClosing()) return;
    !n2 && this.option("idle") && this.resetIdle();
    const s2 = t2.composedPath()[0];
    if (s2.closest(".fancybox-spinner") || s2.closest("[data-fancybox-close]")) return t2.preventDefault(), void this.close(t2);
    if (s2.closest("[data-fancybox-prev]")) return t2.preventDefault(), void this.prev();
    if (s2.closest("[data-fancybox-next]")) return t2.preventDefault(), void this.next();
    if ("click" === t2.type && 0 === t2.detail) return;
    if (Math.abs(t2.pageX - Ee) > 30 || Math.abs(t2.pageY - Se) > 30) return;
    const o2 = document.activeElement;
    if (be() && o2 && i2.contains(o2)) return;
    if (n2 && "image" === (null === (e2 = this.getSlide()) || void 0 === e2 ? void 0 : e2.type)) return void (this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null) : this.clickTimer = setTimeout(() => {
      this.toggleIdle(), this.clickTimer = null;
    }, 350));
    if (this.emit("click", t2), t2.defaultPrevented) return;
    let a2 = false;
    if (s2.closest(".fancybox__content")) {
      if (o2) {
        if (o2.closest("[contenteditable]")) return;
        s2.matches(nt) || o2.blur();
      }
      if (be()) return;
      a2 = this.option("contentClick");
    } else s2.closest(".fancybox__carousel") && !s2.matches(nt) && (a2 = this.option("backdropClick"));
    "close" === a2 ? (t2.preventDefault(), this.close(t2)) : "next" === a2 ? (t2.preventDefault(), this.next()) : "prev" === a2 && (t2.preventDefault(), this.prev());
  }
  onWheel(t2) {
    const e2 = t2.target;
    let n2 = this.option("wheel", t2);
    e2.closest(".fancybox__thumbs") && (n2 = "slide");
    const s2 = "slide" === n2, o2 = [-t2.deltaX || 0, -t2.deltaY || 0, -t2.detail || 0].reduce(function(t3, e3) {
      return Math.abs(e3) > Math.abs(t3) ? e3 : t3;
    }), a2 = Math.max(-1, Math.min(1, o2)), r2 = Date.now();
    this.pwt && r2 - this.pwt < 300 ? s2 && t2.preventDefault() : (this.pwt = r2, this.emit("wheel", t2, a2), t2.defaultPrevented || ("close" === n2 ? (t2.preventDefault(), this.close(t2)) : "slide" === n2 && (i(e2) || (t2.preventDefault(), this[a2 > 0 ? "prev" : "next"]()))));
  }
  onScroll() {
    window.scrollTo(Pe, Ce);
  }
  onKeydown(t2) {
    if (!this.isTopmost()) return;
    this.isCompact || !this.option("idle") || this.isClosing() || this.resetIdle();
    const e2 = t2.key, i2 = this.option("keyboard");
    if (!i2) return;
    const n2 = t2.composedPath()[0], s2 = document.activeElement && document.activeElement.classList, o2 = s2 && s2.contains("f-button") || n2.dataset.carouselPage || n2.dataset.carouselIndex;
    if ("Escape" !== e2 && !o2 && E(n2)) {
      if (n2.isContentEditable || -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(n2.nodeName)) return;
    }
    if ("Tab" === t2.key ? P(this.container, ae) : S(this.container, ae), t2.ctrlKey || t2.altKey || t2.shiftKey) return;
    this.emit("keydown", e2, t2);
    const a2 = i2[e2];
    a2 && "function" == typeof this[a2] && (t2.preventDefault(), this[a2]());
  }
  onResize() {
    const t2 = this.container;
    if (!t2) return;
    const e2 = this.isCompact;
    t2.classList.toggle(le, e2), this.manageCaption(this.getSlide()), this.isCompact ? this.clearIdle() : this.endIdle(), this.scale(), this.emit("resize");
  }
  onFocus(t2) {
    this.isTopmost() && this.checkFocus(t2);
  }
  onMousemove(t2) {
    this.prevMouseMoveEvent = t2, !this.isCompact && this.option("idle") && this.resetIdle();
  }
  onVisibilityChange() {
    "visible" === document.visibilityState ? this.checkFocus() : this.endIdle();
  }
  manageCloseBtn(t2) {
    const e2 = this.optionFor(t2, "closeButton") || false;
    if ("auto" === e2) {
      const t3 = this.plugins.Toolbar;
      if (t3 && t3.state === Zt.Ready) return;
    }
    if (!e2) return;
    if (!t2.contentEl || t2.closeBtnEl) return;
    const i2 = this.option("tpl.closeButton");
    if (i2) {
      const e3 = n(this.localize(i2));
      t2.closeBtnEl = t2.contentEl.appendChild(e3), t2.el && P(t2.el, "has-close-btn");
    }
  }
  manageCaption(t2 = void 0) {
    var e2, i2;
    const n2 = "fancybox__caption", s2 = this.container;
    if (!s2) return;
    S(s2, de);
    const o2 = this.isCompact || this.option("commonCaption"), a2 = !o2;
    if (this.caption && this.stop(this.caption), a2 && this.caption && (this.caption.remove(), this.caption = null), o2 && !this.caption) for (const t3 of (null === (e2 = this.carousel) || void 0 === e2 ? void 0 : e2.slides) || []) t3.captionEl && (t3.captionEl.remove(), t3.captionEl = void 0, S(t3.el, de), null === (i2 = t3.el) || void 0 === i2 || i2.removeAttribute("aria-labelledby"));
    if (t2 || (t2 = this.getSlide()), !t2 || o2 && !this.isCurrentSlide(t2)) return;
    const r2 = t2.el;
    let l2 = this.optionFor(t2, "caption", "");
    if (!l2) return void (o2 && this.caption && this.animate(this.caption, "f-fadeOut", () => {
      this.caption && (this.caption.innerHTML = "");
    }));
    let c2 = null;
    if (a2) {
      if (c2 = t2.captionEl || null, r2 && !c2) {
        const e3 = n2 + `_${this.id}_${t2.index}`;
        c2 = document.createElement("div"), P(c2, n2), c2.setAttribute("id", e3), t2.captionEl = r2.appendChild(c2), P(r2, de), r2.setAttribute("aria-labelledby", e3);
      }
    } else {
      if (c2 = this.caption, c2 || (c2 = s2.querySelector("." + n2)), !c2) {
        c2 = document.createElement("div"), c2.dataset.fancyboxCaption = "", P(c2, n2);
        (this.footer || s2).prepend(c2);
      }
      P(s2, de), this.caption = c2;
    }
    c2 && (c2.innerHTML = "", ve(l2) || "number" == typeof l2 ? c2.innerHTML = l2 + "" : l2 instanceof HTMLElement && c2.appendChild(l2));
  }
  checkFocus(t2) {
    this.focus(t2);
  }
  focus(t2) {
    var e2;
    if (this.ignoreFocusChange) return;
    const i2 = document.activeElement || null, n2 = (null == t2 ? void 0 : t2.target) || null, s2 = this.container, o2 = null === (e2 = this.carousel) || void 0 === e2 ? void 0 : e2.viewport;
    if (!s2 || !o2) return;
    if (!t2 && i2 && s2.contains(i2)) return;
    const a2 = this.getSlide(), r2 = a2 && a2.state === lt.Ready ? a2.el : null;
    if (!r2 || r2.contains(i2) || s2 === i2) return;
    t2 && t2.cancelable && t2.preventDefault(), this.ignoreFocusChange = true;
    const l2 = Array.from(s2.querySelectorAll(nt));
    let c2 = [], h2 = null;
    for (let t3 of l2) {
      const e3 = !t3.offsetParent || !!t3.closest('[aria-hidden="true"]'), i3 = r2 && r2.contains(t3), n3 = !o2.contains(t3);
      if (t3 === s2 || (i3 || n3) && !e3) {
        c2.push(t3);
        const e4 = t3.dataset.origTabindex;
        void 0 !== e4 && e4 && (t3.tabIndex = parseFloat(e4)), t3.removeAttribute("data-orig-tabindex"), !t3.hasAttribute("autoFocus") && h2 || (h2 = t3);
      } else {
        const e4 = void 0 === t3.dataset.origTabindex ? t3.getAttribute("tabindex") || "" : t3.dataset.origTabindex;
        e4 && (t3.dataset.origTabindex = e4), t3.tabIndex = -1;
      }
    }
    let d2 = null;
    t2 ? (!n2 || c2.indexOf(n2) < 0) && (d2 = h2 || s2, c2.length && (i2 === xe ? d2 = c2[0] : this.lastFocus !== s2 && i2 !== we || (d2 = c2[c2.length - 1]))) : d2 = a2 && "image" === a2.type ? s2 : h2 || s2, d2 && st(d2), this.lastFocus = document.activeElement, this.ignoreFocusChange = false;
  }
  next() {
    const t2 = this.carousel;
    t2 && t2.pages.length > 1 && t2.slideNext();
  }
  prev() {
    const t2 = this.carousel;
    t2 && t2.pages.length > 1 && t2.slidePrev();
  }
  jumpTo(...t2) {
    this.carousel && this.carousel.slideTo(...t2);
  }
  isTopmost() {
    var t2;
    return (null === (t2 = Oe.getInstance()) || void 0 === t2 ? void 0 : t2.id) == this.id;
  }
  animate(t2 = null, e2 = "", i2) {
    if (!t2 || !e2) return void (i2 && i2());
    this.stop(t2);
    const n2 = (s2) => {
      s2.target === t2 && t2.dataset.animationName && (t2.removeEventListener("animationend", n2), delete t2.dataset.animationName, i2 && i2(), S(t2, e2));
    };
    t2.dataset.animationName = e2, t2.addEventListener("animationend", n2), P(t2, e2);
  }
  stop(t2) {
    t2 && t2.dispatchEvent(new CustomEvent("animationend", { bubbles: false, cancelable: true, currentTarget: t2 }));
  }
  setContent(t2, e2 = "", i2 = true) {
    if (this.isClosing()) return;
    const s2 = t2.el;
    if (!s2) return;
    let o2 = null;
    if (E(e2) ? o2 = e2 : (o2 = n(e2 + ""), E(o2) || (o2 = document.createElement("div"), o2.innerHTML = e2 + "")), ["img", "picture", "iframe", "video", "audio"].includes(o2.nodeName.toLowerCase())) {
      const t3 = document.createElement("div");
      t3.appendChild(o2), o2 = t3;
    }
    E(o2) && t2.filter && !t2.error && (o2 = o2.querySelector(t2.filter)), o2 && E(o2) ? (P(o2, "fancybox__content"), t2.id && o2.setAttribute("id", t2.id), s2.classList.add(`has-${t2.error ? "error" : t2.type || "unknown"}`), s2.prepend(o2), "none" === o2.style.display && (o2.style.display = ""), "none" === getComputedStyle(o2).getPropertyValue("display") && (o2.style.display = t2.display || this.option("defaultDisplay") || "flex"), t2.contentEl = o2, i2 && this.revealContent(t2), this.manageCloseBtn(t2), this.manageCaption(t2)) : this.setError(t2, "{{ELEMENT_NOT_FOUND}}");
  }
  revealContent(t2, e2) {
    const i2 = t2.el, n2 = t2.contentEl;
    i2 && n2 && (this.emit("reveal", t2), this.hideLoading(t2), t2.state = lt.Opening, (e2 = this.isOpeningSlide(t2) ? void 0 === e2 ? this.optionFor(t2, "showClass") : e2 : "f-fadeIn") ? this.animate(n2, e2, () => {
      this.done(t2);
    }) : this.done(t2));
  }
  done(t2) {
    this.isClosing() || (t2.state = lt.Ready, this.emit("done", t2), P(t2.el, "is-done"), this.isCurrentSlide(t2) && this.option("autoFocus") && queueMicrotask(() => {
      var e2;
      null === (e2 = t2.panzoom) || void 0 === e2 || e2.updateControls(), this.option("autoFocus") && this.focus();
    }), this.isOpeningSlide(t2) && (S(this.container, he), !this.isCompact && this.option("idle") && this.setIdle()));
  }
  isCurrentSlide(t2) {
    const e2 = this.getSlide();
    return !(!t2 || !e2) && e2.index === t2.index;
  }
  isOpeningSlide(t2) {
    var e2, i2;
    return null === (null === (e2 = this.carousel) || void 0 === e2 ? void 0 : e2.prevPage) && t2 && t2.index === (null === (i2 = this.getSlide()) || void 0 === i2 ? void 0 : i2.index);
  }
  showLoading(t2) {
    t2.state = lt.Loading;
    const e2 = t2.el;
    if (!e2) return;
    P(e2, ce), this.emit("loading", t2), t2.spinnerEl || setTimeout(() => {
      if (!this.isClosing() && !t2.spinnerEl && t2.state === lt.Loading) {
        let i2 = n(x);
        P(i2, "fancybox-spinner"), t2.spinnerEl = i2, e2.prepend(i2), this.animate(i2, "f-fadeIn");
      }
    }, 250);
  }
  hideLoading(t2) {
    const e2 = t2.el;
    if (!e2) return;
    const i2 = t2.spinnerEl;
    this.isClosing() ? null == i2 || i2.remove() : (S(e2, ce), i2 && this.animate(i2, "f-fadeOut", () => {
      i2.remove();
    }), t2.state === lt.Loading && (this.emit("loaded", t2), t2.state = lt.Ready));
  }
  setError(t2, e2) {
    if (this.isClosing()) return;
    const i2 = new Event("error", { bubbles: true, cancelable: true });
    if (this.emit("error", i2, t2), i2.defaultPrevented) return;
    t2.error = e2, this.hideLoading(t2), this.clearContent(t2);
    const n2 = document.createElement("div");
    n2.classList.add("fancybox-error"), n2.innerHTML = this.localize(e2 || "<p>{{ERROR}}</p>"), this.setContent(t2, n2);
  }
  clearContent(t2) {
    if (void 0 === t2.state) return;
    this.emit("clearContent", t2), t2.contentEl && (t2.contentEl.remove(), t2.contentEl = void 0);
    const e2 = t2.el;
    e2 && (S(e2, "has-error"), S(e2, "has-unknown"), S(e2, `has-${t2.type || "unknown"}`)), t2.closeBtnEl && t2.closeBtnEl.remove(), t2.closeBtnEl = void 0, t2.captionEl && t2.captionEl.remove(), t2.captionEl = void 0, t2.spinnerEl && t2.spinnerEl.remove(), t2.spinnerEl = void 0;
  }
  getSlide() {
    var t2;
    const e2 = this.carousel;
    return (null === (t2 = null == e2 ? void 0 : e2.pages[null == e2 ? void 0 : e2.page]) || void 0 === t2 ? void 0 : t2.slides[0]) || void 0;
  }
  close(t2, e2) {
    if (this.isClosing()) return;
    const i2 = new Event("shouldClose", { bubbles: true, cancelable: true });
    if (this.emit("shouldClose", i2, t2), i2.defaultPrevented) return;
    t2 && t2.cancelable && (t2.preventDefault(), t2.stopPropagation());
    const n2 = () => {
      this.proceedClose(t2, e2);
    };
    this.startedFs && ye && ye.isFullscreen() ? Promise.resolve(ye.exit()).then(() => n2()) : n2();
  }
  clearIdle() {
    this.idleTimer && clearTimeout(this.idleTimer), this.idleTimer = null;
  }
  setIdle(t2 = false) {
    const e2 = () => {
      this.clearIdle(), this.idle = true, P(this.container, "is-idle"), this.emit("setIdle");
    };
    if (this.clearIdle(), !this.isClosing()) if (t2) e2();
    else {
      const t3 = this.option("idle");
      t3 && (this.idleTimer = setTimeout(e2, t3));
    }
  }
  endIdle() {
    this.clearIdle(), this.idle && !this.isClosing() && (this.idle = false, S(this.container, "is-idle"), this.emit("endIdle"));
  }
  resetIdle() {
    this.endIdle(), this.setIdle();
  }
  toggleIdle() {
    this.idle ? this.endIdle() : this.setIdle(true);
  }
  toggleFullscreen() {
    ye && (ye.isFullscreen() ? ye.exit() : ye.request().then(() => {
      this.startedFs = true;
    }));
  }
  isClosing() {
    return [rt.Closing, rt.CustomClosing, rt.Destroy].includes(this.state);
  }
  proceedClose(t2, e2) {
    var i2, n2;
    this.state = rt.Closing, this.clearIdle(), this.detachEvents();
    const s2 = this.container, o2 = this.carousel, a2 = this.getSlide(), r2 = a2 && this.option("placeFocusBack") ? a2.triggerEl || this.option("triggerEl") : null;
    if (r2 && (tt(r2) ? st(r2) : r2.focus()), s2 && (S(s2, he), P(s2, "is-closing"), s2.setAttribute(oe, "true"), this.option("animated") && P(s2, re), s2.style.pointerEvents = "none"), o2) {
      o2.clearTransitions(), null === (i2 = o2.panzoom) || void 0 === i2 || i2.destroy(), null === (n2 = o2.plugins.Navigation) || void 0 === n2 || n2.detach();
      for (const t3 of o2.slides) {
        t3.state = lt.Closing, this.hideLoading(t3);
        const e3 = t3.contentEl;
        e3 && this.stop(e3);
        const i3 = null == t3 ? void 0 : t3.panzoom;
        i3 && (i3.stop(), i3.detachEvents(), i3.detachObserver()), this.isCurrentSlide(t3) || o2.emit("removeSlide", t3);
      }
    }
    Pe = window.scrollX, Ce = window.scrollY, window.addEventListener("scroll", this.onScroll), this.emit("close", t2), this.state !== rt.CustomClosing ? (void 0 === e2 && a2 && (e2 = this.optionFor(a2, "hideClass")), e2 && a2 ? (this.animate(a2.contentEl, e2, () => {
      o2 && o2.emit("removeSlide", a2);
    }), setTimeout(() => {
      this.destroy();
    }, 500)) : this.destroy()) : setTimeout(() => {
      this.destroy();
    }, 500);
  }
  destroy() {
    var t2;
    if (this.state === rt.Destroy) return;
    window.removeEventListener("scroll", this.onScroll), this.state = rt.Destroy, null === (t2 = this.carousel) || void 0 === t2 || t2.destroy();
    const e2 = this.container;
    e2 && e2.remove(), Te.delete(this.id);
    const i2 = Oe.getInstance();
    i2 ? i2.focus() : (we && (we.remove(), we = null), xe && (xe.remove(), xe = null), S(document.documentElement, ee), (() => {
      if (!et) return;
      const t3 = document, e3 = t3.body;
      e3.classList.remove(ie), e3.style.setProperty(se, ""), t3.documentElement.style.setProperty(ne, "");
    })(), this.emit("destroy"));
  }
  static bind(t2, e2, i2) {
    if (!et) return;
    let n2, s2 = "", o2 = {};
    if (void 0 === t2 ? n2 = document.body : ve(t2) ? (n2 = document.body, s2 = t2, "object" == typeof e2 && (o2 = e2 || {})) : (n2 = t2, ve(e2) && (s2 = e2), "object" == typeof i2 && (o2 = i2 || {})), !n2 || !E(n2)) return;
    s2 = s2 || "[data-fancybox]";
    const a2 = Oe.openers.get(n2) || /* @__PURE__ */ new Map();
    a2.set(s2, o2), Oe.openers.set(n2, a2), 1 === a2.size && n2.addEventListener("click", Oe.fromEvent);
  }
  static unbind(t2, e2) {
    let i2, n2 = "";
    if (ve(t2) ? (i2 = document.body, n2 = t2) : (i2 = t2, ve(e2) && (n2 = e2)), !i2) return;
    const s2 = Oe.openers.get(i2);
    s2 && n2 && s2.delete(n2), n2 && s2 || (Oe.openers.delete(i2), i2.removeEventListener("click", Oe.fromEvent));
  }
  static destroy() {
    let t2;
    for (; t2 = Oe.getInstance(); ) t2.destroy();
    for (const t3 of Oe.openers.keys()) t3.removeEventListener("click", Oe.fromEvent);
    Oe.openers = /* @__PURE__ */ new Map();
  }
  static fromEvent(t2) {
    if (t2.defaultPrevented) return;
    if (t2.button && 0 !== t2.button) return;
    if (t2.ctrlKey || t2.metaKey || t2.shiftKey) return;
    let e2 = t2.composedPath()[0];
    const i2 = e2.closest("[data-fancybox-trigger]");
    if (i2) {
      const t3 = i2.dataset.fancyboxTrigger || "", n3 = document.querySelectorAll(`[data-fancybox="${t3}"]`), s3 = parseInt(i2.dataset.fancyboxIndex || "", 10) || 0;
      e2 = n3[s3] || e2;
    }
    if (!(e2 && e2 instanceof Element)) return;
    let n2, s2, o2, a2;
    if ([...Oe.openers].reverse().find(([t3, i3]) => !(!t3.contains(e2) || ![...i3].reverse().find(([i4, r3]) => {
      let l3 = e2.closest(i4);
      return !!l3 && (n2 = t3, s2 = i4, o2 = l3, a2 = r3, true);
    }))), !n2 || !s2 || !o2) return;
    a2 = a2 || {}, t2.preventDefault(), e2 = o2;
    let r2 = [], l2 = u({}, at, a2);
    l2.event = t2, l2.triggerEl = e2, l2.delegate = i2;
    const c2 = l2.groupAll, h2 = l2.groupAttr, d2 = h2 && e2 ? e2.getAttribute(`${h2}`) : "";
    if ((!e2 || d2 || c2) && (r2 = [].slice.call(n2.querySelectorAll(s2))), e2 && !c2 && (r2 = d2 ? r2.filter((t3) => t3.getAttribute(`${h2}`) === d2) : [e2]), !r2.length) return;
    const p2 = Oe.getInstance();
    return p2 && p2.options.triggerEl && r2.indexOf(p2.options.triggerEl) > -1 ? void 0 : (e2 && (l2.startIndex = r2.indexOf(e2)), Oe.fromNodes(r2, l2));
  }
  static fromSelector(t2, e2, i2) {
    let n2 = null, s2 = "", o2 = {};
    if (ve(t2) ? (n2 = document.body, s2 = t2, "object" == typeof e2 && (o2 = e2 || {})) : t2 instanceof HTMLElement && ve(e2) && (n2 = t2, s2 = e2, "object" == typeof i2 && (o2 = i2 || {})), !n2 || !s2) return false;
    const a2 = Oe.openers.get(n2);
    return !!a2 && (o2 = u({}, a2.get(s2) || {}, o2), !!o2 && Oe.fromNodes(Array.from(n2.querySelectorAll(s2)), o2));
  }
  static fromNodes(t2, e2) {
    e2 = u({}, at, e2 || {});
    const i2 = [];
    for (const n2 of t2) {
      const t3 = n2.dataset || {}, s2 = t3[me] || n2.getAttribute(ge) || n2.getAttribute("currentSrc") || n2.getAttribute(me) || void 0;
      let o2;
      const a2 = e2.delegate;
      let r2;
      a2 && i2.length === e2.startIndex && (o2 = a2 instanceof HTMLImageElement ? a2 : a2.querySelector("img:not([aria-hidden])")), o2 || (o2 = n2 instanceof HTMLImageElement ? n2 : n2.querySelector("img:not([aria-hidden])")), o2 && (r2 = o2.currentSrc || o2[me] || void 0, !r2 && o2.dataset && (r2 = o2.dataset.lazySrc || o2.dataset[me] || void 0));
      const l2 = { src: s2, triggerEl: n2, thumbEl: o2, thumbElSrc: r2, thumbSrc: r2 };
      for (const e3 in t3) {
        let i3 = t3[e3] + "";
        i3 = "false" !== i3 && ("true" === i3 || i3), l2[e3] = i3;
      }
      i2.push(l2);
    }
    return new Oe(i2, e2);
  }
  static getInstance(t2) {
    if (t2) return Te.get(t2);
    return Array.from(Te.values()).reverse().find((t3) => !t3.isClosing() && t3) || null;
  }
  static getSlide() {
    var t2;
    return (null === (t2 = Oe.getInstance()) || void 0 === t2 ? void 0 : t2.getSlide()) || null;
  }
  static show(t2 = [], e2 = {}) {
    return new Oe(t2, e2);
  }
  static next() {
    const t2 = Oe.getInstance();
    t2 && t2.next();
  }
  static prev() {
    const t2 = Oe.getInstance();
    t2 && t2.prev();
  }
  static close(t2 = true, ...e2) {
    if (t2) for (const t3 of Te.values()) t3.close(...e2);
    else {
      const t3 = Oe.getInstance();
      t3 && t3.close(...e2);
    }
  }
}
Object.defineProperty(Oe, "version", { enumerable: true, configurable: true, writable: true, value: "5.0.36" }), Object.defineProperty(Oe, "defaults", { enumerable: true, configurable: true, writable: true, value: at }), Object.defineProperty(Oe, "Plugins", { enumerable: true, configurable: true, writable: true, value: te }), Object.defineProperty(Oe, "openers", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Map() });
function Fancybox(props) {
  const containerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const container = containerRef.current;
    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};
    Oe.bind(container, delegate, options);
    return () => {
      Oe.unbind(container);
      Oe.close();
    };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, className: props.styles, children: props.children });
}
const products__text = "_products__text_1ke95_1";
const products = "_products_1ke95_1";
const products__title = "_products__title_1ke95_35";
const products__items = "_products__items_1ke95_54";
const products__item = "_products__item_1ke95_54";
const products__types = "_products__types_1ke95_134";
const active = "_active_1ke95_198";
const oneRow = "_oneRow_1ke95_207";
const visible$5 = "_visible_1ke95_215";
const styles$d = {
  products__text,
  products,
  products__title,
  products__items,
  products__item,
  "products__item-img": "_products__item-img_1ke95_114",
  products__types,
  "products__types-btn": "_products__types-btn_1ke95_152",
  active,
  oneRow,
  visible: visible$5,
  "products__item-text": "_products__item-text_1ke95_225",
  "products__item-link": "_products__item-link_1ke95_244"
};
const SvgFullscreenIcon = (props) => /* @__PURE__ */ reactExports.createElement("svg", { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ reactExports.createElement("g", { fill: "#78b9eb" }, /* @__PURE__ */ reactExports.createElement("path", { d: "m312.699219 29.5 53.101562 53.097656-84.898437 84.902344 63.597656 63.601562 84.902344-84.902343 53.097656 53.101562 29.5-199.300781zm0 0", fill: "#78b9eb", style: {
  fill: "rgb(33, 178, 36)"
} }), /* @__PURE__ */ reactExports.createElement("path", { d: "m231.097656 344.5-31.796875-31.800781-31.800781-31.800781-84.902344 84.902343-53.097656-53.101562-29.5 199.300781 199.300781-29.5-53.101562-53.101562zm0 0", fill: "#78b9eb", style: {
  fill: "rgb(33, 178, 36)"
} }), /* @__PURE__ */ reactExports.createElement("path", { d: "m146.199219 82.597656 53.101562-53.097656-199.300781-29.5 29.5 199.300781 53.097656-53.101562 84.902344 84.902343 63.601562-63.601562zm0 0", fill: "#78b9eb", style: {
  fill: "rgb(33, 178, 36)"
} }), /* @__PURE__ */ reactExports.createElement("path", { d: "m512 512-29.5-199.300781-53.097656 53.101562-84.902344-84.902343-63.601562 63.601562 84.902343 84.898438-53.101562 53.101562zm0 0", fill: "#78b9eb", style: {
  fill: "rgb(33, 178, 36)"
} })), /* @__PURE__ */ reactExports.createElement("path", { d: "m231.097656 344.5-84.898437 84.898438 53.101562 53.101562-199.300781 29.5 199.300781-199.300781zm0 0", fill: "#43a2dd", style: {
  fill: "rgb(33, 178, 36)"
} }), /* @__PURE__ */ reactExports.createElement("path", { d: "m512 0-29.5 199.300781-53.097656-53.101562-84.902344 84.898437-31.800781-31.796875zm0 0", fill: "#43a2dd", style: {
  fill: "rgb(33, 178, 36)"
} }), /* @__PURE__ */ reactExports.createElement("path", { d: "m0 0 199.300781 199.300781-31.800781 31.796875-84.902344-84.898437-53.097656 53.101562zm0 0", fill: "#43a2dd", style: {
  fill: "rgb(33, 178, 36)"
} }), /* @__PURE__ */ reactExports.createElement("path", { d: "m312.699219 482.5 53.101562-53.101562-84.898437-84.898438 31.796875-31.800781 199.300781 199.300781zm0 0", fill: "#43a2dd", style: {
  fill: "rgb(33, 178, 36)"
} }));
const bathCurtainImg = "/Shower-Partitions-APP/assets/%D0%A8%D1%82%D0%BE%D1%80%D0%BA%D0%B0%20%D0%B2%20%D0%B2%D0%B0%D0%BD%D0%BD%D1%83%D1%8E-DmVn0ks_.webp";
const bathCurtainPopupImg = "/Shower-Partitions-APP/assets/%D0%A8%D1%82%D0%BE%D1%80%D0%BA%D0%B0%20%D0%B2%20%D0%B2%D0%B0%D0%BD%D0%BD%D1%83%D1%8E%20popup-BJmSSSeY.webp";
const showerPartitionImg = "/Shower-Partitions-APP/assets/%D0%94%D1%83%D1%88%D0%B5%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BA%D0%B0-DCOifbOy.webp";
const showerPartitionPopupImg = "/Shower-Partitions-APP/assets/%D0%94%D1%83%D1%88%D0%B5%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BA%D0%B0%20popup-Dt9saEKp.webp";
const alcoveDoorImg = "/Shower-Partitions-APP/assets/%D0%94%D0%B2%D0%B5%D1%80%D1%8C%20%D0%B2%20%D0%BD%D0%B8%D1%88%D1%83-Csv0iTbh.webp";
const alcoveDoorPopupImg = "/Shower-Partitions-APP/assets/%D0%94%D0%B2%D0%B5%D1%80%D1%8C%20%D0%B2%20%D0%BD%D0%B8%D1%88%D1%83%20popup-D7J-C2qH.webp";
const alcoveShowerImg = "/Shower-Partitions-APP/assets/%D0%94%D1%83%D1%88%D0%B5%D0%B2%D0%B0%D1%8F%20%D0%B2%20%D0%BD%D0%B8%D1%88%D1%83-CDkK7fqw.webp";
const alcoveShowerPopupImg = "/Shower-Partitions-APP/assets/%D0%94%D1%83%D1%88%D0%B5%D0%B2%D0%B0%D1%8F%20%D0%B2%20%D0%BD%D0%B8%D1%88%D1%83%20popup-BvBcBWnQ.webp";
const cornerShowerImg = "/Shower-Partitions-APP/assets/%D0%A3%D0%B3%D0%BB%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%B4%D1%83%D1%88%D0%B5%D0%B2%D0%B0%D1%8F-BC2lkH6a.webp";
const cornerShowerPopupImg = "/Shower-Partitions-APP/assets/%D0%A3%D0%B3%D0%BB%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%B4%D1%83%D1%88%D0%B5%D0%B2%D0%B0%D1%8F%20popup-CbF8Jrob.webp";
const trapezoidalShowerImg = "/Shower-Partitions-APP/assets/%D0%A2%D1%80%D0%B0%D0%BF%D0%B5%D1%86%D0%B8%D0%B5%D0%B2%D0%B8%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B4%D1%83%D1%88%D0%B5%D0%B2%D0%B0%D1%8F-wZ3UNE1I.webp";
const trapezoidalShowerPopupImg = "/Shower-Partitions-APP/assets/%D0%A2%D1%80%D0%B0%D0%BF%D0%B5%D1%86%D0%B8%D0%B5%D0%B2%D0%B8%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B4%D1%83%D1%88%D0%B5%D0%B2%D0%B0%D1%8F%20popup-DJsvemcW.webp";
const showerCabinImg = "/Shower-Partitions-APP/assets/%D0%94%D1%83%D1%88%D0%B5%D0%B2%D0%B0%D1%8F%20%D0%BA%D0%B0%D0%B1%D0%B8%D0%BD%D0%B0-CgxQvboy.webp";
const showerCabinPopupImg = "/Shower-Partitions-APP/assets/%D0%94%D1%83%D1%88%D0%B5%D0%B2%D0%B0%D1%8F%20%D0%BA%D0%B0%D0%B1%D0%B8%D0%BD%D0%B0%20popup-CX5h2ASh.webp";
const transparentGlassImg = "/Shower-Partitions-APP/assets/%D0%B1%D0%B5%D1%81%D1%86%D0%B2%D0%B5%D1%82%D0%BD%D0%BE%D0%B5%20%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%BE-Dfuxt_8o.webp";
const transparentGlassPopupImg = "/Shower-Partitions-APP/assets/%D0%B1%D0%B5%D1%81%D1%86%D0%B2%D0%B5%D1%82%D0%BD%D0%BE%D0%B5%20%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%BE%20popup-D26ftYR3.webp";
const brightenedGlassImg = "/Shower-Partitions-APP/assets/%D0%BE%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5%20%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%BE-CETg4_Ac.webp";
const brightenedGlassPopupImg = "/Shower-Partitions-APP/assets/%D0%BE%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5%20%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%BE%20popup-DzHneHU9.webp";
const frostedGlassImg = "data:image/webp;base64,UklGRqYOAABXRUJQVlA4IJoOAACwhACdASpYApABPpFInkylp60oIbG4kaASCWdu4TlZY8UE/N4kVakzGdDa+TzkZtYCL7Xp83GnPP+kb/K+oB0pHoAeXL7Qf7kZVjmt2JdfdAQmTYjzmre2PCegegqr+qfFCzYegql1U+KFmwl7tozKOC0tLMnmoGZBj4oVw01jQ3YMPs6FC8TXUyjBhNqp8YDWLCp4VdHx7mYs/tPsSdRuCWsZhMYZgZxpwZUud3EODiA44ULPR10/WC9Pi/uY1hdPInfMViTzV7AB6Hk7jF5ALQNiF/FEs55FE/xUDYegxFTW5UmndJGTiktkQa9RdeEk9fVT5kioKMTCzaR8JhGoMp7PEq7BnwidEKHTeadkQItdi6ps4EkTYdfQEsYmOowmEbHbY313zXNwVQbFnQ/FEcICrypBt+9i7hLa7LH7UuAn/79k0ScdsljShFG8++8O4VCSGcIwDgt+efVyq3+6Te7Tuqk2xA6OoO81bj0pfuZvTWC+GBc5CEi7udqm/n/sDEB8F6Ec56lRJbO0BCpvw+AXsvPIQZ2PEXL7ArG871mXvqcmL73TQwXw1W2Xp/r39m2sfL2/39Vtq3i0MFb03Jenvf7doE2NYigaGcUDe4+TUXQ4nkT6l6c4edaWVMX4H4LZKALIRWoJhG9wAcOuMCSlKcO0+YpArc8LdErGVcKOC0/uUplKTu8Zk0cgF4SgahK8AsYFqFJvjHqHgLRbF7+hKh/aYMGJm8iec4aLj1IMWFeKUM7RsdzzyY4uWdrzaRxVcYSzdZVdpTQNhTBT8E+i/b0uAvec8QzlWfetYdLYNvD7mlJCMNuHDyvvqVy+oBTx796MB++5jza0PSca0yE16+EaXBIQBl8cGyFXLvRyFqJBsequCzMw2spslQhU9SBo/s8phTap2qJXkqAcq9W+vOkf8VlBFXshv/hFG6o99IcPjq4ug7tsO30UETwpeWqQp7VxggrAafzKJEq11vZLfOY+Xy8T51CJQyA+NCS0g8LKBZJKY3Q02T7LX1CkcaSDAXV9Vzdt0PyvfTWciqj7CdS9DrXPV+Y4f4gF0/oby76V+j7XQdM+2KPusolHXrwMo+tejdi+cOMgnxK0ffL20T6nAOTzWKjJxabBgjoYb7OZMbAZZxdQR4nWN271uLZpVqNu4GqWBWolNveEnQEYJKvtBqZzBO+sHoZW4gkOBBgX+k72p2Y3UZqZAaIc96NWu0YlpUGG143Yq4UU5uocp8BlUNf/WRS6nSl+woNs2kTr2ko7tRMs1+HR8KahOS3fWaPVpiGC0RzZpLOaanhRgMmqdP3BPr6F3CWEFbOCTh8eD4cfoYD8s3++IBnjmT77eo0kmvZQgGZ8hdAPRZZUDF+LRO6f+CH/BkPK2g4Hc36q9BqaSdLVe5Vl5Nn4LXJf/X5KPx37bQvMAAD+37ro5PCkmm088ru/aVeva850kCaYUEx++YjNhWGYGoejftX4LTwAF3EHAN0DfPgziVEwCfIASwABVc68oz1kOkDVspagCjvf3JNSWcBrpXjn7c7MZPP7+IAOJRBeD/GiEerTcmYbAicSZhCG1B5X9EYjKE8BASviPWP2QnqOgYITB8oJ3b1OHBlwm4r0EQRCAxpjg7PVABj0vhTA+dHKiSb0o8Uj2RuoxoNodGhwABdfXs4ZKdecJm/k50z3FOskcYB/w2jBS5/JH0NyOc6qYbE8mO3Xz3uEz/hkNKRAIM5D+Fk7pqhazGRzGmwskKfS7azLDAV/m7LC3xb9zmWr7b6iyoX7jXlZX4fI/hrhiq5NoQoxJd6pIbAK61PID8JRzMZSoyZFi63bvKb3Jg7h3VeK9eLveHze4+MWwQJrQD+j7tdUCyJuBtZ8aAKo5Uu5738UQPiuBOVm/+rEGPqCWiL3xWdxt6rB2GoEGt0B6puGo1ewH/q3AmyBx4JLhzrHO3d3ChqmFPrzub5X7AYrapisbSxK50+dc8S36vF6ivfMRA14HSGRmV6S1+IjjZHEPAtnkpH3z3v0erw8fPOM/SWuDCGPFXqCDha+DW7v3cIjPvWg85iusghK6wB+1K4O/2uK14+dHvhFWm12ofwZD/gZXRtGe36PprjJxDkdlBqp5uogK//7/4/T4oxQJ+tKtQnfbjWFjB4+QyKCvr0DGknTiqXzxPAdJ8Ri1LOBqrDzJK5Lk1n/gZ6rldxjmL0i0eC/pKbZLR9DI2mtCBZUJ3FzT+SjI0QyeH3UONFrEc0ggpdOtJOQZdVsYCMjs+P+WLcsILZxcnfMHpGmqZD/EFp/2pjIzs/ai+jsFgASw83ol96EaVvurxvkxq1Q1ZoXfDOnN4ro7tN+TH10o5D04jgIk+7ORZxr4S5CPGJ+edCH9XX6ynhfRtZJM8Xd54/CS8MZnhKOpLgpcVYwOIK8acTBFk8+QvLnoKhEdjXZD3GTXD/lrc6B5bm7560Sca43UUNnm5a332ORuv+o50pLSRzinxoHk3KeYoGwxWox3+NMM86O005jHsoGdZqymJrYPu2sOhqdX3bG/toa2VWnb+QbzpDZOLWCziMJxyTRryau/SdGeCWD/MPDdLFNfceAOvfV2v7XWncQ/qWLxEjUodLg1awH9FYXniXxKNl7npcWEL2UkoXgvLYH18CQrso5sLgE7/U6U1jqP8Lo1DBMQ9Q0j3fIQuWINozlEWCOU/1rSiZVMfN2C2B9ijGG6DwHUkwz6vunauPGTIwb+ErhsfIPDz6hJCJ6JkKz/Q020V4bUufG4vRmJNS+xN0TSfjemtqdgDKDUswLFxcohPoVTLFhVVPtIuE3Hj1sulCOK+HyVkPWS7ThNHzAr/hcuOEfd6I4OVTf+RzNKrDfLqY+nUyD6Hf0AeRm24NckX4b3yzWT7Hm/UkaptxFJbnVBM9+6Dug2PwWqlkmH9ZAoQZrIkv1yuhlbJyoNr7/rma3mYlPsMrKjfuPHt0dNAD/A87HkzdGrdRaUBP0z8VwE5Oq8RDsqz6zC3u0i7lhSEFwmE2tcWHu/YEAtH5ExDUuyAsPIiBtpSh1+qAKfdGHbccb4NTn2LAoO8wZWuisA6JFR3F8WzMXPn8j8LBsS3q8YZ5RTitelqPr0RJKm16vkNqGLtcbHTBemhuI9IYC2bqeEo6d8dnLTD6hHAvF0ojOfyhhbSgwl5oNn8IDNDZh+mB7U1upkRIHTGhEkahUl5GxzCOnQoYGNLsXVpQGYRaFKUumU1wjE5LBhedL/SFjQi2n4sNpZH4oVIfr7BsvkAIHRlT6F5nTft1/37M0alGZwf4Y+88MazieSQaUK8xDMoeKh7WwtY6Fw8dh2cqNAfwAd2jbbRpvAX577nrgQMi8eiRv5KRkYiAScuNy8RwgJXGsGREgnMgyXsiuVRAoLZeBX7b3+API3LaquDAnnqv73/PDm7y+T2qSD/BROoEVasQprQC4K0p/scH4hky6jurT/j0jJ+y6ylIUMa/2eVFI4wHm+Qe9ETXTcjFsAFP2tImGdEBoR4eDw298M699iDA6SUasgw24Jl8RC6/aemCfllnSC//K7eYT1FoC2ecIPiNgP8TZVEbNwsT4sVqjZuUEZ9JZhylyc2xY82n1qZ9PGRtv0+ka7+y/SVLX9JhqZ1GYzHJhn4rx2kKPZ8w1lUxHQOIYy9cb55FovXn39Vl32TY5hr8RBXtz/GeJZMa+mc6IPYEOQxwHDCMq65JX01bqorpDCLkzibH2t2nOHXT8oivjJbJkUUUau6tyhFBUMNuvHzcZuDcS+paoizkBMXwQuEfT6h0OYbDiOjsEpQ5JnfNjLtU9EFaZljFMIQWTaaYtoggjKTQhv7oKQXIrpDjPwR+4YfO3diTvRc7syuGeWf00agOsc6EK+fnKFxTgUvQmt1TN0FuctkWaEYw0fiY89qVs9walmD5PpG1/9unTknLUgP/n0BqBpEtdikP/M3pyBClvoiiENFiDEu8Vq0pDM6hpEmWdZ9Ou4rPvB1/7XKtwW6mHkIPgw93tjM9GXAO3BSKAFQAwZA0ow51SG4atzFJ0f6AoTGnXFBvGXIaYLzo74nag/h+5T72ze7pdSmYJXZSggPOt7sRowNFfMtRNWMj2CR3Ks9QyLF5ggwUjJ6dB6JrPyYMVFPrekpSDe23Euaaf8ktLa+3i9GU0MiYm9+H1SEqYtYJMo8+T4yKqCxgcASkVxgA1gLlhELB7Vv3+RHfxZqKbvJUXzMniQIz1SoSPF9octO38bjIBWxDb617IK2tIjSTZdfsfNM4ltCMHLdRGXX/oPuUnglnU9+vS/YMQ0FZ5DCe9FRWvn5f+Kx0pqVIaJzSJst/ypgWaSKHukj/+7OhFxLLuBINeQpRoLiOiCtspE2pK0r4uo521Y7GdW9rCUsOKwo6+rc3LuxWSJ610wF4DBRJz1iCjj4+VgYiTsuR8IYkl1Ie/Pg+P8603WGs4MDGC6kUZKhsYHm8I3FQB7QDrQAqgMhnWApNCyiYwOrRCc9+OU78sW7IMuKNKSjPTN9IuTNt7mmsRBoqAOwAskCdcODHMiovEowNFBoty/UtcRVrruep/jXCTg5e17C8PHUyq6dnKcadwng5ErbrvX3F64x8jle9KsHvY6KsqQKQ3TujkBpj39BZNgkbZU7HDYwD1imNY91vdg3XxeAwRfArup5J1CsrSfdHCXkUg3OvqjymY1HNsxhA2Me7MOLduVUooIhuoyVK9arFlH/wharuEdw/GcThLnTlxn5ICReUWt/uIYr8dcxuh0F4hgrsba+SrJqYg9T+XkjhQD8BXleTJiurl0TR8usA/munpd3IxmCnmOdxwW5v8O9ITXZcTNXHd6fCctOFGRvxdw9AFRLBY2oFTWS518muP3v2MfFMVUzuW8iXzdAUrsTkeXB4QoiK4owVZSsiMLhVTRugeDsTOu4WHn1RfrYQObmVNApRV8gYT/XyhFFfcDN2WuWo6XyFu1GOYpTa/SY0rG8tKXBSB8gYAAAA=";
const frostedGlassPopupImg = "/Shower-Partitions-APP/assets/%D0%BC%D0%B0%D1%82%D0%BE%D0%B2%D0%BE%D0%B5%20%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%BE%20popup-D0lDzp8j.webp";
const tonedBronzeGlassImg = "/Shower-Partitions-APP/assets/%D1%82%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE%D0%B5%20%D0%B1%D1%80%D0%BE%D0%BD%D0%B7%D0%BE%D0%B2%D0%BE%D0%B5%20%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%BE-ipHOyTn1.webp";
const tonedBronzeGlassPopupImg = "/Shower-Partitions-APP/assets/%D1%82%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE%D0%B5%20%D0%B1%D1%80%D0%BE%D0%BD%D0%B7%D0%BE%D0%B2%D0%BE%D0%B5%20%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%BE%20popup-KqLRt0BO.webp";
const tonedGraphiteGlassImg = "data:image/webp;base64,UklGRlgOAABXRUJQVlA4IEwOAADwfgCdASpYApABPpFIoUwlpKqoIRYY2VASCWdu+wtbtT5vC6JcjzbdT2iA0yB3aAOsPt7DL+Yrzjv8h6wPQA/qvUneir+wHpt+0PkYH0PuoayLX3QHJi4HO+itCPlwZssFp3AobJF6yChskXrIKUwBRRMXk4KvAtcUXN+ibJF6yCh+49eDIuEsYxKgOCZiD1UUbbynKaYfMQ1Lro04tq94Q2LShwsAYTuUqRdQ4BE3T5gLg0L8+/rQJWopEeZVD9ENDkPcrtF3M1xLHKBpKgQ0eo+m+wrP9QIxrlIL3gLwAMIV/lS3XaBETXu5P8hjmMROMM2SUTZ+MKBkWSOEm5SVcaUhhriRY6K4N9HLAshj40vjeCwIUF8y4w2aLAbywH/b2wlZnMPDqDtKGhjYIyWx1ikpllW1i/9GUPxzMX/NvfScOa9vO+basGNFoXlyh/U783B42dFUNw9Pd5qKDDjyMwArtJ/9/PTaw4TH1NGnxAEGv8fqYxFhcSBgT952clngDSP95/U5LXc8yXOUn4PWBZ3fEObvOw0YZd2d8OrjNUKVOQ38Qms/c9dV9uAZPLu6jn1gutzJj5l4AqRTK3xDkCAeALIh894XpGoeUmjQMTVeMJLQLxEVNZr9b4hzAPmClqiYUcLpqjWDlsPJySbjaims8Qy518fVrKiByOTLQEriIB1726yBjKh72fU5z09sUqdSg74hLxWoy2iIwPgEkKbq9ZxHTnlhBcD75NckVC8z8Puc0Kv/51RNf3iqGp2KGuY/AJ/GUeLmOKnp6yNnPX+TMAVJDaw7grEVeeFBTa1z3oUH/G1dyHBDcGGt0oq2XqxLSJpiH2UWj7Jy6CQUZ7zfLbmldLbHsHoyOqNb3gNVPylb9UbXh1NLPx6tcq6hMxTOD6CXVN6R+5lxCwC6Mnn10lFrFArJfFuk+roWybmF7wl4l7RR0z6MOzkzOP/T+IQDgu6kJqp6V7Za6UKixMyqNDuQYhjYM29vp4GwJ7Y5BsEh8i9rBrxA1eQFJB8ZA82xGk9df42DKqLqODeLz4xVdr4ehlG2NpxnvyI9izxOSqH1QYpKw1w5hmqvJ9plXrb+7IncQJRp060yUGRhF7ydbIqPjjeGUzXRxmqIYS+RgBTkBUGcJaBDbb2cb9qIN5hZ8Zu4lMNkJOu/GSaz2n8K19ItxLEdWqoapna15OO2K+XVMXTu7dffLi1kRfeELQsBsBCXX98kVw97YBhfm0+l7/rfgiGHRzQrI6zJY7a209J2MdoOyUEwNfi6yRYcYQ4tWmkPmENFZhiy99HIxnyhwusuaHkKDTeVg4o0GNrJUHVJ+5EVy9eRetlIPjSvBMT0vQGdVPX5b5u4RPvoAP7tJsZDwCbIr5/NuD8ZSpSL1DN/NnmONs82lHAglMHGH2dle1RYTZA+i5AAQ6CHRNRRjJTZBCqsScfgCbAA1WAEDfzra3IoAqvgAADUABTcw8zJekC4rPszWDn1wn2vprWVnsA5g/jJkHDgaZo1M8X2U3h3BapBkrvv0xRzmgTZ4TZ+IpxI61hUNRhYco5JD+s1J3pGTcbehQDBVaPQhQRy5PKw5iCtSPeptvPc6ARKefRgSI1po2awkhsCZInQtZMj8YXHHKiUZb3A1L2uAMaHphAOCzKZHucbxc9qFUHsWz6t8ZQ85Ffdy3+UgpAfUiRrfDxGT1jaikOCG6xWlmkeRjgraxycWecOgC+umLkfOLAxRiipCfGtuM3FH/MeLR5bCfzpiXAIaK34mVPnNaHok6yzrmnVikc//XATocA9MtfDrz7P8n1syCc++u57pRN8HRa7TUfjZTICDOfnjgHDTjyFBreLtdbBUXUGNISw1EkTdGrgMsu+Vgt2c8TQw9xAlZ+/rATLmhwHefn1Liqm4V507lZkbFn0Tp1qG/sg7dV07I/k7yji5rFBflw82ho2fQYFWTZdzEor6aPRzlmLPz0psZCjsfjA1Bmo1vb3mn1FJGFbt+MpmdGJMiwK5PIQI0MZP+3W5eSvHNaH8OvAKOn/IlL07CIK4rrCjr0VSxbNQ/vEo7+bHeQFKZnorH4LzbGP7F8mvOrNUs5krf2sy2TdGjmkznoWK/SYuvN3UBvxdmnSNuKKF/bFav2mCHmAv3X9m53jlGolN3J0kBa/ZKN+z3vAMjmAVwTy2N2iZ6JtiPlKp7CHzn9PeNSNf5lELQKNA2pv75bbepMgkK5BeTcu2ULoaNtzl858ZsqZ3BklCEF9IAtAdE/q79+/k1jK90wxIbFdRDwgKIH/Yz0s3n5XgGkjcwx/E55RH3boDwh3OXnmc/RIhMSCamxu4jP4HDFzv0pf+rZKsF/Aw7FFd0HvyClj8Dkrhak853iLT9xXkHQEl0niL4SGLUVNRUdrY0KYM/9c7hbZOt022P0BZqjoV6ggfv7Do50q2XMO10c+hbHG6PRYE5ijcsFMFFyLxSvkQJRI+zJGuetZteTuHa/4gwK+8Aw8Dm3drAVfair97fXtSMGCLBADwwm7PFe1BsluFheAWhmcgcTPMo+WXvoW28fryknkPx4VfEqcNY5iP6SXZagNW5P7Mg0Z7cfRrb1Y3uZZpCj0PnA62K34IR64s9wpWuzOUfc+pgBGc9c2EAqn6l1nuvDqLBw9OnkITVXuvR3NXCIU/zr5/GexEPM37GU21Mo4pe0bWouyvi5UZymrx+57txw800m/1gWhrOQhOZfDi6oqlyFuMK/uWITliIkB1awF5KOi2qovAhRkFy3CZ04EyTB72oJhg8mF/2ck3/SwBISAIRL8GEMYxpXrSi7tupc8bAoDTBTmW4IgB02KlryuruRkOfQeQX1WUgqEn/uUr3M58IXP9SB5fv3ZInMIMj7JOVEA0BcYypFFAgLqC6pf0Mx8Hh30nsmdGkUkhu0oadEpg+Al/2HI5+STHdwUcmEXZ3vGmvgM72plKkoNGwj3VFDnisCaAz1lyNvt7/62uZMxNeCj6h1kmfFtwhB3q0jOVhvfm2SdY0mHT3cJeDV7OFdzP3QTU82Q5JRSGEaIL/klMWnfgmH2B5+C0WYAaF/HZwHTerEpG4KqpBeyQWEJDm96E8yaN0rvTAc1xcSQe6t4+FWhhQRktcJ6zdnPfec/B0+zj+kkPPWt0kp98vYtF27+CFo8fAE0oX4tJiUpwMHtjfkZw33cgviD2Ih4lZZIJ/6H6YPO/I5xYEdN5GyG7gxX7yztbWuDg7HfNzPFY+ffKqI4f8cnAFbRzDLeyuH3uXEYCtaYBLOakN/a7qMROfzHvWSz/94s4bub5xRqWQoqOEIqgCczBugEUvhjJqpTLPINhPlgtA3rYOl/iseSHQdx5sW5t09OzsTssKDNkgHG+1Q+hBuycbtnFKbyOJdX9E/kfrxfw/FPKrPNKBCQrhpas7PsAO6YAI/8TM+Gqg8wOdv8bB9MdpH4Uzw5EHhNg4/QhZ5rpUbqOwl4FsGB/jsJFjPByvSgMaMwbfzLlNNAB3tAcXBfn9Jdjz763ro04Ivymt0IALbIh3NtedhqOS13WxccOE8rVm4MQ1JY9V6nIMOjslbZ/S0FajmF+gYzxSD5e0eSYR/dGruXcJtyf8D8J72TfG+yA/Klp9fdlsSqx/13wbaNYv+Fn23QgGMiiqHMJfMmEIeVt0dlsEiBXnxMLRApNRRH7zuqWONqgMrkJDedHdkmqwm69iif0GGit+Iwr8ZmtycmhlgpZcdvD7gEgwLaFy/mAVZqdnJYDropumxtx5o1vm41xiARrXBsvRQhpTr0cYH57TPlHwDjA9XcCHw2BSRQALVqi19+lKv+WEf7qP4PZFO1RaFFDU5NkH6x5P0gAQdwD2Vyla8sI3QYOk+hshfmczZh+AM3bkJa2xDhWfhylQO2z1Al5JUYAL9Taeu66B91k0xVxsLg4idhzyXBgLN5iUhyt5vGXFsHV4yZTNg7KrGw+iuCuofFjkgL3OrI8eyVjYprDk+/8FQxE2RBxEIzuO/3pzWpqN1F1t3qr1wc7jtyMRWcn9wrhsWqRd0D3JJyEjQGwEwBiscQhQmUeLu5ijnPbQLmtWSEgefeo0Ymw7kC7irYDTQghs0he8YIQ2KRWz3iC8a+Kgc3y6Hwcp9hGK8vjCO0ImB+Nnf7JJTQcQQjPXD5haNLbcIDtq8X5p0tXrcioRCcIEIFqMcXnoFfJUXPe2SpGc+ALBb0Rq+m8RyjyOgStUvNMtgrPzMYuWuD4igc32SzTFDiaVUntK0gd1YiZUCYcXnGdR+mU4XxcvBmdmCaO5yTs1Erd1nu67iCm56udpl3gbjUBDf6qKNgD/82SeNw2FLpX3DiaDtlyu6OCsKGwcr8F5MiOKk7kKsfw/H1ahkdTZ3Ms+/AfhLQuRoq5wrwArzeH6tLgGw7yj/ETGBkjVvClFQogA8m4bUFPEnIzQxth6J+sQBtgYPL7YtJFv1akqfZPqdfnaS3lAUWkt8NvvCQfqz5I5SgyGtzCGYeXV4kmi/WFR4J6uD7kRlHR9eal4507OOBJhDXRXIVSHeAyyYdguK9cKgoRLDiStmpjZpsmmx2A3LpXNe1UUnhPhuQlQOn0mBWyqsjtA9uDZofO1hetarR1ul9/TvkTmGWG9JmBTwDV5hpOgdYblxOr/adoZA2rNYRzDxPM0ZS8OBDITnkOwU2HvJmsLSqfLBlnOZF/hn2BGikJOQX/+ohA6UF7LoStXhmFMSRxaBhvYiT4oYJw/N2JpEcAmP88zAUbh6J8BVcyfcJ5Qkg2yKMihTgprpQJpLw3PTAI9QhL/nPWeA8Pk2SVvv415LT8sltd3oRCZaECz2LO4iyo8UK53USSelUowfYhr6T3MIuTi2JLEbhZbY1YxEiYm6NOBkP+4J1AAA=";
const tonedGraphiteGlassPopupImg = "/Shower-Partitions-APP/assets/%D1%82%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5%20%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%82%D0%BE%D0%B2%D0%BE%D0%B5%20%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%BE%20popup-uU9UA5iT.webp";
const blackFurnitureImg = "data:image/webp;base64,UklGRowMAABXRUJQVlA4IIAMAAAwgACdASpYApABPpFInUulpDMhpRFYcmASCWlu/9680f/lsNJ3wFqWjZmEvcz1hY/o3c91l3AP81ueu2f+KzaYYXKAWxvoX/J9Sf0owmgdzqhm7CNWCAJjbDbYbbDcUSDuU2jRxGH9Z3OqGdO2OfzlyXL/A/3Z/bb4dUMxIyaCfwcw6oZvP/Gv2Bocq6IN8qxOqBXoFiy1XK4+UHfgG6oH+7VFD244z2hQye27Z3OQv0GOrrvh84i2giVv/HzmZJYSI2WlstrhQiBv2oPY5b4kbKcA7cbQnDyqIOYHM7HHDL6WzfnObuRVJRVSf1LPbrRBfod3+hB/wMSQNLIf3cDSGaK/FZiZirTwX+AMvXtktC1lzVZXVI1pqWbbDPEfS/3ZjRvb5ua9nkGH2JWy8jCvva+UotOOhXLe6M411o+rlm7RMHIHZXW+XCsRt3vcrqXK93799vMSEtNqGFsCWQSRGkAH5/shNJBWEhhiZRbBBRzy9UBaVl848BL9ucUecUWQzkTJ4VH72YI0nktMiOU0A+43BoE49SloaBCkFWGISs4U0Mi+Z1pcXfqmf4q+ezhj06gdywSDUX3uPKaGpavoJJuCG/6nZMK7qQjiTHa3W7Oz9xYHsEHLF15YiWomV9f02+/Iz1eRjccUcRwu2i8+Fx3QyYAJzTBASWagyBOeDNAklfGYGFpbsUoUthkT23T8X2V49Btm7jEaNcTRCgZPrUVHXkhQ4fIH5FfR8NtAhq13TOh+FwL9UnFI1JGI0rG+/XDY/qwLLyS8Exw5ewWFfABudaBCUEE6PRip0PHWEwBuMeSzgOocq5gVhkReD8qs9eNUWY76HLPFfiITlGAUjmpcgutEZsaUgA5G0D6DZfk5TaOkaQjcYTvYyj3J5Q5HidWuaGF5TZKoKEIQw0EN4MTBplgFPJYdo2m+Zhyz677KSjLr+5Fb6LMXMCR8dDuhogAm+65jGu4BJmwqkEa+6oq+e2JA/cWgiMQIwvY9jjW0GxE2YiEciXwULh2hFLQk1rJ31Necuf9ndiGJTPfKOZIgXsz7h+TH3x/h8h3uuw7OtcW5rVDBc0mXuw07pNGsGvxdEIbOtbeOtdmr/8e6xD6HA7on8cj8am5OuFJUdvTilug8Rp14jIKWo3ttEZwnUQzAUlepO+vNEG5Q2Iv0TMiOffQgfk2vrZEPrA8dFQ3eah2ch6KpN7YYX46PZhk0QmD2R6bY4hsljR26CknPczMSdP6VVP9NR21+khPQhV4GMRfyZtVsHpRj5sQ9Omcx141N8tdh9QlcYkONCn4u+DT1zflVQK5eVCvxfXfAMf8HMf1/IM0mAYjyiBtenRfzccX0xy5f4Oo36/ILg/4HfWdzqhnWpTqAAAD+8zNf0RoFCrr0rfJVy+0nhzDeyej6nsPSEzdJdlU8fJXRBICGBKVFAfSZuPnrkxVUUMfFU72e0FXj3VnfiL+1fsw+S4cLO3u9/CF7Cc79/rLAL/r+/9uGasxs1iTHRKsIOe48nJ02w7aUFDe9DrBvO+3uqggjd6sVWjUE7zSiK6Hl2eAuoL2xLhLhpjLtXk/QFrxMp5par76x7Ff8VLQX3BBhnnHtVGo4vSEzBNG+2MapLX9uWtrfad7Xaho4C2cayodx0lt8WEtIAC9Uf9So8RKXNq9Xw4Tt5jHHNWml2yQQwFrCg2dEz3+Mt+uzeQUUoQCIxYeW2WfRPsJfviZaDvgA+BP3yyte0gn2UPVW77ng//WCIeS3MF10x8HSVDxZIQx84scA7WYBkUXcsf2gPRsi+BXVGFMsqc4NWai6bFqiK0yWUhtCtciF4AP6I6XmoSfbuuwKyKJ5M2L8JTPauacHjBIwlCnBqqr4IRun4V26gbEgJM0yIBzF3n79yBc4F66MZvNtFT9tN+Hz4H6nps4fYEplZOnAC9BCWY40ApaIvZHiUubM5DxAyawHGWUGT/UpfPqFcBxiTo8N1v7Yth1L43fNLJcxtHJWSHTJFBqlW1W2Ltk2Xa0wbON6gie+Pwq2NwbOdeZWRrnxSmBs9IUIvyqsFWY2xOQKG26i4AHaXKWBc+9ULGXrqGMoNGdn46dPN6S4GFY/HNHm1F5pCXc/kBtMi0AN+1dydhUlCj49RZgX6wkxJnX8HtX91H64pCek8rX457vPnAX536k9dugpRra1/7KsfgxOkCtITBungoJzfIPSdgVQbgqZu0o0Rdgze3fZ5whB0mbPgLfNiUU77zZGHIot6Q+b8Pv+qeWV/c5v2osDmAWOBkzgS21SzlOeVYt0Cjy0r/+lxiqwPql5rkC6tDl9lbltp5xURi7EKVC2fAK1DNy6axoTDbDkT1hS4ZVtS5JVCMJb0xBBpAvzHWHJpjyJNwM8KXSlwJyBNSNF+vf2q70/tolSSpgDY37GnvjEVA56c6TAQzlrEDZ95Xu/pXQSfx0pU47nqxCpnWlDQl/4IbnjHpfpLq0yS1WQwzN9LNVKwQXoL30tWyxOtS6YlEX+Zk7Wj4ezL3LcG0uIcjpPb21ACfU6KO+AdRZbTzmB2kCjXMNYwXnsDLQtR5M+vxCqMlsQ/6W0Y3/Vcl8iNGMgN1RK+CRoQQMb0CrDSFVQOPZUcJuOQ2heGolZBYr/2pmyrPsT/Wd/dXksOxSSPRLZYhAg8CS5cBaOjYc0q6JaESpzZHlNLCv9nafebX28InkLcpEZhmOg0AGKy58Te9UsWIQuHusSAVHa78kCc9S3vnceI4vGMbVrXOKOCunLM6FWWFnU5i107k+TbEUdxDmj/OPudc/P/GJl7OGsWN38V+03oF3WLwJdgoxZ90rh3yIhgOw1Lg1S/6So9ej/9ORAsozb66IMj7IhTt3xH9QPkGqjYKWEeP9dCFsG0yyIvss6Ktb2QOzdIPTtyYcfEu2GUib+iaVEH08WBpWZAWguXvPJIsbnNShG0oSjGFaQK0A+blAGxREXWgFV72KusFnzYYT4sZ9wnHRas75yTY9+Y0S7csGKQIWOWJuZE1zVkMJYFS2fpSNVowRiokxRLJlux+roed9+8ZCzWMh+g96bdJacvxvMtlAyNhAlMmhgHfSQCOPZvcwewLNuCfHLakJmHhdYDm3UQ0tbUo+EvrXYgwKEjrir+M4DoSYwGcx3pHQSOmCSrt42ceTQGmanr/nNTUgKZAqbmK5ArhXPiZwAM3TQQ0D/tFTr3MGfYGwsxhr6CRwsTanQvLvp5ZedraArwERXGcqn/Jl8sbyGNgFDyvB6WKg+F6aB7OYxvl8Zw/liKpl3lhuAjCnj7A9t9z+waDVIztWo8NJIht59fnEJPJohrTKFF/CaCjXQDlp6XncLcfLx93th3G9j2Ewlc8F5WBMDIWIM+IyjEdtVmtO1Zw4uivmRwk1S98dUUE1c/OLq+nEADYnv7HdNrbMfiPqcWbK2LJTcW4iiKsgtqYAEX7Zpc/W+ffpeDTdrva9gzmXBVV4x5LQUWBvjdnQhoDsed4t4CpsmtBKbNqD4QaFJphwmV3LH+NDhfXbKzQVWpbUGclWE9n/+YQOp9HVjXmmXvhwA9nBjpwgia4NbqYeRIqz69pv0jhI/+6eB2RfvLN2Yvct90u+spjo+ndBtjaYF/Vm1a1KDjL/QTF6jQfkuGqLU9XOrUVD/xray954IihY8ZuukSmP20SgiyXNvxoPovl8lbGs/EN/6iR2m1D7bNyZeOMxjO3JUys7hkYHgbyrSxA+R/xwB++e7efa0MqkHltT8zZ2+qZLZwO2RUOxEbmcPtPyydMlzEgebZtC6qSLlVu4FURFwh0IKcCSD2JNDwj4pxeyBB+F5JQ0PnRhYml+KsiiVhWPi6Vvxz7yfftYhWT5dTyRIJFsf+h5Pl5hDkDekbBHH9G+3lYY8owsffWhy8P3YUHkenLh87bHkQE4KdojVn1qaKgudrVwsVL93qMPBkjCBirQv+D88alYsqAXrS3YzAZEqx9NPKKG8+4eWEffOkm1B7jM5jSqvlrm10sFD/DeFnQnuI0CnWQC9Av0se3wHAX1i7+pc6sFv3vq9R18WshZFe+Xfw1K3vujFL3aHlDZm6g0Ih6NqYfrY312eWKvx5AMN/w82jbxxXE2IucUAPW/sHctLlDMJAcNgnAO3xuDcVd0PsVh82kFihaVjyYGEj9PZe4vIXSxtcyQTYlvlPEMb9rtQmAt9osTeS6vssfTUFqqQVEJHasxgIybGimniwFbxSunPmcGpoXipv/ycULG7FkOiQANzEH6X2XkPtV2nCU/xJoAAAA==";
const blackFurniturePopupImg = "/Shower-Partitions-APP/assets/%D1%87%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%84%D1%83%D1%80%D0%BD%D0%B8%D1%82%D1%83%D1%80%D0%B0%20popup-_S3d2ejY.webp";
const goldFurnitureImg = "/Shower-Partitions-APP/assets/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%B0%D1%8F%20%D1%84%D1%83%D1%80%D0%BD%D0%B8%D1%82%D1%83%D1%80%D0%B0-MyZRqopr.webp";
const goldFurniturePopupImg = "/Shower-Partitions-APP/assets/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%B0%D1%8F%20%D1%84%D1%83%D1%80%D0%BD%D0%B8%D1%82%D1%83%D1%80%D0%B0%20popup-DyT61QMX.webp";
const bronzeFurnitureImg = "/Shower-Partitions-APP/assets/%D0%B1%D1%80%D0%BE%D0%BD%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%84%D1%83%D1%80%D0%BD%D0%B8%D1%82%D1%83%D1%80%D0%B0-D9GW9GWz.webp";
const bronzeFurniturePopupImg = "/Shower-Partitions-APP/assets/%D0%B1%D1%80%D0%BE%D0%BD%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%84%D1%83%D1%80%D0%BD%D0%B8%D1%82%D1%83%D1%80%D0%B0%20popup-NyqciT_v.webp";
const nickelFurnitureImg = "data:image/webp;base64,UklGRm4OAABXRUJQVlA4IGIOAAAQjgCdASpYApABPpFInUulq6YsphF4WZASCWlu1PakwO3DtqmH2mNDPj/S8YSw3/LbnvrA51XrvFTb9a1Z49P4AMrtTVoW1sJLG61kFfqCH1BD6gh9Q06UOLu6Wh6lrNvJC5CTjpD6gh9QRank2eRuVGXoCTl6aWN2Rjdn7BAfTbxcG2XwJNu/5J0zY1mWZQ1XlAvJk2EBaHVVya5lI2XHIN45pbBA8paHBtaawJLpvx1K9BmIw6wdD9j8aQGALEm+mTOPEs//xZ0xYe/G1QSB2hCZtGbr6/1ORZy9JdeAhsbM02uJpK2TVkYwmu9XMPnWOF1LJBTFVY6Hazg54fTkCbDzL6xPvm5LiDDhnqEqKrY+rZTyF5OjQ4M4KqPIByeyiARuhzIe/Ma8wpTwJkeytejok5IR10phJBqTs8/ePq1tXOXjq9/G8CQrfEP9FGYLMWHZGQBJiRvnYzNHSX2hyQuqsSVCdsmWC/oMoCMdIcIyu3HgBU/xvVGS9Fhk9ccpYCj6t1PW4FIabYP1ErkF+3PyK21Gqjv5+/5rl3UPrdV3L9tEOCR0Ch9DnFmpM5cNoaJN8g8OiAQ4HmCOc79DPK3CStEr3XhE/1PZlYNsvP/jwv0YZAahdsbCsvHJUjWJza/e1wmsLTfqAW7T2DDPSPVjPnK61LeQAe3pXbu3cTumn2FKQ4oqEInXpPwi0Itev4byAWpoh+mnOXnc2R+L/NamJaLFCLG2UGiLLDqrIlUuVgeUyxbkfJUEB7kpKlJJQ6eXxKAiamB8vPwUtAPp7noloF12msbBNAGsjYzKbgRkykmNHadx2mXnCgNCELsOsmuBE9D7U9Hk6cFu+RVGrX/LYU0blWXWG8du+5puohtYfTOaBmOKO/5dToJzzCy6TlHuPkdLwi1iDxXLJzR9vvxapa6rQ+Wd9+sxDpHqgY/9TngfAE5u1ARl87vbVypU6xXamWCWpHyUq7V+6b81rYICbz4Cwh/xVFhHJnCu8ajXhQgTM9kATRX9FebCh+fshYMOKR8nwQNHvPzLQ8NbCdrEdPFr11N63mHB79KrijqDt3q4Og7M5OiAizZgUkk+2EglL3CRSDF3zdqO04TknKcxOHPAjo4t1JGEAI3kx1CFFAExVT+kR7joba1ffP0GTpRLkH0BaAsN4suh8HK69uNk6snh2/S488qhF5+dp3Brpn6hItrnJgJEY3mSZKZYLFS3dTJwO18SQTaKHbkGDTRa97cnE8QiaHXOFfqCK28NQFs/gX7ftyQZw7ScAhREWqKEWxDKE2nTYUq3cS2DbMu2+HFShmPQfH9PUDFD3U/r+ootHl5lcKF/z5oDAhHrLh1KYugG7NJcWnTOhw33+Jc6oSWBMkFgHKbbYuj9dt/fKhOTdyG3WHrSXQOSBoe28NfxRSw0XNYdcwzUcAGDj/JWyjj7MZAH4/0JbwRA5hl7rDoLtHvN6s3WsbAf8nTOQmJ9AdnyoePQ736hiEpd5FI+T5XL1wn+aYCdF5PTkqaB6BJr1iUEgAD+8kKzftL+q7g/8xKrogziWM52BBmX4CCbkEQDIVwDlICIUuCa5IkihEBetOkxZGcWwFo+v9E1xW+Eo/8+UVsNi7mUbutPMEuXo9rMmVv6Aek3R8HaIELDAMnTkNQy561HTsre+KiTPSPBOx9jbxIfYobjfg3m9aBte+6WdwoBVHmR7ToYw0LnvX0GXXxC0NKjqJfnu00IiLJ4wsPgvM2yO3TFBy15yLodRGZ1wWNuVDJOXfcOR81xYOCaq61VoaZ2jq3/hv6+OqkmVcSJyWdlQgW+9s8jn4pPuno9G7fnL2rESLCEABie+8pXk1+Rh7p275mEIscXPA/IKTR21RDb7/1lvURJK36a3UWg6Bt6yDzTAVUSDIW6osxWPVw4VLv05qwMsfZ4poZ/AwC0PNvLJboGjxPQoiyrHa2GYyFCBYqo/2xyAY0x74n4BU8eghux4sj6dzEzQ8BZX0tWFN/RBTPb4bQIwIW3FPMMMQwSucU/538l3PuuTE6ZWT7w5gSQEWdYNnJypD0TeNRw78LUcxgeE+t4TyaqxrcFOp8u7VpeAliaQPQoWMSzhxDQ6LcpdH4z7X/6fM2dljKiaepmh1BeU+Ag74mORPgAeSPRN5HaMdFAEfFgla1qWh9kUo9TbJ6HLWMXGGOk4Fgy8JpsF9eSIYKsiGqU1iu7z5L4+uuixcmt9KQgMvl4CmOFIu7Y5iVUBhG+zq8pCkdeJrbbrntwc7ofMeiTJoiiW5yRsLrum7vjag3fsJZif06EeNaZDywzm9xicLIZPzX24DvIY0VNmsRTx18KhVCf63vasufasibteW3zVULHluQhSLXPDCo9+QY9iFXvxnyLTnkVDDatKz0kk176ag85fKpRfUaFA0TuN2S9DhPtVpMy7brtOy6fYy+wH/h0T403KvkXtCnIp7ockCelhPNLz7TqBgbBur3JAxLtAz747KCL0XoNNKWTXWjC6quK72gquHZFVdZvFfaR2q+ps9KnvSsmbyTaNLC4jwjSTzHhflfpjIVzs6BbfdJ5QXMj/hgPU2M127pHaF1haN44BnKjxEOtf2CzjJP50LjEnthuAcw7x15XjiXNkNy96Nq22gv4plsWcC5CgZKeyyWpO/QntLzggpNCLEABI2KvGdGADnQjZmw0neSNDzK/kbTB+Y1mWL8yA4qTxeLCDQHaYj4uDCO8er/aZLtzR86oirj4SPyeRVxiyHo5+tUdbMSSFZMfHr3YAp1moX2whSnNgSJK1a82p9x6CT9jlnRIHh96QUwsL2p8LMqjMjfURFbZ0l/wLipgd0Q+YfXQ9f5RxyVmybmvu3ySFgR7SEp6JD/OaL/23bEP2xUVczhpJIvzBz2Ohkrsl/zmmjfoz+MHNrM0sVD/xmkHQTOXkfcAvijG9XY1mBvVz7YnuiQOfsTvFcsXU0/9eYygKdTC65pQkCMDAGok5fDtSyMsoPdjV2mq0Dz47oCij/m8yDqUq32d907jA+Ka3Sgar40xtcSqAm9tsj1aCj1qEyJ99UbhDyE/oIxOcgtLzGEPX96lDD5wmzNlnce+KBMTT1zax4aca/vCqzwAuPEwPTcBy06aHJpwM7j0/IcUwZeW+Jmyyw7BsUvOedH+2Loeg3rmuUdafWNim2Rwhg6nS6huTo9q0+RDXve4X63LSBeBtjX3zC1q9gaVKeX1YEBnFW90Oh+DyIDBVVHEul9aDE1OoB8osNMKOBBM8HE5vvCgfXj4EOcvgHMfuhQI+hWSblqQ2wOnuBxSA1WxP+GGWAflfp6t9NxvBTKp24y9oVPEv2syzvEhTPrDyyvxo7RkbrACAVJyiiVERxeK+OZD3aRjaYThJyiW2xmx3+u4uBywzjcAxniJ4yTs56hwbX3g4XAES++t26Ye3PYYbVOjW4hqgEx/7oheJcr/UrQ0LQbQb1VQXaRpeQO3OAJiOvJmMfs3Zq7CkAG2LOcbPFn6VL2KfcDHiHuiyTBg8NsRAG3sIO/BaDWAewZu8WaT33Le5wbLHhuEfyfHv8LuloBtrgDOpwREu7lCZdMAmtSOAB8YZt3l9a7hL1UUwp3agxHuMd/AowONNh1V/oH96Ziny/cFSB9Z3sNy1/EKd/q3ZLmRL47BmzuInyv3UMRdh7+MAOAEnhDa3rKZaoXGdu6F/xVGs1FBRncfQq/1kBdwyZHAiJWgDJ4g+vJagLXLLWrbZTbDafWTu4AygVzuqTMLMyOBu4i/gd4iZWbe42WuYpSGdAxg4Vfyr1zNYpBJCVYNHl1P/sqEghI3VaV4tejvgFj6oWQsWdUjih9Nu0mW7zf3Hf00vbqYDGC5vy17ahDdpqnZdwL/10u6TV9QmAr1YJ5CgKplfCFiS0TZh+P+2HlyhPEeRZx/aEMgpVGGQ6g55Cs1+duTMnjqx0/dX4I7g03qmXXY5+AXrAlF75cvYha4gg/CbncSasvW+RPSZIJwK3Ii85KBdjtX/LkthBegKnx4ARU4vPPWLzbARrzsGQzKkD7wE8UFryGf31GieNYL7OJRKdFO5hb/GyedLNzmTjOZ5K8hJCef9WbsMIp5tTsnf9r4rQGCGQL3AT2gfIrR6M5uPSVj4aNjhami64wYUofYkZbD8wMlVKrYnlnNqpLtWfSBd/AxjjLwrqhblD1Jrq+uyCrXaEzUVxuU9VfG19XpTQsvPVYalJTNdo7vxyH2mhkD0naCM8C2bkic7mKpjpoAH5LKorhlnjji+VeJEwKIqcPK1gGOnK69w7JYobBiko9GPQZjvuiyKFoSjpP+kg8PQKcFcHSlbIVKsaoKWTYCp1rrMNansdZ85Lr2ICsxyyfpU8neauJKFdodC/f0HXwOys5lJBKHGqGgDMuFQHYlzyxjcDwFbosRqsK3cOdtbGaq0mkUZtdYuX4jyY0BBOj0amZiuQ7dSdQykNmYfKuIELpTxV+x8lrD8sBkGkGx31t252WyhDuL+0Ttjey+LVeSH4YHuNebi2lP8PnYXXh2zSi3G3jjjA6MFNFb7hwTgMe7GnJoN6NplHx0BltGWf2Jm8FUvFRRw/c1GqdaFKP8cUnT2cLVs/ckBVtkF8RCkLzB1Eidy0ZCdngk1PslkTJgkmbxEM/krRV6eSO7aldZsPfKh50PCEu3dAyedG7wKytmj9MoXx9mVlcGayyZNRhjKbcjDZ5sa6GcBgcFIFkXab2gnsAdT/zpVLnp33nej50h1DRAtvPcs/NF47mfLQwK2yKVT2rjh9IzXlHwgVsnb4jGeB8C/PMUyTedBhcvUcIEojgXtOY0J3NLvhFxOTI0pEAD2mfMKSXTUou0bTySbccxB1iD/Zew6nxWE4UxRshLtaoJE8tfkWaB3kryl5DE73MMFEqjld+AXurJAp0AAAAA";
const nickelFurniturePopupImg = "/Shower-Partitions-APP/assets/%D0%BD%D0%B8%D0%BA%D0%B5%D0%BB%D0%B5%D0%B2%D0%B0%D1%8F%20%D1%84%D1%83%D1%80%D0%BD%D0%B8%D1%82%D1%83%D1%80%D0%B0%20popup-BcluJRbs.webp";
const chromeFurnitureImg = "/Shower-Partitions-APP/assets/%D1%85%D1%80%D0%BE%D0%BC%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%84%D1%83%D1%80%D0%BD%D0%B8%D1%82%D1%83%D1%80%D0%B0-D6xnRmyM.webp";
const chromeFurniturePopupImg = "/Shower-Partitions-APP/assets/%D1%85%D1%80%D0%BE%D0%BC%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%84%D1%83%D1%80%D0%BD%D0%B8%D1%82%D1%83%D1%80%D0%B0%20popup-TgFklZpR.webp";
const swingingDoorImg = "/Shower-Partitions-APP/assets/%D1%80%D0%B0%D1%81%D0%BF%D0%B0%D1%88%D0%BD%D0%B0%D1%8F%20%D0%B4%D0%B2%D0%B5%D1%80%D1%8C-BIeLjF6g.webp";
const swingingDoorPopupImg = "/Shower-Partitions-APP/assets/%D1%80%D0%B0%D1%81%D0%BF%D0%B0%D1%88%D0%BD%D0%B0%D1%8F%20%D0%B4%D0%B2%D0%B5%D1%80%D1%8C%20popup-DGu1-Vjf.webp";
const rollingDoorImg = "/Shower-Partitions-APP/assets/%D0%BE%D1%82%D0%BA%D0%B0%D1%82%D0%BD%D0%B0%D1%8F%20%D0%B4%D0%B2%D0%B5%D1%80%D1%8C-3bWfj5RZ.webp";
const rollingDoorPopupImg = "/Shower-Partitions-APP/assets/%D0%BE%D1%82%D0%BA%D0%B0%D1%82%D0%BD%D0%B0%D1%8F%20%D0%B4%D0%B2%D0%B5%D1%80%D1%8C%20popup-D9bsst2Y.webp";
const productsData = {
  showers: [
    {
      id: "1_showers",
      title: "Шторка в ванную",
      imgSrc: bathCurtainImg,
      popupImgSrc: bathCurtainPopupImg,
      alt: "На изображении отображено как выглядит стеклянная шторка для ванной."
    },
    {
      id: "2_showers",
      title: "Душевая перегородка",
      imgSrc: showerPartitionImg,
      popupImgSrc: showerPartitionPopupImg,
      alt: "На изображении отображено как выглядит стеклянная душевая перегородка."
    },
    {
      id: "3_showers",
      title: "Дверь в нишу",
      imgSrc: alcoveDoorImg,
      popupImgSrc: alcoveDoorPopupImg,
      alt: "На изображении отображено как выглядит стеклянная дверь в нишу."
    },
    {
      id: "4_showers",
      title: "Душевая в нишу",
      imgSrc: alcoveShowerImg,
      popupImgSrc: alcoveShowerPopupImg,
      alt: "На изображении отображено как выглядит стеклянная душевая в нишу."
    },
    {
      id: "5_showers",
      title: "Угловая душевая",
      imgSrc: cornerShowerImg,
      popupImgSrc: cornerShowerPopupImg,
      alt: "На изображении отображено как выглядит стеклянная угловая душевая."
    },
    {
      id: "6_showers",
      title: "Трапециевидная душевая",
      imgSrc: trapezoidalShowerImg,
      popupImgSrc: trapezoidalShowerPopupImg,
      alt: "На изображении отображено как выглядит стеклянная трапециевидная душевая."
    },
    {
      id: "7_showers",
      title: "Душевая кабина",
      imgSrc: showerCabinImg,
      popupImgSrc: showerCabinPopupImg,
      alt: "На изображении отображено как выглядит душевая кабина."
    }
  ],
  glasses: [
    {
      id: "1_glasses",
      title: "Бесцветное стекло",
      imgSrc: transparentGlassImg,
      popupImgSrc: transparentGlassPopupImg,
      alt: "На изображении отображено как выглядит бесцветное стекло для душевых перегородок."
    },
    {
      id: "2_glasses",
      title: "Осветленное стекло",
      imgSrc: brightenedGlassImg,
      popupImgSrc: brightenedGlassPopupImg,
      alt: "На изображении отображено как выглядит осветленное стекло для душевых перегородок."
    },
    {
      id: "3_glasses",
      title: "Матовое стекло (Обычное,бронзовое,графит)",
      imgSrc: frostedGlassImg,
      popupImgSrc: frostedGlassPopupImg,
      alt: "На изображении отображено как выглядит матовое стекло для душевых перегородок. Также указано что матовое стекло бывает трех цветов: обычное, бронзовое и графитовое"
    },
    {
      id: "4_glasses",
      title: "Тонированное стекло с оттенком бронзы",
      imgSrc: tonedBronzeGlassImg,
      popupImgSrc: tonedBronzeGlassPopupImg,
      alt: "На изображении отображено как выглядит тонированное стекло с оттенком бронзы для душевых перегородок."
    },
    {
      id: "5_glasses",
      title: "Тонированное cтекло с оттенком графита",
      imgSrc: tonedGraphiteGlassImg,
      popupImgSrc: tonedGraphiteGlassPopupImg,
      alt: "На изображении отображено как выглядит тонированное стекло с оттенком графита для душевых перегородок."
    }
  ],
  furniture: [
    {
      id: "1_furniture",
      title: "Черный",
      imgSrc: blackFurnitureImg,
      popupImgSrc: blackFurniturePopupImg,
      alt: "На изображении отображено как выглядит фурнитура черного цвета для душевых перегородок."
    },
    {
      id: "2_furniture",
      title: "Золото",
      imgSrc: goldFurnitureImg,
      popupImgSrc: goldFurniturePopupImg,
      alt: "На изображении отображено как выглядит фурнитура золотого цвета для душевых перегородок."
    },
    {
      id: "3_furniture",
      title: "Бронза",
      imgSrc: bronzeFurnitureImg,
      popupImgSrc: bronzeFurniturePopupImg,
      alt: "На изображении отображено как выглядит фурнитура бронзового цвета для душевых перегородок."
    },
    {
      id: "4_furniture",
      title: "Никель",
      imgSrc: nickelFurnitureImg,
      popupImgSrc: nickelFurniturePopupImg,
      alt: "На изображении отображено как выглядит фурнитура никелевого цвета для душевых перегородок."
    },
    {
      id: "5_furniture",
      title: "Хром",
      imgSrc: chromeFurnitureImg,
      popupImgSrc: chromeFurniturePopupImg,
      alt: "На изображении отображено как выглядит фурнитура хромового цвета для душевых перегородок."
    }
  ],
  typeOpening: [
    {
      id: "1_typeOpening",
      title: "Распашная",
      imgSrc: swingingDoorImg,
      popupImgSrc: swingingDoorPopupImg,
      alt: "На изображении отображено как выглядит душевая перегородка с распашным типом открытия"
    },
    {
      id: "2_typeOpening",
      title: "Откатная",
      imgSrc: rollingDoorImg,
      popupImgSrc: rollingDoorPopupImg,
      alt: "На изображении отображено как выглядит душевая перегородка с откатным типом открытия"
    }
  ]
};
const Products = () => {
  const [activeBtn, setActiveBtn] = reactExports.useState("showers");
  const location = useLocation();
  const productsRef = reactExports.useRef(null);
  const buttonsData = [
    { text: "Формы душевых", activeBtnValue: "showers" },
    { text: "Виды стекла", activeBtnValue: "glasses" },
    { text: "Цвета фурнитуры", activeBtnValue: "furniture" },
    { text: "Типы открывания дверей", activeBtnValue: "typeOpening" }
  ];
  const handleButtonActive = (value) => {
    setActiveBtn(value);
  };
  reactExports.useEffect(() => {
    const items = document.querySelectorAll(`.${styles$d.products__item}`);
    items.forEach((item, i2) => {
      setTimeout(() => {
        item.classList.add(styles$d.visible);
      }, i2 * 40);
    });
  });
  reactExports.useEffect(() => {
    if (location.hash === "#products" && productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: styles$d.products, ref: productsRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles$d.products__title, children: "Душевые перегородки по вашим размерам" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$d.products__text, children: "Виды душевых перегородок и комплектующих" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$d.products__types, role: "tablist", children: buttonsData.map((data, i2) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => handleButtonActive(data.activeBtnValue),
          className: `${styles$d["products__types-btn"]} ${activeBtn === data.activeBtnValue ? styles$d.active : ""}`,
          type: "button",
          role: "tab",
          "aria-selected": activeBtn === data.activeBtnValue,
          id: `tab-${data.activeBtnValue}`,
          "aria-controls": `panel-${data.activeBtnValue}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: data.text })
        },
        i2
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Fancybox,
      {
        options: {
          Carousel: {
            infinite: true
          },
          Toolbar: {
            display: {
              left: [],
              middle: ["infobar"],
              right: ["slideshow", "thumbs", "close"]
            }
          }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `${styles$d.products__items} ${activeBtn === "typeOpening" ? styles$d.oneRow : ""}`,
            id: `panel-${activeBtn}`,
            "aria-labelledby": `tab-${activeBtn}`,
            children: productsData[activeBtn].map(
              ({ id, title, imgSrc, popupImgSrc, alt }, i2) => {
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: styles$d.products__item, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      className: styles$d["products__item-link"],
                      "data-fancybox": "gallery",
                      href: popupImgSrc,
                      "data-caption": title,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            className: styles$d["products__item-img"],
                            loading: "lazy",
                            alt,
                            src: imgSrc,
                            width: "342",
                            height: "234"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SvgFullscreenIcon, {})
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      "data-fancybox-trigger": "gallery",
                      "data-fancybox-index": i2,
                      className: styles$d["products__item-text"],
                      children: title
                    }
                  ) })
                ] }, id);
              }
            )
          }
        )
      }
    )
  ] }) });
};
const SvgExampleMoreImgBtn = (props) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 488.932 488.932", ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M243.158 61.361v-57.6c0-3.2 4-4.9 6.7-2.9l118.4 87c2 1.5 2 4.4 0 5.9l-118.4 87c-2.7 2-6.7.2-6.7-2.9v-57.5c-87.8 1.4-158.1 76-152.1 165.4 5.1 76.8 67.7 139.1 144.5 144 81.4 5.2 150.6-53 163-129.9 2.3-14.3 14.7-24.7 29.2-24.7 17.9 0 31.8 15.9 29 33.5-17.4 109.7-118.5 192-235.7 178.9-98-11-176.7-89.4-187.8-187.4-14.7-128.2 84.9-237.4 209.9-238.8z" }));
const examples = "_examples_1mkjr_1";
const examples__title = "_examples__title_1mkjr_17";
const examples__items = "_examples__items_1mkjr_36";
const examples__item = "_examples__item_1mkjr_36";
const examples__texts = "_examples__texts_1mkjr_380";
const examples__info = "_examples__info_1mkjr_395";
const visible$4 = "_visible_1mkjr_442";
const styles$c = {
  examples,
  examples__title,
  examples__items,
  examples__item,
  "examples__item-img": "_examples__item-img_1mkjr_96",
  "examples__items-btn": "_examples__items-btn_1mkjr_109",
  examples__texts,
  examples__info,
  visible: visible$4,
  "examples__item-link": "_examples__item-link_1mkjr_445"
};
const firstExampleMainImg = "/Shower-Partitions-APP/assets/first-example-main-nMF1qCii.webp";
const firstExampleSliderImg = "/Shower-Partitions-APP/assets/first-example-slider-CzxrERIe.webp";
const secondExampleMainImg = "/Shower-Partitions-APP/assets/second-example-main-DPpEH8p9.webp";
const secondExampleSliderImg = "/Shower-Partitions-APP/assets/second-example-slider-B_wDvWkA.webp";
const thirdExampleMainImg = "/Shower-Partitions-APP/assets/third-example-main-BHEgaDm-.webp";
const thirdExampleSliderImg = "/Shower-Partitions-APP/assets/third-example-slider-CABv84Rn.webp";
const fourthExampleMainImg = "/Shower-Partitions-APP/assets/fourth-example-main-C_Ep4Kw_.webp";
const fourthExampleSliderImg = "/Shower-Partitions-APP/assets/fourth-example-slider-CaeelDS4.webp";
const fifthExampleMainImg = "/Shower-Partitions-APP/assets/fifth-example-main-DIvMB3eS.webp";
const fifthExampleSliderImg = "/Shower-Partitions-APP/assets/fifth-example-slider-D6PfwVMG.webp";
const sixthExampleMainImg = "/Shower-Partitions-APP/assets/sixth-example-main-yJCsMf1J.webp";
const sixthExampleSliderImg = "/Shower-Partitions-APP/assets/sixth-example-slider-Dg5X-PRc.webp";
const seventhExampleMainImg = "/Shower-Partitions-APP/assets/seventh-example-main-DQUTwDF0.webp";
const seventhExampleSliderImg = "/Shower-Partitions-APP/assets/seventh-example-slider-DWeET0dY.webp";
const eighthExampleMainImg = "/Shower-Partitions-APP/assets/eighth-example-main-BK4z3NEn.webp";
const eighthExampleSliderImg = "/Shower-Partitions-APP/assets/eighth-example-main-BK4z3NEn.webp";
const ninthExampleMainImg = "/Shower-Partitions-APP/assets/ninth-example-main-6GDuq9kN.webp";
const ninthExampleSliderImg = "/Shower-Partitions-APP/assets/ninth-example-slider-DHlschgP.webp";
const tenthExampleMainImg = "/Shower-Partitions-APP/assets/tenth-example-main-LYJiAA0H.webp";
const tenthExampleSliderImg = "/Shower-Partitions-APP/assets/tenth-example-slider-BfUNcmNR.webp";
const eleventhExampleMainImg = "/Shower-Partitions-APP/assets/eleventh-example-main-D6_mdTTx.webp";
const eleventhExampleSliderImg = "/Shower-Partitions-APP/assets/eleventh-example-slider-BQKSW4Lp.webp";
const twelfthExampleMainImg = "/Shower-Partitions-APP/assets/twelfth-example-main-DoA2ulab.webp";
const twelfthExampleSliderImg = "/Shower-Partitions-APP/assets/twelfth-example-slider-BwABDimC.webp";
const thirteenthExampleMainImg = "/Shower-Partitions-APP/assets/thirteenth-example-main-CvcICHbr.webp";
const thirteenthExampleSliderImg = "/Shower-Partitions-APP/assets/thirteenth-example-slider-CG2r0KJe.webp";
const fourteenthExampleMainImg = "/Shower-Partitions-APP/assets/fourteenth-example-main-Ajurbk_z.webp";
const fourteenthExampleSliderImg = "/Shower-Partitions-APP/assets/fourteenth-example-slider-E5lSgZ0m.webp";
const fifteenthExampleMainImg = "/Shower-Partitions-APP/assets/fifteenth-example-main-DbTONzvZ.webp";
const fifteenthExampleSliderImg = "/Shower-Partitions-APP/assets/fifteenth-example-slider-D2L0UDWB.webp";
const sixteenthExampleMainImg = "/Shower-Partitions-APP/assets/sixteenth-example-main-BZ2_yJqC.webp";
const sixteenthExampleSliderImg = "/Shower-Partitions-APP/assets/sixteenth-example-slider-Br7geJiX.webp";
const seventeenthExampleMainImg = "/Shower-Partitions-APP/assets/seventeenth-example-main-CqShDCxF.webp";
const seventeenthExampleSliderImg = "/Shower-Partitions-APP/assets/seventeenth-example-slider-CmnaKL1M.webp";
const eighteenthExampleMainImg = "/Shower-Partitions-APP/assets/eighteenth-example-main-Q6Z5Yo8R.webp";
const eighteenthExampleSliderImg = "/Shower-Partitions-APP/assets/eighteenth-example-slider-DfRN-iqU.webp";
const examplesData = [
  {
    id: "examples_0",
    imgSrc: firstExampleMainImg,
    popupImgSrc: firstExampleSliderImg,
    alt: "На изображении отображена трапециевидная душевая перегородка на фоне комнаты, оформленной в бело-черных тонах"
  },
  {
    id: "examples_1",
    imgSrc: secondExampleMainImg,
    popupImgSrc: secondExampleSliderImg,
    alt: "На изображении отображена душевая кабина на фоне комнаты, оформленной в светло-бежевых тонах"
  },
  {
    id: "examples_2",
    imgSrc: thirdExampleMainImg,
    popupImgSrc: thirdExampleSliderImg,
    alt: "На изображении отображена душевая кабина на фоне комнаты, оформленной в светло-серых тонах"
  },
  {
    id: "examples_3",
    imgSrc: fourthExampleMainImg,
    popupImgSrc: fourthExampleSliderImg,
    alt: "На изображении отображена душевая перегородка в нишу на фоне ванной комнаты, оформленной в светлых тонах"
  },
  {
    id: "examples_4",
    imgSrc: fifthExampleMainImg,
    popupImgSrc: fifthExampleSliderImg,
    alt: "На изображении отображена душевая кабина на фоне комнаты, оформленной в светло-серых тонах"
  },
  {
    id: "examples_5",
    imgSrc: sixthExampleMainImg,
    popupImgSrc: sixthExampleSliderImg,
    alt: "На изображении отображена трапециевидная душевая перегородка на фоне комнаты, оформленной в светло-серых тонах"
  },
  {
    id: "examples_6",
    imgSrc: seventhExampleMainImg,
    popupImgSrc: seventhExampleSliderImg,
    alt: "На изображении отображена душевая кабина на фоне ванной комнаты, оформленной в светло-серых тонах"
  },
  {
    id: "examples_7",
    imgSrc: eighthExampleMainImg,
    popupImgSrc: eighthExampleSliderImg,
    alt: "На изображении отображена душевая перегородка в нишу на фоне ванной комнаты, оформленной в бежевых тонах"
  },
  {
    id: "examples_8",
    imgSrc: ninthExampleMainImg,
    popupImgSrc: ninthExampleSliderImg,
    alt: "На изображении отображена трапециевидная душевая перегородка на фоне ванной комнаты, оформленной в светло-коричневых тонах"
  },
  {
    id: "examples_9",
    imgSrc: tenthExampleMainImg,
    popupImgSrc: tenthExampleSliderImg,
    alt: "На изображении отображена душевая кабина на фоне комнаты, оформленной в светлых тонах"
  },
  {
    id: "examples_10",
    imgSrc: eleventhExampleMainImg,
    popupImgSrc: eleventhExampleSliderImg,
    alt: "На изображении отображена душевая перегородка в нишу на фоне ванной комнаты, оформленной в светлых тонах"
  },
  {
    id: "examples_11",
    imgSrc: twelfthExampleMainImg,
    popupImgSrc: twelfthExampleSliderImg,
    alt: "На изображении отображена стеклянная шторка в ванную"
  },
  {
    id: "examples_12",
    imgSrc: thirteenthExampleMainImg,
    popupImgSrc: thirteenthExampleSliderImg,
    alt: "На изображении отображена угловая душевая кабина на фоне ванной комнаты, оформленной в светлых тонах"
  },
  {
    id: "examples_13",
    imgSrc: fourteenthExampleMainImg,
    popupImgSrc: fourteenthExampleSliderImg,
    alt: "На изображении отображена душевая кабина на фоне комнаты, оформленной в светлых тонах"
  },
  {
    id: "examples_14",
    imgSrc: fifteenthExampleMainImg,
    popupImgSrc: fifteenthExampleSliderImg,
    alt: "На изображении отображена душевая перегородка в нишу на фоне комнаты, оформленной в светлых тонах"
  },
  {
    id: "examples_15",
    imgSrc: sixteenthExampleMainImg,
    popupImgSrc: sixteenthExampleSliderImg,
    alt: "На изображении отображена стеклянная шторка в ванную"
  },
  {
    id: "examples_16",
    imgSrc: seventeenthExampleMainImg,
    popupImgSrc: seventeenthExampleSliderImg,
    alt: "На изображении отображена душевая кабина на фоне ванной комнаты, оформленной в светло-сиреневых тонах"
  },
  {
    id: "examples_17",
    imgSrc: eighteenthExampleMainImg,
    popupImgSrc: eighteenthExampleSliderImg,
    alt: "На изображении отображена трапециевидная душевая перегородка на фоне комнаты, оформленной в темно-светлых тонах"
  }
];
const Examples = () => {
  const [isMobileView, setIsMobileView] = reactExports.useState(window.innerWidth <= 500);
  const [visibleCount, setVisibleCount] = reactExports.useState(isMobileView ? 3 : 6);
  const [stepIncrease, setStepIncrease] = reactExports.useState(isMobileView ? 3 : 6);
  const location = useLocation();
  const examplesRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    let prevWidth = window.innerWidth;
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (prevWidth <= 500 && currentWidth > 500 || prevWidth > 500 && currentWidth <= 500) {
        const isMobile2 = currentWidth <= 500;
        setIsMobileView(isMobile2);
        setVisibleCount(isMobile2 ? 3 : 6);
        setStepIncrease(isMobile2 ? 3 : 6);
      }
      prevWidth = currentWidth;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleShowMorePictures = () => {
    setVisibleCount(
      (prev) => Math.min(prev + stepIncrease, examplesData.length)
    );
    const liveRegion = document.getElementById("aria-examples-live-status");
    if (liveRegion) {
      liveRegion.textContent = `Добавлены ${stepIncrease} новых фото`;
      setTimeout(() => liveRegion.textContent = "", 100);
    }
  };
  reactExports.useEffect(() => {
    const items = document.querySelectorAll(`.${styles$c.examples__item}`);
    items.forEach((item, i2) => {
      const timer = setTimeout(() => {
        item.classList.add(styles$c.visible);
      }, i2 * 40);
      return () => clearTimeout(timer);
    });
  }, [visibleCount]);
  reactExports.useEffect(() => {
    if (location.hash === "#examples" && examplesRef.current) {
      examplesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  const renderedSlides = reactExports.useMemo(() => {
    return examplesData.slice(0, visibleCount).map(({ id, imgSrc, popupImgSrc, alt }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${styles$c.examples__item}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          className: styles$c["examples__item-link"],
          "data-fancybox": "gallery",
          href: popupImgSrc,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                className: styles$c["examples__item-img"],
                loading: "lazy",
                alt,
                src: imgSrc,
                width: "351",
                height: "243"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SvgFullscreenIcon, { "aria-hidden": "true" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          id: "aria-examples-live-status",
          "aria-live": "polite",
          className: "sr-only"
        }
      )
    ] }, id));
  }, [visibleCount]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: styles$c.examples, ref: examplesRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$c.examples__texts, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles$c.examples__title, children: "Душевые ограждения - примеры душевых перегородок в интерьере" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$c.examples__info, children: "Тренды 2022-2025 года" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Fancybox,
      {
        styles: styles$c.examples__items,
        options: {
          Carousel: {
            infinite: true
          },
          Toolbar: {
            display: {
              left: [],
              middle: ["infobar"],
              right: ["slideshow", "thumbs", "close"]
            }
          }
        },
        children: [
          renderedSlides,
          visibleCount < examplesData.length && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: styles$c["examples__items-btn"],
              onClick: handleShowMorePictures,
              "aria-label": `Показать еще ${stepIncrease} фото`,
              children: [
                "Загрузить еще фото",
                /* @__PURE__ */ jsxRuntimeExports.jsx(SvgExampleMoreImgBtn, { "aria-hidden": "true" })
              ]
            }
          )
        ]
      }
    )
  ] }) });
};
const price = "_price_18p7k_1";
const price__title = "_price__title_18p7k_52";
const price__info = "_price__info_18p7k_1";
const desktop = "_desktop_18p7k_293";
const mobile = "_mobile_18p7k_302";
const styles$b = {
  "price__info-text": "_price__info-text_18p7k_1",
  "price__info-subtext": "_price__info-subtext_18p7k_19",
  price,
  price__title,
  price__info,
  "price__info-img": "_price__info-img_18p7k_288",
  desktop,
  mobile,
  "price__text-wrapper": "_price__text-wrapper_18p7k_318",
  "price__info-link": "_price__info-link_18p7k_342"
};
const showerImage = "/Shower-Partitions-APP/assets/shower-partition-BS27rnzn.webp";
const Price$1 = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: styles$b.price, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles$b.price__title, children: "Цена душевых перегородок на заказ в Гомеле" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$b.price__info, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          className: `${styles$b["price__info-img"]} ${styles$b.desktop}`,
          src: showerImage,
          loading: "lazy",
          alt: ""
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$b["price__text-wrapper"], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$b["price__info-text"], children: "Чтобы узнать стоимость стеклянных ограждений, необходимо согласовать размеры и материалы" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: styles$b["price__info-subtext"], children: [
          "Свяжитесь со специалистом в ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Telegram" }),
          ". Он поможет подобрать подходящую душевую и быстро рассчитает предварительную стоимость"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            className: `${styles$b["price__info-img"]} ${styles$b.mobile}`,
            loading: "lazy",
            src: showerImage,
            alt: ""
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: styles$b["price__info-link"], href: "#", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Связаться с нами в Telegram" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: clickHand, alt: "" })
        ] })
      ] })
    ] })
  ] }) });
};
const SvgCross = (props) => /* @__PURE__ */ reactExports.createElement("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ reactExports.createElement("g", { id: "cross" }, /* @__PURE__ */ reactExports.createElement("g", null, /* @__PURE__ */ reactExports.createElement("path", { d: "m12 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10z", fill: "#bbdefb", style: {
  fill: "rgb(33, 178, 36)"
} }), /* @__PURE__ */ reactExports.createElement("path", { d: "m15.707 8.293c-.391-.391-1.023-.391-1.414 0l-2.293 2.293-2.293-2.293c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l2.293 2.293-2.293 2.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l2.293-2.293 2.293 2.293c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414l-2.293-2.293 2.293-2.293c.391-.391.391-1.023 0-1.414z", fill: "#64b5f6", style: {
  fill: "rgb(255, 255, 255)"
} }))));
const questionImg = "/Shower-Partitions-APP/assets/questions-img-D6ojS8Eo.png";
const questions = "_questions_1xzjb_1";
const questions__title = "_questions__title_1xzjb_34";
const questions__inner = "_questions__inner_1xzjb_324";
const questions__img = "_questions__img_1xzjb_330";
const questions__accordion = "_questions__accordion_1xzjb_1";
const visible$3 = "_visible_1xzjb_377";
const open = "_open_1xzjb_422";
const styles$a = {
  "questions__accordion-subtext": "_questions__accordion-subtext_1xzjb_1",
  questions,
  questions__title,
  "questions__more-btn": "_questions__more-btn_1xzjb_53",
  questions__inner,
  questions__img,
  "questions__accordion-wrapper": "_questions__accordion-wrapper_1xzjb_343",
  questions__accordion,
  "questions__accordion-section": "_questions__accordion-section_1xzjb_358",
  visible: visible$3,
  "questions__accordion-text": "_questions__accordion-text_1xzjb_380",
  "questions__accordion-btn": "_questions__accordion-btn_1xzjb_400",
  "questions__accordion-icon": "_questions__accordion-icon_1xzjb_409",
  open,
  "questions__accordion-content": "_questions__accordion-content_1xzjb_425"
};
const accordionData = [
  {
    id: "accordion_0",
    title: "Сколько стоит душевая из стекла?",
    answer: "Мы изготавливаем душевые по индивидуальным размерам, поэтому можем рассчитать окончательную стоимость только после замера на вашем объекте. Цена готового изделия с установкой разнится от 35 до 250 тыс. руб. в зависимости от сложности и объёма."
  },
  {
    id: "accordion_1",
    title: "Как подготовить помещение к монтажу душевого ограждения?",
    answer: "В первую очередь, помещение следует освободить от всех посторонних предметов, чтобы монтаж проводился без каких либо неудобств. Далее — это иметь четкое представление, где и какая душевая кабина будет стоять. Затем необходимо распланировать подход канализации, подачи воды и электрического кабеля. Все коммуникации спрятать в стену или скрыть ступенькой. Сделать стяжку на полу и гидроизоляцию. Затем обложить плиткой, мозаикой или на ваше усмотрение. Только после этого можно собирать душевую кабину и подключать ее."
  },
  {
    id: "accordion_2",
    title: "Сколько дней срок производства?",
    answer: `После заключения договора, на следующий день, ваш заказ поступает в работу. Подготавливаем чертежи и запускаем в производство. В течении 5-10 дней мы изготавливаем стекла. Оставшееся время уходит на ожидание монтажа. Чаще всего монтаж происходит в течении 5-7 дней.`
  },
  {
    id: "accordion_3",
    title: "Возможно ли выполнение заказа с нестандартным цветом стекла?",
    answer: "Возможно изготовление с разными видами стекол, а именно: беcцветное, осветленное, матовое(обычное,бронзовое,графит), тонированное (с оттенком бронзы, с оттенком графита)."
  },
  {
    id: "accordion_4",
    title: "Что такое закаленное стекло?",
    answer: "Это стекло, получаемое нагревом до температуры закалки (650—680 °C) с последующим быстрым равномерным охлаждением холодным воздухом с обеих сторон. В результате такой обработки в поверхностных слоях стекла образуются остаточные напряжения сжатия, обеспечивающие его повышенную механическую прочность, термостойкость и безопасность при разрушении. Разбиваясь, такое стекло разрушается на множество мелких осколков с тупыми гранями, которые не способны причинить серьёзные травмы."
  },
  {
    id: "accordion_5",
    title: "На каком этапе ремонта вызывать замерщика?",
    answer: `Рекомендуем обратиться к нам дважды: 
На этапе подготовки дизайн-проекта для подготовки технического задания мастерам и оценки стоимости. 
После выполнения чистовой отделки для замера под стеклянное ограждение и подготовки сметы.`
  },
  {
    id: "accordion_6",
    title: "На каком этапе ремонта вызывать замерщика?",
    answer: `Рекомендуем обратиться к нам дважды: 
На этапе подготовки дизайн-проекта для подготовки технического задания мастерам и оценки стоимости. 
После выполнения чистовой отделки для замера под стеклянное ограждение и подготовки сметы.`
  },
  {
    id: "accordion_7",
    title: "Возможно ли заказать нестандартные размеры продукции?",
    answer: "Продукция изготавливается не только стандартных размеров, но и по индивидуальным размерам."
  },
  {
    id: "accordion_8",
    title: `У меня мансарда / Инсталяция / Кривые стены.`,
    answer: `Все легко реализуемо, наш замерщик все профессионально замеряет. А производство изготавливает точно в соответствии с вашими потребностями. Любые вырезы и скосы в стекле, это банальная задача для нас.`
  },
  {
    id: "accordion_9",
    title: "Каким способом чистить душевую кабину?",
    answer: `Каждый раз после принятия душа ополосните стекло водой, чтобы удалить с него остатки мыла и удалите капли воды водосгоном. Мыть стекло рекомендуется мягкой тряпкой. Более сложные загрязнения рекомендуется удалять при помощи препарата «GlassCleaner». Не рекомендуется использовать агрессивные, едкие и абразивные средства, так как их применение может повредить защитное покрытие. Каждые 6 месяцев рекомендуется восстанавливать покрытие при помощи средства «Glass Protector». Перед нанесением средства «Glass Protector» рекомендуется очистить стекло препаратом «Glass Cleaner», чтобы удалить с него все загрязнения. Петли / ролики надо спамазть силиконовой смазкой (либо вазелином) минимум 1 раз в год.`
  }
];
const Questions = () => {
  const [expandedIndex, setExpandedIndex] = reactExports.useState([]);
  const [visibleCount, setVisibleCount] = reactExports.useState(2);
  const handleShowMoreQuestions = () => {
    setVisibleCount((prev) => Math.min(prev + 2, accordionData.length));
    const liveRegion = document.getElementById("aria-accordion-live-status");
    if (liveRegion) {
      liveRegion.textContent = "Добавлены два новых вопроса";
      setTimeout(() => liveRegion.textContent = "", 100);
    }
  };
  const renderQuestions = () => accordionData.slice(0, visibleCount).map(({ id, title, answer }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$a["questions__accordion-section"], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          id: `accordion-btn-${id}`,
          className: styles$a["questions__accordion-btn"],
          onClick: () => handleToggleAccordion(id),
          "aria-expanded": expandedIndex.includes(id),
          "aria-controls": `subtitle-${id}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$a["questions__accordion-text"], children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SvgCross,
              {
                className: `${styles$a["questions__accordion-icon"]} ${expandedIndex.includes(id) ? styles$a.open : ""}`,
                "aria-hidden": "true"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          id: `subtitle-${id}`,
          className: `${styles$a["questions__accordion-content"]} ${expandedIndex.includes(id) ? styles$a.open : ""}`,
          role: "region",
          "aria-labelledby": `accordion-btn-${id}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$a["questions__accordion-subtext"], children: answer })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          id: "aria-accordion-live-status",
          "aria-live": "polite",
          className: "sr-only"
        }
      )
    ] }, id);
  });
  const handleToggleAccordion = (id) => {
    setExpandedIndex(
      (prev) => prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };
  reactExports.useEffect(() => {
    const accordionSections = document.querySelectorAll(
      `.${styles$a["questions__accordion-section"]}`
    );
    accordionSections.forEach((section, i2) => {
      const timer = setTimeout(() => {
        section.classList.add(styles$a.visible);
      }, i2 * 40);
      return () => clearTimeout(timer);
    });
  }, [visibleCount]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: styles$a.questions, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$a.questions__inner, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: styles$a.questions__title, children: "Часто задаваемые вопросы" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        className: styles$a.questions__img,
        src: questionImg,
        loading: "lazy",
        alt: ""
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$a["questions__accordion-wrapper"], children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$a["questions__accordion"], children: [
      renderQuestions(),
      visibleCount < accordionData.length && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: styles$a["questions__more-btn"],
          onClick: handleShowMoreQuestions,
          "aria-label": "Показать еще 2 вопроса",
          children: [
            "Показать еще вопросы",
            /* @__PURE__ */ jsxRuntimeExports.jsx(SvgExampleMoreImgBtn, { "aria-hidden": "true" })
          ]
        }
      )
    ] }) })
  ] }) }) });
};
const standards__text = "_standards__text_d3j8m_1";
const standards = "_standards_d3j8m_1";
const standards__title = "_standards__title_d3j8m_35";
const standards__block = "_standards__block_d3j8m_81";
const styles$9 = {
  standards__text,
  standards,
  standards__title,
  "standards__text-wrapper": "_standards__text-wrapper_d3j8m_54",
  "standards__info-wrapper": "_standards__info-wrapper_d3j8m_61",
  "standards__info-inner": "_standards__info-inner_d3j8m_78",
  standards__block,
  "standards__block-num": "_standards__block-num_d3j8m_90",
  "standards__block-img": "_standards__block-img_d3j8m_106",
  "standards__block-content": "_standards__block-content_d3j8m_122",
  "standards__block-title": "_standards__block-title_d3j8m_142",
  "standards__block-text": "_standards__block-text_d3j8m_161"
};
const standardsGlassImg = "/Shower-Partitions-APP/assets/zakalyonnoe-steklo-DtMV6m6r.webp";
const standardsThicknessGlassImg = "/Shower-Partitions-APP/assets/tolshina-stekla-5to1CnI3.webp";
const standardsMatteGlassImg = "/Shower-Partitions-APP/assets/matovoe-steklo-BZvFoeYu.webp";
const standardsData = [
  {
    number: "01",
    title: "Каленое стекло",
    subtitle: `Абсолютно всё стекло которое вы приобретете у нас будет
									закаленным. Закаленное стекло крайне сложно разбить,
									единственный способ это сделать - наносить сильные удары
									молотком по торцу изделия. Если у вас получится, то стекло
									распадётся на большое количество не острых фрагментов,
									повредиться ими невозможно.`,
    imgSrc: standardsGlassImg
  },
  {
    number: "02",
    title: "Толщина стекла",
    subtitle: `	В душевых мы используем исключительно стекло толщиной 8 и
									10мм. Стекло 6мм и менее не обладает необходимой прочностью
									для безопасной эксплуатации. Мы вам советуем стекло толщиной
									минимум 8мм, его свойств и прочности хватит с запасом для
									уверенного пользования.`,
    imgSrc: standardsThicknessGlassImg
  },
  {
    number: "03",
    title: "Матовое стекло",
    subtitle: `		Сплошное матирование мы достигаем путём "химического
									травления". Хим.травление технологически более сложный процесс
									чем "пескоструйная обработка", но такое стекло обладает
									очевидными плюсами: его гораздо проще мыть в отличии от
									"пескоструя" и визуально такое стекло более однородно.`,
    imgSrc: standardsMatteGlassImg
  }
];
const Standards = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: styles$9.standards, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$9["standards__text-wrapper"], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: styles$9.standards__title, children: "Наши стандарты работы" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$9.standards__text, children: "Качество и безопасность превыше всего" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$9["standards__info-wrapper"], children: standardsData.map(({ number, title, subtitle, imgSrc }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$9["standards__info-inner"], children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$9.standards__block, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$9["standards__block-num"], children: number }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            className: styles$9["standards__block-img"],
            src: imgSrc,
            loading: "lazy",
            alt: ""
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$9["standards__block-content"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$9["standards__block-title"], children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$9["standards__block-text"], children: subtitle })
        ] })
      ] }) }, number);
    }) })
  ] }) });
};
const descriptions__text = "_descriptions__text_12uex_1";
const descriptions__list = "_descriptions__list_12uex_24";
const descriptions__item = "_descriptions__item_12uex_40";
const descriptions = "_descriptions_12uex_1";
const descriptions__title = "_descriptions__title_12uex_183";
const descriptions__block = "_descriptions__block_12uex_76";
const visible$2 = "_visible_12uex_208";
const styles$8 = {
  descriptions__text,
  descriptions__list,
  descriptions__item,
  descriptions,
  "descriptions__block-title": "_descriptions__block-title_12uex_76",
  "descriptions__block-subtitle": "_descriptions__block-subtitle_12uex_96",
  "descriptions__more-btn": "_descriptions__more-btn_12uex_116",
  descriptions__title,
  descriptions__block,
  "descriptions__block-hidden": "_descriptions__block-hidden_12uex_203",
  visible: visible$2,
  "descriptions__item-link": "_descriptions__item-link_12uex_213"
};
const popup = "_popup_1lu62_202";
const hide = "_hide_1lu62_216";
const visible$1 = "_visible_1lu62_219";
const popup__content = "_popup__content_1lu62_222";
const popup__img = "_popup__img_1lu62_230";
const popup__btn = "_popup__btn_1lu62_239";
const styles$7 = {
  popup,
  hide,
  visible: visible$1,
  popup__content,
  popup__img,
  popup__btn
};
const SvgBlackCross = (props) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 612 612", ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M612 36.004L576.521.603 306 270.608 35.478.603 0 36.004l270.522 270.007L0 575.997l35.478 35.4L306 341.411l270.521 269.986 35.479-35.4-270.541-269.986z" }));
const Popup = ({
  isPopupOpen,
  handlePopupClose,
  activePopupImg,
  activePopupAlt
}) => {
  const popupRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (isPopupOpen) {
      setTimeout(() => {
        var _a;
        (_a = popupRef.current) == null ? void 0 : _a.focus();
      }, 50);
    }
  }, [isPopupOpen]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `${styles$7.popup} ${isPopupOpen ? styles$7.visible : styles$7.hide}`,
      onClick: (e2) => handlePopupClose(e2),
      onKeyDown: (e2) => handlePopupClose(e2),
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Вы можете закрыть это окно с помощью нажатия клавиши escape",
      "aria-hidden": !isPopupOpen,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: styles$7.popup__content,
          ref: popupRef,
          tabIndex: isPopupOpen ? 0 : -1,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                className: styles$7.popup__img,
                src: activePopupImg,
                onClick: (e2) => e2.stopPropagation(),
                alt: activePopupAlt
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: styles$7.popup__btn,
                onClick: (e2) => handlePopupClose(e2),
                "aria-label": "Закрыть изображение",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SvgBlackCross, {})
              }
            )
          ]
        }
      )
    }
  );
};
const firstListData = [
  {
    id: 0,
    text: `Гигиеничность. Стекло не является питательной средой для бактерий, грибов, а потому оно препятствует образованию плесени.`
  },
  {
    id: 1,
    text: `Экологическая чистота. Стекло изготавливается из кварца — природного минерала (песка), безопасного для здоровья.`
  },
  {
    id: 2,
    text: `Прочность. Ограждение из закаленного стекла отличается высокой
		механической прочностью, необходимой для стенок душевой. При
		одинаковой толщине оно в 5 раз прочнее обычного стекла, а потому
		оно не разобьется даже от сильного удара.`
  },
  {
    id: 3,
    text: `	Устойчивость к температурным перепадам. Обычное стекло при
		перепадах температур трескается, но если оно закаленное, такого не
		произойдет — поэтому можно принимать контрастный душ и не бояться,
		что перегородка лопнет.`
  },
  {
    id: 4,
    text: `Безопасность. Даже если приложить к стеклу настолько большую силу, что оно разобьется (что маловероятно), полотно рассыплется на
		множество осколков с неострыми гранями — повредиться о них сложно.`
  },
  {
    id: 5,
    text: `Простой уход. Не сложнее чем за зеркалом — достаточно распылить
		средство для стекла и вытереть сухой ветошью.`
  },
  {
    id: 6,
    text: `Долговечность. При правильной эксплуатации стеклянная перегородка для душа может прослужить вечно.`
  }
];
const showerTypesData = [
  {
    id: "shower_types_0",
    title: "Линейное ограждение душевой",
    text: ` — стационарное стеклянное полотно с дверью (распашной, раздвижной) или без двери. Используется при расположении душа в нише или в дальнем углу ванной комнаты. Часто сочетается с дополнительными непрозрачными перегородками из того же материала, из которого выполнены стены.`,
    aria: "Открыть изображение душевой с линейным ограждением",
    imgSrc: showerPartitionPopupImg,
    alt: "На изображении отображено как выглядит линейное ограждение душевой."
  },
  {
    id: "shower_types_1",
    title: "Угловое ограждение душевой",
    text: ` — два полотна располагаются под углом 90 градусов друг к другу, образуя квадратную или прямоугольную зону. Иногда используются
		более сложные конструкции (с 3 или 4 стенками, примыкающими к углу ванной комнаты).`,
    aria: "Открыть изображение душевой с угловым ограждением",
    imgSrc: cornerShowerPopupImg,
    alt: "На изображении отображено как выглядит угловое ограждение душевой."
  },
  {
    id: "shower_types_2",
    title: "П-образная перегородка душевой",
    text: ` — ограждение с 3 полотнами, примыкающее к одной стене и образующее с ней прямоугольную или квадратную зону.`,
    aria: "Открыть изображение душевой с П-образной перегородкой",
    imgSrc: showerCabinPopupImg,
    alt: "На изображении отображено как выглядит П-образная перегородка душевой."
  },
  {
    id: "shower_types_3",
    title: "Трапециевидная перегородка душевой",
    text: ` — ограждение, которое вместе с одной из стен ванной образует трапецию`,
    aria: "Открыть изображение душевой с трапециевидной перегородкой",
    imgSrc: trapezoidalShowerPopupImg,
    alt: "На изображении отображено как выглядит трапециевидная перегородка душевой."
  }
];
const setTypeOfDoorsAltData = (data) => `На изображении отображено как выглядит душевая с ${data} дверями.`;
const typeOfGlassesData = [
  {
    id: "glasses_types_0",
    title: "Бесцветное",
    spanText: ` — стандартное каленое стекло толщиной 8–10 мм.`,
    aria: "Открыть изображение бесцветного стекла",
    imgSrc: transparentGlassPopupImg,
    alt: "На изображении отображено как выглядит бесцветное стекло для душевых перегородок."
  },
  {
    id: "glasses_types_1",
    title: "Осветленное",
    spanText: `— максимально прозрачное полотно, обладающее наибольшей
		светопропускающей способностью и естественной передачей цвета.`,
    aria: "Открыть изображение осветленного стекла",
    imgSrc: brightenedGlassPopupImg,
    alt: "На изображении отображено как выглядит осветленное стекло для душевых перегородок."
  },
  {
    id: "glasses_types_2",
    title: "Матовое",
    spanText: `— полупрозрачное с матовой поверхностью.`,
    aria: "Открыть изображение стекла с матовой поверхностью",
    imgSrc: frostedGlassPopupImg,
    alt: "На изображении отображено как выглядит матовое стекло для душевых перегородок."
  },
  {
    id: "glasses_types_3",
    title: "Цветное",
    spanText: `(тонированное или окрашенное в массе) — бронзовое, черное, другие цвета.`,
    aria: "Открыть изображение  цветного стекла",
    imgSrc: tonedGraphiteGlassPopupImg,
    alt: "На изображении отображено как выглядит цветное стекло для душевых перегородок."
  }
];
const setTypeOfFurnitureAltData = (data) => `На изображении отображено как выглядит фурнитура ${data} цвета для душевых перегородок.`;
const reasonsListData = [
  {
    id: "reasons_0",
    text: `Полный цикл услуг — составление проекта, замер, изготовление,
		доставка, сборка.`
  },
  {
    id: "reasons_1",
    text: `Производство душевых ограждений — в Гомеле.`
  },
  {
    id: "reasons_2",
    text: `Высокое качество — остекления, профиля, фурнитуры.`
  },
  {
    id: "reasons_3",
    text: `Срок изготовления перегородок — от 10 суток.`
  },
  {
    id: "reasons_4",
    text: `Время доставки и сборки — 1 день.`
  },
  {
    id: "reasons_5",
    text: `Гарантия — 1,5 года на остекление, фурнитуру и прочие материалы.`
  },
  {
    id: "reasons_6",
    text: `Профессиональные монтажники — мастера делают работу аккуратно,
		обеспечивая сохранность имеющихся покрытий.`
  },
  {
    id: "reasons_7",
    text: `Отсутствие лишних трат — конечная стоимость указывается в
		договоре, после завершения работ она не изменяется, доплачивать ни
		за что не придется.`
  }
];
const ShowerPartitionsDescription = () => {
  const [popupData, setPopupData] = reactExports.useState({
    isOpen: false,
    img: null,
    alt: null
  });
  const [isDescriptionExpanded, setIsDescriptionExpanded] = reactExports.useState(false);
  const handlePopupOpen = (e2, src, alt) => {
    if (e2.type === "click" || e2.type === "keydown" && e2.code === "Enter") {
      e2.preventDefault();
      setPopupData({ isOpen: true, img: src, alt });
      disableBodyScrollIncludeScrollbar();
    }
  };
  const handlePopupClose = (e2) => {
    if (e2.type === "click" || e2.type === "keydown" && e2.code === "Escape") {
      setPopupData({ isOpen: false, img: null, alt: null });
      enableBodyScrollIncludeScrollbar();
    }
  };
  reactExports.useEffect(() => {
    const firstLink = document.querySelector(
      `.${styles$8["descriptions__item-link"]}`
    );
    if (isDescriptionExpanded === true) {
      firstLink.focus({ preventScroll: true });
    }
  }, [isDescriptionExpanded]);
  const handleDescriptionExpand = () => setIsDescriptionExpanded(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: styles$8.descriptions, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: styles$8["descriptions__title"], children: "Душевые перегородки из стекла в Гомеле" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$8.descriptions__block, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$8.descriptions__text, children: "Стеклянные душевые перегородки — современное решение для оформления и разделения ванной комнаты на функциональные зоны. В отличие от привычных шторок наши стеклянные двери и ограждения не только защищают помещение от брызг, но и придают ему элегантный, лаконичный вид. Изготовление душевых перегородок из стекла под заказ в Гомеле предлагает наша компания DZ System." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `${styles$8["descriptions__block-hidden"]} ${isDescriptionExpanded ? styles$8.visible : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: styles$8["descriptions__block-title"], children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Плюсы душевых перегородок из закаленного стекла" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$8.descriptions__text, children: "Все чаще душевые отгораживают с помощью специальных душевых уголков. Возрастание их популярности не случайно, ведь каленое стекло — один из лучших материалов для ванной. И вот почему:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: styles$8.descriptions__list, children: firstListData.map(({ id, text }) => {
                return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: styles$8.descriptions__item, children: text }, id);
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$8.descriptions__text, children: "Душевое ограждение из стекла удачно вписывается в ванную, выполненную в любом современном стиле. За счет прозрачности она не скрадывает пространства и сохраняет помещение просторным, светлым, уютным. А широкие возможности для обработки стеклянного полотна позволяют реализовать тысячи уникальных дизайнерских решений душевой." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: styles$8["descriptions__block-title"], children: "Виды душевых перегородок — что выбрать?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$8.descriptions__text, children: "Изготовим душевые ограждения на заказ — у нас нет готовых моделей, потому что знаем, как важно, чтобы изделий максимально вписывалось именно в вашу ванную. Поэтому сначала мы просим клиента выбрать ограждение по типу конструкции, способу остекления, открывания двери и другим параметрам." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: styles$8["descriptions__block-subtitle"], children: "Основные виды душевых конструкций" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$8.descriptions__text, children: "Мы выполняем задачи любой сложности и готовы к реализации самых нестандартных решений. Но в большинстве случаев к нам обращаются за изготовлением перегородок для душа следующего типа:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: styles$8.descriptions__list, children: showerTypesData.map(({ id, title, text, aria, imgSrc, alt }) => {
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: styles$8.descriptions__item, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      tabIndex: isDescriptionExpanded ? 0 : -1,
                      className: styles$8["descriptions__item-link"],
                      onClick: (e2) => handlePopupOpen(e2, imgSrc, alt),
                      onKeyDown: (e2) => handlePopupOpen(e2, imgSrc, alt),
                      "aria-label": aria,
                      children: [
                        title,
                        " "
                      ]
                    }
                  ),
                  text
                ] }, id);
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: styles$8.descriptions__text, children: [
                "Угловые, П-образные и трапециевидные душевые ограждения из стекла дополняются ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    tabIndex: isDescriptionExpanded ? 0 : -1,
                    className: styles$8["descriptions__item-link"],
                    onClick: (e2) => handlePopupOpen(
                      e2,
                      swingingDoorPopupImg,
                      setTypeOfDoorsAltData("развижными")
                    ),
                    onKeyDown: (e2) => handlePopupOpen(
                      e2,
                      swingingDoorPopupImg,
                      setTypeOfDoorsAltData("развижными")
                    ),
                    "aria-label": "Открыть изображение душевой с раздвижными дверями",
                    children: "раздвижными"
                  }
                ),
                ", или ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    tabIndex: isDescriptionExpanded ? 0 : -1,
                    className: styles$8["descriptions__item-link"],
                    onClick: (e2) => handlePopupOpen(
                      e2,
                      rollingDoorPopupImg,
                      setTypeOfDoorsAltData("откатными")
                    ),
                    onKeyDown: (e2) => handlePopupOpen(
                      e2,
                      rollingDoorPopupImg,
                      setTypeOfDoorsAltData("откатными")
                    ),
                    "aria-label": "Открыть изображение душевой с откатными дверями",
                    children: "откатными "
                  }
                ),
                "дверями. Двери могут быть ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    tabIndex: isDescriptionExpanded ? 0 : -1,
                    className: styles$8["descriptions__item-link"],
                    onClick: (e2) => handlePopupOpen(
                      e2,
                      alcoveDoorPopupImg,
                      setTypeOfDoorsAltData("одинарными")
                    ),
                    onKeyDown: (e2) => handlePopupOpen(
                      e2,
                      alcoveDoorPopupImg,
                      setTypeOfDoorsAltData("одинарными")
                    ),
                    "aria-label": "Открыть изображение душевой с одинарными дверями",
                    children: "одинарными"
                  }
                ),
                "  и ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    tabIndex: isDescriptionExpanded ? 0 : -1,
                    className: styles$8["descriptions__item-link"],
                    onClick: (e2) => handlePopupOpen(
                      e2,
                      alcoveShowerPopupImg,
                      setTypeOfDoorsAltData("двойными")
                    ),
                    onKeyDown: (e2) => handlePopupOpen(
                      e2,
                      alcoveShowerPopupImg,
                      setTypeOfDoorsAltData("двойными")
                    ),
                    "aria-label": "Открыть изображение душевой с двойными дверями",
                    children: "двойными"
                  }
                ),
                "."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: styles$8["descriptions__block-subtitle"], children: "Остекление" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$8.descriptions__text, children: "Основу душевых перегородок составляет стекло. DZ System предлагает более 50 вариантов остекления, но наиболее популярными являются следующие виды стекла:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: styles$8.descriptions__list, children: typeOfGlassesData.map(
                ({ id, title, spanText, aria, imgSrc, alt }) => {
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: styles$8.descriptions__item, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        tabIndex: isDescriptionExpanded ? 0 : -1,
                        className: styles$8["descriptions__item-link"],
                        onClick: (e2) => handlePopupOpen(e2, imgSrc, alt),
                        onKeyDown: (e2) => handlePopupOpen(e2, imgSrc, alt),
                        "aria-label": aria,
                        children: [
                          title,
                          " "
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: spanText })
                  ] }, id);
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$8.descriptions__text, children: "Перегородки и раздвижные душевые двери могут быть дополнены зеркальными, глянцевыми полотнами, а также стеклами с рисунком, выполненным с помощью пескоструйной обработки — все зависит от пожеланий клиента и дизайна интерьера ванной комнаты." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: styles$8["descriptions__block-subtitle"], children: "Профиль и фурнитура" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: styles$8.descriptions__text, children: [
                "Наша компания использует качественный алюминиевый профиль и надежную фурнитуру. Их также можно выбрать по цвету — ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    tabIndex: isDescriptionExpanded ? 0 : -1,
                    className: styles$8["descriptions__item-link"],
                    onClick: (e2) => handlePopupOpen(
                      e2,
                      blackFurniturePopupImg,
                      setTypeOfFurnitureAltData("черного")
                    ),
                    onKeyDown: (e2) => handlePopupOpen(
                      e2,
                      blackFurniturePopupImg,
                      setTypeOfFurnitureAltData("черного")
                    ),
                    "aria-label": "Открыть изображение с фурнитурой черного цвета",
                    children: "черный"
                  }
                ),
                ", под ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    tabIndex: isDescriptionExpanded ? 0 : -1,
                    className: styles$8["descriptions__item-link"],
                    onClick: (e2) => handlePopupOpen(
                      e2,
                      goldFurniturePopupImg,
                      setTypeOfFurnitureAltData("золотистого")
                    ),
                    onKeyDown: (e2) => handlePopupOpen(
                      e2,
                      goldFurniturePopupImg,
                      setTypeOfFurnitureAltData("золотистого")
                    ),
                    "aria-label": "Открыть изображение с фурнитурой золотистого цвета",
                    children: "золото"
                  }
                ),
                ", ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    tabIndex: isDescriptionExpanded ? 0 : -1,
                    className: styles$8["descriptions__item-link"],
                    onClick: (e2) => handlePopupOpen(
                      e2,
                      nickelFurniturePopupImg,
                      setTypeOfFurnitureAltData("никелевого")
                    ),
                    onKeyDown: (e2) => handlePopupOpen(
                      e2,
                      nickelFurniturePopupImg,
                      setTypeOfFurnitureAltData("никелевого")
                    ),
                    "aria-label": "Открыть изображение с фурнитурой цвета никель",
                    children: "никель"
                  }
                ),
                ", ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    tabIndex: isDescriptionExpanded ? 0 : -1,
                    className: styles$8["descriptions__item-link"],
                    onClick: (e2) => handlePopupOpen(
                      e2,
                      bronzeFurniturePopupImg,
                      setTypeOfFurnitureAltData("бронзового")
                    ),
                    onKeyDown: (e2) => handlePopupOpen(
                      e2,
                      bronzeFurniturePopupImg,
                      setTypeOfFurnitureAltData("бронзового")
                    ),
                    "aria-label": "Открыть изображение с фурнитурой бронзового цвета",
                    children: "бронзу"
                  }
                ),
                ", ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    tabIndex: isDescriptionExpanded ? 0 : -1,
                    className: styles$8["descriptions__item-link"],
                    onClick: (e2) => handlePopupOpen(
                      e2,
                      chromeFurniturePopupImg,
                      setTypeOfFurnitureAltData("хромового")
                    ),
                    onKeyDown: (e2) => handlePopupOpen(
                      e2,
                      chromeFurniturePopupImg,
                      setTypeOfFurnitureAltData("хромового")
                    ),
                    "aria-label": "Открыть изображение с фурнитурой цвета хром",
                    children: "хром"
                  }
                ),
                "  и другие металлы."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: styles$8["descriptions__block-subtitle"], children: "Душевые перегородки под заказ от производителя" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$8.descriptions__text, children: "Мы можем изготовить изделий по уже готовому или самостоятельному разработанному проекту с визуализацией, чтобы вы могли оценить результат заранее." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$8.descriptions__text, children: "Вот почему клиенты выбирают нас:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: styles$8.descriptions__list, children: reasonsListData.map(({ id, text }) => {
                return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: styles$8.descriptions__item, children: text }, id);
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$8.descriptions__text, children: "Чтобы заказать стеклянные душевые ограждения для ванной комнаты, позвоните нам или оставьте заявку на сайте. Тогда мы скоро перезвоним и обсудим детали, при необходимости выберем день для выезда мастера на замеры будущей душевой кабины." })
            ]
          }
        )
      ] }),
      !isDescriptionExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: styles$8["descriptions__more-btn"],
          onClick: handleDescriptionExpand,
          "aria-label": "Показать еще 2 вопроса",
          children: [
            "Раскрыть полностью",
            /* @__PURE__ */ jsxRuntimeExports.jsx(SvgExampleMoreImgBtn, { "aria-hidden": "true" })
          ]
        }
      )
    ] }),
    popupData.isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(FocusLockCombination, { returnFocus: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Popup,
      {
        isPopupOpen: popupData.isOpen,
        handlePopupClose,
        activePopupImg: popupData.img,
        activePopupAlt: popupData.alt
      }
    ) })
  ] });
};
const SvgArrowTop = (props) => /* @__PURE__ */ reactExports.createElement("svg", { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ reactExports.createElement("circle", { cx: 256, cy: 256, fill: "#54e360", r: 256, style: {
  fill: "rgb(33, 178, 36)"
} }), /* @__PURE__ */ reactExports.createElement("path", { d: "m370.788 296.423a16 16 0 0 1 -22.627 22.627l-92.161-92.159-92.161 92.159a16 16 0 0 1 -22.627-22.627l103.475-103.472a16 16 0 0 1 22.626 0z", fill: "#fff", style: {
  fill: "rgb(255, 255, 255)"
} }));
const visible = "_visible_1xwm6_210";
const styles$6 = {
  "btn__scroll-top": "_btn__scroll-top_1xwm6_202",
  visible
};
const scrollTop = () => document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
const ScrollTopBtn = () => {
  const [isScrollBtnVisible, setIsScrollBtnVisible] = reactExports.useState(false);
  const animationFrameId = reactExports.useRef(null);
  const handleScroll = () => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    animationFrameId.current = requestAnimationFrame(() => {
      setIsScrollBtnVisible((prev) => {
        const shouldFix = window.scrollY > 500;
        return prev !== shouldFix ? shouldFix : prev;
      });
    });
  };
  reactExports.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      className: `${styles$6["btn__scroll-top"]} ${isScrollBtnVisible ? styles$6.visible : ""}`,
      onClick: scrollTop,
      "aria-label": "Прокрутить страницу вверх",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SvgArrowTop, { "aria-hidden": "true" })
    }
  );
};
const contacts__widget = "_contacts__widget_1n2qr_1";
const styles$5 = {
  "contacts__widget-telegram": "_contacts__widget-telegram_1n2qr_1",
  "contacts__widget-phone": "_contacts__widget-phone_1n2qr_1",
  contacts__widget,
  "contacts__widget-text": "_contacts__widget-text_1n2qr_256"
};
const SvgTelegramContactsWidget = (props) => /* @__PURE__ */ reactExports.createElement("svg", { enableBackground: "new 0 0 32 32", height: "32px", viewBox: "0 0 32 32", width: "32px", xmlSpace: "preserve", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...props }, /* @__PURE__ */ reactExports.createElement("g", { id: "telegram" }, /* @__PURE__ */ reactExports.createElement("g", null, /* @__PURE__ */ reactExports.createElement("path", { d: "M12.408,28.188c-0.865,0-0.717-0.327-1.016-1.148l-2.54-8.362L28.408,7.076L12.408,28.188z", fill: "#ECEFF1" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M12.408,28.188c0.667,0,0.962-0.305,1.333-0.667l3.556-3.458l-4.436-2.674L12.408,28.188z", fill: "#CFD8DC" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M12.861,21.391l10.747,7.94c1.228,0.676,2.111,0.326,2.417-1.139L30.4,7.577    c0.448-1.796-0.684-2.61-1.858-2.078L2.854,15.405c-1.754,0.703-1.742,1.682-0.32,2.117l6.592,2.058l15.261-9.628    c0.721-0.437,1.382-0.202,0.84,0.28L12.861,21.391z", fill: "#FFFFFF" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M24.687,30.163c-0.402,0-0.843-0.132-1.32-0.395l-10.803-7.976c-0.121-0.089-0.195-0.228-0.203-0.378    c-0.007-0.15,0.053-0.295,0.165-0.396L25.322,9.503c0.205-0.185,0.521-0.169,0.706,0.037c0.185,0.205,0.168,0.521-0.037,0.706    l-12.34,11.106l10.254,7.576c0.271,0.145,0.729,0.329,1.055,0.178c0.332-0.152,0.496-0.637,0.576-1.017l4.375-20.617    c0.17-0.681,0.088-1.229-0.215-1.481c-0.231-0.192-0.575-0.206-0.947-0.038L3.033,15.871C2.244,16.188,1.996,16.514,2,16.622    c0.003,0.071,0.173,0.267,0.68,0.422l6.375,1.99l6.999-4.416c0.234-0.146,0.542-0.077,0.689,0.156    c0.147,0.233,0.078,0.542-0.156,0.689l-7.194,4.539C9.269,20.08,9.116,20.1,8.977,20.057l-6.592-2.058    c-1.17-0.358-1.37-0.99-1.384-1.335c-0.02-0.473,0.253-1.157,1.667-1.723l25.695-9.908c0.697-0.318,1.445-0.25,1.974,0.191    c0.613,0.511,0.813,1.413,0.549,2.474l-4.371,20.598c-0.184,0.878-0.566,1.457-1.137,1.719    C25.163,30.114,24.933,30.163,24.687,30.163z", fill: "#455A64" })), /* @__PURE__ */ reactExports.createElement("path", { d: "M24.687,30.163c-0.402,0-0.843-0.132-1.32-0.395l-6.72-4.959c-0.222-0.164-0.27-0.478-0.105-0.699   c0.164-0.222,0.478-0.27,0.699-0.105l6.664,4.923c0.271,0.145,0.729,0.329,1.055,0.178c0.332-0.152,0.496-0.637,0.576-1.017   l4.375-20.617c0.17-0.681,0.088-1.229-0.215-1.481c-0.231-0.192-0.575-0.206-0.947-0.038L3.033,15.871   C2.244,16.188,1.996,16.514,2,16.622c0.003,0.071,0.173,0.267,0.68,0.422l6.594,2.058c0.158,0.049,0.281,0.174,0.33,0.332   l2.267,7.461c0.061,0.167,0.108,0.333,0.149,0.477c0.032,0.114,0.072,0.256,0.099,0.298c-0.004-0.005,0.076,0.019,0.289,0.02   c0.447,0,0.617-0.167,0.957-0.498l1.66-1.614c0.198-0.194,0.514-0.188,0.707,0.01c0.192,0.198,0.188,0.515-0.01,0.707L14.09,27.88   c-0.402,0.393-0.828,0.809-1.682,0.809c-0.98,0-1.178-0.434-1.351-1.046c-0.035-0.124-0.075-0.267-0.135-0.432l-2.198-7.233   l-6.339-1.979c-1.17-0.358-1.37-0.99-1.384-1.335c-0.02-0.473,0.253-1.157,1.667-1.723l25.695-9.908   c0.697-0.318,1.445-0.25,1.974,0.191c0.613,0.511,0.813,1.413,0.549,2.474l-4.371,20.598c-0.184,0.878-0.566,1.457-1.137,1.719   C25.163,30.114,24.933,30.163,24.687,30.163z", fill: "#455A64" }), /* @__PURE__ */ reactExports.createElement("g", null, /* @__PURE__ */ reactExports.createElement("g", null, /* @__PURE__ */ reactExports.createElement("g", null, /* @__PURE__ */ reactExports.createElement("g", null, /* @__PURE__ */ reactExports.createElement("g", null, /* @__PURE__ */ reactExports.createElement("g", null, /* @__PURE__ */ reactExports.createElement("path", { d: "M18.5,14c0,0.275-0.225,0.5-0.5,0.5l0,0c-0.275,0-0.5-0.225-0.5-0.5l0,0c0-0.275,0.225-0.5,0.5-0.5         l0,0C18.275,13.5,18.5,13.725,18.5,14L18.5,14z", fill: "#455A64" })))))))));
const SvgCallContactsWidget = (props) => /* @__PURE__ */ reactExports.createElement("svg", { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ reactExports.createElement("path", { fill: "white", d: "M323.89 310.055c-34.78 19.252-78.72 13.044-106.855-15.09-28.132-28.131-34.347-72.075-15.113-106.861l5.827-10.54L74.125 43.94 54.627 63.37C19.4 98.595 0 145.611 0 195.756c0 50.144 19.4 97.168 54.627 132.41l129.206 129.206C219.06 492.6 266.08 512 316.232 512s97.172-19.4 132.418-54.646l19.41-19.477-133.627-133.66zM206.46 434.745L77.258 305.541c-59.463-59.488-60.496-155.616-3.123-216.335l94.418 94.418c-8.529 20.043-11.617 42.388-8.715 64.102 3.563 26.655 15.516 50.815 34.569 69.867 19.055 19.056 43.215 31.008 69.87 34.566 21.717 2.9 44.06-.196 64.102-8.735l94.416 94.439c-60.75 57.394-156.862 56.353-216.334-3.118zm172.402-183.221c14.915-33.671 7.444-73.771-18.592-99.785-26.038-26.037-66.14-33.51-99.795-18.602l-12.96-29.259c22.225-9.846 46.666-12.798 70.682-8.537 24.598 4.363 46.97 16.04 64.695 33.766 17.724 17.706 29.401 40.076 33.766 64.685 4.261 24.02 1.308 48.466-8.538 70.693zM512 215.285c0 15.5-1.662 30.995-4.999 46.158l-31.253-6.877a184.704 184.704 0 004.334-39.673c.01-47.999-18.86-94.393-53.714-129.267-44.438-44.412-107.592-62.868-168.934-49.374L250.557 5c34.815-7.662 71.375-6.498 105.726 3.365 34.925 10.028 66.984 28.92 92.713 54.633a.042.042 0 00.006.007c25.714 25.73 44.606 57.788 54.633 92.713A216.1 216.1 0 01512 215.285z" }));
const ContactsWidget = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$5.contacts__widget, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        className: styles$5["contacts__widget-telegram"],
        href: "#",
        "aria-label": "Открыть чат в Telegram",
        target: "_blank",
        rel: "noopener noreferrer",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SvgTelegramContactsWidget, { "aria-hidden": "true" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$5["contacts__widget-text"], children: "Написать" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        className: styles$5["contacts__widget-phone"],
        href: "tel:+375447625856",
        "aria-label": "Связаться с нами по номеру телефона",
        rel: "noopener noreferrer",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SvgCallContactsWidget, { "aria-hidden": "true" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$5["contacts__widget-text"], children: "Позвонить" })
        ]
      }
    )
  ] });
};
const MainPage = () => {
  const location = useLocation();
  const currentUrl = `https://garderobsystem.ru${location.pathname}`;
  const ogImage = "https://W0x3R.github.io/Shower-Partitions-APP/og-image.jpg";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Главная | Душевые перегородки по индивидуальным размерам на заказ в Гомеле" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "description",
          content: "Душевые перегородки на заказ по индивидуальным размерам в Гомеле: замер, изготовление, установка. Современный дизайн, закаленное стекло(8-10мм), надежная фурнитура, гарантия!"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "keywords",
          content: "DZ System,душевые перегородки Гомель, угловая душевая, перегородки для ванной,шторка в ванную, стеклянные конструкции, изготовление на заказ, монтаж и установка"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          property: "og:title",
          content: "Главная | Душевые перегородки по индивидуальным размерам на заказ в\r\n					Гомеле"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          property: "og:description",
          content: "Душевые перегородки на заказ по индивидуальным размерам в Гомеле: замер, изготовление, установка. Современный дизайн, закаленное стекло(8-10мм), надежная фурнитура, гарантия!"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:image", content: ogImage }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: currentUrl }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "twitter:title",
          content: "Главная | Душевые перегородки по индивидуальным размерам на заказ в\r\n					Гомеле"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Душевые перегородки на заказ по индивидуальным размерам в Гомеле: замер, изготовление, установка. Современный дизайн, закаленное стекло(8-10мм), надежная фурнитура, гарантия!"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:image", content: ogImage }),
      isMobile() ? /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "preload", href: smallBg, as: "image", type: "image/webp" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "preload", href: bigBg, as: "image", type: "image/webp" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Products, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Examples, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Price$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Questions, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Standards, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ShowerPartitionsDescription, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollTopBtn, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactsWidget, {})
  ] });
};
const breadcrumb = "_breadcrumb_ns9mu_1";
const breadcrumb__list = "_breadcrumb__list_ns9mu_4";
const breadcrumb__link = "_breadcrumb__link_ns9mu_15";
const styles$4 = {
  breadcrumb,
  breadcrumb__list,
  breadcrumb__link,
  "breadcrumb__current-page": "_breadcrumb__current-page_ns9mu_34"
};
const Breadcrumbs = ({ currentPage }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: styles$4.breadcrumb, "aria-label": "breadcrumb", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: styles$4.breadcrumb__list, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: styles$4.breadcrumb__item, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        className: styles$4.breadcrumb__link,
        to: "/",
        "aria-label": "Перейти на главную страницу",
        children: "Главная"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "❙" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "li",
      {
        className: styles$4["breadcrumb__current-page"],
        "aria-label": `Текущая страница - ${currentPage}`,
        children: currentPage
      }
    )
  ] }) }) });
};
const carImg = "/Shower-Partitions-APP/assets/car-BhF4MJCj.webp";
const delivery__text = "_delivery__text_1jd9n_1";
const delivery__title = "_delivery__title_1jd9n_24";
const delivery__subtitle = "_delivery__subtitle_1jd9n_48";
const delivery = "_delivery_1jd9n_1";
const delivery__wrapper = "_delivery__wrapper_1jd9n_82";
const delivery__img = "_delivery__img_1jd9n_101";
const styles$3 = {
  delivery__text,
  delivery__title,
  delivery__subtitle,
  delivery,
  delivery__wrapper,
  "delivery__content-wrapper": "_delivery__content-wrapper_1jd9n_93",
  delivery__img
};
const Delivery = (children) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: styles$3.delivery, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: styles$3.delivery__title, children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Оплата и доставка" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3.delivery__wrapper, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3["delivery__content-wrapper"], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            className: styles$3.delivery__img,
            src: carImg,
            width: "100%",
            alt: "",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles$3.delivery__subtitle, children: "Доставка и монтаж:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$3.delivery__text, children: "Мы предлагаем доставку стеклянных душевых перегородок в Гомеле и ближайших регионах. Доставка и монтаж на транспорте монтажниками, больше не нужно ждать доставку, а потом когда смогут приехать монтажники." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles$3.delivery__subtitle, children: "Оплата" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: styles$3.delivery__text, children: [
          "Любой удобный способ. Оплата наличными, банковской картой, по счету для Юридических лиц, перевод через СПБ, QR-код, по ссылке для оплаты.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Доплата за изделие производится в момент доставки."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles$3.delivery__subtitle, children: "Сроки доставки" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: styles$3.delivery__text, children: [
          "Средний срок доставки — ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "3-7 рабочих дней" }),
          ", в зависимости от загруженности производства и региона доставки."
        ] })
      ] }),
      children.aside
    ] })
  ] }) });
};
const aside = "_aside_1i3gq_202";
const sticky = "_sticky_1i3gq_219";
const aside__title = "_aside__title_1i3gq_223";
const aside__link = "_aside__link_1i3gq_231";
const styles$2 = {
  aside,
  sticky,
  aside__title,
  aside__link
};
const AsideInfoWidget = ({ sticky: sticky2 }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: `${styles$2.aside} ${sticky2 ? styles$2.sticky : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: styles$2.aside__title, children: "Каталог продукции и фурнитуры" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        className: styles$2.aside__link,
        to: "/#products",
        "aria-label": "Посмотреть каталог продукции и фурнитуры",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Посмотреть" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: clickHand, alt: "" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: styles$2.aside__title, children: "Примеры душевых перегородок в интерьере" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        className: styles$2.aside__link,
        to: "/#examples",
        "aria-label": "Посмотреть примеры душевых перегородок в интерьере",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Посмотреть" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: clickHand, alt: "" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: styles$2.aside__title, children: "Связаться с нами по телефону" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        className: styles$2.aside__link,
        href: "tel:+375447625856",
        "aria-label": "Связаться с нами по номеру телефона",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Позвонить" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: clickHand, alt: "" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: styles$2.aside__title, children: "Связаться с нами в Viber" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        className: styles$2.aside__link,
        href: "#",
        rel: "noopener noreferrer",
        "aria-label": "Связаться с нами в Viber",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Связаться" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: clickHand, alt: "" })
        ]
      }
    )
  ] });
};
const DeliveryPage = () => {
  const location = useLocation();
  const currentUrl = `https://garderobsystem.ru${location.pathname}`;
  const ogImage = "https://W0x3R.github.io/Shower-Partitions-APP/delivery-og-img.jpg";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Доставка и оплата | Информация о доставке душевых перегородок на заказ в Гомеле" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "description",
          content: "Условия доставки и оплаты душевых перегородок по индивидуальным размерам в Гомеле. Удобные способы оплаты, быстрая доставка и качественный сервис!"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "keywords",
          content: "доставка душевых перегородок, оплата перегородок, стеклянные душевые перегородки Гомель, купить душевые перегородки"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          property: "og:title",
          content: "Доставка и оплата | Информация о доставке душевых перегородок на заказ\r\n					в Гомеле"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          property: "og:description",
          content: "Узнайте условия доставки и оплаты стеклянных душевых перегородок на заказ в Гомеле. Быстрая доставка, удобные способы оплаты и качественный сервис!"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:image", content: ogImage }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: currentUrl }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "twitter:title",
          content: "Доставка и оплата | Информация о доставке душевых перегородок на заказ\r\n					в Гомеле"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Быстрая доставка душевых перегородок в Гомеле. Удобные способы оплаты, современный дизайн и гарантия качества!"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:image", content: ogImage }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "preload", href: carImg, as: "image", type: "image/webp" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { currentPage: "Оплата и доставка" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Delivery, { aside: /* @__PURE__ */ jsxRuntimeExports.jsx(AsideInfoWidget, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactsWidget, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollTopBtn, {})
  ] });
};
const priceDescriptionData = [
  {
    id: "price_0",
    text: `Сегодня мы поговорим о стоимости услуг доставки и монтажа наших изделий. Если вы планируете приобрести душевые перегородки от компании DZ System, то эта информация будет для вас очень полезна.`
  },
  {
    id: "price_1",
    text: `Стоимость доставки и монтажа наших изделий зависит от многих факторов. Во-первых, это расстояние от склада до места установки. Чем дальше находится ваш дом или офис, тем выше будет стоимость доставки.`
  },
  {
    id: "price_2",
    text: `Во-вторых, на стоимость монтажа влияет сложность работ. Если вам нужно установить перегородку в нестандартном месте или с необычной конструкцией, то это может повлиять на цену.`
  },
  {
    id: "price_3",
    text: `Также стоит учитывать, что стоимость доставки и монтажа может зависеть от выбранной вами компании. Некоторые компании предлагают более выгодные условия, чем другие. Поэтому перед тем, как сделать заказ,обязательно сравните цены разных компаний.`
  },
  {
    id: "price_4",
    text: `Но не стоит забывать, что качество работ также играет важную роль. Лучше заплатить немного больше, но получить качественный монтаж, который прослужит вам долгие годы.`
  },
  {
    id: "price_5",
    text: `В общем, стоимость доставки и монтажа наших изделий зависит от многих факторов. Но если вы выберете надежную компанию, то можете быть уверены в качестве работ и получить желаемый результат.`
  }
];
const priceTableData = [
  {
    id: "table_0",
    name: "Доставка Гомель",
    cost: "0р",
    extraInfo: "+1р/км за городом"
  },
  {
    id: "table_1",
    name: "Замер при заказе",
    cost: "0р",
    extraInfo: "+1р/км за городом"
  },
  {
    id: "table_2",
    name: "Замер без заказа",
    cost: "120р",
    extraInfo: "+1р/км за городом"
  },
  {
    id: "table_3",
    name: "Монтаж шторки в ванную",
    cost: "От 180р",
    extraInfo: ""
  },
  {
    id: "table_4",
    name: "Монтаж душевой перегородки",
    cost: "От 380р",
    extraInfo: ""
  },
  {
    id: "table_5",
    name: "Монтаж душевой в нишу",
    cost: "От 280р",
    extraInfo: ""
  },
  {
    id: "table_6",
    name: "Монтаж угловой душевой",
    cost: "От 380р",
    extraInfo: ""
  },
  {
    id: "table_7",
    name: "Монтаж трапециевидной душевой",
    cost: "От 380р",
    extraInfo: ""
  },
  {
    id: "table_8",
    name: "Монтаж душевой кабины",
    cost: "От 380р",
    extraInfo: ""
  }
];
const cost__description = "_cost__description_fui8v_1";
const cost__title = "_cost__title_fui8v_24";
const cost__subtitle = "_cost__subtitle_fui8v_48";
const cost = "_cost_fui8v_1";
const cost__table = "_cost__table_fui8v_82";
const cost__text = "_cost__text_fui8v_177";
const styles$1 = {
  cost__description,
  cost__title,
  cost__subtitle,
  cost,
  cost__table,
  "cost__table-head": "_cost__table-head_fui8v_99",
  "cost__table-body": "_cost__table-body_fui8v_139",
  cost__text
};
const Price = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: styles$1.cost, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: styles$1.cost__title, children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Стоимость" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: styles$1.cost__table, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: styles$1["cost__table-head"], children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Наименование работ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Стоимость" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Доп. информация" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: styles$1["cost__table-body"], children: priceTableData.map(({ id, name, cost: cost2, extraInfo }) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: cost2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: extraInfo })
        ] }, id);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: styles$1.cost__text, children: [
      "*Стоимость может отличаться от указанной на сайте.",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Точную стоимость уточняйте" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles$1.cost__subtitle, children: "Стоимость услуг доставки и монтажа: все, что вам нужно знать о наших изделиях" }),
    priceDescriptionData.map(({ id, text }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$1.cost__description, children: text }, id);
    })
  ] }) });
};
const ServicesCostPage = () => {
  const location = useLocation();
  const currentUrl = `https://garderobsystem.ru${location.pathname}`;
  const ogImage = "https://W0x3R.github.io/Shower-Partitions-APP/price-og-img.jpg";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Стоимость услуг | Цены на душевые перегородки в Гомеле" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "description",
          content: "Узнайте стоимость замера, доставки и монтажа стеклянных душевых перегородок на заказ в Гомеле. Демократичные цены, бесплатный замер при заказе и качественный сервис!"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "keywords",
          content: "стоимость душевых перегородок, цена замера, стоимость доставки душевых перегородок, купить душевые перегородки"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          property: "og:title",
          content: "Стоимость услуг | Цены на душевые перегородки в Гомеле"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          property: "og:description",
          content: "Посмотрите актуальные цены на замер, доставку и установку душевых перегородок на заказ в Гомеле. Гарантированное качество и индивидуальный подход!"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:image", content: ogImage }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: currentUrl }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "twitter:title",
          content: "Стоимость услуг | Цены на душевые перегородки в Гомеле"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Посмотрите цены на установку, замер и доставку стеклянных душевых перегородок в Гомеле. Честные расценки и качественный сервис!"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:image", content: ogImage })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { currentPage: "Стоимость услуг" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Price, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactsWidget, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollTopBtn, {})
  ] });
};
const articleBg = "/Shower-Partitions-APP/assets/bg-BnSjvzF8.webp";
const article__list = "_article__list_1x2n2_24";
const article__item = "_article__item_1x2n2_40";
const article__title = "_article__title_1x2n2_60";
const article = "_article_1x2n2_1";
const article__img = "_article__img_1x2n2_150";
const article__wrapper = "_article__wrapper_1x2n2_155";
const article__block = "_article__block_1x2n2_1";
const styles = {
  "article__block-text": "_article__block-text_1x2n2_1",
  article__list,
  article__item,
  article__title,
  "article__block-title": "_article__block-title_1x2n2_84",
  "article__block-subtitle": "_article__block-subtitle_1x2n2_103",
  article,
  "article__title-wrapper": "_article__title-wrapper_1x2n2_137",
  article__img,
  article__wrapper,
  article__block
};
const constructionsData = [
  {
    id: "constructions_0",
    text: `Надежность — изделие изготавливается из закаленного стекла,которое устойчиво к температурным перепадам, влаге. Его механическая прочность выше в несколько раз по сравнению с конструкциями из обычного стекла.`
  },
  {
    id: "constructions_1",
    text: `Безопасность — даже если приложить большое механическое воздействие, и каленое стекло разобьется, оно расколется на осколки с тупыми гранями. Они являются безопасными для человека.`
  },
  {
    id: "constructions_2",
    text: `Устойчивость к грибку — стекло не является питательной средой для плесени, других грибов, которые любят жить во влажных помещениях.`
  },
  {
    id: "constructions_3",
    text: `Простой уход — он заключается лишь в удалении оставленных отпечатков пальцев, следов от брызг, которые видны только на глянцевой поверхности стекла.`
  },
  {
    id: "constructions_4",
    text: `Компактность — перегородка из стекла подходит даже для маленькой ванной, так как она занимает мало места и не загромождает пространство, делает его визуально более просторным, светлым, уютным.`
  }
];
const typesData = [
  {
    id: "0_types",
    text: `Линейные — это ограждения, устанавливаемые в одну линию. Они могут отгородить от остальной части помещения ванну или душевую зону, которая обычно в этом случае имеет 2 или 3 стены, принадлежащие самой ванной комнате.`
  },
  {
    id: "1_types",
    text: `Угловые — это перегородки с двумя полотнами, устанавливаемые в углу помещения. Часто угловые ограждения ставят с поддонами или трапами.`
  },
  {
    id: "2_types",
    text: `П-образные — это ограждающие конструкции в форме буквы «П».Состоят из 3 стеклянных полотен, установка которых происходит у одной из стен ванной (не в углу).`
  }
];
const openingTypes = [
  {
    id: "openingTypes_0",
    text: `	Распашными. Обычно дверь открывается «на себя». Поэтому она занимает дополнительное пространство. Это удобно, но данное решение подходит только для ванных комнат с достаточно большой площадью.`
  },
  {
    id: "openingTypes_1",
    text: `Раздвижными. Это такие же двери, как у шкафов-купе — они раздвигаются в стороны по направляющим рельсам, установленным сверху или снизу (либо и там, и там). Раздвижной механизм не требует дополнительного пространства для распахивания дверных створок, а потом его можно эксплуатировать. Это решение подходит для любых, в том числе маленьких ванных.`
  },
  {
    id: "openingTypes_2",
    text: `Гармошкой. Представляют собой дверцу, которая складывается как гармошка — она тоже не занимает много места, и может использоваться в небольших по площади помещениях.`
  }
];
const glassesTypes = [
  {
    id: "glassesTypes_0",
    text: `Прозрачное — пропускает свет и не скрывает пространство душевой.Сохраняет единство пространства и стиля.`
  },
  {
    id: "glassesTypes_1",
    text: `Матовое — пропускает свет, предварительно рассеивая его. Поэтому за ограждением не видно находящегося внутри человека — только его силуэт.`
  },
  {
    id: "glassesTypes_2",
    text: `Осветленное — обесцвеченное, а потому пропускающее максимум света и не искажающее изображение. Тоже является прозрачным.`
  },
  {
    id: "glassesTypes_3",
    text: `Цветное — окрашенное в некоторый цвет. Оно остается прозрачным, но в то же время цветным. Стекло может быть окрашено в массе, также необходимый цвет ему можно придать с помощью тонировки пленкой.`
  },
  {
    id: "glassesTypes_4",
    text: `С рисунком, узором, фото — декоративные элементы размещаются во время пескоструйной обработки или методом фотопечати.`
  },
  {
    id: "glassesTypes_5",
    text: `Гладкое (обычное) или фактурной — например, с рифленой поверхностью.`
  }
];
const usefulTipsData = [
  {
    id: "usefulTips_0",
    text: `Толщина стекла. Чем оно толще, тем прочнее. Идеально будет 8–10 мм.`
  },
  {
    id: "usefulTips_1",
    text: `Качество фурнитуры. Она определяет долговечность перегородки для ванной.`
  },
  {
    id: "usefulTips_2",
    text: `Площадь помещения. Использование перегородок с распашными дверями рационально только в больших ванных комнатах, в других лучшим выбором станет гармошка или раздвижной механизм.`
  },
  {
    id: "usefulTips_3",
    text: `Место, отведенное под душевую. В зависимости от этого может быть выбрана линейная, угловая или П-образная конструкция.`
  },
  {
    id: "usefulTips_4",
    text: `Дизайн интерьера. Алюминиевый профиль и фурнитуру, остекление нужно выбирать под уже существующий стиль, чтобы они хорошо сочетались.`
  },
  {
    id: "usefulTips_5",
    text: `Дизайн интерьера. Алюминиевый профиль и фурнитуру, остекление нужно выбирать под уже существующий стиль, чтобы они хорошо сочетались.`
  }
];
const reasonsToContactData = [
  {
    id: "reasonsToContact_0",
    text: `10–15 суток — таков срок изготовления стеклянного душевого ограждения.`
  },
  {
    id: "reasonsToContact_1",
    text: `1 день — столько времени нам нужно для доставки и монтажа перегородки.`
  },
  {
    id: "reasonsToContact_2",
    text: `1,5 года — это срок гарантии на материалы и профиль, так как мы уверены в их высоком качестве.`
  },
  {
    id: "reasonsToContact_3",
    text: `Аккуратность — наши специалисты выполняют монтаж, сохранив целостность отделки стен, пола и потолка, поддона и других элементов.`
  },
  {
    id: "reasonsToContact_4",
    text: `Доступные цены — мы являемся производителями перегородок, а не перекупщиками.`
  },
  {
    id: "reasonsToContact_5",
    text: `	Максимальная ориентированность на клиента — стеклянная перегородка для душевой изготавливается по индивидуальным размерам с учетом пожеланий заказчика.`
  }
];
const Article = (children) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: styles.article, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles["article__title-wrapper"], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: styles.article__title, children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Душевая перегородка из стекла — советы по выбору" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: styles.article__img, src: articleBg, alt: "" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles["article__wrapper"], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles["article__block"], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles["article__block-title"], children: "Перегородки из стекла для душа — как выбрать" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles["article__block-text"], children: "Все чаще вместо душевой кабины устанавливается трап — сливная система в полу — и защитная перегородка, которую обычно изготавливают из стекла. В этой статье поговорим о плюсах такого решения для ванной комнаты и поможем выбрать идеальную стеклянную перегородку для вашего душа. Для этого расскажем об основных видах душевых перегородок и их особенностях." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles["article__block-title"], children: "Стеклянные перегородки в душ — функции и преимущества" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles["article__block-text"], children: "Стеклянная перегородка предназначена для защиты ванной комнаты от брызг во время принятия душа — она должна защищать другие стены, пол, системы хранения вещей от воды. Она также служит декоративным элементом ванной комнаты, который можно вписать в любой стиль дизайна. Перечислим главные преимущества данной конструкции:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: styles.article__list, children: constructionsData.map(({ id, text }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: styles.article__item, children: text }, id);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles["article__block-text"], children: "От душевой кабины ограждение отличается тем, что приобретается и устанавливается отдельно от слива и самого душа, смесителя. Подобрать перегородку, хорошо вписывающуюся в уже существующий интерьер ванной комнаты проще, так как она визуально сохраняет единство пространства и стиля. Однако в отличие от полноценного душевого уголка или кабины стеклянное ограждение менее функционально, но при этом оно не загромождает помещение, сохраняет ощущение легкости и позволяет организовать душевую зону со стандартным набором функций." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles["article__block-title"], children: "Какими бывают перегородки" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles["article__block-text"], children: "Стеклянная душевая перегородка может отличаться по конструкции, форме, типу открывания двери и виду остекления. Рассказываем о возможных вариантах душевого ограждения." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: styles["article__block-subtitle"], children: "По конструкции" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles["article__block-text"], children: "По типу конструкции выделяют перегородки:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: styles.article__list, children: typesData.map(({ id, text }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: styles.article__item, children: text }, id);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles["article__block-text"], children: "В последнем случае душевая перегородка может быть квадратной, прямоугольной и даже трапециевидной." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: styles["article__block-subtitle"], children: "По типу открывания двери" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles["article__block-text"], children: "Душевые ограждения могут быть с дверями и без них (статичные перегородки). У статичных моделей одна сторона остается свободной для входа. В остальных случаях предусматривают двери, которые могут быть:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: styles.article__list, children: openingTypes.map(({ id, text }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: styles.article__item, children: text }, id);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: styles["article__block-subtitle"], children: "По типу остекления" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles["article__block-text"], children: "Перегородка для ванной может быть исполнена из следующих видов стекла:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: styles.article__list, children: glassesTypes.map(({ id, text }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: styles.article__item, children: text }, id);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles["article__block-text"], children: "Тип остекления подбирается с учетом стиля дизайна ванной комнаты, личных пожеланий клиента. Часто используют стеклянные блоки, панели для реализации самых сложных дизайнерских идей." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: styles["article__block-subtitle"], children: "На что обращать внимание при выборе перегородки в ванную" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles["article__block-text"], children: "При выборе перегородки из стекла для душевой обращайте внимание на следующие параметры:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: styles.article__list, children: usefulTipsData.map(({ id, text }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: styles.article__item, children: text }, id);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles["article__block-text"], children: "Также берите в учет, какое количество людей может одновременно находиться в душе. Если только один человек, возможен монтаж любой перегородки, в том числе линейной статичной из прозрачного стекла с открытым входом. В других случаях лучше отдать предпочтение угловым или П-образным конструкциям из непрозрачных материалов — матового или тонированного стекла, с распечатанным фото, узорами и другими способами обработки, позволяющими сделать полотно непрозрачным." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: styles["article__block-title"], children: "Изготовление перегородок из стекла под заказ в Гомеле" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles["article__block-text"], children: "В Гомеле заказать изготовление душевых перегородок по индивидуальным размерам можно в нашей компании DZ System. Вот почему стоит обратиться к нам:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: styles.article__list, children: reasonsToContactData.map(({ id, text }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: styles.article__item, children: text }, id);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles["article__block-text"], children: "Чтобы оформить заказ на изготовление стеклянной перегородки в ванную, позвоните нам или оставьте заявку на сайте компании на обратный звонок. Тогда мы скоро перезвоним и выберем день для выезда замерщика на дом." })
      ] }),
      children.aside
    ] })
  ] }) });
};
const ArticlePage = () => {
  const location = useLocation();
  const currentUrl = `https://garderobsystem.ru${location.pathname}`;
  const ogImage = "https://W0x3R.github.io/Shower-Partitions-APP/article-og-img.jpg";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Полезная информация | Как выбрать стеклянную душевую перегородку?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "description",
          content: "Как выбрать стеклянную душевую перегородку? Подробный гид по выбору, установке и уходу. Читай советы экспертов и выбирай лучшую модель!"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "keywords",
          content: "выбор душевых перегородок, стеклянные перегородки для ванной, душевая перегородка советы, купить стеклянную перегородку"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          property: "og:title",
          content: "Полезная информация | Как выбрать стеклянную душевую перегородку?"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          property: "og:description",
          content: "Узнай, какие стеклянные душевые перегородки подойдут именно тебе! Советы по выбору, установке и уходу от профессионалов."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:image", content: ogImage }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: currentUrl }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "twitter:title",
          content: "Полезная информация | Как выбрать стеклянную душевую перегородку?"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Узнай, какие стеклянные душевые перегородки подойдут именно тебе! Советы по выбору, установке и уходу от профессионалов."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:image", content: ogImage }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "preload", href: articleBg, as: "image", type: "image/webp" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { currentPage: "Душевая перегородка из стекла — советы по выбору" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Article, { aside: /* @__PURE__ */ jsxRuntimeExports.jsx(AsideInfoWidget, { sticky: true }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactsWidget, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollTopBtn, {})
  ] });
};
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(BrowserRouter, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Routes, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, {}), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { index: true, element: /* @__PURE__ */ jsxRuntimeExports.jsx(MainPage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "delivery", element: /* @__PURE__ */ jsxRuntimeExports.jsx(DeliveryPage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "price", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesCostPage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "article", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ArticlePage, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "App" })
  ] });
}
clientExports.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}));
