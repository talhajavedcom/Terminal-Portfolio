// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "2",

      macros: [
        { function: "__e" },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
      ],
      tags: [
        {
          function: "__googtag",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: "G-TPY3W9HZHW",
          vtp_configSettingsTable: [
            "list",
            ["map", "parameter", "send_page_view", "parameterValue", "true"],
          ],
          tag_id: 3,
        },
      ],
      predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" }],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__googtag",
        [46, "a"],
        [
          50,
          "l",
          [46, "u", "v"],
          [
            66,
            "w",
            [2, [15, "b"], "keys", [7, [15, "v"]]],
            [46, [43, [15, "u"], [15, "w"], [16, [15, "v"], [15, "w"]]]],
          ],
        ],
        [
          50,
          "m",
          [46],
          [
            36,
            [
              7,
              [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
              [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"],
            ],
          ],
        ],
        [
          50,
          "n",
          [46, "u"],
          [52, "v", ["m"]],
          [
            65,
            "w",
            [15, "v"],
            [
              46,
              [
                53,
                [52, "x", [16, [15, "u"], [15, "w"]]],
                [22, [15, "x"], [46, [36, [15, "x"]]]],
              ],
            ],
          ],
          [36, [44]],
        ],
        [52, "b", ["require", "Object"]],
        [52, "c", ["require", "createArgumentsQueue"]],
        [52, "d", [15, "__module_gtag"]],
        [52, "e", ["require", "internal.gtagConfig"]],
        [52, "f", ["require", "getType"]],
        [52, "g", ["require", "internal.loadGoogleTag"]],
        [52, "h", ["require", "logToConsole"]],
        [52, "i", ["require", "makeNumber"]],
        [52, "j", ["require", "makeString"]],
        [52, "k", ["require", "makeTableMap"]],
        [52, "o", [30, [17, [15, "a"], "tagId"], ""]],
        [
          22,
          [
            30,
            [21, ["f", [15, "o"]], "string"],
            [24, [2, [15, "o"], "indexOf", [7, "-"]], 0],
          ],
          [
            46,
            [
              "h",
              [
                0,
                "Invalid Measurement ID for the GA4 Configuration tag: ",
                [15, "o"],
              ],
            ],
            [2, [15, "a"], "gtmOnFailure", [7]],
            [36],
          ],
        ],
        [52, "p", [30, [17, [15, "a"], "configSettingsVariable"], [8]]],
        [
          52,
          "q",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "p"], [15, "q"]],
        [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"], [8]]],
        [
          52,
          "s",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "eventSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "r"], [15, "s"]],
        [52, "t", [15, "p"]],
        ["l", [15, "t"], [15, "r"]],
        [
          22,
          [
            30,
            [
              2,
              [15, "t"],
              "hasOwnProperty",
              [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]],
            ],
            [17, [15, "a"], "userProperties"],
          ],
          [
            46,
            [
              53,
              [
                52,
                "u",
                [
                  30,
                  [
                    16,
                    [15, "t"],
                    [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                  ],
                  [8],
                ],
              ],
              [
                "l",
                [15, "u"],
                [
                  30,
                  [
                    "k",
                    [30, [17, [15, "a"], "userProperties"], [7]],
                    "name",
                    "value",
                  ],
                  [8],
                ],
              ],
              [
                43,
                [15, "t"],
                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                [15, "u"],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
            [
              51,
              "",
              [7, "u"],
              [
                36,
                [
                  39,
                  [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]],
                  false,
                  [28, [28, [15, "u"]]],
                ],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
            [51, "", [7, "u"], [36, ["i", [15, "u"]]]],
          ],
        ],
        ["g", [15, "o"], [8, "firstPartyUrl", ["n", [15, "t"]]]],
        ["e", [15, "o"], [15, "t"], [8, "noTargetGroup", true]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        52,
        "__module_gtag",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "f",
                  [46, "g", "h", "i"],
                  [
                    65,
                    "j",
                    [15, "h"],
                    [
                      46,
                      [
                        22,
                        [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                        [
                          46,
                          [
                            43,
                            [15, "g"],
                            [15, "j"],
                            ["i", [16, [15, "g"], [15, "j"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "Object"]],
                [
                  52,
                  "c",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        8,
                        "EP_FIRST_PARTY_COLLECTION",
                        "first_party_collection",
                        "EP_SERVER_CONTAINER_URL",
                        "server_container_url",
                        "EP_TRANSPORT_URL",
                        "transport_url",
                        "EP_USER_PROPERTIES",
                        "user_properties",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "d",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "allow_ad_personalization_signals",
                        "allow_google_signals",
                        "cookie_update",
                        "ignore_referrer",
                        "update",
                        "first_party_collection",
                        "send_page_view",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "e",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "cookie_expires",
                        "event_timeout",
                        "session_duration",
                        "session_engaged_time",
                        "engagement_time_msec",
                      ],
                    ],
                  ],
                ],
                [
                  36,
                  [
                    8,
                    "SCHEMA",
                    [15, "c"],
                    "GOLD_BOOLEAN_FIELDS",
                    [15, "d"],
                    "GOLD_NUMERIC_FIELDS",
                    [15, "e"],
                    "convertParameters",
                    [15, "f"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
    ],
    entities: {
      __googtag: { 1: 10 },
    },
    blob: { 1: "2" },
    permissions: {
      __googtag: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "gtag", read: true, write: true, execute: true },
            { key: "dataLayer", read: true, write: true, execute: false },
          ],
        },
        configure_google_tags: { allowedTagIds: "any" },
        load_google_tags: {
          allowedTagIds: "any",
          allowFirstPartyUrls: true,
          allowedFirstPartyUrls: "any",
        },
      },
    },

    security_groups: {
      google: ["__googtag"],
    },
  };

  var aa,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ea =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    fa = function (a) {
      for (
        var b = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c];
        if (d && d.Math == Math) return d;
      }
      throw Error("Cannot find global object");
    },
    ha = fa(this),
    ja = function (a, b) {
      if (b)
        a: {
          for (var c = ha, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            if (!(f in c)) break a;
            c = c[f];
          }
          var g = d[d.length - 1],
            h = c[g],
            m = b(h);
          m != h &&
            null != m &&
            ea(c, g, { configurable: !0, writable: !0, value: m });
        }
    },
    ka = function (a) {
      return (a.raw = a);
    },
    la = function (a, b) {
      a.raw = b;
      return a;
    },
    ma = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return { next: ba(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    na = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    oa = function (a) {
      return a instanceof Array ? a : na(ma(a));
    },
    qa =
      "function" == typeof Object.assign
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d)
                for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  ja("Object.assign", function (a) {
    return a || qa;
  });
  var ra =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    sa;
  if ("function" == typeof Object.setPrototypeOf) sa = Object.setPrototypeOf;
  else {
    var ta;
    a: {
      var ua = { a: !0 },
        va = {};
      try {
        va.__proto__ = ua;
        ta = va.a;
        break a;
      } catch (a) {}
      ta = !1;
    }
    sa = ta
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var wa = sa,
    ya = function (a, b) {
      a.prototype = ra(b.prototype);
      a.prototype.constructor = a;
      if (wa) wa(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Mn = b.prototype;
    },
    za = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var Ba = this || self,
    Da = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    Ea = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    Fa = function (a, b, c) {
      Fa =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf("native code")
          ? Da
          : Ea;
      return Fa.apply(null, arguments);
    },
    Ga = function (a) {
      return a;
    };
  var Ha = function (a, b) {
    this.type = a;
    this.data = b;
  };
  var Ia = function () {
    this.m = {};
    this.H = {};
  };
  aa = Ia.prototype;
  aa.get = function (a) {
    return this.m["dust." + a];
  };
  aa.set = function (a, b) {
    a = "dust." + a;
    this.H.hasOwnProperty(a) || (this.m[a] = b);
  };
  aa.Nh = function (a, b) {
    this.set(a, b);
    this.H["dust." + a] = !0;
  };
  aa.has = function (a) {
    return this.m.hasOwnProperty("dust." + a);
  };
  aa.xf = function (a) {
    a = "dust." + a;
    this.H.hasOwnProperty(a) || delete this.m[a];
  };
  var Ja = function () {};
  Ja.prototype.reset = function () {};
  var Ka = function (a, b) {
    this.T = a;
    this.parent = b;
    this.m = this.F = void 0;
    this.M = function (c, d, e) {
      return c.apply(d, e);
    };
    this.values = new Ia();
  };
  Ka.prototype.add = function (a, b) {
    La(this, a, b, !1);
  };
  var La = function (a, b, c, d) {
    d ? a.values.Nh(b, c) : a.values.set(b, c);
  };
  Ka.prototype.set = function (a, b) {
    !this.values.has(a) && this.parent && this.parent.has(a)
      ? this.parent.set(a, b)
      : this.values.set(a, b);
  };
  Ka.prototype.get = function (a) {
    return this.values.has(a)
      ? this.values.get(a)
      : this.parent
      ? this.parent.get(a)
      : void 0;
  };
  Ka.prototype.has = function (a) {
    return !!this.values.has(a) || !(!this.parent || !this.parent.has(a));
  };
  var Ma = function (a) {
    var b = new Ka(a.T, a);
    a.F && (b.F = a.F);
    b.M = a.M;
    b.m = a.m;
    return b;
  };
  Ka.prototype.H = function () {
    return this.T;
  };
  function Na(a, b) {
    for (
      var c, d = 0;
      d < b.length && !((c = Oa(a, b[d])), c instanceof Ha);
      d++
    );
    return c;
  }
  function Oa(a, b) {
    try {
      var c = a.get(String(b[0]));
      if (!c || "function" !== typeof c.invoke)
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return c.invoke.apply(c, [a].concat(b.slice(1)));
    } catch (e) {
      var d = a.F;
      d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
      throw e;
    }
  }
  var Pa = function () {
    this.M = new Ja();
    this.m = new Ka(this.M);
  };
  Pa.prototype.H = function () {
    return this.M;
  };
  Pa.prototype.execute = function (a) {
    var b = Array.prototype.slice.call(arguments, 0);
    return this.F(b);
  };
  Pa.prototype.F = function () {
    for (var a, b = 0; b < arguments.length; b++) a = Oa(this.m, arguments[b]);
    return a;
  };
  Pa.prototype.T = function (a) {
    var b = Ma(this.m);
    b.m = a;
    for (var c, d = 1; d < arguments.length; d++) c = Oa(b, arguments[d]);
    return c;
  };
  var Qa = function () {
    Ia.call(this);
    this.F = !1;
  };
  ya(Qa, Ia);
  var Ra = function (a, b) {
    var c = [],
      d;
    for (d in a.m)
      if (a.m.hasOwnProperty(d))
        switch (((d = d.substr(5)), b)) {
          case 1:
            c.push(d);
            break;
          case 2:
            c.push(a.get(d));
            break;
          case 3:
            c.push([d, a.get(d)]);
        }
    return c;
  };
  Qa.prototype.set = function (a, b) {
    this.F || Ia.prototype.set.call(this, a, b);
  };
  Qa.prototype.Nh = function (a, b) {
    this.F || Ia.prototype.Nh.call(this, a, b);
  };
  Qa.prototype.xf = function (a) {
    this.F || Ia.prototype.xf.call(this, a);
  };
  Qa.prototype.Kb = function () {
    this.F = !0;
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var Sa = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Ta = function (a) {
      if (null == a) return String(a);
      var b = Sa.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Ua = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Va = function (a) {
      if (!a || "object" != Ta(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Ua(a, "constructor") &&
          !Ua(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Ua(a, b);
    },
    k = function (a, b) {
      var c = b || ("array" == Ta(a) ? [] : {}),
        d;
      for (d in a)
        if (Ua(a, d)) {
          var e = a[d];
          "array" == Ta(e)
            ? ("array" != Ta(c[d]) && (c[d] = []), (c[d] = k(e, c[d])))
            : Va(e)
            ? (Va(c[d]) || (c[d] = {}), (c[d] = k(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  function Wa(a) {
    if (void 0 == a || Array.isArray(a) || Va(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  }
  function Xa(a) {
    return (
      ("number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
      ("string" === typeof a && "-" !== a[0] && a === "" + parseInt(a))
    );
  }
  var Ya = function (a) {
    this.m = [];
    this.H = !1;
    this.F = new Qa();
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (Xa(b) ? (this.m[Number(b)] = a[Number(b)]) : this.F.set(b, a[b]));
  };
  aa = Ya.prototype;
  aa.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.m.length; c++) {
      var d = this.m[c];
      null === d || void 0 === d
        ? b.push("")
        : d instanceof Ya
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  aa.set = function (a, b) {
    if (!this.H)
      if ("length" === a) {
        if (!Xa(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.m.length = Number(b);
      } else Xa(a) ? (this.m[Number(a)] = b) : this.F.set(a, b);
  };
  aa.get = function (a) {
    return "length" === a
      ? this.length()
      : Xa(a)
      ? this.m[Number(a)]
      : this.F.get(a);
  };
  aa.length = function () {
    return this.m.length;
  };
  aa.Zb = function () {
    for (var a = Ra(this.F, 1), b = 0; b < this.m.length; b++) a.push(b + "");
    return new Ya(a);
  };
  var Za = function (a, b) {
    Xa(b) ? delete a.m[Number(b)] : a.F.xf(b);
  };
  aa = Ya.prototype;
  aa.pop = function () {
    return this.m.pop();
  };
  aa.push = function () {
    return this.m.push.apply(this.m, Array.prototype.slice.call(arguments));
  };
  aa.shift = function () {
    return this.m.shift();
  };
  aa.splice = function (a, b) {
    return new Ya(this.m.splice.apply(this.m, arguments));
  };
  aa.unshift = function () {
    return this.m.unshift.apply(this.m, Array.prototype.slice.call(arguments));
  };
  aa.has = function (a) {
    return (Xa(a) && this.m.hasOwnProperty(a)) || this.F.has(a);
  };
  aa.Kb = function () {
    this.H = !0;
    Object.freeze(this.m);
    this.F.Kb();
  };
  function $a(a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b;
  }
  var ab = function () {
    Qa.call(this);
  };
  ya(ab, Qa);
  ab.prototype.Zb = function () {
    return new Ya(Ra(this, 1));
  };
  function bb() {
    for (var a = cb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function db() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var cb, eb;
  function fb(a) {
    cb = cb || db();
    eb = eb || bb();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        h = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (h >> 6),
        q = h & 63;
      e || ((q = 64), d || (p = 64));
      b.push(cb[m], cb[n], cb[p], cb[q]);
    }
    return b.join("");
  }
  function gb(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = eb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    cb = cb || db();
    eb = eb || bb();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 !== g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 !== h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
  }
  var hb = {};
  function ib(a, b) {
    hb[a] = hb[a] || [];
    hb[a][b] = !0;
  }
  function jb(a) {
    var b = hb[a];
    if (!b || 0 === b.length) return "";
    for (var c = [], d = 0, e = 0; e < b.length; e++)
      0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
        b[e] && (d |= 1 << e % 8);
    0 < d && c.push(String.fromCharCode(d));
    return fb(c.join("")).replace(/\.+$/, "");
  }
  function lb() {
    for (var a = [], b = hb.fdr || [], c = 0; c < b.length; c++)
      b[c] && a.push(c);
    return 0 < a.length ? a : void 0;
  }
  var mb = function () {},
    nb = function (a) {
      return "function" === typeof a;
    },
    l = function (a) {
      return "string" === typeof a;
    },
    ob = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    pb = function (a, b) {
      if (a && Array.isArray(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    qb = function (a, b) {
      if (!ob(a) || !ob(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    sb = function (a, b) {
      for (var c = new rb(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    z = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    tb = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    ub = function (a) {
      return Math.round(Number(a)) || 0;
    },
    vb = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    wb = function (a) {
      var b = [];
      if (Array.isArray(a))
        for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    xb = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    yb = function () {
      return new Date(Date.now());
    },
    zb = function () {
      return new Date(Date.now()).getTime();
    },
    rb = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  rb.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  rb.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ab = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Bb = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Cb = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Db = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Eb = function (a, b) {
      return a.substring(0, b.length) === b;
    },
    Fb = function (a, b) {
      var c = G;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    Gb = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Hb = /^\w{1,9}$/,
    Ib = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      z(a, function (d, e) {
        Hb.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    Jb = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  var Kb,
    Lb = function () {
      if (void 0 === Kb) {
        var a = null,
          b = Ba.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: Ga,
              createScript: Ga,
              createScriptURL: Ga,
            });
          } catch (c) {
            Ba.console && Ba.console.error(c.message);
          }
          Kb = a;
        } else Kb = a;
      }
      return Kb;
    };
  var Mb = function (a) {
    this.m = a;
  };
  Mb.prototype.toString = function () {
    return this.m + "";
  };
  var Nb = function (a) {
      return a instanceof Mb && a.constructor === Mb
        ? a.m
        : "type_error:TrustedResourceUrl";
    },
    Ob = {},
    Pb = function (a) {
      var b = a,
        c = Lb(),
        d = c ? c.createScriptURL(b) : b;
      return new Mb(d, Ob);
    }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var Qb = ka([""]),
    Rb = la(["\x00"], ["\\0"]),
    Sb = la(["\n"], ["\\n"]),
    Tb = la(["\x00"], ["\\u0000"]);
  function Ub(a) {
    return -1 === a.toString().indexOf("`");
  }
  Ub(function (a) {
    return a(Qb);
  }) ||
    Ub(function (a) {
      return a(Rb);
    }) ||
    Ub(function (a) {
      return a(Sb);
    }) ||
    Ub(function (a) {
      return a(Tb);
    });
  var Vb = function (a) {
    this.m = a;
  };
  Vb.prototype.toString = function () {
    return this.m;
  };
  var Wb = new Vb("about:invalid#zClosurez");
  var Xb = function (a) {
    this.Tl = a;
  };
  function Yb(a) {
    return new Xb(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var Zb = [
    Yb("data"),
    Yb("http"),
    Yb("https"),
    Yb("mailto"),
    Yb("ftp"),
    new Xb(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function $b(a, b) {
    b = void 0 === b ? Zb : b;
    if (a instanceof Vb) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof Xb && d.Tl(a)) return new Vb(a);
    }
  }
  function ac(a) {
    var b;
    b = void 0 === b ? Zb : b;
    return $b(a, b) || Wb;
  }
  var bc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function cc(a) {
    var b;
    if (a instanceof Vb)
      if (a instanceof Vb) b = a.m;
      else throw Error("");
    else b = bc.test(a) ? a : void 0;
    return b;
  }
  var ec = function () {
    this.m = dc[0].toLowerCase();
  };
  ec.prototype.toString = function () {
    return this.m;
  };
  var fc = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var gc = {},
    hc = function (a) {
      this.m = a;
    };
  hc.prototype.toString = function () {
    return this.m.toString();
  };
  function ic(a, b) {
    var c = [new ec()];
    if (0 === c.length) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof ec) g = f.m;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return 0 !== e.indexOf(f);
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function jc(a, b) {
    var c = cc(b);
    void 0 !== c && (a.action = c);
  }
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
    .split(" ")
    .concat(["BUTTON", "INPUT"]);
  function kc(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  var G = window,
    H = document,
    lc = navigator,
    mc = function () {
      var a;
      try {
        a = lc.serviceWorker;
      } catch (b) {
        return;
      }
      return a;
    },
    nc = H.currentScript && H.currentScript.src,
    oc = function (a, b) {
      var c = G[a];
      G[a] = void 0 === c ? b : c;
      return G[a];
    },
    pc = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    qc = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    rc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function sc(a, b, c) {
    b &&
      z(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var tc = function (a, b, c, d, e) {
      var f = H.createElement("script");
      sc(f, d, qc);
      f.type = "text/javascript";
      f.async = d && !1 === d.async ? !1 : !0;
      var g;
      g = Pb(kc(a));
      f.src = Nb(g);
      var h,
        m,
        n,
        p =
          null ==
          (n = (m = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : n.call(m, "script[nonce]");
      (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", h);
      pc(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var q = H.getElementsByTagName("script")[0] || H.body || H.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    uc = function () {
      if (nc) {
        var a = nc.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    vc = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        h = !1;
      g || ((g = H.createElement("iframe")), (h = !0));
      sc(g, c, rc);
      d &&
        z(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      void 0 !== a && (g.src = a);
      if (h) {
        var m = (H.body && H.body.lastChild) || H.body || H.head;
        m.parentNode.insertBefore(g, m);
      }
      pc(g, b);
      return g;
    },
    wc = function (a, b, c, d) {
      var e = new Image(1, 1);
      sc(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
    },
    xc = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    yc = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    I = function (a) {
      G.setTimeout(a, 0);
    },
    zc = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Ac = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Bc = function (a) {
      var b = H.createElement("div"),
        c = b,
        d,
        e = kc("A<div>" + a + "</div>"),
        f = Lb(),
        g = f ? f.createHTML(e) : e;
      d = new hc(g, gc);
      if (1 === c.nodeType) {
        var h = c.tagName;
        if ("SCRIPT" === h || "STYLE" === h) throw Error("");
      }
      c.innerHTML =
        d instanceof hc && d.constructor === hc ? d.m : "type_error:SafeHtml";
      b = b.lastChild;
      for (var m = []; b.firstChild; ) m.push(b.removeChild(b.firstChild));
      return m;
    },
    Cc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Dc = function (a) {
      var b;
      try {
        b = lc.sendBeacon && lc.sendBeacon(a);
      } catch (c) {
        ib("TAGGING", 15);
      }
      b || wc(a);
    },
    Ec = function (a, b) {
      try {
        if (lc.sendBeacon) return lc.sendBeacon(a, b);
      } catch (c) {
        ib("TAGGING", 15);
      }
      return !1;
    },
    Fc = {
      cache: "no-store",
      credentials: "include",
      keepalive: !0,
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
    },
    Gc = function (a, b) {
      var c = { Hn: !0 };
      if ("fetch" in G) {
        var d = Object.assign({}, Fc);
        b && (d.body = b);
        c &&
          (c.attributionReporting &&
            (d.attributionReporting = c.attributionReporting),
          c.browsingTopics && (d.browsingTopics = c.browsingTopics));
        try {
          return G.fetch(a, d), !0;
        } catch (e) {}
      }
      if (c && c.noFallback) return !1;
      if (b) return Ec(a, b);
      Dc(a);
      return !0;
    },
    Hc = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Ic = function () {
      var a = G.performance;
      if (a && nb(a.now)) return a.now();
    },
    Jc = function () {
      return G.performance || void 0;
    };
  var Kc = function (a, b) {
      return this.evaluate(a) && this.evaluate(b);
    },
    Lc = function (a, b) {
      return this.evaluate(a) === this.evaluate(b);
    },
    Mc = function (a, b) {
      return this.evaluate(a) || this.evaluate(b);
    },
    Nc = function (a, b) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      return -1 < String(a).indexOf(String(b));
    },
    Oc = function (a, b) {
      a = String(this.evaluate(a));
      b = String(this.evaluate(b));
      return a.substring(0, b.length) === b;
    },
    Pc = function (a, b) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      switch (a) {
        case "pageLocation":
          var c = G.location.href;
          b instanceof ab &&
            b.get("stripProtocol") &&
            (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var Qc = function (a, b) {
    Qa.call(this);
    this.M = a;
    this.T = b;
  };
  ya(Qc, Qa);
  aa = Qc.prototype;
  aa.toString = function () {
    return this.M;
  };
  aa.getName = function () {
    return this.M;
  };
  aa.Zb = function () {
    return new Ya(Ra(this, 1));
  };
  aa.invoke = function (a) {
    return this.T.apply(
      new Rc(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  aa.cb = function (a) {
    try {
      return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (b) {}
  };
  var Rc = function (a, b) {
    this.m = a;
    this.J = b;
  };
  Rc.prototype.evaluate = function (a) {
    var b = this.J;
    return Array.isArray(a) ? Oa(b, a) : a;
  };
  Rc.prototype.getName = function () {
    return this.m.getName();
  };
  Rc.prototype.H = function () {
    return this.J.H();
  };
  var Sc = function () {
    this.map = new Map();
  };
  Sc.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  Sc.prototype.get = function (a) {
    return this.map.get(a);
  };
  var Tc = function () {
    this.keys = [];
    this.values = [];
  };
  Tc.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  Tc.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (-1 < b) return this.values[b];
  };
  function Uc() {
    try {
      return Map ? new Sc() : new Tc();
    } catch (a) {
      return new Tc();
    }
  }
  var Vc = function (a) {
    if (a instanceof Vc) return a;
    if (Wa(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.m = a;
  };
  Vc.prototype.getValue = function () {
    return this.m;
  };
  Vc.prototype.toString = function () {
    return String(this.m);
  };
  var Xc = function (a) {
    Qa.call(this);
    this.promise = a;
    this.set("then", Wc(this));
    this.set("catch", Wc(this, !0));
    this.set("finally", Wc(this, !1, !0));
  };
  ya(Xc, ab);
  var Wc = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new Qc("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof Qc || (d = void 0);
      e instanceof Qc || (e = void 0);
      var f = Ma(this.J),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.promise) : m.invoke(f, n);
          };
        },
        h = a.promise.then(d && g(d), e && g(e));
      return new Xc(h);
    });
  };
  var J = function (a, b, c) {
      var d = Uc(),
        e = function (g, h) {
          for (var m = Ra(g, 1), n = 0; n < m.length; n++)
            h[m[n]] = f(g.get(m[n]));
        },
        f = function (g) {
          var h = d.get(g);
          if (h) return h;
          if (g instanceof Ya) {
            var m = [];
            d.set(g, m);
            for (var n = g.Zb(), p = 0; p < n.length(); p++)
              m[n.get(p)] = f(g.get(n.get(p)));
            return m;
          }
          if (g instanceof Xc) return g.promise;
          if (g instanceof ab) {
            var q = {};
            d.set(g, q);
            e(g, q);
            return q;
          }
          if (g instanceof Qc) {
            var r = function () {
              for (
                var u = Array.prototype.slice.call(arguments, 0), v = 0;
                v < u.length;
                v++
              )
                u[v] = Zc(u[v], b, c);
              var w = new Ka(b ? b.H() : new Ja());
              b && (w.m = b.m);
              return f(g.invoke.apply(g, [w].concat(u)));
            };
            d.set(g, r);
            e(g, r);
            return r;
          }
          var t = !1;
          switch (c) {
            case 1:
              t = !0;
              break;
            case 2:
              t = !1;
              break;
            case 3:
              t = !1;
              break;
            default:
          }
          if (g instanceof Vc && t) return g.getValue();
          switch (typeof g) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return g;
            case "object":
              if (null === g) return null;
          }
        };
      return f(a);
    },
    Zc = function (a, b, c) {
      var d = Uc(),
        e = function (g, h) {
          for (var m in g) g.hasOwnProperty(m) && h.set(m, f(g[m]));
        },
        f = function (g) {
          var h = d.get(g);
          if (h) return h;
          if (Array.isArray(g) || tb(g)) {
            var m = new Ya([]);
            d.set(g, m);
            for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
            return m;
          }
          if (Va(g)) {
            var p = new ab();
            d.set(g, p);
            e(g, p);
            return p;
          }
          if ("function" === typeof g) {
            var q = new Qc("", function (x) {
              for (
                var y = Array.prototype.slice.call(arguments, 0), B = 0;
                B < y.length;
                B++
              )
                y[B] = J(this.evaluate(y[B]), b, c);
              return f((0, this.J.M)(g, g, y));
            });
            d.set(g, q);
            e(g, q);
            return q;
          }
          var v = typeof g;
          if (null === g || "string" === v || "number" === v || "boolean" === v)
            return g;
          var w = !1;
          switch (c) {
            case 1:
              w = !0;
              break;
            case 2:
              w = !1;
              break;
            default:
          }
          if (void 0 !== g && w) return new Vc(g);
        };
      return f(a);
    };
  function $c() {
    var a = !1;
    return a;
  }
  var ad = {
    concat: function (a) {
      for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
      for (var d = 1; d < arguments.length; d++)
        if (arguments[d] instanceof Ya)
          for (var e = arguments[d], f = 0; f < e.length(); f++)
            b.push(e.get(f));
        else b.push(arguments[d]);
      return new Ya(b);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new Ya(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new Ya(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var h = f; h < d; h++)
        this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;
      else {
        if (0 === d)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var h = f; 0 <= h; h--)
        this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function () {
      for (var a = $a(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : Za(this, c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new Ya(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = $a(this);
      void 0 === b
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : Za(this, d);
      return this;
    },
    splice: function (a, b, c) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
  };
  var bd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  ya(bd, Error);
  var cd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    dd = new Ha("break"),
    ed = new Ha("continue"),
    fd = function (a, b) {
      return this.evaluate(a) + this.evaluate(b);
    },
    gd = function (a, b) {
      return this.evaluate(a) && this.evaluate(b);
    },
    hd = function (a, b, c) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      c = this.evaluate(c);
      if (!(c instanceof Ya))
        throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't read property " + b + " of " + a + ".";
        if ($c()) throw new bd(d);
        throw Error(d);
      }
      var e = "number" === typeof a;
      if ("boolean" === typeof a || e) {
        if ("toString" === b) {
          if (e && c.length()) {
            var f = J(c.get(0));
            try {
              return a.toString(f);
            } catch (y) {}
          }
          return a.toString();
        }
        var g = "TypeError: " + a + "." + b + " is not a function.";
        if ($c()) throw new bd(g);
        throw Error(g);
      }
      if ("string" === typeof a) {
        if (cd.hasOwnProperty(b)) {
          var h = 2;
          h = 1;
          var m = J(c, void 0, h);
          return Zc(a[b].apply(a, m), this.J);
        }
        var n = "TypeError: " + b + " is not a function";
        if ($c()) throw new bd(n);
        throw Error(n);
      }
      if (a instanceof Ya) {
        if (a.has(b)) {
          var p = a.get(b);
          if (p instanceof Qc) {
            var q = $a(c);
            q.unshift(this.J);
            return p.invoke.apply(p, q);
          }
          var r = "TypeError: " + b + " is not a function";
          if ($c()) throw new bd(r);
          throw Error(r);
        }
        if (0 <= ad.supportedMethods.indexOf(b)) {
          var t = $a(c);
          t.unshift(this.J);
          return ad[b].apply(a, t);
        }
      }
      if (a instanceof Qc || a instanceof ab) {
        if (a.has(b)) {
          var u = a.get(b);
          if (u instanceof Qc) {
            var v = $a(c);
            v.unshift(this.J);
            return u.invoke.apply(u, v);
          }
          var w = "TypeError: " + b + " is not a function";
          if ($c()) throw new bd(w);
          throw Error(w);
        }
        if ("toString" === b)
          return a instanceof Qc ? a.getName() : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, $a(c));
      }
      if (a instanceof Vc && "toString" === b) return a.toString();
      var x = "TypeError: Object has no '" + b + "' property.";
      if ($c()) throw new bd(x);
      throw Error(x);
    },
    id = function (a, b) {
      a = this.evaluate(a);
      if ("string" !== typeof a)
        throw Error("Invalid key name given for assignment.");
      var c = this.J;
      if (!c.has(a))
        throw Error("Attempting to assign to undefined value " + b);
      var d = this.evaluate(b);
      c.set(a, d);
      return d;
    },
    jd = function (a) {
      var b = Ma(this.J),
        c = Na(b, Array.prototype.slice.apply(arguments));
      if (c instanceof Ha) return c;
    },
    kd = function () {
      return dd;
    },
    ld = function (a) {
      for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
        var d = this.evaluate(b[c]);
        if (d instanceof Ha) return d;
      }
    },
    md = function (a) {
      for (var b = this.J, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = this.evaluate(arguments[c + 1]);
          La(b, d, e, !0);
        }
      }
    },
    nd = function () {
      return ed;
    },
    od = function (a, b) {
      return new Ha(a, this.evaluate(b));
    },
    pd = function (a, b, c) {
      var d = new Ya();
      b = this.evaluate(b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(
        Array.prototype.splice.call(arguments, 2, arguments.length - 2)
      );
      this.J.add(a, this.evaluate(f));
    },
    qd = function (a, b) {
      return this.evaluate(a) / this.evaluate(b);
    },
    rd = function (a, b) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      var c = a instanceof Vc,
        d = b instanceof Vc;
      return c || d ? (c && d ? a.getValue() == b.getValue() : !1) : a == b;
    },
    sd = function (a) {
      for (var b, c = 0; c < arguments.length; c++)
        b = this.evaluate(arguments[c]);
      return b;
    };
  function td(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = Na(f, d);
      if (g instanceof Ha) {
        if ("break" === g.type) break;
        if ("return" === g.type) return g;
      }
    }
  }
  function ud(a, b, c) {
    if ("string" === typeof b)
      return td(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof ab || b instanceof Ya || b instanceof Qc) {
      var d = b.Zb(),
        e = d.length();
      return td(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  var vd = function (a, b, c) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      c = this.evaluate(c);
      var d = this.J;
      return ud(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    wd = function (a, b, c) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      c = this.evaluate(c);
      var d = this.J;
      return ud(
        function (e) {
          var f = Ma(d);
          La(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    xd = function (a, b, c) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      c = this.evaluate(c);
      var d = this.J;
      return ud(
        function (e) {
          var f = Ma(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    },
    zd = function (a, b, c) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      c = this.evaluate(c);
      var d = this.J;
      return yd(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Ad = function (a, b, c) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      c = this.evaluate(c);
      var d = this.J;
      return yd(
        function (e) {
          var f = Ma(d);
          La(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Bd = function (a, b, c) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      c = this.evaluate(c);
      var d = this.J;
      return yd(
        function (e) {
          var f = Ma(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    };
  function yd(a, b, c) {
    if ("string" === typeof b)
      return td(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof Ya)
      return td(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if ($c()) throw new bd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  var Cd = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var t = f.get(r);
          q.add(t, p.get(t));
        }
      }
      var f = this.evaluate(a);
      if (!(f instanceof Ya))
        throw Error(
          "TypeError: Non-List argument given to ForLet instruction."
        );
      var g = this.J;
      d = this.evaluate(d);
      var h = Ma(g);
      for (e(g, h); Oa(h, b); ) {
        var m = Na(h, d);
        if (m instanceof Ha) {
          if ("break" === m.type) break;
          if ("return" === m.type) return m;
        }
        var n = Ma(g);
        e(h, n);
        Oa(n, c);
        h = n;
      }
    },
    Dd = function (a, b, c) {
      var d = this.J,
        e = this.evaluate(b);
      if (!(e instanceof Ya))
        throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      return new Qc(
        a,
        (function () {
          return function (g) {
            var h = Ma(d);
            void 0 === h.m && (h.m = this.J.m);
            for (
              var m = Array.prototype.slice.call(arguments, 0), n = 0;
              n < m.length;
              n++
            )
              if (((m[n] = this.evaluate(m[n])), m[n] instanceof Ha))
                return m[n];
            for (var p = e.get("length"), q = 0; q < p; q++)
              q < m.length ? h.add(e.get(q), m[q]) : h.add(e.get(q), void 0);
            h.add("arguments", new Ya(m));
            var r = Na(h, f);
            if (r instanceof Ha) return "return" === r.type ? r.data : r;
          };
        })()
      );
    },
    Ed = function (a) {
      a = this.evaluate(a);
      var b = this.J,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    Fd = function (a, b) {
      var c;
      a = this.evaluate(a);
      b = this.evaluate(b);
      if (void 0 === a || null === a) {
        var d =
          "TypeError: Cannot read properties of " +
          a +
          " (reading '" +
          b +
          "')";
        if ($c()) throw new bd(d);
        throw Error(d);
      }
      if (a instanceof ab || a instanceof Ya || a instanceof Qc) c = a.get(b);
      else if ("string" === typeof a)
        "length" === b ? (c = a.length) : Xa(b) && (c = a[b]);
      else if (a instanceof Vc) return;
      return c;
    },
    Gd = function (a, b) {
      return this.evaluate(a) > this.evaluate(b);
    },
    Hd = function (a, b) {
      return this.evaluate(a) >= this.evaluate(b);
    },
    Id = function (a, b) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      a instanceof Vc && (a = a.getValue());
      b instanceof Vc && (b = b.getValue());
      return a === b;
    },
    Jd = function (a, b) {
      return !Id.call(this, a, b);
    },
    Kd = function (a, b, c) {
      var d = [];
      this.evaluate(a) ? (d = this.evaluate(b)) : c && (d = this.evaluate(c));
      var e = Na(this.J, d);
      if (e instanceof Ha) return e;
    },
    Ld = function (a, b) {
      return this.evaluate(a) < this.evaluate(b);
    },
    Md = function (a, b) {
      return this.evaluate(a) <= this.evaluate(b);
    },
    Nd = function (a) {
      for (var b = new Ya(), c = 0; c < arguments.length; c++) {
        var d = this.evaluate(arguments[c]);
        b.push(d);
      }
      return b;
    },
    Od = function (a) {
      for (var b = new ab(), c = 0; c < arguments.length - 1; c += 2) {
        var d = this.evaluate(arguments[c]) + "",
          e = this.evaluate(arguments[c + 1]);
        b.set(d, e);
      }
      return b;
    },
    Pd = function (a, b) {
      return this.evaluate(a) % this.evaluate(b);
    },
    Qd = function (a, b) {
      return this.evaluate(a) * this.evaluate(b);
    },
    Rd = function (a) {
      return -this.evaluate(a);
    },
    Sd = function (a) {
      return !this.evaluate(a);
    },
    Td = function (a, b) {
      return !rd.call(this, a, b);
    },
    Ud = function () {
      return null;
    },
    Vd = function (a, b) {
      return this.evaluate(a) || this.evaluate(b);
    },
    Wd = function (a, b) {
      var c = this.evaluate(a);
      this.evaluate(b);
      return c;
    },
    Xd = function (a) {
      return this.evaluate(a);
    },
    Yd = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    Zd = function (a) {
      return new Ha("return", this.evaluate(a));
    },
    $d = function (a, b, c) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      c = this.evaluate(c);
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't set property " + b + " of " + a + ".";
        if ($c()) throw new bd(d);
        throw Error(d);
      }
      (a instanceof Qc || a instanceof Ya || a instanceof ab) && a.set(b, c);
      return c;
    },
    ae = function (a, b) {
      return this.evaluate(a) - this.evaluate(b);
    },
    be = function (a, b, c) {
      a = this.evaluate(a);
      var d = this.evaluate(b),
        e = this.evaluate(c);
      if (!Array.isArray(d) || !Array.isArray(e))
        throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, h = 0; h < d.length; h++)
        if (g || a === this.evaluate(d[h]))
          if (((f = this.evaluate(e[h])), f instanceof Ha)) {
            var m = f.type;
            if ("break" === m) return;
            if ("return" === m || "continue" === m) return f;
          } else g = !0;
      if (
        e.length === d.length + 1 &&
        ((f = this.evaluate(e[e.length - 1])),
        f instanceof Ha && ("return" === f.type || "continue" === f.type))
      )
        return f;
    },
    ce = function (a, b, c) {
      return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c);
    },
    de = function (a) {
      a = this.evaluate(a);
      return a instanceof Qc ? "function" : typeof a;
    },
    ee = function (a) {
      for (var b = this.J, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    fe = function (a, b, c, d) {
      var e = this.evaluate(d);
      if (this.evaluate(c)) {
        var f = Na(this.J, e);
        if (f instanceof Ha) {
          if ("break" === f.type) return;
          if ("return" === f.type) return f;
        }
      }
      for (; this.evaluate(a); ) {
        var g = Na(this.J, e);
        if (g instanceof Ha) {
          if ("break" === g.type) break;
          if ("return" === g.type) return g;
        }
        this.evaluate(b);
      }
    },
    ge = function (a) {
      return ~Number(this.evaluate(a));
    },
    he = function (a, b) {
      return Number(this.evaluate(a)) << Number(this.evaluate(b));
    },
    ie = function (a, b) {
      return Number(this.evaluate(a)) >> Number(this.evaluate(b));
    },
    je = function (a, b) {
      return Number(this.evaluate(a)) >>> Number(this.evaluate(b));
    },
    ke = function (a, b) {
      return Number(this.evaluate(a)) & Number(this.evaluate(b));
    },
    le = function (a, b) {
      return Number(this.evaluate(a)) ^ Number(this.evaluate(b));
    },
    me = function (a, b) {
      return Number(this.evaluate(a)) | Number(this.evaluate(b));
    },
    ne = function () {},
    oe = function (a, b, c, d, e) {
      var f = !0;
      try {
        var g = this.evaluate(c);
        if (g instanceof Ha) return g;
      } catch (r) {
        if (!(r instanceof bd && a)) throw ((f = r instanceof bd), r);
        var h = Ma(this.J),
          m = new Vc(r);
        h.add(b, m);
        var n = this.evaluate(d),
          p = Na(h, n);
        if (p instanceof Ha) return p;
      } finally {
        if (f && void 0 !== e) {
          var q = this.evaluate(e);
          if (q instanceof Ha) return q;
        }
      }
    };
  var qe = function () {
    this.m = new Pa();
    pe(this);
  };
  qe.prototype.execute = function (a) {
    return this.m.F(a);
  };
  var pe = function (a) {
    var b = function (c, d) {
      var e = new Qc(String(c), d);
      e.Kb();
      a.m.m.set(String(c), e);
    };
    b("map", Od);
    b("and", Kc);
    b("contains", Nc);
    b("equals", Lc);
    b("or", Mc);
    b("startsWith", Oc);
    b("variable", Pc);
  };
  var se = function () {
    this.F = !1;
    this.m = new Pa();
    re(this);
    this.F = !0;
  };
  se.prototype.execute = function (a) {
    return te(this.m.F(a));
  };
  var ue = function (a, b, c) {
      return te(a.m.T(b, c));
    },
    re = function (a) {
      var b = function (c, d) {
        var e = String(c),
          f = new Qc(e, d);
        f.Kb();
        a.m.m.set(e, f);
      };
      b(0, fd);
      b(1, gd);
      b(2, hd);
      b(3, id);
      b(56, ke);
      b(57, he);
      b(58, ge);
      b(59, me);
      b(60, ie);
      b(61, je);
      b(62, le);
      b(53, jd);
      b(4, kd);
      b(5, ld);
      b(52, md);
      b(6, nd);
      b(49, od);
      b(7, Nd);
      b(8, Od);
      b(9, ld);
      b(50, pd);
      b(10, qd);
      b(12, rd);
      b(13, sd);
      b(51, Dd);
      b(47, vd);
      b(54, wd);
      b(55, xd);
      b(63, Cd);
      b(64, zd);
      b(65, Ad);
      b(66, Bd);
      b(15, Ed);
      b(16, Fd);
      b(17, Fd);
      b(18, Gd);
      b(19, Hd);
      b(20, Id);
      b(21, Jd);
      b(22, Kd);
      b(23, Ld);
      b(24, Md);
      b(25, Pd);
      b(26, Qd);
      b(27, Rd);
      b(28, Sd);
      b(29, Td);
      b(45, Ud);
      b(30, Vd);
      b(32, Wd);
      b(33, Wd);
      b(34, Xd);
      b(35, Xd);
      b(46, Yd);
      b(36, Zd);
      b(43, $d);
      b(37, ae);
      b(38, be);
      b(39, ce);
      b(67, oe);
      b(40, de);
      b(44, ne);
      b(41, ee);
      b(42, fe);
    };
  se.prototype.H = function () {
    return this.m.H();
  };
  function te(a) {
    if (
      a instanceof Ha ||
      a instanceof Qc ||
      a instanceof Ya ||
      a instanceof ab ||
      a instanceof Vc ||
      null === a ||
      void 0 === a ||
      "string" === typeof a ||
      "number" === typeof a ||
      "boolean" === typeof a
    )
      return a;
  }
  var ve = function (a) {
    this.message = a;
  };
  function we(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      a
    ];
    return void 0 === b
      ? new ve(
          "Value " + a + " can not be encoded in web-safe base64 dictionary."
        )
      : b;
  }
  function xe(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  var ye = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      dk: a("consent"),
      Yh: a("convert_case_to"),
      Zh: a("convert_false_to"),
      ai: a("convert_null_to"),
      bi: a("convert_true_to"),
      di: a("convert_undefined_to"),
      Wm: a("debug_mode_metadata"),
      ra: a("function"),
      Ng: a("instance_name"),
      Fk: a("live_only"),
      Gk: a("malware_disabled"),
      Hk: a("metadata"),
      Kk: a("original_activity_id"),
      on: a("original_vendor_template_id"),
      nn: a("once_on_load"),
      Jk: a("once_per_event"),
      ej: a("once_per_load"),
      sn: a("priority_override"),
      tn: a("respected_consent_types"),
      lj: a("setup_tags"),
      oe: a("tag_id"),
      rj: a("teardown_tags"),
    };
  })();
  var We;
  var Xe = [],
    Ye = [],
    Ze = [],
    $e = [],
    af = [],
    bf = {},
    cf,
    df,
    ef = function (a) {
      df = df || a;
    },
    ff = function (a) {},
    gf,
    hf = [],
    jf = [],
    kf = function (a, b) {
      var c = {};
      c[ye.ra] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    lf = function (a, b) {
      var c = a[ye.ra],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = bf[c],
        f =
          b &&
          2 === b.type &&
          d.reportMacroDiscrepancy &&
          e &&
          -1 !== hf.indexOf(c),
        g = {},
        h = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          0 === m.indexOf("vtp_") &&
          (e && (g[m] = a[m]), !e || f) &&
          (h[m.substr(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (null == q) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = Xe[q];
                  break;
                case 1:
                  r = $e[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var t = r && r[ye.Ng];
              n = t ? String(t) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var u, v, w;
      if (f && -1 === jf.indexOf(c)) {
        jf.push(c);
        var x = zb();
        u = e(g);
        var y = zb() - x,
          B = zb();
        v = We(c, h, b);
        w = y - (zb() - B);
      } else if ((e && (u = e(g)), !e || f)) v = We(c, h, b);
      f &&
        d &&
        (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        Wa(u)
          ? (Array.isArray(u)
              ? Array.isArray(v)
              : Va(u)
              ? Va(v)
              : "function" === typeof u
              ? "function" === typeof v
              : u === v) || d.reportMacroDiscrepancy(d.id, c)
          : u !== v && d.reportMacroDiscrepancy(d.id, c),
        void 0 != w && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? u : v;
    },
    nf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = mf(a[e], b, c));
      return d;
    },
    mf = function (a, b, c) {
      if (Array.isArray(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(mf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = Xe[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var h = String(g[ye.Ng]);
            try {
              var m = nf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = lf(m, { event: b, index: f, type: 2, name: h });
              gf && (d = gf.al(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), h), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[mf(a[n], b, c)] = mf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = mf(a[q], b, c);
              df && (p = p || df.Ql(r));
              d.push(r);
            }
            return df && p ? df.fl(d) : d.join("");
          case "escape":
            d = mf(a[1], b, c);
            if (df && Array.isArray(a[1]) && "macro" === a[1][0] && df.Rl(a))
              return df.lm(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) ze[a[t]] && (d = ze[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!$e[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return { Bj: a[2], index: u };
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v[ye.ra] = a[1];
            var w = of(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    of = function (a, b, c) {
      try {
        return cf(nf(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    pf = function (a) {
      var b = a[ye.ra];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!bf[b];
    };
  var qf = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.m = a;
    this.name = "PermissionError";
  };
  ya(qf, Error);
  function rf(a, b) {
    if (Array.isArray(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) rf(a[c], b[c]);
    }
  }
  var sf = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.gm = a;
    this.F = b;
    this.m = [];
  };
  ya(sf, Error);
  var uf = function () {
    return function (a, b) {
      a instanceof sf || (a = new sf(a, tf));
      b && a.m.push(b);
      throw a;
    };
  };
  function tf(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; 0 < b; b--) ob(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var xf = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = vf(a), f = 0; f < Ye.length; f++) {
        var g = Ye[f],
          h = wf(g, e);
        if (h) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === h && b(g.block || []);
      }
      for (var p = [], q = 0; q < $e.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    wf = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    vf = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = of(Ze[c], a));
        return b[c];
      };
    };
  var yf = {
    al: function (a, b) {
      b[ye.Yh] &&
        "string" === typeof a &&
        (a = 1 == b[ye.Yh] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(ye.ai) && null === a && (a = b[ye.ai]);
      b.hasOwnProperty(ye.di) && void 0 === a && (a = b[ye.di]);
      b.hasOwnProperty(ye.bi) && !0 === a && (a = b[ye.bi]);
      b.hasOwnProperty(ye.Zh) && !1 === a && (a = b[ye.Zh]);
      return a;
    },
  };
  var zf = function () {
      this.m = {};
    },
    Bf = function (a, b) {
      var c = Af.F,
        d;
      null != (d = c.m)[a] || (d[a] = []);
      c.m[a].push(function () {
        return b.apply(null, oa(za.apply(0, arguments)));
      });
    };
  function Cf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (h) {
          g =
            "string" === typeof h
              ? g + (": " + h)
              : h instanceof Error
              ? g + (": " + h.message)
              : g + ".";
        }
        if (!f) throw new qf(c, d, g);
      }
  }
  function Df(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.m[d],
          f = a.m.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Cf(e, b, d, g);
          Cf(f, b, d, g);
        }
      }
    };
  }
  var Hf = function () {
      var a = data.permissions || {},
        b = Ef.ctid,
        c = this;
      this.F = new zf();
      this.m = {};
      var d = {},
        e = {},
        f = Df(this.F, b, function () {
          var g = arguments[0];
          return g && d[g]
            ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      z(a, function (g, h) {
        var m = {};
        z(h, function (p, q) {
          var r = Ff(p, q);
          m[p] = r.assert;
          d[p] || (d[p] = r.O);
          r.vj && !e[p] && (e[p] = r.vj);
        });
        var n = function (p) {
          var q = za.apply(1, arguments);
          if (!m[p])
            throw Gf(
              p,
              {},
              "The requested additional permission " + p + " is not configured."
            );
          f.apply(null, [p].concat(oa(q)));
        };
        c.m[g] = function (p, q) {
          var r = m[p];
          if (!r)
            throw Gf(
              p,
              {},
              "The requested permission " + p + " is not configured."
            );
          var t = Array.prototype.slice.call(arguments, 0);
          r.apply(void 0, t);
          f.apply(void 0, t);
          var u = e[p];
          u && u.apply(null, [n].concat(oa(t.slice(1))));
        };
      });
    },
    If = function (a) {
      return Af.m[a] || function () {};
    };
  function Ff(a, b) {
    var c = kf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Gf;
    try {
      return lf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new qf(e, {}, "Permission " + e + " is unknown.");
        },
        O: function () {
          throw new qf(a, {}, "Permission " + a + " is unknown.");
        },
      };
    }
  }
  function Gf(a, b, c) {
    return new qf(a, b, c);
  }
  var Jf = !1;
  var Kf = {};
  Kf.Pm = vb("");
  Kf.kl = vb("");
  var Lf = Jf,
    Mf = Kf.kl,
    Nf = Kf.Pm;
  var Vf = {},
    Wf =
      ((Vf.uaa = !0),
      (Vf.uab = !0),
      (Vf.uafvl = !0),
      (Vf.uamb = !0),
      (Vf.uam = !0),
      (Vf.uap = !0),
      (Vf.uapv = !0),
      (Vf.uaw = !0),
      Vf);
  var cg = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function dg(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var eg = new rb();
  function fg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = eg.get(e);
      f || ((f = new RegExp(b, d)), eg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function gg(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  function hg(a, b) {
    return String(a) === String(b);
  }
  function ig(a, b) {
    return Number(a) >= Number(b);
  }
  function jg(a, b) {
    return Number(a) <= Number(b);
  }
  function kg(a, b) {
    return Number(a) > Number(b);
  }
  function lg(a, b) {
    return Number(a) < Number(b);
  }
  function mg(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  var tg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function ug(a, b) {
    for (var c = "", d = !0; 7 < a; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = we(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = we(a | b) + c);
  }
  var vg =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    wg = { Fn: "function", PixieMap: "Object", List: "Array" },
    K = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = vg.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          h = e[3],
          m = c[d];
        if (null == m) {
          if (g)
            throw Error(
              "Error in " + a + ". Required argument " + f + " not supplied."
            );
        } else if ("*" !== h) {
          var n = typeof m;
          m instanceof Qc
            ? (n = "Fn")
            : m instanceof Ya
            ? (n = "List")
            : m instanceof ab
            ? (n = "PixieMap")
            : m instanceof Vc && (n = "OpaqueValue");
          if (n != h)
            throw Error(
              "Error in " +
                a +
                ". Argument " +
                f +
                " has type " +
                (wg[n] || n) +
                ", which does not match required type " +
                (wg[h] || h) +
                "."
            );
        }
      }
    };
  function xg(a) {
    return "" + a;
  }
  function yg(a, b) {
    var c = [];
    return c;
  }
  var zg = function (a, b) {
      var c = new Qc(a, function () {
        for (
          var d = Array.prototype.slice.call(arguments, 0), e = 0;
          e < d.length;
          e++
        )
          d[e] = this.evaluate(d[e]);
        try {
          return b.apply(this, d);
        } catch (g) {
          if ($c()) throw new bd(g.message);
          throw g;
        }
      });
      c.Kb();
      return c;
    },
    Ag = function (a, b) {
      var c = new ab(),
        d;
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          nb(e)
            ? c.set(d, zg(a + "_" + d, e))
            : Va(e)
            ? c.set(d, Ag(a + "_" + d, e))
            : (ob(e) || l(e) || "boolean" === typeof e) && c.set(d, e);
        }
      c.Kb();
      return c;
    };
  var Bg = function (a, b) {
    K(this.getName(), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new ab();
    return (d = Ag("AssertApiSubject", c));
  };
  var Cg = function (a, b) {
    K(this.getName(), ["actual:?*", "message:?string"], arguments);
    if (a instanceof Xc)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new ab();
    return (d = Ag("AssertThatSubject", c));
  };
  function Dg(a) {
    return function () {
      for (var b = [], c = this.J, d = 0; d < arguments.length; ++d)
        b.push(J(arguments[d], c));
      return Zc(a.apply(null, b));
    };
  }
  var Fg = function () {
    for (var a = Math, b = Eg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Dg(a[e].bind(a)));
    }
    return c;
  };
  var Gg = function (a) {
    var b;
    return b;
  };
  var Hg = function (a) {
    var b;
    return b;
  };
  var Ig = function (a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  };
  var Jg = function (a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  };
  function Kg(a, b) {
    var c = !1;
    return c;
  }
  Kg.K = "internal.evaluateBooleanExpression";
  var Pg = function (a) {
    K(this.getName(), ["message:?string"], arguments);
  };
  var Qg = function (a, b) {
    K(this.getName(), ["min:!number", "max:!number"], arguments);
    return qb(a, b);
  };
  var Rg = function () {
    return new Date().getTime();
  };
  var Sg = function (a) {
    if (null === a) return "null";
    if (a instanceof Ya) return "array";
    if (a instanceof Qc) return "function";
    if (a instanceof Vc) {
      a = a.getValue();
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var Tg = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Lf || Nf) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return Zc(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(J(c));
      }),
    };
  };
  var Ug = function (a) {
    return ub(J(a, this.J));
  };
  var Vg = function (a) {
    return Number(J(a, this.J));
  };
  var Wg = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var Xg = function (a, b, c) {
    var d = null,
      e = !1;
    K(
      this.getName(),
      ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"],
      arguments
    );
    d = new ab();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof ab &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  };
  var Eg = "floor ceil round max min abs pow sqrt".split(" ");
  var Yg = function () {
      var a = {};
      return {
        xl: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        Gm: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    Zg = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return Qc.prototype.invoke.apply(a, c);
      };
    },
    $g = function (a, b) {
      K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
    };
  var ah = {};
  var bh = function (a) {
    var b = new ab();
    if (a instanceof Ya)
      for (var c = a.Zb(), d = 0; d < c.length(); d++) {
        var e = c.get(d);
        a.has(e) && b.set(e, a.get(e));
      }
    else if (a instanceof Qc)
      for (var f = Ra(a, 1), g = 0; g < f.length; g++) {
        var h = f[g];
        b.set(h, a.get(h));
      }
    else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b;
  };
  ah.keys = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Ya || a instanceof Qc || "string" === typeof a) a = bh(a);
    if (a instanceof ab) return a.Zb();
    return new Ya();
  };
  ah.values = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Ya || a instanceof Qc || "string" === typeof a) a = bh(a);
    if (a instanceof ab) return new Ya(Ra(a, 2));
    return new Ya();
  };
  ah.entries = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Ya || a instanceof Qc || "string" === typeof a) a = bh(a);
    if (a instanceof ab) {
      for (var b = Ra(a, 3), c = new Ya(), d = 0; d < b.length; d++) {
        var e = new Ya(b[d]);
        c.push(e);
      }
      return c;
    }
    return new Ya();
  };
  ah.freeze = function (a) {
    (a instanceof ab || a instanceof Ya || a instanceof Qc) && a.Kb();
    return a;
  };
  ah.delete = function (a, b) {
    if (a instanceof ab && !a.F) return a.xf(b), !0;
    return !1;
  };
  var L = function (a, b, c) {
    var d = a.J.m;
    if (!d) throw Error("Missing program state.");
    if (d.wm) {
      try {
        d.wj.apply(null, Array.prototype.slice.call(arguments, 1));
      } catch (e) {
        throw (ib("TAGGING", 21), e);
      }
      return;
    }
    d.wj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var ch = function () {
    this.m = {};
    this.F = {};
  };
  ch.prototype.get = function (a, b) {
    var c = this.m.hasOwnProperty(a) ? this.m[a] : void 0;
    return c;
  };
  ch.prototype.add = function (a, b, c) {
    if (this.m.hasOwnProperty(a))
      throw "Attempting to add a function which already exists: " + a + ".";
    if (this.F.hasOwnProperty(a))
      throw (
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.m[a] = c ? void 0 : nb(b) ? zg(a, b) : Ag(a, b);
  };
  function dh(a, b) {
    var c = void 0;
    return c;
  }
  function eh() {
    var a = {};
    return a;
  }
  function fh(a) {
    return jh ? H.querySelectorAll(a) : null;
  }
  function kh(a, b) {
    if (!jh) return null;
    if (Element.prototype.closest)
      try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
    var c =
        Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector,
      d = a;
    if (!H.documentElement.contains(d)) return null;
    do {
      try {
        if (c.call(d, b)) return d;
      } catch (e) {
        break;
      }
      d = d.parentElement || d.parentNode;
    } while (null !== d && 1 === d.nodeType);
    return null;
  }
  var lh = !1;
  if (H.querySelectorAll)
    try {
      var mh = H.querySelectorAll(":root");
      mh && 1 == mh.length && mh[0] == H.documentElement && (lh = !0);
    } catch (a) {}
  var jh = lh;
  function P(a) {
    ib("GTM", a);
  }
  var Q = {
      g: {
        Aa: "ad_personalization",
        R: "ad_storage",
        P: "ad_user_data",
        W: "analytics_storage",
        jc: "region",
        kc: "consent_updated",
        Se: "wait_for_update",
        ei: "app_remove",
        fi: "app_store_refund",
        gi: "app_store_subscription_cancel",
        hi: "app_store_subscription_convert",
        ii: "app_store_subscription_renew",
        hk: "consent_update",
        Wf: "add_payment_info",
        Xf: "add_shipping_info",
        mc: "add_to_cart",
        nc: "remove_from_cart",
        Yf: "view_cart",
        Ob: "begin_checkout",
        oc: "select_item",
        fb: "view_item_list",
        Bb: "select_promotion",
        hb: "view_promotion",
        Ka: "purchase",
        qc: "refund",
        Na: "view_item",
        Zf: "add_to_wishlist",
        ik: "exception",
        ji: "first_open",
        ki: "first_visit",
        fa: "gtag.config",
        Qa: "gtag.get",
        li: "in_app_purchase",
        Pb: "page_view",
        jk: "screen_view",
        mi: "session_start",
        kk: "timing_complete",
        lk: "track_social",
        Oc: "user_engagement",
        ib: "gclgb",
        Ra: "gclid",
        ja: "ads_data_redaction",
        ni: "gad_source",
        Hd: "gclid_url",
        oi: "gclsrc",
        cg: "gbraid",
        Te: "wbraid",
        oa: "allow_ad_personalization_signals",
        Ue: "allow_custom_scripts",
        Ve: "allow_display_features",
        Id: "allow_enhanced_conversions",
        jb: "allow_google_signals",
        Ea: "allow_interest_groups",
        mk: "app_id",
        nk: "app_installer_id",
        pk: "app_name",
        qk: "app_version",
        Cb: "auid",
        ri: "auto_detection_enabled",
        Qb: "aw_remarketing",
        We: "aw_remarketing_only",
        Jd: "discount",
        Kd: "aw_feed_country",
        Ld: "aw_feed_language",
        ia: "items",
        Md: "aw_merchant_id",
        dg: "aw_basket_type",
        Pc: "campaign_content",
        Qc: "campaign_id",
        Rc: "campaign_medium",
        Sc: "campaign_name",
        Tc: "campaign",
        Uc: "campaign_source",
        Vc: "campaign_term",
        kb: "client_id",
        si: "rnd",
        ui: "consent_update_type",
        vi: "content_group",
        wi: "content_type",
        Xa: "conversion_cookie_prefix",
        Wc: "conversion_id",
        wa: "conversion_linker",
        xi: "conversion_linker_disabled",
        Rb: "conversion_api",
        Xe: "cookie_deprecation",
        Sa: "cookie_domain",
        Ta: "cookie_expires",
        Ya: "cookie_flags",
        sc: "cookie_name",
        Sb: "cookie_path",
        Oa: "cookie_prefix",
        uc: "cookie_update",
        vc: "country",
        Ba: "currency",
        Nd: "customer_lifetime_value",
        Xc: "custom_map",
        eg: "gcldc",
        Od: "dclid",
        yi: "debug_mode",
        la: "developer_id",
        zi: "disable_merchant_reported_purchases",
        Yc: "dc_custom_params",
        Ai: "dc_natural_search",
        fg: "dynamic_event_settings",
        gg: "affiliation",
        Pd: "checkout_option",
        Ye: "checkout_step",
        hg: "coupon",
        Zc: "item_list_name",
        Ze: "list_name",
        Bi: "promotions",
        bd: "shipping",
        af: "tax",
        Qd: "engagement_time_msec",
        Rd: "enhanced_client_id",
        Sd: "enhanced_conversions",
        ig: "enhanced_conversions_automatic_settings",
        Td: "estimated_delivery_date",
        bf: "euid_logged_in_state",
        dd: "event_callback",
        rk: "event_category",
        nb: "event_developer_id_string",
        sk: "event_label",
        ed: "event",
        Ud: "event_settings",
        Vd: "event_timeout",
        tk: "description",
        uk: "fatal",
        Ci: "experiments",
        cf: "firebase_id",
        wc: "first_party_collection",
        Wd: "_x_20",
        ob: "_x_19",
        Di: "fledge_drop_reason",
        jg: "fledge",
        kg: "flight_error_code",
        lg: "flight_error_message",
        Ei: "fl_activity_category",
        Fi: "fl_activity_group",
        mg: "fl_advertiser_id",
        Gi: "fl_ar_dedupe",
        ng: "match_id",
        Hi: "fl_random_number",
        Ii: "tran",
        Ji: "u",
        Xd: "gac_gclid",
        xc: "gac_wbraid",
        og: "gac_wbraid_multiple_conversions",
        pg: "ga_restrict_domain",
        df: "ga_temp_client_id",
        yc: "gdpr_applies",
        qg: "geo_granularity",
        Db: "value_callback",
        pb: "value_key",
        vk: "google_ng",
        wk: "google_ono",
        Tb: "google_signals",
        rg: "google_tld",
        Yd: "groups",
        sg: "gsa_experiment_id",
        Ki: "gtm_up",
        Eb: "iframe_state",
        fd: "ignore_referrer",
        ef: "internal_traffic_results",
        Ub: "is_legacy_converted",
        Fb: "is_legacy_loaded",
        Zd: "is_passthrough",
        gd: "_lps",
        Pa: "language",
        ae: "legacy_developer_id_string",
        xa: "linker",
        zc: "accept_incoming",
        rb: "decorate_forms",
        Z: "domains",
        Gb: "url_position",
        ug: "method",
        xk: "name",
        hd: "new_customer",
        vg: "non_interaction",
        Li: "optimize_id",
        Mi: "page_hostname",
        jd: "page_path",
        Fa: "page_referrer",
        Hb: "page_title",
        wg: "passengers",
        xg: "phone_conversion_callback",
        Ni: "phone_conversion_country_code",
        yg: "phone_conversion_css_class",
        Oi: "phone_conversion_ids",
        zg: "phone_conversion_number",
        Ag: "phone_conversion_options",
        Bg: "_protected_audience_enabled",
        kd: "quantity",
        be: "redact_device_info",
        ff: "referral_exclusion_definition",
        Vb: "restricted_data_processing",
        Pi: "retoken",
        yk: "sample_rate",
        hf: "screen_name",
        Ib: "screen_resolution",
        Qi: "search_term",
        La: "send_page_view",
        Wb: "send_to",
        ld: "server_container_url",
        md: "session_duration",
        ce: "session_engaged",
        jf: "session_engaged_time",
        sb: "session_id",
        de: "session_number",
        Cg: "_shared_user_id",
        nd: "delivery_postal_code",
        zk: "temporary_client_id",
        kf: "topmost_url",
        Ri: "tracking_id",
        lf: "traffic_type",
        Ca: "transaction_id",
        Jb: "transport_url",
        Dg: "trip_type",
        Xb: "update",
        Ua: "url_passthrough",
        nf: "_user_agent_architecture",
        pf: "_user_agent_bitness",
        qf: "_user_agent_full_version_list",
        rf: "_user_agent_mobile",
        tf: "_user_agent_model",
        uf: "_user_agent_platform",
        vf: "_user_agent_platform_version",
        wf: "_user_agent_wow64",
        Ga: "user_data",
        Eg: "user_data_auto_latency",
        Fg: "user_data_auto_meta",
        Gg: "user_data_auto_multi",
        Hg: "user_data_auto_selectors",
        Ig: "user_data_auto_status",
        od: "user_data_mode",
        ee: "user_data_settings",
        Da: "user_id",
        Za: "user_properties",
        Si: "_user_region",
        fe: "us_privacy_string",
        qa: "value",
        Jg: "wbraid_multiple_conversions",
        Yi: "_host_name",
        Zi: "_in_page_command",
        aj: "_is_passthrough_cid",
        Lb: "non_personalized_ads",
        ne: "_sst_parameters",
        lb: "conversion_label",
        ya: "page_location",
        qb: "global_developer_id_string",
        Ac: "tc_privacy_string",
      },
    },
    Nh = {},
    Oh = Object.freeze(
      ((Nh[Q.g.oa] = 1),
      (Nh[Q.g.Ve] = 1),
      (Nh[Q.g.Id] = 1),
      (Nh[Q.g.jb] = 1),
      (Nh[Q.g.ia] = 1),
      (Nh[Q.g.Sa] = 1),
      (Nh[Q.g.Ta] = 1),
      (Nh[Q.g.Ya] = 1),
      (Nh[Q.g.sc] = 1),
      (Nh[Q.g.Sb] = 1),
      (Nh[Q.g.Oa] = 1),
      (Nh[Q.g.uc] = 1),
      (Nh[Q.g.Xc] = 1),
      (Nh[Q.g.la] = 1),
      (Nh[Q.g.fg] = 1),
      (Nh[Q.g.dd] = 1),
      (Nh[Q.g.Ud] = 1),
      (Nh[Q.g.Vd] = 1),
      (Nh[Q.g.wc] = 1),
      (Nh[Q.g.pg] = 1),
      (Nh[Q.g.Tb] = 1),
      (Nh[Q.g.rg] = 1),
      (Nh[Q.g.Yd] = 1),
      (Nh[Q.g.ef] = 1),
      (Nh[Q.g.Ub] = 1),
      (Nh[Q.g.Fb] = 1),
      (Nh[Q.g.xa] = 1),
      (Nh[Q.g.ff] = 1),
      (Nh[Q.g.Vb] = 1),
      (Nh[Q.g.La] = 1),
      (Nh[Q.g.Wb] = 1),
      (Nh[Q.g.ld] = 1),
      (Nh[Q.g.md] = 1),
      (Nh[Q.g.jf] = 1),
      (Nh[Q.g.nd] = 1),
      (Nh[Q.g.Jb] = 1),
      (Nh[Q.g.Xb] = 1),
      (Nh[Q.g.ee] = 1),
      (Nh[Q.g.Za] = 1),
      (Nh[Q.g.ne] = 1),
      Nh)
    );
  Object.freeze([
    Q.g.ya,
    Q.g.Fa,
    Q.g.Hb,
    Q.g.Pa,
    Q.g.hf,
    Q.g.Da,
    Q.g.cf,
    Q.g.vi,
  ]);
  var Ph = {},
    Qh = Object.freeze(
      ((Ph[Q.g.ei] = 1),
      (Ph[Q.g.fi] = 1),
      (Ph[Q.g.gi] = 1),
      (Ph[Q.g.hi] = 1),
      (Ph[Q.g.ii] = 1),
      (Ph[Q.g.ji] = 1),
      (Ph[Q.g.ki] = 1),
      (Ph[Q.g.li] = 1),
      (Ph[Q.g.mi] = 1),
      (Ph[Q.g.Oc] = 1),
      Ph)
    ),
    Rh = {},
    Sh = Object.freeze(
      ((Rh[Q.g.Wf] = 1),
      (Rh[Q.g.Xf] = 1),
      (Rh[Q.g.mc] = 1),
      (Rh[Q.g.nc] = 1),
      (Rh[Q.g.Yf] = 1),
      (Rh[Q.g.Ob] = 1),
      (Rh[Q.g.oc] = 1),
      (Rh[Q.g.fb] = 1),
      (Rh[Q.g.Bb] = 1),
      (Rh[Q.g.hb] = 1),
      (Rh[Q.g.Ka] = 1),
      (Rh[Q.g.qc] = 1),
      (Rh[Q.g.Na] = 1),
      (Rh[Q.g.Zf] = 1),
      Rh)
    ),
    Th = Object.freeze([
      Q.g.oa,
      Q.g.jb,
      Q.g.uc,
      Q.g.wc,
      Q.g.fd,
      Q.g.La,
      Q.g.Xb,
    ]),
    Uh = Object.freeze([].concat(oa(Th))),
    Vh = Object.freeze([Q.g.Ta, Q.g.Vd, Q.g.md, Q.g.jf, Q.g.Qd]),
    Wh = Object.freeze([].concat(oa(Vh))),
    Xh = {},
    Yh =
      ((Xh[Q.g.R] = "1"),
      (Xh[Q.g.W] = "2"),
      (Xh[Q.g.P] = "3"),
      (Xh[Q.g.Aa] = "4"),
      Xh),
    Zh = {},
    $h = Object.freeze(
      ((Zh[Q.g.oa] = 1),
      (Zh[Q.g.Id] = 1),
      (Zh[Q.g.Ea] = 1),
      (Zh[Q.g.Qb] = 1),
      (Zh[Q.g.We] = 1),
      (Zh[Q.g.Jd] = 1),
      (Zh[Q.g.Kd] = 1),
      (Zh[Q.g.Ld] = 1),
      (Zh[Q.g.ia] = 1),
      (Zh[Q.g.Md] = 1),
      (Zh[Q.g.Xa] = 1),
      (Zh[Q.g.wa] = 1),
      (Zh[Q.g.Sa] = 1),
      (Zh[Q.g.Ta] = 1),
      (Zh[Q.g.Ya] = 1),
      (Zh[Q.g.Oa] = 1),
      (Zh[Q.g.Ba] = 1),
      (Zh[Q.g.Nd] = 1),
      (Zh[Q.g.la] = 1),
      (Zh[Q.g.zi] = 1),
      (Zh[Q.g.Sd] = 1),
      (Zh[Q.g.Td] = 1),
      (Zh[Q.g.cf] = 1),
      (Zh[Q.g.wc] = 1),
      (Zh[Q.g.Ub] = 1),
      (Zh[Q.g.Fb] = 1),
      (Zh[Q.g.Pa] = 1),
      (Zh[Q.g.hd] = 1),
      (Zh[Q.g.ya] = 1),
      (Zh[Q.g.Fa] = 1),
      (Zh[Q.g.xg] = 1),
      (Zh[Q.g.yg] = 1),
      (Zh[Q.g.zg] = 1),
      (Zh[Q.g.Ag] = 1),
      (Zh[Q.g.Vb] = 1),
      (Zh[Q.g.La] = 1),
      (Zh[Q.g.Wb] = 1),
      (Zh[Q.g.ld] = 1),
      (Zh[Q.g.nd] = 1),
      (Zh[Q.g.Ca] = 1),
      (Zh[Q.g.Jb] = 1),
      (Zh[Q.g.Xb] = 1),
      (Zh[Q.g.Ua] = 1),
      (Zh[Q.g.Ga] = 1),
      (Zh[Q.g.Da] = 1),
      (Zh[Q.g.qa] = 1),
      Zh)
    ),
    ai = {},
    bi = Object.freeze(
      ((ai.search = "s"),
      (ai.youtube = "y"),
      (ai.playstore = "p"),
      (ai.shopping = "h"),
      (ai.ads = "a"),
      (ai.maps = "m"),
      ai)
    );
  Object.freeze(Q.g);
  var ci = {},
    di = (G.google_tag_manager = G.google_tag_manager || {});
  ci.Og = "44t0";
  ci.me = Number("0") || 0;
  ci.Wa = "dataLayer";
  ci.Um =
    "ChEI8K3CsQYQ6Pajso6++oLVARIlAFEK4bNaIUX7avdvcpz33Ajhw+L/ZyrO1BH1ECn88CyGhSiXxxoCZ6k\x3d";
  var ei = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    fi = { __paused: 1, __tg: 1 },
    gi;
  for (gi in ei) ei.hasOwnProperty(gi) && (fi[gi] = 1);
  var hi = vb(""),
    ii,
    ji = !1;
  ii = ji;
  var ki,
    li = !1;
  ki = li;
  var mi,
    ni = !1;
  mi = ni;
  ci.Gd = "www.googletagmanager.com";
  var oi = "" + ci.Gd + (ii ? "/gtag/js" : "/gtm.js"),
    pi = null,
    qi = null,
    ri = {},
    si = {},
    ti = function () {
      var a = di.sequence || 1;
      di.sequence = a + 1;
      return a;
    };
  ci.ek = "";
  var ui = "";
  ci.Cf = ui;
  var vi = new (function () {
      this.m = "";
      this.M = this.F = !1;
      this.Va = this.T = this.ba = this.H = "";
    })(),
    wi = function () {
      var a = vi.H.length;
      return "/" === vi.H[a - 1] ? vi.H.substring(0, a - 1) : vi.H;
    };
  function xi(a) {
    for (var b = {}, c = ma(a.split("|")), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var yi = new rb(),
    zi = {},
    Ai = {},
    Di = {
      name: ci.Wa,
      set: function (a, b) {
        k(Gb(a, b), zi);
        Bi();
      },
      get: function (a) {
        return Ci(a, 2);
      },
      reset: function () {
        yi = new rb();
        zi = {};
        Bi();
      },
    },
    Ci = function (a, b) {
      return 2 != b ? yi.get(a) : Ei(a);
    },
    Ei = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = zi, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Fi = function (a, b) {
      Ai.hasOwnProperty(a) || (yi.set(a, b), k(Gb(a, b), zi), Bi());
    },
    Gi = function () {
      for (
        var a = [
            "gtm.allowlist",
            "gtm.blocklist",
            "gtm.whitelist",
            "gtm.blacklist",
            "tagTypeBlacklist",
          ],
          b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b],
          d = Ci(c, 1);
        if (Array.isArray(d) || Va(d)) d = k(d);
        Ai[c] = d;
      }
    },
    Bi = function (a) {
      z(Ai, function (b, c) {
        yi.set(b, c);
        k(Gb(b), zi);
        k(Gb(b, c), zi);
        a && delete Ai[b];
      });
    },
    Hi = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Ei(a) : yi.get(a);
      "array" === Ta(d) || "object" === Ta(d) ? (c = k(d)) : (c = d);
      return c;
    };
  function Li(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Mi = [],
    Ni = {};
  function Oi(a) {
    return void 0 === Mi[a] ? !1 : Mi[a];
  }
  var Pi = [];
  function Qi(a) {
    switch (a) {
      case 0:
        return 0;
      case 29:
        return 9;
      case 37:
        return 1;
      case 38:
        return 2;
      case 44:
        return 3;
      case 54:
        return 6;
      case 66:
        return 4;
      case 77:
        return 5;
      case 86:
        return 7;
      case 89:
        return 8;
    }
  }
  function S(a) {
    Pi[a] = !0;
    var b = Qi(a);
    void 0 !== b && (Mi[b] = !0);
  }
  S(24);
  S(20);
  S(21);
  S(22);
  S(23);
  S(39);
  S(42);
  S(56);
  S(28);
  S(13);
  S(85);
  S(12);
  S(93);
  S(84);
  S(45);
  S(68);
  S(35);
  S(7);
  S(4);
  S(60);
  S(10);
  S(81);
  S(51);
  S(52);
  S(53);
  S(48);
  S(75);
  S(91);
  S(90);
  S(65);
  S(96);
  S(94);
  S(66);
  S(5);

  S(70);
  Ni[1] = Li("1", 6e4);
  Ni[3] = Li("10", 1);
  Ni[2] = Li("", 50);
  S(76);
  S(88);
  function Ri(a, b) {
    for (var c = void 0, d = void 0, e = 0; c === d; )
      if (
        ((c = Math.floor(2 * Math.random())),
        (d = Math.floor(2 * Math.random())),
        e++,
        20 < e)
      )
        return;
    c ? S(a) : S(b);
  }
  function T(a) {
    return !!Pi[a];
  }
  function Si(a) {
    ib("HEALTH", a);
  }
  var Ti;
  try {
    Ti = JSON.parse(
      gb(
        "eyIwIjoiUlUiLCIxIjoiIiwiMiI6ZmFsc2UsIjMiOiJnb29nbGUucnUiLCI0IjoiIiwiNSI6dHJ1ZSwiNiI6ZmFsc2UsIjciOiJhZF9zdG9yYWdlfGFuYWx5dGljc19zdG9yYWdlfGFkX3VzZXJfZGF0YXxhZF9wZXJzb25hbGl6YXRpb24ifQ"
      )
    );
  } catch (a) {
    P(123), Si(2), (Ti = {});
  }
  function Ui() {
    return Ti["0"] || "";
  }
  function Vi() {
    var a = !1;
    return a;
  }
  function Wi() {
    return !1 !== Ti["6"];
  }
  function Xi() {
    var a = "";
    return a;
  }
  function Yi() {
    var a = !1;
    return a;
  }
  function Zi() {
    var a = "";
    return a;
  }
  var $i = /:[0-9]+$/,
    aj = /^\d+\.fls\.doubleclick\.net$/,
    bj = function (a, b, c, d) {
      for (
        var e = [], f = ma(a.split("&")), g = f.next();
        !g.done;
        g = f.next()
      ) {
        var h = ma(g.value.split("=")),
          m = h.next().value,
          n = na(h);
        if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
          var p = n.join("=");
          if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
          e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
        }
      }
      return c ? e : void 0;
    },
    ej = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = cj(a.protocol) || cj(G.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : G.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || G.location.hostname)
            .replace($i, "")
            .toLowerCase());
      return dj(a, b, c, d, e);
    },
    dj = function (a, b, c, d, e) {
      var f,
        g = cj(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = fj(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace($i, "").toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || ib("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = bj(f, e, !1));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    cj = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    fj = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    gj = {},
    hj = 0,
    ij = function (a) {
      var b = gj[a];
      if (!b) {
        var c = H.createElement("a");
        a && (c.href = a);
        var d = c.pathname;
        "/" !== d[0] && (a || ib("TAGGING", 1), (d = "/" + d));
        var e = c.hostname.replace($i, "");
        b = {
          href: c.href,
          protocol: c.protocol,
          host: c.host,
          hostname: e,
          pathname: d,
          search: c.search,
          hash: c.hash,
          port: c.port,
        };
        5 > hj && ((gj[a] = b), hj++);
      }
      return b;
    },
    jj = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = ij(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      "" !== g && (g = "?" + g);
      "" !== h && (h = "#" + h);
      var m = "" + f + g + h;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    kj = function (a) {
      var b = ij(G.location.href),
        c = ej(b, "host", !1);
      if (c && c.match(aj)) {
        var d = ej(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  var lj = {
    "https://www.google.com": "/g",
    "https://www.googleadservices.com": "/as",
    "https://pagead2.googlesyndication.com": "/gs",
  };
  function mj(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return ij("" + c + b).href;
    }
  }
  function nj() {
    return vi.F || ki;
  }
  function oj() {
    return !!ci.Cf && "SGTM_TOKEN" !== ci.Cf.split("@@").join("");
  }
  function pj(a) {
    for (var b = ma([Q.g.ld, Q.g.Jb]), c = b.next(); !c.done; c = b.next()) {
      var d = V(a, c.value);
      if (d) return d;
    }
  }
  function qj(a, b) {
    return vi.F ? "" + wi() + (b ? lj[a] || "" : "") : a;
  }
  function rj(a) {
    var b = String(a[ye.ra] || "").replace(/_/g, "");
    0 === b.indexOf("cvt") && (b = "cvt");
    return b;
  }
  var sj =
    0 <= G.location.search.indexOf("?gtm_latency=") ||
    0 <= G.location.search.indexOf("&gtm_latency=");
  var uj = function (a, b) {
      var c = tj();
      c.pending || (c.pending = []);
      pb(c.pending, function (d) {
        return (
          d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        );
      }) || c.pending.push({ target: a, onLoad: b });
    },
    vj = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    tj = function () {
      var a = oc("google_tag_data", {}),
        b = a.tidr;
      b || ((b = new vj()), (a.tidr = b));
      return b;
    };
  var wj = {},
    xj = !1,
    Ef = {
      ctid: "GTM-5STMC545",
      canonicalContainerId: "138505558",
      Jj: "GTM-5STMC545",
      Kj: "GTM-5STMC545",
    };
  wj.ie = vb("");
  var Aj = function () {
      var a = yj();
      return xj ? a.map(zj) : a;
    },
    Cj = function () {
      var a = Bj();
      return xj ? a.map(zj) : a;
    },
    Jj = function () {
      return Dj(Ef.ctid);
    },
    Kj = function () {
      return Dj(Ef.canonicalContainerId || "_" + Ef.ctid);
    },
    yj = function () {
      return Ef.Jj ? Ef.Jj.split("|") : [Ef.ctid];
    },
    Bj = function () {
      return Ef.Kj ? Ef.Kj.split("|") : [];
    },
    Nj = function () {
      var a = Lj(Mj());
      if (a) {
        for (; a.parent; ) {
          var b = Lj(a.parent);
          if (!b) break;
          a = b;
        }
        return a;
      }
    },
    Lj = function (a) {
      var b = tj();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    Dj = function (a) {
      return xj ? zj(a) : a;
    },
    zj = function (a) {
      return "siloed_" + a;
    },
    Pj = function (a) {
      return xj ? Oj(a) : a;
    };
  function Oj(a) {
    a = String(a);
    return 0 === a.indexOf("siloed_") ? a.substring(7) : a;
  }
  var Qj = function () {
    var a = !1;
    if (a) {
      var b = tj();
      if (b.siloed) {
        for (
          var c = [], d = yj().map(zj), e = Bj().map(zj), f = {}, g = 0;
          g < b.siloed.length;
          f = { Hf: void 0 }, g++
        )
          (f.Hf = b.siloed[g]),
            !xj &&
            pb(
              f.Hf.isDestination ? e : d,
              (function (h) {
                return function (m) {
                  return m === h.Hf.ctid;
                };
              })(f)
            )
              ? (xj = !0)
              : c.push(f.Hf);
        b.siloed = c;
      }
    }
  };
  function Rj() {
    var a = tj();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = Aj(), f = Cj(), g = {}, h = 0;
        h < a.pending.length;
        g = { Le: void 0 }, h++
      )
        (g.Le = a.pending[h]),
          pb(
            g.Le.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.Le.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.Le.onLoad), (d = !0))
            : c.push(g.Le);
      a.pending = c;
      if (b)
        try {
          b(Kj());
        } catch (m) {}
    }
  }
  var Sj = function () {
      for (
        var a = Ef.ctid,
          b = Aj(),
          c = Cj(),
          d = function (n, p) {
            var q = {
              canonicalContainerId: Ef.canonicalContainerId,
              scriptContainerId: a,
              state: 2,
              containers: b.slice(),
              destinations: c.slice(),
            };
            nc && (q.scriptSource = nc);
            var r = p ? e.destination : e.container,
              t = r[n];
            t ? (p && 0 === t.state && P(93), Object.assign(t, q)) : (r[n] = q);
          },
          e = tj(),
          f = ma(b),
          g = f.next();
        !g.done;
        g = f.next()
      )
        d(g.value, !1);
      for (var h = ma(c), m = h.next(); !m.done; m = h.next()) d(m.value, !0);
      e.canonical[Kj()] = {};
      Rj();
    },
    Tj = function (a) {
      return !!tj().container[a];
    },
    Uj = function (a) {
      var b = tj().destination[a];
      return !!b && !!b.state;
    },
    Mj = function () {
      return { ctid: Jj(), isDestination: wj.ie };
    };
  function Vj(a) {
    var b = tj();
    (b.siloed = b.siloed || []).push(a);
  }
  var Wj = function () {
      var a = tj().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    Xj = function () {
      var a = {};
      z(tj().destination, function (b, c) {
        0 === c.state && (a[Oj(b)] = c);
      });
      return a;
    },
    Yj = function (a) {
      return !!(
        a &&
        a.parent &&
        a.context &&
        1 === a.context.source &&
        0 !== a.parent.ctid.indexOf("GTM-")
      );
    };
  var Zj = { sampleRate: "0.005000", Zj: "", Yj: Number("5"), Nn: Number("") },
    ak = [];
  function bk(a) {
    ak.push(a);
  }
  var ck = !1,
    dk;
  if (!(dk = sj)) {
    var ek = Math.random(),
      fk = Zj.sampleRate;
    dk = ek < Number(fk);
  }
  var gk = dk,
    hk = "/a?id=" + Ef.ctid,
    ik = void 0,
    jk = {},
    kk = void 0,
    lk = new (function () {
      var a = 5;
      0 < Zj.Yj && (a = Zj.Yj);
      this.F = a;
      this.m = 0;
      this.H = [];
    })(),
    mk = 1e3;
  function nk(a, b) {
    var c = ik;
    if (void 0 === c)
      if (b) c = ti();
      else return "";
    for (
      var d = [qj("https://www.googletagmanager.com"), hk],
        e = ma(ak),
        f = e.next();
      !f.done;
      f = e.next()
    )
      for (
        var g = f.value,
          h = g({
            eventId: c,
            Ab: !!a,
            Pf: function () {
              ck = !0;
            },
          }),
          m = ma(h),
          n = m.next();
        !n.done;
        n = m.next()
      ) {
        var p = ma(n.value),
          q = p.next().value,
          r = p.next().value;
        d.push("&" + q + "=" + r);
      }
    d.push("&z=0");
    return d.join("");
  }
  function ok() {
    if (T(26)) {
      var a = nk(!0);
      if (ck) {
        var b = a.replace("/a?", "/td?");
        wc(b);
        ck = !1;
      }
    }
  }
  function pk() {
    kk && (G.clearTimeout(kk), (kk = void 0));
    if (void 0 !== ik && qk) {
      ok();
      var a;
      (a = jk[ik]) || (a = lk.m < lk.F ? !1 : 1e3 > zb() - lk.H[lk.m % lk.F]);
      if (a || 0 >= mk--) P(1), (jk[ik] = !0);
      else {
        var b = lk.m++ % lk.F;
        lk.H[b] = zb();
        var c = nk(!0);
        wc(c);
        if (ck) {
          var d = c.replace("/a?", "/td?");
          wc(d);
        }
        qk = ck = !1;
      }
    }
  }
  var qk = !1;
  function rk(a) {
    jk[a]
      ? ok()
      : (a !== ik && (pk(), (ik = a)),
        (qk = !0),
        kk || (kk = G.setTimeout(pk, 500)),
        2022 <= nk().length && pk());
  }
  var sk = qb();
  function tk() {
    sk = qb();
  }
  function uk() {
    return [
      ["v", "3"],
      ["t", "t"],
      ["pid", sk],
    ];
  }
  var vk = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    wk = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var xk = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  var yk, zk;
  a: {
    for (var Ak = ["CLOSURE_FLAGS"], Bk = Ba, Ck = 0; Ck < Ak.length; Ck++)
      if (((Bk = Bk[Ak[Ck]]), null == Bk)) {
        zk = null;
        break a;
      }
    zk = Bk;
  }
  var Dk = zk && zk[610401301];
  yk = null != Dk ? Dk : !1;
  function Ek() {
    var a = Ba.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var Fk,
    Gk = Ba.navigator;
  Fk = Gk ? Gk.userAgentData || null : null;
  function Hk(a) {
    return yk
      ? Fk
        ? Fk.brands.some(function (b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a);
          })
        : !1
      : !1;
  }
  function Ik(a) {
    return -1 != Ek().indexOf(a);
  }
  function Jk() {
    return yk ? !!Fk && 0 < Fk.brands.length : !1;
  }
  function Kk() {
    return Jk() ? !1 : Ik("Opera");
  }
  function Lk() {
    return Ik("Firefox") || Ik("FxiOS");
  }
  function Mk() {
    return Jk()
      ? Hk("Chromium")
      : ((Ik("Chrome") || Ik("CriOS")) && !(Jk() ? 0 : Ik("Edge"))) ||
          Ik("Silk");
  }
  function Nk() {
    return yk ? !!Fk && !!Fk.platform : !1;
  }
  function Ok() {
    return Ik("iPhone") && !Ik("iPod") && !Ik("iPad");
  }
  function Pk() {
    Ok() || Ik("iPad") || Ik("iPod");
  }
  var Qk = function (a) {
    Qk[" "](a);
    return a;
  };
  Qk[" "] = function () {};
  Kk();
  Jk() || Ik("Trident") || Ik("MSIE");
  Ik("Edge");
  !Ik("Gecko") ||
    (-1 != Ek().toLowerCase().indexOf("webkit") && !Ik("Edge")) ||
    Ik("Trident") ||
    Ik("MSIE") ||
    Ik("Edge");
  -1 != Ek().toLowerCase().indexOf("webkit") && !Ik("Edge") && Ik("Mobile");
  Nk() || Ik("Macintosh");
  Nk() || Ik("Windows");
  (Nk() ? "Linux" === Fk.platform : Ik("Linux")) || Nk() || Ik("CrOS");
  Nk() || Ik("Android");
  Ok();
  Ik("iPad");
  Ik("iPod");
  Pk();
  Ek().toLowerCase().indexOf("kaios");
  var Rk = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var h = a.charCodeAt(e + f);
          if (!h || 61 == h || 38 == h || 35 == h) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Sk = /#|$/,
    Tk = function (a, b) {
      var c = a.search(Sk),
        d = Rk(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    Uk = /[?&]($|#)/,
    Vk = function (a, b, c) {
      for (
        var d, e = a.search(Sk), f = 0, g, h = [];
        0 <= (g = Rk(a, f, b, e));

      )
        h.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      h.push(a.slice(f));
      d = h.join("").replace(Uk, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        0 > r && (r = d.length);
        var t = d.indexOf("?"),
          u;
        0 > t || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var Wk = function (a) {
      try {
        var b;
        if ((b = !!a && null != a.location.href))
          a: {
            try {
              Qk(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Xk = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Yk(a) {
    if (!a || !H.head) return null;
    var b = Zk("META");
    H.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var $k = function (a) {
      if (G.top == G) return 0;
      if (void 0 === a ? 0 : a) {
        var b = G.location.ancestorOrigins;
        if (b) return b[b.length - 1] == G.location.origin ? 1 : 2;
      }
      return Wk(G.top) ? 1 : 2;
    },
    Zk = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  var al = "",
    bl,
    cl = [],
    dl = !1;
  function el() {
    var a = [];
    al && a.push(["dl", encodeURIComponent(al)]);
    0 < cl.length && a.push(["tdp", cl.join(".")]);
    void 0 !== bl && a.push(["frm", String(bl)]);
    return a;
  }
  function fl(a) {
    var b = dl ? [] : el();
    !dl && a.Ab && ((dl = !0), b.length && a.Pf());
    return b;
  }
  var gl = [],
    hl = [];
  function il(a) {
    -1 === hl.indexOf(a) && (gl.push(a), hl.push(a));
  }
  function jl(a) {
    if (!gl.length) return [];
    for (var b = el(), c = ma(gl), d = c.next(); !d.done; d = c.next())
      b.push([d.value, "1"]);
    a.Ab && (a.Pf(), (gl.length = 0));
    return b;
  }
  var kl = new (function (a, b) {
    this.m = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  function ll() {
    var a = oc("google_tag_data", {});
    return (a.ics = a.ics || new ml());
  }
  var ml = function () {
    this.entries = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.m = [];
  };
  ml.prototype.default = function (a, b, c, d, e, f, g) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    ib("TAGGING", 19);
    null == b ? ib("TAGGING", 18) : nl(this, a, "granted" === b, c, d, e, f, g);
  };
  ml.prototype.waitForUpdate = function (a, b, c) {
    for (var d = 0; d < a.length; d++)
      nl(this, a[d], void 0, void 0, "", "", b, c);
  };
  var nl = function (a, b, c, d, e, f, g, h) {
    var m = a.entries,
      n = m[b] || {},
      p = n.region,
      q = d && l(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if ("" === e || q === f || (q === e ? p !== f : !q && !p)) {
      var r = !!(g && 0 < g && void 0 === n.update),
        t = {
          region: q,
          declare_region: n.declare_region,
          implicit: n.implicit,
          default: void 0 !== c ? c : n.default,
          declare: n.declare,
          update: n.update,
          quiet: r,
        };
      if ("" !== e || !1 !== n.default) m[b] = t;
      r &&
        G.setTimeout(function () {
          m[b] === t &&
            t.quiet &&
            (ib("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0, h),
            a.notifyListeners());
        }, g);
    }
  };
  aa = ml.prototype;
  aa.clearTimeout = function (a, b, c) {
    var d = [a],
      e = (null == c ? void 0 : c.delegatedConsentTypes) || {},
      f;
    for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
    var g = this.entries[a] || {},
      h = this.getConsentState(a, c);
    if (g.quiet) {
      g.quiet = !1;
      for (var m = ma(d), n = m.next(); !n.done; n = m.next())
        ol(this, n.value);
    } else if (void 0 !== b && h !== b)
      for (var p = ma(d), q = p.next(); !q.done; q = p.next())
        ol(this, q.value);
  };
  aa.update = function (a, b, c) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (null != b) {
      var d = this.getConsentState(a, c),
        e = this.entries;
      (e[a] = e[a] || {}).update = "granted" === b;
      this.clearTimeout(a, d, c);
    }
  };
  aa.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      h = g.declare_region,
      m = c && l(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if ("" === d || m === e || (m === d ? h !== e : !m && !h)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: "granted" === b,
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if ("" !== d || !1 !== g.declare) f[a] = n;
    }
  };
  aa.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    !1 !== d.implicit && (d.implicit = "granted" === b);
  };
  aa.getConsentState = function (a, b) {
    var c = this.entries,
      d = c[a] || {},
      e = d.update;
    if (void 0 !== e) return e ? 1 : 2;
    e = d.default;
    if (void 0 !== e) return e ? 1 : 2;
    if (null == b ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
      var f = c[b.delegatedConsentTypes[a]] || {};
      e = f.update;
      if (void 0 !== e) return e ? 1 : 2;
      e = f.default;
      if (void 0 !== e) return e ? 1 : 2;
    }
    e = d.declare;
    if (void 0 !== e) return e ? 1 : 2;
    e = d.implicit;
    return void 0 !== e ? (e ? 3 : 4) : 0;
  };
  aa.addListener = function (a, b) {
    this.m.push({ consentTypes: a, ql: b });
  };
  var ol = function (a, b) {
    for (var c = 0; c < a.m.length; ++c) {
      var d = a.m[c];
      Array.isArray(d.consentTypes) &&
        -1 !== d.consentTypes.indexOf(b) &&
        (d.Lj = !0);
    }
  };
  ml.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.m.length; ++c) {
      var d = this.m[c];
      if (d.Lj) {
        d.Lj = !1;
        try {
          d.ql({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  var ql = function () {
    var a = pl,
      b = "oh";
    if (a.oh && a.hasOwnProperty(b)) return a.oh;
    var c = new a();
    return (a.oh = c);
  };
  var pl = function () {
    var a = {};
    this.m = function () {
      var b = kl.m,
        c = kl.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.F = function () {
      a[kl.m] = !0;
    };
  };
  var rl = !1,
    sl = !1,
    tl = {
      delegatedConsentTypes: {},
      corePlatformServices: {},
      usedCorePlatformServices: !1,
    };
  function ul(a) {
    var b = ll();
    if ("ad_user_data" === a)
      if (Oi(8)) {
        var c = b.getConsentState("ad_storage", tl);
        if (2 !== c && 4 !== c) return c;
      } else Oi(7) && (a = "ad_storage");
    return b.getConsentState(a, tl);
  }
  var vl = function (a) {
      ll().accessedAny = !0;
      return (l(a) ? [a] : a).every(function (b) {
        switch (ul(b)) {
          case 1:
          case 3:
            return !0;
          case 2:
          case 4:
            return !1;
          default:
            return !0;
        }
      });
    },
    wl = function (a) {
      ll().accessedAny = !0;
      return ul(a);
    },
    xl = function (a) {
      for (var b = {}, c = ma(a), d = c.next(); !d.done; d = c.next()) {
        var e = d.value;
        b[e] = !1 !== tl.corePlatformServices[e];
      }
      return b;
    },
    yl = function (a) {
      var b = ll();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    zl = function () {
      if (!ql().m()) return !1;
      var a = ll();
      a.accessedAny = !0;
      return a.active;
    },
    Al = function (a, b) {
      if (Oi(7)) {
        for (
          var c = [],
            d = a.find(function (h) {
              return "ad_storage" === h;
            }),
            e = ma(a),
            f = e.next();
          !f.done;
          f = e.next()
        ) {
          var g = f.value;
          if ("ad_user_data" === g) {
            if (d) continue;
            c.push("ad_storage");
          }
          c.push(g);
        }
        ll().addListener(c, b);
      } else ll().addListener(a, b);
    },
    Bl = function (a, b) {
      ll().notifyListeners(a, b);
    },
    Cl = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!yl(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Al(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Dl = function (a, b) {
      function c() {
        for (var h = [], m = 0; m < e.length; m++) {
          var n = e[m];
          vl(n) && !f[n] && h.push(n);
        }
        return h;
      }
      function d(h) {
        for (var m = 0; m < h.length; m++) f[h[m]] = !0;
      }
      var e = l(b) ? [b] : b,
        f = {},
        g = c();
      g.length !== e.length &&
        (d(g),
        Al(e, function (h) {
          function m(q) {
            0 !== q.length && (d(q), (h.consentTypes = q), a(h));
          }
          var n = c();
          if (0 !== n.length) {
            var p = Object.keys(f).length;
            n.length + p >= e.length
              ? m(n)
              : G.setTimeout(function () {
                  m(c());
                }, 500);
          }
        }));
    };
  function El() {}
  function Fl() {}
  var Gl = [Q.g.R, Q.g.W, Q.g.P, Q.g.Aa],
    Hl,
    Il,
    Jl = function (a) {
      for (
        var b = a[Q.g.jc], c = Array.isArray(b) ? b : [b], d = { Be: 0 };
        d.Be < c.length;
        d = { Be: d.Be }, ++d.Be
      )
        z(
          a,
          (function (e) {
            return function (f, g) {
              if (f !== Q.g.jc) {
                var h = c[e.Be],
                  m = Ui(),
                  n = Ti["1"] || "";
                sl = !0;
                rl && ib("TAGGING", 20);
                ll().declare(f, g, h, m, n);
              }
            };
          })(d)
        );
    },
    Kl = function (a) {
      !Il && Hl && il("crc");
      Il = !0;
      var b = a[Q.g.jc];
      b && P(40);
      var c = a[Q.g.Se];
      c && P(41);
      for (
        var d = Array.isArray(b) ? b : [b], e = { Ce: 0 };
        e.Ce < d.length;
        e = { Ce: e.Ce }, ++e.Ce
      )
        z(
          a,
          (function (f) {
            return function (g, h) {
              if (g !== Q.g.jc && g !== Q.g.Se) {
                var m = d[f.Ce],
                  n = Number(c),
                  p = Ui(),
                  q = Ti["1"] || "";
                n = void 0 === n ? 0 : n;
                rl = !0;
                sl && ib("TAGGING", 20);
                ll().default(g, h, m, p, q, n, tl);
              }
            };
          })(e)
        );
    },
    Ll = function (a, b) {
      Hl = !0;
      z(a, function (c, d) {
        rl = !0;
        sl && ib("TAGGING", 20);
        ll().update(c, d, tl);
      });
      Bl(b.eventId, b.priorityId);
    },
    Ml = function (a) {
      a.hasOwnProperty("all") &&
        z(bi, function (b) {
          tl.corePlatformServices[b] = "granted" === a.all;
          tl.usedCorePlatformServices = !0;
        });
      z(a, function (b, c) {
        "all" !== b &&
          ((tl.corePlatformServices[b] = "granted" === c),
          (tl.usedCorePlatformServices = !0));
      });
    },
    W = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return vl(b);
      });
    },
    Nl = function (a, b) {
      Al(a, b);
    },
    Ol = function (a, b) {
      Dl(a, b);
    },
    Pl = function (a, b) {
      Cl(a, b);
    },
    Ql = function () {
      var a = [Q.g.R, Q.g.Aa, Q.g.P];
      ll().waitForUpdate(a, 500, tl);
    },
    Rl = function (a) {
      for (var b = ma(a), c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        ll().clearTimeout(d, void 0, tl);
      }
      Bl();
    };
  var Sl = function () {
    if (void 0 === di.pscdl) {
      var a = function (b) {
        di.pscdl = b;
      };
      try {
        "cookieDeprecationLabel" in lc
          ? (a("pending"), lc.cookieDeprecationLabel.getValue().then(a))
          : a("noapi");
      } catch (b) {
        a("error");
      }
    }
  };
  var Tl = /[A-Z]+/,
    Ul = /\s/;
  function Vl(a, b) {
    if (l(a)) {
      a = xb(a);
      var c = a.indexOf("-");
      if (!(0 > c)) {
        var d = a.substring(0, c);
        if (Tl.test(d)) {
          var e = a.substring(c + 1),
            f;
          if (b) {
            var g = function (n) {
              var p = n.indexOf("/");
              return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)];
            };
            f = g(e);
            if ("DC" === d && 2 === f.length) {
              var h = g(f[1]);
              2 === h.length && ((f[1] = h[0]), f.push(h[1]));
            }
          } else {
            f = e.split("/");
            for (var m = 0; m < f.length; m++)
              if (!f[m] || (Ul.test(f[m]) && ("AW" !== d || 1 !== m))) return;
          }
          return { id: a, prefix: d, ka: d + "-" + f[0], ma: f };
        }
      }
    }
  }
  function Wl(a, b) {
    for (var c = {}, d = 0; d < a.length; ++d) {
      var e = Vl(a[d], b);
      e && (c[e.id] = e);
    }
    Xl(c);
    var f = [];
    z(c, function (g, h) {
      f.push(h);
    });
    return f;
  }
  function Xl(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.ma[Yl[2]] && b.push(d.ka);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Zl = {},
    Yl =
      ((Zl[0] = 0),
      (Zl[1] = 0),
      (Zl[2] = 1),
      (Zl[3] = 0),
      (Zl[4] = 1),
      (Zl[5] = 2),
      (Zl[6] = 0),
      (Zl[7] = 0),
      (Zl[8] = 0),
      Zl);
  var $l = [];
  function am(a) {
    if (!$l.length) return [];
    var b = [["tdc", $l.join("!")]];
    a.Ab && (a.Pf(), ($l.length = 0));
    return b;
  }
  var bm = { initialized: 11, complete: 12, interactive: 13 },
    cm = {},
    dm = Object.freeze(((cm[Q.g.La] = !0), cm)),
    em =
      0 <= H.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= H.location.search.indexOf("&gtm_diagnostics="),
    gm = function (a, b, c) {
      if (gk && "config" === a && !(1 < Vl(b).ma.length)) {
        var d,
          e = oc("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = k(c.M);
        k(c.m, f);
        var g = [],
          h;
        for (h in d) {
          var m = fm(d[h], f);
          m.length && (em && console.log(m), g.push(h));
        }
        g.length &&
          (g.length && gk && $l.push(b + "*" + g.join(".")),
          ib("TAGGING", bm[H.readyState] || 14));
        d[b] = f;
      }
    };
  function hm(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function fm(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? dm[q] : t;
      },
      f;
    for (f in hm(a, b)) {
      var g = (d ? d + "." : "") + f,
        h = e(f, a),
        m = e(f, b),
        n = "object" === Ta(h) || "array" === Ta(h),
        p = "object" === Ta(m) || "array" === Ta(m);
      if (n && p) fm(h, m, c, g);
      else if (n || p || h !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  var im = function (a, b, c, d, e, f, g, h, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.m = c;
      this.T = d;
      this.H = e;
      this.M = f;
      this.F = g;
      this.eventMetadata = h;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    jm = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.m);
          c.push(a.T);
          c.push(a.H);
          c.push(a.M);
          c.push(a.F);
          break;
        case 2:
          c.push(a.m);
          break;
        case 1:
          c.push(a.T);
          c.push(a.H);
          c.push(a.M);
          c.push(a.F);
          break;
        case 4:
          c.push(a.m), c.push(a.T), c.push(a.H), c.push(a.M);
      }
      return c;
    },
    V = function (a, b, c, d) {
      for (
        var e = ma(jm(a, void 0 === d ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        if (void 0 !== g[b]) return g[b];
      }
      return c;
    },
    km = function (a) {
      for (
        var b = {}, c = jm(a, 4), d = ma(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), g = ma(f), h = g.next();
          !h.done;
          h = g.next()
        )
          b[h.value] = 1;
      return Object.keys(b);
    },
    lm = function (a, b, c) {
      function d(n) {
        Va(n) &&
          z(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        g = jm(a, void 0 === c ? 3 : c);
      g.reverse();
      for (var h = ma(g), m = h.next(); !m.done; m = h.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    mm = function (a) {
      for (
        var b = [Q.g.Tc, Q.g.Pc, Q.g.Qc, Q.g.Rc, Q.g.Sc, Q.g.Uc, Q.g.Vc],
          c = jm(a, 3),
          d = ma(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, g = {}, h = !1, m = ma(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          void 0 !== f[p] && ((g[p] = f[p]), (h = !0));
        }
        var q = h ? g : void 0;
        if (q) return q;
      }
      return {};
    },
    nm = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.F = {};
      this.T = {};
      this.m = {};
      this.H = {};
      this.ba = {};
      this.M = {};
      this.eventMetadata = {};
      this.isGtmEvent = !1;
      this.onSuccess = function () {};
      this.onFailure = function () {};
    },
    om = function (a, b) {
      a.F = b;
      return a;
    },
    pm = function (a, b) {
      a.T = b;
      return a;
    },
    qm = function (a, b) {
      a.m = b;
      return a;
    },
    rm = function (a, b) {
      a.H = b;
      return a;
    },
    sm = function (a, b) {
      a.ba = b;
      return a;
    },
    tm = function (a, b) {
      a.M = b;
      return a;
    },
    um = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    vm = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    wm = function (a, b) {
      a.onFailure = b;
      return a;
    },
    xm = function (a, b) {
      a.isGtmEvent = b;
      return a;
    },
    ym = function (a) {
      return new im(
        a.eventId,
        a.priorityId,
        a.F,
        a.T,
        a.m,
        a.H,
        a.M,
        a.eventMetadata,
        a.onSuccess,
        a.onFailure,
        a.isGtmEvent
      );
    };
  var zm = {};
  function Am(a, b, c) {
    gk && void 0 !== a && ((zm[a] = zm[a] || []), zm[a].push(c + b), rk(a));
  }
  function Bm(a) {
    var b = a.eventId,
      c = a.Ab,
      d = [],
      e = zm[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete zm[b];
    return d;
  }
  var Dm = function (a, b) {
      var c = Vl(Dj(a), !0);
      c && Cm.register(c, b);
    },
    Em = function (a, b, c, d) {
      var e = Vl(c, d.isGtmEvent);
      e && Cm.push("event", [b, a], e, d);
    },
    Fm = function (a, b, c, d) {
      var e = Vl(c, d.isGtmEvent);
      e && Cm.push("get", [a, b], e, d);
    },
    Hm = function (a) {
      var b = Vl(Dj(a), !0),
        c;
      b ? (c = Gm(Cm, b).m) : (c = {});
      return c;
    },
    Im = function (a, b) {
      var c = Vl(Dj(a), !0);
      if (c) {
        var d = Cm,
          e = k(b);
        k(Gm(d, c).m, e);
        Gm(d, c).m = e;
      }
    },
    Jm = function () {
      this.status = 1;
      this.T = {};
      this.m = {};
      this.F = {};
      this.ba = null;
      this.M = {};
      this.H = !1;
    },
    Km = function (a, b, c, d) {
      var e = zb();
      this.type = a;
      this.F = e;
      this.m = b;
      this.args = c;
      this.messageContext = d;
    },
    Lm = function () {
      this.F = {};
      this.H = {};
      this.m = [];
    },
    Gm = function (a, b) {
      var c = b.ka;
      return (a.F[c] = a.F[c] || new Jm());
    },
    Mm = function (a, b, c, d) {
      if (d.m) {
        var e = Gm(a, d.m),
          f = e.ba;
        if (f) {
          var g = k(c),
            h = k(e.T[d.m.id]),
            m = k(e.M),
            n = k(e.m),
            p = k(a.H),
            q = {};
          if (gk)
            try {
              q = k(zi);
            } catch (v) {
              P(72);
            }
          var r = d.m.prefix,
            t = function (v) {
              Am(d.messageContext.eventId, r, v);
            },
            u = ym(
              xm(
                wm(
                  vm(
                    um(
                      sm(
                        rm(
                          tm(
                            qm(
                              pm(
                                om(
                                  new nm(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                h
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            Am(d.messageContext.eventId, r, "1"),
              gm(d.type, d.m.id, u),
              f(d.m.id, b, d.F, u);
          } catch (v) {
            Am(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  Lm.prototype.register = function (a, b, c) {
    var d = Gm(this, a);
    3 !== d.status &&
      ((d.ba = b), (d.status = 3), c && (k(d.m, c), (d.m = c)), this.flush());
  };
  Lm.prototype.push = function (a, b, c, d) {
    void 0 !== c &&
      (1 === Gm(this, c).status &&
        ((Gm(this, c).status = 2), this.push("require", [{}], c, {})),
      Gm(this, c).H && (d.deferrable = !1));
    this.m.push(new Km(a, c, b, d));
    d.deferrable || this.flush();
  };
  Lm.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.m.length;
      e = { Cc: void 0, hh: void 0 }
    ) {
      var f = this.m[0],
        g = f.m;
      if (f.messageContext.deferrable)
        !g || Gm(this, g).H
          ? ((f.messageContext.deferrable = !1), this.m.push(f))
          : c.push(f),
          this.m.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== Gm(this, g).status && !a) {
              this.m.push.apply(this.m, c);
              return;
            }
            break;
          case "set":
            z(f.args[0], function (r, t) {
              k(Gb(r, t), b.H);
            });
            break;
          case "config":
            var h = Gm(this, g);
            e.Cc = {};
            z(
              f.args[0],
              (function (r) {
                return function (t, u) {
                  k(Gb(t, u), r.Cc);
                };
              })(e)
            );
            var m = !!e.Cc[Q.g.Xb];
            delete e.Cc[Q.g.Xb];
            var n = g.ka === g.id;
            m || (n ? (h.M = {}) : (h.T[g.id] = {}));
            (h.H && m) || Mm(this, Q.g.fa, e.Cc, f);
            h.H = !0;
            n ? k(e.Cc, h.M) : (k(e.Cc, h.T[g.id]), P(70));
            d = !0;
            break;
          case "event":
            e.hh = {};
            z(
              f.args[0],
              (function (r) {
                return function (t, u) {
                  k(Gb(t, u), r.hh);
                };
              })(e)
            );
            Mm(this, f.args[1], e.hh, f);
            break;
          case "get":
            var p = {},
              q = ((p[Q.g.pb] = f.args[0]), (p[Q.g.Db] = f.args[1]), p);
            Mm(this, Q.g.Qa, q, f);
        }
        this.m.shift();
        Nm(this, f);
      }
    }
    this.m.push.apply(this.m, c);
    d && this.flush();
  };
  var Nm = function (a, b) {
      if ("require" !== b.type)
        if (b.m)
          for (var c = Gm(a, b.m).F[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.F)
            if (a.F.hasOwnProperty(e)) {
              var f = a.F[e];
              if (f && f.F)
                for (var g = f.F[b.type] || [], h = 0; h < g.length; h++)
                  g[h]();
            }
    },
    Cm = new Lm();
  function Om(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Zk("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            h = fc(g, e);
          0 <= h && Array.prototype.splice.call(g, h, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      xk(e, "load", f);
      xk(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Qm = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Xk(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Pm(c, b);
    },
    Pm = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else Om(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Rm = function () {
    this.T = this.T;
    this.H = this.H;
  };
  Rm.prototype.T = !1;
  Rm.prototype.addOnDisposeCallback = function (a, b) {
    this.T
      ? void 0 !== b
        ? a.call(b)
        : a()
      : (this.H || (this.H = []), this.H.push(void 0 !== b ? Fa(a, b) : a));
  };
  var Sm = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Tm = function (a, b) {
      b = void 0 === b ? {} : b;
      Rm.call(this);
      this.F = a;
      this.m = null;
      this.Va = {};
      this.Bc = 0;
      var c;
      this.Yb = null != (c = b.Mm) ? c : 500;
      var d;
      this.ba = null != (d = b.An) ? d : !1;
      this.M = null;
    };
  ya(Tm, Rm);
  var Vm = function (a) {
    return "function" === typeof a.F.__tcfapi || null != Um(a);
  };
  Tm.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.ba },
      d = wk(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.Yb &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.Yb));
    var f = function (g, h) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Sm(c)),
          (c.internalBlockOnErrors = b.ba),
          (h && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), h || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Wm(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Tm.prototype.removeEventListener = function (a) {
    a && a.listenerId && Wm(this, "removeEventListener", null, a.listenerId);
  };
  var Ym = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var h = c;
      2 === c
        ? ((h = 0), 2 === g && (h = 1))
        : 3 === c && ((h = 1), 1 === g && (h = 0));
      var m;
      if (0 === h)
        if (a.purpose && a.vendor) {
          var n = Xm(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Xm(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === h
            ? a.purpose && a.vendor
              ? Xm(a.purpose.legitimateInterests, b) &&
                Xm(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    Xm = function (a, b) {
      return !(!a || !a[b]);
    },
    Wm = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.F.__tcfapi) {
        var e = a.F.__tcfapi;
        e(b, 2, c, d);
      } else if (Um(a)) {
        Zm(a);
        var f = ++a.Bc;
        a.Va[f] = c;
        if (a.m) {
          var g = {};
          a.m.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    Um = function (a) {
      if (a.m) return a.m;
      var b;
      a: {
        for (var c = a.F, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (h) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (h) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.m = b;
      return a.m;
    },
    Zm = function (a) {
      a.M ||
        ((a.M = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.Va[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        xk(a.F, "message", a.M));
    },
    $m = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Sm(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (Qm({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var an = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function bn() {
    var a = di.tcf || {};
    return (di.tcf = a);
  }
  var cn = function () {
      return new Tm(G, { Mm: -1 });
    },
    jn = function () {
      var a = bn(),
        b = cn();
      Vm(b) && !dn() && !en() && P(124);
      if (!a.active && Vm(b)) {
        dn() &&
          ((a.active = !0),
          (a.ic = {}),
          (a.cmpId = 0),
          (a.tcfPolicyVersion = 0),
          (ll().active = !0),
          (a.tcString = "tcunavailable"));
        Ql();
        try {
          b.addEventListener(function (c) {
            if (0 !== c.internalErrorState)
              fn(a), Rl([Q.g.R, Q.g.Aa, Q.g.P]), (ll().active = !0);
            else if (
              ((a.gdprApplies = c.gdprApplies),
              (a.cmpId = c.cmpId),
              (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
              en() && (a.active = !0),
              !gn(c) || dn() || en())
            ) {
              a.tcfPolicyVersion = c.tcfPolicyVersion;
              var d;
              if (!1 === c.gdprApplies) {
                var e = {},
                  f;
                for (f in an) an.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c);
              } else if (gn(c)) {
                var g = {},
                  h;
                for (h in an)
                  if (an.hasOwnProperty(h))
                    if ("1" === h) {
                      var m,
                        n = c,
                        p = { wl: !0 };
                      p = void 0 === p ? {} : p;
                      m = $m(n)
                        ? !1 === n.gdprApplies
                          ? !0
                          : "tcunavailable" === n.tcString
                          ? !p.Ej
                          : (p.Ej || void 0 !== n.gdprApplies || p.wl) &&
                            (p.Ej ||
                              ("string" === typeof n.tcString &&
                                n.tcString.length))
                          ? Ym(n, "1", 0)
                          : !0
                        : !1;
                      g["1"] = m;
                    } else g[h] = Ym(c, h, an[h]);
                d = g;
              }
              if (d) {
                a.tcString = c.tcString || "tcempty";
                a.ic = d;
                var q = {},
                  r = ((q[Q.g.R] = a.ic["1"] ? "granted" : "denied"), q);
                !0 !== a.gdprApplies
                  ? (Rl([Q.g.R, Q.g.Aa, Q.g.P]), (ll().active = !0))
                  : ((r[Q.g.Aa] =
                      a.ic["3"] && a.ic["4"] ? "granted" : "denied"),
                    "number" === typeof a.tcfPolicyVersion &&
                    4 <= a.tcfPolicyVersion
                      ? (r[Q.g.P] =
                          a.ic["1"] && a.ic["7"] ? "granted" : "denied")
                      : Rl([Q.g.P]),
                    Ll(
                      r,
                      { eventId: 0 },
                      {
                        gdprApplies: a ? a.gdprApplies : void 0,
                        tcString: hn() || "",
                      }
                    ));
              }
            } else Rl([Q.g.R, Q.g.Aa, Q.g.P]);
          });
        } catch (c) {
          fn(a), Rl([Q.g.R, Q.g.Aa, Q.g.P]), (ll().active = !0);
        }
      }
    };
  function fn(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function gn(a) {
    return (
      "tcloaded" === a.eventStatus ||
      "useractioncomplete" === a.eventStatus ||
      "cmpuishown" === a.eventStatus
    );
  }
  var dn = function () {
    return !0 === G.gtag_enable_tcf_support;
  };
  function en() {
    return !0 === bn().enableAdvertiserConsentMode;
  }
  var hn = function () {
      var a = bn();
      if (a.active) return a.tcString;
    },
    kn = function () {
      var a = bn();
      if (a.active && void 0 !== a.gdprApplies)
        return a.gdprApplies ? "1" : "0";
    },
    ln = function (a) {
      if (!an.hasOwnProperty(String(a))) return !0;
      var b = bn();
      return b.active && b.ic ? !!b.ic[String(a)] : !0;
    };
  var mn = [Q.g.R, Q.g.W, Q.g.P, Q.g.Aa],
    nn = {},
    on = ((nn[Q.g.R] = 1), (nn[Q.g.W] = 2), nn);
  function pn(a) {
    if (void 0 === a) return 0;
    switch (V(a, Q.g.oa)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var qn = function (a) {
      var b = pn(a);
      if (3 === b) return !1;
      switch (wl(Q.g.Aa)) {
        case 1:
        case 3:
          return !0;
        case 2:
          return !1;
        case 4:
          return 2 === b;
        case 0:
          return !0;
        default:
          return !1;
      }
    },
    rn = function () {
      return zl() || !vl(Q.g.R) || !vl(Q.g.W);
    },
    sn = function () {
      var a = {},
        b;
      for (b in on) on.hasOwnProperty(b) && (a[on[b]] = wl(b));
      return "G1" + xe(a[1] || 0) + xe(a[2] || 0);
    },
    tn = {},
    un =
      ((tn[Q.g.R] = 0), (tn[Q.g.W] = 1), (tn[Q.g.P] = 2), (tn[Q.g.Aa] = 3), tn);
  function vn(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var Gn = function (a) {
      for (var b = "1", c = 0; c < mn.length; c++) {
        var d = b,
          e,
          f = mn[c],
          g = tl.delegatedConsentTypes[f];
        e = void 0 === g ? 0 : un.hasOwnProperty(g) ? 12 | un[g] : 8;
        var h = ll();
        h.accessedAny = !0;
        var m = h.entries[f] || {};
        e = (e << 2) | vn(m.implicit);
        b =
          d +
          ("" +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              e
            ] +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (vn(m.declare) << 4) | (vn(m.default) << 2) | vn(m.update)
            ]);
      }
      var n = b,
        p;
      p = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        ((zl() ? 1 : 0) << 2) | pn(a)
      ];
      return n + p;
    },
    Hn = function () {
      if (!vl(Q.g.P)) return "-";
      for (
        var a = Object.keys(bi), b = xl(a), c = "", d = ma(a), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = e.value;
        b[f] && (c += bi[f]);
      }
      return c || "-";
    },
    In = function () {
      return Wi() || ((dn() || en()) && "1" === kn()) ? "1" : "0";
    },
    Jn = function () {
      return (Wi() ? !0 : !(!dn() && !en()) && "1" === kn()) || !vl(Q.g.P);
    },
    Kn = function () {
      var a = "0",
        b = "0",
        c;
      var d = bn();
      c = d.active ? d.cmpId : void 0;
      "number" === typeof c &&
        0 <= c &&
        4095 >= c &&
        ((a =
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (c >> 6) & 63
          ]),
        (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          c & 63
        ]));
      var e = "0",
        f;
      var g = bn();
      f = g.active ? g.tcfPolicyVersion : void 0;
      "number" === typeof f &&
        0 <= f &&
        63 >= f &&
        (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          f
        ]);
      var h = 0;
      Wi() && (h |= 1);
      "1" === kn() && (h |= 2);
      dn() && (h |= 4);
      var m;
      var n = bn();
      m =
        void 0 !== n.enableAdvertiserConsentMode
          ? n.enableAdvertiserConsentMode
            ? "1"
            : "0"
          : void 0;
      "1" === m && (h |= 8);
      ll().waitPeriodTimedOut && (h |= 16);
      return (
        "1" +
        a +
        b +
        e +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h]
      );
    };
  function Ln() {
    var a = !1;
    return a;
  }
  var Mn = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    Nn = function (a) {
      a = void 0 === a ? {} : a;
      var b = Ef.ctid.split("-")[0].toUpperCase(),
        c = {};
      c.ctid = Ef.ctid;
      c.vm = ci.me;
      c.zm = ci.Og;
      c.Ul = wj.ie ? 2 : 1;
      c.Fm = a.Tj;
      c.se = Ef.canonicalContainerId;
      c.se !== a.za && (c.za = a.za);
      ii ? ((c.Nf = Mn[b]), c.Nf || (c.Nf = 0)) : (c.Nf = mi ? 13 : 10);
      vi.M
        ? ((c.Mf = 0), (c.Wk = 2))
        : ki
        ? (c.Mf = 1)
        : Ln()
        ? (c.Mf = 2)
        : (c.Mf = 3);
      var d = {};
      d[6] = xj;
      c.Zk = d;
      var e = a.Gf,
        f;
      var g = c.Nf,
        h = c.Mf;
      void 0 === g
        ? (f = "")
        : (h || (h = 0), (f = "" + ug(1, 1) + we((g << 2) | h)));
      var m = c.Wk,
        n = 4 + f + (m ? "" + ug(2, 1) + we(m) : ""),
        p,
        q = c.zm;
      p = q && tg.test(q) ? "" + ug(3, 2) + q : "";
      var r,
        t = c.vm;
      r = t ? "" + ug(4, 1) + we(t) : "";
      var u;
      var v = c.ctid;
      if (v && e) {
        var w = v.split("-"),
          x = w[0].toUpperCase();
        if ("GTM" !== x && "OPT" !== x) u = "";
        else {
          var y = w[1];
          u = "" + ug(5, 3) + we(1 + y.length) + (c.Ul || 0) + y;
        }
      } else u = "";
      var B = c.Fm,
        A = c.se,
        E = c.za,
        D = c.Ln,
        C =
          n +
          p +
          r +
          u +
          (B ? "" + ug(6, 1) + we(B) : "") +
          (A ? "" + ug(7, 3) + we(A.length) + A : "") +
          (E ? "" + ug(8, 3) + we(E.length) + E : "") +
          (D ? "" + ug(9, 3) + we(D.length) + D : ""),
        F;
      var M = c.Zk;
      M = void 0 === M ? {} : M;
      for (
        var N = [], U = ma(Object.keys(M)), X = U.next();
        !X.done;
        X = U.next()
      ) {
        var O = X.value;
        N[Number(O)] = M[O];
      }
      if (N.length) {
        var R = ug(10, 3),
          ia;
        if (0 === N.length) ia = we(0);
        else {
          for (var da = [], ca = 0, Aa = !1, Ca = 0; Ca < N.length; Ca++) {
            Aa = !0;
            var xa = Ca % 6;
            N[Ca] && (ca |= 1 << xa);
            5 === xa && (da.push(we(ca)), (ca = 0), (Aa = !1));
          }
          Aa && da.push(we(ca));
          ia = da.join("");
        }
        var pa = ia;
        F = "" + R + we(pa.length) + pa;
      } else F = "";
      return C + F;
    };
  var On = {
      Pg: "shared_user_id",
      Qg: "shared_user_id_requested",
      Rg: "shared_user_id_source",
    },
    Pn;
  function Qn(a) {
    Pn ||
      (Pn = Object.keys(On).map(function (b) {
        return On[b];
      }));
    return Pn.includes(a);
  }
  function Rn(a, b) {
    if (Qn(a)) {
      var c = oc("google_tag_data", {}),
        d = c.xcd;
      d || ((d = {}), (c.xcd = d));
      var e = d[a];
      e
        ? e.set(b)
        : (d[a] = {
            set: function (f) {
              b = f;
            },
            get: function () {
              return b;
            },
          });
    }
  }
  function Sn(a) {
    if (Qn(a)) {
      var b, c;
      return null == (b = oc("google_tag_data", {}).xcd)
        ? void 0
        : null == (c = b[a])
        ? void 0
        : c.get();
    }
  }
  function Tn(a) {
    return "null" !== a.origin;
  }
  var Un = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        h = g[0].replace(/^\s*|\s*$/g, "");
      if (h && h == a) {
        var m = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  function Vn(a, b, c, d) {
    return Wn(d) ? Un(a, String(b || Xn()), c) : [];
  }
  function Yn(a, b, c, d, e) {
    if (Wn(e)) {
      var f = Zn(a, d, e);
      if (1 === f.length) return f[0].id;
      if (0 !== f.length) {
        f = $n(
          f,
          function (g) {
            return g.jl;
          },
          b
        );
        if (1 === f.length) return f[0].id;
        f = $n(
          f,
          function (g) {
            return g.im;
          },
          c
        );
        return f[0] ? f[0].id : void 0;
      }
    }
  }
  function ao(a, b, c, d) {
    var e = Xn(),
      f = window;
    Tn(f) && (f.document.cookie = a);
    var g = Xn();
    return e !== g || (void 0 !== c && 0 <= Vn(b, g, !1, d).indexOf(c));
  }
  function bo(a, b, c, d) {
    function e(w, x, y) {
      if (null == y) return delete h[x], w;
      h[x] = y;
      return w + "; " + x + "=" + y;
    }
    function f(w, x) {
      if (null == x) return w;
      h[x] = !0;
      return w + "; " + x;
    }
    if (!Wn(c.yb)) return 2;
    var g;
    null == b
      ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
      : (c.encode && (b = encodeURIComponent(b)),
        (b = co(b)),
        (g = a + "=" + b));
    var h = {};
    g = e(g, "path", c.path);
    var m;
    c.expires instanceof Date
      ? (m = c.expires.toUTCString())
      : null != c.expires && (m = "" + c.expires);
    g = e(g, "expires", m);
    g = e(g, "max-age", c.Yl);
    g = e(g, "samesite", c.Am);
    c.Bm && (g = f(g, "secure"));
    var n = c.domain;
    if (n && "auto" === n.toLowerCase()) {
      for (var p = eo(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
        var u = "none" !== p[t] ? p[t] : void 0,
          v = e(g, "domain", u);
        v = f(v, c.flags);
        try {
          d && d(a, h);
        } catch (w) {
          q = w;
          continue;
        }
        r = !0;
        if (!fo(u, c.path) && ao(v, a, b, c.yb)) return 0;
      }
      if (q && !r) throw q;
      return 1;
    }
    n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
    g = f(g, c.flags);
    d && d(a, h);
    return fo(n, c.path) ? 1 : ao(g, a, b, c.yb) ? 0 : 1;
  }
  function go(a, b, c) {
    null == c.path && (c.path = "/");
    c.domain || (c.domain = "auto");
    return bo(a, b, c);
  }
  function $n(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        m = b(h);
      m === c
        ? d.push(h)
        : void 0 === f || m < f
        ? ((e = [h]), (f = m))
        : m === f && e.push(h);
    }
    return 0 < d.length ? d : e;
  }
  function Zn(a, b, c) {
    for (var d = [], e = Vn(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        h = g.shift();
      if (!b || !h || -1 !== b.indexOf(h)) {
        var m = g.shift();
        if (m) {
          var n = m.split("-");
          d.push({
            id: g.join("."),
            jl: Number(n[0]) || 1,
            im: Number(n[1]) || 1,
          });
        }
      }
    }
    return d;
  }
  function co(a) {
    a && 1200 < a.length && (a = a.substring(0, 1200));
    return a;
  }
  var ho = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    io = /(^|\.)doubleclick\.net$/i;
  function fo(a, b) {
    return (
      void 0 !== a &&
      (io.test(window.document.location.hostname) || ("/" === b && ho.test(a)))
    );
  }
  function jo(a) {
    if (!a) return 1;
    a = 0 === a.indexOf(".") ? a.substring(1) : a;
    return a.split(".").length;
  }
  function ko(a) {
    if (!a || "/" === a) return 1;
    "/" !== a[0] && (a = "/" + a);
    "/" !== a[a.length - 1] && (a += "/");
    return a.split("/").length - 1;
  }
  function lo(a, b) {
    var c = "" + jo(a),
      d = ko(b);
    1 < d && (c += "-" + d);
    return c;
  }
  var Xn = function () {
      return Tn(window) ? window.document.cookie : "";
    },
    Wn = function (a) {
      return a && ql().m()
        ? (Array.isArray(a) ? a : [a]).every(function (b) {
            return yl(b) && vl(b);
          })
        : !0;
    },
    eo = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (Number(c).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      io.test(e) || ho.test(e) || a.push("none");
      return a;
    };
  function mo(a) {
    var b = Math.round(2147483647 * Math.random()),
      c;
    if (a) {
      var d = 1,
        e,
        f,
        g;
      if (a)
        for (d = 0, f = a.length - 1; 0 <= f; f--)
          (g = a.charCodeAt(f)),
            (d = ((d << 6) & 268435455) + g + (g << 14)),
            (e = d & 266338304),
            (d = 0 !== e ? d ^ (e >> 21) : d);
      c = String(b ^ (d & 2147483647));
    } else c = String(b);
    return c;
  }
  function no(a) {
    return [mo(a), Math.round(zb() / 1e3)].join(".");
  }
  function oo(a, b, c, d, e) {
    var f = jo(b);
    return Yn(a, f, ko(c), d, e);
  }
  function po(a, b, c, d) {
    return [b, lo(c, d), a].join(".");
  }
  function qo(a, b, c, d) {
    var e,
      f = Number(null != a.xb ? a.xb : void 0);
    0 !== f && (e = new Date((b || zb()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      yb: d,
    };
  }
  var ro;
  var vo = function () {
      var a = so,
        b = to,
        c = uo(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        xc(H, "mousedown", d);
        xc(H, "keyup", d);
        xc(H, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    wo = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      uo().decorators.push(f);
    },
    xo = function (a, b, c) {
      for (var d = uo().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          h;
        if ((h = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== H.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    h = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  h = !0;
                  break a;
                }
            h = !1;
          }
        if (h) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Cb(e, g.callback());
        }
      }
      return e;
    };
  function uo() {
    var a = oc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var yo = /(.*?)\*(.*?)\*(.*)/,
    zo = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Ao = /^(?:www\.|m\.|amp\.)+/,
    Bo = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Co(a) {
    var b = Bo.exec(a);
    if (b) return { Ch: b[1], query: b[2], fragment: b[3] };
  }
  function Do(a, b) {
    var c = [
        lc.userAgent,
        new Date().getTimezoneOffset(),
        lc.userLanguage || lc.language,
        Math.floor(zb() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = ro)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    ro = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ ro[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Eo() {
    return function (a) {
      var b = ij(G.location.href),
        c = b.search.replace("?", ""),
        d = bj(c, "_gl", !1, !0) || "";
      a.query = Fo(d) || {};
      var e = ej(b, "fragment"),
        f;
      var g = -1;
      if (Eb(e, "_gl=")) g = 4;
      else {
        var h = e.indexOf("&_gl=");
        0 < h && (g = h + 3 + 2);
      }
      if (0 > g) f = void 0;
      else {
        var m = e.indexOf("&", g);
        f = 0 > m ? e.substring(g) : e.substring(g, m);
      }
      a.fragment = Fo(f || "") || {};
    };
  }
  var Go = function (a) {
      var b = Eo(),
        c = uo();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Cb(d, e.query), a && Cb(d, e.fragment));
      return d;
    },
    Fo = function (a) {
      try {
        var b = Ho(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = gb(d[e + 1]);
            c[f] = g;
          }
          ib("TAGGING", 6);
          return c;
        }
      } catch (h) {
        ib("TAGGING", 8);
      }
    };
  function Ho(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = yo.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var h = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Do(h, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return h;
        ib("TAGGING", 7);
      }
    }
  }
  function Io(a, b, c, d, e) {
    function f(p) {
      var q = p,
        r = new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)").exec(q),
        t = q;
      if (r) {
        var u = r[2],
          v = r[4];
        t = r[1];
        v && (t = t + u + v);
      }
      p = t;
      var w = p.charAt(p.length - 1);
      p && "&" !== w && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var g = Co(c);
    if (!g) return "";
    var h = g.query || "",
      m = g.fragment || "",
      n = a + "=" + b;
    d
      ? (0 !== m.substring(1).length && e) || (m = "#" + f(m.substring(1)))
      : (h = "?" + f(h.substring(1)));
    return "" + g.Ch + h + m;
  }
  function Jo(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var t in n)
          if (n.hasOwnProperty(t)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var u,
          v = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            void 0 !== x &&
              x === x &&
              null !== x &&
              "[object Object]" !== x.toString() &&
              (v.push(w), v.push(fb(String(x))));
          }
        var y = v.join("*");
        u = ["1", Do(y), y].join("*");
        d
          ? (Oi(3) || Oi(1) || !p) && Ko("_gl", u, a, p, q)
          : Lo("_gl", u, a, p, q);
      }
    }
    var d = "FORM" === (a.tagName || "").toUpperCase(),
      e = xo(b, 1, d),
      f = xo(b, 2, d),
      g = xo(b, 4, d),
      h = xo(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    Oi(1) && c(g, !0, !0);
    for (var m in h) h.hasOwnProperty(m) && Mo(m, h[m], a);
  }
  function Mo(a, b, c) {
    "a" === c.tagName.toLowerCase()
      ? Lo(a, b, c)
      : "form" === c.tagName.toLowerCase() && Ko(a, b, c);
  }
  function Lo(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var f;
    if ((f = c.href)) {
      var g;
      if (!(g = !Oi(4) || d)) {
        var h = G.location.href,
          m = Co(c.href),
          n = Co(h);
        g = !(m && n && m.Ch === n.Ch && m.query === n.query && m.fragment);
      }
      f = g;
    }
    if (f) {
      var p = Io(a, b, c.href, d, e);
      bc.test(p) && (c.href = p);
    }
  }
  function Ko(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if ("get" !== f || d) {
        if ("get" === f || "post" === f) {
          var g = Io(a, b, c.action, d, e);
          bc.test(g) && (c.action = g);
        }
      } else {
        for (var h = c.childNodes || [], m = !1, n = 0; n < h.length; n++) {
          var p = h[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = H.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function so(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || Jo(e, e.hostname);
      }
    } catch (g) {}
  }
  function to(a) {
    try {
      if (a.action) {
        var b = ej(ij(a.action), "host");
        Jo(a, b);
      }
    } catch (c) {}
  }
  var No = function (a, b, c, d) {
      vo();
      var e = "fragment" === c ? 2 : 1;
      d = !!d;
      wo(a, b, e, d, !1);
      2 === e && ib("TAGGING", 23);
      d && ib("TAGGING", 24);
    },
    Oo = function (a, b) {
      vo();
      wo(a, [dj(G.location, "host", !0)], b, !0, !0);
    },
    Po = function () {
      var a = H.location.hostname,
        b = zo.exec(H.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var h = a.replace(Ao, ""),
        m = e.replace(Ao, ""),
        n;
      if (!(n = h === m)) {
        var p = "." + m;
        n = h.substring(h.length - p.length, h.length) === p;
      }
      return n;
    },
    Qo = function (a, b) {
      return !1 === a ? !1 : a || b || Po();
    };
  var Ro = ["1"],
    So = {},
    To = {},
    Yo = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Uo(a.prefix);
      if (!So[c])
        if (Vo(c, a.path, a.domain)) {
          var d = To[Uo(a.prefix)];
          Wo(a, d ? d.id : void 0, d ? d.xh : void 0);
        } else {
          var e = kj("auiddc");
          if (e) ib("TAGGING", 17), (So[c] = e);
          else if (b) {
            var f = Uo(a.prefix),
              g = no();
            if (0 === Xo(f, g, a)) {
              var h = oc("google_tag_data", {});
              h._gcl_au || (h._gcl_au = g);
            }
            Vo(c, a.path, a.domain);
          }
        }
    };
  function Wo(a, b, c) {
    var d = Uo(a.prefix),
      e = So[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var g = Number(f[1]) || 0;
        if (g) {
          var h = e;
          b && (h = e + "." + b + "." + (c ? c : Math.floor(zb() / 1e3)));
          Xo(d, h, a, 1e3 * g);
        }
      }
    }
  }
  function Xo(a, b, c, d) {
    var e = po(b, "1", c.domain, c.path),
      f = qo(c, d);
    f.yb = Zo();
    return go(a, e, f);
  }
  function Vo(a, b, c) {
    var d = oo(a, b, c, Ro, Zo());
    if (!d) return !1;
    $o(a, d);
    return !0;
  }
  function $o(a, b) {
    var c = b.split(".");
    5 === c.length
      ? ((So[a] = c.slice(0, 2).join(".")),
        (To[a] = { id: c.slice(2, 4).join("."), xh: Number(c[4]) || 0 }))
      : 3 === c.length
      ? (To[a] = { id: c.slice(0, 2).join("."), xh: Number(c[2]) || 0 })
      : (So[a] = b);
  }
  function Uo(a) {
    return (a || "_gcl") + "_au";
  }
  function ap(a) {
    function b() {
      vl(c) && a();
    }
    var c = Zo();
    Cl(function () {
      b();
      vl(c) || Dl(b, c);
    }, c);
  }
  function bp(a) {
    var b = Go(!0),
      c = Uo(a.prefix);
    ap(function () {
      var d = b[c];
      if (d) {
        $o(c, d);
        var e = 1e3 * Number(So[c].split(".")[1]);
        if (e) {
          ib("TAGGING", 16);
          var f = qo(a, e);
          f.yb = Zo();
          var g = po(d, "1", a.domain, a.path);
          go(c, g, f);
        }
      }
    });
  }
  function cp(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        h = oo(a, e.path, e.domain, Ro, Zo());
      h && (g[a] = h);
      return g;
    };
    ap(function () {
      No(f, b, c, d);
    });
  }
  function Zo() {
    return ["ad_storage", "ad_user_data"];
  }
  var dp = function (a) {
    for (
      var b = [],
        c = H.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Qh: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, h) {
      return h.timestamp - g.timestamp;
    });
    return b;
  };
  function ep(a, b) {
    var c = dp(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Qh] || (d[c[e].Qh] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), da: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Qh].push(g);
      }
    }
    return d;
  }
  var fp = {},
    gp =
      ((fp.k = { Ma: /^[\w-]+$/ }),
      (fp.b = { Ma: /^[\w-]+$/, Kh: !0 }),
      (fp.i = { Ma: /^[1-9]\d*$/ }),
      fp);
  var hp = {},
    ip =
      ((hp[5] = {
        version: "2",
        Sm: ["2"],
        Qj: "ad_storage",
        xj: ["k", "i", "b"],
      }),
      hp);
  function jp(a, b) {
    var c = b.Ma;
    return "function" === typeof c ? c(a) : c.test(a);
  }
  function kp(a) {
    for (
      var b = ma(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { ue: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.ue = gp[e];
      d.ue
        ? d.ue.Kh
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (g) {
                    return function (h) {
                      return jp(h, g.ue);
                    };
                  })(d)
                )
              : void 0)
          : ("string" === typeof f && jp(f, d.ue)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
    return a;
  }
  function lp(a) {
    var b = {},
      c = ip[5];
    if (c) {
      for (
        var d = c.xj, e = ma(a.split("$")), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value,
          h = g[0];
        if (-1 !== d.indexOf(h))
          try {
            var m = decodeURIComponent(g.substring(1)),
              n = gp[h];
            n && (n.Kh ? ((b[h] = b[h] || []), b[h].push(m)) : (b[h] = m));
          } catch (p) {}
      }
      return kp(b);
    }
  }
  function mp(a) {
    var b = ip[5];
    if (b) {
      for (var c = [], d = ma(b.xj), e = d.next(); !e.done; e = d.next()) {
        var f = e.value,
          g = gp[f];
        if (g) {
          var h = a[f];
          if (void 0 !== h)
            if (g.Kh && Array.isArray(h))
              for (var m = ma(h), n = m.next(); !n.done; n = m.next())
                c.push(encodeURIComponent("" + f + n.value));
            else c.push(encodeURIComponent("" + f + h));
        }
      }
      return c.join("$");
    }
  }
  function np(a) {
    var b = ip[5];
    if (b) {
      for (
        var c = [], d = Vn(a, void 0, void 0, b.Qj), e = ma(d), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value.split("."),
          h = g.shift();
        if (-1 !== b.Sm.indexOf(h)) {
          g.shift();
          var m = g.join(".");
          c.push(lp(m));
        }
      }
      return c;
    }
  }
  function op(a, b, c, d) {
    c = c || {};
    var e = mp(b);
    if (e) {
      var f = ip[5],
        g = [f.version, lo(c.domain, c.path), e].join(".");
      go(a, g, qo(c, d, void 0, f.Qj));
    }
  }
  var pp = /^\w+$/,
    qp = /^[\w-]+$/,
    rp = {
      ag: "_ag",
      aw: "_aw",
      dc: "_dc",
      gb: "_gb",
      gf: "_gf",
      gp: "_gp",
      gs: "_gs",
      ha: "_ha",
    };
  function sp() {
    return ["ad_storage", "ad_user_data"];
  }
  var tp = function (a) {
      return !ql().m() || vl(a);
    },
    up = function (a, b) {
      function c() {
        var d = tp(b);
        d && a();
        return d;
      }
      Cl(function () {
        c() || Dl(c, b);
      }, b);
    },
    wp = function (a) {
      return vp(a).map(function (b) {
        return b.da;
      });
    },
    yp = function (a) {
      return xp(a)
        .filter(function (b) {
          return b.da;
        })
        .map(function (b) {
          return b.da;
        });
    },
    xp = function (a) {
      var b = zp(a.prefix),
        c = Ap("gb", b),
        d = Ap("ag", b);
      if (!d || !c) return [];
      var e = function (h) {
          return function (m) {
            m.type = h;
            return m;
          };
        },
        f = vp(c).map(e("gb")),
        g = (Oi(6) ? Bp(d) : []).map(e("ag"));
      return f.concat(g).sort(function (h, m) {
        return m.timestamp - h.timestamp;
      });
    };
  function Cp(a, b, c, d, e) {
    var f = pb(a, function (g) {
      return g.da === c;
    });
    f
      ? ((f.timestamp = Math.max(f.timestamp, d)),
        (f.labels = Dp(f.labels || [], e || [])))
      : a.push({ version: b, da: c, timestamp: d, labels: e });
  }
  var Bp = function (a) {
      for (
        var b = np(a) || [], c = [], d = ma(b), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = e.value,
          g = f,
          h = Ep(f);
        h && Cp(c, "2", g.k, h, g.b || []);
      }
      return c.sort(function (m, n) {
        return n.timestamp - m.timestamp;
      });
    },
    vp = function (a) {
      for (
        var b = [], c = Vn(a, H.cookie, void 0, sp()), d = ma(c), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = Fp(e.value);
        if (null != f) {
          var g = f;
          Cp(b, g.version, g.da, g.timestamp, g.labels);
        }
      }
      b.sort(function (h, m) {
        return m.timestamp - h.timestamp;
      });
      return Gp(b);
    };
  function Dp(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function zp(a) {
    return a && "string" == typeof a && a.match(pp) ? a : "_gcl";
  }
  function Hp(a, b) {
    var c = Oi(6),
      d = Oi(9),
      e = ij(a),
      f = ej(e, "query", !1, void 0, "gclid"),
      g = ej(e, "query", !1, void 0, "gclsrc"),
      h = ej(e, "query", !1, void 0, "wbraid"),
      m;
    c && (m = ej(e, "query", !1, void 0, "gbraid"));
    var n;
    d && (n = ej(e, "query", !1, void 0, "gad_source"));
    var p = ej(e, "query", !1, void 0, "dclid");
    if (b && (!f || !g || !h || (c && !m))) {
      var q = e.hash.replace("#", "");
      f = f || bj(q, "gclid", !1);
      g = g || bj(q, "gclsrc", !1);
      h = h || bj(q, "wbraid", !1);
      c && (m = m || bj(q, "gbraid", !1));
      d && (n = n || bj(q, "gad_source", !1));
    }
    return Ip(f, g, p, h, m, n);
  }
  var Jp = function () {
      return Hp(G.location.href, !0);
    },
    Ip = function (a, b, c, d, e, f) {
      var g = {},
        h = function (m, n) {
          g[n] || (g[n] = []);
          g[n].push(m);
        };
      g.gclid = a;
      g.gclsrc = b;
      g.dclid = c;
      if (void 0 !== a && a.match(qp))
        switch (b) {
          case void 0:
            h(a, "aw");
            break;
          case "aw.ds":
            h(a, "aw");
            h(a, "dc");
            break;
          case "ds":
            h(a, "dc");
            break;
          case "3p.ds":
            h(a, "dc");
            break;
          case "gf":
            h(a, "gf");
            break;
          case "ha":
            h(a, "ha");
        }
      c && h(c, "dc");
      void 0 !== d && qp.test(d) && ((g.wbraid = d), h(d, "gb"));
      Oi(6) && void 0 !== e && qp.test(e) && ((g.gbraid = e), h(e, "ag"));
      Oi(9) && void 0 !== f && qp.test(f) && ((g.gad_source = f), h(f, "gs"));
      return g;
    },
    Lp = function (a) {
      var b = Jp();
      if (Oi(5)) {
        for (
          var c = !0, d = ma(Object.keys(b)), e = d.next();
          !e.done;
          e = d.next()
        )
          if (void 0 !== b[e.value]) {
            c = !1;
            break;
          }
        c && (b = Hp(G.document.referrer, !1));
      }
      Kp(b, !1, a);
    };
  function Kp(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = zp(c.prefix),
      g = d || zb(),
      h = Math.round(g / 1e3),
      m = sp(),
      n = !1,
      p = !1,
      q = function () {
        if (tp(m)) {
          var r = qo(c, g, !0);
          r.yb = m;
          for (
            var t = function (F, M) {
                var N = Ap(F, f);
                N && (go(N, M, r), "gb" !== F && (n = !0));
              },
              u = function (F) {
                var M = ["GCL", h, F];
                0 < e.length && M.push(e.join("."));
                return M.join(".");
              },
              v = ma(["aw", "dc", "gf", "ha", "gp"]),
              w = v.next();
            !w.done;
            w = v.next()
          ) {
            var x = w.value;
            a[x] && t(x, u(a[x][0]));
          }
          if (!n && a.gb) {
            var y = a.gb[0],
              B = Ap("gb", f);
            (!b &&
              vp(B).some(function (F) {
                return F.da === y && F.labels && 0 < F.labels.length;
              })) ||
              t("gb", u(y));
          }
        }
        if (!p && Oi(6) && a.gbraid && tp("ad_storage") && ((p = !0), !n)) {
          var A = a.gbraid,
            E = Ap("ag", f);
          if (
            b ||
            !(Oi(6) ? Bp(E) : []).some(function (F) {
              return F.da === A && F.labels && 0 < F.labels.length;
            })
          ) {
            var D = {},
              C = ((D.k = A), (D.i = h), (D.b = e), D);
            op(E, C, c, g);
          }
        }
        Mp(a, f, g, c);
      };
    Cl(function () {
      q();
      tp(m) || Dl(q, m);
    }, m);
  }
  function Mp(a, b, c, d) {
    if (Oi(9) && void 0 !== a.gad_source && tp("ad_storage")) {
      var e = Ap("gs", b);
      if (e) {
        var f = Math.round((zb() - (Ic() || 0)) / 1e3),
          g = {},
          h = ((g.k = a.gad_source), (g.i = f), g);
        op(e, h, d, c);
      }
    }
  }
  var Op = function (a, b) {
      var c = Go(!0);
      up(function () {
        for (var d = zp(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== rp[f]) {
            var g = Ap(f, d),
              h = c[g];
            if (h) {
              var m = Math.min(Np(h), zb()),
                n;
              b: {
                for (
                  var p = m, q = Vn(g, H.cookie, void 0, sp()), r = 0;
                  r < q.length;
                  ++r
                )
                  if (Np(q[r]) > p) {
                    n = !0;
                    break b;
                  }
                n = !1;
              }
              if (!n) {
                var t = qo(b, m, !0);
                t.yb = sp();
                go(g, h, t);
              }
            }
          }
        }
        Kp(Ip(c.gclid, c.gclsrc), !1, b);
      }, sp());
    },
    Pp = function (a) {
      var b = [];
      Oi(6) && b.push("ag");
      if (0 !== b.length) {
        var c = Go(!0),
          d = zp(a.prefix);
        up(
          function () {
            for (var e = 0; e < b.length; ++e) {
              var f = Ap(b[e], d);
              if (f) {
                var g = c[f];
                if (g) {
                  var h = lp(g);
                  if (h) {
                    var m = Ep(h);
                    m || (m = zb());
                    var n;
                    a: {
                      for (var p = m, q = np(f), r = 0; r < q.length; ++r)
                        if (Ep(q[r]) > p) {
                          n = !0;
                          break a;
                        }
                      n = !1;
                    }
                    if (n) break;
                    h.i = Math.round(m / 1e3);
                    op(f, h, a, m);
                  }
                }
              }
            }
          },
          ["ad_storage"]
        );
      }
    },
    Ap = function (a, b) {
      var c = rp[a];
      if (void 0 !== c) return b + c;
    },
    Np = function (a) {
      return 0 !== Qp(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function Ep(a) {
    return a ? 1e3 * (Number(a.i) || 0) : 0;
  }
  function Fp(a) {
    var b = Qp(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          da: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Qp(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !qp.test(a[2])
      ? []
      : a;
  }
  var Rp = function (a, b, c, d, e) {
      if (Array.isArray(b) && Tn(G)) {
        var f = zp(e),
          g = function () {
            for (var h = {}, m = 0; m < a.length; ++m) {
              var n = Ap(a[m], f);
              if (n) {
                var p = Vn(n, H.cookie, void 0, sp());
                p.length && (h[n] = p.sort()[p.length - 1]);
              }
            }
            return h;
          };
        up(function () {
          No(g, b, c, d);
        }, sp());
      }
    },
    Sp = function (a, b, c, d) {
      if (Array.isArray(a) && Tn(G)) {
        var e = [];
        Oi(6) && e.push("ag");
        if (0 !== e.length) {
          var f = zp(d),
            g = function () {
              for (var h = {}, m = 0; m < e.length; ++m) {
                var n = Ap(e[m], f);
                if (!n) return;
                var p = np(n);
                if (p.length) {
                  var q = p.sort(function (r, t) {
                    return Ep(t) - Ep(r);
                  })[0];
                  h[n] = mp(q);
                }
              }
              return h;
            };
          up(
            function () {
              No(g, a, b, c);
            },
            ["ad_storage"]
          );
        }
      }
    },
    Gp = function (a) {
      return a.filter(function (b) {
        return qp.test(b.da);
      });
    },
    Tp = function (a, b) {
      if (Tn(G)) {
        for (var c = zp(b.prefix), d = {}, e = 0; e < a.length; e++)
          rp[a[e]] && (d[a[e]] = rp[a[e]]);
        up(function () {
          z(d, function (f, g) {
            var h = Vn(c + g, H.cookie, void 0, sp());
            h.sort(function (t, u) {
              return Np(u) - Np(t);
            });
            if (h.length) {
              var m = h[0],
                n = Np(m),
                p = 0 !== Qp(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== Qp(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              Kp(q, !0, b, n, p);
            }
          });
        }, sp());
      }
    },
    Up = function (a) {
      var b = [],
        c = [];
      Oi(6) && (b.push("ag"), c.push("gbraid"));
      0 !== b.length &&
        up(
          function () {
            for (var d = zp(a.prefix), e = 0; e < b.length; ++e) {
              var f = Ap(b[e], d);
              if (!f) break;
              var g = np(f);
              if (g.length) {
                var h = g.sort(function (q, r) {
                    return Ep(r) - Ep(q);
                  })[0],
                  m = Ep(h),
                  n = h.b,
                  p = {};
                p[c[e]] = h.k;
                Kp(p, !0, a, m, n);
              }
            }
          },
          ["ad_storage"]
        );
    };
  function Vp(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Wp = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (zl()) {
        var c = Jp();
        if (Vp(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.wbraid);
          Oi(6) && b(d, "gbraid", c.gbraid);
          Oo(function () {
            return d;
          }, 3);
          Oo(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    Xp = function (a) {
      if (!Oi(1)) return null;
      var b = Go(!0).gad_source;
      if (null != b) return (G.location.hash = ""), b;
      if (Oi(2)) {
        var c = ij(G.location.href);
        b = ej(c, "query", !1, void 0, "gad_source");
        if (null != b) return b;
        var d = Jp();
        if (Vp(d, a)) return "0";
      }
      return null;
    },
    Yp = function (a) {
      var b = Xp(a);
      null != b &&
        Oo(function () {
          var c = {};
          return (c.gad_source = b), c;
        }, 4);
    };
  function Zp(a, b, c) {
    var d = [];
    if (0 === b.length) return d;
    for (var e = {}, f = 0; f < b.length; f++) {
      var g = b[f],
        h = g.type ? g.type : "gcl";
      -1 === (g.labels || []).indexOf(c)
        ? (a.push(0), e[h] || d.push(g))
        : a.push(1);
      e[h] = !0;
    }
    return d;
  }
  var $p = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!tp(sp())) return e;
      var f = vp(a),
        g = Zp(e, f, b);
      if (g.length && !d)
        for (var h = ma(g), m = h.next(); !m.done; m = h.next()) {
          var n = m.value,
            p = n.timestamp,
            q = [n.version, Math.round(p / 1e3), n.da]
              .concat(n.labels || [], [b])
              .join("."),
            r = qo(c, p, !0);
          r.yb = sp();
          go(a, q, r);
        }
      return e;
    },
    aq = function (a, b) {
      var c = [];
      b = b || {};
      var d = xp(b),
        e = Zp(c, d, a);
      if (e.length)
        for (var f = ma(e), g = f.next(); !g.done; g = f.next()) {
          var h = g.value,
            m = zp(b.prefix),
            n = Ap(h.type, m);
          if (!n) break;
          var p = h,
            q = p.version,
            r = p.da,
            t = p.labels,
            u = p.timestamp,
            v = Math.round(u / 1e3);
          if ("ag" === h.type) {
            var w = {},
              x = ((w.k = r), (w.i = v), (w.b = (t || []).concat([a])), w);
            op(n, x, b, u);
          } else if ("gb" === h.type) {
            var y = [q, v, r].concat(t || [], [a]).join("."),
              B = qo(b, u, !0);
            B.yb = sp();
            go(n, y, B);
          }
        }
      return c;
    };
  function bq(a, b) {
    var c = zp(b),
      d = Ap(a, c);
    if (!d) return 0;
    var e;
    e = "ag" === a ? (Oi(6) ? Bp(d) : []) : vp(d);
    for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function cq(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var dq = function (a, b) {
    b = void 0 === b ? !1 : b;
    var c = Math.max(bq("aw", a), cq(tp(sp()) ? ep() : {})),
      d = Math.max(bq("gb", a), cq(tp(sp()) ? ep("_gac_gb", !0) : {}));
    Oi(6) && b && (d = Math.max(d, bq("ag", a)));
    return d > c;
  };
  var rq,
    sq = !1;
  function tq() {
    sq = !0;
    rq = rq || {};
  }
  function uq(a) {
    sq || tq();
    return rq[a];
  }
  var vq = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.o = c;
    this.D = {};
    this.metadata = k(c.eventMetadata || {});
    this.isAborted = !1;
  };
  vq.prototype.copyToHitData = function (a, b, c) {
    var d = V(this.o, a);
    void 0 === d && (d = b);
    if (void 0 !== d && void 0 !== c && l(d) && T(48))
      try {
        d = c(d);
      } catch (e) {}
    void 0 !== d && (this.D[a] = d);
  };
  var wq = function (a, b, c) {
    var d = uq(a.target.ka);
    return d && void 0 !== d[b] ? d[b] : c;
  };
  var xq = function () {
    di.dedupe_gclid || (di.dedupe_gclid = "" + no());
    return di.dedupe_gclid;
  };
  var yq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    zq = /^www.googleadservices.com$/,
    Bq = function (a) {
      a || (a = Aq());
      return a.Qm
        ? !1
        : a.Hl || a.Il || a.Kl || a.Jl || a.mh || a.jh || a.vl || a.zl
        ? !0
        : !1;
    },
    Aq = function () {
      var a = {},
        b = Go(!0);
      a.Qm = !!b._up;
      var c = Jp();
      a.Hl = void 0 !== c.aw;
      a.Il = void 0 !== c.dc;
      a.Kl = void 0 !== c.wbraid;
      a.Jl = void 0 !== c.gbraid;
      var d = ij(G.location.href),
        e = ej(d, "query", !1, void 0, "gad");
      a.mh = void 0 !== e;
      if (!a.mh) {
        var f = d.hash.replace("#", ""),
          g = bj(f, "gad", !1);
        a.mh = void 0 !== g;
      }
      a.jh = ej(d, "query", !1, void 0, "gad_source");
      if (void 0 === a.jh) {
        var h = d.hash.replace("#", ""),
          m = bj(h, "gad_source", !1);
        a.jh = m;
      }
      var n = H.referrer ? ej(ij(H.referrer), "host") : "";
      a.zl = yq.test(n);
      a.vl = zq.test(n);
      return a;
    };
  var Cq = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    Dq = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    Eq = /^\d+\.fls\.doubleclick\.net$/,
    Fq = /;gac=([^;?]+)/,
    Gq = /;gacgb=([^;?]+)/,
    Hq = /;gclaw=([^;?]+)/,
    Iq = /;gclgb=([^;?]+)/;
  function Jq(a, b) {
    if (Eq.test(H.location.host)) {
      var c = H.location.href.match(b);
      return c && 2 == c.length && c[1].match(Cq)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].da);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var Kq = function (a, b, c) {
    var d = tp(sp()) ? ep("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var h = $p("_gac_gb_" + g, a, b, c);
      f =
        f ||
        (0 !== h.length &&
          h.some(function (m) {
            return 1 === m;
          }));
      e.push(g + ":" + h.join(","));
    }
    return { sl: f ? e.join(";") : "", rl: Jq(d, Gq) };
  };
  function Lq(a, b, c) {
    if (Eq.test(H.location.host)) {
      var d = H.location.href.match(c);
      if (d && 2 == d.length && d[1].match(Dq)) return [{ da: d[1] }];
    } else {
      if ("gclid" === b) return vp((a || "_gcl") + "_aw");
      if ("wbraid" === b) return vp((a || "_gcl") + "_gb");
      if ("braids" === b) return xp({ prefix: a });
    }
    return [];
  }
  var Mq = function (a) {
      return Lq(a, "gclid", Hq)
        .map(function (b) {
          return b.da;
        })
        .join(".");
    },
    Nq = function (a) {
      return Lq(a, "wbraid", Iq)
        .map(function (b) {
          return b.da;
        })
        .join(".");
    },
    Oq = function (a) {
      return Lq(a, "braids", Iq)
        .map(function (b) {
          return b.da;
        })
        .join(".");
    },
    Pq = function (a, b) {
      b = void 0 === b ? !1 : b;
      return Eq.test(H.location.host)
        ? !(Hq.test(H.location.href) || Fq.test(H.location.href))
        : dq(a, b);
    },
    Qq = function (a, b) {
      var c = T(54),
        d;
      d = (void 0 === c ? 0 : c)
        ? aq(a, b)
        : $p(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === d.length ||
        d.every(function (e) {
          return 0 === e;
        })
        ? ""
        : d.join(".");
    };
  var Rq = function () {
    if (nb(G.__uspapi)) {
      var a = "";
      try {
        G.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  function Zq(a) {
    var b = V(a.o, Q.g.Fb),
      c = V(a.o, Q.g.Ub);
    b && !c
      ? (a.eventName !== Q.g.fa && a.eventName !== Q.g.Oc && P(131),
        (a.isAborted = !0))
      : !b && c && (P(132), (a.isAborted = !0));
  }
  function $q(a) {
    var b = W(Q.g.R) ? di.pscdl : "denied";
    null != b && (a.D[Q.g.Xe] = b);
  }
  function ar(a) {
    if (T(71)) {
      var b = $k(!0);
      a.D[Q.g.Eb] = b;
    }
  }
  var ir = function (a, b, c, d) {
    var e = uc(),
      f;
    if (1 === e)
      a: {
        var g = oi;
        g = g.toLowerCase();
        for (
          var h = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = H.getElementsByTagName("script"),
            q = 0;
          q < p.length && 100 > q;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (0 === r.indexOf(m)) {
              f = 3;
              break a;
            }
            1 === n && 0 === r.indexOf(h) && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (2 === f || d || "http:" != G.location.protocol ? a : b) + c;
  };
  function vr(a) {
    return {
      getDestinationId: function () {
        return a.target.ka;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.D[b];
      },
      setHitData: function (b, c) {
        a.D[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.D[b] && (a.D[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return V(a.o, b);
      },
      Cj: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.D);
      },
    };
  }
  var Cr = function () {
      var a = G.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    Dr = function (a) {
      if (H.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !G.getComputedStyle)
        return !0;
      var c = G.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var h = g.indexOf("opacity(");
          0 <= h &&
            ((g = g.substring(h + 8, g.indexOf(")", h))),
            "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = G.getComputedStyle(d, null));
      }
      return !1;
    };
  var Ds = {
    Ok: Number("") || 500,
    Ck: Number("") || 5e3,
    bj: Number("20") || 10,
    gk: Number("") || 5e3,
  };
  function Es(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var Fs = function (a, b) {
    var c;
    return c;
  };
  var Gs = "https://" + ci.Gd + "/gtm/static/",
    Hs = Number("") || 5,
    Is = Number("") || 50,
    Js = 0,
    Ks = qb(),
    Ls = null,
    Ms;
  function Xs() {
    var a = !1;
    return a;
  }
  function Ys(a) {
    var b = Math.round(zb());
  }
  function Zs(a, b, c) {}
  function Us(a, b, c, d) {}
  function Ns(a, b, c, d, e) {}
  function $s(a, b, c, d) {}
  function at(a, b, c, d) {}
  function bt(a) {
    var b;
    if (xj) {
      var c;
      b = !!(null == a
        ? 0
        : null == (c = a.eventMetadata.is_sw_selected)
        ? 0
        : c[0]);
    } else b = T(64) && T(74) && !nj();
    return b;
  }
  var ct = void 0;
  function dt(a) {
    var b = [];
    return b;
  }
  var et = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  Lk();
  Ok() || Ik("iPod");
  Ik("iPad");
  !Ik("Android") || Mk() || Lk() || Kk() || Ik("Silk");
  Mk();
  !Ik("Safari") ||
    Mk() ||
    (Jk() ? 0 : Ik("Coast")) ||
    Kk() ||
    (Jk() ? 0 : Ik("Edge")) ||
    (Jk() ? Hk("Microsoft Edge") : Ik("Edg/")) ||
    (Jk() ? Hk("Opera") : Ik("OPR")) ||
    Lk() ||
    Ik("Silk") ||
    Ik("Android") ||
    Pk();
  var ft = {},
    gt = null,
    ht = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!gt) {
        gt = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            h = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          5 > m;
          m++
        ) {
          var n = g.concat(h[m].split(""));
          ft[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === gt[q] && (gt[q] = p);
          }
        }
      }
      for (
        var r = ft[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          B = b[v + 2],
          A = r[x >> 2],
          E = r[((x & 3) << 4) | (y >> 4)],
          D = r[((y & 15) << 2) | (B >> 6)],
          C = r[B & 63];
        t[w++] = "" + A + E + D + C;
      }
      var F = 0,
        M = u;
      switch (b.length - v) {
        case 2:
          (F = b[v + 1]), (M = r[(F & 15) << 2] || u);
        case 1:
          var N = b[v];
          t[w] = "" + r[N >> 2] + r[((N & 3) << 4) | (F >> 4)] + M + u;
      }
      return t.join("");
    };
  Object.freeze(new (function () {})());
  Object.freeze(new (function () {})());
  var it =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function jt(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  }
  function kt() {
    var a = G.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function lt() {
    var a, b;
    return null !=
      (b = null == (a = G.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function mt(a) {
    var b, c;
    return (
      "function" ===
      typeof (null == (b = a.navigator)
        ? void 0
        : null == (c = b.userAgentData)
        ? void 0
        : c.getHighEntropyValues)
    );
  }
  function nt() {
    var a = G;
    if (!mt(a)) return null;
    var b = jt(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(it)
      .then(function (d) {
        null != b.uach || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  function tt() {
    return "attribution-reporting";
  }
  function ut(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var vt = !1;
  function wt() {
    if (ut("join-ad-interest-group") && nb(lc.joinAdInterestGroup)) return !0;
    vt || (Yk(""), (vt = !0));
    return ut("join-ad-interest-group") && nb(lc.joinAdInterestGroup);
  }
  function xt(a, b) {
    var c = void 0 === Ni[3] ? 1 : Ni[3],
      d = 'iframe[data-tagging-id="' + b + '"]',
      e = [];
    try {
      if (1 === c) {
        var f = H.querySelector(d);
        f && (e = [f]);
      } else e = Array.from(H.querySelectorAll(d));
    } catch (q) {}
    var g;
    a: {
      try {
        g = H.querySelectorAll(
          'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
        );
        break a;
      } catch (q) {}
      g = void 0;
    }
    var h = g,
      m =
        ((null == h ? void 0 : h.length) || 0) >=
        (void 0 === Ni[2] ? 50 : Ni[2]),
      n;
    if ((n = 1 <= e.length)) {
      var p = Number(e[e.length - 1].dataset.loadTime);
      p && zb() - p < (void 0 === Ni[1] ? 6e4 : Ni[1])
        ? (ib("TAGGING", 9), (n = !0))
        : (n = !1);
    }
    if (!n) {
      if (1 === c)
        if (1 <= e.length) zt(e[0]);
        else {
          if (m) {
            ib("TAGGING", 10);
            return;
          }
        }
      else e.length >= c ? zt(e[0]) : m && zt(h[0]);
      vc(
        a,
        void 0,
        { allow: "join-ad-interest-group" },
        { taggingId: b, loadTime: zb() }
      );
    }
  }
  function zt(a) {
    try {
      a.parentNode.removeChild(a);
    } catch (b) {}
  }
  function At() {
    return "https://td.doubleclick.net";
  }
  var uu = {
    N: {
      Th: "ads_conversion_hit",
      Fd: "container_execute_start",
      Wh: "container_setup_end",
      Tf: "container_setup_start",
      Uh: "container_blocking_end",
      Vh: "container_execute_end",
      Xh: "container_yield_end",
      Uf: "container_yield_start",
      Ui: "event_execute_end",
      Ti: "event_evaluation_end",
      Kg: "event_evaluation_start",
      Vi: "event_setup_end",
      he: "event_setup_start",
      Wi: "ga4_conversion_hit",
      je: "page_load",
      pn: "pageview",
      ac: "snippet_load",
      nj: "tag_callback_error",
      oj: "tag_callback_failure",
      pj: "tag_callback_success",
      qj: "tag_execute_end",
      rd: "tag_execute_start",
    },
  };
  function vu() {
    function a(c, d) {
      var e = jb(d);
      e && b.push([c, e]);
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b;
  }
  var wu = !1;
  var dv = function (a, b) {},
    ev = function (a, b) {},
    fv = function (a, b) {},
    gv = function (a, b) {},
    hv = function () {
      var a = {};
      return a;
    },
    Wu = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    iv = function () {},
    jv = function (a, b) {},
    kv = function (a, b, c) {},
    lv = function () {};
  function mv(a, b) {
    var c = G,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  }
  var nv = function (a, b, c) {
    var d = Tk(a, "fmt");
    if (b) {
      var e = Tk(a, "random"),
        f = Tk(a, "label") || "";
      if (!e) return !1;
      var g = ht(
        decodeURIComponent(f.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(e.replace(/\+/g, " "))
      );
      if (!mv(g, b)) return !1;
    }
    d && 4 != d && (a = Vk(a, "rfmt", d));
    var h = Vk(a, "fmt", 4);
    tc(
      h,
      function () {
        G.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((G.google_noFurtherRedirects = null), b());
      },
      void 0,
      c,
      H.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  function Ev(a, b) {
    if (data.entities) {
      var c = data.entities[a];
      if (c) return c[b];
    }
  }
  var Gv = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      Fv().addRestriction(0, a, b, c);
    },
    Hv = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      Fv().addRestriction(1, a, b, c);
    },
    Iv = function () {
      var a = Kj();
      return Fv().getRestrictions(1, a);
    },
    Jv = function () {
      this.m = {};
      this.F = {};
    },
    Kv = function (a, b) {
      var c = a.m[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.m[b] = c));
      return c;
    };
  Jv.prototype.addRestriction = function (a, b, c, d) {
    d = void 0 === d ? !1 : d;
    if (!d || !this.F[b]) {
      var e = Kv(this, b);
      0 === a
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : 1 === a &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  Jv.prototype.getRestrictions = function (a, b) {
    var c = Kv(this, b);
    if (0 === a) {
      var d, e;
      return [].concat(
        oa(
          (null == c
            ? void 0
            : null == (d = c._entity)
            ? void 0
            : d.internal) || []
        ),
        oa(
          (null == c
            ? void 0
            : null == (e = c._entity)
            ? void 0
            : e.external) || []
        )
      );
    }
    if (1 === a) {
      var f, g;
      return [].concat(
        oa(
          (null == c ? void 0 : null == (f = c._event) ? void 0 : f.internal) ||
            []
        ),
        oa(
          (null == c ? void 0 : null == (g = c._event) ? void 0 : g.external) ||
            []
        )
      );
    }
    return [];
  };
  Jv.prototype.getExternalRestrictions = function (a, b) {
    var c = Kv(this, b),
      d,
      e;
    return 0 === a
      ? (null == c ? void 0 : null == (d = c._entity) ? void 0 : d.external) ||
          []
      : (null == c ? void 0 : null == (e = c._event) ? void 0 : e.external) ||
          [];
  };
  Jv.prototype.removeExternalRestrictions = function (a) {
    var b = Kv(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.F[a] = !0;
  };
  function Fv() {
    var a = di.r;
    a || ((a = new Jv()), (di.r = a));
    return a;
  }
  var Lv = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Mv = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Nv = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Ov =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      ),
    Qv = function () {
      var a = Ci("gtm.allowlist") || Ci("gtm.whitelist");
      a && P(9);
      ii && (a = ["google", "gtagfl", "lcl", "zone"]);
      Lv.test(G.location && G.location.hostname) &&
        (ii
          ? P(116)
          : (P(117),
            Pv &&
              ((a = []),
              window.console &&
                window.console.log &&
                window.console.log("GTM blocked. See go/13687728."))));
      var b = a && Db(wb(a), Mv),
        c = Ci("gtm.blocklist") || Ci("gtm.blacklist");
      c || ((c = Ci("tagTypeBlacklist")) && P(3));
      c ? P(8) : (c = []);
      Lv.test(G.location && G.location.hostname) &&
        ((c = wb(c)),
        c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= wb(c).indexOf("google") && P(2);
      var d = c && Db(wb(c), Nv),
        e = {};
      return function (f) {
        var g = f && f[ye.ra];
        if (!g || "string" != typeof g) return !0;
        g = g.replace(/^_*/, "");
        if (void 0 !== e[g]) return e[g];
        var h = si[g] || [],
          m = !0;
        if (a) {
          var n;
          if ((n = m))
            a: {
              if (0 > b.indexOf(g))
                if (h && 0 < h.length)
                  for (var p = 0; p < h.length; p++) {
                    if (0 > b.indexOf(h[p])) {
                      P(11);
                      n = !1;
                      break a;
                    }
                  }
                else {
                  n = !1;
                  break a;
                }
              n = !0;
            }
          m = n;
        }
        var q = !1;
        if (c) {
          var r = 0 <= d.indexOf(g);
          if (r) q = r;
          else {
            var t = sb(d, h || []);
            t && P(10);
            q = t;
          }
        }
        var u = !m || q;
        u ||
          !(0 <= h.indexOf("sandboxedScripts")) ||
          (b && -1 !== b.indexOf("sandboxedScripts")) ||
          (u = sb(d, Ov));
        return (e[g] = u);
      };
    },
    Pv = !1;
  Pv = !0;
  var Rv = function () {
    xj &&
      Gv(Kj(), function (a) {
        var b = kf(a.entityId),
          c;
        if (pf(b)) {
          var d = b[ye.ra];
          if (!d) throw "Error: No function name given for function call.";
          var e = bf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!Ev(b[ye.ra], 4);
        return c;
      });
  };
  var Tv = function (a, b, c, d, e) {
      if (!Sv()) {
        var f = d.siloed ? zj(a) : a;
        if (!Tj(f)) {
          var g = "?id=" + encodeURIComponent(a) + "&l=" + ci.Wa,
            h = 0 === a.indexOf("GTM-");
          h || (g += "&cx=c");
          T(57) && (g += "&gtm=" + Nn());
          var m = oj();
          m && (g += "&sign=" + ci.Cf);
          var n = c ? "/gtag/js" : "/gtm.js",
            p = nj() ? mj(b, n + g) : void 0;
          if (!p) {
            var q = ci.Gd + n;
            m && nc && h
              ? ((q = nc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]),
                (p = ir("https://", "http://", q + g)))
              : (p = vi.F ? wi() + n + g : ir("https://", "http://", q + g));
          }
          d.siloed && Vj({ ctid: f, isDestination: !1 });
          var r = Mj();
          tj().container[f] = { state: 1, context: d, parent: r };
          uj({ ctid: f, isDestination: !1 }, e);
          tc(p);
        }
      }
    },
    Uv = function (a, b, c, d) {
      if (!Sv()) {
        var e = c.siloed ? zj(a) : a;
        if (!Uj(e))
          if (!c.siloed && Wj())
            (tj().destination[e] = {
              state: 0,
              transportUrl: b,
              context: c,
              parent: Mj(),
            }),
              uj({ ctid: e, isDestination: !0 }, d),
              P(91);
          else {
            var f =
              "/gtag/destination?id=" +
              encodeURIComponent(a) +
              "&l=" +
              ci.Wa +
              "&cx=c";
            T(57) && (f += "&gtm=" + Nn());
            oj() && (f += "&sign=" + ci.Cf);
            var g = nj() ? mj(b, f) : void 0;
            g || (g = vi.F ? wi() + f : ir("https://", "http://", ci.Gd + f));
            c.siloed && Vj({ ctid: e, isDestination: !0 });
            tj().destination[e] = { state: 1, context: c, parent: Mj() };
            uj({ ctid: e, isDestination: !0 }, d);
            tc(g);
          }
      }
    };
  function Sv() {
    if (Ln()) {
      return !0;
    }
    return !1;
  }
  var Vv = !1,
    Wv = 0,
    Xv = [];
  function Yv(a) {
    if (!Vv) {
      var b = H.createEventObject,
        c = "complete" === H.readyState,
        d = "interactive" === H.readyState;
      if (!a || "readystatechange" !== a.type || c || (!b && d)) {
        Vv = !0;
        for (var e = 0; e < Xv.length; e++) I(Xv[e]);
      }
      Xv.push = function () {
        for (var f = za.apply(0, arguments), g = 0; g < f.length; g++) I(f[g]);
        return 0;
      };
    }
  }
  function Zv() {
    if (!Vv && 140 > Wv) {
      Wv++;
      try {
        var a, b;
        null == (b = (a = H.documentElement).doScroll) || b.call(a, "left");
        Yv();
      } catch (c) {
        G.setTimeout(Zv, 50);
      }
    }
  }
  function $v(a) {
    Vv ? a() : Xv.push(a);
  }
  var bw = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: Jj(),
    };
  };
  var dw = function (a, b) {
      this.m = !1;
      this.M = [];
      this.T = { tags: [] };
      this.ba = !1;
      this.F = this.H = 0;
      cw(this, a, b);
    },
    ew = function (a, b, c, d) {
      if (fi.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Va(d) && (e = k(d, e));
      e.id = c;
      e.status = "timeout";
      return a.T.tags.push(e) - 1;
    },
    fw = function (a, b, c, d) {
      var e = a.T.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    gw = function (a) {
      if (!a.m) {
        for (var b = a.M, c = 0; c < b.length; c++) b[c]();
        a.m = !0;
        a.M.length = 0;
      }
    },
    cw = function (a, b, c) {
      void 0 !== b && a.Ef(b);
      c &&
        G.setTimeout(function () {
          return gw(a);
        }, Number(c));
    };
  dw.prototype.Ef = function (a) {
    var b = this,
      c = Bb(function () {
        return I(function () {
          a(Jj(), b.T);
        });
      });
    this.m ? c() : this.M.push(c);
  };
  var hw = function (a) {
      a.H++;
      return Bb(function () {
        a.F++;
        a.ba && a.F >= a.H && gw(a);
      });
    },
    iw = function (a) {
      a.ba = !0;
      a.F >= a.H && gw(a);
    };
  var jw = {},
    Mw = function () {
      return G[Gw()];
    };
  function Gw() {
    return G.GoogleAnalyticsObject || "ga";
  }
  var Pw = function () {
      var a = Jj();
    },
    Qw = function (a, b) {
      return function () {
        var c = Mw(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              h = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", h, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var Vw = ["es", "1"],
    Ww = {},
    Xw = {};
  function Yw(a, b) {
    if (gk) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Ww[a] = [
        ["e", c],
        ["eid", a],
      ];
      rk(a);
    }
  }
  function Zw(a) {
    var b = a.eventId,
      c = a.Ab;
    if (!Ww[b]) return [];
    var d = [];
    Xw[b] || d.push(Vw);
    d.push.apply(d, oa(Ww[b]));
    c && (Xw[b] = !0);
    return d;
  }
  var $w = {},
    ax = {},
    bx = {};
  function cx(a, b, c, d) {
    gk &&
      T(68) &&
      ((void 0 === d ? 0 : d)
        ? ((bx[b] = bx[b] || 0), ++bx[b])
        : void 0 !== c
        ? ((ax[a] = ax[a] || {}), (ax[a][b] = Math.round(c)))
        : (($w[a] = $w[a] || {}), ($w[a][b] = ($w[a][b] || 0) + 1)));
  }
  function dx(a) {
    var b = a.eventId,
      c = a.Ab,
      d = $w[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete $w[b];
    return e.length ? [["md", e.join(".")]] : [];
  }
  function ex(a) {
    var b = a.eventId,
      c = a.Ab,
      d = ax[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete ax[b];
    return e.length ? [["mtd", e.join(".")]] : [];
  }
  function fx() {
    for (
      var a = [], b = ma(Object.keys(bx)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push("" + d + bx[d]);
    }
    return a.length ? [["mec", a.join(".")]] : [];
  }
  var gx = {},
    hx = {};
  function ix(a, b, c) {
    if (gk && b) {
      var d = rj(b);
      gx[a] = gx[a] || [];
      gx[a].push(c + d);
      var e = (pf(b) ? "1" : "2") + d;
      hx[a] = hx[a] || [];
      hx[a].push(e);
      rk(a);
    }
  }
  function jx(a) {
    var b = a.eventId,
      c = a.Ab,
      d = [],
      e = gx[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = hx[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete gx[b], delete hx[b]);
    return d;
  }
  function kx(a, b, c, d) {
    var e = $e[a],
      f = lx(a, b, c, d);
    if (!f) return null;
    var g = mf(e[ye.lj], c, []);
    if (g && g.length) {
      var h = g[0];
      f = kx(
        h.index,
        {
          onSuccess: f,
          onFailure: 1 === h.Bj ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function lx(a, b, c, d) {
    function e() {
      if (f[ye.Gk]) h();
      else {
        var w = nf(f, c, []),
          x = w[ye.dk];
        if (null != x)
          for (var y = 0; y < x.length; y++)
            if (!W(x[y])) {
              h();
              return;
            }
        var B = ew(c.bc, String(f[ye.ra]), Number(f[ye.oe]), w[ye.Hk]),
          A = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!A) {
            A = !0;
            var C = zb() - D;
            ix(c.id, $e[a], "5");
            fw(c.bc, B, "success", C);
            T(58) && kv(c, f, uu.N.pj);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!A) {
            A = !0;
            var C = zb() - D;
            ix(c.id, $e[a], "6");
            fw(c.bc, B, "failure", C);
            T(58) && kv(c, f, uu.N.oj);
            h();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        ix(c.id, f, "1");
        var E = function () {
          Si(3);
          var C = zb() - D;
          ix(c.id, f, "7");
          fw(c.bc, B, "exception", C);
          T(58) && kv(c, f, uu.N.nj);
          A || ((A = !0), h());
        };
        T(58) && jv(c, f);
        var D = zb();
        try {
          lf(w, { event: c, index: a, type: 1 });
        } catch (C) {
          E(C);
        }
        T(58) && kv(c, f, uu.N.qj);
      }
    }
    var f = $e[a],
      g = b.onSuccess,
      h = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = mf(f[ye.rj], c, []);
    if (n && n.length) {
      var p = n[0],
        q = kx(p.index, { onSuccess: g, onFailure: h, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.Bj ? m : q;
    }
    if (f[ye.ej] || f[ye.Jk]) {
      var r = f[ye.ej] ? af : c.Hm,
        t = g,
        u = h;
      if (!r[a]) {
        e = Bb(e);
        var v = mx(a, r, e);
        g = v.onSuccess;
        h = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function mx(a, b, c) {
    var d = [],
      e = [];
    b[a] = nx(d, e, c);
    return {
      onSuccess: function () {
        b[a] = ox;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = px;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function nx(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function ox(a) {
    a();
  }
  function px(a, b) {
    b();
  }
  var sx = function (a, b) {
    for (var c = [], d = 0; d < $e.length; d++)
      if (a[d]) {
        var e = $e[d];
        var f = hw(b.bc);
        try {
          var g = kx(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var h = e[ye.ra];
            if (!h) throw "Error: No function name given for function call.";
            var m = bf[h];
            c.push({
              Uj: d,
              Mj: (m ? m.priorityOverride || 0 : 0) || Ev(e[ye.ra], 1) || 0,
              execute: g,
            });
          } else qx(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(rx);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function rx(a, b) {
    var c,
      d = b.Mj,
      e = a.Mj;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Uj,
        h = b.Uj;
      f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
  }
  function qx(a, b) {
    if (gk) {
      var c = function (d) {
        var e = b.isBlocked($e[d]) ? "3" : "4",
          f = mf($e[d][ye.lj], b, []);
        f && f.length && c(f[0].index);
        ix(b.id, $e[d], e);
        var g = mf($e[d][ye.rj], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var vx = !1,
    tx;
  var Bx = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (T(58)) {
    }
    if ("gtm.js" === d) {
      if (vx) return !1;
      vx = !0;
    }
    var e = !1,
      f = Iv(),
      g = k(a);
    if (
      !f.every(function (t) {
        return t({ originalEventData: g });
      })
    ) {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
        return !1;
      e = !0;
    }
    Yw(b, d);
    var h = a.eventCallback,
      m = a.eventTimeout,
      n = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: xx(g, e),
        Hm: [],
        logMacroError: function () {
          P(6);
          Si(0);
        },
        cachedModelValues: yx(),
        bc: new dw(function () {
          if (T(58)) {
          }
          h && h.apply(h, [].slice.call(arguments, 0));
        }, m),
        originalEventData: g,
      };
    T(68) && gk && (n.reportMacroDiscrepancy = cx);
    T(58) && fv(n.id, n.name);
    var p = xf(n);
    T(58) && gv(n.id, n.name);
    e && (p = zx(p));
    if (T(58)) {
    }
    var q = sx(p, n),
      r = !1;
    iw(n.bc);
    ("gtm.js" !== d && "gtm.sync" !== d) || Pw();
    return Ax(p, q) || r;
  };
  function yx() {
    var a = {};
    a.event = Hi("event", 1);
    a.ecommerce = Hi("ecommerce", 1);
    a.gtm = Hi("gtm");
    a.eventModel = Hi("eventModel");
    return a;
  }
  function xx(a, b) {
    var c = Qv();
    return function (d) {
      if (c(d)) return !0;
      var e = d && d[ye.ra];
      if (!e || "string" != typeof e) return !0;
      e = e.replace(/^_*/, "");
      var f,
        g = Kj();
      f = Fv().getRestrictions(0, g);
      var h = a;
      b && ((h = k(a)), (h["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
      for (
        var m = si[e] || [], n = ma(f), p = n.next();
        !p.done;
        p = n.next()
      ) {
        var q = p.value;
        try {
          if (!q({ entityId: e, securityGroups: m, originalEventData: h }))
            return !0;
        } catch (r) {
          return !0;
        }
      }
      return !1;
    };
  }
  function zx(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String($e[c][ye.ra]);
        if (ei[d] || void 0 !== $e[c][ye.Kk] || Ev(d, 2)) b[c] = !0;
      }
    return b;
  }
  function Ax(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && $e[c] && !fi[String($e[c][ye.ra])]) return !0;
    return !1;
  }
  function Cx(a, b) {
    return 1 === arguments.length ? Dx("set", a) : Dx("set", a, b);
  }
  function Ex(a, b) {
    return 1 === arguments.length ? Dx("config", a) : Dx("config", a, b);
  }
  function Fx(a, b, c) {
    c = c || {};
    c[Q.g.Wb] = a;
    return Dx("event", b, c);
  }
  function Dx() {
    return arguments;
  }
  var Gx = function () {
    this.m = [];
    this.F = [];
  };
  Gx.prototype.enqueue = function (a, b, c) {
    var d = this.m.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0,
      }),
      f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e };
    this.m.push(f);
    for (var g = 0; g < this.F.length; g++)
      try {
        this.F[g](f);
      } catch (h) {}
  };
  Gx.prototype.listen = function (a) {
    this.F.push(a);
  };
  Gx.prototype.get = function () {
    for (var a = {}, b = 0; b < this.m.length; b++) {
      var c = this.m[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  Gx.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.m.length; d++) {
      var e = this.m[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.m = c;
    return b;
  };
  var Ix = function (a, b, c) {
      c.eventMetadata = c.eventMetadata || {};
      c.eventMetadata.source_canonical_id = Ef.canonicalContainerId;
      Hx().enqueue(a, b, c);
    },
    Kx = function () {
      var a = Jx;
      Hx().listen(a);
    };
  function Hx() {
    var a = di.mb;
    a || ((a = new Gx()), (di.mb = a));
    return a;
  }
  var Af;
  var Lx = {},
    Mx = {},
    Nx = function (a, b) {
      for (
        var c = [], d = [], e = {}, f = 0;
        f < a.length;
        e = { Eh: void 0, lh: void 0 }, f++
      ) {
        var g = a[f];
        if (0 <= g.indexOf("-")) {
          if (((e.Eh = Vl(g, b)), e.Eh)) {
            var h = Cj();
            pb(
              h,
              (function (r) {
                return function (t) {
                  return r.Eh.ka === t;
                };
              })(e)
            )
              ? c.push(g)
              : d.push(g);
          }
        } else {
          var m = Lx[g] || [];
          e.lh = {};
          m.forEach(
            (function (r) {
              return function (t) {
                return (r.lh[t] = !0);
              };
            })(e)
          );
          for (var n = Aj(), p = 0; p < n.length; p++)
            if (e.lh[n[p]]) {
              c = c.concat(Cj());
              break;
            }
          var q = Mx[g] || [];
          q.length && (c = c.concat(q));
        }
      }
      return { Wl: c, Zl: d };
    },
    Ox = function (a) {
      z(Lx, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Px = function (a) {
      z(Mx, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Qx = "HA GF G UA AW DC MC".split(" "),
    Rx = !1,
    Sx = !1,
    Tx = !1,
    Ux = !1;
  function Vx(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: ti() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var Wx = void 0,
    Xx = void 0;
  function Yx(a, b, c) {
    var d = k(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && P(136);
    var e = k(b);
    k(c, e);
    Ix(Ex(Aj()[0], e), a.eventId, d);
  }
  function Zx(a) {
    for (var b = ma([Q.g.ld, Q.g.Jb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || Cm.H[d];
      if (e) return e;
    }
  }
  var $x = [
      Q.g.ld,
      Q.g.Jb,
      Q.g.wc,
      Q.g.kb,
      Q.g.sb,
      Q.g.Da,
      Q.g.xa,
      Q.g.Oa,
      Q.g.Sa,
      Q.g.Sb,
    ],
    ay = {
      config: function (a, b) {
        var c = Vx(a, b);
        if (!(2 > a.length) && l(a[1])) {
          var d = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !Va(a[2])) || 3 < a.length) return;
            d = a[2];
          }
          var e = Vl(a[1], b.isGtmEvent);
          if (e) {
            var f, g, h;
            a: {
              if (!wj.ie) {
                var m = Lj(Mj());
                if (Yj(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  h = { hm: Lj(n), Vl: p };
                  break a;
                }
              }
              h = void 0;
            }
            var q = h;
            q && ((f = q.hm), (g = q.Vl));
            Yw(c.eventId, "gtag.config");
            var r = e.ka,
              t = e.id !== r;
            if (t ? -1 === Cj().indexOf(r) : -1 === Aj().indexOf(r)) {
              if (!b.inheritParentConfig && !d[Q.g.Fb]) {
                var u = Zx(d);
                if (t)
                  Uv(r, u, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (void 0 !== f && -1 !== f.containers.indexOf(r)) {
                  var v = d;
                  Wx ? Yx(b, v, Wx) : Xx || (Xx = k(v));
                } else
                  Tv(r, u, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (f && (P(128), g && P(130), b.inheritParentConfig)) {
                var w;
                var x = d;
                Xx
                  ? (Yx(b, Xx, x), (w = !1))
                  : ((!x[Q.g.Xb] && hi && Wx) || (Wx = k(x)), (w = !0));
                w && f.containers && f.containers.join(",");
                return;
              }
              var y = d;
              if (!Tx && ((Tx = !0), Sx))
                for (var B = ma($x), A = B.next(); !A.done; A = B.next())
                  if (y.hasOwnProperty(A.value)) {
                    il("erc");
                    break;
                  }
              if (hi && !t && !d[Q.g.Xb]) {
                var E = Ux;
                Ux = !0;
                if (E) return;
              }
              Rx || P(43);
              if (!b.noTargetGroup)
                if (t) {
                  Px(e.id);
                  var D = e.id,
                    C = d[Q.g.Yd] || "default";
                  C = String(C).split(",");
                  for (var F = 0; F < C.length; F++) {
                    var M = Mx[C[F]] || [];
                    Mx[C[F]] = M;
                    0 > M.indexOf(D) && M.push(D);
                  }
                } else {
                  Ox(e.id);
                  var N = e.id,
                    U = d[Q.g.Yd] || "default";
                  U = U.toString().split(",");
                  for (var X = 0; X < U.length; X++) {
                    var O = Lx[U[X]] || [];
                    Lx[U[X]] = O;
                    0 > O.indexOf(N) && O.push(N);
                  }
                }
              delete d[Q.g.Yd];
              var R = b.eventMetadata || {};
              R.hasOwnProperty("is_external_event") ||
                (R.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = R;
              delete d[Q.g.dd];
              for (var ia = t ? [e.id] : Cj(), da = 0; da < ia.length; da++) {
                var ca = d,
                  Aa = ia[da],
                  Ca = k(b),
                  xa = Vl(Aa, Ca.isGtmEvent);
                xa && Cm.push("config", [ca], xa, Ca);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          P(39);
          var c = Vx(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[Q.g.P] && P(139), e[Q.g.Aa] && P(140));
          "default" === d
            ? Kl(e)
            : "update" === d
            ? Ll(e, c)
            : "declare" === d && b.fromContainerExecution && Jl(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && l(c)) {
          var d;
          if (2 < a.length) {
            if ((!Va(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = k(e)),
            e[Q.g.dd] && (g.eventCallback = e[Q.g.dd]),
            e[Q.g.Vd] && (g.eventTimeout = e[Q.g.Vd]));
          var h = Vx(a, b),
            m = h.eventId,
            n = h.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[Q.g.Wb];
          void 0 === r &&
            ((r = Ci(Q.g.Wb, 2)), void 0 === r && (r = "default"));
          if (l(r) || Array.isArray(r)) {
            var t;
            t = b.isGtmEvent
              ? l(r)
                ? [r]
                : r
              : r.toString().replace(/\s+/g, "").split(",");
            var u = Nx(t, b.isGtmEvent),
              v = u.Wl,
              w = u.Zl;
            if (w.length)
              for (var x = Zx(q), y = 0; y < w.length; y++) {
                var B = Vl(w[y], b.isGtmEvent);
                B &&
                  Uv(B.ka, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = Wl(v, b.isGtmEvent);
          } else p = void 0;
          var A = p;
          if (A) {
            var E;
            !A.length ||
              (null == (E = b.eventMetadata) ? 0 : E.em_event) ||
              (Sx = !0);
            Yw(m, c);
            for (var D = [], C = 0; C < A.length; C++) {
              var F = A[C],
                M = k(b);
              if (-1 !== Qx.indexOf(Pj(F.prefix))) {
                var N = k(d),
                  U = M.eventMetadata || {};
                U.hasOwnProperty("is_external_event") ||
                  (U.is_external_event = !M.fromContainerExecution);
                M.eventMetadata = U;
                delete N[Q.g.dd];
                Em(c, N, F.id, M);
              }
              D.push(F.id);
            }
            g.eventModel = g.eventModel || {};
            0 < A.length
              ? (g.eventModel[Q.g.Wb] = D.join())
              : delete g.eventModel[Q.g.Wb];
            Rx || P(43);
            void 0 === b.noGtmEvent &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[Q.g.Ub] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        P(53);
        if (4 === a.length && l(a[1]) && l(a[2]) && nb(a[3])) {
          var c = Vl(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Rx || P(43);
            var f = Zx();
            if (
              !pb(Cj(), function (h) {
                return c.ka === h;
              })
            )
              Uv(c.ka, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== Qx.indexOf(Pj(c.prefix))) {
              Vx(a, b);
              var g = {};
              El(k(((g[Q.g.pb] = d), (g[Q.g.Db] = e), g)));
              Fm(
                d,
                function (h) {
                  I(function () {
                    return e(h);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Rx = !0;
          var c = Vx(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (3 === a.length && l(a[1]) && nb(a[2])) {
          if ((Bf(a[1], a[2]), P(74), "all" === a[1])) {
            P(75);
            var b = !1;
            try {
              b = a[2](Jj(), "unknown", {});
            } catch (c) {}
            b || P(76);
          }
        } else P(73);
      },
      set: function (a, b) {
        var c;
        2 == a.length && Va(a[1])
          ? (c = k(a[1]))
          : 3 == a.length &&
            l(a[1]) &&
            ((c = {}),
            Va(a[2]) || Array.isArray(a[2])
              ? (c[a[1]] = k(a[2]))
              : (c[a[1]] = a[2]));
        if (c) {
          var d = Vx(a, b),
            e = d.eventId,
            f = d.priorityId;
          k(c);
          var g = k(c);
          Cm.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    by = { policy: !0 };
  var dy = function (a) {
    if (cy(a)) return a;
    this.value = a;
  };
  dy.prototype.getUntrustedMessageValue = function () {
    return this.value;
  };
  var cy = function (a) {
    return !a || "object" !== Ta(a) || Va(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  dy.prototype.getUntrustedMessageValue = dy.prototype.getUntrustedMessageValue;
  var ey = !1,
    fy = [];
  function gy() {
    if (!ey) {
      ey = !0;
      for (var a = 0; a < fy.length; a++) I(fy[a]);
    }
  }
  function hy(a) {
    ey ? I(a) : fy.push(a);
  }
  var iy = 0,
    jy = {},
    ky = [],
    ly = [],
    my = !1,
    ny = !1;
  function oy(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var py = function (a) {
      return G[ci.Wa].push(a);
    },
    qy = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return py(a);
    },
    ry = function (a, b) {
      if (!ob(b) || 0 > b) b = 0;
      var c = di[ci.Wa],
        d = 0,
        e = !1,
        f = void 0;
      f = G.setTimeout(function () {
        e || ((e = !0), a());
        f = void 0;
      }, b);
      return function () {
        var g = c ? c.subscribers : 1;
        ++d === g &&
          (f && (G.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
      };
    };
  function sy(a, b) {
    var c = a._clear || b.overwriteModelFields;
    z(a, function (e, f) {
      "_clear" !== e && (c && Fi(e), Fi(e, f));
    });
    pi || (pi = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = ti()), (a["gtm.uniqueEventId"] = d), Fi("gtm.uniqueEventId", d));
    return Bx(a);
  }
  function ty(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (tb(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function uy() {
    var a;
    if (ly.length) a = ly.shift();
    else if (ky.length) a = ky.shift();
    else return;
    var b;
    var c = a;
    if (my || !ty(c.message)) b = c;
    else {
      my = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = ti());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        h = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      ky.unshift(h, c);
      if (gk) {
        var m = Ef.ctid;
        if (m) {
          var n,
            p = Lj(Mj());
          n = p && p.context;
          var q = T(71) ? $k(!0) : void 0,
            r = Ef.canonicalContainerId,
            t = ij(G.location.href),
            u = t.hostname + t.pathname,
            v = n && n.fromContainerExecution,
            w = wj.ie,
            x = n && n.source;
          gk &&
            (al || (al = u),
            cl.push(
              m +
                ";" +
                r +
                ";" +
                (v ? 1 : 0) +
                ";" +
                (x || 0) +
                ";" +
                (w ? 1 : 0)
            ),
            (bl = q));
        }
      }
      b = f;
    }
    return b;
  }
  function vy() {
    for (var a = !1, b; !ny && (b = uy()); ) {
      ny = !0;
      delete zi.eventModel;
      Bi();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) ny = !1;
      else {
        e.fromContainerExecution && Gi();
        try {
          if (nb(d))
            try {
              d.call(Di);
            } catch (v) {}
          else if (Array.isArray(d)) {
            var f = d;
            if (l(f[0])) {
              var g = f[0].split("."),
                h = g.pop(),
                m = f.slice(1),
                n = Ci(g.join("."), 2);
              if (null != n)
                try {
                  n[h].apply(n, m);
                } catch (v) {}
            }
          } else {
            var p = void 0;
            if (tb(d))
              a: {
                if (d.length && l(d[0])) {
                  var q = ay[d[0]];
                  if (q && (!e.fromContainerExecution || !by[d[0]])) {
                    p = q(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
            else p = d;
            p && (a = sy(p, e) || a);
          }
        } finally {
          e.fromContainerExecution && Bi(!0);
          var r = d["gtm.uniqueEventId"];
          if ("number" === typeof r) {
            for (var t = jy[String(r)] || [], u = 0; u < t.length; u++)
              ly.push(wy(t[u]));
            t.length && ly.sort(oy);
            delete jy[String(r)];
            r > iy && (iy = r);
          }
          ny = !1;
        }
      }
    }
    return !a;
  }
  function xy() {
    if (T(58)) {
      var a = yy();
    }
    var b = vy();
    if (T(58)) {
    }
    try {
      var c = Jj(),
        d = G[ci.Wa].hide;
      if (d && void 0 !== d[c] && d.end) {
        d[c] = !1;
        var e = !0,
          f;
        for (f in d)
          if (d.hasOwnProperty(f) && !0 === d[f]) {
            e = !1;
            break;
          }
        e && (d.end(), (d.end = null));
      }
    } catch (g) {}
    return b;
  }
  function Jx(a) {
    if (iy < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      jy[b] = jy[b] || [];
      jy[b].push(a);
    } else
      ly.push(wy(a)),
        ly.sort(oy),
        I(function () {
          ny || vy();
        });
  }
  function wy(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var zy = function () {
      function a(f) {
        var g = {};
        if (cy(f)) {
          var h = f;
          f = cy(h) ? h.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = oc(ci.Wa, []),
        c = (di[ci.Wa] = di[ci.Wa] || {});
      !0 === c.pruned && P(83);
      jy = Hx().get();
      Kx();
      $v(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      hy(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < di.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new dy(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var h = f.map(function (q) {
          return a(q);
        });
        ky.push.apply(ky, h);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (P(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof m || m;
        return vy() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      ky.push.apply(ky, e);
      if (yy()) {
        if (T(58)) {
        }
        I(xy);
      }
    },
    yy = function () {
      var a = !0;
      return a;
    };
  function Ay(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = zb();
    return b < c + 3e5 && b > c - 9e5;
  }
  function By(a) {
    return a && 0 === a.indexOf("pending:") ? Ay(a.substr(8)) : !1;
  }
  var Wy = function () {};
  var Xy = function () {};
  Xy.prototype.toString = function () {
    return "undefined";
  };
  var Yy = new Xy();
  function ez(a, b) {
    function c(g) {
      var h = ij(g),
        m = ej(h, "protocol"),
        n = ej(h, "host", !0),
        p = ej(h, "port"),
        q = ej(h, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function fz(a) {
    return gz(a) ? 1 : 0;
  }
  function gz(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = k(a, {});
        k({ arg1: c[d], any_of: void 0 }, e);
        if (fz(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return gg(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < cg.length; g++) {
                var h = cg[g];
                if (b[h]) {
                  f = b[h](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return dg(b, c);
      case "_eq":
        return hg(b, c);
      case "_ge":
        return ig(b, c);
      case "_gt":
        return kg(b, c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return jg(b, c);
      case "_lt":
        return lg(b, c);
      case "_re":
        return fg(b, c, a.ignore_case);
      case "_sw":
        return mg(b, c);
      case "_um":
        return ez(b, c);
    }
    return !1;
  }
  function hz() {
    var a;
    a = void 0 === a ? "" : a;
    var b, c;
    return (
      null == (b = data) ? 0 : null == (c = b.blob) ? 0 : c.hasOwnProperty(1)
    )
      ? String(data.blob[1])
      : a;
  }
  function iz() {
    var a = [
      ["cv", T(82) ? hz() : "2"],
      ["rv", ci.Og],
      [
        "tc",
        $e.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    ci.me && a.push(["x", ci.me]);
    vi.m && a.push(["tag_exp", vi.m]);
    return a;
  }
  function jz() {
    var a = Ui();
    return a.length ? [["exp_geo", a]] : [];
  }
  var kz;
  function lz() {
    try {
      null != kz || (kz = new Intl.DateTimeFormat().resolvedOptions().timeZone);
    } catch (b) {}
    var a;
    return (null == (a = kz) ? 0 : a.length) ? [["exp_tz", kz]] : [];
  }
  function mz(a) {
    if (a.scriptSource) {
      var b;
      try {
        b = Jc().getEntriesByType("resource");
      } catch (g) {}
      if (b) {
        for (var c = {}, d = 0; d < b.length; ++d) {
          var e = b[d],
            f = e.initiatorType;
          if ("script" === f && e.name === a.scriptSource)
            return { xm: d, ym: c };
          c[f] = 1 + (c[f] || 0);
        }
        P(146);
      } else P(145);
    }
  }
  function nz() {
    if (gk && T(70)) {
      var a = Nj();
      if (!a) P(144);
      else if (a.canonicalContainerId) {
        var b = mz(a);
        if (b) {
          var c = !1;
          bk(function (d) {
            if (c) return [];
            d.Ab && (c = !0);
            d.Pf();
            return [
              ["rtg", a.canonicalContainerId],
              ["rlo", b.xm],
              ["slo", b.ym.script || 0],
            ];
          });
        }
      }
    }
  }
  var oz = function () {
      return !1;
    },
    pz = function () {
      var a = {};
      return function (b, c, d) {};
    };
  function qz() {
    var a = rz;
    return function (b, c, d) {
      var e = d && d.event;
      sz(c);
      var f = 0 === b.indexOf("__cvt_") ? void 0 : 1,
        g = new ab();
      z(c, function (r, t) {
        var u = Zc(t, void 0, f);
        void 0 === u && void 0 !== t && P(44);
        g.set(r, u);
      });
      a.m.m.F = uf();
      var h = {
        wj: If(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        Ef:
          void 0 !== e
            ? function (r) {
                return e.bc.Ef(r);
              }
            : void 0,
        hc: function () {
          return b;
        },
        log: function () {},
        pl: { index: d && d.index, type: d && d.type, name: d && d.name },
        wm: !!Ev(b, 3),
        originalEventData: null == e ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (h.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (oz()) {
        var m = pz(),
          n = void 0,
          p = void 0;
        h.eb = {
          Ph: [],
          pe: {},
          vb: function (r, t, u) {
            1 === t && (n = r);
            7 === t && (p = u);
            m(r, t, u);
          },
          yh: Yg(),
        };
        h.log = function (r, t) {
          if (n) {
            var u = Array.prototype.slice.call(arguments, 1);
            m(n, 4, { level: r, source: p, message: u });
          }
        };
      }
      var q = ue(a, h, [b, g]);
      a.m.m.F = void 0;
      q instanceof Ha && "return" === q.type && (q = q.data);
      return J(q, void 0, f);
    };
  }
  function sz(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    nb(b) &&
      (a.gtmOnSuccess = function () {
        I(b);
      });
    nb(c) &&
      (a.gtmOnFailure = function () {
        I(c);
      });
  }
  function tz(a, b) {
    var c = this;
  }
  tz.U = "addConsentListener";
  var uz;
  var vz = function (a) {
    for (var b = 0; b < a.length; ++b)
      if (uz)
        try {
          a[b]();
        } catch (c) {
          P(77);
        }
      else a[b]();
  };
  function wz(a, b, c) {
    var d = this,
      e;
    return e;
  }
  wz.K = "internal.addDataLayerEventListener";
  function xz(a, b, c) {}
  xz.U = "addDocumentEventListener";
  function yz(a, b, c, d) {}
  yz.U = "addElementEventListener";
  function zz(a) {
    return a.J.m;
  }
  function Az(a) {}
  Az.U = "addEventCallback";
  function Qz(a) {}
  Qz.K = "internal.addFormAbandonmentListener";
  function Rz(a, b, c, d) {}
  Rz.K = "internal.addFormData";
  var Sz = {},
    Tz = [],
    Uz = {},
    Vz = 0,
    Wz = 0;
  function cA(a, b) {}
  cA.K = "internal.addFormInteractionListener";
  function jA(a, b) {}
  jA.K = "internal.addFormSubmitListener";
  function oA(a) {}
  oA.K = "internal.addGaSendListener";
  function pA(a) {
    if (!a) return {};
    var b = a.pl;
    return bw(b.type, b.index, b.name);
  }
  function qA(a) {
    return a ? { originatingEntity: pA(a) } : {};
  }
  var sA = function (a, b, c) {
      rA().updateZone(a, b, c);
    },
    uA = function (a, b, c, d, e, f) {
      var g = rA();
      c = c && Db(c, tA);
      for (var h = g.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (g.registerChild(n, Jj(), h)) {
          var p = n,
            q = a,
            r = d,
            t = e,
            u = f;
          if (0 === p.indexOf("GTM-"))
            Tv(p, void 0, !1, { source: 1, fromContainerExecution: !0 });
          else {
            var v = Dx("js", yb());
            Tv(p, void 0, !0, { source: 1, fromContainerExecution: !0 });
            var w = { originatingEntity: t, inheritParentConfig: u };
            T(87) || Ix(v, q, w);
            Ix(Ex(p, r), q, w);
          }
        }
      }
      return h;
    },
    rA = function () {
      var a = di.zones;
      a || (a = di.zones = new vA());
      return a;
    },
    wA = {
      zone: 1,
      cn: 1,
      css: 1,
      ew: 1,
      eq: 1,
      ge: 1,
      gt: 1,
      lc: 1,
      le: 1,
      lt: 1,
      re: 1,
      sw: 1,
      um: 1,
    },
    tA = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
    },
    vA = function () {
      this.m = {};
      this.F = {};
      this.H = 0;
    };
  aa = vA.prototype;
  aa.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.m[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.Dh], b)) return !1;
    for (var e = 0; e < c.Re.length; e++) if (this.F[c.Re[e]].vd(b)) return !0;
    return !1;
  };
  aa.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b))
      return function () {
        return !1;
      };
    for (var c, d = 0; d < a.length && !(c = this.m[a[d]]); d++);
    if (!c)
      return function () {
        return !0;
      };
    for (var e = [], f = 0; f < c.Re.length; f++) {
      var g = this.F[c.Re[f]];
      g.vd(b) && e.push(g);
    }
    if (!e.length)
      return function () {
        return !1;
      };
    var h = this.getIsAllowedFn([c.Dh], b);
    return function (m, n) {
      n = n || [];
      if (!h(m, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].Nl(m, n)) return !0;
      return !1;
    };
  };
  aa.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.m[a[b]];
  };
  aa.createZone = function (a, b) {
    var c = String(++this.H);
    this.F[c] = new xA(a, b);
    return c;
  };
  aa.updateZone = function (a, b, c) {
    var d = this.F[a];
    d && d.H(b, c);
  };
  aa.registerChild = function (a, b, c) {
    var d = this.m[a];
    if ((!d && di[a]) || (!d && Tj(a)) || (d && d.Dh !== b)) return !1;
    if (d) return d.Re.push(c), !1;
    this.m[a] = { Dh: b, Re: [c] };
    return !0;
  };
  var xA = function (a, b) {
    this.F = null;
    this.m = [{ eventId: a, vd: !0 }];
    if (b) {
      this.F = {};
      for (var c = 0; c < b.length; c++) this.F[b[c]] = !0;
    }
  };
  xA.prototype.H = function (a, b) {
    var c = this.m[this.m.length - 1];
    a <= c.eventId || (c.vd !== b && this.m.push({ eventId: a, vd: b }));
  };
  xA.prototype.vd = function (a) {
    for (var b = this.m.length - 1; 0 <= b; b--)
      if (this.m[b].eventId <= a) return this.m[b].vd;
    return !1;
  };
  xA.prototype.Nl = function (a, b) {
    b = b || [];
    if (!this.F || wA[a] || this.F[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.F[b[c]]) return !0;
    return !1;
  };
  function yA(a) {
    var b = di.zones;
    return b
      ? b.getIsAllowedFn(Aj(), a)
      : function () {
          return !0;
        };
  }
  function zA() {
    Hv(Kj(), function (a) {
      var b = a.originalEventData["gtm.uniqueEventId"],
        c = di.zones;
      return c ? c.isActive(Aj(), b) : !0;
    });
    Gv(Kj(), function (a) {
      var b = a.entityId,
        c = a.securityGroups;
      return yA(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
    });
  }
  var AA = function (a, b) {
    this.tagId = a;
    this.se = b;
  };
  function BA(a, b) {
    var c = this,
      d;
    var e = function (v) {
      Gv(
        v,
        function (w) {
          for (
            var x = Fv().getExternalRestrictions(0, Kj()),
              y = ma(x),
              B = y.next();
            !B.done;
            B = y.next()
          ) {
            var A = B.value;
            if (!A(w)) return !1;
          }
          return !0;
        },
        !0
      );
      Hv(
        v,
        function (w) {
          for (
            var x = Fv().getExternalRestrictions(1, Kj()),
              y = ma(x),
              B = y.next();
            !B.done;
            B = y.next()
          ) {
            var A = B.value;
            if (!A(w)) return !1;
          }
          return !0;
        },
        !0
      );
      h && h(new AA(a, v));
    };
    K(this.getName(), ["tagId:!string", "options:?PixieMap"], arguments);
    var f = J(b, this.J, 1) || {},
      g = f.firstPartyUrl,
      h = f.onLoad,
      m = !0 === f.loadByDestination,
      n = !0 === f.isGtmEvent,
      p = !0 === f.siloed;
    vz([
      function () {
        return L(c, "load_google_tags", a, g);
      },
    ]);
    if (m) {
      if (Uj(a)) return;
    } else if (Tj(a)) return;
    var q = 6,
      r = zz(this);
    n && (q = 7);
    "__zone" === r.hc() && (q = 1);
    var t = { source: q, fromContainerExecution: !0, siloed: p };
    if (m) Uv(a, g, t, e);
    else {
      var u = 0 === a.indexOf("GTM-");
      Tv(a, g, !u, t, e);
    }
    h &&
      "__zone" === r.hc() &&
      uA(Number.MIN_SAFE_INTEGER, [a], null, {}, pA(zz(this)));
    d = p ? zj(a) : a;
    return d;
  }
  BA.K = "internal.loadGoogleTag";
  function CA(a) {
    return new Qc("", function (b) {
      var c = this.evaluate(b);
      if (c instanceof Qc)
        return new Qc("", function () {
          var d = za.apply(0, arguments),
            e = this,
            f = k(zz(this));
          f.eventId = a.eventId;
          f.priorityId = a.priorityId;
          f.originalEventData = a.originalEventData;
          var g = d.map(function (m) {
              return e.evaluate(m);
            }),
            h = Ma(this.J);
          h.m = f;
          return c.cb.apply(c, [h].concat(oa(g)));
        });
    });
  }
  function DA(a, b, c) {
    var d = this;
  }
  DA.K = "internal.addGoogleTagRestriction";
  var EA = {},
    FA = [];
  var MA = function (a, b) {};
  MA.K = "internal.addHistoryChangeListener";
  function NA(a, b, c) {}
  NA.U = "addWindowEventListener";
  function OA(a, b) {
    return !0;
  }
  OA.U = "aliasInWindow";
  function PA(a, b, c) {}
  PA.K = "internal.appendRemoteConfigParameter";
  function QA() {
    var a = 2;
    return a;
  }
  function RA(a, b) {
    var c;
    return c;
  }
  RA.U = "callInWindow";
  function SA(a) {}
  SA.U = "callLater";
  function TA(a) {}
  TA.K = "callOnDomReady";
  function UA(a) {}
  UA.K = "callOnWindowLoad";
  function VA(a, b) {
    var c;
    return c;
  }
  VA.K = "internal.computeGtmParameter";
  function WA(a) {
    var b;
    return b;
  }
  WA.K = "internal.copyFromCrossContainerData";
  function XA(a, b) {
    var c;
    var d = Zc(c, this.J, QA());
    void 0 === d && void 0 !== c && P(45);
    return d;
  }
  XA.U = "copyFromDataLayer";
  function YA(a) {
    var b = void 0;
    return b;
  }
  YA.K = "internal.copyFromDataLayerCache";
  function ZA(a) {
    var b;
    return b;
  }
  ZA.U = "copyFromWindow";
  function $A(a) {
    var b = void 0;
    return Zc(b, this.J, QA());
  }
  $A.K = "internal.copyKeyFromWindow";
  function aB(a, b) {
    var c;
    return c;
  }
  aB.K = "internal.copyPreHit";
  function bB(a, b) {
    var c = null,
      d = QA();
    K(this.getName(), ["functionPath:!string", "arrayPath:!string"], arguments);
    L(this, "access_globals", "readwrite", a);
    L(this, "access_globals", "readwrite", b);
    var e = [G, H],
      f = a.split("."),
      g = Fb(f, e),
      h = f[f.length - 1];
    if (void 0 === g) throw Error("Path " + a + " does not exist.");
    var m = g[h];
    if (m && !nb(m)) return null;
    if (m) return Zc(m, this.J, d);
    var n;
    m = function () {
      if (!nb(n.push))
        throw Error("Object at " + b + " in window is not an array.");
      n.push.call(n, arguments);
    };
    g[h] = m;
    var p = b.split("."),
      q = Fb(p, e),
      r = p[p.length - 1];
    if (void 0 === q) throw Error("Path " + p + " does not exist.");
    n = q[r];
    void 0 === n && ((n = []), (q[r] = n));
    c = function () {
      m.apply(m, Array.prototype.slice.call(arguments, 0));
    };
    return Zc(c, this.J, d);
  }
  bB.U = "createArgumentsQueue";
  function cB(a) {
    return Zc(
      function (c) {
        var d = Mw();
        if ("function" === typeof c)
          d(function () {
            c(function (f, g, h) {
              var m = Mw(),
                n = m && m.getByName && m.getByName(f);
              return vk(G.gaplugins.Linker, n).decorate(g, h);
            });
          });
        else if (Array.isArray(c)) {
          var e = String(c[0]).split(".");
          b[1 === e.length ? e[0] : e[1]] && d.apply(null, c);
        } else if ("isLoaded" === c) return !!d.loaded;
      },
      this.J,
      1
    );
  }
  cB.K = "internal.createGaCommandQueue";
  function dB(a) {
    return Zc(
      function () {
        if (!nb(e.push))
          throw Error("Object at " + a + " in window is not an array.");
        e.push.apply(e, Array.prototype.slice.call(arguments, 0));
      },
      this.J,
      QA()
    );
  }
  dB.U = "createQueue";
  function eB(a, b) {
    var c = null;
    return c;
  }
  eB.K = "internal.createRegex";
  function fB() {
    var a = {};
    return a;
  }
  function gB(a) {}
  gB.K = "internal.declareConsentState";
  function hB(a) {
    var b = "";
    return b;
  }
  hB.K = "internal.decodeUrlHtmlEntities";
  function iB(a, b, c) {
    var d;
    return d;
  }
  iB.K = "internal.decorateUrlWithGaCookies";
  function jB(a) {
    var b;
    return b;
  }
  jB.K = "internal.detectUserProvidedData";
  function nB(a, b) {
    return b;
  }
  nB.K = "internal.enableAutoEventOnClick";
  function wB(a, b) {
    return b;
  }
  wB.K = "internal.enableAutoEventOnElementVisibility";
  function xB() {}
  xB.K = "internal.enableAutoEventOnError";
  var yB = {},
    zB = [],
    AB = {},
    BB = 0,
    CB = 0;
  function IB(a, b) {
    var c = this;
    return b;
  }
  IB.K = "internal.enableAutoEventOnFormInteraction";
  function NB(a, b) {
    var c = this;
    return b;
  }
  NB.K = "internal.enableAutoEventOnFormSubmit";
  function SB() {
    var a = this;
  }
  SB.K = "internal.enableAutoEventOnGaSend";
  var TB = {},
    UB = [];
  function aC(a, b) {
    var c = this;
    return b;
  }
  aC.K = "internal.enableAutoEventOnHistoryChange";
  var bC = ["http://", "https://", "javascript:", "file://"];
  function fC(a, b) {
    var c = this;
    return b;
  }
  fC.K = "internal.enableAutoEventOnLinkClick";
  var gC, hC;
  function sC(a, b) {
    var c = this;
    return b;
  }
  sC.K = "internal.enableAutoEventOnScroll";
  function tC(a) {
    return function () {
      if (a.Gc && a.Ic >= a.Gc) a.Ec && G.clearInterval(a.Ec);
      else {
        a.Ic++;
        var b = zb();
        py({
          event: a.eventName,
          "gtm.timerId": a.Ec,
          "gtm.timerEventNumber": a.Ic,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.Gc,
          "gtm.timerStartTime": a.Qe,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Qe,
          "gtm.triggers": a.Rh,
        });
      }
    };
  }
  function uC(a, b) {
    return b;
  }
  uC.K = "internal.enableAutoEventOnTimer";
  var dc = ka(["data-gtm-yt-inspected-"]),
    wC = ["www.youtube.com", "www.youtube-nocookie.com"],
    xC,
    yC = !1;
  function IC(a, b) {
    var c = this;
    return b;
  }
  IC.K = "internal.enableAutoEventOnYouTubeActivity";
  var JC;
  function KC(a) {
    var b = !1;
    return b;
  }
  KC.K = "internal.evaluateMatchingRules";
  var qD = function () {
    var a = !0;
    (ln(7) && ln(9) && ln(10)) || (a = !1);
    return a;
  };
  function lE(a, b, c, d) {}
  lE.K = "internal.executeEventProcessor";
  function mE(a) {
    var b = void 0;
    return Zc(b, this.J, 1);
  }
  mE.K = "internal.executeJavascriptString";
  var nE = function (a) {
    var b;
    return b;
  };
  var oE = null;
  function pE() {
    var a = new ab();
    return a;
  }
  pE.U = "getContainerVersion";
  function qE(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  qE.U = "getCookieValues";
  function rE() {
    return Ui();
  }
  rE.K = "internal.getCountryCode";
  function sE() {
    var a = [];
    return Zc(a);
  }
  sE.K = "internal.getDestinationIds";
  function tE(a, b) {
    var c = null;
    return c;
  }
  tE.K = "internal.getElementAttribute";
  function uE(a) {
    var b = null;
    return b;
  }
  uE.K = "internal.getElementById";
  function vE(a) {
    var b = "";
    return b;
  }
  vE.K = "internal.getElementInnerText";
  function wE(a, b) {
    var c = null;
    return c;
  }
  wE.K = "internal.getElementProperty";
  function xE(a) {
    var b;
    return b;
  }
  xE.K = "internal.getElementValue";
  function yE(a) {
    var b = 0;
    return b;
  }
  yE.K = "internal.getElementVisibilityRatio";
  function zE(a) {
    var b = null;
    return b;
  }
  zE.K = "internal.getElementsByCssSelector";
  function AE(a) {
    var b = void 0;
    return b;
  }
  AE.K = "internal.getEventData";
  var BE = {};
  BE.enableAWFledge = T(20);
  BE.enableAdsConversionValidation = T(12);
  BE.enableAutoPiiOnPhoneAndAddress = T(19);
  BE.enableCachedEcommerceData = T(27);
  BE.enableCcdPreAutoPiiDetection = T(28);
  BE.enableCloudRecommentationsErrorLogging = T(30);
  BE.enableCloudRecommentationsSchemaIngestion = T(31);
  BE.enableCloudRetailInjectPurchaseMetadata = T(33);
  BE.enableCloudRetailLogging = T(32);
  BE.enableCloudRetailPageCategories = T(34);
  BE.enableConsentDisclosureActivity = T(35);
  BE.enableDCFledge = T(39);
  BE.enableDecodeUri = T(48);
  BE.enableDeferAllEnhancedMeasurement = T(40);
  BE.enableEuidAutoMode = T(42);
  BE.enableFormSkipValidation = T(45);
  BE.enableNavigationSwEncryptionVariant = T(62);
  BE.enableNavigationSwExperimentVariant = T(64);
  BE.enableSharedUserId = T(76);
  BE.enableUrlDecodeEventUsage = T(81);
  BE.enableZoneConfigInChildContainers = T(83);
  BE.renameOnoToNonGaiaRemarketing = T(88);
  BE.useEnableAutoEventOnFormApis = T(95);
  BE.autoPiiEligible = Yi();
  function CE() {
    return Zc(BE);
  }
  CE.K = "internal.getFlags";
  function DE() {
    return new Vc(Yy);
  }
  DE.K = "internal.getHtmlId";
  function EE(a, b) {
    var c;
    return c;
  }
  EE.K = "internal.getProductSettingsParameter";
  function FE(a, b) {
    var c;
    return c;
  }
  FE.U = "getQueryParameters";
  function GE(a, b) {
    var c;
    return c;
  }
  GE.U = "getReferrerQueryParameters";
  function HE(a) {
    var b = "";
    return b;
  }
  HE.U = "getReferrerUrl";
  function IE() {
    return Ti["1"] || "";
  }
  IE.K = "internal.getRegionCode";
  function JE(a, b) {
    var c;
    return c;
  }
  JE.K = "internal.getRemoteConfigParameter";
  function KE(a) {
    var b = "";
    return b;
  }
  KE.U = "getUrl";
  function LE() {
    L(this, "get_user_agent");
    return lc.userAgent;
  }
  LE.U = "getUserAgent";
  function SE() {
    return (G.gaGlobal = G.gaGlobal || {});
  }
  var TE = function () {
      var a = SE();
      a.hid = a.hid || qb();
      return a.hid;
    },
    UE = function (a, b) {
      var c = SE();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var BF = function (a) {
      this.F = a;
      this.H = "";
      this.m = this.F;
    },
    CF = function (a, b) {
      a.m = b;
      return a;
    },
    DF = function (a, b) {
      a.M = b;
      return a;
    };
  function EF(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  function FF(a, b, c) {
    if (a) {
      var d = a || [];
      if (Array.isArray(d))
        for (
          var e = Va(b) ? b : {}, f = ma(d), g = f.next();
          !g.done;
          g = f.next()
        )
          c(g.value, e);
    }
  }
  var VF = window,
    WF = document,
    XF = function (a) {
      var b = VF._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        WF.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && !0 === VF["ga-disable-" + a])
      )
        return !0;
      try {
        var c = VF.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = Un("AMP_TOKEN", String(WF.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return WF.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function hG(a) {
    z(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[Q.g.Za] || {};
    z(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var pG = function (a, b) {};
  function oG(a, b) {
    var c = function () {};
    return c;
  }
  function qG(a, b, c) {}
  var rG = oG;
  var sG = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]));
  };
  function tG(a, b, c) {
    var d = this;
    K(
      this.getName(),
      ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"],
      arguments
    );
    var e = b ? J(b) : {};
    vz([
      function () {
        return L(d, "configure_google_tags", a, e);
      },
    ]);
    var f = c ? J(c) : {},
      g = zz(this);
    f.originatingEntity = pA(g);
    Ix(Ex(a, e), g.eventId, f);
  }
  tG.K = "internal.gtagConfig";
  function uG() {
    var a = {};
    return a;
  }
  function wG(a, b) {}
  wG.U = "gtagSet";
  function xG(a, b) {}
  xG.U = "injectHiddenIframe";
  function yG(a, b, c, d, e) {}
  yG.K = "internal.injectHtml";
  var CG = {};
  function EG(a, b, c, d) {}
  var FG = Object.freeze({ dl: 1, id: 1 }),
    GG = {};
  function HG(a, b, c, d) {}
  EG.U = "injectScript";
  HG.K = "internal.injectScript";
  function IG(a) {
    var b = !0;
    return b;
  }
  IG.U = "isConsentGranted";
  function JG() {
    return Wi();
  }
  JG.K = "internal.isDmaRegion";
  function KG(a) {
    var b = !1;
    return b;
  }
  KG.K = "internal.isEntityInfrastructure";
  var LG = function () {
    var a = Tg(function (b) {
      zz(this).log("error", b);
    });
    a.U = "JSON";
    return a;
  };
  function MG(a) {
    var b = void 0;
    return Zc(b);
  }
  MG.K = "internal.legacyParseUrl";
  var NG = function () {
      return !1;
    },
    OG = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {},
    };
  function PG() {
    try {
      L(this, "logging");
    } catch (c) {
      return;
    }
    if (!console) return;
    for (
      var a = Array.prototype.slice.call(arguments, 0), b = 0;
      b < a.length;
      b++
    )
      a[b] = J(a[b], this.J);
    console.log.apply(console, a);
  }
  PG.U = "logToConsole";
  function QG(a, b) {}
  QG.K = "internal.mergeRemoteConfig";
  function RG(a, b, c) {
    c = void 0 === c ? !0 : c;
    var d = [];
    return Zc(d);
  }
  RG.K = "internal.parseCookieValuesFromString";
  function SG(a) {
    var b = void 0;
    return b;
  }
  SG.U = "parseUrl";
  function TG(a) {}
  TG.K = "internal.processAsNewEvent";
  function UG(a, b, c) {
    var d;
    return d;
  }
  UG.K = "internal.pushToDataLayer";
  function VG(a) {
    var b = !1;
    return b;
  }
  VG.U = "queryPermission";
  function WG() {
    var a = "";
    return a;
  }
  WG.U = "readCharacterSet";
  function XG() {
    return ci.Wa;
  }
  XG.K = "internal.readDataLayerName";
  function YG() {
    var a = "";
    return a;
  }
  YG.U = "readTitle";
  function ZG(a, b) {
    var c = this;
  }
  ZG.K = "internal.registerCcdCallback";
  function $G(a) {
    return !0;
  }
  $G.K = "internal.registerDestination";
  var aH = Object.freeze(["config", "event", "get", "set"]);
  function bH(a, b, c) {}
  bH.K = "internal.registerGtagCommandListener";
  function cH(a, b) {
    var c = !1;
    return c;
  }
  cH.K = "internal.removeDataLayerEventListener";
  function dH(a, b) {}
  dH.K = "internal.removeFormData";
  function eH() {}
  eH.U = "resetDataLayer";
  function fH(a, b, c, d) {}
  fH.K = "internal.sendGtagEvent";
  function gH(a, b, c) {}
  gH.U = "sendPixel";
  function hH(a, b) {}
  hH.K = "internal.setAnchorHref";
  function iH(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  iH.U = "setCookie";
  function jH(a) {}
  jH.K = "internal.setCorePlatformServices";
  function kH(a, b) {}
  kH.K = "internal.setDataLayerValue";
  function lH(a) {}
  lH.U = "setDefaultConsentState";
  function mH(a, b) {}
  mH.K = "internal.setDelegatedConsentType";
  function nH(a, b) {}
  nH.K = "internal.setFormAction";
  function oH(a, b, c) {}
  oH.K = "internal.setInCrossContainerData";
  function pH(a, b, c) {
    return !1;
  }
  pH.U = "setInWindow";
  function qH(a, b, c) {}
  qH.K = "internal.setProductSettingsParameter";
  function rH(a, b, c) {}
  rH.K = "internal.setRemoteConfigParameter";
  function sH(a, b, c, d) {
    var e = this;
  }
  sH.U = "sha256";
  function tH(a, b, c) {}
  tH.K = "internal.sortRemoteConfigParameters";
  var uH = {},
    vH = {};
  uH.U = "templateStorage";
  uH.getItem = function (a) {
    var b = null;
    return b;
  };
  uH.setItem = function (a, b) {};
  uH.removeItem = function (a) {};
  uH.clear = function () {};
  function wH(a, b) {
    var c = !1;
    return c;
  }
  wH.K = "internal.testRegex";
  var xH = function (a) {
    var b;
    return b;
  };
  function yH(a) {
    var b;
    return b;
  }
  yH.K = "internal.unsiloId";
  function zH(a) {}
  zH.U = "updateConsentState";
  var AH;
  function BH(a, b, c) {
    AH = AH || new ch();
    AH.add(a, b, c);
  }
  function CH(a, b) {
    var c = (AH = AH || new ch());
    if (c.F.hasOwnProperty(a))
      throw (
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.m.hasOwnProperty(a))
      throw (
        "Attempting to add a private function with an existing API name: " +
        a +
        "."
      );
    c.F[a] = nb(b) ? zg(a, b) : Ag(a, b);
  }
  function DH() {
    return function (a) {
      var b;
      var c = AH;
      if (c.m.hasOwnProperty(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.F.hasOwnProperty(a))) {
          var e = !1,
            f = this.J.m;
          if (f) {
            var g = f.hc();
            if (g) {
              0 !== g.indexOf("__cvt_") && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var h = c.F.hasOwnProperty(a) ? c.F[a] : void 0;
          b = h;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  var EH = function () {
    var a = function (c) {
        return CH(c.K, c);
      },
      b = function (c) {
        return BH(c.U, c);
      };
    b(tz);
    b(Az);
    b(OA);
    b(RA);
    b(SA);
    b(XA);
    b(ZA);
    b(bB);
    b(dB);
    b(pE);
    b(qE);
    b(FE);
    b(GE);
    b(HE);
    b(KE);
    b(wG);
    b(xG);
    b(EG);
    b(IG);
    b(PG);
    b(SG);
    b(VG);
    b(WG);
    b(YG);
    b(gH);
    b(iH);
    b(lH);
    b(pH);
    b(sH);
    b(uH);
    b(zH);
    b(LG());
    BH("Math", Fg());
    BH("Object", ah);
    BH("TestHelper", eh());
    BH("assertApi", Bg);
    BH("assertThat", Cg);
    BH("decodeUri", Gg);
    BH("decodeUriComponent", Hg);
    BH("encodeUri", Ig);
    BH("encodeUriComponent", Jg);
    BH("fail", Pg);
    BH("generateRandom", Qg);
    BH("getTimestamp", Rg);
    BH("getTimestampMillis", Rg);
    BH("getType", Sg);
    BH("makeInteger", Ug);
    BH("makeNumber", Vg);
    BH("makeString", Wg);
    BH("makeTableMap", Xg);
    BH("mock", $g);
    BH("fromBase64", nE, !("atob" in G));
    BH("localStorage", OG, !NG());
    BH("toBase64", xH, !("btoa" in G));
    a(wz);
    a(Rz);
    a(cA);
    a(jA);
    a(oA);
    a(DA);
    a(MA);
    a(PA);
    a(TA);
    a(UA);
    a(WA);
    a(YA);
    a($A);
    a(aB);
    a(cB);
    a(eB);
    a(gB);
    a(hB);
    a(iB);
    a(jB);
    a(nB);
    a(wB);
    a(xB);
    a(IB);
    a(NB);
    a(SB);
    a(aC);
    a(fC);
    a(sC);
    a(uC);
    a(IC);
    a(Kg);
    a(KC);
    a(lE);
    a(mE);
    a(rE);
    a(sE);
    a(tE);
    a(uE);
    a(vE);
    a(wE);
    a(xE);
    a(yE);
    a(zE);
    a(AE);
    a(CE);
    a(DE);
    a(EE);
    a(IE);
    a(JE);
    a(tG);
    a(yG);
    a(HG);
    a(JG);
    a(KG);
    a(MG);
    a(BA);
    a(QG);
    a(RG);
    a(TG);
    a(UG);
    a(XG);
    a(ZG);
    a($G);
    a(bH);
    a(cH);
    a(dH);
    a(fH);
    a(hH);
    a(jH);
    a(kH);
    a(mH);
    a(nH);
    a(oH);
    a(qH);
    a(rH);
    a(tH);
    a(wH);
    a(yH);
    CH("internal.CrossContainerSchema", fB());
    CH("internal.GtagSchema", uG());
    return DH();
  };
  var rz;
  function FH() {
    rz.m.m.M = function (a, b, c) {
      di.SANDBOXED_JS_SEMAPHORE = di.SANDBOXED_JS_SEMAPHORE || 0;
      di.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        di.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function GH(a) {
    void 0 !== a &&
      z(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          si[e] = si[e] || [];
          si[e].push(b);
        }
      });
  }
  var HH = encodeURI,
    Y = encodeURIComponent,
    IH = Array.isArray,
    JH = function (a, b, c) {
      wc(a, b, c);
    },
    KH = function (a, b) {
      if (!a) return !1;
      var c = ej(ij(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    LH = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var jI = G.clearTimeout,
    kI = G.setTimeout,
    lI = function (a, b, c) {
      if (Ln()) {
        b && I(b);
      } else return tc(a, b, c);
    },
    mI = function () {
      return G.location.href;
    },
    nI = function (a) {
      return ej(ij(a), "fragment");
    },
    oI = function (a) {
      return fj(ij(a));
    },
    pI = function (a, b) {
      return Ci(a, b || 2);
    },
    qI = function (a, b, c) {
      return b ? qy(a, b, c) : py(a);
    },
    rI = function (a, b) {
      G[a] = b;
    },
    sI = function (a, b, c) {
      b && (void 0 === G[a] || (c && !G[a])) && (G[a] = b);
      return G[a];
    },
    tI = function (a, b) {
      if (Ln()) {
        b && I(b);
      } else vc(a, b);
    },
    uI = function (a) {
      return !!Fz(a, "init", !1);
    },
    vI = function (a) {
      Dz(a, "init", !0);
    };

  var wI = {};
  var Z = { securityGroups: {} };
  (Z.securityGroups.e = ["google"]),
    (Z.__e = function (a) {
      return String(a.vtp_gtmCachedValues.event);
    }),
    (Z.__e.C = "e"),
    (Z.__e.isVendorTemplate = !0),
    (Z.__e.priorityOverride = 0),
    (Z.__e.isInfrastructure = !0),
    (Z.__e.runInSiloedMode = !0);
  (Z.securityGroups.f = ["google"]),
    (Z.__f = function (a) {
      var b = pI("gtm.referrer", 1) || H.referrer;
      return b
        ? a.vtp_component && "URL" != a.vtp_component
          ? ej(
              ij(String(b)),
              a.vtp_component,
              a.vtp_stripWww,
              a.vtp_defaultPages,
              a.vtp_queryKey
            )
          : oI(String(b))
        : String(b);
    }),
    (Z.__f.C = "f"),
    (Z.__f.isVendorTemplate = !0),
    (Z.__f.priorityOverride = 0),
    (Z.__f.isInfrastructure = !0),
    (Z.__f.runInSiloedMode = !1);
  (Z.securityGroups.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Z.__access_globals = b;
        Z.__access_globals.C = "access_globals";
        Z.__access_globals.isVendorTemplate = !0;
        Z.__access_globals.priorityOverride = 0;
        Z.__access_globals.isInfrastructure = !1;
        Z.__access_globals.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            h = 0;
          h < c.length;
          h++
        ) {
          var m = c[h],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!l(r)) throw d(p, {}, "Key must be a string.");
            if ("read" === q) {
              if (-1 < e.indexOf(r)) return;
            } else if ("write" === q) {
              if (-1 < f.indexOf(r)) return;
            } else if ("readwrite" === q) {
              if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return;
            } else if ("execute" === q) {
              if (-1 < g.indexOf(r)) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          O: a,
        };
      });
    })();
  (Z.securityGroups.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.C = "u";
        Z.__u.isVendorTemplate = !0;
        Z.__u.priorityOverride = 0;
        Z.__u.isInfrastructure = !0;
        Z.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : pI("gtm.url", 1)) || mI();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return oI(String(c));
        var e = ij(String(c)),
          f;
        if ("QUERY" === d)
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              h = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            n = g
              ? Array.isArray(h)
                ? h
                : String(h).replace(/\s+/g, "").split(",")
              : [String(h)];
            for (var p = 0; p < n.length; p++) {
              var q = ej(e, "QUERY", void 0, void 0, n[p]);
              if (void 0 != q && (!m || "" !== q)) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = ej(
            e,
            d,
            "HOST" == d ? b[a("vtp_stripWww")] : void 0,
            "PATH" == d ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();

  (Z.securityGroups.load_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, firstPartyUrl: d };
      }
      (function (b) {
        Z.__load_google_tags = b;
        Z.__load_google_tags.C = "load_google_tags";
        Z.__load_google_tags.isVendorTemplate = !0;
        Z.__load_google_tags.priorityOverride = 0;
        Z.__load_google_tags.isInfrastructure = !1;
        Z.__load_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_allowFirstPartyUrls || !1,
          e = b.vtp_allowedFirstPartyUrls || "specific",
          f = b.vtp_urls || [],
          g = b.vtp_tagIds || [],
          h = b.vtp_createPermissionError;
        return {
          assert: function (m, n, p) {
            (function (q) {
              if (!l(q)) throw h(m, {}, "Tag ID must be a string.");
              if ("any" !== c && ("specific" !== c || -1 === g.indexOf(q)))
                throw h(m, {}, "Prohibited Tag ID: " + q + ".");
            })(n);
            (function (q) {
              if (void 0 !== q) {
                if (!l(q)) throw h(m, {}, "First party URL must be a string.");
                if (d) {
                  if ("any" === e) return;
                  if ("specific" === e)
                    try {
                      if (sg(ij(q), f)) return;
                    } catch (r) {
                      throw h(m, {}, "Invalid first party URL filter.");
                    }
                }
                throw h(m, {}, "Prohibited first party URL: " + q);
              }
            })(p);
          },
          O: a,
        };
      });
    })();

  (Z.securityGroups.logging = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__logging = b;
        Z.__logging.C = "logging";
        Z.__logging.isVendorTemplate = !0;
        Z.__logging.priorityOverride = 0;
        Z.__logging.isInfrastructure = !1;
        Z.__logging.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function (e) {
            var f;
            if ((f = "all" !== c && !0)) {
              var g = !1;
              f = !g;
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          O: a,
        };
      });
    })();

  (Z.securityGroups.configure_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, configuration: d };
      }
      (function (b) {
        Z.__configure_google_tags = b;
        Z.__configure_google_tags.C = "configure_google_tags";
        Z.__configure_google_tags.isVendorTemplate = !0;
        Z.__configure_google_tags.priorityOverride = 0;
        Z.__configure_google_tags.isInfrastructure = !1;
        Z.__configure_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_tagIds || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!l(g)) throw e(f, {}, "Tag ID must be a string.");
            if ("any" !== c && ("specific" !== c || -1 === d.indexOf(g)))
              throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
          },
          O: a,
        };
      });
    })();

  var xI = {};
  xI.dataLayer = Di;
  xI.callback = function (a) {
    ri.hasOwnProperty(a) && nb(ri[a]) && ri[a]();
    delete ri[a];
  };
  xI.bootstrap = 0;
  xI._spx = !1;
  function yI() {
    di[Jj()] = di[Jj()] || xI;
    Sj();
    Wj() ||
      z(Xj(), function (d, e) {
        Uv(d, e.transportUrl, e.context);
        P(92);
      });
    Cb(si, Z.securityGroups);
    var a = Lj(Mj()),
      b,
      c = null == a ? void 0 : null == (b = a.context) ? void 0 : b.source;
    (2 !== c && 4 !== c && 3 !== c) || P(142);
    gf = yf;
  }
  (function (a) {
    function b() {
      m = H.documentElement.getAttribute("data-tag-assistant-present");
      Ay(m) && (h = g.Ak);
    }
    if (!G["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (H.referrer) {
        var d = ij(H.referrer);
        c = "cct.google" === dj(d, "host");
      }
      if (!c) {
        var e = Vn("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c &&
        ((G["__TAGGY_INSTALLED"] = !0),
        tc("https://cct.google/taggy/agent.js"));
    }
    var f = function (u) {
        var v = "GTM",
          w = "GTM";
        ii && ((v = "OGT"), (w = "GTAG"));
        var x = G["google.tagmanager.debugui2.queue"];
        x ||
          ((x = []),
          (G["google.tagmanager.debugui2.queue"] = x),
          tc(
            "https://" +
              ci.Gd +
              "/debug/bootstrap?id=" +
              Ef.ctid +
              "&src=" +
              w +
              "&cond=" +
              u +
              "&gtm=" +
              Nn()
          ));
        var y = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: nc,
            containerProduct: v,
            debug: !1,
            id: Ef.ctid,
            targetRef: { ctid: Ef.ctid, isDestination: wj.ie },
            aliases: yj(),
            destinations: Bj(),
          },
        };
        y.data.resume = function () {
          a();
        };
        ci.ek && (y.data.initialPublish = !0);
        x.push(y);
      },
      g = { gn: 1, Bk: 2, Lk: 3, fk: 4, Ak: 5 },
      h = void 0,
      m = void 0,
      n = ej(G.location, "query", !1, void 0, "gtm_debug");
    Ay(n) && (h = g.Bk);
    if (!h && H.referrer) {
      var p = ij(H.referrer);
      "tagassistant.google.com" === dj(p, "host") && (h = g.Lk);
    }
    if (!h) {
      var q = Vn("__TAG_ASSISTANT");
      q.length && q[0].length && (h = g.fk);
    }
    h || b();
    if (!h && By(m)) {
      var r = function () {
          if (t) return !0;
          t = !0;
          b();
          h && nc ? f(h) : a();
        },
        t = !1;
      xc(
        H,
        "TADebugSignal",
        function () {
          r();
        },
        !1
      );
      G.setTimeout(function () {
        r();
      }, 200);
    } else h && nc ? f(h) : a();
  })(function () {
    try {
      Qj();
      if (T(58)) {
      }
      ql().F();
      jn();
      Sl();
      var a = Kj();
      if (tj().canonical[a]) {
        var b = di.zones;
        b && b.unregisterChild(Aj());
        Fv().removeExternalRestrictions(Kj());
      } else {
        vi.m = "";
        vi.F = vi.M;
        vi.H = "";
        vi.ba = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
        vi.T = "ad_storage|analytics_storage|ad_user_data";
        vi.Va = "";
        Rv();
        for (
          var c = data.resource || {}, d = c.macros || [], e = 0;
          e < d.length;
          e++
        )
          Xe.push(d[e]);
        for (var f = c.tags || [], g = 0; g < f.length; g++) $e.push(f[g]);
        for (var h = c.predicates || [], m = 0; m < h.length; m++)
          Ze.push(h[m]);
        for (var n = c.rules || [], p = 0; p < n.length; p++) {
          for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
            var u = q[t][0];
            r[u] = Array.prototype.slice.call(q[t], 1);
            ("if" !== u && "unless" !== u) || ff(r[u]);
          }
          Ye.push(r);
        }
        bf = Z;
        cf = fz;
        Af = new Hf();
        var v = data.sandboxed_scripts,
          w = data.security_groups;
        a: {
          var x = data.runtime || [],
            y = data.runtime_lines;
          rz = new se();
          FH();
          We = qz();
          var B = rz,
            A = EH(),
            E = new Qc("require", A);
          E.Kb();
          B.m.m.set("require", E);
          for (var D = [], C = 0; C < x.length; C++) {
            var F = x[C];
            if (!Array.isArray(F) || 3 > F.length) {
              if (0 === F.length) continue;
              break a;
            }
            y && y[C] && y[C].length && rf(F, y[C]);
            try {
              rz.execute(F), T(68) && gk && 50 === F[0] && D.push(F[1]);
            } catch (xa) {}
          }
          T(68) && (hf = D);
        }
        if (void 0 !== v)
          for (var M = ["sandboxedScripts"], N = 0; N < v.length; N++) {
            var U = v[N].replace(/^_*/, "");
            si[U] = M;
          }
        GH(w);
        yI();
        if (!mi)
          for (var X = Wi() ? xi(vi.T) : xi(vi.ba), O = 0; O < Gl.length; O++) {
            var R = Gl[O],
              ia = R,
              da = X[R] ? "granted" : "denied";
            ll().implicit(ia, da);
          }
        zy();
        Vv = !1;
        Wv = 0;
        if (
          ("interactive" === H.readyState && !H.createEventObject) ||
          "complete" === H.readyState
        )
          Yv();
        else {
          xc(H, "DOMContentLoaded", Yv);
          xc(H, "readystatechange", Yv);
          if (H.createEventObject && H.documentElement.doScroll) {
            var ca = !0;
            try {
              ca = !G.frameElement;
            } catch (xa) {}
            ca && Zv();
          }
          xc(G, "load", Yv);
        }
        ey = !1;
        "complete" === H.readyState ? gy() : xc(G, "load", gy);
        gk && (bk(uk), G.setInterval(tk, 864e5));
        bk(iz);
        bk(Zw);
        bk(vu);
        bk(Bm);
        bk(jx);
        bk(am);
        bk(dt);
        bk(fl);
        T(68) && (bk(dx), bk(ex), bk(fx));
        gk && T(55) && (bk(jz), bk(lz));
        nz();
        bk(jl);
        Wy();
        Si(1);
        zA();
        qi = zb();
        xI.bootstrap = qi;
        if (T(58)) {
        }
      }
    } catch (xa) {
      if ((Si(4), gk)) {
        var Ca = nk(!0, !0);
        wc(Ca);
      }
    }
  });
})();
