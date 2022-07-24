(this.webpackJsonpvenera = this.webpackJsonpvenera || []).push([
  [6],
  {
    1149: function (e, t, n) {
      "use strict";
      n.r(t);
      var r,
        c,
        o,
        a = n(0),
        i = n.n(a),
        s = n(63),
        l = n(3),
        u = n.n(l),
        d = n(9),
        b = n(10),
        j = n(11),
        p = n(58),
        f = n(78),
        x = 0.0025,
        m = 0.0017,
        O = 1619136e3,
        h = 86400,
        v = [
          "0x495c7f3a713870f68f8b418b355c085dfdc412c3",
          "0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea",
          "0xe31debd7abff90b06bca21010dd860d8701fd901",
          "0xfc989fbb6b3024de5ca0144dc23c18a063942ac1",
          "0xe40fc6ff5f2895b44268fd2e1a421e07f567e007",
          "0xfd158609228b43aa380140b46fff3cdf9ad315de",
          "0xc00af6212fcf0e6fd3143e692ccd4191dc308bea",
          "0x205969b3ad459f7eba0dee07231a6357183d3fb6",
          "0x0bd67d358636fd7b0597724aa4f20beedbf3073a",
          "0xedf5d2a561e8a3cb5a846fbce24d2ccd88f50075",
          "0x702b0789a3d4dade1688a0c8b7d944e5ba80fc30",
          "0x041929a760d7049edaef0db246fa76ec975e90cc",
          "0xba098df8c6409669f5e6ec971ac02cd5982ac108",
          "0xe99512305bf42745fae78003428dcaf662afb35d",
          "0xF1D50dB2C40b63D2c598e2A808d1871a40b1E653",
          "0x4269e4090ff9dfc99d8846eb0d42e67f01c3ac8b",
        ],
        k = function (e, t) {
          return e && t ? e - t : e || 0;
        },
        y = function (e, t) {
          return e && t ? ((e - t) / t) * 100 : 0;
        },
        g = function (e, t, n) {
          var r = k(e, t),
            c = k(t, n);
          return [r, y(r, c)];
        },
        S = function (e, t, n) {
          var r = n > 0 ? (t * m * 52.1429 * 100) / n : 0;
          return {
            totalFees24h: e * x,
            totalFees7d: t * x,
            lpFees24h: e * m,
            lpFees7d: t * m,
            lpApr7d: r !== 1 / 0 ? r : 0,
          };
        },
        D = n(4),
        w = n(1137),
        C = n(1138),
        U = n(404),
        T = n(614),
        I = (function () {
          var e = Object(d.a)(
            u.a.mark(function e(t, n, r) {
              var c,
                o,
                a,
                i,
                s,
                l,
                d,
                b = arguments;
              return u.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (c = b.length > 3 && void 0 !== b[3] ? b[3] : 1e3),
                          (o = {}),
                          (a = !1),
                          (i = 0),
                          (e.prev = 4);
                      case 5:
                        if (a) {
                          e.next = 17;
                          break;
                        }
                        return (
                          (s = n.length),
                          i + c < n.length && (s = i + c),
                          (l = n.slice(i, s)),
                          (e.next = 11),
                          Object(p.request)(r, t(l))
                        );
                      case 11:
                        (d = e.sent),
                          (o = Object(D.a)(Object(D.a)({}, o), d)),
                          (a = Object.keys(d).length < c || i + c > n.length),
                          (i += c),
                          (e.next = 5);
                        break;
                      case 17:
                        return e.abrupt("return", o);
                      case 20:
                        return (
                          (e.prev = 20),
                          (e.t0 = e.catch(4)),
                          console.error("Failed to fetch info data", e.t0),
                          e.abrupt("return", null)
                        );
                      case 24:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[4, 20]]
              );
            })
          );
          return function (t, n, r) {
            return e.apply(this, arguments);
          };
        })(),
        F = function () {
          var e = 1e3 * Object(w.a)(new Date());
          return [
            Object(w.a)(Object(C.a)(Object(U.default)(e, 1))),
            Object(w.a)(Object(C.a)(Object(U.default)(e, 2))),
            Object(w.a)(Object(C.a)(Object(T.default)(e, 1))),
            Object(w.a)(Object(C.a)(Object(T.default)(e, 2))),
          ];
        },
        A = function (e) {
          return e.map(function (e) {
            return "t"
              .concat(
                e,
                ":blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: "
              )
              .concat(e, ", timestamp_lt: ")
              .concat(e + 600, " }) {\n      number\n    }");
          });
        },
        q = function (e) {
          return Object(p.gql)(
            r || (r = Object(j.a)(["query blocks {\n    ", "\n  }"])),
            e
          );
        },
        L = (function () {
          var e = Object(d.a)(
            u.a.mark(function e(t) {
              var n,
                r,
                c,
                o,
                a,
                i,
                s,
                l,
                d = arguments;
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = d.length > 1 && void 0 !== d[1] ? d[1] : "desc"),
                        (r = d.length > 2 && void 0 !== d[2] ? d[2] : 500),
                        0 !== (null === t || void 0 === t ? void 0 : t.length))
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return", []);
                    case 4:
                      return (e.next = 6), I(q, A(t), f.a, r);
                    case 6:
                      if (
                        ((c = e.sent),
                        (o =
                          "desc" === n
                            ? function (e, t) {
                                return t.number - e.number;
                              }
                            : function (e, t) {
                                return e.number - t.number;
                              }),
                        (a = []),
                        c)
                      ) {
                        for (i = 0, s = Object.keys(c); i < s.length; i++)
                          (l = s[i]),
                            c[l].length > 0 &&
                              a.push({
                                timestamp: l.split("t")[1],
                                number: parseInt(c[l][0].number, 10),
                              });
                        a.sort(o);
                      }
                      return e.abrupt("return", a);
                    case 11:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        z = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "desc",
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1e3,
            r = Object(a.useState)(),
            c = Object(b.a)(r, 2),
            o = c[0],
            i = c[1],
            s = Object(a.useState)(!1),
            l = Object(b.a)(s, 2),
            j = l[0],
            p = l[1];
          return (
            Object(a.useEffect)(function () {
              o ||
                j ||
                (function () {
                  var r = Object(d.a)(
                    u.a.mark(function r() {
                      var c;
                      return u.a.wrap(function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              return (r.next = 2), L(e, t, n);
                            case 2:
                              0 === (c = r.sent).length ? p(!0) : i(c);
                            case 4:
                            case "end":
                              return r.stop();
                          }
                      }, r);
                    })
                  );
                  return function () {
                    return r.apply(this, arguments);
                  };
                })()();
            }),
            { blocks: o, error: j }
          );
        },
        $ = (function () {
          var e = Object(d.a)(
            u.a.mark(function e(t) {
              var n, r;
              return u.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (n = Object(p.gql)(
                            c ||
                              (c = Object(j.a)([
                                "query overview {\n      pancakeFactories(\n        ",
                                " \n        first: 1) {\n        totalTransactions\n        totalVolumeUSD\n        totalLiquidityUSD\n      }\n    }",
                              ])),
                            t ? "block: { number: ".concat(t, "}") : ""
                          )),
                          (e.next = 4),
                          Object(p.request)(f.e, n)
                        );
                      case 4:
                        return (
                          (r = e.sent),
                          e.abrupt("return", { data: r, error: !1 })
                        );
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          console.error("Failed to fetch info overview", e.t0),
                          e.abrupt("return", { data: null, error: !0 })
                        );
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        B = function (e) {
          return e
            ? {
                totalTransactions: parseFloat(e.totalTransactions),
                totalVolumeUSD: parseFloat(e.totalVolumeUSD),
                totalLiquidityUSD: parseFloat(e.totalLiquidityUSD),
              }
            : null;
        },
        N = function () {
          var e = Object(a.useState)({ error: !1 }),
            t = Object(b.a)(e, 2),
            n = t[0],
            r = t[1],
            c = F(),
            o = Object(b.a)(c, 2),
            i = o[0],
            s = o[1],
            l = z([i, s]),
            j = l.blocks,
            p = l.error,
            f = null !== j && void 0 !== j ? j : [],
            x = Object(b.a)(f, 2),
            m = x[0],
            O = x[1];
          return (
            Object(a.useEffect)(
              function () {
                var e = (function () {
                  var e = Object(d.a)(
                    u.a.mark(function e() {
                      var t,
                        n,
                        c,
                        o,
                        a,
                        i,
                        s,
                        l,
                        d,
                        j,
                        p,
                        f,
                        x,
                        h,
                        v,
                        k,
                        S,
                        D,
                        w,
                        C,
                        U,
                        T,
                        I,
                        F,
                        A,
                        q,
                        L,
                        z,
                        N;
                      return u.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), $();
                            case 2:
                              return (
                                (i = e.sent),
                                (s = i.error),
                                (l = i.data),
                                (e.next = 7),
                                $(
                                  null !==
                                    (t =
                                      null === m || void 0 === m
                                        ? void 0
                                        : m.number) && void 0 !== t
                                    ? t
                                    : void 0
                                )
                              );
                            case 7:
                              return (
                                (d = e.sent),
                                (j = d.error),
                                (p = d.data),
                                (e.next = 12),
                                $(
                                  null !==
                                    (n =
                                      null === O || void 0 === O
                                        ? void 0
                                        : O.number) && void 0 !== n
                                    ? n
                                    : void 0
                                )
                              );
                            case 12:
                              (f = e.sent),
                                (x = f.error),
                                (h = f.data),
                                (v = s || j || x),
                                (k = B(
                                  null === l ||
                                    void 0 === l ||
                                    null === (c = l.pancakeFactories) ||
                                    void 0 === c
                                    ? void 0
                                    : c[0]
                                )),
                                (S = B(
                                  null === p ||
                                    void 0 === p ||
                                    null === (o = p.pancakeFactories) ||
                                    void 0 === o
                                    ? void 0
                                    : o[0]
                                )),
                                (D = B(
                                  null === h ||
                                    void 0 === h ||
                                    null === (a = h.pancakeFactories) ||
                                    void 0 === a
                                    ? void 0
                                    : a[0]
                                )),
                                (w = k && S && D),
                                v || !w
                                  ? r({ error: !0 })
                                  : ((C = g(
                                      k.totalVolumeUSD,
                                      S.totalVolumeUSD,
                                      D.totalVolumeUSD
                                    )),
                                    (U = Object(b.a)(C, 2)),
                                    (T = U[0]),
                                    (I = U[1]),
                                    (F = y(
                                      k.totalLiquidityUSD,
                                      S.totalLiquidityUSD
                                    )),
                                    (A = g(
                                      k.totalTransactions,
                                      S.totalTransactions,
                                      D.totalTransactions
                                    )),
                                    (q = Object(b.a)(A, 2)),
                                    (L = q[0]),
                                    (z = q[1]),
                                    (N = {
                                      volumeUSD: T,
                                      volumeUSDChange:
                                        "number" === typeof I ? I : 0,
                                      liquidityUSD: k.totalLiquidityUSD,
                                      liquidityUSDChange: F,
                                      txCount: L,
                                      txCountChange: z,
                                    }),
                                    r({ error: !1, data: N }));
                            case 21:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
                !(
                  (null === m || void 0 === m ? void 0 : m.number) &&
                  (null === O || void 0 === O ? void 0 : O.number)
                ) ||
                  p ||
                  n.data ||
                  e();
              },
              [m, O, p, n]
            ),
            n
          );
        },
        P = n(20);
      !(function (e) {
        (e[(e.SWAP = 0)] = "SWAP"),
          (e[(e.MINT = 1)] = "MINT"),
          (e[(e.BURN = 2)] = "BURN");
      })(o || (o = {}));
      var E,
        M,
        V,
        W,
        H,
        _,
        R,
        K,
        Q,
        Y,
        G,
        X,
        J,
        Z,
        ee,
        te,
        ne,
        re,
        ce,
        oe,
        ae,
        ie,
        se,
        le,
        ue,
        de,
        be,
        je,
        pe,
        fe,
        xe,
        me,
        Oe,
        he,
        ve,
        ke,
        ye,
        ge,
        Se,
        De,
        we,
        Ce,
        Ue,
        Te,
        Ie,
        Fe,
        Ae,
        qe,
        Le = function (e) {
          return {
            type: o.MINT,
            hash: e.id.split("-")[0],
            timestamp: e.timestamp,
            sender: e.to,
            token0Symbol: e.pair.token0.symbol,
            token1Symbol: e.pair.token1.symbol,
            token0Address: e.pair.token0.id,
            token1Address: e.pair.token1.id,
            amountUSD: parseFloat(e.amountUSD),
            amountToken0: parseFloat(e.amount0),
            amountToken1: parseFloat(e.amount1),
          };
        },
        ze = function (e) {
          return {
            type: o.BURN,
            hash: e.id.split("-")[0],
            timestamp: e.timestamp,
            sender: e.sender,
            token0Symbol: e.pair.token0.symbol,
            token1Symbol: e.pair.token1.symbol,
            token0Address: e.pair.token0.id,
            token1Address: e.pair.token1.id,
            amountUSD: parseFloat(e.amountUSD),
            amountToken0: parseFloat(e.amount0),
            amountToken1: parseFloat(e.amount1),
          };
        },
        $e = function (e) {
          return {
            type: o.SWAP,
            hash: e.id.split("-")[0],
            timestamp: e.timestamp,
            sender: e.from,
            token0Symbol: e.pair.token0.symbol,
            token1Symbol: e.pair.token1.symbol,
            token0Address: e.pair.token0.id,
            token1Address: e.pair.token1.id,
            amountUSD: parseFloat(e.amountUSD),
            amountToken0: parseFloat(e.amount0In) - parseFloat(e.amount0Out),
            amountToken1: parseFloat(e.amount1In) - parseFloat(e.amount1Out),
          };
        },
        Be = function (e) {
          return {
            date: e.date,
            volumeUSD: parseFloat(e.dailyVolumeUSD),
            liquidityUSD: parseFloat(e.totalLiquidityUSD),
          };
        },
        Ne = function (e) {
          return {
            date: e.date,
            volumeUSD: parseFloat(e.dailyVolumeUSD),
            liquidityUSD: parseFloat(e.reserveUSD),
          };
        },
        Pe = (function () {
          var e = Object(d.a)(
            u.a.mark(function e(t, n) {
              var r, c, o, a, i, s, l, d, b, j, p, f, x, m, v, k;
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (o = []), (a = !1), (i = 0), (s = !1);
                    case 4:
                      if (s) {
                        e.next = 16;
                        break;
                      }
                      return (e.next = 7), t(i, n);
                    case 7:
                      (l = e.sent),
                        (d = l.data),
                        (b = l.error),
                        (i += 1e3),
                        (s = d.length < 1e3),
                        (a = b),
                        d && (o = o.concat(d)),
                        (e.next = 4);
                      break;
                    case 16:
                      if (!a && 0 !== o.length) {
                        e.next = 18;
                        break;
                      }
                      return e.abrupt("return", { error: !0 });
                    case 18:
                      for (
                        j = o.reduce(function (e, t) {
                          var n = parseInt((t.date / h).toFixed(0));
                          return Object(D.a)(Object(P.a)({}, n, t), e);
                        }, {}),
                          p = Object.keys(j).map(function (e) {
                            return parseInt(e, 10);
                          }),
                          f = j[p[0]],
                          x =
                            null !==
                              (r =
                                null === f || void 0 === f ? void 0 : f.date) &&
                            void 0 !== r
                              ? r
                              : O,
                          m =
                            null !==
                              (c =
                                null === f || void 0 === f
                                  ? void 0
                                  : f.liquidityUSD) && void 0 !== c
                              ? c
                              : 0,
                          v = Object(w.a)(new Date());
                        x < v - h;

                      )
                        (x += h),
                          (k = parseInt((x / h).toFixed(0), 10)),
                          Object.keys(j).includes(k.toString())
                            ? (m = j[k].liquidityUSD)
                            : (j[k] = {
                                date: x,
                                volumeUSD: 0,
                                liquidityUSD: m,
                              });
                      return e.abrupt("return", {
                        data: Object.values(j),
                        error: !1,
                      });
                    case 26:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        Ee = Object(p.gql)(
          E ||
            (E = Object(j.a)([
              "\n  query overviewCharts($startTime: Int!, $skip: Int!) {\n    pancakeDayDatas(first: 1000, skip: $skip, where: { date_gt: $startTime }, orderBy: date, orderDirection: asc) {\n      date\n      dailyVolumeUSD\n      totalLiquidityUSD\n    }\n  }\n",
            ]))
        ),
        Me = (function () {
          var e = Object(d.a)(
            u.a.mark(function e(t) {
              var n, r, c;
              return u.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          Object(p.request)(f.e, Ee, { startTime: O, skip: t })
                        );
                      case 3:
                        return (
                          (n = e.sent),
                          (r = n.pancakeDayDatas),
                          (c = r.map(Be)),
                          e.abrupt("return", { data: c, error: !1 })
                        );
                      case 9:
                        return (
                          (e.prev = 9),
                          (e.t0 = e.catch(0)),
                          console.error(
                            "Failed to fetch overview chart data",
                            e.t0
                          ),
                          e.abrupt("return", { error: !0 })
                        );
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 9]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Ve = function () {
          var e = Object(a.useState)(),
            t = Object(b.a)(e, 2),
            n = t[0],
            r = t[1],
            c = Object(a.useState)(!1),
            o = Object(b.a)(c, 2),
            i = o[0],
            s = o[1];
          return (
            Object(a.useEffect)(
              function () {
                n ||
                  i ||
                  (function () {
                    var e = Object(d.a)(
                      u.a.mark(function e() {
                        var t, n;
                        return u.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), Pe(Me);
                              case 2:
                                (t = e.sent), (n = t.data) ? r(n) : s(!0);
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()();
              },
              [n, i]
            ),
            { error: i, data: n }
          );
        },
        We = n(32),
        He = Object(p.gql)(
          M ||
            (M = Object(j.a)([
              "\n  query overviewTransactions {\n    mints: mints(first: 33, orderBy: timestamp, orderDirection: desc) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      to\n      amount0\n      amount1\n      amountUSD\n    }\n    swaps: swaps(first: 33, orderBy: timestamp, orderDirection: desc) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      from\n      amount0In\n      amount1In\n      amount0Out\n      amount1Out\n      amountUSD\n    }\n    burns: burns(first: 33, orderBy: timestamp, orderDirection: desc) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      sender\n      amount0\n      amount1\n      amountUSD\n    }\n  }\n",
            ]))
        ),
        _e = (function () {
          var e = Object(d.a)(
            u.a.mark(function e() {
              var t, n, r, c;
              return u.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0), (e.next = 3), Object(p.request)(f.e, He)
                        );
                      case 3:
                        if ((t = e.sent)) {
                          e.next = 6;
                          break;
                        }
                        return e.abrupt("return", void 0);
                      case 6:
                        return (
                          (n = t.mints.map(Le)),
                          (r = t.burns.map(ze)),
                          (c = t.swaps.map($e)),
                          e.abrupt(
                            "return",
                            []
                              .concat(
                                Object(We.a)(n),
                                Object(We.a)(r),
                                Object(We.a)(c)
                              )
                              .sort(function (e, t) {
                                return (
                                  parseInt(t.timestamp, 10) -
                                  parseInt(e.timestamp, 10)
                                );
                              })
                          )
                        );
                      case 12:
                        return (
                          (e.prev = 12),
                          (e.t0 = e.catch(0)),
                          e.abrupt("return", void 0)
                        );
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 12]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Re = _e,
        Ke = (function () {
          var e = Object(d.a)(
            u.a.mark(function e(t) {
              var n, r;
              return u.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (n = Object(p.gql)(
                            V ||
                              (V = Object(j.a)([
                                "\n      query topPools($blacklist: [String!], $timestamp24hAgo: Int) {\n        pairDayDatas(\n          first: 30\n          where: { dailyTxns_gt: 300, token0_not_in: $blacklist, token1_not_in: $blacklist, date_gt: $timestamp24hAgo }\n          orderBy: dailyVolumeUSD\n          orderDirection: desc\n        ) {\n          id\n        }\n      }\n    ",
                              ]))
                          )),
                          (e.next = 4),
                          Object(p.request)(f.e, n, {
                            blacklist: v,
                            timestamp24hAgo: t,
                          })
                        );
                      case 4:
                        return (
                          (r = e.sent),
                          e.abrupt(
                            "return",
                            r.pairDayDatas.map(function (e) {
                              return e.id.split("-")[0];
                            })
                          )
                        );
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          console.error("Failed to fetch top pools", e.t0),
                          e.abrupt("return", [])
                        );
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Qe = function () {
          var e = Object(a.useState)([]),
            t = Object(b.a)(e, 2),
            n = t[0],
            r = t[1],
            c = F(),
            o = Object(b.a)(c, 1)[0];
          return (
            Object(a.useEffect)(
              function () {
                var e = (function () {
                  var e = Object(d.a)(
                    u.a.mark(function e() {
                      var t;
                      return u.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), Ke(o);
                            case 2:
                              (t = e.sent), r(t);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
                0 === n.length && e();
              },
              [n, o]
            ),
            n
          );
        },
        Ye = function (e, t) {
          var n = e ? "block: {number: ".concat(e, "}") : "",
            r = '["'.concat(t.join('","'), '"]');
          return "pairs(\n    where: { id_in: "
            .concat(r, " }\n    ")
            .concat(
              n,
              "\n    orderBy: trackedReserveBNB\n    orderDirection: desc\n  ) {\n    id\n    reserve0\n    reserve1\n    reserveUSD\n    volumeUSD\n    token0Price\n    token1Price\n    token0 {\n      id\n      symbol\n      name\n    }\n    token1 {\n      id\n      symbol\n      name\n    }\n  }"
            );
        },
        Ge = (function () {
          var e = Object(d.a)(
            u.a.mark(function e(t, n, r, c, o) {
              var a, i;
              return u.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (a = Object(p.gql)(
                            W ||
                              (W = Object(j.a)([
                                "\n      query pools {\n        now: ",
                                "\n        oneDayAgo: ",
                                "\n        twoDaysAgo: ",
                                "\n        oneWeekAgo: ",
                                "\n        twoWeeksAgo: ",
                                "\n      }\n    ",
                              ])),
                            Ye(null, o),
                            Ye(t, o),
                            Ye(n, o),
                            Ye(r, o),
                            Ye(c, o)
                          )),
                          (e.next = 4),
                          Object(p.request)(f.e, a)
                        );
                      case 4:
                        return (
                          (i = e.sent),
                          e.abrupt("return", { data: i, error: !1 })
                        );
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          console.error("Failed to fetch pool data", e.t0),
                          e.abrupt("return", { erro: !0 })
                        );
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function (t, n, r, c, o) {
            return e.apply(this, arguments);
          };
        })(),
        Xe = function (e) {
          return e
            ? e.reduce(function (e, t) {
                var n = t.volumeUSD,
                  r = t.reserveUSD,
                  c = t.reserve0,
                  o = t.reserve1,
                  a = t.token0Price,
                  i = t.token1Price;
                return (
                  (e[t.id] = Object(D.a)(
                    Object(D.a)({}, t),
                    {},
                    {
                      volumeUSD: parseFloat(n),
                      reserveUSD: parseFloat(r),
                      reserve0: parseFloat(c),
                      reserve1: parseFloat(o),
                      token0Price: parseFloat(a),
                      token1Price: parseFloat(i),
                    }
                  )),
                  e
                );
              }, {})
            : {};
        },
        Je = function (e) {
          var t = Object(a.useState)({ error: !1 }),
            n = Object(b.a)(t, 2),
            r = n[0],
            c = n[1],
            o = F(),
            i = Object(b.a)(o, 4),
            s = i[0],
            l = i[1],
            j = i[2],
            p = i[3],
            f = z([s, l, j, p]),
            x = f.blocks,
            m = f.error,
            O = null !== x && void 0 !== x ? x : [],
            h = Object(b.a)(O, 4),
            v = h[0],
            k = h[1],
            D = h[2],
            w = h[3];
          return (
            Object(a.useEffect)(
              function () {
                var t = (function () {
                    var t = Object(d.a)(
                      u.a.mark(function t() {
                        var n, r, o, a, i, s, l, d, j;
                        return u.a.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  Ge(v.number, k.number, D.number, w.number, e)
                                );
                              case 2:
                                (n = t.sent),
                                  (r = n.error),
                                  (o = n.data),
                                  r
                                    ? c({ error: !0 })
                                    : ((a = Xe(
                                        null === o || void 0 === o
                                          ? void 0
                                          : o.now
                                      )),
                                      (i = Xe(
                                        null === o || void 0 === o
                                          ? void 0
                                          : o.oneDayAgo
                                      )),
                                      (s = Xe(
                                        null === o || void 0 === o
                                          ? void 0
                                          : o.twoDaysAgo
                                      )),
                                      (l = Xe(
                                        null === o || void 0 === o
                                          ? void 0
                                          : o.oneWeekAgo
                                      )),
                                      (d = Xe(
                                        null === o || void 0 === o
                                          ? void 0
                                          : o.twoWeeksAgo
                                      )),
                                      (j = e.reduce(function (e, t) {
                                        var n = a[t],
                                          r = i[t],
                                          c = s[t],
                                          o = l[t],
                                          u = d[t],
                                          j = g(
                                            null === n || void 0 === n
                                              ? void 0
                                              : n.volumeUSD,
                                            null === r || void 0 === r
                                              ? void 0
                                              : r.volumeUSD,
                                            null === c || void 0 === c
                                              ? void 0
                                              : c.volumeUSD
                                          ),
                                          p = Object(b.a)(j, 2),
                                          f = p[0],
                                          x = p[1],
                                          m = g(
                                            null === n || void 0 === n
                                              ? void 0
                                              : n.volumeUSD,
                                            null === o || void 0 === o
                                              ? void 0
                                              : o.volumeUSD,
                                            null === u || void 0 === u
                                              ? void 0
                                              : u.volumeUSD
                                          ),
                                          O = Object(b.a)(m, 2),
                                          h = O[0],
                                          v = O[1],
                                          k = n ? n.reserveUSD : 0,
                                          D = y(
                                            null === n || void 0 === n
                                              ? void 0
                                              : n.reserveUSD,
                                            null === r || void 0 === r
                                              ? void 0
                                              : r.reserveUSD
                                          ),
                                          w = n ? n.reserve0 : 0,
                                          C = n ? n.reserve1 : 0,
                                          U = S(f, h, k),
                                          T = U.totalFees24h,
                                          I = U.totalFees7d,
                                          F = U.lpFees24h,
                                          A = U.lpFees7d,
                                          q = U.lpApr7d;
                                        return (
                                          n &&
                                            (e[t] = {
                                              address: t,
                                              token0: {
                                                address: n.token0.id,
                                                name: n.token0.name,
                                                symbol: n.token0.symbol,
                                              },
                                              token1: {
                                                address: n.token1.id,
                                                name: n.token1.name,
                                                symbol: n.token1.symbol,
                                              },
                                              token0Price: n.token0Price,
                                              token1Price: n.token1Price,
                                              volumeUSD: f,
                                              volumeUSDChange: x,
                                              volumeUSDWeek: h,
                                              volumeUSDChangeWeek: v,
                                              totalFees24h: T,
                                              totalFees7d: I,
                                              lpFees24h: F,
                                              lpFees7d: A,
                                              lpApr7d: q,
                                              liquidityUSD: k,
                                              liquidityUSDChange: D,
                                              liquidityToken0: w,
                                              liquidityToken1: C,
                                            }),
                                          e
                                        );
                                      }, {})),
                                      c({ data: j, error: !1 }));
                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })(),
                  n =
                    (null === v || void 0 === v ? void 0 : v.number) &&
                    (null === k || void 0 === k ? void 0 : k.number) &&
                    (null === D || void 0 === D ? void 0 : D.number) &&
                    (null === w || void 0 === w ? void 0 : w.number);
                e.length > 0 && n && !m && t();
              },
              [e, v, k, D, w, m]
            ),
            r
          );
        },
        Ze = Object(p.gql)(
          H ||
            (H = Object(j.a)([
              '\n  query prices($block24: Int!, $block48: Int!, $blockWeek: Int!) {\n    current: bundle(id: "1") {\n      bnbPrice\n    }\n    oneDay: bundle(id: "1", block: { number: $block24 }) {\n      bnbPrice\n    }\n    twoDay: bundle(id: "1", block: { number: $block48 }) {\n      bnbPrice\n    }\n    oneWeek: bundle(id: "1", block: { number: $blockWeek }) {\n      bnbPrice\n    }\n  }\n',
            ]))
        ),
        et = (function () {
          var e = Object(d.a)(
            u.a.mark(function e(t, n, r) {
              var c, o, a, i, s, l, d, b, j;
              return u.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          Object(p.request)(f.e, Ze, {
                            block24: t,
                            block48: n,
                            blockWeek: r,
                          })
                        );
                      case 3:
                        return (
                          (j = e.sent),
                          e.abrupt("return", {
                            error: !1,
                            bnbPrices: {
                              current: parseFloat(
                                null !==
                                  (c =
                                    null === (o = j.current) || void 0 === o
                                      ? void 0
                                      : o.bnbPrice) && void 0 !== c
                                  ? c
                                  : "0"
                              ),
                              oneDay: parseFloat(
                                null !==
                                  (a =
                                    null === (i = j.oneDay) || void 0 === i
                                      ? void 0
                                      : i.bnbPrice) && void 0 !== a
                                  ? a
                                  : "0"
                              ),
                              twoDay: parseFloat(
                                null !==
                                  (s =
                                    null === (l = j.twoDay) || void 0 === l
                                      ? void 0
                                      : l.bnbPrice) && void 0 !== s
                                  ? s
                                  : "0"
                              ),
                              week: parseFloat(
                                null !==
                                  (d =
                                    null === (b = j.oneWeek) || void 0 === b
                                      ? void 0
                                      : b.bnbPrice) && void 0 !== d
                                  ? d
                                  : "0"
                              ),
                            },
                          })
                        );
                      case 7:
                        return (
                          (e.prev = 7),
                          (e.t0 = e.catch(0)),
                          console.error("Failed to fetch BNB prices", e.t0),
                          e.abrupt("return", { error: !0, bnbPrices: void 0 })
                        );
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 7]]
              );
            })
          );
          return function (t, n, r) {
            return e.apply(this, arguments);
          };
        })(),
        tt = function (e, t) {
          var n = '["'.concat(t.join('","'), '"]'),
            r = e ? "block: {number: ".concat(e, "}") : "";
          return "tokens(\n      where: {id_in: "
            .concat(n, "}\n      ")
            .concat(
              r,
              "\n      orderBy: tradeVolumeUSD\n      orderDirection: desc\n    ) {\n      id\n      symbol\n      name\n      derivedBNB\n      derivedUSD\n      tradeVolumeUSD\n      totalTransactions\n      totalLiquidity\n    }\n  "
            );
        },
        nt = (function () {
          var e = Object(d.a)(
            u.a.mark(function e(t, n, r, c, o) {
              var a, i;
              return u.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (a = Object(p.gql)(
                            _ ||
                              (_ = Object(j.a)([
                                "\n      query tokens {\n        now: ",
                                "\n        oneDayAgo: ",
                                "\n        twoDaysAgo: ",
                                "\n        oneWeekAgo: ",
                                "\n        twoWeeksAgo: ",
                                "\n      }\n    ",
                              ])),
                            tt(null, o),
                            tt(t, o),
                            tt(n, o),
                            tt(r, o),
                            tt(c, o)
                          )),
                          (e.next = 4),
                          Object(p.request)(f.e, a)
                        );
                      case 4:
                        return (
                          (i = e.sent),
                          e.abrupt("return", { data: i, error: !1 })
                        );
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          console.error("Failed to fetch token data", e.t0),
                          e.abrupt("return", { erro: !0 })
                        );
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function (t, n, r, c, o) {
            return e.apply(this, arguments);
          };
        })(),
        rt = function (e) {
          return e
            ? e.reduce(function (e, t) {
                var n = t.derivedBNB,
                  r = t.derivedUSD,
                  c = t.tradeVolumeUSD,
                  o = t.totalTransactions,
                  a = t.totalLiquidity;
                return (
                  (e[t.id] = Object(D.a)(
                    Object(D.a)({}, t),
                    {},
                    {
                      derivedBNB: parseFloat(n),
                      derivedUSD: parseFloat(r),
                      tradeVolumeUSD: parseFloat(c),
                      totalTransactions: parseFloat(o),
                      totalLiquidity: parseFloat(a),
                    }
                  )),
                  e
                );
              }, {})
            : {};
        },
        ct = function (e) {
          var t = Object(a.useState)({ error: !1 }),
            n = Object(b.a)(t, 2),
            r = n[0],
            c = n[1],
            o = F(),
            i = Object(b.a)(o, 4),
            s = i[0],
            l = i[1],
            j = i[2],
            p = i[3],
            f = z([s, l, j, p]),
            x = f.blocks,
            m = f.error,
            O = null !== x && void 0 !== x ? x : [],
            h = Object(b.a)(O, 4),
            v = h[0],
            S = h[1],
            D = h[2],
            w = h[3],
            C = (function () {
              var e = Object(a.useState)(),
                t = Object(b.a)(e, 2),
                n = t[0],
                r = t[1],
                c = Object(a.useState)(!1),
                o = Object(b.a)(c, 2),
                i = o[0],
                s = o[1],
                l = F(),
                j = Object(b.a)(l, 3),
                p = j[0],
                f = j[1],
                x = j[2],
                m = z([p, f, x]),
                O = m.blocks,
                h = m.error;
              return (
                Object(a.useEffect)(
                  function () {
                    n ||
                      i ||
                      !O ||
                      h ||
                      (function () {
                        var e = Object(d.a)(
                          u.a.mark(function e() {
                            var t, n, c, o, a, i;
                            return u.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (t = Object(b.a)(O, 3)),
                                      (n = t[0]),
                                      (c = t[1]),
                                      (o = t[2]),
                                      (e.next = 3),
                                      et(n.number, c.number, o.number)
                                    );
                                  case 3:
                                    (a = e.sent),
                                      (i = a.bnbPrices),
                                      a.error ? s(!0) : r(i);
                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })()();
                  },
                  [i, n, O, h]
                ),
                n
              );
            })();
          return (
            Object(a.useEffect)(
              function () {
                var t = (function () {
                    var t = Object(d.a)(
                      u.a.mark(function t() {
                        var n, r, o, a, i, s, l, d, j;
                        return u.a.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  nt(v.number, S.number, D.number, w.number, e)
                                );
                              case 2:
                                (n = t.sent),
                                  (r = n.error),
                                  (o = n.data),
                                  r
                                    ? c({ error: !0 })
                                    : ((a = rt(
                                        null === o || void 0 === o
                                          ? void 0
                                          : o.now
                                      )),
                                      (i = rt(
                                        null === o || void 0 === o
                                          ? void 0
                                          : o.oneDayAgo
                                      )),
                                      (s = rt(
                                        null === o || void 0 === o
                                          ? void 0
                                          : o.twoDaysAgo
                                      )),
                                      (l = rt(
                                        null === o || void 0 === o
                                          ? void 0
                                          : o.oneWeekAgo
                                      )),
                                      (d = rt(
                                        null === o || void 0 === o
                                          ? void 0
                                          : o.twoWeeksAgo
                                      )),
                                      (j = e.reduce(function (e, t) {
                                        var n = a[t],
                                          r = i[t],
                                          c = s[t],
                                          o = l[t],
                                          u = d[t],
                                          j = g(
                                            null === n || void 0 === n
                                              ? void 0
                                              : n.tradeVolumeUSD,
                                            null === r || void 0 === r
                                              ? void 0
                                              : r.tradeVolumeUSD,
                                            null === c || void 0 === c
                                              ? void 0
                                              : c.tradeVolumeUSD
                                          ),
                                          p = Object(b.a)(j, 2),
                                          f = p[0],
                                          x = p[1],
                                          m = g(
                                            null === n || void 0 === n
                                              ? void 0
                                              : n.tradeVolumeUSD,
                                            null === o || void 0 === o
                                              ? void 0
                                              : o.tradeVolumeUSD,
                                            null === u || void 0 === u
                                              ? void 0
                                              : u.tradeVolumeUSD
                                          ),
                                          O = Object(b.a)(m, 1)[0],
                                          h = n
                                            ? n.totalLiquidity * n.derivedUSD
                                            : 0,
                                          v = r
                                            ? r.totalLiquidity * r.derivedUSD
                                            : 0,
                                          S = y(h, v),
                                          D = n ? n.totalLiquidity : 0,
                                          w = n ? n.derivedBNB * C.current : 0,
                                          U = r ? r.derivedBNB * C.oneDay : 0,
                                          T = o ? o.derivedBNB * C.week : 0,
                                          I = y(w, U),
                                          F = y(w, T),
                                          A = k(
                                            null === n || void 0 === n
                                              ? void 0
                                              : n.totalTransactions,
                                            null === r || void 0 === r
                                              ? void 0
                                              : r.totalTransactions
                                          );
                                        return (
                                          (e[t] = {
                                            exists: !!n,
                                            address: t,
                                            name: n ? n.name : "",
                                            symbol: n ? n.symbol : "",
                                            volumeUSD: f,
                                            volumeUSDChange: x,
                                            volumeUSDWeek: O,
                                            txCount: A,
                                            liquidityUSD: h,
                                            liquidityUSDChange: S,
                                            liquidityToken: D,
                                            priceUSD: w,
                                            priceUSDChange: I,
                                            priceUSDChangeWeek: F,
                                          }),
                                          e
                                        );
                                      }, {})),
                                      c({ data: j, error: !1 }));
                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })(),
                  n =
                    (null === v || void 0 === v ? void 0 : v.number) &&
                    (null === S || void 0 === S ? void 0 : S.number) &&
                    (null === D || void 0 === D ? void 0 : D.number) &&
                    (null === w || void 0 === w ? void 0 : w.number);
                e.length > 0 && n && !m && C && t();
              },
              [e, v, S, D, w, m, C]
            ),
            r
          );
        },
        ot = (function () {
          var e = Object(d.a)(
            u.a.mark(function e(t) {
              var n, r;
              return u.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (n = Object(p.gql)(
                            R ||
                              (R = Object(j.a)([
                                "\n      query topTokens($blacklist: [String!], $timestamp24hAgo: Int) {\n        tokenDayDatas(\n          first: 30\n          where: { dailyTxns_gt: 300, id_not_in: $blacklist, date_gt: $timestamp24hAgo }\n          orderBy: dailyVolumeUSD\n          orderDirection: desc\n        ) {\n          id\n        }\n      }\n    ",
                              ]))
                          )),
                          (e.next = 4),
                          Object(p.request)(f.e, n, {
                            blacklist: v,
                            timestamp24hAgo: t,
                          })
                        );
                      case 4:
                        return (
                          (r = e.sent),
                          e.abrupt(
                            "return",
                            r.tokenDayDatas.map(function (e) {
                              return e.id.split("-")[0];
                            })
                          )
                        );
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          console.error("Failed to fetch top tokens", e.t0),
                          e.abrupt("return", [])
                        );
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        at = function () {
          var e = Object(a.useState)([]),
            t = Object(b.a)(e, 2),
            n = t[0],
            r = t[1],
            c = F(),
            o = Object(b.a)(c, 1)[0];
          return (
            Object(a.useEffect)(
              function () {
                var e = (function () {
                  var e = Object(d.a)(
                    u.a.mark(function e() {
                      var t;
                      return u.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), ot(o);
                            case 2:
                              (t = e.sent), r(t);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
                0 === n.length && e();
              },
              [n, o]
            ),
            n
          );
        },
        it = n(25),
        st = n(1139),
        lt = n(1140),
        ut = n(48),
        dt = (function () {
          var e = Object(d.a)(
            u.a.mark(function e(t, n) {
              var r, c, o, a;
              return u.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (r = Object(p.gql)(
                            K ||
                              (K = Object(j.a)([
                                "\n      query pairDayDatas($startTime: Int!, $skip: Int!, $address: Bytes!) {\n        pairDayDatas(\n          first: 1000\n          skip: $skip\n          where: { pairAddress: $address, date_gt: $startTime }\n          orderBy: date\n          orderDirection: asc\n        ) {\n          date\n          dailyVolumeUSD\n          reserveUSD\n        }\n      }\n    ",
                              ]))
                          )),
                          (e.next = 4),
                          Object(p.request)(f.e, r, {
                            startTime: O,
                            skip: t,
                            address: n,
                          })
                        );
                      case 4:
                        return (
                          (c = e.sent),
                          (o = c.pairDayDatas),
                          (a = o.map(Ne)),
                          e.abrupt("return", { data: a, error: !1 })
                        );
                      case 10:
                        return (
                          (e.prev = 10),
                          (e.t0 = e.catch(0)),
                          console.error(
                            "Failed to fetch pool chart data",
                            e.t0
                          ),
                          e.abrupt("return", { error: !0 })
                        );
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 10]]
              );
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        bt = (function () {
          var e = Object(d.a)(
            u.a.mark(function e(t) {
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt("return", Pe(dt, t));
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        jt = bt,
        pt = Object(p.gql)(
          Q ||
            (Q = Object(j.a)([
              "\n  query poolTransactions($address: Bytes!) {\n    mints(first: 35, orderBy: timestamp, orderDirection: desc, where: { pair: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      to\n      amount0\n      amount1\n      amountUSD\n    }\n    swaps(first: 35, orderBy: timestamp, orderDirection: desc, where: { pair: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      from\n      amount0In\n      amount1In\n      amount0Out\n      amount1Out\n      amountUSD\n    }\n    burns(first: 35, orderBy: timestamp, orderDirection: desc, where: { pair: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      sender\n      amount0\n      amount1\n      amountUSD\n    }\n  }\n",
            ]))
        ),
        ft = (function () {
          var e = Object(d.a)(
            u.a.mark(function e(t) {
              var n, r, c, o;
              return u.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          Object(p.request)(f.e, pt, { address: t })
                        );
                      case 3:
                        return (
                          (n = e.sent),
                          (r = n.mints.map(Le)),
                          (c = n.burns.map(ze)),
                          (o = n.swaps.map($e)),
                          e.abrupt("return", {
                            data: [].concat(
                              Object(We.a)(r),
                              Object(We.a)(c),
                              Object(We.a)(o)
                            ),
                            error: !1,
                          })
                        );
                      case 10:
                        return (
                          (e.prev = 10),
                          (e.t0 = e.catch(0)),
                          console.error(
                            "Failed to fetch transactions for pool ".concat(t),
                            e.t0
                          ),
                          e.abrupt("return", { error: !0 })
                        );
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 10]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        xt = ft,
        mt = (function () {
          var e = Object(d.a)(
            u.a.mark(function e(t, n) {
              var r, c, o, a;
              return u.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (r = Object(p.gql)(
                            Y ||
                              (Y = Object(j.a)([
                                "\n      query tokenDayDatas($startTime: Int!, $skip: Int!, $address: Bytes!) {\n        tokenDayDatas(\n          first: 1000\n          skip: $skip\n          where: { token: $address, date_gt: $startTime }\n          orderBy: date\n          orderDirection: asc\n        ) {\n          date\n          dailyVolumeUSD\n          totalLiquidityUSD\n        }\n      }\n    ",
                              ]))
                          )),
                          (e.next = 4),
                          Object(p.request)(f.e, r, {
                            startTime: O,
                            skip: t,
                            address: n,
                          })
                        );
                      case 4:
                        return (
                          (c = e.sent),
                          (o = c.tokenDayDatas),
                          (a = o.map(Be)),
                          e.abrupt("return", { data: a, error: !1 })
                        );
                      case 10:
                        return (
                          (e.prev = 10),
                          (e.t0 = e.catch(0)),
                          console.error(
                            "Failed to fetch token chart data",
                            e.t0
                          ),
                          e.abrupt("return", { error: !0 })
                        );
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 10]]
              );
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        Ot = (function () {
          var e = Object(d.a)(
            u.a.mark(function e(t) {
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt("return", Pe(mt, t));
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        ht = Ot,
        vt = Object(p.gql)(
          G ||
            (G = Object(j.a)([
              "\n  query tokenTransactions($address: Bytes!) {\n    mintsAs0: mints(first: 10, orderBy: timestamp, orderDirection: desc, where: { token0: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      to\n      amount0\n      amount1\n      amountUSD\n    }\n    mintsAs1: mints(first: 10, orderBy: timestamp, orderDirection: desc, where: { token0: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      to\n      amount0\n      amount1\n      amountUSD\n    }\n    swapsAs0: swaps(first: 10, orderBy: timestamp, orderDirection: desc, where: { token0: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      from\n      amount0In\n      amount1In\n      amount0Out\n      amount1Out\n      amountUSD\n    }\n    swapsAs1: swaps(first: 10, orderBy: timestamp, orderDirection: desc, where: { token1: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      from\n      amount0In\n      amount1In\n      amount0Out\n      amount1Out\n      amountUSD\n    }\n    burnsAs0: burns(first: 10, orderBy: timestamp, orderDirection: desc, where: { token0: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      sender\n      amount0\n      amount1\n      amountUSD\n    }\n    burnsAs1: burns(first: 10, orderBy: timestamp, orderDirection: desc, where: { token1: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      sender\n      amount0\n      amount1\n      amountUSD\n    }\n  }\n",
            ]))
        ),
        kt = (function () {
          var e = Object(d.a)(
            u.a.mark(function e(t) {
              var n, r, c, o, a, i, s;
              return u.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          Object(p.request)(f.e, vt, { address: t })
                        );
                      case 3:
                        return (
                          (n = e.sent),
                          (r = n.mintsAs0.map(Le)),
                          (c = n.mintsAs1.map(Le)),
                          (o = n.burnsAs0.map(ze)),
                          (a = n.burnsAs1.map(ze)),
                          (i = n.swapsAs0.map($e)),
                          (s = n.swapsAs1.map($e)),
                          e.abrupt("return", {
                            data: [].concat(
                              Object(We.a)(r),
                              Object(We.a)(c),
                              Object(We.a)(o),
                              Object(We.a)(a),
                              Object(We.a)(i),
                              Object(We.a)(s)
                            ),
                            error: !1,
                          })
                        );
                      case 13:
                        return (
                          (e.prev = 13),
                          (e.t0 = e.catch(0)),
                          console.error(
                            "Failed to fetch transactions for token ".concat(t),
                            e.t0
                          ),
                          e.abrupt("return", { error: !0 })
                        );
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 13]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        yt = kt,
        gt = function (e, t) {
          return t.map(function (t) {
            return "\n      t"
              .concat(t.timestamp, ':token(id:"')
              .concat(e, '", block: { number: ')
              .concat(t.number, " }) { \n        derivedBNB\n      }\n      b")
              .concat(t.timestamp, ': bundle(id:"1", block: { number: ')
              .concat(t.number, " }) { \n        bnbPrice\n      }\n    ");
          });
        },
        St = function (e) {
          return Object(p.gql)(
            X ||
              (X = Object(j.a)([
                "\n    query tokenPriceData {\n      ",
                "\n    }\n  ",
              ])),
            e
          );
        },
        Dt = (function () {
          var e = Object(d.a)(
            u.a.mark(function e(t, n, r) {
              var c, o, a, i, s, l, d, b;
              return u.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (
                          c = Object(w.a)(new Date()), o = [], a = r;
                          a <= c;

                        )
                          o.push(a), (a += n);
                        return (e.prev = 4), (e.next = 7), L(o, "asc", 500);
                      case 7:
                        if ((i = e.sent) && 0 !== i.length) {
                          e.next = 11;
                          break;
                        }
                        return (
                          console.error(
                            "Error fetching blocks for timestamps",
                            o
                          ),
                          e.abrupt("return", { error: !1 })
                        );
                      case 11:
                        return (e.next = 13), I(St, gt(t, i), f.e, 200);
                      case 13:
                        if ((s = e.sent)) {
                          e.next = 17;
                          break;
                        }
                        return (
                          console.error("Price data failed to load"),
                          e.abrupt("return", { error: !1 })
                        );
                      case 17:
                        for (
                          l = [],
                            Object.keys(s).forEach(function (e) {
                              var t,
                                n = e.split("t")[1];
                              n &&
                                l.push({
                                  timestamp: n,
                                  derivedBNB: (
                                    null === (t = s[e]) || void 0 === t
                                      ? void 0
                                      : t.derivedBNB
                                  )
                                    ? parseFloat(s[e].derivedBNB)
                                    : 0,
                                  priceUSD: 0,
                                });
                            }),
                            Object.keys(s).forEach(function (e) {
                              var t = e.split("b")[1];
                              if (t) {
                                var n = l.findIndex(function (e) {
                                  return e.timestamp === t;
                                });
                                if (n >= 0) {
                                  var r,
                                    c,
                                    o = l[n].derivedBNB;
                                  l[n].priceUSD =
                                    parseFloat(
                                      null !==
                                        (r =
                                          null === (c = s[e]) || void 0 === c
                                            ? void 0
                                            : c.bnbPrice) && void 0 !== r
                                        ? r
                                        : 0
                                    ) * o;
                                }
                              }
                            }),
                            l.sort(function (e, t) {
                              return (
                                parseInt(e.timestamp, 10) -
                                parseInt(t.timestamp, 10)
                              );
                            }),
                            d = [],
                            b = 0;
                          b < l.length - 1;
                          b++
                        )
                          d.push({
                            time: parseFloat(l[b].timestamp),
                            open: l[b].priceUSD,
                            close: l[b + 1].priceUSD,
                            high: l[b + 1].priceUSD,
                            low: l[b].priceUSD,
                          });
                        return e.abrupt("return", { data: d, error: !1 });
                      case 26:
                        return (
                          (e.prev = 26),
                          (e.t0 = e.catch(4)),
                          console.error(
                            "Failed to fetch price data for token ".concat(t),
                            e.t0
                          ),
                          e.abrupt("return", { error: !0 })
                        );
                      case 30:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[4, 26]]
              );
            })
          );
          return function (t, n, r) {
            return e.apply(this, arguments);
          };
        })(),
        wt = Dt,
        Ct = Object(p.gql)(
          J ||
            (J = Object(j.a)([
              "\n  query poolsForToken($address: Bytes!, $blacklist: [String!]) {\n    asToken0: pairs(\n      first: 15\n      orderBy: trackedReserveBNB\n      orderDirection: desc\n      where: { totalTransactions_gt: 100, token0: $address, token1_not_in: $blacklist }\n    ) {\n      id\n    }\n    asToken1: pairs(\n      first: 15\n      orderBy: trackedReserveBNB\n      orderDirection: desc\n      where: { totalTransactions_gt: 100, token1: $address, token0_not_in: $blacklist }\n    ) {\n      id\n    }\n  }\n",
            ]))
        ),
        Ut = (function () {
          var e = Object(d.a)(
            u.a.mark(function e(t) {
              var n;
              return u.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          Object(p.request)(f.e, Ct, {
                            address: t,
                            blacklist: v,
                          })
                        );
                      case 3:
                        return (
                          (n = e.sent),
                          e.abrupt("return", {
                            error: !1,
                            addresses: n.asToken0
                              .concat(n.asToken1)
                              .map(function (e) {
                                return e.id;
                              }),
                          })
                        );
                      case 7:
                        return (
                          (e.prev = 7),
                          (e.t0 = e.catch(0)),
                          console.error(
                            "Failed to fetch pools for token ".concat(t),
                            e.t0
                          ),
                          e.abrupt("return", { error: !0 })
                        );
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 7]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Tt = n(91),
        It = function () {
          var e = Object(it.c)(function (e) {
              return e.info.protocol.overview;
            }),
            t = Object(it.b)();
          return [
            e,
            Object(a.useCallback)(
              function (e) {
                return t(Object(Tt.h)({ protocolData: e }));
              },
              [t]
            ),
          ];
        },
        Ft = function () {
          var e = Object(it.c)(function (e) {
              return e.info.protocol.chartData;
            }),
            t = Object(it.b)();
          return [
            e,
            Object(a.useCallback)(
              function (e) {
                return t(Object(Tt.g)({ chartData: e }));
              },
              [t]
            ),
          ];
        },
        At = function () {
          var e = Object(it.c)(function (e) {
              return e.info.protocol.transactions;
            }),
            t = Object(it.b)();
          return [
            e,
            Object(a.useCallback)(
              function (e) {
                return t(Object(Tt.i)({ transactions: e }));
              },
              [t]
            ),
          ];
        },
        qt = function () {
          return Object(it.c)(function (e) {
            return e.info.pools.byAddress;
          });
        },
        Lt = function () {
          var e = Object(it.b)();
          return Object(a.useCallback)(
            function (t) {
              return e(Object(Tt.a)({ poolAddresses: t }));
            },
            [e]
          );
        },
        zt = function (e) {
          var t = qt(),
            n = Lt(),
            r = e.reduce(function (e, n) {
              return Object.keys(t).includes(n) || e.push(n), e;
            }, []);
          return (
            Object(a.useEffect)(
              function () {
                r && n(r);
              },
              [n, r]
            ),
            e
              .map(function (e) {
                var n;
                return null === (n = t[e]) || void 0 === n ? void 0 : n.data;
              })
              .filter(function (e) {
                return e;
              })
          );
        },
        $t = function () {
          return Object(it.c)(function (e) {
            return e.info.tokens.byAddress;
          });
        },
        Bt = function () {
          var e = Object(it.b)();
          return Object(a.useCallback)(
            function (t) {
              return e(Object(Tt.b)({ tokenAddresses: t }));
            },
            [e]
          );
        },
        Nt = function (e) {
          var t = $t(),
            n = Bt();
          return (
            null === e ||
              void 0 === e ||
              e.forEach(function (e) {
                t[e] || n([e]);
              }),
            Object(a.useMemo)(
              function () {
                if (e)
                  return e
                    .map(function (e) {
                      var n;
                      return null === (n = t[e]) || void 0 === n
                        ? void 0
                        : n.data;
                    })
                    .filter(function (e) {
                      return e;
                    });
              },
              [e, t]
            )
          );
        },
        Pt = function () {
          var e = It(),
            t = Object(b.a)(e, 2),
            n = t[0],
            r = t[1],
            c = N(),
            o = c.data,
            i = c.error,
            s = Ft(),
            l = Object(b.a)(s, 2),
            j = l[0],
            p = l[1],
            f = Ve(),
            x = f.data,
            m = f.error,
            O = At(),
            h = Object(b.a)(O, 2),
            v = h[0],
            k = h[1];
          return (
            Object(a.useEffect)(
              function () {
                void 0 === n && o && !i && r(o);
              },
              [i, o, n, r]
            ),
            Object(a.useEffect)(
              function () {
                void 0 === j && x && !m && p(x);
              },
              [j, m, x, p]
            ),
            Object(a.useEffect)(
              function () {
                v ||
                  (function () {
                    var e = Object(d.a)(
                      u.a.mark(function e() {
                        var t;
                        return u.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), Re();
                              case 2:
                                (t = e.sent) && k(t);
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()();
              },
              [v, k]
            ),
            null
          );
        },
        Et = function () {
          var e = (function () {
              var e = Object(it.b)();
              return Object(a.useCallback)(
                function (t) {
                  return e(Object(Tt.e)({ pools: t }));
                },
                [e]
              );
            })(),
            t = Lt(),
            n = qt(),
            r = Qe();
          Object(a.useEffect)(
            function () {
              r.length > 0 && t(r);
            },
            [t, r]
          );
          var c = Object(a.useMemo)(
              function () {
                return Object.keys(n).reduce(function (e, t) {
                  return n[t].data || e.push(t), e;
                }, []);
              },
              [n]
            ),
            o = Je(c),
            i = o.error,
            s = o.data;
          return (
            Object(a.useEffect)(
              function () {
                s && !i && e(Object.values(s));
              },
              [i, s, e]
            ),
            null
          );
        },
        Mt = function () {
          var e = (function () {
              var e = Object(it.b)();
              return Object(a.useCallback)(
                function (t) {
                  e(Object(Tt.k)({ tokens: t }));
                },
                [e]
              );
            })(),
            t = Bt(),
            n = $t(),
            r = at();
          Object(a.useEffect)(
            function () {
              r.length > 0 && t(r);
            },
            [t, r]
          );
          var c = Object(a.useMemo)(
              function () {
                return Object.keys(n).reduce(function (e, t) {
                  return n[t].data || e.push(t), e;
                }, []);
              },
              [n]
            ),
            o = ct(c),
            i = o.error,
            s = o.data;
          return (
            Object(a.useEffect)(
              function () {
                s && !i && e(Object.values(s));
              },
              [i, s, e]
            ),
            null
          );
        },
        Vt = n(6),
        Wt = n(117),
        Ht = n(2),
        _t = n(16),
        Rt = Object(p.gql)(
          Z ||
            (Z = Object(j.a)([
              "\n  query tokens($symbol: String, $name: String, $id: String) {\n    asSymbol: tokens(first: 10, where: { symbol_contains: $symbol }, orderBy: tradeVolumeUSD, orderDirection: desc) {\n      id\n    }\n    asName: tokens(first: 10, where: { name_contains: $name }, orderBy: tradeVolumeUSD, orderDirection: desc) {\n      id\n    }\n    asAddress: tokens(first: 1, where: { id: $id }, orderBy: tradeVolumeUSD, orderDirection: desc) {\n      id\n    }\n  }\n",
            ]))
        ),
        Kt = Object(p.gql)(
          ee ||
            (ee = Object(j.a)([
              "\n  query pools($tokens: [Bytes]!, $id: String) {\n    as0: pairs(first: 10, where: { token0_in: $tokens }) {\n      id\n    }\n    as1: pairs(first: 10, where: { token1_in: $tokens }) {\n      id\n    }\n    asAddress: pairs(first: 1, where: { id: $id }) {\n      id\n    }\n  }\n",
            ]))
        ),
        Qt = function (e) {
          var t = e
            .reduce(function (e, t) {
              return [].concat(Object(We.a)(e), Object(We.a)(t));
            }, [])
            .map(function (e) {
              return e.id;
            });
          return Array.from(new Set(t));
        },
        Yt = function (e) {
          var t = Object(a.useState)({
              tokens: [],
              pools: [],
              loading: !1,
              error: !1,
            }),
            n = Object(b.a)(t, 2),
            r = n[0],
            c = n[1],
            o = e.length < 2;
          Object(a.useEffect)(
            function () {
              c({ tokens: [], pools: [], loading: !o, error: !1 });
            },
            [e, o]
          ),
            Object(a.useEffect)(
              function () {
                o ||
                  (function () {
                    var t = Object(d.a)(
                      u.a.mark(function t() {
                        var n, r, o;
                        return u.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    (t.next = 3),
                                    Object(p.request)(f.e, Rt, {
                                      symbol: e.toUpperCase(),
                                      name:
                                        e.charAt(0).toUpperCase() + e.slice(1),
                                      id: e.toLowerCase(),
                                    })
                                  );
                                case 3:
                                  return (
                                    (n = t.sent),
                                    (r = Qt([
                                      n.asAddress,
                                      n.asSymbol,
                                      n.asName,
                                    ])),
                                    (t.next = 7),
                                    Object(p.request)(f.e, Kt, {
                                      tokens: r,
                                      id: e.toLowerCase(),
                                    })
                                  );
                                case 7:
                                  (o = t.sent),
                                    c({
                                      tokens: r,
                                      pools: Qt([o.asAddress, o.as0, o.as1]),
                                      loading: !1,
                                      error: !1,
                                    }),
                                    (t.next = 15);
                                  break;
                                case 11:
                                  (t.prev = 11),
                                    (t.t0 = t.catch(0)),
                                    console.error(
                                      "Search failed for ".concat(e),
                                      t.t0
                                    ),
                                    c({
                                      tokens: [],
                                      pools: [],
                                      loading: !1,
                                      error: !0,
                                    });
                                case 15:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 11]]
                        );
                      })
                    );
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })()();
              },
              [e, o]
            );
          var i = Nt(r.tokens),
            s = zt(r.pools);
          return {
            tokens: i,
            pools: s,
            tokensLoading: i.length !== r.tokens.length || r.loading,
            poolsLoading: s.length !== r.pools.length || r.loading,
            error: r.error,
          };
        },
        Gt = n(59),
        Xt = n(1),
        Jt = ["src", "alt"],
        Zt = [],
        en = function (e) {
          var t = e.src,
            n = e.alt,
            r = Object(Gt.a)(e, Jt),
            c = Object(a.useState)(0),
            o = Object(b.a)(c, 2)[1],
            i = Zt.includes(t);
          return t && !i
            ? Object(Xt.jsx)(
                "img",
                Object(D.a)(
                  Object(D.a)({}, r),
                  {},
                  {
                    alt: n,
                    src: t,
                    onError: function () {
                      t && Zt.push(t),
                        o(function (e) {
                          return e + 1;
                        });
                    },
                  }
                )
              )
            : Object(Xt.jsx)(Ht.L, Object(D.a)({}, r));
        },
        tn = ["address", "size"],
        nn = Object(Vt.e)(en)(
          te ||
            (te = Object(j.a)([
              "\n  width: ",
              ";\n  height: ",
              ";\n  border-radius: ",
              ";\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n  background-color: ",
              ";\n  color: ",
              ";\n",
            ])),
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          },
          function (e) {
            return e.theme.colors.background;
          },
          function (e) {
            return e.theme.colors.text;
          }
        ),
        rn = function (e) {
          var t = e.address,
            n = e.size,
            r = void 0 === n ? "24px" : n,
            c = Object(Gt.a)(e, tn),
            o = Object(a.useMemo)(
              function () {
                var e = Object(ut.d)(t);
                return e
                  ? "https://assets.trustwalletapp.com/blockchains/smartchain/assets/".concat(
                      e,
                      "/logo.png"
                    )
                  : null;
              },
              [t]
            );
          return Object(Xt.jsx)(
            nn,
            Object(D.a)({ size: r, src: o, alt: "token logo" }, c)
          );
        },
        cn = Vt.e.div(
          ne ||
            (ne = Object(j.a)([
              "\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 32px;\n",
            ]))
        ),
        on = function (e) {
          var t = e.address0,
            n = e.address1,
            r = e.size,
            c = void 0 === r ? 16 : r;
          return Object(Xt.jsxs)(cn, {
            children: [
              t &&
                Object(Xt.jsx)(rn, {
                  address: t,
                  size: "".concat(c.toString(), "px"),
                }),
              n &&
                Object(Xt.jsx)(rn, {
                  address: n,
                  size: "".concat(c.toString(), "px"),
                }),
            ],
          });
        },
        an = n(881),
        sn = n.n(an),
        ln = function (e, t) {
          var n = t || { notation: "compact" },
            r = n.notation,
            c = void 0 === r ? "compact" : r,
            o = n.displayThreshold,
            a = n.tokenPrecision,
            i = n.isInteger;
          if (0 === e) return i ? "0" : "0.00";
          if (!e) return "-";
          if (o && e < o) return "<".concat(o);
          if (e < 1 && !a) return e.toFixed(9).match(/^-?\d*\.?0*\d{0,2}/)[0];
          var s = 2;
          a && (s = e < 1 ? 3 : 2);
          var l = "0.".concat("0".repeat(s), "a");
          "standard" === c && (l = "0,0.".concat("0".repeat(s))),
            i && e < 1e3 && (l = "0");
          var u = parseFloat(e.toFixed(s));
          return sn()(u).format(l).toUpperCase();
        },
        un = n(60),
        dn = n(87),
        bn = ["fill"],
        jn = Vt.e.div(
          re ||
            (re = Object(j.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n",
            ]))
        ),
        pn = function (e) {
          var t = e.fill,
            n = void 0 !== t && t,
            r = Object(Gt.a)(e, bn),
            c = Object(dn.a)().theme;
          return Object(Xt.jsx)(
            jn,
            Object(D.a)(
              Object(D.a)({}, r),
              {},
              {
                children: n
                  ? Object(Xt.jsx)(Ht.nb, {
                      stroke: c.colors.warning,
                      color: c.colors.warning,
                    })
                  : Object(Xt.jsx)(Ht.ob, { stroke: c.colors.textDisabled }),
              }
            )
          );
        },
        fn = n(154),
        xn = Vt.e.div(
          ce ||
            (ce = Object(j.a)([
              "\n  position: relative;\n  z-index: 30;\n  width: 100%;\n",
            ]))
        ),
        mn = Object(Vt.e)(Ht.O)(
          oe ||
            (oe = Object(j.a)([
              "\n  z-index: 9999;\n  border: 1px solid ",
              ";\n",
            ])),
          function (e) {
            return e.theme.colors.inputSecondary;
          }
        ),
        On = Vt.e.div(
          ae ||
            (ae = Object(j.a)([
              "\n  display: flex;\n  flex-direction: column;\n  z-index: 9999;\n  width: 100%;\n  top: 50px;\n  max-height: 400px;\n  overflow: auto;\n  right: 0;\n  padding: 1.5rem;\n  padding-bottom: 2.5rem;\n  position: absolute;\n  background: ",
              ";\n  border-radius: 8px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.04);\n  display: ",
              ";\n  border: 1px solid ",
              ";\n  margin-top: 4px;\n  ",
              " {\n    margin-top: 0;\n    width: 500px;\n    max-height: 600px;\n  }\n  ",
              " {\n    margin-top: 0;\n    width: 800px;\n    max-height: 600px;\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.background;
          },
          function (e) {
            return e.hide && "none";
          },
          function (e) {
            return e.theme.colors.secondary;
          },
          function (e) {
            return e.theme.mediaQueries.sm;
          },
          function (e) {
            return e.theme.mediaQueries.md;
          }
        ),
        hn = Vt.e.div(
          ie ||
            (ie = Object(j.a)([
              "\n  position: absolute;\n  min-height: 100vh;\n  width: 100vw;\n  z-index: 10;\n  background-color: black;\n  opacity: 0.7;\n  left: 0;\n  top: 0;\n",
            ]))
        ),
        vn = Vt.e.div(
          se ||
            (se = Object(j.a)([
              "\n  display: grid;\n  grid-gap: 1em;\n  grid-template-columns: 1fr;\n  margin: 8px 0;\n  align-items: center;\n  ",
              " {\n    grid-template-columns: 1.5fr repeat(3, 1fr);\n  }\n",
            ])),
          function (e) {
            return e.theme.mediaQueries.sm;
          }
        ),
        kn = Vt.e.div(
          le ||
            (le = Object(j.a)([
              "\n  height: 1px;\n  background-color: ",
              ";\n  width: 100%;\n  margin: 16px 0;\n",
            ])),
          function (e) {
            return e.theme.colors.cardBorder;
          }
        ),
        yn = Vt.e.div(
          ue ||
            (ue = Object(j.a)([
              "\n  color: ",
              ";\n  display: ",
              ";\n  margin-top: 16px;\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.secondary;
          },
          function (e) {
            return e.hide ? "none" : "block";
          }
        ),
        gn = Vt.e.div(
          de ||
            (de = Object(j.a)([
              "\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n",
            ]))
        ),
        Sn = Vt.e.div(
          be ||
            (be = Object(j.a)([
              "\n  width: fit-content;\n  padding: 4px 8px;\n  border-radius: 8px;\n  display: flex;\n  font-size: 12px;\n  font-weight: 600;\n  margin-right: 10px;\n  justify-content: center;\n  align-items: center;\n  background-color: ",
              ";\n  color: ",
              ";\n  :hover {\n    opacity: 0.6;\n    cursor: pointer;\n  }\n",
            ])),
          function (e) {
            var t = e.theme;
            return e.enabled ? t.colors.primary : "transparent";
          },
          function (e) {
            var t = e.theme;
            return e.enabled ? t.card.background : t.colors.secondary;
          }
        ),
        Dn = function (e, t) {
          return (
            e.address.toLowerCase().includes(t.toLowerCase()) ||
            e.symbol.toLowerCase().includes(t.toLowerCase()) ||
            e.name.toLowerCase().includes(t.toLowerCase())
          );
        },
        wn = function () {
          var e = Object(s.g)(),
            t = Object(Ht.Ib)(),
            n = t.isXs,
            r = t.isSm,
            c = Object(_t.b)().t,
            o = Object(a.useRef)(null),
            i = Object(a.useRef)(null),
            l = Object(a.useRef)(null),
            u = Object(a.useState)(!1),
            d = Object(b.a)(u, 2),
            j = d[0],
            p = d[1],
            f = Object(a.useState)(""),
            x = Object(b.a)(f, 2),
            m = x[0],
            O = x[1],
            h = Object(fn.a)(m, 600),
            v = Yt(h),
            k = v.tokens,
            y = v.pools,
            g = v.tokensLoading,
            S = v.poolsLoading,
            D = v.error,
            w = Object(a.useState)(3),
            C = Object(b.a)(w, 2),
            U = C[0],
            T = C[1],
            I = Object(a.useState)(3),
            F = Object(b.a)(I, 2),
            A = F[0],
            q = F[1];
          Object(a.useEffect)(
            function () {
              T(3), q(3);
            },
            [h]
          );
          var L = function (e) {
            var t = i.current && i.current.contains(e.target),
              n = o.current && o.current.contains(e.target),
              r = l.current && l.current.contains(e.target);
            t || n || r || (q(3), T(3), p(!1));
          };
          Object(a.useEffect)(
            function () {
              j
                ? (document.addEventListener("click", L),
                  (document.querySelector("body").style.overflow = "hidden"))
                : (document.removeEventListener("click", L),
                  (document.querySelector("body").style.overflow = "visible"));
            },
            [j]
          );
          var z = Object(un.m)(),
            $ = Object(b.a)(z, 2),
            B = $[0],
            N = $[1],
            P = Object(un.l)(),
            E = Object(b.a)(P, 2),
            M = E[0],
            V = E[1],
            W = function (t) {
              p(!1), q(3), T(3), e.push(t);
            },
            H = Nt(B),
            _ = H.length !== B.length,
            R = zt(M),
            K = R.length !== M.length,
            Q = Object(a.useState)(!1),
            Y = Object(b.a)(Q, 2),
            G = Y[0],
            X = Y[1],
            J = Object(a.useMemo)(
              function () {
                return G
                  ? H.filter(function (e) {
                      return Dn(e, m);
                    })
                  : k.sort(function (e, t) {
                      return e.volumeUSD > t.volumeUSD ? -1 : 1;
                    });
              },
              [G, k, H, m]
            ),
            Z = Object(a.useMemo)(
              function () {
                return G
                  ? R.filter(function (e) {
                      return (function (e, t) {
                        return (
                          e.address.toLowerCase().includes(t.toLowerCase()) ||
                          Dn(e.token0, t) ||
                          Dn(e.token1, t)
                        );
                      })(e, m);
                    })
                  : y.sort(function (e, t) {
                      return e.volumeUSD > t.volumeUSD ? -1 : 1;
                    });
              },
              [y, G, R, m]
            );
          return Object(Xt.jsxs)(Xt.Fragment, {
            children: [
              j ? Object(Xt.jsx)(hn, {}) : null,
              Object(Xt.jsxs)(xn, {
                children: [
                  Object(Xt.jsx)(mn, {
                    type: "text",
                    value: m,
                    onChange: function (e) {
                      O(e.target.value);
                    },
                    placeholder: c("Search pools or tokens"),
                    ref: o,
                    onFocus: function () {
                      p(!0);
                    },
                  }),
                  Object(Xt.jsxs)(On, {
                    hide: !j,
                    ref: i,
                    children: [
                      Object(Xt.jsxs)(Ht.I, {
                        mb: "16px",
                        children: [
                          Object(Xt.jsx)(Sn, {
                            enabled: !G,
                            onClick: function () {
                              return X(!1);
                            },
                            children: c("Search"),
                          }),
                          Object(Xt.jsx)(Sn, {
                            enabled: G,
                            onClick: function () {
                              return X(!0);
                            },
                            children: c("Watchlist"),
                          }),
                        ],
                      }),
                      D &&
                        Object(Xt.jsx)(Ht.rb, {
                          color: "failure",
                          children: c("Error occurred, please try again"),
                        }),
                      Object(Xt.jsxs)(vn, {
                        children: [
                          Object(Xt.jsx)(Ht.rb, {
                            bold: !0,
                            color: "secondary",
                            children: c("Tokens"),
                          }),
                          !n &&
                            !r &&
                            Object(Xt.jsx)(Ht.rb, {
                              textAlign: "end",
                              fontSize: "12px",
                              children: c("Price"),
                            }),
                          !n &&
                            !r &&
                            Object(Xt.jsx)(Ht.rb, {
                              textAlign: "end",
                              fontSize: "12px",
                              children: c("Volume 24H"),
                            }),
                          !n &&
                            !r &&
                            Object(Xt.jsx)(Ht.rb, {
                              textAlign: "end",
                              fontSize: "12px",
                              children: c("Liquidity"),
                            }),
                        ],
                      }),
                      J.slice(0, U).map(function (e, t) {
                        return Object(Xt.jsx)(
                          gn,
                          {
                            onClick: function () {
                              return W("/info/token/".concat(e.address));
                            },
                            children: Object(Xt.jsxs)(vn, {
                              children: [
                                Object(Xt.jsxs)(Ht.I, {
                                  children: [
                                    Object(Xt.jsx)(rn, { address: e.address }),
                                    Object(Xt.jsx)(Ht.rb, {
                                      ml: "10px",
                                      children: Object(Xt.jsx)(Ht.rb, {
                                        children: ""
                                          .concat(e.name, " (")
                                          .concat(e.symbol, ")"),
                                      }),
                                    }),
                                    Object(Xt.jsx)(pn, {
                                      id: "watchlist-icon",
                                      style: { marginLeft: "8px" },
                                      fill: B.includes(e.address),
                                      onClick: function (t) {
                                        t.stopPropagation(), N(e.address);
                                      },
                                    }),
                                  ],
                                }),
                                !n &&
                                  !r &&
                                  Object(Xt.jsxs)(Ht.rb, {
                                    textAlign: "end",
                                    children: ["$", ln(e.priceUSD)],
                                  }),
                                !n &&
                                  !r &&
                                  Object(Xt.jsxs)(Ht.rb, {
                                    textAlign: "end",
                                    children: ["$", ln(e.volumeUSD)],
                                  }),
                                !n &&
                                  !r &&
                                  Object(Xt.jsxs)(Ht.rb, {
                                    textAlign: "end",
                                    children: ["$", ln(e.liquidityUSD)],
                                  }),
                              ],
                            }),
                          },
                          t
                        );
                      }),
                      (function () {
                        var e = G ? _ : g,
                          t = 0 === J.length && !e && h.length >= 2,
                          n = 0 === J.length && !e,
                          r = G ? n : t,
                          o = c(
                            G ? "Saved tokens will appear here" : "No results"
                          );
                        return Object(Xt.jsxs)(Xt.Fragment, {
                          children: [
                            e && Object(Xt.jsx)(Ht.kb, {}),
                            r && Object(Xt.jsx)(Ht.rb, { children: o }),
                            !G &&
                              h.length < 2 &&
                              Object(Xt.jsx)(Ht.rb, {
                                children: c("Search pools or tokens"),
                              }),
                          ],
                        });
                      })(),
                      Object(Xt.jsx)(yn, {
                        onClick: function () {
                          T(U + 5);
                        },
                        hide: J.length <= U,
                        ref: l,
                        children: c("See more..."),
                      }),
                      Object(Xt.jsx)(kn, {}),
                      Object(Xt.jsxs)(vn, {
                        children: [
                          Object(Xt.jsx)(Ht.rb, {
                            bold: !0,
                            color: "secondary",
                            mb: "8px",
                            children: c("Pools"),
                          }),
                          !n &&
                            !r &&
                            Object(Xt.jsx)(Ht.rb, {
                              textAlign: "end",
                              fontSize: "12px",
                              children: c("Volume 24H"),
                            }),
                          !n &&
                            !r &&
                            Object(Xt.jsx)(Ht.rb, {
                              textAlign: "end",
                              fontSize: "12px",
                              children: c("Volume 7D"),
                            }),
                          !n &&
                            !r &&
                            Object(Xt.jsx)(Ht.rb, {
                              textAlign: "end",
                              fontSize: "12px",
                              children: c("Liquidity"),
                            }),
                        ],
                      }),
                      Z.slice(0, A).map(function (e, t) {
                        return Object(Xt.jsx)(
                          gn,
                          {
                            onClick: function () {
                              return W("/info/pool/".concat(e.address));
                            },
                            children: Object(Xt.jsxs)(vn, {
                              children: [
                                Object(Xt.jsxs)(Ht.I, {
                                  children: [
                                    Object(Xt.jsx)(on, {
                                      address0: e.token0.address,
                                      address1: e.token1.address,
                                    }),
                                    Object(Xt.jsx)(Ht.rb, {
                                      ml: "10px",
                                      style: { whiteSpace: "nowrap" },
                                      children: Object(Xt.jsx)(Ht.rb, {
                                        children: ""
                                          .concat(e.token0.symbol, " / ")
                                          .concat(e.token1.symbol),
                                      }),
                                    }),
                                    Object(Xt.jsx)(pn, {
                                      id: "watchlist-icon",
                                      style: { marginLeft: "10px" },
                                      fill: M.includes(e.address),
                                      onClick: function (t) {
                                        t.stopPropagation(), V(e.address);
                                      },
                                    }),
                                  ],
                                }),
                                !n &&
                                  !r &&
                                  Object(Xt.jsxs)(Ht.rb, {
                                    textAlign: "end",
                                    children: ["$", ln(e.volumeUSD)],
                                  }),
                                !n &&
                                  !r &&
                                  Object(Xt.jsxs)(Ht.rb, {
                                    textAlign: "end",
                                    children: ["$", ln(e.volumeUSDWeek)],
                                  }),
                                !n &&
                                  !r &&
                                  Object(Xt.jsxs)(Ht.rb, {
                                    textAlign: "end",
                                    children: ["$", ln(e.liquidityUSD)],
                                  }),
                              ],
                            }),
                          },
                          t
                        );
                      }),
                      (function () {
                        var e = G ? K : S,
                          t = 0 === Z.length && !S && h.length >= 2,
                          n = 0 === Z.length && !e,
                          r = G ? n : t,
                          o = c(
                            G ? "Saved tokens will appear here" : "No results"
                          );
                        return Object(Xt.jsxs)(Xt.Fragment, {
                          children: [
                            e && Object(Xt.jsx)(Ht.kb, {}),
                            r && Object(Xt.jsx)(Ht.rb, { children: o }),
                            !G &&
                              h.length < 2 &&
                              Object(Xt.jsx)(Ht.rb, {
                                children: c("Search pools or tokens"),
                              }),
                          ],
                        });
                      })(),
                      Object(Xt.jsx)(yn, {
                        onClick: function () {
                          q(A + 5);
                        },
                        hide: Z.length <= A,
                        ref: l,
                        children: c("See more..."),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Cn = Object(Vt.e)(Ht.I)(
          je ||
            (je = Object(j.a)([
              "\n  background: ",
              ";\n  justify-content: space-between;\n  padding: 20px 16px;\n  flex-direction: column;\n  gap: 8px;\n  ",
              " {\n    padding: 20px 40px;\n    flex-direction: row;\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.gradients.cardHeader;
          },
          function (e) {
            return e.theme.mediaQueries.sm;
          }
        ),
        Un = function () {
          var e = Object(_t.b)().t,
            t = 0;
          return (
            Object(s.i)(["/info/pools", "/info/pool", "/info/pair"]) && (t = 1),
            Object(s.i)(["/info/tokens", "/info/token"]) && (t = 2),
            Object(Xt.jsxs)(Cn, {
              children: [
                Object(Xt.jsx)(Ht.k, {
                  children: Object(Xt.jsxs)(Ht.n, {
                    activeIndex: t,
                    scale: "sm",
                    variant: "subtle",
                    children: [
                      Object(Xt.jsx)(Ht.o, {
                        as: Wt.a,
                        to: "/info",
                        children: e("Overview"),
                      }),
                      Object(Xt.jsx)(Ht.o, {
                        as: Wt.a,
                        to: "/info/pools",
                        children: e("Pools"),
                      }),
                      Object(Xt.jsx)(Ht.o, {
                        as: Wt.a,
                        to: "/info/tokens",
                        children: e("Tokens"),
                      }),
                    ],
                  }),
                }),
                Object(Xt.jsx)(Ht.k, {
                  width: ["100%", "100%", "250px"],
                  children: Object(Xt.jsx)(wn, {}),
                }),
              ],
            })
          );
        },
        Tn = n(674),
        In = n(1148),
        Fn = n(192),
        An = n(1141),
        qn = n(1142),
        Ln = n(806),
        zn = n(807),
        $n = n(1134),
        Bn = n(940),
        Nn = function (e) {
          return Object(Xt.jsxs)(
            Ht.pb,
            Object(D.a)(
              Object(D.a)(
                {
                  width: "100%",
                  height: "100%",
                  preserveAspectRatio: "none",
                  viewBox: "0 0 100 50",
                },
                e
              ),
              {},
              {
                children: [
                  Object(Xt.jsx)("path", {
                    d: "M 0 49 C 1 49 1 45 4 47 C 7 49 7 35 11 37 C 13 38 14 32 16 34 C 18 35.6667 20 40 22 39 C 24 38 24 34 26 34 C 27 34 29 39 32 36 C 33 35 34 32 35 32 C 37 32 37 35 39 34 C 40 33 39 29 43 31 C 46 32 45 28 47 30 C 50 32 49 22 51 24 Q 53 26 55 24 C 56 23 56 25 57 26 C 58 27 59 28 60 28 C 63 28 66 17 67 16 C 68 15 69 17 70 16 C 71 15 71 13 74 13 C 76 13 76 14 77 15 C 79 17 80 18 82 18 C 83 18 83 17 84 17 C 87 17 89 24 91 24 C 93 24 95 20 96 17 C 97.6667 13.3333 98 9 101 6",
                    stroke: "#7645D9",
                    strokeWidth: "0.2",
                    strokeDasharray: "156",
                    strokeDashoffset: "156",
                    fill: "transparent",
                    opacity: "0.5",
                    filter: "url(#glow)",
                    children: Object(Xt.jsx)("animate", {
                      id: "firstline",
                      attributeName: "stroke-dashoffset",
                      dur: "2s",
                      from: "156",
                      to: "-156",
                      begin: "0s;firstline.end+0.5s",
                    }),
                  }),
                  Object(Xt.jsx)("path", {
                    d: "M 0 49 C 1 49 1 45 4 47 C 7 49 7 35 11 37 C 13 38 14 32 16 34 C 18 35.6667 20 40 22 39 C 24 38 24 34 26 34 C 27 34 29 39 32 36 C 33 35 34 32 35 32 C 37 32 37 35 39 34 C 40 33 39 29 43 31 C 46 32 45 28 47 30 C 50 32 49 22 51 24 Q 53 26 55 24 C 56 23 56 25 57 26 C 58 27 59 28 60 28 C 63 28 66 17 67 16 C 68 15 69 17 70 16 C 71 15 71 13 74 13 C 76 13 76 14 77 15 C 79 17 80 18 82 18 C 83 18 83 17 84 17 C 87 17 89 24 91 24 C 93 24 95 20 96 17 C 97.6667 13.3333 98 9 101 6",
                    stroke: "#7645D9",
                    strokeWidth: "0.2",
                    strokeDasharray: "156",
                    strokeDashoffset: "156",
                    fill: "transparent",
                    opacity: "0.5",
                    filter: "url(#glow)",
                    children: Object(Xt.jsx)("animate", {
                      id: "secondline",
                      attributeName: "stroke-dashoffset",
                      dur: "2s",
                      from: "156",
                      to: "-156",
                      begin: "1.3s;secondline.end+0.5s",
                    }),
                  }),
                  Object(Xt.jsx)("defs", {
                    children: Object(Xt.jsxs)("filter", {
                      id: "glow",
                      children: [
                        Object(Xt.jsx)("feGaussianBlur", {
                          className: "blur",
                          result: "coloredBlur",
                          stdDeviation: "4",
                        }),
                        Object(Xt.jsxs)("feMerge", {
                          children: [
                            Object(Xt.jsx)("feMergeNode", {
                              in: "coloredBlur",
                            }),
                            Object(Xt.jsx)("feMergeNode", {
                              in: "coloredBlur",
                            }),
                            Object(Xt.jsx)("feMergeNode", {
                              in: "coloredBlur",
                            }),
                            Object(Xt.jsx)("feMergeNode", {
                              in: "SourceGraphic",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }
            )
          );
        },
        Pn = function (e) {
          return Object(Xt.jsxs)(
            Ht.pb,
            Object(D.a)(
              Object(D.a)(
                {
                  width: "100%",
                  height: "100%",
                  viewBox: "0 0 50 25",
                  preserveAspectRatio: "none",
                  opacity: "0.1",
                },
                e
              ),
              {},
              {
                children: [
                  Object(Xt.jsxs)("rect", {
                    width: "8%",
                    fill: "#1FC7D4",
                    children: [
                      Object(Xt.jsx)("animate", {
                        attributeName: "height",
                        dur: "0.9s",
                        values: "15%; 90%; 15%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.9s",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "y",
                        dur: "0.9s",
                        values: "85%; 10%; 85%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.9s",
                      }),
                    ],
                  }),
                  Object(Xt.jsxs)("rect", {
                    x: "10.222%",
                    width: "8%",
                    fill: "#1FC7D4",
                    children: [
                      Object(Xt.jsx)("animate", {
                        attributeName: "height",
                        dur: "0.9s",
                        values: "15%; 90%; 15%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.8s",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "y",
                        dur: "0.9s",
                        values: "85%; 10%; 85%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.8s",
                      }),
                    ],
                  }),
                  Object(Xt.jsxs)("rect", {
                    x: "20.444%",
                    width: "8%",
                    fill: "#1FC7D4",
                    children: [
                      Object(Xt.jsx)("animate", {
                        attributeName: "height",
                        dur: "0.9s",
                        values: "15%; 90%; 15%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.7s",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "y",
                        dur: "0.9s",
                        values: "85%; 10%; 85%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.7s",
                      }),
                    ],
                  }),
                  Object(Xt.jsxs)("rect", {
                    x: "30.666%",
                    width: "8%",
                    fill: "#1FC7D4",
                    children: [
                      Object(Xt.jsx)("animate", {
                        attributeName: "height",
                        dur: "0.9s",
                        values: "15%; 90%; 15%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.6s",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "y",
                        dur: "0.9s",
                        values: "85%; 10%; 85%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.6s",
                      }),
                    ],
                  }),
                  Object(Xt.jsxs)("rect", {
                    x: "40.888%",
                    width: "8%",
                    fill: "#1FC7D4",
                    children: [
                      Object(Xt.jsx)("animate", {
                        attributeName: "height",
                        dur: "0.9s",
                        values: "15%; 90%; 15%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.5s",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "y",
                        dur: "0.9s",
                        values: "85%; 10%; 85%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.5s",
                      }),
                    ],
                  }),
                  Object(Xt.jsxs)("rect", {
                    x: "51.11%",
                    width: "8%",
                    fill: "#1FC7D4",
                    children: [
                      Object(Xt.jsx)("animate", {
                        attributeName: "height",
                        dur: "0.9s",
                        values: "15%; 90%; 15%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.4s",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "y",
                        dur: "0.9s",
                        values: "85%; 10%; 85%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.4s",
                      }),
                    ],
                  }),
                  Object(Xt.jsxs)("rect", {
                    x: "61.332%",
                    width: "8%",
                    fill: "#1FC7D4",
                    children: [
                      Object(Xt.jsx)("animate", {
                        attributeName: "height",
                        dur: "0.9s",
                        values: "15%; 90%; 15%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.3s",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "y",
                        dur: "0.9s",
                        values: "85%; 10%; 85%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.3s",
                      }),
                    ],
                  }),
                  Object(Xt.jsxs)("rect", {
                    x: "71.554%",
                    width: "8%",
                    fill: "#1FC7D4",
                    children: [
                      Object(Xt.jsx)("animate", {
                        attributeName: "height",
                        dur: "0.9s",
                        values: "15%; 90%; 15%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.2s",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "y",
                        dur: "0.9s",
                        values: "85%; 10%; 85%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.2s",
                      }),
                    ],
                  }),
                  Object(Xt.jsxs)("rect", {
                    x: "81.776%",
                    width: "8%",
                    fill: "#1FC7D4",
                    children: [
                      Object(Xt.jsx)("animate", {
                        attributeName: "height",
                        dur: "0.9s",
                        values: "15%; 90%; 15%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.1s",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "y",
                        dur: "0.9s",
                        values: "85%; 10%; 85%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.1s",
                      }),
                    ],
                  }),
                  Object(Xt.jsxs)("rect", {
                    x: "91.998%",
                    width: "8%",
                    fill: "#1FC7D4",
                    children: [
                      Object(Xt.jsx)("animate", {
                        attributeName: "height",
                        dur: "0.9s",
                        values: "15%; 90%; 15%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "y",
                        dur: "0.9s",
                        values: "85%; 10%; 85%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                      }),
                    ],
                  }),
                ],
              }
            )
          );
        },
        En = function (e) {
          return Object(Xt.jsxs)(
            Ht.pb,
            Object(D.a)(
              Object(D.a)(
                {
                  width: "100%",
                  height: "100%",
                  viewBox: "0 0 100 50",
                  opacity: "0.1",
                },
                e
              ),
              {},
              {
                children: [
                  Object(Xt.jsxs)("rect", {
                    width: "5%",
                    fill: "#31D0AA",
                    children: [
                      Object(Xt.jsx)("animate", {
                        attributeName: "height",
                        dur: "2s",
                        values: "0%; 40%; 40%; 10%; 10%",
                        keyTimes: "0; 0.125; 0.5; 0.625; 1",
                        repeatCount: "indefinite",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "y",
                        dur: "2s",
                        from: "50%",
                        to: "30%",
                        values: "30%; 10%; 10%; 25%; 25%",
                        keyTimes: "0; 0.125; 0.5; 0.625; 1",
                        repeatCount: "indefinite",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "rx",
                        dur: "2s",
                        values: "0%; 0%; 100%; 100%;",
                        keyTimes: "0; 0.6; 0.625; 1",
                        repeatCount: "indefinite",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "x",
                        dur: "2s",
                        values: "32.5%; 32.5%; 47.5%; 47.5%;",
                        keyTimes: "0; 0.7; 0.8; 1",
                        repeatCount: "indefinite",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "opacity",
                        dur: "2s",
                        values: "1; 1; 0; 0;",
                        keyTimes: "0; 0.75; 0.9; 1",
                        repeatCount: "indefinite",
                      }),
                    ],
                  }),
                  Object(Xt.jsxs)("rect", {
                    width: "5%",
                    fill: "#31D0AA",
                    children: [
                      Object(Xt.jsx)("animate", {
                        attributeName: "height",
                        dur: "2s",
                        values: "0%; 0%; 20%; 20%; 10%; 10%",
                        keyTimes: "0; 0.125; 0.25; 0.5; 0.625; 1",
                        repeatCount: "indefinite",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "y",
                        dur: "2s",
                        values: "15%; 15%; 5%; 5%; 25%; 25%",
                        keyTimes: "0; 0.125; 0.25; 0.5; 0.625; 1",
                        repeatCount: "indefinite",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "rx",
                        dur: "2s",
                        values: "0%; 0%; 100%; 100%;",
                        keyTimes: "0; 0.6; 0.625; 1",
                        repeatCount: "indefinite",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "x",
                        dur: "2s",
                        values: "42.5%; 42.5%; 47.5%; 47.5%;",
                        keyTimes: "0; 0.7; 0.8; 1",
                        repeatCount: "indefinite",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "opacity",
                        dur: "2s",
                        values: "1; 1; 0; 0;",
                        keyTimes: "0; 0.75; 0.9; 1",
                        repeatCount: "indefinite",
                      }),
                    ],
                  }),
                  Object(Xt.jsxs)("rect", {
                    width: "5%",
                    fill: "#ED4B9E",
                    children: [
                      Object(Xt.jsx)("animate", {
                        attributeName: "height",
                        dur: "2s",
                        values: "0%; 0%; 35%; 35%; 10%; 10%",
                        keyTimes: "0; 0.25; 0.375; 0.5; 0.625; 1",
                        repeatCount: "indefinite",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "y",
                        dur: "2s",
                        values: "25%; 25%; 10%; 10%; 25%; 25%",
                        keyTimes: "0; 0.25; 0.375; 0.5; 0.625; 1",
                        repeatCount: "indefinite",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "rx",
                        dur: "2s",
                        values: "0%; 0%; 100%; 100%;",
                        keyTimes: "0; 0.6; 0.625; 1",
                        repeatCount: "indefinite",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "x",
                        dur: "2s",
                        values: "52.5%; 52.5%; 47.5%; 47.5%;",
                        keyTimes: "0; 0.7; 0.8; 1",
                        repeatCount: "indefinite",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "opacity",
                        dur: "2s",
                        values: "1; 1; 0; 0;",
                        keyTimes: "0; 0.75; 0.9; 1",
                        repeatCount: "indefinite",
                      }),
                    ],
                  }),
                  Object(Xt.jsxs)("rect", {
                    width: "5%",
                    fill: "#31D0AA",
                    children: [
                      Object(Xt.jsx)("animate", {
                        attributeName: "height",
                        dur: "2s",
                        values: "0%; 0%; 35%; 35%; 10%; 10%",
                        keyTimes: "0; 0.375; 0.5; 0.5; 0.625; 1",
                        repeatCount: "indefinite",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "y",
                        dur: "2s",
                        values: "15%; 15%; 0%; 0%; 25%; 25%",
                        keyTimes: "0; 0.375; 0.5; 0.5; 0.625; 1",
                        repeatCount: "indefinite",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "rx",
                        dur: "2s",
                        values: "0%; 0%; 100%; 100%;",
                        keyTimes: "0; 0.6; 0.625; 1",
                        repeatCount: "indefinite",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "x",
                        dur: "2s",
                        values: "62.5%; 62.5%; 47.5%; 47.5%;",
                        keyTimes: "0; 0.7; 0.8; 1",
                        repeatCount: "indefinite",
                      }),
                      Object(Xt.jsx)("animate", {
                        attributeName: "opacity",
                        dur: "2s",
                        values: "1; 1; 0; 0;",
                        keyTimes: "0; 0.75; 0.9; 1",
                        repeatCount: "indefinite",
                      }),
                    ],
                  }),
                ],
              }
            )
          );
        },
        Mn = Object(Vt.e)(Ht.k)(
          pe ||
            (pe = Object(j.a)([
              "\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  top: 50%;\n  left: 0;\n  right: 0;\n  text-align: center;\n",
            ]))
        ),
        Vn = Object(Vt.e)(Ht.k)(
          fe ||
            (fe = Object(j.a)(["\n  height: 100%;\n  position: relative;\n"]))
        ),
        Wn = function () {
          var e = Object(_t.b)().t;
          return Object(Xt.jsxs)(Vn, {
            children: [
              Object(Xt.jsx)(Pn, {}),
              Object(Xt.jsx)(Mn, {
                children: Object(Xt.jsx)(Ht.rb, {
                  color: "textSubtle",
                  fontSize: "20px",
                  children: e("Loading chart data..."),
                }),
              }),
            ],
          });
        },
        Hn = function () {
          var e = Object(_t.b)().t;
          return Object(Xt.jsxs)(Vn, {
            children: [
              Object(Xt.jsx)(Nn, {}),
              Object(Xt.jsx)(Mn, {
                children: Object(Xt.jsx)(Ht.rb, {
                  color: "textSubtle",
                  fontSize: "20px",
                  children: e("Loading chart data..."),
                }),
              }),
            ],
          });
        },
        _n = function () {
          var e = Object(_t.b)().t;
          return Object(Xt.jsxs)(Vn, {
            children: [
              Object(Xt.jsx)(En, {}),
              Object(Xt.jsx)(Mn, {
                children: Object(Xt.jsx)(Ht.rb, {
                  color: "textSubtle",
                  fontSize: "20px",
                  children: e("Loading chart data..."),
                }),
              }),
            ],
          });
        },
        Rn = function (e) {
          var t = e.payload,
            n = e.setHoverValue,
            r = e.setHoverDate;
          return (
            Object(a.useEffect)(
              function () {
                n(t.value), r(Object(Tn.default)(t.time, "MMM d, yyyy"));
              },
              [t.value, t.time, n, r]
            ),
            null
          );
        },
        Kn = function (e) {
          var t = e.data,
            n = e.setHoverValue,
            r = e.setHoverDate,
            c = Object(dn.a)().theme;
          return t && 0 !== t.length
            ? Object(Xt.jsx)(An.a, {
                children: Object(Xt.jsxs)(qn.a, {
                  data: t,
                  width: 300,
                  height: 308,
                  margin: { top: 5, right: 15, left: 0, bottom: 5 },
                  onMouseLeave: function () {
                    r && r(void 0), n && n(void 0);
                  },
                  children: [
                    Object(Xt.jsx)("defs", {
                      children: Object(Xt.jsxs)("linearGradient", {
                        id: "gradient",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                          Object(Xt.jsx)("stop", {
                            offset: "5%",
                            stopColor: c.colors.inputSecondary,
                            stopOpacity: 0.5,
                          }),
                          Object(Xt.jsx)("stop", {
                            offset: "100%",
                            stopColor: c.colors.secondary,
                            stopOpacity: 0,
                          }),
                        ],
                      }),
                    }),
                    Object(Xt.jsx)(Ln.a, {
                      dataKey: "time",
                      axisLine: !1,
                      tickLine: !1,
                      tickFormatter: function (e) {
                        return Object(Tn.default)(e, "dd");
                      },
                      minTickGap: 10,
                    }),
                    Object(Xt.jsx)(zn.a, {
                      dataKey: "value",
                      tickCount: 6,
                      scale: "linear",
                      axisLine: !1,
                      tickLine: !1,
                      fontSize: "12px",
                      tickFormatter: function (e) {
                        return "$".concat(ln(e));
                      },
                      orientation: "right",
                      tick: { dx: 10, fill: c.colors.textSubtle },
                    }),
                    Object(Xt.jsx)($n.a, {
                      cursor: { stroke: c.colors.secondary },
                      contentStyle: { display: "none" },
                      formatter: function (e, t, c) {
                        return Object(Xt.jsx)(Rn, {
                          payload: c.payload,
                          setHoverValue: n,
                          setHoverDate: r,
                        });
                      },
                    }),
                    Object(Xt.jsx)(Bn.a, {
                      dataKey: "value",
                      type: "monotone",
                      stroke: c.colors.secondary,
                      fill: "url(#gradient)",
                      strokeWidth: 2,
                    }),
                  ],
                }),
              })
            : Object(Xt.jsx)(Hn, {});
        },
        Qn = ["value"],
        Yn = function (e) {
          var t = e.value,
            n = Object(Gt.a)(e, Qn);
          if (!t || Number.isNaN(t))
            return Object(Xt.jsx)(
              Ht.rb,
              Object(D.a)(Object(D.a)({}, n), {}, { children: "-" })
            );
          var r = t < 0;
          return Object(Xt.jsxs)(
            Ht.rb,
            Object(D.a)(
              Object(D.a)({}, n),
              {},
              {
                color: r ? "failure" : "success",
                children: [
                  r ? "\u2193" : "\u2191",
                  Math.abs(t).toFixed(2),
                  "%",
                ],
              }
            )
          );
        },
        Gn = Object(Vt.e)(Ht.rb)(
          xe || (xe = Object(j.a)(["\n  cursor: pointer;\n"]))
        ),
        Xn = Object(Vt.e)(Ht.I)(
          me ||
            (me = Object(j.a)([
              "\n  width: 100%;\n  padding-top: 16px;\n  flex-direction: column;\n  gap: 16px;\n  background-color: ",
              ";\n  border-radius: ",
              ";\n  border: 1px solid ",
              ";\n",
            ])),
          function (e) {
            return e.theme.card.background;
          },
          function (e) {
            return e.theme.radii.card;
          },
          function (e) {
            return e.theme.colors.cardBorder;
          }
        ),
        Jn = Vt.e.div(
          Oe ||
            (Oe = Object(j.a)([
              "\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.2em;\n  margin-bottom: 1.2em;\n",
            ]))
        ),
        Zn = Vt.e.div(
          he ||
            (he = Object(j.a)([
              "\n  color: ",
              ";\n  padding: 0 20px;\n  :hover {\n    cursor: pointer;\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.primary;
          }
        ),
        er = Vt.e.div(
          ve ||
            (ve = Object(j.a)([
              "\n  height: 1px;\n  background-color: ",
              ";\n  width: 100%;\n",
            ])),
          function (e) {
            return e.theme.colors.cardBorder;
          }
        ),
        tr = Vt.e.div(
          ke ||
            (ke = Object(j.a)([
              "\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n\n  padding: 0 24px;\n\n  grid-template-columns: 20px 3fr repeat(4, 1fr);\n\n  @media screen and (max-width: 900px) {\n    grid-template-columns: 20px 2fr repeat(3, 1fr);\n    & :nth-child(4) {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 20px 2fr repeat(2, 1fr);\n    & :nth-child(6) {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 670px) {\n    grid-template-columns: 1fr 1fr;\n    > *:first-child {\n      display: none;\n    }\n    > *:nth-child(3) {\n      display: none;\n    }\n  }\n",
            ]))
        ),
        nr = Object(Vt.e)(Wt.a)(
          ye ||
            (ye = Object(j.a)([
              "\n  text-decoration: none;\n  :hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n",
            ]))
        ),
        rr = Object(Vt.e)(rn)(
          ge ||
            (ge = Object(j.a)([
              "\n  @media screen and (max-width: 670px) {\n    width: 16px;\n    height: 16px;\n  }\n",
            ]))
        ),
        cr = function () {
          var e = Object(Xt.jsxs)(tr, {
            children: [
              Object(Xt.jsx)(Ht.kb, {}),
              Object(Xt.jsx)(Ht.kb, {}),
              Object(Xt.jsx)(Ht.kb, {}),
              Object(Xt.jsx)(Ht.kb, {}),
              Object(Xt.jsx)(Ht.kb, {}),
              Object(Xt.jsx)(Ht.kb, {}),
            ],
          });
          return Object(Xt.jsxs)(Xt.Fragment, { children: [e, e, e] });
        },
        or = function (e) {
          var t = e.tokenData,
            n = e.index,
            r = Object(Ht.Ib)(),
            c = r.isXs,
            o = r.isSm;
          return Object(Xt.jsx)(nr, {
            to: "/info/token/".concat(t.address),
            children: Object(Xt.jsxs)(tr, {
              children: [
                Object(Xt.jsx)(Ht.I, {
                  children: Object(Xt.jsx)(Ht.rb, { children: n + 1 }),
                }),
                Object(Xt.jsxs)(Ht.I, {
                  alignItems: "center",
                  children: [
                    Object(Xt.jsx)(rr, { address: t.address }),
                    (c || o) &&
                      Object(Xt.jsx)(Ht.rb, { ml: "8px", children: t.symbol }),
                    !c &&
                      !o &&
                      Object(Xt.jsxs)(Ht.I, {
                        marginLeft: "10px",
                        children: [
                          Object(Xt.jsx)(Ht.rb, { children: t.name }),
                          Object(Xt.jsxs)(Ht.rb, {
                            ml: "8px",
                            children: ["(", t.symbol, ")"],
                          }),
                        ],
                      }),
                  ],
                }),
                Object(Xt.jsxs)(Ht.rb, {
                  fontWeight: 400,
                  children: ["$", ln(t.priceUSD, { notation: "standard" })],
                }),
                Object(Xt.jsx)(Ht.rb, {
                  fontWeight: 400,
                  children: Object(Xt.jsx)(Yn, {
                    value: t.priceUSDChange,
                    fontWeight: 400,
                  }),
                }),
                Object(Xt.jsxs)(Ht.rb, {
                  fontWeight: 400,
                  children: ["$", ln(t.volumeUSD)],
                }),
                Object(Xt.jsxs)(Ht.rb, {
                  fontWeight: 400,
                  children: ["$", ln(t.liquidityUSD)],
                }),
              ],
            }),
          });
        },
        ar = "name",
        ir = "volumeUSD",
        sr = "tvlUSD",
        lr = "priceUSD",
        ur = "priceUSDChange",
        dr = function (e) {
          var t = e.tokenDatas,
            n = e.maxItems,
            r = void 0 === n ? 10 : n,
            c = Object(a.useState)(ir),
            o = Object(b.a)(c, 2),
            s = o[0],
            l = o[1],
            u = Object(a.useState)(!0),
            d = Object(b.a)(u, 2),
            j = d[0],
            p = d[1],
            f = Object(_t.b)().t,
            x = Object(a.useState)(1),
            m = Object(b.a)(x, 2),
            O = m[0],
            h = m[1],
            v = Object(a.useState)(1),
            k = Object(b.a)(v, 2),
            y = k[0],
            g = k[1];
          Object(a.useEffect)(
            function () {
              var e = 1;
              t &&
                (t.length % r === 0 && (e = 0),
                g(Math.floor(t.length / r) + e));
            },
            [r, t]
          );
          var S = Object(a.useMemo)(
              function () {
                return t
                  ? t
                      .sort(function (e, t) {
                        return e && t
                          ? e[s] > t[s]
                            ? 1 * (j ? -1 : 1)
                            : -1 * (j ? -1 : 1)
                          : -1;
                      })
                      .slice(r * (O - 1), O * r)
                  : [];
              },
              [t, r, O, j, s]
            ),
            D = Object(a.useCallback)(
              function (e) {
                l(e), p(s !== e || !j);
              },
              [j, s]
            ),
            w = Object(a.useCallback)(
              function (e) {
                return s === e ? (j ? "\u2193" : "\u2191") : "";
              },
              [j, s]
            );
          return t
            ? Object(Xt.jsxs)(Xn, {
                children: [
                  Object(Xt.jsxs)(tr, {
                    children: [
                      Object(Xt.jsx)(Ht.rb, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: !0,
                        children: "#",
                      }),
                      Object(Xt.jsxs)(Gn, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: !0,
                        onClick: function () {
                          return D(ar);
                        },
                        textTransform: "uppercase",
                        children: [f("Name"), " ", w(ar)],
                      }),
                      Object(Xt.jsxs)(Gn, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: !0,
                        onClick: function () {
                          return D(lr);
                        },
                        textTransform: "uppercase",
                        children: [f("Price"), " ", w(lr)],
                      }),
                      Object(Xt.jsxs)(Gn, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: !0,
                        onClick: function () {
                          return D(ur);
                        },
                        textTransform: "uppercase",
                        children: [f("Price Change"), " ", w(ur)],
                      }),
                      Object(Xt.jsxs)(Gn, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: !0,
                        onClick: function () {
                          return D(ir);
                        },
                        textTransform: "uppercase",
                        children: [f("Volume 24H"), " ", w(ir)],
                      }),
                      Object(Xt.jsxs)(Gn, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: !0,
                        onClick: function () {
                          return D(sr);
                        },
                        textTransform: "uppercase",
                        children: [f("Liquidity"), " ", w(sr)],
                      }),
                    ],
                  }),
                  Object(Xt.jsx)(er, {}),
                  S.length > 0
                    ? Object(Xt.jsxs)(Xt.Fragment, {
                        children: [
                          S.map(function (e, t) {
                            return e
                              ? Object(Xt.jsxs)(
                                  i.a.Fragment,
                                  {
                                    children: [
                                      Object(Xt.jsx)(or, {
                                        index: 10 * (O - 1) + t,
                                        tokenData: e,
                                      }),
                                      Object(Xt.jsx)(er, {}),
                                    ],
                                  },
                                  e.address
                                )
                              : null;
                          }),
                          Object(Xt.jsxs)(Jn, {
                            children: [
                              Object(Xt.jsx)(Zn, {
                                onClick: function () {
                                  h(1 === O ? O : O - 1);
                                },
                                children: Object(Xt.jsx)(Ht.c, {
                                  color: 1 === O ? "textDisabled" : "primary",
                                }),
                              }),
                              Object(Xt.jsx)(Ht.rb, {
                                children: f("Page %page% of %maxPage%", {
                                  page: O,
                                  maxPage: y,
                                }),
                              }),
                              Object(Xt.jsx)(Zn, {
                                onClick: function () {
                                  h(O === y ? O : O + 1);
                                },
                                children: Object(Xt.jsx)(Ht.f, {
                                  color: O === y ? "textDisabled" : "primary",
                                }),
                              }),
                            ],
                          }),
                        ],
                      })
                    : Object(Xt.jsxs)(Xt.Fragment, {
                        children: [
                          Object(Xt.jsx)(cr, {}),
                          Object(Xt.jsx)(Ht.k, {}),
                        ],
                      }),
                ],
              })
            : Object(Xt.jsx)(Ht.kb, {});
        },
        br = Vt.e.div(
          Se ||
            (Se = Object(j.a)([
              "\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n  grid-template-columns: 20px 3.5fr repeat(5, 1fr);\n\n  padding: 0 24px;\n  @media screen and (max-width: 900px) {\n    grid-template-columns: 20px 1.5fr repeat(3, 1fr);\n    & :nth-child(4),\n    & :nth-child(5) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 500px) {\n    grid-template-columns: 20px 1.5fr repeat(1, 1fr);\n    & :nth-child(4),\n    & :nth-child(5),\n    & :nth-child(6),\n    & :nth-child(7) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 480px) {\n    grid-template-columns: 2.5fr repeat(1, 1fr);\n    > *:nth-child(1) {\n      display: none;\n    }\n  }\n",
            ]))
        ),
        jr = Object(Vt.e)(Wt.a)(
          De ||
            (De = Object(j.a)([
              "\n  text-decoration: none;\n  :hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n",
            ]))
        ),
        pr = "volumeUSD",
        fr = "tvlUSD",
        xr = "volumeUSDWeek",
        mr = "lpFees24h",
        Or = "lpApr7d",
        hr = function () {
          return Object(Xt.jsxs)(br, {
            children: [
              Object(Xt.jsx)(Ht.kb, {}),
              Object(Xt.jsx)(Ht.kb, {}),
              Object(Xt.jsx)(Ht.kb, {}),
              Object(Xt.jsx)(Ht.kb, {}),
              Object(Xt.jsx)(Ht.kb, {}),
              Object(Xt.jsx)(Ht.kb, {}),
              Object(Xt.jsx)(Ht.kb, {}),
            ],
          });
        },
        vr = function () {
          return Object(Xt.jsxs)(Xt.Fragment, {
            children: [
              Object(Xt.jsx)(hr, {}),
              Object(Xt.jsx)(hr, {}),
              Object(Xt.jsx)(hr, {}),
            ],
          });
        },
        kr = function (e) {
          var t = e.poolData,
            n = e.index;
          return Object(Xt.jsx)(jr, {
            to: "/info/pool/".concat(t.address),
            children: Object(Xt.jsxs)(br, {
              children: [
                Object(Xt.jsx)(Ht.rb, { children: n + 1 }),
                Object(Xt.jsxs)(Ht.I, {
                  children: [
                    Object(Xt.jsx)(on, {
                      address0: t.token0.address,
                      address1: t.token1.address,
                    }),
                    Object(Xt.jsxs)(Ht.rb, {
                      ml: "8px",
                      children: [t.token0.symbol, "/", t.token1.symbol],
                    }),
                  ],
                }),
                Object(Xt.jsxs)(Ht.rb, { children: ["$", ln(t.volumeUSD)] }),
                Object(Xt.jsxs)(Ht.rb, {
                  children: ["$", ln(t.volumeUSDWeek)],
                }),
                Object(Xt.jsxs)(Ht.rb, { children: ["$", ln(t.lpFees24h)] }),
                Object(Xt.jsxs)(Ht.rb, { children: [ln(t.lpApr7d), "%"] }),
                Object(Xt.jsxs)(Ht.rb, { children: ["$", ln(t.liquidityUSD)] }),
              ],
            }),
          });
        },
        yr = function (e) {
          var t = e.poolDatas,
            n = e.loading,
            r = Object(a.useState)(pr),
            c = Object(b.a)(r, 2),
            o = c[0],
            s = c[1],
            l = Object(a.useState)(!0),
            u = Object(b.a)(l, 2),
            d = u[0],
            j = u[1],
            p = Object(_t.b)().t,
            f = Object(a.useState)(1),
            x = Object(b.a)(f, 2),
            m = x[0],
            O = x[1],
            h = Object(a.useState)(1),
            v = Object(b.a)(h, 2),
            k = v[0],
            y = v[1];
          Object(a.useEffect)(
            function () {
              var e = 1;
              t.length % 3 === 0 && (e = 0), y(Math.floor(t.length / 3) + e);
            },
            [t]
          );
          var g = Object(a.useMemo)(
              function () {
                return t
                  ? t
                      .sort(function (e, t) {
                        return e && t
                          ? e[o] > t[o]
                            ? 1 * (d ? -1 : 1)
                            : -1 * (d ? -1 : 1)
                          : -1;
                      })
                      .slice(3 * (m - 1), 3 * m)
                  : [];
              },
              [m, t, d, o]
            ),
            S = Object(a.useCallback)(
              function (e) {
                s(e), j(o !== e || !d);
              },
              [d, o]
            ),
            D = Object(a.useCallback)(
              function (e) {
                return o === e ? (d ? "\u2193" : "\u2191") : "";
              },
              [d, o]
            );
          return Object(Xt.jsxs)(Xn, {
            children: [
              Object(Xt.jsxs)(br, {
                children: [
                  Object(Xt.jsx)(Ht.rb, {
                    color: "secondary",
                    fontSize: "12px",
                    bold: !0,
                    children: "#",
                  }),
                  Object(Xt.jsx)(Ht.rb, {
                    color: "secondary",
                    fontSize: "12px",
                    bold: !0,
                    textTransform: "uppercase",
                    children: p("Pool"),
                  }),
                  Object(Xt.jsxs)(Gn, {
                    color: "secondary",
                    fontSize: "12px",
                    bold: !0,
                    onClick: function () {
                      return S(pr);
                    },
                    textTransform: "uppercase",
                    children: [p("Volume 24H"), " ", D(pr)],
                  }),
                  Object(Xt.jsxs)(Gn, {
                    color: "secondary",
                    fontSize: "12px",
                    bold: !0,
                    onClick: function () {
                      return S(xr);
                    },
                    textTransform: "uppercase",
                    children: [p("Volume 7D"), " ", D(xr)],
                  }),
                  Object(Xt.jsxs)(Gn, {
                    color: "secondary",
                    fontSize: "12px",
                    bold: !0,
                    onClick: function () {
                      return S(mr);
                    },
                    textTransform: "uppercase",
                    children: [p("LP reward fees 24H"), " ", D(mr)],
                  }),
                  Object(Xt.jsxs)(Gn, {
                    color: "secondary",
                    fontSize: "12px",
                    bold: !0,
                    onClick: function () {
                      return S(Or);
                    },
                    textTransform: "uppercase",
                    children: [p("LP reward APR"), " ", D(Or)],
                  }),
                  Object(Xt.jsxs)(Gn, {
                    color: "secondary",
                    fontSize: "12px",
                    bold: !0,
                    onClick: function () {
                      return S(fr);
                    },
                    textTransform: "uppercase",
                    children: [p("Liquidity"), " ", D(fr)],
                  }),
                ],
              }),
              Object(Xt.jsx)(er, {}),
              g.length > 0
                ? Object(Xt.jsxs)(Xt.Fragment, {
                    children: [
                      g.map(function (e, t) {
                        return e
                          ? Object(Xt.jsxs)(
                              i.a.Fragment,
                              {
                                children: [
                                  Object(Xt.jsx)(kr, {
                                    index: 3 * (m - 1) + t,
                                    poolData: e,
                                  }),
                                  Object(Xt.jsx)(er, {}),
                                ],
                              },
                              e.address
                            )
                          : null;
                      }),
                      n && Object(Xt.jsx)(hr, {}),
                      Object(Xt.jsxs)(Jn, {
                        children: [
                          Object(Xt.jsx)(Zn, {
                            onClick: function () {
                              O(1 === m ? m : m - 1);
                            },
                            children: Object(Xt.jsx)(Ht.c, {
                              color: 1 === m ? "textDisabled" : "primary",
                            }),
                          }),
                          Object(Xt.jsx)(Ht.rb, {
                            children: p("Page %page% of %maxPage%", {
                              page: m,
                              maxPage: k,
                            }),
                          }),
                          Object(Xt.jsx)(Zn, {
                            onClick: function () {
                              O(m === k ? m : m + 1);
                            },
                            children: Object(Xt.jsx)(Ht.f, {
                              color: m === k ? "textDisabled" : "primary",
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : Object(Xt.jsxs)(Xt.Fragment, {
                    children: [
                      Object(Xt.jsx)(vr, {}),
                      Object(Xt.jsx)(Ht.k, {}),
                    ],
                  }),
            ],
          });
        },
        gr = n(1147),
        Sr = n(1131),
        Dr = function (e) {
          var t = e.x,
            n = e.y,
            r = e.width,
            c = e.height,
            o = e.fill;
          return Object(Xt.jsx)("g", {
            children: Object(Xt.jsx)("rect", {
              x: t,
              y: n,
              fill: o,
              width: r,
              height: c,
              rx: "2",
            }),
          });
        },
        wr = function (e) {
          var t = e.payload,
            n = e.setHoverValue,
            r = e.setHoverDate;
          return (
            Object(a.useEffect)(
              function () {
                n(t.value), r(Object(Tn.default)(t.time, "MMM d, yyyy"));
              },
              [t.value, t.time, n, r]
            ),
            null
          );
        },
        Cr = function (e) {
          var t = e.data,
            n = e.setHoverValue,
            r = e.setHoverDate,
            c = Object(dn.a)().theme;
          return t && 0 !== t.length
            ? Object(Xt.jsx)(An.a, {
                width: "100%",
                height: "100%",
                children: Object(Xt.jsxs)(gr.a, {
                  data: t,
                  margin: { top: 5, right: 15, left: 0, bottom: 5 },
                  onMouseLeave: function () {
                    r(void 0), n(void 0);
                  },
                  children: [
                    Object(Xt.jsx)(Ln.a, {
                      dataKey: "time",
                      axisLine: !1,
                      tickLine: !1,
                      tickFormatter: function (e) {
                        return Object(Tn.default)(e, "dd");
                      },
                      minTickGap: 10,
                    }),
                    Object(Xt.jsx)(zn.a, {
                      dataKey: "value",
                      tickCount: 6,
                      scale: "linear",
                      axisLine: !1,
                      tickLine: !1,
                      color: c.colors.textSubtle,
                      fontSize: "12px",
                      tickFormatter: function (e) {
                        return "$".concat(ln(e));
                      },
                      orientation: "right",
                      tick: { dx: 10, fill: c.colors.textSubtle },
                    }),
                    Object(Xt.jsx)($n.a, {
                      cursor: { fill: c.colors.backgroundDisabled },
                      contentStyle: { display: "none" },
                      formatter: function (e, t, c) {
                        return Object(Xt.jsx)(wr, {
                          payload: c.payload,
                          setHoverValue: n,
                          setHoverDate: r,
                        });
                      },
                    }),
                    Object(Xt.jsx)(Sr.a, {
                      dataKey: "value",
                      fill: c.colors.primary,
                      shape: function (e) {
                        return Object(Xt.jsx)(Dr, {
                          height: e.height,
                          width: e.width,
                          x: e.x,
                          y: e.y,
                          fill: c.colors.primary,
                        });
                      },
                    }),
                  ],
                }),
              })
            : Object(Xt.jsx)(Wn, {});
        },
        Ur = n(1151),
        Tr = n(305),
        Ir = Vt.e.div(we || (we = Object(j.a)(["\n  width: 100%;\n"]))),
        Fr = Vt.e.div(
          Ce ||
            (Ce = Object(j.a)([
              "\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n  grid-template-columns: 2fr 0.8fr repeat(4, 1fr);\n  padding: 0 24px;\n  @media screen and (max-width: 940px) {\n    grid-template-columns: 2fr repeat(4, 1fr);\n    & > *:nth-child(5) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 2fr repeat(2, 1fr);\n    & > *:nth-child(5) {\n      display: none;\n    }\n    & > *:nth-child(3) {\n      display: none;\n    }\n    & > *:nth-child(4) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 500px) {\n    grid-template-columns: 2fr 1fr;\n    & > *:nth-child(5) {\n      display: none;\n    }\n    & > *:nth-child(3) {\n      display: none;\n    }\n    & > *:nth-child(4) {\n      display: none;\n    }\n    & > *:nth-child(2) {\n      display: none;\n    }\n  }\n",
            ]))
        ),
        Ar = Object(Vt.e)(Ht.I)(
          Ue ||
            (Ue = Object(j.a)([
              "\n  align-items: center;\n  margin-right: 16px;\n  margin-top: 8px;\n  cursor: pointer;\n",
            ]))
        ),
        qr = "amountUSD",
        Lr = "timestamp",
        zr = "sender",
        $r = "amountToken0",
        Br = "amountToken1",
        Nr = function () {
          var e = Object(Xt.jsxs)(Fr, {
            children: [
              Object(Xt.jsx)(Ht.kb, {}),
              Object(Xt.jsx)(Ht.kb, {}),
              Object(Xt.jsx)(Ht.kb, {}),
              Object(Xt.jsx)(Ht.kb, {}),
              Object(Xt.jsx)(Ht.kb, {}),
              Object(Xt.jsx)(Ht.kb, {}),
            ],
          });
          return Object(Xt.jsxs)(Xt.Fragment, { children: [e, e, e] });
        },
        Pr = function (e) {
          var t = e.transaction,
            n = Object(_t.b)().t,
            r = Math.abs(t.amountToken0),
            c = Math.abs(t.amountToken1),
            a = t.amountToken0 < 0 ? t.token0Symbol : t.token1Symbol,
            i = t.amountToken1 < 0 ? t.token0Symbol : t.token1Symbol;
          return Object(Xt.jsxs)(Fr, {
            children: [
              Object(Xt.jsx)(Ht.Q, {
                href: Object(ut.b)(t.hash, "transaction"),
                children: Object(Xt.jsx)(Ht.rb, {
                  children:
                    t.type === o.MINT
                      ? n("Add %token0% and %token1%", {
                          token0: t.token0Symbol,
                          token1: t.token1Symbol,
                        })
                      : t.type === o.SWAP
                      ? n("Swap %token0% for %token1%", {
                          token0: i,
                          token1: a,
                        })
                      : n("Remove %token0% and %token1%", {
                          token0: t.token0Symbol,
                          token1: t.token1Symbol,
                        }),
                }),
              }),
              Object(Xt.jsxs)(Ht.rb, { children: ["$", ln(t.amountUSD)] }),
              Object(Xt.jsx)(Ht.rb, {
                children: Object(Xt.jsx)(Ht.rb, {
                  children: "".concat(ln(r), " ").concat(t.token0Symbol),
                }),
              }),
              Object(Xt.jsx)(Ht.rb, {
                children: Object(Xt.jsx)(Ht.rb, {
                  children: "".concat(ln(c), " ").concat(t.token1Symbol),
                }),
              }),
              Object(Xt.jsx)(Ht.Q, {
                href: Object(ut.b)(t.sender, "address"),
                children: Object(Tr.a)(t.sender),
              }),
              Object(Xt.jsx)(Ht.rb, {
                children: Object(Ur.a)(1e3 * parseInt(t.timestamp, 10)),
              }),
            ],
          });
        },
        Er = function (e) {
          var t = e.transactions,
            n = Object(a.useState)(Lr),
            r = Object(b.a)(n, 2),
            c = r[0],
            s = r[1],
            l = Object(a.useState)(!0),
            u = Object(b.a)(l, 2),
            d = u[0],
            j = u[1],
            p = Object(_t.b)().t,
            f = Object(a.useState)(1),
            x = Object(b.a)(f, 2),
            m = x[0],
            O = x[1],
            h = Object(a.useState)(1),
            v = Object(b.a)(h, 2),
            k = v[0],
            y = v[1],
            g = Object(a.useState)(void 0),
            S = Object(b.a)(g, 2),
            D = S[0],
            w = S[1],
            C = Object(a.useMemo)(
              function () {
                return t
                  ? t
                      .slice()
                      .sort(function (e, t) {
                        return e && t
                          ? e[c] > t[c]
                            ? 1 * (d ? -1 : 1)
                            : -1 * (d ? -1 : 1)
                          : -1;
                      })
                      .filter(function (e) {
                        return void 0 === D || e.type === D;
                      })
                      .slice(3 * (m - 1), 3 * m)
                  : [];
              },
              [t, m, c, d, D]
            );
          Object(a.useEffect)(
            function () {
              if (t) {
                var e = t.filter(function (e) {
                  return void 0 === D || e.type === D;
                });
                e.length % 3 === 0
                  ? y(Math.floor(e.length / 3))
                  : y(Math.floor(e.length / 3) + 1);
              }
            },
            [t, D]
          );
          var U = Object(a.useCallback)(
              function (e) {
                e !== D && (w(e), O(1));
              },
              [D]
            ),
            T = Object(a.useCallback)(
              function (e) {
                s(e), j(c !== e || !d);
              },
              [d, c]
            ),
            I = Object(a.useCallback)(
              function (e) {
                return c === e ? (d ? "\u2193" : "\u2191") : "";
              },
              [d, c]
            );
          return Object(Xt.jsxs)(Ir, {
            children: [
              Object(Xt.jsxs)(Ht.I, {
                mb: "16px",
                children: [
                  Object(Xt.jsxs)(Ht.I, {
                    flexDirection: ["column", "row"],
                    children: [
                      Object(Xt.jsxs)(Ar, {
                        onClick: function () {
                          return U(void 0);
                        },
                        children: [
                          Object(Xt.jsx)(Ht.hb, {
                            onChange: function () {
                              return null;
                            },
                            scale: "sm",
                            checked: void 0 === D,
                          }),
                          Object(Xt.jsx)(Ht.rb, {
                            ml: "8px",
                            children: p("All"),
                          }),
                        ],
                      }),
                      Object(Xt.jsxs)(Ar, {
                        onClick: function () {
                          return U(o.SWAP);
                        },
                        children: [
                          Object(Xt.jsx)(Ht.hb, {
                            onChange: function () {
                              return null;
                            },
                            scale: "sm",
                            checked: D === o.SWAP,
                          }),
                          Object(Xt.jsx)(Ht.rb, {
                            ml: "8px",
                            children: p("Swaps"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(Xt.jsxs)(Ht.I, {
                    flexDirection: ["column", "row"],
                    children: [
                      Object(Xt.jsxs)(Ar, {
                        onClick: function () {
                          return U(o.MINT);
                        },
                        children: [
                          Object(Xt.jsx)(Ht.hb, {
                            onChange: function () {
                              return null;
                            },
                            scale: "sm",
                            checked: D === o.MINT,
                          }),
                          Object(Xt.jsx)(Ht.rb, {
                            ml: "8px",
                            children: p("Adds"),
                          }),
                        ],
                      }),
                      Object(Xt.jsxs)(Ar, {
                        onClick: function () {
                          return U(o.BURN);
                        },
                        children: [
                          Object(Xt.jsx)(Ht.hb, {
                            onChange: function () {
                              return null;
                            },
                            scale: "sm",
                            checked: D === o.BURN,
                          }),
                          Object(Xt.jsx)(Ht.rb, {
                            ml: "8px",
                            children: p("Removes"),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(Xt.jsxs)(Xn, {
                children: [
                  Object(Xt.jsxs)(Fr, {
                    children: [
                      Object(Xt.jsx)(Ht.rb, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: !0,
                        textTransform: "uppercase",
                        children: p("Action"),
                      }),
                      Object(Xt.jsxs)(Gn, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: !0,
                        onClick: function () {
                          return T(qr);
                        },
                        textTransform: "uppercase",
                        children: [p("Total Value"), " ", I(qr)],
                      }),
                      Object(Xt.jsxs)(Gn, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: !0,
                        onClick: function () {
                          return T($r);
                        },
                        textTransform: "uppercase",
                        children: [p("Token Amount"), " ", I($r)],
                      }),
                      Object(Xt.jsxs)(Gn, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: !0,
                        onClick: function () {
                          return T(Br);
                        },
                        textTransform: "uppercase",
                        children: [p("Token Amount"), " ", I(Br)],
                      }),
                      Object(Xt.jsxs)(Gn, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: !0,
                        onClick: function () {
                          return T(zr);
                        },
                        textTransform: "uppercase",
                        children: [p("Account"), " ", I(zr)],
                      }),
                      Object(Xt.jsxs)(Gn, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: !0,
                        onClick: function () {
                          return T(Lr);
                        },
                        textTransform: "uppercase",
                        children: [p("Time"), " ", I(Lr)],
                      }),
                    ],
                  }),
                  Object(Xt.jsx)(er, {}),
                  t
                    ? Object(Xt.jsxs)(Xt.Fragment, {
                        children: [
                          C.map(function (e, t) {
                            return e
                              ? Object(Xt.jsxs)(
                                  i.a.Fragment,
                                  {
                                    children: [
                                      Object(Xt.jsx)(Pr, { transaction: e }),
                                      Object(Xt.jsx)(er, {}),
                                    ],
                                  },
                                  t
                                )
                              : null;
                          }),
                          0 === C.length
                            ? Object(Xt.jsx)(Ht.I, {
                                justifyContent: "center",
                                children: Object(Xt.jsx)(Ht.rb, {
                                  children: p("No Transactions"),
                                }),
                              })
                            : void 0,
                          Object(Xt.jsxs)(Jn, {
                            children: [
                              Object(Xt.jsx)(Zn, {
                                onClick: function () {
                                  O(1 === m ? m : m - 1);
                                },
                                children: Object(Xt.jsx)(Ht.c, {
                                  color: 1 === m ? "textDisabled" : "primary",
                                }),
                              }),
                              Object(Xt.jsx)(Ht.rb, {
                                children: p("Page %page% of %maxPage%", {
                                  page: m,
                                  maxPage: k,
                                }),
                              }),
                              Object(Xt.jsx)(Zn, {
                                onClick: function () {
                                  O(m === k ? m : m + 1);
                                },
                                children: Object(Xt.jsx)(Ht.f, {
                                  color: m === k ? "textDisabled" : "primary",
                                }),
                              }),
                            ],
                          }),
                        ],
                      })
                    : Object(Xt.jsxs)(Xt.Fragment, {
                        children: [
                          Object(Xt.jsx)(Nr, {}),
                          Object(Xt.jsx)(Ht.k, {}),
                        ],
                      }),
                ],
              }),
            ],
          });
        },
        Mr = Object(Vt.e)(Ht.I)(
          Te ||
            (Te = Object(j.a)([
              "\n  justify-content: space-between;\n  flex-direction: column;\n  width: 100%;\n  padding: 0;\n  gap: 1em;\n\n  & > * {\n    width: 100%;\n  }\n\n  ",
              " {\n    flex-direction: row;\n  } ;\n",
            ])),
          function (e) {
            return e.theme.mediaQueries.md;
          }
        ),
        Vr = function () {
          var e = Object(_t.b)().t,
            t = Object(a.useState)(),
            n = Object(b.a)(t, 2),
            r = n[0],
            c = n[1],
            o = Object(a.useState)(),
            i = Object(b.a)(o, 2),
            s = i[0],
            l = i[1],
            u = Object(a.useState)(),
            d = Object(b.a)(u, 2),
            j = d[0],
            p = d[1],
            f = Object(a.useState)(),
            x = Object(b.a)(f, 2),
            m = x[0],
            O = x[1],
            h = It(),
            v = Object(b.a)(h, 1)[0],
            k = Ft(),
            y = Object(b.a)(k, 1)[0],
            g = At(),
            S = Object(b.a)(g, 1)[0],
            D = Object(Tn.default)(new Date(), "MMM d, yyyy");
          Object(a.useEffect)(
            function () {
              null == j && v && p(v.volumeUSD);
            },
            [v, j]
          ),
            Object(a.useEffect)(
              function () {
                null == r && v && c(v.liquidityUSD);
              },
              [r, v]
            );
          var w = Object(a.useMemo)(
              function () {
                return y
                  ? y.map(function (e) {
                      return {
                        time: Object(In.a)(e.date),
                        value: e.liquidityUSD,
                      };
                    })
                  : [];
              },
              [y]
            ),
            C = Object(a.useMemo)(
              function () {
                return y
                  ? y.map(function (e) {
                      return { time: Object(In.a)(e.date), value: e.volumeUSD };
                    })
                  : [];
              },
              [y]
            ),
            U = $t(),
            T = Object(a.useMemo)(
              function () {
                return Object.values(U)
                  .map(function (e) {
                    return e.data;
                  })
                  .filter(function (e) {
                    return e;
                  });
              },
              [U]
            ),
            I = qt(),
            F = Object(a.useMemo)(
              function () {
                return Object.values(I)
                  .map(function (e) {
                    return e.data;
                  })
                  .filter(function (e) {
                    return e;
                  });
              },
              [I]
            ),
            A = Object(a.useMemo)(
              function () {
                return Object.values(I).some(function (e) {
                  return !e.data;
                });
              },
              [I]
            );
          return Object(Xt.jsxs)(Fn.a, {
            children: [
              Object(Xt.jsx)(Ht.K, {
                scale: "lg",
                mb: "16px",
                id: "info-overview-title",
                children: e("VeneraSwap Info & Analytics"),
              }),
              Object(Xt.jsxs)(Mr, {
                children: [
                  Object(Xt.jsx)(Ht.q, {
                    children: Object(Xt.jsxs)(Ht.k, {
                      p: ["16px", "16px", "24px"],
                      children: [
                        Object(Xt.jsx)(Ht.rb, {
                          bold: !0,
                          color: "secondary",
                          children: e("Liquidity"),
                        }),
                        r > 0
                          ? Object(Xt.jsxs)(Ht.rb, {
                              bold: !0,
                              fontSize: "24px",
                              children: ["$", ln(r)],
                            })
                          : Object(Xt.jsx)(Ht.kb, {
                              width: "128px",
                              height: "36px",
                            }),
                        Object(Xt.jsx)(Ht.rb, {
                          children: null !== s && void 0 !== s ? s : D,
                        }),
                        Object(Xt.jsx)(Ht.k, {
                          height: "250px",
                          children: Object(Xt.jsx)(Kn, {
                            data: w,
                            setHoverValue: c,
                            setHoverDate: l,
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(Xt.jsx)(Ht.q, {
                    children: Object(Xt.jsxs)(Ht.k, {
                      p: ["16px", "16px", "24px"],
                      children: [
                        Object(Xt.jsx)(Ht.rb, {
                          bold: !0,
                          color: "secondary",
                          children: e("Volume 24H"),
                        }),
                        j > 0
                          ? Object(Xt.jsxs)(Ht.rb, {
                              bold: !0,
                              fontSize: "24px",
                              children: ["$", ln(j)],
                            })
                          : Object(Xt.jsx)(Ht.kb, {
                              width: "128px",
                              height: "36px",
                            }),
                        Object(Xt.jsx)(Ht.rb, {
                          children: null !== m && void 0 !== m ? m : D,
                        }),
                        Object(Xt.jsx)(Ht.k, {
                          height: "250px",
                          children: Object(Xt.jsx)(Cr, {
                            data: C,
                            setHoverValue: p,
                            setHoverDate: O,
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              Object(Xt.jsx)(Ht.K, {
                scale: "lg",
                mt: "40px",
                mb: "16px",
                children: e("Top Tokens"),
              }),
              Object(Xt.jsx)(dr, { tokenDatas: T }),
              Object(Xt.jsx)(Ht.K, {
                scale: "lg",
                mt: "40px",
                mb: "16px",
                children: e("Top Pools"),
              }),
              Object(Xt.jsx)(yr, { poolDatas: F, loading: A }),
              Object(Xt.jsx)(Ht.K, {
                scale: "lg",
                mt: "40px",
                mb: "16px",
                children: e("Transactions"),
              }),
              Object(Xt.jsx)(Er, { transactions: S }),
            ],
          });
        },
        Wr = function () {
          var e = Object(_t.b)().t,
            t = qt(),
            n = Object(a.useMemo)(
              function () {
                return Object.values(t)
                  .map(function (e) {
                    return e.data;
                  })
                  .filter(function (e) {
                    return e;
                  });
              },
              [t]
            ),
            r = Object(un.l)(),
            c = Object(b.a)(r, 1)[0],
            o = zt(c);
          return Object(Xt.jsxs)(Fn.a, {
            children: [
              Object(Xt.jsx)(Ht.K, {
                scale: "lg",
                mb: "16px",
                children: e("Your Watchlist"),
              }),
              Object(Xt.jsx)(Ht.q, {
                children:
                  o.length > 0
                    ? Object(Xt.jsx)(yr, { poolDatas: o })
                    : Object(Xt.jsx)(Ht.rb, {
                        px: "24px",
                        py: "16px",
                        children: e("Saved pools will appear here"),
                      }),
              }),
              Object(Xt.jsx)(Ht.K, {
                scale: "lg",
                mt: "40px",
                mb: "16px",
                id: "info-pools-title",
                children: e("All Pools"),
              }),
              Object(Xt.jsx)(yr, { poolDatas: n }),
            ],
          });
        },
        Hr = n(1135),
        _r = ["data", "setValue", "setLabel"],
        Rr = function (e) {
          var t = e.data,
            n = e.setValue,
            r = e.setLabel,
            c = Object(Gt.a)(e, _r),
            o = Object(dn.a)().theme,
            i = Object(a.useRef)(null),
            s = Object(a.useState)(),
            l = Object(b.a)(s, 2),
            u = l[0],
            d = l[1],
            j = Object(a.useCallback)(
              function () {
                var e;
                u &&
                  (null === i ||
                  void 0 === i ||
                  null === (e = i.current) ||
                  void 0 === e
                    ? void 0
                    : e.parentElement) &&
                  (u.resize(i.current.parentElement.clientWidth - 32, 250),
                  u.timeScale().fitContent(),
                  u.timeScale().scrollToPosition(0, !1));
              },
              [u, i]
            ),
            p = "object" === typeof window;
          return (
            Object(a.useEffect)(
              function () {
                return p
                  ? (window.addEventListener("resize", j),
                    function () {
                      return window.removeEventListener("resize", j);
                    })
                  : null;
              },
              [p, i, j]
            ),
            Object(a.useEffect)(
              function () {
                var e;
                if (
                  !u &&
                  t &&
                  (null === i ||
                  void 0 === i ||
                  null === (e = i.current) ||
                  void 0 === e
                    ? void 0
                    : e.parentElement)
                ) {
                  var n = Object(Hr.a)(i.current, {
                    height: 250,
                    width: i.current.parentElement.clientWidth - 32,
                    layout: {
                      backgroundColor: "transparent",
                      textColor: o.colors.textSubtle,
                      fontFamily: "Kanit, sans-serif",
                      fontSize: 12,
                    },
                    rightPriceScale: {
                      scaleMargins: { top: 0.1, bottom: 0.1 },
                      borderVisible: !1,
                    },
                    timeScale: {
                      borderVisible: !1,
                      secondsVisible: !0,
                      tickMarkFormatter: function (e) {
                        return Object(Tn.default)(1e3 * e, "MM/dd h:mm a");
                      },
                    },
                    watermark: { visible: !1 },
                    grid: {
                      horzLines: { visible: !1 },
                      vertLines: { visible: !1 },
                    },
                    crosshair: {
                      horzLine: { visible: !1, labelVisible: !1 },
                      mode: 1,
                      vertLine: {
                        visible: !0,
                        labelVisible: !1,
                        style: 3,
                        width: 1,
                        color: o.colors.textSubtle,
                        labelBackgroundColor: o.colors.primary,
                      },
                    },
                  });
                  n.timeScale().fitContent(), d(n);
                }
              },
              [u, t, n, o]
            ),
            Object(a.useEffect)(
              function () {
                if (u && t) {
                  var e = u.addCandlestickSeries({
                    upColor: o.colors.success,
                    downColor: o.colors.failure,
                    borderDownColor: o.colors.failure,
                    borderUpColor: o.colors.success,
                    wickDownColor: o.colors.failure,
                    wickUpColor: o.colors.success,
                  });
                  e.setData(t),
                    u.subscribeCrosshairMove(function (t) {
                      if (
                        (null === i || void 0 === i ? void 0 : i.current) &&
                        (void 0 === t ||
                          void 0 === t.time ||
                          (t && t.point && t.point.x < 0) ||
                          (t && t.point && t.point.x > i.current.clientWidth) ||
                          (t && t.point && t.point.y < 0) ||
                          (t && t.point && t.point.y > 250))
                      )
                        n && n(void 0), r && r(void 0);
                      else if (e && t) {
                        var c = t.time,
                          o = new Date(1e3 * c),
                          a = new Date(
                            o.getTime() + 6e4 * o.getTimezoneOffset()
                          ),
                          s = "".concat(
                            Object(Tn.default)(a, "MMM d, yyyy h:mm a"),
                            " (UTC)"
                          ),
                          l = t.seriesPrices.get(e);
                        n && n(null === l || void 0 === l ? void 0 : l.open),
                          r && r(s);
                      }
                    });
                }
              },
              [u, t, n, r, o]
            ),
            Object(Xt.jsxs)(Xt.Fragment, {
              children: [
                !u && Object(Xt.jsx)(_n, {}),
                Object(Xt.jsx)(
                  "div",
                  Object(D.a)({ ref: i, id: "candle-chart" }, c)
                ),
              ],
            })
          );
        },
        Kr = Object(Vt.e)(Ht.I)(
          Ie ||
            (Ie = Object(j.a)([
              "\n  overflow-x: scroll;\n  padding: 0;\n  border-radius: 24px 24px 0 0;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  scrollbar-width: none; /* Firefox */\n",
            ]))
        ),
        Qr = Object(Vt.e)(Ht.I)(
          Fe ||
            (Fe = Object(j.a)([
              "\n  justify-content: space-between;\n  background-color: ",
              ";\n  width: 100%;\n",
            ])),
          function (e) {
            return e.theme.colors.input;
          }
        ),
        Yr = Vt.e.button(
          Ae ||
            (Ae = Object(j.a)([
              "\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  flex: 1;\n  border: 0;\n  outline: 0;\n  padding: 16px;\n  margin: 0;\n  border-radius: 24px 24px 0 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: ",
              ";\n  background-color: ",
              ";\n",
            ])),
          function (e) {
            var t = e.theme;
            return e.isActive ? t.colors.text : t.colors.textSubtle;
          },
          function (e) {
            var t = e.theme;
            return e.isActive ? t.card.background : t.colors.input;
          }
        ),
        Gr = function (e) {
          var t = e.children;
          return Object(Xt.jsx)(Kr, {
            p: ["0 4px", "0 16px"],
            children: Object(Xt.jsx)(Qr, { children: t }),
          });
        };
      !(function (e) {
        (e[(e.LIQUIDITY = 0)] = "LIQUIDITY"),
          (e[(e.VOLUME = 1)] = "VOLUME"),
          (e[(e.PRICE = 2)] = "PRICE");
      })(qe || (qe = {}));
      var Xr,
        Jr,
        Zr,
        ec,
        tc,
        nc,
        rc,
        cc,
        oc = function (e) {
          var t = e.variant,
            n = e.chartData,
            r = e.tokenData,
            c = e.tokenPriceData,
            o = Object(a.useState)(qe.VOLUME),
            i = Object(b.a)(o, 2),
            s = i[0],
            l = i[1],
            u = Object(a.useState)(),
            d = Object(b.a)(u, 2),
            j = d[0],
            p = d[1],
            f = Object(a.useState)(),
            x = Object(b.a)(f, 2),
            m = x[0],
            O = x[1],
            h = Object(_t.b)().t,
            v = Object(Tn.default)(new Date(), "MMM d, yyyy"),
            k = Object(a.useMemo)(
              function () {
                return n
                  ? n.map(function (e) {
                      return {
                        time: Object(In.a)(e.date),
                        value: e.liquidityUSD,
                      };
                    })
                  : [];
              },
              [n]
            ),
            y = Object(a.useMemo)(
              function () {
                return n
                  ? n.map(function (e) {
                      return { time: Object(In.a)(e.date), value: e.volumeUSD };
                    })
                  : [];
              },
              [n]
            );
          return Object(Xt.jsxs)(Ht.q, {
            children: [
              Object(Xt.jsxs)(Gr, {
                children: [
                  Object(Xt.jsx)(Yr, {
                    isActive: s === qe.VOLUME,
                    onClick: function () {
                      return l(qe.VOLUME);
                    },
                    children: Object(Xt.jsx)(Ht.rb, { children: h("Volume") }),
                  }),
                  Object(Xt.jsx)(Yr, {
                    isActive: s === qe.LIQUIDITY,
                    onClick: function () {
                      return l(qe.LIQUIDITY);
                    },
                    children: Object(Xt.jsx)(Ht.rb, {
                      children: h("Liquidity"),
                    }),
                  }),
                  "token" === t &&
                    Object(Xt.jsx)(Yr, {
                      isActive: s === qe.PRICE,
                      onClick: function () {
                        return l(qe.PRICE);
                      },
                      children: Object(Xt.jsx)(Ht.rb, { children: h("Price") }),
                    }),
                ],
              }),
              Object(Xt.jsxs)(Ht.I, {
                flexDirection: "column",
                px: "24px",
                pt: "24px",
                children: [
                  (function () {
                    var e = null;
                    if (j) e = ln(j);
                    else if (s === qe.VOLUME && y.length > 0) {
                      var t;
                      e = ln(
                        null === (t = y[y.length - 1]) || void 0 === t
                          ? void 0
                          : t.value
                      );
                    } else if (s === qe.LIQUIDITY && k.length > 0) {
                      var n;
                      e = ln(
                        null === (n = k[k.length - 1]) || void 0 === n
                          ? void 0
                          : n.value
                      );
                    } else
                      s === qe.PRICE &&
                        (null === r || void 0 === r ? void 0 : r.priceUSD) &&
                        (e = ln(r.priceUSD));
                    return e
                      ? Object(Xt.jsxs)(Ht.rb, {
                          fontSize: "24px",
                          bold: !0,
                          children: ["$", e],
                        })
                      : Object(Xt.jsx)(Ht.kb, {
                          height: "36px",
                          width: "128px",
                        });
                  })(),
                  Object(Xt.jsx)(Ht.rb, {
                    small: !0,
                    color: "secondary",
                    children: m || v,
                  }),
                ],
              }),
              Object(Xt.jsx)(Ht.k, {
                px: "24px",
                height: "token" === t ? "250px" : "335px",
                children:
                  s === qe.LIQUIDITY
                    ? Object(Xt.jsx)(Kn, {
                        data: k,
                        setHoverValue: p,
                        setHoverDate: O,
                      })
                    : s === qe.VOLUME
                    ? Object(Xt.jsx)(Cr, {
                        data: y,
                        setHoverValue: p,
                        setHoverDate: O,
                      })
                    : s === qe.PRICE
                    ? Object(Xt.jsx)(Rr, { data: c, setValue: p, setLabel: O })
                    : null,
              }),
            ],
          });
        },
        ac = Vt.e.div(
          Xr ||
            (Xr = Object(j.a)([
              "\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  grid-gap: 1em;\n  margin-top: 16px;\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n",
            ]))
        ),
        ic = Object(Vt.e)(Ht.I)(
          Jr ||
            (Jr = Object(j.a)([
              "\n  padding: 8px 0px;\n  margin-right: 16px;\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n",
            ]))
        ),
        sc = Object(Vt.e)(Ht.I)(
          Zr ||
            (Zr = Object(j.a)([
              "\n  border: 1px solid ",
              ";\n  background-color: ",
              ";\n  padding: 16px;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 8px;\n  border-radius: 16px;\n  max-width: 280px;\n",
            ])),
          function (e) {
            return e.theme.colors.cardBorder;
          },
          function (e) {
            return e.theme.colors.background;
          }
        ),
        lc = function (e) {
          var t = e.match.params.address,
            n = Object(Ht.Ib)(),
            r = n.isXs,
            c = n.isSm,
            o = Object(_t.b)().t,
            i = Object(a.useState)(0),
            s = Object(b.a)(i, 2),
            l = s[0],
            j = s[1],
            p = Object(Ht.Kb)(
              o(
                "Based on last 7 days' performance. Does not account for impermanent loss"
              ),
              {}
            ),
            f = p.tooltip,
            x = p.tooltipVisible,
            m = p.targetRef;
          Object(a.useEffect)(function () {
            window.scrollTo(0, 0);
          }, []);
          var O = t.toLowerCase(),
            h = zt([O])[0],
            v = (function (e) {
              var t = Object(it.b)(),
                n = Object(it.c)(function (t) {
                  return t.info.pools.byAddress[e];
                }),
                r = null === n || void 0 === n ? void 0 : n.chartData,
                c = Object(a.useState)(!1),
                o = Object(b.a)(c, 2),
                i = o[0],
                s = o[1];
              return (
                Object(a.useEffect)(
                  function () {
                    r ||
                      i ||
                      (function () {
                        var n = Object(d.a)(
                          u.a.mark(function n() {
                            var r, c, o;
                            return u.a.wrap(function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    return (n.next = 2), jt(e);
                                  case 2:
                                    (r = n.sent),
                                      (c = r.error),
                                      (o = r.data),
                                      !c &&
                                        o &&
                                        t(
                                          Object(Tt.d)({
                                            poolAddress: e,
                                            chartData: o,
                                          })
                                        ),
                                      c && s(c);
                                  case 7:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                          })
                        );
                        return function () {
                          return n.apply(this, arguments);
                        };
                      })()();
                  },
                  [e, t, i, r]
                ),
                r
              );
            })(O),
            k = (function (e) {
              var t = Object(it.b)(),
                n = Object(it.c)(function (t) {
                  return t.info.pools.byAddress[e];
                }),
                r = null === n || void 0 === n ? void 0 : n.transactions,
                c = Object(a.useState)(!1),
                o = Object(b.a)(c, 2),
                i = o[0],
                s = o[1];
              return (
                Object(a.useEffect)(
                  function () {
                    r ||
                      i ||
                      (function () {
                        var n = Object(d.a)(
                          u.a.mark(function n() {
                            var r, c, o;
                            return u.a.wrap(function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    return (n.next = 2), xt(e);
                                  case 2:
                                    (r = n.sent),
                                      (c = r.error),
                                      (o = r.data),
                                      c
                                        ? s(!0)
                                        : t(
                                            Object(Tt.f)({
                                              poolAddress: e,
                                              transactions: o,
                                            })
                                          );
                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                          })
                        );
                        return function () {
                          return n.apply(this, arguments);
                        };
                      })()();
                  },
                  [e, t, i, r]
                ),
                r
              );
            })(O),
            y = Object(un.l)(),
            g = Object(b.a)(y, 2),
            S = g[0],
            D = g[1];
          return Object(Xt.jsx)(Fn.a, {
            symbol: h
              ? ""
                  .concat(
                    null === h || void 0 === h ? void 0 : h.token0.symbol,
                    " / "
                  )
                  .concat(null === h || void 0 === h ? void 0 : h.token1.symbol)
              : null,
            children: h
              ? Object(Xt.jsxs)(Xt.Fragment, {
                  children: [
                    Object(Xt.jsxs)(Ht.I, {
                      justifyContent: "space-between",
                      mb: "16px",
                      flexDirection: ["column", "column", "row"],
                      children: [
                        Object(Xt.jsxs)(Ht.l, {
                          mb: "32px",
                          children: [
                            Object(Xt.jsx)(Wt.a, {
                              to: "/info",
                              children: Object(Xt.jsx)(Ht.rb, {
                                color: "primary",
                                children: o("Info"),
                              }),
                            }),
                            Object(Xt.jsx)(Wt.a, {
                              to: "/info/pools",
                              children: Object(Xt.jsx)(Ht.rb, {
                                color: "primary",
                                children: o("Pools"),
                              }),
                            }),
                            Object(Xt.jsx)(Ht.I, {
                              children: Object(Xt.jsx)(Ht.rb, {
                                mr: "8px",
                                children: ""
                                  .concat(h.token0.symbol, " / ")
                                  .concat(h.token1.symbol),
                              }),
                            }),
                          ],
                        }),
                        Object(Xt.jsxs)(Ht.I, {
                          justifyContent: [null, null, "flex-end"],
                          mt: ["8px", "8px", 0],
                          children: [
                            Object(Xt.jsx)(Ht.Q, {
                              mr: "8px",
                              href: Object(ut.b)(O, "address"),
                              children: o("View on BscScan"),
                            }),
                            Object(Xt.jsx)(pn, {
                              fill: S.includes(O),
                              onClick: function () {
                                return D(O);
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(Xt.jsxs)(Ht.I, {
                      flexDirection: "column",
                      children: [
                        Object(Xt.jsxs)(Ht.I, {
                          alignItems: "center",
                          mb: ["8px", null],
                          children: [
                            Object(Xt.jsx)(on, {
                              address0: h.token0.address,
                              address1: h.token1.address,
                              size: 32,
                            }),
                            Object(Xt.jsx)(Ht.rb, {
                              ml: "38px",
                              bold: !0,
                              fontSize: r || c ? "24px" : "40px",
                              id: "info-pool-pair-title",
                              children: ""
                                .concat(h.token0.symbol, " / ")
                                .concat(h.token1.symbol),
                            }),
                          ],
                        }),
                        Object(Xt.jsx)(Ht.I, {
                          justifyContent: "space-between",
                          flexDirection: ["column", "column", "column", "row"],
                          children: Object(Xt.jsxs)(Ht.I, {
                            flexDirection: ["column", "column", "row"],
                            mb: ["8px", "8px", null],
                            children: [
                              Object(Xt.jsx)(Wt.a, {
                                to: "/info/token/".concat(h.token0.address),
                                children: Object(Xt.jsxs)(ic, {
                                  children: [
                                    Object(Xt.jsx)(rn, {
                                      address: h.token0.address,
                                      size: "24px",
                                    }),
                                    Object(Xt.jsx)(Ht.rb, {
                                      fontSize: "16px",
                                      ml: "4px",
                                      style: { whiteSpace: "nowrap" },
                                      width: "fit-content",
                                      children: "1 "
                                        .concat(h.token0.symbol, " =  ")
                                        .concat(
                                          ln(h.token1Price, {
                                            notation: "standard",
                                            displayThreshold: 0.001,
                                            tokenPrecision: !0,
                                          }),
                                          " "
                                        )
                                        .concat(h.token1.symbol),
                                    }),
                                  ],
                                }),
                              }),
                              Object(Xt.jsx)(Wt.a, {
                                to: "/info/token/".concat(h.token1.address),
                                children: Object(Xt.jsxs)(ic, {
                                  ml: [null, null, "10px"],
                                  children: [
                                    Object(Xt.jsx)(rn, {
                                      address: h.token1.address,
                                      size: "24px",
                                    }),
                                    Object(Xt.jsx)(Ht.rb, {
                                      fontSize: "16px",
                                      ml: "4px",
                                      style: { whiteSpace: "nowrap" },
                                      width: "fit-content",
                                      children: "1 "
                                        .concat(h.token1.symbol, " =  ")
                                        .concat(
                                          ln(h.token0Price, {
                                            notation: "standard",
                                            displayThreshold: 0.001,
                                            tokenPrecision: !0,
                                          }),
                                          " "
                                        )
                                        .concat(h.token0.symbol),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    Object(Xt.jsxs)(ac, {
                      children: [
                        Object(Xt.jsxs)(Ht.k, {
                          children: [
                            Object(Xt.jsx)(Ht.q, {
                              children: Object(Xt.jsxs)(Ht.k, {
                                p: "24px",
                                children: [
                                  Object(Xt.jsxs)(Ht.I, {
                                    justifyContent: "space-between",
                                    children: [
                                      Object(Xt.jsxs)(Ht.I, {
                                        flex: "1",
                                        flexDirection: "column",
                                        children: [
                                          Object(Xt.jsx)(Ht.rb, {
                                            color: "secondary",
                                            bold: !0,
                                            fontSize: "12px",
                                            textTransform: "uppercase",
                                            children: o("Liquidity"),
                                          }),
                                          Object(Xt.jsxs)(Ht.rb, {
                                            fontSize: "24px",
                                            bold: !0,
                                            children: ["$", ln(h.liquidityUSD)],
                                          }),
                                          Object(Xt.jsx)(Yn, {
                                            value: h.liquidityUSDChange,
                                          }),
                                        ],
                                      }),
                                      Object(Xt.jsxs)(Ht.I, {
                                        flex: "1",
                                        flexDirection: "column",
                                        children: [
                                          Object(Xt.jsx)(Ht.rb, {
                                            color: "secondary",
                                            bold: !0,
                                            fontSize: "12px",
                                            textTransform: "uppercase",
                                            children: o("LP reward APR"),
                                          }),
                                          Object(Xt.jsxs)(Ht.rb, {
                                            fontSize: "24px",
                                            bold: !0,
                                            children: [ln(h.lpApr7d), "%"],
                                          }),
                                          Object(Xt.jsxs)(Ht.I, {
                                            alignItems: "center",
                                            children: [
                                              Object(Xt.jsx)("span", {
                                                ref: m,
                                                children: Object(Xt.jsx)(Ht.L, {
                                                  color: "textSubtle",
                                                }),
                                              }),
                                              Object(Xt.jsx)(Ht.rb, {
                                                ml: "4px",
                                                fontSize: "12px",
                                                color: "textSubtle",
                                                children: o("7D performance"),
                                              }),
                                              x && f,
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  Object(Xt.jsx)(Ht.rb, {
                                    color: "secondary",
                                    bold: !0,
                                    mt: "24px",
                                    fontSize: "12px",
                                    textTransform: "uppercase",
                                    children: o("Total Tokens Locked"),
                                  }),
                                  Object(Xt.jsxs)(sc, {
                                    children: [
                                      Object(Xt.jsxs)(Ht.I, {
                                        justifyContent: "space-between",
                                        children: [
                                          Object(Xt.jsxs)(Ht.I, {
                                            children: [
                                              Object(Xt.jsx)(rn, {
                                                address: h.token0.address,
                                                size: "24px",
                                              }),
                                              Object(Xt.jsx)(Ht.rb, {
                                                small: !0,
                                                color: "textSubtle",
                                                ml: "8px",
                                                children: h.token0.symbol,
                                              }),
                                            ],
                                          }),
                                          Object(Xt.jsx)(Ht.rb, {
                                            small: !0,
                                            children: ln(h.liquidityToken0),
                                          }),
                                        ],
                                      }),
                                      Object(Xt.jsxs)(Ht.I, {
                                        justifyContent: "space-between",
                                        children: [
                                          Object(Xt.jsxs)(Ht.I, {
                                            children: [
                                              Object(Xt.jsx)(rn, {
                                                address: h.token1.address,
                                                size: "24px",
                                              }),
                                              Object(Xt.jsx)(Ht.rb, {
                                                small: !0,
                                                color: "textSubtle",
                                                ml: "8px",
                                                children: h.token1.symbol,
                                              }),
                                            ],
                                          }),
                                          Object(Xt.jsx)(Ht.rb, {
                                            small: !0,
                                            children: ln(h.liquidityToken1),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            Object(Xt.jsx)(Ht.q, {
                              mt: "16px",
                              children: Object(Xt.jsxs)(Ht.I, {
                                flexDirection: "column",
                                p: "24px",
                                children: [
                                  Object(Xt.jsxs)(Ht.n, {
                                    activeIndex: l,
                                    onItemClick: function (e) {
                                      return j(e);
                                    },
                                    scale: "sm",
                                    variant: "subtle",
                                    children: [
                                      Object(Xt.jsx)(Ht.o, {
                                        width: "100%",
                                        children: o("24H"),
                                      }),
                                      Object(Xt.jsx)(Ht.o, {
                                        width: "100%",
                                        children: o("7D"),
                                      }),
                                    ],
                                  }),
                                  Object(Xt.jsxs)(Ht.I, {
                                    mt: "24px",
                                    children: [
                                      Object(Xt.jsxs)(Ht.I, {
                                        flex: "1",
                                        flexDirection: "column",
                                        children: [
                                          Object(Xt.jsx)(Ht.rb, {
                                            color: "secondary",
                                            fontSize: "12px",
                                            bold: !0,
                                            textTransform: "uppercase",
                                            children: o(
                                              l ? "Volume 7D" : "Volume 24H"
                                            ),
                                          }),
                                          Object(Xt.jsxs)(Ht.rb, {
                                            fontSize: "24px",
                                            bold: !0,
                                            children: [
                                              "$",
                                              ln(
                                                l
                                                  ? h.volumeUSDWeek
                                                  : h.volumeUSD
                                              ),
                                            ],
                                          }),
                                          Object(Xt.jsx)(Yn, {
                                            value: l
                                              ? h.volumeUSDChangeWeek
                                              : h.volumeUSDChange,
                                          }),
                                        ],
                                      }),
                                      Object(Xt.jsxs)(Ht.I, {
                                        flex: "1",
                                        flexDirection: "column",
                                        children: [
                                          Object(Xt.jsx)(Ht.rb, {
                                            color: "secondary",
                                            fontSize: "12px",
                                            bold: !0,
                                            textTransform: "uppercase",
                                            children: o(
                                              l
                                                ? "LP reward fees 7D"
                                                : "LP reward fees 24H"
                                            ),
                                          }),
                                          Object(Xt.jsxs)(Ht.rb, {
                                            fontSize: "24px",
                                            bold: !0,
                                            children: [
                                              "$",
                                              ln(l ? h.lpFees7d : h.lpFees24h),
                                            ],
                                          }),
                                          Object(Xt.jsx)(Ht.rb, {
                                            color: "textSubtle",
                                            fontSize: "12px",
                                            children: o(
                                              "out of $%totalFees% total fees",
                                              {
                                                totalFees: ln(
                                                  l
                                                    ? h.totalFees7d
                                                    : h.totalFees24h
                                                ),
                                              }
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        Object(Xt.jsx)(oc, { variant: "pool", chartData: v }),
                      ],
                    }),
                    Object(Xt.jsx)(Ht.K, {
                      mb: "16px",
                      mt: "40px",
                      scale: "lg",
                      children: o("Transactions"),
                    }),
                    Object(Xt.jsx)(Er, { transactions: k }),
                  ],
                })
              : Object(Xt.jsx)(Ht.I, {
                  mt: "80px",
                  justifyContent: "center",
                  children: Object(Xt.jsx)(Ht.mb, {}),
                }),
          });
        },
        uc = Object(Vt.e)(Wt.a)(
          ec ||
            (ec = Object(j.a)([
              "\n  display: inline-block;\n  min-width: 190px;\n  margin-left: 16px;\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n",
            ]))
        ),
        dc = Object(Vt.e)(Ht.k)(
          tc ||
            (tc = Object(j.a)([
              "\n  border: 1px solid ",
              ";\n  border-radius: ",
              ";\n  padding: 16px;\n",
            ])),
          function (e) {
            return e.theme.colors.cardBorder;
          },
          function (e) {
            return e.theme.radii.card;
          }
        ),
        bc = Vt.e.div(
          nc ||
            (nc = Object(j.a)([
              "\n  width: 100%;\n  overflow-x: auto;\n  padding: 16px 0;\n  white-space: nowrap;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n",
            ]))
        ),
        jc = function (e) {
          var t = e.tokenData;
          return Object(Xt.jsx)(uc, {
            to: "/info/token/".concat(t.address),
            children: Object(Xt.jsx)(dc, {
              children: Object(Xt.jsxs)(Ht.I, {
                children: [
                  Object(Xt.jsx)(Ht.k, {
                    width: "32px",
                    height: "32px",
                    children: Object(Xt.jsx)(rn, {
                      address: t.address,
                      size: "32px",
                    }),
                  }),
                  Object(Xt.jsxs)(Ht.k, {
                    ml: "16px",
                    children: [
                      Object(Xt.jsx)(Ht.rb, { children: t.symbol }),
                      Object(Xt.jsxs)(Ht.I, {
                        alignItems: "center",
                        children: [
                          Object(Xt.jsxs)(Ht.rb, {
                            fontSize: "14px",
                            mr: "6px",
                            lineHeight: "16px",
                            children: ["$", ln(t.priceUSD)],
                          }),
                          Object(Xt.jsx)(Yn, {
                            fontSize: "14px",
                            value: t.priceUSDChange,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        pc = function () {
          var e = $t(),
            t = Object(_t.b)().t,
            n = Object(a.useMemo)(
              function () {
                return Object.values(e)
                  .sort(function (e, t) {
                    var n = e.data,
                      r = t.data;
                    return n && r
                      ? Math.abs(
                          null === n || void 0 === n ? void 0 : n.priceUSDChange
                        ) >
                        Math.abs(
                          null === r || void 0 === r ? void 0 : r.priceUSDChange
                        )
                        ? -1
                        : 1
                      : -1;
                  })
                  .slice(0, Math.min(20, Object.values(e).length));
              },
              [e]
            ),
            r = Object(a.useRef)(null),
            c = Object(a.useState)(!1),
            o = Object(b.a)(c, 2),
            i = o[0],
            s = o[1];
          return (
            Object(a.useEffect)(
              function () {
                !i &&
                  r &&
                  r.current &&
                  (setInterval(function () {
                    r.current &&
                      r.current.scrollLeft !== r.current.scrollWidth &&
                      r.current.scrollTo(r.current.scrollLeft + 1, 0);
                  }, 30),
                  s(!0));
              },
              [r, i]
            ),
            0 !== n.length &&
            n.some(function (e) {
              return e.data;
            })
              ? Object(Xt.jsxs)(Ht.q, {
                  my: "16px",
                  children: [
                    Object(Xt.jsx)(Ht.rb, {
                      ml: "16px",
                      mt: "8px",
                      children: t("Top Movers"),
                    }),
                    Object(Xt.jsx)(bc, {
                      ref: r,
                      children: n.map(function (e) {
                        var t;
                        return e.data
                          ? Object(Xt.jsx)(
                              jc,
                              { tokenData: e.data },
                              "top-card-token-".concat(
                                null === (t = e.data) || void 0 === t
                                  ? void 0
                                  : t.address
                              )
                            )
                          : null;
                      }),
                    }),
                  ],
                })
              : null
          );
        },
        fc = function () {
          var e = Object(_t.b)().t;
          Object(a.useEffect)(function () {
            window.scrollTo(0, 0);
          }, []);
          var t = $t(),
            n = Object(a.useMemo)(
              function () {
                return Object.values(t)
                  .map(function (e) {
                    return e.data;
                  })
                  .filter(function (e) {
                    return e;
                  });
              },
              [t]
            ),
            r = Object(un.m)(),
            c = Object(b.a)(r, 1)[0],
            o = Nt(c);
          return Object(Xt.jsxs)(Fn.a, {
            children: [
              Object(Xt.jsx)(Ht.K, {
                scale: "lg",
                mb: "16px",
                children: e("Your Watchlist"),
              }),
              c.length > 0
                ? Object(Xt.jsx)(dr, { tokenDatas: o })
                : Object(Xt.jsx)(Ht.q, {
                    children: Object(Xt.jsx)(Ht.rb, {
                      py: "16px",
                      px: "24px",
                      children: e("Saved tokens will appear here"),
                    }),
                  }),
              Object(Xt.jsx)(pc, {}),
              Object(Xt.jsx)(Ht.K, {
                scale: "lg",
                mt: "40px",
                mb: "16px",
                id: "info-tokens-title",
                children: e("All Tokens"),
              }),
              Object(Xt.jsx)(dr, { tokenDatas: n }),
            ],
          });
        },
        xc = n(54),
        mc = function (e) {
          var t = Object(a.useState)(void 0),
            n = Object(b.a)(t, 2),
            r = n[0],
            c = n[1];
          return (
            Object(a.useEffect)(
              function () {
                e &&
                  (function () {
                    var t = Object(d.a)(
                      u.a.mark(function t() {
                        var n;
                        return u.a.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  fetch(
                                    ""
                                      .concat(
                                        "https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/contract?address="
                                      )
                                      .concat(e)
                                  )
                                );
                              case 2:
                                200 === (n = t.sent).status &&
                                  n.json().then(function (e) {
                                    var t = e.data;
                                    c(t.url);
                                  });
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })()();
              },
              [e]
            ),
            r
          );
        },
        Oc = Vt.e.div(
          rc ||
            (rc = Object(j.a)([
              "\n  margin-top: 16px;\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  grid-gap: 1em;\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n",
            ]))
        ),
        hc = Object(Vt.e)(Ht.P)(
          cc ||
            (cc = Object(j.a)([
              "\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n\n  & :hover {\n    opacity: 0.8;\n  }\n",
            ]))
        ),
        vc = { weeks: 1 },
        kc = function (e) {
          var t = e.match.params.address,
            n = Object(Ht.Ib)(),
            r = n.isXs,
            c = n.isSm,
            o = Object(_t.b)().t;
          Object(a.useEffect)(function () {
            window.scrollTo(0, 0);
          }, []);
          var i = t.toLowerCase(),
            s = mc(i),
            l = (function (e) {
              var t,
                n = $t(),
                r = Bt();
              if (e && Object(ut.d)(e))
                return (
                  n[e] || r([e]),
                  null === (t = n[e]) || void 0 === t ? void 0 : t.data
                );
            })(i),
            j = (function (e) {
              var t = Object(it.b)(),
                n = Object(it.c)(function (t) {
                  return t.info.tokens.byAddress[e];
                }).poolAddresses,
                r = Object(a.useState)(!1),
                c = Object(b.a)(r, 2),
                o = c[0],
                i = c[1];
              return (
                Object(a.useEffect)(
                  function () {
                    n ||
                      o ||
                      (function () {
                        var n = Object(d.a)(
                          u.a.mark(function n() {
                            var r, c, o;
                            return u.a.wrap(function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    return (n.next = 2), Ut(e);
                                  case 2:
                                    (r = n.sent),
                                      (c = r.error),
                                      (o = r.addresses),
                                      !c &&
                                        o &&
                                        t(
                                          Object(Tt.c)({
                                            tokenAddress: e,
                                            poolAddresses: o,
                                          })
                                        ),
                                      c && i(c);
                                  case 7:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                          })
                        );
                        return function () {
                          return n.apply(this, arguments);
                        };
                      })()();
                  },
                  [e, t, o, n]
                ),
                n
              );
            })(i),
            p = zt(null !== j && void 0 !== j ? j : []),
            f = (function (e) {
              var t = Object(it.b)(),
                n = Object(it.c)(function (t) {
                  return t.info.tokens.byAddress[e];
                }).transactions,
                r = Object(a.useState)(!1),
                c = Object(b.a)(r, 2),
                o = c[0],
                i = c[1];
              return (
                Object(a.useEffect)(
                  function () {
                    n ||
                      o ||
                      (function () {
                        var n = Object(d.a)(
                          u.a.mark(function n() {
                            var r, c, o;
                            return u.a.wrap(function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    return (n.next = 2), yt(e);
                                  case 2:
                                    (r = n.sent),
                                      (c = r.error),
                                      (o = r.data),
                                      c
                                        ? i(!0)
                                        : o &&
                                          t(
                                            Object(Tt.m)({
                                              tokenAddress: e,
                                              transactions: o,
                                            })
                                          );
                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                          })
                        );
                        return function () {
                          return n.apply(this, arguments);
                        };
                      })()();
                  },
                  [e, t, o, n]
                ),
                n
              );
            })(i),
            x = (function (e) {
              var t = Object(it.b)(),
                n = Object(it.c)(function (t) {
                  return t.info.tokens.byAddress[e];
                }).chartData,
                r = Object(a.useState)(!1),
                c = Object(b.a)(r, 2),
                o = c[0],
                i = c[1];
              return (
                Object(a.useEffect)(
                  function () {
                    n ||
                      o ||
                      (function () {
                        var n = Object(d.a)(
                          u.a.mark(function n() {
                            var r, c, o;
                            return u.a.wrap(function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    return (n.next = 2), ht(e);
                                  case 2:
                                    (r = n.sent),
                                      (c = r.error),
                                      (o = r.data),
                                      !c &&
                                        o &&
                                        t(
                                          Object(Tt.j)({
                                            tokenAddress: e,
                                            chartData: o,
                                          })
                                        ),
                                      c && i(c);
                                  case 7:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                          })
                        );
                        return function () {
                          return n.apply(this, arguments);
                        };
                      })()();
                  },
                  [e, t, o, n]
                ),
                n
              );
            })(i),
            m = (function (e, t, n) {
              var r = Object(it.b)(),
                c = Object(it.c)(function (t) {
                  return t.info.tokens.byAddress[e];
                }),
                o = c.priceData[t],
                i = Object(a.useState)(!1),
                s = Object(b.a)(i, 2),
                l = s[0],
                j = s[1],
                p = c.priceData.oldestFetchedTimestamp,
                f = 1e3 * Object(w.a)(new Date()),
                x = Object(w.a)(Object(st.a)(Object(lt.a)(f, n)));
              return (
                Object(a.useEffect)(
                  function () {
                    o ||
                      l ||
                      (function () {
                        var n = Object(d.a)(
                          u.a.mark(function n() {
                            var c, o, a;
                            return u.a.wrap(function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    return (n.next = 2), wt(e, t, x);
                                  case 2:
                                    (c = n.sent),
                                      (o = c.data),
                                      (a = c.error),
                                      o &&
                                        r(
                                          Object(Tt.l)({
                                            tokenAddress: e,
                                            secondsInterval: t,
                                            priceData: o,
                                            oldestFetchedTimestamp: x,
                                          })
                                        ),
                                      a && j(!0);
                                  case 7:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                          })
                        );
                        return function () {
                          return n.apply(this, arguments);
                        };
                      })()();
                  },
                  [e, r, l, t, p, o, x, n]
                ),
                o
              );
            })(i, 3600, vc),
            O = Object(a.useMemo)(
              function () {
                if (m && l && m.length > 0)
                  return [].concat(Object(We.a)(m), [
                    {
                      time: new Date().getTime() / 1e3,
                      open: m[m.length - 1].close,
                      close: null === l || void 0 === l ? void 0 : l.priceUSD,
                      high: null === l || void 0 === l ? void 0 : l.priceUSD,
                      low: m[m.length - 1].close,
                    },
                  ]);
              },
              [m, l]
            ),
            h = Object(un.m)(),
            v = Object(b.a)(h, 2),
            k = v[0],
            y = v[1];
          return Object(Xt.jsx)(Fn.a, {
            symbol: null === l || void 0 === l ? void 0 : l.symbol,
            children: l
              ? l.exists
                ? Object(Xt.jsxs)(Xt.Fragment, {
                    children: [
                      Object(Xt.jsxs)(Ht.I, {
                        justifyContent: "space-between",
                        mb: "24px",
                        flexDirection: ["column", "column", "row"],
                        children: [
                          Object(Xt.jsxs)(Ht.l, {
                            mb: "32px",
                            children: [
                              Object(Xt.jsx)(Wt.a, {
                                to: "/info",
                                children: Object(Xt.jsx)(Ht.rb, {
                                  color: "#eaf4fb",
                                  children: o("Info"),
                                }),
                              }),
                              Object(Xt.jsx)(Wt.a, {
                                to: "/info/tokens",
                                children: Object(Xt.jsx)(Ht.rb, {
                                  color: "#eaf4fb",
                                  children: o("Tokens"),
                                }),
                              }),
                              Object(Xt.jsxs)(Ht.I, {
                                children: [
                                  Object(Xt.jsx)(Ht.rb, {
                                    mr: "8px",
                                    children: l.symbol,
                                  }),
                                  Object(Xt.jsx)(Ht.rb, {
                                    children: "(".concat(Object(Tr.a)(i), ")"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(Xt.jsxs)(Ht.I, {
                            justifyContent: [null, null, "flex-end"],
                            mt: ["8px", "8px", 0],
                            children: [
                              Object(Xt.jsx)(Ht.Q, {
                                mr: "8px",
                                color: "#a8d7ee",
                                href: Object(ut.b)(i, "address"),
                                children: o("View on BscScan"),
                              }),
                              s &&
                                Object(Xt.jsx)(hc, {
                                  href: s,
                                  rel: "noopener noreferrer nofollow",
                                  target: "_blank",
                                  children: Object(Xt.jsx)(Ht.N, {
                                    src: "/images/CMC-logo.svg",
                                    height: 22,
                                    width: 22,
                                    alt: o("View token on CoinMarketCap"),
                                  }),
                                }),
                              Object(Xt.jsx)(pn, {
                                fill: k.includes(i),
                                onClick: function () {
                                  return y(i);
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(Xt.jsx)(Ht.I, {
                        justifyContent: "space-between",
                        flexDirection: ["column", "column", "column", "row"],
                        children: Object(Xt.jsxs)(Ht.I, {
                          flexDirection: "column",
                          mb: ["8px", null],
                          children: [
                            Object(Xt.jsxs)(Ht.I, {
                              alignItems: "center",
                              children: [
                                Object(Xt.jsx)(rn, {
                                  size: "32px",
                                  address: i,
                                }),
                                Object(Xt.jsx)(Ht.rb, {
                                  ml: "12px",
                                  bold: !0,
                                  lineHeight: "0.7",
                                  fontSize: r || c ? "24px" : "40px",
                                  id: "info-token-name-title",
                                  children: l.name,
                                }),
                                Object(Xt.jsxs)(Ht.rb, {
                                  ml: "12px",
                                  lineHeight: "1",
                                  color: "textSubtle",
                                  fontSize: r || c ? "14px" : "20px",
                                  children: ["(", l.symbol, ")"],
                                }),
                              ],
                            }),
                            Object(Xt.jsxs)(Ht.I, {
                              mt: "8px",
                              ml: "46px",
                              alignItems: "center",
                              children: [
                                Object(Xt.jsxs)(Ht.rb, {
                                  mr: "16px",
                                  bold: !0,
                                  fontSize: "24px",
                                  children: [
                                    "$",
                                    ln(l.priceUSD, { notation: "standard" }),
                                  ],
                                }),
                                Object(Xt.jsx)(Yn, {
                                  value: l.priceUSDChange,
                                  fontWeight: 600,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(Xt.jsxs)(Oc, {
                        children: [
                          Object(Xt.jsx)(Ht.q, {
                            children: Object(Xt.jsxs)(Ht.k, {
                              p: "24px",
                              children: [
                                Object(Xt.jsx)(Ht.rb, {
                                  bold: !0,
                                  small: !0,
                                  color: "secondary",
                                  fontSize: "12px",
                                  textTransform: "uppercase",
                                  children: o("Liquidity"),
                                }),
                                Object(Xt.jsxs)(Ht.rb, {
                                  bold: !0,
                                  fontSize: "24px",
                                  children: ["$", ln(l.liquidityUSD)],
                                }),
                                Object(Xt.jsx)(Yn, {
                                  value: l.liquidityUSDChange,
                                }),
                                Object(Xt.jsx)(Ht.rb, {
                                  mt: "24px",
                                  bold: !0,
                                  color: "secondary",
                                  fontSize: "12px",
                                  textTransform: "uppercase",
                                  children: o("Volume 24H"),
                                }),
                                Object(Xt.jsxs)(Ht.rb, {
                                  bold: !0,
                                  fontSize: "24px",
                                  textTransform: "uppercase",
                                  children: ["$", ln(l.volumeUSD)],
                                }),
                                Object(Xt.jsx)(Yn, {
                                  value: l.volumeUSDChange,
                                }),
                                Object(Xt.jsx)(Ht.rb, {
                                  mt: "24px",
                                  bold: !0,
                                  color: "secondary",
                                  fontSize: "12px",
                                  textTransform: "uppercase",
                                  children: o("Volume 7D"),
                                }),
                                Object(Xt.jsxs)(Ht.rb, {
                                  bold: !0,
                                  fontSize: "24px",
                                  children: ["$", ln(l.volumeUSDWeek)],
                                }),
                                Object(Xt.jsx)(Ht.rb, {
                                  mt: "24px",
                                  bold: !0,
                                  color: "secondary",
                                  fontSize: "12px",
                                  textTransform: "uppercase",
                                  children: o("Transactions 24H"),
                                }),
                                Object(Xt.jsx)(Ht.rb, {
                                  bold: !0,
                                  fontSize: "24px",
                                  children: ln(l.txCount, { isInteger: !0 }),
                                }),
                              ],
                            }),
                          }),
                          Object(Xt.jsx)(oc, {
                            variant: "token",
                            chartData: x,
                            tokenData: l,
                            tokenPriceData: O,
                          }),
                        ],
                      }),
                      Object(Xt.jsx)(Ht.K, {
                        scale: "lg",
                        mb: "16px",
                        mt: "40px",
                        children: o("Pools"),
                      }),
                      Object(Xt.jsx)(yr, { poolDatas: p }),
                      Object(Xt.jsx)(Ht.K, {
                        scale: "lg",
                        mb: "16px",
                        mt: "40px",
                        children: o("Transactions"),
                      }),
                      Object(Xt.jsx)(Er, { transactions: f }),
                    ],
                  })
                : Object(Xt.jsx)(Ht.q, {
                    children: Object(Xt.jsx)(Ht.k, {
                      p: "16px",
                      children: Object(Xt.jsxs)(Ht.rb, {
                        children: [
                          o(
                            "No pool has been created with this token yet. Create one"
                          ),
                          Object(Xt.jsx)(Wt.a, {
                            style: { display: "inline", marginLeft: "6px" },
                            to: "/add/".concat(i),
                            children: o("here."),
                          }),
                        ],
                      }),
                    }),
                  })
              : Object(Xt.jsx)(Ht.I, {
                  mt: "80px",
                  justifyContent: "center",
                  children: Object(Xt.jsx)(Ht.mb, {}),
                }),
          });
        },
        yc = function (e) {
          var t = e.match.params.address;
          return Object(xc.isAddress)(t.toLowerCase())
            ? Object(Xt.jsx)(kc, Object(D.a)({}, e))
            : Object(Xt.jsx)(s.a, { to: "/" });
        };
      t.default = function () {
        return Object(Xt.jsxs)(Xt.Fragment, {
          children: [
            Object(Xt.jsx)(Pt, {}),
            Object(Xt.jsx)(Et, {}),
            Object(Xt.jsx)(Mt, {}),
            Object(Xt.jsx)(Un, {}),
            Object(Xt.jsx)(s.b, {
              path: "/info",
              exact: !0,
              children: Object(Xt.jsx)(Vr, {}),
            }),
            Object(Xt.jsx)(s.b, {
              path: "/info/pools",
              exact: !0,
              children: Object(Xt.jsx)(Wr, {}),
            }),
            Object(Xt.jsx)(s.b, {
              path: "/info/tokens",
              exact: !0,
              children: Object(Xt.jsx)(fc, {}),
            }),
            Object(Xt.jsx)(s.b, {
              exact: !0,
              path: ["/info/tokens/:address", "/info/token/:address"],
              component: yc,
            }),
            Object(Xt.jsx)(s.b, {
              exact: !0,
              path: [
                "/info/pools/:address",
                "/info/pool/:address",
                "/info/pair/:address",
              ],
              component: lc,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=6.0c016abc.chunk.js.map
