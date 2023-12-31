(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5224, 1664, 5063],
  {
    71210: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, o, n) {
          return !1;
        });
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    48418: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = o(39274).Z;
      o(25654).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = o(12845).Z,
        u = o(38774).Z,
        a = r(o(67294)),
        l = o(76273),
        f = o(22725),
        c = o(63462),
        i = o(21018),
        s = o(57190),
        p = o(71210),
        d = o(98684),
        v = {};
      function y(e, t, o, n) {
        if (e && l.isLocalURL(t)) {
          Promise.resolve(e.prefetch(t, o, n)).catch(function (e) {
            0;
          });
          var r =
            n && "undefined" !== typeof n.locale ? n.locale : e && e.locale;
          v[t + "%" + o + (r ? "%" + r : "")] = !0;
        }
      }
      var b = a.default.forwardRef(function (e, t) {
        var o,
          r = e.href,
          b = e.as,
          h = e.children,
          g = e.prefetch,
          O = e.passHref,
          C = e.replace,
          _ = e.shallow,
          j = e.scroll,
          m = e.locale,
          M = e.onClick,
          x = e.onMouseEnter,
          P = e.onTouchStart,
          L = e.legacyBehavior,
          R = void 0 === L ? !0 !== Boolean(!1) : L,
          w = u(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (o = h),
          !R ||
            ("string" !== typeof o && "number" !== typeof o) ||
            (o = a.default.createElement("a", null, o));
        var E = !1 !== g,
          k = a.default.useContext(c.RouterContext),
          S = a.default.useContext(i.AppRouterContext);
        S && (k = S);
        var T,
          D = a.default.useMemo(
            function () {
              var e = n(l.resolveHref(k, r, !0), 2),
                t = e[0],
                o = e[1];
              return { href: t, as: b ? l.resolveHref(k, b) : o || t };
            },
            [k, r, b]
          ),
          I = D.href,
          U = D.as,
          Z = a.default.useRef(I),
          B = a.default.useRef(U);
        R && (T = a.default.Children.only(o));
        var N = R ? T && "object" === typeof T && T.ref : t,
          A = n(s.useIntersection({ rootMargin: "200px" }), 3),
          H = A[0],
          K = A[1],
          G = A[2],
          q = a.default.useCallback(
            function (e) {
              (B.current === U && Z.current === I) ||
                (G(), (B.current = U), (Z.current = I)),
                H(e),
                N &&
                  ("function" === typeof N
                    ? N(e)
                    : "object" === typeof N && (N.current = e));
            },
            [U, N, I, G, H]
          );
        a.default.useEffect(
          function () {
            var e = K && E && l.isLocalURL(I),
              t = "undefined" !== typeof m ? m : k && k.locale,
              o = v[I + "%" + U + (t ? "%" + t : "")];
            e && !o && y(k, I, U, { locale: t });
          },
          [U, I, K, m, E, k]
        );
        var z = {
          ref: q,
          onClick: function (e) {
            R || "function" !== typeof M || M(e),
              R &&
                T.props &&
                "function" === typeof T.props.onClick &&
                T.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, o, n, r, u, f, c, i, s) {
                  if (
                    "A" !== e.currentTarget.nodeName.toUpperCase() ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      l.isLocalURL(o))
                  ) {
                    e.preventDefault();
                    var p = function () {
                      "beforePopState" in t
                        ? t[r ? "replace" : "push"](o, n, {
                            shallow: u,
                            locale: c,
                            scroll: f,
                          })
                        : t[r ? "replace" : "push"](o, {
                            forceOptimisticNavigation: !s,
                          });
                    };
                    i ? a.default.startTransition(p) : p();
                  }
                })(e, k, I, U, C, _, j, m, Boolean(S), E);
          },
          onMouseEnter: function (e) {
            R || "function" !== typeof x || x(e),
              R &&
                T.props &&
                "function" === typeof T.props.onMouseEnter &&
                T.props.onMouseEnter(e),
              (!E && S) || (l.isLocalURL(I) && y(k, I, U, { priority: !0 }));
          },
          onTouchStart: function (e) {
            R || "function" !== typeof P || P(e),
              R &&
                T.props &&
                "function" === typeof T.props.onTouchStart &&
                T.props.onTouchStart(e),
              (!E && S) || (l.isLocalURL(I) && y(k, I, U, { priority: !0 }));
          },
        };
        if (!R || O || ("a" === T.type && !("href" in T.props))) {
          var F = "undefined" !== typeof m ? m : k && k.locale,
            J =
              k &&
              k.isLocaleDomain &&
              p.getDomainLocale(U, F, k.locales, k.domainLocales);
          z.href = J || d.addBasePath(f.addLocale(U, F, k && k.defaultLocale));
        }
        return R
          ? a.default.cloneElement(T, z)
          : a.default.createElement("a", Object.assign({}, w, z), o);
      });
      (t.default = b),
        ("function" === typeof t.default ||
          ("object" === typeof t.default && null !== t.default)) &&
          "undefined" === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    57190: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = o(39274).Z;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            o = e.rootMargin,
            c = e.disabled || !a,
            i = n(r.useState(!1), 2),
            s = i[0],
            p = i[1],
            d = n(r.useState(null), 2),
            v = d[0],
            y = d[1];
          r.useEffect(
            function () {
              if (a) {
                if (c || s) return;
                if (v && v.tagName) {
                  var e = (function (e, t, o) {
                    var n = (function (e) {
                        var t,
                          o = {
                            root: e.root || null,
                            margin: e.rootMargin || "",
                          },
                          n = f.find(function (e) {
                            return e.root === o.root && e.margin === o.margin;
                          });
                        if (n && (t = l.get(n))) return t;
                        var r = new Map(),
                          u = new IntersectionObserver(function (e) {
                            e.forEach(function (e) {
                              var t = r.get(e.target),
                                o = e.isIntersecting || e.intersectionRatio > 0;
                              t && o && t(o);
                            });
                          }, e);
                        return (
                          (t = { id: o, observer: u, elements: r }),
                          f.push(o),
                          l.set(o, t),
                          t
                        );
                      })(o),
                      r = n.id,
                      u = n.observer,
                      a = n.elements;
                    return (
                      a.set(e, t),
                      u.observe(e),
                      function () {
                        if ((a.delete(e), u.unobserve(e), 0 === a.size)) {
                          u.disconnect(), l.delete(r);
                          var t = f.findIndex(function (e) {
                            return e.root === r.root && e.margin === r.margin;
                          });
                          t > -1 && f.splice(t, 1);
                        }
                      }
                    );
                  })(
                    v,
                    function (e) {
                      return e && p(e);
                    },
                    { root: null == t ? void 0 : t.current, rootMargin: o }
                  );
                  return e;
                }
              } else if (!s) {
                var n = u.requestIdleCallback(function () {
                  return p(!0);
                });
                return function () {
                  return u.cancelIdleCallback(n);
                };
              }
            },
            [v, c, o, t, s]
          );
          var b = r.useCallback(function () {
            p(!1);
          }, []);
          return [y, s, b];
        });
      var r = o(67294),
        u = o(9311),
        a = "function" === typeof IntersectionObserver,
        l = new Map(),
        f = [];
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    21018: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TemplateContext =
          t.GlobalLayoutRouterContext =
          t.LayoutRouterContext =
          t.AppRouterContext =
            void 0);
      var n = (0, o(12845).Z)(o(67294)),
        r = n.default.createContext(null);
      t.AppRouterContext = r;
      var u = n.default.createContext(null);
      t.LayoutRouterContext = u;
      var a = n.default.createContext(null);
      t.GlobalLayoutRouterContext = a;
      var l = n.default.createContext(null);
      t.TemplateContext = l;
    },
    41664: function (e, t, o) {
      e.exports = o(48418);
    },
    52875: function (e, t, o) {
      "use strict";
      function n(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  t &&
                    (n = n.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    o.push.apply(o, n);
                }
                return o;
              })(Object(t)).forEach(function (o) {
                Object.defineProperty(
                  e,
                  o,
                  Object.getOwnPropertyDescriptor(t, o)
                );
              }),
          e
        );
      }
      o.d(t, {
        Z: function () {
          return n;
        },
      });
    },
  },
]);
