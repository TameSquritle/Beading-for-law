(globalThis.webpackChunkextract_css = globalThis.webpackChunkextract_css || []).push([
    ["47623"], {
        236001: function(d) {
            "use strict";
            d.exports = {}
        },
        292216: function(d) {
            "use strict";
            d.exports = {}
        },
        891784: function(d) {
            "use strict";
            d.exports = {}
        },
        481714: function(d) {
            "use strict";
            d.exports = {}
        },
        279831: function(d) {
            "use strict";
            d.exports = {}
        },
        250367: function(d, m) {
            "use strict";
            Object.defineProperty(m, "__esModule", {
                value: !0
            }), m.default = void 0;
            var n;
            (function(o) {
                o.SUB_FOOTER = "SUB_FOOTER", o.PILL = "PILL", o.HIDDEN = "HIDDEN"
            })(n || (n = {}));
            var t = m.default = n;
            d.exports = m.default
        },
        724577: function(d) {
            d.exports = {
                "2a55ca78e8124468fd12f5631b591477": "Cookie banner",
                "5c9e9d0cbf6046deb40eaa0a5c1722df": "These cookies provide quantitative measures of website visitors. With the usage of these cookies we are able to count visits and traffic sources to improve the performance of our site.",
                "5d34f2ee7358fc231e5c0fb44bb6194d": "Close",
                "67db752e6310686617e98c22c85b3963": "Necessary",
                "6bf1c5ed97ddc6828e7cd5159df2a240": "Performance and Analytics",
                "74472054366bb6c5316e7afadad1093e": "These cookies are used by advertising companies to serve ads that are relevant to your interests.",
                "7f55fe8fa38cccf52495082b8a3b514e": "Required to enable core site functionality and to remember user preferences and choices, such as language preferences or customized settings.",
                ab24934bbb24336ecf14f4c74753cb74: "On",
                b14f9710c8c55c42330cec28b8e5a412: "Manage previously selected cookie options",
                bd5b0ea753d0acb71633f9924dd99e2e: "Advertising",
                c2796a555df59ff64708a37dca691b54: "Save Preferences",
                e1424f67804c73cbeabb38dc6ab1c5b4: "Manage Cookies",
                eed68b0b0145ca4107add1b0eba25227: "Off",
                f5d47dd8f48aea89af7ca857bb5999d2: "Cookie Preferences",
                f75292dded9e49e53481e31e94f738f7: "Always on"
            }
        },
        418008: function(d, m, n) {
            var t = "Expected a function",
                o = NaN,
                e = "[object Symbol]",
                g = /^\s+|\s+$/g,
                S = /^[-+]0x[0-9a-f]+$/i,
                b = /^0b[01]+$/i,
                L = /^0o[0-7]+$/i,
                P = parseInt,
                M = typeof n.g == "object" && n.g && n.g.Object === Object && n.g,
                k = typeof self == "object" && self && self.Object === Object && self,
                D = M || k || Function("return this")(),
                B = Object.prototype,
                Z = B.toString,
                Y = Math.max,
                de = Math.min,
                oe = function() {
                    return D.Date.now()
                };

            function ae(a, v, T) {
                var N, H, U, W, A, j, X = 0,
                    re = !1,
                    J = !1,
                    s = !0;
                if (typeof a != "function") throw new TypeError(t);
                v = ue(v) || 0, se(T) && (re = !!T.leading, J = "maxWait" in T, U = J ? Y(ue(T.maxWait) || 0, v) : U, s = "trailing" in T ? !!T.trailing : s);

                function O(r) {
                    var i = N,
                        y = H;
                    return N = H = void 0, X = r, W = a.apply(y, i), W
                }

                function f(r) {
                    return X = r, A = setTimeout(I, v), re ? O(r) : W
                }

                function q(r) {
                    var i = r - j,
                        y = r - X,
                        _ = v - i;
                    return J ? de(_, U - y) : _
                }

                function p(r) {
                    var i = r - j,
                        y = r - X;
                    return j === void 0 || i >= v || i < 0 || J && y >= U
                }

                function I() {
                    var r = oe();
                    if (p(r)) return u(r);
                    A = setTimeout(I, q(r))
                }

                function u(r) {
                    return A = void 0, s && N ? O(r) : (N = H = void 0, W)
                }

                function c() {
                    A !== void 0 && clearTimeout(A), X = 0, N = j = H = A = void 0
                }

                function E() {
                    return A === void 0 ? W : u(oe())
                }

                function h() {
                    var r = oe(),
                        i = p(r);
                    if (N = arguments, H = this, j = r, i) {
                        if (A === void 0) return f(j);
                        if (J) return A = setTimeout(I, v), O(j)
                    }
                    return A === void 0 && (A = setTimeout(I, v)), W
                }
                return h.cancel = c, h.flush = E, h
            }

            function se(a) {
                var v = typeof a;
                return !!a && (v == "object" || v == "function")
            }

            function fe(a) {
                return !!a && typeof a == "object"
            }

            function me(a) {
                return typeof a == "symbol" || fe(a) && Z.call(a) == e
            }

            function ue(a) {
                if (typeof a == "number") return a;
                if (me(a)) return o;
                if (se(a)) {
                    var v = typeof a.valueOf == "function" ? a.valueOf() : a;
                    a = se(v) ? v + "" : v
                }
                if (typeof a != "string") return a === 0 ? a : +a;
                a = a.replace(g, "");
                var T = b.test(a);
                return T || L.test(a) ? P(a.slice(2), T ? 2 : 8) : S.test(a) ? o : +a
            }
            d.exports = ae
        },
        821783: function(d, m, n) {
            "use strict";
            n.d(m, {
                ZP: () => I
            });
            var t = n(845076),
                o = n.n(t),
                e = n(174161);
            const g = "gdpr-cookie-banner",
                S = "manage-cookies-bar",
                b = "manage-cookies-overlay";
            var L = n(231351);
            const P = "gdpr-cookie-banner";

            function M(u) {
                return n(741449)(`./${P}.${u}.yaml`)
            }

            function k() {
                const {
                    t: u,
                    T: c
                } = (0, L.Z)(M);
                return {
                    t: u,
                    T: c
                }
            }
            var D = n(418008),
                B = n.n(D);

            function Z() {
                const [u, c] = (0, e.useState)(window.innerWidth), E = (0, e.useMemo)(() => B()(() => c(window.innerWidth), 250), []);
                return (0, e.useEffect)(() => (window.addEventListener("resize", E), () => {
                    window.removeEventListener("resize", E)
                }), [E]), u
            }
            var Y = n(629200),
                de = n(292216);
            const oe = 576,
                ae = () => {},
                fe = u => {
                    const {
                        acceptCookiesLabel: c,
                        bannerPosition: E,
                        bannerText: h,
                        declineCookiesLabel: r,
                        hasManageCookies: i,
                        hasDeclineCookies: y,
                        manageButtonRef: _,
                        manageCookiesLabel: ce,
                        theme: F = "",
                        onAccept: ee = ae,
                        onDecline: ne = ae,
                        toggleManageOverlay: R = ae,
                        isPreview: x
                    } = u, {
                        t: w
                    } = k(), K = E !== Y.t.TOP && E !== Y.t.BOTTOM, $ = Z();
                    let l = "wide";
                    (K || $ < oe) && (l = "narrow");
                    const G = o()("accept", "sqs-button-element--primary", "sqs-cookie-banner-v2-accept", "sqs-cookie-banner-v2-cta"),
                        Q = o()("decline", "sqs-button-element--secondary", "sqs-cookie-banner-v2-deny", "sqs-cookie-banner-v2-cta"),
                        V = o()("button-group", "sqs-cookie-banner-v2-cta-container"),
                        C = o()("disclaimer-text", "sqs-cookie-banner-v2-text"),
                        z = e.createElement("button", {
                            className: G,
                            onClick: ee
                        }, e.createElement("span", null, c)),
                        ie = e.createElement("button", {
                            className: Q,
                            onClick: ne
                        }, e.createElement("span", null, r)),
                        le = e.createElement("button", {
                            className: "manage sqs-button-element--tertiary",
                            onClick: () => {
                                R(!0)
                            },
                            ref: _
                        }, e.createElement("span", null, ce)),
                        te = e.createElement("div", {
                            className: V
                        }, i && le, y && ie, z),
                        ge = e.createElement("div", {
                            className: V
                        }, z, y && ie, i && le);
                    return e.createElement("section", {
                        "data-section-theme": F,
                        "aria-label": w("Cookie banner", null, {
                            project: "gdpr-cookie-banner"
                        }),
                        className: o()(g, E, F, {
                            bar: !K,
                            popup: K,
                            "full-styling": !x
                        })
                    }, e.createElement("p", {
                        className: C,
                        dangerouslySetInnerHTML: {
                            __html: h
                        }
                    }), l === "wide" ? te : ge)
                };
            var me = n(250367),
                ue = n.n(me),
                a = n(891784);
            const T = u => {
                const {
                    t: c
                } = k(), {
                    savedPreferencesLayout: E = ue().PILL,
                    savedPreferencesText: h = c("Cookie Preferences", null, {
                        project: "gdpr-cookie-banner"
                    }),
                    theme: r = "",
                    openOverlay: i,
                    manageButtonRef: y
                } = u;
                return e.createElement("section", {
                    "data-dynamic-strings": "",
                    "data-section-theme": r,
                    "aria-label": c("Manage previously selected cookie options", null, {
                        project: "gdpr-cookie-banner"
                    }),
                    className: o()(S, r, E)
                }, e.createElement("button", {
                    className: "manage-bar-action",
                    onClick: i,
                    ref: y
                }, h))
            };
            var N = n(994336),
                H = n.n(N),
                U = n(999762),
                W = n(160553),
                A = n.n(W),
                j = n(236001);
            const re = u => {
                    let {
                        checked: c,
                        onChange: E,
                        inputProps: h
                    } = u;
                    const r = () => {
                            E(!c)
                        },
                        {
                            t: i
                        } = k();
                    return e.createElement("div", {
                        className: "toggle-wrapper"
                    }, e.createElement("p", {
                        "aria-hidden": "true"
                    }, c ? i("On", null, {
                        project: "gdpr-cookie-banner",
                        notes: "A toggle is on"
                    }) : i("Off", null, {
                        project: "gdpr-cookie-banner",
                        notes: "A toggle is off"
                    })), e.createElement("label", {
                        className: o()("sqs-toggle", {
                            checked: c,
                            "sqs-toggle--on": c,
                            "sqs-toggle--off": !c
                        })
                    }, e.createElement("input", A()({
                        type: "checkbox",
                        checked: c,
                        onChange: r
                    }, h))))
                },
                s = () => e.createElement("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e.createElement("path", {
                    d: "M7 5.58594L12.293 0.292969L13.7072 1.70718L8.41421 7.00015L13.7072 12.2931L12.293 13.7073L7 8.41436L1.70718 13.7072L0.292969 12.293L5.58579 7.00015L0.292969 1.70733L1.70718 0.293119L7 5.58594Z",
                    fill: "white"
                }));
            var O = n(481714);
            const f = u => {
                    const c = H().get(u);
                    return c ? c === "true" : !1
                },
                I = {
                    Banner: fe,
                    ManageBar: T,
                    ManageOverlay: u => {
                        let {
                            theme: c = "",
                            cookieNames: E,
                            onClose: h,
                            onSave: r
                        } = u;
                        const {
                            performance: i,
                            marketing: y
                        } = E, [_, ce] = (0, e.useState)(f(i)), [F, ee] = (0, e.useState)(f(y)), {
                            t: ne,
                            T: R
                        } = k(), x = (0, e.useRef)(null), w = (0, e.useId)(), K = () => {
                            var C;
                            return (((C = x.current) === null || C === void 0 ? void 0 : C.ownerDocument) || document).documentElement
                        }, $ = (0, e.useCallback)(C => {
                            C.code === "Escape" && (C.stopPropagation(), h())
                        }, [h]);
                        (0, e.useEffect)(() => {
                            const C = K();
                            return C.addEventListener("keyup", $),
                                function() {
                                    C.removeEventListener("keyup", $)
                                }
                        }, [$]), (0, e.useEffect)(() => (0, U.containFocus)({
                            container: x.current,
                            root: K()
                        }), [x]);
                        const l = () => {
                                const C = [];
                                _ && C.push(i), F && C.push(y), r(C)
                            },
                            G = {
                                necessary: {
                                    title: e.createElement(R, {
                                        project: "gdpr-cookie-banner",
                                        notes: "This is a type of cookie. Necessary cookies are essential for websites and cannot be disabled."
                                    }, "Necessary"),
                                    description: e.createElement(R, {
                                        project: "gdpr-cookie-banner"
                                    }, "Required to enable core site functionality and to remember user preferences and choices, such as language preferences or customized settings.")
                                },
                                performance: {
                                    title: e.createElement(R, {
                                        project: "gdpr-cookie-banner",
                                        notes: "This is a type of cookie. Performance cookies collect website data and analytics."
                                    }, "Performance and Analytics"),
                                    description: e.createElement(R, {
                                        project: "gdpr-cookie-banner"
                                    }, "These cookies provide quantitative measures of website visitors. With the usage of these cookies we are able to count visits and traffic sources to improve the performance of our site.")
                                },
                                marketing: {
                                    title: e.createElement(R, {
                                        project: "gdpr-cookie-banner",
                                        notes: "This is a type of cookie. Marketing cookies are used to deliver targeted advertisements."
                                    }, "Advertising"),
                                    description: e.createElement(R, {
                                        project: "gdpr-cookie-banner"
                                    }, "These cookies are used by advertising companies to serve ads that are relevant to your interests.")
                                }
                            },
                            Q = [{
                                name: "necessary"
                            }, {
                                name: "performance",
                                checked: _,
                                onChange: ce
                            }, {
                                name: "marketing",
                                checked: F,
                                onChange: ee
                            }],
                            V = C => {
                                let {
                                    name: z,
                                    checked: ie,
                                    onChange: le
                                } = C;
                                const te = (0, e.useId)();
                                return e.createElement(e.Fragment, null, le ? e.createElement("div", {
                                    className: "category-selection"
                                }, e.createElement("h4", {
                                    id: `${te}-title`
                                }, G[z].title), e.createElement(re, {
                                    checked: !!ie,
                                    onChange: le,
                                    inputProps: {
                                        "aria-labelledby": `${te}-title`,
                                        "aria-describedby": `${te}-description`
                                    }
                                })) : e.createElement("div", {
                                    className: "category-selection"
                                }, e.createElement("h4", null, G[z].title), e.createElement("p", null, ne("Always on", null, {
                                    project: "gdpr-cookie-banner",
                                    notes: "This refers to the state of necessary website cookies, they are always on, or in other words they are always enabled"
                                }))), e.createElement("p", {
                                    className: "category-description",
                                    id: `${te}-description`
                                }, G[z].description))
                            };
                        return e.createElement("div", {
                            className: "manage-overlay-wrapper",
                            "data-dynamic-strings": "",
                            role: "button"
                        }, e.createElement("div", {
                            className: "manage-cookies-overlay-backdrop",
                            onClick: h,
                            role: "presentation"
                        }), e.createElement("div", {
                            "data-section-theme": c,
                            "aria-labelledby": w + "-heading",
                            className: o()(b, c),
                            role: "dialog",
                            ref: x
                        }, e.createElement("button", {
                            type: "button",
                            className: "close-icon",
                            "aria-label": ne("Close", null, {
                                project: "gdpr-cookie-banner"
                            }),
                            onClick: h
                        }, e.createElement(s, null)), e.createElement("h3", {
                            id: w + "-heading"
                        }, e.createElement(R, {
                            project: "gdpr-cookie-banner",
                            notes: "This is the title for a feature that allows site visitors to manage their cookie settings."
                        }, "Manage Cookies")), Q.map((C, z) => {
                            let {
                                name: ie,
                                checked: le,
                                onChange: te
                            } = C;
                            return e.createElement(e.Fragment, {
                                key: ie
                            }, z > 0 && e.createElement("hr", null), e.createElement(V, {
                                name: ie,
                                checked: le,
                                onChange: te
                            }))
                        }), e.createElement("div", {
                            className: "button-group"
                        }, e.createElement("button", {
                            className: "save sqs-button-element--primary",
                            onClick: l
                        }, e.createElement(R, {
                            project: "gdpr-cookie-banner",
                            notes: "This is a button that saves a site visitor's cookie preferences."
                        }, "Save Preferences")))))
                    }
                }
        },
        629200: function(d, m, n) {
            "use strict";
            n.d(m, {
                t: () => t
            });
            let t = function(o) {
                return o.TOP = "TOP", o.BOTTOM_LEFT = "BOTTOM_LEFT", o.BOTTOM_RIGHT = "BOTTOM_RIGHT", o.TOP_LEFT = "TOP_LEFT", o.TOP_RIGHT = "TOP_RIGHT", o.BOTTOM = "BOTTOM", o
            }({})
        },
        741449: function(d, m, n) {
            var t = {
                "./gdpr-cookie-banner.en-US.yaml": "724577"
            };

            function o(g) {
                var S = e(g);
                return n(S)
            }

            function e(g) {
                if (!n.o(t, g)) {
                    var S = new Error("Cannot find module '" + g + "'");
                    throw S.code = "MODULE_NOT_FOUND", S
                }
                return t[g]
            }
            o.keys = function() {
                return Object.keys(t)
            }, o.resolve = e, d.exports = o, o.id = 741449
        },
        469231: function(d, m, n) {
            "use strict";
            n.d(m, {
                D8: () => Y,
                GA: () => Z,
                ZP: () => de,
                ny: () => t,
                pS: () => k,
                v6: () => B,
                yM: () => e
            });
            const t = "/site-styles",
                o = `${t}/fonts`,
                e = `${t}/buttons`,
                g = `${t}/product-items`,
                S = `${t}/accessories`,
                b = S,
                L = `${b}/image-blocks`,
                P = `${b}/site-spacing`,
                M = `${b}/animations`,
                k = `${S}/cookie-banner`,
                D = `${t}/colors`,
                B = `${D}/palette-editor`,
                Z = `${D}/theme-editor`,
                Y = `${t}/forms`,
                de = {
                    ROOT: t,
                    FONTS: o,
                    COLORS: D,
                    PALETTE_EDITOR: B,
                    THEME_EDITOR: Z,
                    BUTTONS: e,
                    ACCESSORIES: S,
                    IMAGE_BLOCKS: L,
                    PRODUCT_ITEMS: g,
                    SITE_SPACING: P,
                    ANIMATIONS: M,
                    FORMS: Y,
                    COOKIE_BANNER: k
                }
        },
        564709: function(d, m, n) {
            "use strict";
            n.r(m), n.d(m, {
                default: () => J,
                renderCookieBannerManager: () => re
            });
            var t = n(174161),
                o = n(233284),
                e = n(418789),
                g = n.n(e),
                S = n(916661),
                b = n(649297),
                L = n(469231),
                P = n(687048),
                M = n.n(P),
                k = n(821783),
                D = n(994336),
                B = n.n(D),
                Z = n(58553);
            const Y = ["SS_MID", "SS_MATTR", "SS_lastvisit", "user_segment"],
                de = ["ss_cid", "ss_cpvisit", "ss_cvisit", "ss_cvr", "ss_cvt"],
                oe = ["ss_cookieAllowed"],
                ae = s => {
                    let {
                        performanceGranted: O,
                        marketingGranted: f
                    } = s;
                    if (O && f) return;
                    const q = {
                        expires: new Date(0).toUTCString()
                    };
                    let p = oe;
                    O || (p = p.concat(de)), f || (p = p.concat(Y)), p.forEach(I => {
                        B().set(I, "", q)
                    })
                };
            var se = n(118415);

            function fe(s, O) {
                const f = (0, t.useRef)(!1);
                return (0, t.useEffect)(() => {
                    !O && f.current && s.current && s.current.focus(), f.current = !1
                }, [s, O]), f
            }
            const me = fe,
                ue = s => {
                    window.fbq && window.facebookPixelRequiresConsentUpdates && window.fbq("consent", s ? "grant" : "revoke")
                },
                a = s => {
                    window.gtag && window.googleAnalyticsRequiresConsentUpdates && (s ? window.gtag("consent", "update", {
                        analytics_storage: "granted"
                    }) : window.gtag("consent", "update", {
                        analytics_storage: "denied"
                    }))
                },
                v = s => {
                    let {
                        marketing: O,
                        performance: f
                    } = s;
                    ue(O), a(f)
                },
                T = {
                    performance: "ss_performanceCookiesAllowed",
                    marketing: "ss_marketingCookiesAllowed"
                },
                N = [T.performance, T.marketing],
                H = () => N.some(s => !!B().get(s)),
                U = () => {
                    M()(window.onCookieBannerInteraction) && window.onCookieBannerInteraction()
                };

            function W(s) {
                const {
                    cookiesControlledOutsideOfBanner: O
                } = s, [f, q] = (0, t.useState)(!!s.forceShowCookieBanner), [p, I] = (0, t.useState)(H()), [u, c] = (0, t.useState)(!1), E = (0, t.useRef)(null), h = me(E, u), i = {
                    path: "/",
                    expires: new Date(Date.now() + 1e3 * 60 * 60 * 24 * 30).toUTCString()
                }, y = (s.hasDeclineCookies || s.hasManageCookies) && s.savedPreferencesLayout !== "HIDDEN";
                (0, t.useEffect)(() => {
                    const l = G => {
                        q(G.detail.forceShow)
                    };
                    return document.addEventListener(se.j, l), () => {
                        document.removeEventListener(se.j, l)
                    }
                }, []), (0, t.useEffect)(() => {
                    O && ae({
                        performanceGranted: B().get(T.performance) === "true",
                        marketingGranted: B().get(T.marketing) === "true"
                    })
                }, [O]);
                const _ = () => {
                        f || (N.forEach(l => {
                            B().set(l, "true", i)
                        }), I(!0), v({
                            performance: !0,
                            marketing: !0
                        }), U())
                    },
                    ce = () => {
                        f || (N.forEach(l => {
                            B().set(l, "false", i)
                        }), I(!0), v({
                            performance: !1,
                            marketing: !1
                        }), U())
                    },
                    F = l => {
                        l || (h.current = !0), c(l)
                    },
                    ee = l => {
                        if (f) return;
                        N.forEach(Q => {
                            const V = l.includes(Q) ? "true" : "false";
                            B().set(Q, V, i)
                        }), I(!0), c(!1);
                        const G = Object.keys(T).reduce((Q, V) => (Q[V] = l.includes(T[V]), Q), {});
                        v(G), U()
                    },
                    ne = () => {
                        c(!0)
                    },
                    R = { ...s,
                        onAccept: _,
                        onDecline: ce,
                        onSaveManageSettings: ee,
                        toggleManageOverlay: F,
                        showManageOverlay: u,
                        cookieNames: T,
                        manageButtonRef: E
                    },
                    x = "cookie-banner-mount-point";
                let w = document.querySelector(`.${x}`);
                w || (w = document.createElement("div"), w.classList.add(x), (document.body.querySelector("#siteWrapper") || document.body).prepend(w));
                const K = s.bannerPosition === "TOP" && document.body.querySelector(".sqs-announcement-bar-dropzone") || w,
                    $ = t.createElement(k.ZP.ManageOverlay, {
                        theme: s.theme,
                        cookieNames: T,
                        onClose: () => {
                            F(!1)
                        },
                        onSave: ee
                    });
                return p && !f ? y ? t.createElement(Z.Z, null, t.createElement(k.ZP.ManageBar, {
                    savedPreferencesLayout: s.savedPreferencesLayout,
                    savedPreferencesText: s.savedPreferencesText,
                    theme: s.theme,
                    manageButtonRef: E,
                    openOverlay: ne
                }), u && $) : null : t.createElement(Z.Z, null, (0, o.createPortal)(t.createElement(k.ZP.Banner, R), K), u && $)
            }
            var A = n(279831);
            const j = `/config${L.pS}`,
                X = "cookie-banner-manager",
                re = function() {
                    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var O, f;
                    const q = (O = window.Static) === null || O === void 0 ? void 0 : O.SQUARESPACE_CONTEXT,
                        {
                            cookieSettings: p,
                            pageType: I
                        } = q || {};
                    if (!(p && b.Z.shouldShowCookieBanner({
                            settings: p,
                            urlSearch: window.location.search
                        }))) return;
                    const {
                        cookieBannerCtaText: c,
                        cookieBannerText: E,
                        cookieBannerOptOutCtaText: h,
                        cookieBannerHasOptOut: r,
                        cookieBannerHasManageCookies: i,
                        cookieBannerManageCookiesLabel: y,
                        cookieBannerSavedPreferencesLayout: _,
                        cookieBannerSavedPreferencesText: ce,
                        cookieBannerTheme: F,
                        cookieBannerThemeName: ee,
                        isRestrictiveCookiePolicyEnabled: ne
                    } = p, R = s.theme || (S.Z.isSevenOne() ? ee : `legacy-${F.toLowerCase()}`), x = s.bannerPosition || p.cookieBannerPosition, w = ((f = window.top) === null || f === void 0 ? void 0 : f.location.pathname) === j, K = I === g().SPLASH_PAGE, $ = {
                        acceptCookiesLabel: c,
                        bannerPosition: x,
                        bannerText: E,
                        cookiesControlledOutsideOfBanner: ne,
                        declineCookiesLabel: h,
                        forceShowCookieBanner: w,
                        hasDeclineCookies: r,
                        hasManageCookies: i,
                        manageCookiesLabel: y,
                        savedPreferencesLayout: _,
                        savedPreferencesText: ce,
                        theme: R
                    };
                    let l = document.querySelector(`.${X}`);
                    l || (l = document.createElement("div"), l.classList.add(X), K && l.classList.add("cover-page"), (document.body.querySelector("#siteWrapper") || document.body).appendChild(l)), (0, o.render)(t.createElement(W, $), l)
                },
                J = re
        },
        328690: function(d, m, n) {
            "use strict";
            n.d(m, {
                Z: () => b
            });
            var t = n(174161),
                o = n(216581),
                e = n(714487),
                g = n(308607);
            const b = L => {
                let {
                    translationLocale: P,
                    formattingLocale: M,
                    children: k
                } = L;
                return t.createElement(o.Z.Provider, {
                    value: {
                        translationLocale: P,
                        formattingLocale: M,
                        cldrLoader: g.Z,
                        ...e.Td
                    }
                }, k)
            }
        },
        58553: function(d, m, n) {
            "use strict";
            n.d(m, {
                Z: () => M
            });
            var t = n(174161),
                o = n(684353),
                e = n(691985),
                g = n(589242),
                S = n(328690),
                b = n(119325);

            function L() {
                return (e.D === null || e.D === void 0 ? void 0 : e.D.website.language) || (0, b.A)() || g.Z.defaultLocale
            }

            function P() {
                return o.translationLocale
            }
            const M = k => {
                let {
                    children: D
                } = k;
                return t.createElement(S.Z, {
                    translationLocale: P(),
                    formattingLocale: L()
                }, D)
            }
        },
        119325: function(d, m, n) {
            "use strict";
            n.d(m, {
                A: () => g,
                q: () => S
            });
            var t = n(589242),
                o = n(994882);
            const e = new o.LocaleResolver(t.Z.translationFiles);

            function g() {
                let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window;
                var L, P, M;
                return b == null || (M = b.Static) === null || M === void 0 || (P = M.SQUARESPACE_CONTEXT) === null || P === void 0 || (L = P.website) === null || L === void 0 ? void 0 : L.language
            }

            function S() {
                return e.resolveLocale(g()).languageRegion
            }
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/734b9a97df737f0a/async-gdpr-cookie-banner-bf4c3cba28acdc19-min.en-US.js.map